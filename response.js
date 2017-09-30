(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    }
    ;
    NEJ.P = function(ET6N) {
        if (!ET6N || !ET6N.length)
            return null;
        var baC5H = window;
        for (var a = ET6N.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; baC5H = baC5H[a[i]] = baC5H[a[i]] || {},
        i++)
            ;
        return baC5H
    }
    ;
    NEJ.Q = function(bM5R, ET6N) {
        bM5R = bM5R || NEJ.O;
        var bs5x = ET6N.split(".");
        for (var i = 0, l = bs5x.length; i < l; i++) {
            bM5R = bM5R[bs5x[i]];
            if (!bM5R)
                break
        }
        return bM5R
    }
    ;
    NEJ.C = function() {
        var bMJ5O = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bEk3x = function(C4G, bu5z) {
            for (var x in bu5z)
                if (C4G == bu5z[x])
                    return x;
            return null
        };
        var btH0x = {
            cq5v: 0,
            bj5o: 1,
            bA5F: 2,
            bR5W: 3,
            bG5L: 4,
            eF7y: 5,
            jD9u: 6,
            ei7b: 7
        }
          , tC2x = {
            cu5z: 0,
            bk5p: 1,
            bF5K: 2,
            cc5h: 3,
            bL5Q: 4,
            gd8V: 5,
            ki9Z: 6,
            fR8J: 7
        };
        return function() {
            var fn7g = function() {
                this.bEU3x();
                return this.cq5v.apply(this, arguments)
            };
            fn7g.prototype.bEU3x = NEJ.F;
            fn7g.prototype.cq5v = NEJ.F;
            fn7g.O4S = function(Bu4y, bNB6v) {
                if (bMJ5O(Bu4y))
                    return;
                if (bNB6v == null || !!bNB6v)
                    NEJ.X(this, Bu4y, bMJ5O);
                this.bQP8H = Bu4y;
                this.cj5o = Bu4y.prototype;
                var bE5J = function() {};
                bE5J.prototype = Bu4y.prototype;
                this.prototype = new bE5J;
                var Ew5B = this.prototype;
                Ew5B.constructor = this;
                var dS7L;
                for (var x in btH0x) {
                    dS7L = bEk3x(btH0x[x], tC2x);
                    if (!dS7L || !this.cj5o[x])
                        continue;
                    Ew5B[x] = function(T5Y) {
                        return function() {
                            this[T5Y].apply(this, arguments)
                        }
                    }(dS7L)
                }
                var CN5S = {};
                for (var x in tC2x) {
                    dS7L = bEk3x(tC2x[x], btH0x);
                    if (!dS7L || !this.cj5o[dS7L])
                        continue;
                    CN5S[dS7L] = Bu4y;
                    Ew5B[x] = function(T5Y) {
                        return function() {
                            var o4s, bE5J = this.btC0x[T5Y], bbN6H = bE5J.prototype[T5Y];
                            this.btC0x[T5Y] = bE5J.bQP8H || Bu4y;
                            if (!!bbN6H)
                                o4s = bbN6H.apply(this, arguments);
                            this.btC0x[T5Y] = Bu4y;
                            return o4s
                        }
                    }(dS7L)
                }
                Ew5B.bEU3x = function() {
                    this.btC0x = NEJ.X({}, CN5S)
                }
                ;
                Ew5B.cBT8L = Ew5B.cu5z;
                return Ew5B
            }
            ;
            return fn7g
        }
    }();
    NEJ.X = function(fM8E, bP5U, dG7z) {
        if (!fM8E || !bP5U)
            return fM8E;
        dG7z = dG7z || NEJ.F;
        for (var x in bP5U) {
            if (bP5U.hasOwnProperty(x) && !dG7z(bP5U[x], x))
                fM8E[x] = bP5U[x]
        }
        return fM8E
    }
    ;
    NEJ.EX = function(fM8E, bP5U) {
        if (!fM8E || !bP5U)
            return fM8E;
        for (var x in fM8E) {
            if (fM8E.hasOwnProperty(x) && bP5U[x] != null)
                fM8E[x] = bP5U[x]
        }
        return fM8E
    }
    ;
    var HZ7S = Function.prototype;
    HZ7S.ek7d = function(kC9t, KW7P) {
        var f = NEJ.F
          , KW7P = KW7P || f
          , kC9t = kC9t || f
          , dg6a = this;
        return function() {
            var d4h = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            kC9t(d4h);
            if (!d4h.stopped) {
                d4h.value = dg6a.apply(this, d4h.args);
                KW7P(d4h)
            }
            return d4h.value
        }
    }
    ;
    HZ7S.g4k = function() {
        var bg5l = arguments
          , fM8E = arguments[0]
          , btx0x = this;
        return function() {
            var va2x = NEJ.R.slice.call(bg5l, 1);
            NEJ.R.push.apply(va2x, arguments);
            return btx0x.apply(fM8E || window, va2x)
        }
    }
    ;
    HZ7S.eb7U = function() {
        var bg5l = arguments
          , fM8E = NEJ.R.shift.call(bg5l)
          , btx0x = this;
        return function() {
            NEJ.R.push.apply(arguments, bg5l);
            return btx0x.apply(fM8E || window, arguments)
        }
    }
    ;
    var HZ7S = String.prototype;
    if (!HZ7S.trim) {
        HZ7S.trim = function() {
            var cS6M = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(cS6M, "")
            }
        }()
    }
    if (!window.MWF)
        window.MWF = NEJ;
    if (!window.mwf)
        window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , N4R = c4g("nej.p")
      , bbI6C = window.navigator.platform
      , sJ2x = window.navigator.userAgent;
    var kj9a = {
        mac: bbI6C,
        win: bbI6C,
        linux: bbI6C,
        ipad: sJ2x,
        ipod: sJ2x,
        iphone: bbI6C,
        android: sJ2x
    };
    N4R.bbH6B = kj9a;
    for (var x in kj9a)
        kj9a[x] = (new RegExp(x,"i")).test(kj9a[x]);
    kj9a.ios = kj9a.ipad || kj9a.iphone || kj9a.ipod;
    kj9a.tablet = kj9a.ipad;
    kj9a.desktop = kj9a.mac || kj9a.win || kj9a.linux && !kj9a.android;
    var hS8K = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    N4R.dk6e = hS8K;
    if (/msie\s+(.*?);/i.test(sJ2x) || /trident\/.+rv:([\d\.]+)/i.test(sJ2x)) {
        hS8K.engine = "trident";
        hS8K.browser = "ie";
        hS8K.version = RegExp.$1;
        hS8K.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var or0x = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        hS8K.release = or0x[document.documentMode] || or0x[parseInt(hS8K.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sJ2x)) {
        hS8K.engine = "webkit";
        hS8K.release = RegExp.$1 || "";
        hS8K.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(sJ2x)) {
        hS8K.engine = "gecko";
        hS8K.release = RegExp.$1 || "";
        hS8K.browser = "firefox";
        hS8K.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(sJ2x))
            hS8K.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(sJ2x)) {
        hS8K.engine = "presto";
        hS8K.release = RegExp.$1 || "";
        hS8K.browser = "opera";
        hS8K.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(sJ2x))
            hS8K.version = RegExp.$1 || ""
    }
    if (hS8K.browser == "unknow") {
        var or0x = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = or0x.length, T5Y; i < l; i++) {
            T5Y = or0x[i] == "safari" ? "version" : or0x[i];
            if ((new RegExp(T5Y + "/(.*?)(?=\\s|$)","i")).test(sJ2x)) {
                hS8K.browser = or0x[i];
                hS8K.version = RegExp.$1.trim();
                break
            }
        }
    }
    N4R.bOH6B = {};
    var bbE6y = hS8K.engine != "trident";
    N4R.mp0x = {
        gecko: hS8K.engine != "gecko",
        webkit: hS8K.engine != "webkit",
        presto: hS8K.engine != "presto",
        trident0: bbE6y || hS8K.release > "2.0",
        trident1: bbE6y || hS8K.release < "6.0",
        trident2: bbE6y || hS8K.release > "3.0",
        trident: bbE6y || hS8K.release >= "6.0"
    }
}
)();
(function() {
    var hT8L = NEJ.P("nej.c")
      , Q5V = {};
    var bto0x = function() {
        var cS6M = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(W5b) {
            W5b = W5b || "";
            if (cS6M.test(W5b))
                return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var RL1x = function() {
        var bPI6C = function(i4m, bu5z) {
            if (!i4m || !i4m.length)
                return;
            for (var i = 0, l = i4m.length, kZ9Q; i < l; i++) {
                kZ9Q = i4m[i];
                if (kZ9Q.indexOf("://") > 0)
                    bu5z[bto0x(kZ9Q)] = kZ9Q
            }
        };
        var bd5i = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function(bP5U) {
            hT8L.FM6G("root", bP5U.root || "/res/");
            var bsS0x, fz7s = hT8L.z4D("root");
            for (var x in bd5i) {
                bsS0x = bd5i[x];
                hT8L.FM6G(x, bP5U[bsS0x.name] || fz7s + bsS0x.dft)
            }
            var Bc4g = bP5U.p_csrf;
            if (Bc4g == !0) {
                Bc4g = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            hT8L.FM6G("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, Bc4g));
            Q5V.frames = {};
            bPI6C(bP5U.p_frame, Q5V.frames);
            Q5V.flashs = {};
            bPI6C(bP5U.p_flash, Q5V.flashs)
        }
    }();
    hT8L.FM6G = function(J4N, C4G) {
        Q5V[J4N] = C4G
    }
    ;
    hT8L.z4D = function(J4N) {
        return Q5V[J4N]
    }
    ;
    hT8L.bQQ8I = function(W5b) {
        var uK2x = bto0x(W5b);
        return Q5V.frames[uK2x] || uK2x + "/res/nej_proxy_frame.html"
    }
    ;
    hT8L.bQX8P = function(W5b) {
        return Q5V.flashs[bto0x(W5b)]
    }
    ;
    RL1x(window.NEJ_CONF || NEJ.O)
}
)();
(function() {
    var c4g = NEJ.P
      , N4R = c4g("nej.p")
      , hT8L = c4g("nej.c")
      , bP5U = window.NEJ_CONF || NEJ.O;
    if (N4R.mp0x.trident)
        return;
    hT8L.FM6G("storage.swf", bP5U.storage || hT8L.z4D("root") + "nej_storage.swf");
    if (N4R.dk6e.release < "4.0") {
        hT8L.FM6G("blank.png", bP5U.blank || hT8L.z4D("root") + "nej_blank.gif")
    }
    var i4m = bP5U.xdr
      , gf8X = /^(https?:\/\/.*?)(?=\/|$)/i
      , js9j = /[\/?=&]/i;
    var bNn6h = function(W5b) {
        return (gf8X.test(W5b) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i4m && !!i4m.length)
        for (var i = i4m.length - 1, W5b, J4N; i >= 0; i--) {
            W5b = i4m[i];
            J4N = bNn6h(W5b);
            if (!!J4N)
                hT8L.FM6G(J4N, W5b)
        }
    hT8L.cBO8G = function(W5b) {
        var J4N = bNn6h(W5b);
        if (!J4N) {
            if (js9j.test(W5b)) {
                J4N = location.protocol + "//" + location.host
            } else if (W5b.indexOf("://") < 0) {
                J4N = location.protocol + "//" + W5b
            } else {
                J4N = W5b
            }
        }
        return hT8L.z4D(J4N) || J4N + "/res/nej_xdomain.html"
    }
}
)();
(function() {
    var c4g = NEJ.P
      , hT8L = c4g("nej.c")
      , N4R = c4g("nej.g")
      , gi8a = +(new Date);
    N4R.cBN8F = 1e4 - gi8a;
    N4R.bsJ0x = 10001 - gi8a;
    N4R.cBL8D = 10002 - gi8a;
    N4R.bxF1x = 10003 - gi8a;
    N4R.bRc8U = 10004 - gi8a;
    N4R.cBJ8B = 10005 - gi8a;
    N4R.bsB0x = 10006 - gi8a;
    N4R.bRh8Z = 10007 - gi8a;
    N4R.yj4n = "Content-Type";
    N4R.cBF8x = "text/plain";
    N4R.Co5t = "multipart/form-data";
    N4R.bRl8d = "application/x-www-form-urlencoded";
    N4R.bsp0x = hT8L.z4D("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
}
)();
(function() {
    var c4g = NEJ.P
      , fh7a = NEJ.R
      , N4R = c4g("nej.p")
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , k4o = c4g("nej.u")
      , bc5h = c4g("nej.h");
    var lu9l = N4R.dk6e.prefix
      , bux1x = N4R.bOH6B
      , bRm8e = {
        scale: "scale({x|1},{y|1})",
        rotate: "rotate({a})",
        translate: "translate({x},{y})"
    }
      , bRn8f = {
        scale: "scale3d({x|1},{y|1},{z|1})",
        rotate: "rotate3d({x},{y},{z},{a})",
        translate: "translate3d({x},{y},{z})"
    }
      , MI8A = {
        transition: !0,
        transform: !0,
        animation: !0,
        keyframes: !0,
        box: !0,
        "box-pack": !0,
        "box-flex": !0,
        marquee: !0,
        "border-radius": !0,
        "user-select": !0
    };
    var RL1x = function() {
        var rW1x = bc5h.bzB2x();
        bux1x.css3d = !!rW1x && rW1x.m41 != null;
        var cS6M = /-([a-z])/g;
        for (var x in MI8A) {
            MI8A[bAE2x(x)] = MI8A[x]
        }
    };
    var bAE2x = function() {
        var cS6M = /-([a-z])/g;
        return function(T5Y) {
            T5Y = T5Y || "";
            return T5Y.replace(cS6M, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bAN2x = function(T5Y) {
        return (!bux1x.css3d ? bRm8e : bRn8f)[T5Y]
    };
    var bCH3x = function() {
        var cS6M = /\s+/;
        return function(fn7g) {
            fn7g = (fn7g || "").trim();
            return !!fn7g ? fn7g.split(cS6M) : null
        }
    }();
    var bbn6h = function(F4J, t4x, fn7g) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return;
        k4o.bb5g(bCH3x(fn7g), function(dL7E) {
            F4J.classList[t4x](dL7E)
        })
    };
    bc5h.FP6J = function(i4m) {
        return fh7a.slice.call(i4m, 0)
    }
    ;
    bc5h.brZ0x = function(F4J) {
        return bc5h.FP6J(F4J.children)
    }
    ;
    bc5h.brY0x = function(F4J, fn7g) {
        return bc5h.FP6J(F4J.getElementsByClassName(fn7g))
    }
    ;
    bc5h.brV0x = function(F4J, FQ6K) {
        bbn6h(F4J, "add", FQ6K)
    }
    ;
    bc5h.brM0x = function(F4J, FR6L) {
        bbn6h(F4J, "remove", FR6L)
    }
    ;
    bc5h.On9e = function(F4J, FR6L, FQ6K) {
        bbn6h(F4J, "remove", FR6L);
        bbn6h(F4J, "add", FQ6K)
    }
    ;
    bc5h.brv0x = function(F4J, fn7g) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return !1;
        var i4m = F4J.classList;
        if (!i4m || !i4m.length)
            return !1;
        return k4o.cV6P(bCH3x(fn7g), function(dL7E) {
            return i4m.contains(dL7E)
        }) >= 0
    }
    ;
    bc5h.bqZ0x = function(F4J, dL7E) {}
    ;
    bc5h.bqX0x = function(F4J) {}
    ;
    bc5h.bqS0x = function(fH8z, mS0x) {
        fH8z.selectionEnd = mS0x.end || 0;
        fH8z.selectionStart = mS0x.start || 0;
        fH8z.focus()
    }
    ;
    bc5h.bqE0x = function(fH8z) {
        return {
            end: fH8z.selectionEnd,
            start: fH8z.selectionStart
        }
    }
    ;
    bc5h.bqD0x = function() {
        var DL5Q = function(dL7E, d4h) {
            var F4J = h4l.U5Z(d4h);
            if (!F4J.value)
                a3x.v4z(F4J, dL7E)
        };
        var Gb6V = function(dL7E, d4h) {
            a3x.x4B(h4l.U5Z(d4h), dL7E)
        };
        return function(F4J, eQ7J, dL7E) {
            if (eQ7J == 1) {
                h4l.s4w(F4J, "blur", DL5Q.g4k(null, dL7E))
            }
            if (eQ7J == 1 || eQ7J == -1) {
                h4l.s4w(F4J, "focus", Gb6V.g4k(null, dL7E))
            }
        }
    }();
    bc5h.bqv0x = function(H4L) {
        return (new XMLSerializer).serializeToString(H4L) || ""
    }
    ;
    bc5h.bqr0x = function(Ao4s) {
        var fz7s = (new DOMParser).parseFromString(Ao4s, "text/xml").documentElement;
        return fz7s.nodeName == "parsererror" ? null : fz7s
    }
    ;
    bc5h.bqq0x = function(F4J) {}
    ;
    bc5h.nk0x = function(F4J) {
        return null
    }
    ;
    bc5h.bqp0x = function(F4J) {
        return null
    }
    ;
    bc5h.bqo0x = function(dN7G) {}
    ;
    bc5h.bqi0x = function() {
        var bg5l = bc5h.FP6J(arguments);
        bg5l[0] = a3x.z4D(bg5l[0]);
        if (!bg5l[0])
            return null;
        bg5l[1] = (bg5l[1] || "").toLowerCase();
        if (!bg5l[1])
            return null;
        return bg5l
    }
    ;
    bc5h.Ah4l = function() {
        var vw3x = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }
          , iF9w = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var bRo8g = function(t4x) {
            return (lu9l.evt || lu9l.pro) + t4x
        };
        return function() {
            var bg5l = bc5h.bqi0x.apply(bc5h, arguments);
            if (!bg5l)
                return;
            var baP5U = iF9w[bg5l[1]]
              , baO5T = vw3x[bg5l[1]];
            if (!!baP5U) {
                bg5l[4] = bg5l[1];
                bg5l[1] = bRo8g(baP5U)
            } else if (!!baO5T) {
                var T5Y = "on" + bg5l[1];
                if (!(T5Y in bg5l[0])) {
                    bg5l[4] = bg5l[1];
                    bg5l[1] = baO5T
                }
            }
            return bg5l
        }
    }();
    bc5h.bqd9U = function() {
        var bg5l = arguments;
        bg5l[0].addEventListener(bg5l[1], bg5l[2], !!bg5l[3])
    }
    ;
    bc5h.baM5R = function() {
        var bg5l = arguments;
        bg5l[0].removeEventListener(bg5l[1], bg5l[2], !!bg5l[3])
    }
    ;
    bc5h.bpY9P = function(F4J, t4x, e4i) {
        var d4h = document.createEvent("Event");
        d4h.initEvent(t4x, !0, !0);
        NEJ.X(d4h, e4i);
        F4J.dispatchEvent(d4h)
    }
    ;
    bc5h.bzB2x = function() {
        var gf8X = /\((.*?)\)/
          , js9j = /\s*,\s*/
          , i4m = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var baL5Q = function(rW1x) {
            var iB9s = {};
            if (gf8X.test(rW1x || "")) {
                k4o.bb5g(RegExp.$1.split(js9j), function(C4G, r4v) {
                    iB9s[i4m[r4v]] = C4G || ""
                })
            }
            return iB9s
        };
        return function(rW1x) {
            if (!!window.CSSMatrix)
                return new CSSMatrix(rW1x);
            var T5Y = lu9l.clz + "CSSMatrix";
            if (!!window[T5Y])
                return new window[T5Y](rW1x || "");
            return baL5Q(rW1x)
        }
    }();
    bc5h.bIP4T = function() {
        var cS6M = /\{(.*?)\}/g;
        return function(T5Y, bu5z) {
            bu5z = bu5z || o;
            var pw1x = bAN2x(T5Y);
            return !pw1x ? "" : pw1x.replace(cS6M, function($1, $2) {
                var bs5x = $2.split("|");
                return bu5z[bs5x[0]] || bs5x[1] || "0"
            })
        }
    }();
    bc5h.bpV9M = function(F4J, T5Y, C4G) {
        F4J.style[bc5h.bMn5s(T5Y)] = C4G
    }
    ;
    bc5h.bMn5s = function() {
        var cS6M = /^[a-z]/
          , bpU9L = lu9l.css;
        var bRp8h = function(T5Y) {
            return T5Y.replace(cS6M, function($1) {
                return bpU9L + $1.toUpperCase()
            })
        };
        return function(T5Y) {
            T5Y = bAE2x(T5Y);
            var bRz8r = bc5h.bRA8s(T5Y, MI8A);
            return bRz8r ? bRp8h(T5Y) : T5Y
        }
    }();
    bc5h.bRA8s = function() {
        var cS6M = /^([a-z]+?)[A-Z]/;
        return function(T5Y, bu5z) {
            if (!bu5z[T5Y]) {
                if (cS6M.test(T5Y))
                    T5Y = RegExp.$1
            }
            return !!bu5z[T5Y]
        }
    }();
    bc5h.bRB8t = function() {
        var cS6M = /\$<(.*?)>/gi
          , bpU9L = "-" + lu9l.css.toLowerCase() + "-";
        return function(jw9n) {
            return jw9n.replace(cS6M, function($1, $2) {
                var ez7s = $2
                  , bs5x = ez7s.split("|")
                  , pw1x = bAN2x(bs5x[0]);
                if (!!pw1x) {
                    return bc5h.bIP4T(bs5x[0], k4o.hx8p(bs5x[1]))
                }
                return !bc5h.bRE8w(ez7s, MI8A) ? ez7s : bpU9L + ez7s
            })
        }
    }();
    bc5h.bRE8w = function(T5Y, bu5z) {
        return !!bu5z[T5Y]
    }
    ;
    bc5h.bpP9G = function(ce5j, jw9n) {
        ce5j.textContent = jw9n
    }
    ;
    bc5h.bpO9F = function(ce5j, jw9n) {
        var xM3x = ce5j.sheet
          , bm5r = xM3x.cssRules.length;
        xM3x.insertRule(jw9n, bm5r);
        return xM3x.cssRules[bm5r]
    }
    ;
    bc5h.cBs8k = function(F4J, e4i) {}
    ;
    bc5h.baI5N = function(baH5M) {
        return (baH5M || "").toLowerCase() != "transparent"
    }
    ;
    bc5h.bRL8D = function(F4J) {}
    ;
    bc5h.bpF9w = function(F4J, T5Y) {
        if (!!F4J.getAttribute)
            return F4J.getAttribute(T5Y);
        return ""
    }
    ;
    bc5h.baD5I = function(fj7c) {
        a3x.cC6w(fj7c)
    }
    ;
    RL1x()
}
)();
(function() {
    var c4g = NEJ.P
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , N4R = c4g("nej.p")
      , bc5h = c4g("nej.h");
    if (N4R.mp0x.trident0)
        return;
    var gi8a = +(new Date);
    Q5V = {};
    bc5h.bqZ0x = bc5h.bqZ0x.ek7d(function(d4h) {
        d4h.stopped = !0;
        var bg5l = d4h.args
          , D4H = a3x.la9R(bg5l[0])
          , J4N = "hover-" + D4H;
        if (!D4H || !!Q5V[J4N])
            return;
        Q5V[J4N] = !0;
        h4l.s4w(D4H, "mouseenter", a3x.x4B.g4k(a3x, D4H, bg5l[1]));
        h4l.s4w(D4H, "mouseleave", a3x.v4z.g4k(a3x, D4H, bg5l[1]))
    });
    bc5h.bqX0x = function() {
        var cBq8i = function() {};
        return bc5h.bqX0x.ek7d(function(d4h) {
            d4h.stopped = !0;
            var F4J = d4h.args[0]
              , D4H = "fixed-" + a3x.la9R(F4J);
            if (!!Q5V[D4H])
                return;
            var bd5i = {};
            Q5V[D4H] = bd5i
        })
    }();
    bc5h.bqq0x = bc5h.bqq0x.ek7d(function(d4h) {
        d4h.stopped = !0;
        var F4J = d4h.args[0]
          , ce5j = F4J.style
          , bFH4L = a3x.pb1x();
        ce5j.width = bFH4L.scrollWidth + "px";
        ce5j.height = bFH4L.scrollHeight + "px"
    });
    bc5h.nk0x = bc5h.nk0x.ek7d(function(d4h) {
        d4h.stopped = !0;
        var F4J = d4h.args[0]
          , kw9n = Q5V[F4J.msk];
        if (!kw9n) {
            F4J.msk = gi8a++;
            kw9n = a3x.cX6R("iframe");
            kw9n.style.position = "absolute";
            Q5V[F4J.msk] = kw9n
        }
        d4h.value = kw9n;
        var ce5j = kw9n.style;
        ce5j.top = (parseInt(a3x.dc6W(F4J, "top")) || 0) + "px";
        ce5j.left = (parseInt(a3x.dc6W(F4J, "left")) || 0) + "px";
        ce5j.width = F4J.offsetWidth + "px";
        ce5j.height = F4J.offsetHeight + "px";
        F4J.insertAdjacentElement("beforeBegin", kw9n)
    });
    bc5h.bqp0x = bc5h.bqp0x.ek7d(function(d4h) {
        d4h.stopped = !0;
        var kw9n = Q5V[d4h.args[0].msk];
        if (!!kw9n)
            a3x.mJ0x(kw9n)
    })
}
)();
(function() {
    var c4g = NEJ.P
      , N4R = c4g("nej.p")
      , a3x = c4g("nej.e")
      , bc5h = c4g("nej.h");
    if (N4R.mp0x.trident1)
        return;
    bc5h.Ah4l = function() {
        var vw3x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bc5h.Ah4l.ek7d(function(d4h) {
            var bg5l = bc5h.bqi0x.apply(bc5h, d4h.args);
            if (!bg5l) {
                d4h.stopped = !0;
                return
            }
            var t4x = vw3x[bg5l[1]];
            if (!!t4x && ("on" + t4x).toLowerCase()in bg5l[0]) {
                bg5l[4] = bg5l[1];
                bg5l[1] = t4x;
                d4h.stopped = !0;
                d4h.value = bg5l
            }
        })
    }();
    bc5h.baI5N = function(baH5M) {
        return !0
    }
    ;
    bc5h.baD5I = bc5h.baD5I.ek7d(function(d4h) {
        d4h.stopped = !0;
        var fj7c = d4h.args[0];
        a3x.Z5e(fj7c, "display", "none");
        try {
            fj7c.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {}
    })
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , N4R = c4g("nej.p")
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , k4o = c4g("nej.u")
      , bc5h = c4g("nej.h")
      , bpC9t = {};
    if (N4R.mp0x.trident)
        return;
    bc5h.FP6J = bc5h.FP6J.ek7d(function(d4h) {
        d4h.stopped = !0;
        var i4m = d4h.args[0];
        if (!i4m) {
            d4h.value = null;
            return
        }
        var r4v = 0
          , o4s = [];
        while (!!i4m[r4v]) {
            o4s.push(i4m[r4v++])
        }
        d4h.value = o4s
    });
    bc5h.brZ0x = bc5h.brZ0x.ek7d(function(d4h) {
        d4h.stopped = !0;
        var bs5x = [];
        k4o.bb5g(d4h.args[0].childNodes, function(f4j) {
            if (f4j.nodeType == 1)
                bs5x.push(f4j)
        });
        d4h.value = bs5x
    });
    bc5h.brY0x = bc5h.brY0x.ek7d(function(d4h) {
        var F4J = d4h.args[0];
        if (!!F4J.getElementsByClassName)
            return;
        d4h.stopped = !0;
        var o4s = []
          , bpB9s = new RegExp("(\\s|^)(?:" + d4h.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k4o.bb5g(F4J.getElementsByTagName("*"), function(f4j) {
            if (bpB9s.test(f4j.className))
                o4s.push(f4j)
        });
        d4h.value = o4s
    });
    bc5h.bqS0x = bc5h.bqS0x.ek7d(function(d4h) {
        var fH8z = d4h.args[0]
          , mS0x = d4h.args[1];
        if (fH8z.selectionStart == null) {
            d4h.stopped = !0;
            var cN6H = fH8z.createTextRange();
            cN6H.collapse(!0);
            cN6H.moveStart("character", mS0x.start);
            cN6H.moveEnd("character", mS0x.end - mS0x.start);
            cN6H.select();
            fH8z.focus()
        }
    });
    bc5h.bqE0x = bc5h.bqE0x.ek7d(function(d4h) {
        var fH8z = d4h.args[0];
        fH8z.focus();
        if (fH8z.selectionStart == null) {
            d4h.stopped = !0;
            var bJC5H = document.selection.createRange();
            var buq1x = fH8z.createTextRange();
            buq1x.moveToBookmark(bJC5H.getBookmark());
            var bpx9o = fH8z.createTextRange();
            bpx9o.collapse(!0);
            bpx9o.setEndPoint("EndToStart", buq1x);
            var io8g = bpx9o.text.length;
            d4h.value = {
                start: io8g,
                end: io8g + bJC5H.text.length
            }
        }
    });
    bc5h.bqv0x = bc5h.bqv0x.ek7d(function(d4h) {
        if (!!window.XMLSerializer)
            return;
        d4h.stopped = !0;
        var F4J = d4h.args[0];
        d4h.value = F4J.xml != null ? F4J.xml : F4J.outHTML
    });
    bc5h.bqr0x = function() {
        var Lz8r = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bRP8H = function() {
            try {
                for (var i = 0, l = Lz8r.length; i < l; i++)
                    return new ActiveXObject(Lz8r[i])
            } catch (ex) {
                return null
            }
        };
        return bc5h.bqr0x.ek7d(function(d4h) {
            if (!!window.DOMParser)
                return;
            d4h.stopped = !0;
            var nt0x = bRP8H();
            if (!!nt0x && nt0x.loadXML(d4h.args[0]) && !nt0x.parseError.errorCode)
                d4h.value = nt0x.documentElement
        })
    }();
    bc5h.Ah4l = function() {
        var iF9w = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in iF9w)
            bpC9t[iF9w[x]] = !0;
        var bRQ8I = function(F4J, t4x) {
            if ("on" + t4x in F4J)
                return null;
            return iF9w[t4x] || ""
        };
        var bSq8i = function(t4x, dg6a) {
            var dw6q = dg6a;
            switch (t4x) {
            case "readystatechange":
                dw6q = function(d4h) {
                    var F4J = h4l.U5Z(d4h) || this;
                    if (F4J.readyState == "loaded" || F4J.readyState == "complete") {
                        d4h.target = F4J;
                        dg6a.call(F4J, d4h)
                    }
                }
                ;
                break;
            case "propertychange":
                dw6q = function(d4h) {
                    var F4J = h4l.U5Z(d4h) || this;
                    if ("value"in F4J && d4h.propertyName == "value") {
                        d4h.target = F4J;
                        dg6a.call(F4J, d4h)
                    }
                }
                ;
                break
            }
            return dw6q
        };
        return bc5h.Ah4l.ek7d(function(d4h) {
            var bg5l = bc5h.bqi0x.apply(bc5h, d4h.args);
            if (!bg5l) {
                d4h.stopped = !0;
                return
            }
            var t4x = bRQ8I(bg5l[0], bg5l[1]);
            if (!!t4x) {
                d4h.stopped = !0;
                bg5l[4] = bg5l[1];
                bg5l[1] = t4x;
                if (!!bg5l[2]) {
                    bg5l[5] = bg5l[2];
                    bg5l[2] = bSq8i(bg5l[1], bg5l[2])
                }
                d4h.value = bg5l
            }
        }, function(d4h) {
            var bg5l = d4h.value;
            if (!bg5l[0] || !k4o.gb8T(bg5l[2]))
                return;
            if (!k4o.gb8T(bg5l[5]))
                bg5l[5] = bg5l[2];
            bg5l[2] = bg5l[2].g4k(bg5l[0])
        })
    }();
    bc5h.bqd9U = bc5h.bqd9U.ek7d(function(d4h) {
        var bg5l = d4h.args;
        if (!!bpC9t[bg5l[1]] || !document.addEventListener) {
            d4h.stopped = !0;
            bg5l[0].attachEvent("on" + bg5l[1], bg5l[2])
        }
    });
    bc5h.baM5R = bc5h.baM5R.ek7d(function(d4h) {
        var bg5l = d4h.args;
        if (!!bpC9t[bg5l[1]] || !document.removeEventListener) {
            d4h.stopped = !0;
            bg5l[0].detachEvent("on" + bg5l[1], bg5l[2])
        }
    });
    bc5h.bpY9P = bc5h.bpY9P.ek7d(function(d4h) {
        if (!document.createEvent) {
            d4h.stopped = !0;
            var bg5l = d4h.args
              , byQ2x = document.createEventObject();
            NEJ.X(byQ2x, bg5l[2]);
            try {
                bg5l[0].fireEvent("on" + bg5l[1], byQ2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bc5h.bpV9M = bc5h.bpV9M.ek7d(function(d4h) {
        var bg5l = d4h.args
          , T5Y = bg5l[1].toLowerCase();
        if (T5Y == "opacity" && !(T5Y in document.body.style)) {
            bg5l[1] = "filter";
            bg5l[2] = "alpha(opacity=" + bg5l[2] * 100 + ")"
        }
    });
    bc5h.bpP9G = function() {
        var fl7e = 30;
        return bc5h.bpP9G.ek7d(function(d4h) {
            var F4J = d4h.args[0];
            if (!F4J.styleSheet)
                return;
            d4h.stopped = !0;
            var jw9n = d4h.args[1];
            var i4m = document.styleSheets;
            if (i4m.length > fl7e) {
                F4J = i4m[fl7e];
                jw9n = F4J.cssText + jw9n
            } else {
                F4J = F4J.styleSheet
            }
            F4J.cssText = jw9n
        })
    }();
    bc5h.bpO9F = bc5h.bpO9F.ek7d(function(d4h) {
        var bg5l = d4h.args
          , xM3x = bg5l[0].sheet;
        if (!!xM3x)
            return;
        d4h.stopped = !0;
        var xM3x = bg5l[0].styleSheet
          , bm5r = xM3x.rules.length
          , bs5x = bg5l[1].split(/[\{\}]/);
        xM3x.addRule(bs5x[0], bs5x[1], bm5r);
        d4h.value = xM3x.rules[bm5r]
    });
    bc5h.bqD0x = function() {
        var DL5Q = function(dL7E, d4h) {
            a3x.v4z(h4l.U5Z(d4h), dL7E)
        };
        return bc5h.bqD0x.ek7d(function(d4h) {
            if (N4R.dk6e.release >= "4.0")
                return;
            var bg5l = d4h.args;
            if (bg5l[1] != 1) {
                h4l.s4w(bg5l[0], "blur", DL5Q.g4k(null, bg5l[2]));
                bg5l[1] = -1
            }
        })
    }();
    bc5h.baI5N = function(baH5M) {
        return !0
    }
    ;
    bc5h.bpF9w = bc5h.bpF9w.ek7d(function(d4h) {
        var bg5l = d4h.args
          , f4j = (bg5l[0].attributes || Y5d)[bg5l[1]];
        if (!!f4j) {
            d4h.stopped = !0;
            d4h.value = f4j.value
        }
    }, function(d4h) {
        var bg5l = d4h.args;
        if (bg5l[1] == "maxlength" && d4h.value == 2147483647)
            d4h.value = ""
    });
    if (N4R.dk6e.release < 5) {
        bc5h.bqo0x = function() {
            var eD7w, fj7c, jB9s = [], bpq9h = "cb-" + +(new Date), bl5q = '<script>parent.nej.h["' + bpq9h + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bCO3x = function() {
                eD7w = window.clearTimeout(eD7w);
                if (!jB9s.length)
                    return;
                var dN7G = jB9s.shift();
                try {
                    var ve2x = fj7c.contentWindow.document;
                    ve2x.open();
                    ve2x.write("<head><title>");
                    ve2x.write(document.title);
                    ve2x.write("</title>");
                    ve2x.write(bl5q.replace("#<HASH>", encodeURIComponent(dN7G)));
                    ve2x.write("</head><body></body>");
                    if (location.hostname != document.domain)
                        ve2x.domain = document.domain;
                    ve2x.close();
                    bc5h[bpq9h] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jB9s.unshift(dN7G)
                }
                eD7w = window.setTimeout(bCO3x, 50)
            };
            return bc5h.bqo0x.ek7d(function(d4h) {
                d4h.stopped = !0;
                var dN7G = d4h.args[0];
                if (!!bc5h[bpq9h] || !fj7c && !dN7G)
                    return;
                jB9s.push(dN7G);
                if (!fj7c)
                    fj7c = a3x.baA5F();
                bCO3x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {}
}
)();
(function() {
    var c4g = NEJ.P
      , h4l = c4g("nej.v")
      , bc5h = c4g("nej.h")
      , N4R = c4g("nej.p")
      , baz5E = N4R.bOH6B;
    if (N4R.mp0x.gecko)
        return;
    var RL1x = function() {
        baz5E.css3d = baz5E.css3d || "MozPerspective"in document.body.style;
        if (!document.body.insertAdjacentElement)
            HTMLElement.prototype.insertAdjacentElement = function(im8e, F4J) {
                if (!im8e || !F4J)
                    return;
                switch (im8e) {
                case "beforeEnd":
                    this.appendChild(F4J);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(F4J, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(F4J) : this.insertBefore(F4J, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(F4J) : this.parentNode.insertBefore(F4J, this.nextSibling);
                    return
                }
            }
            ;
        if (!("innerText"in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bl5q) {
                this.textContent = bl5q
            })
        }
    };
    bc5h.Ah4l = function() {
        var gf8X = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bc5h.Ah4l.ek7d(function(d4h) {
            var bg5l = d4h.args;
            if (gf8X.test(bg5l[1] || "")) {
                d4h.stopped = !0;
                d4h.value = bg5l
            }
        })
    }();
    bc5h.bRL8D = function() {
        var bSM8E = function(d4h) {
            h4l.bh5m(d4h);
            h4l.U5Z(d4h).control.click()
        };
        return function(F4J) {
            h4l.s4w(F4J, "click", bSM8E)
        }
    }();
    RL1x()
}
)();
(function() {
    var c4g = NEJ.P
      , a3x = c4g("nej.e")
      , bc5h = c4g("nej.h");
    var bax5C = function() {
        var or0x = !!document.body.classList;
        return function() {
            return or0x
        }
    }();
    var bFR4V = function() {
        var cS6M = /\s+/g;
        return function(fn7g) {
            fn7g = (fn7g || "").trim();
            return !fn7g ? null : new RegExp("(\\s|^)(?:" + fn7g.replace(cS6M, "|") + ")(?=\\s|$)","g")
        }
    }();
    bc5h.On9e = bc5h.On9e.ek7d(function(d4h) {
        if (bax5C())
            return;
        d4h.stopped = !0;
        var bg5l = d4h.args
          , F4J = a3x.z4D(bg5l[0]);
        if (!F4J || !bg5l[1] && !bg5l[2])
            return;
        var fn7g = F4J.className || "";
        var FQ6K = " " + (bg5l[2] || "")
          , FR6L = bFR4V((bg5l[1] || "") + FQ6K);
        !!FR6L && (fn7g = fn7g.replace(FR6L, "$1"));
        F4J.className = (fn7g + FQ6K).replace(/\s+/g, " ").trim()
    });
    bc5h.brV0x = bc5h.brV0x.ek7d(function(d4h) {
        if (bax5C())
            return;
        d4h.stopped = !0;
        var bg5l = d4h.args;
        bc5h.On9e(bg5l[0], "", bg5l[1])
    });
    bc5h.brM0x = bc5h.brM0x.ek7d(function(d4h) {
        if (bax5C())
            return;
        d4h.stopped = !0;
        var bg5l = d4h.args;
        bc5h.On9e(bg5l[0], bg5l[1], "")
    });
    bc5h.brv0x = bc5h.brv0x.ek7d(function(d4h) {
        if (bax5C())
            return;
        d4h.stopped = !0;
        var bg5l = d4h.args
          , F4J = a3x.z4D(bg5l[0]);
        if (!F4J) {
            d4h.value = !1;
            return
        }
        var cS6M = bFR4V(bg5l[1]);
        d4h.value = !cS6M ? !1 : cS6M.test(F4J.className || "")
    })
}
)();
(function() {
    var c4g = NEJ.P
      , N4R = c4g("nej.p")
      , bc5h = c4g("nej.h");
    if (N4R.mp0x.webkit)
        return;
    bc5h.baI5N = function(baH5M) {
        return !0
    }
}
)();
(function() {
    var c4g = NEJ.P
      , bc5h = c4g("nej.h")
      , a3x = c4g("nej.e")
      , k4o = c4g("nej.u")
      , h4l = c4g("nej.v")
      , cT6N = c4g("nej.x")
      , Q5V = {};
    var bJh4l = function(F4J) {
        F4J = a3x.z4D(F4J);
        if (!F4J || !Q5V[F4J.id])
            return;
        var bat5y = !0
          , D4H = F4J.id;
        k4o.eq7j(Q5V[D4H], function() {
            bat5y = !1;
            return !0
        });
        if (bat5y)
            delete Q5V[D4H]
    };
    h4l.s4w = cT6N.s4w = function() {
        var bTs8k = function() {
            var bg5l = bc5h.Ah4l.apply(bc5h, arguments);
            if (!bg5l || !bg5l[2])
                return;
            var tu2x = a3x.la9R(bg5l[0])
              , ok0x = Q5V[tu2x] || {};
            Q5V[tu2x] = ok0x;
            tu2x = bg5l[4] || bg5l[1];
            var zq4u = ok0x[tu2x] || [];
            ok0x[tu2x] = zq4u;
            zq4u.push({
                type: bg5l[1],
                func: bg5l[2],
                capt: !!bg5l[3],
                sfun: bg5l[5] || bg5l[2]
            });
            return bg5l.slice(0, 4)
        };
        return function() {
            var bg5l = bTs8k.apply(null, arguments);
            if (!!bg5l)
                bc5h.bqd9U.apply(bc5h, bg5l);
            return this
        }
    }();
    h4l.mt0x = cT6N.mt0x = function() {
        var bTL9C = function() {
            var va2x = arguments
              , tu2x = a3x.la9R(va2x[0])
              , ok0x = Q5V[tu2x]
              , t4x = (va2x[1] || "").toLowerCase()
              , d4h = va2x[2];
            if (!ok0x || !t4x || !d4h)
                return;
            ok0x = ok0x[t4x];
            if (!ok0x)
                return;
            var bTN9E = !!va2x[3]
              , r4v = k4o.cV6P(ok0x, function(iF9w) {
                return d4h == iF9w.sfun && bTN9E == iF9w.capt
            });
            if (r4v < 0)
                return;
            var iF9w = ok0x.splice(r4v, 1)[0];
            return !iF9w ? null : [a3x.z4D(tu2x), iF9w.type, iF9w.func, iF9w.capt]
        };
        return function() {
            var bg5l = bTL9C.apply(null, arguments);
            if (!!bg5l) {
                bc5h.baM5R.apply(bc5h, bg5l);
                bJh4l(bg5l[0])
            }
            return this
        }
    }();
    h4l.hw8o = cT6N.hw8o = function() {
        var bOp6j = function() {
            var va2x = arguments
              , tu2x = a3x.la9R(va2x[0])
              , ok0x = Q5V[tu2x]
              , zq4u = (va2x[1] || "").toLowerCase();
            if (!ok0x || !zq4u)
                return;
            var F4J = a3x.z4D(tu2x);
            k4o.mq0x(ok0x[zq4u], function(iF9w, r4v, i4m) {
                bc5h.baM5R(F4J, iF9w.type, iF9w.func, iF9w.capt);
                i4m.splice(r4v, 1)
            });
            delete ok0x[zq4u]
        };
        var bTO9F = function(F4J) {
            F4J = a3x.z4D(F4J);
            if (!F4J)
                return;
            var D4H = F4J.id;
            k4o.eq7j(Q5V[D4H], function(i4m, t4x) {
                bOp6j(D4H, t4x)
            });
            delete Q5V[D4H]
        };
        return function(F4J, t4x) {
            !t4x ? bTO9F(F4J) : bOp6j(F4J, t4x);
            bJh4l(F4J);
            return this
        }
    }();
    h4l.U5Z = function() {
        var boV9M;
        var Gm6g = function(T5Y, F4J) {
            var bs5x = T5Y.split(":");
            if (bs5x.length > 1) {
                if (!boV9M)
                    boV9M = {
                        c: a3x.bz5E,
                        d: a3x.u4y,
                        a: a3x.fU8M
                    };
                var Gn6h = boV9M[bs5x[0]];
                if (!!Gn6h)
                    return !!Gn6h(F4J, bs5x[1]);
                T5Y = bs5x[1]
            }
            return !!a3x.fU8M(F4J, T5Y) || !!a3x.u4y(F4J, T5Y) || a3x.bz5E(F4J, T5Y)
        };
        return function(d4h) {
            if (!d4h)
                return null;
            var F4J = d4h.target || d4h.srcElement
              , dG7z = arguments[1];
            if (!dG7z)
                return F4J;
            if (k4o.fx7q(dG7z))
                dG7z = Gm6g.g4k(null, dG7z);
            if (k4o.gb8T(dG7z)) {
                while (F4J) {
                    if (!!dG7z(F4J))
                        return F4J;
                    F4J = F4J.parentNode
                }
                return null
            }
            return F4J
        }
    }();
    h4l.bh5m = function(d4h) {
        h4l.rX1x(d4h);
        h4l.ci5n(d4h);
        return this
    }
    ;
    h4l.rX1x = function(d4h) {
        if (!!d4h) {
            !!d4h.stopPropagation ? d4h.stopPropagation() : d4h.cancelBubble = !0
        }
        return this
    }
    ;
    h4l.ci5n = function(d4h) {
        if (!!d4h) {
            !!d4h.preventDefault ? d4h.preventDefault() : d4h.returnValue = !1
        }
        return this
    }
    ;
    h4l.cBg7Z = function() {
        var pE1x = !1;
        var bUb9S = function() {
            if (pE1x)
                return;
            pE1x = !0;
            h4l.s4w(document, "click", bUr9i, !0)
        };
        var bUr9i = function(d4h) {
            var F4J = h4l.U5Z(d4h)
              , bUA9r = a3x.u4y(F4J, "stopped");
            if (bUA9r == "true") {
                h4l.bh5m(d4h);
                a3x.u4y(F4J, "stopped", "false")
            }
        };
        return function(d4h) {
            if (!d4h)
                return;
            if (d4h.type == "click") {
                h4l.bh5m(d4h);
                return
            }
            bUb9S();
            a3x.u4y(h4l.U5Z(d4h), "stopped", "true")
        }
    }();
    h4l.jS9J = function(d4h) {
        return d4h.pageX != null ? d4h.pageX : d4h.clientX + a3x.pb1x().scrollLeft
    }
    ;
    h4l.mh0x = function(d4h) {
        return d4h.pageY != null ? d4h.pageY : d4h.clientY + a3x.pb1x().scrollTop
    }
    ;
    h4l.y4C = cT6N.y4C = function(F4J, t4x, e4i) {
        var bg5l = bc5h.Ah4l(F4J, t4x);
        if (!!bg5l)
            bc5h.bpY9P(bg5l[0], bg5l[1], e4i);
        return this
    }
    ;
    c4g("dbg").dumpEV = function() {
        return Q5V
    }
    ;
    cT6N.isChange = !0
}
)();
(function() {
    var o = !0
      , w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a)
                return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify
                      , b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                            return 1
                        }
                        ).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c)
                        return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a)
                        try {
                            if (0 === a("0") && !a(!1)) {
                                f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var e = 5 == f.a.length && 1 === f.a[0];
                                if (e) {
                                    try {
                                        e = !a('"\t"')
                                    } catch (g) {}
                                    if (e)
                                        try {
                                            e = 1 !== a("01")
                                        } catch (i) {}
                                }
                            }
                        } catch (O) {
                            e = !1
                        }
                    if (!c)
                        return e
                }
                return b && e
            }
        }
        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd, k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify,
        k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l)
                var t = Math.floor
                  , J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                  , z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty))
                p = function(a) {
                    var f = {}, c;
                    if ((f.__proto__ = w,
                    f.__proto__ = {
                        toString: 1
                    },
                    f).toString != m)
                        p = function(a) {
                            var f = this.__proto__
                              , a = a in (this.__proto__ = w,
                            this);
                            this.__proto__ = f;
                            return a
                        }
                        ;
                    else {
                        c = f.constructor;
                        p = function(a) {
                            var f = (this.constructor || c).prototype;
                            return a in this && !(a in f && this[a] === f[a])
                        }
                    }
                    f = w;
                    return p.call(this, a)
                }
                ;
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function(a, f) {
                var c = 0, b, h, n;
                (b = function() {
                    this.valueOf = 0
                }
                ).prototype.valueOf = 0;
                h = new b;
                for (n in h)
                    p.call(h, n) && c++;
                b = h = w;
                if (c)
                    c = c == 2 ? function(a, f) {
                        var c = {}, b = m.call(a) == "[object Function]", d;
                        for (d in a)
                            !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                    }
                    : function(a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        for (b in a)
                            !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                        (d || p.call(a, b = "constructor")) && f(b)
                    }
                    ;
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)
                            !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b))
                            ;
                    }
                }
                c(a, f)
            }
            ;
            if (!v("json-stringify")) {
                var L = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }
                  , u = function(a, f) {
                    return ("000000" + (f || 0)).slice(-a)
                }
                  , G = function(a) {
                    var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                    for (h && (n = a.split("")); b < d; b++) {
                        var e = a.charCodeAt(b);
                        switch (e) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                            f = f + L[e];
                            break;
                        default:
                            if (e < 32) {
                                f = f + ("\\u00" + u(2, e.toString(16)));
                                break
                            }
                            f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                        }
                    }
                    return f + '"'
                }
                  , E = function(a, b, c, d, h, n, e) {
                    var g = b[a], i, j, k, l, q, s, v, x, y;
                    try {
                        g = b[a]
                    } catch (A) {}
                    if (typeof g == "object" && g) {
                        i = m.call(g);
                        if (i == "[object Date]" && !p.call(g, "toJSON"))
                            if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++)
                                        ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++)
                                        ;
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else
                                g = w;
                        else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON")))
                            g = g.toJSON(a)
                    }
                    c && (g = c.call(b, a, g));
                    if (g === w)
                        return "null";
                    i = m.call(g);
                    if (i == "[object Boolean]")
                        return "" + g;
                    if (i == "[object Number]")
                        return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if (i == "[object String]")
                        return G("" + g);
                    if (typeof g == "object") {
                        for (a = e.length; a--; )
                            if (e[a] === g)
                                throw TypeError();
                        e.push(g);
                        x = [];
                        b = n;
                        n = n + h;
                        if (i == "[object Array]") {
                            j = 0;
                            for (a = g.length; j < a; y || (y = o),
                            j++) {
                                i = E(j, g, c, d, h, n, e);
                                x.push(i === r ? "null" : i)
                            }
                            a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                        } else {
                            C(d || g, function(a) {
                                var b = E(a, g, c, d, h, n, e);
                                b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                y || (y = o)
                            });
                            a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                        }
                        e.pop();
                        return a
                    }
                };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]")
                            h = b;
                        else if (m.call(b) == "[object Array]") {
                            j = {};
                            for (var e = 0, g = b.length, i; e < g; i = b[e++],
                            (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1))
                                ;
                        }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ")
                                    ;
                            }
                        } else
                            m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {},
                    i[""] = a,
                    i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode, N = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, b, A, j = function() {
                    b = A = w;
                    throw SyntaxError()
                }, q = function() {
                    for (var a = A, f = a.length, c, d, h, k, e; b < f; ) {
                        e = a.charCodeAt(b);
                        switch (e) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            b++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            c = s ? a.charAt(b) : a[b];
                            b++;
                            return c;
                        case 34:
                            c = "@";
                            for (b++; b < f; ) {
                                e = a.charCodeAt(b);
                                if (e < 32)
                                    j();
                                else if (e == 92) {
                                    e = a.charCodeAt(++b);
                                    switch (e) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        c = c + N[e];
                                        b++;
                                        break;
                                    case 117:
                                        d = ++b;
                                        for (h = b + 4; b < h; b++) {
                                            e = a.charCodeAt(b);
                                            e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                        }
                                        c = c + M("0x" + a.slice(d, b));
                                        break;
                                    default:
                                        j()
                                    }
                                } else {
                                    if (e == 34)
                                        break;
                                    e = a.charCodeAt(b);
                                    for (d = b; e >= 32 && e != 92 && e != 34; )
                                        e = a.charCodeAt(++b);
                                    c = c + a.slice(d, b)
                                }
                            }
                            if (a.charCodeAt(b) == 34) {
                                b++;
                                return c
                            }
                            j();
                        default:
                            d = b;
                            if (e == 45) {
                                k = o;
                                e = a.charCodeAt(++b)
                            }
                            if (e >= 48 && e <= 57) {
                                for (e == 48 && (e = a.charCodeAt(b + 1),
                                e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b),
                                e >= 48 && e <= 57); b++)
                                    ;
                                if (a.charCodeAt(b) == 46) {
                                    for (h = ++b; h < f && (e = a.charCodeAt(h),
                                    e >= 48 && e <= 57); h++)
                                        ;
                                    h == b && j();
                                    b = h
                                }
                                e = a.charCodeAt(b);
                                if (e == 101 || e == 69) {
                                    e = a.charCodeAt(++b);
                                    (e == 43 || e == 45) && b++;
                                    for (h = b; h < f && (e = a.charCodeAt(h),
                                    e >= 48 && e <= 57); h++)
                                        ;
                                    h == b && j();
                                    b = h
                                }
                                return +a.slice(d, b)
                            }
                            k && j();
                            if (a.slice(b, b + 4) == "true") {
                                b = b + 4;
                                return o
                            }
                            if (a.slice(b, b + 5) == "false") {
                                b = b + 5;
                                return false
                            }
                            if (a.slice(b, b + 4) == "null") {
                                b = b + 4;
                                return w
                            }
                            j()
                        }
                    }
                    return "$"
                }, F = function(a) {
                    var b, c;
                    a == "$" && j();
                    if (typeof a == "string") {
                        if ((s ? a.charAt(0) : a[0]) == "@")
                            return a.slice(1);
                        if (a == "[") {
                            for (b = []; ; c || (c = o)) {
                                a = q();
                                if (a == "]")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else
                                        j();
                                a == "," && j();
                                b.push(F(a))
                            }
                            return b
                        }
                        if (a == "{") {
                            for (b = {}; ; c || (c = o)) {
                                a = q();
                                if (a == "}")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else
                                        j();
                                (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                b[a.slice(1)] = F(q())
                            }
                            return b
                        }
                        j()
                    }
                    return a
                }, I = function(a, b, c) {
                    c = H(a, b, c);
                    c === r ? delete a[b] : a[b] = c
                }, H = function(a, b, c) {
                    var d = a[b], h;
                    if (typeof d == "object" && d)
                        if (m.call(d) == "[object Array]")
                            for (h = d.length; h--; )
                                I(d, h, c);
                        else
                            C(d, function(a) {
                                I(d, a, c)
                            });
                    return c.call(a, b, d)
                };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {},
                    d[""] = c,
                    d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    }
    )(this)
}
)();
(function() {
    var c4g = NEJ.P
      , N4R = c4g("nej.p");
    if (N4R.mp0x.trident0)
        return;
    JSON.parse = JSON.parse.ek7d(function(d4h) {
        var cz5E = d4h.args[0] || "";
        if (cz5E.length >= 5e5) {
            d4h.stopped = !0;
            d4h.value = eval("(" + cz5E + ")")
        }
    })
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, dU7N = c4g("nej.g"), a3x = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), bc5h = c4g("nej.h"), cT6N = c4g("nej.x"), Gs6m, boA9r = {}, Q5V = document.createDocumentFragment();
    a3x.la9R = cT6N.la9R = function(F4J) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return;
        var D4H = !!F4J.id ? F4J.id : "auto-id-" + k4o.MK8C(16);
        F4J.id = D4H;
        if (a3x.z4D(D4H) != F4J)
            boA9r[D4H] = F4J;
        return D4H
    }
    ;
    a3x.z4D = cT6N.z4D = function(F4J) {
        var f4j = boA9r["" + F4J];
        if (!!f4j)
            return f4j;
        if (!k4o.fx7q(F4J) && !k4o.vz3x(F4J))
            return F4J;
        return document.getElementById(F4J)
    }
    ;
    a3x.cU6O = cT6N.cU6O = function(F4J, dL7E) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return null;
        var i4m = bc5h.brZ0x(F4J);
        if (!!dL7E)
            k4o.mq0x(i4m, function(f4j, r4v) {
                if (!a3x.bz5E(f4j, dL7E))
                    i4m.splice(r4v, 1)
            });
        return i4m
    }
    ;
    a3x.I4M = cT6N.I4M = function(F4J, fn7g) {
        F4J = a3x.z4D(F4J);
        return !F4J ? null : bc5h.brY0x(F4J, fn7g.trim())
    }
    ;
    a3x.bHO4S = cT6N.bHO4S = function(F4J) {
        F4J = a3x.z4D(F4J);
        if (!!F4J) {
            F4J = F4J.parentNode;
            while (!!F4J) {
                if (F4J.scrollHeight > F4J.clientHeight)
                    break;
                F4J = F4J.parentNode
            }
            if (!!F4J)
                return F4J
        }
        var ok0x = document.body.scrollHeight
          , zq4u = document.documentElement.scrollHeight;
        return zq4u >= ok0x ? document.documentElement : document.body
    }
    ;
    a3x.pb1x = function() {
        var bIO4S = function(i4m) {
            var o4s = 0;
            k4o.bb5g(i4m, function(fv7o) {
                if (!fv7o)
                    return;
                if (!o4s) {
                    o4s = fv7o
                } else {
                    o4s = Math.min(o4s, fv7o)
                }
            });
            return o4s
        };
        return function(ve2x) {
            var Gv6p = ve2x || document
              , yX4b = Gv6p.body
              , yW4a = Gv6p.documentElement
              , o4s = {
                scrollTop: Math.max(yX4b.scrollTop, yW4a.scrollTop),
                scrollLeft: Math.max(yX4b.scrollLeft, yW4a.scrollLeft),
                clientWidth: bIO4S([yX4b.clientWidth, yX4b.offsetWidth, yW4a.clientWidth, yW4a.offsetWidth]),
                clientHeight: bIO4S([yX4b.clientHeight, yX4b.offsetHeight, yW4a.clientHeight, yW4a.offsetHeight])
            };
            o4s.scrollWidth = Math.max(o4s.clientWidth, yX4b.scrollWidth, yW4a.scrollWidth);
            o4s.scrollHeight = Math.max(o4s.clientHeight, yX4b.scrollHeight, yW4a.scrollHeight);
            return o4s
        }
    }();
    a3x.cBa7T = function(fl7e, og0x) {
        var o4s = NEJ.X({}, og0x)
          , bLP5U = fl7e.width / fl7e.height
          , bac5h = og0x.width / og0x.height;
        if (bLP5U > bac5h && og0x.height > fl7e.height) {
            o4s.height = fl7e.height;
            o4s.width = o4s.height * bac5h
        }
        if (bLP5U < bac5h && og0x.width > fl7e.width) {
            o4s.width = fl7e.width;
            o4s.height = o4s.width / bac5h
        }
        return o4s
    }
    ;
    a3x.cAZ7S = function() {
        var cS6M = /\s+/;
        var tz2x = {
            left: function() {
                return 0
            },
            center: function(gN8F, og0x) {
                return (gN8F.width - og0x.width) / 2
            },
            right: function(gN8F, og0x) {
                return gN8F.width - og0x.width
            },
            top: function() {
                return 0
            },
            middle: function(gN8F, og0x) {
                return (gN8F.height - og0x.height) / 2
            },
            bottom: function(gN8F, og0x) {
                return gN8F.height - og0x.height
            }
        };
        return function(gN8F, og0x, mW0x) {
            var o4s = {}
              , bs5x = (mW0x || "").split(cS6M)
              , gq8i = tz2x[bs5x[1]] || tz2x.middle
              , gO8G = tz2x[bs5x[0]] || tz2x.center;
            o4s.top = gq8i(gN8F, og0x);
            o4s.left = gO8G(gN8F, og0x);
            return o4s
        }
    }();
    a3x.se2x = cT6N.se2x = function(F4J, dL7E) {
        bc5h.bqZ0x(F4J, dL7E || a3x.u4y(F4J, "hover") || "js-hover");
        return this
    }
    ;
    a3x.Gz6t = cT6N.Gz6t = function(F4J) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return;
        bc5h.bqX0x(F4J)
    }
    ;
    a3x.bVc9T = cT6N.bVc9T = function() {
        var Q5V = {}
          , btM0x = 2;
        var bVm9d = function(D4H, dL7E, d4h) {
            Q5V[D4H] = [h4l.jS9J(d4h), h4l.mh0x(d4h)];
            a3x.x4B(D4H, dL7E)
        };
        var bVz9q = function(D4H, dL7E, d4h) {
            var bH5M = Q5V[D4H];
            if (!k4o.eu7n(bH5M))
                return;
            var bVP9G = Math.abs(h4l.jS9J(d4h) - bH5M[0])
              , bVR9I = Math.abs(h4l.mh0x(d4h) - bH5M[1]);
            if (bVP9G > btM0x || bVR9I > btM0x)
                bnp9g(D4H, dL7E)
        };
        var bnp9g = function(D4H, dL7E) {
            if (k4o.eu7n(Q5V[D4H])) {
                Q5V[D4H] = -1;
                a3x.v4z(D4H, dL7E)
            }
        };
        return function(F4J, dL7E) {
            var D4H = a3x.la9R(F4J);
            if (!D4H || Q5V[D4H] != null)
                return;
            Q5V[D4H] = -1;
            dL7E = dL7E || a3x.u4y(D4H, "highlight") || "js-highlight";
            h4l.s4w(D4H, "touchstart", bVm9d.g4k(null, D4H, dL7E));
            h4l.s4w(document, "touchmove", bVz9q.g4k(null, D4H, dL7E));
            h4l.s4w(document, "touchend", bnp9g.g4k(null, D4H, dL7E));
            h4l.s4w(document, "touchcancel", bnp9g.g4k(null, D4H, dL7E))
        }
    }();
    a3x.yH4L = cT6N.yH4L = function() {
        var bVU9L = function(D4H, dL7E, bWh9Y) {
            var F4J = a3x.z4D(D4H)
              , d4h = {
                clazz: dL7E,
                target: F4J
            };
            if (a3x.bz5E(F4J, dL7E)) {
                d4h.toggled = !1;
                a3x.v4z(F4J, dL7E)
            } else {
                d4h.toggled = !0;
                a3x.x4B(F4J, dL7E)
            }
            bWh9Y.call(null, d4h)
        };
        return function(F4J, e4i) {
            F4J = a3x.z4D(F4J);
            if (!!F4J) {
                var iB9s = {
                    ontoggle: bo5t,
                    clazz: "js-toggle",
                    element: F4J.parentNode
                };
                if (k4o.fx7q(e4i)) {
                    var f4j = a3x.z4D(e4i);
                    !!f4j ? iB9s.element = f4j : iB9s.clazz = e4i
                } else {
                    NEJ.EX(iB9s, e4i);
                    iB9s.element = a3x.z4D(iB9s.element)
                }
                var D4H = a3x.la9R(iB9s.element);
                h4l.s4w(F4J, "click", bVU9L.g4k(null, D4H, iB9s.clazz, iB9s.ontoggle || bo5t))
            }
            return this
        }
    }();
    a3x.mK0x = cT6N.mK0x = function(F4J, e4i) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return;
        var eQ7J = 0
          , dL7E = "js-focus";
        if (k4o.vz3x(e4i)) {
            eQ7J = e4i
        } else if (k4o.fx7q(e4i)) {
            dL7E = e4i
        } else if (k4o.kW9N(e4i)) {
            eQ7J = e4i.mode || eQ7J;
            dL7E = e4i.clazz || dL7E
        }
        var C4G = parseInt(a3x.u4y(F4J, "mode"));
        if (!isNaN(C4G))
            eQ7J = C4G;
        C4G = a3x.u4y(F4J, "focus");
        if (!!C4G)
            dL7E = C4G;
        bc5h.bqD0x(F4J, eQ7J, dL7E);
        return this
    }
    ;
    a3x.cX6R = function() {
        var bu5z = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(fe7X, fn7g, bE5J) {
            var F4J = document.createElement(fe7X);
            NEJ.X(F4J, bu5z[fe7X.toLowerCase()]);
            if (!!fn7g)
                F4J.className = fn7g;
            bE5J = a3x.z4D(bE5J);
            if (!!bE5J)
                bE5J.appendChild(F4J);
            return F4J
        }
    }();
    a3x.baA5F = function() {
        var bWy9p = function() {
            if (location.hostname == document.domain)
                return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var bWZ9Q = function(T5Y) {
            T5Y = T5Y.trim();
            if (!T5Y)
                return a3x.cX6R("iframe");
            var fj7c;
            try {
                fj7c = document.createElement('<iframe name="' + T5Y + '"></iframe>');
                fj7c.frameBorder = 0
            } catch (e) {
                fj7c = a3x.cX6R("iframe");
                fj7c.name = T5Y
            }
            return fj7c
        };
        return function(e4i) {
            e4i = e4i || Y5d;
            var fj7c = bWZ9Q(e4i.name || "");
            if (!e4i.visible)
                fj7c.style.display = "none";
            if (k4o.gb8T(e4i.onload))
                h4l.s4w(fj7c, "load", function(d4h) {
                    if (!fj7c.src)
                        return;
                    h4l.hw8o(fj7c, "load");
                    e4i.onload(d4h)
                });
            var bE5J = e4i.parent;
            if (k4o.gb8T(bE5J)) {
                try {
                    bE5J(fj7c)
                } catch (e) {}
            } else {
                (a3x.z4D(bE5J) || document.body).appendChild(fj7c)
            }
            var dz6t = e4i.src || bWy9p();
            window.setTimeout(function() {
                fj7c.src = dz6t
            }, 0);
            return fj7c
        }
    }();
    a3x.cC6w = cT6N.cC6w = function() {
        var bzf2x = function(Oz9q) {
            Oz9q.src = dU7N.bsp0x
        };
        var bzx2x = function(uC2x) {
            uC2x.src = "about:blank"
        };
        return function(F4J, bXl0x) {
            F4J = a3x.z4D(F4J);
            if (!F4J)
                return this;
            if (!bXl0x)
                h4l.hw8o(F4J);
            delete boA9r[F4J.id];
            var fe7X = F4J.tagName;
            if (fe7X == "IFRAME") {
                bzx2x(F4J)
            } else if (fe7X == "IMG") {
                bzf2x(F4J)
            } else if (!!F4J.getElementsByTagName) {
                k4o.bb5g(F4J.getElementsByTagName("img"), bzf2x);
                k4o.bb5g(F4J.getElementsByTagName("iframe"), bzx2x)
            }
            if (!!F4J.parentNode) {
                F4J.parentNode.removeChild(F4J)
            }
            return this
        }
    }();
    a3x.mJ0x = cT6N.mJ0x = function(F4J) {
        F4J = a3x.z4D(F4J);
        if (!!F4J)
            Q5V.appendChild(F4J);
        return this
    }
    ;
    a3x.bAB2x = cT6N.bAB2x = function(F4J) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return;
        k4o.mq0x(F4J.childNodes, function(f4j) {
            a3x.cC6w(f4j)
        })
    }
    ;
    a3x.GJ6D = cT6N.GJ6D = function() {
        var dL7E, gf8X = /\s+/;
        var bXD0x = function() {
            if (!!dL7E)
                return;
            dL7E = a3x.so2x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a3x.bAZ2x()
        };
        return function(F4J, e4i) {
            F4J = a3x.z4D(F4J);
            if (!F4J)
                return;
            bXD0x();
            e4i = e4i || Y5d;
            var bE5J = F4J.parentNode;
            if (!a3x.bz5E(bE5J, dL7E)) {
                bE5J = a3x.cX6R("span", dL7E);
                F4J.insertAdjacentElement("beforeBegin", bE5J);
                bE5J.appendChild(F4J)
            }
            var bCE3x = e4i.nid || ""
              , f4j = a3x.I4M(bE5J, bCE3x || dL7E + "-show")[0];
            if (!f4j) {
                var dK7D = ((e4i.clazz || "") + " " + bCE3x).trim();
                dK7D = dL7E + "-show" + (!dK7D ? "" : " ") + dK7D;
                f4j = a3x.cX6R(e4i.tag || "span", dK7D);
                bE5J.appendChild(f4j)
            }
            var dK7D = e4i.clazz;
            if (!!dK7D) {
                dK7D = (dK7D || "").trim().split(gf8X)[0] + "-parent";
                a3x.x4B(bE5J, dK7D)
            }
            return f4j
        }
    }();
    a3x.u4y = cT6N.u4y = function() {
        var bmN9E = {}
          , fe7X = "data-"
          , cS6M = /\-(.{1})/gi;
        var Dt5y = function(F4J) {
            var D4H = a3x.la9R(F4J);
            if (!!bmN9E[D4H])
                return;
            var bu5z = {};
            k4o.bb5g(F4J.attributes, function(f4j) {
                var J4N = f4j.nodeName;
                if (J4N.indexOf(fe7X) != 0)
                    return;
                J4N = J4N.replace(fe7X, "").replace(cS6M, function($1, $2) {
                    return $2.toUpperCase()
                });
                bu5z[J4N] = f4j.nodeValue || ""
            });
            bmN9E[D4H] = bu5z
        };
        return function(F4J, J4N, C4G) {
            F4J = a3x.z4D(F4J);
            if (!F4J)
                return null;
            var Zq5v = F4J.dataset;
            if (!Zq5v) {
                Dt5y(F4J);
                Zq5v = bmN9E[F4J.id]
            }
            if (C4G !== undefined)
                Zq5v[J4N] = C4G;
            return Zq5v[J4N]
        }
    }();
    a3x.fU8M = cT6N.fU8M = function(F4J, T5Y, C4G) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return "";
        if (C4G !== undefined && !!F4J.setAttribute)
            F4J.setAttribute(T5Y, C4G);
        return bc5h.bpF9w(F4J, T5Y)
    }
    ;
    a3x.nl0x = function(dD7w) {
        var qK1x = document.createElement("div");
        qK1x.innerHTML = dD7w;
        var i4m = a3x.cU6O(qK1x);
        return i4m.length > 1 ? qK1x : i4m[0]
    }
    ;
    a3x.bXY0x = cT6N.bXY0x = function(F4J) {
        F4J = a3x.z4D(F4J);
        return !F4J ? "" : bc5h.bqv0x(F4J)
    }
    ;
    a3x.bFz4D = function(Ao4s) {
        Ao4s = (Ao4s || "").trim();
        return !Ao4s ? null : bc5h.bqr0x(Ao4s)
    }
    ;
    a3x.bYg0x = function(cJ6D, t4x) {
        cJ6D = cJ6D || "";
        switch (t4x) {
        case "xml":
            cJ6D = a3x.bFz4D(cJ6D);
            break;
        case "json":
            try {
                cJ6D = JSON.parse(cJ6D)
            } catch (ex) {
                cJ6D = null
            }
            break
        }
        return cJ6D
    }
    ;
    a3x.hM8E = cT6N.hM8E = function() {
        var bZr0x = function(F4J) {
            return F4J == document.body || F4J == document.documentElement
        };
        return function(dP7I, oe0x) {
            dP7I = a3x.z4D(dP7I);
            if (!dP7I)
                return null;
            oe0x = a3x.z4D(oe0x) || null;
            var o4s = {
                x: 0,
                y: 0
            }, bmx9o, dm6g, Zn5s;
            while (!!dP7I && dP7I != oe0x) {
                bmx9o = bZr0x(dP7I);
                dm6g = bmx9o ? 0 : dP7I.scrollLeft;
                Zn5s = parseInt(a3x.dc6W(dP7I, "borderLeftWidth")) || 0;
                o4s.x += dP7I.offsetLeft + Zn5s - dm6g;
                dm6g = bmx9o ? 0 : dP7I.scrollTop;
                Zn5s = parseInt(a3x.dc6W(dP7I, "borderTopWidth")) || 0;
                o4s.y += dP7I.offsetTop + Zn5s - dm6g;
                dP7I = dP7I.offsetParent
            }
            return o4s
        }
    }();
    a3x.mH0x = cT6N.mH0x = function(F4J) {
        var bf5k = a3x.hM8E(F4J);
        window.scrollTo(bf5k.x, bf5k.y);
        return this
    }
    ;
    a3x.cAy7r = function(rW1x) {
        rW1x = (rW1x || "").trim();
        return bc5h.bzB2x(rW1x)
    }
    ;
    a3x.bZu0x = cT6N.bZu0x = function(F4J, T5Y, bu5z) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return this;
        var C4G = bc5h.bIP4T(T5Y, bu5z);
        if (!C4G)
            return this;
        a3x.Z5e(F4J, "transform", C4G);
        return this
    }
    ;
    a3x.ff7Y = cT6N.ff7Y = function(F4J, bu5z) {
        F4J = a3x.z4D(F4J);
        if (!!F4J)
            k4o.eq7j(bu5z, function(C4G, T5Y) {
                a3x.Z5e(F4J, T5Y, C4G)
            });
        return this
    }
    ;
    a3x.bZy0x = cT6N.bZy0x = function(fH8z, e4i) {
        fH8z = a3x.z4D(fH8z);
        if (!fH8z)
            return {
                start: 0,
                end: 0
            };
        if (k4o.vz3x(e4i))
            e4i = {
                start: e4i,
                end: e4i
            };
        if (e4i != null) {
            if (e4i.end == null)
                e4i.end = e4i.start || 0;
            bc5h.bqS0x(fH8z, e4i)
        } else {
            e4i = bc5h.bqE0x(fH8z)
        }
        return e4i
    }
    ;
    a3x.Z5e = cT6N.Z5e = function(F4J, T5Y, C4G) {
        F4J = a3x.z4D(F4J);
        if (!!F4J)
            bc5h.bpV9M(F4J, T5Y, C4G);
        return this
    }
    ;
    a3x.dc6W = cT6N.dc6W = function(F4J, T5Y) {
        F4J = a3x.z4D(F4J);
        if (!F4J)
            return "";
        var gx8p = !window.getComputedStyle ? F4J.currentStyle || Y5d : window.getComputedStyle(F4J, null);
        return gx8p[bc5h.bMn5s(T5Y)] || ""
    }
    ;
    a3x.bMw5B = function() {
        var cS6M = /[\s\r\n]+/gi;
        return function(ce5j) {
            ce5j = (ce5j || "").trim().replace(cS6M, " ");
            if (!ce5j)
                return;
            var f4j = a3x.cX6R("style");
            document.head.appendChild(f4j);
            bc5h.bpP9G(f4j, bc5h.bRB8t(ce5j));
            return f4j
        }
    }();
    a3x.bMx5C = function(xb3x) {
        try {
            xb3x = xb3x.trim();
            if (!!xb3x)
                return (new Function(xb3x))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    }
    ;
    a3x.so2x = function() {
        var cS6M = /#<.*?>/g
          , gi8a = +(new Date);
        return function(jw9n) {
            if (!Gs6m)
                Gs6m = [];
            var fn7g = "auto-" + gi8a++;
            Gs6m.push(jw9n.replace(cS6M, fn7g));
            return fn7g
        }
    }();
    a3x.bAZ2x = function() {
        if (!!Gs6m) {
            a3x.bMw5B(Gs6m.join(""));
            Gs6m = null
        }
        return this
    }
    ;
    a3x.cAv7o = function(ce5j, jw9n) {
        ce5j = a3x.z4D(ce5j);
        return !ce5j ? null : bc5h.bpO9F(ce5j, jw9n)
    }
    ;
    a3x.x4B = cT6N.x4B = function() {
        bc5h.brV0x.apply(bc5h, arguments);
        return this
    }
    ;
    a3x.v4z = cT6N.v4z = function() {
        bc5h.brM0x.apply(bc5h, arguments);
        return this
    }
    ;
    a3x.eT7M = cT6N.eT7M = function() {
        bc5h.On9e.apply(bc5h, arguments);
        return this
    }
    ;
    a3x.bz5E = cT6N.bz5E = function() {
        return bc5h.brv0x.apply(bc5h, arguments)
    }
    ;
    if (!document.head)
        document.head = document.getElementsByTagName("head")[0] || document.body;
    cT6N.isChange = !0
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , fh7a = NEJ.R
      , bo5t = NEJ.F
      , a3x = c4g("nej.e")
      , bc5h = c4g("nej.h")
      , k4o = c4g("nej.u");
    var Cv5A = function(j4n, t4x) {
        try {
            t4x = t4x.toLowerCase();
            if (j4n === null)
                return t4x == "null";
            if (j4n === undefined)
                return t4x == "undefined";
            return Y5d.toString.call(j4n).toLowerCase() == "[object " + t4x + "]"
        } catch (e) {
            return !1
        }
    };
    k4o.gb8T = function(j4n) {
        return Cv5A(j4n, "function")
    }
    ;
    k4o.fx7q = function(j4n) {
        return Cv5A(j4n, "string")
    }
    ;
    k4o.vz3x = function(j4n) {
        return Cv5A(j4n, "number")
    }
    ;
    k4o.cAu7n = function(j4n) {
        return Cv5A(j4n, "boolean")
    }
    ;
    k4o.GO6I = function(j4n) {
        return Cv5A(j4n, "date")
    }
    ;
    k4o.eu7n = function(j4n) {
        return Cv5A(j4n, "array")
    }
    ;
    k4o.kW9N = function(j4n) {
        return Cv5A(j4n, "object")
    }
    ;
    k4o.fc7V = function() {
        var cS6M = /[^\x00-\xfff]/g;
        return function(bl5q) {
            return ("" + (bl5q || "")).replace(cS6M, "**").length
        }
    }();
    k4o.cV6P = function(i4m, q4u) {
        var dG7z = k4o.gb8T(q4u) ? q4u : function(C4G) {
            return C4G === q4u
        }
          , r4v = k4o.eq7j(i4m, dG7z);
        return r4v != null ? r4v : -1
    }
    ;
    k4o.cAq7j = function() {
        var bQb6V;
        var Pz0x = function(i4m, ob0x, oa0x) {
            if (ob0x > oa0x)
                return -1;
            var Di5n = Math.ceil((ob0x + oa0x) / 2)
              , o4s = bQb6V(i4m[Di5n], Di5n, i4m);
            if (o4s == 0)
                return Di5n;
            if (o4s < 0)
                return Pz0x(i4m, ob0x, Di5n - 1);
            return Pz0x(i4m, Di5n + 1, oa0x)
        };
        return function(i4m, Gn6h) {
            bQb6V = Gn6h || bo5t;
            return Pz0x(i4m, 0, i4m.length - 1)
        }
    }();
    k4o.mq0x = function(i4m, dw6q, iw9n) {
        if (!i4m || !i4m.length || !k4o.gb8T(dw6q))
            return null;
        for (var i = i4m.length - 1; i >= 0; i--)
            if (!!dw6q.call(iw9n, i4m[i], i, i4m))
                return i;
        return null
    }
    ;
    k4o.bb5g = function(i4m, dw6q, iw9n) {
        if (!i4m || !i4m.length || !k4o.gb8T(dw6q))
            return this;
        if (!!i4m.forEach) {
            i4m.forEach(dw6q, iw9n);
            return this
        }
        for (var i = 0, l = i4m.length; i < l; i++)
            dw6q.call(iw9n, i4m[i], i, i4m);
        return this
    }
    ;
    k4o.eq7j = function(i4m, dw6q, iw9n) {
        if (!i4m || !k4o.gb8T(dw6q))
            return null;
        if (i4m.length != null) {
            if (i4m.length > 0)
                for (var i = 0, l = i4m.length; i < l; i++)
                    if (!!dw6q.call(iw9n, i4m[i], i, i4m))
                        return i
        }
        if (k4o.kW9N(i4m)) {
            for (var x in i4m)
                if (i4m.hasOwnProperty(x) && !!dw6q.call(iw9n, i4m[x], x, i4m))
                    return x
        }
        return null
    }
    ;
    k4o.cal0x = function(ix9o, caA0x, e4i) {
        ix9o = ix9o || [];
        e4i = e4i || Y5d;
        var bwI1x = !!e4i.union
          , uN2x = !!e4i.begin
          , Zi5n = e4i.compare
          , caB0x = bwI1x && uN2x ? k4o.mq0x : k4o.bb5g;
        caB0x(caA0x, function(q4u) {
            if (!!Zi5n)
                Zi5n = Zi5n.eb7U(q4u);
            var r4v = k4o.cV6P(ix9o, Zi5n || q4u);
            if (r4v >= 0)
                ix9o.splice(r4v, 1);
            if (bwI1x)
                ix9o[uN2x ? "unshift" : "push"](q4u)
        });
        return ix9o
    }
    ;
    k4o.Em5r = function(bu5z, bl5q) {
        if (!bu5z || !bl5q || !bl5q.replace)
            return bl5q || "";
        return bl5q.replace(bu5z.r, function($1) {
            var o4s = bu5z[!bu5z.i ? $1.toLowerCase() : $1];
            return o4s != null ? o4s : $1
        })
    }
    ;
    k4o.dI7B = function() {
        var bu5z = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function(bl5q) {
            return k4o.Em5r(bu5z, bl5q)
        }
    }();
    k4o.GS6M = function() {
        var bu5z = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(bl5q) {
            return k4o.Em5r(bu5z, bl5q)
        }
    }();
    k4o.iV9M = function() {
        var bu5z = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        }
          , caY0x = ["上午", "下午"]
          , cbh1x = ["A.M.", "P.M."]
          , blI8A = ["日", "一", "二", "三", "四", "五", "六"]
          , cbk1x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
          , cbP1x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Qo0x = function(gs8k) {
            gs8k = parseInt(gs8k) || 0;
            return (gs8k < 10 ? "0" : "") + gs8k
        };
        var cbZ1x = function(oL0x) {
            return oL0x < 12 ? 0 : 1
        };
        return function(by5D, GX6R, ccm1x) {
            if (!by5D || !GX6R)
                return "";
            by5D = k4o.YU5Z(by5D);
            bu5z.yyyy = by5D.getFullYear();
            bu5z.yy = ("" + bu5z.yyyy).substr(2);
            bu5z.M = by5D.getMonth() + 1;
            bu5z.MM = Qo0x(bu5z.M);
            bu5z.eM = cbP1x[bu5z.M - 1];
            bu5z.cM = cbk1x[bu5z.M - 1];
            bu5z.d = by5D.getDate();
            bu5z.dd = Qo0x(bu5z.d);
            bu5z.H = by5D.getHours();
            bu5z.HH = Qo0x(bu5z.H);
            bu5z.m = by5D.getMinutes();
            bu5z.mm = Qo0x(bu5z.m);
            bu5z.s = by5D.getSeconds();
            bu5z.ss = Qo0x(bu5z.s);
            bu5z.ms = by5D.getMilliseconds();
            bu5z.w = blI8A[by5D.getDay()];
            var bAS2x = cbZ1x(bu5z.H);
            bu5z.ct = caY0x[bAS2x];
            bu5z.et = cbh1x[bAS2x];
            if (!!ccm1x) {
                bu5z.H = bu5z.H % 12
            }
            return k4o.Em5r(bu5z, GX6R)
        }
    }();
    k4o.YU5Z = function(by5D) {
        var cL6F = by5D;
        if (k4o.fx7q(by5D))
            cL6F = new Date(Date.parse(by5D));
        if (!k4o.GO6I(by5D))
            cL6F = new Date(by5D);
        return cL6F
    }
    ;
    k4o.Gz6t = function(ccn1x, ccy1x) {
        return (new Number(ccn1x)).toFixed(ccy1x)
    }
    ;
    k4o.blt8l = function() {
        var gf8X = /([^\/:])\/.*$/
          , js9j = /\/[^\/]+$/
          , Cd5i = /[#\?]/
          , blr8j = location.href.split(/[?#]/)[0]
          , rC1x = document.createElement("a");
        var blo8g = function(lF0x) {
            return (lF0x || "").indexOf("://") > 0
        };
        var bDe3x = function(lF0x) {
            return (lF0x || "").split(Cd5i)[0].replace(js9j, "/")
        };
        var ccQ1x = function(lF0x, fz7s) {
            if (lF0x.indexOf("/") == 0)
                return fz7s.replace(gf8X, "$1") + lF0x;
            return bDe3x(fz7s) + lF0x
        };
        blr8j = bDe3x(blr8j);
        return function(lF0x, fz7s) {
            lF0x = (lF0x || "").trim();
            if (!blo8g(fz7s))
                fz7s = blr8j;
            if (!lF0x)
                return fz7s;
            if (blo8g(lF0x))
                return lF0x;
            lF0x = ccQ1x(lF0x, fz7s);
            rC1x.href = lF0x;
            lF0x = rC1x.href;
            return blo8g(lF0x) ? lF0x : rC1x.getAttribute("href", 4)
        }
    }();
    k4o.ccV1x = function() {
        var cS6M = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(W5b) {
            if (cS6M.test(W5b || ""))
                return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k4o.bER3x = function(H4L, iB9s) {
        if (!H4L)
            return iB9s;
        var T5Y = H4L.tagName.toLowerCase()
          , i4m = a3x.cU6O(H4L);
        if (!i4m || !i4m.length) {
            iB9s[T5Y] = H4L.textContent || H4L.text || "";
            return iB9s
        }
        var dS7L = {};
        iB9s[T5Y] = dS7L;
        k4o.bb5g(i4m, function(f4j) {
            k4o.bER3x(f4j, dS7L)
        });
        return iB9s
    }
    ;
    k4o.czT7M = function(Ao4s) {
        try {
            return k4o.bER3x(a3x.bFz4D(Ao4s), {})
        } catch (ex) {
            return null
        }
    }
    ;
    k4o.bFo3x = function(hW8O, QF0x) {
        var iB9s = {};
        k4o.bb5g((hW8O || "").split(QF0x), function(T5Y) {
            var YP3x = T5Y.split("=");
            if (!YP3x || !YP3x.length)
                return;
            var J4N = YP3x.shift();
            if (!J4N)
                return;
            iB9s[decodeURIComponent(J4N)] = decodeURIComponent(YP3x.join("="))
        });
        return iB9s
    }
    ;
    k4o.uZ2x = function(fM8E, QF0x, cep1x) {
        if (!fM8E)
            return "";
        var bs5x = [];
        for (var x in fM8E) {
            bs5x.push(encodeURIComponent(x) + "=" + (!!cep1x ? encodeURIComponent(fM8E[x]) : fM8E[x]))
        }
        return bs5x.join(QF0x || ",")
    }
    ;
    k4o.hx8p = function(bw5B) {
        return k4o.bFo3x(bw5B, "&")
    }
    ;
    k4o.db6V = function(fM8E) {
        return k4o.uZ2x(fM8E, "&", !0)
    }
    ;
    k4o.czR7K = function(fM8E) {
        return bc5h.FP6J(fM8E)
    }
    ;
    k4o.czQ7J = function(i4m, dG7z) {
        var o4s = {};
        k4o.bb5g(i4m, function(q4u) {
            var J4N = q4u;
            if (!!dG7z) {
                J4N = dG7z(q4u)
            }
            o4s[J4N] = q4u
        });
        return o4s
    }
    ;
    k4o.czP7I = function(gs8k, gc8U) {
        var cer1x = ("" + gs8k).length
          , cev1x = Math.max(1, parseInt(gc8U) || 0)
          , dm6g = cev1x - cer1x;
        if (dm6g > 0) {
            gs8k = (new Array(dm6g + 1)).join("0") + gs8k
        }
        return "" + gs8k
    }
    ;
    k4o.YG3x = function(fM8E, T5Y) {
        if (!k4o.eu7n(T5Y)) {
            try {
                delete fM8E[T5Y]
            } catch (e) {
                fM8E[T5Y] = undefined
            }
            return this
        }
        k4o.bb5g(T5Y, k4o.YG3x.g4k(k4o, fM8E));
        return this
    }
    ;
    k4o.MK8C = function() {
        var bKP5U = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bm5r) {
            bm5r = bm5r || 10;
            var o4s = [];
            for (var i = 0, bLb5g; i < bm5r; ++i) {
                bLb5g = Math.floor(Math.random() * bKP5U.length);
                o4s.push(bKP5U.charAt(bLb5g))
            }
            return o4s.join("")
        }
    }();
    k4o.zK4O = function(fQ8I, fl7e) {
        return Math.floor(Math.random() * (fl7e - fQ8I) + fQ8I)
    }
    ;
    k4o.nh0x = function(bm5r) {
        bm5r = Math.max(0, Math.min(bm5r || 8, 30));
        var fQ8I = Math.pow(10, bm5r - 1)
          , fl7e = fQ8I * 10;
        return k4o.zK4O(fQ8I, fl7e).toString()
    }
    ;
    k4o.YF3x = function() {
        var gi8a = +(new Date);
        return function() {
            return "" + gi8a++
        }
    }()
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, fh7a = NEJ.R, bo5t = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), nX0x;
    if (!!N4R.cy5D)
        return;
    N4R.cy5D = NEJ.C();
    nX0x = N4R.cy5D.prototype;
    N4R.cy5D.A4E = function(e4i) {
        e4i = e4i || {};
        var cs5x = !!this.zJ4N && this.zJ4N.shift();
        if (!cs5x) {
            cs5x = new this(e4i);
            this.ceB1x = (this.ceB1x || 0) + 1
        }
        cs5x.bj5o(e4i);
        return cs5x
    }
    ;
    N4R.cy5D.S5X = function() {
        var Rr0x = function(q4u, r4v, i4m) {
            q4u.S5X();
            i4m.splice(r4v, 1)
        };
        return function(cs5x) {
            if (!cs5x)
                return null;
            if (!k4o.eu7n(cs5x)) {
                if (!(cs5x instanceof this)) {
                    var fn7g = cs5x.constructor;
                    if (!!fn7g.S5X)
                        fn7g.S5X(cs5x);
                    return null
                }
                if (cs5x == this.eR7K)
                    delete this.eR7K;
                if (cs5x == this.zD4H)
                    delete this.zD4H;
                cs5x.bA5F();
                if (!this.zJ4N)
                    this.zJ4N = [];
                if (k4o.cV6P(this.zJ4N, cs5x) < 0) {
                    this.zJ4N.push(cs5x)
                }
                return null
            }
            k4o.mq0x(cs5x, Rr0x, this)
        }
    }();
    N4R.cy5D.fX8P = function(e4i) {
        e4i = e4i || {};
        if (!this.eR7K)
            this.eR7K = this.A4E(e4i);
        return this.eR7K
    }
    ;
    N4R.cy5D.ceN1x = function(e4i, qX1x) {
        e4i = e4i || {};
        if (!!qX1x && !!this.zD4H) {
            this.zD4H.S5X();
            delete this.zD4H
        }
        if (!this.zD4H) {
            this.zD4H = this.A4E(e4i)
        } else {
            this.zD4H.bj5o(e4i)
        }
        return this.zD4H
    }
    ;
    nX0x.cq5v = function() {
        var gi8a = +(new Date);
        return function() {
            this.id = gi8a++;
            this.lk9b = {};
            this.bQs6m = {}
        }
    }();
    nX0x.bj5o = function(e4i) {
        this.bkF8x(e4i)
    }
    ;
    nX0x.bA5F = function() {
        this.hw8o();
        this.He6Y()
    }
    ;
    nX0x.bS5X = function() {
        var gi8a = +(new Date);
        var cff2x = function(bg5l) {
            if (!bg5l || bg5l.length < 3)
                return;
            this.bQs6m["de-" + gi8a++] = bg5l;
            h4l.s4w.apply(h4l, bg5l)
        };
        return function(i4m) {
            k4o.bb5g(i4m, cff2x, this)
        }
    }();
    nX0x.He6Y = function() {
        var cfh2x = function(bg5l, J4N, bu5z) {
            delete bu5z[J4N];
            h4l.mt0x.apply(h4l, bg5l)
        };
        return function() {
            k4o.eq7j(this.bQs6m, cfh2x)
        }
    }();
    nX0x.czD7w = function(dG7z) {
        dG7z = dG7z || bo5t;
        k4o.eq7j(this, function(Cq5v, J4N, bu5z) {
            if (!!Cq5v && !!Cq5v.S5X && !dG7z(Cq5v)) {
                delete bu5z[J4N];
                Cq5v.S5X()
            }
        })
    }
    ;
    nX0x.S5X = function() {
        this.constructor.S5X(this)
    }
    ;
    nX0x.bvW1x = function(t4x) {
        var d4h = this.lk9b[t4x.toLowerCase()];
        return !!d4h && d4h !== bo5t
    }
    ;
    nX0x.s4w = function(t4x, d4h) {
        this.vk2x.apply(this, arguments);
        return this
    }
    ;
    nX0x.mt0x = function(t4x, d4h) {
        var t4x = (t4x || "").toLowerCase()
          , dO7H = this.lk9b[t4x];
        if (!k4o.eu7n(dO7H)) {
            if (dO7H == d4h)
                delete this.lk9b[t4x];
            return
        }
        k4o.mq0x(dO7H, function(eB7u, r4v, i4m) {
            if (eB7u == d4h)
                i4m.splice(r4v, 1)
        })
    }
    ;
    nX0x.vk2x = function(t4x, d4h) {
        if (!!t4x && k4o.gb8T(d4h))
            this.lk9b[t4x.toLowerCase()] = d4h;
        return this
    }
    ;
    nX0x.bkF8x = function() {
        var cgW2x = function(d4h, t4x) {
            this.vk2x(t4x, d4h)
        };
        return function(dO7H) {
            k4o.eq7j(dO7H, cgW2x, this);
            return this
        }
    }();
    nX0x.hw8o = function() {
        var bkt8l = function(d4h, t4x) {
            this.hw8o(t4x)
        };
        return function(t4x) {
            var t4x = (t4x || "").toLowerCase();
            if (!!t4x) {
                delete this.lk9b[t4x]
            } else {
                k4o.eq7j(this.lk9b, bkt8l, this)
            }
            return this
        }
    }();
    nX0x.bkp8h = function(t4x, d4h) {
        if (!t4x || !k4o.gb8T(d4h))
            return this;
        t4x = t4x.toLowerCase();
        var dO7H = this.lk9b[t4x];
        if (!dO7H) {
            this.lk9b[t4x] = d4h;
            return this
        }
        if (!k4o.eu7n(dO7H)) {
            this.lk9b[t4x] = [dO7H]
        }
        this.lk9b[t4x].push(d4h);
        return this
    }
    ;
    nX0x.y4C = function(t4x) {
        var d4h = this.lk9b[(t4x || "").toLowerCase()];
        if (!d4h)
            return this;
        var bg5l = fh7a.slice.call(arguments, 1);
        if (!k4o.eu7n(d4h))
            return d4h.apply(this, bg5l);
        k4o.bb5g(d4h, function(dg6a) {
            try {
                dg6a.apply(this, bg5l)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    }
    ;
    N4R.Yw3x = function() {
        var Q5V = {};
        return function(D4H, fn7g, e4i) {
            var eP7I = fn7g.che2x;
            if (!eP7I) {
                eP7I = k4o.MK8C(10);
                fn7g.che2x = eP7I
            }
            var J4N = D4H + "-" + eP7I
              , cs5x = Q5V[J4N];
            if (!!e4i && !cs5x) {
                cs5x = fn7g.A4E(e4i);
                cs5x.S5X = cs5x.S5X.ek7d(function(d4h) {
                    delete Q5V[J4N];
                    delete cs5x.S5X
                });
                Q5V[J4N] = cs5x
            }
            return cs5x
        }
    }()
}
)();
(function() {
    var o = NEJ.O
      , u = NEJ.P("nej.u")
      , j = NEJ.P("nej.j");
    j.gQ8I = function() {
        var cL6F = new Date
          , chf2x = +cL6F
          , bkf8X = 864e5;
        var chI2x = function(T5Y) {
            var rj1x = document.cookie
              , rT1x = "\\b" + T5Y + "="
              , Yv3x = rj1x.search(rT1x);
            if (Yv3x < 0)
                return "";
            Yv3x += rT1x.length - 2;
            var yO4S = rj1x.indexOf(";", Yv3x);
            if (yO4S < 0)
                yO4S = rj1x.length;
            return rj1x.substring(Yv3x, yO4S) || ""
        };
        return function(T5Y, j4n) {
            if (j4n === undefined)
                return chI2x(T5Y);
            if (u.fx7q(j4n)) {
                if (!!j4n) {
                    document.cookie = T5Y + "=" + j4n + ";";
                    return j4n
                }
                j4n = {
                    expires: -100
                }
            }
            j4n = j4n || o;
            var rj1x = T5Y + "=" + (j4n.value || "") + ";";
            delete j4n.value;
            if (j4n.expires !== undefined) {
                cL6F.setTime(chf2x + j4n.expires * bkf8X);
                j4n.expires = cL6F.toGMTString()
            }
            rj1x += u.uZ2x(j4n, ";");
            document.cookie = rj1x
        }
    }()
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, hT8L = c4g("nej.c"), dU7N = c4g("nej.g"), a3x = c4g("nej.e"), w4A = c4g("nej.j"), G4K = c4g("nej.ut"), N4R = c4g("nej.ut.j"), k4o = c4g("nej.u"), b4f;
    if (!!N4R.Hl6f)
        return;
    N4R.Hl6f = NEJ.C();
    b4f = N4R.Hl6f.O4S(G4K.cy5D);
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.pa1x = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.pa1x, e4i);
        var Bc4g = hT8L.z4D("csrf");
        if ((/^\/[^\/]/.test(this.pa1x.url) || this.pa1x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Bc4g.cookie && !!Bc4g.param) {
            var bw5B = encodeURIComponent(Bc4g.param) + "=" + encodeURIComponent(w4A.gQ8I(Bc4g.cookie) || "")
              , QF0x = this.pa1x.url.indexOf("?") < 0 ? "?" : "&";
            this.pa1x.url += QF0x + bw5B
        }
        this.Yt3x = e4i.headers || {};
        var bl5q = this.Yt3x[dU7N.yj4n];
        if (bl5q == null)
            this.Yt3x[dU7N.yj4n] = dU7N.bRl8d
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        delete this.yz4D;
        delete this.pa1x;
        delete this.Yt3x
    }
    ;
    b4f.ciT3x = function(bl5q) {
        var bu5z = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.pa1x.noescape) {
            return k4o.Em5r(bu5z, bl5q)
        } else {
            return bl5q
        }
    }
    ;
    b4f.ue2x = function(d4h) {
        var eg7Z = d4h.status;
        if (eg7Z == -1) {
            this.y4C("onerror", {
                code: dU7N.bxF1x,
                message: "请求[" + this.pa1x.url + "]超时！"
            });
            return
        }
        if (("" + eg7Z).indexOf("2") != 0) {
            this.y4C("onerror", {
                data: eg7Z,
                code: dU7N.bsB0x,
                message: "服务器返回异常状态[" + eg7Z + "]!",
                extData: d4h.result
            });
            return
        }
        this.y4C("onload", a3x.bYg0x(this.ciT3x(d4h.result), this.pa1x.type))
    }
    ;
    b4f.ch5m = bo5t;
    b4f.bjX8P = function(j4n) {
        var W5b = this.pa1x.url;
        if (!W5b) {
            this.y4C("onerror", {
                code: dU7N.bsJ0x,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.pa1x.data = j4n == null ? null : j4n;
            var d4h = {
                request: this.pa1x,
                headers: this.Yt3x
            };
            try {
                this.y4C("onbeforerequest", d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.ch5m(d4h)
        } catch (e) {
            this.y4C("onerror", {
                code: dU7N.bsB0x,
                message: "请求[" + W5b + "]失败:" + e.message + "！"
            })
        }
        return this
    }
    ;
    b4f.jy9p = bo5t
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, bc5h = c4g("nej.h"), dU7N = c4g("nej.g"), k4o = c4g("nej.u"), N4R = c4g("nej.ut.j"), Q5V = {}, Sf1x;
    if (!!N4R.Yr3x)
        return;
    N4R.Yr3x = NEJ.C();
    Sf1x = N4R.Yr3x.O4S(N4R.Hl6f);
    Sf1x.bA5F = function() {
        this.bF5K();
        window.clearTimeout(this.dQ7J);
        delete this.dQ7J;
        try {
            this.qr1x.onreadystatechange = bo5t;
            this.qr1x.abort()
        } catch (e) {}
        delete this.qr1x
    }
    ;
    Sf1x.ch5m = function() {
        var cjf3x = function(C4G, J4N) {
            this.qr1x.setRequestHeader(J4N, C4G)
        };
        return function(e4i) {
            var fJ8B = e4i.request
              , nQ0x = e4i.headers;
            this.qr1x = bc5h.bjO8G();
            if (nQ0x[dU7N.yj4n] === dU7N.Co5t) {
                delete nQ0x[dU7N.yj4n];
                this.qr1x.upload.onprogress = this.hy8q.g4k(this, 1);
                if (fJ8B.data.tagName === "FORM")
                    fJ8B.data = new FormData(fJ8B.data)
            }
            this.qr1x.onreadystatechange = this.hy8q.g4k(this, 2);
            if (fJ8B.timeout != 0) {
                this.dQ7J = window.setTimeout(this.hy8q.g4k(this, 3), fJ8B.timeout)
            }
            this.qr1x.open(fJ8B.method, fJ8B.url, !fJ8B.sync);
            k4o.eq7j(nQ0x, cjf3x, this);
            if (!!this.pa1x.cookie && "withCredentials"in this.qr1x)
                this.qr1x.withCredentials = !0;
            this.qr1x.send(fJ8B.data)
        }
    }();
    Sf1x.hy8q = function(t4x) {
        switch (t4x) {
        case 1:
            this.y4C("onuploading", arguments[1]);
            break;
        case 2:
            if (this.qr1x.readyState == 4)
                this.ue2x({
                    status: this.qr1x.status,
                    result: this.qr1x.responseText || ""
                });
            break;
        case 3:
            this.ue2x({
                status: -1
            });
            break
        }
    }
    ;
    Sf1x.jy9p = function() {
        this.ue2x({
            status: 0
        });
        return this
    }
}
)();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined")
            TrimPath = exports
    }
    var Sw1x = {}, Yn3x = [], bFx4B = /\s+/g, gi8a = +(new Date), Ho6i, bP5U, ma0x;
    var Ch5m = function() {
        var gf8X = /^\s*[\[\{'"].*?[\]\}'"]\s*$/
          , js9j = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/
          , Cd5i = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i
          , bjo8g = /^new\s+/
          , cji3x = /['"]/;
        var cjs3x = function(C4G) {
            if (gf8X.test(C4G))
                return;
            C4G = C4G.split(".")[0].trim();
            if (!C4G || cji3x.test(C4G))
                return;
            C4G = C4G.replace(bjo8g, "");
            try {
                if (Cd5i.test(C4G))
                    return;
                ma0x[C4G] = 1
            } catch (e) {}
        };
        return function(bl5q) {
            bl5q = bl5q || "";
            if (!bl5q || gf8X.test(bl5q))
                return;
            var bs5x = bl5q.split(js9j);
            for (var i = 0, l = bs5x.length; i < l; i++)
                cjs3x(bs5x[i])
        }
    }();
    var cjt3x = function(dv6p) {
        if (dv6p[2] != "in")
            throw "bad for loop statement: " + dv6p.join(" ");
        Yn3x.push(dv6p[1]);
        Ch5m(dv6p[3]);
        return "var __HASH__" + dv6p[1] + " = " + dv6p[3] + "," + dv6p[1] + "," + dv6p[1] + "_count=0;" + "if (!!__HASH__" + dv6p[1] + ")" + "for(var " + dv6p[1] + "_key in __HASH__" + dv6p[1] + "){" + dv6p[1] + " = __HASH__" + dv6p[1] + "[" + dv6p[1] + "_key];" + "if (typeof(" + dv6p[1] + ')=="function") continue;' + dv6p[1] + "_count++;"
    };
    var cju3x = function() {
        var dv6p = Yn3x[Yn3x.length - 1];
        return "}; if(!__HASH__" + dv6p + "||!" + dv6p + "_count){"
    };
    var cjv3x = function() {
        Yn3x.pop();
        return "};"
    };
    var cjw3x = function(dv6p) {
        if (dv6p[2] != "as")
            throw "bad for list loop statement: " + dv6p.join(" ");
        var KD7w = dv6p[1].split("..");
        if (KD7w.length > 1) {
            Ch5m(KD7w[0]);
            Ch5m(KD7w[1]);
            return "for(var " + dv6p[3] + "," + dv6p[3] + "_index=0," + dv6p[3] + "_beg=" + KD7w[0] + "," + dv6p[3] + "_end=" + KD7w[1] + "," + dv6p[3] + "_length=parseInt(" + dv6p[3] + "_end-" + dv6p[3] + "_beg+1);" + dv6p[3] + "_index<" + dv6p[3] + "_length;" + dv6p[3] + "_index++){" + dv6p[3] + " = " + dv6p[3] + "_beg+" + dv6p[3] + "_index;"
        } else {
            Ch5m(dv6p[1]);
            return "for(var __LIST__" + dv6p[3] + " = " + dv6p[1] + "," + dv6p[3] + "," + dv6p[3] + "_index=0," + dv6p[3] + "_length=__LIST__" + dv6p[3] + ".length;" + dv6p[3] + "_index<" + dv6p[3] + "_length;" + dv6p[3] + "_index++){" + dv6p[3] + " = __LIST__" + dv6p[3] + "[" + dv6p[3] + "_index];"
        }
    };
    var cjx3x = function(dv6p) {
        if (!dv6p || !dv6p.length)
            return;
        dv6p.shift();
        var T5Y = dv6p[0].split("(")[0];
        return "var " + T5Y + " = function" + dv6p.join("").replace(T5Y, "") + "{var __OUT=[];"
    };
    var cjB3x = function(dv6p) {
        if (!dv6p[1])
            throw "bad include statement: " + dv6p.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var bja8S = function(lu9l, dv6p) {
        Ch5m(dv6p.slice(1).join(" "));
        return lu9l
    };
    var cjC3x = function(dv6p) {
        return bja8S("if(", dv6p)
    };
    var cjD3x = function(dv6p) {
        return bja8S("}else if(", dv6p)
    };
    var cjE3x = function(dv6p) {
        return bja8S("var ", dv6p)
    };
    bP5U = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cjC3x,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: cjD3x,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cjt3x,
                pmin: 3
            },
            forelse: {
                pfix: cju3x
            },
            "/for": {
                pfix: cjv3x
            },
            list: {
                pfix: cjw3x,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: cjE3x,
                sfix: ";"
            },
            macro: {
                pfix: cjx3x
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    Ho6i = !0
                }
            },
            "/trim": {
                pfix: function() {
                    Ho6i = null
                }
            },
            inline: {
                pfix: cjB3x,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(lu9l) {
                return (lu9l || "") + "" + gi8a
            },
            "default": function(C4G, kY9P) {
                return C4G || kY9P
            }
        }
    };
    var cjF3x = function() {
        var cjU3x = /\\([\{\}])/g;
        return function(bl5q, iQ9H) {
            bl5q = bl5q.replace(cjU3x, "$1");
            var dv6p = bl5q.slice(1, -1).split(bFx4B)
              , bd5i = bP5U.def[dv6p[0]];
            if (!bd5i) {
                Yb3x(bl5q, iQ9H);
                return
            }
            if (!!bd5i.pmin && bd5i.pmin >= dv6p.length)
                throw "Statement needs more parameters:" + bl5q;
            iQ9H.push(!!bd5i.pfix && typeof bd5i.pfix != "string" ? bd5i.pfix(dv6p) : bd5i.pfix || "");
            if (!!bd5i.sfix) {
                if (dv6p.length <= 1) {
                    if (!!bd5i.pdft)
                        iQ9H.push(bd5i.pdft)
                } else {
                    for (var i = 1, l = dv6p.length; i < l; i++) {
                        if (i > 1)
                            iQ9H.push(" ");
                        iQ9H.push(dv6p[i])
                    }
                }
                iQ9H.push(bd5i.sfix)
            }
        }
    }();
    var bMI5N = function(Hy6s, iQ9H) {
        if (!Hy6s || !Hy6s.length)
            return;
        if (Hy6s.length == 1) {
            var biG8y = Hy6s.pop();
            Ch5m(biG8y);
            iQ9H.push(biG8y == "" ? '""' : biG8y);
            return
        }
        var biv8n = Hy6s.pop().split(":");
        iQ9H.push("__MDF['" + biv8n.shift() + "'](");
        bMI5N(Hy6s, iQ9H);
        if (biv8n.length > 0) {
            var bg5l = biv8n.join(":");
            Ch5m(bg5l);
            iQ9H.push("," + bg5l)
        }
        iQ9H.push(")")
    };
    var Yb3x = function(bl5q, iQ9H) {
        if (!bl5q)
            return;
        var vV3x = bl5q.split("\n");
        if (!vV3x || !vV3x.length)
            return;
        for (var i = 0, l = vV3x.length, hd8V; i < l; i++) {
            hd8V = vV3x[i];
            if (!!Ho6i) {
                hd8V = hd8V.trim();
                if (!hd8V)
                    continue
            }
            cjV3x(hd8V, iQ9H);
            if (!!Ho6i && i < l - 1)
                iQ9H.push("__OUT.push('\\n');")
        }
    };
    var cjV3x = function() {
        var ckd3x = /\|\|/g
          , ckg3x = /#@@#/g;
        return function(bl5q, iQ9H) {
            var Lg8Y = "}", Lh8Z = -1, bm5r = bl5q.length, uN2x, gG8y, HC6w, XO3x, Lj8b;
            while (Lh8Z + Lg8Y.length < bm5r) {
                uN2x = "${";
                gG8y = "}";
                HC6w = bl5q.indexOf(uN2x, Lh8Z + Lg8Y.length);
                if (HC6w < 0)
                    break;
                if (bl5q.charAt(HC6w + 2) == "%") {
                    uN2x = "${%";
                    gG8y = "%}"
                }
                XO3x = bl5q.indexOf(gG8y, HC6w + uN2x.length);
                if (XO3x < 0)
                    break;
                XK3x(bl5q.substring(Lh8Z + Lg8Y.length, HC6w), iQ9H);
                Lj8b = bl5q.substring(HC6w + uN2x.length, XO3x).replace(ckd3x, "#@@#").split("|");
                for (var i = 0, l = Lj8b.length; i < l; Lj8b[i] = Lj8b[i].replace(ckg3x, "||"),
                i++)
                    ;
                iQ9H.push("__OUT.push(");
                bMI5N(Lj8b, iQ9H);
                iQ9H.push(");");
                Lg8Y = gG8y;
                Lh8Z = XO3x
            }
            XK3x(bl5q.substring(Lh8Z + Lg8Y.length), iQ9H)
        }
    }();
    var XK3x = function() {
        var bu5z = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var ckh3x = function(bl5q) {
            return (bl5q || "").replace(bu5z.r, function($1) {
                return bu5z[$1] || $1
            })
        };
        return function(bl5q, iQ9H) {
            if (!bl5q)
                return;
            iQ9H.push("__OUT.push('" + ckh3x(bl5q) + "');")
        }
    }();
    var ckk3x = function() {
        var ckr3x = /\t/g
          , ckx3x = /\n/g
          , ckS3x = /\r\n?/g;
        var bve1x = function(bl5q, uN2x) {
            var r4v = bl5q.indexOf("}", uN2x + 1);
            while (bl5q.charAt(r4v - 1) == "\\") {
                r4v = bl5q.indexOf("}", r4v + 1)
            }
            return r4v
        };
        var clX4b = function() {
            var bs5x = []
              , Fq6k = arguments[0];
            for (var x in Fq6k) {
                x = (x || "").trim();
                if (!x)
                    continue;
                bs5x.push(x + "=$v('" + x + "')")
            }
            return bs5x.length > 0 ? "var " + bs5x.join(",") + ";" : ""
        };
        return function(bl5q) {
            ma0x = {};
            bl5q = bl5q.replace(ckS3x, "\n").replace(ckr3x, "    ");
            var qC1x = ["if(!__CTX) return '';", ""];
            qC1x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qC1x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qC1x.push("__OUT=[];");
            var FC6w = -1
              , bm5r = bl5q.length;
            var mF0x, HF6z, Lu8m, Ly8q, zG4K, LA8s, bhI7B, LH8z;
            while (FC6w + 1 < bm5r) {
                mF0x = FC6w;
                mF0x = bl5q.indexOf("{", mF0x + 1);
                while (mF0x >= 0) {
                    HF6z = bve1x(bl5q, mF0x);
                    Lu8m = bl5q.substring(mF0x, HF6z);
                    Ly8q = Lu8m.match(bP5U.blk);
                    if (!!Ly8q) {
                        zG4K = Ly8q[1].length + 1;
                        LA8s = bl5q.indexOf("}", mF0x + zG4K);
                        if (LA8s >= 0) {
                            bhI7B = LA8s - mF0x - zG4K <= 0 ? "{/" + Ly8q[1] + "}" : Lu8m.substr(zG4K + 1);
                            zG4K = bl5q.indexOf(bhI7B, LA8s + 1);
                            if (zG4K >= 0) {
                                Yb3x(bl5q.substring(FC6w + 1, mF0x), qC1x);
                                LH8z = bl5q.substring(LA8s + 1, zG4K);
                                switch (Ly8q[1]) {
                                case "cdata":
                                    XK3x(LH8z, qC1x);
                                    break;
                                case "minify":
                                    XK3x(LH8z.replace(ckx3x, " ").replace(bFx4B, " "), qC1x);
                                    break;
                                case "eval":
                                    if (!!LH8z)
                                        qC1x.push("__OUT.push((function(){" + LH8z + "})());");
                                    break
                                }
                                mF0x = FC6w = zG4K + bhI7B.length - 1
                            }
                        }
                    } else if (bl5q.charAt(mF0x - 1) != "$" && bl5q.charAt(mF0x - 1) != "\\" && Lu8m.substr(Lu8m.charAt(1) == "/" ? 2 : 1).search(bP5U.tag) == 0) {
                        break
                    }
                    mF0x = bl5q.indexOf("{", mF0x + 1)
                }
                if (mF0x < 0)
                    break;
                HF6z = bve1x(bl5q, mF0x);
                if (HF6z < 0)
                    break;
                Yb3x(bl5q.substring(FC6w + 1, mF0x), qC1x);
                cjF3x(bl5q.substring(mF0x, HF6z + 1), qC1x);
                FC6w = HF6z
            }
            Yb3x(bl5q.substring(FC6w + 1), qC1x);
            qC1x.push(';return __OUT.join("");');
            qC1x[1] = clX4b(ma0x);
            ma0x = null;
            return new Function("__CTX","__MDF",qC1x.join(""))
        }
    }();
    TrimPath.seed = function() {
        return gi8a
    }
    ;
    TrimPath.merge = function() {
        var LL8D = {};
        TrimPath.dump = function() {
            return {
                func: LL8D,
                text: Sw1x
            }
        }
        ;
        return function(eP7I, j4n, jh9Y) {
            try {
                j4n = j4n || {};
                if (!LL8D[eP7I] && !Sw1x[eP7I])
                    return "";
                if (!LL8D[eP7I]) {
                    LL8D[eP7I] = ckk3x(Sw1x[eP7I]);
                    delete Sw1x[eP7I]
                }
                if (!!jh9Y) {
                    for (var x in bP5U.ext)
                        if (!jh9Y[x])
                            jh9Y[x] = bP5U.ext[x]
                }
                return LL8D[eP7I](j4n, jh9Y || bP5U.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var clY4c = +(new Date);
        return function(bl5q, eP7I) {
            if (!bl5q)
                return "";
            eP7I = eP7I || "ck_" + clY4c++;
            Sw1x[eP7I] = bl5q;
            return eP7I
        }
    }()
}
)();
(function() {
    var c4g = NEJ.P
      , a3x = c4g("nej.e")
      , k4o = c4g("nej.u")
      , eG7z = {}
      , byX2x = {};
    a3x.HL6F = TrimPath.seed;
    a3x.bW5b = function() {
        var bzj2x = function(D4H) {
            return !a3x.hZ8R ? "" : a3x.hZ8R(D4H)
        };
        return function(eP7I, j4n, jh9Y) {
            j4n = NEJ.X(NEJ.X({}, byX2x), j4n);
            j4n.inline = bzj2x;
            jh9Y = NEJ.X(NEJ.X({}, eG7z), jh9Y);
            jh9Y.rand = k4o.nh0x;
            jh9Y.format = k4o.iV9M;
            jh9Y.escape = k4o.dI7B;
            jh9Y.inline = bzj2x;
            return TrimPath.merge(eP7I, j4n, jh9Y)
        }
    }();
    a3x.ep7i = function(bl5q, cms4w) {
        if (!bl5q)
            return "";
        var eP7I, F4J = a3x.z4D(bl5q);
        if (!!F4J) {
            eP7I = F4J.id;
            bl5q = F4J.value || F4J.innerText;
            if (!cms4w)
                a3x.cC6w(F4J)
        }
        return TrimPath.parse(bl5q, eP7I)
    }
    ;
    a3x.dJ7C = function(bE5J, eP7I, j4n, jh9Y) {
        bE5J = a3x.z4D(bE5J);
        if (!!bE5J)
            bE5J.innerHTML = a3x.bW5b(eP7I, j4n, jh9Y);
        return this
    }
    ;
    a3x.cyU7N = function(bu5z) {
        NEJ.X(eG7z, bu5z)
    }
    ;
    a3x.cmT4X = function(bu5z) {
        NEJ.X(byX2x, bu5z)
    }
    ;
    c4g("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
}
)();
(function() {
    var dh6b = NEJ.P("nej.p")
      , N4R = window
      , kj9a = dh6b.bbH6B
      , bAk2x = kj9a.ipad || kj9a.iphone;
    if (!bAk2x && !!N4R.requestAnimationFrame && !!N4R.cancelRequestAnimationFrame)
        return;
    var lu9l = dh6b.dk6e.prefix.pro;
    if (!bAk2x && !!N4R[lu9l + "RequestAnimationFrame"] && !!N4R[lu9l + "CancelRequestAnimationFrame"]) {
        N4R.requestAnimationFrame = N4R[lu9l + "RequestAnimationFrame"];
        N4R.cancelRequestAnimationFrame = N4R[lu9l + "CancelRequestAnimationFrame"];
        return
    }
    var Xw2x = kj9a.desktop ? 80 : kj9a.ios ? 50 : 30;
    N4R.requestAnimationFrame = function(dw6q) {
        return window.setTimeout(function() {
            try {
                dw6q(+(new Date))
            } catch (ex) {}
        }, 1e3 / Xw2x)
    }
    ;
    N4R.cancelRequestAnimationFrame = function(D4H) {
        window.clearTimeout(D4H);
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, k4o = c4g("nej.u"), a3x = c4g("nej.e"), h4l = c4g("nej.v"), bc5h = c4g("nej.h"), cT6N = c4g("nej.x"), Xv2x = c4g("nej.ut.j.cb"), gn8f;
    if (!!a3x.rx1x)
        return;
    a3x.rx1x = cT6N.rx1x = function() {
        var Q5V = {}
          , gf8X = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d4h) {
            var D4H = decodeURIComponent(d4h.target)
              , t4x = d4h.type.toLowerCase();
            var dg6a = Q5V[D4H + "-on" + t4x];
            if (!!dg6a) {
                try {
                    dg6a(d4h)
                } catch (e) {}
                return
            }
            var cH6B = Q5V[D4H + "-tgt"];
            if (!!cH6B && gf8X.test(t4x)) {
                bAV2x(cH6B, d4h)
            }
        }
        ;
        var bhm7f = function(e4i) {
            var bE5J = a3x.z4D(e4i.parent) || document.body
              , dD7w = a3x.bW5b(gn8f, e4i);
            bE5J.insertAdjacentHTML(!e4i.hidden ? "beforeEnd" : "afterBegin", dD7w)
        };
        var bAV2x = function(D4H, d4h) {
            var t4x = d4h.type.toLowerCase();
            requestAnimationFrame(function() {
                h4l.y4C(D4H, t4x)
            })
        };
        var cnC4G = function(hl8d) {
            return !!hl8d && !!hl8d.inited && !!hl8d.inited()
        };
        var Ma8S = function(D4H) {
            var bs5x = [document.embeds[D4H], a3x.z4D(D4H), document[D4H], window[D4H]]
              , r4v = k4o.eq7j(bs5x, cnC4G)
              , hl8d = bs5x[r4v]
              , bhi7b = D4H + "-count";
            Q5V[bhi7b]++;
            if (!!hl8d || Q5V[bhi7b] > 100) {
                Q5V[D4H](hl8d);
                delete Q5V[D4H];
                delete Q5V[bhi7b];
                return
            }
            window.setTimeout(Ma8S.g4k(null, D4H), 300)
        };
        var cos4w = function(e4i) {
            var D4H = e4i.id
              , fY8Q = e4i.params;
            if (!fY8Q) {
                fY8Q = {};
                e4i.params = fY8Q
            }
            var ma0x = fY8Q.flashvars || "";
            ma0x += (!ma0x ? "" : "&") + ("id=" + D4H);
            if (!e4i.hidden && (!!e4i.target || bc5h.baI5N(fY8Q.wmode))) {
                var hg8Y = a3x.la9R(e4i.target) || a3x.la9R(e4i.parent)
                  , Xr2x = k4o.YF3x();
                Xv2x["cb" + Xr2x] = bAV2x.g4k(null, hg8Y);
                ma0x += "&onevent=nej.ut.j.cb.cb" + Xr2x;
                Q5V[D4H + "-tgt"] = hg8Y
            }
            fY8Q.flashvars = ma0x;
            k4o.eq7j(e4i, function(C4G, J4N) {
                if (k4o.gb8T(C4G) && J4N != "onready") {
                    Q5V[D4H + "-" + J4N] = C4G
                }
            })
        };
        return function(e4i) {
            e4i = NEJ.X({}, e4i);
            if (!e4i.src)
                return;
            var D4H = "flash_" + k4o.YF3x();
            e4i.id = D4H;
            cos4w(e4i);
            bhm7f(e4i);
            if (!e4i.onready)
                return;
            Q5V[D4H] = e4i.onready;
            Q5V[D4H + "-count"] = 0;
            Ma8S(D4H)
        }
    }();
    gn8f = a3x.ep7i('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cT6N.isChange = !0
}
)();
(function() {
    var c4g = NEJ.P, hT8L = c4g("nej.c"), a3x = c4g("nej.e"), k4o = c4g("nej.u"), N4R = c4g("nej.ut.j"), Xv2x = c4g("nej.ut.j.cb"), Q5V = {}, gi8a = +(new Date), bhd7W;
    if (!!N4R.bgZ7S)
        return;
    Xv2x["ld" + gi8a] = function(J4N, cJ6D) {
        var jc9T = Q5V[J4N];
        if (!jc9T)
            return;
        delete Q5V[J4N];
        jc9T.ue2x({
            status: 200,
            result: cJ6D
        })
    }
    ;
    Xv2x["er" + gi8a] = function(J4N, eg7Z) {
        var jc9T = Q5V[J4N];
        if (!jc9T)
            return;
        delete Q5V[J4N];
        jc9T.ue2x({
            status: eg7Z || 0
        })
    }
    ;
    N4R.bgZ7S = NEJ.C();
    bhd7W = N4R.bgZ7S.O4S(N4R.Hl6f);
    bhd7W.ch5m = function(e4i) {
        var hl8d = Q5V.flash;
        if (k4o.eu7n(hl8d)) {
            hl8d.push(this.ch5m.g4k(this, e4i));
            return
        }
        if (!hl8d) {
            Q5V.flash = [this.ch5m.g4k(this, e4i)];
            a3x.rx1x({
                hidden: !0,
                src: hT8L.z4D("ajax.swf"),
                onready: function(hl8d) {
                    if (!hl8d)
                        return;
                    var i4m = Q5V.flash;
                    Q5V.flash = hl8d;
                    k4o.mq0x(i4m, function(dg6a) {
                        try {
                            dg6a()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.yz4D = "swf-" + k4o.nh0x();
        Q5V[this.yz4D] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, e4i.request);
        j4n.key = this.yz4D;
        j4n.headers = e4i.headers;
        j4n.onerror = "nej.ut.j.cb.er" + gi8a;
        j4n.onloaded = "nej.ut.j.cb.ld" + gi8a;
        var bDn3x = hT8L.bQX8P(j4n.url);
        if (!!bDn3x)
            j4n.policyURL = bDn3x;
        hl8d.request(j4n)
    }
    ;
    bhd7W.jy9p = function() {
        delete Q5V[this.yz4D];
        this.ue2x({
            status: 0
        });
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , bc5h = c4g("nej.h");
    bc5h.bEa3x = function() {
        var cS6M = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(jL9C) {
            jL9C = jL9C || "";
            if (cS6M.test(jL9C))
                return RegExp.$1;
            return "*"
        }
    }();
    bc5h.bgY7R = function(j4n) {
        return j4n
    }
    ;
    bc5h.bgP7I = function(bFm3x, e4i) {
        if (!bFm3x.postMessage)
            return;
        e4i = e4i || Y5d;
        bFm3x.postMessage(bc5h.bgY7R(e4i.data), bc5h.bEa3x(e4i.origin))
    }
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), b4f;
    if (!!N4R.fu7n)
        return;
    N4R.fu7n = NEJ.C();
    b4f = N4R.fu7n.O4S(N4R.cy5D);
    b4f.cq5v = function() {
        this.R5W = {};
        this.cu5z()
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.Mr8j = a3x.z4D(e4i.element) || window;
        this.bFy4C(e4i.event);
        this.cox4B();
        this.y4C("oninit")
    }
    ;
    b4f.bA5F = function() {
        var Ep5u = function(C4G, J4N, bu5z) {
            if (!k4o.eu7n(C4G)) {
                k4o.YG3x(this.Mr8j, J4N)
            }
            delete bu5z[J4N]
        };
        return function() {
            this.bF5K();
            k4o.eq7j(this.R5W, Ep5u, this);
            delete this.Mr8j
        }
    }();
    b4f.Xj2x = function(F4J, t4x) {
        F4J = a3x.z4D(F4J);
        return F4J == this.Mr8j && (!t4x || !!this.R5W["on" + t4x])
    }
    ;
    b4f.bFy4C = function(d4h) {
        if (k4o.fx7q(d4h)) {
            var T5Y = "on" + d4h;
            if (!this.R5W[T5Y]) {
                this.R5W[T5Y] = this.coy4C.g4k(this, d4h)
            }
            this.bGm4q(d4h);
            return
        }
        if (k4o.eu7n(d4h)) {
            k4o.bb5g(d4h, this.bFy4C, this)
        }
    }
    ;
    b4f.bGm4q = function(t4x) {
        var d4h = "on" + t4x
          , dg6a = this.Mr8j[d4h]
          , bGo4s = this.R5W[d4h];
        if (dg6a != bGo4s) {
            this.Xh2x(t4x);
            if (!!dg6a && dg6a != bo5t)
                this.bIh4l(t4x, dg6a);
            this.Mr8j[d4h] = bGo4s
        }
    }
    ;
    b4f.bIh4l = function(t4x, dg6a, coz4D) {
        var i4m = this.R5W[t4x];
        if (!i4m) {
            i4m = [];
            this.R5W[t4x] = i4m
        }
        if (k4o.gb8T(dg6a)) {
            !coz4D ? i4m.push(dg6a) : i4m.unshift(dg6a)
        }
    }
    ;
    b4f.Xh2x = function(t4x, dg6a) {
        var i4m = this.R5W[t4x];
        if (!i4m || !i4m.length)
            return;
        if (!dg6a) {
            delete this.R5W[t4x];
            return
        }
        k4o.mq0x(i4m, function(C4G, r4v, HW7P) {
            if (dg6a === C4G) {
                HW7P.splice(r4v, 1);
                return !0
            }
        })
    }
    ;
    b4f.coy4C = function(t4x, d4h) {
        d4h = d4h || {
            noargs: !0
        };
        d4h.type = t4x;
        this.y4C("ondispatch", d4h);
        if (!!d4h.stopped)
            return;
        k4o.bb5g(this.R5W[t4x], function(dg6a) {
            try {
                dg6a(d4h)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    }
    ;
    b4f.cox4B = function() {
        var bgu7n = function(d4h) {
            var bg5l = d4h.args
              , t4x = bg5l[1].toLowerCase();
            if (this.Xj2x(bg5l[0], t4x)) {
                d4h.stopped = !0;
                this.bGm4q(t4x);
                this.bIh4l(t4x, bg5l[2], bg5l[3]);
                this.y4C("oneventadd", {
                    type: t4x,
                    listener: bg5l[2]
                })
            }
        };
        var coB4F = function(d4h) {
            var bg5l = d4h.args
              , t4x = bg5l[1].toLowerCase();
            if (this.Xj2x(bg5l[0], t4x)) {
                d4h.stopped = !0;
                this.Xh2x(t4x, bg5l[2])
            }
        };
        var bkt8l = function(d4h) {
            var bg5l = d4h.args
              , t4x = (bg5l[1] || "").toLowerCase();
            if (this.Xj2x(bg5l[0])) {
                if (!!t4x) {
                    this.Xh2x(t4x);
                    return
                }
                k4o.eq7j(this.R5W, function(C4G, J4N) {
                    if (k4o.eu7n(C4G)) {
                        this.Xh2x(J4N)
                    }
                }, this)
            }
        };
        var coX4b = function(d4h) {
            var bg5l = d4h.args
              , t4x = bg5l[1].toLowerCase();
            if (this.Xj2x(bg5l[0], t4x)) {
                d4h.stopped = !0;
                bg5l[0]["on" + t4x].apply(bg5l[0], bg5l.slice(2))
            }
        };
        return function() {
            if (!!this.coY4c)
                return;
            this.coY4c = true;
            h4l.s4w = h4l.s4w.ek7d(bgu7n.g4k(this));
            h4l.mt0x = h4l.mt0x.ek7d(coB4F.g4k(this));
            h4l.hw8o = h4l.hw8o.ek7d(bkt8l.g4k(this));
            h4l.y4C = h4l.y4C.ek7d(coX4b.g4k(this))
        }
    }()
}
)();
(function() {
    var c4g = NEJ.P
      , N4R = c4g("nej.p")
      , bc5h = c4g("nej.h")
      , k4o = c4g("nej.u")
      , h4l = c4g("nej.v")
      , G4K = c4g("nej.ut");
    if (N4R.mp0x.trident)
        return;
    if (!!window.postMessage) {
        bc5h.bgY7R = bc5h.bgY7R.ek7d(function(d4h) {
            d4h.stopped = !0;
            d4h.value = JSON.stringify(d4h.args[0])
        });
        return
    }
    var J4N = "MSG|"
      , jB9s = [];
    var cpx4B = function() {
        var T5Y = unescape(window.name || "").trim();
        if (!T5Y || T5Y.indexOf(J4N) != 0)
            return;
        window.name = "";
        var o4s = k4o.bFo3x(T5Y.replace(J4N, ""), "|")
          , jL9C = (o4s.origin || "").toLowerCase();
        if (!!jL9C && jL9C != "*" && location.href.toLowerCase().indexOf(jL9C) != 0)
            return;
        h4l.y4C(window, "message", {
            data: JSON.parse(o4s.data || "null"),
            source: window.frames[o4s.self] || o4s.self,
            origin: bc5h.bEa3x(o4s.ref || document.referrer)
        })
    };
    var cpI5N = function() {
        var WY2x;
        var cpK5P = function(bu5z, r4v, i4m) {
            if (k4o.cV6P(WY2x, bu5z.w) < 0) {
                WY2x.push(bu5z.w);
                i4m.splice(r4v, 1);
                bu5z.w.name = bu5z.d
            }
        };
        return function() {
            WY2x = [];
            k4o.mq0x(jB9s, cpK5P);
            WY2x = null
        }
    }();
    bc5h.bgP7I = function() {
        var cpO5T = function(j4n) {
            var o4s = {};
            j4n = j4n || Y5d;
            o4s.origin = j4n.origin || "";
            o4s.ref = location.href;
            o4s.self = j4n.source;
            o4s.data = JSON.stringify(j4n.data);
            return J4N + k4o.uZ2x(o4s, "|", !0)
        };
        return bc5h.bgP7I.ek7d(function(d4h) {
            d4h.stopped = !0;
            var bg5l = d4h.args;
            jB9s.unshift({
                w: bg5l[0],
                d: escape(cpO5T(bg5l[1]))
            })
        })
    }();
    G4K.fu7n.A4E({
        element: window,
        event: "message"
    });
    window.setInterval(cpI5N, 100);
    window.setInterval(cpx4B, 20)
}
)();
(function() {
    var c4g = NEJ.P
      , bc5h = c4g("nej.h")
      , a3x = c4g("nej.e")
      , w4A = c4g("nej.j");
    w4A.cpQ5V = function() {
        var iG9x = window.name || "_parent"
          , cqd5i = {
            gq8i: window.top,
            iG9x: window,
            bE5J: window.parent
        };
        return function(cH6B, e4i) {
            if (typeof cH6B == "string") {
                cH6B = cqd5i[cH6B] || window.frames[cH6B];
                if (!cH6B)
                    return this
            }
            var j4n = NEJ.X({
                origin: "*",
                source: iG9x
            }, e4i);
            bc5h.bgP7I(cH6B, j4n);
            return this
        }
    }()
}
)();
(function() {
    var c4g = NEJ.P, hT8L = c4g("nej.c"), a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), w4A = c4g("nej.j"), N4R = c4g("nej.ut.j"), Q5V = {}, WS2x;
    if (!!N4R.bfO7H)
        return;
    N4R.bfO7H = NEJ.C();
    WS2x = N4R.bfO7H.O4S(N4R.Hl6f);
    WS2x.cq5v = function() {
        var eK7D = "NEJ-AJAX-DATA:"
          , Dt5y = !1;
        var bfM7F = function(d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eK7D) != 0)
                return;
            j4n = JSON.parse(j4n.replace(eK7D, ""));
            var jc9T = Q5V[j4n.key];
            if (!jc9T)
                return;
            delete Q5V[j4n.key];
            j4n.result = decodeURIComponent(j4n.result || "");
            jc9T.ue2x(j4n)
        };
        var bfH7A = function() {
            if (!Dt5y) {
                Dt5y = !0;
                h4l.s4w(window, "message", bfM7F)
            }
        };
        return function() {
            this.cu5z();
            bfH7A()
        }
    }();
    WS2x.ch5m = function(e4i) {
        var fJ8B = e4i.request
          , jc9T = hT8L.bQQ8I(fJ8B.url)
          , uC2x = Q5V[jc9T];
        if (k4o.eu7n(uC2x)) {
            uC2x.push(this.ch5m.g4k(this, e4i));
            return
        }
        if (!uC2x) {
            Q5V[jc9T] = [this.ch5m.g4k(this, e4i)];
            a3x.baA5F({
                src: jc9T,
                visible: !1,
                onload: function(d4h) {
                    var i4m = Q5V[jc9T];
                    Q5V[jc9T] = h4l.U5Z(d4h).contentWindow;
                    k4o.mq0x(i4m, function(dg6a) {
                        try {
                            dg6a()
                        } catch (e) {}
                    })
                }
            });
            return
        }
        this.yz4D = "frm-" + k4o.nh0x();
        Q5V[this.yz4D] = this;
        var j4n = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, fJ8B);
        j4n.key = this.yz4D;
        j4n.headers = e4i.headers;
        w4A.cpQ5V(Q5V[jc9T], {
            data: j4n
        })
    }
    ;
    WS2x.jy9p = function() {
        delete Q5V[this.yz4D];
        this.ue2x({
            status: 0
        });
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, dU7N = c4g("nej.g"), a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), w4A = c4g("nej.j"), N4R = c4g("nej.ut.j"), Q5V = {}, Id7W;
    if (!!N4R.bfx7q)
        return;
    N4R.bfx7q = NEJ.C();
    Id7W = N4R.bfx7q.O4S(N4R.Hl6f);
    Id7W.cq5v = function() {
        var eK7D = "NEJ-UPLOAD-RESULT:"
          , Dt5y = !1;
        var bfM7F = function(d4h) {
            var j4n = d4h.data;
            if (j4n.indexOf(eK7D) != 0)
                return;
            j4n = JSON.parse(j4n.replace(eK7D, ""));
            var jc9T = Q5V[j4n.key];
            if (!jc9T)
                return;
            delete Q5V[j4n.key];
            jc9T.ue2x(decodeURIComponent(j4n.result))
        };
        var bfH7A = function() {
            if (!Dt5y) {
                Dt5y = !0;
                h4l.s4w(window, "message", bfM7F)
            }
        };
        return function() {
            this.cu5z();
            bfH7A()
        }
    }();
    Id7W.bA5F = function() {
        this.bF5K();
        a3x.cC6w(this.bfw7p);
        delete this.bfw7p;
        window.clearTimeout(this.dQ7J);
        delete this.dQ7J
    }
    ;
    Id7W.ue2x = function(cJ6D) {
        var P4T;
        try {
            P4T = JSON.parse(cJ6D);
            this.y4C("onload", P4T)
        } catch (e) {
            this.y4C("onerror", {
                code: dU7N.bRc8U,
                message: cJ6D
            })
        }
    }
    ;
    Id7W.ch5m = function() {
        var cqe5j = function() {
            var lQ0x, cJ6D;
            try {
                var lQ0x = this.bfw7p.contentWindow.document.body
                  , cJ6D = lQ0x.innerText || lQ0x.textContent
            } catch (e) {
                return
            }
            this.ue2x(cJ6D)
        };
        var bfp7i = function(W5b, eQ7J, rj1x) {
            w4A.bp5u(W5b, {
                type: "json",
                method: "POST",
                cookie: rj1x,
                mode: parseInt(eQ7J) || 0,
                onload: function(j4n) {
                    if (!this.dQ7J)
                        return;
                    this.y4C("onuploading", j4n);
                    this.dQ7J = window.setTimeout(bfp7i.g4k(this, W5b, eQ7J, rj1x), 1e3)
                }
                .g4k(this),
                onerror: function(bU5Z) {
                    if (!this.dQ7J)
                        return;
                    this.dQ7J = window.setTimeout(bfp7i.g4k(this, W5b, eQ7J, rj1x), 1e3)
                }
                .g4k(this)
            })
        };
        return function(e4i) {
            var fJ8B = e4i.request
              , nQ0x = e4i.headers
              , eS7L = fJ8B.data
              , T5Y = "fom-" + k4o.nh0x();
            Q5V[T5Y] = this;
            eS7L.target = T5Y;
            eS7L.method = "POST";
            eS7L.enctype = dU7N.Co5t;
            eS7L.encoding = dU7N.Co5t;
            var W5b = eS7L.action || ""
              , lS0x = W5b.indexOf("?") <= 0 ? "?" : "&";
            eS7L.action = W5b + lS0x + "_proxy_=form";
            this.bfw7p = a3x.baA5F({
                name: T5Y,
                onload: function(d4h) {
                    var uC2x = h4l.U5Z(d4h);
                    h4l.s4w(uC2x, "load", cqe5j.g4k(this));
                    eS7L.submit();
                    var bPz6t = (eS7L.nej_query || Y5d).value;
                    if (!bPz6t)
                        return;
                    var eQ7J = (eS7L.nej_mode || Y5d).value
                      , rj1x = (eS7L.nej_cookie || Y5d).value == "true";
                    this.dQ7J = window.setTimeout(bfp7i.g4k(this, bPz6t, eQ7J, rj1x), 100)
                }
                .g4k(this)
            })
        }
    }();
    Id7W.jy9p = function() {
        this.y4C("onerror", {
            code: dU7N.bRh8Z,
            message: "客户端终止文件上传"
        });
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , bc5h = c4g("nej.h")
      , N4R = c4g("nej.ut.j");
    bc5h.bjO8G = function() {
        return new XMLHttpRequest
    }
    ;
    bc5h.bfo7h = function(eQ7J, WI2x, e4i) {
        var bu5z = !!WI2x ? {
            2: N4R.bfx7q
        } : {
            2: N4R.bfO7H,
            3: N4R.bgZ7S
        };
        return (bu5z[eQ7J] || N4R.Yr3x).A4E(e4i)
    }
}
)();
(function() {
    var c4g = NEJ.P
      , N4R = c4g("nej.p")
      , bc5h = c4g("nej.h");
    if (N4R.mp0x.trident)
        return;
    bc5h.bjO8G = function() {
        var Lz8r = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cqn5s = function() {
            for (var i = 0, l = Lz8r.length; i < l; i++) {
                try {
                    return new ActiveXObject(Lz8r[i])
                } catch (e) {}
            }
            return null
        };
        return bc5h.bjO8G.ek7d(function(d4h) {
            if (!!window.XMLHttpRequest)
                return;
            d4h.stopped = !0;
            d4h.value = cqn5s()
        })
    }();
    bc5h.bfo7h = function() {
        var CN5S = {
            0: 2,
            1: 3
        };
        return bc5h.bfo7h.ek7d(function(d4h) {
            var bg5l = d4h.args
              , eQ7J = bg5l[0] || 0;
            bg5l[0] = !!bg5l[1] ? 2 : CN5S[eQ7J] || eQ7J
        })
    }()
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , bo5t = NEJ.F
      , bc5h = c4g("nej.h")
      , dU7N = c4g("nej.g")
      , k4o = c4g("nej.u")
      , w4A = c4g("nej.j")
      , N4R = c4g("nej.ut.j")
      , ni0x = {}
      , Gm6g = bo5t;
    w4A.jy9p = function(eP7I) {
        var Q5V = ni0x[eP7I];
        if (!Q5V)
            return this;
        Q5V.req.jy9p();
        return this
    }
    ;
    w4A.WH2x = function(dG7z) {
        Gm6g = dG7z || bo5t;
        return this
    }
    ;
    w4A.bp5u = function() {
        var iZ9Q = (location.protocol + "//" + location.host).toLowerCase();
        var cqo5t = function(W5b) {
            var jL9C = k4o.ccV1x(W5b);
            return !!jL9C && jL9C != iZ9Q
        };
        var cqP5U = function(nQ0x) {
            return (nQ0x || Y5d)[dU7N.yj4n] == dU7N.Co5t
        };
        var crm5r = function(e4i) {
            var WI2x = cqP5U(e4i.headers);
            if (!cqo5t(e4i.url) && !WI2x)
                return N4R.Yr3x.A4E(e4i);
            return bc5h.bfo7h(e4i.mode, WI2x, e4i)
        };
        var Ep5u = function(eP7I) {
            var Q5V = ni0x[eP7I];
            if (!Q5V)
                return;
            if (!!Q5V.req)
                Q5V.req.S5X();
            delete ni0x[eP7I]
        };
        var buF1x = function(eP7I, t4x) {
            var Q5V = ni0x[eP7I];
            if (!Q5V)
                return;
            Ep5u(eP7I);
            try {
                var d4h = {
                    type: t4x,
                    result: arguments[2]
                };
                Gm6g(d4h);
                if (!d4h.stopped)
                    (Q5V[t4x] || bo5t)(d4h.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var wL3x = function(eP7I, j4n) {
            buF1x(eP7I, "onload", j4n)
        };
        var Ad4h = function(eP7I, bU5Z) {
            buF1x(eP7I, "onerror", bU5Z)
        };
        return function(W5b, e4i) {
            e4i = e4i || {};
            var eP7I = k4o.nh0x()
              , Q5V = {
                onload: e4i.onload || bo5t,
                onerror: e4i.onerror || bo5t
            };
            ni0x[eP7I] = Q5V;
            e4i.onload = wL3x.g4k(null, eP7I);
            e4i.onerror = Ad4h.g4k(null, eP7I);
            if (!!e4i.query) {
                var lS0x = W5b.indexOf("?") < 0 ? "?" : "&"
                  , bw5B = e4i.query;
                if (k4o.kW9N(bw5B))
                    bw5B = k4o.db6V(bw5B);
                if (!!bw5B)
                    W5b += lS0x + bw5B
            }
            e4i.url = W5b;
            Q5V.req = crm5r(e4i);
            Q5V.req.bjX8P(e4i.data);
            return eP7I
        }
    }();
    w4A.gr8j = function(eS7L, e4i) {
        var gK8C = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(gK8C, e4i);
        gK8C.data = eS7L;
        gK8C.method = "POST";
        gK8C.timeout = 0;
        gK8C.headers[dU7N.yj4n] = dU7N.Co5t;
        return w4A.bp5u(eS7L.action, gK8C)
    }
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, dU7N = c4g("nej.g"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), N4R = c4g("nej.ut.j"), lZ0x, ju9l = 6e4;
    if (!!N4R.MX8P)
        return;
    N4R.MX8P = NEJ.C();
    lZ0x = N4R.MX8P.O4S(G4K.cy5D);
    lZ0x.cq5v = function() {
        this.cu5z();
        this.MY8Q = {
            onerror: this.crQ5V.g4k(this),
            onloaded: this.crS5X.g4k(this)
        };
        if (!this.constructor.R5W)
            this.constructor.R5W = {
                loaded: {}
            }
    }
    ;
    lZ0x.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.Ij7c = e4i.version;
        this.beV7O = e4i.timeout;
        this.MY8Q.version = this.Ij7c;
        this.MY8Q.timeout = this.beV7O
    }
    ;
    lZ0x.bxC1x = function(J4N) {
        delete this.constructor.R5W[J4N]
    }
    ;
    lZ0x.AE4I = function(J4N) {
        return this.constructor.R5W[J4N]
    }
    ;
    lZ0x.bxW2x = function(J4N, j4n) {
        this.constructor.R5W[J4N] = j4n
    }
    ;
    lZ0x.WC2x = bo5t;
    lZ0x.byj2x = function(fJ8B) {
        h4l.hw8o(fJ8B)
    }
    ;
    lZ0x.beM7F = function(fJ8B) {
        fJ8B.src = this.kH9y;
        document.head.appendChild(fJ8B)
    }
    ;
    lZ0x.AH4L = function() {
        var Q5V = this.AE4I(this.kH9y);
        if (!Q5V)
            return;
        window.clearTimeout(Q5V.timer);
        this.byj2x(Q5V.request);
        delete Q5V.bind;
        delete Q5V.timer;
        delete Q5V.request;
        this.bxC1x(this.kH9y);
        this.AE4I("loaded")[this.kH9y] = !0
    }
    ;
    lZ0x.WA2x = function(T5Y) {
        var Q5V = this.AE4I(this.kH9y);
        if (!Q5V)
            return;
        var i4m = Q5V.bind;
        this.AH4L();
        if (!!i4m && i4m.length > 0) {
            var cs5x;
            while (i4m.length) {
                cs5x = i4m.shift();
                try {
                    cs5x.y4C(T5Y, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cs5x.S5X()
            }
        }
    }
    ;
    lZ0x.er7k = function(bU5Z) {
        this.WA2x("onerror", bU5Z)
    }
    ;
    lZ0x.byR2x = function() {
        this.WA2x("onloaded")
    }
    ;
    lZ0x.csh5m = function(W5b) {
        this.constructor.A4E(this.MY8Q).Ip7i(W5b)
    }
    ;
    lZ0x.bze2x = function(bU5Z) {
        var Q5V = this.AE4I(this.uM2x);
        if (!Q5V)
            return;
        if (!!bU5Z)
            Q5V.error++;
        Q5V.loaded++;
        if (Q5V.loaded < Q5V.total)
            return;
        this.bxC1x(this.uM2x);
        this.y4C(Q5V.error > 0 ? "onerror" : "onloaded")
    }
    ;
    lZ0x.crQ5V = function(bU5Z) {
        this.bze2x(!0)
    }
    ;
    lZ0x.crS5X = function() {
        this.bze2x()
    }
    ;
    lZ0x.Ip7i = function(W5b) {
        W5b = k4o.blt8l(W5b);
        if (!W5b) {
            this.y4C("onerror", {
                code: dU7N.bsJ0x,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.kH9y = W5b;
        if (!!this.Ij7c)
            this.kH9y += (this.kH9y.indexOf("?") < 0 ? "?" : "&") + this.Ij7c;
        if (this.AE4I("loaded")[this.kH9y]) {
            try {
                this.y4C("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S5X();
            return this
        }
        var Q5V = this.AE4I(this.kH9y), fJ8B;
        if (!!Q5V) {
            Q5V.bind.unshift(this);
            Q5V.timer = window.clearTimeout(Q5V.timer)
        } else {
            fJ8B = this.WC2x();
            Q5V = {
                request: fJ8B,
                bind: [this]
            };
            this.bxW2x(this.kH9y, Q5V);
            h4l.s4w(fJ8B, "load", this.byR2x.g4k(this));
            h4l.s4w(fJ8B, "error", this.er7k.g4k(this, {
                code: dU7N.bsB0x,
                message: "无法加载指定资源文件[" + this.kH9y + "]！"
            }))
        }
        if (this.beV7O != 0)
            Q5V.timer = window.setTimeout(this.er7k.g4k(this, {
                code: dU7N.bxF1x,
                message: "指定资源文件[" + this.kH9y + "]载入超时！"
            }), this.beV7O || ju9l);
        if (!!fJ8B)
            this.beM7F(fJ8B);
        this.y4C("onloading");
        return this
    }
    ;
    lZ0x.bzi2x = function(i4m) {
        if (!i4m || !i4m.length) {
            this.y4C("onerror", {
                code: dU7N.bsJ0x,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.uM2x = k4o.nh0x();
        var Q5V = {
            error: 0,
            loaded: 0,
            total: i4m.length
        };
        this.bxW2x(this.uM2x, Q5V);
        for (var i = 0, l = i4m.length; i < l; i++) {
            if (!i4m[i]) {
                Q5V.total--;
                continue
            }
            this.csh5m(i4m[i])
        }
        this.y4C("onloading");
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), bc5h = c4g("nej.h"), N4R = c4g("nej.ut.j"), Nl8d;
    if (!!N4R.beG7z)
        return;
    N4R.beG7z = NEJ.C();
    Nl8d = N4R.beG7z.O4S(N4R.MX8P);
    Nl8d.WC2x = function() {
        var fj7c = a3x.cX6R("iframe");
        fj7c.width = 0;
        fj7c.height = 0;
        fj7c.style.display = "none";
        return fj7c
    }
    ;
    Nl8d.beM7F = function(fJ8B) {
        fJ8B.src = this.kH9y;
        document.body.appendChild(fJ8B)
    }
    ;
    Nl8d.er7k = function(bU5Z) {
        var fj7c = (this.AE4I(this.kH9y) || Y5d).request;
        this.WA2x("onerror", bU5Z);
        bc5h.baD5I(fj7c)
    }
    ;
    Nl8d.byR2x = function() {
        var lQ0x = null
          , fj7c = (this.AE4I(this.kH9y) || Y5d).request;
        try {
            lQ0x = fj7c.contentWindow.document.body
        } catch (ex) {}
        this.WA2x("onloaded", lQ0x);
        bc5h.baD5I(fj7c)
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), N4R = c4g("nej.ut.j"), beB6v;
    if (!!N4R.Wu2x)
        return;
    N4R.Wu2x = NEJ.C();
    beB6v = N4R.Wu2x.O4S(N4R.MX8P);
    beB6v.WC2x = function() {
        return a3x.cX6R("link")
    }
    ;
    beB6v.beM7F = function(fJ8B) {
        fJ8B.href = this.kH9y;
        document.head.appendChild(fJ8B)
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), N4R = c4g("nej.ut.j"), Ws2x;
    if (!!N4R.Wr2x)
        return;
    N4R.Wr2x = NEJ.C();
    Ws2x = N4R.Wr2x.O4S(N4R.MX8P);
    Ws2x.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.bzC2x = e4i.async;
        this.bes6m = e4i.charset;
        this.MY8Q.async = !1;
        this.MY8Q.charset = this.bes6m
    }
    ;
    Ws2x.WC2x = function() {
        var fJ8B = a3x.cX6R("script");
        if (this.bzC2x != null)
            fJ8B.async = !!this.bzC2x;
        if (this.bes6m != null)
            fJ8B.charset = this.bes6m;
        return fJ8B
    }
    ;
    Ws2x.byj2x = function(fJ8B) {
        a3x.cC6w(fJ8B)
    }
}
)();
(function() {
    var c4g = NEJ.P
      , w4A = c4g("nej.j")
      , N4R = c4g("nej.ut.j");
    w4A.csy5D = function(W5b, e4i) {
        N4R.Wr2x.A4E(e4i).Ip7i(W5b);
        return this
    }
    ;
    w4A.csB5G = function(i4m, e4i) {
        N4R.Wr2x.A4E(e4i).bzi2x(i4m);
        return this
    }
    ;
    w4A.cxO7H = function(W5b, e4i) {
        N4R.Wu2x.A4E(e4i).Ip7i(W5b);
        return this
    }
    ;
    w4A.ctL6F = function(i4m, e4i) {
        N4R.Wu2x.A4E(e4i).bzi2x(i4m);
        return this
    }
    ;
    w4A.bAA2x = function(W5b, e4i) {
        N4R.beG7z.A4E(e4i).Ip7i(W5b);
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , k4o = c4g("nej.u")
      , w4A = c4g("nej.j")
      , G4K = c4g("nej.ut")
      , Q5V = {}
      , rR1x = +(new Date) + "-";
    a3x.cI6C = function() {
        var cB5G = 0;
        var Nt8l = function() {
            if (cB5G > 0)
                return;
            cB5G = 0;
            h4l.y4C(document, "templateready");
            h4l.hw8o(document, "templateready")
        };
        var Wp2x = function(fH8z, e4i) {
            var dz6t = a3x.u4y(fH8z, "src");
            if (!dz6t)
                return;
            e4i = e4i || Y5d;
            var fz7s = e4i.root;
            if (!fz7s) {
                fz7s = fH8z.ownerDocument.location.href
            } else {
                fz7s = k4o.blt8l(fz7s)
            }
            dz6t = dz6t.split(",");
            k4o.bb5g(dz6t, function(C4G, r4v, i4m) {
                i4m[r4v] = k4o.blt8l(C4G, fz7s)
            });
            return dz6t
        };
        var cub6V = function(fH8z, e4i) {
            if (!fH8z)
                return;
            var dz6t = Wp2x(fH8z, e4i);
            if (!!dz6t)
                w4A.ctL6F(dz6t, {
                    version: a3x.u4y(fH8z, "version")
                });
            a3x.bMw5B(fH8z.value)
        };
        var cue6Y = function(C4G) {
            cB5G--;
            a3x.bMx5C(C4G);
            Nt8l()
        };
        var cuj6d = function(fH8z, e4i) {
            if (!fH8z)
                return;
            var dz6t = Wp2x(fH8z, e4i)
              , ez7s = fH8z.value;
            if (!!dz6t) {
                cB5G++;
                var e4i = {
                    version: a3x.u4y(fH8z, "version"),
                    onloaded: cue6Y.g4k(null, ez7s)
                };
                window.setTimeout(w4A.csB5G.g4k(w4A, dz6t, e4i), 0);
                return
            }
            a3x.bMx5C(ez7s)
        };
        var cuk6e = function(lQ0x) {
            cB5G--;
            a3x.cI6C(lQ0x);
            Nt8l()
        };
        var cul6f = function(fH8z, e4i) {
            if (!fH8z)
                return;
            var dz6t = Wp2x(fH8z, e4i)[0];
            if (!!dz6t) {
                cB5G++;
                var e4i = {
                    version: a3x.u4y(fH8z, "version"),
                    onloaded: cuk6e
                };
                window.setTimeout(w4A.bAA2x.g4k(w4A, dz6t, e4i), 0)
            }
        };
        var cuo6i = function(D4H, cJ6D) {
            cB5G--;
            a3x.It7m(D4H, cJ6D || "");
            Nt8l()
        };
        var cuu6o = function(fH8z, e4i) {
            if (!fH8z || !fH8z.id)
                return;
            var D4H = fH8z.id
              , dz6t = Wp2x(fH8z, e4i)[0];
            if (!!dz6t) {
                cB5G++;
                var W5b = dz6t + (dz6t.indexOf("?") < 0 ? "?" : "&") + (a3x.u4y(fH8z, "version") || "")
                  , e4i = {
                    type: "text",
                    method: "GET",
                    onload: cuo6i.g4k(null, D4H)
                };
                window.setTimeout(w4A.bp5u.g4k(w4A, W5b, e4i), 0)
            }
        };
        var cuY6S = function(f4j, e4i) {
            var t4x = f4j.name.toLowerCase();
            switch (t4x) {
            case "jst":
                a3x.ep7i(f4j, !0);
                return;
            case "txt":
                a3x.It7m(f4j.id, f4j.value || "");
                return;
            case "ntp":
                a3x.il8d(f4j.value || "", f4j.id);
                return;
            case "js":
                cuj6d(f4j, e4i);
                return;
            case "css":
                cub6V(f4j, e4i);
                return;
            case "html":
                cul6f(f4j, e4i);
                return;
            case "res":
                cuu6o(f4j, e4i);
                return
            }
        };
        G4K.fu7n.A4E({
            element: document,
            event: "templateready",
            oneventadd: Nt8l
        });
        return function(F4J, e4i) {
            F4J = a3x.z4D(F4J);
            if (!!F4J) {
                var i4m = F4J.tagName == "TEXTAREA" ? [F4J] : F4J.getElementsByTagName("textarea");
                k4o.bb5g(i4m, function(f4j) {
                    cuY6S(f4j, e4i)
                });
                a3x.cC6w(F4J, !0)
            }
            Nt8l();
            return this
        }
    }();
    a3x.It7m = function(J4N, C4G) {
        Q5V[J4N] = C4G || "";
        return this
    }
    ;
    a3x.hZ8R = function(J4N) {
        return Q5V[J4N] || ""
    }
    ;
    a3x.il8d = function(F4J, J4N) {
        J4N = J4N || k4o.nh0x();
        F4J = a3x.z4D(F4J) || F4J;
        a3x.It7m(rR1x + J4N, F4J);
        a3x.mJ0x(F4J);
        return J4N
    }
    ;
    a3x.dj6d = function(J4N) {
        if (!J4N)
            return null;
        J4N = rR1x + J4N;
        var C4G = a3x.hZ8R(J4N);
        if (!C4G)
            return null;
        if (k4o.fx7q(C4G)) {
            C4G = a3x.nl0x(C4G);
            a3x.It7m(J4N, C4G)
        }
        return C4G.cloneNode(!0)
    }
    ;
    a3x.yI4M = function() {
        var Gm6g = function(C4G, J4N) {
            return J4N == "offset" || J4N == "limit"
        };
        return function(i4m, q4u, e4i) {
            var bs5x = [];
            if (!i4m || !i4m.length || !q4u)
                return bs5x;
            e4i = e4i || Y5d;
            var do6i = i4m.length
              , jm9d = parseInt(e4i.offset) || 0
              , gG8y = Math.min(do6i, jm9d + (parseInt(e4i.limit) || do6i))
              , cr5w = {
                total: i4m.length,
                range: [jm9d, gG8y]
            };
            NEJ.X(cr5w, e4i, Gm6g);
            for (var i = jm9d, cs5x; i < gG8y; i++) {
                cr5w.index = i;
                cr5w.data = i4m[i];
                cs5x = q4u.A4E(cr5w);
                var D4H = cs5x.BB5G();
                Q5V[D4H] = cs5x;
                cs5x.S5X = cs5x.S5X.ek7d(function(D4H, cs5x) {
                    delete Q5V[D4H];
                    delete cs5x.S5X
                }
                .g4k(null, D4H, cs5x));
                bs5x.push(cs5x)
            }
            return bs5x
        }
    }();
    a3x.bDi3x = function(D4H) {
        return Q5V[D4H]
    }
    ;
    a3x.cxy7r = function(dK7D, e4i) {
        e4i = e4i || Y5d;
        a3x.cI6C(e4i.tid || "template-box");
        h4l.s4w(document, "templateready", function() {
            dK7D.A4E().y4C("onshow", e4i)
        })
    }
    ;
    c4g("dbg").dumpTC = function() {
        return Q5V
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, a3x = c4g("nej.e"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), N4R = c4g("nej.ui"), b4f;
    if (!!N4R.ef7Y)
        return;
    N4R.ef7Y = NEJ.C();
    b4f = N4R.ef7Y.O4S(G4K.cy5D);
    b4f.cq5v = function() {
        this.cu5z();
        a3x.bAZ2x();
        this.bZ5e();
        this.bR5W()
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.cvb6V(e4i.clazz);
        this.bEA3x(e4i.parent)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        this.bEE3x();
        delete this.fG8y;
        a3x.mJ0x(this.m4q);
        a3x.v4z(this.m4q, this.bdx6r);
        delete this.bdx6r
    }
    ;
    b4f.bZ5e = bo5t;
    b4f.bR5W = function() {
        if (!this.cb5g)
            this.Wc2x();
        this.m4q = a3x.dj6d(this.cb5g);
        if (!this.m4q)
            this.m4q = a3x.cX6R("div", this.lh9Y);
        a3x.x4B(this.m4q, this.lh9Y)
    }
    ;
    b4f.Wc2x = bo5t;
    b4f.cvb6V = function(dL7E) {
        this.bdx6r = dL7E || "";
        a3x.x4B(this.m4q, this.bdx6r)
    }
    ;
    b4f.cvC6w = function() {
        if (!this.lh9Y)
            return;
        a3x.x4B(this.fG8y, this.lh9Y + "-parent")
    }
    ;
    b4f.bEE3x = function() {
        if (!this.lh9Y)
            return;
        a3x.v4z(this.fG8y, this.lh9Y + "-parent")
    }
    ;
    b4f.kV9M = function() {
        return this.m4q
    }
    ;
    b4f.bEA3x = function(bE5J) {
        if (!this.m4q)
            return this;
        this.bEE3x();
        if (k4o.gb8T(bE5J)) {
            this.fG8y = bE5J(this.m4q)
        } else {
            this.fG8y = a3x.z4D(bE5J);
            if (!!this.fG8y)
                this.fG8y.appendChild(this.m4q)
        }
        this.cvC6w();
        return this
    }
    ;
    b4f.M4Q = function() {
        if (!this.fG8y || !this.m4q || this.m4q.parentNode == this.fG8y)
            return this;
        this.fG8y.appendChild(this.m4q);
        return this
    }
    ;
    b4f.br5w = function() {
        a3x.mJ0x(this.m4q);
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, a3x = c4g("nej.e"), k4o = c4g("nej.u"), bc5h = c4g("nej.h"), N4R = c4g("nej.ui"), uy2x, bFY4c;
    if (!!N4R.NC9t)
        return;
    N4R.NC9t = NEJ.C();
    uy2x = N4R.NC9t.O4S(N4R.ef7Y);
    bFY4c = N4R.NC9t.cj5o;
    uy2x.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.vk2x("oncontentready", e4i.oncontentready || this.cvD6x.g4k(this));
        this.cvQ6K = !!e4i.nohack;
        this.cvR6L = !!e4i.destroyable;
        this.Iv7o(e4i.content)
    }
    ;
    uy2x.bA5F = function() {
        this.y4C("onbeforerecycle");
        this.bF5K();
        this.VY2x();
        this.Iv7o("");
        a3x.ff7Y(this.m4q, {
            top: "",
            left: ""
        })
    }
    ;
    uy2x.cvD6x = bo5t;
    uy2x.Iw7p = bo5t;
    uy2x.VY2x = function() {
        a3x.mJ0x(this.m4q);
        if (!!this.nk0x) {
            this.nk0x = bc5h.bqp0x(this.m4q);
            delete this.nk0x
        }
    }
    ;
    uy2x.Iv7o = function(bl5q) {
        if (!this.m4q || !this.yN4R || bl5q == null)
            return this;
        bl5q = bl5q || "";
        k4o.fx7q(bl5q) ? this.yN4R.innerHTML = bl5q : this.yN4R.appendChild(bl5q);
        this.y4C("oncontentready", this.yN4R);
        return this
    }
    ;
    uy2x.ge8W = function(bf5k) {
        var C4G = bf5k.top;
        if (C4G != null) {
            C4G += "px";
            a3x.Z5e(this.m4q, "top", C4G);
            a3x.Z5e(this.nk0x, "top", C4G)
        }
        var C4G = bf5k.left;
        if (C4G != null) {
            C4G += "px";
            a3x.Z5e(this.m4q, "left", C4G);
            a3x.Z5e(this.nk0x, "left", C4G)
        }
        return this
    }
    ;
    uy2x.M4Q = function() {
        a3x.Z5e(this.m4q, "visibility", "hidden");
        bFY4c.M4Q.apply(this, arguments);
        this.Iw7p();
        a3x.Z5e(this.m4q, "visibility", "");
        if (!this.cvQ6K) {
            this.nk0x = bc5h.nk0x(this.m4q)
        }
        return this
    }
    ;
    uy2x.br5w = function() {
        this.cvR6L ? this.S5X() : this.VY2x();
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, k4o = c4g("nej.u"), a3x = c4g("nej.e"), N4R = c4g("nej.ui"), yP4T;
    if (!!N4R.VW2x)
        return;
    N4R.VW2x = NEJ.C();
    yP4T = N4R.VW2x.O4S(N4R.ef7Y);
    yP4T.bj5o = function(e4i) {
        this.NJ9A();
        this.bk5p(this.cwc6W(e4i));
        this.bT5Y.onbeforerecycle = this.S5X.g4k(this);
        this.nK0x = this.bdf6Z()
    }
    ;
    yP4T.bA5F = function() {
        this.y4C("onbeforerecycle");
        this.bF5K();
        delete this.bT5Y;
        a3x.mJ0x(this.m4q);
        var zs4w = this.nK0x;
        if (!!zs4w) {
            delete this.nK0x;
            zs4w.S5X()
        }
    }
    ;
    yP4T.bdf6Z = bo5t;
    yP4T.cwc6W = function(e4i) {
        var o4s = {};
        k4o.eq7j(e4i, function(q4u, J4N) {
            this.bT5Y.hasOwnProperty(J4N) ? this.bT5Y[J4N] = q4u : o4s[J4N] = q4u
        }, this);
        return o4s
    }
    ;
    yP4T.NJ9A = function() {
        this.bT5Y = {
            clazz: "",
            parent: null,
            content: this.m4q,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    }
    ;
    yP4T.M4Q = function() {
        if (!!this.nK0x)
            this.nK0x.M4Q();
        this.y4C("onaftershow");
        return this
    }
    ;
    yP4T.br5w = function() {
        if (!!this.nK0x)
            this.nK0x.br5w();
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P, dU7N = c4g("nej.g"), bc5h = c4g("nej.h"), a3x = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), N4R = c4g("nej.ui"), NL9C, bLm5r;
    if (!!N4R.Iy7r)
        return;
    var ip8h = a3x.so2x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dU7N.bsp0x + ");}");
    N4R.Iy7r = NEJ.C();
    NL9C = N4R.Iy7r.O4S(N4R.ef7Y);
    bLm5r = N4R.Iy7r.cj5o;
    NL9C.bj5o = function(e4i) {
        this.bk5p(e4i);
        var bl5q = e4i.content || "&nbsp;";
        k4o.fx7q(bl5q) ? this.m4q.innerHTML = bl5q : this.m4q.appendChild(bl5q)
    }
    ;
    NL9C.bA5F = function() {
        this.bF5K();
        this.m4q.innerHTML = "&nbsp;"
    }
    ;
    NL9C.bZ5e = function() {
        this.lh9Y = ip8h
    }
    ;
    NL9C.M4Q = function() {
        bc5h.bqq0x(this.m4q);
        bLm5r.M4Q.apply(this, arguments);
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), h4l = c4g("nej.v"), N4R = c4g("nej.ut"), vo3x;
    if (!!N4R.vg2x)
        return;
    N4R.vg2x = NEJ.C();
    vo3x = N4R.vg2x.O4S(N4R.cy5D);
    vo3x.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.cwf6Z = !!e4i.overflow;
        this.m4q = a3x.z4D(e4i.body);
        this.zy4C = a3x.z4D(e4i.view) || a3x.bHO4S(this.m4q);
        this.bMr5w = a3x.z4D(e4i.mbar) || this.m4q;
        this.VQ2x = parseInt(e4i.direction) || 0;
        if (!!e4i.isRelative) {
            this.m4q.style.position = "relative";
            this.bcX6R = true;
            this.bcQ6K()
        }
        this.bS5X([[document, "mouseup", this.bcK6E.g4k(this)], [document, "mousemove", this.bcJ6D.g4k(this)], [this.bMr5w, "mousedown", this.NW9N.g4k(this)]])
    }
    ;
    vo3x.bcQ6K = function() {
        if (!!this.bcX6R) {
            this.IC7v = a3x.hM8E(this.m4q, this.zy4C);
            this.IC7v.x -= parseInt(a3x.dc6W(this.m4q, "left")) || 0;
            this.IC7v.y -= parseInt(a3x.dc6W(this.m4q, "top")) || 0
        }
    }
    ;
    vo3x.bA5F = function() {
        this.bF5K();
        delete this.m4q;
        delete this.bMr5w;
        delete this.zy4C
    }
    ;
    vo3x.bcz6t = function() {
        return {
            x: Math.max(this.zy4C.clientWidth, this.zy4C.scrollWidth) - this.m4q.offsetWidth,
            y: Math.max(this.zy4C.clientHeight, this.zy4C.scrollHeight) - this.m4q.offsetHeight
        }
    }
    ;
    vo3x.NW9N = function(d4h) {
        h4l.bh5m(d4h);
        if (!!this.hj8b)
            return;
        this.hj8b = {
            x: h4l.jS9J(d4h),
            y: h4l.mh0x(d4h)
        };
        this.bNK6E = this.bcz6t();
        this.y4C("ondragstart", d4h)
    }
    ;
    vo3x.bcJ6D = function(d4h) {
        if (!this.hj8b)
            return;
        var bf5k = {
            x: h4l.jS9J(d4h),
            y: h4l.mh0x(d4h)
        };
        var sd2x = bf5k.x - this.hj8b.x
          , sk2x = bf5k.y - this.hj8b.y
          , C4G = {
            top: (parseInt(a3x.dc6W(this.m4q, "top")) || 0) + sk2x,
            left: (parseInt(a3x.dc6W(this.m4q, "left")) || 0) + sd2x
        };
        if (this.bcX6R) {
            this.bcQ6K();
            C4G.top = C4G.top + this.IC7v.y;
            C4G.left = C4G.left + this.IC7v.x
        }
        this.hj8b = bf5k;
        this.ge8W(C4G)
    }
    ;
    vo3x.bcK6E = function(d4h) {
        if (!this.hj8b)
            return;
        delete this.bNK6E;
        delete this.hj8b;
        this.y4C("ondragend", this.bcx6r())
    }
    ;
    vo3x.ge8W = function(d4h) {
        if (!this.cwf6Z) {
            var bPa6U = this.bNK6E || this.bcz6t();
            d4h.top = Math.min(bPa6U.y, Math.max(0, d4h.top));
            d4h.left = Math.min(bPa6U.x, Math.max(0, d4h.left))
        }
        var ce5j = this.m4q.style;
        if (this.bcX6R) {
            this.bcQ6K();
            d4h.top = d4h.top - this.IC7v.y;
            d4h.left = d4h.left - this.IC7v.x
        }
        if (this.VQ2x == 0 || this.VQ2x == 2)
            ce5j.top = d4h.top + "px";
        if (this.VQ2x == 0 || this.VQ2x == 1)
            ce5j.left = d4h.left + "px";
        this.y4C("onchange", d4h);
        return this
    }
    ;
    vo3x.bcx6r = function() {
        return {
            left: parseInt(a3x.dc6W(this.m4q, "left")) || 0,
            top: parseInt(a3x.dc6W(this.m4q, "top")) || 0
        }
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = NEJ.P("nej.e"), h4l = NEJ.P("nej.v"), k4o = NEJ.P("nej.u"), G4K = NEJ.P("nej.ut"), N4R = NEJ.P("nej.ui"), ip8h, gn8f, b4f, K4O;
    if (!!N4R.VI2x)
        return;
    N4R.VI2x = NEJ.C();
    b4f = N4R.VI2x.O4S(N4R.NC9t);
    K4O = N4R.VI2x.cj5o;
    b4f.cq5v = function() {
        this.rc1x = {};
        this.jM9D = {
            onchange: this.bcJ6D.g4k(this)
        };
        this.cu5z()
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.cwh6b(e4i.mask);
        this.cxc6W(e4i.align);
        this.Ag4k(e4i.title);
        if (!e4i.draggable)
            return;
        this.jl9c = G4K.vg2x.A4E(this.jM9D)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        delete this.qf1x;
        delete this.Ob9S;
        if (!!this.AX4b) {
            this.AX4b.S5X();
            delete this.AX4b
        }
        if (!!this.jl9c) {
            this.jl9c.S5X();
            delete this.jl9c
        }
    }
    ;
    b4f.bZ5e = function() {
        this.lh9Y = ip8h;
        this.cb5g = gn8f
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        var i4m = a3x.cU6O(this.m4q);
        this.yN4R = i4m[1];
        this.jM9D.mbar = i4m[0];
        this.jM9D.body = this.m4q;
        h4l.s4w(i4m[2], "mousedown", this.cxe6Y.g4k(this));
        h4l.s4w(this.jM9D.mbar, "mousedown", this.NW9N.g4k(this));
        this.buL1x = a3x.cU6O(this.jM9D.mbar)[0]
    }
    ;
    b4f.cxe6Y = function(d4h) {
        h4l.bh5m(d4h);
        this.y4C("onclose", d4h);
        if (!d4h.stopped) {
            this.br5w()
        }
    }
    ;
    b4f.NW9N = function(d4h) {
        h4l.y4C(document, "click")
    }
    ;
    b4f.bcJ6D = function(d4h) {
        if (!this.nk0x)
            return;
        a3x.ff7Y(this.nk0x, {
            top: d4h.top + "px",
            left: d4h.left + "px"
        })
    }
    ;
    b4f.Iw7p = function() {
        var eB7u = [function() {
            return 0
        }
        , function(mT0x, ES6M, bf5k, J4N) {
            if (J4N == "top" && window.top != window.self) {
                var VE2x = 0
                  , EW6Q = 0;
                if (top.g_topBarHeight)
                    VE2x = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight)
                    EW6Q = top.g_bottomBarHeight;
                if (mT0x.top <= VE2x) {
                    var bck6e = Math.max(0, (ES6M.height - (VE2x - mT0x.top) - EW6Q - bf5k.height) / 2);
                    return bck6e + VE2x
                } else {
                    var bck6e = Math.max(0, (ES6M.height - EW6Q - bf5k.height) / 2);
                    return bck6e + mT0x.top
                }
            }
            return Math.max(0, mT0x[J4N] + (ES6M[hO8G[J4N]] - bf5k[hO8G[J4N]]) / 2)
        }
        , function(mT0x, ES6M, bf5k, J4N) {
            return mT0x[J4N] + (ES6M[hO8G[J4N]] - bf5k[hO8G[J4N]])
        }
        ]
          , cxb6V = ["left", "top"]
          , hO8G = {
            left: "width",
            top: "height"
        };
        return function() {
            var C4G = {}
              , ce5j = this.m4q.style
              , iS9J = a3x.pb1x()
              , mT0x = {
                left: iS9J.scrollLeft,
                top: iS9J.scrollTop
            }
              , ES6M = {
                width: iS9J.clientWidth,
                height: iS9J.clientHeight
            }
              , bf5k = {
                width: this.m4q.offsetWidth,
                height: this.m4q.offsetHeight
            }
              , dm6g = {
                left: iS9J.clientWidth - this.m4q.offsetWidth,
                top: iS9J.clientHeight - this.m4q.offsetHeight
            };
            k4o.bb5g(cxb6V, function(J4N, r4v) {
                var dg6a = eB7u[this.qf1x[r4v]];
                if (!dg6a)
                    return;
                C4G[J4N] = dg6a(mT0x, ES6M, bf5k, J4N)
            }, this);
            this.ge8W(C4G)
        }
    }();
    b4f.cxa6U = function() {
        if (!this.AX4b) {
            if (!this.Ob9S)
                return;
            this.rc1x.parent = this.fG8y;
            this.AX4b = this.Ob9S.A4E(this.rc1x)
        }
        this.AX4b.M4Q()
    }
    ;
    b4f.VY2x = function() {
        if (!!this.AX4b)
            this.AX4b.br5w();
        K4O.VY2x.apply(this, arguments)
    }
    ;
    b4f.cwh6b = function(kw9n) {
        if (!!kw9n) {
            if (kw9n instanceof N4R.Iy7r) {
                this.AX4b = kw9n;
                return
            }
            if (k4o.gb8T(kw9n)) {
                this.Ob9S = kw9n;
                return
            }
            this.Ob9S = N4R.Iy7r;
            if (k4o.fx7q(kw9n))
                this.rc1x.clazz = kw9n;
            return
        }
        this.Ob9S = null
    }
    ;
    b4f.Ag4k = function(eM7F, dD7w) {
        if (!!this.buL1x) {
            var bbN6H = !dD7w ? "innerText" : "innerHTML";
            this.buL1x[bbN6H] = eM7F || "标题"
        }
        return this
    }
    ;
    b4f.cxc6W = function() {
        var cS6M = /\s+/
          , cwZ6T = {
            left: 0,
            center: 1,
            right: 2,
            auto: 3
        }
          , cwY6S = {
            top: 0,
            middle: 1,
            bottom: 2,
            auto: 3
        };
        return function(mW0x) {
            this.qf1x = (mW0x || "").split(cS6M);
            var dS7L = cwZ6T[this.qf1x[0]];
            if (dS7L == null)
                dS7L = 1;
            this.qf1x[0] = dS7L;
            var dS7L = cwY6S[this.qf1x[1]];
            if (dS7L == null)
                dS7L = 1;
            this.qf1x[1] = dS7L;
            return this
        }
    }();
    b4f.M4Q = function() {
        K4O.M4Q.apply(this, arguments);
        this.cxa6U();
        return this
    }
    ;
    ip8h = a3x.so2x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gn8f = a3x.il8d('<div class="' + ip8h + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
}
)();
(function() {
    var c4g = NEJ.P, k4o = c4g("nej.u"), N4R = c4g("nej.ui"), bcj6d;
    if (!!N4R.VC2x)
        return;
    N4R.VC2x = NEJ.C();
    bcj6d = N4R.VC2x.O4S(N4R.VW2x);
    bcj6d.bdf6Z = function() {
        return N4R.VI2x.A4E(this.bT5Y)
    }
    ;
    bcj6d.NJ9A = function() {
        N4R.VC2x.cj5o.NJ9A.apply(this, arguments);
        this.bT5Y.mask = null;
        this.bT5Y.title = "标题";
        this.bT5Y.align = "";
        this.bT5Y.draggable = !1;
        this.bT5Y.onclose = null
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), ba5f = c4g("nej.ui"), n4r = c4g("nm.l"), b4f, K4O;
    n4r.dZ7S = NEJ.C();
    b4f = n4r.dZ7S.O4S(ba5f.VC2x);
    b4f.bj5o = function(e4i) {
        e4i.clazz = "m-layer z-show " + (e4i.clazz || "");
        e4i.nohack = true;
        e4i.draggable = true;
        this.bk5p(e4i)
    }
    ;
    b4f.dA6u = function(f4j, bC5H) {
        if (!f4j)
            return;
        a3x.Z5e(f4j, "display", !bC5H ? "none" : "");
        f4j.lastChild.innerText = bC5H || ""
    }
    ;
    b4f.dF7y = function(gh8Z, cK6E, Of9W, Oi9Z) {
        var dK7D = "js-lock";
        if (cK6E === undefined)
            return a3x.bz5E(gh8Z, dK7D);
        !cK6E ? a3x.v4z(gh8Z, dK7D) : a3x.x4B(gh8Z, dK7D);
        gh8Z.firstChild.innerText = !cK6E ? Of9W : Oi9Z
    }
    ;
    n4r.dZ7S.M4Q = function(e4i) {
        e4i = e4i || {};
        if (e4i.mask === undefined)
            e4i.mask = "m-mask";
        if (e4i.parent === undefined)
            e4i.parent = document.body;
        if (e4i.draggable === undefined)
            e4i.draggable = true;
        !!this.eR7K && this.eR7K.S5X();
        this.eR7K = this.A4E(e4i);
        this.eR7K.M4Q(e4i);
        return this.eR7K
    }
    ;
    n4r.dZ7S.br5w = function() {
        !!this.eR7K && this.eR7K.S5X()
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), n4r = c4g("nm.l"), b4f, K4O;
    n4r.bcf6Z = NEJ.C();
    b4f = n4r.bcf6Z.O4S(n4r.dZ7S);
    K4O = n4r.bcf6Z.cj5o;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        if (e4i.bubble === undefined)
            e4i.bubble = true;
        this.Ok9b = e4i.bubble;
        this.pm1x = e4i.message || ""
    }
    ;
    b4f.bZ5e = function() {
        this.cb5g = a3x.il8d('<div class="lyct f-cb f-tc"></div>')
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        h4l.s4w(this.m4q, "click", this.cA5F.g4k(this))
    }
    ;
    b4f.cA5F = function(d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        if (!f4j)
            return;
        if (f4j.href)
            h4l.ci5n(d4h);
        if (a3x.u4y(f4j, "action") == "close")
            this.br5w();
        if (this.Ok9b === !1)
            h4l.rX1x(d4h);
        this.y4C("onaction", a3x.u4y(f4j, "action"))
    }
    ;
    b4f.M4Q = function() {
        K4O.M4Q.call(this);
        this.m4q.innerHTML = this.pm1x
    }
    ;
    var gi8a = a3x.ep7i('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l4p.mx0x = function() {
        var eD7w;
        var cs5x;
        var bbZ6T = function(gj8b, V5a) {
            if (k4o.gb8T(gj8b, "function") && gj8b(V5a) != -1)
                cs5x.S5X()
        };
        var Bq4u = function() {
            !!cs5x && cs5x.br5w()
        };
        return function(e4i) {
            clearTimeout(eD7w);
            e4i = e4i || {};
            e4i.title = e4i.title || "提示";
            e4i.clazz = e4i.clazz || "";
            e4i.parent = e4i.parent || document.body;
            e4i.buttons = e4i.buttons || [];
            e4i.message = a3x.bW5b(gi8a, e4i);
            e4i.onaction = bbZ6T.g4k(null, e4i.action);
            if (e4i.mask === undefined)
                e4i.mask = true;
            if (e4i.draggable === undefined)
                e4i.draggable = true;
            !!cs5x && cs5x.S5X();
            cs5x = n4r.bcf6Z.A4E(e4i);
            cs5x.M4Q();
            if (e4i.autoclose)
                eD7w = setTimeout(Bq4u.g4k(null), 2e3);
            return cs5x
        }
    }();
    l4p.eW7P = function(e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w1";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: e4i.btntxt || "确定"
        }];
        var cs5x = l4p.mx0x(e4i);
        return cs5x
    }
    ;
    l4p.gC8u = function(e4i) {
        e4i = e4i || {};
        e4i.clazz = e4i.clazz || "m-layer-w2";
        e4i.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e4i.btnok || "确定",
            style: e4i.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: e4i.btncc || "取消",
            style: e4i.ccstyle || ""
        }];
        var cs5x = l4p.mx0x(e4i);
        return cs5x
    }
}
)();
(function() {
    var c4g = NEJ.P
      , bo5t = NEJ.F
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , k4o = c4g("nej.u");
    a3x.cwX6R = function() {
        var gf8X = /[\r\n]/gi
          , Q5V = {};
        var cwW6Q = function(cz5E) {
            return (cz5E || "").replace(gf8X, "aa").length
        };
        var bzJ2x = function(D4H) {
            var bd5i = Q5V[D4H]
              , bzQ2x = a3x.z4D(D4H)
              , yy4C = a3x.z4D(D4H + "-counter");
            if (!bzQ2x || !bd5i)
                return;
            var d4h = {
                input: bzQ2x.value
            };
            d4h.length = bd5i.onlength(d4h.input);
            d4h.delta = bd5i.max - d4h.length;
            bd5i.onchange(d4h);
            yy4C.innerHTML = d4h.value || "剩余" + d4h.delta + "个字"
        };
        return function(F4J, e4i) {
            var D4H = a3x.la9R(F4J);
            if (!D4H || !!Q5V[D4H])
                return;
            var bd5i = NEJ.X({}, e4i);
            bd5i.onchange = bd5i.onchange || bo5t;
            bd5i.onlength = cwW6Q;
            if (!bd5i.max) {
                var bAa2x = parseInt(a3x.fU8M(D4H, "maxlength"))
                  , bAc2x = parseInt(a3x.u4y(D4H, "maxLength"));
                bd5i.max = bAa2x || bAc2x || 100;
                if (!bAa2x && !!bAc2x)
                    bd5i.onlength = k4o.fc7V
            }
            Q5V[D4H] = bd5i;
            h4l.s4w(D4H, "input", bzJ2x.g4k(null, D4H));
            var f4j = a3x.GJ6D(D4H, {
                nid: bd5i.nid || "js-counter",
                clazz: bd5i.clazz
            });
            bd5i.xid = D4H + "-counter";
            f4j.id = bd5i.xid;
            bzJ2x(D4H)
        }
    }()
}
)();
(function() {
    var c4g = NEJ.P
      , a3x = c4g("nej.e")
      , bc5h = c4g("nej.h");
    bc5h.btA0x = function(F4J, dL7E) {}
}
)();
(function() {
    var c4g = NEJ.P
      , bo5t = NEJ.F
      , N4R = c4g("nej.p")
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , bc5h = c4g("nej.h");
    if (N4R.mp0x.trident)
        return;
    bc5h.btA0x = function() {
        var Q5V = {};
        var Gb6V = function(d4h) {
            var cW6Q = h4l.U5Z(d4h);
            if (!!cW6Q.value)
                return;
            a3x.Z5e(a3x.GJ6D(cW6Q), "display", "none")
        };
        var DL5Q = function(d4h) {
            var cW6Q = h4l.U5Z(d4h);
            if (!!cW6Q.value)
                return;
            a3x.Z5e(a3x.GJ6D(cW6Q), "display", "")
        };
        var cwU6O = function(cW6Q, dL7E) {
            var D4H = a3x.la9R(cW6Q)
              , jR9I = a3x.GJ6D(cW6Q, {
                tag: "label",
                clazz: dL7E
            });
            jR9I.htmlFor = D4H;
            var cJ6D = a3x.fU8M(cW6Q, "placeholder") || "";
            jR9I.innerText = cJ6D == "null" ? "" : cJ6D;
            var cg5l = cW6Q.offsetHeight + "px";
            a3x.ff7Y(jR9I, {
                left: 0,
                display: !cW6Q.value ? "" : "none"
            })
        };
        return bc5h.btA0x.ek7d(function(d4h) {
            d4h.stopped = !0;
            var bg5l = d4h.args
              , cW6Q = a3x.z4D(bg5l[0]);
            if (!!Q5V[cW6Q.id])
                return;
            cwU6O(cW6Q, bg5l[1]);
            Q5V[cW6Q.id] = !0;
            h4l.s4w(cW6Q, "blur", DL5Q.g4k(null));
            h4l.s4w(cW6Q, "focus", Gb6V.g4k(null))
        })
    }()
}
)();
(function() {
    var c4g = NEJ.P
      , bc5h = c4g("nej.h")
      , a3x = c4g("nej.e")
      , cT6N = c4g("nej.x");
    a3x.fP8H = cT6N.fP8H = function(F4J, dL7E) {
        bc5h.btA0x(F4J, a3x.u4y(F4J, "holder") || dL7E || "js-placeholder");
        return this
    }
    ;
    cT6N.isChange = !0
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), hb8T;
    if (!!N4R.Os9j)
        return;
    N4R.Os9j = NEJ.C();
    hb8T = N4R.Os9j.O4S(N4R.cy5D);
    hb8T.cq5v = function() {
        this.cu5z();
        this.CR5W = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    }
    ;
    hb8T.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.fS8K = document.forms[e4i.form] || a3x.z4D(e4i.form);
        this.bS5X([[this.fS8K, "keypress", this.cwT6N.g4k(this)]]);
        this.pm1x = e4i.message || {};
        this.pm1x.pass = this.pm1x.pass || "&nbsp;";
        var eQ7J = this.oQ0x(this.fS8K, "focusMode", 1);
        if (!isNaN(eQ7J)) {
            this.bBv2x = {
                mode: eQ7J,
                clazz: e4i.focus
            }
        }
        this.Bo4s = e4i.holder;
        this.CR5W.tp.clazz = "js-mhd " + (e4i.tip || "js-tip");
        this.CR5W.ok.clazz = "js-mhd " + (e4i.pass || "js-pass");
        this.CR5W.er.clazz = "js-mhd " + (e4i.error || "js-error");
        this.bBN3x = e4i.invalid || "js-invalid";
        this.cwQ6K(e4i);
        this.ga8S();
        if (!!this.Bl4p)
            this.Bl4p.focus()
    }
    ;
    hb8T.bA5F = function() {
        this.bF5K();
        delete this.pm1x;
        delete this.Bl4p;
        delete this.Dh5m;
        delete this.fS8K;
        delete this.bCv3x;
        delete this.Ov9m
    }
    ;
    hb8T.oQ0x = function(f4j, Dm5r, t4x) {
        var C4G = a3x.u4y(f4j, Dm5r);
        switch (t4x) {
        case 1:
            return parseInt(C4G);
        case 2:
            return (C4G || "").toLowerCase() == "true";
        case 3:
            return this.btc0x(C4G)
        }
        return C4G
    }
    ;
    hb8T.Bh4l = function(C4G, t4x) {
        if (t4x == "date")
            return this.btc0x(C4G);
        return parseInt(C4G)
    }
    ;
    hb8T.Vv2x = function() {
        var js9j = /^button|submit|reset|image|hidden|file$/i;
        return function(f4j) {
            f4j = this.z4D(f4j) || f4j;
            var t4x = f4j.type;
            return !!f4j.name && !js9j.test(f4j.type || "")
        }
    }();
    hb8T.cwP6J = function() {
        var js9j = /^hidden$/i;
        return function(f4j) {
            if (this.Vv2x(f4j))
                return !0;
            f4j = this.z4D(f4j) || f4j;
            var t4x = f4j.type || "";
            return js9j.test(t4x)
        }
    }();
    hb8T.btc0x = function() {
        var cS6M = /[-\/]/;
        var cwO6I = function(C4G) {
            if (!C4G)
                return "";
            C4G = C4G.split(cS6M);
            C4G.push(C4G.shift());
            return C4G.join("/")
        };
        return function(C4G) {
            if ((C4G || "").toLowerCase() == "now")
                return +(new Date);
            return Date.parse(cwO6I(C4G))
        }
    }();
    hb8T.cwT6N = function(d4h) {
        if (d4h.keyCode != 13)
            return;
        this.y4C("onenter", d4h)
    }
    ;
    hb8T.cwN6H = function(D4H, T5Y) {
        var ri1x = this.Ov9m[T5Y]
          , C4G = this.oQ0x(D4H, T5Y);
        if (!C4G || !ri1x)
            return;
        this.Vu2x(D4H, ri1x);
        this.bsm0x(D4H, T5Y, C4G)
    }
    ;
    hb8T.cwM6G = function(D4H, T5Y) {
        try {
            var bDj3x = this.oQ0x(D4H, T5Y);
            if (!bDj3x)
                return;
            var C4G = new RegExp(bDj3x);
            this.bsm0x(D4H, T5Y, C4G);
            this.Vu2x(D4H, this.Ov9m[T5Y])
        } catch (e) {}
    }
    ;
    hb8T.cwL6F = function(D4H, T5Y) {
        var ri1x = this.Ov9m[T5Y];
        if (!!ri1x && this.oQ0x(D4H, T5Y, 2))
            this.Vu2x(D4H, ri1x)
    }
    ;
    hb8T.brP0x = function(D4H, T5Y, C4G) {
        C4G = parseInt(C4G);
        if (isNaN(C4G))
            return;
        this.bsm0x(D4H, T5Y, C4G);
        this.Vu2x(D4H, this.Ov9m[T5Y])
    }
    ;
    hb8T.bDo3x = function(D4H, T5Y) {
        this.brP0x(D4H, T5Y, this.oQ0x(D4H, T5Y))
    }
    ;
    hb8T.bDw3x = function(D4H, T5Y) {
        this.brP0x(D4H, T5Y, a3x.fU8M(D4H, T5Y))
    }
    ;
    hb8T.bDQ3x = function(D4H, T5Y, t4x) {
        var C4G = this.Bh4l(this.oQ0x(D4H, T5Y), this.oQ0x(D4H, "type"));
        this.brP0x(D4H, T5Y, C4G)
    }
    ;
    hb8T.cwK6E = function() {
        var gf8X = /^input|textarea$/i;
        var Gb6V = function(d4h) {
            this.pi1x(h4l.U5Z(d4h))
        };
        var DL5Q = function(d4h) {
            var f4j = h4l.U5Z(d4h);
            if (!this.oQ0x(f4j, "ignore", 2)) {
                this.bEx3x(f4j)
            }
        };
        return function(f4j) {
            if (this.oQ0x(f4j, "autoFocus", 2))
                this.Bl4p = f4j;
            var qc1x = a3x.fU8M(f4j, "placeholder");
            if (!!qc1x && qc1x != "null")
                a3x.fP8H(f4j, this.Bo4s);
            if (!!this.bBv2x && gf8X.test(f4j.tagName))
                a3x.mK0x(f4j, this.bBv2x);
            var D4H = a3x.la9R(f4j);
            this.cwL6F(D4H, "required");
            this.cwN6H(D4H, "type");
            this.cwM6G(D4H, "pattern");
            this.bDw3x(D4H, "maxlength");
            this.bDw3x(D4H, "minlength");
            this.bDo3x(D4H, "maxLength");
            this.bDo3x(D4H, "minLength");
            this.bDQ3x(D4H, "min");
            this.bDQ3x(D4H, "max");
            var T5Y = f4j.name;
            this.pm1x[T5Y + "-tip"] = this.oQ0x(f4j, "tip");
            this.pm1x[T5Y + "-error"] = this.oQ0x(f4j, "message");
            this.pi1x(f4j);
            var bv5A = this.Dh5m[D4H]
              , j4n = (bv5A || Y5d).data || Y5d
              , OB0x = this.oQ0x(f4j, "counter", 2);
            if (OB0x && (j4n.maxlength || j4n.maxLength)) {
                a3x.cwX6R(D4H, {
                    nid: this.CR5W.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!bv5A && gf8X.test(f4j.tagName)) {
                this.bS5X([[f4j, "focus", Gb6V.g4k(this)], [f4j, "blur", DL5Q.g4k(this)]])
            } else if (this.oQ0x(f4j, "focus", 2)) {
                this.bS5X([[f4j, "focus", Gb6V.g4k(this)]])
            }
        }
    }();
    hb8T.cwQ6K = function() {
        var Eg5l = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.btc0x(v))
            }
        };
        var cwI6C = {
            required: function(f4j) {
                var t4x = f4j.type
                  , cwH6B = !f4j.value
                  , cwF6z = (t4x == "checkbox" || t4x == "radio") && !f4j.checked;
                if (cwF6z || cwH6B)
                    return -1
            },
            type: function(f4j, e4i) {
                var cS6M = this.bCv3x[e4i.type]
                  , ez7s = f4j.value.trim()
                  , cwE6y = !!cS6M.test && !cS6M.test(ez7s)
                  , cwD6x = k4o.gb8T(cS6M) && !cS6M.call(this, ez7s);
                if (cwE6y || cwD6x)
                    return -2
            },
            pattern: function(f4j, e4i) {
                if (!e4i.pattern.test(f4j.value))
                    return -3
            },
            maxlength: function(f4j, e4i) {
                if (f4j.value.length > e4i.maxlength)
                    return -4
            },
            minlength: function(f4j, e4i) {
                if (f4j.value.length < e4i.minlength)
                    return -5
            },
            maxLength: function(f4j, e4i) {
                if (k4o.fc7V(f4j.value) > e4i.maxLength)
                    return -4
            },
            minLength: function(f4j, e4i) {
                if (k4o.fc7V(f4j.value) < e4i.minLength)
                    return -5
            },
            min: function(f4j, e4i) {
                var gs8k = this.Bh4l(f4j.value, e4i.type);
                if (isNaN(gs8k) || gs8k < e4i.min)
                    return -6
            },
            max: function(f4j, e4i) {
                var gs8k = this.Bh4l(f4j.value, e4i.type);
                if (isNaN(gs8k) || gs8k > e4i.max)
                    return -7
            }
        };
        return function(e4i) {
            this.bCv3x = NEJ.X(NEJ.X({}, Eg5l), e4i.type);
            this.Ov9m = NEJ.X(NEJ.X({}, cwI6C), e4i.attr)
        }
    }();
    hb8T.Vu2x = function(D4H, xk3x) {
        if (!k4o.gb8T(xk3x))
            return;
        var bv5A = this.Dh5m[D4H];
        if (!bv5A || !bv5A.func) {
            bv5A = bv5A || {};
            bv5A.func = [];
            this.Dh5m[D4H] = bv5A
        }
        bv5A.func.push(xk3x)
    }
    ;
    hb8T.bsm0x = function(D4H, T5Y, C4G) {
        if (!T5Y)
            return;
        var bv5A = this.Dh5m[D4H];
        if (!bv5A || !bv5A.data) {
            bv5A = bv5A || {};
            bv5A.data = {};
            this.Dh5m[D4H] = bv5A
        }
        bv5A.data[T5Y] = C4G
    }
    ;
    hb8T.bEx3x = function(f4j) {
        f4j = this.z4D(f4j) || f4j;
        var bv5A = this.Dh5m[a3x.la9R(f4j)];
        if (!f4j || !bv5A || !this.Vv2x(f4j))
            return !0;
        var o4s;
        k4o.eq7j(bv5A.func, function(eB7u) {
            o4s = eB7u.call(this, f4j, bv5A.data);
            return o4s != null
        }, this);
        if (o4s == null) {
            var d4h = {
                target: f4j,
                form: this.fS8K
            };
            this.y4C("oncheck", d4h);
            o4s = d4h.value
        }
        var d4h = {
            target: f4j,
            form: this.fS8K
        };
        if (o4s != null) {
            d4h.code = o4s;
            this.y4C("oninvalid", d4h);
            if (!d4h.stopped) {
                this.cwC6w(f4j, d4h.value || this.pm1x[f4j.name + o4s])
            }
        } else {
            this.y4C("onvalid", d4h);
            if (!d4h.stopped)
                this.cwB6v(f4j, d4h.value)
        }
        return o4s == null
    }
    ;
    hb8T.xg3x = function() {
        var cwA6u = function(baP5U, baO5T) {
            return baP5U == baO5T ? "block" : "none"
        };
        var cwz6t = function(f4j, t4x, bC5H) {
            var qc1x = bGa4e.call(this, f4j, t4x);
            if (!qc1x && !!bC5H)
                qc1x = a3x.GJ6D(f4j, this.CR5W[t4x]);
            return qc1x
        };
        var bGa4e = function(f4j, t4x) {
            var qc1x;
            if (t4x == "tp")
                qc1x = a3x.z4D(f4j.name + "-tip");
            if (!qc1x)
                qc1x = a3x.I4M(f4j.parentNode, this.CR5W[t4x].nid)[0];
            return qc1x
        };
        return function(f4j, bC5H, t4x) {
            f4j = this.z4D(f4j) || f4j;
            if (!f4j)
                return;
            t4x == "er" ? a3x.x4B(f4j, this.bBN3x) : a3x.v4z(f4j, this.bBN3x);
            var qc1x = cwz6t.call(this, f4j, t4x, bC5H);
            if (!!qc1x && !!bC5H)
                qc1x.innerHTML = bC5H;
            k4o.eq7j(this.CR5W, function(C4G, J4N) {
                a3x.Z5e(bGa4e.call(this, f4j, J4N), "display", cwA6u(t4x, J4N))
            }, this)
        }
    }();
    hb8T.pi1x = function(f4j, bC5H) {
        this.xg3x(f4j, bC5H || this.pm1x[f4j.name + "-tip"], "tp");
        return this
    }
    ;
    hb8T.cwB6v = function(f4j, bC5H) {
        this.xg3x(f4j, bC5H || this.pm1x[f4j.name + "-pass"] || this.pm1x.pass, "ok");
        return this
    }
    ;
    hb8T.cwC6w = function(f4j, bC5H) {
        this.xg3x(f4j, bC5H || this.pm1x[f4j.name + "-error"], "er");
        return this
    }
    ;
    hb8T.ih8Z = function() {
        var gf8X = /^(?:radio|checkbox)$/i;
        var cwy6s = function(C4G) {
            return C4G == null ? "" : C4G
        };
        var bGp4t = function(C4G, f4j) {
            if (gf8X.test(f4j.type || "")) {
                f4j.checked = C4G == f4j.value
            } else {
                f4j.value = cwy6s(C4G)
            }
        };
        return function(T5Y, C4G) {
            var f4j = this.z4D(T5Y);
            if (!f4j)
                return this;
            if (f4j.tagName == "SELECT" || !f4j.length) {
                bGp4t(C4G, f4j)
            } else {
                k4o.bb5g(f4j, bGp4t.g4k(null, C4G))
            }
            return this
        }
    }();
    hb8T.z4D = function(T5Y) {
        return this.fS8K.elements[T5Y]
    }
    ;
    hb8T.czB7u = function() {
        return this.fS8K
    }
    ;
    hb8T.Vn2x = function() {
        var gf8X = /^radio|checkbox$/i
          , js9j = /^number|date$/;
        var cwl6f = function(bu5z, f4j) {
            var T5Y = f4j.name
              , C4G = f4j.value
              , bv5A = bu5z[T5Y]
              , t4x = this.oQ0x(f4j, "type");
            if (js9j.test(t4x))
                C4G = this.Bh4l(C4G, t4x);
            if (gf8X.test(f4j.type) && !f4j.checked) {
                C4G = this.oQ0x(f4j, "value");
                if (!C4G)
                    return
            }
            if (!!bv5A) {
                if (!k4o.eu7n(bv5A)) {
                    bv5A = [bv5A];
                    bu5z[T5Y] = bv5A
                }
                bv5A.push(C4G)
            } else {
                bu5z[T5Y] = C4G
            }
        };
        return function() {
            var o4s = {};
            k4o.bb5g(this.fS8K.elements, function(f4j) {
                if (this.cwP6J(f4j))
                    cwl6f.call(this, o4s, f4j)
            }, this);
            return o4s
        }
    }();
    hb8T.IT7M = function() {
        var cwk6e = function(f4j) {
            if (this.Vv2x(f4j))
                this.pi1x(f4j)
        };
        return function() {
            this.fS8K.reset();
            k4o.bb5g(this.fS8K.elements, cwk6e, this);
            return this
        }
    }();
    hb8T.cxl6f = function() {
        this.fS8K.submit();
        return this
    }
    ;
    hb8T.ga8S = function() {
        var cwd6X = function(f4j) {
            if (this.Vv2x(f4j))
                this.cwK6E(f4j)
        };
        return function() {
            this.Dh5m = {};
            k4o.bb5g(this.fS8K.elements, cwd6X, this);
            return this
        }
    }();
    hb8T.cwb6V = function(f4j) {
        f4j = this.z4D(f4j) || f4j;
        if (!!f4j)
            return this.bEx3x(f4j);
        var o4s = !0;
        k4o.bb5g(this.fS8K.elements, function(f4j) {
            var ku9l = this.cwb6V(f4j);
            o4s = o4s && ku9l
        }, this);
        return o4s
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), h4l = c4g("nej.v"), G4K = c4g("nej.ut"), k4o = c4g("nej.u"), l4p = c4g("nm.x"), n4r = c4g("nm.l"), b4f, K4O;
    n4r.Vj2x = NEJ.C();
    b4f = n4r.Vj2x.O4S(n4r.dZ7S);
    K4O = n4r.Vj2x.cj5o;
    b4f.bR5W = function() {
        this.cc5h();
        h4l.s4w(this.m4q, "click", this.cA5F.g4k(this));
        h4l.s4w(document, "mousewheel", this.AO4S.g4k(this));
        if (!!document.body.addEventListener)
            document.body.addEventListener("DOMMouseScroll", this.AO4S.g4k(this))
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        if (e4i.jst) {
            this.m4q.innerHTML = a3x.bW5b(e4i.jst, e4i.data)
        } else if (e4i.ntp) {
            this.m4q.appendChild(a3x.dj6d(e4i.ntp))
        } else if (e4i.txt) {
            this.m4q.innerHTML = a3x.hZ8R(e4i.txt)
        } else if (e4i.html) {
            this.m4q.innerHTML = e4i.html
        }
        var OQ0x = this.m4q.getElementsByTagName("form");
        if (OQ0x.length) {
            this.fS8K = G4K.Os9j.A4E({
                form: OQ0x[0]
            })
        }
        this.Fb6V = a3x.cU6O(this.m4q)[0]
    }
    ;
    b4f.bA5F = function() {
        this.y4C("ondestroy");
        this.bF5K();
        this.m4q.innerHTML = "";
        delete this.Fb6V
    }
    ;
    b4f.cA5F = function(d4h) {
        var f4j = h4l.U5Z(d4h, "d:action")
          , j4n = this.fS8K ? this.fS8K.Vn2x() : null
          , d4h = {
            action: a3x.u4y(f4j, "action")
        };
        if (j4n)
            d4h.data = j4n;
        if (d4h.action) {
            this.y4C("onaction", d4h);
            if (d4h.stopped)
                return;
            this.br5w()
        }
    }
    ;
    b4f.AO4S = function(d4h) {
        if (!this.Fb6V)
            return;
        h4l.bh5m(d4h);
        var dm6g = d4h.wheelDelta || -d4h.detail;
        this.Fb6V.scrollTop -= dm6g
    }
    ;
    l4p.jH9y = function(e4i) {
        e4i.destroyable = e4i.destroyable || true;
        e4i.title = e4i.title || "提示";
        e4i.draggable = true;
        e4i.parent = document.body;
        e4i.mask = e4i.mask || true;
        var zs4w = n4r.Vj2x.A4E(e4i);
        zs4w.M4Q();
        return zs4w
    }
}
)();
(function() {
    var p = NEJ.P("nej.u");
    var bJJ5O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , OS0x = {}
      , Fm6g = {};
    for (var i = 0, l = bJJ5O.length, c; i < l; i++) {
        c = bJJ5O.charAt(i);
        OS0x[i] = c;
        Fm6g[c] = i
    }
    var cwa6U = function(hH8z) {
        var r4v = 0, c, o4s = [];
        while (r4v < hH8z.length) {
            c = hH8z[r4v];
            if (c < 128) {
                o4s.push(String.fromCharCode(c));
                r4v++
            } else if (c > 191 && c < 224) {
                o4s.push(String.fromCharCode((c & 31) << 6 | hH8z[r4v + 1] & 63));
                r4v += 2
            } else {
                o4s.push(String.fromCharCode((c & 15) << 12 | (hH8z[r4v + 1] & 63) << 6 | hH8z[r4v + 2] & 63));
                r4v += 3
            }
        }
        return o4s.join("")
    };
    var cvZ6T = function() {
        var hd8V = /\r\n/g;
        return function(j4n) {
            j4n = j4n.replace(hd8V, "\n");
            var o4s = []
              , or0x = String.fromCharCode(237);
            if (or0x.charCodeAt(0) < 0)
                for (var i = 0, l = j4n.length, c; i < l; i++) {
                    c = j4n.charCodeAt(i);
                    c > 0 ? o4s.push(c) : o4s.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                }
            else
                for (var i = 0, l = j4n.length, c; i < l; i++) {
                    c = j4n.charCodeAt(i);
                    if (c < 128)
                        o4s.push(c);
                    else if (c > 127 && c < 2048)
                        o4s.push(c >> 6 | 192, c & 63 | 128);
                    else
                        o4s.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                }
            return o4s
        }
    }();
    var IU7N = function(hH8z) {
        var r4v = 0
          , o4s = []
          , eQ7J = hH8z.length % 3;
        if (eQ7J == 1)
            hH8z.push(0, 0);
        if (eQ7J == 2)
            hH8z.push(0);
        while (r4v < hH8z.length) {
            o4s.push(OS0x[hH8z[r4v] >> 2], OS0x[(hH8z[r4v] & 3) << 4 | hH8z[r4v + 1] >> 4], OS0x[(hH8z[r4v + 1] & 15) << 2 | hH8z[r4v + 2] >> 6], OS0x[hH8z[r4v + 2] & 63]);
            r4v += 3
        }
        if (eQ7J == 1)
            o4s[o4s.length - 1] = o4s[o4s.length - 2] = "=";
        if (eQ7J == 2)
            o4s[o4s.length - 1] = "=";
        return o4s.join("")
    };
    var bLi5n = function() {
        var qX1x = /\n|\r|=/g;
        return function(j4n) {
            var r4v = 0
              , o4s = [];
            j4n = j4n.replace(qX1x, "");
            for (var i = 0, l = j4n.length; i < l; i += 4)
                o4s.push(Fm6g[j4n.charAt(i)] << 2 | Fm6g[j4n.charAt(i + 1)] >> 4, (Fm6g[j4n.charAt(i + 1)] & 15) << 4 | Fm6g[j4n.charAt(i + 2)] >> 2, (Fm6g[j4n.charAt(i + 2)] & 3) << 6 | Fm6g[j4n.charAt(i + 3)]);
            var bm5r = o4s.length
              , eQ7J = j4n.length % 4;
            if (eQ7J == 2)
                o4s = o4s.slice(0, bm5r - 2);
            if (eQ7J == 3)
                o4s = o4s.slice(0, bm5r - 1);
            return o4s
        }
    }();
    p.cxp7i = function(j4n) {
        return cwa6U(bLi5n(j4n))
    }
    ;
    p.cvX6R = function(j4n) {
        var hH8z = bLi5n(j4n), do6i = hH8z.length, hT8L;
        var r4v = 0;
        while (hT8L = hH8z[r4v]) {
            if (hT8L > 128) {
                hH8z[r4v] = hT8L - 256
            }
            r4v++
        }
        return hH8z
    }
    ;
    p.cvW6Q = function(j4n) {
        try {
            return window.btoa(j4n)
        } catch (ex) {
            return IU7N(cvZ6T(j4n))
        }
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, h4l = c4g("nej.v"), a3x = c4g("nej.e"), w4A = c4g("nej.j"), N4R = c4g("nej.p"), k4o = c4g("nej.u"), n4r = c4g("nm.l"), B4F = c4g("nm.w"), bD5I = c4g("nej.ui"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), b4f, K4O;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    n4r.bLU5Z = NEJ.C();
    b4f = n4r.bLU5Z.O4S(n4r.dZ7S);
    b4f.bZ5e = function() {
        this.cb5g = "m-download-layer"
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        var i4m = a3x.I4M(this.m4q, "j-flag");
        this.boI9z = i4m[0];
        this.boE9v = i4m[1];
        this.bMk5p = i4m[2];
        w4A.bp5u("/client/version/get", {
            type: "json",
            onload: this.cvV6P.g4k(this)
        });
        if (N4R.bbH6B.mac) {
            a3x.v4z(this.boI9z.parentNode, "f-hide");
            a3x.x4B(this.boE9v.parentNode, "f-hide");
            a3x.x4B(this.bMk5p, "f-hide")
        } else {
            a3x.x4B(this.boI9z.parentNode, "f-hide");
            a3x.v4z(this.boE9v.parentNode, "f-hide");
            a3x.v4z(this.bMk5p, "f-hide")
        }
    }
    ;
    b4f.bj5o = function(e4i) {
        e4i.clazz = " m-layer-down";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "下载";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bk5p(e4i);
        this.bS5X([[this.m4q, "click", this.bQ5V.g4k(this)]]);
        this.en7g = TYPE_MAP[e4i.type];
        this.gH8z = e4i.id
    }
    ;
    b4f.bA5F = function() {
        this.bF5K()
    }
    ;
    b4f.zg4k = function() {
        this.br5w()
    }
    ;
    b4f.BO5T = function(d4h) {
        this.y4C("onok", C4G);
        this.br5w()
    }
    ;
    b4f.bQ5V = function(d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        switch (a3x.u4y(f4j, "action")) {
        case "download":
            this.br5w();
            window.open(a3x.u4y(f4j, "src"));
            break;
        case "orpheus":
            this.br5w();
            location.href = "orpheus://" + k4o.cvW6Q(JSON.stringify({
                type: this.en7g,
                id: this.gH8z,
                cmd: "download"
            }));
            break
        }
    }
    ;
    b4f.cvV6P = function(d4h) {
        if ((d4h || Y5d).code == 200) {
            this.Ij7c = d4h.data;
            this.boI9z.innerText = "V" + this.Ij7c.mac;
            this.boE9v.innerText = "V" + this.Ij7c.pc
        }
    }
    ;
    l4p.Vf2x = function(e4i) {
        n4r.bLU5Z.A4E(e4i).M4Q()
    }
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , k4o = c4g("nej.u")
      , p4t = c4g("nm.d")
      , bP5U = {};
    p4t.z4D = function(J4N) {
        return bP5U[J4N]
    }
    ;
    p4t.my0x = function(J4N, bd5i) {
        bP5U[J4N] = bd5i
    }
    ;
    p4t.eY7R = function(j4n) {
        k4o.eq7j(j4n, function(q4u, J4N) {
            var bd5i = bP5U[J4N] || {};
            NEJ.X(bd5i, q4u);
            bP5U[J4N] = bd5i
        })
    }
}
)();
(function() {
    var c4g = NEJ.P
      , bo5t = NEJ.F
      , bc5h = c4g("nej.h");
    bc5h.Vd2x = function(J4N) {
        return localStorage.getItem(J4N)
    }
    ;
    bc5h.Vc2x = function(J4N, C4G) {
        localStorage.setItem(J4N, C4G)
    }
    ;
    bc5h.bob9S = function(J4N) {
        localStorage.removeItem(J4N)
    }
    ;
    bc5h.boa9R = function() {
        localStorage.clear()
    }
    ;
    bc5h.cvU6O = function() {
        var o4s = [];
        for (var i = 0, l = localStorage.length; i < l; i++)
            o4s.push(localStorage.key(i));
        return o4s
    }
    ;
    bc5h.bnY9P = function() {
        (document.onstorageready || bo5t)()
    }
    ;
    bc5h.bnX9O = function() {
        return !0
    }
}
)();
(function() {
    var c4g = NEJ.P, N4R = c4g("nej.p"), hT8L = c4g("nej.c"), bc5h = c4g("nej.h"), sB2x;
    if (N4R.mp0x.trident || !!window.localStorage)
        return;
    var cvS6M = function() {
        var qK1x, eD7w;
        var bhm7f = function() {
            qK1x = document.createElement("div");
            NEJ.X(qK1x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qK1x);
            qK1x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + hT8L.z4D("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Ma8S = function() {
            eD7w = window.clearTimeout(eD7w);
            var hl8d = qK1x.getElementsByTagName("object")[0];
            if (!!hl8d.initStorage) {
                delete qK1x;
                sB2x = hl8d;
                sB2x.initStorage("nej-storage");
                (document.onstorageready || bo5t)();
                return
            }
            eD7w = window.setTimeout(Ma8S, 500)
        };
        return function() {
            if (!!sB2x)
                return;
            bhm7f();
            Ma8S()
        }
    }();
    bc5h.Vd2x = bc5h.Vd2x.ek7d(function(d4h) {
        d4h.stopped = !0;
        if (!sB2x)
            return;
        d4h.value = sB2x.getItem(d4h.args[0])
    });
    bc5h.Vc2x = bc5h.Vc2x.ek7d(function(d4h) {
        d4h.stopped = !0;
        if (!sB2x)
            return;
        var bg5l = d4h.args;
        sB2x.setItem(bg5l[0], bg5l[1])
    });
    bc5h.bob9S = bc5h.bob9S.ek7d(function(d4h) {
        d4h.stopped = !0;
        if (!sB2x)
            return;
        sB2x.removeItem(d4h.args[0])
    });
    bc5h.boa9R = bc5h.boa9R.ek7d(function(d4h) {
        d4h.stopped = !0;
        if (!!sB2x)
            sB2x.clear()
    });
    bc5h.bnY9P = bc5h.bnY9P.ek7d(function(d4h) {
        d4h.stopped = !0;
        cvS6M()
    });
    bc5h.bnX9O = bc5h.bnX9O.ek7d(function(d4h) {
        d4h.stopped = !0;
        d4h.value = !!sB2x
    })
}
)();
(function() {
    var c4g = NEJ.P
      , k4o = c4g("nej.u")
      , h4l = c4g("nej.v")
      , bc5h = c4g("nej.h")
      , w4A = c4g("nej.j")
      , G4K = c4g("nej.ut")
      , Q5V = {};
    w4A.vT3x = function(J4N, C4G) {
        var bPT6N = JSON.stringify(C4G);
        try {
            bc5h.Vc2x(J4N, bPT6N)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bPT6N != bc5h.Vd2x(J4N))
            Q5V[J4N] = C4G;
        return this
    }
    ;
    w4A.us2x = function(J4N) {
        var j4n = JSON.parse(bc5h.Vd2x(J4N) || "null");
        return j4n == null ? Q5V[J4N] : j4n
    }
    ;
    w4A.bQp6j = function(J4N, C4G) {
        var j4n = w4A.us2x(J4N);
        if (j4n == null) {
            j4n = C4G;
            w4A.vT3x(J4N, j4n)
        }
        return j4n
    }
    ;
    w4A.Pd0x = function(J4N) {
        delete Q5V[J4N];
        bc5h.bob9S(J4N);
        return this
    }
    ;
    w4A.cxq7j = function() {
        var bnu9l = function(q4u, J4N, bu5z) {
            delete bu5z[J4N]
        };
        return function() {
            k4o.eq7j(Q5V, bnu9l);
            bc5h.boa9R();
            return this
        }
    }();
    w4A.cxr7k = function(o4s) {
        o4s = o4s || {};
        k4o.bb5g(bc5h.cvU6O(), function(J4N) {
            o4s[J4N] = w4A.us2x(J4N)
        });
        return o4s
    }
    ;
    G4K.fu7n.A4E({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (bc5h.bnX9O()) {
                document.onstorageready()
            }
        }
    });
    var cvM6G = function() {
        var cvL6F = function(C4G, J4N, bu5z) {
            bc5h.Vc2x(J4N, JSON.stringify(C4G));
            delete bu5z[J4N]
        };
        return function() {
            k4o.eq7j(Q5V, cvL6F)
        }
    }();
    h4l.s4w(document, "storageready", cvM6G);
    bc5h.bnY9P()
}
)();
(function() {
    var c4g = NEJ.P, h4l = c4g("nej.v"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), IY7R;
    if (!!N4R.bms9j)
        return;
    N4R.bms9j = NEJ.C();
    IY7R = N4R.bms9j.O4S(N4R.cy5D);
    IY7R.cq5v = function() {
        var gi8a = +(new Date)
          , mg0x = "dat-" + gi8a;
        return function() {
            this.cu5z();
            var Q5V = this.constructor[mg0x];
            if (!Q5V) {
                Q5V = {};
                this.constructor[mg0x] = Q5V
            }
            this.R5W = Q5V
        }
    }();
    IY7R.z4D = function(J4N) {
        return this.R5W[J4N]
    }
    ;
    IY7R.my0x = function(J4N, C4G) {
        var me0x = this.R5W[J4N];
        this.R5W[J4N] = C4G;
        h4l.y4C(localCache, "cachechange", {
            key: J4N,
            type: "set",
            oldValue: me0x,
            newValue: C4G
        });
        return this
    }
    ;
    IY7R.cC6w = function(J4N) {
        var me0x = this.R5W[J4N];
        k4o.YG3x(this.R5W, J4N);
        h4l.y4C(localCache, "cachechange", {
            key: J4N,
            type: "delete",
            oldValue: me0x,
            newValue: undefined
        });
        return me0x
    }
    ;
    IY7R.UP2x = function(ET6N) {
        return NEJ.Q(this.R5W, ET6N)
    }
    ;
    window.localCache = N4R.bms9j.A4E();
    N4R.fu7n.A4E({
        element: localCache,
        event: "cachechange"
    })
}
)();
(function() {
    var c4g = NEJ.P, fh7a = NEJ.R, bo5t = NEJ.F, k4o = c4g("nej.u"), w4A = c4g("nej.j"), N4R = c4g("nej.ut"), mg0x = "dat-" + +(new Date), mc0x;
    if (!!N4R.bml8d)
        return;
    N4R.bml8d = NEJ.C();
    mc0x = N4R.bml8d.O4S(N4R.cy5D);
    mc0x.cq5v = function() {
        this.cu5z();
        this.R5W = this.constructor[mg0x];
        if (!this.R5W) {
            this.R5W = {};
            this.R5W[mg0x + "-l"] = {};
            this.constructor[mg0x] = this.R5W
        }
    }
    ;
    mc0x.qs1x = function(J4N) {
        return this.R5W[J4N]
    }
    ;
    mc0x.oT1x = function(J4N, C4G) {
        this.R5W[J4N] = C4G
    }
    ;
    mc0x.kB9s = function(J4N, kY9P) {
        var j4n = this.qs1x(J4N);
        if (j4n == null) {
            j4n = kY9P;
            this.oT1x(J4N, j4n)
        }
        return j4n
    }
    ;
    mc0x.cvJ6D = function(J4N) {
        if (J4N != null) {
            delete this.R5W[J4N];
            return
        }
        k4o.eq7j(this.R5W, function(q4u, J4N) {
            if (J4N == mg0x + "-l")
                return;
            this.cvJ6D(J4N)
        }, this)
    }
    ;
    mc0x.cxs7l = function(J4N) {
        if (!!w4A.Pd0x)
            return w4A.Pd0x(J4N)
    }
    ;
    mc0x.cvG6A = function(J4N) {
        if (!!w4A.us2x)
            return w4A.us2x(J4N)
    }
    ;
    mc0x.cvF6z = function(J4N, C4G) {
        if (!!w4A.vT3x)
            w4A.vT3x(J4N, C4G)
    }
    ;
    mc0x.CY5d = function(J4N, kY9P) {
        var j4n = this.Pp0x(J4N);
        if (j4n == null) {
            j4n = kY9P;
            this.vy3x(J4N, j4n)
        }
        return j4n
    }
    ;
    mc0x.Pp0x = function(J4N) {
        var j4n = this.qs1x(J4N);
        if (j4n != null)
            return j4n;
        j4n = this.cvG6A(J4N);
        if (j4n != null)
            this.oT1x(J4N, j4n);
        return j4n
    }
    ;
    mc0x.vy3x = function(J4N, C4G) {
        this.cvF6z(J4N, C4G);
        this.oT1x(J4N, C4G)
    }
    ;
    mc0x.bwm1x = function(J4N) {
        if (J4N != null) {
            delete this.R5W[J4N];
            if (!!w4A.Pd0x)
                w4A.Pd0x(J4N);
            return
        }
        k4o.eq7j(this.R5W, function(q4u, J4N) {
            if (J4N == mg0x + "-l")
                return;
            this.bwm1x(J4N)
        }, this)
    }
    ;
    mc0x.cxt7m = function() {
        this.bwm1x();
        return this
    }
    ;
    mc0x.cxu7n = function(J4N) {
        var j4n = this.R5W[mg0x + "-l"];
        delete j4n[J4N]
    }
    ;
    mc0x.bmc8U = function(J4N) {
        var j4n = this.R5W[mg0x + "-l"]
          , bg5l = fh7a.slice.call(arguments, 1);
        k4o.bb5g(j4n[J4N], function(dw6q) {
            try {
                dw6q.apply(null, bg5l)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j4n[J4N]
    }
    ;
    mc0x.blT8L = function(J4N, dw6q) {
        dw6q = dw6q || bo5t;
        var i4m = this.R5W[mg0x + "-l"][J4N];
        if (!i4m) {
            i4m = [dw6q];
            this.R5W[mg0x + "-l"][J4N] = i4m;
            return !1
        }
        i4m.push(dw6q);
        return !0
    }
    ;
    mc0x.cvB6v = function(i4m, bf5k, gc8U) {
        if (!i4m)
            return !1;
        bf5k = parseInt(bf5k) || 0;
        gc8U = parseInt(gc8U) || 0;
        if (!gc8U) {
            if (!i4m.loaded)
                return !1;
            gc8U = i4m.length
        }
        if (!!i4m.loaded)
            gc8U = Math.min(gc8U, i4m.length - bf5k);
        for (var i = 0; i < gc8U; i++)
            if (!i4m[bf5k + i])
                return !1;
        return !0
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, k4o = c4g("nej.u"), N4R = c4g("nej.ut"), b4f, K4O;
    if (!!N4R.Pr0x)
        return;
    N4R.Pr0x = NEJ.C();
    b4f = N4R.Pr0x.O4S(N4R.bml8d);
    K4O = N4R.Pr0x.cj5o;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.uM2x = e4i.key || "id";
        this.bi5n = e4i.data || Y5d;
        this.cvz6t = !!e4i.autogc;
        this.cvy6s(e4i.id)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        if (!!this.dQ7J) {
            this.bxM1x()
        }
    }
    ;
    b4f.cvy6s = function(D4H) {
        var Q5V;
        if (!!D4H) {
            Q5V = this.R5W[D4H];
            if (!Q5V) {
                Q5V = {};
                this.R5W[D4H] = Q5V
            }
        }
        Q5V = Q5V || this.R5W;
        Q5V.hash = Q5V.hash || {};
        this.Px0x = Q5V
    }
    ;
    b4f.bxM1x = function() {
        this.dQ7J = window.clearTimeout(this.dQ7J);
        var bu5z = {};
        k4o.eq7j(this.Px0x, function(i4m, J4N) {
            if (J4N == "hash")
                return;
            if (!k4o.eu7n(i4m))
                return;
            k4o.bb5g(i4m, function(q4u) {
                if (!q4u)
                    return;
                bu5z[q4u[this.uM2x]] = !0
            }, this)
        }, this);
        k4o.eq7j(this.UG2x(), function(q4u, D4H, dN7G) {
            if (!bu5z[D4H]) {
                delete dN7G[D4H]
            }
        })
    }
    ;
    b4f.cvx6r = function() {
        if (!!this.dQ7J) {
            this.dQ7J = window.clearTimeout(this.dQ7J)
        }
        this.dQ7J = window.setTimeout(this.bxM1x.g4k(this), 150)
    }
    ;
    b4f.yM4Q = function(q4u, UE2x) {
        q4u = this.byx2x(q4u, UE2x) || q4u;
        if (!q4u)
            return null;
        var J4N = q4u[this.uM2x];
        if (J4N != null) {
            var hQ8I = this.UG2x()[J4N];
            if (!!hQ8I)
                q4u = NEJ.X(hQ8I, q4u);
            this.UG2x()[J4N] = q4u
        }
        delete q4u.byz2x;
        return q4u
    }
    ;
    b4f.byx2x = bo5t;
    b4f.bkN8F = function(J4N, q4u) {
        if (!q4u)
            return;
        if (!k4o.eu7n(q4u)) {
            var i4m = this.gV8N(J4N)
              , q4u = this.yM4Q(q4u, J4N);
            if (!!q4u)
                i4m.unshift(q4u);
            return
        }
        k4o.mq0x(q4u, this.bkN8F.g4k(this, J4N))
    }
    ;
    b4f.PD0x = function(J4N, co5t) {
        var i4m = this.gV8N(J4N);
        i4m.length = Math.max(i4m.length, co5t);
        this.bkH8z(J4N);
        return this
    }
    ;
    b4f.jp9g = function(J4N) {
        return this.gV8N(J4N).length
    }
    ;
    b4f.bkH8z = function(J4N, nA0x) {
        this.gV8N(J4N).loaded = nA0x != !1;
        return this
    }
    ;
    b4f.UB2x = function(J4N) {
        return !!this.gV8N(J4N).loaded
    }
    ;
    b4f.uc2x = function(J4N, i4m) {
        this.tT2x(J4N);
        this.bky8q({
            key: J4N,
            offset: 0,
            limit: i4m.length + 1
        }, {
            list: i4m,
            total: i4m.length
        })
    }
    ;
    b4f.gV8N = function() {
        var Ek5p = function(J4N) {
            return (J4N || "") + (!J4N ? "" : "-") + "list"
        };
        return function(J4N) {
            var J4N = Ek5p(J4N)
              , i4m = this.Px0x[J4N];
            if (!i4m) {
                i4m = [];
                this.Px0x[J4N] = i4m
            }
            return i4m
        }
    }();
    b4f.UG2x = function() {
        var dN7G = this.Px0x.hash;
        if (!dN7G) {
            dN7G = {};
            this.Px0x.hash = dN7G
        }
        return dN7G
    }
    ;
    b4f.bks8k = function() {
        var Ek5p = function(e4i) {
            return "r-" + e4i.key
        };
        return function(e4i) {
            var ir9i = NEJ.X({}, e4i)
              , nd0x = Ek5p(ir9i);
            if (!this.blT8L(nd0x, this.y4C.g4k(this))) {
                ir9i.rkey = nd0x;
                ir9i.onload = this.cvv6p.g4k(this, ir9i);
                this.y4C("dopullrefresh", ir9i)
            }
            return this
        }
    }();
    b4f.cvv6p = function(e4i, i4m) {
        this.bkN8F(e4i.key, i4m);
        this.bmc8U(e4i.rkey, "onpullrefresh", e4i)
    }
    ;
    b4f.kG9x = function() {
        var Ek5p = function(e4i) {
            return "r-" + e4i.key + "-" + e4i.offset + "-" + e4i.limit
        };
        return function(e4i) {
            e4i = e4i || Y5d;
            var ir9i = {
                key: "" + e4i.key || "",
                ext: e4i.ext || null,
                data: e4i.data || null,
                offset: parseInt(e4i.offset) || 0,
                limit: parseInt(e4i.limit) || 0
            }
              , i4m = this.gV8N(ir9i.key);
            if (this.cvB6v(i4m, ir9i.offset, ir9i.limit)) {
                this.y4C("onlistload", ir9i);
                return this
            }
            var nd0x = Ek5p(ir9i);
            if (!this.blT8L(nd0x, this.y4C.g4k(this))) {
                ir9i.rkey = nd0x;
                ir9i.onload = this.bky8q.g4k(this, ir9i);
                this.y4C("doloadlist", ir9i)
            }
            return this
        }
    }();
    b4f.bky8q = function() {
        var Ep5u = function(q4u, r4v, i4m) {
            if (!!q4u) {
                return !0
            }
            i4m.splice(r4v, 1)
        };
        return function(e4i, o4s) {
            e4i = e4i || Y5d;
            var J4N = e4i.key
              , bf5k = e4i.offset
              , bzH2x = this.gV8N(J4N);
            var i4m = o4s || [];
            if (!k4o.eu7n(i4m)) {
                i4m = o4s.result || o4s.list || [];
                var co5t = parseInt(o4s.total);
                if (!isNaN(co5t) || co5t > i4m.length) {
                    this.PD0x(J4N, co5t)
                }
            }
            k4o.bb5g(i4m, function(q4u, r4v) {
                bzH2x[bf5k + r4v] = this.yM4Q(q4u, J4N)
            }, this);
            if (i4m.length < e4i.limit) {
                this.bkH8z(J4N);
                k4o.mq0x(bzH2x, Ep5u)
            }
            this.bmc8U(e4i.rkey, "onlistload", e4i)
        }
    }();
    b4f.tT2x = function() {
        var Ep5u = function(q4u, r4v, i4m) {
            i4m.splice(r4v, 1)
        };
        return function(J4N) {
            var i4m = this.gV8N(J4N);
            k4o.mq0x(i4m, Ep5u);
            this.bkH8z(J4N, !1);
            if (this.cvz6t) {
                this.cvx6r()
            }
            return this
        }
    }();
    b4f.bzI2x = function(q4u, UE2x) {
        return !q4u.byz2x
    }
    ;
    b4f.eo7h = function(D4H) {
        return this.UG2x()[D4H]
    }
    ;
    b4f.cxv7o = function(D4H) {
        var q4u = this.eo7h(D4H);
        if (!!q4u)
            q4u.byz2x = !0
    }
    ;
    b4f.Uu2x = function() {
        var Ek5p = function(e4i) {
            return "r-" + e4i.key + "-" + e4i.id
        };
        return function(e4i) {
            e4i = e4i || Y5d;
            var D4H = e4i[this.uM2x]
              , ir9i = {
                id: D4H,
                ext: e4i.ext,
                data: e4i.data || {},
                key: "" + e4i.key || ""
            };
            q4u = this.eo7h(D4H);
            ir9i.data[this.uM2x] = D4H;
            if (!!q4u && this.bzI2x(q4u, ir9i.key)) {
                this.y4C("onitemload", ir9i);
                return this
            }
            var nd0x = Ek5p(ir9i);
            if (!this.blT8L(nd0x, this.y4C.g4k(this))) {
                ir9i.rkey = nd0x;
                ir9i.onload = this.cvt6n.g4k(this, ir9i);
                this.y4C("doloaditem", ir9i)
            }
            return this
        }
    }();
    b4f.cvt6n = function(e4i, q4u) {
        e4i = e4i || Y5d;
        this.yM4Q(q4u, e4i.key);
        this.bmc8U(e4i.rkey, "onitemload", e4i)
    }
    ;
    b4f.iO9F = function(e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.xa3x.g4k(this, e4i);
        this.y4C("doadditem", e4i)
    }
    ;
    b4f.xa3x = function(e4i, q4u) {
        var J4N = e4i.key;
        q4u = this.yM4Q(q4u, J4N);
        if (!!q4u) {
            var eK7D = 0
              , i4m = this.gV8N(J4N);
            if (!e4i.push) {
                eK7D = -1;
                var bf5k = e4i.offset || 0;
                i4m.splice(bf5k, 0, q4u)
            } else if (i4m.loaded) {
                eK7D = 1;
                i4m.push(q4u)
            } else {
                i4m.length++
            }
        }
        var d4h = {
            key: J4N,
            flag: eK7D,
            data: q4u,
            action: "add",
            ext: e4i.ext
        };
        this.y4C("onitemadd", d4h);
        return d4h
    }
    ;
    b4f.Jd7W = function(e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.bjp8h.g4k(this, e4i);
        this.y4C("dodeleteitem", e4i)
    }
    ;
    b4f.bjp8h = function(e4i, bAn2x) {
        var q4u, J4N = e4i.key;
        if (!!bAn2x) {
            q4u = this.eo7h(e4i.id) || null;
            var D4H = e4i.id
              , cvp6j = this.uM2x
              , i4m = this.gV8N(J4N)
              , r4v = k4o.cV6P(i4m, function(hQ8I) {
                return !!hQ8I && hQ8I[cvp6j] == D4H
            });
            if (r4v >= 0)
                i4m.splice(r4v, 1)
        }
        var d4h = {
            key: J4N,
            data: q4u,
            action: "delete",
            ext: e4i.ext
        };
        this.y4C("onitemdelete", d4h);
        return d4h
    }
    ;
    b4f.Us2x = function(e4i) {
        e4i = NEJ.X({}, e4i);
        e4i.onload = this.cvo6i.g4k(this, e4i);
        this.y4C("doupdateitem", e4i)
    }
    ;
    b4f.cvo6i = function(e4i, q4u) {
        var J4N = e4i.key;
        if (!!q4u)
            q4u = this.yM4Q(q4u, J4N);
        var d4h = {
            key: J4N,
            data: q4u,
            action: "update",
            ext: e4i.ext
        };
        this.y4C("onitemupdate", d4h);
        return d4h
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, k4o = c4g("nej.u"), N4R = c4g("nej.ut"), b4f;
    if (!!N4R.biQ8I)
        return;
    N4R.biQ8I = NEJ.C();
    b4f = N4R.biQ8I.O4S(N4R.Pr0x);
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.bkF8x({
            doloadlist: this.Ur2x.g4k(this),
            doloaditem: this.biK8C.g4k(this),
            doadditem: this.bAM2x.g4k(this),
            dodeleteitem: this.Uo2x.g4k(this),
            doupdateitem: this.Un2x.g4k(this),
            dopullrefresh: this.bAU2x.g4k(this)
        })
    }
    ;
    b4f.Ur2x = bo5t;
    b4f.bAU2x = bo5t;
    b4f.biK8C = bo5t;
    b4f.bAM2x = bo5t;
    b4f.Uo2x = bo5t;
    b4f.Un2x = bo5t
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, k4o = c4g("nej.u"), h4l = c4g("nej.v"), w4A = c4g("nej.j"), G4K = c4g("nej.ut"), l4p = c4g("nm.x"), p4t = c4g("nm.d"), b4f, K4O;
    p4t.he8W = NEJ.C();
    b4f = p4t.he8W.O4S(G4K.biQ8I);
    b4f.ch5m = function() {
        var PO0x = location.protocol + "//" + location.host;
        var cvm6g = function(bs5x, j4n) {
            var bu5z = {
                conf: {},
                data: {},
                urls: []
            };
            k4o.bb5g(bs5x, function(J4N, r4v, i4m) {
                var bd5i = p4t.z4D(J4N);
                if (!bd5i)
                    return;
                var bil7e = bBx2x(bd5i.url, j4n[J4N]);
                bu5z.urls.push(bil7e);
                bu5z.conf[bil7e] = bd5i;
                bu5z.data[bil7e] = JSON.stringify(j4n[J4N] == null ? "" : j4n[J4N])
            });
            return bu5z
        };
        var bBx2x = function(W5b, j4n) {
            return W5b.replace(/\{(.*?)\}/gi, function($1, $2) {
                return j4n[$2] || $1
            })
        };
        var bBI3x = function(bd5i, e4i, d4h) {
            h4l.y4C(window, "requesterror", d4h);
            if (!!d4h.stopped)
                return;
            var Jg7Z = bd5i.onerror || e4i.onerror;
            if (k4o.fx7q(Jg7Z)) {
                this.y4C(Jg7Z, d4h, e4i)
            } else {
                (Jg7Z || bo5t).call(this, d4h, e4i)
            }
            var d4h = {
                result: d4h,
                option: e4i
            };
            this.y4C("onerror", d4h);
            if (!d4h.stopped)
                (bd5i.onmessage || bo5t).call(this, d4h.result.code, d4h.result)
        };
        var bBM3x = function(P4T, bd5i, e4i) {
            var o4s = P4T;
            if (k4o.gb8T(bd5i.format)) {
                o4s = bd5i.format.call(this, P4T, e4i)
            }
            return o4s
        };
        var wL3x = function(P4T, bd5i, e4i, tC2x) {
            if (k4o.gb8T(bd5i.beforeload)) {
                bd5i.beforeload.call(this, P4T, e4i, bd5i)
            }
            if (P4T && P4T.code != null && P4T.code != 200) {
                bBI3x.call(this, bd5i, e4i, {
                    key: e4i.key,
                    code: P4T.code,
                    message: P4T.message || "",
                    captchaId: P4T.captchaId,
                    ext: P4T
                });
                return
            }
            var o4s = P4T;
            if (!tC2x) {
                o4s = bBM3x.call(this, P4T, bd5i, e4i)
            } else if (k4o.gb8T(bd5i.format)) {
                var bij7c = [];
                k4o.bb5g(tC2x.urls, function(W5b) {
                    bij7c.push(bBM3x.call(this, P4T[W5b], tC2x.conf[W5b], e4i))
                }, this);
                bij7c.push(e4i);
                o4s = bd5i.format.apply(this, bij7c)
            }
            var to2x = bd5i.onload || e4i.onload
              , bBV3x = bd5i.finaly || e4i.finaly || bo5t;
            if (k4o.fx7q(to2x)) {
                bBV3x.call(this, this.y4C(to2x, o4s), e4i)
            } else {
                bBV3x.call(this, (to2x || bo5t).call(this, o4s), e4i)
            }
        };
        var Ad4h = function(bd5i, e4i, bU5Z) {
            bBI3x.call(this, bd5i, e4i, {
                key: e4i.key,
                code: bU5Z.code || -1,
                message: bU5Z.message || ""
            })
        };
        return function(bd5i, e4i) {
            if (k4o.fx7q(bd5i)) {
                bd5i = p4t.z4D(bd5i)
            }
            delete e4i.value;
            (bd5i.filter || bo5t).call(this, e4i, bd5i);
            var P4T = e4i.value;
            if (!!P4T) {
                wL3x.call(this, P4T, bd5i, e4i);
                return
            }
            var W5b, j4n = e4i.data || Y5d, xB3x = {
                cookie: !0,
                type: bd5i.rtype || "json",
                method: bd5i.type || "POST",
                onerror: Ad4h.g4k(this, bd5i, e4i),
                noescape: bd5i.noescape
            };
            if (k4o.eu7n(bd5i.url)) {
                var tC2x = cvm6g(bd5i.url, j4n);
                W5b = PO0x + "/api/batch";
                xB3x.data = k4o.db6V(tC2x.data);
                xB3x.onload = wL3x.eb7U(this, bd5i, e4i, tC2x);
                xB3x.headers = {
                    "batch-method": "POST"
                };
                delete tC2x.data
            } else {
                var lu9l = bd5i.url.indexOf(":") < 0 ? PO0x : "";
                W5b = bBx2x(lu9l + bd5i.url, j4n);
                xB3x.data = k4o.db6V(e4i.data);
                xB3x.onload = wL3x.eb7U(this, bd5i, e4i)
            }
            if (xB3x.method == "GET")
                xB3x.query = xB3x.data;
            return w4A.bp5u(W5b, xB3x)
        }
    }();
    b4f.Fz6t = function() {
        var gf8X = /^get|list|pull$/i;
        return function(bCk3x, e4i) {
            var J4N = e4i.key
              , bd5i = p4t.z4D(J4N.split("-")[0] + "-" + bCk3x);
            if (gf8X.test(bCk3x) && J4N.indexOf("post-") < 0)
                bd5i.type = "GET";
            this.ch5m(bd5i, e4i)
        }
    }();
    b4f.cxw7p = function(J4N, i4m) {
        var co5t = i4m.length;
        this.bky8q({
            key: J4N,
            offset: 0,
            limit: co5t + 1
        }, {
            list: i4m,
            total: co5t
        })
    }
    ;
    b4f.Ur2x = function(e4i) {
        this.Fz6t("list", e4i)
    }
    ;
    b4f.biK8C = function(e4i) {
        this.Fz6t("get", e4i)
    }
    ;
    b4f.bAU2x = function(e4i) {
        this.Fz6t("pull", e4i)
    }
    ;
    b4f.bAM2x = function(e4i) {
        this.Fz6t("add", e4i)
    }
    ;
    b4f.Uo2x = function(e4i) {
        this.Fz6t("del", e4i)
    }
    ;
    b4f.Un2x = function(e4i) {
        this.Fz6t("update", e4i)
    }
    ;
    b4f.cvk6e = function(q4u) {
        this.yM4Q(q4u)
    }
    ;
    G4K.fu7n.A4E({
        element: window,
        event: "requesterror"
    })
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, h4l = c4g("nej.v"), G4K = c4g("nej.ut"), p4t = c4g("nm.d"), bic7V = {}, b4f, K4O;
    var ti2x = function(o4s, e4i) {
        o4s.conf = e4i.conf;
        return o4s
    };
    p4t.eY7R({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(P4T, e4i) {
                return ti2x({
                    mv: P4T
                }, e4i)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(o4s, e4i) {
                if (!!o4s.songs && o4s.songs.length > 0)
                    o4s.song = o4s.songs[0];
                else
                    o4s.song = bic7V;
                delete o4s.songs;
                return ti2x(o4s, e4i)
            },
            filter: function(e4i) {
                e4i.data.ids = "[" + e4i.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: ti2x
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: ti2x
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(o4s, e4i) {
                o4s.playlist = o4s.result;
                delete o4s.result;
                return ti2x(o4s, e4i)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: ti2x
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: ti2x
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: ti2x
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e4i) {
                var i4m = e4i.data.id.split("-");
                e4i.data.radioId = i4m[0];
                e4i.data.asc = i4m[1] == 2;
                e4i.data.limit = 1e3;
                delete e4i.data.id
            },
            format: function(P4T, e4i) {
                var cvj6d = {
                    id: e4i.data.radioId,
                    programs: P4T.programs
                };
                return ti2x({
                    djradio: cvj6d
                }, e4i)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: ti2x
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            },
            format: function(o4s, e4i) {
                var vY3x = {
                    lyric: "",
                    nolyric: true
                };
                if (o4s.code == 200 && o4s.lrc && o4s.lrc.lyric) {
                    vY3x.lyric = o4s.lrc.lyric;
                    vY3x.nolyric = false
                } else {
                    vY3x.nolyric = true
                }
                return ti2x({
                    lyric: vY3x
                }, e4i)
            }
        }
    });
    p4t.vA3x = NEJ.C();
    b4f = p4t.vA3x.O4S(p4t.he8W);
    b4f.cvf6Z = function(t4x, cP6J) {
        return this.qs1x(this.Uj2x(t4x, cP6J))
    }
    ;
    b4f.PR0x = function(t4x, cP6J, e4i) {
        e4i = e4i || {};
        var j4n = this.qs1x(this.Uj2x(t4x, cP6J));
        if (j4n && (t4x != 13 && t4x != 19 || e4i.conf && e4i.conf.useCache)) {
            this.y4C("onresourceload", t4x, cP6J, j4n, e4i.conf);
            return
        }
        e4i.data = {
            id: cP6J
        };
        e4i.onload = this.cvc6W.g4k(this, t4x, cP6J);
        e4i.onerror = this.cva6U.g4k(this, t4x, cP6J);
        this.ch5m("res-" + this.As4w(t4x) + "-get", e4i)
    }
    ;
    b4f.cvc6W = function(t4x, cP6J, o4s) {
        var j4n = o4s[this.As4w(t4x)];
        this.oT1x(this.Uj2x(t4x, cP6J), j4n);
        this.y4C("onresourceload", t4x, cP6J, j4n, o4s.conf)
    }
    ;
    b4f.cva6U = function(t4x, cP6J, o4s, e4i) {
        if (o4s.code != 404) {
            this.y4C("onresourceerror", t4x, cP6J, o4s.code);
            return
        }
        this.oT1x(this.Uj2x(t4x, cP6J), bic7V);
        this.y4C("onresourceload", t4x, cP6J, bic7V, e4i.conf)
    }
    ;
    b4f.cxz7s = function(t4x, e4i) {
        this.ch5m("res-" + this.As4w(t4x) + "-play", e4i)
    }
    ;
    b4f.Uj2x = function(t4x, cP6J) {
        return "res-" + this.As4w(t4x) + "-" + cP6J
    }
    ;
    b4f.As4w = function(t4x) {
        var bu5z = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bu5z[t4x]
    }
    ;
    p4t.vA3x.Jj7c = function(t4x, cP6J) {
        if (!this.eR7K)
            this.eR7K = p4t.vA3x.A4E({});
        return this.eR7K.cvf6Z(t4x, cP6J)
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), p4t = c4g("nm.d"), bhg7Z = /^[1-9][0-9]*$/, b4f, K4O;
    var LOCAL_LOG_KEY = "local-log";
    p4t.eY7R({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    p4t.hY8Q = NEJ.C();
    b4f = p4t.hY8Q.O4S(p4t.he8W);
    b4f.gm8e = function(V5a, bd5i) {
        if (!V5a || !bd5i)
            return;
        if (k4o.fx7q(bd5i)) {
            try {
                bd5i = JSON.parse(bd5i)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a3x)
                }
            }
        }
        if (!k4o.kW9N(bd5i))
            return;
        this.ch5m("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: V5a,
                    json: bd5i
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + V5a + ", json=" + JSON.stringify(bd5i))
        }
    }
    ;
    b4f.Ue2x = function(nn0x) {
        if (!k4o.eu7n(nn0x))
            return;
        this.ch5m("bi-batch-log", {
            data: {
                logs: JSON.stringify(nn0x)
            }
        })
    }
    ;
    b4f.bDE3x = function(bd5i) {
        if (!bd5i || !bd5i.type || !bd5i.rid)
            return;
        var nf0x = bd5i.type;
        if (bhg7Z.test(nf0x)) {
            nf0x = this.As4w(nf0x)
        }
        if (!nf0x)
            return;
        if (nf0x == "playlist")
            nf0x = "list";
        this.gm8e("search", {
            type: nf0x,
            id: bd5i.rid || null,
            keyword: bd5i.keyword || null
        })
    }
    ;
    b4f.Qa0x = function() {
        var cuX6R = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bd5i) {
            if (!bd5i || !bd5i.type || !bd5i.rid)
                return;
            if (bd5i.play === undefined)
                bd5i.play = true;
            var nf0x = bd5i.type;
            if (bhg7Z.test(nf0x)) {
                nf0x = this.As4w(nf0x)
            }
            if (!nf0x)
                return;
            if (nf0x == "playlist")
                nf0x = "list";
            var P4T = {
                id: bd5i.rid,
                type: nf0x
            };
            if (nf0x == "song" && bd5i.source) {
                P4T.source = this.bEd3x(bd5i.source);
                if (!!bd5i.sourceid)
                    P4T.sourceid = bd5i.sourceid
            }
            this.gm8e(!bd5i.play ? "addto" : "play", P4T);
            if (nf0x == "song" && bd5i.hash && bd5i.hash.match(cuX6R)) {
                this.gm8e(!bd5i.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    b4f.bgF7y = function(D4H, by5D, dP7I, Ce5j) {
        var P4T = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cuV6P = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        P4T.id = D4H;
        P4T.time = Math.round(by5D);
        P4T.end = k4o.fx7q(Ce5j) ? Ce5j : cuV6P[Ce5j] || "";
        if (dP7I && dP7I.fid) {
            P4T.source = this.bEd3x(dP7I.fid);
            P4T.sourceId = dP7I.fdata
        }
        this.gm8e("play", P4T)
    }
    ;
    b4f.bEz3x = function(t4x, cP6J) {
        if (!t4x || !cP6J)
            return;
        if (bhg7Z.test(t4x))
            t4x = this.As4w(t4x);
        if (t4x != "playlist" && t4x != "dj")
            return;
        var bd5i = p4t.z4D("plus-" + t4x + "-count");
        if (!bd5i)
            return !1;
        this.ch5m(bd5i, {
            data: {
                id: cP6J
            }
        });
        var Q5V = this.kB9s("play-hist-" + t4x, []);
        if (k4o.cV6P(Q5V, cP6J) < 0) {
            Q5V.push(cP6J);
            return !0
        }
        return !1
    }
    ;
    b4f.As4w = function(t4x) {
        var bu5z = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return bu5z[t4x]
    }
    ;
    b4f.bEd3x = function(Jn7g) {
        var bu5z = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bu5z[Jn7g]
    }
    ;
    b4f.cuU6O = function(ha8S) {
        var nn0x = this.CY5d(LOCAL_LOG_KEY, []);
        nn0x.unshift(ha8S);
        if (nn0x.length > 200) {
            nn0x.length = 200
        }
        this.vy3x(LOCAL_LOG_KEY, nn0x)
    }
    ;
    b4f.cuR6L = function() {
        return this.Pp0x(LOCAL_LOG_KEY)
    }
    ;
    b4f.ey7r = function(P4T) {
        this.gm8e("play", P4T)
    }
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , bo5t = NEJ.F
      , h4l = c4g("nej.v")
      , w4A = c4g("nej.j")
      , G4K = c4g("nej.ut")
      , a3x = c4g("nej.e")
      , k4o = c4g("nej.u")
      , n4r = c4g("nm.l")
      , l4p = c4g("nm.x")
      , p4t = c4g("nm.d");
    if (!p4t.vA3x)
        return;
    var Q5V = p4t.vA3x.A4E({
        onresourceload: cuP6J
    });
    var yc3x = p4t.hY8Q.fX8P();
    function cuP6J(t4x, cP6J, j4n, bd5i) {
        var i4m = [];
        switch (parseInt(t4x)) {
        case 2:
            i4m = j4n;
            break;
        case 13:
            i4m = j4n.tracks;
            break;
        case 18:
            i4m.push(j4n);
            break;
        case 19:
            i4m = j4n.songs;
            break;
        case 21:
            if (j4n.mp && j4n.mp.fee && j4n.mp.pl <= 0) {
                l4p.bfP7I(j4n.data.id, j4n.mp.fee);
                return
            }
            break
        }
        if (l4p.Jq7j(i4m, true, null, t4x == 19 ? {
            source: "album",
            sourceid: cP6J
        } : null) == 0) {
            return
        }
        l4p.eW7P({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bd5i.message
        })
    }
    function cuN6H(d4h, qR1x, yh3x, eG7z) {
        eG7z = eG7z || {};
        if (d4h.action == "ok") {
            if (yh3x) {
                location.dispatch2("/payfee?songId=" + yh3x)
            } else {
                location.dispatch2("/payfee?fee=" + qR1x || 1)
            }
            yc3x.gm8e("click", {
                type: "tobuyvip",
                name: "box",
                source: eG7z.source || "song",
                sourceid: eG7z.sourceid || yh3x || 0
            })
        } else if (d4h.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + yh3x);
            yc3x.gm8e("click", {
                type: "tobuyone",
                name: "box",
                source: eG7z.source || "song",
                sourceid: eG7z.sourceid || yh3x || 0
            })
        }
    }
    function Qq0x(bC5H) {
        l4p.eW7P({
            clazz: "m-layer-w2",
            bubble: !1,
            message: bC5H,
            btntxt: "知道了"
        })
    }
    function Qt0x(bC5H, P4T) {
        Qq0x((P4T || Y5d).toast || bC5H)
    }
    l4p.in8f = function(bC5H, D4H, t4x, cuM6G, be5j) {
        bC5H = bC5H || "由于版权保护，您所在的地区暂时无法使用。";
        if (cuM6G && be5j && be5j.privilege && be5j.privilege.toast) {
            w4A.bp5u("/api/song/toast", {
                query: {
                    id: be5j.id
                },
                type: "json",
                onload: Qt0x.g4k(this, bC5H),
                onerror: Qt0x.g4k(this, bC5H)
            })
        } else if (D4H && t4x) {
            Q5V.PR0x(t4x, D4H, {
                conf: {
                    message: bC5H,
                    useCache: t4x != 18
                }
            })
        } else {
            Qq0x(bC5H)
        }
    }
    ;
    l4p.sX2x = function(qR1x, yh3x, t4x, eG7z, mf0x) {
        var bP5U, pw1x = "m-popup-info", beL7E = "单首购买", beI7B = "马上去开通", cE6y = "唱片公司要求，当前歌曲须付费使用。", bGB4F = true;
        try {
            bP5U = top.api.feeMessage || {}
        } catch (e) {
            bP5U = {}
        }
        if (qR1x == 1 || qR1x == 8 || qR1x == 16) {
            if (t4x == "song") {
                pw1x = "m-popup-song-buy";
                cE6y = bP5U["vip2"] || cE6y;
                beI7B = bP5U["vip2button"] || "包月购买";
                beL7E = bP5U["vip2link"] || beL7E;
                if (mf0x && mf0x.flag !== undefined) {
                    var bs5x = mf0x.flag.toString(2).split("");
                    if (parseInt(bs5x.pop(), 10) == 1) {
                        bGB4F = false
                    }
                }
            } else {
                cE6y = bP5U["vip"] || cE6y
            }
        } else if (qR1x == 4) {
            cE6y = bP5U["album"] || cE6y;
            beI7B = "立即订购"
        } else {
            cE6y = bP5U["unknow"] || cE6y
        }
        l4p.jH9y({
            clazz: "m-layer-w5",
            html: a3x.bW5b(pw1x, {
                songTxt: beL7E,
                tip: cE6y,
                oktext: beI7B,
                cctext: "以后再说",
                showSongText: bGB4F
            }),
            onaction: cuN6H.eb7U(null, qR1x, yh3x, eG7z)
        })
    }
    ;
    l4p.bGN4R = function(hs8k, hi8a) {
        l4p.gC8u({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(t4x) {
                if (t4x == "ok") {
                    l4p.Vf2x({
                        id: hs8k,
                        type: hi8a
                    })
                }
            }
        })
    }
    ;
    l4p.bfP7I = function(on0x, qR1x) {
        var bP5U, cE6y = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bP5U = top.api.feeMessage || {}
        } catch (e) {
            bP5U = {}
        }
        if (qR1x == 1 || qR1x == 8) {
            cE6y = bP5U["vip"] || cE6y
        } else if (qR1x == 4) {
            cE6y = bP5U["album"] || cE6y
        } else {
            cE6y = bP5U["unknow"] || cE6y
        }
        return l4p.jH9y({
            clazz: "m-layer-w5",
            html: a3x.bW5b("m-popup-info", {
                tip: cE6y,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function(d4h) {
                if (d4h.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + on0x);
                    yc3x.gm8e("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: on0x || 0
                    })
                }
            }
        })
    }
    ;
    l4p.Jq7j = function() {
        function compareFee(cuL6F, cuK6E) {
            var bu5z = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (bu5z[cuL6F] || 0) - (bu5z[cuK6E] || 0)
        }
        return function(i4m, cE6y, sR2x, eG7z) {
            sR2x = sR2x || {};
            var xk3x = []
              , Jz7s = {}
              , bIA4E = 0
              , bIB4F = 0
              , JA7t = null;
            if (!i4m || !i4m.length)
                return xk3x;
            k4o.bb5g(i4m, function(be5j) {
                var eZ7S = l4p.pj1x(be5j);
                if (eZ7S == 0) {
                    xk3x.push(be5j)
                } else if (eZ7S == 10) {
                    if (be5j.privilege) {
                        be5j.fee = be5j.privilege.fee
                    }
                    if (compareFee(be5j.fee, Jz7s.fee) > 0) {
                        Jz7s = be5j
                    }
                } else if (eZ7S == 11) {
                    ++bIA4E;
                    if (!sR2x.play)
                        xk3x.push(be5j)
                } else if (eZ7S == 1e3) {
                    ++bIB4F;
                    if (!sR2x.download)
                        xk3x.push(be5j)
                } else if (eZ7S == 100) {
                    JA7t = be5j
                }
            });
            if (xk3x.length == 0 && cE6y) {
                if (bIA4E == i4m.length) {
                    var su2x = i4m[0].privilege || {};
                    if (su2x.payed) {
                        l4p.in8f("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l4p.sX2x(su2x.fee, null, null, eG7z)
                    }
                } else if (bIB4F == i4m.length) {
                    l4p.in8f("因版权方要求，该歌曲不支持下载")
                } else if (Jz7s.id) {
                    l4p.sX2x(Jz7s.fee, Jz7s.id, null, eG7z, Jz7s.privilege)
                } else {
                    if (JA7t && i4m.length == 1 && JA7t.privilege && JA7t.privilege.st < 0 && JA7t.privilege.toast) {
                        l4p.in8f(null, null, null, true, JA7t)
                    } else {
                        l4p.in8f()
                    }
                }
            }
            return xk3x
        }
    }();
    l4p.pj1x = function(be5j) {
        if (!be5j)
            return 0;
        var eZ7S = be5j.privilege;
        if (be5j.program)
            return 0;
        if (window.GAbroad)
            return 100;
        if (eZ7S) {
            if (eZ7S.st != null && eZ7S.st < 0) {
                return 100
            }
            if (eZ7S.fee > 0 && eZ7S.fee != 8 && eZ7S.payed == 0 && eZ7S.pl <= 0)
                return 10;
            if (eZ7S.fee == 16)
                return 11;
            if ((eZ7S.fee == 0 || eZ7S.payed) && eZ7S.pl > 0 && eZ7S.dl == 0)
                return 1e3;
            if (eZ7S.pl == 0 && eZ7S.dl == 0)
                return 100;
            return 0
        } else {
            var eg7Z = be5j.status != null ? be5j.status : be5j.st != null ? be5j.st : 0;
            if (be5j.status >= 0)
                return 0;
            if (be5j.fee > 0)
                return 10;
            return 100
        }
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, h4l = c4g("nej.v"), a3x = c4g("nej.e"), N4R = c4g("nej.ui"), b4f;
    if (!!N4R.TQ1x)
        return;
    var ip8h = a3x.so2x(".#<uispace>{position:absolute;background:#fff;}");
    N4R.TQ1x = NEJ.C();
    b4f = N4R.TQ1x.O4S(N4R.NC9t);
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.bS5X([[document, "click", this.rB1x.g4k(this)]]);
        this.cuI6C = !!e4i.nostop;
        this.bJH5M = {
            top: e4i.top,
            left: e4i.left
        }
    }
    ;
    b4f.bA5F = function() {
        delete this.yw4A;
        delete this.beb6V;
        delete this.qf1x;
        delete this.bJM5R;
        delete this.TN1x;
        delete this.bJH5M;
        this.bF5K()
    }
    ;
    b4f.bZ5e = function() {
        this.lh9Y = ip8h
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        this.yN4R = this.m4q;
        h4l.s4w(this.m4q, "click", this.cuG6A.g4k(this))
    }
    ;
    b4f.rB1x = function(d4h) {
        if (d4h.button != 2)
            this.br5w()
    }
    ;
    b4f.cuG6A = function(d4h) {
        if (this.cuI6C)
            return;
        h4l.rX1x(d4h);
        var F4J = h4l.U5Z(d4h);
        if (F4J.tagName == "A")
            h4l.ci5n(d4h)
    }
    ;
    b4f.cuF6z = function() {
        var cS6M = /\s+/i;
        return function(mW0x) {
            mW0x = (mW0x || "").trim().toLowerCase().split(cS6M);
            mW0x[0] = mW0x[0] || "bottom";
            mW0x[1] = mW0x[1] || "left";
            this.qf1x = mW0x
        }
    }();
    b4f.cuD6x = function(mW0x) {
        var o4s = {}
          , mr0x = this.beb6V
          , cxA7t = a3x.pb1x()
          , cR6L = this.m4q.offsetWidth
          , cg5l = this.m4q.offsetHeight;
        switch (mW0x[0]) {
        case "top":
            o4s.top = mr0x.top - cg5l;
            o4s.left = mW0x[1] == "right" ? mr0x.left + mr0x.width - cR6L : mr0x.left;
            break;
        case "left":
            o4s.left = mr0x.left - cR6L;
            o4s.top = mW0x[1] == "bottom" ? mr0x.top + mr0x.height - cg5l : mr0x.top;
            break;
        case "right":
            o4s.left = mr0x.left + mr0x.width;
            o4s.top = mW0x[1] == "bottom" ? mr0x.top + mr0x.height - cg5l : mr0x.top;
            break;
        default:
            o4s.top = mr0x.top + mr0x.height;
            o4s.left = mW0x[1] == "right" ? mr0x.left + mr0x.width - cR6L : mr0x.left;
            break
        }
        return o4s
    }
    ;
    b4f.Iw7p = function() {
        if (!this.bJM5R) {
            this.ge8W(this.bJH5M);
            return
        }
        if (!!this.TN1x) {
            this.ge8W(this.yw4A);
            return
        }
        if (!!this.beb6V)
            this.ge8W(this.cuD6x(this.qf1x))
    }
    ;
    b4f.cuA6u = function(F4J, dm6g, d4h) {
        dm6g = dm6g || Y5d;
        var bLB5G = a3x.pb1x()
          , cT6N = h4l.jS9J(d4h) + (dm6g.left || 0)
          , gP8H = h4l.mh0x(d4h) + (dm6g.top || 0)
          , cR6L = F4J.offsetWidth + (dm6g.right || 0)
          , cg5l = F4J.offsetHeight + (dm6g.bottom || 0)
          , JD7w = bLB5G.scrollWidth
          , bdF6z = bLB5G.scrollHeight
          , bdA6u = cT6N + cR6L
          , bdv6p = gP8H + cg5l;
        switch (this.qf1x[0]) {
        case "top":
            gP8H = bdv6p > bdF6z ? gP8H - cg5l : gP8H;
            if (this.qf1x[1] == "right") {
                cT6N = cT6N - cR6L < 0 ? 0 : cT6N - cR6L
            } else {
                cT6N = bdA6u > JD7w ? JD7w - cR6L : cT6N
            }
            break;
        case "left":
            cT6N = bdA6u > JD7w ? JD7w - cR6L : cT6N;
            if (this.qf1x[1] == "top") {
                gP8H = bdv6p > bdF6z ? gP8H - cg5l : gP8H
            } else {
                gP8H = gP8H - cg5l < 0 ? gP8H : gP8H - cg5l
            }
            break;
        case "right":
            cT6N = cT6N - cR6L < 0 ? 0 : cT6N - cR6L;
            if (this.qf1x[1] == "top") {
                gP8H = bdv6p > bdF6z ? gP8H - cg5l : gP8H
            } else {
                gP8H = gP8H - cg5l < 0 ? gP8H : gP8H - cg5l
            }
            break;
        default:
            gP8H = gP8H - cg5l < 0 ? gP8H : gP8H - cg5l;
            if (this.qf1x[1] == "left") {
                cT6N = bdA6u > JD7w ? JD7w - cR6L : cT6N
            } else {
                cT6N = cT6N - cR6L < 0 ? 0 : cT6N - cR6L
            }
            break
        }
        return {
            top: gP8H,
            left: cT6N
        }
    }
    ;
    b4f.bdt6n = function() {
        var cuz6t = function(F4J, dm6g) {
            F4J = a3x.z4D(F4J);
            if (!F4J)
                return;
            dm6g = dm6g || Y5d;
            var bf5k = a3x.hM8E(F4J);
            return {
                top: bf5k.y - (dm6g.top || 0),
                left: bf5k.x - (dm6g.left || 0),
                width: F4J.offsetWidth + (dm6g.right || 0),
                height: F4J.offsetHeight + (dm6g.bottom || 0)
            }
        };
        return function(e4i) {
            e4i = e4i || Y5d;
            this.TN1x = e4i.event;
            this.cuF6z(e4i.align);
            if (!!this.TN1x)
                this.yw4A = this.cuA6u(e4i.target, e4i.delta, this.TN1x);
            this.beb6V = cuz6t(e4i.target, e4i.delta);
            this.bJM5R = !!e4i.fitable;
            this.M4Q();
            return this
        }
    }()
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), N4R = c4g("nej.ui"), b4f, K4O;
    if (!!N4R.AQ4U)
        return;
    N4R.AQ4U = NEJ.C();
    b4f = N4R.AQ4U.O4S(N4R.VW2x);
    K4O = N4R.AQ4U.cj5o;
    N4R.AQ4U.cxB7u = function() {
        var cux6r = function(d4h, D4H, fn7g, jx9o, QN0x) {
            var cs5x, J4N = D4H + "-i", Q5V = fn7g.yf3x, bME5J = !!jx9o.noclear, bMF5K = !!jx9o.toggled;
            if (k4o.gb8T(jx9o.onbeforeclick)) {
                var TG1x = jx9o.noclear
                  , cuw6q = jx9o.toggled;
                try {
                    jx9o.onbeforeclick(jx9o)
                } catch (e) {}
                bME5J = !!jx9o.noclear;
                bMF5K = !!jx9o.toggled;
                jx9o.toggled = cuw6q;
                jx9o.noclear = TG1x
            }
            var Cq5v = Q5V[J4N];
            if (bMF5K && !!Cq5v) {
                Cq5v.br5w();
                return
            }
            h4l.bh5m(d4h);
            if (!bME5J) {
                h4l.y4C(document, "click");
                cs5x = fn7g.A4E(jx9o)
            } else {
                cs5x = fn7g.ceN1x(jx9o, !0)
            }
            Q5V[J4N] = cs5x;
            cs5x.vk2x("onbeforerecycle", function() {
                delete Q5V[J4N]
            });
            cs5x.bdt6n(QN0x)
        };
        return function(f4j, e4i) {
            f4j = a3x.z4D(f4j);
            if (!f4j)
                return this;
            if (!this.yf3x)
                this.yf3x = {};
            var D4H = a3x.la9R(f4j);
            if (!!this.yf3x[D4H])
                return this;
            e4i = NEJ.X({}, e4i);
            var QN0x = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, e4i);
            QN0x.target = D4H;
            e4i.destroyable = !0;
            if (!e4i.fixed) {
                QN0x.fitable = !0;
                e4i.parent = document.body
            }
            this.yf3x[D4H] = [D4H, e4i.event || "click", cux6r.eb7U(null, D4H, this, e4i, QN0x)];
            h4l.s4w.apply(h4l, this.yf3x[D4H]);
            return this
        }
    }();
    N4R.AQ4U.cxC7v = function(f4j) {
        if (!this.yf3x)
            return this;
        var D4H = a3x.la9R(f4j)
          , d4h = this.yf3x[D4H];
        if (!d4h)
            return this;
        delete this.yf3x[D4H];
        h4l.mt0x.apply(h4l, d4h);
        var cs5x = this.yf3x[D4H + "-i"];
        if (!!cs5x)
            cs5x.br5w();
        return this
    }
    ;
    b4f.bdf6Z = function() {
        return N4R.TQ1x.A4E(this.bT5Y)
    }
    ;
    b4f.NJ9A = function() {
        K4O.NJ9A.apply(this, arguments);
        this.bT5Y.top = null;
        this.bT5Y.left = null;
        this.bT5Y.nostop = !1
    }
    ;
    b4f.bdt6n = function(e4i) {
        if (!!this.nK0x)
            this.nK0x.bdt6n(e4i);
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P, ba5f = c4g("nej.ui"), n4r = c4g("nm.l"), b4f, K4O;
    n4r.bcH6B = NEJ.C();
    b4f = n4r.bcH6B.O4S(ba5f.AQ4U);
    b4f.bj5o = function(e4i) {
        e4i.nohack = true;
        this.bk5p(e4i)
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), n4r = c4g("nm.l"), b4f, K4O;
    n4r.X5c = NEJ.C();
    b4f = n4r.X5c.O4S(n4r.bcH6B);
    K4O = n4r.X5c.cj5o;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.en7g = e4i.type || 1
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        this.m4q = a3x.nl0x(this.cut6n());
        var i4m = a3x.cU6O(this.m4q);
        this.pq1x = i4m[0];
        this.ck5p = i4m[1]
    }
    ;
    b4f.cut6n = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    }
    ;
    b4f.Iw7p = function() {
        var C4G = {}
          , ce5j = this.m4q.style
          , iS9J = a3x.pb1x()
          , mT0x = {
            left: iS9J.scrollLeft,
            top: iS9J.scrollTop
        }
          , dm6g = {
            left: iS9J.clientWidth - this.m4q.offsetWidth,
            top: iS9J.clientHeight - this.m4q.offsetHeight
        };
        C4G.top = Math.max(0, mT0x.top + dm6g.top / 2);
        C4G.left = Math.max(0, mT0x.left + dm6g.left / 2);
        this.nK0x.ge8W(C4G)
    }
    ;
    b4f.M4Q = function(e4i) {
        K4O.M4Q.call(this);
        this.Iw7p();
        this.en7g == 1 ? a3x.eT7M(this.pq1x, "u-icn-32", "u-icn-31") : a3x.eT7M(this.pq1x, "u-icn-31", "u-icn-32");
        this.ck5p.innerHTML = e4i.tip || ""
    }
    ;
    window.g_showTipCard = n4r.X5c.M4Q = function() {
        var eD7w;
        return function(e4i) {
            clearTimeout(eD7w);
            if (e4i.parent === undefined)
                e4i.parent = document.body;
            if (e4i.autoclose === undefined)
                e4i.autoclose = true;
            e4i.clazz = "m-sysmsg";
            !!this.eR7K && this.eR7K.S5X();
            this.eR7K = this.A4E(e4i);
            this.eR7K.M4Q(e4i);
            if (e4i.autoclose)
                eD7w = setTimeout(this.br5w.g4k(this), 2e3)
        }
        .g4k(n4r.X5c)
    }();
    n4r.X5c.br5w = function() {
        !!this.eR7K && this.eR7K.br5w()
    }
}
)();
(function() {
    var c4g = NEJ.P
      , w4A = c4g("nej.j")
      , k4o = c4g("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        w4A.bp5u = w4A.bp5u.ek7d(function(d4h) {
            e4i = d4h.args[1];
            e4i.query = e4i.query || {};
            if (k4o.fx7q(e4i.query))
                e4i.query = k4o.hx8p(e4i.query);
            e4i.query.ref = "mail"
        })
    }
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, fh7a = NEJ.R, G4K = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), w4A = c4g("nej.j"), p4t = c4g("nm.d"), n4r = c4g("nm.l"), J4N = "playlist-tracks_", b4f;
    p4t.eY7R({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(P4T, e4i) {
                this.cus6m(P4T.playlist);
                return {
                    total: 0,
                    list: fh7a
                }
            },
            onerror: function() {
                this.y4C("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(P4T, e4i) {
                var mA0x = P4T.playlist;
                mA0x.creator = GUser;
                mA0x.isHost = !0;
                mA0x.typeFlag = "playlist";
                return mA0x
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.ht8l, "listchange", d4h)
            },
            onmessage: function() {
                var mb0x = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cd5i) {
                    n4r.X5c.M4Q({
                        tip: mb0x[cd5i] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e4i) {
                e4i.id = e4i.data.pid
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.ht8l, "listchange", d4h)
            },
            onmessage: function() {
                var mb0x = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cd5i) {
                    n4r.X5c.M4Q({
                        tip: mb0x[cd5i] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e4i) {
                var eG7z = e4i.ext || {};
                e4i.ext = NEJ.X(eG7z, e4i.data);
                e4i.data = {
                    id: e4i.ext.id
                }
            },
            format: function(P4T, e4i) {
                n4r.X5c.M4Q({
                    tip: "收藏成功" + (P4T.point > 0 ? ' 获得<em class="s-fc6">' + P4T.point + "积分</em>" : "")
                });
                var q4u = e4i.ext;
                q4u.subscribedCount++;
                return q4u
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.cur6l, "listchange", d4h);
                h4l.y4C(p4t.cur6l, "itemchange", {
                    attr: "subscribedCount",
                    data: d4h.data
                })
            },
            onmessage: function() {
                var mb0x = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function(cd5i) {
                    n4r.X5c.M4Q({
                        type: 2,
                        tip: mb0x[cd5i] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e4i) {
                e4i.id = e4i.data.id = e4i.data.pid
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.ht8l, "listchange", d4h)
            },
            onmessage: function() {
                var mb0x = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function(cd5i) {
                    n4r.X5c.M4Q({
                        tip: mb0x[cd5i],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e4i) {
                var j4n = e4i.data
                  , TD1x = {};
                TD1x["playlist-update-name"] = {
                    id: j4n.id,
                    name: j4n.name
                };
                TD1x["playlist-update-tag"] = {
                    id: j4n.id,
                    tags: j4n.tags.join(";")
                };
                TD1x["playlist-update-desc"] = {
                    id: j4n.id,
                    desc: j4n.description
                };
                e4i.data = TD1x;
                e4i.ext = j4n
            },
            format: function(T5Y, pt1x, QS0x, e4i) {
                if (T5Y.code == 200 && pt1x.code == 200 && QS0x.code == 200) {
                    e4i.ext.allSuccess = true;
                    n4r.X5c.M4Q({
                        tip: "保存成功"
                    })
                } else if (T5Y.code == 407 || pt1x.code == 407 || QS0x.code == 407) {
                    e4i.ext.allSuccess = false;
                    n4r.X5c.M4Q({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    e4i.ext.allSuccess = false;
                    n4r.X5c.M4Q({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.eo7h(e4i.ext.id)
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.ht8l, "listchange", d4h)
            },
            onmessage: function(cd5i) {
                n4r.X5c.M4Q({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(P4T, e4i) {
                var q4u = this.eo7h(e4i.ext.id);
                if (P4T.code == 200)
                    q4u.name = e4i.ext.name;
                return P4T
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(P4T, e4i) {
                var q4u = this.eo7h(e4i.ext.id);
                if (P4T.code == 200)
                    q4u.tags = e4i.ext.tags;
                return P4T
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(P4T, e4i) {
                var q4u = this.eo7h(e4i.ext.id);
                if (P4T.code == 200)
                    q4u.description = e4i.ext.description;
                return P4T
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e4i) {
                e4i.url = e4i.data.url;
                delete e4i.data.url
            },
            format: function(P4T, e4i) {
                n4r.X5c.M4Q({
                    tip: "保存成功"
                });
                var q4u = this.eo7h(e4i.data.id);
                q4u.coverImgUrl = e4i.url;
                e4i.ext = q4u;
                return q4u
            },
            onmessage: function(cd5i) {
                n4r.X5c.M4Q({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.ht8l, "itemchange", {
                    attr: "coverImgUrl",
                    data: e4i.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(P4T, e4i) {
                var mA0x = this.eo7h(e4i.data.id);
                if (!mA0x)
                    return;
                mA0x.playCount++;
                h4l.y4C(p4t.ht8l, "itemchange", {
                    attr: "playcount",
                    data: mA0x
                })
            }
        }
    });
    p4t.ht8l = NEJ.C();
    b4f = p4t.ht8l.O4S(p4t.he8W);
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.bPJ6D = function() {
        var cY6S = GUser.userId;
        this.kG9x({
            limit: 1001,
            key: "playlist_my-" + cY6S,
            data: {
                offset: 0,
                limit: 1001,
                uid: cY6S
            }
        })
    }
    ;
    b4f.cus6m = function(i4m) {
        var cY6S = GUser.userId
          , ig8Y = []
          , bQg6a = [];
        k4o.bb5g(i4m, function(q4u) {
            q4u.typeFlag = "playlist";
            if (q4u.creator && q4u.creator.userId == cY6S) {
                if (q4u.specialType == 5)
                    q4u.name = "我喜欢的音乐";
                q4u.isHost = !0;
                ig8Y.push(q4u)
            } else {
                bQg6a.push(q4u)
            }
        });
        this.uc2x("playlist_new-" + cY6S, ig8Y);
        this.uc2x("playlist_fav-" + cY6S, bQg6a)
    }
    ;
    b4f.cuq6k = function(j4n) {
        this.ch5m("playlist-update-cover", {
            data: j4n
        })
    }
    ;
    b4f.cxD7w = function() {
        var QT0x = this.cun6h.z4D("host-plist");
        if (QT0x.length == 0) {
            return
        }
        if (QT0x.length == 1 && QT0x[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = QT0x.length; i < len; i++) {
            var q4u = QT0x[i];
            if (q4u.trackCount > 0)
                return q4u.id
        }
        return this.cun6h.z4D("host-plist")[0].id
    }
    ;
    b4f.cum6g = function(D4H) {
        if (GUser && GUser.userId > 0) {
            this.ch5m("playlist-upcount", {
                data: {
                    id: D4H
                }
            })
        }
    }
    ;
    b4f.EH6B = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    }
    ;
    b4f.cxE7x = function() {
        return GUser.userId
    }
    ;
    b4f.bcn6h = function(q4u) {
        if (q4u.userId == GUser.userId && q4u.specialType == 5)
            q4u.name = "我喜欢的音乐";
        h4l.y4C(this.constructor, "itemchange", {
            data: this.yM4Q(q4u)
        });
        return q4u
    }
    ;
    G4K.fu7n.A4E({
        element: p4t.ht8l,
        event: ["listchange", "playcountchange", "itemchange"]
    })
}
)();
(function() {
    var c4g = NEJ.P, fh7a = NEJ.R, bo5t = NEJ.F, Y5d = NEJ.O, G4K = c4g("nej.ut"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), l4p = c4g("nm.x"), p4t = c4g("nm.d"), n4r = c4g("nm.l"), b4f, K4O;
    p4t.eY7R({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(P4T) {
                return P4T.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e4i) {
                e4i.data.limit = 1e3;
                delete e4i.data.id
            },
            format: function(P4T, e4i) {
                var buo1x = []
                  , ou0x = P4T.programs;
                if (ou0x) {
                    for (var i = 0, l = ou0x.length; i < l; i++) {
                        if (ou0x[i].programFeeType < 10 || ou0x[i].buyed) {
                            buo1x.push(ou0x[i])
                        }
                    }
                }
                return buo1x
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(P4T, e4i) {
                return P4T.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e4i) {
                e4i.ext = e4i.data;
                e4i.data = {
                    id: e4i.ext.id
                };
                e4i.id = e4i.data.id
            },
            format: function(P4T, e4i) {
                n4r.X5c.M4Q({
                    tip: "收藏成功"
                });
                var q4u = e4i.ext;
                q4u.subscribedCount++;
                q4u.subscribed = !0;
                return q4u
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.py1x, "listchange", d4h)
            },
            onmessage: function() {
                var mb0x = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function(cd5i) {
                    n4r.X5c.M4Q({
                        type: 2,
                        tip: mb0x[cd5i] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.py1x, "listchange", d4h)
            },
            onmessage: function() {
                var mb0x = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function(cd5i) {
                    l4p.bcl6f({
                        txt: mb0x[cd5i] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e4i) {
                var q4u = this.eo7h(e4i.data.id) || Y5d;
                e4i.ext = (q4u.listenerCount || 0) + 1
            },
            format: function(P4T, e4i) {
                var q4u = this.eo7h(e4i.data.id);
                if (!!q4u) {
                    q4u.listenerCount = Math.max(e4i.ext, q4u.listenerCount || 0)
                }
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.py1x, "itemchange", {
                    attr: "playCount",
                    data: this.eo7h(e4i.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            },
            format: function(P4T, e4i) {
                var q4u = e4i.ext.data || this.eo7h(e4i.id);
                q4u.liked = true;
                q4u.likedCount++;
                e4i.ext.data = q4u;
                try {
                    top.player.setLike(q4u)
                } catch (e) {}
                return q4u
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.py1x, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e4i) {
                e4i.data = {
                    threadId: "A_DJ_1_" + e4i.id
                }
            },
            format: function(P4T, e4i) {
                var q4u = e4i.ext.data || this.eo7h(e4i.id);
                q4u.liked = false;
                q4u.likedCount--;
                e4i.ext.data = q4u;
                try {
                    top.player.setLike(q4u)
                } catch (e) {}
                return q4u
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.py1x, "itemchange", {
                    attr: "likedCount",
                    data: e4i.ext.data
                })
            }
        }
    });
    p4t.py1x = NEJ.C();
    b4f = p4t.py1x.O4S(p4t.he8W);
    b4f.cxF7y = function() {
        var cY6S = GUser.userId;
        this.kG9x({
            limit: 1001,
            key: "program_fav-" + cY6S,
            data: {
                offset: 0,
                limit: 1e3,
                uid: cY6S
            }
        })
    }
    ;
    b4f.cxG7z = function(cO6I) {
        var ph1x = cO6I[this.uM2x];
        l4p.cui6c(4, function(Q5V) {
            Q5V.uc2x("track_program-" + ph1x, cO6I.songs)
        });
        delete cO6I.songs;
        var bI5N = cO6I.mainSong;
        l4p.cui6c(4, function(Q5V) {
            Q5V.uc2x("track_program_main-" + ph1x, !bI5N ? [] : [bI5N])
        });
        cO6I.mainSong = (bI5N || Y5d).id
    }
    ;
    b4f.cxH7A = function(D4H) {
        var cO6I = this.eo7h(D4H)
          , cY6S = localCache.UP2x("host.profile.userId");
        return !!cO6I && cO6I.dj.userId == cY6S
    }
    ;
    b4f.cxI7B = function(D4H) {
        return !1
    }
    ;
    b4f.bcn6h = function(q4u) {
        h4l.y4C(this.constructor, "itemchange", {
            attr: "detail",
            data: this.yM4Q(q4u)
        });
        return q4u
    }
    ;
    b4f.cum6g = function(D4H) {
        this.ch5m("program-update-count", {
            data: {
                id: D4H
            }
        })
    }
    ;
    l4p.buY1x = function(e4i) {
        var Q5V = p4t.py1x.A4E({
            onitemadd: function() {
                (e4i.onsuccess || bo5t)()
            },
            onerror: function() {
                (e4i.onerror || bo5t)()
            }
        });
        if (e4i.data.liked) {
            Q5V.QZ0x(e4i.data)
        } else {
            Q5V.xA3x(e4i.data)
        }
    }
    ;
    b4f.xA3x = function(cO6I) {
        if (!l4p.hk8c())
            return;
        var cr5w = {
            ext: {}
        };
        if (k4o.kW9N(cO6I)) {
            cr5w.id = cO6I.id;
            cr5w.ext.data = cO6I
        } else {
            cr5w.id = cO6I
        }
        this.ch5m("program-like", cr5w)
    }
    ;
    b4f.QZ0x = function(cO6I) {
        if (!l4p.hk8c())
            return;
        var cr5w = {
            ext: {}
        };
        if (k4o.kW9N(cO6I)) {
            cr5w.id = cO6I.id;
            cr5w.ext.data = cO6I
        } else {
            cr5w.id = cO6I
        }
        this.ch5m("program-unlike", cr5w)
    }
    ;
    G4K.fu7n.A4E({
        element: p4t.py1x,
        event: ["listchange", "itemchange"]
    })
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, fh7a = NEJ.R, G4K = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), w4A = c4g("nej.j"), p4t = c4g("nm.d"), n4r = c4g("nm.l"), l4p = c4g("nm.x"), J4N = "playlist-tracks_", l4p = c4g("nm.x"), b4f;
    p4t.eY7R({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e4i) {
                e4i.data.c = JSON.stringify([{
                    id: e4i.data.id
                }])
            },
            format: function(P4T, e4i) {
                var be5j = l4p.Fn6h(P4T.songs[0]);
                be5j.privilege = P4T.privileges[0];
                return be5j
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e4i) {
                e4i.data.n = 1e3
            },
            format: function(P4T, e4i) {
                var gR8J = [];
                this.rS1x.bcn6h(P4T.playlist);
                k4o.bb5g(P4T.playlist.tracks, function(bI5N, r4v) {
                    var bvM1x = l4p.Fn6h(bI5N);
                    bvM1x.privilege = P4T.privileges[r4v];
                    gR8J.push(bvM1x)
                }, this);
                return gR8J
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(P4T, e4i) {
                var gR8J = [];
                k4o.bb5g(P4T.songs, function(be5j) {
                    gR8J.push(l4p.Fn6h(be5j))
                });
                return gR8J
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e4i) {
                var bu5z = {}
                  , j4n = e4i.data
                  , cud6X = this.gV8N(e4i.key) || [];
                Fy6s = [];
                k4o.bb5g(cud6X, function(bI5N) {
                    var D4H = k4o.kW9N(bI5N) ? bI5N.id : bI5N;
                    bu5z[D4H] = true
                });
                e4i.ext = [];
                k4o.bb5g(j4n.tracks, function(bI5N) {
                    var D4H = k4o.kW9N(bI5N) ? bI5N.id : bI5N;
                    if (!bu5z[D4H]) {
                        Fy6s.push(D4H);
                        bu5z[D4H] = true;
                        e4i.ext.push(bI5N)
                    }
                });
                j4n.trackIds = JSON.stringify(Fy6s);
                j4n.op = "add";
                if (!Fy6s.length) {
                    e4i.value = {
                        code: 502
                    }
                }
            },
            format: function(P4T, e4i) {
                n4r.X5c.M4Q({
                    tip: "已添加至歌单"
                });
                var mA0x = this.rS1x.eo7h(e4i.data.pid);
                if (!!P4T.coverImgUrl)
                    mA0x.coverImgUrl = P4T.coverImgUrl;
                k4o.mq0x(e4i.ext, function(bI5N) {
                    this.xa3x(e4i, k4o.kW9N(bI5N) ? bI5N : null);
                    if (!!mA0x)
                        mA0x.trackCount++
                }, this);
                h4l.y4C(p4t.ht8l, "itemchange", {
                    data: mA0x || {},
                    cmd: "add"
                });
                this.y4C("onaddsuccess");
                return null
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.vv3x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                });
                var ph1x = e4i.data.pid
                  , co5t = this.jp9g(e4i.key)
            },
            onmessage: function() {
                var mb0x = {
                    502: "歌曲已存在！",
                    505: "歌单已满！"
                };
                return function(cd5i) {
                    setTimeout(function() {
                        n4r.X5c.M4Q({
                            tip: mb0x[cd5i] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e4i) {
                var j4n = e4i.data;
                e4i.ext = j4n.trackIds;
                j4n.trackIds = JSON.stringify(j4n.trackIds);
                j4n.op = "del"
            },
            format: function(P4T, e4i) {
                var mA0x = this.rS1x.eo7h(e4i.data.pid);
                k4o.bb5g(e4i.ext, function(D4H) {
                    this.bjp8h({
                        id: D4H,
                        key: "track_playlist-" + e4i.data.pid
                    }, !0);
                    if (!!mA0x)
                        mA0x.trackCount = Math.max(0, mA0x.trackCount - 1)
                }, this);
                h4l.y4C(p4t.ht8l, "itemchange", {
                    data: mA0x || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function(d4h, e4i) {
                h4l.y4C(p4t.vv3x, "listchange", {
                    key: e4i.key,
                    action: "refresh"
                })
            },
            onmessage: function(cd5i) {
                l4p.bcl6f({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(P4T, e4i) {
                return this.bwd1x.bcn6h(P4T.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(P4T, e4i) {
                var i4m = [];
                if (e4i.data.type == -1) {
                    if (P4T.weekData && P4T.weekData.length) {
                        e4i.data.type = 1
                    } else {
                        e4i.data.type = 0
                    }
                }
                if (e4i.data.type == 1) {
                    i4m = this.bwf1x(P4T.weekData)
                } else {
                    i4m = this.bwf1x(P4T.allData)
                }
                return i4m
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(P4T, e4i) {
                var nn0x = []
                  , i4m = P4T.recommend || [];
                k4o.bb5g(i4m, function(be5j, r4v) {
                    nn0x.push({
                        action: "recommendimpress",
                        json: {
                            alg: be5j.alg,
                            scene: "user-song",
                            position: r4v,
                            id: be5j.id
                        }
                    })
                });
                this.ky9p.Ue2x(nn0x);
                e4i.limit = i4m.length;
                return i4m
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e4i) {
                e4i.data.lv = 0;
                e4i.data.tv = 0
            },
            format: function(o4s, e4i) {
                return o4s
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    p4t.vv3x = NEJ.C();
    b4f = p4t.vv3x.O4S(p4t.he8W);
    b4f.cq5v = function() {
        this.cu5z();
        this.rS1x = p4t.ht8l.A4E();
        this.bwd1x = p4t.py1x.A4E();
        this.ky9p = p4t.hY8Q.A4E()
    }
    ;
    b4f.bwf1x = function(i4m) {
        var o4s = []
          , fl7e = 0;
        k4o.bb5g(i4m, function(q4u, r4v) {
            var be5j = l4p.Fn6h(q4u.song);
            if (r4v == 0) {
                fl7e = q4u.score
            }
            be5j.max = fl7e;
            be5j.playCount = q4u.playCount;
            be5j.score = q4u.score;
            o4s.push(be5j)
        });
        return o4s
    }
    ;
    G4K.fu7n.A4E({
        element: p4t.vv3x,
        event: ["listchange"]
    })
}
)();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f)
                return f;
            if (0 != f.length % 2)
                throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d
      , d = (new J).d
      , e = (new J).d
      , f = (new J).d
      , g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")]
          , J = [g("YPU7UcUUUlYkU0VkUU")]
          , b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")]
          , c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")]
          , Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b)
                        return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++)
                        f.push(Y(b[e], l++));
                    return f
                }
                function f(b) {
                    if (null == b)
                        return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }
                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15])
                        return za(L);
                    if (h.length >= L) {
                        var c = a[15]
                          , l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L)
                                throw Error(b[134]);
                            for (var d = a[15]; d < L; d++)
                                l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++)
                        c[l] = h[l % h.length];
                    return c
                }
                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++)
                            c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15])
                        h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++)
                            l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }
                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]], g = b[74], e = [];
                    if (l == a[541])
                        l = h[c],
                        d = a[15],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(g),
                        e.push(g);
                    else if (l == a[16])
                        l = h[c],
                        d = h[c + a[541]],
                        h = a[15],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                        e.push(g);
                    else if (l == a[19])
                        l = h[c],
                        d = h[c + a[541]],
                        h = h[c + a[16]],
                        e.push(f[l >>> a[16] & a[153]]),
                        e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                        e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                        e.push(f[h & a[153]]);
                    else
                        throw Error(b[111]);
                    return e.join(b[0])
                }
                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++)
                        c[l] = a[15];
                    return c
                }
                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l)
                            throw Error(b[131]);
                        if (h.length < f)
                            throw Error(b[134]);
                        for (var e = a[15]; e < f; e++)
                            l[d + e] = h[c + e]
                    }
                }
                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }
                function ma(h) {
                    if (null == h || void 0 == h)
                        return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l)
                                c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else
                                throw Error(b[146]);
                        else
                            c.push(h.charCodeAt(d));
                    return c
                }
                function Na(b) {
                    if (null == b || b.length == a[15])
                        return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23]
                          , g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }
                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }
                function na(b, c) {
                    if (null == b || null == c || b.length != c.length)
                        return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++)
                        d[f] = Y(b[f], c[f]);
                    return d
                }
                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }
                function Oa(a, b) {
                    return x(a + b)
                }
                function x(c) {
                    if (c < a[290])
                        return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282])
                        return c;
                    if (c > a[282])
                        return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }
                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++)
                            try {
                                var g = h[e];
                                l()(g) && f.push(g)
                            } catch (k) {}
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a,
                            g.appendChild(k),
                            c.height = k.offsetHeight,
                            c.width = k.offsetWidth,
                            g[b[307]](k),
                            c
                        }
                        var d = [c[21], c[141], B[6]]
                          , l = []
                          , f = c[139]
                          , e = b[327]
                          , g = C[b[258]]
                          , k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++)
                            l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f])
                                  , g = l[f];
                                if (e.height !== g.height || e.width !== g.width)
                                    return !0
                            }
                            return !1
                        }
                    }
                    function f() {
                        var a = null
                          , h = null
                          , d = [];
                        try {
                            h = C[b[167]](c[79]),
                            a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {}
                        if (!a)
                            return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {}
                        try {
                            d.push(e(a, h))
                        } catch (k) {}
                        return d.join(b[56])
                    }
                    function e(h, d) {
                        try {
                            var f = c[76]
                              , l = b[240]
                              , g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]]()
                              , X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l),
                            h[b[341]](la),
                            h[b[177]](t, X),
                            h[b[177]](t, la),
                            h[c[45]](t),
                            h[b[309]](t),
                            t.n = h[c[92]](t, b[205]),
                            t.m = h[c[62]](t, c[29]),
                            h[c[74]](t.o),
                            h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                            h[J[0]](t.m, a[541], a[541]),
                            h[b[139]](h[b[259]], a[15], g.l),
                            M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155])
                          , d = []
                          , f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]])
                            return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++)
                            try {
                                C[b[258]].appendChild(h),
                                h.style.color = f[l],
                                d.push(f[l]),
                                d.push(window[c[154]](h).getPropertyValue(c[36])),
                                C[b[258]][b[307]](h)
                            } catch (e) {
                                d.push(b[349])
                            }
                        return d.join(b[54])
                    }
                    function k() {
                        try {
                            var h = C[b[167]](c[79])
                              , d = h[B[7]](b[354])
                              , f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]])
                            return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]]
                          , d = []
                          , f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a])
                                return b[0];
                            a = y[b[4]][a];
                            if (!a)
                                return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a),
                                a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a)
                            return c;
                        if (I && a.map === I)
                            return a.map(b, h);
                        E(a, function(a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z)
                                b.forEach(h, void 0);
                            else if (b.length === +b.length)
                                for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++)
                                    ;
                            else
                                for (c in b)
                                    if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {})
                                        break
                    }
                    var z = Array.prototype.forEach
                      , I = Array.prototype.map
                      , n = {
                        e: M,
                        j: !0,
                        i: !0,
                        h: !0,
                        b: !0,
                        a: !0
                    };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b),
                    null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = []
                          , l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i)
                                try {
                                    var u = C[b[167]](c[79]);
                                    e = !(!u[B[7]] || !u[B[7]](b[354]))
                                } catch (r) {
                                    e = !1
                                }
                            if (e)
                                try {
                                    h.push(k()),
                                    n.b && h.push(f())
                                } catch (E) {
                                    h.push(b[59])
                                }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]],
                            typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))),
                        u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))),
                        u.push(M(l.join(c[152]))));
                        return u
                    }
                }
                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f; )
                        k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74],
                        ++m,
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k,
                        e = e << a[50] | e >>> a[64],
                        e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405],
                        e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                    case a[19]:
                        k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                    case a[16]:
                        k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                    case a[541]:
                        k ^= h.charCodeAt(m) & a[299],
                        k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                        k = k << a[56] | k >>> a[60],
                        k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                        e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++)
                            try {
                                var q = parseInt(B.charAt(z) + b[0])
                                  , p = q || q === a[15] ? p + q : p + a[541];
                                E++
                            } catch (n) {
                                p += a[541],
                                E++
                            }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++)
                            try {
                                var v = parseInt(G.charAt(F) + b[0]);
                                v || v === a[15] ? v < C ? (D++,
                                w += v) : (u++,
                                H += v) : (u++,
                                H += C)
                            } catch (A) {
                                u++,
                                H += C
                            }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [],
                        d.push(h),
                        d.push(U(N, b[35]).join(b[0])),
                        d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }
                function ba(h, c) {
                    if (h < a[15] || h >= a[43])
                        throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++)
                        e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }
                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c)
                        throw Error(b[87]);
                    if (a.length == c)
                        return a;
                    for (var e = [], f = a.length; f < c; f++)
                        e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }
                function U(b, c) {
                    if (b <= a[15])
                        return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++)
                        d.push(c);
                    return d
                }
                function r(a) {
                    return null == a || void 0 == a
                }
                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }
                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c))
                        return !1;
                    try {
                        if (r(window[a.f]))
                            return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }
                function v(c, d) {
                    if (r(c))
                        return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d)
                            return f
                    }
                }
                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else
                                                        e = v(q, c[172])
                                                } else
                                                    e = v(q, b[342])
                                            } else
                                                e = v(q, c[30])
                                        } else
                                            e = v(q, c[16])
                                    } else
                                        e = v(q, B[2])
                                } else
                                    e = v(q, b[320])
                            } else
                                e = v(q, c[58])
                        } else
                            e = v(q, c[89])
                    } else
                        e = h;
                    return e
                }
                function Sa() {
                    var a = da();
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }
                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta
                          , f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }
                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h)
                                return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }
                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]]
                      , e = b[0];
                    if (null == h || void 0 == h)
                        return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262], k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }
                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date,
                    a = new Date(f),
                    f = a[b[215]](),
                    g.push(c[91]),
                    g.push(b[172]),
                    g.push(b[305]),
                    g.push(b[325]),
                    g.push(b[319]),
                    g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]),
                    g.push(b[152]),
                    g.push(b[234]),
                    g.push(b[260]),
                    g.push(A));
                    C[b[207]] = g.join(b[0])
                }
                function Da(a) {
                    window[pa] = a
                }
                function Ea(a) {
                    window[qa] = a
                }
                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++)
                        e.push(c);
                    return e.join(b[0])
                }
                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }
                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[qa];
                    return a
                }
                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0])
                        return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0])
                        return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }
                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[pa];
                    return a
                }
                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0])
                        return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }
                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }
                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d),
                            Ha(V, d))
                        }
                }
                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0
                      , t = {
                        v: b[227]
                    }
                      , l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa
                      , r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]),
                        t[b[159]] = b[42],
                        h = !1
                    }
                    try {
                        var v = l = Ca(t)
                          , t = Za;
                        if (null == t || void 0 == t)
                            throw Error(b[120]);
                        if (null == v || void 0 == v)
                            v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y)
                          , p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301]
                              , z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15])
                            I = za(F);
                        else {
                            var n = A.length
                              , J = a[15]
                              , J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha
                              , z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++)
                                z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15])
                            throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++)
                                I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N)
                                M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++)
                                    w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w)
                                Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++)
                                    D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w)
                                ia = null;
                            else if (null == D)
                                ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++)
                                    H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E)
                              , ja = f(xa)
                              , ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G)
                            ka = null;
                        else if (G.length == a[15])
                            ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length; )
                                    if (R + ya <= G.length)
                                        u.push(k(G, R, ya)),
                                        R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }),
                        h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67],b[13]), new m(b[330],b[14]), new m(c[6],b[11]), new m(c[65],b[12]), new m(c[140],b[10]), new m(b[257],b[9]), new m(b[2],b[19]), new m(b[235],b[22]), new m(c[119],b[6]), new m(c[89],c[164]), new m(c[58],c[162]), new m(b[320],c[163]), new m(B[2],c[159]), new m(c[16],c[161]), new m(c[30],c[156]), new m(b[342],c[158]), new m(c[172],c[165]), new m(b[171],c[168]), new m(b[253],c[128],!1), new m(b[294],c[129],!1), new m(b[168],c[126],!1), new m(b[311],c[127],!1), new m(b[265],c[144],!1)]
                  , Qa = da() ? !1 : !0
                  , Wa = window && window[c[65]] && window[c[65]].host || b[353]
                  , C = window[b[330]]
                  , y = window[c[6]]
                  , N = a[16]
                  , T = a[16]
                  , aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]]
                  , La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]]
                  , Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]]
                  , F = a[158]
                  , L = a[158]
                  , ha = a[23]
                  , va = a[23]
                  , d = function(b, c) {
                    if (null == b)
                        return null;
                    for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++)
                        e.push(Y(b[g], d++));
                    return e
                }
                  , Za = b[345]
                  , S = b[299]
                  , V = c[100]
                  , fa = a[91]
                  , ea = b[275]
                  , Ta = ea.length
                  , sa = a[444]
                  , ta = a[396]
                  , Ya = !1
                  , Xa = !1
                  , O = window && window[c[65]] && window[c[65]][b[310]] || c[95]
                  , A = c[56]
                  , A = function(d, e) {
                    if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15])
                        return null;
                    e = e.split(b[56]);
                    for (var f = a[15]; f < e.length; f++) {
                        var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                        if (null != d.match(g) || null != (b[38] + d).match(g))
                            return e[f]
                    }
                    return null
                }(O, A)
                  , pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                  , qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                  , K = function(c) {
                    var d = [];
                    if (!c)
                        return d;
                    c = c.split(b[38]);
                    for (var e = b[0], f = a[15]; f < c.length; f++)
                        f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e,
                        d.push(e));
                    return d
                }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                }
                )(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0])
                        a = !1;
                    else {
                        var c;
                        if (c = Ua())
                            a = ga(a),
                            c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                }
                )() ? (Da(Q()),
                Ea(ra()),
                O = Va(),
                window[b[124]] && window[b[124]](ua, O)) : ua()
            }
            )()
        }
        )()
    }
    )()
}
)();
(function() {}
)();
(function() {
    var bwk1x;
    var tv2x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cuc6W = 0;
    var bwx1x = 0;
    var bwD1x = 1;
    var bwE1x = 0;
    var bsq0x = "";
    var bwS1x = "";
    var bwT1x = "";
    var TA1x = "";
    var Tw1x = "";
    var bpI9z = "";
    var bxs1x = 0;
    var bxt1x = "";
    var JL7E = "";
    var BC5H = 0;
    var boN9E = ntes_get_domain();
    var boh9Y = null;
    var cxJ7C = "//analytics.163.com";
    var ctZ6T = function() {};
    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + boN9E
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + boN9E
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + boN9E
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }
    function ntes_get_flashver() {
        var f = ""
          , n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var ctX6R = 0;
    var Ro0x = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Ro0x))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }
    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }
    function str2binl(d) {
        var c = new Array;
        var a = (1 << Ro0x) - 1;
        for (var b = 0; b < d.length * Ro0x; b += Ro0x) {
            c[b >> 5] |= (d.charCodeAt(b / Ro0x) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = ctX6R ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        TA1x = "-";
        bpI9z = "-";
        Tw1x = "-";
        var c = window.self
          , b = window.screen
          , a = window.navigator;
        if (c.screen) {
            TA1x = b.width + "x" + b.height;
            bpI9z = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                TA1x = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Tw1x = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Tw1x = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bxs1x = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function cxL7E(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || ctZ6T;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        }
        ;
        a.onerror = function() {
            window[e] = null;
            d()
        }
        ;
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bwk1x;
        bsq0x = escape(a || document.location);
        bwS1x = escape(m || document.title);
        bwT1x = l === true ? "" : escape(l || document.referrer);
        bxt1x = ntes_get_flashver();
        var b = (new Date).getTime();
        if (boh9Y == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            boh9Y = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bsq0x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (boh9Y) {
                tv2x = fetch_visitor_hash();
                bwx1x = 1;
                ntes_set_cookie_long("_ntes_nnid", tv2x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tv2x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            tv2x = h.substr(0, o);
            BC5H = h.substr(o + 1, p - o - 1);
            if (BC5H == 0) {
                BC5H = (new Date).getTime();
                f = true
            }
            if (!tv2x) {
                tv2x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", tv2x + "," + BC5H);
                ntes_set_cookie_long("_ntes_nuid", tv2x)
            }
            if (BC5H != 0 && b - BC5H > 365 * 86400 * 1e3) {
                BC5H = 0;
                ntes_set_cookie_long("_ntes_nnid", tv2x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tv2x)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q)
              , r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        JL7E = c("P_INFO", "P_OINFO");
        JL7E = JL7E ? JL7E.substr(0, JL7E.indexOf("|")) : "";
        bwE1x = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", tv2x, "&_nvtm=", cuc6W, "&_nvsf=", bwD1x, "&_nvfi=", bwx1x, "&_nlag=", Tw1x, "&_nlmf=", bxs1x, "&_nres=", TA1x, "&_nscd=", bpI9z, "&_nstm=", bwE1x, "&_nurl=", bsq0x, "&_ntit=", bwS1x, "&_nref=", bwT1x, "&_nfla=", bxt1x, "&_nssn=", JL7E, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bwD1x = 0;
        neteaseTracker.callback = null
    }
    bwk1x = "iad";
    neteaseTracker()
}
)();
(function() {}
)();
var CryptoJS = CryptoJS || function(u, p) {
    var d = {}
      , l = d.lib = {}
      , s = function() {}
      , t = l.Base = {
        extend: function(a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function() {
                c.$super.init.apply(this, arguments)
            }
            );
            c.init.prototype = c;
            c.$super = this;
            return c
        },
        create: function() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        },
        init: function() {},
        mixIn: function(a) {
            for (var c in a)
                a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    }
      , r = l.WordArray = t.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        },
        toString: function(a) {
            return (a || v).stringify(this)
        },
        concat: function(a) {
            var c = this.words
              , e = a.words
              , j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4)
                for (var k = 0; k < a; k++)
                    c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
            else if (65535 < e.length)
                for (k = 0; k < a; k += 4)
                    c[j + k >>> 2] = e[k >>> 2];
            else
                c.push.apply(c, e);
            this.sigBytes += a;
            return this
        },
        clamp: function() {
            var a = this.words
              , c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        },
        random: function(a) {
            for (var c = [], e = 0; e < a; e += 4)
                c.push(4294967296 * u.random() | 0);
            return new r.init(c,a)
        }
    })
      , w = d.enc = {}
      , v = w.Hex = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2)
                e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e,c / 2)
        }
    }
      , b = w.Latin1 = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++)
                e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        },
        parse: function(a) {
            for (var c = a.length, e = [], j = 0; j < c; j++)
                e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e,c)
        }
    }
      , x = w.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }
      , q = l.BufferedBlockAlgorithm = t.extend({
        reset: function() {
            this.j4n = new r.init;
            this.byt2x = 0
        },
        Tr1x: function(a) {
            "string" == typeof a && (a = x.parse(a));
            this.j4n.concat(a);
            this.byt2x += a.sigBytes
        },
        Be4i: function(a) {
            var c = this.j4n
              , e = c.words
              , j = c.sigBytes
              , k = this.blockSize
              , b = j / (4 * k)
              , b = a ? u.ceil(b) : u.max((b | 0) - this.byr2x, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k)
                    this.byv2x(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q,j)
        },
        clone: function() {
            var a = t.clone.call(this);
            a.j4n = this.j4n.clone();
            return a
        },
        byr2x: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.blD8v()
        },
        update: function(a) {
            this.Tr1x(a);
            this.Be4i();
            return this
        },
        finalize: function(a) {
            a && this.Tr1x(a);
            return this.To1x()
        },
        blockSize: 16,
        bmH9y: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        ctO6I: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a,e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS
      , p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words
              , p = d.sigBytes
              , t = this.bu5z;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)
                    d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4; )
                    d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length
              , s = this.bu5z
              , t = s.charAt(64);
            t && (t = d.indexOf(t),
            -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4)
                      , b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bu5z: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}
)();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        blD8v: function() {
            this.dN7G = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        byv2x: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a
                  , e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dN7G.words
              , c = q[n + 0]
              , e = q[n + 1]
              , j = q[n + 2]
              , k = q[n + 3]
              , z = q[n + 4]
              , r = q[n + 5]
              , t = q[n + 6]
              , w = q[n + 7]
              , v = q[n + 8]
              , A = q[n + 9]
              , B = q[n + 10]
              , C = q[n + 11]
              , u = q[n + 12]
              , D = q[n + 13]
              , E = q[n + 14]
              , x = q[n + 15]
              , f = a[0]
              , m = a[1]
              , g = a[2]
              , h = a[3]
              , f = p(f, m, g, h, c, 7, b[0])
              , h = p(h, f, m, g, e, 12, b[1])
              , g = p(g, h, f, m, j, 17, b[2])
              , m = p(m, g, h, f, k, 22, b[3])
              , f = p(f, m, g, h, z, 7, b[4])
              , h = p(h, f, m, g, r, 12, b[5])
              , g = p(g, h, f, m, t, 17, b[6])
              , m = p(m, g, h, f, w, 22, b[7])
              , f = p(f, m, g, h, v, 7, b[8])
              , h = p(h, f, m, g, A, 12, b[9])
              , g = p(g, h, f, m, B, 17, b[10])
              , m = p(m, g, h, f, C, 22, b[11])
              , f = p(f, m, g, h, u, 7, b[12])
              , h = p(h, f, m, g, D, 12, b[13])
              , g = p(g, h, f, m, E, 17, b[14])
              , m = p(m, g, h, f, x, 22, b[15])
              , f = d(f, m, g, h, e, 5, b[16])
              , h = d(h, f, m, g, t, 9, b[17])
              , g = d(g, h, f, m, C, 14, b[18])
              , m = d(m, g, h, f, c, 20, b[19])
              , f = d(f, m, g, h, r, 5, b[20])
              , h = d(h, f, m, g, B, 9, b[21])
              , g = d(g, h, f, m, x, 14, b[22])
              , m = d(m, g, h, f, z, 20, b[23])
              , f = d(f, m, g, h, A, 5, b[24])
              , h = d(h, f, m, g, E, 9, b[25])
              , g = d(g, h, f, m, k, 14, b[26])
              , m = d(m, g, h, f, v, 20, b[27])
              , f = d(f, m, g, h, D, 5, b[28])
              , h = d(h, f, m, g, j, 9, b[29])
              , g = d(g, h, f, m, w, 14, b[30])
              , m = d(m, g, h, f, u, 20, b[31])
              , f = l(f, m, g, h, r, 4, b[32])
              , h = l(h, f, m, g, v, 11, b[33])
              , g = l(g, h, f, m, C, 16, b[34])
              , m = l(m, g, h, f, E, 23, b[35])
              , f = l(f, m, g, h, e, 4, b[36])
              , h = l(h, f, m, g, z, 11, b[37])
              , g = l(g, h, f, m, w, 16, b[38])
              , m = l(m, g, h, f, B, 23, b[39])
              , f = l(f, m, g, h, D, 4, b[40])
              , h = l(h, f, m, g, c, 11, b[41])
              , g = l(g, h, f, m, k, 16, b[42])
              , m = l(m, g, h, f, t, 23, b[43])
              , f = l(f, m, g, h, A, 4, b[44])
              , h = l(h, f, m, g, u, 11, b[45])
              , g = l(g, h, f, m, x, 16, b[46])
              , m = l(m, g, h, f, j, 23, b[47])
              , f = s(f, m, g, h, c, 6, b[48])
              , h = s(h, f, m, g, w, 10, b[49])
              , g = s(g, h, f, m, E, 15, b[50])
              , m = s(m, g, h, f, r, 21, b[51])
              , f = s(f, m, g, h, u, 6, b[52])
              , h = s(h, f, m, g, k, 10, b[53])
              , g = s(g, h, f, m, B, 15, b[54])
              , m = s(m, g, h, f, e, 21, b[55])
              , f = s(f, m, g, h, v, 6, b[56])
              , h = s(h, f, m, g, x, 10, b[57])
              , g = s(g, h, f, m, t, 15, b[58])
              , m = s(m, g, h, f, D, 21, b[59])
              , f = s(f, m, g, h, z, 6, b[60])
              , h = s(h, f, m, g, C, 10, b[61])
              , g = s(g, h, f, m, j, 15, b[62])
              , m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        To1x: function() {
            var b = this.j4n
              , n = b.words
              , a = 8 * this.byt2x
              , c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Be4i();
            b = this.dN7G;
            n = b.words;
            for (a = 0; 4 > a; a++)
                c = n[a],
                n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dN7G = this.dN7G.clone();
            return b
        }
    });
    t.MD5 = v.bmH9y(r);
    t.HmacMD5 = v.ctO6I(r)
}
)(Math);
(function() {
    var u = CryptoJS
      , p = u.lib
      , d = p.Base
      , l = p.WordArray
      , p = u.algo
      , s = p.EvpKDF = d.extend({
        cfg: d.extend({
            keySize: 4,
            hasher: p.MD5,
            iterations: 1
        }),
        init: function(d) {
            this.cfg = this.cfg.extend(d)
        },
        compute: function(d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q; ) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++)
                    n = s.finalize(n),
                    s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
}
)();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS
      , d = p.lib
      , l = d.Base
      , s = d.WordArray
      , t = d.BufferedBlockAlgorithm
      , r = p.enc.Base64
      , w = p.algo.EvpKDF
      , v = d.Cipher = t.extend({
        cfg: l.extend(),
        createEncryptor: function(e, a) {
            return this.create(this.blv8n, e, a)
        },
        createDecryptor: function(e, a) {
            return this.create(this.ctN6H, e, a)
        },
        init: function(e, a, b) {
            this.cfg = this.cfg.extend(b);
            this.byI2x = e;
            this.J4N = a;
            this.reset()
        },
        reset: function() {
            t.reset.call(this);
            this.blD8v()
        },
        process: function(e) {
            this.Tr1x(e);
            return this.Be4i()
        },
        finalize: function(e) {
            e && this.Tr1x(e);
            return this.To1x()
        },
        keySize: 4,
        ivSize: 4,
        blv8n: 1,
        ctN6H: 2,
        bmH9y: function(e) {
            return {
                encrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                },
                decrypt: function(b, k, d) {
                    return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                }
            }
        }
    });
    d.StreamCipher = v.extend({
        To1x: function() {
            return this.Be4i(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {}
      , x = function(e, a, b) {
        var c = this.byJ2x;
        c ? this.byJ2x = u : c = this.byL2x;
        for (var d = 0; d < b; d++)
            e[a + d] ^= c[d]
    }
      , q = (d.BlockCipherMode = l.extend({
        createEncryptor: function(e, a) {
            return this.Encryptor.create(e, a)
        },
        createDecryptor: function(e, a) {
            return this.Decryptor.create(e, a)
        },
        init: function(e, a) {
            this.byM2x = e;
            this.byJ2x = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.byM2x
              , c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.byL2x = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.byM2x
              , c = b.blockSize
              , d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.byL2x = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)
                l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg
              , b = a.iv
              , a = a.mode;
            if (this.byI2x == this.blv8n)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor,
                this.byr2x = 1;
            this.eQ7J = c.call(a, this, b && b.words)
        },
        byv2x: function(a, b) {
            this.eQ7J.processBlock(a, b)
        },
        To1x: function() {
            var a = this.cfg.padding;
            if (this.byI2x == this.blv8n) {
                a.pad(this.j4n, this.blockSize);
                var b = this.Be4i(!0)
            } else
                b = this.Be4i(!0),
                a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function(a) {
            this.mixIn(a)
        },
        toString: function(a) {
            return (a || this.formatter).stringify(this)
        }
    })
      , b = (p.format = {}).OpenSSL = {
        stringify: function(a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        },
        parse: function(a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({
                ciphertext: a,
                salt: c
            })
        }
    }
      , a = d.SerializableCipher = l.extend({
        cfg: l.extend({
            format: b
        }),
        encrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        },
        decrypt: function(a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.baL5Q(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        },
        baL5Q: function(a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    })
      , p = (p.kdf = {}).OpenSSL = {
        execute: function(a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({
                keySize: b + c
            }).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({
                key: a,
                iv: c,
                salt: d
            })
        }
    }
      , c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({
            kdf: p
        }),
        encrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        },
        decrypt: function(b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.baL5Q(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)
        a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4
          , k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e]
          , F = a[z]
          , G = a[F]
          , y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]],
        j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , d = d.AES = p.extend({
        blD8v: function() {
            for (var a = this.J4N, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.ctK6E = d + 6) + 1), e = this.ctJ6D = [], j = 0; j < a; j++)
                if (j < d)
                    e[j] = c[j];
                else {
                    var k = e[j - 1];
                    j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24,
                    k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255],
                    k ^= H[j / d | 0] << 24);
                    e[j] = e[j - d] ^ k
                }
            c = this.ctI6C = [];
            for (d = 0; d < a; d++)
                j = a - d,
                k = d % 4 ? e[j] : e[j - 4],
                c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        },
        encryptBlock: function(a, b) {
            this.byO2x(a, b, this.ctJ6D, t, r, w, v, l)
        },
        decryptBlock: function(a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.byO2x(a, c, this.ctI6C, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        },
        byO2x: function(a, b, c, d, e, j, l, f) {
            for (var m = this.ctK6E, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
                var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++]
                  , s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++]
                  , t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++]
                  , n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++]
                  , g = q
                  , h = s
                  , k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        },
        keySize: 8
    });
    u.AES = p.bmH9y(d)
}
)();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
    this.d = biFromHex(b),
    this.m = biFromHex(c),
    this.chunkSize = 2 * biHighIndex(this.m),
    this.radix = 16,
    this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e; )
        c[e] = b.charCodeAt(e),
        e++;
    for (; 0 != c.length % a.chunkSize; )
        c[e++] = 0;
    for (f = c.length,
    g = "",
    e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt,
        h = 0,
        i = e; i < e + a.chunkSize; ++h)
            j.digits[h] = c[i++],
            j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
        l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
        g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix),
        g = a.barrett.powMod(h, a.d),
        f = 0; f <= biHighIndex(g); ++f)
            d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
    d
}
function setMaxDigits(a) {
    maxDigits = a,
    ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
    bigOne = new BigInt,
    bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
    this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c); )
        ++c;
    if (c == a.length)
        d = new BigInt;
    else {
        for (e = a.length - c,
        f = e % dpl10,
        0 == f && (f = dpl10),
        d = biFromNumber(Number(a.substr(c, f))),
        c += f; c < a.length; )
            d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))),
            c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
    b.isNeg = a.isNeg,
    b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a,
    a = Math.abs(a),
    c = 0; a > 0; )
        b.digits[c++] = a & maxDigitVal,
        a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)
        b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b,
    d = biDivideModulo(a, c),
    e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero); )
        d = biDivideModulo(d[0], c),
        digit = d[1].digits[0],
        e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10,
    c = biDivideModulo(a, b),
    d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero); )
        c = biDivideModulo(c[0], b),
        d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15
      , c = "";
    for (i = 0; 4 > i; ++i)
        c += hexToChar[a & b],
        a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a),
    d = biHighIndex(a); d > -1; --d)
        b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4,
        b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c,
    e = 0; d > 0; d -= 4,
    ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1,
    g = a.length - 1; g >= d; g--)
        h = a.charCodeAt(g),
        i = charToHex(h),
        j = biMultiplyDigit(f, i),
        e = biAdd(e, j),
        f = biMultiplyDigit(f, b);
    return e.isNeg = c,
    e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
        c = biSubtract(a, b),
        b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
        d = 0,
        f = 0; f < a.digits.length; ++f)
            e = a.digits[f] + b.digits[f] + d,
            c.digits[f] = 65535 & e,
            d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
        c = biAdd(a, b),
        b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
        e = 0,
        f = 0; f < a.digits.length; ++f)
            d = a.digits[f] - b.digits[f] + e,
            c.digits[f] = 65535 & d,
            c.digits[f] < 0 && (c.digits[f] += biRadix),
            e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0,
            f = 0; f < a.digits.length; ++f)
                d = 0 - c.digits[f] + e,
                c.digits[f] = 65535 & d,
                c.digits[f] < 0 && (c.digits[f] += biRadix),
                e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else
            c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b]; )
        --b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
        c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0,
        i = k,
        j = 0; e >= j; ++j,
        ++i)
            h = c.digits[i] + a.digits[j] * b.digits[k] + d,
            c.digits[i] = h & maxDigitVal,
            d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
    c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt,
    c = biHighIndex(a),
    d = 0,
    f = 0; c >= f; ++f)
        e = result.digits[f] + a.digits[f] * b + d,
        result.digits[f] = e & maxDigitVal,
        d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
    result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b,
    h = d; f > g; ++g,
    ++h)
        c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
    e = b % bitsPerDigit,
    f = bitsPerDigit - e,
    g = d.digits.length - 1,
    h = g - 1; g > 0; --g,
    --h)
        d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
    d.isNeg = a.isNeg,
    d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c),
    e = b % bitsPerDigit,
    f = bitsPerDigit - e,
    g = 0,
    h = g + 1; g < d.digits.length - 1; ++g,
    ++h)
        d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
    d.isNeg = a.isNeg,
    d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
    c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
    c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
    c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg)
        return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c])
            return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)
        return a.isNeg ? (f = biCopy(bigOne),
        f.isNeg = !b.isNeg,
        a.isNeg = !1,
        b.isNeg = !1,
        g = biSubtract(b, a),
        a.isNeg = !0,
        b.isNeg = e) : (f = new BigInt,
        g = biCopy(a)),
        new Array(f,g);
    for (f = new BigInt,
    g = a,
    h = Math.ceil(d / bitsPerDigit) - 1,
    i = 0; b.digits[h] < biHalfRadix; )
        b = biShiftLeft(b, 1),
        ++i,
        ++d,
        h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i),
    c += i,
    j = Math.ceil(c / bitsPerDigit) - 1,
    k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k); )
        ++f.digits[j - h],
        g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l],
        n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
        o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
        p = h >= b.digits.length ? 0 : b.digits[h],
        q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
        f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
        r = f.digits[l - h - 1] * (p * biRadix + q),
        s = m * biRadixSquared + (n * biRadix + o); r > s; )
            --f.digits[l - h - 1],
            r = f.digits[l - h - 1] * (p * biRadix | q),
            s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
        g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
        g.isNeg && (g = biAdd(g, k),
        --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
    f.isNeg = a.isNeg != e,
    a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne),
    b = biShiftRight(b, i),
    g = biSubtract(b, g)),
    0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
    new Array(f,g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a; ; ) {
        if (0 != (1 & b) && (c = biMultiply(c, d)),
        b >>= 1,
        0 == b)
            break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ; ) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)),
        f = biShiftRight(f, 1),
        0 == f.digits[0] && 0 == biHighIndex(f))
            break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a),
    this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
    this.mu = biDivide(b, this.modulus),
    this.bkplus1 = new BigInt,
    this.bkplus1.digits[this.k + 1] = 1,
    this.modulo = BarrettMu_modulo,
    this.multiplyMod = BarrettMu_multiplyMod,
    this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus), g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)),
    i = biCompare(h, this.modulus) >= 0; i; )
        h = biSubtract(h, this.modulus),
        i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1,
    d = a,
    e = b; ; ) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)),
        e = biShiftRight(e, 1),
        0 == e.digits[0] && 0 == biHighIndex(e))
            break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20),
dpl10 = 15,
lr10 = biFromNumber(1e15),
hexatrigesimalToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"),
hexToChar = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"),
highBitMasks = new Array(0,32768,49152,57344,61440,63488,64512,65024,65280,65408,65472,65504,65520,65528,65532,65534,65535),
lowBitMasks = new Array(0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535);
!function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
            e = Math.floor(e),
            c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b)
          , d = CryptoJS.enc.Utf8.parse("0102030405060708")
          , e = CryptoJS.enc.Utf8.parse(a)
          , f = CryptoJS.AES.encrypt(e, c, {
            iv: d,
            mode: CryptoJS.mode.CBC
        });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
        d = new RSAKeyPair(b,"",c),
        e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {}
          , i = a(16);
          h.encText = b(d, g),
        h.encText = b(h.encText, i),
        h.encSecKey = c(i, e, f),
        h;
          window.console.info({
            param1 : d,
            param2 : e,
            param3 : f,
            param4 : g,
            ret : h
        });
        return h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
        f
    }
    window.asrsea = d,
    window.ecnonasr = e
}();
(function() {
    var c4g = NEJ.P
      , dU7N = c4g("nej.g")
      , w4A = c4g("nej.j")
      , k4o = c4g("nej.u")
      , RB1x = c4g("nm.x.ek");
    RB1x.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    RB1x.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
}
)();
(function() {
    var c4g = NEJ.P
      , dU7N = c4g("nej.g")
      , w4A = c4g("nej.j")
      , k4o = c4g("nej.u")
      , RB1x = c4g("nm.x.ek")
      , l4p = c4g("nm.x");
    if (w4A.bp5u.redefine)
        return;
    window.GEnc = true;
    var blb8T = function(ctF6z) {
        var o4s = [];
        k4o.bb5g(ctF6z, function(ctD6x) {
            o4s.push(RB1x.emj[ctD6x])
        });
        return o4s.join("")
    };
    var ctC6w = w4A.bp5u;
    w4A.bp5u = function(W5b, e4i) {
        var j4n = {}
          , e4i = NEJ.X({}, e4i)
          , lS0x = W5b.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(W5b) && !(e4i.headers && e4i.headers[dU7N.yj4n] == dU7N.Co5t) && !e4i.noEnc) {
            if (lS0x != -1) {
                j4n = k4o.hx8p(W5b.substring(lS0x + 1));
                W5b = W5b.substring(0, lS0x)
            }
            if (e4i.query) {
                j4n = NEJ.X(j4n, k4o.fx7q(e4i.query) ? k4o.hx8p(e4i.query) : e4i.query)
            }
            if (e4i.data) {
                j4n = NEJ.X(j4n, k4o.fx7q(e4i.data) ? k4o.hx8p(e4i.data) : e4i.data)
            }
            j4n["csrf_token"] = w4A.gQ8I("__csrf");
            W5b = W5b.replace("api", "weapi");
            e4i.method = "post";
            delete e4i.query;
            window.console.info({
                par1 : W5b,
                par2 : e4i,
                bl : RB1x.md
            });
            var bzl2x = window.asrsea(JSON.stringify(j4n), blb8T(["流泪", "强"]), blb8T(RB1x.md), blb8T(["爱心", "女孩", "惊恐", "大笑"]));
            e4i.data = k4o.db6V({
                params: bzl2x.encText,
                encSecKey: bzl2x.encSecKey
            })
        }
        ctC6w(W5b, e4i)
    }
    ;
    w4A.bp5u.redefine = true
}
)();
(function() {
    window.setTimeout(function() {
        var bp = document.createElement("script");
        var curProtocol = window.location.protocol.split(":")[0];
        if (curProtocol === "https") {
            bp.src = "https://zz.bdstatic.com/linksubmit/push.js"
        } else {
            bp.src = "http://push.zhanzhang.baidu.com/push.js"
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s)
    }, 3e3)
}
)();
(function() {}
)();
(function() {}
)();
(function() {
    var c4g = NEJ.P
      , a3x = c4g("nej.e")
      , dh6b = c4g("nej.p")
      , k4o = c4g("nej.u")
      , h4l = c4g("nej.v")
      , w4A = c4g("nej.j")
      , dr6l = c4g("nm.u")
      , l4p = c4g("nm.x")
      , p4t = c4g("nm.d")
      , n4r = c4g("nm.l")
      , bkq8i = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png"
      , j4n = {
        "大笑": "86",
        "可爱": "85",
        "憨笑": "359",
        "色": "95",
        "亲亲": "363",
        "惊恐": "96",
        "流泪": "356",
        "亲": "362",
        "呆": "352",
        "哀伤": "342",
        "呲牙": "343",
        "吐舌": "348",
        "撇嘴": "353",
        "怒": "361",
        "奸笑": "341",
        "汗": "97",
        "痛苦": "346",
        "惶恐": "354",
        "生病": "350",
        "口罩": "351",
        "大哭": "357",
        "晕": "355",
        "发怒": "115",
        "开心": "360",
        "鬼脸": "94",
        "皱眉": "87",
        "流感": "358",
        "爱心": "33",
        "心碎": "34",
        "钟情": "303",
        "星星": "309",
        "生气": "314",
        "便便": "89",
        "强": "13",
        "弱": "372",
        "拜": "14",
        "牵手": "379",
        "跳舞": "380",
        "禁止": "374",
        "这边": "262",
        "爱意": "106",
        "示爱": "376",
        "嘴唇": "367",
        "狗": "81",
        "猫": "78",
        "猪": "100",
        "兔子": "459",
        "小鸡": "450",
        "公鸡": "461",
        "幽灵": "116",
        "圣诞": "411",
        "外星": "101",
        "钻石": "52",
        "礼物": "107",
        "男孩": "0",
        "女孩": "1",
        "蛋糕": "337",
        18: "186",
        "圈": "312",
        "叉": "313"
    }
      , ctv6p = function() {
        if (h4l && h4l.y4C) {
            h4l.dispatchEventalias = h4l.y4C
        }
    };
    ctv6p();
    l4p.bkk8c = function(bI5N) {
        if (!bI5N || bI5N.copyrightId === undefined || !!bI5N.program)
            return false;
        if (window.GAbroad) {
            bI5N.fee = 0;
            return true
        }
        if (bI5N.status < 0)
            return true;
        var RD1x;
        if (typeof GCopyrights !== "undefined")
            RD1x = GCopyrights;
        try {
            if (!RD1x && !!top.GCopyrights)
                RD1x = top.GCopyrights
        } catch (e) {}
        if (RD1x) {
            var r4v = k4o.cV6P(RD1x, bI5N.copyrightId);
            if (r4v >= 0)
                return true
        }
        return false
    }
    ;
    l4p.bka8S = function() {
        var yT4X = /^\/m\/(song|album|artist|playlist|dj|search)\?/
          , vw3x = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }
          , ctu6o = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var ctt6n = function(J4N, j4n, RE1x) {
            switch (J4N) {
            case "event":
                j4n = j4n.split("|");
                return "/event?id=" + j4n[0] + "&uid=" + j4n[1];
            case "searchsong":
            case "searchlyric":
                var t4x = J4N == "searchsong" ? 1 : 1006;
                return "/search/m/?s=" + encodeURIComponent(j4n) + "&type=" + t4x;
            case "toplist":
                return "/discover/toplist?id=" + j4n + "&_hash=songlist-" + RE1x;
            case "day":
                return "/discover/recommend/taste" + "?_hash=songlist-" + RE1x;
                ;
            case "record":
                j4n = j4n.split("|");
                return "/user/songs/rank?id=" + j4n[0] + "&cat=" + j4n[1];
                break;
            default:
                return "/" + J4N + "?id=" + j4n + "&_hash=songlist-" + RE1x
            }
        };
        return function(dP7I, RE1x) {
            if (!dP7I)
                return null;
            var Jn7g = dP7I.fid || (dP7I.type != 18 ? dP7I.type : null)
              , bjL8D = dP7I.fdata || dP7I.rid
              , bzS2x = dP7I.page || dP7I.fhref;
            var J4N = vw3x[Jn7g];
            if (!J4N) {
                var wA3x = (bzS2x || "").match(yT4X);
                if (wA3x)
                    J4N = wA3x[1]
            }
            if (!J4N)
                return null;
            return {
                title: ctu6o[J4N],
                link: !vw3x[Jn7g] ? bzS2x : ctt6n(J4N, bjL8D, RE1x),
                fid: Jn7g,
                fdata: bjL8D
            }
        }
    }();
    l4p.bjx8p = function(kY9P) {
        var df6Z = kY9P;
        if (typeof GUser !== "undefined" && GUser.userId > 0)
            df6Z = GUser;
        return df6Z
    }
    ;
    l4p.hk8c = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    }
    ;
    l4p.JV7O = function() {
        var yT4X = /#(.*?)$/;
        return function(gq8i) {
            var iZ9Q = gq8i === false ? location : top.location;
            return yT4X.test(iZ9Q.href) ? RegExp.$1 : ""
        }
    }();
    l4p.AZ4d = function() {
        var AW4a = a3x.cX6R("audio")
          , ctn5s = AW4a.canPlayType && AW4a.canPlayType("audio/mpeg");
        if (ctn5s)
            return 2;
        var ctm5r = l4p.biM8E().supported;
        if (ctm5r)
            return 1;
        return 0
    }
    ;
    l4p.biM8E = function() {
        var fM8E, biL8D = !1, biu7n = "";
        if (dh6b.dk6e.browser == "ie") {
            try {
                fM8E = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                fM8E = null
            }
            if (fM8E) {
                biL8D = !0;
                biu7n = fM8E.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                fM8E = navigator.plugins["Shockwave Flash"];
                if (fM8E) {
                    biL8D = !0;
                    biu7n = fM8E.description
                }
            }
        }
        return {
            supported: biL8D,
            version: biu7n
        }
    }
    ;
    l4p.qt1x = function() {
        return "网易云音乐"
    }
    ;
    l4p.ctd5i = function() {
        return j4n
    }
    ;
    l4p.bAJ2x = function(cJ6D) {
        var D4H = j4n[cJ6D];
        return D4H == null ? "" : bkq8i.replace("{ID}", D4H)
    }
    ;
    l4p.wx3x = function(bl5q, dK7D, JW7P) {
        if (!bl5q)
            return "";
        if (!!JW7P) {
            bl5q = l4p.ctb5g(bl5q)
        }
        return l4p.Ti1x(l4p.cta5f(bl5q, dK7D))
    }
    ;
    l4p.bib7U = function() {
        var RI1x = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }
          , bhA7t = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }
          , csZ5e = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }
          , csX5c = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var csW5b = function(du6o, bhp7i) {
            du6o = JY7R(du6o);
            if (!!bhp7i) {
                du6o = du6o.replace(RI1x.MLINE, "\n\n").replace(RI1x.LING, "</br>")
            }
            du6o = l4p.Ti1x(du6o);
            return du6o
        };
        var JY7R = function(bl5q) {
            return k4o.Em5r(csZ5e, bl5q)
        };
        return function(du6o, e4i, eh7a) {
            e4i = e4i || {};
            eh7a = eh7a || {};
            eh7a.actHash = {};
            var csV5a = !!e4i.parseLink
              , csR5W = !!e4i.parseAct
              , csM5R = e4i.linkTpl || bhA7t.LINK
              , csL5Q = e4i.atTpl || bhA7t.AT
              , csI5N = e4i.actTpl || bhA7t.ACT
              , bhp7i = !!e4i.keepSpace
              , bgE7x = e4i.linkKlass || "s-fc7";
            cxR7K = e4i.actBiJson || "";
            if (!du6o)
                return "";
            du6o = du6o.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kI9z = csX5c[csV5a + 2 * csR5W]
              , cS6M = RI1x[kI9z]
              , bs5x = null
              , lp9g = null
              , gJ8B = 0
              , cxS7L = ""
              , cxT7M = "";
            var zl4p = [];
            cS6M.lastIndex = 0;
            while (bs5x = cS6M.exec(du6o)) {
                var fd7W = {
                    html: "",
                    before: bs5x.index - 1,
                    after: bs5x.index + bs5x[0].length
                };
                if (bs5x[1]) {
                    var lp9g = bs5x[2].replace(/[^\x00-\xff]/g, "**");
                    if (lp9g.length < 4 || lp9g.length > 32) {} else {
                        var RS1x = a3x.ep7i(csL5Q);
                        fd7W.html = a3x.bW5b(RS1x, {
                            value: JY7R(bs5x[2]),
                            url: encodeURI("/user/home?nickname=" + bs5x[2]),
                            klass: bgE7x
                        });
                        zl4p.push(fd7W)
                    }
                } else if (bs5x.length > 8 && bs5x[4]) {
                    var RS1x = a3x.ep7i(csM5R);
                    fd7W.html = a3x.bW5b(RS1x, {
                        value: JY7R(bs5x[4]),
                        url: encodeURI(bs5x[4]),
                        klass: bgE7x
                    });
                    zl4p.push(fd7W)
                } else {
                    var bCI3x = kI9z == "ACT_NOLINK" ? 4 : 9;
                    var RS1x = a3x.ep7i(csI5N);
                    fd7W.html = a3x.bW5b(RS1x, {
                        value: JY7R(bs5x[bCI3x]),
                        klass: bgE7x
                    });
                    zl4p.push(fd7W);
                    eh7a.actHash[bs5x[bCI3x].slice(1, -1)] = true
                }
            }
            var csD5I = zl4p.length
              , kY9P = {
                before: du6o.length - 1,
                after: 0
            }
              , beA6u = "";
            for (var i = 0; i <= csD5I; i++) {
                var io8g, gG8y;
                io8g = (zl4p[i - 1] || kY9P).after;
                gG8y = (zl4p[i] || kY9P).before;
                if (gG8y >= io8g && io8g >= 0 && gG8y <= du6o.length - 1) {
                    beA6u += csW5b(du6o.substring(io8g, gG8y + 1), bhp7i)
                }
                if (zl4p[i]) {
                    beA6u += zl4p[i].html
                }
            }
            return beA6u
        }
    }();
    l4p.ctb5g = function() {
        var cS6M = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?","g");
        return function(bl5q) {
            return (bl5q || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cS6M, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l4p.cta5f = function() {
        var cS6M = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eB7u = function(lp9g, dK7D) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lp9g) + '" class="' + (dK7D || "") + '">@' + lp9g + "</a>"
        };
        return function(bl5q, dK7D) {
            return (bl5q || "").replace(cS6M, function($0, $1) {
                return eB7u($1, dK7D)
            })
        }
    }();
    l4p.Ti1x = function() {
        var cS6M = /\[(.*?)\]/g;
        return function(bl5q) {
            return (bl5q || "").replace(cS6M, function($1, $2) {
                var W5b = l4p.bAJ2x($2);
                return !W5b ? $1 : '<img src="' + W5b + '"/>'
            })
        }
    }();
    l4p.yH4L = function(F4J, dK7D) {
        a3x.bz5E(F4J, dK7D) ? a3x.v4z(F4J, dK7D) : a3x.x4B(F4J, dK7D)
    }
    ;
    l4p.Kd7W = function(cH6B, jL9C) {
        cH6B = a3x.z4D(cH6B);
        jL9C = a3x.z4D(jL9C);
        if (!cH6B || !jL9C)
            return !1;
        for (jL9C = jL9C.parentNode; !!jL9C && jL9C != cH6B; jL9C = jL9C.parentNode)
            ;
        return jL9C == cH6B
    }
    ;
    l4p.kQ9H = function() {
        var bCS3x = function(gs8k) {
            return (gs8k < 10 ? "0" : "") + gs8k
        };
        return function(jK9B) {
            jK9B = parseInt(jK9B) || 0;
            if (!jK9B)
                return "00:00";
            var wH3x = Math.floor(jK9B % 60)
              , csC5H = Math.floor(jK9B / 60);
            return bCS3x(csC5H) + ":" + bCS3x(wH3x)
        }
    }();
    l4p.wJ3x = function(ft7m, uU2x) {
        if (!ft7m || ft7m.length == 0)
            return "";
        uU2x = uU2x || "/";
        var bs5x = [];
        for (var i = ft7m.length - 1; i >= 0; i--) {
            bs5x.unshift(ft7m[i].name)
        }
        return bs5x.join(uU2x)
    }
    ;
    l4p.rL1x = function() {
        var Sg1x = function(hp8h, dK7D, cH6B, Ta1x) {
            var eB7u = Ta1x ? l4p.bDA3x : k4o.dI7B;
            if (!hp8h || !hp8h.name)
                return "";
            if (!hp8h.id)
                return '<span class="' + dK7D + '">' + eB7u(hp8h.name) + "</span>";
            return "<a" + (cH6B ? ' target="_blank"' : "") + ' class="' + dK7D + '" href="/artist?id=' + hp8h.id + '" hidefocus="true">' + eB7u(hp8h.name) + "</a>"
        };
        return function(ft7m, T5Y, uU2x, cH6B, bDC3x, Ta1x) {
            if (!ft7m || !ft7m.length)
                return "";
            uU2x = uU2x || "/";
            T5Y = T5Y || "";
            Ki7b = "";
            var eM7F = [];
            for (var i = 0, i4m = [], rQ1x = [], fo7h; i < ft7m.length; ++i) {
                eM7F.push(ft7m[i].name);
                if (!ft7m[i] || ft7m[i].id <= 0) {
                    rQ1x.push(ft7m[i]);
                    continue
                }
                if (k4o.gb8T(T5Y)) {
                    fo7h = T5Y(ft7m[i])
                } else {
                    fo7h = Sg1x(ft7m[i], T5Y, cH6B, Ta1x)
                }
                if (fo7h && bDC3x && ft7m[i].tns && ft7m[i].tns.length > 0) {
                    Ki7b = k4o.dI7B(ft7m[i].tns[0]);
                    fo7h += '<span class="s-fc8" title="' + Ki7b + '"> - (' + Ki7b + ")</span>"
                }
                !!fo7h && i4m.push(fo7h)
            }
            for (var i = 0, fo7h; i < rQ1x.length; ++i) {
                if (k4o.gb8T(T5Y)) {
                    fo7h = T5Y(rQ1x[i])
                } else {
                    fo7h = Sg1x(rQ1x[i], T5Y, cH6B, Ta1x)
                }
                if (fo7h && bDC3x && rQ1x[i].tns && rQ1x[i].tns.length > 0) {
                    Ki7b = k4o.dI7B(rQ1x[i].tns[0]);
                    fo7h += '<span class="s-fc8" title="' + Ki7b + '"> - (' + Ki7b + ")</span>"
                }
                !!fo7h && i4m.push(fo7h)
            }
            return '<span title="' + eM7F.join(uU2x) + '">' + i4m.join(uU2x) + "</span>"
        }
    }();
    l4p.xe3x = function(fa7T, oB0x) {
        oB0x = oB0x || "86";
        return !!fa7T && (oB0x == "86" ? /^\d{11}$/ : /^\d+$/).test(fa7T)
    }
    ;
    l4p.cxV7O = function(fa7T) {
        if (!l4p.xe3x(fa7T))
            return fa7T;
        return fa7T.substring(0, 3) + "****" + fa7T.substr(7)
    }
    ;
    l4p.jq9h = function() {
        var cS6M = /^\s+$/g;
        return function(hW8O) {
            return !hW8O || cS6M.test(hW8O)
        }
    }();
    l4p.Sm1x = function() {
        var btw0x = /[^\x00-\xfff]/g;
        return function(hW8O) {
            var csv5A = hW8O.match(btw0x) || []
              , do6i = csv5A.length;
            return hW8O.length + do6i
        }
    }();
    l4p.zN4R = function() {
        var btw0x = /[^\x00-\xfff]/;
        return function(hW8O, fv7o) {
            for (var i = 0, len = hW8O.length; i < len && fv7o > 0; i++) {
                if (btw0x.test(hW8O.charAt(i))) {
                    fv7o -= 2;
                    if (fv7o < 0) {
                        break
                    }
                } else {
                    fv7o -= 1
                }
            }
            return hW8O.substring(0, i)
        }
    }();
    l4p.zP4T = function(hW8O, fv7o, OB0x) {
        fv7o = fv7o || 10;
        OB0x = OB0x || nej.p.dk6e.engine == "trident" && parseInt(nej.p.dk6e.release) < 5;
        if (OB0x && l4p.Sm1x(hW8O) > fv7o) {
            return l4p.zN4R(hW8O, fv7o) + "..."
        } else {
            return hW8O
        }
    }
    ;
    l4p.bEI3x = function(f4j) {
        return f4j === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f4j.type || f4j.href || ~f4j.tabIndex)
    }
    ;
    l4p.csp5u = function(d4h, cH6B) {
        if (!d4h || !cH6B)
            return !0;
        var f4j, t4x = d4h.type.toLowerCase();
        if (t4x == "mouseout") {
            f4j = d4h.relatedTarget || d4h.toElement
        } else if (t4x == "mouseover") {
            f4j = d4h.relatedTarget || d4h.fromElement
        }
        return !f4j || f4j !== cH6B && !l4p.Kd7W(cH6B, f4j)
    }
    ;
    l4p.se2x = function() {
        Q5V = {};
        return function(f4j, dL7E) {
            var D4H = a3x.la9R(f4j)
              , J4N = "hover-" + D4H;
            if (!dL7E || !D4H || !!Q5V[J4N])
                return;
            Q5V[J4N] = !0;
            h4l.s4w(D4H, "mouseover", function() {
                var brO0x = a3x.I4M(f4j, "hshow") || [];
                var brp0x = a3x.I4M(f4j, "icn-dislike") || [];
                a3x.x4B(D4H, "z-hover");
                a3x.Z5e(brO0x[0], "display", "block");
                a3x.Z5e(brp0x[0], "display", "block")
            });
            h4l.s4w(D4H, "mouseout", function() {
                var brO0x = a3x.I4M(f4j, "hshow") || [];
                var brp0x = a3x.I4M(f4j, "icn-dislike") || [];
                a3x.v4z(D4H, "z-hover");
                a3x.Z5e(brO0x[0], "display", "none");
                a3x.Z5e(brp0x[0], "display", "none")
            })
        }
    }();
    l4p.bES3x = function() {
        var bu5z = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function(hW8O) {
            return k4o.Em5r(bu5z, hW8O)
        }
    }();
    l4p.xN3x = function(by5D) {
        if (k4o.GO6I(by5D))
            by5D = by5D.getTime();
        var fT8L = new Date
          , nr0x = fT8L.getTime() - by5D;
        if (nr0x <= 6e4)
            return "刚刚";
        var qY1x = fT8L.getHours() * 36e5 + fT8L.getMinutes() * 6e4 + fT8L.getSeconds() * 1e3;
        if (nr0x <= qY1x) {
            if (nr0x < 36e5) {
                var So1x = Math.floor(nr0x / 6e4);
                return So1x + "分钟前"
            }
            return k4o.iV9M(by5D, "HH:mm")
        } else {
            if (nr0x < qY1x + 864e5) {
                return "昨天" + k4o.iV9M(by5D, "HH:mm")
            } else {
                var gt8l = fT8L.getFullYear()
                  , bjh8Z = new Date(gt8l,0,1);
                var qY1x = fT8L.getTime() - bjh8Z.getTime();
                if (nr0x < qY1x) {
                    return k4o.iV9M(by5D, "M月d日 HH:mm")
                }
                return k4o.iV9M(by5D, "yyyy年M月d日")
            }
        }
    }
    ;
    l4p.csk5p = function(by5D) {
        if (k4o.GO6I(by5D))
            by5D = by5D.getTime();
        var fT8L = new Date
          , nr0x = fT8L.getTime() - by5D;
        var qY1x = fT8L.getHours() * 36e5 + fT8L.getMinutes() * 6e4 + fT8L.getSeconds() * 1e3;
        if (nr0x <= qY1x) {
            return "今天" + k4o.iV9M(by5D, "HH:mm")
        } else {
            if (nr0x < qY1x + 864e5) {
                return "昨天" + k4o.iV9M(by5D, "HH:mm")
            } else {
                return k4o.iV9M(by5D, "yy-MM-dd HH:mm")
            }
        }
    }
    ;
    l4p.csj5o = function(by5D) {
        if (k4o.GO6I(by5D))
            by5D = by5D.getTime();
        var fT8L = new Date
          , nr0x = fT8L.getTime() - by5D;
        if (nr0x <= 6e4)
            return "刚刚";
        var qY1x = fT8L.getHours() * 36e5 + fT8L.getMinutes() * 6e4 + fT8L.getSeconds() * 1e3;
        if (nr0x <= qY1x) {
            if (nr0x < 36e5) {
                var So1x = Math.floor(nr0x / 6e4);
                return So1x + "分钟前"
            }
            return k4o.iV9M(by5D, "HH:mm")
        } else {
            if (nr0x < qY1x + 864e5) {
                return "昨天" + k4o.iV9M(by5D, "HH:mm")
            } else if (nr0x < qY1x + 864e5 * 6) {
                var gt8l = fT8L.getFullYear()
                  , bjh8Z = new Date(gt8l,0,1);
                var qY1x = fT8L.getTime() - bjh8Z.getTime();
                if (nr0x < qY1x) {
                    return k4o.iV9M(by5D, "M月d日 HH:mm")
                }
                return k4o.iV9M(by5D, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    }
    ;
    l4p.SP1x = function() {
        var cS6M = /\{(.*?)\}/gi;
        return function(pw1x, j4n) {
            return (pw1x || "").replace(cS6M, function($1, $2) {
                var C4G = j4n[$2];
                return C4G == null ? $1 : C4G
            })
        }
    }();
    l4p.eY7R = function() {
        var bg5l = Array.prototype.slice.call(arguments, 0)
          , pw1x = bg5l.shift();
        if (pw1x) {
            return pw1x.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bg5l.length ? bg5l[$2] : $1
            })
        }
        return ""
    }
    ;
    l4p.Kk7d = function(i4m, dK7D, lu9l) {
        return "";
        lu9l = lu9l || " - ";
        if (i4m && i4m.length) {
            return lu9l + (!!dK7D ? '<span class="' + dK7D + '">' + i4m[0] + "</span>" : i4m[0])
        }
        return ""
    }
    ;
    l4p.bFU4Y = function() {
        if (window.getSelection) {
            var re1x = window.getSelection();
            if (re1x && re1x.focusNode && re1x.focusNode.tagName) {
                var AA4E = a3x.cU6O(re1x.focusNode);
                for (var i = 0, yi4m; i < AA4E.length; ++i) {
                    yi4m = AA4E[i].tagName;
                    if (!yi4m)
                        continue;
                    yi4m = yi4m.toLowerCase();
                    if (yi4m == "textarea" || yi4m == "input")
                        return !0
                }
            }
        } else if (document.selection) {
            var cN6H = document.selection.createRange();
            if (cN6H) {
                var f4j = cN6H.parentElement();
                if (f4j && f4j.tagName) {
                    var yi4m = f4j.tagName.toLowerCase();
                    if (yi4m == "textarea" || yi4m == "input")
                        return !0
                }
            }
        }
        return !1
    }
    ;
    l4p.AN4R = function(fk7d) {
        if (/^[A-Z]\:\\/i.test(fk7d)) {
            fk7d = fk7d.split("\\")
        } else {
            fk7d = fk7d.split("/")
        }
        fk7d = fk7d[fk7d.length - 1];
        return fk7d
    }
    ;
    l4p.csi5n = function() {
        var Eg5l = [13, 17, 34, 19, 18, 21];
        return function(D4H) {
            var bs5x = (D4H || "").split("_");
            return {
                type: Eg5l[bs5x[2]] || -1,
                id: bs5x[3] || ""
            }
        }
    }();
    l4p.bGw4A = function(fM8E) {
        if (!fM8E) {
            return true
        }
        for (var k in fM8E) {
            return false
        }
        return true
    }
    ;
    l4p.bcI6C = function(df6Z) {
        if (!df6Z) {
            return ""
        }
        if (4 == df6Z.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (df6Z.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (df6Z.expertTags && df6Z.expertTags.length || !l4p.bGw4A(df6Z.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    }
    ;
    l4p.Sx1x = function(gW8O) {
        if (!gW8O)
            return "";
        var do6i = gW8O.length
          , hB8t = [];
        hB8t[0] = do6i / 3 | 0;
        hB8t[1] = hB8t[0] + ((do6i - hB8t[0]) / 2 | 0);
        return gW8O.substring(0, hB8t[0]) + gW8O.substring(hB8t[0], hB8t[1]).replace(/\d/g, "*") + gW8O.substring(hB8t[1], do6i)
    }
    ;
    l4p.cxW7P = function(r4v, co5t) {
        return (r4v % co5t + co5t) % co5t
    }
    ;
    l4p.bGX4b = function() {
        var Eg5l = {
            0: "playlist",
            1: "program",
            2: "event",
            3: "album",
            4: "song",
            5: "mv",
            6: "topic",
            62: "video"
        };
        return function(D4H) {
            var bs5x = (D4H || "").split("_")
              , o4s = {
                type: Eg5l[bs5x[2]] || -1,
                id: bs5x[3] || ""
            };
            if (o4s.type == "event") {
                o4s.uid = bs5x[4] || "";
                return "/" + o4s.type + "?id=" + o4s.id + "&uid=" + o4s.uid
            }
            return "/" + o4s.type + "?id=" + o4s.id
        }
    }();
    l4p.bGZ4d = function() {
        var Eg5l = {
            0: "歌单",
            1: "电台节目",
            2: "动态",
            3: "专辑",
            4: "单曲",
            5: "MV",
            6: "专栏文章",
            62: "视频"
        };
        return function(D4H) {
            var bs5x = (D4H || "").split("_");
            return Eg5l[bs5x[2]] || "资源"
        }
    }();
    l4p.csg5l = function(bw5B) {
        var qs = bw5B.length > 0 ? bw5B.substring(1) : ""
          , args = {}
          , items = qs.length ? qs.split("&") : []
          , item = null
          , name = null
          , value = null
          , i = 0
          , len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    }
    ;
    l4p.bHG4K = function(sS2x, Sy1x) {
        var SL1x = 0
          , eg7Z = new Array;
        k4o.bb5g(sS2x, function(W5b, r4v) {
            var dn6h = a3x.cX6R("img");
            dn6h.src = W5b;
            h4l.s4w(dn6h, "load", function(r4v, d4h) {
                eg7Z[r4v] = 1;
                SL1x++;
                if (SL1x == sS2x.length)
                    Sy1x(sS2x, eg7Z)
            }
            .g4k(this, r4v));
            h4l.s4w(dn6h, "error", function(d4h, r4v) {
                eg7Z[r4v] = 0;
                SL1x++;
                if (SL1x == sS2x.length)
                    Sy1x(sS2x, eg7Z)
            }
            .g4k(this, r4v))
        })
    }
    ;
    l4p.SJ1x = function(i4m, dG7z) {
        var o4s = [];
        k4o.bb5g(i4m, function(q4u, r4v, iw9n) {
            o4s.push(dG7z(q4u, r4v, iw9n))
        });
        return o4s
    }
    ;
    l4p.WH2x = function(i4m, dG7z, iw9n) {
        var o4s = [];
        k4o.bb5g(i4m, function(q4u, r4v) {
            if (dG7z.call(iw9n, q4u, r4v, i4m)) {
                o4s.push(q4u)
            }
        });
        return o4s
    }
    ;
    l4p.csf5k = function(bl5q) {
        return k4o.dI7B((bl5q || "").replace(/\s{2,}/g, " ").trim())
    }
    ;
    l4p.bjZ8R = function(be5j) {
        if (be5j.transNames && be5j.transNames.length) {
            return be5j.transNames[0]
        } else if (be5j.alias && be5j.alias.length) {
            return be5j.alias[0]
        }
    }
    ;
    l4p.blz8r = function(QS0x) {
        if (QS0x) {
            return QS0x.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    }
    ;
    l4p.bnU9L = function(f4j) {
        var f4j = a3x.z4D(f4j)
          , cJ6D = f4j && f4j.getElementsByTagName("textarea")[0]
          , J4N = a3x.u4y(f4j, "key")
          , bcT6N = a3x.u4y(f4j, "simple") == "1"
          , csc5h = a3x.u4y(f4j, "pvnamed") == "1"
          , csa5f = p4t.vv3x.fX8P();
        if (!(f4j && cJ6D && J4N))
            return;
        var SI1x, blQ8I, SM1x;
        SI1x = a3x.I4M(a3x.z4D("m-playlist"), "j-img");
        k4o.bb5g(SI1x, function(iE9v) {
            if (!SM1x && a3x.u4y(iE9v, "key")) {
                SM1x = a3x.u4y(iE9v, "key");
                iE9v.removeAttribute("data-key")
            }
        });
        SI1x = a3x.I4M(a3x.z4D("m-playlist"), "m-info");
        k4o.bb5g(SI1x, function(iE9v) {
            if (!blQ8I && iE9v.id && iE9v.id.indexOf("auto-id-") == 0) {
                blQ8I = iE9v.id.slice(8, 12)
            }
        });
        var C4G = cJ6D.value || cJ6D.defaultValue;
        if (SM1x) {
            C4G = decodeURIComponent(k4o.crW5b(C4G, "param=" + blQ8I + SM1x))
        }
        C4G = JSON.parse(C4G);
        if (csc5h) {
            l4p.crV5a(C4G)
        }
        if (bcT6N) {
            C4G = l4p.Fn6h(C4G)
        }
        csa5f.uc2x(J4N, C4G);
        f4j.innerHTML = "";
        return J4N
    }
    ;
    l4p.crU5Z = function(oE0x) {
        if (!oE0x.onbeforelistload) {
            oE0x.onbeforelistload = function(d4h) {
                d4h.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!oE0x.onemptylist) {
            oE0x.onemptylist = function(d4h) {
                d4h.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oE0x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return oE0x
    }
    ;
    l4p.crV5a = function(gR8J) {
        k4o.bb5g(gR8J, function(bI5N) {
            bI5N.privilege = bI5N.pv;
            delete bI5N.pv
        })
    }
    ;
    l4p.Fn6h = function(hz8r) {
        if (k4o.eu7n(hz8r)) {
            var eh7a = [];
            k4o.bb5g(hz8r, function(bcT6N) {
                eh7a.push(bJS5X(bcT6N))
            });
            return eh7a
        } else {
            return bJS5X(hz8r)
        }
        function bJS5X(hz8r) {
            if (!hz8r)
                return null;
            var eh7a = {
                album: hz8r.al,
                alias: hz8r.alia || hz8r.ala || [],
                artists: hz8r.ar || [],
                commentThreadId: "R_SO_4_" + hz8r.id,
                copyrightId: hz8r.cp || 0,
                duration: hz8r.dt || 0,
                id: hz8r.id,
                mvid: hz8r.mv || 0,
                name: hz8r.name || "",
                cd: hz8r.cd,
                position: hz8r.no || 0,
                ringtone: hz8r.rt,
                rtUrl: hz8r.rtUrl,
                status: hz8r.st || 0,
                pstatus: hz8r.pst || 0,
                fee: hz8r.fee || 0,
                version: hz8r.v || 0,
                eq: hz8r.eq,
                songType: hz8r.t || 0,
                mst: hz8r.mst,
                score: hz8r.pop || 0,
                ftype: hz8r.ftype,
                rtUrls: hz8r.rtUrls,
                transNames: hz8r.tns,
                privilege: hz8r.privilege,
                lyrics: hz8r.lyrics
            };
            return eh7a
        }
    }
    ;
    l4p.cxX7Q = function() {
        var f4j = a3x.nl0x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f4j);
        h4l.s4w(f4j, "click", function(d4h) {
            h4l.bh5m(d4h);
            a3x.cC6w(f4j)
        })
    }
    ;
    l4p.kE9v = function(cB5G) {
        if (cB5G < 1e5) {
            return cB5G
        } else {
            return Math.floor(cB5G / 1e4) + "万"
        }
    }
    ;
    l4p.sK2x = function(cB5G, cJ6D) {
        return "<i>" + (cB5G ? "(" + cB5G + ")" : cJ6D) + "</i>"
    }
    ;
    l4p.bKQ5V = function(t4x, hu8m) {
        var e4i = {};
        if (!k4o.kW9N(hu8m)) {
            return e4i
        }
        switch (parseInt(t4x)) {
        case 17:
            e4i.title = hu8m.name;
            e4i.author = (hu8m.radio || []).name;
            e4i.picUrl = hu8m.coverUrl;
            e4i.category = hu8m.radio.category;
            break;
        case 19:
            e4i.title = hu8m.name;
            e4i.author = l4p.wJ3x(hu8m.artists);
            e4i.authors = l4p.wJ3x(hu8m.artists, " / ");
            e4i.picUrl = hu8m.picUrl;
            break;
        case 13:
            e4i.title = hu8m.name;
            e4i.author = (hu8m.creator || []).nickname;
            e4i.picUrl = hu8m.coverImgUrl;
            break;
        case 18:
            e4i.title = hu8m.name;
            e4i.author = l4p.wJ3x(hu8m.artists);
            e4i.picUrl = (hu8m.album || []).picUrl;
            break;
        case 20:
            e4i.title = hu8m.name;
            e4i.author = "";
            e4i.picUrl = hu8m.img1v1Url;
            break;
        case 21:
            e4i.title = hu8m.name;
            e4i.author = hu8m.artistName;
            e4i.authors = l4p.wJ3x(hu8m.artists, " / ");
            e4i.picUrl = hu8m.newCover || hu8m.cover;
            break;
        case 70:
            e4i.title = hu8m.name;
            e4i.author = (hu8m.dj || []).nickname;
            e4i.picUrl = hu8m.picUrl;
            e4i.category = hu8m.category;
            break;
        default:
            break
        }
        return e4i
    }
    ;
    l4p.bLf5k = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    }
    ;
    l4p.crR5W = function(eB7u, vS3x, e4i) {
        var bM5R, bg5l, o4s;
        var ju9l = null;
        var Ss1x = 0;
        if (!e4i)
            e4i = {};
        var SX1x = function() {
            Ss1x = e4i.leading === false ? 0 : +(new Date);
            ju9l = null;
            o4s = eB7u.apply(bM5R, bg5l);
            if (!ju9l)
                bM5R = bg5l = null
        };
        return function() {
            var fT8L = +(new Date);
            if (!Ss1x && e4i.leading === false)
                Ss1x = fT8L;
            var bcv6p = vS3x - (fT8L - Ss1x);
            bM5R = this;
            bg5l = arguments;
            if (bcv6p <= 0 || bcv6p > vS3x) {
                if (ju9l) {
                    clearTimeout(ju9l);
                    ju9l = null
                }
                Ss1x = fT8L;
                o4s = eB7u.apply(bM5R, bg5l);
                if (!ju9l)
                    bM5R = bg5l = null
            } else if (!ju9l && e4i.trailing !== false) {
                ju9l = setTimeout(SX1x, bcv6p)
            }
            return o4s
        }
    }
    ;
    l4p.Sj1x = function(eB7u, vS3x, rm1x) {
        var ju9l, bg5l, bM5R, Sh1x, o4s;
        var SX1x = function() {
            var gJ8B = new Date - Sh1x;
            if (gJ8B < vS3x && gJ8B >= 0) {
                ju9l = setTimeout(SX1x, vS3x - gJ8B)
            } else {
                ju9l = null;
                if (!rm1x) {
                    o4s = eB7u.apply(bM5R, bg5l);
                    if (!ju9l)
                        bM5R = bg5l = null
                }
            }
        };
        return function() {
            bM5R = this;
            bg5l = arguments;
            Sh1x = new Date;
            var bdD6x = rm1x && !ju9l;
            if (!ju9l)
                ju9l = setTimeout(SX1x, vS3x);
            if (bdD6x) {
                o4s = eB7u.apply(bM5R, bg5l);
                bM5R = bg5l = null
            }
            return o4s
        }
    }
    ;
    l4p.Se1x = function(f4j, hq8i) {
        if (f4j) {
            var f4j = f4j.firstElementChild;
            if (f4j) {
                f4j.firstElementChild && (f4j = f4j.firstElementChild);
                f4j.setAttribute("xlink:href", "/style/pc/svg/" + hq8i)
            }
        }
    }
    ;
    l4p.bMi5n = function(eM7F) {
        if (!eM7F || !eM7F.length) {
            return
        }
        eM7F = /^#(.+?)#$/.exec(eM7F)[1];
        eM7F = eM7F.replace(/\s/g, " ");
        w4A.bp5u("/api/act/detail", {
            type: "json",
            method: "post",
            data: k4o.db6V({
                actname: eM7F
            }),
            onload: function(P4T) {
                if (!P4T || P4T.code != 200 || !P4T.act) {
                    n4r.X5c.M4Q({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + P4T.act.actId)
                }
            },
            onerror: function(bU5Z) {
                n4r.X5c.M4Q({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    }
    ;
    l4p.bdH6B = function(Sb1x, yq4u) {
        if (!Sb1x || !yq4u)
            return false;
        if (Sb1x == yq4u)
            return true;
        return l4p.bdH6B(Sb1x, yq4u.parentNode)
    }
    ;
    a3x.cn5s = function(bE5J, iT9K) {
        if (!bE5J)
            return null;
        if (!iT9K)
            return bE5J.firstChild;
        return a3x.I4M(bE5J, iT9K)[0]
    }
    ;
    l4p.bMz5E = function(hW8O) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hW8O)
    }
    ;
    l4p.bMD5I = function(hW8O, Sa1x) {
        Sa1x = Sa1x || "86";
        if (Sa1x == "86")
            return /^\d{11}$/.test(hW8O);
        return /^\d+$/.test(hW8O)
    }
    ;
    l4p.cxY7R = function(sU2x) {
        if (!sU2x) {
            return "0b"
        }
        var crP5U = ["Bytes", "KB", "MB", "GB"];
        var ba5f = Math.floor(Math.log(sU2x) / Math.log(1024));
        return (sU2x / Math.pow(1024, Math.floor(ba5f))).toFixed(ba5f == 1 ? 0 : 1) + crP5U[ba5f]
    }
    ;
    l4p.bMK5P = function(du6o, fl7e, crO5T) {
        if (!du6o)
            return du6o;
        var do6i = k4o.fc7V(du6o);
        if (do6i <= fl7e)
            return du6o;
        var bel6f = do6i - du6o.length
          , beW7P = du6o.length - bel6f;
        var fQ8I = Math.ceil(fl7e / 2)
          , crM5R = fl7e
          , bNo6i = 0;
        if (bel6f < fQ8I)
            fQ8I = fl7e - bel6f;
        if (beW7P < fl7e)
            fl7e = beW7P + Math.ceil((fl7e - beW7P) / 2);
        while (fQ8I <= fl7e) {
            bNo6i = k4o.fc7V(du6o.substr(0, fQ8I));
            var bfQ7J = crM5R - bNo6i;
            if (bfQ7J == 0)
                break;
            if (bfQ7J == 1) {
                var crL5Q = k4o.fc7V(du6o.charAt(fQ8I));
                if (crL5Q == 1) {
                    fQ8I++;
                    break
                } else {
                    break
                }
            }
            fQ8I += Math.floor(bfQ7J / 2)
        }
        return du6o.substr(0, fQ8I) + (!!crO5T ? "" : "...")
    }
    ;
    l4p.crI5N = function(bm5r) {
        bm5r = bm5r || 10;
        var cz5E = "";
        for (var i = 0; i < bm5r; i++) {
            cz5E += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cz5E
    }
    ;
    var crH5M = /([A-Za-z0-9 \.\-\(\)\!\?])/
      , crG5L = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/
      , crF5K = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bNN6H = function(crE5J) {
        var bm5r = k4o.zK4O(1, 5)
          , crB5G = Math.random() < .5
          , ig8Y = "";
        if (crE5J) {
            if (crB5G) {
                while (bm5r >= 0) {
                    ig8Y += crF5K[k4o.zK4O(0, 500)];
                    bm5r--
                }
            } else {
                ig8Y = l4p.crI5N(bm5r)
            }
        } else {
            ig8Y = k4o.MK8C(bm5r)
        }
        return '<div class="soil">' + ig8Y + "</div>"
    };
    l4p.bDA3x = function(dV7O) {
        dV7O = k4o.GS6M(dV7O);
        try {
            var bm5r = dV7O.length
              , r4v = k4o.zK4O(1, bm5r - 1);
            while (r4v < bm5r) {
                if (crG5L.test(dV7O.charAt(r4v))) {
                    return k4o.dI7B(dV7O.slice(0, r4v)) + bNN6H(true) + k4o.dI7B(dV7O.slice(r4v))
                } else if (crH5M.test(dV7O.charAt(r4v))) {
                    return k4o.dI7B(dV7O.slice(0, r4v)) + bNN6H() + k4o.dI7B(dV7O.slice(r4v))
                } else {
                    r4v++
                }
            }
            return k4o.dI7B(dV7O)
        } catch (e) {
            return k4o.dI7B(dV7O)
        }
    }
    ;
    l4p.bhG7z = function(kn9e, lP0x) {
        return "//nos.netease.com/" + kn9e + "/" + lP0x
    }
    ;
    l4p.crA5F = function(fk7d) {
        var fd7W = /(.+)(\.[^\.]+$)/.exec(fk7d);
        return fd7W ? {
            filename: fd7W[1],
            suffix: fd7W[2]
        } : {
            filename: fk7d || "",
            suffix: ""
        }
    }
}
)();
(function() {
    var k4o = NEJ.P("nej.u");
    function crz5E() {
        var Ab4f = function(jt9k) {
            if (jt9k < -128) {
                return Ab4f(128 - (-128 - jt9k))
            } else if (jt9k >= -128 && jt9k <= 127) {
                return jt9k
            } else if (jt9k > 127) {
                return Ab4f(-129 + jt9k - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cry5D = function(jt9k, bf5k) {
            return Ab4f(jt9k + bf5k)
        };
        var crw5B = function(Th1x, bit7m) {
            if (Th1x == null) {
                return null
            }
            if (bit7m == null) {
                return Th1x
            }
            var qe1x = [];
            var crv5A = bit7m.length;
            for (var i = 0, bm5r = Th1x.length; i < bm5r; i++) {
                qe1x[i] = cry5D(Th1x[i], bit7m[i % crv5A])
            }
            return qe1x
        };
        var cru5z = function(Tm1x) {
            if (Tm1x == null) {
                return Tm1x
            }
            var qe1x = [];
            var crs5x = Tm1x.length;
            for (var i = 0, bm5r = crs5x; i < bm5r; i++) {
                qe1x[i] = Ab4f(0 - Tm1x[i])
            }
            return qe1x
        };
        var crr5w = function(bmg8Y, Ry1x) {
            bmg8Y = Ab4f(bmg8Y);
            Ry1x = Ab4f(Ry1x);
            return Ab4f(bmg8Y ^ Ry1x)
        };
        var bQL8D = function(Rx1x, bmM9D) {
            if (Rx1x == null || bmM9D == null || Rx1x.length != bmM9D.length) {
                return Rx1x
            }
            var qe1x = [];
            var crp5u = Rx1x.length;
            for (var i = 0, bm5r = crp5u; i < bm5r; i++) {
                qe1x[i] = crr5w(Rx1x[i], bmM9D[i])
            }
            return qe1x
        };
        var btV0x = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cro5t = function(dh6b) {
            var JN7G = [];
            JN7G.push(btV0x[dh6b >>> 4 & 15]);
            JN7G.push(btV0x[dh6b & 15]);
            return JN7G.join("")
        };
        var bue1x = function(sU2x) {
            var bm5r = sU2x.length;
            if (sU2x == null || bm5r < 0) {
                return new String("")
            }
            var JN7G = [];
            for (var i = 0; i < bm5r; i++) {
                JN7G.push(cro5t(sU2x[i]))
            }
            return JN7G.join("")
        };
        var bul1x = function(Tv1x) {
            if (Tv1x == null || Tv1x.length == 0) {
                return Tv1x
            }
            var bqh0x = new String(Tv1x);
            var qe1x = [];
            var bm5r = bqh0x.length / 2;
            var bf5k = 0;
            for (var i = 0; i < bm5r; i++) {
                var oa0x = parseInt(bqh0x.charAt(bf5k++), 16) << 4;
                var ob0x = parseInt(bqh0x.charAt(bf5k++), 16);
                qe1x[i] = Ab4f(oa0x + ob0x)
            }
            return qe1x
        };
        var bur1x = function(cz5E) {
            if (cz5E == null || cz5E == undefined) {
                return cz5E
            }
            var Re0x = encodeURIComponent(cz5E);
            var sU2x = [];
            var buw1x = Re0x.length;
            for (var i = 0; i < buw1x; i++) {
                if (Re0x.charAt(i) == "%") {
                    if (i + 2 < buw1x) {
                        sU2x.push(bul1x(Re0x.charAt(++i) + "" + Re0x.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    sU2x.push(Re0x.charCodeAt(i))
                }
            }
            return sU2x
        };
        var crn5s = function(uL2x) {
            var ba5f = 0;
            ba5f += (uL2x[0] & 255) << 24;
            ba5f += (uL2x[1] & 255) << 16;
            ba5f += (uL2x[2] & 255) << 8;
            ba5f += uL2x[3] & 255;
            return ba5f
        };
        var cxZ7S = function(ba5f) {
            var uL2x = [];
            uL2x[0] = ba5f >>> 24 & 255;
            uL2x[1] = ba5f >>> 16 & 255;
            uL2x[2] = ba5f >>> 8 & 255;
            uL2x[3] = ba5f & 255;
            return uL2x
        };
        var crl5q = function(dz6t, btG0x, bm5r) {
            var eh7a = [];
            if (dz6t == null || dz6t.length == 0) {
                return eh7a
            }
            if (dz6t.length < bm5r) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm5r; i++) {
                eh7a[i] = dz6t[btG0x + i]
            }
            return eh7a
        };
        var bbY6S = function(dz6t, btG0x, qS1x, crk5p, bm5r) {
            if (dz6t == null || dz6t.length == 0) {
                return qS1x
            }
            if (qS1x == null) {
                throw new Error("1004")
            }
            if (dz6t.length < bm5r) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm5r; i++) {
                qS1x[crk5p + i] = dz6t[btG0x + i]
            }
            return qS1x
        };
        var cri5n = function(bm5r) {
            var bs5x = [];
            for (var i = 0; i < bm5r; i++) {
                bs5x[i] = 0
            }
            return bs5x
        };
        var crf5k = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var JF7y = 64;
        var TC1x = 64;
        var buZ1x = 4;
        var cre5j = function(qb1x) {
            var bvh1x = [];
            if (qb1x == null || qb1x == undefined || qb1x.length == 0) {
                return cri5n(TC1x)
            }
            if (qb1x.length >= TC1x) {
                return crl5q(qb1x, 0, TC1x)
            } else {
                for (var i = 0; i < TC1x; i++) {
                    bvh1x[i] = qb1x[i % qb1x.length]
                }
            }
            return bvh1x
        };
        var crc5h = function(TS1x) {
            if (TS1x == null || TS1x.length % JF7y != 0) {
                throw new Error("1005")
            }
            var beD6x = [];
            var bf5k = 0;
            var cqZ5e = TS1x.length / JF7y;
            for (var i = 0; i < cqZ5e; i++) {
                beD6x[i] = [];
                for (var j = 0; j < JF7y; j++) {
                    beD6x[i][j] = TS1x[bf5k++]
                }
            }
            return beD6x
        };
        var cqY5d = function(bvH1x) {
            var oa0x = bvH1x >>> 4 & 15;
            var ob0x = bvH1x & 15;
            var bf5k = oa0x * 16 + ob0x;
            return crf5k[bf5k]
        };
        var bvI1x = function(beJ7C) {
            if (beJ7C == null) {
                return null
            }
            var bvO1x = [];
            for (var i = 0, bm5r = beJ7C.length; i < bm5r; i++) {
                bvO1x[i] = cqY5d(beJ7C[i])
            }
            return bvO1x
        };
        var bvU1x = function(Jy7r, qb1x) {
            if (Jy7r == null) {
                return null
            }
            if (Jy7r.length == 0) {
                return []
            }
            if (Jy7r.length % JF7y != 0) {
                throw new Error("1005")
            }
            qb1x = cre5j(qb1x);
            var bfd7W = qb1x;
            var bfm7f = crc5h(Jy7r);
            var Qr0x = [];
            var cqV5a = bfm7f.length;
            for (var i = 0; i < cqV5a; i++) {
                var bgj7c = bvI1x(bfm7f[i]);
                bgj7c = bvI1x(bgj7c);
                var bgv7o = bQL8D(bgj7c, bfd7W);
                var cqU5Z = crw5B(bgv7o, cru5z(bfd7W));
                bgv7o = bQL8D(cqU5Z, qb1x);
                bbY6S(bgv7o, 0, Qr0x, i * JF7y, JF7y);
                bfd7W = bfm7f[i]
            }
            var bwn1x = [];
            bbY6S(Qr0x, Qr0x.length - buZ1x, bwn1x, 0, buZ1x);
            var bm5r = crn5s(bwn1x);
            if (bm5r > Qr0x.length) {
                throw new Error("1006")
            }
            var qe1x = [];
            bbY6S(Qr0x, 0, qe1x, 0, bm5r);
            return qe1x
        };
        var cqT5Y = function(Ub2x, J4N) {
            if (Ub2x == null) {
                return null
            }
            var bwy1x = new String(Ub2x);
            if (bwy1x.length == 0) {
                return []
            }
            var Jy7r = bul1x(bwy1x);
            if (J4N == null || J4N == undefined) {
                throw new Error("1007")
            }
            var qb1x = bur1x(J4N);
            return bvU1x(Jy7r, qb1x)
        };
        this.cqS5X = function(Ub2x, J4N) {
            var bhk7d = cqT5Y(Ub2x, J4N);
            var Ee5j = new String(bue1x(bhk7d));
            var xx3x = [];
            var bhr7k = Ee5j.length / 2;
            var bf5k = 0;
            for (var i = 0; i < bhr7k; i++) {
                xx3x.push("%");
                xx3x.push(Ee5j.charAt(bf5k++));
                xx3x.push(Ee5j.charAt(bf5k++))
            }
            return xx3x.join("")
        }
        ;
        k4o.crW5b = function(bhJ7C, J4N) {
            return k4o.cqR5W(k4o.cvX6R(bhJ7C), J4N)
        }
        ;
        k4o.cqR5W = function(bhJ7C, J4N) {
            var bhk7d = bvU1x(bhJ7C, bur1x(J4N));
            var Ee5j = new String(bue1x(bhk7d));
            var xx3x = [];
            var bhr7k = Ee5j.length / 2;
            var bf5k = 0;
            for (var i = 0; i < bhr7k; i++) {
                xx3x.push("%");
                xx3x.push(Ee5j.charAt(bf5k++));
                xx3x.push(Ee5j.charAt(bf5k++))
            }
            return xx3x.join("")
        }
    }
    window.settmusic = (new crz5E).cqS5X
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, G4K = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), w4A = c4g("nej.j"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), J4N = "Search-tracks_", b4f;
    p4t.eY7R({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(P4T) {
                return P4T
            },
            onerror: function(P4T, e4i) {
                if (P4T.code == 407) {
                    e4i.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e4i, bd5i) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cqO5T(parseInt(e4i.data.type)) || "suggest",
                    keyword: e4i.data.s,
                    offset: e4i.offset
                })
            },
            format: function(P4T, e4i) {
                if (P4T.abroad) {
                    try {
                        P4T.result = JSON.parse(decodeURIComponent(settmusic(P4T.result, p4t.sk)))
                    } catch (e) {}
                }
                P4T.result = P4T.result || {};
                var i4m, co5t, iR9I = [], ty2x = e4i.data.s || "", gc8U = e4i.data.limit, t4x = parseInt(e4i.data.type) || 1, o4s = P4T.result;
                switch (t4x) {
                case 1:
                    i4m = this.bxv1x(o4s.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                    co5t = o4s.songCount;
                    break;
                case 10:
                    i4m = o4s.albums;
                    co5t = o4s.albumCount;
                    break;
                case 100:
                    i4m = o4s.artists;
                    co5t = o4s.artistCount;
                    break;
                case 1e3:
                    i4m = o4s.playlists;
                    co5t = o4s.playlistCount;
                    break;
                case 1002:
                    i4m = o4s.userprofiles;
                    co5t = o4s.userprofileCount;
                    break;
                case 1004:
                    i4m = o4s.mvs;
                    co5t = o4s.mvCount;
                    break;
                case 1006:
                    i4m = this.bxv1x(o4s.songs, e4i.data.hlpretag, e4i.data.hlposttag);
                    co5t = o4s.songCount;
                    break;
                case 1009:
                    var pZ1x = o4s.djRadios;
                    if (!!pZ1x) {
                        k4o.bb5g(pZ1x, function(C4G, r4v, cqL5Q) {
                            C4G.xid = C4G.id;
                            C4G.id = C4G.id + "_rad"
                        });
                        if (pZ1x.length) {
                            this.uc2x("radio_search-" + e4i.data.s, pZ1x)
                        }
                    }
                    co5t = Math.min(o4s.djprogramCount, 500);
                    i4m = o4s.djprograms || [];
                    if (e4i.data.isPub) {
                        k4o.mq0x(pZ1x, function(C4G, r4v, cqL5Q) {
                            C4G.stype = 1;
                            i4m.unshift(C4G)
                        });
                        co5t = Math.min(i4m.length, 500)
                    }
                    break
                }
                this.y4C("onsearchload", P4T);
                if (i4m && i4m.length) {
                    for (var i = 0; i < gc8U; i++) {
                        if (i < i4m.length) {
                            iR9I.push(i4m[i])
                        } else {
                            iR9I.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(co5t || 0, ty2x.length < 3 ? 500 : 5e3),
                    list: iR9I
                }
            },
            onerror: function(P4T, e4i) {
                e4i.onload(e4i, []);
                if (k4o.gb8T(e4i.onerror)) {
                    e4i.onerror(P4T)
                }
            }
        }
    });
    p4t.Es5x = NEJ.C();
    b4f = p4t.Es5x.O4S(p4t.he8W);
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.cqK5P = function(J4N, e4i) {
        if (!J4N)
            return;
        if (!!this.bxK1x)
            w4A.jy9p(this.bxK1x);
        this.bxK1x = this.ch5m("search-suggest", NEJ.X({
            data: {
                s: J4N,
                limit: 8
            }
        }, e4i))
    }
    ;
    b4f.cqJ5O = function(J4N, e4i) {
        if (!J4N)
            return;
        this.ch5m("search-multimatch", NEJ.X({
            data: {
                s: J4N
            }
        }, e4i))
    }
    ;
    b4f.bxv1x = function() {
        var cqG5L = function(hd8V, bxQ2x, bxR2x) {
            var cqF5K = hd8V.match(new RegExp(bxQ2x + "(.+?)" + bxR2x,"gi"))
              , cB5G = 0;
            k4o.bb5g(cqF5K, function(q4u) {
                cB5G += q4u.replace(new RegExp(bxQ2x,"g"), "").replace(new RegExp(bxR2x,"g"), "").length
            });
            return cB5G
        };
        return function(iN9E, cqC5H, cqx5C) {
            var bya2x = [];
            k4o.bb5g(iN9E, function(be5j, ba5f) {
                be5j = l4p.Fn6h(be5j);
                var Uv2x = be5j.lyrics || [], do6i = Uv2x.length, jm9d = 0, co5t = 4, Ux2x = {
                    l: 0,
                    v: 0
                }, bkO8G;
                if (do6i > 4) {
                    k4o.bb5g(Uv2x, function(hd8V, r4v) {
                        var byo2x = cqG5L(hd8V, cqC5H, cqx5C);
                        if (byo2x > Ux2x.v) {
                            Ux2x.v = byo2x;
                            Ux2x.l = r4v
                        }
                    });
                    jm9d = Ux2x.l;
                    jm9d = Math.max(jm9d, 0);
                    bkO8G = do6i - jm9d - 4;
                    if (bkO8G < 0)
                        jm9d += bkO8G;
                    be5j.lrcAbstractEnd = jm9d + co5t - 1
                } else {
                    be5j.lrcAbstractEnd = do6i - 1
                }
                be5j.lrcAbstractStart = jm9d;
                be5j.indexId = (Uv2x && Uv2x.length ? "L" : "NL") + be5j.id;
                bya2x.push(be5j)
            });
            return bya2x
        }
    }();
    b4f.cqO5T = function(t4x) {
        switch (t4x) {
        case 1:
            return "song";
            break;
        case 100:
            return "artist";
            break;
        case 10:
            return "album";
            break;
        case 1004:
            return "mv";
            break;
        case 1006:
            return "lyric";
            break;
        case 1e3:
            return "list";
            break;
        case 1009:
            return "djradio";
            break;
        case 1002:
            return "user";
            break;
        default:
            return "suggest";
            break
        }
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), w4A = c4g("nej.j"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), E4I = c4g("nm.m"), n4r = c4g("nm.l"), di6c = c4g("nm.i"), L4P = c4g("nm.m.sch"), b4f, K4O;
    var UF2x = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3,
        mvs: 1004
    };
    L4P.Py0x = NEJ.C();
    b4f = L4P.Py0x.O4S(G4K.cy5D);
    b4f.cq5v = function(f4j) {
        this.cu5z();
        this.bR5W(f4j);
        this.R5W = p4t.Es5x.fX8P()
    }
    ;
    b4f.bR5W = function(f4j) {
        this.m4q = f4j;
        var i4m = a3x.I4M(f4j, "j-flag");
        this.eC7v = i4m[0];
        this.blq8i = i4m[1];
        this.cf5k = i4m[2];
        this.mI0x = i4m[3];
        h4l.s4w(this.eC7v, "input", this.fF8x.g4k(this));
        h4l.s4w(this.eC7v, "keyup", this.fF8x.g4k(this));
        h4l.s4w(this.eC7v, "focus", this.gk8c.g4k(this));
        h4l.s4w(this.blq8i, "click", this.gk8c.g4k(this));
        h4l.s4w(this.eC7v, "blur", this.blx8p.g4k(this));
        h4l.s4w(this.cf5k, "click", this.UJ2x.g4k(this));
        h4l.s4w(this.m4q, "keydown", this.blA8s.g4k(this));
        h4l.s4w(this.m4q, "keypress", this.UO2x.g4k(this));
        h4l.s4w(this.mI0x, "mouseover", this.Po0x.g4k(this));
        h4l.s4w(this.mI0x, "mouseout", this.Po0x.g4k(this));
        if (this.eC7v.value) {
            this.eC7v.value = ""
        }
        if (this.eC7v.style.opacity != null) {
            this.eC7v.style.opacity = 1
        }
    }
    ;
    b4f.fF8x = function(d4h) {
        if (d4h.type == "keyup" && d4h.keyCode == 8 || d4h.keyCode == 46) {
            this.EY6S()
        } else if (d4h.type == "input" || d4h.type == "propertychange") {
            setTimeout(this.EY6S.g4k(this), 0)
        }
    }
    ;
    b4f.gk8c = function() {
        this.wY3x(this.blq8i, !1);
        a3x.x4B(this.m4q, "m-srch-fcs");
        this.eC7v.focus();
        this.EY6S();
        a3x.x4B(a3x.I4M("g-topbar", "j-showoff")[0], "f-hide")
    }
    ;
    b4f.blx8p = function() {
        if (!this.eC7v.value) {
            this.wY3x(this.blq8i, !0)
        }
        var Fa6U = a3x.I4M(this.mI0x, "slt");
        if (this.UQ2x(this.mI0x) && Fa6U.length > 0 && a3x.u4y(Fa6U[0], "type")) {
            var hq8i = Fa6U[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hq8i)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.eC7v.value
                })
            }
            this.bmC9t(Fa6U[0].href)
        }
        this.wY3x(this.mI0x, !1);
        a3x.v4z(this.m4q, "m-srch-fcs")
    }
    ;
    b4f.wY3x = function(f4j, lo9f) {
        a3x.Z5e(f4j, "display", !lo9f ? "none" : "")
    }
    ;
    b4f.UQ2x = function(f4j) {
        return a3x.dc6W(f4j, "display") != "none"
    }
    ;
    b4f.EY6S = function() {
        var Fl6f = function(tL2x, cJ6D) {
            if (!cJ6D)
                return;
            return cJ6D.replace(new RegExp(l4p.bES3x(tL2x),"gi"), function($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var cqu5z = function(hW8O) {
            var fv7o = this.m4q.clientWidth > 250 ? 41 : 17;
            if (l4p.Sm1x(hW8O) > fv7o) {
                return l4p.zN4R(hW8O, fv7o) + "..."
            } else {
                return hW8O
            }
        };
        var US2x = function(o4s) {
            return o4s.songs && o4s.songs.length || o4s.albums && o4s.albums.length || o4s.artists && o4s.artists.length || o4s.playlists && o4s.playlists.length
        };
        var to2x = function(tL2x, d4h) {
            if (!l4p.bEI3x(this.eC7v) || l4p.jq9h(this.eC7v.value)) {
                this.wY3x(this.mI0x, !1);
                return
            }
            d4h.keyword = k4o.dI7B(tL2x);
            var dD7w = a3x.bW5b("m-search-suggest", d4h, {
                mark: Fl6f.g4k(this, tL2x),
                cutStr: cqu5z.g4k(this)
            })
              , rO1x = d4h.result.order;
            this.mI0x.innerHTML = dD7w;
            this.wY3x(this.mI0x, US2x(d4h.result) ? !0 : !1);
            if (!!rO1x && !!rO1x.length && UF2x[rO1x[0]]) {
                this.bnk9b = {
                    keyword: tL2x,
                    type: UF2x[rO1x[0]]
                }
            }
        };
        var cqt5y = function() {
            this.wY3x(this.mI0x, !1);
            return
        };
        return function() {
            var C4G = this.eC7v.value;
            if (l4p.jq9h(C4G)) {
                this.wY3x(this.mI0x, !1);
                return
            }
            this.R5W.cqK5P(C4G, {
                onload: to2x.g4k(this, C4G),
                onForbidden: cqt5y.g4k(this)
            })
        }
    }();
    b4f.UO2x = function(d4h) {
        if (d4h.keyCode != 13)
            return;
        var Fa6U = a3x.I4M(this.mI0x, "slt");
        if (this.UQ2x(this.mI0x) && Fa6U.length > 0) {
            this.bmC9t(Fa6U[0].href);
            this.wY3x(this.mI0x, !1);
            return
        }
        this.UJ2x();
        this.wY3x(this.mI0x, !1)
    }
    ;
    b4f.blA8s = function(d4h) {
        if (!this.UQ2x(this.mI0x))
            return;
        var i4m = a3x.I4M(this.mI0x, "xtag")
          , do6i = i4m.length
          , r4v = k4o.cV6P(i4m, function(q4u) {
            return a3x.bz5E(q4u, "slt")
        });
        switch (d4h.keyCode) {
        case 38:
            if (r4v >= 0)
                a3x.v4z(i4m[r4v], "slt");
            a3x.x4B(i4m[r4v <= 0 ? do6i - 1 : r4v - 1], "slt");
            break;
        case 40:
            if (r4v >= 0)
                a3x.v4z(i4m[r4v], "slt");
            a3x.x4B(i4m[(r4v + 1) % do6i], "slt");
            break
        }
    }
    ;
    b4f.Po0x = function(d4h) {
        if (!this.UQ2x(this.mI0x))
            return;
        var Pg0x, F4J = h4l.U5Z(d4h), i4m = a3x.I4M(this.mI0x, "xtag");
        if (F4J.tagName.toLowerCase() == "a")
            Pg0x = F4J;
        else if (F4J.parentNode.tagName.toLowerCase() == "a")
            Pg0x = F4J.parentNode;
        if (!Pg0x)
            return;
        k4o.bb5g(i4m, function(q4u) {
            a3x.v4z(q4u, "slt");
            a3x.u4y(q4u, "type", "")
        });
        if (d4h.type == "mouseout")
            return;
        a3x.x4B(Pg0x, "slt");
        a3x.u4y(Pg0x, "type", "mouse")
    }
    ;
    b4f.UJ2x = function() {
        var dN7G = location.hash
          , r4v = dN7G.indexOf("?")
          , bw5B = k4o.hx8p(dN7G.substring(r4v + 1));
        bw5B.s = this.eC7v.value;
        if (l4p.jq9h(bw5B.s))
            return;
        if (!bw5B.type && this.bnk9b && this.bnk9b.keyword == bw5B.s) {
            bw5B.type = this.bnk9b.type
        }
        this.bmC9t("/search/#/?" + k4o.db6V(bw5B));
        this.eC7v.blur()
    }
    ;
    b4f.bmC9t = function(W5b) {
        if (location.dispatch2) {
            location.dispatch2(W5b)
        } else {
            location.href = W5b
        }
    }
    ;
    L4P.Py0x.cqs5x = function() {
        var i4m = a3x.I4M(document.body, "j-suggest");
        k4o.bb5g(i4m, function(q4u) {
            new L4P.Py0x(q4u)
        })
    }
    ;
    L4P.Py0x.cqs5x()
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, G4K = c4g("nej.ut"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), w4A = c4g("nej.j"), p4t = c4g("nm.d"), b4f;
    p4t.eY7R({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(P4T) {
                return {
                    total: P4T.size || 0,
                    list: P4T.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(P4T) {
                return {
                    total: P4T.size || 0,
                    list: P4T.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(P4T) {
                return P4T.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(P4T, e4i) {
                if (e4i.offset == 0) {
                    var oF0x = P4T.data[0];
                    this.y4C("onfirstload", oF0x);
                    P4T.data.splice(0, 1);
                    return P4T.data
                } else {
                    return P4T.data
                }
            }
        }
    });
    p4t.Fx6r = NEJ.C();
    b4f = p4t.Fx6r.O4S(p4t.he8W);
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.bpp9g = function() {
        var rR1x = "LOCAL_FLAG";
        return function(t4x, cqr5w) {
            var j4n = this.CY5d(rR1x, {});
            if (j4n[t4x]) {
                return true
            } else {
                if (!cqr5w) {
                    j4n[t4x] = true;
                    this.vy3x(rR1x, j4n)
                }
                return false
            }
        }
    }()
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), bpD9u;
    if (!!N4R.nN0x)
        return;
    N4R.nN0x = NEJ.C();
    bpD9u = N4R.nN0x.O4S(N4R.cy5D);
    bpD9u.bj5o = function() {
        var cqq5v = function(d4h) {
            d4h.matched = d4h.source == d4h.target
        };
        return function(e4i) {
            e4i.oncheck = e4i.oncheck || cqq5v;
            this.bk5p(e4i);
            this.bN5S = e4i.list;
            this.iC9t = e4i.dataset || "id";
            this.jJ9A = e4i.selected || "js-selected"
        }
    }();
    bpD9u.nO0x = function(C4G) {
        var F4J, d4h = {
            target: C4G
        };
        k4o.bb5g(this.bN5S, function(f4j) {
            delete d4h.matched;
            d4h.source = a3x.u4y(f4j, this.iC9t);
            this.y4C("oncheck", d4h);
            if (!d4h.matched) {
                a3x.v4z(f4j, this.jJ9A)
            } else {
                F4J = f4j;
                a3x.x4B(f4j, this.jJ9A)
            }
        }, this);
        return F4J
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, a3x = c4g("nej.e"), N4R = c4g("nej.ut"), oR1x;
    if (!!N4R.cQ6K)
        return;
    N4R.cQ6K = NEJ.C();
    oR1x = N4R.cQ6K.O4S(N4R.cy5D);
    oR1x.cq5v = function() {
        this.ik8c = {};
        this.cu5z();
        this.bG5L()
    }
    ;
    oR1x.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.bqJ0x = e4i.umi || "";
        this.zz4D = e4i.dispatcher;
        this.IO7H = e4i.composite || Y5d;
        this.bkF8x({
            onshow: this.eF7y.g4k(this),
            onhide: this.jD9u.g4k(this),
            onrefresh: this.ei7b.g4k(this),
            onmessage: this.pV1x.g4k(this),
            onbeforehide: this.cqp5u.g4k(this)
        })
    }
    ;
    oR1x.bA5F = function() {
        delete this.bqJ0x;
        this.ik8c = {};
        this.bF5K()
    }
    ;
    oR1x.tY2x = function(d4h) {
        if (!!d4h)
            d4h.stopped = !0
    }
    ;
    oR1x.bG5L = bo5t;
    oR1x.eF7y = bo5t;
    oR1x.jD9u = bo5t;
    oR1x.ei7b = bo5t;
    oR1x.pV1x = bo5t;
    oR1x.cqp5u = bo5t;
    oR1x.mn0x = function(oe0x, bC5H, eQ7J) {
        this.zz4D.brh0x({
            to: oe0x,
            mode: eQ7J || 0,
            data: bC5H,
            from: this.bqJ0x
        })
    }
    ;
    oR1x.cyb7U = function(t4x, j4n) {
        this.zz4D.zu4y(t4x, {
            from: this.bqJ0x,
            data: j4n
        })
    }
    ;
    oR1x.cyc7V = function() {
        this.zz4D.lH0x.apply(this.zz4D, arguments)
    }
    ;
    oR1x.cqm5r = function() {
        return this.ik8c
    }
    ;
    a3x.Vq2x = function() {
        if (!!window.dispatcher) {
            dispatcher.bBb2x.apply(dispatcher, arguments)
        }
    }
}
)();
(function() {
    var c4g = NEJ.P, bo5t = NEJ.F, Y5d = NEJ.O, a3x = c4g("nej.e"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), wB3x;
    if (!!N4R.de6Y)
        return;
    N4R.de6Y = NEJ.C();
    wB3x = N4R.de6Y.O4S(N4R.cQ6K);
    wB3x.cql5q = function(e4i) {
        var bE5J;
        if (!bE5J) {
            var j4n = e4i.input || Y5d;
            bE5J = a3x.z4D(j4n.parent)
        }
        if (!bE5J) {
            var j4n = e4i.data || Y5d;
            bE5J = a3x.z4D(j4n.parent)
        }
        if (!bE5J) {
            bE5J = a3x.z4D(e4i.parent)
        }
        return bE5J
    }
    ;
    wB3x.eF7y = function(e4i) {
        var bE5J = this.cql5q(e4i);
        if (!!bE5J && !!this.m4q)
            bE5J.appendChild(this.m4q);
        this.gd8V(e4i);
        this.bBl2x("onshow", e4i);
        this.ei7b(e4i)
    }
    ;
    wB3x.ei7b = function(e4i) {
        this.fR8J(e4i);
        this.bBl2x("onrefresh", e4i)
    }
    ;
    wB3x.jD9u = function() {
        this.ki9Z();
        this.cqk5p();
        a3x.mJ0x(this.m4q)
    }
    ;
    wB3x.bBw2x = function() {
        var gf8X = /^onshow|onrefresh|delay$/;
        return function(bY5d) {
            return gf8X.test(bY5d)
        }
    }();
    wB3x.bBz2x = bo5t;
    wB3x.bBl2x = function() {
        var bBH3x = function(bw5B, e4i, bY5d, ph1x) {
            if (this.bBw2x(ph1x))
                return;
            if (!!bw5B)
                bY5d += (bY5d.indexOf("?") > 1 ? "&" : "?") + bw5B;
            var cW6Q = this.bBz2x(ph1x, e4i) || {};
            cW6Q.location = e4i;
            cW6Q.parent = this.ik8c[ph1x];
            this.zz4D.hN8F(bY5d, {
                input: cW6Q
            })
        };
        return function(t4x, e4i) {
            if (!e4i.nodelay) {
                if (!!this.IO7H.delay)
                    return;
                var bBJ3x = this.IO7H[t4x] || Y5d;
                if (bBJ3x.delay)
                    return
            }
            var bw5B = k4o.db6V(e4i.param) || "";
            if (t4x == "onrefresh") {
                k4o.eq7j(this.IO7H, bBH3x.g4k(this, bw5B, e4i))
            }
            k4o.eq7j(bBJ3x, bBH3x.g4k(this, bw5B, e4i))
        }
    }();
    wB3x.cqk5p = function() {
        var Bq4u = function(bY5d, ph1x) {
            if (!this.bBw2x(ph1x))
                this.zz4D.br5w(bY5d)
        };
        return function() {
            k4o.eq7j(this.IO7H, Bq4u, this);
            k4o.eq7j(this.IO7H.onshow, Bq4u, this);
            k4o.eq7j(this.IO7H.onrefresh, Bq4u, this)
        }
    }()
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), G4K = c4g("nej.ut"), w4A = c4g("nej.j"), k4o = c4g("nej.u"), E4I = c4g("nm.m"), l4p = c4g("nm.x"), p4t = c4g("nm.d"), b4f, K4O;
    E4I.OC0x = NEJ.C();
    b4f = E4I.OC0x.O4S(G4K.cy5D);
    b4f.cq5v = function() {
        this.cu5z();
        this.m4q = a3x.z4D("g-topbar");
        var i4m = a3x.I4M(this.m4q, "j-tflag");
        this.brK0x = i4m[0];
        this.Cb5g = i4m[1];
        this.bBO3x = i4m[2];
        this.bsb0x = i4m[3];
        this.cqj5o = G4K.nN0x.A4E({
            list: this.brK0x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bsF0x = G4K.nN0x.A4E({
            list: this.bsb0x.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bS5X([[this.m4q, "click", this.Ow9n.g4k(this)], [this.Cb5g, "click", this.cA5F.g4k(this)], [this.Cb5g, "mouseout", this.bCa3x.g4k(this, 0)], [this.Cb5g, "mouseover", this.bCa3x.g4k(this, 1)]]);
        window.scrollTopbar = this.cqi5n.g4k(this);
        window.matchNav = this.bCd3x.g4k(this);
        window.polling = this.uk2x.g4k(this);
        this.bth0x = p4t.Fx6r.A4E();
        this.cqh5m();
        this.II7B();
        var bw5B = k4o.hx8p(location.href.split("?")[1]) || {};
        if (bw5B.market) {
            a3x.z4D("topbar-download-link").href = "/download?market=" + bw5B.market
        }
        var bcb6V = a3x.I4M(this.m4q, "j-showoff");
        if (bcb6V && !this.bth0x.bpp9g("newMvSearch")) {
            a3x.v4z(bcb6V[0], "f-hide");
            window.setTimeout(function() {
                a3x.x4B(bcb6V[0], "f-hide")
            }, 5e3)
        }
    }
    ;
    b4f.uk2x = function(d4h) {
        var dN7G = l4p.JV7O();
        if (!/^\/msg/.test(dN7G)) {
            var vD3x = 0;
            vD3x += d4h.comment;
            vD3x += d4h.forward;
            vD3x += d4h.msg;
            vD3x += d4h.notice;
            if (vD3x > 0) {
                vD3x = vD3x > 99 ? "99+" : vD3x;
                this.Oh9Y.innerText = vD3x;
                this.IH7A.innerText = vD3x;
                a3x.v4z(this.Oh9Y, "f-hide");
                a3x.v4z(this.IH7A, "f-hide");
                this.VB2x = true
            } else {
                a3x.x4B(this.Oh9Y, "f-hide");
                a3x.x4B(this.IH7A, "f-hide");
                this.VB2x = false
            }
            var eE7x = "/at";
            if (d4h.notice)
                eE7x = "/notify";
            if (d4h.comment)
                eE7x = "/comment";
            if (d4h.msg > 0)
                eE7x = "/private";
            if (d4h.forward > 0)
                eE7x = "/at";
            this.IH7A.parentNode.href = "/msg/#" + eE7x
        } else {
            this.IH7A.parentNode.href = "javascript:;";
            a3x.x4B(this.Oh9Y, "f-hide");
            a3x.x4B(this.IH7A, "f-hide");
            this.VB2x = false
        }
        var i4m = a3x.I4M(this.brK0x, "j-t");
        if (!/^\/friend/.test(dN7G)) {
            if (i4m && i4m.length) {
                a3x.Z5e(i4m[0], "display", d4h.event > 0 ? "" : "none")
            }
        } else {
            a3x.Z5e(i4m[0], "display", "none")
        }
    }
    ;
    b4f.cA5F = function(d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        if (f4j) {
            switch (a3x.u4y(f4j, "action")) {
            case "login":
                h4l.ci5n(d4h);
                var t4x = a3x.u4y(f4j, "type");
                if (t4x) {
                    if (t4x == "sina" || t4x == "tencent")
                        top.open(f4j.href);
                    else
                        top.login(t4x == "mobile" ? 0 : 3)
                } else {
                    top.login()
                }
                break;
            case "logout":
                h4l.ci5n(d4h);
                top.logout();
                break;
            case "viewStore":
                if (!this.bth0x.bpp9g("storeNew")) {
                    a3x.x4B(this.cyd7W, "f-vhide")
                }
                break;
            case "viewLevel":
                if (!this.bth0x.bpp9g("levelNew")) {
                    a3x.x4B(this.cye7X, "f-vhide")
                }
                break
            }
        }
    }
    ;
    b4f.Ow9n = function(d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        if (!f4j)
            return;
        var V5a = a3x.u4y(f4j, "action");
        switch (V5a) {
        case "bilog":
            var bct6n = a3x.u4y(f4j, "logAction")
              , bcF6z = a3x.u4y(f4j, "logJson");
            window.log(bct6n, bcF6z);
            break
        }
    }
    ;
    b4f.bCa3x = function(IA7t, d4h) {
        if (this.bdc6W) {
            this.bdc6W.style.display = !IA7t ? "none" : "";
            (IA7t || !this.VB2x ? a3x.x4B : a3x.v4z).call(window, this.Oh9Y, "f-hide")
        }
    }
    ;
    b4f.cqi5n = function(fL8D) {
        a3x.Z5e(this.m4q, "top", -fL8D + "px")
    }
    ;
    b4f.bCd3x = function(eE7x, cqc5h) {
        this.cqj5o.nO0x(eE7x);
        if (eE7x == "discover") {
            a3x.x4B(this.bBO3x, "f-hide");
            a3x.v4z(this.bsb0x, "f-hide");
            window.g_topBarHeight = 105;
            this.bsF0x.nO0x(cqc5h)
        } else {
            a3x.v4z(this.bBO3x, "f-hide");
            a3x.x4B(this.bsb0x, "f-hide");
            window.g_topBarHeight = 75
        }
    }
    ;
    b4f.cqh5m = function() {
        var uC2x = a3x.z4D("g_iframe");
        if (!uC2x)
            return;
        var gq8i = uC2x.contentWindow.document.getElementById("g_top");
        this.bCd3x(a3x.u4y(gq8i, "module"), a3x.u4y(gq8i, "sub"))
    }
    ;
    var VU2x = {}
      , bDc3x = /\/\/\w+/
      , cqb5g = {
        avatarUrl: function(a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bDc3x, "") !== b.replace(bDc3x, "")
        },
        userId: true,
        nickname: true,
        reward: true,
        topic: true,
        djStatus: true
    };
    b4f.cqa5f = function(VV2x) {
        var ng0x = k4o.cV6P(cqb5g, function(C4G, J4N) {
            if (k4o.gb8T(C4G)) {
                return C4G(VV2x[J4N], VU2x[J4N])
            } else {
                return VV2x[J4N] !== VU2x[J4N]
            }
        });
        VU2x = VV2x;
        return VV2x[ng0x]
    }
    ;
    b4f.II7B = function() {
        var df6Z = GUser || {}
          , cpZ5e = GUserAcc || {};
        if (df6Z && df6Z.userId) {
            var bDl3x = NEJ.X(df6Z, cpZ5e);
            if (this.cqa5f(bDl3x)) {
                a3x.dJ7C(this.Cb5g, "m-topbar-user-login", bDl3x)
            }
        } else {
            VU2x = {};
            this.Cb5g.innerHTML = a3x.hZ8R("m-topbar-user-unlogin");
            var i4m = a3x.I4M(this.brK0x, "j-t");
            a3x.Z5e(i4m[0], "display", "none")
        }
        a3x.v4z(this.Cb5g, "f-hide");
        this.VB2x = false;
        var i4m = a3x.I4M(this.Cb5g, "j-uflag");
        if (df6Z && df6Z.userId) {
            this.Oh9Y = i4m.shift();
            this.bdc6W = i4m.shift();
            this.IH7A = i4m.shift()
        } else {
            this.bdc6W = i4m.shift()
        }
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, h4l = c4g("nej.v"), G4K = c4g("nej.ut"), p4t = c4g("nm.d"), b4f, K4O;
    p4t.eY7R({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function(P4T) {
                h4l.y4C(p4t.rw1x, "message", P4T)
            }
        }
    });
    p4t.rw1x = NEJ.C();
    b4f = p4t.rw1x.O4S(p4t.he8W);
    b4f.VX2x = function() {
        this.ch5m("polling-get", {})
    }
    ;
    b4f.uu2x = function() {
        var eD7w;
        return function() {
            if (!!eD7w)
                return;
            eD7w = window.setInterval(this.VX2x.g4k(this), 1e5);
            this.VX2x()
        }
    }();
    G4K.fu7n.A4E({
        event: "message",
        element: p4t.rw1x
    })
}
)();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    }
    )("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || "")
              , uri = {}
              , i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        }
        ;
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol
              , host = uri.host
              , port = uri.port;
            if ("document"in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        }
        ;
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || "")
              , components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        }
        ;
        util.chunkQuery = function(qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        }
        ;
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document"in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        }
        ;
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        }
        ;
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        }
        ;
        if ("undefined" != typeof window) {
            util.load(function() {
                pageLoaded = true
            })
        }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() {
                setTimeout(fn, 100)
            })
        }
        ;
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        }
        ;
        util.mixin = function(ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        }
        ;
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        }
        ;
        util.isArray = Array.isArray || function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        }
        ;
        util.intersect = function(arr, arr2) {
            var ret = []
              , longest = arr.length > arr2.length ? arr : arr2
              , shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i]))
                    ret.push(shortest[i])
            }
            return ret
        }
        ;
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        }
        ;
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++)
                arr.push(enu[i]);
            return arr
        }
        ;
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    }
    )("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        }
        ;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;
            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        }
        ;
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        }
        ;
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        }
        ;
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        }
        ;
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};
        function f(n) {
            return n < 10 ? "0" + n : n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
            case "string":
                return quote(value);
            case "number":
                return isFinite(value) ? String(value) : "null";
            case "boolean":
            case "null":
                return String(value);
            case "object":
                if (!value) {
                    return "null"
                }
                gap += indent;
                partial = [];
                if (Object.prototype.toString.apply(value) === "[object Array]") {
                    length = value.length;
                    for (i = 0; i < length; i += 1) {
                        partial[i] = str(i, value) || "null"
                    }
                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                    gap = mind;
                    return v
                }
                if (rep && typeof rep === "object") {
                    length = rep.length;
                    for (i = 0; i < length; i += 1) {
                        if (typeof rep[i] === "string") {
                            k = rep[i];
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                } else {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = str(k, value);
                            if (v) {
                                partial.push(quote(k) + (gap ? ": " : ":") + v)
                            }
                        }
                    }
                }
                v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                gap = mind;
                return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
        ;
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
    )("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON
          , indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type)
              , id = packet.id || ""
              , endpoint = packet.endpoint || ""
              , ack = packet.ack
              , data = null;
            switch (packet.type) {
            case "error":
                var reason = packet.reason ? indexOf(reasons, packet.reason) : ""
                  , adv = packet.advice ? indexOf(advice, packet.advice) : "";
                if (reason !== "" || adv !== "")
                    data = reason + (adv !== "" ? "+" + adv : "");
                break;
            case "message":
                if (packet.data !== "")
                    data = packet.data;
                break;
            case "event":
                var ev = {
                    name: packet.name
                };
                if (packet.args && packet.args.length) {
                    ev.args = packet.args
                }
                data = JSON.stringify(ev);
                break;
            case "json":
                data = JSON.stringify(packet.data);
                break;
            case "connect":
                if (packet.qs)
                    data = packet.qs;
                break;
            case "ack":
                data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined)
                encoded.push(data);
            return encoded.join(":")
        }
        ;
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1)
                return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        }
        ;
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces)
                return {};
            var id = pieces[2] || ""
              , data = pieces[5] || ""
              , packet = {
                type: packets[pieces[1]],
                endpoint: pieces[4] || ""
            };
            if (id) {
                packet.id = id;
                if (pieces[3])
                    packet.ack = "data";
                else
                    packet.ack = true
            }
            switch (packet.type) {
            case "error":
                var pieces = data.split("+");
                packet.reason = reasons[pieces[0]] || "";
                packet.advice = advice[pieces[1]] || "";
                break;
            case "message":
                packet.data = data || "";
                break;
            case "event":
                try {
                    var opts = JSON.parse(data);
                    packet.name = opts.name;
                    packet.args = opts.args
                } catch (e) {}
                packet.args = packet.args || [];
                break;
            case "json":
                try {
                    packet.data = JSON.parse(data)
                } catch (e) {}
                break;
            case "connect":
                packet.qs = data || "";
                break;
            case "ack":
                var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                if (pieces) {
                    packet.ackId = pieces[1];
                    packet.args = [];
                    if (pieces[3]) {
                        try {
                            packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                        } catch (e) {}
                    }
                }
                break;
            case "disconnect":
            case "heartbeat":
                break
            }
            return packet
        }
        ;
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        }
        ;
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        }
        ;
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        }
        ;
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        }
        ;
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen)
                this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        }
        ;
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        }
        ;
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        }
        ;
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        }
        ;
        Transport.prototype.packet = function(packet) {
            this.send(io.parser.encodePacket(packet))
        }
        ;
        Transport.prototype.onHeartbeat = function(heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        }
        ;
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        }
        ;
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        }
        ;
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        }
        ;
        Transport.prototype.ready = function(socket, fn) {
            fn.call(this)
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document"in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this,name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        }
        ;
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        }
        ;
        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this
              , options = this.options;
            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0]
                  , script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                }
                ;
                xhr.send(null)
            }
        }
        ;
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this,this.sessionid)
                }
            }
            return null
        }
        ;
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports)
                    self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport)
                        self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport)
                        return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        }
        ;
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())
                return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        }
        ;
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        }
        ;
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        }
        ;
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        }
        ;
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        }
        ;
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        }
        ;
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        }
        ;
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        }
        ;
        Socket.prototype.onOpen = function() {
            this.open = true
        }
        ;
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        }
        ;
        Socket.prototype.onPacket = function(packet) {
            this.of(packet.endpoint).onPacket(packet)
        }
        ;
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        }
        ;
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected
              , wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        }
        ;
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this
              , maxAttempts = this.options["max reconnection attempts"]
              , tryMultiple = this.options["try multiple transports"]
              , limit = this.options["reconnection limit"];
            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }
            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this,"json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        }
        ;
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        }
        ;
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1)
              , lastArg = args[args.length - 1]
              , packet = {
                type: "event",
                name: name
            };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        }
        ;
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        }
        ;
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;
            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
            case "connect":
                this.$emit("connect");
                break;
            case "disconnect":
                if (this.name === "") {
                    this.socket.onDisconnect(packet.reason || "booted")
                } else {
                    this.$emit("disconnect", packet.reason)
                }
                break;
            case "message":
            case "json":
                var params = ["message", packet.data];
                if (packet.ack == "data") {
                    params.push(ack)
                } else if (packet.ack) {
                    this.packet({
                        type: "ack",
                        ackId: packet.id
                    })
                }
                this.$emit.apply(this, params);
                break;
            case "event":
                var params = [packet.name].concat(packet.args);
                if (packet.ack == "data")
                    params.push(ack);
                this.$emit.apply(this, params);
                break;
            case "ack":
                if (this.acks[packet.ackId]) {
                    this.acks[packet.ackId].apply(this, packet.args);
                    delete this.acks[packet.ackId]
                }
                break;
            case "error":
                if (packet.advice) {
                    this.socket.onError(packet)
                } else {
                    if (packet.reason == "unauthorized") {
                        this.$emit("connect_failed", packet.reason)
                    } else {
                        this.$emit("error", packet.reason)
                    }
                }
                break
            }
        }
        ;
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        }
        ;
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    }
    )("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            }
            ;
            this.websocket.onmessage = function(ev) {
                self.onData(ev.data)
            }
            ;
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            }
            ;
            this.websocket.onerror = function(e) {
                self.onError(e)
            }
            ;
            return this
        }
        ;
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        }
        ;
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        }
        ;
        WS.prototype.onError = function(e) {
            this.socket.onError(e)
        }
        ;
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        }
        ;
        WS.check = function() {
            return "WebSocket"in global && !("__addTask"in WebSocket) || "MozWebSocket"in global
        }
        ;
        WS.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("websocket")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this
              , args = arguments;
            WebSocket.Wa2x(function() {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.send = function() {
            var self = this
              , args = arguments;
            WebSocket.Wa2x(function() {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        }
        ;
        Flashsocket.prototype.close = function() {
            WebSocket.NF9w.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        }
        ;
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options
                  , port = options["flash policy port"]
                  , path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bdu6o();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body)
                return init();
            io.util.load(init)
        }
        ;
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize"in WebSocket) || !swfobject)
                return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        }
        ;
        Flashsocket.xdomainCheck = function() {
            return true
        }
        ;
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function() {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D
                  , ah = t.userAgent.toLowerCase()
                  , Y = t.platform.toLowerCase()
                  , ae = Y ? /win/.test(Y) : /win/.test(ah)
                  , ac = Y ? /mac/.test(Y) : /mac/.test(ah)
                  , af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false
                  , X = !+"1"
                  , ag = [0, 0, 0]
                  , ab = null;
                if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                    ab = t.plugins[S].description;
                    if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                        T = true;
                        X = false;
                        ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                        ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof O[["Active"].concat("Object").join("X")] != D) {
                        try {
                            var ad = new (window[["Active"].concat("Object").join("X")])(W);
                            if (ad) {
                                ab = ad.GetVariable("$version");
                                if (ab) {
                                    X = true;
                                    ab = ab.split(" ")[1].split(",");
                                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                }
                            }
                        } catch (Z) {}
                    }
                }
                return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac
                }
            }(), k = function() {
                if (!M.w3) {
                    return
                }
                if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                    f()
                }
                if (!J) {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("DOMContentLoaded", f, false)
                    }
                    if (M.ie && M.win) {
                        j.attachEvent(x, function() {
                            if (j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if (O == top) {
                            (function() {
                                if (J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch (X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            }
                            )()
                        }
                    }
                    if (M.wk) {
                        (function() {
                            if (J) {
                                return
                            }
                            if (!/loaded|complete/.test(j.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        }
                        )()
                    }
                    s(f)
                }
            }();
            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }
            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }
            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }
            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }
            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    }
                    )()
                } else {
                    H()
                }
            }
            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }
            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }
            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }
            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn"
                      , ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        }
                        )()
                    }
                    u(aa, ab, X)
                }
            }
            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    }
                    )()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }
            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }
            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }
            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }
            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        }
                        )()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }
            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }
            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {}
                return X
            }
            function C(X) {
                return j.createElement(X)
            }
            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }
            function F(Z) {
                var Y = M.pv
                  , X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }
            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }
            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function() {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function() {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function(X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function() {
        if ("undefined" == typeof window || window.WebSocket)
            return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function() {},
                error: function() {}
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gH8z = WebSocket.cpY5d++;
            WebSocket.bDL3x[self.gH8z] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lk9b = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function() {
                WebSocket.Wa2x(function() {
                    WebSocket.oS1x.create(self.gH8z, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        }
        ;
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oS1x.send(this.gH8z, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        }
        ;
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.oS1x.close(this.gH8z)
        }
        ;
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.lk9b)) {
                this.lk9b[type] = []
            }
            this.lk9b[type].push(listener)
        }
        ;
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.lk9b))
                return;
            var events = this.lk9b[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        }
        ;
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.lk9b[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler)
                handler(event)
        }
        ;
        WebSocket.prototype.cpX5c = function(flashEvent) {
            if ("readyState"in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol"in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bEb3x(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bEb3x("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.cpV5a("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        }
        ;
        WebSocket.prototype.bEb3x = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.prototype.cpV5a = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
        ;
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.oS1x = null;
        WebSocket.bDL3x = {};
        WebSocket.NF9w = [];
        WebSocket.cpY5d = 0;
        WebSocket.loadFlashPolicyFile = function(url) {
            WebSocket.Wa2x(function() {
                WebSocket.oS1x.loadManualPolicyFile(url)
            })
        }
        ;
        WebSocket.bdu6o = function() {
            if (WebSocket.oS1x)
                return;
            if (WebSocket.cpU5Z) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.cpU5Z
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.cpT5Y()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function(e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        }
        ;
        WebSocket.cyf7Y = function() {
            setTimeout(function() {
                WebSocket.oS1x = document.getElementById("webSocketFlash");
                WebSocket.oS1x.setCallerUrl(location.href);
                WebSocket.oS1x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.NF9w.length; ++i) {
                    WebSocket.NF9w[i]()
                }
                WebSocket.NF9w = []
            }, 0)
        }
        ;
        WebSocket.cyg7Z = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.oS1x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bDL3x[events[i].webSocketId].cpX5c(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        }
        ;
        WebSocket.cyh7a = function(message) {
            console.log(decodeURIComponent(message))
        }
        ;
        WebSocket.dA6u = function(message) {
            console.error(decodeURIComponent(message))
        }
        ;
        WebSocket.Wa2x = function(task) {
            if (WebSocket.oS1x) {
                task()
            } else {
                WebSocket.NF9w.push(task)
            }
        }
        ;
        WebSocket.cpT5Y = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        }
        ;
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function() {
                    WebSocket.bdu6o()
                }, false)
            } else {
                window.attachEvent("onload", function() {
                    WebSocket.bdu6o()
                })
            }
        }
    }
    )();
    (function(exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket)
                return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        }
        ;
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        }
        ;
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        }
        ;
        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        }
        ;
        XHR.prototype.close = function() {
            this.onClose();
            return this
        }
        ;
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain())
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {}
            }
            return req
        }
        ;
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        }
        ;
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain)
                  , usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest
                  , socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:"
                  , isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        }
        ;
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() {
                self.destroy()
            })
        }
        ;
        HTMLFile.prototype.c4g = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        }
        ;
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        }
        ;
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        }
        ;
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X")in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        }
        ;
        HTMLFile.xdomainCheck = function() {
            return false
        }
        ;
        io.transports.push("htmlfile")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        }
        ;
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        }
        ;
        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen)
                return;
            var self = this;
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }
            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        }
        ;
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {}
                this.xhr = null
            }
        }
        ;
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() {
                fn.call(self)
            })
        }
        ;
        io.transports.push("xhr-polling")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance"in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) {
                self.c4g(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"), id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }
            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        }
        ;
        JSONPPolling.prototype.get = function() {
            var self = this
              , script = document.createElement("script")
              , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() {
                self.onClose()
            }
            ;
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        }
        ;
        JSONPPolling.prototype.c4g = function(msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        }
        ;
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator)
                return fn.call(this);
            io.util.load(function() {
                fn.call(self)
            })
        }
        ;
        JSONPPolling.check = function() {
            return "document"in global
        }
        ;
        JSONPPolling.xdomainCheck = function() {
            return true
        }
        ;
        io.transports.push("jsonp-polling")
    }
    )("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
}
)();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;
    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.dO7H)
            this.dO7H = {};
        this.bEv3x = n
    }
    ;
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dO7H || !this.dO7H.error || isArray(this.dO7H.error) && !this.dO7H.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1]instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dO7H)
            return false;
        var handler = this.dO7H[type];
        if (!handler)
            return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
            case 1:
                handler.call(this);
                break;
            case 2:
                handler.call(this, arguments[1]);
                break;
            case 3:
                handler.call(this, arguments[1], arguments[2]);
                break;
            default:
                var l = arguments.length;
                var args = new Array(l - 1);
                for (var i = 1; i < l; i++)
                    args[i - 1] = arguments[i];
                handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++)
                args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    }
    ;
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dO7H)
            this.dO7H = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dO7H[type]) {
            this.dO7H[type] = listener
        } else if (isArray(this.dO7H[type])) {
            this.dO7H[type].push(listener)
        } else {
            this.dO7H[type] = [this.dO7H[type], listener]
        }
        if (isArray(this.dO7H[type]) && !this.dO7H[type].warned) {
            var m;
            if (this.bEv3x !== undefined) {
                m = this.bEv3x
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dO7H[type].length > m) {
                this.dO7H[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dO7H[type].length);
                console.trace()
            }
        }
        return this
    }
    ;
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;
        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    }
    ;
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dO7H || !this.dO7H[type])
            return this;
        var list = this.dO7H[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)
                return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dO7H[type]
        }
        return this
    }
    ;
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.dO7H = {};
            return this
        }
        var events = this.dO7H && this.dO7H[type];
        if (!events)
            return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dO7H[type] = null
        }
        return this
    }
    ;
    EventEmitter.prototype.listeners = function(type) {
        if (!this.dO7H)
            this.dO7H = {};
        if (!this.dO7H[type])
            this.dO7H[type] = [];
        if (!isArray(this.dO7H[type])) {
            this.dO7H[type] = [this.dO7H[type]]
        }
        return this.dO7H[type]
    }
}
)();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() {
            pomelo.emit("reconnect")
        });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) {
            cb(err)
        });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    }
    ;
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function() {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) {
        request("register", opts, cb)
    }
    ;
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    }
    ;
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    }
    ;
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    }
    ;
    pomelo.getOnlineUser = function(opts, cb) {
        request("getOnlineUser", opts, cb)
    }
    ;
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    }
    ;
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), l4p = c4g("nm.x"), dr6l = c4g("nm.u"), p4t = c4g("nm.d"), Nx9o = c4g("pomelo"), dt6n = 0, b4f, K4O;
    p4t.eY7R({
        "polling-init": {
            url: "/api/push/init",
            format: function(P4T) {
                dt6n = 2;
                var rt1x = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }
                  , j4n = P4T.account || Y5d
                  , cY6S = GUser.userId;
                Nx9o.init(rt1x.host, rt1x.port, true, this.cpM5R.g4k(this, {
                    user: cY6S,
                    nonce: j4n.nonce,
                    domain: rt1x.domain,
                    productKey: rt1x.key,
                    signature: j4n.signature,
                    expire_time: j4n.expireTime
                }))
            },
            onerror: function() {
                return this.bea6U()
            }
        }
    });
    p4t.yA4E = NEJ.C();
    b4f = p4t.yA4E.O4S(p4t.he8W);
    b4f.cq5v = function() {
        var pE1x = !1;
        return function(e4i) {
            if (!pE1x) {
                pE1x = !0
            }
            this.cu5z(e4i);
            Nx9o.on("specify", this.pV1x.g4k(this));
            Nx9o.on("broadcast", this.pV1x.g4k(this))
        }
    }();
    b4f.pV1x = function(d4h) {
        k4o.bb5g(d4h, function(bC5H) {
            h4l.y4C(p4t.yA4E, "message", bC5H)
        }, this)
    }
    ;
    b4f.bea6U = function() {
        var by5D = 500;
        return function() {
            dt6n = 0;
            Nx9o.disconnect();
            if (by5D > 6e4)
                by5D = 500;
            by5D *= 2
        }
    }();
    b4f.cpM5R = function(e4i, bU5Z) {
        if (!!bU5Z) {
            return this.bea6U()
        }
        dt6n = 3;
        Nx9o.registerAndBind(e4i, function(o4s) {
            if (o4s.code != 200) {
                return this.bea6U()
            }
            dt6n = 4
        }
        .g4k(this))
    }
    ;
    b4f.cyi7b = function() {
        dr6l.cpJ5O.fX8P().cyj7c()
    }
    ;
    b4f.cyk7d = function() {
        dr6l.cpJ5O.fX8P().cyl7e()
    }
    ;
    b4f.beC6w = function() {
        var pE1x = !1;
        return function() {
            if (pE1x)
                return;
            pE1x = !0;
            this.ch5m("polling-init", {})
        }
    }();
    G4K.fu7n.A4E({
        event: "message",
        element: p4t.yA4E
    })
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), h4l = c4g("nej.v"), w4A = c4g("nej.j"), dh6b = c4g("nej.p"), k4o = c4g("nej.u"), n4r = c4g("nm.l"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), dp6j = c4g("api"), b4f, K4O;
    var gn8f = a3x.il8d('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n4r.beH7A = NEJ.C();
    b4f = n4r.beH7A.O4S(n4r.dZ7S);
    K4O = n4r.beH7A.cj5o;
    b4f.bj5o = function(e4i) {
        e4i.title = "意见反馈";
        this.bk5p(e4i)
    }
    ;
    b4f.bZ5e = function() {
        this.cb5g = gn8f
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        this.gS8K = {};
        var Io7h = a3x.I4M;
        var Dk5p = h4l.s4w;
        this.gS8K.submit_btn = Io7h(this.m4q, "u-btn2")[0];
        this.gS8K.cancle_btn = Io7h(this.m4q, "u-btn2")[1];
        this.gS8K.prompt_msg = Io7h(this.m4q, "u-err")[0];
        this.gS8K.zs = Io7h(this.m4q, "zs")[0];
        a3x.Z5e(this.gS8K.zs, "display", "none");
        this.gS8K.fb_txt = Io7h(this.m4q, "u-txt")[0];
        this.gS8K.contact = Io7h(this.m4q, "u-txt")[1];
        a3x.fP8H(this.gS8K.fb_txt, "holder");
        a3x.fP8H(this.gS8K.contact, "holder");
        if (a3x.bz5E(this.gS8K.fb_txt.parentNode, "holder-parent")) {
            a3x.Z5e(this.gS8K.fb_txt.parentNode, "display", "block")
        }
        if (a3x.bz5E(this.gS8K.contact.parentNode, "holder-parent")) {
            a3x.Z5e(this.gS8K.contact.parentNode, "display", "block")
        }
        Dk5p(this.gS8K.submit_btn, "click", this.cpG5L.g4k(this));
        Dk5p(this.gS8K.cancle_btn, "click", this.cpF4J.g4k(this));
        Dk5p(this.gS8K.prompt_msg, "msgShow", this.cpE4I.g4k(this));
        Dk5p(this.gS8K.fb_txt, "keyup", this.uv2x.g4k(this));
        Dk5p(this.gS8K.fb_txt, "input", this.fr7k.g4k(this));
        Dk5p(this.gS8K.contact, "keyup", this.cpA4E.g4k(this));
        Dk5p(this.gS8K.contact, "input", this.bFF4J.g4k(this));
        this.ky9p = p4t.hY8Q.A4E()
    }
    ;
    b4f.cpG5L = function(d4h) {
        h4l.bh5m(d4h);
        if (this.cw5B())
            return;
        var bl5q = this.gS8K.fb_txt.value.trim();
        var bm5r = bl5q.length;
        var e4i = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bFJ4N = this.gS8K.contact.value.trim();
        var WD2x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l4p.biM8E(),
            contact: bFJ4N
        };
        var j4n = {
            content: bl5q,
            client: "web",
            xInfo: JSON.stringify(WD2x)
        }
          , nn0x = this.ky9p.cuR6L();
        if (nn0x && nn0x.length) {
            j4n.log = nn0x.join("\n")
        }
        if (bm5r == 0) {
            this.gS8K.prompt_msg.innerHTML = "反馈内容不能为空";
            a3x.Z5e(this.gS8K.prompt_msg, "display", "block");
            return
        }
        if (bFJ4N.length > 100) {
            this.gS8K.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a3x.Z5e(this.gS8K.prompt_msg, "display", "block");
            return
        }
        this.cw5B(true);
        e4i.data = k4o.db6V(j4n);
        e4i.onload = this.cpz4D.g4k(this);
        e4i.onerror = this.ie8W.g4k(this);
        w4A.bp5u("/api/feedback/web", e4i)
    }
    ;
    b4f.fr7k = function(d4h) {
        var bm5r = this.gS8K.fb_txt.value.trim().length;
        if (bm5r > 0)
            a3x.Z5e(this.gS8K.prompt_msg, "display", "none");
        dh6b.dk6e.browser == "ie" && dh6b.dk6e.version < "7.0" ? setTimeout(this.fF8x.g4k(this), 0) : this.fF8x()
    }
    ;
    b4f.uv2x = function(d4h) {
        if (d4h.keyCode === 8)
            this.fF8x()
    }
    ;
    b4f.fF8x = function() {
        var bm5r = this.gS8K.fb_txt.value.trim().length;
        this.gS8K.zs.innerHTML = !bm5r ? "0/140" : bm5r + "/140"
    }
    ;
    b4f.bFF4J = function(d4h) {
        var bm5r = this.gS8K.contact.value.trim().length;
        if (bm5r > 0)
            a3x.Z5e(this.gS8K.prompt_msg, "display", "none")
    }
    ;
    b4f.cpA4E = function(d4h) {
        if (d4h.keyCode === 8)
            this.bFF4J()
    }
    ;
    b4f.cpF4J = function(d4h) {
        h4l.ci5n(d4h);
        this.br5w()
    }
    ;
    b4f.cpE4I = function(d4h) {
        var f4j = h4l.U5Z(d4h);
        f4j.innerHTML = "请输入反馈内容"
    }
    ;
    b4f.cym7f = function(cyn7g) {
        var f4j = h4l.U5Z(d4h);
        f4j.innerHTML = ""
    }
    ;
    b4f.cpz4D = function(o4s) {
        this.cw5B(false);
        this.br5w();
        n4r.X5c.M4Q({
            tip: "意见发送成功",
            autoclose: true
        })
    }
    ;
    b4f.ie8W = function(o4s) {
        this.cw5B(false);
        n4r.X5c.M4Q({
            tip: "意见发送失败",
            autoclose: true
        })
    }
    ;
    b4f.cw5B = function(cK6E) {
        return this.dF7y(this.gS8K.submit_btn, cK6E, "发送意见", "发送中...")
    }
    ;
    b4f.M4Q = function() {
        K4O.M4Q.call(this);
        this.cw5B(false);
        this.gS8K.fb_txt.value = "";
        this.gS8K.contact.value = "";
        a3x.Z5e(this.gS8K.prompt_msg, "display", "none");
        this.fF8x()
    }
    ;
    l4p.cpu4y = function(e4i) {
        e4i = e4i || {};
        if (e4i.title === undefined)
            e4i.title = "意见反馈";
        n4r.beH7A.M4Q(e4i)
    }
    ;
    dp6j.feedback = l4p.feedback = l4p.cpu4y
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, N4R = c4g("nej.ui"), b4f;
    if (!!N4R.wl3x)
        return;
    N4R.wl3x = NEJ.C();
    b4f = N4R.wl3x.O4S(N4R.ef7Y);
    b4f.cq5v = function() {
        this.gH8z = this.bGn4r();
        this.cu5z()
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.ct5y = e4i.index;
        this.fW8O = e4i.total;
        this.gT8L = e4i.range;
        this.ga8S(e4i.data)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        delete this.bi5n;
        delete this.ct5y;
        delete this.fW8O;
        delete this.gT8L
    }
    ;
    b4f.hD8v = bo5t;
    b4f.bGn4r = function() {
        var gi8a = +(new Date);
        return function() {
            return "itm-" + ++gi8a
        }
    }();
    b4f.BB5G = function() {
        return this.gH8z
    }
    ;
    b4f.hm8e = function() {
        return this.bi5n
    }
    ;
    b4f.ga8S = function(j4n) {
        this.bi5n = j4n || {};
        this.hD8v(this.bi5n)
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), N4R = c4g("nej.ui"), b4f, K4O;
    if (!!N4R.uo2x)
        return;
    N4R.uo2x = NEJ.C();
    b4f = N4R.uo2x.O4S(N4R.wl3x);
    K4O = N4R.uo2x.cj5o;
    b4f.bj5o = function(e4i) {
        this.cpt4x = e4i.pkey || "id";
        this.bk5p(e4i)
    }
    ;
    b4f.DK5P = function(j4n) {
        this.y4C("ondelete", {
            ext: j4n,
            id: this.BB5G(),
            data: this.hm8e(),
            body: this.kV9M()
        })
    }
    ;
    b4f.st2x = function(j4n) {
        this.y4C("onupdate", {
            ext: j4n,
            id: this.BB5G(),
            data: this.hm8e(),
            body: this.kV9M()
        })
    }
    ;
    b4f.ga8S = function(j4n) {
        K4O.ga8S.apply(this, arguments);
        this.gH8z = this.bi5n[this.cpt4x] || this.bGn4r()
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, fh7a = NEJ.R, a3x = c4g("nej.e"), k4o = c4g("nej.u"), N4R = c4g("nej.ui"), b4f, ip8h, beY7R;
    if (!!N4R.beZ7S)
        return;
    N4R.beZ7S = NEJ.C();
    b4f = N4R.beZ7S.O4S(N4R.ef7Y);
    b4f.bj5o = function(e4i) {
        this.WE2x = NEJ.X({}, e4i);
        this.fq7j = NEJ.X({}, e4i);
        delete this.WE2x.onchange;
        this.fq7j.onchange = this.fE8w.g4k(this);
        this.bk5p(e4i);
        this.cps4w({
            number: e4i.number,
            label: e4i.label || Y5d
        })
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        if (!!this.km9d) {
            this.km9d.S5X();
            delete this.km9d
        }
        delete this.WE2x;
        delete this.fq7j;
        this.cpr4v();
        this.m4q.innerHTML = "&nbsp;"
    }
    ;
    b4f.bZ5e = function() {
        this.lh9Y = ip8h
    }
    ;
    b4f.cps4w = function(j4n) {
        a3x.dJ7C(this.m4q, beY7R, j4n);
        var gi8a = a3x.HL6F();
        this.fq7j.list = a3x.I4M(this.m4q, "js-i-" + gi8a);
        this.fq7j.pbtn = (a3x.I4M(this.m4q, "js-p-" + gi8a) || fh7a)[0];
        this.fq7j.nbtn = (a3x.I4M(this.m4q, "js-n-" + gi8a) || fh7a)[0]
    }
    ;
    b4f.bR5W = function() {
        this.cc5h()
    }
    ;
    b4f.cyo7h = function(j4n) {
        return a3x.bW5b(beY7R, j4n)
    }
    ;
    b4f.fE8w = function(d4h) {
        if (this.MP8H)
            return;
        var r4v = d4h.index
          , co5t = d4h.total;
        this.MP8H = !0;
        this.MO8G(r4v, co5t);
        k4o.bb5g(this.WM2x, function(sn2x) {
            sn2x.MO8G(r4v, co5t)
        });
        this.MP8H = !1;
        this.y4C("onchange", d4h)
    }
    ;
    b4f.g4k = function(bE5J) {
        bE5J = a3x.z4D(bE5J);
        if (!bE5J)
            return this;
        var cr5w = NEJ.X({}, this.WE2x);
        cr5w.parent = bE5J;
        cr5w.index = this.sl2x();
        cr5w.total = this.jp9g();
        var sn2x = this.constructor.A4E(cr5w);
        sn2x.vk2x("onchange", this.fq7j.onchange);
        if (!this.WM2x)
            this.WM2x = [];
        this.WM2x.push(sn2x);
        return this
    }
    ;
    b4f.cpr4v = function() {
        var bnu9l = function(sn2x, r4v, i4m) {
            sn2x.S5X();
            i4m.splice(r4v, 1)
        };
        return function() {
            k4o.mq0x(this.WM2x, bnu9l)
        }
    }();
    b4f.jX9O = function(r4v) {
        if (!this.km9d)
            return;
        this.km9d.jX9O(r4v)
    }
    ;
    b4f.sl2x = function() {
        if (!this.km9d)
            return 1;
        return this.km9d.sl2x()
    }
    ;
    b4f.jp9g = function() {
        if (!this.km9d)
            return 1;
        return this.km9d.jp9g()
    }
    ;
    b4f.MO8G = function(r4v, co5t) {
        if (!this.km9d)
            return;
        this.km9d.MO8G(r4v, co5t)
    }
    ;
    b4f.bft7m = function(co5t) {
        if (!this.km9d)
            return;
        this.km9d.bft7m(co5t)
    }
    ;
    ip8h = a3x.so2x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    beY7R = a3x.ep7i('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), N4R = c4g("nej.ut"), b4f;
    if (!!N4R.WO2x)
        return;
    N4R.WO2x = NEJ.C();
    b4f = N4R.WO2x.O4S(N4R.cy5D);
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.WX2x = e4i.pbtn;
        this.cf5k = e4i.nbtn;
        this.Xa2x = e4i.sbtn;
        this.Xd2x = e4i.ebtn;
        this.iC9t = e4i.event || "click";
        this.jJ9A = e4i.selected || "js-selected";
        this.mV0x = e4i.disabled || "js-disabled";
        this.cpp4t(e4i.list);
        this.MO8G(e4i.index || 1, e4i.total || 1)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        delete this.bN5S;
        delete this.iC9t;
        delete this.WX2x;
        delete this.cf5k;
        delete this.Xa2x;
        delete this.Xd2x;
        delete this.bJF5K;
        delete this.fW8O;
        delete this.ct5y;
        delete this.jJ9A;
        delete this.mV0x
    }
    ;
    b4f.cpp4t = function() {
        var bgk7d = function(f4j) {
            this.bN5S.push(f4j);
            this.bS5X([[f4j, this.iC9t, this.cp5u.eb7U(this, 0)]])
        };
        return function(i4m) {
            this.bN5S = [];
            this.bS5X([[this.WX2x, "click", this.cp5u.eb7U(this, -1)], [this.cf5k, "click", this.cp5u.eb7U(this, 1)], [this.Xa2x, "click", this.cp5u.eb7U(this, -2)], [this.Xd2x, "click", this.cp5u.eb7U(this, 2)]]);
            k4o.bb5g(i4m, bgk7d, this)
        }
    }();
    b4f.Eo5t = function(f4j, r4v) {
        if (r4v == null) {
            f4j.innerText = "";
            a3x.Z5e(f4j, "display", "none");
            a3x.v4z(f4j, this.jJ9A)
        } else {
            f4j.innerText = r4v;
            a3x.Z5e(f4j, "display", "");
            r4v == this.ct5y ? a3x.x4B(f4j, this.jJ9A) : a3x.v4z(f4j, this.jJ9A)
        }
    }
    ;
    b4f.bgm7f = function() {
        if (this.ct5y <= 1) {
            a3x.x4B(this.WX2x, this.mV0x);
            a3x.x4B(this.Xa2x, this.mV0x)
        } else {
            a3x.v4z(this.WX2x, this.mV0x);
            a3x.v4z(this.Xa2x, this.mV0x)
        }
        if (this.ct5y >= this.fW8O) {
            a3x.x4B(this.cf5k, this.mV0x);
            a3x.x4B(this.Xd2x, this.mV0x)
        } else {
            a3x.v4z(this.cf5k, this.mV0x);
            a3x.v4z(this.Xd2x, this.mV0x)
        }
    }
    ;
    b4f.Xf2x = bo5t;
    b4f.bgB7u = function() {
        this.Xf2x();
        this.bgm7f();
        this.y4C("onchange", {
            last: this.bJF5K,
            total: this.fW8O,
            index: this.ct5y,
            ext: this.bgI7B
        })
    }
    ;
    b4f.bKd5i = function(r4v) {
        r4v = parseInt(r4v);
        if (isNaN(r4v) || this.fW8O == null)
            return !1;
        r4v = Math.max(1, Math.min(r4v, this.fW8O));
        this.bJF5K = this.ct5y;
        this.ct5y = r4v;
        return !0
    }
    ;
    b4f.bgK7D = function(co5t) {
        co5t = parseInt(co5t);
        if (isNaN(co5t) || co5t < 1)
            return !1;
        this.fW8O = co5t;
        return !0
    }
    ;
    b4f.cp5u = function(d4h, eK7D) {
        h4l.ci5n(d4h);
        var F4J = h4l.U5Z(d4h);
        if (!F4J || a3x.bz5E(F4J, this.jJ9A) || a3x.bz5E(F4J, this.mV0x))
            return;
        var r4v = F4J.innerText;
        switch (eK7D) {
        case 1:
        case -1:
            r4v = this.ct5y + eK7D;
            break;
        case 2:
            r4v = this.fW8O;
            break;
        case -2:
            r4v = 1;
            break
        }
        this.jX9O(r4v)
    }
    ;
    b4f.sl2x = function() {
        return this.ct5y
    }
    ;
    b4f.jX9O = function(r4v) {
        var cpn4r = this.ct5y;
        this.bKd5i(r4v);
        if (cpn4r != this.ct5y)
            this.bgB7u();
        return this
    }
    ;
    b4f.jp9g = function() {
        return this.fW8O
    }
    ;
    b4f.PD0x = function(co5t) {
        if (this.bgK7D(co5t) && this.ct5y != null) {
            this.ct5y = 1;
            this.bgB7u()
        }
        return this
    }
    ;
    b4f.bft7m = function(co5t) {
        if (this.bgK7D(co5t)) {
            this.Xf2x();
            this.bgm7f()
        }
        return this
    }
    ;
    b4f.MO8G = function(r4v, co5t) {
        if (!this.bgK7D(co5t) || !this.bKd5i(r4v))
            return this;
        this.bgB7u();
        return this
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), k4o = c4g("nej.u"), cT6N = c4g("nej.x"), N4R = c4g("nej.ut"), b4f;
    if (!!N4R.Mp8h)
        return;
    N4R.Mp8h = NEJ.C();
    b4f = N4R.Mp8h.O4S(N4R.WO2x);
    b4f.cq5v = function() {
        this.cu5z();
        var f4j = a3x.cX6R("span", "zdot");
        f4j.innerText = "...";
        this.Xl2x = [f4j.cloneNode(true), f4j]
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        this.bKT5Y()
    }
    ;
    b4f.bKT5Y = function() {
        a3x.mJ0x(this.Xl2x[0]);
        a3x.mJ0x(this.Xl2x[1])
    }
    ;
    b4f.Xf2x = function() {
        this.bgI7B = {
            last: !1,
            first: !1,
            list: this.bN5S
        };
        this.bKT5Y();
        this.Eo5t(this.bN5S[0], 1);
        var bH5M = 1
          , bm5r = this.bN5S.length;
        if (this.fW8O < bm5r) {
            for (var pP1x; bH5M < bm5r; bH5M++) {
                pP1x = bH5M + 1;
                this.Eo5t(this.bN5S[bH5M], pP1x > this.fW8O ? null : pP1x)
            }
            return
        }
        if (this.ct5y > 1) {
            var cB5G = Math.floor((bm5r - 2) / 2)
              , cpm4q = this.fW8O - bm5r + 2
              , io8g = Math.max(2, this.ct5y - cB5G);
            if (this.fW8O >= bm5r) {
                io8g = Math.min(io8g, cpm4q)
            }
            if (io8g > 2) {
                this.bN5S[0].insertAdjacentElement("afterEnd", this.Xl2x[0]);
                this.bgI7B.first = !0
            }
            for (var r4v; ; bH5M++) {
                r4v = io8g + bH5M - 1;
                if (r4v > this.ct5y)
                    break;
                this.Eo5t(this.bN5S[bH5M], r4v)
            }
        }
        if (this.ct5y < this.fW8O) {
            var r4v, io8g = this.ct5y + 1;
            for (var i = 0, l = bm5r - 2; ; i++,
            bH5M++) {
                r4v = io8g + i;
                if (bH5M > l || r4v > this.fW8O)
                    break;
                this.Eo5t(this.bN5S[bH5M], r4v)
            }
            if (r4v < this.fW8O) {
                this.bN5S[bH5M].insertAdjacentElement("beforeBegin", this.Xl2x[1]);
                this.bgI7B.last = !0
            }
            if (r4v <= this.fW8O) {
                this.Eo5t(this.bN5S[bH5M++], this.fW8O)
            }
        }
        for (; bH5M < bm5r; bH5M++) {
            this.Eo5t(this.bN5S[bH5M])
        }
    }
    ;
    a3x.cpl4p = cT6N.cpl4p = function(bE5J, e4i) {
        var D4H = a3x.la9R(bE5J);
        if (!D4H)
            return null;
        if (!N4R.Yw3x(D4H, N4R.Mp8h)) {
            e4i = e4i || {};
            var i4m = !e4i.clazz ? a3x.cU6O(D4H) : a3x.I4M(D4H, e4i.clazz);
            e4i.pbtn = i4m.shift();
            e4i.nbtn = i4m.pop();
            e4i.list = i4m;
            delete e4i.clazz
        }
        return N4R.Yw3x(D4H, N4R.Mp8h, e4i || Y5d)
    }
    ;
    cT6N.isChange = !0
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, fh7a = NEJ.R, a3x = c4g("nej.e"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), N4R = c4g("nej.ui"), b4f, K4O, gn8f;
    if (!!N4R.Ml8d)
        return;
    N4R.Ml8d = NEJ.C();
    b4f = N4R.Ml8d.O4S(N4R.beZ7S);
    K4O = N4R.Ml8d.cj5o;
    b4f.bj5o = function(e4i) {
        e4i.number = parseInt(e4i.number) || 9;
        this.bk5p(e4i);
        this.km9d = G4K.Mp8h.A4E(this.fq7j)
    }
    ;
    b4f.fE8w = function(d4h) {
        if (!!this.WE2x.noend) {
            var bLh5m = d4h.ext || Y5d
              , i4m = bLh5m.list || fh7a;
            if (bLh5m.last) {
                a3x.Z5e(i4m[i4m.length - 1], "display", "none")
            }
        }
        K4O.fE8w.apply(this, arguments)
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), ba5f = c4g("nej.ui"), N4R = c4g("nej.ut"), b4f;
    if (!!N4R.Xm2x)
        return;
    N4R.Xm2x = NEJ.C();
    b4f = N4R.Xm2x.O4S(N4R.cy5D);
    b4f.bj5o = function(e4i) {
        this.iI9z = {};
        this.bk5p(e4i);
        this.is9j = a3x.z4D(e4i.parent);
        this.eU7N = {
            parent: this.is9j
        };
        this.nS0x = parseInt(e4i.limit) || 10;
        this.wC3x = parseInt(e4i.first) || this.nS0x;
        this.cpk4o(e4i.item);
        this.cpj4n(e4i.cache || Y5d);
        this.cpi4m(e4i.pager || Y5d);
        this.ga8S()
    }
    ;
    b4f.bA5F = function() {
        this.y4C("onbeforerecycle");
        this.Me8W();
        this.bF5K();
        if (this.iI9z.clear) {
            this.R5W.tT2x(this.iI9z.key)
        }
        this.R5W.S5X();
        if (!!this.iL9C) {
            this.iL9C.S5X();
            delete this.iL9C
        }
        delete this.bMg5l;
        delete this.fq7j;
        delete this.Xq2x;
        delete this.R5W;
        delete this.is9j;
        delete this.LY8Q;
        delete this.eU7N;
        delete this.iI9z
    }
    ;
    b4f.bMm5r = function() {
        var cS6M = /\{(.*?)\}/gi
          , cpg4k = function(pw1x, j4n) {
            return (pw1x || "{id}{seed}").replace(cS6M, function($1, $2) {
                var C4G = j4n[$2];
                return C4G == null ? $1 : C4G
            })
        };
        return function(D4H) {
            var J4N = cpg4k(this.eU7N.jstIdTempalte, {
                id: D4H,
                seed: a3x.HL6F()
            });
            if (!this.eU7N.jstIdType) {
                return a3x.z4D(J4N)
            } else if (this.eU7N.jstIdType == 1) {
                return (a3x.I4M(this.is9j, J4N) || [])[0]
            }
        }
    }();
    b4f.zo4s = function(bH5M, bf5k, gc8U, bm5r) {
        var o4s = {
            index: 1,
            total: 1
        };
        if (bf5k >= bH5M) {
            o4s.index = Math.floor((bf5k - bH5M) / gc8U) + 2
        }
        if (bm5r > bH5M) {
            o4s.total = Math.ceil((bm5r - bH5M) / gc8U) + 1
        }
        return o4s
    }
    ;
    b4f.bMv5A = function(J4N) {
        delete this.LY8Q;
        this.HN6H = J4N;
        this.bS5X([[this.is9j, "click", this.cpf4j.g4k(this)]])
    }
    ;
    b4f.cpk4o = function(q4u) {
        if (k4o.fx7q(q4u)) {
            this.bMv5A(q4u);
            return
        }
        NEJ.X(this.eU7N, q4u);
        var dK7D = this.eU7N.klass;
        delete this.eU7N.klass;
        if (k4o.fx7q(dK7D)) {
            this.bMv5A(dK7D);
            return
        }
        delete this.HN6H;
        this.LY8Q = dK7D;
        this.eU7N.ondelete = this.y4C.g4k(this, "ondelete");
        this.eU7N.onupdate = this.y4C.g4k(this, "onupdate")
    }
    ;
    b4f.cpj4n = function(Q5V) {
        var dK7D = Q5V.klass
          , jx9o = NEJ.X({}, Q5V);
        this.iI9z.key = jx9o.lkey;
        this.iI9z.data = jx9o.data || {};
        this.iI9z.clear = !!jx9o.clear;
        this.eU7N.pkey = jx9o.key || "id";
        jx9o.onlistload = this.bhy7r.g4k(this);
        jx9o.onpullrefresh = this.cpe4i.g4k(this);
        if (!!dK7D && "onlistchange"in dK7D) {
            this.bS5X([[dK7D, "listchange", this.bhC7v.g4k(this)]])
        } else {
            jx9o.onitemadd = this.Xz3x.g4k(this);
            jx9o.onitemdelete = this.XB3x.g4k(this);
            jx9o.onitemupdate = this.bMH5M.g4k(this)
        }
        this.R5W = (dK7D || N4R.Pr0x).A4E(jx9o);
        if (Q5V.total != null) {
            this.R5W.PD0x(this.iI9z.key, Q5V.total)
        }
        if (!!Q5V.list) {
            this.R5W.uc2x(this.iI9z.key, Q5V.list)
        }
    }
    ;
    b4f.cpi4m = function(sn2x) {
        this.bMg5l = sn2x.klass || ba5f.Ml8d;
        this.fq7j = NEJ.X({}, sn2x);
        if (k4o.eu7n(sn2x.parent)) {
            this.fq7j.parent = sn2x.parent[0];
            this.LC8u = sn2x.parent.slice(1);
            if (!this.LC8u || !this.LC8u.length) {
                delete this.LC8u
            }
        }
        delete this.fq7j.klass
    }
    ;
    b4f.Me8W = function() {
        var gf8X = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.y4C("onbeforelistclear", {
                parent: this.is9j
            });
            if (!!this.fp7i && this.fp7i.length > 0) {
                this.fp7i = this.LY8Q.S5X(this.fp7i);
                delete this.fp7i
            }
            if (gf8X.test(this.is9j.tagName)) {
                a3x.bAB2x(this.is9j)
            } else {
                this.is9j.innerHTML = ""
            }
        }
    }();
    b4f.bhL7E = function(XE3x) {
        if (!!this.fq7j.fixed)
            return;
        a3x.Z5e(this.fq7j.parent, "display", XE3x);
        k4o.bb5g(this.LC8u, function(bE5J) {
            a3x.Z5e(bE5J, "display", XE3x)
        }, this)
    }
    ;
    b4f.bhR7K = function() {
        var r4v = this.fq7j.index || 1;
        delete this.fq7j.index;
        if (!!this.iL9C) {
            r4v = this.iL9C.sl2x()
        }
        this.zF4J({
            last: r4v,
            index: r4v
        })
    }
    ;
    b4f.zF4J = function(d4h) {
        this.y4C("onpagechange", d4h)
    }
    ;
    b4f.bNe6Y = function(bf5k) {
        this.iI9z.offset = bf5k;
        this.Ur2x()
    }
    ;
    b4f.bNf6Z = function(e4i) {
        return e4i
    }
    ;
    b4f.Ur2x = function() {
        this.Lt8l();
        var j4n = this.iI9z.data;
        j4n.offset = this.iI9z.offset;
        var oF0x = j4n.offset == 0;
        j4n.total = oF0x;
        this.iI9z.limit = oF0x ? this.wC3x : this.nS0x;
        j4n.limit = this.iI9z.limit;
        this.R5W.kG9x(this.bNf6Z(NEJ.X({}, this.iI9z)))
    }
    ;
    b4f.bhy7r = function(e4i) {
        if (e4i.key != this.iI9z.key || e4i.offset != this.iI9z.offset)
            return;
        this.XH3x();
        var i4m = this.R5W.gV8N(e4i.key);
        if (!i4m || !i4m.length) {
            this.bhT7M();
            return
        }
        var gc8U = e4i.limit
          , bf5k = e4i.offset;
        if (this.bhW7P(i4m, bf5k, gc8U))
            return;
        this.y4C("onbeforelistrender", {
            list: i4m,
            offset: bf5k,
            parent: this.is9j
        });
        if (!!this.HN6H) {
            this.eU7N.xlist = i4m;
            this.eU7N.beg = bf5k;
            this.eU7N.end = Math.min(i4m.length, bf5k + gc8U) - 1;
            this.eU7N.act = "list";
            var dD7w = a3x.bW5b(this.HN6H, this.eU7N);
            this.Lm8e(dD7w)
        } else {
            this.eU7N.limit = gc8U;
            this.eU7N.offset = bf5k;
            var gI8A = a3x.yI4M(i4m, this.LY8Q, this.eU7N);
            this.Ll8d(gI8A)
        }
        this.y4C("onafterlistrender", {
            list: i4m,
            offset: bf5k,
            parent: this.is9j
        })
    }
    ;
    b4f.cpe4i = function(e4i) {
        if (!this.Xq2x)
            return;
        delete this.Xq2x;
        this.XH3x("onafterpullrefresh");
        this.ga8S()
    }
    ;
    b4f.bND6x = function(r4v, co5t) {
        if (!!this.iL9C) {
            var yO4S = this.iL9C.sl2x()
              , cpd4h = this.iL9C.jp9g();
            if (yO4S > co5t || co5t != cpd4h) {
                this.iL9C.S5X();
                delete this.iL9C;
                this.zF4J({
                    last: yO4S,
                    index: Math.min(r4v, co5t)
                });
                return !0
            }
        } else {
            this.fq7j.index = r4v;
            this.fq7j.total = co5t;
            this.iL9C = this.bMg5l.A4E(this.fq7j);
            this.iL9C.vk2x("onchange", this.zF4J.g4k(this));
            k4o.bb5g(this.LC8u, function(bE5J) {
                this.iL9C.g4k(bE5J)
            }, this)
        }
    }
    ;
    b4f.XN3x = function() {
        var gi8a = +(new Date);
        return function(j4n) {
            var D4H = j4n[this.eU7N.pkey];
            if (!D4H) {
                j4n["dirty-data"] = !0;
                j4n[this.eU7N.pkey] = "dirty-" + gi8a++
            }
            return j4n
        }
    }();
    b4f.XR3x = function(j4n) {
        var D4H = j4n[this.eU7N.pkey];
        if (!!j4n["dirty-data"]) {
            delete j4n["dirty-data"];
            delete j4n[this.eU7N.pkey]
        }
        return D4H
    }
    ;
    b4f.XS3x = function() {
        var cpc4g = function(jY9P, lQ0x) {
            this.is9j.insertAdjacentElement(jY9P, lQ0x)
        };
        return function(jY9P, j4n) {
            var HW7P = [j4n];
            if (!!this.HN6H) {
                this.eU7N.xlist = HW7P;
                this.eU7N.beg = 0;
                this.eU7N.end = 0;
                this.eU7N.act = "add";
                this.Lm8e(a3x.bW5b(this.HN6H, this.eU7N), jY9P)
            } else {
                this.eU7N.limit = 1;
                this.eU7N.offset = 0;
                this.eU7N.parent = cpc4g.g4k(this, jY9P);
                var gI8A = a3x.yI4M(HW7P, this.LY8Q, this.eU7N);
                this.eU7N.parent = this.is9j;
                this.Ll8d(gI8A)
            }
        }
    }();
    b4f.Lt8l = bo5t;
    b4f.XH3x = function(T5Y) {
        var d4h = {
            parent: this.is9j
        };
        this.y4C(T5Y || "onafterlistload", d4h);
        if (!d4h.stopped) {
            a3x.mJ0x(this.ck5p)
        }
    }
    ;
    b4f.bhW7P = bo5t;
    b4f.XT3x = function(bC5H, jY9P) {
        if (k4o.fx7q(bC5H)) {
            if (!this.ck5p)
                this.ck5p = a3x.cX6R("div");
            this.ck5p.innerHTML = bC5H
        } else {
            this.ck5p = bC5H
        }
        this.is9j.insertAdjacentElement(jY9P || "beforeEnd", this.ck5p)
    }
    ;
    b4f.xg3x = function(T5Y, kY9P, jY9P) {
        var d4h = {
            parent: this.is9j
        };
        this.y4C(T5Y, d4h);
        if (!d4h.stopped) {
            this.XT3x(d4h.value || kY9P, jY9P)
        }
    }
    ;
    b4f.bhT7M = bo5t;
    b4f.Lm8e = bo5t;
    b4f.Ll8d = bo5t;
    b4f.cpf4j = function() {
        var gf8X = /^(?:delete|update)$/;
        return function(d4h) {
            var f4j = h4l.U5Z(d4h, "d:action");
            if (!f4j)
                return;
            var V5a = a3x.u4y(f4j, "action");
            if (!gf8X.test(V5a))
                return;
            var D4H = a3x.u4y(f4j, "id");
            if (!D4H)
                return;
            var q4u = this.R5W.eo7h(D4H);
            if (!q4u)
                return;
            h4l.bh5m(d4h);
            this.y4C("on" + V5a, {
                data: q4u,
                id: q4u[this.eU7N.pkey],
                body: a3x.z4D(this.bMm5r(D4H))
            })
        }
    }();
    b4f.Xz3x = bo5t;
    b4f.Uo2x = function(d4h) {
        var j4n = d4h.data || {}
          , e4i = {
            data: j4n,
            key: this.iI9z.key,
            id: j4n[this.eU7N.pkey]
        };
        this.y4C("onbeforedelete", e4i);
        this.R5W.Jd7W(e4i)
    }
    ;
    b4f.XB3x = bo5t;
    b4f.Un2x = function(d4h) {
        var j4n = d4h.data || {}
          , e4i = {
            data: j4n,
            key: this.iI9z.key
        };
        this.y4C("onbeforeupdate", e4i);
        this.R5W.Us2x(e4i)
    }
    ;
    b4f.bMH5M = function(d4h) {
        this.Le8W(d4h, "onafterupdate");
        if (d4h.stopped)
            return;
        var D4H = d4h.data[this.eU7N.pkey];
        if (!!this.fp7i) {
            var q4u = a3x.bDi3x(D4H);
            if (!!q4u)
                q4u.ga8S(d4h.data)
        } else {
            var f4j = a3x.z4D(D4H + "" + a3x.HL6F());
            if (!f4j)
                return;
            var i4m = this.R5W.gV8N(d4h.key)
              , r4v = k4o.cV6P(i4m, d4h.data);
            if (r4v < 0)
                return;
            this.eU7N.list = i4m;
            this.eU7N.beg = r4v;
            this.eU7N.end = r4v;
            this.eU7N.act = "update";
            var dD7w = a3x.bW5b(this.HN6H, this.eU7N);
            f4j.insertAdjacentHTML("afterEnd", dD7w);
            a3x.cC6w(f4j)
        }
    }
    ;
    b4f.Le8W = function(d4h, T5Y) {
        var q4u = d4h.data;
        if (!q4u || q4u[this.eU7N.pkey] == null) {
            this.y4C("onerror", d4h);
            d4h.stopped = !0
        }
        if (!d4h.stopped) {
            this.y4C(T5Y, d4h)
        }
    }
    ;
    b4f.bir7k = bo5t;
    b4f.biT8L = bo5t;
    b4f.bhC7v = function(d4h) {
        if (d4h.key != this.iI9z.key)
            return;
        switch (d4h.action) {
        case "add":
            this.Xz3x(d4h);
            break;
        case "delete":
            this.XB3x(d4h);
            break;
        case "update":
            this.bMH5M(d4h);
            break;
        case "refresh":
            this.ga8S();
            break;
        case "unshift":
            this.biT8L(d4h.offset, d4h.limit);
            break;
        case "append":
            this.bir7k(d4h.offset, d4h.limit);
            break
        }
    }
    ;
    b4f.pc1x = function(q4u) {
        this.Un2x({
            data: q4u
        })
    }
    ;
    b4f.lK0x = function(q4u) {
        this.Uo2x({
            data: q4u
        })
    }
    ;
    b4f.ry1x = function(q4u) {
        this.R5W.iO9F({
            data: q4u,
            key: this.iI9z.key
        })
    }
    ;
    b4f.rv1x = function() {
        return this.R5W
    }
    ;
    b4f.biX8P = function(j4n) {
        this.XS3x("afterBegin", this.XN3x(j4n));
        return this.XR3x(j4n)
    }
    ;
    b4f.bPU6O = function(j4n) {
        this.XS3x("beforeEnd", this.XN3x(j4n));
        return this.XR3x(j4n)
    }
    ;
    b4f.ga8S = function() {
        this.Me8W();
        this.bhR7K()
    }
    ;
    b4f.cyq7j = function() {
        this.R5W.tT2x(this.iI9z.key);
        this.ga8S()
    }
    ;
    b4f.bks8k = function() {
        if (!!this.Xq2x)
            return;
        this.Xq2x = !0;
        this.xg3x("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.R5W.bks8k({
            key: this.iI9z.key,
            data: this.iI9z.data
        })
    }
    ;
    b4f.jp9g = function() {
        return this.R5W.jp9g(this.iI9z.key)
    }
    ;
    b4f.bQe6Y = function() {
        return this.iL9C
    }
    ;
    b4f.UB2x = function() {
        return this.R5W.UB2x(this.iI9z.key)
    }
    ;
    b4f.coZ4d = function() {
        return this.fp7i
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, fh7a = NEJ.R, k4o = c4g("nej.u"), a3x = c4g("nej.e"), N4R = c4g("nej.ut"), b4f, K4O;
    if (!!N4R.iK9B)
        return;
    N4R.iK9B = NEJ.C();
    b4f = N4R.iK9B.O4S(N4R.Xm2x);
    K4O = N4R.iK9B.cj5o;
    b4f.zo4s = function(bf5k, bm5r) {
        return K4O.zo4s.call(this, this.wC3x, bf5k, this.nS0x, bm5r)
    }
    ;
    b4f.bjg8Y = function(r4v) {
        var bf5k = 0;
        if (r4v > 1)
            bf5k = this.wC3x + (r4v - 2) * this.nS0x;
        return bf5k
    }
    ;
    b4f.zF4J = function(d4h) {
        K4O.zF4J.apply(this, arguments);
        if (!d4h.stopped) {
            this.bNe6Y(this.bjg8Y(d4h.index))
        }
    }
    ;
    b4f.Lt8l = function() {
        this.Me8W();
        this.xg3x("onbeforelistload", "列表加载中...")
    }
    ;
    b4f.XH3x = function() {
        K4O.XH3x.apply(this, arguments);
        this.Me8W()
    }
    ;
    b4f.bhW7P = function(i4m, bf5k, gc8U) {
        var bv5A = this.zo4s(bf5k, i4m.length);
        if (this.bND6x(bv5A.index, bv5A.total))
            return !0;
        this.bhL7E(bv5A.total > 1 ? "" : "none")
    }
    ;
    b4f.bhT7M = function() {
        this.xg3x("onemptylist", "没有列表数据！")
    }
    ;
    b4f.XT3x = function(bC5H, jY9P) {
        if (!jY9P && k4o.fx7q(bC5H)) {
            this.is9j.innerHTML = bC5H;
            return
        }
        K4O.XT3x.apply(this, arguments)
    }
    ;
    b4f.Lm8e = function(dD7w) {
        this.is9j.innerHTML = dD7w
    }
    ;
    b4f.Ll8d = function(gI8A) {
        this.fp7i = gI8A
    }
    ;
    b4f.Xz3x = function(d4h) {
        this.Le8W(d4h, "onafteradd");
        if (!d4h.stopped)
            this.ga8S()
    }
    ;
    b4f.XB3x = function(d4h) {
        this.Le8W(d4h, "onafterdelete");
        if (!d4h.stopped)
            this.ga8S()
    }
    ;
    b4f.bir7k = function(bf5k, gc8U) {
        var r4v = 1;
        if (!!this.iL9C) {
            r4v = this.iL9C.sl2x()
        }
        var jm9d = this.bjg8Y(r4v)
          , gG8y = jm9d + (r4v > 1 ? this.nS0x : this.wC3x);
        if (bf5k >= gG8y && !!this.iL9C) {
            var bv5A = this.zo4s(0, this.jp9g());
            this.iL9C.bft7m(bv5A.total);
            this.bhL7E(bv5A.total > 1 ? "" : "none")
        } else {
            this.ga8S()
        }
    }
    ;
    b4f.biT8L = function(bf5k, gc8U) {
        var r4v = 1;
        if (!!this.iL9C) {
            r4v = this.iL9C.sl2x()
        }
        var jm9d = this.bjg8Y(r4v)
          , bv5A = this.zo4s(jm9d, this.jp9g());
        this.zF4J({
            last: r4v,
            index: bv5A.index
        })
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, a3x = c4g("nej.e"), h4l = c4g("nej.v"), G4K = c4g("nej.ut"), k4o = c4g("nej.u"), l4p = c4g("nm.x"), p4t = c4g("nm.d"), B4F = c4g("nm.w"), fl7e = 40, b4f, K4O;
    B4F.Yh3x = NEJ.C();
    b4f = B4F.Yh3x.O4S(G4K.cy5D);
    K4O = B4F.Yh3x.cj5o;
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.KA7t = e4i.inputer;
        this.bjn8f = e4i.tipper;
        this.bS5X([[this.KA7t, "input", this.fr7k.g4k(this)]])
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        this.Hp6j(null, null)
    }
    ;
    b4f.fr7k = function(d4h) {
        if (d4h && d4h.type == "keyup" && (d4h.keyCode != 8 || d4h.keyCode != 68))
            return;
        var T5Y = this.KA7t.value, cys7l;
        if (l4p.Sm1x(T5Y) > fl7e) {
            this.KA7t.value = l4p.zN4R(T5Y, fl7e);
            this.Hp6j("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g4k(this))
        } else if (T5Y.indexOf("#") >= 0 || T5Y.indexOf("@") >= 0) {
            this.Hp6j("歌单名不能包含字符“@”和“#”！")
        } else {
            this.Hp6j(null, null);
            this.y4C("onchange", {
                value: T5Y
            })
        }
    }
    ;
    b4f.coW4a = function() {
        this.fr7k()
    }
    ;
    b4f.Hp6j = function() {
        var D4H = 0;
        return function(du6o, bQy6s) {
            if (!!D4H)
                window.clearTimeout(D4H);
            if (!du6o) {
                a3x.x4B(this.bjn8f, "f-vhide");
                this.bQD8v = !1;
                return
            }
            this.bjn8f.innerHTML = '<i class="u-icn u-icn-25"></i>' + du6o;
            a3x.v4z(this.bjn8f, "f-vhide");
            this.bQD8v = !0;
            if (k4o.gb8T(bQy6s))
                D4H = window.setTimeout(function() {
                    this.Hp6j(null, null);
                    bQy6s()
                }
                .g4k(this), 1e3)
        }
    }();
    b4f.bQI8A = function() {
        if (this.bQD8v)
            return !1;
        if (l4p.jq9h(this.KA7t.value)) {
            this.Hp6j("歌单名不能为空");
            return !1
        }
        return !0
    }
    ;
    b4f.fB7u = function() {
        return this.KA7t.value
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, h4l = c4g("nej.v"), a3x = c4g("nej.e"), w4A = c4g("nej.j"), n4r = c4g("nm.l"), B4F = c4g("nm.w"), bD5I = c4g("nej.ui"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), b4f, K4O;
    n4r.Yi3x = NEJ.C();
    b4f = n4r.Yi3x.O4S(n4r.dZ7S);
    K4O = n4r.Yi3x.cj5o;
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        var i4m = a3x.I4M(this.m4q, "j-flag");
        this.Yk3x = {
            inputer: i4m[0],
            tipper: i4m[1]
        };
        this.ic8U = {
            onerror: this.btT0x.g4k(this),
            onitemadd: this.btT0x.g4k(this)
        };
        this.kx9o = i4m[2];
        h4l.s4w(i4m[2], "click", this.BM5R.g4k(this));
        h4l.s4w(i4m[3], "click", this.zg4k.g4k(this));
        h4l.s4w(this.m4q, "keypress", this.buc1x.g4k(this))
    }
    ;
    b4f.bZ5e = function() {
        this.cb5g = "m-wgt-create"
    }
    ;
    b4f.bj5o = function(e4i) {
        e4i.clazz = " m-layer-w2";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "新建歌单";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bk5p(e4i);
        this.Yk3x.inputer.value = e4i.name || "";
        this.tI2x = B4F.Yh3x.A4E(this.Yk3x);
        this.tI2x.coW4a();
        this.R5W = p4t.ht8l.A4E(this.ic8U);
        setTimeout(function() {
            this.Yk3x.inputer.focus()
        }
        .g4k(this), 0)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        if (this.tI2x) {
            this.tI2x.S5X();
            delete this.tI2x
        }
        this.sz2x(!1);
        this.Yk3x.inputer.value = ""
    }
    ;
    b4f.sz2x = function(SA1x) {
        this.od0x = SA1x;
        if (SA1x) {
            this.kx9o.innerHTML = "<i>新建中...</i>";
            a3x.x4B(this.kx9o, "u-btn2-dis")
        } else {
            this.kx9o.innerHTML = "<i>新 建</i>";
            a3x.v4z(this.kx9o, "u-btn2-dis")
        }
    }
    ;
    b4f.BM5R = function() {
        if (this.od0x || !this.tI2x.bQI8A())
            return;
        var cr5w = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.tI2x.fB7u()
            },
            offset: 1
        };
        this.R5W.iO9F(cr5w);
        this.sz2x(!0)
    }
    ;
    b4f.btT0x = function(d4h) {
        var cd5i = (d4h.result || Y5d).code;
        if (!cd5i) {
            this.y4C("onsuccess", d4h.data)
        } else {
            this.y4C("onerror", d4h)
        }
        this.br5w()
    }
    ;
    b4f.zg4k = function() {
        this.br5w()
    }
    ;
    b4f.buc1x = function(d4h) {
        if (d4h.keyCode == 13)
            this.BM5R()
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), w4A = c4g("nej.j"), l4p = c4g("nm.x"), p4t = c4g("nm.d"), n4r = c4g("nm.l"), b4f, K4O;
    n4r.bjU8M = NEJ.C();
    b4f = n4r.bjU8M.O4S(n4r.dZ7S);
    K4O = n4r.bjU8M.cj5o;
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        var i4m = a3x.I4M(this.m4q, "j-flag");
        this.ia8S = {
            limit: 301,
            parent: i4m[1],
            cache: {
                klass: p4t.ht8l,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bjW8O.g4k(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: l4p.zP4T,
                escape: k4o.dI7B
            }
        };
        this.ic8U = {
            onsuccess: this.Ys3x.g4k(this),
            onerror: this.er7k.g4k(this)
        };
        h4l.s4w(i4m[0], "click", this.BM5R.g4k(this));
        h4l.s4w(i4m[1], "click", this.lx9o.g4k(this))
    }
    ;
    b4f.bZ5e = function() {
        this.cb5g = "m-wgt-subscribe"
    }
    ;
    b4f.bj5o = function(e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.clazz = " m-layer-w2";
        e4i.title = "添加到歌单";
        e4i.draggable = !0;
        e4i.mask = !0;
        this.bk5p(e4i);
        this.Yu3x = (e4i.tracks || []).reverse();
        this.ia8S.item.size = this.Yu3x.length;
        this.ic8U.name = e4i.name || "";
        this.buD1x = p4t.vv3x.A4E({
            onaddsuccess: this.Bs4w.g4k(this)
        });
        this.rS1x = p4t.ht8l.A4E({
            onlistload: this.coV4Z.g4k(this)
        });
        this.rS1x.bPJ6D();
        k4o.bb5g(this.Yu3x, function(q4u, r4v, i4m) {
            if (!k4o.kW9N(q4u)) {
                i4m[r4v] = this.buD1x.eo7h(q4u) || q4u
            }
        }, this)
    }
    ;
    b4f.coV4Z = function() {
        if (this.dy6s)
            this.dy6s.S5X();
        this.dy6s = G4K.iK9B.A4E(this.ia8S)
    }
    ;
    b4f.BM5R = function() {
        this.br5w();
        if (this.Ca5f)
            this.Ca5f.S5X();
        this.Ca5f = n4r.Yi3x.A4E(this.ic8U);
        this.Ca5f.M4Q()
    }
    ;
    b4f.lx9o = function() {
        var coU4Y = function(f4j) {
            while (f4j && f4j != document) {
                if (f4j.tagName.toLowerCase() == "li") {
                    return f4j
                }
                f4j = f4j.parentNode
            }
        };
        return function(d4h) {
            h4l.ci5n(d4h);
            var F4J = h4l.U5Z(d4h)
              , bkc8U = coU4Y(F4J);
            if (!!bkc8U && !a3x.bz5E(bkc8U, "dis")) {
                this.Ys3x({
                    id: a3x.u4y(bkc8U, "id")
                })
            }
        }
    }();
    b4f.Ys3x = function(d4h) {
        var D4H = d4h.id;
        if (!D4H || !this.Yu3x.length)
            return;
        this.buD1x.iO9F({
            key: "track_playlist-" + D4H,
            data: {
                tracks: this.Yu3x,
                pid: D4H
            }
        });
        this.br5w()
    }
    ;
    b4f.Bs4w = function() {
        this.y4C("onsuccess");
        n4r.X5c.M4Q({
            tip: "收藏成功"
        })
    }
    ;
    b4f.er7k = function(d4h) {
        this.br5w();
        this.y4C("onerror", d4h);
        var cE6y = "收藏失败";
        switch (d4h.code) {
        case 405:
            cE6y = "操作过于频繁，先休息一下再试吧";
            break;
        case 507:
            cE6y = "歌单数量超过限制";
            break;
        case 502:
            cE6y = "歌曲已经存在"
        }
        n4r.X5c.M4Q({
            tip: cE6y,
            type: 2
        })
    }
    ;
    b4f.bjW8O = function() {
        this.br5w();
        n4r.X5c.M4Q({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    }
    ;
    l4p.lH0x = function(e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n4r.bjU8M.M4Q(e4i)
    }
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , bo5t = NEJ.F
      , dh6b = c4g("nej.p")
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , w4A = c4g("nej.j")
      , k4o = c4g("nej.u")
      , l4p = c4g("nm.x");
    var bkh8Z, nA0x, W5b = decodeURIComponent(location.href), jc9T = /.+(https?:\/\/.+\/proxy.html)/.test(W5b) ? RegExp.$1 : "";
    if (!!jc9T) {
        w4A.vT3x("mail_proxy_url", jc9T)
    } else {
        jc9T = w4A.us2x("mail_proxy_url") || "about:blank"
    }
    bkh8Z = a3x.baA5F({
        src: jc9T,
        onload: function() {
            nA0x = true
        }
    });
    var buU1x = function() {
        w4A.gQ8I("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var coT4X = function() {
        if (dh6b.dk6e.browser == "ie" && parseInt(dh6b.dk6e.version) < 9) {
            l4p.eW7P({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    l4p.RN1x = function(t4x, D4H, V5a) {
        if (!coT4X())
            return;
        buU1x();
        if (V5a == "stop") {
            if (!nA0x)
                throw "proxy not loaded";
            buU1x();
            bkh8Z.contentWindow.location.replace(jc9T + "#" + k4o.db6V({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bkh8Z.contentWindow.location.replace(jc9T + "#" + k4o.db6V({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: t4x,
                    id: D4H,
                    s: +(new Date),
                    action: V5a
                })
            }))
        }
    }
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , bo5t = NEJ.F
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , w4A = c4g("nej.j")
      , k4o = c4g("nej.u")
      , l4p = c4g("nm.x")
      , n4r = c4g("nm.l")
      , p4t = c4g("nm.d");
    var ky9p = p4t.hY8Q.A4E();
    var of0x = p4t.vv3x.A4E({
        onlistload: coS4W,
        onitemload: coR4V,
        onerror: er7k
    });
    var Cj5o = p4t.py1x.A4E({
        onlistload: coQ4U,
        onitemload: coP4T,
        onerror: er7k
    });
    var bvk1x = {};
    function uB2x(d4h) {
        var f4j = h4l.U5Z(d4h, "d:resAction")
          , V5a = a3x.u4y(f4j, "resAction");
        if (f4j && (V5a == "play" || V5a == "addto")) {
            var t4x = parseInt(a3x.u4y(f4j, "resType"));
            bvo1x({
                action: V5a,
                type: t4x,
                id: a3x.u4y(f4j, "resId"),
                from: a3x.u4y(f4j, "resFrom"),
                data: a3x.u4y(f4j, "resData"),
                order: a3x.u4y(f4j, "resOrder"),
                node: f4j
            });
            if (t4x != 13)
                bvp1x(f4j)
        }
    }
    function bvo1x(bP5U) {
        var V5a = bP5U.action
          , t4x = bP5U.type
          , D4H = bP5U.id
          , dP7I = bP5U.from
          , j4n = bP5U.data
          , rO1x = bP5U.order
          , e4i = {
            limit: 1e3,
            offset: 0,
            data: {
                id: D4H
            },
            ext: {
                id: D4H,
                action: V5a,
                type: t4x,
                from: dP7I,
                data: j4n,
                node: bP5U.node
            }
        };
        if (V5a != "play" && V5a != "addto" || !t4x)
            return;
        if (window.GRef && GRef == "mail") {
            l4p.RN1x(t4x, D4H, V5a);
            return
        }
        switch (t4x) {
        case 13:
            e4i.key = "track_playlist-" + D4H;
            of0x.kG9x(e4i);
            break;
        case 17:
            e4i.key = "program";
            e4i.id = D4H;
            Cj5o.Uu2x(e4i);
            if (V5a == "play") {
                w4A.bp5u("/api/dj/program/listen", {
                    query: {
                        id: D4H
                    }
                })
            }
            break;
        case 18:
            e4i.key = "track";
            e4i.id = D4H;
            of0x.Uu2x(e4i);
            break;
        case 19:
            e4i.key = "track_album-" + D4H;
            of0x.kG9x(e4i);
            break;
        case 24:
            e4i.key = "track_day";
            of0x.kG9x(e4i);
            break;
        case 2:
            e4i.key = "track_artist_top-" + D4H;
            of0x.kG9x(e4i);
            break;
        case 70:
            e4i.key = "program_djradio-" + D4H + "-" + rO1x;
            e4i.data.radioId = D4H;
            e4i.data.asc = rO1x == 2;
            Cj5o.kG9x(e4i);
            break
        }
    }
    function bvq1x(i4m) {
        var o4s = [];
        k4o.bb5g(i4m, function(q4u) {
            if (q4u.mainSong) {
                q4u.mainSong.program = q4u;
                o4s.push(q4u.mainSong);
                q4u.localupdatetime = +(new Date);
                of0x.cvk6e(q4u.mainSong);
                q4u.mainTrackId = q4u.mainSong.id;
                delete q4u.mainSong
            } else {
                var bvt1x = of0x.eo7h(q4u.mainTrackId);
                bvt1x && o4s.push(bvt1x)
            }
        });
        return o4s
    }
    function YC3x(i4m, e4i) {
        var qX1x = e4i.action == "play" && e4i.type != 17 && e4i.type != 18
          , fy7r = e4i.action == "play";
        if (!i4m.length)
            return;
        if (e4i.type == 19) {
            i4m = l4p.Jq7j(i4m, true, {
                play: true
            }, {
                source: "album",
                sourceid: e4i.id
            })
        } else {
            i4m = l4p.Jq7j(i4m, true, {
                play: true
            })
        }
        k4o.bb5g(i4m, function(q4u) {
            q4u.source = l4p.bka8S({
                fid: e4i.from,
                fdata: e4i.data,
                type: e4i.type,
                rid: e4i.id
            }, q4u.id)
        });
        top.player.addTo(i4m, qX1x, fy7r);
        ky9p.Qa0x({
            rid: e4i.id,
            type: e4i.type,
            hash: l4p.JV7O(),
            play: fy7r,
            source: e4i.from,
            sourceid: e4i.data
        })
    }
    function coS4W(d4h) {
        var eG7z = d4h.ext || {};
        i4m = of0x.gV8N(d4h.key);
        YC3x(i4m, eG7z);
        if (eG7z.type == 13 && eG7z.action == "play" && i4m && i4m.length > 0) {
            bvp1x(eG7z.node);
            w4A.bp5u("/api/playlist/update/playcount", {
                query: {
                    id: eG7z.id
                }
            })
        }
    }
    function coR4V(d4h) {
        var i4m = [of0x.eo7h(d4h.id)]
          , be5j = i4m[0]
          , pJ1x = l4p.pj1x(be5j)
          , su2x = be5j.privilege || {};
        if (pJ1x == 10) {
            l4p.sX2x(su2x.fee || be5j.fee, be5j.id, "song", null, su2x)
        } else if (pJ1x == 100) {
            l4p.in8f(null, null, null, true, be5j)
        } else if (pJ1x == 11) {
            l4p.bGN4R(be5j.id, 18)
        } else {
            YC3x(i4m, d4h.ext)
        }
    }
    function coQ4U(d4h) {
        var i4m = bvq1x(Cj5o.gV8N(d4h.key));
        YC3x(i4m, d4h.ext)
    }
    function coP4T(d4h) {
        var i4m = bvq1x([Cj5o.eo7h(d4h.id)]);
        YC3x(i4m, d4h.ext)
    }
    function er7k() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function bvp1x(f4j) {
        var t4x = a3x.u4y(f4j, "resType")
          , D4H = a3x.u4y(f4j, "resId")
          , J4N = t4x + "-" + D4H;
        if (bvk1x[J4N])
            return;
        var bvD1x = a3x.z4D("play-count")
          , bkI8A = a3x.I4M(f4j.parentNode, "nb")
          , Rk0x = null;
        if (bvD1x) {
            Rk0x = bvD1x
        } else {
            Rk0x = !!bkI8A && !!bkI8A[0] ? bkI8A[0] : null
        }
        if (Rk0x) {
            var cB5G = Rk0x.innerHTML;
            if (/^\d+$/.test(cB5G)) {
                Rk0x.innerText = +cB5G + 1
            }
            bvk1x[J4N] = true
        }
    }
    l4p.coO4S = function(f4j) {
        h4l.s4w(f4j || document.body, "click", uB2x.g4k(this))
    }
    ;
    l4p.coN4R = function(V5a, t4x, D4H) {
        bvo1x({
            action: V5a,
            type: t4x,
            id: D4H
        })
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), w4A = c4g("nej.j"), G4K = c4g("nej.ut"), p4t = c4g("nm.d"), b4f, K4O;
    p4t.eY7R({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function(o4s, e4i) {
                this.coM4Q(o4s, e4i)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function(o4s, e4i) {
                this.y4C("onshareall", e4i.result)
            },
            onerror: function(o4s, e4i) {
                this.y4C("onshareall", e4i.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(o4s, e4i) {
                e4i.options.picUrl = o4s.picUrl;
                this.bvP1x(e4i.options, e4i.result)
            },
            onerror: function(o4s, e4i) {
                this.y4C("onshareall", e4i.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(P4T, e4i) {
                this.oT1x("vid_info-" + e4i.data.nosKey, P4T);
                return P4T
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit",
            filter: function(e4i) {},
            format: function(o4s, e4i) {
                e4i.data = e4i.data2;
                this.ch5m("share-all", e4i)
            },
            onerror: "onshareerror"
        }
    });
    p4t.ble8W = NEJ.C();
    b4f = p4t.ble8W.O4S(p4t.he8W);
    b4f.coL4P = function() {
        var tA2x = function(P4T, e4i) {
            e4i.times++;
            if (e4i.times > 10) {
                this.y4C("onvinfoerror", e4i.key, P4T)
            } else {
                setTimeout(eB7u.g4k(this, e4i), e4i.times * 1e3)
            }
        };
        var xl3x = function(P4T, e4i) {
            this.y4C("onvinfo", e4i.key, P4T)
        };
        var eB7u = function(e4i) {
            var W5b = e4i.url;
            w4A.bp5u(W5b + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: xl3x.eb7U(this, e4i),
                onerror: tA2x.eb7U(this, e4i)
            })
        };
        return function(e4i) {
            e4i.times = 0;
            eB7u.call(this, e4i)
        }
    }();
    b4f.cyt7m = function() {
        var QI0x;
        var tA2x = function(P4T, e4i) {
            if (P4T.code > 0) {
                clearInterval(this.Cz5E);
                this.y4C("onviderror", e4i.data.nosKey)
            }
        };
        var xl3x = function(J4N, P4T) {
            if (P4T.vid && P4T.covers) {
                clearInterval(this.Cz5E);
                this.y4C("onvid", J4N, P4T)
            }
        };
        var eB7u = function(e4i) {
            if (+(new Date) - QI0x > 60 * 60 * 1e3) {
                clearInterval(this.Cz5E);
                this.y4C("onviderror", e4i.data.nosKey);
                return
            }
            e4i.onload = xl3x.g4k(this, e4i.data.nosKey);
            e4i.onerror = tA2x.g4k(this);
            this.ch5m("vid-get", e4i)
        };
        return function(e4i) {
            if (!e4i || !e4i.data)
                return;
            QI0x = +(new Date);
            this.Cz5E = clearInterval(this.Cz5E);
            this.Cz5E = setInterval(eB7u.g4k(this, e4i), 1e4);
            eB7u.apply(this, arguments)
        }
    }();
    b4f.coJ4N = function() {
        this.Cz5E = clearInterval(this.Cz5E)
    }
    ;
    b4f.coM4Q = function(o4s, mR0x) {
        if (o4s.event && mR0x.snsTypes) {
            if (mR0x.pics) {
                var bwl1x = [];
                for (var i = 0, len = mR0x.pics.length; i < len; i++) {
                    bwl1x[i] = mR0x.pics[i].originId
                }
                this.ch5m("share_img_compound", {
                    data: {
                        picIds: bwl1x.join(",")
                    },
                    options: mR0x,
                    result: o4s
                })
            } else {
                mR0x.picUrl = mR0x.picUrl;
                this.bvP1x(mR0x, o4s)
            }
        } else {
            this.y4C("onshareall", o4s)
        }
        var yc3x = p4t.hY8Q.A4E();
        yc3x.gm8e(mR0x.isPub ? "pubevent" : "shareevent", {
            id: o4s.id
        })
    }
    ;
    b4f.bvP1x = function(mR0x, o4s) {
        var cr5w = {};
        cr5w.eventid = o4s.event.id;
        cr5w.eventtype = o4s.event.type;
        mR0x.picUrl && (cr5w.picUrl = mR0x.picUrl);
        cr5w.snsTypes = mR0x.snsTypes;
        cr5w.msg = mR0x.data.msg || "";
        cr5w.type = mR0x.data.type;
        mR0x.data.id && (cr5w.id = mR0x.data.id);
        this.ch5m("share-sns", {
            data: cr5w,
            result: o4s
        })
    }
    ;
    b4f.coH4L = function(e4i) {
        var j4n = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k4o.nh0x(5)
        };
        j4n = NEJ.EX(j4n, e4i);
        if (!(j4n.id > 0)) {
            delete j4n.id;
            j4n.type = "noresource"
        }
        if (!j4n.threadId) {
            delete j4n.threadId
        }
        if (!j4n.actId) {
            delete j4n.actId
        }
        if (!j4n.pics) {
            delete j4n.pics
        } else {
            j4n.pics = JSON.stringify(j4n.pics)
        }
        this.ch5m("share-all", {
            data: j4n,
            snsTypes: e4i.snsTypes,
            picUrl: e4i.picUrl,
            pics: e4i.pics,
            isPub: e4i.isPub
        })
    }
    ;
    b4f.coG4K = function(e4i) {
        this.ch5m("share-private", e4i)
    }
    ;
    b4f.coF4J = function(e4i) {
        this.ch5m("video-submit", e4i)
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), b4f, K4O;
    var coE4I = {
        40: !0
    };
    p4t.eY7R({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e4i) {
                e4i.data.getcounts = true;
                e4i.data.pagesize = e4i.data.limit;
                if (e4i.data.offset == 0) {
                    e4i.data.lasttime = -1
                }
                delete e4i.data.offset
            },
            format: function(P4T, e4i) {
                P4T.event = l4p.WH2x(P4T.event, function(q4u, r4v) {
                    return !coE4I[q4u.type]
                });
                this.coD4H(P4T.event);
                e4i.data.lasttime = P4T.lasttime;
                if (P4T.event.length) {
                    P4T.event.length = e4i.limit
                }
                return {
                    list: P4T.event,
                    total: P4T.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(P4T, e4i) {
                return {
                    list: P4T.events,
                    total: P4T.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e4i) {
                e4i.data.pagesize = 20
            },
            format: function(P4T, e4i) {
                return P4T.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e4i) {
                e4i.data.time = -1;
                e4i.data.getcounts = true
            },
            format: function(P4T, e4i) {
                P4T.events.length = e4i.limit;
                return {
                    list: P4T.events,
                    total: P4T.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(o4s, e4i) {
                o4s.conf = e4i.conf;
                return o4s
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e4i, bd5i) {
                if (e4i.like) {
                    if (e4i.comment) {
                        bd5i.url = "/api/v1/comment/like"
                    } else {
                        bd5i.url = "/api/resource/like"
                    }
                    bd5i.onload = "oneventlike";
                    bd5i.onerror = "oneventlikeerr"
                } else {
                    if (e4i.comment) {
                        bd5i.url = "/api/v1/comment/unlike"
                    } else {
                        bd5i.url = "/api/resource/unlike"
                    }
                    bd5i.onload = "oneventunlike";
                    bd5i.onerror = "oneventunlikeerr"
                }
            },
            format: function(o4s, e4i) {
                o4s.eid = e4i.eid;
                o4s.origin = e4i.origin;
                o4s.ext = e4i.ext;
                return o4s
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e4i, bd5i) {
                if (e4i.data.type == "nointer") {
                    bd5i.url = "/api/event/rcmd/reject"
                } else if (e4i.data.transcoding) {
                    bd5i.url = "/api/event/video/transcoding/delete"
                } else {
                    bd5i.url = "/api/event/delete"
                }
            },
            format: function(o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(o4s, e4i) {
                o4s.id = e4i.data.id;
                return o4s
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e4i) {
                e4i.data.lasttime = e4i.data.lasttime || -1;
                e4i.data.pagesize = e4i.data.limit;
                e4i.data.getcounts = true;
                delete e4i.data.offset
            },
            format: function(P4T, e4i) {
                e4i.data.lasttime = P4T.lasttime;
                var i4m = P4T.events;
                if (P4T.more)
                    i4m = this.coC4G(i4m, e4i.data.pagesize);
                return {
                    list: i4m,
                    total: P4T.size
                }
            },
            onerror: "onlisterror"
        }
    });
    p4t.zb4f = NEJ.C();
    b4f = p4t.zb4f.O4S(p4t.he8W);
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.blN8F = function(t4x, cP6J) {
        return t4x + "-" + cP6J
    }
    ;
    b4f.cyu7n = function(e4i) {
        this.ch5m("ievent-get", e4i)
    }
    ;
    b4f.cyv7o = function(e4i) {
        this.ch5m("ievent-new-get", e4i)
    }
    ;
    b4f.cyx7q = function(e4i) {
        this.ch5m("ievent-user-get", e4i)
    }
    ;
    b4f.cyy7r = function(t4x, cP6J) {
        return this.qs1x(this.blN8F(t4x, cP6J))
    }
    ;
    b4f.cyz7s = function(GR6L, e4i) {
        if (!GR6L || !GR6L.length)
            return;
        e4i = e4i || {};
        var bu5z = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, Fy6s = [], bxd1x = [], j4n; i < GR6L.length; ++i) {
            j4n = GR6L[i];
            j4n = this.qs1x(this.blN8F(j4n.type, j4n.id));
            if (!j4n) {
                Fy6s.push(GR6L[i].id);
                bxd1x.push(bu5z[GR6L[i].type] || 0)
            }
        }
        if (!Fy6s.length) {
            this.y4C("oneventresload", e4i.conf);
            return
        }
        e4i.data = {
            ids: JSON.stringify(Fy6s),
            types: JSON.stringify(bxd1x)
        };
        e4i.onload = this.cov4z.g4k(this);
        this.ch5m("ievent-res-get", e4i)
    }
    ;
    b4f.cov4z = function(o4s) {
        if (o4s.code != 200) {
            this.y4C("oneventreserror", o4s.code);
            return
        }
        var bu5z = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, i4m = o4s.results; i < i4m.length; ++i) {
            this.oT1x(this.blN8F(bu5z[i4m[i].type], i4m[i].id), i4m[i])
        }
        this.y4C("oneventresload", o4s.conf)
    }
    ;
    b4f.bxi1x = function(j4n) {
        var J4N = "event-list";
        this.bkN8F(J4N, j4n);
        this.y4C("onitemadd", {
            key: J4N,
            action: "add",
            data: j4n,
            flag: -1
        })
    }
    ;
    b4f.xA3x = function(e4i) {
        this.ch5m("ievent-like", e4i)
    }
    ;
    b4f.lK0x = function(e4i) {
        this.ch5m("ievent-delete", e4i)
    }
    ;
    b4f.coC4G = function(i4m, gc8U) {
        for (var i = i4m.length; i < gc8U; i++)
            i4m.push(null);
        return i4m
    }
    ;
    b4f.coD4H = function(i4m) {
        var o4s = [];
        if (!i4m || !i4m.length)
            return;
        k4o.bb5g(i4m, function(d4h) {
            d4h.biData = this.bxk1x(d4h)
        }, this)
    }
    ;
    b4f.bxk1x = function() {
        var UF2x = {
            32: "comment",
            33: "activity",
            34: "recomment_artist"
        }
          , cou4y = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d4h) {
            var P4T = {
                id: d4h.id,
                sourceid: d4h.user.userId,
                alg: d4h.rcmdInfo ? d4h.rcmdInfo.alg : null,
                contentType: UF2x[d4h.type] || (k4o.cV6P(cou4y, d4h.type) != -1 ? "user_event" : "other")
            };
            return P4T
        }
    }();
    b4f.CO5T = function(cot4x, d4h) {
        var P4T = this.bxk1x(d4h);
        P4T.actionType = cot4x;
        if (window.log)
            log("eventclick", P4T)
    }
    ;
    b4f.cyA7t = function(e4i) {
        this.ch5m("event_latest-list", e4i)
    }
}
)();
(function(factory) {
    window.SparkMD5 = factory()
}
)(function(undefined) {
    "use strict";
    var add32 = function(a, b) {
        return a + b & 4294967295
    }
      , hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }
    function md5cycle(x, k) {
        var a = x[0]
          , b = x[1]
          , c = x[2]
          , d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }
    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }
    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }
    function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }
    function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }
    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }
    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function(x, y) {
            var lsw = (x & 65535) + (y & 65535)
              , msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function() {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }
            ArrayBuffer.prototype.slice = function(from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this,begin,num);
                targetArray.set(sourceArray);
                return target
            }
        }
        )()
    }
    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }
    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }
    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }
    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }
    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }
    function SparkMD5() {
        this.reset()
    }
    SparkMD5.prototype.append = function(str) {
        this.appendBinary(toUtf8(str));
        return this
    }
    ;
    SparkMD5.prototype.appendBinary = function(contents) {
        this.qk1x += contents;
        this.bm5r += contents.length;
        var length = this.qk1x.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dN7G, md5blk(this.qk1x.substring(i - 64, i)))
        }
        this.qk1x = this.qk1x.substring(i - 64);
        return this
    }
    ;
    SparkMD5.prototype.end = function(raw) {
        var buff = this.qk1x, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.oj0x(tail, length);
        ret = hex(this.dN7G);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.prototype.reset = function() {
        this.qk1x = "";
        this.bm5r = 0;
        this.dN7G = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.prototype.getState = function() {
        return {
            buff: this.qk1x,
            length: this.bm5r,
            hash: this.dN7G
        }
    }
    ;
    SparkMD5.prototype.setState = function(state) {
        this.qk1x = state.buff;
        this.bm5r = state.length;
        this.dN7G = state.hash;
        return this
    }
    ;
    SparkMD5.prototype.destroy = function() {
        delete this.dN7G;
        delete this.qk1x;
        delete this.bm5r
    }
    ;
    SparkMD5.prototype.oj0x = function(tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dN7G, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bm5r * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dN7G, tail)
    }
    ;
    SparkMD5.hash = function(str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    }
    ;
    SparkMD5.hashBinary = function(content, raw) {
        var hash = md51(content)
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    SparkMD5.ArrayBuffer = function() {
        this.reset()
    }
    ;
    SparkMD5.ArrayBuffer.prototype.append = function(arr) {
        var buff = concatenateArrayBuffers(this.qk1x.buffer, arr, true), length = buff.length, i;
        this.bm5r += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dN7G, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.qk1x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.end = function(raw) {
        var buff = this.qk1x, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.oj0x(tail, length);
        ret = hex(this.dN7G);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    }
    ;
    SparkMD5.ArrayBuffer.prototype.reset = function() {
        this.qk1x = new Uint8Array(0);
        this.bm5r = 0;
        this.dN7G = [1732584193, -271733879, -1732584194, 271733878];
        return this
    }
    ;
    SparkMD5.ArrayBuffer.prototype.getState = function() {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    }
    ;
    SparkMD5.ArrayBuffer.prototype.setState = function(state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    }
    ;
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.oj0x = SparkMD5.prototype.oj0x;
    SparkMD5.ArrayBuffer.hash = function(arr, raw) {
        var hash = md51_array(new Uint8Array(arr))
          , ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    }
    ;
    return SparkMD5
});
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , bo5t = NEJ.F
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , w4A = c4g("nej.j")
      , dU7N = c4g("nej.g")
      , k4o = c4g("nej.u")
      , fo7h = c4g("nej.n")
      , G4K = c4g("nej.ut")
      , l4p = c4g("nm.x")
      , p4t = c4g("nm.d")
      , iW9N = c4g("nm.x.nos")
      , B4F = c4g("nm.w");
    var coq4u = 1024 * 256
      , cop4t = 1024 * 1024 * 2
      , pD1x = {
        TOKEN_ERROR: -100,
        DNS_ERROR: -101
    }
      , bxI1x = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bo5t
      , pC1x = {
        MD5_DONE: .2,
        TOKEN_GET: .22,
        DNS_GET: .24,
        UPLOADED: 1
    }
      , jA9r = {
        AUDIO: "audio",
        IMAGE: "image",
        TXT: "txt",
        RAR: "rar",
        OTHER: "other",
        VIDEO: "video"
    };
    var ni0x = {};
    var yc3x = p4t.hY8Q.A4E();
    iW9N.cyC7v = function() {
        return jA9r
    }
    ;
    var com4q = function() {
        return k4o.nh0x(6) + +(new Date)
    };
    var GP6J = function(ib8T, e4i) {
        if (!ni0x[e4i.taskId]) {
            return
        }
        (e4i.onuploading || bo5t).call(this, ib8T)
    };
    var bmA9r = function(Q5V) {
        var col4p = Q5V.md5
          , cM6G = Q5V.file
          , cok4o = col4p + cM6G.size;
        return "nos_file_hash_" + cok4o
    };
    var coj4n = function(Q5V) {
        var J4N = bmA9r(Q5V)
          , j4n = w4A.bQp6j(J4N, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        return j4n
    };
    var coh4l = function(Q5V, e4i) {
        if (!Q5V.md5) {
            return
        }
        var J4N = bmA9r(Q5V)
          , j4n = w4A.bQp6j(J4N, "{}");
        try {
            j4n = JSON.parse(j4n)
        } catch (e) {
            j4n = {}
        }
        NEJ.X(j4n, e4i);
        w4A.vT3x(J4N, JSON.stringify(j4n))
    };
    var cog4k = function(Q5V) {
        var J4N = bmA9r(Q5V);
        w4A.Pd0x(J4N)
    };
    var cof4j = function(Q5V, gj8b) {
        var W5b = Q5V.urls[Math.min(Q5V.urlIndex, Q5V.urls.length - 1)]
          , cM6G = Q5V.file
          , kn9e = Q5V.bucket
          , lP0x = Q5V.objectKey
          , ex7q = Q5V.token
          , bM5R = Q5V.context
          , nQ0x = {}
          , Oc9T = bxI1x.call(cM6G, Q5V.beg, Q5V.end)
          , bw5B = {
            offset: Q5V.beg,
            complete: Q5V.lastChunk || false,
            version: "1.0"
        };
        if (bM5R) {
            bw5B.context = bM5R
        }
        nQ0x["x-nos-token"] = ex7q;
        nQ0x[dU7N.yj4n] = cM6G.type;
        Q5V.reqId = w4A.bp5u(W5b + "/" + kn9e + "/" + lP0x, {
            type: "json",
            method: "POST",
            headers: nQ0x,
            query: bw5B,
            data: Oc9T,
            onload: gj8b.onload,
            onerror: gj8b.onerror
        })
    };
    var coe4i = function(o4s, Q5V, e4i) {
        o4s = {
            code: 200,
            fileName: e4i.file.name,
            size: e4i.file.size,
            type: e4i.file.type,
            bucket: Q5V.bucket,
            docId: Q5V.docId,
            objectKey: Q5V.objectKey,
            url: "//nos.netease.com/" + Q5V.bucket + "/" + Q5V.objectKey
        };
        cog4k(Q5V);
        if (!ni0x[e4i.taskId]) {
            return
        }
        delete ni0x[e4i.taskId];
        yc3x.gm8e("sysaction", {
            type: "nosuploadsuccess",
            location: location.href,
            result: JSON.stringify(o4s)
        });
        (e4i.onsuccess || bo5t).call(this, o4s)
    };
    var coc4g = function(o4s, e4i) {
        (e4i.onerror || bo5t).call(this, o4s)
    };
    var coa4e = function(o4s, Q5V, e4i) {
        Q5V.context = o4s.context;
        Q5V.beg = o4s.offset;
        var ib8T = Q5V.beg / Q5V.file.size;
        coh4l(Q5V, {
            bucket: Q5V.bucket,
            objectKey: Q5V.objectKey,
            token: Q5V.token,
            context: Q5V.context,
            beg: Q5V.beg,
            updateTime: +(new Date)
        });
        ib8T = pC1x.DNS_GET + (pC1x.UPLOADED - pC1x.DNS_GET) * ib8T;
        GP6J(ib8T, e4i);
        if (Q5V.lastChunk) {
            coe4i(o4s, Q5V, e4i)
        } else {
            ZJ5O(Q5V, e4i)
        }
    };
    var cnZ4d = function(o4s, Q5V, e4i) {
        yc3x.gm8e("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o4s.data,
            body: o4s.extData,
            ext: JSON.stringify(Q5V),
            timging: +(new Date) - Q5V.chuckUploadStartTime
        });
        if (Q5V.urlIndex < Math.max(Q5V.urls.length - 1, 5)) {
            Q5V.urlIndex++;
            ZJ5O(Q5V, e4i)
        } else {
            coc4g(o4s, e4i)
        }
    };
    var ZJ5O = function(Q5V, e4i) {
        if (!Q5V || Q5V.step == -1) {
            return
        }
        Q5V.end = Q5V.beg + coq4u;
        if (Q5V.end >= Q5V.file.size) {
            Q5V.end = Q5V.file.size;
            Q5V.lastChunk = true
        }
        Q5V.chuckUploadStartTime = +(new Date);
        cof4j(Q5V, {
            onload: coa4e.eb7U(this, Q5V, e4i),
            onerror: cnZ4d.eb7U(this, Q5V, e4i)
        })
    };
    var cnY4c = function(o4s, Q5V, e4i) {
        Q5V.beg = o4s.offset;
        var ib8T = Q5V.beg / Q5V.file.size;
        ib8T = pC1x.DNS_GET + (pC1x.UPLOADED - pC1x.DNS_GET) * ib8T;
        GP6J(ib8T, e4i);
        ZJ5O(Q5V, e4i)
    };
    var cnX4b = function(o4s, Q5V, e4i) {
        Q5V.beg = 0;
        delete Q5V.context;
        bnS9J(Q5V, e4i)
    };
    var byD2x = function(Ns8k, Q5V, e4i) {
        Q5V.lastChunk = false;
        Q5V.urls = Ns8k;
        Q5V.urlIndex = 0;
        GP6J(pC1x.DNS_GET, e4i);
        if (Q5V.fromExist) {
            delete Q5V.fromExist;
            var W5b = Q5V.urls[Math.min(Q5V.urlIndex, Q5V.urls.length - 1)]
              , kn9e = Q5V.bucket
              , lP0x = Q5V.objectKey
              , ex7q = Q5V.token
              , bM5R = Q5V.context
              , nQ0x = {}
              , bw5B = {
                context: bM5R,
                version: "1.0"
            };
            nQ0x["x-nos-token"] = ex7q;
            Q5V.reqId = w4A.bp5u(W5b + "/" + kn9e + "/" + lP0x + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: nQ0x,
                query: bw5B,
                onload: cnY4c.eb7U(this, Q5V, e4i),
                onerror: cnX4b.eb7U(this, Q5V, e4i)
            })
        } else {
            Q5V.beg = 0;
            ZJ5O(Q5V, e4i)
        }
    };
    var cnV4Z = function(o4s, Q5V, e4i) {
        o4s.code = pD1x.DNS_ERROR;
        (e4i.onerror || bo5t).call(this, o4s)
    };
    var byG2x = function(j4n, e4i) {
        var o4s = j4n.result || {}
          , kn9e = o4s.bucket
          , lP0x = o4s.objectKey
          , ex7q = o4s.token
          , Q5V = ni0x[e4i.taskId];
        if (!kn9e || !lP0x || !ex7q || !Q5V) {
            o4s.code = pD1x.TOKEN_ERROR;
            (e4i.onerror || bo5t).call(this, o4s);
            return
        }
        Q5V.bucket = kn9e;
        Q5V.objectKey = lP0x;
        Q5V.docId = o4s.docId;
        Q5V.token = ex7q;
        GP6J(pC1x.TOKEN_GET, e4i);
        if (location.protocol == "https:") {
            byD2x(["//nosup-hz1.127.net"], Q5V, e4i)
        } else {
            Q5V.reqId = iW9N.cnS4W({
                bucket: kn9e,
                onload: byD2x.eb7U(this, Q5V, e4i),
                onerror: cnV4Z.eb7U(this, Q5V, e4i)
            })
        }
        Q5V.step = 1
    };
    var cnR4V = function(o4s, e4i) {
        o4s.code = pD1x.TOKEN_ERROR;
        (e4i.onerror || bo5t).call(this, o4s)
    };
    var bnS9J = function(Q5V, e4i) {
        var cM6G = e4i.file
          , eV7O = cM6G.name || ""
          , eG7z = eV7O.split(".").pop();
        iW9N.ZV5a(NEJ.X({
            filename: eV7O,
            ext: eG7z,
            onload: byG2x.eb7U(this, e4i),
            onerror: cnR4V.eb7U(this, e4i)
        }, e4i, function(q4u) {
            return k4o.gb8T(q4u) || k4o.kW9N(q4u)
        }))
    };
    var cnQ4U = function(Q5V, e4i) {
        if (!Q5V || Q5V.step == -1) {
            return
        }
        Q5V.md5 = Q5V.spark.end();
        var Gw6q = coj4n(Q5V) || {}
          , kn9e = Gw6q.bucket
          , lP0x = Gw6q.objectKey
          , ex7q = Gw6q.token;
        if (!kn9e || !lP0x || !ex7q) {
            bnS9J(Q5V, e4i)
        } else {
            Q5V.context = Gw6q.context;
            Q5V.beg = Gw6q.beg;
            Q5V.fromExist = true;
            byG2x({
                result: Gw6q
            }, e4i)
        }
    };
    var cnP4T = function(DA5F, Q5V, e4i) {
        if (!Q5V || Q5V.step == -1) {
            return
        }
        Q5V.beg = Q5V.end;
        var ib8T = Q5V.beg / Q5V.file.size;
        ib8T = 0 + pC1x.MD5_DONE * ib8T;
        GP6J(ib8T, e4i);
        Q5V.spark.append(DA5F.result);
        if (Q5V.lastChunk) {
            cnQ4U(Q5V, e4i)
        } else {
            byZ2x(Q5V, e4i)
        }
    };
    var cnM4Q = function(o4s, Q5V, e4i) {
        Q5V.md5 = "";
        bnS9J(Q5V, e4i)
    };
    var byZ2x = function(Q5V, e4i) {
        if (!Q5V || Q5V.step == -1) {
            return
        }
        Q5V.end = Q5V.beg + cop4t;
        if (Q5V.end >= Q5V.file.size) {
            Q5V.end = Q5V.file.size;
            Q5V.lastChunk = true
        }
        var DA5F = new FileReader;
        DA5F.onload = cnP4T.g4k(this, DA5F, Q5V, e4i);
        DA5F.onerror = cnM4Q.g4k(this, DA5F, Q5V, e4i);
        DA5F.readAsArrayBuffer(bxI1x.call(Q5V.file, Q5V.beg, Q5V.end))
    };
    iW9N.gr8j = function(e4i) {
        var cM6G = e4i.file
          , eV7O = cM6G.name || ""
          , eG7z = eV7O.split(".").pop()
          , DC5H = com4q();
        e4i.taskId = DC5H;
        ni0x[DC5H] = {
            step: 0
        };
        GP6J(0, e4i);
        var Q5V = ni0x[DC5H];
        Q5V.id = DC5H;
        Q5V.file = cM6G;
        Q5V.beg = 0;
        Q5V.lastChunk = false;
        Q5V.spark = new SparkMD5.ArrayBuffer;
        var cnL4P = e4i.onerror || bo5t;
        e4i.onerror = function() {
            if (!ni0x[DC5H]) {
                return
            }
            delete ni0x[DC5H];
            cnL4P.apply(this, arguments)
        }
        ;
        yc3x.gm8e("sysaction", {
            type: "nosuploadstart",
            location: location.href
        });
        byZ2x(Q5V, e4i);
        return DC5H
    }
    ;
    iW9N.jy9p = function(D4H) {
        var Q5V = ni0x[D4H];
        if (Q5V) {
            if (Q5V.step == 0) {
                delete ni0x[D4H]
            } else {
                Q5V.step = -1;
                if (Q5V.reqId) {
                    w4A.jy9p(Q5V.reqId)
                }
                delete ni0x[D4H]
            }
        }
    }
    ;
    iW9N.ZV5a = function() {
        var wL3x = function(o4s, e4i) {
            (e4i.onload || bo5t).call(this, o4s)
        };
        var Ad4h = function(o4s, e4i) {
            (e4i.onerror || bo5t).call(this, o4s)
        };
        var bzg2x = JSON.stringify({
            code: 200,
            size: "$(ObjectSize)"
        });
        return function(e4i) {
            var bag5l = e4i.returnBody || bzg2x;
            if (k4o.kW9N(bag5l)) {
                try {
                    JSON.stringify(bag5l)
                } catch (e) {
                    bag5l = bzg2x
                }
            }
            return w4A.bp5u("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e4i.filename || "",
                    ext: e4i.ext || "",
                    type: e4i.type || jA9r.OTHER,
                    bucket: e4i.bucket || "",
                    local: e4i.local || false,
                    nos_product: e4i.nosProduct || 0,
                    return_body: bag5l
                },
                onload: wL3x.eb7U(this, e4i),
                onerror: Ad4h.eb7U(this, e4i)
            })
        }
    }();
    iW9N.cnS4W = function() {
        var cnK4O = "//wanproxy.127.net/lbs";
        var wL3x = function(o4s, e4i) {
            if (o4s.lbs) {}
            var Ns8k = o4s.upload;
            if (!Ns8k || !Ns8k.length) {
                Ad4h(o4s, e4i)
            }
            (e4i.onload || bo5t).call(this, Ns8k)
        };
        var Ad4h = function(o4s, e4i) {
            (e4i.onerror || bo5t).call(this, o4s)
        };
        return function(e4i) {
            var kn9e = e4i.bucket;
            return w4A.bp5u(cnK4O, {
                method: "GET",
                type: "json",
                query: {
                    version: "1.0",
                    bucketname: kn9e
                },
                onload: wL3x.eb7U(this, e4i),
                onerror: Ad4h.eb7U(this, e4i)
            })
        }
    }();
    iW9N.bai5n = function() {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), w4A = c4g("nej.j"), bX5c = c4g("nej.ut"), bD5I = c4g("nej.ui"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), iW9N = c4g("nm.x.nos"), E4I = c4g("nm.m"), n4r = c4g("nm.l"), B4F = c4g("nm.w"), b4f, K4O;
    var gn8f = a3x.il8d('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    B4F.bzn2x = NEJ.C();
    b4f = B4F.bzn2x.O4S(bD5I.ef7Y);
    b4f.bZ5e = function() {
        this.cb5g = gn8f
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        this.bx5C = this.m4q;
        this.gU8M = a3x.I4M(this.m4q, "j-file")[0];
        h4l.s4w(this.gU8M, "change", this.qw1x.g4k(this))
    }
    ;
    b4f.bj5o = function(e4i) {
        e4i = e4i || {};
        this.bk5p(e4i);
        this.gU8M.accept = e4i.accept || "*";
        this.uA2x = e4i
    }
    ;
    b4f.baj5o = function() {
        return a3x.la9R(this.gU8M)
    }
    ;
    b4f.qw1x = function(d4h) {
        if (this.gU8M.value == "")
            return;
        var jN9E = this.gU8M.value.split("\\")
          , eV7O = jN9E.length > 0 ? jN9E[jN9E.length - 1] : jN9E[0]
          , om0x = (this.gU8M.files || [{}])[0];
        var fY8Q = {
            files: this.gU8M.files,
            filename: eV7O,
            size: om0x.size,
            cancelUpload: false
        };
        this.y4C("onchange", fY8Q);
        if (fY8Q.cancelUpload) {
            this.gU8M.value = "";
            return
        }
        if (fY8Q.stopped) {
            return
        }
        this.MB8t()
    }
    ;
    b4f.MB8t = function() {
        if (this.gU8M.value == "")
            return;
        var jN9E = this.gU8M.value.split("\\")
          , eV7O = jN9E.length > 0 ? jN9E[jN9E.length - 1] : jN9E[0]
          , eG7z = (eV7O.split(".") || []).pop()
          , om0x = (this.gU8M.files || [{}])[0]
          , DQ5V = (om0x.type || "").split("/").shift();
        if (om0x.size > 100 * 1024 * 1024) {
            return this.mC0x("onerror", {
                code: -200
            })
        }
        this.y4C("onuploading", 0);
        this.bzM2x = iW9N.ZV5a(NEJ.X({
            onload: this.MA8s.eb7U(this, eV7O),
            onerror: this.mC0x.g4k(this)
        }, this.uA2x, function(q4u) {
            return k4o.gb8T(q4u) || k4o.kW9N(q4u)
        }))
    }
    ;
    b4f.MA8s = function(bO5T, eV7O) {
        var o4s = bO5T.result || {}
          , kn9e = o4s.bucket
          , lP0x = o4s.objectKey
          , ex7q = o4s.token;
        if (!kn9e || !lP0x || !ex7q) {
            bO5T.code = -100;
            this.mC0x.call(this, bO5T);
            return
        }
        var om0x = (this.gU8M.files || [{}])[0];
        var iR9I = a3x.cU6O(this.bx5C);
        iR9I[0].value = lP0x;
        iR9I[1].value = ex7q;
        if (om0x.type && om0x.type.indexOf("audio") == 0) {
            iR9I[3].value = "audio/mpeg"
        } else {
            iR9I[3].value = om0x.type || ""
        }
        this.bx5C.action = "//nos.netease.com/" + kn9e;
        this.DU5Z = o4s;
        this.pv1x = eV7O;
        this.y4C("onuploading", .2);
        this.gr8j()
    }
    ;
    b4f.gr8j = function() {
        this.bzM2x = w4A.gr8j(this.bx5C, {
            type: "json",
            onload: this.ta2x.g4k(this),
            onerror: this.mC0x.g4k(this),
            onuploading: this.bal5q.g4k(this)
        })
    }
    ;
    b4f.jy9p = function() {
        w4A.jy9p(this.bzM2x);
        this.bx5C.reset()
    }
    ;
    b4f.ta2x = function(bO5T) {
        var ex7q = this.DU5Z
          , eV7O = this.pv1x
          , om0x = (this.gU8M.files || [{}])[0]
          , kY9P = {
            code: 200,
            fileName: eV7O,
            size: om0x.size,
            bucket: ex7q.bucket,
            docId: ex7q.docId,
            objectKey: ex7q.objectKey,
            url: "//nos.netease.com/" + ex7q.bucket + "/" + ex7q.objectKey
        };
        if (!bO5T) {
            bO5T = kY9P
        }
        if (!bO5T.code || bO5T.code == 200) {
            this.y4C("onsuccess", NEJ.X(kY9P, bO5T))
        } else {
            this.y4C("onerror", bO5T)
        }
        this.bx5C.reset()
    }
    ;
    b4f.mC0x = function(bO5T) {
        this.y4C("onerror", bO5T);
        this.bx5C.reset()
    }
    ;
    b4f.bal5q = function(ib8T) {
        this.y4C("onuploading", .2 + ib8T.loaded / ib8T.total * .8)
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), w4A = c4g("nej.j"), bX5c = c4g("nej.ut"), bD5I = c4g("nej.ui"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), iW9N = c4g("nm.x.nos"), E4I = c4g("nm.m"), n4r = c4g("nm.l"), B4F = c4g("nm.w"), b4f, K4O;
    B4F.Mk8c = NEJ.C();
    b4f = B4F.Mk8c.O4S(bX5c.cy5D);
    b4f.bj5o = function(e4i) {
        e4i = e4i || {};
        this.bk5p(e4i);
        this.bap5u = B4F.bzn2x.A4E(NEJ.X({
            parent: e4i.parent,
            onchange: this.qw1x.g4k(this),
            onuploading: this.y4C.g4k(this, "onuploading"),
            onsuccess: this.y4C.g4k(this, "onsuccess"),
            onerror: this.y4C.g4k(this, "onerror")
        }, e4i, function(q4u) {
            return k4o.gb8T(q4u) || k4o.kW9N(q4u)
        }));
        if (e4i.multiple && iW9N.bai5n()) {
            a3x.fU8M(this.bap5u.baj5o(), "multiple", true)
        }
        this.uA2x = e4i
    }
    ;
    b4f.qw1x = function(e4i) {
        var eV7O = e4i.filename
          , eG7z = (eV7O.split(".") || []).pop();
        this.bAe2x = (e4i.files || [{}])[0];
        this.y4C("onchange", e4i);
        if (iW9N.bai5n() && !e4i.stopped && !e4i.cancelUpload) {
            this.MB8t(true);
            e4i.stopped = true
        }
    }
    ;
    b4f.baj5o = function() {
        return this.bap5u.baj5o()
    }
    ;
    b4f.cnJ4N = function() {
        return this.bAe2x
    }
    ;
    b4f.MB8t = function(eK7D, cM6G) {
        cM6G = cM6G || this.bAe2x;
        if (iW9N.bai5n()) {
            this.bAl2x = iW9N.gr8j(NEJ.X({
                file: cM6G,
                local: this.uA2x.bucket && this.uA2x.bucket.length,
                onuploading: this.y4C.g4k(this, "onuploading"),
                onsuccess: this.y4C.g4k(this, "onsuccess"),
                onerror: this.y4C.g4k(this, "onerror")
            }, this.uA2x, function(q4u) {
                return k4o.gb8T(q4u) || k4o.kW9N(q4u)
            }));
            return this.bAl2x
        } else if (!eK7D) {
            this.bap5u.MB8t()
        }
    }
    ;
    b4f.jy9p = function(D4H) {
        D4H = D4H || this.bAl2x;
        if (D4H) {
            iW9N.jy9p(D4H)
        }
        this.bap5u.jy9p()
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), dU7N = c4g("nej.g"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), w4A = c4g("nej.j"), fo7h = c4g("nej.n"), G4K = c4g("nej.ut"), ba5f = c4g("nej.ui"), B4F = c4g("nm.w"), n4r = c4g("nm.l"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), L4P = c4g("nm.x.f"), iW9N = c4g("nm.x.nos"), b4f, K4O, boR9I = {
        0: "",
        "-1": "不能添加重复图片",
        "-10": "最多只能添加9张",
        "-3": "请选择不超过5M的图片"
    }, boT9K = 5 * 1024 * 1024, cyH7A = 80, bAy2x = /\.(bmp|jpg|jpeg|png|gif)$/i;
    B4F.bAz2x = NEJ.C();
    b4f = B4F.bAz2x.O4S(G4K.vg2x);
    b4f.bcz6t = function() {
        return {
            x: this.zy4C.clientWidth - this.m4q.offsetWidth,
            y: this.zy4C.clientHeight - this.m4q.offsetHeight
        }
    }
    ;
    B4F.bpr9i = NEJ.C();
    b4f = B4F.bpr9i.O4S(ba5f.ef7Y);
    b4f.bZ5e = function() {
        this.cb5g = "m-xwgt-share-upload"
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        var i4m = a3x.I4M(this.m4q, "j-flag");
        this.baE5J = i4m.shift();
        this.Gh6b = i4m.shift();
        this.Li8a = i4m.shift();
        this.bAH2x = {
            onchange: this.bAI2x.eb7U(this, 0),
            onerror: this.er7k.g4k(this),
            onsuccess: this.sY2x.g4k(this),
            multiple: true,
            parent: this.Gh6b,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bpQ9H = {
            onchange: this.bAI2x.eb7U(this, 1),
            onerror: this.er7k.g4k(this),
            onsuccess: this.sY2x.g4k(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.cnH4L = B4F.Mk8c.A4E(this.bAH2x)
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.bpQ9H.parent = e4i.button;
        this.Gd6X && this.Gd6X.S5X();
        this.Gd6X = B4F.Mk8c.A4E(this.bpQ9H);
        this.m4q.style.display = "none";
        if (!!this.eI7B) {
            for (var i = this.eI7B.length - 1; i >= 0; i--) {
                a3x.cC6w(this.eI7B[i].element, false);
                if (this.eI7B[i].dragger)
                    this.eI7B[i].dragger.S5X()
            }
        }
        this.eI7B = [];
        if (this.Ap4t) {
            clearTimeout(this.Ap4t)
        }
        this.baK5P(0);
        this.KL7E = 0;
        this.bS5X([[this.bAH2x.parent, "click", this.bAY2x.g4k(this)], [this.bpQ9H.parent, "click", this.bAY2x.g4k(this)]])
    }
    ;
    b4f.bA5F = function() {
        h4l.hw8o(this.rV1x, "click");
        if (!!this.eI7B) {
            for (var i = this.eI7B.length - 1; i >= 0; i--) {
                a3x.cC6w(this.eI7B[i].element, false);
                if (this.eI7B[i].dragger)
                    this.eI7B[i].dragger.S5X()
            }
        }
        this.eI7B = [];
        if (this.Ap4t) {
            clearTimeout(this.Ap4t)
        }
        this.Ap4t = 0;
        this.Gd6X && this.Gd6X.S5X();
        delete this.Gd6X;
        this.bF5K()
    }
    ;
    b4f.bAY2x = function(d4h) {
        if (!iW9N.bai5n() && this.eI7B.doing) {
            h4l.bh5m(d4h)
        }
    }
    ;
    b4f.bAI2x = function(e4i, r4v) {
        var mw0x = e4i.files, hX8P;
        e4i.stopped = true;
        if (!mw0x) {
            if (e4i.filename) {
                mw0x = [{
                    name: e4i.filename,
                    isIE: true
                }]
            }
        }
        for (var i = 0, len = mw0x.length; i < len; i++) {
            if (!bAy2x.test(mw0x[i].name)) {
                this.bqf9W({
                    path: mw0x[i].name,
                    index: r4v,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (mw0x[i].size > boT9K) {
                this.bqs0x(-3);
                this.bqf9W({
                    path: mw0x[i].name,
                    index: r4v,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.bqf9W({
                    path: mw0x[i].name,
                    file: mw0x[i],
                    index: r4v,
                    status: 0
                })
            }
        }
    }
    ;
    b4f.bqf9W = function(sy2x) {
        if (this.eI7B.length >= 9) {
            this.bqs0x(-10, 3e3, this.bBn2x.g4k(this));
            return
        }
        this.cnG4K(sy2x);
        this.eI7B.push(sy2x);
        if (!!this.eI7B.length) {
            this.m4q.style.display = ""
        }
        if (this.eI7B.length >= 9) {
            this.Gh6b.style.display = "none"
        } else {
            this.Gh6b.style.display = ""
        }
        this.FX6R()
    }
    ;
    b4f.FX6R = function() {
        var bqR0x = -1
          , bBy2x = 0;
        for (var i = 0, l = this.eI7B.length; i < l; i++) {
            if (this.eI7B[i].status == 1) {
                return
            }
            if (this.eI7B[i].status == 0 && bqR0x < 0) {
                bqR0x = i
            }
            if (this.eI7B[i].status == 2 || this.eI7B[i].status < 0) {
                bBy2x++
            }
        }
        var q4u = this.eI7B[bqR0x];
        if (q4u) {
            (q4u.index == 0 ? this.cnH4L : this.Gd6X).MB8t(false, q4u.file);
            q4u.status = 1;
            this.eI7B.doing = q4u;
            this.y4C("onstartupload", {})
        } else if (bBy2x == this.eI7B.length) {
            this.y4C("onfinishupload", {})
        }
    }
    ;
    b4f.bqT0x = function() {
        return this.eI7B.doing || {}
    }
    ;
    b4f.er7k = function(d4h) {
        var sy2x = this.bqT0x();
        sy2x.status = -4;
        sy2x.fail = "上传<br>失败";
        this.bBC2x(sy2x);
        this.eI7B.doing = null;
        this.FX6R()
    }
    ;
    b4f.sY2x = function(d4h) {
        var sy2x = this.bqT0x()
          , fd7W = d4h.fileName.match(bAy2x);
        sy2x.picUrl = d4h.url;
        w4A.bp5u("/upload/event/img/v1", {
            query: {
                imgid: d4h.docId,
                format: fd7W[1]
            },
            type: "json",
            onload: this.bBE3x.g4k(this),
            onerror: this.bBE3x.g4k(this)
        })
    }
    ;
    b4f.bBE3x = function(d4h) {
        if (d4h && d4h.code == 200 && d4h.picInfo) {
            var sy2x = this.bqT0x();
            sy2x.status = 2;
            var bv5A = NEJ.X({}, d4h.picInfo);
            bv5A.originId = bv5A.originIdStr;
            bv5A.squareId = bv5A.squareIdStr;
            bv5A.rectangleId = bv5A.rectangleIdStr;
            bv5A.pcSquareId = bv5A.pcSquareIdStr;
            bv5A.pcRectangleId = bv5A.pcRectangleIdStr;
            bv5A.originJpgId = bv5A.originJpgIdStr || bv5A.originJpgId;
            sy2x.picInfo = bv5A;
            this.bBC2x(sy2x);
            this.eI7B.doing = null;
            this.FX6R()
        } else {
            this.er7k(d4h)
        }
    }
    ;
    b4f.bqs0x = function(r4v, jK9B, gj8b) {
        if (this.KL7E < r4v) {
            return
        }
        if (this.Ap4t) {
            clearTimeout(this.Ap4t);
            this.Ap4t = 0
        }
        if (jK9B) {
            this.Li8a.innerText = boR9I[r4v * 1];
            this.KL7E = r4v;
            this.Ap4t = setTimeout(this.baK5P.g4k(this, r4v, gj8b), jK9B)
        } else {
            this.Li8a.innerText = boR9I[r4v];
            this.KL7E = r4v
        }
        this.Li8a.style.display = ""
    }
    ;
    b4f.baK5P = function(r4v, gj8b) {
        if (r4v && this.KL7E !== r4v) {
            return
        }
        this.KL7E = 0;
        this.Li8a.innerText = boR9I[0];
        this.Li8a.style.display = "none";
        gj8b && gj8b()
    }
    ;
    b4f.cnG4K = function(cM6G) {
        var j4n = {};
        if (cM6G.fail) {
            j4n.fail = cM6G.fail
        }
        var dD7w = a3x.bW5b("m-xwgt-share-upload-preview", j4n);
        cM6G.element = a3x.nl0x(dD7w);
        h4l.s4w(a3x.I4M(cM6G.element, "del")[0], "mousedown", this.cnE4I.g4k(this, cM6G), false);
        this.baE5J.insertBefore(cM6G.element, this.baE5J.lastElementChild);
        cM6G.dragger = B4F.bAz2x.A4E({
            view: this.baE5J.parentNode,
            body: cM6G.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.NW9N.g4k(this, cM6G),
            onchange: this.cnD4H.g4k(this, cM6G),
            ondragend: this.bcK6E.g4k(this, cM6G)
        })
    }
    ;
    b4f.bBC2x = function(cM6G) {
        if (!cM6G || !cM6G.element) {
            return false
        }
        var j4n = {};
        if (cM6G.fail) {
            j4n.fail = cM6G.fail
        } else {
            j4n.url = cM6G.picUrl
        }
        a3x.x4B(cM6G.element, "z-fail");
        cM6G.element.firstChild.outerHTML = a3x.bW5b("m-xwgt-share-upload-preview-img", j4n)
    }
    ;
    b4f.NW9N = function(q4u, jY9P) {
        a3x.x4B(q4u.element, "z-sel")
    }
    ;
    b4f.cnD4H = function(q4u, jY9P) {
        var cyJ7C, gJ8B = this.eI7B.length - 1, ng0x;
        for (var i = gJ8B; i >= 0; i--) {
            a3x.v4z(this.eI7B[i].element, "z-jump");
            if (this.eI7B[i] == q4u) {
                ng0x = i
            } else {
                a3x.ff7Y(this.eI7B[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var QL0x = {
            x: 46 + 92 * (ng0x % 5) + jY9P.left,
            y: 46 + 92 * (ng0x / 5 >> 0) + jY9P.top
        };
        var bqY0x = QL0x.x / 92 >> 0
          , brd0x = QL0x.y / 92 >> 0
          , yg3x = Math.max(0, Math.min(gJ8B, brd0x * 5 + bqY0x));
        if (yg3x == ng0x) {
            return
        }
        var cnz4D = yg3x < ng0x;
        for (var i = Math.min(yg3x, ng0x); i <= Math.max(yg3x, ng0x); i++) {
            if (i !== ng0x) {
                var bBQ3x = i % 5;
                if (cnz4D) {
                    if (bBQ3x == 4) {
                        a3x.ff7Y(this.eI7B[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        a3x.ff7Y(this.eI7B[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bBQ3x == 0) {
                        a3x.ff7Y(this.eI7B[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        a3x.ff7Y(this.eI7B[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    }
    ;
    b4f.bcK6E = function(q4u, jY9P) {
        var cyL7E, gJ8B = this.eI7B.length - 1, ng0x;
        for (var i = gJ8B; i >= 0; i--) {
            a3x.ff7Y(this.eI7B[i].element, {
                left: "",
                top: ""
            });
            if (this.eI7B[i] == q4u) {
                ng0x = i
            }
        }
        a3x.v4z(q4u.element, "z-sel");
        var QL0x = {
            x: 46 + 92 * (ng0x % 5) + jY9P.left,
            y: 46 + 92 * (ng0x / 5 >> 0) + jY9P.top
        };
        var bqY0x = QL0x.x / 92 >> 0
          , brd0x = QL0x.y / 92 >> 0
          , yg3x = Math.max(0, Math.min(gJ8B, brd0x * 5 + bqY0x));
        if (yg3x == ng0x) {
            return
        }
        this.baE5J.insertBefore(q4u.element, (this.eI7B[yg3x + (yg3x > ng0x ? 1 : 0)] || {}).element || this.Gh6b);
        this.eI7B.splice(ng0x, 1);
        this.eI7B.splice(yg3x, 0, q4u)
    }
    ;
    b4f.cnE4I = function(q4u, d4h) {
        a3x.cC6w(q4u.element, false);
        if (q4u.dragger)
            q4u.dragger.S5X();
        delete q4u.dragger;
        var r4v = -1;
        for (var i = this.eI7B.length - 1; i >= 0; i--) {
            if (this.eI7B[i] == q4u) {
                r4v = i;
                break
            }
        }
        this.eI7B.splice(r4v, r4v >= 0 ? 1 : 0);
        delete q4u;
        if (this.eI7B.length >= 9) {
            this.Gh6b.style.display = "none"
        } else {
            this.Gh6b.style.display = ""
        }
        if (!this.eI7B.length) {
            this.m4q.style.display = "none";
            this.baK5P(0)
        } else {
            this.bBn2x()
        }
        if (this.eI7B.doing == q4u) {
            this.eI7B.doing = null
        }
        this.FX6R()
    }
    ;
    b4f.bBn2x = function() {
        var bBU3x = false;
        for (var i = 0, len = this.eI7B.length; i < len; i++) {
            if (this.eI7B[i].status == -3) {
                bBU3x = true
            }
        }
        if (bBU3x) {
            this.bqs0x(-3)
        } else {
            this.baK5P(-3)
        }
    }
    ;
    b4f.PJ0x = function() {
        var eh7a = [];
        for (var i = this.eI7B.length - 1; i >= 0; i--) {
            if (this.eI7B[i].status == 2) {
                eh7a.unshift(this.eI7B[i].picInfo)
            }
        }
        return eh7a
    }
    ;
    G4K.fu7n.A4E({
        element: B4F.bpr9i,
        event: ["onstartupload", "onfinishupload"]
    })
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, fh7a = NEJ.R, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), ba5f = c4g("nej.ui"), N4R = c4g("nej.ut"), b4f, K4O;
    if (!!N4R.mP0x)
        return;
    N4R.mP0x = NEJ.C();
    b4f = N4R.mP0x.O4S(N4R.Xm2x);
    K4O = N4R.mP0x.cj5o;
    b4f.bj5o = function(e4i) {
        this.cnw4A(e4i.more);
        this.bbg6a = a3x.z4D(e4i.sbody);
        this.bS5X([[this.bbg6a, "scroll", this.cnv4z.g4k(this)]]);
        var dm6g = e4i.delta;
        if (dm6g == null)
            dm6g = 30;
        this.NP9G = Math.max(0, dm6g);
        var cB5G = parseInt(e4i.count) || 0;
        this.iX9O = Math.max(0, cB5G);
        var gs8k = parseInt(e4i.number) || 0;
        if (gs8k > 1 && gs8k <= cB5G) {
            this.Bh4l = gs8k
        }
        this.bk5p(e4i)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        delete this.AP4T;
        delete this.bbg6a;
        delete this.rU1x;
        delete this.bbi6c
    }
    ;
    b4f.zo4s = function(bf5k, bm5r) {
        var bH5M = this.wC3x + (this.iX9O - 1) * this.nS0x
          , gc8U = this.iX9O * this.nS0x;
        return K4O.zo4s.call(this, bH5M, bf5k, gc8U, bm5r)
    }
    ;
    b4f.cnw4A = function(bbm6g) {
        this.AP4T = a3x.z4D(bbm6g);
        this.bS5X([[this.AP4T, "click", this.oq0x.g4k(this)]])
    }
    ;
    b4f.brU0x = function(F4J) {
        F4J = F4J || {};
        if (this.rU1x || !F4J)
            return;
        if (!F4J.scrollHeight)
            F4J = a3x.pb1x();
        var bf5k = a3x.hM8E(this.is9j)
          , dm6g = bf5k.y + this.is9j.offsetHeight - F4J.scrollTop - F4J.clientHeight
          , bsa0x = F4J.scrollHeight <= F4J.clientHeight;
        if (dm6g <= this.NP9G || bsa0x && !this.rU1x) {
            this.oq0x()
        }
    }
    ;
    b4f.cnv4z = function(d4h) {
        if (this.rU1x)
            return;
        this.brU0x(h4l.U5Z(d4h))
    }
    ;
    b4f.zF4J = function(d4h) {
        K4O.zF4J.apply(this, arguments);
        if (!d4h.stopped) {
            this.Me8W();
            var bf5k = 0;
            if (d4h.index > 1) {
                bf5k = this.wC3x + ((d4h.index - 1) * this.iX9O - 1) * this.nS0x
            }
            this.hj8b = bf5k;
            this.oq0x()
        }
    }
    ;
    b4f.bNf6Z = function(e4i) {
        if (!!this.Bh4l) {
            var dm6g = e4i.offset > 0 ? this.nS0x : this.wC3x
              , gc8U = dm6g + this.nS0x * (this.Bh4l - 1);
            this.hj8b = e4i.offset + gc8U;
            e4i.data.limit = gc8U;
            e4i.limit = gc8U;
            delete this.Bh4l
        }
        return e4i
    }
    ;
    b4f.bhy7r = function(e4i) {
        delete this.bbi6c;
        K4O.bhy7r.apply(this, arguments);
        this.bCF3x()
    }
    ;
    b4f.bhC7v = function(d4h) {
        if (d4h.key != this.iI9z.key)
            return;
        switch (d4h.action) {
        case "refresh":
        case "append":
            delete this.bbi6c;
            break
        }
        K4O.bhC7v.apply(this, arguments)
    }
    ;
    b4f.Lt8l = function() {
        this.xg3x("onbeforelistload", "列表加载中...");
        a3x.Z5e(this.AP4T, "display", "none")
    }
    ;
    b4f.bhW7P = function(i4m, bf5k, gc8U) {
        var bm5r = i4m.length
          , bsv0x = i4m.loaded ? bf5k + gc8U >= bm5r : bf5k + gc8U > bm5r;
        this.hj8b = Math.min(this.hj8b, bm5r);
        a3x.Z5e(this.AP4T, "display", bsv0x ? "none" : "");
        if (bsv0x)
            this.rU1x = !0;
        if (this.iX9O > 0) {
            var bv5A = this.zo4s(bf5k, i4m.length);
            if (this.bND6x(bv5A.index, bv5A.total))
                return !0;
            var dm6g = this.wC3x - this.nS0x
              , gs8k = this.iX9O * this.nS0x;
            this.rU1x = (bf5k + gc8U - dm6g) % gs8k == 0 || bsv0x;
            a3x.Z5e(this.AP4T, "display", this.rU1x ? "none" : "");
            this.bhL7E(this.rU1x && bv5A.total > 1 ? "" : "none")
        }
    }
    ;
    b4f.bhT7M = function() {
        this.hj8b = 0;
        this.rU1x = !0;
        this.xg3x("onemptylist", "没有列表数据！")
    }
    ;
    b4f.Lm8e = function(dD7w, jY9P) {
        this.is9j.insertAdjacentHTML(jY9P || "beforeEnd", dD7w)
    }
    ;
    b4f.Ll8d = function(gI8A) {
        this.fp7i = this.fp7i || [];
        if (k4o.eu7n(gI8A)) {
            fh7a.push.apply(this.fp7i, gI8A)
        } else {
            this.fp7i.push(gI8A)
        }
    }
    ;
    b4f.Xz3x = function(d4h) {
        a3x.mJ0x(this.ck5p);
        this.Le8W(d4h, "onafteradd");
        var eK7D = d4h.flag;
        if (d4h.stopped || !eK7D)
            return;
        if (this.iX9O > 0) {
            this.bhR7K();
            return
        }
        this.hj8b += 1;
        eK7D == -1 ? this.biX8P(d4h.data) : this.bPU6O(d4h.data)
    }
    ;
    b4f.XB3x = function(d4h) {
        this.Le8W(d4h, "onafterdelete");
        if (d4h.stopped)
            return;
        if (this.iX9O > 0) {
            this.bhR7K();
            return
        }
        var D4H = d4h.data[this.eU7N.pkey];
        if (!!this.fp7i) {
            var q4u = a3x.bDi3x(D4H)
              , r4v = k4o.cV6P(this.fp7i, q4u);
            if (r4v >= 0) {
                this.fp7i.splice(r4v, 1);
                this.hj8b -= 1
            }
            if (!!q4u)
                q4u.S5X()
        } else {
            var f4j = a3x.z4D(this.bMm5r(D4H));
            if (!!f4j)
                this.hj8b -= 1;
            a3x.cC6w(f4j)
        }
        if (this.hj8b <= 0)
            this.oq0x()
    }
    ;
    b4f.bir7k = function(bf5k, gc8U) {
        if (bf5k != this.hj8b)
            return;
        if (this.UB2x()) {
            this.rU1x = !1;
            this.bCF3x()
        }
    }
    ;
    b4f.biT8L = function(bf5k, gc8U) {
        if (bf5k != 0)
            return;
        var HW7P = this.R5W.gV8N(this.iI9z.key);
        for (var i = gc8U - 1; i >= 0; i--) {
            this.biX8P(HW7P[i])
        }
    }
    ;
    b4f.bCF3x = function() {
        var F4J = this.bbg6a;
        if (!F4J || this.rU1x)
            return;
        this.brU0x(this.bbg6a)
    }
    ;
    b4f.ga8S = function() {
        delete this.rU1x;
        K4O.ga8S.apply(this, arguments)
    }
    ;
    b4f.oq0x = function() {
        if (!!this.bbi6c)
            return;
        this.bbi6c = !0;
        var bf5k = this.hj8b;
        this.hj8b += bf5k == 0 ? this.wC3x : this.nS0x;
        this.bNe6Y(bf5k)
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), cT6N = c4g("nej.x"), N4R = c4g("nej.ut"), b4f;
    if (!!N4R.EX6R)
        return;
    N4R.EX6R = NEJ.C();
    b4f = N4R.EX6R.O4S(N4R.cy5D);
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.iC9t = e4i.event || "click";
        this.jJ9A = e4i.selected || "js-selected";
        this.mV0x = e4i.disabled || "js-disabled";
        this.bCL3x = !!e4i.inverse;
        this.cnq4u(e4i.list);
        this.Mf8X(e4i.index || 0)
    }
    ;
    b4f.bA5F = function() {
        var cnp4t = function(f4j) {
            this.btd0x(f4j, !1)
        };
        return function() {
            this.bF5K();
            k4o.bb5g(this.bN5S, cnp4t, this);
            delete this.bN5S;
            delete this.iC9t;
            delete this.ct5y;
            delete this.mV0x;
            delete this.jJ9A;
            delete this.bCL3x
        }
    }();
    b4f.cnq4u = function() {
        var bgk7d = function(q4u) {
            if (!q4u)
                return;
            this.bN5S.push(q4u);
            var r4v = this.bN5S.length - 1
              , dg6a = this.btf0x[r4v];
            if (!dg6a) {
                dg6a = this.Mf8X.g4k(this, r4v);
                this.btf0x[r4v] = dg6a
            }
            this.bS5X([[q4u, this.iC9t, dg6a]])
        };
        return function(i4m) {
            this.bN5S = [];
            if (!this.btf0x)
                this.btf0x = [];
            k4o.bb5g(i4m, bgk7d, this)
        }
    }();
    b4f.btd0x = function(F4J, cno4s) {
        !!cno4s && !this.bCL3x ? a3x.x4B(F4J, this.jJ9A) : a3x.v4z(F4J, this.jJ9A)
    }
    ;
    b4f.Mf8X = function(r4v, Rz1x, j4n) {
        var F4J = this.bN5S[r4v];
        if (Rz1x != !0 && (r4v == this.ct5y || !F4J || a3x.bz5E(F4J, this.mV0x))) {
            h4l.ci5n(arguments[1]);
            return this
        }
        var d4h = {
            index: r4v,
            last: this.ct5y,
            list: this.kG9x(),
            data: j4n || a3x.u4y(F4J, "value")
        };
        this.ct5y = r4v;
        F4J = this.bN5S[d4h.last];
        if (!!F4J)
            this.btd0x(F4J, !1);
        F4J = this.bN5S[this.ct5y];
        this.btd0x(F4J, !0);
        this.y4C("onchange", d4h);
        if (!d4h.nostop)
            h4l.ci5n(arguments[1]);
        return this
    }
    ;
    b4f.sl2x = function() {
        return this.ct5y
    }
    ;
    b4f.kG9x = function() {
        return this.bN5S
    }
    ;
    a3x.cnn4r = cT6N.cnn4r = function(bE5J, e4i) {
        var D4H = a3x.la9R(bE5J);
        if (!D4H)
            return null;
        if (!N4R.Yw3x(D4H, N4R.EX6R)) {
            e4i = e4i || {};
            e4i.list = !e4i.clazz ? a3x.cU6O(D4H) : a3x.I4M(D4H, e4i.clazz);
            delete e4i.clazz
        }
        return N4R.Yw3x(D4H, N4R.EX6R, e4i || Y5d)
    }
    ;
    cT6N.isChange = !0
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , k4o = c4g("nej.u")
      , w4A = c4g("nej.j")
      , l4p = c4g("nm.x");
    var SETTING_KEY = "player-setting";
    var mv0x = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    mv0x = w4A.us2x(SETTING_KEY) || mv0x;
    l4p.bti0x = function() {
        return mv0x
    }
    ;
    l4p.Fi6c = function(Fj6d) {
        if (Fj6d) {
            mv0x = Fj6d;
            w4A.vT3x(SETTING_KEY, Fj6d)
        }
    }
}
)();
(function() {
    var c4g = NEJ.P
      , Y5d = NEJ.O
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , k4o = c4g("nej.u")
      , G4K = c4g("nej.ut")
      , l4p = c4g("nm.x")
      , p4t = c4g("nm.d")
      , ha8S = c4g("nm.w.player.log");
    var ky9p = p4t.hY8Q.A4E();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var ml0x = function(t4x, bC5H, pJ1x) {
        var cJ6D = l4p.eY7R("{0} {1} {2}", k4o.iV9M(new Date, "yyyy-MM-dd HH:mm:ss"), t4x, bC5H);
        if (pJ1x == LogLevel.ERROR) {
            ky9p.gm8e("playerror", {
                message: bC5H
            })
        }
        if (pJ1x >= LogLevel.INFO) {
            ky9p.cuU6O(cJ6D)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cJ6D)
        }
    };
    ha8S.bV5a = function() {
        ml0x("PLAY_ERROR", l4p.eY7R.apply(null, arguments), LogLevel.ERROR)
    }
    ;
    ha8S.oz0x = function() {
        ml0x("PLAY_INFO", l4p.eY7R.apply(null, arguments), LogLevel.INFO)
    }
    ;
    ha8S.cyN7G = function() {
        ml0x("PLAY_DEBUG", l4p.eY7R.apply(null, arguments), LogLevel.DEBUG)
    }
}
)();
(function() {
    var c4g = NEJ.P
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , G4K = c4g("nej.ut")
      , k4o = c4g("nej.u")
      , B4F = c4g("nm.w")
      , gj8b = c4g("flash.cb");
    var dO7H = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Fo6i, bbF6z, sN2x;
    B4F.cnl4p = function(t4x, dw6q) {
        if (t4x != "flash") {
            if (!Fo6i) {
                Fo6i = a3x.cX6R("audio");
                k4o.bb5g(dO7H, function(t4x) {
                    h4l.s4w(Fo6i, t4x, onMediaCallBack)
                })
            }
            if (Fo6i && Fo6i.canPlayType && Fo6i.canPlayType("audio/mpeg")) {
                dw6q(new MediaWrap("audio"));
                return
            }
        }
        if (!bbF6z) {
            a3x.rx1x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function(hl8d) {
                    bbF6z = hl8d;
                    k4o.bb5g(dO7H, function(t4x) {
                        gj8b[t4x] = onMediaCallBack;
                        bbF6z.addCallback(t4x, "flash.cb." + t4x)
                    });
                    dw6q(new MediaWrap("flash"))
                }
                .g4k(this)
            })
        } else {
            dw6q(new MediaWrap("flash"))
        }
    }
    ;
    function MediaWrap(Fs6m) {
        var lG0x;
        G4K.fu7n.A4E({
            element: this,
            event: dO7H.concat(["interrupt", "recover"])
        });
        lG0x = Fs6m == "audio" ? Fo6i : bbF6z;
        this.type = Fs6m;
        this.destroy = function() {}
        ;
        this.setSrc = function(W5b) {
            if (sN2x != this) {
                var gJ8B = sN2x;
                if (gJ8B) {
                    gJ8B.interrupt()
                }
                sN2x = this
            }
            if (Fs6m == "flash") {
                lG0x.setSrc(W5b)
            } else {
                lG0x.src = W5b
            }
        }
        ;
        this.play = function() {
            if (sN2x != this) {
                var gJ8B = sN2x;
                if (gJ8B) {
                    gJ8B.interrupt();
                    sN2x = this;
                    this.recover()
                } else {
                    sN2x = this
                }
            }
            if (Fs6m == "flash") {
                lG0x.as_play()
            } else {
                lG0x.play()
            }
        }
        ;
        this.pause = function() {
            if (sN2x != this)
                return;
            if (Fs6m == "flash") {
                lG0x.as_pause()
            } else {
                lG0x.pause()
            }
        }
        ;
        this.load = function() {
            if (sN2x != this)
                return;
            if (Fs6m == "flash") {
                lG0x.as_load()
            } else {
                lG0x.load()
            }
        }
        ;
        this.interrupt = function() {
            onMediaCallBack({
                type: "interrupt"
            })
        }
        ;
        this.recover = function() {
            onMediaCallBack({
                type: "recover"
            })
        }
        ;
        this.getMedia = function() {
            return lG0x
        }
        ;
        var os0x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k4o.bb5g(os0x, function(T5Y) {
            var LQ8I = "get" + T5Y
              , RW1x = "set" + T5Y;
            if (Fs6m == "flash") {
                if (!this[LQ8I]) {
                    this[LQ8I] = function() {
                        return lG0x[LQ8I]()
                    }
                }
                if (!this[RW1x]) {
                    this[RW1x] = function(value) {
                        lG0x[RW1x](value)
                    }
                }
            } else {
                var bDR3x = T5Y.slice(0, 1).toLowerCase() + T5Y.slice(1);
                if (!this[LQ8I]) {
                    this[LQ8I] = function() {
                        return lG0x[bDR3x]
                    }
                }
                if (!this[RW1x]) {
                    this[RW1x] = function(value) {
                        lG0x[bDR3x] = value
                    }
                }
            }
        }, this)
    }
    function onMediaCallBack(d4h) {
        if (sN2x) {
            h4l.y4C(sN2x, d4h.type, d4h)
        }
    }
}
)();
(function() {
    var c4g = NEJ.P, h4l = c4g("nej.v"), w4A = c4g("nej.j"), G4K = c4g("nej.ut"), dh6b = c4g("nej.p"), B4F = c4g("nm.w"), l4p = c4g("nm.x"), ha8S = c4g("nm.w.player.log"), b4f;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bDZ3x = false;
    B4F.fw7p = NEJ.C();
    b4f = B4F.fw7p.O4S(G4K.cy5D);
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.cv5A = {};
        this.bbK6E(e4i.media);
        w4A.bp5u("/api/cdns", {
            type: "json",
            onload: function(d4h) {
                if (d4h.code) {
                    this.pS1x = d4h.data
                }
            }
            .g4k(this)
        })
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        delete this.cv5A
    }
    ;
    b4f.YL3x = function(be5j) {
        if (!be5j)
            return;
        var Bt4x = this.cv5A.volume;
        if (this.dB6v) {
            this.dB6v.pause()
        }
        this.cv5A = {
            time: 0,
            id: be5j.id,
            duration: be5j.duration / 1e3,
            play: this.cv5A.play,
            stalledRetryCount: 0
        };
        if (Bt4x != null) {
            this.cv5A.volume = Bt4x
        }
        this.cv5A.loadState = LoadState.LOAD_START;
        this.bEp3x(be5j.id);
        ha8S.oz0x("play song id: {0}", be5j.id)
    }
    ;
    b4f.ey7r = function() {
        if (this.cv5A.error) {
            this.cv5A.error = null;
            if (this.cv5A.error == ErrorType.INFO_GET_ERR || this.bEq3x()) {
                this.bEt3x()
            } else {
                this.Kr7k()
            }
        } else {
            if (this.dB6v) {
                this.dB6v.play()
            }
        }
        this.cv5A.play = true;
        this.oN0x("play")
    }
    ;
    b4f.fC8u = function() {
        if (this.dB6v) {
            this.dB6v.pause()
        }
        this.cv5A.play = false;
        this.oN0x("pause")
    }
    ;
    b4f.ot0x = function(by5D) {
        if (this.dB6v) {
            this.dB6v.setCurrentTime(by5D)
        }
        this.cv5A.time = by5D;
        ha8S.oz0x("seek to: {0}", by5D)
    }
    ;
    b4f.btB0x = function() {
        return this.cv5A.duration || 0
    }
    ;
    b4f.uD2x = function() {
        return !!this.cv5A.play
    }
    ;
    b4f.lA0x = function(KP7I) {
        this.cv5A.volume = KP7I;
        if (this.dB6v) {
            this.dB6v.setVolume(KP7I)
        }
    }
    ;
    b4f.btz0x = function() {
        return this.cv5A.time
    }
    ;
    b4f.bbK6E = function(t4x) {
        B4F.cnl4p(t4x, function(lG0x) {
            this.dB6v = lG0x;
            ha8S.oz0x("media loaded: {0}", lG0x.type);
            this.bS5X([[this.dB6v, "loadedmetadata", this.cnk4o.g4k(this)], [this.dB6v, "ended", this.cng4k.g4k(this)], [this.dB6v, "waiting", this.yv4z.g4k(this)], [this.dB6v, "play", this.sO2x.g4k(this)], [this.dB6v, "pause", this.btm0x.g4k(this)], [this.dB6v, "playing", this.Nu8m.g4k(this)], [this.dB6v, "timeupdate", this.cnf4j.g4k(this)], [this.dB6v, "progress", this.sc2x.g4k(this)], [this.dB6v, "stalled", this.btl0x.g4k(this)], [this.dB6v, "interrupt", this.fC8u.g4k(this)], [this.dB6v, "recover", this.cne4i.g4k(this)], [this.dB6v, "error", this.er7k.g4k(this)]]);
            if (this.cv5A) {
                if (this.cv5A.loadState == LoadState.LOAD_START || this.cv5A.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.btk0x();
                    if (this.cv5A.volume != null) {
                        this.dB6v.setVolume(this.cv5A.volume)
                    }
                }
            }
        }
        .g4k(this))
    }
    ;
    b4f.cnd4h = function(t4x) {
        this.He6Y();
        this.dB6v.destroy();
        this.cv5A.loadState = LoadState.IN_SWITCH_MEDIA;
        this.yv4z();
        this.bbK6E(t4x);
        ha8S.oz0x("switch media")
    }
    ;
    b4f.cyP7I = function() {
        return this.dB6v
    }
    ;
    b4f.bEp3x = function() {
        this.yv4z();
        w4A.bp5u("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.cv5A.id]),
                br: DEFAULT_BR
            },
            onload: this.bFa3x.g4k(this),
            onerror: this.bFa3x.g4k(this)
        })
    }
    ;
    b4f.bFa3x = function(d4h) {
        if (d4h.code == 200 && d4h.data && d4h.data.length) {
            var bv5A = d4h.data[0];
            if (!bv5A.url) {
                this.cv5A.error = ErrorType.INFO_GET_ERR;
                this.oN0x("error", {
                    code: this.cv5A.error
                });
                return
            }
            this.cv5A.playUrl = bv5A.url;
            this.cv5A.expireTime = (new Date).getTime() + bv5A.expi * 1e3;
            this.btk0x()
        } else {
            this.cv5A.error = ErrorType.INFO_GET_ERR;
            this.oN0x("error", {
                code: this.cv5A.error
            });
            ha8S.bV5a("info load error")
        }
    }
    ;
    b4f.btk0x = function() {
        if (this.dB6v) {
            var W5b = this.cv5A.playUrl;
            if (this.cv5A.time > 0 && (this.cv5A.loadState == LoadState.IN_RE_GET_URL || this.cv5A.loadState == LoadState.IN_RE_GET_URL)) {
                W5b += "#t=" + this.cv5A.time
            }
            this.dB6v.setSrc(W5b);
            ha8S.oz0x("load mp3: {0},loadState: {1}.", W5b, this.cv5A.loadState)
        }
    }
    ;
    b4f.bFb3x = function() {
        if (/#t=(\d+)$/.test(this.dB6v.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    }
    ;
    b4f.Kr7k = function() {
        var by5D = parseInt(this.cv5A.time) || 0
          , cnb4f = this.bFb3x();
        if (by5D === cnb4f) {
            this.dB6v.load()
        } else {
            this.dB6v.setSrc(this.cv5A.playUrl + "#t=" + by5D)
        }
        this.cv5A.loadState = LoadState.IN_RELOAD;
        this.yv4z();
        ha8S.oz0x("reload from: {0}", by5D)
    }
    ;
    b4f.bEt3x = function() {
        this.cv5A.loadState = LoadState.IN_RE_GET_URL;
        this.bEp3x()
    }
    ;
    b4f.bFf3x = function() {
        var uK2x = getHost(this.cv5A.playUrl);
        if (uK2x) {
            for (var i = 0; i < this.pS1x.length; i++) {
                var hB8t = this.pS1x[i] || []
                  , r4v = hB8t.indexOf(uK2x);
                if (r4v >= 0 && hB8t.length > 1) {
                    return hB8t[(r4v + 1) % hB8t.length]
                }
            }
        }
        function getHost(W5b) {
            if (CDN_HOST_REG.test(W5b))
                return RegExp.$1
        }
    }
    ;
    b4f.cmZ4d = function() {
        this.cv5A.playUrl = this.cv5A.playUrl.replace(CDN_HOST_REG, this.bFf3x());
        this.cv5A.loadState = LoadState.IN_SWITCH_CDN;
        this.btk0x();
        this.yv4z()
    }
    ;
    b4f.cnk4o = function() {
        if (this.cv5A.loadState == LoadState.LOAD_START) {
            this.cv5A.loadState = LoadState.LOADED_META;
            if (this.dB6v.type == "audio") {
                this.cv5A.duration = this.dB6v.getDuration()
            }
            this.oN0x("loadedmeta", {
                duration: this.cv5A.duration
            })
        } else {
            this.cv5A.loadState = LoadState.LOADED_META
        }
        if (this.cv5A.play) {
            this.dB6v.play()
        } else {
            this.dB6v.pause()
        }
        if (this.cv5A.time && parseInt(this.cv5A.time) != this.bFb3x()) {
            this.dB6v.setCurrentTime(this.cv5A.time)
        }
        this.FJ6D();
        this.Nu8m();
        bDZ3x = true;
        ha8S.oz0x("loaded meta")
    }
    ;
    b4f.cng4k = function() {
        this.cv5A.ended = true;
        this.oN0x("ended")
    }
    ;
    b4f.yv4z = function() {
        if (!this.cv5A.waiting) {
            this.cv5A.waiting = true;
            this.cv5A.waitTimestamp = +(new Date);
            this.oN0x("waiting")
        }
    }
    ;
    b4f.Nu8m = function() {
        this.cv5A.waiting = false;
        this.cv5A.waitTimestamp = 0;
        this.oN0x("playing")
    }
    ;
    b4f.sO2x = function() {
        this.oN0x("play")
    }
    ;
    b4f.btm0x = function() {
        this.oN0x("pause")
    }
    ;
    b4f.cnf4j = function() {
        if (this.cv5A.loadState != LoadState.LOADED_META)
            return;
        var by5D = this.dB6v.getCurrentTime();
        if (this.cv5A.waiting && by5D > this.cv5A.time) {
            this.Nu8m()
        }
        this.cv5A.time = by5D;
        this.oN0x("timeupdate", {
            time: this.cv5A.time,
            duration: this.cv5A.duration
        })
    }
    ;
    b4f.sc2x = function(d4h) {
        if (this.cv5A.loadState != LoadState.LOADED_META)
            return;
        var o4s = {};
        if (d4h.data) {
            o4s.total = d4h.data.total;
            o4s.loaded = d4h.data.loaded
        } else {
            var yo4s = this.dB6v.getBuffered()
              , by5D = this.dB6v.getCurrentTime()
              , nA0x = 0;
            for (var i = 0; i < yo4s.length; i++) {
                if (by5D > yo4s.start(i) && by5D < yo4s.end(i)) {
                    nA0x = yo4s.end(i);
                    break
                }
            }
            o4s.total = this.cv5A.duration;
            o4s.loaded = Math.min(nA0x, o4s.total)
        }
        this.oN0x("progress", o4s)
    }
    ;
    b4f.FJ6D = function() {
        if (this.cv5A.retry) {
            clearTimeout(this.cv5A.retry.tid);
            this.cv5A.retry = null
        }
    }
    ;
    b4f.er7k = function() {
        var bU5Z = this.dB6v.getError();
        ha8S.bV5a("media error code: {0}, netState: {1}", bU5Z.code, this.dB6v.getNetworkState());
        if (bU5Z.code == MediaError.MEDIA_ERR_NETWORK || bU5Z.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Fj6d = l4p.bti0x();
            if (!this.cv5A.retry) {
                this.cv5A.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.cv5A.retry.tid)
            }
            if (this.cv5A.retry.level == RetryLevel.NONE) {
                if (this.bEq3x()) {
                    this.cv5A.retry.level = RetryLevel.GET_URL;
                    this.bEt3x();
                    ha8S.oz0x("Url expired, get url.")
                } else {
                    this.cv5A.retry.level = RetryLevel.RELOAD;
                    this.cv5A.retry.tid = setTimeout(this.Kr7k.g4k(this), 3e3);
                    ha8S.oz0x("Reload mp3 3s later.")
                }
            } else if (this.cv5A.retry.level == RetryLevel.GET_URL) {
                this.cv5A.retry.level = RetryLevel.RELOAD;
                this.cv5A.retry.tid = setTimeout(this.Kr7k.g4k(this), 3e3);
                ha8S.oz0x("Reload mp3 3s later.")
            } else if (this.cv5A.retry.level == RetryLevel.RELOAD) {
                this.cv5A.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bFf3x()) {
                    this.cv5A.retry.tid = setTimeout(this.cmZ4d.g4k(this), 5e3);
                    ha8S.oz0x("Switch CDN 5s later.")
                } else {
                    this.cv5A.retry.tid = setTimeout(this.Kr7k.g4k(this), 5e3);
                    ha8S.oz0x("Reload mp3 5s later.")
                }
            } else if (!bDZ3x && this.dB6v.type == "audio" && !Fj6d.useFlash && !dh6b.bbH6B.mac && l4p.biM8E().supported) {
                Fj6d.useFlash = true;
                l4p.Fi6c(Fj6d);
                this.cnd4h("flash")
            } else {
                this.FJ6D();
                this.fC8u();
                this.cv5A.error = ErrorType.NET_ERR;
                this.oN0x("error", {
                    code: this.cv5A.error
                });
                ha8S.bV5a("error can not retry.")
            }
        } else {
            this.FJ6D();
            this.fC8u();
            this.cv5A.error = ErrorType.UNKNOWN_ERR;
            this.oN0x("error", {
                code: this.cv5A.error
            });
            ha8S.bV5a("error can not retry.")
        }
    }
    ;
    b4f.btl0x = function() {
        var hg8Y = 0
          , bFr3x = 5e3;
        return function() {
            this.yv4z();
            clearTimeout(hg8Y);
            setTimeout(function() {
                var fT8L = +(new Date);
                if (this.cv5A.waiting && fT8L - this.cv5A.waitTimestamp >= bFr3x && this.cv5A.stalledRetryCount < MAX_STALLED_RETRY) {
                    ha8S.oz0x("stalled too long retry.");
                    this.cv5A.stalledRetryCount++;
                    this.Kr7k()
                }
            }
            .g4k(this), bFr3x);
            ha8S.oz0x("stalled")
        }
    }();
    b4f.bEq3x = function() {
        var fT8L = +(new Date);
        return fT8L > this.cv5A.expireTime
    }
    ;
    b4f.cne4i = function() {
        var by5D = parseInt(this.cv5A.time) || 0;
        this.dB6v.setSrc(this.cv5A.playUrl + "#t=" + by5D);
        this.cv5A.loadState = LoadState.IN_RELOAD;
        this.yv4z();
        ha8S.oz0x("recover from: {0}", by5D)
    }
    ;
    b4f.oN0x = function(V5a, j4n) {
        h4l.y4C(B4F.fw7p, "playaction", {
            action: V5a,
            data: j4n || {}
        })
    }
    ;
    G4K.fu7n.A4E({
        element: B4F.fw7p,
        event: ["playaction"]
    })
}
)();
(function() {
    if (!(window == top)) {
        return
    }
    var c4g = NEJ.P, h4l = c4g("nej.v"), G4K = c4g("nej.ut"), B4F = c4g("nm.w"), b4f;
    B4F.Fd6X = NEJ.C();
    b4f = B4F.Fd6X.O4S(B4F.fw7p);
    K4O = B4F.Fd6X.cj5o;
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.cmY4c = function(bI5N) {
        this.YL3x(bI5N);
        this.ey7r()
    }
    ;
    b4f.btg0x = function() {
        this.fC8u()
    }
    ;
    b4f.uB2x = function(d4h) {
        if (d4h.action == "play") {
            this.fC8u()
        }
    }
    ;
    b4f.oN0x = function(V5a, j4n) {
        h4l.y4C(B4F.Fd6X, "tmpplayaction", {
            action: V5a,
            data: j4n || {},
            tmp: true
        })
    }
    ;
    b4f.sb2x = function() {
        return this.cv5A
    }
    ;
    G4K.fu7n.A4E({
        element: B4F.Fd6X,
        event: ["tmpplayaction"]
    })
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), fo7h = c4g("nej.n"), w4A = c4g("nej.j"), G4K = c4g("nej.ut"), ba5f = c4g("nej.ui"), B4F = c4g("nm.w"), n4r = c4g("nm.l"), ka9R = c4g("nm.c"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), b4f, K4O, bbA6u = [{
        item: "m-publish-search-single",
        type: 1
    }, {
        item: "m-publish-search-artist",
        type: 100
    }, {
        item: "m-publish-search-album",
        type: 10
    }, {
        item: "m-publish-search-mv",
        type: 1004
    }, {
        item: "m-publish-search-playlist",
        type: 1e3
    }, {
        item: "m-publish-search-djRadio",
        type: 1009
    }];
    var btb0x = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    B4F.bta0x = NEJ.C();
    b4f = B4F.bta0x.O4S(ba5f.ef7Y);
    b4f.cq5v = function(e4i) {
        this.cu5z(e4i);
        var i4m = a3x.I4M(this.m4q, "j-flag");
        this.cyR7K = i4m.shift();
        this.cmV4Z = i4m.shift();
        this.FN6H = i4m.shift();
        this.bsX0x = i4m.shift();
        this.bsT0x = [i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift(), i4m.shift()];
        this.bbs6m = i4m.shift();
        this.bGb4f = i4m.shift();
        this.qn1x = {
            list: this.bsT0x,
            selected: "z-curr",
            onchange: this.bGi4m.g4k(this)
        };
        h4l.s4w(this.FN6H, "input", this.bbr6l.g4k(this));
        h4l.s4w(this.FN6H, "propertychange", this.bbr6l.g4k(this));
        h4l.s4w(this.FN6H, "keyup", this.bbr6l.g4k(this));
        h4l.s4w(this.cmV4Z, "click", this.bbr6l.g4k(this));
        h4l.s4w(this.bbs6m, "click", this.cA5F.g4k(this));
        h4l.s4w(this.bGb4f, "click", function() {
            this.y4C("oncancel", {})
        }
        .g4k(this));
        this.R5W = p4t.Es5x.fX8P();
        this.Mc8U = top.nm.w.Fd6X.fX8P();
        G4K.fu7n.A4E({
            element: top.nm.w.Fd6X,
            event: ["tmpplayaction"]
        });
        this.rc1x = {
            limit: 100,
            offset: 0,
            parent: this.bbs6m,
            onbeforelistload: this.pp1x.g4k(this)
        };
        p4t.sk = "fuck" + a3x.u4y(this.bsX0x, "xname") + "458";
        h4l.s4w(top.nm.w.Fd6X, "tmpplayaction", this.uB2x.g4k(this))
    }
    ;
    b4f.bZ5e = function() {
        this.cb5g = "m-xwgt-publish-search"
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        if (!!this.AV4Z) {
            this.AV4Z.S5X();
            delete this.AV4Z
        }
        this.qn1x.index = btb0x[e4i.type || "song"];
        this.AV4Z = G4K.EX6R.A4E(this.qn1x);
        this.FN6H.value = "";
        this.FN6H.focus();
        this.sW2x = "";
        this.cyT7M = 0;
        if (e4i.showMV == true) {
            this.bsT0x[btb0x["mv"]].parentNode.style.display = "";
            a3x.x4B(this.bsX0x, "srchtab-1")
        } else {
            this.bsT0x[btb0x["mv"]].parentNode.style.display = "none";
            a3x.v4z(this.bsX0x, "srchtab-1")
        }
        if (!!this.dy6s) {
            this.dy6s = this.dy6s.S5X()
        }
        if (e4i.hideBack) {
            a3x.x4B(this.bGb4f.parentNode, "f-hide")
        }
    }
    ;
    b4f.bA5F = function() {
        this.Mc8U.btg0x();
        this.bF5K()
    }
    ;
    b4f.bbr6l = function() {
        var value = this.FN6H.value.trim();
        if (value && value.length) {
            if (value != this.sW2x) {
                this.sW2x = value;
                this.bGi4m({
                    index: this.AV4Z.sl2x()
                })
            }
        } else {
            if (this.dy6s) {
                this.dy6s = this.dy6s.S5X()
            }
        }
        this.sW2x = value
    }
    ;
    b4f.cA5F = function() {
        var cmR4V = function(F4J) {
            return a3x.bz5E(F4J, "sitm") || a3x.bz5E(F4J, "itm") || a3x.bz5E(F4J, "mv-item")
        }
          , cmQ4U = function(F4J) {
            return a3x.bz5E(F4J, "ply")
        }
          , bGL4P = function() {
            n4r.X5c.M4Q({
                type: 2,
                tip: "因合作方要求，该资源需付费使用"
            })
        }
          , cmN4R = function() {
            n4r.X5c.M4Q({
                type: 2,
                tip: "因合作方要求，该资源需下载后播放"
            })
        }
          , bsc0x = function(be5j) {
            if (be5j && be5j.privilege && be5j.privilege.toast) {
                w4A.bp5u("/api/song/toast", {
                    query: {
                        id: be5j.id
                    },
                    type: "json",
                    onload: Qt0x.g4k(this),
                    onerror: Qt0x.g4k(this)
                })
            } else {
                Qq0x()
            }
        }
          , Qt0x = function(P4T) {
            Qq0x((P4T || Y5d).toast)
        }
          , Qq0x = function(bC5H) {
            n4r.X5c.M4Q({
                type: 2,
                tip: bC5H || "因合作方要求，该资源暂时下架>_<"
            })
        };
        return function(d4h) {
            var EV6P = h4l.U5Z(d4h, cmQ4U)
              , i4m = h4l.U5Z(d4h, cmR4V)
              , eg7Z = this.Mc8U.sb2x();
            if (!!i4m) {
                h4l.bh5m(d4h);
                this.MW8O = a3x.u4y(i4m, "id");
                this.Nc8U = a3x.u4y(i4m, "type");
                if (this.Nc8U == 18) {
                    var bI5N = this.R5W.eo7h(this.MW8O)
                      , pJ1x = l4p.pj1x(bI5N);
                    if (!EV6P) {
                        if (pJ1x == 10) {
                            bGL4P();
                            return
                        } else if (pJ1x == 100) {
                            bsc0x(bI5N);
                            return
                        }
                    } else {
                        if (pJ1x == 10) {
                            bGL4P();
                            return
                        } else if (pJ1x == 100) {
                            bsc0x(bI5N);
                            return
                        } else if (pJ1x == 11) {
                            cmN4R();
                            return
                        } else {
                            a3x.v4z(this.AT4X, "z-pause z-loading");
                            if (EV6P == this.AT4X && eg7Z.play && !eg7Z.ended) {
                                this.Mc8U.btg0x()
                            } else {
                                this.AT4X = EV6P;
                                this.Mc8U.cmY4c(bI5N)
                            }
                            return
                        }
                    }
                } else if (this.Nc8U == 70) {
                    if (a3x.bz5E(i4m, "z-noprogram")) {
                        n4r.X5c.M4Q({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cmM4Q()
            }
        }
    }();
    b4f.cmM4Q = function() {
        var hu8m = this.R5W.eo7h(this.MW8O)
          , rM1x = l4p.bKQ5V(this.Nc8U, hu8m);
        rM1x.title = rM1x.title || "";
        rM1x.author = rM1x.author || "";
        rM1x.picUrl = rM1x.picUrl || "";
        rM1x.authors = rM1x.authors || "";
        if (this.Nc8U == 70) {
            this.MW8O = this.MW8O.slice(0, -4)
        }
        this.y4C("onfinish", {
            id: this.MW8O,
            type: this.Nc8U,
            data: rM1x
        })
    }
    ;
    b4f.uB2x = function(d4h) {
        var j4n = d4h.data;
        if (!this.AT4X) {
            return
        }
        switch (d4h.action) {
        case "play":
            a3x.eT7M(this.AT4X, "z-pause z-play", "z-loading");
            break;
        case "pause":
        case "ended":
            a3x.v4z(this.AT4X, "z-pause z-loading");
            break;
        case "error":
            n4r.X5c.M4Q({
                type: 2,
                tip: "试听遇到问题，播放失败"
            });
            a3x.v4z(this.AT4X, "z-pause z-loading");
            break;
        case "playing":
            a3x.eT7M(this.AT4X, "z-loading", "z-pause");
            break;
        case "waiting":
            a3x.eT7M(this.AT4X, "z-pause", "z-loading");
            break
        }
    }
    ;
    b4f.cmL4P = function(d4h) {
        if (d4h.result.code == 407) {
            this.bbs6m.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.bbs6m.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    }
    ;
    b4f.bGi4m = function(d4h) {
        if (!this.sW2x || d4h.index < 0 || d4h.index > 5) {
            return
        }
        this.Mc8U.btg0x();
        var bd5i = bbA6u[d4h.index]
          , e4i = NEJ.X({}, this.rc1x);
        e4i.cache = {
            klass: p4t.Es5x,
            clear: true,
            onerror: this.cmL4P.g4k(this)
        };
        e4i.cache.lkey = "search-publish-" + bd5i.type + "-" + this.sW2x;
        e4i.item = {
            klass: bd5i.item,
            getRestrictLevel: l4p.pj1x,
            dur2time: l4p.kQ9H
        };
        if (!e4i.cache.data) {
            e4i.cache.data = {}
        }
        e4i.cache.data.s = this.sW2x;
        e4i.cache.data.type = bd5i.type;
        e4i.cache.data.isPub = true;
        if (bd5i.type == 1) {
            e4i.cache.data.hlpretag = '<span class="s-fc7">';
            e4i.cache.data.hlposttag = "</span>"
        }
        e4i.onemptylist = this.cmK4O.g4k(this, this.sW2x);
        if (!!this.ER6L)
            this.R5W.tT2x(this.ER6L);
        if (!!this.dy6s) {
            this.dy6s = this.dy6s.S5X()
        }
        this.dy6s = G4K.mP0x.A4E(e4i);
        this.ER6L = e4i.cache.lkey
    }
    ;
    b4f.pp1x = function(d4h) {
        d4h.value = a3x.hZ8R("m-publish-search-loading")
    }
    ;
    b4f.cmK4O = function(J4N, d4h) {
        a3x.dJ7C(d4h.parent, "m-publish-emtpy-message", {
            key: J4N
        });
        d4h.stopped = true
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), dh6b = c4g("nej.p"), w4A = c4g("nej.j"), bX5c = c4g("nej.ut"), bD5I = c4g("nej.ui"), B4F = c4g("nm.w"), b4f, K4O;
    var cmI4M = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    B4F.EN6H = NEJ.C();
    b4f = B4F.EN6H.O4S(bD5I.ef7Y);
    var gn8f = a3x.ep7i("m-wgt-receiverInput");
    var cmG4K = a3x.ep7i("m-wgt-receiverList");
    var ip8h = a3x.so2x(cmI4M);
    var cmF4J = a3x.ep7i('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b4f.cq5v = function(e4i) {
        this.bi5n = [];
        this.vc2x = e4i.receiver || null;
        this.cmE4I = e4i.unique || false;
        this.mj0x = e4i.err;
        this.bIp4t(this.bIt4x, e4i.uid);
        this.cu5z(e4i)
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.OA0x();
        this.OJ0x();
        this.bbf6Z();
        if (e4i.receiver)
            this.brB0x(e4i.receiver.nickname, e4i.receiver.userId);
        a3x.Z5e(this.Bo4s, "display", "block");
        a3x.Z5e(this.brr0x, "cursor", "text");
        a3x.Z5e(this.Bo4s, "cursor", "text")
    }
    ;
    b4f.bZ5e = function() {
        var j4n = this.bIT4X();
        this.cb5g = a3x.il8d(a3x.bW5b(gn8f, {
            receiver: this.vc2x,
            users: j4n
        }));
        this.lh9Y = ip8h
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        var bK5P = a3x.I4M(this.m4q, "j-flag");
        var gI8A = a3x.I4M(this.m4q, "j-item");
        this.brr0x = bK5P[0];
        this.bJg4k = bK5P[1];
        this.dM7F = bK5P[2];
        this.Bo4s = bK5P[3];
        this.bbc5h = bK5P[4];
        this.brm0x = bK5P[5];
        this.fp7i = gI8A;
        a3x.x4B(this.fp7i[0], "j-selected");
        h4l.s4w(this.dM7F, "keyup", this.brl0x.g4k(this));
        h4l.s4w(this.dM7F, "keydown", this.Qe0x.g4k(this));
        h4l.s4w(this.dM7F, "focus", this.kg9X.g4k(this));
        h4l.s4w(this.bbc5h, "click", this.cmC4G.g4k(this));
        h4l.s4w(this.brr0x, "click", this.cmB4F.g4k(this));
        h4l.s4w(document.body, "click", this.op0x.g4k(this));
        h4l.s4w(this.dM7F, "input", this.fr7k.g4k(this));
        h4l.s4w(this.dM7F, "blur", this.oU1x.g4k(this))
    }
    ;
    b4f.bA5F = function(e4i) {
        h4l.mt0x(document.body, "click", this.op0x.g4k(this));
        this.bF5K();
        this.bbf6Z();
        this.cmz4D();
        this.op0x()
    }
    ;
    b4f.brl0x = function(d4h) {
        h4l.bh5m(d4h);
        var jj9a = d4h.keyCode || d4h.which;
        var bl5q = this.dM7F.value;
        var bm5r = this.fp7i.length;
        var qj1x = a3x.I4M(this.m4q, "j-selected")[0];
        switch (jj9a) {
        case 13:
            var kq9h = a3x.fU8M(qj1x, "data-username");
            var hC8u = a3x.fU8M(qj1x, "data-userId");
            this.brB0x(kq9h, hC8u);
            this.op0x();
            this.dM7F.value = "";
            break;
        case 38:
            var r4v = a3x.fU8M(qj1x, "data-index") - 1 < 0 ? bm5r - 1 : a3x.fU8M(qj1x, "data-index") - 1;
            a3x.v4z(qj1x, "j-selected");
            a3x.x4B(this.fp7i[r4v], "j-selected");
            break;
        case 40:
            var r4v = parseInt(a3x.fU8M(qj1x, "data-index")) + 1 >= bm5r ? 0 : parseInt(a3x.fU8M(qj1x, "data-index")) + 1;
            a3x.v4z(qj1x, "j-selected");
            a3x.x4B(this.fp7i[r4v], "j-selected");
            break;
        default:
            this.vr3x()
        }
    }
    ;
    b4f.Qe0x = function(d4h) {
        var jj9a = d4h.keyCode || d4h.which;
        var bl5q = this.dM7F.value;
        var r4v = a3x.I4M(this.m4q, "j-receiver").length - 1;
        if (jj9a === 8 && bl5q === "")
            this.cmy4C(r4v)
    }
    ;
    b4f.fr7k = function(d4h) {
        var bl5q = this.dM7F.value;
        if (bl5q.length > 10) {
            this.dM7F.value = bl5q.substring(0, 10);
            return
        }
        dh6b.dk6e.browser == "ie" && dh6b.dk6e.version < "7.0" ? setTimeout(this.bqK0x.g4k(this), 0) : this.bqK0x();
        this.OJ0x()
    }
    ;
    b4f.kg9X = function() {
        if (this.bi5n[0])
            this.vr3x();
        else
            this.bIp4t(this.cmx4B);
        a3x.Z5e(this.Bo4s, "display", "none")
    }
    ;
    b4f.oU1x = function() {
        var bm5r = a3x.I4M(this.m4q, "j-receiver").length;
        if (this.dM7F.value.trim() == "" && bm5r <= 0)
            a3x.Z5e(this.Bo4s, "display", "block")
    }
    ;
    b4f.brB0x = function(kq9h, hC8u) {
        var FZ6T = this.RM1x();
        if (FZ6T.length >= 10) {
            this.dA6u();
            return
        }
        var ba5f;
        for (ba5f = 0; ba5f < FZ6T.length; ba5f++) {
            if (FZ6T[ba5f] == hC8u) {
                this.op0x();
                return
            }
        }
        if (!kq9h || !hC8u)
            return;
        var f4j = a3x.dj6d(a3x.il8d(a3x.bW5b(cmF4J, {
            username: kq9h,
            userId: hC8u
        })));
        var bE5J = this.bJg4k.parentNode;
        if (this.cmE4I) {
            this.bbf6Z()
        }
        bE5J.insertBefore(f4j, this.bJg4k);
        this.dM7F.value = "";
        var bm5r = a3x.I4M(this.m4q, "j-receiver").length;
        if (bm5r > 1)
            a3x.Z5e(this.Bo4s, "display", "none");
        this.bqK0x();
        this.OJ0x()
    }
    ;
    b4f.bbf6Z = function() {
        var RT1x = a3x.I4M(this.m4q, "j-receiver");
        var ba5f;
        if (RT1x.length > 0) {
            for (ba5f = 0; ba5f < RT1x.length; ba5f++) {
                a3x.cC6w(RT1x[ba5f], false)
            }
        }
    }
    ;
    b4f.cmz4D = function() {
        this.dM7F.value = ""
    }
    ;
    b4f.cmy4C = function(r4v) {
        this.dA6u(!0);
        var RT1x = a3x.I4M(this.m4q, "j-receiver");
        a3x.cC6w(RT1x[r4v], false);
        this.OJ0x()
    }
    ;
    b4f.vr3x = function() {
        var bl5q = this.dM7F.value;
        var bw5B = bl5q.trim().toLowerCase();
        var j4n;
        bw5B = bw5B.replace(/\[/g, "\\[");
        bw5B = bw5B.replace(/\]/g, "\\]");
        j4n = this.bIT4X(bw5B);
        this.cmw4A(j4n)
    }
    ;
    b4f.op0x = function(d4h) {
        a3x.Z5e(this.bbc5h, "display", "none")
    }
    ;
    b4f.dA6u = function(gK8C) {
        if (gK8C && this.mj0x) {
            a3x.Z5e(this.mj0x, "display", "none");
            return
        }
        if (this.mj0x)
            a3x.Z5e(this.mj0x, "display", "block")
    }
    ;
    b4f.cmC4G = function(d4h) {
        h4l.ci5n(d4h);
        var da6U = d4h.target || d4h.srcElement;
        if (a3x.bz5E(da6U, "j-flag"))
            return;
        var bE5J = da6U.nodeName.toLowerCase() == "a" ? da6U.parentNode : da6U.parentNode.parentNode;
        var kq9h = a3x.fU8M(bE5J, "data-username");
        var hC8u = a3x.fU8M(bE5J, "data-userId");
        this.brB0x(kq9h, hC8u);
        this.op0x();
        a3x.Z5e(this.Bo4s, "display", "none")
    }
    ;
    b4f.cmB4F = function(d4h) {
        h4l.bh5m(d4h);
        var da6U = d4h.target || d4h.srcElement;
        if (a3x.bz5E(da6U.parentNode, "j-receiver")) {
            a3x.cC6w(da6U.parentNode, false);
            this.dA6u(!0);
            this.OJ0x()
        } else
            this.dM7F.focus()
    }
    ;
    b4f.bqK0x = function() {
        this.brm0x.innerHTML = this.dM7F.value;
        var cR6L = this.brm0x.offsetWidth + 2;
        a3x.Z5e(this.dM7F, "width", cR6L + "px")
    }
    ;
    b4f.OJ0x = function() {
        var baT5Y = a3x.hM8E(this.dM7F, this.m4q).y;
        var bLn5s = Math.floor((baT5Y - 8) / 27);
        if (bLn5s < 0)
            return;
        a3x.Z5e(this.brr0x, "height", 19 + bLn5s * 29 + "px")
    }
    ;
    b4f.OA0x = function() {
        var oD0x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < oD0x.length; i++) {
            a3x.Z5e(this.brm0x, oD0x[i], a3x.dc6W(this.dM7F, oD0x[i]))
        }
    }
    ;
    b4f.bIp4t = function(dw6q, D4H) {
        var cY6S = D4H ? D4H : window.GUser.userId;
        var W5b = "/api/user/getfollows/" + cY6S;
        var fJ8B = w4A.bp5u(W5b, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dw6q.g4k(this),
            onerror: function(j4n) {
                this.bi5n = []
            },
            onbeforerequest: function(j4n) {}
        })
    }
    ;
    b4f.bIt4x = function(j4n) {
        this.bi5n = JSON.parse(j4n).follow || [];
        var D4H = GUser.userId;
        for (var i = 0; i < this.bi5n.length; i++) {
            if (this.bi5n[i].userId == D4H) {
                this.bi5n.splice(i, 1);
                continue
            }
            this.bi5n[i].avatarUrl = this.bi5n[i].avatarUrl + "?param=30y30"
        }
    }
    ;
    b4f.cmx4B = function(j4n) {
        if (this.bi5n[0])
            return;
        this.bIt4x(j4n);
        this.vr3x()
    }
    ;
    b4f.bIT4X = function(bw5B) {
        var bw5B = bw5B ? bw5B : "";
        this.bi5n = this.bi5n[0] ? this.bi5n : [];
        var bm5r = this.bi5n.length;
        var Ky7r = this.RM1x();
        var rF1x = [];
        var KC7v, KH7A, bqa9R;
        if (!this.bi5n[0])
            return rF1x;
        for (var ba5f = 0; ba5f < bm5r; ba5f++) {
            bqa9R = false;
            for (var w4A = 0; w4A < Ky7r.length; w4A++) {
                if (this.bi5n[ba5f].userId == Ky7r[w4A]) {
                    bqa9R = true;
                    break
                }
            }
            if (bqa9R)
                continue;
            KC7v = this.bi5n[ba5f].nickname.toLowerCase().search(bw5B);
            KH7A = this.bi5n[ba5f].py ? this.bi5n[ba5f].py.toLowerCase().search(bw5B) : -1;
            if (KC7v !== -1 || KH7A != -1)
                rF1x.push(this.bi5n[ba5f])
        }
        return rF1x
    }
    ;
    b4f.cmw4A = function(j4n) {
        a3x.dJ7C(this.bbc5h, cmG4K, {
            users: j4n
        });
        a3x.x4B(a3x.I4M(this.m4q, "j-item")[0], "j-selected");
        this.fp7i = a3x.I4M(this.m4q, "j-item");
        a3x.Z5e(this.bbc5h, "display", "block")
    }
    ;
    b4f.RM1x = function() {
        var rF1x = a3x.I4M(this.m4q, "j-receiver") || [];
        var hC8u = [];
        for (var i = 0; i < rF1x.length; i++) {
            hC8u.push(a3x.fU8M(rF1x[i], "data-id"))
        }
        return hC8u
    }
    ;
    b4f.cyV7O = function() {
        var hC8u = this.RM1x();
        var rF1x = [];
        for (var i = 0; i < hC8u.length; i++) {
            for (var j = 0; j < this.bi5n.length; j++) {
                if (hC8u[i] == this.bi5n[j].userId)
                    rF1x.push(this.bi5n[j])
            }
        }
        return rF1x
    }
    ;
    b4f.cmt4x = function() {
        this.bbf6Z()
    }
    ;
    B4F.EN6H.M4Q = function(e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n4r.oo0x.M4Q({
                title: "登录"
            });
            return
        }
        e4i = e4i || {};
        if (e4i.parent === undefined)
            e4i.parent = document.body;
        !!this.eR7K && this.eR7K.S5X();
        this.eR7K = this.A4E(e4i)
    }
    ;
    B4F.EN6H.br5w = function() {
        !!this.eR7K && this.eR7K.S5X()
    }
    ;
    B4F.EN6H.El5q = function() {
        return this.op0x()
    }
    ;
    B4F.EN6H.cyW7P = function() {
        return this.vr3x()
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), k4o = c4g("nej.u"), h4l = c4g("nej.v"), l4p = c4g("nm.x"), n4r = c4g("nm.l"), b4f, K4O;
    n4r.Gf6Z = NEJ.C();
    b4f = n4r.Gf6Z.O4S(n4r.bcH6B);
    K4O = n4r.Gf6Z.cj5o;
    b4f.bj5o = function() {
        var Ej5o;
        var cmr4v = function(C4G, J4N) {
            Ej5o = Ej5o || [];
            if (J4N != "18")
                Ej5o.push({
                    key: J4N,
                    value: C4G
                })
        };
        return function(e4i) {
            this.bk5p(e4i);
            if (e4i.upwards) {
                a3x.x4B(this.m4q, "m-emts-up")
            } else {
                a3x.v4z(this.m4q, "m-emts-up")
            }
            if (e4i.rightwards) {
                a3x.x4B(this.m4q, "m-emts-right")
            } else {
                a3x.v4z(this.m4q, "m-emts-right")
            }
            if (!Ej5o) {
                var bu5z = l4p.ctd5i();
                k4o.eq7j(bu5z, cmr4v)
            }
            var bm5r = Ej5o.length;
            Ej5o.splice(bm5r - 2, 0, {
                key: "18",
                value: "186"
            });
            this.baG5L = Ej5o;
            this.cmq4u = !!e4i.autoHide
        }
    }();
    b4f.bZ5e = function() {
        this.cb5g = "ntp-portrait"
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        var i4m = a3x.I4M(this.m4q, "j-flag");
        this.bJ5O = i4m[0];
        this.cmp4t = i4m[1];
        this.cmo4s = i4m[2];
        this.cml4p = i4m[3];
        h4l.s4w(this.bJ5O, "click", this.xX3x.g4k(this));
        h4l.s4w(this.cmp4t, "click", this.Ef5k.g4k(this, 1));
        h4l.s4w(this.cml4p, "click", this.Ef5k.g4k(this, 2))
    }
    ;
    b4f.bpA9r = function(r4v) {
        this.baB5G = r4v;
        var bf5k = (r4v - 1) * 50;
        var i4m = this.baG5L.slice(bf5k, Math.min(bf5k + 50, this.baG5L.length));
        this.bJ5O.innerHTML = a3x.bW5b("jst-portrait", {
            plist: i4m
        }, {
            purl: l4p.bAJ2x
        });
        this.cmo4s.innerText = r4v + "/" + Math.ceil(this.baG5L.length / 50)
    }
    ;
    b4f.Ef5k = function(r4v) {
        var cmj4n = Math.ceil(this.baG5L.length / 50);
        if (r4v == 1 && this.baB5G == 1 || r4v == 2 && this.baB5G == cmj4n)
            return;
        r4v == 1 ? this.bpA9r(this.baB5G - 1) : this.bpA9r(this.baB5G + 1)
    }
    ;
    b4f.xX3x = function(d4h) {
        var F4J = h4l.U5Z(d4h, "d:text");
        if (!F4J)
            return;
        var d4h = {
            url: a3x.u4y(F4J, "url"),
            text: a3x.u4y(F4J, "text")
        };
        this.y4C("onselect", d4h);
        if (this.cmq4u && !d4h.stopped) {
            this.br5w()
        }
    }
    ;
    b4f.M4Q = function() {
        K4O.M4Q.call(this);
        this.bpA9r(1)
    }
}
)();
(function() {
    var c4g = NEJ.P
      , h4l = c4g("nej.v")
      , k4o = c4g("nej.u")
      , dh6b = c4g("nej.p")
      , bc5h = c4g("nej.h")
      , G4K = c4g("nej.ut")
      , js9j = /^[#?]+/
      , Cd5i = /#(.*?)$/
      , xW3x = window
      , bpf9W = !history.pushState || dh6b.bbH6B.android || !history.auto;
    var bas5x = function(W5b, bpb9S) {
        xW3x.history[!bpb9S ? "pushState" : "replaceState"](null, document.title, W5b)
    };
    var baq5v = function() {
        return location.parse(xW3x.location.href)
    };
    bas5x = bas5x.ek7d(function(d4h) {
        if (!bpf9W)
            return;
        var bg5l = d4h.args;
        d4h.stopped = !0;
        W5b = bg5l[0].replace(js9j, "");
        !bg5l[1] ? xW3x.location.hash = W5b : xW3x.location.replace("#" + W5b)
    });
    baq5v = baq5v.ek7d(function(d4h) {
        if (!bpf9W)
            return;
        d4h.stopped = !0;
        var dN7G = Cd5i.test(xW3x.location.href) ? RegExp.$1 : "";
        d4h.value = location.parse(dN7G.replace(js9j, ""))
    });
    location.redirect = function(W5b, bpb9S) {
        bas5x(W5b, bpb9S);
        return this
    }
    ;
    location.active = function() {
        var eD7w, W5b, iZ9Q, cK6E, Sy1x;
        var boW9N = function(hq8i) {
            if (!!cK6E) {
                cK6E = !1;
                return
            }
            var d4h = {
                oldValue: iZ9Q,
                newValue: baq5v()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h4l.y4C(location, "beforeurlchange", d4h);
                if (d4h.stopped) {
                    if (!!iZ9Q) {
                        cK6E = !0;
                        bas5x(iZ9Q.href, !0)
                    }
                    return
                }
            }
            W5b = xW3x.location.href;
            iZ9Q = d4h.newValue;
            h4l.y4C(location, "urlchange", iZ9Q);
            bc5h.bqo0x(iZ9Q.href)
        };
        var bMR5W = function() {
            if (W5b != xW3x.location.href)
                boW9N();
            eD7w = requestAnimationFrame(bMR5W)
        };
        return function(bM5R) {
            if (!!Sy1x)
                return this;
            Sy1x = !0;
            xW3x = bM5R || window;
            if (bpf9W && "onhashchange"in window && dh6b.mp0x.trident2) {
                h4l.s4w(xW3x, "hashchange", boW9N);
                boW9N()
            } else if (!eD7w) {
                eD7w = requestAnimationFrame(bMR5W)
            }
            return this
        }
    }();
    location.parse = function() {
        var gf8X = /^https?:\/\/.*?\//i
          , js9j = /[?#]/;
        return function(W5b) {
            var o4s = {
                href: W5b
            };
            W5b = (W5b || "").replace(gf8X, "/").split(js9j);
            var cB5G = 1;
            if (W5b[0] == "/" && (W5b[1] || "").indexOf("/") == 0)
                cB5G = 2;
            o4s.path = W5b.splice(0, cB5G).join("?");
            o4s.query = k4o.hx8p(W5b.join("&"));
            return o4s
        }
    }();
    location.same = function(W5b) {
        return baq5v().href == W5b
    }
    ;
    G4K.fu7n.A4E({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
}
)();
(function() {
    var c4g = NEJ.P
      , a3x = c4g("nej.e")
      , h4l = c4g("nej.v")
      , fO8G = c4g("nm.ut");
    fO8G.sZ2x = function(dV7O) {
        var gB8t = {
            text: "",
            start: 0,
            end: 0
        };
        if (dV7O.setSelectionRange) {
            gB8t.start = dV7O.selectionStart;
            gB8t.end = dV7O.selectionEnd;
            gB8t.text = gB8t.start != gB8t.end ? dV7O.value.substring(gB8t.start, gB8t.end) : ""
        } else if (document.selection) {
            var i, bao5t = document.selection.createRange(), xS3x = document.body.createTextRange();
            xS3x.moveToElementText(dV7O);
            gB8t.text = bao5t.text;
            gB8t.bookmark = bao5t.getBookmark();
            for (i = 0; xS3x.compareEndPoints("StartToStart", bao5t) < 0 && bao5t.moveStart("character", -1) !== 0; i++) {
                if (dV7O.value.charAt(i) == "\n") {
                    i++
                }
            }
            gB8t.start = i;
            gB8t.end = gB8t.text.length + gB8t.start
        }
        return gB8t
    }
    ;
    fO8G.ban5s = function(dV7O, gB8t) {
        var xS3x;
        if (!gB8t) {
            gB8t = {
                text: "",
                start: 0,
                end: 0
            }
        }
        dV7O.focus();
        if (dV7O.setSelectionRange) {
            dV7O.setSelectionRange(gB8t.start, gB8t.end)
        } else if (dV7O.createTextRange) {
            xS3x = dV7O.createTextRange();
            if (dV7O.value.length === gB8t.start) {
                xS3x.collapse(false);
                xS3x.select()
            } else {
                xS3x.moveToBookmark(gB8t.bookmark);
                xS3x.select()
            }
        }
    }
    ;
    fO8G.Gq6k = function(dV7O, gB8t, cJ6D) {
        var gB8t = gB8t || {
            text: "",
            start: 0,
            end: 0
        };
        var boL9C, bNq6k, xS3x, Mx8p, bNs6m, bNt6n, DX5c;
        this.ban5s(dV7O, gB8t);
        if (dV7O.setSelectionRange) {
            boL9C = dV7O.value;
            bNq6k = boL9C.substring(0, gB8t.start) + cJ6D + boL9C.substring(gB8t.end);
            bNs6m = bNt6n = gB8t.start + cJ6D.length;
            DX5c = dV7O.scrollTop;
            dV7O.value = bNq6k;
            if (dV7O.scrollTop != DX5c) {
                dV7O.scrollTop = DX5c
            }
            dV7O.setSelectionRange(bNs6m, bNt6n)
        } else if (dV7O.createTextRange) {
            Mx8p = document.selection.createRange();
            Mx8p.text = cJ6D;
            Mx8p.setEndPoint("StartToEnd", Mx8p);
            Mx8p.select()
        }
        h4l.y4C(dV7O, "keyup")
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), dh6b = c4g("nej.p"), k4o = c4g("nej.u"), bX5c = c4g("nej.ut"), B4F = c4g("nm.w"), fO8G = c4g("nm.ut"), b4f;
    B4F.bNy6s = NEJ.C();
    b4f = B4F.bNy6s.O4S(bX5c.cy5D);
    b4f.cq5v = function(e4i) {
        this.cu5z(e4i)
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.fV8N = e4i.txt;
        this.DP5U = e4i.sgtsContainer;
        this.bNC6w = e4i.sgtsList[0];
        this.bak5p = e4i.sgtsItem;
        this.ol0x = e4i.rangeData;
        this.Gt6n = e4i.atIndex;
        a3x.x4B(this.bak5p[0], "selected-item");
        this.MJ8B()
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        h4l.mt0x(document.body, "keyup", this.bNZ6T.g4k(this));
        h4l.mt0x(document.body, "click", this.bOh6b.g4k(this))
    }
    ;
    b4f.MJ8B = function() {
        this.bS5X([[document.body, "keyup", this.bNZ6T.g4k(this)], [document.body, "click", this.bOh6b.g4k(this)], [this.fV8N, "keydown", this.bOm6g.g4k(this)], [this.fV8N, "keypress", this.bOm6g.g4k(this)], [this.bNC6w, "click", this.bOn6h.g4k(this)], [this.bNC6w, "mouseover", this.DG5L.g4k(this)]])
    }
    ;
    b4f.DG5L = function(d4h) {
        var da6U = h4l.U5Z(d4h);
        var q4u = a3x.I4M(this.DP5U, "selected-item");
        if (a3x.bz5E(da6U, "j-sgt")) {
            a3x.v4z(q4u[0], "selected-item");
            a3x.x4B(da6U, "selected-item")
        }
    }
    ;
    b4f.bNZ6T = function(d4h) {
        var q4u = a3x.I4M(this.DP5U, "selected-item");
        var bm5r = this.bak5p.length;
        var jj9a = d4h.keyCode || d4h.which;
        var r4v, j4n;
        switch (jj9a) {
        case 38:
            r4v = a3x.fU8M(q4u[0], "data-index") - 1 < 0 ? bm5r - 1 : a3x.fU8M(q4u[0], "data-index") - 1;
            a3x.v4z(q4u[0], "selected-item");
            a3x.x4B(this.bak5p[r4v], "selected-item");
            break;
        case 40:
            r4v = parseInt(a3x.fU8M(q4u[0], "data-index")) + 1 >= bm5r ? 0 : parseInt(a3x.fU8M(q4u[0], "data-index")) + 1;
            a3x.v4z(q4u[0], "selected-item");
            a3x.x4B(this.bak5p[r4v], "selected-item");
            break;
        case 13:
            this.bOn6h(d4h);
            break;
        case 27:
            this.op0x();
            break;
        case 32:
            var bl5q = this.fV8N.value;
            var r4v = fO8G.sZ2x(this.fV8N);
            if (bl5q.charAt(r4v.start - 1) !== " ")
                return;
            this.op0x();
            break
        }
    }
    ;
    b4f.bOm6g = function(d4h) {
        var jj9a = d4h.keyCode || d4h.which;
        if (jj9a === 13 || jj9a === 38 || jj9a === 40) {
            h4l.ci5n(d4h);
            d4h.keyCode = 0;
            d4h.which = 0;
            d4h.returnvalue = false
        }
    }
    ;
    b4f.bOh6b = function(d4h) {
        var da6U = d4h.target || d4h.srcElement;
        if (da6U === this.fV8N)
            return;
        this.op0x()
    }
    ;
    b4f.bOn6h = function(d4h) {
        h4l.bh5m(d4h);
        var q4u = a3x.I4M(this.DP5U, "selected-item")[0];
        var qj1x = d4h.target || d4h.srcElement;
        var t4x = d4h.type;
        if (a3x.bz5E(qj1x, "lst"))
            return;
        if (t4x == "click") {
            a3x.v4z(q4u, "selected-item");
            a3x.x4B(qj1x, "selected-item")
        } else
            qj1x = q4u;
        var j4n = qj1x.innerHTML + " ";
        this.op0x();
        var gB8t = this.ol0x;
        gB8t.start = this.Gt6n + 1;
        if (dh6b.dk6e.browser == "ie" && dh6b.dk6e.version < "9.0") {
            this.fV8N.value = this.fV8N.value.substring(0, gB8t.start) + this.fV8N.value.substring(gB8t.end, this.fV8N.value.length);
            gB8t.end = gB8t.start
        }
        fO8G.Gq6k(this.fV8N, gB8t, j4n);
        h4l.y4C(this.fV8N, "keyup")
    }
    ;
    b4f.op0x = function(d4h) {
        if (!!this.DP5U)
            a3x.Z5e(this.DP5U, "display", "none");
        this.S5X()
    }
    ;
    b4f.vr3x = function(d4h) {
        if (!!this.DP5U)
            a3x.Z5e(this.DP5U, "display", "block")
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), w4A = c4g("nej.j"), B4F = c4g("nm.w"), bX5c = c4g("nej.ut"), bD5I = c4g("nej.ui"), b4f;
    var cmi4m = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var cmg4k = a3x.ep7i("m-wgt-atlist");
    var ip8h = a3x.so2x(cmi4m);
    B4F.bOt6n = NEJ.C();
    b4f = B4F.bOt6n.O4S(bD5I.ef7Y);
    b4f.cq5v = function(e4i) {
        this.fq7j = {};
        this.cu5z()
    }
    ;
    b4f.bj5o = function(e4i) {
        this.fq7j.txt = a3x.z4D(e4i.target);
        this.fq7j.data = e4i.data;
        this.fq7j.offset = e4i.offset;
        this.fq7j.rangeData = e4i.rangeData;
        this.fq7j.atIndex = e4i.atIndex;
        this.clV4Z(e4i);
        this.bk5p(e4i);
        this.fq7j.sgtsContainer = this.m4q;
        this.fq7j.sgtsList = a3x.I4M(this.m4q, "lst");
        this.fq7j.sgtsItem = a3x.I4M(this.m4q, "f-thide");
        this.IT7M(e4i);
        this.clS3x = B4F.bNy6s.A4E(this.fq7j)
    }
    ;
    b4f.bA5F = function(e4i) {
        this.bF5K();
        this.clS3x.S5X()
    }
    ;
    b4f.bZ5e = function() {
        this.lh9Y = ip8h
    }
    ;
    b4f.bR5W = function() {
        this.cc5h()
    }
    ;
    b4f.clV4Z = function(e4i) {
        this.m4q = a3x.dj6d(a3x.il8d(a3x.bW5b(cmg4k, e4i.data)))
    }
    ;
    b4f.IT7M = function(e4i) {
        var bOA6u = a3x.I4M(this.m4q, "selected-item")[0];
        if (bOA6u)
            a3x.v4z(bOA6u, "selected-item");
        var cT6N = e4i.offset.x + "px";
        var gP8H = e4i.offset.y + "px";
        a3x.Z5e(this.m4q, "left", cT6N);
        a3x.Z5e(this.m4q, "top", gP8H)
    }
}
)();
(function() {
    var c4g = NEJ.P
      , w4A = c4g("nej.j")
      , fO8G = c4g("nm.ut");
    fO8G.bOC6w = function(bl5q) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var cS6M = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var Gu6o = bl5q.match(cS6M) || [];
        for (var ba5f = 0; ba5f < Gu6o.length; ba5f++) {
            Gu6o[ba5f] = Gu6o[ba5f].split("@")[1]
        }
        Gu6o = Gu6o.reverse();
        var hC8u = GUser.userId;
        var clQ3x = w4A.us2x("mentioners" + hC8u) || [];
        var jg9X = Gu6o.concat(clQ3x);
        if (jg9X.length > 10)
            jg9X = jg9X.slice(0, 10);
        w4A.vT3x("mentioners" + hC8u, jg9X)
    }
    ;
    fO8G.clP3x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var hC8u = GUser.userId;
        return w4A.us2x("mentioners" + hC8u) || []
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), dh6b = c4g("nej.p"), w4A = c4g("nej.j"), k4o = c4g("nej.u"), bX5c = c4g("nej.ut"), B4F = c4g("nm.w"), fO8G = c4g("nm.ut"), b4f;
    B4F.bPk6e = NEJ.C();
    b4f = B4F.bPk6e.O4S(bX5c.cy5D);
    b4f.cq5v = function(e4i) {
        this.cu5z(e4i);
        this.bPn6h()
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.fV8N = e4i.txt;
        this.m4q = e4i.body;
        this.bPo6i = e4i.before;
        this.MP8H = e4i.flag;
        this.clO3x = e4i.after;
        this.pz1x = [];
        if (dh6b.dk6e.browser != "ie") {
            setTimeout(function() {
                this.lf9W()
            }
            .g4k(this), 0)
        }
        this.MJ8B()
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        if (this.tl2x)
            this.tl2x.S5X();
        delete this.tl2x
    }
    ;
    b4f.MJ8B = function() {
        this.bS5X([[this.fV8N, "keyup", this.bPF6z.g4k(this, this.fV8N)], [this.fV8N, "click", this.bPF6z.g4k(this, this.fV8N)], [this.fV8N, "focus", this.lf9W.g4k(this)]])
    }
    ;
    b4f.lf9W = function(d4h) {
        this.ol0x = fO8G.sZ2x(this.fV8N)
    }
    ;
    b4f.bPn6h = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cY6S = window.GUser.userId;
        var W5b = "/api/user/getfollows/" + cY6S;
        var fJ8B = w4A.bp5u(W5b, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function(j4n) {
                window.GFollowers = JSON.parse(j4n).follow
            }
            .g4k(this),
            onerror: function(j4n) {},
            onbeforerequest: function(j4n) {}
        })
    }
    ;
    b4f.bPG6A = function(index) {
        var C4G = this.fV8N.value, bf5k, bog9X, bof9W, Nh8Z;
        this.bPo6i.innerHTML = k4o.dI7B(C4G.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var or0x = a3x.I4M(this.bPo6i, "j-test");
        for (var ba5f = 0; ba5f < or0x.length; ba5f++) {
            or0x[ba5f].innerText = " "
        }
        this.MP8H.innerHTML = C4G.charAt(index);
        this.clO3x.innerHTML = k4o.dI7B(C4G.substr(index + 1, C4G.length));
        Nh8Z = parseInt(a3x.dc6W(this.fV8N, "lineHeight"));
        a3x.Z5e(this.m4q, "display", "block");
        bog9X = a3x.hM8E(this.MP8H, this.m4q);
        bof9W = a3x.hM8E(this.fV8N);
        a3x.Z5e(this.m4q, "display", "none");
        var cT6N = bog9X.x + bof9W.x;
        var gP8H = bog9X.y + bof9W.y + Nh8Z;
        bf5k = {
            x: cT6N,
            y: gP8H
        };
        this.clL3x(bf5k)
    }
    ;
    b4f.bPF6z = function(dV7O, d4h) {
        h4l.ci5n(d4h);
        var dV7O = dV7O;
        var C4G = dV7O.value;
        var bm5r = C4G.length;
        var r4v = fO8G.sZ2x(dV7O).start;
        var bPL6F = 0;
        var jj9a = d4h.keyCode || d4h.which;
        var jg9X;
        this.ol0x = fO8G.sZ2x(dV7O);
        var bPR6L = false;
        for (var i = 1; i < 20; i++) {
            jg9X = r4v - i;
            if (C4G.charAt(jg9X) === " ")
                break;
            if (C4G.charAt(jg9X) === "@") {
                bPR6L = true;
                this.Gt6n = bPL6F = jg9X;
                break
            }
        }
        if (bPR6L && d4h.shiftKey === false && jj9a !== 38 && jj9a !== 40) {
            if (jj9a !== 27 && jj9a !== 13) {
                this.tl2x ? this.tl2x.S5X() : null;
                this.bPG6A(bPL6F)
            }
        } else if (jj9a !== 38 && jj9a !== 40 && d4h.keyCode !== 32) {
            this.tl2x ? this.tl2x.S5X() : null
        }
    }
    ;
    b4f.clL3x = function(bf5k) {
        var bf5k = bf5k;
        var j4n = this.tm2x();
        var e4i = {
            parent: document.body,
            offset: bf5k,
            data: j4n,
            target: this.fV8N,
            rangeData: this.ol0x,
            atIndex: this.Gt6n
        };
        this.tl2x ? this.tl2x.S5X() : null;
        this.tl2x = B4F.bOt6n.A4E(e4i)
    }
    ;
    b4f.tm2x = function() {
        var clK3x = fO8G.sZ2x(this.fV8N).start;
        var clF3x = this.Gt6n + 1;
        var bPV6P = fO8G.clP3x() || [];
        var bPX6R = [];
        var bw5B = this.fV8N.value.substring(clF3x, clK3x).toLowerCase();
        bw5B = bw5B.replace(/\[/g, "\\[");
        bw5B = bw5B.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.pz1x = window.GFollowers[0] ? window.GFollowers : []
        } else
            this.pz1x = [];
        if (!this.pz1x[0])
            this.bPn6h();
        for (var ba5f = 0; ba5f < bPV6P.length; ba5f++) {
            for (var w4A = 0; w4A < this.pz1x.length; w4A++) {
                if (this.pz1x[w4A].nickname == bPV6P[ba5f])
                    bPX6R.push(this.pz1x[w4A])
            }
        }
        this.pz1x = k4o.cal0x(this.pz1x, bPX6R, {
            union: true,
            begin: true
        });
        var clE3x = this.pz1x.length;
        var ZP5U = [];
        var KC7v, KH7A;
        if (!this.pz1x[0])
            return {
                suggests: ZP5U
            };
        for (var i = 0; i < clE3x; i++) {
            KC7v = this.pz1x[i].nickname.toLowerCase().search(bw5B);
            KH7A = this.pz1x[i].py ? this.pz1x[i].py.toLowerCase().search(bw5B) : -1;
            if (KC7v !== -1 || KH7A != -1)
                ZP5U.push(this.pz1x[i]);
            if (ZP5U.length === 10)
                break
        }
        return {
            suggests: ZP5U
        }
    }
    ;
    b4f.Ny9p = function() {
        var gB8t = this.ol0x || {
            text: "",
            start: 0,
            end: 0
        };
        h4l.y4C(this.fV8N, "focus");
        fO8G.Gq6k(this.fV8N, gB8t, "@");
        this.ol0x = fO8G.sZ2x(this.fV8N);
        this.Gt6n = gB8t.start;
        this.bPG6A(this.Gt6n)
    }
    ;
    b4f.El5q = function() {
        if (this.tl2x)
            this.tl2x.S5X()
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), w4A = c4g("nej.j"), B4F = c4g("nm.w"), bX5c = c4g("nej.ut"), bD5I = c4g("nej.ui"), b4f;
    var clD3x = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var clC3x = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gn8f = a3x.il8d(clC3x);
    var ip8h = a3x.so2x(clD3x);
    B4F.NG9x = NEJ.C();
    b4f = B4F.NG9x.O4S(bD5I.ef7Y);
    b4f.cq5v = function(e4i) {
        this.fq7j = {};
        this.cu5z()
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i);
        this.fq7j.txt = a3x.z4D(e4i.target);
        this.OA0x();
        this.NH9y = B4F.bPk6e.A4E(this.fq7j)
    }
    ;
    b4f.bA5F = function(e4i) {
        this.bF5K();
        this.NH9y.S5X()
    }
    ;
    b4f.bZ5e = function() {
        this.cb5g = gn8f;
        this.lh9Y = ip8h
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        var i4m = a3x.cU6O(a3x.z4D(this.m4q));
        this.fq7j.body = this.m4q;
        this.fq7j.before = i4m[0];
        this.fq7j.flag = i4m[1];
        this.fq7j.after = i4m[2]
    }
    ;
    b4f.OA0x = function() {
        var oD0x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < oD0x.length; i++) {
            if (oD0x[i] === "width" && a3x.dc6W(this.fq7j.txt, oD0x[i]) == "100%") {
                var clz3x = this.fq7j.txt.offsetWidth;
                if (!clz3x) {
                    setTimeout(function() {
                        a3x.Z5e(this.m4q, oD0x[i], this.fq7j.txt.offsetWidth + "px")
                    }
                    .g4k(this), 300)
                } else {
                    a3x.Z5e(this.m4q, oD0x[i], this.fq7j.txt.offsetWidth + "px")
                }
                continue
            }
            a3x.Z5e(this.m4q, oD0x[i], a3x.dc6W(this.fq7j.txt, oD0x[i]))
        }
    }
    ;
    b4f.Ny9p = function() {
        this.NH9y.Ny9p()
    }
    ;
    b4f.El5q = function() {
        this.NH9y.El5q()
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, fh7a = NEJ.R, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), ka9R = c4g("nm.c"), Q5V = {}, b4f;
    if (!!ka9R.bnH9y)
        return;
    ka9R.bnH9y = NEJ.C();
    b4f = ka9R.bnH9y.O4S(G4K.cy5D);
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K()
    }
    ;
    b4f.Dq5v = function(eP7I, dw6q, ZN5S) {
        if (Q5V[eP7I]) {
            this.hR8J("register commonJST[" + eP7I + "] duplicate");
            return
        }
        if (!k4o.gb8T(dw6q)) {
            dw6q = ctl.comJST.clx3x(eP7I, dw6q, ZN5S)
        }
        Q5V[eP7I] = dw6q
    }
    ;
    b4f.clu3x = function(ZI5N) {
        if (k4o.eu7n(ZI5N)) {
            k4o.bb5g(ZI5N, function(q4u) {
                ctl.comJST.Dq5v.apply(this, q4u)
            }, this)
        } else if (k4o.kW9N(ZI5N)) {
            k4o.eq7j(ZI5N, function(ez7s, J4N) {
                ctl.comJST.Dq5v(J4N, ez7s)
            })
        }
    }
    ;
    b4f.clx3x = function(eP7I, tn2x, ZN5S) {
        tn2x = tn2x || {};
        NEJ.X(tn2x, {
            comJST: this.na0x
        });
        if (tn2x.resetDataName && !k4o.eu7n(tn2x.resetDataName)) {
            tn2x.resetDataName = [tn2x.resetDataName]
        }
        return function() {
            var j4n = arguments[0]
              , jh9Y = arguments[1];
            if (tn2x.resetDataName) {
                var jg9X = {};
                for (var i = 0, ii = tn2x.resetDataName.length; i < ii; i++) {
                    jg9X[tn2x.resetDataName[i]] = arguments[i]
                }
                j4n = jg9X;
                jh9Y = arguments[ii]
            }
            NEJ.X(j4n, tn2x, dG7z);
            if (ZN5S) {
                jh9Y = jh9Y || {};
                NEJ.X(jh9Y, ZN5S)
            }
            return a3x.bW5b(eP7I, j4n, jh9Y)
        }
    }
    ;
    b4f.na0x = function(eP7I) {
        if (!Q5V[eP7I]) {
            this.hR8J("commonJST[" + eP7I + "] is unregister");
            return ""
        } else {
            return Q5V[eP7I].apply(null, fh7a.slice.call(arguments, 1))
        }
    }
    ;
    b4f.dump = function() {
        return Q5V
    }
    ;
    b4f.hR8J = function(clt3x) {
        if (console && console.log) {
            console.log(clt3x)
        }
    }
    ;
    var dG7z = function(ez7s, J4N) {
        return J4N == "resetDataName"
    };
    c4g("ctl").comJST = ka9R.bnH9y.fX8P();
    a3x.cmT4X({
        comJST: c4g("ctl").comJST.na0x
    })
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, bo5t = NEJ.F, fh7a = NEJ.R, a3x = c4g("nej.e"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), ka9R = c4g("nm.c"), l4p = c4g("nm.x"), Q5V = {}, b4f;
    if (!!ka9R.bnx9o)
        return;
    ka9R.bnx9o = NEJ.C();
    b4f = ka9R.bnx9o.O4S(G4K.cy5D);
    b4f.cq5v = function() {
        this.cu5z();
        var e4i = {
            "com-mv-artists": function(ft7m, dL7E, Fl6f, bnl9c) {
                return a3x.bW5b("com-mv-artists", {
                    artists: ft7m,
                    clazz: dL7E,
                    boxClazz: bnl9c,
                    mark: Fl6f || function(cz5E) {
                        return cz5E
                    }
                    ,
                    escape: k4o.dI7B,
                    comJST: ctl.comJST.na0x
                })
            },
            "com-album-artists": function(ft7m, dL7E, Fl6f, bnl9c) {
                return a3x.bW5b("com-album-artists", {
                    artists: ft7m,
                    clazz: dL7E,
                    boxClazz: bnl9c,
                    mark: Fl6f || function(cz5E) {
                        return cz5E
                    }
                    ,
                    escape: k4o.dI7B,
                    comJST: ctl.comJST.na0x
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: k4o.dI7B
            },
            "com-user-type": function(df6Z, dL7E, kC9t, KW7P, btL0x) {
                return a3x.bW5b("com-user-type", {
                    x: df6Z,
                    clazz: dL7E || "",
                    clazz2: typeof btL0x == "undefined" ? "icn" : btL0x,
                    before: kC9t || "",
                    after: KW7P || "",
                    isEmptyObject: l4p.bGw4A
                })
            }
        };
        for (var D4H in e4i) {
            ctl.comJST.Dq5v(D4H, e4i[D4H])
        }
    }
    ;
    b4f.bj5o = function(e4i) {
        this.bk5p(e4i)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K()
    }
    ;
    c4g("ctl").comJSTUtil = ka9R.bnx9o.fX8P()
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, a3x = c4g("nej.e"), dh6b = c4g("nej.p"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), w4A = c4g("nej.j"), B4F = c4g("nm.w"), fO8G = c4g("nm.ut"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), n4r = c4g("nm.l"), bnh9Y = [2, 3], dK7D = ["sn", "db"], b4f, K4O, cls3x = {
        13: "playlist",
        17: "djprogram",
        18: "song",
        19: "album",
        20: "artist",
        21: "mv",
        24: "topic",
        25: "activity",
        70: "djradio",
        38: "concert",
        39: "video"
    }, ZB5G = {
        djprogram: "节目",
        album: "专辑",
        playlist: "歌单",
        song: "单曲",
        yunsong: "单曲",
        artist: "歌手",
        mv: "MV",
        topic: "音乐专栏",
        djradio: "电台",
        concert: "演出",
        video: "视频"
    }, btS0x = {
        djprogram: " - ",
        album: " - ",
        playlist: " by ",
        song: " - ",
        yunsong: " - ",
        artist: "",
        mv: " - ",
        djradio: " by "
    }, clp3x = {
        0: 13,
        1: 17,
        3: 19,
        4: 18,
        5: 21,
        6: 24,
        14: 70,
        17: 20
    }, Dg5l = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    };
    n4r.xz3x = NEJ.C();
    b4f = n4r.xz3x.O4S(n4r.dZ7S);
    K4O = n4r.xz3x.cj5o;
    b4f.bj5o = function(e4i) {
        if (e4i.onclose === undefined) {
            e4i.onclose = this.btY0x.g4k(this)
        }
        this.bk5p(e4i);
        this.zv4z = e4i.isPub;
        this.jk9b = e4i.rid || -1;
        this.en7g = e4i.type || -1;
        this.bmX9O = e4i.purl;
        this.OL0x = e4i.name || "";
        this.OM0x = e4i.author || "";
        this.bmP9G = e4i.authors || "";
        this.Zu5z = e4i.actId;
        this.Zt5y = e4i.actName;
        this.buu1x = e4i.title;
        this.Zp5u = {};
        this.clo3x = e4i.mesg || "";
        this.cln3x = e4i.placeholder || "说点什么吧";
        this.bmw9n = e4i.hideTip;
        this.clm3x = e4i.videoJumpUrl;
        var i4m, fT8L = +(new Date);
        try {
            i4m = top.localCache.z4D("user") || {}
        } catch (e) {
            i4m = {}
        }
        for (var i = 0, i4m = i4m.bindings || [], ex7q; i < i4m.length; ++i) {
            ex7q = !i4m[i].tokenJsonStr ? null : JSON.parse(i4m[i].tokenJsonStr);
            if (!ex7q || ex7q.expires_in === undefined)
                continue;
            var Zm5r = parseInt(ex7q.expires_in)
              , Zl5q = parseInt(i4m[i].refreshTime)
              , cll3x = (Zm5r + Zl5q) * 1e3 - 5 * 60 * 1e3;
            if (cll3x > fT8L)
                this.Zp5u[i4m[i].type] = !0
        }
        this.vc2x = B4F.EN6H.A4E({
            parent: this.Zj5o,
            err: this.buM1x
        });
        if (this.gM8E) {
            this.gM8E.S5X()
        }
        this.gM8E = B4F.NG9x.A4E({
            parent: document.body,
            target: this.dY7R
        });
        if (this.en7g == 24 || this.en7g == 21 || this.CU5Z()) {
            this.xt3x.style.display = "none"
        } else {
            this.xt3x.style.display = "";
            this.oi0x = B4F.bpr9i.A4E({
                parent: this.bmd8V,
                button: this.xt3x,
                onstartupload: this.buW1x.g4k(this, true),
                onfinishupload: this.buW1x.g4k(this, false)
            })
        }
        if (this.CU5Z()) {
            this.pg1x.innerText = "";
            a3x.x4B(this.pg1x, "info-video");
            a3x.x4B(this.bmb8T, "f-hide")
        } else {
            a3x.v4z(this.bmb8T, "f-hide")
        }
    }
    ;
    b4f.bA5F = function() {
        this.bF5K();
        if (this.vc2x) {
            this.vc2x.S5X();
            delete this.vc2x
        }
        if (this.gM8E) {
            this.gM8E.S5X();
            delete this.gM8E
        }
        if (this.oi0x) {
            this.oi0x.S5X();
            delete this.oi0x
        }
        if (this.lY0x) {
            this.lY0x.S5X();
            delete this.lY0x
        }
    }
    ;
    b4f.bZ5e = function() {
        this.cb5g = "m-wgt-sharewin"
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        this.bva1x = a3x.cU6O(this.m4q)[0];
        var bq5v = a3x.I4M(this.m4q, "j-flag");
        this.pF1x = bq5v.shift();
        this.buM1x = bq5v.shift();
        this.Zj5o = bq5v.shift();
        this.dY7R = bq5v.shift();
        this.pg1x = bq5v.shift();
        this.blP8H = bq5v.shift();
        this.clk3x = bq5v.shift();
        this.xt3x = bq5v.shift();
        this.ck5p = bq5v.shift();
        this.bmd8V = bq5v.shift();
        this.zc4g = bq5v.shift();
        this.cyZ7S = bq5v.shift();
        this.bmb8T = bq5v.shift();
        this.dR7K = bq5v.shift();
        this.YZ5e = a3x.I4M(this.bmb8T, "j-t");
        this.AV4Z = G4K.EX6R.A4E({
            list: a3x.cU6O(this.pF1x),
            selected: "z-slt",
            onchange: this.blB8t.g4k(this)
        });
        if (dh6b.dk6e.browser == "ie" && dh6b.dk6e.version < "8.0") {
            a3x.Z5e(this.Zj5o, "position", "relative");
            a3x.Z5e(this.Zj5o, "zIndex", "10")
        }
        h4l.s4w(window, "snsbind", this.Qp0x.g4k(this));
        h4l.s4w(this.dY7R, "input", this.fr7k.g4k(this));
        h4l.s4w(this.dY7R, "keyup", this.uv2x.g4k(this));
        h4l.s4w(this.m4q, "click", this.cA5F.g4k(this));
        this.R5W = p4t.ble8W.A4E();
        this.R5W.s4w("onshareall", this.YX5c.g4k(this, 0));
        this.R5W.s4w("onshareerror", this.ie8W.g4k(this));
        this.R5W.s4w("onshareprivate", this.YX5c.g4k(this, 1));
        this.YW5b = p4t.zb4f.A4E();
        this.hR8J = p4t.hY8Q.A4E();
        try {
            this.Qy0x = top.api.sharePermission
        } catch (e) {}
        if (!this.Qy0x) {
            this.Qy0x = Dg5l;
            w4A.bp5u("/api/event/user/permission", {
                type: "json",
                onload: function(d4h) {
                    if (d4h.code == 200) {
                        this.Qy0x = NEJ.EX(Dg5l, d4h)
                    }
                }
                .g4k(this)
            })
        }
    }
    ;
    b4f.blB8t = function(d4h) {
        d4h.index == 0 ? a3x.v4z(this.bva1x, "m-plshare") : a3x.x4B(this.bva1x, "m-plshare");
        this.Zj5o.style.display = d4h.index == 0 ? "none" : "";
        this.clk3x.style.display = d4h.index == 0 ? "" : "none";
        this.xt3x.style.display = d4h.index == 0 ? "" : "none";
        if (this.en7g == 24 || this.en7g == 21) {
            this.xt3x.style.display = "none"
        }
        this.buM1x.style.display = "none";
        this.dY7R.value = "";
        this.bV5a();
        this.CA5F();
        if (d4h.index == 0) {
            var cR6L = a3x.dc6W(this.dY7R, "width");
            if (cR6L == "auto" || !cR6L) {
                return
            } else {
                if (this.gM8E) {
                    this.gM8E.S5X()
                }
                this.gM8E = B4F.NG9x.A4E({
                    parent: document.body,
                    target: this.dY7R
                })
            }
            this.bmd8V.style.display = ""
        } else {
            if (this.gM8E) {
                this.gM8E.S5X();
                delete this.gM8E
            }
            this.bmd8V.style.display = "none"
        }
    }
    ;
    b4f.cA5F = function(d4h) {
        var f4j = h4l.U5Z(d4h, "d:action");
        if (!f4j)
            return;
        if (a3x.u4y(f4j, "action") == "search") {
            h4l.ci5n(d4h)
        } else if (a3x.u4y(f4j, "default") === undefined) {
            h4l.ci5n(d4h)
        }
        switch (a3x.u4y(f4j, "action")) {
        case "txt":
            this.lf9W();
            break;
        case "search":
            if (this.CU5Z()) {
                top.location.href = this.clm3x
            } else if (this.zv4z && this.en7g != 24) {
                if (this.lY0x) {
                    this.lY0x.S5X()
                }
                this.lY0x = B4F.bta0x.A4E({
                    parent: this.m4q.parentNode,
                    onfinish: this.blj8b.g4k(this),
                    oncancel: this.clg3x.g4k(this)
                });
                this.blf8X = true;
                this.m4q.style.display = "none";
                this.Cy5D(this.jk9b < 0 ? "添加音乐" : "更换音乐")
            }
            break;
        case "at":
            h4l.rX1x(d4h);
            !!this.gF8x && this.gF8x.br5w();
            this.gM8E.Ny9p();
            this.fF8x();
            break;
        case "emot":
            h4l.rX1x(d4h);
            !!this.gM8E && this.gM8E.El5q();
            if (!this.gF8x) {
                this.gF8x = n4r.Gf6Z.A4E({
                    parent: this.blP8H
                });
                this.gF8x.s4w("onselect", this.xX3x.g4k(this))
            }
            this.gF8x.M4Q();
            break;
        case "upload":
            break;
        case "sns":
            h4l.bh5m(d4h);
            var blc8U, bw5B, t4x = a3x.u4y(f4j, "type");
            if (!this.Zp5u[t4x]) {
                blc8U = f4j.href.split("?");
                bw5B = k4o.hx8p(blc8U[1]);
                bw5B["csrf_token"] = w4A.gQ8I("__csrf");
                top.open(blc8U[0] + "?" + k4o.db6V(bw5B));
                return
            }
            var bu5z = {
                2: "sn",
                3: "db",
                4: "rr"
            };
            l4p.yH4L(f4j, "u-slg-" + bu5z[t4x] + "-gray");
            break;
        case "close":
            !!this.gF8x && this.gF8x.br5w();
            this.btY0x();
            break;
        case "share":
            h4l.bh5m(d4h);
            if (this.CU5Z()) {
                if (!a3x.bz5E(f4j, "u-btn2-2-dis")) {
                    this.clf3x()
                }
            } else if (a3x.bz5E(f4j, "u-btn2-2-dis")) {
                if (!this.Qy0x.pubEventWithoutResource && this.jk9b < 0) {
                    this.cld3x()
                } else {}
            } else if (this.jk9b < 0 && !this.dY7R.value && this.oi0x && this.oi0x.PJ0x().length == 0) {
                n4r.X5c.M4Q({
                    type: 2,
                    tip: "请输入内容"
                })
            } else {
                this.clc3x()
            }
            break
        }
    }
    ;
    b4f.cld3x = function() {
        var sf2x = 0, bkX8P = function() {
            if (sf2x % 2) {
                a3x.v4z(this.pg1x, "z-show")
            } else {
                a3x.x4B(this.pg1x, "z-show")
            }
            sf2x++;
            if (sf2x > 5) {
                clearInterval(eD7w)
            }
        }, eD7w;
        return function() {
            sf2x = 0;
            clearInterval(eD7w);
            eD7w = setInterval(bkX8P.g4k(this), 200)
        }
    }();
    b4f.Qp0x = function(o4s) {
        o4s = o4s.result;
        this.Zp5u[o4s.type] = !0;
        var r4v = k4o.cV6P(bnh9Y, o4s.type)
          , ce5j = "u-slg-" + dK7D[r4v] + "-gray";
        a3x.v4z(this.YZ5e[r4v], ce5j)
    }
    ;
    b4f.blj8b = function(bv5A) {
        var j4n = bv5A.data;
        this.jk9b = bv5A.id;
        this.en7g = bv5A.type;
        this.m4q.style.display = "";
        this.Cy5D(this.buu1x);
        this.lY0x && this.lY0x.S5X();
        this.blf8X = false;
        this.bmX9O = j4n.picUrl;
        this.OL0x = j4n.title || "";
        this.OM0x = j4n.author || "";
        this.bmP9G = j4n.authors || "";
        this.cla3x();
        this.YK3x()
    }
    ;
    b4f.clg3x = function() {
        this.lY0x && this.lY0x.S5X();
        this.m4q.style.display = "";
        this.Cy5D(this.buu1x);
        this.blf8X = false;
        this.YK3x()
    }
    ;
    b4f.xX3x = function(d4h) {
        var bl5q = "[" + d4h.text + "]";
        fO8G.Gq6k(this.dY7R, this.ol0x, bl5q);
        this.fF8x()
    }
    ;
    b4f.fr7k = function(d4h) {
        dh6b.dk6e.browser == "ie" && dh6b.dk6e.version < "7.0" ? setTimeout(this.fF8x.g4k(this), 0) : this.fF8x()
    }
    ;
    b4f.uv2x = function(d4h) {
        this.lf9W();
        if (d4h.keyCode == 8)
            this.fF8x()
    }
    ;
    b4f.fF8x = function() {
        this.lf9W();
        this.CA5F()
    }
    ;
    b4f.CA5F = function() {
        var bm5r = Math.ceil(k4o.fc7V(this.dY7R.value.trim()) / 2);
        this.ck5p.innerText = 140 - bm5r;
        bm5r > 140 ? a3x.eT7M(this.ck5p, "s-fc4", "s-fc6") : a3x.eT7M(this.ck5p, "s-fc6", "s-fc4")
    }
    ;
    b4f.clc3x = function() {
        if (this.cw5B())
            return;
        if (k4o.fc7V(this.dY7R.value.trim()) > 280) {
            this.bV5a("字数超过140个字符");
            return
        }
        var t4x = this.AV4Z.sl2x(), j4n;
        if (t4x == 0) {
            for (var i = 0, Hd6X = []; i < this.YZ5e.length; ++i) {
                if (!a3x.bz5E(this.YZ5e[i], "u-slg-" + dK7D[i] + "-gray"))
                    Hd6X.push(bnh9Y[i])
            }
            this.cw5B(!0);
            j4n = {
                id: this.jk9b,
                msg: this.dY7R.value.trim(),
                type: this.YJ3x(this.en7g),
                picUrl: this.bmX9O,
                snsTypes: Hd6X.join(","),
                isPub: this.zv4z
            };
            if (this.Zu5z > 0) {
                j4n.actId = this.Zu5z;
                if (this.Zt5y) {
                    j4n.msg = "#" + this.Zt5y + "#" + j4n.msg
                }
            }
            var np0x = this.oi0x && this.oi0x.PJ0x();
            if (np0x && np0x.length) {
                j4n.pics = np0x
            }
            this.R5W.coH4L(j4n)
        } else {
            var rF1x = this.vc2x.RM1x();
            if (rF1x.length <= 0) {
                this.bV5a("请至少选择一位好友");
                return
            }
            this.R5W.coG4K({
                data: {
                    id: this.jk9b,
                    msg: this.dY7R.value.trim(),
                    type: this.YJ3x(this.en7g),
                    userIds: "[" + rF1x.join(",") + "]"
                }
            })
        }
    }
    ;
    b4f.clf3x = function() {
        if (this.cw5B()) {
            return
        }
        this.hR8J.gm8e("click", {
            target: "share",
            targetid: "button",
            page: "sharevideo"
        });
        if (k4o.fc7V(this.dY7R.value.trim()) > 280) {
            this.bV5a("字数超过140个字符");
            return
        }
        this.cw5B(!0);
        var j4n = {
            msg: this.dY7R.value.trim() || "",
            type: "video"
        }
          , ckZ3x = {
            videoId: this.jk9b
        };
        if (this.Zu5z > 0) {
            j4n.actId = this.Zu5z;
            if (this.Zt5y) {
                j4n.msg = "#" + this.Zt5y + "#" + j4n.msg
            }
        }
        j4n.videoinfo = JSON.stringify(ckZ3x);
        this.R5W.coF4J({
            data: {
                videoId: this.jk9b,
                commit: true
            },
            data2: j4n,
            snsTypes: ""
        })
    }
    ;
    b4f.YX5c = function(t4x, o4s) {
        this.cw5B(!1);
        this.br5w();
        if (!this.bmw9n) {
            if (this.CU5Z()) {
                n4r.X5c.M4Q({
                    tip: "视频将在转码完成后自动发出",
                    autoclose: true
                })
            } else {
                n4r.X5c.M4Q({
                    tip: "分享成功" + (o4s.point > 0 ? ' 获得<em class="s-fc6">' + o4s.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h4l.y4C(n4r.xz3x, "sharesuccess", {
            isPrivate: t4x,
            rid: this.jk9b,
            rtype: this.en7g,
            data: o4s.event
        });
        this.y4C("onshare")
    }
    ;
    b4f.ie8W = function(o4s) {
        this.cw5B(!1);
        var bC5H = "分享失败";
        if (o4s.code) {
            switch (o4s.code) {
            case 404:
                bC5H = "分享的资源不存在";
                break;
            case 407:
                bC5H = "输入内容包含有关键字";
                break;
            case 408:
                bC5H = "分享太快了，过会再分享吧";
                break;
            case 315:
                bC5H = o4s.message || "根据对方设置，你没有该操作权限";
                break;
            case 329:
                return l4p.eW7P({
                    clazz: "m-layer-w2",
                    btntxt: "知道了",
                    message: "当前账号存在较多未完成发布的视频<br>请稍后再试"
                })
            }
        }
        this.bV5a(bC5H)
    }
    ;
    b4f.lf9W = function() {
        this.ol0x = fO8G.sZ2x(this.dY7R)
    }
    ;
    b4f.bV5a = function(bC5H) {
        this.dA6u(this.dR7K, bC5H)
    }
    ;
    b4f.cw5B = function(cK6E) {
        return this.dF7y(this.zc4g, cK6E, "分享", "分享中...")
    }
    ;
    b4f.YJ3x = function(jt9k) {
        return cls3x[jt9k] || ""
    }
    ;
    b4f.ckY3x = function() {
        var dV7O, sH2x = this.YJ3x(this.en7g);
        this.pg1x.style.display = "";
        if (this.jk9b < 0) {
            this.pg1x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.OL0x) {
                this.pg1x.style.display = "none";
                return
            }
            var YD3x = this.zv4z && this.en7g != 24;
            dV7O = (ZB5G[sH2x] ? ZB5G[sH2x] + "：" : "") + this.OL0x + (btS0x[sH2x] || " ") + (sH2x == "mv" || sH2x == "album" ? this.bmP9G || this.OM0x : this.OM0x);
            a3x.dJ7C(this.pg1x, "m-xwgt-share-infobar", {
                canChange: YD3x,
                info: dV7O
            });
            if (YD3x) {
                a3x.v4z(this.pg1x, "z-dis")
            } else {
                a3x.x4B(this.pg1x, "z-dis")
            }
        }
        a3x.v4z(this.pg1x, "info-video")
    }
    ;
    b4f.cla3x = function() {
        var sH2x = this.YJ3x(this.en7g)
          , dV7O = (ZB5G[sH2x] ? ZB5G[sH2x] + "：" : "") + this.OL0x + (btS0x[sH2x] || " ") + (sH2x == "mv" || sH2x == "album" ? this.bmP9G || this.OM0x : this.OM0x);
        YD3x = this.zv4z && this.en7g != 24;
        if (this.CU5Z()) {} else {
            a3x.v4z(this.pg1x, "info-video");
            a3x.dJ7C(this.pg1x, "m-xwgt-share-infobar", {
                canChange: YD3x,
                isPub: this.zv4z,
                info: dV7O
            })
        }
    }
    ;
    b4f.ckP3x = function() {
        var Hf6Z = this.dY7R.value;
        if (this.zv4z) {
            if (!!this.blf8X) {
                return !!Hf6Z && !!Hf6Z.length || !!this.oi0x && this.oi0x.PJ0x().length > 0
            } else {
                return !(this.jk9b < 0) || !!Hf6Z && !!Hf6Z.length || !!this.oi0x && this.oi0x.PJ0x().length > 0
            }
        } else {
            return !!Hf6Z && !!Hf6Z.length || !!this.oi0x && this.oi0x.PJ0x().length > 0
        }
    }
    ;
    b4f.YK3x = function() {
        var bws1x = false;
        if (!this.zv4z || this.Qy0x.pubEventWithoutResource || !(this.jk9b < 0)) {
            bws1x = true
        }
        if (bws1x) {
            a3x.v4z(this.zc4g, "u-btn2-2-dis")
        } else {
            a3x.x4B(this.zc4g, "u-btn2-2-dis")
        }
    }
    ;
    b4f.buW1x = function(bkz8r) {
        if (bkz8r) {
            a3x.x4B(this.zc4g, "u-btn2-2-dis")
        } else {
            this.YK3x()
        }
    }
    ;
    b4f.btY0x = function(d4h) {
        if (d4h) {
            d4h.stopped = true
        }
        if (this.ckP3x()) {
            l4p.gC8u({
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(V5a) {
                    if (V5a == "ok") {
                        this.y4C("forceclose", {});
                        this.br5w()
                    }
                }
                .g4k(this)
            })
        } else {
            this.y4C("forceclose", {});
            this.br5w()
        }
    }
    ;
    b4f.Cy5D = function(eM7F, dD7w) {
        this.nK0x.Ag4k(eM7F, dD7w)
    }
    ;
    b4f.YB3x = function(t4x) {
        this.hR8J.gm8e("page", {
            type: t4x
        })
    }
    ;
    b4f.CU5Z = function() {
        return this.en7g == 39
    }
    ;
    b4f.M4Q = function() {
        var ckN3x = function(q4u, r4v) {
            var ce5j = "u-slg-" + dK7D[r4v] + "-gray";
            !this.Zp5u[bnh9Y[r4v]] ? a3x.x4B(q4u, ce5j) : a3x.v4z(q4u, ce5j)
        };
        return function() {
            K4O.M4Q.call(this);
            this.m4q.style.display = "";
            this.bV5a();
            this.cw5B(!1);
            this.AV4Z.Mf8X(0);
            this.dY7R.focus();
            this.dY7R.value = this.clo3x || "";
            this.dY7R.placeholder = this.cln3x || "";
            if (!this.CU5Z()) {
                this.ckY3x()
            } else {
                a3x.x4B(this.pg1x, "info-video");
                a3x.dJ7C(this.pg1x, "m-xwgt-share-videobar", {
                    title: this.OL0x,
                    picUrl: this.bmX9O
                })
            }
            this.fF8x();
            this.vc2x.cmt4x();
            k4o.bb5g(this.YZ5e, ckN3x, this);
            this.lf9W();
            if (this.zv4z) {
                this.pF1x.style.display = "none"
            } else {
                this.pF1x.style.display = ""
            }
            this.YK3x()
        }
    }();
    b4f.br5w = function(d4h) {
        K4O.br5w.call(this);
        !!this.gF8x && this.gF8x.br5w();
        if (this.vc2x) {
            this.vc2x.S5X();
            delete this.vc2x
        }
        if (this.gM8E) {
            this.gM8E.S5X();
            delete this.gM8E
        }
        if (this.oi0x) {
            this.oi0x.S5X();
            delete this.oi0x
        }
        if (this.bwB1x) {
            this.bwB1x = this.bwB1x.S5X()
        }
        if (this.lY0x) {
            this.lY0x.S5X();
            delete this.lY0x
        }
    }
    ;
    l4p.mM0x = function(e4i) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e4i.title === undefined) {
            e4i.title = "分享"
        }
        if (e4i.actId && e4i.type != 39) {
            var t4x = clp3x[e4i.resourceType], cm5r = e4i.resourceJson, hu8m;
            if (k4o.fx7q(cm5r)) {
                try {
                    cm5r = JSON.parse(cm5r)
                } catch (e) {}
            }
            if (t4x) {
                hu8m = l4p.bKQ5V(t4x, cm5r);
                e4i.name = hu8m.title;
                e4i.author = hu8m.author;
                e4i.picUrl = hu8m.picUrl;
                e4i.type = t4x;
                e4i.rid = (cm5r || []).id
            }
        }
        n4r.xz3x.M4Q(e4i)
    }
    ;
    G4K.fu7n.A4E({
        element: n4r.xz3x,
        event: ["sharesuccess"]
    })
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, h4l = c4g("nej.v"), a3x = c4g("nej.e"), w4A = c4g("nej.j"), n4r = c4g("nm.l"), B4F = c4g("nm.w"), bD5I = c4g("nej.ui"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), b4f, K4O;
    n4r.Yy3x = NEJ.C();
    b4f = n4r.Yy3x.O4S(n4r.dZ7S);
    K4O = n4r.Yy3x.cj5o;
    b4f.cq5v = function() {
        this.cu5z()
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        var i4m = a3x.I4M(this.m4q, "j-flag");
        h4l.s4w(i4m[0], "click", this.BO5T.g4k(this))
    }
    ;
    b4f.bZ5e = function() {
        this.cb5g = "m-import-ok"
    }
    ;
    b4f.bj5o = function(e4i) {
        e4i.parent = e4i.parent || document.body;
        e4i.title = "歌曲同步完成";
        this.bk5p(e4i)
    }
    ;
    b4f.bA5F = function() {
        this.bF5K()
    }
    ;
    b4f.BO5T = function(d4h) {
        this.br5w();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    }
    ;
    b4f.zg4k = function() {
        this.br5w()
    }
    ;
    b4f.buc1x = function(d4h) {
        if (d4h.keyCode == 13)
            this.BM5R()
    }
}
)();
(function() {
    var c4g = NEJ.P, Y5d = NEJ.O, h4l = c4g("nej.v"), a3x = c4g("nej.e"), w4A = c4g("nej.j"), N4R = c4g("nej.p"), k4o = c4g("nej.u"), n4r = c4g("nm.l"), B4F = c4g("nm.w"), bD5I = c4g("nej.ui"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), b4f, K4O;
    n4r.bwJ1x = NEJ.C();
    b4f = n4r.bwJ1x.O4S(n4r.dZ7S);
    b4f.bZ5e = function() {
        this.cb5g = "m-programtips-layer"
    }
    ;
    b4f.bR5W = function() {
        this.cc5h();
        this.bN5S = a3x.I4M(this.m4q, "j-flag")
    }
    ;
    b4f.bj5o = function(e4i) {
        e4i.clazz = " m-layer-programtips";
        e4i.parent = e4i.parent || document.body;
        e4i.title = "付费内容提示";
        e4i.draggable = !0;
        e4i.destroyalbe = !0;
        e4i.mask = true;
        this.bk5p(e4i);
        this.gH8z = e4i.id;
        this.ckJ3x = e4i.radiotype;
        this.kH9y = location.protocol + "//" + (this.ckI3x() || "music.163.com") + "/m/" + this.ckJ3x + "?id=" + this.gH8z;
        this.ckE3x()
    }
    ;
    b4f.bA5F = function() {
        this.bF5K()
    }
    ;
    b4f.zg4k = function() {
        this.br5w()
    }
    ;
    b4f.BO5T = function(d4h) {
        this.y4C("onok", C4G);
        this.br5w()
    }
    ;
    l4p.bwP1x = function(e4i) {
        n4r.bwJ1x.A4E(e4i).M4Q()
    }
    ;
    b4f.ckE3x = function() {
        w4A.bp5u("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k4o.db6V({
                url: this.kH9y,
                size: 180
            }),
            onload: function(j4n) {
                if (j4n.code == 200) {
                    this.ckD3x(j4n.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }
            .g4k(this)
        })
    }
    ;
    b4f.ckI3x = function() {
        var ckC3x = location.host;
        if (ckC3x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    }
    ;
    b4f.ckD3x = function(kd9U) {
        this.bN5S[0].style.backgroundImage = "url(" + kd9U + ")"
    }
}
)();
(function() {
    var c4g = NEJ.P, a3x = c4g("nej.e"), dh6b = c4g("nej.p"), h4l = c4g("nej.v"), k4o = c4g("nej.u"), G4K = c4g("nej.ut"), w4A = c4g("nej.j"), p4t = c4g("nm.d"), l4p = c4g("nm.x"), E4I = c4g("nm.m"), n4r = c4g("nm.l"), L4P = c4g("nm.m.f"), b4f, K4O;
    E4I.cQ6K = NEJ.C();
    b4f = E4I.cQ6K.O4S(G4K.de6Y);
    b4f.bG5L = function() {
        var pE1x = !1;
        return function() {
            if (pE1x)
                return;
            pE1x = !0;
            this.bL5Q();
            if (top == self) {
                return
            }
            this.sr2x = a3x.z4D("g_backtop");
            if (window.GRef != "mail") {} else {
                this.bwV1x()
            }
            G4K.fu7n.A4E({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.bS5X([[window, "scroll", this.yB4F.g4k(this)], [document, "keyup", this.ckB3x.g4k(this)], [document.body, "click", this.rB1x.g4k(this)], [document, "mouseup", this.ckA3x.g4k(this)], [this.sr2x, "click", this.RV1x.g4k(this)], [p4t.rw1x, "message", this.uk2x.g4k(this)]]);
            l4p.coO4S(document.body);
            this.yB4F();
            if (this.Br4v !== false && typeof GUser !== "undefined" && GUser.userId > 0)
                p4t.rw1x.fX8P().uu2x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dh6b.dk6e.browser == "ie" && parseInt(dh6b.dk6e.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gx8p = top.player.getPlaying();
                    if (gx8p && gx8p.track && gx8p.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gx8p.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {}
            window.share = this.xc3x.g4k(this);
            this.ko9f = p4t.hY8Q.A4E();
            window.log = this.ml0x.g4k(this);
            var rT1x = location.search;
            if (rT1x) {
                var bw5B = rT1x.substr(rT1x.indexOf("?") + 1)
                  , fM8E = k4o.hx8p(bw5B);
                if (fM8E && fM8E["_hash"])
                    location.hash = fM8E["_hash"]
            }
        }
    }();
    b4f.ckB3x = function(d4h) {
        var f4j = h4l.U5Z(d4h);
        try {
            if (d4h.keyCode == 80 && l4p.bFU4Y() || ["textarea", "input"].indexOf(f4j.tagName.toLowerCase()) >= 0)
                return;
            h4l.y4C(top.document, "keyup", {
                ctrlKey: d4h.ctrlKey,
                keyCode: d4h.keyCode
            })
        } catch (e) {}
    }
    ;
    b4f.rB1x = function(d4h) {
        var f4j = h4l.U5Z(d4h);
        if (f4j && f4j.tagName == "INPUT")
            return;
        var f4j = h4l.U5Z(d4h, "d:pid");
        if (f4j) {
            h4l.ci5n(d4h);
            var ph1x = a3x.u4y(f4j, "pid")
              , Bg4k = a3x.u4y(f4j, "ptype")
              , V5a = a3x.u4y(f4j, "action") || "play";
            switch (V5a) {
            case "subscribe":
                l4p.lH0x({
                    tracks: [ph1x]
                });
                break
            }
        }
        f4j = h4l.U5Z(d4h, "d:resAction");
        if (f4j && f4j.className.indexOf("-dis") == -1) {
            var cP6J = a3x.u4y(f4j, "resId")
              , t4x = a3x.u4y(f4j, "resType")
              , bjR8J = a3x.u4y(f4j, "resRadiotype")
              , bjP8H = a3x.u4y(f4j, "resRadioid")
              , dP7I = a3x.u4y(f4j, "resFrom")
              , j4n = a3x.u4y(f4j, "resData")
              , V5a = a3x.u4y(f4j, "resAction")
              , bsc0x = a3x.u4y(f4j, "resCopyright")
              , Yq3x = a3x.u4y(f4j, "resAuditstatus");
            if (V5a != "log" && V5a != "bilog")
                h4l.ci5n(d4h);
            switch (V5a) {
            case "log":
                j4n = (j4n || "").split("|");
                if (!!j4n[0]) {
                    var bd5i = {
                        id: cP6J,
                        alg: j4n[2] || "itembased",
                        scene: j4n[3],
                        position: j4n[1] || 0
                    };
                    if (!!j4n[4])
                        bd5i.srcid = j4n[4];
                    window.log(j4n[0], bd5i)
                }
                break;
            case "bilog":
                var bct6n = a3x.u4y(f4j, "logAction")
                  , bcF6z = a3x.u4y(f4j, "logJson");
                window.log(bct6n, bcF6z);
                break;
            case "share":
                if (Yq3x && Yq3x == 1) {
                    l4p.in8f("由于版权问题，该节目暂时无法分享。")
                } else {
                    share(cP6J, t4x, a3x.u4y(f4j, "resPic"), a3x.u4y(f4j, "resName"), a3x.u4y(f4j, "resAuthor"), a3x.u4y(f4j, "resAuthors"))
                }
                break;
            case "fav":
            case "subscribe":
                if (t4x == 18) {
                    var pJ1x = a3x.u4y(f4j, "resLevel")
                      , qR1x = a3x.u4y(f4j, "resFee");
                    if (pJ1x == 10) {
                        l4p.sX2x(qR1x, cP6J, "song");
                        break
                    }
                    l4p.lH0x({
                        tracks: [cP6J]
                    })
                }
                break;
            case "download":
                l4p.Vf2x({
                    id: cP6J,
                    type: t4x
                });
                break;
            case "programtips":
                if (Yq3x && Yq3x == 1) {
                    l4p.in8f("由于版权问题，该节目暂时无法分享。")
                } else {
                    l4p.bwP1x({
                        id: bjP8H,
                        radiotype: bjR8J
                    })
                }
                break
            }
        }
        if (top == self)
            return;
        try {
            top.onIframeClick(d4h)
        } catch (e) {}
    }
    ;
    b4f.ckA3x = function(d4h) {
        try {
            h4l.y4C(top.document, "mouseup")
        } catch (e) {}
    }
    ;
    b4f.yB4F = function() {
        var ckz3x = function() {
            var cg5l = window.innerHeight;
            if (!k4o.vz3x(cg5l))
                cg5l = (document.documentElement || document.body).clientHeight;
            return cg5l
        };
        return function(d4h) {
            if (!this.sr2x)
                return;
            var Yp3x = ckz3x()
              , fL8D = document.documentElement.scrollTop || document.body.scrollTop;
            a3x.Z5e(this.sr2x, "display", fL8D > 0 ? "" : "none");
            if (dh6b.dk6e.browser == "ie" && dh6b.dk6e.version < "7.0") {
                var gq8i = Math.min(document.body.clientHeight, Yp3x + fL8D) - 204;
                a3x.Z5e(this.sr2x, "top", gq8i + "px")
            }
        }
    }();
    b4f.RV1x = function(d4h) {
        h4l.ci5n(d4h);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
    ;
    b4f.xc3x = function() {
        var bjE8w = function(d4h) {
            h4l.y4C(window, "share", d4h)
        };
        return function(cP6J, t4x, BP5U, T5Y, SB1x, SE1x) {
            l4p.mM0x({
                rid: cP6J,
                type: t4x,
                purl: BP5U,
                name: T5Y,
                author: SB1x,
                authors: SE1x,
                onshare: bjE8w.g4k(this)
            })
        }
    }();
    b4f.ml0x = function(V5a, bd5i) {
        try {
            top.log(V5a, bd5i)
        } catch (e) {
            switch (V5a) {
            case "play":
                this.ko9f.ey7r(bd5i);
                break;
            case "search":
                this.ko9f.bDE3x(bd5i);
                break;
            default:
                this.ko9f.gm8e(V5a, bd5i)
            }
        }
    }
    ;
    b4f.bwV1x = function() {
        var Yl3x, bjv8n = false, bs5x = [45, 60];
        var cku3x = function(bC5H) {
            if (bC5H.title != "MailBoxImport")
                return;
            var P4T = JSON.parse(bC5H.content || "null") || Y5d;
            if (P4T.status == 10) {
                n4r.Yy3x.A4E().M4Q();
                window.clearTimeout(Yl3x)
            }
        };
        var to2x = function(d4h) {
            if (d4h.code == 200) {
                if (d4h.status == 1) {
                    h4l.s4w(p4t.yA4E, "message", cku3x.g4k(this));
                    p4t.yA4E.A4E().beC6w();
                    bjv8n = true
                } else {
                    if (bjv8n) {
                        if (d4h.status == 10) {
                            n4r.Yy3x.A4E().M4Q();
                            h4l.hw8o(p4t.yA4E, "message");
                            window.clearTimeout(Yl3x);
                            bjv8n = false
                        }
                    } else {
                        window.clearTimeout(Yl3x)
                    }
                }
            }
        };
        return function() {
            var sC2x = bs5x.shift() * 1e3;
            w4A.bp5u("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: to2x.g4k(this)
            });
            if (sC2x) {
                Yl3x = window.setTimeout(arguments.callee, sC2x)
            }
        }
    }();
    b4f.uk2x = function(d4h) {
        try {
            top.polling(d4h)
        } catch (e) {}
    }
}
)()
