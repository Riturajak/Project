; /*FB_PKG_DELIM*/

__d("logVideosClickTracking", ["clickRefAction"], (function(a, b, c, d, e, f) {
    function a(a) {
        b("clickRefAction")("click", a, null, "FORCE")
    }
    e.exports = a
}), null);
__d("Animation", ["BrowserSupport", "CSS", "DOM", "DataStore", "Style", "clearInterval", "clearTimeout", "getVendorPrefixedName", "requestAnimationFrame", "setIntervalAcrossTransitions", "setTimeoutAcrossTransitions", "shield"], (function(a, b, c, d, e, f) {
    var g = b("requestAnimationFrame"),
        h = [],
        i;

    function j(b) {
        if (a == this) return new j(b);
        else this.obj = b, this._reset_state(), this.queue = [], this.last_attr = null, this.unit = "px", this.behaviorOverrides = {
            ignoreUserScroll: !1
        }
    }

    function k(a) {
        if (b("BrowserSupport").hasCSS3DTransforms()) return n(a);
        else return m(a)
    }

    function l(a) {
        return a.toFixed(8)
    }

    function m(a) {
        a = [a[0], a[4], a[1], a[5], a[12], a[13]];
        return "matrix(" + a.map(l).join(",") + ")"
    }

    function n(a) {
        return "matrix3d(" + a.map(l).join(",") + ")"
    }

    function o(a, b) {
        a || (a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        var c = [];
        for (var d = 0; d < 4; d++)
            for (var e = 0; e < 4; e++) {
                var f = 0;
                for (var g = 0; g < 4; g++) f += a[d * 4 + g] * b[g * 4 + e];
                c[d * 4 + e] = f
            }
        return c
    }
    var p = 0;
    j.prototype._reset_state = function() {
        this.state = {
            attrs: {},
            duration: 500
        }
    };
    j.prototype.stop = function() {
        this._reset_state();
        this.queue = [];
        return this
    };
    j.prototype._build_container = function() {
        if (this.container_div) {
            this._refresh_container();
            return
        }
        if (this.obj.firstChild && this.obj.firstChild.__animation_refs) {
            this.container_div = this.obj.firstChild;
            this.container_div.__animation_refs++;
            this._refresh_container();
            return
        }
        var a = document.createElement("div");
        a.style.padding = "0px";
        a.style.margin = "0px";
        a.style.border = "0px";
        a.__animation_refs = 1;
        var b = this.obj.childNodes;
        while (b.length) a.appendChild(b[0]);
        this.obj.appendChild(a);
        this._orig_overflow = this.obj.style.overflow;
        this.obj.style.overflow = "hidden";
        this.container_div = a;
        this._refresh_container()
    };
    j.prototype._refresh_container = function() {
        this.container_div.style.height = "auto", this.container_div.style.width = "auto", this.container_div.style.height = this.container_div.offsetHeight + this.unit, this.container_div.style.width = this.container_div.offsetWidth + this.unit
    };
    j.prototype._destroy_container = function() {
        if (!this.container_div) return;
        if (!--this.container_div.__animation_refs) {
            var a = this.container_div.childNodes;
            while (a.length) this.obj.appendChild(a[0]);
            this.obj.removeChild(this.container_div)
        }
        this.container_div = null;
        this.obj.style.overflow = this._orig_overflow
    };
    var q = 1,
        r = 2,
        s = 3;
    j.prototype._attr = function(a, b, c) {
        a = a.replace(/-[a-z]/gi, function(a) {
            return a.substring(1).toUpperCase()
        });
        var d = !1;
        switch (a) {
            case "background":
                this._attr("backgroundColor", b, c);
                return this;
            case "backgroundColor":
            case "borderColor":
            case "color":
                b = w(b);
                break;
            case "opacity":
                b = parseFloat(b, 10);
                break;
            case "height":
            case "width":
                b == "auto" ? d = !0 : b = parseInt(b, 10);
                break;
            case "borderWidth":
            case "lineHeight":
            case "fontSize":
            case "margin":
            case "marginBottom":
            case "marginLeft":
            case "marginRight":
            case "marginTop":
            case "padding":
            case "paddingBottom":
            case "paddingLeft":
            case "paddingRight":
            case "paddingTop":
            case "bottom":
            case "left":
            case "right":
            case "top":
            case "scrollTop":
            case "scrollLeft":
                b = parseInt(b, 10);
                break;
            case "rotateX":
            case "rotateY":
            case "rotateZ":
                b = parseInt(b, 10) * Math.PI / 180;
                break;
            case "translateX":
            case "translateY":
            case "translateZ":
            case "scaleX":
            case "scaleY":
            case "scaleZ":
                b = parseFloat(b, 10);
                break;
            case "rotate3d":
                this._attr("rotateX", b[0], c);
                this._attr("rotateY", b[1], c);
                this._attr("rotateZ", b[2], c);
                return this;
            case "rotate":
                this._attr("rotateZ", b, c);
                return this;
            case "scale3d":
                this._attr("scaleZ", b[2], c);
            case "scale":
                this._attr("scaleX", b[0], c);
                this._attr("scaleY", b[1], c);
                return this;
            case "translate3d":
                this._attr("translateZ", b[2], c);
            case "translate":
                this._attr("translateX", b[0], c);
                this._attr("translateY", b[1], c);
                return this;
            default:
                throw new Error(a + " is not a supported attribute!")
        }
        this.state.attrs[a] === void 0 && (this.state.attrs[a] = {});
        d && (this.state.attrs[a].auto = !0);
        switch (c) {
            case s:
                this.state.attrs[a].start = b;
                break;
            case r:
                this.state.attrs[a].by = !0;
            case q:
                this.state.attrs[a].value = b;
                break
        }
    };

    function t(a) {
        var c, d = parseInt((c = b("Style")).get(a, "paddingLeft"), 10),
            e = parseInt(c.get(a, "paddingRight"), 10),
            f = parseInt(c.get(a, "borderLeftWidth"), 10);
        c = parseInt(c.get(a, "borderRightWidth"), 10);
        return a.offsetWidth - (d ? d : 0) - (e ? e : 0) - (f ? f : 0) - (c ? c : 0)
    }

    function u(a) {
        var c, d = parseInt((c = b("Style")).get(a, "paddingTop"), 10),
            e = parseInt(c.get(a, "paddingBottom"), 10),
            f = parseInt(c.get(a, "borderTopWidth"), 10);
        c = parseInt(c.get(a, "borderBottomWidth"), 10);
        return a.offsetHeight - (d ? d : 0) - (e ? e : 0) - (f ? f : 0) - (c ? c : 0)
    }
    j.prototype.setUnit = function(a) {
        this.unit = a;
        return this
    };
    j.prototype.to = function(a, b) {
        b === void 0 ? this._attr(this.last_attr, a, q) : (this._attr(a, b, q), this.last_attr = a);
        return this
    };
    j.prototype.by = function(a, b) {
        b === void 0 ? this._attr(this.last_attr, a, r) : (this._attr(a, b, r), this.last_attr = a);
        return this
    };
    j.prototype.from = function(a, b) {
        b === void 0 ? this._attr(this.last_attr, a, s) : (this._attr(a, b, s), this.last_attr = a);
        return this
    };
    j.prototype.duration = function(a) {
        this.state.duration = a ? a : 0;
        return this
    };
    j.prototype.checkpoint = function(a, b) {
        a === void 0 && (a = 1);
        this.state.checkpoint = a;
        this.queue.push(this.state);
        this._reset_state();
        this.state.checkpointcb = b;
        return this
    };
    j.prototype.blind = function() {
        this.state.blind = !0;
        return this
    };
    j.prototype.hide = function() {
        this.state.hide = !0;
        return this
    };
    j.prototype.show = function() {
        this.state.show = !0;
        return this
    };
    j.prototype.ease = function(a) {
        this.state.ease = a;
        return this
    };
    j.prototype.CSSAnimation = function(a) {
        var b = {
            duration: this.state.duration
        };
        this.state.ondone && (b.callback = this.state.ondone);
        a(this.obj, b)
    };
    j.prototype.go = function() {
        var a = Date.now();
        this.queue.push(this.state);
        for (var b = 0; b < this.queue.length; b++) this.queue[b].start = a - p, this.queue[b].checkpoint && (a += this.queue[b].checkpoint * this.queue[b].duration);
        x(this);
        return this
    };
    j.prototype._show = function() {
        b("CSS").show(this.obj)
    };
    j.prototype._hide = function() {
        b("CSS").hide(this.obj)
    };
    j.prototype.overrideBehavior = function(a) {
        this.behaviorOverrides = babelHelpers["extends"]({}, this.behaviorOverrides, a);
        return this
    };
    j.prototype._frame = function(c) {
        var d = !0,
            e = !1,
            f;

        function g(a) {
            return document.documentElement[a] || document.body[a]
        }

        function h(a, b) {
            return a === document.body ? g(b) : a[b]
        }

        function i(a, b) {
            return b.lastScrollTop !== void 0 && b.lastScrollTop !== h(a.obj, "scrollTop") || b.lastScrollLeft !== void 0 && b.lastScrollLeft !== h(a.obj, "scrollLeft")
        }

        function j(a, b) {
            b.lastScrollTop = h(a.obj, "scrollTop"), b.lastScrollLeft = h(a.obj, "scrollLeft")
        }
        for (var l = 0; l < this.queue.length; l++) {
            var m = this.queue[l];
            if (m.start > c) {
                d = !1;
                continue
            }
            m.checkpointcb && (this._callback(m.checkpointcb, c - m.start), m.checkpointcb = null);
            if (m.started === void 0) {
                m.show && this._show();
                for (var n in m.attrs) {
                    if (m.attrs[n].start !== void 0) continue;
                    switch (n) {
                        case "backgroundColor":
                        case "borderColor":
                        case "color":
                            f = w(b("Style").get(this.obj, n == "borderColor" ? "borderLeftColor" : n));
                            m.attrs[n].by && (m.attrs[n].value[0] = Math.min(255, Math.max(0, m.attrs[n].value[0] + f[0])), m.attrs[n].value[1] = Math.min(255, Math.max(0, m.attrs[n].value[1] + f[1])), m.attrs[n].value[2] = Math.min(255, Math.max(0, m.attrs[n].value[2] + f[2])));
                            break;
                        case "opacity":
                            f = b("Style").getOpacity(this.obj);
                            m.attrs[n].by && (m.attrs[n].value = Math.min(1, Math.max(0, m.attrs[n].value + f)));
                            break;
                        case "height":
                            f = u(this.obj);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break;
                        case "width":
                            f = t(this.obj);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break;
                        case "scrollLeft":
                        case "scrollTop":
                            f = h(this.obj, n);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            j(this, m);
                            break;
                        case "rotateX":
                        case "rotateY":
                        case "rotateZ":
                        case "translateX":
                        case "translateY":
                        case "translateZ":
                            f = b("DataStore").get(this.obj, n, 0);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break;
                        case "scaleX":
                        case "scaleY":
                        case "scaleZ":
                            f = b("DataStore").get(this.obj, n, 1);
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break;
                        default:
                            f = parseInt(b("Style").get(this.obj, n), 10) || 0;
                            m.attrs[n].by && (m.attrs[n].value += f);
                            break
                    }
                    m.attrs[n].start = f
                }
                if (m.attrs.height && m.attrs.height.auto || m.attrs.width && m.attrs.width.auto) {
                    this._destroy_container();
                    for (var n in {
                            height: 1,
                            width: 1,
                            fontSize: 1,
                            borderLeftWidth: 1,
                            borderRightWidth: 1,
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            paddingLeft: 1,
                            paddingRight: 1,
                            paddingTop: 1,
                            paddingBottom: 1
                        }) m.attrs[n] && (this.obj.style[n] = m.attrs[n].value + (typeof m.attrs[n].value === "number" ? this.unit : ""));
                    m.attrs.height && m.attrs.height.auto && (m.attrs.height.value = u(this.obj));
                    m.attrs.width && m.attrs.width.auto && (m.attrs.width.value = t(this.obj))
                }
                m.started = !0;
                m.blind && this._build_container()
            }
            var p = (c - m.start) / m.duration;
            p >= 1 ? (p = 1, m.hide && this._hide()) : d = !1;
            var q = m.ease ? m.ease(p) : p;
            !e && p != 1 && m.blind && (e = !0);
            for (var n in m.attrs) switch (n) {
                case "backgroundColor":
                case "borderColor":
                case "color":
                    m.attrs[n].start[3] != m.attrs[n].value[3] ? this.obj.style[n] = "rgba(" + v(q, m.attrs[n].start[0], m.attrs[n].value[0], !0) + "," + v(q, m.attrs[n].start[1], m.attrs[n].value[1], !0) + "," + v(q, m.attrs[n].start[2], m.attrs[n].value[2], !0) + "," + v(q, m.attrs[n].start[3], m.attrs[n].value[3], !1) + ")" : this.obj.style[n] = "rgb(" + v(q, m.attrs[n].start[0], m.attrs[n].value[0], !0) + "," + v(q, m.attrs[n].start[1], m.attrs[n].value[1], !0) + "," + v(q, m.attrs[n].start[2], m.attrs[n].value[2], !0) + ")";
                    break;
                case "opacity":
                    b("Style").set(this.obj, "opacity", v(q, m.attrs[n].start, m.attrs[n].value));
                    break;
                case "height":
                case "width":
                    this.obj.style[n] = q == 1 && m.attrs[n].auto ? "auto" : v(q, m.attrs[n].start, m.attrs[n].value, !0) + this.unit;
                    break;
                case "scrollLeft":
                case "scrollTop":
                    var r = this.obj === document.body;
                    if (!this.behaviorOverrides.ignoreUserScroll && i(this, m)) delete m.attrs.scrollTop, delete m.attrs.scrollLeft;
                    else {
                        var s = v(q, m.attrs[n].start, m.attrs[n].value, !0);
                        !r ? this.obj[n] = s : n == "scrollLeft" ? a.scrollTo(s, g("scrollTop")) : a.scrollTo(g("scrollLeft"), s);
                        j(this, m)
                    }
                    break;
                case "translateX":
                case "translateY":
                case "translateZ":
                case "rotateX":
                case "rotateY":
                case "rotateZ":
                case "scaleX":
                case "scaleY":
                case "scaleZ":
                    b("DataStore").set(this.obj, n, v(q, m.attrs[n].start, m.attrs[n].value, !1));
                    break;
                default:
                    this.obj.style[n] = v(q, m.attrs[n].start, m.attrs[n].value, !0) + this.unit;
                    break
            }
            r = null;
            s = b("DataStore").get(this.obj, "translateX", 0);
            n = b("DataStore").get(this.obj, "translateY", 0);
            q = b("DataStore").get(this.obj, "translateZ", 0);
            (s || n || q) && (r = o(r, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, s, n, q, 1]));
            s = b("DataStore").get(this.obj, "scaleX", 1);
            n = b("DataStore").get(this.obj, "scaleY", 1);
            q = b("DataStore").get(this.obj, "scaleZ", 1);
            (s - 1 || n - 1 || q - 1) && (r = o(r, [s, 0, 0, 0, 0, n, 0, 0, 0, 0, q, 0, 0, 0, 0, 1]));
            s = b("DataStore").get(this.obj, "rotateX", 0);
            s && (r = o(r, [1, 0, 0, 0, 0, Math.cos(s), Math.sin(-s), 0, 0, Math.sin(s), Math.cos(s), 0, 0, 0, 0, 1]));
            n = b("DataStore").get(this.obj, "rotateY", 0);
            n && (r = o(r, [Math.cos(n), 0, Math.sin(n), 0, 0, 1, 0, 0, Math.sin(-n), 0, Math.cos(n), 0, 0, 0, 0, 1]));
            q = b("DataStore").get(this.obj, "rotateZ", 0);
            q && (r = o(r, [Math.cos(q), Math.sin(-q), 0, 0, Math.sin(q), Math.cos(q), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
            s = b("getVendorPrefixedName")("transform");
            if (s)
                if (r) {
                    n = k(r);
                    b("Style").set(this.obj, s, n)
                } else d && b("Style").set(this.obj, s, null);
            p == 1 && (this.queue.splice(l--, 1), this._callback(m.ondone, c - m.start - m.duration))
        }!e && this.container_div && this._destroy_container();
        return !d
    };
    j.prototype.ondone = function(a) {
        this.state.ondone = a;
        return this
    };
    j.prototype._callback = function(a, b) {
        a && (p = b, a.call(this), p = 0)
    };

    function v(a, b, c, d) {
        return (d ? parseInt : parseFloat)((c - b) * a + b, 10)
    }

    function w(a) {
        var b = /^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(a);
        if (b) return [parseInt(b[1].length == 1 ? b[1] + b[1] : b[1], 16), parseInt(b[2].length == 1 ? b[2] + b[2] : b[2], 16), parseInt(b[3].length == 1 ? b[3] + b[3] : b[3], 16), 1];
        else {
            b = /^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(a);
            if (b) return [parseInt(b[1], 10), parseInt(b[2], 10), parseInt(b[3], 10), b[4] ? parseFloat(b[4]) : 1];
            else if (a == "transparent") return [255, 255, 255, 0];
            else throw new Error("Named color attributes are not supported.")
        }
    }

    function x(a) {
        h.push(a), h.length === 1 && (g ? g(z) : i = b("setIntervalAcrossTransitions")(z, 20)), g && y(), z(Date.now(), !0)
    }

    function y() {
        if (!g) throw new Error("Ending timer only valid with requestAnimationFrame");
        var a = 0;
        for (var c = 0; c < h.length; c++) {
            var d = h[c];
            for (var e = 0; e < d.queue.length; e++) {
                var f = d.queue[e].start + d.queue[e].duration;
                f > a && (a = f)
            }
        }
        i && (b("clearTimeout")(i), i = null);
        f = Date.now();
        a > f && (i = b("setTimeoutAcrossTransitions")(b("shield")(z), a - f))
    }

    function z(a, c) {
        a = Date.now();
        for (c = c === !0 ? h.length - 1 : 0; c < h.length; c++) try {
            h[c]._frame(a) || h.splice(c--, 1)
        } catch (a) {
            h.splice(c--, 1)
        }
        h.length === 0 ? i && (g ? b("clearTimeout")(i) : b("clearInterval")(i), i = null) : g && g(z)
    }
    j.ease = {};
    j.ease.begin = function(a) {
        return Math.sin(Math.PI / 2 * (a - 1)) + 1
    };
    j.ease.end = function(a) {
        return Math.sin(.5 * Math.PI * a)
    };
    j.ease.both = function(a) {
        return .5 * Math.sin(Math.PI * (a - .5)) + .5
    };
    j.prependInsert = function(a, c) {
        j.insert(a, c, b("DOM").prependContent)
    };
    j.appendInsert = function(a, c) {
        j.insert(a, c, b("DOM").appendContent)
    };
    j.insert = function(a, c, d) {
        b("Style").set(c, "opacity", 0), d(a, c), new j(c).from("opacity", 0).to("opacity", 1).duration(400).go()
    };
    e.exports = j
}), null);