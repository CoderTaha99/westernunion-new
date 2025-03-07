(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8239], {
    18239: function(t, i, n) {
        "use strict";
        var e = n(85893)
          , a = n(67294)
          , o = n(26585)
          , l = n.n(o)
          , d = n(53261)
          , s = n(8171)
          , r = n(35959)
          , c = n(76459)
          , v = n(1400)
          , u = n(51175)
          , m = n(99290)
          , _ = n(2664)
          , y = n(39082)
          , p = n(19865)
          , x = n(49490)
          , h = n(24287)
          , f = n(58032)
          , C = n(40973)
          , D = n(77681)
          , j = n(14869)
          , k = n(63831);
        i.Z = (0,
        a.memo)(function(t) {
            var i, n, a, o, g, T, b, E, I, N, L, O, S, R, w, P, U, F, A, q, H, B, G, M, z, Y, X, Z, K, W, $, V, Q, J, tt, ti, tn, te, ta, to, tl, td, ts, tr, tc, tv, tu, tm, t_, ty, tp, tx, th, tf, tC, tD, tj, tk, tg, tT, tb, tE, tI, tN, tL, tO;
            let {transaction: tS, isPendingTxn: tR, type: tw, retailTransactionStatus: tP, index: tU, textColorRequired: tF=null, mtcn: tA="", trackBtn: tq, onTrack: tH, onResend: tB, hideResend: tG=!1, isResumeTxn: tM=!1, isInprogressTxn: tz=!1, isPaymentInstructionsEnable: tY=!1, visiblePaymentInstructionLink: tX=!1} = t;
            (0,
            d.Tt)();
            let tZ = (null == tS ? void 0 : null === (n = tS.payment_details) || void 0 === n ? void 0 : null === (i = n.origination) || void 0 === i ? void 0 : i.principal_amount) ? null == tS ? void 0 : null === (o = tS.payment_details) || void 0 === o ? void 0 : null === (a = o.origination) || void 0 === a ? void 0 : a.principal_amount : null == tS ? void 0 : null === (T = tS.paymentDetails) || void 0 === T ? void 0 : null === (g = T.origination) || void 0 === g ? void 0 : g.principalAmount
              , tK = (null == tS ? void 0 : null === (E = tS.payment_details) || void 0 === E ? void 0 : null === (b = E.origination) || void 0 === b ? void 0 : b.currency_iso_code) ? null == tS ? void 0 : null === (N = tS.payment_details) || void 0 === N ? void 0 : null === (I = N.origination) || void 0 === I ? void 0 : I.currency_iso_code : null == tS ? void 0 : null === (O = tS.paymentDetails) || void 0 === O ? void 0 : null === (L = O.origination) || void 0 === L ? void 0 : L.currencyIsoCode
              , tW = (0,
            r.Nz4)(parseFloat(tZ) / 100, tK, (null === (R = (0,
            r.oqt)()) || void 0 === R ? void 0 : null === (S = R.global) || void 0 === S ? void 0 : S.numberPad) && h.default.ZERO_FRACTION_DIGIT);
            if ((null == tS ? void 0 : null === (P = tS.payment_details) || void 0 === P ? void 0 : null === (w = P.destination) || void 0 === w ? void 0 : w.currency_iso_code) == h.default.CURRENCY.USD && (0,
            r.OC6)("estimateDetailsCommonfeatures", "cbExchangerate")) {
                let t = String((null == tS ? void 0 : null === (tI = tS.payment_details) || void 0 === tI ? void 0 : null === (tE = tI.origination) || void 0 === tE ? void 0 : tE.principal_amount) - (null == tS ? void 0 : null === (tN = tS.payment_details) || void 0 === tN ? void 0 : tN.processingFees));
                tW = (0,
                r.Nz4)(parseFloat(t) / 100, tK, (null === (tO = (0,
                r.oqt)()) || void 0 === tO ? void 0 : null === (tL = tO.global) || void 0 === tL ? void 0 : tL.numberPad) && h.default.ZERO_FRACTION_DIGIT)
            }
            let t$ = (0,
            p.tO)()
              , tV = {
                firstName: (null == tS ? void 0 : null === (F = tS.receiver) || void 0 === F ? void 0 : null === (U = F.name) || void 0 === U ? void 0 : U.first_name) ? null === (A = tS.receiver.name.first_name) || void 0 === A ? void 0 : A[0] : null == tS ? void 0 : null === (B = tS.receiver) || void 0 === B ? void 0 : null === (H = B.name) || void 0 === H ? void 0 : null === (q = H.first) || void 0 === q ? void 0 : q[0],
                lastName: (null == tS ? void 0 : null === (M = tS.receiver) || void 0 === M ? void 0 : null === (G = M.name) || void 0 === G ? void 0 : G.last_name) ? null === (z = tS.receiver.name.last_name) || void 0 === z ? void 0 : z[0] : null == tS ? void 0 : null === (Z = tS.receiver) || void 0 === Z ? void 0 : null === (X = Z.name) || void 0 === X ? void 0 : null === (Y = X.last) || void 0 === Y ? void 0 : Y[0]
            };
            if (tS && !tS.receiver && !tS.payment_details)
                return null;
            (tz || tR) && (tG = !0,
            tq = !1),
            (null === (W = tS.kyc) || void 0 === W ? void 0 : null === (K = W.sd) || void 0 === K ? void 0 : K.status) && (tG = !0),
            ((null == tS ? void 0 : null === (V = tS.receiver) || void 0 === V ? void 0 : null === ($ = V.displayName) || void 0 === $ ? void 0 : $.toUpperCase()) == h.default.HISTORY.WU_FOUNDATION_NAME || (null == tS ? void 0 : null === (Q = tS.wu_product) || void 0 === Q ? void 0 : Q.name) === h.default.WU_PRODUCT.BILL_PAYMENT) && (tG = !0);
            let tQ = (0,
            _.I0)();
            return (0,
            e.jsxs)(e.Fragment, {
                children: [(0,
                e.jsx)(s.a9, {
                    badgesType: "text",
                    userDetails: tV,
                    flagCode: tS.payment_details ? null === (J = tS.payment_details.destination) || void 0 === J ? void 0 : J.country_iso_code : tS.paymentDetails.destination.countryIsoCode,
                    url: t$
                }), (0,
                e.jsxs)("div", {
                    className: "flex1 m-mrg-xxxxs-lr",
                    children: [(0,
                    e.jsx)("div", {
                        qmDataRule: "encrypt",
                        className: "font-bs ".concat(l()["rec-name"]),
                        id: "label_history_receiver_name",
                        children: (0,
                        r.OC6)("historyLeap", "showFullName") ? "".concat((0,
                        r.udH)(null == tS ? void 0 : null === (tt = tS.receiver) || void 0 === tt ? void 0 : tt.name, (null == tS ? void 0 : null === (tn = tS.receiver) || void 0 === tn ? void 0 : null === (ti = tn.adress) || void 0 === ti ? void 0 : ti.country_iso_code) || (null == tS ? void 0 : null === (ta = tS.payment_details) || void 0 === ta ? void 0 : null === (te = ta.destination) || void 0 === te ? void 0 : te.country_iso_code), !0)) : (0,
                        e.jsxs)(e.Fragment, {
                            children: [(null == tS ? void 0 : null === (tl = tS.receiver) || void 0 === tl ? void 0 : null === (to = tl.name) || void 0 === to ? void 0 : to.first_name) ? null == tS ? void 0 : null === (tr = tS.receiver) || void 0 === tr ? void 0 : null === (ts = tr.name) || void 0 === ts ? void 0 : null === (td = ts.first_name) || void 0 === td ? void 0 : td.toLowerCase() : null == tS ? void 0 : null === (tu = tS.receiver) || void 0 === tu ? void 0 : null === (tv = tu.name) || void 0 === tv ? void 0 : null === (tc = tv.first) || void 0 === tc ? void 0 : tc.toLowerCase(), " ", (null == tS ? void 0 : null === (t_ = tS.receiver) || void 0 === t_ ? void 0 : null === (tm = t_.name) || void 0 === tm ? void 0 : tm.last_name) ? null == tS ? void 0 : null === (tx = tS.receiver) || void 0 === tx ? void 0 : null === (tp = tx.name) || void 0 === tp ? void 0 : null === (ty = tp.last_name) || void 0 === ty ? void 0 : ty.toLowerCase() : null == tS ? void 0 : null === (tC = tS.receiver) || void 0 === tC ? void 0 : null === (tf = tC.name) || void 0 === tf ? void 0 : null === (th = tf.last) || void 0 === th ? void 0 : th.toLowerCase()]
                        })
                    }), (0,
                    e.jsxs)("div", {
                        className: "font-cm ".concat(l()["transaction-date-status"]),
                        children: [(null == tS ? void 0 : tS.filing_date) || (null == tS ? void 0 : tS.money_transfer_control) || (null == tS ? void 0 : tS.moneyTransferControl) ? (0,
                        e.jsx)("span", {
                            id: "text_txn_history_transfer_date",
                            "qm-data-rule": "encrypt",
                            children: (0,
                            c.cm)(tS.filing_date || new Date(tS.money_transfer_control ? tS.money_transfer_control.date : null === (tD = tS.moneyTransferControl) || void 0 === tD ? void 0 : tD.date), c.$F.backEndDateFormatYYYYMMDD)
                        }) : " ", (0,
                        r.OC6)("historyLeap", "showPayout") ? (0,
                        e.jsxs)("div", {
                            className: "pos-relative ".concat(l()["transaction-status"]),
                            id: "text_txn_payout_method",
                            children: [(0,
                            e.jsx)("span", {
                                style: (0,
                                p.dZ)() ? {
                                    backgroundColor: u.Dt.davyGrey,
                                    right: "5px"
                                } : {
                                    backgroundColor: u.Dt.davyGrey,
                                    left: "5px"
                                },
                                className: l()["transaction-status-dot"]
                            }), (0,
                            e.jsx)("span", {
                                id: "text_txn_payout",
                                style: {
                                    color: u.Dt.davyGrey
                                },
                                ...(0,
                                r.OC6)("qmDeltas", "applyQMDelta") ? {
                                    "qm-data-rule": "encrypt"
                                } : {},
                                children: (0,
                                f.Kk)(tS)
                            })]
                        }) : (0,
                        e.jsx)(e.Fragment, {}), (tS.status || tR || tz) && (0,
                        e.jsxs)("div", {
                            className: "pos-relative ".concat(l()["transaction-status"]),
                            id: "text_txn_history_status",
                            children: [(0,
                            e.jsx)("span", {
                                style: (0,
                                p.dZ)() ? {
                                    right: "5px",
                                    backgroundColor: (0,
                                    r.UuD)(tS) || ""
                                } : {
                                    backgroundColor: (0,
                                    r.UuD)(tS) || ""
                                },
                                className: l()["transaction-status-dot"]
                            }), tR || tF || tz ? (0,
                            e.jsx)("span", {
                                style: {
                                    color: "".concat((0,
                                    r.OC6)("historyLeap", "enableTransactionStatusColor") || (0,
                                    r.jaz)(tS) ? (0,
                                    r.UuD)(tS) : u.Dt.textPrimary)
                                },
                                children: tR ? (0,
                                v.j2)("HistoryLeap.transactionStatus.Incomplete") : tz ? (0,
                                v.j2)("HistoryLeap.transactionStatus.Inprogress") : (0,
                                r.vbN)(null == tS ? void 0 : tS.status)
                            }) : (0,
                            e.jsx)("span", {
                                id: "label_transaction_status_".concat(null === (tj = tS.status) || void 0 === tj ? void 0 : tj.toLowerCase()),
                                qmDataRule: "encrypt",
                                style: {
                                    color: "".concat((0,
                                    r.OC6)("historyLeap", "enableTransactionStatusColor") || (0,
                                    r.jaz)(tS) ? (0,
                                    r.UuD)(tS) : u.Dt.textPrimary)
                                },
                                children: (0,
                                C.Be)(tS) ? (0,
                                C.Be)(tS) : (0,
                                r.vbN)(null == tS ? void 0 : tS.status)
                            })]
                        }), "DIGITAL" != tw && tP && tP(tU)]
                    })]
                }), (0,
                e.jsxs)("div", {
                    children: [(0,
                    e.jsx)(s.X2, {
                        children: (0,
                        e.jsxs)(s.JX, {
                            children: [(0,
                            e.jsxs)("div", {
                                qmDataRule: "encrypt",
                                className: "".concat("font-bs ".concat(l()["amount-details"]), " ").concat((0,
                                r.OC6)("historyLeap", "trackCancelButtonDisabled") ? l()["amount-details-mtcn"] : ""),
                                id: "text_txn_history_receive_amount",
                                children: [tW, " ", tS.payment_details ? null === (tg = tS.payment_details) || void 0 === tg ? void 0 : null === (tk = tg.origination) || void 0 === tk ? void 0 : tk.currency_iso_code : tS.paymentDetails.origination.currencyIsoCode]
                            }), !((0,
                            r.OC6)("historyLeap", "trackButtonEnabledOn") && (null === (tT = (0,
                            r.OC6)("historyLeap", "trackButtonEnabledOn")) || void 0 === tT ? void 0 : tT.includes((0,
                            j.Ii)()))) && (0,
                            r.OC6)("historyLeap", "trackCancelButtonDisabled") ? [h.default.RECEIPT_STATUS.SUCCESS, h.default.RECEIPT_STATUS.DELIVERED_ORDER, h.default.RECEIPT_STATUS.RECEIVED_ORDER, h.default.RECEIPT_STATUS.REFUNDED].includes(null === (tb = tS.status_code) || void 0 === tb ? void 0 : tb.toString()) ? (0,
                            e.jsx)("div", {
                                className: "font-cm ".concat(l()["mtcn-details"]),
                                id: "text_txn_history_mtcn",
                                children: (0,
                                e.jsx)(s.X2, {
                                    children: (0,
                                    e.jsx)("span", {
                                        qmDataRule: "mask",
                                        children: (0,
                                        v.j2)("HistoryLeap.txnDetails.mtcn") + " " + tA
                                    })
                                })
                            }) : (0,
                            e.jsx)(e.Fragment, {}) : (0,
                            e.jsxs)(s.X2, {
                                className: "ai-ctr jc-end",
                                children: [tq && !tY && (0,
                                e.jsx)("div", {
                                    className: "ai-slf-end",
                                    children: (0,
                                    e.jsx)(s.u2, {
                                        anchor: !0,
                                        type: "button",
                                        width: "100%",
                                        id: "btn_txn_history_item_track",
                                        dataLinkName: "btn-recent-transfer-track",
                                        text: (0,
                                        v.j2)("TrackATransfer.track"),
                                        ariaLabel: (0,
                                        v.j2)("TrackATransfer.track"),
                                        onClick: ()=>tH(tA.replace(/-/g, ""), tS),
                                        onHover: ()=>{
                                            (0,
                                            x.Fv)("track")
                                        }
                                        ,
                                        analytics: (0,
                                        m.PC)("link", "track", "click"),
                                        triggerEvents: t=>{
                                            (0,
                                            m.$C)((0,
                                            m.wu)(t))
                                        }
                                    })
                                }), "DIGITAL" === tw && tB && !tG && !tY && (0,
                                e.jsx)("div", {
                                    className: "ai-slf-end",
                                    children: (0,
                                    e.jsxs)(e.Fragment, {
                                        children: [(0,
                                        e.jsx)("span", {
                                            style: {
                                                paddingLeft: 12
                                            }
                                        }), (0,
                                        e.jsx)(s.u2, {
                                            anchor: !0,
                                            type: "button",
                                            width: "100%",
                                            id: "btn_txn_history_item_resend",
                                            dataLinkName: "btn-resend",
                                            text: (0,
                                            v.j2)("History.repeat"),
                                            ariaLabel: (0,
                                            v.j2)("History.repeat"),
                                            onClick: ()=>{
                                                var t, i, n;
                                                if ((null == tS ? void 0 : tS.payment_details) && !(null == tS ? void 0 : null === (i = tS.payment_details) || void 0 === i ? void 0 : null === (t = i.payment_method) || void 0 === t ? void 0 : t.payment_type)) {
                                                    (0,
                                                    D.Mb)(j.r5.SMEstimateDetails);
                                                    return
                                                }
                                                (0,
                                                r.iA$)() && (0,
                                                r.OC6)("historyLeap", "nonVerifiedLoadHistory") ? (0,
                                                D.Mb)(j.r5.VerificationKycOptions) : (0,
                                                r.RCG)() && (null == tS ? void 0 : null === (n = tS.wu_product) || void 0 === n ? void 0 : n.name) == "MOBILE_TOPUP" ? tQ((0,
                                                k.x2)()) : tB(tS)
                                            }
                                            ,
                                            onHover: ()=>{
                                                (0,
                                                x.Fv)("resend")
                                            }
                                            ,
                                            analytics: (0,
                                            m.PC)("link", "resendtxn", "click"),
                                            triggerEvents: t=>{
                                                (0,
                                                m.$C)((0,
                                                m.wu)(t))
                                            }
                                        })]
                                    })
                                }), tY && tX && (0,
                                e.jsx)("div", {
                                    className: "ai-slf-end ".concat(l()["track-link-zepto"]),
                                    children: (0,
                                    e.jsx)(s.u2, {
                                        anchor: !0,
                                        type: "button",
                                        width: "100%",
                                        id: "btn_txn_payment_instructions",
                                        text: (0,
                                        v.j2)("WuPayPaymentInstructions.viewInstructions"),
                                        ariaLabel: (0,
                                        v.j2)("WuPayPaymentInstructions.viewInstructions"),
                                        onClick: ()=>tQ((0,
                                        y.iQ)(!0, tS)),
                                        analytics: (0,
                                        m.PC)("link", "view-payment-instructions", "click"),
                                        triggerEvents: t=>{
                                            (0,
                                            m.$C)((0,
                                            m.wu)(t))
                                        }
                                    })
                                })]
                            })]
                        })
                    }), "DIGITAL" == tw || (0,
                    r.OC6)("historyLeap", "trackCancelButtonDisabled") ? (0,
                    e.jsx)(e.Fragment, {}) : (0,
                    e.jsx)("div", {
                        className: "font-cm ".concat(l()["mtcn-details"]),
                        id: "text_txn_history_mtcn",
                        children: (0,
                        e.jsx)(s.X2, {
                            children: (0,
                            e.jsx)("span", {
                                qmDataRule: "mask",
                                children: (0,
                                v.j2)("HistoryLeap.txnDetails.mtcn") + " | " + tA
                            })
                        })
                    })]
                })]
            })
        })
    },
    26585: function(t) {
        t.exports = {
            "rec-name": "TransferShortDetails_rec-name__qWj_7",
            "transaction-date-status": "TransferShortDetails_transaction-date-status__Uq7IK",
            "transaction-status": "TransferShortDetails_transaction-status__zUd_N",
            "transaction-status-dot": "TransferShortDetails_transaction-status-dot__qIxbX",
            "amount-details": "TransferShortDetails_amount-details__kl1Ag",
            "amount-details-mtcn": "TransferShortDetails_amount-details-mtcn__Kcg8m",
            "mtcn-details": "TransferShortDetails_mtcn-details__rQddZ",
            "track-link-zepto": "TransferShortDetails_track-link-zepto__H9K36"
        }
    }
}]);
