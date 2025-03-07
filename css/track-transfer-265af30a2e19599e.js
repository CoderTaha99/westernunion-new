(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4295], {
    77732: function(e, t, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/[countryCode]/[langCode]/[partnerName]/track-transfer", function() {
            return a(36512)
        }
        ])
    },
    1056: function(e, t, a) {
        "use strict";
        a.d(t, {
            M: function() {
                return f
            }
        });
        var r = a(85893)
          , s = a(35959)
          , i = a(67294)
          , n = a(68585)
          , l = a(5141)
          , o = a.n(l)
          , c = a(4430)
          , d = a(22507)
          , u = a(24287);
        let m = []
          , h = "Yes"
          , p = !1
          , _ = !1
          , handler = e=>{
            n.E.logEvent("ad_banner_loaded", {
                page: e
            })
        }
          , clickAdEvent = e=>{
            n.E.logEvent("clicked_ad_banner_open", {
                page: e
            })
        }
          , logAdPerformanceEvent = e=>{
            n.E.logEvent("ad_load-performance", e)
        }
          , gamDetails = e=>"History" === e || "TAT" === e || "EstimateDetails" === e ? {
            ...(0,
            s.HUv)()
        } : {
            ...(0,
            s.HUv)(),
            ...(0,
            s.HsE)()
        }
          , onLoadScript = (e,t)=>{
            let a;
            if ((0,
            s.UW0)()) {
                let e = gamDetails(t);
                a = Object.keys(e).reduce((t,a)=>(e[a] && (t[a] = e[a]),
                t), {})
            }
            if (window.PWT = window.PWT || {},
            !window.googletag)
                return;
            let r = window.googletag;
            try {
                window.googletag.cmd.push(function() {
                    let i = r.defineSlot(e, [[728, 90], [320, 50]], "div-gpt-ad-1679602847164-0");
                    i && i.addService(r.pubads());
                    let n = r.sizeMapping().addSize([990, 0], [728, 90]).addSize([0, 0], [320, 50]).build()
                      , l = "No"
                      , o = "No"
                      , c = "No"
                      , d = "No"
                      , u = !1
                      , p = !1;
                    i.defineSizeMapping(n),
                    r.pubads().enableSingleRequest(),
                    r.pubads().setCentering(!0),
                    r.pubads().setTargeting("user_type", ["sender"]),
                    r.pubads().enableLazyLoad(),
                    !1 === (0,
                    s.qe$)() && (r.pubads().setTargeting("env", ["pubmatic"]),
                    (0,
                    s.UW0)() && (r.pubads().setTargeting("CP", t.toUpperCase()),
                    Object.entries(a).forEach(e=>{
                        let[t,a] = e;
                        return r.pubads().setTargeting(t, a)
                    }
                    ))),
                    "{}" === JSON.stringify(window.PWT) && (l = "Yes"),
                    logAdPerformanceEvent({
                        ad_type: "Banner",
                        ad_blocker_opted_in: l
                    }),
                    r.pubads().addEventListener("impressionViewable", e=>{
                        p || handler(t),
                        p = !0
                    }
                    ),
                    r.pubads().addEventListener("slotRenderEnded", e=>{
                        let a;
                        if (e.isEmpty ? logAdPerformanceEvent({
                            ad_initialized: d,
                            pubmatic_request: c,
                            pubmatic_response: o,
                            ad_loaded: "No"
                        }) : u || (logAdPerformanceEvent({
                            ad_initialized: d,
                            pubmatic_request: c,
                            pubmatic_response: o,
                            ad_loaded: "Yes"
                        }),
                        h = "No"),
                        !e.isEmpty && (a = document.getElementById("div-gpt-ad-1679602847164-0")) && a.getElementsByTagName("iframe") && a.getElementsByTagName("iframe").length > 0) {
                            var r = a.getElementsByTagName("iframe")[0];
                            if (r && r.contentWindow && r.contentWindow.document && r.contentWindow.document.body) {
                                var s = r.contentWindow.document.body;
                                if (null != s) {
                                    var i = s.querySelectorAll("div a");
                                    i && i.length > 0 && i.forEach(e=>{
                                        e && (e.addEventListener("click", ()=>{
                                            clickAdEvent(t),
                                            logAdPerformanceEvent({
                                                ad_clicked: "Yes"
                                            })
                                        }
                                        ),
                                        m.push(e))
                                    }
                                    )
                                }
                            }
                        }
                        u = !0
                    }
                    ),
                    r.enableServices(),
                    (0,
                    s.r1l)() ? "function" == typeof window.PWT.requestBids && (window.PWT.initAdserverSet = !0,
                    d = window.PWT.initAdserverSet ? "Yes" : "No",
                    c = "Yes",
                    window.PWT.requestBids(window.PWT.generateConfForGPT(r.pubads().getSlots()), function(e) {
                        window.PWT.addKeyValuePairsToGPTSlots(e),
                        r.display("div-gpt-ad-1679602847164-0"),
                        (null == e ? void 0 : e.length) > 0 && (o = "Yes")
                    })) : r.display("div-gpt-ad-1679602847164-0")
                })
            } catch (e) {
                console.log("error while defining slot", e)
            }
        }
          , f = i.memo(function(e) {
            let {adunitPath: t, page: a, phase: n=1, style: l={}} = e
              , f = (0,
            c.Z)();
            return ((0,
            i.useEffect)(()=>{
                if ((0,
                s.r1l)() && function() {
                    if (!p && !document.getElementById("pwt-launcher")) {
                        var e, t;
                        let a = document.createElement("script");
                        a.src = f > 767 ? d.Z.sanitizeString(u.Dt.pubmaticUrl.replace("{0}", null === (e = (0,
                        s.oqt)()) || void 0 === e ? void 0 : e.pubmaticWebProfileId)) : d.Z.sanitizeString(u.Dt.pubmaticUrl.replace("{0}", null === (t = (0,
                        s.oqt)()) || void 0 === t ? void 0 : t.pubmaticMobileWebProfileId)),
                        a.async = !0,
                        a.id = "pwt-launcher",
                        a.onload = ()=>{
                            p = !0
                        }
                        ,
                        document.head.appendChild(a)
                    }
                }(),
                (0,
                s.aDb)(n) || (0,
                s.r1l)())
                    return function() {
                        if (_ || document.getElementById("gpt-launcher"))
                            onLoadScript(t, a);
                        else {
                            let e = document.createElement("script");
                            e.src = d.Z.sanitizeString(u.Dt.securepubadsUrl),
                            e.async = !0,
                            e.id = "gpt-launcher",
                            e.onload = ()=>{
                                onLoadScript(t, a),
                                _ = !0
                            }
                            ,
                            document.head.appendChild(e)
                        }
                    }(),
                    ()=>{
                        logAdPerformanceEvent({
                            "page_exit-before-ad-load": h
                        });
                        try {
                            var e, t, r, s, i, n;
                            window.googletag && "function" == typeof window.googletag.destroySlots && "function" == typeof (null === (e = window.googletag) || void 0 === e ? void 0 : e.pubads) && (null === (r = window.googletag) || void 0 === r || null === (t = r.pubads()) || void 0 === t || t.removeEventListener("impressionViewable", handler.bind(this, a)),
                            m.forEach(e=>e.removeEventListener("click", clickAdEvent)),
                            m = [],
                            null === (i = window.googletag) || void 0 === i || null === (s = i.pubads()) || void 0 === s || s.clear(),
                            null === (n = window.googletag) || void 0 === n || n.destroySlots())
                        } catch (e) {
                            console.log(e, "error while removing click event listners for ad")
                        }
                    }
            }
            , [t]),
            (0,
            s.aDb)(n) || (0,
            s.r1l)()) ? (0,
            r.jsx)("div", {
                className: o().googleAdsContainer,
                style: l,
                children: (0,
                r.jsx)("div", {
                    id: "div-gpt-ad-1679602847164-0",
                    style: {
                        alignContent: "center",
                        alignItems: "center",
                        width: "min-width: 320px",
                        height: "min-height: 50px"
                    },
                    children: " "
                })
            }) : (0,
            r.jsx)(r.Fragment, {})
        }, function(e, t) {
            return !1
        })
    },
    36512: function(e, t, a) {
        "use strict";
        a.r(t),
        a.d(t, {
            default: function() {
                return Index
            }
        });
        var r = a(85893)
          , s = a(11163)
          , i = a(10597)
          , n = a(67294)
          , l = a(2664)
          , o = a(89651)
          , c = a(8171)
          , d = a(30381)
          , u = a.n(d)
          , m = a(13951)
          , h = a(35959)
          , p = a(32065)
          , _ = a(94839)
          , f = a(99290)
          , T = a(43367)
          , v = a(23873)
          , b = a(76459)
          , g = a(54034)
          , y = a(14869)
          , C = a(77681)
          , x = a(4764)
          , A = a(58284)
          , E = a.n(A)
          , N = a(11028)
          , k = a(53261)
          , j = a(49490)
          , S = a(36687)
          , w = a(51175)
          , L = a(18239)
          , R = a(37424)
          , M = a(81501)
          , D = a(73070)
          , V = a(22507)
          , P = a(21043)
          , F = a(1056)
          , O = a(43517)
          , B = a(24287)
          , I = a(35598)
          , q = a(47591);
        let callAdobePageloadEvent = e=>{
            let t = {
                sc_section: "track-transfer"
            };
            return e ? t.sc_sub_section = "with-mtcn" : t.sc_sub_section = "without-mtcn",
            (0,
            f.GJ)(t),
            !0
        }
        ;
        let TAT = class TAT extends n.Component {
            componentDidMount() {
                var e, t;
                (null === (e = this.state) || void 0 === e ? void 0 : e.mtcn) && (this.setState(Object.assign(this.state, {
                    isMTCNValid: !0,
                    showTATError: !1
                })),
                this.handleSubmit(null));
                let a = 0;
                (0,
                k.sM)(k.JY.mobile, this.layoutChangeHandler),
                h.Yse.register("TAT", (e,t)=>"C5000" !== e || !(a < 3) || (this.props.resubmit(this.state),
                a++,
                !1)),
                (0,
                h.nD3)() && (null === (t = (0,
                M.b)().getState()) || void 0 === t ? void 0 : t.transactionCount) > 0 && !this.txnList && (0,
                M.b)().dispatch((0,
                D.C_)())
            }
            componentDidUpdate(e, t, a) {
                e.destCurrencies !== this.props.destCurrencies && this.setRecCurrencies((0,
                h.RLd)()),
                e.countriesList !== this.props.countriesList && (this.countryListItems = this.props.topCountriesList.concat(this.props.countriesList).map(e=>({
                    label: e.value,
                    value: e.label
                }))),
                this.state.hasMTCN !== t.hasMTCN && callAdobePageloadEvent(this.state.hasMTCN)
            }
            componentWillUnmount() {
                this.setState({
                    showTATError: !1,
                    hasMTCN: !0,
                    inquiryType: "SENDER",
                    mtcn: "",
                    recCtryValue: this.props.isAppCountryExcluded ? "" : (0,
                    h.pDr)((0,
                    h.RLd)()),
                    recCtryCode: this.props.isAppCountryExcluded ? "" : (0,
                    h.RLd)(),
                    amountTypeSelected: (0,
                    _.j2)("TrackATransfer.amount_sent")
                }),
                (0,
                k.ys)(this.layoutChangeHandler),
                h.Yse.deregister("TAT")
            }
            setRecCurrencies(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , a = [];
                if (this.props.destCurrencies) {
                    let r = this.props.destCurrencies[e];
                    if (null != r)
                        for (let e = 0; e < r.length; e++)
                            a.push({
                                label: r[e].currency_iso_code,
                                value: r[e].currency_iso_code
                            });
                    t ? (t.recCurrencies = a,
                    t.recCurrencyISOCode = a.length > 0 ? a[0].label : null) : this.setState(Object.assign(this.state, {
                        recCurrencyISOCode: a.length > 0 ? a[0].label : null,
                        recCurrencies: a
                    }))
                }
            }
            setCaptchaState(e) {
                this.setState({
                    captcha: e.answer,
                    isCaptchaValid: e.valid
                })
            }
            getRadioData() {
                return [{
                    id: "rbtn_tat_sender_phone_number",
                    label: (0,
                    _.j2)("TrackATransfer.senders_phone_number"),
                    value: "SENDER_PHONE_NUMBER",
                    ariaLabel: (0,
                    _.j2)("TrackATransfer.senders_phone_number")
                }, {
                    id: "rbtn_tat_sender_receiver_names",
                    label: (0,
                    _.j2)("TrackATransfer.senders_and_receivers_name"),
                    value: "SENDER_RECEIVER_NAMES",
                    ariaLabel: (0,
                    _.j2)("TrackATransfer.senders_and_receivers_name")
                }]
            }
            getRecentActivity() {
                var e;
                if (!(0,
                h.nD3)() || !((null === this || void 0 === this ? void 0 : null === (e = this.txnList) || void 0 === e ? void 0 : e.length) > 0))
                    return null;
                {
                    let e = this.txnList.filter(e=>{
                        let t = (0,
                        h.pl3)(e.status_code);
                        return t
                    }
                    );
                    return e.splice(this.MAX_RECENT_ACTIVITY),
                    (0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("p", {
                            className: "m-mrg-xxs-tb ".concat(E()["rencet-activity"]),
                            "aria-label": (0,
                            _.j2)("TrackATransferLeap.recentactivity"),
                            id: "label_tat_sender_recent_activity",
                            children: (0,
                            r.jsxs)("span", {
                                className: "font-input ".concat(E()["rencet-activity-title"]),
                                id: "label_tat_recentactivity",
                                children: [(0,
                                _.j2)("TrackATransfer.recent_activity"), " "]
                            })
                        }), e.length > 0 && e.map((e,t)=>(0,
                        r.jsxs)("span", {
                            className: "flex m-mrg-xs-tb justify-start ".concat(E()["list-inner"]),
                            children: [(0,
                            r.jsx)(L.Z, {
                                onTrack: (e,t)=>{
                                    this.setState({
                                        mtcn: e,
                                        selectedTransaction: t
                                    }, ()=>{
                                        this.setState(Object.assign(this.state, {
                                            isMTCNValid: !0,
                                            showTATError: !1
                                        })),
                                        this.handleSubmit(null)
                                    }
                                    )
                                }
                                ,
                                onResend: null,
                                transaction: e,
                                isPendingTxn: !1,
                                index: t,
                                trackBtn: !(0,
                                h.OC6)("commonFeatures", "hideTrackButton") || e.status !== B.default.TAT.TIBCO_STATUS_LABELS.CANCELLED,
                                type: "DIGITAL",
                                mtcn: (0,
                                h.aan)(e.money_transfer_control.mtcn),
                                retailTransactionStatus: !1,
                                hideResend: !0
                            }), (0,
                            r.jsx)("span", {
                                style: {
                                    borderBottom: "1px",
                                    backgroundColor: w.Dt.dimGrey
                                }
                            })]
                        })), (0,
                        r.jsx)("div", {
                            className: "m-pad-lg-tb ".concat(E()["extra-space"])
                        })]
                    })
                }
            }
            getDefaultReceiversCountryValue() {
                return this.state.recCtryCode && this.state.recCtryValue ? {
                    label: (0,
                    h.pDr)((0,
                    h.RLd)()),
                    value: (0,
                    h.RLd)()
                } : null
            }
            navigateTrackRecentTransfer() {
                let e = R.x.TAT;
                e.webPreLoadRules = {
                    check: "login"
                },
                e.canNavigateToSelf = !0,
                (0,
                C.Mb)(e)
            }
            render() {
                var e, t, a, s, i, n, l;
                (0,
                h.sas)();
                let o = (0,
                h.nD3)();
                return this.txnList = V.Z.sanitizeObject(null === (a = this.props.txnDetailsInfo) || void 0 === a ? void 0 : null === (t = a.txnDetails) || void 0 === t ? void 0 : null === (e = t.transactions) || void 0 === e ? void 0 : e.transaction),
                (0,
                r.jsx)("div", {
                    className: this.state.isMobileLayout ? E().mobile : null,
                    children: (0,
                    r.jsx)(c.VT, {
                        align: "center",
                        className: "wu-con-padding-tb-sm",
                        children: (0,
                        r.jsx)(c.VY, {
                            colClass: "wu-col-xl-6 wu-col-l-8 wu-col-m-12 wu-col-s-16",
                            children: (0,
                            r.jsxs)("div", {
                                className: E()["tat-wrapper"],
                                children: [(0,
                                r.jsx)("div", {
                                    className: "m-mrg-xxs-bt ".concat(E().header, " ").concat(E().gap, " flex justify-space-between"),
                                    children: (0,
                                    r.jsx)("h1", {
                                        id: "label_tat_page_title",
                                        "aria-label": (0,
                                        _.j2)("TrackATransfer.title"),
                                        className: "font-hl $styles.pageTitle}",
                                        ...(0,
                                        w.vs)("label_tat_page_title"),
                                        style: {
                                            fontFamily: "EuclidWUMedium",
                                            flex: 1
                                        },
                                        children: (0,
                                        _.j2)("TrackATransfer.title")
                                    })
                                }), (0,
                                r.jsxs)(c.j, {
                                    selected: "SENDER" === this.state.inquiryType ? (0,
                                    _.j2)("TrackATransfer.sender") : (0,
                                    _.j2)("TrackATransfer.receiver"),
                                    children: [(0,
                                    r.jsx)(c.OK, {
                                        id: "toggle_sender",
                                        dataLinkName: "btn-im-the-sender",
                                        "aria-label": (0,
                                        _.j2)("TrackATransfer.sender"),
                                        onClick: ()=>{
                                            this.onClickHandlerForSenderAndReciverTab("SEND")
                                        }
                                        ,
                                        title: (0,
                                        _.j2)("TrackATransfer.sender"),
                                        analytics: (0,
                                        f.PC)("tab", "sender", "click"),
                                        triggerEvents: e=>{
                                            (0,
                                            f.$C)((0,
                                            f.wu)(e))
                                        }
                                        ,
                                        children: this.state.hasMTCN && this.renderSenderHelp()
                                    }), (0,
                                    r.jsx)(c.OK, {
                                        id: "toggle_receiver",
                                        dataLinkName: "btn-im-the-receiver",
                                        "aria-label": (0,
                                        _.j2)("TrackATransfer.receiver"),
                                        onClick: ()=>{
                                            this.onClickHandlerForSenderAndReciverTab("RECEIVE")
                                        }
                                        ,
                                        title: (0,
                                        _.j2)("TrackATransfer.receiver"),
                                        analytics: (0,
                                        f.PC)("tab", "receiver", "click"),
                                        triggerEvents: e=>{
                                            (0,
                                            f.$C)((0,
                                            f.wu)(e))
                                        }
                                        ,
                                        children: this.state.hasMTCN && this.renderReceiverHelp()
                                    })]
                                }), this.state.hasMTCN && (0,
                                r.jsx)("div", {
                                    dir: "ltr",
                                    className: "flex col justify-center m-mrg-xxs-tp ".concat(E()["mtcn-container"]),
                                    children: (0,
                                    r.jsx)(c.ig, {
                                        label: "RECEIVER" === this.state.inquiryType ? (0,
                                        _.j2)("TrackATransfer.mtcn_placeholder") : "",
                                        ariaLabel: (0,
                                        _.j2)("TrackATransfer.mtcn_placeholder"),
                                        resetTextField: this.resetMTCN,
                                        showError: this.state.showTATError,
                                        trackingNumber: this.getMTCNNumber,
                                        isMobileLayout: this.state.isMobileLayout,
                                        id: "input_tat_mtcn",
                                        errorMsg: (0,
                                        _.j2)("TrackATransfer.error_invalid_mtcn"),
                                        qmDataRule: "mask",
                                        defaultMTCN: this.state.mtcn ? this.state.mtcn : null
                                    })
                                }), (0,
                                r.jsxs)("form", {
                                    id: "tatForm",
                                    onSubmit: this.handleSubmit,
                                    children: [!this.state.hasMTCN && (0,
                                    r.jsx)("div", {
                                        className: "flex row",
                                        children: (0,
                                        r.jsxs)("div", {
                                            className: "flex col",
                                            children: [(0,
                                            r.jsx)("p", {
                                                id: "label_tat_non_mtcn_title",
                                                "aria-label": (0,
                                                _.j2)("TrackATransfer.nonMTCN_subtitle"),
                                                className: "m-mrg-xxs-bt font-bs ".concat(E()["sub-title"]),
                                                children: (0,
                                                _.j2)("TrackATransfer.nonMTCN_subtitle")
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "m-mrg-xxs-bt font-cl ".concat(E()["tat-radio-options"], " flex"),
                                                children: (0,
                                                r.jsx)(c.yW, {
                                                    name: "NoMTCN",
                                                    onChange: this.onRadioChange,
                                                    selectedValue: this.state.selectedOption,
                                                    isVertical: !0,
                                                    radioData: this.getRadioData(),
                                                    analytics: (0,
                                                    f.PC)("radio", "SENDER_PHONE_NUMBER" === this.state.selectedOption ? "sender-receiver-names" : "sender-phone-number", "click"),
                                                    triggerEvents: e=>{
                                                        (0,
                                                        f.$C)((0,
                                                        f.wu)(e))
                                                    }
                                                })
                                            }), "SENDER_PHONE_NUMBER" === this.state.selectedOption && (0,
                                            r.jsxs)("div", {
                                                className: "flex align-items-end m-mrg-md-bt ".concat(E()["gap-radio-group"], " flex 333-1"),
                                                children: [(0,
                                                r.jsx)("div", {
                                                    id: "select_tat_sender_country_code",
                                                    style: {
                                                        width: this.state.isMobileLayout ? "38%" : "47%"
                                                    },
                                                    children: (0,
                                                    r.jsx)(x.Z, {
                                                        dropDownValueToSet: this.state.countryCode && {
                                                            label: this.state.countryCode,
                                                            value: this.state.countryCodeValue
                                                        },
                                                        onChange: this.countryCodeChange,
                                                        id: "tat_sender_country_code",
                                                        showCombinedISDOptionLabel: !0,
                                                        data: this.isdCodesArr,
                                                        placeHolder: (0,
                                                        _.j2)("TrackATransfer.country_code"),
                                                        ariaLabel: (0,
                                                        _.j2)("TrackATransfer.country_code"),
                                                        floatingLabel: !0,
                                                        noBorder: !0,
                                                        isDisabled: !1,
                                                        isSearchable: !0,
                                                        defaultValue: this.state.countryCode && {
                                                            label: this.state.countryCode,
                                                            value: this.state.countryCodeValue
                                                        },
                                                        ...(0,
                                                        h.OC6)("qmDeltas", "enableCountryCodeMask") ? {
                                                            qmDataRule: "mask"
                                                        } : {},
                                                        autoFillField: "country"
                                                    })
                                                }), (0,
                                                r.jsx)("div", {
                                                    className: E()["number-input"],
                                                    style: {
                                                        width: this.state.isMobileLayout ? "56%" : "47%"
                                                    },
                                                    children: (0,
                                                    r.jsx)(c.G5, {
                                                        ref: this.form1.getRef("mobileNumber"),
                                                        id: "tat_sender_mobile_number",
                                                        inputProps: {
                                                            name: "mobileNumber",
                                                            value: this.state.mobileNumber,
                                                            inputMode: "numeric"
                                                        },
                                                        ariaLabel: (0,
                                                        _.j2)("TrackATransfer.senders_phone_number"),
                                                        label: (0,
                                                        _.j2)("TrackATransfer.senders_phone_number"),
                                                        subLabel: "",
                                                        removeMultipleSpaces: !0,
                                                        textPrefix: "",
                                                        secureTextEntry: !1,
                                                        autoComplete: "off",
                                                        ...(0,
                                                        w.vs)("input_withoutmtcn_phone"),
                                                        onBlur: this.form1.handleBlur,
                                                        errMsg: "",
                                                        errorStyle: {
                                                            position: "absolute"
                                                        },
                                                        obfuscate: !1,
                                                        validations: this.form1.getValidations("mobileNumber"),
                                                        qmDataRule: "mask",
                                                        errorStyleClass: E()["error-position"]
                                                    })
                                                })]
                                            }), "SENDER_RECEIVER_NAMES" === this.state.selectedOption && (0,
                                            r.jsx)("div", {
                                                className: "m-mrg-md-bt ".concat(E()["field-bottom-space"], " flex row 333-2"),
                                                style: {
                                                    alignItems: "flex-start"
                                                },
                                                children: (0,
                                                r.jsxs)("div", {
                                                    className: "".concat(E().gap, " ").concat(E().resetWidth, " flex col"),
                                                    children: [(0,
                                                    r.jsxs)("div", {
                                                        className: "".concat(this.state.isMobileLayout ? "" : "".concat(E().gap, " flex")),
                                                        children: [(0,
                                                        r.jsx)("div", {
                                                            className: "".concat(this.state.isMobileLayout ? "rsp-margin-bottom-xxmedium" : ""),
                                                            children: (0,
                                                            r.jsx)(c.G5, {
                                                                ref: this.form2.getRef("senderFirstName"),
                                                                id: "input_tat_sender_first_name",
                                                                inputProps: {
                                                                    name: "senderFirstName",
                                                                    value: ""
                                                                },
                                                                ariaLabel: (0,
                                                                _.j2)("TrackATransfer.senders_first_name"),
                                                                label: (0,
                                                                _.j2)("TrackATransfer.senders_first_name"),
                                                                subLabel: "",
                                                                removeMultipleSpaces: !0,
                                                                textPrefix: "",
                                                                secureTextEntry: !1,
                                                                autoComplete: "off",
                                                                onBlur: this.form2.handleBlur,
                                                                errMsg: "",
                                                                obfuscate: !1,
                                                                validations: this.form2.getValidations("senderFirstName"),
                                                                ...(0,
                                                                w.vs)("input_tat_sender_first_name"),
                                                                qmDataRule: "encrypt"
                                                            })
                                                        }), (0,
                                                        r.jsx)(c.G5, {
                                                            ref: this.form2.getRef("senderLastName"),
                                                            id: "tat_sender_last_name",
                                                            inputProps: {
                                                                name: "senderLastName",
                                                                value: ""
                                                            },
                                                            label: (0,
                                                            _.j2)("TrackATransfer.senders_last_name"),
                                                            ariaLabel: (0,
                                                            _.j2)("TrackATransfer.senders_last_name"),
                                                            subLabel: "",
                                                            removeMultipleSpaces: !0,
                                                            textPrefix: "",
                                                            secureTextEntry: !1,
                                                            autoComplete: "off",
                                                            onBlur: this.form2.handleBlur,
                                                            errMsg: "",
                                                            obfuscate: !1,
                                                            validations: this.form2.getValidations("senderLastName"),
                                                            ...(0,
                                                            w.vs)("input_tat_sender_last_name"),
                                                            qmDataRule: "encrypt"
                                                        })]
                                                    }), (0,
                                                    r.jsxs)("div", {
                                                        className: "".concat(this.state.isMobileLayout ? "" : "".concat(E().gap, " flex")),
                                                        children: [(0,
                                                        r.jsx)("div", {
                                                            className: "".concat(this.state.isMobileLayout ? "rsp-margin-bottom-xxmedium" : ""),
                                                            children: (0,
                                                            r.jsx)(c.G5, {
                                                                ref: this.form2.getRef("receiverFirstName"),
                                                                id: "tat_receiver_first_name",
                                                                inputProps: {
                                                                    name: "receiverFirstName",
                                                                    value: ""
                                                                },
                                                                ariaLabel: (0,
                                                                _.j2)("TrackATransfer.receivers_first_name"),
                                                                label: (0,
                                                                _.j2)("TrackATransfer.receivers_first_name"),
                                                                subLabel: "",
                                                                removeMultipleSpaces: !0,
                                                                textPrefix: "",
                                                                secureTextEntry: !1,
                                                                autoComplete: "off",
                                                                onBlur: this.form2.handleBlur,
                                                                errMsg: "",
                                                                obfuscate: !1,
                                                                validations: this.form2.getValidations("receiverFirstName"),
                                                                ...(0,
                                                                w.vs)("input_tat_receiver_first_name"),
                                                                qmDataRule: "encrypt"
                                                            })
                                                        }), (0,
                                                        r.jsx)(c.G5, {
                                                            ref: this.form2.getRef("receiverLastName"),
                                                            id: "input_tat_receiver_last_name",
                                                            inputProps: {
                                                                name: "receiverLastName",
                                                                value: ""
                                                            },
                                                            ariaLabel: (0,
                                                            _.j2)("TrackATransfer.receivers_last_name"),
                                                            label: (0,
                                                            _.j2)("TrackATransfer.receivers_last_name"),
                                                            subLabel: "",
                                                            removeMultipleSpaces: !0,
                                                            textPrefix: "",
                                                            secureTextEntry: !1,
                                                            autoComplete: "off",
                                                            onBlur: this.form2.handleBlur,
                                                            errMsg: "",
                                                            obfuscate: !1,
                                                            validations: this.form2.getValidations("receiverLastName"),
                                                            ...(0,
                                                            w.vs)("input_tat_receiver_last_name"),
                                                            qmDataRule: "encrypt"
                                                        })]
                                                    })]
                                                })
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "m-mrg-md-bt ".concat(E()["field-bottom-space"], " flex"),
                                                style: {
                                                    zIndex: 222,
                                                    alignItems: "flex-start"
                                                },
                                                children: (0,
                                                r.jsx)("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: (0,
                                                    r.jsx)(x.Z, {
                                                        dropDownValueToSet: this.state.recCtryCode && this.state.recCtryValue ? {
                                                            label: this.state.recCtryValue,
                                                            value: this.state.recCtryCode
                                                        } : null,
                                                        id: "tat_receiver_country",
                                                        onChange: this.countryChange,
                                                        data: this.countryListItems,
                                                        placeHolder: (0,
                                                        _.j2)("TrackATransfer.receivers_country"),
                                                        floatLabel: (0,
                                                        _.j2)("TrackATransfer.receivers_country"),
                                                        floatingLabel: !0,
                                                        flagEnabled: !0,
                                                        isDisabled: !1,
                                                        isSearchable: !0,
                                                        noBorder: !0,
                                                        defaultValue: this.getDefaultReceiversCountryValue(),
                                                        showError: this.state.errorRcvCountry,
                                                        errorMessage: (0,
                                                        _.j2)("TrackATransfer.error_receiver_country")
                                                    })
                                                })
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "m-mrg-xxs-bt ".concat(E()["tat-amount-type"]),
                                                children: (0,
                                                r.jsx)(x.Z, {
                                                    dropDownValueToSet: {
                                                        label: this.state.amountTypeSelectedLabel,
                                                        value: this.state.amountTypeSelected
                                                    },
                                                    id: "tat_amount_type",
                                                    onChange: this.amountTypeChange,
                                                    data: this.sendReceiveAmountItems,
                                                    isDisabled: !1,
                                                    placeHolder: "",
                                                    floatLabel: "",
                                                    floatingLabel: !1,
                                                    noBorder: !0,
                                                    defaultValue: {
                                                        label: (0,
                                                        _.j2)("TrackATransfer.amount_sent"),
                                                        value: "SEND"
                                                    },
                                                    ...(0,
                                                    w.vs)("dropdown_withoutmtcn_amount_type")
                                                })
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "rsp-margin-bottom-sm",
                                                children: ["SEND" === this.state.amountTypeSelected && (0,
                                                r.jsx)("div", {
                                                    id: "send_amount",
                                                    children: (0,
                                                    r.jsx)(c.m, {
                                                        ref: this.form3.getRef("sendAmount"),
                                                        id: "input_tat_amount",
                                                        inputProps: {
                                                            name: "send_amount",
                                                            value: ""
                                                        },
                                                        removeMultipleSpaces: !0,
                                                        currencies: this.state.senderCurrency,
                                                        isEndToEnd: !0,
                                                        maxWidth: "100%",
                                                        maxLength: 15,
                                                        placeholder: "0.00",
                                                        autoComplete: "off",
                                                        onBlur: this.handleAmountFieldBlur,
                                                        validations: this.form3.getValidations("sendAmount"),
                                                        shouldRoundUpOrDown: "down",
                                                        locale: (null === (s = (0,
                                                        h.oqt)()) || void 0 === s ? void 0 : s.defaultLocal) || (0,
                                                        h.sYq)(),
                                                        defaultValue: "",
                                                        qmDataRule: "encrypt",
                                                        ...(0,
                                                        w.vs)("input_tat_amount"),
                                                        formCurrencies: !0
                                                    })
                                                }), "RECEIVE" === this.state.amountTypeSelected && (0,
                                                r.jsx)("div", {
                                                    id: "receive_amount",
                                                    children: (0,
                                                    r.jsx)(c.m, {
                                                        ref: this.form4.getRef("receiveAmount"),
                                                        id: "tat_receive_amount",
                                                        inputProps: {
                                                            name: "receive_amount",
                                                            value: ""
                                                        },
                                                        removeMultipleSpaces: !0,
                                                        currencies: this.state.recCurrencies,
                                                        onChangeCurrency: this.onCurrencyChange,
                                                        isEndToEnd: !0,
                                                        maxWidth: "100%",
                                                        maxLength: 15,
                                                        placeholder: "0.00",
                                                        autoComplete: "off",
                                                        onBlur: this.handleAmountFieldBlur,
                                                        validations: this.form4.getValidations("receiveAmount"),
                                                        shouldRoundUpOrDown: "down",
                                                        locale: (null === (i = (0,
                                                        h.oqt)()) || void 0 === i ? void 0 : i.defaultLocal) || (0,
                                                        h.sYq)(),
                                                        qmDataRule: "encrypt",
                                                        defaultValue: "",
                                                        formCurrencies: !0
                                                    })
                                                })]
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "flex",
                                                children: (0,
                                                r.jsx)("div", {
                                                    className: "flex1",
                                                    children: (0,
                                                    r.jsx)(c.G5, {
                                                        calendarComponent: (null === (n = (0,
                                                        h.oqt)()) || void 0 === n ? void 0 : n.isDatePickerEnabled) ? ()=>this._renderCalendar() : null,
                                                        ref: this.form.getRef("dateOfTransfer"),
                                                        id: "tat_date_of_transfer",
                                                        ...(0,
                                                        w.vs)("input_withoutmtcn_dot"),
                                                        inputProps: {
                                                            name: "dateOfTransfer",
                                                            value: null === (l = this.state) || void 0 === l ? void 0 : l.dateOfTransfer,
                                                            inputMode: "numeric"
                                                        },
                                                        ariaLabel: (0,
                                                        _.j2)("TrackATransfer.transfer_date"),
                                                        label: (0,
                                                        _.j2)("TrackATransfer.transfer_date"),
                                                        subLabel: "(" + (0,
                                                        b.J4)().dateFormatPlaceholder + ")",
                                                        removeMultipleSpaces: !0,
                                                        textPrefix: "",
                                                        mask: (0,
                                                        b.J4)().dateFormatMask,
                                                        maskChar: "",
                                                        secureTextEntry: !1,
                                                        autoComplete: "off",
                                                        errMsg: "",
                                                        obfuscate: !1,
                                                        qmDataRule: "encrypt",
                                                        validations: this.form.getValidations("dateOfTransfer")
                                                    })
                                                })
                                            })]
                                        })
                                    }), null != this.props.captcha && "" != this.props.captcha && (0,
                                    r.jsx)("div", {
                                        id: "tat_captcha",
                                        className: "m-pad-sm-tp ".concat(E().captcha),
                                        children: (0,
                                        r.jsx)(p.Z, {
                                            onRef: e=>this.captchaField = e,
                                            image: this.props.captcha,
                                            audio: null,
                                            flow: "TAT",
                                            ...(0,
                                            w.vs)("tat_captcha"),
                                            setCaptchaValue: e=>this.setCaptchaState(e)
                                        })
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "m-mrg-xs-tb ".concat(E()["button-end-to-end-block"]),
                                        children: (0,
                                        r.jsx)(c.u2, {
                                            primary: !0,
                                            id: "btn_tat_continue",
                                            type: "submit",
                                            form: "tatForm",
                                            text: (0,
                                            _.j2)("TrackATransfer.track_it"),
                                            ariaLabel: (0,
                                            _.j2)("TrackATransfer.track_it"),
                                            ...(0,
                                            w.vs)("btn_tat_continue"),
                                            analytics: (0,
                                            f.PC)("button", "track-transfer", "continue"),
                                            triggerEvents: e=>{
                                                this.form.handleButtonAnalytics((0,
                                                f.wu)(e))
                                            }
                                            ,
                                            onHover: ()=>{
                                                (0,
                                                j.Fv)("track")
                                            }
                                            ,
                                            dataLinkName: "btn-track-it"
                                        })
                                    }), (0,
                                    r.jsx)("div", {
                                        className: o ? "flex row justify-center align-items-center font-bs " + E()["link-button"] : "m-mrg-xs-tb " + E()["button-end-to-end-block"],
                                        style: o ? {
                                            color: w.Dt.primary
                                        } : {},
                                        children: (0,
                                        r.jsx)(c.u2, {
                                            id: this.state.hasMTCN ? "lbtn_tat_switch_without_mtcn_mode" : "lbtn_tat_switch_know_mtcn_mode",
                                            type: "button",
                                            link: !!o,
                                            secondary: !o,
                                            color: o ? w.Dt.primary : w.Dt.actionSecondaryColor,
                                            text: this.state.hasMTCN ? (0,
                                            _.j2)("TrackATransfer.without_mtcn") : (0,
                                            _.j2)("TrackATransfer.i_know_my_mtcn"),
                                            ariaLabel: this.state.hasMTCN ? (0,
                                            _.j2)("TrackATransfer.without_mtcn") : (0,
                                            _.j2)("TrackATransfer.i_know_my_mtcn"),
                                            onClick: ()=>{
                                                this.setState({
                                                    hasMTCN: !this.state.hasMTCN,
                                                    showTATError: !1,
                                                    inquiryType: "SENDER",
                                                    mtcn: "",
                                                    isFormSubmitted: !1
                                                }),
                                                this.resetMTCN = !this.resetMTCN
                                            }
                                            ,
                                            analytics: (0,
                                            f.PC)(o ? "link" : "button", this.state.hasMTCN ? "dont-know-mtcn" : "know-mtcn", "continue"),
                                            triggerEvents: e=>{
                                                this.form.handleButtonAnalytics((0,
                                                f.wu)(e))
                                            }
                                            ,
                                            dataLinkName: this.state.hasMTCN ? "btn-track-transfer-without-mtcn" : "btn-track-transfer-with-mtcn"
                                        })
                                    }), o || (0,
                                    h.kar)() ? (0,
                                    r.jsx)(r.Fragment, {}) : (0,
                                    r.jsx)("div", {
                                        className: "flex row justify-center align-items-center font-bs ".concat(E()["link-button"]),
                                        style: {
                                            color: w.Dt.primary
                                        },
                                        children: (0,
                                        r.jsx)(c.u2, {
                                            id: "lbtn_tat_track_recent_transfer",
                                            type: "button",
                                            link: !0,
                                            text: (0,
                                            _.j2)("TrackATransfer.track_recent_transfer"),
                                            ariaLabel: (0,
                                            _.j2)("TrackATransfer.track_recent_transfer"),
                                            onClick: ()=>{
                                                this.navigateTrackRecentTransfer()
                                            }
                                            ,
                                            analytics: (0,
                                            f.PC)("link", "track_recent_transfer", "continue"),
                                            triggerEvents: e=>{
                                                this.form.handleButtonAnalytics((0,
                                                f.wu)(e))
                                            }
                                        })
                                    }), "SENDER" == this.state.inquiryType ? this.getRecentActivity() : null]
                                }), (0,
                                r.jsx)("div", {
                                    children: (0,
                                    r.jsx)(F.M, {
                                        adunitPath: B.default.GOOGLE_ADS_UNIT_ID.TAT_WEB,
                                        page: "TAT",
                                        phase: 1
                                    })
                                })]
                            })
                        })
                    })
                })
            }
            constructor(e) {
                var t, a, s, i, n, l, o;
                super(e),
                this.form = new T.Z,
                this.form1 = new T.Z,
                this.form2 = new T.Z,
                this.form3 = new T.Z,
                this.form4 = new T.Z,
                this.resetMTCN = !1,
                this.sendReceiveAmountItems = [],
                this.isdCodesArr = [],
                this.txnList = [],
                this.MAX_RECENT_ACTIVITY = 3,
                this.layoutChangeHandler = e=>this.setState({
                    isMobileLayout: e && e.matches
                }),
                this.onHistoryClick = ()=>{
                    (0,
                    y.$J)(C.Mb.bind(this, y.r5.TransactionHistory))
                }
                ,
                this.handleSubmit = e=>{
                    var t;
                    e && e.preventDefault(),
                    this.setState({
                        isFormSubmitted: !0
                    });
                    let a = !0;
                    if (this.props.captcha && (a = null === (t = this.captchaField) || void 0 === t ? void 0 : t.validateCaptcha()),
                    this.state.hasMTCN) {
                        if (this.state.isMTCNValid && a) {
                            let e = (0,
                            h.iAw)(this.state.mtcn, this.txnList);
                            this.props.trackTransfer({
                                ...this.state,
                                selectedTransaction: e
                            })
                        } else
                            this.state.isMTCNValid || this.setState({
                                showTATError: !0
                            })
                    } else {
                        let e = !0
                          , t = !0
                          , r = !0
                          , s = !0
                          , i = !0;
                        e = this.form.validateForm(),
                        "SENDER_PHONE_NUMBER" === this.state.selectedOption ? t = this.form1.validateForm() : r = this.form2.validateForm(),
                        "SEND" === this.state.amountTypeSelected ? s = this.form3.validateForm() : i = this.form4.validateForm(),
                        this.state.recCtryCode ? this.setState({
                            errorRcvCountry: !1
                        }) : (e = !1,
                        this.setState({
                            errorRcvCountry: !0
                        })),
                        e && t && r && s && i && a ? ("SEND" === this.state.amountTypeSelected ? this.setState(Object.assign(this.state, {
                            inquiryType: "SENDER"
                        })) : this.setState(Object.assign(this.state, {
                            inquiryType: "RECEIVER"
                        })),
                        this.props.trackTransfer({
                            ...this.state,
                            ...this.form.getState(),
                            ...this.form1.getState(),
                            ...this.form2.getState()
                        })) : (0,
                        h.$S_)()
                    }
                }
                ,
                this.getMTCNNumber = e=>{
                    e && e.length > 0 ? 10 === e.length ? this.setState({
                        isMTCNValid: !0,
                        showTATError: !1,
                        mtcn: e
                    }) : this.setState({
                        isMTCNValid: !1,
                        mtcn: e
                    }) : this.setState({
                        isMTCNValid: !1,
                        mtcn: ""
                    })
                }
                ,
                this.onRadioChange = e=>{
                    "SENDER_PHONE_NUMBER" === e.target.value ? this.setState({
                        selectedOption: "SENDER_PHONE_NUMBER"
                    }) : this.setState({
                        selectedOption: "SENDER_RECEIVER_NAMES"
                    })
                }
                ,
                this.countryChange = e=>{
                    this.setState(Object.assign(this.state, {
                        recCtryCode: e.value,
                        recCtryValue: e.label,
                        errorRcvCountry: !1
                    })),
                    this.setRecCurrencies(e.value)
                }
                ,
                this.amountTypeChange = e=>{
                    this.setState({
                        amountTypeSelected: e.value,
                        amountTypeSelectedLabel: e.label
                    })
                }
                ,
                this.countryCodeChange = e=>{
                    this.setState({
                        countryCode: e.label,
                        countryCodeValue: e.value
                    })
                }
                ,
                this.onCurrencyChange = e=>{
                    this.setState({
                        recCurrencyISOCode: e.label
                    })
                }
                ,
                this.handleAmountFieldBlur = (e,t)=>{
                    let a = e.getValue();
                    return this.setState({
                        amount: a
                    }),
                    t
                }
                ,
                this.triggerAnalyticsForAskSender = ()=>{
                    (0,
                    f.$C)({
                        analytics: (0,
                        f.PC)("link", "ask-sender", "click"),
                        adobeButtonAttrs: {
                            sc_link_id: "btn-ask-your-sender"
                        }
                    })
                }
                ,
                this.renderReceiverHelp = ()=>(0,
                r.jsx)("div", {
                    id: "label_tat_receiver_help",
                    className: "flex col font-bs align-items-start ".concat(E()["sender-link-container"]),
                    children: (0,
                    r.jsx)("p", {
                        id: "label_tat_subtitle",
                        "aria-label": (0,
                        _.j2)("TrackATransfer.subtitle"),
                        style: {
                            marginBottom: 0
                        },
                        children: (0,
                        r.jsx)(S.m, {
                            id: "label_receiver_ask_your_sender",
                            ...(0,
                            w.vs)("label_receiver_ask_your_sender"),
                            defaultValue: (0,
                            _.j2)("TrackATransfer.subtitle", {
                                interpolation: {
                                    prefix: "__",
                                    suffix: "__"
                                }
                            }),
                            values: {
                                AskSender: (0,
                                r.jsx)("a", {
                                    href: "mailto:",
                                    ...(0,
                                    w.vs)("link_receiver_ask_your_sender"),
                                    style: {
                                        color: w.Dt.primary,
                                        fontFamily: "EuclidWU",
                                        textDecoration: "underline",
                                        cursor: "pointer"
                                    },
                                    onClick: this.triggerAnalyticsForAskSender,
                                    "data-linkname": "btn-ask-your-sender",
                                    "aria-label": (0,
                                    _.j2)("TrackATransfer.subtitle"),
                                    children: (0,
                                    _.j2)("TrackATransfer.subtitle")
                                })
                            }
                        })
                    })
                }),
                this.renderContent = ()=>(0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)(S.m, {
                        "aria-label": (0,
                        _.j2)("TrackATransfer.transfer_history"),
                        id: "label_tat_transfer_history",
                        defaultValue: (0,
                        _.j2)("TrackATransfer.transfer_history", {
                            interpolation: {
                                prefix: "__",
                                suffix: "__"
                            }
                        }),
                        values: {
                            History: (0,
                            r.jsx)(c.u2, {
                                ariaLabel: (0,
                                _.j2)("TrackATransfer.transfer_history_text"),
                                id: "link_sender_history",
                                style: {
                                    cursor: "pointer",
                                    display: "inline-flex",
                                    padding: 0
                                },
                                anchor: !0,
                                text: (0,
                                _.j2)("TrackATransfer.transfer_history_text"),
                                onClick: ()=>{
                                    this.onHistoryClick()
                                }
                                ,
                                analytics: (0,
                                f.PC)("tooltip", "mtcn-tooltip", "click"),
                                triggerEvents: e=>{
                                    (0,
                                    f.$C)((0,
                                    f.wu)(e))
                                }
                                ,
                                color: w.Dt.actionBgPrimary
                            }),
                            EMAIL: (0,
                            r.jsx)(c.u2, {
                                ariaLabel: (0,
                                _.j2)("TrackATransfer.transfer_history_email"),
                                id: "link_sender_history_email",
                                style: {
                                    cursor: "pointer",
                                    display: "inline-flex",
                                    padding: 0
                                },
                                anchor: !0,
                                text: (0,
                                _.j2)("TrackATransfer.transfer_history_email"),
                                analytics: (0,
                                f.PC)("link", "history", "continue"),
                                triggerEvents: e=>{
                                    this.form.handleButtonAnalytics((0,
                                    f.wu)(e))
                                }
                            })
                        }
                    }), (0,
                    r.jsx)("div", {
                        id: "label_tat_mtcnMessage",
                        className: "rsp-margin-top-medium",
                        "aria-label": (0,
                        _.j2)("TrackATransferLeap.mtcnMessage"),
                        children: (0,
                        _.j2)("TrackATransferLeap.mtcnMessage")
                    })]
                }),
                this.renderSenderHelp = ()=>(0,
                r.jsxs)("div", {
                    id: "label_tat_sender_history_help",
                    className: "row font-bs justify-content-center align-items-center ".concat(E()["history-link-container"]),
                    children: [(0,
                    r.jsx)("p", {
                        className: "rsp-margin-bottom-medium",
                        "aria-label": (0,
                        _.j2)("TrackATransferLeap.instructionMessage"),
                        id: "label_tat_sender_mtcn_help",
                        children: (0,
                        r.jsx)("span", {
                            id: "label_tat_instructionMessage",
                            children: (0,
                            _.j2)("TrackATransferLeap.instructionMessage")
                        })
                    }), (0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsx)(c.ft, {
                            closeDelay: 1600,
                            dataLinkName: "btn-mtcn-tooltip",
                            content: this.renderContent()
                        })
                    })]
                }),
                this.resetValue = ()=>{
                    var e, t, a, r, s, i, n, l, o, c, d, u, m, h;
                    null === (t = this.form1.getRef("mobileNumber")) || void 0 === t || null === (e = t.current) || void 0 === e || e.setValue(""),
                    null === (r = this.form2.getRef("senderFirstName")) || void 0 === r || null === (a = r.current) || void 0 === a || a.setValue(""),
                    null === (i = this.form2.getRef("senderLastName")) || void 0 === i || null === (s = i.current) || void 0 === s || s.setValue(""),
                    null === (l = this.form2.getRef("receiverFirstName")) || void 0 === l || null === (n = l.current) || void 0 === n || n.setValue(""),
                    null === (c = this.form2.getRef("receiverLastName")) || void 0 === c || null === (o = c.current) || void 0 === o || o.setValue(""),
                    null === (u = this.form3.getRef("sendAmount")) || void 0 === u || null === (d = u.current) || void 0 === d || d.setValue(""),
                    null === (h = this.form4.getRef("receiveAmount")) || void 0 === h || null === (m = h.current) || void 0 === m || m.setValue("")
                }
                ,
                this.getFieldValidation = ()=>{
                    if ((0,
                    h.OC6)("commonFeatures", "enableCountryValidation"))
                        switch (this.state.countryCodeValue) {
                        case "BH":
                            return (0,
                            P.CV)().TAT_BH;
                        case "QA":
                            return (0,
                            P.CV)().TAT_QA;
                        case "IN":
                            return (0,
                            P.CV)().TAT_IN;
                        case "AE":
                            return (0,
                            P.CV)().TAT_AE;
                        default:
                            return (0,
                            P.CV)().TAT_Others
                        }
                    return this.form1.getValidations("mobileNumber")
                }
                ,
                this._renderCalendar = ()=>{
                    var e, t;
                    let a = null === (t = this.form.getRef("dateOfTransfer")) || void 0 === t ? void 0 : null === (e = t.current) || void 0 === e ? void 0 : e.getValue()
                      , s = a && u()(a, B.default.DATE_FORMAT.DMY).isValid() ? new Date(u()(a, B.default.DATE_FORMAT.DMY).toDate()) : null;
                    return (0,
                    r.jsx)("div", {
                        children: (0,
                        r.jsx)(I.j, {
                            onChange: e=>{
                                this.setState(Object.assign(this.state, {
                                    dateOfTransfer: u()(e).format(B.default.DATE_FORMAT.DMY)
                                }))
                            }
                            ,
                            selected: s || null,
                            customInput: (0,
                            r.jsx)(q.Z, {})
                        })
                    })
                }
                ,
                this.onClickHandlerForSenderAndReciverTab = e=>{
                    this.resetValue();
                    let t = this.sendReceiveAmountItems.find(t=>t.value == e);
                    "SEND" === e ? this.setState({
                        inquiryType: "SENDER",
                        amountTypeSelected: t.value,
                        amountTypeSelectedLabel: t.label
                    }) : this.setState({
                        inquiryType: "RECEIVER",
                        amountTypeSelected: t.value,
                        amountTypeSelectedLabel: t.label
                    })
                }
                ,
                this.form1.addField("mobileNumber", "sender_mobileNumber"),
                this.form2.addField("senderFirstName", "firstName"),
                this.form2.addField("senderLastName", "lastName"),
                this.form2.addField("receiverFirstName", "receiver_name_firstName"),
                this.form2.addField("receiverLastName", "receiver_name_lastName"),
                this.form.addField("dateOfTransfer", "dateOfTransfer"),
                this.form3.addField("sendAmount", "tat_amount"),
                this.form4.addField("receiveAmount", "tat_amount"),
                this.txnList = null === (s = this.props.txnDetailsInfo) || void 0 === s ? void 0 : null === (a = s.txnDetails) || void 0 === a ? void 0 : null === (t = a.transactions) || void 0 === t ? void 0 : t.transaction;
                let d = (0,
                h.RLd)()
                  , m = (0,
                N.lG)();
                this.isdCodesArr = (0,
                v.r1)();
                let p = this.props.defaultMtcn ? this.props.defaultMtcn : "";
                (null === (n = (0,
                j.mN)()) || void 0 === n ? void 0 : null === (i = n.query) || void 0 === i ? void 0 : i.mtcn) && (p = null === (o = (0,
                j.mN)()) || void 0 === o ? void 0 : null === (l = o.query) || void 0 === l ? void 0 : l.mtcn),
                this.state = {
                    trackFromHistory: !!this.props.trackFromHistory && this.props.trackFromHistory,
                    mtcn: p,
                    isCaptchaValid: null,
                    inquiryType: "SENDER",
                    isFormSubmitted: !1,
                    captcha: null,
                    isMTCNValid: !!this.props.defaultMtcn,
                    hasMTCN: !0,
                    selectedOption: "SENDER_PHONE_NUMBER",
                    mobileNumber: "",
                    countriesList: null,
                    recCtryValue: this.props.isAppCountryExcluded ? "" : (0,
                    h.pDr)((0,
                    h.RLd)()),
                    recCtryCode: this.props.isAppCountryExcluded ? "" : (0,
                    h.RLd)(),
                    amountTypeSelected: "SEND",
                    amountTypeSelectedLabel: (0,
                    _.j2)("TrackATransfer.amount_sent"),
                    dateOfTransfer: null,
                    amount: null,
                    countryCode: (0,
                    h.$Dx)(),
                    countryCodeValue: d,
                    recCurrencyISOCode: null,
                    recCurrencies: null,
                    senderCurrency: [{
                        value: m,
                        label: m
                    }],
                    isMobileLayout: (0,
                    k.ai)(),
                    showTATError: !1,
                    selectedTransaction: (0,
                    h.iAw)(this.props.defaultMtcn, this.txnList),
                    errorRcvCountry: !1
                },
                this.props.countriesList && (this.countryListItems = this.props.topCountriesList.concat(this.props.countriesList).map(e=>({
                    label: e.value,
                    value: e.label
                }))),
                this.setRecCurrencies(d, this.state),
                this.sendReceiveAmountItems.push({
                    label: (0,
                    _.j2)("TrackATransfer.amount_sent"),
                    value: "SEND"
                }),
                this.sendReceiveAmountItems.push({
                    label: (0,
                    _.j2)("TrackATransfer.amount_received"),
                    value: "RECEIVE"
                }),
                console.log("this.props.captcha"),
                console.log(this.props.captcha)
            }
        }
        ;
        var H = (0,
        l.$j)(e=>{
            var t, a, r;
            let s = (0,
            g.getCountriesSelector)(e)
              , i = (0,
            h.RLd)()
              , n = (null === (r = (0,
            h.oqt)()) || void 0 === r ? void 0 : null === (a = r.sender_country_config) || void 0 === a ? void 0 : null === (t = a[i]) || void 0 === t ? void 0 : t.countriesExcluded) || []
              , l = null == n ? void 0 : n.includes(i);
            return {
                captcha: (e.captcha && e.captcha.TAT ? e.captcha.TAT.image : null) || O.LJ.get(O.LJ.keys.recentTATCaptcha),
                optimusResponse: e.registrationOptimus,
                country: (0,
                g.defaultCountrySelector)(e),
                countriesList: l ? [...s, {
                    value: (0,
                    h.pDr)(i),
                    label: i
                }] : s,
                topCountriesList: (0,
                g.getTopCountriesSelector)(e),
                destCurrencies: e.destinationCurrenciesList,
                txnDetailsInfo: e.txnDetailsInfo,
                isAppCountryExcluded: l
            }
        }
        , function(e) {
            return {
                trackTransfer: t=>e((0,
                m.cO)(t)),
                resubmit: t=>{
                    e((0,
                    v.bh)(null)),
                    (0,
                    v.w_)((0,
                    m.cO)(t))
                }
                ,
                showCustomPopUp: t=>e((0,
                o.$W)(t))
            }
        })(TAT);
        function Index(e) {
            let t = (0,
            s.useRouter)();
            return (0,
            j.OD)(t),
            (0,
            r.jsx)(i.Z, {
                router: t,
                PageComponent: H,
                pageProps: {
                    ...e,
                    screenId: "TAT"
                }
            })
        }
    },
    5141: function(e) {
        e.exports = {
            googleAdsContainer: "GoogleAds_googleAdsContainer__8BHLI"
        }
    },
    58284: function(e) {
        e.exports = {
            header: "TAT_header__A5P5U",
            "tat-progress-container": "TAT_tat-progress-container__aQh_i",
            gap: "TAT_gap__fM1zs",
            "gap-radio-group": "TAT_gap-radio-group__VTU_r",
            mtcnText: "TAT_mtcnText__KYBqu",
            mtcnSubtitle: "TAT_mtcnSubtitle__SZf81",
            mtcnTitle: "TAT_mtcnTitle__UXaEH",
            pageTitle: "TAT_pageTitle__qQsFo",
            "number-input": "TAT_number-input__AYNc4",
            "mtcn-container": "TAT_mtcn-container__F3VoB",
            "history-link-container": "TAT_history-link-container__v_8E_",
            "sender-link-container": "TAT_sender-link-container__lTchB",
            "link-button": "TAT_link-button__cTH7B",
            captcha: "TAT_captcha__QB53_",
            "rencet-activity-title": "TAT_rencet-activity-title__zx9px",
            resetWidth: "TAT_resetWidth___exOT",
            "error-position": "TAT_error-position__DQtem"
        }
    }
}, function(e) {
    e.O(0, [4410, 8635, 8239, 9774, 2888, 179], function() {
        return e(e.s = 77732)
    }),
    _N_E = e.O()
}
]);
