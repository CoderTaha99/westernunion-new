(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8635], {
    4210: function(e, n, t) {
        "use strict";
        t.d(n, {
            GZ: function() {
                return isShowBeforePayBannerFromEvergage
            },
            XP: function() {
                return buildQuery
            },
            gQ: function() {
                return beforePayendDateItemKey
            },
            g_: function() {
                return getStatusData
            },
            hD: function() {
                return beforePayItemKey
            },
            mr: function() {
                return showBeforePayBanner
            },
            rh: function() {
                return getBeforePayUrl
            },
            sz: function() {
                return paramsToObject
            }
        });
        var a = t(81501)
          , o = t(61150)
          , i = t(51175)
          , l = t(24287)
          , r = t(1400)
          , s = t(84736)
          , c = t(35959)
          , d = t(53049);
        function beforePayItemKey() {
            var e, n, t, o;
            return (null === (o = (0,
            a.b)()) || void 0 === o ? void 0 : null === (t = o.getState()) || void 0 === t ? void 0 : null === (n = t.updatedUserDetails) || void 0 === n ? void 0 : null === (e = n.gatewayCustomer) || void 0 === e ? void 0 : e.email) + l.default.BEFOREPAY.beforePay || l.default.BEFOREPAY.beforePay
        }
        let getStatusData = function(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default.BEFOREPAY.banner
              , t = arguments.length > 2 ? arguments[2] : void 0;
            try {
                var o, s, d, u, p;
                let m;
                (p = m || (m = {})).SUCCESS = "success",
                p.ACTIVE = "active",
                p.INCOMPLETE = "incomplete",
                p.INELIGIBLE = "ineligible";
                let g = (0,
                a.b)().getState();
                e = null == e ? void 0 : e.toLowerCase();
                let v = {
                    amount: ""
                };
                if ((null === (o = g.platform) || void 0 === o ? void 0 : o.toLowerCase()) == l.default.DEVICE_CATEGORY.WEB) {
                    let e = beforePayItemKey() || ""
                      , n = localStorage.getItem(e) || "";
                    v = JSON.parse(n)
                } else
                    v = t;
                let {SUCCESS: _, ACTIVE: f, INCOMPLETE: h, INELIGIBLE: b} = m;
                switch (e) {
                case f:
                    return {
                        msg: (0,
                        r.j2)("BeforePay.BeforePayContent.activeLoanMsg"),
                        bgColor: i.Dt.infoTextSecondary,
                        textColor: i.Dt.textTertiary,
                        type: "info"
                    };
                case _:
                    let y = (null === (u = (0,
                    a.b)()) || void 0 === u ? void 0 : null === (d = u.getState()) || void 0 === d ? void 0 : null === (s = d.platform) || void 0 === s ? void 0 : s.toLowerCase()) == l.default.DEVICE_CATEGORY.WEB.toLowerCase() ? "".concat((0,
                    c.ieB)((0,
                    r.j2)("BeforePay.BeforePayContent.toastSuccessMsg", {
                        amount: null == v ? void 0 : v.amount
                    }))({})) : "".concat((0,
                    c.ieB)((0,
                    r.j2)("BeforePay.BeforePayContent.toastSuccessMsgApp", {
                        amount: null == v ? void 0 : v.amount
                    }))({}));
                    return {
                        msg: (null == n ? void 0 : n.toLowerCase()) === l.default.BEFOREPAY.toast ? y : "".concat((0,
                        c.ieB)((0,
                        r.j2)("BeforePay.BeforePayContent.bannerSuccessMsg", {
                            amount: null == v ? void 0 : v.amount
                        }))({})),
                        bgColor: (null == n ? void 0 : n.toLowerCase()) === l.default.BEFOREPAY.toast ? i.Dt.success : i.Dt.listSelectedBgPrimary,
                        textColor: i.Dt.black,
                        type: _
                    };
                case b:
                    return {
                        msg: (0,
                        r.j2)("BeforePay.BeforePayContent.notEligibleMsg"),
                        bgColor: i.Dt.alertTertiary,
                        textColor: i.Dt.textTertiary,
                        type: "warning"
                    };
                case h:
                    return {
                        msg: (0,
                        r.j2)("BeforePay.BeforePayContent.IncompleteMsg"),
                        bgColor: i.Dt.infoTextSecondary,
                        textColor: i.Dt.textTertiary,
                        type: "info"
                    };
                default:
                    return {}
                }
            } catch (e) {}
        };
        function beforePayendDateItemKey() {
            var e, n, t, o;
            return (null === (o = (0,
            a.b)()) || void 0 === o ? void 0 : null === (t = o.getState()) || void 0 === t ? void 0 : null === (n = t.updatedUserDetails) || void 0 === n ? void 0 : null === (e = n.gatewayCustomer) || void 0 === e ? void 0 : e.email) + l.default.BEFOREPAY.b4PayEndDate || l.default.BEFOREPAY.b4PayEndDate
        }
        function showBeforePayBanner() {
            try {
                var e = localStorage.getItem(beforePayendDateItemKey());
                if (null === e)
                    return !0;
                if (new Date().getTime() <= new Date(e + c.fH3).getTime())
                    return !1;
                return localStorage.removeItem(beforePayendDateItemKey()),
                !0
            } catch (e) {
                return !0
            }
        }
        function isShowBeforePayBannerFromEvergage() {
            var e, n, t, o;
            let i = (0,
            a.b)().getState();
            if (null === (t = (0,
            s.In)()) || void 0 === t ? void 0 : null === (n = t.featuresEnabled) || void 0 === n ? void 0 : null === (e = n.beforePayConfig) || void 0 === e ? void 0 : e.isEnabled)
                return !0;
            if (!(null == i ? void 0 : i.ecoFlow) || !(0,
            c.C5F)()) {
                let e = null == i ? void 0 : null === (o = i.evergageCampaign) || void 0 === o ? void 0 : o.evergageCampaignData;
                if ((0,
                d.f1)("BeforePay", e) && function(e) {
                    var n, t, a;
                    let o = (0,
                    c.Ng8)();
                    if (null == e ? void 0 : null === (n = e.BeforePayEnablement) || void 0 === n ? void 0 : n.userTypesEnabled) {
                        let n = null !== (a = null == e ? void 0 : null === (t = e.BeforePayEnablement) || void 0 === t ? void 0 : t.userTypesEnabled) && void 0 !== a ? a : [];
                        return n.indexOf(o) > -1
                    }
                    return !0
                }(e))
                    return !0
            }
            return !1
        }
        function getBeforePayUrl(e) {
            var n, t = o.s.getSessionStorage(l.default.BEFOREPAY.beforePayUrl);
            return t && "null" != t ? e = t : (n = e,
            o.s.setSessionStorage(l.default.BEFOREPAY.beforePayUrl, n)),
            e
        }
        function buildQuery(e, n) {
            let t = "";
            for (let i = 0; i < e.length; i++) {
                let l = e[i]
                  , r = "";
                if ("redirectUrl" === l) {
                    var a, o;
                    let e;
                    e = (0,
                    c.uzL)("origin") ? window.location.origin : "https://www.westernunion.com";
                    let t = e + "/" + (null === (a = (0,
                    c.RLd)()) || void 0 === a ? void 0 : a.toLowerCase()) + "/" + (null === (o = (0,
                    c.sas)()) || void 0 === o ? void 0 : o.toLowerCase()) + "/";
                    r = t + n[l].endpoint
                } else
                    r = n[l];
                let s = 0 == i ? "?" : "&";
                t = "".concat(t).concat(s).concat(l, "=").concat(r)
            }
            return t
        }
        function paramsToObject(e) {
            let n = {};
            for (let[t,a] of e)
                n[t] = a;
            return n
        }
    },
    17726: function(e, n, t) {
        "use strict";
        t.d(n, {
            W: function() {
                return isDingEnabledFromEvergage
            }
        });
        var a = t(61150)
          , o = t(81501)
          , i = t(53049);
        function isDingEnabledFromEvergage() {
            var e;
            let n = (0,
            o.b)().getState()
              , t = a.s.getSessionStorage("evergageFF") || "{}"
              , l = null == n ? void 0 : null === (e = n.evergageCampaign) || void 0 === e ? void 0 : e.evergageCampaignData;
            if ((0,
            i.f1)("Ding", l))
                return !0;
            try {
                if ((t = JSON.parse(t)) && !0 == t.isDingEnabled)
                    return !0
            } catch (e) {
                console.error("Exception", e)
            }
            return !1
        }
    },
    10597: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return high_WUPage
            }
        });
        var a = t(85893)
          , o = t(67294)
          , i = t(9008)
          , l = t.n(i)
          , r = t(91413)
          , s = t.n(r)
          , c = t(8171)
          , d = t(35959)
          , u = t(14869)
          , p = t(89101)
          , m = t(4298)
          , g = t.n(m);
        t(733);
        var v = t(19865)
          , _ = t(51175)
          , f = t(11917)
          , h = t(53261)
          , b = t(61985)
          , y = t(25396)
          , x = t.n(y)
          , P = t(67452)
          , C = t.n(P)
          , S = JSON.parse('{"en":{"default":{"ie":"Windows IE11 isn\'t supported, please try opening the website using Edge, Chrome, or Firefox."},"ca":{"ie":"Windows IE11 isn\'t supported, please try opening the website using Edge, Chrome, or Firefox."},"us":{"ie":"Windows IE11 isn\'t supported, please try opening the website using Edge, Chrome, or Firefox."}},"fr":{"default":{"ie":"Vous ne pouvez acc\xe9der \xe0 ce site \xe0 partir d’Internet Explorer 11. Veuillez utiliser Edge, Chrome ou Firefox."},"ca":{"ie":"Vous ne pouvez acc\xe9der \xe0 ce site \xe0 partir d’Internet Explorer 11. Veuillez utiliser Edge, Chrome ou Firefox."},"us":{"ie":"Vous ne pouvez acc\xe9der \xe0 ce site \xe0 partir d’Internet Explorer 11. Veuillez utiliser Edge, Chrome ou Firefox."}},"zh":{"default":{"ie":"不支持 Windows IE11，请尝试使用 Edge、Chrome 或 Firefox 打开该网站。"},"ca":{"ie":"不支持 Windows IE11，请尝试使用 Edge、Chrome 或 Firefox 打开该网站。"},"us":{"ie":"不支持 Windows IE11，请尝试使用 Edge、Chrome 或 Firefox 打开该网站。"}}}')
          , k = t(22507)
          , Header = e=>{
            let[n,t] = (0,
            o.useState)(!1);
            return (0,
            o.useEffect)(()=>{
                t(e.isDisplayProgressiveBarMenu);
                let n = (0,
                d.RLd)()
                  , a = (0,
                d.sas)();
                if (("".indexOf("MSIE") > -1 || "".indexOf("rv:") > -1) && !("".indexOf("firefox") > -1)) {
                    let e = "";
                    try {
                        let t = S[a] || S.en;
                        e = (t[n.toLowerCase()] || t.default).ie
                    } catch (n) {
                        console.log("countryNode/languageNode not found"),
                        e = S.en.default.ie
                    }
                    let t = document.createElement("div")
                      , o = "<div style='height:100vh;background-color: var(--color-appYellow);color: var(--color-black);display: flex;flex-direction: column;'><div style='background-color: var(--color-black;color: var(--color-white); padding: 15px 0;'><div style='max-width: 1600px;margin: 0 auto;padding: 0 10%; text-align: center;'><img src='/exp-static-assets/svg-icons/logo-big.svg' style='max-width:260px;height: 58px;'/></div></div><div><div style='max-width: 1600px;padding: 0 10%; margin: 0 auto;'><p style=\"margin-top:65px; text-align: center;\"><img src='/exp-static-assets/png-icons/alertIcon.png' style='width:71px;'/></p><p style='margin-top:65px; font-size: 22px; font-weight: bold; text-align: center;'>".concat(e, "</p></div></div></div>");
                    t.innerHTML = k.Z.sanitizeHtmlString(o),
                    document.body.appendChild(t)
                }
            }
            , []),
            (0,
            a.jsxs)("div", {
                className: "header-wrapper",
                children: [(0,
                a.jsx)("header", {
                    className: "flex jc-ctr ".concat(x()["header-bar"], " ").concat(C()["dont-print-imp"]),
                    children: (0,
                    a.jsx)("div", {
                        className: "flex1 ".concat(x()["container-wrapper"], " ").concat(x()["header-inner-wrapper"]),
                        children: (0,
                        a.jsx)("div", {
                            className: "flex ".concat(x().container, " ").concat(x()["header-container"]),
                            children: (0,
                            a.jsxs)(c.X2, {
                                children: [e.logo ? e.logo : (0,
                                a.jsx)(a.Fragment, {}), n ? (0,
                                a.jsx)(a.Fragment, {
                                    children: e.children
                                }) : (0,
                                a.jsx)("div", {
                                    className: "flex flex2 flx-row pos-relative jc-flx-end ".concat(x()["header-menu"]),
                                    children: e.children
                                })]
                            })
                        })
                    })
                }), (0,
                a.jsx)("div", {
                    className: "".concat(C()["print-only"], " flex jc-ctr ").concat(C()["header-bar"]),
                    style: {},
                    children: (0,
                    a.jsx)("div", {
                        style: {
                            background: _.Dt.containerBgTertiary,
                            padding: "12px"
                        },
                        children: e.logo
                    })
                })]
            })
        }
          , E = t(24287)
          , I = t(99290)
          , N = t(68579)
          , w = t(81501)
          , M = t(2664)
          , j = t(94839)
          , L = t(81287)
          , T = t(81561)
          , O = t.n(T)
          , R = t(41664)
          , U = t.n(R)
          , D = t(89651)
          , B = t(50386)
          , F = t(15699)
          , A = t(921)
          , W = t(83141)
          , V = t(43517)
          , H = t(54453)
          , Z = t.n(H)
          , Y = t(77342)
          , q = t(98185)
          , z = t(49490)
          , navigation_WUNavLink = e=>{
            let n = (0,
            M.I0)()
              , [t,i] = (0,
            o.useState)(e.path);
            (0,
            o.useEffect)(()=>{
                var n;
                (null === (n = e.data) || void 0 === n ? void 0 : n.key) == "logout" && i("#")
            }
            , []);
            let handleClick = a=>{
                var o, i, l, r, s, c, p;
                let m = (0,
                w.b)().getState()
                  , g = location && (0,
                q.qu)(location.pathname) && -1 == location.pathname.indexOf("receipt")
                  , v = t && (0,
                q.qu)(t)
                  , _ = t && isSMSkippedPage(t)
                  , h = t && isSMStartPage(t)
                  , b = location && isKYCVerificationPage(location.pathname)
                  , y = location && isMyReceiverPage(location.pathname)
                  , x = (0,
                q.SZ)(t)
                  , P = location && (0,
                q.JQ)(location.pathname);
                console.warn(g + " : " + v + " : " + _);
                let C = location && (0,
                q.U8)(location.pathname);
                if ((0,
                d.OC6)("commonFeatures", "enableKYCVerification") && C && (null == a ? void 0 : null === (o = a.currentTarget) || void 0 === o ? void 0 : o.id) !== "link_btn-logout") {
                    let e;
                    a.preventDefault(),
                    e = {
                        message: renderKYCVerfication(),
                        noButton: !0,
                        popupName: "skip-verification",
                        popupType: "skip-verification",
                        cancelAnalyticsId: "find_an_ersal_location",
                        okAnalyticsId: "Go_Back"
                    },
                    n((0,
                    D.$W)(e))
                }
                if (e.doNotPrompt || (null == m ? void 0 : null === (i = m.pickupCash) || void 0 === i ? void 0 : i.isPickUpCashFlow) || !g || v || _) {
                    if ((null == m ? void 0 : null === (l = m.pickupCash) || void 0 === l ? void 0 : l.isPickUpCashFlow) && !x) {
                        let e;
                        a.preventDefault(),
                        e = {
                            message: renderCancelPickUpCashTxnInfo(),
                            noButton: !0,
                            popupName: "cancel-transaction",
                            popupType: "information"
                        },
                        n((0,
                        D.$W)(e))
                    } else if (!e.doNotPrompt && y) {
                        a.preventDefault();
                        let e = {
                            message: renderMyReceiverAbandonInfo(),
                            noButton: !0,
                            popupName: "my-receiver-abandon",
                            popupType: "information"
                        };
                        n((0,
                        D.$W)(e))
                    } else if (P) {
                        let e;
                        a.preventDefault(),
                        e = {
                            message: renderCancelUDMFlow(),
                            noButton: !0,
                            popupName: "cancel-update-delivery-method",
                            popupType: "information"
                        },
                        n((0,
                        D.$W)(e))
                    } else if (h) {
                        location.pathname.includes("send-money/estimate-details") && (u.r5.SMCountrySelect.passProps = {
                            changeCountry: !0
                        });
                        let e = null === (c = m.sendMoney) || void 0 === c ? void 0 : c.isWuTileSelect;
                        n((0,
                        D.qO)()),
                        (null == e ? void 0 : e.isWutileSelect) && n((0,
                        F.wC)(e))
                    } else if ((0,
                    d.nD3)() && (null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.nameMandatory) && !(0,
                    d.oYg)(null === (s = m.digitalCustomerProfile) || void 0 === s ? void 0 : s.name))
                        a.preventDefault(),
                        renderUpdateProfilePopUp();
                    else if (t.includes("manage-reminders") && (0,
                    d.GrQ)() && !(0,
                    d.nD3)()) {
                        let e = (0,
                        d.kIu)(u.r5.Login);
                        (0,
                        z.Mb)(e),
                        a.preventDefault(),
                        triggerPropsClick(),
                        window.location.href.includes(f.ZP.LOGIN) && window.location.reload()
                    } else if (t.includes("prepaid")) {
                        let n = (0,
                        V.G)("prepaidToken")
                          , t = (0,
                        d.tPI)("", "", e.path);
                        if (!(0,
                        d.qe$)()) {
                            let e = new URL(t)
                              , n = e.origin
                              , a = null === (p = (0,
                            d.qAh)((0,
                            d.RLd)())) || void 0 === p ? void 0 : p.wuPrepaidNonProd;
                            a && (t = t.replace(n, a))
                        }
                        n && (t = t + "SSO?Token=" + n.replace(/"/g, "")),
                        console.log("check prepaid token - ", n),
                        console.log("check prepaid url - ", t),
                        a.preventDefault(),
                        window.location.href = t
                    } else
                        triggerPropsClick() || a.preventDefault(),
                        Y.F.clearSendMoneyFlow()
                } else {
                    let e;
                    a.preventDefault(),
                    e = b && !(0,
                    W.wh)() ? {
                        message: renderPostponeTxnVerificationInfo(),
                        noButton: !0,
                        popupName: "postpone-id-verification",
                        popupType: "information"
                    } : {
                        message: renderCancelTxnInfo(),
                        noButton: !0,
                        popupName: getAbandonTxnAnalyticsId(),
                        popupType: "information"
                    },
                    n((0,
                    D.$W)(e))
                }
            }
              , isSMSkippedPage = e=>{
                let n = [f.ZP.SMENTERAMOUNT, f.ZP.SMESTIMATEDETAILS]
                  , t = !1;
                for (let a of n)
                    if ((0,
                    f.nV)(a) === e) {
                        t = !0;
                        break
                    }
                return t
            }
              , isSMStartPage = e=>(0,
            f.nV)(f.ZP.SMCOUNTRYSELECT) === e
              , isKYCVerificationPage = e=>{
                let n = [f.ZP.KYCOPTIONS, f.ZP.KYCDETAILS, f.ZP.DUCDOCUPLOADTOOL, f.ZP.KYCDOCUPLOAD, f.ZP.KYCPINVERIFICATION, f.ZP.SKCDOCUPLOADTOOL, f.ZP.SMCOMPLIANCE]
                  , t = !1;
                for (let a of n)
                    if ((0,
                    f.nV)(a) === e) {
                        t = !0;
                        break
                    }
                return t
            }
              , isMyReceiverPage = e=>{
                let n = [f.ZP.MY_RECEIVER_INFO, f.ZP.MY_RECEIVER_ADDRESS, f.ZP.MY_RECEIVER_PAYOUT_SELECTION, f.ZP.MY_RECEIVER_ACCOUNTS]
                  , t = !1;
                for (let a of n)
                    if ((0,
                    f.nV)(a) === e) {
                        t = !0;
                        break
                    }
                return t
            }
              , renderUpdateProfilePopUp = t=>{
                var a;
                let o;
                let i = (0,
                d.qN1)()
                  , l = (null == i ? void 0 : i.nameMandatoryPopup[null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.key]) || (null == i ? void 0 : i.nameMandatoryPopup.default);
                o = {
                    title: l.title,
                    message: l.desc,
                    okButtonText: l.btnText,
                    okAction: {
                        type: "NAME_MANDATORY_POP_UP",
                        data: {
                            ...e,
                            resetState: t
                        }
                    },
                    cancelAction: {
                        type: "CANCEL"
                    },
                    icon: "0055_alert",
                    iconColor: "#a17027",
                    isCancellable: !0,
                    popupName: "name-mandatory",
                    popupType: "information"
                },
                n((0,
                D.$W)(o))
            }
              , renderMyReceiverAbandonInfo = ()=>(0,
            a.jsxs)(c.JX, {
                className: Z().cancelTxnPopUpWrapper,
                children: [(0,
                a.jsx)("div", {
                    id: "label_abandon_my_receiver_title",
                    className: "m-pad-xxs-tp font-hs ".concat(Z().titleSecn),
                    "aria-label": (0,
                    j.j2)("MyReceiversLeap.abandonPopup.title"),
                    children: (0,
                    j.j2)("MyReceiversLeap.abandonPopup.title")
                }), (0,
                a.jsx)("div", {
                    id: "label_abandon_my_receiver_popup_desc",
                    className: "m-pad-xxs-tp font-br ".concat(Z().descSecn),
                    "aria-label": (0,
                    j.j2)("MyReceiversLeap.abandonPopup.subtitle"),
                    children: (0,
                    j.j2)("MyReceiversLeap.abandonPopup.subtitle")
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-sm-tp ".concat(Z().primaryBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "btn_abandon_my_receiver_popup_continue",
                        primary: !0,
                        ariaLabel: (0,
                        j.j2)("MyReceiversLeap.abandonPopup.primaryButton"),
                        text: (0,
                        j.j2)("MyReceiversLeap.abandonPopup.primaryButton"),
                        onClick: ()=>{
                            closeCustomPopUp({
                                type: "MYRECEIVER_ABANDON_FLOW_PROMPT"
                            })
                        }
                        ,
                        ampButtonAttrs: {
                            ctaAmplitudeName: "button-complete-now"
                        },
                        analytics: (0,
                        I.PC)("button", "complete-now", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-xxs-tp ".concat(Z().linkBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "btn_abandon_my_receiver_popup_cancel",
                        link: !0,
                        ariaLabel: (0,
                        j.j2)("MyReceiversLeap.abandonPopup.secondaryButton"),
                        text: (0,
                        j.j2)("MyReceiversLeap.abandonPopup.secondaryButton"),
                        onClick: ()=>{
                            var n, a;
                            let o = (0,
                            w.b)().getState();
                            if (o.receiverReminderFlowActiveStatus) {
                                closeCustomPopUp({
                                    type: "DISMISS_CUSTOM_POPUP"
                                });
                                let e = u.r5.Reminders;
                                (0,
                                z.Mb)(e)
                            } else if ((0,
                            d.nD3)() && (null == e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : n.nameMandatory) && !(0,
                            d.oYg)(null === (a = o.digitalCustomerProfile) || void 0 === a ? void 0 : a.name))
                                closeCustomPopUp({
                                    type: "RESET_NAV_TO_RECEIVER_LIST"
                                });
                            else {
                                closeCustomPopUp({
                                    type: "DISMISS_CUSTOM_POPUP"
                                });
                                let n = (0,
                                z.Tc)((0,
                                z.DW)(t));
                                if (n)
                                    (0,
                                    z.Mb)(n);
                                else if ((null == e ? void 0 : e.path) != "#") {
                                    let e = (0,
                                    d.tPI)("", "", t);
                                    window.location.href = e
                                } else
                                    closeCustomPopUp({
                                        type: "RESET_NAV_TO_RECEIVER_LIST"
                                    })
                            }
                        }
                        ,
                        analytics: (0,
                        I.PC)("link", "complete-later", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                })]
            })
              , renderKYCVerfication = ()=>(0,
            a.jsxs)(c.JX, {
                className: Z().cancelTxnPopUpWrapper,
                children: [(0,
                a.jsx)("div", {
                    id: "label_postpone_verification_popup_title",
                    className: "m-pad-xxs-tp font-hs ".concat(Z().titleSecn),
                    "aria-label": (0,
                    j.j2)("absherKycCancelPopup.title"),
                    children: (0,
                    j.j2)("absherKycCancelPopup.title")
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-sm-tp ".concat(Z().primaryBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "btn_postpone_verification_popup_continue",
                        primary: !0,
                        ariaLabel: (0,
                        j.j2)("absherKycCancelPopup.okbutton"),
                        text: (0,
                        j.j2)("absherKycCancelPopup.okbutton"),
                        onClick: ()=>{
                            closeCustomPopUp({
                                type: "DISMISS_CUSTOM_POPUP"
                            })
                        }
                        ,
                        ampButtonAttrs: {
                            ctaAmplitudeName: "button-continue"
                        },
                        analytics: (0,
                        I.PC)("button", "Go_Back", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-xxs-tp ".concat(Z().linkBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "lbtn_postpone_verification_popup_cancel",
                        link: !0,
                        ariaLabel: (0,
                        j.j2)("absherKycCancelPopup.cancelButton"),
                        text: (0,
                        j.j2)("absherKycCancelPopup.cancelButton"),
                        onClick: ()=>{
                            Y.F.clearSendMoneyFlow(),
                            (0,
                            w.b)().dispatch((0,
                            A.pI)(function() {
                                if (window.open((0,
                                j.j2)("Menu.findLocationUrl")),
                                closeCustomPopUp({
                                    type: "DISMISS_CUSTOM_POPUP"
                                }),
                                console.log("signout>>>>", "WUNavLink-callback"),
                                "Log out" !== e.children)
                                    (0,
                                    w.b)().dispatch((0,
                                    D.qO)()),
                                    triggerPropsClick(!1);
                                else {
                                    triggerPropsClick(!1);
                                    return
                                }
                                let n = (0,
                                z.Tc)((0,
                                z.DW)(t));
                                null != n && (n.id === u.r5.SMCountrySelect.id ? (0,
                                w.b)().dispatch((0,
                                F.tQ)("MENU", null, null, 0)) : (0,
                                z.Mb)(n))
                            }))
                        }
                        ,
                        analytics: (0,
                        I.PC)("link", "find_an_ersal_location", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                })]
            })
              , renderPostponeTxnVerificationInfo = ()=>(0,
            a.jsxs)(c.JX, {
                className: Z().cancelTxnPopUpWrapper,
                children: [(0,
                a.jsx)("div", {
                    id: "label_postpone_verification_popup_title",
                    className: "m-pad-xxs-tp font-hs ".concat(Z().titleSecn),
                    "aria-label": (0,
                    d.M_y)().PostponeTransactionVerificationLeap.title,
                    children: (0,
                    d.M_y)().PostponeTransactionVerificationLeap.title
                }), (0,
                a.jsx)("div", {
                    id: "label_postpone_verification_popup_desc",
                    className: "m-pad-xxs-tp font-br ".concat(Z().descSecn),
                    "aria-label": (0,
                    d.M_y)().PostponeTransactionVerificationLeap.description,
                    children: (0,
                    d.M_y)().PostponeTransactionVerificationLeap.description
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-sm-tp ".concat(Z().primaryBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "btn_postpone_verification_popup_continue",
                        primary: !0,
                        ariaLabel: (0,
                        d.M_y)().PostponeTransactionVerificationLeap.confirm_button,
                        text: (0,
                        d.M_y)().PostponeTransactionVerificationLeap.confirm_button,
                        onClick: ()=>{
                            closeCustomPopUp({
                                type: "DISMISS_CUSTOM_POPUP"
                            })
                        }
                        ,
                        ampButtonAttrs: {
                            ctaAmplitudeName: "button-continue"
                        },
                        analytics: (0,
                        I.PC)("button", "no", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-xxs-tp ".concat(Z().linkBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "lbtn_postpone_verification_popup_cancel",
                        link: !0,
                        ariaLabel: (0,
                        d.M_y)().PostponeTransactionVerificationLeap.cancel_button,
                        text: (0,
                        d.M_y)().PostponeTransactionVerificationLeap.cancel_button,
                        onClick: ()=>{
                            Y.F.clearSendMoneyFlow(),
                            (0,
                            w.b)().dispatch((0,
                            D.qO)()),
                            closeCustomPopUp({
                                type: "DISMISS_CUSTOM_POPUP"
                            }),
                            triggerPropsClick(!1);
                            let e = (0,
                            z.Tc)((0,
                            z.DW)(t));
                            null != e && (0,
                            z.Mb)(e)
                        }
                        ,
                        analytics: (0,
                        I.PC)("link", "yes", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                })]
            })
              , renderCancelPickUpCashTxnInfo = ()=>(0,
            a.jsxs)(c.JX, {
                className: Z().cancelTxnPopUpWrapper,
                children: [(0,
                a.jsx)("div", {
                    id: "label_cancel_pickupcashtransaction_popup_title",
                    className: "m-pad-xxs-tp font-hs ".concat(Z().titleSecn),
                    "aria-label": (0,
                    d.M_y)().CancelPickUpCashTxn.title,
                    children: (0,
                    d.M_y)().CancelPickUpCashTxn.title
                }), (0,
                a.jsx)("div", {
                    id: "label_cancel_pickupcashtransaction_popup_desc",
                    className: "m-pad-xxs-tp font-br ".concat(Z().descSecn),
                    "aria-label": (0,
                    d.M_y)().CancelPickUpCashTxn.description,
                    children: (0,
                    d.M_y)().CancelPickUpCashTxn.description
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-sm-tp ".concat(Z().primaryBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "btn_cancel_pickupcashtransaction_popup_continue",
                        primary: !0,
                        ariaLabel: (0,
                        d.M_y)().CancelPickUpCashTxn.continue_button,
                        text: (0,
                        d.M_y)().CancelPickUpCashTxn.continue_button,
                        onClick: ()=>{
                            closeCustomPopUp({
                                type: "DISMISS_CUSTOM_POPUP"
                            })
                        }
                        ,
                        ampButtonAttrs: {
                            ctaAmplitudeName: "button-continue"
                        },
                        analytics: (0,
                        I.PC)("button", "continue", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-xxs-tp ".concat(Z().linkBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "lbtn_cancel_pickupcashtransaction_popup_cancel",
                        link: !0,
                        ariaLabel: (0,
                        d.M_y)().SendMoneyLeap.cancel_button,
                        text: (0,
                        d.M_y)().SendMoneyLeap.cancel_button,
                        onClick: ()=>{
                            (0,
                            w.b)().dispatch((0,
                            B.Ak)()),
                            closeCustomPopUp({
                                type: "DISMISS_CUSTOM_POPUP"
                            }),
                            triggerPropsClick(!1),
                            (0,
                            z.Mb)((0,
                            z.Tc)((0,
                            z.DW)(t)))
                        }
                        ,
                        analytics: (0,
                        I.PC)("link", "leave", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                })]
            })
              , renderCancelUDMFlow = ()=>(0,
            a.jsxs)(c.JX, {
                className: Z().cancelTxnPopUpWrapper,
                children: [(0,
                a.jsx)("div", {
                    className: Z().iconSecn,
                    children: (0,
                    a.jsx)(c.xP, {
                        id: "icon_cancel_transaction_popup",
                        name: "0055_alert",
                        size: 56,
                        color: _.Dt.alertSecondary
                    })
                }), (0,
                a.jsx)("div", {
                    id: "label_cancel_udmflow_popup_title",
                    className: "m-pad-xxs-tp font-hs ".concat(Z().titleSecn),
                    "aria-label": (0,
                    d.M_y)().CancelUpdateDeliveryMethod.title,
                    children: (0,
                    d.M_y)().CancelUpdateDeliveryMethod.title
                }), (0,
                a.jsx)("div", {
                    id: "label_cancel_udmflow_popup_desc",
                    className: "m-pad-xxs-tp font-br ".concat(Z().descSecn),
                    "aria-label": (0,
                    d.M_y)().CancelUpdateDeliveryMethod.description,
                    children: (0,
                    d.M_y)().CancelUpdateDeliveryMethod.description
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-sm-tp ".concat(Z().primaryBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "btn_cancel_pickupcashtransaction_popup_continue",
                        primary: !0,
                        ariaLabel: (0,
                        d.M_y)().CancelUpdateDeliveryMethod.confirm_button,
                        text: (0,
                        d.M_y)().CancelUpdateDeliveryMethod.confirm_button,
                        onClick: ()=>{
                            (0,
                            w.b)().dispatch((0,
                            B.Ak)()),
                            closeCustomPopUp({
                                type: "DISMISS_CUSTOM_POPUP"
                            }),
                            triggerPropsClick(!1),
                            (0,
                            z.Mb)((0,
                            z.Tc)((0,
                            z.DW)(t)))
                        }
                        ,
                        ampButtonAttrs: {
                            ctaAmplitudeName: "button-continue"
                        },
                        analytics: (0,
                        I.PC)("button", "continue", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                }), (0,
                a.jsx)("div", {
                    className: "m-pad-xxs-tp ".concat(Z().linkBtnSecn),
                    children: (0,
                    a.jsx)(c.u2, {
                        id: "lbtn_cancel_pickupcashtransaction_popup_cancel",
                        link: !0,
                        ariaLabel: (0,
                        d.M_y)().CancelUpdateDeliveryMethod.cancel_button,
                        text: (0,
                        d.M_y)().CancelUpdateDeliveryMethod.cancel_button,
                        onClick: ()=>{
                            closeCustomPopUp({
                                type: "DISMISS_CUSTOM_POPUP"
                            })
                        }
                        ,
                        analytics: (0,
                        I.PC)("link", "leave", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                    })
                })]
            })
              , renderCancelTxnInfo = ()=>{
                var n;
                let o = (0,
                w.b)().getState();
                return (0,
                a.jsx)(c.JX, {
                    className: Z().cancelTxnPopUpWrapper,
                    children: (0,
                    W.wh)() && (null == o ? void 0 : null === (n = o.cart) || void 0 === n ? void 0 : n.cartId) && (0,
                    W.d7)((0,
                    u.Ii)()) ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            id: "label_cancel_transaction_popup_title",
                            className: "m-pad-xxs-tp font-hs ".concat(Z().titleSecn),
                            "aria-label": (0,
                            j.j2)("ResumeTransfer.SMOPopup.title"),
                            children: (0,
                            j.j2)("ResumeTransfer.SMOPopup.title")
                        }), (0,
                        a.jsx)("div", {
                            id: "label_cancel_transaction_popup_desc",
                            className: "m-pad-xxs-tp font-br ".concat(Z().descSecn),
                            "aria-label": (0,
                            j.j2)("ResumeTransfer.SMOPopup.message"),
                            children: (0,
                            j.j2)("ResumeTransfer.SMOPopup.message")
                        }), (0,
                        a.jsx)("div", {
                            className: "m-pad-sm-tp ".concat(Z().primaryBtnSecn),
                            children: (0,
                            a.jsx)(c.u2, {
                                id: "btn_cancel_transaction_popup_continue",
                                primary: !0,
                                ariaLabel: (0,
                                j.j2)("SendMoneyEstimationLeap.PopupAndAction.continueTxt"),
                                text: (0,
                                j.j2)("ResumeTransfer.SMOPopup.primaryButton"),
                                onClick: ()=>{
                                    Y.F.clearSendMoneyFlow(),
                                    closeCustomPopUp({
                                        type: "DISMISS_CUSTOM_POPUP"
                                    })
                                }
                                ,
                                ampButtonAttrs: {
                                    ctaAmplitudeName: "button-complete-now"
                                },
                                analytics: (0,
                                I.PC)("button", "complete-now", "click"),
                                triggerEvents: e=>{
                                    (0,
                                    I.$C)((0,
                                    I.wu)(e))
                                }
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "m-pad-xxs-tp ".concat(Z().linkBtnSecn),
                            children: (0,
                            a.jsx)(c.u2, {
                                id: "lbtn_cancel_transaction_popup_cancel",
                                link: !0,
                                ariaLabel: (0,
                                j.j2)("SendMoneyEstimationLeap.PopupAndAction.cancel"),
                                text: (0,
                                j.j2)("ResumeTransfer.SMOPopup.secondaryButton"),
                                onClick: ()=>{
                                    Y.F.clearSendMoneyFlow(),
                                    (0,
                                    w.b)().dispatch((0,
                                    A.pI)(function() {
                                        if (closeCustomPopUp({
                                            type: "DISMISS_CUSTOM_POPUP"
                                        }),
                                        console.log("signout>>>>", "WUNavLink-callback"),
                                        "Log out" !== e.children)
                                            (0,
                                            w.b)().dispatch((0,
                                            D.qO)()),
                                            triggerPropsClick(!1);
                                        else {
                                            triggerPropsClick(!1);
                                            return
                                        }
                                        let n = (0,
                                        z.Tc)((0,
                                        z.DW)(t));
                                        null != n && (n.id === u.r5.SMCountrySelect.id ? (0,
                                        w.b)().dispatch((0,
                                        F.tQ)("MENU", null, null, 0)) : (0,
                                        z.Mb)(n))
                                    }))
                                }
                                ,
                                analytics: (0,
                                I.PC)("link", "save-for-later", "click"),
                                triggerEvents: e=>{
                                    (0,
                                    I.$C)((0,
                                    I.wu)(e))
                                }
                            })
                        })]
                    }) : (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            id: "label_cancel_transaction_popup_title",
                            className: "m-pad-xxs-tp font-hs ".concat(Z().titleSecn),
                            "aria-label": (0,
                            d.M_y)().SendMoneyLeap.title,
                            children: (0,
                            d.M_y)().SendMoneyLeap.title
                        }), (0,
                        a.jsx)("div", {
                            id: "label_cancel_transaction_popup_desc",
                            className: "m-pad-xxs-tp font-br ".concat(Z().descSecn),
                            "aria-label": (0,
                            d.M_y)().SendMoneyLeap.description,
                            children: (0,
                            d.M_y)().SendMoneyLeap.description
                        }), (0,
                        a.jsx)("div", {
                            className: "m-pad-sm-tp ".concat(Z().primaryBtnSecn),
                            children: (0,
                            a.jsx)(c.u2, {
                                id: "btn_cancel_transaction_popup_continue",
                                primary: !0,
                                ariaLabel: (0,
                                j.j2)("SendMoneyEstimationLeap.PopupAndAction.continueTxt"),
                                text: (0,
                                d.M_y)().SendMoneyLeap.continue_button,
                                onClick: ()=>{
                                    closeCustomPopUp({
                                        type: "DISMISS_CUSTOM_POPUP"
                                    })
                                }
                                ,
                                ampButtonAttrs: {
                                    ctaAmplitudeName: "button-continue"
                                },
                                analytics: (0,
                                I.PC)("button", "continue", "click"),
                                triggerEvents: e=>{
                                    (0,
                                    I.$C)((0,
                                    I.wu)(e))
                                }
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "m-pad-xxs-tp ".concat(Z().linkBtnSecn),
                            children: (0,
                            a.jsx)(c.u2, {
                                id: "lbtn_cancel_transaction_popup_cancel",
                                link: !0,
                                ariaLabel: (0,
                                j.j2)("SendMoneyEstimationLeap.PopupAndAction.cancel"),
                                text: (0,
                                d.M_y)().SendMoneyLeap.cancel_button,
                                onClick: ()=>{
                                    var n, a, o, i, l, r;
                                    let s = (0,
                                    w.b)().getState();
                                    if (Y.F.clearSendMoneyFlow(),
                                    "Log out" === e.children || (null == e ? void 0 : null === (n = e.data) || void 0 === n ? void 0 : n.nameMandatory) || (0,
                                    w.b)().dispatch((0,
                                    D.qO)()),
                                    closeCustomPopUp({
                                        type: "DISMISS_CUSTOM_POPUP"
                                    }),
                                    triggerPropsClick(!1),
                                    (null == e ? void 0 : null === (a = e.data) || void 0 === a ? void 0 : a.nameMandatory) && !(0,
                                    d.oYg)(null === (o = s.digitalCustomerProfile) || void 0 === o ? void 0 : o.name)) {
                                        if ((0,
                                        v.C5)()) {
                                            if (null == e ? void 0 : null === (i = e.data) || void 0 === i ? void 0 : i.nameMandatoryRedirectTo) {
                                                let n = (0,
                                                d.tPI)(null == e ? void 0 : null === (l = e.data) || void 0 === l ? void 0 : l.nameMandatoryRedirectTo, null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : r.urlformat);
                                                window.location.href = n
                                            } else
                                                (0,
                                                z.Mb)(u.r5.EditPersonalDetails)
                                        }
                                    } else {
                                        let n = (0,
                                        z.Tc)((0,
                                        z.DW)(t));
                                        if (n)
                                            n.id === u.r5.SMCountrySelect.id ? (0,
                                            w.b)().dispatch((0,
                                            F.tQ)("MENU", null, null, 0)) : (0,
                                            z.Mb)(n);
                                        else if ((0,
                                        v.C5)() && (null == e ? void 0 : e.path) != "#") {
                                            let e = (0,
                                            d.tPI)("", "", t);
                                            window.location.href = e
                                        } else
                                            (0,
                                            z.Mb)(n)
                                    }
                                }
                                ,
                                analytics: (0,
                                I.PC)("link", "leave", "click"),
                                triggerEvents: e=>{
                                    (0,
                                    I.$C)((0,
                                    I.wu)(e))
                                }
                            })
                        })]
                    })
                })
            }
              , getAbandonTxnAnalyticsId = ()=>(0,
            W.wh)() && (0,
            W.d7)((0,
            u.Ii)()) ? "postpone-transfer" : "cancel-transaction"
              , closeCustomPopUp = e=>{
                n({
                    type: "DISMISS_CUSTOM_POPUP",
                    action: e
                })
            }
              , triggerPropsClick = function() {
                let n = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0]
                  , t = !0;
                return e.onClick && "function" == typeof e.onClick && (t = e.onClick(n)),
                e.triggerEvents && "function" == typeof e.triggerEvents && e.analytics && e.triggerEvents(e),
                t
            }
              , l = (0,
            d.FtB)("externalRedirect", e.cookies) || !1
              , _renderNavigation = ()=>(0,
            a.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center"
                },
                children: [e.icon ? (0,
                a.jsx)("div", {
                    className: e.iconClassName,
                    children: (0,
                    a.jsx)(c.xP, {
                        name: e.icon,
                        style: {
                            alignSelf: "center"
                        },
                        color: e.iconColor,
                        size: 24
                    })
                }) : e.typeOfIcon && (0,
                a.jsx)("div", {
                    className: e.iconClassName,
                    children: (0,
                    a.jsx)(c.qZ, {
                        name: e.nameOfIcon,
                        size: "18"
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "font-bc-01-regular",
                    style: {
                        flex: 1
                    },
                    children: [e.children, " "]
                })]
            });
            return (0,
            a.jsx)(a.Fragment, {
                children: !0 === l || e.redirectToR3 ? (0,
                a.jsx)("a", {
                    id: e.id,
                    onClick: n=>{
                        e.redirectToR3 && (0,
                        V.t_)("redirectUrlAfterLogin", t),
                        handleClick(n)
                    }
                    ,
                    href: t,
                    target: e.target,
                    children: _renderNavigation()
                }) : (0,
                a.jsx)(U(), {
                    href: t,
                    shallow: !0,
                    id: e.id,
                    onClick: e=>{
                        (0,
                        V.pC)("redirectUrlAfterLogin"),
                        handleClick(e)
                    }
                    ,
                    target: e.target,
                    children: _renderNavigation()
                })
            })
        }
          , navigation_HeaderButton = e=>{
            var n;
            function setSelectedLangValue() {
                return e.selectedFieldIcon && e.isSelected
            }
            let t = null === (n = (0,
            z.mN)()) || void 0 === n ? void 0 : n.asPath;
            return t = (0,
            f.AK)(t) ? t.replace("/global-services", "") : t,
            (0,
            a.jsxs)("div", {
                id: e.id ? e.id : e.className,
                className: setSelectedLangValue() ? "".concat(e.languageClassName, "  ").concat(e.className) : e.className,
                children: [(0,
                a.jsxs)("div", {
                    className: e.contentClassName && e.contentClassName,
                    children: [(0,
                    a.jsx)(navigation_WUNavLink, {
                        data: e.data,
                        cookies: e.cookies,
                        deleteCookie: e.deleteCookie,
                        redirectToR3: e.redirectToR3,
                        icon: e.icon,
                        iconColor: e.iconColor,
                        typeOfIcon: e.typeOfIcon,
                        nameOfIcon: e.nameOfIcon,
                        iconClassName: e.iconClassName,
                        id: e.id ? "link_" + e.id : e.className.replaceAll(" ", "-"),
                        className: e.linkClassName,
                        style: e.linkStyle,
                        path: e.path && "#" !== e.path ? e.path : t,
                        onClick: function() {
                            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.onClickParam
                              , t = !0;
                            return e.onClick && "function" == typeof e.onClick && (t = e.onClick(n)),
                            e.triggerEvents && "function" == typeof e.triggerEvents && e.analytics && e.triggerEvents(e),
                            t
                        },
                        doNotPrompt: e.doNotPrompt,
                        target: e.targetWindow,
                        children: e.label
                    }), (0,
                    a.jsx)("div", {
                        className: e.subcontentClassName,
                        children: (0,
                        a.jsx)("span", {
                            style: e.subLabelStyle,
                            children: e.subLabel
                        })
                    })]
                }), setSelectedLangValue() ? (0,
                a.jsx)("div", {
                    id: e.id ? "icon_selected_" + e.id : e.className,
                    className: e.iconClassName,
                    children: (0,
                    a.jsx)(c.xP, {
                        name: e.selectedFieldIcon,
                        style: {
                            alignSelf: "center"
                        },
                        color: e.iconColor,
                        size: 24
                    })
                }) : (0,
                a.jsx)(a.Fragment, {})]
            })
        }
          , $ = t(11155)
          , K = t(84736)
          , G = t(4210)
          , X = t(17726)
          , J = t(34779)
          , Q = t(68585)
          , ee = t(61150)
          , en = t(59175);
        function BeforePayToastMsgStatus(e) {
            let n = (0,
            o.useRef)(null)
              , [t,i] = (0,
            o.useState)("");
            function showToastMsg() {
                try {
                    let e = JSON.parse(localStorage.getItem((0,
                    G.hD)()))
                      , t = (0,
                    G.g_)(e.status, E.default.BEFOREPAY.toast);
                    i(e.status),
                    n.current.showBanner({
                        message: t.msg,
                        type: t.type
                    })
                } catch (e) {}
            }
            return (0,
            o.useEffect)(()=>(window.addEventListener(E.default.BEFOREPAY.beforePayToastEvent, showToastMsg),
            ()=>{
                window.removeEventListener(E.default.BEFOREPAY.beforePayToastEvent, showToastMsg)
            }
            ), []),
            t ? (0,
            a.jsx)("div", {
                className: "m-mrg-xs-tb",
                children: (0,
                a.jsx)(en.Z, {
                    ref: n,
                    id: "NotificationBanner",
                    showCloseIcon: !0,
                    ishideInfoIcon: !0,
                    toastBanner: !0,
                    onHide: ()=>{
                        i("")
                    }
                    ,
                    message: "",
                    bannerTimeOut: E.default.BEFOREPAY.toastDelayWeb
                })
            }) : (0,
            a.jsx)(a.Fragment, {})
        }
        var et = t(37453)
          , ea = t(39082)
          , eo = t(1400)
          , ei = t(39865);
        let el = {
            PROGRESSIVE_BAR_MENU_OPTIONS: [{
                key: "receiver",
                label: "ProgressiveBar.menu_text_receiver_web",
                path: f.ZP.RECEIVERS,
                classNames: "progress-bar-options-item",
                testId: "progress_bar_menu_receiver",
                analyticsId: "progress-bar-menu-receiver",
                pages: (0,
                q.jd)(),
                payInOptionsForSkipStep: []
            }, {
                key: "payment",
                label: "ProgressiveBar.menu_text_payment_web",
                path: f.ZP.PAYMENTS,
                classNames: "progress-bar-options-item",
                testId: "progress_bar_menu_payment",
                analyticsId: "progress-bar-menu-payment",
                pages: (0,
                q.OO)(),
                payInOptionsForSkipStep: [E.default.SMOptions.PAYMENT_DESC_FOR_CODES.CA, E.default.SMOptions.PAYMENT_DESC_FOR_CODES.SF, E.default.SMOptions.PAYMENT_DESC_FOR_CODES.EB, E.default.SMOptions.PAYMENT_DESC_FOR_CODES.GP, E.default.SMOptions.PAYMENT_DESC_FOR_CODES.PL]
            }, {
                key: "review",
                label: "ProgressiveBar.menu_text_review_web",
                path: f.ZP.REVIEW,
                classNames: "progress-bar-options-item",
                testId: "progress_bar_menu_review",
                analyticsId: "progress-bar-menu-review",
                pages: [f.ZP.REVIEW],
                payInOptionsForSkipStep: []
            }, {
                key: "receipt",
                label: "ProgressiveBar.menu_text_receipt_web",
                path: f.ZP.RECEIPT,
                classNames: "progress-bar-options-item",
                testId: "progress_bar_menu_receipt",
                analyticsId: "progress-bar-menu-receipt",
                pages: [f.ZP.RECEIPT],
                payInOptionsForSkipStep: []
            }]
        };
        var er = t(56136)
          , es = t.n(er)
          , ec = (0,
        o.memo)(()=>{
            let e = el.PROGRESSIVE_BAR_MENU_OPTIONS
              , [n,t] = (0,
            o.useState)(0)
              , [i,l] = (0,
            o.useState)(-1);
            (0,
            o.useEffect)(()=>{
                var n, a, o, i, r, s;
                let c = null === (o = (0,
                ei.bh)()) || void 0 === o ? void 0 : null === (a = o.getState()) || void 0 === a ? void 0 : null === (n = a.commonReducers) || void 0 === n ? void 0 : n.progressiveBarCurrentIndex
                  , d = null === (s = (0,
                ei.bh)()) || void 0 === s ? void 0 : null === (r = s.getState()) || void 0 === r ? void 0 : null === (i = r.sendMoney) || void 0 === i ? void 0 : i.selectedPayInType;
                t(c);
                let u = location.pathname
                  , p = e.findIndex(e=>e.pages.find(e=>(0,
                f.nV)(e) === u));
                -1 !== p && (t(p),
                (0,
                ei.bh)().dispatch((0,
                ea.O6)(p)));
                let m = e.findIndex(e=>e.payInOptionsForSkipStep.find(e=>e === d));
                l(m)
            }
            , []);
            let handleClick = (e,n)=>{
                (0,
                I.$C)({
                    analytics: (0,
                    v.PC)("link", n, "click")
                }),
                (0,
                z.Mb)((0,
                z.Tc)(e), !0, !1)
            }
            ;
            return (0,
            a.jsx)(a.Fragment, {
                children: (0,
                a.jsx)("div", {
                    className: es()["progress-bar-web-main-container"],
                    children: (0,
                    a.jsxs)("div", {
                        className: es()["progress-bar-web"],
                        children: [(0,
                        a.jsx)("div", {
                            className: es()["progress-extra"]
                        }), (0,
                        a.jsxs)("ul", {
                            className: "font-cl flex ".concat(es()["progress-bar-options"], " ").concat(es()["list-style-ul"]),
                            children: [(0,
                            a.jsx)("li", {
                                id: "progress_bar_menu_logo",
                                className: "flex1 m-pad-xs ".concat(es()["progress-bar-options-item"], " ").concat(es().selectedLi),
                                onClick: ()=>handleClick(f.ZP.HISTORY, "progress-bar-menu-home")
                            }), e.map((e,t)=>{
                                if (i !== t)
                                    return (0,
                                    a.jsx)("li", {
                                        id: e.testId,
                                        onClick: ()=>n > t && handleClick(e.path, e.analyticsId),
                                        className: "flex1 m-pad-xs ".concat(es()[e.classNames], " ").concat(n === t && es()["selected-steps"], " ").concat(n > t && es().completedsteps),
                                        children: (0,
                                        eo.j2)(e.label)
                                    }, t)
                            }
                            )]
                        }), (0,
                        a.jsx)("div", {})]
                    })
                })
            })
        }
        );
        let ed = o.memo(e=>{
            var n, t, i, l, r, s, u;
            let[p,m] = (0,
            o.useState)(!1)
              , closeMobileMenu = ()=>m(!p)
              , g = (0,
            o.useRef)(null)
              , [y,x] = (0,
            o.useState)(!1)
              , [P,C] = (0,
            o.useState)(!1)
              , S = (0,
            o.useRef)(null)
              , k = ""
              , T = (0,
            M.I0)()
              , handleClickOutside = e=>{
                var n;
                (null === (n = g.current) || void 0 === n ? void 0 : n.contains(e.target)) || m(!1)
            }
              , [R,U] = (0,
            o.useState)(!1)
              , [D,B] = (0,
            o.useState)(!0)
              , [F,A] = (0,
            o.useState)(!1)
              , [H,Z] = (0,
            o.useState)(!1)
              , [Y,en] = (0,
            o.useState)({
                first_name: "",
                last_name: "",
                middle_name: ""
            })
              , [ea,eo] = (0,
            o.useState)(k)
              , [ei,el] = (0,
            o.useState)(0)
              , [er,es] = (0,
            o.useState)(!1)
              , [ed,eu] = (0,
            o.useState)(!1)
              , [ep,em] = (0,
            o.useState)(null)
              , [eg,ev] = (0,
            o.useState)(e.cookies || (0,
            V.RV)())
              , e_ = !1;
            !e.cookies || e.cookies && Array.isArray(e.cookies) ? (e_ = "true" === (0,
            V.ej)("loggedIn"),
            k = e.customerDisplayName) : e_ = e.cookies && e.cookies.loggedIn && "true" === e.cookies.loggedIn;
            let[ef,eh] = (0,
            o.useState)(e_);
            (0,
            o.useEffect)(()=>(eh(e.isLoggedIn),
            en(e.customerName),
            eo(e.customerDisplayName),
            document.addEventListener("mousedown", handleClickOutside),
            Z(isMobileView()),
            eu(!0),
            ()=>document.removeEventListener("mousedown", handleClickOutside)), []),
            (0,
            o.useEffect)(()=>{
                console.log("Fx alert, initial call", (0,
                d.AEX)()),
                (0,
                d.AEX)() ? C(!0) : setTimeout(()=>{
                    console.log("Fx alert, after timeout", (0,
                    d.AEX)()),
                    C((0,
                    d.AEX)())
                }
                , 5e3)
            }
            , []),
            (0,
            o.useEffect)(()=>{
                eh(e.isLoggedIn),
                en(e.customerName),
                eo(e.customerDisplayName),
                el(e.myWUPoints),
                em[e.evergageCampaign],
                es(e.isUserVerified),
                ev(e.cookies)
            }
            , [e.isLoggedIn, e.customerName, e.customerDisplayName, e.myWUPoints, e.evergageCampaign, e.isUserVerified, e.cookies]);
            let eb = (0,
            d.FtB)("menuItemLoggedIn", eg)
              , ey = (0,
            d.FtB)("menuItemLoggedOut", eg)
              , ex = (0,
            d.FtB)("langItemList", eg)
              , eP = (null == eb ? void 0 : null === (n = eb.filter(e=>(null == e ? void 0 : e.key) === "profile")) || void 0 === n ? void 0 : n[0]) || {}
              , beforePayListener = n=>{
                var t, a, o, i, l, r, s, c, u, p, m, g;
                let v = null === (a = (0,
                K.In)()) || void 0 === a ? void 0 : null === (t = a.featuresEnabled) || void 0 === t ? void 0 : t.beforePayConfig;
                if (null == n ? void 0 : n.url.includes(null == v ? void 0 : null === (l = v.queryParams) || void 0 === l ? void 0 : null === (i = l.WEB) || void 0 === i ? void 0 : null === (o = i.redirectUrl) || void 0 === o ? void 0 : o.endpoint)) {
                    let n = localStorage.getItem(E.default.BEFOREPAY.beforePayStatus);
                    if (n) {
                        if (ef) {
                            let n = "/" + (null === (r = (0,
                            d.RLd)()) || void 0 === r ? void 0 : r.toLowerCase()) + "/" + (null === (s = e.langCode) || void 0 === s ? void 0 : s.toLowerCase()) + "/" + (null === (p = (0,
                            w.b)()) || void 0 === p ? void 0 : null === (u = p.getState()) || void 0 === u ? void 0 : null === (c = u.platform) || void 0 === c ? void 0 : c.toLowerCase()) + "/"
                              , t = n + f.ZP.SMESTIMATEDETAILS
                              , a = n + f.ZP.HISTORY;
                            if ((null === (g = window) || void 0 === g ? void 0 : null === (m = g.location) || void 0 === m ? void 0 : m.pathname) === t || window.location.pathname === a) {
                                let e = new Event(E.default.BEFOREPAY.beforePayCustomEvent);
                                window.dispatchEvent(e)
                            } else {
                                let e = new Event(E.default.BEFOREPAY.beforePayToastEvent);
                                window.dispatchEvent(e)
                            }
                        }
                        localStorage.removeItem(E.default.BEFOREPAY.beforePayStatus);
                        let n = JSON.parse(localStorage.getItem((0,
                        G.hD)()))
                          , t = {
                            third_party_service: "BeforePay"
                        };
                        (null == n ? void 0 : n.status) != null && (t.status_received = null == n ? void 0 : n.status),
                        (null == n ? void 0 : n.status) === "success" && (null == n ? void 0 : n.amount) != null && (t.beforepay_amount = null == n ? void 0 : n.amount),
                        Q.E.logEvent("redirected_from", t)
                    }
                }
            }
              , isProgressiveBarEnabled = ()=>{
                var n, t, a;
                let o = (null == ep ? void 0 : null === (n = ep.evergageCampaignData) || void 0 === n ? void 0 : n.isProgressiveBarEnabled) || !1
                  , i = null === (a = (0,
                d.oqt)()) || void 0 === a ? void 0 : null === (t = a.progressiveBarOptions) || void 0 === t ? void 0 : t.isEnabled
                  , l = (o || i) && !e.partnerID;
                return l
            }
            ;
            function checkAndNavigateToSM(e) {
                var n, t, a, o, i, l, r, s;
                let c = null === (n = (0,
                j.j2)("Menu.beforePay")) || void 0 === n ? void 0 : n.toLowerCase();
                if ((null == e ? void 0 : null === (t = e.path) || void 0 === t ? void 0 : t.toLowerCase()) == c) {
                    let e = null === (l = (0,
                    K.In)()) || void 0 === l ? void 0 : null === (i = l.featuresEnabled) || void 0 === i ? void 0 : i.beforePayConfig
                      , n = (0,
                    d.qe$)() ? e.beforePayUrls.endpoint_prod : e.beforePayUrls.endpoint_staging;
                    n = (0,
                    G.rh)(n);
                    let t = e.queryParams.WEB
                      , a = Object.keys(t)
                      , o = (0,
                    G.XP)(a, t);
                    window.open("".concat(n).concat(o)),
                    Q.E.logEvent("redirected_to", {
                        third_party_service: "BeforePay",
                        third_party_URL: "".concat(n).concat(o)
                    }),
                    Q.E.logEvent("clicked_menu", {
                        element_name: "menu-beforepay"
                    });
                    return
                }
                if ((null == e ? void 0 : null === (a = e.path) || void 0 === a ? void 0 : a.toLowerCase()) == "ding_topup") {
                    let e = null === (s = window) || void 0 === s ? void 0 : null === (r = s.location) || void 0 === r ? void 0 : r.href;
                    ee.s.setSessionStorage("dingReturnURL", e),
                    (0,
                    et.$J)({
                        type: "DING_TOPUP_CLICK"
                    });
                    return
                }
                if ((0,
                d.OC6)("menuCommon", "enableFindLocationUrl") && (null == e ? void 0 : null === (o = e.path) || void 0 === o ? void 0 : o.toLowerCase()) == "find_agent_html") {
                    window.open((0,
                    j.j2)("Menu.findLocationUrl"));
                    return
                }
                if ((null == e ? void 0 : e.key) == E.default.RAF) {
                    (0,
                    d.OC6)("referAFriend", "noConsentPopup") ? (0,
                    et.$J)({
                        type: "GOTO_RAF_SCREEN"
                    }) : (0,
                    et.$J)({
                        type: "SHOW_RAF_REFERRER_POPUP"
                    });
                    return
                }
                return !0
            }
            (0,
            o.useEffect)(()=>{
                let e = location ? location.pathname : "";
                isProgressiveBarEnabled() && (0,
                q.RO)(e) ? B(!1) : B(!0),
                isProgressiveBarEnabled() && (0,
                q.RR)(e) ? A(!0) : A(!1)
            }
            , []),
            (0,
            o.useEffect)(()=>(window.addEventListener("storage", beforePayListener),
            ()=>{
                window.removeEventListener("storage", beforePayListener)
            }
            ), []);
            let pathHandler = (e,n,t)=>{
                if (n) {
                    let n = (0,
                    J.$w)() ? (0,
                    d.zoz)(f.ZP[e]) : (0,
                    f.nV)(f.ZP[e]);
                    return t && (n = (0,
                    d.fWI)(n, t)),
                    n
                }
                {
                    var a, o;
                    let n = (0,
                    d.RLd)()
                      , t = null === (o = (0,
                    d.qN1)()) || void 0 === o ? void 0 : null === (a = o.sender_country_config[n]) || void 0 === a ? void 0 : a.url;
                    return t && t[e] ? t[e] : e
                }
            }
              , signOut = function() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                return T({
                    type: "WEB_LOGOUT",
                    showPopUp: e
                }),
                !1
            }
              , isMobileView = ()=>{
                var e;
                return (null === (e = window) || void 0 === e ? void 0 : e.innerWidth) <= 1024
            }
              , menuItemsSequence = e=>{
                var n;
                let t = {
                    topMenu: null == e ? void 0 : e.filter(e=>null == e ? void 0 : e.getTransactionalMenu),
                    menu: null == e ? void 0 : e.filter(e=>!(null == e ? void 0 : e.getTransactionalMenu))
                };
                return {
                    menu: [...t.topMenu, ...t.menu],
                    topMenuLength: null == t ? void 0 : null === (n = t.topMenu) || void 0 === n ? void 0 : n.length
                }
            }
              , isKYCVerificationPage = e=>{
                let n = [f.ZP.KYCOPTIONS, f.ZP.KYCDETAILS, f.ZP.DUCDOCUPLOADTOOL, f.ZP.KYCDOCUPLOAD, f.ZP.KYCPINVERIFICATION, f.ZP.SKCDOCUPLOADTOOL, f.ZP.SMCOMPLIANCE]
                  , t = !1;
                for (let a of n)
                    if ((0,
                    f.nV)(a) === e) {
                        t = !0;
                        break
                    }
                return t
            }
              , getMenuItemLabel = e=>"manageReminders" !== e.key ? (0,
            j.j2)(e.label) : (0,
            d.p$3)() && (0,
            d.upL)() ? (0,
            j.j2)("Menu.menu_text_manage_autoTransfer_reminder") : (0,
            d.p$3)() ? (0,
            j.j2)(e.label) : (0,
            d.upL)() ? (0,
            j.j2)("Menu.menu_text_manage_autoTransfer") : (0,
            j.j2)(e.label)
              , getAnalyticId = e=>"manageReminders" !== e.key ? e.analyticsId : (0,
            d.p$3)() && (0,
            d.upL)() ? "menu-manage-transfer-reminder" : (0,
            d.upL)() ? "menu-manage-transfer" : (0,
            d.p$3)() ? "menu-manage-reminder" : void 0
              , getTestId = e=>"manageReminders" !== e.key ? e.testId : (0,
            d.p$3)() && (0,
            d.upL)() ? "menu_manage_transfer_reminder" : (0,
            d.upL)() ? "menu_manage_transfer" : (0,
            d.p$3)() ? "menu_manage_reminder" : void 0
              , customizeNTUrl = n=>{
                var t, a, o, i, l;
                if ("SMCOUNTRYSELECT" === n.path) {
                    let n = (null === (t = (0,
                    d.oqt)()) || void 0 === t ? void 0 : t.sendMoneyURL) ? (0,
                    d.oqt)().sendMoneyURL : "send-money.html";
                    return "".concat((0,
                    d.Y9_)().allHosts.PROD_Host).concat(null === (a = (0,
                    d.RLd)()) || void 0 === a ? void 0 : a.toLowerCase(), "/").concat(null === (o = e.langCode) || void 0 === o ? void 0 : o.toLowerCase(), "/").concat(n)
                }
                if ("HELP" === n.path && !(0,
                d.qAh)((0,
                d.RLd)()).helpshifturl)
                    return "".concat((0,
                    d.Y9_)().allHosts.PROD_Host).concat(null === (i = (0,
                    d.RLd)()) || void 0 === i ? void 0 : i.toLowerCase(), "/").concat(null === (l = e.langCode) || void 0 === l ? void 0 : l.toLowerCase(), "/frequently-asked-questions.html")
            }
              , getFinalPath = e=>{
                if (e.isFullRedirectionURL) {
                    if ((null == e ? void 0 : e.path) === "R3_US_HELP") {
                        var n, t, a, o;
                        let e = null === (o = (0,
                        d.qN1)()) || void 0 === o ? void 0 : null === (a = o.sender_country_config) || void 0 === a ? void 0 : null === (t = a[(0,
                        d.RLd)()]) || void 0 === t ? void 0 : null === (n = t.url) || void 0 === n ? void 0 : n.helpCenter;
                        return e
                    }
                    return e.path
                }
                return void 0 != e.urlformat && null != e.urlformat ? !0 == e.globalService ? (0,
                f.Dt)(f.ZP[e.path], !0) : (0,
                f.vV)(f.ZP[e.path], e.urlformat) : (0,
                d.kar)() && customizeNTUrl(e) ? customizeNTUrl(e) : !0 == e.globalService ? (0,
                f.Dt)(f.ZP[e.path]) : pathHandler(e.path, !e.targetWindow, e.queryParam)
            }
              , onHeaderClick = ()=>(Q.E.logEvent("clicked_link", {
                element_name: "wu-logo"
            }),
            (0,
            J.$w)() ? window.location.href = (0,
            d.zoz)() : window.location.href = getHeaderLogoUrl(),
            !0)
              , eC = null !== (t = (0,
            d.oqt)()) && void 0 !== t && !!t.showECOPartnerLogo
              , getHeaderLogoUrl = ()=>{
                var n, t, a, o, i, l, r, s;
                let c = "";
                if (e.ecoFlow)
                    c = (0,
                    d.mxy)() ? (0,
                    d.v8T)("eco", "-".concat(e.ecoPartner)) + "/" + f.ZP.LANDING_LOOKUP : (0,
                    f.nV)(f.ZP.TERMSCONDITIONS);
                else if (e.partnerID && -1 !== E.default.AFFILIATE_PARTNERS.indexOf(e.partnerID)) {
                    let n = null === (l = (0,
                    d.oqt)()) || void 0 === l ? void 0 : null === (i = l.extendedConfiguration) || void 0 === i ? void 0 : i.returnurl[null === (o = e.langCode) || void 0 === o ? void 0 : o.toLowerCase()];
                    c = (null === (s = (0,
                    w.b)().getState()) || void 0 === s ? void 0 : null === (r = s.loginSuccess) || void 0 === r ? void 0 : r.loggedIn) ? (0,
                    f.nV)(f.ZP.HISTORY) : n && 0 != n.length ? n : (0,
                    f.nV)(f.ZP.SMCOUNTRYSELECT)
                } else
                    c = function() {
                        var n, t, a, o, i, l, r, s, c, u;
                        console.log("getHomeUrl", null === (n = (0,
                        d.RLd)()) || void 0 === n ? void 0 : n.toLowerCase());
                        let p = (0,
                        d.Y9_)()
                          , m = !1
                          , g = "https://" + e.host;
                        return (window.location && (g = (null === (o = window) || void 0 === o ? void 0 : null === (a = o.location) || void 0 === a ? void 0 : a.protocol) + "//" + (null === (l = window) || void 0 === l ? void 0 : null === (i = l.location) || void 0 === i ? void 0 : i.host)),
                        console.info("props.host:", e.host),
                        null == p || null === (t = p.vulcanRedirectionHosts) || void 0 === t || t.forEach(e=>{
                            g.includes(e) && (m = !0)
                        }
                        ),
                        console.info("isProdEnvironment:", (0,
                        d.qe$)()),
                        ef) ? (0,
                        f.nV)(f.ZP.SMCOUNTRYSELECT) : (0,
                        d.qe$)() ? "/" + (null === (r = e.countryCode) || void 0 === r ? void 0 : r.toLowerCase()) + "/" + (null === (s = e.langCode) || void 0 === s ? void 0 : s.toLowerCase()) + "/home.html" : m ? "/" + (null === (c = e.countryCode) || void 0 === c ? void 0 : c.toLowerCase()) + "/" + (null === (u = e.langCode) || void 0 === u ? void 0 : u.toLowerCase()) + "/home.html" : (0,
                        f.nV)(f.ZP.HOME)
                    }();
                return (null === (n = (0,
                d.oqt)()) || void 0 === n ? void 0 : n.redirectToHistoryOnWULogoClick) && ef && (null === (a = (0,
                w.b)()) || void 0 === a ? void 0 : null === (t = a.getState()) || void 0 === t ? void 0 : t.transactionCount) > 0 && (c = (0,
                f.nV)(f.ZP.HISTORY)),
                c
            }
              , HeaderLogo = ()=>{
                var n, t;
                let[i,l] = (0,
                o.useState)(!1)
                  , [r,s] = (0,
                o.useState)("https://westernunion.com")
                  , [u,p] = (0,
                o.useState)(!1)
                  , [m,g] = (0,
                o.useState)(!1);
                if ((0,
                o.useEffect)(()=>{
                    navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && l(!0),
                    p((0,
                    d.PSi)() && !0),
                    g((0,
                    h.Mq)()),
                    s(getHeaderLogoUrl)
                }
                , []),
                ek)
                    return null;
                let f = null === (t = (0,
                d.oqt)()) || void 0 === t ? void 0 : null === (n = t.extendedConfiguration) || void 0 === n ? void 0 : n.imagesBasePath
                  , b = e.partnerID && -1 !== E.default.AFFILIATE_PARTNERS.indexOf(e.partnerID) ? O()["logo-small-hosted-partner"] : ""
                  , y = e.partnerID && -1 !== E.default.AFFILIATE_PARTNERS.indexOf(e.partnerID) ? O()["logo-hosted-partner"] : O().logo;
                return (0,
                a.jsxs)("div", {
                    className: "".concat(u && m ? "flex ai-ctr rsp-mrg-xxs-lt" : O()["logo-margin"], " ").concat(y),
                    style: {
                        backgroundColor: _.Dt.containerBgTertiary
                    },
                    children: [(0,
                    a.jsx)("a", {
                        href: r,
                        className: "flex ai-ctr ".concat(O()["logo-big"]),
                        onClick: onHeaderClick,
                        children: (0,
                        a.jsx)(c.qZ, {
                            context: (0,
                            v.yY)().CONTEXT,
                            name: "logo-big",
                            imgClassName: O().s38,
                            width: "100%",
                            style: i ? {
                                height: "48px"
                            } : eC ? {
                                maxWidth: "300px"
                            } : void 0,
                            wrapperStyle: i ? {
                                alignItems: "center"
                            } : void 0,
                            basePath: f
                        })
                    }), (0,
                    a.jsx)("a", {
                        href: r,
                        className: O()["logo-medium"],
                        onClick: onHeaderClick,
                        children: (0,
                        a.jsx)(c.qZ, {
                            context: (0,
                            v.yY)().CONTEXT,
                            name: "logo-big",
                            imgClassName: O().s38,
                            width: "100%",
                            style: i ? {
                                height: "48px"
                            } : void 0,
                            wrapperStyle: i ? {
                                alignItems: "center"
                            } : void 0
                        })
                    }), (0,
                    a.jsx)("a", {
                        href: r,
                        className: "".concat(O()["logo-small"], " ").concat(O()[e.ecoPartner], " ").concat(b),
                        onClick: onHeaderClick,
                        children: (0,
                        a.jsx)(c.qZ, {
                            context: (0,
                            v.yY)().CONTEXT,
                            name: "logo-small",
                            imgClassName: O().s38,
                            width: "100%",
                            style: i ? {
                                height: "48px"
                            } : eC ? {
                                maxWidth: "150px"
                            } : void 0,
                            wrapperStyle: i ? {
                                alignItems: "center"
                            } : void 0,
                            basePath: f
                        })
                    })]
                })
            }
              , getHeaderLoggedOutButtons = e=>null == e ? void 0 : e.map((e,n)=>(0,
            a.jsx)(navigation_HeaderButton, {
                id: "header_" + e.testId,
                icon: e.iconName,
                className: e.navStyle ? O()[e.navStyle] : e.loginNavStyle,
                path: e.isFullRedirectionURL ? e.path : (0,
                f.nV)(f.ZP[e.path]),
                label: (0,
                j.j2)(e.label),
                contentClassName: O()[e.navStyleContent],
                linkStyle: {
                    color: _.Dt.actionBgPrimary
                },
                analytics: (0,
                I.PC)("link", e.analyticsId, "click"),
                triggerEvents: e=>{
                    (0,
                    I.$C)((0,
                    I.wu)(e))
                }
                ,
                onClick: ()=>(closeMobileMenu(),
                checkAndNavigateToSM(e))
            }, n))
              , renderProfileImage = (n,t)=>null !== e.imageUrl && void 0 !== e.imageUrl && "" !== e.imageUrl ? (0,
            a.jsx)(L.Z, {
                id: "img_user_profile_photo",
                backgroundColor: _.Dt.containerBgSecondary,
                borderColor: _.Dt.white,
                borderWidth: 1,
                dimension: "circle",
                iconColor: _.Dt.primary,
                iconName: "0115_photo",
                iconSize: n,
                customerName: null,
                imageUrl: e.imageUrl,
                margin: "auto",
                refId: "customerProfileImage",
                testID: t,
                xValue: n + "px",
                isLoading: !1,
                removeImage: ()=>{}
                ,
                allowEdit: !1,
                showIcon: !1
            }) : H ? (0,
            a.jsx)("div", {
                className: "flex font-large ai-ctr jc-ctr ".concat(O()["mobile-myprofile"]),
                children: getNameInitials()
            }) : (0,
            a.jsx)(c.xP, {
                id: "icon_menu_myprofile",
                name: "0091_profile-pic",
                size: n,
                color: _.Dt.headerIconColor
            })
              , getNameInitials = ()=>{
                var e;
                return (0,
                d.kai)(Y, null === E.default || void 0 === E.default ? void 0 : null === (e = E.default.NAME_TYPES) || void 0 === e ? void 0 : e.INITIALS)
            }
            ;
            (0,
            h.ai)() || (0,
            h.Mq)() || (0,
            h.gv)();
            let Divider = ()=>(0,
            a.jsx)("div", {
                className: O()["menu-divider"]
            })
              , eS = (0,
            z.mN)()
              , ek = (null == eS ? void 0 : eS.asPath.includes("profilemigration")) || !1;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [D && !F ? (0,
                a.jsxs)(Header, {
                    logo: (0,
                    a.jsx)(HeaderLogo, {}),
                    isDisplayProgressiveBarMenu: !1,
                    children: [(0,
                    a.jsx)("div", {
                        className: p ? O()["menu-overlay"] : ""
                    }), ek || (null == e ? void 0 : e.hideMenu) || (null == e ? void 0 : e.hideAllNavLinks) ? (0,
                    a.jsx)(a.Fragment, {}) : null === (u = (0,
                    d.FtB)("items", eg)) || void 0 === u ? void 0 : u.map((e,n)=>{
                        var t;
                        return (0,
                        d.kar)() && "FIND_AGENT_HTML" === e.path && (null === (t = (0,
                        d.oqt)()) || void 0 === t ? void 0 : t.hideFindLocation) ? (0,
                        a.jsx)(a.Fragment, {}) : (0,
                        a.jsx)(navigation_HeaderButton, {
                            id: "menu_" + e.testId,
                            data: e,
                            cookies: eg,
                            className: O()[e.classNames],
                            linkStyle: {
                                color: _.Dt.textTertiary
                            },
                            label: (0,
                            j.j2)(e.label),
                            path: getFinalPath(e),
                            deleteCookie: e.deleteCookie,
                            redirectToR3: e.redirectToR3,
                            onClick: ()=>checkAndNavigateToSM(e),
                            analytics: (0,
                            I.PC)("link", e.analyticsId, "click"),
                            triggerEvents: e=>{
                                (0,
                                I.$C)((0,
                                I.wu)(e))
                            }
                        }, n)
                    }
                    ), ek || (null == e ? void 0 : e.hideMenu) || (null == e ? void 0 : e.hideAllNavLinks) ? (0,
                    a.jsx)(a.Fragment, {}) : (0,
                    a.jsxs)("div", {
                        className: (0,
                        d.PSi)() && (0,
                        h.Mq)() ? "flex ai-ctr rsp-mrg-xxs-rt" : "flex ai-ctr ".concat(O()["menu-btn"]),
                        ref: g,
                        children: [(0,
                        a.jsx)("div", {
                            id: "icon_menu",
                            className: "".concat(O()["menu-icon-wrapper"], " \n          ").concat((0,
                            d.FtB)("hideMenuDropdown", eg) ? O()["menu-icon-wrapper-hide"] : ""),
                            children: (0,
                            a.jsx)($.v, {
                                isActive: p,
                                toggleButton: ()=>m(!p),
                                analytics: (0,
                                I.PC)("link", "menu", "click"),
                                triggerEvents: e=>{
                                    (0,
                                    I.$C)((0,
                                    I.wu)(e))
                                }
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "".concat(O()["menu-items"], " ").concat((null === (l = (0,
                            d.oqt)()) || void 0 === l ? void 0 : null === (i = l.extendedConfiguration) || void 0 === i ? void 0 : i.enableMenuItemsBoxShadow) ? O()["menu-items-partner"] : "", " ").concat(p ? "flx-col ".concat(O()["menu-options"]) + " " + O().active : "flx-col ".concat(O()["menu-options"])),
                            children: [ef ? (0,
                            a.jsx)("div", {
                                className: O()["top-menu-btn"],
                                style: {
                                    flexDirection: "column"
                                },
                                children: (0,
                                a.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flex: 1,
                                        width: "100%"
                                    },
                                    children: [Y && "object" == typeof Y && Object.keys(Y).length > 0 && (null == Y ? void 0 : Y.first_name) != "" ? (0,
                                    a.jsxs)(a.Fragment, {
                                        children: [(0,
                                        a.jsxs)("div", {
                                            className: "m-mrg-xxxs-bt ".concat(O()["profile-content"]),
                                            style: {
                                                display: "flex",
                                                flex: 1,
                                                alignItems: "center"
                                            },
                                            children: [(0,
                                            a.jsx)(navigation_WUNavLink, {
                                                id: "link_menu_icon_myprofile_1",
                                                cookies: eg,
                                                path: (null == eP ? void 0 : eP.redirectToR3) ? getFinalPath(eP) : (0,
                                                f.nV)(f.ZP.PROFILE),
                                                analytics: (0,
                                                I.PC)("link", "menu-profile", "click"),
                                                redirectToR3: null == eP ? void 0 : eP.redirectToR3,
                                                triggerEvents: e=>{
                                                    (0,
                                                    I.$C)((0,
                                                    I.wu)(e))
                                                }
                                                ,
                                                children: renderProfileImage(30, "menu_profile_image")
                                            }), (0,
                                            a.jsx)(navigation_HeaderButton, {
                                                id: "btn_menu_myprofile",
                                                className: "top-menu-btn",
                                                contentClassName: "flex flx-col as-ctr font-cxl ".concat(O()["logout-btn"]),
                                                linkClassName: O()["top-menu-link"],
                                                path: (null == eP ? void 0 : eP.redirectToR3) ? getFinalPath(eP) : (0,
                                                f.nV)(f.ZP.PROFILE),
                                                redirectToR3: null == eP ? void 0 : eP.redirectToR3,
                                                label: ea,
                                                analytics: (0,
                                                I.PC)("link", "menu-profile", "click"),
                                                triggerEvents: e=>{
                                                    (0,
                                                    I.$C)((0,
                                                    I.wu)(e))
                                                }
                                            })]
                                        }), " "]
                                    }) : (0,
                                    a.jsx)(a.Fragment, {
                                        children: (0,
                                        a.jsx)("div", {
                                            style: {
                                                flex: 1,
                                                alignItems: "center"
                                            },
                                            children: (0,
                                            a.jsx)(navigation_HeaderButton, {
                                                id: "btn_menu_myprofile",
                                                className: "top-menu-btn",
                                                contentClassName: "flex flx-col as-ctr font-cxl ".concat(O()["logout-btn"]),
                                                linkClassName: O()["top-menu-link"],
                                                path: (null == eP ? void 0 : eP.redirectToR3) ? getFinalPath(eP) : (0,
                                                f.nV)(f.ZP.PROFILE),
                                                redirectToR3: null == eP ? void 0 : eP.redirectToR3,
                                                label: (0,
                                                j.j2)("Menu.logged_in_name_unavailable"),
                                                analytics: (0,
                                                I.PC)("link", "menu-profile", "click"),
                                                triggerEvents: e=>{
                                                    (0,
                                                    I.$C)((0,
                                                    I.wu)(e))
                                                }
                                            })
                                        })
                                    }), (0,
                                    a.jsx)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "flex-end"
                                        },
                                        className: O().logoutBtn,
                                        children: (0,
                                        a.jsx)(navigation_HeaderButton, {
                                            className: O()["top-menu-btn"],
                                            path: "#",
                                            data: {
                                                key: "logout",
                                                label: "Menu.menu_text_sign_out",
                                                path: "#",
                                                iconName: "0535_logout-lined"
                                            },
                                            label: (0,
                                            j.j2)("Menu.menu_text_sign_out"),
                                            linkStyle: {
                                                color: _.Dt.actionBgPrimary
                                            },
                                            onClick: signOut,
                                            analytics: (0,
                                            I.PC)("link", "menu-logout", "click"),
                                            triggerEvents: e=>{
                                                (0,
                                                I.$C)((0,
                                                I.wu)(e))
                                            }
                                        })
                                    })]
                                })
                            }) : (()=>{
                                let e = (0,
                                d.FtB)("navbarItemLoggedOutButtons", eg);
                                return (console.log("SSG... navbarItemLoggedOutButtons...", e),
                                e && e.length > 0) ? (0,
                                a.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        flex: 1,
                                        alignItems: "center"
                                    },
                                    className: O()["top-menu-spacing"],
                                    children: getHeaderLoggedOutButtons(e)
                                }) : null
                            }
                            )(), ef ? (()=>{
                                let {menu: e, topMenuLength: n} = menuItemsSequence(eb);
                                return null == e ? void 0 : e.map((e,t)=>{
                                    var o, i, l, r;
                                    if ((ed || "manageReminders" !== e.key && "Pickupcash" !== e.key && "RequestMoney" !== e.key && "dingTopup" !== e.key && e.key !== E.default.BEFOREPAY.beforePayMenu && "manageReminders" !== e.key && "referAFriend" !== e.key) && ("Pickupcash" !== e.key || (0,
                                    d.XEd)())) {
                                        if (e.key === E.default.BEFOREPAY.beforePayMenu) {
                                            let e = (null === (r = (0,
                                            z.mN)()) || void 0 === r ? void 0 : r.asPath) || ""
                                              , n = isKYCVerificationPage(e)
                                              , t = (0,
                                            q.qu)(e) && -1 == e.indexOf("receipt");
                                            if (!(0,
                                            G.GZ)() || n || t || (0,
                                            W.wh)() && (0,
                                            W.d7)((0,
                                            z.Ii)()))
                                                return
                                        }
                                        if (("ProfileVerification" !== e.key || !er) && ("dingTopup" !== e.key || (null === (i = (0,
                                        d.oqt)()) || void 0 === i ? void 0 : null === (o = i.dingConfig) || void 0 === o ? void 0 : o.isDingTopupEnabled) || (0,
                                        X.W)()) && ("RequestMoney" !== e.key || (0,
                                        d.IqA)()) && ("manageReminders" !== e.key || (0,
                                        d.p$3)() || (0,
                                        d.upL)() || (null === (l = (0,
                                        d.oqt)()) || void 0 === l ? void 0 : l.isManageReminderEnabled)) && ("referAFriend" !== e.key || (0,
                                        d.hO8)()) && ("fxAlert" !== e.key || P) && ("MyWURewards" !== e.key || (0,
                                        d.uCh)()))
                                            return (null == e ? void 0 : e.showIfUserVerified) && !er ? (0,
                                            a.jsx)(a.Fragment, {}) : (0,
                                            a.jsxs)(a.Fragment, {
                                                children: [(0,
                                                a.jsx)(navigation_HeaderButton, {
                                                    id: "menu_" + getTestId(e),
                                                    data: e,
                                                    className: "flex flx-row ai-ctr jc-ctr ".concat(O().option, "  ").concat((0,
                                                    d.kar)() && (null == e ? void 0 : e.hideMenuItem) ? O()["nt-hide-menuitems"] : "", "  ").concat((null == e ? void 0 : e.hideMenuItem) ? O()["showHide-menuitems"] : "", " ").concat((null == e ? void 0 : e.getTransactionalMenu) ? O()["menu-item-bold"] : ""),
                                                    iconClassName: O()["menu-icon"],
                                                    subcontentClassName: "".concat((null == e ? void 0 : e.myWURewardsBg) && ei >= 0 ? "flex jc-ctr ai-ctr font-bs ".concat(O()["menu-sub-text"]) : ""),
                                                    icon: e.iconName,
                                                    typeOfIcon: e.typeOfIcon,
                                                    deleteCookie: e.deleteCookie,
                                                    redirectToR3: e.redirectToR3,
                                                    nameOfIcon: e.nameOfIcon,
                                                    contentClassName: "flex flex1 font-bs ".concat(O()["menu-text"]),
                                                    label: getMenuItemLabel(e),
                                                    subLabel: "MyWURewards" == e.key && void 0 != ei ? (0,
                                                    j.j2)("Menu.menu_text_mywu_points", {
                                                        myWUPoints: ei
                                                    }) : "",
                                                    linkStyle: {
                                                        color: _.Dt.textTertiary
                                                    },
                                                    subLabelStyle: {
                                                        color: _.Dt.pointsTextColor,
                                                        whiteSpace: "nowrap"
                                                    },
                                                    path: getFinalPath(e),
                                                    iconColor: _.Dt.lightTextTertiary,
                                                    onClick: ()=>(closeMobileMenu(),
                                                    checkAndNavigateToSM(e)),
                                                    analytics: (0,
                                                    I.PC)("link", getAnalyticId(e), "click"),
                                                    triggerEvents: e=>{
                                                        (0,
                                                        I.$C)((0,
                                                        I.wu)(e))
                                                    }
                                                }, t), e.key === E.default.BEFOREPAY.beforePayMenu && (0,
                                                a.jsx)(Divider, {}), n - 1 === t && (0,
                                                a.jsx)(Divider, {})]
                                            })
                                    }
                                }
                                )
                            }
                            )() : (()=>{
                                let {menu: e, topMenuLength: n} = menuItemsSequence(ey);
                                return null == e ? void 0 : e.map((e,t)=>{
                                    var o, i, l, r;
                                    if (!(!ed && ("manageReminders" === e.key || "Pickupcash" === e.key || "RequestMoney" === e.key || "dingTopup" === e.key || e.key === E.default.BEFOREPAY.beforePayMenu || "manageReminders" === e.key || "referAFriend" === e.key) || "Pickupcash" === e.key && !(0,
                                    d.XEd)() || "RequestMoney" === e.key && !(0,
                                    d.IqA)() || "dingTopup" === e.key && !(null === (i = (0,
                                    d.oqt)()) || void 0 === i ? void 0 : null === (o = i.dingConfig) || void 0 === o ? void 0 : o.isDingTopupEnabled) && !(0,
                                    X.W)() || e.key === E.default.BEFOREPAY.beforePayMenu && !(0,
                                    G.GZ)() || (0,
                                    d.kar)() && "FIND_AGENT_HTML" === e.path && (null === (l = (0,
                                    d.oqt)()) || void 0 === l ? void 0 : l.hideFindLocation)) && ("manageReminders" !== e.key || (0,
                                    d.p$3)() || (null === (r = (0,
                                    d.oqt)()) || void 0 === r ? void 0 : r.isManageReminderEnabled)) && ("fxAlert" !== e.key || P) && ("referAFriend" !== e.key || (0,
                                    d.hO8)()) && ("MyWURewards" !== e.key || (0,
                                    d.uCh)()))
                                        return (0,
                                        a.jsxs)(a.Fragment, {
                                            children: [(0,
                                            a.jsx)(navigation_HeaderButton, {
                                                id: "menu_" + e.testId,
                                                className: "flex flx-row ai-ctr jc-ctr ".concat(O().option, "  ").concat((0,
                                                d.kar)() && (null == e ? void 0 : e.hideMenuItem) ? O()["nt-hide-menuitems"] : "", "  ").concat((null == e ? void 0 : e.hideMenuItem) ? O()["showHide-menuitems"] : "", " ").concat((null == e ? void 0 : e.getTransactionalMenu) ? O()["menu-item-bold"] : ""),
                                                iconClassName: O()["menu-icon"],
                                                icon: e.iconName,
                                                contentClassName: "flex flex1 font-bs ".concat(O()["menu-text"]),
                                                label: (0,
                                                j.j2)(e.label),
                                                typeOfIcon: e.typeOfIcon,
                                                nameOfIcon: e.nameOfIcon,
                                                linkStyle: {
                                                    color: _.Dt.textTertiary
                                                },
                                                path: getFinalPath(e),
                                                deleteCookie: e.deleteCookie,
                                                redirectToR3: e.redirectToR3,
                                                iconColor: _.Dt.lightTextTertiary,
                                                targetWindow: e.targetWindow ? e.targetWindow : "",
                                                onClick: ()=>(closeMobileMenu(),
                                                checkAndNavigateToSM(e)),
                                                analytics: (0,
                                                I.PC)("link", e.analyticsId, "click"),
                                                triggerEvents: e=>{
                                                    (0,
                                                    I.$C)((0,
                                                    I.wu)(e))
                                                }
                                            }, t), e.key === E.default.BEFOREPAY.beforePayMenu && (0,
                                            a.jsx)(Divider, {}), n - 1 === t && (0,
                                            a.jsx)(Divider, {})]
                                        })
                                }
                                )
                            }
                            )(), (null == ex ? void 0 : ex.length) === 1 ? null : (0,
                            a.jsxs)(c._4, {
                                className: "flx-col ".concat(O()["webMob-langwrapper"]),
                                analytics: (0,
                                I.PC)("link", "menu-language-selector", "click"),
                                triggerEvents: e=>{
                                    (0,
                                    I.$C)((0,
                                    I.wu)(e))
                                }
                                ,
                                children: [(0,
                                a.jsxs)("div", {
                                    className: O()["webMob-langoption"],
                                    onClick: ()=>{
                                        U(!R)
                                    }
                                    ,
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: O()["webMob-langicons"],
                                        children: (0,
                                        a.jsx)(c.xP, {
                                            name: "0113_globe",
                                            size: 25,
                                            color: _.Dt.actionBgPrimary
                                        })
                                    }), (0,
                                    a.jsx)("div", {
                                        className: O()["mob-langicons"],
                                        children: (0,
                                        a.jsx)(c.xP, {
                                            name: "01027_Language-lined",
                                            size: 25,
                                            color: _.Dt.lightTextTertiary
                                        })
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "font-bs ".concat(O()["webMob-langlabel"]),
                                        children: (0,
                                        j.j2)("SettingLeap.languageTitle")
                                    }), (0,
                                    a.jsx)("div", {
                                        className: R ? O()["webMob-langiconsCarrot"] + " " + O().active : O()["webMob-langiconsCarrot"],
                                        children: (0,
                                        a.jsx)(b.Z, {
                                            name: "0024_dropdown-more",
                                            size: 20,
                                            color: _.Dt.headerIconColor
                                        })
                                    })]
                                }), (0,
                                a.jsx)("div", {
                                    className: R ? O()["webMob-langlist"] + " " + O().active : O()["webMob-langlist"],
                                    children: null == ex ? void 0 : ex.map((n,t)=>(0,
                                    a.jsx)(navigation_HeaderButton, {
                                        id: "menu_language_option_" + n.key,
                                        className: "flex flx-row ".concat(O().languageoption),
                                        iconClassName: O()["menu-icon"],
                                        languageClassName: O()["languageoption-bg"],
                                        isSelected: n.key === e.langCode,
                                        selectedFieldIcon: "0081_done",
                                        contentClassName: "flex flex1 font-bs ".concat(O()["menu-text"]),
                                        label: (0,
                                        j.j2)(n.fullLabel),
                                        linkStyle: {
                                            color: _.Dt.textTertiary
                                        },
                                        iconColor: _.Dt.headerIconColor,
                                        onClick: ()=>{
                                            ee.s.isWebPlatform() && (null == n ? void 0 : n.isFullRedirectionURL) === !0 ? window.location.href = n.path : T((0,
                                            N.z3)(n.key + "_" + e.countryCode, e.partnerID))
                                        }
                                        ,
                                        analytics: (0,
                                        I.PC)("link", (0,
                                        j.j2)(n.fullLabel), "click"),
                                        triggerEvents: e=>{
                                            (0,
                                            I.$C)((0,
                                            I.wu)(e))
                                        }
                                        ,
                                        doNotPrompt: !0
                                    }, t))
                                })]
                            }), ef ? (0,
                            a.jsxs)(a.Fragment, {
                                children: [(0,
                                a.jsx)(Divider, {}), null === (r = (0,
                                d.FtB)("mobileMenuItemLoggedOut", eg)) || void 0 === r ? void 0 : r.map((e,n)=>(0,
                                a.jsx)(navigation_HeaderButton, {
                                    id: "menu_" + e.testId,
                                    data: e,
                                    className: "flex flx-row ai-ctr jc-ctr ".concat(O().option, " ").concat(O()["mob-logout"]),
                                    iconClassName: O()["menu-icon"],
                                    icon: e.iconName,
                                    contentClassName: "flex flex1 font-bs ".concat(O()["menu-text"]),
                                    label: (0,
                                    j.j2)(e.label),
                                    linkStyle: {
                                        color: _.Dt.textTertiary
                                    },
                                    path: e.path,
                                    iconColor: _.Dt.lightTextTertiary,
                                    onClick: signOut,
                                    analytics: (0,
                                    I.PC)("link", e.analyticsId, "click"),
                                    triggerEvents: e=>{
                                        (0,
                                        I.$C)((0,
                                        I.wu)(e))
                                    }
                                }, n))]
                            }) : (0,
                            a.jsx)(a.Fragment, {})]
                        })]
                    }), (null == ex ? void 0 : ex.length) === 1 ? null : ek || (null == e ? void 0 : e.hideAllNavLinks) ? (0,
                    a.jsx)(a.Fragment, {}) : (0,
                    a.jsxs)(c._4, {
                        className: "flex ai-ctr font-bs m-pad-xxxxs-lr ".concat(O()["lang-btn"]),
                        style: {
                            color: _.Dt.textTertiary
                        },
                        ref: S,
                        analytics: (0,
                        I.PC)("link", "menu-language-selector", "click"),
                        triggerEvents: e=>{
                            (0,
                            I.$C)((0,
                            I.wu)(e))
                        }
                        ,
                        children: [(0,
                        a.jsxs)("div", {
                            className: "flex ai-ctr ".concat(O()["menu-icon-lang-wrapper"]),
                            style: {
                                color: _.Dt.textTertiary
                            },
                            children: [(0,
                            a.jsx)(c.xP, {
                                id: "icon_language",
                                name: "0519_Globe-lined",
                                size: 30,
                                color: _.Dt.actionBgPrimary
                            }), (0,
                            a.jsx)("div", {
                                id: "lbl_language",
                                children: null === (s = e.langCode) || void 0 === s ? void 0 : s.toUpperCase()
                            })]
                        }), (0,
                        a.jsx)("div", {
                            style: {
                                backgroundColor: _.Dt.accordianBgPrimary,
                                borderColor: _.Dt.appBlack
                            },
                            className: "flex flx-col ".concat(O()["menu-lang-options"]) + (y ? " " + O().active : ""),
                            children: null == ex ? void 0 : ex.map((n,t)=>(0,
                            a.jsx)(navigation_HeaderButton, {
                                id: "menu_lang_option_" + n.key,
                                className: "flex flx-row ".concat(O().langoption),
                                iconClassName: O()["menu-icon"],
                                isSelected: n.key === e.langCode,
                                selectedFieldIcon: "0019_checkmark",
                                contentClassName: "flex flex1 font-bs ".concat(O()["menu-text"]),
                                label: (0,
                                j.j2)(n.fullLabel),
                                linkStyle: {
                                    color: _.Dt.textTertiary
                                },
                                iconColor: _.Dt.headerIconColor,
                                onClick: ()=>{
                                    ee.s.isWebPlatform() && (null == n ? void 0 : n.isFullRedirectionURL) === !0 ? window.location.href = n.path : T((0,
                                    N.z3)(n.key + "_" + e.countryCode, e.partnerID))
                                }
                                ,
                                analytics: (0,
                                I.PC)("link", (0,
                                j.j2)(n.fullLabel), "click"),
                                triggerEvents: e=>{
                                    (0,
                                    I.$C)((0,
                                    I.wu)(e))
                                }
                                ,
                                doNotPrompt: !0
                            }, t))
                        })]
                    }), ef || (null == e ? void 0 : e.hideAllNavLinks) ? ek || (null == e ? void 0 : e.hideAllNavLinks) ? (0,
                    a.jsx)(a.Fragment, {}) : (0,
                    a.jsxs)("div", {
                        className: O()["signup-btn"],
                        style: {
                            color: _.Dt.actionBgPrimary
                        },
                        children: [(0,
                        a.jsx)("div", {
                            className: "flex flx-col as-ctr font-cxl ".concat(O()["logout-btn"]),
                            children: (0,
                            a.jsx)(navigation_WUNavLink, {
                                id: "link_menu_icon_myprofile_2",
                                analytics: (0,
                                I.PC)("link", "menu-profile", "click"),
                                redirectToR3: null == eP ? void 0 : eP.redirectToR3,
                                cookies: eg,
                                triggerEvents: e=>{
                                    (0,
                                    I.$C)((0,
                                    I.wu)(e))
                                }
                                ,
                                path: (null == eP ? void 0 : eP.redirectToR3) ? getFinalPath(eP) : (0,
                                f.nV)(f.ZP.PROFILE),
                                children: renderProfileImage(40, "icon_menu_profile")
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex flx-col as-ctr font-cxl ".concat(O()["logout-btn"]),
                            children: [(0,
                            a.jsx)(navigation_HeaderButton, {
                                id: "lbl_username",
                                className: "top-menu-btn",
                                linkClassName: O()["top-menu-link"],
                                path: (null == eP ? void 0 : eP.redirectToR3) ? getFinalPath(eP) : (0,
                                f.nV)(f.ZP.PROFILE),
                                redirectToR3: null == eP ? void 0 : eP.redirectToR3,
                                label: ea,
                                contentClassName: O()["logout-btn-usr"],
                                analytics: (0,
                                I.PC)("link", "menu-profile", "click"),
                                triggerEvents: e=>{
                                    (0,
                                    I.$C)((0,
                                    I.wu)(e))
                                }
                            }), (0,
                            a.jsx)("div", {
                                children: (0,
                                a.jsx)(navigation_HeaderButton, {
                                    id: "btn-logout",
                                    className: "top-menu-btn",
                                    onClick: signOut,
                                    onClickParam: !0,
                                    contentClassName: "flex flx-col as-ctr font-cxl ".concat(O()["logout-btn"]),
                                    linkStyle: {
                                        color: _.Dt.actionBgPrimary
                                    },
                                    path: "#",
                                    data: {
                                        key: "logout",
                                        label: "Menu.menu_text_sign_out",
                                        path: "#",
                                        iconName: "0535_logout-lined"
                                    },
                                    label: (0,
                                    j.j2)("Menu.menu_text_sign_out"),
                                    analytics: (0,
                                    I.PC)("link", "menu-logout", "click"),
                                    triggerEvents: e=>{
                                        (0,
                                        I.$C)((0,
                                        I.wu)(e))
                                    }
                                })
                            })]
                        })]
                    }) : (()=>{
                        let e = (0,
                        d.FtB)("navbarItemLoggedOutButtonsWeb", eg);
                        return (console.log("SSG... navbarItemLoggedOutLinks...", e),
                        e && e.length > 0) ? (0,
                        a.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: getHeaderLoggedOutButtons(e)
                        }) : null
                    }
                    )()]
                }) : F ? (0,
                a.jsx)(Header, {
                    logo: (0,
                    a.jsx)(HeaderLogo, {}),
                    isDisplayProgressiveBarMenu: !0,
                    children: (0,
                    a.jsx)(ec, {})
                }) : (0,
                a.jsx)(Header, {
                    logo: (0,
                    a.jsx)(HeaderLogo, {}),
                    isDisplayProgressiveBarMenu: !1
                }), (0,
                a.jsx)(BeforePayToastMsgStatus, {})]
            })
        }
        );
        var eu = (0,
        M.$j)(e=>{
            var n, t, a, o, i, l, r, s, c, u, m;
            return {
                isLoggedIn: (null === (n = e.loginSuccess) || void 0 === n ? void 0 : n.loggedIn) || !1,
                countryCode: (0,
                d.RLd)(),
                langCode: (0,
                d.sas)(),
                myWUPoints: (null == e ? void 0 : null === (a = e.MYWU) || void 0 === a ? void 0 : null === (t = a.myWUDetails) || void 0 === t ? void 0 : t.pointsEarned) || 0,
                isUserVerified: (null == e ? void 0 : null === (i = e.updatedUserDetails) || void 0 === i ? void 0 : null === (o = i.gatewayCustomer) || void 0 === o ? void 0 : o.identity_verification_status) === "Y",
                customerName: (null == e ? void 0 : null === (r = e.loginSuccess) || void 0 === r ? void 0 : null === (l = r.gatewayCustomer) || void 0 === l ? void 0 : l.name) || null,
                customerDisplayName: (null == e ? void 0 : null === (c = e.loginSuccess) || void 0 === c ? void 0 : null === (s = c.gatewayCustomer) || void 0 === s ? void 0 : s.name) ? (0,
                d.kai)(null == e ? void 0 : null === (m = e.loginSuccess) || void 0 === m ? void 0 : null === (u = m.gatewayCustomer) || void 0 === u ? void 0 : u.name) : "",
                ecoFlow: (null == e ? void 0 : e.ecoFlow) || "",
                evergageCampaign: e.evergageCampaign || null,
                ecoPartner: e.ecoPartner || "",
                imageUrl: (0,
                p.gz)()
            }
        }
        , e=>({
            SMNavigate: (n,t,a,o)=>e({
                from: "HOME",
                type: "SM_CHECK_FEES",
                amountType: n,
                amount: t,
                urlObj: {
                    ReceiveCountry: a,
                    ReceiveCurrency: o
                }
            })
        }))(ed)
          , ep = t(92911)
          , em = t(11633)
          , eg = t.n(em)
          , outage_banner_OutageBanner = ()=>{
            let e = (0,
            o.useRef)(null);
            return (0,
            o.useEffect)(()=>{
                let n = setInterval(function() {
                    let t = e.current;
                    t && window.processBanner && (clearInterval(n),
                    window.processBanner())
                }, 1e3)
            }
            , []),
            (0,
            a.jsx)("div", {
                className: eg()["banner-ads-bgclr-yellow"],
                style: {
                    display: "none"
                },
                ref: e,
                id: "outage_banner_div",
                children: (0,
                a.jsxs)("div", {
                    className: "flex align-items-center ".concat(eg()["banner-ads-top"]),
                    children: [(0,
                    a.jsx)("div", {
                        className: eg()["img-container"],
                        id: "banner_icon"
                    }), (0,
                    a.jsxs)("div", {
                        className: eg()["message-container"],
                        children: [(0,
                        a.jsx)("div", {
                            className: "".concat(eg()["text-main"], " ").concat(eg()["text-main-heading1"]),
                            id: "bb_title"
                        }), (0,
                        a.jsx)("div", {
                            className: "".concat(eg()["text-main"], " ").concat(eg()["text-main-paragraph"]),
                            id: "bb_description"
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: eg()["close-link"],
                        onClick: ()=>{
                            window.closeBanner && window.closeBanner()
                        }
                        ,
                        id: "close_banner_div",
                        children: (0,
                        a.jsx)("a", {
                            title: "Close Message",
                            "aria-label": "close the banner message.",
                            children: "X"
                        })
                    })]
                })
            })
        }
        ;
        function PageContent(e) {
            var n, t, i, l;
            let r, {title: m, children: g=null, isServer: v=!1, isInitialLoad: _=!1, query: f, imageData: h, partner: b=null, openLoop: y=null, Page: x=null, screenId: P="home", router: C=null, rendererParams: S=null, host: k="", htmlTemplate: E=null, cookies: I=null} = e, [N,w] = (0,
            o.useState)(!1), [M,j] = (0,
            o.useState)(null);
            (0,
            o.useEffect)(()=>{
                j((0,
                p.gz)())
            }
            , []),
            null !== x && (r = x);
            let L = b
              , T = null === (n = (0,
            ei.bh)()) || void 0 === n ? void 0 : n.getState();
            T && (L = T.partnerID,
            T.openLoop),
            console.log("SSG... partner", L);
            let O = u.r5[P]
              , R = !1;
            return (null == O ? void 0 : O.id) === "ComingSoon" && (R = !0),
            console.log("start... WUApp"),
            (0,
            a.jsx)("div", {
                className: "".concat(s().page),
                children: (0,
                a.jsxs)("div", {
                    className: "flx-col jc-ctr ai-ctr ".concat(s().container),
                    children: [(0,
                    a.jsxs)("main", {
                        className: "flx-col flex1 ai-ctr ".concat(s().main),
                        children: [(0,
                        a.jsx)(outage_banner_OutageBanner, {}), (0,
                        a.jsxs)("div", {
                            className: (0,
                            d.OC6)("emergencyBanner", "banner") && s().emergencybanner,
                            children: ["en" == (0,
                            d.sas)() && (0,
                            a.jsx)(c.Jf, {
                                id: "R4_WEB_BANNER_MESSAGE"
                            }), "ar" == (0,
                            d.sas)() && (0,
                            a.jsx)(c.Jf, {
                                id: "R4_WEB_BANNER_MESSAGE_AR"
                            })]
                        }), null === x ? (0,
                        a.jsx)("div", {
                            children: "no page"
                        }) : (0,
                        a.jsxs)("div", {
                            className: "main-inner-wrapper",
                            children: [R ? (0,
                            a.jsx)(a.Fragment, {}) : (0,
                            a.jsx)(eu, {
                                cookies: I,
                                host: k,
                                partnerID: b,
                                hideMenu: (null == O ? void 0 : null === (t = O.webPreLoadRules) || void 0 === t ? void 0 : t.hideMenu) || !1,
                                hideAllNavLinks: (null == O ? void 0 : null === (i = O.webPreLoadRules) || void 0 === i ? void 0 : i.hideAllNavLinks) !== void 0 && (null == O ? void 0 : null === (l = O.webPreLoadRules) || void 0 === l ? void 0 : l.hideAllNavLinks)
                            }), (0,
                            a.jsx)(ep.Z, {
                                WrappedComponent: r,
                                query: f,
                                partner: b,
                                load3DSScript: function() {},
                                router: C,
                                screenId: P,
                                rendererParams: S,
                                host: k,
                                htmlTemplate: E,
                                isServer: v,
                                isInitialLoad: _
                            })]
                        })]
                    }), g]
                })
            })
        }
        function WUApp(e) {
            var n;
            let {children: t=null, title: o="", description: i="", isServer: r=!1, isInitialLoad: s=!1, style: c=null, query: u=null, imageData: p=null, partner: m=null, openLoop: _=null, Page: f=null, screenId: h="home", router: b=null, rendererParams: y={}, host: x="", htmlTemplate: P=null, cookies: C=null} = e;
            (0,
            ei.bh)();
            let S = (null === (n = (0,
            v.yY)()) || void 0 === n ? void 0 : n.CONTEXT) || "";
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsxs)(l(), {
                    children: [(0,
                    a.jsx)("title", {
                        children: o
                    }), (0,
                    a.jsx)("meta", {
                        name: "description",
                        content: i
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:title",
                        content: o
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:site_name",
                        content: "Western Union Money Transfer"
                    }), (0,
                    a.jsx)("meta", {
                        property: "og:description",
                        content: i
                    }), (0,
                    a.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })]
                }), (0,
                a.jsx)("div", {
                    onLoad: ()=>{
                        (0,
                        v.C5)() && window.QuantumMetricAPI && ((0,
                        d.gRs)() ? window.QuantumMetricAPI.sendEvent(467, 0, (0,
                        d.gRs)()) : window.QuantumMetricAPI.sendEvent(467, 0, "nextgen"))
                    }
                    ,
                    children: (0,
                    a.jsx)(PageContent, {
                        isServer: r,
                        isInitialLoad: s,
                        Page: f,
                        screenId: h,
                        title: o,
                        query: u,
                        imageData: p,
                        partner: m,
                        openLoop: _,
                        router: b,
                        rendererParams: y,
                        host: x,
                        htmlTemplate: P,
                        cookies: C,
                        children: t
                    })
                }), (0,
                a.jsx)(g(), {
                    src: "".concat(S, "/exp-static-assets/vendor/one-trust.js")
                }), (0,
                a.jsx)(g(), {
                    src: "".concat(S, "/exp-static-assets/vendor/loader_only.js")
                }), "AE" === (0,
                d.RLd)() ? (0,
                a.jsx)(a.Fragment, {
                    children: (0,
                    a.jsx)("link", {
                        rel: "stylesheet",
                        href: "".concat(S, "/exp-static-assets/vendor/plugin/liveness.css")
                    })
                }) : (0,
                a.jsx)(a.Fragment, {})]
            })
        }
        var high_WUPage = e=>{
            let {PageComponent: n, pageProps: t, router: o, rendererParams: i={}} = e
              , {partner: l, countryCode: r, langCode: s, dataMap: c, styles: d, query: u, imageData: p, gQLData: m, message: g, url: v, host: _, token: f, notFound: h, errorMessage: b, stack: y, envType: x, openLoop: P, screenId: C, themeJson: S, switchGqlContext: k, htmlTemplate: E, cookies: I} = t;
            if (!0 === h)
                return (0,
                a.jsxs)("div", {
                    style: {
                        position: "fixed",
                        top: "40%",
                        left: "40%",
                        marginTop: "-50px",
                        marginLeft: "-100px",
                        border: "1px solid black",
                        borderRadius: "5px",
                        padding: "30px"
                    },
                    children: [(0,
                    a.jsx)("div", {
                        children: (0,
                        a.jsx)("div", {
                            children: (0,
                            a.jsx)("span", {
                                style: {
                                    fontFamily: "EuclidWUMedium",
                                    fontWeight: "normal",
                                    textAlign: "center"
                                },
                                children: b
                            })
                        })
                    }), (0,
                    a.jsx)("div", {
                        children: (0,
                        a.jsx)("div", {
                            children: (0,
                            a.jsx)("span", {
                                style: {
                                    fontFamily: "EuclidWUMedium",
                                    fontWeight: "normal",
                                    textAlign: "center"
                                },
                                children: y
                            })
                        })
                    })]
                });
            console.log("SSG: WUPage ... screen: " + C + " ...gQLData: ", m),
            o.pathname,
            console.log(o);
            let N = {
                ...o.query
            };
            return (0,
            a.jsx)(WUApp, {
                isInitialLoad: null !== t.gQLData && void 0 !== t.gQLData || null !== t.dataMap && void 0 !== t.dataMap,
                isServer: t.isServer,
                router: o,
                Page: n,
                screenId: C,
                openLoop: P,
                title: "Western Union",
                description: "Western Union",
                style: d,
                query: N,
                imageData: p,
                partner: l,
                host: _,
                htmlTemplate: E,
                cookies: I,
                rendererParams: i
            })
        }
    },
    81287: function(e, n, t) {
        "use strict";
        var a = t(85893)
          , o = t(67294)
          , i = t(8171)
          , l = t(51175)
          , r = t(4764)
          , s = t(36452)
          , c = t.n(s)
          , d = t(98185)
          , u = t(94839)
          , p = t(22507);
        let m = ["B", "KB", "MB", "GB"]
          , g = ["image/jpeg", "image/jpg", "image/png"];
        let ProfileImage = class ProfileImage extends o.Component {
            getAllowEdit() {
                let e = p.Z.sanitizeBoolean(this.props.allowEdit);
                return e
            }
            getShowIcon() {
                let e = p.Z.sanitizeBoolean(this.props.showIcon);
                return e
            }
            setEventTargetVal(e) {
                e.target.value = null
            }
            handleImageChange(e) {
                e.preventDefault();
                let n = e.target.files[0]
                  , t = null;
                if (n) {
                    if (n.size < this.minFileSize)
                        t = this.ERRORS.MIN_FILE_SIZE;
                    else if (n.size > this.maxFileSize)
                        t = this.ERRORS.MAX_FILE_SIZE;
                    else if (g.includes(n.type)) {
                        let e = null != this.props.imageUrl;
                        if (n) {
                            let a = {
                                fileName: n.name,
                                format: n.type,
                                file: n,
                                previewUrl: URL.createObjectURL(n)
                            };
                            this.props.onUpdate(t, a, this.updateFailure.bind(this), e)
                        }
                    } else
                        t = this.ERRORS.UNSUPPORTED_FILE_FORMAT
                }
                t && this.updateFailure(t)
            }
            triggerImageUpload() {
                if (!this.state.isEditable)
                    return;
                let e = document.getElementById(this.id);
                e.click()
            }
            updateFailure(e) {
                e && "function" == typeof this.props.onUpdate && this.props.onUpdate(e, null, ()=>{}
                )
            }
            updateSuccess(e) {
                if ("function" == typeof this.props.onUpdate) {
                    let n = {
                        binary: "",
                        fileName: "",
                        format: "",
                        imageUrl: "",
                        file: ""
                    };
                    this.state.file && (n.fileName = this.state.file.name,
                    n.format = this.state.file.type,
                    n.file = this.state.file),
                    this.props.onUpdate(null, n, this.updateFailure.bind(this), e)
                }
            }
            getFileSize(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , t = 0;
                if ("number" != typeof e || isNaN(e) || e <= 0)
                    return "0 ".concat(m[t]);
                t = Math.floor(Math.log(e) / Math.log(1024));
                let a = Number(e / Math.pow(1024, t)).toFixed(n);
                return "".concat(a, " ").concat(m[t])
            }
            getDropDownList(e) {
                let n = [];
                return e ? (n.push({
                    value: "photo",
                    label: (0,
                    u.j2)("Profile.Profile.replace_photo")
                }),
                n.push({
                    value: "remove",
                    label: (0,
                    u.j2)("Profile.Profile.remove_photo")
                })) : this.state.isMobile || n.push({
                    value: "photo",
                    label: (0,
                    u.j2)("Profile.Profile.upload_photo")
                }),
                n
            }
            render() {
                var e, n;
                let t = !!this.state.isEditable && this.state.isEditable;
                return (0,
                a.jsxs)("div", {
                    style: {
                        alignItems: "center",
                        backgroundColor: this.props.backgroundColor || l.Dt.actionBgSecondary,
                        borderColor: this.props.borderColor,
                        borderStyle: "solid",
                        borderWidth: "".concat(this.props.borderWidth, "px"),
                        borderRadius: "circle" === this.props.dimension ? "50%" : "0",
                        cursor: t ? "pointer" : "default",
                        display: "flex",
                        height: "custom" === this.props.dimension ? this.props.yValue : this.props.xValue,
                        justifyContent: "center",
                        margin: this.props.margin,
                        maxHeight: "100%",
                        maxWidth: "100%",
                        opacity: this.state.isHovered ? .8 : 1,
                        position: "relative",
                        width: this.props.xValue
                    },
                    ...this.testID,
                    children: [this.props.isLoading || this.state.isProcessing ? (0,
                    a.jsx)("div", {
                        className: c()["image-loader"],
                        children: (0,
                        a.jsx)(i.ZH, {
                            size: 9,
                            count: 4,
                            color: "grey"
                        })
                    }) : (0,
                    a.jsx)(a.Fragment, {}), t ? (0,
                    a.jsx)("input", {
                        accept: g.join(","),
                        id: this.id,
                        onChange: e=>this.handleImageChange(e),
                        onClick: e=>this.setEventTargetVal(e),
                        style: {
                            opacity: 0,
                            display: "none"
                        },
                        type: "file",
                        capture: !0
                    }) : (0,
                    a.jsx)(a.Fragment, {}), this.props.imageUrl ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("img", {
                            style: {
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "100%",
                                width: "100%",
                                borderRadius: "50%"
                            },
                            src: "".concat(this.props.imageUrl),
                            "qm-data-rule": "mask",
                            alt: "",
                            onLoad: this.isImageLoaded
                        }), this.state.showIcon ? (0,
                        a.jsx)("div", {
                            className: c()["edit-icon-wrapper"],
                            children: (0,
                            a.jsx)(i.xP, {
                                name: "0073_edit",
                                size: this.props.iconSize,
                                style: {
                                    color: this.props.iconColor || l.Dt.primary
                                }
                            })
                        }) : null]
                    }) : (0,
                    a.jsx)(a.Fragment, {}), !this.props.imageUrl || this.state.isHovered ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)("div", {
                            className: c().nameProfileImage,
                            children: (0,
                            a.jsxs)("span", {
                                children: [(null === (e = this.props.customerName) || void 0 === e ? void 0 : e.firstName) && "" != this.props.customerName.firstName && this.props.customerName.firstName[0] ? this.props.customerName.firstName[0].toUpperCase() : (0,
                                a.jsx)("span", {}), (null === (n = this.props.customerName) || void 0 === n ? void 0 : n.lastName) && "" != this.props.customerName.lastName && this.props.customerName.lastName[0] ? this.props.customerName.lastName[0].toUpperCase() : (0,
                                a.jsx)("span", {})]
                            })
                        }), this.state.showIcon ? (0,
                        a.jsxs)("div", {
                            className: c().cameraIconWrapper,
                            children: [(0,
                            a.jsx)("span", {
                                className: c().plusIcon
                            }), (0,
                            a.jsx)(i.xP, {
                                name: this.props.iconName || "0115_photo",
                                size: this.props.iconSize,
                                style: {
                                    color: this.props.iconColor || l.Dt.primary
                                }
                            })]
                        }) : null]
                    }) : (0,
                    a.jsx)(a.Fragment, {}), t ? !this.props.imageUrl && this.state.isMobile ? (0,
                    a.jsx)("div", {
                        id: "profile_image",
                        className: c().profileSelectionOverlay,
                        onClick: ()=>this.triggerImageUpload(),
                        onKeyDown: ()=>{}
                        ,
                        role: "button"
                    }) : (0,
                    a.jsx)(r.Z, {
                        onLoadDisableChangeEvent: !0,
                        data: this.getDropDownList(this.props.imageUrl),
                        onChange: e=>{
                            "photo" == e.value ? this.triggerImageUpload() : "remove" == e.value && this.props.removeImage()
                        }
                        ,
                        isDisabled: !1,
                        isShortMenuDropdown: !0,
                        placeHolder: "text",
                        className: "react-select-custom",
                        controlHeight: "100%"
                    }) : (0,
                    a.jsx)(a.Fragment, {})]
                })
            }
            constructor(e) {
                super(e),
                this.componentDidMount = ()=>{
                    this.setState({
                        isMobile: null !== d.tq.any()
                    })
                }
                ,
                this.isImageLoaded = ()=>{
                    this.setState({
                        isProcessing: !1
                    })
                }
                ,
                this.state = {
                    isEditable: this.getAllowEdit(),
                    file: {},
                    isMobile: !1,
                    isHovered: !1,
                    showIcon: this.getShowIcon(),
                    isProcessing: !!this.props.imageUrl
                },
                this.maxFileSize = 5242880,
                this.minFileSize = 10240,
                this.ERRORS = {
                    CORRUPTED_FILE: {
                        code: "PI001",
                        message: (0,
                        u.j2)("Profile.Profile.imageUploadErrors.corruptedFile")
                    },
                    MAX_FILE_SIZE: {
                        code: "PI002",
                        message: (0,
                        u.j2)("Profile.Profile.imageUploadErrors.maxFileSize")
                    },
                    MIN_FILE_SIZE: {
                        code: "PI003",
                        message: (0,
                        u.j2)("Profile.Profile.imageUploadErrors.minFileSize") + this.getFileSize(this.minFileSize)
                    },
                    UNSUPPORTED_FILE_FORMAT: {
                        code: "PI004",
                        message: (0,
                        u.j2)("Profile.Profile.imageUploadErrors.unSupportedFileFormat")
                    }
                },
                this.id = p.Z.sanitizeString(this.props.refId) || "",
                this.id = this.id.replace(/\s/g, ""),
                this.testID = "function" == typeof this.props.testID ? this.props.testID("image_".concat(this.id)) : {}
            }
        }
        ;
        n.Z = ProfileImage
    },
    25396: function(e) {
        e.exports = {
            "header-bar": "Header_header-bar__zXe06",
            "header-menu": "Header_header-menu__2DxDt",
            "container-wrapper": "Header_container-wrapper__Vldoo",
            container: "Header_container__LZYoY",
            "header-inner-wrapper": "Header_header-inner-wrapper__p9akI",
            "header-container": "Header_header-container__nPAIP"
        }
    },
    36452: function(e) {
        e.exports = {
            cameraIconWrapper: "ProfileImage_cameraIconWrapper__hckzN",
            "edit-icon-wrapper": "ProfileImage_edit-icon-wrapper__DNJNV",
            plusIcon: "ProfileImage_plusIcon__9Dkh4",
            nameProfileImage: "ProfileImage_nameProfileImage__eLa_0",
            profileSelectionOverlay: "ProfileImage_profileSelectionOverlay__5ZGE2",
            "image-loader": "ProfileImage_image-loader__kneXn"
        }
    },
    56136: function(e) {
        e.exports = {
            "progress-bar-web-main-container": "ProgressiveBarMenu_progress-bar-web-main-container__a8tBh",
            "progress-bar-web": "ProgressiveBarMenu_progress-bar-web__QfaCd",
            "list-style-ul": "ProgressiveBarMenu_list-style-ul__CWtmN",
            completedsteps: "ProgressiveBarMenu_completedsteps__oLJp7",
            selectedLi: "ProgressiveBarMenu_selectedLi__iysYv",
            "progress-bar-options": "ProgressiveBarMenu_progress-bar-options__2bmfd",
            "progress-bar-options-item": "ProgressiveBarMenu_progress-bar-options-item__LFbRC",
            "progress-extra": "ProgressiveBarMenu_progress-extra__Mw4fq",
            "selected-steps": "ProgressiveBarMenu_selected-steps__rN1Rd"
        }
    },
    54453: function(e) {
        e.exports = {
            cancelTxnPopUpWrapper: "WUNavLink_cancelTxnPopUpWrapper__rm4_a",
            iconSecn: "WUNavLink_iconSecn__4xnqS",
            titleSecn: "WUNavLink_titleSecn__ZGQVH",
            descSecn: "WUNavLink_descSecn__d0MmX",
            primaryBtnSecn: "WUNavLink_primaryBtnSecn___N_e0",
            linkBtnSecn: "WUNavLink_linkBtnSecn__RRrmI"
        }
    },
    81561: function(e) {
        e.exports = {
            "header-item-nt": "navbar_header-item-nt__6_el0",
            "header-item": "navbar_header-item__qQXEM",
            "signup-btn": "navbar_signup-btn__CH_fL",
            "logout-btn": "navbar_logout-btn__p0tF8",
            "menu-options": "navbar_menu-options__heDGr",
            "menu-lang-options": "navbar_menu-lang-options__rcpqA",
            "menu-icon": "navbar_menu-icon__MyhQd",
            option: "navbar_option__Sf9Pk",
            "menu-text": "navbar_menu-text__iDWvM",
            langoption: "navbar_langoption__UbFmL",
            "menu-icon-lang-wrapper": "navbar_menu-icon-lang-wrapper__BFkXI",
            "mobile-option": "navbar_mobile-option__IMlGl",
            languageoption: "navbar_languageoption__XMB4H",
            "menu-btn": "navbar_menu-btn__vznPC",
            "collapse-btn": "navbar_collapse-btn__rwAeM",
            "lang-btn": "navbar_lang-btn__dUApS",
            "menu-items": "navbar_menu-items__t37h3",
            "menu-items-partner": "navbar_menu-items-partner__tv8kl",
            "sub-label-text": "navbar_sub-label-text__Mgehr",
            "menu-icon-wrapper": "navbar_menu-icon-wrapper__zeg0h",
            "top-menu-btn": "navbar_top-menu-btn__0hRpw",
            "login-btn-wrap": "navbar_login-btn-wrap__xCecP",
            "login-btn": "navbar_login-btn___hLop",
            "menu-sub-text": "navbar_menu-sub-text__4Qg6w",
            "logo-base-property": "navbar_logo-base-property__wbNnV",
            "logo-hosted-partner": "navbar_logo-hosted-partner__f5GgQ",
            logo: "navbar_logo___IoE_",
            "logo-medium": "navbar_logo-medium__laI2Z",
            "logo-small": "navbar_logo-small__ECf7S",
            "logo-big": "navbar_logo-big__gpe8j",
            "webMob-langwrapper": "navbar_webMob-langwrapper__LHtAH",
            "webMob-langoption": "navbar_webMob-langoption__9XfM5",
            "webMob-langicons": "navbar_webMob-langicons__JHq5E",
            "webMob-langlabel": "navbar_webMob-langlabel__EXiar",
            "webMob-langiconsCarrot": "navbar_webMob-langiconsCarrot__zh3pa",
            active: "navbar_active__OtyqW",
            "webMob-langlist": "navbar_webMob-langlist__zLEVG",
            "hidden-content": "navbar_hidden-content__8Zr_G",
            "mob-langicons": "navbar_mob-langicons__H79K6",
            "menu-icon-wrapper-hide": "navbar_menu-icon-wrapper-hide__ZfECg",
            "mob-logout": "navbar_mob-logout__dGPk7",
            "showHide-menuitems": "navbar_showHide-menuitems__FcKcz",
            "nt-hide-menuitems": "navbar_nt-hide-menuitems__cahl7",
            logoutBtn: "navbar_logoutBtn__wpUT6",
            "kroger-inlane": "navbar_kroger-inlane__74zgu",
            kroger: "navbar_kroger__wjzUl",
            "top-menu-spacing": "navbar_top-menu-spacing__rcGK0",
            "menu-item-bold": "navbar_menu-item-bold__nXYOc",
            "languageoption-bg": "navbar_languageoption-bg__I_qXK",
            "menu-divider": "navbar_menu-divider__Gc8Ee",
            "profile-content": "navbar_profile-content__TgKU3",
            "menu-overlay": "navbar_menu-overlay__wMf9v",
            "option-login": "navbar_option-login__L4J98",
            "mobile-myprofile": "navbar_mobile-myprofile__INuk9",
            "logo-small-hosted-partner": "navbar_logo-small-hosted-partner__MKUvB",
            "top-menu-link": "navbar_top-menu-link__A6cIu",
            "logo-margin": "navbar_logo-margin__BHlFk"
        }
    },
    11633: function(e) {
        e.exports = {
            "banner-ads-top": "OutageBanner_banner-ads-top__t6q7k",
            "img-container": "OutageBanner_img-container__rPFTZ",
            close_link: "OutageBanner_close_link__g8xUC",
            "text-main": "OutageBanner_text-main__61zEo",
            "text-main-heading1": "OutageBanner_text-main-heading1__B9aoi",
            "text-main-paragraph": "OutageBanner_text-main-paragraph__TVJgt",
            "banner-ads-bgclr-yellow": "OutageBanner_banner-ads-bgclr-yellow__pPVsw",
            "close-link": "OutageBanner_close-link__04y6r"
        }
    },
    91413: function(e) {
        e.exports = {
            page: "app_page__UzPDe",
            emergencybanner: "app_emergencybanner__3DDGd",
            container: "app_container__6iLOB",
            main: "app_main___jduf",
            "onetrust-consent-sdk": "app_onetrust-consent-sdk__8X8uX"
        }
    }
}]);
