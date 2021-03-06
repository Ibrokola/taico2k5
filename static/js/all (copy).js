/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = "1.11.0",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (l.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: k && !k.call("\ufeff\xa0") ? function(a) {
            return null == a ? "" : k.call(a)
        } : function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || n.guid++, e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function(a, b) {
                return a === b && (j = !0), 0
            },
            A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a))
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode) return d;
                            if (g.id === h) return d.push(g), d
                        } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d
                    } else {
                        if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d
                    }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) try {
                        return G.apply(d, u.querySelectorAll(v)), d
                    } catch (w) {} finally {
                        p || b.removeAttribute("id")
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function(b) {
                return b = +b, fb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {}, f = db.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                k()
            })), c.attributes = gb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function(a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, z = b ? function(a, b) {
                if (a === b) return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return j = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) k.unshift(c);
                while (h[d] === k[d]) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function(a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return db(b, l, null, [a]).length > 0
        }, db.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function(a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return i = null, a
        }, e = db.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [u, n, m];
                                        break
                                    }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function(a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: fb(function(a) {
                    return function(b) {
                        return db(a, b).length > 0
                    }
                }),
                contains: fb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === m
                },
                focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: lb(function() {
                    return [0]
                }),
                last: lb(function(a, b) {
                    return [b - 1]
                }),
                eq: lb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: lb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: lb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = jb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = kb(b);

        function nb() {}
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function rb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
                    return a === b
                }, i, !0), l = qb(function(a) {
                    return I.call(b, a) > -1
                }, i, !0), m = [function(a, c, d) {
                    return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > j; j++)
                if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
                            value: " " === a[j - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                    }
                    m.push(c)
                }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || .1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) {
                            n = 0;
                            while (o = a[n++])
                                if (o(m, g, i)) {
                                    j.push(m);
                                    break
                                }
                            k && (u = w)
                        }
                        c && ((m = !o && m) && p--, f && r.push(m))
                    }
                    if (p += q, c && q !== p) {
                        n = 0;
                        while (o = b[n++]) o(r, s, g, i);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = E.call(j));
                            s = sb(s)
                        }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                    }
                    return k && (u = w, h = t), r
                };
            return c ? fb(f) : f
        }
        g = db.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function(a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = a.document,
        A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        B = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : A.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : z, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = z.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return y.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    B.prototype = n.fn, y = n(z);
    var C = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !n(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function E(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return E(a, "nextSibling")
        },
        prev: function(a) {
            return E(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.unique(e)), C.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var F = /\S+/g,
        G = {};

    function H(a) {
        var b = G[a] = {};
        return n.each(a.match(F) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? G[a] || H(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, c) {
                        var d;
                        while ((d = n.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], e = 0, this
                },
                disable: function() {
                    return h = i = c = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, c || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--n.readyWait : !n.isReady) {
                if (!z.body) return setTimeout(n.ready);
                n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(z, [n]), n.fn.trigger && n(z).trigger("ready").off("ready"))
            }
        }
    });

    function J() {
        z.addEventListener ? (z.removeEventListener("DOMContentLoaded", K, !1), a.removeEventListener("load", K, !1)) : (z.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (z.addEventListener || "load" === event.type || "complete" === z.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === z.readyState) setTimeout(n.ready);
            else if (z.addEventListener) z.addEventListener("DOMContentLoaded", K, !1), a.addEventListener("load", K, !1);
        else {
            z.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && z.documentElement
            } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    };
    var L = "undefined",
        M;
    for (M in n(l)) break;
    l.ownLast = "0" !== M, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c = z.getElementsByTagName("body")[0];
            c && (a = z.createElement("div"), a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", b = z.createElement("div"), c.appendChild(a).appendChild(b), typeof b.style.zoom !== L && (b.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (l.inlineBlockNeedsLayout = 3 === b.offsetWidth) && (c.style.zoom = 1)), c.removeChild(a), a = b = null)
        }),
        function() {
            var a = z.createElement("div");
            if (null == l.deleteExpando) {
                l.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    l.deleteExpando = !1
                }
            }
            a = null
        }(), n.acceptData = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (n.acceptData(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (n.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d]));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"), n._removeData(a, c)
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        W = n.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) n.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        X = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = z.createDocumentFragment(),
            b = z.createElement("div"),
            c = z.createElement("input");
        if (b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a>", l.leadingWhitespace = 3 === b.firstChild.nodeType, l.tbody = !b.getElementsByTagName("tbody").length, l.htmlSerialize = !!b.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, a.appendChild(c), l.appendChecked = c.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, a.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                l.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == l.deleteExpando) {
            l.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                l.deleteExpando = !1
            }
        }
        a = b = c = null
    }(),
    function() {
        var b, c, d = z.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), l[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Y = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        $ = /^(?:mouse|contextmenu)|click/,
        _ = /^(?:focusinfocus|focusoutblur)$/,
        ab = /^([^.]*)(?:\.(.+)|)$/;

    function bb() {
        return !0
    }

    function cb() {
        return !1
    }

    function db() {
        try {
            return z.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof n === L || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;
                while (h--) f = ab.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(F) || [""], j = b.length;
                while (j--)
                    if (h = ab.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, m, o = [d || z],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || z, 3 !== d.nodeType && 8 !== d.nodeType && !_.test(p + n.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[n.expando] ? b : new n.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), k = n.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !n.isWindow(d)) {
                    for (i = k.delegateType || p, _.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || z) && o.push(l.defaultView || l.parentWindow || a)
                }
                m = 0;
                while ((h = o[m++]) && !b.isPropagationStopped()) b.type = m > 1 ? i : k.bindType || p, f = (n._data(h, "events") || {})[b.type] && n._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && n.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && n.acceptData(d) && g && d[p] && !n.isWindow(d)) {
                    l = d[g], l && (d[g] = null), n.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    n.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((n.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? n(c, this).index(i) >= 0 : n.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = $.test(e) ? this.mouseHooks : Z.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || z), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || z, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== db() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === db() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = z.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === L && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && (a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault()) ? bb : cb) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: cb,
        isPropagationStopped: cb,
        isImmediatePropagationStopped: cb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = bb, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = bb, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = bb, this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submitBubbles || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? b.form : void 0;
                c && !n._data(c, "submitBubbles") && (n.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }), n._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.changeBubbles || (n.event.special.change = {
        setup: function() {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), n.event.simulate("change", this, a, !0)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Y.test(b.nodeName) && !n._data(b, "changeBubbles") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a, !0)
                }), n._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !Y.test(this.nodeName)
        }
    }), l.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = cb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return n().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = cb), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });

    function eb(a) {
        var b = fb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gb = / jQuery\d+="(?:null|\d+)"/g,
        hb = new RegExp("<(?:" + fb + ")[\\s/>]", "i"),
        ib = /^\s+/,
        jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        kb = /<([\w:]+)/,
        lb = /<tbody/i,
        mb = /<|&#?\w+;/,
        nb = /<(?:script|style|link)/i,
        ob = /checked\s*(?:[^=]|=\s*.checked.)/i,
        pb = /^$|\/(?:java|ecma)script/i,
        qb = /^true\/(.*)/,
        rb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        sb = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        tb = eb(z),
        ub = tb.appendChild(z.createElement("div"));
    sb.optgroup = sb.option, sb.tbody = sb.tfoot = sb.colgroup = sb.caption = sb.thead, sb.th = sb.td;

    function vb(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== L ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== L ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, vb(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function wb(a) {
        X.test(a.type) && (a.defaultChecked = a.checked)
    }

    function xb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function yb(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function zb(a) {
        var b = qb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ab(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }

    function Bb(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Cb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (yb(b).text = a.text, zb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && X.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !hb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ub.innerHTML = a.outerHTML, ub.removeChild(f = ub.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = vb(f), h = vb(a), g = 0; null != (e = h[g]); ++g) d[g] && Cb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || vb(a), d = d || vb(f), g = 0; null != (e = h[g]); g++) Bb(e, d[g]);
                else Bb(a, f);
            return d = vb(f, "script"), d.length > 0 && Ab(d, !i && vb(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, m = a.length, o = eb(b), p = [], q = 0; m > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === n.type(f)) n.merge(p, f.nodeType ? [f] : f);
                    else if (mb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (kb.exec(f) || ["", ""])[1].toLowerCase(), k = sb[i] || sb._default, h.innerHTML = k[1] + f.replace(jb, "<$1></$2>") + k[2], e = k[0];
                while (e--) h = h.lastChild;
                if (!l.leadingWhitespace && ib.test(f) && p.push(b.createTextNode(ib.exec(f)[0])), !l.tbody) {
                    f = "table" !== i || lb.test(f) ? "<table>" !== k[1] || lb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--) n.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                n.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), l.appendChecked || n.grep(vb(p, "input"), wb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === n.inArray(f, d)) && (g = n.contains(f.ownerDocument, f), h = vb(o.appendChild(f), "script"), g && Ab(h), c)) {
                    e = 0;
                    while (f = h[e++]) pb.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.deleteExpando, m = n.event.special; null != (d = a[h]); h++)
                if ((b || n.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k ? delete d[i] : typeof d.removeAttribute !== L ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), n.fn.extend({
        text: function(a) {
            return W(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = xb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(vb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && Ab(vb(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(vb(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return W(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(gb, "") : void 0;
                if (!("string" != typeof a || nb.test(a) || !l.htmlSerialize && hb.test(a) || !l.leadingWhitespace && ib.test(a) || sb[(kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(jb, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(vb(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(vb(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                o = k - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && ob.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (k && (i = n.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = n.map(vb(i, "script"), yb), f = g.length; k > j; j++) d = i, j !== o && (d = n.clone(d, !0, !0), f && n.merge(g, vb(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, n.map(g, zb), j = 0; f > j; j++) d = g[j], pb.test(d.type || "") && !n._data(d, "globalEval") && n.contains(h, d) && (d.src ? n._evalUrl && n._evalUrl(d.src) : n.globalEval((d.text || d.textContent || d.innerHTML || "").replace(rb, "")));
                i = c = null
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = n(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Db, Eb = {};

    function Fb(b, c) {
        var d = n(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : n.css(d[0], "display");
        return d.detach(), e
    }

    function Gb(a) {
        var b = z,
            c = Eb[a];
        return c || (c = Fb(a, b), "none" !== c && c || (Db = (Db || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Db[0].contentWindow || Db[0].contentDocument).document, b.write(), b.close(), c = Fb(a, b), Db.detach()), Eb[a] = c), c
    }! function() {
        var a, b, c = z.createElement("div"),
            d = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], a.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(a.style.opacity), l.cssFloat = !!a.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === c.style.backgroundClip, a = c = null, l.shrinkWrapBlocks = function() {
            var a, c, e, f;
            if (null == b) {
                if (a = z.getElementsByTagName("body")[0], !a) return;
                f = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", c = z.createElement("div"), e = z.createElement("div"), a.appendChild(c).appendChild(e), b = !1, typeof e.style.zoom !== L && (e.style.cssText = d + ";width:1px;padding:1px;zoom:1", e.innerHTML = "<div></div>", e.firstChild.style.width = "5px", b = 3 !== e.offsetWidth), a.removeChild(c), a = c = e = null
            }
            return b
        }
    }();
    var Hb = /^margin/,
        Ib = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Jb, Kb, Lb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Jb = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), Ib.test(g) && Hb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : z.documentElement.currentStyle && (Jb = function(a) {
        return a.currentStyle
    }, Kb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Jb(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ib.test(g) && !Lb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Mb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d, e, f, g, h = z.createElement("div"),
            i = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            j = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", b = h.getElementsByTagName("a")[0], b.style.cssText = "float:left;opacity:.5", l.opacity = /^0.5/.test(b.style.opacity), l.cssFloat = !!b.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, b = h = null, n.extend(l, {
            reliableHiddenOffsets: function() {
                if (null != c) return c;
                var a, b, d, e = z.createElement("div"),
                    f = z.getElementsByTagName("body")[0];
                if (f) return e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = z.createElement("div"), a.style.cssText = i, f.appendChild(a).appendChild(e), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", b = e.getElementsByTagName("td"), b[0].style.cssText = "padding:0;margin:0;border:0;display:none", d = 0 === b[0].offsetHeight, b[0].style.display = "", b[1].style.display = "none", c = d && 0 === b[0].offsetHeight, f.removeChild(a), e = f = null, c
            },
            boxSizing: function() {
                return null == d && k(), d
            },
            boxSizingReliable: function() {
                return null == e && k(), e
            },
            pixelPosition: function() {
                return null == f && k(), f
            },
            reliableMarginRight: function() {
                var b, c, d, e;
                if (null == g && a.getComputedStyle) {
                    if (b = z.getElementsByTagName("body")[0], !b) return;
                    c = z.createElement("div"), d = z.createElement("div"), c.style.cssText = i, b.appendChild(c).appendChild(d), e = d.appendChild(z.createElement("div")), e.style.cssText = d.style.cssText = j, e.style.marginRight = e.style.width = "0", d.style.width = "1px", g = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(c)
                }
                return g
            }
        });

        function k() {
            var b, c, h = z.getElementsByTagName("body")[0];
            h && (b = z.createElement("div"), c = z.createElement("div"), b.style.cssText = i, h.appendChild(b).appendChild(c), c.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", n.swap(h, null != h.style.zoom ? {
                zoom: 1
            } : {}, function() {
                d = 4 === c.offsetWidth
            }), e = !0, f = !1, g = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(c, null) || {}).top, e = "4px" === (a.getComputedStyle(c, null) || {
                width: "4px"
            }).width), h.removeChild(b), c = h = null)
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Nb = /alpha\([^)]*\)/i,
        Ob = /opacity\s*=\s*([^)]*)/,
        Pb = /^(none|table(?!-c[ea]).+)/,
        Qb = new RegExp("^(" + T + ")(.*)$", "i"),
        Rb = new RegExp("^([+-])=(" + T + ")", "i"),
        Sb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Tb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ub = ["Webkit", "O", "Moz", "ms"];

    function Vb(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ub.length;
        while (e--)
            if (b = Ub[e] + c, b in a) return b;
        return d
    }

    function Wb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", Gb(d.nodeName)))) : f[g] || (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Xb(a, b, c) {
        var d = Qb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Yb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }

    function Zb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Jb(a),
            g = l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Kb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ib.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Yb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = Vb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Rb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = "", i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Vb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Kb(a, b, d)), "normal" === f && b in Tb && (f = Tb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || n.isNumeric(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && Pb.test(n.css(a, "display")) ? n.swap(a, Sb, function() {
                    return Zb(a, b, d)
                }) : Zb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Jb(a);
                return Xb(a, c, d ? Yb(a, b, d, l.boxSizing() && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Ob.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Nb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Mb(l.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, Kb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Hb.test(a) || (n.cssHooks[a + b].set = Xb)
    }), n.fn.extend({
        css: function(a, b) {
            return W(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Jb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Wb(this, !0)
        },
        hide: function() {
            return Wb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function $b(a, b, c, d, e) {
        return new $b.prototype.init(a, b, c, d, e)
    }
    n.Tween = $b, $b.prototype = {
        constructor: $b,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = $b.propHooks[this.prop];
            return a && a.get ? a.get(this) : $b.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = $b.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : $b.propHooks._default.set(this), this
        }
    }, $b.prototype.init.prototype = $b.prototype, $b.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, $b.propHooks.scrollTop = $b.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = $b.prototype.init, n.fx.step = {};
    var _b, ac, bc = /^(?:toggle|show|hide)$/,
        cc = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        dc = /queueHooks$/,
        ec = [jc],
        fc = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = cc.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && cc.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function gc() {
        return setTimeout(function() {
            _b = void 0
        }), _b = n.now()
    }

    function hc(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = U[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function ic(a, b, c) {
        for (var d, e = (fc[b] || []).concat(fc["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function jc(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && V(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = Gb(a.nodeName), "none" === j && (j = k), "inline" === j && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== k ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], bc.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            }
        if (!n.isEmptyObject(o)) {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = ic(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function kc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function lc(a, b, c) {
        var d, e, f = 0,
            g = ec.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = _b || gc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: _b || gc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (kc(k, j.opts.specialEasing); g > f; f++)
            if (d = ec[f].call(j, a, k, j.opts)) return d;
        return n.map(k, ic, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(lc, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], fc[c] = fc[c] || [], fc[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? ec.unshift(a) : ec.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(V).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = lc(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && dc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(hc(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: hc("show"),
            slideUp: hc("hide"),
            slideToggle: hc("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (_b = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), _b = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ac || (ac = setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            clearInterval(ac), ac = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a, b, c, d, e = z.createElement("div");
            e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = e.getElementsByTagName("a")[0], c = z.createElement("select"), d = c.appendChild(z.createElement("option")), b = e.getElementsByTagName("input")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== e.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = d.selected, l.enctype = !!z.createElement("form").enctype, c.disabled = !0, l.optDisabled = !d.disabled, b = z.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value, a = b = c = d = e = null
        }();
    var mc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(mc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.text(a)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var nc, oc, pc = n.expr.attrHandle,
        qc = /^(?:checked|selected)$/i,
        rc = l.getSetAttribute,
        sc = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return W(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === L ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? oc : nc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(F);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? sc && rc || !qc.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(rc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), oc = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : sc && rc || !qc.test(c) ? a.setAttribute(!rc && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = pc[b] || n.find.attr;
        pc[b] = sc && rc || !qc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = pc[b], pc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, pc[b] = f), e
        } : function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), sc && rc || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : nc && nc.set(a, b, c)
        }
    }), rc || (nc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, pc.id = pc.name = pc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: nc.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            nc.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var tc = /^(?:input|select|textarea|button|object)$/i,
        uc = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return W(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : tc.test(a.nodeName) || uc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var vc = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(F) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(F) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === L || "boolean" === c) && (this.className && n._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : n._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var wc = n.now(),
        xc = /\?/,
        yc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(yc, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var zc, Ac, Bc = /#.*$/,
        Cc = /([?&])_=[^&]*/,
        Dc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ec = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Fc = /^(?:GET|HEAD)$/,
        Gc = /^\/\//,
        Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ic = {},
        Jc = {},
        Kc = "*/".concat("*");
    try {
        Ac = location.href
    } catch (Lc) {
        Ac = z.createElement("a"), Ac.href = "", Ac = Ac.href
    }
    zc = Hc.exec(Ac.toLowerCase()) || [];

    function Mc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(F) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Nc(a, b, c, d) {
        var e = {},
            f = a === Jc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Oc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Pc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Qc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ac,
            type: "GET",
            isLocal: Ec.test(zc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Kc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Oc(Oc(a, n.ajaxSettings), b) : Oc(n.ajaxSettings, a)
        },
        ajaxPrefilter: Mc(Ic),
        ajaxTransport: Mc(Jc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Dc.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ac) + "").replace(Bc, "").replace(Gc, zc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(F) || [""], null == k.crossDomain && (c = Hc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === zc[1] && c[2] === zc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (zc[3] || ("http:" === zc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nc(Ic, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fc.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (xc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cc.test(e) ? e.replace(Cc, "$1_=" + wc++) : e + (xc.test(e) ? "&" : "?") + "_=" + wc++)), k.ifModified && (n.lastModified[e] && v.setRequestHeader("If-Modified-Since", n.lastModified[e]), n.etag[e] && v.setRequestHeader("If-None-Match", n.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[d](k[d]);
            if (i = Nc(Jc, k, b, v)) {
                v.readyState = 1, h && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Pc(k, v, c)), u = Qc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (n.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !l.reliableHiddenOffsets() && "none" === (a.style && a.style.display || n.css(a, "display"))
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var Rc = /%20/g,
        Sc = /\[\]$/,
        Tc = /\r?\n/g,
        Uc = /^(?:submit|button|image|reset|file)$/i,
        Vc = /^(?:input|select|textarea|keygen)/i;

    function Wc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Sc.test(a) ? d(a, e) : Wc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Wc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Wc(c, a[c], b, e);
        return d.join("&").replace(Rc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Vc.test(this.nodeName) && !Uc.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Tc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Tc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
    } : $c;
    var Xc = 0,
        Yc = {},
        Zc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function() {
        for (var a in Yc) Yc[a](void 0, !0)
    }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function(a) {
        if (!a.crossDomain || l.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Xc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function $c() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function _c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = z.head || n("head")[0] || z.documentElement;
            return {
                send: function(d, e) {
                    b = z.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ad = [],
        bd = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = ad.pop() || n.expando + "_" + wc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (bd.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bd.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bd, "$1" + e) : b.jsonp !== !1 && (b.url += (xc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ad.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || z;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var cd = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && cd) return cd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h, a.length), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var dd = a.document.documentElement;

    function ed(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? (typeof e.getBoundingClientRect !== L && (d = e.getBoundingClientRect()), c = ed(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || dd;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || dd
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return W(this, function(a, d, e) {
                var f = ed(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Mb(l.pixelPosition, function(a, c) {
            return c ? (c = Kb(a, b), Ib.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return W(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var fd = a.jQuery,
        gd = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = gd), b && a.jQuery === n && (a.jQuery = fd), n
    }, typeof b === L && (a.jQuery = a.$ = n), n
});

/*! jquery.caret 2014-04-18 */
(function() {
    ! function(a) {
        return "function" == typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery)
    }(function(a) {
        "use strict";
        var b, c, d, e, f, g, h, i, j, k, l;
        return k = "caret", b = function() {
            function b(a) {
                this.$inputor = a, this.domInputor = this.$inputor[0]
            }
            return b.prototype.setPos = function() {
                return this.domInputor
            }, b.prototype.getIEPosition = function() {
                return a.noop()
            }, b.prototype.getPosition = function() {
                return a.noop()
            }, b.prototype.getOldIEPos = function() {
                var a, b;
                return b = h.selection.createRange(), a = h.body.createTextRange(), a.moveToElementText(this.domInputor), a.setEndPoint("EndToEnd", b), a.text.length
            }, b.prototype.getPos = function() {
                var a, b, c;
                return (c = this.range()) ? (a = c.cloneRange(), a.selectNodeContents(this.domInputor), a.setEnd(c.endContainer, c.endOffset), b = a.toString().length, a.detach(), b) : h.selection ? this.getOldIEPos() : void 0
            }, b.prototype.getOldIEOffset = function() {
                var a, b;
                return a = h.selection.createRange().duplicate(), a.moveStart("character", -1), b = a.getBoundingClientRect(), {
                    height: b.bottom - b.top,
                    left: b.left,
                    top: b.top
                }
            }, b.prototype.getOffset = function() {
                var b, c, d, e;
                if (j.getSelection && (d = this.range())) {
                    if (d.endOffset - 1 < 0) return null;
                    b = d.cloneRange(), b.setStart(d.endContainer, d.endOffset - 1), b.setEnd(d.endContainer, d.endOffset), e = b.getBoundingClientRect(), c = {
                        height: e.height,
                        left: e.left + e.width,
                        top: e.top
                    }, b.detach()
                } else h.selection && (c = this.getOldIEOffset());
                return c && !i && (c.top += a(j).scrollTop(), c.left += a(j).scrollLeft()), c
            }, b.prototype.range = function() {
                var a;
                if (j.getSelection) return a = j.getSelection(), a.rangeCount > 0 ? a.getRangeAt(0) : null
            }, b
        }(), c = function() {
            function b(a) {
                this.$inputor = a, this.domInputor = this.$inputor[0]
            }
            return b.prototype.getIEPos = function() {
                var a, b, c, d, e, f, g;
                return b = this.domInputor, f = h.selection.createRange(), e = 0, f && f.parentElement() === b && (d = b.value.replace(/\r\n/g, "\n"), c = d.length, g = b.createTextRange(), g.moveToBookmark(f.getBookmark()), a = b.createTextRange(), a.collapse(!1), e = g.compareEndPoints("StartToEnd", a) > -1 ? c : -g.moveStart("character", -c)), e
            }, b.prototype.getPos = function() {
                return h.selection ? this.getIEPos() : this.domInputor.selectionStart
            }, b.prototype.setPos = function(a) {
                var b, c;
                return b = this.domInputor, h.selection ? (c = b.createTextRange(), c.move("character", a), c.select()) : b.setSelectionRange && b.setSelectionRange(a, a), b
            }, b.prototype.getIEOffset = function(a) {
                var b, c, d, e;
                return c = this.domInputor.createTextRange(), a || (a = this.getPos()), c.move("character", a), d = c.boundingLeft, e = c.boundingTop, b = c.boundingHeight, {
                    left: d,
                    top: e,
                    height: b
                }
            }, b.prototype.getOffset = function(b) {
                var c, d, e;
                return c = this.$inputor, h.selection ? (d = this.getIEOffset(b), d.top += a(j).scrollTop() + c.scrollTop(), d.left += a(j).scrollLeft() + c.scrollLeft(), d) : (d = c.offset(), e = this.getPosition(b), d = {
                    left: d.left + e.left - c.scrollLeft(),
                    top: d.top + e.top - c.scrollTop(),
                    height: e.height
                })
            }, b.prototype.getPosition = function(a) {
                var b, c, e, f, g, h;
                return b = this.$inputor, e = function(a) {
                    return a.replace(/</g, "&lt").replace(/>/g, "&gt").replace(/`/g, "&#96").replace(/"/g, "&quot").replace(/\r\n|\r|\n/g, "<br />")
                }, void 0 === a && (a = this.getPos()), h = b.val().slice(0, a), f = "<span>" + e(h) + "</span>", f += "<span id='caret'>|</span>", g = new d(b), c = g.create(f).rect()
            }, b.prototype.getIEPosition = function(a) {
                var b, c, d, e, f;
                return d = this.getIEOffset(a), c = this.$inputor.offset(), e = d.left - c.left, f = d.top - c.top, b = d.height, {
                    left: e,
                    top: f,
                    height: b
                }
            }, b
        }(), d = function() {
            function b(a) {
                this.$inputor = a
            }
            return b.prototype.css_attr = ["overflowY", "height", "width", "paddingTop", "paddingLeft", "paddingRight", "paddingBottom", "marginTop", "marginLeft", "marginRight", "marginBottom", "fontFamily", "borderStyle", "borderWidth", "wordWrap", "fontSize", "lineHeight", "overflowX", "text-align"], b.prototype.mirrorCss = function() {
                var b, c = this;
                return b = {
                    position: "absolute",
                    left: -9999,
                    top: 0,
                    zIndex: -2e4,
                    "white-space": "pre-wrap"
                }, a.each(this.css_attr, function(a, d) {
                    return b[d] = c.$inputor.css(d)
                }), b
            }, b.prototype.create = function(b) {
                return this.$mirror = a("<div></div>"), this.$mirror.css(this.mirrorCss()), this.$mirror.html(b), this.$inputor.after(this.$mirror), this
            }, b.prototype.rect = function() {
                var a, b, c;
                return a = this.$mirror.find("#caret"), b = a.position(), c = {
                    left: b.left,
                    top: b.top,
                    height: a.height()
                }, this.$mirror.remove(), c
            }, b
        }(), e = {
            contentEditable: function(a) {
                return !(!a[0].contentEditable || "true" !== a[0].contentEditable)
            }
        }, g = {
            pos: function(a) {
                return a || 0 === a ? this.setPos(a) : this.getPos()
            },
            position: function(a) {
                return h.selection ? this.getIEPosition(a) : this.getPosition(a)
            },
            offset: function(b) {
                var c, d;
                return d = this.getOffset(b), i && (c = a(i).offset(), d.top += c.top, d.left += c.left), d
            }
        }, h = null, j = null, i = null, l = function(a) {
            return i = a, j = a.contentWindow, h = a.contentDocument || j.document
        }, f = function(b, c) {
            var d, e;
            if (a.isPlainObject(c) && (e = c.iframe)) return b.data("caret-iframe", e), l(e);
            if (e = b.data("caret-iframe")) return l(e);
            h = b[0].ownerDocument, j = h.defaultView || h.parentWindow;
            try {
                return i = j.frameElement
            } catch (f) {
                d = f
            }
        }, a.fn.caret = function(d) {
            var h;
            return "object" == typeof d ? (f(this, d), this) : g[d] ? (f(this), h = e.contentEditable(this) ? new b(this) : new c(this), g[d].apply(h, Array.prototype.slice.call(arguments, 1))) : a.error("Method " + d + " does not exist on jQuery.caret")
        }, a.fn.caret.EditableCaret = b, a.fn.caret.InputCaret = c, a.fn.caret.Utils = e, a.fn.caret.apis = g
    })
}).call(this);
(function() {
    ! function(a) {
        return "function" == typeof define && define.amd ? define(["jquery"], a) : a(window.jQuery)
    }(function(a) {
        var b, c, d, e, f, g, h, i, j, k = [].slice;
        d = function() {
            function b(b) {
                this.current_flag = null, this.controllers = {}, this.alias_maps = {}, this.$inputor = a(b), this.iframe = null, this.setIframe(), this.listen()
            }
            return b.prototype.setIframe = function(a) {
                var b;
                if (a) return this.window = a.contentWindow, this.document = a.contentDocument || this.window.document, this.iframe = a, this;
                this.document = this.$inputor[0].ownerDocument, this.window = this.document.defaultView || this.document.parentWindow;
                try {
                    return this.iframe = this.window.frameElement
                } catch (c) {
                    b = c
                }
            }, b.prototype.controller = function(a) {
                return this.controllers[this.alias_maps[a] || a || this.current_flag]
            }, b.prototype.set_context_for = function(a) {
                return this.current_flag = a, this
            }, b.prototype.reg = function(a, b) {
                var c, d;
                return c = (d = this.controllers)[a] || (d[a] = new f(this, a)), b.alias && (this.alias_maps[b.alias] = a), c.init(b), this
            }, b.prototype.listen = function() {
                return this.$inputor.on("keyup.atwhoInner", function(a) {
                    return function(b) {
                        return a.on_keyup(b)
                    }
                }(this)).on("keydown.atwhoInner", function(a) {
                    return function(b) {
                        return a.on_keydown(b)
                    }
                }(this)).on("scroll.atwhoInner", function(a) {
                    return function() {
                        var b;
                        return null != (b = a.controller()) ? b.view.hide() : void 0
                    }
                }(this)).on("blur.atwhoInner", function(a) {
                    return function() {
                        var b;
                        return (b = a.controller()) ? b.view.hide(b.get_opt("display_timeout")) : void 0
                    }
                }(this))
            }, b.prototype.shutdown = function() {
                var a, b, c;
                c = this.controllers;
                for (b in c) a = c[b], a.destroy(), delete this.controllers[b];
                return this.$inputor.off(".atwhoInner")
            }, b.prototype.dispatch = function() {
                return a.map(this.controllers, function(a) {
                    return function(b) {
                        var c;
                        return (c = b.get_opt("delay")) ? (clearTimeout(a.delayedCallback), a.delayedCallback = setTimeout(function() {
                            return b.look_up() ? a.set_context_for(b.at) : void 0
                        }, c)) : b.look_up() ? a.set_context_for(b.at) : void 0
                    }
                }(this))
            }, b.prototype.on_keyup = function(b) {
                var c;
                switch (b.keyCode) {
                    case h.ESC:
                        b.preventDefault(), null != (c = this.controller()) && c.view.hide();
                        break;
                    case h.DOWN:
                    case h.UP:
                    case h.CTRL:
                        a.noop();
                        break;
                    case h.P:
                    case h.N:
                        b.ctrlKey || this.dispatch();
                        break;
                    default:
                        this.dispatch()
                }
            }, b.prototype.on_keydown = function(b) {
                var c, d;
                if (c = null != (d = this.controller()) ? d.view : void 0, c && c.visible()) switch (b.keyCode) {
                    case h.ESC:
                        b.preventDefault(), c.hide();
                        break;
                    case h.UP:
                        b.preventDefault(), c.prev();
                        break;
                    case h.DOWN:
                        b.preventDefault(), c.next();
                        break;
                    case h.P:
                        if (!b.ctrlKey) return;
                        b.preventDefault(), c.prev();
                        break;
                    case h.N:
                        if (!b.ctrlKey) return;
                        b.preventDefault(), c.next();
                        break;
                    case h.TAB:
                    case h.ENTER:
                        if (!c.visible()) return;
                        b.preventDefault(), c.choose();
                        break;
                    default:
                        a.noop()
                }
            }, b
        }(), f = function() {
            function c(c, d) {
                this.app = c, this.at = d, this.$inputor = this.app.$inputor, this.id = this.$inputor[0].id || this.uid(), this.setting = null, this.query = null, this.pos = 0, this.cur_rect = null, this.range = null, b.append(this.$el = a("<div id='atwho-ground-" + this.id + "'></div>")), this.model = new i(this), this.view = new j(this)
            }
            return c.prototype.uid = function() {
                return (Math.random().toString(16) + "000000000").substr(2, 8) + (new Date).getTime()
            }, c.prototype.init = function(b) {
                return this.setting = a.extend({}, this.setting || a.fn.atwho["default"], b), this.view.init(), this.model.reload(this.setting.data)
            }, c.prototype.destroy = function() {
                return this.trigger("beforeDestroy"), this.model.destroy(), this.view.destroy(), this.$el.remove()
            }, c.prototype.call_default = function() {
                var b, c, d;
                d = arguments[0], b = 2 <= arguments.length ? k.call(arguments, 1) : [];
                try {
                    return g[d].apply(this, b)
                } catch (e) {
                    return c = e, a.error("" + c + " Or maybe At.js doesn't have function " + d)
                }
            }, c.prototype.trigger = function(a, b) {
                var c, d;
                return null == b && (b = []), b.push(this), c = this.get_opt("alias"), d = c ? "" + a + "-" + c + ".atwho" : "" + a + ".atwho", this.$inputor.trigger(d, b)
            }, c.prototype.callbacks = function(a) {
                return this.get_opt("callbacks")[a] || g[a]
            }, c.prototype.get_opt = function(a) {
                var b;
                try {
                    return this.setting[a]
                } catch (c) {
                    return b = c, null
                }
            }, c.prototype.content = function() {
                return this.$inputor.is("textarea, input") ? this.$inputor.val() : this.$inputor.text()
            }, c.prototype.catch_query = function() {
                var a, b, c, d, e, f;
                return b = this.content(), a = this.$inputor.caret("pos"), f = b.slice(0, a), d = this.callbacks("matcher").call(this, this.at, f, this.get_opt("start_with_space")), "string" == typeof d && d.length <= this.get_opt("max_len", 20) ? (e = a - d.length, c = e + d.length, this.pos = e, d = {
                    text: d,
                    head_pos: e,
                    end_pos: c
                }, this.trigger("matched", [this.at, d.text])) : (d = null, this.view.hide()), this.query = d
            }, c.prototype.rect = function() {
                var a, b;
                if (a = this.$inputor.caret({
                        iframe: this.app.iframe
                    }).caret("offset", this.pos - 1)) return "true" === this.$inputor.attr("contentEditable") && (a = this.cur_rect || (this.cur_rect = a) || a), b = this.app.document.selection ? 0 : 2, {
                    left: a.left,
                    top: a.top,
                    bottom: a.top + a.height + b
                }
            }, c.prototype.reset_rect = function() {
                return "true" === this.$inputor.attr("contentEditable") ? this.cur_rect = null : void 0
            }, c.prototype.mark_range = function() {
                return "true" === this.$inputor.attr("contentEditable") && (this.app.window.getSelection && (this.range = this.app.window.getSelection().getRangeAt(0)), this.app.document.selection) ? this.ie8_range = this.app.document.selection.createRange() : void 0
            }, c.prototype.insert_content_for = function(b) {
                var c, d, e;
                return d = b.data("value"), e = this.get_opt("insert_tpl"), this.$inputor.is("textarea, input") || !e ? d : (c = a.extend({}, b.data("item-data"), {
                    "atwho-data-value": d,
                    "atwho-at": this.at
                }), this.callbacks("tpl_eval").call(this, e, c))
            }, c.prototype.insert = function(b, c) {
                var d, e, f, g, h, i, j, k, l, m, n;
                return d = this.$inputor, "true" === d.attr("contentEditable") && (f = "atwho-view-flag atwho-view-flag-" + (this.get_opt("alias") || this.at), g = "" + b + "<span contenteditable='false'>&nbsp;<span>", h = "<span contenteditable='false' class='" + f + "'>" + g + "</span>", e = a(h, this.app.document).data("atwho-data-item", c.data("item-data")), this.app.document.selection && (e = a("<span contenteditable='true'></span>", this.app.document).html(e))), d.is("textarea, input") ? (b = "" + b, l = d.val(), m = l.slice(0, Math.max(this.query.head_pos - this.at.length, 0)), n = "" + m + b + " " + l.slice(this.query.end_pos || 0), d.val(n), d.caret("pos", m.length + b.length + 1)) : (j = this.range) ? (i = j.startOffset - (this.query.end_pos - this.query.head_pos) - this.at.length, j.setStart(j.endContainer, Math.max(i, 0)), j.setEnd(j.endContainer, j.endOffset), j.deleteContents(), j.insertNode(e[0]), j.collapse(!1), k = this.app.window.getSelection(), k.removeAllRanges(), k.addRange(j)) : (j = this.ie8_range) && (j.moveStart("character", this.query.end_pos - this.query.head_pos - this.at.length), j.pasteHTML(g), j.collapse(!1), j.select()), d.is(":focus") || d.focus(), d.change()
            }, c.prototype.render_view = function(a) {
                var b;
                return b = this.get_opt("search_key"), a = this.callbacks("sorter").call(this, this.query.text, a.slice(0, 1001), b), this.view.render(a.slice(0, this.get_opt("limit")))
            }, c.prototype.look_up = function() {
                var b, c;
                if (b = this.catch_query()) return c = function(a) {
                    return a && a.length > 0 ? this.render_view(a) : this.view.hide()
                }, this.model.query(b.text, a.proxy(c, this)), b
            }, c
        }(), i = function() {
            function b(a) {
                this.context = a, this.at = this.context.at, this.storage = this.context.$inputor
            }
            return b.prototype.destroy = function() {
                return this.storage.data(this.at, null)
            }, b.prototype.saved = function() {
                return this.fetch() > 0
            }, b.prototype.query = function(a, b) {
                var c, d, e;
                return c = this.fetch(), d = this.context.get_opt("search_key"), c = this.context.callbacks("filter").call(this.context, a, c, d) || [], e = this.context.callbacks("remote_filter"), c.length > 0 || !e && 0 === c.length ? b(c) : e.call(this.context, a, b)
            }, b.prototype.fetch = function() {
                return this.storage.data(this.at) || []
            }, b.prototype.save = function(a) {
                return this.storage.data(this.at, this.context.callbacks("before_save").call(this.context, a || []))
            }, b.prototype.load = function(a) {
                return !this.saved() && a ? this._load(a) : void 0
            }, b.prototype.reload = function(a) {
                return this._load(a)
            }, b.prototype._load = function(b) {
                return "string" == typeof b ? a.ajax(b, {
                    dataType: "json"
                }).done(function(a) {
                    return function(b) {
                        return a.save(b)
                    }
                }(this)) : this.save(b)
            }, b
        }(), j = function() {
            function b(b) {
                this.context = b, this.$el = a("<div class='atwho-view'><ul class='atwho-view-ul'></ul></div>"), this.timeout_id = null, this.context.$el.append(this.$el), this.bind_event()
            }
            return b.prototype.init = function() {
                var a;
                return a = this.context.get_opt("alias") || this.context.at.charCodeAt(0), this.$el.attr({
                    id: "at-view-" + a
                })
            }, b.prototype.destroy = function() {
                return this.$el.remove()
            }, b.prototype.bind_event = function() {
                var b;
                return b = this.$el.find("ul"), b.on("mouseenter.atwho-view", "li", function(c) {
                    return b.find(".cur").removeClass("cur"), a(c.currentTarget).addClass("cur")
                }).on("click", function(a) {
                    return function(b) {
                        return a.choose(), b.preventDefault()
                    }
                }(this))
            }, b.prototype.visible = function() {
                return this.$el.is(":visible")
            }, b.prototype.choose = function() {
                var a, b;
                return (a = this.$el.find(".cur")).length ? (b = this.context.insert_content_for(a), this.context.insert(this.context.callbacks("before_insert").call(this.context, b, a), a), this.context.trigger("inserted", [a]), this.hide()) : void 0
            }, b.prototype.reposition = function(b) {
                var c, d;
                return b.bottom + this.$el.height() - a(window).scrollTop() > a(window).height() && (b.bottom = b.top - this.$el.height()), c = {
                    left: b.left,
                    top: b.bottom
                }, null != (d = this.context.callbacks("before_reposition")) && d.call(this.context, c), this.$el.offset(c), this.context.trigger("reposition", [c])
            }, b.prototype.next = function() {
                var a, b;
                return a = this.$el.find(".cur").removeClass("cur"), b = a.next(), b.length || (b = this.$el.find("li:first")), b.addClass("cur")
            }, b.prototype.prev = function() {
                var a, b;
                return a = this.$el.find(".cur").removeClass("cur"), b = a.prev(), b.length || (b = this.$el.find("li:last")), b.addClass("cur")
            }, b.prototype.show = function() {
                var a;
                return this.context.mark_range(), this.visible() || (this.$el.show(), this.context.trigger("shown")), (a = this.context.rect()) ? this.reposition(a) : void 0
            }, b.prototype.hide = function(a) {
                var b;
                return isNaN(a && this.visible()) ? (this.context.reset_rect(), this.$el.hide(), this.context.trigger("hidden")) : (b = function(a) {
                    return function() {
                        return a.hide()
                    }
                }(this), clearTimeout(this.timeout_id), this.timeout_id = setTimeout(b, a))
            }, b.prototype.render = function(b) {
                var c, d, e, f, g, h, i;
                if (!(a.isArray(b) && b.length > 0)) return void this.hide();
                for (this.$el.find("ul").empty(), d = this.$el.find("ul"), g = this.context.get_opt("tpl"), h = 0, i = b.length; i > h; h++) e = b[h], e = a.extend({}, e, {
                    "atwho-at": this.context.at
                }), f = this.context.callbacks("tpl_eval").call(this.context, g, e), c = a(this.context.callbacks("highlighter").call(this.context, f, this.context.query.text)), c.data("item-data", e), d.append(c);
                return this.show(), this.context.get_opt("highlight_first") ? d.find("li:first").addClass("cur") : void 0
            }, b
        }(), h = {
            DOWN: 40,
            UP: 38,
            ESC: 27,
            TAB: 9,
            ENTER: 13,
            CTRL: 17,
            P: 80,
            N: 78
        }, g = {
            before_save: function(b) {
                var c, d, e, f;
                if (!a.isArray(b)) return b;
                for (f = [], d = 0, e = b.length; e > d; d++) c = b[d], f.push(a.isPlainObject(c) ? c : {
                    name: c
                });
                return f
            },
            matcher: function(a, b, c) {
                var d, e;
                return a = a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), c && (a = "(?:^|\\s)" + a), e = new RegExp(a + "([A-Za-z0-9_+-]*)$|" + a + "([^\\x00-\\xff]*)$", "gi"), d = e.exec(b), d ? d[2] || d[1] : null
            },
            filter: function(a, b, c) {
                var d, e, f, g;
                for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], ~d[c].toLowerCase().indexOf(a.toLowerCase()) && g.push(d);
                return g
            },
            remote_filter: null,
            sorter: function(a, b, c) {
                var d, e, f, g;
                if (!a) return b;
                for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], d.atwho_order = d[c].toLowerCase().indexOf(a.toLowerCase()), d.atwho_order > -1 && g.push(d);
                return g.sort(function(a, b) {
                    return a.atwho_order - b.atwho_order
                })
            },
            tpl_eval: function(a, b) {
                var c;
                try {
                    return a.replace(/\$\{([^\}]*)\}/g, function(a, c) {
                        return b[c]
                    })
                } catch (d) {
                    return c = d, ""
                }
            },
            highlighter: function(a, b) {
                var c;
                return b ? (c = new RegExp(">\\s*(\\w*)(" + b.replace("+", "\\+") + ")(\\w*)\\s*<", "ig"), a.replace(c, function(a, b, c, d) {
                    return "> " + b + "<strong>" + c + "</strong>" + d + " <"
                })) : a
            },
            before_insert: function(a) {
                return a
            }
        }, c = {
            load: function(a, b) {
                var c;
                return (c = this.controller(a)) ? c.model.load(b) : void 0
            },
            getInsertedItemsWithIDs: function(b) {
                var c, d, e;
                return (c = this.controller(b)) ? (b && (b = "-" + (c.get_opt("alias") || c.at)), d = [], e = a.map(this.$inputor.find("span.atwho-view-flag" + (b || "")), function(b) {
                    var c;
                    return c = a(b).data("atwho-data-item"), d.indexOf(c.id) > -1 ? void 0 : (c.id && (d.push = c.id), c)
                }), [d, e]) : [null, null]
            },
            getInsertedItems: function(a) {
                return c.getInsertedItemsWithIDs.apply(this, [a])[1]
            },
            getInsertedIDs: function(a) {
                return c.getInsertedItemsWithIDs.apply(this, [a])[0]
            },
            setIframe: function(a) {
                return this.setIframe(a)
            },
            run: function() {
                return this.dispatch()
            },
            destroy: function() {
                return this.shutdown(), this.$inputor.data("atwho", null)
            }
        }, e = {
            init: function(b) {
                var c, e;
                return e = (c = a(this)).data("atwho"), e || c.data("atwho", e = new d(this)), e.reg(b.at, b), this
            }
        }, b = a("<div id='atwho-container'></div>"), a.fn.atwho = function(d) {
            var f, g;
            return g = arguments, a("body").append(b), f = null, this.filter("textarea, input, [contenteditable=true]").each(function() {
                var b;
                return "object" != typeof d && d ? c[d] ? (b = a(this).data("atwho")) ? f = c[d].apply(b, Array.prototype.slice.call(g, 1)) : void 0 : a.error("Method " + d + " does not exist on jQuery.caret") : e.init.apply(this, g)
            }), f || this
        }, a.fn.atwho["default"] = {
            at: void 0,
            alias: void 0,
            data: null,
            tpl: "<li data-value='${atwho-at}${name}'>${name}</li>",
            insert_tpl: "<span>${atwho-data-value}</span>",
            callbacks: g,
            search_key: "name",
            start_with_space: !0,
            highlight_first: !0,
            limit: 5,
            max_len: 20,
            display_timeout: 300,
            delay: null
        }
    })
}).call(this);
var hljs = new function() {
    function k(v) {
        return v.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function t(v) {
        return v.nodeName.toLowerCase()
    }

    function i(w, x) {
        var v = w && w.exec(x);
        return v && v.index == 0
    }

    function d(v) {
        return Array.prototype.map.call(v.childNodes, function(w) {
            if (w.nodeType == 3) {
                return b.useBR ? w.nodeValue.replace(/\n/g, "") : w.nodeValue
            }
            if (t(w) == "br") {
                return "\n"
            }
            return d(w)
        }).join("")
    }

    function r(w) {
        var v = (w.className + " " + (w.parentNode ? w.parentNode.className : "")).split(/\s+/);
        v = v.map(function(x) {
            return x.replace(/^language-/, "")
        });
        return v.filter(function(x) {
            return j(x) || x == "no-highlight"
        })[0]
    }

    function o(x, y) {
        var v = {};
        for (var w in x) {
            v[w] = x[w]
        }
        if (y) {
            for (var w in y) {
                v[w] = y[w]
            }
        }
        return v
    }

    function u(x) {
        var v = [];
        (function w(y, z) {
            for (var A = y.firstChild; A; A = A.nextSibling) {
                if (A.nodeType == 3) {
                    z += A.nodeValue.length
                } else {
                    if (t(A) == "br") {
                        z += 1
                    } else {
                        if (A.nodeType == 1) {
                            v.push({
                                event: "start",
                                offset: z,
                                node: A
                            });
                            z = w(A, z);
                            v.push({
                                event: "stop",
                                offset: z,
                                node: A
                            })
                        }
                    }
                }
            }
            return z
        })(x, 0);
        return v
    }

    function q(w, y, C) {
        var x = 0;
        var F = "";
        var z = [];

        function B() {
            if (!w.length || !y.length) {
                return w.length ? w : y
            }
            if (w[0].offset != y[0].offset) {
                return (w[0].offset < y[0].offset) ? w : y
            }
            return y[0].event == "start" ? w : y
        }

        function A(H) {
            function G(I) {
                return " " + I.nodeName + '="' + k(I.value) + '"'
            }
            F += "<" + t(H) + Array.prototype.map.call(H.attributes, G).join("") + ">"
        }

        function E(G) {
            F += "</" + t(G) + ">"
        }

        function v(G) {
            (G.event == "start" ? A : E)(G.node)
        }
        while (w.length || y.length) {
            var D = B();
            F += k(C.substr(x, D[0].offset - x));
            x = D[0].offset;
            if (D == w) {
                z.reverse().forEach(E);
                do {
                    v(D.splice(0, 1)[0]);
                    D = B()
                } while (D == w && D.length && D[0].offset == x);
                z.reverse().forEach(A)
            } else {
                if (D[0].event == "start") {
                    z.push(D[0].node)
                } else {
                    z.pop()
                }
                v(D.splice(0, 1)[0])
            }
        }
        return F + k(C.substr(x))
    }

    function m(y) {
        function v(z) {
            return (z && z.source) || z
        }

        function w(A, z) {
            return RegExp(v(A), "m" + (y.cI ? "i" : "") + (z ? "g" : ""))
        }

        function x(D, C) {
            if (D.compiled) {
                return
            }
            D.compiled = true;
            D.k = D.k || D.bK;
            if (D.k) {
                var z = {};

                function E(G, F) {
                    if (y.cI) {
                        F = F.toLowerCase()
                    }
                    F.split(" ").forEach(function(H) {
                        var I = H.split("|");
                        z[I[0]] = [G, I[1] ? Number(I[1]) : 1]
                    })
                }
                if (typeof D.k == "string") {
                    E("keyword", D.k)
                } else {
                    Object.keys(D.k).forEach(function(F) {
                        E(F, D.k[F])
                    })
                }
                D.k = z
            }
            D.lR = w(D.l || /\b[A-Za-z0-9_]+\b/, true);
            if (C) {
                if (D.bK) {
                    D.b = D.bK.split(" ").join("|")
                }
                if (!D.b) {
                    D.b = /\B|\b/
                }
                D.bR = w(D.b);
                if (!D.e && !D.eW) {
                    D.e = /\B|\b/
                }
                if (D.e) {
                    D.eR = w(D.e)
                }
                D.tE = v(D.e) || "";
                if (D.eW && C.tE) {
                    D.tE += (D.e ? "|" : "") + C.tE
                }
            }
            if (D.i) {
                D.iR = w(D.i)
            }
            if (D.r === undefined) {
                D.r = 1
            }
            if (!D.c) {
                D.c = []
            }
            var B = [];
            D.c.forEach(function(F) {
                if (F.v) {
                    F.v.forEach(function(G) {
                        B.push(o(F, G))
                    })
                } else {
                    B.push(F == "self" ? D : F)
                }
            });
            D.c = B;
            D.c.forEach(function(F) {
                x(F, D)
            });
            if (D.starts) {
                x(D.starts, C)
            }
            var A = D.c.map(function(F) {
                return F.bK ? "\\.?\\b(" + F.b + ")\\b\\.?" : F.b
            }).concat([D.tE]).concat([D.i]).map(v).filter(Boolean);
            D.t = A.length ? w(A.join("|"), true) : {
                exec: function(F) {
                    return null
                }
            };
            D.continuation = {}
        }
        x(y)
    }

    function c(S, L, J, R) {
        function v(U, V) {
            for (var T = 0; T < V.c.length; T++) {
                if (i(V.c[T].bR, U)) {
                    return V.c[T]
                }
            }
        }

        function z(U, T) {
            if (i(U.eR, T)) {
                return U
            }
            if (U.eW) {
                return z(U.parent, T)
            }
        }

        function A(T, U) {
            return !J && i(U.iR, T)
        }

        function E(V, T) {
            var U = M.cI ? T[0].toLowerCase() : T[0];
            return V.k.hasOwnProperty(U) && V.k[U]
        }

        function w(Z, X, W, V) {
            var T = V ? "" : b.classPrefix,
                U = '<span class="' + T,
                Y = W ? "" : "</span>";
            U += Z + '">';
            return U + X + Y
        }

        function N() {
            var U = k(C);
            if (!I.k) {
                return U
            }
            var T = "";
            var X = 0;
            I.lR.lastIndex = 0;
            var V = I.lR.exec(U);
            while (V) {
                T += U.substr(X, V.index - X);
                var W = E(I, V);
                if (W) {
                    H += W[1];
                    T += w(W[0], V[0])
                } else {
                    T += V[0]
                }
                X = I.lR.lastIndex;
                V = I.lR.exec(U)
            }
            return T + U.substr(X)
        }

        function F() {
            if (I.sL && !f[I.sL]) {
                return k(C)
            }
            var T = I.sL ? c(I.sL, C, true, I.continuation.top) : g(C);
            if (I.r > 0) {
                H += T.r
            }
            if (I.subLanguageMode == "continuous") {
                I.continuation.top = T.top
            }
            return w(T.language, T.value, false, true)
        }

        function Q() {
            return I.sL !== undefined ? F() : N()
        }

        function P(V, U) {
            var T = V.cN ? w(V.cN, "", true) : "";
            if (V.rB) {
                D += T;
                C = ""
            } else {
                if (V.eB) {
                    D += k(U) + T;
                    C = ""
                } else {
                    D += T;
                    C = U
                }
            }
            I = Object.create(V, {
                parent: {
                    value: I
                }
            })
        }

        function G(T, X) {
            C += T;
            if (X === undefined) {
                D += Q();
                return 0
            }
            var V = v(X, I);
            if (V) {
                D += Q();
                P(V, X);
                return V.rB ? 0 : X.length
            }
            var W = z(I, X);
            if (W) {
                var U = I;
                if (!(U.rE || U.eE)) {
                    C += X
                }
                D += Q();
                do {
                    if (I.cN) {
                        D += "</span>"
                    }
                    H += I.r;
                    I = I.parent
                } while (I != W.parent);
                if (U.eE) {
                    D += k(X)
                }
                C = "";
                if (W.starts) {
                    P(W.starts, "")
                }
                return U.rE ? 0 : X.length
            }
            if (A(X, I)) {
                throw new Error('Illegal lexeme "' + X + '" for mode "' + (I.cN || "<unnamed>") + '"')
            }
            C += X;
            return X.length || 1
        }
        var M = j(S);
        if (!M) {
            throw new Error('Unknown language: "' + S + '"')
        }
        m(M);
        var I = R || M;
        var D = "";
        for (var K = I; K != M; K = K.parent) {
            if (K.cN) {
                D = w(K.cN, D, true)
            }
        }
        var C = "";
        var H = 0;
        try {
            var B, y, x = 0;
            while (true) {
                I.t.lastIndex = x;
                B = I.t.exec(L);
                if (!B) {
                    break
                }
                y = G(L.substr(x, B.index - x), B[0]);
                x = B.index + y
            }
            G(L.substr(x));
            for (var K = I; K.parent; K = K.parent) {
                if (K.cN) {
                    D += "</span>"
                }
            }
            return {
                r: H,
                value: D,
                language: S,
                top: I
            }
        } catch (O) {
            if (O.message.indexOf("Illegal") != -1) {
                return {
                    r: 0,
                    value: k(L)
                }
            } else {
                throw O
            }
        }
    }

    function g(y, x) {
        x = x || b.languages || Object.keys(f);
        var v = {
            r: 0,
            value: k(y)
        };
        var w = v;
        x.forEach(function(z) {
            if (!j(z)) {
                return
            }
            var A = c(z, y, false);
            A.language = z;
            if (A.r > w.r) {
                w = A
            }
            if (A.r > v.r) {
                w = v;
                v = A
            }
        });
        if (w.language) {
            v.second_best = w
        }
        return v
    }

    function h(v) {
        if (b.tabReplace) {
            v = v.replace(/^((<[^>]+>|\t)+)/gm, function(w, z, y, x) {
                return z.replace(/\t/g, b.tabReplace)
            })
        }
        if (b.useBR) {
            v = v.replace(/\n/g, "<br>")
        }
        return v
    }

    function p(z) {
        var y = d(z);
        var A = r(z);
        if (A == "no-highlight") {
            return
        }
        var v = A ? c(A, y, true) : g(y);
        var w = u(z);
        if (w.length) {
            var x = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
            x.innerHTML = v.value;
            v.value = q(w, u(x), y)
        }
        v.value = h(v.value);
        z.innerHTML = v.value;
        z.className += " hljs " + (!A && v.language || "");
        z.result = {
            language: v.language,
            re: v.r
        };
        if (v.second_best) {
            z.second_best = {
                language: v.second_best.language,
                re: v.second_best.r
            }
        }
    }
    var b = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: false,
        languages: undefined
    };

    function s(v) {
        b = o(b, v)
    }

    function l() {
        if (l.called) {
            return
        }
        l.called = true;
        var v = document.querySelectorAll("pre code");
        Array.prototype.forEach.call(v, p)
    }

    function a() {
        addEventListener("DOMContentLoaded", l, false);
        addEventListener("load", l, false)
    }
    var f = {};
    var n = {};

    function e(v, x) {
        var w = f[v] = x(this);
        if (w.aliases) {
            w.aliases.forEach(function(y) {
                n[y] = v
            })
        }
    }

    function j(v) {
        return f[v] || f[n[v]]
    }
    this.highlight = c;
    this.highlightAuto = g;
    this.fixMarkup = h;
    this.highlightBlock = p;
    this.configure = s;
    this.initHighlighting = l;
    this.initHighlightingOnLoad = a;
    this.registerLanguage = e;
    this.getLanguage = j;
    this.inherit = o;
    this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
    this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
    this.NR = "\\b\\d+(\\.\\d+)?";
    this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    this.BNR = "\\b(0b[01]+)";
    this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    this.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    };
    this.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [this.BE]
    };
    this.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [this.BE]
    };
    this.CLCM = {
        cN: "comment",
        b: "//",
        e: "$"
    };
    this.CBLCLM = {
        cN: "comment",
        b: "/\\*",
        e: "\\*/"
    };
    this.HCM = {
        cN: "comment",
        b: "#",
        e: "$"
    };
    this.NM = {
        cN: "number",
        b: this.NR,
        r: 0
    };
    this.CNM = {
        cN: "number",
        b: this.CNR,
        r: 0
    };
    this.BNM = {
        cN: "number",
        b: this.BNR,
        r: 0
    };
    this.REGEXP_MODE = {
        cN: "regexp",
        b: /\//,
        e: /\/[gim]*/,
        i: /\n/,
        c: [this.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [this.BE]
        }]
    };
    this.TM = {
        cN: "title",
        b: this.IR,
        r: 0
    };
    this.UTM = {
        cN: "title",
        b: this.UIR,
        r: 0
    }
}();
hljs.registerLanguage("bash", function(b) {
    var a = {
        cN: "variable",
        v: [{
            b: /\$[\w\d#@][\w\d_]*/
        }, {
            b: /\$\{(.*?)\}/
        }]
    };
    var d = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [b.BE, a, {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [b.BE]
        }]
    };
    var c = {
        cN: "string",
        b: /'/,
        e: /'/
    };
    return {
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for break continue while in do done exit return set declare case esac export exec",
            literal: "true false",
            built_in: "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "shebang",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: true,
            c: [b.inherit(b.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, b.HCM, b.NM, d, c, a]
    }
});
hljs.registerLanguage("cs", function(b) {
    var a = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";
    return {
        k: a,
        c: [{
            cN: "comment",
            b: "///",
            e: "$",
            rB: true,
            c: [{
                cN: "xmlDocTag",
                b: "///|<!--|-->"
            }, {
                cN: "xmlDocTag",
                b: "</?",
                e: ">"
            }]
        }, b.CLCM, b.CBLCLM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {
            cN: "string",
            b: '@"',
            e: '"',
            c: [{
                b: '""'
            }]
        }, b.ASM, b.QSM, b.CNM, {
            bK: "protected public private internal",
            e: /[{;=]/,
            k: a,
            c: [{
                bK: "class namespace interface",
                starts: {
                    c: [b.TM]
                }
            }, {
                b: b.IR + "\\s*\\(",
                rB: true,
                c: [b.TM]
            }]
        }]
    }
});
hljs.registerLanguage("ruby", function(e) {
    var h = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
    var g = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor";
    var a = {
        cN: "yardoctag",
        b: "@[A-Za-z]+"
    };
    var i = {
        cN: "comment",
        v: [{
            b: "#",
            e: "$",
            c: [a]
        }, {
            b: "^\\=begin",
            e: "^\\=end",
            c: [a],
            r: 10
        }, {
            b: "^__END__",
            e: "\\n$"
        }]
    };
    var c = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        k: g
    };
    var d = {
        cN: "string",
        c: [e.BE, c],
        v: [{
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        }, {
            b: "%[qw]?\\(",
            e: "\\)"
        }, {
            b: "%[qw]?\\[",
            e: "\\]"
        }, {
            b: "%[qw]?{",
            e: "}"
        }, {
            b: "%[qw]?<",
            e: ">",
            r: 10
        }, {
            b: "%[qw]?/",
            e: "/",
            r: 10
        }, {
            b: "%[qw]?%",
            e: "%",
            r: 10
        }, {
            b: "%[qw]?-",
            e: "-",
            r: 10
        }, {
            b: "%[qw]?\\|",
            e: "\\|",
            r: 10
        }, {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
        }]
    };
    var b = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        k: g
    };
    var f = [d, i, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [e.inherit(e.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
        }), {
            cN: "inheritance",
            b: "<\\s*",
            c: [{
                cN: "parent",
                b: "(" + e.IR + "::)?" + e.IR
            }]
        }, i]
    }, {
        cN: "function",
        bK: "def",
        e: " |$|;",
        r: 0,
        c: [e.inherit(e.TM, {
            b: h
        }), b, i]
    }, {
        cN: "constant",
        b: "(::)?(\\b[A-Z]\\w*(::)?)+",
        r: 0
    }, {
        cN: "symbol",
        b: ":",
        c: [d, {
            b: h
        }],
        r: 0
    }, {
        cN: "symbol",
        b: e.UIR + "(\\!|\\?)?:",
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
        b: "(" + e.RSR + ")\\s*",
        c: [i, {
            cN: "regexp",
            c: [e.BE, c],
            i: /\n/,
            v: [{
                b: "/",
                e: "/[a-z]*"
            }, {
                b: "%r{",
                e: "}[a-z]*"
            }, {
                b: "%r\\(",
                e: "\\)[a-z]*"
            }, {
                b: "%r!",
                e: "![a-z]*"
            }, {
                b: "%r\\[",
                e: "\\][a-z]*"
            }]
        }],
        r: 0
    }];
    c.c = f;
    b.c = f;
    return {
        k: g,
        c: f
    }
});
hljs.registerLanguage("diff", function(a) {
    return {
        c: [{
            cN: "chunk",
            r: 10,
            v: [{
                b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/
            }, {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            }, {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            }]
        }, {
            cN: "header",
            v: [{
                b: /Index: /,
                e: /$/
            }, {
                b: /=====/,
                e: /=====$/
            }, {
                b: /^\-\-\-/,
                e: /$/
            }, {
                b: /^\*{3} /,
                e: /$/
            }, {
                b: /^\+\+\+/,
                e: /$/
            }, {
                b: /\*{5}/,
                e: /\*{5}$/
            }]
        }, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        }, {
            cN: "change",
            b: "^\\!",
            e: "$"
        }]
    }
});
hljs.registerLanguage("javascript", function(a) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"
        },
        c: [{
            cN: "pi",
            b: /^\s*('|")use strict('|")/,
            r: 10
        }, a.ASM, a.QSM, a.CLCM, a.CBLCLM, a.CNM, {
            b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [a.CLCM, a.CBLCLM, a.REGEXP_MODE, {
                b: /</,
                e: />;/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            c: [a.inherit(a.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [a.CLCM, a.CBLCLM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + a.IR,
            r: 0
        }]
    }
});
hljs.registerLanguage("xml", function(a) {
    var c = "[A-Za-z0-9\\._:-]+";
    var d = {
        b: /<\?(php)?(?!\w)/,
        e: /\?>/,
        sL: "php",
        subLanguageMode: "continuous"
    };
    var b = {
        eW: true,
        i: /</,
        r: 0,
        c: [d, {
            cN: "attribute",
            b: c,
            r: 0
        }, {
            b: "=",
            r: 0,
            c: [{
                cN: "value",
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s\/>]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html"],
        cI: true,
        c: [{
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, {
            cN: "comment",
            b: "<!--",
            e: "-->",
            r: 10
        }, {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [b],
            starts: {
                e: "</style>",
                rE: true,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [b],
            starts: {
                e: "<\/script>",
                rE: true,
                sL: "javascript"
            }
        }, {
            b: "<%",
            e: "%>",
            sL: "vbscript"
        }, d, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "title",
                b: "[^ /><]+",
                r: 0
            }, b]
        }]
    }
});
hljs.registerLanguage("markdown", function(a) {
    return {
        c: [{
            cN: "header",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "blockquote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "`.+?`"
            }, {
                b: "^( {4}|\t)",
                e: "$",
                r: 0
            }]
        }, {
            cN: "horizontal_rule",
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].+?[\\)\\]]",
            rB: true,
            c: [{
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: true,
                rE: true,
                r: 0
            }, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: true,
                eE: true
            }, {
                cN: "link_reference",
                b: "\\]\\[",
                e: "\\]",
                eB: true,
                eE: true,
            }],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            e: "$",
            rB: true,
            c: [{
                cN: "link_reference",
                b: "\\[",
                e: "\\]",
                eB: true,
                eE: true
            }, {
                cN: "link_url",
                b: "\\s",
                e: "$"
            }]
        }]
    }
});
hljs.registerLanguage("css", function(a) {
    var b = "[a-zA-Z-][a-zA-Z0-9_-]*";
    var c = {
        cN: "function",
        b: b + "\\(",
        e: "\\)",
        c: ["self", a.NM, a.ASM, a.QSM]
    };
    return {
        cI: true,
        i: "[=/|']",
        c: [a.CBLCLM, {
            cN: "id",
            b: "\\#[A-Za-z0-9_-]+"
        }, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "attr_selector",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "pseudo",
            b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: true,
                eE: true,
                r: 0,
                c: [c, a.ASM, a.QSM, a.NM]
            }]
        }, {
            cN: "tag",
            b: b,
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: "[^\\s]",
            r: 0,
            c: [a.CBLCLM, {
                cN: "rule",
                b: "[^\\s]",
                rB: true,
                e: ";",
                eW: true,
                c: [{
                    cN: "attribute",
                    b: "[A-Z\\_\\.\\-]+",
                    e: ":",
                    eE: true,
                    i: "[^\\s]",
                    starts: {
                        cN: "value",
                        eW: true,
                        eE: true,
                        c: [c, a.NM, a.QSM, a.ASM, a.CBLCLM, {
                            cN: "hexcolor",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            }]
        }]
    }
});
hljs.registerLanguage("http", function(a) {
    return {
        i: "\\S",
        c: [{
            cN: "status",
            b: "^HTTP/[0-9\\.]+",
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: true,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: true,
                eE: true
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: true,
            i: "\\n|\\s|=",
            starts: {
                cN: "string",
                e: "$"
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: "",
                eW: true
            }
        }]
    }
});
hljs.registerLanguage("java", function(b) {
    var a = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";
    return {
        k: a,
        i: /<\//,
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            c: [{
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            }],
            r: 10
        }, b.CLCM, b.CBLCLM, b.ASM, b.QSM, {
            bK: "protected public private",
            e: /[{;=]/,
            k: a,
            c: [{
                cN: "class",
                bK: "class interface",
                eW: true,
                i: /[:"<>]/,
                c: [{
                    bK: "extends implements",
                    r: 10
                }, b.UTM]
            }, {
                b: b.UIR + "\\s*\\(",
                rB: true,
                c: [b.UTM]
            }]
        }, b.CNM, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        }]
    }
});
hljs.registerLanguage("php", function(b) {
    var e = {
        cN: "variable",
        b: "\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"
    };
    var a = {
        cN: "preprocessor",
        b: /<\?(php)?|\?>/
    };
    var c = {
        cN: "string",
        c: [b.BE, a],
        v: [{
            b: 'b"',
            e: '"'
        }, {
            b: "b'",
            e: "'"
        }, b.inherit(b.ASM, {
            i: null
        }), b.inherit(b.QSM, {
            i: null
        })]
    };
    var d = {
        v: [b.BNM, b.CNM]
    };
    return {
        cI: true,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [b.CLCM, b.HCM, {
            cN: "comment",
            b: "/\\*",
            e: "\\*/",
            c: [{
                cN: "phpdoc",
                b: "\\s@[A-Za-z]+"
            }, a]
        }, {
            cN: "comment",
            b: "__halt_compiler.+?;",
            eW: true,
            k: "__halt_compiler",
            l: b.UIR
        }, {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [b.BE]
        }, a, e, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            i: "\\$|\\[|%",
            c: [b.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", e, b.CBLCLM, c, d]
            }]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements",
                r: 10
            }, b.UTM]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [b.UTM]
        }, {
            bK: "use",
            e: ";",
            c: [b.UTM]
        }, {
            b: "=>"
        }, c, d]
    }
});
hljs.registerLanguage("python", function(a) {
    var f = {
        cN: "prompt",
        b: /^(>>>|\.\.\.) /
    };
    var b = {
        cN: "string",
        c: [a.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [f],
            r: 10
        }, {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [f],
            r: 10
        }, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        }, {
            b: /(b|br)'/,
            e: /'/,
        }, {
            b: /(b|br)"/,
            e: /"/,
        }, a.ASM, a.QSM]
    };
    var d = {
        cN: "number",
        r: 0,
        v: [{
            b: a.BNR + "[lLjJ]?"
        }, {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        }, {
            b: a.CNR + "[lLjJ]?"
        }]
    };
    var e = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: ["self", f, d, b]
    };
    var c = {
        e: /:/,
        i: /[${=;\n]/,
        c: [a.UTM, e]
    };
    return {
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [f, d, b, a.HCM, a.inherit(c, {
            cN: "function",
            bK: "def",
            r: 10
        }), a.inherit(c, {
            cN: "class",
            bK: "class"
        }), {
            cN: "decorator",
            b: /@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
});
hljs.registerLanguage("sql", function(a) {
    return {
        cI: true,
        i: /[<>]/,
        c: [{
            cN: "operator",
            b: "\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",
            e: ";",
            eW: true,
            k: {
                keyword: "all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",
                aggregate: "count sum min max avg"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [a.BE, {
                    b: "''"
                }]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [a.BE, {
                    b: '""'
                }]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [a.BE]
            }, a.CNM]
        }, a.CBLCLM, {
            cN: "comment",
            b: "--",
            e: "$"
        }]
    }
});
hljs.registerLanguage("ini", function(a) {
    return {
        cI: true,
        i: /\S/,
        c: [{
            cN: "comment",
            b: ";",
            e: "$"
        }, {
            cN: "title",
            b: "^\\[",
            e: "\\]"
        }, {
            cN: "setting",
            b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
            e: "$",
            c: [{
                cN: "value",
                eW: true,
                k: "on off true false yes no",
                c: [a.QSM, a.NM],
                r: 0
            }]
        }]
    }
});
hljs.registerLanguage("perl", function(c) {
    var d = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";
    var f = {
        cN: "subst",
        b: "[$@]\\{",
        e: "\\}",
        k: d
    };
    var g = {
        b: "->{",
        e: "}"
    };
    var a = {
        cN: "variable",
        v: [{
            b: /\$\d/
        }, {
            b: /[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/
        }, {
            b: /[\$\%\@\*][^\s\w{]/,
            r: 0
        }]
    };
    var e = {
        cN: "comment",
        b: "^(__END__|__DATA__)",
        e: "\\n$",
        r: 5
    };
    var h = [c.BE, f, a];
    var b = [a, c.HCM, e, {
        cN: "comment",
        b: "^\\=\\w",
        e: "\\=cut",
        eW: true
    }, g, {
        cN: "string",
        c: h,
        v: [{
            b: "q[qwxr]?\\s*\\(",
            e: "\\)",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\[",
            e: "\\]",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\|",
            e: "\\|",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\<",
            e: "\\>",
            r: 5
        }, {
            b: "qw\\s+q",
            e: "q",
            r: 5
        }, {
            b: "'",
            e: "'",
            c: [c.BE]
        }, {
            b: '"',
            e: '"'
        }, {
            b: "`",
            e: "`",
            c: [c.BE]
        }, {
            b: "{\\w+}",
            c: [],
            r: 0
        }, {
            b: "-?\\w+\\s*\\=\\>",
            c: [],
            r: 0
        }]
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\/\\/|" + c.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [c.HCM, e, {
            cN: "regexp",
            b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
            r: 10
        }, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [c.BE],
            r: 0
        }]
    }, {
        cN: "sub",
        bK: "sub",
        e: "(\\s*\\(.*?\\))?[;{]",
        r: 5
    }, {
        cN: "operator",
        b: "-\\w\\b",
        r: 0
    }];
    f.c = b;
    g.c = b;
    return {
        k: d,
        c: b
    }
});
hljs.registerLanguage("objectivec", function(a) {
    var d = {
        keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    };
    var c = /[a-zA-Z@][a-zA-Z0-9_]*/;
    var b = "@interface @class @protocol @implementation";
    return {
        k: d,
        l: c,
        i: "</",
        c: [a.CLCM, a.CBLCLM, a.CNM, a.QSM, {
            cN: "string",
            b: "'",
            e: "[^\\\\]'",
            i: "[^\\\\][^']"
        }, {
            cN: "preprocessor",
            b: "#import",
            e: "$",
            c: [{
                cN: "title",
                b: '"',
                e: '"'
            }, {
                cN: "title",
                b: "<",
                e: ">"
            }]
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$"
        }, {
            cN: "class",
            b: "(" + b.split(" ").join("|") + ")\\b",
            e: "({|$)",
            k: b,
            l: c,
            c: [a.UTM]
        }, {
            cN: "variable",
            b: "\\." + a.UIR,
            r: 0
        }]
    }
});
hljs.registerLanguage("coffeescript", function(c) {
    var b = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
        built_in: "npm require console print module exports global window document"
    };
    var a = "[A-Za-z$_][0-9A-Za-z$_]*";
    var f = c.inherit(c.TM, {
        b: a
    });
    var e = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: b
    };
    var d = [c.BNM, c.inherit(c.CNM, {
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }), {
        cN: "string",
        v: [{
            b: /'''/,
            e: /'''/,
            c: [c.BE]
        }, {
            b: /'/,
            e: /'/,
            c: [c.BE]
        }, {
            b: /"""/,
            e: /"""/,
            c: [c.BE, e]
        }, {
            b: /"/,
            e: /"/,
            c: [c.BE, e]
        }]
    }, {
        cN: "regexp",
        v: [{
            b: "///",
            e: "///",
            c: [e, c.HCM]
        }, {
            b: "//[gim]*",
            r: 0
        }, {
            b: "/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"
        }]
    }, {
        cN: "property",
        b: "@" + a
    }, {
        b: "`",
        e: "`",
        eB: true,
        eE: true,
        sL: "javascript"
    }];
    e.c = d;
    return {
        k: b,
        c: d.concat([{
            cN: "comment",
            b: "###",
            e: "###"
        }, c.HCM, {
            cN: "function",
            b: "(" + a + "\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",
            e: "[-=]>",
            rB: true,
            c: [f, {
                cN: "params",
                b: "\\(",
                rB: true,
                c: [{
                    b: /\(/,
                    e: /\)/,
                    k: b,
                    c: ["self"].concat(d)
                }]
            }]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{
                bK: "extends",
                eW: true,
                i: /[:="\[\]]/,
                c: [f]
            }, f]
        }, {
            cN: "attribute",
            b: a + ":",
            e: ":",
            rB: true,
            eE: true,
            r: 0
        }])
    }
});
hljs.registerLanguage("nginx", function(c) {
    var b = {
        cN: "variable",
        v: [{
            b: /\$\d+/
        }, {
            b: /\$\{/,
            e: /}/
        }, {
            b: "[\\$\\@]" + c.UIR
        }]
    };
    var a = {
        eW: true,
        l: "[a-z/_]+",
        k: {
            built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        r: 0,
        i: "=>",
        c: [c.HCM, {
            cN: "string",
            c: [c.BE, b],
            v: [{
                b: /"/,
                e: /"/
            }, {
                b: /'/,
                e: /'/
            }]
        }, {
            cN: "url",
            b: "([a-z]+):/",
            e: "\\s",
            eW: true,
            eE: true
        }, {
            cN: "regexp",
            c: [c.BE, b],
            v: [{
                b: "\\s\\^",
                e: "\\s|{|;",
                rE: true
            }, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: true
            }, {
                b: "\\*(\\.[a-z\\-]+)+"
            }, {
                b: "([a-z\\-]+\\.)+\\*"
            }]
        }, {
            cN: "number",
            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        }, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, b]
    };
    return {
        c: [c.HCM, {
            b: c.UIR + "\\s",
            e: ";|{",
            rB: true,
            c: [c.inherit(c.UTM, {
                starts: a
            })],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
});
hljs.registerLanguage("json", function(a) {
    var e = {
        literal: "true false null"
    };
    var d = [a.QSM, a.CNM];
    var c = {
        cN: "value",
        e: ",",
        eW: true,
        eE: true,
        c: d,
        k: e
    };
    var b = {
        b: "{",
        e: "}",
        c: [{
            cN: "attribute",
            b: '\\s*"',
            e: '"\\s*:\\s*',
            eB: true,
            eE: true,
            c: [a.BE],
            i: "\\n",
            starts: c
        }],
        i: "\\S"
    };
    var f = {
        b: "\\[",
        e: "\\]",
        c: [a.inherit(c, {
            cN: null
        })],
        i: "\\S"
    };
    d.splice(d.length, 0, b, f);
    return {
        c: d,
        k: e,
        i: "\\S"
    }
});
hljs.registerLanguage("apache", function(a) {
    var b = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        cI: true,
        c: [a.HCM, {
            cN: "tag",
            b: "</?",
            e: ">"
        }, {
            cN: "keyword",
            b: /\w+/,
            r: 0,
            k: {
                common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [{
                    cN: "sqbracket",
                    b: "\\s\\[",
                    e: "\\]$"
                }, {
                    cN: "cbracket",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", b]
                }, b, a.QSM]
            }
        }],
        i: /\S/
    }
});
hljs.registerLanguage("cpp", function(a) {
    var b = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: ["c"],
        k: b,
        i: "</",
        c: [a.CLCM, a.CBLCLM, a.QSM, {
            cN: "string",
            b: "'\\\\?.",
            e: "'",
            i: "."
        }, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, a.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            c: [{
                b: "include\\s*<",
                e: ">",
                i: "\\n"
            }, a.CLCM]
        }, {
            cN: "stl_container",
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: b,
            r: 10,
            c: ["self"]
        }]
    }
});
hljs.registerLanguage("makefile", function(a) {
    var b = {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [a.BE]
    };
    return {
        c: [a.HCM, {
            b: /^\w+\s*\W*=/,
            rB: true,
            r: 0,
            starts: {
                cN: "constant",
                e: /\s*\W*=/,
                eE: true,
                starts: {
                    e: /$/,
                    r: 0,
                    c: [b],
                }
            }
        }, {
            cN: "title",
            b: /^[\w]+:\s*$/
        }, {
            cN: "phony",
            b: /^\.PHONY:/,
            e: /$/,
            k: ".PHONY",
            l: /[\.\w]+/
        }, {
            b: /^\t+/,
            e: /$/,
            c: [a.QSM, b]
        }]
    }
});
! function() {
    function b(b) {
        this.tokens = [], this.tokens.links = {}, this.options = b || k.defaults, this.rules = a.normal, this.options.gfm && (this.rules = this.options.tables ? a.tables : a.gfm)
    }

    function d(a, b) {
        if (this.options = b || k.defaults, this.links = a, this.rules = c.normal, this.renderer = this.options.renderer || new e, !this.links) throw new Error("Tokens array requires a `links` property.");
        this.options.gfm ? this.rules = this.options.breaks ? c.breaks : c.gfm : this.options.pedantic && (this.rules = c.pedantic)
    }

    function e() {}

    function f(a) {
        this.tokens = [], this.token = null, this.options = a || k.defaults, this.options.renderer = this.options.renderer || new e, this.renderer = this.options.renderer
    }

    function g(a, b) {
        return a.replace(b ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function h(a, b) {
        return a = a.source, b = b || "",
            function c(d, e) {
                return d ? (e = e.source || e, e = e.replace(/(^|[^\[])\^/g, "$1"), a = a.replace(d, e), c) : new RegExp(a, b)
            }
    }

    function i() {}

    function j(a) {
        for (var c, d, b = 1; b < arguments.length; b++) {
            c = arguments[b];
            for (d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
        }
        return a
    }

    function k(a, c, d) {
        if (d || "function" == typeof c) {
            d || (d = c, c = null), c = j({}, k.defaults, c || {});
            var h, i, e = c.highlight,
                l = 0;
            try {
                h = b.lex(a, c)
            } catch (m) {
                return d(m)
            }
            i = h.length;
            var n = function() {
                var a, b;
                try {
                    a = f.parse(h, c)
                } catch (g) {
                    b = g
                }
                return c.highlight = e, b ? d(b) : d(null, a)
            };
            if (!e || e.length < 3) return n();
            if (delete c.highlight, !i) return n();
            for (; l < h.length; l++) ! function(a) {
                return "code" !== a.type ? --i || n() : e(a.text, a.lang, function(b, c) {
                    return null == c || c === a.text ? --i || n() : (a.text = c, a.escaped = !0, --i || n(), void 0)
                })
            }(h[l])
        } else try {
            return c && (c = j({}, k.defaults, c)), f.parse(b.lex(a, c), c)
        } catch (m) {
            if (m.message += "\nPlease report this to https://github.com/chjj/marked.", (c || k.defaults).silent) return "<p>An error occured:</p><pre>" + g(m.message + "", !0) + "</pre>";
            throw m
        }
    }
    var a = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: i,
        hr: /^( *[-*_]){3,} *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
        nptable: i,
        lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
        blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
        list: /^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
        table: i,
        paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
        text: /^[^\n]+/
    };
    a.bullet = /(?:[*+-]|\d+\.)/, a.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, a.item = h(a.item, "gm")(/bull/g, a.bullet)(), a.list = h(a.list)(/bull/g, a.bullet)("hr", /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)(), a._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b", a.html = h(a.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, a._tag)(), a.paragraph = h(a.paragraph)("hr", a.hr)("heading", a.heading)("lheading", a.lheading)("blockquote", a.blockquote)("tag", "<" + a._tag)("def", a.def)(), a.normal = j({}, a), a.gfm = j({}, a.normal, {
        fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
        paragraph: /^/
    }), a.gfm.paragraph = h(a.paragraph)("(?!", "(?!" + a.gfm.fences.source.replace("\\1", "\\2") + "|" + a.list.source.replace("\\1", "\\3") + "|")(), a.tables = j({}, a.gfm, {
        nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
        table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
    }), b.rules = a, b.lex = function(a, c) {
        var d = new b(c);
        return d.lex(a)
    }, b.prototype.lex = function(a) {
        return a = a.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(a, !0)
    }, b.prototype.token = function(b, c) {
        for (var d, e, f, g, h, i, j, k, l, b = b.replace(/^ +$/gm, ""); b;)
            if ((f = this.rules.newline.exec(b)) && (b = b.substring(f[0].length), f[0].length > 1 && this.tokens.push({
                    type: "space"
                })), f = this.rules.code.exec(b)) b = b.substring(f[0].length), f = f[0].replace(/^ {4}/gm, ""), this.tokens.push({
                type: "code",
                text: this.options.pedantic ? f : f.replace(/\n+$/, "")
            });
            else if (f = this.rules.fences.exec(b)) b = b.substring(f[0].length), this.tokens.push({
            type: "code",
            lang: f[2],
            text: f[3]
        });
        else if (f = this.rules.heading.exec(b)) b = b.substring(f[0].length), this.tokens.push({
            type: "heading",
            depth: f[1].length,
            text: f[2]
        });
        else if (c && (f = this.rules.nptable.exec(b))) {
            for (b = b.substring(f[0].length), i = {
                    type: "table",
                    header: f[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: f[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: f[3].replace(/\n$/, "").split("\n")
                }, k = 0; k < i.align.length; k++) i.align[k] = /^ *-+: *$/.test(i.align[k]) ? "right" : /^ *:-+: *$/.test(i.align[k]) ? "center" : /^ *:-+ *$/.test(i.align[k]) ? "left" : null;
            for (k = 0; k < i.cells.length; k++) i.cells[k] = i.cells[k].split(/ *\| */);
            this.tokens.push(i)
        } else if (f = this.rules.lheading.exec(b)) b = b.substring(f[0].length), this.tokens.push({
            type: "heading",
            depth: "=" === f[2] ? 1 : 2,
            text: f[1]
        });
        else if (f = this.rules.hr.exec(b)) b = b.substring(f[0].length), this.tokens.push({
            type: "hr"
        });
        else if (f = this.rules.blockquote.exec(b)) b = b.substring(f[0].length), this.tokens.push({
            type: "blockquote_start"
        }), f = f[0].replace(/^ *> ?/gm, ""), this.token(f, c), this.tokens.push({
            type: "blockquote_end"
        });
        else if (f = this.rules.list.exec(b)) {
            for (b = b.substring(f[0].length), g = f[2], this.tokens.push({
                    type: "list_start",
                    ordered: g.length > 1
                }), f = f[0].match(this.rules.item), d = !1, l = f.length, k = 0; l > k; k++) i = f[k], j = i.length, i = i.replace(/^ *([*+-]|\d+\.) +/, ""), ~i.indexOf("\n ") && (j -= i.length, i = this.options.pedantic ? i.replace(/^ {1,4}/gm, "") : i.replace(new RegExp("^ {1," + j + "}", "gm"), "")), this.options.smartLists && k !== l - 1 && (h = a.bullet.exec(f[k + 1])[0], g === h || g.length > 1 && h.length > 1 || (b = f.slice(k + 1).join("\n") + b, k = l - 1)), e = d || /\n\n(?!\s*$)/.test(i), k !== l - 1 && (d = "\n" === i.charAt(i.length - 1), e || (e = d)), this.tokens.push({
                type: e ? "loose_item_start" : "list_item_start"
            }), this.token(i, !1), this.tokens.push({
                type: "list_item_end"
            });
            this.tokens.push({
                type: "list_end"
            })
        } else if (f = this.rules.html.exec(b)) b = b.substring(f[0].length), this.tokens.push({
            type: this.options.sanitize ? "paragraph" : "html",
            pre: "pre" === f[1] || "script" === f[1] || "style" === f[1],
            text: f[0]
        });
        else if (c && (f = this.rules.def.exec(b))) b = b.substring(f[0].length), this.tokens.links[f[1].toLowerCase()] = {
            href: f[2],
            title: f[3]
        };
        else if (c && (f = this.rules.table.exec(b))) {
            for (b = b.substring(f[0].length), i = {
                    type: "table",
                    header: f[1].replace(/^ *| *\| *$/g, "").split(/ *\| */),
                    align: f[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: f[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                }, k = 0; k < i.align.length; k++) i.align[k] = /^ *-+: *$/.test(i.align[k]) ? "right" : /^ *:-+: *$/.test(i.align[k]) ? "center" : /^ *:-+ *$/.test(i.align[k]) ? "left" : null;
            for (k = 0; k < i.cells.length; k++) i.cells[k] = i.cells[k].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
            this.tokens.push(i)
        } else if (c && (f = this.rules.paragraph.exec(b))) b = b.substring(f[0].length), this.tokens.push({
            type: "paragraph",
            text: "\n" === f[1].charAt(f[1].length - 1) ? f[1].slice(0, -1) : f[1]
        });
        else if (f = this.rules.text.exec(b)) b = b.substring(f[0].length), this.tokens.push({
            type: "text",
            text: f[0]
        });
        else if (b) throw new Error("Infinite loop on byte: " + b.charCodeAt(0));
        return this.tokens
    };
    var c = {
        escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
        autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
        url: i,
        tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
        link: /^!?\[(inside)\]\(href\)/,
        reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
        nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
        strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
        em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
        code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        br: /^ {2,}\n(?!\s*$)/,
        del: i,
        text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
    };
    c._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, c._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, c.link = h(c.link)("inside", c._inside)("href", c._href)(), c.reflink = h(c.reflink)("inside", c._inside)(), c.normal = j({}, c), c.pedantic = j({}, c.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
    }), c.gfm = j({}, c.normal, {
        escape: h(c.escape)("])", "~|])")(),
        url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        del: /^~~(?=\S)([\s\S]*?\S)~~/,
        text: h(c.text)("]|", "~]|")("|", "|https?://|")()
    }), c.breaks = j({}, c.gfm, {
        br: h(c.br)("{2,}", "*")(),
        text: h(c.gfm.text)("{2,}", "*")()
    }), d.rules = c, d.output = function(a, b, c) {
        var e = new d(b, c);
        return e.output(a)
    }, d.prototype.output = function(a) {
        for (var c, d, e, f, b = ""; a;)
            if (f = this.rules.escape.exec(a)) a = a.substring(f[0].length), b += f[1];
            else if (f = this.rules.autolink.exec(a)) a = a.substring(f[0].length), "@" === f[2] ? (d = ":" === f[1].charAt(6) ? this.mangle(f[1].substring(7)) : this.mangle(f[1]), e = this.mangle("mailto:") + d) : (d = g(f[1]), e = d), b += this.renderer.link(e, null, d);
        else if (f = this.rules.url.exec(a)) a = a.substring(f[0].length), d = g(f[1]), e = d, b += this.renderer.link(e, null, d);
        else if (f = this.rules.tag.exec(a)) a = a.substring(f[0].length), b += this.options.sanitize ? g(f[0]) : f[0];
        else if (f = this.rules.link.exec(a)) a = a.substring(f[0].length), b += this.outputLink(f, {
            href: f[2],
            title: f[3]
        });
        else if ((f = this.rules.reflink.exec(a)) || (f = this.rules.nolink.exec(a))) {
            if (a = a.substring(f[0].length), c = (f[2] || f[1]).replace(/\s+/g, " "), c = this.links[c.toLowerCase()], !c || !c.href) {
                b += f[0].charAt(0), a = f[0].substring(1) + a;
                continue
            }
            b += this.outputLink(f, c)
        } else if (f = this.rules.strong.exec(a)) a = a.substring(f[0].length), b += this.renderer.strong(this.output(f[2] || f[1]));
        else if (f = this.rules.em.exec(a)) a = a.substring(f[0].length), b += this.renderer.em(this.output(f[2] || f[1]));
        else if (f = this.rules.code.exec(a)) a = a.substring(f[0].length), b += this.renderer.codespan(g(f[2], !0));
        else if (f = this.rules.br.exec(a)) a = a.substring(f[0].length), b += this.renderer.br();
        else if (f = this.rules.del.exec(a)) a = a.substring(f[0].length), b += this.renderer.del(this.output(f[1]));
        else if (f = this.rules.text.exec(a)) a = a.substring(f[0].length), b += g(this.smartypants(f[0]));
        else if (a) throw new Error("Infinite loop on byte: " + a.charCodeAt(0));
        return b
    }, d.prototype.outputLink = function(a, b) {
        var c = g(b.href),
            d = b.title ? g(b.title) : null;
        return "!" !== a[0].charAt(0) ? this.renderer.link(c, d, this.output(a[1])) : this.renderer.image(c, d, g(a[1]))
    }, d.prototype.smartypants = function(a) {
        return this.options.smartypants ? a.replace(/--/g, "\u2014").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c").replace(/"/g, "\u201d").replace(/\.{3}/g, "\u2026") : a
    }, d.prototype.mangle = function(a) {
        for (var e, b = "", c = a.length, d = 0; c > d; d++) e = a.charCodeAt(d), Math.random() > .5 && (e = "x" + e.toString(16)), b += "&#" + e + ";";
        return b
    }, e.prototype.code = function(a, b, c, d) {
        if (d = d || {}, d.highlight) {
            var e = d.highlight(a, b);
            null != e && e !== a && (c = !0, a = e)
        }
        return b ? '<pre><code class="' + d.langPrefix + b + '">' + (c ? a : g(a)) + "\n</code></pre>\n" : "<pre><code>" + (c ? a : g(a, !0)) + "\n</code></pre>"
    }, e.prototype.blockquote = function(a) {
        return "<blockquote>\n" + a + "</blockquote>\n"
    }, e.prototype.html = function(a) {
        return a
    }, e.prototype.heading = function(a, b, c, d) {
        return "<h" + b + ' id="' + d.headerPrefix + c.toLowerCase().replace(/[^\w]+/g, "-") + '">' + a + "</h" + b + ">\n"
    }, e.prototype.hr = function() {
        return "<hr>\n"
    }, e.prototype.list = function(a, b) {
        var c = b ? "ol" : "ul";
        return "<" + c + ">\n" + a + "</" + c + ">\n"
    }, e.prototype.listitem = function(a) {
        return "<li>" + a + "</li>\n"
    }, e.prototype.paragraph = function(a) {
        return "<p>" + a + "</p>\n"
    }, e.prototype.table = function(a, b) {
        return "<table>\n<thead>\n" + a + "</thead>\n" + "<tbody>\n" + b + "</tbody>\n" + "</table>\n"
    }, e.prototype.tablerow = function(a) {
        return "<tr>\n" + a + "</tr>\n"
    }, e.prototype.tablecell = function(a, b) {
        var c = b.header ? "th" : "td",
            d = b.align ? "<" + c + ' style="text-align:' + b.align + '">' : "<" + c + ">";
        return d + a + "</" + c + ">\n"
    }, e.prototype.strong = function(a) {
        return "<strong>" + a + "</strong>"
    }, e.prototype.em = function(a) {
        return "<em>" + a + "</em>"
    }, e.prototype.codespan = function(a) {
        return "<code>" + a + "</code>"
    }, e.prototype.br = function() {
        return "<br>"
    }, e.prototype.del = function(a) {
        return "<del>" + a + "</del>"
    }, e.prototype.link = function(a, b, c) {
        var d = '<a href="' + a + '"';
        return b && (d += ' title="' + b + '"'), d += ">" + c + "</a>"
    }, e.prototype.image = function(a, b, c) {
        var d = '<img src="' + a + '" alt="' + c + '"';
        return b && (d += ' title="' + b + '"'), d += ">"
    }, f.parse = function(a, b, c) {
        var d = new f(b, c);
        return d.parse(a)
    }, f.prototype.parse = function(a) {
        this.inline = new d(a.links, this.options, this.renderer), this.tokens = a.reverse();
        for (var b = ""; this.next();) b += this.tok();
        return b
    }, f.prototype.next = function() {
        return this.token = this.tokens.pop()
    }, f.prototype.peek = function() {
        return this.tokens[this.tokens.length - 1] || 0
    }, f.prototype.parseText = function() {
        for (var a = this.token.text;
            "text" === this.peek().type;) a += "\n" + this.next().text;
        return this.inline.output(a)
    }, f.prototype.tok = function() {
        switch (this.token.type) {
            case "space":
                return "";
            case "hr":
                return this.renderer.hr();
            case "heading":
                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text, this.options);
            case "code":
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped, this.options);
            case "table":
                var c, d, e, f, g, a = "",
                    b = "";
                for (e = "", c = 0; c < this.token.header.length; c++) f = {
                    header: !0,
                    align: this.token.align[c]
                }, e += this.renderer.tablecell(this.inline.output(this.token.header[c]), {
                    header: !0,
                    align: this.token.align[c]
                });
                for (a += this.renderer.tablerow(e), c = 0; c < this.token.cells.length; c++) {
                    for (d = this.token.cells[c], e = "", g = 0; g < d.length; g++) e += this.renderer.tablecell(this.inline.output(d[g]), {
                        header: !1,
                        align: this.token.align[g]
                    });
                    b += this.renderer.tablerow(e)
                }
                return this.renderer.table(a, b);
            case "blockquote_start":
                for (var b = "";
                    "blockquote_end" !== this.next().type;) b += this.tok();
                return this.renderer.blockquote(b);
            case "list_start":
                for (var b = "", h = this.token.ordered;
                    "list_end" !== this.next().type;) b += this.tok();
                return this.renderer.list(b, h);
            case "list_item_start":
                for (var b = "";
                    "list_item_end" !== this.next().type;) b += "text" === this.token.type ? this.parseText() : this.tok();
                return this.renderer.listitem(b);
            case "loose_item_start":
                for (var b = "";
                    "list_item_end" !== this.next().type;) b += this.tok();
                return this.renderer.listitem(b);
            case "html":
                var i = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                return this.renderer.html(i);
            case "paragraph":
                return this.renderer.paragraph(this.inline.output(this.token.text));
            case "text":
                return this.renderer.paragraph(this.parseText())
        }
    }, i.exec = i, k.options = k.setOptions = function(a) {
        return j(k.defaults, a), k
    }, k.defaults = {
        gfm: !0,
        tables: !0,
        breaks: !1,
        pedantic: !1,
        sanitize: !1,
        smartLists: !1,
        silent: !1,
        highlight: null,
        langPrefix: "lang-",
        smartypants: !1,
        headerPrefix: "",
        renderer: new e
    }, k.Parser = f, k.parser = f.parse, k.Renderer = e, k.Lexer = b, k.lexer = b.lex, k.InlineLexer = d, k.inlineLexer = d.output, k.parse = k, "object" == typeof exports ? module.exports = k : "function" == typeof define && define.amd ? define(function() {
        return k
    }) : this.marked = k
}.call(function() {
    return this || ("undefined" != typeof window ? window : global)
}());
// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.4
Copyright (c) 2011-2014 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e
            }
            return -1
        },
        e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(this, function(n, r) {
        var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
        i = n(r);
        a = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        c = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element[u] = this.id;
                c[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || a)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete c[this.id]
                }
            };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = this.element[w]) != null ? o : [];
                i.push(this.id);
                this.element[w] = i
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = t[w];
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                if (e == null) {
                    e = {}
                }
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = c[i[0][u]];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke.call(this, "disable")
            },
            enable: function() {
                return d._invoke.call(this, "enable")
            },
            destroy: function() {
                return d._invoke.call(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t) {
                this.each(function() {
                    var e;
                    e = l.getWaypointsByElement(this);
                    return n.each(e, function(e, n) {
                        n[t]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(c, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = c[n(t)[0][u]];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.load(function() {
            return n[m]("refresh")
        })
    })
}).call(this);
(function() {
    var Match, calculate_operations, consecutive_where, create_index, diff, find_match, find_matching_blocks, html_to_tokens, is_end_of_tag, is_start_of_tag, is_tag, is_whitespace, isnt_tag, op_map, recursively_find_matching_blocks, render_operations, wrap;
    is_end_of_tag = function(char) {
        return ">" === char
    }, is_start_of_tag = function(char) {
        return "<" === char
    }, is_whitespace = function(char) {
        return /^\s+$/.test(char)
    }, is_tag = function(token) {
        return /^\s*<[^>]+>\s*$/.test(token)
    }, isnt_tag = function(token) {
        return !is_tag(token)
    }, Match = function() {
        function Match(start_in_before1, start_in_after1, length1) {
            this.start_in_before = start_in_before1, this.start_in_after = start_in_after1, this.length = length1, this.end_in_before = this.start_in_before + this.length - 1, this.end_in_after = this.start_in_after + this.length - 1
        }
        return Match
    }(), html_to_tokens = function(html) {
        var char, current_word, i, len, mode, words;
        for (mode = "char", current_word = "", words = [], i = 0, len = html.length; len > i; i++) switch (char = html[i], mode) {
            case "tag":
                is_end_of_tag(char) ? (current_word += ">", words.push(current_word), current_word = "", mode = is_whitespace(char) ? "whitespace" : "char") : current_word += char;
                break;
            case "char":
                is_start_of_tag(char) ? (current_word && words.push(current_word), current_word = "<", mode = "tag") : /\s/.test(char) ? (current_word && words.push(current_word), current_word = char, mode = "whitespace") : /[\w\#@]+/i.test(char) ? current_word += char : (current_word && words.push(current_word), current_word = char);
                break;
            case "whitespace":
                is_start_of_tag(char) ? (current_word && words.push(current_word), current_word = "<", mode = "tag") : is_whitespace(char) ? current_word += char : (current_word && words.push(current_word), current_word = char, mode = "char");
                break;
            default:
                throw new Error("Unknown mode " + mode)
        }
        return current_word && words.push(current_word), words
    }, find_match = function(before_tokens, after_tokens, index_of_before_locations_in_after_tokens, start_in_before, end_in_before, start_in_after, end_in_after) {
        var best_match_in_after, best_match_in_before, best_match_length, i, index_in_after, index_in_before, j, len, locations_in_after, looking_for, match, match_length_at, new_match_length, new_match_length_at, ref, ref1;
        for (best_match_in_before = start_in_before, best_match_in_after = start_in_after, best_match_length = 0, match_length_at = {}, index_in_before = i = ref = start_in_before, ref1 = end_in_before; ref1 >= ref ? ref1 > i : i > ref1; index_in_before = ref1 >= ref ? ++i : --i) {
            for (new_match_length_at = {}, looking_for = before_tokens[index_in_before], locations_in_after = index_of_before_locations_in_after_tokens[looking_for], j = 0, len = locations_in_after.length; len > j; j++)
                if (index_in_after = locations_in_after[j], !(start_in_after > index_in_after)) {
                    if (index_in_after >= end_in_after) break;
                    null == match_length_at[index_in_after - 1] && (match_length_at[index_in_after - 1] = 0), new_match_length = match_length_at[index_in_after - 1] + 1, new_match_length_at[index_in_after] = new_match_length, new_match_length > best_match_length && (best_match_in_before = index_in_before - new_match_length + 1, best_match_in_after = index_in_after - new_match_length + 1, best_match_length = new_match_length)
                }
            match_length_at = new_match_length_at
        }
        return 0 !== best_match_length && (match = new Match(best_match_in_before, best_match_in_after, best_match_length)), match
    }, recursively_find_matching_blocks = function(before_tokens, after_tokens, index_of_before_locations_in_after_tokens, start_in_before, end_in_before, start_in_after, end_in_after, matching_blocks) {
        var match;
        return match = find_match(before_tokens, after_tokens, index_of_before_locations_in_after_tokens, start_in_before, end_in_before, start_in_after, end_in_after), null != match && (start_in_before < match.start_in_before && start_in_after < match.start_in_after && recursively_find_matching_blocks(before_tokens, after_tokens, index_of_before_locations_in_after_tokens, start_in_before, match.start_in_before, start_in_after, match.start_in_after, matching_blocks), matching_blocks.push(match), match.end_in_before <= end_in_before && match.end_in_after <= end_in_after && recursively_find_matching_blocks(before_tokens, after_tokens, index_of_before_locations_in_after_tokens, match.end_in_before + 1, end_in_before, match.end_in_after + 1, end_in_after, matching_blocks)), matching_blocks
    }, create_index = function(p) {
        var i, idx, index, len, ref, token;
        if (null == p.find_these) throw new Error("params must have find_these key");
        if (null == p.in_these) throw new Error("params must have in_these key");
        for (index = {}, ref = p.find_these, i = 0, len = ref.length; len > i; i++)
            for (token = ref[i], index[token] = [], idx = p.in_these.indexOf(token); - 1 !== idx;) index[token].push(idx), idx = p.in_these.indexOf(token, idx + 1);
        return index
    }, find_matching_blocks = function(before_tokens, after_tokens) {
        var index_of_before_locations_in_after_tokens, matching_blocks;
        return matching_blocks = [], index_of_before_locations_in_after_tokens = create_index({
            find_these: before_tokens,
            in_these: after_tokens
        }), recursively_find_matching_blocks(before_tokens, after_tokens, index_of_before_locations_in_after_tokens, 0, before_tokens.length, 0, after_tokens.length, matching_blocks)
    }, calculate_operations = function(before_tokens, after_tokens) {
        var action_map, action_up_to_match_positions, i, index, is_single_whitespace, j, last_op, len, len1, match, match_starts_at_current_position_in_after, match_starts_at_current_position_in_before, matches, op, operations, position_in_after, position_in_before, post_processed;
        if (null == before_tokens) throw new Error("before_tokens?");
        if (null == after_tokens) throw new Error("after_tokens?");
        for (position_in_before = position_in_after = 0, operations = [], action_map = {
                "false,false": "replace",
                "true,false": "insert",
                "false,true": "delete",
                "true,true": "none"
            }, matches = find_matching_blocks(before_tokens, after_tokens), matches.push(new Match(before_tokens.length, after_tokens.length, 0)), index = i = 0, len = matches.length; len > i; index = ++i) match = matches[index], match_starts_at_current_position_in_before = position_in_before === match.start_in_before, match_starts_at_current_position_in_after = position_in_after === match.start_in_after, action_up_to_match_positions = action_map[[match_starts_at_current_position_in_before, match_starts_at_current_position_in_after].toString()], "none" !== action_up_to_match_positions && operations.push({
            action: action_up_to_match_positions,
            start_in_before: position_in_before,
            end_in_before: "insert" !== action_up_to_match_positions ? match.start_in_before - 1 : void 0,
            start_in_after: position_in_after,
            end_in_after: "delete" !== action_up_to_match_positions ? match.start_in_after - 1 : void 0
        }), 0 !== match.length && operations.push({
            action: "equal",
            start_in_before: match.start_in_before,
            end_in_before: match.end_in_before,
            start_in_after: match.start_in_after,
            end_in_after: match.end_in_after
        }), position_in_before = match.end_in_before + 1, position_in_after = match.end_in_after + 1;
        for (post_processed = [], last_op = {
                action: "none"
            }, is_single_whitespace = function(op) {
                return "equal" !== op.action ? !1 : op.end_in_before - op.start_in_before !== 0 ? !1 : /^\s$/.test(before_tokens.slice(op.start_in_before, +op.end_in_before + 1 || 9e9))
            }, j = 0, len1 = operations.length; len1 > j; j++) op = operations[j], is_single_whitespace(op) && "replace" === last_op.action || "replace" === op.action && "replace" === last_op.action ? (last_op.end_in_before = op.end_in_before, last_op.end_in_after = op.end_in_after) : (post_processed.push(op), last_op = op);
        return post_processed
    }, consecutive_where = function(start, content, predicate) {
        var answer, i, index, last_matching_index, len, token;
        for (content = content.slice(start, +content.length + 1 || 9e9), last_matching_index = void 0, index = i = 0, len = content.length; len > i && (token = content[index], answer = predicate(token), answer === !0 && (last_matching_index = index), answer !== !1); index = ++i);
        return null != last_matching_index ? content.slice(0, +last_matching_index + 1 || 9e9) : []
    }, wrap = function(tag, content) {
        var length, non_tags, position, rendering, tags;
        for (rendering = "", position = 0, length = content.length;;) {
            if (position >= length) break;
            if (non_tags = consecutive_where(position, content, isnt_tag), position += non_tags.length, 0 !== non_tags.length && (rendering += "<" + tag + ">" + non_tags.join("") + "</" + tag + ">"), position >= length) break;
            tags = consecutive_where(position, content, is_tag), position += tags.length, rendering += tags.join("")
        }
        return rendering
    }, op_map = {
        equal: function(op, before_tokens, after_tokens) {
            return before_tokens.slice(op.start_in_before, +op.end_in_before + 1 || 9e9).join("")
        },
        insert: function(op, before_tokens, after_tokens) {
            var val;
            return val = after_tokens.slice(op.start_in_after, +op.end_in_after + 1 || 9e9), wrap("ins", val)
        },
        "delete": function(op, before_tokens, after_tokens) {
            var val;
            return val = before_tokens.slice(op.start_in_before, +op.end_in_before + 1 || 9e9), wrap("del", val)
        }
    }, op_map.replace = function(op, before_tokens, after_tokens) {
        return op_map["delete"](op, before_tokens, after_tokens) + op_map.insert(op, before_tokens, after_tokens)
    }, render_operations = function(before_tokens, after_tokens, operations) {
        var i, len, op, rendering;
        for (rendering = "", i = 0, len = operations.length; len > i; i++) op = operations[i], rendering += op_map[op.action](op, before_tokens, after_tokens);
        return rendering
    }, diff = function(before, after) {
        var ops;
        return before === after ? before : (before = html_to_tokens(before), after = html_to_tokens(after), ops = calculate_operations(before, after), render_operations(before, after, ops))
    }, diff.html_to_tokens = html_to_tokens, diff.find_matching_blocks = find_matching_blocks, find_matching_blocks.find_match = find_match, find_matching_blocks.create_index = create_index, diff.calculate_operations = calculate_operations, diff.render_operations = render_operations, "function" == typeof define ? define([], function() {
        return diff
    }) : "undefined" != typeof module && null !== module ? module.exports = diff : this.htmldiff = diff
}).call(this);
(function() {
    var $;
    $ = jQuery, $.extend({
        format: function(str, kwargs) {
            var key, value;
            for (key in kwargs) value = kwargs[key], str = str.replace("{" + key + "}", String(value));
            return str
        }
    })
}).call(this);
(function() {
    var $, Tab, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, Tab = function() {
        function Tab(el) {
            this.showTabContent = bind(this.showTabContent, this), this.selectTab = bind(this.selectTab, this), this.unselectAllTabs = bind(this.unselectAllTabs, this), this.hideAllTabsContent = bind(this.hideAllTabsContent, this), this.tabSwitch = bind(this.tabSwitch, this), this.el = $(el), this.setUp()
        }
        return Tab.prototype.setUp = function() {
            return this.el.on("click", this.tabSwitch), this.el.on("click", this.stopClick)
        }, Tab.prototype.tabSwitch = function() {
            this.hideAllTabsContent(), this.el.hasClass("is-selected") ? this.el.removeClass("is-selected") : (this.unselectAllTabs(), this.selectTab(), this.showTabContent())
        }, Tab.prototype.hideAllTabsContent = function() {
            var $tabs_container, $tabs_content;
            return $tabs_container = this.el.closest(".js-tabs-container"), $tabs_content = $tabs_container.find(".js-tab-content"), $tabs_content.hide()
        }, Tab.prototype.unselectAllTabs = function() {
            var $tabs, $tabs_container;
            return $tabs_container = this.el.closest(".js-tabs-container"), $tabs = $tabs_container.find(".js-tab"), $tabs.removeClass("is-selected")
        }, Tab.prototype.selectTab = function() {
            return this.el.addClass("is-selected")
        }, Tab.prototype.showTabContent = function() {
            var tab_content;
            return tab_content = this.el.data("related"), $(tab_content).show()
        }, Tab.prototype.stopClick = function(e) {
            e.preventDefault(), e.stopPropagation()
        }, Tab
    }(), $.extend({
        tab: function() {
            return $(".js-tab").each(function() {
                return $(this).data("plugin_tab") ? void 0 : $(this).data("plugin_tab", new Tab(this))
            })
        }
    }), $.tab.Tab = Tab
}).call(this);
(function() {
    var $, EditorImageUpload, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, EditorImageUpload = function() {
        function EditorImageUpload(el, options) {
            this.openFileDialog = bind(this.openFileDialog, this), this.textReplace = bind(this.textReplace, this), this.addStatusError = bind(this.addStatusError, this), this.addError = bind(this.addError, this), this.addImage = bind(this.addImage, this), this.buildFormData = bind(this.buildFormData, this), this.addPlaceholder = bind(this.addPlaceholder, this), this.sendFile = bind(this.sendFile, this), this.el = $(el), this.options = $.extend({}, this.defaults, options), this.formFile = $("<form/>"), this.inputFile = $("<input/>", {
                type: "file",
                accept: "image/*"
            }).appendTo(this.formFile), this.setUp()
        }
        return EditorImageUpload.prototype.defaults = {
            csrfToken: "csrf_token",
            target: "target url",
            placeholderText: "uploading {image_name}"
        }, EditorImageUpload.prototype.setUp = function() {
            var $boxImage;
            if (null != window.FormData) return this.inputFile.on("change", this.sendFile), $boxImage = $(".js-box-image"), $boxImage.on("click", this.openFileDialog), $boxImage.on("click", this.stopClick)
        }, EditorImageUpload.prototype.sendFile = function() {
            var file, formData, placeholder, post;
            file = this.inputFile.get(0).files[0], placeholder = this.addPlaceholder(file), formData = this.buildFormData(file), post = $.ajax({
                url: this.options.target,
                data: formData,
                processData: !1,
                contentType: !1,
                type: "POST"
            }), post.done(function(_this) {
                return function(data) {
                    return "url" in data ? _this.addImage(data, file, placeholder) : _this.addError(data, placeholder)
                }
            }(this)), post.fail(function(_this) {
                return function(jqxhr, textStatus, error) {
                    return _this.addStatusError(textStatus, error, placeholder)
                }
            }(this)), post.always(function(_this) {
                return function() {
                    return _this.formFile.get(0).reset()
                }
            }(this))
        }, EditorImageUpload.prototype.addPlaceholder = function(file) {
            var placeholder;
            return placeholder = $.format("![" + this.options.placeholderText + "]()", {
                image_name: file.name
            }), this.el.val(this.el.val() + placeholder), placeholder
        }, EditorImageUpload.prototype.buildFormData = function(file) {
            var formData;
            return formData = new FormData, formData.append("csrfmiddlewaretoken", this.options.csrfToken), formData.append("image", file), formData
        }, EditorImageUpload.prototype.addImage = function(data, file, placeholder) {
            var imageTag;
            return imageTag = $.format("![{name}]({url})", {
                name: file.name,
                url: data.url
            }), this.textReplace(placeholder, imageTag)
        }, EditorImageUpload.prototype.addError = function(data, placeholder) {
            var error;
            return error = JSON.stringify(data), this.textReplace(placeholder, "![" + error + "]()")
        }, EditorImageUpload.prototype.addStatusError = function(textStatus, error, placeholder) {
            var errorTag;
            return errorTag = $.format("![error: {code} {error}]()", {
                code: textStatus,
                error: error
            }), this.textReplace(placeholder, errorTag)
        }, EditorImageUpload.prototype.textReplace = function(find, replace) {
            this.el.val(this.el.val().replace(find, replace))
        }, EditorImageUpload.prototype.openFileDialog = function() {
            this.inputFile.trigger("click")
        }, EditorImageUpload.prototype.stopClick = function(e) {
            e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation()
        }, EditorImageUpload
    }(), $.fn.extend({
        editor_image_upload: function(options) {
            return this.each(function() {
                return $(this).data("plugin_editor_image_upload") ? void 0 : $(this).data("plugin_editor_image_upload", new EditorImageUpload(this, options))
            })
        }
    }), $.fn.editor_image_upload.EditorImageUpload = EditorImageUpload
}).call(this);
(function() {
    var $, Bookmark, Mark, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, Mark = function() {
        function Mark() {
            this.isSending = !1, this.commentNumber = this._getCommentNumber()
        }
        return Mark.prototype._getCommentNumber = function() {
            var commentNumber;
            return commentNumber = window.location.hash.split("#c")[1], commentNumber = parseInt(commentNumber, 10), isNaN(commentNumber) ? commentNumber = 0 : commentNumber -= 1, commentNumber
        }, Mark
    }(), Bookmark = function() {
        function Bookmark(el, mark, options) {
            this.sendCommentNumber = bind(this.sendCommentNumber, this), this.onWaypoint = bind(this.onWaypoint, this), this.el = $(el), this.mark = mark, this.options = $.extend({}, this.defaults, options), this.setUp()
        }
        return Bookmark.prototype.defaults = {
            csrfToken: "csrf_token",
            target: "target url"
        }, Bookmark.prototype.setUp = function() {
            return this.el.waypoint(this.onWaypoint, {
                offset: "100%"
            })
        }, Bookmark.prototype.onWaypoint = function() {
            var newCommentNumber;
            newCommentNumber = this.el.data("number"), newCommentNumber > this.mark.commentNumber && (this.mark.commentNumber = newCommentNumber, this.sendCommentNumber())
        }, Bookmark.prototype.sendCommentNumber = function() {
            var post, sentCommentNumber;
            if (!this.mark.isSending) return this.mark.isSending = !0, sentCommentNumber = this.mark.commentNumber, post = $.post(this.options.target, {
                csrfmiddlewaretoken: this.options.csrfToken,
                comment_number: this.mark.commentNumber
            }), post.always(function(_this) {
                return function() {
                    return _this.mark.isSending = !1, _this.mark.commentNumber > sentCommentNumber ? _this.sendCommentNumber() : void 0
                }
            }(this))
        }, Bookmark
    }(), $.fn.extend({
        bookmark: function(options) {
            var mark;
            return mark = new Mark, this.each(function() {
                return $(this).data("plugin_bookmark") ? void 0 : $(this).data("plugin_bookmark", new Bookmark(this, mark, options))
            })
        }
    }), $.fn.bookmark.Bookmark = Bookmark, $.fn.bookmark.Mark = Mark
}).call(this);
(function() {
    var $;
    $ = jQuery, $.fn.extend({
        comment_diff: function() {
            var curr, prev;
            return prev = null, curr = null, this.each(function() {
                var diff;
                return curr = $(this).html(), null != prev && (diff = htmldiff(prev, curr), $(this).html(diff)), prev = curr
            })
        }
    })
}).call(this);
(function() {
    var $, Editor, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, Editor = function() {
        function Editor(el, options) {
            this.togglePreview = bind(this.togglePreview, this), this.addPoll = bind(this.addPoll, this), this.addImage = bind(this.addImage, this), this.addUrl = bind(this.addUrl, this), this.addList = bind(this.addList, this), this.addItalic = bind(this.addItalic, this), this.addBold = bind(this.addBold, this), this.wrapSelection = bind(this.wrapSelection, this), this.el = $(el), this.options = $.extend({}, this.defaults, options), this.pollCounter = 1, this.setUp()
        }
        return Editor.prototype.defaults = {
            boldedText: "bolded text",
            italicisedText: "italicised text",
            listItemText: "list item",
            linkText: "link text",
            linkUrlText: "link url",
            imageText: "image text",
            imageUrlText: "image url",
            pollTitleText: "Title",
            pollChoiceText: "Description"
        }, Editor.prototype.setUp = function() {
            return $(".js-box-bold").on("click", this.addBold), $(".js-box-italic").on("click", this.addItalic), $(".js-box-list").on("click", this.addList), $(".js-box-url").on("click", this.addUrl), $(".js-box-image").on("click", this.addImage), $(".js-box-poll").on("click", this.addPoll), $(".js-box-preview").on("click", this.togglePreview)
        }, Editor.prototype.wrapSelection = function(preTxt, postTxt, defaultTxt) {
            var postSelection, preSelection, selection;
            return preSelection = this.el.val().substring(0, this.el[0].selectionStart), selection = this.el.val().substring(this.el[0].selectionStart, this.el[0].selectionEnd), postSelection = this.el.val().substring(this.el[0].selectionEnd), selection || (selection = defaultTxt), this.el.val(preSelection + preTxt + selection + postTxt + postSelection)
        }, Editor.prototype.addBold = function() {
            return this.wrapSelection("**", "**", this.options.boldedText), !1
        }, Editor.prototype.addItalic = function() {
            return this.wrapSelection("*", "*", this.options.italicisedText), !1
        }, Editor.prototype.addList = function() {
            return this.wrapSelection("\n* ", "", this.options.listItemText), !1
        }, Editor.prototype.addUrl = function() {
            return this.wrapSelection("[", "](" + this.options.linkUrlText + ")", this.options.linkText), !1
        }, Editor.prototype.addImage = function() {
            return this.wrapSelection("![", "](" + this.options.imageUrlText + ")", this.options.imageText), !1
        }, Editor.prototype.addPoll = function() {
            var poll;
            return poll = "\n\n[poll name=" + this.pollCounter + "]\n" + ("# " + this.options.pollTitleText + "\n") + ("1. " + this.options.pollChoiceText + "\n") + ("2. " + this.options.pollChoiceText + "\n") + "[/poll]\n", this.wrapSelection("", poll, ""), this.pollCounter++, !1
        }, Editor.prototype.togglePreview = function() {
            var $preview;
            return $preview = $(".js-box-preview-content"), this.el.toggle(), $preview.toggle(), $preview.html(marked(this.el.val())), !1
        }, Editor
    }(), $.fn.extend({
        editor: function(options) {
            return this.each(function() {
                return $(this).data("plugin_editor") ? void 0 : $(this).data("plugin_editor", new Editor(this, options))
            })
        }
    }), $.fn.editor.Editor = Editor
}).call(this);
(function() {
    var $;
    $ = jQuery, $.extend({
        emoji_list: function() {
            return [{
                name: "+1"
            }, {
                name: "+1_tone1"
            }, {
                name: "+1_tone2"
            }, {
                name: "+1_tone3"
            }, {
                name: "+1_tone4"
            }, {
                name: "+1_tone5"
            }, {
                name: "-1"
            }, {
                name: "-1_tone1"
            }, {
                name: "-1_tone2"
            }, {
                name: "-1_tone3"
            }, {
                name: "-1_tone4"
            }, {
                name: "-1_tone5"
            }, {
                name: "100"
            }, {
                name: "1234"
            }, {
                name: "8ball"
            }, {
                name: "a"
            }, {
                name: "ab"
            }, {
                name: "abc"
            }, {
                name: "abcd"
            }, {
                name: "ac"
            }, {
                name: "accept"
            }, {
                name: "ad"
            }, {
                name: "admission_tickets"
            }, {
                name: "ae"
            }, {
                name: "aerial_tramway"
            }, {
                name: "af"
            }, {
                name: "ag"
            }, {
                name: "ai"
            }, {
                name: "airplane"
            }, {
                name: "airplane_arriving"
            }, {
                name: "airplane_departure"
            }, {
                name: "airplane_small"
            }, {
                name: "al"
            }, {
                name: "alarm_clock"
            }, {
                name: "alembic"
            }, {
                name: "alien"
            }, {
                name: "am"
            }, {
                name: "ambulance"
            }, {
                name: "amphora"
            }, {
                name: "anchor"
            }, {
                name: "angel"
            }, {
                name: "angel_tone1"
            }, {
                name: "angel_tone2"
            }, {
                name: "angel_tone3"
            }, {
                name: "angel_tone4"
            }, {
                name: "angel_tone5"
            }, {
                name: "anger"
            }, {
                name: "anger_right"
            }, {
                name: "angry"
            }, {
                name: "anguished"
            }, {
                name: "ant"
            }, {
                name: "ao"
            }, {
                name: "apple"
            }, {
                name: "aq"
            }, {
                name: "aquarius"
            }, {
                name: "ar"
            }, {
                name: "archery"
            }, {
                name: "aries"
            }, {
                name: "arrow_backward"
            }, {
                name: "arrow_double_down"
            }, {
                name: "arrow_double_up"
            }, {
                name: "arrow_down"
            }, {
                name: "arrow_down_small"
            }, {
                name: "arrow_forward"
            }, {
                name: "arrow_heading_down"
            }, {
                name: "arrow_heading_up"
            }, {
                name: "arrow_left"
            }, {
                name: "arrow_lower_left"
            }, {
                name: "arrow_lower_right"
            }, {
                name: "arrow_right"
            }, {
                name: "arrow_right_hook"
            }, {
                name: "arrow_up"
            }, {
                name: "arrow_up_down"
            }, {
                name: "arrow_up_small"
            }, {
                name: "arrow_upper_left"
            }, {
                name: "arrow_upper_right"
            }, {
                name: "arrows_clockwise"
            }, {
                name: "arrows_counterclockwise"
            }, {
                name: "art"
            }, {
                name: "articulated_lorry"
            }, {
                name: "as"
            }, {
                name: "asterisk"
            }, {
                name: "astonished"
            }, {
                name: "at"
            }, {
                name: "athletic_shoe"
            }, {
                name: "atm"
            }, {
                name: "atom"
            }, {
                name: "atom_symbol"
            }, {
                name: "au"
            }, {
                name: "aw"
            }, {
                name: "ax"
            }, {
                name: "az"
            }, {
                name: "b"
            }, {
                name: "ba"
            }, {
                name: "baby"
            }, {
                name: "baby_bottle"
            }, {
                name: "baby_chick"
            }, {
                name: "baby_symbol"
            }, {
                name: "baby_tone1"
            }, {
                name: "baby_tone2"
            }, {
                name: "baby_tone3"
            }, {
                name: "baby_tone4"
            }, {
                name: "baby_tone5"
            }, {
                name: "back"
            }, {
                name: "badminton"
            }, {
                name: "baggage_claim"
            }, {
                name: "balloon"
            }, {
                name: "ballot_box"
            }, {
                name: "ballot_box_with_ballot"
            }, {
                name: "ballot_box_with_check"
            }, {
                name: "bamboo"
            }, {
                name: "banana"
            }, {
                name: "bangbang"
            }, {
                name: "bank"
            }, {
                name: "bar_chart"
            }, {
                name: "barber"
            }, {
                name: "baseball"
            }, {
                name: "basketball"
            }, {
                name: "basketball_player"
            }, {
                name: "basketball_player_tone1"
            }, {
                name: "basketball_player_tone2"
            }, {
                name: "basketball_player_tone3"
            }, {
                name: "basketball_player_tone4"
            }, {
                name: "basketball_player_tone5"
            }, {
                name: "bath"
            }, {
                name: "bath_tone1"
            }, {
                name: "bath_tone2"
            }, {
                name: "bath_tone3"
            }, {
                name: "bath_tone4"
            }, {
                name: "bath_tone5"
            }, {
                name: "bathtub"
            }, {
                name: "battery"
            }, {
                name: "bb"
            }, {
                name: "bd"
            }, {
                name: "be"
            }, {
                name: "beach"
            }, {
                name: "beach_umbrella"
            }, {
                name: "beach_with_umbrella"
            }, {
                name: "bear"
            }, {
                name: "bed"
            }, {
                name: "bee"
            }, {
                name: "beer"
            }, {
                name: "beers"
            }, {
                name: "beetle"
            }, {
                name: "beginner"
            }, {
                name: "bell"
            }, {
                name: "bellhop"
            }, {
                name: "bellhop_bell"
            }, {
                name: "bento"
            }, {
                name: "bf"
            }, {
                name: "bg"
            }, {
                name: "bh"
            }, {
                name: "bi"
            }, {
                name: "bicyclist"
            }, {
                name: "bicyclist_tone1"
            }, {
                name: "bicyclist_tone2"
            }, {
                name: "bicyclist_tone3"
            }, {
                name: "bicyclist_tone4"
            }, {
                name: "bicyclist_tone5"
            }, {
                name: "bike"
            }, {
                name: "bikini"
            }, {
                name: "biohazard"
            }, {
                name: "biohazard_sign"
            }, {
                name: "bird"
            }, {
                name: "birthday"
            }, {
                name: "bj"
            }, {
                name: "bl"
            }, {
                name: "black_circle"
            }, {
                name: "black_joker"
            }, {
                name: "black_large_square"
            }, {
                name: "black_medium_small_square"
            }, {
                name: "black_medium_square"
            }, {
                name: "black_nib"
            }, {
                name: "black_small_square"
            }, {
                name: "black_square_button"
            }, {
                name: "blossom"
            }, {
                name: "blowfish"
            }, {
                name: "blue_book"
            }, {
                name: "blue_car"
            }, {
                name: "blue_heart"
            }, {
                name: "blush"
            }, {
                name: "bm"
            }, {
                name: "bn"
            }, {
                name: "bo"
            }, {
                name: "boar"
            }, {
                name: "bomb"
            }, {
                name: "book"
            }, {
                name: "bookmark"
            }, {
                name: "bookmark_tabs"
            }, {
                name: "books"
            }, {
                name: "boom"
            }, {
                name: "boot"
            }, {
                name: "bottle_with_popping_cork"
            }, {
                name: "bouquet"
            }, {
                name: "bow"
            }, {
                name: "bow_and_arrow"
            }, {
                name: "bow_tone1"
            }, {
                name: "bow_tone2"
            }, {
                name: "bow_tone3"
            }, {
                name: "bow_tone4"
            }, {
                name: "bow_tone5"
            }, {
                name: "bowling"
            }, {
                name: "boy"
            }, {
                name: "boy_tone1"
            }, {
                name: "boy_tone2"
            }, {
                name: "boy_tone3"
            }, {
                name: "boy_tone4"
            }, {
                name: "boy_tone5"
            }, {
                name: "bq"
            }, {
                name: "br"
            }, {
                name: "bread"
            }, {
                name: "bride_with_veil"
            }, {
                name: "bride_with_veil_tone1"
            }, {
                name: "bride_with_veil_tone2"
            }, {
                name: "bride_with_veil_tone3"
            }, {
                name: "bride_with_veil_tone4"
            }, {
                name: "bride_with_veil_tone5"
            }, {
                name: "bridge_at_night"
            }, {
                name: "briefcase"
            }, {
                name: "broken_heart"
            }, {
                name: "bs"
            }, {
                name: "bt"
            }, {
                name: "bug"
            }, {
                name: "building_construction"
            }, {
                name: "bulb"
            }, {
                name: "bullettrain_front"
            }, {
                name: "bullettrain_side"
            }, {
                name: "burrito"
            }, {
                name: "bus"
            }, {
                name: "busstop"
            }, {
                name: "bust_in_silhouette"
            }, {
                name: "busts_in_silhouette"
            }, {
                name: "bv"
            }, {
                name: "bw"
            }, {
                name: "by"
            }, {
                name: "bz"
            }, {
                name: "ca"
            }, {
                name: "cactus"
            }, {
                name: "cake"
            }, {
                name: "calendar"
            }, {
                name: "calendar_spiral"
            }, {
                name: "calling"
            }, {
                name: "camel"
            }, {
                name: "camera"
            }, {
                name: "camera_with_flash"
            }, {
                name: "camping"
            }, {
                name: "cancer"
            }, {
                name: "candle"
            }, {
                name: "candy"
            }, {
                name: "capital_abcd"
            }, {
                name: "capricorn"
            }, {
                name: "card_box"
            }, {
                name: "card_file_box"
            }, {
                name: "card_index"
            }, {
                name: "card_index_dividers"
            }, {
                name: "carousel_horse"
            }, {
                name: "cat"
            }, {
                name: "cat2"
            }, {
                name: "cc"
            }, {
                name: "cd"
            }, {
                name: "cf"
            }, {
                name: "cg"
            }, {
                name: "ch"
            }, {
                name: "chains"
            }, {
                name: "champagne"
            }, {
                name: "chart"
            }, {
                name: "chart_with_downwards_trend"
            }, {
                name: "chart_with_upwards_trend"
            }, {
                name: "checkered_flag"
            }, {
                name: "cheese"
            }, {
                name: "cheese_wedge"
            }, {
                name: "cherries"
            }, {
                name: "cherry_blossom"
            }, {
                name: "chestnut"
            }, {
                name: "chicken"
            }, {
                name: "children_crossing"
            }, {
                name: "chile"
            }, {
                name: "chipmunk"
            }, {
                name: "chocolate_bar"
            }, {
                name: "christmas_tree"
            }, {
                name: "church"
            }, {
                name: "ci"
            }, {
                name: "cinema"
            }, {
                name: "circus_tent"
            }, {
                name: "city_dusk"
            }, {
                name: "city_sunrise"
            }, {
                name: "city_sunset"
            }, {
                name: "cityscape"
            }, {
                name: "ck"
            }, {
                name: "cl"
            }, {
                name: "clap"
            }, {
                name: "clap_tone1"
            }, {
                name: "clap_tone2"
            }, {
                name: "clap_tone3"
            }, {
                name: "clap_tone4"
            }, {
                name: "clap_tone5"
            }, {
                name: "clapper"
            }, {
                name: "classical_building"
            }, {
                name: "clipboard"
            }, {
                name: "clock"
            }, {
                name: "clock1"
            }, {
                name: "clock10"
            }, {
                name: "clock1030"
            }, {
                name: "clock11"
            }, {
                name: "clock1130"
            }, {
                name: "clock12"
            }, {
                name: "clock1230"
            }, {
                name: "clock130"
            }, {
                name: "clock2"
            }, {
                name: "clock230"
            }, {
                name: "clock3"
            }, {
                name: "clock330"
            }, {
                name: "clock4"
            }, {
                name: "clock430"
            }, {
                name: "clock5"
            }, {
                name: "clock530"
            }, {
                name: "clock6"
            }, {
                name: "clock630"
            }, {
                name: "clock7"
            }, {
                name: "clock730"
            }, {
                name: "clock8"
            }, {
                name: "clock830"
            }, {
                name: "clock9"
            }, {
                name: "clock930"
            }, {
                name: "closed_book"
            }, {
                name: "closed_lock_with_key"
            }, {
                name: "closed_umbrella"
            }, {
                name: "cloud"
            }, {
                name: "cloud_lightning"
            }, {
                name: "cloud_rain"
            }, {
                name: "cloud_snow"
            }, {
                name: "cloud_tornado"
            }, {
                name: "cloud_with_lightning"
            }, {
                name: "cloud_with_rain"
            }, {
                name: "cloud_with_snow"
            }, {
                name: "cloud_with_tornado"
            }, {
                name: "clubs"
            }, {
                name: "cm"
            }, {
                name: "cn"
            }, {
                name: "co"
            }, {
                name: "cocktail"
            }, {
                name: "coffee"
            }, {
                name: "coffin"
            }, {
                name: "cold_sweat"
            }, {
                name: "comet"
            }, {
                name: "compression"
            }, {
                name: "computer"
            }, {
                name: "confetti_ball"
            }, {
                name: "confounded"
            }, {
                name: "confused"
            }, {
                name: "congo"
            }, {
                name: "congratulations"
            }, {
                name: "construction"
            }, {
                name: "construction_site"
            }, {
                name: "construction_worker"
            }, {
                name: "construction_worker_tone1"
            }, {
                name: "construction_worker_tone2"
            }, {
                name: "construction_worker_tone3"
            }, {
                name: "construction_worker_tone4"
            }, {
                name: "construction_worker_tone5"
            }, {
                name: "control_knobs"
            }, {
                name: "convenience_store"
            }, {
                name: "cookie"
            }, {
                name: "cool"
            }, {
                name: "cop"
            }, {
                name: "cop_tone1"
            }, {
                name: "cop_tone2"
            }, {
                name: "cop_tone3"
            }, {
                name: "cop_tone4"
            }, {
                name: "cop_tone5"
            }, {
                name: "copyright"
            }, {
                name: "corn"
            }, {
                name: "couch"
            }, {
                name: "couch_and_lamp"
            }, {
                name: "couple"
            }, {
                name: "couple_mm"
            }, {
                name: "couple_with_heart"
            }, {
                name: "couple_with_heart_mm"
            }, {
                name: "couple_with_heart_ww"
            }, {
                name: "couple_ww"
            }, {
                name: "couplekiss"
            }, {
                name: "couplekiss_mm"
            }, {
                name: "couplekiss_ww"
            }, {
                name: "cow"
            }, {
                name: "cow2"
            }, {
                name: "cp"
            }, {
                name: "cr"
            }, {
                name: "crab"
            }, {
                name: "crayon"
            }, {
                name: "credit_card"
            }, {
                name: "crescent_moon"
            }, {
                name: "cricket"
            }, {
                name: "cricket_bat_ball"
            }, {
                name: "crocodile"
            }, {
                name: "cross"
            }, {
                name: "crossed_flags"
            }, {
                name: "crossed_swords"
            }, {
                name: "crown"
            }, {
                name: "cruise_ship"
            }, {
                name: "cry"
            }, {
                name: "crying_cat_face"
            }, {
                name: "crystal_ball"
            }, {
                name: "cu"
            }, {
                name: "cupid"
            }, {
                name: "curly_loop"
            }, {
                name: "currency_exchange"
            }, {
                name: "curry"
            }, {
                name: "custard"
            }, {
                name: "customs"
            }, {
                name: "cv"
            }, {
                name: "cw"
            }, {
                name: "cx"
            }, {
                name: "cy"
            }, {
                name: "cyclone"
            }, {
                name: "cz"
            }, {
                name: "dagger"
            }, {
                name: "dagger_knife"
            }, {
                name: "dancer"
            }, {
                name: "dancer_tone1"
            }, {
                name: "dancer_tone2"
            }, {
                name: "dancer_tone3"
            }, {
                name: "dancer_tone4"
            }, {
                name: "dancer_tone5"
            }, {
                name: "dancers"
            }, {
                name: "dango"
            }, {
                name: "dark_sunglasses"
            }, {
                name: "dart"
            }, {
                name: "dash"
            }, {
                name: "date"
            }, {
                name: "de"
            }, {
                name: "deciduous_tree"
            }, {
                name: "department_store"
            }, {
                name: "derelict_house_building"
            }, {
                name: "desert"
            }, {
                name: "desert_island"
            }, {
                name: "desktop"
            }, {
                name: "desktop_computer"
            }, {
                name: "dg"
            }, {
                name: "diamond_shape_with_a_dot_inside"
            }, {
                name: "diamonds"
            }, {
                name: "disappointed"
            }, {
                name: "disappointed_relieved"
            }, {
                name: "dividers"
            }, {
                name: "dizzy"
            }, {
                name: "dizzy_face"
            }, {
                name: "dj"
            }, {
                name: "dk"
            }, {
                name: "dm"
            }, {
                name: "do"
            }, {
                name: "do_not_litter"
            }, {
                name: "dog"
            }, {
                name: "dog2"
            }, {
                name: "dollar"
            }, {
                name: "dolls"
            }, {
                name: "dolphin"
            }, {
                name: "door"
            }, {
                name: "double_vertical_bar"
            }, {
                name: "doughnut"
            }, {
                name: "dove"
            }, {
                name: "dove_of_peace"
            }, {
                name: "dragon"
            }, {
                name: "dragon_face"
            }, {
                name: "dress"
            }, {
                name: "dromedary_camel"
            }, {
                name: "droplet"
            }, {
                name: "dvd"
            }, {
                name: "dz"
            }, {
                name: "e-mail"
            }, {
                name: "ea"
            }, {
                name: "ear"
            }, {
                name: "ear_of_rice"
            }, {
                name: "ear_tone1"
            }, {
                name: "ear_tone2"
            }, {
                name: "ear_tone3"
            }, {
                name: "ear_tone4"
            }, {
                name: "ear_tone5"
            }, {
                name: "earth_africa"
            }, {
                name: "earth_americas"
            }, {
                name: "earth_asia"
            }, {
                name: "ec"
            }, {
                name: "ee"
            }, {
                name: "eg"
            }, {
                name: "egg"
            }, {
                name: "eggplant"
            }, {
                name: "eh"
            }, {
                name: "eight"
            }, {
                name: "eight_pointed_black_star"
            }, {
                name: "eight_spoked_asterisk"
            }, {
                name: "electric_plug"
            }, {
                name: "elephant"
            }, {
                name: "email"
            }, {
                name: "end"
            }, {
                name: "envelope"
            }, {
                name: "envelope_with_arrow"
            }, {
                name: "er"
            }, {
                name: "es"
            }, {
                name: "et"
            }, {
                name: "eu"
            }, {
                name: "euro"
            }, {
                name: "european_castle"
            }, {
                name: "european_post_office"
            }, {
                name: "evergreen_tree"
            }, {
                name: "exclamation"
            }, {
                name: "expressionless"
            }, {
                name: "eye"
            }, {
                name: "eye_in_speech_bubble"
            }, {
                name: "eyeglasses"
            }, {
                name: "eyes"
            }, {
                name: "face_with_head_bandage"
            }, {
                name: "face_with_rolling_eyes"
            }, {
                name: "face_with_thermometer"
            }, {
                name: "factory"
            }, {
                name: "fallen_leaf"
            }, {
                name: "family"
            }, {
                name: "family_mmb"
            }, {
                name: "family_mmbb"
            }, {
                name: "family_mmg"
            }, {
                name: "family_mmgb"
            }, {
                name: "family_mmgg"
            }, {
                name: "family_mwbb"
            }, {
                name: "family_mwg"
            }, {
                name: "family_mwgb"
            }, {
                name: "family_mwgg"
            }, {
                name: "family_wwb"
            }, {
                name: "family_wwbb"
            }, {
                name: "family_wwg"
            }, {
                name: "family_wwgb"
            }, {
                name: "family_wwgg"
            }, {
                name: "fast_forward"
            }, {
                name: "fax"
            }, {
                name: "fearful"
            }, {
                name: "feet"
            }, {
                name: "ferris_wheel"
            }, {
                name: "ferry"
            }, {
                name: "fi"
            }, {
                name: "field_hockey"
            }, {
                name: "file_cabinet"
            }, {
                name: "file_folder"
            }, {
                name: "film_frames"
            }, {
                name: "film_projector"
            }, {
                name: "fire"
            }, {
                name: "fire_engine"
            }, {
                name: "fireworks"
            }, {
                name: "first_quarter_moon"
            }, {
                name: "first_quarter_moon_with_face"
            }, {
                name: "fish"
            }, {
                name: "fish_cake"
            }, {
                name: "fishing_pole_and_fish"
            }, {
                name: "fist"
            }, {
                name: "fist_tone1"
            }, {
                name: "fist_tone2"
            }, {
                name: "fist_tone3"
            }, {
                name: "fist_tone4"
            }, {
                name: "fist_tone5"
            }, {
                name: "five"
            }, {
                name: "fj"
            }, {
                name: "fk"
            }, {
                name: "flag_ac"
            }, {
                name: "flag_ad"
            }, {
                name: "flag_ae"
            }, {
                name: "flag_af"
            }, {
                name: "flag_ag"
            }, {
                name: "flag_ai"
            }, {
                name: "flag_al"
            }, {
                name: "flag_am"
            }, {
                name: "flag_ao"
            }, {
                name: "flag_aq"
            }, {
                name: "flag_ar"
            }, {
                name: "flag_as"
            }, {
                name: "flag_at"
            }, {
                name: "flag_au"
            }, {
                name: "flag_aw"
            }, {
                name: "flag_ax"
            }, {
                name: "flag_az"
            }, {
                name: "flag_ba"
            }, {
                name: "flag_bb"
            }, {
                name: "flag_bd"
            }, {
                name: "flag_be"
            }, {
                name: "flag_bf"
            }, {
                name: "flag_bg"
            }, {
                name: "flag_bh"
            }, {
                name: "flag_bi"
            }, {
                name: "flag_bj"
            }, {
                name: "flag_bl"
            }, {
                name: "flag_black"
            }, {
                name: "flag_bm"
            }, {
                name: "flag_bn"
            }, {
                name: "flag_bo"
            }, {
                name: "flag_bq"
            }, {
                name: "flag_br"
            }, {
                name: "flag_bs"
            }, {
                name: "flag_bt"
            }, {
                name: "flag_bv"
            }, {
                name: "flag_bw"
            }, {
                name: "flag_by"
            }, {
                name: "flag_bz"
            }, {
                name: "flag_ca"
            }, {
                name: "flag_cc"
            }, {
                name: "flag_cd"
            }, {
                name: "flag_cf"
            }, {
                name: "flag_cg"
            }, {
                name: "flag_ch"
            }, {
                name: "flag_ci"
            }, {
                name: "flag_ck"
            }, {
                name: "flag_cl"
            }, {
                name: "flag_cm"
            }, {
                name: "flag_cn"
            }, {
                name: "flag_co"
            }, {
                name: "flag_cp"
            }, {
                name: "flag_cr"
            }, {
                name: "flag_cu"
            }, {
                name: "flag_cv"
            }, {
                name: "flag_cw"
            }, {
                name: "flag_cx"
            }, {
                name: "flag_cy"
            }, {
                name: "flag_cz"
            }, {
                name: "flag_de"
            }, {
                name: "flag_dg"
            }, {
                name: "flag_dj"
            }, {
                name: "flag_dk"
            }, {
                name: "flag_dm"
            }, {
                name: "flag_do"
            }, {
                name: "flag_dz"
            }, {
                name: "flag_ea"
            }, {
                name: "flag_ec"
            }, {
                name: "flag_ee"
            }, {
                name: "flag_eg"
            }, {
                name: "flag_eh"
            }, {
                name: "flag_er"
            }, {
                name: "flag_es"
            }, {
                name: "flag_et"
            }, {
                name: "flag_eu"
            }, {
                name: "flag_fi"
            }, {
                name: "flag_fj"
            }, {
                name: "flag_fk"
            }, {
                name: "flag_fm"
            }, {
                name: "flag_fo"
            }, {
                name: "flag_fr"
            }, {
                name: "flag_ga"
            }, {
                name: "flag_gb"
            }, {
                name: "flag_gd"
            }, {
                name: "flag_ge"
            }, {
                name: "flag_gf"
            }, {
                name: "flag_gg"
            }, {
                name: "flag_gh"
            }, {
                name: "flag_gi"
            }, {
                name: "flag_gl"
            }, {
                name: "flag_gm"
            }, {
                name: "flag_gn"
            }, {
                name: "flag_gp"
            }, {
                name: "flag_gq"
            }, {
                name: "flag_gr"
            }, {
                name: "flag_gs"
            }, {
                name: "flag_gt"
            }, {
                name: "flag_gu"
            }, {
                name: "flag_gw"
            }, {
                name: "flag_gy"
            }, {
                name: "flag_hk"
            }, {
                name: "flag_hm"
            }, {
                name: "flag_hn"
            }, {
                name: "flag_hr"
            }, {
                name: "flag_ht"
            }, {
                name: "flag_hu"
            }, {
                name: "flag_ic"
            }, {
                name: "flag_id"
            }, {
                name: "flag_ie"
            }, {
                name: "flag_il"
            }, {
                name: "flag_im"
            }, {
                name: "flag_in"
            }, {
                name: "flag_io"
            }, {
                name: "flag_iq"
            }, {
                name: "flag_ir"
            }, {
                name: "flag_is"
            }, {
                name: "flag_it"
            }, {
                name: "flag_je"
            }, {
                name: "flag_jm"
            }, {
                name: "flag_jo"
            }, {
                name: "flag_jp"
            }, {
                name: "flag_ke"
            }, {
                name: "flag_kg"
            }, {
                name: "flag_kh"
            }, {
                name: "flag_ki"
            }, {
                name: "flag_km"
            }, {
                name: "flag_kn"
            }, {
                name: "flag_kp"
            }, {
                name: "flag_kr"
            }, {
                name: "flag_kw"
            }, {
                name: "flag_ky"
            }, {
                name: "flag_kz"
            }, {
                name: "flag_la"
            }, {
                name: "flag_lb"
            }, {
                name: "flag_lc"
            }, {
                name: "flag_li"
            }, {
                name: "flag_lk"
            }, {
                name: "flag_lr"
            }, {
                name: "flag_ls"
            }, {
                name: "flag_lt"
            }, {
                name: "flag_lu"
            }, {
                name: "flag_lv"
            }, {
                name: "flag_ly"
            }, {
                name: "flag_ma"
            }, {
                name: "flag_mc"
            }, {
                name: "flag_md"
            }, {
                name: "flag_me"
            }, {
                name: "flag_mf"
            }, {
                name: "flag_mg"
            }, {
                name: "flag_mh"
            }, {
                name: "flag_mk"
            }, {
                name: "flag_ml"
            }, {
                name: "flag_mm"
            }, {
                name: "flag_mn"
            }, {
                name: "flag_mo"
            }, {
                name: "flag_mp"
            }, {
                name: "flag_mq"
            }, {
                name: "flag_mr"
            }, {
                name: "flag_ms"
            }, {
                name: "flag_mt"
            }, {
                name: "flag_mu"
            }, {
                name: "flag_mv"
            }, {
                name: "flag_mw"
            }, {
                name: "flag_mx"
            }, {
                name: "flag_my"
            }, {
                name: "flag_mz"
            }, {
                name: "flag_na"
            }, {
                name: "flag_nc"
            }, {
                name: "flag_ne"
            }, {
                name: "flag_nf"
            }, {
                name: "flag_ng"
            }, {
                name: "flag_ni"
            }, {
                name: "flag_nl"
            }, {
                name: "flag_no"
            }, {
                name: "flag_np"
            }, {
                name: "flag_nr"
            }, {
                name: "flag_nu"
            }, {
                name: "flag_nz"
            }, {
                name: "flag_om"
            }, {
                name: "flag_pa"
            }, {
                name: "flag_pe"
            }, {
                name: "flag_pf"
            }, {
                name: "flag_pg"
            }, {
                name: "flag_ph"
            }, {
                name: "flag_pk"
            }, {
                name: "flag_pl"
            }, {
                name: "flag_pm"
            }, {
                name: "flag_pn"
            }, {
                name: "flag_pr"
            }, {
                name: "flag_ps"
            }, {
                name: "flag_pt"
            }, {
                name: "flag_pw"
            }, {
                name: "flag_py"
            }, {
                name: "flag_qa"
            }, {
                name: "flag_re"
            }, {
                name: "flag_ro"
            }, {
                name: "flag_rs"
            }, {
                name: "flag_ru"
            }, {
                name: "flag_rw"
            }, {
                name: "flag_sa"
            }, {
                name: "flag_sb"
            }, {
                name: "flag_sc"
            }, {
                name: "flag_sd"
            }, {
                name: "flag_se"
            }, {
                name: "flag_sg"
            }, {
                name: "flag_sh"
            }, {
                name: "flag_si"
            }, {
                name: "flag_sj"
            }, {
                name: "flag_sk"
            }, {
                name: "flag_sl"
            }, {
                name: "flag_sm"
            }, {
                name: "flag_sn"
            }, {
                name: "flag_so"
            }, {
                name: "flag_sr"
            }, {
                name: "flag_ss"
            }, {
                name: "flag_st"
            }, {
                name: "flag_sv"
            }, {
                name: "flag_sx"
            }, {
                name: "flag_sy"
            }, {
                name: "flag_sz"
            }, {
                name: "flag_ta"
            }, {
                name: "flag_tc"
            }, {
                name: "flag_td"
            }, {
                name: "flag_tf"
            }, {
                name: "flag_tg"
            }, {
                name: "flag_th"
            }, {
                name: "flag_tj"
            }, {
                name: "flag_tk"
            }, {
                name: "flag_tl"
            }, {
                name: "flag_tm"
            }, {
                name: "flag_tn"
            }, {
                name: "flag_to"
            }, {
                name: "flag_tr"
            }, {
                name: "flag_tt"
            }, {
                name: "flag_tv"
            }, {
                name: "flag_tw"
            }, {
                name: "flag_tz"
            }, {
                name: "flag_ua"
            }, {
                name: "flag_ug"
            }, {
                name: "flag_um"
            }, {
                name: "flag_us"
            }, {
                name: "flag_uy"
            }, {
                name: "flag_uz"
            }, {
                name: "flag_va"
            }, {
                name: "flag_vc"
            }, {
                name: "flag_ve"
            }, {
                name: "flag_vg"
            }, {
                name: "flag_vi"
            }, {
                name: "flag_vn"
            }, {
                name: "flag_vu"
            }, {
                name: "flag_wf"
            }, {
                name: "flag_white"
            }, {
                name: "flag_ws"
            }, {
                name: "flag_xk"
            }, {
                name: "flag_ye"
            }, {
                name: "flag_yt"
            }, {
                name: "flag_za"
            }, {
                name: "flag_zm"
            }, {
                name: "flag_zw"
            }, {
                name: "flags"
            }, {
                name: "flame"
            }, {
                name: "flan"
            }, {
                name: "flashlight"
            }, {
                name: "fleur-de-lis"
            }, {
                name: "floppy_disk"
            }, {
                name: "flower_playing_cards"
            }, {
                name: "flushed"
            }, {
                name: "fm"
            }, {
                name: "fo"
            }, {
                name: "fog"
            }, {
                name: "foggy"
            }, {
                name: "football"
            }, {
                name: "footprints"
            }, {
                name: "fork_and_knife"
            }, {
                name: "fork_and_knife_with_plate"
            }, {
                name: "fork_knife_plate"
            }, {
                name: "fountain"
            }, {
                name: "four"
            }, {
                name: "four_leaf_clover"
            }, {
                name: "fr"
            }, {
                name: "frame_photo"
            }, {
                name: "frame_with_picture"
            }, {
                name: "free"
            }, {
                name: "fried_shrimp"
            }, {
                name: "fries"
            }, {
                name: "frog"
            }, {
                name: "frowning"
            }, {
                name: "frowning2"
            }, {
                name: "fuelpump"
            }, {
                name: "full_moon"
            }, {
                name: "full_moon_with_face"
            }, {
                name: "funeral_urn"
            }, {
                name: "ga"
            }, {
                name: "game_die"
            }, {
                name: "gb"
            }, {
                name: "gd"
            }, {
                name: "ge"
            }, {
                name: "gear"
            }, {
                name: "gem"
            }, {
                name: "gemini"
            }, {
                name: "gf"
            }, {
                name: "gg"
            }, {
                name: "gh"
            }, {
                name: "ghost"
            }, {
                name: "gi"
            }, {
                name: "gift"
            }, {
                name: "gift_heart"
            }, {
                name: "girl"
            }, {
                name: "girl_tone1"
            }, {
                name: "girl_tone2"
            }, {
                name: "girl_tone3"
            }, {
                name: "girl_tone4"
            }, {
                name: "girl_tone5"
            }, {
                name: "gl"
            }, {
                name: "globe_with_meridians"
            }, {
                name: "gm"
            }, {
                name: "gn"
            }, {
                name: "goat"
            }, {
                name: "golf"
            }, {
                name: "golfer"
            }, {
                name: "gp"
            }, {
                name: "gq"
            }, {
                name: "gr"
            }, {
                name: "grandma"
            }, {
                name: "grandma_tone1"
            }, {
                name: "grandma_tone2"
            }, {
                name: "grandma_tone3"
            }, {
                name: "grandma_tone4"
            }, {
                name: "grandma_tone5"
            }, {
                name: "grapes"
            }, {
                name: "green_apple"
            }, {
                name: "green_book"
            }, {
                name: "green_heart"
            }, {
                name: "grey_exclamation"
            }, {
                name: "grey_question"
            }, {
                name: "grimacing"
            }, {
                name: "grin"
            }, {
                name: "grinning"
            }, {
                name: "gs"
            }, {
                name: "gt"
            }, {
                name: "gu"
            }, {
                name: "guardsman"
            }, {
                name: "guardsman_tone1"
            }, {
                name: "guardsman_tone2"
            }, {
                name: "guardsman_tone3"
            }, {
                name: "guardsman_tone4"
            }, {
                name: "guardsman_tone5"
            }, {
                name: "guitar"
            }, {
                name: "gun"
            }, {
                name: "gw"
            }, {
                name: "gy"
            }, {
                name: "haircut"
            }, {
                name: "haircut_tone1"
            }, {
                name: "haircut_tone2"
            }, {
                name: "haircut_tone3"
            }, {
                name: "haircut_tone4"
            }, {
                name: "haircut_tone5"
            }, {
                name: "hamburger"
            }, {
                name: "hammer"
            }, {
                name: "hammer_and_pick"
            }, {
                name: "hammer_and_wrench"
            }, {
                name: "hammer_pick"
            }, {
                name: "hamster"
            }, {
                name: "hand_splayed"
            }, {
                name: "hand_splayed_tone1"
            }, {
                name: "hand_splayed_tone2"
            }, {
                name: "hand_splayed_tone3"
            }, {
                name: "hand_splayed_tone4"
            }, {
                name: "hand_splayed_tone5"
            }, {
                name: "handbag"
            }, {
                name: "hankey"
            }, {
                name: "hash"
            }, {
                name: "hatched_chick"
            }, {
                name: "hatching_chick"
            }, {
                name: "head_bandage"
            }, {
                name: "headphones"
            }, {
                name: "hear_no_evil"
            }, {
                name: "heart"
            }, {
                name: "heart_decoration"
            }, {
                name: "heart_exclamation"
            }, {
                name: "heart_eyes"
            }, {
                name: "heart_eyes_cat"
            }, {
                name: "heartbeat"
            }, {
                name: "heartpulse"
            }, {
                name: "hearts"
            }, {
                name: "heavy_check_mark"
            }, {
                name: "heavy_division_sign"
            }, {
                name: "heavy_dollar_sign"
            }, {
                name: "heavy_heart_exclamation_mark_ornament"
            }, {
                name: "heavy_minus_sign"
            }, {
                name: "heavy_multiplication_x"
            }, {
                name: "heavy_plus_sign"
            }, {
                name: "helicopter"
            }, {
                name: "helmet_with_cross"
            }, {
                name: "helmet_with_white_cross"
            }, {
                name: "herb"
            }, {
                name: "hibiscus"
            }, {
                name: "high_brightness"
            }, {
                name: "high_heel"
            }, {
                name: "hk"
            }, {
                name: "hm"
            }, {
                name: "hn"
            }, {
                name: "hockey"
            }, {
                name: "hole"
            }, {
                name: "homes"
            }, {
                name: "honey_pot"
            }, {
                name: "horse"
            }, {
                name: "horse_racing"
            }, {
                name: "horse_racing_tone1"
            }, {
                name: "horse_racing_tone2"
            }, {
                name: "horse_racing_tone3"
            }, {
                name: "horse_racing_tone4"
            }, {
                name: "horse_racing_tone5"
            }, {
                name: "hospital"
            }, {
                name: "hot_dog"
            }, {
                name: "hot_pepper"
            }, {
                name: "hotdog"
            }, {
                name: "hotel"
            }, {
                name: "hotsprings"
            }, {
                name: "hourglass"
            }, {
                name: "hourglass_flowing_sand"
            }, {
                name: "house"
            }, {
                name: "house_abandoned"
            }, {
                name: "house_buildings"
            }, {
                name: "house_with_garden"
            }, {
                name: "hr"
            }, {
                name: "ht"
            }, {
                name: "hu"
            }, {
                name: "hugging"
            }, {
                name: "hugging_face"
            }, {
                name: "hushed"
            }, {
                name: "ic"
            }, {
                name: "ice_cream"
            }, {
                name: "ice_skate"
            }, {
                name: "icecream"
            }, {
                name: "id"
            }, {
                name: "ideograph_advantage"
            }, {
                name: "ie"
            }, {
                name: "il"
            }, {
                name: "im"
            }, {
                name: "imp"
            }, {
                name: "in"
            }, {
                name: "inbox_tray"
            }, {
                name: "incoming_envelope"
            }, {
                name: "indonesia"
            }, {
                name: "information_desk_person"
            }, {
                name: "information_desk_person_tone1"
            }, {
                name: "information_desk_person_tone2"
            }, {
                name: "information_desk_person_tone3"
            }, {
                name: "information_desk_person_tone4"
            }, {
                name: "information_desk_person_tone5"
            }, {
                name: "information_source"
            }, {
                name: "innocent"
            }, {
                name: "interrobang"
            }, {
                name: "io"
            }, {
                name: "iphone"
            }, {
                name: "iq"
            }, {
                name: "ir"
            }, {
                name: "is"
            }, {
                name: "island"
            }, {
                name: "it"
            }, {
                name: "izakaya_lantern"
            }, {
                name: "jack_o_lantern"
            }, {
                name: "japan"
            }, {
                name: "japanese_castle"
            }, {
                name: "japanese_goblin"
            }, {
                name: "japanese_ogre"
            }, {
                name: "je"
            }, {
                name: "jeans"
            }, {
                name: "jm"
            }, {
                name: "jo"
            }, {
                name: "joy"
            }, {
                name: "joy_cat"
            }, {
                name: "joystick"
            }, {
                name: "jp"
            }, {
                name: "kaaba"
            }, {
                name: "ke"
            }, {
                name: "key"
            }, {
                name: "key2"
            }, {
                name: "keyboard"
            }, {
                name: "keycap_asterisk"
            }, {
                name: "kg"
            }, {
                name: "kh"
            }, {
                name: "ki"
            }, {
                name: "kimono"
            }, {
                name: "kiss"
            }, {
                name: "kiss_mm"
            }, {
                name: "kiss_ww"
            }, {
                name: "kissing"
            }, {
                name: "kissing_cat"
            }, {
                name: "kissing_closed_eyes"
            }, {
                name: "kissing_heart"
            }, {
                name: "kissing_smiling_eyes"
            }, {
                name: "km"
            }, {
                name: "kn"
            }, {
                name: "knife"
            }, {
                name: "koala"
            }, {
                name: "koko"
            }, {
                name: "kp"
            }, {
                name: "kr"
            }, {
                name: "kw"
            }, {
                name: "ky"
            }, {
                name: "kz"
            }, {
                name: "la"
            }, {
                name: "label"
            }, {
                name: "large_blue_circle"
            }, {
                name: "large_blue_diamond"
            }, {
                name: "large_orange_diamond"
            }, {
                name: "last_quarter_moon"
            }, {
                name: "last_quarter_moon_with_face"
            }, {
                name: "latin_cross"
            }, {
                name: "laughing"
            }, {
                name: "lb"
            }, {
                name: "lc"
            }, {
                name: "leaves"
            }, {
                name: "ledger"
            }, {
                name: "left_luggage"
            }, {
                name: "left_right_arrow"
            }, {
                name: "leftwards_arrow_with_hook"
            }, {
                name: "lemon"
            }, {
                name: "leo"
            }, {
                name: "leopard"
            }, {
                name: "level_slider"
            }, {
                name: "levitate"
            }, {
                name: "li"
            }, {
                name: "libra"
            }, {
                name: "lifter"
            }, {
                name: "lifter_tone1"
            }, {
                name: "lifter_tone2"
            }, {
                name: "lifter_tone3"
            }, {
                name: "lifter_tone4"
            }, {
                name: "lifter_tone5"
            }, {
                name: "light_rail"
            }, {
                name: "link"
            }, {
                name: "linked_paperclips"
            }, {
                name: "lion"
            }, {
                name: "lion_face"
            }, {
                name: "lips"
            }, {
                name: "lipstick"
            }, {
                name: "lk"
            }, {
                name: "lock"
            }, {
                name: "lock_with_ink_pen"
            }, {
                name: "lollipop"
            }, {
                name: "loop"
            }, {
                name: "loud_sound"
            }, {
                name: "loudspeaker"
            }, {
                name: "love_hotel"
            }, {
                name: "love_letter"
            }, {
                name: "low_brightness"
            }, {
                name: "lower_left_ballpoint_pen"
            }, {
                name: "lower_left_crayon"
            }, {
                name: "lower_left_fountain_pen"
            }, {
                name: "lower_left_paintbrush"
            }, {
                name: "lr"
            }, {
                name: "ls"
            }, {
                name: "lt"
            }, {
                name: "lu"
            }, {
                name: "lv"
            }, {
                name: "ly"
            }, {
                name: "m"
            }, {
                name: "ma"
            }, {
                name: "mag"
            }, {
                name: "mag_right"
            }, {
                name: "mahjong"
            }, {
                name: "mailbox"
            }, {
                name: "mailbox_closed"
            }, {
                name: "mailbox_with_mail"
            }, {
                name: "mailbox_with_no_mail"
            }, {
                name: "man"
            }, {
                name: "man_in_business_suit_levitating"
            }, {
                name: "man_tone1"
            }, {
                name: "man_tone2"
            }, {
                name: "man_tone3"
            }, {
                name: "man_tone4"
            }, {
                name: "man_tone5"
            }, {
                name: "man_with_gua_pi_mao"
            }, {
                name: "man_with_gua_pi_mao_tone1"
            }, {
                name: "man_with_gua_pi_mao_tone2"
            }, {
                name: "man_with_gua_pi_mao_tone3"
            }, {
                name: "man_with_gua_pi_mao_tone4"
            }, {
                name: "man_with_gua_pi_mao_tone5"
            }, {
                name: "man_with_turban"
            }, {
                name: "man_with_turban_tone1"
            }, {
                name: "man_with_turban_tone2"
            }, {
                name: "man_with_turban_tone3"
            }, {
                name: "man_with_turban_tone4"
            }, {
                name: "man_with_turban_tone5"
            }, {
                name: "mans_shoe"
            }, {
                name: "mantlepiece_clock"
            }, {
                name: "map"
            }, {
                name: "maple_leaf"
            }, {
                name: "mask"
            }, {
                name: "massage"
            }, {
                name: "massage_tone1"
            }, {
                name: "massage_tone2"
            }, {
                name: "massage_tone3"
            }, {
                name: "massage_tone4"
            }, {
                name: "massage_tone5"
            }, {
                name: "mc"
            }, {
                name: "md"
            }, {
                name: "me"
            }, {
                name: "meat_on_bone"
            }, {
                name: "medal"
            }, {
                name: "mega"
            }, {
                name: "melon"
            }, {
                name: "menorah"
            }, {
                name: "mens"
            }, {
                name: "metal"
            }, {
                name: "metal_tone1"
            }, {
                name: "metal_tone2"
            }, {
                name: "metal_tone3"
            }, {
                name: "metal_tone4"
            }, {
                name: "metal_tone5"
            }, {
                name: "metro"
            }, {
                name: "mf"
            }, {
                name: "mg"
            }, {
                name: "mh"
            }, {
                name: "microphone"
            }, {
                name: "microphone2"
            }, {
                name: "microscope"
            }, {
                name: "middle_finger"
            }, {
                name: "middle_finger_tone1"
            }, {
                name: "middle_finger_tone2"
            }, {
                name: "middle_finger_tone3"
            }, {
                name: "middle_finger_tone4"
            }, {
                name: "middle_finger_tone5"
            }, {
                name: "military_medal"
            }, {
                name: "milky_way"
            }, {
                name: "minibus"
            }, {
                name: "minidisc"
            }, {
                name: "mk"
            }, {
                name: "ml"
            }, {
                name: "mm"
            }, {
                name: "mn"
            }, {
                name: "mo"
            }, {
                name: "mobile_phone_off"
            }, {
                name: "money_mouth"
            }, {
                name: "money_mouth_face"
            }, {
                name: "money_with_wings"
            }, {
                name: "moneybag"
            }, {
                name: "monkey"
            }, {
                name: "monkey_face"
            }, {
                name: "monorail"
            }, {
                name: "mortar_board"
            }, {
                name: "mosque"
            }, {
                name: "motorboat"
            }, {
                name: "motorcycle"
            }, {
                name: "motorway"
            }, {
                name: "mount_fuji"
            }, {
                name: "mountain"
            }, {
                name: "mountain_bicyclist"
            }, {
                name: "mountain_bicyclist_tone1"
            }, {
                name: "mountain_bicyclist_tone2"
            }, {
                name: "mountain_bicyclist_tone3"
            }, {
                name: "mountain_bicyclist_tone4"
            }, {
                name: "mountain_bicyclist_tone5"
            }, {
                name: "mountain_cableway"
            }, {
                name: "mountain_railway"
            }, {
                name: "mountain_snow"
            }, {
                name: "mouse"
            }, {
                name: "mouse2"
            }, {
                name: "mouse_three_button"
            }, {
                name: "movie_camera"
            }, {
                name: "moyai"
            }, {
                name: "mp"
            }, {
                name: "mq"
            }, {
                name: "mr"
            }, {
                name: "ms"
            }, {
                name: "mt"
            }, {
                name: "mu"
            }, {
                name: "muscle"
            }, {
                name: "muscle_tone1"
            }, {
                name: "muscle_tone2"
            }, {
                name: "muscle_tone3"
            }, {
                name: "muscle_tone4"
            }, {
                name: "muscle_tone5"
            }, {
                name: "mushroom"
            }, {
                name: "musical_keyboard"
            }, {
                name: "musical_note"
            }, {
                name: "musical_score"
            }, {
                name: "mute"
            }, {
                name: "mv"
            }, {
                name: "mw"
            }, {
                name: "mx"
            }, {
                name: "my"
            }, {
                name: "mz"
            }, {
                name: "na"
            }, {
                name: "nail_care"
            }, {
                name: "nail_care_tone1"
            }, {
                name: "nail_care_tone2"
            }, {
                name: "nail_care_tone3"
            }, {
                name: "nail_care_tone4"
            }, {
                name: "nail_care_tone5"
            }, {
                name: "name_badge"
            }, {
                name: "national_park"
            }, {
                name: "nc"
            }, {
                name: "ne"
            }, {
                name: "necktie"
            }, {
                name: "negative_squared_cross_mark"
            }, {
                name: "nerd"
            }, {
                name: "nerd_face"
            }, {
                name: "neutral_face"
            }, {
                name: "new"
            }, {
                name: "new_moon"
            }, {
                name: "new_moon_with_face"
            }, {
                name: "newspaper"
            }, {
                name: "newspaper2"
            }, {
                name: "next_track"
            }, {
                name: "nf"
            }, {
                name: "ng"
            }, {
                name: "ni"
            }, {
                name: "nigeria"
            }, {
                name: "night_with_stars"
            }, {
                name: "nine"
            }, {
                name: "nl"
            }, {
                name: "no"
            }, {
                name: "no_bell"
            }, {
                name: "no_bicycles"
            }, {
                name: "no_entry"
            }, {
                name: "no_entry_sign"
            }, {
                name: "no_good"
            }, {
                name: "no_good_tone1"
            }, {
                name: "no_good_tone2"
            }, {
                name: "no_good_tone3"
            }, {
                name: "no_good_tone4"
            }, {
                name: "no_good_tone5"
            }, {
                name: "no_mobile_phones"
            }, {
                name: "no_mouth"
            }, {
                name: "no_pedestrians"
            }, {
                name: "no_smoking"
            }, {
                name: "non-potable_water"
            }, {
                name: "nose"
            }, {
                name: "nose_tone1"
            }, {
                name: "nose_tone2"
            }, {
                name: "nose_tone3"
            }, {
                name: "nose_tone4"
            }, {
                name: "nose_tone5"
            }, {
                name: "notebook"
            }, {
                name: "notebook_with_decorative_cover"
            }, {
                name: "notepad_spiral"
            }, {
                name: "notes"
            }, {
                name: "np"
            }, {
                name: "nr"
            }, {
                name: "nu"
            }, {
                name: "nut_and_bolt"
            }, {
                name: "nz"
            }, {
                name: "o"
            }, {
                name: "o2"
            }, {
                name: "ocean"
            }, {
                name: "octopus"
            }, {
                name: "oden"
            }, {
                name: "office"
            }, {
                name: "oil"
            }, {
                name: "oil_drum"
            }, {
                name: "ok"
            }, {
                name: "ok_hand"
            }, {
                name: "ok_hand_tone1"
            }, {
                name: "ok_hand_tone2"
            }, {
                name: "ok_hand_tone3"
            }, {
                name: "ok_hand_tone4"
            }, {
                name: "ok_hand_tone5"
            }, {
                name: "ok_woman"
            }, {
                name: "ok_woman_tone1"
            }, {
                name: "ok_woman_tone2"
            }, {
                name: "ok_woman_tone3"
            }, {
                name: "ok_woman_tone4"
            }, {
                name: "ok_woman_tone5"
            }, {
                name: "old_key"
            }, {
                name: "older_man"
            }, {
                name: "older_man_tone1"
            }, {
                name: "older_man_tone2"
            }, {
                name: "older_man_tone3"
            }, {
                name: "older_man_tone4"
            }, {
                name: "older_man_tone5"
            }, {
                name: "older_woman"
            }, {
                name: "older_woman_tone1"
            }, {
                name: "older_woman_tone2"
            }, {
                name: "older_woman_tone3"
            }, {
                name: "older_woman_tone4"
            }, {
                name: "older_woman_tone5"
            }, {
                name: "om"
            }, {
                name: "om_symbol"
            }, {
                name: "on"
            }, {
                name: "oncoming_automobile"
            }, {
                name: "oncoming_bus"
            }, {
                name: "oncoming_police_car"
            }, {
                name: "oncoming_taxi"
            }, {
                name: "one"
            }, {
                name: "open_file_folder"
            }, {
                name: "open_hands"
            }, {
                name: "open_hands_tone1"
            }, {
                name: "open_hands_tone2"
            }, {
                name: "open_hands_tone3"
            }, {
                name: "open_hands_tone4"
            }, {
                name: "open_hands_tone5"
            }, {
                name: "open_mouth"
            }, {
                name: "ophiuchus"
            }, {
                name: "orange_book"
            }, {
                name: "orthodox_cross"
            }, {
                name: "outbox_tray"
            }, {
                name: "ox"
            }, {
                name: "pa"
            }, {
                name: "package"
            }, {
                name: "page_facing_up"
            }, {
                name: "page_with_curl"
            }, {
                name: "pager"
            }, {
                name: "paintbrush"
            }, {
                name: "palm_tree"
            }, {
                name: "panda_face"
            }, {
                name: "paperclip"
            }, {
                name: "paperclips"
            }, {
                name: "park"
            }, {
                name: "parking"
            }, {
                name: "part_alternation_mark"
            }, {
                name: "partly_sunny"
            }, {
                name: "passenger_ship"
            }, {
                name: "passport_control"
            }, {
                name: "pause_button"
            }, {
                name: "paw_prints"
            }, {
                name: "pe"
            }, {
                name: "peace"
            }, {
                name: "peace_symbol"
            }, {
                name: "peach"
            }, {
                name: "pear"
            }, {
                name: "pen_ballpoint"
            }, {
                name: "pen_fountain"
            }, {
                name: "pencil"
            }, {
                name: "pencil2"
            }, {
                name: "penguin"
            }, {
                name: "pensive"
            }, {
                name: "performing_arts"
            }, {
                name: "persevere"
            }, {
                name: "person_frowning"
            }, {
                name: "person_frowning_tone1"
            }, {
                name: "person_frowning_tone2"
            }, {
                name: "person_frowning_tone3"
            }, {
                name: "person_frowning_tone4"
            }, {
                name: "person_frowning_tone5"
            }, {
                name: "person_with_ball"
            }, {
                name: "person_with_ball_tone1"
            }, {
                name: "person_with_ball_tone2"
            }, {
                name: "person_with_ball_tone3"
            }, {
                name: "person_with_ball_tone4"
            }, {
                name: "person_with_ball_tone5"
            }, {
                name: "person_with_blond_hair"
            }, {
                name: "person_with_blond_hair_tone1"
            }, {
                name: "person_with_blond_hair_tone2"
            }, {
                name: "person_with_blond_hair_tone3"
            }, {
                name: "person_with_blond_hair_tone4"
            }, {
                name: "person_with_blond_hair_tone5"
            }, {
                name: "person_with_pouting_face"
            }, {
                name: "person_with_pouting_face_tone1"
            }, {
                name: "person_with_pouting_face_tone2"
            }, {
                name: "person_with_pouting_face_tone3"
            }, {
                name: "person_with_pouting_face_tone4"
            }, {
                name: "person_with_pouting_face_tone5"
            }, {
                name: "pf"
            }, {
                name: "pg"
            }, {
                name: "ph"
            }, {
                name: "pick"
            }, {
                name: "pig"
            }, {
                name: "pig2"
            }, {
                name: "pig_nose"
            }, {
                name: "pill"
            }, {
                name: "pineapple"
            }, {
                name: "ping_pong"
            }, {
                name: "pisces"
            }, {
                name: "pizza"
            }, {
                name: "pk"
            }, {
                name: "pl"
            }, {
                name: "place_of_worship"
            }, {
                name: "play_pause"
            }, {
                name: "pm"
            }, {
                name: "pn"
            }, {
                name: "point_down"
            }, {
                name: "point_down_tone1"
            }, {
                name: "point_down_tone2"
            }, {
                name: "point_down_tone3"
            }, {
                name: "point_down_tone4"
            }, {
                name: "point_down_tone5"
            }, {
                name: "point_left"
            }, {
                name: "point_left_tone1"
            }, {
                name: "point_left_tone2"
            }, {
                name: "point_left_tone3"
            }, {
                name: "point_left_tone4"
            }, {
                name: "point_left_tone5"
            }, {
                name: "point_right"
            }, {
                name: "point_right_tone1"
            }, {
                name: "point_right_tone2"
            }, {
                name: "point_right_tone3"
            }, {
                name: "point_right_tone4"
            }, {
                name: "point_right_tone5"
            }, {
                name: "point_up"
            }, {
                name: "point_up_2"
            }, {
                name: "point_up_2_tone1"
            }, {
                name: "point_up_2_tone2"
            }, {
                name: "point_up_2_tone3"
            }, {
                name: "point_up_2_tone4"
            }, {
                name: "point_up_2_tone5"
            }, {
                name: "point_up_tone1"
            }, {
                name: "point_up_tone2"
            }, {
                name: "point_up_tone3"
            }, {
                name: "point_up_tone4"
            }, {
                name: "point_up_tone5"
            }, {
                name: "police_car"
            }, {
                name: "poo"
            }, {
                name: "poodle"
            }, {
                name: "poop"
            }, {
                name: "popcorn"
            }, {
                name: "post_office"
            }, {
                name: "postal_horn"
            }, {
                name: "postbox"
            }, {
                name: "potable_water"
            }, {
                name: "pouch"
            }, {
                name: "poultry_leg"
            }, {
                name: "pound"
            }, {
                name: "pouting_cat"
            }, {
                name: "pr"
            }, {
                name: "pray"
            }, {
                name: "pray_tone1"
            }, {
                name: "pray_tone2"
            }, {
                name: "pray_tone3"
            }, {
                name: "pray_tone4"
            }, {
                name: "pray_tone5"
            }, {
                name: "prayer_beads"
            }, {
                name: "previous_track"
            }, {
                name: "princess"
            }, {
                name: "princess_tone1"
            }, {
                name: "princess_tone2"
            }, {
                name: "princess_tone3"
            }, {
                name: "princess_tone4"
            }, {
                name: "princess_tone5"
            }, {
                name: "printer"
            }, {
                name: "projector"
            }, {
                name: "ps"
            }, {
                name: "pt"
            }, {
                name: "pudding"
            }, {
                name: "punch"
            }, {
                name: "punch_tone1"
            }, {
                name: "punch_tone2"
            }, {
                name: "punch_tone3"
            }, {
                name: "punch_tone4"
            }, {
                name: "punch_tone5"
            }, {
                name: "purple_heart"
            }, {
                name: "purse"
            }, {
                name: "pushpin"
            }, {
                name: "put_litter_in_its_place"
            }, {
                name: "pw"
            }, {
                name: "py"
            }, {
                name: "qa"
            }, {
                name: "question"
            }, {
                name: "rabbit"
            }, {
                name: "rabbit2"
            }, {
                name: "race_car"
            }, {
                name: "racehorse"
            }, {
                name: "racing_car"
            }, {
                name: "racing_motorcycle"
            }, {
                name: "radio"
            }, {
                name: "radio_button"
            }, {
                name: "radioactive"
            }, {
                name: "radioactive_sign"
            }, {
                name: "rage"
            }, {
                name: "railroad_track"
            }, {
                name: "railway_car"
            }, {
                name: "railway_track"
            }, {
                name: "rainbow"
            }, {
                name: "raised_hand"
            }, {
                name: "raised_hand_tone1"
            }, {
                name: "raised_hand_tone2"
            }, {
                name: "raised_hand_tone3"
            }, {
                name: "raised_hand_tone4"
            }, {
                name: "raised_hand_tone5"
            }, {
                name: "raised_hand_with_fingers_splayed"
            }, {
                name: "raised_hand_with_fingers_splayed_tone1"
            }, {
                name: "raised_hand_with_fingers_splayed_tone2"
            }, {
                name: "raised_hand_with_fingers_splayed_tone3"
            }, {
                name: "raised_hand_with_fingers_splayed_tone4"
            }, {
                name: "raised_hand_with_fingers_splayed_tone5"
            }, {
                name: "raised_hand_with_part_between_middle_and_ring_fingers"
            }, {
                name: "raised_hand_with_part_between_middle_and_ring_fingers_tone1"
            }, {
                name: "raised_hand_with_part_between_middle_and_ring_fingers_tone2"
            }, {
                name: "raised_hand_with_part_between_middle_and_ring_fingers_tone3"
            }, {
                name: "raised_hand_with_part_between_middle_and_ring_fingers_tone4"
            }, {
                name: "raised_hand_with_part_between_middle_and_ring_fingers_tone5"
            }, {
                name: "raised_hands"
            }, {
                name: "raised_hands_tone1"
            }, {
                name: "raised_hands_tone2"
            }, {
                name: "raised_hands_tone3"
            }, {
                name: "raised_hands_tone4"
            }, {
                name: "raised_hands_tone5"
            }, {
                name: "raising_hand"
            }, {
                name: "raising_hand_tone1"
            }, {
                name: "raising_hand_tone2"
            }, {
                name: "raising_hand_tone3"
            }, {
                name: "raising_hand_tone4"
            }, {
                name: "raising_hand_tone5"
            }, {
                name: "ram"
            }, {
                name: "ramen"
            }, {
                name: "rat"
            }, {
                name: "re"
            }, {
                name: "record_button"
            }, {
                name: "recycle"
            }, {
                name: "red_car"
            }, {
                name: "red_circle"
            }, {
                name: "registered"
            }, {
                name: "relaxed"
            }, {
                name: "relieved"
            }, {
                name: "reminder_ribbon"
            }, {
                name: "repeat"
            }, {
                name: "repeat_one"
            }, {
                name: "restroom"
            }, {
                name: "reversed_hand_with_middle_finger_extended"
            }, {
                name: "reversed_hand_with_middle_finger_extended_tone1"
            }, {
                name: "reversed_hand_with_middle_finger_extended_tone2"
            }, {
                name: "reversed_hand_with_middle_finger_extended_tone3"
            }, {
                name: "reversed_hand_with_middle_finger_extended_tone4"
            }, {
                name: "reversed_hand_with_middle_finger_extended_tone5"
            }, {
                name: "revolving_hearts"
            }, {
                name: "rewind"
            }, {
                name: "ribbon"
            }, {
                name: "rice"
            }, {
                name: "rice_ball"
            }, {
                name: "rice_cracker"
            }, {
                name: "rice_scene"
            }, {
                name: "right_anger_bubble"
            }, {
                name: "ring"
            }, {
                name: "ro"
            }, {
                name: "robot"
            }, {
                name: "robot_face"
            }, {
                name: "rocket"
            }, {
                name: "rolled_up_newspaper"
            }, {
                name: "roller_coaster"
            }, {
                name: "rolling_eyes"
            }, {
                name: "rooster"
            }, {
                name: "rose"
            }, {
                name: "rosette"
            }, {
                name: "rotating_light"
            }, {
                name: "round_pushpin"
            }, {
                name: "rowboat"
            }, {
                name: "rowboat_tone1"
            }, {
                name: "rowboat_tone2"
            }, {
                name: "rowboat_tone3"
            }, {
                name: "rowboat_tone4"
            }, {
                name: "rowboat_tone5"
            }, {
                name: "rs"
            }, {
                name: "ru"
            }, {
                name: "rugby_football"
            }, {
                name: "runner"
            }, {
                name: "runner_tone1"
            }, {
                name: "runner_tone2"
            }, {
                name: "runner_tone3"
            }, {
                name: "runner_tone4"
            }, {
                name: "runner_tone5"
            }, {
                name: "running_shirt_with_sash"
            }, {
                name: "rw"
            }, {
                name: "sa"
            }, {
                name: "sagittarius"
            }, {
                name: "sailboat"
            }, {
                name: "sake"
            }, {
                name: "sandal"
            }, {
                name: "santa"
            }, {
                name: "santa_tone1"
            }, {
                name: "santa_tone2"
            }, {
                name: "santa_tone3"
            }, {
                name: "santa_tone4"
            }, {
                name: "santa_tone5"
            }, {
                name: "satellite"
            }, {
                name: "satellite_orbital"
            }, {
                name: "satisfied"
            }, {
                name: "saudi"
            }, {
                name: "saudiarabia"
            }, {
                name: "saxophone"
            }, {
                name: "sb"
            }, {
                name: "sc"
            }, {
                name: "scales"
            }, {
                name: "school"
            }, {
                name: "school_satchel"
            }, {
                name: "scissors"
            }, {
                name: "scorpion"
            }, {
                name: "scorpius"
            }, {
                name: "scream"
            }, {
                name: "scream_cat"
            }, {
                name: "scroll"
            }, {
                name: "sd"
            }, {
                name: "se"
            }, {
                name: "seat"
            }, {
                name: "secret"
            }, {
                name: "see_no_evil"
            }, {
                name: "seedling"
            }, {
                name: "seven"
            }, {
                name: "sg"
            }, {
                name: "sh"
            }, {
                name: "shamrock"
            }, {
                name: "shaved_ice"
            }, {
                name: "sheep"
            }, {
                name: "shell"
            }, {
                name: "shield"
            }, {
                name: "shinto_shrine"
            }, {
                name: "ship"
            }, {
                name: "shirt"
            }, {
                name: "shit"
            }, {
                name: "shopping_bags"
            }, {
                name: "shower"
            }, {
                name: "si"
            }, {
                name: "sign_of_the_horns"
            }, {
                name: "sign_of_the_horns_tone1"
            }, {
                name: "sign_of_the_horns_tone2"
            }, {
                name: "sign_of_the_horns_tone3"
            }, {
                name: "sign_of_the_horns_tone4"
            }, {
                name: "sign_of_the_horns_tone5"
            }, {
                name: "signal_strength"
            }, {
                name: "six"
            }, {
                name: "six_pointed_star"
            }, {
                name: "sj"
            }, {
                name: "sk"
            }, {
                name: "skeleton"
            }, {
                name: "ski"
            }, {
                name: "skier"
            }, {
                name: "skull"
            }, {
                name: "skull_and_crossbones"
            }, {
                name: "skull_crossbones"
            }, {
                name: "sl"
            }, {
                name: "sleeping"
            }, {
                name: "sleeping_accommodation"
            }, {
                name: "sleepy"
            }, {
                name: "sleuth_or_spy"
            }, {
                name: "sleuth_or_spy_tone1"
            }, {
                name: "sleuth_or_spy_tone2"
            }, {
                name: "sleuth_or_spy_tone3"
            }, {
                name: "sleuth_or_spy_tone4"
            }, {
                name: "sleuth_or_spy_tone5"
            }, {
                name: "slight_frown"
            }, {
                name: "slight_smile"
            }, {
                name: "slightly_frowning_face"
            }, {
                name: "slightly_smiling_face"
            }, {
                name: "slot_machine"
            }, {
                name: "sm"
            }, {
                name: "small_airplane"
            }, {
                name: "small_blue_diamond"
            }, {
                name: "small_orange_diamond"
            }, {
                name: "small_red_triangle"
            }, {
                name: "small_red_triangle_down"
            }, {
                name: "smile"
            }, {
                name: "smile_cat"
            }, {
                name: "smiley"
            }, {
                name: "smiley_cat"
            }, {
                name: "smiling_imp"
            }, {
                name: "smirk"
            }, {
                name: "smirk_cat"
            }, {
                name: "smoking"
            }, {
                name: "sn"
            }, {
                name: "snail"
            }, {
                name: "snake"
            }, {
                name: "snow_capped_mountain"
            }, {
                name: "snowboarder"
            }, {
                name: "snowflake"
            }, {
                name: "snowman"
            }, {
                name: "snowman2"
            }, {
                name: "so"
            }, {
                name: "sob"
            }, {
                name: "soccer"
            }, {
                name: "soon"
            }, {
                name: "sos"
            }, {
                name: "sound"
            }, {
                name: "space_invader"
            }, {
                name: "spades"
            }, {
                name: "spaghetti"
            }, {
                name: "sparkle"
            }, {
                name: "sparkler"
            }, {
                name: "sparkles"
            }, {
                name: "sparkling_heart"
            }, {
                name: "speak_no_evil"
            }, {
                name: "speaker"
            }, {
                name: "speaking_head"
            }, {
                name: "speaking_head_in_silhouette"
            }, {
                name: "speech_balloon"
            }, {
                name: "speedboat"
            }, {
                name: "spider"
            }, {
                name: "spider_web"
            }, {
                name: "spiral_calendar_pad"
            }, {
                name: "spiral_note_pad"
            }, {
                name: "sports_medal"
            }, {
                name: "spy"
            }, {
                name: "spy_tone1"
            }, {
                name: "spy_tone2"
            }, {
                name: "spy_tone3"
            }, {
                name: "spy_tone4"
            }, {
                name: "spy_tone5"
            }, {
                name: "sr"
            }, {
                name: "ss"
            }, {
                name: "st"
            }, {
                name: "stadium"
            }, {
                name: "star"
            }, {
                name: "star2"
            }, {
                name: "star_and_crescent"
            }, {
                name: "star_of_david"
            }, {
                name: "stars"
            }, {
                name: "station"
            }, {
                name: "statue_of_liberty"
            }, {
                name: "steam_locomotive"
            }, {
                name: "stew"
            }, {
                name: "stop_button"
            }, {
                name: "stopwatch"
            }, {
                name: "straight_ruler"
            }, {
                name: "strawberry"
            }, {
                name: "stuck_out_tongue"
            }, {
                name: "stuck_out_tongue_closed_eyes"
            }, {
                name: "stuck_out_tongue_winking_eye"
            }, {
                name: "studio_microphone"
            }, {
                name: "sun_with_face"
            }, {
                name: "sunflower"
            }, {
                name: "sunglasses"
            }, {
                name: "sunny"
            }, {
                name: "sunrise"
            }, {
                name: "sunrise_over_mountains"
            }, {
                name: "surfer"
            }, {
                name: "surfer_tone1"
            }, {
                name: "surfer_tone2"
            }, {
                name: "surfer_tone3"
            }, {
                name: "surfer_tone4"
            }, {
                name: "surfer_tone5"
            }, {
                name: "sushi"
            }, {
                name: "suspension_railway"
            }, {
                name: "sv"
            }, {
                name: "sweat"
            }, {
                name: "sweat_drops"
            }, {
                name: "sweat_smile"
            }, {
                name: "sweet_potato"
            }, {
                name: "swimmer"
            }, {
                name: "swimmer_tone1"
            }, {
                name: "swimmer_tone2"
            }, {
                name: "swimmer_tone3"
            }, {
                name: "swimmer_tone4"
            }, {
                name: "swimmer_tone5"
            }, {
                name: "sx"
            }, {
                name: "sy"
            }, {
                name: "symbols"
            }, {
                name: "synagogue"
            }, {
                name: "syringe"
            }, {
                name: "sz"
            }, {
                name: "ta"
            }, {
                name: "table_tennis"
            }, {
                name: "taco"
            }, {
                name: "tada"
            }, {
                name: "tanabata_tree"
            }, {
                name: "tangerine"
            }, {
                name: "taurus"
            }, {
                name: "taxi"
            }, {
                name: "tc"
            }, {
                name: "td"
            }, {
                name: "tea"
            }, {
                name: "telephone"
            }, {
                name: "telephone_receiver"
            }, {
                name: "telescope"
            }, {
                name: "ten"
            }, {
                name: "tennis"
            }, {
                name: "tent"
            }, {
                name: "tf"
            }, {
                name: "tg"
            }, {
                name: "th"
            }, {
                name: "thermometer"
            }, {
                name: "thermometer_face"
            }, {
                name: "thinking"
            }, {
                name: "thinking_face"
            }, {
                name: "thought_balloon"
            }, {
                name: "three"
            }, {
                name: "three_button_mouse"
            }, {
                name: "thumbdown"
            }, {
                name: "thumbdown_tone1"
            }, {
                name: "thumbdown_tone2"
            }, {
                name: "thumbdown_tone3"
            }, {
                name: "thumbdown_tone4"
            }, {
                name: "thumbdown_tone5"
            }, {
                name: "thumbsdown"
            }, {
                name: "thumbsdown_tone1"
            }, {
                name: "thumbsdown_tone2"
            }, {
                name: "thumbsdown_tone3"
            }, {
                name: "thumbsdown_tone4"
            }, {
                name: "thumbsdown_tone5"
            }, {
                name: "thumbsup"
            }, {
                name: "thumbsup_tone1"
            }, {
                name: "thumbsup_tone2"
            }, {
                name: "thumbsup_tone3"
            }, {
                name: "thumbsup_tone4"
            }, {
                name: "thumbsup_tone5"
            }, {
                name: "thumbup"
            }, {
                name: "thumbup_tone1"
            }, {
                name: "thumbup_tone2"
            }, {
                name: "thumbup_tone3"
            }, {
                name: "thumbup_tone4"
            }, {
                name: "thumbup_tone5"
            }, {
                name: "thunder_cloud_and_rain"
            }, {
                name: "thunder_cloud_rain"
            }, {
                name: "ticket"
            }, {
                name: "tickets"
            }, {
                name: "tiger"
            }, {
                name: "tiger2"
            }, {
                name: "timer"
            }, {
                name: "timer_clock"
            }, {
                name: "tired_face"
            }, {
                name: "tj"
            }, {
                name: "tk"
            }, {
                name: "tl"
            }, {
                name: "tm"
            }, {
                name: "tn"
            }, {
                name: "to"
            }, {
                name: "toilet"
            }, {
                name: "tokyo_tower"
            }, {
                name: "tomato"
            }, {
                name: "tongue"
            }, {
                name: "tools"
            }, {
                name: "top"
            }, {
                name: "tophat"
            }, {
                name: "tr"
            }, {
                name: "track_next"
            }, {
                name: "track_previous"
            }, {
                name: "trackball"
            }, {
                name: "tractor"
            }, {
                name: "traffic_light"
            }, {
                name: "train"
            }, {
                name: "train2"
            }, {
                name: "tram"
            }, {
                name: "triangular_flag_on_post"
            }, {
                name: "triangular_ruler"
            }, {
                name: "trident"
            }, {
                name: "triumph"
            }, {
                name: "trolleybus"
            }, {
                name: "trophy"
            }, {
                name: "tropical_drink"
            }, {
                name: "tropical_fish"
            }, {
                name: "truck"
            }, {
                name: "trumpet"
            }, {
                name: "tt"
            }, {
                name: "tulip"
            }, {
                name: "turkey"
            }, {
                name: "turkmenistan"
            }, {
                name: "turtle"
            }, {
                name: "tuvalu"
            }, {
                name: "tv"
            }, {
                name: "tw"
            }, {
                name: "twisted_rightwards_arrows"
            }, {
                name: "two"
            }, {
                name: "two_hearts"
            }, {
                name: "two_men_holding_hands"
            }, {
                name: "two_women_holding_hands"
            }, {
                name: "tz"
            }, {
                name: "u5272"
            }, {
                name: "u5408"
            }, {
                name: "u55b6"
            }, {
                name: "u6307"
            }, {
                name: "u6708"
            }, {
                name: "u6709"
            }, {
                name: "u6e80"
            }, {
                name: "u7121"
            }, {
                name: "u7533"
            }, {
                name: "u7981"
            }, {
                name: "u7a7a"
            }, {
                name: "ua"
            }, {
                name: "ug"
            }, {
                name: "um"
            }, {
                name: "umbrella"
            }, {
                name: "umbrella2"
            }, {
                name: "umbrella_on_ground"
            }, {
                name: "unamused"
            }, {
                name: "underage"
            }, {
                name: "unicorn"
            }, {
                name: "unicorn_face"
            }, {
                name: "unlock"
            }, {
                name: "up"
            }, {
                name: "upside_down"
            }, {
                name: "upside_down_face"
            }, {
                name: "urn"
            }, {
                name: "us"
            }, {
                name: "uy"
            }, {
                name: "uz"
            }, {
                name: "v"
            }, {
                name: "v_tone1"
            }, {
                name: "v_tone2"
            }, {
                name: "v_tone3"
            }, {
                name: "v_tone4"
            }, {
                name: "v_tone5"
            }, {
                name: "va"
            }, {
                name: "vc"
            }, {
                name: "ve"
            }, {
                name: "vertical_traffic_light"
            }, {
                name: "vg"
            }, {
                name: "vhs"
            }, {
                name: "vi"
            }, {
                name: "vibration_mode"
            }, {
                name: "video_camera"
            }, {
                name: "video_game"
            }, {
                name: "violin"
            }, {
                name: "virgo"
            }, {
                name: "vn"
            }, {
                name: "volcano"
            }, {
                name: "volleyball"
            }, {
                name: "vs"
            }, {
                name: "vu"
            }, {
                name: "vulcan"
            }, {
                name: "vulcan_tone1"
            }, {
                name: "vulcan_tone2"
            }, {
                name: "vulcan_tone3"
            }, {
                name: "vulcan_tone4"
            }, {
                name: "vulcan_tone5"
            }, {
                name: "walking"
            }, {
                name: "walking_tone1"
            }, {
                name: "walking_tone2"
            }, {
                name: "walking_tone3"
            }, {
                name: "walking_tone4"
            }, {
                name: "walking_tone5"
            }, {
                name: "waning_crescent_moon"
            }, {
                name: "waning_gibbous_moon"
            }, {
                name: "warning"
            }, {
                name: "wastebasket"
            }, {
                name: "watch"
            }, {
                name: "water_buffalo"
            }, {
                name: "watermelon"
            }, {
                name: "wave"
            }, {
                name: "wave_tone1"
            }, {
                name: "wave_tone2"
            }, {
                name: "wave_tone3"
            }, {
                name: "wave_tone4"
            }, {
                name: "wave_tone5"
            }, {
                name: "waving_black_flag"
            }, {
                name: "waving_white_flag"
            }, {
                name: "wavy_dash"
            }, {
                name: "waxing_crescent_moon"
            }, {
                name: "waxing_gibbous_moon"
            }, {
                name: "wc"
            }, {
                name: "weary"
            }, {
                name: "wedding"
            }, {
                name: "weight_lifter"
            }, {
                name: "weight_lifter_tone1"
            }, {
                name: "weight_lifter_tone2"
            }, {
                name: "weight_lifter_tone3"
            }, {
                name: "weight_lifter_tone4"
            }, {
                name: "weight_lifter_tone5"
            }, {
                name: "wf"
            }, {
                name: "whale"
            }, {
                name: "whale2"
            }, {
                name: "wheel_of_dharma"
            }, {
                name: "wheelchair"
            }, {
                name: "white_check_mark"
            }, {
                name: "white_circle"
            }, {
                name: "white_flower"
            }, {
                name: "white_frowning_face"
            }, {
                name: "white_large_square"
            }, {
                name: "white_medium_small_square"
            }, {
                name: "white_medium_square"
            }, {
                name: "white_small_square"
            }, {
                name: "white_square_button"
            }, {
                name: "white_sun_behind_cloud"
            }, {
                name: "white_sun_behind_cloud_with_rain"
            }, {
                name: "white_sun_cloud"
            }, {
                name: "white_sun_rain_cloud"
            }, {
                name: "white_sun_small_cloud"
            }, {
                name: "white_sun_with_small_cloud"
            }, {
                name: "wind_blowing_face"
            }, {
                name: "wind_chime"
            }, {
                name: "wine_glass"
            }, {
                name: "wink"
            }, {
                name: "wolf"
            }, {
                name: "woman"
            }, {
                name: "woman_tone1"
            }, {
                name: "woman_tone2"
            }, {
                name: "woman_tone3"
            }, {
                name: "woman_tone4"
            }, {
                name: "woman_tone5"
            }, {
                name: "womans_clothes"
            }, {
                name: "womans_hat"
            }, {
                name: "womens"
            }, {
                name: "world_map"
            }, {
                name: "worried"
            }, {
                name: "worship_symbol"
            }, {
                name: "wrench"
            }, {
                name: "writing_hand"
            }, {
                name: "writing_hand_tone1"
            }, {
                name: "writing_hand_tone2"
            }, {
                name: "writing_hand_tone3"
            }, {
                name: "writing_hand_tone4"
            }, {
                name: "writing_hand_tone5"
            }, {
                name: "ws"
            }, {
                name: "x"
            }, {
                name: "xk"
            }, {
                name: "ye"
            }, {
                name: "yellow_heart"
            }, {
                name: "yen"
            }, {
                name: "yin_yang"
            }, {
                name: "yt"
            }, {
                name: "yum"
            }, {
                name: "za"
            }, {
                name: "zap"
            }, {
                name: "zero"
            }, {
                name: "zipper_mouth"
            }, {
                name: "zipper_mouth_face"
            }, {
                name: "zm"
            }, {
                name: "zw"
            }, {
                name: "zzz"
            }]
        }
    })
}).call(this);
(function() {
    var $, Like, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, Like = function() {
        function Like(el, options) {
            this.apiError = bind(this.apiError, this), this.removeLike = bind(this.removeLike, this), this.addLike = bind(this.addLike, this), this.sendLike = bind(this.sendLike, this), this.el = $(el), this.options = $.extend({}, this.defaults, options), this.isSending = !1, this.setUp()
        }
        return Like.prototype.defaults = {
            csrfToken: "csrf_token",
            likeText: "like ({count})",
            removeLikeText: "remove like ({count})"
        }, Like.prototype.setUp = function() {
            return this.el.on("click", this.sendLike), this.el.on("click", this.stopClick)
        }, Like.prototype.sendLike = function() {
            var post;
            this.isSending || (this.isSending = !0, post = $.post(this.el.attr("href"), {
                csrfmiddlewaretoken: this.options.csrfToken
            }), post.done(function(_this) {
                return function(data) {
                    return data.url_delete ? _this.addLike(data) : data.url_create ? _this.removeLike(data) : _this.apiError()
                }
            }(this)), post.always(function(_this) {
                return function() {
                    return _this.isSending = !1
                }
            }(this)))
        }, Like.prototype.addLike = function(data) {
            var count, removeLikeText;
            return this.el.attr("href", data.url_delete), count = this.el.data("count"), count += 1, this.el.data("count", count), removeLikeText = $.format(this.options.removeLikeText, {
                count: count
            }), this.el.text(removeLikeText)
        }, Like.prototype.removeLike = function(data) {
            var count, likeText;
            return this.el.attr("href", data.url_create), count = this.el.data("count"), count -= 1, this.el.data("count", count), likeText = $.format(this.options.likeText, {
                count: count
            }), this.el.text(likeText)
        }, Like.prototype.apiError = function() {
            return this.el.text("api error")
        }, Like.prototype.stopClick = function(e) {
            e.preventDefault(), e.stopPropagation()
        }, Like
    }(), $.fn.extend({
        like: function(options) {
            return this.each(function() {
                return $(this).data("plugin_like") ? void 0 : $(this).data("plugin_like", new Like(this, options))
            })
        }
    }), $.fn.like.Like = Like
}).call(this);
(function() {
    var $, Messages, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, Messages = function() {
        function Messages(el) {
            this.hasVisibleMessages = bind(this.hasVisibleMessages, this), this.hideMessage = bind(this.hideMessage, this), this.showAllCloseButtons = bind(this.showAllCloseButtons, this), this.placeMessages = bind(this.placeMessages, this), this.el = $(el), this.allCloseButtons = this.el.find(".js-messages-close-button"), this.setUp()
        }
        return Messages.prototype.setUp = function() {
            return this.placeMessages(), this.showAllCloseButtons(), this.allCloseButtons.on("click", this.hideMessage), this.allCloseButtons.on("click", this.stopClick)
        }, Messages.prototype.placeMessages = function() {
            return this.hasHash() ? this.el.addClass("is-fixed") : void 0
        }, Messages.prototype.showAllCloseButtons = function() {
            return this.hasHash() ? this.el.find(".js-messages-close").show() : void 0
        }, Messages.prototype.hideMessage = function(e) {
            $(e.currentTarget).closest(".js-messages-set").hide(), this.hasVisibleMessages() || (this.el.hide(), this.el.removeClass("is-fixed"))
        }, Messages.prototype.hasVisibleMessages = function() {
            return this.el.find(".js-messages-set").is(":visible")
        }, Messages.prototype.stopClick = function(e) {
            e.preventDefault(), e.stopPropagation()
        }, Messages.prototype.hasHash = function() {
            var hash;
            return hash = window.location.hash.split("#")[1], null != hash && hash.length > 0
        }, Messages
    }(), $.fn.extend({
        messages: function() {
            return this.each(function() {
                return $(this).data("plugin_messages") ? void 0 : $(this).data("plugin_messages", new Messages(this))
            })
        }
    }), $.fn.messages.Messages = Messages
}).call(this);
(function() {
    var $, MoveComment, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, MoveComment = function() {
        function MoveComment(el, options) {
            this.moveComments = bind(this.moveComments, this), this.addCommentSelection = bind(this.addCommentSelection, this), this.showMoveComments = bind(this.showMoveComments, this), this.el = $(el), this.options = $.extend({}, this.defaults, options), this.setUp()
        }
        return MoveComment.prototype.defaults = {
            csrfToken: "csrf_token",
            target: "#post_url"
        }, MoveComment.prototype.setUp = function() {
            var $move_comments;
            return this.el.on("click", this.showMoveComments), this.el.on("click", this.stopClick), $move_comments = $(".js-move-comments"), $move_comments.on("click", this.moveComments), $move_comments.on("click", this.stopClick)
        }, MoveComment.prototype.showMoveComments = function() {
            $(".move-comments").is(":hidden") && ($(".move-comments").show(), this.addCommentSelection())
        }, MoveComment.prototype.addCommentSelection = function() {
            var $checkbox, $li;
            return $li = $("<li/>").appendTo(".comment-date"), $checkbox = $("<input/>", {
                "class": "move-comment-checkbox",
                name: "comments",
                type: "checkbox",
                value: ""
            }).appendTo($li), $checkbox.each(function() {
                var $commentId;
                return $commentId = $(this).closest(".comment").data("pk"), $(this).val($commentId)
            })
        }, MoveComment.prototype.moveComments = function() {
            var $form, topicId;
            $form = $("<form/>", {
                action: this.options.target,
                method: "post"
            }).hide().appendTo($("body")), $("<input/>", {
                name: "csrfmiddlewaretoken",
                type: "hidden",
                value: this.options.csrfToken
            }).appendTo($form), topicId = $("#id_move_comments_topic").val(), $("<input/>", {
                name: "topic",
                type: "text",
                value: topicId
            }).appendTo($form), $(".move-comment-checkbox").clone().appendTo($form), this.formSubmit($form)
        }, MoveComment.prototype.formSubmit = function($form) {
            return $form.submit()
        }, MoveComment.prototype.stopClick = function(e) {
            e.preventDefault(), e.stopPropagation()
        }, MoveComment
    }(), $.fn.extend({
        move_comments: function(options) {
            return this.each(function() {
                return $(this).data("plugin_move_comments") ? void 0 : $(this).data("plugin_move_comments", new MoveComment(this, options))
            })
        }
    }), $.fn.move_comments.MoveComment = MoveComment
}).call(this);

(function() {
    var $, Notification, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, Notification = function() {
        function Notification(el, options) {
            this.ajaxDone = bind(this.ajaxDone, this), this.addErrorTxt = bind(this.addErrorTxt, this), this.addIsEmptyTxt = bind(this.addIsEmptyTxt, this), this.addNotifications = bind(this.addNotifications, this), this.tabSwitch = bind(this.tabSwitch, this), this.el = $(el), this.options = $.extend({}, this.defaults, options), this.tabNotificationContent = $(this.el.data("related")), this.setUp()
        }
        return Notification.prototype.defaults = {
            notificationUrl: "#ajax",
            notificationListUrl: "#show-all",
            mentionTxt: "{user} mentioned you on {topic}",
            commentTxt: "{user} has commented on {topic}",
            showAll: "Show all",
            empty: "Nothing to show",
            unread: "unread"
        }, Notification.prototype.setUp = function() {
            return this.el.one("click", this.tabSwitch), this.el.one("click", this.stopClick)
        }, Notification.prototype.tabSwitch = function() {
            var get;
            get = $.getJSON(this.options.notificationUrl), get.done(function(_this) {
                return function(data, status, jqXHR) {
                    return data.n.length > 0 ? _this.addNotifications(data) : _this.addIsEmptyTxt()
                }
            }(this)), get.fail(function(_this) {
                return function(jqxhr, textStatus, error) {
                    return _this.addErrorTxt(textStatus, error)
                }
            }(this)), get.always(function(_this) {
                return function() {
                    return _this.ajaxDone()
                }
            }(this))
        }, Notification.prototype.addNotifications = function(data) {
            var showAllLink, unread;
            return unread = '<span class="row-unread">' + this.options.unread + "</span>", $.each(data.n, function(_this) {
                return function(i, obj) {
                    var link, txt;
                    return txt = 1 === obj.action ? _this.options.mentionTxt : _this.options.commentTxt, obj.is_read || (txt = txt + " " + unread), link = '<a href="' + obj.url + '">' + obj.title + "</a>", txt = $.format(txt, {
                        user: obj.user,
                        topic: link
                    }), _this.tabNotificationContent.append("<div>" + txt + "</div>")
                }
            }(this)), showAllLink = '<a href="' + this.options.notificationListUrl + '">' + this.options.showAll + "</a>", this.tabNotificationContent.append("<div>" + showAllLink + "</div>")
        }, Notification.prototype.addIsEmptyTxt = function() {
            return this.tabNotificationContent.append("<div>" + this.options.empty + "</div>")
        }, Notification.prototype.addErrorTxt = function(textStatus, error) {
            return this.tabNotificationContent.append("<div>Error: " + textStatus + ", " + error + "</div>")
        }, Notification.prototype.ajaxDone = function() {
            return this.el.addClass("js-tab"), $.tab(), this.el.trigger("click")
        }, Notification.prototype.stopClick = function(e) {
            e.preventDefault(), e.stopPropagation()
        }, Notification
    }(), $.extend({
        notification: function(options) {
            return $(".js-tab-notification").each(function() {
                return $(this).data("plugin_notification") ? void 0 : $(this).data("plugin_notification", new Notification(this, options))
            })
        }
    }), $.notification.Notification = Notification
}).call(this);
(function() {
    var $, Postify, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, Postify = function() {
        function Postify(el, options) {
            this.makePost = bind(this.makePost, this), this.el = $(el), this.options = $.extend({}, this.defaults, options), this.setUp()
        }
        return Postify.prototype.defaults = {
            csrfToken: "csrf_token"
        }, Postify.prototype.setUp = function() {
            return this.el.on("click", this.makePost), this.el.on("click", this.stopClick)
        }, Postify.prototype.makePost = function() {
            var $form;
            $form = $("<form/>", {
                action: this.el.attr("href"),
                method: "post"
            }).hide().appendTo($("body")), $("<input/>", {
                name: "csrfmiddlewaretoken",
                type: "hidden",
                value: this.options.csrfToken
            }).appendTo($form), this.formSubmit($form)
        }, Postify.prototype.formSubmit = function($form) {
            return $form.submit()
        }, Postify.prototype.stopClick = function(e) {
            e.preventDefault(), e.stopPropagation()
        }, Postify
    }(), $.fn.extend({
        postify: function(options) {
            return this.each(function() {
                return $(this).data("plugin_postify") ? void 0 : $(this).data("plugin_postify", new Postify(this, options))
            })
        }
    }), $.fn.postify.Postify = Postify
}).call(this);
(function() {
    var $, SocialShare, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, SocialShare = function() {
        function SocialShare(el) {
            this.closeDialog = bind(this.closeDialog, this), this.showDialog = bind(this.showDialog, this), this.el = $(el), this.dialog = $(this.el.data("dialog")), this.setUp()
        }
        return SocialShare.prototype.setUp = function() {
            var $shareClose, $shareInput;
            return this.el.on("click", this.showDialog), this.el.on("click", this.stopClick), $shareClose = this.dialog.find(".share-close"), $shareClose.on("click", this.closeDialog), $shareClose.on("click", this.stopClick), $shareInput = this.dialog.find(".share-url"), $shareInput.on("focus", this.select), $shareInput.on("mouseup", this.stopClick)
        }, SocialShare.prototype.showDialog = function() {
            $(".share").hide(), this.dialog.show()
        }, SocialShare.prototype.closeDialog = function() {
            this.dialog.hide()
        }, SocialShare.prototype.select = function() {
            $(this).select()
        }, SocialShare.prototype.stopClick = function(e) {
            e.preventDefault(), e.stopPropagation()
        }, SocialShare
    }(), $.fn.extend({
        social_share: function() {
            return this.each(function() {
                return $(this).data("plugin_social_share") ? void 0 : $(this).data("plugin_social_share", new SocialShare(this))
            })
        }
    }), $.fn.social_share.SocialShare = SocialShare
}).call(this);
(function() {
    var $, Storage, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    $ = jQuery, Storage = function() {
        function Storage(el, lsKey) {
            this.clearStorage = bind(this.clearStorage, this), this.updateField = bind(this.updateField, this), this.updateStorage = bind(this.updateStorage, this), this.el = $(el), this.lsKey = lsKey, this.setUp()
        }
        return Storage.prototype.setUp = function() {
            var $form;
            if ("undefined" != typeof localStorage && null !== localStorage) return this.lsKey in localStorage && this.updateField(), $(window).on("storage", this.updateField), this.el.on("input change propertychange", function(_this) {
                return function() {
                    $(window).off("storage", _this.updateField), _this.updateStorage(), $(window).on("storage", _this.updateField)
                }
            }(this)), $form = this.el.closest("form"), $form.on("submit", this.clearStorage)
        }, Storage.prototype.updateStorage = function() {
            var err, error, value;
            value = this.el.val();
            try {
                localStorage[this.lsKey] = value
            } catch (error) {
                err = error, localStorage.clear()
            }
        }, Storage.prototype.updateField = function() {
            this.el.val(localStorage[this.lsKey])
        }, Storage.prototype.clearStorage = function() {
            delete localStorage[this.lsKey]
        }, Storage
    }(), $.fn.extend({
        store: function(lsKey) {
            return this.each(function() {
                return $(this).data("plugin_store") ? void 0 : $(this).data("plugin_store", new Storage(this, lsKey))
            })
        }
    }), $.fn.store.Storage = Storage
}).call(this);
//# sourceMappingURL=all.min.js.map