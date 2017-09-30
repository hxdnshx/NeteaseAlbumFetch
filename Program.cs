using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using System.Runtime.Remoting.Channels;
using System.Xml.Linq;
using Mono.Options;
using System.Security.Cryptography;
using Newtonsoft.Json.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using HtmlAgilityPack;
using SQLite;

namespace NeteaseBirthdayAlbum
{

    public class DataItem
    {
        [Unique]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Artist { get; set; }
        [Indexed]
        public long PublishTime { get; set; }
    }

    public class NeteaseAlbumFetch
    {
        private CancellationTokenSource isCancel;
        protected CancellationToken waitToken => isCancel.Token;

        public int Index { get; set; }
        public int EndIndex { get; set; }
        private Task fetchJob;
        private HttpClient client;

        public NeteaseAlbumFetch()
        {
            Index = 10000;
            EndIndex = 10001;
            var baseAddress = new Uri("http://music.163.com");
            var cookieContainer = new CookieContainer();
            var handler = new HttpClientHandler() { CookieContainer = cookieContainer };
            client = new HttpClient() { };
            client.DefaultRequestHeaders.Add("User-Agent", "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A356 Safari/604.1");
            //client.DefaultRequestHeaders.Add("Content-Type", "application /x-www-form-urlencoded");
            client.DefaultRequestHeaders.Add("Referer", "http://music.163.com/discover/album");
            client.DefaultRequestHeaders.Add("Origin", "http://music.163.com");
            client.DefaultRequestHeaders.Add("Host", "music.163.com");
            client.DefaultRequestHeaders.Add("Accept", "");
            client.DefaultRequestHeaders.Add("Accept-Encoding", "gzip, deflate");
            client.DefaultRequestHeaders.Add("Accept-Language", "zh-CN,zh;q=0.8");

            //Build Netease cookie
            {
                var md5 = new MD5CryptoServiceProvider();
                var output = md5.ComputeHash(Encoding.Default.GetBytes(DateTime.Now.ToString()));
                var txt = BitConverter.ToString(output).Replace("-", "");
                cookieContainer.Add(baseAddress, new Cookie("_ntes_nnid", System.Uri.EscapeDataString("40de4d19ea87765b219a37c2bd384018," + DateTime.Now.ToUnixTime())));
                cookieContainer.Add(baseAddress, new Cookie("_iuqxldmzr_", "32"));
                cookieContainer.Add(baseAddress, new Cookie("_ntes_nuid", "40de4d19ea87765b219a37c2bd384018"));
                cookieContainer.Add(baseAddress, new Cookie("JSESSIONID-WYYY", "2HzpRaPTJ5WYYzUsgAapT7PH92MNlJjXTUXKYrKD2UZ5gb%5CaIiISsN55srzcdVjknn84lqTTu54RKME9WBJ%2F3VYvsZp9zFiKOP5HB2eDUg9PzzIS75v43cTy3f5vbROS7qc23k0TzeNDlI40PHFICBaTNU0SdRFBsIwM3UaqZ51Gy3K%2F%3A1506742519551"));
                //0a7832d10af8c459b5ab29f0d1448cc1

            }
        }

        public int GetMaxAlbumId()
        {
            var content = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("params", "KIPzOMIwhetCVAgSg0VwHQSn4Z9E0NOS60SJt8RoV1zxOfUSs0GccFm8fkfU1XFHPU8FUsjHdTlreOgdD0RZFtf0XmVVF5b8AmAFSHzzxNbMP/KyU1FDfxkkx/urLMhT627M5pOsHKJ4XwDi+856Fg=="),
                    new KeyValuePair<string, string>("encSecKey", "075198cb6be2e4a14edf5ca821fbd142388d99459ee3e67e87b8a5aeab81279bca444b2b0ffa9fd894ce70f517bec2a98607884f0c988be667a1ede5a0eb2b1e96f072e223e29429980fbd51f448fe1f000f3093a7f47b02872d4d5676013f6fbb5d28b9149b4c0b5d0bb531874009bf69a74661adf36910e3b71d6a43a969ef"),
                });
            var result = client.PostAsync("http://music.163.com/weapi/album/new?csrf_token=",
                content).Result;
            var r = result.Content.ReadAsByteArrayAsync().Result;
            var decompressed = Decompress_GZip(r);
            string str = Encoding.UTF8.GetString(decompressed);
            JObject obj = JObject.Parse(str);
            var maxval = obj["albums"].Select(token => token["id"].Value<int>()).Max();
            Console.WriteLine("Maximum Album Id fetched : " + maxval);
            return maxval;
        }

        private static readonly Regex jsonfinder = new Regex("window\\.REDUX_STATE = ([^\n]+});");
        //From : https://stackoverflow.com/questions/13879911/decompress-a-gzip-compressed-http-response-chunked-encoding
        public static byte[] Decompress_GZip(byte[] gzip)
        {
            using (GZipStream stream = new GZipStream(new MemoryStream(gzip),
                                       CompressionMode.Decompress))
            {
                byte[] buffer = new byte[1024];
                using (MemoryStream memory = new MemoryStream())
                {
                    int count = 0;
                    do
                    {
                        count = stream.Read(buffer, 0, 1024);
                        if (count > 0)
                        {
                            memory.Write(buffer, 0, count);
                        }
                    }
                    while (count > 0);
                    return memory.ToArray();
                }
            }
        }

        public void Start()
        {
            isCancel = new CancellationTokenSource();
            fetchJob = Task.Factory.StartNew(() => { Run(isCancel.Token); }, isCancel.Token);
        }

        protected void Run(CancellationToken token)
        {
            for (; Index < EndIndex; Index++)
            {
                var result = Encoding.UTF8.GetString(
                    Decompress_GZip(
                        client.GetAsync("http://music.163.com/m/album?id=" + Index)
                            .Result.Content.ReadAsByteArrayAsync().Result));
                var match = jsonfinder.Match(result);
                if (match.Success)
                {
                    var jsontxt = match.Groups[1].Value;
                    var json = JObject.Parse(jsontxt)["Album"]["info"];
                    if (json != null)
                    {
                        var albumName = json["name"].Value<string>();
                        var albumArtist = json["artist"]["name"].Value<string>();
                        var pubDate = (json["publishTime"].Value<long>() / 1000).FromUnixTime();
                        var id = json["id"].Value<int>();
                        onFetched?.Invoke(albumName, albumArtist, pubDate, id);
                    }
                }
                token.WaitHandle.WaitOne(150);
                if (token.IsCancellationRequested)
                    break;
            }
        }

        public bool WaitUntilFinished(int millisecondsTimeout)
        {
            return fetchJob.Wait(millisecondsTimeout);
        }

        public void Stop()
        {
            if (fetchJob.Status != TaskStatus.Running)
            {
                isCancel.Dispose();
                return;
            }
            isCancel.Cancel();
            try
            {
                fetchJob.Wait();
            }
            catch (AggregateException e)
            {
                foreach (var v in e.InnerExceptions)
                    Console.WriteLine(e.Message + " " + v.Message);
            }
            finally
            {
                isCancel.Dispose();
            }
        }

        public Action<string, string, DateTime,int> onFetched = null;
    }


    class Program
    {
        

        static void Main(string[] args)
        {
            DateTime fndDate=new DateTime(1997,8,11);
            bool isDebug = false;
            int targetAlbumId = 99999;
            int startIndex = 10000;
            NeteaseAlbumFetch fetch = new NeteaseAlbumFetch();
            
            var p  = new OptionSet()
            {
                {"d", "display debug message", v => isDebug = true },
                {"f=","Save results to a file", v =>
                {
                    var conn = new SQLiteConnection(v);
                    conn.CreateTable<DataItem>();
                    if(conn.ExecuteScalar<int>("select count(*) from DataItem")>0)
                        startIndex = Math.Max(startIndex, conn.ExecuteScalar<int>("select max(ID) from DataItem")+1);
                    fetch.onFetched += (string name, string artist, DateTime pubTime, int id) =>
                    {
                        conn.Insert(new DataItem
                        {
                            ID = id,
                            Name = name,
                            Artist = artist,
                            PublishTime = pubTime.ToUnixTime()
                        });
                    };
                } },
                {"s=","Start from specified index", v =>
                {
                    try
                    {
                        startIndex = Math.Max(startIndex,int.Parse(v));
                    }
                    catch (Exception e)
                    {
                        Console.WriteLine("Error : Invalid startIndex " + v);
                    }
                } }
            };
            fetch.onFetched += (string name, string artist, DateTime pubTime, int id) =>
            {
                if( fndDate.Year==pubTime.Year &&
                    fndDate.Month == pubTime.Month &&
                    fndDate.Day == pubTime.Day)
                Console.WriteLine($"{name}\t{artist}\t{pubTime:yyyy-MM-dd}\t{id}\r\n");
            };
 
             List <string> extra = p.Parse(args);
            if (extra.Count == 0)
            {
                Console.WriteLine("Using : NeteaseBirthdayAlbum [-d] yyyy-mm-dd");
                return;
            }
            else
            {
                try
                {
                    fndDate = DateTime.Parse(extra.First());
                }
                catch (Exception e)
                {
                    Console.WriteLine($"Error : Invalid Date {extra.First()}");
                }
            }


            fetch.Index = startIndex;
            fetch.EndIndex = fetch.GetMaxAlbumId();
            fetch.Start();
            fetch.WaitUntilFinished(-1);

        }


    }

    public static class DateHelper
    {
        public static DateTime FromUnixTime(this long unixTime)
        {
            return epoch.AddSeconds(unixTime);
        }
        private static readonly DateTime epoch = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

        public static long ToUnixTime(this DateTime date)
        {
            return Convert.ToInt64((date.ToUniversalTime() - epoch).TotalSeconds);
        }
    }
}
