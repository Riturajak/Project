; /*FB_PKG_DELIM*/

__d("LiveVideoWorkplaceP2PPlaybackTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:LiveVideoWorkplaceP2PPlaybackLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:LiveVideoWorkplaceP2PPlaybackLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:LiveVideoWorkplaceP2PPlaybackLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setBroadcastID = function(a) {
            this.$1.broadcast_id = a;
            return this
        };
        c.setBroadcastURL = function(a) {
            this.$1.broadcast_url = a;
            return this
        };
        c.setCommunityID = function(a) {
            this.$1.community_id = a;
            return this
        };
        c.setCommunityName = function(a) {
            this.$1.community_name = a;
            return this
        };
        c.setCustomerID = function(a) {
            this.$1.customer_id = a;
            return this
        };
        c.setEventStr = function(a) {
            this.$1.event_str = a;
            return this
        };
        c.setExceptionCode = function(a) {
            this.$1.exception_code = a;
            return this
        };
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        };
        c.setExceptionSeverity = function(a) {
            this.$1.exception_severity = a;
            return this
        };
        c.setExceptionTrace = function(a) {
            this.$1.exception_trace = a;
            return this
        };
        c.setExceptionType = function(a) {
            this.$1.exception_type = a;
            return this
        };
        c.setHiveClientStatsCdnRequests = function(a) {
            this.$1.hive_client_stats_cdn_requests = a;
            return this
        };
        c.setHiveClientStatsCdnResponseBytes = function(a) {
            this.$1.hive_client_stats_cdn_response_bytes = a;
            return this
        };
        c.setHiveClientStatsCdnResponseErrors = function(a) {
            this.$1.hive_client_stats_cdn_response_errors = a;
            return this
        };
        c.setHiveClientStatsCdnResponses = function(a) {
            this.$1.hive_client_stats_cdn_responses = a;
            return this
        };
        c.setHiveClientStatsNumPartners = function(a) {
            this.$1.hive_client_stats_num_partners = a;
            return this
        };
        c.setHiveClientStatsP2pRequests = function(a) {
            this.$1.hive_client_stats_p2p_requests = a;
            return this
        };
        c.setHiveClientStatsP2pResponseBytes = function(a) {
            this.$1.hive_client_stats_p2p_response_bytes = a;
            return this
        };
        c.setHiveClientStatsP2pResponseErrors = function(a) {
            this.$1.hive_client_stats_p2p_response_errors = a;
            return this
        };
        c.setHiveClientStatsP2pResponses = function(a) {
            this.$1.hive_client_stats_p2p_responses = a;
            return this
        };
        c.setHiveClientStatsSavings = function(a) {
            this.$1.hive_client_stats_savings = a;
            return this
        };
        c.setHivePartnerID = function(a) {
            this.$1.hive_partner_id = a;
            return this
        };
        c.setHivePluginTech = function(a) {
            this.$1.hive_plugin_tech = a;
            return this
        };
        c.setHiveStreamingTicketingEndpoint = function(a) {
            this.$1.hive_streaming_ticketing_endpoint = a;
            return this
        };
        c.setHTTPStatusCode = function(a) {
            this.$1.http_status_code = a;
            return this
        };
        c.setP2pPlaybackReportURL = function(a) {
            this.$1.p2p_playback_report_url = a;
            return this
        };
        c.setP2pPlaybackTicketURL = function(a) {
            this.$1.p2p_playback_ticket_url = a;
            return this
        };
        c.setSessionID = function(a) {
            this.$1.session_id = a;
            return this
        };
        c.setSummaryCdnTraffic = function(a) {
            this.$1.summary_cdn_traffic = a;
            return this
        };
        c.setSummaryP2pTraffic = function(a) {
            this.$1.summary_p2p_traffic = a;
            return this
        };
        c.setSummaryPeerSavings = function(a) {
            this.$1.summary_peer_savings = a;
            return this
        };
        c.setSummaryQualityScore = function(a) {
            this.$1.summary_quality_score = a;
            return this
        };
        c.setSummaryUniqueViewers = function(a) {
            this.$1.summary_unique_viewers = a;
            return this
        };
        c.setSummaryViewedMinutes = function(a) {
            this.$1.summary_viewed_minutes = a;
            return this
        };
        c.setTimeMs = function(a) {
            this.$1.time_ms = a;
            return this
        };
        c.setTimeSpentInP2pMs = function(a) {
            this.$1.time_spent_in_p2p_ms = a;
            return this
        };
        c.setVideoID = function(a) {
            this.$1.video_id = a;
            return this
        };
        c.setViewerManifestURL = function(a) {
            this.$1.viewer_manifest_url = a;
            return this
        };
        return a
    }();
    c = {
        broadcast_id: !0,
        broadcast_url: !0,
        community_id: !0,
        community_name: !0,
        customer_id: !0,
        event_str: !0,
        exception_code: !0,
        exception_message: !0,
        exception_severity: !0,
        exception_trace: !0,
        exception_type: !0,
        hive_client_stats_cdn_requests: !0,
        hive_client_stats_cdn_response_bytes: !0,
        hive_client_stats_cdn_response_errors: !0,
        hive_client_stats_cdn_responses: !0,
        hive_client_stats_num_partners: !0,
        hive_client_stats_p2p_requests: !0,
        hive_client_stats_p2p_response_bytes: !0,
        hive_client_stats_p2p_response_errors: !0,
        hive_client_stats_p2p_responses: !0,
        hive_client_stats_savings: !0,
        hive_partner_id: !0,
        hive_plugin_tech: !0,
        hive_streaming_ticketing_endpoint: !0,
        http_status_code: !0,
        p2p_playback_report_url: !0,
        p2p_playback_ticket_url: !0,
        session_id: !0,
        summary_cdn_traffic: !0,
        summary_p2p_traffic: !0,
        summary_peer_savings: !0,
        summary_quality_score: !0,
        summary_unique_viewers: !0,
        summary_viewed_minutes: !0,
        time_ms: !0,
        time_spent_in_p2p_ms: !0,
        video_id: !0,
        viewer_manifest_url: !0
    };
    f["default"] = a
}), 66);
__d("handleOzManifestFetchErrorEvent", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        var c = a.getNumber("initial_manifest_request_retry_count", 0),
            d = JSON.parse(a.getString("network_retry_intervals_json", "{}")),
            e = a.getNumber("live_max_try_attempts_on_404", 1),
            f = ["404", "503"];
        a.getBool("live_gracefully_handle_no_network", !1) && f.push("0");
        a.getBool("live_gracefully_handle_410", !1) && f.push("410");
        a.getBool("live_gracefully_handle_502", !1) && f.push("502");
        a.getBool("live_gracefully_handle_429", !1) && f.push("429");
        a.getBool("live_gracefully_handle_504", !1) && f.push("504");
        a.getBool("normalize_mpd_fetch_errors", !1) && f.push("20");
        var g = b.error.getExtra().code;
        if (a.getBool("no_retry_on_empty_string_error_code", !1) && g === "") return;
        a.getBool("handle_mpd_null_error_codes", !1) && (g = g != null ? g : null);
        d = d[g];
        if (b.isInitialRequest) typeof d === "number" && d > 0 && b.retryAttemptCount < c && b.retry({
            waitMs: d
        });
        else if (g != null && f.indexOf(g) > -1) switch (g) {
            case "410":
                b.endStream();
                break;
            case "404":
                e < b.consecutiveFailuresForErrorCode && b.retry();
                break;
            case "504":
            case "502":
            case "503":
            case "20":
            case "0":
                b.retry();
                break;
            case "429":
                typeof d === "number" && d > 0 && b.retry({
                    waitMs: d
                });
                break;
            default:
                break
        } else g === null && a.getBool("handle_mpd_null_error_codes", !1) && b.retry()
    }
    f["default"] = a
}), 66);
__d("handleOzStreamErrorEvent", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

    function a(a, b) {
        var c = b.error.getExtra().code;
        if (a.getBool("no_retry_on_empty_string_error_code", !1) && c === "") return;
        if (a.getBool("retry_null_error_code_in_stream", !1) && c == null) {
            b.retry();
            return
        }
        var d = JSON.parse(a.getString("network_end_broadcasts_json", "[]"));
        if (d.includes(c)) {
            b.endStream();
            return
        }
        d = JSON.parse(a.getString("network_skip_json", "[]"));
        if (d.includes(c)) {
            b.retry();
            return
        }
        d = a.getBool("back_off_pdash_504_retry", !0) ? g[b.retryAttemptCount] : 0;
        var e = JSON.parse(a.getString("network_reload_mpd_json", "[]")),
            f = a.getBool("fix_reload_manifest_retry", !1);
        if (a.getBool("back_off_pdash_504_retry", !0) && d == null && (!f || e.includes(c))) return;
        if (d != null && e.includes(c)) {
            a.getBool("network_reload_mpd_json_retry", !1) ? b.retry({
                behavior: "recover_failed_request",
                waitMs: d * 1e3
            }) : b.retry({
                waitMs: d * 1e3
            });
            return
        }
        f = JSON.parse(a.getString("network_retry_intervals_json", '{"0": 1000, "404": 2000, "502": 1000, "503": 1000, "504": 1000}'));
        e = c != null ? f[c] : null;
        if (e != null) {
            a.getBool("network_retry_intervals_json_retry", !1) ? b.retry({
                behavior: "retry_failed_request",
                waitMs: e
            }) : b.retry({
                waitMs: e
            });
            return
        }
    }
    f["default"] = a
}), 66);
__d("oz-player/manifests/OzSegmentOptions", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = !1, this.$2 = null
        }
        var b = a.prototype;
        b.setSegmentNumDecisionTime = function(a) {
            this.$2 = a
        };
        b.getSegmentNumDecisionTime = function() {
            return this.$2
        };
        b.setIsDVLEnabled = function(a) {
            this.$1 = a
        };
        b.isDVLEnabled = function() {
            return this.$1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/shims/www/OzEventEmitterWWW", ["BaseEventEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("BaseEventEmitter")
}), 98);
__d("oz-player/shims/OzEventEmitter", ["oz-player/shims/www/OzEventEmitterWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzEventEmitterWWW")
}), 98);
__d("oz-player/shims/www/OzURIWWWImplConstUri", ["ConstUriUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        a = a.getQueryParams();
        var b = {};
        a.forEach(function(a, c) {
            typeof a === "string" || typeof a === "number" ? b[c] = a : b[c] = String(a)
        });
        return b
    }
    a = function() {
        function a(a) {
            this.$1 = d("ConstUriUtils").getUri(a);
            if (this.$1 == null) throw new Error("Invalid URI passed to OzURI");
            this.$2 = h(this.$1)
        }
        var b = a.prototype;
        b.addQueryData = function(a, b) {
            var c = this.$1;
            if (typeof a === "string") {
                var d;
                c = (d = c) == null ? void 0 : d.addQueryParam(a, b === void 0 ? "" : b)
            } else {
                var e = new Map();
                Object.keys(a).forEach(function(b) {
                    e.set(b, a[b])
                });
                c = (d = c) == null ? void 0 : d.addQueryParams(e)
            }
            c != null && (this.$1 = c, this.$2 = h(this.$1))
        };
        b.getQueryData = function() {
            return this.$2
        };
        b.getDomain = function() {
            var a;
            return (a = (a = this.$1) == null ? void 0 : a.getDomain()) != null ? a : ""
        };
        b.toString = function() {
            var a;
            return (a = (a = this.$1) == null ? void 0 : a.toString()) != null ? a : ""
        };
        b.getPath = function() {
            var a;
            return (a = (a = this.$1) == null ? void 0 : a.getPath()) != null ? a : ""
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/shims/www/OzURIWWW", ["oz-player/shims/www/OzURIWWWImplConstUri"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzURIWWWImplConstUri")
}), 98);
__d("oz-player/shims/OzURI", ["oz-player/shims/www/OzURIWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzURIWWW")
}), 98);
__d("oz-player/shims/www/ozvariantWWW", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    a = h;
    g["default"] = a
}), 98);
__d("oz-player/shims/ozvariant", ["oz-player/shims/www/ozvariantWWW"], (function(a, b, c, d, e, f, g) {
    g["default"] = c("oz-player/shims/www/ozvariantWWW")
}), 98);
__d("oz-player/utils/OzNumericalHelper", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1e-5;

    function h(a, b, c) {
        c === void 0 && (c = g);
        return Math.abs(b - a) <= c
    }

    function i(a, b, c) {
        c === void 0 && (c = g);
        return a > b && !h(a, b, c)
    }

    function j(a, b, c) {
        c === void 0 && (c = g);
        return a < b && !h(a, b, c)
    }

    function a(a, b, c) {
        c === void 0 && (c = g);
        return j(a, b, c) || h(a, b, c)
    }

    function b(a, b, c) {
        c === void 0 && (c = g);
        return i(a, b, c) || h(a, b, c)
    }
    f.equalTo = h;
    f.greaterThan = i;
    f.lessThan = j;
    f.lessThanOrEqual = a;
    f.greaterThanOrEqual = b
}), 66);
__d("oz-player/utils/OzNumericalRangeUtil", ["oz-player/utils/OzNumericalHelper"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = .01;

    function i(a, b) {
        b = b.rangeEnd;
        return b == null ? !1 : Math.abs(a.rangeStart - b) > h && a.rangeStart > b
    }

    function j(a, b) {
        a = a.rangeEnd;
        b = b.rangeEnd;
        if (a == null) return !0;
        return b == null ? !1 : Math.abs(a - b) > h && a > b
    }

    function k(a, b, c, d) {
        a = c.rangeEnd;
        return a == null ? !1 : b === a || Math.abs(b - a) > ((c = d) != null ? c : h) && b > a
    }

    function a(a, b, c) {
        var d = b.rangeEnd;
        if (d == null) return !1;
        c = (c = c) != null ? c : h;
        return a - b.rangeStart >= c && d - a >= c
    }

    function l(a, b) {
        return a > b - h
    }

    function b(a) {
        if (!a.length) return [];
        var b = [],
            c = a[0];
        b.push(c);
        for (var d = 1; d < a.length; d++) {
            var e = a[d];
            if (!j(e, c)) continue;
            else i(e, c) ? (c = {
                rangeStart: e.rangeStart,
                rangeEnd: e.rangeEnd
            }, b.push(c)) : c.rangeEnd = e.rangeEnd
        }
        return b
    }

    function c(a, b, c) {
        return b.reduceRight(function(b, d) {
            k(a, d.rangeStart, c) || k(a, c.rangeStart, d) ? b.push(d) : (c.rangeEnd != null && (d.rangeEnd == null || k(a, d.rangeEnd, c)) && b.push({
                rangeStart: c.rangeEnd,
                rangeEnd: d.rangeEnd
            }), l(c.rangeStart, d.rangeStart) && b.push({
                rangeStart: d.rangeStart,
                rangeEnd: c.rangeStart
            }));
            return b
        }, []).filter(function(a) {
            return a.rangeEnd == null || a.rangeStart < a.rangeEnd
        }).reverse()
    }

    function e(a, b, c, d) {
        d === void 0 && (d = h);
        for (var e = 0; e < c.length; e++) {
            var f = c[e],
                g = f.rangeStart;
            if (l(b, g) && !k(a, b, f, d)) return e
        }
        return -1
    }

    function f(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d = d.rangeStart;
            if (!l(a, d)) return c
        }
        return -1
    }

    function m(a, b, c) {
        return a >= b ? 0 : c.reduceRight(function(c, d) {
            var e = d.rangeStart;
            d = d.rangeEnd;
            if (b < e || d != null && a > d) return c;
            else if (d == null || b <= d) return Math.min(b - e, b - a) + c;
            else if (a >= e) return Math.min(d - a, b - a) + c;
            else return d - e + c
        }, 0)
    }

    function n(a, b) {
        var c;
        c = a.length == 0 ? (c = b[b.length - 1]) != null ? c : null : null;
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            for (var g = e; g < b.length; g++) {
                var h = b[g];
                if (d("oz-player/utils/OzNumericalHelper").equalTo(f.rangeStart, h.rangeStart) && f.rangeEnd != null && h.rangeEnd != null && d("oz-player/utils/OzNumericalHelper").equalTo(f.rangeEnd, h.rangeEnd)) break;
                else if (h.rangeEnd != null && f.rangeEnd != null && !d("oz-player/utils/OzNumericalHelper").equalTo(f.rangeStart, h.rangeStart)) {
                    c = {
                        rangeStart: h.rangeStart,
                        rangeEnd: h.rangeEnd
                    };
                    break
                } else if (h.rangeEnd != null && f.rangeEnd != null && d("oz-player/utils/OzNumericalHelper").equalTo(f.rangeStart, h.rangeStart) && !d("oz-player/utils/OzNumericalHelper").equalTo(f.rangeEnd, h.rangeEnd)) {
                    c = {
                        rangeStart: f.rangeEnd,
                        rangeEnd: h.rangeEnd
                    };
                    break
                }
            }
            if (c !== null) break
        }
        return c
    }

    function o(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push({
            rangeStart: a[c].startTime,
            rangeEnd: a[c].endTime
        });
        return b
    }
    g.isAfter = k;
    g.isWithin = a;
    g.isLargerThan = l;
    g.mergeSortedRanges = b;
    g.diffSortedRanges = c;
    g.findCurrentRangeIndex = e;
    g.findNextRangeIndex = f;
    g.findDiffCoveredByRanges = m;
    g.firstAddedInSortedRanges = n;
    g.convertFromTimeRanges = o
}), 98);
__d("oz-player/manifests/SegmentTemplateSegmentsContainer", ["oz-player/manifests/OzSegmentOptions", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzURI", "oz-player/shims/ozvariant", "oz-player/utils/OzNumericalHelper", "oz-player/utils/OzNumericalRangeUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e-4;
    a = function() {
        function a(a, b, d, e, f, g) {
            g === void 0 && (g = !1), this.$7 = new(c("oz-player/shims/OzEventEmitter"))(), this.$10 = null, this.$8 = a, this.$2 = b, this.$3 = d, this.$1 = f, this.$4 = e, this.$5 = this.$11(this.$4), this.$6 = g, this.$9 = this.$8.getNumber("live_numerical_error_epsilon")
        }
        var b = a.prototype;
        b.getSegmentByTime = function(a) {
            a = this.$12(a);
            a = a * this.$3;
            var b = null;
            for (var c = this.$4.length - 1; c >= 0; c--) {
                var e = this.$4[c];
                if (d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(e.t + e.d * (e.r + 1), a, this.$9)) break;
                b = e
            }
            if (b === null) return null;
            if (d("oz-player/utils/OzNumericalHelper").greaterThan(b.t, a, this.$9)) return null;
            e = Math.max(0, Math.floor((a - b.t + this.$9) / b.d));
            return this.$13(b, e)
        };
        b.getSegment = function(a) {
            var b = 0;
            a = a;
            while (a >= 0 && b < this.$4.length) {
                var c = this.$4[b];
                c = c.r;
                c = c + 1;
                if (a >= c) {
                    a -= c;
                    b++;
                    continue
                }
                break
            }
            c = this.$4[b];
            return !c ? null : this.$13(c, a)
        };
        b.getSegmentAfter = function(a) {
            a = a.getTimeRange().endTime;
            return this.getSegmentByTime(a)
        };
        b.getPredictedSegmentAfter = function(a) {
            return null
        };
        b.canPredict = function() {
            return !1
        };
        b.canApproximateId = function() {
            return !1
        };
        b.isEndingSegment = function(a) {
            if (!this.$4 || !this.$4.length || !this.$6) return !1;
            var b = this.$4[this.$4.length - 1],
                c = b.r;
            b = this.$13(b, c);
            return Math.abs(b.getTimeRange().startTime - a.getTimeRange().startTime) + Math.abs(b.getTimeRange().endTime - a.getTimeRange().endTime) < h
        };
        b.updateWith = function(b) {
            b instanceof a || c("oz-player/shims/ozvariant")(0, 646), this.$6 = b.$6, this.$14(b.$4), this.$15(b.$4), this.$7.emit("segment_updated")
        };
        b.getTimeRanges = function() {
            return this.$10 ? this.$16(this.$5, this.$10) : this.$5
        };
        b.blockTimeRange = function(a) {
            this.$10 = a
        };
        b.$16 = function(a, b) {
            return d("oz-player/utils/OzNumericalRangeUtil").diffSortedRanges(this.$8, a.map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            }), {
                rangeStart: b.startTime,
                rangeEnd: b.endTime
            }).map(function(a) {
                return {
                    startTime: a.rangeStart,
                    endTime: a.rangeEnd == null ? Infinity : a.rangeEnd
                }
            })
        };
        b.addUpdateListener = function(a) {
            return this.$7.addListener("segment_updated", a)
        };
        b.$12 = function(a) {
            var b = a,
                c = d("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(this.$8, a, this.getTimeRanges().map(function(a) {
                    return {
                        rangeStart: a.startTime,
                        rangeEnd: a.endTime
                    }
                }));
            if (c === -1) {
                c = d("oz-player/utils/OzNumericalRangeUtil").findNextRangeIndex(a, this.getTimeRanges().map(function(a) {
                    return {
                        rangeStart: a.startTime,
                        rangeEnd: a.endTime
                    }
                }));
                c !== -1 && (b = this.getTimeRanges()[c].startTime)
            }
            return b
        };
        b.$14 = function(a) {
            var b;
            (b = this.$4).splice.apply(b, [0, this.$4.length].concat(a));
            return
        };
        b.$15 = function(a) {
            a = this.$11(a);
            a = d("oz-player/utils/OzNumericalRangeUtil").mergeSortedRanges(this.$5.map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            }).concat(a.map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            })));
            this.$5 = a.map(function(a) {
                return {
                    startTime: a.rangeStart,
                    endTime: a.rangeEnd == null ? Infinity : a.rangeEnd
                }
            })
        };
        b.$11 = function(a) {
            var b = this;
            a = d("oz-player/utils/OzNumericalRangeUtil").mergeSortedRanges(this.$4.map(function(a) {
                var c = b.$13(a, 0).getTimeRange().startTime;
                a = b.$13(a, a.r).getTimeRange().endTime;
                return {
                    rangeStart: c,
                    rangeEnd: a
                }
            }));
            return a.map(function(a) {
                var b = a.rangeStart;
                a = a.rangeEnd;
                a = a == null ? Infinity : a;
                return {
                    startTime: b,
                    endTime: a
                }
            })
        };
        b.$13 = function(a, b) {
            var d = this;
            b === void 0 && (b = 0);
            var e = a.t,
                f = a.d,
                g = a.r;
            a = a.id;
            var h = e + f * b,
                i = this.$8.getBool("use_scf_timebased_segments"),
                j = a != null ? a - (g - b) : null,
                k = new(c("oz-player/manifests/OzSegmentOptions"))();
            return {
                getData: function() {
                    return null
                },
                getURI: function() {
                    var a = d.$1 != null && j != null ? d.$1.replace("$Number$", j.toString()) : d.$2.replace("$Time$", h.toString());
                    a = new(c("oz-player/shims/OzURI"))(a);
                    i && a.addQueryData("_nc_scf", 1);
                    return a
                },
                getTimeRange: function() {
                    return {
                        startTime: h / d.$3,
                        endTime: (h + f) / d.$3
                    }
                },
                getByteRange: function() {
                    return null
                },
                getSequenceNumber: function() {
                    return null
                },
                getOptions: function() {
                    return k
                }
            }
        };
        b.getSegmentGroups = function() {
            return this.$4
        };
        b.getEndingSegment = function() {
            if (this.$4.length == 0) return null;
            var a = this.$4[this.$4.length - 1],
                b = a.r;
            return this.$13(a, b)
        };
        b.forceParseIfNotParsed = function() {};
        b.getMaxGopSec = function() {
            return null
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/utils/OzUrlHelper", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a;
        var b = a.indexOf("://"),
            c = a.indexOf("/", b + 3);
        c > b && (a = a.substring(c));
        return a
    }

    function g(a) {
        a = a;
        var b = a.lastIndexOf("/"),
            c = a.lastIndexOf("://");
        b > c + 2 && (a = a.substring(0, b + 1));
        return a
    }

    function h(a) {
        a = a;
        a = g(a);
        return a.endsWith("/") ? g(a.substring(0, a.length - 1)) : a
    }

    function i(a, b) {
        a = g(a);
        b = b;
        while (b.length)
            if (b.startsWith("./")) b = b.substring(2);
            else if (b.startsWith("../")) b = b.substring(3), a = h(a), a.endsWith("/") && (a = a.substring(0, a.length - 1));
        else if (b.startsWith("..")) b = b.substring(2), a = h(a);
        else if (b.startsWith(".")) b = b.substring(1);
        else break;
        b && b.length && (a.endsWith("/") || (a += "/"), a += b);
        return a
    }

    function j() {
        for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
        if (!b || !b.length) return "";
        if (b.length === 1) return b[0];
        var d = b.shift();
        while (b.length > 0) d = i(d, b.shift());
        return d
    }

    function b(a, b) {
        return k(b) ? b : j(a, b)
    }

    function k(a) {
        var b = /^https?:\/\//i;
        return b.test(a)
    }
    f.stripToPathAndQueryOnly = a;
    f.joinRelativeUrlPaths = j;
    f.joinUrlPaths = b
}), 66);
__d("PredictedSegmentTemplateSegmentsContainer", ["oz-player/manifests/OzSegmentOptions", "oz-player/manifests/SegmentTemplateSegmentsContainer", "oz-player/shims/OzURI", "oz-player/shims/ozvariant", "oz-player/utils/OzNumericalHelper", "oz-player/utils/OzNumericalRangeUtil", "oz-player/utils/OzUrlHelper"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f, g, h, i, j, k) {
            k === void 0 && (k = !1);
            c = a.call(this, b, c, e, f, null, k) || this;
            c.$PredictedSegmentTemplateSegmentsContainer9 = 0;
            c.$PredictedSegmentTemplateSegmentsContainer11 = null;
            c.$PredictedSegmentTemplateSegmentsContainer10 = d;
            c.$PredictedSegmentTemplateSegmentsContainer8 = k;
            c.$PredictedSegmentTemplateSegmentsContainer12 = f;
            c.$PredictedSegmentTemplateSegmentsContainer7 = b;
            c.$PredictedSegmentTemplateSegmentsContainer5 = e;
            c.$PredictedSegmentTemplateSegmentsContainer1 = g;
            c.$PredictedSegmentTemplateSegmentsContainer3 = i;
            c.$PredictedSegmentTemplateSegmentsContainer2 = h;
            c.$PredictedSegmentTemplateSegmentsContainer4 = j;
            c.$PredictedSegmentTemplateSegmentsContainer6 = b.getNumber("live_numerical_error_epsilon");
            for (d = 0; d < c.$PredictedSegmentTemplateSegmentsContainer12.length; d++) c.$PredictedSegmentTemplateSegmentsContainer9 = Math.max(c.$PredictedSegmentTemplateSegmentsContainer12[d].d, c.$PredictedSegmentTemplateSegmentsContainer9);
            return c
        }
        var e = b.prototype;
        e.$PredictedSegmentTemplateSegmentsContainer13 = function() {
            if (this.$PredictedSegmentTemplateSegmentsContainer2 != null && this.$PredictedSegmentTemplateSegmentsContainer4 != null) return {
                predictedAverageDuration: this.$PredictedSegmentTemplateSegmentsContainer4,
                predictedMediaStartNumber: this.$PredictedSegmentTemplateSegmentsContainer2
            };
            else return null
        };
        e.$PredictedSegmentTemplateSegmentsContainer14 = function(a, b, e) {
            var f = this;
            Number.isNaN(e) && c("oz-player/shims/ozvariant")(0, 54238);
            var g = this.$PredictedSegmentTemplateSegmentsContainer1.replace("$Number$", e.toString()),
                h = this.$PredictedSegmentTemplateSegmentsContainer7.getLegacyConfig().getString("cdn_experiment_id", ""),
                i = this.$PredictedSegmentTemplateSegmentsContainer7.getLegacyConfig().getNumber("use_dvl_with_timeout_ms", 0),
                j = new(c("oz-player/manifests/OzSegmentOptions"))();
            return {
                getByteRange: function() {
                    return null
                },
                getData: function() {
                    return null
                },
                getOptions: function() {
                    return j
                },
                getSequenceNumber: function() {
                    return e
                },
                getTimeRange: function() {
                    return {
                        endTime: b,
                        startTime: a
                    }
                },
                getURI: function() {
                    var a = new(c("oz-player/shims/OzURI"))(g);
                    h.length !== 0 && a.addQueryData("_nc_expid", h);
                    var b = j.isDVLEnabled();
                    b && i > 0 && f.$PredictedSegmentTemplateSegmentsContainer10 != null && (a.addQueryData("_nc_dinfo-manifest-url", d("oz-player/utils/OzUrlHelper").stripToPathAndQueryOnly(f.$PredictedSegmentTemplateSegmentsContainer10)), a.addQueryData("_nc_dinfo-timeout", i));
                    return a
                }
            }
        };
        e.updateWith = function(d) {
            d instanceof b || c("oz-player/shims/ozvariant")(0, 646);
            this.$PredictedSegmentTemplateSegmentsContainer3 = d.$PredictedSegmentTemplateSegmentsContainer3;
            this.$PredictedSegmentTemplateSegmentsContainer1 = d.$PredictedSegmentTemplateSegmentsContainer1;
            a.prototype.updateWith.call(this, d);
            this.$PredictedSegmentTemplateSegmentsContainer12 = d.$PredictedSegmentTemplateSegmentsContainer12;
            this.$PredictedSegmentTemplateSegmentsContainer8 = d.$PredictedSegmentTemplateSegmentsContainer8;
            for (d = 0; d < this.$PredictedSegmentTemplateSegmentsContainer12.length; d++) this.$PredictedSegmentTemplateSegmentsContainer9 = Math.max(this.$PredictedSegmentTemplateSegmentsContainer12[d].d, this.$PredictedSegmentTemplateSegmentsContainer9)
        };
        e.getSegmentByTime = function(a) {
            return this.canApproximateId() ? this.$PredictedSegmentTemplateSegmentsContainer15(a) : this.$PredictedSegmentTemplateSegmentsContainer16(a)
        };
        e.getPredictedSegmentAfter = function(a) {
            a = a != null ? a.getSequenceNumber() : null;
            return a != null && this.canPredict() ? this.$PredictedSegmentTemplateSegmentsContainer14(0, 0, a + 1) : null
        };
        e.blockTimeRange = function(b) {
            this.$PredictedSegmentTemplateSegmentsContainer11 = b, a.prototype.blockTimeRange.call(this, b)
        };
        e.getTimeRanges = function() {
            var b = this.$PredictedSegmentTemplateSegmentsContainer13();
            if (b) {
                b = [{
                    endTime: (this.$PredictedSegmentTemplateSegmentsContainer12[this.$PredictedSegmentTemplateSegmentsContainer12.length - 1].t + this.$PredictedSegmentTemplateSegmentsContainer12[this.$PredictedSegmentTemplateSegmentsContainer12.length - 1].d) / this.$PredictedSegmentTemplateSegmentsContainer5,
                    startTime: (this.$PredictedSegmentTemplateSegmentsContainer12[0].t - b.predictedAverageDuration - (this.$PredictedSegmentTemplateSegmentsContainer3 - this.$PredictedSegmentTemplateSegmentsContainer12.length - Number(this.$PredictedSegmentTemplateSegmentsContainer2)) * Number(b.predictedAverageDuration)) / this.$PredictedSegmentTemplateSegmentsContainer5
                }];
                var c = this.$PredictedSegmentTemplateSegmentsContainer11;
                return c == null ? b : d("oz-player/utils/OzNumericalRangeUtil").diffSortedRanges(this.$PredictedSegmentTemplateSegmentsContainer7, b.map(function(a) {
                    return {
                        rangeEnd: a.endTime,
                        rangeStart: a.startTime
                    }
                }), {
                    rangeEnd: c.endTime,
                    rangeStart: c.startTime
                }).map(function(a) {
                    return {
                        endTime: a.rangeEnd == null ? Infinity : a.rangeEnd,
                        startTime: a.rangeStart
                    }
                })
            } else return a.prototype.getTimeRanges.call(this)
        };
        e.canPredict = function() {
            return !0
        };
        e.canApproximateId = function() {
            var a = this.$PredictedSegmentTemplateSegmentsContainer13();
            return a != null
        };
        e.$PredictedSegmentTemplateSegmentsContainer16 = function(a) {
            var b = null;
            a = a * this.$PredictedSegmentTemplateSegmentsContainer5;
            var e = this.$PredictedSegmentTemplateSegmentsContainer12.length > 0 ? this.$PredictedSegmentTemplateSegmentsContainer12[this.$PredictedSegmentTemplateSegmentsContainer12.length - 1].t + this.$PredictedSegmentTemplateSegmentsContainer12[this.$PredictedSegmentTemplateSegmentsContainer12.length - 1].d : null,
                f = this.$PredictedSegmentTemplateSegmentsContainer7.getLegacyConfig().getNumber("pdash_future_edgelatency_gops", 0);
            if (e != null && e <= a && f !== 0 && a < e + this.$PredictedSegmentTemplateSegmentsContainer9 * f) {
                e = a - (this.$PredictedSegmentTemplateSegmentsContainer12[this.$PredictedSegmentTemplateSegmentsContainer12.length - 1].t + this.$PredictedSegmentTemplateSegmentsContainer12[this.$PredictedSegmentTemplateSegmentsContainer12.length - 1].d);
                e = this.$PredictedSegmentTemplateSegmentsContainer9 ? 0 : Math.floor(e / this.$PredictedSegmentTemplateSegmentsContainer9);
                return this.$PredictedSegmentTemplateSegmentsContainer14(0, 0, this.$PredictedSegmentTemplateSegmentsContainer3 + 1 + e)
            }
            e = 0;
            for (var g = 0; this.$PredictedSegmentTemplateSegmentsContainer12.length - 1 - g >= 0; g++) {
                var h = this.$PredictedSegmentTemplateSegmentsContainer12[this.$PredictedSegmentTemplateSegmentsContainer12.length - 1 - g];
                h.r === 0 || c("oz-player/shims/ozvariant")(0, 18769);
                if (d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(h.t + h.d * (h.r + 1), a, this.$PredictedSegmentTemplateSegmentsContainer6)) break;
                b = h;
                e = g
            }
            if (b === null || f > 0 && a < b.t) return null;
            else return this.$PredictedSegmentTemplateSegmentsContainer14(b.t / this.$PredictedSegmentTemplateSegmentsContainer5, (b.t + b.d) / this.$PredictedSegmentTemplateSegmentsContainer5, this.$PredictedSegmentTemplateSegmentsContainer3 - e)
        };
        e.$PredictedSegmentTemplateSegmentsContainer15 = function(a) {
            var b = a * this.$PredictedSegmentTemplateSegmentsContainer5,
                c = this.getTimeRanges();
            if (d("oz-player/utils/OzNumericalHelper").greaterThan(c[0].startTime, a)) return null;
            else if (d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(this.$PredictedSegmentTemplateSegmentsContainer12[0].t, b)) return this.$PredictedSegmentTemplateSegmentsContainer16(a);
            else {
                c = Math.ceil((this.$PredictedSegmentTemplateSegmentsContainer12[0].t - b) / Number(this.$PredictedSegmentTemplateSegmentsContainer4));
                b = Math.max(Number(this.$PredictedSegmentTemplateSegmentsContainer2), this.$PredictedSegmentTemplateSegmentsContainer3 - this.$PredictedSegmentTemplateSegmentsContainer12.length + 1 - c);
                return this.$PredictedSegmentTemplateSegmentsContainer14(a, a + Number(this.$PredictedSegmentTemplateSegmentsContainer4) / this.$PredictedSegmentTemplateSegmentsContainer5, b)
            }
        };
        e.isEndingSegment = function(b) {
            if (!this.$PredictedSegmentTemplateSegmentsContainer8) return !1;
            var c = b.getSequenceNumber();
            return c != null ? c >= this.$PredictedSegmentTemplateSegmentsContainer3 : a.prototype.isEndingSegment.call(this, b)
        };
        e.getEndingSegment = function() {
            if (this.$PredictedSegmentTemplateSegmentsContainer12.length === 0) return null;
            var a = this.$PredictedSegmentTemplateSegmentsContainer12[this.$PredictedSegmentTemplateSegmentsContainer12.length - 1];
            return this.$PredictedSegmentTemplateSegmentsContainer14(a.t / this.$PredictedSegmentTemplateSegmentsContainer5, (a.t + a.d) / this.$PredictedSegmentTemplateSegmentsContainer5, this.$PredictedSegmentTemplateSegmentsContainer3)
        };
        e.getMaxGopSec = function() {
            return this.$PredictedSegmentTemplateSegmentsContainer9 / this.$PredictedSegmentTemplateSegmentsContainer5
        };
        return b
    }(c("oz-player/manifests/SegmentTemplateSegmentsContainer"));
    g["default"] = a
}), 98);
__d("oz-player/parsers/OzDefaultSegmentTimelineParser", ["oz-player/manifests/SegmentTemplateSegmentsContainer", "oz-player/utils/OzUrlHelper"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {}
        a.parseSegments = function(a, b) {
            a = [];
            b.SegmentTimeline[0].S && (a = b.SegmentTimeline[0].S.map(function(a) {
                return {
                    t: Number.parseInt(a.$.t, 10),
                    d: Number.parseInt(a.$.d, 10),
                    r: Number.parseInt(a.$.r || "0", 10),
                    id: a.$.id ? Number.parseInt(a.$.id, 10) : void 0
                }
            }));
            return a
        };
        var b = a.prototype;
        b.parseSegmentsContainer = function(b, e, f) {
            return new(c("oz-player/manifests/SegmentTemplateSegmentsContainer"))(b, d("oz-player/utils/OzUrlHelper").joinUrlPaths(e.baseUrl, f.$.media), Number.parseInt(f.$.timescale, 10), a.parseSegments(b, f), null, e.isStaticMpd)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("OzPredictedSegmentTimelineParser", ["PredictedSegmentTemplateSegmentsContainer", "oz-player/manifests/SegmentTemplateSegmentsContainer", "oz-player/parsers/OzDefaultSegmentTimelineParser", "oz-player/shims/OzURI", "oz-player/utils/OzUrlHelper"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {}
        var b = a.prototype;
        b.parseSegmentsContainer = function(a, b, e) {
            var f;
            if (e.SegmentTimeline[0].$.FBPredictedMedia) {
                f = d("oz-player/utils/OzUrlHelper").joinUrlPaths(b.baseUrl, e.SegmentTimeline[0].$.FBPredictedMedia);
                var g = new(c("oz-player/shims/OzURI"))(f);
                g.addQueryData("_nc_sc", 1);
                f = g.toString()
            }
            var h;
            e.SegmentTimeline[0].$.FBPredictedMediaStartNumber && (h = Number.parseInt(e.SegmentTimeline[0].$.FBPredictedMediaStartNumber, 0));
            var i;
            e.SegmentTimeline[0].$.FBPredictedMediaEndNumber && (i = Number.parseInt(e.SegmentTimeline[0].$.FBPredictedMediaEndNumber, 0));
            var j;
            e.SegmentTimeline[0].$.FBAverageDuration && (j = Number.parseInt(e.SegmentTimeline[0].$.FBAverageDuration, 0));
            g = c("oz-player/parsers/OzDefaultSegmentTimelineParser").parseSegments(a, e);
            return (b.isTemplatedMpd && h != null && j != null || !b.isTemplatedMpd) && f != null && i != null ? new(c("PredictedSegmentTemplateSegmentsContainer"))(a, d("oz-player/utils/OzUrlHelper").joinUrlPaths(b.baseUrl, e.$.media), b.mpdUrl, Number.parseInt(e.$.timescale, 10), g, f, h, i, j, b.isStaticMpd) : new(c("oz-player/manifests/SegmentTemplateSegmentsContainer"))(a, d("oz-player/utils/OzUrlHelper").joinUrlPaths(b.baseUrl, e.$.media), Number.parseInt(e.$.timescale, 10), g, f, b.isStaticMpd)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("OzActiveActiveFailoverNetworkRequestStreamHandler", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.onResponse = function(a, b) {
            var c = a.headers;
            c && c.has("x-fb-video-replica") && this.$1(a, b);
            return null
        };
        b.onError = function(a, b) {
            return null
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/shims/www/OzStreamsWWW", ["cr:927622", "cr:927623"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c = Boolean(b("cr:927622"));
    d = Boolean(b("cr:927623"));
    e = b("cr:927622") ? b("cr:927622").ReadableStream : a.ReadableStream;
    f = b("cr:927623") ? b("cr:927623").WritableStream : a.WritableStream;
    g.OzReadableStream = e;
    g.OzReadableStreamIsPolyfilled = c;
    g.OzWritableStream = f;
    g.OzWritableStreamIsPolyfilled = d
}), 98);
__d("oz-player/shims/OzStreams", ["oz-player/shims/www/OzStreamsWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.OzReadableStream = (a = d("oz-player/shims/www/OzStreamsWWW")).OzReadableStream;
    g.OzReadableStreamIsPolyfilled = a.OzReadableStreamIsPolyfilled;
    g.OzWritableStream = a.OzWritableStream;
    g.OzWritableStreamIsPolyfilled = a.OzWritableStreamIsPolyfilled
}), 98);
__d("oz-player/utils/OzError", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this, b.description) || this;
            c.$OzError1 = b;
            c.name = b.type;
            c.message = b.description;
            b = c.stack;
            if (!(typeof b === "string" && b !== "")) {
                if (Error.captureStackTrace) {
                    var d = {};
                    Error.captureStackTrace(d, c.constructor);
                    b = d.stack
                } else {
                    d = new Error().stack.split("\n");
                    d.splice(/^Error/.test(d[0]) ? 1 : 0, 1);
                    b = d.join("\n")
                }
                typeof b === "string" && b !== "" ? c.stack = b.replace(/^Error/, c.name) : c.stack = ""
            }
            return c
        }
        var c = b.prototype;
        c.getExtra = function() {
            return this.$OzError1.extra || {}
        };
        c.getType = function() {
            return this.$OzError1.type
        };
        c.getDescription = function() {
            return this.$OzError1.description
        };
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a
}), 66);
__d("oz-player/networks/OzTransformStream", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzStreams", "oz-player/utils/OzError"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var e;
            e = a.call(this) || this;
            var f = (b = b == null ? void 0 : b.errorTransform) != null ? b : function(a) {
                    return a
                },
                g, h;
            e.writable = new(d("oz-player/shims/OzStreams").OzWritableStream)({
                start: function(a) {
                    h = a
                },
                write: function(a) {
                    e.emit("writableWrite", a);
                    try {
                        e.onDataWritten(a)
                    } catch (a) {
                        g.error(new(c("oz-player/utils/OzError"))({
                            type: "OZ_STREAM",
                            description: "Error from write handler: " + e.constructor.name,
                            extra: {
                                code: "OZ_S-0",
                                originalError: a
                            }
                        }))
                    }
                    g.enqueue(a)
                },
                close: function() {
                    e.emit("writableClose");
                    try {
                        e.onClose()
                    } catch (a) {
                        g.error(new(c("oz-player/utils/OzError"))({
                            type: "OZ_STREAM",
                            description: "Error from close handler: " + e.constructor.name,
                            extra: {
                                code: "OZ_S-1",
                                originalError: a
                            }
                        }))
                    }
                    g.close()
                },
                abort: function(a) {
                    a = f(a);
                    g.error(a)
                }
            });
            e.readable = new(d("oz-player/shims/OzStreams").OzReadableStream)({
                start: function(a) {
                    g = a
                },
                cancel: function(a) {
                    e.emit("readableCancel", a), h.error(a)
                }
            });
            return e
        }
        var e = b.prototype;
        e.onDataWritten = function(a) {};
        e.onClose = function() {};
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/shims/www/OzPerformanceWWW", ["performance", "performanceNow"], (function(a, b, c, d, e, f, g) {
    var h, i;
    a = {
        now: function() {
            return (h || (h = c("performanceNow")))()
        },
        getEntriesByName: function(a, b) {
            return typeof(i || (i = c("performance"))).getEntriesByName === "function" ? (i || (i = c("performance"))).getEntriesByName(a, b) : []
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("oz-player/shims/OzPerformance", ["oz-player/shims/www/OzPerformanceWWW"], (function(a, b, c, d, e, f, g) {
    g["default"] = c("oz-player/shims/www/OzPerformanceWWW")
}), 98);
__d("oz-player/utils/OzResourceTimingUtils", ["oz-player/shims/OzPerformance"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        a = c("oz-player/shims/OzPerformance").getEntriesByName(a, "resource");
        return a.reduce(function(a, b) {
            return a == null ? b : b.responseEnd < a.responseEnd ? a : b
        }, null)
    };
    g.getLatestResourceTimingEntry = a
}), 98);
__d("OzVideoLiveTraceNetworkRequestStreamHandler", ["oz-player/networks/OzTransformStream", "oz-player/utils/OzResourceTimingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            b === void 0 && (b = !1), this.$2 = !1, this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.onResponse = function(a, b) {
            var e = this,
                f = a.headers,
                g = null;
            if (!this.$1) return null;
            a = new(c("oz-player/networks/OzTransformStream"))();
            a.addListener("writableClose", function() {
                var a = {},
                    c = d("oz-player/utils/OzResourceTimingUtils").getLatestResourceTimingEntry(b);
                c && (a.lat = Math.round(c.responseStart - c.requestStart).toString());
                e.$1 && f && e.$1(f, g, a)
            });
            this.$2 && a.addListener("writableWrite", function(a) {
                g === null ? g = [a] : g.push(a)
            });
            return a
        };
        b.onError = function(a, b) {
            return null
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/configs/OzPlayerConfigDefaults", [], (function(a, b, c, d, e, f) {
    a = {
        bandwidth_ignore_on_stream_write_samples: !1,
        bandwidth_use_response_time_adjustment: !1,
        catchup_use_timeline_range_end_time_as_end: !1,
        clear_on_seek: !0,
        debug_live_replay: !1,
        do_not_end_stream: !1,
        enable_alternative_audio_tracks: !1,
        fix_dom_exception_as_message: !0,
        fix_live_rewind_user_selected_playback_speed: !0,
        ignore_reset_after_seek_if_bufferahead: !1,
        latencymanager_stalled_edgelatency_sec_on: !1,
        ms_promise_for_null: !1,
        normalize_mpd_fetch_errors: !0,
        pdash_use_pdash_segmentlocator: !1,
        player_emit_mpdparsed_early: !1,
        playhead_manager_buffered_timerange_update_on_timeupdate: !0,
        playhead_manager_clamp_initial_playback_position: !1,
        reset_catchup_timeout_after_play_sec_on_overwrite: !0,
        retry_video_element_error: !0,
        sidx_parser_memory_optimization: !1,
        skip_videobuffer_gaps: !0,
        skip_videobuffer_gaps_on_buffer_updated: !0,
        stub_safari_source_buffer_abort: !1,
        use_live_latency_manager: !1,
        use_scf_timebased_segments: !1,
        use_strict_resolution_constraint: !0,
        vtt_caption_representation: !0
    };
    b = {
        abr_confidence_threshold: .9,
        abr_eval_buffer_threshold: 0,
        abr_min_bandwidth_samples: 0,
        abr_prevent_down_switch_buffer_threshold: 11,
        abr_restrict_from_index: 0,
        abr_restrict_to_index: 0,
        append_byte_target_without_range: 1e5,
        appends_per_segment: 6,
        auto_seek_playhead_slack: .5,
        bandwidth_boundary_standard_deviation_factor: 1,
        bandwidth_estimator_half_life: 6,
        bandwidth_estimator_outlier_exclusion_factor: 50,
        bandwidth_estimator_std_dev_penalty_factor: 0,
        bandwidth_header_expire_threshold: 0,
        bandwidth_response_time_handicap: 0,
        bandwidth_ttfb_samples_to_save: 5,
        buffer_ahead_target: 22,
        buffer_target_constraint_append_succeeded_reward: .2,
        buffer_target_constraint_minimum_sec: 2,
        buffer_target_constraint_quota_exceeded_penalty: .3,
        byte_count_per_sample: 2e5,
        catchup_timeout_after_buffering_sec: 0,
        catchup_timeout_after_play_sec: 0,
        clear_buffer_around_playhead_boundary_ms: 5e3,
        clear_buffer_on_seek_epsilon_s: 0,
        clear_buffer_on_seek_nudge_s: 0,
        default_bandwidth_estimate: 1e6,
        download_cursor_buffer_ahead_time_max_sec: 0,
        download_cursor_total_buffer_max_sec: 0,
        dvl_initial_segment_ignore_count: 1,
        dvl_update_interval_ms: 0,
        dynamic_mpd_initial_playback_position_offset_modifier: 4,
        initial_manifest_request_retry_count: 3,
        initial_switch_interval: 0,
        in_play_buffer_overflow_target: 1,
        in_play_buffer_underflow_target: .1,
        latencymanager_stalled_edgelatency_sec: 0,
        live_audio_ibr_bandwidth_percentage: .05,
        live_numerical_error_epsilon: 1e-4,
        loop_body_handle_error_interval_ms: 1,
        low_buffer_bandwidth_target_increase_factor: 0,
        low_buffer_bandwidth_target_threshold: 10,
        low_segment_stream_playhead_threshold: 0,
        manifest_initial_update_delay_ms: 0,
        manifest_update_frequency_ms: 0,
        max_bandwidth_sample_count: 30,
        maximum_bandwidth_sample_bandwidth: 1e8,
        max_start_eme_attempts: 3,
        min_eval_interval: 100,
        minimum_bandwidth_sample_duration: 10,
        minimum_bytes_to_sample_on_close: 25e3,
        min_switch_interval: 100,
        mpd_updater_network_request_timeout_ms: 2e4,
        ms_promise_for_null_ms: 0,
        network_seg_timeout_ms: 0,
        overwrite_livehead_fall_behind_block_threshold: 0,
        overwrite_live_time_range_block_margin: 0,
        partial_playback_buffer_overflow: .75,
        paused_stream_segments_count: 2,
        pdash_download_cursor_between_catchups_seg: 0,
        pdash_download_cursor_catchup_threshold_gop_multiplier: 0,
        pdash_download_cursor_catchup_threshold_sec: 0,
        pdash_download_cursor_catchup_tolerance_sec: 0,
        per_stream_duration_target: 0,
        pixels_above_viewport_to_observe: 0,
        pixels_below_viewport_to_observe: 0,
        playback_speed_enabled_delay_sec: 4,
        playback_speed_latency_adjustment_rate: 0,
        playback_speed_latency_slowdown_adjustment_rate: 0,
        playback_speed_latency_speedup_adjustment_rate: 0,
        playback_speed_min_buffer_sec: 1,
        playback_speed_min_duration_sec: 2,
        playback_speed_min_sharpness_factor: 3,
        playback_speed_restore_min_duration_sec: 1,
        playhead_manager_buffered_auto_seek_playhead_slack: .5,
        playhead_manager_buffered_is_near_gap_threshold: 1.5,
        playhead_manager_buffered_numerical_error: .01,
        playhead_manager_timeupdate_throttle_ms: 1e3,
        pre_start_buffer_ahead_target: 16.924449682236,
        prioritize_by_viewport_static_penalty: 0,
        recent_buffer_in_play_buffer_overflow_target: 3,
        recent_buffer_timeout_ms: 1e4,
        resolution_constraint_factor: 2,
        seconds_to_stream: 10,
        seconds_to_stream_near_bandwidth_boundary: 10,
        seek_ahead_epsilon: .05,
        segments_to_stream: 5,
        segments_to_stream_near_bandwidth_boundary: 5,
        segments_to_stream_under_playhead_threshold: 0,
        sidx_segment_retry_attempts: 9999,
        sidx_segment_retry_interval_ms: 100,
        skip_videobuffer_gaps_max_gap_size_sec: 0,
        stale_mpd_buffer_ahead_target: 0,
        start_buffer_underflow_target: .1,
        steadystate_minbuffer_buckets: 0,
        steadystate_minbuffer_buckets_sec: 1,
        steadystate_minbuffer_sec: 0,
        stream_interrupt_buffer_target_timeout_ms: 1e4,
        stream_interrupt_check_mpd_stale_count_threshold: 6,
        stream_interrupt_in_play_buffer_overflow_target: 1,
        timeline_offset_threshold: 10,
        time_to_first_byte_estimate_half_life_ms: 500,
        time_to_first_byte_ignore_above_threshold_ms: 0
    };
    c = {
        bandwidth_estimate_header_key: "",
        bandwidth_estimate_key: "",
        block_representation_status_codes_json: "[500, 503]",
        block_representation_status_codes_temporarily_json: "{}",
        cdn_experiment_id: "",
        stream_types_eligible_for_partial_playback: ""
    };
    e.exports = {
        defaultBools: a,
        defaultNumbers: b,
        defaultStrings: c
    }
}), null);
__d("oz-player/configs/OzPlayerConfig", ["oz-player/configs/OzPlayerConfigDefaults"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            a === void 0 && (a = {}), this.$1 = a
        }
        var b = a.prototype;
        b.getBool = function(a) {
            return typeof this.$1[a] === "boolean" ? this.$1[a] : d("oz-player/configs/OzPlayerConfigDefaults").defaultBools[a]
        };
        b.getNumber = function(a) {
            return typeof this.$1[a] === "number" ? this.$1[a] : d("oz-player/configs/OzPlayerConfigDefaults").defaultNumbers[a]
        };
        b.getString = function(a) {
            return typeof this.$1[a] === "string" ? this.$1[a] : d("oz-player/configs/OzPlayerConfigDefaults").defaultStrings[a]
        };
        b.getLegacyConfig = function() {
            var a = this;
            return {
                getBool: function(b, c) {
                    return typeof a.$1[b] === "boolean" ? a.$1[b] : (b = d("oz-player/configs/OzPlayerConfigDefaults").defaultBools[b]) != null ? b : c
                },
                getNumber: function(b, c) {
                    return typeof a.$1[b] === "number" ? a.$1[b] : (b = d("oz-player/configs/OzPlayerConfigDefaults").defaultNumbers[b]) != null ? b : c
                },
                getString: function(b, c) {
                    return typeof a.$1[b] === "string" ? a.$1[b] : (b = d("oz-player/configs/OzPlayerConfigDefaults").defaultStrings[b]) != null ? b : c
                }
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/drm/OzDrmUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        return Uint8Array.from(window.atob(a), function(a) {
            return a.charCodeAt(0)
        })
    };
    b = function(a) {
        return window.btoa(String.fromCharCode.apply(null, new Uint8Array(a)))
    };
    f.base64ToUint8Array = a;
    f.arrayBufferToBase64 = b
}), 66);
__d("oz-player/shims/www/ozReportUnexpectedErrorWWW", ["FBLogger", "getErrorSafe"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d) {
        d === void 0 && (d = "mustfix");
        a = c("getErrorSafe")(a);
        a = c("FBLogger")("oz_player").catching(a);
        b = "Unexpected error in " + b;
        switch (d) {
            case "fatal":
                a.fatal(b);
                break;
            case "mustfix":
                a.mustfix(b);
                break;
            case "warn":
                a.warn(b);
                break;
            case "info":
                a.info(b);
                break;
            case "debug":
                a.debug(b);
                break
        }
    }
    g["default"] = a
}), 98);
__d("oz-player/shims/ozReportUnexpectedError", ["oz-player/shims/www/ozReportUnexpectedErrorWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/ozReportUnexpectedErrorWWW")
}), 98);
__d("oz-player/loggings/OzLoggingUtils", ["oz-player/shims/ozReportUnexpectedError"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c) {
        a = a.getOperationLogger(b).start();
        try {
            return c(a)
        } catch (b) {
            a.setError(b);
            throw b
        } finally {
            a.log()
        }
    }

    function b(a, b, d, e, f) {
        e === void 0 && (e = function() {});
        f === void 0 && (f = function() {});
        var g = b.getOperationLogger(d).start();
        e(g);
        a.then(function(a) {
            f(g), g.log()
        }, function(a) {
            f(g), g.setError(a), g.log()
        })["catch"](function(a) {
            c("oz-player/shims/ozReportUnexpectedError")(a, d + " logger")
        })
    }
    g.executeOperationAndLog = a;
    g.monitorPromiseAndLogOperation = b
}), 98);
__d("oz-player/loggings/OzOperationLoggerBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$52 = new Map(), this.$1 = a
        }
        var b = a.prototype;
        b.start = function() {
            var a = Date.now();
            this.setClientTimeBegin(a);
            this.setClientTimeEnd(null);
            this.setClientTimeDuration(null);
            return this
        };
        b.log = function() {
            var a = Date.now(),
                b = this.getClientTimeBegin(),
                c = this.getClientTimeEnd();
            (b == null || b === 0) && (b = a, this.setClientTimeBegin(b));
            (c == null || c === 0) && (c = a, this.setClientTimeEnd(c));
            this.setClientTimeDuration(c - b)
        };
        b.setError = function(a) {
            this.$2 = a;
            return this
        };
        b.setPerSessionSampleRate = function(a) {
            this.$3 = a;
            return this
        };
        b.setAppendTarget = function(a) {
            this.$47 = a;
            return this
        };
        b.setOneObserved = function(a) {
            this.$44 = a;
            return this
        };
        b.setOneReqWave = function(a) {
            this.$45 = a;
            return this
        };
        b.setOneResWave = function(a) {
            this.$46 = a;
            return this
        };
        b.setIsP2pPlayback = function(a) {
            this.$43 = a;
            return this
        };
        b.setResult = function(a) {
            this.$4 = a;
            return this
        };
        b.setType = function(a) {
            this.$5 = a;
            return this
        };
        b.setClientTimeBegin = function(a) {
            this.$6 = a;
            return this
        };
        b.setClientTimeDuration = function(a) {
            this.$7 = a;
            return this
        };
        b.setClientTimeEnd = function(a) {
            this.$8 = a;
            return this
        };
        b.setSegmentCount = function(a) {
            this.$15 = a;
            return this
        };
        b.setTimeToFirstByte = function(a) {
            this.$9 = a;
            return this
        };
        b.setTimeToLastByte = function(a) {
            this.$10 = a;
            return this
        };
        b.setTimeToRequestStart = function(a) {
            this.$11 = a;
            return this
        };
        b.setTimeToRequestSent = function(a) {
            this.$12 = a;
            return this
        };
        b.setReason = function(a) {
            this.$13 = a;
            return this
        };
        b.setResource = function(a) {
            this.$14 = a;
            return this
        };
        b.setSegmentStartTime = function(a) {
            this.$16 = a;
            return this
        };
        b.setSegmentEndTime = function(a) {
            this.$17 = a;
            return this
        };
        b.setLength = function(a) {
            this.$18 = a;
            return this
        };
        b.setLiveheadPosition = function(a) {
            this.$19 = a;
            return this
        };
        b.setLiveheadSeqNumHeader = function(a) {
            this.$20 = a;
            return this
        };
        b.setLiveheadSeqNumMpd = function(a) {
            this.$21 = a;
            return this
        };
        b.setManifestType = function(a) {
            this.$22 = a;
            return this
        };
        b.setMediaSourceNewDuration = function(a) {
            this.$23 = a;
            return this
        };
        b.setMediaSourcePreviousDuration = function(a) {
            this.$24 = a;
            return this
        };
        b.setPriorityFloat = function(a) {
            this.$25 = a;
            return this
        };
        b.setAppendedBufferMs = function(a) {
            this.$26 = a;
            return this
        };
        b.setInitiator = function(a) {
            this.$27 = a;
            return this
        };
        b.setPreloadTime = function(a) {
            this.$28 = a;
            return this
        };
        b.setConcluder = function(a) {
            this.$29 = a;
            return this
        };
        b.setPreviousRepresentationID = function(a) {
            this.$30 = a;
            return this
        };
        b.setRepresentationID = function(a) {
            this.$31 = a;
            return this
        };
        b.setStreamSwitchReason = function(a) {
            this.$32 = a;
            return this
        };
        b.setState = function(a) {
            this.$33 = a;
            return this
        };
        b.setContentLengthHeader = function(a) {
            this.$34 = a;
            return this
        };
        b.setOriginHitHeader = function(a) {
            this.$36 = a;
            return this
        };
        b.setEdgeHitHeader = function(a) {
            this.$37 = a;
            return this
        };
        b.setFNAHitHeader = function(a) {
            this.$38 = a;
            return this
        };
        b.setCode = function(a) {
            this.$35 = a;
            return this
        };
        b.setResponseTimeMsHeader = function(a) {
            this.$39 = a;
            return this
        };
        b.setIsTemplatedManifest = function(a) {
            this.$40 = a;
            return this
        };
        b.setIsLatencyCachupEnabled = function(a) {
            this.$41 = a;
            return this
        };
        b.setPlayerFormat = function(a) {
            this.$42 = a;
            return this
        };
        b.setIsRingBufferSample = function(a) {
            this.$48 = a;
            return this
        };
        b.setIsOnline = function(a) {
            this.$49 = a;
            return this
        };
        b.setProxyStatusHeader = function(a) {
            this.$50 = a;
            return this
        };
        b.setPlaybackFbmsParam = function(a) {
            return this
        };
        b.setPreferredEdgeLatency = function(a) {
            this.$51 = a;
            return this
        };
        b.setUserInfo = function(a) {
            return this
        };
        b.setDynamicStatusHeader = function(a) {
            return this
        };
        b.getPerSessionSampleRate = function() {
            return this.$3
        };
        b.setMediaSourceSourceBuffer = function(a, b) {
            this.$52.set(a, b);
            return this
        };
        b.unsetMediaSourceSourceBuffers = function() {
            this.$52.clear();
            return this
        };
        b.getError = function() {
            return this.$2
        };
        b.getResult = function() {
            return this.$4
        };
        b.getType = function() {
            return this.$5
        };
        b.getClientTimeBegin = function() {
            return this.$6
        };
        b.getClientTimeEnd = function() {
            return this.$7 != null ? this.$6 != null ? this.$6 + this.$7 : null : this.$8
        };
        b.getTimeToRequestStart = function() {
            return this.$11
        };
        b.getTimeToRequestSent = function() {
            return this.$12
        };
        b.getReason = function() {
            return this.$13
        };
        b.getResource = function() {
            return this.$14
        };
        b.getOperationName = function() {
            return this.$1
        };
        b.getSegmentStartTime = function() {
            return this.$16
        };
        b.getSegmentEndTime = function() {
            return this.$17
        };
        b.getLength = function() {
            return this.$18
        };
        b.getLiveheadPosition = function() {
            return this.$19
        };
        b.getManifestType = function() {
            return this.$22
        };
        b.getPriorityFloat = function() {
            return this.$25
        };
        b.getAppendedBufferMs = function() {
            return this.$26
        };
        b.getInitiator = function() {
            return this.$27
        };
        b.getPreloadTime = function() {
            return this.$28
        };
        b.getConcluder = function() {
            return this.$29
        };
        b.getContentLengthHeader = function() {
            return this.$34
        };
        b.getOriginHitHeader = function() {
            return this.$36
        };
        b.getEdgeHitHeader = function() {
            return this.$37
        };
        b.getFNAHitHeader = function() {
            return this.$38
        };
        b.getCode = function() {
            return this.$35
        };
        b.getResponseTimeMsHeader = function() {
            return this.$39
        };
        b.getIsTemplatedManifest = function() {
            return this.$40
        };
        b.getOneObserved = function() {
            return this.$44
        };
        b.getOneReqWave = function() {
            return this.$45
        };
        b.getOneResWave = function() {
            return this.$46
        };
        b.getAppendTarget = function() {
            return this.$47
        };
        b.getIsRingBufferSample = function() {
            return this.$48
        };
        b.getIsOnline = function() {
            return this.$49
        };
        b.getProxyStatusHeader = function() {
            return this.$50
        };
        b.getMediaSourceSourceBuffers = function() {
            return this.$52
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("OzDOMEventListenerImpl", ["CometEventListener"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        listenDOMEvent: c("CometEventListener").listen,
        captureDOMEvent: c("CometEventListener").capture,
        suppressDOMEvent: c("CometEventListener").suppress
    };
    b = a;
    g["default"] = b
}), 98);
__d("oz-player/shims/www/OzDOMEventListenerWWW", ["OzDOMEventListenerImpl"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("OzDOMEventListenerImpl");
    f["default"] = a
}), 66);
__d("oz-player/shims/OzDOMEventListener", ["oz-player/shims/www/OzDOMEventListenerWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzDOMEventListenerWWW")
}), 98);
__d("oz-player/shims/www/OzMaybeNativePromiseWWW", ["cr:3014"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:3014")
}), 98);
__d("oz-player/shims/OzMaybeNativePromise", ["oz-player/shims/www/OzMaybeNativePromiseWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzMaybeNativePromiseWWW")
}), 98);
__d("oz-player/shims/www/OzSubscriptionsHandlerWWW", ["SubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("SubscriptionsHandler")
}), 98);
__d("oz-player/shims/OzSubscriptionsHandler", ["oz-player/shims/www/OzSubscriptionsHandlerWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzSubscriptionsHandlerWWW")
}), 98);
__d("oz-player/utils/OzErrorEmitter", ["oz-player/shims/OzEventEmitter", "oz-player/shims/ozvariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var d;
            b === void 0 && (b = !1);
            d = a.call(this) || this;
            d.$OzErrorEmitter1 = !1;
            d.$OzErrorEmitter2 = !1;
            d.$OzErrorEmitter3 = [];
            d.emitError = function(a) {
                !d.$OzErrorEmitter1 ? d.$OzErrorEmitter2 ? d.$OzErrorEmitter3.push(a) : d.$OzErrorEmitter1 || c("oz-player/shims/ozvariant")(0, 14038) : d.emit("error", a)
            };
            d.$OzErrorEmitter2 = b;
            return d
        }
        var d = b.prototype;
        d.onError = function(a) {
            this.$OzErrorEmitter1 = !0;
            a = this.addListener("error", a);
            this.$OzErrorEmitter2 && this.$OzErrorEmitter3.length > 0 && this.$OzErrorEmitter3.forEach(this.emitError);
            return a
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/drm/OzDrmManager", ["BrowserFeatureInstrumentation", "oz-player/drm/OzDrmUtils", "oz-player/loggings/OzLoggingUtils", "oz-player/loggings/OzOperationLoggerBase", "oz-player/shims/OzDOMEventListener", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzSubscriptionsHandler", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, e) {
            var f = this;
            e === void 0 && (e = null);
            this.$1 = null;
            this.$2 = new Map();
            this.$4 = !1;
            this.$6 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$7 = new(c("oz-player/utils/OzErrorEmitter"))();
            this.$8 = !1;
            this.$9 = null;
            this.$10 = 0;
            this.$11 = [];
            this.$12 = [];
            this.$23 = function(a, b) {
                a instanceof c("oz-player/loggings/OzOperationLoggerBase") && a.getError() && a.setResult("failed"), b != null && a.setReason(b)
            };
            this.$20 = function(a) {
                if (f.$4) return c("oz-player/shims/OzMaybeNativePromise").reject(new Error("OzDrmManager destroyed before call to mediaKeySystemAccess.createMediaKeys()."));
                var b = f.$5.mediaKeys != null ? c("oz-player/shims/OzMaybeNativePromise").resolve(f.$5.mediaKeys) : a.createMediaKeys();
                b = b.then(function(b) {
                    return {
                        mediaKeySystemAccess: a,
                        mediaKeys: b
                    }
                });
                d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(b, f.$3, "drm_create_media_keys", function() {}, f.$23);
                return b
            };
            this.$21 = function(a) {
                if (f.$4) return c("oz-player/shims/OzMaybeNativePromise").reject(new Error("OzDrmManager destroyed before call to setMediaKeys()"));
                var b = a.mediaKeySystemAccess,
                    e = a.mediaKeys;
                if (!e) throw new(c("oz-player/utils/OzError"))({
                    type: "OZ_DRM_MANAGER",
                    description: "No mediaKeys for mediaKeySystemAccess"
                });
                a = f.$5.setMediaKeys(e).then(function() {
                    if (f.$4) return c("oz-player/shims/OzMaybeNativePromise").reject(new Error("OzDrmManager destroyed after setMediaKeys() called."));
                    var a = Array.from(f.$2.values()).find(function(a) {
                        return a.getKeySystem() === b.keySystem
                    });
                    if (!a) throw new(c("oz-player/utils/OzError"))({
                        type: "OZ_DRM_MANAGER",
                        description: "Can't find OzDrmProvider for keySystem " + b.keySystem
                    });
                    var d = a.getServerCertificate();
                    return d ? e.setServerCertificate(d).then(function() {
                        return {
                            mediaKeys: e,
                            provider: a
                        }
                    }) : {
                        mediaKeys: e,
                        provider: a
                    }
                });
                d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(a, f.$3, "drm_set_media_keys", function() {}, f.$23);
                return a
            };
            this.$22 = function(a) {
                var b = a.mediaKeys,
                    e = a.provider;
                a = e.getInitDatas();
                if (a.length === 0) {
                    f.$6.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(f.$5, "encrypted", function(a) {
                        f.$24(b, e, a)["catch"](function(a) {
                            f.$15(a, "encrypted")
                        })
                    }));
                    return c("oz-player/shims/OzMaybeNativePromise").resolve([])
                }
                a = a.map(function(a) {
                    return f.$24(b, e, {
                        initData: a.data,
                        initDataType: a.type
                    })
                });
                a = c("oz-player/shims/OzMaybeNativePromise").all(a);
                d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(a, f.$3, "drm_request_license", function() {}, f.$23);
                return a
            };
            this.$5 = b;
            this.$1 = e;
            this.$3 = a.cloneContext().setType("drm_manager")
        }
        var b = a.prototype;
        b.hasContentProtections = function() {
            return this.$9
        };
        b.onError = function(a) {
            return this.$7.onError(a)
        };
        b.$13 = function(a, b) {
            var d;
            a instanceof c("oz-player/utils/OzError") ? d = a : a instanceof Error ? (a.stack, d = new(c("oz-player/utils/OzError"))({
                type: "OZ_DRM_MANAGER",
                description: a.message,
                extra: {
                    originalError: a
                }
            })) : a != null && typeof a.message === "string" ? d = new(c("oz-player/utils/OzError"))({
                type: "OZ_DRM_MANAGER",
                description: a.message,
                extra: {}
            }) : d = new(c("oz-player/utils/OzError"))({
                type: "OZ_DRM_MANAGER",
                description: "Unknown DRM " + b + " error",
                extra: {}
            });
            return d
        };
        b.$14 = function(a) {
            this.$7.emitError(a)
        };
        b.$15 = function(a, b) {
            var c;
            c = (c = (c = this.$1) == null ? void 0 : c.maxStartEMEAttempts) != null ? c : -1;
            this.$10 < c ? this.$16() : this.$14(this.$13(a, b))
        };
        b.addProvider = function(a) {
            this.$2.set(a.getSchemeId(), a)
        };
        b.getProviderForSchemeId = function(a) {
            return this.$2.get(a)
        };
        b.$17 = function(a) {
            if (!a) return null;
            var b = [];
            for (var c = 0; c < a.length; c++) {
                var e = a[c],
                    f = e.$.schemeIdUri;
                f = this.getProviderForSchemeId(f);
                if (f) {
                    var g = f.getInitDatas();
                    if (g.length == 0 && e["cenc:pssh"] && e["cenc:pssh"].length === 1) {
                        e = (e = e["cenc:pssh"][0]._) != null ? e : "";
                        e = d("oz-player/drm/OzDrmUtils").base64ToUint8Array(e.replace(/-/g, "+").replace(/_/g, "/"));
                        g = [{
                            data: e,
                            type: "cenc"
                        }];
                        f.setInitDatas(g)
                    }
                    b.push({
                        provider: f,
                        initDatas: g
                    })
                }
            }
            return b
        };
        b.$16 = function() {
            try {
                this.$8 = !1, this.startEME(this.$11, this.$12)
            } catch (b) {
                var a = b;
                this.$14(new(c("oz-player/utils/OzError"))({
                    type: "OZ_DRM_MANAGER",
                    description: "Restart EME failed with: " + String(a),
                    extra: {}
                }))
            }
        };
        b.startEME = function(a, b) {
            var d = this;
            if (this.$8) return;
            this.$8 = !0;
            this.$10 += 1;
            this.$11 = a;
            this.$12 = b;
            var e = new Map();
            this.$18(b, e, "audio");
            this.$18(a, e, "video");
            var f;
            e.forEach(function(a, b) {
                !f ? f = d.$19(b, a) : f = f["catch"](function() {
                    return d.$19(b, a)
                })
            });
            if (!f) {
                this.$9 = !1;
                return
            }
            this.$9 = !0;
            var g = this.$3.getOperationLogger("drm_setup").start();
            f.then(this.$20).then(this.$21).then(this.$22).then(function() {
                return g.log()
            }, function(a) {
                a = a != null ? d.$13(a, "keypromisechain") : new(c("oz-player/utils/OzError"))({
                    type: "OZ_DRM_MANAGER",
                    description: "Unknown DRM setup error",
                    extra: {}
                });
                d.$14(a);
                g.setResult("failed").setError(a).log()
            })
        };
        b.$18 = function(a, b, c) {
            var d = this;
            a.forEach(function(a) {
                var e = d.$17(a.getContentProtectionXml()),
                    f = a.getMimeCodecs();
                e != null && e.forEach(function(a) {
                    a = a.provider;
                    var d = a.getKeySystem(),
                        e = b.get(d);
                    e || (e = {
                        audioCapabilities: new Map(),
                        videoCapabilities: new Map(),
                        distinctiveIdentifier: a.getRequireDistinctiveIdentifier(),
                        persistentState: a.getRequirePersistentState(),
                        sessionTypes: a.getDrmSessionTypes(),
                        initDataTypes: a.getInitDataTypes()
                    }, b.set(d, e));
                    c === "audio" && !e.audioCapabilities.has(f) && e.audioCapabilities.set(f, {
                        contentType: f,
                        robustness: a.getAudioRobustness()
                    });
                    c === "video" && !e.videoCapabilities.has(f) && e.videoCapabilities.set(f, {
                        contentType: f,
                        robustness: a.getVideoRobustness()
                    })
                })
            })
        };
        b.destroy = function() {
            this.$6.release(), this.$4 = !0
        };
        b.$19 = function(a, b) {
            var e = this,
                f = {
                    audioCapabilities: Array.from(b.audioCapabilities.values()),
                    videoCapabilities: Array.from(b.videoCapabilities.values()),
                    distinctiveIdentifier: b.distinctiveIdentifier,
                    persistentState: b.persistentState,
                    sessionTypes: b.sessionTypes,
                    initDataTypes: b.initDataTypes
                };
            c("BrowserFeatureInstrumentation")("encrypted-media", "OzDrmManager");
            b = window.navigator.requestMediaKeySystemAccess(a, [f]);
            d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(b, this.$3, "drm_request_media_key_system_access", function() {}, function(b) {
                var d = null;
                b instanceof c("oz-player/loggings/OzOperationLoggerBase") && b.getError() && (d = "keySystem: " + a + ";domConfig: " + JSON.stringify(f));
                return e.$23(b, d)
            });
            return b
        };
        b.$24 = function(a, b, d) {
            var e = this,
                f = a.createSession();
            this.$6.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(f, "message", function(a) {
                e.$25(f, b, a)["catch"](function(a) {
                    e.$15(a, "message")
                })
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(f, "keystatuseschange", function(a) {
                e.$26(f)["catch"](function(a) {
                    e.$15(a, "keystatuseschange")
                })
            }));
            return f.generateRequest(d.initDataType, d.initData)
        };
        b.$25 = function(a, b, d) {
            var e = this;
            d = b.getLicenseRequestInfo(d.message.slice(0));
            var f = this.$3.getOperationLogger("drm_fetch_license").setResource(d.url).start();
            return window.fetch(d.url, d).then(function(d) {
                (d == null ? void 0 : d.ok) ? f.setResult("success").setCode(d == null ? void 0 : d.status).log(): f.setResult("failed").setCode(d == null ? void 0 : d.status).setError(new Error("HTTP status not OK")).log();
                return d.arrayBuffer().then(function(f) {
                    var g = new Uint8Array(f);
                    g = b.parseLicenseResponse(g);
                    if (g == null || g.byteLength === 0) {
                        var h = new Error("License is null, undefined, or 0 bytes.");
                        h = (d == null ? void 0 : d.ok) ? h : new Error("HTTP status not OK");
                        h = (d == null ? void 0 : d.ok) && f.byteLength !== 0 ? h : new Error("Received an OK response, but response body is 0 bytes");
                        f = new(c("oz-player/utils/OzError"))({
                            type: "OZ_DRM_MANAGER",
                            description: "No license for " + b.getKeySystem(),
                            extra: {
                                originalError: h,
                                code: d == null ? void 0 : d.status.toString(),
                                headers: d == null ? void 0 : d.headers,
                                url: d == null ? void 0 : d.url
                            }
                        });
                        h = (h = (h = e.$1) == null ? void 0 : h.throwNoLicenseError) != null ? h : !1;
                        if (h) throw f;
                        else e.$14(f)
                    } else a.update(g)
                })
            })
        };
        b.$26 = function(a) {
            return a.expiration < Date.now() ? a.close() : c("oz-player/shims/OzMaybeNativePromise").resolve()
        };
        return a
    }();
    g.OzDrmManager = a
}), 98);
__d("oz-player/loggings/OzPerfLoggerProviderBase", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var b = a.prototype;
        b.cloneContext = function() {
            var a = this.createLoggerProvider();
            this.$11(a);
            return a
        };
        b.setType = function(a) {
            this.$1 = a;
            return this
        };
        b.setInitiator = function(a) {
            this.$2 = a;
            return this
        };
        b.setResource = function(a) {
            this.$4 = a;
            return this
        };
        b.setRepresentationID = function(a) {
            this.$3 = a;
            return this
        };
        b.setSegmentStartTime = function(a) {
            this.$5 = a;
            return this
        };
        b.setSegmentEndTime = function(a) {
            this.$6 = a;
            return this
        };
        b.setStreamSwitchReason = function(a) {
            this.$7 = a;
            return this
        };
        b.setIsP2pPlayback = function(a) {
            this.$8 = a;
            return this
        };
        b.setIsRingBufferSample = function(a) {
            this.$9 = a;
            return this
        };
        b.setPerSessionSampleRate = function(a) {
            this.$10 = a;
            return this
        };
        b.getType = function() {
            return this.$1
        };
        b.getInitiator = function() {
            return this.$2
        };
        b.getRepresentationID = function() {
            return this.$3
        };
        b.getStreamSwitchReason = function() {
            return this.$7
        };
        b.getResource = function() {
            return this.$4
        };
        b.getSegmentStartTime = function() {
            return this.$5
        };
        b.getSegmentEndTime = function() {
            return this.$6
        };
        b.getIsP2pPlayback = function() {
            return this.$8
        };
        b.getIsRingBufferSample = function() {
            return this.$9
        };
        b.getOperationLogger = function(a) {
            a = this.createOperationLogger(a);
            return this.setOperationContext(a)
        };
        b.setOperationContext = function(a) {
            this.$11(a);
            return a
        };
        b.createOperationLogger = function(a) {
            throw new Error("Not implemented: createOperationLogger")
        };
        b.createLoggerProvider = function() {
            throw new Error("Not implemented: createLoggerProvider")
        };
        b.$11 = function(a) {
            this.getType() && a.setType(this.getType()), this.getInitiator() && a.setInitiator(this.getInitiator()), this.getResource() && a.setResource(this.getResource()), this.getRepresentationID() && a.setRepresentationID(this.getRepresentationID()), this.getStreamSwitchReason() && a.setStreamSwitchReason(this.getStreamSwitchReason()), typeof this.getSegmentStartTime() === "number" && a.setSegmentStartTime(this.getSegmentStartTime()), typeof this.getSegmentEndTime() === "number" && a.setSegmentEndTime(this.getSegmentEndTime()), typeof this.getIsP2pPlayback() === "boolean" && a.setIsP2pPlayback(this.getIsP2pPlayback()), typeof this.getIsRingBufferSample() === "boolean" && a.setIsRingBufferSample(this.getIsRingBufferSample())
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/loggings/OzDevConsolePerfLogger", ["oz-player/loggings/OzOperationLoggerBase", "oz-player/loggings/OzPerfLoggerProviderBase"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h() {
        var a;
        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
        (a = console).debug.apply(a, ["[oz]"].concat(c))
    }

    function i() {
        var a;
        for (var b = arguments.length, c = new Array(b), d = 0; d < b; d++) c[d] = arguments[d];
        (a = console).error.apply(a, ["[oz]"].concat(c))
    }

    function j(a, b) {
        return Math.floor(a).toString().padStart(b, "0")
    }

    function k(a, b) {
        b === void 0 && (b = null);
        var c = function(a) {
                return j(a.getHours(), 2) + ":" + j(a.getMinutes(), 2) + ":" + j(a.getSeconds(), 2) + " " + j(a.getMilliseconds(), 3)
            },
            d = b ? b - a : 0;
        return "[" + c(a) + (b ? " - " + c(b) : "") + " (" + d + " ms)]"
    }

    function l(a) {
        return a === "failed" ? i : h
    }

    function m(a) {
        return a == null || a === 0 ? null : a.toFixed(2)
    }
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.createOperationLogger = function(a) {
            return new n(a)
        };
        c.createLoggerProvider = function() {
            return new b()
        };
        return b
    }(c("oz-player/loggings/OzPerfLoggerProviderBase"));
    var n = function(b) {
        babelHelpers.inheritsLoose(a, b);

        function a() {
            return b.apply(this, arguments) || this
        }
        var c = a.prototype;
        c.log = function() {
            b.prototype.log.call(this);
            var a = this.getClientTimeBegin() || 0,
                c = this.getClientTimeEnd();
            c = c != null && c !== 0 ? new Date(c) : null;
            var d = this.getResult() || "success",
                e = this.getType(),
                f = this.getInitiator(),
                g = this.getResource(),
                h = m(this.getSegmentStartTime()),
                i = m(this.getSegmentEndTime());
            l(d)("[" + d + "]", this.getOperationName() + ": " + k(new Date(a), c), e != null && e !== "" ? "[" + e + "]" : "", h != null && h !== "" && i != null && i !== "" ? "[segment time range: " + h + " - " + i + "]" : "", f || "", g || "")
        };
        return a
    }(c("oz-player/loggings/OzOperationLoggerBase"));
    g.OzDevConsolePerfLoggerProvider = a;
    g.OzDevConsoleOperationLogger = n
}), 98);
__d("oz-player/loggings/OzMultiDestinationPerfLogger", ["oz-player/loggings/OzOperationLoggerBase", "oz-player/loggings/OzPerfLoggerProviderBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this) || this;
            c.$OzMultiDestinationPerfLoggerProvider1 = b;
            return c
        }
        var c = b.prototype;
        c.createOperationLogger = function(a) {
            return new h(a, this.$OzMultiDestinationPerfLoggerProvider1.map(function(b) {
                return b.getOperationLogger(a)
            }))
        };
        c.createLoggerProvider = function() {
            return new b(this.$OzMultiDestinationPerfLoggerProvider1)
        };
        return b
    }(c("oz-player/loggings/OzPerfLoggerProviderBase"));
    var h = function(b) {
        babelHelpers.inheritsLoose(a, b);

        function a(a, c) {
            a = b.call(this, a) || this;
            a.$OzMultiDestinationOperationLogger1 = c;
            return a
        }
        var c = a.prototype;
        c.start = function() {
            b.prototype.start.call(this);
            this.$OzMultiDestinationOperationLogger1.forEach(function(a) {
                return a.start()
            });
            return this
        };
        c.setPerSessionSampleRate = function(a) {
            b.prototype.setPerSessionSampleRate.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPerSessionSampleRate(a)
            });
            return this
        };
        c.setResult = function(a) {
            b.prototype.setResult.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setResult(a)
            });
            return this
        };
        c.setError = function(a) {
            b.prototype.setError.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setError(a)
            });
            return this
        };
        c.setType = function(a) {
            b.prototype.setType.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setType(a)
            });
            return this
        };
        c.setMediaSourcePreviousDuration = function(a) {
            b.prototype.setMediaSourcePreviousDuration.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setMediaSourcePreviousDuration(a)
            });
            return this
        };
        c.setMediaSourceNewDuration = function(a) {
            b.prototype.setMediaSourceNewDuration.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setMediaSourceNewDuration(a)
            });
            return this
        };
        c.setClientTimeBegin = function(a) {
            b.prototype.setClientTimeBegin.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setClientTimeBegin(a)
            });
            return this
        };
        c.setClientTimeDuration = function(a) {
            b.prototype.setClientTimeDuration.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setClientTimeDuration(a)
            });
            return this
        };
        c.setClientTimeEnd = function(a) {
            b.prototype.setClientTimeEnd.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setClientTimeEnd(a)
            });
            return this
        };
        c.setSegmentCount = function(a) {
            b.prototype.setSegmentCount.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setSegmentCount(a)
            });
            return this
        };
        c.setTimeToFirstByte = function(a) {
            b.prototype.setTimeToFirstByte.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setTimeToFirstByte(a)
            });
            return this
        };
        c.setTimeToLastByte = function(a) {
            b.prototype.setTimeToLastByte.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setTimeToLastByte(a)
            });
            return this
        };
        c.setTimeToRequestStart = function(a) {
            b.prototype.setTimeToRequestStart.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setTimeToRequestStart(a)
            });
            return this
        };
        c.setTimeToRequestSent = function(a) {
            b.prototype.setTimeToRequestSent.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setTimeToRequestSent(a)
            });
            return this
        };
        c.setReason = function(a) {
            b.prototype.setReason.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setReason(a)
            });
            return this
        };
        c.setResource = function(a) {
            b.prototype.setResource.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setResource(a)
            });
            return this
        };
        c.setSegmentStartTime = function(a) {
            b.prototype.setSegmentStartTime.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setSegmentStartTime(a)
            });
            return this
        };
        c.setSegmentEndTime = function(a) {
            b.prototype.setSegmentEndTime.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setSegmentEndTime(a)
            });
            return this
        };
        c.setAppendedBufferMs = function(a) {
            b.prototype.setAppendedBufferMs.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setAppendedBufferMs(a)
            });
            return this
        };
        c.setLength = function(a) {
            b.prototype.setLength.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setLength(a)
            });
            return this
        };
        c.setLiveheadPosition = function(a) {
            b.prototype.setLiveheadPosition.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setLiveheadPosition(a)
            });
            return this
        };
        c.setLiveheadSeqNumHeader = function(a) {
            b.prototype.setLiveheadSeqNumHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setLiveheadSeqNumHeader(a)
            });
            return this
        };
        c.setLiveheadSeqNumMpd = function(a) {
            b.prototype.setLiveheadSeqNumMpd.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setLiveheadSeqNumMpd(a)
            });
            return this
        };
        c.setManifestType = function(a) {
            b.prototype.setManifestType.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setManifestType(a)
            });
            return this
        };
        c.setPriorityFloat = function(a) {
            b.prototype.setPriorityFloat.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPriorityFloat(a)
            });
            return this
        };
        c.setInitiator = function(a) {
            b.prototype.setInitiator.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setInitiator(a)
            });
            return this
        };
        c.setPreloadTime = function(a) {
            b.prototype.setPreloadTime.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPreloadTime(a)
            });
            return this
        };
        c.setConcluder = function(a) {
            b.prototype.setConcluder.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setConcluder(a)
            });
            return this
        };
        c.setPreviousRepresentationID = function(a) {
            b.prototype.setPreviousRepresentationID.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPreviousRepresentationID(a)
            });
            return this
        };
        c.setRepresentationID = function(a) {
            b.prototype.setRepresentationID.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setRepresentationID(a)
            });
            return this
        };
        c.setState = function(a) {
            b.prototype.setState.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setState(a)
            });
            return this
        };
        c.setContentLengthHeader = function(a) {
            b.prototype.setContentLengthHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setContentLengthHeader(a)
            });
            return this
        };
        c.setEdgeHitHeader = function(a) {
            b.prototype.setEdgeHitHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setEdgeHitHeader(a)
            });
            return this
        };
        c.setFNAHitHeader = function(a) {
            b.prototype.setFNAHitHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setFNAHitHeader(a)
            });
            return this
        };
        c.setOriginHitHeader = function(a) {
            b.prototype.setOriginHitHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setOriginHitHeader(a)
            });
            return this
        };
        c.setCode = function(a) {
            b.prototype.setCode.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setCode(a)
            });
            return this
        };
        c.setResponseTimeMsHeader = function(a) {
            b.prototype.setResponseTimeMsHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setResponseTimeMsHeader(a)
            });
            return this
        };
        c.setIsTemplatedManifest = function(a) {
            b.prototype.setIsTemplatedManifest.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setIsTemplatedManifest(a)
            });
            return this
        };
        c.setIsLatencyCachupEnabled = function(a) {
            b.prototype.setIsLatencyCachupEnabled.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setIsLatencyCachupEnabled(a)
            });
            return this
        };
        c.setPlayerFormat = function(a) {
            b.prototype.setPlayerFormat.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPlayerFormat(a)
            });
            return this
        };
        c.setIsP2pPlayback = function(a) {
            b.prototype.setIsP2pPlayback.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setIsP2pPlayback(a)
            });
            return this
        };
        c.setOneObserved = function(a) {
            b.prototype.setOneObserved.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setOneObserved(a)
            });
            return this
        };
        c.setOneReqWave = function(a) {
            b.prototype.setOneReqWave.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setOneReqWave(a)
            });
            return this
        };
        c.setOneResWave = function(a) {
            b.prototype.setOneResWave.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setOneResWave(a)
            });
            return this
        };
        c.setAppendTarget = function(a) {
            b.prototype.setAppendTarget.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setAppendTarget(a)
            });
            return this
        };
        c.setIsRingBufferSample = function(a) {
            b.prototype.setIsRingBufferSample.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setIsRingBufferSample(a)
            });
            return this
        };
        c.setIsOnline = function(a) {
            b.prototype.setIsOnline.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setIsOnline(a)
            });
            return this
        };
        c.setProxyStatusHeader = function(a) {
            b.prototype.setProxyStatusHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setProxyStatusHeader(a)
            });
            return this
        };
        c.setPlaybackFbmsParam = function(a) {
            b.prototype.setPlaybackFbmsParam.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPlaybackFbmsParam(a)
            });
            return this
        };
        c.setPreferredEdgeLatency = function(a) {
            b.prototype.setPreferredEdgeLatency.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setPreferredEdgeLatency(a)
            });
            return this
        };
        c.setUserInfo = function(a) {
            b.prototype.setUserInfo.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setUserInfo(a)
            });
            return this
        };
        c.setDynamicStatusHeader = function(a) {
            b.prototype.setDynamicStatusHeader.call(this, a);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setDynamicStatusHeader(a)
            });
            return this
        };
        c.setMediaSourceSourceBuffer = function(a, c) {
            b.prototype.setMediaSourceSourceBuffer.call(this, a, c);
            this.$OzMultiDestinationOperationLogger1.forEach(function(b) {
                return b.setMediaSourceSourceBuffer(a, c)
            });
            return this
        };
        c.unsetMediaSourceSourceBuffers = function() {
            b.prototype.unsetMediaSourceSourceBuffers.call(this);
            this.$OzMultiDestinationOperationLogger1.forEach(function(a) {
                return a.unsetMediaSourceSourceBuffers()
            });
            return this
        };
        c.log = function() {
            b.prototype.log.call(this), this.$OzMultiDestinationOperationLogger1.forEach(function(a) {
                return a.log()
            })
        };
        return a
    }(c("oz-player/loggings/OzOperationLoggerBase"));
    g.OzMultiDestinationPerfLoggerProvider = a
}), 98);
__d("oz-player/loggings/OzOperationLoggerObserver", ["oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = new(c("oz-player/shims/OzSubscriptionsHandler"))()
        }
        var b = a.prototype;
        b.observe = function(a, b) {
            var c;
            a = a.map(function(a) {
                var c = a.setOperationLoggedListener(function(a) {
                    var c = a.getClientTimeBegin() || 0,
                        d = a.getClientTimeEnd() || 0;
                    b.getOperationLogger(a.getOperationName()).setClientTimeBegin(c).setClientTimeDuration(d - c).setClientTimeEnd(d).setLength(a.getLength()).setResult(a.getResult() || "success").setInitiator(a.getInitiator()).setType(a.getType()).log()
                });
                a.activate();
                return c
            });
            (c = this.$1).addSubscriptions.apply(c, a)
        };
        b.destroy = function() {
            this.$1.release()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerOzWWWGlobalConfig", ["VideoPlayerShakaGlobalConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "oz_www_";
    a = {
        getBool: function(a, b) {
            return d("VideoPlayerShakaGlobalConfig").getBool(h + a, b)
        },
        getNumber: function(a, b) {
            return d("VideoPlayerShakaGlobalConfig").getNumber(h + a, b)
        },
        getString: function(a, b) {
            return d("VideoPlayerShakaGlobalConfig").getString(h + a, b)
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("oz-player/shims/www/OzNetworkDiagnosticsWWW", ["VideoPlayerOzWWWGlobalConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b) {
        if (!a) return null;
        a = parseInt(a.get(b), 10);
        return !isNaN(a) && isFinite(a) ? a : null
    }

    function i(a, b, c) {
        if (!a || b === "" || c === "") return null;
        b = (a = a.get(b)) != null ? a : "";
        a = b.split(";");
        for (b = 0; b < a.length; b++) {
            var d = a[b].split(":");
            if (d.length === 2 && d[0] === c) {
                d = parseInt(d[1], 10);
                return isFinite(d) ? d : null
            }
        }
        return null
    }
    a = {
        getNextValidSegmentId: function(a) {
            return h(a, "x-fb-next-valid-segment-id")
        },
        getResponseTimeMs: function(a) {
            return h(a, "x-fb-response-time-ms")
        },
        getDvlSegmentPTS: function(a) {
            return h(a, "x-fb-segment-pts-start")
        },
        getDvlStatus: function(a) {
            return a == null ? void 0 : a.get("x-fb-dynamic-status")
        },
        getUsableResponseSizeForBandwidthEstimation: function(a) {
            return h(a, "x-fb-dynamic-predictive-response-chunk-size")
        },
        getBandwidthMeanEstimate: function(a) {
            var b = c("VideoPlayerOzWWWGlobalConfig").getString("bandwidth_estimate_header_key", ""),
                d = c("VideoPlayerOzWWWGlobalConfig").getString("bandwidth_estimate_key", "");
            return i(a, b, d)
        },
        getBandwidthStandardDeviationEstimate: function(a) {
            return h(a, "x-bwe-std-dev")
        },
        getTimeToFirstByteMsEstimate: function(a) {
            return h(a, "x-mrtt-ms")
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("oz-player/shims/OzNetworkDiagnostics", ["oz-player/shims/www/OzNetworkDiagnosticsWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzNetworkDiagnosticsWWW")
}), 98);
__d("oz-player/manifests/OzDynamicVideoLibrary", ["oz-player/shims/OzNetworkDiagnostics"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$4 = null;
            this.$5 = null;
            this.$6 = new RegExp(/(.*)\.(m4v|m4a)(\?|$)/);
            this.$7 = {
                m4a: {
                    time: 0
                },
                m4v: {
                    time: 0
                }
            };
            this.$8 = {
                audio: "m4a",
                video: "m4v"
            };
            this.$9 = {};
            a = a.config;
            this.$3 = a
        }
        var b = a.prototype;
        b.getLastSegmentStartPTS = function() {
            return this.$1
        };
        b.getLast200RequestedTime = function() {
            return this.$5
        };
        b.getLast200RequestedUrlDecisionMinTime = function() {
            var a = [];
            for (var b in this.$7) a.push(this.$7[b].time);
            return Math.min.apply(Math, a)
        };
        b.getLast200RequestedUrlDecisionTimeByMimeType = function(a) {
            return (a = this.$7[this.$8[a]]) == null ? void 0 : a.time
        };
        b.updateWithResponse = function(a, b, d, e) {
            var f;
            if (!e.headers || e.status != 200) return;
            this.$5 = b;
            this.$1 = (f = c("oz-player/shims/OzNetworkDiagnostics").getDvlSegmentPTS(e.headers)) != null ? f : this.$1;
            this.$2 = c("oz-player/shims/OzNetworkDiagnostics").getDvlStatus(e.headers);
            this.$10(a, d);
            (this.$2 != null || this.$2 === "200") && (this.$4 = b)
        };
        b.$10 = function(a, b) {
            a = this.$6.exec(a);
            if (a != null) {
                a = a[2];
                b != null && (this.$7[a] = {
                    time: b
                })
            }
        };
        b.shouldRequestDynamicInfo = function(a) {
            if (a !== "video") return !1;
            this.$11(a);
            a = this.$12(a);
            return a != null && a <= this.$3.getNumber("dvl_initial_segment_ignore_count") ? !1 : this.$3.getNumber("dvl_update_interval_ms") == 0 || this.$4 == null || this.$4 + this.$3.getNumber("dvl_update_interval_ms") <= Date.now()
        };
        b.$11 = function(a) {
            this.$9[a] == null && (this.$9[a] = {
                segmentCount: 0
            });
            return this.$9[a].segmentCount = this.$9[a].segmentCount != null ? this.$9[a].segmentCount + 1 : 0
        };
        b.$12 = function(a) {
            return this.$9[a].segmentCount
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/parsers/getMIMECodecs", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        return a + '; codecs="' + b + '"'
    }
    f["default"] = a
}), 66);
__d("oz-player/manifests/OzRepresentationBase", ["oz-player/parsers/getMIMECodecs", "oz-player/shims/ozvariant", "oz-player/utils/OzError"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, c, d, e, f, g, h, i, j, k, l) {
            this.$1 = a, this.$2 = b, this.$10 = c, this.$5 = f, this.$3 = d, this.$4 = e, this.$6 = g, this.$7 = h, this.$8 = i, this.$9 = j, this.$11 = k, this.$12 = l
        }
        var b = a.prototype;
        b.getContentProtectionXml = function() {
            return this.$2
        };
        b.getID = function() {
            return this.$10
        };
        b.getBandwidth = function() {
            return this.$9
        };
        b.getMimeCodecs = function() {
            return c("oz-player/parsers/getMIMECodecs")(this.$3, this.$4)
        };
        b.getMimeType = function() {
            return this.$3
        };
        b.getCodecs = function() {
            return this.$4
        };
        b.getLang = function() {
            return this.$5
        };
        b.getRole = function() {
            return this.$6
        };
        b.getDisplayLabel = function() {
            return this.$10
        };
        b.getInitSegment = function() {
            return this.$7
        };
        b.getCustomFieldFirstSegment = function() {
            return this.$11
        };
        b.getCustomField = function(a) {
            if (this.$12 == null || !this.$12[a]) throw new(c("oz-player/utils/OzError"))({
                type: "OZ_REPRESENTATION_PARSER",
                description: "Custom field " + a + " is not specified by caller",
                extra: {
                    code: "OZ_RP-8"
                }
            });
            a = this.$12[a];
            try {
                return a(this.$1)
            } catch (a) {
                return null
            }
        };
        b.updateWith = function(b) {
            b instanceof a || c("oz-player/shims/ozvariant")(0, 229), this.$8.updateWith(b.$8)
        };
        b.getSegmentByTime = function(a) {
            return this.$8.getSegmentByTime(a)
        };
        b.getSegment = function(a) {
            return this.$8.getSegment(a)
        };
        b.getPredictedSegmentAfter = function(a) {
            return this.$8.getPredictedSegmentAfter(a)
        };
        b.canPredict = function() {
            return this.$8.canPredict()
        };
        b.canApproximateId = function() {
            return this.$8.canApproximateId()
        };
        b.getSegmentAfter = function(a) {
            return this.$8.getSegmentAfter(a)
        };
        b.isEndingSegment = function(a) {
            return this.$8.isEndingSegment(a)
        };
        b.addUpdateListener = function(a) {
            return this.$8.addUpdateListener(a)
        };
        b.getTimeRanges = function() {
            return this.$8.getTimeRanges()
        };
        b.blockTimeRange = function(a) {
            this.$8.blockTimeRange(a)
        };
        b.getEndingSegment = function() {
            return this.$8.getEndingSegment()
        };
        b.getMaxGopSec = function() {
            return this.$8.getMaxGopSec()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/manifests/OzVideoRepresentation", ["oz-player/manifests/OzRepresentationBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
            c = a.call(this, b, c, d, e, f, g, h, i, j, k, l, m) || this;
            c.$OzVideoRepresentation5 = null;
            c.$OzVideoRepresentation6 = null;
            c.$OzVideoRepresentation7 = null;
            c.$OzVideoRepresentation1 = n;
            c.$OzVideoRepresentation2 = o;
            c.$OzVideoRepresentation4 = m;
            c.$OzVideoRepresentation3 = b;
            if (m != null) {
                if (m.playbackResolutionMos != null) {
                    d = c.getCustomField("playbackResolutionMos");
                    c.$OzVideoRepresentation7 = d != null ? String(d) : null
                }
                if (m.playbackResolutionCsvqm != null) {
                    e = c.getCustomField("playbackResolutionCsvqm");
                    c.$OzVideoRepresentation6 = e != null ? String(e) : null
                }
            }
            return c
        }
        var c = b.prototype;
        c.getQualityScore = function(a) {
            if (a === "csvqm") return this.$OzVideoRepresentation6;
            else return this.$OzVideoRepresentation7
        };
        c.getWidth = function() {
            return this.$OzVideoRepresentation1
        };
        c.getHeight = function() {
            return this.$OzVideoRepresentation2
        };
        c.getDisplayLabel = function() {
            if (this.$OzVideoRepresentation5 != null) return this.$OzVideoRepresentation5;
            var a = this.$OzVideoRepresentation4 ? this.$OzVideoRepresentation4.qualityLabel : null;
            a && (this.$OzVideoRepresentation5 = a(this.$OzVideoRepresentation3));
            (this.$OzVideoRepresentation5 == null || this.$OzVideoRepresentation5 == "") && (this.$OzVideoRepresentation5 = this.getHeight().toString() + "p");
            return this.$OzVideoRepresentation5 || ""
        };
        return b
    }(c("oz-player/manifests/OzRepresentationBase"));
    g["default"] = a
}), 98);
__d("oz-player/media_source/OzMSESourceBufferImpl", ["oz-player/shims/OzDOMEventListener", "oz-player/utils/OzError"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, c) {
            this.$1 = a, this.$2 = c, this.$3 = b
        }
        var b = a.prototype;
        b.registerOnUpdateStartListener = function(a) {
            return c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "updatestart", a)
        };
        b.registerOnUpdateEndListener = function(a) {
            return c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "updateend", a)
        };
        b.registerOnUpdateListener = function(a) {
            return c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "update", a)
        };
        b.registerOnErrorListener = function(a) {
            return c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "error", a)
        };
        b.getIsUpdating = function() {
            return this.$1.updating
        };
        b.getBuffered = function() {
            return this.$1.buffered
        };
        b.setAppendWindowEnd = function(a) {
            this.$1.appendWindowEnd = a
        };
        b.appendBuffer = function(a, b) {
            if (b !== this.$3) {
                if (!("changeType" in this.$1)) throw new(c("oz-player/utils/OzError"))({
                    description: "changeType not available in SourceBuffer",
                    type: "OZ_SOURCE_BUFFER"
                });
                try {
                    this.$1.changeType(b), this.$3 = b
                } catch (a) {
                    throw new(c("oz-player/utils/OzError"))({
                        description: 'Failed to changeType("' + b + '"): ' + (a.message || String(a)),
                        type: "OZ_SOURCE_BUFFER"
                    })
                }
            }
            this.$1.appendBuffer(a)
        };
        b.abort = function() {
            this.$1.abort()
        };
        b.remove = function(a, b) {
            this.$1.remove(a, b)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/media_source/OzMediaErrorProvider", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.hasError = function() {
            return this.$1.error !== null
        };
        b.getMediaErrorName = function() {
            var a = this.$1.error;
            return a && a.message ? this.$2(a.message) : null
        };
        b.getErrorCode = function() {
            var a = this.$1.error;
            return a && a.code ? a.code : null
        };
        b.getVideoNode = function() {
            return this.$1
        };
        b.$2 = function(a) {
            return a.replace(/([0-9]{2,})/g, function(a) {
                var b = "";
                while (b.length < a.length) b += "#";
                return b
            })
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/utils/OzSourceBufferUtil", ["oz-player/utils/OzNumericalRangeUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = 0;
        for (var c = 0; c < a.getBuffered().length; c++) b += a.getBuffered().end(c) - a.getBuffered().start(c);
        return b
    }

    function b(a) {
        return a.reduce(function(a, b) {
            return a + (b.endTime - b.startTime)
        }, 0)
    }

    function c(a) {
        return a.getBuffered().length == 0 ? 0 : a.getBuffered().start(0)
    }

    function e(a) {
        var b = null;
        try {
            b = a.getBuffered()
        } catch (a) {
            return 0
        }
        return b.length == 0 ? 0 : b.end(b.length - 1)
    }

    function f(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push({
            startTime: a.start(c),
            endTime: a.end(c)
        });
        return b
    }

    function h(a, b, c) {
        c = d("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(c, b, a.map(function(a) {
            return {
                rangeStart: a.startTime,
                rangeEnd: a.endTime
            }
        }));
        b = c >= 0 ? parseFloat((a[c].endTime - b).toFixed(3)) : 0;
        a = c >= 0 ? a.length - 1 - c : -1;
        return {
            bufferAheadSec: b,
            bufferedOffset: a
        }
    }

    function i(a, b, c) {
        var e = a.map(function(a) {
            return {
                rangeStart: a.startTime,
                rangeEnd: a.endTime
            }
        });
        c = d("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(c, b, e);
        e = parseFloat(e.reduce(function(a, c) {
            var e = c.rangeEnd;
            return e == null ? a : a + (d("oz-player/utils/OzNumericalRangeUtil").isWithin(b, c) ? e - b : d("oz-player/utils/OzNumericalRangeUtil").isLargerThan(c.rangeStart, b) ? e - c.rangeStart : 0)
        }, 0).toFixed(3));
        a = c >= 0 ? a.length - 1 - c : -1;
        return {
            bufferAheadSec: e,
            bufferedOffset: a
        }
    }
    g.getTotalBufferedTime = a;
    g.getTotalInBufferedRanges = b;
    g.getStartBufferedTime = c;
    g.getEndBufferedTime = e;
    g.convertToBufferedTimeRangeArray = f;
    g.getBufferAheadInBufferedRanges = h;
    g.getTotalBufferAheadOfPosition = i
}), 98);
__d("oz-player/media_source/SourceBufferManagerUtils", ["oz-player/utils/OzSourceBufferUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c) {
        var e = d("oz-player/utils/OzSourceBufferUtil").getEndBufferedTime(b);
        return function() {
            var a = d("oz-player/utils/OzSourceBufferUtil").getEndBufferedTime(b);
            return {
                startTime: e,
                endTime: a
            }
        }
    }
    g.startMeasuringAppendedBuffer = a
}), 98);
__d("oz-player/shims/www/OzDeferredWWW", ["Deferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("Deferred")
}), 98);
__d("oz-player/shims/OzDeferred", ["oz-player/shims/www/OzDeferredWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzDeferredWWW")
}), 98);
__d("oz-player/utils/OzFakeEventTarget", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var b = a.prototype;
        b.dispatchEvent = function(a) {
            if (this.$1[a] == null) return;
            this.$1[a].forEach(function(a) {
                return a()
            })
        };
        b.addEventListener = function(a, b) {
            var c = this;
            this.$1[a] === void 0 && (this.$1[a] = new Set());
            this.$1[a].add(b);
            return {
                remove: function() {
                    c.removeEventListener(a, b)
                }
            }
        };
        b.removeEventListener = function(a, b) {
            if (!this.$1[a]) return;
            this.$1[a]["delete"](b)
        };
        b.destroy = function() {
            this.$1 = {}
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/states/OzObservedSourceBufferState", ["oz-player/shims/OzSubscriptionsHandler", "oz-player/utils/OzFakeEventTarget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            var e;
            e = a.call(this) || this;
            e.$OzObservedSourceBufferState2 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            e.$OzObservedSourceBufferState3 = [];
            e.$OzObservedSourceBufferState6 = function() {
                var a;
                try {
                    a = e.$OzObservedSourceBufferState1.getBuffered()
                } catch (a) {
                    if (a.name === "InvalidStateError") {
                        e.$OzObservedSourceBufferState3 = [];
                        return
                    } else throw a
                }
                var b = [];
                for (var c = 0; c < a.length; c++) b.push({
                    startTime: a.start(c),
                    endTime: a.end(c)
                });
                e.$OzObservedSourceBufferState3 = b
            };
            e.$OzObservedSourceBufferState1 = b;
            e.$OzObservedSourceBufferState4 = d;
            e.$OzObservedSourceBufferState5();
            return e
        }
        var d = b.prototype;
        d.$OzObservedSourceBufferState5 = function() {
            var a = this;
            this.$OzObservedSourceBufferState2.release();
            this.$OzObservedSourceBufferState2 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$OzObservedSourceBufferState2.addSubscriptions(this.$OzObservedSourceBufferState1.registerOnUpdateEndListener(function() {
                a.$OzObservedSourceBufferState6(), a.dispatchEvent("buffer_updated")
            }), this.$OzObservedSourceBufferState1.registerOnErrorListener(this.$OzObservedSourceBufferState6))
        };
        d.setSourceBuffer = function(a) {
            this.$OzObservedSourceBufferState1 = a, this.$OzObservedSourceBufferState5(), this.$OzObservedSourceBufferState6()
        };
        d.getBufferedRanges = function() {
            return this.$OzObservedSourceBufferState3
        };
        d.destroy = function() {
            a.prototype.destroy.call(this), this.$OzObservedSourceBufferState2.release(), this.$OzObservedSourceBufferState2.engage()
        };
        return b
    }(c("oz-player/utils/OzFakeEventTarget"));
    g["default"] = a
}), 98);
__d("oz-player/utils/OzCustomErrorCode", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        APPEND_BUFFER_UNKNOWN_ERROR: "21539",
        APPEND_BUFFER_INVALID_STATE_ERROR_SOURCE_BUFFER_HAS_BEEN_REMOVED: "21540",
        APPEND_BUFFER_MEDIA_ERROR_ATTRIBUTE_NOT_NULL: "21541",
        APPEND_BUFFER_SOURCE_BUFFER_UPDATING_ATTRIBUTE_IS_TRUE: "21542",
        SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR: "21543",
        SOURCE_BUFFER_MANAGER_CREATE_ERROR: "21544",
        SETUP_STREAMS_PROMISE_REJECTION: "21545",
        APPEND_BUFFER_QUOTA_EXCEEDED_ERROR: "21546",
        APPEND_BUFFER_INVALID_STATE_ERROR: "21547",
        SOURCE_BUFFER_MANAGER_UPDATEEND_UNKNOWN_ERROR: "21548",
        NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR: "21549",
        STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR: "21550",
        SOURCE_BUFFER_MANAGER_CLEAR_RANGE_FAILED: "21551"
    };
    b = a;
    f["default"] = b
}), 66);
__d("oz-player/utils/ozConcatUint8Arrays", ["oz-player/utils/OzError"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = 0;
        for (var d = 0; d < a.length; ++d) b += a[d].byteLength;
        var e, f;
        try {
            e = new ArrayBuffer(b), f = new Uint8Array(e)
        } catch (a) {
            throw new(c("oz-player/utils/OzError"))({
                type: "OZ_ALLOCATION_FAILURE",
                description: a.name + ": " + a.message
            })
        }
        d = 0;
        for (b = 0; b < a.length; ++b) {
            var g = a[b];
            f.set(g, d);
            d += g.byteLength
        }
        return {
            buffer: e,
            view: f
        }
    }
    g["default"] = a
}), 98);
__d("oz-player/media_source/SourceBufferManager", ["Promise", "oz-player/loggings/OzLoggingUtils", "oz-player/media_source/SourceBufferManagerUtils", "oz-player/shims/OzDOMEventListener", "oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzStreams", "oz-player/shims/OzSubscriptionsHandler", "oz-player/states/OzObservedSourceBufferState", "oz-player/utils/OzCustomErrorCode", "oz-player/utils/OzError", "oz-player/utils/ozConcatUint8Arrays"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = function() {
        function a(a, b, d, e, f, g) {
            var h = this;
            g === void 0 && (g = null);
            this.$3 = null;
            this.$4 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$6 = !1;
            this.$7 = [];
            this.$11 = !1;
            this.$12 = !1;
            this.$14 = 0;
            this.$27 = function() {
                if (h.$9.hasError()) {
                    h.$12 = !1;
                    h.$11 = !1;
                    var a = h.$9.getMediaErrorName();
                    a = a != null ? a : "An unknown source buffer error occurred.";
                    var b = h.$9.getErrorCode();
                    b = b != null ? String(b) : c("oz-player/utils/OzCustomErrorCode").SOURCE_BUFFER_MANAGER_UPDATEEND_UNKNOWN_ERROR;
                    a = new(c("oz-player/utils/OzError"))({
                        type: "OZ_SOURCE_BUFFER",
                        description: a,
                        extra: {
                            code: b
                        }
                    });
                    h.$3 && h.$3.reject(a);
                    h.$3 = null;
                    h.cancelOperationAndCleanQueue()
                } else if (!h.$12) {
                    h.$12 = !0;
                    b = h.$9.getVideoNode();
                    a = h.$27;
                    b = c("oz-player/shims/OzDOMEventListener").listenDOMEvent(b, "error", a);
                    h.$4.addSubscriptions(b)
                }
            };
            this.$17 = function() {
                var a = h.$1;
                if (a != null) {
                    a.getOperationLogger("source_buffer_updateend").setError((a = h.$9.getMediaErrorName()) != null ? a : void 0).setCode(h.$9.getErrorCode()).setResult(h.$11 ? "failed" : "success").log()
                }
                a = h.$3;
                a && (h.$11 ? h.$27() : (a.resolve(), h.$3 && (h.$3 = null)))
            };
            this.$18 = function() {
                var a = h.$1;
                if (a != null) {
                    a.getOperationLogger("source_buffer_error").setError((a = h.$9.getMediaErrorName()) != null ? a : void 0).setCode(h.$9.getErrorCode()).setResult("failed").log()
                }
                h.$11 = !0
            };
            this.$1 = g;
            this.$2 = a;
            this.$10 = b;
            this.$16();
            this.$8 = new(c("oz-player/states/OzObservedSourceBufferState"))(this.$2, this.$10);
            this.$9 = d;
            this.$13 = e;
            this.$15 = f
        }
        var e = a.prototype;
        e.$16 = function() {
            this.$4.release(), this.$4 = new(c("oz-player/shims/OzSubscriptionsHandler"))(), this.$4.addSubscriptions(this.$2.registerOnUpdateEndListener(this.$17), this.$2.registerOnErrorListener(this.$18))
        };
        e.setSourceBuffer = function(a) {
            if (a == null) return;
            this.cancelOperationAndCleanQueue();
            this.$2 = a;
            this.$16();
            this.$8.setSourceBuffer(a)
        };
        e.queueData = function(a, b, d, e, f) {
            e === void 0 && (e = null);
            f === void 0 && (f = 0);
            var g = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise"));
            this.$7.push({
                data: a,
                deferred: g,
                loggerProvider: e,
                appendTarget: f,
                mimeCodecs: b,
                clearSourceBufferRange: d
            });
            a = g.getPromise();
            this.$6 || this.$19()["catch"](function(a) {});
            return a
        };
        e.cancelOperationAndCleanQueue = function(a) {
            a === void 0 && (a = null);
            a && a.cloneContext().getOperationLogger("source_buffer_cancel_and_clean").log();
            var b = this.$20("cancel and clean");
            this.$7.forEach(function(a) {
                a = a.deferred;
                a.reject(b)
            });
            this.$7 = [];
            try {
                this.$13(this.$2) && (this.$9.hasError() || this.$2.abort())
            } catch (b) {
                var c = b;
                a && a.cloneContext().getOperationLogger("cancel_operation_abort_failed").setError(c).setReason(this.$15 ? this.$15() : null).log()
            }
            a = this.$3;
            a && a.reject(b);
            this.$5 && (this.$5.reject(b), this.$5 = null)
        };
        e.getSourceBufferState = function() {
            return this.$8
        };
        e.$21 = function(a, b) {
            a = Math.max(a, 0);
            b > 0 && b > a && this.$2.remove(a, b)
        };
        e.$22 = function(a, b) {
            a = Math.max(a, 0);
            if (b > 0 && b > a) {
                var d = this.$23();
                this.$21(a, b);
                return d
            }
            return c("oz-player/shims/OzMaybeNativePromise").resolve()
        };
        e.clearRangeWithWait = function(a) {
            var c = this;
            this.cancelOperationAndCleanQueue();
            return a.reduce(function(a, b) {
                var d = b.fromTime,
                    e = b.toTime;
                return a.then(function() {
                    return c.$22(d, e)
                })
            }, (h || (h = b("Promise"))).resolve())
        };
        e.$23 = function(a) {
            var b = this.$3 = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise"));
            b = b.getPromise();
            a && d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(b, a, "wait_for_source_buffer");
            return b
        };
        e.$24 = function(a, b, e, f) {
            var g = this,
                h = function() {
                    var h = g.$3 = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise")),
                        i = !1,
                        j = !0;
                    try {
                        j = !!g.$2.getBuffered()
                    } catch (a) {
                        j = !1
                    }
                    try {
                        i = g.$2.getIsUpdating();
                        if (j) g.$2.appendBuffer(a, b);
                        else {
                            h.resolve();
                            return h.getPromise()
                        }
                    } catch (a) {
                        j = a;
                        var k = c("oz-player/utils/OzCustomErrorCode").APPEND_BUFFER_UNKNOWN_ERROR,
                            l = j.name,
                            m = j.message;
                        l === "QuotaExceededError" ? k = c("oz-player/utils/OzCustomErrorCode").APPEND_BUFFER_QUOTA_EXCEEDED_ERROR : g.$9.hasError() ? k = c("oz-player/utils/OzCustomErrorCode").APPEND_BUFFER_MEDIA_ERROR_ATTRIBUTE_NOT_NULL : i ? k = c("oz-player/utils/OzCustomErrorCode").APPEND_BUFFER_SOURCE_BUFFER_UPDATING_ATTRIBUTE_IS_TRUE : l === "InvalidStateError" && typeof m === "string" && /SourceBuffer has been removed/.test(m) ? k = c("oz-player/utils/OzCustomErrorCode").APPEND_BUFFER_INVALID_STATE_ERROR_SOURCE_BUFFER_HAS_BEEN_REMOVED : l === "InvalidStateError" && (k = c("oz-player/utils/OzCustomErrorCode").APPEND_BUFFER_INVALID_STATE_ERROR);
                        i = new(c("oz-player/utils/OzError"))({
                            type: l === "QuotaExceededError" ? "OZ_SOURCE_BUFFER_QUOTA_EXCEEDED" : "OZ_SOURCE_BUFFER",
                            description: String(m),
                            extra: {
                                originalError: j,
                                code: k
                            }
                        });
                        g.$3 = null;
                        h.reject(i)
                    }
                    l = h.getPromise();
                    e && d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(l, e, "append", function(b) {
                        var c;
                        b.setLength(a.byteLength);
                        c = (c = f == null ? void 0 : f.appendTarget) != null ? c : null;
                        b.setAppendTarget(c)
                    });
                    return l
                };
            if (this.$2.getIsUpdating()) return this.$23(e).then(h)["catch"](function(a) {
                throw a
            });
            this.$14 += a.byteLength;
            return h()
        };
        e.$19 = function() {
            var a = this;
            if (this.$6) return c("oz-player/shims/OzMaybeNativePromise").reject(this.$25("Another unit of queued data is being appended."));
            var b = this.$7.shift();
            if (!b) {
                this.$6 = !1;
                return c("oz-player/shims/OzMaybeNativePromise").resolve()
            }
            var e = b.data,
                f = b.mimeCodecs,
                g = b.deferred,
                h = b.loggerProvider,
                i = b.appendTarget,
                j = b.clearSourceBufferRange;
            this.$6 = !0;
            var k;
            b = function() {
                return e instanceof d("oz-player/shims/OzStreams").OzReadableStream ? a.$26(e, f, h, i) : a.$24(e, f, h, {
                    appendTarget: i
                })
            };
            j ? (k = this.$2.getIsUpdating() ? this.$23(h) : c("oz-player/shims/OzMaybeNativePromise").resolve(), k = k.then(function() {
                return a.$22(j[0], j[1])
            }).then(b)) : k = b();
            var l = d("oz-player/media_source/SourceBufferManagerUtils").startMeasuringAppendedBuffer(this.$10, this.$2, this.$8);
            return k["catch"](function(a) {
                g.reject(a)
            }).then(function() {
                var b = l(),
                    c = b.startTime;
                b = b.endTime;
                g.resolve({
                    startTime_UNSAFE: c,
                    endTime_UNSAFE: b,
                    appendedSec: b - c
                });
                a.$6 = !1;
                a.$19()["catch"](function(a) {})
            })
        };
        e.$26 = function(a, b, d, e) {
            var f = this,
                g = [],
                h = 0,
                i = a.getReader();
            a = function a() {
                var j = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise"));
                f.$5 = j;
                i.read().then(function(a) {
                    j.resolve(a), f.$5 = null
                })["catch"](function(a) {
                    j.reject(a), f.$5 = null
                });
                return j.getPromise().then(function(i) {
                    if (i.done) {
                        var j = c("oz-player/utils/ozConcatUint8Arrays")(g);
                        j = j.buffer;
                        g.length = 0;
                        h = 0;
                        return j.byteLength > 0 ? f.$24(j, b, d, {
                            appendTarget: e
                        }) : c("oz-player/shims/OzMaybeNativePromise").resolve()
                    }
                    j = i.value;
                    i = j;
                    if (e > 0) {
                        j = j instanceof Uint8Array ? j : new Uint8Array(j);
                        g.push(j);
                        h += j.byteLength;
                        if (h >= e) {
                            j = c("oz-player/utils/ozConcatUint8Arrays")(g);
                            j = j.buffer;
                            g.length = 0;
                            h = 0;
                            i = j
                        }
                    }
                    return i && i.byteLength >= e ? f.$24(i, b, d, {
                        appendTarget: e
                    }).then(function() {
                        return a()
                    }) : a()
                }, function(a) {
                    f.$2.abort();
                    return c("oz-player/shims/OzMaybeNativePromise").reject(a)
                })
            };
            return a()
        };
        e.$25 = function(a) {
            var b = this.$1;
            b != null && b.getOperationLogger("source_buffer_invariant").setError(a).setResult("failed").log();
            b = new Error(a);
            b.name = "invariant_violation";
            return b
        };
        e.$20 = function(a) {
            a = new Error("operation is cancelled: " + a);
            a.name = "cancelled";
            return a
        };
        e.destroy = function() {
            var a = this,
                b = this.$1;
            b && b.cloneContext().getOperationLogger("source_buffer_destroy").log();
            b = this.$3;
            b && (!this.$12 ? (b.reject(this.$20("destroyed")), this.$3 = null, this.$4.release(), this.$4 = new(c("oz-player/shims/OzSubscriptionsHandler"))()) : b.getPromise()["catch"](function() {
                a.$3 = null, a.$4.release(), a.$4 = new(c("oz-player/shims/OzSubscriptionsHandler"))()
            }));
            this.$8.destroy()
        };
        e.getDebug = function() {
            return {
                SourceBuffer: this.$2
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/shims/www/getOzVTTSourceBufferImplLazyWWW", ["JSResourceForInteraction"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("JSResourceForInteraction")("OzVTTSourceBufferImpl").__setRef("oz-player/shims/www/getOzVTTSourceBufferImplLazyWWW");

    function a() {
        return h.load()
    }
    g["default"] = a
}), 98);
__d("oz-player/shims/www/getOzVTTSourceBufferImplWWW", ["oz-player/shims/www/getOzVTTSourceBufferImplLazyWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/getOzVTTSourceBufferImplLazyWWW")
}), 98);
__d("oz-player/shims/getOzVTTSourceBufferImpl", ["oz-player/shims/www/getOzVTTSourceBufferImplWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/getOzVTTSourceBufferImplWWW")
}), 98);
__d("oz-player/shims/www/ozClearTimeoutWWW", ["clearTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("clearTimeout")
}), 98);
__d("oz-player/shims/ozClearTimeout", ["oz-player/shims/www/ozClearTimeoutWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/ozClearTimeoutWWW")
}), 98);
__d("oz-player/shims/www/ozSetTimeoutAcrossTransitionsWWW", ["setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("setTimeoutAcrossTransitions")
}), 98);
__d("oz-player/shims/ozSetTimeoutAcrossTransitions", ["oz-player/shims/www/ozSetTimeoutAcrossTransitionsWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/ozSetTimeoutAcrossTransitionsWWW")
}), 98);
__d("oz-player/shims/www/ozThrottleWWW", ["throttle"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("throttle")
}), 98);
__d("oz-player/shims/ozThrottle", ["oz-player/shims/www/ozThrottleWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/ozThrottleWWW")
}), 98);
__d("oz-player/utils/OzMimeUtil", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return (a.split("/")[0] || "").trim()
    }
    f.getMimeType = a
}), 66);
__d("oz-player/utils/ozGetErrorNameFromMediaErrorCode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        switch (a) {
            case 1:
                return "MEDIA_ERR_ABORTED";
            case 2:
                return "MEDIA_ERR_NETWORK";
            case 3:
                return "MEDIA_ERR_DECODE";
            case 4:
                return "MEDIA_ERR_SRC_NOT_SUPPORTED";
            default:
        }
        return "MEDIA_ERR_UNKNOWN"
    }
    f["default"] = a
}), 66);
__d("oz-player/media_source/MediaSourceManager", ["oz-player/loggings/OzMultiDestinationPerfLogger", "oz-player/media_source/OzMSESourceBufferImpl", "oz-player/media_source/OzMediaErrorProvider", "oz-player/media_source/SourceBufferManager", "oz-player/shims/OzDOMEventListener", "oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/getOzVTTSourceBufferImpl", "oz-player/shims/ozClearTimeout", "oz-player/shims/ozReportUnexpectedError", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/shims/ozThrottle", "oz-player/utils/OzCustomErrorCode", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzMimeUtil", "oz-player/utils/ozGetErrorNameFromMediaErrorCode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = this,
                e = a.videoNode,
                f = a.config,
                g = a.perfLoggerProvider;
            g = g === void 0 ? new(d("oz-player/loggings/OzMultiDestinationPerfLogger").OzMultiDestinationPerfLoggerProvider)([]) : g;
            var h = a.handleVttCaptionsUpdated,
                i = a.onClearVideoNodeError;
            a = a.onRetryVideoElementError;
            this.$3 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$4 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$6 = [];
            this.$7 = new Map();
            this.$8 = [];
            this.$10 = !1;
            this.$12 = !1;
            this.$13 = !1;
            this.$14 = !1;
            this.$15 = !1;
            this.$18 = null;
            this.$19 = null;
            this.$20 = new(c("oz-player/utils/OzErrorEmitter"))();
            this.$22 = "undetected";
            this.$28 = function() {
                b.$30() || (b.$10 = !1);
                if (!b.$31()) return;
                var a = b.$8.shift();
                a && (a(b.$2), b.$10 = !0)
            };
            this.$5 = g;
            this.$11 = f;
            this.$1 = e;
            this.$21 = h;
            this.$16 = i;
            this.$17 = a;
            this.$9 = new(c("oz-player/media_source/OzMediaErrorProvider"))(this.$1);
            this.$3.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "error", function() {
                var a;
                b.$5.getOperationLogger("media_element_error").setError((a = b.$9.getMediaErrorName()) != null ? a : void 0).setCode(b.$9.getErrorCode()).setResult("failed").setUserInfo({
                    av1HardwareSupport: b.$22
                }).log();
                b.$8 = [];
                b.$6 = [];
                b.$4.release();
                b.$4 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
                b.$15 = b.$15 || b.$14 || b.$13;
                a = b.$1.error;
                var d = (a == null ? void 0 : a.code) || 0,
                    e = new(c("oz-player/utils/OzError"))({
                        type: c("oz-player/utils/ozGetErrorNameFromMediaErrorCode")(d),
                        description: (a == null ? void 0 : a.message) != null ? a.message : "",
                        extra: {
                            originalError: a,
                            code: String(d)
                        }
                    });
                if (b.$19 != null) {
                    b.$5.getOperationLogger("media_element_error").setError(a).setCode(d).setReason("mitigation_failed").setResult("failed").setUserInfo({
                        av1HardwareSupport: b.$22
                    }).log();
                    b.$20.emitError(e);
                    return
                }
                b.$19 = b.$1.currentTime;
                b.$18 == null && (b.$18 = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(function() {
                    b.$18 = null, b.$11.getBool("retry_video_element_error") && (b.$17 != null && b.$17(e), b.$23())
                }, 0))
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "play", function() {
                b.$14 = !0
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "playing", function() {
                b.$14 = !1, b.$15 = !1, b.$19 = null, b.$13 = !0
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "pause", function() {
                b.$14 = !1, b.$13 = !1, b.$15 = !!b.$1.error
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "ended", function() {
                b.$14 = !1, b.$13 = !1
            }));
            this.$2 = new MediaSource();
            this.$5.getOperationLogger("media_source_new").log();
            this.$3.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$2, "sourceopen", function() {
                b.$5.getOperationLogger("media_source_open").log()
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$2, "sourceended", function() {
                b.$5.getOperationLogger("media_source_ended").log()
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$2, "sourceclose", function() {
                b.$5.getOperationLogger("media_source_close").log()
            }));
            this.$24(this.$2)
        }
        var b = a.prototype;
        b.$24 = function(a) {
            var b = this.$1,
                c = b.src;
            c !== "" && URL.revokeObjectURL(c);
            a ? b.src = URL.createObjectURL(a) : (b.removeAttribute("src"), b.removeAttribute("srcObject"))
        };
        b.$23 = function() {
            var a = this;
            this.$7.forEach(function(a) {
                a.cancelOperationAndCleanQueue()
            });
            this.$2 = new MediaSource();
            this.$24(this.$2);
            this.$7.forEach(function(a, b) {
                a.setSourceBuffer(null)
            });
            var b = this.$25().then(function() {
                var b = [];
                a.$7.forEach(function(c, d) {
                    var e = a.$26(d).then(function(b) {
                        c.setSourceBuffer(b), a.$27(b, d)
                    });
                    b.push(e)
                });
                return c("oz-player/shims/OzMaybeNativePromise").all(b)
            });
            b.then(function() {
                a.$16 && a.$16();
                a.$19 != null && (a.$1.currentTime = a.$19);
                if (a.$15) {
                    var b = a.$1.play();
                    return b == null ? void 0 : b["catch"](function() {})
                }
            })["catch"](function(b) {
                a.$20.emitError(b)
            })
        };
        b.$25 = function() {
            var a = this;
            if (this.$2.readyState === "open") return c("oz-player/shims/OzMaybeNativePromise").resolve();
            var b = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise"));
            this.$3.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$2, "sourceopen", function() {
                b.resolve(), a.$28()
            }));
            return b.getPromise()
        };
        b.$26 = function(a) {
            var b = this,
                e;
            try {
                a.includes("vtt") ? e = this.$29(a) : e = this.$25().then(function() {
                    return new(c("oz-player/media_source/OzMSESourceBufferImpl"))(b.$2.addSourceBuffer(a), a, b.$11)
                });
                return e.then(function(c) {
                    if (b.$11.getBool("stub_safari_source_buffer_abort")) try {
                        var e = c.abort,
                            f = function() {
                                b.$13 && e.call(c)
                            };
                        c.abort = function() {
                            f()
                        }
                    } catch (a) {}
                    b.$6.push(c);
                    c.registerOnUpdateListener(function() {
                        b.$5.cloneContext().getOperationLogger("source_buffer_update_start").setType(d("oz-player/utils/OzMimeUtil").getMimeType(a)).setMediaSourceSourceBuffer(d("oz-player/utils/OzMimeUtil").getMimeType(a), c).setType(d("oz-player/utils/OzMimeUtil").getMimeType(a)).log()
                    });
                    b.$5.getOperationLogger("add_source_buffer").setMediaSourceSourceBuffer(d("oz-player/utils/OzMimeUtil").getMimeType(a), c).log();
                    return c
                })
            } catch (b) {
                e = new(c("oz-player/utils/OzError"))({
                    type: "OZ_SOURCE_BUFFER",
                    description: 'Failed to addSourceBuffer("' + a + '"): ' + (b.message || String(b)),
                    extra: {
                        originalError: b,
                        code: c("oz-player/utils/OzCustomErrorCode").SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR.toString()
                    }
                });
                throw e
            }
        };
        b.$27 = function(a, b) {
            var c = this;
            this.$4.addSubscriptions(a.registerOnUpdateEndListener(function() {
                c.$28()
            }))
        };
        b.$29 = function(a) {
            var b = this;
            return c("oz-player/shims/getOzVTTSourceBufferImpl")().then(function(d) {
                if (b.$21 != null) {
                    var e = new d({
                            onCaptionsChanged: b.$21
                        }),
                        f = c("oz-player/shims/ozThrottle")(function() {
                            e.setCurrentVideoTime(b.$1.currentTime)
                        }, 200);
                    b.$3.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(b.$1, "timeupdate", function() {
                        f()
                    }), {
                        remove: function() {
                            f = function() {}
                        }
                    });
                    return e
                } else throw new(c("oz-player/utils/OzError"))({
                    type: "OZ_SOURCE_BUFFER",
                    description: 'Failed to addSourceBuffer("' + a + '"): No handleVttCaptionsUpdated callback provided',
                    extra: {
                        code: c("oz-player/utils/OzCustomErrorCode").SOURCE_BUFFER_MANAGER_ADD_SOURCE_BUFFER_ERROR.toString()
                    }
                })
            })
        };
        b.createSourceBufferManager = function(a, b, e) {
            var f = this;
            return c("oz-player/shims/OzMaybeNativePromise").all([this.$25(), this.$26(a)]).then(function(b) {
                b[0];
                b = b[1];
                var e = new(c("oz-player/media_source/SourceBufferManager"))(b, f.$11, f.$9, function(a) {
                    return f.$2.readyState !== "closed" && !0
                }, function() {
                    return f.$2.readyState
                }, f.$5.cloneContext().setType(d("oz-player/utils/OzMimeUtil").getMimeType(a)));
                f.$27(b, a);
                f.$7.set(a, e);
                return e
            })["catch"](function(a) {
                if (a instanceof c("oz-player/utils/OzError")) throw a;
                else {
                    a = new(c("oz-player/utils/OzError"))({
                        type: "OZ_SOURCE_BUFFER",
                        description: "Failed to create SBM: " + (a.message || String(a)) + ", support AAC-LC=" + (MediaSource.isTypeSupported("audio/mp4; codecs=mp4a.40.2") ? "true" : "false") + ", readyState=" + f.$2.readyState,
                        extra: {
                            originalError: a,
                            code: c("oz-player/utils/OzCustomErrorCode").SOURCE_BUFFER_MANAGER_CREATE_ERROR.toString()
                        }
                    });
                    throw a
                }
            })
        };
        b.getReadyState = function() {
            return this.$2.readyState
        };
        b.getMediaSource = function() {
            return this.$2
        };
        b.notifyEndOfStream = function(a, b) {
            var d = this,
                e = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise"));
            this.$3.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$2, "sourceended", function() {
                e.resolve()
            }));
            this.$8.push(function(c) {
                if (c.readyState === "open") {
                    var e = d.$5.getOperationLogger("end_of_stream");
                    e.setInitiator(a).setReason(b);
                    e.log();
                    c.endOfStream()
                }
            });
            this.$28();
            return e.getPromise()
        };
        b.updateDuration = function(a, b) {
            var d = this,
                e = this.$2.duration;
            if (Number.isFinite(e) && (!b || e >= a)) return;
            this.$8.push(function(b) {
                b.duration !== e && !(isNaN(b.duration) && isNaN(e)) && c("oz-player/shims/ozReportUnexpectedError")(new Error("mediaSource duration discrepancy"), b.duration + " != " + e, "warn");
                if (a < b.duration) return;
                d.$5.getOperationLogger("media_source_update_duration").setMediaSourcePreviousDuration(b.duration).setMediaSourceNewDuration(a).log();
                b.duration = a
            });
            this.$28();
            return
        };
        b.detach = function() {
            this.$18 && (c("oz-player/shims/ozClearTimeout")(this.$18), this.$18 = null);
            this.$5.getOperationLogger("source_buffer_detach").unsetMediaSourceSourceBuffers();
            this.$24(null);
            for (var a = 0; a < this.$2.sourceBuffers.length; a++) {
                var b = this.$2.sourceBuffers[a];
                this.$2.removeSourceBuffer(b)
            }
            this.$3.release();
            this.$3.engage();
            this.$4.release();
            this.$4.engage();
            this.$8 = [];
            this.$10 = !1;
            this.$12 = !0
        };
        b.$31 = function() {
            return !this.$30() && this.$2.readyState === "open" && !this.$10 && !this.$12
        };
        b.$30 = function() {
            return this.$6.some(function(a) {
                return a.getIsUpdating()
            })
        };
        b.onError = function(a) {
            return this.$20.onError(a)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/media_source/OzMediaSeekableRangeManager", ["oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            var d = this;
            this.$5 = function(a) {
                a === void 0 && (a = !0);
                var b = d.$2;
                if (!b) return;
                b = b.getTimeRanges();
                if (!b.length) return;
                b = b[b.length - 1];
                d.$1.updateDuration(b.endTime, a)
            };
            this.$1 = a;
            this.$3 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$4 = b
        }
        var b = a.prototype;
        b.setTimeRangeProvider = function(a) {
            this.$3.release(), this.$3.engage(), this.$3.addSubscriptions(a.addUpdateListener(this.$5)), this.$2 = a
        };
        b.listenToMediaStreamInitAppended = function(a) {
            var b = this;
            return a.addListener("initAppended", function() {
                b.$5(!1)
            })
        };
        b.destroy = function() {
            this.$3.release()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/networks/OzClientClock", ["oz-player/shims/OzPerformance", "oz-player/utils/OzResourceTimingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        if (a !== null) {
            a = parseInt(a, 10);
            if (!isNaN(a)) return a
        }
        return null
    }
    a = function() {
        function a() {
            this.$1 = null, this.$2 = 0, this.$2 = Date.now() - c("oz-player/shims/OzPerformance").now()
        }
        var b = a.prototype;
        b.updateOffsetFromHeaderResponse = function(a, b) {
            var c = h(b.get("x-fb-dynamic-server-wallclock-ms"));
            b = h(b.get("x-fb-dynamic-rtt-ms"));
            a = d("oz-player/utils/OzResourceTimingUtils").getLatestResourceTimingEntry(a);
            if (c !== null && b !== null && a != null && (a.responseStart > 0 && a.duration > 10)) {
                a = a.requestStart + this.$2;
                c = c - a - b / 2;
                this.$1 = c
            }
        };
        b.now = function() {
            var a;
            return c("oz-player/shims/OzPerformance").now() + this.$2 + ((a = this.$1) != null ? a : 0)
        };
        b.getClientClockOffsetMs = function() {
            return this.$1
        };
        return a
    }();
    b = new a();
    g["default"] = b
}), 98);
__d("oz-player/networks/OzCreateErrorStream", ["oz-player/shims/OzStreams"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return new(d("oz-player/shims/OzStreams").OzReadableStream)({
            pull: function(b) {
                b.error(a)
            }
        })
    }
    g["default"] = a
}), 98);
__d("oz-player/shims/OzFetchAPI", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = function(b, c) {
        return a.fetch(b, c)
    };
    c = function(b, c) {
        return new a.Response(b, c)
    };
    f.fetch = b;
    f.Response = c
}), 66);
__d("oz-player/networks/FetchWithTimeout", ["oz-player/shims/OzFetchAPI", "oz-player/shims/ozClearTimeout", "oz-player/shims/ozSetTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function b(b, e, f, g) {
        if (!d("oz-player/shims/OzFetchAPI").fetch) throw new Error("fetch api is missing");
        var h = null;
        if ("AbortController" in a && f != null && f != 0) {
            var i = new AbortController();
            h = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(function() {
                return i.abort()
            }, f);
            f = {
                credentials: e,
                signal: i.signal
            }
        } else f = {
            credentials: e
        };
        g != null && (f = babelHelpers["extends"]({}, f, {
            referrer: g
        }));
        return d("oz-player/shims/OzFetchAPI").fetch(b, f).then(function(a) {
            c("oz-player/shims/ozClearTimeout")(h);
            return a
        })
    }
    g["default"] = b
}), 98);
__d("oz-player/networks/OzHTTPHeaders", ["oz-player/shims/ozvariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d = function() {
        function a() {
            this.$1 = new Map()
        }
        var b = a.prototype;
        b.append = function(a, b) {
            a = a.toLowerCase();
            var c = this.$1.get(a);
            c != null ? this.$1.set(a, c + ", " + b) : this.$1.set(a, b)
        };
        b.get = function(a) {
            a = a.toLowerCase();
            a = this.$1.get(a);
            return (a = a) != null ? a : null
        };
        b.entries = function() {
            return this.$1.entries()
        };
        b.has = function(a) {
            return this.get(a) !== null
        };
        return a
    }();
    e = a.Headers;
    f = e && e.prototype;
    var h = e && f && typeof f.append === "function" && typeof f.entries === "function" && typeof f.get === "function" && typeof f.has === "function" ? e : d;

    function b(a) {
        if (a == null) return null;
        if (typeof a === "object" && typeof a.append === "function" && typeof a.get === "function" && typeof a.has === "function")
            if (typeof a.entries === "function") return a;
            else if (typeof a.forEach === "function") {
            var b = new h();
            a.forEach(function(a, c) {
                b.append(c, a)
            });
            return b
        }
        c("oz-player/shims/ozvariant")(!1, "Malformed Headers object: %s %s", typeof a, String(a));
        return null
    }
    g.OzHTTPHeaders = h;
    g.maybeConvertHeadersToOzHTTPHeaders = b
}), 98);
__d("oz-player/utils/arrayBuffer2OzReadableStream", ["oz-player/shims/OzStreams"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return new(d("oz-player/shims/OzStreams").OzReadableStream)({
            start: function(b) {
                var c = new Uint8Array(a);
                b.enqueue(c);
                b.close()
            }
        })
    }
    g["default"] = a
}), 98);
__d("oz-player/utils/maybeConvertReadableStreamToOzReadableStream", ["asyncToGeneratorRuntime", "oz-player/shims/OzStreams"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (!d("oz-player/shims/OzStreams").OzReadableStreamIsPolyfilled) return a;
        var c = a.getReader();
        return new(d("oz-player/shims/OzStreams").OzReadableStream)({
            start: function() {
                var a = b("asyncToGeneratorRuntime").asyncToGenerator(function*(a) {
                    while (!0) {
                        var b = (yield c.read());
                        if (b.done) break;
                        a.enqueue(b.value)
                    }
                    a.close()
                });

                function d(b) {
                    return a.apply(this, arguments)
                }
                return d
            }()
        })
    }
    g["default"] = a
}), 98);
__d("oz-player/utils/processFetchResponse", ["oz-player/networks/OzHTTPHeaders", "oz-player/shims/OzMaybeNativePromise", "oz-player/utils/arrayBuffer2OzReadableStream", "oz-player/utils/maybeConvertReadableStreamToOzReadableStream"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.body,
            e = a.ok,
            f = a.status,
            g = a.headers;
        return b != null ? c("oz-player/shims/OzMaybeNativePromise").resolve({
            ok: e,
            status: f,
            headers: d("oz-player/networks/OzHTTPHeaders").maybeConvertHeadersToOzHTTPHeaders(g),
            body: c("oz-player/utils/maybeConvertReadableStreamToOzReadableStream")(b),
            arrayBuffer: function() {
                return a.arrayBuffer()
            }
        }) : a.arrayBuffer().then(function(a) {
            return {
                ok: e,
                status: f,
                headers: d("oz-player/networks/OzHTTPHeaders").maybeConvertHeadersToOzHTTPHeaders(g),
                body: c("oz-player/utils/arrayBuffer2OzReadableStream")(a),
                arrayBuffer: function() {
                    return c("oz-player/shims/OzMaybeNativePromise").resolve(a)
                }
            }
        })
    }
    g["default"] = a
}), 98);
__d("oz-player/networks/OzFetchRequestImplementation", ["oz-player/networks/FetchWithTimeout", "oz-player/utils/processFetchResponse"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d, e, f, g, h, i) {
        f = d ? d.networkTimeoutMs : null;
        g = c("oz-player/networks/FetchWithTimeout")(a, b.credentials, f);
        return g.then(function(a) {
            var b = a.ok,
                d = a.status,
                f = a.headers;
            return e != null && !b && typeof a.text === "function" ? a.text().then(function(c) {
                return {
                    ok: b,
                    status: d,
                    headers: f,
                    body: c,
                    arrayBuffer: function() {
                        return a.arrayBuffer()
                    }
                }
            }) : c("oz-player/utils/processFetchResponse")(a)
        })
    }
    b = a;
    d = b;
    g["default"] = d
}), 98);
__d("oz-player/networks/withRetries", ["Promise", "asyncToGeneratorRuntime", "oz-player/shims/ozSetTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a, d, e) {
        return new(h || (h = b("Promise")))(function(f, g) {
            function h(a) {
                return i.apply(this, arguments)
            }

            function i() {
                i = b("asyncToGeneratorRuntime").asyncToGenerator(function*(b) {
                    try {
                        f(yield a())
                    } catch (a) {
                        if (b > 0) {
                            var i = typeof e === "function" ? e(d - b) : e;
                            c("oz-player/shims/ozSetTimeoutAcrossTransitions")(function() {
                                h(b - 1)
                            }, i)
                        } else g(a)
                    }
                });
                return i.apply(this, arguments)
            }
            h(d)
        })
    }
    g["default"] = a
}), 98);
__d("oz-player/networks/OzFetchWithCache", ["oz-player/networks/OzFetchRequestImplementation", "oz-player/networks/withRetries", "oz-player/shims/OzMaybeNativePromise", "oz-player/utils/OzError", "oz-player/utils/arrayBuffer2OzReadableStream", "oz-player/utils/processFetchResponse"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a.config,
            d = a.url,
            e = a.http,
            f = a.overrideOzRequestImplementation,
            g = a.options,
            h = a.prefetchCache,
            i = a.mediaStreamType,
            j = a.onPerfEntryAvailable,
            k = a.dataAppendedCallback,
            l = a.dataAppendedErrorCallback,
            m = f != null ? function() {
                return f.apply(void 0, arguments)
            } : c("oz-player/networks/OzFetchRequestImplementation");
        a = h ? h.getCacheValue(d) : null;
        h = a;
        a = !1;
        if (h) a = !0, h = h.then(function(a) {
            if (a.initiator === "FETCH") {
                var b = a.response,
                    d = b.ok,
                    e = b.status,
                    f = b.headers;
                return !d && typeof a.response.text === "function" ? a.response.text().then(function(b) {
                    return {
                        ok: !1,
                        status: e,
                        headers: f,
                        body: b,
                        arrayBuffer: function() {
                            return a.response.arrayBuffer()
                        }
                    }
                }) : c("oz-player/utils/processFetchResponse")(a.response)
            } else if (a.initiator === "XHR_REQUEST") {
                b = c("oz-player/utils/arrayBuffer2OzReadableStream")(a.response);
                return {
                    body: b,
                    status: 200,
                    headers: null,
                    ok: !0,
                    arrayBuffer: function() {
                        return c("oz-player/shims/OzMaybeNativePromise").resolve(a.response)
                    }
                }
            } else throw new(c("oz-player/utils/OzError"))({
                type: "OZ_UNEXPECTED_CACHE_INITIATOR",
                description: "Unable to handle request initiator: " + a.initiator
            })
        })["catch"](function(a) {
            return m(d, e, null, null, i, j, k, l)
        });
        else {
            var n;
            n = (n = g == null ? void 0 : g.retryAttempts_SIDX_USE_ONLY) != null ? n : 0;
            if (n > 0) {
                var o;
                o = (o = g == null ? void 0 : g.retryTimeoutMs_SIDX_USE_ONLY) != null ? o : 100;
                h = c("oz-player/networks/withRetries")(function() {
                    return m(d, e, g, b, i, j, k, l)
                }, n, o)
            } else h = m(d, e, g, b, i, j, k, l)
        }
        return {
            promise: h,
            retrievedFromCache: a
        }
    }
    g["default"] = a
}), 98);
__d("oz-player/networks/createNetworkError", ["oz-player/utils/OzError"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d, e, f) {
        return new(c("oz-player/utils/OzError"))({
            type: "OZ_NETWORK",
            description: f,
            extra: {
                originalError: a,
                code: b.toString(),
                headers: d,
                url: e
            }
        })
    }
    g["default"] = a
}), 98);
__d("oz-player/networks/OzNetworkRequestStream", ["oz-player/networks/OzCreateErrorStream", "oz-player/networks/OzFetchWithCache", "oz-player/networks/createNetworkError", "oz-player/shims/ozvariant", "oz-player/utils/OzCustomErrorCode", "oz-player/utils/OzError", "oz-player/utils/OzResourceTimingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$7 = !1;
            var b = a.config,
                c = a.baseUri,
                d = a.baseUriDecisionTime,
                e = a.options,
                f = a.requestParamCreator,
                g = a.networkRequestStreamHandlers,
                h = a.overrideOzRequestImplementation,
                i = a.prefetchCache,
                j = a.networkRequestStreamRetryHandler,
                k = a.dynamicVideoLibrary,
                l = a.mediaStreamType,
                m = a.dataAppendedCallback;
            a = a.dataAppendedErrorCallback;
            this.$1 = c;
            this.$2 = e;
            this.$3 = f;
            this.$9 = (c = g) != null ? c : [];
            this.$10 = j;
            this.$8 = h;
            this.$11 = i;
            this.$12 = b;
            this.$13 = k;
            this.$14 = d;
            this.$15 = l;
            this.$16 = m;
            this.$17 = a
        }
        var b = a.prototype;
        b.$18 = function(a) {
            var b = this;
            a = this.$3.createRequestParam(this.$1, a);
            var d = a.uri;
            a = a.http;
            d = d.toString();
            this.$4 = d;
            a = c("oz-player/networks/OzFetchWithCache")({
                config: this.$12,
                url: d,
                http: a,
                overrideOzRequestImplementation: this.$8,
                options: this.$2,
                prefetchCache: this.$11,
                mediaStreamType: this.$15,
                onPerfEntryAvailable: function(a) {
                    b.$19(a)
                },
                dataAppendedCallback: this.$16,
                dataAppendedErrorCallback: this.$17
            });
            var e = a.promise;
            a = a.retrievedFromCache;
            this.$7 = a;
            return {
                requestPromise: e,
                requestUrl: d
            }
        };
        b.startStream = function(a) {
            var b = this,
                d = this.$18(a),
                e = d.requestPromise,
                f = d.requestUrl,
                g = f,
                h = Date.now();
            return e.then(function(d) {
                var e;
                (e = b.$13) == null ? void 0 : e.updateWithResponse(f, h, b.$14, d);
                b.$6 = d;
                if (b.$10 != null && d.ok === !1) return b.$10(d, function() {
                    var d = b.$18(a),
                        c = d.requestPromise;
                    d = d.requestUrl;
                    g = d;
                    return c
                }, g)["catch"](function(a) {
                    throw new(c("oz-player/utils/OzError"))({
                        type: "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR",
                        description: a.message,
                        extra: {
                            originalError: a,
                            code: c("oz-player/utils/OzCustomErrorCode").NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR,
                            url: g
                        }
                    })
                });
                else return d
            }).then(function(a) {
                var d = [];
                for (var e = 0; e < b.$9.length; e++) try {
                    var f = b.$9[e].onResponse(a, g);
                    f && d.push(f)
                } catch (a) {
                    f = a;
                    return c("oz-player/networks/OzCreateErrorStream")(f)
                }
                f = a.body;
                e = a.headers;
                var h = a.ok;
                a = a.status;
                if (!h) return c("oz-player/networks/OzCreateErrorStream")(c("oz-player/networks/createNetworkError")(new Error("HTTP status not OK"), a, e, g, typeof f === "string" && f.length > 0 ? f : "HTTP error."));
                typeof f !== "string" && typeof f.getReader === "function" || c("oz-player/shims/ozvariant")(0, 3287);
                h = f;
                for (a = 0; a < d.length; a++) h = h.pipeThrough(d[a]);
                return h
            }, function(a) {
                var d = [];
                for (var e = 0; e < b.$9.length; e++) try {
                    var f = b.$9[e].onError(a, g);
                    f && d.push(f)
                } catch (a) {
                    f = a;
                    return c("oz-player/networks/OzCreateErrorStream")(f)
                }
                if (a instanceof TypeError) {
                    f = a.message ? a.message : a.stack ? String(a.stack) : "null";
                    e = c("oz-player/networks/OzCreateErrorStream")(c("oz-player/networks/createNetworkError")(a, 0, null, g, "Network failure: " + f));
                    for (f = 0; f < d.length; f++) e = e.pipeThrough(d[f]);
                    return e
                }
                throw a
            })["catch"](function(a) {
                if (a instanceof c("oz-player/utils/OzError") && a.getType() === "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR") throw a;
                if (a.name === "AbortError") {
                    var d = b.$12.getBool("fix_dom_exception_as_message") ? a.message : a;
                    return c("oz-player/networks/OzCreateErrorStream")({
                        type: a.name,
                        status: a.code,
                        url: g,
                        message: d
                    })
                }
                return c("oz-player/networks/OzCreateErrorStream")({
                    type: "stream_processing",
                    status: 0,
                    url: g,
                    message: "Stream processing error. " + a
                })
            })
        };
        b.$19 = function(a) {
            this.$5 = a
        };
        b.getLastPerformanceEntry = function() {
            if (this.$5 != null) return this.$5;
            return this.$4 == null ? null : d("oz-player/utils/OzResourceTimingUtils").getLatestResourceTimingEntry(this.$4)
        };
        b.getLastRequestUrl = function() {
            return this.$4
        };
        b.getLastResponse = function() {
            return this.$6
        };
        b.retrievedFromCache = function() {
            return this.$7
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/manifests/OzByteRange", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        return a.startByte === b.startByte
    }

    function b(a, b) {
        return b.endByte === null ? !1 : a.startByte === b.endByte + 1
    }

    function c(a, b) {
        return a.startByte < b.startByte ? !1 : b.endByte == null || b.endByte >= a.startByte
    }

    function d(a, b) {
        a = a;
        b = b;
        if (b.startByte < a.startByte) {
            var c = a;
            a = b;
            b = c
        }
        if (a.endByte == null) return {
            startByte: a.startByte,
            endByte: null
        };
        if (b.startByte > a.endByte + 1) return null;
        c = b.endByte == null || b.endByte > a.endByte ? b.endByte : a.endByte;
        return {
            startByte: a.startByte,
            endByte: c
        }
    }

    function e(a, b) {
        if (b.endByte == null) return null;
        if (a.startByte > b.endByte) return {
            startByte: a.startByte,
            endByte: a.endByte
        };
        return a.endByte != null && a.endByte <= b.endByte ? null : {
            startByte: b.endByte + 1,
            endByte: a.endByte
        }
    }

    function g(a) {
        return a.endByte == null ? null : a.endByte - a.startByte + 1
    }
    f.startsAtSame = a;
    f.startsImmediateAfter = b;
    f.startsDuring = c;
    f.union = d;
    f.disjoinAfter = e;
    f.getLength = g
}), 66);
__d("oz-player/networks/OzProducerInterruptedError", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a
}), 66);
__d("oz-player/networks/OzDeferredBuffer", ["oz-player/networks/OzProducerInterruptedError", "oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            a === void 0 && (a = {});
            this.$2 = [];
            this.$3 = !1;
            this.$5 = 0;
            a = a;
            a = a.disableArrayShift;
            this.$1 = !!a
        }
        var b = a.prototype;
        b.produce = function(a) {
            this.$6(a)
        };
        b.signalProducerInterruption = function() {
            this.$6(new(c("oz-player/networks/OzProducerInterruptedError"))("producer interrupted"))
        };
        b.consume = function(a) {
            var b = this;
            if (this.$3) throw new Error("A buffer can only be consumed by one client at a time");
            this.$3 = !0;
            var d = c("oz-player/shims/OzMaybeNativePromise").resolve();
            this.isEmpty() && (this.$4 = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise")), d = this.$4.getPromise());
            return d.then(function() {
                if (b.$1) {
                    if (b.$2[b.$5] === void 0) throw new Error("buffer has no value at position " + b.$5)
                } else if (b.$2.length === 0) throw new Error("buffer length must not be 0");
                b.$4 = null;
                b.$3 = !1;
                var c = b.$1 ? b.$7(a) : b.$8(a);
                if (c instanceof Uint8Array) return c;
                throw c
            })
        };
        b.$6 = function(a) {
            this.$2.push(a), this.$4 && this.$4.resolve()
        };
        b.$7 = function(a) {
            var b = this.$2[this.$5];
            if (b === void 0) return new Uint8Array([]);
            b = b;
            if (!(b instanceof Uint8Array)) {
                this.$2[this.$5] = void 0;
                this.$5++;
                return b
            }
            if (a !== void 0 && b.length > a) {
                var c = b.slice(a);
                b = b.slice(0, a);
                this.$2[this.$5] = c
            } else this.$2[this.$5] = void 0, this.$5++;
            return b
        };
        b.$8 = function(a) {
            if (this.$2.length === 0) return new Uint8Array([]);
            var b = this.$2[0];
            if (!(b instanceof Uint8Array)) {
                this.$2.shift();
                return b
            }
            if (a !== void 0 && b.length > a) {
                var c = b.slice(a);
                b = b.slice(0, a);
                this.$2[0] = c
            } else this.$2.shift();
            return b
        };
        b.isEmpty = function() {
            return this.$1 ? this.$2[this.$5] === void 0 : this.$2.length === 0
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/utils/ozPipeErrorTo", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        try {
            a == null ? void 0 : a.error(b)
        } catch (a) {}
    }
    f["default"] = a
}), 66);
__d("oz-player/networks/OzPausableRangeStream", ["oz-player/manifests/OzByteRange", "oz-player/networks/OzDeferredBuffer", "oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise", "oz-player/utils/ozPipeErrorTo"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h() {
        return new Error("Upstream has an inconsistent range")
    }
    var i = function() {
        function a() {
            this.$1 = 0
        }
        var b = a.prototype;
        b.setBytesToSkip = function(a) {
            this.$1 = a
        };
        b.setBytesSkipped = function(a) {
            this.$1 -= a
        };
        b.getBytesToSkip = function() {
            return this.$1
        };
        b.hasMoreBytesToSkip = function() {
            return this.$1 > 0
        };
        return a
    }();
    a = function() {
        function a(b, d, e, f, g) {
            var j = this;
            this.$5 = !1;
            this.$7 = 0;
            this.$8 = 0;
            this.$13 = !1;
            this.$14 = new i();
            this.$15 = !1;
            this.$16 = !1;
            this.$17 = !1;
            this.startStream = function() {
                j.$13 = !0;
                var b = {
                    startByte: j.$1.startByte,
                    endByte: j.$1.endByte
                };
                !j.$15 ? b.startByte += j.$8 : j.$8 && (j.$3.produce("skip_buffered_bytes"), j.$8 = 0);
                var d = j.$4;
                return j.$2.startStream(b).then(function(b) {
                    b.pipeTo(j.$16 ? d : j.$4).then(function() {
                        j.$12 && j.$12.resolve("stream_done")
                    })["catch"](function(b) {
                        j.$12 && !j.$12.isSettled() && (j.$16 && b === a.STREAM_PAUSED ? j.$12.resolve("stream_paused") : j.$12.reject(b))
                    });
                    j.$12 = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise"));
                    return {
                        statusPromise: j.$12.getPromise()
                    }
                })
            };
            this.$18 = b;
            this.$19 = d;
            this.$1 = e;
            this.$2 = f;
            b = g || {};
            d = b.fixStreamingUndefinedEndByte;
            e = b.disableDeferredBufferArrayShift;
            f = b.enablePausableStreamResumeFromStartDangerously;
            g = b.fixPausePreReadableStream;
            b = b.throwErrorWhenAborted;
            this.$11 = !!d;
            this.$15 = !!f;
            this.$16 = !!g;
            this.$17 = !!b;
            this.$3 = new(c("oz-player/networks/OzDeferredBuffer"))({
                disableArrayShift: !!e
            });
            this.$6 = new this.$18({
                start: function(a) {
                    j.$10 = a
                },
                pull: function(a) {
                    if ((j.$11 && j.$1.endByte === null && j.$5 || j.$7 === j.$20()) && j.$3.isEmpty()) {
                        a.close();
                        return c("oz-player/shims/OzMaybeNativePromise").resolve()
                    }
                    var b = function b() {
                        var d = j.$14.hasMoreBytesToSkip() ? j.$14.getBytesToSkip() : void 0;
                        return j.$3.consume(d).then(function(d) {
                            if (j.$14.hasMoreBytesToSkip()) {
                                j.$14.setBytesSkipped(d.length);
                                return b()
                            }
                            j.$7 += d.length;
                            var e = j.$20();
                            e !== null && j.$7 > (e || 0) && c("oz-player/utils/ozPipeErrorTo")(j.$10, h());
                            a.enqueue(d)
                        })["catch"](function(a) {
                            if (a === "skip_buffered_bytes") {
                                j.$14.setBytesToSkip(j.$7);
                                return b()
                            }
                            throw a
                        })
                    };
                    return b()
                },
                cancel: function(a) {
                    j.$12 && j.$12.resolve("stream_cancelled"), c("oz-player/utils/ozPipeErrorTo")(j.$9, a)
                }
            });
            this.$4 = this.$21()
        }
        var b = a.prototype;
        b.$20 = function() {
            var a = this.$1,
                b = a.startByte;
            a = a.endByte;
            return a != null ? a - b + 1 : null
        };
        b.$21 = function() {
            var a = this;
            return new this.$19({
                start: function(b) {
                    a.$9 = b
                },
                write: function(b) {
                    a.$3.produce(b), a.$8 += b.length
                },
                close: function() {
                    a.$5 = !0;
                    var b = a.$1,
                        d = b.endByte;
                    b = b.startByte;
                    a.$11 && d === null && a.$3.produce(new Uint8Array([]));
                    d !== null && a.$8 !== (d || 0) - b + 1 && c("oz-player/utils/ozPipeErrorTo")(a.$10, h())
                },
                abort: function(b) {
                    a.$12 && (a.$17 ? a.$12.reject(b) : a.$12.resolve("stream_aborted")), c("oz-player/utils/ozPipeErrorTo")(a.$10, b)
                }
            })
        };
        b.getStream = function() {
            return this.$6
        };
        b.pauseStream = function() {
            c("oz-player/utils/ozPipeErrorTo")(this.$9, a.STREAM_PAUSED), this.$12 && this.$12.resolve("stream_paused"), this.$4 = this.$21()
        };
        b.getByteRange = function() {
            return this.$1
        };
        b.getBytesStreamed = function() {
            return this.$7
        };
        b.tryConcatByteRange = function(a) {
            if (this.$13 || !d("oz-player/manifests/OzByteRange").startsImmediateAfter(a, this.$1)) return !1;
            this.$1 = {
                startByte: this.$1.startByte,
                endByte: a.endByte
            };
            return !0
        };
        return a
    }();
    a.STREAM_PAUSED = "streamPaused";
    g["default"] = a
}), 98);
__d("oz-player/networks/RequestParamCreator", ["oz-player/shims/OzURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a, b) {
        var d = this;
        this.createRequestParam = function(a, b) {
            var e = new(c("oz-player/shims/OzURI"))(a.toString());
            if (b) {
                a = b.startByte;
                var f = b.endByte;
                a === 0 && f == null || (e.addQueryData({
                    bytestart: b.startByte
                }), f != null && e.addQueryData({
                    byteend: f
                }))
            }
            if (d.$2) {
                var g = d.$2(e);
                g && Object.keys(g).forEach(function(a) {
                    var b = g[a];
                    e.addQueryData(a, b)
                })
            }
            a = d.$1 && d.$1(e) ? "include" : "same-origin";
            return {
                uri: e,
                http: {
                    credentials: a
                }
            }
        };
        this.$1 = a;
        this.$2 = b
    };
    g["default"] = a
}), 98);
__d("oz-player/networks/getOzSegmentStreamableRange", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (!a.length) return null;
        var b = a[0].getURI().toString(),
            c = a[0].getByteRange();
        if (!c) return null;
        var d = c;
        for (var e = 1; e < a.length; e++) {
            var f = a[e];
            if (f.getURI().toString() !== b) return null;
            f = f.getByteRange();
            if (!d || !f) return null;
            if (d.endByte === null || f.startByte !== d.endByte + 1) return null;
            d = f
        }
        return {
            startByte: c.startByte,
            endByte: d.endByte
        }
    }
    f["default"] = a
}), 66);
__d("oz-player/utils/OzNetworkRequestLoggingUtils", ["oz-player/shims/OzNetworkDiagnostics", "oz-player/utils/OzResourceTimingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return a ? parseInt(a.get("content-length"), 10) : null
        },
        i = function(a) {
            return a ? a.get("x-fb-fna-hit") : null
        },
        j = function(a) {
            return a ? a.get("x-fb-edge-hit") : null
        },
        k = function(a) {
            return a ? a.get("x-fb-origin-hit") : null
        },
        l = function(a) {
            return a ? parseInt(a.get("x-fb-dynamic-latest-segment-id"), 10) : null
        },
        m = function(a, b) {
            b = d("oz-player/utils/OzResourceTimingUtils").getLatestResourceTimingEntry(b);
            b && a.setTimeToFirstByte(Math.round(b.responseStart - b.startTime)).setTimeToLastByte(Math.round(b.responseEnd - b.startTime)).setTimeToRequestStart(Math.round(b.requestStart - b.startTime))
        };
    a = function(a, b, d, e, f, g, n) {
        e.length && a.setSegmentCount(e.length), b != null && b !== "" && m(a, String(b)), a.setResource(b != null && b !== "" ? b : null).setInitiator(d ? "prefetch" : "fetch").setTimeToRequestSent(Math.round(Math.floor(f))).setLiveheadSeqNumHeader(l(n == null ? void 0 : n.headers)).setContentLengthHeader(h(n == null ? void 0 : n.headers)).setEdgeHitHeader(j(n == null ? void 0 : n.headers)).setOriginHitHeader(k(n == null ? void 0 : n.headers)).setFNAHitHeader(i(n == null ? void 0 : n.headers)).setResponseTimeMsHeader(c("oz-player/shims/OzNetworkDiagnostics").getResponseTimeMs(n == null ? void 0 : n.headers)).setUserInfo({
            segmentPTSHeader: String(c("oz-player/shims/OzNetworkDiagnostics").getDvlSegmentPTS(n == null ? void 0 : n.headers))
        }).setCode(n == null ? void 0 : n.status).setLength(g)
    };
    b = function(a, b, d, e, f, g, i) {
        b != null && b !== "" && m(a, String(b)), a.setResource(b != null && b !== "" ? b : null).setLiveheadSeqNumHeader(l(e == null ? void 0 : e.headers)).setContentLengthHeader(h(e == null ? void 0 : e.headers)).setEdgeHitHeader(j(e == null ? void 0 : e.headers)).setOriginHitHeader(k(e == null ? void 0 : e.headers)).setResponseTimeMsHeader(c("oz-player/shims/OzNetworkDiagnostics").getResponseTimeMs(e == null ? void 0 : e.headers)).setCode(e == null ? void 0 : e.status).setLength(d).setClientTimeBegin(f).setClientTimeDuration(g - f).setClientTimeEnd(g).setUserInfo(i != null && i > 0 ? {
            chunkSize: String(i)
        } : null)
    };
    g.setPerformanceLoggingAttributes = m;
    g.setFetchStreamLoggingAttributes = a;
    g.setBandwidthSampledLoggingAttributes = b
}), 98);
__d("oz-player/networks/OzNetworkManager", ["oz-player/loggings/OzLoggingUtils", "oz-player/networks/OzNetworkRequestStream", "oz-player/networks/OzPausableRangeStream", "oz-player/networks/RequestParamCreator", "oz-player/networks/getOzSegmentStreamableRange", "oz-player/shims/OzStreams", "oz-player/shims/OzURI", "oz-player/shims/ozvariant", "oz-player/utils/OzNetworkRequestLoggingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$9 = null;
            var b = a.config,
                d = a.prefetchCache,
                e = a.networkRequestStreamHandlers,
                f = a.getOverrideOzRequestImplementation,
                g = a.getShouldIncludeCredentials,
                h = a.getCustomRequestParametersForURI,
                i = a.networkRequestStreamRetryHandler,
                j = a.setCustomFetchStreamLoggingAttributes,
                k = a.dynamicVideoLibrary,
                l = a.configureCustomRequestParametersForSegment;
            a = a.onResourceTimingBufferFull;
            this.$2 = b;
            this.$7 = g;
            this.$8 = h;
            this.$1 = new(c("oz-player/networks/RequestParamCreator"))(this.$7, this.$8);
            this.$3 = d;
            this.$4 = e;
            this.$5 = i;
            this.$6 = f;
            this.$9 = j;
            this.$10 = k;
            this.$11 = l;
            this.$12 = a
        }
        var b = a.prototype;
        b.destroy = function() {};
        b.request = function(a, b, d, e, f, g, h) {
            d === void 0 && (d = null);
            e === void 0 && (e = null);
            f === void 0 && (f = null);
            g === void 0 && (g = null);
            h === void 0 && (h = null);
            a.length > 0 || c("oz-player/shims/ozvariant")(0, 212);
            var i = c("oz-player/networks/getOzSegmentStreamableRange")(a) || {
                    startByte: 0,
                    endByte: null
                },
                j = this.$6 ? this.$6() : null,
                k = this.$13(a[0]);
            k = new(c("oz-player/networks/OzNetworkRequestStream"))({
                config: this.$2,
                baseUri: k,
                baseUriDecisionTime: null,
                options: e,
                requestParamCreator: this.$1,
                networkRequestStreamHandlers: this.$4,
                overrideOzRequestImplementation: j,
                prefetchCache: this.$3,
                networkRequestStreamRetryHandler: this.$5,
                mediaStreamType: f,
                dataAppendedCallback: g,
                dataAppendedErrorCallback: h
            });
            return this.$14(i, k, b, d, a)
        };
        b.createPausableStream = function(a, b, d, e, f, g) {
            f === void 0 && (f = null);
            g === void 0 && (g = null);
            a.length > 0 || c("oz-player/shims/ozvariant")(0, 212);
            var h = c("oz-player/networks/getOzSegmentStreamableRange")(a) || {
                    startByte: 0,
                    endByte: null
                },
                i = null,
                j = this.$2.getNumber("network_seg_timeout_ms");
            j > 0 && (i = {
                networkTimeoutMs: j
            });
            j = this.$6 ? this.$6() : null;
            var k = new(c("oz-player/networks/OzNetworkRequestStream"))({
                config: this.$2,
                baseUri: this.$13(a[0]),
                baseUriDecisionTime: a[0].getOptions().getSegmentNumDecisionTime(),
                options: i,
                requestParamCreator: this.$1,
                networkRequestStreamHandlers: this.$4,
                overrideOzRequestImplementation: j,
                prefetchCache: this.$3,
                networkRequestStreamRetryHandler: this.$5,
                dynamicVideoLibrary: this.$10,
                mediaStreamType: e,
                dataAppendedCallback: f,
                dataAppendedErrorCallback: g
            });
            return {
                pausableStream: this.$15(h, k, b || null, d),
                loggingPayloads: {
                    getRequestUrl: function() {
                        return k.getLastRequestUrl() || null
                    },
                    isPrefetch: function() {
                        return k.retrievedFromCache()
                    },
                    segments: a,
                    getResponse: function() {
                        return k.getLastResponse()
                    }
                }
            }
        };
        b.requestRawUrl = function(a, b, d) {
            d === void 0 && (d = null);
            var e = this.$6 ? this.$6() : null;
            a = new(c("oz-player/networks/OzNetworkRequestStream"))({
                config: this.$2,
                baseUri: new(c("oz-player/shims/OzURI"))(a),
                baseUriDecisionTime: null,
                options: b,
                requestParamCreator: this.$1,
                networkRequestStreamHandlers: this.$4,
                overrideOzRequestImplementation: e,
                prefetchCache: this.$3,
                networkRequestStreamRetryHandler: this.$5,
                dynamicVideoLibrary: this.$10,
                mediaStreamType: null,
                dataAppendedCallback: null,
                dataAppendedErrorCallback: null
            });
            b = {
                startByte: 0,
                endByte: null
            };
            return this.$14(b, a, [], d)
        };
        b.$15 = function(a, b, e, f) {
            b = b;
            if (e != null)
                for (var g = 0; g < e.length; g++) {
                    var h = e[g];
                    b = h(this.$2, b, f, this.$12)
                }
            return new(c("oz-player/networks/OzPausableRangeStream"))(d("oz-player/shims/OzStreams").OzReadableStream, d("oz-player/shims/OzStreams").OzWritableStream, a, b, {
                fixStreamingUndefinedEndByte: !0,
                enablePausableStreamResumeFromStartDangerously: !0,
                fixPausePreReadableStream: !0,
                throwErrorWhenAborted: !0
            })
        };
        b.$14 = function(a, b, c, e, f) {
            var g = this;
            f === void 0 && (f = []);
            var h = this.$15(a, b, c, e);
            a = h.startStream();
            var i = this.$16(a);
            if (e) {
                c = function(a) {
                    d("oz-player/utils/OzNetworkRequestLoggingUtils").setFetchStreamLoggingAttributes(a, b.getLastRequestUrl(), b.retrievedFromCache(), f, 0, h.getBytesStreamed(), b.getLastResponse());
                    var c = g.$9;
                    c && c(a, b.getLastRequestUrl(), b.getLastResponse())
                };
                d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(i, e, "fetch_stream", c, c)
            }
            return {
                getStream: function() {
                    return h.getStream()
                },
                cancel: function() {
                    return h.pauseStream()
                },
                getStatusChangePromise: function() {
                    return i
                }
            }
        };
        b.$16 = function(a) {
            return a.then(function(a) {
                a = a.statusPromise;
                return a.then(function(a) {
                    return "done"
                })
            })
        };
        b.$13 = function(a) {
            var b = this.$11,
                d = new(c("oz-player/shims/OzURI"))(a.getURI().toString());
            if (b) {
                var e = b(a);
                e && Object.keys(e).forEach(function(a) {
                    var b = e[a];
                    d.addQueryData(a, b)
                })
            }
            return d
        };
        a.getStreamableSegmentsRange = function(a) {
            if (!a.length) return [];
            return !c("oz-player/networks/getOzSegmentStreamableRange")(a) ? [a[0]] : a.slice(0)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/manifests/Mpd", ["oz-player/shims/OzEventEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f, g, h, i) {
            var j;
            j = a.call(this) || this;
            j.$Mpd9 = !1;
            j.$Mpd1 = b;
            j.$Mpd5 = g;
            j.$Mpd2 = c;
            j.$Mpd3 = d;
            j.$Mpd4 = e;
            j.$Mpd6 = f;
            j.$Mpd7 = h;
            j.$Mpd8 = i;
            return j
        }
        var c = b.prototype;
        c.markRefreshed = function() {
            this.$Mpd10 = Date.now()
        };
        c.getRefreshDate = function() {
            return this.$Mpd10
        };
        c.updateLocation = function(a) {
            this.$Mpd6 = a, this.$Mpd9 = !0, this.emit("locationUpdated")
        };
        c.getLocation = function() {
            return this.$Mpd6
        };
        c.getMinimumUpdatePeriod = function() {
            return this.$Mpd5
        };
        c.getVideoRepresentations = function() {
            return this.$Mpd2
        };
        c.getAudioRepresentations = function() {
            return this.$Mpd3
        };
        c.getApplicationRepresentations = function() {
            return this.$Mpd4
        };
        c.getCustomField = function(a) {
            var b = this.$Mpd7.get(a);
            if (!b) throw new Error("Custom parser not specified for field " + a);
            try {
                return b(this.$Mpd1)
            } catch (a) {
                return null
            }
        };
        c.isStaticMpd = function() {
            return this.$Mpd8
        };
        c.updateWith = function(a) {
            this.$Mpd9 && (this.$Mpd9 = !1, this.$Mpd2.splice(0, this.$Mpd2.length), this.$Mpd3.splice(0, this.$Mpd3.length), this.$Mpd4.splice(0, this.$Mpd4.length)), this.$Mpd1 = a.$Mpd1, this.$Mpd11(this.$Mpd2, a.getVideoRepresentations()), this.$Mpd11(this.$Mpd3, a.getAudioRepresentations()), this.$Mpd11(this.$Mpd4, a.getApplicationRepresentations()), this.$Mpd8 = a.isStaticMpd(), this.$Mpd5 = a.getMinimumUpdatePeriod(), this.emit("updated")
        };
        c.blockTimeRange = function(a) {
            this.$Mpd2.forEach(function(b) {
                return b.blockTimeRange(a)
            }), this.$Mpd3.forEach(function(b) {
                return b.blockTimeRange(a)
            }), this.$Mpd4.forEach(function(b) {
                return b.blockTimeRange(a)
            })
        };
        c.unblockTimeRange = function() {
            this.blockTimeRange({
                startTime: 0,
                endTime: 0
            })
        };
        c.$Mpd11 = function(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = !1;
                for (var f = 0; f < a.length; f++) {
                    var g = a[f];
                    if (d.getID() === g.getID()) {
                        g.updateWith(d);
                        e = !0;
                        break
                    }
                }
                e || a.push(d)
            }
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/manifests/OzApplicationRepresentation", ["oz-player/manifests/OzRepresentationBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(c("oz-player/manifests/OzRepresentationBase"));
    g["default"] = a
}), 98);
__d("oz-player/parsers/OzSegmentTemplateParser", ["oz-player/manifests/OzSegmentOptions", "oz-player/parsers/OzDefaultSegmentTimelineParser", "oz-player/shims/OzURI", "oz-player/utils/OzUrlHelper"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        function a(a, b) {
            this.$3 = new(c("oz-player/manifests/OzSegmentOptions"))(), this.$2 = a, this.$1 = b
        }
        var b = a.prototype;
        b.getData = function() {
            return this.$1
        };
        b.getTimeRange = function() {
            return {
                startTime: 0,
                endTime: 0
            }
        };
        b.getByteRange = function() {
            return null
        };
        b.getURI = function() {
            return this.$2
        };
        b.getSequenceNumber = function() {
            return null
        };
        b.getOptions = function() {
            return this.$3
        };
        return a
    }();
    a = function() {
        function a(a, b, d, e, f) {
            this.$2 = d, this.$1 = b, this.$3 = a, e ? this.$4 = e : this.$4 = new(c("oz-player/parsers/OzDefaultSegmentTimelineParser"))(), this.$5 = f
        }
        var b = a.prototype;
        b.parseInitializationSegment = function() {
            var a = d("oz-player/utils/OzUrlHelper").joinUrlPaths(this.$2.baseUrl, this.$1.$.initialization);
            return new h(new(c("oz-player/shims/OzURI"))(a), this.$5)
        };
        b.parseSegmentsContainer = function() {
            return this.$4.parseSegmentsContainer(this.$3, this.$2, this.$1)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/manifests/OzZeroTimeRangeSegment", ["oz-player/manifests/OzSegmentOptions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, d) {
            this.$4 = new(c("oz-player/manifests/OzSegmentOptions"))(), this.$1 = a, this.$2 = b, this.$3 = d
        }
        var b = a.prototype;
        b.getData = function() {
            return null
        };
        b.getURI = function() {
            return this.$1
        };
        b.getTimeRange = function() {
            return {
                startTime: 0,
                endTime: 0
            }
        };
        b.getByteRange = function() {
            return {
                startByte: this.$2,
                endByte: this.$3
            }
        };
        b.getSequenceNumber = function() {
            return null
        };
        b.getOptions = function() {
            return this.$4
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/configs/MockOzConfig", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            a === void 0 && (a = {}), this.$1 = a
        }
        var b = a.prototype;
        b.getBool = function(a, b) {
            return typeof this.$1[a] === "boolean" ? this.$1[a] : b
        };
        b.getNumber = function(a, b) {
            return typeof this.$1[a] === "number" ? this.$1[a] : b
        };
        b.getString = function(a, b) {
            return typeof this.$1[a] === "string" ? this.$1[a] : b
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/shims/www/getOzGlobalConfigSourceWWW", ["oz-player/configs/MockOzConfig", "qex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
        allow_subsequent_prefetch: (b = c("qex")._("2085")) != null ? b : !0,
        bandwidth_header_expire_threshold: (d = c("qex")._("234")) != null ? d : 0,
        clear_prefetch_on_unload: (e = c("qex")._("2086")) != null ? e : !1,
        systemic_risk_abr_prefetch_initial_risk_factor: (f = c("qex")._("2087")) != null ? f : 3,
        prefetch_retention_duration_ms: (b = c("qex")._("2088")) != null ? b : 0,
        prefetch_resolution_threshold: (d = c("qex")._("2089")) != null ? d : 1e3,
        systemic_risk_abr_prefetch_low_mos_resolution: (e = c("qex")._("2090")) != null ? e : 260,
        systemic_risk_abr_min_watchable_mos: (f = c("qex")._("2091")) != null ? f : 0,
        systemic_risk_abr_parse_prefetch_mos: (b = c("qex")._("2092")) != null ? b : !1
    };

    function a() {
        return new(c("oz-player/configs/MockOzConfig"))(h)
    }
    g["default"] = a
}), 98);
__d("oz-player/shims/getOzGlobalConfigSource", ["oz-player/shims/www/getOzGlobalConfigSourceWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/getOzGlobalConfigSourceWWW")
}), 98);
__d("oz-player/configs/OzGlobalConfig", ["oz-player/shims/getOzGlobalConfigSource"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("oz-player/shims/getOzGlobalConfigSource")();
    a = {
        getBool: function(a, b) {
            return h ? h.getBool(a, b) : b
        },
        getNumber: function(a, b) {
            return h ? h.getNumber(a, b) : b
        },
        getString: function(a, b) {
            return h ? h.getString(a, b) : b
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("oz-player/shims/www/OzCacheStorageWWW", ["WebStorage"], (function(a, b, c, d, e, f, g) {
    var h, i = "_oz_",
        j = "_@_",
        k = (h || c("WebStorage")).getLocalStorage();
    a = {
        get: function(a) {
            if (k == null) return null;
            a = k.getItem(i + a);
            typeof a === "string" && a.startsWith(j) && (a = a.substring(j.length));
            return a
        },
        set: function(a, b) {
            k != null && k.setItem(i + a, b)
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("oz-player/shims/OzCacheStorage", ["oz-player/shims/www/OzCacheStorageWWW"], (function(a, b, c, d, e, f, g) {
    g["default"] = c("oz-player/shims/www/OzCacheStorageWWW")
}), 98);
__d("oz-player/shims/www/OzWindowEventsWWW", ["cr:925100"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        onUnload: function(a) {
            b("cr:925100").onUnload(a)
        }
    };
    c = a;
    g["default"] = c
}), 98);
__d("oz-player/shims/OzWindowEvents", ["oz-player/shims/www/OzWindowEventsWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzWindowEventsWWW")
}), 98);
__d("oz-player/networks/OzBandwidthCache", ["oz-player/configs/OzGlobalConfig", "oz-player/shims/OzCacheStorage", "oz-player/shims/OzWindowEvents"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b, d, e) {
            var f = this;
            this.$1 = a;
            this.$2 = b;
            this.$3 = d;
            this.$4 = e;
            c("oz-player/shims/OzWindowEvents").onUnload(function() {
                f.updateCache()
            })
        }
        var b = a.prototype;
        b.getCachedBandwidth = function() {
            var a = c("oz-player/shims/OzCacheStorage").get(this.$1);
            if (a == null) return null;
            a = Number(a);
            return isNaN(a) ? null : a
        };
        b.getCachedSamples = function() {
            if (this.$5 != null) return this.$5;
            var b = c("oz-player/shims/OzCacheStorage").get(this.$2);
            if (b == null) return null;
            this.$5 = a.deserialize(b);
            return this.$5
        };
        b.updateCache = function() {
            c("oz-player/shims/OzCacheStorage").set(this.$1, String(this.$3()));
            var b = c("oz-player/configs/OzGlobalConfig").getNumber("bandwidth_ttfb_samples_to_save", 5);
            if (b > 0) {
                var d = this.$4(),
                    e = d.bandwidth.length,
                    f = d.navigationTiming.length;
                e = {
                    bandwidth: d.bandwidth.slice(Math.max(0, e - b), e),
                    navigationTiming: d.navigationTiming.slice(Math.max(0, f - b), f)
                };
                c("oz-player/shims/OzCacheStorage").set(this.$2, a.serialize(e))
            }
        };
        a.deserialize = function(a) {
            var b = {};
            try {
                b = JSON.parse(a)
            } catch (a) {}
            return typeof b === "object" && Array.isArray(b.b) && Array.isArray(b.t) ? {
                bandwidth: b.b.reduce(function(a, b) {
                    typeof b.b === "number" && typeof b.t === "number" && typeof b.s === "number" && a.push({
                        bytes: b.b,
                        timeInMs: b.t,
                        timestamp: b.s
                    });
                    return a
                }, []),
                navigationTiming: b.t.reduce(function(a, b) {
                    typeof b.t === "number" && typeof b.s === "number" && (typeof b.l === "number" && typeof b.b === "number" ? a.push({
                        timeToFirstByteMs: b.t,
                        timeToLastByteMs: b.l,
                        bytes: b.b,
                        timestamp: b.s
                    }) : a.push({
                        timeToFirstByteMs: b.t,
                        timeToLastByteMs: 0,
                        bytes: 0,
                        timestamp: b.s
                    }));
                    return a
                }, [])
            } : null
        };
        a.serialize = function(a) {
            a = {
                b: a.bandwidth.map(function(a) {
                    return {
                        b: a.bytes,
                        s: a.timestamp,
                        t: a.timeInMs
                    }
                }),
                t: a.navigationTiming.map(function(a) {
                    return {
                        s: a.timestamp,
                        t: a.timeToFirstByteMs,
                        l: a.timeToLastByteMs,
                        b: a.bytes
                    }
                })
            };
            return JSON.stringify(a)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/networks/OzBandwidthUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = .3,
        h = 3,
        i = 50,
        j = 10,
        k = 5,
        l = new Map([
            ["51", .03],
            ["52", .06],
            ["53", .08],
            ["54", .1],
            ["55", .13],
            ["56", .16],
            ["57", .18],
            ["58", .2],
            ["59", .23],
            ["60", .26],
            ["61", .28],
            ["62", .31],
            ["63", .33],
            ["64", .36],
            ["65", .39],
            ["66", .42],
            ["67", .44],
            ["68", .47],
            ["69", .5],
            ["70", .53],
            ["71", .56],
            ["72", .59],
            ["73", .62],
            ["74", .65],
            ["75", .68],
            ["76", .71],
            ["77", .74],
            ["78", .78],
            ["79", .81],
            ["80", .85],
            ["81", .88],
            ["82", .92],
            ["83", .96],
            ["84", 1],
            ["85", 1.04],
            ["86", 1.08],
            ["87", 1.13],
            ["88", 1.18],
            ["89", 1.23],
            ["90", 1.28],
            ["91", 1.34],
            ["92", 1.41],
            ["93", 1.48],
            ["94", 1.56],
            ["95", 1.65],
            ["96", 1.76],
            ["97", 1.89],
            ["98", 2.06],
            ["99", 2.33]
        ]);

    function a(a, b, c, d) {
        if (a.length === 0) return null;
        var e = n(a);
        a = q(a, b);
        b = a.average;
        a = a.totalWeight;
        var f = j,
            g = k,
            h = i;
        if (c.length > 0) {
            f = o(c.map(function(a) {
                return a.timeToFirstByteMs
            }));
            c = p(c.map(function(a) {
                return {
                    value: a.timeToFirstByteMs,
                    weight: 1
                }
            }), d);
            h = c.average;
            g = c.totalWeight
        }
        return {
            bandwidthEstimate: b,
            bandwidthStandardDeviation: e,
            bandwidthTotalWeight: a,
            timeToFirstByteMsEstimate: h,
            timeToFirstByteMsStandardDeviation: f,
            timeToFirstByteMsTotalWeight: g
        }
    }

    function m(a) {
        var b = 0;
        for (var c = 0; c < a.length; c++) b += a[c].bytes * 8e3 / a[c].timeInMs;
        return b / a.length
    }

    function n(a) {
        return o(a.map(function(a) {
            return a.bytes * 8e3 / a.timeInMs
        }))
    }

    function o(a) {
        var b = a.reduce(function(a, b) {
                return a + b
            }, 0) / a.length,
            c = 0;
        for (var d = 0; d < a.length; d++) c += Math.pow(a[d] - b, 2);
        return Math.round(Math.sqrt(c / a.length))
    }

    function p(a, b) {
        b = Math.exp(Math.log(.5) / b);
        var c = 0,
            d = 0;
        for (var e = 0; e < a.length; e++) {
            var f = Math.pow(b, a[e].weight);
            c = a[e].value * (1 - f) + c * f;
            d += a[e].weight
        }
        f = Math.round(c / (1 - Math.pow(b, d)));
        return {
            average: f,
            totalWeight: d
        }
    }

    function q(a, b) {
        return p(a.map(function(a) {
            return {
                value: a.bytes * 8e3 / a.timeInMs,
                weight: a.timeInMs / 1e3
            }
        }), b)
    }

    function r(a, b) {
        var c = m(a),
            d = [];
        for (var e = 0; e < a.length; e++) Math.abs(c - a[e].bytes * 8e3 / a[e].timeInMs) < b && d.push(a[e]);
        return d
    }

    function b(a, b, c, d) {
        var e = n(a);
        a = r(a, e * c);
        c = q(a, b);
        return c.average - e * d
    }

    function c(a, b, c) {
        c = l.get(String(c));
        var d = a.bandwidthEstimate,
            e = a.bandwidthStandardDeviation,
            f = a.timeToFirstByteMsStandardDeviation;
        a = a.timeToFirstByteMsEstimate;
        var i = 1,
            j = 1;
        c != null && (i = 1 - c * e / d, i = isNaN(i) ? 1 : Math.max(i, g), j = 1 + c * f / a, j = isNaN(j) ? 1 : j, j = Math.min(j, h));
        return 8e3 * b / (d * i) + a * j
    }
    f.getBandwidthDiagnostics = a;
    f.getMeanBandwidth = m;
    f.getStandardDeviationOfBandwidth = n;
    f.getExponentiallyWeightedMovingAverage = p;
    f.getExponentiallyWeightedMovingAverageOfBandwidth = q;
    f.getBandwidthSamplesWithinRangeOfMean = r;
    f.getBandwidthEstimate = b;
    f.getEstimatedRequestTimeToLastByteMs = c
}), 66);
__d("oz-player/networks/OzNetworkSamples", ["oz-player/configs/OzGlobalConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = !1, this.$2 = [], this.$3 = [], this.$4 = null, this.$5 = null, this.$6 = null
        }
        var b = a.prototype;
        b.setBandwidthCache = function(a) {
            this.$4 = a
        };
        b.getRecentBandwidthSamples = function() {
            return this.$7().recentBandwidthSamples
        };
        b.getRecentNavigationTimingSamples = function() {
            return this.$7().recentNavigationTimingSamples
        };
        b.setBandwidthEstimateFromHeaders = function(a) {
            this.$5 = a, this.$6 = Date.now()
        };
        b.getBandwidthEstimateFromHeaders = function() {
            return !this.hasRecentBandwidthEstimateFromHeader() ? null : this.$5
        };
        b.hasRecentBandwidthEstimateFromHeader = function() {
            var a = c("oz-player/configs/OzGlobalConfig").getNumber("bandwidth_header_expire_threshold", 0),
                b = this.$6;
            return a > 0 && b != null && Date.now() - b < a
        };
        b.$7 = function() {
            if (!this.$1 && this.$4 != null && c("oz-player/configs/OzGlobalConfig").getNumber("bandwidth_ttfb_samples_to_save", 5) > 0) {
                this.$1 = !0;
                var a = this.$4.getCachedSamples();
                a != null && (this.$2 = a.bandwidth, this.$3 = a.navigationTiming)
            }
            return {
                recentBandwidthSamples: this.$2,
                recentNavigationTimingSamples: this.$3
            }
        };
        b.addBandwidthSample = function(a) {
            this.$2.push(babelHelpers["extends"]({}, a, {
                timestamp: Date.now()
            })), this.$2.length > c("oz-player/configs/OzGlobalConfig").getNumber("max_bandwidth_sample_count", 30) && this.$2.shift()
        };
        b.addNavigationTimingSample = function(a) {
            this.$3.push(babelHelpers["extends"]({}, a, {
                timestamp: Date.now()
            })), this.$3.length > c("oz-player/configs/OzGlobalConfig").getNumber("max_bandwidth_sample_count", 30) && this.$3.shift()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/networks/OzBandwidthEstimatorBase", ["oz-player/configs/OzGlobalConfig", "oz-player/networks/OzBandwidthCache", "oz-player/networks/OzBandwidthUtils", "oz-player/networks/OzNetworkSamples", "oz-player/shims/OzEventEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e6,
        i = "bandwidthEstimate",
        j = "bandwidthAndTTFBSamples";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b;
            b = a.call(this) || this;
            b.$OzBandwidthEstimatorBase2 = new(c("oz-player/networks/OzNetworkSamples"))();
            b.$OzBandwidthEstimatorBase1 = new(c("oz-player/networks/OzBandwidthCache"))(i, j, function() {
                return b.getAdjustedBandwidth(c("oz-player/configs/OzGlobalConfig"))
            }, function() {
                return {
                    bandwidth: b.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples(),
                    navigationTiming: b.$OzBandwidthEstimatorBase2.getRecentNavigationTimingSamples()
                }
            });
            b.$OzBandwidthEstimatorBase2.setBandwidthCache(b.$OzBandwidthEstimatorBase1);
            return b
        }
        var e = b.prototype;
        e.getNetworkSamples = function() {
            return this.$OzBandwidthEstimatorBase2
        };
        e.getStandardDeviationOfBandwidth = function() {
            return d("oz-player/networks/OzBandwidthUtils").getStandardDeviationOfBandwidth(this.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples())
        };
        e.getSampleCount = function() {
            return this.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples().length
        };
        e.getAdjustedBandwidth = function(a) {
            return this.$OzBandwidthEstimatorBase2.getRecentBandwidthSamples().length === 0 ? this.getDefaultEstimate(a) : this.$OzBandwidthEstimatorBase3(a)
        };
        e.getBandwidthDiagnostics = function(a) {
            throw new Error("must be implementd by subclasses")
        };
        e.getBandwidth = function(a) {
            throw new Error("must be implementd by subclasses")
        };
        e.getBandwidthDiagnosticsFromHeaders = function(a) {
            a = this.getBandwidthDiagnostics(a);
            if (a == null) return null;
            var b = this.$OzBandwidthEstimatorBase2.getBandwidthEstimateFromHeaders();
            if (b == null) return a;
            var c, d;
            if (a != null) c = a.timeToFirstByteMsEstimate, d = a.timeToFirstByteMsStandardDeviation, a = a.timeToFirstByteMsTotalWeight;
            else return null;
            return {
                bandwidthEstimate: b.meanEstimate,
                bandwidthStandardDeviation: 1,
                bandwidthTotalWeight: 1,
                timeToFirstByteMsEstimate: c,
                timeToFirstByteMsStandardDeviation: d,
                timeToFirstByteMsTotalWeight: a
            }
        };
        e.getDefaultEstimate = function(a) {
            var b = this.$OzBandwidthEstimatorBase1.getCachedBandwidth();
            if (typeof b === "number" && b > 0) return b;
            b = ((b = (b = window.navigator) == null ? void 0 : (b = b.connection) == null ? void 0 : b.downlink) != null ? b : 0) * 1e6;
            b = b > 0 ? b : a.getNumber("default_bandwidth_estimate", h);
            return b
        };
        e.$OzBandwidthEstimatorBase3 = function(a) {
            return this.getBandwidth(a)
        };
        e.addBandwidthSample = function(a, b) {
            this.$OzBandwidthEstimatorBase2.addBandwidthSample({
                bytes: a,
                timeInMs: b
            }), this.emit("bandwidth_sampled")
        };
        e.addNavigationTimingSample = function(a, b, c) {
            a = {
                timeToFirstByteMs: a,
                timeToLastByteMs: b,
                bytes: c
            };
            this.enqueueNavigationTimingSample(a);
            this.$OzBandwidthEstimatorBase2.addNavigationTimingSample(a)
        };
        e.enqueueNavigationTimingSample = function(a) {};
        e.setBandwidthEstimateFromHeaders = function(a) {
            this.$OzBandwidthEstimatorBase2.setBandwidthEstimateFromHeaders(a)
        };
        e.hasRecentBandwidthEstimateFromHeader = function() {
            return this.getNetworkSamples().hasRecentBandwidthEstimateFromHeader()
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/networks/OzBandwidthEstimator", ["oz-player/networks/OzBandwidthEstimatorBase", "oz-player/networks/OzBandwidthUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var c = b.prototype;
        c.getBandwidthDiagnostics = function(a) {
            return d("oz-player/networks/OzBandwidthUtils").getBandwidthDiagnostics(this.getNetworkSamples().getRecentBandwidthSamples(), a.getNumber("bandwidth_estimator_half_life", 6), this.getNetworkSamples().getRecentNavigationTimingSamples(), a.getNumber("time_to_first_byte_estimate_half_life_ms", 500))
        };
        c.getBandwidth = function(a) {
            var b = d("oz-player/networks/OzBandwidthUtils").getBandwidthEstimate(this.getNetworkSamples().getRecentBandwidthSamples(), a.getNumber("bandwidth_estimator_half_life", 6), a.getNumber("bandwidth_estimator_outlier_exclusion_factor", 50), a.getNumber("bandwidth_estimator_std_dev_penalty_factor", 0));
            return b > 0 ? b : this.getDefaultEstimate(a)
        };
        return b
    }(c("oz-player/networks/OzBandwidthEstimatorBase"));
    b = new a();
    e = b;
    g["default"] = e
}), 98);
__d("oz-player/networks/OzNetworkRequestStreamBandwidthReporter", ["oz-player/networks/OzTransformStream", "oz-player/shims/OzNetworkDiagnostics", "oz-player/utils/OzNetworkRequestLoggingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = function() {
        function b(b) {
            var d = this;
            this.$8 = Date.now();
            this.$9 = Date.now();
            this.$10 = 0;
            this.$11 = 0;
            this.$12 = function() {};
            this.$13 = function() {};
            this.$14 = function() {};
            this.$16 = new(c("oz-player/networks/OzTransformStream"))();
            this.$19 = !1;
            this.$20 = !1;
            this.$21 = null;
            this.$22 = function(a) {
                d.$25();
                a.length != null && (d.$11 += a.length);
                d.$26();
                if (d.$18) return;
                d.$27()
            };
            this.$23 = function() {
                if (d.$21 != null && d.$21 > 0) return;
                var b = Date.now() - d.$8,
                    c = d.$1.getLastPerformanceEntry();
                c && d.$13(c.responseStart - c.requestStart, c.responseEnd - c.requestStart, d.$11);
                !c && a.__isresourcetimingbufferfull && d.$15 && d.$15();
                d.$3 > 0 && b > 0 && d.$10 === 0 && d.$11 >= d.$3 && d.$28(d.$11, b)
            };
            var e = b.stream,
                f = b.loggerProvider,
                g = b.byteCountPerSample,
                h = b.minimumBytesToSampleOnClose,
                i = b.minimumSampleDuration,
                j = b.maximumSampleBandwidth,
                k = b.useResponseTimeMs,
                l = b.responseTimeHandicapMs,
                m = b.ignoreOnStreamWriteSamples;
            b = b.onResourceTimingBufferFull;
            this.$1 = e;
            this.$17 = f;
            this.$2 = g;
            this.$3 = h;
            this.$4 = i;
            this.$5 = j;
            this.$6 = k;
            this.$7 = l;
            this.$18 = m;
            this.$16.addListener("writableWrite", this.$22);
            this.$16.addListener("writableClose", this.$23);
            this.$15 = b
        }
        var e = b.prototype;
        e.getTransformStream = function() {
            return this.$16
        };
        e.onBandwidthSample = function(a) {
            this.$12 = a
        };
        e.onNavigationTimingSample = function(a) {
            this.$13 = a
        };
        e.onEstimateFromHeaders = function(a) {
            this.$14 = a
        };
        e.$24 = function(a, b, c) {
            b = b - c;
            c = this.$17 ? this.$17.getOperationLogger("bandwidth_sampled") : null;
            if (c) {
                var e = Date.now(),
                    f = e - b;
                d("oz-player/utils/OzNetworkRequestLoggingUtils").setBandwidthSampledLoggingAttributes(c, this.$1.getLastRequestUrl(), a, this.$1.getLastResponse(), f, e, this.$21);
                c.log()
            }
            this.$12(a, b)
        };
        e.$29 = function(a, b, c) {
            if (b - c <= 0) return !0;
            c = a * 8 / (b / 1e3);
            return b < this.$4 && c > this.$5
        };
        e.$28 = function(a, b) {
            var d = this.$1.getLastResponse();
            d = this.$6 ? c("oz-player/shims/OzNetworkDiagnostics").getResponseTimeMs(d == null ? void 0 : d.headers) || 0 : 0;
            this.$29(a, b, d) || this.$24(a, b, Math.max(d - this.$7, 0))
        };
        e.$25 = function() {
            var a;
            a = (a = this.$1.getLastResponse()) == null ? void 0 : a.headers;
            if (this.$20 || a == null) return;
            this.$20 = !0;
            a = c("oz-player/shims/OzNetworkDiagnostics").getBandwidthMeanEstimate(a);
            a != null && this.$14(a)
        };
        e.$26 = function() {
            if (this.$19) return;
            if (this.$21 == null) {
                var a = this.$1.getLastResponse();
                this.$21 = c("oz-player/shims/OzNetworkDiagnostics").getUsableResponseSizeForBandwidthEstimation(a == null ? void 0 : a.headers) || 0
            }
            this.$21 != null && this.$21 > 0 && this.$11 >= this.$21 && (this.$19 = !0, this.$28(this.$11, Date.now() - this.$9))
        };
        e.$27 = function() {
            var a = Date.now(),
                b = a - this.$8;
            this.$2 > 0 && this.$11 >= this.$10 + this.$2 && !this.$29(this.$11, b, 0) && (this.$24(this.$11 - this.$10, b, 0), this.$8 = a, this.$10 = this.$11)
        };
        return b
    }();
    g["default"] = b
}), 98);
__d("oz-player/networks/bandwidth/pipeStreamThroughBandwidthEstimator", ["oz-player/networks/OzNetworkRequestStreamBandwidthReporter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 2e5;

    function a(a, b, d, e, f) {
        return {
            startStream: function(g) {
                var i = new(c("oz-player/networks/OzNetworkRequestStreamBandwidthReporter"))({
                    stream: b,
                    loggerProvider: d,
                    byteCountPerSample: a.getNumber("byte_count_per_sample", h),
                    minimumBytesToSampleOnClose: a.getNumber("minimum_bytes_to_sample_on_close", 25e3),
                    minimumSampleDuration: a.getNumber("minimum_bandwidth_sample_duration", 10),
                    maximumSampleBandwidth: a.getNumber("maximum_bandwidth_sample_bandwidth", 1e8),
                    useResponseTimeMs: a.getBool("bandwidth_use_response_time_adjustment", !1),
                    responseTimeHandicapMs: a.getNumber("bandwidth_response_time_handicap", 0),
                    ignoreOnStreamWriteSamples: a.getBool("bandwidth_ignore_on_stream_write_samples", !1),
                    onResourceTimingBufferFull: f
                });
                i.onBandwidthSample(function(a, b) {
                    e.addBandwidthSample(a, b)
                });
                i.onNavigationTimingSample(function(b, c, d) {
                    var f = a.getNumber("time_to_first_byte_ignore_above_threshold_ms", 0);
                    (f === 0 || b <= f) && e.addNavigationTimingSample(b, c, d)
                });
                i.onEstimateFromHeaders(function(a) {
                    e.setBandwidthEstimateFromHeaders({
                        meanEstimate: a
                    })
                });
                return b.startStream(g).then(function(a) {
                    return b.retrievedFromCache() ? a : a.pipeThrough(i.getTransformStream())
                })
            }
        }
    }
    g.pipeStreamThroughBandwidthEstimator = a
}), 98);
__d("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter", ["oz-player/networks/OzBandwidthEstimator", "oz-player/networks/OzNetworkRequestStream", "oz-player/networks/bandwidth/pipeStreamThroughBandwidthEstimator"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return function(b, e, f, g) {
            var h = a === "video";
            return e instanceof c("oz-player/networks/OzNetworkRequestStream") && h ? d("oz-player/networks/bandwidth/pipeStreamThroughBandwidthEstimator").pipeStreamThroughBandwidthEstimator(b.getLegacyConfig(), e, f, c("oz-player/networks/OzBandwidthEstimator"), g) : e
        }
    }
    g["default"] = a
}), 98);
__d("oz-player/manifests/OzDataSegment", ["oz-player/manifests/OzSegmentOptions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, d, e, f) {
            this.$6 = new(c("oz-player/manifests/OzSegmentOptions"))(), this.$1 = a, this.$2 = b, this.$3 = d, this.$4 = e, this.$5 = f
        }
        var b = a.prototype;
        b.getData = function() {
            return null
        };
        b.getURI = function() {
            return this.$1
        };
        b.getTimeRange = function() {
            return {
                startTime: this.$2,
                endTime: this.$3
            }
        };
        b.getByteRange = function() {
            return {
                startByte: this.$4,
                endByte: this.$5
            }
        };
        b.getSequenceNumber = function() {
            return null
        };
        b.getOptions = function() {
            return this.$6
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/shims/www/OzDataViewReaderWWW", ["DataViewReader"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("DataViewReader")
}), 98);
__d("oz-player/shims/OzDataViewReader", ["oz-player/shims/www/OzDataViewReaderWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzDataViewReaderWWW")
}), 98);
/**
 * License: https://www.facebook.com/legal/license/Vkd8AdLnKqZ/
 */
__d("oz-player/parsers/OzMp4SidxParser", ["oz-player/manifests/OzDataSegment", "oz-player/manifests/OzSegmentOptions", "oz-player/shims/OzDataViewReader"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1936286840;

    function a(a, b, d, e) {
        var f = new(c("oz-player/shims/OzDataViewReader"))(new DataView(e.buffer));
        e = f.readUint32();
        var g = f.readUint32();
        if (g !== h) throw new Error('Invalid box type, expected "sidx".');
        e == 1 && (e = f.readUint64());
        g = f.readUint8();
        f.skip(3);
        f.skip(4);
        var i = f.readUint32();
        if (!i) throw new Error("Invalid timescale.");
        var j;
        g == 0 ? (g = f.readUint32(), j = f.readUint32()) : (g = f.readUint64(), j = f.readUint64());
        f.skip(2);
        var k = f.readUint16(),
            l = g,
            m = d + e + j,
            n = 0,
            o = a.getBool("sidx_parser_memory_optimization"),
            p = [];
        g = function(a) {
            var d = f.readUint32(),
                e = (d & 2147483648) >>> 31;
            d = d & 2147483647;
            var g = f.readUint32();
            f.readUint32();
            if (e == 1) throw new Error("Heirarchical SIDXs are not supported.");
            var h = l / i,
                j = (l + g) / i;
            a === 0 && (n = h);
            var k = m,
                q = k + d - 1,
                r = new(c("oz-player/manifests/OzSegmentOptions"))();
            p.push(o ? new(c("oz-player/manifests/OzDataSegment"))(b, h - n, j - n, k, q) : {
                getData: function() {
                    return null
                },
                getURI: function() {
                    return b
                },
                getTimeRange: function() {
                    return {
                        startTime: h - n,
                        endTime: j - n
                    }
                },
                getByteRange: function() {
                    return {
                        startByte: k,
                        endByte: q
                    }
                },
                getSequenceNumber: function() {
                    return null
                },
                getOptions: function() {
                    return r
                }
            });
            l += g;
            m += d
        };
        for (d = 0; d < k; d++) g(d);
        return p
    }
    g.parse = a
}), 98);
__d("oz-player/parsers/OzSidxSegmentsContainer", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.getSegmentByTime = function(a) {
            var b = this.$1();
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.getTimeRange();
                if (e.startTime <= a && e.endTime > a) return d
            }
            return null
        };
        b.getSegmentAfter = function(a) {
            var b = this.$1(),
                c = b.findIndex(function(b) {
                    return b.getTimeRange().startTime === a.getTimeRange().startTime && b.getTimeRange().endTime === a.getTimeRange().endTime
                });
            return c >= 0 && c + 1 < b.length ? b[c + 1] : null
        };
        b.getPredictedSegmentAfter = function(a) {
            return null
        };
        b.canPredict = function() {
            return !1
        };
        b.canApproximateId = function() {
            return !1
        };
        b.isEndingSegment = function(a) {
            var b = this.$1();
            if (!b || !b.length) return !1;
            b = b[b.length - 1].getTimeRange();
            a = a.getTimeRange();
            return b.startTime === a.startTime && b.endTime === a.endTime
        };
        b.getSegment = function(a) {
            return this.$1()[a] || null
        };
        b.updateWith = function(a) {
            throw new Error("Not implemented: updatedWith")
        };
        b.addUpdateListener = function(a) {
            return this.$2.addListener("segment_updated", a)
        };
        b.getTimeRanges = function() {
            var a = this.$1();
            if (a.length === 0) return [];
            else {
                var b = a[0];
                a = a[a.length - 1];
                return [{
                    startTime: b.getTimeRange().startTime,
                    endTime: a.getTimeRange().endTime
                }]
            }
        };
        b.blockTimeRange = function() {};
        b.getEndingSegment = function() {
            var a = this.$1();
            return a.length > 0 ? a[a.length - 1] : null
        };
        b.getMaxGopSec = function() {
            return null
        };
        return a
    }();
    f["default"] = a
}), 66);
/**
 * License: https://www.facebook.com/legal/license/Vkd8AdLnKqZ/
 */
__d("oz-player/parsers/OzWebmSidxParser", ["oz-player/manifests/OzDataSegment", "oz-player/shims/OzDataViewReader", "oz-player/shims/ozvariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 440786851,
        i = 408125543,
        j = 357149030,
        k = 2807729,
        l = 17545,
        m = 475249515,
        n = 187,
        o = 179,
        p = 183,
        q = 241,
        r = [new Uint8Array([255]), new Uint8Array([127, 255]), new Uint8Array([63, 255, 255]), new Uint8Array([31, 255, 255, 255]), new Uint8Array([15, 255, 255, 255, 255]), new Uint8Array([7, 255, 255, 255, 255, 255]), new Uint8Array([3, 255, 255, 255, 255, 255, 255]), new Uint8Array([1, 255, 255, 255, 255, 255, 255, 255])];

    function s(a, b) {
        if (!a && !b) return !0;
        if (!a || !b) return !1;
        if (a.length != b.length) return !1;
        for (var c = 0; c < a.length; ++c)
            if (a[c] != b[c]) return !1;
        return !0
    }
    var t = function() {
            function a(a, b) {
                this.id = a, this.$1 = b
            }
            var b = a.prototype;
            b.getOffset = function() {
                return this.$1.byteOffset
            };
            b.createParser = function() {
                return new u(this.$1)
            };
            b.getUint = function() {
                if (this.$1.byteLength > 8) throw new RangeError("EbmlElement: Unsigned integer has too many bytes.");
                if (this.$1.byteLength == 8 && this.$1.getUint8(0) & 224) throw new RangeError("EbmlParser: Unsigned integer must be at most 53 bits.");
                var a = 0;
                for (var b = 0; b < this.$1.byteLength; b++) {
                    var c = this.$1.getUint8(b);
                    a = 256 * a + c
                }
                return a
            };
            b.getFloat = function() {
                if (this.$1.byteLength == 4) return this.$1.getFloat32(0);
                else if (this.$1.byteLength == 8) return this.$1.getFloat64(0);
                else throw new RangeError("EbmlElement: floating point numbers must be 4 or 8 bytes.")
            };
            return a
        }(),
        u = function() {
            function a(a) {
                this.$1 = a, this.$2 = new(c("oz-player/shims/OzDataViewReader"))(this.$1)
            }
            var b = a.prototype;
            b.hasMoreData = function() {
                return this.$2.hasMoreData()
            };
            b.parseElement = function() {
                var b = this.$3(),
                    c = this.$4(),
                    d;
                a.$5(c) ? d = this.$1.byteLength - this.$2.getCursor() : d = a.$6(c);
                c = this.$2.getCursor() + d <= this.$1.byteLength ? d : this.$1.byteLength - this.$2.getCursor();
                d = new DataView(this.$1.buffer, this.$1.byteOffset + this.$2.getCursor(), c);
                this.$2.skip(c);
                return new t(b, d)
            };
            b.$3 = function() {
                var a = this.$4();
                if (a.length > 7) throw new RangeError("EbmlParser: EBML ID must be at most 7 bytes.");
                var b = 0;
                for (var c = 0; c < a.length; c++) b = 256 * b + a[c];
                return b
            };
            b.$4 = function() {
                var a = this.$2.readUint8(),
                    b;
                for (b = 1; b <= 8; b++) {
                    var c = 1 << 8 - b;
                    if (a & c) break
                }
                if (b > 8) throw new RangeError("EbmlParser: Variable sized integer must fit within 8 bytes.");
                c = new Uint8Array(b);
                c[0] = a;
                for (a = 1; a < b; a++) c[a] = this.$2.readUint8();
                return c
            };
            a.$6 = function(a) {
                if (a.length == 8 && a[1] & 224) throw new RangeError("EbmlParser: Variable sized integer value must be at most 53 bits.");
                var b = 1 << 8 - a.length;
                b = a[0] & b - 1;
                for (var c = 1; c < a.length; c++) b = 256 * b + a[c];
                return b
            };
            a.$5 = function(a) {
                for (var b = 0; b < r.length; b++)
                    if (s(a, r[b])) return !0;
                return !1
            };
            return a
        }();

    function v(a) {
        a = a.createParser();
        var b = 1e6,
            c = null;
        while (a.hasMoreData()) {
            var d = a.parseElement();
            d.id == k ? b = d.getUint() : d.id == l && (c = d.getFloat())
        }
        if (c == null) return null;
        d = b / 1e9;
        a = c * d;
        return {
            timecodeScale: d,
            duration: a
        }
    }

    function w(a, b, d, e, f, g) {
        a = [];
        b = b.createParser();
        var h = -1,
            i = -1;
        while (b.hasMoreData()) {
            var j = b.parseElement();
            if (j.id != n) continue;
            j = x(j);
            if (!j) continue;
            var k = e * j.unscaledTime;
            j = d + j.relativeOffset;
            h >= 0 && (i >= 0 || c("oz-player/shims/ozvariant")(0, 4010), a.push(new(c("oz-player/manifests/OzDataSegment"))(g, h, k, i, j - 1)));
            h = k;
            i = j
        }
        if (h >= 0) {
            i >= 0 || c("oz-player/shims/ozvariant")(0, 4010);
            k = f;
            a.push(new(c("oz-player/manifests/OzDataSegment"))(g, h, k, i, null))
        }
        return a
    }

    function x(a) {
        a = a.createParser();
        var b = a.parseElement();
        if (b.id != o) return null;
        b = b.getUint();
        a = a.parseElement();
        if (a.id != p) return null;
        a = a.createParser();
        var c = 0;
        while (a.hasMoreData()) {
            var d = a.parseElement();
            if (d.id != q) continue;
            c = d.getUint();
            break
        }
        return {
            unscaledTime: b,
            relativeOffset: c
        }
    }

    function y(a) {
        a = a.createParser();
        var b = null;
        while (a.hasMoreData()) {
            var c = a.parseElement();
            if (c.id != j) continue;
            b = c;
            break
        }
        return !b ? null : v(b)
    }

    function z(a) {
        a = new u(a);
        var b = a.parseElement();
        if (b.id != h) return null;
        b = a.parseElement();
        if (b.id != i) return null;
        a = b.getOffset();
        b = y(b);
        return !b ? null : {
            segmentOffset: a,
            timecodeScale: b.timecodeScale,
            duration: b.duration
        }
    }

    function a(a, b, c, d) {
        d = new DataView(d.buffer);
        c = new DataView(c.buffer);
        d = z(d);
        if (!d) return [];
        c = new u(c);
        c = c.parseElement();
        return c.id != m ? [] : w(a, c, d.segmentOffset, d.timecodeScale, d.duration, b)
    }
    g.parse = a
}), 98);
__d("oz-player/utils/OzReadableStreamUtils", ["oz-player/utils/ozConcatUint8Arrays"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof TextDecoder !== "undefined" ? function(a) {
        return new TextDecoder("utf-8").decode(new Uint8Array(a))
    } : function(a) {
        return String.fromCharCode.apply(null, a)
    };

    function i(a) {
        var b = [],
            d = function c() {
                return a.read().then(function(a) {
                    var d = a.value;
                    a = a.done;
                    if (a) return null;
                    if (!d) return null;
                    b.push(d);
                    return c()
                })
            };
        return d().then(function() {
            var a = c("oz-player/utils/ozConcatUint8Arrays")(b);
            a = a.view;
            return a
        })
    }

    function a(a) {
        return i(a).then(function(a) {
            return h(a)
        })
    }

    function b(a) {
        var b = new Uint8Array(a.length);
        return b.map(function(b, c) {
            return a.charCodeAt(c)
        })
    }
    g.pumpAllData = i;
    g.pumpString = a;
    g.stringToUint8Array = b
}), 98);
__d("oz-player/parsers/OzSidxSegmentsParser", ["oz-player/loggings/OzLoggingUtils", "oz-player/manifests/OzSegmentOptions", "oz-player/manifests/OzZeroTimeRangeSegment", "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter", "oz-player/parsers/OzMp4SidxParser", "oz-player/parsers/OzSidxSegmentsContainer", "oz-player/parsers/OzWebmSidxParser", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzURI", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzReadableStreamUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        a = a.split("-");
        return {
            startByte: Number.parseInt(a[0], 10),
            endByte: Number.parseInt(a[1], 10)
        }
    }
    a = function() {
        function a(a, b, d, e, f, g, h) {
            this.$6 = new(c("oz-player/utils/OzErrorEmitter"))(), this.$7 = [], this.$9 = new(c("oz-player/shims/OzEventEmitter"))(), this.$1 = b, this.$2 = new(c("oz-player/shims/OzURI"))(d), this.$3 = e, this.$5 = f, this.$4 = g, this.$8 = h.cloneContext().setType("sidx"), this.$10 = a
        }
        var b = a.prototype;
        b.onError = function(a) {
            return this.$6.onError(a)
        };
        b.parseInitializationSegment = function() {
            var a = this,
                b = this.$1.Initialization[0].$.range,
                d = h(b),
                e = new(c("oz-player/manifests/OzSegmentOptions"))();
            return this.$10.getBool("sidx_parser_memory_optimization") ? new(c("oz-player/manifests/OzZeroTimeRangeSegment"))(this.$2, d.startByte, d.endByte) : {
                getData: function() {
                    return null
                },
                getURI: function() {
                    return a.$2
                },
                getTimeRange: function() {
                    return {
                        startTime: 0,
                        endTime: 0
                    }
                },
                getByteRange: function() {
                    return d
                },
                getSequenceNumber: function() {
                    return null
                },
                getOptions: function() {
                    return e
                }
            }
        };
        b.parseSegmentsContainer = function() {
            var a = this,
                b = this.$11();
            d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(b, this.$8, "process_sidx");
            b["catch"](this.$6.emitError);
            return new(c("oz-player/parsers/OzSidxSegmentsContainer"))(function() {
                return a.$7
            }, this.$9)
        };
        b.$12 = function(a, b, e) {
            a = new(c("oz-player/manifests/OzZeroTimeRangeSegment"))(a, b.startByte, b.endByte);
            b = this.$5 + ";sidx";
            a = this.$4.request([a], [c("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter")(b)], this.$8, {
                networkTimeoutMs: null,
                retryAttempts_SIDX_USE_ONLY: this.$10.getNumber("sidx_segment_retry_attempts"),
                retryTimeoutMs_SIDX_USE_ONLY: this.$10.getNumber("sidx_segment_retry_interval_ms")
            }, e);
            b = a.getStream().getReader();
            return d("oz-player/utils/OzReadableStreamUtils").pumpAllData(b)
        };
        b.$11 = function() {
            var a = this,
                b = this.$1.$.indexRange,
                e = h(b);
            b = [this.$12(this.$2, e, null)];
            if (this.$3 === "webm") {
                var f = h(this.$1.Initialization[0].$.range);
                b.push(this.$12(this.$2, f, null));
                f = c("oz-player/shims/OzMaybeNativePromise").all(b).then(function(b) {
                    var c = b[0];
                    b = b[1];
                    a.$7 = d("oz-player/parsers/OzWebmSidxParser").parse(a.$10, a.$2, c, b)
                })
            } else f = b[0].then(function(b) {
                a.$7 = d("oz-player/parsers/OzMp4SidxParser").parse(a.$10, a.$2, e.startByte, b)
            });
            return f.then(function() {
                a.$9.emit("segment_updated")
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/parsers/OzVideoContainerType", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return (a.split("/")[1] || "").trim()
    }
    f.parse = a
}), 66);
__d("oz-player/parsers/OzRepresentationParserBase", ["oz-player/manifests/OzRepresentationBase", "oz-player/parsers/OzSegmentTemplateParser", "oz-player/parsers/OzSidxSegmentsParser", "oz-player/parsers/OzVideoContainerType", "oz-player/shims/ozvariant", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzMimeUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, d, e, f, g, h, i, j, k, l, m, n, o) {
            this.$8 = new(c("oz-player/utils/OzErrorEmitter"))();
            this.$1 = b;
            this.$2 = d;
            this.$9 = f;
            this.$10 = g;
            this.$12 = e;
            this.$13 = a;
            this.$14 = h;
            this.$3 = i;
            this.$4 = j;
            this.$5 = k;
            this.$6 = l;
            this.$7 = m;
            this.$15 = n;
            this.$16 = o;
            try {
                this.$10 = this.$10.cloneContext().setRepresentationID(this.parseID())
            } catch (a) {}
        }
        var b = a.prototype;
        b.$17 = function() {
            var a = this,
                b = this.$11;
            if (b) return b;
            if (this.$1.SegmentBase) {
                var e = this.$1.SegmentBase[0],
                    f = this.$1.BaseURL[0]._;
                typeof f === "string" || c("oz-player/shims/ozvariant")(0, 29051);
                b = new(c("oz-player/parsers/OzSidxSegmentsParser"))(this.$13, e, f, d("oz-player/parsers/OzVideoContainerType").parse(this.$1.$.mimeType), d("oz-player/utils/OzMimeUtil").getMimeType(this.$1.$.mimeType), this.$9, this.$10);
                b.onError(function(b) {
                    var c;
                    if ((c = a.$16) == null ? void 0 : c.handleError(a.parseID(), b)) return;
                    return a.$8.emitError(b)
                })
            } else if (this.$1.SegmentTemplate) b = this.$18(this.$1.SegmentTemplate[0], {
                isShared: !1
            });
            else if (this.$3) b = this.$18(this.$3[0], {
                isShared: !0
            });
            else {
                e = new(c("oz-player/utils/OzError"))({
                    type: "OZ_REPRESENTATION_PARSER",
                    description: "Unrecognized representation type",
                    extra: {
                        code: "OZ_RP-7"
                    }
                });
                throw e
            }
            this.$11 = b;
            return b
        };
        b.$18 = function(a, b) {
            var d;
            a = a;
            b.isShared && (a = babelHelpers["extends"]({}, a, {
                $: babelHelpers["extends"]({}, a.$, {
                    initialization: a.$.initialization.replace("$RepresentationID$", this.$1.$.id),
                    media: a.$.media.replace("$RepresentationID$", this.$1.$.id)
                })
            }));
            b = this.$12.mpdUrl;
            var e = this.$1.BaseURL && this.$1.BaseURL[0] ? this.$1.BaseURL[0]._ : null;
            e = e != null ? e : b;
            if (e == null) {
                var f = new(c("oz-player/utils/OzError"))({
                    type: "OZ_REPRESENTATION_PARSER",
                    description: "Missing mpd url for template manifest",
                    extra: {
                        code: "OZ_RP-6"
                    }
                });
                throw f
            }
            f = this.$12.customSegmentTimelineParser;
            d = (d = this.$12.customRepresentationParsers) == null ? void 0 : d.initializationBinary;
            d = d ? d(this.$1) : null;
            return new(c("oz-player/parsers/OzSegmentTemplateParser"))(this.$13, a, {
                baseUrl: e,
                mpdUrl: b,
                isStaticMpd: this.$14.manifestType === "static",
                isTemplatedMpd: this.$14.manifestIsTemplated
            }, f, d)
        };
        b.onError = function(a) {
            return this.$8.onError(a)
        };
        b.parseInitSegment = function() {
            return this.$17().parseInitializationSegment()
        };
        b.parseBandwidth = function() {
            return Number(this.$1.$.bandwidth)
        };
        b.parseMimeType = function() {
            var a;
            return (a = (a = this.$1.$.mimeType) != null ? a : this.$4) != null ? a : ""
        };
        b.parseCodecs = function() {
            var a;
            return (a = (a = this.$1.$.codecs) != null ? a : this.$5) != null ? a : ""
        };
        b.parseLang = function() {
            return this.$6
        };
        b.parseRole = function() {
            return this.$7
        };
        b.parseSegmentsContainer = function() {
            return this.$17().parseSegmentsContainer()
        };
        b.parseID = function() {
            return "" + this.$1.$.id
        };
        b.parseCustomFieldFirstSegment = function() {
            var a = this.$12.customRepresentationParsers ? this.$12.customRepresentationParsers.firstSegmentParser : null;
            return a ? a(this.$1) : null
        };
        b.parse = function() {
            return new(c("oz-player/manifests/OzRepresentationBase"))(this.$1, this.$2, this.parseID(), this.parseMimeType(), this.parseCodecs(), this.parseLang(), this.parseRole(), this.parseInitSegment(), this.parseSegmentsContainer(), this.parseBandwidth(), this.parseCustomFieldFirstSegment(), this.$12.customRepresentationParsers)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/parsers/OzApplicationRepresentationParser", ["oz-player/manifests/OzApplicationRepresentation", "oz-player/parsers/OzRepresentationParserBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f, g, h, i, j, k, l, m, n) {
            b = a.call(this, b, c, d, e, f, g, h, i, j, k, l, m, n) || this;
            b.$OzApplicationRepresentationParser1 = c;
            b.$OzApplicationRepresentationParser3 = e;
            return b
        }
        var d = b.prototype;
        d.parse = function() {
            var a = this.$OzApplicationRepresentationParser3.customRepresentationParsers;
            return new(c("oz-player/manifests/OzApplicationRepresentation"))(this.$OzApplicationRepresentationParser1, this.$OzApplicationRepresentationParser2, this.parseID(), this.parseMimeType(), this.parseCodecs(), this.parseLang(), this.parseRole(), this.parseInitSegment(), this.parseSegmentsContainer(), this.parseBandwidth(), this.parseCustomFieldFirstSegment(), a)
        };
        return b
    }(c("oz-player/parsers/OzRepresentationParserBase"));
    g["default"] = a
}), 98);
__d("oz-player/manifests/OzAudioRepresentation", ["oz-player/manifests/OzRepresentationBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f, g, h, i, j, k, l, m) {
            b = a.call(this, b, c, d, e, f, g, h, i, j, k, l, m) || this;
            b.$OzAudioRepresentation1 = d;
            b.$OzAudioRepresentation2 = k;
            return b
        }
        var c = b.prototype;
        c.getBitrateKbps = function() {
            var a = 1024;
            return (this.$OzAudioRepresentation2 / a).toFixed(1) + "Kbps"
        };
        c.getDisplayLabel = function() {
            var b = a.prototype.getLang.call(this),
                c = a.prototype.getRole.call(this);
            b = b == null ? "Default" : b;
            return c == null ? b : b + " - " + c
        };
        return b
    }(c("oz-player/manifests/OzRepresentationBase"));
    g["default"] = a
}), 98);
__d("oz-player/parsers/OzAudioRepresentationParser", ["oz-player/manifests/OzAudioRepresentation", "oz-player/parsers/OzRepresentationParserBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f, g, h, i, j, k, l, m, n) {
            b = a.call(this, b, c, d, e, f, g, h, i, j, k, l, m, n) || this;
            b.$OzAudioRepresentationParser1 = c;
            b.$OzAudioRepresentationParser3 = e;
            return b
        }
        var d = b.prototype;
        d.parse = function() {
            var a = this.$OzAudioRepresentationParser3.customRepresentationParsers;
            return new(c("oz-player/manifests/OzAudioRepresentation"))(this.$OzAudioRepresentationParser1, this.$OzAudioRepresentationParser2, this.parseID(), this.parseMimeType(), this.parseCodecs(), this.parseLang(), this.parseRole(), this.parseInitSegment(), this.parseSegmentsContainer(), this.parseBandwidth(), this.parseCustomFieldFirstSegment(), a)
        };
        return b
    }(c("oz-player/parsers/OzRepresentationParserBase"));
    g["default"] = a
}), 98);
__d("oz-player/parsers/OzVideoRepresentationParser", ["oz-player/manifests/OzVideoRepresentation", "oz-player/parsers/OzRepresentationParserBase"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
            b = a.call(this, b, c, d, e, f, g, h, i, j, k, l, m, n, o) || this;
            b.$OzVideoRepresentationParser1 = c;
            b.$OzVideoRepresentationParser2 = d;
            b.$OzVideoRepresentationParser3 = e;
            return b
        }
        var d = b.prototype;
        d.parse = function() {
            var a = Number.parseInt(this.$OzVideoRepresentationParser1.$.height, 10),
                b = Number.parseInt(this.$OzVideoRepresentationParser1.$.width, 10),
                d = this.$OzVideoRepresentationParser3.customRepresentationParsers;
            return new(c("oz-player/manifests/OzVideoRepresentation"))(this.$OzVideoRepresentationParser1, this.$OzVideoRepresentationParser2, this.parseID(), this.parseMimeType(), this.parseCodecs(), this.parseLang(), this.parseRole(), this.parseInitSegment(), this.parseSegmentsContainer(), this.parseBandwidth(), this.parseCustomFieldFirstSegment(), d, b, a)
        };
        return b
    }(c("oz-player/parsers/OzRepresentationParserBase"));
    g["default"] = a
}), 98);
__d("oz-player/utils/OzIbrUtils", ["oz-player/networks/OzBandwidthEstimator"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a, b, d) {
        var e = c("oz-player/networks/OzBandwidthEstimator").getAdjustedBandwidth(b.getLegacyConfig());
        a = a.slice(0);
        a.sort(function(a, b) {
            return a.getBandwidth() - b.getBandwidth()
        });
        b = b.getNumber("live_audio_ibr_bandwidth_percentage");
        b = e * b;
        for (var f = a.length - 1; f >= 0; f--)
            if (a[f].getBandwidth() <= b) {
                d.getOperationLogger("audio_ibr_success").setRepresentationID(a[f].getID()).setReason(e.toString()).log();
                return a[f]
            }
        d.getOperationLogger("audio_ibr_no_op").setReason(e.toString()).log();
        return null
    };
    g.getInitialAudioRepresentation = a
}), 98);
__d("oz-player/parsers/OzMpdParser", ["oz-player/manifests/Mpd", "oz-player/parsers/OzApplicationRepresentationParser", "oz-player/parsers/OzAudioRepresentationParser", "oz-player/parsers/OzVideoRepresentationParser", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzIbrUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.blockedRepresentationsManager,
                d = a.config,
                e = a.drmManager,
                f = a.enableAlternativeAudioTracks,
                g = a.initialRepresentationIDs,
                h = a.networkManager,
                i = a.ozParserContext;
            a = a.perfLoggerProvider;
            this.$2 = new(c("oz-player/utils/OzErrorEmitter"))();
            this.$5 = d;
            this.$1 = h;
            this.$3 = a;
            this.$4 = i;
            this.$6 = e;
            this.$7 = (d = g) != null ? d : [];
            this.$8 = (h = b) != null ? h : null;
            this.$9 = f;
            this.$10 = !0
        }
        var b = a.prototype;
        b.onError = function(a) {
            return this.$2.onError(a)
        };
        b.parse = function(a) {
            a = a;
            var b = this.$4.createXmlParser().parse(a);
            b = b.MPD && b.MPD.length > 0 ? b.MPD[0] : null;
            if (!b) {
                var d = 2e3;
                throw new Error("parsed manifest XML missing MPD node; truncated xml (" + d + "/" + a.length + "): " + a.substring(0, d))
            }
            d = b.Period && b.Period.length > 0 ? b.Period[0] : null;
            if (!d) {
                var e = 2e3;
                throw new Error("parsed manifest XML missing Period node; truncated xml (" + e + "/" + a.length + "): " + a.substring(0, e))
            }
            a = d.AdaptationSet || [];
            e = this.$11(b);
            this.$10 = e === "static";
            d = this.$12(b);
            var f = this.$13(this.$14(a, "video"), {
                    manifestType: e,
                    manifestIsTemplated: d
                }).sort(function(a, b) {
                    return a.getHeight() - b.getHeight()
                }),
                g;
            this.$9 ? g = this.$15(this.$14(a, "audio"), {
                manifestType: e,
                manifestIsTemplated: d
            }).sort(function(a, b) {
                return a.getBandwidth() - b.getBandwidth()
            }) : g = this.$16(this.$17(a, "audio"), c("oz-player/parsers/OzAudioRepresentationParser"), {
                manifestType: e,
                manifestIsTemplated: d
            }).sort(function(a, b) {
                return a.getBandwidth() - b.getBandwidth()
            });
            var h = [];
            if (this.$5.getBool("vtt_caption_representation")) {
                a = this.$14(a, "application");
                h = this.$16(a[0], c("oz-player/parsers/OzApplicationRepresentationParser"), {
                    manifestType: e,
                    manifestIsTemplated: d
                })
            }
            a = this.$4.mpdUrl;
            e = new(c("oz-player/manifests/Mpd"))(b, f, g, h, a, this.$18(b), this.$4.customParsers || new Map(), this.$10);
            if (this.$6) {
                d = this.$6;
                d.startEME(f, g)
            }
            return e
        };
        b.$18 = function(a) {
            a = a.$.minimumUpdatePeriod || "";
            a = /\d+/g.exec(a);
            if (a && a.length) {
                a = a[0];
                return a ? Number.parseInt(a, 10) : null
            }
            return null
        };
        b.$11 = function(a) {
            return a.$.type || "static"
        };
        b.$12 = function(a) {
            var b;
            b = (b = this.$4.customParsers) == null ? void 0 : b.get("isLiveTemplated");
            if (!b) return !1;
            b = b(a);
            return typeof b === "boolean" && b
        };
        b.$17 = function(a, b) {
            return a.find(this.$19(b))
        };
        b.$14 = function(a, b) {
            return a.filter(this.$19(b))
        };
        b.$19 = function(a) {
            return function(b) {
                if (b.$.mimeType != null) return b.$.mimeType.indexOf(a) !== -1;
                b = b.Representation;
                return b && b.length > 0 && b[0].$.mimeType.indexOf(a) !== -1
            }
        };
        b.$16 = function(a, b, c) {
            var d = this;
            if (!a) return [];
            var e = a.Role;
            e = (e = e) != null ? e : [];
            e = e[0];
            var f = e ? e.$.value : null;
            return a.Representation.map(function(e) {
                e = new b(d.$5, e, (e = e.ContentProtection) != null ? e : a.ContentProtection, d.$4, d.$1, d.$3, c, a.SegmentTemplate, a.$.mimeType, a.$.codecs, a.$.lang, f, d.$7, d.$8);
                e.onError(d.$2.emitError);
                return e.parse()
            })
        };
        b.$13 = function(a, b) {
            var d = this,
                e = [],
                f = new Set(),
                g = 0;
            a.filter(Boolean).forEach(function(a, h, i) {
                h = h === i.length - 1;
                i = g;
                for (var j = a.Representation, k = Array.isArray(j), l = 0, j = k ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var m, n;
                    if (k) {
                        if (l >= j.length) break;
                        n = j[l++]
                    } else {
                        l = j.next();
                        if (l.done) break;
                        n = l.value
                    }
                    n = n;
                    var o = parseInt(n.$.height, 10);
                    if (o <= g) continue;
                    if (((m = n.$.FBAbrPolicyTags) == null ? void 0 : m.includes("avoid_on_abr")) && !h) continue;
                    n = new(c("oz-player/parsers/OzVideoRepresentationParser"))(d.$5, n, (m = n.ContentProtection) != null ? m : a.ContentProtection, d.$4, d.$1, d.$3, b, a.SegmentTemplate, a.$.mimeType, a.$.codecs, a.$.lang, null, d.$7, d.$8);
                    n.onError(d.$2.emitError);
                    m = n.parse();
                    if (!MediaSource.isTypeSupported(m.getMimeCodecs())) {
                        f.add(m.getMimeCodecs());
                        continue
                    }
                    e.push(m);
                    i = Math.max(o, i)
                }
                g = i
            });
            return e.filter(Boolean)
        };
        b.$15 = function(a, b) {
            var e = this,
                f = [],
                g = new Set();
            a = a.filter(Boolean).map(function(a) {
                var d = a.Role;
                d = (d = d) != null ? d : [];
                d = d[0];
                d = d ? d.$.value : null;
                var f = [];
                for (var h = a.Representation, i = Array.isArray(h), j = 0, h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var k;
                    if (i) {
                        if (j >= h.length) break;
                        k = h[j++]
                    } else {
                        j = h.next();
                        if (j.done) break;
                        k = j.value
                    }
                    k = k;
                    k = new(c("oz-player/parsers/OzAudioRepresentationParser"))(e.$5, k, (k = k.ContentProtection) != null ? k : a.ContentProtection, e.$4, e.$1, e.$3, b, a.SegmentTemplate, a.$.mimeType, a.$.codecs, a.$.lang, d, e.$7);
                    k.onError(e.$2.emitError);
                    k = k.parse();
                    if (!MediaSource.isTypeSupported(k.getMimeCodecs())) {
                        g.add(k.getMimeCodecs());
                        continue
                    }
                    f.push(k)
                }
                return f
            });
            a.forEach(function(a) {
                if (a.length > 1) {
                    var b = d("oz-player/utils/OzIbrUtils").getInitialAudioRepresentation(a, e.$5, e.$3);
                    f.push(b)
                } else f.push.apply(f, a)
            });
            return f.filter(Boolean)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/utils/OzErrorUtils", ["oz-player/utils/OzError"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        return new(c("oz-player/utils/OzError"))({
            type: a.getType(),
            description: a.getDescription(),
            extra: babelHelpers["extends"]({}, a.getExtra(), {
                mimeType: b
            })
        })
    }

    function b(a) {
        var b, d;
        a instanceof c("oz-player/utils/OzError") ? (b = a.getExtra().code || "", d = a) : (b = a.status != null && a.status !== "" ? a.status.toString() : "0", d = new(c("oz-player/utils/OzError"))({
            type: "OZ_NETWORK",
            description: a.message,
            extra: {
                originalError: a,
                code: b,
                url: a.url
            }
        }));
        return [d, b]
    }
    g.getOzErrorWithMIMEType = a;
    g.getNormalizedErrorAndCode = b
}), 98);
__d("oz-player/utils/OzMpdUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a) {
        var b = null;
        a.forEach(function(a) {
            if (a) {
                var c = a.endTime;
                c < ((c = (c = b) == null ? void 0 : c.endTime) != null ? c : Infinity) && (b = a)
            }
        });
        return b
    }

    function a(a, b) {
        b = [];
        b.push.apply(b, a.getVideoRepresentations().concat(a.getAudioRepresentations()));
        if (b.length) {
            a = b.map(function(a) {
                a = a.getEndingSegment();
                return a ? a.getTimeRange() : null
            });
            return g(a)
        }
        return null
    }

    function b(a) {
        var b = [];
        b.push.apply(b, a.getVideoRepresentations().concat(a.getAudioRepresentations()));
        if (b.length) {
            a = b[0].getEndingSegment();
            if (a) return a.getSequenceNumber()
        }
        return null
    }
    f.getLeastEndTimeTimeRange = g;
    f.getMpdLastTimeRange = a;
    f.getMpdLastSequenceNumber = b
}), 66);
__d("oz-player/utils/OzStreamInterruptChecker", ["oz-player/shims/OzEventEmitter", "oz-player/utils/OzMpdUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this) || this;
            d.$OzStreamInterruptChecker4 = 0;
            d.$OzStreamInterruptChecker5 = null;
            d.$OzStreamInterruptChecker6 = !1;
            d.$OzStreamInterruptChecker2 = b;
            d.$OzStreamInterruptChecker3 = c;
            d.$OzStreamInterruptChecker1 = d.$OzStreamInterruptChecker3.getNumber("live_numerical_error_epsilon");
            return d
        }
        var c = b.prototype;
        c.notifyMpdUpdated = function() {
            var a = d("oz-player/utils/OzMpdUtils").getMpdLastTimeRange(this.$OzStreamInterruptChecker2, this.$OzStreamInterruptChecker3),
                b = a ? a.endTime : null,
                c = !1;
            b !== null && (c = b === this.$OzStreamInterruptChecker5);
            c ? this.$OzStreamInterruptChecker4++ : (this.$OzStreamInterruptChecker4 = 0, this.$OzStreamInterruptChecker6 && this.$OzStreamInterruptChecker5 !== null && this.$OzStreamInterruptChecker5 !== void 0 && a !== null && a !== void 0 && this.emit("streamResumedAt", a.startTime), this.$OzStreamInterruptChecker6 = !1);
            c = this.$OzStreamInterruptChecker3.getNumber("stream_interrupt_check_mpd_stale_count_threshold");
            !this.$OzStreamInterruptChecker6 && c > 0 && this.$OzStreamInterruptChecker4 >= c && b !== null && b !== void 0 && (this.emit("streamInterruptAt", b), this.$OzStreamInterruptChecker6 = !0);
            this.$OzStreamInterruptChecker5 = b
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/parsers/OzMpdUpdater", ["oz-player/parsers/OzMpdParser", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/OzURI", "oz-player/shims/ozClearTimeout", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzErrorUtils", "oz-player/utils/OzMpdUtils", "oz-player/utils/OzReadableStreamUtils", "oz-player/utils/OzStreamInterruptChecker"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, e, f, g, h, i, j, k) {
            var l;
            l = a.call(this) || this;
            l.$OzMpdUpdater8 = new(c("oz-player/utils/OzErrorEmitter"))();
            l.$OzMpdUpdater10 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            l.$OzMpdUpdater11 = !1;
            l.$OzMpdUpdater16 = 0;
            l.$OzMpdUpdater18 = 0;
            l.$OzMpdUpdater19 = null;
            l.$OzMpdUpdater21 = !0;
            l.$OzMpdUpdater22 = 0;
            l.$OzMpdUpdater25 = function() {
                var a, b = l.$OzMpdUpdater2.getLocation();
                l.$OzMpdUpdater21 = !1;
                if (b == null || b === "") return;
                var e = new(c("oz-player/shims/OzURI"))(b),
                    f = String((a = (a = e.getQueryData().ms) != null ? a : e.getQueryData().msdev) != null ? a : e.getQueryData().mstest);
                if (!l.$OzMpdUpdater12.isPlaying()) {
                    l.setupUpdateLoop();
                    return
                }
                var g = l.$OzMpdUpdater5.getOperationLogger("update_manifest").start();
                l.$OzMpdUpdater27(b).then(function(a) {
                    var e;
                    l.$OzMpdUpdater18 = 0;
                    l.$OzMpdUpdater28();
                    l.$OzMpdUpdater7 = 0;
                    if (l.$OzMpdUpdater21) return;
                    var h = babelHelpers["extends"]({}, l.$OzMpdUpdater13, {
                        mpdUrl: b
                    });
                    h = new(c("oz-player/parsers/OzMpdParser"))({
                        config: l.$OzMpdUpdater6,
                        ozParserContext: h,
                        networkManager: l.$OzMpdUpdater1,
                        perfLoggerProvider: l.$OzMpdUpdater5,
                        drmManager: l.$OzMpdUpdater14,
                        initialRepresentationIDs: [],
                        blockedRepresentationsManager: null,
                        enableAlternativeAudioTracks: !1
                    });
                    h.onError(function(a) {
                        l.$OzMpdUpdater8.emitError(a), g.setError(a).log()
                    });
                    h = h.parse(a);
                    a = l.$OzMpdUpdater2.isStaticMpd();
                    l.$OzMpdUpdater2.updateWith(h);
                    l.$OzMpdUpdater2.markRefreshed();
                    h.isStaticMpd() && !a && l.emit("streamTransitionToStatic");
                    h = d("oz-player/utils/OzMpdUtils").getMpdLastTimeRange(l.$OzMpdUpdater2, l.$OzMpdUpdater6);
                    a = h && h.endTime != 0 ? h.endTime : null;
                    h = String((h = (h = l.$OzMpdUpdater2) == null ? void 0 : h.getCustomField("currentServerTimeMs")) != null ? h : "");
                    e = String((e = (e = l.$OzMpdUpdater2) == null ? void 0 : e.getCustomField("lastVideoFrameTs")) != null ? e : "");
                    h = {
                        currentServerTimeMs: h,
                        ingestLastVideoFrameTs: e,
                        nowMs: String(Date.now())
                    };
                    g.setLiveheadPosition(a).setLiveheadSeqNumMpd(d("oz-player/utils/OzMpdUtils").getMpdLastSequenceNumber(l.$OzMpdUpdater2)).setManifestType(l.$OzMpdUpdater2.isStaticMpd() ? "static" : "dynamic").setIsTemplatedManifest(Boolean(l.$OzMpdUpdater2.getCustomField("isLiveTemplated"))).setPlaybackFbmsParam(f).setUserInfo(h).log();
                    l.$OzMpdUpdater9.notifyMpdUpdated();
                    l.setupUpdateLoop()
                })["catch"](function(a) {
                    l.$OzMpdUpdater28();
                    g.setError(a).log();
                    var e = null;
                    if (a instanceof c("oz-player/utils/OzError")) e = a;
                    else {
                        var f, h = null,
                            i = "Caught an unknown error when fetching the manifest.";
                        if (a != null)
                            if (l.$OzMpdUpdater6.getBool("normalize_mpd_fetch_errors")) {
                                var j = d("oz-player/utils/OzErrorUtils").getNormalizedErrorAndCode(a),
                                    k = j[0];
                                j[1];
                                e = k
                            } else f = a, h = f.code != null ? String(f.code) : null, i = f.name + "; " + f.message + "; " + f.description + ";";
                        if (e == null) {
                            j = {
                                originalError: f,
                                url: b
                            };
                            h !== null && (j.code = h);
                            e = new(c("oz-player/utils/OzError"))({
                                type: "OZ_NETWORK",
                                description: i,
                                extra: j
                            })
                        }
                    }
                    l.$OzMpdUpdater26(e, b)
                })
            };
            var m = e.getMinimumUpdatePeriod();
            l.$OzMpdUpdater7 = 0;
            l.$OzMpdUpdater1 = f;
            l.$OzMpdUpdater2 = e;
            l.$OzMpdUpdater12 = g;
            l.$OzMpdUpdater3 = m;
            l.$OzMpdUpdater5 = h.cloneContext().setType("manifest");
            l.$OzMpdUpdater6 = b;
            l.$OzMpdUpdater13 = i;
            l.$OzMpdUpdater14 = j;
            l.$OzMpdUpdater15 = k;
            l.$OzMpdUpdater2.addListener("locationUpdated", function() {
                l.$OzMpdUpdater23(), l.setupUpdateLoop()
            });
            l.$OzMpdUpdater9 = new(c("oz-player/utils/OzStreamInterruptChecker"))(l.$OzMpdUpdater2, l.$OzMpdUpdater6);
            l.$OzMpdUpdater10.addSubscriptions(l.$OzMpdUpdater9.addListener("streamResumedAt", function(a) {
                l.emit("streamResumedAt", a)
            }), l.$OzMpdUpdater9.addListener("streamInterruptAt", function(a) {
                l.emit("streamInterruptAt", a)
            }));
            return l
        }
        var e = b.prototype;
        e.$OzMpdUpdater23 = function() {
            c("oz-player/shims/ozClearTimeout")(this.$OzMpdUpdater4), this.$OzMpdUpdater4 = null, this.$OzMpdUpdater24(), this.$OzMpdUpdater21 = !0
        };
        e.setupUpdateLoop = function() {
            var a, b = !this.$OzMpdUpdater11;
            b && (b = !this.$OzMpdUpdater2.isStaticMpd(), this.$OzMpdUpdater3 = this.$OzMpdUpdater2.getMinimumUpdatePeriod());
            a = this.$OzMpdUpdater17 == null && this.$OzMpdUpdater6.getNumber("manifest_initial_update_delay_ms") > 0 ? this.$OzMpdUpdater6.getNumber("manifest_initial_update_delay_ms") : this.$OzMpdUpdater6.getNumber("manifest_update_frequency_ms") || ((a = this.$OzMpdUpdater3) != null ? a : 0) * 1e3;
            b && a && this.$OzMpdUpdater2.getLocation() && (this.$OzMpdUpdater4 = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(this.$OzMpdUpdater25, a))
        };
        e.onError = function(a) {
            return this.$OzMpdUpdater8.onError(a)
        };
        e.$OzMpdUpdater26 = function(a, b) {
            var c = this;
            b = !0;
            var d = this.$OzMpdUpdater18 - 1,
                e = a.getExtra().code;
            this.$OzMpdUpdater19 !== e ? (this.$OzMpdUpdater19 = e, this.$OzMpdUpdater16 = 1) : this.$OzMpdUpdater16++;
            var f = function() {
                b = !1
            };
            e = {
                endStream: function() {
                    f(), c.$OzMpdUpdater11 = !0, c.emit("streamGone")
                },
                consecutiveFailuresForErrorCode: this.$OzMpdUpdater16,
                error: a,
                isInitialRequest: !1,
                retry: function(b) {
                    c.emit("manifestFetchErrorRetry", a), f(), c.setupUpdateLoop()
                },
                retryAttemptCount: d
            };
            this.emit("manifestFetchError", e);
            b && this.$OzMpdUpdater8.emitError(a)
        };
        e.$OzMpdUpdater29 = function(a, b) {
            a = new(c("oz-player/shims/OzURI"))(a);
            a.addQueryData("_nc_expid", b);
            return a.toString()
        };
        e.$OzMpdUpdater30 = function(a) {
            if (!this.$OzMpdUpdater15) return a;
            a = new(c("oz-player/shims/OzURI"))(a);
            a.addQueryData("_nc_tsid", "mpd-" + this.$OzMpdUpdater22++);
            return a.toString()
        };
        e.$OzMpdUpdater27 = function(a) {
            this.$OzMpdUpdater24();
            this.$OzMpdUpdater18++;
            var b = this.$OzMpdUpdater6.getString("cdn_experiment_id");
            a = b.length === 0 ? a : this.$OzMpdUpdater29(a, b);
            a = this.$OzMpdUpdater30(a);
            b = this.$OzMpdUpdater1.requestRawUrl(a, {
                networkTimeoutMs: this.$OzMpdUpdater6.getNumber("mpd_updater_network_request_timeout_ms")
            }, this.$OzMpdUpdater5);
            this.$OzMpdUpdater17 = Date.now();
            this.$OzMpdUpdater20 = b;
            a = b.getStream().getReader();
            return d("oz-player/utils/OzReadableStreamUtils").pumpString(a)
        };
        e.$OzMpdUpdater24 = function() {
            this.$OzMpdUpdater20 && (this.$OzMpdUpdater20.cancel(), this.$OzMpdUpdater18 = 0), this.$OzMpdUpdater28()
        };
        e.$OzMpdUpdater28 = function() {
            this.$OzMpdUpdater20 = null
        };
        e.destroy = function() {
            this.$OzMpdUpdater4 && c("oz-player/shims/ozClearTimeout")(this.$OzMpdUpdater4), this.$OzMpdUpdater10.release()
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/shims/www/OzXmlParserTrustedTypesHTMLPolicyWWW", ["TrustedTypes", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = {
        createHTML: function(a) {
            if (a.startsWith('<?xml version="1.0"?>\n<') || a.startsWith('<?xml version="1.0" encoding="UTF-8"?>\n<')) return a;
            throw c("err")("Violating Trusted Type policies. Only works for XML.")
        }
    };
    var h = c("TrustedTypes").createPolicy("oz-player-xml", b);

    function a(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return h.createHTML.apply(h, [a].concat(c))
    }
    g.createTrustedHTMLForDOMParser = a
}), 98);
__d("oz-player/shims/OzXmlParserTrustedTypesHTMLPolicy", ["oz-player/shims/www/OzXmlParserTrustedTypesHTMLPolicyWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.createTrustedHTMLForDOMParser = d("oz-player/shims/www/OzXmlParserTrustedTypesHTMLPolicyWWW").createTrustedHTMLForDOMParser
}), 98);
__d("oz-player/parsers/OzXmlParserImplDOMParser", ["oz-player/shims/OzXmlParserTrustedTypesHTMLPolicy", "oz-player/utils/OzError"], (function(a, b, c, d, e, f, g) {
    function h() {
        return {
            $: {}
        }
    }

    function i(a) {
        var b = h();
        for (var c = a.attributes, d = 0; d < c.length; ++d) {
            var e = c[d];
            b.$[e.name] = e.value
        }
        for (e = a.childNodes, c = 0; c < e.length; ++c) {
            d = e[c];
            if (d instanceof Element) {
                a = d.nodeName;
                Object.prototype.hasOwnProperty.call(b, a) || (b[a] = []);
                b[a].push(i(d))
            } else {
                a = d.nodeValue.trim();
                a && (b._ = a)
            }
        }
        return b
    }
    a = function() {
        function a() {
            this.$1 = new DOMParser()
        }
        var b = a.prototype;
        b.parse = function(a) {
            try {
                var b = h(),
                    e = d("oz-player/shims/OzXmlParserTrustedTypesHTMLPolicy").createTrustedHTMLForDOMParser(a);
                e = this.$1.parseFromString(e, "application/xml");
                var f = e.querySelector("parsererror");
                if (f) {
                    f = f.innerHTML;
                    var g = 2e3;
                    throw new(c("oz-player/utils/OzError"))({
                        type: "OZ_XML_PARSER",
                        description: f + "; truncated xml (" + g + "/" + a.length + "): " + a.substring(0, g),
                        extra: {}
                    })
                }
                f = e.documentElement;
                f != null && (b[f.nodeName] = [i(f)]);
                return b
            } catch (b) {
                if (b instanceof c("oz-player/utils/OzError")) throw b;
                else {
                    g = 2e3;
                    throw new(c("oz-player/utils/OzError"))({
                        type: "OZ_XML_PARSER",
                        description: b.message + "; truncated xml (" + g + "/" + a.length + "): " + a.substring(0, g) + "\n\n" + b.stack,
                        extra: {
                            originalError: b
                        }
                    })
                }
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/playback_controls/OzClearSourceBufferOnSeekManager", ["oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise", "oz-player/utils/OzCustomErrorCode", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, d, e) {
            e === void 0 && (e = null), this.$3 = new(c("oz-player/utils/OzErrorEmitter"))(), this.$4 = new Map(), this.$5 = !1, this.$6 = !1, this.$7 = !1, this.$8 = null, this.$9 = [], this.$10 = null, this.$11 = null, this.$1 = a, this.$2 = b, this.$4 = d, this.$11 = e
        }
        var b = a.prototype;
        b.$12 = function(a) {
            var b;
            this.$5 = !0;
            return (b = this.$8) != null ? b : a.call(this.$1)
        };
        b.$13 = function(a, b) {
            this.$6 = !0, this.$9.push({
                t: b
            }), this.$8 = b, this.$9.length === 1 && this.$14(a)
        };
        b.$15 = function(a) {
            this.$7 = !0;
            return this.$8 != null ? !0 : a.call(this.$1)
        };
        b.$16 = function(a, b) {
            var d = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise")),
                e = [];
            this.$4.forEach(function(c, d) {
                d = c.clearSourceBufferRange(a, b);
                e.push(d)
            });
            var f = c("oz-player/shims/OzMaybeNativePromise").all(e);
            f.then(function() {
                d.resolve()
            })["catch"](function(a) {
                d.reject(a)
            });
            return d.getPromise()
        };
        b.$14 = function(a) {
            var b = this,
                d = this.$9.length > 0 ? this.$9[0] : null,
                e = this.$2.getNumber("clear_buffer_on_seek_epsilon_s");
            if (d) {
                var f = d.t;
                d = this.$1.buffered;
                var g = d.length,
                    h = d.length <= 0,
                    i = -1,
                    j = !1;
                for (var k = 0; i < 0 && k < g; ++k) i = f - e >= d.start(k) && f + e < d.end(k) ? k : i, j = f < d.start(k) - e;
                k = i > -1;
                var l = this.$2.getNumber("clear_buffer_on_seek_nudge_s");
                k && i >= 0 && i < g && l > 0 && (f = Math.min(f, d.end(i) - l), f = Math.max(f, d.start(i) + l));
                if (h || k || !j) this.$11 && this.$11.getOperationLogger("seek_to_next_time").setLength(Math.round(f * 1e3)).setInitiator("no_clear").log(), a.call(this.$1, f), this.$9.shift(), this.$14(a);
                else {
                    var m = null;
                    this.$11 && (m = this.$11.getOperationLogger("clear_buffer_before_seek").setLength(Math.round(f * 1e3)).setUserInfo({
                        bufferRangesLength: String(g),
                        nudgeSec: String(l)
                    }).start());
                    i = this.$16(Math.max(f - e, 0), d.end(g - 1) + e);
                    i.then(function() {
                        m && m.log(), b.$11 && b.$11.getOperationLogger("seek_to_next_time").setLength(Math.round(f * 1e3)).setInitiator("after_clear").log(), a.call(b.$1, f), b.$9.shift(), b.$14(a)
                    })["catch"](function(a) {
                        m && m.setError(a).log(), b.$3.emitError(a instanceof c("oz-player/utils/OzError") ? a : new(c("oz-player/utils/OzError"))({
                            type: "OZ_SOURCE_BUFFER",
                            description: a ? a.name + ": " + a.message : "Unknown error while clearing the buffer.",
                            extra: {
                                code: c("oz-player/utils/OzCustomErrorCode").SOURCE_BUFFER_MANAGER_CLEAR_RANGE_FAILED,
                                originalError: a
                            }
                        }))
                    })
                }
            } else this.$8 = null
        };
        b.maybeOverwriteVideoCurrentTimeProperty = function() {
            var a, b, c = this,
                d = Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(this.$1, "currentTime");
            d = (a = d) != null ? a : Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "currentTime");
            a = Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(this.$1, "seeking");
            a = (b = a) != null ? b : Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "seeking");
            var e = d && typeof d.get === "function" ? d.get : null,
                f = d && typeof d.set === "function" ? d.set : null,
                g = a && typeof a.get === "function" ? a.get : null;
            if (e && f && g && Object.defineProperty) {
                try {
                    Object.defineProperty(this.$1, "currentTime", {
                        get: function() {
                            return c.$12(e)
                        },
                        set: function(a) {
                            c.$13(f, a)
                        },
                        configurable: !0,
                        enumerable: !0
                    });
                    Object.defineProperty(this.$1, "seeking", {
                        get: function() {
                            return c.$15(g)
                        },
                        configurable: !0,
                        enumerable: !0
                    });
                    b = this.$1.currentTime;
                    this.$1.currentTime = b;
                    this.$1.seeking
                } catch (a) {}
                this.$17(function() {
                    c.getCurrentTimePropertyOverwriteSuccess() && Object.defineProperty(c.$1, "currentTime", {
                        get: e,
                        set: f,
                        configurable: !0,
                        enumerable: !0
                    }), c.getSeekingPropertyOverwriteSuccess() && Object.defineProperty(c.$1, "seeking", {
                        get: g,
                        configurable: !0,
                        enumerable: !0
                    })
                })
            }
        };
        b.getCurrentTimePropertyOverwriteSuccess = function() {
            return this.$5 && this.$6
        };
        b.getSeekingPropertyOverwriteSuccess = function() {
            return this.$7
        };
        b.$17 = function(a) {
            this.$10 = a
        };
        b.onError = function(a) {
            return this.$3.onError(a)
        };
        b.destroy = function() {
            try {
                this.$10 && this.$10()
            } catch (a) {}
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/playback_controls/OzSteadyStateManager", ["oz-player/shims/ozvariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = [], this.$2 = a, this.$3 = b
        }
        var b = a.prototype;
        b.addSample = function(a) {
            var b, c = Math.floor(Date.now() / (1e3 * this.$3)),
                d = c % this.$2;
            ((b = this.$1[d]) == null ? void 0 : b.bucketNumber) != c && (this.$1[d] = {
                bucketNumber: 0,
                val: null
            });
            this.$1[d] = {
                bucketNumber: c,
                val: Math.min(a, (b = this.$1[d].val) != null ? b : a)
            }
        };
        b.min = function() {
            var a = this,
                b = Date.now(),
                d = this.$1.filter(function(c) {
                    return c != null && c.val != null && b - a.$2 * 1e3 * a.$3 < c.bucketNumber * 1e3 * a.$3
                });
            if (d.length < this.$2) return null;
            d = d.reduce(function(a, b) {
                if (a == null) return b;
                var d = b.val;
                d != null || c("oz-player/shims/ozvariant")(0, 56011);
                var e = a.val;
                e != null || c("oz-player/shims/ozvariant")(0, 56011);
                return d < e ? b : a
            }, null);
            return d == null ? void 0 : d.val
        };
        b.reset = function() {
            this.$1 = []
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/playback_controls/OzLiveLatencyManager", ["oz-player/playback_controls/OzSteadyStateManager", "oz-player/shims/OzDOMEventListener", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozThrottle", "oz-player/utils/OzSourceBufferUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = this;
            this.$8 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$9 = null;
            this.$10 = !1;
            this.$11 = null;
            this.$12 = null;
            this.$13 = null;
            this.$14 = !0;
            var d = a.config,
                e = a.mpd,
                f = a.playbackState,
                g = a.bufferingDetector,
                h = a.video,
                i = a.loggerProvider;
            a = a.getUserSelectedPlaybackRate;
            this.$1 = d;
            this.$2 = e;
            this.$3 = f;
            this.$15 = a;
            d.getNumber("steadystate_minbuffer_buckets") > 0 && (this.$7 = new(c("oz-player/playback_controls/OzSteadyStateManager"))(this.$1.getNumber("steadystate_minbuffer_buckets"), this.$1.getNumber("steadystate_minbuffer_buckets_sec")));
            g != null && (this.$8.addSubscriptions(g.addListener("enterBuffering", function(a) {
                if (a === "in_play") {
                    b.$9 = 0;
                    (a = b.$7) == null ? void 0 : a.reset()
                }
                b.$10 = !1;
                (a = b.$6) == null ? void 0 : a.log();
                b.$6 = null
            })), this.$8.addSubscriptions(g.addListener("leaveBuffering", function() {
                b.$9 === 0 && (b.$9 = Date.now()), b.$10 = !1
            })));
            this.$4 = h;
            this.$5 = i;
            if (this.$16()) {
                this.$8.addSubscriptions((e = c("oz-player/shims/OzDOMEventListener")).listenDOMEvent(this.$4, "timeupdate", c("oz-player/shims/ozThrottle")(function() {
                    b.$17(), b.$18()
                }, this.$1.getNumber("playhead_manager_timeupdate_throttle_ms"))), e.listenDOMEvent(this.$4, "waiting", function() {
                    b.$17()
                }), e.listenDOMEvent(this.$4, "durationchange", function() {
                    b.$17()
                }), e.listenDOMEvent(this.$4, "seeking", function() {
                    var a;
                    b.$13 = Date.now();
                    b.$11 = null;
                    (a = b.$7) == null ? void 0 : a.reset()
                }), e.listenDOMEvent(this.$4, "playing", function() {
                    b.$13 = Date.now(), b.$11 = null
                }), e.listenDOMEvent(h, "pause", function() {
                    var a;
                    return (a = b.$7) == null ? void 0 : a.reset()
                }))
            }
        }
        var b = a.prototype;
        b.enabled = function() {
            var a = this.$1.getNumber("catchup_timeout_after_buffering_sec");
            return a === 0 || this.$9 == null || this.$9 !== 0 && this.$9 + a * 1e3 <= Date.now()
        };
        b.isBehindPreferredLiveHeadLatencyWithTolerance = function() {
            return this.$3.getCurrentTime() < this.getInitialPlayHeadPosition() - this.getPreferredLiveHeadLatencyToleranceSec()
        };
        b.$19 = function() {
            return this.$3.getCurrentTime() < this.getInitialPlayHeadPosition()
        };
        b.$20 = function() {
            var a;
            a = (a = this.$7) == null ? void 0 : a.min();
            return !this.$21() && a != null && a > this.$1.getNumber("steadystate_minbuffer_sec")
        };
        b.getInitialPlayHeadPosition = function() {
            return this.getLiveHeadTimeSec() - this.getPreferredLiveHeadLatencySec()
        };
        b.getLiveHeadTimeSec = function() {
            var a = this.$22();
            return (a == null ? void 0 : (a = a.getEndingSegment()) == null ? void 0 : a.getTimeRange().endTime) || 0
        };
        b.$21 = function() {
            return this.$9 != null && this.$1.getBool("latencymanager_stalled_edgelatency_sec_on")
        };
        b.getPreferredLiveHeadLatencySec = function() {
            var a = this.$21() ? this.$1.getNumber("latencymanager_stalled_edgelatency_sec") : this.$1.getNumber("pdash_download_cursor_catchup_threshold_sec");
            a = this.$23(a);
            this.$5.getOperationLogger("latency_manager").setPreferredEdgeLatency(a * 1e3);
            return a
        };
        b.getPreferredLiveHeadLatencyToleranceSec = function() {
            return this.$1.getNumber("pdash_download_cursor_catchup_tolerance_sec")
        };
        b.shouldEnableManifestTimeRangeCatchup = function() {
            return !this.$1.getNumber("pdash_download_cursor_catchup_threshold_sec")
        };
        b.shouldEnableCursorBasedCatchup = function() {
            var a = this.$2.getVideoRepresentations()[0];
            a = a && a.canPredict();
            return a && this.$1.getNumber("pdash_download_cursor_catchup_threshold_sec") > 0
        };
        b.setEnableCatchup = function(a) {
            var b = this.$14;
            !this.$14 && a === !0 && (this.$9 = null);
            this.$14 = a;
            this.$1.getBool("fix_live_rewind_user_selected_playback_speed") && a !== b && this.$18()
        };
        b.$24 = function(a, b, c) {
            var d = this.$1.getNumber("playback_speed_min_sharpness_factor");
            c = a * 2 / (1 + Math.pow(Math.E, -(c - b) * d));
            return 1 - a + c
        };
        b.$16 = function() {
            return this.$1.getNumber("playback_speed_latency_adjustment_rate") > 0 || this.$1.getNumber("playback_speed_latency_slowdown_adjustment_rate") > 0 || this.$1.getNumber("playback_speed_latency_speedup_adjustment_rate") > 0
        };
        b.$17 = function() {
            var a, b = d("oz-player/utils/OzSourceBufferUtil").getBufferAheadInBufferedRanges(d("oz-player/utils/OzSourceBufferUtil").convertToBufferedTimeRangeArray(this.$4.buffered), this.$3.getCurrentTime(), this.$1).bufferAheadSec;
            (a = this.$7) == null ? void 0 : a.addSample(b)
        };
        b.$18 = function() {
            var a = d("oz-player/utils/OzSourceBufferUtil").getBufferAheadInBufferedRanges(d("oz-player/utils/OzSourceBufferUtil").convertToBufferedTimeRangeArray(this.$4.buffered), this.$3.getCurrentTime(), this.$1),
                b = a.bufferAheadSec;
            a = a.bufferedOffset;
            this.$25(b, a)
        };
        b.$25 = function(a, b) {
            var c = this.$1.getNumber("playback_speed_enabled_delay_sec"),
                d = this.$1.getNumber("playback_speed_min_buffer_sec");
            a > d && (this.$10 = !0);
            var e = this.$1.getNumber("playback_speed_min_duration_sec"),
                f = this.$1.getNumber("playback_speed_restore_min_duration_sec"),
                g = this.$1.getNumber("playback_speed_latency_adjustment_rate"),
                h = this.$1.getNumber("playback_speed_latency_slowdown_adjustment_rate"),
                i = this.$1.getNumber("playback_speed_latency_speedup_adjustment_rate");
            if (this.$4.playbackRate === 0) {
                var j;
                (j = this.$6) == null ? void 0 : j.log();
                this.$6 = null
            } else if (this.$14 && this.$10 && a < d && (g > 0 || h > 0) && b === 0 && (c === 0 || this.$13 != null && this.$13 + c * 1e3 < Date.now())) {
                j = h > 0 ? 1 - h : this.$24(g, d, a);
                this.$6 == null && (this.$6 = this.$5.getOperationLogger("latency_manager").start().setInitiator("speed_adjustment").setReason("slow").setUserInfo({
                    newPlaybackRate: String(j),
                    oldPlaybackRate: String(this.$4.playbackRate)
                }));
                this.$26(j)
            } else if (this.$14 && this.$10 && (this.$19() || this.$20()) && i > 0 && b === 0 && (this.$12 == null || this.$12 + f * 1e3 < Date.now()) && (c === 0 || this.$13 != null && this.$13 + c * 1e3 < Date.now())) {
                h = 1 + i;
                this.$6 == null && (this.$6 = this.$5.getOperationLogger("latency_manager").start().setInitiator("speed_adjustment").setReason("fast").setUserInfo({
                    newPlaybackRate: String(h),
                    oldPlaybackRate: String(this.$4.playbackRate)
                }));
                this.$26(h)
            } else if (this.$14 === !1 || this.$11 == null || this.$11 + e * 1e3 < Date.now()) {
                g = this.$4.playbackRate;
                this.$1.getBool("fix_live_rewind_user_selected_playback_speed") ? this.$4.playbackRate = this.$14 === !1 ? this.$15() : 1 : this.$4.playbackRate = 1;
                (d = this.$6) == null ? void 0 : d.log();
                this.$6 = null;
                g !== this.$4.playbackRate && (this.$12 = Date.now())
            }
        };
        b.$26 = function(a) {
            try {
                this.$4.playbackRate = a, this.$11 = Date.now()
            } catch (b) {
                (a = this.$6) == null ? void 0 : a.setError(b).setResult("failed").log();
                this.$6 = null
            }
        };
        b.$22 = function() {
            var a = this.$2.getVideoRepresentations().concat(this.$2.getAudioRepresentations());
            return a.length === 0 ? null : a.reduce(function(a, b) {
                var c;
                return (((c = a.getEndingSegment()) == null ? void 0 : c.getTimeRange().endTime) || 0) > (((c = b.getEndingSegment()) == null ? void 0 : c.getTimeRange().endTime) || 0) ? a : b
            })
        };
        b.$23 = function(a) {
            var b;
            if (a <= 0) return a;
            var c = this.$22();
            b = c == null ? void 0 : (b = c.getEndingSegment()) == null ? void 0 : b.getTimeRange();
            if (!b) return a;
            c = c == null ? void 0 : (c = c.getSegmentByTime((b == null ? void 0 : b.endTime) - a)) == null ? void 0 : c.getTimeRange();
            return !c ? a : (b == null ? void 0 : b.endTime) - (c == null ? void 0 : c.startTime)
        };
        b.destroy = function() {
            this.$8.release()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/utils/OzBufferingUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    e = .1;
    var g = 1,
        h = .2;

    function a(a, b, c) {
        if (i(a, c)) return !0;
        c = a.currentTime;
        var d = 0;
        for (var e = 0; e < a.buffered.length; e++) {
            var f = a.buffered.start(e),
                g = a.buffered.end(e);
            if (f <= c && g >= c) {
                d = g;
                break
            }
        }
        return d - c > b
    }

    function i(a, b) {
        var c = a.currentTime,
            d = 0;
        for (var e = 0; e < a.buffered.length; e++) {
            var f = a.buffered.start(e),
                g = a.buffered.end(e);
            if (f <= c && g >= c) {
                d = g;
                break
            }
        }
        return Math.abs(d - b) <= h || Math.abs(c - b) <= h
    }

    function b(a, b) {
        a = a ? a.getSourceBufferState() : null;
        if (!a) return 0;
        b = b.getCurrentTime();
        return j(b, a.getBufferedRanges())
    }

    function j(a, b) {
        var c = null;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            e.startTime <= a && e.endTime > a && (c = e)
        }
        return !c ? 0 : c.endTime - a
    }

    function c(a) {
        var b = [];
        for (var c = 0; c < a.buffered.length; c++) b.push({
            rangeStart: a.buffered.start(c),
            rangeEnd: a.buffered.end(c)
        });
        return b
    }

    function d(a, b, c, d) {
        if (c.length === 0 || b.size === 0) return !1;
        var e = null;
        for (var f = 0; f < c.length; f++) {
            var g = c[f],
                h = b.get(g);
            if (l(a, 0, h)) {
                e = g;
                break
            }
        }
        if (e == null) return !1;
        var i = !0;
        b.forEach(function(c, b) {
            if (e === b) return;
            b = c.getBufferedRanges();
            b.forEach(function(b) {
                i = k(a, b, d, i)
            })
        });
        return !i
    }

    function k(a, b, c, d) {
        return a >= b.startTime && a < b.endTime + c ? !1 : d
    }

    function l(a, b, c) {
        b === void 0 && (b = 0);
        if (c) {
            c = c.getBufferedRanges();
            for (var d = 0; d < c.length; d++)
                if (c[d].startTime <= a && c[d].endTime > a && c[d].endTime - a > b) return !0
        }
        return !1
    }
    f.BUFFER_UNDERFLOW_THRESHOLD = e;
    f.BUFFER_OVERFLOW_THRESHOLD = g;
    f.BUFFER_FUDGE_FACTOR = h;
    f.hasEnoughBuffer = a;
    f.hasBufferedToOrReachedEnd = i;
    f.getBufferAheadFromPlaybackStates = b;
    f.getBufferAheadFromCurrentTime = j;
    f.getNumericalRangesFromSourceBuffer = c;
    f.hasEnoughPartialBuffer = d;
    f.hasBuffer = l
}), 66);
__d("oz-player/playback_controls/OzPlaybackTimeRangeManager", ["oz-player/shims/OzSubscriptionsHandler", "oz-player/utils/OzBufferingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = this;
            this.$4 = null;
            this.$5 = 0;
            this.$6 = 0;
            this.$7 = !0;
            this.$8 = 0;
            this.$9 = 0;
            this.$10 = !1;
            this.$12 = 0;
            this.$13 = 0;
            this.$15 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$17 = function() {
                b.$10 != b.$14.isPlaying() && (b.$14.isPlaying() && (b.$11 = Date.now()), b.$10 = b.$14.isPlaying())
            };
            var d = a.video,
                e = a.config,
                f = a.mpd,
                g = a.liveheadFallBehindBlockThreshold,
                h = a.liveheadFallBehindBlockMargin,
                i = a.playbackState;
            a = a.perfLoggerProvider;
            this.$1 = e;
            this.$2 = d;
            this.$3 = f;
            this.$8 = g;
            this.$9 = h;
            this.$14 = i;
            this.$16 = a;
            this.$1.getNumber("catchup_timeout_after_play_sec") !== 0 && this.$15.addSubscriptions(this.$14.addEventListener("play", this.$17), this.$14.addEventListener("pause", this.$17))
        }
        var b = a.prototype;
        b.setTimelineBlockingEnabled = function(a) {
            this.$7 = a, this.$7 || this.$3.unblockTimeRange()
        };
        b.setTimeRangeProvider = function(a) {
            var b = this;
            this.$4 != null && this.$4.remove();
            this.$4 = a.addUpdateListener(function() {
                var c = a.getTimeRanges(),
                    d = 0;
                if (c.length !== 0) {
                    c = c[c.length - 1];
                    d = c.endTime
                }
                b.$18(d)
            })
        };
        b.$18 = function(a) {
            var b;
            if (!this.$7) return;
            if (this.$5 === a) return;
            this.$5 = a;
            if (this.$2.currentTime <= this.$6) return;
            a = this.$1.getBool("catchup_use_timeline_range_end_time_as_end") ? a : this.$2.duration;
            var c = this.$1.getNumber("overwrite_livehead_fall_behind_block_threshold") !== 0 ? this.$1.getNumber("overwrite_livehead_fall_behind_block_threshold") : this.$8,
                e = this.$1.getNumber("overwrite_live_time_range_block_margin") !== 0 ? this.$1.getNumber("overwrite_live_time_range_block_margin") : this.$9;
            this.$17();
            this.$1.getBool("reset_catchup_timeout_after_play_sec_on_overwrite") && (this.$13 != e || this.$12 != c) && (this.$13 = e, this.$12 = c, this.$11 = Date.now());
            b = this.$1.getNumber("catchup_timeout_after_play_sec") === 0 || Date.now() - ((b = this.$11) != null ? b : 0) < this.$1.getNumber("catchup_timeout_after_play_sec") * 1e3;
            if (b && this.$1.getNumber("pdash_download_cursor_catchup_threshold_sec") === 0 && e !== 0 && c !== 0 && a - this.$2.currentTime > c) {
                b = [];
                for (c = 0; c < this.$2.buffered.length; c++) b.push({
                    startTime: this.$2.buffered.start(c),
                    endTime: this.$2.buffered.end(c)
                });
                c = d("oz-player/utils/OzBufferingUtils").getBufferAheadFromCurrentTime(this.$2.currentTime, b);
                this.$6 = this.$2.currentTime + Math.min(c, e);
                b = {
                    startTime: this.$6,
                    endTime: a - e
                };
                this.$16.getOperationLogger("latency_manager").setInitiator("time_range_manager").setReason("blocked_range").setLength(b.endTime - b.startTime).setUserInfo({
                    blockedRangeStart: String(b.startTime),
                    blockedRangeEnd: String(b.endTime)
                }).log();
                this.$3.blockTimeRange(b)
            }
        };
        b.destroy = function() {
            this.$4 != null && (this.$4.remove(), this.$4 = null), this.$15.release()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/strategies/LiveheadSeekaheadStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = .05;

    function a(a, b) {
        b = Math.max.apply(Math, b.map(function(a) {
            return a.startTime
        }));
        return b - a > 0 ? b - a + g : 0
    }
    f.computeSeekAhead = a
}), 66);
__d("oz-player/utils/OzTimelineGapUtil", ["oz-player/utils/OzNumericalHelper", "oz-player/utils/OzNumericalRangeUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1.5;

    function a(a, b, c, e) {
        b = b.map(function(a) {
            return {
                rangeStart: a.startTime,
                rangeEnd: a.endTime
            }
        });
        return d("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(c, a, b, e) === -1
    }

    function b(a, b, c, e, f) {
        f === void 0 && (f = h);
        var g = b.map(function(a) {
            return {
                rangeStart: a.startTime,
                rangeEnd: a.endTime
            }
        });
        c = d("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(c, a, g, e);
        if (c !== -1) {
            g = b[c];
            return d("oz-player/utils/OzNumericalHelper").lessThanOrEqual(a, g.endTime) && g.endTime - a < f
        }
        return !1
    }
    g.isInGap = a;
    g.isNearGap = b
}), 98);
__d("oz-player/playback_controls/OzPlayheadManager", ["oz-player/shims/OzDOMEventListener", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozThrottle", "oz-player/shims/ozvariant", "oz-player/strategies/LiveheadSeekaheadStrategy", "oz-player/utils/OzNumericalRangeUtil", "oz-player/utils/OzSourceBufferUtil", "oz-player/utils/OzTimelineGapUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
            function a(a) {
                this.$1 = a.perfLoggerProvider, this.$2 = a.video, this.$4 = a.config
            }
            var b = a.prototype;
            b.markState = function(a, b) {
                var c = d("oz-player/utils/OzSourceBufferUtil").convertToBufferedTimeRangeArray(this.$2.buffered),
                    e = this.$3;
                if (e == null) {
                    this.$3 = c;
                    return
                }
                var f = d("oz-player/utils/OzSourceBufferUtil").getBufferAheadInBufferedRanges(c, b.getCurrentTime(), this.$4);
                e = d("oz-player/utils/OzSourceBufferUtil").getBufferAheadInBufferedRanges(e, b.getCurrentTime(), this.$4);
                e.bufferedOffset !== -1 && f.bufferedOffset === -1 && this.$1.getOperationLogger("playhead_adjustment").setError("buffer_deleted").setResult("failed").setUserInfo({
                    vidSeeking: String(this.$2.seeking),
                    vidErrCode: this.$2.error ? String(this.$2.error.code) : null
                }).setInitiator(a).log();
                this.$3 = c
            };
            return a
        }(),
        i = function() {
            function a(a) {
                this.$5 = !1, this.$6 = {}, this.$1 = a.perfLoggerProvider, this.$2 = a.video
            }
            var b = a.prototype;
            b.markState = function(a, b) {
                var c = this;
                if (this.$2.paused) {
                    this.$3 = null;
                    this.$4 = null;
                    this.$5 = !1;
                    this.$6 = {};
                    return
                }(this.$3 == null || this.$2.currentTime > this.$3) && (this.$4 = Date.now(), this.$3 = this.$2.currentTime, this.$5 = !1, this.$6 = {});
                this.$6[a] = this.$6[a] == null ? 1 : this.$6[a] + 1;
                var d = this.$4;
                if (!this.$5 && !this.$2.paused && d != null && d + 1e4 < Date.now()) {
                    this.$5 = !0;
                    var e = {};
                    Object.keys(this.$6).forEach(function(a) {
                        e[a] = String(c.$6[a])
                    });
                    this.$1.getOperationLogger("playhead_adjustment").setError("not_advancing").setResult("failed").setLength(Date.now() - d).setUserInfo(babelHelpers["extends"]({}, e, b, {
                        lastCurrentTime: String(this.$3),
                        lastCurrentTimeChanged: String(d - Date.now()),
                        vidSeeking: String(this.$2.seeking),
                        vidErrCode: this.$2.error ? String(this.$2.error.code) : null
                    })).setInitiator(a).log()
                }
            };
            return a
        }();
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var e;
            e = a.call(this) || this;
            e.$OzPlayheadManager2 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            e.$OzPlayheadManager3 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            e.$OzPlayheadManager4 = new Set();
            e.$OzPlayheadManager10 = new Set();
            e.$OzPlayheadManager12 = function(a) {
                e.$OzPlayheadManager1.currentTime = a
            };
            e.$OzPlayheadManager14 = !1;
            e.$OzPlayheadManager15 = !1;
            e.$OzPlayheadManager16 = !0;
            e.$OzPlayheadManager17 = !1;
            e.$OzPlayheadManager23 = function(a, b) {
                b === void 0 && (b = null);
                if (e.$OzPlayheadManager20 != null ? !e.$OzPlayheadManager20.shouldEnableManifestTimeRangeCatchup() : !1) return;
                var c = e.$OzPlayheadManager9;
                if (c && c.isEnabled(e.$OzPlayheadManager1, e.$OzPlayheadManager8)) {
                    c = c.computeNewPlayheadPosition(e.$OzPlayheadManager1, e.$OzPlayheadManager8);
                    if (typeof c === "number") {
                        e.$OzPlayheadManager27(c, "live_catch_up_strategy", a, b);
                        return
                    }
                }
                c = e.$OzPlayheadManager6.getNumber("auto_seek_playhead_slack");
                if (c === 0) return;
                var f = e.$OzPlayheadManager5;
                if (!f) return;
                var g = e.$OzPlayheadManager7.getCurrentTime(),
                    h = f.getTimeRanges().map(function(a) {
                        return {
                            rangeStart: a.startTime,
                            rangeEnd: a.endTime
                        }
                    }),
                    i = d("oz-player/utils/OzNumericalRangeUtil").findNextRangeIndex(g, h);
                if ((d("oz-player/utils/OzTimelineGapUtil").isNearGap(g, f.getTimeRanges(), e.$OzPlayheadManager6) || d("oz-player/utils/OzTimelineGapUtil").isInGap(g, f.getTimeRanges(), e.$OzPlayheadManager6)) && i !== -1) {
                    g = h[i];
                    e.$OzPlayheadManager27(g.rangeStart + c, "jump_over_timeline_gap", a, b)
                }
            };
            var f = b.video,
                g = b.mpd,
                j = b.playheadCatchup,
                k = b.playbackState,
                l = b.config,
                m = b.perfLoggerProvider,
                n = b.seekHandler,
                o = b.initialPlaybackPosition,
                p = b.canSupportSkipVideobufferGaps,
                q = b.liveLatencyManager;
            b = b.dynamicVideoLibrary;
            e.$OzPlayheadManager1 = f;
            e.$OzPlayheadManager6 = l;
            e.$OzPlayheadManager7 = k;
            e.$OzPlayheadManager8 = g;
            e.$OzPlayheadManager9 = j;
            e.$OzPlayheadManager11 = m;
            n && (e.$OzPlayheadManager12 = n);
            e.$OzPlayheadManager17 = p;
            e.$OzPlayheadManager20 = q;
            e.$OzPlayheadManager13 = o;
            e.$OzPlayheadManager21 = b;
            e.$OzPlayheadManager18 = new i({
                video: f,
                perfLoggerProvider: m
            });
            e.$OzPlayheadManager19 = new h({
                video: f,
                perfLoggerProvider: m,
                config: l
            });
            e.$OzPlayheadManager2.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(e.$OzPlayheadManager1, "durationchange", function() {
                e.setPlaybackPositionOnFirstDurationChange("durationchange", e.$OzPlayheadManager1.duration), e.$OzPlayheadManager23("durationchange"), e.$OzPlayheadManager24("durationchange")
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(e.$OzPlayheadManager1, "pause", function() {
                e.$OzPlayheadManager23("pause")
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(e.$OzPlayheadManager1, "play", function() {
                e.$OzPlayheadManager23("play")
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(e.$OzPlayheadManager1, "playing", function() {
                e.$OzPlayheadManager23("playing")
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(e.$OzPlayheadManager1, "waiting", function() {
                e.$OzPlayheadManager23.bind(babelHelpers.assertThisInitialized(e), "waiting"), e.$OzPlayheadManager24("waiting")
            }), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(e.$OzPlayheadManager1, "timeupdate", c("oz-player/shims/ozThrottle")(function() {
                e.$OzPlayheadManager23("timeupdate"), e.$OzPlayheadManager6.getBool("playhead_manager_buffered_timerange_update_on_timeupdate") && e.$OzPlayheadManager24("timeupdate")
            }, e.$OzPlayheadManager6.getNumber("playhead_manager_timeupdate_throttle_ms"))), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(e.$OzPlayheadManager1, "seeking", function() {
                e.$OzPlayheadManager22 = Date.now()
            }));
            return e
        }
        var e = b.prototype;
        e.$OzPlayheadManager25 = function() {
            return this.$OzPlayheadManager1.playbackRate === 0
        };
        e.observeSourceBufferState = function(a, b) {
            var d = this;
            this.$OzPlayheadManager4.has(a) && c("oz-player/shims/ozvariant")(0, 4179);
            this.$OzPlayheadManager4.add(a);
            this.$OzPlayheadManager2.addSubscriptions(a.addEventListener("buffer_updated", function() {
                d.$OzPlayheadManager26(a, b), d.$OzPlayheadManager6.getBool("skip_videobuffer_gaps_on_buffer_updated") && d.$OzPlayheadManager17 && d.$OzPlayheadManager24("buffer_updated")
            }))
        };
        e.$OzPlayheadManager26 = function(a, b) {
            var c = [];
            this.$OzPlayheadManager4.forEach(function(a) {
                a = a.getBufferedRanges();
                a.length && c.push(a[0])
            });
            c.length > 0 && this.$OzPlayheadManager10.add(a);
            a = this.$OzPlayheadManager1.currentTime;
            a = d("oz-player/strategies/LiveheadSeekaheadStrategy").computeSeekAhead(a, c);
            var e = this.$OzPlayheadManager6.getNumber("timeline_offset_threshold");
            a > 0 && (e === 0 || a < e) && this.$OzPlayheadManager27(this.$OzPlayheadManager1.currentTime + a, "first_available_buffer", "source_buffer", b)
        };
        e.setTimeRangeProvider = function(a) {
            var b = this;
            this.$OzPlayheadManager3.release();
            this.$OzPlayheadManager3.engage();
            this.$OzPlayheadManager3.addSubscriptions(a.addUpdateListener(function() {
                b.$OzPlayheadManager23("time_range_updated")
            }));
            this.$OzPlayheadManager5 = a;
            this.$OzPlayheadManager23("time_range_set")
        };
        e.resetCurrentTime = function() {
            this.$OzPlayheadManager15 = !1, this.setPlaybackPositionOnFirstDurationChange("reset", this.$OzPlayheadManager1.duration)
        };
        e.setPlaybackPositionOnFirstDurationChange = function(a, b) {
            if (this.$OzPlayheadManager13 !== 0 && !this.$OzPlayheadManager15 && !isNaN(b) && b !== Infinity) {
                b = this.$OzPlayheadManager13 > 0 ? this.$OzPlayheadManager13 : b + this.$OzPlayheadManager13;
                if (this.$OzPlayheadManager20 != null) {
                    var c;
                    b = (c = this.$OzPlayheadManager20) == null ? void 0 : c.getInitialPlayHeadPosition()
                }
                this.$OzPlayheadManager15 = !0;
                if (this.$OzPlayheadManager6.getBool("playhead_manager_clamp_initial_playback_position")) {
                    c = (c = this.$OzPlayheadManager5) == null ? void 0 : c.getTimeRanges();
                    c != null && c.length > 0 && c[0].startTime > b && (b = c[0].startTime)
                }
                this.$OzPlayheadManager27(b, "initial_playback_position", a);
                this.emit("initialPlaybackPositionSet", b)
            }
        };
        e.$OzPlayheadManager24 = function(a) {
            var b, c, e = this;
            if (!this.$OzPlayheadManager6.getBool("skip_videobuffer_gaps")) return;
            if (!this.$OzPlayheadManager17) return;
            var f = this.$OzPlayheadManager6.getNumber("playhead_manager_buffered_auto_seek_playhead_slack");
            if (f === 0) return;
            var g = this.$OzPlayheadManager7.getCurrentTime(),
                h = [];
            for (var i = 0; i < this.$OzPlayheadManager1.buffered.length; i++) h.push({
                startTime: this.$OzPlayheadManager1.buffered.start(i),
                endTime: this.$OzPlayheadManager1.buffered.end(i)
            });
            i = h.map(function(a) {
                return {
                    rangeStart: a.startTime,
                    rangeEnd: a.endTime
                }
            });
            this.$OzPlayheadManager19 && this.$OzPlayheadManager19.markState(a, this.$OzPlayheadManager7);
            var j = d("oz-player/utils/OzNumericalRangeUtil").findNextRangeIndex(g, i),
                k = d("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(this.$OzPlayheadManager6, g, i),
                l = this.$OzPlayheadManager16 ? 0 : this.$OzPlayheadManager6.getNumber("skip_videobuffer_gaps_max_gap_size_sec"),
                m = this.$OzPlayheadManager6.getNumber("playhead_manager_buffered_is_near_gap_threshold"),
                n = this.$OzPlayheadManager6.getNumber("playhead_manager_buffered_numerical_error");
            b = (b = this.$OzPlayheadManager21) == null ? void 0 : b.getLastSegmentStartPTS();
            var o = b != null ? b / 1e3 : null,
                p = (c = this.$OzPlayheadManager21) == null ? void 0 : c.getLast200RequestedUrlDecisionMinTime();
            c = o != null ? d("oz-player/utils/OzNumericalRangeUtil").findCurrentRangeIndex(this.$OzPlayheadManager6, o, i) : -1;
            var q = c >= 0 ? i[c] : null,
                r = function(b) {
                    var c = e.$OzPlayheadManager22 == null || p == null || e.$OzPlayheadManager22 < p;
                    !c && b != null && e.$OzPlayheadManager11.getOperationLogger("playhead_adjustment").setError("ignore_before_seek_main_" + b).setResult("failed").setInitiator(a).setUserInfo({
                        last200RequestedUrlDecisionMinTime: String(p),
                        lastSeekTime: String(e.$OzPlayheadManager22)
                    }).log();
                    return c
                };
            if (o != null && this.$OzPlayheadManager25() && this.$OzPlayheadManager16 == !1 && r("buf")) {
                if (o < g && q != null && q.rangeStart <= o && q.rangeEnd != null && q.rangeEnd > o) {
                    this.$OzPlayheadManager27(o, "reverse_jump_over_buffer_gap", a, null, {
                        lastSegmentStartPTS: String(b),
                        last200RequestedUrlDecisionMinTime: String(p),
                        lastSeekTime: String(this.$OzPlayheadManager22)
                    });
                    return
                }
                if (q != null && c != k) {
                    this.$OzPlayheadManager27(q.rangeStart, "jump_over_buffer_gap_last_dl_range", a, null, {
                        lastSegmentStartPTS: String(b),
                        last200RequestedUrlDecisionMinTime: String(p),
                        lastSeekTime: String(this.$OzPlayheadManager22)
                    });
                    return
                }
            }
            if ((d("oz-player/utils/OzTimelineGapUtil").isNearGap(g, h, this.$OzPlayheadManager6, n, m) || d("oz-player/utils/OzTimelineGapUtil").isInGap(g, h, this.$OzPlayheadManager6, n)) && j !== -1 && (l === 0 || i[j].rangeStart - g < l) && (this.$OzPlayheadManager16 == !0 || r("main"))) {
                o = i[j];
                this.$OzPlayheadManager27(o.rangeStart + f, "jump_over_buffer_gap", a, null, {
                    lastSegmentStartPTS: String(b),
                    last200RequestedUrlDecisionMinTime: String(p),
                    lastSeekTime: String(this.$OzPlayheadManager22)
                });
                return
            }
            this.$OzPlayheadManager18 && this.$OzPlayheadManager18.markState(a, {
                nextBufferedRangeIndex: String(j),
                limitMaxGapSize: String(l),
                rangeStart: j !== -1 ? String(i[j].rangeStart) : null,
                isNearGapThreshold: String(m),
                numericalError: String(n)
            })
        };
        e.setEnableLiveheadCatchup = function(a) {
            this.$OzPlayheadManager16 = a
        };
        e.destroy = function() {
            this.$OzPlayheadManager2.release(), this.$OzPlayheadManager3.release(), this.$OzPlayheadManager4.clear()
        };
        e.$OzPlayheadManager27 = function(a, b, c, d, e) {
            var f = a - this.$OzPlayheadManager1.currentTime,
                g = this.$OzPlayheadManager6.getNumber("seek_ahead_epsilon");
            if (g > 0 && Math.abs(f) <= g) return;
            this.$OzPlayheadManager11.getOperationLogger("playhead_adjustment").setLength(Math.round(a * 1e3)).setReason(b).setInitiator(c).setType(d).setUserInfo(babelHelpers["extends"]({}, e, {
                seekAdjustment: String(Math.round(f * 1e3))
            })).log();
            this.$OzPlayheadManager12(a);
            b === "initial_playback_position" && (this.$OzPlayheadManager14 = !0)
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/shims/www/OzUuidWWW", ["uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("uuidv4")
}), 98);
__d("oz-player/shims/OzUuid", ["oz-player/shims/www/OzUuidWWW"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/shims/www/OzUuidWWW")
}), 98);
__d("oz-player/states/OzObservedPlaybackState", ["oz-player/loggings/OzMultiDestinationPerfLogger", "oz-player/shims/OzDOMEventListener", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, e) {
            var f = this;
            e === void 0 && (e = new(d("oz-player/loggings/OzMultiDestinationPerfLogger").OzMultiDestinationPerfLoggerProvider)([]));
            this.$2 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$4 = function() {
                f.$3.getOperationLogger("pause").setState("paused").log()
            };
            this.$5 = function() {
                f.$3.getOperationLogger("playing").setState("playing").log()
            };
            this.$1 = b;
            this.$3 = e;
            this.$2.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "pause", this.$4), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, "playing", this.$5))
        }
        var b = a.prototype;
        b.isPlaying = function() {
            return !this.$1.paused
        };
        b.getCurrentTime = function() {
            return this.$1.currentTime
        };
        b.getCurrentTimeUpdateTime = function() {
            return Date.now()
        };
        b.getDuration = function() {
            return this.$1.duration
        };
        b.addEventListener = function(a, b) {
            return c("oz-player/shims/OzDOMEventListener").listenDOMEvent(this.$1, a, b)
        };
        b.destroy = function() {
            this.$2.release()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/utils/OzPositionToViewportUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        b = b.filter(function(a) {
            a = a.position;
            if (a == null) return !1;
            var b = a.y - window.scrollY;
            return b >= 0 || (a.height + b) / a.height > c
        }).sort(function(a, b) {
            return a.position == null || b.position == null ? 0 : a.position.y - b.position.y
        });
        return b.findIndex(function(b) {
            return b.video === a
        })
    }
    f.determinePositionIndexOfVideoFromViewportVertically = a
}), 66);
__d("oz-player/states/OzPositionToViewportTracker", ["oz-player/shims/OzEventEmitter", "oz-player/utils/OzPositionToViewportUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
        i = .5;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this) || this;
            c.$OzPositionToViewportTracker1 = [];
            c.$OzPositionToViewportTracker5 = function(a) {
                a.forEach(function(a) {
                    var b = c.$OzPositionToViewportTracker1.find(function(b) {
                        return a.target === b.video
                    });
                    b != null && (a.isIntersecting ? b.position = c.$OzPositionToViewportTracker7(a) : c.$OzPositionToViewportTracker1.map(function(b) {
                        a.target === b.video && (b.position = null)
                    }));
                    c.$OzPositionToViewportTracker1.forEach(function(a) {
                        a.positionIndexToViewportVertically = c.$OzPositionToViewportTracker6(a.video)
                    })
                }), c.emit("state_changed")
            };
            c.$OzPositionToViewportTracker2 = b;
            return c
        }
        var c = b.prototype;
        c.$OzPositionToViewportTracker4 = function() {
            if (this.$OzPositionToViewportTracker3 != null) return;
            this.$OzPositionToViewportTracker3 = new IntersectionObserver(this.$OzPositionToViewportTracker5, {
                rootMargin: this.$OzPositionToViewportTracker2.getNumber("pixels_above_viewport_to_observe") + "px 0px " + this.$OzPositionToViewportTracker2.getNumber("pixels_below_viewport_to_observe") + "px 0px",
                threshold: 0
            })
        };
        c.registerVideo = function(a) {
            this.$OzPositionToViewportTracker1.push({
                video: a,
                position: null,
                positionIndexToViewportVertically: -1
            }), this.$OzPositionToViewportTracker4(), this.$OzPositionToViewportTracker3 != null && this.$OzPositionToViewportTracker3.observe(a)
        };
        c.getPositionIndexOfVideoFromViewportVertically = function(a) {
            var b = this.$OzPositionToViewportTracker1.find(function(b) {
                return b.video === a
            });
            return b != null ? b.positionIndexToViewportVertically : -1
        };
        c.$OzPositionToViewportTracker6 = function(a) {
            return d("oz-player/utils/OzPositionToViewportUtils").determinePositionIndexOfVideoFromViewportVertically(a, this.$OzPositionToViewportTracker1, i)
        };
        c.$OzPositionToViewportTracker7 = function(a) {
            a = a.boundingClientRect;
            return {
                x: a.x + window.scrollX,
                y: a.y + window.scrollY,
                width: a.width,
                height: a.height
            }
        };
        b.getInstance = function(a) {
            h == null && (h = new b(a));
            return h
        };
        c.unregisterVideo = function(a) {
            var b = this,
                c = [];
            this.$OzPositionToViewportTracker1.forEach(function(d) {
                d.video === a && b.$OzPositionToViewportTracker3 != null ? b.$OzPositionToViewportTracker3.unobserve(a) : c.push(d)
            });
            this.$OzPositionToViewportTracker1 = c;
            this.$OzPositionToViewportTracker1.length === 0 && this.$OzPositionToViewportTracker3 != null && (this.$OzPositionToViewportTracker3.disconnect(), this.$OzPositionToViewportTracker3 = null)
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/states/OzPositionToViewport", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler", "oz-player/states/OzPositionToViewportTracker"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            var e;
            e = a.call(this) || this;
            e.$OzPositionToViewport1 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            e.$OzPositionToViewport3 = b;
            e.$OzPositionToViewport2 = c("oz-player/states/OzPositionToViewportTracker").getInstance(d);
            e.$OzPositionToViewport2.registerVideo(b);
            e.$OzPositionToViewport1.addSubscriptions(e.$OzPositionToViewport2.addListener("state_changed", function() {
                e.emit("state_changed")
            }));
            return e
        }
        var d = b.prototype;
        d.getPositionIndexOfVideoFromViewportVertically = function() {
            return this.$OzPositionToViewport3 != null ? this.$OzPositionToViewport2.getPositionIndexOfVideoFromViewportVertically(this.$OzPositionToViewport3) : -1
        };
        d.destroy = function() {
            this.$OzPositionToViewport3 != null && this.$OzPositionToViewport2.unregisterVideo(this.$OzPositionToViewport3), this.$OzPositionToViewport3 = null
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzPlaybackConfidenceUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = .8;

    function a(a, b, c, d, e, f) {
        f = Math.min(1, c / d);
        c = 1 + (1 - f) * e;
        d = a.getBandwidth() * c;
        return d > b ? g * (b / d) : 1 - (1 - g) * d / b
    }
    f.getPlaybackConfidence = a
}), 66);
__d("oz-player/utils/OzAbrUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b, c, d) {
        var e = a.getNumber("resolution_constraint_factor");
        if (e === 0) return b;
        var f = b.filter(function(b) {
            var f = b.getWidth() <= c.width * d * e;
            b = b.getHeight() <= c.height * d * e;
            return a.getBool("use_strict_resolution_constraint") ? f && b : f || b
        });
        return !f.length ? [b[0]] : f
    };
    b = function(a, b, c, d, e, f) {
        b = b ? a.getNumber("min_switch_interval") : a.getNumber("initial_switch_interval");
        d = d >= a.getNumber("abr_min_bandwidth_samples");
        var g = a.getNumber("abr_eval_buffer_threshold");
        c = !g || c >= g;
        g = null;
        e + a.getNumber("min_eval_interval") > Date.now() ? g = "min_eval_interval" : f + b > Date.now() ? g = "min_switch_interval" : !d ? g = "min_bandwidth_samples" : c || (g = "buffer_threshold_not_satisfied");
        return g
    };
    f.excludeLargeRepresentations = a;
    f.getReasonToPreventEvaluation = b
}), 66);
__d("oz-player/utils/OzPlaybackRestrictionsUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a, b) {
        return a.getBandwidth() - b.getBandwidth()
    };
    a = function(a, b, c, d) {
        if (d.length === 0) return [];
        d.sort(g);
        a = b.reduce(function(a, b) {
            return b.applyRestriction(a, c)
        }, d);
        return a
    };
    f.applyVideoPlaybackRestrictions = a
}), 66);
__d("oz-player/strategies/OzAbrManager", ["oz-player/networks/OzBandwidthEstimator", "oz-player/strategies/OzPlaybackConfidenceUtils", "oz-player/utils/OzAbrUtils", "oz-player/utils/OzBufferingUtils", "oz-player/utils/OzPlaybackRestrictionsUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, c, d, e, f, g, h) {
            this.$2 = 0, this.$3 = Date.now(), this.$4 = !1, this.$10 = null, this.$1 = a, this.$5 = b, this.$6 = this.$14(b, c), this.$7 = d, this.$8 = e, this.$11 = f, this.$12 = g, this.$13 = h
        }
        var b = a.prototype;
        b.setSourceBuffer = function(a) {
            this.$9 = a
        };
        b.$14 = function(a, b) {
            var c = this.$1.getNumber("abr_restrict_from_index"),
                d = this.$1.getNumber("abr_restrict_to_index");
            if (d === 0 && c === 0) return b;
            var e = b.findIndex(function(b) {
                return a.getID() === b.getID()
            });
            return e === -1 ? b : b.filter(function(a, b) {
                return b - e >= c && b - e <= d
            })
        };
        b.$15 = function(a) {
            a = d("oz-player/utils/OzAbrUtils").excludeLargeRepresentations(this.$1, a, this.$12(), this.$11);
            a = d("oz-player/utils/OzPlaybackRestrictionsUtils").applyVideoPlaybackRestrictions(this.$1, this.$7, this.$12(), a);
            return a
        };
        b.getBestRepresentation = function(a) {
            a = (a = a == null ? void 0 : a.length) != null ? a : null;
            var b = d("oz-player/utils/OzBufferingUtils").getBufferAheadFromPlaybackStates(this.$9, this.$8),
                e = d("oz-player/utils/OzAbrUtils").getReasonToPreventEvaluation(this.$1, this.$4, b, c("oz-player/networks/OzBandwidthEstimator").getSampleCount(), this.$2, this.$3);
            if (e != null) {
                this.$10 = e;
                return this.$5
            }
            e = Date.now();
            this.$2 = e;
            var f = c("oz-player/networks/OzBandwidthEstimator").getAdjustedBandwidth(this.$1.getLegacyConfig()),
                g = this.$15(this.$6);
            f = this.$16(g, f, b, a);
            a = g[0];
            f = f || a;
            if (this.$17(b, f)) {
                this.$10 = "high_buffer";
                return this.$5
            }
            this.$5 !== f && (this.$4 = !0, this.$3 = e, this.$5 = f);
            this.$10 = "bandwidth";
            return f
        };
        b.$16 = function(a, b, c, e) {
            e === void 0 && (e = null);
            var f = null;
            for (var g = 0; g < a.length; g++) {
                var h = d("oz-player/strategies/OzPlaybackConfidenceUtils").getPlaybackConfidence(a[g], b, c, this.$1.getNumber("low_buffer_bandwidth_target_threshold"), this.$1.getNumber("low_buffer_bandwidth_target_increase_factor"), e);
                h > this.$1.getNumber("abr_confidence_threshold") && (!f || f.getBandwidth() < a[g].getBandwidth()) && (f = a[g])
            }
            return f
        };
        b.$17 = function(a, b) {
            var c = this.$1.getNumber("abr_prevent_down_switch_buffer_threshold");
            return c > 0 && a >= c && this.$5.getBandwidth() > b.getBandwidth() ? !0 : !1
        };
        b.getLastEvaluationReason = function() {
            return this.$10
        };
        b.updateRepresentations = function(a) {
            var b = this;
            this.$6 = a;
            a = this.$6.find(function(a) {
                return a.getDisplayLabel() === b.$5.getDisplayLabel()
            });
            this.$5 = (a = a) != null ? a : this.$6[0]
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/strategies/getSegmentsCount", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c, d) {
        var e = 0,
            f = a.getTimeRange().startTime;
        a = a;
        var g = a.getTimeRange().startTime;
        while (a !== null && g < c + f) {
            var h = g;
            e++;
            a = b.getSegmentAfter(a);
            if (a) g = a.getTimeRange().startTime;
            else break;
            if (g <= h) return d
        }
        return Math.max(e, 1)
    }
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzStaticStreamSegmentsStrategy", ["oz-player/strategies/getSegmentsCount"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.isActive = function() {
            return !0
        };
        b.getSegmentsCount = function(a, b, d) {
            a = this.$1.getNumber("seconds_to_stream");
            var e = this.$1.getNumber("segments_to_stream");
            a > 0 && (e = c("oz-player/strategies/getSegmentsCount")(b, d, a, e));
            return e
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy", ["oz-player/networks/OzBandwidthEstimator", "oz-player/strategies/OzStaticStreamSegmentsStrategy", "oz-player/strategies/getSegmentsCount"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b, this.$3 = new(c("oz-player/strategies/OzStaticStreamSegmentsStrategy"))(a)
        }
        var b = a.prototype;
        b.isActive = function(a) {
            return !0
        };
        b.getSegmentsCount = function(a, b, d) {
            var e = c("oz-player/networks/OzBandwidthEstimator").getBandwidth(this.$1.getLegacyConfig()),
                f = c("oz-player/networks/OzBandwidthEstimator").getStandardDeviationOfBandwidth(),
                g = this.$1.getNumber("bandwidth_boundary_standard_deviation_factor"),
                h = this.$2.some(function(a) {
                    a = a.getBandwidth();
                    return Math.abs(a - e) < f * g
                });
            h = h ? this.$4(a, b, d) : this.$3.getSegmentsCount(a, b, d);
            a = this.$5(b, e);
            return Math.min(h, a)
        };
        b.$4 = function(a, b, d) {
            a = this.$1.getNumber("seconds_to_stream_near_bandwidth_boundary");
            var e = this.$1.getNumber("segments_to_stream_near_bandwidth_boundary");
            a > 0 && (e = c("oz-player/strategies/getSegmentsCount")(b, d, a, e));
            return e
        };
        b.$5 = function(a, b) {
            var c = Infinity;
            a = a.getByteRange();
            if (a) {
                var d = a.endByte;
                if (d != null) {
                    var e = this.$1.getNumber("per_stream_duration_target");
                    d = d - a.startByte;
                    e > 1e-5 && d !== 0 && (c = Math.ceil(e * b / (d * 8)))
                }
            }
            return c
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzBlockedRepresentationsManager", ["oz-player/shims/OzEventEmitter", "oz-player/shims/ozClearTimeout", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/utils/OzError"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$2 = new Map(), this.$3 = new Set(), this.$4 = new Set(), this.$5 = new(c("oz-player/shims/OzEventEmitter"))(), this.$6(a), this.$7(a)
        }
        var b = a.prototype;
        b.isBlocked = function(a) {
            return this.$3.has(a)
        };
        b.handleError = function(a, b) {
            if (this.$1 != null && this.$3.size === this.$1 - 1) return !1;
            if (b instanceof c("oz-player/utils/OzError") && b.getType() === "OZ_NETWORK") {
                b = Number(b.getExtra().code);
                if (!isNaN(b) && this.$2.has(b)) {
                    this.$3.has(a) || this.$8(a, b);
                    return !0
                }
            }
            return !1
        };
        b.$8 = function(a, b) {
            var d, e = this;
            this.$3.add(a);
            (d = this.$5) == null ? void 0 : d.emit("representation_blocked", a);
            d = this.$2.get(b) || 0;
            if (d > 0) {
                var f = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(function() {
                    e.$3["delete"](a), e.$4["delete"](f)
                }, d);
                this.$4.add(f)
            }
        };
        b.applyRestriction = function(a, b) {
            var c = this;
            return a.filter(function(a) {
                return !c.$3.has(a.getID())
            })
        };
        b.onRepresentationBlocked = function(a) {
            return this.$5 ? this.$5.addListener("representation_blocked", a) : {
                remove: function() {}
            }
        };
        b.setAvailableRepresentationsCount = function(a) {
            this.$1 = a
        };
        b.destroy = function() {
            var a;
            (a = this.$5) == null ? void 0 : a.removeAllListeners();
            this.$5 = null;
            for (var a = this.$4, b = Array.isArray(a), d = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (b) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                c("oz-player/shims/ozClearTimeout")(e)
            }
            this.$4.clear()
        };
        b.$6 = function(a) {
            var b = this;
            try {
                a = JSON.parse(a.getString("block_representation_status_codes_json"));
                Array.isArray(a) && a.forEach(function(a) {
                    a = parseInt(a, 10);
                    isNaN(a) || b.$2.set(a, -1)
                })
            } catch (a) {}
        };
        b.$7 = function(a) {
            var b = this;
            try {
                a = JSON.parse(a.getString("block_representation_status_codes_temporarily_json"));
                Object.entries(a).forEach(function(a) {
                    var c = a[0];
                    a = a[1];
                    c = parseInt(c, 10);
                    a = parseInt(a, 10);
                    !isNaN(c) && !isNaN(a) && b.$2.set(c, a)
                })
            } catch (a) {}
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzBufferAheadPriorityStrategy", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozThrottle", "oz-player/utils/OzBufferingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 6,
        i = 1e3;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            var e;
            e = a.call(this) || this;
            e.$OzBufferAheadPriorityStrategy3 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            e.$OzBufferAheadPriorityStrategy5 = function() {
                e.emit("state_changed")
            };
            e.$OzBufferAheadPriorityStrategy4 = b;
            e.$OzBufferAheadPriorityStrategy1 = d;
            e.$OzBufferAheadPriorityStrategy3.addSubscriptions(e.$OzBufferAheadPriorityStrategy1.addEventListener("progress", c("oz-player/shims/ozThrottle")(e.$OzBufferAheadPriorityStrategy5, i)), e.$OzBufferAheadPriorityStrategy1.addEventListener("timeupdate", c("oz-player/shims/ozThrottle")(e.$OzBufferAheadPriorityStrategy5, i)));
            return e
        }
        var e = b.prototype;
        e.getName = function() {
            return "buffer_ahead"
        };
        e.setSourceBufferState = function(a) {
            if (this.$OzBufferAheadPriorityStrategy2) return;
            this.$OzBufferAheadPriorityStrategy2 = a;
            this.$OzBufferAheadPriorityStrategy3.addSubscriptions(a.addEventListener("buffer_updated", c("oz-player/shims/ozThrottle")(this.$OzBufferAheadPriorityStrategy5, i)))
        };
        e.isActive = function() {
            return !0
        };
        e.getPriority = function() {
            var a = this.$OzBufferAheadPriorityStrategy2;
            if (!a) return 1;
            var b = this.$OzBufferAheadPriorityStrategy1.getCurrentTime();
            a = a.getBufferedRanges();
            b = d("oz-player/utils/OzBufferingUtils").getBufferAheadFromCurrentTime(b, a);
            return b >= h ? 0 : 1
        };
        e.destroy = function() {
            this.$OzBufferAheadPriorityStrategy3.release()
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzBufferAheadTargetStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.isActive = function() {
            return !0
        };
        b.getBufferTarget = function() {
            return this.$1.getNumber("buffer_ahead_target")
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzBufferEndLimitStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.isActive = function() {
            return !0
        };
        b.getBufferTarget = function() {
            var a = this.$3();
            return this.$2 >= a ? this.$2 - a : 0
        };
        b.$3 = function() {
            return this.$1.buffered.length === 0 ? 0 : this.$1.buffered.end(0)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.isActive = function(a) {
            return !a.isPlaying()
        };
        b.getSegmentsCount = function(a, b, c) {
            a = a.getCurrentTime();
            var d = this.$1.computeBufferTarget(),
                e = 1,
                f = b;
            b = b.getTimeRange().startTime;
            while (f !== null && b < d + a) {
                f = c.getSegmentAfter(f);
                if (!f) break;
                b = f.getTimeRange().startTime;
                e++
            }
            return e
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzBufferTargetCalculator", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = 0, this.$2 = a, this.$3 = b
        }
        var b = a.prototype;
        b.computeBufferTarget = function() {
            var a = this.$1;
            for (var b = this.$2, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                if (e.isActive()) {
                    a = e.getBufferTarget();
                    break
                }
            }
            for (e = this.$3, d = Array.isArray(e), c = 0, e = d ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (d) {
                    if (c >= e.length) break;
                    b = e[c++]
                } else {
                    c = e.next();
                    if (c.done) break;
                    b = c.value
                }
                b = b;
                a = b.adjustBufferTargetInSeconds(a)
            }
            this.$1 = a;
            return a
        };
        b.handleEvent = function(a) {
            for (var b = this.$3, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                e.handleEvent(a)
            }
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.config;
            a = a.minimumBufferTargetSec;
            this.$2 = 1;
            this.$1 = b;
            this.$3 = a
        }
        var b = a.prototype;
        b.adjustBufferTargetInSeconds = function(a) {
            var b;
            return Math.max((b = this.$3) != null ? b : this.$1.getNumber("buffer_target_constraint_minimum_sec"), a * this.$2)
        };
        b.handleEvent = function(a) {
            var b = this.$2;
            switch (a) {
                case "append_succeeded":
                    b = Math.max(0, Math.min(1, b + this.$1.getNumber("buffer_target_constraint_append_succeeded_reward")));
                    break;
                case "append_quota_exceeded":
                    b = Math.max(0, Math.min(1, b - this.$1.getNumber("buffer_target_constraint_quota_exceeded_penalty")));
                    break;
                default:
                    a
            }
            this.$2 = b
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzBufferingDetectorStates", ["oz-player/utils/OzBufferingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
            function a(a, b, c) {
                this.$1 = a, this.$2 = b, this.$3 = c
            }
            var b = a.prototype;
            b.handleEvent = function(a, b, c) {
                if (a.type === "pause" || b.paused) return new i(this.$1, this.$2);
                a = this.$3 instanceof j ? this.$1.getInPlayBufferOverflowTarget() : this.$1.getStartBufferUnderflowTarget();
                return d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(b, a, c) ? new j(this.$1, this.$2) : this
            };
            return a
        }(),
        i = function() {
            function a(a, b) {
                this.$1 = a, this.$2 = b
            }
            var b = a.prototype;
            b.handleEvent = function(a, b, c) {
                return a.type === "play" || a.type === "playing" || !b.paused ? d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(b, this.$1.getStartBufferUnderflowTarget(), c) ? new j(this.$1, this.$2) : new h(this.$1, this.$2, this) : this
            };
            return a
        }(),
        j = function() {
            function a(a, b) {
                this.$1 = a, this.$2 = b, this.$3 = b.getString("stream_types_eligible_for_partial_playback", "").split(",")
            }
            var b = a.prototype;
            b.handleEvent = function(a, b, c, e) {
                e === void 0 && (e = new Map());
                if (a.type === "pause" || b.paused) return new i(this.$1, this.$2);
                return !d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(b, this.$1.getInPlayBufferUnderflowTarget(), c) && !this.$4(a, b.currentTime, e) ? new h(this.$1, this.$2, this) : this
            };
            b.$4 = function(a, b, c) {
                return a.type === "waiting" ? !1 : d("oz-player/utils/OzBufferingUtils").hasEnoughPartialBuffer(b, c, this.$3, this.$2.getNumber("partial_playback_buffer_overflow", 0))
            };
            return a
        }();
    g.OzVideoBufferingState = h;
    g.OzVideoPausedState = i;
    g.OzVideoPlayingState = j
}), 98);
__d("oz-player/strategies/OzBufferingStateThresholdManager", ["oz-player/shims/OzPerformance", "oz-player/utils/OzBufferingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$2 = !1, this.$3 = -Infinity, this.$4 = -Infinity, this.$1 = a
        }
        var b = a.prototype;
        b.getInPlayBufferUnderflowTarget = function() {
            return this.$1.getNumber("in_play_buffer_underflow_target", d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD)
        };
        b.getInPlayBufferOverflowTarget = function() {
            if (this.$5()) return this.$1.getNumber("stream_interrupt_in_play_buffer_overflow_target", d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD);
            return c("oz-player/shims/OzPerformance").now() - this.$4 < this.$1.getNumber("recent_buffer_timeout_ms", 0) ? this.$1.getNumber("recent_buffer_in_play_buffer_overflow_target", d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD) : this.$1.getNumber("in_play_buffer_overflow_target", d("oz-player/utils/OzBufferingUtils").BUFFER_OVERFLOW_THRESHOLD)
        };
        b.getStartBufferUnderflowTarget = function() {
            return this.$1.getNumber("start_buffer_underflow_target", d("oz-player/utils/OzBufferingUtils").BUFFER_UNDERFLOW_THRESHOLD)
        };
        b.notifyBufferingEnd = function() {
            this.$4 = c("oz-player/shims/OzPerformance").now()
        };
        b.notifyStreamInterrupted = function() {
            this.$2 = !0
        };
        b.notifyStreamResumed = function() {
            this.$2 = !1, this.$3 = c("oz-player/shims/OzPerformance").now()
        };
        b.$5 = function() {
            var a = this.$1.getNumber("stream_interrupt_buffer_target_timeout_ms", 0);
            return a === 0 ? !1 : this.$2 || c("oz-player/shims/OzPerformance").now() - this.$3 < a
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzBufferingDetector", ["oz-player/shims/OzDOMEventListener", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozThrottle", "oz-player/strategies/OzBufferingDetectorStates", "oz-player/strategies/OzBufferingStateThresholdManager", "oz-player/utils/OzBufferingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 150;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, e, f) {
            var g;
            g = a.call(this) || this;
            g.$OzBufferingDetector3 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            g.$OzBufferingDetector6 = new Map();
            g.$OzBufferingDetector8 = null;
            g.$OzBufferingDetector9 = function(a) {
                g.$OzBufferingDetector11(a)
            };
            g.$OzBufferingDetector2 = b;
            g.$OzBufferingDetector4 = e;
            g.$OzBufferingDetector5 = f;
            g.$OzBufferingDetector7 = new(c("oz-player/strategies/OzBufferingStateThresholdManager"))(e);
            g.$OzBufferingDetector2.paused ? g.$OzBufferingDetector1 = new(d("oz-player/strategies/OzBufferingDetectorStates").OzVideoPausedState)(g.$OzBufferingDetector7, g.$OzBufferingDetector4) : g.$OzBufferingDetector1 = d("oz-player/utils/OzBufferingUtils").hasEnoughBuffer(g.$OzBufferingDetector2, g.$OzBufferingDetector7.getInPlayBufferUnderflowTarget(), g.$OzBufferingDetector5()) ? new(d("oz-player/strategies/OzBufferingDetectorStates").OzVideoPlayingState)(g.$OzBufferingDetector7, g.$OzBufferingDetector4) : new(d("oz-player/strategies/OzBufferingDetectorStates").OzVideoBufferingState)(g.$OzBufferingDetector7, g.$OzBufferingDetector4, null);
            g.$OzBufferingDetector3.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(g.$OzBufferingDetector2, "pause", g.$OzBufferingDetector9), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(g.$OzBufferingDetector2, "play", g.$OzBufferingDetector9), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(g.$OzBufferingDetector2, "progress", c("oz-player/shims/ozThrottle")(g.$OzBufferingDetector9, h)), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(g.$OzBufferingDetector2, "timeupdate", c("oz-player/shims/ozThrottle")(g.$OzBufferingDetector9, h)), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(g.$OzBufferingDetector2, "seeked", g.$OzBufferingDetector9), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(g.$OzBufferingDetector2, "seeking", g.$OzBufferingDetector9), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(g.$OzBufferingDetector2, "waiting", g.$OzBufferingDetector9));
            g.$OzBufferingDetector3.addSubscriptions(c("oz-player/shims/OzDOMEventListener").listenDOMEvent(g.$OzBufferingDetector2, "canplay", g.$OzBufferingDetector9), c("oz-player/shims/OzDOMEventListener").listenDOMEvent(g.$OzBufferingDetector2, "canplaythrough", g.$OzBufferingDetector9));
            return g
        }
        var e = b.prototype;
        e.$OzBufferingDetector10 = function() {
            var a = this,
                b = "unavailable",
                c = this.$OzBufferingDetector7.getInPlayBufferUnderflowTarget();
            this.$OzBufferingDetector6.forEach(function(e, f) {
                var g = a.$OzBufferingDetector2.currentTime;
                d("oz-player/utils/OzBufferingUtils").hasBuffer(g, c, e) || (b = b === "unavailable" ? f : "audio/video")
            });
            return b
        };
        e.setSourceBufferState = function(a, b) {
            this.$OzBufferingDetector6.set(a, b)
        };
        e.$OzBufferingDetector11 = function(a) {
            var b = this.$OzBufferingDetector1.handleEvent(a, this.$OzBufferingDetector2, this.$OzBufferingDetector5(), this.$OzBufferingDetector6),
                c = this.$OzBufferingDetector1;
            this.$OzBufferingDetector1 = b;
            var e = b instanceof d("oz-player/strategies/OzBufferingDetectorStates").OzVideoBufferingState,
                f = c instanceof d("oz-player/strategies/OzBufferingDetectorStates").OzVideoBufferingState;
            if (b === c) {
                e && this.$OzBufferingDetector8 && this.$OzBufferingDetector8.cloneContext().getOperationLogger("buffering_handle_event").setInitiator(a.type).log();
                return b
            }
            if (e) {
                e = c instanceof d("oz-player/strategies/OzBufferingDetectorStates").OzVideoPlayingState ? "in_play" : "start/unpause";
                this.$OzBufferingDetector8 && this.$OzBufferingDetector8.cloneContext().getOperationLogger("enter_buffering").setState("buffering").setType(e).setReason(this.$OzBufferingDetector10()).setInitiator(a.type).log();
                this.emit("enterBuffering", e)
            } else f && (this.$OzBufferingDetector8 && this.$OzBufferingDetector8.cloneContext().getOperationLogger("leave_buffering").setInitiator(a.type).log(), this.$OzBufferingDetector7.notifyBufferingEnd(), this.emit("leaveBuffering", {
                domEventPerfTimestamp: a.timeStamp
            }));
            return b
        };
        e.notifyStreamInterrupted = function() {
            this.$OzBufferingDetector7.notifyStreamInterrupted()
        };
        e.notifyStreamResumed = function() {
            this.$OzBufferingDetector7.notifyStreamResumed()
        };
        e.attachPerfLoggerProvider = function(a) {
            this.$OzBufferingDetector8 = a
        };
        e.destroy = function() {
            this.$OzBufferingDetector3.release()
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzPausedStreamSegmentsCountStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.isActive = function() {
            return !this.$1.isPlaying()
        };
        b.getSegmentsCount = function(a, b, c) {
            return this.$2.getNumber("paused_stream_segments_count")
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzPlayheadAtInterruptionDetector", ["oz-player/shims/OzDOMEventListener", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            var e;
            e = a.call(this) || this;
            e.$OzPlayheadAtInterruptionDetector2 = null;
            e.$OzPlayheadAtInterruptionDetector3 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            e.$OzPlayheadAtInterruptionDetector4 = null;
            e.$OzPlayheadAtInterruptionDetector1 = b;
            b = d ? d.addListener("enterBuffering", function() {
                e.$OzPlayheadAtInterruptionDetector5()
            }) : c("oz-player/shims/OzDOMEventListener").listenDOMEvent(e.$OzPlayheadAtInterruptionDetector1, "waiting", function() {
                e.$OzPlayheadAtInterruptionDetector5()
            });
            e.$OzPlayheadAtInterruptionDetector3.addSubscriptions(b);
            e.$OzPlayheadAtInterruptionDetector4 = d;
            return e
        }
        var d = b.prototype;
        d.notifyStreamInterrupted = function(a) {
            this.$OzPlayheadAtInterruptionDetector2 = a, this.$OzPlayheadAtInterruptionDetector5()
        };
        d.notifyStreamResumed = function() {
            this.$OzPlayheadAtInterruptionDetector2 = null
        };
        d.$OzPlayheadAtInterruptionDetector5 = function() {
            if (this.$OzPlayheadAtInterruptionDetector2 != null) {
                var a = this.$OzPlayheadAtInterruptionDetector2 || 0;
                Math.abs(this.$OzPlayheadAtInterruptionDetector1.currentTime - a) < h && this.emit("playheadAtInterruption", a)
            }
        };
        d.destroy = function() {
            this.$OzPlayheadAtInterruptionDetector3.release(), this.$OzPlayheadAtInterruptionDetector4 = null
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzPlayingStatePriorityStrategy", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var d;
            d = a.call(this) || this;
            d.$OzPlayingStatePriorityStrategy1 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            d.$OzPlayingStatePriorityStrategy3 = function() {
                d.emit("state_changed")
            };
            d.$OzPlayingStatePriorityStrategy2 = b;
            d.$OzPlayingStatePriorityStrategy1.addSubscriptions(d.$OzPlayingStatePriorityStrategy2.addEventListener("playing", d.$OzPlayingStatePriorityStrategy3), d.$OzPlayingStatePriorityStrategy2.addEventListener("play", d.$OzPlayingStatePriorityStrategy3), d.$OzPlayingStatePriorityStrategy2.addEventListener("pause", d.$OzPlayingStatePriorityStrategy3));
            return d
        }
        var d = b.prototype;
        d.isActive = function() {
            return !0
        };
        d.getName = function() {
            return "playing_state"
        };
        d.setSourceBufferState = function(a) {};
        d.getPriority = function() {
            return this.$OzPlayingStatePriorityStrategy2.isPlaying() ? 1 : 0
        };
        d.destroy = function() {
            this.$OzPlayingStatePriorityStrategy1.release()
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzPositionToViewportPriorityStrategy", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            var e;
            e = a.call(this) || this;
            e.$OzPositionToViewportPriorityStrategy3 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            e.$OzPositionToViewportPriorityStrategy4 = function() {
                e.emit("state_changed")
            };
            e.$OzPositionToViewportPriorityStrategy2 = b;
            e.$OzPositionToViewportPriorityStrategy1 = d;
            e.$OzPositionToViewportPriorityStrategy3.addSubscriptions(b.addListener("state_changed", e.$OzPositionToViewportPriorityStrategy4));
            return e
        }
        var d = b.prototype;
        d.isActive = function() {
            return !0
        };
        d.getName = function() {
            return "position_to_viewport"
        };
        d.setSourceBufferState = function(a) {};
        d.getPriority = function() {
            var a = this.$OzPositionToViewportPriorityStrategy1.getNumber("prioritize_by_viewport_static_penalty"),
                b = this.$OzPositionToViewportPriorityStrategy2.getPositionIndexOfVideoFromViewportVertically();
            return a > 0 ? b === -1 ? a * -1 : 0 : b === -1 ? -Infinity : -1 * b
        };
        d.destroy = function() {
            this.$OzPositionToViewportPriorityStrategy3.release()
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzPriorityCalculator", ["oz-player/shims/OzEventEmitter", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var d;
            d = a.call(this) || this;
            d.$OzPriorityCalculator2 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            d.$OzPriorityCalculator1 = b;
            (b = d.$OzPriorityCalculator2).addSubscriptions.apply(b, d.$OzPriorityCalculator1.map(function(a) {
                return a.addListener("state_changed", function() {
                    d.emit("state_changed", d.compute(), a.getName())
                })
            }));
            return d
        }
        var d = b.prototype;
        d.setSourceBufferState = function(a) {
            this.$OzPriorityCalculator1.forEach(function(b) {
                return b.setSourceBufferState(a)
            }), this.emit("state_changed", this.compute(), "source_buffer")
        };
        d.compute = function() {
            var a = this.$OzPriorityCalculator1.reduce(function(a, b) {
                b = b.isActive() ? b.getPriority() : 0;
                return a + b
            }, 0);
            return Math.max(a, 0)
        };
        d.destroy = function() {
            this.$OzPriorityCalculator2.release()
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzSingleCodecRestriction", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var b = a.prototype;
        b.applyRestriction = function(a, b) {
            if (a.length <= 0) return a;
            b = new Set(a.map(function(a) {
                return g(a)
            }));
            var c = "av01",
                d = b.has(c) ? c : b.values().next().value;
            return d == null ? a : a.filter(function(a) {
                return g(a) === d
            })
        };
        return a
    }();

    function g(a) {
        return a.getMimeCodecs().replace(/\..*$/, "")
    }
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzStaleManifestBufferTargetStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = b, this.$2 = a
        }
        var b = a.prototype;
        b.isActive = function() {
            return this.$2.getRefreshDate() == null && this.$1.getNumber("stale_mpd_buffer_ahead_target") > 0
        };
        b.getBufferTarget = function() {
            return this.$1.getNumber("stale_mpd_buffer_ahead_target")
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzStartupBufferTargetStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$1 = a, this.$3 = b
        }
        var b = a.prototype;
        b.isActive = function() {
            var a = this.$1.isPlaying();
            a && (this.$2 = !0);
            return !this.$2
        };
        b.getBufferTarget = function() {
            return this.$3.getNumber("pre_start_buffer_ahead_target")
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzStreamSegmentsCountCalculator", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1;
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.computeMin = function(a, b, c) {
            var d = Number.MAX_VALUE;
            for (var e = this.$1, f = Array.isArray(e), h = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var i;
                if (f) {
                    if (h >= e.length) break;
                    i = e[h++]
                } else {
                    h = e.next();
                    if (h.done) break;
                    i = h.value
                }
                i = i;
                i.isActive(a) && (d = Math.min(d, i.getSegmentsCount(a, b, c)))
            }
            return d === Number.MAX_VALUE ? g : Math.max(d, g)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/strategies/OzSupportedMimeCodecsRestriction", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {}
        var b = a.prototype;
        b.applyRestriction = function(a, b) {
            return a.filter(function(a) {
                a = MediaSource.isTypeSupported(a.getMimeCodecs());
                return !!a
            })
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/streams/OzEndOfStreamWatcher", ["oz-player/shims/OzEventEmitter", "oz-player/shims/ozvariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this) || this;
            d.$OzEndOfStreamWatcher1 = new Map();
            d.$OzEndOfStreamWatcher4 = !1;
            d.$OzEndOfStreamWatcher2 = b;
            d.$OzEndOfStreamWatcher3 = c;
            return d
        }
        var d = b.prototype;
        d.registerMediaStream = function(a) {
            this.$OzEndOfStreamWatcher1.has(a) && c("oz-player/shims/ozvariant")(0, 5191), this.$OzEndOfStreamWatcher1.set(a, !1)
        };
        d.notifyRepresentationSwitched = function(a) {
            this.$OzEndOfStreamWatcher1.has(a) || c("oz-player/shims/ozvariant")(0, 5192), this.$OzEndOfStreamWatcher5("end_of_stream_watcher", "representation_switched")
        };
        d.notifyMediaStreamEnded = function(a, b) {
            this.$OzEndOfStreamWatcher1.has(a) || c("oz-player/shims/ozvariant")(0, 5192), this.$OzEndOfStreamWatcher1.set(a, !0), this.$OzEndOfStreamWatcher5("end_of_stream_watcher", "media_stream_ended:" + b)
        };
        d.$OzEndOfStreamWatcher5 = function(a, b) {
            var c = this;
            if (this.$OzEndOfStreamWatcher3.getBool("do_not_end_stream")) {
                !this.$OzEndOfStreamWatcher4 && this.$OzEndOfStreamWatcher6() && (this.$OzEndOfStreamWatcher4 = !0, this.emit("streamEnd"));
                return
            }
            var d = this.$OzEndOfStreamWatcher2.getReadyState();
            d === "open" && this.$OzEndOfStreamWatcher6() && this.$OzEndOfStreamWatcher2.notifyEndOfStream(a, b).then(function() {
                c.emit("streamEnd")
            })["catch"](function() {
                c.emit("streamEnd")
            })
        };
        d.$OzEndOfStreamWatcher6 = function() {
            if (this.$OzEndOfStreamWatcher1.size === 0) return !1;
            for (var a = this.$OzEndOfStreamWatcher1.values(), b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                if (!d) return !1
            }
            return !0
        };
        d.destroy = function() {
            this.$OzEndOfStreamWatcher1.clear()
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/streams/OzHandleUserRepresentationSwitch", ["oz-player/shims/OzSubscriptionsHandler", "oz-player/utils/OzErrorEmitter"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, d, e, f, g) {
            var h = this;
            this.$2 = new(c("oz-player/utils/OzErrorEmitter"))();
            this.$5 = null;
            this.$6 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$1 = a;
            this.$3 = b;
            this.$4 = d;
            this.$7 = e;
            this.$8 = g;
            f.then(function(a) {
                h.$5 = a
            });
            this.$6.addSubscriptions(e.addListener("switchRepresentation", function(a, b) {
                h.$9(a, b)
            }))
        }
        var b = a.prototype;
        b.cleanup = function() {
            this.$6.release(), this.$6.engage()
        };
        b.onError = function(a) {
            return this.$2.onError(a)
        };
        b.$9 = function(a, b) {
            if (a !== "user") return;
            a = this.$5;
            if (a == null) return;
            var c = this.$7.getRepresentationIDAtTime(this.$3.getCurrentTime()),
                d;
            for (var e = 0; e < this.$4.length; e++) this.$4[e].getID() === c && (d = this.$4[e]);
            if (d && b && (this.$8 || d.getBandwidth() < b.getBandwidth())) {
                c = d.getSegmentByTime(this.$3.getCurrentTime());
                c && a.clearRangeWithWait([{
                    fromTime: this.$3.getCurrentTime(),
                    toTime: this.$3.getDuration()
                }])["catch"](function(a) {})
            }
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/manifests/IOzSegment", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        return ((a == null ? void 0 : a.getSequenceNumber()) || 0) === ((b == null ? void 0 : b.getSequenceNumber()) || 0)
    }

    function b(a, b) {
        return ((a == null ? void 0 : a.getSequenceNumber()) || 0) >= ((b == null ? void 0 : b.getSequenceNumber()) || 0)
    }
    f.isSequenceNumberEqual = a;
    f.isSequenceNumberGreaterOrEqual = b
}), 66);
__d("oz-player/networks/OzReadableStreamDataReader", ["oz-player/networks/OzTransformStream", "oz-player/utils/ozConcatUint8Arrays"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this) || this;
            c.$OzReadableStreamDataReader1 = [];
            c.$OzReadableStreamDataReader2 = b;
            return c
        }
        var d = b.prototype;
        d.onDataWritten = function(a) {
            this.$OzReadableStreamDataReader1.push(a)
        };
        d.onClose = function() {
            var a = this.$OzReadableStreamDataReader1,
                b = c("oz-player/utils/ozConcatUint8Arrays")(a);
            b = b.buffer;
            a.length = 0;
            this.$OzReadableStreamDataReader2(b)
        };
        return b
    }(c("oz-player/networks/OzTransformStream"));
    g["default"] = a
}), 98);
__d("oz-player/networks/OzStreamingTask", ["oz-player/loggings/OzLoggingUtils", "oz-player/shims/OzDeferred", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzPerformance", "oz-player/utils/OzError", "oz-player/utils/OzNetworkRequestLoggingUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b, d) {
            this.$3 = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise")), this.$5 = !1, this.$9 = null, this.$1 = this.$2 = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise")), this.$6 = c("oz-player/shims/OzPerformance").now(), this.$7 = b, this.$8 = a, this.$9 = d
        }
        var b = a.prototype;
        b.run = function() {
            var a = this.$3.getPromise(),
                b = this.$7;
            if (b) {
                var e = c("oz-player/shims/OzPerformance").now() - this.$6;
                d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(a, b, "streaming_task", function() {}, function(a) {
                    a.setTimeToRequestSent(Math.floor(e))
                })
            }
            this.$2.resolve();
            return a
        };
        b.getPromise = function() {
            return this.$3.getPromise()
        };
        b.cancel = function() {
            this.$3.getPromise()["catch"](function() {}), this.$3.reject(new(c("oz-player/utils/OzError"))({
                type: "OZ_STREAMING_TASK",
                description: "task cancelled",
                extra: {
                    code: "OZ_ST-1"
                }
            })), this.$5 = !0
        };
        b.finish = function() {
            this.$3.resolve()
        };
        b.isCancelled = function() {
            return this.$5
        };
        b.addStreamDeferred = function(a, b) {
            var d = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise")),
                e = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise"));
            this.$10({
                createStreamResult: a,
                changeStatusDeferred: d,
                createStreamDeferred: e,
                loggerProviderWithStreamContext: b
            });
            b = function() {
                return e.getPromise()
            };
            return {
                genStream: b,
                cancel: function() {
                    if (a) {
                        var b = a.pausableStream;
                        return b.pauseStream()
                    }
                },
                getStatusChangePromise: function() {
                    return d.getPromise()
                }
            }
        };
        b.$10 = function(a) {
            var b = this,
                e = a.createStreamResult,
                f = a.changeStatusDeferred,
                g = a.createStreamDeferred,
                h = a.loggerProviderWithStreamContext,
                i = a.loggingPayloads;
            a = this.$1.getPromise();
            var j = c("oz-player/shims/OzPerformance").now(),
                k = this.$1 = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise"));
            k.getPromise()["catch"](function() {});
            a.then(function() {
                if (e) {
                    var a = e.pausableStream;
                    e.loggingPayloads && (i = e.loggingPayloads);
                    g.resolve(a.getStream());
                    b.$4 = a;
                    var f = c("oz-player/shims/OzPerformance").now(),
                        k = b.$11(a.startStream());
                    if (h) {
                        var l = function(c) {
                            var e = i;
                            if (e) {
                                d("oz-player/utils/OzNetworkRequestLoggingUtils").setFetchStreamLoggingAttributes(c, e.getRequestUrl(), e.isPrefetch(), e.segments, f - j, a.getBytesStreamed(), e.getResponse());
                                var g = b.$9;
                                g && g(c, e.getRequestUrl(), e.getResponse())
                            }
                        };
                        d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(k, h, "fetch_stream", l, l)
                    }
                    return k
                }
                return null
            }).then(function(a) {
                b.$4 = null, k.resolve(), f.resolve(a || "cancelled")
            })["catch"](function(a) {
                b.$4 = null, b.$3.reject(a), k.reject(a), f.reject(a)
            })
        };
        b.$11 = function(a) {
            return a.then(function(a) {
                a = a.statusPromise;
                return a.then(function(a) {
                    return a === "stream_done" ? "done" : "error"
                })
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/scheduling/OzRoundRobinPriorityTaskQueue", ["oz-player/shims/ozReportUnexpectedError"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            b === void 0 && (b = -1), this.$3 = function() {}, this.$4 = [], this.$5 = new Map(), this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.getHighestPriority = function() {
            return Math.max.apply(Math, this.$4.map(function(a) {
                return a.queue.length ? a.priority : -Infinity
            }))
        };
        b.enqueue = function(a, b) {
            var d = this;
            b = b;
            b = this.$6(b);
            var e = this.$5.get(a);
            if (e === b) return;
            this.$5.has(a) && this.remove(a);
            e = this.$7(b);
            var f = this.$4[e];
            f && f.priority === b || (f = {
                priority: b,
                queue: []
            }, this.$4.splice(e, 0, f));
            this.$5.set(a, b);
            f.queue.push(a);
            a.getPromise().then(function() {
                d.remove(a)
            }, function() {
                d.remove(a)
            })["catch"](function(a) {
                c("oz-player/shims/ozReportUnexpectedError")(a, "OzRoundRobinPriorityTaskQueue remove after task run")
            });
            this.$3(a, b >= this.$1 ? "immediate" : "normal")
        };
        b.updatePriority = function(a, b) {
            if (!this.$5.has(a)) return;
            this.enqueue(a, b)
        };
        b.dequeue = function() {
            for (var a = 0; a < this.$4.length; a++) {
                var b = this.$4[a];
                if (b.queue.length) {
                    b = b.queue.shift();
                    this.$5["delete"](b);
                    return b
                }
            }
            return null
        };
        b.remove = function(a) {
            var b = this.$5.get(a);
            if (b !== void 0) {
                b = this.$7(b);
                b = this.$4[b];
                if (b && b.queue) {
                    var c = b.queue.findIndex(function(b) {
                        return b === a
                    });
                    c > -1 && b.queue.splice(c, 1)
                }
                this.$5["delete"](a)
            }
        };
        b.setOnTaskUpdated = function(a) {
            this.$3 = a
        };
        b.clearOnTaskUpdated = function() {
            this.setOnTaskUpdated(function() {})
        };
        b.getLength = function() {
            return this.$5.size
        };
        b.test_isEmpty = function() {
            return this.$5.size === 0 && this.$4.every(function(a) {
                return a.queue.length === 0
            })
        };
        b.$7 = function(a) {
            a = a;
            a = this.$6(a);
            var b;
            for (b = 0; b < this.$4.length; b++)
                if (a >= this.$4[b].priority) return b;
            return b
        };
        b.$6 = function(a) {
            a = a;
            this.$2 >= 0 && (a = Number.parseFloat(a.toFixed(this.$2)));
            return a
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/scheduling/OzSequentialTaskScheduler", ["oz-player/shims/OzMaybeNativePromise", "oz-player/shims/ozReportUnexpectedError", "oz-player/shims/ozSetTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$3 = 0;
            this.$1 = a;
            a = b || {};
            b = a.taskTimeout;
            this.$4 = b || 0
        }
        var b = a.prototype;
        b.start = function() {
            this.$1.setOnTaskUpdated(this.$5.bind(this));
            var a = this.$1.dequeue();
            a && this.$6(a, "immediate")
        };
        b.destroy = function() {
            this.$2 && this.$2.cancel(), this.$1.clearOnTaskUpdated()
        };
        b.$5 = function(a, b) {
            b = this.$6(a, b);
            b && this.$1.remove(a)
        };
        b.$6 = function(a, b) {
            var d = this;
            if (this.$2 && b !== "immediate") return !1;
            this.$2 && this.$2.cancel();
            b = a.run()["catch"](function(a) {});
            this.$4 > 0 && (b = c("oz-player/shims/OzMaybeNativePromise").race([b, new(c("oz-player/shims/OzMaybeNativePromise"))(function(a, b) {
                c("oz-player/shims/ozSetTimeoutAcrossTransitions")(a, d.$4)
            })]));
            this.$3++;
            this.$2 = a;
            b = b.then(function() {
                d.$3--;
                d.$2 === a && (d.$2 = null);
                if (d.$3 === 0) {
                    var b = d.$1.dequeue();
                    b && d.$6(b, "immediate")
                }
            });
            b["catch"](function(a) {
                c("oz-player/shims/ozReportUnexpectedError")(a, "OzSequentialTaskScheduler task complete")
            });
            return !0
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/networks/OzStreamingTaskQueueProvider", ["oz-player/scheduling/OzRoundRobinPriorityTaskQueue", "oz-player/scheduling/OzSequentialTaskScheduler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
        i = new Map(),
        j = 2,
        k = 2,
        l = 6e4;

    function a(a) {
        var b = h.get(a);
        if (!b) {
            b = new(c("oz-player/scheduling/OzRoundRobinPriorityTaskQueue"))(j, k);
            var d = new(c("oz-player/scheduling/OzSequentialTaskScheduler"))(b, {
                taskTimeout: l
            });
            h.set(a, b);
            i.set(a, d);
            d.start()
        }
        return b
    }
    g.OZ_QUEUE_MAX_PRIORITY = j;
    g.getQueue = a
}), 98);
__d("oz-player/networks/OzStreamingTaskStateManager", ["Promise", "oz-player/networks/OzStreamingTask", "oz-player/networks/OzStreamingTaskQueueProvider", "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter", "oz-player/shims/OzSubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = function() {
        function a(a) {
            var b = this;
            this.$3 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            this.$4 = 0;
            this.$9 = !1;
            this.$10 = null;
            var e = a.mimeType,
                f = a.priorityCalculator,
                g = a.loggerProvider,
                h = a.setCustomFetchStreamLoggingAttributes;
            a = a.config;
            this.$5 = e;
            this.$1 = f;
            this.$6 = d("oz-player/networks/OzStreamingTaskQueueProvider").getQueue(this.$5);
            this.$7 = g;
            this.$8 = a;
            this.$10 = h;
            this.$3.addSubscriptions(this.$1.addListener("state_changed", function(a, c) {
                b.$11(a, c), b.$2 && b.$6.updatePriority(b.$2, b.$4)
            }))
        }
        var e = a.prototype;
        e.$12 = function() {
            var a = [];
            a.push(c("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter")(this.$5));
            return a
        };
        e.startStreamDeferred = function(a) {
            var b = a.segments,
                c = a.networkManager,
                d = a.segmentsLoggerProvider,
                e = a.mediaStreamType,
                f = a.dataAppendedCallback;
            a = a.dataAppendedErrorCallback;
            var g = this.$13(d),
                h = this.$12();
            b.length > 0 ? c = c.createPausableStream(b, h, d, e, f, a) : c = null;
            this.$9 = !0;
            b = g.addStreamDeferred(c, d);
            return {
                genStream: b.genStream,
                cancel: b.cancel,
                getStatusChangePromise: this.$14(b.getStatusChangePromise)
            }
        };
        e.$13 = function(a) {
            var b = this.$2;
            this.$11(this.$1.compute(), "start_stream");
            !b || b.isCancelled() ? (b = this.$2 = new(c("oz-player/networks/OzStreamingTask"))(this.$8, a, this.$10), this.$6.enqueue(b, this.$4)) : this.$6.updatePriority(b, this.$4);
            return b
        };
        e.$14 = function(a) {
            var c = this;
            return function() {
                return a().then(function(a) {
                    c.$15();
                    return a
                })["catch"](function(a) {
                    c.$15();
                    return (h || (h = b("Promise"))).reject(a)
                })
            }
        };
        e.finishTaskIfNoOngoingStream = function() {
            this.$9 || this.$16()
        };
        e.destroy = function() {
            this.$3.release();
            var a = this.$2;
            this.$2 = null;
            a && this.$6.remove(a)
        };
        e.$15 = function() {
            this.$9 = !1, this.$11(this.$1.compute(), "end_stream"), this.$4 < d("oz-player/networks/OzStreamingTaskQueueProvider").OZ_QUEUE_MAX_PRIORITY && this.$16()
        };
        e.$16 = function() {
            this.$2 && (this.$2.finish(), this.$2 = null)
        };
        e.$11 = function(a, b) {
            if (a === this.$4) return;
            this.$4 = a;
            this.$7 && this.$7.getOperationLogger("priority_changed").setPriorityFloat(this.$4).setInitiator(b).log()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/strategies/OzStreamLengthStrategy", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c, d, e) {
        b = b;
        e = e;
        var f = a.getNumber("segments_to_stream_under_playhead_threshold");
        a = a.getNumber("low_segment_stream_playhead_threshold");
        f > 0 && d.getCurrentTime() < a && (b = f);
        d = [];
        d.push(e);
        for (a = 1; a < b; a++) {
            f = c.getSegmentAfter(e);
            if (!f) break;
            e = f;
            d.push(e)
        }
        return d
    }
    f.getStreamingSegments = a
}), 66);
__d("oz-player/streams/OzMediaStreamLoopDriver", ["oz-player/shims/ozClearTimeout", "oz-player/shims/ozSetTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            var d = this;
            this.$2 = null;
            this.$3 = !1;
            this.$6 = function() {
                var a;
                d.$7();
                if (d.$3) return;
                (a = d.$5) == null ? void 0 : a.start();
                a = d.$1.execute();
                var b = d.$1.getLoopInterval();
                b && (d.$2 = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(function() {
                    d.$6()
                }, b));
                a && a.then(d.$6)["catch"](function(b) {
                    d.$7();
                    var a = d.$1.handleError(b);
                    if (a) d.$2 = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(d.$6, a);
                    else {
                        (a = d.$5) == null ? void 0 : a.setError(b);
                        (a = d.$5) == null ? void 0 : a.log();
                        d.$5 = null;
                        d.$3 = !0
                    }
                })
            };
            this.$1 = a;
            this.$4 = b
        }
        var b = a.prototype;
        b.start = function() {
            if (this.$3) throw new Error("restart is not implemented");
            this.$5 = this.$4.getOperationLogger("media_stream").start();
            this.$6()
        };
        b.stop = function() {
            var a;
            this.$7();
            this.$3 = !0;
            (a = this.$5) == null ? void 0 : a.log();
            this.$5 = null
        };
        b.$7 = function() {
            this.$2 && (c("oz-player/shims/ozClearTimeout")(this.$2), this.$2 = null)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("oz-player/utils/OzRangeUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        b = b.filter(function(b) {
            return b.startTime <= a && b.endTime >= a
        });
        return b != null && b.length > 0 ? b[0] : null
    }
    f.getRangeForTime = a
}), 66);
__d("oz-player/streams/OzSegmentLocator", ["oz-player/utils/OzNumericalRangeUtil", "oz-player/utils/OzRangeUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        a = a.getEndingSegment();
        return a != null && a.getSequenceNumber() != null ? a.getSequenceNumber() : 0
    }
    var h = function(a, b) {
            a = a.getCurrentTime();
            return b ? d("oz-player/utils/OzRangeUtils").getRangeForTime(a, b.getBufferedRanges()) : null
        },
        i = function(a, b, c) {
            b = h(a, b);
            c = c ? c.getTimeRange().endTime : 0;
            a = a.getCurrentTime() || 0;
            c ? a = c : b && (a = b.endTime);
            return a
        };
    b = function(a, b, c, e, f, g, h, j) {
        h = a.getPredictedSegmentAfter(g);
        if (h && b.isPlaying()) return h;
        j = i(b, e, g);
        h = f.getTimeRanges();
        e = d("oz-player/utils/OzNumericalRangeUtil").findDiffCoveredByRanges(b.getCurrentTime(), j, h.map(function(a) {
            return {
                rangeStart: a.startTime,
                rangeEnd: a.endTime
            }
        }));
        if (e > c) return null;
        g = a.getSegment(0);
        g && g.getTimeRange().startTime > j && (j = g.getTimeRange().startTime);
        return a.getSegmentByTime(j)
    };
    g.getEndingSequenceNumber = a;
    g.getTimeToQuery = i;
    g.getSegment = b
}), 98);
__d("oz-player/streams/OzSegmentUtils", ["oz-player/manifests/OzSegmentOptions", "oz-player/shims/OzURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return a.reduce(function(a, b) {
            var c;
            return ((c = b == null ? void 0 : b.getSequenceNumber()) != null ? c : 0) > ((c = a == null ? void 0 : a.getSequenceNumber()) != null ? c : 0) ? b : a
        })
    }

    function b(a, b) {
        var d = new(c("oz-player/manifests/OzSegmentOptions"))();
        return a.getPredictedSegmentAfter({
            getData: function() {
                return null
            },
            getByteRange: function() {
                return null
            },
            getSequenceNumber: function() {
                return b - 1
            },
            getTimeRange: function() {
                return {
                    endTime: 0,
                    startTime: 0
                }
            },
            getURI: function() {
                return new(c("oz-player/shims/OzURI"))("")
            },
            getOptions: function() {
                return d
            }
        })
    }

    function d(a) {
        a.getOptions().setSegmentNumDecisionTime(Date.now());
        return a
    }
    g.getMaxSegment = a;
    g.getSegmentForSequenceNumber = b;
    g.markSegmentCreateTime = d
}), 98);
__d("oz-player/utils/OzTaggedTimeRanges", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$1 = [], this.$2 = 0, this.$3 = 0, this.$4 = a ? a : function(a, b) {
                return a === b
            }
        }
        var b = a.prototype;
        b.add = function(a, b, c) {
            if (b < a) return;
            if (b === a) return;
            if (this.$1.length === 0) {
                this.$1.push({
                    startTime: a,
                    endTime: b,
                    tag: c
                });
                return
            }
            var d = 0,
                e = 0;
            for (var f = 0; f < this.$1.length; f++) {
                if (a === this.$1[f].startTime && b === this.$1[f].endTime) {
                    d = f;
                    e = f + 1;
                    break
                }
                a >= this.$1[f].startTime && (d = f + 1);
                b <= this.$1[f].endTime && (e = f);
                if (b < this.$1[f].startTime) break
            }
            this.$1.splice(d, e - d, {
                startTime: a,
                endTime: b,
                tag: c
            });
            this.$5(d)
        };
        b.$5 = function(a) {
            a = a;
            var b = this.$1[a],
                c = null;
            a !== 0 && (c = this.$1[a - 1]);
            c !== null && (this.$4(c.tag, b.tag) ? c.endTime >= b.startTime && (this.$1.splice(a - 1, 2, {
                startTime: c.startTime,
                endTime: Math.max(b.endTime, c.endTime),
                tag: b.tag
            }), a--) : (c.endTime > b.startTime && c.startTime === b.startTime ? (this.$1.splice(a - 1, 1), a--) : c.endTime > b.startTime && this.$1.splice(a - 1, 1, {
                startTime: c.startTime,
                endTime: b.startTime,
                tag: c.tag
            }), c.endTime > b.endTime && this.$1.splice(a + 1, 0, {
                startTime: b.endTime,
                endTime: c.endTime,
                tag: c.tag
            })));
            c = null;
            a !== this.$1.length - 1 && (c = this.$1[a + 1]);
            c && (this.$4(c.tag, b.tag) ? c.startTime <= b.endTime && this.$1.splice(a, 2, {
                startTime: b.startTime,
                endTime: Math.max(c.endTime, b.endTime),
                tag: b.tag
            }) : c.startTime <= b.endTime && (c.endTime < b.endTime ? (this.$1.splice(a, 1, {
                startTime: b.startTime,
                endTime: c.startTime,
                tag: b.tag
            }), this.$1.push({
                startTime: c.endTime,
                endTime: b.endTime,
                tag: b.tag
            })) : this.$1.splice(a + 1, 1, {
                startTime: b.endTime,
                endTime: c.endTime,
                tag: c.tag
            })))
        };
        b.get = function(a) {
            var b = a >= this.$3 ? this.$2 : 0,
                c = null;
            for (b = b; b < this.$1.length; b++)
                if (this.$1[b].startTime <= a && a < this.$1[b].endTime) {
                    c = b;
                    break
                }
            this.$2 = c === null ? 0 : c;
            this.$3 = a;
            return c === null ? null : this.$1[c].tag
        };
        b.getLength = function() {
            return this.$1.length
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("oz-player/streams/OzMediaStream", ["oz-player/manifests/IOzSegment", "oz-player/networks/OzNetworkManager", "oz-player/networks/OzReadableStreamDataReader", "oz-player/networks/OzStreamingTaskStateManager", "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter", "oz-player/shims/OzDeferred", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzNetworkDiagnostics", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/ozClearTimeout", "oz-player/shims/ozReportUnexpectedError", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/shims/ozvariant", "oz-player/strategies/OzStreamLengthStrategy", "oz-player/streams/OzMediaStreamLoopDriver", "oz-player/streams/OzSegmentLocator", "oz-player/streams/OzSegmentUtils", "oz-player/utils/OzBufferingUtils", "oz-player/utils/OzCustomErrorCode", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzErrorUtils", "oz-player/utils/OzMimeUtil", "oz-player/utils/OzTaggedTimeRanges"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 1e3,
        i = .2,
        j = {
            AUDIO: 1,
            CAPTION: 3,
            VIDEO: 0
        };
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var e;
            e = a.call(this) || this;
            e.$OzMediaStream2 = 0;
            e.$OzMediaStream3 = 0;
            e.$OzMediaStream4 = null;
            e.$OzMediaStream13 = null;
            e.$OzMediaStream15 = !1;
            e.$OzMediaStream16 = null;
            e.$OzMediaStream17 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            e.$OzMediaStream19 = [];
            e.$OzMediaStream22 = 0;
            e.$OzMediaStream29 = !0;
            e.$OzMediaStream31 = !1;
            e.$OzMediaStream32 = null;
            e.$OzMediaStream33 = new(c("oz-player/utils/OzErrorEmitter"))();
            e.$OzMediaStream35 = !0;
            e.$OzMediaStream38 = 0;
            e.$OzMediaStream39 = null;
            e.$OzMediaStream40 = null;
            var f = b.config,
                g = b.sourceBufferManagerPromise,
                h = b.networkManager,
                i = b.playbackState,
                j = b.endOfStreamWatcher,
                k = b.bufferTargetCalculator,
                l = b.priorityCalculator,
                m = b.streamSegmentsCountCalculator,
                n = b.abrManager,
                o = b.representation,
                p = b.loggerProvider,
                q = b.segmentLocator,
                r = b.setCustomFetchStreamLoggingAttributes,
                s = b.blockedRepresentationsManager,
                t = b.dynamicVideoLibrary,
                u = b.shouldAppendOncePerStream;
            b = b.mediaStreamType;
            e.$OzMediaStream1 = f;
            e.$OzMediaStream5 = g;
            e.$OzMediaStream5.then(function(a) {
                e.$OzMediaStream6 = a, e.$OzMediaStream16 && e.$OzMediaStream16.setSourceBuffer(a), e.$OzMediaStream27.setSourceBufferState(a.getSourceBufferState()), e.$OzMediaStream45()
            });
            e.$OzMediaStream12 = h;
            e.$OzMediaStream7 = i;
            e.$OzMediaStream14 = j;
            (f = e.$OzMediaStream14) == null ? void 0 : f.registerMediaStream(babelHelpers.assertThisInitialized(e));
            e.$OzMediaStream26 = k;
            e.$OzMediaStream27 = l;
            e.$OzMediaStream28 = m;
            e.$OzMediaStream16 = n;
            e.$OzMediaStream18 = p.cloneContext();
            e.$OzMediaStream36 = q;
            e.$OzMediaStream25 = new(c("oz-player/utils/OzTaggedTimeRanges"))(function(a, b) {
                return a.id === b.id
            });
            e.$OzMediaStream39 = r;
            e.$OzMediaStream40 = s;
            e.$OzMediaStream42 = t;
            e.$OzMediaStream43 = u;
            e.$OzMediaStream44 = b;
            e.$OzMediaStream17.addSubscriptions(e.$OzMediaStream7.addEventListener("seeking", function() {
                var a = i.getCurrentTime(),
                    b = null;
                e.$OzMediaStream1.getBool("ignore_reset_after_seek_if_bufferahead") && e.$OzMediaStream8.canPredict() && (e.$OzMediaStream6 ? d("oz-player/utils/OzBufferingUtils").getBufferAheadFromCurrentTime(a, e.$OzMediaStream6.getSourceBufferState().getBufferedRanges()) > 0 : !1) ? b = "no_reset_anchor" : (b = "reset_anchor", e.$OzMediaStream41 = Date.now(), e.$OzMediaStream9 != null && (e.$OzMediaStream46(), e.$OzMediaStream31 = !1, e.$OzMediaStream24 && e.$OzMediaStream24.resolve()));
                e.$OzMediaStream18.cloneContext().getOperationLogger("media_element_event").setInitiator("seeking").setLength(a * 1e3).setReason(b).setUserInfo({
                    streamAnchorSegmentNumber: String((a = e.$OzMediaStream9) == null ? void 0 : a.getSequenceNumber())
                }).log()
            }));
            e.$OzMediaStream40 != null && e.$OzMediaStream17.addSubscriptions(e.$OzMediaStream40.onRepresentationBlocked(function(a) {
                return e.$OzMediaStream47(a)
            }));
            e.$OzMediaStream21 = d("oz-player/utils/OzMimeUtil").getMimeType(o.getMimeCodecs());
            e.$OzMediaStream30 = new(c("oz-player/networks/OzStreamingTaskStateManager"))({
                mimeType: e.$OzMediaStream21,
                priorityCalculator: e.$OzMediaStream27,
                loggerProvider: e.$OzMediaStream18,
                setCustomFetchStreamLoggingAttributes: e.$OzMediaStream39,
                config: e.$OzMediaStream1
            });
            e.$OzMediaStream23 = new(c("oz-player/streams/OzMediaStreamLoopDriver"))(babelHelpers.assertThisInitialized(e), e.$OzMediaStream18);
            e.$OzMediaStream48(o);
            return e
        }
        var e = b.prototype;
        e.start = function() {
            this.$OzMediaStream23.start()
        };
        e.getCurrentRepresentation = function() {
            return this.$OzMediaStream8
        };
        e.switchRepresentation = function(a, b) {
            b === void 0 && (b = null), this.$OzMediaStream48(a, "user", b)
        };
        e.onError = function(a) {
            return this.$OzMediaStream33.onError(a)
        };
        e.updateRunTimeConfigs = function(a) {
            var b = a.streamDataHandler;
            a = a.resetStreamAnchor;
            b !== void 0 && (this.$OzMediaStream34 = b);
            a === !0 && this.$OzMediaStream8.canApproximateId() && (this.$OzMediaStream46(), this.$OzMediaStream10 = null)
        };
        e.$OzMediaStream48 = function(a, b, d) {
            var e, f = this;
            b === void 0 && (b = "internal");
            d === void 0 && (d = null);
            b === "user" && this.$OzMediaStream46();
            (e = this.$OzMediaStream20) == null ? void 0 : e.remove();
            this.$OzMediaStream20 = null;
            e = this.$OzMediaStream18.cloneContext().setType(this.$OzMediaStream21 + ";init");
            var g = e.cloneContext().setRepresentationID(a.getID()),
                h = a.getInitSegment(),
                i = h.getData(),
                j = e.getOperationLogger("stream_switch").setPreviousRepresentationID(this.$OzMediaStream8 ? this.$OzMediaStream8.getID() : null).setInitiator(b).setRepresentationID(a.getID()).setReason(b === "internal" ? this.$OzMediaStream16 && this.$OzMediaStream16.getLastEvaluationReason() : b).start();
            this.$OzMediaStream8 = a;
            e = function() {
                var a;
                j.log();
                f.$OzMediaStream26.handleEvent("append_succeeded");
                f.emit("initAppended");
                (a = f.$OzMediaStream14) == null ? void 0 : a.notifyRepresentationSwitched(f)
            };
            var k = function(b) {
                var c;
                j.setError(b).log();
                f.$OzMediaStream49(b);
                (c = f.$OzMediaStream40) == null ? void 0 : c.handleError(a.getID(), b);
                if (a.getID() !== f.$OzMediaStream8.getID()) {
                    (c = f.$OzMediaStream24) == null ? void 0 : c.resolve()
                }
            };
            if (i == null) {
                h = this.$OzMediaStream12.request([h], [c("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter")(this.$OzMediaStream21)], g, null, this.$OzMediaStream44, e, k);
                i = h.getStream()
            }
            this.emit("switchRepresentation", b, a);
            this.$OzMediaStream50({
                data: i,
                mimeCodecs: a.getMimeCodecs(),
                clearSourceBufferRange: d,
                dataAppendedCallback: e,
                dataAppendedErrorCallback: k,
                loggerProvider: g.cloneContext(),
                appendTarget: 0
            })
        };
        e.getLoopInterval = function() {
            return this.$OzMediaStream22
        };
        e.execute = function() {
            var a = this.$OzMediaStream51();
            if (a) {
                var b = this.$OzMediaStream24 = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise"));
                a.then(function() {
                    return b.resolve()
                })["catch"](function(a) {
                    return b.reject(a)
                });
                return b.getPromise()
            }
            return null
        };
        e.$OzMediaStream52 = function(a) {
            if (this.$OzMediaStream16 && this.$OzMediaStream29 && this.$OzMediaStream15) {
                a = this.$OzMediaStream16.getBestRepresentation(a);
                if (this.$OzMediaStream8 !== a) return a
            }
            return null
        };
        e.$OzMediaStream53 = function(a) {
            var b = this.$OzMediaStream6 ? this.$OzMediaStream6.getSourceBufferState() : null,
                c = this.$OzMediaStream26.computeBufferTarget();
            if (c <= 0) return null;
            var e = null;
            a && (e = this.$OzMediaStream8.getCustomFieldFirstSegment());
            if (!e && this.$OzMediaStream8.canPredict() && this.$OzMediaStream36 != null) {
                a = this.$OzMediaStream35 && this.$OzMediaStream7.isPlaying();
                return this.$OzMediaStream36.getSegment(this.$OzMediaStream8, this.$OzMediaStream7, c, b, this.$OzMediaStream9, this.$OzMediaStream10, this.$OzMediaStream1, a, this.$OzMediaStream21)
            } else {
                e || (e = d("oz-player/streams/OzSegmentLocator").getSegment(this.$OzMediaStream8, this.$OzMediaStream7, c, b, this.$OzMediaStream8, this.$OzMediaStream9, this.$OzMediaStream1, this.$OzMediaStream32));
                if (this.$OzMediaStream8.canPredict()) {
                    a = this.$OzMediaStream10 && this.$OzMediaStream10.getSequenceNumber() || 0;
                    c = e && e.getSequenceNumber() || 0;
                    if (e && this.$OzMediaStream10 && a >= c) {
                        c = d("oz-player/streams/OzSegmentLocator").getEndingSequenceNumber(this.$OzMediaStream8);
                        return (c || 0) >= a ? this.$OzMediaStream10 : null
                    }
                }
            }
            if (!e && !this.$OzMediaStream54()) {
                c = this.$OzMediaStream8.getEndingSegment();
                if (c && this.$OzMediaStream8.isEndingSegment(c)) {
                    a = c.getTimeRange().endTime;
                    b = d("oz-player/streams/OzSegmentLocator").getTimeToQuery(this.$OzMediaStream7, b, this.$OzMediaStream9);
                    b >= a && !this.$OzMediaStream54() && (e = c)
                }
            }
            return e
        };
        e.$OzMediaStream55 = function() {
            return !this.$OzMediaStream15
        };
        e.$OzMediaStream56 = function(a, b) {
            var e;
            e = (e = b.fetchSingleSegment) != null ? e : !1;
            b = (b = b.preventRepresentationSwitch) != null ? b : !1;
            var f = [];
            if (e) f = [a];
            else {
                e = this.$OzMediaStream28.computeMin(this.$OzMediaStream7, a, this.$OzMediaStream8);
                f = d("oz-player/strategies/OzStreamLengthStrategy").getStreamingSegments(this.$OzMediaStream1, e, this.$OzMediaStream8, this.$OzMediaStream7, a);
                f = c("oz-player/networks/OzNetworkManager").getStreamableSegmentsRange(f);
                if (!b) {
                    e = this.$OzMediaStream52(f);
                    if (e) {
                        this.$OzMediaStream48(e);
                        a = this.$OzMediaStream53(!1);
                        if (!a) return [];
                        else return this.$OzMediaStream56(a, {
                            fetchSingleSegment: !1,
                            preventRepresentationSwitch: !0
                        })
                    }
                }
            }
            return f
        };
        e.$OzMediaStream57 = function() {
            var a = this,
                b = function(b) {
                    b == null ? void 0 : b.remove(), a.$OzMediaStream20 === b && (a.$OzMediaStream20 = null)
                };
            b(this.$OzMediaStream20);
            var d = null;
            return new(c("oz-player/shims/OzMaybeNativePromise"))(function(c, e) {
                d = a.getCurrentRepresentation().addUpdateListener(function() {
                    b(d), c()
                }), a.$OzMediaStream20 = d
            })["catch"](function(a) {
                b(d);
                throw a
            })
        };
        e.$OzMediaStream51 = function() {
            var a = this,
                b = this.$OzMediaStream6 ? this.$OzMediaStream6.getSourceBufferState() : null;
            if (this.$OzMediaStream8.canPredict() && this.$OzMediaStream10 && this.$OzMediaStream8.isEndingSegment(this.$OzMediaStream10)) {
                this.endStream("pdash_ending_segment_had_error");
                this.$OzMediaStream18.cloneContext().getOperationLogger("media_loop_end").setInitiator("end1").setRepresentationID(this.$OzMediaStream8.getID()).log();
                return
            }
            if (this.$OzMediaStream8.canPredict() && this.$OzMediaStream9 && this.$OzMediaStream8.isEndingSegment(this.$OzMediaStream9)) {
                this.endStream("pdash_anchor_segment_is_ending_segment");
                this.$OzMediaStream18.cloneContext().getOperationLogger("media_loop_end").setInitiator("end2").setRepresentationID(this.$OzMediaStream8.getID()).log();
                return
            }
            var e = this.$OzMediaStream55(),
                f = this.$OzMediaStream53(e);
            if (this.$OzMediaStream8.canPredict() && this.$OzMediaStream11 != null && d("oz-player/manifests/IOzSegment").isSequenceNumberGreaterOrEqual(f, this.$OzMediaStream11)) {
                this.$OzMediaStream18.cloneContext().getOperationLogger("media_loop_end").setInitiator("segment_end").setRepresentationID(this.$OzMediaStream8.getID()).log();
                return
            }
            d("oz-player/manifests/IOzSegment").isSequenceNumberEqual(f, this.$OzMediaStream37) ? this.$OzMediaStream38++ : this.$OzMediaStream38 = 0;
            this.$OzMediaStream37 = f;
            this.$OzMediaStream7.isPlaying() && this.$OzMediaStream38 > 0 && this.$OzMediaStream18.cloneContext().getOperationLogger("get_segment_to_stream_same_segment").setReason((f == null ? void 0 : f.getSequenceNumber()) != null ? String(f == null ? void 0 : f.getSequenceNumber()) : null).setLength(this.$OzMediaStream38).setRepresentationID(this.$OzMediaStream8.getID()).setSegmentStartTime(f == null ? void 0 : f.getTimeRange().startTime).setSegmentEndTime(f == null ? void 0 : f.getTimeRange().endTime).log();
            if (this.$OzMediaStream31) {
                var g;
                this.$OzMediaStream22 = h;
                this.$OzMediaStream18.cloneContext().getOperationLogger("media_loop_end").setInitiator("ongoing_stream").setReason(((g = this.$OzMediaStream9) == null ? void 0 : g.getSequenceNumber()) != null ? String((g = this.$OzMediaStream9) == null ? void 0 : g.getSequenceNumber()) : null).setRepresentationID(this.$OzMediaStream8.getID()).log();
                return null
            }
            if (!f || this.$OzMediaStream31) {
                if (this.$OzMediaStream8.canPredict() && this.$OzMediaStream1.getBool("ms_promise_for_null")) {
                    var i = this.$OzMediaStream1.getNumber("ms_promise_for_null_ms");
                    return new(c("oz-player/shims/OzMaybeNativePromise"))(function(b, d) {
                        var e = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(function() {
                            c("oz-player/shims/ozClearTimeout")(e), b()
                        }, i ? i : (a.$OzMediaStream8.getMaxGopSec() || 1) * 1e3)
                    })
                }
                this.$OzMediaStream22 = h;
                this.$OzMediaStream31 || this.$OzMediaStream30.finishTaskIfNoOngoingStream();
                return this.$OzMediaStream57()
            }
            this.$OzMediaStream22 = 0;
            var j = this.$OzMediaStream56(f, {
                fetchSingleSegment: e
            });
            if (j.length === 0) {
                this.$OzMediaStream18.cloneContext().getOperationLogger("media_loop_end").setInitiator("no_stream_segments").setReason(((g = this.$OzMediaStream9) == null ? void 0 : g.getSequenceNumber()) != null ? String((f = this.$OzMediaStream9) == null ? void 0 : f.getSequenceNumber()) : null).setRepresentationID(this.$OzMediaStream8.getID()).log();
                return this.$OzMediaStream57()
            }
            this.$OzMediaStream15 = !0;
            var k = j[j.length - 1] || null,
                l = this.$OzMediaStream8,
                m = function() {
                    return l.isEndingSegment(k)
                };
            j.length !== 0 || c("oz-player/shims/ozvariant")(0, 23148);
            g = j[0];
            f = g.getTimeRange().startTime;
            var n = k.getTimeRange().endTime,
                o = {
                    startTime: f,
                    endTime: n,
                    tag: {
                        id: this.$OzMediaStream8.getID()
                    }
                },
                p = function(b) {
                    v.setAppendedBufferMs(Math.round(b.appendedSec * 1e3)), v.log(), a.$OzMediaStream26.handleEvent("append_succeeded"), j.forEach(function(b) {
                        a.emit("SegmentAppended", a.$OzMediaStream58(b, o))
                    }), m() && a.endStream("appended_ending_segment"), a.$OzMediaStream59(o, b)
                },
                q = function(b) {
                    v.setError(b).log();
                    var c = t || s;
                    c && c.cancel();
                    a.$OzMediaStream49(b)
                },
                r = this.$OzMediaStream18.cloneContext();
            r.setRepresentationID(this.$OzMediaStream8.getID());
            r.setSegmentStartTime(f).setSegmentEndTime(n);
            var s, t;
            !e ? (t = this.$OzMediaStream30.startStreamDeferred({
                segments: j,
                networkManager: this.$OzMediaStream12,
                sourceBufferState: b,
                playbackState: this.$OzMediaStream7,
                segmentsLoggerProvider: r.cloneContext(),
                mediaStreamType: this.$OzMediaStream44,
                dataAppendedCallback: p,
                dataAppendedErrorCallback: q
            }), this.$OzMediaStream13 = s) : (s = this.$OzMediaStream12.request(j, [c("oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter")(this.$OzMediaStream21)], r.cloneContext(), null, this.$OzMediaStream44, p, q), this.$OzMediaStream13 = s);
            this.$OzMediaStream31 = !0;
            var u = this.$OzMediaStream60(g, k, j.length),
                v = r.getOperationLogger("queued_append");
            v.start().setReason(this.$OzMediaStream16 && this.$OzMediaStream16.getLastEvaluationReason());
            var w = function(c, b) {
                    a.$OzMediaStream50({
                        data: c,
                        mimeCodecs: b,
                        clearSourceBufferRange: null,
                        dataAppendedCallback: p,
                        dataAppendedErrorCallback: q,
                        loggerProvider: r.cloneContext(),
                        appendTarget: u
                    })
                },
                x;
            !!t || !!s || c("oz-player/shims/ozvariant")(0, 23147);
            var y = this.$OzMediaStream8.getMimeCodecs();
            t ? (t.genStream().then(function(a) {
                return w(a, y)
            })["catch"](function(b) {
                return a.$OzMediaStream33.emitError(b)
            }), x = t.getStatusChangePromise()) : s && (w(s.getStream(), y), x = s.getStatusChangePromise());
            !x && c("oz-player/shims/ozvariant")(0, 51928);
            f = x.then(function(b) {
                a.$OzMediaStream61(b, k);
                return a.$OzMediaStream62()
            }).then(function() {
                a.$OzMediaStream2 = 0
            });
            return f["catch"](function(b) {
                var c, d = a.$OzMediaStream9;
                a.$OzMediaStream63(k);
                (c = a.$OzMediaStream40) == null ? void 0 : c.handleError(l.getID(), b);
                return a.$OzMediaStream64(b, k, d)
            })
        };
        e.handleError = function(a) {
            var b = this.$OzMediaStream18.getOperationLogger("media_stream_loop_error");
            b.setError(a).setResult("failed").log();
            return this.$OzMediaStream1.getNumber("loop_body_handle_error_interval_ms")
        };
        e.$OzMediaStream64 = function(a, b, e) {
            var f = this;
            this.$OzMediaStream31 = !1;
            var g = new(c("oz-player/shims/OzDeferred"))(c("oz-player/shims/OzMaybeNativePromise")),
                h = d("oz-player/utils/OzErrorUtils").getNormalizedErrorAndCode(a),
                i = h[0],
                j = h[1],
                k = d("oz-player/utils/OzErrorUtils").getOzErrorWithMIMEType(i, this.$OzMediaStream21),
                l = function(b) {
                    f.$OzMediaStream2++;
                    f.$OzMediaStream18.getOperationLogger("media_stream").setInitiator("fetch_stream_" + (b.behavior != null ? b.behavior : "default")).setLength(b.timeoutMs).setReason("" + k.getDescription()).setError(k).setCode(j.length > 0 ? Number.parseInt(j, 10) : null).setType(f.$OzMediaStream21).log();
                    if (b.behavior === "retry_failed_request") f.$OzMediaStream9 = e;
                    else if (b.behavior === "recover_failed_request" && a instanceof c("oz-player/utils/OzError")) {
                        var h;
                        h = (h = a.getExtra()) == null ? void 0 : h.headers;
                        h = c("oz-player/shims/OzNetworkDiagnostics").getNextValidSegmentId(h);
                        h != null && (f.$OzMediaStream9 = d("oz-player/streams/OzSegmentUtils").getSegmentForSequenceNumber(f.$OzMediaStream8, h - 1))
                    }
                    c("oz-player/shims/ozSetTimeoutAcrossTransitions")(function() {
                        f.emit("streamErrorRetry", k);
                        return g.resolve()
                    }, b.timeoutMs)
                };
            this.$OzMediaStream4 !== j ? (this.$OzMediaStream4 = j, this.$OzMediaStream3 = 1) : this.$OzMediaStream3++;
            h = !0;
            var m = function() {
                h = !1
            };
            i = {
                consecutiveFailuresForErrorCode: this.$OzMediaStream3,
                endStream: function() {
                    m(), f.$OzMediaStream10 = b, f.$OzMediaStream11 = b, f.endStream("streamError_event_object"), g.resolve()
                },
                error: k,
                isInitialRequest: !1,
                retry: function(a) {
                    var b;
                    m();
                    l({
                        timeoutMs: (b = a == null ? void 0 : a.waitMs) != null ? b : 0,
                        behavior: a == null ? void 0 : a.behavior
                    })
                },
                retryAttemptCount: this.$OzMediaStream2
            };
            this.emit("streamError", i);
            h && (this.$OzMediaStream33.emitError(k), this.$OzMediaStream2 = 0, g.resolve());
            return g.getPromise()
        };
        e.$OzMediaStream63 = function(a) {
            this.$OzMediaStream46();
            this.$OzMediaStream10 = a;
            this.$OzMediaStream30.finishTaskIfNoOngoingStream();
            a = this.$OzMediaStream6;
            a && a.cancelOperationAndCleanQueue(this.$OzMediaStream18)
        };
        e.$OzMediaStream61 = function(a, b) {
            a === "done" && (this.$OzMediaStream9 = b)
        };
        e.$OzMediaStream62 = function() {
            this.$OzMediaStream31 = !1
        };
        e.$OzMediaStream50 = function(a) {
            this.$OzMediaStream19.push(a), this.$OzMediaStream6 && this.$OzMediaStream45()
        };
        e.$OzMediaStream59 = function(a, b) {
            if (a == null) return;
            this.$OzMediaStream8.canPredict() && b.startTime_UNSAFE && b.endTime_UNSAFE ? this.$OzMediaStream25.add(b.startTime_UNSAFE, b.endTime_UNSAFE, a.tag) : this.$OzMediaStream25.add(a.startTime, a.endTime, a.tag)
        };
        e.$OzMediaStream45 = function() {
            var a = this;
            this.$OzMediaStream19.forEach(function(b) {
                var d = b.data,
                    e = b.mimeCodecs,
                    f = b.clearSourceBufferRange,
                    g = b.dataAppendedCallback,
                    h = b.dataAppendedErrorCallback,
                    i = b.loggerProvider;
                b = b.appendTarget;
                d = d instanceof Uint8Array || a.$OzMediaStream34 == null ? d : d.pipeThrough(new(c("oz-player/networks/OzReadableStreamDataReader"))(a.$OzMediaStream34.bind(a, a.$OzMediaStream8)));
                a.$OzMediaStream6 && a.$OzMediaStream6.queueData(d, e, f, i, b).then(function(a) {
                    if (!a) return;
                    g(a)
                })["catch"](function(a) {
                    h(a)
                })
            });
            this.$OzMediaStream19 = []
        };
        e.$OzMediaStream65 = function() {
            var a = this.$OzMediaStream6;
            if (!a) return c("oz-player/shims/OzMaybeNativePromise").resolve();
            var b = this.$OzMediaStream7.getCurrentTime(),
                d = [{
                    fromTime: 0,
                    toTime: b
                }],
                e = this.$OzMediaStream1.getNumber("clear_buffer_around_playhead_boundary_ms");
            if (e > 0) {
                e = e / 1e3;
                var f = a.getSourceBufferState();
                f = f.getBufferedRanges();
                f = f.length >= 1 ? f[f.length - 1].endTime : b;
                d = [{
                    fromTime: 0,
                    toTime: Math.max(0, b - e)
                }];
                b + e < f && d.push({
                    fromTime: b + e,
                    toTime: f
                })
            }
            return a.clearRangeWithWait(d)
        };
        e.$OzMediaStream66 = function(a) {
            return !1
        };
        e.$OzMediaStream49 = function(a) {
            var b = this;
            if (a instanceof c("oz-player/utils/OzError") && a.getType() === "OZ_SOURCE_BUFFER_QUOTA_EXCEEDED") {
                this.emit("streamErrorRetry", d("oz-player/utils/OzErrorUtils").getOzErrorWithMIMEType(a, this.$OzMediaStream21));
                this.$OzMediaStream26.handleEvent("append_quota_exceeded");
                var e = this.$OzMediaStream65();
                e.then(function() {
                    b.restartLoopBody()
                })["catch"](function(a) {
                    a = new(c("oz-player/utils/OzError"))({
                        type: "OZ_STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR",
                        description: a.name + ": " + a.message,
                        extra: {
                            originalError: a,
                            code: c("oz-player/utils/OzCustomErrorCode").STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR
                        }
                    });
                    b.$OzMediaStream33.emitError(a)
                })
            } else if (a.name === "cancelled") return;
            else c("oz-player/shims/ozReportUnexpectedError")(a, "OzMediaStream append error callback", "warn"), this.$OzMediaStream66(a) && this.$OzMediaStream33.emitError(a)
        };
        e.$OzMediaStream60 = function(a, b, c) {
            var d = 0;
            if (this.$OzMediaStream43) return Infinity;
            var e = this.$OzMediaStream1.getNumber("appends_per_segment");
            if (e > 0) {
                a = a.getByteRange();
                b = b.getByteRange();
                a && b && b.endByte != null && (d = Math.ceil((b.endByte - a.startByte + 1) / (c * e)))
            }
            d === 0 && (d = this.$OzMediaStream1.getNumber("append_byte_target_without_range"));
            return d
        };
        e.getIsAdaptationEnabled = function() {
            return this.$OzMediaStream29
        };
        e.enableAdaptation = function() {
            this.$OzMediaStream29 = !0
        };
        e.disableAdaptation = function() {
            this.$OzMediaStream29 = !1
        };
        e.cleanup = function() {
            this.$OzMediaStream23.stop(), this.$OzMediaStream5.then(function(a) {
                a.destroy()
            }), this.$OzMediaStream30.destroy(), this.$OzMediaStream17.release(), this.$OzMediaStream17.engage(), this.removeAllListeners(), this.$OzMediaStream20 && (this.$OzMediaStream20.remove(), this.$OzMediaStream20 = null)
        };
        e.getRepresentationIDAtTime = function(a) {
            var b = this.$OzMediaStream25.get(a);
            if (!b) {
                var c = this.$OzMediaStream8.getTimeRanges();
                c = c[c.length - 1];
                var d = .001;
                c && a >= c.endTime && a <= this.$OzMediaStream7.getDuration() + d && (b = this.$OzMediaStream25.get(c.endTime - d))
            }
            return b ? b.id : null
        };
        e.endStream = function(a) {
            var b;
            (b = this.$OzMediaStream14) == null ? void 0 : b.notifyMediaStreamEnded(this, a);
            this.$OzMediaStream67()
        };
        e.endStreamIfBufferedToEndTime = function() {
            var a = this.$OzMediaStream8.getTimeRanges();
            if (a.length > 0) {
                a = a[a.length - 1].endTime;
                if (this.$OzMediaStream6) {
                    var b = this.$OzMediaStream6.getSourceBufferState().getBufferedRanges();
                    b.length > 0 && (Math.abs(b[b.length - 1].endTime - a) < i && this.endStream("buffered_to_end_time"))
                }
            }
        };
        e.$OzMediaStream58 = function(a, b) {
            return {
                type: this.$OzMediaStream21.indexOf("audio") === 0 ? j.AUDIO : this.$OzMediaStream21.indexOf("video") === 0 ? j.VIDEO : j.CAPTION,
                segment: a,
                sourceBuffer: (a = (a = this.$OzMediaStream6) == null ? void 0 : (a = a.getDebug()) == null ? void 0 : a.SourceBuffer) != null ? a : null,
                timeRange: b
            }
        };
        e.$OzMediaStream46 = function() {
            this.$OzMediaStream9 = null
        };
        e.restartLoopBody = function() {
            this.$OzMediaStream46(), this.$OzMediaStream31 = !1, this.$OzMediaStream13 && this.$OzMediaStream13.cancel(), this.$OzMediaStream22 !== 0 && this.$OzMediaStream24 && this.$OzMediaStream24.resolve()
        };
        e.$OzMediaStream67 = function() {
            if (this.$OzMediaStream6) {
                var a = this.$OzMediaStream6.getSourceBufferState().getBufferedRanges();
                a.length > 0 && (this.$OzMediaStream32 = a[a.length - 1].endTime)
            }
        };
        e.$OzMediaStream54 = function() {
            return this.$OzMediaStream32 !== null
        };
        e.$OzMediaStream47 = function(a) {
            this.$OzMediaStream8.getID() === a && this.$OzMediaStream16 != null && this.$OzMediaStream48(this.$OzMediaStream16.getBestRepresentation())
        };
        e.setEnableLiveheadCatchup = function(a) {
            this.$OzMediaStream35 = a
        };
        e.clearSourceBufferRange = function(a, b) {
            var d = this.$OzMediaStream6;
            return d ? d.clearRangeWithWait([{
                fromTime: a,
                toTime: b
            }]) : c("oz-player/shims/OzMaybeNativePromise").resolve()
        };
        e.getDebug = function() {
            return {
                SourceBufferManager: this.$OzMediaStream6,
                MediaStreamAbrManager: this.$OzMediaStream16
            }
        };
        return b
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/streams/OzPredictedSegmentLocator", ["oz-player/streams/OzSegmentLocator", "oz-player/streams/OzSegmentUtils", "oz-player/utils/OzSourceBufferUtil"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b) {
        var c = 0;
        for (var d in a) {
            var e;
            if (d === b) continue;
            c = Math.max(c, (e = a[d].lastSkippedToSegmentNumber) != null ? e : 0)
        }
        return c
    }

    function i(a, b) {
        var c = null;
        for (var d in a) {
            if (d === b) continue;
            a[d].inBufferAheadTimeSince != null && (c = c != null ? Math.min(c, a[d].inBufferAheadTimeSince) : a[d].inBufferAheadTimeSince)
        }
        return c
    }
    a = function() {
        function a(a) {
            this.$5 = {};
            var b = a.videoNode,
                c = a.liveLatencyManager,
                d = a.loggerProvider;
            a = a.dynamicVideoLibrary;
            this.$1 = b;
            this.$2 = c;
            this.$3 = d;
            this.$4 = a
        }
        var b = a.prototype;
        b.getSegment = function(a, b, c, d, e, f, g, h, i) {
            var j;
            this.$5[i] == null && (this.$5[i] = {
                lastSkippedToSegmentNumber: null,
                inBufferAheadTimeSince: null
            });
            (j = this.$2) == null ? void 0 : j.setEnableCatchup(h);
            j = this.$6(a, b, c, d, e, f, g, h, i);
            (a = j.segment) == null ? void 0 : a.getOptions().setSegmentNumDecisionTime(Date.now());
            j.segment === null && this.$3.getOperationLogger("segment_locator").setInitiator(j.initiator).setReason(j.reason).setType(i).setUserInfo(j.userInfo).log();
            b = this.$4;
            if (j.segment && b != null) {
                c = j.segment.getOptions();
                c.setIsDVLEnabled(b.shouldRequestDynamicInfo(i))
            }
            return j.segment
        };
        b.$6 = function(a, b, c, e, f, g, j, k, l) {
            var m, n = b.getCurrentTime(),
                o = this.$2 == null ? !1 : this.$2.shouldEnableCursorBasedCatchup(),
                p = e != null ? d("oz-player/utils/OzSourceBufferUtil").getTotalBufferAheadOfPosition(e.getBufferedRanges(), b.getCurrentTime(), j) : {
                    bufferAheadSec: 0,
                    bufferedOffset: 0
                },
                q = p.bufferAheadSec;
            p = p.bufferedOffset;
            var r = null,
                s = null,
                t = this.$2 ? this.$2.enabled() : !0,
                u = a.getPredictedSegmentAfter(f),
                v = d("oz-player/streams/OzSegmentUtils").getSegmentForSequenceNumber(a, j.getNumber("pdash_download_cursor_between_catchups_seg") > 0 ? h(this.$5) : h(this.$5, l)),
                w = !0,
                x = null;
            if (o && k && ((m = u) == null ? void 0 : m.getSequenceNumber()) != null && ((m = (m = u) == null ? void 0 : m.getSequenceNumber()) != null ? m : 0) <= ((m = v == null ? void 0 : v.getSequenceNumber()) != null ? m : 0)) {
                u = v;
                r = "paired_catchup";
                this.$3.getOperationLogger("segment_locator").setInitiator(r).setUserInfo({
                    bufferAheadSec: String(q),
                    bufferedOffset: String(p)
                }).setLength(((m = v == null ? void 0 : v.getSequenceNumber()) != null ? m : 0) - ((m = (m = u) == null ? void 0 : m.getSequenceNumber()) != null ? m : 0)).setType(l).log();
                w = !1;
                x = r
            } else if (o && k && t && u != null && ((m = this.$2) == null ? void 0 : m.isBehindPreferredLiveHeadLatencyWithTolerance())) {
                if (this.$2 && q > this.$2.getPreferredLiveHeadLatencySec() && p == 0) return {
                    segment: null,
                    initiator: "catchup_pause",
                    userInfo: {
                        bufferAheadSec: String(q),
                        bufferedOffset: String(p)
                    }
                };
                o = a.getEndingSegment();
                k = d("oz-player/streams/OzSegmentUtils").getMaxSegment([o, u]);
                m = j.getNumber("pdash_download_cursor_between_catchups_seg") === 0 || ((m = v == null ? void 0 : v.getSequenceNumber()) != null ? m : 0) + j.getNumber("pdash_download_cursor_between_catchups_seg") < ((v = o == null ? void 0 : o.getSequenceNumber()) != null ? v : 0);
                if (m) {
                    if (((o = k == null ? void 0 : k.getSequenceNumber()) != null ? o : 0) > ((m = (v = u) == null ? void 0 : v.getSequenceNumber()) != null ? m : 0)) {
                        this.$5[l].lastSkippedToSegmentNumber = (o = k == null ? void 0 : k.getSequenceNumber()) != null ? o : 0;
                        this.$3.getOperationLogger("segment_locator").setInitiator("catchup").setUserInfo({
                            bufferAheadSec: String(q),
                            bufferedOffset: String(p)
                        }).setLength(((v = k == null ? void 0 : k.getSequenceNumber()) != null ? v : 0) - ((o = (m = u) == null ? void 0 : m.getSequenceNumber()) != null ? o : 0)).setType(l).log()
                    }
                    u = k;
                    r = "catchup";
                    w = !1;
                    x = r
                }
            } else if (f == null) {
                u = a.getSegmentByTime(n);
                r = "1st_run";
                v = a.getTimeRanges();
                s = {
                    approx: String(a.canApproximateId()),
                    ranges: String(v.length),
                    mpdStartTime: v.length > 0 ? String(v[v.length - 1].startTime) : null,
                    mpdEndTime: v.length > 0 ? String(v[v.length - 1].endTime) : null
                };
                this.$5[l].lastSkippedToSegmentNumber = (o = (m = u) == null ? void 0 : m.getSequenceNumber()) != null ? o : 0
            }
            w && (w = t, x = "stream_state");
            if (w && q > c) {
                this.$5[l].inBufferAheadTimeSince == null && (this.$5[l].inBufferAheadTimeSince = Date.now());
                return {
                    segment: null,
                    initiator: "buffer_ahead_rule",
                    userInfo: {
                        bufferAheadSec: String(q),
                        bufferedOffset: String(p),
                        lastMaxSegNum: String(h(this.$5, l)),
                        segment: u ? String(u.getSequenceNumber()) : null,
                        computedBufferAheadTarget: String(c)
                    }
                }
            } else !w && q > c && this.$3.getOperationLogger("segment_locator").setUserInfo({
                bufferAheadSec: String(q),
                bufferedOffset: String(p),
                computedBufferAheadTarget: String(c)
            }).setReason("disabled_buffer_ahead_rule:" + (x || "")).setType(l).log();
            k = g && g.getSequenceNumber() || 0;
            f = u && u.getSequenceNumber() || 0;
            if (u && g && k >= f) {
                n = d("oz-player/streams/OzSegmentLocator").getEndingSequenceNumber(a);
                return (n || 0) >= k ? {
                    segment: g
                } : {
                    segment: null,
                    initiator: "mpd_refresh",
                    userInfo: {
                        leSegNum: String(k)
                    }
                }
            }
            v = e ? d("oz-player/utils/OzSourceBufferUtil").getTotalInBufferedRanges(e.getBufferedRanges()) : 0;
            m = e ? d("oz-player/utils/OzSourceBufferUtil").getTotalBufferAheadOfPosition(e.getBufferedRanges(), b.getCurrentTime(), j).bufferAheadSec : 0;
            o = i(this.$5, l);
            t = Date.now();
            if (j.getNumber("download_cursor_total_buffer_max_sec") != 0 && j.getNumber("download_cursor_total_buffer_max_sec") < m || j.getNumber("download_cursor_buffer_ahead_time_max_sec") != 0 && o != null && j.getNumber("download_cursor_buffer_ahead_time_max_sec") < (t - o) / 1e3) {
                this.$5[l].lastSkippedToSegmentNumber = (x = (w = u) == null ? void 0 : w.getSequenceNumber()) != null ? x : 0;
                this.$3.getOperationLogger("segment_locator").setUserInfo({
                    bufferAheadSec: String(q),
                    bufferedOffset: String(p),
                    totalBufferedSec: String(v),
                    computedBufferAheadTarget: String(c),
                    inBufferAheadElapsedTime: String((t - ((f = o) != null ? f : 0)) / 1e3)
                }).setReason("force_paired_catchup").setType(l).log()
            }
            this.$5[l].inBufferAheadTimeSince = null;
            return {
                segment: u,
                initiator: r ? r : void 0,
                userInfo: s ? s : void 0
            }
        };
        return a
    }();
    g.OzPredictedSegmentLocator = a
}), 98);
__d("oz-player/utils/getRepresentationInCache", ["oz-player/networks/RequestParamCreator"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new(c("oz-player/networks/RequestParamCreator"))();

    function a(a, b) {
        b === void 0 && (b = null);
        return a.find(function(a) {
            a = a.getInitSegment();
            var c = a && a.getByteRange();
            return a && c && b ? b.hasCacheValue(h.createRequestParam(a.getURI(), c).uri.toString()) : !1
        }) || null
    }
    g["default"] = a
}), 98);
__d("oz-player/Player", ["Promise", "oz-player/configs/OzPlayerConfig", "oz-player/drm/OzDrmManager", "oz-player/loggings/OzDevConsolePerfLogger", "oz-player/loggings/OzLoggingUtils", "oz-player/loggings/OzMultiDestinationPerfLogger", "oz-player/loggings/OzOperationLoggerObserver", "oz-player/manifests/OzDynamicVideoLibrary", "oz-player/manifests/OzVideoRepresentation", "oz-player/media_source/MediaSourceManager", "oz-player/media_source/OzMediaSeekableRangeManager", "oz-player/networks/OzClientClock", "oz-player/networks/OzNetworkManager", "oz-player/parsers/OzMpdParser", "oz-player/parsers/OzMpdUpdater", "oz-player/parsers/OzXmlParserImplDOMParser", "oz-player/playback_controls/OzClearSourceBufferOnSeekManager", "oz-player/playback_controls/OzLiveLatencyManager", "oz-player/playback_controls/OzPlaybackTimeRangeManager", "oz-player/playback_controls/OzPlayheadManager", "oz-player/shims/OzEventEmitter", "oz-player/shims/OzMaybeNativePromise", "oz-player/shims/OzPerformance", "oz-player/shims/OzSubscriptionsHandler", "oz-player/shims/OzUuid", "oz-player/shims/ozClearTimeout", "oz-player/shims/ozReportUnexpectedError", "oz-player/shims/ozSetTimeoutAcrossTransitions", "oz-player/shims/ozvariant", "oz-player/states/OzObservedPlaybackState", "oz-player/states/OzPositionToViewport", "oz-player/strategies/OzAbrManager", "oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy", "oz-player/strategies/OzBlockedRepresentationsManager", "oz-player/strategies/OzBufferAheadPriorityStrategy", "oz-player/strategies/OzBufferAheadTargetStrategy", "oz-player/strategies/OzBufferEndLimitStrategy", "oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy", "oz-player/strategies/OzBufferTargetCalculator", "oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint", "oz-player/strategies/OzBufferingDetector", "oz-player/strategies/OzPausedStreamSegmentsCountStrategy", "oz-player/strategies/OzPlayheadAtInterruptionDetector", "oz-player/strategies/OzPlayingStatePriorityStrategy", "oz-player/strategies/OzPositionToViewportPriorityStrategy", "oz-player/strategies/OzPriorityCalculator", "oz-player/strategies/OzSingleCodecRestriction", "oz-player/strategies/OzStaleManifestBufferTargetStrategy", "oz-player/strategies/OzStartupBufferTargetStrategy", "oz-player/strategies/OzStaticStreamSegmentsStrategy", "oz-player/strategies/OzStreamSegmentsCountCalculator", "oz-player/strategies/OzSupportedMimeCodecsRestriction", "oz-player/streams/OzEndOfStreamWatcher", "oz-player/streams/OzHandleUserRepresentationSwitch", "oz-player/streams/OzMediaStream", "oz-player/streams/OzPredictedSegmentLocator", "oz-player/utils/OzCustomErrorCode", "oz-player/utils/OzError", "oz-player/utils/OzErrorEmitter", "oz-player/utils/OzMpdUtils", "oz-player/utils/OzPlaybackRestrictionsUtils", "oz-player/utils/OzReadableStreamUtils", "oz-player/utils/getRepresentationInCache"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i(a) {
        a || c("oz-player/shims/ozvariant")(0, 21876);
        return a
    }
    a = function(a) {
        babelHelpers.inheritsLoose(e, a);

        function e(b) {
            var e;
            e = a.call(this) || this;
            e.$Player5 = new Map();
            e.$Player6 = new Map();
            e.$Player9 = void 0;
            e.$Player10 = new(c("oz-player/shims/OzSubscriptionsHandler"))();
            e.$Player11 = new(c("oz-player/utils/OzErrorEmitter"))();
            e.$Player24 = [];
            e.$Player31 = null;
            e.$Player32 = null;
            e.$Player42 = null;
            e.$Player50 = !1;
            e.$Player53 = 0;
            e.$Player54 = null;
            e.$Player55 = null;
            e.$Player56 = 0;
            e.$Player57 = null;
            e.$Player58 = null;
            e.$Player59 = !1;
            e.$Player62 = null;
            e.$Player63 = null;
            e.$Player69 = !1;
            e.$Player70 = !1;
            e.$Player82 = function() {
                var a = new(c("oz-player/parsers/OzXmlParserImplDOMParser"))();
                return a
            };
            e.$Player84 = function() {
                e.$Player5.forEach(function(a) {
                    return a.endStreamIfBufferedToEndTime()
                })
            };
            e.$Player85 = function() {
                e.$Player5.forEach(function(a) {
                    return a.endStream("streamGone")
                })
            };
            var f = b.audioOnly;
            f = f === void 0 ? !1 : f;
            var g = b.bufferingDetector,
                h = b.videoNode,
                i = b.config,
                j = b.configMap,
                k = b.rawMpdXml,
                l = b.mpdUrl;
            l = l === void 0 ? null : l;
            var m = b.loggerConfig;
            m = m === void 0 ? {
                perfLoggerProviders: [],
                observedOperationLoggers: [],
                isOzDevConsoleEnabled: !1
            } : m;
            var n = b.customVTTBufferTargetStrategies;
            n = n === void 0 ? null : n;
            var o = b.prefetchCache;
            o = o === void 0 ? null : o;
            var p = b.getOverrideOzRequestImplementation;
            p = p === void 0 ? null : p;
            var q = b.getUserSelectedPlaybackRate,
                r = b.networkRequestStreamHandlers,
                s = b.networkRequestStreamRetryHandler,
                t = b.getShouldIncludeCredentials;
            t = t === void 0 ? null : t;
            var u = b.getCustomRequestParametersForURI;
            u = u === void 0 ? null : u;
            var v = b.initialRepresentationIDs;
            v = v === void 0 ? [] : v;
            var w = b.debugCreateInitiator;
            w = w === void 0 ? null : w;
            var x = b.customParsers;
            x = x === void 0 ? new Map() : x;
            var y = b.videoPlaybackRestrictions;
            y = y === void 0 ? [] : y;
            var z = b.customSegmentTimelineParser;
            z = z === void 0 ? null : z;
            var A = b.customRepresentationParsers;
            A = A === void 0 ? {} : A;
            var B = b.videoAbrManagerFactory;
            B = B === void 0 ? null : B;
            var C = b.seekHandler;
            C = C === void 0 ? null : C;
            var D = b.initialPlaybackPositionForDynamicMpd;
            D = D === void 0 ? -20 : D;
            var E = b.liveheadFallBehindBlockThreshold;
            E = E === void 0 ? 30 : E;
            var F = b.liveheadFallBehindBlockMargin;
            F = F === void 0 ? 5.9 : F;
            var G = b.startTimeStamp;
            G = G === void 0 ? 0 : G;
            var H = b.drmProviders;
            H = H === void 0 ? [] : H;
            var I = b.getVideoDimensions;
            I = I === void 0 ? null : I;
            var J = b.setCustomFetchStreamLoggingAttributes;
            J = J === void 0 ? null : J;
            var K = b.bufferEndLimit;
            K = K === void 0 ? null : K;
            var L = b.configureCustomRequestParametersForSegment;
            L = L === void 0 ? null : L;
            var M = b.isClientTriggeredTraceEnabled;
            M = M === void 0 ? !1 : M;
            var N = b.enableImmediateQualityDownSwitch;
            N = N === void 0 ? !1 : N;
            b = b.userPreferenceLang;
            b = b === void 0 ? "" : b;
            e.$Player1 = n;
            e.$Player48 = w;
            n = m.perfLoggerProviders;
            w = m.observedOperationLoggers;
            m = m.isOzDevConsoleEnabled;
            e.$Player16 = m || !1;
            e.$Player15 = new(d("oz-player/loggings/OzMultiDestinationPerfLogger").OzMultiDestinationPerfLoggerProvider)(e.$Player72().concat(n));
            e.$Player2 = f;
            e.$Player4 = (m = i) != null ? m : new(c("oz-player/configs/OzPlayerConfig"))((n = j) != null ? n : {});
            e.$Player21 = new(c("oz-player/loggings/OzOperationLoggerObserver"))();
            e.$Player21.observe(w, e.$Player15);
            e.$Player15.getOperationLogger("player_initialization").setInitiator("player-" + c("oz-player/shims/OzUuid")()).log();
            e.$Player52 = p;
            e.$Player27 = x;
            e.$Player66 = new(c("oz-player/strategies/OzBlockedRepresentationsManager"))(e.$Player4);
            e.$Player10.addSubscriptions(e.$Player66.onRepresentationBlocked(function(a) {
                e.emit("representationBlocked", a)
            }));
            e.$Player30 = [e.$Player66, new(c("oz-player/strategies/OzSupportedMimeCodecsRestriction"))()].concat(y, [new(c("oz-player/strategies/OzSingleCodecRestriction"))()]);
            e.$Player28 = A;
            e.$Player29 = z;
            e.$Player34 = B;
            e.$Player35 = C;
            e.$Player36 = G;
            e.$Player37 = D;
            e.$Player40 = (f = q) != null ? f : function() {
                return 1
            };
            e.$Player38 = E;
            e.$Player41 = F;
            e.$Player65 = K;
            e.$Player68 = M;
            e.$Player70 = N;
            e.$Player46 = H;
            e.$Player62 = J;
            e.$Player3 = h;
            e.$Player7 = new(c("oz-player/media_source/MediaSourceManager"))({
                videoNode: e.$Player3,
                config: e.$Player4,
                perfLoggerProvider: e.$Player15,
                handleVttCaptionsUpdated: function(a) {
                    var b;
                    b = (b = e.$Player5.get("caption")) == null ? void 0 : (b = b.getCurrentRepresentation()) == null ? void 0 : b.getLang();
                    e.emit("vttCaptionsUpdated", a, b)
                },
                onClearVideoNodeError: function() {
                    e.$Player73()
                },
                onRetryVideoElementError: function(a) {
                    e.emit("videoNodeErrorRetry", a)
                }
            });
            e.$Player7.onError(function(a) {
                e.$Player11.emitError(a)
            });
            if (e.$Player4.getBool("clear_on_seek")) {
                i = new(c("oz-player/playback_controls/OzClearSourceBufferOnSeekManager"))(e.$Player3, e.$Player4, e.$Player5, e.$Player15);
                i.maybeOverwriteVideoCurrentTimeProperty();
                e.$Player10.addSubscriptions(i.onError(e.$Player11.emitError));
                e.$Player63 = i
            }
            e.$Player23 = o;
            m = e.$Player23 && e.$Player23.getCachedRepresentations();
            e.$Player24 = m || v;
            e.$Player64 = new(c("oz-player/manifests/OzDynamicVideoLibrary"))({
                config: e.$Player4
            });
            e.$Player43 = r;
            e.$Player44 = t;
            e.$Player45 = u;
            e.$Player67 = L;
            e.$Player12 = new(c("oz-player/networks/OzNetworkManager"))({
                config: e.$Player4,
                prefetchCache: e.$Player23,
                networkRequestStreamHandlers: e.$Player43,
                getOverrideOzRequestImplementation: e.$Player52,
                getShouldIncludeCredentials: e.$Player44,
                getCustomRequestParametersForURI: e.$Player45,
                networkRequestStreamRetryHandler: s,
                setCustomFetchStreamLoggingAttributes: e.$Player62,
                dynamicVideoLibrary: e.$Player64,
                configureCustomRequestParametersForSegment: e.$Player67,
                onResourceTimingBufferFull: function() {
                    e.$Player74()
                }
            });
            e.$Player17 = l;
            e.$Player8 = k;
            e.$Player13 = new(c("oz-player/states/OzObservedPlaybackState"))(e.$Player4, e.$Player3, e.$Player15);
            e.$Player51 = I;
            e.$Player14 = new(c("oz-player/streams/OzEndOfStreamWatcher"))(e.$Player7, e.$Player4);
            e.$Player10.addSubscriptions(e.$Player14.addListener("streamEnd", function() {
                e.$Player50 = !0, e.emit("streamEnd")
            }));
            e.$Player49 = (j = g) != null ? j : e.$Player75();
            e.$Player4.getNumber("pixels_below_viewport_to_observe") > 0 && (e.$Player60 = new(c("oz-player/states/OzPositionToViewport"))(e.$Player3, e.$Player4));
            e.$Player71 = b;
            return e
        }
        var f = e.prototype;
        f.$Player74 = function() {
            if (this.$Player69) return;
            c("oz-player/shims/ozReportUnexpectedError")(new Error("ResourceTiming buffer is full"), "ResourceTiming buffer is full", "warn");
            this.$Player69 = !0
        };
        f.$Player76 = function(a) {
            var b = this;
            this.$Player77();
            try {
                var e = d("oz-player/loggings/OzLoggingUtils").executeOperationAndLog(this.$Player15.cloneContext().setInitiator(this.$Player48), "parse_manifest", function(e) {
                    var f, g, c = b.$Player78(a);
                    f = String((f = c.getCustomField("currentServerTimeMs")) != null ? f : "");
                    g = String((g = c.getCustomField("lastVideoFrameTs")) != null ? g : "");
                    f = {
                        currentServerTimeMs: f,
                        ingestLastVideoFrameTs: g,
                        nowMs: String(Date.now())
                    };
                    g = d("oz-player/utils/OzMpdUtils").getMpdLastTimeRange(c, b.$Player4);
                    g = g && g.endTime != 0 ? g.endTime : null;
                    e.setLiveheadPosition(g).setLiveheadSeqNumMpd(d("oz-player/utils/OzMpdUtils").getMpdLastSequenceNumber(c)).setManifestType(c.isStaticMpd() ? "static" : "dynamic").setIsTemplatedManifest(Boolean(c.getCustomField("isLiveTemplated"))).setUserInfo(f);
                    return c
                });
                this.$Player79(e)
            } catch (a) {
                e = a;
                if (e instanceof c("oz-player/utils/OzError")) this.$Player11.emitError(e);
                else throw e
            }
        };
        f.$Player79 = function(a) {
            var b = this;
            this.$Player9 = i(a);
            this.$Player4.getBool("player_emit_mpdparsed_early") && this.emit("mpdParsed", a);
            this.$Player25 = this.$Player80();
            this.$Player26 = this.$Player81();
            this.$Player66.setAvailableRepresentationsCount(a.getVideoRepresentations().length);
            if (this.$Player17 != null) {
                var d = new(c("oz-player/parsers/OzMpdUpdater"))(this.$Player4, a, this.$Player12, this.$Player13, this.$Player15, {
                    mpdUrl: null,
                    createXmlParser: this.$Player82,
                    customParsers: this.$Player27,
                    customRepresentationParsers: this.$Player28,
                    customSegmentTimelineParser: this.$Player29
                }, this.$Player47, this.$Player68);
                this.$Player83(d);
                this.$Player10.addSubscriptions(d.onError(this.$Player11.emitError), d.addListener("manifestFetchError", function(a) {
                    return b.emit("manifestFetchError", a)
                }), d.addListener("manifestFetchErrorRetry", function(a) {
                    return b.emit("manifestFetchErrorRetry", a)
                }), d.addListener("streamTransitionToStatic", this.$Player84), d.addListener("streamGone", this.$Player85));
                d.setupUpdateLoop();
                this.$Player20 = d
            }
            this.$Player4.getBool("use_live_latency_manager") ? !a.isStaticMpd() ? (this.$Player39 = new(c("oz-player/playback_controls/OzLiveLatencyManager"))({
                config: this.$Player4,
                mpd: a,
                playbackState: this.$Player13,
                bufferingDetector: this.$Player49,
                video: this.$Player3,
                loggerProvider: this.$Player15,
                getUserSelectedPlaybackRate: this.$Player40
            }), this.$Player36 = this.$Player39.getPreferredLiveHeadLatencySec() * -1) : this.$Player36 = this.$Player36 : this.$Player36 = a.isStaticMpd() ? this.$Player36 : this.$Player86(a);
            this.$Player18 = new(c("oz-player/playback_controls/OzPlayheadManager"))({
                video: this.$Player3,
                mpd: a,
                dynamicVideoLibrary: this.$Player64,
                playheadCatchup: this.$Player33,
                playbackState: this.$Player13,
                config: this.$Player4,
                perfLoggerProvider: this.$Player15,
                seekHandler: this.$Player35,
                initialPlaybackPosition: this.$Player36,
                canSupportSkipVideobufferGaps: (d = (d = this.$Player63) == null ? void 0 : d.getCurrentTimePropertyOverwriteSuccess()) != null ? d : !1,
                liveLatencyManager: this.$Player39
            });
            this.$Player19 = new(c("oz-player/playback_controls/OzPlaybackTimeRangeManager"))({
                config: this.$Player4,
                video: this.$Player3,
                mpd: a,
                liveheadFallBehindBlockThreshold: this.$Player38,
                liveheadFallBehindBlockMargin: this.$Player41,
                playbackState: this.$Player13,
                perfLoggerProvider: this.$Player15
            });
            this.$Player87()["catch"](function(a) {
                if (a instanceof c("oz-player/utils/OzError")) b.$Player11.emitError(a);
                else {
                    var d = typeof a === "object" && a != null && a.message != null && a.message !== "" ? String(a.message) : String(a);
                    b.$Player11.emitError(new(c("oz-player/utils/OzError"))({
                        type: "OZ_INITIALIZATION",
                        description: "Failed to setup streams: " + d,
                        extra: {
                            originalError: a,
                            code: c("oz-player/utils/OzCustomErrorCode").SETUP_STREAMS_PROMISE_REJECTION.toString()
                        }
                    }))
                }
            });
            this.emit("mpdReady", a)
        };
        f.load = function(a) {
            var b = this;
            this.$Player17 = a;
            try {
                var d = this.$Player8;
                d != null ? this.$Player76(d) : a != null ? this.$Player88(a).then(function(a) {
                    if (b.$Player59) {
                        b.$Player59 = !1;
                        b.load(b.$Player17);
                        return
                    }
                    b.$Player8 = a;
                    b.$Player53 = 0;
                    b.$Player76(a)
                })["catch"](function(d) {
                    var e;
                    if (b.$Player59) {
                        b.$Player59 = !1;
                        b.load(b.$Player17);
                        return
                    }
                    e = d instanceof c("oz-player/utils/OzError") ? d : new(c("oz-player/utils/OzError"))({
                        type: "OZ_INITIALIZATION",
                        description: "Unknown mpd url load failure; errorMessage: " + d.message + "; errorDescription: " + ((e = d.description) != null ? e : "") + ";",
                        extra: {
                            originalError: d,
                            url: a
                        }
                    });
                    b.$Player89(e, a)
                }) : this.$Player11.emitError(new(c("oz-player/utils/OzError"))({
                    type: "OZ_INITIALIZATION",
                    description: "Cannot start Oz without a raw mpd xml or mpd url"
                }))
            } catch (a) {
                d = a instanceof c("oz-player/utils/OzError") ? a : new(c("oz-player/utils/OzError"))({
                    type: "OZ_INITIALIZATION",
                    description: "Failed to call load" + ("; errorMessage: " + a.message + "; errorDescription: " + ((d = a.description) != null ? d : "") + ";")
                });
                this.$Player11.emitError(d)
            }
        };
        f.$Player86 = function(a) {
            var b;
            b = (b = a.getVideoRepresentations()[0].getMaxGopSec()) != null ? b : 0;
            a = (a = a.getVideoRepresentations()[0].getEndingSegment()) == null ? void 0 : a.getTimeRange();
            a = a != null ? a.endTime - a.startTime : 0;
            a > 0 && (b = a);
            return Math.min(this.$Player37 + this.$Player4.getNumber("dynamic_mpd_initial_playback_position_offset_modifier"), -1 * b * this.$Player4.getNumber("pdash_download_cursor_catchup_threshold_gop_multiplier"))
        };
        f.$Player88 = function(a) {
            this.$Player53++;
            a = this.$Player12.requestRawUrl(a, null, this.$Player15);
            a = a.getStream().getReader();
            return d("oz-player/utils/OzReadableStreamUtils").pumpString(a)
        };
        f.$Player90 = function() {
            this.$Player54 != null && (c("oz-player/shims/ozClearTimeout")(this.$Player54), this.$Player54 = null)
        };
        f.$Player89 = function(a, b) {
            var d = this,
                e = !0,
                f = this.$Player53 - 1,
                g = a.getExtra().code;
            this.$Player55 !== g ? (this.$Player55 = g, this.$Player56 = 1) : this.$Player56++;
            var h = function() {
                e = !1
            };
            g = {
                endStream: function() {
                    h(), d.$Player50 = !0, d.emit("streamGoneBeforeStart")
                },
                consecutiveFailuresForErrorCode: this.$Player56,
                error: a,
                isInitialRequest: !0,
                retry: function(a) {
                    h(), d.$Player90(), d.$Player54 = c("oz-player/shims/ozSetTimeoutAcrossTransitions")(function() {
                        d.$Player90(), d.load(b)
                    }, (a == null ? void 0 : a.waitMs) != null ? a == null ? void 0 : a.waitMs : 1e3)
                },
                retryAttemptCount: f
            };
            this.$Player4.getNumber("initial_manifest_request_retry_count") > 0 && this.emit("manifestFetchError", g);
            e && this.$Player11.emitError(a)
        };
        f.updatePlayerRunTimeConfig = function(a) {
            var b = a.manifestUrl,
                c = a.audioStreamDataHandler,
                d = a.videoStreamDataHandler,
                e = a.applicationStreamDataHandler;
            a = a.resetStreamAnchor;
            if (d !== void 0) {
                var f = this.$Player5.get("video");
                f && f.updateRunTimeConfigs({
                    streamDataHandler: d
                })
            }
            if (a !== void 0) {
                f = this.$Player5.get("video");
                f && f.updateRunTimeConfigs({
                    resetStreamAnchor: a
                });
                d = this.$Player5.get("audio");
                d && d.updateRunTimeConfigs({
                    resetStreamAnchor: a
                });
                this.$Player18.resetCurrentTime()
            }
            if (c !== void 0) {
                f = this.$Player5.get("audio");
                f && f.updateRunTimeConfigs({
                    streamDataHandler: c
                })
            }
            if (e !== void 0) {
                d = this.$Player5.get("caption");
                d && d.updateRunTimeConfigs({
                    streamDataHandler: e,
                    resetStreamAnchor: a
                })
            }
            b != null && b !== "" && this.$Player91(b)
        };
        f.$Player92 = function(a, b) {
            var c = this,
                e = a.getMimeCodecs();
            e = this.$Player7.createSourceBufferManager(e, b, a.getInitSegment().getData());
            this.$Player93(e, b, a);
            a = e.then(function(a) {
                c.$Player49 && b !== "caption" && c.$Player49.setSourceBufferState(b, a.getSourceBufferState());
                return a
            });
            d("oz-player/loggings/OzLoggingUtils").monitorPromiseAndLogOperation(a, this.$Player15, "source_attach", function(a) {
                a.setType(b)
            });
            return a.then(function(a) {
                b !== "caption" && c.$Player18.observeSourceBufferState(a.getSourceBufferState(), b)
            })
        };
        f.isDrm = function() {
            var a = this.$Player47;
            if (a != null) {
                a = a.hasContentProtections();
                return a != null ? a : !1
            }
            return !1
        };
        f.$Player77 = function() {
            if (this.$Player46.length > 0) {
                var a = this.$Player47 = new(d("oz-player/drm/OzDrmManager").OzDrmManager)(this.$Player15, this.$Player3, {
                    maxStartEMEAttempts: this.$Player4.getNumber("max_start_eme_attempts"),
                    throwNoLicenseError: !0
                });
                a.onError(this.$Player11.emitError);
                this.$Player46 && this.$Player46.forEach(function(b) {
                    a.addProvider(b)
                })
            }
        };
        f.$Player94 = function(a) {
            var b = this,
                d = i(this.$Player9);
            a = [this.$Player4, a, d.getVideoRepresentations(), this.$Player30, this.$Player13, window.devicePixelRatio || 1, function() {
                return b.$Player95()
            }, d.isStaticMpd() ? "static" : "dynamic"];
            d = this.$Player34 && this.$Player34.apply(this, a);
            return (d = d) != null ? d : babelHelpers.construct(c("oz-player/strategies/OzAbrManager"), a)
        };
        f.$Player96 = function(a) {
            return a === "caption" ? !0 : !1
        };
        f.$Player93 = function(a, b, e) {
            var f = this,
                g = i(this.$Player9),
                h = this.$Player6.get(b),
                j = new(c("oz-player/streams/OzMediaStream"))({
                    config: this.$Player4,
                    sourceBufferManagerPromise: a,
                    networkManager: this.$Player12,
                    playbackState: this.$Player13,
                    endOfStreamWatcher: b !== "caption" ? this.$Player14 : null,
                    bufferTargetCalculator: this.$Player97(b),
                    priorityCalculator: this.$Player98(),
                    streamSegmentsCountCalculator: this.$Player99(b),
                    abrManager: h,
                    representation: e,
                    loggerProvider: this.$Player15.cloneContext().setType(b),
                    segmentLocator: this.$Player61,
                    setCustomFetchStreamLoggingAttributes: this.$Player62,
                    blockedRepresentationsManager: this.$Player66,
                    dynamicVideoLibrary: this.$Player64,
                    shouldAppendOncePerStream: this.$Player96(b),
                    mediaStreamType: b
                });
            this.$Player36 === 0 ? j.start() : (i(this.$Player9), this.$Player10.addSubscriptions(this.$Player18.addListener("initialPlaybackPositionSet", function() {
                j.start()
            })));
            this.$Player10.addSubscriptions(j.onError(this.$Player11.emitError));
            this.$Player22 && this.$Player10.addSubscriptions(this.$Player22.listenToMediaStreamInitAppended(j));
            b === "video" && (this.$Player32 = new(c("oz-player/streams/OzHandleUserRepresentationSwitch"))(this.$Player4, this.$Player13, d("oz-player/utils/OzPlaybackRestrictionsUtils").applyVideoPlaybackRestrictions(this.$Player4, this.$Player30, this.$Player95(), g.getVideoRepresentations()), j, a, this.$Player70), this.$Player10.addSubscriptions(this.$Player32.onError(this.$Player11.emitError)));
            this.$Player5.set(b, j);
            this.$Player10.addSubscriptions(j.addListener("switchRepresentation", function() {
                var c, a = j.getCurrentRepresentation();
                (c = f.$Player22) == null ? void 0 : c.setTimeRangeProvider(a);
                f.$Player18.setTimeRangeProvider(a);
                f.$Player19 != null && f.$Player19.setTimeRangeProvider(a);
                b === "video" && f.emit("switchVideoRepresentation")
            }), j.addListener("SegmentAppended", function(a) {
                f.$Player100("SegmentAppended", a)
            }), j.addListener("streamError", function(a) {
                f.emit("streamError", a)
            }), j.addListener("streamErrorRetry", function(a) {
                f.emit("streamErrorRetry", a)
            }))
        };
        f.$Player101 = function() {
            if (this.$Player65 != null) return [new(c("oz-player/strategies/OzBufferEndLimitStrategy"))(this.$Player3, this.$Player65)];
            else return [new(c("oz-player/strategies/OzStaleManifestBufferTargetStrategy"))(i(this.$Player9), this.$Player4), new(c("oz-player/strategies/OzStartupBufferTargetStrategy"))(this.$Player13, this.$Player4), new(c("oz-player/strategies/OzBufferAheadTargetStrategy"))(this.$Player4)]
        };
        f.$Player102 = function() {
            return this.$Player65 == null ? [new(c("oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint"))({
                config: this.$Player4,
                minimumBufferTargetSec: this.$Player4.getNumber("buffer_target_constraint_minimum_sec")
            })] : []
        };
        f.$Player103 = function() {
            return this.$Player65 == null ? [new(c("oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint"))({
                config: this.$Player4,
                minimumBufferTargetSec: 0
            })] : []
        };
        f.$Player80 = function() {
            return new(c("oz-player/strategies/OzBufferTargetCalculator"))(this.$Player101(), this.$Player102())
        };
        f.$Player81 = function() {
            return this.$Player1 != null ? new(c("oz-player/strategies/OzBufferTargetCalculator"))([].concat(this.$Player1, this.$Player101()), this.$Player103()) : this.$Player80()
        };
        f.$Player97 = function(a) {
            return a === "caption" ? this.$Player26 : this.$Player25
        };
        f.$Player83 = function(a) {
            var b = this;
            if (this.$Player4.getNumber("stream_interrupt_check_mpd_stale_count_threshold") > 0) {
                var d = this.$Player49,
                    e = new(c("oz-player/strategies/OzPlayheadAtInterruptionDetector"))(this.$Player3, d);
                this.$Player10.addSubscriptions(e.addListener("playheadAtInterruption", function(a) {
                    b.$Player15.getOperationLogger("stream_interrupted").log(), b.emit("streamInterruptAt", a)
                }), a.addListener("streamInterruptAt", function(a) {
                    var c;
                    (c = b.$Player49) == null ? void 0 : c.notifyStreamInterrupted();
                    e.notifyStreamInterrupted(a)
                }), a.addListener("streamResumedAt", function(a) {
                    var c;
                    b.$Player15.getOperationLogger("stream_resumed").log();
                    (c = b.$Player49) == null ? void 0 : c.notifyStreamResumed();
                    e.notifyStreamResumed();
                    b.emit("streamResumedAt", a)
                }));
                this.$Player31 = e
            }
        };
        f.$Player98 = function() {
            var a = [new(c("oz-player/strategies/OzPlayingStatePriorityStrategy"))(this.$Player13), new(c("oz-player/strategies/OzBufferAheadPriorityStrategy"))(this.$Player4, this.$Player13)].concat(this.$Player4.getNumber("pixels_below_viewport_to_observe") > 0 && this.$Player60 != null ? new(c("oz-player/strategies/OzPositionToViewportPriorityStrategy"))(this.$Player60, this.$Player4) : []);
            return new(c("oz-player/strategies/OzPriorityCalculator"))(a)
        };
        f.$Player99 = function(a) {
            var b = [new(c("oz-player/strategies/OzStaticStreamSegmentsStrategy"))(this.$Player4), new(c("oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy"))(this.$Player97(a), this.$Player4)];
            this.$Player4.getNumber("paused_stream_segments_count") !== 0 && b.push(new(c("oz-player/strategies/OzPausedStreamSegmentsCountStrategy"))(this.$Player13, this.$Player4));
            if (a === "video") {
                a = i(this.$Player9);
                b.push(new(c("oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy"))(this.$Player4, a.getVideoRepresentations()))
            }
            return new(c("oz-player/strategies/OzStreamSegmentsCountCalculator"))(b)
        };
        f.onError = function(a) {
            return this.$Player11.onError(a)
        };
        f.getSelectedVideoQuality = function() {
            var a = this.$Player9;
            if (!a || this.$Player2) return "";
            var b = this.$Player5.get("video");
            b = b && b.getCurrentRepresentation();
            if (b instanceof c("oz-player/manifests/OzVideoRepresentation")) return b.getDisplayLabel();
            b = a.getVideoRepresentations();
            a = b[0];
            if (a) return a.getDisplayLabel();
            a || c("oz-player/shims/ozvariant")(0, 19857);
            return ""
        };
        f.getSelectedAudioTrackID = function() {
            var a = this.$Player9;
            if (!a) return null;
            var b = this.$Player5.get("audio");
            b = b && b.getCurrentRepresentation();
            if (b) return b.getID();
            b = a.getAudioRepresentations();
            a = b[0];
            return a ? a.getID() : null
        };
        f.switchToVideoQuality = function(a) {
            var b = i(this.$Player9);
            b = b.getVideoRepresentations().find(function(b) {
                return b.getDisplayLabel() === a
            });
            if (b) {
                var c = this.$Player5.get("video");
                c && (c.switchRepresentation(b), c.disableAdaptation())
            }
        };
        f.switchToAudioTrack = function(a) {
            var b = i(this.$Player9);
            b = b.getAudioRepresentations().find(function(b) {
                return b.getID() === a
            });
            if (b) {
                var c = this.$Player5.get("audio");
                if (c) {
                    var d = 0,
                        e = this.$Player3.duration;
                    c.switchRepresentation(b, [d, e]);
                    c.disableAdaptation()
                }
            }
        };
        f.getIsVideoQualityAdaptationEnabled = function() {
            var a = this.$Player5.get("video");
            return a ? a.getIsAdaptationEnabled() : !1
        };
        f.enableVideoQualityAdaptation = function() {
            var a = this.$Player5.get("video");
            a && a.enableAdaptation()
        };
        f.getVideoQualities = function() {
            var a = this,
                b = this.$Player9;
            return !b ? [] : b.getVideoRepresentations().filter(function(b) {
                var c;
                return !((c = a.$Player66) == null ? void 0 : c.isBlocked(b.getID()))
            }).map(function(a) {
                return a.getDisplayLabel()
            })
        };
        f.getAudioTracks = function() {
            var a = this,
                b = this.$Player9;
            return !b ? [] : b.getAudioRepresentations().filter(function(b) {
                var c;
                return !((c = a.$Player66) == null ? void 0 : c.isBlocked(b.getID()))
            }).map(function(a) {
                return {
                    id: a.getID(),
                    displayLabel: a.getDisplayLabel(),
                    lang: a.getLang(),
                    role: a.getRole()
                }
            })
        };
        f.setEnableLiveheadCatchup = function(a) {
            if (this.$Player19) {
                var b;
                a ? this.$Player15.getOperationLogger("live_catchup_enabled").setIsLatencyCachupEnabled(!0).log() : this.$Player15.getOperationLogger("live_catchup_disabled").setIsLatencyCachupEnabled(!1).log();
                (b = this.$Player19) == null ? void 0 : b.setTimelineBlockingEnabled(a)
            }
            this.$Player5.forEach(function(b) {
                b.setEnableLiveheadCatchup(a)
            });
            this.$Player18.setEnableLiveheadCatchup(a)
        };
        f.$Player87 = function() {
            var a = this,
                c = i(this.$Player9);
            c = c.getVideoRepresentations()[0];
            this.$Player61 = c && c.canPredict() && this.$Player4.getBool("pdash_use_pdash_segmentlocator") || c && c.canApproximateId() ? new(d("oz-player/streams/OzPredictedSegmentLocator").OzPredictedSegmentLocator)({
                videoNode: this.$Player3,
                liveLatencyManager: this.$Player39,
                loggerProvider: this.$Player15,
                dynamicVideoLibrary: this.$Player64
            }) : null;
            c = this.$Player2 ? [this.$Player104({
                liveConfigsFromAudioStream: !0
            }), this.$Player105()] : [this.$Player106(), this.$Player104({
                liveConfigsFromAudioStream: !1
            }), this.$Player105()];
            var e = [];
            return (h || (h = b("Promise"))).all(c).then(function() {
                var b = a.$Player5.get("video"),
                    c = a.$Player5.get("audio"),
                    d = a.$Player5.get("caption");
                b && e.push(b.getCurrentRepresentation());
                c && e.push(c.getCurrentRepresentation());
                d && e.push(d.getCurrentRepresentation());
                e.forEach(function(b) {
                    a.$Player10.addSubscriptions(b.addUpdateListener(function() {
                        a.$Player100("SegmentIndexesUpdated", e)
                    }))
                });
                a.$Player100("InitialSegmentIndexes", e);
                a.$Player3 && a.$Player3.style && (a.$Player3.style.display = a.$Player2 ? "none" : "block");
                a.emit("initialized")
            })
        };
        f.$Player107 = function(a) {
            if (!a.getTimeRanges().length) {
                this.$Player15.getOperationLogger("playhead_adjustment").setInitiator("setup_initial_duration").setResult("failed").log();
                return
            }
            a = a.getTimeRanges()[a.getTimeRanges().length - 1].endTime;
            this.$Player7.updateDuration(a, !0)
        };
        f.$Player108 = function(a) {
            var b;
            this.$Player22 = new(c("oz-player/media_source/OzMediaSeekableRangeManager"))(this.$Player7, this.$Player4);
            this.$Player107(a);
            (b = this.$Player22) == null ? void 0 : b.setTimeRangeProvider(a);
            this.$Player18.setTimeRangeProvider(a);
            this.$Player19 != null && this.$Player19.setTimeRangeProvider(a)
        };
        f.$Player106 = function() {
            var a = i(this.$Player9);
            a = a.getVideoRepresentations();
            if (!a.length) return c("oz-player/shims/OzMaybeNativePromise").reject(new Error("no video representations in the manifest."));
            var b = d("oz-player/utils/OzPlaybackRestrictionsUtils").applyVideoPlaybackRestrictions(this.$Player4, this.$Player30, this.$Player95(), a);
            if (!b.length) {
                a = a.map(function(a) {
                    return a.getDisplayLabel() + "@" + a.getWidth() + "x" + a.getHeight() + "(" + a.getMimeCodecs() + ")"
                });
                return c("oz-player/shims/OzMaybeNativePromise").reject(new Error("restricted all video representations: " + a.join(", ")))
            }
            this.$Player108(b[0]);
            a = this.$Player109(b);
            var e = this.$Player94(a || b[0]);
            this.$Player6.set("video", e);
            a || (a = e.getBestRepresentation());
            return this.$Player92(a || b[0], "video")
        };
        f.$Player104 = function(a) {
            var b = this;
            a = a.liveConfigsFromAudioStream;
            a = a === void 0 ? !1 : a;
            var d = i(this.$Player9);
            d = d.getAudioRepresentations();
            a && this.$Player108(d[0]);
            a = d[0];
            if (this.$Player4.getBool("enable_alternative_audio_tracks")) {
                var e = -1;
                this.$Player71 != null && (e = d.findIndex(function(a) {
                    return a.getLang() === b.$Player71
                }));
                a = e >= 0 && e < d.length ? d[e] : a
            }
            return d.length ? this.$Player92(this.$Player110(d) || a, "audio") : c("oz-player/shims/OzMaybeNativePromise").resolve()
        };
        f.$Player105 = function() {
            var a = i(this.$Player9);
            a = a.getApplicationRepresentations();
            return a.length ? this.$Player92(this.$Player111(a) || a[0], "caption") : c("oz-player/shims/OzMaybeNativePromise").resolve()
        };
        f.getMpd = function() {
            return this.$Player9
        };
        f.destroy = function(a) {
            var c, d, e = this;
            a = this.$Player15.getOperationLogger("unload").setInitiator(a).start();
            (c = this.$Player63) == null ? void 0 : c.destroy();
            this.$Player90();
            this.$Player5.forEach(function(a) {
                a.cleanup()
            });
            this.$Player32 && this.$Player32.cleanup();
            this.$Player5 = new Map();
            this.$Player10.release();
            this.$Player10.engage();
            this.$Player13.destroy();
            this.$Player18 && this.$Player18.destroy();
            this.$Player39 && (this.$Player39.destroy(), this.$Player39 = null);
            this.$Player19 && (this.$Player19.destroy(), this.$Player19 = null);
            this.$Player47 && this.$Player47.destroy();
            this.$Player60 && this.$Player60.destroy();
            this.$Player12 && this.$Player12.destroy();
            this.$Player51 && (this.$Player51 = null);
            this.$Player7 && this.$Player7.detach();
            c = (h || (h = b("Promise"))).resolve();
            this.$Player3.pause();
            this.$Player3.removeAttribute("src");
            this.$Player3.removeAttribute("srcObject");
            "function" === typeof this.$Player3.setMediaKeys && (c = this.$Player3.setMediaKeys(null));
            this.$Player20 && this.$Player20.destroy();
            this.$Player31 && this.$Player31.destroy();
            this.$Player21.destroy();
            (d = this.$Player22) == null ? void 0 : d.destroy();
            this.$Player49 && this.$Player49.destroy();
            this.$Player66 && this.$Player66.destroy();
            a.log();
            this.emit("destroyed");
            d = [c];
            return h.all(d).then(function() {
                e.$Player3.load()
            })
        };
        f.$Player109 = function(a) {
            var b = this,
                d;
            d = a.find(function(a) {
                return b.$Player24.indexOf(a.getID()) !== -1
            });
            d || (d = c("oz-player/utils/getRepresentationInCache")(a, this.$Player23));
            return d || null
        };
        f.$Player110 = function(a) {
            var b = this,
                d;
            d = a.find(function(a) {
                return b.$Player24.indexOf(a.getID()) !== -1
            });
            d || (d = c("oz-player/utils/getRepresentationInCache")(a, this.$Player23));
            return d || null
        };
        f.$Player111 = function(a) {
            return null
        };
        f.$Player78 = function(a) {
            var b = new(c("oz-player/parsers/OzMpdParser"))({
                config: this.$Player4,
                ozParserContext: {
                    mpdUrl: this.$Player17,
                    createXmlParser: this.$Player82,
                    customParsers: this.$Player27,
                    customRepresentationParsers: this.$Player28,
                    customSegmentTimelineParser: this.$Player29
                },
                networkManager: this.$Player12,
                perfLoggerProvider: this.$Player15,
                drmManager: this.$Player47,
                initialRepresentationIDs: this.$Player24,
                blockedRepresentationsManager: this.$Player66,
                enableAlternativeAudioTracks: this.$Player4.getBool("enable_alternative_audio_tracks")
            });
            this.$Player10.addSubscriptions(b.onError(this.$Player11.emitError));
            return b.parse(a)
        };
        f.$Player72 = function() {
            var a = [];
            this.$Player16 && a.push(new(d("oz-player/loggings/OzDevConsolePerfLogger").OzDevConsolePerfLoggerProvider)());
            return a
        };
        f.$Player112 = function(a, b) {
            b = this.$Player5.get(b);
            return b ? b.getRepresentationIDAtTime(a) : null
        };
        f.getAudioRepresentationIDAtTime = function(a) {
            return this.$Player112(a, "audio")
        };
        f.getVideoRepresentationIDAtTime = function(a) {
            return this.$Player112(a, "video")
        };
        f.getCurrentVideoRepresentation = function() {
            return this.$Player113("video")
        };
        f.getCurrentAudioRepresentation = function() {
            return this.$Player113("audio")
        };
        f.getCurrentPlayingAudioTrackID = function() {
            var a = this.getCurrentAudioRepresentation();
            return a == null ? void 0 : a.getID()
        };
        f.$Player113 = function(a) {
            var b = this.$Player112(this.$Player13.getCurrentTime(), a),
                c = this.$Player9;
            if (!c) return null;
            var d = [];
            a === "audio" ? d = c.getAudioRepresentations() : a === "video" && (d = c.getVideoRepresentations());
            return (a = d.find(function(a) {
                return a.getID() === b
            })) != null ? a : null
        };
        f.getSelectedVideoRepresentation = function() {
            var a = this.$Player5.get("video");
            return a != null ? a.getCurrentRepresentation() : null
        };
        f.getSelectedAudioRepresentation = function() {
            var a = this.$Player5.get("audio");
            return a != null ? a.getCurrentRepresentation() : null
        };
        f.getDebug = function() {
            var a = this,
                b = this.$Player5.get("video"),
                c = this.$Player5.get("audio"),
                d = this.$Player5.get("caption"),
                e, f, g, h, j, k, l;
            if (b) {
                var m;
                e = (m = b.getDebug()) == null ? void 0 : m.MediaStreamAbrManager;
                f = (m = b.getDebug()) == null ? void 0 : m.SourceBufferManager;
                if (f) {
                    g = (m = f.getDebug()) == null ? void 0 : m.SourceBuffer
                }
            }
            if (c) {
                h = (m = c.getDebug()) == null ? void 0 : m.SourceBufferManager;
                if (h) {
                    j = (m = h.getDebug()) == null ? void 0 : m.SourceBuffer
                }
            }
            if (d) {
                k = (m = d.getDebug()) == null ? void 0 : m.SourceBufferManager;
                if (k) {
                    l = (m = k.getDebug()) == null ? void 0 : m.SourceBuffer
                }
            }
            return {
                getManifest: function() {
                    return i(a.$Player9)
                },
                indentifiersIntact: !0,
                VideoSourceStream: b,
                VideoAbrManager: e,
                VideoBufferManager: f,
                VideoSourceBuffer: g,
                AudioSourceStream: c,
                AudioBufferManager: h,
                AudioSourceBuffer: j,
                CaptionSourceStream: d,
                CaptionBufferManager: k,
                CaptionSourceBuffer: l
            }
        };
        f.injectExternalDebugEvent = function(a, b) {
            this.$Player100(a, b)
        };
        f.$Player100 = function(a, b) {
            this.emit("debug/dashPlayerEvent", {
                detail: {
                    type: a,
                    event: b
                }
            })
        };
        f.$Player75 = function() {
            var a = this,
                b = new(c("oz-player/strategies/OzBufferingDetector"))(this.$Player3, this.$Player4.getLegacyConfig(), function() {
                    return a.$Player50 ? a.$Player3.duration : Infinity
                });
            b.attachPerfLoggerProvider(this.$Player15);
            this.$Player10.addSubscriptions(b.addListener("enterBuffering", function(b) {
                a.emit("enterBuffering", b)
            }), b.addListener("leaveBuffering", function(b) {
                a.emit("leaveBuffering", b)
            }));
            return b
        };
        f.$Player95 = function() {
            var a = this.$Player51 ? this.$Player51() : {
                width: this.$Player3.offsetWidth,
                height: this.$Player3.offsetHeight
            };
            return a
        };
        f.getMpdUrl = function() {
            return this.$Player17
        };
        f.$Player91 = function(a) {
            var b = this;
            this.$Player17 = a;
            var c = this.$Player9;
            if (!c) {
                this.$Player59 = !0;
                return
            } else {
                c.updateLocation(a);
                this.$Player42 && (this.$Player10.releaseOne(this.$Player42), this.$Player42 = null);
                a = function() {
                    b.$Player42 && (b.$Player10.releaseOne(b.$Player42), b.$Player42 = null), b.$Player5.forEach(function(a, d) {
                        var e = a.getCurrentRepresentation(),
                            f = e.getDisplayLabel();
                        e = (d === "video" ? c.getVideoRepresentations() : c.getAudioRepresentations()).slice();
                        if (d === "video") {
                            d = b.$Player6.get(d);
                            d && d.updateRepresentations(c.getVideoRepresentations())
                        }
                        d = e[0];
                        e.forEach(function(a) {
                            var b = a.getDisplayLabel();
                            b === f && (d = a)
                        });
                        a.switchRepresentation(d);
                        a.restartLoopBody()
                    })
                };
                this.$Player42 = c.addListener("updated", a);
                this.$Player10.addSubscriptions(this.$Player42)
            }
        };
        f.getPerfLoggerProvider = function() {
            return this.$Player15
        };
        f.getApproximateFBLSToPlayerDisplayLatency = function() {
            var a, b;
            a = Number((a = (a = this.$Player9) == null ? void 0 : a.getCustomField("lastVideoFrameTs")) != null ? a : void 0);
            b = Number((b = (b = this.$Player9) == null ? void 0 : b.getCustomField("currentServerTimeMs")) != null ? b : void 0);
            var c = this.$Player114(a, b);
            a = this.$Player115(a, b);
            return {
                latencyFromClockSync: a,
                latencyFromMpdUpdate: c
            }
        };
        f.$Player114 = function(a, b) {
            if (!this.$Player13.getCurrentTime() || isNaN(a) || isNaN(b)) return null;
            b = 0;
            this.$Player57 === a ? b = (c("oz-player/shims/OzPerformance").now() - Number(this.$Player58)) / 1e3 : (this.$Player58 = c("oz-player/shims/OzPerformance").now(), this.$Player57 = a);
            a = a / 1e3 + b - this.$Player13.getCurrentTime();
            return a
        };
        f.$Player115 = function(a, b) {
            var d;
            if (!this.$Player13.getCurrentTime() || isNaN(a) || isNaN(b) || c("oz-player/networks/OzClientClock").getClientClockOffsetMs() == null || !c("oz-player/networks/OzClientClock").getClientClockOffsetMs()) return null;
            d = this.$Player13.getCurrentTimeUpdateTime() + ((d = c("oz-player/networks/OzClientClock").getClientClockOffsetMs()) != null ? d : 0);
            b = b;
            var e = this.$Player13.getCurrentTime() * 1e3;
            a = a;
            d = (d - b - (e - a)) / 1e3;
            return d
        };
        f.$Player73 = function() {
            this.$Player5.forEach(function(a) {
                a.restartLoopBody();
                var b = a.getCurrentRepresentation();
                a.switchRepresentation(b)
            })
        };
        return e
    }(c("oz-player/shims/OzEventEmitter"));
    g["default"] = a
}), 98);
__d("oz-player/configs/OzConfigUtils", ["oz-player/configs/OzPlayerConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new(c("oz-player/configs/OzPlayerConfig"))();
    a = function(a) {
        return {
            getBool: function(b) {
                return a.getBool(b, h.getBool(b))
            },
            getNumber: function(b) {
                return a.getNumber(b, h.getNumber(b))
            },
            getString: function(b) {
                return a.getString(b, h.getString(b))
            },
            getLegacyConfig: function() {
                return a
            }
        }
    };
    g.provideConfigWithDefaults = a
}), 98);
__d("oz-player", ["oz-player/Player"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("oz-player/Player")
}), 98);
__d("oz-player/networks/OzClockSyncNetworkRequestStreamHandler", ["oz-player/networks/OzClientClock", "oz-player/networks/OzTransformStream"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {}
        var b = a.prototype;
        b.onResponse = function(a, b) {
            var d = a.headers;
            if (!d) return null;
            a = new(c("oz-player/networks/OzTransformStream"))();
            a.addListener("writableClose", function() {
                c("oz-player/networks/OzClientClock").updateOffsetFromHeaderResponse(b, d)
            });
            return a
        };
        b.onError = function(a, b) {
            return null
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("getAvailableMimeCodecsFromDashManifest", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a) {
        var b = /^(audio|video)\/.*$/;
        return b.test(a)
    }

    function a(a) {
        var b = [],
            c = window.MediaSource;
        if (a != null) {
            var d = /mimeType=\"([^\"]*)\"[^\>]*codecs=\"([^\"]*)\"/g,
                e = /codecs=\"([^\"]*)\"[^\>]*mimeType=\"([^\"]*)\"/g,
                f, h = [];
            while (f = d.exec(a)) h.push([f[1], f[2]]);
            while (f = e.exec(a)) h.push([f[2], f[1]]);
            for (d = 0; d < h.length; d++) {
                f = h[d];
                a = f[0];
                e = f[1];
                f = a + '; codecs="' + e + '"';
                var i = a.startsWith("audio") ? "audio" : a.startsWith("video") ? "video" : "other",
                    j = !0,
                    k = !1;
                g(f) && (k = !0, j = c ? c.isTypeSupported(f) : !1);
                b.push({
                    codecs: e,
                    isRequiredForPlayback: k,
                    isTypeSupported: j,
                    mimeCodec: f,
                    mimeType: a,
                    representationType: i
                })
            }
        }
        return b
    }
    f["default"] = a
}), 66);
__d("manifestHasUnsupportedCodecs", ["getAvailableMimeCodecsFromDashManifest"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (window.MediaSource != null) {
            a = c("getAvailableMimeCodecsFromDashManifest")(a);
            return a.length <= 0 ? !1 : a.some(function(a) {
                return !a.isTypeSupported
            })
        }
        return !1
    }
    g["default"] = a
}), 98);
__d("MosUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a === 0 || b === 0) return 0;
        if (a < b) {
            var c = a;
            a = b;
            b = c
        }
        c = a / b;
        return c > 16 / 9 ? Math.round(a / (16 / 9)) : b
    }

    function b(a, b) {
        var c = null,
            d = null,
            e = null,
            f = null;
        for (var g = 0; g < a.length; g++) {
            var h = a[g].qualityLabel;
            if (h <= b) e = a[g].mosValue, c = h;
            else {
                f = a[g].mosValue;
                d = h;
                break
            }
        }
        if (c === null && d === null) return 0;
        else if (c === null && f !== null) return f;
        else if (d === null && e !== null) return e;
        else if (f !== null && e !== null && c !== null && d !== null) {
            h = e + (b - c) * (f - e) / (d - c);
            return h < 0 ? 0 : h > 100 ? 100 : h
        }
        return 0
    }

    function c(a) {
        a = a.split(",");
        var b = [];
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split(":");
            if (d.length !== 2) return null;
            var e = Number(d[0]);
            d = Number(d[1]);
            if (isNaN(e) || isNaN(d)) return null;
            b.push({
                qualityLabel: e,
                mosValue: d
            })
        }
        return b
    }
    f.getQualityLabel = a;
    f.getMosValue = b;
    f.parsePlaybackMos = c
}), 66);
__d("VideoPlayerMainThreadAvailability", ["ShakaConstants", "Visibility", "performanceNow"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = window.__fbNativeSetTimeout,
        j = a.__fbNativeClearTimeout,
        k = window.requestIdleCallback,
        l = window.cancelIdleCallback,
        m = function(a, b) {
            var c = function c() {
                a(c, b)
            };
            return c
        };
    b = function() {
        function a() {
            this.$1 = !1, this.$2 = null, this.$3 = null, this.$4 = null
        }
        var b = a.prototype;
        b.enable = function() {
            if (this.$1 || !this.$5()) return;
            this.$6();
            this.$7();
            this.$1 = !0
        };
        b.getTimeSinceMainThreadAvailable = function() {
            return this.$2 != null ? (h || (h = c("performanceNow")))() - Number(this.$2) : null
        };
        b.$8 = function() {
            this.$2 = c("Visibility").isHidden() ? null : (h || (h = c("performanceNow")))()
        };
        b.$9 = function() {
            this.$2 = null, typeof this.$4 === "number" && (l(this.$4), this.$4 = null), typeof this.$3 === "number" && (j(this.$3), this.$3 = null)
        };
        b.$7 = function() {
            this.$10()
        };
        b.$6 = function() {
            var a = this,
                b;
            (b = c("Visibility")).addListener(b.VISIBLE, function() {
                a.$9(), a.$7()
            });
            b.addListener(b.HIDDEN, function() {
                a.$9()
            })
        };
        b.$10 = function() {
            var a = this,
                b = c("ShakaConstants").numbers.settimeout_polling_delay;
            if (b > -1) {
                var d = function c() {
                    a.$8(), a.$3 = i(c, b)
                };
                i(d, b)
            }
        };
        b.$5 = function() {
            return c("Visibility").isSupported() && typeof k === "function" && typeof l === "function" && typeof i === "function" && typeof j === "function"
        };
        b.maybeEnablePerformanceTest = function() {
            var a, b = c("ShakaConstants").numbers.recursive_ric_timeout;
            b > -1 && ({
                timeout: b
            });
            b = c("ShakaConstants").numbers.recursive_native_settimeout_delay;
            b > -1 && typeof i === "function" && (a = m(i, b));
            a && a()
        };
        return a
    }();
    d = new b();
    g["default"] = d
}), 98);
__d("VideoPlayerPlayLogger", ["EventListener", "SubscriptionsHandler"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a, b) {
            var d = this;
            this.$3 = new(c("SubscriptionsHandler"))();
            this.$1 = a;
            this.$2 = b;
            this.$3.addSubscriptions(c("EventListener").listen(this.$1, "playing", function() {
                return d.$5()
            }), c("EventListener").listen(this.$1, "pause", function() {
                return d.$6()
            }))
        }
        var b = a.prototype;
        b.playStarted = function() {
            (this.$1.paused || this.$1.ended) && (this.$4 = this.$2.getOperationLogger("play").setState("pending_play").start())
        };
        b.$6 = function() {
            this.$4 && (this.$4.setResult("aborted").log(), this.$4 = null)
        };
        b.$5 = function() {
            this.$4 && (this.$4.log(), this.$4 = null)
        };
        b.unload = function() {
            this.$3.release()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("OzConfigurableRequestImplementation", ["MaybeNativePromise", "oz-player/networks/OzHTTPHeaders", "oz-player/utils/arrayBuffer2OzReadableStream", "parseHeaders"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        var b = new(d("oz-player/networks/OzHTTPHeaders").OzHTTPHeaders)(),
            e = c("parseHeaders")(a);
        Object.keys(e).forEach(function(a) {
            b.append(a, e[a])
        });
        return b
    }

    function a(a, b) {
        return function(d, e, f) {
            var g = {
                url: d,
                http: e,
                options: f,
                method: "GET",
                responseType: "arraybuffer"
            };
            return new(c("MaybeNativePromise"))(function(d, e) {
                a(g, function(a, e, f) {
                    var g = (a = a) != null ? a : new ArrayBuffer(0);
                    a = e != null ? parseInt(e, 10) : 0;
                    e = b.inferResponseStatusIsOk2xx ? 299 : 399;
                    f = {
                        body: c("oz-player/utils/arrayBuffer2OzReadableStream")(g),
                        headers: h(f),
                        ok: b.inferResponseStatusIsOK ? a >= 200 && a <= e : !0,
                        status: a,
                        arrayBuffer: function() {
                            return c("MaybeNativePromise").resolve(g)
                        }
                    };
                    d(f)
                }, function(a, b, f) {
                    if (a == null || a === "0") e(new TypeError("NetworkError"));
                    else {
                        var g = new ArrayBuffer(0);
                        f = {
                            body: c("oz-player/utils/arrayBuffer2OzReadableStream")(g),
                            headers: h(b),
                            ok: !1,
                            status: parseInt(a, 10),
                            arrayBuffer: function() {
                                return c("MaybeNativePromise").resolve(g)
                            }
                        };
                        d(f)
                    }
                })
            })
        }
    }
    g["default"] = a
}), 98);
__d("OzCustomParsers", [], (function(a, b, c, d, e, f) {
    function a() {
        return new Map([
            ["fbProjection", function(a) {
                try {
                    return a.Period[0].AdaptationSet[0].$.FBProjection || null
                } catch (a) {
                    return null
                }
            }],
            ["hasInbandCaptionsFromAccessibility", function(a) {
                a = a.Period[0];
                a = a && a.AdaptationSet[0].Accessibility;
                return a && a[0] ? a[0].$.schemeIdUri === "urn:scte:dash:cc:cea-608:2015" : !1
            }],
            ["hasInbandCaptionsFromUsingASRCaptions", function(a) {
                a = Number.parseInt(a.$.usingASRCaptions, 0);
                return !isNaN(a) && a != 0
            }],
            ["hasInbandCaptionsFromIsUsingAsrCaptionsEmployeeDogfooding", function(a) {
                a = Number.parseInt(a.$.isUsingAsrCaptionsEmployeeDogfooding, 0);
                return !isNaN(a) && a != 0
            }],
            ["hasVTTRepresentationCaptions", function(a) {
                return a.Period[0].AdaptationSet.find(function(a) {
                    var b;
                    return ((b = a.$.mimeType) == null ? void 0 : b.startsWith("application")) && a.$.lang != null
                }) != null
            }],
            ["isLiveTemplated", function(a) {
                return a.$.FBIsLiveTemplated === "true"
            }],
            ["isFBMS", function(a) {
                return a.$.FBMS === "true"
            }],
            ["isFBWasLive", function(a) {
                return a.$.FBWasLive === "true"
            }],
            ["loapStreamType", function(a) {
                return a.$.loapStreamType ? parseInt(a.$.loapStreamType, 10) : 0
            }],
            ["fbManifestIdentifier", function(a) {
                return (a = a.$.FBManifestIdentifier) != null ? a : ""
            }],
            ["lastVideoFrameTs", function(a) {
                return a.$.lastVideoFrameTs ? Number.parseInt(a.$.lastVideoFrameTs, 10) : null
            }],
            ["currentServerTimeMs", function(a) {
                return a.$.currentServerTimeMs ? Number.parseInt(a.$.currentServerTimeMs, 10) : null
            }],
            ["validationErrors", function(a) {
                return (a = a.$.validationErrors) != null ? a : ""
            }]
        ])
    }
    f.createOzCustomParser = a
}), 66);
__d("OzCustomRepresentationParsers", ["oz-player/manifests/OzSegmentOptions", "oz-player/shims/OzURI", "oz-player/utils/OzReadableStreamUtils"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = a.ozConfig,
            e = a.startTimestamp;
        a = {
            timescale: function(a) {
                a = a.SegmentTemplate;
                if (a && a.length > 0) {
                    a = a[0].$;
                    if (a) return Number.parseInt(a.timescale, 0) || null
                }
                return null
            }
        };
        b.getBool("parse_initialization_binary", !1) && (a.initializationBinary = function(a) {
            try {
                a = window.atob(a.FBInitializationBinary[0]._);
                return d("oz-player/utils/OzReadableStreamUtils").stringToUint8Array(a)
            } catch (a) {
                return null
            }
        });
        a.playbackResolutionMos = function(a) {
            try {
                return a.$.FBPlaybackResolutionMos
            } catch (a) {
                return null
            }
        };
        a.playbackResolutionCsvqm = function(a) {
            try {
                return a.$.FBPlaybackResolutionCsvqm
            } catch (a) {
                return null
            }
        };
        a.qualityLabel = function(a) {
            try {
                return a.$.FBQualityLabel
            } catch (a) {
                return null
            }
        };
        b.getBool("parse_first_segment", !1) && (a.firstSegmentParser = function(a) {
            if (e != null && e > 0) return null;
            try {
                var b = a.SegmentBase[0].$.FBFirstSegmentRange.split("-").map(Number),
                    d = {
                        startByte: b[0],
                        endByte: b[1]
                    };
                b = a.BaseURL[0]._;
                var f = new(c("oz-player/shims/OzURI"))(b),
                    g = new(c("oz-player/manifests/OzSegmentOptions"))();
                return {
                    getData: function() {
                        return null
                    },
                    getURI: function() {
                        return f
                    },
                    getByteRange: function() {
                        return d
                    },
                    getTimeRange: function() {
                        return {
                            startTime: 0,
                            endTime: 2
                        }
                    },
                    getSequenceNumber: function() {
                        return null
                    },
                    getOptions: function() {
                        return g
                    }
                }
            } catch (a) {
                return null
            }
        });
        return a
    }
    g.createOzCustomRepresentationParsers = a
}), 98);
__d("OzDashPrefetchCache", ["VideoDashPrefetchCache"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a() {}
        var b = a.prototype;
        b.hasCacheValue = function(a) {
            return c("VideoDashPrefetchCache").hasCacheValue(a)
        };
        b.getCacheValue = function(a) {
            return c("VideoDashPrefetchCache").getCacheValue(a)
        };
        b.getCachedRepresentations = function() {
            return null
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("OzMaximumDimensionsRestriction", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.applyRestriction = function(a, b) {
            if (a.length === 0) return [];
            var c = this.$1,
                d = Infinity;
            b = null;
            var e = [];
            a.forEach(function(a) {
                var f = a.getWidth(),
                    g = a.getHeight(),
                    h = c.maxWidth,
                    i = c.maxHeight;
                h = f <= h && g <= i;
                h && e.push(a);
                f * g < d && (d = f * g, b = a)
            });
            return e.length > 0 ? e : b ? [b] : []
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("OzMinimumSmallestDimensionRestriction", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.applyRestriction = function(a, b) {
            var c = this;
            if (a.length === 0) return [];
            b = a.filter(function(a) {
                var b = a.getWidth();
                a = a.getHeight();
                b = b < a ? b : a;
                return b >= c.$1
            });
            return b.length > 0 ? b : [a[a.length - 1]]
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("OzMosThresholdRestriction", ["MosUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            this.$3 = new Map(), this.$4 = a, this.$1 = a.getNumber("mos_upper_threshold", 0), this.$2 = a.getNumber("mos_lower_threshold", 0)
        }
        var b = a.prototype;
        b.$5 = function() {
            return this.$4.getBool("cache_mos_threshold", !1) ? {
                mosUpperThreshold: this.$1,
                mosLowerThreshold: this.$2
            } : {
                mosUpperThreshold: this.$4.getNumber("mos_upper_threshold", 0),
                mosLowerThreshold: this.$4.getNumber("mos_lower_threshold", 0)
            }
        };
        b.$6 = function(a, b) {
            var c = null;
            if (this.$3.get(a)) c = this.$3.get(a);
            else {
                var e = a.getCustomField("playbackResolutionMos");
                e != null && (c = d("MosUtils").parsePlaybackMos(String(e)), c && this.$3.set(a, c))
            }
            return c != null ? d("MosUtils").getMosValue(c, d("MosUtils").getQualityLabel(b.width, b.height)) : null
        };
        b.$7 = function(a, b) {
            var c = this,
                d = null,
                e = this.$5(),
                f = e.mosUpperThreshold;
            a.forEach(function(a) {
                a = c.$6(a, b);
                a != null && a > f && (d == null || d > a) && (d = a)
            });
            return d == null ? a : a.filter(function(a) {
                a = c.$6(a, b);
                return a == null ? !0 : a <= f || a === d
            })
        };
        b.$8 = function(a, b) {
            var c = this,
                d = [],
                e = this.$5(),
                f = e.mosLowerThreshold;
            a.forEach(function(a) {
                var e = c.$6(a, b);
                e != null && e > f && d.push(a)
            });
            d.length === 0 && d.push(a[a.length - 1]);
            return d
        };
        b.applyRestriction = function(a, b) {
            if (a.length === 0) return [];
            a = a;
            var c = this.$5(),
                d = c.mosLowerThreshold;
            c = c.mosUpperThreshold;
            c > 0 && (a = this.$7(a, b));
            d > 0 && (a = this.$8(a, b));
            return a
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("P2PPlaybackSessionLogger", ["LiveVideoWorkplaceP2PPlaybackTypedLogger", "Random"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a, b) {
            this.$4 = !1, this.$1 = a, this.$2 = d("Random").uint32(), this.$7 = b, this.$8()
        }
        var b = a.prototype;
        b.getSessionID = function() {
            return this.$2
        };
        b.setCurrentHiveStats = function(a) {
            this.$3 = a, !this.$4 && a.p2pRequests > 0 && (this.$4 = !0, this.logReceivedFirstPeerRequest())
        };
        b.pauseStatsLogging = function() {
            this.$5 && (window.clearInterval(this.$5), this.$5 = null)
        };
        b.resumeStatsLogging = function() {
            this.$8()
        };
        b.$8 = function() {
            this.$5 || (this.$5 = window.setInterval(this.logStats.bind(this), 60 * 1e3))
        };
        b.$9 = function() {
            return new(c("LiveVideoWorkplaceP2PPlaybackTypedLogger"))().setVideoID(this.$1).setCommunityID(this.$7.communityId).setCommunityName(this.$7.communityName).setSessionID(this.$2).setTimeMs(Date.now())
        };
        b.logEnableP2P = function() {
            this.$9().setEventStr("ENABLE_P2P").log()
        };
        b.logSessionInit = function(a, b) {
            this.$6 = Date.now(), this.$9().setEventStr("SESSION_INITIALIZED").setHivePluginTech(a).setViewerManifestURL(b).log()
        };
        b.logSessionActive = function(a) {
            this.$9().setEventStr("SESSION_ACTIVE").setHivePluginTech(a).log()
        };
        b.logManifestMismatch = function(a, b) {
            this.$9().setEventStr("MANIFEST_MISMATCH").setBroadcastURL(a).setViewerManifestURL(b).log()
        };
        b.logError = function(a) {
            this.$9().setEventStr("ERROR").setExceptionTrace(a.stack).setExceptionMessage(a.message).setExceptionType(a.name).log()
        };
        b.logHiveError = function(a) {
            this.$9().setEventStr("HIVE_ERROR").setExceptionMessage(a.message).setExceptionType("HiveErrorMessage").setExceptionCode(a.code).setExceptionSeverity(a.severity).log()
        };
        b.logUnload = function() {
            var a = this.$9().setEventStr("UNLOAD"),
                b = this.$3;
            b && a.setHiveClientStatsCdnRequests(b.cdnRequests).setHiveClientStatsCdnResponseBytes(b.cdnResponseBytes).setHiveClientStatsCdnResponseErrors(b.cdnResponseErrors).setHiveClientStatsCdnResponses(b.cdnResponses).setHiveClientStatsP2pRequests(b.p2pRequests).setHiveClientStatsP2pResponseBytes(b.p2pResponseBytes).setHiveClientStatsP2pResponseErrors(b.p2pResponseErrors).setHiveClientStatsP2pResponses(b.p2pResponses).setHiveClientStatsSavings(parseInt(b.savings, 10)).setHiveClientStatsNumPartners(Object.keys(b.partners).length);
            a.log()
        };
        b.logCreatedP2PVideoSource = function() {
            this.$9().setEventStr("CREATED_VIDEO_SOURCE").log()
        };
        b.logStats = function() {
            var a = this.$3,
                b = this.$9().setEventStr("STATS");
            a && b.setHiveClientStatsCdnRequests(a.cdnRequests).setHiveClientStatsCdnResponseBytes(a.cdnResponseBytes).setHiveClientStatsCdnResponseErrors(a.cdnResponseErrors).setHiveClientStatsCdnResponses(a.cdnResponses).setHiveClientStatsP2pRequests(a.p2pRequests).setHiveClientStatsP2pResponseBytes(a.p2pResponseBytes).setHiveClientStatsP2pResponseErrors(a.p2pResponseErrors).setHiveClientStatsP2pResponses(a.p2pResponses).setHiveClientStatsSavings(parseInt(a.savings, 10)).setHiveClientStatsNumPartners(Object.keys(a.partners).length);
            b.log()
        };
        b.logReceivedFirstPeerRequest = function() {
            this.$9().setEventStr("RECEIVED_FIRST_PEER_REQUEST").log()
        };
        b.logEndSession = function() {
            this.pauseStatsLogging();
            var a = this.$6;
            a = a != null ? Date.now() - a : -1;
            this.$9().setEventStr("SESSION_END").setTimeSpentInP2pMs(a).log()
        };
        b.logMissingGetRequestPromise = function() {
            this.$9().setEventStr("MISSING_GET_REQUEST_PROMISE").log()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("VideoPlayerOzWWWConfig", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "oz_www_";
    a = function() {
        function a(a) {
            this.$1 = a
        }
        var b = a.prototype;
        b.getBool = function(a, b) {
            return this.$1.getBool(g + a, b)
        };
        b.getNumber = function(a, b) {
            return this.$1.getNumber(g + a, b)
        };
        b.getString = function(a, b) {
            return this.$1.getString(g + a, b)
        };
        b.setContext = function(a, b) {
            this.$1.setContext(a, b)
        };
        b.getAllContexts = function() {
            return this.$1.getAllContexts()
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("VideoPlayerDashPerformanceLoggerEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1962341");
    b = d("FalcoLoggerInternal").create("video_player_dash_performance_logger_event", a);
    e = b;
    g["default"] = e
}), 98);
__d("VideoPlayerDashPerformanceLoggerPayloadBuilder", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        access_token: void 0,
        additional_buffered_ranges: void 0,
        append_target: void 0,
        appended_buffer_ms: void 0,
        bandwidth_estimate: void 0,
        client_time_begin: void 0,
        client_time_duration: void 0,
        client_time_end: void 0,
        code: void 0,
        concluder: void 0,
        connection_quality_level: void 0,
        content_length_header: void 0,
        device_pixel_ratio_float: void 0,
        dropped_frames: void 0,
        dynamic_bitrate: void 0,
        edge_hit_header: void 0,
        ended: void 0,
        error: void 0,
        event: void 0,
        expected_length: void 0,
        fbls_to_ply_dis_ms: void 0,
        initiator: void 0,
        is_drm: void 0,
        is_live: void 0,
        is_muted: void 0,
        is_online: void 0,
        is_p2p_playback: void 0,
        is_page_visible: void 0,
        is_prefetch: void 0,
        is_ring_buffer_sample: void 0,
        is_servable_via_fbms: void 0,
        is_templated_manifest: void 0,
        is_latency_catchup_enabled: void 0,
        last_buffered_end: void 0,
        last_buffered_start: void 0,
        last_buffering_event_end_time: void 0,
        last_buffering_event_start_time: void 0,
        last_playing_event_time: void 0,
        length: void 0,
        livehead_delta: void 0,
        livehead_seq_num_header: void 0,
        livehead_seq_num_mpd: void 0,
        logical_cpu_count: void 0,
        lowest_quality_representation_id: void 0,
        manifest_type: void 0,
        mediastream_event_count: void 0,
        mediasource_previous_duration: void 0,
        mediasource_new_duration: void 0,
        one_observed: void 0,
        one_req_wave: void 0,
        one_res_wave: void 0,
        origin_hit_header: void 0,
        parent_id: void 0,
        playback_fbms_param: void 0,
        playback_rate: void 0,
        player_height: void 0,
        player_instance_count: void 0,
        player_origin_caller_specified: void 0,
        player_suborigin: void 0,
        player_version: void 0,
        player_width: void 0,
        player_format: void 0,
        playhead: void 0,
        preload_time: void 0,
        previous_representation_id: void 0,
        priority_float: void 0,
        proxy_status_header: void 0,
        reason: void 0,
        representation_id: void 0,
        reschedule_count: void 0,
        resource: void 0,
        response_time_ms_header: void 0,
        result: void 0,
        script_path: void 0,
        segment_count: void 0,
        segment_end_time: void 0,
        segment_start_time: void 0,
        segment_time_gap: void 0,
        sequential_id: void 0,
        session: void 0,
        state: void 0,
        stream_switch_reason: void 0,
        time_between_bytes_max: void 0,
        time_since_main_thread_available: void 0,
        time_to_first_byte: void 0,
        time_to_last_byte: void 0,
        time_to_request_sent: void 0,
        time_to_request_start: void 0,
        total_frames: void 0,
        type: void 0,
        update_period: void 0,
        user_info: void 0,
        video_duration: void 0,
        video_id: void 0,
        video_playback_experience_issue: void 0,
        was_delayed: void 0,
        fna_hit_header: void 0,
        last_video_buffered_end: void 0,
        last_video_buffered_start: void 0,
        last_audio_buffered_end: void 0,
        last_audio_buffered_start: void 0,
        per_session_sampling_rate: void 0
    };

    function h(a) {
        var b = a;
        typeof b === "string" && (b = Number(a));
        return b != null && isFinite(b) ? String(Math.floor(b)) : null
    }
    a = function() {
        function a() {
            this.$1 = babelHelpers["extends"]({}, g)
        }
        var b = a.prototype;
        b.clear = function() {
            this.$1 = babelHelpers["extends"]({}, g);
            return this
        };
        b.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        b.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        b.setPerSessionSampleRate = function(a) {
            this.$1.per_session_sampling_rate = h(a);
            return this
        };
        b.setAccessToken = function(a) {
            this.$1.access_token = a;
            return this
        };
        b.setAdditionalBufferedRanges = function(a) {
            this.$1.additional_buffered_ranges = a;
            return this
        };
        b.setAppendTarget = function(a) {
            this.$1.append_target = h(a);
            return this
        };
        b.setAppendedBufferMs = function(a) {
            this.$1.appended_buffer_ms = h(a);
            return this
        };
        b.setBandwidthEstimate = function(a) {
            this.$1.bandwidth_estimate = h(a);
            return this
        };
        b.setClientTimeBegin = function(a) {
            this.$1.client_time_begin = h(a);
            return this
        };
        b.setClientTimeDuration = function(a) {
            this.$1.client_time_duration = h(a);
            return this
        };
        b.setClientTimeEnd = function(a) {
            this.$1.client_time_end = h(a);
            return this
        };
        b.setCode = function(a) {
            this.$1.code = h(a);
            return this
        };
        b.setConcluder = function(a) {
            this.$1.concluder = a;
            return this
        };
        b.setConnectionQualityLevel = function(a) {
            this.$1.connection_quality_level = a;
            return this
        };
        b.setContentLengthHeader = function(a) {
            this.$1.content_length_header = h(a);
            return this
        };
        b.setDevicePixelRatioFloat = function(a) {
            this.$1.device_pixel_ratio_float = a;
            return this
        };
        b.setDroppedFrames = function(a) {
            this.$1.dropped_frames = h(a);
            return this
        };
        b.setDynamicBitrate = function(a) {
            this.$1.dynamic_bitrate = h(a);
            return this
        };
        b.setFNAHitHeader = function(a) {
            this.$1.fna_hit_header = a;
            return this
        };
        b.setEdgeHitHeader = function(a) {
            this.$1.edge_hit_header = a;
            return this
        };
        b.setEnded = function(a) {
            this.$1.ended = a;
            return this
        };
        b.setError = function(a) {
            this.$1.error = a;
            return this
        };
        b.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        b.setExpectedLength = function(a) {
            this.$1.expected_length = h(a);
            return this
        };
        b.setFblsToPlyDisMs = function(a) {
            this.$1.fbls_to_ply_dis_ms = h(a);
            return this
        };
        b.setPreferredEdgeLatency = function(a) {
            this.$1.preferred_edge_latency = h(a);
            return this
        };
        b.setInitiator = function(a) {
            this.$1.initiator = a;
            return this
        };
        b.setIsDrm = function(a) {
            this.$1.is_drm = a;
            return this
        };
        b.setIsLive = function(a) {
            this.$1.is_live = a;
            return this
        };
        b.setIsMuted = function(a) {
            this.$1.is_muted = a;
            return this
        };
        b.setIsOnline = function(a) {
            this.$1.is_online = a;
            return this
        };
        b.setIsP2pPlayback = function(a) {
            this.$1.is_p2p_playback = a;
            return this
        };
        b.setIsPageVisible = function(a) {
            this.$1.is_page_visible = a;
            return this
        };
        b.setIsPrefetch = function(a) {
            this.$1.is_prefetch = a;
            return this
        };
        b.setIsRingBufferSample = function(a) {
            this.$1.is_ring_buffer_sample = a;
            return this
        };
        b.setIsServableViaFbms = function(a) {
            this.$1.is_servable_via_fbms = a;
            return this
        };
        b.setIsTemplatedManifest = function(a) {
            this.$1.is_templated_manifest = a;
            return this
        };
        b.setIsLatencyCachupEnabled = function(a) {
            this.$1.is_latency_catchup_enabled = a;
            return this
        };
        b.setPlayerFormat = function(a) {
            this.$1.player_format = a;
            return this
        };
        b.setLastBufferedEnd = function(a) {
            this.$1.last_buffered_end = h(a);
            return this
        };
        b.setLastBufferedStart = function(a) {
            this.$1.last_buffered_start = h(a);
            return this
        };
        b.setLastBufferingEventEndTime = function(a) {
            this.$1.last_buffering_event_end_time = h(a);
            return this
        };
        b.setLastBufferingEventStartTime = function(a) {
            this.$1.last_buffering_event_start_time = h(a);
            return this
        };
        b.setLastPlayingEventTime = function(a) {
            this.$1.last_playing_event_time = h(a);
            return this
        };
        b.setLength = function(a) {
            this.$1.length = h(a);
            return this
        };
        b.setLiveheadDelta = function(a) {
            this.$1.livehead_delta = h(a);
            return this
        };
        b.setLiveheadSeqNumHeader = function(a) {
            this.$1.livehead_seq_num_header = h(a);
            return this
        };
        b.setLiveheadSeqNumMpd = function(a) {
            this.$1.livehead_seq_num_mpd = h(a);
            return this
        };
        b.setLogicalCpuCount = function(a) {
            this.$1.logical_cpu_count = h(a);
            return this
        };
        b.setLowestQualityRepresentationID = function(a) {
            this.$1.lowest_quality_representation_id = a;
            return this
        };
        b.setManifestType = function(a) {
            this.$1.manifest_type = a;
            return this
        };
        b.setMediastreamEventCount = function(a) {
            this.$1.mediastream_event_count = h(a);
            return this
        };
        b.setMediaSourceNewDuration = function(a) {
            this.$1.mediasource_new_duration = a;
            return this
        };
        b.setMediaSourcePreviousDuration = function(a) {
            this.$1.mediasource_previous_duration = a;
            return this
        };
        b.setOneObserved = function(a) {
            this.$1.one_observed = a;
            return this
        };
        b.setOneReqWave = function(a) {
            this.$1.one_req_wave = h(a);
            return this
        };
        b.setOneResWave = function(a) {
            this.$1.one_res_wave = h(a);
            return this
        };
        b.setOriginHitHeader = function(a) {
            this.$1.origin_hit_header = a;
            return this
        };
        b.setParentID = function(a) {
            this.$1.parent_id = h(a);
            return this
        };
        b.setPlaybackFbmsParam = function(a) {
            this.$1.playback_fbms_param = a;
            return this
        };
        b.setPlaybackRate = function(a) {
            this.$1.playback_rate = a;
            return this
        };
        b.setPlayerHeight = function(a) {
            this.$1.player_height = h(a);
            return this
        };
        b.setPlayerInstanceCount = function(a) {
            this.$1.player_instance_count = h(a);
            return this
        };
        b.setPlayerOriginCallerSpecified = function(a) {
            this.$1.player_origin_caller_specified = a;
            return this
        };
        b.setPlayerSuborigin = function(a) {
            this.$1.player_suborigin = a;
            return this
        };
        b.setPlayerVersion = function(a) {
            this.$1.player_version = a;
            return this
        };
        b.setPlayerWidth = function(a) {
            this.$1.player_width = h(a);
            return this
        };
        b.setPlayhead = function(a) {
            this.$1.playhead = h(a);
            return this
        };
        b.setPreloadTime = function(a) {
            this.$1.preload_time = h(a);
            return this
        };
        b.setPreviousRepresentationID = function(a) {
            this.$1.previous_representation_id = a;
            return this
        };
        b.setPriorityFloat = function(a) {
            this.$1.priority_float = a;
            return this
        };
        b.setProxyStatusHeader = function(a) {
            this.$1.proxy_status_header = a;
            return this
        };
        b.setPushed = function(a) {
            return this
        };
        b.setReason = function(a) {
            this.$1.reason = a;
            return this
        };
        b.setRepresentationID = function(a) {
            this.$1.representation_id = a;
            return this
        };
        b.setRescheduleCount = function(a) {
            this.$1.reschedule_count = h(a);
            return this
        };
        b.setResource = function(a) {
            this.$1.resource = a;
            return this
        };
        b.setResponseTimeMsHeader = function(a) {
            this.$1.response_time_ms_header = h(a);
            return this
        };
        b.setResult = function(a) {
            this.$1.result = a;
            return this
        };
        b.setScriptPath = function(a) {
            this.$1.script_path = a;
            return this
        };
        b.setSegmentCount = function(a) {
            this.$1.segment_count = h(a);
            return this
        };
        b.setSegmentEndTime = function(a) {
            this.$1.segment_end_time = h(a);
            return this
        };
        b.setSegmentStartTime = function(a) {
            this.$1.segment_start_time = h(a);
            return this
        };
        b.setSegmentTimeGap = function(a) {
            this.$1.segment_time_gap = h(a);
            return this
        };
        b.setSequentialID = function(a) {
            this.$1.sequential_id = h(a);
            return this
        };
        b.setSession = function(a) {
            this.$1.session = a;
            return this
        };
        b.setState = function(a) {
            this.$1.state = a;
            return this
        };
        b.setStreamSwitchReason = function(a) {
            this.$1.stream_switch_reason = a;
            return this
        };
        b.setTimeBetweenBytesMax = function(a) {
            this.$1.time_between_bytes_max = h(a);
            return this
        };
        b.setTimeSinceMainThreadAvailable = function(a) {
            this.$1.time_since_main_thread_available = h(a);
            return this
        };
        b.setTimeToFirstByte = function(a) {
            this.$1.time_to_first_byte = h(a);
            return this
        };
        b.setTimeToLastByte = function(a) {
            this.$1.time_to_last_byte = h(a);
            return this
        };
        b.setTimeToRequestSent = function(a) {
            this.$1.time_to_request_sent = h(a);
            return this
        };
        b.setTimeToRequestStart = function(a) {
            this.$1.time_to_request_start = h(a);
            return this
        };
        b.setTotalFrames = function(a) {
            this.$1.total_frames = h(a);
            return this
        };
        b.setType = function(a) {
            this.$1.type = a;
            return this
        };
        b.setUpdatePeriod = function(a) {
            this.$1.update_period = h(a);
            return this
        };
        b.setUserInfo = function(a) {
            this.$1.user_info = a;
            return this
        };
        b.setVideoDuration = function(a) {
            this.$1.video_duration = h(a);
            return this
        };
        b.setVideoID = function(a) {
            this.$1.video_id = a;
            return this
        };
        b.setVideoPlaybackExperienceIssue = function(a) {
            this.$1.video_playback_experience_issue = a;
            return this
        };
        b.setWasDelayed = function(a) {
            this.$1.was_delayed = a;
            return this
        };
        b.setDynamicStatusHeader = function(a) {
            this.$1.dynamic_status_header = a;
            return this
        };
        b.setLastAudioBufferedEnd = function(a) {
            this.$1.last_audio_buffered_end = h(a);
            return this
        };
        b.setLastAudioBufferedStart = function(a) {
            this.$1.last_audio_buffered_start = h(a);
            return this
        };
        b.setLastVideoBufferedEnd = function(a) {
            this.$1.last_video_buffered_end = h(a);
            return this
        };
        b.setLastVideoBufferedStart = function(a) {
            this.$1.last_video_buffered_start = h(a);
            return this
        };
        return a
    }();
    f.convertToInt64 = h;
    f.VideoPlayerDashPerformanceLoggerPayloadBuilder = a
}), 66);
__d("ExtendableVideoPlayerShakaPerformanceTypedLogger", ["VideoPlayerDashPerformanceLoggerEventFalcoEvent", "VideoPlayerDashPerformanceLoggerPayloadBuilder", "VideoPlayerShakaPerformanceLoggerConfig", "clearTimeout", "gkx", "qex", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 999,
        i = (a = c("qex")._("2104")) != null ? a : 12e4,
        j = [],
        k = 0,
        l = !1,
        m = !1,
        n = null;
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        b.isEnabled = function() {
            return b.$ExtendableVideoPlayerShakaPerformanceTypedLogger5() || b.$ExtendableVideoPlayerShakaPerformanceTypedLogger6()
        };
        b.disable = function() {
            l = !1
        };
        b.enable = function() {
            l = !0
        };
        b.$ExtendableVideoPlayerShakaPerformanceTypedLogger7 = function(a) {
            a = j[a];
            if (a != null) {
                var c = new b();
                c.updateData(a).log()
            }
        };
        b.flushQueuedLogs = function() {
            k = k > h ? 0 : k;
            if (!b.isEnabled()) {
                m = !0;
                b.enable();
                for (var a = k; a <= h; ++a) b.$ExtendableVideoPlayerShakaPerformanceTypedLogger7(a);
                for (a = 0; a < k; ++a) b.$ExtendableVideoPlayerShakaPerformanceTypedLogger7(a);
                j = [];
                k = 0
            }
            m && (n != null && c("clearTimeout")(n), n = c("setTimeout")(function() {
                n = null, m = !1, b.disable()
            }, i))
        };
        b.$ExtendableVideoPlayerShakaPerformanceTypedLogger5 = function() {
            return d("VideoPlayerShakaPerformanceLoggerConfig").isSampled
        };
        b.$ExtendableVideoPlayerShakaPerformanceTypedLogger6 = function() {
            return l
        };
        var e = b.prototype;
        e.$ExtendableVideoPlayerShakaPerformanceTypedLogger8 = function() {
            m && this.setIsRingBufferSample(!0), this.$ExtendableVideoPlayerShakaPerformanceTypedLogger9()
        };
        e.log = function() {
            b.isEnabled() || (this.$ExtendableVideoPlayerShakaPerformanceTypedLogger4 || 0) > 0 ? this.$ExtendableVideoPlayerShakaPerformanceTypedLogger8() : c("gkx")("2007884") && (k = k > h ? 0 : k, j[k++] = this.getData())
        };
        e.setPerSessionSampleRate = function(b) {
            this.$ExtendableVideoPlayerShakaPerformanceTypedLogger4 = b;
            return a.prototype.setPerSessionSampleRate.call(this, b)
        };
        e.setState = function(b) {
            this.$ExtendableVideoPlayerShakaPerformanceTypedLogger1 = b;
            return a.prototype.setState.call(this, b)
        };
        e.getState = function() {
            return this.$ExtendableVideoPlayerShakaPerformanceTypedLogger1
        };
        e.setType = function(b) {
            this.$ExtendableVideoPlayerShakaPerformanceTypedLogger3 = b;
            return a.prototype.setType.call(this, b)
        };
        e.getType = function() {
            return this.$ExtendableVideoPlayerShakaPerformanceTypedLogger3
        };
        e.setIsRingBufferSample = function(b) {
            a.prototype.setIsRingBufferSample.call(this, b);
            return this
        };
        e.setSequentialID = function(b) {
            this.$ExtendableVideoPlayerShakaPerformanceTypedLogger2 = b;
            a.prototype.setSequentialID.call(this, b);
            return this
        };
        e.setParentLogger = function(a) {
            this.setParentID(a.$ExtendableVideoPlayerShakaPerformanceTypedLogger2);
            return this
        };
        e.$ExtendableVideoPlayerShakaPerformanceTypedLogger9 = function() {
            var a = this;
            c("VideoPlayerDashPerformanceLoggerEventFalcoEvent").log(function() {
                return a.getData()
            })
        };
        return b
    }(d("VideoPlayerDashPerformanceLoggerPayloadBuilder").VideoPlayerDashPerformanceLoggerPayloadBuilder);
    g["default"] = b
}), 98);
__d("VideoPlayerShakaPerformanceLogger", ["ExtendableVideoPlayerShakaPerformanceTypedLogger", "ScriptPath", "VideoPlaybackQuality", "VideoPlayerMainThreadAvailability", "VideoPlayerShakaGlobalConfig", "VideoPlayerShakaPerformanceLoggerConfig", "Visibility", "clearTimeout", "gkx", "oz-player/loggings/OzPerfLoggerProviderBase", "oz-player/utils/OzError", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 3e5,
        i = 200,
        j = 4;
    c("VideoPlayerMainThreadAvailability").maybeEnablePerformanceTest();
    var k = !1;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);
        b.forceShouldSample = function() {
            k = !0, c("ExtendableVideoPlayerShakaPerformanceTypedLogger").enable()
        };
        b.shouldInitialize = function() {
            return k || Boolean(d("VideoPlayerShakaPerformanceLoggerConfig").isSampled) || c("gkx")("2007884")
        };
        b.flushQueuedLogs = function() {
            c("ExtendableVideoPlayerShakaPerformanceTypedLogger").flushQueuedLogs()
        };
        b.setVideoPlaybackExperienceIssue = function(a) {
            b.$VideoPlayerShakaPerformanceLogger31 = a
        };
        b.isEnabled = function() {
            return c("ExtendableVideoPlayerShakaPerformanceTypedLogger").isEnabled()
        };

        function b(c) {
            var d, e;
            e = a.call(this) || this;
            e.$VideoPlayerShakaPerformanceLogger13 = !1;
            e.$VideoPlayerShakaPerformanceLogger14 = !0;
            e.$VideoPlayerShakaPerformanceLogger25 = 0;
            e.$VideoPlayerShakaPerformanceLogger26 = 0;
            e.$VideoPlayerShakaPerformanceLogger27 = [];
            e.$VideoPlayerShakaPerformanceLogger37 = new Map();
            e.$VideoPlayerShakaPerformanceLogger24 = c;
            e.$VideoPlayerShakaPerformanceLogger2 = c.videoID;
            e.$VideoPlayerShakaPerformanceLogger4 = c.video;
            e.$VideoPlayerShakaPerformanceLogger1 = c.uniqueID;
            e.$VideoPlayerShakaPerformanceLogger3 = 0;
            e.$VideoPlayerShakaPerformanceLogger11 = c.isLive;
            e.$VideoPlayerShakaPerformanceLogger12 = c.isServableViaFbms;
            e.$VideoPlayerShakaPerformanceLogger9 = null;
            e.$VideoPlayerShakaPerformanceLogger15 = c.accessToken;
            e.$VideoPlayerShakaPerformanceLogger16 = c.playerOrigin;
            e.$VideoPlayerShakaPerformanceLogger17 = c.playerSuborigin;
            e.$VideoPlayerShakaPerformanceLogger18 = c.playerVersion;
            e.$VideoPlayerShakaPerformanceLogger28 = c.getBandwidthEstimate;
            e.$VideoPlayerShakaPerformanceLogger29 = (d = c.getPlayerDimensions) != null ? d : null;
            e.$VideoPlayerShakaPerformanceLogger30 = (d = c.getPlayerFormat) != null ? d : null;
            e.setRepresentationID(c.representationId);
            e.$VideoPlayerShakaPerformanceLogger32 = c.isDrm;
            e.$VideoPlayerShakaPerformanceLogger34 = {};
            e.$VideoPlayerShakaPerformanceLogger35 = (d = c.playerInstanceCount) != null ? d : null;
            b.maybeEnableMainThreadAvailabilityLogging();
            return e
        }
        b.maybeEnableMainThreadAvailabilityLogging = function() {
            d("VideoPlayerShakaGlobalConfig").getBool("enable_main_thread_availability_logging", !1) && c("ExtendableVideoPlayerShakaPerformanceTypedLogger").isEnabled() && c("VideoPlayerMainThreadAvailability").enable()
        };
        var e = b.prototype;
        e.$VideoPlayerShakaPerformanceLogger38 = function(a) {
            var b = null;
            try {
                b = a.getBuffered()
            } catch (a) {}
            if (b != null && b.length > 0) {
                a = b.length - 1;
                return {
                    lastBufferedStart: Math.round(b.start(a) * 1e3),
                    lastBufferedEnd: Math.round(b.end(a) * 1e3)
                }
            }
            return null
        };
        e.$VideoPlayerShakaPerformanceLogger39 = function(a) {
            a = a;
            var b = this.$VideoPlayerShakaPerformanceLogger4.buffered;
            if (b.length > 0) {
                var c = b.length - 1;
                a = a.setLastBufferedStart(Math.round(b.start(c) * 1e3)).setLastBufferedEnd(Math.round(b.end(c) * 1e3))
            }
            c = [];
            for (var d = 0; d < b.length - 1; d++) {
                var e = Math.round(this.$VideoPlayerShakaPerformanceLogger4.buffered.start(d) * 1e3),
                    f = Math.round(this.$VideoPlayerShakaPerformanceLogger4.buffered.end(d) * 1e3);
                c.push([e, f])
            }
            c.length && (a = a.setAdditionalBufferedRanges(JSON.stringify(c)));
            e = this.$VideoPlayerShakaPerformanceLogger37.get("audio");
            if (e != null) {
                f = this.$VideoPlayerShakaPerformanceLogger38(e);
                f != null && (a = a.setLastAudioBufferedStart(f.lastBufferedStart).setLastAudioBufferedEnd(f.lastBufferedEnd))
            }
            b = this.$VideoPlayerShakaPerformanceLogger37.get("video");
            if (b != null) {
                d = this.$VideoPlayerShakaPerformanceLogger38(b);
                d != null && (a = a.setLastVideoBufferedStart(d.lastBufferedStart).setLastVideoBufferedEnd(d.lastBufferedEnd))
            }
            return a
        };
        e.setType = function(a) {
            this.$VideoPlayerShakaPerformanceLogger23 = a;
            return this
        };
        e.createLoggerProvider = function() {
            return new self(this.$VideoPlayerShakaPerformanceLogger24)
        };
        e.getLiveheadDelta = function() {
            return this.$VideoPlayerShakaPerformanceLogger9 ? Math.round((this.$VideoPlayerShakaPerformanceLogger9 - this.$VideoPlayerShakaPerformanceLogger4.currentTime) * 1e3) : null
        };
        e.getVideoID = function() {
            return this.$VideoPlayerShakaPerformanceLogger2
        };
        e.setIsTemplatedManifest = function(a) {
            this.$VideoPlayerShakaPerformanceLogger13 = a
        };
        e.setMediaSourceSourceBuffer = function(a, b) {
            this.$VideoPlayerShakaPerformanceLogger37.set(a, b);
            return this
        };
        e.unsetMediaSourceSourceBuffers = function() {
            this.$VideoPlayerShakaPerformanceLogger37.clear();
            return this
        };
        e.addToLastErrorQueue = function(a) {
            this.$VideoPlayerShakaPerformanceLogger27.push(a), this.$VideoPlayerShakaPerformanceLogger27.length > j && this.$VideoPlayerShakaPerformanceLogger27.shift()
        };
        e.getEventLogger = function(a) {
            var e = this,
                f = Date.now(),
                g = new(c("ExtendableVideoPlayerShakaPerformanceTypedLogger"))(),
                h = this.$VideoPlayerShakaPerformanceLogger4.currentTime,
                i = this.$VideoPlayerShakaPerformanceLogger4.duration,
                j = this.$VideoPlayerShakaPerformanceLogger28(this.$VideoPlayerShakaPerformanceLogger11),
                k = this.$VideoPlayerShakaPerformanceLogger24.getApproximateFBLSToPlayerDisplayLatency(),
                l = this.$VideoPlayerShakaPerformanceLogger29 ? this.$VideoPlayerShakaPerformanceLogger29() : null;
            this.$VideoPlayerShakaPerformanceLogger39(g).setEvent(a).setVideoID(this.$VideoPlayerShakaPerformanceLogger2).setDroppedFrames(d("VideoPlaybackQuality").getDroppedFrames(this.$VideoPlayerShakaPerformanceLogger4)).setTotalFrames(d("VideoPlaybackQuality").getTotalFrames(this.$VideoPlayerShakaPerformanceLogger4)).setEnded(this.$VideoPlayerShakaPerformanceLogger4.ended).setIsMuted(this.$VideoPlayerShakaPerformanceLogger4.muted).setPlaybackRate(this.$VideoPlayerShakaPerformanceLogger4.playbackRate).setDynamicBitrate(this.$VideoPlayerShakaPerformanceLogger22).setPlayhead(Math.round(h * 1e3)).setVideoDuration(Math.round(i * 1e3)).setLogicalCpuCount(navigator && navigator.hardwareConcurrency).setPlayerOriginCallerSpecified(this.$VideoPlayerShakaPerformanceLogger16).setScriptPath(d("ScriptPath").getScriptPath()).setPlayerHeight(l ? l.height : null).setPlayerWidth(l ? l.width : null).setPlayerSuborigin(this.$VideoPlayerShakaPerformanceLogger17).setPlayerVersion(this.$VideoPlayerShakaPerformanceLogger18).setPlayerFormat(this.$VideoPlayerShakaPerformanceLogger30 ? this.$VideoPlayerShakaPerformanceLogger30() : null).setBandwidthEstimate(j == null ? null : Math.round(j)).setRepresentationID(this.getRepresentationID()).setLowestQualityRepresentationID(this.$VideoPlayerShakaPerformanceLogger21).setIsLive(this.$VideoPlayerShakaPerformanceLogger11).setIsServableViaFbms(this.$VideoPlayerShakaPerformanceLogger12).setPlaybackFbmsParam(this.$VideoPlayerShakaPerformanceLogger36).setIsPageVisible(!c("Visibility").isHidden()).setIsTemplatedManifest(this.$VideoPlayerShakaPerformanceLogger13).setSession(this.$VideoPlayerShakaPerformanceLogger1).setDevicePixelRatioFloat(window.devicePixelRatio || 1).setManifestType(this.$VideoPlayerShakaPerformanceLogger20).setLiveheadSeqNumMpd(this.$VideoPlayerShakaPerformanceLogger10).setSequentialID(this.$VideoPlayerShakaPerformanceLogger3++).setState(this.$VideoPlayerShakaPerformanceLogger5).setLastBufferingEventStartTime(this.$VideoPlayerShakaPerformanceLogger8).setLastBufferingEventEndTime(this.$VideoPlayerShakaPerformanceLogger7).setLastPlayingEventTime(this.$VideoPlayerShakaPerformanceLogger6).setLiveheadDelta(this.getLiveheadDelta()).setResult("success").setAccessToken(this.$VideoPlayerShakaPerformanceLogger15).setVideoPlaybackExperienceIssue(b.$VideoPlayerShakaPerformanceLogger31).setClientTimeBegin(f).setClientTimeDuration(0).setClientTimeEnd(f).setIsDrm(this.$VideoPlayerShakaPerformanceLogger32).setPlayerInstanceCount(this.$VideoPlayerShakaPerformanceLogger35).setFblsToPlyDisMs((k == null ? void 0 : k.latencyFromMpdUpdate) != null ? Math.round(k.latencyFromMpdUpdate * 1e3) : null).setPreferredEdgeLatency(this.$VideoPlayerShakaPerformanceLogger19).setPerSessionSampleRate(this.$VideoPlayerShakaPerformanceLogger24.perSessionSampleRate).setIsLatencyCachupEnabled(this.$VideoPlayerShakaPerformanceLogger14).setIsOnline(this.$VideoPlayerShakaPerformanceLogger33);
            switch (a) {
                case "buffering":
                case "buffering_timeout":
                case "enter_buffering":
                case "unload":
                    g.setError(this.$VideoPlayerShakaPerformanceLogger27.join(" | "))
            }
            switch (a) {
                case "leave_buffering":
                case "playing":
                    this.$VideoPlayerShakaPerformanceLogger27 = []
            }
            var m = this,
                n = g.setState;
            g.setState = function(a) {
                this;
                a !== m.$VideoPlayerShakaPerformanceLogger5 && a === "playing" ? m.$VideoPlayerShakaPerformanceLogger6 = Date.now() : a !== "playing" && (m.$VideoPlayerShakaPerformanceLogger6 = null);
                m.$VideoPlayerShakaPerformanceLogger5 = a;
                return n.call(this, a)
            };
            g.updateState = function(a) {
                return this.getState() == m.$VideoPlayerShakaPerformanceLogger5 ? this.setState(a) : this
            };
            var o = g.setError;
            g.setError = function(a) {
                if (typeof a === "object" && a != null)
                    if (a instanceof c("oz-player/utils/OzError")) this.setResult("failed"), this.setCode(a.getExtra().code), m.addToLastErrorQueue(a.getType()), o.call(this, a.getType());
                    else {
                        if (a.type === "aborted" || a.type === "delay") this.setResult("aborted");
                        else if (a.type === "paused") this.setResult("paused");
                        else {
                            this.setResult("failed");
                            if (a.type != null && a.type !== "") m.addToLastErrorQueue(a.type), o.call(this, a.type);
                            else {
                                var b = function(a) {
                                    return a.replace(/([0-9]{2,})/g, function(a) {
                                        var b = "";
                                        while (b.length < a.length) b += "#";
                                        return b
                                    })
                                };
                                b = b(a.name + ": " + a.message);
                                m.addToLastErrorQueue(b);
                                o.call(this, b)
                            }
                        }
                        this.setCode(a.status || a.errorRawTransportStatus)
                    }
                else a != null && m.addToLastErrorQueue(a), o.call(this, a);
                return this
            };
            var p = g.setManifestType;
            g.setManifestType = function(a) {
                e.$VideoPlayerShakaPerformanceLogger20 = a;
                return p.call(g, a)
            };
            var q = g.setPlaybackFbmsParam;
            g.setPlaybackFbmsParam = function(a) {
                e.$VideoPlayerShakaPerformanceLogger36 = a;
                return q.call(g, a)
            };
            g.setLiveheadPosition = function(a) {
                e.$VideoPlayerShakaPerformanceLogger9 = a;
                g.setLiveheadDelta(e.getLiveheadDelta());
                return g
            };
            var r = g.setLiveheadSeqNumMpd;
            g.setLiveheadSeqNumMpd = function(a) {
                e.$VideoPlayerShakaPerformanceLogger10 = a;
                return r.call(g, a)
            };
            var s = g.setPreferredEdgeLatency;
            g.setPreferredEdgeLatency = function(a) {
                e.$VideoPlayerShakaPerformanceLogger19 = a;
                return s.call(g, a)
            };
            var t = g.setIsTemplatedManifest;
            g.setIsTemplatedManifest = function(a) {
                var b;
                e.$VideoPlayerShakaPerformanceLogger13 = (b = a) != null ? b : !1;
                return t.call(g, a)
            };
            var u = g.setIsLatencyCachupEnabled;
            g.setIsLatencyCachupEnabled = function(a) {
                var b;
                e.$VideoPlayerShakaPerformanceLogger14 = (b = a) != null ? b : !1;
                return u.call(g, a)
            };
            var v = g.setDynamicBitrate;
            g.setDynamicBitrate = function(a) {
                a = Number(a) || null;
                e.setDynamicBitrate(a);
                return v.call(g, a)
            };
            var w = g.setLowestQualityRepresentationID;
            g.setLowestQualityRepresentationID = function(a) {
                e.$VideoPlayerShakaPerformanceLogger21 = a;
                return w.call(g, a)
            };
            var x = g.setIsOnline;
            g.setIsOnline = function(a) {
                e.$VideoPlayerShakaPerformanceLogger33 = a;
                return x.call(g, a)
            };
            g.setMediaSourceSourceBuffer = function(a, b) {
                e.setMediaSourceSourceBuffer(a, b);
                return g
            };
            g.unsetMediaSourceSourceBuffers = function() {
                e.unsetMediaSourceSourceBuffers();
                return g
            };
            g.setWasPrefetchCacheHit = function(a) {
                return g
            };
            return g
        };
        e.getOperationLogger = function(a) {
            a = this.createOperationLogger(a);
            this.setOperationContext(a);
            return a
        };
        e.createOperationLogger = function(a) {
            var b = this.getEventLogger(a);
            b.setClientTimeEnd(null);
            b.setClientTimeDuration(null);
            var d = b.setResource;
            b.setResource = function(a) {
                return d.call(b, a)
            };
            var e = b.log,
                f = this,
                g = !1,
                i = null;
            b.log = function() {
                var b = this;
                if (g) return;
                c("clearTimeout")(i);
                var d = Date.now(),
                    h = b.getData().client_time_begin,
                    j = b.getData().client_time_end;
                h = h != null ? Number(h) : null;
                j = j != null ? Number(j) : null;
                (h == null || h === 0) && (h = d, b.setClientTimeBegin(h));
                (j == null || j === 0) && (j = d, b.setClientTimeEnd(j));
                b.setClientTimeDuration(j - h);
                h = c("VideoPlayerMainThreadAvailability").getTimeSinceMainThreadAvailable();
                b.setTimeSinceMainThreadAvailable(h != null ? Math.round(h) : null);
                f.$VideoPlayerShakaPerformanceLogger40(h);
                f.$VideoPlayerShakaPerformanceLogger25 = d;
                a === "buffering" && (f.$VideoPlayerShakaPerformanceLogger7 = j);
                g = !0;
                h = b.getType();
                h && (f.$VideoPlayerShakaPerformanceLogger34[h + a] = (f.$VideoPlayerShakaPerformanceLogger34[h + a] || 0) + 1, b.setMediastreamEventCount(f.$VideoPlayerShakaPerformanceLogger34[h + a]));
                return e.call(b)
            };
            b.start = function() {
                var d = Date.now();
                this.setClientTimeBegin(d);
                this.setClientTimeDuration(null);
                this.setClientTimeEnd(null);
                c("clearTimeout")(i);
                i = null;
                i = c("setTimeoutAcrossTransitions")(function() {
                    c("clearTimeout")(i), i = null, b.setResult("timeout"), b.log()
                }, h);
                a === "buffering" && (f.$VideoPlayerShakaPerformanceLogger8 = Date.now());
                return b
            };
            return b
        };
        e.$VideoPlayerShakaPerformanceLogger40 = function(a) {
            if (a == null || i === 0 || this.$VideoPlayerShakaPerformanceLogger25 === 0 || a < i || this.$VideoPlayerShakaPerformanceLogger26 < a) {
                this.$VideoPlayerShakaPerformanceLogger26 = Number(a);
                return
            }
            var b = this.$VideoPlayerShakaPerformanceLogger25,
                c = Math.round(b - this.$VideoPlayerShakaPerformanceLogger26);
            this.getEventLogger("main_thread_blocked").setClientTimeBegin(c).setClientTimeDuration(b - c).setClientTimeEnd(b).log();
            this.$VideoPlayerShakaPerformanceLogger26 = Number(a)
        };
        e.setDynamicBitrate = function(a) {
            this.$VideoPlayerShakaPerformanceLogger22 = a != null ? Math.round(a) : null
        };
        return b
    }(c("oz-player/loggings/OzPerfLoggerProviderBase"));
    a.$VideoPlayerShakaPerformanceLogger31 = null;
    g["default"] = a
}), 98);
__d("getOzPlaybackRestrictions", ["OzMinimumSmallestDimensionRestriction", "OzMosThresholdRestriction", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var d = [];
        switch (a) {
            case "HD":
                d.push(new(c("OzMinimumSmallestDimensionRestriction"))(720));
                break;
            case "UHD":
                c("gkx")("3728") && d.push(new(c("OzMinimumSmallestDimensionRestriction"))(1080));
                break;
            default:
                break
        }
        a = b.getNumber("mos_upper_threshold", 0);
        var e = b.getNumber("mos_lower_threshold", 0);
        (a > 0 || e > 0) && d.push(new(c("OzMosThresholdRestriction"))(b));
        return d
    }
    g["default"] = a
}), 98);
__d("reportOzError", ["oz-player/utils/OzError"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (a instanceof c("oz-player/utils/OzError")) {
            var b = a.getExtra();
            return {
                error: a.getType(),
                message: a.getDescription(),
                httpStatus: b.code,
                url: b.url,
                stack: a.stack
            }
        } else return {
            error: "OZ_JAVASCRIPT_NATIVE",
            message: a.name + " " + a.message,
            httpStatus: null,
            url: null,
            stack: a.stack
        }
    }
    g["default"] = a
}), 98);
__d("VideoPlayerHTML5Oz", ["Deferred", "EventEmitter", "EventListener", "FBLogger", "MaybeNativePromise", "ODS", "OzActiveActiveFailoverNetworkRequestStreamHandler", "OzConfigurableRequestImplementation", "OzCustomParsers", "OzCustomRepresentationParsers", "OzDashPrefetchCache", "OzMaximumDimensionsRestriction", "OzPredictedSegmentTimelineParser", "OzVideoLiveTraceNetworkRequestStreamHandler", "P2PPlaybackSessionLogger", "Promise", "SubscriptionsHandler", "TimeRanges", "URI", "VideoPlayerConnectionQuality", "VideoPlayerOzWWWConfig", "VideoPlayerOzWWWGlobalConfig", "VideoPlayerPlayLogger", "VideoPlayerQualitiesArray", "VideoPlayerShakaPerformanceLogger", "asyncToGeneratorRuntime", "cr:1934445", "getOzPlaybackRestrictions", "gkx", "handleOzManifestFetchErrorEvent", "handleOzStreamErrorEvent", "manifestHasUnsupportedCodecs", "nullthrows", "oz-player", "oz-player/configs/OzConfigUtils", "oz-player/networks/OzBandwidthEstimator", "oz-player/networks/OzClockSyncNetworkRequestStreamHandler", "oz-player/networks/createNetworkError", "oz-player/shims/OzStreams", "oz-player/utils/OzError", "reportOzError", "throttle"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = /(livestream-)?lookaside\.(facebook|workplace)\.com$/,
        l = function(a) {
            return k.test(a.getDomain())
        };
    a = function(a) {
        babelHelpers.inheritsLoose(e, a);
        e.isSupported = function(a) {
            var e;
            !a.hasDashManifest() && !a.getLiveManifestUrl() ? e = "noDashManifest" : !window.MediaSource ? e = "noMediaSourceSupport" : !window.fetch && !b("cr:1934445") ? e = "noFetch" : !d("oz-player/shims/OzStreams").OzReadableStream || !d("oz-player/shims/OzStreams").OzReadableStream.prototype.pipeTo || !d("oz-player/shims/OzStreams").OzReadableStream.prototype.pipeThrough ? e = "noReadableStream" : !d("oz-player/shims/OzStreams").OzWritableStream ? e = "noWritableStream" : c("manifestHasUnsupportedCodecs")(a.getDashManifest()) && (e = "codecNotSupported");
            if (e) {
                (j || (j = d("ODS"))).bumpEntityKey(2966, "VideoPlayerHtml5Oz", "fallback." + e);
                return !1
            }
            return !0
        };
        e.getEstimatedBandwidth = function() {
            return c("oz-player/networks/OzBandwidthEstimator").getBandwidth(c("VideoPlayerOzWWWGlobalConfig"))
        };

        function e(b, d, e) {
            var f, g = e.config,
                h = e.manifest,
                i = e.manifestUrl,
                j = e.videoID,
                k = e.isLive,
                l = e.isServableViaFbms,
                m = e.accessToken,
                n = e.playerOrigin,
                o = e.playerSuborigin,
                p = e.playerInstanceKey,
                q = e.prefetchCache,
                r = e.resolutionConstraintMaxHeight,
                s = e.resolutionConstraintMaxWidth,
                t = e.width,
                u = e.height,
                v = e.minPlayQuality,
                w = e.startTimestamp,
                x = e.seekHandler,
                y = e.videoLiveTrace,
                z = e.OzDrmHelper,
                A = e.videoLicenseUriMap,
                B = e.graphApiVideoLicenseUri,
                C = e.widevineCert,
                D = e.desiredLatencyMs,
                E = e.latencyToleranceMs,
                F = e.p2pSettings;
            e = e.disableLogging;
            f = a.call(this) || this;
            f.$VideoPlayerHTML5Oz5 = 1;
            f.$VideoPlayerHTML5Oz6 = !1;
            f.$VideoPlayerHTML5Oz7 = null;
            f.$VideoPlayerHTML5Oz8 = null;
            f.$VideoPlayerHTML5Oz16 = null;
            f.$VideoPlayerHTML5Oz23 = !1;
            f.$VideoPlayerHTML5Oz24 = !1;
            f.$VideoPlayerHTML5Oz25 = null;
            f.$VideoPlayerHTML5Oz26 = null;
            f.$VideoPlayerHTML5Oz27 = !1;
            f.$VideoPlayerHTML5Oz28 = !1;
            f.$VideoPlayerHTML5Oz31 = !0;
            f.$VideoPlayerHTML5Oz32 = !1;
            f.$VideoPlayerHTML5Oz43 = null;
            f.$VideoPlayerHTML5Oz47 = null;
            f.$VideoPlayerHTML5Oz48 = !1;
            f.$VideoPlayerHTML5Oz49 = null;
            f.$VideoPlayerHTML5Oz1 = b;
            f.$VideoPlayerHTML5Oz2 = h;
            f.$VideoPlayerHTML5Oz3 = new(c("VideoPlayerOzWWWConfig"))(g);
            f.$VideoPlayerHTML5Oz17 = d;
            f.$VideoPlayerHTML5Oz14 = i;
            f.$VideoPlayerHTML5Oz15 = q;
            f.$VideoPlayerHTML5Oz18 = j;
            f.$VideoPlayerHTML5Oz19 = t;
            f.$VideoPlayerHTML5Oz20 = u;
            f.$VideoPlayerHTML5Oz21 = w;
            f.$VideoPlayerHTML5Oz29 = x;
            f.$VideoPlayerHTML5Oz30 = y;
            f.$VideoPlayerHTML5Oz33 = z;
            f.$VideoPlayerHTML5Oz34 = m;
            f.$VideoPlayerHTML5Oz35 = A;
            f.$VideoPlayerHTML5Oz36 = B;
            f.$VideoPlayerHTML5Oz37 = C;
            f.$VideoPlayerHTML5Oz38 = D;
            f.$VideoPlayerHTML5Oz39 = E;
            f.$VideoPlayerHTML5Oz27 = k;
            f.$VideoPlayerHTML5Oz48 = (h = e) != null ? h : !1;
            (typeof r === "number" || typeof s === "number") && (f.$VideoPlayerHTML5Oz16 = new(c("OzMaximumDimensionsRestriction"))({
                maxHeight: (typeof r === "number" ? r : null) || Infinity,
                maxWidth: (typeof s === "number" ? s : null) || Infinity
            }));
            F && (f.$VideoPlayerHTML5Oz49 = F.community_info, f.$VideoPlayerHTML5Oz40 = F.ticket, f.$VideoPlayerHTML5Oz44 = F.hive_initialization_options, f.$VideoPlayerHTML5Oz41 = F.config, f.$VideoPlayerHTML5Oz41 && (f.$VideoPlayerHTML5Oz41.delay_p2p_until_play = !1), f.$VideoPlayerHTML5Oz50());
            f.$VideoPlayerHTML5Oz48 ? f.$VideoPlayerHTML5Oz9 = null : f.$VideoPlayerHTML5Oz9 = c("VideoPlayerShakaPerformanceLogger").shouldInitialize() ? new(c("VideoPlayerShakaPerformanceLogger"))({
                videoID: j,
                video: b,
                representationId: null,
                isLive: k,
                isServableViaFbms: l,
                accessToken: m,
                playerOrigin: n,
                playerSuborigin: o,
                playerVersion: f.getPlayerVersion(),
                uniqueID: p,
                getBandwidthEstimate: function(a) {
                    return c("oz-player/networks/OzBandwidthEstimator").getAdjustedBandwidth(f.$VideoPlayerHTML5Oz3)
                },
                getApproximateFBLSToPlayerDisplayLatency: function() {
                    return null
                },
                isDrm: f.isDrm()
            }) : null;
            f.$VideoPlayerHTML5Oz9 && (f.$VideoPlayerHTML5Oz22 = new(c("VideoPlayerPlayLogger"))(f.$VideoPlayerHTML5Oz1, f.$VideoPlayerHTML5Oz9));
            f.$VideoPlayerHTML5Oz13 = v;
            (!f.$VideoPlayerHTML5Oz15 || typeof f.$VideoPlayerHTML5Oz15.getCachedRepresentations !== "function") && (f.$VideoPlayerHTML5Oz15 = null);
            !f.$VideoPlayerHTML5Oz15 && f.$VideoPlayerHTML5Oz3.getBool("use_prefetch_cache", !1) && (f.$VideoPlayerHTML5Oz15 = new(c("OzDashPrefetchCache"))());
            f.$VideoPlayerHTML5Oz51();
            return f
        }
        var f = e.prototype;
        f.$VideoPlayerHTML5Oz51 = function() {
            var a = this;
            this.$VideoPlayerHTML5Oz12 = new(c("SubscriptionsHandler"))();
            this.$VideoPlayerHTML5Oz52();
            this.$VideoPlayerHTML5Oz12.addSubscriptions(c("EventListener").listen(this.$VideoPlayerHTML5Oz1, "timeupdate", function(b) {
                a.$VideoPlayerHTML5Oz53(b.target.currentTime)
            }))
        };
        f.setup = function() {
            var a = [];
            this.$VideoPlayerHTML5Oz9 && a.push(this.$VideoPlayerHTML5Oz9);
            var b = [];
            this.$VideoPlayerHTML5Oz3.getBool("force_initial_representation", !1) && (b = this.$VideoPlayerHTML5Oz17);
            this.$VideoPlayerHTML5Oz54({
                manifest: this.$VideoPlayerHTML5Oz2,
                manifestUrl: this.$VideoPlayerHTML5Oz14,
                loggerProviders: a,
                prefetchCache: this.$VideoPlayerHTML5Oz15,
                initialRepresentations: b,
                videoID: this.$VideoPlayerHTML5Oz18,
                width: this.$VideoPlayerHTML5Oz19,
                height: this.$VideoPlayerHTML5Oz20
            })
        };
        f.$VideoPlayerHTML5Oz54 = function(a) {
            var e = this,
                f = a.manifest,
                g = a.manifestUrl,
                h = a.loggerProviders,
                i = a.prefetchCache,
                j = a.initialRepresentations;
            a = a.videoID;
            var k = this.$VideoPlayerHTML5Oz55(),
                m = null;
            switch (this.$VideoPlayerHTML5Oz13) {
                case "hd":
                case "HD":
                    m = "HD";
                    break;
                case "sd":
                case "SD":
                    m = "SD";
                    break;
                case "uhd":
                case "UHD":
                    m = "UHD";
                    break
            }
            this.$VideoPlayerHTML5Oz47 = this.$VideoPlayerHTML5Oz45 ? c("OzConfigurableRequestImplementation")(this.$VideoPlayerHTML5Oz45.getRequestImplementation(), {
                inferResponseStatusIsOK: !0,
                inferResponseStatusIsOk2xx: !1
            }) : null;
            m = c("getOzPlaybackRestrictions")(m, this.$VideoPlayerHTML5Oz3);
            this.$VideoPlayerHTML5Oz16 && m.push(this.$VideoPlayerHTML5Oz16);
            var n = this.$VideoPlayerHTML5Oz4 = new(c("oz-player"))({
                videoNode: this.$VideoPlayerHTML5Oz1,
                config: d("oz-player/configs/OzConfigUtils").provideConfigWithDefaults(this.$VideoPlayerHTML5Oz3),
                rawMpdXml: f === "" && this.$VideoPlayerHTML5Oz3.getBool("blue_video_player_pass_inline_mpd_xml_empty_string_as_undefined", !1) ? void 0 : f,
                customSegmentTimelineParser: this.$VideoPlayerHTML5Oz3.getBool("enable_predictive_dash", !1) ? new(c("OzPredictedSegmentTimelineParser"))() : void 0,
                loggerConfig: {
                    perfLoggerProviders: h,
                    observedOperationLoggers: [],
                    isOzDevConsoleEnabled: c("gkx")("722076")
                },
                prefetchCache: i,
                networkRequestStreamHandlers: [new(c("OzActiveActiveFailoverNetworkRequestStreamHandler"))(function(a, b) {
                    var d = a.headers;
                    a = a.status;
                    a = c("oz-player/networks/createNetworkError")(new Error("Replica switch requested via HTTP headers"), a, d, b, "HTTP error.");
                    throw a
                }), new(c("OzVideoLiveTraceNetworkRequestStreamHandler"))(function(a, b, c) {
                    e.$VideoPlayerHTML5Oz30 && e.$VideoPlayerHTML5Oz30.handleHeadersAndBody(a, b, c)
                }, this.$VideoPlayerHTML5Oz3.getBool("live_trace_parse_emsg", !1)), new(c("oz-player/networks/OzClockSyncNetworkRequestStreamHandler"))()],
                getShouldIncludeCredentials: this.$VideoPlayerHTML5Oz3.getBool("use_oz_credentials_provider", !1) ? l : null,
                getOverrideOzRequestImplementation: function() {
                    var a, c = !window.fetch || e.$VideoPlayerHTML5Oz3.getBool("blue_video_player_force_xhr", !1) ? b("cr:1934445") : null;
                    return (a = (a = e.$VideoPlayerHTML5Oz47) != null ? a : c) != null ? a : null
                },
                initialRepresentationIDs: j || [],
                customParsers: d("OzCustomParsers").createOzCustomParser(),
                entityKey: a,
                videoPlaybackRestrictions: m,
                customRepresentationParsers: d("OzCustomRepresentationParsers").createOzCustomRepresentationParsers({
                    ozConfig: this.$VideoPlayerHTML5Oz3,
                    startTimestamp: this.$VideoPlayerHTML5Oz21
                }),
                seekHandler: this.$VideoPlayerHTML5Oz29,
                initialPlaybackPositionForDynamicMpd: this.$VideoPlayerHTML5Oz38 != null && this.$VideoPlayerHTML5Oz38 > 0 ? this.$VideoPlayerHTML5Oz38 / 1e3 * -1 : this.$VideoPlayerHTML5Oz3.getNumber("live_initial_playback_position", 0),
                liveheadFallBehindBlockThreshold: this.$VideoPlayerHTML5Oz38 != null && this.$VideoPlayerHTML5Oz38 > 0 && this.$VideoPlayerHTML5Oz39 != null && this.$VideoPlayerHTML5Oz39 > 0 ? (this.$VideoPlayerHTML5Oz38 + this.$VideoPlayerHTML5Oz39) / 1e3 : this.$VideoPlayerHTML5Oz3.getNumber("livehead_fall_behind_block_threshold", 0),
                liveheadFallBehindBlockMargin: this.$VideoPlayerHTML5Oz38 != null && this.$VideoPlayerHTML5Oz38 > 0 ? this.$VideoPlayerHTML5Oz38 / 2 / 1e3 : this.$VideoPlayerHTML5Oz3.getNumber("live_time_range_block_margin", 0),
                startTimeStamp: this.$VideoPlayerHTML5Oz3.getBool("fix_start_timestamp", !1) ? this.$VideoPlayerHTML5Oz21 || 0 : 0,
                drmProviders: k,
                getVideoDimensions: function() {
                    return {
                        height: e.$VideoPlayerHTML5Oz20,
                        width: e.$VideoPlayerHTML5Oz19
                    }
                }
            });
            this.$VideoPlayerHTML5Oz12.addSubscriptions(n.onError(this.$VideoPlayerHTML5Oz56.bind(this)), n.addListener("destroyed", this.$VideoPlayerHTML5Oz57.bind(this)), n.addListener("debug/dashPlayerEvent", this.$VideoPlayerHTML5Oz58.bind(this)), n.addListener("streamEnd", this.$VideoPlayerHTML5Oz59.bind(this)), n.addListener("manifestFetchError", function(a) {
                c("handleOzManifestFetchErrorEvent")(e.$VideoPlayerHTML5Oz3, a)
            }), n.addListener("streamError", function(a) {
                return c("handleOzStreamErrorEvent")(e.$VideoPlayerHTML5Oz3, a)
            }));
            this.$VideoPlayerHTML5Oz12.addSubscriptions(n.addListener("enterBuffering", this.$VideoPlayerHTML5Oz60.bind(this)), n.addListener("leaveBuffering", this.$VideoPlayerHTML5Oz61.bind(this)));
            if (this.$VideoPlayerHTML5Oz40 && this.$VideoPlayerHTML5Oz27 && this.$VideoPlayerHTML5Oz41)
                if (!this.$VideoPlayerHTML5Oz41.delay_p2p_until_play || this.$VideoPlayerHTML5Oz42) this.$VideoPlayerHTML5Oz62();
                else {
                    f = function a() {
                        e.$VideoPlayerHTML5Oz1.removeEventListener("play", a), e.$VideoPlayerHTML5Oz62()
                    };
                    h = function a() {
                        e.$VideoPlayerHTML5Oz1.removeEventListener("ended", a), e.disableP2PPlayback()
                    };
                    this.$VideoPlayerHTML5Oz1.addEventListener("play", f);
                    this.$VideoPlayerHTML5Oz1.addEventListener("ended", h)
                }
            this.$VideoPlayerHTML5Oz12.addSubscriptions(n.addListener("mpdReady", function(a) {
                e.$VideoPlayerHTML5Oz63(a)
            }));
            this.$VideoPlayerHTML5Oz43 ? this.$VideoPlayerHTML5Oz43.then(function() {
                var a = e.$VideoPlayerHTML5Oz14;
                n.load(a)
            })["catch"](function() {
                e.$VideoPlayerHTML5Oz14 = g, e.disableP2PPlayback(), n.load(g)
            }) : n.load(g)
        };
        f.$VideoPlayerHTML5Oz63 = function(a) {
            this.ispDASH() && (this.$VideoPlayerHTML5Oz3.setContext("latency_level", "predictive"), this.$VideoPlayerHTML5Oz3.setContext("streaming_implementation", "pdash")), this.$VideoPlayerHTML5Oz64(this.$VideoPlayerHTML5Oz4), this.$VideoPlayerHTML5Oz65(a), this.$VideoPlayerHTML5Oz30 && this.$VideoPlayerHTML5Oz66(a), this.$VideoPlayerHTML5Oz3.getBool("update_seekable_range", !1) && this.$VideoPlayerHTML5Oz67(a)
        };
        f.$VideoPlayerHTML5Oz50 = function() {
            var a = this,
                b = this.$VideoPlayerHTML5Oz46;
            if (b == null) {
                var d;
                this.$VideoPlayerHTML5Oz46 = b = new(c("P2PPlaybackSessionLogger"))(this.$VideoPlayerHTML5Oz18, {
                    communityId: (d = (d = this.$VideoPlayerHTML5Oz49) == null ? void 0 : d.community_id) != null ? d : "unknowncustomer",
                    communityName: (d = (d = this.$VideoPlayerHTML5Oz49) == null ? void 0 : d.community_name) != null ? d : "Unknown Customer"
                })
            }
            try {
                var e;
                b.logEnableP2P();
                d = this.$VideoPlayerHTML5Oz44 ? this.$VideoPlayerHTML5Oz44 : {};
                d.debugLevel = (e = d.debugLevel) != null ? e : "debug";
                d.hiveTechOrder = (e = d.hiveTechOrder) != null ? e : ["HiveJS", "StatsJS", "HiveJava"];
                e = d.HiveJS ? d.HiveJS : {};
                e.renderStatsCallback = function(b) {
                    a.emit("debug/dashPlayerEvent", {
                        type: "P2PStats",
                        event: b
                    }), c("nullthrows")(a.$VideoPlayerHTML5Oz46).setCurrentHiveStats(b)
                };
                d.onActiveSession = function(b) {
                    a.$VideoPlayerHTML5Oz46 && a.$VideoPlayerHTML5Oz46.logSessionActive(b.tech), a.emit("debug/dashPlayerEvent", {
                        type: "P2PTech",
                        event: b.tech
                    })
                };
                var f = d.hiveTechOrder != null ? d.hiveTechOrder.indexOf("HiveJava") : -1,
                    g = this.$VideoPlayerHTML5Oz41;
                g && (g.disable_hivejava_for_livevc && this.$VideoPlayerHTML5Oz14 && this.$VideoPlayerHTML5Oz14.startsWith("https://livestream-lookaside") && d.hiveTechOrder && f !== -1 && d.hiveTechOrder.splice(f, 1), d.HiveJS = e, d.telemetryId = b.getSessionID(), d.onError = this.$VideoPlayerHTML5Oz68.bind(this), this.$VideoPlayerHTML5Oz45 = new window.HiveOz(d))
            } catch (a) {
                b.logError(a), this.$VideoPlayerHTML5Oz42 = void 0
            }
        };
        f.$VideoPlayerHTML5Oz62 = function() {
            var a = b("asyncToGeneratorRuntime").asyncToGenerator(function*() {
                var a = this,
                    b = this.$VideoPlayerHTML5Oz45,
                    d = this.$VideoPlayerHTML5Oz46,
                    e = new(c("Deferred"))(c("MaybeNativePromise"));
                try {
                    if (b != null) {
                        this.$VideoPlayerHTML5Oz3.getBool("fix_oz_p2p_enable_failed", !1) || (this.$VideoPlayerHTML5Oz43 = e.getPromise());
                        window.HiveConfig.SensitiveInfo.restrictedConnectivityInfo = !0;
                        if (!this.$VideoPlayerHTML5Oz14) return;
                        var f = this.$VideoPlayerHTML5Oz14.substring(this.$VideoPlayerHTML5Oz14.indexOf("?"));
                        this.$VideoPlayerHTML5Oz3.getBool("fix_oz_p2p_enable_failed", !1) && (this.$VideoPlayerHTML5Oz43 = e.getPromise());
                        b = b.initSession(c("nullthrows")(this.$VideoPlayerHTML5Oz40) + f, this.$VideoPlayerHTML5Oz4, this.$VideoPlayerHTML5Oz1);
                        f = this.$VideoPlayerHTML5Oz42 = (yield b);
                        this.$VideoPlayerHTML5Oz14 = f.manifest;
                        b.then(function(a) {
                            return e.resolve(a)
                        }, function(a) {
                            return e.reject(a)
                        })["finally"](function() {
                            a.$VideoPlayerHTML5Oz43 = null
                        });
                        f.manifest != this.$VideoPlayerHTML5Oz14 && d && d.logManifestMismatch(f.manifest, this.$VideoPlayerHTML5Oz14);
                        d && d.logSessionInit(f.tech, this.$VideoPlayerHTML5Oz14)
                    }
                } catch (a) {
                    this.$VideoPlayerHTML5Oz3.getBool("fix_oz_p2p_enable_failed", !1) && e.reject(a), d && d.logError(a), this.$VideoPlayerHTML5Oz42 = void 0
                }
            });

            function d() {
                return a.apply(this, arguments)
            }
            return d
        }();
        f.$VideoPlayerHTML5Oz68 = function(a) {
            this.$VideoPlayerHTML5Oz46 && this.$VideoPlayerHTML5Oz46.logHiveError(a)
        };
        f.disableP2PPlayback = function() {
            try {
                this.$VideoPlayerHTML5Oz46 && this.$VideoPlayerHTML5Oz46.logEndSession(), this.$VideoPlayerHTML5Oz45 && this.$VideoPlayerHTML5Oz45.closeHiveSession()
            } catch (a) {
                c("FBLogger")("www_p2p_playback").warn(a.message)
            }
            this.$VideoPlayerHTML5Oz4 && this.$VideoPlayerHTML5Oz3.getBool("unset_override_oz_request_implementation_on_hive_error", !1) && (this.$VideoPlayerHTML5Oz47 = null);
            this.$VideoPlayerHTML5Oz46 = null;
            this.$VideoPlayerHTML5Oz45 = null;
            this.$VideoPlayerHTML5Oz42 = null;
            this.$VideoPlayerHTML5Oz40 = null
        };
        f.$VideoPlayerHTML5Oz67 = function(a) {
            var b = this;
            this.$VideoPlayerHTML5Oz12.addSubscriptions(a.addListener("updated", function() {
                b.emit("seekRangeChanged")
            }))
        };
        f.$VideoPlayerHTML5Oz55 = function() {
            var a = [];
            this.$VideoPlayerHTML5Oz33 && a.push(new this.$VideoPlayerHTML5Oz33.OzWidevineDrmProviderModule(this.$VideoPlayerHTML5Oz18, this.$VideoPlayerHTML5Oz36, this.$VideoPlayerHTML5Oz35, this.$VideoPlayerHTML5Oz34, this.$VideoPlayerHTML5Oz37));
            return a
        };
        f.$VideoPlayerHTML5Oz69 = function() {
            var a = this;
            return function(b, c) {
                if (!a.$VideoPlayerHTML5Oz6 || !a.$VideoPlayerHTML5Oz31) return;
                try {
                    b = b.getCustomField("timescale") || 0;
                    if (!b || typeof b !== "number") return;
                    a.emit("cea608CaptionsBytesReceived", {
                        timescale: b,
                        videoBytes: c
                    })
                } catch (b) {
                    a.$VideoPlayerHTML5Oz56(b)
                }
            }
        };
        f.$VideoPlayerHTML5Oz53 = function(a) {
            if (this.$VideoPlayerHTML5Oz3.getBool("fix_representation_ended_timing", !1) && (this.$VideoPlayerHTML5Oz1.paused || this.$VideoPlayerHTML5Oz1.seeking)) return;
            if (!this.$VideoPlayerHTML5Oz4) return;
            var b = this.$VideoPlayerHTML5Oz4.getVideoRepresentationIDAtTime(a);
            if (b != null && b !== this.$VideoPlayerHTML5Oz8) {
                var c = this.$VideoPlayerHTML5Oz8;
                this.$VideoPlayerHTML5Oz8 = b;
                c != null && this.emit("representation_ended", {
                    representationID: c,
                    nextRepresentationID: b
                })
            }
            if (!this.$VideoPlayerHTML5Oz4) return;
            c = this.$VideoPlayerHTML5Oz4.getAudioRepresentationIDAtTime(a);
            if (c != null && c !== this.$VideoPlayerHTML5Oz7) {
                b = this.$VideoPlayerHTML5Oz7;
                this.$VideoPlayerHTML5Oz7 = c;
                b != null && this.emit("representation_ended", {
                    representationID: b,
                    nextRepresentationID: c
                })
            }
        };
        f.$VideoPlayerHTML5Oz52 = function() {
            var a = this,
                b = this.$VideoPlayerHTML5Oz3.getNumber("connection_quality_context_throttle_frequency", 0);
            if (b === 0) return;
            var f = function() {
                a.$VideoPlayerHTML5Oz3.setContext("connection_quality", d("VideoPlayerConnectionQuality").evaluate(e.getEstimatedBandwidth))
            };
            this.$VideoPlayerHTML5Oz12.addSubscriptions(c("oz-player/networks/OzBandwidthEstimator").addListener("bandwidth_sampled", c("throttle")(f, b)));
            f()
        };
        f.$VideoPlayerHTML5Oz56 = function(a) {
            if (a instanceof c("oz-player/utils/OzError")) {
                var b = a.getExtra();
                this.disableP2PPlayback();
                (b.code === "417" || b.code === "200") && b.headers && b.headers.has("x-fb-video-replica") ? this.emit("replicaSwitch", {
                    replica: parseInt(b.headers.get("x-fb-video-replica"), 10),
                    url: b.url,
                    status: b.code,
                    timestamp: new Date().valueOf()
                }) : (this.emit("error", c("reportOzError")(a)), this.$VideoPlayerHTML5Oz4 && this.$VideoPlayerHTML5Oz4.destroy())
            } else this.emit("error", c("reportOzError")(a))
        };
        f.$VideoPlayerHTML5Oz59 = function() {
            this.$VideoPlayerHTML5Oz28 = !0
        };
        f.$VideoPlayerHTML5Oz57 = function() {
            this.$VideoPlayerHTML5Oz4 = null
        };
        f.$VideoPlayerHTML5Oz58 = function(a) {
            this.emit("debug/dashPlayerEvent", a.detail)
        };
        f.$VideoPlayerHTML5Oz70 = function() {
            var a = 1;
            return this.$VideoPlayerHTML5Oz25 != null && Math.abs(this.$VideoPlayerHTML5Oz1.currentTime - this.$VideoPlayerHTML5Oz25) < a || this.$VideoPlayerHTML5Oz26 != null && Math.abs(this.$VideoPlayerHTML5Oz1.currentTime - this.$VideoPlayerHTML5Oz26) < a ? !0 : !1
        };
        f.$VideoPlayerHTML5Oz60 = function(a) {
            this.$VideoPlayerHTML5Oz70() || (this.$VideoPlayerHTML5Oz23 = !0, this.emit("bufferingStart"), this.$VideoPlayerHTML5Oz9 && (this.$VideoPlayerHTML5Oz10 = this.$VideoPlayerHTML5Oz9.getOperationLogger("buffering").setType(a).start())), this.$VideoPlayerHTML5Oz3.getBool("throttle_playback_rate_on_stall", !1) && this.$VideoPlayerHTML5Oz71()
        };
        f.$VideoPlayerHTML5Oz61 = function() {
            (!this.$VideoPlayerHTML5Oz3.getBool("buffer_end_only_when_buffering", !1) || this.$VideoPlayerHTML5Oz23) && (this.emit("bufferingEnd"), this.$VideoPlayerHTML5Oz10 && (this.$VideoPlayerHTML5Oz10.log(), this.$VideoPlayerHTML5Oz10 = null), this.$VideoPlayerHTML5Oz23 = !1), this.$VideoPlayerHTML5Oz3.getBool("throttle_playback_rate_on_stall", !1) && this.$VideoPlayerHTML5Oz72()
        };
        f.$VideoPlayerHTML5Oz71 = function() {
            this.$VideoPlayerHTML5Oz5 == null && (this.$VideoPlayerHTML5Oz5 = this.$VideoPlayerHTML5Oz1.playbackRate), this.$VideoPlayerHTML5Oz1.playbackRate = 0
        };
        f.$VideoPlayerHTML5Oz72 = function() {
            this.$VideoPlayerHTML5Oz5 && (this.$VideoPlayerHTML5Oz1.playbackRate = this.$VideoPlayerHTML5Oz5), this.$VideoPlayerHTML5Oz5 = null
        };
        f.$VideoPlayerHTML5Oz66 = function(a) {
            var b = this,
                c = function() {
                    if (b.$VideoPlayerHTML5Oz30) {
                        var c = a.getCustomField("loapStreamType");
                        typeof c === "number" && b.$VideoPlayerHTML5Oz30 && b.$VideoPlayerHTML5Oz30.setStreamType(c)
                    }
                };
            c();
            this.$VideoPlayerHTML5Oz12.addSubscriptions(a.addListener("updated", c))
        };
        f.$VideoPlayerHTML5Oz65 = function(a) {
            var b = this,
                c = function() {
                    b.$VideoPlayerHTML5Oz32 = !!a.getCustomField("hasInbandCaptionsFromUsingASRCaptions"), b.$VideoPlayerHTML5Oz73(!!a.getCustomField("hasInbandCaptionsFromAccessibility") || b.$VideoPlayerHTML5Oz32)
                };
            c();
            this.$VideoPlayerHTML5Oz12.addSubscriptions(a.addListener("updated", c))
        };
        f.$VideoPlayerHTML5Oz73 = function(a) {
            if (this.$VideoPlayerHTML5Oz6 === a) return;
            this.$VideoPlayerHTML5Oz6 = a;
            this.$VideoPlayerHTML5Oz6 && this.$VideoPlayerHTML5Oz4 != null && this.$VideoPlayerHTML5Oz4.updatePlayerRunTimeConfig({
                videoStreamDataHandler: this.$VideoPlayerHTML5Oz69()
            });
            this.emit("cea608AvailabilityChanged")
        };
        f.$VideoPlayerHTML5Oz64 = function(a) {
            var b = this;
            a = a;
            if (!a) return;
            this.$VideoPlayerHTML5Oz3.getNumber("stream_interrupt_check_mpd_stale_count_threshold", 0) > 0 && this.$VideoPlayerHTML5Oz12.addSubscriptions(a.addListener("streamInterruptAt", function(a) {
                b.$VideoPlayerHTML5Oz25 = a, b.$VideoPlayerHTML5Oz23 && (b.emit("bufferingEnd"), b.$VideoPlayerHTML5Oz10 && (b.$VideoPlayerHTML5Oz10.log(), b.$VideoPlayerHTML5Oz10 = null)), b.$VideoPlayerHTML5Oz74()
            }), a.addListener("streamResumedAt", function(a) {
                b.$VideoPlayerHTML5Oz26 = a, b.$VideoPlayerHTML5Oz24 && b.$VideoPlayerHTML5Oz75()
            }))
        };
        f.$VideoPlayerHTML5Oz74 = function() {
            this.emit("streamInterrupted"), this.$VideoPlayerHTML5Oz23 = !1, this.$VideoPlayerHTML5Oz24 = !0, this.$VideoPlayerHTML5Oz9 && (this.$VideoPlayerHTML5Oz11 = this.$VideoPlayerHTML5Oz9.getOperationLogger("stream_interrupted"))
        };
        f.$VideoPlayerHTML5Oz75 = function() {
            this.emit("streamResumed"), this.$VideoPlayerHTML5Oz11 && (this.$VideoPlayerHTML5Oz11.log(), this.$VideoPlayerHTML5Oz11 = null), this.$VideoPlayerHTML5Oz24 = !1
        };
        f.play = function() {
            this.$VideoPlayerHTML5Oz22 && this.$VideoPlayerHTML5Oz22.playStarted();
            return this.$VideoPlayerHTML5Oz1.play()
        };
        f.pause = function() {
            this.$VideoPlayerHTML5Oz1.pause()
        };
        f.reload = function() {
            if (this.$VideoPlayerHTML5Oz3.getBool("enable_abortload_and_reload", !1)) {
                this.$VideoPlayerHTML5Oz51();
                this.setup();
                return c("MaybeNativePromise").resolve()
            }
            return (i || (i = b("Promise"))).reject()
        };
        f.unload = function() {
            this.$VideoPlayerHTML5Oz12.release();
            this.$VideoPlayerHTML5Oz10 && (this.$VideoPlayerHTML5Oz10.log(), this.$VideoPlayerHTML5Oz10 = null);
            this.$VideoPlayerHTML5Oz11 && (this.$VideoPlayerHTML5Oz11.log(), this.$VideoPlayerHTML5Oz11 = null);
            this.$VideoPlayerHTML5Oz22 && this.$VideoPlayerHTML5Oz22.unload();
            var a = (i || (i = b("Promise"))).resolve();
            this.$VideoPlayerHTML5Oz3.getBool("enable_abortload_and_reload", !1) && (this.$VideoPlayerHTML5Oz61(), this.$VideoPlayerHTML5Oz4 && (a = this.$VideoPlayerHTML5Oz4.destroy(), this.$VideoPlayerHTML5Oz4 = null));
            return a
        };
        f.getVideoStreamInfoIDForTimePosition = function(a) {
            return !this.$VideoPlayerHTML5Oz4 ? null : this.$VideoPlayerHTML5Oz4.getVideoRepresentationIDAtTime(a)
        };
        f.getAudioStreamInfoIDForTimePosition = function(a) {
            return !this.$VideoPlayerHTML5Oz4 ? null : this.$VideoPlayerHTML5Oz4.getAudioRepresentationIDAtTime(a)
        };
        f.getDashAudioConfiguration = function() {
            return ""
        };
        f.getLocalEstimator = function() {
            return null
        };
        f.setDimensions = function(a, b) {
            this.$VideoPlayerHTML5Oz19 = a, this.$VideoPlayerHTML5Oz20 = b
        };
        f.getLongestInitResponseTime = function() {
            return 0
        };
        f.setPlaybackRate = function(a) {
            this.$VideoPlayerHTML5Oz5 = a, this.$VideoPlayerHTML5Oz1.playbackRate = a
        };
        f.areInbandCaptionsExpected = function() {
            return this.$VideoPlayerHTML5Oz6
        };
        f.areInbandCaptionsAutogenerated = function() {
            return this.$VideoPlayerHTML5Oz32
        };
        f.setEnableInbandCaptionsParsing = function(a) {
            this.$VideoPlayerHTML5Oz31 = a
        };
        f.setPreferredVideoQuality = function(a) {
            if (!this.$VideoPlayerHTML5Oz4) return;
            this.$VideoPlayerHTML5Oz4.switchToVideoQuality(a)
        };
        f.setVideoStreamOffset = function(a) {};
        f.getSelectedVideoQuality = function() {
            return !this.$VideoPlayerHTML5Oz4 ? null : this.$VideoPlayerHTML5Oz4.getSelectedVideoQuality()
        };
        f.unsetPreferredVideoQuality = function() {
            this.$VideoPlayerHTML5Oz4 && this.$VideoPlayerHTML5Oz4.enableVideoQualityAdaptation()
        };
        f.getAvailableVideoQualities = function() {
            return d("VideoPlayerQualitiesArray").ensureVideoPlayerQualitiesArray(this.$VideoPlayerHTML5Oz4 ? this.$VideoPlayerHTML5Oz4.getVideoQualities() : [])
        };
        f.getIsAbrEnabled = function() {
            return this.$VideoPlayerHTML5Oz3.getBool("enable_adaptation", !1)
        };
        f.canAutoSelectVideoQuality = function() {
            return !0
        };
        f.isDrm = function() {
            var a;
            this.$VideoPlayerHTML5Oz4 && (a = this.$VideoPlayerHTML5Oz4.isDrm());
            a == null && this.$VideoPlayerHTML5Oz2 && (a = this.$VideoPlayerHTML5Oz2.indexOf("<ContentProtection") >= 0);
            return a
        };
        f.setPreloadDisabled = function(a) {};
        f.restoreStreamBufferSize = function() {};
        f.getDebug = function() {
            return {
                manifest: this.$VideoPlayerHTML5Oz2,
                DashPlayer: this.$VideoPlayerHTML5Oz4,
                AbrManager: this.$VideoPlayerHTML5Oz4 ? this.$VideoPlayerHTML5Oz4.getDebug().VideoAbrManager : null,
                BandwidthEstimator: c("oz-player/networks/OzBandwidthEstimator")
            }
        };
        f.getVideoProjection = function() {
            var a = this.$VideoPlayerHTML5Oz4 && this.$VideoPlayerHTML5Oz4.getMpd();
            return !a ? null : a.getCustomField("fbProjection")
        };
        f.setEnableLiveheadCatchup = function(a) {
            this.$VideoPlayerHTML5Oz4 && this.$VideoPlayerHTML5Oz4.setEnableLiveheadCatchup(a)
        };
        f.isFBWasLive = function() {
            return !1
        };
        f.clearBufferAfterSeekingIfLowerQuality = function(a) {};
        f.isFBIsLiveTemplated = function() {
            var a = this.$VideoPlayerHTML5Oz4 && this.$VideoPlayerHTML5Oz4.getMpd();
            if (!a) return !1;
            a = a.getCustomField("isLiveTemplated");
            return !!a
        };
        f.isFBMS = function() {
            return !1
        };
        f.ispDASH = function() {
            var a = this.$VideoPlayerHTML5Oz4 && this.$VideoPlayerHTML5Oz4.getMpd();
            if (!a) return !1;
            a = (a = a.getVideoRepresentations()[0]) != null ? a : null;
            return a !== null && a.canPredict()
        };
        f.isLiveheadCatchupEnabled = function() {
            return !1
        };
        f.getFbManifestIdentifier = function() {
            var a = this.$VideoPlayerHTML5Oz4 && this.$VideoPlayerHTML5Oz4.getMpd();
            if (!a) return "";
            a = a.getCustomField("fbManifestIdentifier");
            return typeof a === "string" ? a : ""
        };
        f.getSeekableRanges = function() {
            var a = this.$VideoPlayerHTML5Oz4 && this.$VideoPlayerHTML5Oz4.getMpd();
            if (!a) return null;
            a = a.getVideoRepresentations();
            if (a.length) {
                a = a[0];
                a = a.getTimeRanges();
                if (a.length) {
                    var b = a[0].startTime;
                    a = Math.max(a[a.length - 1].endTime - this.$VideoPlayerHTML5Oz3.getNumber("live_rewind_seek_to_live_delta", 8), b);
                    return new(c("TimeRanges"))([{
                        startTime: b,
                        endTime: a
                    }])
                }
            }
        };
        f.refreshDashManifest = function() {
            return (i || (i = b("Promise"))).reject()
        };
        f.switchReplicaSet = function(a) {
            var b = new(h || (h = c("URI")))(this.$VideoPlayerHTML5Oz14);
            b.addQueryData("replica", a);
            this.$VideoPlayerHTML5Oz14 = b.toString()
        };
        f.getPlaybackRate = function() {
            return 1
        };
        f.getPlayerVersion = function() {
            return "oz"
        };
        f.getManifestUrl = function() {
            return this.$VideoPlayerHTML5Oz14
        };
        f.getBandwidthEstimate = function() {
            return e.getEstimatedBandwidth()
        };
        f.isDashPerfLoggingEnabled = function() {
            return this.$VideoPlayerHTML5Oz9 != null
        };
        return e
    }(c("EventEmitter"));
    g["default"] = a
}), 98);
__d("ErrorMetadata", ["fb-error"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        b.addGlobalMetadata = function(b, c, d) {
            a.addGlobalMetadata.call(this, b, c, d)
        };
        return b
    }(c("fb-error").ErrorMetadata);
    g["default"] = a
}), 98);