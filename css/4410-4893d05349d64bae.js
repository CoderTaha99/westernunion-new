(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4410], {
    11155: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return Menu
            }
        });
        var r = n(85893);
        n(67294);
        var o = n(78744)
          , u = n.n(o);
        let Menu = e=>{
            let {isActive: t=!1, toggleButton: n=()=>{}
            } = e;
            return (0,
            r.jsx)("div", {
                className: "".concat(u().menuButtonWrapper, " m-pad-xxxxs ").concat(t && u().menuButtonActive),
                onClick: ()=>{
                    n(),
                    e.triggerEvents && "function" == typeof e.triggerEvents && e.analytics && e.triggerEvents(e)
                }
                ,
                children: (0,
                r.jsx)("div", {
                    className: u().menuButton,
                    children: (0,
                    r.jsx)("span", {
                        className: u().menuButtonLines
                    })
                })
            })
        }
    },
    97498: function(e, t) {
        "use strict";
        var n, r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            PrefetchKind: function() {
                return n
            },
            ACTION_REFRESH: function() {
                return o
            },
            ACTION_NAVIGATE: function() {
                return u
            },
            ACTION_RESTORE: function() {
                return l
            },
            ACTION_SERVER_PATCH: function() {
                return f
            },
            ACTION_PREFETCH: function() {
                return a
            },
            ACTION_FAST_REFRESH: function() {
                return i
            },
            ACTION_SERVER_ACTION: function() {
                return c
            }
        });
        let o = "refresh"
          , u = "navigate"
          , l = "restore"
          , f = "server-patch"
          , a = "prefetch"
          , i = "fast-refresh"
          , c = "server-action";
        (r = n || (n = {})).AUTO = "auto",
        r.FULL = "full",
        r.TEMPORARY = "temporary",
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    10030: function(e, t, n) {
        "use strict";
        function getDomainLocale(e, t, n, r) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return getDomainLocale
            }
        }),
        n(22866),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    65170: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return m
            }
        });
        let r = n(38754)
          , o = r._(n(67294))
          , u = n(74450)
          , l = n(92227)
          , f = n(64364)
          , a = n(10109)
          , i = n(73607)
          , c = n(11823)
          , s = n(89031)
          , d = n(40920)
          , p = n(10030)
          , v = n(77192)
          , _ = n(97498)
          , h = new Set;
        function prefetch(e, t, n, r, o, u) {
            if (!u && !(0,
            l.isLocalURL)(t))
                return;
            if (!r.bypassPrefetchedCheck) {
                let o = void 0 !== r.locale ? r.locale : "locale"in e ? e.locale : void 0
                  , u = t + "%" + n + "%" + o;
                if (h.has(u))
                    return;
                h.add(u)
            }
            let f = u ? e.prefetch(t, o) : e.prefetch(t, n, r);
            Promise.resolve(f).catch(e=>{}
            )
        }
        function formatStringOrUrl(e) {
            return "string" == typeof e ? e : (0,
            f.formatUrl)(e)
        }
        let y = o.default.forwardRef(function(e, t) {
            let n, r;
            let {href: f, as: h, children: y, prefetch: m=null, passHref: b, replace: g, shallow: O, scroll: E, locale: C, onClick: M, onMouseEnter: j, onTouchStart: P, legacyBehavior: R=!1, ...T} = e;
            n = y,
            R && ("string" == typeof n || "number" == typeof n) && (n = o.default.createElement("a", null, n));
            let A = o.default.useContext(c.RouterContext)
              , x = o.default.useContext(s.AppRouterContext)
              , I = null != A ? A : x
              , k = !A
              , L = !1 !== m
              , N = null === m ? _.PrefetchKind.AUTO : _.PrefetchKind.FULL
              , {href: S, as: B} = o.default.useMemo(()=>{
                if (!A) {
                    let e = formatStringOrUrl(f);
                    return {
                        href: e,
                        as: h ? formatStringOrUrl(h) : e
                    }
                }
                let[e,t] = (0,
                u.resolveHref)(A, f, !0);
                return {
                    href: e,
                    as: h ? (0,
                    u.resolveHref)(A, h) : t || e
                }
            }
            , [A, f, h])
              , U = o.default.useRef(S)
              , w = o.default.useRef(B);
            R && (r = o.default.Children.only(n));
            let K = R ? r && "object" == typeof r && r.ref : t
              , [D,F,H] = (0,
            d.useIntersection)({
                rootMargin: "200px"
            })
              , V = o.default.useCallback(e=>{
                (w.current !== B || U.current !== S) && (H(),
                w.current = B,
                U.current = S),
                D(e),
                K && ("function" == typeof K ? K(e) : "object" == typeof K && (K.current = e))
            }
            , [B, K, S, H, D]);
            o.default.useEffect(()=>{
                I && F && L && prefetch(I, S, B, {
                    locale: C
                }, {
                    kind: N
                }, k)
            }
            , [B, S, F, C, L, null == A ? void 0 : A.locale, I, k, N]);
            let W = {
                ref: V,
                onClick(e) {
                    R || "function" != typeof M || M(e),
                    R && r.props && "function" == typeof r.props.onClick && r.props.onClick(e),
                    I && !e.defaultPrevented && function(e, t, n, r, u, f, a, i, c, s) {
                        let {nodeName: d} = e.currentTarget
                          , p = "A" === d.toUpperCase();
                        if (p && (function(e) {
                            let t = e.currentTarget
                              , n = t.getAttribute("target");
                            return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !c && !(0,
                        l.isLocalURL)(n)))
                            return;
                        e.preventDefault();
                        let navigate = ()=>{
                            let e = null == a || a;
                            "beforePopState"in t ? t[u ? "replace" : "push"](n, r, {
                                shallow: f,
                                locale: i,
                                scroll: e
                            }) : t[u ? "replace" : "push"](r || n, {
                                forceOptimisticNavigation: !s,
                                scroll: e
                            })
                        }
                        ;
                        c ? o.default.startTransition(navigate) : navigate()
                    }(e, I, S, B, g, O, E, C, k, L)
                },
                onMouseEnter(e) {
                    R || "function" != typeof j || j(e),
                    R && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e),
                    I && (L || !k) && prefetch(I, S, B, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: N
                    }, k)
                },
                onTouchStart(e) {
                    R || "function" != typeof P || P(e),
                    R && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e),
                    I && (L || !k) && prefetch(I, S, B, {
                        locale: C,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: N
                    }, k)
                }
            };
            if ((0,
            a.isAbsoluteUrl)(B))
                W.href = B;
            else if (!R || b || "a" === r.type && !("href"in r.props)) {
                let e = void 0 !== C ? C : null == A ? void 0 : A.locale
                  , t = (null == A ? void 0 : A.isLocaleDomain) && (0,
                p.getDomainLocale)(B, e, null == A ? void 0 : A.locales, null == A ? void 0 : A.domainLocales);
                W.href = t || (0,
                v.addBasePath)((0,
                i.addLocale)(B, e, null == A ? void 0 : A.defaultLocale))
            }
            return R ? o.default.cloneElement(r, W) : o.default.createElement("a", {
                ...T,
                ...W
            }, n)
        })
          , m = y;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    40920: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return useIntersection
            }
        });
        let r = n(67294)
          , o = n(63436)
          , u = "function" == typeof IntersectionObserver
          , l = new Map
          , f = [];
        function useIntersection(e) {
            let {rootRef: t, rootMargin: n, disabled: a} = e
              , i = a || !u
              , [c,s] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , p = (0,
            r.useCallback)(e=>{
                d.current = e
            }
            , []);
            (0,
            r.useEffect)(()=>{
                if (u) {
                    if (i || c)
                        return;
                    let e = d.current;
                    if (e && e.tagName) {
                        let r = function(e, t, n) {
                            let {id: r, observer: o, elements: u} = function(e) {
                                let t;
                                let n = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , r = f.find(e=>e.root === n.root && e.margin === n.margin);
                                if (r && (t = l.get(r)))
                                    return t;
                                let o = new Map
                                  , u = new IntersectionObserver(e=>{
                                    e.forEach(e=>{
                                        let t = o.get(e.target)
                                          , n = e.isIntersecting || e.intersectionRatio > 0;
                                        t && n && t(n)
                                    }
                                    )
                                }
                                ,e);
                                return t = {
                                    id: n,
                                    observer: u,
                                    elements: o
                                },
                                f.push(n),
                                l.set(n, t),
                                t
                            }(n);
                            return u.set(e, t),
                            o.observe(e),
                            function() {
                                if (u.delete(e),
                                o.unobserve(e),
                                0 === u.size) {
                                    o.disconnect(),
                                    l.delete(r);
                                    let e = f.findIndex(e=>e.root === r.root && e.margin === r.margin);
                                    e > -1 && f.splice(e, 1)
                                }
                            }
                        }(e, e=>e && s(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                        });
                        return r
                    }
                } else if (!c) {
                    let e = (0,
                    o.requestIdleCallback)(()=>s(!0));
                    return ()=>(0,
                    o.cancelIdleCallback)(e)
                }
            }
            , [i, n, t, c, d.current]);
            let v = (0,
            r.useCallback)(()=>{
                s(!1)
            }
            , []);
            return [p, c, v]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    78744: function(e) {
        e.exports = {
            menuButtonWrapper: "Menu_menuButtonWrapper__Nn2KI",
            menuButton: "Menu_menuButton__e_mRB",
            menuButtonLines: "Menu_menuButtonLines___saEZ",
            menuButtonActive: "Menu_menuButtonActive__f0w1s"
        }
    },
    41664: function(e, t, n) {
        e.exports = n(65170)
    },
    4298: function(e, t, n) {
        e.exports = n(85354)
    }
}]);
