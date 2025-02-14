/**
 * Intro.js v1.0.0
 * https://github.com/usablica/intro.js
 * MIT licensed
 *
 * Copyright (C) 2013 usabli.ca - A weekend project by Afshin Mehrabani (@afshinmeh)
 */
! function(t, e) {
    "object" == typeof exports ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t)
}(this, function(t) {
    function e(t) {
        this._targetElement = t, this._options = {
            nextLabel: "Next &rarr;",
            prevLabel: "&larr; Back",
            skipLabel: "Skip",
            doneLabel: "Done",
            tooltipPosition: "bottom",
            tooltipClass: "",
            highlightClass: "",
            exitOnEsc: !0,
            exitOnOverlayClick: !0,
            showStepNumbers: !0,
            keyboardNavigation: !0,
            showButtons: !0,
            showBullets: !0,
            showProgress: !1,
            scrollToElement: !0,
            overlayOpacity: .8,
            positionPrecedence: ["bottom", "top", "right", "left"],
            disableInteraction: !1
        }
    }

    function n(t) {
        var e = [],
            n = this;
        if (this._options.steps)
            for (var i = [], a = 0, c = this._options.steps.length; c > a; a++) {
                var h = o(this._options.steps[a]);
                if (h.step = e.length + 1, "string" == typeof h.element && (h.element = document.querySelector(h.element)), "undefined" == typeof h.element || null == h.element) {
                    var u = document.querySelector(".introjsFloatingElement");
                    null == u && (u = document.createElement("div"), u.className = "introjsFloatingElement", document.body.appendChild(u)), h.element = u, h.position = "floating"
                }
                null != h.element && e.push(h)
            } else {
                var i = t.querySelectorAll("*[data-intro]");
                if (i.length < 1) return !1;
                for (var a = 0, d = i.length; d > a; a++) {
                    var f = i[a],
                        m = parseInt(f.getAttribute("data-step"), 10);
                    m > 0 && (e[m - 1] = {
                        element: f,
                        intro: f.getAttribute("data-intro"),
                        step: parseInt(f.getAttribute("data-step"), 10),
                        tooltipClass: f.getAttribute("data-tooltipClass"),
                        highlightClass: f.getAttribute("data-highlightClass"),
                        position: f.getAttribute("data-position") || this._options.tooltipPosition
                    })
                }
                for (var g = 0, a = 0, d = i.length; d > a; a++) {
                    var f = i[a];
                    if (null == f.getAttribute("data-step")) {
                        for (;;) {
                            if ("undefined" == typeof e[g]) break;
                            g++
                        }
                        e[g] = {
                            element: f,
                            intro: f.getAttribute("data-intro"),
                            step: g + 1,
                            tooltipClass: f.getAttribute("data-tooltipClass"),
                            highlightClass: f.getAttribute("data-highlightClass"),
                            position: f.getAttribute("data-position") || this._options.tooltipPosition
                        }
                    }
                }
            }
        for (var b = [], v = 0; v < e.length; v++) e[v] && b.push(e[v]);
        if (e = b, e.sort(function(t, e) {
                return t.step - e.step
            }), n._introItems = e, y.call(n, t)) {
            r.call(n); {
                t.querySelector(".introjs-skipbutton"), t.querySelector(".introjs-nextbutton")
            }
            n._onKeyDown = function(e) {
                if (27 === e.keyCode && 1 == n._options.exitOnEsc) l.call(n, t), void 0 != n._introExitCallback && n._introExitCallback.call(n);
                else if (37 === e.keyCode) s.call(n);
                else if (39 === e.keyCode) r.call(n);
                else if (13 === e.keyCode) {
                    var o = e.target || e.srcElement;
                    o && o.className.indexOf("introjs-prevbutton") > 0 ? s.call(n) : o && o.className.indexOf("introjs-skipbutton") > 0 ? l.call(n, t) : r.call(n), e.preventDefault ? e.preventDefault() : e.returnValue = !1
                }
            }, n._onResize = function() {
                p.call(n, document.querySelector(".introjs-helperLayer")), p.call(n, document.querySelector(".introjs-tooltipReferenceLayer"))
            }, window.addEventListener ? (this._options.keyboardNavigation && window.addEventListener("keydown", n._onKeyDown, !0), window.addEventListener("resize", n._onResize, !0)) : document.attachEvent && (this._options.keyboardNavigation && document.attachEvent("onkeydown", n._onKeyDown), document.attachEvent("onresize", n._onResize))
        }
        return !1
    }

    function o(t) {
        if (null == t || "object" != typeof t || "undefined" != typeof t.nodeType) return t;
        var e = {};
        for (var n in t) e[n] = o(t[n]);
        return e
    }

    function i(t) {
        this._currentStep = t - 2, "undefined" != typeof this._introItems && r.call(this)
    }

    function r() {
        if (this._direction = "forward", "undefined" == typeof this._currentStep ? this._currentStep = 0 : ++this._currentStep, this._introItems.length <= this._currentStep) return "function" == typeof this._introCompleteCallback && this._introCompleteCallback.call(this), void l.call(this, this._targetElement);
        var t = this._introItems[this._currentStep];
        "undefined" != typeof this._introBeforeChangeCallback && this._introBeforeChangeCallback.call(this, t.element), d.call(this, t)
    }

    function s() {
        if (this._direction = "backward", 0 === this._currentStep) return !1;
        var t = this._introItems[--this._currentStep];
        "undefined" != typeof this._introBeforeChangeCallback && this._introBeforeChangeCallback.call(this, t.element), d.call(this, t)
    }

    function l(t) {
        var e = t.querySelector(".introjs-overlay");
        if (null != e) {
            e.style.opacity = 0, setTimeout(function() {
                e.parentNode && e.parentNode.removeChild(e)
            }, 500);
            var n = t.querySelector(".introjs-helperLayer");
            n && n.parentNode.removeChild(n);
            var o = t.querySelector(".introjs-tooltipReferenceLayer");
            o && o.parentNode.removeChild(o);
            var i = t.querySelector(".introjs-disableInteraction");
            i && i.parentNode.removeChild(i);
            var r = document.querySelector(".introjsFloatingElement");
            r && r.parentNode.removeChild(r);
            var s = document.querySelector(".introjs-showElement");
            s && (s.className = s.className.replace(/introjs-[a-zA-Z]+/g, "").replace(/^\s+|\s+$/g, ""));
            var l = document.querySelectorAll(".introjs-fixParent");
            if (l && l.length > 0)
                for (var a = l.length - 1; a >= 0; a--) l[a].className = l[a].className.replace(/introjs-fixParent/g, "").replace(/^\s+|\s+$/g, "");
            window.removeEventListener ? window.removeEventListener("keydown", this._onKeyDown, !0) : document.detachEvent && document.detachEvent("onkeydown", this._onKeyDown), this._currentStep = void 0
        }
    }

    function a(t, e, n, o) {
        var i, r, s, l = "";
        if (e.style.top = null, e.style.right = null, e.style.bottom = null, e.style.left = null, e.style.marginLeft = null, e.style.marginTop = null, n.style.display = "inherit", "undefined" != typeof o && null != o && (o.style.top = null, o.style.left = null), this._introItems[this._currentStep]) {
            i = this._introItems[this._currentStep], l = "string" == typeof i.tooltipClass ? i.tooltipClass : this._options.tooltipClass, e.className = ("introjs-tooltip " + l).replace(/^\s+|\s+$/g, "");
            var l = this._options.tooltipClass;
            currentTooltipPosition = this._introItems[this._currentStep].position, ("auto" == currentTooltipPosition || "auto" == this._options.tooltipPosition) && "floating" != currentTooltipPosition && (currentTooltipPosition = c.call(this, t, e, currentTooltipPosition));
            var a = b(t),
                h = b(e).height,
                p = m();
            switch (currentTooltipPosition) {
                case "top":
                    e.style.left = "15px", e.style.top = "-" + (h + 10) + "px", n.className = "introjs-arrow bottom";
                    break;
                case "right":
                    e.style.left = b(t).width + 20 + "px", a.top + h > p.height && (n.className = "introjs-arrow left-bottom", e.style.top = "-" + (h - a.height - 20) + "px"), n.className = "introjs-arrow left";
                    break;
                case "left":
                    1 == this._options.showStepNumbers && (e.style.top = "15px"), a.top + h > p.height ? (e.style.top = "-" + (h - a.height - 20) + "px", n.className = "introjs-arrow right-bottom") : n.className = "introjs-arrow right", e.style.right = a.width + 20 + "px";
                    break;
                case "floating":
                    n.style.display = "none", r = b(e), e.style.left = "50%", e.style.top = "50%", e.style.marginLeft = "-" + r.width / 2 + "px", e.style.marginTop = "-" + r.height / 2 + "px", "undefined" != typeof o && null != o && (o.style.left = "-" + (r.width / 2 + 18) + "px", o.style.top = "-" + (r.height / 2 + 18) + "px");
                    break;
                case "bottom-right-aligned":
                    n.className = "introjs-arrow top-right", e.style.right = "0px", e.style.bottom = "-" + (b(e).height + 10) + "px";
                    break;
                case "bottom-middle-aligned":
                    s = b(t), r = b(e), n.className = "introjs-arrow top-middle", e.style.left = s.width / 2 - r.width / 2 + "px", e.style.bottom = "-" + (r.height + 10) + "px";
                    break;
                case "bottom-left-aligned":
                case "bottom":
                default:
                    e.style.bottom = "-" + (b(e).height + 10) + "px", e.style.left = b(t).width / 2 - b(e).width / 2 + "px", n.className = "introjs-arrow top"
            }
        }
    }

    function c(t, e, n) {
        var o = this._options.positionPrecedence.slice(),
            i = m(),
            r = b(e).height + 10,
            s = b(e).width + 20,
            l = b(t),
            a = "floating";
        return l.left + s > i.width || l.left + l.width / 2 - s < 0 ? (h(o, "bottom"), h(o, "top")) : (l.height + l.top + r > i.height && h(o, "bottom"), l.top - r < 0 && h(o, "top")), l.width + l.left + s > i.width && h(o, "right"), l.left - s < 0 && h(o, "left"), o.length > 0 && (a = o[0]), n && "auto" != n && o.indexOf(n) > -1 && (a = n), a
    }

    function h(t, e) {
        t.indexOf(e) > -1 && t.splice(t.indexOf(e), 1)
    }

    function p(t) {
        if (t) {
            if (!this._introItems[this._currentStep]) return;
            var e = this._introItems[this._currentStep],
                n = b(e.element),
                o = 10;
            "floating" == e.position && (o = 0), t.setAttribute("style", "width: " + (n.width + o) + "px; height:" + (n.height + o) + "px; top:" + (n.top - 5) + "px;left: " + (n.left - 5) + "px;")
        }
    }

    function u() {
        var t = document.querySelector(".introjs-disableInteraction");
        null === t && (t = document.createElement("div"), t.className = "introjs-disableInteraction", this._targetElement.appendChild(t)), p.call(this, t)
    }

    function d(t) {
        "undefined" != typeof this._introChangeCallback && this._introChangeCallback.call(this, t.element); {
            var e = this,
                n = document.querySelector(".introjs-helperLayer"),
                o = document.querySelector(".introjs-tooltipReferenceLayer"),
                i = "introjs-helperLayer";
            b(t.element)
        }
        if ("string" == typeof t.highlightClass && (i += " " + t.highlightClass), "string" == typeof this._options.highlightClass && (i += " " + this._options.highlightClass), null != n) {
            var c = o.querySelector(".introjs-helperNumberLayer"),
                h = o.querySelector(".introjs-tooltiptext"),
                d = o.querySelector(".introjs-arrow"),
                y = o.querySelector(".introjs-tooltip"),
                _ = o.querySelector(".introjs-skipbutton"),
                w = o.querySelector(".introjs-prevbutton"),
                C = o.querySelector(".introjs-nextbutton");
            if (n.className = i, y.style.opacity = 0, y.style.display = "none", null != c) {
                var j = this._introItems[t.step - 2 >= 0 ? t.step - 2 : 0];
                (null != j && "forward" == this._direction && "floating" == j.position || "backward" == this._direction && "floating" == t.position) && (c.style.opacity = 0)
            }
            p.call(e, n), p.call(e, o);
            var x = document.querySelectorAll(".introjs-fixParent");
            if (x && x.length > 0)
                for (var N = x.length - 1; N >= 0; N--) x[N].className = x[N].className.replace(/introjs-fixParent/g, "").replace(/^\s+|\s+$/g, "");
            var S = document.querySelector(".introjs-showElement");
            S.className = S.className.replace(/introjs-[a-zA-Z]+/g, "").replace(/^\s+|\s+$/g, ""), e._lastShowElementTimer && clearTimeout(e._lastShowElementTimer), e._lastShowElementTimer = setTimeout(function() {
                null != c && (c.innerHTML = t.step), h.innerHTML = t.intro, y.style.display = "block", a.call(e, t.element, y, d, c), o.querySelector(".introjs-bullets li > a.active").className = "", o.querySelector('.introjs-bullets li > a[data-stepnumber="' + t.step + '"]').className = "active", o.querySelector(".introjs-progress .introjs-progressbar").setAttribute("style", "width:" + v.call(e) + "%;"), y.style.opacity = 1, c && (c.style.opacity = 1), -1 === C.tabIndex ? _.focus() : C.focus()
            }, 350)
        } else {
            var k = document.createElement("div"),
                E = document.createElement("div"),
                L = document.createElement("div"),
                I = document.createElement("div"),
                T = document.createElement("div"),
                q = document.createElement("div"),
                A = document.createElement("div"),
                P = document.createElement("div");
            k.className = i, E.className = "introjs-tooltipReferenceLayer", p.call(e, k), p.call(e, E), this._targetElement.appendChild(k), this._targetElement.appendChild(E), L.className = "introjs-arrow", T.className = "introjs-tooltiptext", T.innerHTML = t.intro, q.className = "introjs-bullets", this._options.showBullets === !1 && (q.style.display = "none");
            for (var H = document.createElement("ul"), N = 0, O = this._introItems.length; O > N; N++) {
                var B = document.createElement("li"),
                    M = document.createElement("a");
                M.onclick = function() {
                    e.goToStep(this.getAttribute("data-stepnumber"))
                }, N === t.step - 1 && (M.className = "active"), M.href = "javascript:void(0);", M.innerHTML = "&nbsp;", M.setAttribute("data-stepnumber", this._introItems[N].step), B.appendChild(M), H.appendChild(B)
            }
            q.appendChild(H), A.className = "introjs-progress", this._options.showProgress === !1 && (A.style.display = "none");
            var R = document.createElement("div");
            if (R.className = "introjs-progressbar", R.setAttribute("style", "width:" + v.call(this) + "%;"), A.appendChild(R), P.className = "introjs-tooltipbuttons", this._options.showButtons === !1 && (P.style.display = "none"), I.className = "introjs-tooltip", I.appendChild(T), I.appendChild(q), I.appendChild(A), 1 == this._options.showStepNumbers) {
                var z = document.createElement("span");
                z.className = "introjs-helperNumberLayer", z.innerHTML = t.step, E.appendChild(z)
            }
            I.appendChild(L), E.appendChild(I);
            var C = document.createElement("a");
            C.onclick = function() {
                e._introItems.length - 1 != e._currentStep && r.call(e)
            }, C.href = "javascript:void(0);", C.innerHTML = this._options.nextLabel;
            var w = document.createElement("a");
            w.onclick = function() {
                0 != e._currentStep && s.call(e)
            }, w.href = "javascript:void(0);", w.innerHTML = this._options.prevLabel;
            var _ = document.createElement("a");
            _.className = "introjs-button introjs-skipbutton", _.href = "javascript:void(0);", _.innerHTML = this._options.skipLabel, _.onclick = function() {
                e._introItems.length - 1 == e._currentStep && "function" == typeof e._introCompleteCallback && e._introCompleteCallback.call(e), e._introItems.length - 1 != e._currentStep && "function" == typeof e._introExitCallback && e._introExitCallback.call(e), l.call(e, e._targetElement)
            }, P.appendChild(_), this._introItems.length > 1 && (P.appendChild(w), P.appendChild(C)), I.appendChild(P), a.call(e, t.element, I, L, z)
        }
        this._options.disableInteraction === !0 && u.call(e), w.removeAttribute("tabIndex"), C.removeAttribute("tabIndex"), 0 == this._currentStep && this._introItems.length > 1 ? (w.className = "introjs-button introjs-prevbutton introjs-disabled", w.tabIndex = "-1", C.className = "introjs-button introjs-nextbutton", _.innerHTML = this._options.skipLabel) : this._introItems.length - 1 == this._currentStep || 1 == this._introItems.length ? (_.innerHTML = this._options.doneLabel, w.className = "introjs-button introjs-prevbutton", C.className = "introjs-button introjs-nextbutton introjs-disabled", C.tabIndex = "-1") : (w.className = "introjs-button introjs-prevbutton", C.className = "introjs-button introjs-nextbutton", _.innerHTML = this._options.skipLabel), C.focus(), t.element.className += " introjs-showElement";
        var D = f(t.element, "position");
        "absolute" !== D && "relative" !== D && (t.element.className += " introjs-relativePosition");
        for (var K = t.element.parentNode; null != K && "body" !== K.tagName.toLowerCase();) {
            var V = f(K, "z-index"),
                W = parseFloat(f(K, "opacity")),
                $ = f(K, "transform") || f(K, "-webkit-transform") || f(K, "-moz-transform") || f(K, "-ms-transform") || f(K, "-o-transform");
            (/[0-9]+/.test(V) || 1 > W || "none" !== $) && (K.className += " introjs-fixParent"), K = K.parentNode
        }
        if (!g(t.element) && this._options.scrollToElement === !0) {
            var F = t.element.getBoundingClientRect(),
                Z = m().height,
                J = F.bottom - (F.bottom - F.top),
                G = F.bottom - Z;
            0 > J || t.element.clientHeight > Z ? window.scrollBy(0, J - 30) : window.scrollBy(0, G + 100)
        }
        "undefined" != typeof this._introAfterChangeCallback && this._introAfterChangeCallback.call(this, t.element)
    }

    function f(t, e) {
        var n = "";
        return t.currentStyle ? n = t.currentStyle[e] : document.defaultView && document.defaultView.getComputedStyle && (n = document.defaultView.getComputedStyle(t, null).getPropertyValue(e)), n && n.toLowerCase ? n.toLowerCase() : n
    }

    function m() {
        if (void 0 != window.innerWidth) return {
            width: window.innerWidth,
            height: window.innerHeight
        };
        var t = document.documentElement;
        return {
            width: t.clientWidth,
            height: t.clientHeight
        }
    }

    function g(t) {
        var e = t.getBoundingClientRect();
        return e.top >= 0 && e.left >= 0 && e.bottom + 80 <= window.innerHeight && e.right <= window.innerWidth
    }

    function y(t) {
        var e = document.createElement("div"),
            n = "",
            o = this;
        if (e.className = "introjs-overlay", "body" === t.tagName.toLowerCase()) n += "top: 0;bottom: 0; left: 0;right: 0;position: fixed;", e.setAttribute("style", n);
        else {
            var i = b(t);
            i && (n += "width: " + i.width + "px; height:" + i.height + "px; top:" + i.top + "px;left: " + i.left + "px;", e.setAttribute("style", n))
        }
        return t.appendChild(e), e.onclick = function() {
            1 == o._options.exitOnOverlayClick && (l.call(o, t), void 0 != o._introExitCallback && o._introExitCallback.call(o))
        }, setTimeout(function() {
            n += "opacity: " + o._options.overlayOpacity.toString() + ";", e.setAttribute("style", n)
        }, 10), !0
    }

    function b(t) {
        var e = {};
        e.width = t.offsetWidth, e.height = t.offsetHeight;
        for (var n = 0, o = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);) n += t.offsetLeft, o += t.offsetTop, t = t.offsetParent;
        return e.top = o, e.left = n, e
    }

    function v() {
        var t = parseInt(this._currentStep + 1, 10);
        return t / this._introItems.length * 100
    }

    function _(t, e) {
        var n = {};
        for (var o in t) n[o] = t[o];
        for (var o in e) n[o] = e[o];
        return n
    }
    var w = "1.0.0",
        C = function(t) {
            if ("object" == typeof t) return new e(t);
            if ("string" == typeof t) {
                var n = document.querySelector(t);
                if (n) return new e(n);
                throw new Error("There is no element with given selector.")
            }
            return new e(document.body)
        };
    return C.version = w, C.fn = e.prototype = {
        clone: function() {
            return new e(this)
        },
        setOption: function(t, e) {
            return this._options[t] = e, this
        },
        setOptions: function(t) {
            return this._options = _(this._options, t), this
        },
        start: function() {
            return n.call(this, this._targetElement), this
        },
        goToStep: function(t) {
            return i.call(this, t), this
        },
        nextStep: function() {
            return r.call(this), this
        },
        previousStep: function() {
            return s.call(this), this
        },
        exit: function() {
            return l.call(this, this._targetElement), this
        },
        refresh: function() {
            return p.call(this, document.querySelector(".introjs-helperLayer")), p.call(this, document.querySelector(".introjs-tooltipReferenceLayer")), this
        },
        onbeforechange: function(t) {
            if ("function" != typeof t) throw new Error("Provided callback for onbeforechange was not a function");
            return this._introBeforeChangeCallback = t, this
        },
        onchange: function(t) {
            if ("function" != typeof t) throw new Error("Provided callback for onchange was not a function.");
            return this._introChangeCallback = t, this
        },
        onafterchange: function(t) {
            if ("function" != typeof t) throw new Error("Provided callback for onafterchange was not a function");
            return this._introAfterChangeCallback = t, this
        },
        oncomplete: function(t) {
            if ("function" != typeof t) throw new Error("Provided callback for oncomplete was not a function.");
            return this._introCompleteCallback = t, this
        },
        onexit: function(t) {
            if ("function" != typeof t) throw new Error("Provided callback for onexit was not a function.");
            return this._introExitCallback = t, this
        }
    }, t.introJs = C, C
});