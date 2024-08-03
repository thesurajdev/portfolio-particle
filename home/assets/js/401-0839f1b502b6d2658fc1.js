/*! For license information please see 401-0839f1b502b6d2658fc1.js.LICENSE.txt */
"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[401], {
    9401: (e,t,r)=>{
        r.r(t),
        r.d(t, {
            default: ()=>K
        });
        var c = r(4234)
          , i = r(3727)
          , a = r(5058)
          , s = r(6573)
          , n = r(1078)
          , d = r(5980)
          , o = r(5191)
          , l = r(682)
          , p = r(4522)
          , m = r(8568)
          , u = r(6943);
        function f(e, t, r) {
            const c = e.slice();
            return c[32] = t[r],
            c[34] = r,
            c
        }
        function I(e) {
            let t, r, i, a, s, d, o, l, p, m, u, f, I, v, L, b, $, j, h, R = e[0].labelBack + "", B = e[2].title + "", C = (0,
            n._B)(e[2].regularPrice) + "", y = e[2].regularPrice > e[2].discountPrice && g(e);
            return {
                c() {
                    t = (0,
                    c.bGB)("div"),
                    r = (0,
                    c.bGB)("div"),
                    i = (0,
                    c.fLW)(R),
                    a = (0,
                    c.DhX)(),
                    s = (0,
                    c.bGB)("div"),
                    d = (0,
                    c.bGB)("h4"),
                    o = (0,
                    c.fLW)(B),
                    l = (0,
                    c.DhX)(),
                    p = (0,
                    c.bGB)("div"),
                    m = (0,
                    c.bGB)("div"),
                    u = (0,
                    c.bGB)("span"),
                    f = (0,
                    c.fLW)(C),
                    v = (0,
                    c.DhX)(),
                    y && y.c(),
                    L = (0,
                    c.DhX)(),
                    b = (0,
                    c.bGB)("div"),
                    (0,
                    c.Ljt)(r, "class", "product-cart-modal-recomended-services-description-back"),
                    (0,
                    c.Ljt)(d, "class", "product-cart-modal-recomended-service-info-title"),
                    (0,
                    c.Ljt)(u, "class", I = "product-cart-modal-recomended-service-price " + (e[2].regularPrice > e[2].discountPrice ? "product-cart-modal-recomended-service-price_regular" : "")),
                    (0,
                    c.Ljt)(m, "class", "product-cart-modal-recomended-service-prices"),
                    (0,
                    c.Ljt)(b, "class", $ = "product-cart-modal-recomended-service-checkbox " + (e[2].isAdded ? "product-cart-modal-recomended-service-checkbox_checked" : "")),
                    (0,
                    c.Ljt)(p, "class", "product-cart-modal-recomended-service-prices-wrap"),
                    (0,
                    c.Ljt)(s, "class", "product-cart-modal-recomended-service"),
                    (0,
                    c.Ljt)(t, "class", "product-cart-modal-recomended-services-description-header")
                },
                m(n, I) {
                    (0,
                    c.$Tr)(n, t, I),
                    (0,
                    c.R3I)(t, r),
                    (0,
                    c.R3I)(r, i),
                    (0,
                    c.R3I)(t, a),
                    (0,
                    c.R3I)(t, s),
                    (0,
                    c.R3I)(s, d),
                    (0,
                    c.R3I)(d, o),
                    (0,
                    c.R3I)(s, l),
                    (0,
                    c.R3I)(s, p),
                    (0,
                    c.R3I)(p, m),
                    (0,
                    c.R3I)(m, u),
                    (0,
                    c.R3I)(u, f),
                    (0,
                    c.R3I)(m, v),
                    y && y.m(m, null),
                    (0,
                    c.R3I)(p, L),
                    (0,
                    c.R3I)(p, b),
                    j || (h = [(0,
                    c.oLt)(r, "click", e[18]), (0,
                    c.oLt)(b, "click", e[19])],
                    j = !0)
                },
                p(e, t) {
                    1 & t[0] && R !== (R = e[0].labelBack + "") && (0,
                    c.rTO)(i, R),
                    4 & t[0] && B !== (B = e[2].title + "") && (0,
                    c.rTO)(o, B),
                    4 & t[0] && C !== (C = (0,
                    n._B)(e[2].regularPrice) + "") && (0,
                    c.rTO)(f, C),
                    4 & t[0] && I !== (I = "product-cart-modal-recomended-service-price " + (e[2].regularPrice > e[2].discountPrice ? "product-cart-modal-recomended-service-price_regular" : "")) && (0,
                    c.Ljt)(u, "class", I),
                    e[2].regularPrice > e[2].discountPrice ? y ? y.p(e, t) : (y = g(e),
                    y.c(),
                    y.m(m, null)) : y && (y.d(1),
                    y = null),
                    4 & t[0] && $ !== ($ = "product-cart-modal-recomended-service-checkbox " + (e[2].isAdded ? "product-cart-modal-recomended-service-checkbox_checked" : "")) && (0,
                    c.Ljt)(b, "class", $)
                },
                d(e) {
                    e && (0,
                    c.ogt)(t),
                    y && y.d(),
                    j = !1,
                    (0,
                    c.j7q)(h)
                }
            }
        }
        function v(e) {
            let t, r, i = e[0].titleServices + "";
            return {
                c() {
                    t = (0,
                    c.bGB)("h3"),
                    r = (0,
                    c.fLW)(i),
                    (0,
                    c.Ljt)(t, "class", "product-cart-modal-left-title")
                },
                m(e, i) {
                    (0,
                    c.$Tr)(e, t, i),
                    (0,
                    c.R3I)(t, r)
                },
                p(e, t) {
                    1 & t[0] && i !== (i = e[0].titleServices + "") && (0,
                    c.rTO)(r, i)
                },
                d(e) {
                    e && (0,
                    c.ogt)(t)
                }
            }
        }
        function g(e) {
            let t, r, i = (0,
            n._B)(e[2].discountPrice) + "";
            return {
                c() {
                    t = (0,
                    c.bGB)("span"),
                    r = (0,
                    c.fLW)(i),
                    (0,
                    c.Ljt)(t, "class", "product-cart-modal-recomended-service-price product-cart-modal-recomended-service-price_discount")
                },
                m(e, i) {
                    (0,
                    c.$Tr)(e, t, i),
                    (0,
                    c.R3I)(t, r)
                },
                p(e, t) {
                    4 & t[0] && i !== (i = (0,
                    n._B)(e[2].discountPrice) + "") && (0,
                    c.rTO)(r, i)
                },
                d(e) {
                    e && (0,
                    c.ogt)(t)
                }
            }
        }
        function L(e) {
            let t, r, i = (0,
            n._B)(e[32].discountPrice) + "";
            return {
                c() {
                    t = (0,
                    c.bGB)("span"),
                    r = (0,
                    c.fLW)(i),
                    (0,
                    c.Ljt)(t, "class", "product-cart-modal-recomended-service-price product-cart-modal-recomended-service-price_discount")
                },
                m(e, i) {
                    (0,
                    c.$Tr)(e, t, i),
                    (0,
                    c.R3I)(t, r)
                },
                p(e, t) {
                    8 & t[0] && i !== (i = (0,
                    n._B)(e[32].discountPrice) + "") && (0,
                    c.rTO)(r, i)
                },
                d(e) {
                    e && (0,
                    c.ogt)(t)
                }
            }
        }
        function b(e) {
            let t, r, i, a, s, d, o, l, p, m, u, f, I, v, g, b, $, j, h, R, B, C, y, T, P, _, N, D, G, w, O, x, S, U, k, X, Z, M, W, A, E = e[32].title + "", F = e[32].shortDescription + "", Y = e[0].servicesDetailsLabel + "", q = (0,
            n._B)(e[32].regularPrice) + "";
            function V() {
                return e[20](e[32], e[34])
            }
            let J = e[32].regularPrice > e[32].discountPrice && L(e);
            function H() {
                return e[21](e[32], e[34])
            }
            return {
                c() {
                    t = (0,
                    c.bGB)("li"),
                    r = (0,
                    c.bGB)("div"),
                    i = (0,
                    c.bGB)("img"),
                    d = (0,
                    c.DhX)(),
                    o = (0,
                    c.bGB)("div"),
                    l = (0,
                    c.bGB)("h4"),
                    p = (0,
                    c.fLW)(E),
                    m = (0,
                    c.DhX)(),
                    u = (0,
                    c.bGB)("p"),
                    f = (0,
                    c.bGB)("span"),
                    I = (0,
                    c.fLW)(F),
                    v = (0,
                    c.DhX)(),
                    g = (0,
                    c.bGB)("span"),
                    b = (0,
                    c.fLW)(Y),
                    $ = (0,
                    c.DhX)(),
                    j = (0,
                    c.bGB)("div"),
                    h = (0,
                    c.bGB)("div"),
                    R = (0,
                    c.bGB)("span"),
                    B = (0,
                    c.fLW)(q),
                    y = (0,
                    c.DhX)(),
                    J && J.c(),
                    T = (0,
                    c.DhX)(),
                    P = (0,
                    c.bGB)("div"),
                    N = (0,
                    c.DhX)(),
                    (0,
                    c.Jn4)(i.src, a = e[32].image) || (0,
                    c.Ljt)(i, "src", a),
                    (0,
                    c.Ljt)(i, "alt", s = e[32].title),
                    (0,
                    c.Ljt)(i, "class", "product-cart-modal-recomended-service-image"),
                    (0,
                    c.Ljt)(l, "class", "product-cart-modal-recomended-service-info-title"),
                    (0,
                    c.Ljt)(f, "class", "product-cart-modal-recomended-service-info-text"),
                    (0,
                    c.Ljt)(g, "class", "product-cart-modal-recomended-service-info-btn"),
                    (0,
                    c.Ljt)(u, "class", "product-cart-modal-recomended-service-info-text-wrapper"),
                    (0,
                    c.Ljt)(o, "class", "product-cart-modal-recomended-service-info"),
                    (0,
                    c.Ljt)(r, "class", "product-cart-modal-recomended-service-info-wrap"),
                    (0,
                    c.Ljt)(R, "class", C = "product-cart-modal-recomended-service-price " + (e[32].regularPrice > e[32].discountPrice ? "product-cart-modal-recomended-service-price_regular" : "")),
                    (0,
                    c.Ljt)(h, "class", "product-cart-modal-recomended-service-prices"),
                    (0,
                    c.Ljt)(P, "class", _ = "product-cart-modal-recomended-service-checkbox " + (e[32].isAdded ? "product-cart-modal-recomended-service-checkbox_checked" : "")),
                    (0,
                    c.Ljt)(j, "class", "product-cart-modal-recomended-service-prices-wrap"),
                    (0,
                    c.Ljt)(t, "class", D = "product-cart-modal-recomended-service " + (e[32].isCustomersChoice ? "product-cart-modal-recomended-service_choice" : "")),
                    (0,
                    c.Ljt)(t, "data-item_id", G = e[32].id),
                    (0,
                    c.Ljt)(t, "data-item_name", "Offer"),
                    (0,
                    c.Ljt)(t, "data-affiliation", w = e[32].project),
                    (0,
                    c.Ljt)(t, "data-discount", O = (Number(e[32].regularPrice) - Number(e[32].discountPrice)) / 100),
                    (0,
                    c.Ljt)(t, "data-item_brand", x = e[32].title),
                    (0,
                    c.Ljt)(t, "data-item_category", S = e[32].internalName),
                    (0,
                    c.Ljt)(t, "data-item_category2", "channel - tm2-cart"),
                    (0,
                    c.Ljt)(t, "data-item_category3", "ontemplate"),
                    (0,
                    c.Ljt)(t, "data-item_variant", U = Number(e[32].discountPrice) <= 0 ? "free" : "premium"),
                    (0,
                    c.Ljt)(t, "data-price", k = Number(e[32].discountPrice) / 100),
                    (0,
                    c.Ljt)(t, "data-quantity", "1"),
                    (0,
                    c.Ljt)(t, "data-item_list_name", X = "Cart - " + e[1] + " - Offers"),
                    (0,
                    c.Ljt)(t, "data-index", Z = e[34] + 1),
                    (0,
                    c.Ljt)(t, "data-type", e[1]),
                    (0,
                    c.Ljt)(t, "data-choice-label", M = e[0].labelCusomersChoice)
                },
                m(a, s) {
                    (0,
                    c.$Tr)(a, t, s),
                    (0,
                    c.R3I)(t, r),
                    (0,
                    c.R3I)(r, i),
                    (0,
                    c.R3I)(r, d),
                    (0,
                    c.R3I)(r, o),
                    (0,
                    c.R3I)(o, l),
                    (0,
                    c.R3I)(l, p),
                    (0,
                    c.R3I)(o, m),
                    (0,
                    c.R3I)(o, u),
                    (0,
                    c.R3I)(u, f),
                    (0,
                    c.R3I)(f, I),
                    (0,
                    c.R3I)(u, v),
                    (0,
                    c.R3I)(u, g),
                    (0,
                    c.R3I)(g, b),
                    (0,
                    c.R3I)(t, $),
                    (0,
                    c.R3I)(t, j),
                    (0,
                    c.R3I)(j, h),
                    (0,
                    c.R3I)(h, R),
                    (0,
                    c.R3I)(R, B),
                    (0,
                    c.R3I)(h, y),
                    J && J.m(h, null),
                    (0,
                    c.R3I)(j, T),
                    (0,
                    c.R3I)(j, P),
                    (0,
                    c.R3I)(t, N),
                    e[22](t),
                    W || (A = [(0,
                    c.oLt)(g, "click", V), (0,
                    c.oLt)(P, "click", H)],
                    W = !0)
                },
                p(r, d) {
                    e = r,
                    8 & d[0] && !(0,
                    c.Jn4)(i.src, a = e[32].image) && (0,
                    c.Ljt)(i, "src", a),
                    8 & d[0] && s !== (s = e[32].title) && (0,
                    c.Ljt)(i, "alt", s),
                    8 & d[0] && E !== (E = e[32].title + "") && (0,
                    c.rTO)(p, E),
                    8 & d[0] && F !== (F = e[32].shortDescription + "") && (0,
                    c.rTO)(I, F),
                    1 & d[0] && Y !== (Y = e[0].servicesDetailsLabel + "") && (0,
                    c.rTO)(b, Y),
                    8 & d[0] && q !== (q = (0,
                    n._B)(e[32].regularPrice) + "") && (0,
                    c.rTO)(B, q),
                    8 & d[0] && C !== (C = "product-cart-modal-recomended-service-price " + (e[32].regularPrice > e[32].discountPrice ? "product-cart-modal-recomended-service-price_regular" : "")) && (0,
                    c.Ljt)(R, "class", C),
                    e[32].regularPrice > e[32].discountPrice ? J ? J.p(e, d) : (J = L(e),
                    J.c(),
                    J.m(h, null)) : J && (J.d(1),
                    J = null),
                    8 & d[0] && _ !== (_ = "product-cart-modal-recomended-service-checkbox " + (e[32].isAdded ? "product-cart-modal-recomended-service-checkbox_checked" : "")) && (0,
                    c.Ljt)(P, "class", _),
                    8 & d[0] && D !== (D = "product-cart-modal-recomended-service " + (e[32].isCustomersChoice ? "product-cart-modal-recomended-service_choice" : "")) && (0,
                    c.Ljt)(t, "class", D),
                    8 & d[0] && G !== (G = e[32].id) && (0,
                    c.Ljt)(t, "data-item_id", G),
                    8 & d[0] && w !== (w = e[32].project) && (0,
                    c.Ljt)(t, "data-affiliation", w),
                    8 & d[0] && O !== (O = (Number(e[32].regularPrice) - Number(e[32].discountPrice)) / 100) && (0,
                    c.Ljt)(t, "data-discount", O),
                    8 & d[0] && x !== (x = e[32].title) && (0,
                    c.Ljt)(t, "data-item_brand", x),
                    8 & d[0] && S !== (S = e[32].internalName) && (0,
                    c.Ljt)(t, "data-item_category", S),
                    8 & d[0] && U !== (U = Number(e[32].discountPrice) <= 0 ? "free" : "premium") && (0,
                    c.Ljt)(t, "data-item_variant", U),
                    8 & d[0] && k !== (k = Number(e[32].discountPrice) / 100) && (0,
                    c.Ljt)(t, "data-price", k),
                    2 & d[0] && X !== (X = "Cart - " + e[1] + " - Offers") && (0,
                    c.Ljt)(t, "data-item_list_name", X),
                    2 & d[0] && (0,
                    c.Ljt)(t, "data-type", e[1]),
                    1 & d[0] && M !== (M = e[0].labelCusomersChoice) && (0,
                    c.Ljt)(t, "data-choice-label", M)
                },
                d(r) {
                    r && (0,
                    c.ogt)(t),
                    J && J.d(),
                    e[22](null),
                    W = !1,
                    (0,
                    c.j7q)(A)
                }
            }
        }
        function $(e) {
            let t, r = e[2].description.replace(/%(.*)%/, "") + "";
            return {
                c() {
                    t = (0,
                    c.bGB)("div"),
                    (0,
                    c.Ljt)(t, "class", "product-cart-modal-recomended-services-description-body")
                },
                m(e, i) {
                    (0,
                    c.$Tr)(e, t, i),
                    t.innerHTML = r
                },
                p(e, c) {
                    4 & c[0] && r !== (r = e[2].description.replace(/%(.*)%/, "") + "") && (t.innerHTML = r)
                },
                d(e) {
                    e && (0,
                    c.ogt)(t)
                }
            }
        }
        function j(e) {
            let t, r, i, a, s, n, d;
            function o(e, t) {
                return e[2] ? I : v
            }
            let l = o(e)
              , p = l(e)
              , m = e[3]
              , u = [];
            for (let t = 0; t < m.length; t += 1)
                u[t] = b(f(e, m, t));
            let g = e[2] && $(e);
            return {
                c() {
                    p.c(),
                    t = (0,
                    c.DhX)(),
                    r = (0,
                    c.bGB)("div"),
                    i = (0,
                    c.bGB)("ul");
                    for (let e = 0; e < u.length; e += 1)
                        u[e].c();
                    n = (0,
                    c.DhX)(),
                    g && g.c(),
                    (0,
                    c.Ljt)(i, "class", a = "product-cart-modal-recomended-services " + (e[2] ? "product-cart-modal-recomended-services_hidden" : "")),
                    (0,
                    c.Ljt)(i, "data-visibility-observer", s = '{"selector": ".product-cart-modal-recomended-service", "preset": "recommendedServicesAnalytics"}'),
                    (0,
                    c.Ljt)(r, "class", d = "product-cart-modal-recomended-services-wrapper " + (e[2] ? "product-cart-modal-recomended-services-wrapper_details" : ""))
                },
                m(a, s) {
                    p.m(a, s),
                    (0,
                    c.$Tr)(a, t, s),
                    (0,
                    c.$Tr)(a, r, s),
                    (0,
                    c.R3I)(r, i);
                    for (let e = 0; e < u.length; e += 1)
                        u[e] && u[e].m(i, null);
                    e[23](i),
                    (0,
                    c.R3I)(r, n),
                    g && g.m(r, null)
                },
                p(e, s) {
                    if (l === (l = o(e)) && p ? p.p(e, s) : (p.d(1),
                    p = l(e),
                    p && (p.c(),
                    p.m(t.parentNode, t))),
                    491 & s[0]) {
                        let t;
                        for (m = e[3],
                        t = 0; t < m.length; t += 1) {
                            const r = f(e, m, t);
                            u[t] ? u[t].p(r, s) : (u[t] = b(r),
                            u[t].c(),
                            u[t].m(i, null))
                        }
                        for (; t < u.length; t += 1)
                            u[t].d(1);
                        u.length = m.length
                    }
                    4 & s[0] && a !== (a = "product-cart-modal-recomended-services " + (e[2] ? "product-cart-modal-recomended-services_hidden" : "")) && (0,
                    c.Ljt)(i, "class", a),
                    e[2] ? g ? g.p(e, s) : (g = $(e),
                    g.c(),
                    g.m(r, null)) : g && (g.d(1),
                    g = null),
                    4 & s[0] && d !== (d = "product-cart-modal-recomended-services-wrapper " + (e[2] ? "product-cart-modal-recomended-services-wrapper_details" : "")) && (0,
                    c.Ljt)(r, "class", d)
                },
                i: c.ZTd,
                o: c.ZTd,
                d(i) {
                    p.d(i),
                    i && (0,
                    c.ogt)(t),
                    i && (0,
                    c.ogt)(r),
                    (0,
                    c.RMB)(u, i),
                    e[23](null),
                    g && g.d()
                }
            }
        }
        let h = "tm2Cart";
        function R(e, t, r) {
            let i, n, f, I, v;
            (0,
            c.FIv)(e, u.Z, (e=>r(17, v = e)));
            const g = (0,
            m.x)();
            let L, b, {types: $={}} = t, {licenseOffers: j={}} = t, {translations: R} = t, {productId: B} = t, {typeId: C} = t, {productTypeName: y} = t, {listName: T} = t, {hasProductSpecialOffers: P=!1} = t;
            const _ = [{
                typeId: $.WORDPRESS_ID,
                serviceId: 1180
            }, {
                typeId: $.SHOPIFY_ID,
                serviceId: P ? j.INSTALLATION_AND_SETUP_OFFER_ID || 1860 : 450
            }];
            let N = null
              , D = !1;
            function G(e, t=i) {
                const c = `${p.Z.apiUrls.services}/v1/services/${e}`;
                (0,
                s.$U)({
                    link: c,
                    typeTarget: "products",
                    typeSource: "services",
                    itemId: B
                }),
                N && r(2, N.isAdded = !0, N),
                function(e, t) {
                    const r = x(e, !0, t);
                    (0,
                    d.y)((0,
                    o.c)("clear")),
                    (0,
                    d.y)((0,
                    o.c)("selectItem", [r])),
                    (0,
                    d.y)((0,
                    o.c)("clear")),
                    (0,
                    d.y)((0,
                    o.c)("addToCart", [r])),
                    (0,
                    d.y)((0,
                    o.c)("cartOffer", {
                        eventAction: "Add",
                        eventLabel: `${e} - ${t} - ${y}`
                    }))
                }(e, t)
            }
            function w(e) {
                const t = `${p.Z.apiUrls.services}/v1/services/${e}`;
                (0,
                s.MM)({
                    link: t,
                    typeTarget: "products",
                    typeSource: "services",
                    itemId: B
                }),
                N && r(2, N.isAdded = !1, N);
                const c = x(e, !1);
                (0,
                d.y)((0,
                o.c)("clear")),
                (0,
                d.y)((0,
                o.c)("removeFromCart", [c]))
            }
            function O(e, t) {
                r(2, N = e),
                r(2, N.position = t, N),
                window.innerWidth < 1e3 ? g("scrollToTop") : L.scrollIntoView();
                const c = e.id
                  , i = v.infoCartModal.products.find((e=>e.templateId === B))
                  , a = v.infoCartModal.recommendedServices[B]?.find((e=>e.serviceId === c));
                (0,
                d.y)((0,
                o.c)("productRecommendedOfferClick", {
                    product: i,
                    listName: `Cart - Offers - ${y}`,
                    services: [a],
                    channel: ""
                })),
                (0,
                d.y)((0,
                o.c)("cartOffer", {
                    eventAction: "Detail",
                    eventLabel: `${c} - ${t} - ${y}`
                }))
            }
            function x(e, t=!1, r) {
                const c = v.infoCartModal.recommendedServices[B]?.find((t=>t.serviceId === e))
                  , i = (0,
                a.Qz)({
                    servicePresentations: c.presentations,
                    locale: p.Z.apiLocale
                })
                  , s = {
                    item_id: c.serviceId,
                    item_name: "Offer",
                    affiliation: c.project,
                    discount: (c.price - c.finalPrice) / 100,
                    item_brand: i?.title || "",
                    item_category: c.internalName || "",
                    item_category2: "channel - tm2-cart",
                    item_category3: "ontemplate",
                    item_variant: c.finalPrice <= 0 ? "free" : "premium",
                    price: c.finalPrice / 100,
                    quantity: 1
                };
                return t && r && (s.index = r),
                t && T && (s.item_list_name = `${T} - Cart`),
                s
            }
            return e.$$set = e=>{
                "types"in e && r(9, $ = e.types),
                "licenseOffers"in e && r(10, j = e.licenseOffers),
                "translations"in e && r(0, R = e.translations),
                "productId"in e && r(11, B = e.productId),
                "typeId"in e && r(12, C = e.typeId),
                "productTypeName"in e && r(1, y = e.productTypeName),
                "listName"in e && r(13, T = e.listName),
                "hasProductSpecialOffers"in e && r(14, P = e.hasProductSpecialOffers)
            }
            ,
            e.$$.update = ()=>{
                var t;
                4 & e.$$.dirty[0] && (i = N && N.position),
                133120 & e.$$.dirty[0] && r(15, n = v.cartModal.items.find((e=>Number(e.id) === B))?.services),
                133120 & e.$$.dirty[0] && r(16, f = v.infoCartModal.recommendedServices[B]?.sort(((e,t)=>(t.sortByChannels?.[h] || 0) - (e.sortByChannels?.[h] || 0)))),
                118784 & e.$$.dirty[0] && r(3, I = f?.map((e=>{
                    const t = (0,
                    a.Qz)({
                        servicePresentations: e.presentations,
                        locale: p.Z.apiLocale
                    })
                      , r = _.some(P ? t=>Number(t.serviceId) === Number(e.serviceId) : t=>Number(t.typeId) === Number(C) && Number(t.serviceId) === Number(e.serviceId));
                    return {
                        id: e.serviceId,
                        title: t.title,
                        shortDescription: t.shortDescription,
                        description: t.description,
                        image: t.imageUrl,
                        discountPrice: e.finalPrice,
                        regularPrice: e.price,
                        isAdded: n?.find((t=>Number(t.id) === Number(e.serviceId))),
                        brand: e.brand,
                        internalName: e.internalName,
                        isCustomersChoice: r,
                        project: e.project
                    }
                }
                )).filter((e=>!("en" === p.Z.locale && (1709 === Number(e.id) || 1710 === Number(e.id))))) || []),
                8 & e.$$.dirty[0] && function(e) {
                    if (b && e.length && !D) {
                        D = !0;
                        const e = document.querySelector(".product-cart-modal-recomended-services");
                        e && (0,
                        l.r)(e)
                    }
                }(I),
                32768 & e.$$.dirty[0] && (t = n,
                N && r(2, N.isAdded = Boolean(t?.find((e=>Number(e.id) === Number(N.id)))), N))
            }
            ,
            [R, y, N, I, L, b, G, w, O, $, j, B, C, T, P, n, f, v, ()=>r(2, N = null), ()=>{
                N.isAdded ? w(N.id) : G(N.id)
            }
            , (e,t)=>O(e, t + 1), (e,t)=>{
                e.isAdded ? w(e.id) : G(e.id, t + 1)
            }
            , function(e) {
                c.VnY[e ? "unshift" : "push"]((()=>{
                    b = e,
                    r(5, b)
                }
                ))
            }
            , function(e) {
                c.VnY[e ? "unshift" : "push"]((()=>{
                    L = e,
                    r(4, L)
                }
                ))
            }
            ]
        }
        class B extends c.f_C {
            constructor(e) {
                super(),
                (0,
                c.S1n)(this, e, R, j, c.N8, {
                    types: 9,
                    licenseOffers: 10,
                    translations: 0,
                    productId: 11,
                    typeId: 12,
                    productTypeName: 1,
                    listName: 13,
                    hasProductSpecialOffers: 14
                }, null, [-1, -1])
            }
        }
        const C = B;
        var y = r(9012)
          , T = r(5179)
          , P = r(7260)
          , _ = r(5069)
          , N = r(5550)
          , D = r(3975)
          , G = r(9661);
        function w(e) {
            let t, r, a, s, n, d, o, l, p, m, u;
            const f = [S, x, O]
              , I = [];
            function v(e, t) {
                return "support" === e[1].namespace ? 0 : "items" === e[1].namespace ? 1 : 2
            }
            return t = v(e),
            r = I[t] = f[t](e),
            d = new D.Z({
                props: {
                    priceCaption: e[6],
                    singlePriceCaption: e[7],
                    feeText: e[14]?.text,
                    viewCartLabel: e[8],
                    priceButtonLabel: e[9],
                    singleTotalPrice: e[3],
                    isSingleProductCart: !0
                }
            }),
            {
                c() {
                    r.c(),
                    a = (0,
                    c.DhX)(),
                    s = (0,
                    c.bGB)("div"),
                    n = (0,
                    c.bGB)("div"),
                    (0,
                    c.YCL)(d.$$.fragment),
                    o = (0,
                    c.DhX)(),
                    l = (0,
                    c.bGB)("span"),
                    l.textContent = `${e[11]}`,
                    (0,
                    c.Ljt)(n, "class", "single-product-cart-footer-total-wrap"),
                    (0,
                    c.Ljt)(l, "class", "cart-modal-continue-btn btn"),
                    (0,
                    c.Ljt)(s, "class", "single-product-cart-footer")
                },
                m(e, r) {
                    I[t].m(e, r),
                    (0,
                    c.$Tr)(e, a, r),
                    (0,
                    c.$Tr)(e, s, r),
                    (0,
                    c.R3I)(s, n),
                    (0,
                    c.yef)(d, n, null),
                    (0,
                    c.R3I)(s, o),
                    (0,
                    c.R3I)(s, l),
                    p = !0,
                    m || (u = (0,
                    c.oLt)(l, "click", i.K4),
                    m = !0)
                },
                p(e, i) {
                    let s = t;
                    t = v(e),
                    t === s ? I[t].p(e, i) : ((0,
                    c.dvw)(),
                    (0,
                    c.etI)(I[s], 1, 1, (()=>{
                        I[s] = null
                    }
                    )),
                    (0,
                    c.gbL)(),
                    r = I[t],
                    r ? r.p(e, i) : (r = I[t] = f[t](e),
                    r.c()),
                    (0,
                    c.Ui)(r, 1),
                    r.m(a.parentNode, a));
                    const n = {};
                    8 & i && (n.singleTotalPrice = e[3]),
                    d.$set(n)
                },
                i(e) {
                    p || ((0,
                    c.Ui)(r),
                    (0,
                    c.Ui)(d.$$.fragment, e),
                    p = !0)
                },
                o(e) {
                    (0,
                    c.etI)(r),
                    (0,
                    c.etI)(d.$$.fragment, e),
                    p = !1
                },
                d(e) {
                    I[t].d(e),
                    e && (0,
                    c.ogt)(a),
                    e && (0,
                    c.ogt)(s),
                    (0,
                    c.vpE)(d),
                    m = !1,
                    u()
                }
            }
        }
        function O(e) {
            let t, r, i, a, s, n, d, o, l, p, m, u, f, I, v, g, L, b, $, j = e[1].title + "", h = e[1].licenses && e[1].licenseData && U(e), R = !e[1].licenses.length && k(e), B = 0 === e[1].item.price && Z(e);
            g = new N.Z({
                props: {
                    supports: e[1].recommendedSupports,
                    itemId: e[1].id,
                    supportsCartInfo: e[1].supportsCartInfo,
                    isSingleCart: !0
                }
            });
            let C = e[1].services && M(e);
            return {
                c() {
                    t = (0,
                    c.bGB)("div"),
                    r = (0,
                    c.bGB)("div"),
                    i = (0,
                    c.bGB)("div"),
                    a = (0,
                    c.bGB)("img"),
                    o = (0,
                    c.DhX)(),
                    l = (0,
                    c.bGB)("span"),
                    p = (0,
                    c.fLW)(j),
                    m = (0,
                    c.DhX)(),
                    u = (0,
                    c.bGB)("div"),
                    h && h.c(),
                    f = (0,
                    c.DhX)(),
                    R && R.c(),
                    I = (0,
                    c.DhX)(),
                    B && B.c(),
                    v = (0,
                    c.DhX)(),
                    (0,
                    c.YCL)(g.$$.fragment),
                    L = (0,
                    c.DhX)(),
                    C && C.c(),
                    (0,
                    c.Ljt)(a, "class", "single-product-cart-image _ls"),
                    (0,
                    c.Ljt)(a, "data-src", s = e[1].image),
                    (0,
                    c.Ljt)(a, "alt", n = e[1].title),
                    (0,
                    c.Jn4)(a.src, d = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'/%3E") || (0,
                    c.Ljt)(a, "src", "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'/%3E"),
                    (0,
                    c.Ljt)(i, "class", "single-product-cart-image-wrapper"),
                    (0,
                    c.Ljt)(l, "class", "single-product-cart-title"),
                    (0,
                    c.Ljt)(r, "class", "single-product-cart-head"),
                    (0,
                    c.Ljt)(u, "class", b = "single-product-cart-info " + (0 === e[1].item.price ? "single-product-cart-info-free" : "")),
                    (0,
                    c.Ljt)(t, "class", "single-product-cart")
                },
                m(e, s) {
                    (0,
                    c.$Tr)(e, t, s),
                    (0,
                    c.R3I)(t, r),
                    (0,
                    c.R3I)(r, i),
                    (0,
                    c.R3I)(i, a),
                    (0,
                    c.R3I)(r, o),
                    (0,
                    c.R3I)(r, l),
                    (0,
                    c.R3I)(l, p),
                    (0,
                    c.R3I)(t, m),
                    (0,
                    c.R3I)(t, u),
                    h && h.m(u, null),
                    (0,
                    c.R3I)(u, f),
                    R && R.m(u, null),
                    (0,
                    c.R3I)(u, I),
                    B && B.m(u, null),
                    (0,
                    c.R3I)(u, v),
                    (0,
                    c.yef)(g, u, null),
                    (0,
                    c.R3I)(u, L),
                    C && C.m(u, null),
                    $ = !0
                },
                p(e, t) {
                    (!$ || 2 & t && s !== (s = e[1].image)) && (0,
                    c.Ljt)(a, "data-src", s),
                    (!$ || 2 & t && n !== (n = e[1].title)) && (0,
                    c.Ljt)(a, "alt", n),
                    (!$ || 2 & t) && j !== (j = e[1].title + "") && (0,
                    c.rTO)(p, j),
                    e[1].licenses && e[1].licenseData ? h ? (h.p(e, t),
                    2 & t && (0,
                    c.Ui)(h, 1)) : (h = U(e),
                    h.c(),
                    (0,
                    c.Ui)(h, 1),
                    h.m(u, f)) : h && ((0,
                    c.dvw)(),
                    (0,
                    c.etI)(h, 1, 1, (()=>{
                        h = null
                    }
                    )),
                    (0,
                    c.gbL)()),
                    e[1].licenses.length ? R && (R.d(1),
                    R = null) : R ? R.p(e, t) : (R = k(e),
                    R.c(),
                    R.m(u, I)),
                    0 === e[1].item.price ? B ? B.p(e, t) : (B = Z(e),
                    B.c(),
                    B.m(u, v)) : B && (B.d(1),
                    B = null);
                    const r = {};
                    2 & t && (r.supports = e[1].recommendedSupports),
                    2 & t && (r.itemId = e[1].id),
                    2 & t && (r.supportsCartInfo = e[1].supportsCartInfo),
                    g.$set(r),
                    e[1].services ? C ? (C.p(e, t),
                    2 & t && (0,
                    c.Ui)(C, 1)) : (C = M(e),
                    C.c(),
                    (0,
                    c.Ui)(C, 1),
                    C.m(u, null)) : C && ((0,
                    c.dvw)(),
                    (0,
                    c.etI)(C, 1, 1, (()=>{
                        C = null
                    }
                    )),
                    (0,
                    c.gbL)()),
                    (!$ || 2 & t && b !== (b = "single-product-cart-info " + (0 === e[1].item.price ? "single-product-cart-info-free" : ""))) && (0,
                    c.Ljt)(u, "class", b)
                },
                i(e) {
                    $ || ((0,
                    c.Ui)(h),
                    (0,
                    c.Ui)(g.$$.fragment, e),
                    (0,
                    c.Ui)(C),
                    $ = !0)
                },
                o(e) {
                    (0,
                    c.etI)(h),
                    (0,
                    c.etI)(g.$$.fragment, e),
                    (0,
                    c.etI)(C),
                    $ = !1
                },
                d(e) {
                    e && (0,
                    c.ogt)(t),
                    h && h.d(),
                    R && R.d(),
                    B && B.d(),
                    (0,
                    c.vpE)(g),
                    C && C.d()
                }
            }
        }
        function x(e) {
            let t, r, i, a, s, n, d, o, l, p = e[1].title + "";
            return i = new G.Z({
                props: {
                    src: T,
                    className: "cart-modal-product-image _ls"
                }
            }),
            {
                c() {
                    t = (0,
                    c.bGB)("div"),
                    r = (0,
                    c.bGB)("span"),
                    (0,
                    c.YCL)(i.$$.fragment),
                    a = (0,
                    c.DhX)(),
                    s = (0,
                    c.bGB)("div"),
                    n = (0,
                    c.bGB)("div"),
                    d = (0,
                    c.bGB)("span"),
                    o = (0,
                    c.fLW)(p),
                    (0,
                    c.Ljt)(r, "class", "cart-modal-product-image-wrapper cart-modal-product-image-wrapper-items"),
                    (0,
                    c.Ljt)(d, "class", "cart-modal-product-title cart-modal-product-title-text"),
                    (0,
                    c.Ljt)(n, "class", "cart-modal-product-line"),
                    (0,
                    c.Ljt)(s, "class", "cart-modal-product-info"),
                    (0,
                    c.Ljt)(t, "class", "single-product-cart")
                },
                m(e, p) {
                    (0,
                    c.$Tr)(e, t, p),
                    (0,
                    c.R3I)(t, r),
                    (0,
                    c.yef)(i, r, null),
                    (0,
                    c.R3I)(t, a),
                    (0,
                    c.R3I)(t, s),
                    (0,
                    c.R3I)(s, n),
                    (0,
                    c.R3I)(n, d),
                    (0,
                    c.R3I)(d, o),
                    l = !0
                },
                p(e, t) {
                    (!l || 2 & t) && p !== (p = e[1].title + "") && (0,
                    c.rTO)(o, p)
                },
                i(e) {
                    l || ((0,
                    c.Ui)(i.$$.fragment, e),
                    l = !0)
                },
                o(e) {
                    (0,
                    c.etI)(i.$$.fragment, e),
                    l = !1
                },
                d(e) {
                    e && (0,
                    c.ogt)(t),
                    (0,
                    c.vpE)(i)
                }
            }
        }
        function S(e) {
            let t, r, i, a, s, n, d, o, l, p;
            function m(e, t) {
                return e[1].templateUrl ? A : W
            }
            let u = m(e)
              , f = u(e);
            return {
                c() {
                    t = (0,
                    c.bGB)("div"),
                    r = (0,
                    c.bGB)("a"),
                    i = (0,
                    c.bGB)("img"),
                    o = (0,
                    c.DhX)(),
                    l = (0,
                    c.bGB)("div"),
                    p = (0,
                    c.bGB)("div"),
                    f.c(),
                    (0,
                    c.Ljt)(i, "class", "cart-modal-product-image _ls"),
                    (0,
                    c.Ljt)(i, "data-src", a = e[1].image),
                    (0,
                    c.Ljt)(i, "alt", s = e[1].title),
                    (0,
                    c.Jn4)(i.src, n = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'/%3E") || (0,
                    c.Ljt)(i, "src", "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'/%3E"),
                    (0,
                    c.Ljt)(r, "href", d = e[1].templateUrl),
                    (0,
                    c.Ljt)(r, "class", "cart-modal-product-image-wrapper"),
                    (0,
                    c.Ljt)(p, "class", "cart-modal-product-line"),
                    (0,
                    c.Ljt)(l, "class", "cart-modal-product-info"),
                    (0,
                    c.Ljt)(t, "class", "single-product-cart")
                },
                m(e, a) {
                    (0,
                    c.$Tr)(e, t, a),
                    (0,
                    c.R3I)(t, r),
                    (0,
                    c.R3I)(r, i),
                    (0,
                    c.R3I)(t, o),
                    (0,
                    c.R3I)(t, l),
                    (0,
                    c.R3I)(l, p),
                    f.m(p, null)
                },
                p(e, t) {
                    2 & t && a !== (a = e[1].image) && (0,
                    c.Ljt)(i, "data-src", a),
                    2 & t && s !== (s = e[1].title) && (0,
                    c.Ljt)(i, "alt", s),
                    2 & t && d !== (d = e[1].templateUrl) && (0,
                    c.Ljt)(r, "href", d),
                    u === (u = m(e)) && f ? f.p(e, t) : (f.d(1),
                    f = u(e),
                    f && (f.c(),
                    f.m(p, null)))
                },
                i: c.ZTd,
                o: c.ZTd,
                d(e) {
                    e && (0,
                    c.ogt)(t),
                    f.d()
                }
            }
        }
        function U(e) {
            let t, r;
            return t = new P.Z({
                props: {
                    licenseCaption: e[5],
                    isSingleProductCartLicense: !0,
                    licensesProducts: e[1].licenses,
                    licenseData: e[1].licenseData,
                    productInfo: e[1].productInfo,
                    cartItem: e[1].item,
                    isLicenseListOpen: e[2]
                }
            }),
            t.$on("toggleLicenses", e[23]),
            t.$on("updateLicensePrice", e[13]),
            {
                c() {
                    (0,
                    c.YCL)(t.$$.fragment)
                },
                m(e, i) {
                    (0,
                    c.yef)(t, e, i),
                    r = !0
                },
                p(e, r) {
                    const c = {};
                    2 & r && (c.licensesProducts = e[1].licenses),
                    2 & r && (c.licenseData = e[1].licenseData),
                    2 & r && (c.productInfo = e[1].productInfo),
                    2 & r && (c.cartItem = e[1].item),
                    4 & r && (c.isLicenseListOpen = e[2]),
                    t.$set(c)
                },
                i(e) {
                    r || ((0,
                    c.Ui)(t.$$.fragment, e),
                    r = !0)
                },
                o(e) {
                    (0,
                    c.etI)(t.$$.fragment, e),
                    r = !1
                },
                d(e) {
                    (0,
                    c.vpE)(t, e)
                }
            }
        }
        function k(e) {
            let t, r, i, a, s, d = (e[1].isDiscountItemDefault ? (0,
            n._B)(e[1].item.final_price) : (0,
            n._B)(e[1].item.price)) + "", o = e[1].isDiscountItemDefault && X(e);
            return {
                c() {
                    t = (0,
                    c.bGB)("span"),
                    o && o.c(),
                    r = (0,
                    c.DhX)(),
                    i = (0,
                    c.bGB)("strong"),
                    a = (0,
                    c.fLW)(d),
                    (0,
                    c.Ljt)(i, "class", s = "cart-modal-price " + (e[1].isDiscountItemDefault ? "cart-modal-price_discount" : "")),
                    (0,
                    c.Ljt)(t, "class", "cart-modal-license cart-modal-license-single")
                },
                m(e, s) {
                    (0,
                    c.$Tr)(e, t, s),
                    o && o.m(t, null),
                    (0,
                    c.R3I)(t, r),
                    (0,
                    c.R3I)(t, i),
                    (0,
                    c.R3I)(i, a)
                },
                p(e, l) {
                    e[1].isDiscountItemDefault ? o ? o.p(e, l) : (o = X(e),
                    o.c(),
                    o.m(t, r)) : o && (o.d(1),
                    o = null),
                    2 & l && d !== (d = (e[1].isDiscountItemDefault ? (0,
                    n._B)(e[1].item.final_price) : (0,
                    n._B)(e[1].item.price)) + "") && (0,
                    c.rTO)(a, d),
                    2 & l && s !== (s = "cart-modal-price " + (e[1].isDiscountItemDefault ? "cart-modal-price_discount" : "")) && (0,
                    c.Ljt)(i, "class", s)
                },
                d(e) {
                    e && (0,
                    c.ogt)(t),
                    o && o.d()
                }
            }
        }
        function X(e) {
            let t, r, i = (0,
            n._B)(e[1].item.price) + "";
            return {
                c() {
                    t = (0,
                    c.bGB)("strong"),
                    r = (0,
                    c.fLW)(i),
                    (0,
                    c.Ljt)(t, "class", "cart-modal-price cart-modal-price_regular")
                },
                m(e, i) {
                    (0,
                    c.$Tr)(e, t, i),
                    (0,
                    c.R3I)(t, r)
                },
                p(e, t) {
                    2 & t && i !== (i = (0,
                    n._B)(e[1].item.price) + "") && (0,
                    c.rTO)(r, i)
                },
                d(e) {
                    e && (0,
                    c.ogt)(t)
                }
            }
        }
        function Z(e) {
            let t;
            return {
                c() {
                    t = (0,
                    c.bGB)("span"),
                    t.textContent = `${e[12]}`,
                    (0,
                    c.Ljt)(t, "class", "free-offer-price")
                },
                m(e, r) {
                    (0,
                    c.$Tr)(e, t, r)
                },
                p: c.ZTd,
                d(e) {
                    e && (0,
                    c.ogt)(t)
                }
            }
        }
        function M(e) {
            let t, r;
            return t = new _.Z({
                props: {
                    services: e[1].services,
                    itemId: e[1].id,
                    servicesCartInfo: e[1].servicesCartInfo
                }
            }),
            {
                c() {
                    (0,
                    c.YCL)(t.$$.fragment)
                },
                m(e, i) {
                    (0,
                    c.yef)(t, e, i),
                    r = !0
                },
                p(e, r) {
                    const c = {};
                    2 & r && (c.services = e[1].services),
                    2 & r && (c.itemId = e[1].id),
                    2 & r && (c.servicesCartInfo = e[1].servicesCartInfo),
                    t.$set(c)
                },
                i(e) {
                    r || ((0,
                    c.Ui)(t.$$.fragment, e),
                    r = !0)
                },
                o(e) {
                    (0,
                    c.etI)(t.$$.fragment, e),
                    r = !1
                },
                d(e) {
                    (0,
                    c.vpE)(t, e)
                }
            }
        }
        function W(e) {
            let t, r, i = e[1].title + "";
            return {
                c() {
                    t = (0,
                    c.bGB)("span"),
                    r = (0,
                    c.fLW)(i),
                    (0,
                    c.Ljt)(t, "class", "cart-modal-product-title cart-modal-product-title-text")
                },
                m(e, i) {
                    (0,
                    c.$Tr)(e, t, i),
                    (0,
                    c.R3I)(t, r)
                },
                p(e, t) {
                    2 & t && i !== (i = e[1].title + "") && (0,
                    c.rTO)(r, i)
                },
                d(e) {
                    e && (0,
                    c.ogt)(t)
                }
            }
        }
        function A(e) {
            let t, r, i, a = e[1].title + "";
            return {
                c() {
                    t = (0,
                    c.bGB)("a"),
                    r = (0,
                    c.fLW)(a),
                    (0,
                    c.Ljt)(t, "href", i = e[1].templateUrl),
                    (0,
                    c.Ljt)(t, "class", "cart-modal-product-title")
                },
                m(e, i) {
                    (0,
                    c.$Tr)(e, t, i),
                    (0,
                    c.R3I)(t, r)
                },
                p(e, s) {
                    2 & s && a !== (a = e[1].title + "") && (0,
                    c.rTO)(r, a),
                    2 & s && i !== (i = e[1].templateUrl) && (0,
                    c.Ljt)(t, "href", i)
                },
                d(e) {
                    e && (0,
                    c.ogt)(t)
                }
            }
        }
        function E(e) {
            let t, r, a, s, n, d, o, l, p, m, u, f, I, v, g = e[1] && w(e);
            return d = new D.Z({
                props: {
                    priceCaption: e[6],
                    singlePriceCaption: e[7],
                    viewCartLabel: e[8],
                    priceButtonLabel: e[9],
                    singleTotalPrice: e[3],
                    isSingleProductCart: !0
                }
            }),
            {
                c() {
                    t = (0,
                    c.bGB)("div"),
                    t.textContent = `${e[4]}`,
                    r = (0,
                    c.DhX)(),
                    g && g.c(),
                    a = (0,
                    c.DhX)(),
                    s = (0,
                    c.bGB)("div"),
                    n = (0,
                    c.bGB)("div"),
                    (0,
                    c.YCL)(d.$$.fragment),
                    o = (0,
                    c.DhX)(),
                    l = (0,
                    c.bGB)("span"),
                    l.textContent = `${e[11]}`,
                    p = (0,
                    c.DhX)(),
                    m = (0,
                    c.bGB)("div"),
                    m.textContent = `${e[10]}`,
                    (0,
                    c.Ljt)(t, "class", "product-cart-modal-top"),
                    (0,
                    c.Ljt)(l, "class", "cart-modal-continue-btn btn"),
                    (0,
                    c.Ljt)(n, "class", "single-product-cart-footer"),
                    (0,
                    c.Ljt)(m, "class", "single-product-cart-fixed-title-services product-cart-modal-top"),
                    (0,
                    c.Ljt)(s, "class", u = "single-product-cart-fixed " + (e[0] ? "single-product-cart-fixed_visible" : ""))
                },
                m(e, u) {
                    (0,
                    c.$Tr)(e, t, u),
                    (0,
                    c.$Tr)(e, r, u),
                    g && g.m(e, u),
                    (0,
                    c.$Tr)(e, a, u),
                    (0,
                    c.$Tr)(e, s, u),
                    (0,
                    c.R3I)(s, n),
                    (0,
                    c.yef)(d, n, null),
                    (0,
                    c.R3I)(n, o),
                    (0,
                    c.R3I)(n, l),
                    (0,
                    c.R3I)(s, p),
                    (0,
                    c.R3I)(s, m),
                    f = !0,
                    I || (v = (0,
                    c.oLt)(l, "click", i.K4),
                    I = !0)
                },
                p(e, [t]) {
                    e[1] ? g ? (g.p(e, t),
                    2 & t && (0,
                    c.Ui)(g, 1)) : (g = w(e),
                    g.c(),
                    (0,
                    c.Ui)(g, 1),
                    g.m(a.parentNode, a)) : g && ((0,
                    c.dvw)(),
                    (0,
                    c.etI)(g, 1, 1, (()=>{
                        g = null
                    }
                    )),
                    (0,
                    c.gbL)());
                    const r = {};
                    8 & t && (r.singleTotalPrice = e[3]),
                    d.$set(r),
                    (!f || 1 & t && u !== (u = "single-product-cart-fixed " + (e[0] ? "single-product-cart-fixed_visible" : ""))) && (0,
                    c.Ljt)(s, "class", u)
                },
                i(e) {
                    f || ((0,
                    c.Ui)(g),
                    (0,
                    c.Ui)(d.$$.fragment, e),
                    f = !0)
                },
                o(e) {
                    (0,
                    c.etI)(g),
                    (0,
                    c.etI)(d.$$.fragment, e),
                    f = !1
                },
                d(e) {
                    e && (0,
                    c.ogt)(t),
                    e && (0,
                    c.ogt)(r),
                    g && g.d(e),
                    e && (0,
                    c.ogt)(a),
                    e && (0,
                    c.ogt)(s),
                    (0,
                    c.vpE)(d),
                    I = !1,
                    v()
                }
            }
        }
        function F(e, t, r) {
            let i, a, s, n, d, o, l;
            (0,
            c.FIv)(e, u.Z, (e=>r(22, l = e)));
            let {translations: m} = t
              , {productId: f} = t
              , {showFixedPanel: I} = t
              , v = !1;
            const {cartTop: g, licenseCaption: L, priceCaption: b, singlePriceCaption: $, viewCartLabel: j, priceButtonLabel: h, titleServices: R, continueLabel: B, freeLabel: C} = m;
            let T = 0;
            let P = null;
            return e.$$set = e=>{
                "translations"in e && r(15, m = e.translations),
                "productId"in e && r(16, f = e.productId),
                "showFixedPanel"in e && r(0, I = e.showFixedPanel)
            }
            ,
            e.$$.update = ()=>{
                4259840 & e.$$.dirty && r(21, i = l.cartModal.items.find((e=>Number(e.id) === Number(f)))),
                2097152 & e.$$.dirty && r(1, a = function(e) {
                    if (P && !e && (P = null,
                    cartTotal = null),
                    !e)
                        return;
                    const t = {
                        width: 120,
                        height: 75
                    };
                    if ("products" === e.namespace) {
                        const r = l.infoCartModal.products?.find((t=>Number(t.templateId) === Number(e.id)));
                        if (!r)
                            return;
                        const c = e.services.map((e=>l.infoCartModal.services.find((t=>Number(t.serviceId) === Number(e.id))))).filter((e=>!!e))
                          , i = (0,
                        y.C)({
                            src: r.image,
                            ...t
                        });
                        return {
                            item: e,
                            productInfo: r,
                            id: e.id,
                            templateUrl: r.templateUrl,
                            image: i,
                            title: r.templateFullTitle,
                            licenses: r.licenses,
                            licenseData: e.licenseData,
                            services: c,
                            servicesCartInfo: e.services,
                            recommendedSupports: l.infoCartModal.recommendedSupports,
                            supportsCartInfo: e.support,
                            namespace: e.namespace,
                            isDiscountItemDefault: e.price !== e.final_price
                        }
                    }
                    if ("services" === e.namespace) {
                        const r = l.infoCartModal.services?.find((t=>Number(t.serviceId) === Number(e.id)))
                          , c = getServicesPresentation({
                            servicePresentations: r?.presentations,
                            locale: p.Z.locale
                        })
                          , i = (0,
                        y.C)({
                            src: c.imageUrl,
                            ...t
                        });
                        return {
                            item: e,
                            productInfo: r,
                            id: e.id,
                            image: i,
                            title: c.title,
                            namespace: e.namespace
                        }
                    }
                    if ("support" === e.namespace) {
                        const r = l.infoCartModal.supports?.find((t=>Number(t.id) === Number(e.id)))
                          , c = l.infoCartModal.products?.find((e=>Number(e.templateId) === Number(r.productId)))
                          , i = (0,
                        y.C)({
                            src: c.image,
                            ...t
                        });
                        return {
                            item: e,
                            supportInfo: r,
                            id: e.id,
                            image: i,
                            title: c.templateFullTitle,
                            namespace: e.namespace,
                            supportsCartInfo: [e]
                        }
                    }
                    return "items" === e.namespace && {
                        item: e,
                        templateUrl: e.link,
                        id: e.id,
                        title: e.title,
                        namespace: e.namespace
                    }
                }(i)),
                2 & e.$$.dirty && r(20, s = a?.recommendedSupports.reduce(((e,t)=>(a.supportsCartInfo.find((e=>Number(e.id) === Number(t.id))) && (e += t.discountPrice),
                e)), 0)),
                2 & e.$$.dirty && r(19, n = a?.services.reduce(((e,t)=>e + t.finalPrice), 0)),
                2 & e.$$.dirty && r(18, d = a?.licenses?.length ? 0 : a?.item?.final_price),
                1966080 & e.$$.dirty && r(3, o = T + (s || 0) + (n || 0) + (d || 0))
            }
            ,
            [I, a, v, o, g, L, b, $, j, h, R, B, C, function({detail: e}) {
                r(17, T = e.price)
            }
            , {}, m, f, T, d, n, s, i, l, ()=>r(2, v = !v)]
        }
        class Y extends c.f_C {
            constructor(e) {
                super(),
                (0,
                c.S1n)(this, e, F, E, c.N8, {
                    translations: 15,
                    productId: 16,
                    showFixedPanel: 0
                })
            }
        }
        const q = Y;
        function V(e) {
            let t, r, i, a, s, n, d, o, l, p, m, u, f;
            return s = new C({
                props: {
                    translations: e[2],
                    productId: e[8],
                    typeId: e[0],
                    productTypeName: e[1],
                    hasProductSpecialOffers: e[4],
                    listName: e[3],
                    licenseOffers: e[5]
                }
            }),
            s.$on("scrollToTop", e[11]),
            o = new q({
                props: {
                    translations: e[2],
                    productId: e[8],
                    showFixedPanel: e[7]
                }
            }),
            {
                c() {
                    t = (0,
                    c.bGB)("div"),
                    r = (0,
                    c.DhX)(),
                    i = (0,
                    c.bGB)("div"),
                    a = (0,
                    c.bGB)("div"),
                    (0,
                    c.YCL)(s.$$.fragment),
                    n = (0,
                    c.DhX)(),
                    d = (0,
                    c.bGB)("div"),
                    (0,
                    c.YCL)(o.$$.fragment),
                    l = (0,
                    c.DhX)(),
                    p = (0,
                    c.bGB)("div"),
                    (0,
                    c.Ljt)(t, "class", "product-cart-modal-overlay"),
                    (0,
                    c.Ljt)(a, "class", "product-cart-modal-left"),
                    (0,
                    c.Ljt)(d, "class", "product-cart-modal-right"),
                    (0,
                    c.Ljt)(p, "class", "cart-modal-close-btn"),
                    (0,
                    c.Ljt)(i, "class", "product-cart-modal"),
                    (0,
                    c.Ljt)(i, "id", "product-cart-popup")
                },
                m(I, v) {
                    (0,
                    c.$Tr)(I, t, v),
                    (0,
                    c.$Tr)(I, r, v),
                    (0,
                    c.$Tr)(I, i, v),
                    (0,
                    c.R3I)(i, a),
                    (0,
                    c.yef)(s, a, null),
                    e[13](a),
                    (0,
                    c.R3I)(i, n),
                    (0,
                    c.R3I)(i, d),
                    (0,
                    c.yef)(o, d, null),
                    (0,
                    c.R3I)(i, l),
                    (0,
                    c.R3I)(i, p),
                    m = !0,
                    u || (f = [(0,
                    c.oLt)(t, "click", e[10]), (0,
                    c.oLt)(p, "click", e[10]), (0,
                    c.oLt)(i, "scroll", e[9])],
                    u = !0)
                },
                p(e, [t]) {
                    const r = {};
                    4 & t && (r.translations = e[2]),
                    256 & t && (r.productId = e[8]),
                    1 & t && (r.typeId = e[0]),
                    2 & t && (r.productTypeName = e[1]),
                    16 & t && (r.hasProductSpecialOffers = e[4]),
                    8 & t && (r.listName = e[3]),
                    32 & t && (r.licenseOffers = e[5]),
                    s.$set(r);
                    const c = {};
                    4 & t && (c.translations = e[2]),
                    256 & t && (c.productId = e[8]),
                    128 & t && (c.showFixedPanel = e[7]),
                    o.$set(c)
                },
                i(e) {
                    m || ((0,
                    c.Ui)(s.$$.fragment, e),
                    (0,
                    c.Ui)(o.$$.fragment, e),
                    m = !0)
                },
                o(e) {
                    (0,
                    c.etI)(s.$$.fragment, e),
                    (0,
                    c.etI)(o.$$.fragment, e),
                    m = !1
                },
                d(a) {
                    a && (0,
                    c.ogt)(t),
                    a && (0,
                    c.ogt)(r),
                    a && (0,
                    c.ogt)(i),
                    (0,
                    c.vpE)(s),
                    e[13](null),
                    (0,
                    c.vpE)(o),
                    u = !1,
                    (0,
                    c.j7q)(f)
                }
            }
        }
        function J(e, t, r) {
            let a, s;
            (0,
            c.FIv)(e, u.Z, (e=>r(12, s = e)));
            let n, {typeId: d} = t, {productTypeName: o} = t, {translations: l} = t, {listName: p} = t, {hasProductSpecialOffers: m=!1} = t, {licenseOffers: f={}} = t, I = !1;
            return e.$$set = e=>{
                "typeId"in e && r(0, d = e.typeId),
                "productTypeName"in e && r(1, o = e.productTypeName),
                "translations"in e && r(2, l = e.translations),
                "listName"in e && r(3, p = e.listName),
                "hasProductSpecialOffers"in e && r(4, m = e.hasProductSpecialOffers),
                "licenseOffers"in e && r(5, f = e.licenseOffers)
            }
            ,
            e.$$.update = ()=>{
                4096 & e.$$.dirty && r(8, a = Number(s.productCart.productId))
            }
            ,
            [d, o, l, p, m, f, n, I, a, function(e) {
                const t = n.getBoundingClientRect().top;
                r(7, I = t < 0)
            }
            , function() {
                (0,
                i.K4)(),
                u.Z.setIsSingleCartModalOpen(!1)
            }
            , function() {
                n.scrollIntoView()
            }
            , s, function(e) {
                c.VnY[e ? "unshift" : "push"]((()=>{
                    n = e,
                    r(6, n)
                }
                ))
            }
            ]
        }
        class H extends c.f_C {
            constructor(e) {
                super(),
                (0,
                c.S1n)(this, e, J, V, c.N8, {
                    typeId: 0,
                    productTypeName: 1,
                    translations: 2,
                    listName: 3,
                    hasProductSpecialOffers: 4,
                    licenseOffers: 5
                })
            }
        }
        const K = H
    }
}]);
