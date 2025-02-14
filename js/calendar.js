/*!
 * FullCalendar v1.6.4
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(t, e) {
    function n(e) {
        t.extend(!0, Ce, e)
    }

    function r(n, r, c) {
        function u(t) {
            ae ? p() && (S(), M(t)) : f()
        }

        function f() {
            oe = r.theme ? "ui" : "fc", n.addClass("fc"), r.isRTL ? n.addClass("fc-rtl") : n.addClass("fc-ltr"), r.theme && n.addClass("ui-widget"), ae = t("<div class='fc-content' style='position:relative'/>").prependTo(n), ne = new a(ee, r), re = ne.render(), re && n.prepend(re), y(r.defaultView), r.handleWindowResize && t(window).resize(x), m() || v()
        }

        function v() {
            setTimeout(function() {
                !ie.start && m() && C()
            }, 0)
        }

        function h() {
            ie && (te("viewDestroy", ie, ie, ie.element), ie.triggerEventDestroy()), t(window).unbind("resize", x), ne.destroy(), ae.remove(), n.removeClass("fc fc-rtl ui-widget")
        }

        function p() {
            return n.is(":visible")
        }

        function m() {
            return t("body").is(":visible")
        }

        function y(t) {
            ie && t == ie.name || D(t)
        }

        function D(e) {
            he++, ie && (te("viewDestroy", ie, ie, ie.element), Y(), ie.triggerEventDestroy(), G(), ie.element.remove(), ne.deactivateButton(ie.name)), ne.activateButton(e), ie = new Se[e](t("<div class='fc-view fc-view-" + e + "' style='position:relative'/>").appendTo(ae), ee), C(), $(), he--
        }

        function C(t) {
            (!ie.start || t || ie.start > ge || ge >= ie.end) && p() && M(t)
        }

        function M(t) {
            he++, ie.start && (te("viewDestroy", ie, ie, ie.element), Y(), N()), G(), ie.render(ge, t || 0), T(), $(), (ie.afterRender || A)(), _(), P(), te("viewRender", ie, ie, ie.element), ie.trigger("viewDisplay", de), he--, z()
        }

        function E() {
            p() && (Y(), N(), S(), T(), F())
        }

        function S() {
            le = r.contentHeight ? r.contentHeight : r.height ? r.height - (re ? re.height() : 0) - R(ae) : Math.round(ae.width() / Math.max(r.aspectRatio, .5))
        }

        function T() {
            le === e && S(), he++, ie.setHeight(le), ie.setWidth(ae.width()), he--, se = n.outerWidth()
        }

        function x() {
            if (!he)
                if (ie.start) {
                    var t = ++ve;
                    setTimeout(function() {
                        t == ve && !he && p() && se != (se = n.outerWidth()) && (he++, E(), ie.trigger("windowResize", de), he--)
                    }, 200)
                } else v()
        }

        function k() {
            N(), W()
        }

        function H(t) {
            N(), F(t)
        }

        function F(t) {
            p() && (ie.setEventData(pe), ie.renderEvents(pe, t), ie.trigger("eventAfterAllRender"))
        }

        function N() {
            ie.triggerEventDestroy(), ie.clearEvents(), ie.clearEventData()
        }

        function z() {
            !r.lazyFetching || ue(ie.visStart, ie.visEnd) ? W() : F()
        }

        function W() {
            fe(ie.visStart, ie.visEnd)
        }

        function O(t) {
            pe = t, F()
        }

        function L(t) {
            H(t)
        }

        function _() {
            ne.updateTitle(ie.title)
        }

        function P() {
            var t = new Date;
            t >= ie.start && ie.end > t ? ne.disableButton("today") : ne.enableButton("today")
        }

        function q(t, n, r) {
            ie.select(t, n, r === e ? !0 : r)
        }

        function Y() {
            ie && ie.unselect()
        }

        function B() {
            C(-1)
        }

        function j() {
            C(1)
        }

        function I() {
            i(ge, -1), C()
        }

        function X() {
            i(ge, 1), C()
        }

        function J() {
            ge = new Date, C()
        }

        function V(t, e, n) {
            t instanceof Date ? ge = d(t) : g(ge, t, e, n), C()
        }

        function U(t, n, r) {
            t !== e && i(ge, t), n !== e && s(ge, n), r !== e && l(ge, r), C()
        }

        function Z() {
            return d(ge)
        }

        function G() {
            ae.css({
                width: "100%",
                height: ae.height(),
                overflow: "hidden"
            })
        }

        function $() {
            ae.css({
                width: "",
                height: "",
                overflow: ""
            })
        }

        function Q() {
            return ie
        }

        function K(t, n) {
            return n === e ? r[t] : (("height" == t || "contentHeight" == t || "aspectRatio" == t) && (r[t] = n, E()), e)
        }

        function te(t, n) {
            return r[t] ? r[t].apply(n || de, Array.prototype.slice.call(arguments, 2)) : e
        }
        var ee = this;
        ee.options = r, ee.render = u, ee.destroy = h, ee.refetchEvents = k, ee.reportEvents = O, ee.reportEventChange = L, ee.rerenderEvents = H, ee.changeView = y, ee.select = q, ee.unselect = Y, ee.prev = B, ee.next = j, ee.prevYear = I, ee.nextYear = X, ee.today = J, ee.gotoDate = V, ee.incrementDate = U, ee.formatDate = function(t, e) {
            return w(t, e, r)
        }, ee.formatDates = function(t, e, n) {
            return b(t, e, n, r)
        }, ee.getDate = Z, ee.getView = Q, ee.option = K, ee.trigger = te, o.call(ee, r, c);
        var ne, re, ae, oe, ie, se, le, ce, ue = ee.isFetchNeeded,
            fe = ee.fetchEvents,
            de = n[0],
            ve = 0,
            he = 0,
            ge = new Date,
            pe = [];
        g(ge, r.year, r.month, r.date), r.droppable && t(document).bind("dragstart", function(e, n) {
            var a = e.target,
                o = t(a);
            if (!o.parents(".fc").length) {
                var i = r.dropAccept;
                (t.isFunction(i) ? i.call(a, o) : o.is(i)) && (ce = a, ie.dragStart(ce, e, n))
            }
        }).bind("dragstop", function(t, e) {
            ce && (ie.dragStop(ce, t, e), ce = null)
        })
    }

    function a(n, r) {
        function a() {
            v = r.theme ? "ui" : "fc";
            var n = r.header;
            return n ? h = t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(i("left")).append(i("center")).append(i("right"))) : e
        }

        function o() {
            h.remove()
        }

        function i(e) {
            var a = t("<td class='fc-header-" + e + "'/>"),
                o = r.header[e];
            return o && t.each(o.split(" "), function(e) {
                e > 0 && a.append("<span class='fc-header-space'/>");
                var o;
                t.each(this.split(","), function(e, i) {
                    if ("title" == i) a.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"), o && o.addClass(v + "-corner-right"), o = null;
                    else {
                        var s;
                        if (n[i] ? s = n[i] : Se[i] && (s = function() {
                                u.removeClass(v + "-state-hover"), n.changeView(i)
                            }), s) {
                            var l = r.theme ? P(r.buttonIcons, i) : null,
                                c = P(r.buttonText, i),
                                u = t("<span class='fc-button fc-button-" + i + " " + v + "-state-default'>" + (l ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + l + "'/>" + "</span>" : c) + "</span>").click(function() {
                                    u.hasClass(v + "-state-disabled") || s()
                                }).mousedown(function() {
                                    u.not("." + v + "-state-active").not("." + v + "-state-disabled").addClass(v + "-state-down")
                                }).mouseup(function() {
                                    u.removeClass(v + "-state-down")
                                }).hover(function() {
                                    u.not("." + v + "-state-active").not("." + v + "-state-disabled").addClass(v + "-state-hover")
                                }, function() {
                                    u.removeClass(v + "-state-hover").removeClass(v + "-state-down")
                                }).appendTo(a);
                            Y(u), o || u.addClass(v + "-corner-left"), o = u
                        }
                    }
                }), o && o.addClass(v + "-corner-right")
            }), a
        }

        function s(t) {
            h.find("h2").html(t)
        }

        function l(t) {
            h.find("span.fc-button-" + t).addClass(v + "-state-active")
        }

        function c(t) {
            h.find("span.fc-button-" + t).removeClass(v + "-state-active")
        }

        function u(t) {
            h.find("span.fc-button-" + t).addClass(v + "-state-disabled")
        }

        function f(t) {
            h.find("span.fc-button-" + t).removeClass(v + "-state-disabled")
        }
        var d = this;
        d.render = a, d.destroy = o, d.updateTitle = s, d.activateButton = l, d.deactivateButton = c, d.disableButton = u, d.enableButton = f;
        var v, h = t([])
    }

    function o(n, r) {
        function a(t, e) {
            return !E || E > t || e > S
        }

        function o(t, e) {
            E = t, S = e, W = [];
            var n = ++R,
                r = F.length;
            N = r;
            for (var a = 0; r > a; a++) i(F[a], n)
        }

        function i(e, r) {
            s(e, function(a) {
                if (r == R) {
                    if (a) {
                        n.eventDataTransform && (a = t.map(a, n.eventDataTransform)), e.eventDataTransform && (a = t.map(a, e.eventDataTransform));
                        for (var o = 0; a.length > o; o++) a[o].source = e, w(a[o]);
                        W = W.concat(a)
                    }
                    N--, N || k(W)
                }
            })
        }

        function s(r, a) {
            var o, i, l = Ee.sourceFetchers;
            for (o = 0; l.length > o; o++) {
                if (i = l[o](r, E, S, a), i === !0) return;
                if ("object" == typeof i) return s(i, a), e
            }
            var c = r.events;
            if (c) t.isFunction(c) ? (m(), c(d(E), d(S), function(t) {
                a(t), y()
            })) : t.isArray(c) ? a(c) : a();
            else {
                var u = r.url;
                if (u) {
                    var f, v = r.success,
                        h = r.error,
                        g = r.complete;
                    f = t.isFunction(r.data) ? r.data() : r.data;
                    var p = t.extend({}, f || {}),
                        w = X(r.startParam, n.startParam),
                        b = X(r.endParam, n.endParam);
                    w && (p[w] = Math.round(+E / 1e3)), b && (p[b] = Math.round(+S / 1e3)), m(), t.ajax(t.extend({}, Te, r, {
                        data: p,
                        success: function(e) {
                            e = e || [];
                            var n = I(v, this, arguments);
                            t.isArray(n) && (e = n), a(e)
                        },
                        error: function() {
                            I(h, this, arguments), a()
                        },
                        complete: function() {
                            I(g, this, arguments), y()
                        }
                    }))
                } else a()
            }
        }

        function l(t) {
            t = c(t), t && (N++, i(t, R))
        }

        function c(n) {
            return t.isFunction(n) || t.isArray(n) ? n = {
                events: n
            } : "string" == typeof n && (n = {
                url: n
            }), "object" == typeof n ? (b(n), F.push(n), n) : e
        }

        function u(e) {
            F = t.grep(F, function(t) {
                return !D(t, e)
            }), W = t.grep(W, function(t) {
                return !D(t.source, e)
            }), k(W)
        }

        function f(t) {
            var e, n, r = W.length,
                a = x().defaultEventEnd,
                o = t.start - t._start,
                i = t.end ? t.end - (t._end || a(t)) : 0;
            for (e = 0; r > e; e++) n = W[e], n._id == t._id && n != t && (n.start = new Date(+n.start + o), n.end = t.end ? n.end ? new Date(+n.end + i) : new Date(+a(n) + i) : null, n.title = t.title, n.url = t.url, n.allDay = t.allDay, n.className = t.className, n.editable = t.editable, n.color = t.color, n.backgroundColor = t.backgroundColor, n.borderColor = t.borderColor, n.textColor = t.textColor, w(n));
            w(t), k(W)
        }

        function v(t, e) {
            w(t), t.source || (e && (H.events.push(t), t.source = H), W.push(t)), k(W)
        }

        function h(e) {
            if (e) {
                if (!t.isFunction(e)) {
                    var n = e + "";
                    e = function(t) {
                        return t._id == n
                    }
                }
                W = t.grep(W, e, !0);
                for (var r = 0; F.length > r; r++) t.isArray(F[r].events) && (F[r].events = t.grep(F[r].events, e, !0))
            } else {
                W = [];
                for (var r = 0; F.length > r; r++) t.isArray(F[r].events) && (F[r].events = [])
            }
            k(W)
        }

        function g(e) {
            return t.isFunction(e) ? t.grep(W, e) : e ? (e += "", t.grep(W, function(t) {
                return t._id == e
            })) : W
        }

        function m() {
            z++ || T("loading", null, !0, x())
        }

        function y() {
            --z || T("loading", null, !1, x())
        }

        function w(t) {
            var r = t.source || {},
                a = X(r.ignoreTimezone, n.ignoreTimezone);
            t._id = t._id || (t.id === e ? "_fc" + xe++ : t.id + ""), t.date && (t.start || (t.start = t.date), delete t.date), t._start = d(t.start = p(t.start, a)), t.end = p(t.end, a), t.end && t.end <= t.start && (t.end = null), t._end = t.end ? d(t.end) : null, t.allDay === e && (t.allDay = X(r.allDayDefault, n.allDayDefault)), t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = []
        }

        function b(t) {
            t.className ? "string" == typeof t.className && (t.className = t.className.split(/\s+/)) : t.className = [];
            for (var e = Ee.sourceNormalizers, n = 0; e.length > n; n++) e[n](t)
        }

        function D(t, e) {
            return t && e && C(t) == C(e)
        }

        function C(t) {
            return ("object" == typeof t ? t.events || t.url : "") || t
        }
        var M = this;
        M.isFetchNeeded = a, M.fetchEvents = o, M.addEventSource = l, M.removeEventSource = u, M.updateEvent = f, M.renderEvent = v, M.removeEvents = h, M.clientEvents = g, M.normalizeEvent = w;
        for (var E, S, T = M.trigger, x = M.getView, k = M.reportEvents, H = {
                events: []
            }, F = [H], R = 0, N = 0, z = 0, W = [], A = 0; r.length > A; A++) c(r[A])
    }

    function i(t, e, n) {
        return t.setFullYear(t.getFullYear() + e), n || f(t), t
    }

    function s(t, e, n) {
        if (+t) {
            var r = t.getMonth() + e,
                a = d(t);
            for (a.setDate(1), a.setMonth(r), t.setMonth(r), n || f(t); t.getMonth() != a.getMonth();) t.setDate(t.getDate() + (a > t ? 1 : -1))
        }
        return t
    }

    function l(t, e, n) {
        if (+t) {
            var r = t.getDate() + e,
                a = d(t);
            a.setHours(9), a.setDate(r), t.setDate(r), n || f(t), c(t, a)
        }
        return t
    }

    function c(t, e) {
        if (+t)
            for (; t.getDate() != e.getDate();) t.setTime(+t + (e > t ? 1 : -1) * Fe)
    }

    function u(t, e) {
        return t.setMinutes(t.getMinutes() + e), t
    }

    function f(t) {
        return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), t
    }

    function d(t, e) {
        return e ? f(new Date(+t)) : new Date(+t)
    }

    function v() {
        var t, e = 0;
        do t = new Date(1970, e++, 1); while (t.getHours());
        return t
    }

    function h(t, e) {
        return Math.round((d(t, !0) - d(e, !0)) / He)
    }

    function g(t, n, r, a) {
        n !== e && n != t.getFullYear() && (t.setDate(1), t.setMonth(0), t.setFullYear(n)), r !== e && r != t.getMonth() && (t.setDate(1), t.setMonth(r)), a !== e && t.setDate(a)
    }

    function p(t, n) {
        return "object" == typeof t ? t : "number" == typeof t ? new Date(1e3 * t) : "string" == typeof t ? t.match(/^\d+(\.\d+)?$/) ? new Date(1e3 * parseFloat(t)) : (n === e && (n = !0), m(t, n) || (t ? new Date(t) : null)) : null
    }

    function m(t, e) {
        var n = t.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
        if (!n) return null;
        var r = new Date(n[1], 0, 1);
        if (e || !n[13]) {
            var a = new Date(n[1], 0, 1, 9, 0);
            n[3] && (r.setMonth(n[3] - 1), a.setMonth(n[3] - 1)), n[5] && (r.setDate(n[5]), a.setDate(n[5])), c(r, a), n[7] && r.setHours(n[7]), n[8] && r.setMinutes(n[8]), n[10] && r.setSeconds(n[10]), n[12] && r.setMilliseconds(1e3 * Number("0." + n[12])), c(r, a)
        } else if (r.setUTCFullYear(n[1], n[3] ? n[3] - 1 : 0, n[5] || 1), r.setUTCHours(n[7] || 0, n[8] || 0, n[10] || 0, n[12] ? 1e3 * Number("0." + n[12]) : 0), n[14]) {
            var o = 60 * Number(n[16]) + (n[18] ? Number(n[18]) : 0);
            o *= "-" == n[15] ? 1 : -1, r = new Date(+r + 1e3 * 60 * o)
        }
        return r
    }

    function y(t) {
        if ("number" == typeof t) return 60 * t;
        if ("object" == typeof t) return 60 * t.getHours() + t.getMinutes();
        var e = t.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
        if (e) {
            var n = parseInt(e[1], 10);
            return e[3] && (n %= 12, "p" == e[3].toLowerCase().charAt(0) && (n += 12)), 60 * n + (e[2] ? parseInt(e[2], 10) : 0)
        }
    }

    function w(t, e, n) {
        return b(t, null, e, n)
    }

    function b(t, e, n, r) {
        r = r || Ce;
        var a, o, i, s, l = t,
            c = e,
            u = n.length,
            f = "";
        for (a = 0; u > a; a++)
            if (o = n.charAt(a), "'" == o) {
                for (i = a + 1; u > i; i++)
                    if ("'" == n.charAt(i)) {
                        l && (f += i == a + 1 ? "'" : n.substring(a + 1, i), a = i);
                        break
                    }
            } else if ("(" == o) {
            for (i = a + 1; u > i; i++)
                if (")" == n.charAt(i)) {
                    var d = w(l, n.substring(a + 1, i), r);
                    parseInt(d.replace(/\D/, ""), 10) && (f += d), a = i;
                    break
                }
        } else if ("[" == o) {
            for (i = a + 1; u > i; i++)
                if ("]" == n.charAt(i)) {
                    var v = n.substring(a + 1, i),
                        d = w(l, v, r);
                    d != w(c, v, r) && (f += d), a = i;
                    break
                }
        } else if ("{" == o) l = e, c = t;
        else if ("}" == o) l = t, c = e;
        else {
            for (i = u; i > a; i--)
                if (s = Ne[n.substring(a, i)]) {
                    l && (f += s(l, r)), a = i - 1;
                    break
                }
            i == a && l && (f += o)
        }
        return f
    }

    function D(t) {
        var e, n = new Date(t.getTime());
        return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), e = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((e - n) / 864e5) / 7) + 1
    }

    function C(t) {
        return t.end ? M(t.end, t.allDay) : l(d(t.start), 1)
    }

    function M(t, e) {
        return t = d(t), e || t.getHours() || t.getMinutes() ? l(t, 1) : f(t)
    }

    function E(n, r, a) {
        n.unbind("mouseover").mouseover(function(n) {
            for (var o, i, s, l = n.target; l != this;) o = l, l = l.parentNode;
            (i = o._fci) !== e && (o._fci = e, s = r[i], a(s.event, s.element, s), t(n.target).trigger(n)), n.stopPropagation()
        })
    }

    function S(e, n, r) {
        for (var a, o = 0; e.length > o; o++) a = t(e[o]), a.width(Math.max(0, n - x(a, r)))
    }

    function T(e, n, r) {
        for (var a, o = 0; e.length > o; o++) a = t(e[o]), a.height(Math.max(0, n - R(a, r)))
    }

    function x(t, e) {
        return k(t) + F(t) + (e ? H(t) : 0)
    }

    function k(e) {
        return (parseFloat(t.css(e[0], "paddingLeft", !0)) || 0) + (parseFloat(t.css(e[0], "paddingRight", !0)) || 0)
    }

    function H(e) {
        return (parseFloat(t.css(e[0], "marginLeft", !0)) || 0) + (parseFloat(t.css(e[0], "marginRight", !0)) || 0)
    }

    function F(e) {
        return (parseFloat(t.css(e[0], "borderLeftWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderRightWidth", !0)) || 0)
    }

    function R(t, e) {
        return N(t) + W(t) + (e ? z(t) : 0)
    }

    function N(e) {
        return (parseFloat(t.css(e[0], "paddingTop", !0)) || 0) + (parseFloat(t.css(e[0], "paddingBottom", !0)) || 0)
    }

    function z(e) {
        return (parseFloat(t.css(e[0], "marginTop", !0)) || 0) + (parseFloat(t.css(e[0], "marginBottom", !0)) || 0)
    }

    function W(e) {
        return (parseFloat(t.css(e[0], "borderTopWidth", !0)) || 0) + (parseFloat(t.css(e[0], "borderBottomWidth", !0)) || 0)
    }

    function A() {}

    function O(t, e) {
        return t - e
    }

    function L(t) {
        return Math.max.apply(Math, t)
    }

    function _(t) {
        return (10 > t ? "0" : "") + t
    }

    function P(t, n) {
        if (t[n] !== e) return t[n];
        for (var r, a = n.split(/(?=[A-Z])/), o = a.length - 1; o >= 0; o--)
            if (r = t[a[o].toLowerCase()], r !== e) return r;
        return t[""]
    }

    function q(t) {
        return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function Y(t) {
        t.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
            return !1
        })
    }

    function B(t) {
        t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
    }

    function j(t, e) {
        var n = t.source || {},
            r = t.color,
            a = n.color,
            o = e("eventColor"),
            i = t.backgroundColor || r || n.backgroundColor || a || e("eventBackgroundColor") || o,
            s = t.borderColor || r || n.borderColor || a || e("eventBorderColor") || o,
            l = t.textColor || n.textColor || e("eventTextColor"),
            c = [];
        return i && c.push("background-color:" + i), s && c.push("border-color:" + s), l && c.push("color:" + l), c.join(";")
    }

    function I(e, n, r) {
        if (t.isFunction(e) && (e = [e]), e) {
            var a, o;
            for (a = 0; e.length > a; a++) o = e[a].apply(n, r) || o;
            return o
        }
    }

    function X() {
        for (var t = 0; arguments.length > t; t++)
            if (arguments[t] !== e) return arguments[t]
    }

    function J(t, e) {
        function n(t, e) {
            e && (s(t, e), t.setDate(1));
            var n = a("firstDay"),
                f = d(t, !0);
            f.setDate(1);
            var v = s(d(f), 1),
                g = d(f);
            l(g, -((g.getDay() - n + 7) % 7)), i(g);
            var p = d(v);
            l(p, (7 - p.getDay() + n) % 7), i(p, -1, !0);
            var m = c(),
                y = Math.round(h(p, g) / 7);
            "fixed" == a("weekMode") && (l(p, 7 * (6 - y)), y = 6), r.title = u(f, a("titleFormat")), r.start = f, r.end = v, r.visStart = g, r.visEnd = p, o(y, m, !0)
        }
        var r = this;
        r.render = n, Z.call(r, t, e, "month");
        var a = r.opt,
            o = r.renderBasic,
            i = r.skipHiddenDays,
            c = r.getCellsPerWeek,
            u = e.formatDate
    }

    function V(t, e) {
        function n(t, e) {
            e && l(t, 7 * e);
            var n = l(d(t), -((t.getDay() - a("firstDay") + 7) % 7)),
                u = l(d(n), 7),
                f = d(n);
            i(f);
            var v = d(u);
            i(v, -1, !0);
            var h = s();
            r.start = n, r.end = u, r.visStart = f, r.visEnd = v, r.title = c(f, l(d(v), -1), a("titleFormat")), o(1, h, !1)
        }
        var r = this;
        r.render = n, Z.call(r, t, e, "basicWeek");
        var a = r.opt,
            o = r.renderBasic,
            i = r.skipHiddenDays,
            s = r.getCellsPerWeek,
            c = e.formatDates
    }

    function U(t, e) {
        function n(t, e) {
            e && l(t, e), i(t, 0 > e ? -1 : 1);
            var n = d(t, !0),
                c = l(d(n), 1);
            r.title = s(t, a("titleFormat")), r.start = r.visStart = n, r.end = r.visEnd = c, o(1, 1, !1)
        }
        var r = this;
        r.render = n, Z.call(r, t, e, "basicDay");
        var a = r.opt,
            o = r.renderBasic,
            i = r.skipHiddenDays,
            s = e.formatDate
    }

    function Z(e, n, r) {
        function a(t, e, n) {
            ee = t, ne = e, re = n, o(), j || i(), s()
        }

        function o() {
            le = he("theme") ? "ui" : "fc", ce = he("columnFormat"), ue = he("weekNumbers"), de = he("weekNumberTitle"), ve = "iso" != he("weekNumberCalculation") ? "w" : "W"
        }

        function i() {
            Z = t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(e)
        }

        function s() {
            var n = c();
            L && L.remove(), L = t(n).appendTo(e), _ = L.find("thead"), P = _.find(".fc-day-header"), j = L.find("tbody"), I = j.find("tr"), X = j.find(".fc-day"), J = I.find("td:first-child"), V = I.eq(0).find(".fc-day > div"), U = I.eq(0).find(".fc-day-content > div"), B(_.add(_.find("tr"))), B(I), I.eq(0).addClass("fc-first"), I.filter(":last").addClass("fc-last"), X.each(function(e, n) {
                var r = Ee(Math.floor(e / ne), e % ne);
                ge("dayRender", O, r, t(n))
            }), y(X)
        }

        function c() {
            var t = "<table class='fc-border-separate' style='width:100%' cellspacing='0'>" + u() + v() + "</table>";
            return t
        }

        function u() {
            var t, e, n = le + "-widget-header",
                r = "";
            for (r += "<thead><tr>", ue && (r += "<th class='fc-week-number " + n + "'>" + q(de) + "</th>"), t = 0; ne > t; t++) e = Ee(0, t), r += "<th class='fc-day-header fc-" + ke[e.getDay()] + " " + n + "'>" + q(xe(e, ce)) + "</th>";
            return r += "</tr></thead>"
        }

        function v() {
            var t, e, n, r = le + "-widget-content",
                a = "";
            for (a += "<tbody>", t = 0; ee > t; t++) {
                for (a += "<tr class='fc-week'>", ue && (n = Ee(t, 0), a += "<td class='fc-week-number " + r + "'>" + "<div>" + q(xe(n, ve)) + "</div>" + "</td>"), e = 0; ne > e; e++) n = Ee(t, e), a += h(n);
                a += "</tr>"
            }
            return a += "</tbody>"
        }

        function h(t) {
            var e = le + "-widget-content",
                n = O.start.getMonth(),
                r = f(new Date),
                a = "",
                o = ["fc-day", "fc-" + ke[t.getDay()], e];
            return t.getMonth() != n && o.push("fc-other-month"), +t == +r ? o.push("fc-today", le + "-state-highlight") : r > t ? o.push("fc-past") : o.push("fc-future"), a += "<td class='" + o.join(" ") + "'" + " data-date='" + xe(t, "yyyy-MM-dd") + "'" + ">" + "<div>", re && (a += "<div class='fc-day-number'>" + t.getDate() + "</div>"), a += "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"
        }

        function g(e) {
            Q = e;
            var n, r, a, o = Q - _.height();
            "variable" == he("weekMode") ? n = r = Math.floor(o / (1 == ee ? 2 : 6)) : (n = Math.floor(o / ee), r = o - n * (ee - 1)), J.each(function(e, o) {
                ee > e && (a = t(o), a.find("> div").css("min-height", (e == ee - 1 ? r : n) - R(a)))
            })
        }

        function p(t) {
            $ = t, ie.clear(), se.clear(), te = 0, ue && (te = _.find("th.fc-week-number").outerWidth()), K = Math.floor(($ - te) / ne), S(P.slice(0, -1), K)
        }

        function y(t) {
            t.click(w).mousedown(Me)
        }

        function w(e) {
            if (!he("selectable")) {
                var n = m(t(this).data("date"));
                ge("dayClick", this, n, !0, e)
            }
        }

        function b(t, e, n) {
            n && ae.build();
            for (var r = Te(t, e), a = 0; r.length > a; a++) {
                var o = r[a];
                y(D(o.row, o.leftCol, o.row, o.rightCol))
            }
        }

        function D(t, n, r, a) {
            var o = ae.rect(t, n, r, a, e);
            return be(o, e)
        }

        function C(t) {
            return d(t)
        }

        function M(t, e) {
            b(t, l(d(e), 1), !0)
        }

        function E() {
            Ce()
        }

        function T(t, e, n) {
            var r = Se(t),
                a = X[r.row * ne + r.col];
            ge("dayClick", a, t, e, n)
        }

        function x(t, e) {
            oe.start(function(t) {
                Ce(), t && D(t.row, t.col, t.row, t.col)
            }, e)
        }

        function k(t, e, n) {
            var r = oe.stop();
            if (Ce(), r) {
                var a = Ee(r);
                ge("drop", t, a, !0, e, n)
            }
        }

        function H(t) {
            return d(t.start)
        }

        function F(t) {
            return ie.left(t)
        }

        function N(t) {
            return ie.right(t)
        }

        function z(t) {
            return se.left(t)
        }

        function W(t) {
            return se.right(t)
        }

        function A(t) {
            return I.eq(t)
        }
        var O = this;
        O.renderBasic = a, O.setHeight = g, O.setWidth = p, O.renderDayOverlay = b, O.defaultSelectionEnd = C, O.renderSelection = M, O.clearSelection = E, O.reportDayClick = T, O.dragStart = x, O.dragStop = k, O.defaultEventEnd = H, O.getHoverListener = function() {
            return oe
        }, O.colLeft = F, O.colRight = N, O.colContentLeft = z, O.colContentRight = W, O.getIsCellAllDay = function() {
            return !0
        }, O.allDayRow = A, O.getRowCnt = function() {
            return ee
        }, O.getColCnt = function() {
            return ne
        }, O.getColWidth = function() {
            return K
        }, O.getDaySegmentContainer = function() {
            return Z
        }, fe.call(O, e, n, r), me.call(O), pe.call(O), G.call(O);
        var L, _, P, j, I, X, J, V, U, Z, $, Q, K, te, ee, ne, re, ae, oe, ie, se, le, ce, ue, de, ve, he = O.opt,
            ge = O.trigger,
            be = O.renderOverlay,
            Ce = O.clearOverlays,
            Me = O.daySelectionMousedown,
            Ee = O.cellToDate,
            Se = O.dateToCell,
            Te = O.rangeToSegments,
            xe = n.formatDate;
        Y(e.addClass("fc-grid")), ae = new ye(function(e, n) {
            var r, a, o;
            P.each(function(e, i) {
                r = t(i), a = r.offset().left, e && (o[1] = a), o = [a], n[e] = o
            }), o[1] = a + r.outerWidth(), I.each(function(n, i) {
                ee > n && (r = t(i), a = r.offset().top, n && (o[1] = a), o = [a], e[n] = o)
            }), o[1] = a + r.outerHeight()
        }), oe = new we(ae), ie = new De(function(t) {
            return V.eq(t)
        }), se = new De(function(t) {
            return U.eq(t)
        })
    }

    function G() {
        function t(t, e) {
            n.renderDayEvents(t, e)
        }

        function e() {
            n.getDaySegmentContainer().empty()
        }
        var n = this;
        n.renderEvents = t, n.clearEvents = e, de.call(n)
    }

    function $(t, e) {
        function n(t, e) {
            e && l(t, 7 * e);
            var n = l(d(t), -((t.getDay() - a("firstDay") + 7) % 7)),
                u = l(d(n), 7),
                f = d(n);
            i(f);
            var v = d(u);
            i(v, -1, !0);
            var h = s();
            r.title = c(f, l(d(v), -1), a("titleFormat")), r.start = n, r.end = u, r.visStart = f, r.visEnd = v, o(h)
        }
        var r = this;
        r.render = n, K.call(r, t, e, "agendaWeek");
        var a = r.opt,
            o = r.renderAgenda,
            i = r.skipHiddenDays,
            s = r.getCellsPerWeek,
            c = e.formatDates
    }

    function Q(t, e) {
        function n(t, e) {
            e && l(t, e), i(t, 0 > e ? -1 : 1);
            var n = d(t, !0),
                c = l(d(n), 1);
            r.title = s(t, a("titleFormat")), r.start = r.visStart = n, r.end = r.visEnd = c, o(1)
        }
        var r = this;
        r.render = n, K.call(r, t, e, "agendaDay");
        var a = r.opt,
            o = r.renderAgenda,
            i = r.skipHiddenDays,
            s = e.formatDate
    }

    function K(n, r, a) {
        function o(t) {
            We = t, i(), K ? c() : s()
        }

        function i() {
            qe = Ue("theme") ? "ui" : "fc", Ye = Ue("isRTL"), Be = y(Ue("minTime")), je = y(Ue("maxTime")), Ie = Ue("columnFormat"), Xe = Ue("weekNumbers"), Je = Ue("weekNumberTitle"), Ve = "iso" != Ue("weekNumberCalculation") ? "w" : "W", Re = Ue("snapMinutes") || Ue("slotMinutes")
        }

        function s() {
            var e, r, a, o, i, s = qe + "-widget-header",
                l = qe + "-widget-content",
                f = 0 == Ue("slotMinutes") % 15;
            for (c(), ce = t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n), Ue("allDaySlot") ? (ue = t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ce), e = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + s + " fc-agenda-axis'>" + Ue("allDayText") + "</th>" + "<td>" + "<div class='fc-day-content'><div style='position:relative'/></div>" + "</td>" + "<th class='" + s + " fc-agenda-gutter'>&nbsp;</th>" + "</tr>" + "</table>", de = t(e).appendTo(ce), ve = de.find("tr"), C(ve.find("td")), ce.append("<div class='fc-agenda-divider " + s + "'>" + "<div class='fc-agenda-divider-inner'/>" + "</div>")) : ue = t([]), he = t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ce), ge = t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(he), be = t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ge), e = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", r = v(), o = u(d(r), je), u(r, Be), Ae = 0, a = 0; o > r; a++) i = r.getMinutes(), e += "<tr class='fc-slot" + a + " " + (i ? "fc-minor" : "") + "'>" + "<th class='fc-agenda-axis " + s + "'>" + (f && i ? "&nbsp;" : on(r, Ue("axisFormat"))) + "</th>" + "<td class='" + l + "'>" + "<div style='position:relative'>&nbsp;</div>" + "</td>" + "</tr>", u(r, Ue("slotMinutes")), Ae++;
            e += "</tbody></table>", Ce = t(e).appendTo(ge), M(Ce.find("td"))
        }

        function c() {
            var e = h();
            K && K.remove(), K = t(e).appendTo(n), ee = K.find("thead"), ne = ee.find("th").slice(1, -1), re = K.find("tbody"), ae = re.find("td").slice(0, -1), oe = ae.find("> div"), ie = ae.find(".fc-day-content > div"), se = ae.eq(0), le = oe.eq(0), B(ee.add(ee.find("tr"))), B(re.add(re.find("tr")))
        }

        function h() {
            var t = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>" + g() + p() + "</table>";
            return t
        }

        function g() {
            var t, e, n, r = qe + "-widget-header",
                a = "";
            for (a += "<thead><tr>", Xe ? (t = nn(0, 0), e = on(t, Ve), Ye ? e += Je : e = Je + e, a += "<th class='fc-agenda-axis fc-week-number " + r + "'>" + q(e) + "</th>") : a += "<th class='fc-agenda-axis " + r + "'>&nbsp;</th>", n = 0; We > n; n++) t = nn(0, n), a += "<th class='fc-" + ke[t.getDay()] + " fc-col" + n + " " + r + "'>" + q(on(t, Ie)) + "</th>";
            return a += "<th class='fc-agenda-gutter " + r + "'>&nbsp;</th>" + "</tr>" + "</thead>"
        }

        function p() {
            var t, e, n, r, a, o = qe + "-widget-header",
                i = qe + "-widget-content",
                s = f(new Date),
                l = "";
            for (l += "<tbody><tr><th class='fc-agenda-axis " + o + "'>&nbsp;</th>", n = "", e = 0; We > e; e++) t = nn(0, e), a = ["fc-col" + e, "fc-" + ke[t.getDay()], i], +t == +s ? a.push(qe + "-state-highlight", "fc-today") : s > t ? a.push("fc-past") : a.push("fc-future"), r = "<td class='" + a.join(" ") + "'>" + "<div>" + "<div class='fc-day-content'>" + "<div style='position:relative'>&nbsp;</div>" + "</div>" + "</div>" + "</td>", n += r;
            return l += n, l += "<td class='fc-agenda-gutter " + i + "'>&nbsp;</td>" + "</tr>" + "</tbody>"
        }

        function m(t) {
            t === e && (t = Se), Se = t, sn = {};
            var n = re.position().top,
                r = he.position().top,
                a = Math.min(t - n, Ce.height() + r + 1);
            le.height(a - R(se)), ce.css("top", n), he.height(a - r - 1), Fe = Ce.find("tr:first").height() + 1, Ne = Ue("slotMinutes") / Re, ze = Fe / Ne
        }

        function w(e) {
            Ee = e, _e.clear(), Pe.clear();
            var n = ee.find("th:first");
            de && (n = n.add(de.find("th:first"))), n = n.add(Ce.find("th:first")), Te = 0, S(n.width("").each(function(e, n) {
                Te = Math.max(Te, t(n).outerWidth())
            }), Te);
            var r = K.find(".fc-agenda-gutter");
            de && (r = r.add(de.find("th.fc-agenda-gutter")));
            var a = he[0].clientWidth;
            He = he.width() - a, He ? (S(r, He), r.show().prev().removeClass("fc-last")) : r.hide().prev().addClass("fc-last"), xe = Math.floor((a - Te) / We), S(ne.slice(0, -1), xe)
        }

        function b() {
            function t() {
                he.scrollTop(r)
            }
            var e = v(),
                n = d(e);
            n.setHours(Ue("firstHour"));
            var r = _(e, n) + 1;
            t(), setTimeout(t, 0)
        }

        function D() {
            b()
        }

        function C(t) {
            t.click(E).mousedown(tn)
        }

        function M(t) {
            t.click(E).mousedown(U)
        }

        function E(t) {
            if (!Ue("selectable")) {
                var e = Math.min(We - 1, Math.floor((t.pageX - K.offset().left - Te) / xe)),
                    n = nn(0, e),
                    r = this.parentNode.className.match(/fc-slot(\d+)/);
                if (r) {
                    var a = parseInt(r[1]) * Ue("slotMinutes"),
                        o = Math.floor(a / 60);
                    n.setHours(o), n.setMinutes(a % 60 + Be), Ze("dayClick", ae[e], n, !1, t)
                } else Ze("dayClick", ae[e], n, !0, t)
            }
        }

        function x(t, e, n) {
            n && Oe.build();
            for (var r = an(t, e), a = 0; r.length > a; a++) {
                var o = r[a];
                C(k(o.row, o.leftCol, o.row, o.rightCol))
            }
        }

        function k(t, e, n, r) {
            var a = Oe.rect(t, e, n, r, ce);
            return Ge(a, ce)
        }

        function H(t, e) {
            for (var n = 0; We > n; n++) {
                var r = nn(0, n),
                    a = l(d(r), 1),
                    o = new Date(Math.max(r, t)),
                    i = new Date(Math.min(a, e));
                if (i > o) {
                    var s = Oe.rect(0, n, 0, n, ge),
                        c = _(r, o),
                        u = _(r, i);
                    s.top = c, s.height = u - c, M(Ge(s, ge))
                }
            }
        }

        function F(t) {
            return _e.left(t)
        }

        function N(t) {
            return Pe.left(t)
        }

        function z(t) {
            return _e.right(t)
        }

        function W(t) {
            return Pe.right(t)
        }

        function A(t) {
            return Ue("allDaySlot") && !t.row
        }

        function L(t) {
            var e = nn(0, t.col),
                n = t.row;
            return Ue("allDaySlot") && n--, n >= 0 && u(e, Be + n * Re), e
        }

        function _(t, n) {
            if (t = d(t, !0), u(d(t), Be) > n) return 0;
            if (n >= u(d(t), je)) return Ce.height();
            var r = Ue("slotMinutes"),
                a = 60 * n.getHours() + n.getMinutes() - Be,
                o = Math.floor(a / r),
                i = sn[o];
            return i === e && (i = sn[o] = Ce.find("tr").eq(o).find("td div")[0].offsetTop), Math.max(0, Math.round(i - 1 + Fe * (a % r / r)))
        }

        function P() {
            return ve
        }

        function j(t) {
            var e = d(t.start);
            return t.allDay ? e : u(e, Ue("defaultEventMinutes"))
        }

        function I(t, e) {
            return e ? d(t) : u(d(t), Ue("slotMinutes"))
        }

        function X(t, e, n) {
            n ? Ue("allDaySlot") && x(t, l(d(e), 1), !0) : J(t, e)
        }

        function J(e, n) {
            var r = Ue("selectHelper");
            if (Oe.build(), r) {
                var a = rn(e).col;
                if (a >= 0 && We > a) {
                    var o = Oe.rect(0, a, 0, a, ge),
                        i = _(e, e),
                        s = _(e, n);
                    if (s > i) {
                        if (o.top = i, o.height = s - i, o.left += 2, o.width -= 5, t.isFunction(r)) {
                            var l = r(e, n);
                            l && (o.position = "absolute", Me = t(l).css(o).appendTo(ge))
                        } else o.isStart = !0, o.isEnd = !0, Me = t(en({
                            title: "",
                            start: e,
                            end: n,
                            className: ["fc-select-helper"],
                            editable: !1
                        }, o)), Me.css("opacity", Ue("dragOpacity"));
                        Me && (M(Me), ge.append(Me), S(Me, o.width, !0), T(Me, o.height, !0))
                    }
                }
            } else H(e, n)
        }

        function V() {
            $e(), Me && (Me.remove(), Me = null)
        }

        function U(e) {
            if (1 == e.which && Ue("selectable")) {
                Ke(e);
                var n;
                Le.start(function(t, e) {
                    if (V(), t && t.col == e.col && !A(t)) {
                        var r = L(e),
                            a = L(t);
                        n = [r, u(d(r), Re), a, u(d(a), Re)].sort(O), J(n[0], n[3])
                    } else n = null
                }, e), t(document).one("mouseup", function(t) {
                    Le.stop(), n && (+n[0] == +n[1] && Z(n[0], !1, t), Qe(n[0], n[3], !1, t))
                })
            }
        }

        function Z(t, e, n) {
            Ze("dayClick", ae[rn(t).col], t, e, n)
        }

        function G(t, e) {
            Le.start(function(t) {
                if ($e(), t)
                    if (A(t)) k(t.row, t.col, t.row, t.col);
                    else {
                        var e = L(t),
                            n = u(d(e), Ue("defaultEventMinutes"));
                        H(e, n)
                    }
            }, e)
        }

        function $(t, e, n) {
            var r = Le.stop();
            $e(), r && Ze("drop", t, L(r), A(r), e, n)
        }
        var Q = this;
        Q.renderAgenda = o, Q.setWidth = w, Q.setHeight = m, Q.afterRender = D, Q.defaultEventEnd = j, Q.timePosition = _, Q.getIsCellAllDay = A, Q.allDayRow = P, Q.getCoordinateGrid = function() {
            return Oe
        }, Q.getHoverListener = function() {
            return Le
        }, Q.colLeft = F, Q.colRight = z, Q.colContentLeft = N, Q.colContentRight = W, Q.getDaySegmentContainer = function() {
            return ue
        }, Q.getSlotSegmentContainer = function() {
            return be
        }, Q.getMinMinute = function() {
            return Be
        }, Q.getMaxMinute = function() {
            return je
        }, Q.getSlotContainer = function() {
            return ge
        }, Q.getRowCnt = function() {
            return 1
        }, Q.getColCnt = function() {
            return We
        }, Q.getColWidth = function() {
            return xe
        }, Q.getSnapHeight = function() {
            return ze
        }, Q.getSnapMinutes = function() {
            return Re
        }, Q.defaultSelectionEnd = I, Q.renderDayOverlay = x, Q.renderSelection = X, Q.clearSelection = V, Q.reportDayClick = Z, Q.dragStart = G, Q.dragStop = $, fe.call(Q, n, r, a), me.call(Q), pe.call(Q), te.call(Q);
        var K, ee, ne, re, ae, oe, ie, se, le, ce, ue, de, ve, he, ge, be, Ce, Me, Ee, Se, Te, xe, He, Fe, Re, Ne, ze, We, Ae, Oe, Le, _e, Pe, qe, Ye, Be, je, Ie, Xe, Je, Ve, Ue = Q.opt,
            Ze = Q.trigger,
            Ge = Q.renderOverlay,
            $e = Q.clearOverlays,
            Qe = Q.reportSelection,
            Ke = Q.unselect,
            tn = Q.daySelectionMousedown,
            en = Q.slotSegHtml,
            nn = Q.cellToDate,
            rn = Q.dateToCell,
            an = Q.rangeToSegments,
            on = r.formatDate,
            sn = {};
        Y(n.addClass("fc-agenda")), Oe = new ye(function(e, n) {
            function r(t) {
                return Math.max(l, Math.min(c, t))
            }
            var a, o, i;
            ne.each(function(e, r) {
                a = t(r), o = a.offset().left, e && (i[1] = o), i = [o], n[e] = i
            }), i[1] = o + a.outerWidth(), Ue("allDaySlot") && (a = ve, o = a.offset().top, e[0] = [o, o + a.outerHeight()]);
            for (var s = ge.offset().top, l = he.offset().top, c = l + he.outerHeight(), u = 0; Ae * Ne > u; u++) e.push([r(s + ze * u), r(s + ze * (u + 1))])
        }), Le = new we(Oe), _e = new De(function(t) {
            return oe.eq(t)
        }), Pe = new De(function(t) {
            return ie.eq(t)
        })
    }

    function te() {
        function n(t, e) {
            var n, r = t.length,
                o = [],
                i = [];
            for (n = 0; r > n; n++) t[n].allDay ? o.push(t[n]) : i.push(t[n]);
            y("allDaySlot") && (te(o, e), k()), s(a(i), e)
        }

        function r() {
            H().empty(), F().empty()
        }

        function a(e) {
            var n, r, a, s, l, c = Y(),
                f = W(),
                v = z(),
                h = t.map(e, i),
                g = [];
            for (r = 0; c > r; r++)
                for (n = P(0, r), u(n, f), l = o(e, h, n, u(d(n), v - f)), l = ee(l), a = 0; l.length > a; a++) s = l[a], s.col = r, g.push(s);
            return g
        }

        function o(t, e, n, r) {
            var a, o, i, s, l, c, u, f, v = [],
                h = t.length;
            for (a = 0; h > a; a++) o = t[a], i = o.start, s = e[a], s > n && r > i && (n > i ? (l = d(n), u = !1) : (l = i, u = !0), s > r ? (c = d(r), f = !1) : (c = s, f = !0), v.push({
                event: o,
                start: l,
                end: c,
                isStart: u,
                isEnd: f
            }));
            return v.sort(ue)
        }

        function i(t) {
            return t.end ? d(t.end) : u(d(t.start), y("defaultEventMinutes"))
        }

        function s(n, r) {
            var a, o, i, s, l, u, d, v, h, g, p, m, b, D, C, M, S = n.length,
                T = "",
                k = F(),
                H = y("isRTL");
            for (a = 0; S > a; a++) o = n[a], i = o.event, s = A(o.start, o.start), l = A(o.start, o.end), u = L(o.col), d = _(o.col), v = d - u, d -= .025 * v, v = d - u, h = v * (o.forwardCoord - o.backwardCoord), y("slotEventOverlap") && (h = Math.max(2 * (h - 10), h)), H ? (p = d - o.backwardCoord * v, g = p - h) : (g = u + o.backwardCoord * v, p = g + h), g = Math.max(g, u), p = Math.min(p, d), h = p - g, o.top = s, o.left = g, o.outerWidth = h, o.outerHeight = l - s, T += c(i, o);
            for (k[0].innerHTML = T, m = k.children(), a = 0; S > a; a++) o = n[a], i = o.event, b = t(m[a]), D = w("eventRender", i, i, b), D === !1 ? b.remove() : (D && D !== !0 && (b.remove(), b = t(D).css({
                position: "absolute",
                top: o.top,
                left: o.left
            }).appendTo(k)), o.element = b, i._id === r ? f(i, b, o) : b[0]._fci = a, V(i, b));
            for (E(k, n, f), a = 0; S > a; a++) o = n[a], (b = o.element) && (o.vsides = R(b, !0), o.hsides = x(b, !0), C = b.find(".fc-event-title"), C.length && (o.contentTop = C[0].offsetTop));
            for (a = 0; S > a; a++) o = n[a], (b = o.element) && (b[0].style.width = Math.max(0, o.outerWidth - o.hsides) + "px", M = Math.max(0, o.outerHeight - o.vsides), b[0].style.height = M + "px", i = o.event, o.contentTop !== e && 10 > M - o.contentTop && (b.find("div.fc-event-time").text(re(i.start, y("timeFormat")) + " - " + i.title), b.find("div.fc-event-title").remove()), w("eventAfterRender", i, i, b))
        }

        function c(t, e) {
            var n = "<",
                r = t.url,
                a = j(t, y),
                o = ["fc-event", "fc-event-vert"];
            return b(t) && o.push("fc-event-draggable"), e.isStart && o.push("fc-event-start"), e.isEnd && o.push("fc-event-end"), o = o.concat(t.className), t.source && (o = o.concat(t.source.className || [])), n += r ? "a href='" + q(t.url) + "'" : "div", n += " class='" + o.join(" ") + "'" + " style=" + "'" + "position:absolute;" + "top:" + e.top + "px;" + "left:" + e.left + "px;" + a + "'" + ">" + "<div class='fc-event-inner'>" + "<div class='fc-event-time'>" + q(ae(t.start, t.end, y("timeFormat"))) + "</div>" + "<div class='fc-event-title'>" + q(t.title || "") + "</div>" + "</div>" + "<div class='fc-event-bg'></div>", e.isEnd && D(t) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (r ? "a" : "div") + ">"
        }

        function f(t, e, n) {
            var r = e.find("div.fc-event-time");
            b(t) && g(t, e, r), n.isEnd && D(t) && p(t, e, r), S(t, e)
        }

        function v(t, e, n) {
            function r() {
                c || (e.width(a).height("").draggable("option", "grid", null), c = !0)
            }
            var a, o, i, s = n.isStart,
                c = !0,
                u = N(),
                f = B(),
                v = I(),
                g = X(),
                p = W();
            e.draggable({
                opacity: y("dragOpacity", "month"),
                revertDuration: y("dragRevertDuration"),
                start: function(n, p) {
                    w("eventDragStart", e, t, n, p), Z(t, e), a = e.width(), u.start(function(n, a) {
                        if (K(), n) {
                            o = !1;
                            var u = P(0, a.col),
                                p = P(0, n.col);
                            i = h(p, u), n.row ? s ? c && (e.width(f - 10), T(e, v * Math.round((t.end ? (t.end - t.start) / Re : y("defaultEventMinutes")) / g)), e.draggable("option", "grid", [f, 1]), c = !1) : o = !0 : (Q(l(d(t.start), i), l(C(t), i)), r()), o = o || c && !i
                        } else r(), o = !0;
                        e.draggable("option", "revert", o)
                    }, n, "drag")
                },
                stop: function(n, a) {
                    if (u.stop(), K(), w("eventDragStop", e, t, n, a), o) r(), e.css("filter", ""), U(t, e);
                    else {
                        var s = 0;
                        c || (s = Math.round((e.offset().top - J().offset().top) / v) * g + p - (60 * t.start.getHours() + t.start.getMinutes())), G(this, t, i, s, c, n, a)
                    }
                }
            })
        }

        function g(t, e, n) {
            function r() {
                K(), s && (f ? (n.hide(), e.draggable("option", "grid", null), Q(l(d(t.start), b), l(C(t), b))) : (a(D), n.css("display", ""), e.draggable("option", "grid", [T, x])))
            }

            function a(e) {
                var r, a = u(d(t.start), e);
                t.end && (r = u(d(t.end), e)), n.text(ae(a, r, y("timeFormat")))
            }
            var o, i, s, c, f, v, g, p, b, D, M, E = m.getCoordinateGrid(),
                S = Y(),
                T = B(),
                x = I(),
                k = X();
            e.draggable({
                scroll: !1,
                grid: [T, x],
                axis: 1 == S ? "y" : !1,
                opacity: y("dragOpacity"),
                revertDuration: y("dragRevertDuration"),
                start: function(n, r) {
                    w("eventDragStart", e, t, n, r), Z(t, e), E.build(), o = e.position(), i = E.cell(n.pageX, n.pageY), s = c = !0, f = v = O(i), g = p = 0, b = 0, D = M = 0
                },
                drag: function(t, n) {
                    var a = E.cell(t.pageX, t.pageY);
                    if (s = !!a) {
                        if (f = O(a), g = Math.round((n.position.left - o.left) / T), g != p) {
                            var l = P(0, i.col),
                                u = i.col + g;
                            u = Math.max(0, u), u = Math.min(S - 1, u);
                            var d = P(0, u);
                            b = h(d, l)
                        }
                        f || (D = Math.round((n.position.top - o.top) / x) * k)
                    }(s != c || f != v || g != p || D != M) && (r(), c = s, v = f, p = g, M = D), e.draggable("option", "revert", !s)
                },
                stop: function(n, a) {
                    K(), w("eventDragStop", e, t, n, a), s && (f || b || D) ? G(this, t, b, f ? 0 : D, f, n, a) : (s = !0, f = !1, g = 0, b = 0, D = 0, r(), e.css("filter", ""), e.css(o), U(t, e))
                }
            })
        }

        function p(t, e, n) {
            var r, a, o = I(),
                i = X();
            e.resizable({
                handles: {
                    s: ".ui-resizable-handle"
                },
                grid: o,
                start: function(n, o) {
                    r = a = 0, Z(t, e), w("eventResizeStart", this, t, n, o)
                },
                resize: function(s, l) {
                    r = Math.round((Math.max(o, e.height()) - l.originalSize.height) / o), r != a && (n.text(ae(t.start, r || t.end ? u(M(t), i * r) : null, y("timeFormat"))), a = r)
                },
                stop: function(n, a) {
                    w("eventResizeStop", this, t, n, a), r ? $(this, t, 0, i * r, n, a) : U(t, e)
                }
            })
        }
        var m = this;
        m.renderEvents = n, m.clearEvents = r, m.slotSegHtml = c, de.call(m);
        var y = m.opt,
            w = m.trigger,
            b = m.isEventDraggable,
            D = m.isEventResizable,
            M = m.eventEnd,
            S = m.eventElementHandlers,
            k = m.setHeight,
            H = m.getDaySegmentContainer,
            F = m.getSlotSegmentContainer,
            N = m.getHoverListener,
            z = m.getMaxMinute,
            W = m.getMinMinute,
            A = m.timePosition,
            O = m.getIsCellAllDay,
            L = m.colContentLeft,
            _ = m.colContentRight,
            P = m.cellToDate,
            Y = m.getColCnt,
            B = m.getColWidth,
            I = m.getSnapHeight,
            X = m.getSnapMinutes,
            J = m.getSlotContainer,
            V = m.reportEventElement,
            U = m.showEvents,
            Z = m.hideEvents,
            G = m.eventDrop,
            $ = m.eventResize,
            Q = m.renderDayOverlay,
            K = m.clearOverlays,
            te = m.renderDayEvents,
            ne = m.calendar,
            re = ne.formatDate,
            ae = ne.formatDates;
        m.draggableDayEvent = v
    }

    function ee(t) {
        var e, n = ne(t),
            r = n[0];
        if (re(n), r) {
            for (e = 0; r.length > e; e++) ae(r[e]);
            for (e = 0; r.length > e; e++) oe(r[e], 0, 0)
        }
        return ie(n)
    }

    function ne(t) {
        var e, n, r, a = [];
        for (e = 0; t.length > e; e++) {
            for (n = t[e], r = 0; a.length > r && se(n, a[r]).length; r++);
            (a[r] || (a[r] = [])).push(n)
        }
        return a
    }

    function re(t) {
        var e, n, r, a, o;
        for (e = 0; t.length > e; e++)
            for (n = t[e], r = 0; n.length > r; r++)
                for (a = n[r], a.forwardSegs = [], o = e + 1; t.length > o; o++) se(a, t[o], a.forwardSegs)
    }

    function ae(t) {
        var n, r, a = t.forwardSegs,
            o = 0;
        if (t.forwardPressure === e) {
            for (n = 0; a.length > n; n++) r = a[n], ae(r), o = Math.max(o, 1 + r.forwardPressure);
            t.forwardPressure = o
        }
    }

    function oe(t, n, r) {
        var a, o = t.forwardSegs;
        if (t.forwardCoord === e)
            for (o.length ? (o.sort(ce), oe(o[0], n + 1, r), t.forwardCoord = o[0].backwardCoord) : t.forwardCoord = 1, t.backwardCoord = t.forwardCoord - (t.forwardCoord - r) / (n + 1), a = 0; o.length > a; a++) oe(o[a], 0, t.forwardCoord)
    }

    function ie(t) {
        var e, n, r, a = [];
        for (e = 0; t.length > e; e++)
            for (n = t[e], r = 0; n.length > r; r++) a.push(n[r]);
        return a
    }

    function se(t, e, n) {
        n = n || [];
        for (var r = 0; e.length > r; r++) le(t, e[r]) && n.push(e[r]);
        return n
    }

    function le(t, e) {
        return t.end > e.start && t.start < e.end
    }

    function ce(t, e) {
        return e.forwardPressure - t.forwardPressure || (t.backwardCoord || 0) - (e.backwardCoord || 0) || ue(t, e)
    }

    function ue(t, e) {
        return t.start - e.start || e.end - e.start - (t.end - t.start) || (t.event.title || "").localeCompare(e.event.title)
    }

    function fe(n, r, a) {
        function o(e, n) {
            var r = V[e];
            return t.isPlainObject(r) ? P(r, n || a) : r
        }

        function i(t, e) {
            return r.trigger.apply(r, [t, e || _].concat(Array.prototype.slice.call(arguments, 2), [_]))
        }

        function s(t) {
            var e = t.source || {};
            return X(t.startEditable, e.startEditable, o("eventStartEditable"), t.editable, e.editable, o("editable")) && !o("disableDragging")
        }

        function c(t) {
            var e = t.source || {};
            return X(t.durationEditable, e.durationEditable, o("eventDurationEditable"), t.editable, e.editable, o("editable")) && !o("disableResizing")
        }

        function f(t) {
            j = {};
            var e, n, r = t.length;
            for (e = 0; r > e; e++) n = t[e], j[n._id] ? j[n._id].push(n) : j[n._id] = [n]
        }

        function v() {
            j = {}, I = {}, J = []
        }

        function g(t) {
            return t.end ? d(t.end) : q(t)
        }

        function p(t, e) {
            J.push({
                event: t,
                element: e
            }), I[t._id] ? I[t._id].push(e) : I[t._id] = [e]
        }

        function m() {
            t.each(J, function(t, e) {
                _.trigger("eventDestroy", e.event, e.event, e.element)
            })
        }

        function y(t, n) {
            n.click(function(r) {
                return n.hasClass("ui-draggable-dragging") || n.hasClass("ui-resizable-resizing") ? e : i("eventClick", this, t, r)
            }).hover(function(e) {
                i("eventMouseover", this, t, e)
            }, function(e) {
                i("eventMouseout", this, t, e)
            })
        }

        function w(t, e) {
            D(t, e, "show")
        }

        function b(t, e) {
            D(t, e, "hide")
        }

        function D(t, e, n) {
            var r, a = I[t._id],
                o = a.length;
            for (r = 0; o > r; r++) e && a[r][0] == e[0] || a[r][n]()
        }

        function C(t, e, n, r, a, o, s) {
            var l = e.allDay,
                c = e._id;
            E(j[c], n, r, a), i("eventDrop", t, e, n, r, a, function() {
                E(j[c], -n, -r, l), B(c)
            }, o, s), B(c)
        }

        function M(t, e, n, r, a, o) {
            var s = e._id;
            S(j[s], n, r), i("eventResize", t, e, n, r, function() {
                S(j[s], -n, -r), B(s)
            }, a, o), B(s)
        }

        function E(t, n, r, a) {
            r = r || 0;
            for (var o, i = t.length, s = 0; i > s; s++) o = t[s], a !== e && (o.allDay = a), u(l(o.start, n, !0), r), o.end && (o.end = u(l(o.end, n, !0), r)), Y(o, V)
        }

        function S(t, e, n) {
            n = n || 0;
            for (var r, a = t.length, o = 0; a > o; o++) r = t[o], r.end = u(l(g(r), e, !0), n), Y(r, V)
        }

        function T(t) {
            return "object" == typeof t && (t = t.getDay()), G[t]
        }

        function x() {
            return U
        }

        function k(t, e, n) {
            for (e = e || 1; G[(t.getDay() + (n ? e : 0) + 7) % 7];) l(t, e)
        }

        function H() {
            var t = F.apply(null, arguments),
                e = R(t),
                n = N(e);
            return n
        }

        function F(t, e) {
            var n = _.getColCnt(),
                r = K ? -1 : 1,
                a = K ? n - 1 : 0;
            "object" == typeof t && (e = t.col, t = t.row);
            var o = t * n + (e * r + a);
            return o
        }

        function R(t) {
            var e = _.visStart.getDay();
            return t += $[e], 7 * Math.floor(t / U) + Q[(t % U + U) % U] - e
        }

        function N(t) {
            var e = d(_.visStart);
            return l(e, t), e
        }

        function z(t) {
            var e = W(t),
                n = A(e),
                r = O(n);
            return r
        }

        function W(t) {
            return h(t, _.visStart)
        }

        function A(t) {
            var e = _.visStart.getDay();
            return t += e, Math.floor(t / 7) * U + $[(t % 7 + 7) % 7] - $[e]
        }

        function O(t) {
            var e = _.getColCnt(),
                n = K ? -1 : 1,
                r = K ? e - 1 : 0,
                a = Math.floor(t / e),
                o = (t % e + e) % e * n + r;
            return {
                row: a,
                col: o
            }
        }

        function L(t, e) {
            for (var n = _.getRowCnt(), r = _.getColCnt(), a = [], o = W(t), i = W(e), s = A(o), l = A(i) - 1, c = 0; n > c; c++) {
                var u = c * r,
                    f = u + r - 1,
                    d = Math.max(s, u),
                    v = Math.min(l, f);
                if (v >= d) {
                    var h = O(d),
                        g = O(v),
                        p = [h.col, g.col].sort(),
                        m = R(d) == o,
                        y = R(v) + 1 == i;
                    a.push({
                        row: c,
                        leftCol: p[0],
                        rightCol: p[1],
                        isStart: m,
                        isEnd: y
                    })
                }
            }
            return a
        }
        var _ = this;
        _.element = n, _.calendar = r, _.name = a, _.opt = o, _.trigger = i, _.isEventDraggable = s, _.isEventResizable = c, _.setEventData = f, _.clearEventData = v, _.eventEnd = g, _.reportEventElement = p, _.triggerEventDestroy = m, _.eventElementHandlers = y, _.showEvents = w, _.hideEvents = b, _.eventDrop = C, _.eventResize = M;
        var q = _.defaultEventEnd,
            Y = r.normalizeEvent,
            B = r.reportEventChange,
            j = {},
            I = {},
            J = [],
            V = r.options;
        _.isHiddenDay = T, _.skipHiddenDays = k, _.getCellsPerWeek = x, _.dateToCell = z, _.dateToDayOffset = W, _.dayOffsetToCellOffset = A, _.cellOffsetToCell = O, _.cellToDate = H, _.cellToCellOffset = F, _.cellOffsetToDayOffset = R, _.dayOffsetToDate = N, _.rangeToSegments = L;
        var U, Z = o("hiddenDays") || [],
            G = [],
            $ = [],
            Q = [],
            K = o("isRTL");
        (function() {
            o("weekends") === !1 && Z.push(0, 6);
            for (var e = 0, n = 0; 7 > e; e++) $[e] = n, G[e] = -1 != t.inArray(e, Z), G[e] || (Q[n] = e, n++);
            if (U = n, !U) throw "invalid hiddenDays"
        })()
    }

    function de() {
        function e(t, e) {
            var n = r(t, !1, !0);
            he(n, function(t, e) {
                N(t.event, e)
            }), w(n, e), he(n, function(t, e) {
                k("eventAfterRender", t.event, t.event, e)
            })
        }

        function n(t, e, n) {
            var a = r([t], !0, !1),
                o = [];
            return he(a, function(t, r) {
                t.row === e && r.css("top", n), o.push(r[0])
            }), o
        }

        function r(e, n, r) {
            var o, l, c = Z(),
                d = n ? t("<div/>") : c,
                v = a(e);
            return i(v), o = s(v), d[0].innerHTML = o, l = d.children(), n && c.append(l), u(v, l), he(v, function(t, e) {
                t.hsides = x(e, !0)
            }), he(v, function(t, e) {
                e.width(Math.max(0, t.outerWidth - t.hsides))
            }), he(v, function(t, e) {
                t.outerHeight = e.outerHeight(!0)
            }), f(v, r), v
        }

        function a(t) {
            for (var e = [], n = 0; t.length > n; n++) {
                var r = o(t[n]);
                e.push.apply(e, r)
            }
            return e
        }

        function o(t) {
            for (var e = t.start, n = C(t), r = ee(e, n), a = 0; r.length > a; a++) r[a].event = t;
            return r
        }

        function i(t) {
            for (var e = T("isRTL"), n = 0; t.length > n; n++) {
                var r = t[n],
                    a = (e ? r.isEnd : r.isStart) ? V : X,
                    o = (e ? r.isStart : r.isEnd) ? U : J,
                    i = a(r.leftCol),
                    s = o(r.rightCol);
                r.left = i, r.outerWidth = s - i
            }
        }

        function s(t) {
            for (var e = "", n = 0; t.length > n; n++) e += c(t[n]);
            return e
        }

        function c(t) {
            var e = "",
                n = T("isRTL"),
                r = t.event,
                a = r.url,
                o = ["fc-event", "fc-event-hori"];
            H(r) && o.push("fc-event-draggable"), t.isStart && o.push("fc-event-start"), t.isEnd && o.push("fc-event-end"), o = o.concat(r.className), r.source && (o = o.concat(r.source.className || []));
            var i = j(r, T);
            return e += a ? "<a href='" + q(a) + "'" : "<div", e += " class='" + o.join(" ") + "'" + " style=" + "'" + "position:absolute;" + "left:" + t.left + "px;" + i + "'" + ">" + "<div class='fc-event-inner'>", !r.allDay && t.isStart && (e += "<span class='fc-event-time'>" + q(G(r.start, r.end, T("timeFormat"))) + "</span>"), e += "<span class='fc-event-title'>" + q(r.title || "") + "</span>" + "</div>", t.isEnd && F(r) && (e += "<div class='ui-resizable-handle ui-resizable-" + (n ? "w" : "e") + "'>" + "&nbsp;&nbsp;&nbsp;" + "</div>"), e += "</" + (a ? "a" : "div") + ">"
        }

        function u(e, n) {
            for (var r = 0; e.length > r; r++) {
                var a = e[r],
                    o = a.event,
                    i = n.eq(r),
                    s = k("eventRender", o, o, i);
                s === !1 ? i.remove() : (s && s !== !0 && (s = t(s).css({
                    position: "absolute",
                    left: a.left
                }), i.replaceWith(s), i = s), a.element = i)
            }
        }

        function f(t, e) {
            var n = v(t),
                r = y(),
                a = [];
            if (e)
                for (var o = 0; r.length > o; o++) r[o].height(n[o]);
            for (var o = 0; r.length > o; o++) a.push(r[o].position().top);
            he(t, function(t, e) {
                e.css("top", a[t.row] + t.top)
            })
        }

        function v(t) {
            for (var e = P(), n = B(), r = [], a = g(t), o = 0; e > o; o++) {
                for (var i = a[o], s = [], l = 0; n > l; l++) s.push(0);
                for (var c = 0; i.length > c; c++) {
                    var u = i[c];
                    u.top = L(s.slice(u.leftCol, u.rightCol + 1));
                    for (var l = u.leftCol; u.rightCol >= l; l++) s[l] = u.top + u.outerHeight
                }
                r.push(L(s))
            }
            return r
        }

        function g(t) {
            var e, n, r, a = P(),
                o = [];
            for (e = 0; t.length > e; e++) n = t[e], r = n.row, n.element && (o[r] ? o[r].push(n) : o[r] = [n]);
            for (r = 0; a > r; r++) o[r] = p(o[r] || []);
            return o
        }

        function p(t) {
            for (var e = [], n = m(t), r = 0; n.length > r; r++) e.push.apply(e, n[r]);
            return e
        }

        function m(t) {
            t.sort(ge);
            for (var e = [], n = 0; t.length > n; n++) {
                for (var r = t[n], a = 0; e.length > a && ve(r, e[a]); a++);
                e[a] ? e[a].push(r) : e[a] = [r]
            }
            return e
        }

        function y() {
            var t, e = P(),
                n = [];
            for (t = 0; e > t; t++) n[t] = I(t).find("div.fc-day-content > div");
            return n
        }

        function w(t, e) {
            var n = Z();
            he(t, function(t, n, r) {
                var a = t.event;
                a._id === e ? b(a, n, t) : n[0]._fci = r
            }), E(n, t, b)
        }

        function b(t, e, n) {
            H(t) && S.draggableDayEvent(t, e, n), n.isEnd && F(t) && S.resizableDayEvent(t, e, n), z(t, e)
        }

        function D(t, e) {
            var n, r = te();
            e.draggable({
                delay: 50,
                opacity: T("dragOpacity"),
                revertDuration: T("dragRevertDuration"),
                start: function(a, o) {
                    k("eventDragStart", e, t, a, o), A(t, e), r.start(function(r, a, o, i) {
                        if (e.draggable("option", "revert", !r || !o && !i), Q(), r) {
                            var s = ne(a),
                                c = ne(r);
                            n = h(c, s), $(l(d(t.start), n), l(C(t), n))
                        } else n = 0
                    }, a, "drag")
                },
                stop: function(a, o) {
                    r.stop(), Q(), k("eventDragStop", e, t, a, o), n ? O(this, t, n, 0, t.allDay, a, o) : (e.css("filter", ""), W(t, e))
                }
            })
        }

        function M(e, r, a) {
            var o = T("isRTL"),
                i = o ? "w" : "e",
                s = r.find(".ui-resizable-" + i),
                c = !1;
            Y(r), r.mousedown(function(t) {
                t.preventDefault()
            }).click(function(t) {
                c && (t.preventDefault(), t.stopImmediatePropagation())
            }), s.mousedown(function(o) {
                function s(n) {
                    k("eventResizeStop", this, e, n), t("body").css("cursor", ""), u.stop(), Q(), f && _(this, e, f, 0, n), setTimeout(function() {
                        c = !1
                    }, 0)
                }
                if (1 == o.which) {
                    c = !0;
                    var u = te();
                    P(), B();
                    var f, d, v = r.css("top"),
                        h = t.extend({}, e),
                        g = ie(oe(e.start));
                    K(), t("body").css("cursor", i + "-resize").one("mouseup", s), k("eventResizeStart", this, e, o), u.start(function(r, o) {
                        if (r) {
                            var s = re(o),
                                c = re(r);
                            if (c = Math.max(c, g), f = ae(c) - ae(s)) {
                                h.end = l(R(e), f, !0);
                                var u = d;
                                d = n(h, a.row, v), d = t(d), d.find("*").css("cursor", i + "-resize"), u && u.remove(), A(e)
                            } else d && (W(e), d.remove(), d = null);
                            Q(), $(e.start, l(C(e), f))
                        }
                    }, o)
                }
            })
        }
        var S = this;
        S.renderDayEvents = e, S.draggableDayEvent = D, S.resizableDayEvent = M;
        var T = S.opt,
            k = S.trigger,
            H = S.isEventDraggable,
            F = S.isEventResizable,
            R = S.eventEnd,
            N = S.reportEventElement,
            z = S.eventElementHandlers,
            W = S.showEvents,
            A = S.hideEvents,
            O = S.eventDrop,
            _ = S.eventResize,
            P = S.getRowCnt,
            B = S.getColCnt;
        S.getColWidth;
        var I = S.allDayRow,
            X = S.colLeft,
            J = S.colRight,
            V = S.colContentLeft,
            U = S.colContentRight;
        S.dateToCell;
        var Z = S.getDaySegmentContainer,
            G = S.calendar.formatDates,
            $ = S.renderDayOverlay,
            Q = S.clearOverlays,
            K = S.clearSelection,
            te = S.getHoverListener,
            ee = S.rangeToSegments,
            ne = S.cellToDate,
            re = S.cellToCellOffset,
            ae = S.cellOffsetToDayOffset,
            oe = S.dateToDayOffset,
            ie = S.dayOffsetToCellOffset
    }

    function ve(t, e) {
        for (var n = 0; e.length > n; n++) {
            var r = e[n];
            if (r.leftCol <= t.rightCol && r.rightCol >= t.leftCol) return !0
        }
        return !1
    }

    function he(t, e) {
        for (var n = 0; t.length > n; n++) {
            var r = t[n],
                a = r.element;
            a && e(r, a, n)
        }
    }

    function ge(t, e) {
        return e.rightCol - e.leftCol - (t.rightCol - t.leftCol) || e.event.allDay - t.event.allDay || t.event.start - e.event.start || (t.event.title || "").localeCompare(e.event.title)
    }

    function pe() {
        function e(t, e, a) {
            n(), e || (e = l(t, a)), c(t, e, a), r(t, e, a)
        }

        function n(t) {
            f && (f = !1, u(), s("unselect", null, t))
        }

        function r(t, e, n, r) {
            f = !0, s("select", null, t, e, n, r)
        }

        function a(e) {
            var a = o.cellToDate,
                s = o.getIsCellAllDay,
                l = o.getHoverListener(),
                f = o.reportDayClick;
            if (1 == e.which && i("selectable")) {
                n(e);
                var d;
                l.start(function(t, e) {
                    u(), t && s(t) ? (d = [a(e), a(t)].sort(O), c(d[0], d[1], !0)) : d = null
                }, e), t(document).one("mouseup", function(t) {
                    l.stop(), d && (+d[0] == +d[1] && f(d[0], !0, t), r(d[0], d[1], !0, t))
                })
            }
        }
        var o = this;
        o.select = e, o.unselect = n, o.reportSelection = r, o.daySelectionMousedown = a;
        var i = o.opt,
            s = o.trigger,
            l = o.defaultSelectionEnd,
            c = o.renderSelection,
            u = o.clearSelection,
            f = !1;
        i("selectable") && i("unselectAuto") && t(document).mousedown(function(e) {
            var r = i("unselectCancel");
            r && t(e.target).parents(r).length || n(e)
        })
    }

    function me() {
        function e(e, n) {
            var r = o.shift();
            return r || (r = t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), r[0].parentNode != n[0] && r.appendTo(n), a.push(r.css(e).show()), r
        }

        function n() {
            for (var t; t = a.shift();) o.push(t.hide().unbind())
        }
        var r = this;
        r.renderOverlay = e, r.clearOverlays = n;
        var a = [],
            o = []
    }

    function ye(t) {
        var e, n, r = this;
        r.build = function() {
            e = [], n = [], t(e, n)
        }, r.cell = function(t, r) {
            var a, o = e.length,
                i = n.length,
                s = -1,
                l = -1;
            for (a = 0; o > a; a++)
                if (r >= e[a][0] && e[a][1] > r) {
                    s = a;
                    break
                }
            for (a = 0; i > a; a++)
                if (t >= n[a][0] && n[a][1] > t) {
                    l = a;
                    break
                }
            return s >= 0 && l >= 0 ? {
                row: s,
                col: l
            } : null
        }, r.rect = function(t, r, a, o, i) {
            var s = i.offset();
            return {
                top: e[t][0] - s.top,
                left: n[r][0] - s.left,
                width: n[o][1] - n[r][0],
                height: e[a][1] - e[t][0]
            }
        }
    }

    function we(e) {
        function n(t) {
            be(t);
            var n = e.cell(t.pageX, t.pageY);
            (!n != !i || n && (n.row != i.row || n.col != i.col)) && (n ? (o || (o = n), a(n, o, n.row - o.row, n.col - o.col)) : a(n, o), i = n)
        }
        var r, a, o, i, s = this;
        s.start = function(s, l, c) {
            a = s, o = i = null, e.build(), n(l), r = c || "mousemove", t(document).bind(r, n)
        }, s.stop = function() {
            return t(document).unbind(r, n), i
        }
    }

    function be(t) {
        t.pageX === e && (t.pageX = t.originalEvent.pageX, t.pageY = t.originalEvent.pageY)
    }

    function De(t) {
        function n(e) {
            return a[e] = a[e] || t(e)
        }
        var r = this,
            a = {},
            o = {},
            i = {};
        r.left = function(t) {
            return o[t] = o[t] === e ? n(t).position().left : o[t]
        }, r.right = function(t) {
            return i[t] = i[t] === e ? r.left(t) + n(t).width() : i[t]
        }, r.clear = function() {
            a = {}, o = {}, i = {}
        }
    }
    var Ce = {
            defaultView: "month",
            aspectRatio: 1.35,
            header: {
                left: "title",
                center: "",
                right: "today prev,next"
            },
            weekends: !0,
            weekNumbers: !1,
            weekNumberCalculation: "iso",
            weekNumberTitle: "W",
            allDayDefault: !0,
            ignoreTimezone: !0,
            lazyFetching: !0,
            startParam: "start",
            endParam: "end",
            titleFormat: {
                month: "MMMM yyyy",
                week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
                day: "dddd, MMM d, yyyy"
            },
            columnFormat: {
                month: "ddd",
                week: "ddd M/d",
                day: "dddd M/d"
            },
            timeFormat: {
                "": "h(:mm)t"
            },
            isRTL: !1,
            firstDay: 0,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            buttonText: {
                prev: "<span class='fc-text-arrow'>&lsaquo;</span>",
                next: "<span class='fc-text-arrow'>&rsaquo;</span>",
                prevYear: "<span class='fc-text-arrow'>&laquo;</span>",
                nextYear: "<span class='fc-text-arrow'>&raquo;</span>",
                today: "today",
                month: "month",
                week: "week",
                day: "day"
            },
            theme: !1,
            buttonIcons: {
                prev: "circle-triangle-w",
                next: "circle-triangle-e"
            },
            unselectAuto: !0,
            dropAccept: "*",
            handleWindowResize: !0
        },
        Me = {
            header: {
                left: "next,prev today",
                center: "",
                right: "title"
            },
            buttonText: {
                prev: "<span class='fc-text-arrow'>&rsaquo;</span>",
                next: "<span class='fc-text-arrow'>&lsaquo;</span>",
                prevYear: "<span class='fc-text-arrow'>&raquo;</span>",
                nextYear: "<span class='fc-text-arrow'>&laquo;</span>"
            },
            buttonIcons: {
                prev: "circle-triangle-e",
                next: "circle-triangle-w"
            }
        },
        Ee = t.fullCalendar = {
            version: "1.6.4"
        },
        Se = Ee.views = {};
    t.fn.fullCalendar = function(n) {
        if ("string" == typeof n) {
            var a, o = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var r = t.data(this, "fullCalendar");
                if (r && t.isFunction(r[n])) {
                    var i = r[n].apply(r, o);
                    a === e && (a = i), "destroy" == n && t.removeData(this, "fullCalendar")
                }
            }), a !== e ? a : this
        }
        n = n || {};
        var i = n.eventSources || [];
        return delete n.eventSources, n.events && (i.push(n.events), delete n.events), n = t.extend(!0, {}, Ce, n.isRTL || n.isRTL === e && Ce.isRTL ? Me : {}, n), this.each(function(e, a) {
            var o = t(a),
                s = new r(o, n, i);
            o.data("fullCalendar", s), s.render()
        }), this
    }, Ee.sourceNormalizers = [], Ee.sourceFetchers = [];
    var Te = {
            dataType: "json",
            cache: !1
        },
        xe = 1;
    Ee.addDays = l, Ee.cloneDate = d, Ee.parseDate = p, Ee.parseISO8601 = m, Ee.parseTime = y, Ee.formatDate = w, Ee.formatDates = b;
    var ke = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
        He = 864e5,
        Fe = 36e5,
        Re = 6e4,
        Ne = {
            s: function(t) {
                return t.getSeconds()
            },
            ss: function(t) {
                return _(t.getSeconds())
            },
            m: function(t) {
                return t.getMinutes()
            },
            mm: function(t) {
                return _(t.getMinutes())
            },
            h: function(t) {
                return t.getHours() % 12 || 12
            },
            hh: function(t) {
                return _(t.getHours() % 12 || 12)
            },
            H: function(t) {
                return t.getHours()
            },
            HH: function(t) {
                return _(t.getHours())
            },
            d: function(t) {
                return t.getDate()
            },
            dd: function(t) {
                return _(t.getDate())
            },
            ddd: function(t, e) {
                return e.dayNamesShort[t.getDay()]
            },
            dddd: function(t, e) {
                return e.dayNames[t.getDay()]
            },
            M: function(t) {
                return t.getMonth() + 1
            },
            MM: function(t) {
                return _(t.getMonth() + 1)
            },
            MMM: function(t, e) {
                return e.monthNamesShort[t.getMonth()]
            },
            MMMM: function(t, e) {
                return e.monthNames[t.getMonth()]
            },
            yy: function(t) {
                return (t.getFullYear() + "").substring(2)
            },
            yyyy: function(t) {
                return t.getFullYear()
            },
            t: function(t) {
                return 12 > t.getHours() ? "a" : "p"
            },
            tt: function(t) {
                return 12 > t.getHours() ? "am" : "pm"
            },
            T: function(t) {
                return 12 > t.getHours() ? "A" : "P"
            },
            TT: function(t) {
                return 12 > t.getHours() ? "AM" : "PM"
            },
            u: function(t) {
                return w(t, "yyyy-MM-dd'T'HH:mm:ss'Z'")
            },
            S: function(t) {
                var e = t.getDate();
                return e > 10 && 20 > e ? "th" : ["st", "nd", "rd"][e % 10 - 1] || "th"
            },
            w: function(t, e) {
                return e.weekNumberCalculation(t)
            },
            W: function(t) {
                return D(t)
            }
        };
    Ee.dateFormatters = Ne, Ee.applyAll = I, Se.month = J, Se.basicWeek = V, Se.basicDay = U, n({
        weekMode: "fixed"
    }), Se.agendaWeek = $, Se.agendaDay = Q, n({
        allDaySlot: !0,
        allDayText: "all-day",
        firstHour: 6,
        slotMinutes: 30,
        defaultEventMinutes: 120,
        axisFormat: "h(:mm)tt",
        timeFormat: {
            agenda: "h:mm{ - h:mm}"
        },
        dragOpacity: {
            agenda: .5
        },
        minTime: 0,
        maxTime: 24,
        slotEventOverlap: !0
    })
})(jQuery);

$(document).on('ready', function() {

    'use strict';

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var calendar = $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        selectable: true,
        selectHelper: true,
        select: function(start, end, allDay) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent', {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },
        editable: true,
        events: [{
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]
    });

});