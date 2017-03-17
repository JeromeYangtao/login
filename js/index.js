function hexToRgb(e) {
    var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(t, function(e, t, n, i) { return t + t + n + n + i + i });
    var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return n ? { r: parseInt(n[1], 16), g: parseInt(n[2], 16), b: parseInt(n[3], 16) } : null
}

function clamp(e, t, n) { return Math.min(Math.max(e, t), n) }

function isInArray(e, t) { return t.indexOf(e) > -1 }! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || te;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = he.type(e);
        return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) { return he.isFunction(t) ? he.grep(e, function(e, i) { return !!t.call(e, i, e) !== n }) : t.nodeType ? he.grep(e, function(e) { return e === t !== n }) : "string" != typeof t ? he.grep(e, function(e) { return se.call(t, e) > -1 !== n }) : ke.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) { return se.call(t, e) > -1 !== n && 1 === e.nodeType })) }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) { var t = {}; return he.each(e.match(qe) || [], function(e, n) { t[n] = !0 }), t }

    function a(e) { return e }

    function c(e) { throw e }

    function l(e, t, n) { var i; try { e && he.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && he.isFunction(i = e.then) ? i.call(e, t, n) : t.call(undefined, e) } catch (e) { n.call(undefined, e) } }

    function u() { te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), he.ready() }

    function p() { this.expando = he.expando + p.uid++ }

    function d(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e) }

    function f(e, t, n) {
        var i;
        if (n === undefined && 1 === e.nodeType)
            if (i = "data-" + t.replace(Ne, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try { n = d(n) } catch (e) {}
                je.set(e, t, n)
            } else n = undefined;
        return n
    }

    function h(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() { return i.cur() } : function() { return he.css(e, t, "") },
            c = a(),
            l = n && n[3] || (he.cssNumber[t] ? "" : "px"),
            u = (he.cssNumber[t] || "px" !== l && +c) && He.exec(he.css(e, t));
        if (u && u[3] !== l) {
            l = l || u[3], n = n || [], u = +c || 1;
            do { o = o || ".5", u /= o, he.style(e, t, u + l) } while (o !== (o = a() / c) && 1 !== o && --s)
        }
        return n && (u = +u || +c || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = l, i.start = u, i.end = r)), r
    }

    function m(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = We[i];
        return r ? r : (t = n.body.appendChild(n.createElement(i)), r = he.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), We[i] = r, r)
    }

    function v(e, t) { for (var n, i, r = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (n = i.style.display, t ? ("none" === n && (r[o] = De.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && Be(i) && (r[o] = m(i))) : "none" !== n && (r[o] = "none", De.set(i, "display", n))); for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]); return e }

    function y(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], t === undefined || t && he.nodeName(e, t) ? he.merge([e], n) : n }

    function g(e, t) { for (var n = 0, i = e.length; n < i; n++) De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval")) }

    function b(e, t, n, i, r) {
        for (var o, s, a, c, l, u, p = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === he.type(o)) he.merge(d, o.nodeType ? [o] : o);
                else if (Je.test(o)) {
            for (s = s || p.appendChild(t.createElement("div")), a = (Ve.exec(o) || ["", ""])[1].toLowerCase(), c = Xe[a] || Xe._default, s.innerHTML = c[1] + he.htmlPrefilter(o) + c[2], u = c[0]; u--;) s = s.lastChild;
            he.merge(d, s.childNodes), s = p.firstChild, s.textContent = ""
        } else d.push(t.createTextNode(o));
        for (p.textContent = "", f = 0; o = d[f++];)
            if (i && he.inArray(o, i) > -1) r && r.push(o);
            else if (l = he.contains(o.ownerDocument, o), s = y(p.appendChild(o), "script"), l && g(s), n)
            for (u = 0; o = s[u++];) Ue.test(o.type || "") && n.push(o);
        return p
    }

    function w() { return !0 }

    function x() { return !1 }

    function C() { try { return te.activeElement } catch (e) {} }

    function S(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) { "string" != typeof n && (i = i || n, n = undefined); for (a in t) S(e, a, n, i, t[a], o); return e }
        if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), r === !1) r = x;
        else if (!r) return e;
        return 1 === o && (s = r, r = function(e) { return he().off(e), s.apply(this, arguments) }, r.guid = s.guid || (s.guid = he.guid++)), e.each(function() { he.event.add(this, t, r, i, n) })
    }

    function k(e, t) { return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e }

    function T(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function E(e) { var t = nt.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function A(e, t) {
        var n, i, r, o, s, a, c, l;
        if (1 === t.nodeType) {
            if (De.hasData(e) && (o = De.access(e), s = De.set(t, o), l = o.events)) {
                delete s.handle, s.events = {};
                for (r in l)
                    for (n = 0, i = l[r].length; n < i; n++) he.event.add(t, r, l[r][n])
            }
            je.hasData(e) && (a = je.access(e), c = he.extend({}, a), je.set(t, c))
        }
    }

    function _(e, t) { var n = t.nodeName.toLowerCase(); "input" === n && $e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) }

    function q(e, t, i, r) {
        t = re.apply([], t);
        var o, s, a, c, l, u, p = 0,
            d = e.length,
            f = d - 1,
            h = t[0],
            m = he.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !de.checkClone && tt.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            m && (t[0] = h.call(this, n, o.html())), q(o, t, i, r)
        });
        if (d && (o = b(t, e[0].ownerDocument, !1, e, r), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || r)) {
            for (a = he.map(y(o, "script"), T), c = a.length; p < d; p++) l = o, p !== f && (l = he.clone(l, !0, !0), c && he.merge(a, y(l, "script"))), i.call(e[p], l, p);
            if (c)
                for (u = a[a.length - 1].ownerDocument, he.map(a, E), p = 0; p < c; p++) l = a[p], Ue.test(l.type || "") && !De.access(l, "globalEval") && he.contains(u, l) && (l.src ? he._evalUrl && he._evalUrl(l.src) : n(l.textContent.replace(it, ""), u))
        }
        return e
    }

    function L(e, t, n) { for (var i, r = t ? he.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || he.cleanData(y(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && g(y(i, "script")), i.parentNode.removeChild(i)); return e }

    function R(e, t, n) { var i, r, o, s, a = e.style; return n = n || st(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || he.contains(e.ownerDocument, e) || (s = he.style(e, t)), !de.pixelMarginRight() && ot.test(s) && rt.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), s !== undefined ? s + "" : s }

    function P(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }

    function M(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ut.length; n--;)
            if ((e = ut[n] + t) in pt) return e
    }

    function D(e, t, n) { var i = He.exec(t); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t }

    function j(e, t, n, i, r) { var o, s = 0; for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (s += he.css(e, n + ze[o], !0, r)), i ? ("content" === n && (s -= he.css(e, "padding" + ze[o], !0, r)), "margin" !== n && (s -= he.css(e, "border" + ze[o] + "Width", !0, r))) : (s += he.css(e, "padding" + ze[o], !0, r), "padding" !== n && (s += he.css(e, "border" + ze[o] + "Width", !0, r))); return s }

    function F(e, t, n) {
        var i, r = !0,
            o = st(e),
            s = "border-box" === he.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (i = R(e, t, o), (i < 0 || null == i) && (i = e.style[t]), ot.test(i)) return i;
            r = s && (de.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + j(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function N(e, t, n, i, r) { return new N.prototype.init(e, t, n, i, r) }

    function I() { ft && (e.requestAnimationFrame(I), he.fx.tick()) }

    function H() { return e.setTimeout(function() { dt = undefined }), dt = he.now() }

    function z(e, t) {
        var n, i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = ze[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function B(e, t, n) {
        for (var i, r = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function O(e, t, n) {
        var i, r, o, s, a, c, l, u, p = "width" in t || "height" in t,
            d = this,
            f = {},
            h = e.style,
            m = e.nodeType && Be(e),
            y = De.get(e, "fxshow");
        n.queue || (s = he._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() { s.unqueued || a() }), s.unqueued++, d.always(function() { d.always(function() { s.unqueued--, he.queue(e, "fx").length || s.empty.fire() }) }));
        for (i in t)
            if (r = t[i], ht.test(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !y || y[i] === undefined) continue;
                    m = !0
                }
                f[i] = y && y[i] || he.style(e, i)
            }
        if ((c = !he.isEmptyObject(t)) || !he.isEmptyObject(f)) { p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = y && y.display, null == l && (l = De.get(e, "display")), u = he.css(e, "display"), "none" === u && (l ? u = l : (v([e], !0), l = e.style.display || l, u = he.css(e, "display"), v([e]))), ("inline" === u || "inline-block" === u && null != l) && "none" === he.css(e, "float") && (c || (d.done(function() { h.display = l }), null == l && (u = h.display, l = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), c = !1; for (i in f) c || (y ? "hidden" in y && (m = y.hidden) : y = De.access(e, "fxshow", { display: l }), o && (y.hidden = !m), m && v([e], !0), d.done(function() { m || v([e]), De.remove(e, "fxshow"); for (i in f) he.style(e, i, f[i]) })), c = B(m ? y[i] : 0, i, d), i in y || (y[i] = c.start, m && (c.end = c.start, c.start = 0)) }
    }

    function W(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = he.camelCase(n), r = t[i], o = e[n], he.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = he.cssHooks[i]) && "expand" in s) { o = s.expand(o), delete e[i]; for (n in o) n in e || (e[n] = o[n], t[n] = r) } else t[i] = r
    }

    function $(e, t, n) {
        var i, r, o = 0,
            s = $.prefilters.length,
            a = he.Deferred().always(function() { delete c.elem }),
            c = function() { if (r) return !1; for (var t = dt || H(), n = Math.max(0, l.startTime + l.duration - t), i = n / l.duration || 0, o = 1 - i, s = 0, c = l.tweens.length; s < c; s++) l.tweens[s].run(o); return a.notifyWith(e, [l, o, n]), o < 1 && c ? n : (a.resolveWith(e, [l]), !1) },
            l = a.promise({
                elem: e,
                props: he.extend({}, t),
                opts: he.extend(!0, { specialEasing: {}, easing: he.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: dt || H(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) { var i = he.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(i), i },
                stop: function(t) {
                    var n = 0,
                        i = t ? l.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this
                }
            }),
            u = l.props;
        for (W(u, l.opts.specialEasing); o < s; o++)
            if (i = $.prefilters[o].call(l, e, u, l.opts)) return he.isFunction(i.stop) && (he._queueHooks(l.elem, l.opts.queue).stop = he.proxy(i.stop, i)), i;
        return he.map(u, B, l), he.isFunction(l.opts.start) && l.opts.start.call(e, l), he.fx.timer(he.extend(c, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function V(e) { return (e.match(qe) || []).join(" ") }

    function U(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function X(e, t, n, i) {
        var r;
        if (he.isArray(t)) he.each(t, function(t, r) { n || Tt.test(e) ? i(e, r) : X(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i) });
        else if (n || "object" !== he.type(t)) i(e, t);
        else
            for (r in t) X(e + "[" + r + "]", t[r], n, i)
    }

    function J(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(qe) || [];
            if (he.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Y(e, t, n, i) {
        function r(a) { var c; return o[a] = !0, he.each(e[a] || [], function(e, a) { var l = a(t, n, i); return "string" != typeof l || s || o[l] ? s ? !(c = l) : void 0 : (t.dataTypes.unshift(l), r(l), !1) }), c }
        var o = {},
            s = e === Nt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function K(e, t) { var n, i, r = he.ajaxSettings.flatOptions || {}; for (n in t) t[n] !== undefined && ((r[n] ? e : i || (i = {}))[n] = t[n]); return i && he.extend(!0, e, i), e }

    function G(e, t, n) {
        for (var i, r, o, s, a = e.contents, c = e.dataTypes;
            "*" === c[0];) c.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) { c.unshift(r); break }
        if (c[0] in n) o = c[0];
        else {
            for (r in n) {
                if (!c[0] || e.converters[r + " " + c[0]]) { o = r; break }
                s || (s = r)
            }
            o = o || s
        }
        if (o) return o !== c[0] && c.unshift(o), n[o]
    }

    function Q(e, t, n, i) {
        var r, o, s, a, c, l = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = o, o = u.shift())
                if ("*" === o) o = c;
                else if ("*" !== c && c !== o) {
            if (!(s = l[c + " " + o] || l["* " + o]))
                for (r in l)
                    if (a = r.split(" "), a[1] === o && (s = l[c + " " + a[0]] || l["* " + a[0]])) { s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0], u.unshift(a[1])); break }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try { t = s(t) } catch (e) { return { state: "parsererror", error: s ? e : "No conversion from " + c + " to " + o } }
        }
        return { state: "success", data: t }
    }

    function Z(e) { return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView }
    var ee = [],
        te = e.document,
        ne = Object.getPrototypeOf,
        ie = ee.slice,
        re = ee.concat,
        oe = ee.push,
        se = ee.indexOf,
        ae = {},
        ce = ae.toString,
        le = ae.hasOwnProperty,
        ue = le.toString,
        pe = ue.call(Object),
        de = {},
        fe = "3.1.1",
        he = function(e, t) { return new he.fn.init(e, t) },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ye = /-([a-z])/g,
        ge = function(e, t) { return t.toUpperCase() };
    he.fn = he.prototype = {
        jquery: fe,
        constructor: he,
        length: 0,
        toArray: function() { return ie.call(this) },
        get: function(e) { return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = he.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return he.each(this, e) },
        map: function(e) { return this.pushStack(he.map(this, function(t, n) { return e.call(t, n, t) })) },
        slice: function() { return this.pushStack(ie.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: oe,
        sort: ee.sort,
        splice: ee.splice
    }, he.extend = he.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            c = arguments.length,
            l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || he.isFunction(s) || (s = {}), a === c && (s = this, a--); a < c; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], i = e[t], s !== i && (l && i && (he.isPlainObject(i) || (r = he.isArray(i))) ? (r ? (r = !1, o = n && he.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, s[t] = he.extend(l, o, i)) : i !== undefined && (s[t] = i));
        return s
    }, he.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isFunction: function(e) { return "function" === he.type(e) },
        isArray: Array.isArray,
        isWindow: function(e) { return null != e && e === e.window },
        isNumeric: function(e) { var t = he.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) },
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== ce.call(e)) && (!(t = ne(e)) || "function" == typeof(n = le.call(t, "constructor") && t.constructor) && ue.call(n) === pe) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ae[ce.call(e)] || "object" : typeof e },
        globalEval: function(e) { n(e) },
        camelCase: function(e) { return e.replace(ve, "ms-").replace(ye, ge) },
        nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(me, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : oe.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : se.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i]; return e.length = r, e },
        grep: function(e, t, n) { for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]); return i },
        map: function(e, t, n) {
            var r, o, s = 0,
                a = [];
            if (i(e))
                for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return re.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) { var n, i, r; return "string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e) ? (i = ie.call(arguments, 2), r = function() { return e.apply(t || this, i.concat(ie.call(arguments))) }, r.guid = e.guid = e.guid || he.guid++, r) : undefined },
        now: Date.now,
        support: de
    }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { ae["[object " + t + "]"] = t.toLowerCase() });
    var be = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, c, l, u, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : B) !== M && P(t), t = t || M, j)) {
                if (11 !== h && (c = ye.exec(e)))
                    if (r = c[1]) { if (9 === h) { if (!(s = t.getElementById(r))) return n; if (s.id === r) return n.push(s), n } else if (d && (s = d.getElementById(r)) && H(t, s) && s.id === r) return n.push(s), n } else { if (c[2]) return Q.apply(n, t.getElementsByTagName(e)), n; if ((r = c[3]) && C.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)), n }
                if (C.qsa && !U[e + " "] && (!F || !F.test(e))) {
                    if (1 !== h) d = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, Ce) : t.setAttribute("id", a = z), l = E(e), o = l.length; o--;) l[o] = "#" + a + " " + f(l[o]);
                        u = l.join(","), d = ge.test(e) && p(t.parentNode) || t
                    }
                    if (u) try { return Q.apply(n, d.querySelectorAll(u)), n } catch (e) {} finally { a === z && t.removeAttribute("id") }
                }
            }
            return _(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) { return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = i }
            var t = [];
            return e
        }

        function i(e) { return e[z] = !0, e }

        function r(e) { var t = M.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function o(e, t) { for (var n = e.split("|"), i = n.length; i--;) S.attrHandle[n[i]] = t }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) { return function(t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }

        function c(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

        function l(e) { return function(t) { return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e } }

        function u(e) { return i(function(t) { return t = +t, i(function(n, i) { for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r])) }) }) }

        function p(e) { return e && "undefined" != typeof e.getElementsByTagName && e }

        function d() {}

        function f(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

        function h(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                s = n && "parentNode" === o,
                a = W++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function(t, n, c) {
                var l, u, p, d = [O, a];
                if (c) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, c)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (p = t[z] || (t[z] = {}), u = p[t.uniqueID] || (p[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else { if ((l = u[o]) && l[0] === O && l[1] === a) return d[2] = l[2]; if (u[o] = d, d[2] = e(t, n, c)) return !0 } return !1
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function v(e, n, i) { for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i); return i }

        function y(e, t, n, i, r) { for (var o, s = [], a = 0, c = e.length, l = null != t; a < c; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), l && t.push(a))); return s }

        function g(e, t, n, r, o, s) {
            return r && !r[z] && (r = g(r)), o && !o[z] && (o = g(o, s)), i(function(i, s, a, c) {
                var l, u, p, d = [],
                    f = [],
                    h = s.length,
                    m = i || v(t || "*", a.nodeType ? [a] : a, []),
                    g = !e || !i && t ? m : y(m, d, e, a, c),
                    b = n ? o || (i ? e : h || r) ? [] : s : g;
                if (n && n(g, b, a, c), r)
                    for (l = y(b, f), r(l, [], a, c), u = l.length; u--;)(p = l[u]) && (b[f[u]] = !(g[f[u]] = p));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], u = b.length; u--;)(p = b[u]) && l.push(g[u] = p);
                            o(null, b = [], l, c)
                        }
                        for (u = b.length; u--;)(p = b[u]) && (l = o ? ee(i, p) : d[u]) > -1 && (i[l] = !(s[l] = p))
                    }
                } else b = y(b === s ? b.splice(h, b.length) : b), o ? o(null, s, b, c) : Q.apply(s, b)
            })
        }

        function b(e) {
            for (var t, n, i, r = e.length, o = S.relative[e[0].type], s = o || S.relative[" "], a = o ? 1 : 0, c = h(function(e) { return e === t }, s, !0), l = h(function(e) { return ee(t, e) > -1 }, s, !0), u = [function(e, n, i) { var r = !o && (i || n !== q) || ((t = n).nodeType ? c(e, n, i) : l(e, n, i)); return t = null, r }]; a < r; a++)
                if (n = S.relative[e[a].type]) u = [h(m(u), n)];
                else {
                    if (n = S.filter[e[a].type].apply(null, e[a].matches), n[z]) { for (i = ++a; i < r && !S.relative[e[i].type]; i++); return g(a > 1 && m(u), a > 1 && f(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(ae, "$1"), n, a < i && b(e.slice(a, i)), i < r && b(e = e.slice(i)), i < r && f(e)) }
                    u.push(n)
                }
            return m(u)
        }

        function w(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function(i, s, a, c, l) {
                    var u, p, d, f = 0,
                        h = "0",
                        m = i && [],
                        v = [],
                        g = q,
                        b = i || o && S.find.TAG("*", l),
                        w = O += null == g ? 1 : Math.random() || .1,
                        x = b.length;
                    for (l && (q = s === M || s || l); h !== x && null != (u = b[h]); h++) {
                        if (o && u) {
                            for (p = 0, s || u.ownerDocument === M || (P(u), a = !j); d = e[p++];)
                                if (d(u, s || M, a)) { c.push(u); break }
                            l && (O = w)
                        }
                        r && ((u = !d && u) && f--, i && m.push(u))
                    }
                    if (f += h, r && h !== f) {
                        for (p = 0; d = n[p++];) d(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || v[h] || (v[h] = K.call(c));
                            v = y(v)
                        }
                        Q.apply(c, v), l && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(c)
                    }
                    return l && (O = w, q = g), m
                };
            return r ? i(s) : s
        }
        var x, C, S, k, T, E, A, _, q, L, R, P, M, D, j, F, N, I, H, z = "sizzle" + 1 * new Date,
            B = e.document,
            O = 0,
            W = 0,
            $ = n(),
            V = n(),
            U = n(),
            X = function(e, t) { return e === t && (R = !0), 0 },
            J = {}.hasOwnProperty,
            Y = [],
            K = Y.pop,
            G = Y.push,
            Q = Y.push,
            Z = Y.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            ce = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            pe = new RegExp(oe),
            de = new RegExp("^" + ie + "$"),
            fe = { ID: new RegExp("^#(" + ie + ")"), CLASS: new RegExp("^\\.(" + ie + ")"), TAG: new RegExp("^(" + ie + "|[*])"), ATTR: new RegExp("^" + re), PSEUDO: new RegExp("^" + oe), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ge = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) { var i = "0x" + t - 65536; return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            Se = function() { P() },
            ke = h(function(e) { return e.disabled === !0 && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
        try { Q.apply(Y = Z.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType } catch (e) {
            Q = {
                apply: Y.length ? function(e, t) { G.apply(e, Z.call(t)) } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        C = t.support = {}, T = t.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, P = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : B;
            return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, D = M.documentElement, j = !T(M), B !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), C.attributes = r(function(e) { return e.className = "i", !e.getAttribute("className") }), C.getElementsByTagName = r(function(e) { return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length }), C.getElementsByClassName = ve.test(M.getElementsByClassName), C.getById = r(function(e) { return D.appendChild(e).id = z, !M.getElementsByName || !M.getElementsByName(z).length }), C.getById ? (S.filter.ID = function(e) { var t = e.replace(be, we); return function(e) { return e.getAttribute("id") === t } }, S.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && j) { var n = t.getElementById(e); return n ? [n] : [] } }) : (S.filter.ID = function(e) { var t = e.replace(be, we); return function(e) { var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }, S.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && j) {
                    var n, i, r, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), S.find.TAG = C.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : C.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) { for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i }
                return o
            }, S.find.CLASS = C.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && j) return t.getElementsByClassName(e) }, N = [], F = [], (C.qsa = ve.test(M.querySelectorAll)) && (r(function(e) { D.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + z + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + z + "+*").length || F.push(".#.+[+~]") }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = M.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (C.matchesSelector = ve.test(I = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(e) { C.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), N.push("!=", oe) }), F = F.length && new RegExp(F.join("|")), N = N.length && new RegExp(N.join("|")), t = ve.test(D.compareDocumentPosition), H = t || ve.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) { if (e === t) return R = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !C.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === B && H(B, e) ? -1 : t === M || t.ownerDocument === B && H(B, t) ? 1 : L ? ee(L, e) - ee(L, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                if (e === t) return R = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    c = [t];
                if (!r || !o) return e === M ? -1 : t === M ? 1 : r ? -1 : o ? 1 : L ? ee(L, e) - ee(L, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) c.unshift(n);
                for (; a[i] === c[i];) i++;
                return i ? s(a[i], c[i]) : a[i] === B ? -1 : c[i] === B ? 1 : 0
            }, M) : M
        }, t.matches = function(e, n) { return t(e, null, null, n) }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== M && P(e), n = n.replace(ue, "='$1']"), C.matchesSelector && j && !U[n + " "] && (!N || !N.test(n)) && (!F || !F.test(n))) try { var i = I.call(e, n); if (i || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i } catch (e) {}
            return t(n, M, null, [e]).length > 0
        }, t.contains = function(e, t) { return (e.ownerDocument || e) !== M && P(e), H(e, t) }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== M && P(e);
            var n = S.attrHandle[t.toLowerCase()],
                i = n && J.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !j) : undefined;
            return i !== undefined ? i : C.attributes || !j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) { return (e + "").replace(xe, Ce) }, t.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (R = !C.detectDuplicates, L = !C.sortStable && e.slice(0), e.sort(X), R) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) }
            return L = null, e
        }, k = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += k(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                for (; t = e[i++];) n += k(t);
            return n
        }, S = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(e) { return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
            filter: {
                TAG: function(e) { var t = e.replace(be, we).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                CLASS: function(e) { var t = $[e + " "]; return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                ATTR: function(e, n, i) { return function(r) { var o = t.attr(r, e); return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-")) } },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) { return !!e.parentNode } : function(t, n, c) {
                        var l, u, p, d, f, h, m = o !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            g = !c && !a,
                            b = !1;
                        if (v) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && g) {
                                for (d = v, p = d[z] || (d[z] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), l = u[e] || [], f = l[0] === O && l[1], b = f && l[2], d = f && v.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) { u[e] = [O, f, b]; break }
                            } else if (g && (d = t, p = d[z] || (d[z] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), l = u[e] || [], f = l[0] === O && l[1], b = f), b === !1)
                                for (;
                                    (d = ++f && d && d[m] || (b = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++b || (g && (p = d[z] || (d[z] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), u[e] = [O, b]), d !== t)););
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) { var r, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e); return o[z] ? o(n) : o.length > 1 ? (r = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) { for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s]) }) : function(e) { return o(e, 0, r) }) : o }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = A(e.replace(ae, "$1"));
                    return r[z] ? i(function(e, t, n, i) { for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o)) }) : function(e, i, o) { return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop() }
                }),
                has: i(function(e) { return function(n) { return t(e, n).length > 0 } }),
                contains: i(function(e) {
                    return e = e.replace(be, we),
                        function(t) { return (t.textContent || t.innerText || k(t)).indexOf(e) > -1 }
                }),
                lang: i(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                        function(t) {
                            var n;
                            do { if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id },
                root: function(e) { return e === D },
                focus: function(e) { return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                enabled: l(!1),
                disabled: l(!0),
                checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) { return !S.pseudos.empty(e) },
                header: function(e) { return me.test(e.nodeName) },
                input: function(e) { return he.test(e.nodeName) },
                button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                first: u(function() { return [0] }),
                last: u(function(e, t) { return [t - 1] }),
                eq: u(function(e, t, n) { return [n < 0 ? n + t : n] }),
                even: u(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                odd: u(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                lt: u(function(e, t, n) { for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i); return e }),
                gt: u(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e })
            }
        }, S.pseudos.nth = S.pseudos.eq;
        for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) S.pseudos[x] = a(x);
        for (x in { submit: !0, reset: !0 }) S.pseudos[x] = c(x);
        return d.prototype = S.filters = S.pseudos, S.setFilters = new d, E = t.tokenize = function(e, n) { var i, r, o, s, a, c, l, u = V[e + " "]; if (u) return n ? 0 : u.slice(0); for (a = e, c = [], l = S.preFilter; a;) { i && !(r = ce.exec(a)) || (r && (a = a.slice(r[0].length) || a), c.push(o = [])), i = !1, (r = le.exec(a)) && (i = r.shift(), o.push({ value: i, type: r[0].replace(ae, " ") }), a = a.slice(i.length)); for (s in S.filter) !(r = fe[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(), o.push({ value: i, type: s, matches: r }), a = a.slice(i.length)); if (!i) break } return n ? a.length : a ? t.error(e) : V(e, c).slice(0) }, A = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = b(t[n]), o[z] ? i.push(o) : r.push(o);
                o = U(e, w(r, i)), o.selector = e
            }
            return o
        }, _ = t.select = function(e, t, n, i) {
            var r, o, s, a, c, l = "function" == typeof e && e,
                u = !i && E(e = l.selector || e);
            if (n = n || [], 1 === u.length) {
                if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && j && S.relative[o[1].type]) {
                    if (!(t = (S.find.ID(s.matches[0].replace(be, we), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !S.relative[a = s.type]);)
                    if ((c = S.find[a]) && (i = c(s.matches[0].replace(be, we), ge.test(o[0].type) && p(t.parentNode) || t))) { if (o.splice(r, 1), !(e = i.length && f(o))) return Q.apply(n, i), n; break }
            }
            return (l || A(e, u))(i, t, !j, n, !t || ge.test(e) && p(t.parentNode) || t), n
        }, C.sortStable = z.split("").sort(X).join("") === z, C.detectDuplicates = !!R, P(), C.sortDetached = r(function(e) { return 1 & e.compareDocumentPosition(M.createElement("fieldset")) }), r(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || o("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), C.attributes && r(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || o("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), r(function(e) { return null == e.getAttribute("disabled") }) || o(te, function(e, t, n) { var i; if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), t
    }(e);
    he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
    var we = function(e, t, n) {
            for (var i = [], r = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && he(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        xe = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        Ce = he.expr.match.needsContext,
        Se = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        ke = /^.[^:#\[\.,]*$/;
    he.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function(e) { return 1 === e.nodeType })) }, he.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(he(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (he.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) he.find(e, r[t], n);
            return i > 1 ? he.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(r(this, e || [], !1)) },
        not: function(e) { return this.pushStack(r(this, e || [], !0)) },
        is: function(e) { return !!r(this, "string" == typeof e && Ce.test(e) ? he(e) : e || [], !1).length }
    });
    var Te, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || Te, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Se.test(i[1]) && he.isPlainObject(t))
                    for (i in t) he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return r = te.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? n.ready !== undefined ? n.ready(e) : e(he) : he.makeArray(e, this)
    }).prototype = he.fn, Te = he(te);
    var Ae = /^(?:parents|prev(?:Until|All))/,
        _e = { children: !0, contents: !0, next: !0, prev: !0 };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && he(e);
            if (!Ce.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), he.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return we(e, "parentNode") }, parentsUntil: function(e, t, n) { return we(e, "parentNode", n) }, next: function(e) { return o(e, "nextSibling") }, prev: function(e) { return o(e, "previousSibling") }, nextAll: function(e) { return we(e, "nextSibling") }, prevAll: function(e) { return we(e, "previousSibling") }, nextUntil: function(e, t, n) { return we(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return we(e, "previousSibling", n) }, siblings: function(e) { return xe((e.parentNode || {}).firstChild, e) }, children: function(e) { return xe(e.firstChild) }, contents: function(e) { return e.contentDocument || he.merge([], e.childNodes) } }, function(e, t) { he.fn[e] = function(n, i) { var r = he.map(this, t, n); return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = he.filter(i, r)), this.length > 1 && (_e[e] || he.uniqueSort(r), Ae.test(e) && r.reverse()), this.pushStack(r) } });
    var qe = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : he.extend({}, e);
        var t, n, i, r, o = [],
            a = [],
            c = -1,
            l = function() {
                for (r = e.once, i = t = !0; a.length; c = -1)
                    for (n = a.shift(); ++c < o.length;) o[c].apply(n[0], n[1]) === !1 && e.stopOnFalse && (c = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            u = {
                add: function() { return o && (n && !t && (c = o.length - 1, a.push(n)), function t(n) { he.each(n, function(n, i) { he.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== he.type(i) && t(i) }) }(arguments), n && !t && l()), this },
                remove: function() {
                    return he.each(arguments, function(e, t) {
                        for (var n;
                            (n = he.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) { return e ? he.inArray(e, o) > -1 : o.length > 0 },
                empty: function() { return o && (o = []), this },
                disable: function() { return r = a = [], o = n = "", this },
                disabled: function() { return !o },
                lock: function() { return r = a = [], n || t || (o = n = ""), this },
                locked: function() { return !!r },
                fireWith: function(e, n) { return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this },
                fire: function() { return u.fireWith(this, arguments), this },
                fired: function() { return !!i }
            };
        return u
    }, he.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
                    ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() { return i },
                    always: function() { return o.done(arguments).fail(arguments), this },
                    "catch": function(e) { return r.then(null, e) },
                    pipe: function() {
                        var e = arguments;
                        return he.Deferred(function(t) {
                            he.each(n, function(n, i) {
                                var r = he.isFunction(e[i[4]]) && e[i[4]];
                                o[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function o(t, n, i, r) {
                            return function() {
                                var l = this,
                                    u = arguments,
                                    p = function() {
                                        var e, p;
                                        if (!(t < s)) {
                                            if ((e = i.apply(l, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(p) ? r ? p.call(e, o(s, n, a, r), o(s, n, c, r)) : (s++, p.call(e, o(s, n, a, r), o(s, n, c, r), o(s, n, a, n.notifyWith))) : (i !== a && (l = undefined, u = [e]), (r || n.resolveWith)(l, u))
                                        }
                                    },
                                    d = r ? p : function() { try { p() } catch (e) { he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== c && (l = undefined, u = [e]), n.rejectWith(l, u)) } };
                                t ? d() : (he.Deferred.getStackHook && (d.stackTrace = he.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var s = 0;
                        return he.Deferred(function(e) { n[0][3].add(o(0, e, he.isFunction(r) ? r : a, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : a)), n[2][3].add(o(0, e, he.isFunction(i) ? i : c)) }).promise()
                    },
                    promise: function(e) { return null != e ? he.extend(e, r) : r }
                },
                o = {};
            return he.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                r[t[1]] = s.add, a && s.add(function() { i = a }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), o[t[0]] = function() { return o[t[0] + "With"](this === o ? undefined : this, arguments), this }, o[t[0] + "With"] = s.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = ie.call(arguments),
                o = he.Deferred(),
                s = function(e) { return function(n) { i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || o.resolveWith(i, r) } };
            if (t <= 1 && (l(e, o.done(s(n)).resolve, o.reject), "pending" === o.state() || he.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) l(r[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) { e.console && e.console.warn && t && Le.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n) }, he.readyException = function(t) { e.setTimeout(function() { throw t }) };
    var Re = he.Deferred();
    he.fn.ready = function(e) { return Re.then(e)["catch"](function(e) { he.readyException(e) }), this }, he.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) { e ? he.readyWait++ : he.ready(!0) },
        ready: function(e) {
            (e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || Re.resolveWith(te, [he]))
        }
    }), he.ready.then = Re.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
    var Pe = function(e, t, n, i, r, o, s) {
            var a = 0,
                c = e.length,
                l = null == n;
            if ("object" === he.type(n)) { r = !0; for (a in n) Pe(e, t, a, n[a], !0, o, s) } else if (i !== undefined && (r = !0, he.isFunction(i) || (s = !0), l && (s ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) { return l.call(he(e), n) })), t))
                for (; a < c; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : l ? t.call(e) : c ? t(e[0], n) : o
        },
        Me = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };
    p.uid = 1, p.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, Me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[he.camelCase(t)] = n;
            else
                for (i in t) r[he.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) { return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)] },
        access: function(e, t, n) { return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t) },
        remove: function(e, t) { var n, i = e[this.expando]; if (i !== undefined) { if (t !== undefined) { he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in i ? [t] : t.match(qe) || []), n = t.length; for (; n--;) delete i[t[n]] }(t === undefined || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return t !== undefined && !he.isEmptyObject(t) }
    };
    var De = new p,
        je = new p,
        Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /[A-Z]/g;
    he.extend({ hasData: function(e) { return je.hasData(e) || De.hasData(e) }, data: function(e, t, n) { return je.access(e, t, n) }, removeData: function(e, t) { je.remove(e, t) }, _data: function(e, t, n) { return De.access(e, t, n) }, _removeData: function(e, t) { De.remove(e, t) } }), he.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (e === undefined) {
                if (this.length && (r = je.get(o), 1 === o.nodeType && !De.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = he.camelCase(i.slice(5)), f(o, i, r[i])));
                    De.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() { je.set(this, e) }) : Pe(this, function(t) { var n; if (o && t === undefined) { if ((n = je.get(o, e)) !== undefined) return n; if ((n = f(o, e)) !== undefined) return n } else this.each(function() { je.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) { return this.each(function() { je.remove(this, e) }) }
    }), he.extend({
        queue: function(e, t, n) { var i; if (e) return t = (t || "fx") + "queue", i = De.get(e, t), n && (!i || he.isArray(n) ? i = De.access(e, t, he.makeArray(n)) : i.push(n)), i || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = he._queueHooks(e, t),
                s = function() { he.dequeue(e, t) };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return De.get(e, n) || De.access(e, n, { empty: he.Callbacks("once memory").add(function() { De.remove(e, [t + "queue", n]) }) }) }
    }), he.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function(e) { return this.each(function() { he.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, i = 1,
                r = he.Deferred(),
                o = this,
                s = this.length,
                a = function() {--i || r.resolveWith(o, [o]) };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = De.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        He = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
        ze = ["Top", "Right", "Bottom", "Left"],
        Be = function(e, t) { return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display") },
        Oe = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        },
        We = {};
    he.fn.extend({ show: function() { return v(this, !0) }, hide: function() { return v(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Be(this) ? he(this).show() : he(this).hide() }) } });
    var $e = /^(?:checkbox|radio)$/i,
        Ve = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Xe = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
    var Je = /<|&#?\w+;/;
    ! function() {
        var e = te.createDocumentFragment(),
            t = e.appendChild(te.createElement("div")),
            n = te.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = te.documentElement,
        Ke = /^key/,
        Ge = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, c, l, u, p, d, f, h, m, v = De.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && he.find.matchesSelector(Ye, r), n.guid || (n.guid = he.guid++), (c = v.events) || (c = v.events = {}), (s = v.handle) || (s = v.handle = function(t) { return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : undefined }), t = (t || "").match(qe) || [""], l = t.length; l--;) a = Qe.exec(t[l]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f && (p = he.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, p = he.event.special[f] || {}, u = he.extend({ type: f, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && he.expr.match.needsContext.test(r), namespace: h.join(".") }, o), (d = c[f]) || (d = c[f] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), p.add && (p.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), he.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, c, l, u, p, d, f, h, m, v = De.hasData(e) && De.get(e);
            if (v && (c = v.events)) {
                for (t = (t || "").match(qe) || [""], l = t.length; l--;)
                    if (a = Qe.exec(t[l]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (p = he.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(e, u));
                        s && !d.length && (p.teardown && p.teardown.call(e, h, v.handle) !== !1 || he.removeEvent(e, f, v.handle), delete c[f])
                    } else
                        for (f in c) he.event.remove(e, f + t[l], n, i, !0);
                he.isEmptyObject(c) && De.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, o, s, a = he.event.fix(e),
                c = new Array(arguments.length),
                l = (De.get(this, "events") || {})[a.type] || [],
                u = he.event.special[a.type] || {};
            for (c[0] = a, t = 1; t < arguments.length; t++) c[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, a) !== !1) {
                for (s = he.event.handlers.call(this, a, l), t = 0;
                    (r = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, a.data = o.data, (i = ((he.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, c)) !== undefined && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s, a = [],
                c = t.delegateCount,
                l = e.target;
            if (c && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
                        for (o = [], s = {}, n = 0; n < c; n++) i = t[n], r = i.selector + " ", s[r] === undefined && (s[r] = i.needsContext ? he(r, this).index(l) > -1 : he.find(r, this, null, [l]).length), s[r] && o.push(i);
                        o.length && a.push({ elem: l, handlers: o })
                    }
            return l = this, c < t.length && a.push({ elem: l, handlers: t.slice(c) }), a
        },
        addProp: function(e, t) { Object.defineProperty(he.Event.prototype, e, { enumerable: !0, configurable: !0, get: he.isFunction(t) ? function() { if (this.originalEvent) return t(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[e] }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
        fix: function(e) { return e[he.expando] ? e : new he.Event(e) },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== C() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === C() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1 }, _default: function(e) { return he.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, he.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, he.Event = function(e, t) {
        if (!(this instanceof he.Event)) return new he.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === !1 ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
    }, he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, he.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && t !== undefined && Ge.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, he.event.addProp), he.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || he.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.fn.extend({ on: function(e, t, n, i) { return S(this, e, t, n, i) }, one: function(e, t, n, i) { return S(this, e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (r in e) this.off(r, t, e[r]); return this } return t !== !1 && "function" != typeof t || (n = t, t = undefined), n === !1 && (n = x), this.each(function() { he.event.remove(this, e, n, t) }) } });
    var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        et = /<script|<style|<link/i,
        tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        nt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) { return e.replace(Ze, "<$1></$2>") },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                c = he.contains(e.ownerDocument, e);
            if (!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (s = y(a), o = y(e), i = 0, r = o.length; i < r; i++) _(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || y(e), s = s || y(a), i = 0, r = o.length; i < r; i++) A(o[i], s[i]);
                else A(e, a);
            return s = y(a, "script"), s.length > 0 && g(s, !c && y(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, r = he.event.special, o = 0;
                (n = e[o]) !== undefined; o++)
                if (Me(n)) {
                    if (t = n[De.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
                        n[De.expando] = undefined
                    }
                    n[je.expando] && (n[je.expando] = undefined)
                }
        }
    }), he.fn.extend({
        detach: function(e) { return L(this, e, !0) },
        remove: function(e) { return L(this, e) },
        text: function(e) { return Pe(this, function(e) { return e === undefined ? he.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return q(this, arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { k(this, e).appendChild(e) } }) },
        prepend: function() {
            return q(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return q(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return q(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return he.clone(this, e, t) }) },
        html: function(e) {
            return Pe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !et.test(e) && !Xe[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return q(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), he.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { he.fn[e] = function(e) { for (var n, i = [], r = he(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), he(r[s])[t](n), oe.apply(i, n.get()); return this.pushStack(i) } });
    var rt = /^margin/,
        ot = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
        st = function(t) { var n = t.ownerDocument.defaultView; return n && n.opener || (n = e), n.getComputedStyle(t) };
    ! function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ye.appendChild(s);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", r = "4px" === t.marginRight, Ye.removeChild(s), a = null
            }
        }
        var n, i, r, o, s = te.createElement("div"),
            a = te.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), he.extend(de, { pixelPosition: function() { return t(), n }, boxSizingReliable: function() { return t(), i }, pixelMarginRight: function() { return t(), r }, reliableMarginLeft: function() { return t(), o } }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/,
        ct = { position: "absolute", visibility: "hidden", display: "block" },
        lt = { letterSpacing: "0", fontWeight: "400" },
        ut = ["Webkit", "Moz", "ms"],
        pt = te.createElement("div").style;
    he.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = R(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": "cssFloat" },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = he.camelCase(t),
                    c = e.style;
                if (t = he.cssProps[a] || (he.cssProps[a] = M(a) || a), s = he.cssHooks[t] || he.cssHooks[a], n === undefined) return s && "get" in s && (r = s.get(e, !1, i)) !== undefined ? r : c[t];
                o = typeof n, "string" === o && (r = He.exec(n)) && r[1] && (n = h(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (he.cssNumber[a] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && (n = s.set(e, n, i)) === undefined || (c[t] = n))
            }
        },
        css: function(e, t, n, i) { var r, o, s, a = he.camelCase(t); return t = he.cssProps[a] || (he.cssProps[a] = M(a) || a), s = he.cssHooks[t] || he.cssHooks[a], s && "get" in s && (r = s.get(e, !0, n)), r === undefined && (r = R(e, t, i)), "normal" === r && t in lt && (r = lt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r }
    }), he.each(["height", "width"], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, n, i) { if (n) return !at.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : Oe(e, ct, function() { return F(e, t, i) }) },
            set: function(e, n, i) {
                var r, o = i && st(e),
                    s = i && j(e, t, i, "border-box" === he.css(e, "boxSizing", !1, o), o);
                return s && (r = He.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = he.css(e, t)), D(e, n, s)
            }
        }
    }), he.cssHooks.marginLeft = P(de.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(R(e, "marginLeft")) || e.getBoundingClientRect().left - Oe(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), he.each({ margin: "", padding: "", border: "Width" }, function(e, t) { he.cssHooks[e + t] = { expand: function(n) { for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ze[i] + t] = o[i] || o[i - 2] || o[0]; return r } }, rt.test(e) || (he.cssHooks[e + t].set = D) }), he.fn.extend({
        css: function(e, t) {
            return Pe(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (he.isArray(t)) { for (i = st(e), r = t.length; s < r; s++) o[t[s]] = he.css(e, t[s], !1, i); return o }
                return n !== undefined ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), he.Tween = N, N.prototype = { constructor: N, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (he.cssNumber[n] ? "" : "px") }, cur: function() { var e = N.propHooks[this.prop]; return e && e.get ? e.get(this) : N.propHooks._default.get(this) }, run: function(e) { var t, n = N.propHooks[this.prop]; return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this } }, N.prototype.init.prototype = N.prototype, N.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit) } } }, N.propHooks.scrollTop = N.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, he.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, he.fx = N.prototype.init, he.fx.step = {};
    var dt, ft, ht = /^(?:toggle|show|hide)$/,
        mt = /queueHooks$/;
    he.Animation = he.extend($, { tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return h(n.elem, e, He.exec(t), n), n }] }, tweener: function(e, t) { he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(qe); for (var n, i = 0, r = e.length; i < r; i++) n = e[i], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t) }, prefilters: [O], prefilter: function(e, t) { t ? $.prefilters.unshift(e) : $.prefilters.push(e) } }), he.speed = function(e, t, n) { var i = e && "object" == typeof e ? he.extend({}, e) : { complete: n || !n && t || he.isFunction(e) && e, duration: e, easing: n && t || t && !he.isFunction(t) && t }; return he.fx.off || te.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() { he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue) }, i }, he.fn.extend({
            fadeTo: function(e, t, n, i) { return this.filter(Be).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
            animate: function(e, t, n, i) {
                var r = he.isEmptyObject(e),
                    o = he.speed(t, n, i),
                    s = function() {
                        var t = $(this, he.extend({}, e), o);
                        (r || De.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = he.timers,
                        s = De.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && mt.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || he.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = De.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = he.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), he.each(["toggle", "show", "hide"], function(e, t) {
            var n = he.fn[t];
            he.fn[t] = function(e, i, r) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, r) }
        }), he.each({ slideDown: z("show"), slideUp: z("hide"), slideToggle: z("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { he.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), he.timers = [],
        he.fx.tick = function() {
            var e, t = 0,
                n = he.timers;
            for (dt = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || he.fx.stop(), dt = undefined
        }, he.fx.timer = function(e) { he.timers.push(e), e() ? he.fx.start() : he.timers.pop() }, he.fx.interval = 13, he.fx.start = function() { ft || (ft = e.requestAnimationFrame ? e.requestAnimationFrame(I) : e.setInterval(he.fx.tick, he.fx.interval)) }, he.fx.stop = function() { e.cancelAnimationFrame ? e.cancelAnimationFrame(ft) : e.clearInterval(ft), ft = null }, he.fx.speeds = { slow: 600, fast: 200, _default: 400 }, he.fn.delay = function(t, n) {
            return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() { e.clearTimeout(r) }
            })
        },
        function() {
            var e = te.createElement("input"),
                t = te.createElement("select"),
                n = t.appendChild(te.createElement("option"));
            e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", de.radioValue = "t" === e.value
        }();
    var vt, yt = he.expr.attrHandle;
    he.fn.extend({ attr: function(e, t) { return Pe(this, he.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { he.removeAttr(this, e) }) } }), he.extend({
        attr: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? vt : undefined)), n !== undefined ? null === n ? void he.removeAttr(e, t) : r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? undefined : i)) },
        attrHooks: { type: { set: function(e, t) { if (!de.radioValue && "radio" === t && he.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(qe);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), vt = { set: function(e, t, n) { return t === !1 ? he.removeAttr(e, n) : e.setAttribute(n, n), n } }, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = yt[t] || he.find.attr;
        yt[t] = function(e, t, i) { var r, o, s = t.toLowerCase(); return i || (o = yt[s], yt[s] = r, r = null != n(e, t, i) ? s : null, yt[s] = o), r }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
    he.fn.extend({ prop: function(e, t) { return Pe(this, he.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[he.propFix[e] || e] }) } }), he.extend({ prop: function(e, t, n) { var i, r, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, r = he.propHooks[t]), n !== undefined ? r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = he.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : gt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), de.optSelected || (he.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { he.propFix[this.toLowerCase()] = this }), he.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, c = 0;
            if (he.isFunction(e)) return this.each(function(t) { he(this).addClass(e.call(this, t, U(this))) });
            if ("string" == typeof e && e)
                for (t = e.match(qe) || []; n = this[c++];)
                    if (r = U(n), i = 1 === n.nodeType && " " + V(r) + " ") {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = V(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, c = 0;
            if (he.isFunction(e)) return this.each(function(t) { he(this).removeClass(e.call(this, t, U(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(qe) || []; n = this[c++];)
                    if (r = U(n), i = 1 === n.nodeType && " " + V(r) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = V(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) { he(this).toggleClass(e.call(this, n, U(this), t), t) }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = he(this), o = e.match(qe) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else e !== undefined && "boolean" !== n || (t = U(this), t && De.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : De.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + V(U(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    he.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = he.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, he(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : he.isArray(r) && (r = he.map(r, function(e) { return null == e ? "" : e + "" })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, r, "value") !== undefined || (this.value = r))
                });
                if (r) return (t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()]) && "get" in t && (n = t.get(r, "value")) !== undefined ? n : (n = r.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
            }
        }
    }), he.extend({
        valHooks: {
            option: { get: function(e) { var t = he.find.attr(e, "value"); return null != t ? t : V(he.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, i, r = e.options,
                        o = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        c = s ? o + 1 : r.length;
                    for (i = o < 0 ? c : s ? o : 0; i < c; i++)
                        if (n = r[i], (n.selected || i === o) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) { for (var n, i, r = e.options, o = he.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = he.inArray(he.valHooks.option.get(i), o) > -1) && (n = !0); return n || (e.selectedIndex = -1), o }
            }
        }
    }), he.each(["radio", "checkbox"], function() { he.valHooks[this] = { set: function(e, t) { if (he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1 } }, de.checkOn || (he.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
    var xt = /^(?:focusinfocus|focusoutblur)$/;
    he.extend(he.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, c, l, u, p, d = [i || te],
                f = le.call(t, "type") ? t.type : t,
                h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !xt.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), p = he.event.special[f] || {}, r || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                if (!r && !p.noBubble && !he.isWindow(i)) {
                    for (c = p.delegateType || f, xt.test(c + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), a = s;
                    a === (i.ownerDocument || te) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? c : p.bindType || f, u = (De.get(s, "events") || {})[t.type] && De.get(s, "handle"), u && u.apply(s, n), (u = l && s[l]) && u.apply && Me(s) && (t.result = u.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Me(i) || l && he.isFunction(i[f]) && !he.isWindow(i) && (a = i[l], a && (i[l] = null), he.event.triggered = f, i[f](), he.event.triggered = undefined, a && (i[l] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = he.extend(new he.Event, n, { type: e, isSimulated: !0 });
            he.event.trigger(i, null, t)
        }
    }), he.fn.extend({ trigger: function(e, t) { return this.each(function() { he.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return he.event.trigger(e, t, n, !0) } }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { he.fn[t] = function(e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), he.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), de.focusin = "onfocusin" in e, de.focusin || he.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        var n = function(e) { he.event.simulate(t, e.target, he.event.fix(e)) };
        he.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = De.access(i, t);
                r || i.addEventListener(e, n, !0), De.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = De.access(i, t) - 1;
                r ? De.access(i, t, r) : (i.removeEventListener(e, n, !0), De.remove(i, t))
            }
        }
    });
    var Ct = e.location,
        St = he.now(),
        kt = /\?/;
    he.parseXML = function(t) { var n; if (!t || "string" != typeof t) return null; try { n = (new e.DOMParser).parseFromString(t, "text/xml") } catch (e) { n = undefined } return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n };
    var Tt = /\[\]$/,
        Et = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        _t = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = he.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() { r(this.name, this.value) });
        else
            for (n in e) X(n, e[n], t, r);
        return i.join("&")
    }, he.fn.extend({ serialize: function() { return he.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = he.prop(this, "elements"); return e ? he.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !he(this).is(":disabled") && _t.test(this.nodeName) && !At.test(e) && (this.checked || !$e.test(e)) }).map(function(e, t) { var n = he(this).val(); return null == n ? null : he.isArray(n) ? he.map(n, function(e) { return { name: t.name, value: e.replace(Et, "\r\n") } }) : { name: t.name, value: n.replace(Et, "\r\n") } }).get() } });
    var qt = /%20/g,
        Lt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Dt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Ft = {},
        Nt = {},
        It = "*/".concat("*"),
        Ht = te.createElement("a");
    Ht.href = Ct.href, he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Ct.href, type: "GET", isLocal: Mt.test(Ct.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": It, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? K(K(e, he.ajaxSettings), t) : K(he.ajaxSettings, e) },
        ajaxPrefilter: J(Ft),
        ajaxTransport: J(Nt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var l, d, f, w, x, C = n;
                u || (u = !0, c && e.clearTimeout(c), r = undefined, s = a || "", S.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, i && (w = G(h, S, i)), w = Q(h, w, S, l), l ? (h.ifModified && (x = S.getResponseHeader("Last-Modified"), x && (he.lastModified[o] = x), (x = S.getResponseHeader("etag")) && (he.etag[o] = x)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = w.state, d = w.data, f = w.error, l = !f)) : (f = C, !t && C || (C = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (n || C) + "", l ? y.resolveWith(m, [d, C, S]) : y.rejectWith(m, [S, C, f]), S.statusCode(b), b = undefined, p && v.trigger(l ? "ajaxSuccess" : "ajaxError", [S, h, l ? d : f]), g.fireWith(m, [S, C]), p && (v.trigger("ajaxComplete", [S, h]), --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = undefined), n = n || {};
            var r, o, s, a, c, l, u, p, d, f, h = he.ajaxSetup({}, n),
                m = h.context || h,
                v = h.context && (m.nodeType || m.jquery) ? he(m) : he.event,
                y = he.Deferred(),
                g = he.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                x = {},
                C = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = Pt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() { return u ? s : null },
                    setRequestHeader: function(e, t) { return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this },
                    overrideMimeType: function(e) { return null == u && (h.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) S.always(e[S.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || C; return r && r.abort(t), i(0, t), this }
                };
            if (y.promise(S), h.url = ((t || h.url || Ct.href) + "").replace(jt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(qe) || [""], null == h.crossDomain) { l = te.createElement("a"); try { l.href = h.url, l.href = l.href, h.crossDomain = Ht.protocol + "//" + Ht.host != l.protocol + "//" + l.host } catch (e) { h.crossDomain = !0 } }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Y(Ft, h, n, S), u) return S;
            p = he.event && h.global, p && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Dt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (f = h.url.slice(o.length), h.data && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Rt, "$1"), f = (kt.test(o) ? "&" : "?") + "_=" + St++ + f), h.url = o + f), h.ifModified && (he.lastModified[o] && S.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && S.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + It + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) S.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(m, S, h) === !1 || u)) return S.abort();
            if (C = "abort", g.add(h.complete), S.done(h.success), S.fail(h.error), r = Y(Nt, h, n, S)) {
                if (S.readyState = 1, p && v.trigger("ajaxSend", [S, h]), u) return S;
                h.async && h.timeout > 0 && (c = e.setTimeout(function() { S.abort("timeout") }, h.timeout));
                try { u = !1, r.send(w, i) } catch (e) {
                    if (u) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return S
        },
        getJSON: function(e, t, n) { return he.get(e, t, n, "json") },
        getScript: function(e, t) { return he.get(e, undefined, t, "script") }
    }), he.each(["get", "post"], function(e, t) { he[t] = function(e, n, i, r) { return he.isFunction(n) && (r = r || i, i = n, n = undefined), he.ajax(he.extend({ url: e, type: t, dataType: r, data: n, success: i }, he.isPlainObject(e) && e)) } }), he._evalUrl = function(e) { return he.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, he.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstElementChild;) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(e) {
            return he.isFunction(e) ? this.each(function(t) { he(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                var t = he(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) { var t = he.isFunction(e); return this.each(function(n) { he(this).wrapAll(t ? e.call(this, n) : e) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { he(this).replaceWith(this.childNodes) }), this }
    }), he.expr.pseudos.hidden = function(e) { return !he.expr.pseudos.visible(e) }, he.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, he.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (e) {} };
    var zt = { 0: 200, 1223: 204 },
        Bt = he.ajaxSettings.xhr();
    de.cors = !!Bt && "withCredentials" in Bt, de.ajax = Bt = !!Bt, he.ajaxTransport(function(t) {
        var n, i;
        if (de.cors || Bt && !t.crossDomain) return {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(e) { return function() { n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(zt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders())) } }, a.onload = n(), i = a.onerror = n("error"), a.onabort !== undefined ? a.onabort = i : a.onreadystatechange = function() { 4 === a.readyState && e.setTimeout(function() { n && i() }) }, n = n("abort");
                try { a.send(t.hasContent && t.data || null) } catch (e) { if (n) throw e }
            },
            abort: function() { n && n() }
        }
    }), he.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), he.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return he.globalEval(e), e } } }), he.ajaxPrefilter("script", function(e) { e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET") }), he.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, n; return { send: function(i, r) { t = he("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(e) { t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type) }), te.head.appendChild(t[0]) }, abort: function() { n && n() } } } });
    var Ot = [],
        Wt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Ot.pop() || he.expando + "_" + St++; return this[e] = !0, e } }), he.ajaxPrefilter("json jsonp", function(t, n, i) { var r, o, s, a = t.jsonp !== !1 && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data"); if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Wt, "$1" + r) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return s || he.error(r + " was not called"), s[0] }, t.dataTypes[0] = "json", o = e[r], e[r] = function() { s = arguments }, i.always(function() { o === undefined ? he(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Ot.push(r)), s && he.isFunction(o) && o(s[0]), s = o = undefined }), "script" }), de.createHTMLDocument = function() { var e = te.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), he.parseHTML = function(e, t, n) { if ("string" != typeof e) return []; "boolean" == typeof t && (n = t, t = !1); var i, r, o; return t || (de.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Se.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = b([e], t, o), o && o.length && he(o).remove(), he.merge([], r.childNodes)) }, he.fn.load = function(e, t, n) {
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = V(e.slice(a)), e = e.slice(0, a)), he.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), s.length > 0 && he.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, s.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e) }).always(n && function(e, t) { s.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { he.fn[t] = function(e) { return this.on(t, e) } }), he.expr.pseudos.animated = function(e) { return he.grep(he.timers, function(t) { return e === t.elem }).length }, he.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, c, l, u = he.css(e, "position"),
                p = he(e),
                d = {};
            "static" === u && (e.style.position = "relative"), a = p.offset(), o = he.css(e, "top"), c = he.css(e, "left"), l = ("absolute" === u || "fixed" === u) && (o + c).indexOf("auto") > -1, l ? (i = p.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(c) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : p.css(d)
        }
    }, he.fn.extend({
        offset: function(e) { if (arguments.length) return e === undefined ? this : this.each(function(t) { he.offset.setOffset(this, e, t) }); var t, n, i, r, o = this[0]; if (o) return o.getClientRects().length ? (i = o.getBoundingClientRect(), i.width || i.height ? (r = o.ownerDocument, n = Z(r), t = r.documentElement, { top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft }) : i) : { top: 0, left: 0 } },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = { top: 0, left: 0 };
                return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (i = e.offset()), i = { top: i.top + he.css(e[0], "borderTopWidth", !0), left: i.left + he.css(e[0], "borderLeftWidth", !0) }), { top: t.top - i.top - he.css(n, "marginTop", !0), left: t.left - i.left - he.css(n, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { for (var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent; return e || Ye }) }
    }), he.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function(i) {
            return Pe(this, function(e, i, r) {
                var o = Z(e);
                if (r === undefined) return o ? o[t] : e[i];
                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
            }, e, i, arguments.length)
        }
    }), he.each(["top", "left"], function(e, t) { he.cssHooks[t] = P(de.pixelPosition, function(e, n) { if (n) return n = R(e, t), ot.test(n) ? he(e).position()[t] + "px" : n }) }), he.each({ Height: "height", Width: "width" }, function(e, t) {
        he.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(n, i) {
            he.fn[i] = function(r, o) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || o === !0 ? "margin" : "border");
                return Pe(this, function(t, n, r) { var o; return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : r === undefined ? he.css(t, n, a) : he.style(t, n, r, a) }, t, s ? r : undefined, s)
            }
        })
    }), he.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() { return he });
    var $t = e.jQuery,
        Vt = e.$;
    return he.noConflict = function(t) { return e.$ === he && (e.$ = Vt), t && e.jQuery === he && (e.jQuery = $t), he }, t || (e.jQuery = e.$ = he), he
}),
function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() { return e("meta[name=csrf-token]").attr("content") },
        csrfParam: function() { return e("meta[name=csrf-param]").attr("content") },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() { e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken()) },
        fire: function(t, n, i) { var r = e.Event(n); return t.trigger(r, i), r.result !== !1 },
        confirm: function(e) { return confirm(e) },
        ajax: function(t) { return e.ajax(t) },
        href: function(e) { return e[0].href },
        isRemote: function(e) { return e.data("remote") !== t && e.data("remote") !== !1 },
        handleRemote: function(i) {
            var r, o, s, a, c, l;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, c = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"), o = i.data("ujs:submit-button-formaction") || i.attr("action"), s = e(i[0]).serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (s.push(u), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                return l = {
                    type: r || "GET",
                    data: s,
                    dataType: c,
                    beforeSend: function(e, r) {
                        if (r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !n.fire(i, "ajax:beforeSend", [e, r])) return !1;
                        i.trigger("ajax:send", e)
                    },
                    success: function(e, t, n) { i.trigger("ajax:success", [e, t, n]) },
                    complete: function(e, t) { i.trigger("ajax:complete", [e, t]) },
                    error: function(e, t, n) { i.trigger("ajax:error", [e, t, n]) },
                    crossDomain: n.isCrossDomain(o)
                }, a && (l.xhrFields = { withCredentials: a }), o && (l.url = o), n.ajax(l)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try { return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host) } catch (e) { return !0 }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                s = i.attr("target"),
                a = n.csrfToken(),
                c = n.csrfParam(),
                l = e('<form method="post" action="' + r + '"></form>'),
                u = '<input name="_method" value="' + o + '" type="hidden" />';
            c === t || a === t || n.isCrossDomain(r) || (u += '<input name="' + c + '" value="' + a + '" type="hidden" />'), s && l.attr("target", s), l.hide().append(u).appendTo("body"), l.submit()
        },
        formElements: function(t, n) { return t.is("form") ? e(t[0].elements).filter(n) : t.find(n) },
        disableFormElements: function(t) { n.formElements(t, n.disableSelector).each(function() { n.disableFormElement(e(this)) }) },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) { n.formElements(t, n.enableSelector).each(function() { n.enableFormElement(e(this)) }) },
        enableFormElement: function(e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
                r = !1;
            if (!i) return !0;
            if (n.fire(e, "confirm")) {
                try { r = n.confirm(i) } catch (e) {
                    (console.error || console.log).call(console, e.stack || e)
                }
                t = n.fire(e, "confirm:complete", [r])
            }
            return r && t
        },
        blankInputs: function(t, n, i) {
            var r, o, s, a, c = e(),
                l = n || "input,textarea",
                u = t.find(l),
                p = {};
            return u.each(function() { r = e(this), r.is("input[type=radio]") ? (a = r.attr("name"), p[a] || (0 === t.find('input[type=radio]:checked[name="' + a + '"]').length && (s = t.find('input[type=radio][name="' + a + '"]'), c = c.add(s)), p[a] = a)) : (o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (c = c.add(r)) }), !!c.length && c
        },
        nonBlankInputs: function(e, t) { return n.blankInputs(e, t, !0) },
        stopEverything: function(t) { return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1 },
        disableElement: function(e) {
            var i = e.data("disable-with");
            i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) { return n.stopEverything(e) }), e.data("ujs:disabled", !0)
        },
        enableElement: function(e) { e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled") }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) { e.crossDomain || n.CSRFProtection(i) }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), i.on("ajax:complete", n.linkDisableSelector, function() { n.enableElement(e(this)) }), i.on("ajax:complete", n.buttonDisableSelector, function() { n.enableFormElement(e(this)) }), i.on("click.rails", n.linkClickSelector, function(t) {
        var i = e(this),
            r = i.data("method"),
            o = i.data("params"),
            s = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(t);
        if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) { if (s && (!r || "GET" === r) && !o) return !0; var a = n.handleRemote(i); return a === !1 ? n.enableElement(i) : a.fail(function() { n.enableElement(i) }), !1 }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector, function(t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.fail(function() { n.enableFormElement(i) }), !1
    }), i.on("change.rails", n.inputChangeSelector, function(t) { var i = e(this); return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t) }), i.on("submit.rails", n.formSubmitSelector, function(i) {
        var r, o, s = e(this),
            a = n.isRemote(s);
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (s.attr("novalidate") === t)
            if (s.data("ujs:formnovalidate-button") === t) { if ((r = n.blankInputs(s, n.requiredInputSelector, !1)) && n.fire(s, "ajax:aborted:required", [r])) return n.stopEverything(i) } else s.data("ujs:formnovalidate-button", t);
        if (a) { if (o = n.nonBlankInputs(s, n.fileInputSelector)) { setTimeout(function() { n.disableFormElements(s) }, 13); var c = n.fire(s, "ajax:aborted:file", [o]); return c || setTimeout(function() { n.enableFormElements(s) }, 13), c } return n.handleRemote(s), !1 }
        setTimeout(function() { n.disableFormElements(s) }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var r = i.attr("name"),
            o = r ? { name: r, value: i.val() } : null,
            s = i.closest("form");
        0 === s.length && (s = e("#" + i.attr("form"))), s.data("ujs:submit-button", o), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector, function(t) { this === t.target && n.disableFormElements(e(this)) }), i.on("ajax:complete.rails", n.formSubmitSelector, function(t) { this === t.target && n.enableFormElements(e(this)) }), e(function() { n.refreshCSRFTokens() }))
}(jQuery),
function() {
    (function() {
        (function() { this.Turbolinks = { supported: function() { return null != window.history.pushState && null != window.requestAnimationFrame }(), visit: function(t, n) { return e.controller.visit(t, n) }, clearCache: function() { return e.controller.clearCache() } } }).call(this)
    }).call(this);
    var e = this.Turbolinks;
    (function() {
        (function() {
            var t, n;
            e.copyObject = function(e) {
                var t, n, i;
                n = {};
                for (t in e) i = e[t], n[t] = i;
                return n
            }, e.closest = function(e, n) { return t.call(e, n) }, t = function() {
                var e, t;
                return e = document.documentElement, null != (t = e.closest) ? t : function(e) {
                    var t;
                    for (t = this; t;) {
                        if (t.nodeType === Node.ELEMENT_NODE && n.call(t, e)) return t;
                        t = t.parentNode
                    }
                }
            }(), e.defer = function(e) { return setTimeout(e, 1) }, e.dispatch = function(e, t) { var n, i, r, o, s; return o = null != t ? t : {}, s = o.target, n = o.cancelable, i = o.data, r = document.createEvent("Events"), r.initEvent(e, !0, n === !0), r.data = null != i ? i : {}, (null != s ? s : document).dispatchEvent(r), r }, e.match = function(e, t) { return n.call(e, t) }, n = function() { var e, t, n, i; return e = document.documentElement, null != (t = null != (n = null != (i = e.matchesSelector) ? i : e.webkitMatchesSelector) ? n : e.msMatchesSelector) ? t : e.mozMatchesSelector }(), e.uuid = function() { var e, t, n; for (n = "", e = t = 1; 36 >= t; e = ++t) n += 9 === e || 14 === e || 19 === e || 24 === e ? "-" : 15 === e ? "4" : 20 === e ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16); return n }
        }).call(this),
            function() {
                e.Location = function() {
                    function e(e) {
                        var t, n;
                        null == e && (e = ""), n = document.createElement("a"), n.href = e.toString(), this.absoluteURL = n.href, t = n.hash.length, 2 > t ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -t), this.anchor = n.hash.slice(1))
                    }
                    var t, n, i, r;
                    return e.wrap = function(e) { return e instanceof this ? e : new this(e) }, e.prototype.getOrigin = function() { return this.absoluteURL.split("/", 3).join("/") }, e.prototype.getPath = function() {
                        var e, t;
                        return null != (e = null != (t = this.absoluteURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? t[1] : void 0) ? e : "/"
                    }, e.prototype.getPathComponents = function() { return this.getPath().split("/").slice(1) }, e.prototype.getLastPathComponent = function() { return this.getPathComponents().slice(-1)[0] }, e.prototype.getExtension = function() { var e, t; return null != (e = null != (t = this.getLastPathComponent().match(/\.[^.]*$/)) ? t[0] : void 0) ? e : "" }, e.prototype.isHTML = function() { return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/) }, e.prototype.isPrefixedBy = function(e) { var t; return t = n(e), this.isEqualTo(e) || r(this.absoluteURL, t) }, e.prototype.isEqualTo = function(e) { return this.absoluteURL === (null != e ? e.absoluteURL : void 0) }, e.prototype.toCacheKey = function() { return this.requestURL }, e.prototype.toJSON = function() { return this.absoluteURL }, e.prototype.toString = function() { return this.absoluteURL }, e.prototype.valueOf = function() { return this.absoluteURL }, n = function(e) { return t(e.getOrigin() + e.getPath()) }, t = function(e) { return i(e, "/") ? e : e + "/" }, r = function(e, t) { return e.slice(0, t.length) === t }, i = function(e, t) { return e.slice(-t.length) === t }, e
                }()
            }.call(this),
            function() {
                var t = function(e, t) { return function() { return e.apply(t, arguments) } };
                e.HttpRequest = function() {
                    function n(n, i, r) { this.delegate = n, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = e.Location.wrap(i).requestURL, this.referrer = e.Location.wrap(r).absoluteURL, this.createXHR() }
                    return n.NETWORK_FAILURE = 0, n.TIMEOUT_FAILURE = -1, n.timeout = 60, n.prototype.send = function() { var e; return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(e = this.delegate).requestStarted ? e.requestStarted() : void 0) : void 0 }, n.prototype.cancel = function() { return this.xhr && this.sent ? this.xhr.abort() : void 0 }, n.prototype.requestProgressed = function(e) { return e.lengthComputable ? this.setProgress(e.loaded / e.total) : void 0 }, n.prototype.requestLoaded = function() { return this.endRequest(function(e) { return function() { var t; return 200 <= (t = e.xhr.status) && 300 > t ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0, e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText)) } }(this)) }, n.prototype.requestFailed = function() { return this.endRequest(function(e) { return function() { return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.NETWORK_FAILURE) } }(this)) }, n.prototype.requestTimedOut = function() { return this.endRequest(function(e) { return function() { return e.failed = !0, e.delegate.requestFailedWithStatusCode(e.constructor.TIMEOUT_FAILURE) } }(this)) }, n.prototype.requestCanceled = function() { return this.endRequest() }, n.prototype.notifyApplicationBeforeRequestStart = function() { return e.dispatch("turbolinks:request-start", { data: { url: this.url, xhr: this.xhr } }) }, n.prototype.notifyApplicationAfterRequestEnd = function() { return e.dispatch("turbolinks:request-end", { data: { url: this.url, xhr: this.xhr } }) }, n.prototype.createXHR = function() { return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled }, n.prototype.endRequest = function(e) { return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != e && e.call(this), this.destroy()) : void 0 }, n.prototype.setProgress = function(e) { var t; return this.progress = e, "function" == typeof(t = this.delegate).requestProgressed ? t.requestProgressed(this.progress) : void 0 }, n.prototype.destroy = function() { var e; return this.setProgress(1), "function" == typeof(e = this.delegate).requestFinished && e.requestFinished(), this.delegate = null, this.xhr = null }, n
                }()
            }.call(this),
            function() {
                var t = function(e, t) { return function() { return e.apply(t, arguments) } };
                e.ProgressBar = function() {
                    function e() { this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement() }
                    var n;
                    return n = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function() { return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling()) }, e.prototype.hide = function() { return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement(function(e) { return function() { return e.uninstallProgressElement(), e.stopTrickling(), e.visible = !1, e.hiding = !1 } }(this))) : void 0 }, e.prototype.setValue = function(e) { return this.value = e, this.refresh() }, e.prototype.installStylesheetElement = function() { return document.head.insertBefore(this.stylesheetElement, document.head.firstChild) }, e.prototype.installProgressElement = function() { return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh() }, e.prototype.fadeProgressElement = function(e) { return this.progressElement.style.opacity = 0, setTimeout(e, 1.5 * n) }, e.prototype.uninstallProgressElement = function() { return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0 }, e.prototype.startTrickling = function() { return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n) }, e.prototype.stopTrickling = function() { return clearInterval(this.trickleInterval), this.trickleInterval = null }, e.prototype.trickle = function() { return this.setValue(this.value + Math.random() / 100) }, e.prototype.refresh = function() { return requestAnimationFrame(function(e) { return function() { return e.progressElement.style.width = 10 + 90 * e.value + "%" } }(this)) }, e.prototype.createStylesheetElement = function() { var e; return e = document.createElement("style"), e.type = "text/css", e.textContent = this.constructor.defaultCSS, e }, e.prototype.createProgressElement = function() { var e; return e = document.createElement("div"), e.className = "turbolinks-progress-bar", e }, e
                }()
            }.call(this),
            function() {
                var t = function(e, t) { return function() { return e.apply(t, arguments) } };
                e.BrowserAdapter = function() {
                    function n(n) { this.controller = n, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new e.ProgressBar }
                    var i, r, o, s;
                    return s = e.HttpRequest, i = s.NETWORK_FAILURE, o = s.TIMEOUT_FAILURE, r = 500, n.prototype.visitProposedToLocationWithAction = function(e, t) { return this.controller.startVisitToLocationWithAction(e, t) }, n.prototype.visitStarted = function(e) { return e.issueRequest(), e.changeHistory(), e.loadCachedSnapshot() }, n.prototype.visitRequestStarted = function(e) { return this.progressBar.setValue(0), e.hasCachedSnapshot() || "restore" !== e.action ? this.showProgressBarAfterDelay() : this.showProgressBar() }, n.prototype.visitRequestProgressed = function(e) { return this.progressBar.setValue(e.progress) }, n.prototype.visitRequestCompleted = function(e) { return e.loadResponse() }, n.prototype.visitRequestFailedWithStatusCode = function(e, t) {
                        switch (t) {
                            case i:
                            case o:
                                return this.reload();
                            default:
                                return e.loadResponse()
                        }
                    }, n.prototype.visitRequestFinished = function() { return this.hideProgressBar() }, n.prototype.visitCompleted = function(e) { return e.followRedirect() }, n.prototype.pageInvalidated = function() { return this.reload() }, n.prototype.showProgressBarAfterDelay = function() { return this.progressBarTimeout = setTimeout(this.showProgressBar, r) }, n.prototype.showProgressBar = function() { return this.progressBar.show() }, n.prototype.hideProgressBar = function() { return this.progressBar.hide(), clearTimeout(this.progressBarTimeout) }, n.prototype.reload = function() { return window.location.reload() }, n
                }()
            }.call(this),
            function() {
                var t, n = function(e, t) { return function() { return e.apply(t, arguments) } };
                t = !1, addEventListener("load", function() { return e.defer(function() { return t = !0 }) }, !1), e.History = function() {
                    function i(e) { this.delegate = e, this.onPopState = n(this.onPopState, this) }
                    return i.prototype.start = function() { return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), this.started = !0) }, i.prototype.stop = function() { return this.started ? (removeEventListener("popstate", this.onPopState, !1), this.started = !1) : void 0 }, i.prototype.push = function(t, n) { return t = e.Location.wrap(t), this.update("push", t, n) }, i.prototype.replace = function(t, n) { return t = e.Location.wrap(t), this.update("replace", t, n) }, i.prototype.onPopState = function(t) { var n, i, r, o; return this.shouldHandlePopState() && (o = null != (i = t.state) ? i.turbolinks : void 0) ? (n = e.Location.wrap(window.location), r = o.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(n, r)) : void 0 }, i.prototype.shouldHandlePopState = function() { return t === !0 }, i.prototype.update = function(e, t, n) { var i; return i = { turbolinks: { restorationIdentifier: n } }, history[e + "State"](i, null, t) }, i
                }()
            }.call(this),
            function() {
                e.Snapshot = function() {
                    function t(e) {
                        var t, n;
                        n = e.head, t = e.body, this.head = null != n ? n : document.createElement("head"), this.body = null != t ? t : document.createElement("body")
                    }
                    return t.wrap = function(e) { return e instanceof this ? e : this.fromHTML(e) }, t.fromHTML = function(e) { var t; return t = document.createElement("html"), t.innerHTML = e, this.fromElement(t) }, t.fromElement = function(e) { return new this({ head: e.querySelector("head"), body: e.querySelector("body") }) }, t.prototype.clone = function() { return new t({ head: this.head.cloneNode(!0), body: this.body.cloneNode(!0) }) }, t.prototype.getRootLocation = function() { var t, n; return n = null != (t = this.getSetting("root")) ? t : "/", new e.Location(n) }, t.prototype.getCacheControlValue = function() { return this.getSetting("cache-control") }, t.prototype.hasAnchor = function(e) { try { return null != this.body.querySelector("[id='" + e + "']") } catch (e) {} }, t.prototype.isPreviewable = function() { return "no-preview" !== this.getCacheControlValue() }, t.prototype.isCacheable = function() { return "no-cache" !== this.getCacheControlValue() }, t.prototype.getSetting = function(e) { var t, n; return n = this.head.querySelectorAll("meta[name='turbolinks-" + e + "']"), t = n[n.length - 1], null != t ? t.getAttribute("content") : void 0 }, t
                }()
            }.call(this),
            function() {
                var t = [].slice;
                e.Renderer = function() {
                    function e() {}
                    var n;
                    return e.render = function() {
                        var e, n, i, r;
                        return i = arguments[0], n = arguments[1], e = 3 <= arguments.length ? t.call(arguments, 2) : [], r = function(e, t, n) {
                            n.prototype = e.prototype;
                            var i = new n,
                                r = e.apply(i, t);
                            return Object(r) === r ? r : i
                        }(this, e, function() {}), r.delegate = i, r.render(n), r
                    }, e.prototype.renderView = function(e) { return this.delegate.viewWillRender(this.newBody), e(), this.delegate.viewRendered(this.newBody) }, e.prototype.invalidateView = function() { return this.delegate.viewInvalidated() }, e.prototype.createScriptElement = function(e) { var t; return "false" === e.getAttribute("data-turbolinks-eval") ? e : (t = document.createElement("script"), t.textContent = e.textContent, n(t, e), t) }, n = function(e, t) { var n, i, r, o, s, a, c; for (o = t.attributes, a = [], n = 0, i = o.length; i > n; n++) s = o[n], r = s.name, c = s.value, a.push(e.setAttribute(r, c)); return a }, e
                }()
            }.call(this),
            function() {
                e.HeadDetails = function() {
                    function e(e) { var t, n, o, s, a, c, l; for (this.element = e, this.elements = {}, l = this.element.childNodes, s = 0, c = l.length; c > s; s++) o = l[s], o.nodeType === Node.ELEMENT_NODE && (a = o.outerHTML, n = null != (t = this.elements)[a] ? t[a] : t[a] = { type: r(o), tracked: i(o), elements: [] }, n.elements.push(o)) }
                    var t, n, i, r;
                    return e.prototype.hasElementWithKey = function(e) { return e in this.elements }, e.prototype.getTrackedElementSignature = function() {
                        var e, t;
                        return function() {
                            var n, i;
                            n = this.elements, i = [];
                            for (e in n)(t = n[e].tracked) && i.push(e);
                            return i
                        }.call(this).join("")
                    }, e.prototype.getScriptElementsNotInDetails = function(e) { return this.getElementsMatchingTypeNotInDetails("script", e) }, e.prototype.getStylesheetElementsNotInDetails = function(e) { return this.getElementsMatchingTypeNotInDetails("stylesheet", e) }, e.prototype.getElementsMatchingTypeNotInDetails = function(e, t) {
                        var n, i, r, o, s, a;
                        r = this.elements, s = [];
                        for (i in r) o = r[i], a = o.type, n = o.elements, a !== e || t.hasElementWithKey(i) || s.push(n[0]);
                        return s
                    }, e.prototype.getProvisionalElements = function() {
                        var e, t, n, i, r, o, s;
                        n = [], i = this.elements;
                        for (t in i) r = i[t], s = r.type, o = r.tracked, e = r.elements, null != s || o ? e.length > 1 && n.push.apply(n, e.slice(1)) : n.push.apply(n, e);
                        return n
                    }, r = function(e) { return t(e) ? "script" : n(e) ? "stylesheet" : void 0 }, i = function(e) { return "reload" === e.getAttribute("data-turbolinks-track") }, t = function(e) { return "script" === e.tagName.toLowerCase() }, n = function(e) { var t; return "style" === (t = e.tagName.toLowerCase()) || "link" === t && "stylesheet" === e.getAttribute("rel") }, e
                }()
            }.call(this),
            function() {
                var t = function(e, t) {
                        function i() { this.constructor = e }
                        for (var r in t) n.call(t, r) && (e[r] = t[r]);
                        return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                    },
                    n = {}.hasOwnProperty;
                e.SnapshotRenderer = function(n) {
                    function i(t, n) { this.currentSnapshot = t, this.newSnapshot = n, this.currentHeadDetails = new e.HeadDetails(this.currentSnapshot.head), this.newHeadDetails = new e.HeadDetails(this.newSnapshot.head), this.newBody = this.newSnapshot.body }
                    return t(i, n), i.prototype.render = function(e) { return this.trackedElementsAreIdentical() ? (this.mergeHead(), this.renderView(function(t) { return function() { return t.replaceBody(), t.focusFirstAutofocusableElement(), e() } }(this))) : this.invalidateView() }, i.prototype.mergeHead = function() { return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements() }, i.prototype.replaceBody = function() { return this.activateBodyScriptElements(), this.importBodyPermanentElements(), this.assignNewBody() }, i.prototype.trackedElementsAreIdentical = function() { return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature() }, i.prototype.copyNewHeadStylesheetElements = function() { var e, t, n, i, r; for (i = this.getNewHeadStylesheetElements(), r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(document.head.appendChild(e)); return r }, i.prototype.copyNewHeadScriptElements = function() { var e, t, n, i, r; for (i = this.getNewHeadScriptElements(), r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(document.head.appendChild(this.createScriptElement(e))); return r }, i.prototype.removeCurrentHeadProvisionalElements = function() { var e, t, n, i, r; for (i = this.getCurrentHeadProvisionalElements(), r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(document.head.removeChild(e)); return r }, i.prototype.copyNewHeadProvisionalElements = function() { var e, t, n, i, r; for (i = this.getNewHeadProvisionalElements(), r = [], t = 0, n = i.length; n > t; t++) e = i[t], r.push(document.head.appendChild(e)); return r }, i.prototype.importBodyPermanentElements = function() { var e, t, n, i, r, o; for (i = this.getNewBodyPermanentElements(), o = [], t = 0, n = i.length; n > t; t++) r = i[t], (e = this.findCurrentBodyPermanentElement(r)) ? o.push(r.parentNode.replaceChild(e, r)) : o.push(void 0); return o }, i.prototype.activateBodyScriptElements = function() { var e, t, n, i, r, o; for (i = this.getNewBodyScriptElements(), o = [], t = 0, n = i.length; n > t; t++) r = i[t], e = this.createScriptElement(r), o.push(r.parentNode.replaceChild(e, r)); return o }, i.prototype.assignNewBody = function() { return document.body = this.newBody }, i.prototype.focusFirstAutofocusableElement = function() { var e; return null != (e = this.findFirstAutofocusableElement()) ? e.focus() : void 0 }, i.prototype.getNewHeadStylesheetElements = function() { return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails) }, i.prototype.getNewHeadScriptElements = function() { return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails) }, i.prototype.getCurrentHeadProvisionalElements = function() { return this.currentHeadDetails.getProvisionalElements() }, i.prototype.getNewHeadProvisionalElements = function() { return this.newHeadDetails.getProvisionalElements() }, i.prototype.getNewBodyPermanentElements = function() { return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]") }, i.prototype.findCurrentBodyPermanentElement = function(e) { return document.body.querySelector("#" + e.id + "[data-turbolinks-permanent]") }, i.prototype.getNewBodyScriptElements = function() { return this.newBody.querySelectorAll("script") }, i.prototype.findFirstAutofocusableElement = function() { return document.body.querySelector("[autofocus]") }, i
                }(e.Renderer)
            }.call(this),
            function() {
                var t = function(e, t) {
                        function i() { this.constructor = e }
                        for (var r in t) n.call(t, r) && (e[r] = t[r]);
                        return i.prototype = t.prototype, e.prototype = new i, e.__super__ = t.prototype, e
                    },
                    n = {}.hasOwnProperty;
                e.ErrorRenderer = function(e) {
                    function n(e) { this.html = e }
                    return t(n, e), n.prototype.render = function(e) { return this.renderView(function(t) { return function() { return t.replaceDocumentHTML(), t.activateBodyScriptElements(), e() } }(this)) }, n.prototype.replaceDocumentHTML = function() { return document.documentElement.innerHTML = this.html }, n.prototype.activateBodyScriptElements = function() { var e, t, n, i, r, o; for (i = this.getScriptElements(), o = [], t = 0, n = i.length; n > t; t++) r = i[t], e = this.createScriptElement(r), o.push(r.parentNode.replaceChild(e, r)); return o }, n.prototype.getScriptElements = function() { return document.documentElement.querySelectorAll("script") }, n
                }(e.Renderer)
            }.call(this),
            function() {
                e.View = function() {
                    function t(e) { this.delegate = e, this.element = document.documentElement }
                    return t.prototype.getRootLocation = function() { return this.getSnapshot().getRootLocation() }, t.prototype.getSnapshot = function() { return e.Snapshot.fromElement(this.element) }, t.prototype.render = function(e, t) { var n, i, r; return r = e.snapshot, n = e.error, i = e.isPreview, this.markAsPreview(i), null != r ? this.renderSnapshot(r, t) : this.renderError(n, t) }, t.prototype.markAsPreview = function(e) { return e ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview") }, t.prototype.renderSnapshot = function(t, n) { return e.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), e.Snapshot.wrap(t)) }, t.prototype.renderError = function(t, n) { return e.ErrorRenderer.render(this.delegate, n, t) }, t
                }()
            }.call(this),
            function() {
                var t = function(e, t) { return function() { return e.apply(t, arguments) } };
                e.ScrollManager = function() {
                    function e(e) { this.delegate = e, this.onScroll = t(this.onScroll, this) }
                    return e.prototype.start = function() { return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0) }, e.prototype.stop = function() { return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0 }, e.prototype.scrollToElement = function(e) { return e.scrollIntoView() }, e.prototype.scrollToPosition = function(e) { var t, n; return t = e.x, n = e.y, window.scrollTo(t, n) }, e.prototype.onScroll = function() { return this.updatePosition({ x: window.pageXOffset, y: window.pageYOffset }) }, e.prototype.updatePosition = function(e) { var t; return this.position = e, null != (t = this.delegate) ? t.scrollPositionChanged(this.position) : void 0 }, e
                }()
            }.call(this),
            function() {
                e.SnapshotCache = function() {
                    function t(e) { this.size = e, this.keys = [], this.snapshots = {} }
                    var n;
                    return t.prototype.has = function(e) { return n(e) in this.snapshots }, t.prototype.get = function(e) { var t; if (this.has(e)) return t = this.read(e), this.touch(e), t }, t.prototype.put = function(e, t) { return this.write(e, t), this.touch(e), t }, t.prototype.read = function(e) { var t; return t = n(e), this.snapshots[t] }, t.prototype.write = function(e, t) { var i; return i = n(e), this.snapshots[i] = t }, t.prototype.touch = function(e) { var t, i; return i = n(e), t = this.keys.indexOf(i), t > -1 && this.keys.splice(t, 1), this.keys.unshift(i), this.trim() }, t.prototype.trim = function() { var e, t, n, i, r; for (i = this.keys.splice(this.size), r = [], e = 0, n = i.length; n > e; e++) t = i[e], r.push(delete this.snapshots[t]); return r }, n = function(t) { return e.Location.wrap(t).toCacheKey() }, t
                }()
            }.call(this),
            function() {
                var t = function(e, t) { return function() { return e.apply(t, arguments) } };
                e.Visit = function() {
                    function n(n, i, r) { this.controller = n, this.action = r, this.performScroll = t(this.performScroll, this), this.identifier = e.uuid(), this.location = e.Location.wrap(i), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {} }
                    var i;
                    return n.prototype.start = function() { return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0 }, n.prototype.cancel = function() { var e; return "started" === this.state ? (null != (e = this.request) && e.cancel(), this.cancelRender(), this.state = "canceled") : void 0 }, n.prototype.complete = function() { var e; return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(e = this.adapter).visitCompleted && e.visitCompleted(this), this.controller.visitCompleted(this)) : void 0 }, n.prototype.fail = function() { var e; return "started" === this.state ? (this.state = "failed", "function" == typeof(e = this.adapter).visitFailed ? e.visitFailed(this) : void 0) : void 0 }, n.prototype.changeHistory = function() { var e, t; return this.historyChanged ? void 0 : (e = this.location.isEqualTo(this.referrer) ? "replace" : this.action, t = i(e), this.controller[t](this.location, this.restorationIdentifier), this.historyChanged = !0) }, n.prototype.issueRequest = function() { return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new e.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0 }, n.prototype.getCachedSnapshot = function() { var e; return !(e = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !e.hasAnchor(this.location.anchor) || "restore" !== this.action && !e.isPreviewable() ? void 0 : e }, n.prototype.hasCachedSnapshot = function() { return null != this.getCachedSnapshot() }, n.prototype.loadCachedSnapshot = function() { var e, t; return (t = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(), this.render(function() { var n; return this.cacheSnapshot(), this.controller.render({ snapshot: t, isPreview: e }, this.performScroll), "function" == typeof(n = this.adapter).visitRendered && n.visitRendered(this), e ? void 0 : this.complete() })) : void 0 }, n.prototype.loadResponse = function() { return null != this.response ? this.render(function() { var e, t; return this.cacheSnapshot(), this.request.failed ? (this.controller.render({ error: this.response }, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.fail()) : (this.controller.render({ snapshot: this.response }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.complete()) }) : void 0 }, n.prototype.followRedirect = function() { return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0 }, n.prototype.requestStarted = function() { var e; return this.recordTimingMetric("requestStart"), "function" == typeof(e = this.adapter).visitRequestStarted ? e.visitRequestStarted(this) : void 0 }, n.prototype.requestProgressed = function(e) { var t; return this.progress = e, "function" == typeof(t = this.adapter).visitRequestProgressed ? t.visitRequestProgressed(this) : void 0 }, n.prototype.requestCompletedWithResponse = function(t, n) { return this.response = t, null != n && (this.redirectedToLocation = e.Location.wrap(n)), this.adapter.visitRequestCompleted(this) }, n.prototype.requestFailedWithStatusCode = function(e, t) { return this.response = t, this.adapter.visitRequestFailedWithStatusCode(this, e) }, n.prototype.requestFinished = function() { var e; return this.recordTimingMetric("requestEnd"), "function" == typeof(e = this.adapter).visitRequestFinished ? e.visitRequestFinished(this) : void 0 }, n.prototype.performScroll = function() { return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0) }, n.prototype.scrollToRestoredPosition = function() { var e, t; return e = null != (t = this.restorationData) ? t.scrollPosition : void 0, null != e ? (this.controller.scrollToPosition(e), !0) : void 0 }, n.prototype.scrollToAnchor = function() { return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0 }, n.prototype.scrollToTop = function() { return this.controller.scrollToPosition({ x: 0, y: 0 }) }, n.prototype.recordTimingMetric = function(e) { var t; return null != (t = this.timingMetrics)[e] ? t[e] : t[e] = (new Date).getTime() }, n.prototype.getTimingMetrics = function() { return e.copyObject(this.timingMetrics) }, i = function(e) {
                        switch (e) {
                            case "replace":
                                return "replaceHistoryWithLocationAndRestorationIdentifier";
                            case "advance":
                            case "restore":
                                return "pushHistoryWithLocationAndRestorationIdentifier"
                        }
                    }, n.prototype.shouldIssueRequest = function() { return "restore" !== this.action || !this.hasCachedSnapshot() }, n.prototype.cacheSnapshot = function() { return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0) }, n.prototype.render = function(e) { return this.cancelRender(), this.frame = requestAnimationFrame(function(t) { return function() { return t.frame = null, e.call(t) } }(this)) }, n.prototype.cancelRender = function() { return this.frame ? cancelAnimationFrame(this.frame) : void 0 }, n
                }()
            }.call(this),
            function() {
                var t = function(e, t) { return function() { return e.apply(t, arguments) } };
                e.Controller = function() {
                    function n() { this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new e.History(this), this.view = new e.View(this), this.scrollManager = new e.ScrollManager(this), this.restorationData = {}, this.clearCache() }
                    return n.prototype.start = function() { return e.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0 }, n.prototype.disable = function() { return this.enabled = !1 }, n.prototype.stop = function() { return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0 }, n.prototype.clearCache = function() { return this.cache = new e.SnapshotCache(10) }, n.prototype.visit = function(t, n) { var i, r; return null == n && (n = {}), t = e.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (i = null != (r = n.action) ? r : "advance", this.adapter.visitProposedToLocationWithAction(t, i)) : window.location = t : void 0 }, n.prototype.startVisitToLocationWithAction = function(t, n, i) { var r; return e.supported ? (r = this.getRestorationDataForIdentifier(i), this.startVisit(t, n, { restorationData: r })) : window.location = t }, n.prototype.startHistory = function() { return this.location = e.Location.wrap(window.location), this.restorationIdentifier = e.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier) }, n.prototype.stopHistory = function() { return this.history.stop() }, n.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(t, n) { return this.restorationIdentifier = n, this.location = e.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier) }, n.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(t, n) { return this.restorationIdentifier = n, this.location = e.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier) }, n.prototype.historyPoppedToLocationWithRestorationIdentifier = function(t, n) { var i; return this.restorationIdentifier = n, this.enabled ? (i = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", { restorationIdentifier: this.restorationIdentifier, restorationData: i, historyChanged: !0 }), this.location = e.Location.wrap(t)) : this.adapter.pageInvalidated() }, n.prototype.getCachedSnapshotForLocation = function(e) { var t; return t = this.cache.get(e), t ? t.clone() : void 0 }, n.prototype.shouldCacheSnapshot = function() { return this.view.getSnapshot().isCacheable() }, n.prototype.cacheSnapshot = function() { var e; return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), e = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, e.clone())) : void 0 }, n.prototype.scrollToAnchor = function(e) { var t; return (t = document.getElementById(e)) ? this.scrollToElement(t) : this.scrollToPosition({ x: 0, y: 0 }) }, n.prototype.scrollToElement = function(e) { return this.scrollManager.scrollToElement(e) }, n.prototype.scrollToPosition = function(e) { return this.scrollManager.scrollToPosition(e) }, n.prototype.scrollPositionChanged = function(e) { var t; return t = this.getCurrentRestorationData(), t.scrollPosition = e }, n.prototype.render = function(e, t) { return this.view.render(e, t) }, n.prototype.viewInvalidated = function() { return this.adapter.pageInvalidated() }, n.prototype.viewWillRender = function(e) { return this.notifyApplicationBeforeRender(e) }, n.prototype.viewRendered = function() { return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender() }, n.prototype.pageLoaded = function() { return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad() }, n.prototype.clickCaptured = function() { return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1) }, n.prototype.clickBubbled = function(e) { var t, n, i; return this.enabled && this.clickEventIsSignificant(e) && (n = this.getVisitableLinkForNode(e.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (e.preventDefault(), t = this.getActionForLink(n), this.visit(i, { action: t })) : void 0 }, n.prototype.applicationAllowsFollowingLinkToLocation = function(e, t) { var n; return n = this.notifyApplicationAfterClickingLinkToLocation(e, t), !n.defaultPrevented }, n.prototype.applicationAllowsVisitingLocation = function(e) { var t; return t = this.notifyApplicationBeforeVisitingLocation(e), !t.defaultPrevented }, n.prototype.notifyApplicationAfterClickingLinkToLocation = function(t, n) { return e.dispatch("turbolinks:click", { target: t, data: { url: n.absoluteURL }, cancelable: !0 }) }, n.prototype.notifyApplicationBeforeVisitingLocation = function(t) { return e.dispatch("turbolinks:before-visit", { data: { url: t.absoluteURL }, cancelable: !0 }) }, n.prototype.notifyApplicationAfterVisitingLocation = function(t) { return e.dispatch("turbolinks:visit", { data: { url: t.absoluteURL } }) }, n.prototype.notifyApplicationBeforeCachingSnapshot = function() { return e.dispatch("turbolinks:before-cache") }, n.prototype.notifyApplicationBeforeRender = function(t) { return e.dispatch("turbolinks:before-render", { data: { newBody: t } }) }, n.prototype.notifyApplicationAfterRender = function() { return e.dispatch("turbolinks:render") }, n.prototype.notifyApplicationAfterPageLoad = function(t) { return null == t && (t = {}), e.dispatch("turbolinks:load", { data: { url: this.location.absoluteURL, timing: t } }) }, n.prototype.startVisit = function(e, t, n) { var i; return null != (i = this.currentVisit) && i.cancel(), this.currentVisit = this.createVisit(e, t, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(e) }, n.prototype.createVisit = function(t, n, i) { var r, o, s, a, c; return o = null != i ? i : {}, a = o.restorationIdentifier, s = o.restorationData, r = o.historyChanged, c = new e.Visit(this, t, n), c.restorationIdentifier = null != a ? a : e.uuid(), c.restorationData = e.copyObject(s), c.historyChanged = r, c.referrer = this.location, c }, n.prototype.visitCompleted = function(e) { return this.notifyApplicationAfterPageLoad(e.getTimingMetrics()) }, n.prototype.clickEventIsSignificant = function(e) { return !(e.defaultPrevented || e.target.isContentEditable || e.which > 1 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) }, n.prototype.getVisitableLinkForNode = function(t) { return this.nodeIsVisitable(t) ? e.closest(t, "a[href]:not([target])") : void 0 }, n.prototype.getVisitableLocationForLink = function(t) { var n; return n = new e.Location(t.getAttribute("href")), this.locationIsVisitable(n) ? n : void 0 }, n.prototype.getActionForLink = function(e) { var t; return null != (t = e.getAttribute("data-turbolinks-action")) ? t : "advance" }, n.prototype.nodeIsVisitable = function(t) { var n; return !(n = e.closest(t, "[data-turbolinks]")) || "false" !== n.getAttribute("data-turbolinks") }, n.prototype.locationIsVisitable = function(e) { return e.isPrefixedBy(this.view.getRootLocation()) && e.isHTML() }, n.prototype.getCurrentRestorationData = function() { return this.getRestorationDataForIdentifier(this.restorationIdentifier) }, n.prototype.getRestorationDataForIdentifier = function(e) { var t; return null != (t = this.restorationData)[e] ? t[e] : t[e] = {} }, n
                }()
            }.call(this),
            function() {
                var t, n, i;
                e.start = function() { return n() ? (null == e.controller && (e.controller = t()), e.controller.start()) : void 0 }, n = function() { return null == window.Turbolinks && (window.Turbolinks = e), i() }, t = function() { var t; return t = new e.Controller, t.adapter = new e.BrowserAdapter(t), t }, (i = function() { return window.Turbolinks === e })() && e.start()
            }.call(this)
    }).call(this),
        "object" == typeof module && module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e)
}.call(this),
    function() {
        var e;
        window.app = {}, e = $(document), $.extend(app, window.gon), app.showFormErrors = function(e, t, n) {
            var i, r, o, s;
            n || (n = "body"), $(".error-message").remove(), s = [];
            for (r in e) i = e[r], o = t ? t + "[" + r + "]" : r, s.push($(n).find("input[name='" + o + "']:not([type=hidden])").addClass("error").parent().append("<div class='error-message'>" + i[0] + "</div>"));
            return s
        }, app.removeFormErrors = function(e) { return e || (e = "body"), $(".error-message").remove() }, app.isMobile = screen.width <= 640, app.insertIcons = function() { if (0 === $("#global-icons").length) return document.body.insertAdjacentHTML("afterbegin", app.iconsHtml) }, app.pages = {}, app.addPage = function(t) {
            var n, i, r, o, s, a;
            app.pages[t.name] = t, r = t.events, o = [];
            for (n in r) i = r[n], a = n.split(/\s+/)[0], s = n.substr(a.length), s = s ? "#" + t.name + " " + s : "#" + t.name, o.push(e.on(a, s, i.bind(t)));
            return o
        }, app.tags = {}, app.addTag = function(t) {
            var n, i, r, o, s, a;
            app.tags[t.name] = t, r = t.events, o = [];
            for (n in r) i = r[n], a = n.split(/\s+/)[0], s = n.substr(a.length), s = s ? t.name + " " + s : t.name, o.push(e.on(a, s, i));
            return o
        }, app.initTag = function(e) {
            var t, n, i;
            n = app.tags, i = [];
            for (t in n) n[t], i.push($(e).find(t).each(function(e, n) { var i, r, o; if (i = $(n), !i.data("initedTag")) return null != (r = app.tags[t]) && null != (o = r.init) ? o.call(app.tags[t], n) : void 0 }));
            return i
        }, app.runPage = function(e, t) { var n, i; return null != (n = app.pages[e]) && null != (i = n.init) && i.call(app.pages[e], t), app.currentPage = app.pages[e] }, app.visit = function(e, t) { return Turbolinks.visit(e, t) }, e.on("ajax:beforeSend", function() { return $("input[name].error").removeClass("error") }), app.observer = new MutationObserver(function(e) { return e.forEach(function(e) { return e.addedNodes.forEach(function(e) { var t; if (1 === e.nodeType && 0 === e.tagName.toLowerCase().indexOf("x-") && (t = e.tagName.toLowerCase(), app.tags[t])) return app.tags[t].init(e) }) }) }), e.on("turbolinks:load", function() { var e, t; return e = $("body>.page"), t = e.attr("id"), app.runPage(t, e), app.insertIcons(), app.observer.observe(document.body, { attributes: !1, childList: !0, characterData: !1 }), app.initTag(e) }), e.on("turbolinks:before-cache", function() { var e, t; return null != (e = app.currentPage) && null != (t = e.destroy) && t.call(null, $("body>.page")), app.currentPage = null, app.observer.disconnect() })
    }.call(this),
    function() { app.iconsHtml = '<svg id="global-icons" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none">\n<symbol id="i-add-bordered" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><style type="text/css"></style></defs><path d="M848 864l-96 0c-8.832 0-16-7.168-16-16s7.168-16 16-16l80 0 0-80c0-8.832 7.168-16 16-16s16 7.168 16 16l0 96c0 8.832-7.210667 16-16 16zM848 672c-8.832 0-16-7.168-16-16l0-96c0-8.832 7.168-16 16-16s16 7.168 16 16l0 96c0 8.832-7.210667 16-16 16zM848 480c-8.832 0-16-7.168-16-16l0-96c0-8.832 7.168-16 16-16s16 7.168 16 16l0 96c0 8.832-7.210667 16-16 16zM848 288c-8.832 0-16-7.168-16-16l0-80-80 0c-8.832 0-16-7.168-16-16s7.168-16 16-16l96 0c8.789333 0 16 7.168 16 16l0 96c0 8.832-7.210667 16-16 16zM656 864l-96 0c-8.832 0-16-7.168-16-16s7.168-16 16-16l96 0c8.789333 0 16 7.168 16 16s-7.210667 16-16 16zM656 192l-96 0c-8.832 0-16-7.168-16-16s7.168-16 16-16l96 0c8.789333 0 16 7.168 16 16s-7.210667 16-16 16zM637.994667 480c17.664 0 32 14.293333 32 32s-14.336 32-32 32l-96 0 0 96c0 17.664-14.336 32-32 32s-32-14.336-32-32l0-96-96 0c-17.664 0-32-14.336-32-32s14.293333-32 32-32l96 0 0-96c0-17.706667 14.293333-32 32-32s32 14.293333 32 32l0 96 96 0zM464 192l-96 0c-8.832 0-16-7.168-16-16s7.168-16 16-16l96 0c8.789333 0 16 7.168 16 16s-7.210667 16-16 16zM272 864l-96 0c-8.832 0-16-7.168-16-16l0-96c0-8.832 7.168-16 16-16s16 7.168 16 16l0 80 80 0c8.832 0 16 7.168 16 16s-7.168 16-16 16zM272 192l-80 0 0 80c0 8.832-7.168 16-16 16s-16-7.168-16-16l0-96c0-8.832 7.168-16 16-16l96 0c8.832 0 16 7.168 16 16s-7.168 16-16 16zM176 352c8.832 0 16 7.168 16 16l0 96c0 8.832-7.168 16-16 16s-16-7.168-16-16l0-96c0-8.832 7.168-16 16-16zM176 544c8.832 0 16 7.168 16 16l0 96c0 8.832-7.168 16-16 16s-16-7.168-16-16l0-96c0-8.832 7.168-16 16-16zM368 832l96 0c8.789333 0 16 7.168 16 16s-7.210667 16-16 16l-96 0c-8.832 0-16-7.168-16-16s7.168-16 16-16z" p-class="1224"></path></symbol>\n<symbol id="i-add-yin" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><style type="text/css"></style></defs><path d="M512 86.2c-235.1 0-425.7 190.6-425.7 425.7S276.9 937.6 512 937.6 937.7 747 937.7 511.9 747.1 86.2 512 86.2z m212.9 468.3H554.6v170.3h-85.1V554.5H299.2v-85.1h170.3V299.1h85.1v170.3h170.3v85.1z" fill="#488BF4" p-class="1333"></path></symbol>\n<symbol id="i-add" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><style type="text/css"></style></defs><path d="M82.371891 472.03588l859.254171 0c11.030195 0 19.98206 8.951865 19.98206 19.983084l0 39.966167c0 11.030195-8.951865 19.98206-19.98206 19.98206L82.371891 551.96719c-11.030195 0-19.98206-8.951865-19.98206-19.98206l0-39.966167C62.389831 480.987744 71.341696 472.03588 82.371891 472.03588" p-class="1114"></path><path d="M472.03281 941.628109 472.03281 82.373938c0-11.030195 8.951865-19.98206 19.983084-19.98206l39.965144 0c11.030195 0 19.98206 8.951865 19.98206 19.98206l0 859.254171c0 11.031219-8.951865 19.98206-19.98206 19.98206l-39.965144 0C480.984674 961.610169 472.03281 952.659328 472.03281 941.628109" p-class="1115"></path></symbol>\n<symbol id="i-close" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><style type="text/css"></style></defs><path d="M548.1984 527.744l452.5568 452.5568c10.0096 10.0096 10.0096 26.1888 0 36.1984s-26.1888 10.0096-36.1984 0L512 563.9424 59.4432 1016.4992c-10.0096 10.0096-26.1888 10.0096-36.1984 0s-10.0096-26.1888 0-36.1984l452.5568-452.5568L23.2448 75.2128c-10.0096-10.0096-10.0096-26.2144 0-36.224s26.1888-10.0096 36.1984 0L512 491.5456 964.5568 38.9888c10.0096-10.0096 26.1888-10.0096 36.1984 0s10.0096 26.1888 0 36.224L548.1984 527.744z" p-class="6538"></path></symbol>\n<symbol id="i-feedback" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><style type="text/css"></style></defs><path d="M553.984 425.984l0-169.984-84.010667 0 0 169.984 84.010667 0zM553.984 598.016l0-86.016-84.010667 0 0 86.016 84.010667 0zM854.016 86.016q34.005333 0 59.008 25.002667t25.002667 59.008l0 512q0 34.005333-25.002667 59.989333t-59.008 25.984l-598.016 0-169.984 169.984 0-768q0-34.005333 25.002667-59.008t59.008-25.002667l683.989333 0z" p-class="1939"></path></symbol>\n<symbol id="i-female" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><style type="text/css"></style></defs><path d="M75.968 982.848c0 0-3.264 10.24 11.584-68.48s120.448-111.424 221.184-149.632c100.672-38.208 91.712-100.8 91.712-100.8s-101.888-4.928-181.44-67.84c21.376-26.176 25.408-31.488 40.576-80.512 15.168-48.96 15.168-166.976 15.168-233.152 0-66.24 23.744-132.224 63.296-172.032 51.904-52.224 121.28-77.888 158.272-80.512 58.368-9.088 114.496 27.136 114.496 27.136 23.488-4.608 53.44-3.84 97.536 37.184 50.944 47.424 63.36 127.936 63.36 193.088s0.384 194.048 4.544 228.352c4.16 34.24 5.312 58.112 24.192 92.032-38.016 51.968-189.632 56.32-189.632 56.32s-9.024 62.592 91.712 100.8c100.672 38.208 206.336 70.912 221.184 149.632 14.784 78.72 11.584 68.48 11.584 68.48h-859.328z" p-class="3178"></path></symbol>\n<symbol id="i-github" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><style type="text/css"></style></defs><path d="M941.714 512q0 143.433-83.712 258.011t-216.283 158.574q-15.433 2.853-22.565-3.986t-7.131-17.152v-120.576q0-55.442-29.696-81.152 32.585-3.438 58.587-10.277t53.723-22.272 46.299-37.998 30.281-60.014 11.703-86.016q0-69.157-45.129-117.723 21.138-52.005-4.571-116.553-16.018-5.157-46.299 6.29t-52.553 25.161l-21.723 13.714q-53.138-14.848-109.714-14.848t-109.714 14.848q-9.143-6.29-24.283-15.433t-47.726-22.016-49.152-7.717q-25.161 64.585-3.986 116.553-45.129 48.567-45.129 117.723 0 48.567 11.703 85.723t29.989 60.014 46.007 38.29 53.723 22.272 58.587 10.277q-22.857 20.553-28.014 58.843-11.995 5.705-25.71 8.558t-32.585 2.853-37.413-12.288-31.707-35.73q-10.862-18.286-27.721-29.696t-28.27-13.714l-11.447-1.719q-11.995 0-16.567 2.56t-2.853 6.583 5.157 8.009 7.424 6.839l3.986 2.853q12.581 5.705 24.869 21.723t17.993 29.147l5.705 13.129q7.424 21.723 25.161 35.145t38.29 17.152 39.717 3.986 31.707-2.011l13.129-2.304q0 21.723 0.293 50.871t0.293 30.866q0 10.277-7.424 17.152t-22.857 3.986q-132.571-43.995-216.283-158.574t-83.712-258.011q0-119.442 58.843-220.27t159.707-159.707 220.27-58.843 220.27 58.843 159.707 159.707 58.843 220.27z" p-class="4795"></path></symbol>\n<symbol id="i-jrg-logo-yang" viewBox="0 0 2388 1024" width="2388" height="1024"><defs><style type="text/css"></style></defs><path d="M177.933042 504.919942l-63.906841-16.954876C143.091703 414.928675 139.737991 244.448326 125.764192 152.407569l159.114993 60.55313S242.957787 284.692868 221.717613 339.097525c-23.848617 60.925764-40.430859 161.723435-43.784571 165.822417zM321.024745 227.307132l-36.14556 121.10626 238.113537 23.475982-114.398836 161.537118 102.660845 16.768559 119.429403-244.075691s-75.458515-9.129549-156.50655-29.810772c-81.234352-20.494905-153.152838-49.001456-153.152839-49.001456zM267.179039 427.598253l133.030568 13.414847S340.215429 542.183406 283.202329 657.700146c-57.0131 115.330422-89.804949 202.340611-89.804949 202.340611l280.966521-124.459971-36.704512 143.091703s-30.556041 2.608443-165.263465 28.879185c-121.851528 23.848617-178.305677 43.411936-178.305677 43.411936l173.088792-523.365357zM682.107715 317.112082l-159.30131 559.883551s31.30131-6.707424 96.512372-13.414847c51.609898-5.403202 79.557496-4.471616 79.557497-4.471616l15.091703-398.905385 90.922853 22.730713 35.400291 373.379912s20.86754-2.422125 71.918486-3.540029c51.050946-1.117904 74.526929 1.304221 74.526929 1.304222v-136.38428l-95.953421 42.852984 43.784571-403.190684s-49.933042-2.422125-127.813683-12.669578c-51.982533-6.521106-124.646288-27.574964-124.646288-27.574963zM1113.618632 353.816594s21.240175 0.372635 91.854439 0c44.52984-0.186317 104.3377-5.030568 104.3377-5.030568l-157.065502 512.745269s-9.315866-2.981077-39.126637-4.098981c-30.183406-1.117904-37.263464-0.931587-37.263465-0.931586l37.263465-502.684134zM1331.609898 568.826783l-32.791849 110.299855v217.618631s43.784571-3.726346 81.234353-4.098981c45.088792-0.372635 81.234352 3.167394 81.234352 3.167395l-129.676856-326.9869zM1521.839884 324.751092s67.44687-6.707424 130.04949-19.563319c75.644833-15.650655 144.209607-37.449782 144.209607-37.449782l-6.707424 63.906842L1512.896652 494.672489l8.943232-169.921397zM1921.304221 247.429403s59.994178-8.384279 143.464338-29.438137c86.637555-21.985444 143.464338-39.499272 143.464338-39.499272s-6.521106 20.681223-6.707424 86.823872c0 54.218341 1.676856 83.47016 1.676856 83.47016l-143.464338-18.445415-148.494905-19.004366 10.061135-63.906842zM1796.098981 392.197962v92.599709l-265.315866 298.107715L1512.896652 609.257642zM1911.243086 365.92722l305.560407 119.61572s-0.745269 44.902475 20.308589 146.631732c21.053857 101.915575 57.199418 202.899563 57.199417 202.899564l-388.657933-380.273654 5.58952-88.873362zM1934.532751 607.208151l-135.080058 11.924309-186.317322 277.799127s159.114993 3.912664 268.483261 13.601164c109.554585 9.688501 294.381368 36.14556 294.381368 36.14556l-241.467249-339.47016z m90.363901 241.280932s-61.857351-5.030568-130.422125-5.030568-122.41048 5.030568-122.41048 5.030568l98.375545-173.647744 154.45706 173.647744zM1852.366812 510.882096l-46.57933 69.310044 103.406113-11.365357zM876.436681 144.768559l-177.37409 130.04949s58.131004 19.935953 109.18195 26.643377c87.755459 11.365357 128.745269 8.197962 128.74527 8.197963l-60.55313-164.89083zM754.585153 252.646288l101.729257-69.496361 20.122271 24.034935-121.851528 45.461426z" p-class="2531"></path></symbol>\n<symbol id="i-jrg-logo-yin" viewBox="0 0 2388 1024" width="2388" height="1024"><defs><style type="text/css"></style></defs><path d="M1711.138282 777.129549s49.187773-4.657933 111.976711-4.657933 119.243086 4.657933 119.243086 4.657933l-141.22853-158.742358-89.991267 158.742358zM2189.042213 492.622999c-57.0131-376.919942 18.07278-404.494905 18.07278-404.494906-448.652111 102.28821-480.139738 129.304221-1022.509462 129.304221-542.183406 0-1049.898108-129.304221-1049.898107-129.304221s46.765648 110.858806 14.346433 438.590975c-32.232897 327.918486-100.797671 438.777293-100.797671 438.777293s571.062591-92.413392 1208.454149-92.413392 1083.062591 92.413392 1083.062591 92.413392-93.717613-95.953421-150.730713-472.873362zM1847.708879 227.307132s54.777293-7.63901 131.353712-27.016011c79.371179-20.122271 131.353712-36.14556 131.353712-36.145561s-5.962154 19.004367-6.148472 79.371179c0 49.560408 1.490539 76.390102 1.490539 76.390102l-131.353712-16.768559-135.825328-17.327511 9.129549-58.503639z m-62.975255 240.908297l51.982533 53.100437-94.649199 10.43377 42.666666-63.534207z m-302.57933-170.294032s61.671033-6.148472 118.870451-17.886463c69.123726-14.346434 131.912664-34.282387 131.912664-34.282387l-6.148472 58.503639-252.832605 149.240175 8.197962-155.574964zM205.508006 140.296943l145.513828 55.336245s-38.195051 65.583697-57.75837 115.516739c-21.799127 55.708879-37.077147 147.935953-40.058224 151.6623l-58.503639-15.464338c26.643377-66.887918 23.475983-222.835517 10.806405-307.050946z m284.879185 664.221252s-27.947598 2.422125-151.103348 26.45706c-111.417758 21.799127-163.213974 39.68559-163.213974 39.685589l158.556041-478.649199 121.665211 12.296943s-54.96361 92.599709-107.13246 198.055313c-52.16885 105.641921-82.165939 185.199418-82.165939 185.199418l257.117904-113.839884-33.723435 130.79476z m-26.270743-315.621543l104.710335-147.749636-217.804949-21.612809 33.164483-110.858807s65.770015 26.084425 140.110626 45.088792c74.154294 19.004367 143.091703 27.388646 143.091703 27.388646l-109.368268 223.208152-93.90393-15.464338z m528.582242 293.263464s-21.426492-2.235808-68.005822-1.117903c-46.765648 1.117904-65.770015 3.353712-65.770015 3.353711l-32.419214-341.51965-83.097525-20.86754-13.9738 364.809315s-25.525473-0.931587-72.663755 4.098982c-59.80786 6.148472-88.31441 12.296943-88.314411 12.296943l145.700146-512.186318s66.515284 19.190684 113.839884 25.339156c71.359534 9.315866 117.007278 11.551674 117.007278 11.551674l-40.058225 368.908297 87.755459-39.312955v124.646288z m151.848617 6.893741s-8.570597-2.608443-35.772926-3.726346c-27.574964-1.117904-34.09607-0.931587-34.09607-0.931587l34.09607-459.83115s19.377001 0.372635 84.029112 0c40.803493-0.186317 95.394469-4.657933 95.394469-4.657933l-143.650655 469.147016z m207.930131 28.506551c-34.282387 0.372635-74.340611 3.726346-74.340611 3.726346V622.113537l29.997089-100.797671 118.497816 299.225619c0.186317-0.186317-32.978166-3.353712-74.154294-2.981077z m121.665211-259.353712l258.981077-198.614265v84.588064L1490.538574 717.135371l-16.395925-158.928675z m337.234352 275.749636c-100.052402-8.943231-245.56623-12.483261-245.56623-12.483261l170.48035-254.136826 123.528384-10.992722 220.972344 310.590975c-0.186317 0-169.362445-24.221252-269.414848-32.978166z m21.799127-416.791849l5.216885-81.420669 279.475983 109.368268s-0.745269 40.989811 18.631732 134.148471c19.190684 93.158661 52.355167 185.572052 52.355167 185.572053L1833.176128 417.164483z" p-class="2654"></path></symbol>\n<symbol id="i-male" viewBox="0 0 1025 1024" width="1025" height="1024"><defs><style type="text/css"></style></defs><path d="M932.931 719.264c-67.646-88.997-272.257-59.713-332.147-141.094-6.641-9.043-7.58-33.383-7.221-51.863 0.14-6.875 3.041-13.359 8.119-17.933 50.75-45.553 85.315-125.526 85.315-203.699 0-149.065-23.246-272.677-173.969-272.677-155.503 0-177.507 124.842-175.943 275.118 0.781 76.572 35.083 156.019 85.597 201.375 5.157 4.671 8.077 11.31 8.135 18.285 0.096 18.518-1.121 42.468-7.598 51.394-59.109 81.479-270.137 50.183-334.032 141.094-42.279 60.167-54.001 190.815-57.146 246.601-0.802 14.181 10.381 26.137 24.465 26.137h911.108c14.045 0 25.227-11.837 24.483-25.942-2.899-56.038-14.406-187.897-59.167-246.793z" p-class="3424"></path></symbol>\n<symbol id="i-question" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><style type="text/css"></style></defs><path d="M721.408 114.3808c-58.4192-42.1376-131.6864-63.1808-219.9552-63.1808-67.1744 0-123.8016 14.848-169.8304 44.4416-73.0624 46.3872-111.872 125.1328-116.5824 236.2368l169.2672 0c0-32.3584 9.4208-63.5392 28.3136-93.5424s50.944-45.0048 96.1536-45.0048c45.9264 0 77.6192 12.1856 94.9248 36.5056 17.3568 24.4224 26.0096 51.4048 26.0096 80.9984 0 25.7536-12.9024 49.3056-28.4672 70.7584-8.5504 12.4928-19.8656 23.9616-33.8432 34.5088 0 0-91.8016 58.88-132.1472 106.1888-23.3984 27.4432-25.4976 68.5056-27.5456 127.4368-0.1536 4.1984 1.4336 12.8512 16.128 12.8512s118.6304 0 131.6864 0 15.7696-9.6768 15.9744-13.9264c0.9216-21.4528 3.328-32.4096 7.2704-44.8 7.424-23.3984 27.4944-43.8272 50.1248-61.3888l46.592-32.1536c42.0352-32.768 75.6224-59.648 90.4192-80.7424 25.2928-34.7136 43.0592-77.4144 43.0592-128.0512 0-82.688-29.2352-145.0496-87.552-187.136zM498.7392 764.1088c-58.368-1.7408-106.496 38.6048-108.3392 101.888s43.9296 105.0112 102.2976 106.752c60.928 1.792 107.776-37.2736 109.6192-100.5056s-42.6496-106.3424-103.5776-108.1344z" p-class="3301"></path></symbol>\n<symbol id="i-wechat-colored" viewBox="0 0 256 256" width="256" height="256"><g class="Background_1_" style="enable-background:new ;"><g class="Background"><g><path d="M249.422,30.679c-2.721-4.985-5.816-9.536-9.793-13.521 c-3.992-3.998-8.709-7.587-13.703-10.314c-8.381-4.576-18.788-6.856-29.002-6.856H59.075c-10.444,0-20.542,2.345-29.265,6.949 c-5.022,2.649-9.588,6.146-13.502,10.126c-3.932,3.998-7.491,8.488-10.046,13.572c-4.289,8.533-6.274,18.477-6.274,28.65v137.429 c0,10.327,1.671,20.679,6.296,29.135c2.681,4.9,6.191,9.86,10.087,13.794c3.934,3.971,8.583,7.226,13.502,9.956 c8.466,4.7,18.842,6.413,29.202,6.413h137.849c10.568,0,20.399-1.523,28.982-6.401c4.739-2.692,9.879-6.113,13.687-9.966 c3.923-3.969,7.2-8.851,9.886-13.799c4.566-8.415,6.533-18.874,6.533-29.132V59.285 C256.012,48.978,254.031,39.124,249.422,30.679z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#64AB23;"/></g></g></g><g class="Shape_3_1_" style="enable-background:new ;"><g class="Shape_3"><g><path d="M99.586,47.146c-37.49-0.565-68.642,26.99-68.642,59.488 c0,18.759,8.821,35.033,25.896,46.981c0,0-6.258,20.657-6.169,21.071c0.089,0.415,1.451,1.229,1.925,0.963 s22.622-13.477,22.622-13.477c16.974,5.828,26.869,3.89,27.435,3.851c-1.694-4.961-2.804-12.686-1.54-19.967 c6.617-38.105,45.622-49.958,66.999-47.933C162.209,70.604,136.568,47.703,99.586,47.146z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;"/></g></g></g><g class="Shape_2_1_" style="enable-background:new ;"><g class="Shape_2"><g><path d="M222.99,151.854c0-27.841-26.918-49.166-58.146-49.166 c-33.065,0-59.437,21.807-59.437,49.646c0,27.89,25.084,50.979,59.475,51.168c6.922,0.039,17.232-1.741,24.184-4.646 c0,0,16.619,10.079,17.55,10.005c0.93-0.075,1.407-0.812,1.444-1.444c0.037-0.632-5.295-16.364-5.295-16.364 C217.035,179.875,222.99,167.558,222.99,151.854z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;"/></g></g></g><g class="Shape_1_3_" style="enable-background:new ;"><g class="Shape_1"><g><path d="M73.528,78.422c-4.918,0-8.904,3.988-8.904,8.908 s3.986,8.908,8.904,8.908s8.905-3.988,8.905-8.908S78.446,78.422,73.528,78.422z M127.435,78.422 c-4.917,0-8.904,3.988-8.904,8.908s3.987,8.908,8.904,8.908c4.918,0,8.905-3.988,8.905-8.908S132.354,78.422,127.435,78.422z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#60A721;"/></g></g></g><g class="Shape_1_2_" style="enable-background:new ;"><g class="Shape_1_1_"><g><path d="M143.081,125.788c-4.351,0-7.878,3.534-7.878,7.895 c0,4.359,3.527,7.894,7.878,7.894s7.878-3.534,7.878-7.894C150.959,129.322,147.432,125.788,143.081,125.788z M185.207,125.788 c-4.351,0-7.878,3.534-7.878,7.895c0,4.359,3.527,7.894,7.878,7.894c4.352,0,7.879-3.534,7.879-7.894 C193.086,129.322,189.559,125.788,185.207,125.788z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#60A721;"/></g></g></g></symbol>\n<symbol id="i-weibo-colored" viewBox="0 0 256 256" width="256" height="256"><g class="Background_1_" style="enable-background:new ;"><g class="Background"><g><path d="M249.422,30.68c-2.721-4.986-5.816-9.537-9.793-13.521 c-3.992-3.998-8.709-7.587-13.703-10.314c-8.381-4.576-18.788-6.855-29.002-6.855H59.075c-10.444,0-20.542,2.344-29.265,6.948 c-5.022,2.649-9.588,6.146-13.502,10.126c-3.932,3.998-7.491,8.488-10.046,13.572c-4.289,8.533-6.274,18.478-6.274,28.65v137.43 c0,10.326,1.671,20.678,6.296,29.134c2.681,4.9,6.191,9.86,10.087,13.795c3.934,3.97,8.583,7.225,13.503,9.955 c8.465,4.7,18.842,6.413,29.201,6.413h137.849c10.568,0,20.399-1.523,28.982-6.401c4.739-2.692,9.879-6.113,13.687-9.966 c3.923-3.968,7.2-8.851,9.886-13.799c4.566-8.415,6.533-18.874,6.533-29.131V59.285C256.012,48.978,254.031,39.124,249.422,30.68 z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFE591;"/></g></g></g><g class="Shape_4_1_" style="enable-background:new ;"><g class="Shape_4"><g><path d="M169.217,151.074c-2.088-20.866-29.861-35.239-62.04-32.095 c-32.171,3.145-56.568,22.611-54.478,43.479c2.09,20.876,29.865,35.248,62.039,32.11 C146.916,191.425,171.303,171.957,169.217,151.074z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;"/></g></g></g><g class="Shape_3_1_" style="enable-background:new ;"><g class="Shape_3"><g><path d="M179.092,125.276c-2.738-0.812-4.615-1.361-3.18-4.917 c3.104-7.715,3.425-14.372,0.059-19.121c-6.311-8.908-23.572-8.427-43.359-0.239c0-0.011-6.212,2.687-4.625-2.184 c3.044-9.67,2.585-17.771-2.151-22.444c-10.736-10.616-39.284,0.399-63.764,24.585c-18.333,18.12-28.979,37.325-28.979,53.928 c0,31.76,41.215,51.07,81.536,51.07c52.858,0,88.019-30.345,88.019-54.443C202.648,136.952,190.239,128.692,179.092,125.276z M114.738,194.569c-32.174,3.138-59.949-11.234-62.039-32.11c-2.09-20.868,22.307-40.335,54.478-43.479 c32.179-3.145,59.952,11.229,62.04,32.095C171.303,171.957,146.916,191.425,114.738,194.569z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#CD201F;"/></g></g></g><g class="Shape_2_1_" style="enable-background:new ;"><g class="Shape_2"><g><path d="M117.572,134.441c-15.319-3.905-32.636,3.573-39.29,16.802 c-6.777,13.483-0.225,28.456,15.254,33.354c16.032,5.063,34.93-2.701,41.5-17.255 C141.516,153.107,133.426,138.454,117.572,134.441z M105.874,168.889c-3.115,4.863-9.783,6.996-14.806,4.749 c-4.949-2.204-6.411-7.861-3.296-12.604c3.076-4.729,9.52-6.834,14.505-4.785C107.321,158.354,108.931,163.969,105.874,168.889z M116.131,155.985c-1.125,1.887-3.615,2.794-5.565,2.007c-1.917-0.772-2.518-2.878-1.429-4.735 c1.122-1.844,3.513-2.744,5.427-1.999C116.508,151.952,117.206,154.086,116.131,155.985z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#232323;"/></g></g></g><g class="Shape_1_1_" style="enable-background:new ;"><g class="Shape_1"><g><path d="M212.111,67.308c-12.48-14.403-30.891-19.894-47.882-16.133 h-0.007c-3.932,0.876-6.438,4.901-5.598,8.986c0.839,4.089,4.706,6.701,8.639,5.829c12.088-2.672,25.168,1.236,34.043,11.467 c8.863,10.23,11.271,24.185,7.475,36.416l0.002,0.004c-1.236,3.986,0.856,8.247,4.689,9.535c3.817,1.288,7.922-0.891,9.16-4.864 c0-0.008,0-0.022,0.003-0.03C227.965,101.311,224.595,81.696,212.111,67.308z M169.621,77.464 c-3.383,0.751-5.54,4.218-4.815,7.743c0.726,3.51,4.052,5.767,7.429,5.001v0.007c4.048-0.89,8.436,0.409,11.404,3.831 c2.975,3.43,3.773,8.104,2.497,12.203h0.007c-1.061,3.422,0.738,7.103,4.03,8.214c3.292,1.097,6.823-0.773,7.884-4.203 c2.603-8.383,0.977-17.936-5.111-24.95C186.871,78.296,177.901,75.632,169.621,77.464z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#DD880C;"/></g></g></g></symbol>\n<symbol id="i-weibo" viewBox="0 0 1024 1024" width="1024" height="1024"><defs><style type="text/css"></style></defs><path d="M512.82018 65.080228c-246.700705 0-446.708971 199.98473-446.708971 446.695668 0 246.716055 200.008266 446.695668 446.708971 446.695668 246.712985 0 446.709995-199.980637 446.709995-446.695668C959.530175 265.064958 759.532141 65.080228 512.82018 65.080228L512.82018 65.080228zM471.402885 734.419695c-114.171296 0-230.868111-55.32812-230.868111-146.3246 0-47.575552 30.140461-102.595656 82.054831-154.506956 69.310575-69.313645 150.147672-100.877525 180.542936-70.469981 13.421684 13.398148 14.718213 36.622082 6.095835 64.334237-4.491291 13.934361 13.100366 6.211469 13.100366 6.237051 56.018851-23.456225 104.905258-24.840758 122.767068 0.692778 9.532097 13.600763 8.622378 32.691563-0.166799 54.787814-4.068665 10.18906 1.25662 11.751648 8.993838 14.090926 31.576159 9.775644 66.708308 33.460066 66.708308 75.16184C720.631156 647.476531 621.075743 734.419695 471.402885 734.419695L471.402885 734.419695zM678.094364 445.055309c3.683902-11.392468 1.3743-24.402783-7.235798-33.949206-8.596795-9.521864-21.300119-13.140275-33.026184-10.649548l0-0.025583c-9.777691 2.128477-19.413142-4.158716-21.505803-13.908778-2.104941-9.829879 4.13211-19.453051 13.934361-21.555945 23.982204-5.083785 49.962925 2.309602 67.555605 21.838378 17.618263 19.500123 22.338774 46.085618 14.808264 69.414953-3.080152 9.547447-13.307074 14.729469-22.839171 11.6749-9.534144-3.078105-14.742772-13.31833-11.675924-22.839171L678.094364 445.055309 678.094364 445.055309zM783.797801 479.186663c-0.01535 0.025583-0.01535 0.075725-0.01535 0.102331-3.578502 11.062963-15.473413 17.117866-26.520003 13.525038-11.098779-3.593851-17.168008-15.4509-13.58746-26.535353l0 0c10.995425-34.029024 4.015454-72.855308-21.647019-101.311407-25.700335-28.484751-63.590294-39.341007-98.592482-31.92306-11.382235 2.436492-22.582321-4.825912-25.007557-16.21838-2.437515-11.370978 4.823865-22.556739 16.2061-24.997324l0.01228 0c49.221028-10.468422 102.520955 4.800329 138.678456 44.88528C789.467941 376.74348 799.219026 431.327656 783.797801 479.186663L783.797801 479.186663zM625.077893 569.721633c-5.903453-59.791781-84.543511-100.952226-175.655625-91.946109-91.099834 9.007141-160.181189 64.770166-154.266479 124.586506 5.915733 59.816341 84.569094 100.981902 175.668928 91.996251C561.936831 685.352163 630.993626 629.564579 625.077893 569.721633L625.077893 569.721633zM529.346575 618.838284c-18.59245 42.032302-72.072479 64.462151-117.441782 49.835012-43.792389-14.141068-62.333674-57.379848-43.163055-96.334046 18.834974-38.210253 67.837015-59.820434 111.180172-48.529273C524.790816 535.385617 547.681152 577.729004 529.346575 618.838284L529.346575 618.838284zM436.642197 586.785264c-14.101159-5.903453-32.334429 0.182149-41.044812 13.834076-8.80248 13.70207-4.670369 30.022781 9.339716 36.415374 14.204513 6.464225 33.07735 0.308015 41.892109-13.731746 8.650007-14.217816 4.093225-30.432103-10.17371-36.517705L436.642197 586.785264zM471.415165 572.364833c-5.415336-2.131547-12.177344 0.460488-15.359826 5.798053-3.078105 5.337565-1.372254 11.447726 4.055362 13.676487 5.503341 2.25946 12.547781-0.35918 15.741519-5.79703C478.895533 580.549236 476.919529 574.393026 471.415165 572.364833L471.415165 572.364833zM471.415165 572.364833" p-class="1208"></path></symbol>\n</svg>' }.call(this),
    function() { app.addPage({ name: "authorizationsNew", init: function(e) { return this.el = e }, events: { "sendCode:error": function(e, t) { return app.showFormErrors(t, "user", this.el) }, "sendCode:beforeRequest": function() { return app.removeFormErrors(this.el) } } }) }.call(this),
    function() {
        var e = [].slice;
        this.ActionCable = { INTERNAL: { message_types: { welcome: "welcome", ping: "ping", confirmation: "confirm_subscription", rejection: "reject_subscription" }, default_mount_path: "/cable", protocols: ["actioncable-v1-json", "actioncable-unsupported"] }, WebSocket: window.WebSocket, logger: window.console, createConsumer: function(e) { var t; return null == e && (e = null != (t = this.getConfig("url")) ? t : this.INTERNAL.default_mount_path), new ActionCable.Consumer(this.createWebSocketURL(e)) }, getConfig: function(e) { var t; return t = document.head.querySelector("meta[name='action-cable-" + e + "']"), null != t ? t.getAttribute("content") : void 0 }, createWebSocketURL: function(e) { var t; return e && !/^wss?:/i.test(e) ? (t = document.createElement("a"), t.href = e, t.href = t.href, t.protocol = t.protocol.replace("http", "ws"), t.href) : e }, startDebugging: function() { return this.debugging = !0 }, stopDebugging: function() { return this.debugging = null }, log: function() { var t, n; if (t = 1 <= arguments.length ? e.call(arguments, 0) : [], this.debugging) return t.push(Date.now()), (n = this.logger).log.apply(n, ["[ActionCable]"].concat(e.call(t))) } }
    }.call(this),
    function() {
        var e = function(e, t) { return function() { return e.apply(t, arguments) } };
        ActionCable.ConnectionMonitor = function() {
            function t(t) { this.connection = t, this.visibilityDidChange = e(this.visibilityDidChange, this), this.reconnectAttempts = 0 }
            var n, i, r;
            return t.pollInterval = { min: 3, max: 30 }, t.staleThreshold = 6, t.prototype.start = function() { if (!this.isRunning()) return this.startedAt = i(), delete this.stoppedAt, this.startPolling(), document.addEventListener("visibilitychange", this.visibilityDidChange), ActionCable.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms") }, t.prototype.stop = function() { if (this.isRunning()) return this.stoppedAt = i(), this.stopPolling(), document.removeEventListener("visibilitychange", this.visibilityDidChange), ActionCable.log("ConnectionMonitor stopped") }, t.prototype.isRunning = function() { return null != this.startedAt && null == this.stoppedAt }, t.prototype.recordPing = function() { return this.pingedAt = i() }, t.prototype.recordConnect = function() { return this.reconnectAttempts = 0, this.recordPing(), delete this.disconnectedAt, ActionCable.log("ConnectionMonitor recorded connect") }, t.prototype.recordDisconnect = function() { return this.disconnectedAt = i(), ActionCable.log("ConnectionMonitor recorded disconnect") }, t.prototype.startPolling = function() { return this.stopPolling(), this.poll() }, t.prototype.stopPolling = function() { return clearTimeout(this.pollTimeout) }, t.prototype.poll = function() { return this.pollTimeout = setTimeout(function(e) { return function() { return e.reconnectIfStale(), e.poll() } }(this), this.getPollInterval()) }, t.prototype.getPollInterval = function() { var e, t, i, r; return r = this.constructor.pollInterval, i = r.min, t = r.max, e = 5 * Math.log(this.reconnectAttempts + 1), Math.round(1e3 * n(e, i, t)) }, t.prototype.reconnectIfStale = function() { if (this.connectionIsStale()) return ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + r(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"), this.reconnectAttempts++, this.disconnectedRecently() ? ActionCable.log("ConnectionMonitor skipping reopening recent disconnect") : (ActionCable.log("ConnectionMonitor reopening"), this.connection.reopen()) }, t.prototype.connectionIsStale = function() { var e; return r(null != (e = this.pingedAt) ? e : this.startedAt) > this.constructor.staleThreshold }, t.prototype.disconnectedRecently = function() { return this.disconnectedAt && r(this.disconnectedAt) < this.constructor.staleThreshold }, t.prototype.visibilityDidChange = function() { if ("visible" === document.visibilityState) return setTimeout(function(e) { return function() { if (e.connectionIsStale() || !e.connection.isOpen()) return ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState), e.connection.reopen() } }(this), 200) }, i = function() { return (new Date).getTime() }, r = function(e) { return (i() - e) / 1e3 }, n = function(e, t, n) { return Math.max(t, Math.min(n, e)) }, t
        }()
    }.call(this),
    function() {
        var e, t, n, i, r, o = [].slice,
            s = function(e, t) { return function() { return e.apply(t, arguments) } },
            a = [].indexOf || function(e) {
                for (var t = 0, n = this.length; t < n; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        i = ActionCable.INTERNAL, t = i.message_types, n = i.protocols, r = 2 <= n.length ? o.call(n, 0, e = n.length - 1) : (e = 0, []), n[e++], ActionCable.Connection = function() {
            function e(e) { this.consumer = e, this.open = s(this.open, this), this.subscriptions = this.consumer.subscriptions, this.monitor = new ActionCable.ConnectionMonitor(this), this.disconnected = !0 }
            return e.reopenDelay = 500, e.prototype.send = function(e) { return !!this.isOpen() && (this.webSocket.send(JSON.stringify(e)), !0) }, e.prototype.open = function() { return this.isActive() ? (ActionCable.log("Attempted to open WebSocket, but existing socket is " + this.getState()), !1) : (ActionCable.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + n), null != this.webSocket && this.uninstallEventHandlers(), this.webSocket = new ActionCable.WebSocket(this.consumer.url, n), this.installEventHandlers(), this.monitor.start(), !0) }, e.prototype.close = function(e) { var t, n; if (t = (null != e ? e : { allowReconnect: !0 }).allowReconnect, t || this.monitor.stop(), this.isActive()) return null != (n = this.webSocket) ? n.close() : void 0 }, e.prototype.reopen = function() {
                var e;
                if (ActionCable.log("Reopening WebSocket, current state is " + this.getState()), !this.isActive()) return this.open();
                try { return this.close() } catch (t) { return e = t, ActionCable.log("Failed to reopen WebSocket", e) } finally {
                    ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"), setTimeout(this.open, this.constructor.reopenDelay)
                }
            }, e.prototype.getProtocol = function() { var e; return null != (e = this.webSocket) ? e.protocol : void 0 }, e.prototype.isOpen = function() { return this.isState("open") }, e.prototype.isActive = function() { return this.isState("open", "connecting") }, e.prototype.isProtocolSupported = function() { var e; return e = this.getProtocol(), a.call(r, e) >= 0 }, e.prototype.isState = function() { var e, t; return t = 1 <= arguments.length ? o.call(arguments, 0) : [], e = this.getState(), a.call(t, e) >= 0 }, e.prototype.getState = function() {
                var e, t;
                for (t in WebSocket)
                    if (WebSocket[t] === (null != (e = this.webSocket) ? e.readyState : void 0)) return t.toLowerCase();
                return null
            }, e.prototype.installEventHandlers = function() { var e, t; for (e in this.events) t = this.events[e].bind(this), this.webSocket["on" + e] = t }, e.prototype.uninstallEventHandlers = function() { var e; for (e in this.events) this.webSocket["on" + e] = function() {} }, e.prototype.events = {
                message: function(e) {
                    var n, i, r, o;
                    if (this.isProtocolSupported()) switch (r = JSON.parse(e.data), n = r.identifier, i = r.message, o = r.type, o) {
                        case t.welcome:
                            return this.monitor.recordConnect(), this.subscriptions.reload();
                        case t.ping:
                            return this.monitor.recordPing();
                        case t.confirmation:
                            return this.subscriptions.notify(n, "connected");
                        case t.rejection:
                            return this.subscriptions.reject(n);
                        default:
                            return this.subscriptions.notify(n, "received", i)
                    }
                },
                open: function() { if (ActionCable.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"), this.disconnected = !1, !this.isProtocolSupported()) return ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting."), this.close({ allowReconnect: !1 }) },
                close: function() { if (ActionCable.log("WebSocket onclose event"), !this.disconnected) return this.disconnected = !0, this.monitor.recordDisconnect(), this.subscriptions.notifyAll("disconnected", { willAttemptReconnect: this.monitor.isRunning() }) },
                error: function() { return ActionCable.log("WebSocket onerror event") }
            }, e
        }()
    }.call(this),
    function() {
        var e = [].slice;
        ActionCable.Subscriptions = function() {
            function t(e) { this.consumer = e, this.subscriptions = [] }
            return t.prototype.create = function(e, t) { var n, i, r; return n = e, i = "object" == typeof n ? n : { channel: n }, r = new ActionCable.Subscription(this.consumer, i, t), this.add(r) }, t.prototype.add = function(e) { return this.subscriptions.push(e), this.consumer.ensureActiveConnection(), this.notify(e, "initialized"), this.sendCommand(e, "subscribe"), e }, t.prototype.remove = function(e) { return this.forget(e), this.findAll(e.identifier).length || this.sendCommand(e, "unsubscribe"), e }, t.prototype.reject = function(e) { var t, n, i, r, o; for (i = this.findAll(e), r = [], t = 0, n = i.length; t < n; t++) o = i[t], this.forget(o), this.notify(o, "rejected"), r.push(o); return r }, t.prototype.forget = function(e) { var t; return this.subscriptions = function() { var n, i, r, o; for (r = this.subscriptions, o = [], n = 0, i = r.length; n < i; n++)(t = r[n]) !== e && o.push(t); return o }.call(this), e }, t.prototype.findAll = function(e) { var t, n, i, r, o; for (i = this.subscriptions, r = [], t = 0, n = i.length; t < n; t++) o = i[t], o.identifier === e && r.push(o); return r }, t.prototype.reload = function() { var e, t, n, i, r; for (n = this.subscriptions, i = [], e = 0, t = n.length; e < t; e++) r = n[e], i.push(this.sendCommand(r, "subscribe")); return i }, t.prototype.notifyAll = function() { var t, n, i, r, o, s, a; for (n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], o = this.subscriptions, s = [], i = 0, r = o.length; i < r; i++) a = o[i], s.push(this.notify.apply(this, [a, n].concat(e.call(t)))); return s }, t.prototype.notify = function() { var t, n, i, r, o, s, a; for (s = arguments[0], n = arguments[1], t = 3 <= arguments.length ? e.call(arguments, 2) : [], a = "string" == typeof s ? this.findAll(s) : [s], o = [], i = 0, r = a.length; i < r; i++) s = a[i], o.push("function" == typeof s[n] ? s[n].apply(s, t) : void 0); return o }, t.prototype.sendCommand = function(e, t) { var n; return n = e.identifier, this.consumer.send({ command: t, identifier: n }) }, t
        }()
    }.call(this),
    function() {
        ActionCable.Subscription = function() {
            function e(e, n, i) { this.consumer = e, null == n && (n = {}), this.identifier = JSON.stringify(n), t(this, i) }
            var t;
            return e.prototype.perform = function(e, t) { return null == t && (t = {}), t.action = e, this.send(t) }, e.prototype.send = function(e) { return this.consumer.send({ command: "message", identifier: this.identifier, data: JSON.stringify(e) }) }, e.prototype.unsubscribe = function() { return this.consumer.subscriptions.remove(this) }, t = function(e, t) {
                var n, i;
                if (null != t)
                    for (n in t) i = t[n], e[n] = i;
                return e
            }, e
        }()
    }.call(this),
    function() {
        ActionCable.Consumer = function() {
            function e(e) { this.url = e, this.subscriptions = new ActionCable.Subscriptions(this), this.connection = new ActionCable.Connection(this) }
            return e.prototype.send = function(e) { return this.connection.send(e) }, e.prototype.connect = function() { return this.connection.open() }, e.prototype.disconnect = function() { return this.connection.close({ allowReconnect: !1 }) }, e.prototype.ensureActiveConnection = function() { if (!this.connection.isActive()) return this.connection.open() }, e
        }()
    }.call(this),
    function() { this.App || (this.App = {}), App.cable = ActionCable.createConsumer() }.call(this);
var pJS = function(e, t) {
    var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = { canvas: { el: n, w: n.offsetWidth, h: n.offsetHeight }, particles: { number: { value: 400, density: { enable: !0, value_area: 800 } }, color: { value: "#fff" }, shape: { type: "circle", stroke: { width: 0, color: "#ff0000" }, polygon: { nb_sides: 5 }, image: { src: "", width: 100, height: 100 } }, opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } }, size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } }, line_linked: { enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1 }, move: { enable: !0, speed: 2, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } }, array: [] }, interactivity: { detect_on: "canvas", events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes: { grab: { distance: 100, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 80, duration: .4 }, repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }, mouse: {} }, retina_detect: !1, fn: { interact: {}, modes: {}, vendors: {} }, tmp: {} };
    var i = this.pJS;
    t && Object.deepExtend(i, t), i.tmp.obj = { size_value: i.particles.size.value, size_anim_speed: i.particles.size.anim.speed, move_speed: i.particles.move.speed, line_linked_distance: i.particles.line_linked.distance, line_linked_width: i.particles.line_linked.width, mode_grab_distance: i.interactivity.modes.grab.distance, mode_bubble_distance: i.interactivity.modes.bubble.distance, mode_bubble_size: i.interactivity.modes.bubble.size, mode_repulse_distance: i.interactivity.modes.repulse.distance }, i.fn.retinaInit = function() { i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio }, i.fn.canvasInit = function() { i.canvas.ctx = i.canvas.el.getContext("2d") }, i.fn.canvasSize = function() { i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function() { i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles() }) }, i.fn.canvasPaint = function() { i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h) }, i.fn.canvasClear = function() { i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h) }, i.fn.particle = function(e, t, n) {
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = n ? n.x : Math.random() * i.canvas.w, this.y = n ? n.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, n), this.color = {}, "object" == typeof e.value)
            if (e.value instanceof Array) {
                var r = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
                this.color.rgb = hexToRgb(r)
            } else e.value.r != undefined && e.value.g != undefined && e.value.b != undefined && (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }), e.value.h != undefined && e.value.s != undefined && e.value.l != undefined && (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
        else "random" == e.value ? this.color.rgb = { r: Math.floor(256 * Math.random()) + 0, g: Math.floor(256 * Math.random()) + 0, b: Math.floor(256 * Math.random()) + 0 } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var o = {};
        switch (i.particles.move.direction) {
            case "top":
                o = { x: 0, y: -1 };
                break;
            case "top-right":
                o = { x: .5, y: -.5 };
                break;
            case "right":
                o = { x: 1, y: -0 };
                break;
            case "bottom-right":
                o = { x: .5, y: .5 };
                break;
            case "bottom":
                o = { x: 0, y: 1 };
                break;
            case "bottom-left":
                o = { x: -.5, y: 1 };
                break;
            case "left":
                o = { x: -1, y: 0 };
                break;
            case "top-left":
                o = { x: -.5, y: -.5 };
                break;
            default:
                o = { x: 0, y: 0 }
        }
        i.particles.move.straight ? (this.vx = o.x, this.vy = o.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5, this.vy = o.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var s = i.particles.shape.type;
        if ("object" == typeof s) {
            if (s instanceof Array) {
                var a = s[Math.floor(Math.random() * s.length)];
                this.shape = a
            }
        } else this.shape = s;
        if ("image" == this.shape) {
            var c = i.particles.shape;
            this.img = { src: c.image.src, ratio: c.image.width / c.image.height }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && i.tmp.source_svg != undefined && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1))
        }
    }, i.fn.particle.prototype.draw = function() {
        function e() { i.canvas.ctx.drawImage(s, t.x - n, t.y - n, 2 * n, 2 * n / t.img.ratio) }
        var t = this;
        if (t.radius_bubble != undefined) var n = t.radius_bubble;
        else var n = t.radius;
        if (t.opacity_bubble != undefined) var r = t.opacity_bubble;
        else var r = t.opacity;
        if (t.color.rgb) var o = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + r + ")";
        else var o = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + r + ")";
        switch (i.canvas.ctx.fillStyle = o, i.canvas.ctx.beginPath(), t.shape) {
            case "circle":
                i.canvas.ctx.arc(t.x, t.y, n, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                i.canvas.ctx.rect(t.x - n, t.y - n, 2 * n, 2 * n);
                break;
            case "triangle":
                i.fn.vendors.drawShape(i.canvas.ctx, t.x - n, t.y + n / 1.66, 2 * n, 3, 2);
                break;
            case "polygon":
                i.fn.vendors.drawShape(i.canvas.ctx, t.x - n / (i.particles.shape.polygon.nb_sides / 3.5), t.y - n / .76, 2.66 * n / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                i.fn.vendors.drawShape(i.canvas.ctx, t.x - 2 * n / (i.particles.shape.polygon.nb_sides / 4), t.y - n / 1.52, 2 * n * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == i.tmp.img_type) var s = t.img.obj;
                else var s = i.tmp.img_obj;
                s && e()
        }
        i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill()
    }, i.fn.particlesCreate = function() { for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value)) }, i.fn.particlesUpdate = function() {
        for (var e = 0; e < i.particles.array.length; e++) {
            var t = i.particles.array[e];
            if (i.particles.move.enable) {
                var n = i.particles.move.speed / 2;
                t.x += t.vx * n, t.y += t.vy * n
            }
            if (i.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= i.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= i.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), i.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= i.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= i.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == i.particles.move.out_mode) var r = { x_left: t.radius, x_right: i.canvas.w, y_top: t.radius, y_bottom: i.canvas.h };
            else var r = { x_left: -t.radius, x_right: i.canvas.w + t.radius, y_top: -t.radius, y_bottom: i.canvas.h + t.radius };
            switch (t.x - t.radius > i.canvas.w ? (t.x = r.x_left, t.y = Math.random() * i.canvas.h) : t.x + t.radius < 0 && (t.x = r.x_right, t.y = Math.random() * i.canvas.h), t.y - t.radius > i.canvas.h ? (t.y = r.y_top, t.x = Math.random() * i.canvas.w) : t.y + t.radius < 0 && (t.y = r.y_bottom, t.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
                case "bounce":
                    t.x + t.radius > i.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > i.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
            }
            if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(t), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(t), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(t), i.particles.line_linked.enable || i.particles.move.attract.enable)
                for (var o = e + 1; o < i.particles.array.length; o++) {
                    var s = i.particles.array[o];
                    i.particles.line_linked.enable && i.fn.interact.linkParticles(t, s), i.particles.move.attract.enable && i.fn.interact.attractParticles(t, s), i.particles.move.bounce && i.fn.interact.bounceParticles(t, s)
                }
        }
    }, i.fn.particlesDraw = function() { i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate(); for (var e = 0; e < i.particles.array.length; e++) { i.particles.array[e].draw() } }, i.fn.particlesEmpty = function() { i.particles.array = [] }, i.fn.particlesRefresh = function() { cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = undefined, i.tmp.img_obj = undefined, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start() }, i.fn.interact.linkParticles = function(e, t) {
        var n = e.x - t.x,
            r = e.y - t.y,
            o = Math.sqrt(n * n + r * r);
        if (o <= i.particles.line_linked.distance) {
            var s = i.particles.line_linked.opacity - o / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (s > 0) {
                var a = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + s + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(t.x, t.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
            }
        }
    }, i.fn.interact.attractParticles = function(e, t) {
        var n = e.x - t.x,
            r = e.y - t.y;
        if (Math.sqrt(n * n + r * r) <= i.particles.line_linked.distance) {
            var o = n / (1e3 * i.particles.move.attract.rotateX),
                s = r / (1e3 * i.particles.move.attract.rotateY);
            e.vx -= o, e.vy -= s, t.vx += o, t.vy += s
        }
    }, i.fn.interact.bounceParticles = function(e, t) {
        var n = e.x - t.x,
            i = e.y - t.y;
        Math.sqrt(n * n + i * i) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
    }, i.fn.modes.pushParticles = function(e, t) { i.tmp.pushing = !0; for (var n = 0; n < e; n++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, { x: t ? t.pos_x : Math.random() * i.canvas.w, y: t ? t.pos_y : Math.random() * i.canvas.h })), n == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1) }, i.fn.modes.removeParticles = function(e) { i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw() }, i.fn.modes.bubbleParticle = function(e) {
        function t() { e.opacity_bubble = e.opacity, e.radius_bubble = e.radius }

        function n(t, n, r, o, a) {
            if (t != n)
                if (i.tmp.bubble_duration_end) {
                    if (r != undefined) {
                        var c = o - p * (o - t) / i.interactivity.modes.bubble.duration,
                            l = t - c;
                        d = t + l, "size" == a && (e.radius_bubble = d), "opacity" == a && (e.opacity_bubble = d)
                    }
                } else if (s <= i.interactivity.modes.bubble.distance) {
                if (r != undefined) var u = r;
                else var u = o;
                if (u != t) { var d = o - p * (o - t) / i.interactivity.modes.bubble.duration; "size" == a && (e.radius_bubble = d), "opacity" == a && (e.opacity_bubble = d) }
            } else "size" == a && (e.radius_bubble = undefined), "opacity" == a && (e.opacity_bubble = undefined)
        }
        if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
            var r = e.x - i.interactivity.mouse.pos_x,
                o = e.y - i.interactivity.mouse.pos_y,
                s = Math.sqrt(r * r + o * o),
                a = 1 - s / i.interactivity.modes.bubble.distance;
            if (s <= i.interactivity.modes.bubble.distance) {
                if (a >= 0 && "mousemove" == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value)
                        if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                            var c = e.radius + i.interactivity.modes.bubble.size * a;
                            c >= 0 && (e.radius_bubble = c)
                        } else {
                            var l = e.radius - i.interactivity.modes.bubble.size,
                                c = e.radius - l * a;
                            e.radius_bubble = c > 0 ? c : 0
                        }
                    if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                        if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                            var u = i.interactivity.modes.bubble.opacity * a;
                            u > e.opacity && u <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = u)
                        } else {
                            var u = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * a;
                            u < e.opacity && u >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = u)
                        }
                }
            } else t();
            "mouseleave" == i.interactivity.status && t()
        } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            if (i.tmp.bubble_clicking) {
                var r = e.x - i.interactivity.mouse.click_pos_x,
                    o = e.y - i.interactivity.mouse.click_pos_y,
                    s = Math.sqrt(r * r + o * o),
                    p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1)
            }
            i.tmp.bubble_clicking && (n(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), n(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
        }
    }, i.fn.modes.repulseParticle = function(e) {
        function t() {
            var t = Math.atan2(d, p);
            if (e.vx = h * Math.cos(t), e.vy = h * Math.sin(t), "bounce" == i.particles.move.out_mode) {
                var n = { x: e.x + e.vx, y: e.y + e.vy };
                n.x + e.radius > i.canvas.w ? e.vx = -e.vx : n.x - e.radius < 0 && (e.vx = -e.vx), n.y + e.radius > i.canvas.h ? e.vy = -e.vy : n.y - e.radius < 0 && (e.vy = -e.vy)
            }
        }
        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
            var n = e.x - i.interactivity.mouse.pos_x,
                r = e.y - i.interactivity.mouse.pos_y,
                o = Math.sqrt(n * n + r * r),
                s = { x: n / o, y: r / o },
                a = i.interactivity.modes.repulse.distance,
                c = 100,
                l = clamp(1 / a * (-1 * Math.pow(o / a, 2) + 1) * a * c, 0, 50),
                u = { x: e.x + s.x * l, y: e.y + s.y * l };
            "bounce" == i.particles.move.out_mode ? (u.x - e.radius > 0 && u.x + e.radius < i.canvas.w && (e.x = u.x), u.y - e.radius > 0 && u.y + e.radius < i.canvas.h && (e.y = u.y)) : (e.x = u.x, e.y = u.y)
        } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
            if (i.tmp.repulse_finish || ++i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0), i.tmp.repulse_clicking) {
                var a = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
                    p = i.interactivity.mouse.click_pos_x - e.x,
                    d = i.interactivity.mouse.click_pos_y - e.y,
                    f = p * p + d * d,
                    h = -a / f * 1;
                f <= a && t()
            } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
    }, i.fn.modes.grabParticle = function(e) {
        if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
            var t = e.x - i.interactivity.mouse.pos_x,
                n = e.y - i.interactivity.mouse.pos_y,
                r = Math.sqrt(t * t + n * n);
            if (r <= i.interactivity.modes.grab.distance) {
                var o = i.interactivity.modes.grab.line_linked.opacity - r / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (o > 0) {
                    var s = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + o + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                }
            }
        }
    }, i.fn.vendors.eventsListeners = function() {
        "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function(e) {
            if (i.interactivity.el == window) var t = e.clientX,
                n = e.clientY;
            else var t = e.offsetX || e.clientX,
                n = e.offsetY || e.clientY;
            i.interactivity.mouse.pos_x = t, i.interactivity.mouse.pos_y = n, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove"
        }), i.interactivity.el.addEventListener("mouseleave", function() { i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave" })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function() {
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
                case "push":
                    i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    i.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function() { i.tmp.repulse_clicking = !1 }, 1e3 * i.interactivity.modes.repulse.duration)
            }
        })
    }, i.fn.vendors.densityAutoParticles = function() {
        if (i.particles.number.density.enable) {
            var e = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (e /= 2 * i.canvas.pxratio);
            var t = e * i.particles.number.value / i.particles.number.density.value_area,
                n = i.particles.array.length - t;
            n < 0 ? i.fn.modes.pushParticles(Math.abs(n)) : i.fn.modes.removeParticles(n)
        }
    }, i.fn.vendors.checkOverlap = function(e, t) {
        for (var n = 0; n < i.particles.array.length; n++) {
            var r = i.particles.array[n],
                o = e.x - r.x,
                s = e.y - r.y;
            Math.sqrt(o * o + s * s) <= e.radius + r.radius && (e.x = t ? t.x : Math.random() * i.canvas.w, e.y = t ? t.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e))
        }
    }, i.fn.vendors.createSvgImg = function(e) {
        var t = i.tmp.source_svg,
            n = /#([0-9A-F]{3,6})/gi,
            r = t.replace(n, function() {
                if (e.color.rgb) var t = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                else var t = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                return t
            }),
            o = new Blob([r], { type: "image/svg+xml;charset=utf-8" }),
            s = window.URL || window.webkitURL || window,
            a = s.createObjectURL(o),
            c = new Image;
        c.addEventListener("load", function() { e.img.obj = c, e.img.loaded = !0, s.revokeObjectURL(a), i.tmp.count_svg++ }), c.src = a
    }, i.fn.vendors.destroypJS = function() { cancelAnimationFrame(i.fn.drawAnimFrame), n.remove(), pJSDom = null }, i.fn.vendors.drawShape = function(e, t, n, i, r, o) {
        var s = r * o,
            a = r / o,
            c = 180 * (a - 2) / a,
            l = Math.PI - Math.PI * c / 180;
        e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
        for (var u = 0; u < s; u++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
        e.fill(), e.restore()
    }, i.fn.vendors.exportImg = function() { window.open(i.canvas.el.toDataURL("image/png"), "_blank") }, i.fn.vendors.loadImg = function(e) {
        if (i.tmp.img_error = undefined, "" != i.particles.shape.image.src)
            if ("svg" == e) {
                var t = new XMLHttpRequest;
                t.open("GET", i.particles.shape.image.src), t.onreadystatechange = function(e) { 4 == t.readyState && (200 == t.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0)) }, t.send()
            } else {
                var n = new Image;
                n.addEventListener("load", function() { i.tmp.img_obj = n, i.fn.vendors.checkBeforeDraw() }), n.src = i.particles.shape.image.src
            }
        else console.log("Error pJS - No image.src"), i.tmp.img_error = !0
    }, i.fn.vendors.draw = function() { "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : i.tmp.img_obj != undefined ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) }, i.fn.vendors.checkBeforeDraw = function() { "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && i.tmp.source_svg == undefined ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw()) }, i.fn.vendors.init = function() { i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color) }, i.fn.vendors.start = function() { isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw() }, i.fn.vendors.eventsListeners(), i.fn.vendors.start()
};
Object.deepExtend = function(e, t) { for (var n in t) t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], t[n])) : e[n] = t[n]; return e }, window.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { window.setTimeout(e, 1e3 / 60) } }(), window.cancelRequestAnimFrame = function() { return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout }(), window.pJSDom = [], window.particlesJS = function(e, t) {
        "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
        var n = document.getElementById(e),
            i = "particles-js-canvas-el",
            r = n.getElementsByClassName(i);
        if (r.length)
            for (; r.length > 0;) n.removeChild(r[0]);
        var o = document.createElement("canvas");
        o.className = i, o.style.width = "100%", o.style.height = "100%", null != document.getElementById(e).appendChild(o) && pJSDom.push(new pJS(e, t))
    }, window.particlesJS.load = function(e, t, n) {
        var i = new XMLHttpRequest;
        i.open("GET", t), i.onreadystatechange = function(t) {
            if (4 == i.readyState)
                if (200 == i.status) {
                    var r = JSON.parse(t.currentTarget.response);
                    window.particlesJS(e, r), n && n()
                } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
        }, i.send()
    },
    function(e) {
        "use strict";
        var t = function(t, n) { this.el = e(t), this.options = e.extend({}, e.fn.typed.defaults, n), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build() };
        t.prototype = {
            constructor: t,
            init: function() {
                var e = this;
                e.timeout = setTimeout(function() {
                    for (var t = 0; t < e.strings.length; ++t) e.sequence[t] = t;
                    e.shuffle && (e.sequence = e.shuffleArray(e.sequence)), e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                }, e.startDelay)
            },
            build: function() {
                var t = this;
                if (this.showCursor === !0 && (this.cursor = e('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                    this.strings = [], this.stringsElement.hide(), console.log(this.stringsElement.children());
                    var n = this.stringsElement.children();
                    e.each(n, function(n, i) { t.strings.push(e(i).html()) })
                }
                this.init()
            },
            typewrite: function(e, t) {
                if (this.stop !== !0) {
                    var n = Math.round(70 * Math.random()) + this.typeSpeed,
                        i = this;
                    i.timeout = setTimeout(function() {
                        var n = 0,
                            r = e.substr(t);
                        if ("^" === r.charAt(0)) { var o = 1; /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, n = parseInt(r)), e = e.substring(0, t) + e.substring(t + o) }
                        if ("html" === i.contentType) {
                            var s = e.substr(t).charAt(0);
                            if ("<" === s || "&" === s) {
                                var a = "",
                                    c = "";
                                for (c = "<" === s ? ">" : ";"; e.substr(t + 1).charAt(0) !== c && (a += e.substr(t).charAt(0), !(++t + 1 > e.length)););
                                t++, a += c
                            }
                        }
                        i.timeout = setTimeout(function() {
                            if (t === e.length) {
                                if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                                i.timeout = setTimeout(function() { i.backspace(e, t) }, i.backDelay)
                            } else {
                                0 === t && i.options.preStringTyped(i.arrayPos);
                                var n = e.substr(0, t + 1);
                                i.attr ? i.el.attr(i.attr, n) : i.isInput ? i.el.val(n) : "html" === i.contentType ? i.el.html(n) : i.el.text(n), t++, i.typewrite(e, t)
                            }
                        }, n)
                    }, n)
                }
            },
            backspace: function(e, t) {
                if (this.stop !== !0) {
                    var n = Math.round(70 * Math.random()) + this.backSpeed,
                        i = this;
                    i.timeout = setTimeout(function() {
                        if ("html" === i.contentType && ">" === e.substr(t).charAt(0)) {
                            for (var n = "";
                                "<" !== e.substr(t - 1).charAt(0) && (n -= e.substr(t).charAt(0), !(0 > --t)););
                            t--, n += "<"
                        }
                        var r = e.substr(0, t);
                        i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), t > i.stopNum ? (t--, i.backspace(e, t)) : t <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], t))
                    }, n)
                }
            },
            shuffleArray: function(e) {
                var t, n, i = e.length;
                if (i)
                    for (; --i;) n = Math.floor(Math.random() * (i + 1)), t = e[n], e[n] = e[i], e[i] = t;
                return e
            },
            reset: function() {
                var e = this;
                clearInterval(e.timeout), this.el.attr("id"), this.el.empty(), "undefined" != typeof this.cursor && this.cursor.remove(), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
            }
        }, e.fn.typed = function(n) {
            return this.each(function() {
                var i = e(this),
                    r = i.data("typed"),
                    o = "object" == typeof n && n;
                r && r.reset(), i.data("typed", r = new t(this, o)), "string" == typeof n && r[n]()
            })
        }, e.fn.typed.defaults = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], stringsElement: null, typeSpeed: 0, startDelay: 0, backSpeed: 0, shuffle: !1, backDelay: 500, loop: !1, loopCount: !1, showCursor: !0, cursorChar: "|", attr: null, contentType: "html", callback: function() {}, preStringTyped: function() {}, onStringTyped: function() {}, resetCallback: function() {} }
    }(window.jQuery),
    function() { app.addPage({ name: "homeIndex", init: function(e) { var t, n; return t = e.find("#bg"), app.isMobile || t.data("inited") || (n = t.data("particles-config"), particlesJS.load("bg", n, function() { return function() {} }()), t.data("inited", !0)), e.find("#slogan").data("inited") || (e.find("#slogan").typed({ strings: $("#slogan").attr("data-content").split("|"), typeSpeed: 50, backSpeed: 100, loop: !0 }), e.find("#slogan").data("inited", !0)), e.find("#bg").on("mousemove", function() { return function(e) { var t, n, i, r, o; return t = $(e.currentTarget), n = t.outerWidth() / 2, i = t.outerHeight() / 2, r = (e.pageX - n) / n, o = -(e.pageY - i) / i, t.children("main").css({ transform: "rotateX(" + 10 * o + "deg) rotateY(" + 10 * r + "deg)" }), t.find(".logo,h1").css({ transform: "rotateX(" + o * -15 + "deg) rotateY(" + r * -15 + "deg)" }) } }()) }, destroy: function(e) { var t; return null != (t = e.find("#slogan").data("typed")) ? t.reset() : void 0 } }) }.call(this),
    function() {
        var e;
        e = $(document), e.on("mouseenter click", "#jrgContacts> li", function(t) {
            var n;
            return n = $(t.currentTarget), n.children(".popover").length > 0 ? n.hasClass("active") ? void 0 : (n.addClass("active").siblings(".active").removeClass("active"), e.off("click.jrgContacts").on("click.jrgContacts", function(t) {
                if (t.target !== n.get(0) && !$.contains(n.get(0), t.target)) return n.removeClass("active"), e.off("click.jrgContacts")
            })) : (n.siblings(".active").removeClass("active"), e.off("click.jrgContacts"))
        })
    }.call(this),
    function() { app.addPage({ name: "passwordResetRequestsNew", init: function(e) { return this.el = e }, events: { "sendCode:error": function(e, t) { return app.showFormErrors(t, null, this.el) }, "sendCode:beforeRequest": function() { return app.removeFormErrors(this.el) } } }) }.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {
        var e;
        e = function(e) { var t, n; return t = e.find('input[name="user[avatar]"]'), n = t.val(), $.ajax({ url: t.attr("data-url"), method: "PATCH", dataType: "json", data: { user: { avatar: n } }, error: function() { return alert("\u66f4\u65b0\u5931\u8d25\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u8bd5") } }) }, app.addPage({ name: "usersShow", init: function(e) { return this.el = e }, events: { uploadSucceed: function() { return e(this.el) } } }), app.addPage({ name: "usersNew", init: function(e) { return this.el = e }, events: { "sendCode:error": function(e, t) { return app.showFormErrors(t, "user", this.el) }, "sendCode:beforeRequest": function() { return app.removeFormErrors(this.el) } } }), app.addPage({ name: "usersEdit", init: function(e) { return this.el = e }, events: { "uploadSucceed #userAvatar": function() { return e(this.el) } } }), app.addPage({ name: "usersIndex", init: function(e) { return this.el = e }, events: { "change table select[name=role]": function(e) { var t, n, i, r, o; return t = $(e.currentTarget), i = t.val(), t.closest("tr").find("input:hidden[name=id]").val(), o = t.data("url"), r = function() {}, n = function(e) { return alert("\u64cd\u4f5c\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff0c\u9519\u8bef\u7801\uff1a" + e.status), window.location.reload() }, $.post(o, { new_role: i }).then(r, n) } } })
    }.call(this),
    function() { app.addTag({ name: "x-dialog", init: function(e) { var t; return t = $(e), 0 === t.children("main").length && t.wrapInner("<main></main>"), t.wrapInner('<div class="wrapper"></div>'), t.find(".wrapper").append('<svg class="icon close" role=closeButton>\n  <use xlink:href="#i-close"></use>\n</svg>') }, events: { "click [role=closeButton]": function(e) { return $(e.currentTarget).closest("x-dialog").remove() }, closeDialog: function(e) { return $(e.target).closest("x-dialog").remove() } } }) }.call(this),
    function() { app.addTag({ name: "x-image-uploader", init: function(e) { var t; return t = $(e), t.append("<input type=file>") }, events: { "change input[type=file]": function(e) { var t, n, i, r, o, s; return o = e.currentTarget, t = $(o), r = t.closest("x-image-uploader"), n = r.find("img"), i = r.find("input[type=hidden]"), s = new FormData, s.append("file", o.files[0]), s.append("token", gon.qiniuSettings.uptoken), $.ajax({ url: "//up-z0.qiniu.com", method: "post", processData: !1, contentType: !1, data: s, success: function(e) { var t; return t = "//" + gon.qiniuSettings.host + "/" + e.key, i.val(t), n.prop("src", t), r.trigger("uploadSucceed", t) }, error: function(e) { return r.trigger("uploadFailed", e) }, complete: function() { return t.val("") } }) } } }) }.call(this),
    function() { app.addTag({ name: "x-send-code", events: { click: function(e) { var t, n, i, r, o; if (e.preventDefault(), t = $(e.currentTarget), i = $(t.attr("data-phone-input")).val(), "yes" !== t.attr("data-disabled")) return o = t.attr("url"), r = function() { return t.text(t.attr("data-original-text")).attr("data-disabled", "no") }, n = function() { return t.attr("data-original-text", t.text()).attr("data-disabled", "yes") }, t.trigger("sendCode:beforeRequest"), $.ajax({ url: o, dataType: "json", method: "post", data: { phone_verify_code_request: { phone: i } }, success: function() { return function(e) { var i, o, s; return t.trigger("sendCode:success", e), o = 60, i = function() { if (t.text(o + " \u79d2\u540e\u53ef\u91cd\u53d1"), (o -= 1) < 0) return clearInterval(s), r() }, n(), i(), s = setInterval(i, 1e3) } }(), error: function() { return function(e) { return t.trigger("sendCode:error", e.responseJSON.errors) } }() }) } } }) }.call(this);