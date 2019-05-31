/* El código a continuación es propiedad intelectual de The Mail Track Company S.L. de Barcelona, España,
y solo debe ser utilizado y manejado bajo estos Términos: https://mailtrack.io/es/terms

The code hereafter is the intellectual property of The Mail Track Company S.L. of Barcelona, Spain
and must be used and handled only according to these Terms: https://mailtrack.io/en/terms */
!(function(n) {
    var o = {};
    function r(e) {
        if (o[e]) return o[e].exports;
        var t = (o[e] = { i: e, l: !1, exports: {} });
        return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
    }
    (r.m = n),
        (r.c = o),
        (r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function(e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (r.t = function(t, e) {
            if ((1 & e && (t = r(t)), 8 & e)) return t;
            if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (
                (r.r(n),
                Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
                2 & e && 'string' != typeof t)
            )
                for (var o in t)
                    r.d(
                        n,
                        o,
                        function(e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return n;
        }),
        (r.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return r.d(t, 'a', t), t;
        }),
        (r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = window.MT_INTERCOM_PATH),
        r((r.s = 838));
})({
    173: function(e, t, n) {
        'use strict';
        e.exports = {
            source_map: 'hidden-source-map',
            api_base: 'https://api-iam.intercom.io',
            public_path: window.MT_INTERCOM_PATH,
            sheets_proxy_path: 'https://intercom-sheets.com/sheets_proxy',
            sentry_proxy_path: 'https://www.intercom-reporting.com/sentry/index.html',
            install_mode_base: 'https://app.intercom.io',
            sentry_dsn: 'https://f305de69cac64a84a494556d5303dc2d@app.getsentry.com/24287',
            intersection_js: 'https://js.intercomcdn.com/intersection/assets/app.js',
            intersection_styles: 'https://js.intercomcdn.com/intersection/assets/styles.js',
            mode: 'production',
        };
    },
    838: function(e, t, n) {
        e.exports = n(839);
    },
    839: function(e, t, n) {
        'use strict';
        window.__INTERCOM_BUNDLE_LOAD_TIME__ = Date.now();
        var o = n(173).public_path,
            r = n(840).addTurbolinksEventListeners,
            i = o + 'intercom-frame.js',
            c = o + 'intercom-vendor.js',
            a = 'Intercom',
            d = /bot|googlebot|crawler|spider|robot|crawling/i,
            s = function() {
                return window[a] && window[a].booted;
            },
            u = function(e) {
                var t = document.createElement('script');
                return (t.type = 'text/javascript'), (t.charset = 'utf-8'), (t.src = e), t;
            },
            p = function() {
                var e = document.getElementById('intercom-frame');
                e && e.parentNode && e.parentNode.removeChild(e);
            },
            m = function() {
                if (!window[a]) {
                    var e = function e() {
                        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                            n[o] = arguments[o];
                        e.q.push(n);
                    };
                    (e.q = []), (window[a] = e);
                }
            },
            l = function() {
                var e, t, n;
                s() ||
                    (m(),
                    (e = document.querySelector('meta[name="referrer"]')),
                    (t = e ? '<meta name="referrer" content="' + e.content + '">' : ''),
                    ((n = document.createElement('iframe')).id = 'intercom-frame'),
                    (n.style.display = 'none'),
                    document.body.appendChild(n),
                    n.contentWindow.document.open('text/html', 'replace'),
                    n.contentWindow.document.write(
                        '\n    <!doctype html>\n    <html lang="en">\n    <head>\n      ' +
                            t +
                            '\n    </head>\n    <body>\n    </body>\n    </html>'
                    ),
                    n.contentWindow.document.close(),
                    n.contentWindow.document.head.appendChild(u(i)),
                    n.contentWindow.document.head.appendChild(u(c)),
                    (window[a].booted = !0));
            };
        ('attachEvent' in window && !window.addEventListener) ||
            (navigator &&
                navigator.userAgent &&
                /MSIE 9\.0/.test(navigator.userAgent) &&
                window.addEventListener &&
                !window.atob) ||
            ('onpropertychange' in document &&
                window.matchMedia &&
                /MSIE 10\.0/.test(navigator.userAgent)) ||
            (navigator && navigator.userAgent && d.test(navigator.userAgent)) ||
            window.isIntercomMessengerSheet ||
            s() ||
            (l(),
            r(l, p, function() {
                window[a]('shutdown', !1), delete window[a], p(), m();
            }));
    },
    840: function(e, t, n) {
        'use strict';
        var r = ['turbolinks:visit', 'page:before-change'],
            i = ['turbolinks:before-cache'],
            c = ['turbolinks:load', 'page:change'];
        e.exports = {
            addTurbolinksEventListeners: function(t, n, o) {
                c.forEach(function(e) {
                    document.addEventListener(e, t);
                }),
                    i.forEach(function(e) {
                        document.addEventListener(e, n);
                    }),
                    r.forEach(function(e) {
                        document.addEventListener(e, o);
                    });
            },
        };
    },
});
