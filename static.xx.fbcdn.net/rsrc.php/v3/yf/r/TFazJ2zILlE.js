; /*FB_PKG_DELIM*/

__d("PageTransitions", ["cr:917439"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:917439")
}), 98);
__d("PluginCSSReflowHack", ["Style"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        setTimeout(function() {
            var b = "border-bottom-width",
                d = c("Style").get(a, b);
            c("Style").set(a, b, parseInt(d, 10) + 1 + "px");
            c("Style").set(a, b, d)
        }, 1e3)
    }
    g.trigger = a
}), 98);
__d("EventListener", ["cr:1353359"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1353359")
}), 98);
__d("BladeRunnerDeferredClient", ["Promise", "nullthrows", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        function a() {
            this.$1 = null
        }
        var d = a.prototype;
        d.requestStream = function(a, b, d, e) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(c) {
                return c.requestStream(a, b, d, e)
            })
        };
        d.logInfo = function(a) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(b) {
                b.logInfo(a)
            })
        };
        d.bumpCounter = function(a) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(b) {
                b.bumpCounter(a)
            })
        };
        d.$2 = function() {
            this.$1 == null && (this.$1 = new(h || (h = b("Promise")))(function(a) {
                c("requireDeferred")("BladeRunnerClient").__setRef("BladeRunnerDeferredClient").onReady(function(b) {
                    a(new b())
                })
            }))
        };
        return a
    }();
    d = new a();
    g["default"] = d
}), 98);
__d("BladeRunnerStreamHandler", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b, c, d, e, f) {
            this.$1 = a, this.$2 = b, this.$3 = c || function(a) {}, this.$4 = d || function(a) {}, this.$5 = e || function(a) {}, this.$6 = f
        }
        var b = a.prototype;
        b.onData = function(a) {
            var b = this.$1,
                c = this.$2;
            if (b != null) b(a.decodeData());
            else if (c != null) {
                b = atob(a.rawData());
                a = new Uint8Array(b.length);
                for (var d = 0; d < b.length; d++) a[d] = b.charCodeAt(d);
                c(a.buffer)
            }
        };
        b.onStatusUpdate = function(a) {
            this.$3(a)
        };
        b.onLog = function(a) {
            this.$4(a)
        };
        b.onBatch = function(a) {
            this.$5(a)
        };
        b.onClientCancel = function() {};
        b.getUpdatedRequestBody = function() {
            if (this.$6 != null) return this.$6()
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("BladeRunnerStreamStatus", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        CREATED: 0,
        ACCEPTED: 1,
        REJECTED: 2,
        STARTED: 3,
        STOPPED: 4,
        CLOSED: 5
    };
    f.StreamStatus = a
}), 66);
__d("BladeRunnerInstrumentedStreamHandler", ["BladeRunnerDeferredClient", "BladeRunnerStreamHandler", "BladeRunnerStreamStatus", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    var h = 60 * 1e3;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            var e;
            e = a.call(this) || this;
            e.$BladeRunnerInstrumentedStreamHandler1 = b;
            e.$BladeRunnerInstrumentedStreamHandler2 = d;
            e.$BladeRunnerInstrumentedStreamHandler3 = Date.now();
            e.$BladeRunnerInstrumentedStreamHandler5 = c("setTimeoutAcrossTransitions")(function() {
                e.$BladeRunnerInstrumentedStreamHandler4 == null && e.$BladeRunnerInstrumentedStreamHandler6(-1, Date.now())
            }, h);
            return e
        }
        var e = b.prototype;
        e.onData = function(a) {
            c("BladeRunnerDeferredClient").bumpCounter("received_data." + this.$BladeRunnerInstrumentedStreamHandler2), this.$BladeRunnerInstrumentedStreamHandler1.onData(a)
        };
        e.onStatusUpdate = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler6(a, Date.now()), this.$BladeRunnerInstrumentedStreamHandler1.onStatusUpdate(a)
        };
        e.onLog = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler1.onLog(a)
        };
        e.onBatch = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler1.onBatch(a)
        };
        e.onClientCancel = function() {
            this.$BladeRunnerInstrumentedStreamHandler6(d("BladeRunnerStreamStatus").StreamStatus.CLOSED, Date.now())
        };
        e.$BladeRunnerInstrumentedStreamHandler6 = function(a, b) {
            c("BladeRunnerDeferredClient").bumpCounter("received_status_" + a + "." + this.$BladeRunnerInstrumentedStreamHandler2);
            if (this.$BladeRunnerInstrumentedStreamHandler4 == null) {
                this.$BladeRunnerInstrumentedStreamHandler4 = b;
                a = Math.max(this.$BladeRunnerInstrumentedStreamHandler4 - this.$BladeRunnerInstrumentedStreamHandler3, 0);
                b = a >= 1e4 ? Math.round(Math.min(a / 1e4, 6)) * 10 : Math.round(Math.min(a / 1e3, 10));
                c("BladeRunnerDeferredClient").bumpCounter("status_latency." + this.$BladeRunnerInstrumentedStreamHandler2 + "." + b + ".s")
            }
            clearTimeout(this.$BladeRunnerInstrumentedStreamHandler5)
        };
        return b
    }(c("BladeRunnerStreamHandler"));
    g["default"] = a
}), 98);
__d("RequestStreamHandler", ["err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.onData,
                c = a.onTermination,
                d = a.onLog,
                e = a.onFlowStatus;
            a = a.onRetryUpdateRequestBody;
            this.$1 = b || function(a) {};
            this.$2 = c || function(a) {};
            this.$3 = d || function(a) {};
            this.$4 = e;
            this.$5 = a
        }
        var b = a.prototype;
        b.onFlowStatus = function(a) {
            this.$4(a)
        };
        b.onData = function(a) {
            this.$1(a)
        };
        b.onTermination = function(a) {
            this.$2(c("err")(a))
        };
        b.onLog = function(a) {
            this.$3(a)
        };
        b.onRetryUpdateRequestBody = function() {
            if (this.$5 != null) return this.$5()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("DGWConstants", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 3e4,
        h = "prod",
        i = 128,
        j = (b = b("$InternalEnum"))({
            NORMAL_CLOSURE: 1e3,
            GOING_AWAY: 1001,
            ABNORMAL_CLOSURE: 1006,
            SERVER_INTERNAL_ERROR: 1011,
            GRACEFUL_CLOSE: 4e3,
            KEEPALIVE_TIMEOUT: 4001,
            DGW_SERVER_ERROR: 4002,
            UNAUTHORIZED: 4003,
            REJECTED: 4004,
            BAD_REQUEST: 4005
        }),
        k = b({
            DrainReason_ELB: 0,
            DrainReason_SLB: 1,
            DrainReason_AppServerPush: 2,
            DrainReason_GracePeriodExpired: 3,
            DrainReason_Unknown: 4
        });

    function a(a) {
        switch (a) {
            case k.DrainReason_ELB:
                return "DrainReason_ELB";
            case k.DrainReason_SLB:
                return "DrainReason_SLB";
            case k.DrainReason_AppServerPush:
                return "DrainReason_AppServerPush";
            case k.DrainReason_GracePeriodExpired:
                return "DrainReason_GracePeriodExpired";
            case k.DrainReason_Unknown:
                return "DrainReason_Unknown"
        }
    }
    var l = b({
        DGWVER_GENESIS: 0,
        DGWVER_PREFIXED_APP_HEADERS: 1,
        DGWVER_HANDLES_DGW_DRAIN_FRAME: 2,
        DGWVER_HANDLES_DGW_DEAUTH_FRAME: 3,
        DGWVER_HANDLES_STREAMGROUPS: 4,
        DGWVER_BIG_IDS: 5
    });

    function c(a) {
        switch (a) {
            case l.DGWVER_GENESIS:
                return "DGWVER_GENESIS";
            case l.DGWVER_PREFIXED_APP_HEADERS:
                return "DGWVER_PREFIXED_APP_HEADERS";
            case l.DGWVER_HANDLES_DGW_DRAIN_FRAME:
                return "DGWVER_HANDLES_DGW_DRAIN_FRAME";
            case l.DGWVER_HANDLES_DGW_DEAUTH_FRAME:
                return "DGWVER_HANDLES_DGW_DEAUTH_FRAME";
            case l.DGWVER_HANDLES_STREAMGROUPS:
                return "DGWVER_HANDLES_STREAMGROUPS";
            case l.DGWVER_BIG_IDS:
                return "DGWVER_BIG_IDS"
        }
    }
    var m = b({
        DgwCodecReturnCode_Success: 0,
        DgwCodecReturnCode_Failure: 1,
        DgwCodecReturnCode_NotEnoughData: 2,
        DgwCodecReturnCode_OutOfMemory: 3,
        DgwCodecReturnCode_AckIdOutOfBounds: 4,
        DgwCodecReturnCode_InvalidParameter: 5,
        DgwCodecReturnCode_InvalidFrameType: 6,
        DgwCodecReturnCode_InvalidAckFrameLength: 7,
        DgwCodecReturnCode_InvalidDrainReason: 8,
        DgwCodecReturnCode_InvalidDataFrameLength: 9,
        DgwCodecReturnCode_InvalidDrainFrameLength: 10
    });

    function d(a) {
        switch (a) {
            case m.DgwCodecReturnCode_Success:
                return "DgwCodecReturnCode_Success";
            case m.DgwCodecReturnCode_Failure:
                return "DgwCodecReturnCode_Failure";
            case m.DgwCodecReturnCode_NotEnoughData:
                return "DgwCodecReturnCode_NotEnoughData";
            case m.DgwCodecReturnCode_OutOfMemory:
                return "DgwCodecReturnCode_OutOfMemory";
            case m.DgwCodecReturnCode_AckIdOutOfBounds:
                return "DgwCodecReturnCode_AckIdOutOfBounds";
            case m.DgwCodecReturnCode_InvalidParameter:
                return "DgwCodecReturnCode_InvalidParameter";
            case m.DgwCodecReturnCode_InvalidFrameType:
                return "DgwCodecReturnCode_InvalidFrameType";
            case m.DgwCodecReturnCode_InvalidAckFrameLength:
                return "DgwCodecReturnCode_InvalidAckFrameLength";
            case m.DgwCodecReturnCode_InvalidDrainReason:
                return "DgwCodecReturnCode_InvalidDrainReason";
            case m.DgwCodecReturnCode_InvalidDataFrameLength:
                return "DgwCodecReturnCode_InvalidDataFrameLength";
            case m.DgwCodecReturnCode_InvalidDrainFrameLength:
                return "DgwCodecReturnCode_InvalidDrainFrameLength"
        }
    }
    var n = b({
        DgwFrameType_Data: 0,
        DgwFrameType_SmallAck: 1,
        DgwFrameType_Empty: 2,
        DgwFrameType_Drain: 3,
        DgwFrameType_Deauth: 4,
        DgwFrameType_StreamGroup_DeprecatedEstabStream: 5,
        DgwFrameType_StreamGroup_DeprecatedData: 6,
        DgwFrameType_StreamGroup_SmallAck: 7,
        DgwFrameType_StreamGroup_DeprecatedEndOfData: 8,
        DgwFrameType_Ping: 9,
        DgwFrameType_Pong: 10,
        DgwFrameType_StreamGroup_Ack: 12,
        DgwFrameType_StreamGroup_Data: 13,
        DgwFrameType_StreamGroup_EndOfData: 14,
        DgwFrameType_StreamGroup_EstabStream: 15
    });

    function e(a) {
        switch (a) {
            case n.DgwFrameType_Data:
                return "DgwFrameType_Data";
            case n.DgwFrameType_SmallAck:
                return "DgwFrameType_SmallAck";
            case n.DgwFrameType_Empty:
                return "DgwFrameType_Empty";
            case n.DgwFrameType_Drain:
                return "DgwFrameType_Drain";
            case n.DgwFrameType_Deauth:
                return "DgwFrameType_Deauth";
            case n.DgwFrameType_StreamGroup_DeprecatedEstabStream:
                return "DgwFrameType_StreamGroup_DeprecatedEstabStream";
            case n.DgwFrameType_StreamGroup_DeprecatedData:
                return "DgwFrameType_StreamGroup_DeprecatedData";
            case n.DgwFrameType_StreamGroup_SmallAck:
                return "DgwFrameType_StreamGroup_SmallAck";
            case n.DgwFrameType_StreamGroup_DeprecatedEndOfData:
                return "DgwFrameType_StreamGroup_DeprecatedEndOfData";
            case n.DgwFrameType_Ping:
                return "DgwFrameType_Ping";
            case n.DgwFrameType_Pong:
                return "DgwFrameType_Pong";
            case n.DgwFrameType_StreamGroup_Ack:
                return "DgwFrameType_StreamGroup_Ack";
            case n.DgwFrameType_StreamGroup_Data:
                return "DgwFrameType_StreamGroup_Data";
            case n.DgwFrameType_StreamGroup_EndOfData:
                return "DgwFrameType_StreamGroup_EndOfData";
            case n.DgwFrameType_StreamGroup_EstabStream:
                return "DgwFrameType_StreamGroup_EstabStream"
        }
    }
    b = {
        HEADER_APPID: "x-dgw-appid",
        HEADER_APPVERSION: "x-dgw-appversion",
        HEADER_AUTHTYPE: "x-dgw-authtype",
        HEADER_AUTHTOKEN: "Authorization",
        HEADER_DGW_VERSION: "x-dgw-version",
        HEADER_LOGGING_ID: "x-dgw-loggingid",
        HEADER_REGIONHINT: "x-dgw-regionhint",
        HEADER_TARGET_TIER: "x-dgw-tier",
        HEADER_UUID: "x-dgw-uuid",
        HEADER_ESTABLISH_STREAM_FRAME_BASE64: "x-dgw-establish-stream-frame-base64",
        kShadowHeader: "x-dgw-shadow",
        APPHEADER_PREFIX: "x-dgw-app-"
    };
    f.DEFAULT_ACK_TIMEOUT_MS = g;
    f.DEFAULT_SERVICE_TIER = h;
    f.MAX_ACK_ID = i;
    f.WebsocketCloseCodes = j;
    f.DrainReason = k;
    f.drainReasonToDrainReasonString = a;
    f.DgwVersion = l;
    f.dgwVersionToString = c;
    f.DgwCodecReturnCode = m;
    f.DgwCodecReturnCodeToString = d;
    f.DgwFrameType = n;
    f.frameTypeToString = e;
    f.HEADER_CONSTANTS = b
}), 66);
__d("DGWEnvUtil", ["CurrentUser", "DGWConstants", "URI", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = function() {
        function a() {
            this.$1 = "";
            this.$2 = "";
            if ((h || (h = c("URI"))).isValidURI(window.location.href)) {
                var a = new(h || (h = c("URI")))(window.location.href);
                a = a.getDomain();
                j(a) ? (this.$1 = "gateway.internalfb.com", this.$2 = "INTERNALFB") : k(a) ? (this.$1 = "gateway.workplace.com", this.$2 = "FACEBOOK") : n(a) ? (this.$1 = "gateway.facebookenterprise.com", this.$2 = "ENTERPRISEFB") : o(a) ? (this.$1 = "gateway.metaenterprise.com", this.$2 = "ENTERPRISEFB") : p(a) ? (this.$1 = "gateway.facebookrecruiting.com", this.$2 = "RECRUITINGFB") : r(a) ? (this.$1 = "gateway.instagram.com", this.$2 = "INSTAGRAM") : s(a) ? (this.$1 = "gateway.threads.net", this.$2 = "INSTAGRAM") : q(a) ? (this.$1 = "gateway.facebook.com", this.$2 = "FACEBOOK") : i(a) ? (this.$1 = "gateway.messenger.com", this.$2 = "FACEBOOK") : t(a) ? (this.$1 = "gateway.bulletin.com", this.$2 = "BULLETIN") : l(a) ? (this.$1 = "gateway.work.meta.com", this.$2 = "FACEBOOK") : m(a) ? (this.$1 = "gateway.horizon.meta.com", this.$2 = "HORIZON_WEB") : u(a) && (this.$1 = "gateway.spark.meta.com", this.$2 = "SPARK_WEB");
                a = new h().setDomain(this.$1).setProtocol("wss").setPath("/ws");
                this.$1 = a.toString()
            }
        }
        var b = a.prototype;
        b.isDGWEnvCompatible = function() {
            return this.$1.length !== 0 && this.$2.length !== 0
        };
        b.getDGWEndpoint = function() {
            return this.$1
        };
        b.getDGWAuthType = function() {
            return this.$2
        };
        b.getDGWVersion = function() {
            return d("DGWConstants").DgwVersion.DGWVER_BIG_IDS
        };
        return a
    }();

    function i(a) {
        return a.includes("messenger.com")
    }

    function j(a) {
        return a.includes("internalfb.com")
    }

    function k(a) {
        return a.includes("workplace.com")
    }

    function l(a) {
        return a.includes("work.meta.com")
    }

    function m(a) {
        return a.includes("horizon.meta.com")
    }

    function n(a) {
        return a.includes("facebookenterprise.com")
    }

    function o(a) {
        return a.includes("metaenterprise.com")
    }

    function p(a) {
        return a.includes("facebookrecruiting.com")
    }

    function q(a) {
        return a.includes("facebook.com")
    }

    function r(a) {
        return a.includes("instagram.com") && c("gkx")("7647")
    }

    function s(a) {
        return a.includes("threads.net") && c("CurrentUser").isLoggedIn()
    }

    function t(a) {
        return a.includes("bulletin.com")
    }

    function u(a) {
        return a.includes("spark.meta.com")
    }
    b = new a();
    g["default"] = b
}), 98);
__d("DGWRequestStreamDeferredClient", ["Promise", "nullthrows", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = function() {
        function a() {
            this.$1 = null
        }
        var d = a.prototype;
        d.createStream = function(a, b, d, e, f) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(c) {
                return c.createStream(a, b, d, e, f)
            })
        };
        d.$2 = function() {
            this.$1 == null && (this.$1 = new(h || (h = b("Promise")))(function(a) {
                c("requireDeferred")("DGWRequestStreamClient").__setRef("DGWRequestStreamDeferredClient").onReady(function(b) {
                    a(new b())
                })
            }))
        };
        return a
    }();
    d = new a();
    g["default"] = d
}), 98);
__d("EmptyStream", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = {
        amendWithoutAck: function(a) {},
        amendWithAck: function(a) {
            return new(g || (g = b("Promise")))(function() {
                return !1
            })
        },
        cancel: function() {},
        start: function() {
            return new(g || (g = b("Promise")))(function() {
                return null
            })
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("RequestStreamCommonRequestStreamCommonTypes", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    c = (a = b("$InternalEnum"))({
        Accepted: 1,
        Started: 2,
        Stopped: 3
    });
    d = a({
        Rejected: 40,
        Error: 50,
        TryAgain: 80,
        Closed: 99
    });
    f = a({
        BestEffort: 0,
        Socket: 10,
        Device: 20
    });
    b = a({
        Flow_status: "flow_status",
        Log: "log",
        Rewrite: "rewrite",
        Data: "data",
        Termination: "termination",
        Amend_ack: "amend_ack"
    });
    e.exports = {
        AckLevel: f,
        FlowStatus: c,
        StreamResponseDelta$Types: b,
        TerminationReason: d
    }
}), null);
__d("MQTTRequestStreamUtils", ["BladeRunnerStreamHandler", "BladeRunnerStreamStatus", "RequestStreamCommonRequestStreamCommonTypes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "Stream closed",
        i = "Stream rejected";

    function a(a) {
        var b = function(b) {
            switch (b) {
                case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
                    a.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
                    a.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
                    a.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
                    a.onTermination(h);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
                    a.onTermination(i);
                    break
            }
        };
        return new(c("BladeRunnerStreamHandler"))(function(b) {
            return a.onData(b)
        }, null, b, function(b) {
            return a.onLog(b)
        }, null, function() {
            return a.onRetryUpdateRequestBody()
        })
    }
    g.TERMINATION_REASON_CLOSED = h;
    g.TERMINATION_REASON_REJECTED = i;
    g.convertToBRHandler = a
}), 98);
__d("TransportSelectingClientCCResolver", ["Promise", "TransportSelectingClientContextualConfig", "nullthrows", "regeneratorRuntime", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        function a() {
            this.$1 = null
        }
        var d = a.prototype;
        d.getCCGroupName = function(a) {
            var d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        this.$2();
                        f.next = 3;
                        return b("regeneratorRuntime").awrap(c("nullthrows")(this.$1));
                    case 3:
                        d = f.sent;
                        e = new d(JSON.parse(c("TransportSelectingClientContextualConfig").rawConfig)).resolve({
                            method: a
                        });
                        return f.abrupt("return", e.get("group", "default_group"));
                    case 6:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        d.getCCDGWUpsampleMultiplier = function(a) {
            var d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        this.$2();
                        f.next = 3;
                        return b("regeneratorRuntime").awrap(c("nullthrows")(this.$1));
                    case 3:
                        d = f.sent;
                        e = new d(JSON.parse(c("TransportSelectingClientContextualConfig").rawConfig)).resolve({
                            method: a
                        });
                        return f.abrupt("return", e.get("dgwUpsampleMultiplier", 1));
                    case 6:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        d.$2 = function() {
            this.$1 == null && (this.$1 = new(h || (h = b("Promise")))(function(a) {
                c("requireDeferred")("ContextualConfig").__setRef("TransportSelectingClientCCResolver").onReady(function(b) {
                    a(b)
                })
            }))
        };
        return a
    }();
    d = new a();
    g["default"] = d
}), 98);
__d("TransportSelectingClientUtils", ["BladeRunnerInstrumentedStreamHandler", "DGWEnvUtil", "MQTTRequestStreamUtils", "TransportSelectingClientCCResolver", "gkx", "justknobx", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        a = d("MQTTRequestStreamUtils").convertToBRHandler(a);
        if (b.startsWith("FBGQLS") || b.startsWith("SKY")) return new(c("BladeRunnerInstrumentedStreamHandler"))(a, b);
        else return a
    }

    function e(a) {
        var b = !1;
        switch (a) {
            case "group1":
                b = c("gkx")("227");
                break;
            case "group2":
                b = c("gkx")("229");
                break;
            case "group3":
                b = c("gkx")("231");
                break;
            case "group4":
                b = c("gkx")("233");
                break;
            case "group5":
                b = c("gkx")("235");
                break;
            case "group6":
                b = c("gkx")("2254");
                break
        }
        return b
    }

    function h(a) {
        var b = !1;
        switch (a) {
            case "skywalker":
                b = c("gkx")("2030");
                break;
            case "skywalker_experiment1":
                b = c("gkx")("2448");
                break;
            case "skywalker_experiment2":
                b = c("gkx")("2458");
                break;
            case "skywalker_bulletin":
                b = c("justknobx")._("494");
                break
        }
        return b
    }

    function i(a) {
        if (a != null) {
            var b = a.lastIndexOf("/");
            b = b > 0 ? a.substr(0, b) : a;
            return b
        }
    }

    function f(a) {
        var d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    d = i(a);
                    if (!(d != null)) {
                        f.next = 6;
                        break
                    }
                    f.next = 4;
                    return b("regeneratorRuntime").awrap(c("TransportSelectingClientCCResolver").getCCGroupName(d));
                case 4:
                    e = f.sent;
                    return f.abrupt("return", h(e) && c("DGWEnvUtil").isDGWEnvCompatible());
                case 6:
                    return f.abrupt("return", !1);
                case 7:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function j(a, b) {
        b = i(b);
        return a != null && a === "SKY" && b != null ? b : (b = a) != null ? b : "unknown"
    }
    g.BRHandlerConverter = a;
    g.isDGWStream = e;
    g.isDGWAllowedSKYTopic = h;
    g.getTopicPrefix = i;
    g.isDGWSupportedSKYTopic = f;
    g.getMethodContextForCC = j
}), 98);
__d("ThrottlingClient", ["EmptyStream", "Promise", "RtiWebRequestStreamClient", "TransportSelectingClientUtils"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        function a(a) {
            this.$2 = c("RtiWebRequestStreamClient").ThrottledMethods, this.$1 = a
        }
        var e = a.prototype;
        e.createStream = function(a, e, f, g, i) {
            var j = d("TransportSelectingClientUtils").getMethodContextForCC(a.method, a.topic);
            if (this.$2[j]) {
                g.onTermination("RequestStream method " + j + " has been throttled on this client");
                return (h || (h = b("Promise"))).resolve(c("EmptyStream"))
            }
            return this.$1.createStream(a, e, f, g, i)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("TransportSelectingClient", ["BladeRunnerDeferredClient", "DGWEnvUtil", "DGWRequestStreamDeferredClient", "RequestStreamHandler", "ThrottlingClient", "TransportSelectingClientUtils", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a() {
            this.$1 = null, c("DGWRequestStreamDeferredClient") != null && (this.$2 = new(c("ThrottlingClient"))(c("DGWRequestStreamDeferredClient")))
        }
        var e = a.prototype;
        e.requestStream = function(a, e, f, g) {
            var h, i, j, k, l;
            return b("regeneratorRuntime").async(function(m) {
                while (1) switch (m.prev = m.next) {
                    case 0:
                        i = new(c("RequestStreamHandler"))(f);
                        j = this.$2;
                        if (!(j != null && c("DGWEnvUtil").isDGWEnvCompatible())) {
                            m.next = 9;
                            break
                        }
                        m.next = 5;
                        return b("regeneratorRuntime").awrap(j.createStream(a, e, g, i, {}));
                    case 5:
                        k = m.sent;
                        m.next = 8;
                        return b("regeneratorRuntime").awrap(k.start());
                    case 8:
                        return m.abrupt("return", k);
                    case 9:
                        m.next = 11;
                        return b("regeneratorRuntime").awrap(c("BladeRunnerDeferredClient").requestStream(a, e, d("TransportSelectingClientUtils").BRHandlerConverter(i, (h = a.method) != null ? h : "unknown"), g));
                    case 11:
                        l = m.sent;
                        return m.abrupt("return", l);
                    case 13:
                    case "end":
                        return m.stop()
                }
            }, null, this)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("TransportSelectingClientSingleton", ["TransportSelectingClient"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = new(c("TransportSelectingClient"))();
    g["default"] = a
}), 98);
__d("getVendorPrefixedName", ["invariant", "ExecutionEnvironment", "UserAgent", "camelize"], (function(a, b, c, d, e, f, g, h) {
    var i, j = {},
        k = ["Webkit", "ms", "Moz", "O"],
        l = new RegExp("^(" + k.join("|") + ")"),
        m = (i || (i = c("ExecutionEnvironment"))).canUseDOM ? document.createElement("div").style : {};

    function n(a) {
        for (var b = 0; b < k.length; b++) {
            var c = k[b] + a;
            if (c in m) return c
        }
        return null
    }

    function o(a) {
        switch (a) {
            case "lineClamp":
                return c("UserAgent").isEngine("WebKit >= 315.14.2") ? "WebkitLineClamp" : null;
            default:
                return null
        }
    }

    function a(a) {
        var b = c("camelize")(a);
        if (j[b] === void 0) {
            var d = b.charAt(0).toUpperCase() + b.slice(1);
            l.test(d) && h(0, 957, a);
            (i || (i = c("ExecutionEnvironment"))).canUseDOM ? j[b] = b in m ? b : n(d) : j[b] = o(b)
        }
        return j[b]
    }
    g["default"] = a
}), 98);
__d("shield", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++) d[e - 2] = arguments[e];
        if (typeof a !== "function") throw new TypeError("shield expects a function as the first argument");
        return function() {
            return a.apply(b, d)
        }
    }
    f["default"] = a
}), 66);
__d("BrowserSupportCore", ["getVendorPrefixedName"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        hasCSSAnimations: function() {
            return !!b("getVendorPrefixedName")("animationName")
        },
        hasCSSTransforms: function() {
            return !!b("getVendorPrefixedName")("transform")
        },
        hasCSS3DTransforms: function() {
            return !!b("getVendorPrefixedName")("perspective")
        },
        hasCSSTransitions: function() {
            return !!b("getVendorPrefixedName")("transition")
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("isLinkshimURI", ["LinkshimHandlerConfig", "isBulletinDotComURI", "isFacebookURI", "isMessengerDotComURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = c("LinkshimHandlerConfig").linkshim_host.split(".");
    var h = b[b.length - 1];

    function a(a) {
        var b = a.getPath();
        if ((b === "/l.php" || b.indexOf("/si/ajax/l/") === 0 || b.indexOf("/l/") === 0 || b.indexOf("l/") === 0) && (c("isFacebookURI")(a) || c("isMessengerDotComURI")(a) || c("isBulletinDotComURI")(a))) return !0;
        if (b === c("LinkshimHandlerConfig").linkshim_path && a.isSubdomainOfDomain(h)) {
            b = a.getQueryData();
            if (b[c("LinkshimHandlerConfig").linkshim_enc_param] != null && b[c("LinkshimHandlerConfig").linkshim_url_param] != null) return !0
        }
        return !1
    }
    g["default"] = a
}), 98);
__d("LogHistory", [], (function(a, b, c, d, e, f) {
    var g = 500,
        h = {},
        i = [];

    function j(a, b, c, d) {
        var e = d[0];
        if (typeof e !== "string" || d.length !== 1) return;
        i.push({
            date: Date.now(),
            level: a,
            category: b,
            event: c,
            args: e
        });
        i.length > g && i.shift()
    }
    var k = function() {
        function a(a) {
            this.category = a
        }
        var b = a.prototype;
        b.debug = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("debug", this.category, a, c);
            return this
        };
        b.log = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("log", this.category, a, c);
            return this
        };
        b.warn = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("warn", this.category, a, c);
            return this
        };
        b.error = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("error", this.category, a, c);
            return this
        };
        return a
    }();

    function a(a) {
        h[a] || (h[a] = new k(a));
        return h[a]
    }

    function b() {
        return i
    }

    function c() {
        i.length = 0
    }

    function d(a) {
        return a.map(function(a) {
            var b = new Date(a.date).toISOString();
            return [b, a.level, a.category, a.event, a.args].join(" | ")
        }).join("\n")
    }
    f.getInstance = a;
    f.getEntries = b;
    f.clearEntries = c;
    f.formatEntries = d
}), 66);
__d("generateLiteTypedLogger", ["Banzai", "JstlMigrationFalcoEvent", "getDataWithLoggerOptions"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b, d) {
        var e = a.split(":")[0],
            f = a.split(":")[1];
        e == "logger" ? c("JstlMigrationFalcoEvent").log(function() {
            return {
                logger_config_name: f,
                payload: b
            }
        }) : c("Banzai").post(a, b, d)
    }

    function a(a) {
        return {
            log: function(b, d) {
                h(a, c("getDataWithLoggerOptions")(b, d), c("Banzai").BASIC)
            },
            logVital: function(b, d) {
                h(a, c("getDataWithLoggerOptions")(b, d), c("Banzai").VITAL)
            },
            logImmediately: function(b, d) {
                h(a, c("getDataWithLoggerOptions")(b, d), {
                    signal: !0
                })
            }
        }
    }
    g["default"] = a
}), 98);
__d("BrowserSupport", ["BrowserSupportCore", "ExecutionEnvironment", "UserAgent_DEPRECATED", "getVendorPrefixedName", "memoize"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k = null;

    function l() {
        if ((j || (j = c("ExecutionEnvironment"))).canUseDOM) {
            k || (k = document.createElement("div"));
            return k
        }
        return null
    }
    b = function(a) {
        return c("memoize")(function() {
            var b = l();
            return !b ? !1 : a(b)
        })
    };
    e = b(function(a) {
        a.style.cssText = "position:-moz-sticky;position:-webkit-sticky;position:-o-sticky;position:-ms-sticky;position:sticky;";
        return /sticky/.test(a.style.position)
    });
    f = b(function(a) {
        return "scrollSnapType" in a.style || "webkitScrollSnapType" in a.style || "msScrollSnapType" in a.style
    });
    var m = b(function(a) {
        return "scrollBehavior" in a.style
    });
    b = b(function(a) {
        if (!("pointerEvents" in a.style)) return !1;
        a.style.cssText = "pointer-events:auto";
        return a.style.pointerEvents === "auto"
    });
    var n = (h = c("memoize"))(function() {
            return !(d("UserAgent_DEPRECATED").webkit() && !d("UserAgent_DEPRECATED").chrome() && d("UserAgent_DEPRECATED").windows()) && "FileList" in window && "FormData" in window
        }),
        o = h(function() {
            return !!a.blob
        }),
        p = h(function() {
            return (j || (j = c("ExecutionEnvironment"))).canUseDOM && document.createElementNS && document.createElementNS("http://www.w3.org/2000/svg", "foreignObject").toString().includes("SVGForeignObject")
        }),
        q = h(function() {
            return !!window.MutationObserver
        });
    h = h(function() {
        var a = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "mozTransitionEnd",
                OTransition: "oTransitionEnd"
            },
            b = c("getVendorPrefixedName")("transition");
        return a[b] || null
    });
    var r = function() {
        return !!window.CanvasRenderingContext2D
    };
    g.hasCSSAnimations = (i = c("BrowserSupportCore")).hasCSSAnimations;
    g.hasCSSTransforms = i.hasCSSTransforms;
    g.hasCSS3DTransforms = i.hasCSS3DTransforms;
    g.hasCSSTransitions = i.hasCSSTransitions;
    g.hasPositionSticky = e;
    g.hasScrollSnapPoints = f;
    g.hasScrollBehavior = m;
    g.hasPointerEvents = b;
    g.hasFileAPI = n;
    g.hasBlobFactory = o;
    g.hasSVGForeignObject = p;
    g.hasMutationObserver = q;
    g.getTransitionEndEvent = h;
    g.hasCanvasRenderingContext2D = r
}), 98);
__d("ReactDOMComet", ["cr:1108857", "cr:1294159", "cr:734", "qex"], (function(a, b, c, d, e, f, g) {
    e = b("cr:734") ? b("cr:734")(b("cr:1294159").createPortal) : b("cr:1294159").createPortal;

    function a(a, d) {
        return b("cr:1294159").createRoot(a, babelHelpers["extends"]({}, d, {
            unstable_concurrentUpdatesByDefault: c("qex")._("723") ? !1 : (a = d == null ? void 0 : d.unstable_concurrentUpdatesByDefault) != null ? a : !1
        }))
    }

    function d(a, d, e) {
        return b("cr:1294159").hydrateRoot(a, d, babelHelpers["extends"]({
            onRecoverableError: function(a) {
                if (a != null && typeof a.message === "string") {
                    var b = a.message;
                    if (b.indexOf("The server could not finish this Suspense boundary") !== -1 || b.indexOf("Minified React error #419;") !== -1 || b.indexOf("This Suspense boundary received an update") !== -1 || b.indexOf("Minified React error #421;") !== -1) return
                }
                typeof reportError === "function" && reportError(a)
            }
        }, e, {
            unstable_concurrentUpdatesByDefault: c("qex")._("723") ? !1 : (a = e == null ? void 0 : e.unstable_concurrentUpdatesByDefault) != null ? a : !1
        }))
    }
    g.createPortal = e;
    g.unstable_batchedUpdates = b("cr:1294159").unstable_batchedUpdates;
    g.flushSync = b("cr:1294159").flushSync;
    g.createRoot = a;
    g.hydrateRoot = d;
    g.unstable_createEventHandle = b("cr:1294159").unstable_createEventHandle;
    g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b("cr:1294159").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    g.version = b("cr:1294159").version
}), 98);
__d("ReactDOMCompatibilityLayer", ["ReactDOMComet"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof WeakMap === "function" ? new WeakMap() : new Map();

    function a(a, b, c) {
        var e = h.get(b);
        e == null && (e = d("ReactDOMComet").createRoot(b), h.set(b, e));
        c = null;
        var f = a.ref;
        d("ReactDOMComet").flushSync(function() {
            var b;
            return (b = e) == null ? void 0 : b.render(typeof a.type === "string" || ((b = a.type) == null ? void 0 : (b = b.prototype) == null ? void 0 : b.isReactComponent) ? babelHelpers["extends"]({}, a, {
                ref: function(a) {
                    typeof f === "function" ? f(a) : f != null && (f.current = a), c = a
                }
            }) : a)
        });
        return c
    }

    function b(a) {
        if (a == null) return !1;
        var b = h.get(a);
        if (b) {
            b.unmount();
            h["delete"](a);
            return !0
        }
        return !1
    }
    g.render = a;
    g.unmountComponentAtNode = b
}), 98);
__d("ReactLegacyShim_DEPRECATED", ["ReactDOMCompatibilityLayer"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        return d("ReactDOMCompatibilityLayer").render(a, b)
    }
    g.render = a
}), 98);
__d("ReactDOM", ["React18DOMRenderDenylistSitevarConfig", "ReactLegacyShim_DEPRECATED", "cr:4865", "err", "gkx"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k, l, m;

    function n() {
        var a = c("err")("This React API is not implemented in this environment. Use ReactDOMComet instead.");
        throw a
    }

    function o() {
        var a = c("err")("This React API is not implemented in this environment. Use ReactDOMLegacy_DEPRECATED instead.");
        throw a
    }

    function p(a, e, f, g) {
        return b("cr:4865").render ? g() && f != null && c("React18DOMRenderDenylistSitevarConfig").denylist.has(f) === !1 ? d("ReactLegacyShim_DEPRECATED").render(a, e) : b("cr:4865").render(a, e, f) : o
    }

    function a(a, b, d) {
        return p(a, b, d, function() {
            return c("gkx")("10588")
        })
    }

    function e(a, b, d) {
        return p(a, b, d, function() {
            return c("gkx")("5658")
        })
    }
    f = (f = b("cr:4865").createRoot) != null ? f : function() {
        return n()
    };
    h = (h = b("cr:4865").hydrateRoot) != null ? h : function() {
        return n()
    };
    i = (i = b("cr:4865").unstable_createEventHandleInternal) != null ? i : function() {
        return n()
    };
    j = (j = b("cr:4865").findDOMNode) != null ? j : function() {
        return o()
    };
    a = a;
    k = (k = b("cr:4865").render) != null ? k : function() {
        return o()
    };
    e = e;
    l = (l = b("cr:4865").unmountComponentAtNode) != null ? l : function() {
        return o()
    };
    m = (m = b("cr:4865").unstable_renderSubtreeIntoContainer) != null ? m : function() {
        return o()
    };
    g.createRoot = f;
    g.hydrateRoot = h;
    g.unstable_createEventHandle = i;
    g.findDOMNode = j;
    g.render = a;
    g.legacyRender_DEPRECATED = k;
    g.renderForAds = e;
    g.unmountComponentAtNode = l;
    g.unstable_renderSubtreeIntoContainer = m;
    g.createPortal = b("cr:4865").createPortal;
    g.flushSync = b("cr:4865").flushSync;
    g.unstable_batchedUpdates = b("cr:4865").unstable_batchedUpdates;
    g.version = b("cr:4865").version;
    g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b("cr:4865").__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
}), 98);
__d("XHRHttpError", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "HTTP_CLIENT_ERROR",
        h = "HTTP_PROXY_ERROR",
        i = "HTTP_SERVER_ERROR",
        j = "HTTP_TRANSPORT_ERROR",
        k = "HTTP_UNKNOWN_ERROR";

    function a(a, b) {
        if (b === 0) {
            a = a.getProtocol();
            return a === "file" || a === "ftp" ? null : j
        } else if (b >= 100 && b < 200) return h;
        else if (b >= 200 && b < 300) return null;
        else if (b >= 400 && b < 500) return g;
        else if (b >= 500 && b < 600) return i;
        else if (b >= 12001 && b < 12156) return j;
        else return k
    }
    f.HTTP_CLIENT_ERROR = g;
    f.HTTP_PROXY_ERROR = h;
    f.HTTP_SERVER_ERROR = i;
    f.HTTP_TRANSPORT_ERROR = j;
    f.HTTP_UNKNOWN_ERROR = k;
    f.getErrorCode = a
}), 66);
__d("xhrSimpleDataSerializer", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = [];
        for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }
    f["default"] = a
}), 66);
__d("XHRRequest", ["invariant", "DTSG", "DTSGUtils", "DTSG_ASYNC", "Env", "ErrorGuard", "FBLogger", "LSD", "Log", "NetworkStatus", "ResourceTimingsStore", "ResourceTypes", "SprinkleConfig", "TimeSlice", "URI", "XHRHttpError", "ZeroRewrites", "fb-error", "getAsyncHeaders", "xhrSimpleDataSerializer"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k = b("fb-error").ErrorXFBDebug,
        l = !1,
        m = {
            loadedBytes: 0,
            totalBytes: 0
        };

    function n(a) {
        return b("ZeroRewrites").rewriteURI(new(h || (h = b("URI")))(a))
    }
    a = function() {
        "use strict";

        function a(a) {
            this.$3 = function() {
                return null
            }, this.$19 = n(a), this.$7 = "POST", this.$6 = {}, this.setResponseType(null), this.setTransportBuilder(b("ZeroRewrites").getTransportBuilderForURI(this.getURI())), this.setDataSerializer(b("xhrSimpleDataSerializer")), this.$11 = b("ResourceTimingsStore").getUID(b("ResourceTypes").XHR, a != null ? a.toString() : "")
        }
        var c = a.prototype;
        c.setURI = function(a) {
            this.$19 = n(a);
            return this
        };
        c.getURI = function() {
            return this.$19
        };
        c.setResponseType = function(a) {
            this.$13 = a;
            return this
        };
        c.setMethod = function(a) {
            this.$7 = a;
            return this
        };
        c.getMethod = function() {
            return this.$7
        };
        c.setData = function(a) {
            this.$2 = a;
            return this
        };
        c.getData = function() {
            return this.$2
        };
        c.setRawData = function(a) {
            this.$10 = a;
            return this
        };
        c.setRequestHeader = function(a, b) {
            this.$6[a] = b;
            return this
        };
        c.setTimeout = function(a) {
            this.$14 = a;
            return this
        };
        c.getTimeout = function() {
            return this.$14
        };
        c.setResponseHandler = function(a) {
            this.$12 = a;
            return this
        };
        c.getResponseHandler = function() {
            return this.$12
        };
        c.setErrorHandler = function(a) {
            this.$5 = a;
            return this
        };
        c.getErrorHandler = function() {
            return this.$5
        };
        c.setNetworkFailureHandler = function(a) {
            this.$8 = a;
            return this
        };
        c.getNetworkFailureHandler = function() {
            return this.$8
        };
        c.getResponseHeader = function(a) {
            var b = this.$9;
            return b ? b.getResponseHeader(a) : null
        };
        c.setAbortHandler = function(a) {
            this.$1 = a;
            return this
        };
        c.getAbortHandler = function() {
            return this.$1
        };
        c.setTimeoutHandler = function(a) {
            this.$15 = a;
            return this
        };
        c.getTimeoutHandler = function() {
            return this.$15
        };
        c.setUploadProgressHandler = function(a) {
            this.$18 = a;
            return this
        };
        c.setDownloadProgressHandler = function(a) {
            this.$4 = a;
            return this
        };
        c.setTransportBuilder = function(a) {
            !this.$17 || !b("ZeroRewrites").isRewritten(this.$19) ? this.$17 = a : b("FBLogger")("iorg-FOS").blameToPreviousFile().mustfix("can not set new TransportBuilder for the request %s", String(this.getURI()));
            return this
        };
        c.setDataSerializer = function(a) {
            this.$3 = a;
            return this
        };
        c.setWithCredentials = function(a) {
            this.$20 = a;
            return this
        };
        c.send = function() {
            var a = this.$14,
                c = this.$17;
            if (!c) return;
            var d = c();
            c = this.getURI();
            if (c.toString().includes("/../") || c.toString().includes("/..\\") || c.toString().includes("\\../") || c.toString().includes("\\..\\")) {
                b("Log").error("XHRRequest.send(): path traversal is not allowed.");
                return !1
            }
            if (l === !0) return;
            var e = new(h || (h = b("URI")))(c).getQualifiedURI().toString(),
                f = this.$11;
            b("ResourceTimingsStore").updateURI(b("ResourceTypes").XHR, f, e);
            b("ResourceTimingsStore").measureRequestSent(b("ResourceTypes").XHR, f);
            this.$9 = d;
            this.$7 === "POST" || !this.$10 || g(0, 2346, this.$10, c);
            e = (i || (i = b("Env"))).force_param;
            e && (this.$2 = babelHelpers["extends"]({}, this.getData() || {}, e));
            if (this.$7 === "GET" && b("DTSGUtils").shouldAppendToken(c)) {
                e = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
                e && (this.$2 ? this.$2.fb_dtsg_ag = e : this.$2 = {
                    fb_dtsg_ag: e
                }, b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)))
            }
            if (this.$7 === "POST" && b("DTSGUtils").shouldAppendToken(c)) {
                e = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
                e && (this.$2 ? this.$2.fb_dtsg = e : this.$2 = {
                    fb_dtsg: e
                }, b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)));
                b("LSD").token && (this.$2 ? this.$2.lsd = b("LSD").token : this.$2 = {
                    lsd: b("LSD").token
                }, b("SprinkleConfig").param_name && !e && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            this.$7 === "GET" || this.$10 ? (c.addQueryData(this.$2), e = this.$10) : e = this.$3(this.$2);

            function j(a) {
                b("ResourceTimingsStore").measureResponseReceived(b("ResourceTypes").XHR, f);
                for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
                a.apply(this, d)
            }
            j = b("TimeSlice").guard(j, "XHRRequest response received", {
                propagationType: b("TimeSlice").PropagationType.CONTINUATION
            });
            d.onreadystatechange = this.$21(j);
            d.onerror = this.$22(j);
            d.upload && this.$18 && (d.upload.onprogress = this.$23.bind(this));
            this.$4 && (d.onprogress = this.$24.bind(this));
            a && (this.$16 = setTimeout(this.$25.bind(this), a));
            this.$20 != null && (d.withCredentials = this.$20);
            d.open(this.$7, c.toString(), !0);
            j = !1;
            if (this.$6)
                for (a in this.$6) a.toLowerCase() === "content-type" && (j = !0), d.setRequestHeader(a, this.$6[a]);
            this.$7 == "POST" && !this.$10 && !j && d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var k = b("getAsyncHeaders")(c);
            Object.keys(k).forEach(function(a) {
                d.setRequestHeader(a, k[a])
            });
            this.$13 === "arraybuffer" && ("responseType" in d ? d.responseType = "arraybuffer" : "overrideMimeType" in d ? d.overrideMimeType("text/plain; charset=x-user-defined") : "setRequestHeader" in d && d.setRequestHeader("Accept-Charset", "x-user-defined"));
            this.$13 === "blob" && (d.responseType = this.$13);
            d.send(e)
        };
        c.abort = function(a) {
            this.$26(), this.$1 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$1, null, [a], {
                name: "XHRRequest:_abortHandler"
            })
        };
        c.$26 = function() {
            var a = this.$9;
            a && (a.onreadystatechange = null, a.abort());
            this.$27()
        };
        c.$25 = function() {
            this.$26(), this.$15 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$15, null, [], {
                name: "XHRRequest:_abortHandler"
            })
        };
        c.$28 = function(a) {
            if (this.$13)
                if ("response" in a) return a.response;
                else if (this.$13 === "arraybuffer" && window.VBArray) return window.VBArray(a.responseBody).toArray();
            return a.responseText
        };
        c.$22 = function(a) {
            var c = this,
                d = this.$9;
            return function() {
                var e;
                e = {
                    errorCode: b("XHRHttpError").HTTP_TRANSPORT_ERROR,
                    errorMsg: "Network Failure.",
                    errorType: "Network",
                    errorRawResponseHeaders: null,
                    errorRawTransport: d == null ? void 0 : (e = d.constructor) == null ? void 0 : e.name,
                    errorRawTransportStatus: 0
                };
                c.$8 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$8), null, [e], {
                    name: "XHRRequest:_networkFailureHandler"
                }) : a(function() {});
                b("NetworkStatus").reportError()
            }
        };
        c.$21 = function(a) {
            var c = this,
                d = b("TimeSlice").guard(function(a) {
                    for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                    return a.apply(this, c)
                }, "XHRRequest onreadystatechange", {
                    propagationType: b("TimeSlice").PropagationType.EXECUTION
                });
            return function() {
                var e = c.$9;
                if (e == null) return;
                var f = e.readyState;
                if (f >= 2) {
                    var g = f === 4;
                    g && k.addFromXHR(e);
                    var h = c.getURI();
                    h = b("XHRHttpError").getErrorCode(h, e.status);
                    var i = c.$12;
                    if (h != null) {
                        if (g) {
                            var l = {
                                errorCode: h,
                                errorMsg: c.$28(e),
                                errorRawTransport: e.constructor.name,
                                errorRawTransportStatus: e.status,
                                errorRawResponseHeaders: i && i.includeHeaders ? e.getAllResponseHeaders() : null,
                                errorType: e.status ? "HTTP " + e.status : "HTTP"
                            };
                            c.$5 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$5), null, [l], {
                                name: "XHRRequest:_errorHandler"
                            }) : a(function() {})
                        }
                    } else if (i) {
                        if (g || i.parseStreaming && f === 3) {
                            l = g ? a : d;
                            f = (i == null ? void 0 : i.includeHeaders) ? e.getAllResponseHeaders() : null;
                            (j || (j = b("ErrorGuard"))).applyWithGuard(l.bind(void 0, i), null, [c.$28(e), f, g], {
                                name: "XHRRequest:handler"
                            })
                        }
                    } else g && a(function() {});
                    g && (h != "HTTP_TRANSPORT_ERROR" && b("NetworkStatus").reportSuccess(), c.$27())
                }
            }
        };
        c.$23 = function(a) {
            m.loadedBytes = a.loaded, m.totalBytes = a.total, this.$18 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$18, null, [m], {
                name: "XHRRequest:_uploadProgressHandler"
            })
        };
        c.$24 = function(a) {
            a = {
                loadedBytes: a.loaded,
                totalBytes: a.total
            };
            this.$4 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$4, null, [a], {
                name: "XHRRequest:_downloadProgressHandler"
            })
        };
        c.$27 = function() {
            clearTimeout(this.$16), delete this.$9
        };
        a.disable = function() {
            l = !0
        };
        return a
    }();
    e.exports = a
}), null);
__d("ChannelClientID", ["MqttWebDeviceID", "gkx", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("3400") ? c("uuidv4")() : (a = c("MqttWebDeviceID") == null ? void 0 : c("MqttWebDeviceID").clientID) != null ? a : c("uuidv4")();
    b = {
        getID: function() {
            return h
        }
    };
    f.exports = b
}), 34);
__d("SubscriptionsHandler", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function i(a) {
        return a.remove || a.reset || a.unsubscribe || a.cancel || a.dispose
    }

    function j(a) {
        i(a).call(a)
    }
    a = function() {
        function a() {
            this.$1 = []
        }
        var b = a.prototype;
        b.addSubscriptions = function() {
            for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++) b[c] = arguments[c];
            b.every(i) || h(0, 3659);
            this.$1 != null ? this.$1 = this.$1.concat(b) : b.forEach(j)
        };
        b.engage = function() {
            this.$1 == null && (this.$1 = [])
        };
        b.release = function() {
            this.$1 != null && (this.$1.forEach(j), this.$1 = null)
        };
        b.releaseOne = function(a) {
            var b = this.$1;
            if (b == null) return;
            var c = b.indexOf(a);
            c !== -1 && (j(a), b.splice(c, 1), b.length === 0 && (this.$1 = null))
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("Base64", [], (function(a, b, c, d, e, f) {
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function h(a) {
        a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
        return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63))
    }
    var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";

    function j(a) {
        a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
        return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255)
    }
    var k = {
        encode: function(a) {
            a = unescape(encodeURI(a));
            var b = (a.length + 2) % 3;
            a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
            return a.slice(0, a.length + b - 2) + "==".slice(b)
        },
        decode: function(a) {
            a = a.replace(/[^A-Za-z0-9+\/]/g, "");
            var b = a.length + 3 & 3;
            a = (a + "AAA".slice(b)).replace(/..../g, j);
            a = a.slice(0, a.length + b - 3);
            try {
                return decodeURIComponent(escape(a))
            } catch (a) {
                throw new Error("Not valid UTF-8")
            }
        },
        encodeObject: function(a) {
            return k.encode(JSON.stringify(a))
        },
        decodeObject: function(a) {
            return JSON.parse(k.decode(a))
        },
        encodeNums: function(a) {
            return String.fromCharCode.apply(String, a.map(function(a) {
                return g.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63)
            }))
        }
    };
    a = k;
    f["default"] = a
}), 66);
__d("CometLruCache", ["recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        function a(a) {
            this.$1 = a, a <= 0 && c("recoverableViolation")("CometLruCache: Unable to create instance of cache with zero or negative capacity.", "CometLruCache"), this.$2 = new Map()
        }
        var b = a.prototype;
        b.set = function(a, b) {
            this.$2["delete"](a);
            this.$2.set(a, b);
            if (this.$2.size > this.$1) {
                a = this.$2.keys().next();
                a.done || this.$2["delete"](a.value)
            }
        };
        b.get = function(a) {
            var b = this.$2.get(a);
            b != null && (this.$2["delete"](a), this.$2.set(a, b));
            return b
        };
        b.has = function(a) {
            return this.$2.has(a)
        };
        b["delete"] = function(a) {
            this.$2["delete"](a)
        };
        b.size = function() {
            return this.$2.size
        };
        b.capacity = function() {
            return this.$1 - this.$2.size
        };
        b.clear = function() {
            this.$2.clear()
        };
        return a
    }();

    function a(a) {
        return new h(a)
    }
    g.create = a
}), 98);
__d("structuredClone", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = (a = window) == null ? void 0 : a.structuredClone;
    f["default"] = b
}), 66);
__d("ConstUriUtils", ["CometLruCache", "ExecutionEnvironment", "FBLogger", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "URIRFC3986", "URISchemes", "UriNeedRawQuerySVConfig", "isSameOrigin", "recoverableViolation", "structuredClone"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = d("CometLruCache").create(5e3),
        m = new RegExp("(^|\\.)facebook\\.com$", "i"),
        n = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
        o = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        p = c("UriNeedRawQuerySVConfig").uris.map(function(a) {
            return {
                domain: a,
                valid: w(a)
            }
        }),
        q = [],
        r = [];

    function s(a, b) {
        var d = {};
        if (a != null)
            for (var a = a.entries(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= a.length) break;
                    g = a[f++]
                } else {
                    f = a.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                d[g[0]] = g[1]
            } else c("FBLogger")("ConstUriUtils").warn("Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.");
        return b.serialize(d)
    }

    function t(a, b, d) {
        var e = k || (k = c("PHPQuerySerializer"));
        if (["http", "https"].includes(b) && u(a)) {
            if (a.includes("doubleclick.net") && d != null && !d.startsWith("http")) return e;
            e = c("PHPQuerySerializerNoEncoding")
        }
        return e
    }

    function u(a) {
        return a != null && p.some(function(b) {
            return b.valid && v(a, b.domain)
        })
    }

    function v(a, b) {
        if (b === "" || a === "") return !1;
        if (a.endsWith(b)) {
            b = a.length - b.length - 1;
            if (b === -1 || a[b] === ".") return !0
        }
        return !1
    }

    function w(a) {
        return !o.test(a)
    }

    function x(a, b) {
        var c = b.protocol != null && b.protocol !== "" ? b.protocol : a.getProtocol();
        c = b.domain != null ? t(b.domain, c) : a.getSerializer();
        c = {
            domain: a.getDomain(),
            fragment: a.getFragment(),
            fragmentSeparator: a.hasFragmentSeparator(),
            isGeneric: a.isGeneric(),
            originalRawQuery: a.getOriginalRawQuery(),
            path: a.getPath(),
            port: a.getPort(),
            protocol: a.getProtocol(),
            queryParams: a.getQueryParams(),
            serializer: c,
            subdomain: a.getSubdomain()
        };
        a = babelHelpers["extends"]({}, c, b);
        c = b.queryParams != null && b.queryParams.size !== 0;
        return C.getUribyObject(a, c)
    }

    function y(a, b, c, d) {
        c === void 0 && (c = !1);
        var e = a.protocol !== "" ? a.protocol + ":" + (a.isGeneric ? "" : "//") : "",
            f = a.domain !== "" ? a.domain : "",
            g = a.port !== "" ? ":" + a.port : "",
            h = a.path !== "" ? a.path : e !== "" && e !== "mailto:" || f !== "" || g !== "" ? "/" : "";
        c = z(f, a.originalRawQuery, a.queryParams, b, c, (b = d) != null ? b : a.serializer);
        d = c.length > 0 ? "?" : "";
        b = a.fragment !== "" ? "#" + a.fragment : "";
        a = a.fragment === "" && a.fragmentSeparator ? "#" : "";
        return "" + e + f + g + h + d + c + a + b
    }

    function z(a, b, c, d, e, f) {
        e === void 0 && (e = !1);
        if (!d && (e || u(a))) {
            return (d = b) != null ? d : ""
        }
        return s(c, f)
    }

    function A(a) {
        var b = a.trim();
        b = (h || (h = d("URIRFC3986"))).parse(b) || {
            fragment: null,
            host: null,
            isGenericURI: !1,
            query: null,
            scheme: null,
            userinfo: null
        };
        var c = b.host || "",
            e = c.split(".");
        e = e.length >= 3 ? e[0] : "";
        var f = t(c, b.scheme || "", b.query),
            g = f.deserialize(b.query || "") || {};
        g = new Map(Object.entries(g));
        g = B({
            domain: c,
            fragment: b.fragment || "",
            fragmentSeparator: b.fragment === "",
            isGeneric: b.isGenericURI,
            originalRawQuery: b.query,
            path: b.path || "",
            port: b.port != null ? String(b.port) : "",
            protocol: (b.scheme || "").toLowerCase(),
            queryParams: g,
            serializer: f,
            subdomain: e,
            userInfo: (c = b == null ? void 0 : b.userinfo) != null ? c : ""
        }, a);
        return g
    }

    function B(a, b, c, e) {
        c === void 0 && (c = (j || (j = d("URISchemes"))).Options.INCLUDE_DEFAULTS);
        var f = {
                components: babelHelpers["extends"]({}, a),
                error: "",
                valid: !0
            },
            g = f.components;
        if (!(j || (j = d("URISchemes"))).isAllowed(a.protocol, c, e)) {
            f.valid = !1;
            f.error = 'The URI protocol "' + String(a.protocol) + '" is not allowed.';
            return f
        }
        if (!w(a.domain || "")) {
            f.valid = !1;
            f.error = "This is an unsafe domain " + String(a.domain);
            return f
        }
        g.port = a.port != null && String(a.port) || "";
        if (Boolean(a.userInfo)) {
            f.valid = !1;
            f.error = "Invalid URI: (userinfo is not allowed in a URI " + String(a.userInfo) + ")";
            return f
        }
        c = b != null && b !== "" ? b : y(g, !1);
        if (g.domain === "" && g.path.indexOf("\\") !== -1) {
            f.valid = !1;
            f.error = "Invalid URI: (no domain but multiple back-slashes " + c + ")";
            return f
        }
        if (!g.protocol && n.test(c)) {
            f.valid = !1;
            f.error = "Invalid URI: (unsafe protocol-relative URI " + c + ")";
            return f
        }
        if (g.domain !== "" && g.path !== "" && !g.path.startsWith("/")) {
            f.valid = !1;
            f.error = "Invalid URI: (domain and pathwhere path lacks leading slash " + c + ")";
            return f
        }
        return f
    }
    var C = function() {
        function a(a) {
            this.queryParams = new Map(), this.domain = a.domain, this.fragment = a.fragment, this.fragmentSeparator = Boolean(a.fragmentSeparator), this.isGenericProtocol = Boolean(a.isGeneric), this.path = a.path, this.originalRawQuery = a.originalRawQuery, this.port = a.port, this.protocol = a.protocol, this.queryParams = a.queryParams, this.serializer = a.serializer, this.subdomain = a.subdomain
        }
        var b = a.prototype;
        b.addQueryParam = function(a, b) {
            if (Boolean(a)) {
                var c = this.getQueryParams();
                c.set(a, b);
                return x(this, {
                    queryParams: c
                })
            }
            return this
        };
        b.addQueryParams = function(a) {
            if (a.size > 0) {
                var b = this.getQueryParams();
                a.forEach(function(a, c) {
                    b.set(c, a)
                });
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.addQueryParamString = function(a) {
            if (Boolean(a)) {
                a = a.startsWith("?") ? a.slice(1) : a;
                var b = this.getQueryParams();
                a.split("&").map(function(a) {
                    a = a.split("=");
                    var c = a[0];
                    a = a[1];
                    b.set(c, a)
                });
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.addTrailingSlash = function() {
            var a = this.getPath();
            return a.length > 0 && a[a.length - 1] !== "/" ? this.setPath(a + "/") : this
        };
        b.getDomain = function() {
            return this.domain
        };
        b.getFragment = function() {
            return this.fragment
        };
        b.getOrigin = function() {
            var a = this.getPort();
            return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        };
        b.getOriginalRawQuery = function() {
            return this.originalRawQuery
        };
        b.getPath = function() {
            return this.path
        };
        b.getPort = function() {
            return this.port
        };
        b.getProtocol = function() {
            return this.protocol.toLowerCase()
        };
        b.getQualifiedUri = function() {
            if (!this.getDomain()) {
                var b = (typeof window !== "undefined" ? window : self).location.href;
                (i || (i = c("ExecutionEnvironment"))).isInWorker && b && b.startsWith("blob:") && (b = b.substring(5, b.length));
                b = b.slice(0, b.indexOf("/", b.indexOf(":") + 3));
                return a.getUri(b + this.toString())
            }
            return this
        };
        b.getQueryParam = function(a) {
            a = this.queryParams.get(a);
            if (typeof a === "string") return a;
            else {
                a = JSON.stringify(a);
                return a == null ? a : JSON.parse(a)
            }
        };
        b.getQueryData = function() {
            return Object.fromEntries(this.getQueryParams())
        };
        b.getQueryParams = function() {
            if (c("structuredClone") != null) return c("structuredClone")(this.queryParams);
            var a = JSON.stringify(Array.from(this.queryParams), function(a, b) {
                return Array.isArray(b) ? {
                    __CUUArr: !0,
                    value: babelHelpers["extends"]({}, b)
                } : b
            });
            a = JSON.parse(a, function(a, b) {
                return b != null && typeof b === "object" && b.__CUUArr ? Object.keys(b.value).reduce(function(a, c) {
                    a[c] = b.value[c];
                    return a
                }, []) : b
            });
            return new Map(a)
        };
        b.getQueryString = function(a) {
            a === void 0 && (a = !1);
            return z(this.domain, this.originalRawQuery, this.queryParams, !1, a, this.serializer)
        };
        b.getRegisteredDomain = function() {
            if (!this.getDomain()) return "";
            if (!this.isFacebookUri()) return null;
            var a = this.getDomain().split("."),
                b = a.indexOf("facebook");
            b === -1 && (b = a.indexOf("workplace"));
            return a.slice(b).join(".")
        };
        b.getSerializer = function() {
            return this.serializer
        };
        b.getSubdomain = function() {
            return this.subdomain
        };
        b.getUnqualifiedUri = function() {
            if (this.getDomain()) {
                var b = this.toString();
                return a.getUri(b.slice(b.indexOf("/", b.indexOf(":") + 3)))
            }
            return this
        };
        a.getUri = function(b) {
            b = b.trim();
            var d = l.get(b);
            if (d == null) {
                var e = A(b);
                if (e.valid) d = new a(e.components), l.set(b, d);
                else {
                    c("FBLogger")("ConstUriUtils").blameToPreviousFrame().warn(e.error);
                    return null
                }
            }
            return d
        };
        a.getUribyObject = function(b, d) {
            var e = y(b, d),
                f = l.get(e);
            if (f == null) {
                d && (b.originalRawQuery = s(b.queryParams, b.serializer));
                d = B(b);
                if (d.valid) f = new a(d.components), l.set(e, f);
                else {
                    c("recoverableViolation")(d.error, "ConstUri");
                    return null
                }
            }
            return f
        };
        b.hasFragmentSeparator = function() {
            return this.fragmentSeparator
        };
        b.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || this.queryParams.size > 0 || this.getFragment())
        };
        b.isFacebookUri = function() {
            var a = this.toString();
            if (a === "") return !1;
            return !this.getDomain() && !this.getProtocol() ? !0 : ["https", "http"].indexOf(this.getProtocol()) !== -1 && m.test(this.getDomain())
        };
        b.isGeneric = function() {
            return this.isGenericProtocol
        };
        b.isSameOrigin = function(a) {
            return c("isSameOrigin")(this, a)
        };
        b.isSubdomainOfDomain = function(b) {
            var c = a.getUri(b);
            return c != null && v(this.domain, b)
        };
        b.isSecure = function() {
            return this.getProtocol() === "https"
        };
        b.removeQueryParams = function(a) {
            if (Array.isArray(a) && a.length > 0) {
                var b = this.getQueryParams();
                a.map(function(a) {
                    return b["delete"](a)
                });
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.removeQueryParam = function(a) {
            if (Boolean(a)) {
                var b = this.getQueryParams();
                b["delete"](a);
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.replaceQueryParam = function(a, b) {
            if (Boolean(a)) {
                var c = this.getQueryParams();
                c.set(a, b);
                return x(this, {
                    queryParams: c
                })
            }
            return this
        };
        b.replaceQueryParams = function(a) {
            return x(this, {
                queryParams: a
            })
        };
        b.replaceQueryParamString = function(a) {
            if (a != null) {
                a = a.startsWith("?") ? a.slice(1) : a;
                var b = this.getQueryParams();
                a.split("&").map(function(a) {
                    a = a.split("=");
                    var c = a[0];
                    a = a[1];
                    b.set(c, a)
                });
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.setDomain = function(a) {
            if (Boolean(a)) {
                var b = a.split(".");
                b = b.length >= 3 ? b[0] : "";
                return x(this, {
                    domain: a,
                    subdomain: b
                })
            }
            return this
        };
        b.setFragment = function(a) {
            return a === "#" ? x(this, {
                fragment: "",
                fragmentSeparator: !0
            }) : x(this, {
                fragment: a,
                fragmentSeparator: a !== ""
            })
        };
        b.setPath = function(a) {
            return a != null ? x(this, {
                path: a
            }) : this
        };
        b.setPort = function(a) {
            return Boolean(a) ? x(this, {
                port: a
            }) : this
        };
        b.setProtocol = function(a) {
            return Boolean(a) ? x(this, {
                protocol: a
            }) : this
        };
        b.setSecure = function(a) {
            return this.setProtocol(a ? "https" : "http")
        };
        b.setSubDomain = function(a) {
            if (Boolean(a)) {
                var b = this.domain.split(".");
                b.length >= 3 ? b[0] = a : b.unshift(a);
                return x(this, {
                    domain: b.join("."),
                    subdomain: a
                })
            }
            return this
        };
        b.stripTrailingSlash = function() {
            return this.setPath(this.getPath().replace(/\/$/, ""))
        };
        a.$1 = function(a) {
            a = a;
            for (var b = 0; b < q.length; b++) {
                var c = q[b];
                a = c(a)
            }
            return a
        };
        a.$2 = function(a, b) {
            b = b;
            for (var c = 0; c < r.length; c++) {
                var d = r[c];
                b = d(a, b)
            }
            return b
        };
        b.$3 = function(b, c) {
            c === void 0 && (c = !1);
            return y({
                domain: a.$1(this.domain),
                fragment: this.fragment,
                fragmentSeparator: this.fragmentSeparator,
                isGeneric: this.isGenericProtocol,
                originalRawQuery: this.originalRawQuery,
                path: this.path,
                port: this.port,
                protocol: this.protocol,
                queryParams: a.$2(this.domain, this.queryParams),
                serializer: b,
                subdomain: this.subdomain,
                userInfo: ""
            }, !1, c)
        };
        b.toStringRawQuery = function() {
            this.rawStringValue == null && (this.rawStringValue = this.$3(c("PHPQuerySerializerNoEncoding")));
            return this.rawStringValue
        };
        b.toString = function() {
            this.stringValue == null && (this.stringValue = this.$3(this.serializer));
            return this.stringValue
        };
        b.toStringPreserveQuery = function() {
            return this.$3(this.serializer, !0)
        };
        a.isValidUri = function(b) {
            var c = l.get(b);
            if (c != null) return !0;
            c = A(b);
            if (c.valid) {
                l.set(b, new a(c.components));
                return !0
            }
            return !1
        };
        return a
    }();

    function a(a) {
        if (a instanceof C) return a;
        else return null
    }

    function b(a) {
        q.push(a)
    }

    function e(a) {
        r.push(a)
    }
    f = C.getUri;
    var D = C.isValidUri;
    g.isSubdomainOfDomain = v;
    g.isConstUri = a;
    g.registerDomainFilter = b;
    g.registerQueryParamsFilter = e;
    g.getUri = f;
    g.isValidUri = D
}), 98);
__d("routeBuilderUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a.split("/");
        return a.filter(function(a) {
            return a !== ""
        }).map(function(a) {
            var b = a.split(/{|}/);
            if (b.length < 3) return {
                isToken: !1,
                part: a
            };
            else {
                a = b[0];
                var c = b[1];
                b = b[2];
                var d = c[0] === "?",
                    e = c[d ? 1 : 0] === "*";
                c = c.substring((d ? 1 : 0) + (e ? 1 : 0));
                return {
                    isToken: !0,
                    optional: d,
                    catchAll: e,
                    prefix: a,
                    suffix: b,
                    token: c
                }
            }
        })
    }
    f.getPathParts = a
}), 66);
__d("jsRouteBuilder", ["ConstUriUtils", "FBLogger", "routeBuilderUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "#";

    function a(a, b, e, f, g) {
        g === void 0 && (g = !1);
        var i = d("routeBuilderUtils").getPathParts(a);

        function j(j) {
            try {
                var k = f != null ? babelHelpers["extends"]({}, f, j) : (j = j) != null ? j : {},
                    l = {};
                j = "";
                var m = !1;
                j = i.reduce(function(a, c) {
                    if (!c.isToken) return a + "/" + c.part;
                    else {
                        var d, e = c.optional,
                            f = c.prefix,
                            g = c.suffix;
                        c = c.token;
                        if (e && m) return a;
                        d = (d = k[c]) != null ? d : b[c];
                        if (d == null && e) {
                            m = !0;
                            return a
                        }
                        if (d == null) throw new Error("Missing required template parameter: " + c);
                        if (d === "") throw new Error("Required template parameter is an empty string: " + c);
                        l[c] = !0;
                        return a + "/" + f + d + g
                    }
                }, "");
                a.slice(-1) === "/" && (j += "/");
                j === "" && (j = "/");
                var n = d("ConstUriUtils").getUri(j);
                for (var o in k) {
                    var p = k[o];
                    !l[o] && p != null && n != null && (e != null && e.has(o) ? p !== !1 && (n = n.addQueryParam(o, null)) : n = n.addQueryParam(o, p))
                }
                return [n, j]
            } catch (b) {
                p = b == null ? void 0 : b.message;
                o = c("FBLogger")("JSRouteBuilder").blameToPreviousFrame().blameToPreviousFrame();
                g && (o = o.blameToPreviousFrame());
                o.mustfix("Failed building URI for base path: %s message: %s", a, p);
                return [null, h]
            }
        }
        return {
            buildUri: function(a) {
                a = (a = j(a)[0]) != null ? a : d("ConstUriUtils").getUri(h);
                if (a == null) throw new Error("Not even the fallback URL parsed validly!");
                return a
            },
            buildUriNullable: function(a) {
                return j(a)[0]
            },
            buildURL: function(a) {
                a = j(a);
                var b = a[0];
                a = a[1];
                return (b = b == null ? void 0 : b.toString()) != null ? b : a
            },
            buildURLStringDEPRECATED: function(a) {
                a = j(a);
                var b = a[0];
                a = a[1];
                return (b = b == null ? void 0 : b.toString()) != null ? b : a
            }
        }
    }
    g["default"] = a
}), 98);