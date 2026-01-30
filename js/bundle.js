var Tu = Object.defineProperty;
var Oo = (n) => {
  throw TypeError(n);
};
var Au = (n, e, r) => e in n ? Tu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r;
var ge = (n, e, r) => Au(n, typeof e != "symbol" ? e + "" : e, r), qn = (n, e, r) => e.has(n) || Oo("Cannot " + r);
var z = (n, e, r) => (qn(n, e, "read from private field"), r ? r.call(n) : e.get(n)), it = (n, e, r) => e.has(n) ? Oo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, r), Ie = (n, e, r, i) => (qn(n, e, "write to private field"), i ? i.call(n, r) : e.set(n, r), r), Qt = (n, e, r) => (qn(n, e, "access private method"), r);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
    i(l);
  new MutationObserver((l) => {
    for (const a of l)
      if (a.type === "childList")
        for (const h of a.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && i(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const a = {};
    return l.integrity && (a.integrity = l.integrity), l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? a.credentials = "include" : l.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function i(l) {
    if (l.ep)
      return;
    l.ep = !0;
    const a = r(l);
    fetch(l.href, a);
  }
})();
function Mt() {
}
function Iu(n, e) {
  for (const r in e) n[r] = e[r];
  return (
    /** @type {T & S} */
    n
  );
}
function aa(n) {
  return n();
}
function Ro() {
  return /* @__PURE__ */ Object.create(null);
}
function zt(n) {
  n.forEach(aa);
}
function Wi(n) {
  return typeof n == "function";
}
function mr(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function _u(n) {
  return Object.keys(n).length === 0;
}
function Ou(n, e, r, i) {
  if (n) {
    const l = ua(n, e, r, i);
    return n[0](l);
  }
}
function ua(n, e, r, i) {
  return n[1] && i ? Iu(r.ctx.slice(), n[1](i(e))) : r.ctx;
}
function Ru(n, e, r, i) {
  return n[2], e.dirty;
}
function xu(n, e, r, i, l, a) {
  if (l) {
    const h = ua(e, r, i, a);
    n.p(h, l);
  }
}
function Su(n) {
  if (n.ctx.length > 32) {
    const e = [], r = n.ctx.length / 32;
    for (let i = 0; i < r; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const an = globalThis || void 0 || self;
function ee(n, e) {
  n.appendChild(e);
}
function me(n, e, r) {
  n.insertBefore(e, r || null);
}
function de(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function ue(n) {
  return document.createElement(n);
}
function Ge(n) {
  return document.createTextNode(n);
}
function be() {
  return Ge(" ");
}
function Cu() {
  return Ge("");
}
function st(n, e, r, i) {
  return n.addEventListener(e, r, i), () => n.removeEventListener(e, r, i);
}
function Wt(n) {
  return function(e) {
    return e.preventDefault(), n.call(this, e);
  };
}
function H(n, e, r) {
  r == null ? n.removeAttribute(e) : n.getAttribute(e) !== r && n.setAttribute(e, r);
}
function Lu(n) {
  return Array.from(n.childNodes);
}
function Xi(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function Nn(n, e) {
  n.value = e ?? "";
}
function zi(n, e, r, i) {
  r == null ? n.style.removeProperty(e) : n.style.setProperty(e, r, "");
}
let Kr;
function Yr(n) {
  Kr = n;
}
function la() {
  if (!Kr) throw new Error("Function called outside component initialization");
  return Kr;
}
function Ln(n) {
  la().$$.on_mount.push(n);
}
function Pn(n) {
  la().$$.on_destroy.push(n);
}
const Or = [], xo = [];
let Cr = [];
const So = [], Pu = /* @__PURE__ */ Promise.resolve();
let Ci = !1;
function $u() {
  Ci || (Ci = !0, Pu.then(ca));
}
function Li(n) {
  Cr.push(n);
}
const Vn = /* @__PURE__ */ new Set();
let Nr = 0;
function ca() {
  if (Nr !== 0)
    return;
  const n = Kr;
  do {
    try {
      for (; Nr < Or.length; ) {
        const e = Or[Nr];
        Nr++, Yr(e), ku(e.$$);
      }
    } catch (e) {
      throw Or.length = 0, Nr = 0, e;
    }
    for (Yr(null), Or.length = 0, Nr = 0; xo.length; ) xo.pop()();
    for (let e = 0; e < Cr.length; e += 1) {
      const r = Cr[e];
      Vn.has(r) || (Vn.add(r), r());
    }
    Cr.length = 0;
  } while (Or.length);
  for (; So.length; )
    So.pop()();
  Ci = !1, Vn.clear(), Yr(n);
}
function ku(n) {
  if (n.fragment !== null) {
    n.update(), zt(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach(Li);
  }
}
function Fu(n) {
  const e = [], r = [];
  Cr.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), Cr = e;
}
const mn = /* @__PURE__ */ new Set();
let cr;
function Wn() {
  cr = {
    r: 0,
    c: [],
    p: cr
    // parent group
  };
}
function Xn() {
  cr.r || zt(cr.c), cr = cr.p;
}
function De(n, e) {
  n && n.i && (mn.delete(n), n.i(e));
}
function ct(n, e, r, i) {
  if (n && n.o) {
    if (mn.has(n)) return;
    mn.add(n), cr.c.push(() => {
      mn.delete(n), i && (r && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function kr(n) {
  n && n.c();
}
function wr(n, e, r) {
  const { fragment: i, after_update: l } = n.$$;
  i && i.m(e, r), Li(() => {
    const a = n.$$.on_mount.map(aa).filter(Wi);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : zt(a), n.$$.on_mount = [];
  }), l.forEach(Li);
}
function yr(n, e) {
  const r = n.$$;
  r.fragment !== null && (Fu(r.after_update), zt(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Mu(n, e) {
  n.$$.dirty[0] === -1 && (Or.push(n), $u(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Fr(n, e, r, i, l, a, h = null, c = [-1]) {
  const u = Kr;
  Yr(n);
  const o = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: Mt,
    not_equal: l,
    bound: Ro(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Ro(),
    dirty: c,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  h && h(o.root);
  let s = !1;
  if (o.ctx = r ? r(n, e.props || {}, (p, d, ...m) => {
    const w = m.length ? m[0] : d;
    return o.ctx && l(o.ctx[p], o.ctx[p] = w) && (!o.skip_bound && o.bound[p] && o.bound[p](w), s && Mu(n, p)), d;
  }) : [], o.update(), s = !0, zt(o.before_update), o.fragment = i ? i(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = Lu(e.target);
      o.fragment && o.fragment.l(p), p.forEach(de);
    } else
      o.fragment && o.fragment.c();
    e.intro && De(n.$$.fragment), wr(n, e.target, e.anchor), ca();
  }
  Yr(u);
}
class Mr {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ge(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ge(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    yr(this, 1), this.$destroy = Mt;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Wi(r))
      return Mt;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(r), () => {
      const l = i.indexOf(r);
      l !== -1 && i.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !_u(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Uu = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Uu);
function Bu(n) {
  let e, r, i, l, a;
  const h = (
    /*#slots*/
    n[2].default
  ), c = Ou(
    h,
    n,
    /*$$scope*/
    n[1],
    null
  );
  return {
    c() {
      e = ue("div"), r = be(), i = ue("div"), c && c.c(), H(e, "class", "oc-dialog-dim"), H(i, "class", l = `oc-dialog ${/*loading*/
      n[0] ? "icon-loading" : ""}`), zi(i, "position", "fixed");
    },
    m(u, o) {
      me(u, e, o), me(u, r, o), me(u, i, o), c && c.m(i, null), a = !0;
    },
    p(u, [o]) {
      c && c.p && (!a || o & /*$$scope*/
      2) && xu(
        c,
        h,
        u,
        /*$$scope*/
        u[1],
        a ? Ru(
          h,
          /*$$scope*/
          u[1],
          o,
          null
        ) : Su(
          /*$$scope*/
          u[1]
        ),
        null
      ), (!a || o & /*loading*/
      1 && l !== (l = `oc-dialog ${/*loading*/
      u[0] ? "icon-loading" : ""}`)) && H(i, "class", l);
    },
    i(u) {
      a || (De(c, u), a = !0);
    },
    o(u) {
      ct(c, u), a = !1;
    },
    d(u) {
      u && (de(e), de(r), de(i)), c && c.d(u);
    }
  };
}
function Du(n, e, r) {
  let { $$slots: i = {}, $$scope: l } = e, { loading: a = !1 } = e;
  return n.$$set = (h) => {
    "loading" in h && r(0, a = h.loading), "$$scope" in h && r(1, l = h.$$scope);
  }, [a, l, i];
}
class Hi extends Mr {
  constructor(e) {
    super(), Fr(this, e, Du, Bu, mr, { loading: 0 });
  }
}
const Tr = [];
function fa(n, e = Mt) {
  let r;
  const i = /* @__PURE__ */ new Set();
  function l(c) {
    if (mr(n, c) && (n = c, r)) {
      const u = !Tr.length;
      for (const o of i)
        o[1](), Tr.push(o, n);
      if (u) {
        for (let o = 0; o < Tr.length; o += 2)
          Tr[o][0](Tr[o + 1]);
        Tr.length = 0;
      }
    }
  }
  function a(c) {
    l(c(n));
  }
  function h(c, u = Mt) {
    const o = [c, u];
    return i.add(o), i.size === 1 && (r = e(l, a) || Mt), c(n), () => {
      i.delete(o), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: l, update: a, subscribe: h };
}
function Yi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Zi = {}, We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
We.BLANK_URL = We.relativeFirstCharacters = We.urlSchemeRegex = We.ctrlCharactersRegex = We.htmlCtrlEntityRegex = We.htmlEntitiesRegex = We.invalidProtocolRegex = void 0;
We.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
We.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
We.htmlCtrlEntityRegex = /&(newline|tab);/gi;
We.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
We.urlSchemeRegex = /^.+(:|&colon;)/gim;
We.relativeFirstCharacters = [".", "/"];
We.BLANK_URL = "about:blank";
Object.defineProperty(Zi, "__esModule", { value: !0 });
var Fe = Zi.sanitizeUrl = void 0, lt = We;
function ju(n) {
  return lt.relativeFirstCharacters.indexOf(n[0]) > -1;
}
function Gu(n) {
  var e = n.replace(lt.ctrlCharactersRegex, "");
  return e.replace(lt.htmlEntitiesRegex, function(r, i) {
    return String.fromCharCode(i);
  });
}
function qu(n) {
  if (!n)
    return lt.BLANK_URL;
  var e, r = n;
  do
    r = Gu(r).replace(lt.htmlCtrlEntityRegex, "").replace(lt.ctrlCharactersRegex, "").trim(), e = r.match(lt.ctrlCharactersRegex) || r.match(lt.htmlEntitiesRegex) || r.match(lt.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = r;
  if (!i)
    return lt.BLANK_URL;
  if (ju(i))
    return i;
  var l = i.match(lt.urlSchemeRegex);
  if (!l)
    return i;
  var a = l[0];
  return lt.invalidProtocolRegex.test(a) ? lt.BLANK_URL : i;
}
Fe = Zi.sanitizeUrl = qu;
function Vu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ha = { exports: {} }, _e = ha.exports = {}, Pt, $t;
function Pi() {
  throw new Error("setTimeout has not been defined");
}
function $i() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Pt = setTimeout : Pt = Pi;
  } catch {
    Pt = Pi;
  }
  try {
    typeof clearTimeout == "function" ? $t = clearTimeout : $t = $i;
  } catch {
    $t = $i;
  }
})();
function pa(n) {
  if (Pt === setTimeout)
    return setTimeout(n, 0);
  if ((Pt === Pi || !Pt) && setTimeout)
    return Pt = setTimeout, setTimeout(n, 0);
  try {
    return Pt(n, 0);
  } catch {
    try {
      return Pt.call(null, n, 0);
    } catch {
      return Pt.call(this, n, 0);
    }
  }
}
function Wu(n) {
  if ($t === clearTimeout)
    return clearTimeout(n);
  if (($t === $i || !$t) && clearTimeout)
    return $t = clearTimeout, clearTimeout(n);
  try {
    return $t(n);
  } catch {
    try {
      return $t.call(null, n);
    } catch {
      return $t.call(this, n);
    }
  }
}
var Vt = [], Lr = !1, fr, wn = -1;
function Xu() {
  !Lr || !fr || (Lr = !1, fr.length ? Vt = fr.concat(Vt) : wn = -1, Vt.length && da());
}
function da() {
  if (!Lr) {
    var n = pa(Xu);
    Lr = !0;
    for (var e = Vt.length; e; ) {
      for (fr = Vt, Vt = []; ++wn < e; )
        fr && fr[wn].run();
      wn = -1, e = Vt.length;
    }
    fr = null, Lr = !1, Wu(n);
  }
}
_e.nextTick = function(n) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  Vt.push(new ga(n, e)), Vt.length === 1 && !Lr && pa(da);
};
function ga(n, e) {
  this.fun = n, this.array = e;
}
ga.prototype.run = function() {
  this.fun.apply(null, this.array);
};
_e.title = "browser";
_e.browser = !0;
_e.env = {};
_e.argv = [];
_e.version = "";
_e.versions = {};
function Ht() {
}
_e.on = Ht;
_e.addListener = Ht;
_e.once = Ht;
_e.off = Ht;
_e.removeListener = Ht;
_e.removeAllListeners = Ht;
_e.emit = Ht;
_e.prependListener = Ht;
_e.prependOnceListener = Ht;
_e.listeners = function(n) {
  return [];
};
_e.binding = function(n) {
  throw new Error("process.binding is not supported");
};
_e.cwd = function() {
  return "/";
};
_e.chdir = function(n) {
  throw new Error("process.chdir is not supported");
};
_e.umask = function() {
  return 0;
};
var zu = ha.exports;
const Xe = /* @__PURE__ */ Vu(zu);
function Ct(n) {
  if (typeof n != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
}
function Co(n, e) {
  for (var r = "", i = 0, l = -1, a = 0, h, c = 0; c <= n.length; ++c) {
    if (c < n.length)
      h = n.charCodeAt(c);
    else {
      if (h === 47)
        break;
      h = 47;
    }
    if (h === 47) {
      if (!(l === c - 1 || a === 1)) if (l !== c - 1 && a === 2) {
        if (r.length < 2 || i !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            var u = r.lastIndexOf("/");
            if (u !== r.length - 1) {
              u === -1 ? (r = "", i = 0) : (r = r.slice(0, u), i = r.length - 1 - r.lastIndexOf("/")), l = c, a = 0;
              continue;
            }
          } else if (r.length === 2 || r.length === 1) {
            r = "", i = 0, l = c, a = 0;
            continue;
          }
        }
        e && (r.length > 0 ? r += "/.." : r = "..", i = 2);
      } else
        r.length > 0 ? r += "/" + n.slice(l + 1, c) : r = n.slice(l + 1, c), i = c - l - 1;
      l = c, a = 0;
    } else h === 46 && a !== -1 ? ++a : a = -1;
  }
  return r;
}
function Hu(n, e) {
  var r = e.dir || e.root, i = e.base || (e.name || "") + (e.ext || "");
  return r ? r === e.root ? r + i : r + n + i : i;
}
var Pr = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", r = !1, i, l = arguments.length - 1; l >= -1 && !r; l--) {
      var a;
      l >= 0 ? a = arguments[l] : (i === void 0 && (i = Xe.cwd()), a = i), Ct(a), a.length !== 0 && (e = a + "/" + e, r = a.charCodeAt(0) === 47);
    }
    return e = Co(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (Ct(e), e.length === 0) return ".";
    var r = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
    return e = Co(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && i && (e += "/"), r ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return Ct(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, r = 0; r < arguments.length; ++r) {
      var i = arguments[r];
      Ct(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
    }
    return e === void 0 ? "." : Pr.normalize(e);
  },
  relative: function(e, r) {
    if (Ct(e), Ct(r), e === r || (e = Pr.resolve(e), r = Pr.resolve(r), e === r)) return "";
    for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i)
      ;
    for (var l = e.length, a = l - i, h = 1; h < r.length && r.charCodeAt(h) === 47; ++h)
      ;
    for (var c = r.length, u = c - h, o = a < u ? a : u, s = -1, p = 0; p <= o; ++p) {
      if (p === o) {
        if (u > o) {
          if (r.charCodeAt(h + p) === 47)
            return r.slice(h + p + 1);
          if (p === 0)
            return r.slice(h + p);
        } else a > o && (e.charCodeAt(i + p) === 47 ? s = p : p === 0 && (s = 0));
        break;
      }
      var d = e.charCodeAt(i + p), m = r.charCodeAt(h + p);
      if (d !== m)
        break;
      d === 47 && (s = p);
    }
    var w = "";
    for (p = i + s + 1; p <= l; ++p)
      (p === l || e.charCodeAt(p) === 47) && (w.length === 0 ? w += ".." : w += "/..");
    return w.length > 0 ? w + r.slice(h + s) : (h += s, r.charCodeAt(h) === 47 && ++h, r.slice(h));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (Ct(e), e.length === 0) return ".";
    for (var r = e.charCodeAt(0), i = r === 47, l = -1, a = !0, h = e.length - 1; h >= 1; --h)
      if (r = e.charCodeAt(h), r === 47) {
        if (!a) {
          l = h;
          break;
        }
      } else
        a = !1;
    return l === -1 ? i ? "/" : "." : i && l === 1 ? "//" : e.slice(0, l);
  },
  basename: function(e, r) {
    if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
    Ct(e);
    var i = 0, l = -1, a = !0, h;
    if (r !== void 0 && r.length > 0 && r.length <= e.length) {
      if (r.length === e.length && r === e) return "";
      var c = r.length - 1, u = -1;
      for (h = e.length - 1; h >= 0; --h) {
        var o = e.charCodeAt(h);
        if (o === 47) {
          if (!a) {
            i = h + 1;
            break;
          }
        } else
          u === -1 && (a = !1, u = h + 1), c >= 0 && (o === r.charCodeAt(c) ? --c === -1 && (l = h) : (c = -1, l = u));
      }
      return i === l ? l = u : l === -1 && (l = e.length), e.slice(i, l);
    } else {
      for (h = e.length - 1; h >= 0; --h)
        if (e.charCodeAt(h) === 47) {
          if (!a) {
            i = h + 1;
            break;
          }
        } else l === -1 && (a = !1, l = h + 1);
      return l === -1 ? "" : e.slice(i, l);
    }
  },
  extname: function(e) {
    Ct(e);
    for (var r = -1, i = 0, l = -1, a = !0, h = 0, c = e.length - 1; c >= 0; --c) {
      var u = e.charCodeAt(c);
      if (u === 47) {
        if (!a) {
          i = c + 1;
          break;
        }
        continue;
      }
      l === -1 && (a = !1, l = c + 1), u === 46 ? r === -1 ? r = c : h !== 1 && (h = 1) : r !== -1 && (h = -1);
    }
    return r === -1 || l === -1 || // We saw a non-dot character immediately before the dot
    h === 0 || // The (right-most) trimmed path component is exactly '..'
    h === 1 && r === l - 1 && r === i + 1 ? "" : e.slice(r, l);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return Hu("/", e);
  },
  parse: function(e) {
    Ct(e);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0) return r;
    var i = e.charCodeAt(0), l = i === 47, a;
    l ? (r.root = "/", a = 1) : a = 0;
    for (var h = -1, c = 0, u = -1, o = !0, s = e.length - 1, p = 0; s >= a; --s) {
      if (i = e.charCodeAt(s), i === 47) {
        if (!o) {
          c = s + 1;
          break;
        }
        continue;
      }
      u === -1 && (o = !1, u = s + 1), i === 46 ? h === -1 ? h = s : p !== 1 && (p = 1) : h !== -1 && (p = -1);
    }
    return h === -1 || u === -1 || // We saw a non-dot character immediately before the dot
    p === 0 || // The (right-most) trimmed path component is exactly '..'
    p === 1 && h === u - 1 && h === c + 1 ? u !== -1 && (c === 0 && l ? r.base = r.name = e.slice(1, u) : r.base = r.name = e.slice(c, u)) : (c === 0 && l ? (r.name = e.slice(1, h), r.base = e.slice(1, u)) : (r.name = e.slice(c, h), r.base = e.slice(c, u)), r.ext = e.slice(h, u)), c > 0 ? r.dir = e.slice(0, c - 1) : l && (r.dir = "/"), r;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
Pr.posix = Pr;
var ur = Pr;
function Yu(n) {
  return n && n.split("/").map(encodeURIComponent).join("/");
}
const Zu = typeof Xe == "object" && Xe.env && Xe.env.NODE_DEBUG && /\bsemver\b/i.test(Xe.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
};
var ma = Zu;
const wa = 256, Ju = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Ku = 16, Qu = wa - 6;
var ya = {
  MAX_LENGTH: wa,
  MAX_SAFE_COMPONENT_LENGTH: Ku,
  MAX_SAFE_BUILD_LENGTH: Qu,
  MAX_SAFE_INTEGER: Ju
}, ki = { exports: {} };
(function(n, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: l
  } = ya, a = ma;
  e = n.exports = {};
  const h = e.re = [], c = e.safeRe = [], u = e.src = [], o = e.t = {};
  let s = 0;
  const p = "[a-zA-Z0-9-]", d = [
    ["\\s", 1],
    ["\\d", l],
    [p, i]
  ], m = (v) => {
    for (const [_, A] of d)
      v = v.split(`${_}*`).join(`${_}{0,${A}}`).split(`${_}+`).join(`${_}{1,${A}}`);
    return v;
  }, w = (v, _, A) => {
    const E = m(_), I = s++;
    a(v, I, _), o[v] = I, u[I] = _, h[I] = new RegExp(_, A ? "g" : void 0), c[I] = new RegExp(E, A ? "g" : void 0);
  };
  w("NUMERICIDENTIFIER", "0|[1-9]\\d*"), w("NUMERICIDENTIFIERLOOSE", "\\d+"), w("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`), w("MAINVERSION", `(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})`), w("MAINVERSIONLOOSE", `(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})`), w("PRERELEASEIDENTIFIER", `(?:${u[o.NUMERICIDENTIFIER]}|${u[o.NONNUMERICIDENTIFIER]})`), w("PRERELEASEIDENTIFIERLOOSE", `(?:${u[o.NUMERICIDENTIFIERLOOSE]}|${u[o.NONNUMERICIDENTIFIER]})`), w("PRERELEASE", `(?:-(${u[o.PRERELEASEIDENTIFIER]}(?:\\.${u[o.PRERELEASEIDENTIFIER]})*))`), w("PRERELEASELOOSE", `(?:-?(${u[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[o.PRERELEASEIDENTIFIERLOOSE]})*))`), w("BUILDIDENTIFIER", `${p}+`), w("BUILD", `(?:\\+(${u[o.BUILDIDENTIFIER]}(?:\\.${u[o.BUILDIDENTIFIER]})*))`), w("FULLPLAIN", `v?${u[o.MAINVERSION]}${u[o.PRERELEASE]}?${u[o.BUILD]}?`), w("FULL", `^${u[o.FULLPLAIN]}$`), w("LOOSEPLAIN", `[v=\\s]*${u[o.MAINVERSIONLOOSE]}${u[o.PRERELEASELOOSE]}?${u[o.BUILD]}?`), w("LOOSE", `^${u[o.LOOSEPLAIN]}$`), w("GTLT", "((?:<|>)?=?)"), w("XRANGEIDENTIFIERLOOSE", `${u[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), w("XRANGEIDENTIFIER", `${u[o.NUMERICIDENTIFIER]}|x|X|\\*`), w("XRANGEPLAIN", `[v=\\s]*(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:${u[o.PRERELEASE]})?${u[o.BUILD]}?)?)?`), w("XRANGEPLAINLOOSE", `[v=\\s]*(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:${u[o.PRERELEASELOOSE]})?${u[o.BUILD]}?)?)?`), w("XRANGE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAIN]}$`), w("XRANGELOOSE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAINLOOSE]}$`), w("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), w("COERCE", `${u[o.COERCEPLAIN]}(?:$|[^\\d])`), w("COERCEFULL", u[o.COERCEPLAIN] + `(?:${u[o.PRERELEASE]})?(?:${u[o.BUILD]})?(?:$|[^\\d])`), w("COERCERTL", u[o.COERCE], !0), w("COERCERTLFULL", u[o.COERCEFULL], !0), w("LONETILDE", "(?:~>?)"), w("TILDETRIM", `(\\s*)${u[o.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", w("TILDE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAIN]}$`), w("TILDELOOSE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAINLOOSE]}$`), w("LONECARET", "(?:\\^)"), w("CARETTRIM", `(\\s*)${u[o.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", w("CARET", `^${u[o.LONECARET]}${u[o.XRANGEPLAIN]}$`), w("CARETLOOSE", `^${u[o.LONECARET]}${u[o.XRANGEPLAINLOOSE]}$`), w("COMPARATORLOOSE", `^${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]})$|^$`), w("COMPARATOR", `^${u[o.GTLT]}\\s*(${u[o.FULLPLAIN]})$|^$`), w("COMPARATORTRIM", `(\\s*)${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]}|${u[o.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", w("HYPHENRANGE", `^\\s*(${u[o.XRANGEPLAIN]})\\s+-\\s+(${u[o.XRANGEPLAIN]})\\s*$`), w("HYPHENRANGELOOSE", `^\\s*(${u[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[o.XRANGEPLAINLOOSE]})\\s*$`), w("STAR", "(<|>)?=?\\s*\\*"), w("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), w("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(ki, ki.exports);
var el = ki.exports;
const tl = Object.freeze({ loose: !0 }), rl = Object.freeze({}), nl = (n) => n ? typeof n != "object" ? tl : n : rl;
var il = nl;
const Lo = /^[0-9]+$/, ol = (n, e) => {
  const r = Lo.test(n), i = Lo.test(e);
  return r && i && (n = +n, e = +e), n === e ? 0 : r && !i ? -1 : i && !r ? 1 : n < e ? -1 : 1;
};
var sl = {
  compareIdentifiers: ol
};
const un = ma, { MAX_LENGTH: Po, MAX_SAFE_INTEGER: ln } = ya, { safeRe: $o, t: ko } = el, al = il, { compareIdentifiers: Ar } = sl;
let ul = class Lt {
  constructor(e, r) {
    if (r = al(r), e instanceof Lt) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > Po)
      throw new TypeError(
        `version is longer than ${Po} characters`
      );
    un("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const i = e.trim().match(r.loose ? $o[ko.LOOSE] : $o[ko.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > ln || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > ln || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > ln || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((l) => {
      if (/^[0-9]+$/.test(l)) {
        const a = +l;
        if (a >= 0 && a < ln)
          return a;
      }
      return l;
    }) : this.prerelease = [], this.build = i[5] ? i[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (un("SemVer.compare", this.version, this.options, e), !(e instanceof Lt)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new Lt(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof Lt || (e = new Lt(e, this.options)), Ar(this.major, e.major) || Ar(this.minor, e.minor) || Ar(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof Lt || (e = new Lt(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let r = 0;
    do {
      const i = this.prerelease[r], l = e.prerelease[r];
      if (un("prerelease compare", r, i, l), i === void 0 && l === void 0)
        return 0;
      if (l === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === l)
        continue;
      return Ar(i, l);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof Lt || (e = new Lt(e, this.options));
    let r = 0;
    do {
      const i = this.build[r], l = e.build[r];
      if (un("build compare", r, i, l), i === void 0 && l === void 0)
        return 0;
      if (l === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === l)
        continue;
      return Ar(i, l);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, r, i) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, i);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, i);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, i), this.inc("pre", r, i);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, i), this.inc("pre", r, i);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const l = Number(i) ? 1 : 0;
        if (!r && i === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [l];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == "number" && (this.prerelease[a]++, a = -2);
          if (a === -1) {
            if (r === this.prerelease.join(".") && i === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(l);
          }
        }
        if (r) {
          let a = [r, l];
          i === !1 && (a = [r]), Ar(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = a) : this.prerelease = a;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Ea = ul;
const Fo = Ea, ll = (n, e, r = !1) => {
  if (n instanceof Fo)
    return n;
  try {
    return new Fo(n, e);
  } catch (i) {
    if (!r)
      return null;
    throw i;
  }
};
var cl = ll;
const fl = cl, hl = (n, e) => {
  const r = fl(n, e);
  return r ? r.version : null;
};
var pl = hl;
const dl = /* @__PURE__ */ Yi(pl), gl = Ea, ml = (n, e) => new gl(n, e).major;
var wl = ml;
const Mo = /* @__PURE__ */ Yi(wl);
class yl {
  constructor(e) {
    ge(this, "bus");
    typeof e.getVersion != "function" || !dl(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Mo(e.getVersion()) !== Mo(this.getVersion()) && console.warn(
      "Proxying an event bus of version " + e.getVersion() + " with " + this.getVersion()
    ), this.bus = e;
  }
  getVersion() {
    return "3.3.1";
  }
  subscribe(e, r) {
    this.bus.subscribe(e, r);
  }
  unsubscribe(e, r) {
    this.bus.unsubscribe(e, r);
  }
  emit(e, r) {
    this.bus.emit(e, r);
  }
}
class El {
  constructor() {
    ge(this, "handlers", /* @__PURE__ */ new Map());
  }
  getVersion() {
    return "3.3.1";
  }
  subscribe(e, r) {
    this.handlers.set(
      e,
      (this.handlers.get(e) || []).concat(
        r
      )
    );
  }
  unsubscribe(e, r) {
    this.handlers.set(
      e,
      (this.handlers.get(e) || []).filter((i) => i !== r)
    );
  }
  emit(e, r) {
    (this.handlers.get(e) || []).forEach((i) => {
      try {
        i(r);
      } catch (l) {
        console.error("could not invoke event listener", l);
      }
    });
  }
}
let Br = null;
function va() {
  var n;
  return Br !== null ? Br : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : ((n = window.OC) != null && n._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? Br = new yl(window._nc_event_bus) : Br = window._nc_event_bus = new El(), Br);
}
function vl(n, e) {
  va().subscribe(n, e);
}
function bl(n, e) {
  va().emit(n, e);
}
var $n = {}, kn = {}, nn = {};
Object.defineProperty(nn, "__esModule", {
  value: !0
});
nn.default = void 0;
function Tn(n, e, r) {
  return e = Nl(e), e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function Nl(n) {
  var e = Tl(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Tl(n, e) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
class $r {
  constructor(e, r, i) {
    Tn(this, "scope", void 0), Tn(this, "wrapped", void 0), this.scope = "".concat(i ? $r.GLOBAL_SCOPE_PERSISTENT : $r.GLOBAL_SCOPE_VOLATILE, "_").concat(btoa(e), "_"), this.wrapped = r;
  }
  scopeKey(e) {
    return "".concat(this.scope).concat(e);
  }
  setItem(e, r) {
    this.wrapped.setItem(this.scopeKey(e), r);
  }
  getItem(e) {
    return this.wrapped.getItem(this.scopeKey(e));
  }
  removeItem(e) {
    this.wrapped.removeItem(this.scopeKey(e));
  }
  clear() {
    Object.keys(this.wrapped).filter((e) => e.startsWith(this.scope)).map(this.wrapped.removeItem.bind(this.wrapped));
  }
}
nn.default = $r;
Tn($r, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol");
Tn($r, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
Object.defineProperty(kn, "__esModule", {
  value: !0
});
kn.default = void 0;
var Al = Il(nn);
function Il(n) {
  return n && n.__esModule ? n : { default: n };
}
function zn(n, e, r) {
  return e = _l(e), e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function _l(n) {
  var e = Ol(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Ol(n, e) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
class Rl {
  constructor(e) {
    zn(this, "appId", void 0), zn(this, "persisted", !1), zn(this, "clearedOnLogout", !1), this.appId = e;
  }
  persist() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    return this.persisted = e, this;
  }
  clearOnLogout() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    return this.clearedOnLogout = e, this;
  }
  build() {
    return new Al.default(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
kn.default = Rl;
Object.defineProperty($n, "__esModule", {
  value: !0
});
$n.clearAll = Pl;
$n.clearNonPersistent = $l;
var xl = $n.getBuilder = Ll, Sl = ba(kn), Cl = ba(nn);
function ba(n) {
  return n && n.__esModule ? n : { default: n };
}
function Ll(n) {
  return new Sl.default(n);
}
function Na(n, e) {
  Object.keys(n).filter((r) => e ? e(r) : !0).map(n.removeItem.bind(n));
}
function Pl() {
  [window.sessionStorage, window.localStorage].map((e) => Na(e));
}
function $l() {
  [window.sessionStorage, window.localStorage].map((e) => Na(e, (r) => !r.startsWith(Cl.default.GLOBAL_SCOPE_PERSISTENT)));
}
let Zr;
const Ta = [];
function kl() {
  return Zr === void 0 && (Zr = document.head.dataset.requesttoken ?? null), Zr;
}
function Fl(n) {
  Ta.push(n);
}
vl("csrf-token-update", (n) => {
  Zr = n.token, Ta.forEach((e) => {
    try {
      e(Zr);
    } catch (r) {
      console.error("Error updating CSRF token observer", r);
    }
  });
});
xl("public").persist().build();
let Ir;
const Uo = (n, e) => n ? n.getAttribute(e) : null;
function Ji() {
  if (Ir !== void 0)
    return Ir;
  const n = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!n)
    return null;
  const e = Uo(n, "data-user");
  return e === null ? (Ir = null, Ir) : (Ir = {
    uid: e,
    displayName: Uo(n, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ir);
}
var Re = /* @__PURE__ */ ((n) => (n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Fatal = 4] = "Fatal", n))(Re || {}), Ml = Object.defineProperty, Ul = (n, e, r) => e in n ? Ml(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r, Bl = (n, e, r) => (Ul(n, e + "", r), r);
class Dl {
  constructor(e) {
    Bl(this, "context"), this.context = e || {};
  }
  formatMessage(e, r, i) {
    let l = "[" + Re[r].toUpperCase() + "] ";
    return i && i.app && (l += i.app + ": "), typeof e == "string" ? l + e : (l += "Unexpected ".concat(e.name), e.message && (l += ' "'.concat(e.message, '"')), r === Re.Debug && e.stack && (l += `

Stack trace:
`.concat(e.stack)), l);
  }
  log(e, r, i) {
    var l, a;
    if (!(typeof ((l = this.context) == null ? void 0 : l.level) == "number" && e < ((a = this.context) == null ? void 0 : a.level)))
      switch (typeof r == "object" && (i == null ? void 0 : i.error) === void 0 && (i.error = r), e) {
        case Re.Debug:
          console.debug(this.formatMessage(r, Re.Debug, i), i);
          break;
        case Re.Info:
          console.info(this.formatMessage(r, Re.Info, i), i);
          break;
        case Re.Warn:
          console.warn(this.formatMessage(r, Re.Warn, i), i);
          break;
        case Re.Error:
          console.error(this.formatMessage(r, Re.Error, i), i);
          break;
        case Re.Fatal:
        default:
          console.error(this.formatMessage(r, Re.Fatal, i), i);
          break;
      }
  }
  debug(e, r) {
    this.log(Re.Debug, e, Object.assign({}, this.context, r));
  }
  info(e, r) {
    this.log(Re.Info, e, Object.assign({}, this.context, r));
  }
  warn(e, r) {
    this.log(Re.Warn, e, Object.assign({}, this.context, r));
  }
  error(e, r) {
    this.log(Re.Error, e, Object.assign({}, this.context, r));
  }
  fatal(e, r) {
    this.log(Re.Fatal, e, Object.assign({}, this.context, r));
  }
}
function jl(n) {
  return new Dl(n);
}
var Gl = Object.defineProperty, ql = (n, e, r) => e in n ? Gl(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r, Bo = (n, e, r) => (ql(n, typeof e != "symbol" ? e + "" : e, r), r);
class Vl {
  constructor(e) {
    Bo(this, "context"), Bo(this, "factory"), this.context = {}, this.factory = e;
  }
  /**
   * Set the app name within the logging context
   *
   * @param appId App name
   */
  setApp(e) {
    return this.context.app = e, this;
  }
  /**
   * Set the logging level within the logging context
   *
   * @param level Logging level
   */
  setLogLevel(e) {
    return this.context.level = e, this;
  }
  /* eslint-disable jsdoc/no-undefined-types */
  /**
   * Set the user id within the logging context
   * @param uid User ID
   * @see {@link detectUser}
   */
  /* eslint-enable jsdoc/no-undefined-types */
  setUid(e) {
    return this.context.uid = e, this;
  }
  /**
   * Detect the currently logged in user and set the user id within the logging context
   */
  detectUser() {
    const e = Ji();
    return e !== null && (this.context.uid = e.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const e = this, r = () => {
      var i, l;
      document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = (l = (i = window._oc_config) == null ? void 0 : i.loglevel) != null ? l : Re.Warn, window._oc_debug && (e.context.level = Re.Debug), document.removeEventListener("readystatechange", r)) : document.addEventListener("readystatechange", r);
    };
    return r(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Wl() {
  return new Vl(jl);
}
const Xl = (n) => "/remote.php/" + n, zl = (n, e) => {
  var r;
  return ((r = void 0) != null ? r : Hl()) + Xl(n);
}, Hl = () => window.location.protocol + "//" + window.location.host + Yl();
function Yl() {
  let n = window._oc_webroot;
  if (typeof n > "u") {
    n = location.pathname;
    const e = n.indexOf("/index.php/");
    if (e !== -1)
      n = n.slice(0, e);
    else {
      const r = n.indexOf("/", 1);
      n = n.slice(0, r > 0 ? r : void 0);
    }
  }
  return n;
}
function or(n, e, r) {
  return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function Do(n, e, r) {
  Zl(n, e), e.set(n, r);
}
function Zl(n, e) {
  if (e.has(n))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Be(n, e) {
  var r = Aa(n, e, "get");
  return Jl(n, r);
}
function Jl(n, e) {
  return e.get ? e.get.call(n) : e.value;
}
function jo(n, e, r) {
  var i = Aa(n, e, "set");
  return Kl(n, i, r), r;
}
function Aa(n, e, r) {
  if (!e.has(n))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return e.get(n);
}
function Kl(n, e, r) {
  if (e.set)
    e.set.call(n, r);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = r;
  }
}
var Ql = typeof Symbol < "u" ? Symbol.toStringTag : "@@toStringTag", Ve = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap();
class Fn {
  constructor(e) {
    var {
      executor: r = () => {
      },
      internals: i = Qi(),
      promise: l = new Promise((a, h) => r(a, h, (c) => {
        i.onCancelList.push(c);
      }))
    } = e;
    Do(this, Ve, {
      writable: !0,
      value: void 0
    }), Do(this, Dr, {
      writable: !0,
      value: void 0
    }), or(this, Ql, "CancelablePromise"), this.cancel = this.cancel.bind(this), jo(this, Ve, i), jo(this, Dr, l || new Promise((a, h) => r(a, h, (c) => {
      i.onCancelList.push(c);
    })));
  }
  then(e, r) {
    return yn(Be(this, Dr).then(cn(e, Be(this, Ve)), cn(r, Be(this, Ve))), Be(this, Ve));
  }
  catch(e) {
    return yn(Be(this, Dr).catch(cn(e, Be(this, Ve))), Be(this, Ve));
  }
  finally(e, r) {
    return r && Be(this, Ve).onCancelList.push(e), yn(Be(this, Dr).finally(cn(() => {
      if (e)
        return r && (Be(this, Ve).onCancelList = Be(this, Ve).onCancelList.filter((i) => i !== e)), e();
    }, Be(this, Ve))), Be(this, Ve));
  }
  cancel() {
    Be(this, Ve).isCanceled = !0;
    var e = Be(this, Ve).onCancelList;
    Be(this, Ve).onCancelList = [];
    for (var r of e)
      if (typeof r == "function")
        try {
          r();
        } catch (i) {
          console.error(i);
        }
  }
  isCanceled() {
    return Be(this, Ve).isCanceled === !0;
  }
}
class sr extends Fn {
  constructor(e) {
    super({
      executor: e
    });
  }
}
or(sr, "all", function(e) {
  return Mn(e, Promise.all(e));
});
or(sr, "allSettled", function(e) {
  return Mn(e, Promise.allSettled(e));
});
or(sr, "any", function(e) {
  return Mn(e, Promise.any(e));
});
or(sr, "race", function(e) {
  return Mn(e, Promise.race(e));
});
or(sr, "resolve", function(e) {
  return Ia(Promise.resolve(e));
});
or(sr, "reject", function(e) {
  return Ia(Promise.reject(e));
});
or(sr, "isCancelable", Ki);
function Ia(n) {
  return yn(n, Qi());
}
function Ki(n) {
  return n instanceof sr || n instanceof Fn;
}
function cn(n, e) {
  if (n)
    return (r) => {
      if (!e.isCanceled) {
        var i = n(r);
        return Ki(i) && e.onCancelList.push(i.cancel), i;
      }
      return r;
    };
}
function yn(n, e) {
  return new Fn({
    internals: e,
    promise: n
  });
}
function Mn(n, e) {
  var r = Qi();
  return r.onCancelList.push(() => {
    for (var i of n)
      Ki(i) && i.cancel();
  }), new Fn({
    internals: r,
    promise: e
  });
}
function Qi() {
  return {
    isCanceled: !1,
    onCancelList: []
  };
}
/*! For license information please see index.js.LICENSE.txt */
var ec = { 2: (n) => {
  function e(l, a, h) {
    l instanceof RegExp && (l = r(l, h)), a instanceof RegExp && (a = r(a, h));
    var c = i(l, a, h);
    return c && { start: c[0], end: c[1], pre: h.slice(0, c[0]), body: h.slice(c[0] + l.length, c[1]), post: h.slice(c[1] + a.length) };
  }
  function r(l, a) {
    var h = a.match(l);
    return h ? h[0] : null;
  }
  function i(l, a, h) {
    var c, u, o, s, p, d = h.indexOf(l), m = h.indexOf(a, d + 1), w = d;
    if (d >= 0 && m > 0) {
      for (c = [], o = h.length; w >= 0 && !p; ) w == d ? (c.push(w), d = h.indexOf(l, w + 1)) : c.length == 1 ? p = [c.pop(), m] : ((u = c.pop()) < o && (o = u, s = m), m = h.indexOf(a, w + 1)), w = d < m && d >= 0 ? d : m;
      c.length && (p = [o, s]);
    }
    return p;
  }
  n.exports = e, e.range = i;
}, 101: function(n, e, r) {
  var i;
  n = r.nmd(n), function(l) {
    var a = (n && n.exports, typeof an == "object" && an);
    a.global !== a && a.window;
    var h = function(p) {
      this.message = p;
    };
    (h.prototype = new Error()).name = "InvalidCharacterError";
    var c = function(p) {
      throw new h(p);
    }, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = /[\t\n\f\r ]/g, s = { encode: function(p) {
      p = String(p), /[^\0-\xFF]/.test(p) && c("The string to be encoded contains characters outside of the Latin1 range.");
      for (var d, m, w, v, _ = p.length % 3, A = "", E = -1, I = p.length - _; ++E < I; ) d = p.charCodeAt(E) << 16, m = p.charCodeAt(++E) << 8, w = p.charCodeAt(++E), A += u.charAt((v = d + m + w) >> 18 & 63) + u.charAt(v >> 12 & 63) + u.charAt(v >> 6 & 63) + u.charAt(63 & v);
      return _ == 2 ? (d = p.charCodeAt(E) << 8, m = p.charCodeAt(++E), A += u.charAt((v = d + m) >> 10) + u.charAt(v >> 4 & 63) + u.charAt(v << 2 & 63) + "=") : _ == 1 && (v = p.charCodeAt(E), A += u.charAt(v >> 2) + u.charAt(v << 4 & 63) + "=="), A;
    }, decode: function(p) {
      var d = (p = String(p).replace(o, "")).length;
      d % 4 == 0 && (d = (p = p.replace(/==?$/, "")).length), (d % 4 == 1 || /[^+a-zA-Z0-9/]/.test(p)) && c("Invalid character: the string to be decoded is not correctly encoded.");
      for (var m, w, v = 0, _ = "", A = -1; ++A < d; ) w = u.indexOf(p.charAt(A)), m = v % 4 ? 64 * m + w : w, v++ % 4 && (_ += String.fromCharCode(255 & m >> (-2 * v & 6)));
      return _;
    }, version: "1.0.0" };
    (i = (function() {
      return s;
    }).call(e, r, e, n)) === void 0 || (n.exports = i);
  }();
}, 172: (n, e) => {
  e.d = function(r) {
    if (!r) return 0;
    for (var i = (r = r.toString()).length, l = r.length; l--; ) {
      var a = r.charCodeAt(l);
      56320 <= a && a <= 57343 && l--, 127 < a && a <= 2047 ? i++ : 2047 < a && a <= 65535 && (i += 2);
    }
    return i;
  };
}, 526: (n) => {
  var e = { utf8: { stringToBytes: function(r) {
    return e.bin.stringToBytes(unescape(encodeURIComponent(r)));
  }, bytesToString: function(r) {
    return decodeURIComponent(escape(e.bin.bytesToString(r)));
  } }, bin: { stringToBytes: function(r) {
    for (var i = [], l = 0; l < r.length; l++) i.push(255 & r.charCodeAt(l));
    return i;
  }, bytesToString: function(r) {
    for (var i = [], l = 0; l < r.length; l++) i.push(String.fromCharCode(r[l]));
    return i.join("");
  } } };
  n.exports = e;
}, 298: (n) => {
  var e, r;
  e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = { rotl: function(i, l) {
    return i << l | i >>> 32 - l;
  }, rotr: function(i, l) {
    return i << 32 - l | i >>> l;
  }, endian: function(i) {
    if (i.constructor == Number) return 16711935 & r.rotl(i, 8) | 4278255360 & r.rotl(i, 24);
    for (var l = 0; l < i.length; l++) i[l] = r.endian(i[l]);
    return i;
  }, randomBytes: function(i) {
    for (var l = []; i > 0; i--) l.push(Math.floor(256 * Math.random()));
    return l;
  }, bytesToWords: function(i) {
    for (var l = [], a = 0, h = 0; a < i.length; a++, h += 8) l[h >>> 5] |= i[a] << 24 - h % 32;
    return l;
  }, wordsToBytes: function(i) {
    for (var l = [], a = 0; a < 32 * i.length; a += 8) l.push(i[a >>> 5] >>> 24 - a % 32 & 255);
    return l;
  }, bytesToHex: function(i) {
    for (var l = [], a = 0; a < i.length; a++) l.push((i[a] >>> 4).toString(16)), l.push((15 & i[a]).toString(16));
    return l.join("");
  }, hexToBytes: function(i) {
    for (var l = [], a = 0; a < i.length; a += 2) l.push(parseInt(i.substr(a, 2), 16));
    return l;
  }, bytesToBase64: function(i) {
    for (var l = [], a = 0; a < i.length; a += 3) for (var h = i[a] << 16 | i[a + 1] << 8 | i[a + 2], c = 0; c < 4; c++) 8 * a + 6 * c <= 8 * i.length ? l.push(e.charAt(h >>> 6 * (3 - c) & 63)) : l.push("=");
    return l.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var l = [], a = 0, h = 0; a < i.length; h = ++a % 4) h != 0 && l.push((e.indexOf(i.charAt(a - 1)) & Math.pow(2, -2 * h + 8) - 1) << 2 * h | e.indexOf(i.charAt(a)) >>> 6 - 2 * h);
    return l;
  } }, n.exports = r;
}, 635: (n, e, r) => {
  const i = r(31), l = r(338), a = r(221);
  n.exports = { XMLParser: l, XMLValidator: i, XMLBuilder: a };
}, 705: (n, e) => {
  const r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", i = "[" + r + "][" + r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*", l = new RegExp("^" + i + "$");
  e.isExist = function(a) {
    return a !== void 0;
  }, e.isEmptyObject = function(a) {
    return Object.keys(a).length === 0;
  }, e.merge = function(a, h, c) {
    if (h) {
      const u = Object.keys(h), o = u.length;
      for (let s = 0; s < o; s++) a[u[s]] = c === "strict" ? [h[u[s]]] : h[u[s]];
    }
  }, e.getValue = function(a) {
    return e.isExist(a) ? a : "";
  }, e.isName = function(a) {
    return l.exec(a) != null;
  }, e.getAllMatches = function(a, h) {
    const c = [];
    let u = h.exec(a);
    for (; u; ) {
      const o = [];
      o.startIndex = h.lastIndex - u[0].length;
      const s = u.length;
      for (let p = 0; p < s; p++) o.push(u[p]);
      c.push(o), u = h.exec(a);
    }
    return c;
  }, e.nameRegexp = i;
}, 31: (n, e, r) => {
  const i = r(705), l = { allowBooleanAttributes: !1, unpairedTags: [] };
  function a(E) {
    return E === " " || E === "	" || E === `
` || E === "\r";
  }
  function h(E, I) {
    const S = I;
    for (; I < E.length; I++) if (!(E[I] != "?" && E[I] != " ")) {
      const T = E.substr(S, I - S);
      if (I > 5 && T === "xml") return w("InvalidXml", "XML declaration allowed only at the start of the document.", _(E, I));
      if (E[I] == "?" && E[I + 1] == ">") {
        I++;
        break;
      }
    }
    return I;
  }
  function c(E, I) {
    if (E.length > I + 5 && E[I + 1] === "-" && E[I + 2] === "-") {
      for (I += 3; I < E.length; I++) if (E[I] === "-" && E[I + 1] === "-" && E[I + 2] === ">") {
        I += 2;
        break;
      }
    } else if (E.length > I + 8 && E[I + 1] === "D" && E[I + 2] === "O" && E[I + 3] === "C" && E[I + 4] === "T" && E[I + 5] === "Y" && E[I + 6] === "P" && E[I + 7] === "E") {
      let S = 1;
      for (I += 8; I < E.length; I++) if (E[I] === "<") S++;
      else if (E[I] === ">" && (S--, S === 0)) break;
    } else if (E.length > I + 9 && E[I + 1] === "[" && E[I + 2] === "C" && E[I + 3] === "D" && E[I + 4] === "A" && E[I + 5] === "T" && E[I + 6] === "A" && E[I + 7] === "[") {
      for (I += 8; I < E.length; I++) if (E[I] === "]" && E[I + 1] === "]" && E[I + 2] === ">") {
        I += 2;
        break;
      }
    }
    return I;
  }
  e.validate = function(E, I) {
    I = Object.assign({}, l, I);
    const S = [];
    let T = !1, x = !1;
    E[0] === "\uFEFF" && (E = E.substr(1));
    for (let P = 0; P < E.length; P++) if (E[P] === "<" && E[P + 1] === "?") {
      if (P += 2, P = h(E, P), P.err) return P;
    } else {
      if (E[P] !== "<") {
        if (a(E[P])) continue;
        return w("InvalidChar", "char '" + E[P] + "' is not expected.", _(E, P));
      }
      {
        let k = P;
        if (P++, E[P] === "!") {
          P = c(E, P);
          continue;
        }
        {
          let j = !1;
          E[P] === "/" && (j = !0, P++);
          let D = "";
          for (; P < E.length && E[P] !== ">" && E[P] !== " " && E[P] !== "	" && E[P] !== `
` && E[P] !== "\r"; P++) D += E[P];
          if (D = D.trim(), D[D.length - 1] === "/" && (D = D.substring(0, D.length - 1), P--), C = D, !i.isName(C)) {
            let q;
            return q = D.trim().length === 0 ? "Invalid space after '<'." : "Tag '" + D + "' is an invalid name.", w("InvalidTag", q, _(E, P));
          }
          const B = s(E, P);
          if (B === !1) return w("InvalidAttr", "Attributes for '" + D + "' have open quote.", _(E, P));
          let $ = B.value;
          if (P = B.index, $[$.length - 1] === "/") {
            const q = P - $.length;
            $ = $.substring(0, $.length - 1);
            const V = d($, I);
            if (V !== !0) return w(V.err.code, V.err.msg, _(E, q + V.err.line));
            T = !0;
          } else if (j) {
            if (!B.tagClosed) return w("InvalidTag", "Closing tag '" + D + "' doesn't have proper closing.", _(E, P));
            if ($.trim().length > 0) return w("InvalidTag", "Closing tag '" + D + "' can't have attributes or invalid starting.", _(E, k));
            if (S.length === 0) return w("InvalidTag", "Closing tag '" + D + "' has not been opened.", _(E, k));
            {
              const q = S.pop();
              if (D !== q.tagName) {
                let V = _(E, q.tagStartPos);
                return w("InvalidTag", "Expected closing tag '" + q.tagName + "' (opened in line " + V.line + ", col " + V.col + ") instead of closing tag '" + D + "'.", _(E, k));
              }
              S.length == 0 && (x = !0);
            }
          } else {
            const q = d($, I);
            if (q !== !0) return w(q.err.code, q.err.msg, _(E, P - $.length + q.err.line));
            if (x === !0) return w("InvalidXml", "Multiple possible root nodes found.", _(E, P));
            I.unpairedTags.indexOf(D) !== -1 || S.push({ tagName: D, tagStartPos: k }), T = !0;
          }
          for (P++; P < E.length; P++) if (E[P] === "<") {
            if (E[P + 1] === "!") {
              P++, P = c(E, P);
              continue;
            }
            if (E[P + 1] !== "?") break;
            if (P = h(E, ++P), P.err) return P;
          } else if (E[P] === "&") {
            const q = m(E, P);
            if (q == -1) return w("InvalidChar", "char '&' is not expected.", _(E, P));
            P = q;
          } else if (x === !0 && !a(E[P])) return w("InvalidXml", "Extra text at the end", _(E, P));
          E[P] === "<" && P--;
        }
      }
    }
    var C;
    return T ? S.length == 1 ? w("InvalidTag", "Unclosed tag '" + S[0].tagName + "'.", _(E, S[0].tagStartPos)) : !(S.length > 0) || w("InvalidXml", "Invalid '" + JSON.stringify(S.map((P) => P.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : w("InvalidXml", "Start tag expected.", 1);
  };
  const u = '"', o = "'";
  function s(E, I) {
    let S = "", T = "", x = !1;
    for (; I < E.length; I++) {
      if (E[I] === u || E[I] === o) T === "" ? T = E[I] : T !== E[I] || (T = "");
      else if (E[I] === ">" && T === "") {
        x = !0;
        break;
      }
      S += E[I];
    }
    return T === "" && { value: S, index: I, tagClosed: x };
  }
  const p = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function d(E, I) {
    const S = i.getAllMatches(E, p), T = {};
    for (let x = 0; x < S.length; x++) {
      if (S[x][1].length === 0) return w("InvalidAttr", "Attribute '" + S[x][2] + "' has no space in starting.", A(S[x]));
      if (S[x][3] !== void 0 && S[x][4] === void 0) return w("InvalidAttr", "Attribute '" + S[x][2] + "' is without value.", A(S[x]));
      if (S[x][3] === void 0 && !I.allowBooleanAttributes) return w("InvalidAttr", "boolean attribute '" + S[x][2] + "' is not allowed.", A(S[x]));
      const C = S[x][2];
      if (!v(C)) return w("InvalidAttr", "Attribute '" + C + "' is an invalid name.", A(S[x]));
      if (T.hasOwnProperty(C)) return w("InvalidAttr", "Attribute '" + C + "' is repeated.", A(S[x]));
      T[C] = 1;
    }
    return !0;
  }
  function m(E, I) {
    if (E[++I] === ";") return -1;
    if (E[I] === "#") return function(T, x) {
      let C = /\d/;
      for (T[x] === "x" && (x++, C = /[\da-fA-F]/); x < T.length; x++) {
        if (T[x] === ";") return x;
        if (!T[x].match(C)) break;
      }
      return -1;
    }(E, ++I);
    let S = 0;
    for (; I < E.length; I++, S++) if (!(E[I].match(/\w/) && S < 20)) {
      if (E[I] === ";") break;
      return -1;
    }
    return I;
  }
  function w(E, I, S) {
    return { err: { code: E, msg: I, line: S.line || S, col: S.col } };
  }
  function v(E) {
    return i.isName(E);
  }
  function _(E, I) {
    const S = E.substring(0, I).split(/\r?\n/);
    return { line: S.length, col: S[S.length - 1].length + 1 };
  }
  function A(E) {
    return E.startIndex + E[1].length;
  }
}, 221: (n, e, r) => {
  const i = r(87), l = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(o, s) {
    return s;
  }, attributeValueProcessor: function(o, s) {
    return s;
  }, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
  function a(o) {
    this.options = Object.assign({}, l, o), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = u), this.processTextOrObjNode = h, this.options.format ? (this.indentate = c, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  function h(o, s, p) {
    const d = this.j2x(o, p + 1);
    return o[this.options.textNodeName] !== void 0 && Object.keys(o).length === 1 ? this.buildTextValNode(o[this.options.textNodeName], s, d.attrStr, p) : this.buildObjectNode(d.val, s, d.attrStr, p);
  }
  function c(o) {
    return this.options.indentBy.repeat(o);
  }
  function u(o) {
    return !(!o.startsWith(this.options.attributeNamePrefix) || o === this.options.textNodeName) && o.substr(this.attrPrefixLen);
  }
  a.prototype.build = function(o) {
    return this.options.preserveOrder ? i(o, this.options) : (Array.isArray(o) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (o = { [this.options.arrayNodeName]: o }), this.j2x(o, 0).val);
  }, a.prototype.j2x = function(o, s) {
    let p = "", d = "";
    for (let m in o) if (Object.prototype.hasOwnProperty.call(o, m)) if (o[m] === void 0) this.isAttribute(m) && (d += "");
    else if (o[m] === null) this.isAttribute(m) ? d += "" : m[0] === "?" ? d += this.indentate(s) + "<" + m + "?" + this.tagEndChar : d += this.indentate(s) + "<" + m + "/" + this.tagEndChar;
    else if (o[m] instanceof Date) d += this.buildTextValNode(o[m], m, "", s);
    else if (typeof o[m] != "object") {
      const w = this.isAttribute(m);
      if (w) p += this.buildAttrPairStr(w, "" + o[m]);
      else if (m === this.options.textNodeName) {
        let v = this.options.tagValueProcessor(m, "" + o[m]);
        d += this.replaceEntitiesValue(v);
      } else d += this.buildTextValNode(o[m], m, "", s);
    } else if (Array.isArray(o[m])) {
      const w = o[m].length;
      let v = "", _ = "";
      for (let A = 0; A < w; A++) {
        const E = o[m][A];
        if (E !== void 0) if (E === null) m[0] === "?" ? d += this.indentate(s) + "<" + m + "?" + this.tagEndChar : d += this.indentate(s) + "<" + m + "/" + this.tagEndChar;
        else if (typeof E == "object") if (this.options.oneListGroup) {
          const I = this.j2x(E, s + 1);
          v += I.val, this.options.attributesGroupName && E.hasOwnProperty(this.options.attributesGroupName) && (_ += I.attrStr);
        } else v += this.processTextOrObjNode(E, m, s);
        else if (this.options.oneListGroup) {
          let I = this.options.tagValueProcessor(m, E);
          I = this.replaceEntitiesValue(I), v += I;
        } else v += this.buildTextValNode(E, m, "", s);
      }
      this.options.oneListGroup && (v = this.buildObjectNode(v, m, _, s)), d += v;
    } else if (this.options.attributesGroupName && m === this.options.attributesGroupName) {
      const w = Object.keys(o[m]), v = w.length;
      for (let _ = 0; _ < v; _++) p += this.buildAttrPairStr(w[_], "" + o[m][w[_]]);
    } else d += this.processTextOrObjNode(o[m], m, s);
    return { attrStr: p, val: d };
  }, a.prototype.buildAttrPairStr = function(o, s) {
    return s = this.options.attributeValueProcessor(o, "" + s), s = this.replaceEntitiesValue(s), this.options.suppressBooleanAttributes && s === "true" ? " " + o : " " + o + '="' + s + '"';
  }, a.prototype.buildObjectNode = function(o, s, p, d) {
    if (o === "") return s[0] === "?" ? this.indentate(d) + "<" + s + p + "?" + this.tagEndChar : this.indentate(d) + "<" + s + p + this.closeTag(s) + this.tagEndChar;
    {
      let m = "</" + s + this.tagEndChar, w = "";
      return s[0] === "?" && (w = "?", m = ""), !p && p !== "" || o.indexOf("<") !== -1 ? this.options.commentPropName !== !1 && s === this.options.commentPropName && w.length === 0 ? this.indentate(d) + `<!--${o}-->` + this.newLine : this.indentate(d) + "<" + s + p + w + this.tagEndChar + o + this.indentate(d) + m : this.indentate(d) + "<" + s + p + w + ">" + o + m;
    }
  }, a.prototype.closeTag = function(o) {
    let s = "";
    return this.options.unpairedTags.indexOf(o) !== -1 ? this.options.suppressUnpairedNode || (s = "/") : s = this.options.suppressEmptyNode ? "/" : `></${o}`, s;
  }, a.prototype.buildTextValNode = function(o, s, p, d) {
    if (this.options.cdataPropName !== !1 && s === this.options.cdataPropName) return this.indentate(d) + `<![CDATA[${o}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && s === this.options.commentPropName) return this.indentate(d) + `<!--${o}-->` + this.newLine;
    if (s[0] === "?") return this.indentate(d) + "<" + s + p + "?" + this.tagEndChar;
    {
      let m = this.options.tagValueProcessor(s, o);
      return m = this.replaceEntitiesValue(m), m === "" ? this.indentate(d) + "<" + s + p + this.closeTag(s) + this.tagEndChar : this.indentate(d) + "<" + s + p + ">" + m + "</" + s + this.tagEndChar;
    }
  }, a.prototype.replaceEntitiesValue = function(o) {
    if (o && o.length > 0 && this.options.processEntities) for (let s = 0; s < this.options.entities.length; s++) {
      const p = this.options.entities[s];
      o = o.replace(p.regex, p.val);
    }
    return o;
  }, n.exports = a;
}, 87: (n) => {
  function e(h, c, u, o) {
    let s = "", p = !1;
    for (let d = 0; d < h.length; d++) {
      const m = h[d], w = r(m);
      if (w === void 0) continue;
      let v = "";
      if (v = u.length === 0 ? w : `${u}.${w}`, w === c.textNodeName) {
        let I = m[w];
        l(v, c) || (I = c.tagValueProcessor(w, I), I = a(I, c)), p && (s += o), s += I, p = !1;
        continue;
      }
      if (w === c.cdataPropName) {
        p && (s += o), s += `<![CDATA[${m[w][0][c.textNodeName]}]]>`, p = !1;
        continue;
      }
      if (w === c.commentPropName) {
        s += o + `<!--${m[w][0][c.textNodeName]}-->`, p = !0;
        continue;
      }
      if (w[0] === "?") {
        const I = i(m[":@"], c), S = w === "?xml" ? "" : o;
        let T = m[w][0][c.textNodeName];
        T = T.length !== 0 ? " " + T : "", s += S + `<${w}${T}${I}?>`, p = !0;
        continue;
      }
      let _ = o;
      _ !== "" && (_ += c.indentBy);
      const A = o + `<${w}${i(m[":@"], c)}`, E = e(m[w], c, v, _);
      c.unpairedTags.indexOf(w) !== -1 ? c.suppressUnpairedNode ? s += A + ">" : s += A + "/>" : E && E.length !== 0 || !c.suppressEmptyNode ? E && E.endsWith(">") ? s += A + `>${E}${o}</${w}>` : (s += A + ">", E && o !== "" && (E.includes("/>") || E.includes("</")) ? s += o + c.indentBy + E + o : s += E, s += `</${w}>`) : s += A + "/>", p = !0;
    }
    return s;
  }
  function r(h) {
    const c = Object.keys(h);
    for (let u = 0; u < c.length; u++) {
      const o = c[u];
      if (h.hasOwnProperty(o) && o !== ":@") return o;
    }
  }
  function i(h, c) {
    let u = "";
    if (h && !c.ignoreAttributes) for (let o in h) {
      if (!h.hasOwnProperty(o)) continue;
      let s = c.attributeValueProcessor(o, h[o]);
      s = a(s, c), s === !0 && c.suppressBooleanAttributes ? u += ` ${o.substr(c.attributeNamePrefix.length)}` : u += ` ${o.substr(c.attributeNamePrefix.length)}="${s}"`;
    }
    return u;
  }
  function l(h, c) {
    let u = (h = h.substr(0, h.length - c.textNodeName.length - 1)).substr(h.lastIndexOf(".") + 1);
    for (let o in c.stopNodes) if (c.stopNodes[o] === h || c.stopNodes[o] === "*." + u) return !0;
    return !1;
  }
  function a(h, c) {
    if (h && h.length > 0 && c.processEntities) for (let u = 0; u < c.entities.length; u++) {
      const o = c.entities[u];
      h = h.replace(o.regex, o.val);
    }
    return h;
  }
  n.exports = function(h, c) {
    let u = "";
    return c.format && c.indentBy.length > 0 && (u = `
`), e(h, c, "", u);
  };
}, 193: (n, e, r) => {
  const i = r(705);
  function l(p, d) {
    let m = "";
    for (; d < p.length && p[d] !== "'" && p[d] !== '"'; d++) m += p[d];
    if (m = m.trim(), m.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const w = p[d++];
    let v = "";
    for (; d < p.length && p[d] !== w; d++) v += p[d];
    return [m, v, d];
  }
  function a(p, d) {
    return p[d + 1] === "!" && p[d + 2] === "-" && p[d + 3] === "-";
  }
  function h(p, d) {
    return p[d + 1] === "!" && p[d + 2] === "E" && p[d + 3] === "N" && p[d + 4] === "T" && p[d + 5] === "I" && p[d + 6] === "T" && p[d + 7] === "Y";
  }
  function c(p, d) {
    return p[d + 1] === "!" && p[d + 2] === "E" && p[d + 3] === "L" && p[d + 4] === "E" && p[d + 5] === "M" && p[d + 6] === "E" && p[d + 7] === "N" && p[d + 8] === "T";
  }
  function u(p, d) {
    return p[d + 1] === "!" && p[d + 2] === "A" && p[d + 3] === "T" && p[d + 4] === "T" && p[d + 5] === "L" && p[d + 6] === "I" && p[d + 7] === "S" && p[d + 8] === "T";
  }
  function o(p, d) {
    return p[d + 1] === "!" && p[d + 2] === "N" && p[d + 3] === "O" && p[d + 4] === "T" && p[d + 5] === "A" && p[d + 6] === "T" && p[d + 7] === "I" && p[d + 8] === "O" && p[d + 9] === "N";
  }
  function s(p) {
    if (i.isName(p)) return p;
    throw new Error(`Invalid entity name ${p}`);
  }
  n.exports = function(p, d) {
    const m = {};
    if (p[d + 3] !== "O" || p[d + 4] !== "C" || p[d + 5] !== "T" || p[d + 6] !== "Y" || p[d + 7] !== "P" || p[d + 8] !== "E") throw new Error("Invalid Tag instead of DOCTYPE");
    {
      d += 9;
      let w = 1, v = !1, _ = !1, A = "";
      for (; d < p.length; d++) if (p[d] !== "<" || _) if (p[d] === ">") {
        if (_ ? p[d - 1] === "-" && p[d - 2] === "-" && (_ = !1, w--) : w--, w === 0) break;
      } else p[d] === "[" ? v = !0 : A += p[d];
      else {
        if (v && h(p, d)) d += 7, [entityName, val, d] = l(p, d + 1), val.indexOf("&") === -1 && (m[s(entityName)] = { regx: RegExp(`&${entityName};`, "g"), val });
        else if (v && c(p, d)) d += 8;
        else if (v && u(p, d)) d += 8;
        else if (v && o(p, d)) d += 9;
        else {
          if (!a) throw new Error("Invalid DOCTYPE");
          _ = !0;
        }
        w++, A = "";
      }
      if (w !== 0) throw new Error("Unclosed DOCTYPE");
    }
    return { entities: m, i: d };
  };
}, 63: (n, e) => {
  const r = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(i, l) {
    return l;
  }, attributeValueProcessor: function(i, l) {
    return l;
  }, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(i, l, a) {
    return i;
  } };
  e.buildOptions = function(i) {
    return Object.assign({}, r, i);
  }, e.defaultOptions = r;
}, 299: (n, e, r) => {
  const i = r(705), l = r(365), a = r(193), h = r(494);
  function c(T) {
    const x = Object.keys(T);
    for (let C = 0; C < x.length; C++) {
      const P = x[C];
      this.lastEntities[P] = { regex: new RegExp("&" + P + ";", "g"), val: T[P] };
    }
  }
  function u(T, x, C, P, k, j, D) {
    if (T !== void 0 && (this.options.trimValues && !P && (T = T.trim()), T.length > 0)) {
      D || (T = this.replaceEntitiesValue(T));
      const B = this.options.tagValueProcessor(x, T, C, k, j);
      return B == null ? T : typeof B != typeof T || B !== T ? B : this.options.trimValues || T.trim() === T ? S(T, this.options.parseTagValue, this.options.numberParseOptions) : T;
    }
  }
  function o(T) {
    if (this.options.removeNSPrefix) {
      const x = T.split(":"), C = T.charAt(0) === "/" ? "/" : "";
      if (x[0] === "xmlns") return "";
      x.length === 2 && (T = C + x[1]);
    }
    return T;
  }
  const s = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function p(T, x, C) {
    if (!this.options.ignoreAttributes && typeof T == "string") {
      const P = i.getAllMatches(T, s), k = P.length, j = {};
      for (let D = 0; D < k; D++) {
        const B = this.resolveNameSpace(P[D][1]);
        let $ = P[D][4], q = this.options.attributeNamePrefix + B;
        if (B.length) if (this.options.transformAttributeName && (q = this.options.transformAttributeName(q)), q === "__proto__" && (q = "#__proto__"), $ !== void 0) {
          this.options.trimValues && ($ = $.trim()), $ = this.replaceEntitiesValue($);
          const V = this.options.attributeValueProcessor(B, $, x);
          j[q] = V == null ? $ : typeof V != typeof $ || V !== $ ? V : S($, this.options.parseAttributeValue, this.options.numberParseOptions);
        } else this.options.allowBooleanAttributes && (j[q] = !0);
      }
      if (!Object.keys(j).length) return;
      if (this.options.attributesGroupName) {
        const D = {};
        return D[this.options.attributesGroupName] = j, D;
      }
      return j;
    }
  }
  const d = function(T) {
    T = T.replace(/\r\n?/g, `
`);
    const x = new l("!xml");
    let C = x, P = "", k = "";
    for (let j = 0; j < T.length; j++) if (T[j] === "<") if (T[j + 1] === "/") {
      const D = A(T, ">", j, "Closing Tag is not closed.");
      let B = T.substring(j + 2, D).trim();
      if (this.options.removeNSPrefix) {
        const V = B.indexOf(":");
        V !== -1 && (B = B.substr(V + 1));
      }
      this.options.transformTagName && (B = this.options.transformTagName(B)), C && (P = this.saveTextToParentTag(P, C, k));
      const $ = k.substring(k.lastIndexOf(".") + 1);
      if (B && this.options.unpairedTags.indexOf(B) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${B}>`);
      let q = 0;
      $ && this.options.unpairedTags.indexOf($) !== -1 ? (q = k.lastIndexOf(".", k.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : q = k.lastIndexOf("."), k = k.substring(0, q), C = this.tagsNodeStack.pop(), P = "", j = D;
    } else if (T[j + 1] === "?") {
      let D = E(T, j, !1, "?>");
      if (!D) throw new Error("Pi Tag is not closed.");
      if (P = this.saveTextToParentTag(P, C, k), !(this.options.ignoreDeclaration && D.tagName === "?xml" || this.options.ignorePiTags)) {
        const B = new l(D.tagName);
        B.add(this.options.textNodeName, ""), D.tagName !== D.tagExp && D.attrExpPresent && (B[":@"] = this.buildAttributesMap(D.tagExp, k, D.tagName)), this.addChild(C, B, k);
      }
      j = D.closeIndex + 1;
    } else if (T.substr(j + 1, 3) === "!--") {
      const D = A(T, "-->", j + 4, "Comment is not closed.");
      if (this.options.commentPropName) {
        const B = T.substring(j + 4, D - 2);
        P = this.saveTextToParentTag(P, C, k), C.add(this.options.commentPropName, [{ [this.options.textNodeName]: B }]);
      }
      j = D;
    } else if (T.substr(j + 1, 2) === "!D") {
      const D = a(T, j);
      this.docTypeEntities = D.entities, j = D.i;
    } else if (T.substr(j + 1, 2) === "![") {
      const D = A(T, "]]>", j, "CDATA is not closed.") - 2, B = T.substring(j + 9, D);
      P = this.saveTextToParentTag(P, C, k);
      let $ = this.parseTextData(B, C.tagname, k, !0, !1, !0, !0);
      $ == null && ($ = ""), this.options.cdataPropName ? C.add(this.options.cdataPropName, [{ [this.options.textNodeName]: B }]) : C.add(this.options.textNodeName, $), j = D + 2;
    } else {
      let D = E(T, j, this.options.removeNSPrefix), B = D.tagName;
      const $ = D.rawTagName;
      let q = D.tagExp, V = D.attrExpPresent, oe = D.closeIndex;
      this.options.transformTagName && (B = this.options.transformTagName(B)), C && P && C.tagname !== "!xml" && (P = this.saveTextToParentTag(P, C, k, !1));
      const ne = C;
      if (ne && this.options.unpairedTags.indexOf(ne.tagname) !== -1 && (C = this.tagsNodeStack.pop(), k = k.substring(0, k.lastIndexOf("."))), B !== x.tagname && (k += k ? "." + B : B), this.isItStopNode(this.options.stopNodes, k, B)) {
        let te = "";
        if (q.length > 0 && q.lastIndexOf("/") === q.length - 1) B[B.length - 1] === "/" ? (B = B.substr(0, B.length - 1), k = k.substr(0, k.length - 1), q = B) : q = q.substr(0, q.length - 1), j = D.closeIndex;
        else if (this.options.unpairedTags.indexOf(B) !== -1) j = D.closeIndex;
        else {
          const fe = this.readStopNodeData(T, $, oe + 1);
          if (!fe) throw new Error(`Unexpected end of ${$}`);
          j = fe.i, te = fe.tagContent;
        }
        const ae = new l(B);
        B !== q && V && (ae[":@"] = this.buildAttributesMap(q, k, B)), te && (te = this.parseTextData(te, B, k, !0, V, !0, !0)), k = k.substr(0, k.lastIndexOf(".")), ae.add(this.options.textNodeName, te), this.addChild(C, ae, k);
      } else {
        if (q.length > 0 && q.lastIndexOf("/") === q.length - 1) {
          B[B.length - 1] === "/" ? (B = B.substr(0, B.length - 1), k = k.substr(0, k.length - 1), q = B) : q = q.substr(0, q.length - 1), this.options.transformTagName && (B = this.options.transformTagName(B));
          const te = new l(B);
          B !== q && V && (te[":@"] = this.buildAttributesMap(q, k, B)), this.addChild(C, te, k), k = k.substr(0, k.lastIndexOf("."));
        } else {
          const te = new l(B);
          this.tagsNodeStack.push(C), B !== q && V && (te[":@"] = this.buildAttributesMap(q, k, B)), this.addChild(C, te, k), C = te;
        }
        P = "", j = oe;
      }
    }
    else P += T[j];
    return x.child;
  };
  function m(T, x, C) {
    const P = this.options.updateTag(x.tagname, C, x[":@"]);
    P === !1 || (typeof P == "string" && (x.tagname = P), T.addChild(x));
  }
  const w = function(T) {
    if (this.options.processEntities) {
      for (let x in this.docTypeEntities) {
        const C = this.docTypeEntities[x];
        T = T.replace(C.regx, C.val);
      }
      for (let x in this.lastEntities) {
        const C = this.lastEntities[x];
        T = T.replace(C.regex, C.val);
      }
      if (this.options.htmlEntities) for (let x in this.htmlEntities) {
        const C = this.htmlEntities[x];
        T = T.replace(C.regex, C.val);
      }
      T = T.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return T;
  };
  function v(T, x, C, P) {
    return T && (P === void 0 && (P = Object.keys(x.child).length === 0), (T = this.parseTextData(T, x.tagname, C, !1, !!x[":@"] && Object.keys(x[":@"]).length !== 0, P)) !== void 0 && T !== "" && x.add(this.options.textNodeName, T), T = ""), T;
  }
  function _(T, x, C) {
    const P = "*." + C;
    for (const k in T) {
      const j = T[k];
      if (P === j || x === j) return !0;
    }
    return !1;
  }
  function A(T, x, C, P) {
    const k = T.indexOf(x, C);
    if (k === -1) throw new Error(P);
    return k + x.length - 1;
  }
  function E(T, x, C) {
    const P = function(V, oe) {
      let ne, te = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ">", ae = "";
      for (let fe = oe; fe < V.length; fe++) {
        let re = V[fe];
        if (ne) re === ne && (ne = "");
        else if (re === '"' || re === "'") ne = re;
        else if (re === te[0]) {
          if (!te[1]) return { data: ae, index: fe };
          if (V[fe + 1] === te[1]) return { data: ae, index: fe };
        } else re === "	" && (re = " ");
        ae += re;
      }
    }(T, x + 1, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ">");
    if (!P) return;
    let k = P.data;
    const j = P.index, D = k.search(/\s/);
    let B = k, $ = !0;
    D !== -1 && (B = k.substring(0, D), k = k.substring(D + 1).trimStart());
    const q = B;
    if (C) {
      const V = B.indexOf(":");
      V !== -1 && (B = B.substr(V + 1), $ = B !== P.data.substr(V + 1));
    }
    return { tagName: B, tagExp: k, closeIndex: j, attrExpPresent: $, rawTagName: q };
  }
  function I(T, x, C) {
    const P = C;
    let k = 1;
    for (; C < T.length; C++) if (T[C] === "<") if (T[C + 1] === "/") {
      const j = A(T, ">", C, `${x} is not closed`);
      if (T.substring(C + 2, j).trim() === x && (k--, k === 0)) return { tagContent: T.substring(P, C), i: j };
      C = j;
    } else if (T[C + 1] === "?") C = A(T, "?>", C + 1, "StopNode is not closed.");
    else if (T.substr(C + 1, 3) === "!--") C = A(T, "-->", C + 3, "StopNode is not closed.");
    else if (T.substr(C + 1, 2) === "![") C = A(T, "]]>", C, "StopNode is not closed.") - 2;
    else {
      const j = E(T, C, ">");
      j && ((j && j.tagName) === x && j.tagExp[j.tagExp.length - 1] !== "/" && k++, C = j.closeIndex);
    }
  }
  function S(T, x, C) {
    if (x && typeof T == "string") {
      const P = T.trim();
      return P === "true" || P !== "false" && h(T, C);
    }
    return i.isExist(T) ? T : "";
  }
  n.exports = class {
    constructor(T) {
      this.options = T, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (x, C) => String.fromCharCode(Number.parseInt(C, 10)) }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (x, C) => String.fromCharCode(Number.parseInt(C, 16)) } }, this.addExternalEntities = c, this.parseXml = d, this.parseTextData = u, this.resolveNameSpace = o, this.buildAttributesMap = p, this.isItStopNode = _, this.replaceEntitiesValue = w, this.readStopNodeData = I, this.saveTextToParentTag = v, this.addChild = m;
    }
  };
}, 338: (n, e, r) => {
  const { buildOptions: i } = r(63), l = r(299), { prettify: a } = r(728), h = r(31);
  n.exports = class {
    constructor(c) {
      this.externalEntities = {}, this.options = i(c);
    }
    parse(c, u) {
      if (typeof c != "string") {
        if (!c.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
        c = c.toString();
      }
      if (u) {
        u === !0 && (u = {});
        const p = h.validate(c, u);
        if (p !== !0) throw Error(`${p.err.msg}:${p.err.line}:${p.err.col}`);
      }
      const o = new l(this.options);
      o.addExternalEntities(this.externalEntities);
      const s = o.parseXml(c);
      return this.options.preserveOrder || s === void 0 ? s : a(s, this.options);
    }
    addEntity(c, u) {
      if (u.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
      if (c.indexOf("&") !== -1 || c.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (u === "&") throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[c] = u;
    }
  };
}, 728: (n, e) => {
  function r(h, c, u) {
    let o;
    const s = {};
    for (let p = 0; p < h.length; p++) {
      const d = h[p], m = i(d);
      let w = "";
      if (w = u === void 0 ? m : u + "." + m, m === c.textNodeName) o === void 0 ? o = d[m] : o += "" + d[m];
      else {
        if (m === void 0) continue;
        if (d[m]) {
          let v = r(d[m], c, w);
          const _ = a(v, c);
          d[":@"] ? l(v, d[":@"], w, c) : Object.keys(v).length !== 1 || v[c.textNodeName] === void 0 || c.alwaysCreateTextNode ? Object.keys(v).length === 0 && (c.alwaysCreateTextNode ? v[c.textNodeName] = "" : v = "") : v = v[c.textNodeName], s[m] !== void 0 && s.hasOwnProperty(m) ? (Array.isArray(s[m]) || (s[m] = [s[m]]), s[m].push(v)) : c.isArray(m, w, _) ? s[m] = [v] : s[m] = v;
        }
      }
    }
    return typeof o == "string" ? o.length > 0 && (s[c.textNodeName] = o) : o !== void 0 && (s[c.textNodeName] = o), s;
  }
  function i(h) {
    const c = Object.keys(h);
    for (let u = 0; u < c.length; u++) {
      const o = c[u];
      if (o !== ":@") return o;
    }
  }
  function l(h, c, u, o) {
    if (c) {
      const s = Object.keys(c), p = s.length;
      for (let d = 0; d < p; d++) {
        const m = s[d];
        o.isArray(m, u + "." + m, !0, !0) ? h[m] = [c[m]] : h[m] = c[m];
      }
    }
  }
  function a(h, c) {
    const { textNodeName: u } = c, o = Object.keys(h).length;
    return o === 0 || !(o !== 1 || !h[u] && typeof h[u] != "boolean" && h[u] !== 0);
  }
  e.prettify = function(h, c) {
    return r(h, c);
  };
}, 365: (n) => {
  n.exports = class {
    constructor(e) {
      this.tagname = e, this.child = [], this[":@"] = {};
    }
    add(e, r) {
      e === "__proto__" && (e = "#__proto__"), this.child.push({ [e]: r });
    }
    addChild(e) {
      e.tagname === "__proto__" && (e.tagname = "#__proto__"), e[":@"] && Object.keys(e[":@"]).length > 0 ? this.child.push({ [e.tagname]: e.child, ":@": e[":@"] }) : this.child.push({ [e.tagname]: e.child });
    }
  };
}, 135: (n) => {
  function e(r) {
    return !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
  }
  n.exports = function(r) {
    return r != null && (e(r) || function(i) {
      return typeof i.readFloatLE == "function" && typeof i.slice == "function" && e(i.slice(0, 0));
    }(r) || !!r._isBuffer);
  };
}, 542: (n, e, r) => {
  (function() {
    var i = r(298), l = r(526).utf8, a = r(135), h = r(526).bin, c = function(u, o) {
      u.constructor == String ? u = o && o.encoding === "binary" ? h.stringToBytes(u) : l.stringToBytes(u) : a(u) ? u = Array.prototype.slice.call(u, 0) : Array.isArray(u) || u.constructor === Uint8Array || (u = u.toString());
      for (var s = i.bytesToWords(u), p = 8 * u.length, d = 1732584193, m = -271733879, w = -1732584194, v = 271733878, _ = 0; _ < s.length; _++) s[_] = 16711935 & (s[_] << 8 | s[_] >>> 24) | 4278255360 & (s[_] << 24 | s[_] >>> 8);
      s[p >>> 5] |= 128 << p % 32, s[14 + (p + 64 >>> 9 << 4)] = p;
      var A = c._ff, E = c._gg, I = c._hh, S = c._ii;
      for (_ = 0; _ < s.length; _ += 16) {
        var T = d, x = m, C = w, P = v;
        d = A(d, m, w, v, s[_ + 0], 7, -680876936), v = A(v, d, m, w, s[_ + 1], 12, -389564586), w = A(w, v, d, m, s[_ + 2], 17, 606105819), m = A(m, w, v, d, s[_ + 3], 22, -1044525330), d = A(d, m, w, v, s[_ + 4], 7, -176418897), v = A(v, d, m, w, s[_ + 5], 12, 1200080426), w = A(w, v, d, m, s[_ + 6], 17, -1473231341), m = A(m, w, v, d, s[_ + 7], 22, -45705983), d = A(d, m, w, v, s[_ + 8], 7, 1770035416), v = A(v, d, m, w, s[_ + 9], 12, -1958414417), w = A(w, v, d, m, s[_ + 10], 17, -42063), m = A(m, w, v, d, s[_ + 11], 22, -1990404162), d = A(d, m, w, v, s[_ + 12], 7, 1804603682), v = A(v, d, m, w, s[_ + 13], 12, -40341101), w = A(w, v, d, m, s[_ + 14], 17, -1502002290), d = E(d, m = A(m, w, v, d, s[_ + 15], 22, 1236535329), w, v, s[_ + 1], 5, -165796510), v = E(v, d, m, w, s[_ + 6], 9, -1069501632), w = E(w, v, d, m, s[_ + 11], 14, 643717713), m = E(m, w, v, d, s[_ + 0], 20, -373897302), d = E(d, m, w, v, s[_ + 5], 5, -701558691), v = E(v, d, m, w, s[_ + 10], 9, 38016083), w = E(w, v, d, m, s[_ + 15], 14, -660478335), m = E(m, w, v, d, s[_ + 4], 20, -405537848), d = E(d, m, w, v, s[_ + 9], 5, 568446438), v = E(v, d, m, w, s[_ + 14], 9, -1019803690), w = E(w, v, d, m, s[_ + 3], 14, -187363961), m = E(m, w, v, d, s[_ + 8], 20, 1163531501), d = E(d, m, w, v, s[_ + 13], 5, -1444681467), v = E(v, d, m, w, s[_ + 2], 9, -51403784), w = E(w, v, d, m, s[_ + 7], 14, 1735328473), d = I(d, m = E(m, w, v, d, s[_ + 12], 20, -1926607734), w, v, s[_ + 5], 4, -378558), v = I(v, d, m, w, s[_ + 8], 11, -2022574463), w = I(w, v, d, m, s[_ + 11], 16, 1839030562), m = I(m, w, v, d, s[_ + 14], 23, -35309556), d = I(d, m, w, v, s[_ + 1], 4, -1530992060), v = I(v, d, m, w, s[_ + 4], 11, 1272893353), w = I(w, v, d, m, s[_ + 7], 16, -155497632), m = I(m, w, v, d, s[_ + 10], 23, -1094730640), d = I(d, m, w, v, s[_ + 13], 4, 681279174), v = I(v, d, m, w, s[_ + 0], 11, -358537222), w = I(w, v, d, m, s[_ + 3], 16, -722521979), m = I(m, w, v, d, s[_ + 6], 23, 76029189), d = I(d, m, w, v, s[_ + 9], 4, -640364487), v = I(v, d, m, w, s[_ + 12], 11, -421815835), w = I(w, v, d, m, s[_ + 15], 16, 530742520), d = S(d, m = I(m, w, v, d, s[_ + 2], 23, -995338651), w, v, s[_ + 0], 6, -198630844), v = S(v, d, m, w, s[_ + 7], 10, 1126891415), w = S(w, v, d, m, s[_ + 14], 15, -1416354905), m = S(m, w, v, d, s[_ + 5], 21, -57434055), d = S(d, m, w, v, s[_ + 12], 6, 1700485571), v = S(v, d, m, w, s[_ + 3], 10, -1894986606), w = S(w, v, d, m, s[_ + 10], 15, -1051523), m = S(m, w, v, d, s[_ + 1], 21, -2054922799), d = S(d, m, w, v, s[_ + 8], 6, 1873313359), v = S(v, d, m, w, s[_ + 15], 10, -30611744), w = S(w, v, d, m, s[_ + 6], 15, -1560198380), m = S(m, w, v, d, s[_ + 13], 21, 1309151649), d = S(d, m, w, v, s[_ + 4], 6, -145523070), v = S(v, d, m, w, s[_ + 11], 10, -1120210379), w = S(w, v, d, m, s[_ + 2], 15, 718787259), m = S(m, w, v, d, s[_ + 9], 21, -343485551), d = d + T >>> 0, m = m + x >>> 0, w = w + C >>> 0, v = v + P >>> 0;
      }
      return i.endian([d, m, w, v]);
    };
    c._ff = function(u, o, s, p, d, m, w) {
      var v = u + (o & s | ~o & p) + (d >>> 0) + w;
      return (v << m | v >>> 32 - m) + o;
    }, c._gg = function(u, o, s, p, d, m, w) {
      var v = u + (o & p | s & ~p) + (d >>> 0) + w;
      return (v << m | v >>> 32 - m) + o;
    }, c._hh = function(u, o, s, p, d, m, w) {
      var v = u + (o ^ s ^ p) + (d >>> 0) + w;
      return (v << m | v >>> 32 - m) + o;
    }, c._ii = function(u, o, s, p, d, m, w) {
      var v = u + (s ^ (o | ~p)) + (d >>> 0) + w;
      return (v << m | v >>> 32 - m) + o;
    }, c._blocksize = 16, c._digestsize = 16, n.exports = function(u, o) {
      if (u == null) throw new Error("Illegal argument " + u);
      var s = i.wordsToBytes(c(u, o));
      return o && o.asBytes ? s : o && o.asString ? h.bytesToString(s) : i.bytesToHex(s);
    };
  })();
}, 285: (n, e, r) => {
  var i = r(2);
  n.exports = function(A) {
    return A ? (A.substr(0, 2) === "{}" && (A = "\\{\\}" + A.substr(2)), _(function(E) {
      return E.split("\\\\").join(l).split("\\{").join(a).split("\\}").join(h).split("\\,").join(c).split("\\.").join(u);
    }(A), !0).map(s)) : [];
  };
  var l = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", h = "\0CLOSE" + Math.random() + "\0", c = "\0COMMA" + Math.random() + "\0", u = "\0PERIOD" + Math.random() + "\0";
  function o(A) {
    return parseInt(A, 10) == A ? parseInt(A, 10) : A.charCodeAt(0);
  }
  function s(A) {
    return A.split(l).join("\\").split(a).join("{").split(h).join("}").split(c).join(",").split(u).join(".");
  }
  function p(A) {
    if (!A) return [""];
    var E = [], I = i("{", "}", A);
    if (!I) return A.split(",");
    var S = I.pre, T = I.body, x = I.post, C = S.split(",");
    C[C.length - 1] += "{" + T + "}";
    var P = p(x);
    return x.length && (C[C.length - 1] += P.shift(), C.push.apply(C, P)), E.push.apply(E, C), E;
  }
  function d(A) {
    return "{" + A + "}";
  }
  function m(A) {
    return /^-?0\d/.test(A);
  }
  function w(A, E) {
    return A <= E;
  }
  function v(A, E) {
    return A >= E;
  }
  function _(A, E) {
    var I = [], S = i("{", "}", A);
    if (!S) return [A];
    var T = S.pre, x = S.post.length ? _(S.post, !1) : [""];
    if (/\$$/.test(S.pre)) for (var C = 0; C < x.length; C++) {
      var P = T + "{" + S.body + "}" + x[C];
      I.push(P);
    }
    else {
      var k, j, D = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(S.body), B = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(S.body), $ = D || B, q = S.body.indexOf(",") >= 0;
      if (!$ && !q) return S.post.match(/,.*\}/) ? _(A = S.pre + "{" + S.body + h + S.post) : [A];
      if ($) k = S.body.split(/\.\./);
      else if ((k = p(S.body)).length === 1 && (k = _(k[0], !1).map(d)).length === 1) return x.map(function(at) {
        return S.pre + k[0] + at;
      });
      if ($) {
        var V = o(k[0]), oe = o(k[1]), ne = Math.max(k[0].length, k[1].length), te = k.length == 3 ? Math.abs(o(k[2])) : 1, ae = w;
        oe < V && (te *= -1, ae = v);
        var fe = k.some(m);
        j = [];
        for (var re = V; ae(re, oe); re += te) {
          var Me;
          if (B) (Me = String.fromCharCode(re)) === "\\" && (Me = "");
          else if (Me = String(re), fe) {
            var he = ne - Me.length;
            if (he > 0) {
              var pe = new Array(he + 1).join("0");
              Me = re < 0 ? "-" + pe + Me.slice(1) : pe + Me;
            }
          }
          j.push(Me);
        }
      } else {
        j = [];
        for (var Q = 0; Q < k.length; Q++) j.push.apply(j, _(k[Q], !1));
      }
      for (Q = 0; Q < j.length; Q++) for (C = 0; C < x.length; C++) P = T + j[Q] + x[C], (!E || $ || P) && I.push(P);
    }
    return I;
  }
}, 829: (n) => {
  function e(o) {
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
      return typeof s;
    } : function(s) {
      return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
    }, e(o);
  }
  function r(o) {
    var s = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return r = function(p) {
      if (p === null || (d = p, Function.toString.call(d).indexOf("[native code]") === -1)) return p;
      var d;
      if (typeof p != "function") throw new TypeError("Super expression must either be null or a function");
      if (s !== void 0) {
        if (s.has(p)) return s.get(p);
        s.set(p, m);
      }
      function m() {
        return i(p, arguments, a(this).constructor);
      }
      return m.prototype = Object.create(p.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), l(m, p);
    }, r(o);
  }
  function i(o, s, p) {
    return i = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
      if (typeof Proxy == "function") return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }() ? Reflect.construct : function(d, m, w) {
      var v = [null];
      v.push.apply(v, m);
      var _ = new (Function.bind.apply(d, v))();
      return w && l(_, w.prototype), _;
    }, i.apply(null, arguments);
  }
  function l(o, s) {
    return l = Object.setPrototypeOf || function(p, d) {
      return p.__proto__ = d, p;
    }, l(o, s);
  }
  function a(o) {
    return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
      return s.__proto__ || Object.getPrototypeOf(s);
    }, a(o);
  }
  var h = function(o) {
    function s(p) {
      var d;
      return function(m, w) {
        if (!(m instanceof w)) throw new TypeError("Cannot call a class as a function");
      }(this, s), (d = function(m, w) {
        return !w || e(w) !== "object" && typeof w != "function" ? function(v) {
          if (v === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return v;
        }(m) : w;
      }(this, a(s).call(this, p))).name = "ObjectPrototypeMutationError", d;
    }
    return function(p, d) {
      if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function");
      p.prototype = Object.create(d && d.prototype, { constructor: { value: p, writable: !0, configurable: !0 } }), d && l(p, d);
    }(s, o), s;
  }(r(Error));
  function c(o, s) {
    for (var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, d = s.split("."), m = d.length, w = function(A) {
      var E = d[A];
      if (!o) return { v: void 0 };
      if (E === "+") {
        if (Array.isArray(o)) return { v: o.map(function(S, T) {
          var x = d.slice(A + 1);
          return x.length > 0 ? c(S, x.join("."), p) : p(o, T, d, A);
        }) };
        var I = d.slice(0, A).join(".");
        throw new Error("Object at wildcard (".concat(I, ") is not an array"));
      }
      o = p(o, E, d, A);
    }, v = 0; v < m; v++) {
      var _ = w(v);
      if (e(_) === "object") return _.v;
    }
    return o;
  }
  function u(o, s) {
    return o.length === s + 1;
  }
  n.exports = { set: function(o, s, p) {
    if (e(o) != "object" || o === null || s === void 0) return o;
    if (typeof s == "number") return o[s] = p, o[s];
    try {
      return c(o, s, function(d, m, w, v) {
        if (d === Reflect.getPrototypeOf({})) throw new h("Attempting to mutate Object.prototype");
        if (!d[m]) {
          var _ = Number.isInteger(Number(w[v + 1])), A = w[v + 1] === "+";
          d[m] = _ || A ? [] : {};
        }
        return u(w, v) && (d[m] = p), d[m];
      });
    } catch (d) {
      if (d instanceof h) throw d;
      return o;
    }
  }, get: function(o, s) {
    if (e(o) != "object" || o === null || s === void 0) return o;
    if (typeof s == "number") return o[s];
    try {
      return c(o, s, function(p, d) {
        return p[d];
      });
    } catch {
      return o;
    }
  }, has: function(o, s) {
    var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (e(o) != "object" || o === null || s === void 0) return !1;
    if (typeof s == "number") return s in o;
    try {
      var d = !1;
      return c(o, s, function(m, w, v, _) {
        if (!u(v, _)) return m && m[w];
        d = p.own ? m.hasOwnProperty(w) : w in m;
      }), d;
    } catch {
      return !1;
    }
  }, hasOwn: function(o, s, p) {
    return this.has(o, s, p || { own: !0 });
  }, isIn: function(o, s, p) {
    var d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    if (e(o) != "object" || o === null || s === void 0) return !1;
    try {
      var m = !1, w = !1;
      return c(o, s, function(v, _, A, E) {
        return m = m || v === p || !!v && v[_] === p, w = u(A, E) && e(v) === "object" && _ in v, v && v[_];
      }), d.validPath ? m && w : m;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: h };
}, 47: (n, e, r) => {
  var i = r(410), l = function(o) {
    return typeof o == "string";
  };
  function a(o, s) {
    for (var p = [], d = 0; d < o.length; d++) {
      var m = o[d];
      m && m !== "." && (m === ".." ? p.length && p[p.length - 1] !== ".." ? p.pop() : s && p.push("..") : p.push(m));
    }
    return p;
  }
  var h = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, c = {};
  function u(o) {
    return h.exec(o).slice(1);
  }
  c.resolve = function() {
    for (var o = "", s = !1, p = arguments.length - 1; p >= -1 && !s; p--) {
      var d = p >= 0 ? arguments[p] : Xe.cwd();
      if (!l(d)) throw new TypeError("Arguments to path.resolve must be strings");
      d && (o = d + "/" + o, s = d.charAt(0) === "/");
    }
    return (s ? "/" : "") + (o = a(o.split("/"), !s).join("/")) || ".";
  }, c.normalize = function(o) {
    var s = c.isAbsolute(o), p = o.substr(-1) === "/";
    return (o = a(o.split("/"), !s).join("/")) || s || (o = "."), o && p && (o += "/"), (s ? "/" : "") + o;
  }, c.isAbsolute = function(o) {
    return o.charAt(0) === "/";
  }, c.join = function() {
    for (var o = "", s = 0; s < arguments.length; s++) {
      var p = arguments[s];
      if (!l(p)) throw new TypeError("Arguments to path.join must be strings");
      p && (o += o ? "/" + p : p);
    }
    return c.normalize(o);
  }, c.relative = function(o, s) {
    function p(E) {
      for (var I = 0; I < E.length && E[I] === ""; I++) ;
      for (var S = E.length - 1; S >= 0 && E[S] === ""; S--) ;
      return I > S ? [] : E.slice(I, S + 1);
    }
    o = c.resolve(o).substr(1), s = c.resolve(s).substr(1);
    for (var d = p(o.split("/")), m = p(s.split("/")), w = Math.min(d.length, m.length), v = w, _ = 0; _ < w; _++) if (d[_] !== m[_]) {
      v = _;
      break;
    }
    var A = [];
    for (_ = v; _ < d.length; _++) A.push("..");
    return (A = A.concat(m.slice(v))).join("/");
  }, c._makeLong = function(o) {
    return o;
  }, c.dirname = function(o) {
    var s = u(o), p = s[0], d = s[1];
    return p || d ? (d && (d = d.substr(0, d.length - 1)), p + d) : ".";
  }, c.basename = function(o, s) {
    var p = u(o)[2];
    return s && p.substr(-1 * s.length) === s && (p = p.substr(0, p.length - s.length)), p;
  }, c.extname = function(o) {
    return u(o)[3];
  }, c.format = function(o) {
    if (!i.isObject(o)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof o);
    var s = o.root || "";
    if (!l(s)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof o.root);
    return (o.dir ? o.dir + c.sep : "") + (o.base || "");
  }, c.parse = function(o) {
    if (!l(o)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof o);
    var s = u(o);
    if (!s || s.length !== 4) throw new TypeError("Invalid path '" + o + "'");
    return s[1] = s[1] || "", s[2] = s[2] || "", s[3] = s[3] || "", { root: s[0], dir: s[0] + s[1].slice(0, s[1].length - 1), base: s[2], ext: s[3], name: s[2].slice(0, s[2].length - s[3].length) };
  }, c.sep = "/", c.delimiter = ":", n.exports = c;
}, 647: (n, e) => {
  var r = Object.prototype.hasOwnProperty;
  function i(a) {
    try {
      return decodeURIComponent(a.replace(/\+/g, " "));
    } catch {
      return null;
    }
  }
  function l(a) {
    try {
      return encodeURIComponent(a);
    } catch {
      return null;
    }
  }
  e.stringify = function(a, h) {
    h = h || "";
    var c, u, o = [];
    for (u in typeof h != "string" && (h = "?"), a) if (r.call(a, u)) {
      if ((c = a[u]) || c != null && !isNaN(c) || (c = ""), u = l(u), c = l(c), u === null || c === null) continue;
      o.push(u + "=" + c);
    }
    return o.length ? h + o.join("&") : "";
  }, e.parse = function(a) {
    for (var h, c = /([^=?#&]+)=?([^&]*)/g, u = {}; h = c.exec(a); ) {
      var o = i(h[1]), s = i(h[2]);
      o === null || s === null || o in u || (u[o] = s);
    }
    return u;
  };
}, 670: (n) => {
  n.exports = function(e, r) {
    if (r = r.split(":")[0], !(e = +e)) return !1;
    switch (r) {
      case "http":
      case "ws":
        return e !== 80;
      case "https":
      case "wss":
        return e !== 443;
      case "ftp":
        return e !== 21;
      case "gopher":
        return e !== 70;
      case "file":
        return !1;
    }
    return e !== 0;
  };
}, 494: (n) => {
  const e = /^[-+]?0x[a-fA-F0-9]+$/, r = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
  const i = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 };
  n.exports = function(l) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (a = Object.assign({}, i, a), !l || typeof l != "string") return l;
    let h = l.trim();
    if (a.skipLike !== void 0 && a.skipLike.test(h)) return l;
    if (a.hex && e.test(h)) return Number.parseInt(h, 16);
    {
      const u = r.exec(h);
      if (u) {
        const o = u[1], s = u[2];
        let p = ((c = u[3]) && c.indexOf(".") !== -1 && ((c = c.replace(/0+$/, "")) === "." ? c = "0" : c[0] === "." ? c = "0" + c : c[c.length - 1] === "." && (c = c.substr(0, c.length - 1))), c);
        const d = u[4] || u[6];
        if (!a.leadingZeros && s.length > 0 && o && h[2] !== "." || !a.leadingZeros && s.length > 0 && !o && h[1] !== ".") return l;
        {
          const m = Number(h), w = "" + m;
          return w.search(/[eE]/) !== -1 || d ? a.eNotation ? m : l : h.indexOf(".") !== -1 ? w === "0" && p === "" || w === p || o && w === "-" + p ? m : l : s ? p === w || o + p === w ? m : l : h === w || h === o + w ? m : l;
        }
      }
      return l;
    }
    var c;
  };
}, 737: (n, e, r) => {
  var i = r(670), l = r(647), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, h = /[\n\r\t]/g, c = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, u = /:\d+$/, o = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, s = /^[a-zA-Z]:/;
  function p(E) {
    return (E || "").toString().replace(a, "");
  }
  var d = [["#", "hash"], ["?", "query"], function(E, I) {
    return v(I.protocol) ? E.replace(/\\/g, "/") : E;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], m = { hash: 1, query: 1 };
  function w(E) {
    var I, S = (typeof window < "u" ? window : typeof an < "u" ? an : typeof self < "u" ? self : {}).location || {}, T = {}, x = typeof (E = E || S);
    if (E.protocol === "blob:") T = new A(unescape(E.pathname), {});
    else if (x === "string") for (I in T = new A(E, {}), m) delete T[I];
    else if (x === "object") {
      for (I in E) I in m || (T[I] = E[I]);
      T.slashes === void 0 && (T.slashes = c.test(E.href));
    }
    return T;
  }
  function v(E) {
    return E === "file:" || E === "ftp:" || E === "http:" || E === "https:" || E === "ws:" || E === "wss:";
  }
  function _(E, I) {
    E = (E = p(E)).replace(h, ""), I = I || {};
    var S, T = o.exec(E), x = T[1] ? T[1].toLowerCase() : "", C = !!T[2], P = !!T[3], k = 0;
    return C ? P ? (S = T[2] + T[3] + T[4], k = T[2].length + T[3].length) : (S = T[2] + T[4], k = T[2].length) : P ? (S = T[3] + T[4], k = T[3].length) : S = T[4], x === "file:" ? k >= 2 && (S = S.slice(2)) : v(x) ? S = T[4] : x ? C && (S = S.slice(2)) : k >= 2 && v(I.protocol) && (S = T[4]), { protocol: x, slashes: C || v(x), slashesCount: k, rest: S };
  }
  function A(E, I, S) {
    if (E = (E = p(E)).replace(h, ""), !(this instanceof A)) return new A(E, I, S);
    var T, x, C, P, k, j, D = d.slice(), B = typeof I, $ = this, q = 0;
    for (B !== "object" && B !== "string" && (S = I, I = null), S && typeof S != "function" && (S = l.parse), T = !(x = _(E || "", I = w(I))).protocol && !x.slashes, $.slashes = x.slashes || T && I.slashes, $.protocol = x.protocol || I.protocol || "", E = x.rest, (x.protocol === "file:" && (x.slashesCount !== 2 || s.test(E)) || !x.slashes && (x.protocol || x.slashesCount < 2 || !v($.protocol))) && (D[3] = [/(.*)/, "pathname"]); q < D.length; q++) typeof (P = D[q]) != "function" ? (C = P[0], j = P[1], C != C ? $[j] = E : typeof C == "string" ? ~(k = C === "@" ? E.lastIndexOf(C) : E.indexOf(C)) && (typeof P[2] == "number" ? ($[j] = E.slice(0, k), E = E.slice(k + P[2])) : ($[j] = E.slice(k), E = E.slice(0, k))) : (k = C.exec(E)) && ($[j] = k[1], E = E.slice(0, k.index)), $[j] = $[j] || T && P[3] && I[j] || "", P[4] && ($[j] = $[j].toLowerCase())) : E = P(E, $);
    S && ($.query = S($.query)), T && I.slashes && $.pathname.charAt(0) !== "/" && ($.pathname !== "" || I.pathname !== "") && ($.pathname = function(V, oe) {
      if (V === "") return oe;
      for (var ne = (oe || "/").split("/").slice(0, -1).concat(V.split("/")), te = ne.length, ae = ne[te - 1], fe = !1, re = 0; te--; ) ne[te] === "." ? ne.splice(te, 1) : ne[te] === ".." ? (ne.splice(te, 1), re++) : re && (te === 0 && (fe = !0), ne.splice(te, 1), re--);
      return fe && ne.unshift(""), ae !== "." && ae !== ".." || ne.push(""), ne.join("/");
    }($.pathname, I.pathname)), $.pathname.charAt(0) !== "/" && v($.protocol) && ($.pathname = "/" + $.pathname), i($.port, $.protocol) || ($.host = $.hostname, $.port = ""), $.username = $.password = "", $.auth && (~(k = $.auth.indexOf(":")) ? ($.username = $.auth.slice(0, k), $.username = encodeURIComponent(decodeURIComponent($.username)), $.password = $.auth.slice(k + 1), $.password = encodeURIComponent(decodeURIComponent($.password))) : $.username = encodeURIComponent(decodeURIComponent($.auth)), $.auth = $.password ? $.username + ":" + $.password : $.username), $.origin = $.protocol !== "file:" && v($.protocol) && $.host ? $.protocol + "//" + $.host : "null", $.href = $.toString();
  }
  A.prototype = { set: function(E, I, S) {
    var T = this;
    switch (E) {
      case "query":
        typeof I == "string" && I.length && (I = (S || l.parse)(I)), T[E] = I;
        break;
      case "port":
        T[E] = I, i(I, T.protocol) ? I && (T.host = T.hostname + ":" + I) : (T.host = T.hostname, T[E] = "");
        break;
      case "hostname":
        T[E] = I, T.port && (I += ":" + T.port), T.host = I;
        break;
      case "host":
        T[E] = I, u.test(I) ? (I = I.split(":"), T.port = I.pop(), T.hostname = I.join(":")) : (T.hostname = I, T.port = "");
        break;
      case "protocol":
        T.protocol = I.toLowerCase(), T.slashes = !S;
        break;
      case "pathname":
      case "hash":
        if (I) {
          var x = E === "pathname" ? "/" : "#";
          T[E] = I.charAt(0) !== x ? x + I : I;
        } else T[E] = I;
        break;
      case "username":
      case "password":
        T[E] = encodeURIComponent(I);
        break;
      case "auth":
        var C = I.indexOf(":");
        ~C ? (T.username = I.slice(0, C), T.username = encodeURIComponent(decodeURIComponent(T.username)), T.password = I.slice(C + 1), T.password = encodeURIComponent(decodeURIComponent(T.password))) : T.username = encodeURIComponent(decodeURIComponent(I));
    }
    for (var P = 0; P < d.length; P++) {
      var k = d[P];
      k[4] && (T[k[1]] = T[k[1]].toLowerCase());
    }
    return T.auth = T.password ? T.username + ":" + T.password : T.username, T.origin = T.protocol !== "file:" && v(T.protocol) && T.host ? T.protocol + "//" + T.host : "null", T.href = T.toString(), T;
  }, toString: function(E) {
    E && typeof E == "function" || (E = l.stringify);
    var I, S = this, T = S.host, x = S.protocol;
    x && x.charAt(x.length - 1) !== ":" && (x += ":");
    var C = x + (S.protocol && S.slashes || v(S.protocol) ? "//" : "");
    return S.username ? (C += S.username, S.password && (C += ":" + S.password), C += "@") : S.password ? (C += ":" + S.password, C += "@") : S.protocol !== "file:" && v(S.protocol) && !T && S.pathname !== "/" && (C += "@"), (T[T.length - 1] === ":" || u.test(S.hostname) && !S.port) && (T += ":"), C += T + S.pathname, (I = typeof S.query == "object" ? E(S.query) : S.query) && (C += I.charAt(0) !== "?" ? "?" + I : I), S.hash && (C += S.hash), C;
  } }, A.extractProtocol = _, A.location = w, A.trimLeft = p, A.qs = l, n.exports = A;
}, 410: () => {
}, 388: () => {
}, 805: () => {
}, 345: () => {
}, 800: () => {
} }, Go = {};
function we(n) {
  var e = Go[n];
  if (e !== void 0) return e.exports;
  var r = Go[n] = { id: n, loaded: !1, exports: {} };
  return ec[n].call(r.exports, r, r.exports, we), r.loaded = !0, r.exports;
}
we.n = (n) => {
  var e = n && n.__esModule ? () => n.default : () => n;
  return we.d(e, { a: e }), e;
}, we.d = (n, e) => {
  for (var r in e) we.o(e, r) && !we.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
}, we.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), we.nmd = (n) => (n.paths = [], n.children || (n.children = []), n);
var bt = {};
we.d(bt, { hT: () => Je, O4: () => Xt, Kd: () => lc, YK: () => cc, UU: () => wf, Gu: () => xa, ky: () => Da, h4: () => on, ch: () => Un, hq: () => Er, i5: () => ja });
var tc = we(737), rc = we.n(tc);
function Hn(n) {
  if (!Fi(n)) throw new Error("Parameter was not an error");
}
function Fi(n) {
  return !!n && typeof n == "object" && (e = n, Object.prototype.toString.call(e) === "[object Error]") || n instanceof Error;
  var e;
}
class Qe extends Error {
  constructor(e, r) {
    const i = [...arguments], { options: l, shortMessage: a } = function(c) {
      let u, o = "";
      if (c.length === 0) u = {};
      else if (Fi(c[0])) u = { cause: c[0] }, o = c.slice(1).join(" ") || "";
      else if (c[0] && typeof c[0] == "object") u = Object.assign({}, c[0]), o = c.slice(1).join(" ") || "";
      else {
        if (typeof c[0] != "string") throw new Error("Invalid arguments passed to Layerr");
        u = {}, o = o = c.join(" ") || "";
      }
      return { options: u, shortMessage: o };
    }(i);
    let h = a;
    if (l.cause && (h = `${h}: ${l.cause.message}`), super(h), this.message = h, l.name && typeof l.name == "string" ? this.name = l.name : this.name = "Layerr", l.cause && Object.defineProperty(this, "_cause", { value: l.cause }), Object.defineProperty(this, "_info", { value: {} }), l.info && typeof l.info == "object" && Object.assign(this._info, l.info), Error.captureStackTrace) {
      const c = l.constructorOpt || this.constructor;
      Error.captureStackTrace(this, c);
    }
  }
  static cause(e) {
    return Hn(e), e._cause && Fi(e._cause) ? e._cause : null;
  }
  static fullStack(e) {
    Hn(e);
    const r = Qe.cause(e);
    return r ? `${e.stack}
caused by: ${Qe.fullStack(r)}` : e.stack ?? "";
  }
  static info(e) {
    Hn(e);
    const r = {}, i = Qe.cause(e);
    return i && Object.assign(r, Qe.info(i)), e._info && Object.assign(r, e._info), r;
  }
  toString() {
    let e = this.name || this.constructor.name || this.constructor.prototype.name;
    return this.message && (e = `${e}: ${this.message}`), e;
  }
}
var nc = we(47), An = we.n(nc);
const qo = "__PATH_SEPARATOR_POSIX__", Vo = "__PATH_SEPARATOR_WINDOWS__";
function Ne(n) {
  try {
    const e = n.replace(/\//g, qo).replace(/\\\\/g, Vo);
    return encodeURIComponent(e).split(Vo).join("\\\\").split(qo).join("/");
  } catch (e) {
    throw new Qe(e, "Failed encoding path");
  }
}
function Wo(n) {
  return n.startsWith("/") ? n : "/" + n;
}
function Qr(n) {
  let e = n;
  return e[0] !== "/" && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
}
function ic(n) {
  let e = new (rc())(n).pathname;
  return e.length <= 0 && (e = "/"), Qr(e);
}
function Te() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  return function() {
    return function(i) {
      var l = [];
      if (i.length === 0) return "";
      if (typeof i[0] != "string") throw new TypeError("Url must be a string. Received " + i[0]);
      if (i[0].match(/^[^/:]+:\/*$/) && i.length > 1) {
        var a = i.shift();
        i[0] = a + i[0];
      }
      i[0].match(/^file:\/\/\//) ? i[0] = i[0].replace(/^([^/:]+):\/*/, "$1:///") : i[0] = i[0].replace(/^([^/:]+):\/*/, "$1://");
      for (var h = 0; h < i.length; h++) {
        var c = i[h];
        if (typeof c != "string") throw new TypeError("Url must be a string. Received " + c);
        c !== "" && (h > 0 && (c = c.replace(/^[\/]+/, "")), c = h < i.length - 1 ? c.replace(/[\/]+$/, "") : c.replace(/[\/]+$/, "/"), l.push(c));
      }
      var u = l.join("/"), o = (u = u.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return o.shift() + (o.length > 0 ? "?" : "") + o.join("&");
    }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
  }(e.reduce((i, l, a) => ((a === 0 || l !== "/" || l === "/" && i[i.length - 1] !== "/") && i.push(l), i), []));
}
var oc = we(542), jr = we.n(oc);
const sc = "abcdef0123456789";
function Xo(n, e) {
  const r = n.url.replace("//", ""), i = r.indexOf("/") == -1 ? "/" : r.slice(r.indexOf("/")), l = n.method ? n.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth", h = `00000000${e.nc}`.slice(-8), c = function(d, m, w, v, _, A, E) {
    const I = E || jr()(`${m}:${w}:${v}`);
    return d && d.toLowerCase() === "md5-sess" ? jr()(`${I}:${_}:${A}`) : I;
  }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1), u = jr()(`${l}:${i}`), o = a ? jr()(`${c}:${e.nonce}:${h}:${e.cnonce}:${a}:${u}`) : jr()(`${c}:${e.nonce}:${u}`), s = { username: e.username, realm: e.realm, nonce: e.nonce, uri: i, qop: a, response: o, nc: h, cnonce: e.cnonce, algorithm: e.algorithm, opaque: e.opaque }, p = [];
  for (const d in s) s[d] && (d === "qop" || d === "nc" || d === "algorithm" ? p.push(`${d}=${s[d]}`) : p.push(`${d}="${s[d]}"`));
  return `Digest ${p.join(", ")}`;
}
function _a(n) {
  return (n.headers && n.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var ac = we(101), Oa = we.n(ac);
function zo(n) {
  return Oa().decode(n);
}
function Ho(n, e) {
  var r;
  return `Basic ${r = `${n}:${e}`, Oa().encode(r)}`;
}
const In = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, uc = In.fetch.bind(In), lc = In.Request, cc = In.Response;
let Je = function(n) {
  return n.Auto = "auto", n.Digest = "digest", n.None = "none", n.Password = "password", n.Token = "token", n;
}({}), Xt = function(n) {
  return n.DataTypeNoLength = "data-type-no-length", n.InvalidAuthType = "invalid-auth-type", n.InvalidOutputFormat = "invalid-output-format", n.LinkUnsupportedAuthType = "link-unsupported-auth", n.InvalidUpdateRange = "invalid-update-range", n.NotSupported = "not-supported", n;
}({});
function Ra(n, e, r, i, l) {
  switch (n.authType) {
    case Je.Auto:
      e && r && (n.headers.Authorization = Ho(e, r));
      break;
    case Je.Digest:
      n.digest = /* @__PURE__ */ function(h, c, u) {
        return { username: h, password: c, ha1: u, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
      }(e, r, l);
      break;
    case Je.None:
      break;
    case Je.Password:
      n.headers.Authorization = Ho(e, r);
      break;
    case Je.Token:
      n.headers.Authorization = `${(a = i).token_type} ${a.access_token}`;
      break;
    default:
      throw new Qe({ info: { code: Xt.InvalidAuthType } }, `Invalid auth type: ${n.authType}`);
  }
  var a;
}
we(345), we(800);
const Yo = "@@HOTPATCHER", fc = () => {
};
function Yn(n) {
  return { original: n, methods: [n], final: !1 };
}
class hc {
  constructor() {
    this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = Yo;
  }
  get configuration() {
    return this._configuration;
  }
  get getEmptyAction() {
    return this.configuration.getEmptyAction;
  }
  set getEmptyAction(e) {
    this.configuration.getEmptyAction = e;
  }
  control(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (!e || e.__type__ !== Yo) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
    return Object.keys(e.configuration.registry).forEach((i) => {
      this.configuration.registry.hasOwnProperty(i) ? r && (this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i])) : this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i]);
    }), e._configuration = this.configuration, this;
  }
  execute(e) {
    const r = this.get(e) || fc;
    for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) l[a - 1] = arguments[a];
    return r(...l);
  }
  get(e) {
    const r = this.configuration.registry[e];
    if (!r) switch (this.getEmptyAction) {
      case "null":
        return null;
      case "throw":
        throw new Error(`Failed handling method request: No method provided for override: ${e}`);
      default:
        throw new Error(`Failed handling request which resulted in an empty method: Invalid empty-action specified: ${this.getEmptyAction}`);
    }
    return function() {
      for (var i = arguments.length, l = new Array(i), a = 0; a < i; a++) l[a] = arguments[a];
      if (l.length === 0) throw new Error("Failed creating sequence: No functions provided");
      return function() {
        for (var h = arguments.length, c = new Array(h), u = 0; u < h; u++) c[u] = arguments[u];
        let o = c;
        const s = this;
        for (; l.length > 0; ) o = [l.shift().apply(s, o)];
        return o[0];
      };
    }(...r.methods);
  }
  isPatched(e) {
    return !!this.configuration.registry[e];
  }
  patch(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { chain: l = !1 } = i;
    if (this.configuration.registry[e] && this.configuration.registry[e].final) throw new Error(`Failed patching '${e}': Method marked as being final`);
    if (typeof r != "function") throw new Error(`Failed patching '${e}': Provided method is not a function`);
    if (l) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(r) : this.configuration.registry[e] = Yn(r);
    else if (this.isPatched(e)) {
      const { original: a } = this.configuration.registry[e];
      this.configuration.registry[e] = Object.assign(Yn(r), { original: a });
    } else this.configuration.registry[e] = Yn(r);
    return this;
  }
  patchInline(e, r) {
    this.isPatched(e) || this.patch(e, r);
    for (var i = arguments.length, l = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) l[a - 2] = arguments[a];
    return this.execute(e, ...l);
  }
  plugin(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++) i[l - 1] = arguments[l];
    return i.forEach((a) => {
      this.patch(e, a, { chain: !0 });
    }), this;
  }
  restore(e) {
    if (!this.isPatched(e)) throw new Error(`Failed restoring method: No method present for key: ${e}`);
    if (typeof this.configuration.registry[e].original != "function") throw new Error(`Failed restoring method: Original method not found or of invalid type for key: ${e}`);
    return this.configuration.registry[e].methods = [this.configuration.registry[e].original], this;
  }
  setFinal(e) {
    if (!this.configuration.registry.hasOwnProperty(e)) throw new Error(`Failed marking '${e}' as final: No method found for key`);
    return this.configuration.registry[e].final = !0, this;
  }
}
let Zn = null;
function xa() {
  return Zn || (Zn = new hc()), Zn;
}
function _n(n) {
  return function(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) != "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let r = e;
    for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
    return Object.getPrototypeOf(e) === r;
  }(n) ? Object.assign({}, n) : Object.setPrototypeOf(Object.assign({}, n), Object.getPrototypeOf(n));
}
function Zo() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  let i = null, l = [...e];
  for (; l.length > 0; ) {
    const a = l.shift();
    i = i ? Sa(i, a) : _n(a);
  }
  return i;
}
function Sa(n, e) {
  const r = _n(n);
  return Object.keys(e).forEach((i) => {
    r.hasOwnProperty(i) ? Array.isArray(e[i]) ? r[i] = Array.isArray(r[i]) ? [...r[i], ...e[i]] : [...e[i]] : typeof e[i] == "object" && e[i] ? r[i] = typeof r[i] == "object" && r[i] ? Sa(r[i], e[i]) : _n(e[i]) : r[i] = e[i] : r[i] = e[i];
  }), r;
}
function pc(n) {
  const e = {};
  for (const r of n.keys()) e[r] = n.get(r);
  return e;
}
function Mi() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  if (e.length === 0) return {};
  const i = {};
  return e.reduce((l, a) => (Object.keys(a).forEach((h) => {
    const c = h.toLowerCase();
    i.hasOwnProperty(c) ? l[i[c]] = a[h] : (i[c] = h, l[h] = a[h]);
  }), l), {});
}
we(805);
const dc = typeof ArrayBuffer == "function", { toString: gc } = Object.prototype;
function Ca(n) {
  return dc && (n instanceof ArrayBuffer || gc.call(n) === "[object ArrayBuffer]");
}
function La(n) {
  return n != null && n.constructor != null && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function eo(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Ui(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Pa = eo(function(n) {
  const e = n._digest;
  return delete n._digest, e.hasDigestAuth && (n = Zo(n, { headers: { Authorization: Xo(n, e) } })), Ui(On(n), function(r) {
    let i = !1;
    return l = function(h) {
      return i ? h : r;
    }, (a = function() {
      if (r.status == 401) return e.hasDigestAuth = function(h, c) {
        if (!_a(h)) return !1;
        const u = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
        for (; ; ) {
          const o = h.headers && h.headers.get("www-authenticate") || "", s = u.exec(o);
          if (!s) break;
          c[s[1]] = s[2] || s[3];
        }
        return c.nc += 1, c.cnonce = function() {
          let o = "";
          for (let s = 0; s < 32; ++s) o = `${o}${sc[Math.floor(16 * Math.random())]}`;
          return o;
        }(), !0;
      }(r, e), function() {
        if (e.hasDigestAuth) return Ui(On(n = Zo(n, { headers: { Authorization: Xo(n, e) } })), function(h) {
          return h.status == 401 ? e.hasDigestAuth = !1 : e.nc++, i = !0, h;
        });
      }();
      e.nc++;
    }()) && a.then ? a.then(l) : l(a);
    var l, a;
  });
}), mc = eo(function(n, e) {
  return Ui(On(n), function(r) {
    return r.ok ? (e.authType = Je.Password, r) : r.status == 401 && _a(r) ? (e.authType = Je.Digest, Ra(e, e.username, e.password, void 0, void 0), n._digest = e.digest, Pa(n)) : r;
  });
}), Ce = eo(function(n, e) {
  return e.authType === Je.Auto ? mc(n, e) : n._digest ? Pa(n) : On(n);
});
function Le(n, e, r) {
  const i = _n(n);
  return i.headers = Mi(e.headers, i.headers || {}, r.headers || {}), r.data !== void 0 && (i.data = r.data), r.signal && (i.signal = r.signal), e.httpAgent && (i.httpAgent = e.httpAgent), e.httpsAgent && (i.httpsAgent = e.httpsAgent), e.digest && (i._digest = e.digest), typeof e.withCredentials == "boolean" && (i.withCredentials = e.withCredentials), i;
}
function On(n) {
  const e = xa();
  return e.patchInline("request", (r) => e.patchInline("fetch", uc, r.url, function(i) {
    let l = {};
    const a = { method: i.method };
    if (i.headers && (l = Mi(l, i.headers)), i.data !== void 0) {
      const [h, c] = function(u) {
        if (typeof u == "string") return [u, {}];
        if (La(u)) return [u, {}];
        if (Ca(u)) return [u, {}];
        if (u && typeof u == "object") return [JSON.stringify(u), { "content-type": "application/json" }];
        throw new Error("Unable to convert request body: Unexpected body type: " + typeof u);
      }(i.data);
      a.body = h, l = Mi(l, c);
    }
    return i.signal && (a.signal = i.signal), i.withCredentials && (a.credentials = "include"), a.headers = l, a;
  }(r)), n);
}
var wc = we(285);
const Rn = (n) => {
  if (typeof n != "string") throw new TypeError("invalid pattern");
  if (n.length > 65536) throw new TypeError("pattern is too long");
}, yc = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, Gr = (n) => n.replace(/[[\]\\-]/g, "\\$&"), Jo = (n) => n.join(""), Ec = (n, e) => {
  const r = e;
  if (n.charAt(r) !== "[") throw new Error("not in a brace expression");
  const i = [], l = [];
  let a = r + 1, h = !1, c = !1, u = !1, o = !1, s = r, p = "";
  e: for (; a < n.length; ) {
    const v = n.charAt(a);
    if (v !== "!" && v !== "^" || a !== r + 1) {
      if (v === "]" && h && !u) {
        s = a + 1;
        break;
      }
      if (h = !0, v !== "\\" || u) {
        if (v === "[" && !u) {
          for (const [_, [A, E, I]] of Object.entries(yc)) if (n.startsWith(_, a)) {
            if (p) return ["$.", !1, n.length - r, !0];
            a += _.length, I ? l.push(A) : i.push(A), c = c || E;
            continue e;
          }
        }
        u = !1, p ? (v > p ? i.push(Gr(p) + "-" + Gr(v)) : v === p && i.push(Gr(v)), p = "", a++) : n.startsWith("-]", a + 1) ? (i.push(Gr(v + "-")), a += 2) : n.startsWith("-", a + 1) ? (p = v, a += 2) : (i.push(Gr(v)), a++);
      } else u = !0, a++;
    } else o = !0, a++;
  }
  if (s < a) return ["", !1, 0, !1];
  if (!i.length && !l.length) return ["$.", !1, n.length - r, !0];
  if (l.length === 0 && i.length === 1 && /^\\?.$/.test(i[0]) && !o)
    return [(d = i[0].length === 2 ? i[0].slice(-1) : i[0], d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, s - r, !1];
  var d;
  const m = "[" + (o ? "^" : "") + Jo(i) + "]", w = "[" + (o ? "" : "^") + Jo(l) + "]";
  return [i.length && l.length ? "(" + m + "|" + w + ")" : i.length ? m : w, c, s - r, !0];
}, Hr = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/\[([^\/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, vc = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Ko = (n) => vc.has(n), Jn = "(?!\\.)", bc = /* @__PURE__ */ new Set(["[", "."]), Nc = /* @__PURE__ */ new Set(["..", "."]), Tc = new Set("().*{}+?[]^$\\!"), to = "[^/]", Qo = to + "*?", es = to + "+?";
var Se, ke, qt, ve, xe, rr, pr, nr, kt, dr, rn, gr, $a, ir, En, Bi, ka;
const Ze = class Ze {
  constructor(e, r) {
    it(this, gr);
    ge(this, "type");
    it(this, Se);
    it(this, ke);
    it(this, qt, !1);
    it(this, ve, []);
    it(this, xe);
    it(this, rr);
    it(this, pr);
    it(this, nr, !1);
    it(this, kt);
    it(this, dr);
    it(this, rn, !1);
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.type = e, e && Ie(this, ke, !0), Ie(this, xe, r), Ie(this, Se, z(this, xe) ? z(z(this, xe), Se) : this), Ie(this, kt, z(this, Se) === this ? i : z(z(this, Se), kt)), Ie(this, pr, z(this, Se) === this ? [] : z(z(this, Se), pr)), e !== "!" || z(z(this, Se), nr) || z(this, pr).push(this), Ie(this, rr, z(this, xe) ? z(z(this, xe), ve).length : 0);
  }
  get hasMagic() {
    if (z(this, ke) !== void 0) return z(this, ke);
    for (const e of z(this, ve)) if (typeof e != "string" && (e.type || e.hasMagic)) return Ie(this, ke, !0);
    return z(this, ke);
  }
  toString() {
    return z(this, dr) !== void 0 ? z(this, dr) : this.type ? Ie(this, dr, this.type + "(" + z(this, ve).map((e) => String(e)).join("|") + ")") : Ie(this, dr, z(this, ve).map((e) => String(e)).join(""));
  }
  push() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
    for (const l of r) if (l !== "") {
      if (typeof l != "string" && !(l instanceof Ze && z(l, xe) === this)) throw new Error("invalid part: " + l);
      z(this, ve).push(l);
    }
  }
  toJSON() {
    var r;
    const e = this.type === null ? z(this, ve).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...z(this, ve).map((i) => i.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === z(this, Se) || z(z(this, Se), nr) && ((r = z(this, xe)) == null ? void 0 : r.type) === "!") && e.push({}), e;
  }
  isStart() {
    var r;
    if (z(this, Se) === this) return !0;
    if (!((r = z(this, xe)) != null && r.isStart())) return !1;
    if (z(this, rr) === 0) return !0;
    const e = z(this, xe);
    for (let i = 0; i < z(this, rr); i++) {
      const l = z(e, ve)[i];
      if (!(l instanceof Ze && l.type === "!")) return !1;
    }
    return !0;
  }
  isEnd() {
    var r, i, l;
    if (z(this, Se) === this || ((r = z(this, xe)) == null ? void 0 : r.type) === "!") return !0;
    if (!((i = z(this, xe)) != null && i.isEnd())) return !1;
    if (!this.type) return (l = z(this, xe)) == null ? void 0 : l.isEnd();
    const e = z(this, xe) ? z(z(this, xe), ve).length : 0;
    return z(this, rr) === e - 1;
  }
  copyIn(e) {
    typeof e == "string" ? this.push(e) : this.push(e.clone(this));
  }
  clone(e) {
    const r = new Ze(this.type, e);
    for (const i of z(this, ve)) r.copyIn(i);
    return r;
  }
  static fromGlob(e) {
    var l;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new Ze(null, void 0, r);
    return Qt(l = Ze, ir, En).call(l, e, i, 0, r), i;
  }
  toMMPattern() {
    if (this !== z(this, Se)) return z(this, Se).toMMPattern();
    const e = this.toString(), [r, i, l, a] = this.toRegExpSource();
    if (!(l || z(this, ke) || z(this, kt).nocase && !z(this, kt).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return i;
    const h = (z(this, kt).nocase ? "i" : "") + (a ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, h), { _src: r, _glob: e });
  }
  get options() {
    return z(this, kt);
  }
  toRegExpSource(e) {
    var u;
    const r = e ?? !!z(this, kt).dot;
    if (z(this, Se) === this && Qt(this, gr, $a).call(this), !this.type) {
      const o = this.isStart() && this.isEnd(), s = z(this, ve).map((m) => {
        var E;
        const [w, v, _, A] = typeof m == "string" ? Qt(E = Ze, ir, ka).call(E, m, z(this, ke), o) : m.toRegExpSource(e);
        return Ie(this, ke, z(this, ke) || _), Ie(this, qt, z(this, qt) || A), w;
      }).join("");
      let p = "";
      if (this.isStart() && typeof z(this, ve)[0] == "string" && (z(this, ve).length !== 1 || !Nc.has(z(this, ve)[0]))) {
        const m = bc, w = r && m.has(s.charAt(0)) || s.startsWith("\\.") && m.has(s.charAt(2)) || s.startsWith("\\.\\.") && m.has(s.charAt(4)), v = !r && !e && m.has(s.charAt(0));
        p = w ? "(?!(?:^|/)\\.\\.?(?:$|/))" : v ? Jn : "";
      }
      let d = "";
      return this.isEnd() && z(z(this, Se), nr) && ((u = z(this, xe)) == null ? void 0 : u.type) === "!" && (d = "(?:$|\\/)"), [p + s + d, Hr(s), Ie(this, ke, !!z(this, ke)), z(this, qt)];
    }
    const i = this.type === "*" || this.type === "+", l = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let a = Qt(this, gr, Bi).call(this, r);
    if (this.isStart() && this.isEnd() && !a && this.type !== "!") {
      const o = this.toString();
      return Ie(this, ve, [o]), this.type = null, Ie(this, ke, void 0), [o, Hr(this.toString()), !1, !1];
    }
    let h = !i || e || r ? "" : Qt(this, gr, Bi).call(this, !0);
    h === a && (h = ""), h && (a = `(?:${a})(?:${h})*?`);
    let c = "";
    return c = this.type === "!" && z(this, rn) ? (this.isStart() && !r ? Jn : "") + es : l + a + (this.type === "!" ? "))" + (!this.isStart() || r || e ? "" : Jn) + Qo + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && h ? ")" : this.type === "*" && h ? ")?" : `)${this.type}`), [c, Hr(a), Ie(this, ke, !!z(this, ke)), z(this, qt)];
  }
};
Se = new WeakMap(), ke = new WeakMap(), qt = new WeakMap(), ve = new WeakMap(), xe = new WeakMap(), rr = new WeakMap(), pr = new WeakMap(), nr = new WeakMap(), kt = new WeakMap(), dr = new WeakMap(), rn = new WeakMap(), gr = new WeakSet(), $a = function() {
  if (this !== z(this, Se)) throw new Error("should only call on root");
  if (z(this, nr)) return this;
  let e;
  for (this.toString(), Ie(this, nr, !0); e = z(this, pr).pop(); ) {
    if (e.type !== "!") continue;
    let r = e, i = z(r, xe);
    for (; i; ) {
      for (let l = z(r, rr) + 1; !i.type && l < z(i, ve).length; l++) for (const a of z(e, ve)) {
        if (typeof a == "string") throw new Error("string part in extglob AST??");
        a.copyIn(z(i, ve)[l]);
      }
      r = i, i = z(r, xe);
    }
  }
  return this;
}, ir = new WeakSet(), En = function(e, r, i, l) {
  var m, w;
  let a = !1, h = !1, c = -1, u = !1;
  if (r.type === null) {
    let v = i, _ = "";
    for (; v < e.length; ) {
      const A = e.charAt(v++);
      if (a || A === "\\") a = !a, _ += A;
      else if (h) v === c + 1 ? A !== "^" && A !== "!" || (u = !0) : A !== "]" || v === c + 2 && u || (h = !1), _ += A;
      else if (A !== "[") if (l.noext || !Ko(A) || e.charAt(v) !== "(") _ += A;
      else {
        r.push(_), _ = "";
        const E = new Ze(A, r);
        v = Qt(m = Ze, ir, En).call(m, e, E, v, l), r.push(E);
      }
      else h = !0, c = v, u = !1, _ += A;
    }
    return r.push(_), v;
  }
  let o = i + 1, s = new Ze(null, r);
  const p = [];
  let d = "";
  for (; o < e.length; ) {
    const v = e.charAt(o++);
    if (a || v === "\\") a = !a, d += v;
    else if (h) o === c + 1 ? v !== "^" && v !== "!" || (u = !0) : v !== "]" || o === c + 2 && u || (h = !1), d += v;
    else if (v !== "[") if (Ko(v) && e.charAt(o) === "(") {
      s.push(d), d = "";
      const _ = new Ze(v, s);
      s.push(_), o = Qt(w = Ze, ir, En).call(w, e, _, o, l);
    } else if (v !== "|") {
      if (v === ")") return d === "" && z(r, ve).length === 0 && Ie(r, rn, !0), s.push(d), d = "", r.push(...p, s), o;
      d += v;
    } else s.push(d), d = "", p.push(s), s = new Ze(null, r);
    else h = !0, c = o, u = !1, d += v;
  }
  return r.type = null, Ie(r, ke, void 0), Ie(r, ve, [e.substring(i - 1)]), o;
}, Bi = function(e) {
  return z(this, ve).map((r) => {
    if (typeof r == "string") throw new Error("string type in extglob ast??");
    const [i, l, a, h] = r.toRegExpSource(e);
    return Ie(this, qt, z(this, qt) || h), i;
  }).filter((r) => !(this.isStart() && this.isEnd() && !r)).join("|");
}, ka = function(e, r) {
  let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], l = !1, a = "", h = !1;
  for (let c = 0; c < e.length; c++) {
    const u = e.charAt(c);
    if (l) l = !1, a += (Tc.has(u) ? "\\" : "") + u;
    else if (u !== "\\") {
      if (u === "[") {
        const [o, s, p, d] = Ec(e, c);
        if (p) {
          a += o, h = h || s, c += p - 1, r = r || d;
          continue;
        }
      }
      u !== "*" ? u !== "?" ? a += u.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (a += to, r = !0) : (a += i && e === "*" ? es : Qo, r = !0);
    } else c === e.length - 1 ? a += "\\\\" : l = !0;
  }
  return [a, Hr(e), !!r, h];
}, it(Ze, ir);
let xn = Ze;
const ze = function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return Rn(e), !(!r.nocomment && e.charAt(0) === "#") && new Sn(e, r).match(n);
}, Ac = /^\*+([^+@!?\*\[\(]*)$/, Ic = (n) => (e) => !e.startsWith(".") && e.endsWith(n), _c = (n) => (e) => e.endsWith(n), Oc = (n) => (n = n.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n)), Rc = (n) => (n = n.toLowerCase(), (e) => e.toLowerCase().endsWith(n)), xc = /^\*+\.\*+$/, Sc = (n) => !n.startsWith(".") && n.includes("."), Cc = (n) => n !== "." && n !== ".." && n.includes("."), Lc = /^\.\*+$/, Pc = (n) => n !== "." && n !== ".." && n.startsWith("."), $c = /^\*+$/, kc = (n) => n.length !== 0 && !n.startsWith("."), Fc = (n) => n.length !== 0 && n !== "." && n !== "..", Mc = /^\?+([^+@!?\*\[\(]*)?$/, Uc = (n) => {
  let [e, r = ""] = n;
  const i = Fa([e]);
  return r ? (r = r.toLowerCase(), (l) => i(l) && l.toLowerCase().endsWith(r)) : i;
}, Bc = (n) => {
  let [e, r = ""] = n;
  const i = Ma([e]);
  return r ? (r = r.toLowerCase(), (l) => i(l) && l.toLowerCase().endsWith(r)) : i;
}, Dc = (n) => {
  let [e, r = ""] = n;
  const i = Ma([e]);
  return r ? (l) => i(l) && l.endsWith(r) : i;
}, jc = (n) => {
  let [e, r = ""] = n;
  const i = Fa([e]);
  return r ? (l) => i(l) && l.endsWith(r) : i;
}, Fa = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && !i.startsWith(".");
}, Ma = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && i !== "." && i !== "..";
}, Ua = typeof Xe == "object" && Xe ? typeof Xe.env == "object" && Xe.env && Xe.env.__MINIMATCH_TESTING_PLATFORM__ || Xe.platform : "posix";
ze.sep = Ua === "win32" ? "\\" : "/";
const wt = Symbol("globstar **");
ze.GLOBSTAR = wt, ze.filter = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (r) => ze(r, n, e);
};
const gt = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Object.assign({}, n, e);
};
ze.defaults = (n) => {
  if (!n || typeof n != "object" || !Object.keys(n).length) return ze;
  const e = ze;
  return Object.assign(function(r, i) {
    return e(r, i, gt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
  }, { Minimatch: class extends e.Minimatch {
    constructor(r) {
      super(r, gt(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}));
    }
    static defaults(r) {
      return e.defaults(gt(n, r)).Minimatch;
    }
  }, AST: class extends e.AST {
    constructor(r, i) {
      super(r, i, gt(n, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}));
    }
    static fromGlob(r) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return e.AST.fromGlob(r, gt(n, i));
    }
  }, unescape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.unescape(r, gt(n, i));
  }, escape: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.escape(r, gt(n, i));
  }, filter: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.filter(r, gt(n, i));
  }, defaults: (r) => e.defaults(gt(n, r)), makeRe: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.makeRe(r, gt(n, i));
  }, braceExpand: function(r) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.braceExpand(r, gt(n, i));
  }, match: function(r, i) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e.match(r, i, gt(n, l));
  }, sep: e.sep, GLOBSTAR: wt });
};
const Ba = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Rn(n), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : wc(n);
};
ze.braceExpand = Ba, ze.makeRe = function(n) {
  return new Sn(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, ze.match = function(n, e) {
  const r = new Sn(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
  return n = n.filter((i) => r.match(i)), r.options.nonull && !n.length && n.push(e), n;
};
const ts = /[?*]|[+@!]\(.*?\)|\[|\]/;
class Sn {
  constructor(e) {
    ge(this, "options");
    ge(this, "set");
    ge(this, "pattern");
    ge(this, "windowsPathsNoEscape");
    ge(this, "nonegate");
    ge(this, "negate");
    ge(this, "comment");
    ge(this, "empty");
    ge(this, "preserveMultipleSlashes");
    ge(this, "partial");
    ge(this, "globSet");
    ge(this, "globParts");
    ge(this, "nocase");
    ge(this, "isWindows");
    ge(this, "platform");
    ge(this, "windowsNoMagicRoot");
    ge(this, "regexp");
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Rn(e), r = r || {}, this.options = r, this.pattern = e, this.platform = r.platform || Ua, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!r.nonegate, this.comment = !1, this.empty = !1, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1) return !0;
    for (const e of this.set) for (const r of e) if (typeof r != "string") return !0;
    return !1;
  }
  debug() {
  }
  make() {
    const e = this.pattern, r = this.options;
    if (!r.nocomment && e.charAt(0) === "#") return void (this.comment = !0);
    if (!e) return void (this.empty = !0);
    this.parseNegate(), this.globSet = [...new Set(this.braceExpand())], r.debug && (this.debug = function() {
      return console.error(...arguments);
    }), this.debug(this.pattern, this.globSet);
    const i = this.globSet.map((a) => this.slashSplit(a));
    this.globParts = this.preprocess(i), this.debug(this.pattern, this.globParts);
    let l = this.globParts.map((a, h, c) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const u = !(a[0] !== "" || a[1] !== "" || a[2] !== "?" && ts.test(a[2]) || ts.test(a[3])), o = /^[a-z]:/i.test(a[0]);
        if (u) return [...a.slice(0, 4), ...a.slice(4).map((s) => this.parse(s))];
        if (o) return [a[0], ...a.slice(1).map((s) => this.parse(s))];
      }
      return a.map((u) => this.parse(u));
    });
    if (this.debug(this.pattern, l), this.set = l.filter((a) => a.indexOf(!1) === -1), this.isWindows) for (let a = 0; a < this.set.length; a++) {
      const h = this.set[a];
      h[0] === "" && h[1] === "" && this.globParts[a][2] === "?" && typeof h[3] == "string" && /^[a-z]:$/i.test(h[3]) && (h[2] = "?");
    }
    this.debug(this.pattern, this.set);
  }
  preprocess(e) {
    if (this.options.noglobstar) for (let i = 0; i < e.length; i++) for (let l = 0; l < e[i].length; l++) e[i][l] === "**" && (e[i][l] = "*");
    const { optimizationLevel: r = 1 } = this.options;
    return r >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : e = r >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e), e;
  }
  adjascentGlobstarOptimize(e) {
    return e.map((r) => {
      let i = -1;
      for (; (i = r.indexOf("**", i + 1)) !== -1; ) {
        let l = i;
        for (; r[l + 1] === "**"; ) l++;
        l !== i && r.splice(i, l - i);
      }
      return r;
    });
  }
  levelOneOptimize(e) {
    return e.map((r) => (r = r.reduce((i, l) => {
      const a = i[i.length - 1];
      return l === "**" && a === "**" ? i : l === ".." && a && a !== ".." && a !== "." && a !== "**" ? (i.pop(), i) : (i.push(l), i);
    }, [])).length === 0 ? [""] : r);
  }
  levelTwoFileOptimize(e) {
    Array.isArray(e) || (e = this.slashSplit(e));
    let r = !1;
    do {
      if (r = !1, !this.preserveMultipleSlashes) {
        for (let l = 1; l < e.length - 1; l++) {
          const a = e[l];
          l === 1 && a === "" && e[0] === "" || a !== "." && a !== "" || (r = !0, e.splice(l, 1), l--);
        }
        e[0] !== "." || e.length !== 2 || e[1] !== "." && e[1] !== "" || (r = !0, e.pop());
      }
      let i = 0;
      for (; (i = e.indexOf("..", i + 1)) !== -1; ) {
        const l = e[i - 1];
        l && l !== "." && l !== ".." && l !== "**" && (r = !0, e.splice(i - 1, 2), i -= 2);
      }
    } while (r);
    return e.length === 0 ? [""] : e;
  }
  firstPhasePreProcess(e) {
    let r = !1;
    do {
      r = !1;
      for (let i of e) {
        let l = -1;
        for (; (l = i.indexOf("**", l + 1)) !== -1; ) {
          let h = l;
          for (; i[h + 1] === "**"; ) h++;
          h > l && i.splice(l + 1, h - l);
          let c = i[l + 1];
          const u = i[l + 2], o = i[l + 3];
          if (c !== ".." || !u || u === "." || u === ".." || !o || o === "." || o === "..") continue;
          r = !0, i.splice(l, 1);
          const s = i.slice(0);
          s[l] = "**", e.push(s), l--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let h = 1; h < i.length - 1; h++) {
            const c = i[h];
            h === 1 && c === "" && i[0] === "" || c !== "." && c !== "" || (r = !0, i.splice(h, 1), h--);
          }
          i[0] !== "." || i.length !== 2 || i[1] !== "." && i[1] !== "" || (r = !0, i.pop());
        }
        let a = 0;
        for (; (a = i.indexOf("..", a + 1)) !== -1; ) {
          const h = i[a - 1];
          if (h && h !== "." && h !== ".." && h !== "**") {
            r = !0;
            const c = a === 1 && i[a + 1] === "**" ? ["."] : [];
            i.splice(a - 1, 2, ...c), i.length === 0 && i.push(""), a -= 2;
          }
        }
      }
    } while (r);
    return e;
  }
  secondPhasePreProcess(e) {
    for (let r = 0; r < e.length - 1; r++) for (let i = r + 1; i < e.length; i++) {
      const l = this.partsMatch(e[r], e[i], !this.preserveMultipleSlashes);
      if (l) {
        e[r] = [], e[i] = l;
        break;
      }
    }
    return e.filter((r) => r.length);
  }
  partsMatch(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], l = 0, a = 0, h = [], c = "";
    for (; l < e.length && a < r.length; ) if (e[l] === r[a]) h.push(c === "b" ? r[a] : e[l]), l++, a++;
    else if (i && e[l] === "**" && r[a] === e[l + 1]) h.push(e[l]), l++;
    else if (i && r[a] === "**" && e[l] === r[a + 1]) h.push(r[a]), a++;
    else if (e[l] !== "*" || !r[a] || !this.options.dot && r[a].startsWith(".") || r[a] === "**") {
      if (r[a] !== "*" || !e[l] || !this.options.dot && e[l].startsWith(".") || e[l] === "**" || c === "a") return !1;
      c = "b", h.push(r[a]), l++, a++;
    } else {
      if (c === "b") return !1;
      c = "a", h.push(e[l]), l++, a++;
    }
    return e.length === r.length && h;
  }
  parseNegate() {
    if (this.nonegate) return;
    const e = this.pattern;
    let r = !1, i = 0;
    for (let l = 0; l < e.length && e.charAt(l) === "!"; l++) r = !r, i++;
    i && (this.pattern = e.slice(i)), this.negate = r;
  }
  matchOne(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const l = this.options;
    if (this.isWindows) {
      const v = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), _ = !v && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), A = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), E = _ ? 3 : v ? 0 : void 0, I = !A && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]) ? 3 : A ? 0 : void 0;
      if (typeof E == "number" && typeof I == "number") {
        const [S, T] = [e[E], r[I]];
        S.toLowerCase() === T.toLowerCase() && (r[I] = S, I > E ? r = r.slice(I) : E > I && (e = e.slice(E)));
      }
    }
    const { optimizationLevel: a = 1 } = this.options;
    a >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: r }), this.debug("matchOne", e.length, r.length);
    for (var h = 0, c = 0, u = e.length, o = r.length; h < u && c < o; h++, c++) {
      this.debug("matchOne loop");
      var s = r[c], p = e[h];
      if (this.debug(r, s, p), s === !1) return !1;
      if (s === wt) {
        this.debug("GLOBSTAR", [r, s, p]);
        var d = h, m = c + 1;
        if (m === o) {
          for (this.debug("** at the end"); h < u; h++) if (e[h] === "." || e[h] === ".." || !l.dot && e[h].charAt(0) === ".") return !1;
          return !0;
        }
        for (; d < u; ) {
          var w = e[d];
          if (this.debug(`
globstar while`, e, d, r, m, w), this.matchOne(e.slice(d), r.slice(m), i)) return this.debug("globstar found match!", d, u, w), !0;
          if (w === "." || w === ".." || !l.dot && w.charAt(0) === ".") {
            this.debug("dot detected!", e, d, r, m);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), d++;
        }
        return !(!i || (this.debug(`
>>> no match, partial?`, e, d, r, m), d !== u));
      }
      let v;
      if (typeof s == "string" ? (v = p === s, this.debug("string match", s, p, v)) : (v = s.test(p), this.debug("pattern match", s, p, v)), !v) return !1;
    }
    if (h === u && c === o) return !0;
    if (h === u) return i;
    if (c === o) return h === u - 1 && e[h] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return Ba(this.pattern, this.options);
  }
  parse(e) {
    Rn(e);
    const r = this.options;
    if (e === "**") return wt;
    if (e === "") return "";
    let i, l = null;
    (i = e.match($c)) ? l = r.dot ? Fc : kc : (i = e.match(Ac)) ? l = (r.nocase ? r.dot ? Rc : Oc : r.dot ? _c : Ic)(i[1]) : (i = e.match(Mc)) ? l = (r.nocase ? r.dot ? Bc : Uc : r.dot ? Dc : jc)(i) : (i = e.match(xc)) ? l = r.dot ? Cc : Sc : (i = e.match(Lc)) && (l = Pc);
    const a = xn.fromGlob(e, this.options).toMMPattern();
    return l && typeof a == "object" && Reflect.defineProperty(a, "test", { value: l }), a;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    const e = this.set;
    if (!e.length) return this.regexp = !1, this.regexp;
    const r = this.options, i = r.noglobstar ? "[^/]*?" : r.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", l = new Set(r.nocase ? ["i"] : []);
    let a = e.map((u) => {
      const o = u.map((s) => {
        if (s instanceof RegExp) for (const p of s.flags.split("")) l.add(p);
        return typeof s == "string" ? s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : s === wt ? wt : s._src;
      });
      return o.forEach((s, p) => {
        const d = o[p + 1], m = o[p - 1];
        s === wt && m !== wt && (m === void 0 ? d !== void 0 && d !== wt ? o[p + 1] = "(?:\\/|" + i + "\\/)?" + d : o[p] = i : d === void 0 ? o[p - 1] = m + "(?:\\/|" + i + ")?" : d !== wt && (o[p - 1] = m + "(?:\\/|\\/" + i + "\\/)" + d, o[p + 1] = wt));
      }), o.filter((s) => s !== wt).join("/");
    }).join("|");
    const [h, c] = e.length > 1 ? ["(?:", ")"] : ["", ""];
    a = "^" + h + a + c + "$", this.negate && (a = "^(?!" + a + ").+$");
    try {
      this.regexp = new RegExp(a, [...l].join(""));
    } catch {
      this.regexp = !1;
    }
    return this.regexp;
  }
  slashSplit(e) {
    return this.preserveMultipleSlashes ? e.split("/") : this.isWindows && /^\/\/[^\/]+/.test(e) ? ["", ...e.split(/\/+/)] : e.split(/\/+/);
  }
  match(e) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.partial;
    if (this.debug("match", e, this.pattern), this.comment) return !1;
    if (this.empty) return e === "";
    if (e === "/" && r) return !0;
    const i = this.options;
    this.isWindows && (e = e.split("\\").join("/"));
    const l = this.slashSplit(e);
    this.debug(this.pattern, "split", l);
    const a = this.set;
    this.debug(this.pattern, "set", a);
    let h = l[l.length - 1];
    if (!h) for (let c = l.length - 2; !h && c >= 0; c--) h = l[c];
    for (let c = 0; c < a.length; c++) {
      const u = a[c];
      let o = l;
      if (i.matchBase && u.length === 1 && (o = [h]), this.matchOne(o, u, r)) return !!i.flipNegate || !this.negate;
    }
    return !i.flipNegate && this.negate;
  }
  static defaults(e) {
    return ze.defaults(e).Minimatch;
  }
}
function ro(n) {
  const e = new Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${n.status} ${n.statusText}`);
  return e.status = n.status, e.response = n, e;
}
function Pe(n, e) {
  const { status: r } = e;
  if (r === 401 && n.digest) return e;
  if (r >= 400) throw ro(e);
  return e;
}
function Er(n, e) {
  return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: e, headers: n.headers ? pc(n.headers) : {}, status: n.status, statusText: n.statusText } : e;
}
ze.AST = xn, ze.Minimatch = Sn, ze.escape = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
}, ze.unescape = Hr;
const Gc = (rs = function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const l = Le({ url: Te(n.remoteURL, Ne(e)), method: "COPY", headers: { Destination: Te(n.remoteURL, Ne(r)), Overwrite: i.overwrite === !1 ? "F" : "T", Depth: i.shallow ? "0" : "infinity" } }, n, i);
  return h = function(c) {
    Pe(n, c);
  }, (a = Ce(l, n)) && a.then || (a = Promise.resolve(a)), h ? a.then(h) : a;
  var a, h;
}, function() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  try {
    return Promise.resolve(rs.apply(this, n));
  } catch (r) {
    return Promise.reject(r);
  }
});
var rs, no = we(635), qc = we(829), Gt = we.n(qc), Rr = function(n) {
  return n.Array = "array", n.Object = "object", n.Original = "original", n;
}(Rr || {});
function fn(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rr.Original;
  const i = Gt().get(n, e);
  return r === "array" && Array.isArray(i) === !1 ? [i] : r === "object" && Array.isArray(i) ? i[0] : i;
}
function on(n) {
  return new Promise((e) => {
    e(function(r) {
      const { multistatus: i } = r;
      if (i === "") return { multistatus: { response: [] } };
      if (!i) throw new Error("Invalid response: No root multistatus found");
      const l = { multistatus: Array.isArray(i) ? i[0] : i };
      return Gt().set(l, "multistatus.response", fn(l, "multistatus.response", Rr.Array)), Gt().set(l, "multistatus.response", Gt().get(l, "multistatus.response").map((a) => function(h) {
        const c = Object.assign({}, h);
        return c.status ? Gt().set(c, "status", fn(c, "status", Rr.Object)) : (Gt().set(c, "propstat", fn(c, "propstat", Rr.Object)), Gt().set(c, "propstat.prop", fn(c, "propstat.prop", Rr.Object))), c;
      }(a))), l;
    }(new no.XMLParser({ removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 } }).parse(n)));
  });
}
function Un(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  const { getlastmodified: i = null, getcontentlength: l = "0", resourcetype: a = null, getcontenttype: h = null, getetag: c = null } = n, u = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", o = { filename: e, basename: An().basename(e), lastmod: i, size: parseInt(l, 10), type: u, etag: typeof c == "string" ? c.replace(/"/g, "") : null };
  return u === "file" && (o.mime = h && typeof h == "string" ? h.split(";")[0] : ""), r && (n.displayname !== void 0 && (n.displayname = String(n.displayname)), o.props = n), o;
}
function Da(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = null;
  try {
    n.multistatus.response[0].propstat && (i = n.multistatus.response[0]);
  } catch {
  }
  if (!i) throw new Error("Failed getting item stat: bad response");
  const { propstat: { prop: l, status: a } } = i, [h, c, u] = a.split(" ", 3), o = parseInt(c, 10);
  if (o >= 400) {
    const s = new Error(`Invalid response: ${o} ${u}`);
    throw s.status = o, s;
  }
  return Un(l, Qr(e), r);
}
function ja(n) {
  switch (String(n)) {
    case "-3":
      return "unlimited";
    case "-2":
    case "-1":
      return "unknown";
    default:
      return parseInt(String(n), 10);
  }
}
function Kn(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const io = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { details: i = !1 } = r, l = Le({ url: Te(n.remoteURL, Ne(e)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, r);
  return Kn(Ce(l, n), function(a) {
    return Pe(n, a), Kn(a.text(), function(h) {
      return Kn(on(h), function(c) {
        const u = Da(c, e, i);
        return Er(a, u, i);
      });
    });
  });
});
function Ga(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Vc = qa(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = function(a) {
    if (!a || a === "/") return [];
    let h = a;
    const c = [];
    do
      c.push(h), h = An().dirname(h);
    while (h && h !== "/");
    return c;
  }(Qr(e));
  i.sort((a, h) => a.length > h.length ? 1 : h.length > a.length ? -1 : 0);
  let l = !1;
  return function(a, h, c) {
    if (typeof a[is] == "function") {
      let _ = function(A) {
        try {
          for (; !(u = p.next()).done; ) if ((A = h(u.value)) && A.then) {
            if (!os(A)) return void A.then(_, s || (s = Ke.bind(null, o = new xr(), 2)));
            A = A.v;
          }
          o ? Ke(o, 1, A) : o = A;
        } catch (E) {
          Ke(o || (o = new xr()), 2, E);
        }
      };
      var v = _, u, o, s, p = a[is]();
      if (_(), p.return) {
        var d = function(A) {
          try {
            u.done || p.return();
          } catch {
          }
          return A;
        };
        if (o && o.then) return o.then(d, function(A) {
          throw d(A);
        });
        d();
      }
      return o;
    }
    if (!("length" in a)) throw new TypeError("Object is not iterable");
    for (var m = [], w = 0; w < a.length; w++) m.push(a[w]);
    return function(_, A, E) {
      var I, S, T = -1;
      return function x(C) {
        try {
          for (; ++T < _.length && (!E || !E()); ) if ((C = A(T)) && C.then) {
            if (!os(C)) return void C.then(x, S || (S = Ke.bind(null, I = new xr(), 2)));
            C = C.v;
          }
          I ? Ke(I, 1, C) : I = C;
        } catch (P) {
          Ke(I || (I = new xr()), 2, P);
        }
      }(), I;
    }(m, function(_) {
      return h(m[_]);
    }, c);
  }(i, function(a) {
    return h = function() {
      return function(u, o) {
        try {
          var s = Ga(io(n, a), function(p) {
            if (p.type !== "directory") throw new Error(`Path includes a file: ${e}`);
          });
        } catch (p) {
          return o(p);
        }
        return s && s.then ? s.then(void 0, o) : s;
      }(0, function(u) {
        const o = u;
        return function() {
          if (o.status === 404) return l = !0, ns(Di(n, a, { ...r, recursive: !1 }));
          throw u;
        }();
      });
    }, (c = function() {
      if (l) return ns(Di(n, a, { ...r, recursive: !1 }));
    }()) && c.then ? c.then(h) : h();
    var h, c;
  }, function() {
    return !1;
  });
});
function qa(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Wc() {
}
function ns(n, e) {
  return n && n.then ? n.then(Wc) : Promise.resolve();
}
const is = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function Ke(n, e, r) {
  if (!n.s) {
    if (r instanceof xr) {
      if (!r.s) return void (r.o = Ke.bind(null, n, e));
      1 & e && (e = r.s), r = r.v;
    }
    if (r && r.then) return void r.then(Ke.bind(null, n, e), Ke.bind(null, n, 2));
    n.s = e, n.v = r;
    const i = n.o;
    i && i(n);
  }
}
const xr = function() {
  function n() {
  }
  return n.prototype.then = function(e, r) {
    const i = new n(), l = this.s;
    if (l) {
      const a = 1 & l ? e : r;
      if (a) {
        try {
          Ke(i, 1, a(this.v));
        } catch (h) {
          Ke(i, 2, h);
        }
        return i;
      }
      return this;
    }
    return this.o = function(a) {
      try {
        const h = a.v;
        1 & a.s ? Ke(i, 1, e ? e(h) : h) : r ? Ke(i, 1, r(h)) : Ke(i, 2, h);
      } catch (h) {
        Ke(i, 2, h);
      }
    }, i;
  }, n;
}();
function os(n) {
  return n instanceof xr && 1 & n.s;
}
const Di = qa(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r.recursive === !0) return Vc(n, e, r);
  const i = Le({ url: Te(n.remoteURL, (l = Ne(e), l.endsWith("/") ? l : l + "/")), method: "MKCOL" }, n, r);
  var l;
  return Ga(Ce(i, n), function(a) {
    Pe(n, a);
  });
});
var Xc = we(388), ss = we.n(Xc);
const zc = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = {};
  if (typeof r.range == "object" && typeof r.range.start == "number") {
    let c = `bytes=${r.range.start}-`;
    typeof r.range.end == "number" && (c = `${c}${r.range.end}`), i.Range = c;
  }
  const l = Le({ url: Te(n.remoteURL, Ne(e)), method: "GET", headers: i }, n, r);
  return h = function(c) {
    if (Pe(n, c), i.Range && c.status !== 206) {
      const u = new Error(`Invalid response code for partial request: ${c.status}`);
      throw u.status = c.status, u;
    }
    return r.callback && setTimeout(() => {
      r.callback(c);
    }, 0), c.body;
  }, (a = Ce(l, n)) && a.then || (a = Promise.resolve(a)), h ? a.then(h) : a;
  var a, h;
}), Hc = () => {
}, Yc = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  r.url || (r.url = Te(n.remoteURL, Ne(e)));
  const i = Le(r, n, {});
  return a = function(h) {
    return Pe(n, h), h;
  }, (l = Ce(i, n)) && l.then || (l = Promise.resolve(l)), a ? l.then(a) : l;
  var l, a;
}), Zc = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: Te(n.remoteURL, Ne(e)), method: "DELETE" }, n, r);
  return a = function(h) {
    Pe(n, h);
  }, (l = Ce(i, n)) && l.then || (l = Promise.resolve(l)), a ? l.then(a) : l;
  var l, a;
}), Jc = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return function(i, l) {
    try {
      var a = (h = io(n, e, r), c = function() {
        return !0;
      }, u ? c ? c(h) : h : (h && h.then || (h = Promise.resolve(h)), c ? h.then(c) : h));
    } catch (o) {
      return l(o);
    }
    var h, c, u;
    return a && a.then ? a.then(void 0, l) : a;
  }(0, function(i) {
    if (i.status === 404) return !1;
    throw i;
  });
});
function Qn(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Kc = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: Te(n.remoteURL, Ne(e), "/"), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: r.deep ? "infinity" : "1" } }, n, r);
  return Qn(Ce(i, n), function(l) {
    return Pe(n, l), Qn(l.text(), function(a) {
      if (!a) throw new Error("Failed parsing directory contents: Empty response");
      return Qn(on(a), function(h) {
        const c = Wo(e);
        let u = function(o, s, p) {
          let d = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], m = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          const w = An().join(s, "/"), { multistatus: { response: v } } = o, _ = v.map((A) => {
            const E = function(S) {
              try {
                return S.replace(/^https?:\/\/[^\/]+/, "");
              } catch (T) {
                throw new Qe(T, "Failed normalising HREF");
              }
            }(A.href), { propstat: { prop: I } } = A;
            return Un(I, w === "/" ? decodeURIComponent(Qr(E)) : Qr(An().relative(decodeURIComponent(w), decodeURIComponent(E))), d);
          });
          return m ? _ : _.filter((A) => A.basename && (A.type === "file" || A.filename !== p.replace(/\/$/, "")));
        }(h, Wo(n.remoteBasePath || n.remotePath), c, r.details, r.includeSelf);
        return r.glob && (u = function(o, s) {
          return o.filter((p) => ze(p.filename, s, { matchBase: !0 }));
        }(u, r.glob)), Er(l, u, r.details);
      });
    });
  });
});
function oo(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const Qc = oo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: Te(n.remoteURL, Ne(e)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [rf] }, n, r);
  return Cn(Ce(i, n), function(l) {
    return Pe(n, l), Cn(l.text(), function(a) {
      return Er(l, a, r.details);
    });
  });
});
function Cn(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const ef = oo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: Te(n.remoteURL, Ne(e)), method: "GET" }, n, r);
  return Cn(Ce(i, n), function(l) {
    let a;
    return Pe(n, l), function(h, c) {
      var u = h();
      return u && u.then ? u.then(c) : c();
    }(function() {
      return Cn(l.arrayBuffer(), function(h) {
        a = h;
      });
    }, function() {
      return Er(l, a, r.details);
    });
  });
}), tf = oo(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { format: i = "binary" } = r;
  if (i !== "binary" && i !== "text") throw new Qe({ info: { code: Xt.InvalidOutputFormat } }, `Invalid output format: ${i}`);
  return i === "text" ? Qc(n, e, r) : ef(n, e, r);
}), rf = (n) => n;
function nf(n) {
  return new no.XMLBuilder({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(Va({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: n } } }, "d"));
}
function Va(n, e) {
  const r = { ...n };
  for (const i in r) r.hasOwnProperty(i) && (r[i] && typeof r[i] == "object" && i.indexOf(":") === -1 ? (r[`${e}:${i}`] = Va(r[i], e), delete r[i]) : /^@_/.test(i) === !1 && (r[`${e}:${i}`] = r[i], delete r[i]));
  return r;
}
function ji(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
function Wa(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const of = Wa(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const l = Le({ url: Te(n.remoteURL, Ne(e)), method: "UNLOCK", headers: { "Lock-Token": r } }, n, i);
  return ji(Ce(l, n), function(a) {
    if (Pe(n, a), a.status !== 204 && a.status !== 200) throw ro(a);
  });
}), sf = Wa(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { refreshToken: i, timeout: l = af } = r, a = { Accept: "text/plain,application/xml", Timeout: l };
  i && (a.If = i);
  const h = Le({ url: Te(n.remoteURL, Ne(e)), method: "LOCK", headers: a, data: nf(n.contactHref) }, n, r);
  return ji(Ce(h, n), function(c) {
    return Pe(n, c), ji(c.text(), function(u) {
      const o = (d = u, new no.XMLParser({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(d)), s = Gt().get(o, "prop.lockdiscovery.activelock.locktoken.href"), p = Gt().get(o, "prop.lockdiscovery.activelock.timeout");
      var d;
      if (!s) throw ro(c, "No lock token received: ");
      return { token: s, serverTimeout: p };
    });
  });
}), af = "Infinite, Second-4100000000";
function ei(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const uf = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const r = e.path || "/", i = Le({ url: Te(n.remoteURL, r), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, e);
  return ei(Ce(i, n), function(l) {
    return Pe(n, l), ei(l.text(), function(a) {
      return ei(on(a), function(h) {
        const c = function(u) {
          try {
            const [o] = u.multistatus.response, { propstat: { prop: { "quota-used-bytes": s, "quota-available-bytes": p } } } = o;
            return s !== void 0 && p !== void 0 ? { used: parseInt(String(s), 10), available: ja(p) } : null;
          } catch {
          }
          return null;
        }(h);
        return Er(l, c, e.details);
      });
    });
  });
});
function ti(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const lf = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { details: i = !1 } = r, l = Le({ url: Te(n.remoteURL, Ne(e)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": n.headers["Content-Type"] || "application/xml; charset=utf-8" } }, n, r);
  return ti(Ce(l, n), function(a) {
    return Pe(n, a), ti(a.text(), function(h) {
      return ti(on(h), function(c) {
        const u = function(o, s, p) {
          const d = { truncated: !1, results: [] };
          return d.truncated = o.multistatus.response.some((m) => {
            var w, v;
            return ((v = (m.status || ((w = m.propstat) == null ? void 0 : w.status)).split(" ", 3)) == null ? void 0 : v[1]) === "507" && m.href.replace(/\/$/, "").endsWith(Ne(s).replace(/\/$/, ""));
          }), o.multistatus.response.forEach((m) => {
            if (m.propstat === void 0) return;
            const w = m.href.split("/").map(decodeURIComponent).join("/");
            d.results.push(Un(m.propstat.prop, w, p));
          }), d;
        }(c, e, i);
        return Er(a, u, i);
      });
    });
  });
}), cf = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const l = Le({ url: Te(n.remoteURL, Ne(e)), method: "MOVE", headers: { Destination: Te(n.remoteURL, Ne(r)), Overwrite: i.overwrite === !1 ? "F" : "T" } }, n, i);
  return h = function(c) {
    Pe(n, c);
  }, (a = Ce(l, n)) && a.then || (a = Promise.resolve(a)), h ? a.then(h) : a;
  var a, h;
});
var ff = we(172);
const hf = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const { contentLength: l = !0, overwrite: a = !0 } = i, h = { "Content-Type": "application/octet-stream" };
  l === !1 || (h["Content-Length"] = typeof l == "number" ? `${l}` : `${function(s) {
    if (Ca(s)) return s.byteLength;
    if (La(s)) return s.length;
    if (typeof s == "string") return (0, ff.d)(s);
    throw new Qe({ info: { code: Xt.DataTypeNoLength } }, "Cannot calculate data length: Invalid type");
  }(r)}`), a || (h["If-None-Match"] = "*");
  const c = Le({ url: Te(n.remoteURL, Ne(e)), method: "PUT", headers: h, data: r }, n, i);
  return o = function(s) {
    try {
      Pe(n, s);
    } catch (p) {
      const d = p;
      if (d.status !== 412 || a) throw d;
      return !1;
    }
    return !0;
  }, (u = Ce(c, n)) && u.then || (u = Promise.resolve(u)), o ? u.then(o) : u;
  var u, o;
}), Xa = /* @__PURE__ */ function(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: Te(n.remoteURL, Ne(e)), method: "OPTIONS" }, n, r);
  return a = function(h) {
    try {
      Pe(n, h);
    } catch (c) {
      throw c;
    }
    return { compliance: (h.headers.get("DAV") ?? "").split(",").map((c) => c.trim()), server: h.headers.get("Server") ?? "" };
  }, (l = Ce(i, n)) && l.then || (l = Promise.resolve(l)), a ? l.then(a) : l;
  var l, a;
});
function Jr(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const pf = so(function(n, e, r, i, l) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new Qe({ info: { code: Xt.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const h = { "Content-Type": "application/octet-stream", "Content-Length": "" + (i - r + 1), "Content-Range": `bytes ${r}-${i}/*` }, c = Le({ url: Te(n.remoteURL, Ne(e)), method: "PUT", headers: h, data: l }, n, a);
  return Jr(Ce(c, n), function(u) {
    Pe(n, u);
  });
});
function as(n, e) {
  var r = n();
  return r && r.then ? r.then(e) : e(r);
}
const df = so(function(n, e, r, i, l) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new Qe({ info: { code: Xt.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const h = { "Content-Type": "application/x-sabredav-partialupdate", "Content-Length": "" + (i - r + 1), "X-Update-Range": `bytes=${r}-${i}` }, c = Le({ url: Te(n.remoteURL, Ne(e)), method: "PATCH", headers: h, data: l }, n, a);
  return Jr(Ce(c, n), function(u) {
    Pe(n, u);
  });
});
function so(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const gf = so(function(n, e, r, i, l) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  return Jr(Xa(n, e, a), function(h) {
    let c = !1;
    return as(function() {
      if (h.compliance.includes("sabredav-partialupdate")) return Jr(df(n, e, r, i, l, a), function(u) {
        return c = !0, u;
      });
    }, function(u) {
      let o = !1;
      return c ? u : as(function() {
        if (h.server.includes("Apache") && h.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Jr(pf(n, e, r, i, l, a), function(s) {
          return o = !0, s;
        });
      }, function(s) {
        if (o) return s;
        throw new Qe({ info: { code: Xt.NotSupported } }, "Not supported");
      });
    });
  });
}), mf = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function wf(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { authType: r = null, remoteBasePath: i, contactHref: l = mf, ha1: a, headers: h = {}, httpAgent: c, httpsAgent: u, password: o, token: s, username: p, withCredentials: d } = e;
  let m = r;
  m || (m = p || o ? Je.Password : Je.None);
  const w = { authType: m, remoteBasePath: i, contactHref: l, ha1: a, headers: Object.assign({}, h), httpAgent: c, httpsAgent: u, password: o, remotePath: ic(n), remoteURL: n, token: s, username: p, withCredentials: d };
  return Ra(w, p, o, s, a), { copyFile: (v, _, A) => Gc(w, v, _, A), createDirectory: (v, _) => Di(w, v, _), createReadStream: (v, _) => function(A, E) {
    let I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const S = new (ss()).PassThrough();
    return zc(A, E, I).then((T) => {
      T.pipe(S);
    }).catch((T) => {
      S.emit("error", T);
    }), S;
  }(w, v, _), createWriteStream: (v, _, A) => function(E, I) {
    let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Hc;
    const x = new (ss()).PassThrough(), C = {};
    S.overwrite === !1 && (C["If-None-Match"] = "*");
    const P = Le({ url: Te(E.remoteURL, Ne(I)), method: "PUT", headers: C, data: x, maxRedirects: 0 }, E, S);
    return Ce(P, E).then((k) => Pe(E, k)).then((k) => {
      setTimeout(() => {
        T(k);
      }, 0);
    }).catch((k) => {
      x.emit("error", k);
    }), x;
  }(w, v, _, A), customRequest: (v, _) => Yc(w, v, _), deleteFile: (v, _) => Zc(w, v, _), exists: (v, _) => Jc(w, v, _), getDirectoryContents: (v, _) => Kc(w, v, _), getFileContents: (v, _) => tf(w, v, _), getFileDownloadLink: (v) => function(_, A) {
    let E = Te(_.remoteURL, Ne(A));
    const I = /^https:/i.test(E) ? "https" : "http";
    switch (_.authType) {
      case Je.None:
        break;
      case Je.Password: {
        const S = zo(_.headers.Authorization.replace(/^Basic /i, "").trim());
        E = E.replace(/^https?:\/\//, `${I}://${S}@`);
        break;
      }
      default:
        throw new Qe({ info: { code: Xt.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${_.authType}`);
    }
    return E;
  }(w, v), getFileUploadLink: (v) => function(_, A) {
    let E = `${Te(_.remoteURL, Ne(A))}?Content-Type=application/octet-stream`;
    const I = /^https:/i.test(E) ? "https" : "http";
    switch (_.authType) {
      case Je.None:
        break;
      case Je.Password: {
        const S = zo(_.headers.Authorization.replace(/^Basic /i, "").trim());
        E = E.replace(/^https?:\/\//, `${I}://${S}@`);
        break;
      }
      default:
        throw new Qe({ info: { code: Xt.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${_.authType}`);
    }
    return E;
  }(w, v), getHeaders: () => Object.assign({}, w.headers), getQuota: (v) => uf(w, v), lock: (v, _) => sf(w, v, _), moveFile: (v, _, A) => cf(w, v, _, A), putFileContents: (v, _, A) => hf(w, v, _, A), partialUpdateFileContents: (v, _, A, E, I) => gf(w, v, _, A, E, I), getDAVCompliance: (v) => Xa(w, v), search: (v, _) => lf(w, v, _), setHeaders: (v) => {
    w.headers = Object.assign({}, v);
  }, stat: (v, _) => io(w, v, _), unlock: (v, _, A) => of(w, v, _, A) };
}
bt.hT;
bt.O4;
bt.Kd;
bt.YK;
var yf = bt.UU, Ef = bt.Gu;
bt.ky;
bt.h4;
bt.ch;
bt.hq;
bt.i5;
function za(n, e, r) {
  const i = document.querySelector(`#initial-state-${n}-${e}`);
  if (i === null)
    return r;
  try {
    return JSON.parse(atob(i.value));
  } catch {
    throw new Error(`Could not parse initial state ${e} of ${n}`);
  }
}
function ao() {
  return za("files_sharing", "isPublic", null) ?? document.querySelector(
    'input#isPublic[type="hidden"][name="isPublic"][value="1"]'
  ) !== null;
}
function vf() {
  var n;
  return za("files_sharing", "sharingToken", null) ?? ((n = document.querySelector('input#sharingToken[type="hidden"]')) == null ? void 0 : n.value) ?? null;
}
const en = Wl().setApp("@nextcloud/files").detectUser().build();
var je = /* @__PURE__ */ ((n) => (n[n.NONE = 0] = "NONE", n[n.CREATE = 4] = "CREATE", n[n.READ = 1] = "READ", n[n.UPDATE = 2] = "UPDATE", n[n.DELETE = 8] = "DELETE", n[n.SHARE = 16] = "SHARE", n[n.ALL = 31] = "ALL", n))(je || {}), uo = /* @__PURE__ */ ((n) => (n.Folder = "folder", n.File = "file", n))(uo || {});
const Ha = function(n, e) {
  return n.match(e) !== null;
}, us = (n, e) => {
  if (n.id && typeof n.id != "number")
    throw new Error("Invalid id type of value");
  if (!n.source)
    throw new Error("Missing mandatory source");
  try {
    new URL(n.source);
  } catch {
    throw new Error("Invalid source format, source must be a valid URL");
  }
  if (!n.source.startsWith("http"))
    throw new Error("Invalid source format, only http(s) is supported");
  if (n.displayname && typeof n.displayname != "string")
    throw new Error("Invalid displayname type");
  if (n.mtime && !(n.mtime instanceof Date))
    throw new Error("Invalid mtime type");
  if (n.crtime && !(n.crtime instanceof Date))
    throw new Error("Invalid crtime type");
  if (!n.mime || typeof n.mime != "string" || !n.mime.match(/^[-\w.]+\/[-+\w.]+$/gi))
    throw new Error("Missing or invalid mandatory mime");
  if ("size" in n && typeof n.size != "number" && n.size !== void 0)
    throw new Error("Invalid size type");
  if ("permissions" in n && n.permissions !== void 0 && !(typeof n.permissions == "number" && n.permissions >= je.NONE && n.permissions <= je.ALL))
    throw new Error("Invalid permissions");
  if (n.owner && n.owner !== null && typeof n.owner != "string")
    throw new Error("Invalid owner type");
  if (n.attributes && typeof n.attributes != "object")
    throw new Error("Invalid attributes type");
  if (n.root && typeof n.root != "string")
    throw new Error("Invalid root type");
  if (n.root && !n.root.startsWith("/"))
    throw new Error("Root must start with a leading slash");
  if (n.root && !n.source.includes(n.root))
    throw new Error("Root must be part of the source");
  if (n.root && Ha(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(ur.join(r, n.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (n.status && !Object.values(lo).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
};
var lo = /* @__PURE__ */ ((n) => (n.NEW = "new", n.FAILED = "failed", n.LOADING = "loading", n.LOCKED = "locked", n))(lo || {});
class Bn {
  constructor(e, r) {
    ge(this, "_data");
    ge(this, "_attributes");
    ge(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    ge(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(Bn.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    ge(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r),
      // TODO: This is deprecated and only needed for files v3
      get: (e, r, i) => this.readonlyAttributes.includes(r) ? (en.warn(`Accessing "Node.attributes.${r}" is deprecated, access it directly on the Node instance.`), Reflect.get(this, r)) : Reflect.get(e, r, i)
    });
    var i;
    us(e, r || this._knownDavService), this._data = {
      // TODO: Remove with next major release, this is just for compatibility
      displayname: (i = e.attributes) == null ? void 0 : i.displayname,
      ...e,
      attributes: {}
    }, this._attributes = new Proxy(this._data.attributes, this.handler), this.update(e.attributes ?? {}), r && (this._knownDavService = r);
  }
  /**
   * Get the source url to this object
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get source() {
    return this._data.source.replace(/\/$/i, "");
  }
  /**
   * Get the encoded source url to this object for requests purposes
   */
  get encodedSource() {
    const { origin: e } = new URL(this.source);
    return e + Yu(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return ur.basename(this.source);
  }
  /**
   * The nodes displayname
   * By default the display name and the `basename` are identical,
   * but it is possible to have a different name. This happens
   * on the files app for example for shared folders.
   */
  get displayname() {
    return this._data.displayname || this.basename;
  }
  /**
   * Set the displayname
   */
  set displayname(e) {
    this._data.displayname = e;
  }
  /**
   * Get this object's extension
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get extension() {
    return ur.extname(this.source);
  }
  /**
   * Get the directory path leading to this object
   * Will use the relative path to root if available
   *
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get dirname() {
    if (this.root) {
      let r = this.source;
      this.isDavResource && (r = r.split(this._knownDavService).pop());
      const i = r.indexOf(this.root), l = this.root.replace(/\/$/, "");
      return ur.dirname(r.slice(i + l.length) || "/");
    }
    const e = new URL(this.source);
    return ur.dirname(e.pathname);
  }
  /**
   * Get the file mime
   * There is no setter as the mime is not meant to be changed
   */
  get mime() {
    return this._data.mime;
  }
  /**
   * Get the file modification time
   */
  get mtime() {
    return this._data.mtime;
  }
  /**
   * Set the file modification time
   */
  set mtime(e) {
    this._data.mtime = e;
  }
  /**
   * Get the file creation time
   * There is no setter as the creation time is not meant to be changed
   */
  get crtime() {
    return this._data.crtime;
  }
  /**
   * Get the file size
   */
  get size() {
    return this._data.size;
  }
  /**
   * Set the file size
   */
  set size(e) {
    this.updateMtime(), this._data.size = e;
  }
  /**
   * Get the file attribute
   * This contains all additional attributes not provided by the Node class
   */
  get attributes() {
    return this._attributes;
  }
  /**
   * Get the file permissions
   */
  get permissions() {
    return this.owner === null && !this.isDavResource ? je.READ : this._data.permissions !== void 0 ? this._data.permissions : je.NONE;
  }
  /**
   * Set the file permissions
   */
  set permissions(e) {
    this.updateMtime(), this._data.permissions = e;
  }
  /**
   * Get the file owner
   * There is no setter as the owner is not meant to be changed
   */
  get owner() {
    return this.isDavResource ? this._data.owner : null;
  }
  /**
   * Is this a dav-related resource ?
   */
  get isDavResource() {
    return Ha(this.source, this._knownDavService);
  }
  /**
   * @deprecated use `isDavResource` instead - will be removed in next major version.
   */
  get isDavRessource() {
    return this.isDavResource;
  }
  /**
   * Get the dav root of this object
   * There is no setter as the root is not meant to be changed
   */
  get root() {
    return this._data.root ? this._data.root.replace(/^(.+)\/$/, "$1") : this.isDavResource && ur.dirname(this.source).split(this._knownDavService).pop() || null;
  }
  /**
   * Get the absolute path of this object relative to the root
   */
  get path() {
    if (this.root) {
      let e = this.source;
      this.isDavResource && (e = e.split(this._knownDavService).pop());
      const r = e.indexOf(this.root), i = this.root.replace(/\/$/, "");
      return e.slice(r + i.length) || "/";
    }
    return (this.dirname + "/" + this.basename).replace(/\/\//g, "/");
  }
  /**
   * Get the node id if defined.
   * There is no setter as the fileid is not meant to be changed
   */
  get fileid() {
    var e;
    return (e = this._data) == null ? void 0 : e.id;
  }
  /**
   * Get the node status.
   */
  get status() {
    var e;
    return (e = this._data) == null ? void 0 : e.status;
  }
  /**
   * Set the node status.
   */
  set status(e) {
    this._data.status = e;
  }
  /**
   * Get the node data
   */
  get data() {
    return structuredClone(this._data);
  }
  /**
   * Move the node to a new destination
   *
   * @param {string} destination the new source.
   * e.g. https://cloud.domain.com/remote.php/dav/files/emma/Photos/picture.jpg
   */
  move(e) {
    us({ ...this._data, source: e }, this._knownDavService);
    const r = this.basename;
    this._data.source = e, this.displayname === r && this.basename !== r && (this.displayname = this.basename), this.updateMtime();
  }
  /**
   * Rename the node
   * This aliases the move method for easier usage
   *
   * @param basename The new name of the node
   */
  rename(e) {
    if (e.includes("/"))
      throw new Error("Invalid basename");
    this.move(ur.dirname(this.source) + "/" + e);
  }
  /**
   * Update the mtime if exists
   */
  updateMtime() {
    this._data.mtime && (this._data.mtime = /* @__PURE__ */ new Date());
  }
  /**
   * Update the attributes of the node
   * Warning, updating attributes will NOT automatically update the mtime.
   *
   * @param attributes The new attributes to update on the Node attributes
   */
  update(e) {
    for (const [r, i] of Object.entries(e))
      try {
        i === void 0 ? delete this.attributes[r] : this.attributes[r] = i;
      } catch (l) {
        if (l instanceof TypeError)
          continue;
        throw l;
      }
  }
}
class co extends Bn {
  get type() {
    return uo.File;
  }
  /**
   * Returns a clone of the file
   */
  clone() {
    return new co(this.data);
  }
}
class fo extends Bn {
  constructor(e) {
    super({
      ...e,
      mime: "httpd/unix-directory"
    });
  }
  get type() {
    return uo.Folder;
  }
  get extension() {
    return null;
  }
  get mime() {
    return "httpd/unix-directory";
  }
  /**
   * Returns a clone of the folder
   */
  clone() {
    return new fo(this.data);
  }
}
const bf = function(n = "") {
  let e = je.NONE;
  return n && ((n.includes("C") || n.includes("K")) && (e |= je.CREATE), n.includes("G") && (e |= je.READ), (n.includes("W") || n.includes("N") || n.includes("V")) && (e |= je.UPDATE), n.includes("D") && (e |= je.DELETE), n.includes("R") && (e |= je.SHARE)), e;
}, Nf = [
  "d:getcontentlength",
  "d:getcontenttype",
  "d:getetag",
  "d:getlastmodified",
  "d:creationdate",
  "d:displayname",
  "d:quota-available-bytes",
  "d:resourcetype",
  "nc:has-preview",
  "nc:is-encrypted",
  "nc:mount-type",
  "oc:comments-unread",
  "oc:favorite",
  "oc:fileid",
  "oc:owner-display-name",
  "oc:owner-id",
  "oc:permissions",
  "oc:size"
], Tf = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
}, Af = function() {
  return typeof window._nc_dav_properties > "u" && (window._nc_dav_properties = [...Nf]), window._nc_dav_properties.map((n) => `<${n} />`).join(" ");
}, If = function() {
  return typeof window._nc_dav_namespaces > "u" && (window._nc_dav_namespaces = { ...Tf }), Object.keys(window._nc_dav_namespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = window._nc_dav_namespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}, _f = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${If()}>
			<d:prop>
				${Af()}
			</d:prop>
		</d:propfind>`;
};
function Of() {
  var n;
  return ao() ? `/files/${vf()}` : `/files/${(n = Ji()) == null ? void 0 : n.uid}`;
}
const Ya = Of();
function Rf() {
  const n = zl("dav");
  return ao() ? n.replace("remote.php", "public.php") : n;
}
const Za = Rf(), xf = function(n = Za, e = {}) {
  const r = yf(n, { headers: e });
  function i(a) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return Fl(i), i(kl()), Ef().patch("fetch", (a, h) => {
    const c = h.headers;
    return c != null && c.method && (h.method = c.method, delete c.method), fetch(a, h);
  }), r;
}, Sf = function(n, e = Ya, r = Za) {
  var p, d;
  let i = (p = Ji()) == null ? void 0 : p.uid;
  if (ao())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const l = n.props, a = bf(l == null ? void 0 : l.permissions), h = String((l == null ? void 0 : l["owner-id"]) || i), c = l.fileid || 0, u = new Date(Date.parse(n.lastmod)), o = new Date(Date.parse(l.creationdate)), s = {
    id: c,
    source: `${r}${n.filename}`,
    mtime: !isNaN(u.getTime()) && u.getTime() !== 0 ? u : void 0,
    crtime: !isNaN(o.getTime()) && o.getTime() !== 0 ? o : void 0,
    mime: n.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: l.displayname !== void 0 ? String(l.displayname) : void 0,
    size: (l == null ? void 0 : l.size) || Number.parseInt(l.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: c < 0 ? lo.FAILED : void 0,
    permissions: a,
    owner: h,
    root: e,
    attributes: {
      ...n,
      ...l,
      hasPreview: l == null ? void 0 : l["has-preview"]
    }
  };
  return (d = s.attributes) == null || delete d.props, n.type === "file" ? new co(s) : new fo(s);
};
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
  entries: Ja,
  setPrototypeOf: ls,
  isFrozen: Cf,
  getPrototypeOf: Lf,
  getOwnPropertyDescriptor: Pf
} = Object;
let {
  freeze: et,
  seal: vt,
  create: Ka
} = Object, {
  apply: Gi,
  construct: qi
} = typeof Reflect < "u" && Reflect;
et || (et = function(e) {
  return e;
});
vt || (vt = function(e) {
  return e;
});
Gi || (Gi = function(e, r, i) {
  return e.apply(r, i);
});
qi || (qi = function(e, r) {
  return new e(...r);
});
const hn = tt(Array.prototype.forEach), $f = tt(Array.prototype.lastIndexOf), cs = tt(Array.prototype.pop), qr = tt(Array.prototype.push), kf = tt(Array.prototype.splice), vn = tt(String.prototype.toLowerCase), ri = tt(String.prototype.toString), fs = tt(String.prototype.match), Vr = tt(String.prototype.replace), Ff = tt(String.prototype.indexOf), Mf = tt(String.prototype.trim), At = tt(Object.prototype.hasOwnProperty), Ye = tt(RegExp.prototype.test), Wr = Uf(TypeError);
function tt(n) {
  return function(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      i[l - 1] = arguments[l];
    return Gi(n, e, i);
  };
}
function Uf(n) {
  return function() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
      r[i] = arguments[i];
    return qi(n, r);
  };
}
function le(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : vn;
  ls && ls(n, null);
  let i = e.length;
  for (; i--; ) {
    let l = e[i];
    if (typeof l == "string") {
      const a = r(l);
      a !== l && (Cf(e) || (e[i] = a), l = a);
    }
    n[l] = !0;
  }
  return n;
}
function Bf(n) {
  for (let e = 0; e < n.length; e++)
    At(n, e) || (n[e] = null);
  return n;
}
function lr(n) {
  const e = Ka(null);
  for (const [r, i] of Ja(n))
    At(n, r) && (Array.isArray(i) ? e[r] = Bf(i) : i && typeof i == "object" && i.constructor === Object ? e[r] = lr(i) : e[r] = i);
  return e;
}
function Xr(n, e) {
  for (; n !== null; ) {
    const i = Pf(n, e);
    if (i) {
      if (i.get)
        return tt(i.get);
      if (typeof i.value == "function")
        return tt(i.value);
    }
    n = Lf(n);
  }
  function r() {
    return null;
  }
  return r;
}
const hs = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ni = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ii = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Df = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), oi = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), jf = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ps = et(["#text"]), ds = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), si = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), gs = et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), pn = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Gf = vt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), qf = vt(/<%[\w\W]*|[\w\W]*%>/gm), Vf = vt(/\$\{[\w\W]*/gm), Wf = vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Xf = vt(/^aria-[\-\w]+$/), Qa = vt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), zf = vt(/^(?:\w+script|data):/i), Hf = vt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), eu = vt(/^html$/i), Yf = vt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ms = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Xf,
  ATTR_WHITESPACE: Hf,
  CUSTOM_ELEMENT: Yf,
  DATA_ATTR: Wf,
  DOCTYPE_NAME: eu,
  ERB_EXPR: qf,
  IS_ALLOWED_URI: Qa,
  IS_SCRIPT_OR_DATA: zf,
  MUSTACHE_EXPR: Gf,
  TMPLIT_EXPR: Vf
});
const zr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Zf = function() {
  return typeof window > "u" ? null : window;
}, Jf = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const l = "data-tt-policy-suffix";
  r && r.hasAttribute(l) && (i = r.getAttribute(l));
  const a = "dompurify" + (i ? "#" + i : "");
  try {
    return e.createPolicy(a, {
      createHTML(h) {
        return h;
      },
      createScriptURL(h) {
        return h;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, ws = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function tu() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Zf();
  const e = (K) => tu(K);
  if (e.version = "3.2.4", e.removed = [], !n || !n.document || n.document.nodeType !== zr.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: r
  } = n;
  const i = r, l = i.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: h,
    Node: c,
    Element: u,
    NodeFilter: o,
    NamedNodeMap: s = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: p,
    DOMParser: d,
    trustedTypes: m
  } = n, w = u.prototype, v = Xr(w, "cloneNode"), _ = Xr(w, "remove"), A = Xr(w, "nextSibling"), E = Xr(w, "childNodes"), I = Xr(w, "parentNode");
  if (typeof h == "function") {
    const K = r.createElement("template");
    K.content && K.content.ownerDocument && (r = K.content.ownerDocument);
  }
  let S, T = "";
  const {
    implementation: x,
    createNodeIterator: C,
    createDocumentFragment: P,
    getElementsByTagName: k
  } = r, {
    importNode: j
  } = i;
  let D = ws();
  e.isSupported = typeof Ja == "function" && typeof I == "function" && x && x.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: B,
    ERB_EXPR: $,
    TMPLIT_EXPR: q,
    DATA_ATTR: V,
    ARIA_ATTR: oe,
    IS_SCRIPT_OR_DATA: ne,
    ATTR_WHITESPACE: te,
    CUSTOM_ELEMENT: ae
  } = ms;
  let {
    IS_ALLOWED_URI: fe
  } = ms, re = null;
  const Me = le({}, [...hs, ...ni, ...ii, ...oi, ...ps]);
  let he = null;
  const pe = le({}, [...ds, ...si, ...gs, ...pn]);
  let Q = Object.seal(Ka(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), at = null, _t = null, Ut = !0, Yt = !0, Ot = !1, ft = !0, ut = !1, Rt = !0, ht = !1, Zt = !1, pt = !1, rt = !1, Bt = !1, Jt = !1, dt = !0, ar = !1;
  const vr = "user-content-";
  let Kt = !0, Z = !1, ye = {}, b = null;
  const O = le({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let L = null;
  const U = le({}, ["audio", "video", "img", "source", "image", "track"]);
  let y = null;
  const f = le({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), g = "http://www.w3.org/1998/Math/MathML", N = "http://www.w3.org/2000/svg", R = "http://www.w3.org/1999/xhtml";
  let F = R, G = !1, X = null;
  const J = le({}, [g, N, R], ri);
  let ie = le({}, ["mi", "mo", "mn", "ms", "mtext"]), se = le({}, ["annotation-xml"]);
  const ce = le({}, ["title", "style", "font", "a", "script"]);
  let Dt = null;
  const yu = ["application/xhtml+xml", "text/html"], Eu = "text/html";
  let $e = null, br = null;
  const vu = r.createElement("form"), go = function(M) {
    return M instanceof RegExp || M instanceof Function;
  }, jn = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(br && br === M)) {
      if ((!M || typeof M != "object") && (M = {}), M = lr(M), Dt = // eslint-disable-next-line unicorn/prefer-includes
      yu.indexOf(M.PARSER_MEDIA_TYPE) === -1 ? Eu : M.PARSER_MEDIA_TYPE, $e = Dt === "application/xhtml+xml" ? ri : vn, re = At(M, "ALLOWED_TAGS") ? le({}, M.ALLOWED_TAGS, $e) : Me, he = At(M, "ALLOWED_ATTR") ? le({}, M.ALLOWED_ATTR, $e) : pe, X = At(M, "ALLOWED_NAMESPACES") ? le({}, M.ALLOWED_NAMESPACES, ri) : J, y = At(M, "ADD_URI_SAFE_ATTR") ? le(lr(f), M.ADD_URI_SAFE_ATTR, $e) : f, L = At(M, "ADD_DATA_URI_TAGS") ? le(lr(U), M.ADD_DATA_URI_TAGS, $e) : U, b = At(M, "FORBID_CONTENTS") ? le({}, M.FORBID_CONTENTS, $e) : O, at = At(M, "FORBID_TAGS") ? le({}, M.FORBID_TAGS, $e) : {}, _t = At(M, "FORBID_ATTR") ? le({}, M.FORBID_ATTR, $e) : {}, ye = At(M, "USE_PROFILES") ? M.USE_PROFILES : !1, Ut = M.ALLOW_ARIA_ATTR !== !1, Yt = M.ALLOW_DATA_ATTR !== !1, Ot = M.ALLOW_UNKNOWN_PROTOCOLS || !1, ft = M.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ut = M.SAFE_FOR_TEMPLATES || !1, Rt = M.SAFE_FOR_XML !== !1, ht = M.WHOLE_DOCUMENT || !1, rt = M.RETURN_DOM || !1, Bt = M.RETURN_DOM_FRAGMENT || !1, Jt = M.RETURN_TRUSTED_TYPE || !1, pt = M.FORCE_BODY || !1, dt = M.SANITIZE_DOM !== !1, ar = M.SANITIZE_NAMED_PROPS || !1, Kt = M.KEEP_CONTENT !== !1, Z = M.IN_PLACE || !1, fe = M.ALLOWED_URI_REGEXP || Qa, F = M.NAMESPACE || R, ie = M.MATHML_TEXT_INTEGRATION_POINTS || ie, se = M.HTML_INTEGRATION_POINTS || se, Q = M.CUSTOM_ELEMENT_HANDLING || {}, M.CUSTOM_ELEMENT_HANDLING && go(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Q.tagNameCheck = M.CUSTOM_ELEMENT_HANDLING.tagNameCheck), M.CUSTOM_ELEMENT_HANDLING && go(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Q.attributeNameCheck = M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), M.CUSTOM_ELEMENT_HANDLING && typeof M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Q.allowCustomizedBuiltInElements = M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ut && (Yt = !1), Bt && (rt = !0), ye && (re = le({}, ps), he = [], ye.html === !0 && (le(re, hs), le(he, ds)), ye.svg === !0 && (le(re, ni), le(he, si), le(he, pn)), ye.svgFilters === !0 && (le(re, ii), le(he, si), le(he, pn)), ye.mathMl === !0 && (le(re, oi), le(he, gs), le(he, pn))), M.ADD_TAGS && (re === Me && (re = lr(re)), le(re, M.ADD_TAGS, $e)), M.ADD_ATTR && (he === pe && (he = lr(he)), le(he, M.ADD_ATTR, $e)), M.ADD_URI_SAFE_ATTR && le(y, M.ADD_URI_SAFE_ATTR, $e), M.FORBID_CONTENTS && (b === O && (b = lr(b)), le(b, M.FORBID_CONTENTS, $e)), Kt && (re["#text"] = !0), ht && le(re, ["html", "head", "body"]), re.table && (le(re, ["tbody"]), delete at.tbody), M.TRUSTED_TYPES_POLICY) {
        if (typeof M.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Wr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof M.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Wr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        S = M.TRUSTED_TYPES_POLICY, T = S.createHTML("");
      } else
        S === void 0 && (S = Jf(m, l)), S !== null && typeof T == "string" && (T = S.createHTML(""));
      et && et(M), br = M;
    }
  }, mo = le({}, [...ni, ...ii, ...Df]), wo = le({}, [...oi, ...jf]), bu = function(M) {
    let W = I(M);
    (!W || !W.tagName) && (W = {
      namespaceURI: F,
      tagName: "template"
    });
    const Y = vn(M.tagName), Ee = vn(W.tagName);
    return X[M.namespaceURI] ? M.namespaceURI === N ? W.namespaceURI === R ? Y === "svg" : W.namespaceURI === g ? Y === "svg" && (Ee === "annotation-xml" || ie[Ee]) : !!mo[Y] : M.namespaceURI === g ? W.namespaceURI === R ? Y === "math" : W.namespaceURI === N ? Y === "math" && se[Ee] : !!wo[Y] : M.namespaceURI === R ? W.namespaceURI === N && !se[Ee] || W.namespaceURI === g && !ie[Ee] ? !1 : !wo[Y] && (ce[Y] || !mo[Y]) : !!(Dt === "application/xhtml+xml" && X[M.namespaceURI]) : !1;
  }, xt = function(M) {
    qr(e.removed, {
      element: M
    });
    try {
      I(M).removeChild(M);
    } catch {
      _(M);
    }
  }, sn = function(M, W) {
    try {
      qr(e.removed, {
        attribute: W.getAttributeNode(M),
        from: W
      });
    } catch {
      qr(e.removed, {
        attribute: null,
        from: W
      });
    }
    if (W.removeAttribute(M), M === "is")
      if (rt || Bt)
        try {
          xt(W);
        } catch {
        }
      else
        try {
          W.setAttribute(M, "");
        } catch {
        }
  }, yo = function(M) {
    let W = null, Y = null;
    if (pt)
      M = "<remove></remove>" + M;
    else {
      const Ue = fs(M, /^[\r\n\t ]+/);
      Y = Ue && Ue[0];
    }
    Dt === "application/xhtml+xml" && F === R && (M = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + M + "</body></html>");
    const Ee = S ? S.createHTML(M) : M;
    if (F === R)
      try {
        W = new d().parseFromString(Ee, Dt);
      } catch {
      }
    if (!W || !W.documentElement) {
      W = x.createDocument(F, "template", null);
      try {
        W.documentElement.innerHTML = G ? T : Ee;
      } catch {
      }
    }
    const qe = W.body || W.documentElement;
    return M && Y && qe.insertBefore(r.createTextNode(Y), qe.childNodes[0] || null), F === R ? k.call(W, ht ? "html" : "body")[0] : ht ? W.documentElement : qe;
  }, Eo = function(M) {
    return C.call(
      M.ownerDocument || M,
      M,
      // eslint-disable-next-line no-bitwise
      o.SHOW_ELEMENT | o.SHOW_COMMENT | o.SHOW_TEXT | o.SHOW_PROCESSING_INSTRUCTION | o.SHOW_CDATA_SECTION,
      null
    );
  }, Gn = function(M) {
    return M instanceof p && (typeof M.nodeName != "string" || typeof M.textContent != "string" || typeof M.removeChild != "function" || !(M.attributes instanceof s) || typeof M.removeAttribute != "function" || typeof M.setAttribute != "function" || typeof M.namespaceURI != "string" || typeof M.insertBefore != "function" || typeof M.hasChildNodes != "function");
  }, vo = function(M) {
    return typeof c == "function" && M instanceof c;
  };
  function jt(K, M, W) {
    hn(K, (Y) => {
      Y.call(e, M, W, br);
    });
  }
  const bo = function(M) {
    let W = null;
    if (jt(D.beforeSanitizeElements, M, null), Gn(M))
      return xt(M), !0;
    const Y = $e(M.nodeName);
    if (jt(D.uponSanitizeElement, M, {
      tagName: Y,
      allowedTags: re
    }), M.hasChildNodes() && !vo(M.firstElementChild) && Ye(/<[/\w]/g, M.innerHTML) && Ye(/<[/\w]/g, M.textContent) || M.nodeType === zr.progressingInstruction || Rt && M.nodeType === zr.comment && Ye(/<[/\w]/g, M.data))
      return xt(M), !0;
    if (!re[Y] || at[Y]) {
      if (!at[Y] && To(Y) && (Q.tagNameCheck instanceof RegExp && Ye(Q.tagNameCheck, Y) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(Y)))
        return !1;
      if (Kt && !b[Y]) {
        const Ee = I(M) || M.parentNode, qe = E(M) || M.childNodes;
        if (qe && Ee) {
          const Ue = qe.length;
          for (let nt = Ue - 1; nt >= 0; --nt) {
            const St = v(qe[nt], !0);
            St.__removalCount = (M.__removalCount || 0) + 1, Ee.insertBefore(St, A(M));
          }
        }
      }
      return xt(M), !0;
    }
    return M instanceof u && !bu(M) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && Ye(/<\/no(script|embed|frames)/i, M.innerHTML) ? (xt(M), !0) : (ut && M.nodeType === zr.text && (W = M.textContent, hn([B, $, q], (Ee) => {
      W = Vr(W, Ee, " ");
    }), M.textContent !== W && (qr(e.removed, {
      element: M.cloneNode()
    }), M.textContent = W)), jt(D.afterSanitizeElements, M, null), !1);
  }, No = function(M, W, Y) {
    if (dt && (W === "id" || W === "name") && (Y in r || Y in vu))
      return !1;
    if (!(Yt && !_t[W] && Ye(V, W))) {
      if (!(Ut && Ye(oe, W))) {
        if (!he[W] || _t[W]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(To(M) && (Q.tagNameCheck instanceof RegExp && Ye(Q.tagNameCheck, M) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(M)) && (Q.attributeNameCheck instanceof RegExp && Ye(Q.attributeNameCheck, W) || Q.attributeNameCheck instanceof Function && Q.attributeNameCheck(W)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            W === "is" && Q.allowCustomizedBuiltInElements && (Q.tagNameCheck instanceof RegExp && Ye(Q.tagNameCheck, Y) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(Y)))
          ) return !1;
        } else if (!y[W]) {
          if (!Ye(fe, Vr(Y, te, ""))) {
            if (!((W === "src" || W === "xlink:href" || W === "href") && M !== "script" && Ff(Y, "data:") === 0 && L[M])) {
              if (!(Ot && !Ye(ne, Vr(Y, te, "")))) {
                if (Y)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, To = function(M) {
    return M !== "annotation-xml" && fs(M, ae);
  }, Ao = function(M) {
    jt(D.beforeSanitizeAttributes, M, null);
    const {
      attributes: W
    } = M;
    if (!W || Gn(M))
      return;
    const Y = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: he,
      forceKeepAttr: void 0
    };
    let Ee = W.length;
    for (; Ee--; ) {
      const qe = W[Ee], {
        name: Ue,
        namespaceURI: nt,
        value: St
      } = qe, Ur = $e(Ue);
      let He = Ue === "value" ? St : Mf(St);
      if (Y.attrName = Ur, Y.attrValue = He, Y.keepAttr = !0, Y.forceKeepAttr = void 0, jt(D.uponSanitizeAttribute, M, Y), He = Y.attrValue, ar && (Ur === "id" || Ur === "name") && (sn(Ue, M), He = vr + He), Rt && Ye(/((--!?|])>)|<\/(style|title)/i, He)) {
        sn(Ue, M);
        continue;
      }
      if (Y.forceKeepAttr || (sn(Ue, M), !Y.keepAttr))
        continue;
      if (!ft && Ye(/\/>/i, He)) {
        sn(Ue, M);
        continue;
      }
      ut && hn([B, $, q], (_o) => {
        He = Vr(He, _o, " ");
      });
      const Io = $e(M.nodeName);
      if (No(Io, Ur, He)) {
        if (S && typeof m == "object" && typeof m.getAttributeType == "function" && !nt)
          switch (m.getAttributeType(Io, Ur)) {
            case "TrustedHTML": {
              He = S.createHTML(He);
              break;
            }
            case "TrustedScriptURL": {
              He = S.createScriptURL(He);
              break;
            }
          }
        try {
          nt ? M.setAttributeNS(nt, Ue, He) : M.setAttribute(Ue, He), Gn(M) ? xt(M) : cs(e.removed);
        } catch {
        }
      }
    }
    jt(D.afterSanitizeAttributes, M, null);
  }, Nu = function K(M) {
    let W = null;
    const Y = Eo(M);
    for (jt(D.beforeSanitizeShadowDOM, M, null); W = Y.nextNode(); )
      jt(D.uponSanitizeShadowNode, W, null), bo(W), Ao(W), W.content instanceof a && K(W.content);
    jt(D.afterSanitizeShadowDOM, M, null);
  };
  return e.sanitize = function(K) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = null, Y = null, Ee = null, qe = null;
    if (G = !K, G && (K = "<!-->"), typeof K != "string" && !vo(K))
      if (typeof K.toString == "function") {
        if (K = K.toString(), typeof K != "string")
          throw Wr("dirty is not a string, aborting");
      } else
        throw Wr("toString is not a function");
    if (!e.isSupported)
      return K;
    if (Zt || jn(M), e.removed = [], typeof K == "string" && (Z = !1), Z) {
      if (K.nodeName) {
        const St = $e(K.nodeName);
        if (!re[St] || at[St])
          throw Wr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (K instanceof c)
      W = yo("<!---->"), Y = W.ownerDocument.importNode(K, !0), Y.nodeType === zr.element && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? W = Y : W.appendChild(Y);
    else {
      if (!rt && !ut && !ht && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return S && Jt ? S.createHTML(K) : K;
      if (W = yo(K), !W)
        return rt ? null : Jt ? T : "";
    }
    W && pt && xt(W.firstChild);
    const Ue = Eo(Z ? K : W);
    for (; Ee = Ue.nextNode(); )
      bo(Ee), Ao(Ee), Ee.content instanceof a && Nu(Ee.content);
    if (Z)
      return K;
    if (rt) {
      if (Bt)
        for (qe = P.call(W.ownerDocument); W.firstChild; )
          qe.appendChild(W.firstChild);
      else
        qe = W;
      return (he.shadowroot || he.shadowrootmode) && (qe = j.call(i, qe, !0)), qe;
    }
    let nt = ht ? W.outerHTML : W.innerHTML;
    return ht && re["!doctype"] && W.ownerDocument && W.ownerDocument.doctype && W.ownerDocument.doctype.name && Ye(eu, W.ownerDocument.doctype.name) && (nt = "<!DOCTYPE " + W.ownerDocument.doctype.name + `>
` + nt), ut && hn([B, $, q], (St) => {
      nt = Vr(nt, St, " ");
    }), S && Jt ? S.createHTML(nt) : nt;
  }, e.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    jn(K), Zt = !0;
  }, e.clearConfig = function() {
    br = null, Zt = !1;
  }, e.isValidAttribute = function(K, M, W) {
    br || jn({});
    const Y = $e(K), Ee = $e(M);
    return No(Y, Ee, W);
  }, e.addHook = function(K, M) {
    typeof M == "function" && qr(D[K], M);
  }, e.removeHook = function(K, M) {
    if (M !== void 0) {
      const W = $f(D[K], M);
      return W === -1 ? void 0 : kf(D[K], W, 1)[0];
    }
    return cs(D[K]);
  }, e.removeHooks = function(K) {
    D[K] = [];
  }, e.removeAllHooks = function() {
    D = ws();
  }, e;
}
tu();
class Kf {
  constructor() {
    ge(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? 1, this._entries.push(e);
  }
  unregisterEntry(e) {
    const r = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (r === -1) {
      en.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
      return;
    }
    this._entries.splice(r, 1);
  }
  /**
   * Get the list of registered entries
   *
   * @param {Folder} context the creation context. Usually the current folder
   */
  getEntries(e) {
    return e ? this._entries.filter((r) => typeof r.enabled == "function" ? r.enabled(e) : !0) : this._entries;
  }
  getEntryIndex(e) {
    return this._entries.findIndex((r) => r.id === e);
  }
  validateEntry(e) {
    if (!e.id || !e.displayName || !(e.iconSvgInline || e.iconClass) || !e.handler)
      throw new Error("Invalid entry");
    if (typeof e.id != "string" || typeof e.displayName != "string")
      throw new Error("Invalid id or displayName property");
    if (e.iconClass && typeof e.iconClass != "string" || e.iconSvgInline && typeof e.iconSvgInline != "string")
      throw new Error("Invalid icon provided");
    if (e.enabled !== void 0 && typeof e.enabled != "function")
      throw new Error("Invalid enabled property");
    if (typeof e.handler != "function")
      throw new Error("Invalid handler property");
    if ("order" in e && typeof e.order != "number")
      throw new Error("Invalid order property");
    if (this.getEntryIndex(e.id) !== -1)
      throw new Error("Duplicate entry");
  }
}
const Qf = function() {
  return typeof window._nc_newfilemenu > "u" && (window._nc_newfilemenu = new Kf(), en.debug("NewFileMenu initialized")), window._nc_newfilemenu;
};
var ru = /* @__PURE__ */ ((n) => (n.DEFAULT = "default", n.HIDDEN = "hidden", n))(ru || {});
const ai = function(n) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], en.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === n.id)) {
    en.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  window._nc_fileactions.push(n);
};
var ui = {}, li = {}, ys;
function ho() {
  return ys || (ys = 1, function(n) {
    const e = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", r = e + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", i = "[" + e + "][" + r + "]*", l = new RegExp("^" + i + "$"), a = function(c, u) {
      const o = [];
      let s = u.exec(c);
      for (; s; ) {
        const p = [];
        p.startIndex = u.lastIndex - s[0].length;
        const d = s.length;
        for (let m = 0; m < d; m++)
          p.push(s[m]);
        o.push(p), s = u.exec(c);
      }
      return o;
    }, h = function(c) {
      const u = l.exec(c);
      return !(u === null || typeof u > "u");
    };
    n.isExist = function(c) {
      return typeof c < "u";
    }, n.isEmptyObject = function(c) {
      return Object.keys(c).length === 0;
    }, n.merge = function(c, u, o) {
      if (u) {
        const s = Object.keys(u), p = s.length;
        for (let d = 0; d < p; d++)
          o === "strict" ? c[s[d]] = [u[s[d]]] : c[s[d]] = u[s[d]];
      }
    }, n.getValue = function(c) {
      return n.isExist(c) ? c : "";
    }, n.isName = h, n.getAllMatches = a, n.nameRegexp = i;
  }(li)), li;
}
var Es;
function nu() {
  if (Es) return ui;
  Es = 1;
  const n = ho(), e = {
    allowBooleanAttributes: !1,
    //A tag can have attributes without any value
    unpairedTags: []
  };
  ui.validate = function(A, E) {
    E = Object.assign({}, e, E);
    const I = [];
    let S = !1, T = !1;
    A[0] === "\uFEFF" && (A = A.substr(1));
    for (let x = 0; x < A.length; x++)
      if (A[x] === "<" && A[x + 1] === "?") {
        if (x += 2, x = i(A, x), x.err) return x;
      } else if (A[x] === "<") {
        let C = x;
        if (x++, A[x] === "!") {
          x = l(A, x);
          continue;
        } else {
          let P = !1;
          A[x] === "/" && (P = !0, x++);
          let k = "";
          for (; x < A.length && A[x] !== ">" && A[x] !== " " && A[x] !== "	" && A[x] !== `
` && A[x] !== "\r"; x++)
            k += A[x];
          if (k = k.trim(), k[k.length - 1] === "/" && (k = k.substring(0, k.length - 1), x--), !w(k)) {
            let B;
            return k.trim().length === 0 ? B = "Invalid space after '<'." : B = "Tag '" + k + "' is an invalid name.", d("InvalidTag", B, v(A, x));
          }
          const j = c(A, x);
          if (j === !1)
            return d("InvalidAttr", "Attributes for '" + k + "' have open quote.", v(A, x));
          let D = j.value;
          if (x = j.index, D[D.length - 1] === "/") {
            const B = x - D.length;
            D = D.substring(0, D.length - 1);
            const $ = o(D, E);
            if ($ === !0)
              S = !0;
            else
              return d($.err.code, $.err.msg, v(A, B + $.err.line));
          } else if (P)
            if (j.tagClosed) {
              if (D.trim().length > 0)
                return d("InvalidTag", "Closing tag '" + k + "' can't have attributes or invalid starting.", v(A, C));
              if (I.length === 0)
                return d("InvalidTag", "Closing tag '" + k + "' has not been opened.", v(A, C));
              {
                const B = I.pop();
                if (k !== B.tagName) {
                  let $ = v(A, B.tagStartPos);
                  return d(
                    "InvalidTag",
                    "Expected closing tag '" + B.tagName + "' (opened in line " + $.line + ", col " + $.col + ") instead of closing tag '" + k + "'.",
                    v(A, C)
                  );
                }
                I.length == 0 && (T = !0);
              }
            } else return d("InvalidTag", "Closing tag '" + k + "' doesn't have proper closing.", v(A, x));
          else {
            const B = o(D, E);
            if (B !== !0)
              return d(B.err.code, B.err.msg, v(A, x - D.length + B.err.line));
            if (T === !0)
              return d("InvalidXml", "Multiple possible root nodes found.", v(A, x));
            E.unpairedTags.indexOf(k) !== -1 || I.push({ tagName: k, tagStartPos: C }), S = !0;
          }
          for (x++; x < A.length; x++)
            if (A[x] === "<")
              if (A[x + 1] === "!") {
                x++, x = l(A, x);
                continue;
              } else if (A[x + 1] === "?") {
                if (x = i(A, ++x), x.err) return x;
              } else
                break;
            else if (A[x] === "&") {
              const B = p(A, x);
              if (B == -1)
                return d("InvalidChar", "char '&' is not expected.", v(A, x));
              x = B;
            } else if (T === !0 && !r(A[x]))
              return d("InvalidXml", "Extra text at the end", v(A, x));
          A[x] === "<" && x--;
        }
      } else {
        if (r(A[x]))
          continue;
        return d("InvalidChar", "char '" + A[x] + "' is not expected.", v(A, x));
      }
    if (S) {
      if (I.length == 1)
        return d("InvalidTag", "Unclosed tag '" + I[0].tagName + "'.", v(A, I[0].tagStartPos));
      if (I.length > 0)
        return d("InvalidXml", "Invalid '" + JSON.stringify(I.map((x) => x.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    } else return d("InvalidXml", "Start tag expected.", 1);
    return !0;
  };
  function r(A) {
    return A === " " || A === "	" || A === `
` || A === "\r";
  }
  function i(A, E) {
    const I = E;
    for (; E < A.length; E++)
      if (A[E] == "?" || A[E] == " ") {
        const S = A.substr(I, E - I);
        if (E > 5 && S === "xml")
          return d("InvalidXml", "XML declaration allowed only at the start of the document.", v(A, E));
        if (A[E] == "?" && A[E + 1] == ">") {
          E++;
          break;
        } else
          continue;
      }
    return E;
  }
  function l(A, E) {
    if (A.length > E + 5 && A[E + 1] === "-" && A[E + 2] === "-") {
      for (E += 3; E < A.length; E++)
        if (A[E] === "-" && A[E + 1] === "-" && A[E + 2] === ">") {
          E += 2;
          break;
        }
    } else if (A.length > E + 8 && A[E + 1] === "D" && A[E + 2] === "O" && A[E + 3] === "C" && A[E + 4] === "T" && A[E + 5] === "Y" && A[E + 6] === "P" && A[E + 7] === "E") {
      let I = 1;
      for (E += 8; E < A.length; E++)
        if (A[E] === "<")
          I++;
        else if (A[E] === ">" && (I--, I === 0))
          break;
    } else if (A.length > E + 9 && A[E + 1] === "[" && A[E + 2] === "C" && A[E + 3] === "D" && A[E + 4] === "A" && A[E + 5] === "T" && A[E + 6] === "A" && A[E + 7] === "[") {
      for (E += 8; E < A.length; E++)
        if (A[E] === "]" && A[E + 1] === "]" && A[E + 2] === ">") {
          E += 2;
          break;
        }
    }
    return E;
  }
  const a = '"', h = "'";
  function c(A, E) {
    let I = "", S = "", T = !1;
    for (; E < A.length; E++) {
      if (A[E] === a || A[E] === h)
        S === "" ? S = A[E] : S !== A[E] || (S = "");
      else if (A[E] === ">" && S === "") {
        T = !0;
        break;
      }
      I += A[E];
    }
    return S !== "" ? !1 : {
      value: I,
      index: E,
      tagClosed: T
    };
  }
  const u = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function o(A, E) {
    const I = n.getAllMatches(A, u), S = {};
    for (let T = 0; T < I.length; T++) {
      if (I[T][1].length === 0)
        return d("InvalidAttr", "Attribute '" + I[T][2] + "' has no space in starting.", _(I[T]));
      if (I[T][3] !== void 0 && I[T][4] === void 0)
        return d("InvalidAttr", "Attribute '" + I[T][2] + "' is without value.", _(I[T]));
      if (I[T][3] === void 0 && !E.allowBooleanAttributes)
        return d("InvalidAttr", "boolean attribute '" + I[T][2] + "' is not allowed.", _(I[T]));
      const x = I[T][2];
      if (!m(x))
        return d("InvalidAttr", "Attribute '" + x + "' is an invalid name.", _(I[T]));
      if (!S.hasOwnProperty(x))
        S[x] = 1;
      else
        return d("InvalidAttr", "Attribute '" + x + "' is repeated.", _(I[T]));
    }
    return !0;
  }
  function s(A, E) {
    let I = /\d/;
    for (A[E] === "x" && (E++, I = /[\da-fA-F]/); E < A.length; E++) {
      if (A[E] === ";")
        return E;
      if (!A[E].match(I))
        break;
    }
    return -1;
  }
  function p(A, E) {
    if (E++, A[E] === ";")
      return -1;
    if (A[E] === "#")
      return E++, s(A, E);
    let I = 0;
    for (; E < A.length; E++, I++)
      if (!(A[E].match(/\w/) && I < 20)) {
        if (A[E] === ";")
          break;
        return -1;
      }
    return E;
  }
  function d(A, E, I) {
    return {
      err: {
        code: A,
        msg: E,
        line: I.line || I,
        col: I.col
      }
    };
  }
  function m(A) {
    return n.isName(A);
  }
  function w(A) {
    return n.isName(A);
  }
  function v(A, E) {
    const I = A.substring(0, E).split(/\r?\n/);
    return {
      line: I.length,
      // column number is last line's length + 1, because column numbering starts at 1:
      col: I[I.length - 1].length + 1
    };
  }
  function _(A) {
    return A.startIndex + A[1].length;
  }
  return ui;
}
var dn = {}, vs;
function eh() {
  if (vs) return dn;
  vs = 1;
  const n = {
    preserveOrder: !1,
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    removeNSPrefix: !1,
    // remove NS from tag name or attribute name if true
    allowBooleanAttributes: !1,
    //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: !0,
    parseAttributeValue: !1,
    trimValues: !0,
    //Trim string values of tag and attributes
    cdataPropName: !1,
    numberParseOptions: {
      hex: !0,
      leadingZeros: !0,
      eNotation: !0
    },
    tagValueProcessor: function(r, i) {
      return i;
    },
    attributeValueProcessor: function(r, i) {
      return i;
    },
    stopNodes: [],
    //nested tags will not be parsed even for errors
    alwaysCreateTextNode: !1,
    isArray: () => !1,
    commentPropName: !1,
    unpairedTags: [],
    processEntities: !0,
    htmlEntities: !1,
    ignoreDeclaration: !1,
    ignorePiTags: !1,
    transformTagName: !1,
    transformAttributeName: !1,
    updateTag: function(r, i, l) {
      return r;
    }
    // skipEmptyListItem: false
  }, e = function(r) {
    return Object.assign({}, n, r);
  };
  return dn.buildOptions = e, dn.defaultOptions = n, dn;
}
var ci, bs;
function th() {
  if (bs) return ci;
  bs = 1;
  class n {
    constructor(r) {
      this.tagname = r, this.child = [], this[":@"] = {};
    }
    add(r, i) {
      r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: i });
    }
    addChild(r) {
      r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
    }
  }
  return ci = n, ci;
}
var fi, Ns;
function rh() {
  if (Ns) return fi;
  Ns = 1;
  const n = ho();
  function e(u, o) {
    const s = {};
    if (u[o + 3] === "O" && u[o + 4] === "C" && u[o + 5] === "T" && u[o + 6] === "Y" && u[o + 7] === "P" && u[o + 8] === "E") {
      o = o + 9;
      let p = 1, d = !1, m = !1, w = "";
      for (; o < u.length; o++)
        if (u[o] === "<" && !m) {
          if (d && i(u, o)) {
            o += 7;
            let v, _;
            [v, _, o] = r(u, o + 1), _.indexOf("&") === -1 && (s[c(v)] = {
              regx: RegExp(`&${v};`, "g"),
              val: _
            });
          } else d && l(u, o) || d && a(u, o) ? o += 8 : d && h(u, o) ? o += 9 : m = !0;
          p++, w = "";
        } else if (u[o] === ">") {
          if (m ? u[o - 1] === "-" && u[o - 2] === "-" && (m = !1, p--) : p--, p === 0)
            break;
        } else u[o] === "[" ? d = !0 : w += u[o];
      if (p !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: s, i: o };
  }
  function r(u, o) {
    let s = "";
    for (; o < u.length && u[o] !== "'" && u[o] !== '"'; o++)
      s += u[o];
    if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const p = u[o++];
    let d = "";
    for (; o < u.length && u[o] !== p; o++)
      d += u[o];
    return [s, d, o];
  }
  function i(u, o) {
    return u[o + 1] === "!" && u[o + 2] === "E" && u[o + 3] === "N" && u[o + 4] === "T" && u[o + 5] === "I" && u[o + 6] === "T" && u[o + 7] === "Y";
  }
  function l(u, o) {
    return u[o + 1] === "!" && u[o + 2] === "E" && u[o + 3] === "L" && u[o + 4] === "E" && u[o + 5] === "M" && u[o + 6] === "E" && u[o + 7] === "N" && u[o + 8] === "T";
  }
  function a(u, o) {
    return u[o + 1] === "!" && u[o + 2] === "A" && u[o + 3] === "T" && u[o + 4] === "T" && u[o + 5] === "L" && u[o + 6] === "I" && u[o + 7] === "S" && u[o + 8] === "T";
  }
  function h(u, o) {
    return u[o + 1] === "!" && u[o + 2] === "N" && u[o + 3] === "O" && u[o + 4] === "T" && u[o + 5] === "A" && u[o + 6] === "T" && u[o + 7] === "I" && u[o + 8] === "O" && u[o + 9] === "N";
  }
  function c(u) {
    if (n.isName(u))
      return u;
    throw new Error(`Invalid entity name ${u}`);
  }
  return fi = e, fi;
}
var hi, Ts;
function nh() {
  if (Ts) return hi;
  Ts = 1;
  const n = /^[-+]?0x[a-fA-F0-9]+$/, e = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
  const r = {
    hex: !0,
    leadingZeros: !0,
    decimalPoint: ".",
    eNotation: !0
    //skipLike: /regex/
  };
  function i(a, h = {}) {
    if (h = Object.assign({}, r, h), !a || typeof a != "string") return a;
    let c = a.trim();
    if (h.skipLike !== void 0 && h.skipLike.test(c)) return a;
    if (h.hex && n.test(c))
      return Number.parseInt(c, 16);
    {
      const u = e.exec(c);
      if (u) {
        const o = u[1], s = u[2];
        let p = l(u[3]);
        const d = u[4] || u[6];
        if (!h.leadingZeros && s.length > 0 && o && c[2] !== ".") return a;
        if (!h.leadingZeros && s.length > 0 && !o && c[1] !== ".") return a;
        {
          const m = Number(c), w = "" + m;
          return w.search(/[eE]/) !== -1 || d ? h.eNotation ? m : a : c.indexOf(".") !== -1 ? w === "0" && p === "" || w === p || o && w === "-" + p ? m : a : s ? p === w || o + p === w ? m : a : c === w || c === o + w ? m : a;
        }
      } else
        return a;
    }
  }
  function l(a) {
    return a && a.indexOf(".") !== -1 && (a = a.replace(/0+$/, ""), a === "." ? a = "0" : a[0] === "." ? a = "0" + a : a[a.length - 1] === "." && (a = a.substr(0, a.length - 1))), a;
  }
  return hi = i, hi;
}
var pi, As;
function iu() {
  if (As) return pi;
  As = 1;
  function n(e) {
    return typeof e == "function" ? e : Array.isArray(e) ? (r) => {
      for (const i of e)
        if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
          return !0;
    } : () => !1;
  }
  return pi = n, pi;
}
var di, Is;
function ih() {
  if (Is) return di;
  Is = 1;
  const n = ho(), e = th(), r = rh(), i = nh(), l = iu();
  class a {
    constructor(x) {
      this.options = x, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
        gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
        lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
        quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
      }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
        space: { regex: /&(nbsp|#160);/g, val: " " },
        // "lt" : { regex: /&(lt|#60);/g, val: "<" },
        // "gt" : { regex: /&(gt|#62);/g, val: ">" },
        // "amp" : { regex: /&(amp|#38);/g, val: "&" },
        // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
        // "apos" : { regex: /&(apos|#39);/g, val: "'" },
        cent: { regex: /&(cent|#162);/g, val: "¢" },
        pound: { regex: /&(pound|#163);/g, val: "£" },
        yen: { regex: /&(yen|#165);/g, val: "¥" },
        euro: { regex: /&(euro|#8364);/g, val: "€" },
        copyright: { regex: /&(copy|#169);/g, val: "©" },
        reg: { regex: /&(reg|#174);/g, val: "®" },
        inr: { regex: /&(inr|#8377);/g, val: "₹" },
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (C, P) => String.fromCharCode(Number.parseInt(P, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (C, P) => String.fromCharCode(Number.parseInt(P, 16)) }
      }, this.addExternalEntities = h, this.parseXml = p, this.parseTextData = c, this.resolveNameSpace = u, this.buildAttributesMap = s, this.isItStopNode = v, this.replaceEntitiesValue = m, this.readStopNodeData = I, this.saveTextToParentTag = w, this.addChild = d, this.ignoreAttributesFn = l(this.options.ignoreAttributes);
    }
  }
  function h(T) {
    const x = Object.keys(T);
    for (let C = 0; C < x.length; C++) {
      const P = x[C];
      this.lastEntities[P] = {
        regex: new RegExp("&" + P + ";", "g"),
        val: T[P]
      };
    }
  }
  function c(T, x, C, P, k, j, D) {
    if (T !== void 0 && (this.options.trimValues && !P && (T = T.trim()), T.length > 0)) {
      D || (T = this.replaceEntitiesValue(T));
      const B = this.options.tagValueProcessor(x, T, C, k, j);
      return B == null ? T : typeof B != typeof T || B !== T ? B : this.options.trimValues ? S(T, this.options.parseTagValue, this.options.numberParseOptions) : T.trim() === T ? S(T, this.options.parseTagValue, this.options.numberParseOptions) : T;
    }
  }
  function u(T) {
    if (this.options.removeNSPrefix) {
      const x = T.split(":"), C = T.charAt(0) === "/" ? "/" : "";
      if (x[0] === "xmlns")
        return "";
      x.length === 2 && (T = C + x[1]);
    }
    return T;
  }
  const o = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function s(T, x, C) {
    if (this.options.ignoreAttributes !== !0 && typeof T == "string") {
      const P = n.getAllMatches(T, o), k = P.length, j = {};
      for (let D = 0; D < k; D++) {
        const B = this.resolveNameSpace(P[D][1]);
        if (this.ignoreAttributesFn(B, x))
          continue;
        let $ = P[D][4], q = this.options.attributeNamePrefix + B;
        if (B.length)
          if (this.options.transformAttributeName && (q = this.options.transformAttributeName(q)), q === "__proto__" && (q = "#__proto__"), $ !== void 0) {
            this.options.trimValues && ($ = $.trim()), $ = this.replaceEntitiesValue($);
            const V = this.options.attributeValueProcessor(B, $, x);
            V == null ? j[q] = $ : typeof V != typeof $ || V !== $ ? j[q] = V : j[q] = S(
              $,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          } else this.options.allowBooleanAttributes && (j[q] = !0);
      }
      if (!Object.keys(j).length)
        return;
      if (this.options.attributesGroupName) {
        const D = {};
        return D[this.options.attributesGroupName] = j, D;
      }
      return j;
    }
  }
  const p = function(T) {
    T = T.replace(/\r\n?/g, `
`);
    const x = new e("!xml");
    let C = x, P = "", k = "";
    for (let j = 0; j < T.length; j++)
      if (T[j] === "<")
        if (T[j + 1] === "/") {
          const B = A(T, ">", j, "Closing Tag is not closed.");
          let $ = T.substring(j + 2, B).trim();
          if (this.options.removeNSPrefix) {
            const oe = $.indexOf(":");
            oe !== -1 && ($ = $.substr(oe + 1));
          }
          this.options.transformTagName && ($ = this.options.transformTagName($)), C && (P = this.saveTextToParentTag(P, C, k));
          const q = k.substring(k.lastIndexOf(".") + 1);
          if ($ && this.options.unpairedTags.indexOf($) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${$}>`);
          let V = 0;
          q && this.options.unpairedTags.indexOf(q) !== -1 ? (V = k.lastIndexOf(".", k.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : V = k.lastIndexOf("."), k = k.substring(0, V), C = this.tagsNodeStack.pop(), P = "", j = B;
        } else if (T[j + 1] === "?") {
          let B = E(T, j, !1, "?>");
          if (!B) throw new Error("Pi Tag is not closed.");
          if (P = this.saveTextToParentTag(P, C, k), !(this.options.ignoreDeclaration && B.tagName === "?xml" || this.options.ignorePiTags)) {
            const $ = new e(B.tagName);
            $.add(this.options.textNodeName, ""), B.tagName !== B.tagExp && B.attrExpPresent && ($[":@"] = this.buildAttributesMap(B.tagExp, k, B.tagName)), this.addChild(C, $, k);
          }
          j = B.closeIndex + 1;
        } else if (T.substr(j + 1, 3) === "!--") {
          const B = A(T, "-->", j + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const $ = T.substring(j + 4, B - 2);
            P = this.saveTextToParentTag(P, C, k), C.add(this.options.commentPropName, [{ [this.options.textNodeName]: $ }]);
          }
          j = B;
        } else if (T.substr(j + 1, 2) === "!D") {
          const B = r(T, j);
          this.docTypeEntities = B.entities, j = B.i;
        } else if (T.substr(j + 1, 2) === "![") {
          const B = A(T, "]]>", j, "CDATA is not closed.") - 2, $ = T.substring(j + 9, B);
          P = this.saveTextToParentTag(P, C, k);
          let q = this.parseTextData($, C.tagname, k, !0, !1, !0, !0);
          q == null && (q = ""), this.options.cdataPropName ? C.add(this.options.cdataPropName, [{ [this.options.textNodeName]: $ }]) : C.add(this.options.textNodeName, q), j = B + 2;
        } else {
          let B = E(T, j, this.options.removeNSPrefix), $ = B.tagName;
          const q = B.rawTagName;
          let V = B.tagExp, oe = B.attrExpPresent, ne = B.closeIndex;
          this.options.transformTagName && ($ = this.options.transformTagName($)), C && P && C.tagname !== "!xml" && (P = this.saveTextToParentTag(P, C, k, !1));
          const te = C;
          if (te && this.options.unpairedTags.indexOf(te.tagname) !== -1 && (C = this.tagsNodeStack.pop(), k = k.substring(0, k.lastIndexOf("."))), $ !== x.tagname && (k += k ? "." + $ : $), this.isItStopNode(this.options.stopNodes, k, $)) {
            let ae = "";
            if (V.length > 0 && V.lastIndexOf("/") === V.length - 1)
              $[$.length - 1] === "/" ? ($ = $.substr(0, $.length - 1), k = k.substr(0, k.length - 1), V = $) : V = V.substr(0, V.length - 1), j = B.closeIndex;
            else if (this.options.unpairedTags.indexOf($) !== -1)
              j = B.closeIndex;
            else {
              const re = this.readStopNodeData(T, q, ne + 1);
              if (!re) throw new Error(`Unexpected end of ${q}`);
              j = re.i, ae = re.tagContent;
            }
            const fe = new e($);
            $ !== V && oe && (fe[":@"] = this.buildAttributesMap(V, k, $)), ae && (ae = this.parseTextData(ae, $, k, !0, oe, !0, !0)), k = k.substr(0, k.lastIndexOf(".")), fe.add(this.options.textNodeName, ae), this.addChild(C, fe, k);
          } else {
            if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) {
              $[$.length - 1] === "/" ? ($ = $.substr(0, $.length - 1), k = k.substr(0, k.length - 1), V = $) : V = V.substr(0, V.length - 1), this.options.transformTagName && ($ = this.options.transformTagName($));
              const ae = new e($);
              $ !== V && oe && (ae[":@"] = this.buildAttributesMap(V, k, $)), this.addChild(C, ae, k), k = k.substr(0, k.lastIndexOf("."));
            } else {
              const ae = new e($);
              this.tagsNodeStack.push(C), $ !== V && oe && (ae[":@"] = this.buildAttributesMap(V, k, $)), this.addChild(C, ae, k), C = ae;
            }
            P = "", j = ne;
          }
        }
      else
        P += T[j];
    return x.child;
  };
  function d(T, x, C) {
    const P = this.options.updateTag(x.tagname, C, x[":@"]);
    P === !1 || (typeof P == "string" && (x.tagname = P), T.addChild(x));
  }
  const m = function(T) {
    if (this.options.processEntities) {
      for (let x in this.docTypeEntities) {
        const C = this.docTypeEntities[x];
        T = T.replace(C.regx, C.val);
      }
      for (let x in this.lastEntities) {
        const C = this.lastEntities[x];
        T = T.replace(C.regex, C.val);
      }
      if (this.options.htmlEntities)
        for (let x in this.htmlEntities) {
          const C = this.htmlEntities[x];
          T = T.replace(C.regex, C.val);
        }
      T = T.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return T;
  };
  function w(T, x, C, P) {
    return T && (P === void 0 && (P = Object.keys(x.child).length === 0), T = this.parseTextData(
      T,
      x.tagname,
      C,
      !1,
      x[":@"] ? Object.keys(x[":@"]).length !== 0 : !1,
      P
    ), T !== void 0 && T !== "" && x.add(this.options.textNodeName, T), T = ""), T;
  }
  function v(T, x, C) {
    const P = "*." + C;
    for (const k in T) {
      const j = T[k];
      if (P === j || x === j) return !0;
    }
    return !1;
  }
  function _(T, x, C = ">") {
    let P, k = "";
    for (let j = x; j < T.length; j++) {
      let D = T[j];
      if (P)
        D === P && (P = "");
      else if (D === '"' || D === "'")
        P = D;
      else if (D === C[0])
        if (C[1]) {
          if (T[j + 1] === C[1])
            return {
              data: k,
              index: j
            };
        } else
          return {
            data: k,
            index: j
          };
      else D === "	" && (D = " ");
      k += D;
    }
  }
  function A(T, x, C, P) {
    const k = T.indexOf(x, C);
    if (k === -1)
      throw new Error(P);
    return k + x.length - 1;
  }
  function E(T, x, C, P = ">") {
    const k = _(T, x + 1, P);
    if (!k) return;
    let j = k.data;
    const D = k.index, B = j.search(/\s/);
    let $ = j, q = !0;
    B !== -1 && ($ = j.substring(0, B), j = j.substring(B + 1).trimStart());
    const V = $;
    if (C) {
      const oe = $.indexOf(":");
      oe !== -1 && ($ = $.substr(oe + 1), q = $ !== k.data.substr(oe + 1));
    }
    return {
      tagName: $,
      tagExp: j,
      closeIndex: D,
      attrExpPresent: q,
      rawTagName: V
    };
  }
  function I(T, x, C) {
    const P = C;
    let k = 1;
    for (; C < T.length; C++)
      if (T[C] === "<")
        if (T[C + 1] === "/") {
          const j = A(T, ">", C, `${x} is not closed`);
          if (T.substring(C + 2, j).trim() === x && (k--, k === 0))
            return {
              tagContent: T.substring(P, C),
              i: j
            };
          C = j;
        } else if (T[C + 1] === "?")
          C = A(T, "?>", C + 1, "StopNode is not closed.");
        else if (T.substr(C + 1, 3) === "!--")
          C = A(T, "-->", C + 3, "StopNode is not closed.");
        else if (T.substr(C + 1, 2) === "![")
          C = A(T, "]]>", C, "StopNode is not closed.") - 2;
        else {
          const j = E(T, C, ">");
          j && ((j && j.tagName) === x && j.tagExp[j.tagExp.length - 1] !== "/" && k++, C = j.closeIndex);
        }
  }
  function S(T, x, C) {
    if (x && typeof T == "string") {
      const P = T.trim();
      return P === "true" ? !0 : P === "false" ? !1 : i(T, C);
    } else
      return n.isExist(T) ? T : "";
  }
  return di = a, di;
}
var gi = {}, _s;
function oh() {
  if (_s) return gi;
  _s = 1;
  function n(a, h) {
    return e(a, h);
  }
  function e(a, h, c) {
    let u;
    const o = {};
    for (let s = 0; s < a.length; s++) {
      const p = a[s], d = r(p);
      let m = "";
      if (c === void 0 ? m = d : m = c + "." + d, d === h.textNodeName)
        u === void 0 ? u = p[d] : u += "" + p[d];
      else {
        if (d === void 0)
          continue;
        if (p[d]) {
          let w = e(p[d], h, m);
          const v = l(w, h);
          p[":@"] ? i(w, p[":@"], m, h) : Object.keys(w).length === 1 && w[h.textNodeName] !== void 0 && !h.alwaysCreateTextNode ? w = w[h.textNodeName] : Object.keys(w).length === 0 && (h.alwaysCreateTextNode ? w[h.textNodeName] = "" : w = ""), o[d] !== void 0 && o.hasOwnProperty(d) ? (Array.isArray(o[d]) || (o[d] = [o[d]]), o[d].push(w)) : h.isArray(d, m, v) ? o[d] = [w] : o[d] = w;
        }
      }
    }
    return typeof u == "string" ? u.length > 0 && (o[h.textNodeName] = u) : u !== void 0 && (o[h.textNodeName] = u), o;
  }
  function r(a) {
    const h = Object.keys(a);
    for (let c = 0; c < h.length; c++) {
      const u = h[c];
      if (u !== ":@") return u;
    }
  }
  function i(a, h, c, u) {
    if (h) {
      const o = Object.keys(h), s = o.length;
      for (let p = 0; p < s; p++) {
        const d = o[p];
        u.isArray(d, c + "." + d, !0, !0) ? a[d] = [h[d]] : a[d] = h[d];
      }
    }
  }
  function l(a, h) {
    const { textNodeName: c } = h, u = Object.keys(a).length;
    return !!(u === 0 || u === 1 && (a[c] || typeof a[c] == "boolean" || a[c] === 0));
  }
  return gi.prettify = n, gi;
}
var mi, Os;
function sh() {
  if (Os) return mi;
  Os = 1;
  const { buildOptions: n } = eh(), e = ih(), { prettify: r } = oh(), i = nu();
  class l {
    constructor(h) {
      this.externalEntities = {}, this.options = n(h);
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(h, c) {
      if (typeof h != "string") if (h.toString)
        h = h.toString();
      else
        throw new Error("XML data is accepted in String or Bytes[] form.");
      if (c) {
        c === !0 && (c = {});
        const s = i.validate(h, c);
        if (s !== !0)
          throw Error(`${s.err.msg}:${s.err.line}:${s.err.col}`);
      }
      const u = new e(this.options);
      u.addExternalEntities(this.externalEntities);
      const o = u.parseXml(h);
      return this.options.preserveOrder || o === void 0 ? o : r(o, this.options);
    }
    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(h, c) {
      if (c.indexOf("&") !== -1)
        throw new Error("Entity value can't have '&'");
      if (h.indexOf("&") !== -1 || h.indexOf(";") !== -1)
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (c === "&")
        throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[h] = c;
    }
  }
  return mi = l, mi;
}
var wi, Rs;
function ah() {
  if (Rs) return wi;
  Rs = 1;
  const n = `
`;
  function e(c, u) {
    let o = "";
    return u.format && u.indentBy.length > 0 && (o = n), r(c, u, "", o);
  }
  function r(c, u, o, s) {
    let p = "", d = !1;
    for (let m = 0; m < c.length; m++) {
      const w = c[m], v = i(w);
      if (v === void 0) continue;
      let _ = "";
      if (o.length === 0 ? _ = v : _ = `${o}.${v}`, v === u.textNodeName) {
        let T = w[v];
        a(_, u) || (T = u.tagValueProcessor(v, T), T = h(T, u)), d && (p += s), p += T, d = !1;
        continue;
      } else if (v === u.cdataPropName) {
        d && (p += s), p += `<![CDATA[${w[v][0][u.textNodeName]}]]>`, d = !1;
        continue;
      } else if (v === u.commentPropName) {
        p += s + `<!--${w[v][0][u.textNodeName]}-->`, d = !0;
        continue;
      } else if (v[0] === "?") {
        const T = l(w[":@"], u), x = v === "?xml" ? "" : s;
        let C = w[v][0][u.textNodeName];
        C = C.length !== 0 ? " " + C : "", p += x + `<${v}${C}${T}?>`, d = !0;
        continue;
      }
      let A = s;
      A !== "" && (A += u.indentBy);
      const E = l(w[":@"], u), I = s + `<${v}${E}`, S = r(w[v], u, _, A);
      u.unpairedTags.indexOf(v) !== -1 ? u.suppressUnpairedNode ? p += I + ">" : p += I + "/>" : (!S || S.length === 0) && u.suppressEmptyNode ? p += I + "/>" : S && S.endsWith(">") ? p += I + `>${S}${s}</${v}>` : (p += I + ">", S && s !== "" && (S.includes("/>") || S.includes("</")) ? p += s + u.indentBy + S + s : p += S, p += `</${v}>`), d = !0;
    }
    return p;
  }
  function i(c) {
    const u = Object.keys(c);
    for (let o = 0; o < u.length; o++) {
      const s = u[o];
      if (c.hasOwnProperty(s) && s !== ":@")
        return s;
    }
  }
  function l(c, u) {
    let o = "";
    if (c && !u.ignoreAttributes)
      for (let s in c) {
        if (!c.hasOwnProperty(s)) continue;
        let p = u.attributeValueProcessor(s, c[s]);
        p = h(p, u), p === !0 && u.suppressBooleanAttributes ? o += ` ${s.substr(u.attributeNamePrefix.length)}` : o += ` ${s.substr(u.attributeNamePrefix.length)}="${p}"`;
      }
    return o;
  }
  function a(c, u) {
    c = c.substr(0, c.length - u.textNodeName.length - 1);
    let o = c.substr(c.lastIndexOf(".") + 1);
    for (let s in u.stopNodes)
      if (u.stopNodes[s] === c || u.stopNodes[s] === "*." + o) return !0;
    return !1;
  }
  function h(c, u) {
    if (c && c.length > 0 && u.processEntities)
      for (let o = 0; o < u.entities.length; o++) {
        const s = u.entities[o];
        c = c.replace(s.regex, s.val);
      }
    return c;
  }
  return wi = e, wi;
}
var yi, xs;
function uh() {
  if (xs) return yi;
  xs = 1;
  const n = ah(), e = iu(), r = {
    attributeNamePrefix: "@_",
    attributesGroupName: !1,
    textNodeName: "#text",
    ignoreAttributes: !0,
    cdataPropName: !1,
    format: !1,
    indentBy: "  ",
    suppressEmptyNode: !1,
    suppressUnpairedNode: !0,
    suppressBooleanAttributes: !0,
    tagValueProcessor: function(c, u) {
      return u;
    },
    attributeValueProcessor: function(c, u) {
      return u;
    },
    preserveOrder: !1,
    commentPropName: !1,
    unpairedTags: [],
    entities: [
      { regex: new RegExp("&", "g"), val: "&amp;" },
      //it must be on top
      { regex: new RegExp(">", "g"), val: "&gt;" },
      { regex: new RegExp("<", "g"), val: "&lt;" },
      { regex: new RegExp("'", "g"), val: "&apos;" },
      { regex: new RegExp('"', "g"), val: "&quot;" }
    ],
    processEntities: !0,
    stopNodes: [],
    // transformTagName: false,
    // transformAttributeName: false,
    oneListGroup: !1
  };
  function i(c) {
    this.options = Object.assign({}, r, c), this.options.ignoreAttributes === !0 || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.ignoreAttributesFn = e(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = h), this.processTextOrObjNode = l, this.options.format ? (this.indentate = a, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  i.prototype.build = function(c) {
    return this.options.preserveOrder ? n(c, this.options) : (Array.isArray(c) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (c = {
      [this.options.arrayNodeName]: c
    }), this.j2x(c, 0, []).val);
  }, i.prototype.j2x = function(c, u, o) {
    let s = "", p = "";
    const d = o.join(".");
    for (let m in c)
      if (Object.prototype.hasOwnProperty.call(c, m))
        if (typeof c[m] > "u")
          this.isAttribute(m) && (p += "");
        else if (c[m] === null)
          this.isAttribute(m) ? p += "" : m[0] === "?" ? p += this.indentate(u) + "<" + m + "?" + this.tagEndChar : p += this.indentate(u) + "<" + m + "/" + this.tagEndChar;
        else if (c[m] instanceof Date)
          p += this.buildTextValNode(c[m], m, "", u);
        else if (typeof c[m] != "object") {
          const w = this.isAttribute(m);
          if (w && !this.ignoreAttributesFn(w, d))
            s += this.buildAttrPairStr(w, "" + c[m]);
          else if (!w)
            if (m === this.options.textNodeName) {
              let v = this.options.tagValueProcessor(m, "" + c[m]);
              p += this.replaceEntitiesValue(v);
            } else
              p += this.buildTextValNode(c[m], m, "", u);
        } else if (Array.isArray(c[m])) {
          const w = c[m].length;
          let v = "", _ = "";
          for (let A = 0; A < w; A++) {
            const E = c[m][A];
            if (!(typeof E > "u")) if (E === null)
              m[0] === "?" ? p += this.indentate(u) + "<" + m + "?" + this.tagEndChar : p += this.indentate(u) + "<" + m + "/" + this.tagEndChar;
            else if (typeof E == "object")
              if (this.options.oneListGroup) {
                const I = this.j2x(E, u + 1, o.concat(m));
                v += I.val, this.options.attributesGroupName && E.hasOwnProperty(this.options.attributesGroupName) && (_ += I.attrStr);
              } else
                v += this.processTextOrObjNode(E, m, u, o);
            else if (this.options.oneListGroup) {
              let I = this.options.tagValueProcessor(m, E);
              I = this.replaceEntitiesValue(I), v += I;
            } else
              v += this.buildTextValNode(E, m, "", u);
          }
          this.options.oneListGroup && (v = this.buildObjectNode(v, m, _, u)), p += v;
        } else if (this.options.attributesGroupName && m === this.options.attributesGroupName) {
          const w = Object.keys(c[m]), v = w.length;
          for (let _ = 0; _ < v; _++)
            s += this.buildAttrPairStr(w[_], "" + c[m][w[_]]);
        } else
          p += this.processTextOrObjNode(c[m], m, u, o);
    return { attrStr: s, val: p };
  }, i.prototype.buildAttrPairStr = function(c, u) {
    return u = this.options.attributeValueProcessor(c, "" + u), u = this.replaceEntitiesValue(u), this.options.suppressBooleanAttributes && u === "true" ? " " + c : " " + c + '="' + u + '"';
  };
  function l(c, u, o, s) {
    const p = this.j2x(c, o + 1, s.concat(u));
    return c[this.options.textNodeName] !== void 0 && Object.keys(c).length === 1 ? this.buildTextValNode(c[this.options.textNodeName], u, p.attrStr, o) : this.buildObjectNode(p.val, u, p.attrStr, o);
  }
  i.prototype.buildObjectNode = function(c, u, o, s) {
    if (c === "")
      return u[0] === "?" ? this.indentate(s) + "<" + u + o + "?" + this.tagEndChar : this.indentate(s) + "<" + u + o + this.closeTag(u) + this.tagEndChar;
    {
      let p = "</" + u + this.tagEndChar, d = "";
      return u[0] === "?" && (d = "?", p = ""), (o || o === "") && c.indexOf("<") === -1 ? this.indentate(s) + "<" + u + o + d + ">" + c + p : this.options.commentPropName !== !1 && u === this.options.commentPropName && d.length === 0 ? this.indentate(s) + `<!--${c}-->` + this.newLine : this.indentate(s) + "<" + u + o + d + this.tagEndChar + c + this.indentate(s) + p;
    }
  }, i.prototype.closeTag = function(c) {
    let u = "";
    return this.options.unpairedTags.indexOf(c) !== -1 ? this.options.suppressUnpairedNode || (u = "/") : this.options.suppressEmptyNode ? u = "/" : u = `></${c}`, u;
  }, i.prototype.buildTextValNode = function(c, u, o, s) {
    if (this.options.cdataPropName !== !1 && u === this.options.cdataPropName)
      return this.indentate(s) + `<![CDATA[${c}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && u === this.options.commentPropName)
      return this.indentate(s) + `<!--${c}-->` + this.newLine;
    if (u[0] === "?")
      return this.indentate(s) + "<" + u + o + "?" + this.tagEndChar;
    {
      let p = this.options.tagValueProcessor(u, c);
      return p = this.replaceEntitiesValue(p), p === "" ? this.indentate(s) + "<" + u + o + this.closeTag(u) + this.tagEndChar : this.indentate(s) + "<" + u + o + ">" + p + "</" + u + this.tagEndChar;
    }
  }, i.prototype.replaceEntitiesValue = function(c) {
    if (c && c.length > 0 && this.options.processEntities)
      for (let u = 0; u < this.options.entities.length; u++) {
        const o = this.options.entities[u];
        c = c.replace(o.regex, o.val);
      }
    return c;
  };
  function a(c) {
    return this.options.indentBy.repeat(c);
  }
  function h(c) {
    return c.startsWith(this.options.attributeNamePrefix) && c !== this.options.textNodeName ? c.substr(this.attrPrefixLen) : !1;
  }
  return yi = i, yi;
}
var Ei, Ss;
function lh() {
  if (Ss) return Ei;
  Ss = 1;
  const n = nu(), e = sh(), r = uh();
  return Ei = {
    XMLParser: e,
    XMLValidator: n,
    XMLBuilder: r
  }, Ei;
}
lh();
var vi, Cs;
function ou() {
  return Cs || (Cs = 1, vi = typeof Xe == "object" && Xe.env && Xe.env.NODE_DEBUG && /\bsemver\b/i.test(Xe.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
  }), vi;
}
var bi, Ls;
function su() {
  if (Ls) return bi;
  Ls = 1;
  const n = "2.0.0", e = 256, r = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, l = e - 6;
  return bi = {
    MAX_LENGTH: e,
    MAX_SAFE_COMPONENT_LENGTH: i,
    MAX_SAFE_BUILD_LENGTH: l,
    MAX_SAFE_INTEGER: r,
    RELEASE_TYPES: [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ],
    SEMVER_SPEC_VERSION: n,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  }, bi;
}
var gn = { exports: {} }, Ps;
function ch() {
  return Ps || (Ps = 1, function(n, e) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: l
    } = su(), a = ou();
    e = n.exports = {};
    const h = e.re = [], c = e.safeRe = [], u = e.src = [], o = e.t = {};
    let s = 0;
    const p = "[a-zA-Z0-9-]", d = [
      ["\\s", 1],
      ["\\d", l],
      [p, i]
    ], m = (v) => {
      for (const [_, A] of d)
        v = v.split(`${_}*`).join(`${_}{0,${A}}`).split(`${_}+`).join(`${_}{1,${A}}`);
      return v;
    }, w = (v, _, A) => {
      const E = m(_), I = s++;
      a(v, I, _), o[v] = I, u[I] = _, h[I] = new RegExp(_, A ? "g" : void 0), c[I] = new RegExp(E, A ? "g" : void 0);
    };
    w("NUMERICIDENTIFIER", "0|[1-9]\\d*"), w("NUMERICIDENTIFIERLOOSE", "\\d+"), w("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`), w("MAINVERSION", `(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})`), w("MAINVERSIONLOOSE", `(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})`), w("PRERELEASEIDENTIFIER", `(?:${u[o.NUMERICIDENTIFIER]}|${u[o.NONNUMERICIDENTIFIER]})`), w("PRERELEASEIDENTIFIERLOOSE", `(?:${u[o.NUMERICIDENTIFIERLOOSE]}|${u[o.NONNUMERICIDENTIFIER]})`), w("PRERELEASE", `(?:-(${u[o.PRERELEASEIDENTIFIER]}(?:\\.${u[o.PRERELEASEIDENTIFIER]})*))`), w("PRERELEASELOOSE", `(?:-?(${u[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[o.PRERELEASEIDENTIFIERLOOSE]})*))`), w("BUILDIDENTIFIER", `${p}+`), w("BUILD", `(?:\\+(${u[o.BUILDIDENTIFIER]}(?:\\.${u[o.BUILDIDENTIFIER]})*))`), w("FULLPLAIN", `v?${u[o.MAINVERSION]}${u[o.PRERELEASE]}?${u[o.BUILD]}?`), w("FULL", `^${u[o.FULLPLAIN]}$`), w("LOOSEPLAIN", `[v=\\s]*${u[o.MAINVERSIONLOOSE]}${u[o.PRERELEASELOOSE]}?${u[o.BUILD]}?`), w("LOOSE", `^${u[o.LOOSEPLAIN]}$`), w("GTLT", "((?:<|>)?=?)"), w("XRANGEIDENTIFIERLOOSE", `${u[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), w("XRANGEIDENTIFIER", `${u[o.NUMERICIDENTIFIER]}|x|X|\\*`), w("XRANGEPLAIN", `[v=\\s]*(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:${u[o.PRERELEASE]})?${u[o.BUILD]}?)?)?`), w("XRANGEPLAINLOOSE", `[v=\\s]*(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:${u[o.PRERELEASELOOSE]})?${u[o.BUILD]}?)?)?`), w("XRANGE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAIN]}$`), w("XRANGELOOSE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAINLOOSE]}$`), w("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), w("COERCE", `${u[o.COERCEPLAIN]}(?:$|[^\\d])`), w("COERCEFULL", u[o.COERCEPLAIN] + `(?:${u[o.PRERELEASE]})?(?:${u[o.BUILD]})?(?:$|[^\\d])`), w("COERCERTL", u[o.COERCE], !0), w("COERCERTLFULL", u[o.COERCEFULL], !0), w("LONETILDE", "(?:~>?)"), w("TILDETRIM", `(\\s*)${u[o.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", w("TILDE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAIN]}$`), w("TILDELOOSE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAINLOOSE]}$`), w("LONECARET", "(?:\\^)"), w("CARETTRIM", `(\\s*)${u[o.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", w("CARET", `^${u[o.LONECARET]}${u[o.XRANGEPLAIN]}$`), w("CARETLOOSE", `^${u[o.LONECARET]}${u[o.XRANGEPLAINLOOSE]}$`), w("COMPARATORLOOSE", `^${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]})$|^$`), w("COMPARATOR", `^${u[o.GTLT]}\\s*(${u[o.FULLPLAIN]})$|^$`), w("COMPARATORTRIM", `(\\s*)${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]}|${u[o.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", w("HYPHENRANGE", `^\\s*(${u[o.XRANGEPLAIN]})\\s+-\\s+(${u[o.XRANGEPLAIN]})\\s*$`), w("HYPHENRANGELOOSE", `^\\s*(${u[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[o.XRANGEPLAINLOOSE]})\\s*$`), w("STAR", "(<|>)?=?\\s*\\*"), w("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), w("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }(gn, gn.exports)), gn.exports;
}
var Ni, $s;
function fh() {
  if ($s) return Ni;
  $s = 1;
  const n = Object.freeze({ loose: !0 }), e = Object.freeze({});
  return Ni = (i) => i ? typeof i != "object" ? n : i : e, Ni;
}
var Ti, ks;
function hh() {
  if (ks) return Ti;
  ks = 1;
  const n = /^[0-9]+$/, e = (i, l) => {
    const a = n.test(i), h = n.test(l);
    return a && h && (i = +i, l = +l), i === l ? 0 : a && !h ? -1 : h && !a ? 1 : i < l ? -1 : 1;
  };
  return Ti = {
    compareIdentifiers: e,
    rcompareIdentifiers: (i, l) => e(l, i)
  }, Ti;
}
var Ai, Fs;
function au() {
  if (Fs) return Ai;
  Fs = 1;
  const n = ou(), { MAX_LENGTH: e, MAX_SAFE_INTEGER: r } = su(), { safeRe: i, t: l } = ch(), a = fh(), { compareIdentifiers: h } = hh();
  class c {
    constructor(o, s) {
      if (s = a(s), o instanceof c) {
        if (o.loose === !!s.loose && o.includePrerelease === !!s.includePrerelease)
          return o;
        o = o.version;
      } else if (typeof o != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof o}".`);
      if (o.length > e)
        throw new TypeError(
          `version is longer than ${e} characters`
        );
      n("SemVer", o, s), this.options = s, this.loose = !!s.loose, this.includePrerelease = !!s.includePrerelease;
      const p = o.trim().match(s.loose ? i[l.LOOSE] : i[l.FULL]);
      if (!p)
        throw new TypeError(`Invalid Version: ${o}`);
      if (this.raw = o, this.major = +p[1], this.minor = +p[2], this.patch = +p[3], this.major > r || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > r || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > r || this.patch < 0)
        throw new TypeError("Invalid patch version");
      p[4] ? this.prerelease = p[4].split(".").map((d) => {
        if (/^[0-9]+$/.test(d)) {
          const m = +d;
          if (m >= 0 && m < r)
            return m;
        }
        return d;
      }) : this.prerelease = [], this.build = p[5] ? p[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(o) {
      if (n("SemVer.compare", this.version, this.options, o), !(o instanceof c)) {
        if (typeof o == "string" && o === this.version)
          return 0;
        o = new c(o, this.options);
      }
      return o.version === this.version ? 0 : this.compareMain(o) || this.comparePre(o);
    }
    compareMain(o) {
      return o instanceof c || (o = new c(o, this.options)), h(this.major, o.major) || h(this.minor, o.minor) || h(this.patch, o.patch);
    }
    comparePre(o) {
      if (o instanceof c || (o = new c(o, this.options)), this.prerelease.length && !o.prerelease.length)
        return -1;
      if (!this.prerelease.length && o.prerelease.length)
        return 1;
      if (!this.prerelease.length && !o.prerelease.length)
        return 0;
      let s = 0;
      do {
        const p = this.prerelease[s], d = o.prerelease[s];
        if (n("prerelease compare", s, p, d), p === void 0 && d === void 0)
          return 0;
        if (d === void 0)
          return 1;
        if (p === void 0)
          return -1;
        if (p === d)
          continue;
        return h(p, d);
      } while (++s);
    }
    compareBuild(o) {
      o instanceof c || (o = new c(o, this.options));
      let s = 0;
      do {
        const p = this.build[s], d = o.build[s];
        if (n("build compare", s, p, d), p === void 0 && d === void 0)
          return 0;
        if (d === void 0)
          return 1;
        if (p === void 0)
          return -1;
        if (p === d)
          continue;
        return h(p, d);
      } while (++s);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(o, s, p) {
      switch (o) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", s, p);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", s, p);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", s, p), this.inc("pre", s, p);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", s, p), this.inc("pre", s, p);
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre": {
          const d = Number(p) ? 1 : 0;
          if (!s && p === !1)
            throw new Error("invalid increment argument: identifier is empty");
          if (this.prerelease.length === 0)
            this.prerelease = [d];
          else {
            let m = this.prerelease.length;
            for (; --m >= 0; )
              typeof this.prerelease[m] == "number" && (this.prerelease[m]++, m = -2);
            if (m === -1) {
              if (s === this.prerelease.join(".") && p === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(d);
            }
          }
          if (s) {
            let m = [s, d];
            p === !1 && (m = [s]), h(this.prerelease[0], s) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = m) : this.prerelease = m;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${o}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Ai = c, Ai;
}
var Ii, Ms;
function ph() {
  if (Ms) return Ii;
  Ms = 1;
  const n = au();
  return Ii = (r, i, l = !1) => {
    if (r instanceof n)
      return r;
    try {
      return new n(r, i);
    } catch (a) {
      if (!l)
        return null;
      throw a;
    }
  }, Ii;
}
var _i, Us;
function dh() {
  if (Us) return _i;
  Us = 1;
  const n = ph();
  return _i = (r, i) => {
    const l = n(r, i);
    return l ? l.version : null;
  }, _i;
}
dh();
var Oi, Bs;
function gh() {
  if (Bs) return Oi;
  Bs = 1;
  const n = au();
  return Oi = (r, i) => new n(r, i).major, Oi;
}
gh();
const Ds = function(n) {
  return Qf().registerEntry(n);
};
class Et {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: l,
    onCreate: a,
    fileModifiedTime: h,
    isNew: c,
    isLoaded: u,
    sameWindow: o,
    skipConfirmation: s,
    isPublicLink: p
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? Fe(r) : "",
      dir: l || "",
      onCreate: a,
      fileModifiedTime: h || null,
      isNew: c || !1,
      isLoaded: u || !1,
      sameWindow: o || !1,
      skipConfirmation: s || !1,
      isPublicLink: p || !1
    };
  }
  static async load({ fileName: e, dir: r } = {}) {
    const i = await window.fetch(
      `${window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile")}?filename=${encodeURIComponent(
        e
      )}&dir=${encodeURIComponent(r)}`,
      {
        method: "GET",
        headers: {
          requesttoken: window.OC.requestToken
        }
      }
    );
    if (i && i.ok)
      return await i.json();
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async loadPublic({ downloadUrl: e } = {}) {
    const r = await window.fetch(e, {
      method: "GET",
      headers: {
        requesttoken: window.OC.requestToken
      }
    });
    if (r && r.ok)
      return { filecontents: await r.text() };
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async save({ fileContent: e, name: r, fileModifiedTime: i, dir: l } = {}) {
    let a = `${l}${r}`;
    l !== "/" && (a = `${l}/${r}`);
    const h = await window.fetch(window.OC.generateUrl("/apps/files_linkeditor/ajax/savefile"), {
      method: "PUT",
      body: JSON.stringify({
        filecontents: e,
        path: a,
        mtime: i
      }),
      headers: {
        requesttoken: window.OC.requestToken,
        "Content-Type": "application/json"
      }
    });
    if (h && h.ok)
      return !0;
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static userCanEdit(e) {
    var r, i, l, a;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((i = (r = window.FileList) == null ? void 0 : r.getDirectoryPermissions) == null ? void 0 : i.call(r)) || window.OC.PERMISSION_UPDATE === ((a = (l = window.FileList) == null ? void 0 : l.getDirectoryPermissions) == null ? void 0 : a.call(l))) || e >= je.UPDATE;
  }
}
const ot = fa(""), It = fa(Et.getFileConfig());
function js(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, l, a, h, c = (
    /*file*/
    n[0].url + ""
  ), u, o, s;
  return {
    c() {
      e = ue("p"), i = Ge(r), l = be(), a = ue("em"), h = ue("a"), u = Ge(c), H(h, "href", o = Fe(
        /*file*/
        n[0].url
      )), H(h, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), H(e, "class", "urldisplay");
    },
    m(p, d) {
      me(p, e, d), ee(e, i), ee(e, l), ee(e, a), ee(a, h), ee(h, u);
    },
    p(p, d) {
      d & /*file*/
      1 && c !== (c = /*file*/
      p[0].url + "") && Xi(u, c), d & /*file*/
      1 && o !== (o = Fe(
        /*file*/
        p[0].url
      )) && H(h, "href", o), d & /*file*/
      1 && s !== (s = /*file*/
      p[0].sameWindow ? "_self" : "_blank") && H(h, "target", s);
    },
    d(p) {
      p && de(e);
    }
  };
}
function Gs(n) {
  let e = Et.userCanEdit(
    /*file*/
    n[0].permissions
  ) && !/*file*/
  n[0].isPublicLink, r, i, l = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), a, h, c, u = e && qs(n);
  return {
    c() {
      u && u.c(), r = be(), i = ue("a"), a = Ge(l), H(i, "href", h = Fe(
        /*file*/
        n[0].url
      )), H(i, "target", c = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), H(i, "class", "button primary");
    },
    m(o, s) {
      u && u.m(o, s), me(o, r, s), me(o, i, s), ee(i, a);
    },
    p(o, s) {
      s & /*file*/
      1 && (e = Et.userCanEdit(
        /*file*/
        o[0].permissions
      ) && !/*file*/
      o[0].isPublicLink), e ? u ? u.p(o, s) : (u = qs(o), u.c(), u.m(r.parentNode, r)) : u && (u.d(1), u = null), s & /*file*/
      1 && h !== (h = Fe(
        /*file*/
        o[0].url
      )) && H(i, "href", h), s & /*file*/
      1 && c !== (c = /*file*/
      o[0].sameWindow ? "_self" : "_blank") && H(i, "target", c);
    },
    d(o) {
      o && (de(r), de(i)), u && u.d(o);
    }
  };
}
function qs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, l, a;
  return {
    c() {
      e = ue("a"), i = Ge(r), H(e, "href", window.location.href), H(e, "class", "button");
    },
    m(h, c) {
      me(h, e, c), ee(e, i), l || (a = st(e, "click", Wt(
        /*click_handler_1*/
        n[4]
      )), l = !0);
    },
    p: Mt,
    d(h) {
      h && de(e), l = !1, a();
    }
  };
}
function mh(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), l, a, h, c, u, o = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, p, d, m, w = !/*loading*/
  n[1] && js(n), v = !/*loading*/
  n[1] && Gs(n);
  return {
    c() {
      e = ue("div"), r = ue("h3"), l = Ge(i), a = be(), w && w.c(), h = be(), c = ue("div"), u = ue("a"), s = Ge(o), p = be(), v && v.c(), H(e, "class", "edit push-bottom"), H(u, "href", window.location.href), H(u, "class", "button"), H(c, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(_, A) {
      me(_, e, A), ee(e, r), ee(r, l), ee(e, a), w && w.m(e, null), me(_, h, A), me(_, c, A), ee(c, u), ee(u, s), ee(c, p), v && v.m(c, null), d || (m = st(u, "click", Wt(
        /*click_handler*/
        n[3]
      )), d = !0);
    },
    p(_, A) {
      A & /*file*/
      1 && i !== (i = /*file*/
      _[0].name + "") && Xi(l, i), /*loading*/
      _[1] ? w && (w.d(1), w = null) : w ? w.p(_, A) : (w = js(_), w.c(), w.m(e, null)), /*loading*/
      _[1] ? v && (v.d(1), v = null) : v ? v.p(_, A) : (v = Gs(_), v.c(), v.m(c, null));
    },
    d(_) {
      _ && (de(e), de(h), de(c)), w && w.d(), v && v.d(), d = !1, m();
    }
  };
}
function wh(n) {
  let e, r;
  return e = new Hi({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [mh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, l) {
      wr(e, i, l), r = !0;
    },
    p(i, [l]) {
      const a = {};
      l & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), l & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: l, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (De(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ct(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function yh(n, e, r) {
  let i, l;
  const a = window.t;
  let h;
  Ln(() => {
    h = It.subscribe(async (o) => {
      if (r(0, i = o), i && i.isLoaded) {
        if (r(1, l = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && !s && (i.sameWindow ? window.location.href = i.url : window.open(i.url, "_blank"), ot.update(() => "none"));
      }
    });
  }), Pn(() => {
    h();
  });
  const c = () => {
    ot.update(() => "none");
  }, u = () => {
    ot.update(() => "edit");
  };
  return r(0, i = Et.getFileConfig()), r(1, l = !0), [i, l, a, c, u];
}
class Eh extends Mr {
  constructor(e) {
    super(), Fr(this, e, yh, wh, mr, {});
  }
}
var uu = { exports: {} };
(function(n) {
  var e = function(r) {
    var i = 1e7, l = 7, a = 9007199254740992, h = w(a), c = "0123456789abcdefghijklmnopqrstuvwxyz", u = typeof BigInt == "function";
    function o(b, O, L, U) {
      return typeof b > "u" ? o[0] : typeof O < "u" ? +O == 10 && !L ? Z(b) : rt(b, O, L, U) : Z(b);
    }
    function s(b, O) {
      this.value = b, this.sign = O, this.isSmall = !1;
    }
    s.prototype = Object.create(o.prototype);
    function p(b) {
      this.value = b, this.sign = b < 0, this.isSmall = !0;
    }
    p.prototype = Object.create(o.prototype);
    function d(b) {
      this.value = b;
    }
    d.prototype = Object.create(o.prototype);
    function m(b) {
      return -9007199254740992 < b && b < a;
    }
    function w(b) {
      return b < 1e7 ? [b] : b < 1e14 ? [b % 1e7, Math.floor(b / 1e7)] : [b % 1e7, Math.floor(b / 1e7) % 1e7, Math.floor(b / 1e14)];
    }
    function v(b) {
      _(b);
      var O = b.length;
      if (O < 4 && fe(b, h) < 0)
        switch (O) {
          case 0:
            return 0;
          case 1:
            return b[0];
          case 2:
            return b[0] + b[1] * i;
          default:
            return b[0] + (b[1] + b[2] * i) * i;
        }
      return b;
    }
    function _(b) {
      for (var O = b.length; b[--O] === 0; ) ;
      b.length = O + 1;
    }
    function A(b) {
      for (var O = new Array(b), L = -1; ++L < b; )
        O[L] = 0;
      return O;
    }
    function E(b) {
      return b > 0 ? Math.floor(b) : Math.ceil(b);
    }
    function I(b, O) {
      var L = b.length, U = O.length, y = new Array(L), f = 0, g = i, N, R;
      for (R = 0; R < U; R++)
        N = b[R] + O[R] + f, f = N >= g ? 1 : 0, y[R] = N - f * g;
      for (; R < L; )
        N = b[R] + f, f = N === g ? 1 : 0, y[R++] = N - f * g;
      return f > 0 && y.push(f), y;
    }
    function S(b, O) {
      return b.length >= O.length ? I(b, O) : I(O, b);
    }
    function T(b, O) {
      var L = b.length, U = new Array(L), y = i, f, g;
      for (g = 0; g < L; g++)
        f = b[g] - y + O, O = Math.floor(f / y), U[g] = f - O * y, O += 1;
      for (; O > 0; )
        U[g++] = O % y, O = Math.floor(O / y);
      return U;
    }
    s.prototype.add = function(b) {
      var O = Z(b);
      if (this.sign !== O.sign)
        return this.subtract(O.negate());
      var L = this.value, U = O.value;
      return O.isSmall ? new s(T(L, Math.abs(U)), this.sign) : new s(S(L, U), this.sign);
    }, s.prototype.plus = s.prototype.add, p.prototype.add = function(b) {
      var O = Z(b), L = this.value;
      if (L < 0 !== O.sign)
        return this.subtract(O.negate());
      var U = O.value;
      if (O.isSmall) {
        if (m(L + U)) return new p(L + U);
        U = w(Math.abs(U));
      }
      return new s(T(U, Math.abs(L)), L < 0);
    }, p.prototype.plus = p.prototype.add, d.prototype.add = function(b) {
      return new d(this.value + Z(b).value);
    }, d.prototype.plus = d.prototype.add;
    function x(b, O) {
      var L = b.length, U = O.length, y = new Array(L), f = 0, g = i, N, R;
      for (N = 0; N < U; N++)
        R = b[N] - f - O[N], R < 0 ? (R += g, f = 1) : f = 0, y[N] = R;
      for (N = U; N < L; N++) {
        if (R = b[N] - f, R < 0) R += g;
        else {
          y[N++] = R;
          break;
        }
        y[N] = R;
      }
      for (; N < L; N++)
        y[N] = b[N];
      return _(y), y;
    }
    function C(b, O, L) {
      var U;
      return fe(b, O) >= 0 ? U = x(b, O) : (U = x(O, b), L = !L), U = v(U), typeof U == "number" ? (L && (U = -U), new p(U)) : new s(U, L);
    }
    function P(b, O, L) {
      var U = b.length, y = new Array(U), f = -O, g = i, N, R;
      for (N = 0; N < U; N++)
        R = b[N] + f, f = Math.floor(R / g), R %= g, y[N] = R < 0 ? R + g : R;
      return y = v(y), typeof y == "number" ? (L && (y = -y), new p(y)) : new s(y, L);
    }
    s.prototype.subtract = function(b) {
      var O = Z(b);
      if (this.sign !== O.sign)
        return this.add(O.negate());
      var L = this.value, U = O.value;
      return O.isSmall ? P(L, Math.abs(U), this.sign) : C(L, U, this.sign);
    }, s.prototype.minus = s.prototype.subtract, p.prototype.subtract = function(b) {
      var O = Z(b), L = this.value;
      if (L < 0 !== O.sign)
        return this.add(O.negate());
      var U = O.value;
      return O.isSmall ? new p(L - U) : P(U, Math.abs(L), L >= 0);
    }, p.prototype.minus = p.prototype.subtract, d.prototype.subtract = function(b) {
      return new d(this.value - Z(b).value);
    }, d.prototype.minus = d.prototype.subtract, s.prototype.negate = function() {
      return new s(this.value, !this.sign);
    }, p.prototype.negate = function() {
      var b = this.sign, O = new p(-this.value);
      return O.sign = !b, O;
    }, d.prototype.negate = function() {
      return new d(-this.value);
    }, s.prototype.abs = function() {
      return new s(this.value, !1);
    }, p.prototype.abs = function() {
      return new p(Math.abs(this.value));
    }, d.prototype.abs = function() {
      return new d(this.value >= 0 ? this.value : -this.value);
    };
    function k(b, O) {
      var L = b.length, U = O.length, y = L + U, f = A(y), g = i, N, R, F, G, X;
      for (F = 0; F < L; ++F) {
        G = b[F];
        for (var J = 0; J < U; ++J)
          X = O[J], N = G * X + f[F + J], R = Math.floor(N / g), f[F + J] = N - R * g, f[F + J + 1] += R;
      }
      return _(f), f;
    }
    function j(b, O) {
      var L = b.length, U = new Array(L), y = i, f = 0, g, N;
      for (N = 0; N < L; N++)
        g = b[N] * O + f, f = Math.floor(g / y), U[N] = g - f * y;
      for (; f > 0; )
        U[N++] = f % y, f = Math.floor(f / y);
      return U;
    }
    function D(b, O) {
      for (var L = []; O-- > 0; ) L.push(0);
      return L.concat(b);
    }
    function B(b, O) {
      var L = Math.max(b.length, O.length);
      if (L <= 30) return k(b, O);
      L = Math.ceil(L / 2);
      var U = b.slice(L), y = b.slice(0, L), f = O.slice(L), g = O.slice(0, L), N = B(y, g), R = B(U, f), F = B(S(y, U), S(g, f)), G = S(S(N, D(x(x(F, N), R), L)), D(R, 2 * L));
      return _(G), G;
    }
    function $(b, O) {
      return -0.012 * b - 0.012 * O + 15e-6 * b * O > 0;
    }
    s.prototype.multiply = function(b) {
      var O = Z(b), L = this.value, U = O.value, y = this.sign !== O.sign, f;
      if (O.isSmall) {
        if (U === 0) return o[0];
        if (U === 1) return this;
        if (U === -1) return this.negate();
        if (f = Math.abs(U), f < i)
          return new s(j(L, f), y);
        U = w(f);
      }
      return $(L.length, U.length) ? new s(B(L, U), y) : new s(k(L, U), y);
    }, s.prototype.times = s.prototype.multiply;
    function q(b, O, L) {
      return b < i ? new s(j(O, b), L) : new s(k(O, w(b)), L);
    }
    p.prototype._multiplyBySmall = function(b) {
      return m(b.value * this.value) ? new p(b.value * this.value) : q(Math.abs(b.value), w(Math.abs(this.value)), this.sign !== b.sign);
    }, s.prototype._multiplyBySmall = function(b) {
      return b.value === 0 ? o[0] : b.value === 1 ? this : b.value === -1 ? this.negate() : q(Math.abs(b.value), this.value, this.sign !== b.sign);
    }, p.prototype.multiply = function(b) {
      return Z(b)._multiplyBySmall(this);
    }, p.prototype.times = p.prototype.multiply, d.prototype.multiply = function(b) {
      return new d(this.value * Z(b).value);
    }, d.prototype.times = d.prototype.multiply;
    function V(b) {
      var O = b.length, L = A(O + O), U = i, y, f, g, N, R;
      for (g = 0; g < O; g++) {
        N = b[g], f = 0 - N * N;
        for (var F = g; F < O; F++)
          R = b[F], y = 2 * (N * R) + L[g + F] + f, f = Math.floor(y / U), L[g + F] = y - f * U;
        L[g + O] = f;
      }
      return _(L), L;
    }
    s.prototype.square = function() {
      return new s(V(this.value), !1);
    }, p.prototype.square = function() {
      var b = this.value * this.value;
      return m(b) ? new p(b) : new s(V(w(Math.abs(this.value))), !1);
    }, d.prototype.square = function(b) {
      return new d(this.value * this.value);
    };
    function oe(b, O) {
      var L = b.length, U = O.length, y = i, f = A(O.length), g = O[U - 1], N = Math.ceil(y / (2 * g)), R = j(b, N), F = j(O, N), G, X, J, ie, se, ce, Dt;
      for (R.length <= L && R.push(0), F.push(0), g = F[U - 1], X = L - U; X >= 0; X--) {
        for (G = y - 1, R[X + U] !== g && (G = Math.floor((R[X + U] * y + R[X + U - 1]) / g)), J = 0, ie = 0, ce = F.length, se = 0; se < ce; se++)
          J += G * F[se], Dt = Math.floor(J / y), ie += R[X + se] - (J - Dt * y), J = Dt, ie < 0 ? (R[X + se] = ie + y, ie = -1) : (R[X + se] = ie, ie = 0);
        for (; ie !== 0; ) {
          for (G -= 1, J = 0, se = 0; se < ce; se++)
            J += R[X + se] - y + F[se], J < 0 ? (R[X + se] = J + y, J = 0) : (R[X + se] = J, J = 1);
          ie += J;
        }
        f[X] = G;
      }
      return R = te(R, N)[0], [v(f), v(R)];
    }
    function ne(b, O) {
      for (var L = b.length, U = O.length, y = [], f = [], g = i, N, R, F, G, X; L; ) {
        if (f.unshift(b[--L]), _(f), fe(f, O) < 0) {
          y.push(0);
          continue;
        }
        R = f.length, F = f[R - 1] * g + f[R - 2], G = O[U - 1] * g + O[U - 2], R > U && (F = (F + 1) * g), N = Math.ceil(F / G);
        do {
          if (X = j(O, N), fe(X, f) <= 0) break;
          N--;
        } while (N);
        y.push(N), f = x(f, X);
      }
      return y.reverse(), [v(y), v(f)];
    }
    function te(b, O) {
      var L = b.length, U = A(L), y = i, f, g, N, R;
      for (N = 0, f = L - 1; f >= 0; --f)
        R = N * y + b[f], g = E(R / O), N = R - g * O, U[f] = g | 0;
      return [U, N | 0];
    }
    function ae(b, O) {
      var L, U = Z(O);
      if (u)
        return [new d(b.value / U.value), new d(b.value % U.value)];
      var y = b.value, f = U.value, g;
      if (f === 0) throw new Error("Cannot divide by zero");
      if (b.isSmall)
        return U.isSmall ? [new p(E(y / f)), new p(y % f)] : [o[0], b];
      if (U.isSmall) {
        if (f === 1) return [b, o[0]];
        if (f == -1) return [b.negate(), o[0]];
        var N = Math.abs(f);
        if (N < i) {
          L = te(y, N), g = v(L[0]);
          var R = L[1];
          return b.sign && (R = -R), typeof g == "number" ? (b.sign !== U.sign && (g = -g), [new p(g), new p(R)]) : [new s(g, b.sign !== U.sign), new p(R)];
        }
        f = w(N);
      }
      var F = fe(y, f);
      if (F === -1) return [o[0], b];
      if (F === 0) return [o[b.sign === U.sign ? 1 : -1], o[0]];
      y.length + f.length <= 200 ? L = oe(y, f) : L = ne(y, f), g = L[0];
      var G = b.sign !== U.sign, X = L[1], J = b.sign;
      return typeof g == "number" ? (G && (g = -g), g = new p(g)) : g = new s(g, G), typeof X == "number" ? (J && (X = -X), X = new p(X)) : X = new s(X, J), [g, X];
    }
    s.prototype.divmod = function(b) {
      var O = ae(this, b);
      return {
        quotient: O[0],
        remainder: O[1]
      };
    }, d.prototype.divmod = p.prototype.divmod = s.prototype.divmod, s.prototype.divide = function(b) {
      return ae(this, b)[0];
    }, d.prototype.over = d.prototype.divide = function(b) {
      return new d(this.value / Z(b).value);
    }, p.prototype.over = p.prototype.divide = s.prototype.over = s.prototype.divide, s.prototype.mod = function(b) {
      return ae(this, b)[1];
    }, d.prototype.mod = d.prototype.remainder = function(b) {
      return new d(this.value % Z(b).value);
    }, p.prototype.remainder = p.prototype.mod = s.prototype.remainder = s.prototype.mod, s.prototype.pow = function(b) {
      var O = Z(b), L = this.value, U = O.value, y, f, g;
      if (U === 0) return o[1];
      if (L === 0) return o[0];
      if (L === 1) return o[1];
      if (L === -1) return O.isEven() ? o[1] : o[-1];
      if (O.sign)
        return o[0];
      if (!O.isSmall) throw new Error("The exponent " + O.toString() + " is too large.");
      if (this.isSmall && m(y = Math.pow(L, U)))
        return new p(E(y));
      for (f = this, g = o[1]; U & !0 && (g = g.times(f), --U), U !== 0; )
        U /= 2, f = f.square();
      return g;
    }, p.prototype.pow = s.prototype.pow, d.prototype.pow = function(b) {
      var O = Z(b), L = this.value, U = O.value, y = BigInt(0), f = BigInt(1), g = BigInt(2);
      if (U === y) return o[1];
      if (L === y) return o[0];
      if (L === f) return o[1];
      if (L === BigInt(-1)) return O.isEven() ? o[1] : o[-1];
      if (O.isNegative()) return new d(y);
      for (var N = this, R = o[1]; (U & f) === f && (R = R.times(N), --U), U !== y; )
        U /= g, N = N.square();
      return R;
    }, s.prototype.modPow = function(b, O) {
      if (b = Z(b), O = Z(O), O.isZero()) throw new Error("Cannot take modPow with modulus 0");
      var L = o[1], U = this.mod(O);
      for (b.isNegative() && (b = b.multiply(o[-1]), U = U.modInv(O)); b.isPositive(); ) {
        if (U.isZero()) return o[0];
        b.isOdd() && (L = L.multiply(U).mod(O)), b = b.divide(2), U = U.square().mod(O);
      }
      return L;
    }, d.prototype.modPow = p.prototype.modPow = s.prototype.modPow;
    function fe(b, O) {
      if (b.length !== O.length)
        return b.length > O.length ? 1 : -1;
      for (var L = b.length - 1; L >= 0; L--)
        if (b[L] !== O[L]) return b[L] > O[L] ? 1 : -1;
      return 0;
    }
    s.prototype.compareAbs = function(b) {
      var O = Z(b), L = this.value, U = O.value;
      return O.isSmall ? 1 : fe(L, U);
    }, p.prototype.compareAbs = function(b) {
      var O = Z(b), L = Math.abs(this.value), U = O.value;
      return O.isSmall ? (U = Math.abs(U), L === U ? 0 : L > U ? 1 : -1) : -1;
    }, d.prototype.compareAbs = function(b) {
      var O = this.value, L = Z(b).value;
      return O = O >= 0 ? O : -O, L = L >= 0 ? L : -L, O === L ? 0 : O > L ? 1 : -1;
    }, s.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var O = Z(b), L = this.value, U = O.value;
      return this.sign !== O.sign ? O.sign ? 1 : -1 : O.isSmall ? this.sign ? -1 : 1 : fe(L, U) * (this.sign ? -1 : 1);
    }, s.prototype.compareTo = s.prototype.compare, p.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var O = Z(b), L = this.value, U = O.value;
      return O.isSmall ? L == U ? 0 : L > U ? 1 : -1 : L < 0 !== O.sign ? L < 0 ? -1 : 1 : L < 0 ? 1 : -1;
    }, p.prototype.compareTo = p.prototype.compare, d.prototype.compare = function(b) {
      if (b === 1 / 0)
        return -1;
      if (b === -1 / 0)
        return 1;
      var O = this.value, L = Z(b).value;
      return O === L ? 0 : O > L ? 1 : -1;
    }, d.prototype.compareTo = d.prototype.compare, s.prototype.equals = function(b) {
      return this.compare(b) === 0;
    }, d.prototype.eq = d.prototype.equals = p.prototype.eq = p.prototype.equals = s.prototype.eq = s.prototype.equals, s.prototype.notEquals = function(b) {
      return this.compare(b) !== 0;
    }, d.prototype.neq = d.prototype.notEquals = p.prototype.neq = p.prototype.notEquals = s.prototype.neq = s.prototype.notEquals, s.prototype.greater = function(b) {
      return this.compare(b) > 0;
    }, d.prototype.gt = d.prototype.greater = p.prototype.gt = p.prototype.greater = s.prototype.gt = s.prototype.greater, s.prototype.lesser = function(b) {
      return this.compare(b) < 0;
    }, d.prototype.lt = d.prototype.lesser = p.prototype.lt = p.prototype.lesser = s.prototype.lt = s.prototype.lesser, s.prototype.greaterOrEquals = function(b) {
      return this.compare(b) >= 0;
    }, d.prototype.geq = d.prototype.greaterOrEquals = p.prototype.geq = p.prototype.greaterOrEquals = s.prototype.geq = s.prototype.greaterOrEquals, s.prototype.lesserOrEquals = function(b) {
      return this.compare(b) <= 0;
    }, d.prototype.leq = d.prototype.lesserOrEquals = p.prototype.leq = p.prototype.lesserOrEquals = s.prototype.leq = s.prototype.lesserOrEquals, s.prototype.isEven = function() {
      return (this.value[0] & 1) === 0;
    }, p.prototype.isEven = function() {
      return (this.value & 1) === 0;
    }, d.prototype.isEven = function() {
      return (this.value & BigInt(1)) === BigInt(0);
    }, s.prototype.isOdd = function() {
      return (this.value[0] & 1) === 1;
    }, p.prototype.isOdd = function() {
      return (this.value & 1) === 1;
    }, d.prototype.isOdd = function() {
      return (this.value & BigInt(1)) === BigInt(1);
    }, s.prototype.isPositive = function() {
      return !this.sign;
    }, p.prototype.isPositive = function() {
      return this.value > 0;
    }, d.prototype.isPositive = p.prototype.isPositive, s.prototype.isNegative = function() {
      return this.sign;
    }, p.prototype.isNegative = function() {
      return this.value < 0;
    }, d.prototype.isNegative = p.prototype.isNegative, s.prototype.isUnit = function() {
      return !1;
    }, p.prototype.isUnit = function() {
      return Math.abs(this.value) === 1;
    }, d.prototype.isUnit = function() {
      return this.abs().value === BigInt(1);
    }, s.prototype.isZero = function() {
      return !1;
    }, p.prototype.isZero = function() {
      return this.value === 0;
    }, d.prototype.isZero = function() {
      return this.value === BigInt(0);
    }, s.prototype.isDivisibleBy = function(b) {
      var O = Z(b);
      return O.isZero() ? !1 : O.isUnit() ? !0 : O.compareAbs(2) === 0 ? this.isEven() : this.mod(O).isZero();
    }, d.prototype.isDivisibleBy = p.prototype.isDivisibleBy = s.prototype.isDivisibleBy;
    function re(b) {
      var O = b.abs();
      if (O.isUnit()) return !1;
      if (O.equals(2) || O.equals(3) || O.equals(5)) return !0;
      if (O.isEven() || O.isDivisibleBy(3) || O.isDivisibleBy(5)) return !1;
      if (O.lesser(49)) return !0;
    }
    function Me(b, O) {
      for (var L = b.prev(), U = L, y = 0, f, g, N; U.isEven(); ) U = U.divide(2), y++;
      e: for (g = 0; g < O.length; g++)
        if (!b.lesser(O[g]) && (N = e(O[g]).modPow(U, b), !(N.isUnit() || N.equals(L)))) {
          for (f = y - 1; f != 0; f--) {
            if (N = N.square().mod(b), N.isUnit()) return !1;
            if (N.equals(L)) continue e;
          }
          return !1;
        }
      return !0;
    }
    s.prototype.isPrime = function(b) {
      var O = re(this);
      if (O !== r) return O;
      var L = this.abs(), U = L.bitLength();
      if (U <= 64)
        return Me(L, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
      for (var y = Math.log(2) * U.toJSNumber(), f = Math.ceil(b === !0 ? 2 * Math.pow(y, 2) : y), g = [], N = 0; N < f; N++)
        g.push(e(N + 2));
      return Me(L, g);
    }, d.prototype.isPrime = p.prototype.isPrime = s.prototype.isPrime, s.prototype.isProbablePrime = function(b, O) {
      var L = re(this);
      if (L !== r) return L;
      for (var U = this.abs(), y = b === r ? 5 : b, f = [], g = 0; g < y; g++)
        f.push(e.randBetween(2, U.minus(2), O));
      return Me(U, f);
    }, d.prototype.isProbablePrime = p.prototype.isProbablePrime = s.prototype.isProbablePrime, s.prototype.modInv = function(b) {
      for (var O = e.zero, L = e.one, U = Z(b), y = this.abs(), f, g, N; !y.isZero(); )
        f = U.divide(y), g = O, N = U, O = L, U = y, L = g.subtract(f.multiply(L)), y = N.subtract(f.multiply(y));
      if (!U.isUnit()) throw new Error(this.toString() + " and " + b.toString() + " are not co-prime");
      return O.compare(0) === -1 && (O = O.add(b)), this.isNegative() ? O.negate() : O;
    }, d.prototype.modInv = p.prototype.modInv = s.prototype.modInv, s.prototype.next = function() {
      var b = this.value;
      return this.sign ? P(b, 1, this.sign) : new s(T(b, 1), this.sign);
    }, p.prototype.next = function() {
      var b = this.value;
      return b + 1 < a ? new p(b + 1) : new s(h, !1);
    }, d.prototype.next = function() {
      return new d(this.value + BigInt(1));
    }, s.prototype.prev = function() {
      var b = this.value;
      return this.sign ? new s(T(b, 1), !0) : P(b, 1, this.sign);
    }, p.prototype.prev = function() {
      var b = this.value;
      return b - 1 > -9007199254740992 ? new p(b - 1) : new s(h, !0);
    }, d.prototype.prev = function() {
      return new d(this.value - BigInt(1));
    };
    for (var he = [1]; 2 * he[he.length - 1] <= i; ) he.push(2 * he[he.length - 1]);
    var pe = he.length, Q = he[pe - 1];
    function at(b) {
      return Math.abs(b) <= i;
    }
    s.prototype.shiftLeft = function(b) {
      var O = Z(b).toJSNumber();
      if (!at(O))
        throw new Error(String(O) + " is too large for shifting.");
      if (O < 0) return this.shiftRight(-O);
      var L = this;
      if (L.isZero()) return L;
      for (; O >= pe; )
        L = L.multiply(Q), O -= pe - 1;
      return L.multiply(he[O]);
    }, d.prototype.shiftLeft = p.prototype.shiftLeft = s.prototype.shiftLeft, s.prototype.shiftRight = function(b) {
      var O, L = Z(b).toJSNumber();
      if (!at(L))
        throw new Error(String(L) + " is too large for shifting.");
      if (L < 0) return this.shiftLeft(-L);
      for (var U = this; L >= pe; ) {
        if (U.isZero() || U.isNegative() && U.isUnit()) return U;
        O = ae(U, Q), U = O[1].isNegative() ? O[0].prev() : O[0], L -= pe - 1;
      }
      return O = ae(U, he[L]), O[1].isNegative() ? O[0].prev() : O[0];
    }, d.prototype.shiftRight = p.prototype.shiftRight = s.prototype.shiftRight;
    function _t(b, O, L) {
      O = Z(O);
      for (var U = b.isNegative(), y = O.isNegative(), f = U ? b.not() : b, g = y ? O.not() : O, N = 0, R = 0, F = null, G = null, X = []; !f.isZero() || !g.isZero(); )
        F = ae(f, Q), N = F[1].toJSNumber(), U && (N = Q - 1 - N), G = ae(g, Q), R = G[1].toJSNumber(), y && (R = Q - 1 - R), f = F[0], g = G[0], X.push(L(N, R));
      for (var J = L(U ? 1 : 0, y ? 1 : 0) !== 0 ? e(-1) : e(0), ie = X.length - 1; ie >= 0; ie -= 1)
        J = J.multiply(Q).add(e(X[ie]));
      return J;
    }
    s.prototype.not = function() {
      return this.negate().prev();
    }, d.prototype.not = p.prototype.not = s.prototype.not, s.prototype.and = function(b) {
      return _t(this, b, function(O, L) {
        return O & L;
      });
    }, d.prototype.and = p.prototype.and = s.prototype.and, s.prototype.or = function(b) {
      return _t(this, b, function(O, L) {
        return O | L;
      });
    }, d.prototype.or = p.prototype.or = s.prototype.or, s.prototype.xor = function(b) {
      return _t(this, b, function(O, L) {
        return O ^ L;
      });
    }, d.prototype.xor = p.prototype.xor = s.prototype.xor;
    var Ut = 1 << 30, Yt = (i & -1e7) * (i & -1e7) | Ut;
    function Ot(b) {
      var O = b.value, L = typeof O == "number" ? O | Ut : typeof O == "bigint" ? O | BigInt(Ut) : O[0] + O[1] * i | Yt;
      return L & -L;
    }
    function ft(b, O) {
      if (O.compareTo(b) <= 0) {
        var L = ft(b, O.square(O)), U = L.p, y = L.e, f = U.multiply(O);
        return f.compareTo(b) <= 0 ? { p: f, e: y * 2 + 1 } : { p: U, e: y * 2 };
      }
      return { p: e(1), e: 0 };
    }
    s.prototype.bitLength = function() {
      var b = this;
      return b.compareTo(e(0)) < 0 && (b = b.negate().subtract(e(1))), b.compareTo(e(0)) === 0 ? e(0) : e(ft(b, e(2)).e).add(e(1));
    }, d.prototype.bitLength = p.prototype.bitLength = s.prototype.bitLength;
    function ut(b, O) {
      return b = Z(b), O = Z(O), b.greater(O) ? b : O;
    }
    function Rt(b, O) {
      return b = Z(b), O = Z(O), b.lesser(O) ? b : O;
    }
    function ht(b, O) {
      if (b = Z(b).abs(), O = Z(O).abs(), b.equals(O)) return b;
      if (b.isZero()) return O;
      if (O.isZero()) return b;
      for (var L = o[1], U, y; b.isEven() && O.isEven(); )
        U = Rt(Ot(b), Ot(O)), b = b.divide(U), O = O.divide(U), L = L.multiply(U);
      for (; b.isEven(); )
        b = b.divide(Ot(b));
      do {
        for (; O.isEven(); )
          O = O.divide(Ot(O));
        b.greater(O) && (y = O, O = b, b = y), O = O.subtract(b);
      } while (!O.isZero());
      return L.isUnit() ? b : b.multiply(L);
    }
    function Zt(b, O) {
      return b = Z(b).abs(), O = Z(O).abs(), b.divide(ht(b, O)).multiply(O);
    }
    function pt(b, O, L) {
      b = Z(b), O = Z(O);
      var U = L || Math.random, y = Rt(b, O), f = ut(b, O), g = f.subtract(y).add(1);
      if (g.isSmall) return y.add(Math.floor(U() * g));
      for (var N = dt(g, i).value, R = [], F = !0, G = 0; G < N.length; G++) {
        var X = F ? N[G] + (G + 1 < N.length ? N[G + 1] / i : 0) : i, J = E(U() * X);
        R.push(J), J < N[G] && (F = !1);
      }
      return y.add(o.fromArray(R, i, !1));
    }
    var rt = function(b, O, L, U) {
      L = L || c, b = String(b), U || (b = b.toLowerCase(), L = L.toLowerCase());
      var y = b.length, f, g = Math.abs(O), N = {};
      for (f = 0; f < L.length; f++)
        N[L[f]] = f;
      for (f = 0; f < y; f++) {
        var R = b[f];
        if (R !== "-" && R in N && N[R] >= g) {
          if (R === "1" && g === 1) continue;
          throw new Error(R + " is not a valid digit in base " + O + ".");
        }
      }
      O = Z(O);
      var F = [], G = b[0] === "-";
      for (f = G ? 1 : 0; f < b.length; f++) {
        var R = b[f];
        if (R in N) F.push(Z(N[R]));
        else if (R === "<") {
          var X = f;
          do
            f++;
          while (b[f] !== ">" && f < b.length);
          F.push(Z(b.slice(X + 1, f)));
        } else throw new Error(R + " is not a valid character");
      }
      return Bt(F, O, G);
    };
    function Bt(b, O, L) {
      var U = o[0], y = o[1], f;
      for (f = b.length - 1; f >= 0; f--)
        U = U.add(b[f].times(y)), y = y.times(O);
      return L ? U.negate() : U;
    }
    function Jt(b, O) {
      return O = O || c, b < O.length ? O[b] : "<" + b + ">";
    }
    function dt(b, O) {
      if (O = e(O), O.isZero()) {
        if (b.isZero()) return { value: [0], isNegative: !1 };
        throw new Error("Cannot convert nonzero numbers to base 0.");
      }
      if (O.equals(-1)) {
        if (b.isZero()) return { value: [0], isNegative: !1 };
        if (b.isNegative())
          return {
            value: [].concat.apply(
              [],
              Array.apply(null, Array(-b.toJSNumber())).map(Array.prototype.valueOf, [1, 0])
            ),
            isNegative: !1
          };
        var L = Array.apply(null, Array(b.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
        return L.unshift([1]), {
          value: [].concat.apply([], L),
          isNegative: !1
        };
      }
      var U = !1;
      if (b.isNegative() && O.isPositive() && (U = !0, b = b.abs()), O.isUnit())
        return b.isZero() ? { value: [0], isNegative: !1 } : {
          value: Array.apply(null, Array(b.toJSNumber())).map(Number.prototype.valueOf, 1),
          isNegative: U
        };
      for (var y = [], f = b, g; f.isNegative() || f.compareAbs(O) >= 0; ) {
        g = f.divmod(O), f = g.quotient;
        var N = g.remainder;
        N.isNegative() && (N = O.minus(N).abs(), f = f.next()), y.push(N.toJSNumber());
      }
      return y.push(f.toJSNumber()), { value: y.reverse(), isNegative: U };
    }
    function ar(b, O, L) {
      var U = dt(b, O);
      return (U.isNegative ? "-" : "") + U.value.map(function(y) {
        return Jt(y, L);
      }).join("");
    }
    s.prototype.toArray = function(b) {
      return dt(this, b);
    }, p.prototype.toArray = function(b) {
      return dt(this, b);
    }, d.prototype.toArray = function(b) {
      return dt(this, b);
    }, s.prototype.toString = function(b, O) {
      if (b === r && (b = 10), b !== 10 || O) return ar(this, b, O);
      for (var L = this.value, U = L.length, y = String(L[--U]), f = "0000000", g; --U >= 0; )
        g = String(L[U]), y += f.slice(g.length) + g;
      var N = this.sign ? "-" : "";
      return N + y;
    }, p.prototype.toString = function(b, O) {
      return b === r && (b = 10), b != 10 || O ? ar(this, b, O) : String(this.value);
    }, d.prototype.toString = p.prototype.toString, d.prototype.toJSON = s.prototype.toJSON = p.prototype.toJSON = function() {
      return this.toString();
    }, s.prototype.valueOf = function() {
      return parseInt(this.toString(), 10);
    }, s.prototype.toJSNumber = s.prototype.valueOf, p.prototype.valueOf = function() {
      return this.value;
    }, p.prototype.toJSNumber = p.prototype.valueOf, d.prototype.valueOf = d.prototype.toJSNumber = function() {
      return parseInt(this.toString(), 10);
    };
    function vr(b) {
      if (m(+b)) {
        var O = +b;
        if (O === E(O))
          return u ? new d(BigInt(O)) : new p(O);
        throw new Error("Invalid integer: " + b);
      }
      var L = b[0] === "-";
      L && (b = b.slice(1));
      var U = b.split(/e/i);
      if (U.length > 2) throw new Error("Invalid integer: " + U.join("e"));
      if (U.length === 2) {
        var y = U[1];
        if (y[0] === "+" && (y = y.slice(1)), y = +y, y !== E(y) || !m(y)) throw new Error("Invalid integer: " + y + " is not a valid exponent.");
        var f = U[0], g = f.indexOf(".");
        if (g >= 0 && (y -= f.length - g - 1, f = f.slice(0, g) + f.slice(g + 1)), y < 0) throw new Error("Cannot include negative exponent part for integers");
        f += new Array(y + 1).join("0"), b = f;
      }
      var N = /^([0-9][0-9]*)$/.test(b);
      if (!N) throw new Error("Invalid integer: " + b);
      if (u)
        return new d(BigInt(L ? "-" + b : b));
      for (var R = [], F = b.length, G = l, X = F - G; F > 0; )
        R.push(+b.slice(X, F)), X -= G, X < 0 && (X = 0), F -= G;
      return _(R), new s(R, L);
    }
    function Kt(b) {
      if (u)
        return new d(BigInt(b));
      if (m(b)) {
        if (b !== E(b)) throw new Error(b + " is not an integer.");
        return new p(b);
      }
      return vr(b.toString());
    }
    function Z(b) {
      return typeof b == "number" ? Kt(b) : typeof b == "string" ? vr(b) : typeof b == "bigint" ? new d(b) : b;
    }
    for (var ye = 0; ye < 1e3; ye++)
      o[ye] = Z(ye), ye > 0 && (o[-ye] = Z(-ye));
    return o.one = o[1], o.zero = o[0], o.minusOne = o[-1], o.max = ut, o.min = Rt, o.gcd = ht, o.lcm = Zt, o.isInstance = function(b) {
      return b instanceof s || b instanceof p || b instanceof d;
    }, o.randBetween = pt, o.fromArray = function(b, O, L) {
      return Bt(b.map(Z), Z(O || 10), L);
    }, o;
  }();
  n.hasOwnProperty("exports") && (n.exports = e);
})(uu);
var vh = uu.exports;
const bh = /* @__PURE__ */ Yi(vh);
var lu = {}, Dn = {};
Dn.byteLength = Ah;
Dn.toByteArray = _h;
Dn.fromByteArray = xh;
var Ft = [], yt = [], Nh = typeof Uint8Array < "u" ? Uint8Array : Array, Ri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var _r = 0, Th = Ri.length; _r < Th; ++_r)
  Ft[_r] = Ri[_r], yt[Ri.charCodeAt(_r)] = _r;
yt[45] = 62;
yt[95] = 63;
function cu(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = n.indexOf("=");
  r === -1 && (r = e);
  var i = r === e ? 0 : 4 - r % 4;
  return [r, i];
}
function Ah(n) {
  var e = cu(n), r = e[0], i = e[1];
  return (r + i) * 3 / 4 - i;
}
function Ih(n, e, r) {
  return (e + r) * 3 / 4 - r;
}
function _h(n) {
  var e, r = cu(n), i = r[0], l = r[1], a = new Nh(Ih(n, i, l)), h = 0, c = l > 0 ? i - 4 : i, u;
  for (u = 0; u < c; u += 4)
    e = yt[n.charCodeAt(u)] << 18 | yt[n.charCodeAt(u + 1)] << 12 | yt[n.charCodeAt(u + 2)] << 6 | yt[n.charCodeAt(u + 3)], a[h++] = e >> 16 & 255, a[h++] = e >> 8 & 255, a[h++] = e & 255;
  return l === 2 && (e = yt[n.charCodeAt(u)] << 2 | yt[n.charCodeAt(u + 1)] >> 4, a[h++] = e & 255), l === 1 && (e = yt[n.charCodeAt(u)] << 10 | yt[n.charCodeAt(u + 1)] << 4 | yt[n.charCodeAt(u + 2)] >> 2, a[h++] = e >> 8 & 255, a[h++] = e & 255), a;
}
function Oh(n) {
  return Ft[n >> 18 & 63] + Ft[n >> 12 & 63] + Ft[n >> 6 & 63] + Ft[n & 63];
}
function Rh(n, e, r) {
  for (var i, l = [], a = e; a < r; a += 3)
    i = (n[a] << 16 & 16711680) + (n[a + 1] << 8 & 65280) + (n[a + 2] & 255), l.push(Oh(i));
  return l.join("");
}
function xh(n) {
  for (var e, r = n.length, i = r % 3, l = [], a = 16383, h = 0, c = r - i; h < c; h += a)
    l.push(Rh(n, h, h + a > c ? c : h + a));
  return i === 1 ? (e = n[r - 1], l.push(
    Ft[e >> 2] + Ft[e << 4 & 63] + "=="
  )) : i === 2 && (e = (n[r - 2] << 8) + n[r - 1], l.push(
    Ft[e >> 10] + Ft[e >> 4 & 63] + Ft[e << 2 & 63] + "="
  )), l.join("");
}
var po = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
po.read = function(n, e, r, i, l) {
  var a, h, c = l * 8 - i - 1, u = (1 << c) - 1, o = u >> 1, s = -7, p = r ? l - 1 : 0, d = r ? -1 : 1, m = n[e + p];
  for (p += d, a = m & (1 << -s) - 1, m >>= -s, s += c; s > 0; a = a * 256 + n[e + p], p += d, s -= 8)
    ;
  for (h = a & (1 << -s) - 1, a >>= -s, s += i; s > 0; h = h * 256 + n[e + p], p += d, s -= 8)
    ;
  if (a === 0)
    a = 1 - o;
  else {
    if (a === u)
      return h ? NaN : (m ? -1 : 1) * (1 / 0);
    h = h + Math.pow(2, i), a = a - o;
  }
  return (m ? -1 : 1) * h * Math.pow(2, a - i);
};
po.write = function(n, e, r, i, l, a) {
  var h, c, u, o = a * 8 - l - 1, s = (1 << o) - 1, p = s >> 1, d = l === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = i ? 0 : a - 1, w = i ? 1 : -1, v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, h = s) : (h = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -h)) < 1 && (h--, u *= 2), h + p >= 1 ? e += d / u : e += d * Math.pow(2, 1 - p), e * u >= 2 && (h++, u /= 2), h + p >= s ? (c = 0, h = s) : h + p >= 1 ? (c = (e * u - 1) * Math.pow(2, l), h = h + p) : (c = e * Math.pow(2, p - 1) * Math.pow(2, l), h = 0)); l >= 8; n[r + m] = c & 255, m += w, c /= 256, l -= 8)
    ;
  for (h = h << l | c, o += l; o > 0; n[r + m] = h & 255, m += w, h /= 256, o -= 8)
    ;
  n[r + m - w] |= v * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const e = Dn, r = po, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = s, n.SlowBuffer = T, n.INSPECT_MAX_BYTES = 50;
  const l = 2147483647;
  n.kMaxLength = l;
  const { Uint8Array: a, ArrayBuffer: h, SharedArrayBuffer: c } = globalThis;
  s.TYPED_ARRAY_SUPPORT = u(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function u() {
    try {
      const y = new a(1), f = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(f, a.prototype), Object.setPrototypeOf(y, f), y.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(s.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(s.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.byteOffset;
    }
  });
  function o(y) {
    if (y > l)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
    const f = new a(y);
    return Object.setPrototypeOf(f, s.prototype), f;
  }
  function s(y, f, g) {
    if (typeof y == "number") {
      if (typeof f == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return w(y);
    }
    return p(y, f, g);
  }
  s.poolSize = 8192;
  function p(y, f, g) {
    if (typeof y == "string")
      return v(y, f);
    if (h.isView(y))
      return A(y);
    if (y == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
      );
    if (ye(y, h) || y && ye(y.buffer, h) || typeof c < "u" && (ye(y, c) || y && ye(y.buffer, c)))
      return E(y, f, g);
    if (typeof y == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const N = y.valueOf && y.valueOf();
    if (N != null && N !== y)
      return s.from(N, f, g);
    const R = I(y);
    if (R) return R;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function")
      return s.from(y[Symbol.toPrimitive]("string"), f, g);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
    );
  }
  s.from = function(y, f, g) {
    return p(y, f, g);
  }, Object.setPrototypeOf(s.prototype, a.prototype), Object.setPrototypeOf(s, a);
  function d(y) {
    if (typeof y != "number")
      throw new TypeError('"size" argument must be of type number');
    if (y < 0)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
  }
  function m(y, f, g) {
    return d(y), y <= 0 ? o(y) : f !== void 0 ? typeof g == "string" ? o(y).fill(f, g) : o(y).fill(f) : o(y);
  }
  s.alloc = function(y, f, g) {
    return m(y, f, g);
  };
  function w(y) {
    return d(y), o(y < 0 ? 0 : S(y) | 0);
  }
  s.allocUnsafe = function(y) {
    return w(y);
  }, s.allocUnsafeSlow = function(y) {
    return w(y);
  };
  function v(y, f) {
    if ((typeof f != "string" || f === "") && (f = "utf8"), !s.isEncoding(f))
      throw new TypeError("Unknown encoding: " + f);
    const g = x(y, f) | 0;
    let N = o(g);
    const R = N.write(y, f);
    return R !== g && (N = N.slice(0, R)), N;
  }
  function _(y) {
    const f = y.length < 0 ? 0 : S(y.length) | 0, g = o(f);
    for (let N = 0; N < f; N += 1)
      g[N] = y[N] & 255;
    return g;
  }
  function A(y) {
    if (ye(y, a)) {
      const f = new a(y);
      return E(f.buffer, f.byteOffset, f.byteLength);
    }
    return _(y);
  }
  function E(y, f, g) {
    if (f < 0 || y.byteLength < f)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (y.byteLength < f + (g || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let N;
    return f === void 0 && g === void 0 ? N = new a(y) : g === void 0 ? N = new a(y, f) : N = new a(y, f, g), Object.setPrototypeOf(N, s.prototype), N;
  }
  function I(y) {
    if (s.isBuffer(y)) {
      const f = S(y.length) | 0, g = o(f);
      return g.length === 0 || y.copy(g, 0, 0, f), g;
    }
    if (y.length !== void 0)
      return typeof y.length != "number" || b(y.length) ? o(0) : _(y);
    if (y.type === "Buffer" && Array.isArray(y.data))
      return _(y.data);
  }
  function S(y) {
    if (y >= l)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + l.toString(16) + " bytes");
    return y | 0;
  }
  function T(y) {
    return +y != y && (y = 0), s.alloc(+y);
  }
  s.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== s.prototype;
  }, s.compare = function(f, g) {
    if (ye(f, a) && (f = s.from(f, f.offset, f.byteLength)), ye(g, a) && (g = s.from(g, g.offset, g.byteLength)), !s.isBuffer(f) || !s.isBuffer(g))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (f === g) return 0;
    let N = f.length, R = g.length;
    for (let F = 0, G = Math.min(N, R); F < G; ++F)
      if (f[F] !== g[F]) {
        N = f[F], R = g[F];
        break;
      }
    return N < R ? -1 : R < N ? 1 : 0;
  }, s.isEncoding = function(f) {
    switch (String(f).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, s.concat = function(f, g) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return s.alloc(0);
    let N;
    if (g === void 0)
      for (g = 0, N = 0; N < f.length; ++N)
        g += f[N].length;
    const R = s.allocUnsafe(g);
    let F = 0;
    for (N = 0; N < f.length; ++N) {
      let G = f[N];
      if (ye(G, a))
        F + G.length > R.length ? (s.isBuffer(G) || (G = s.from(G)), G.copy(R, F)) : a.prototype.set.call(
          R,
          G,
          F
        );
      else if (s.isBuffer(G))
        G.copy(R, F);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      F += G.length;
    }
    return R;
  };
  function x(y, f) {
    if (s.isBuffer(y))
      return y.length;
    if (h.isView(y) || ye(y, h))
      return y.byteLength;
    if (typeof y != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y
      );
    const g = y.length, N = arguments.length > 2 && arguments[2] === !0;
    if (!N && g === 0) return 0;
    let R = !1;
    for (; ; )
      switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return g;
        case "utf8":
        case "utf-8":
          return dt(y).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return g * 2;
        case "hex":
          return g >>> 1;
        case "base64":
          return Kt(y).length;
        default:
          if (R)
            return N ? -1 : dt(y).length;
          f = ("" + f).toLowerCase(), R = !0;
      }
  }
  s.byteLength = x;
  function C(y, f, g) {
    let N = !1;
    if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((g === void 0 || g > this.length) && (g = this.length), g <= 0) || (g >>>= 0, f >>>= 0, g <= f))
      return "";
    for (y || (y = "utf8"); ; )
      switch (y) {
        case "hex":
          return Me(this, f, g);
        case "utf8":
        case "utf-8":
          return ne(this, f, g);
        case "ascii":
          return fe(this, f, g);
        case "latin1":
        case "binary":
          return re(this, f, g);
        case "base64":
          return oe(this, f, g);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return he(this, f, g);
        default:
          if (N) throw new TypeError("Unknown encoding: " + y);
          y = (y + "").toLowerCase(), N = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function P(y, f, g) {
    const N = y[f];
    y[f] = y[g], y[g] = N;
  }
  s.prototype.swap16 = function() {
    const f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let g = 0; g < f; g += 2)
      P(this, g, g + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let g = 0; g < f; g += 4)
      P(this, g, g + 3), P(this, g + 1, g + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let g = 0; g < f; g += 8)
      P(this, g, g + 7), P(this, g + 1, g + 6), P(this, g + 2, g + 5), P(this, g + 3, g + 4);
    return this;
  }, s.prototype.toString = function() {
    const f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? ne(this, 0, f) : C.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(f) {
    if (!s.isBuffer(f)) throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : s.compare(this, f) === 0;
  }, s.prototype.inspect = function() {
    let f = "";
    const g = n.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, g).replace(/(.{2})/g, "$1 ").trim(), this.length > g && (f += " ... "), "<Buffer " + f + ">";
  }, i && (s.prototype[i] = s.prototype.inspect), s.prototype.compare = function(f, g, N, R, F) {
    if (ye(f, a) && (f = s.from(f, f.offset, f.byteLength)), !s.isBuffer(f))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
      );
    if (g === void 0 && (g = 0), N === void 0 && (N = f ? f.length : 0), R === void 0 && (R = 0), F === void 0 && (F = this.length), g < 0 || N > f.length || R < 0 || F > this.length)
      throw new RangeError("out of range index");
    if (R >= F && g >= N)
      return 0;
    if (R >= F)
      return -1;
    if (g >= N)
      return 1;
    if (g >>>= 0, N >>>= 0, R >>>= 0, F >>>= 0, this === f) return 0;
    let G = F - R, X = N - g;
    const J = Math.min(G, X), ie = this.slice(R, F), se = f.slice(g, N);
    for (let ce = 0; ce < J; ++ce)
      if (ie[ce] !== se[ce]) {
        G = ie[ce], X = se[ce];
        break;
      }
    return G < X ? -1 : X < G ? 1 : 0;
  };
  function k(y, f, g, N, R) {
    if (y.length === 0) return -1;
    if (typeof g == "string" ? (N = g, g = 0) : g > 2147483647 ? g = 2147483647 : g < -2147483648 && (g = -2147483648), g = +g, b(g) && (g = R ? 0 : y.length - 1), g < 0 && (g = y.length + g), g >= y.length) {
      if (R) return -1;
      g = y.length - 1;
    } else if (g < 0)
      if (R) g = 0;
      else return -1;
    if (typeof f == "string" && (f = s.from(f, N)), s.isBuffer(f))
      return f.length === 0 ? -1 : j(y, f, g, N, R);
    if (typeof f == "number")
      return f = f & 255, typeof a.prototype.indexOf == "function" ? R ? a.prototype.indexOf.call(y, f, g) : a.prototype.lastIndexOf.call(y, f, g) : j(y, [f], g, N, R);
    throw new TypeError("val must be string, number or Buffer");
  }
  function j(y, f, g, N, R) {
    let F = 1, G = y.length, X = f.length;
    if (N !== void 0 && (N = String(N).toLowerCase(), N === "ucs2" || N === "ucs-2" || N === "utf16le" || N === "utf-16le")) {
      if (y.length < 2 || f.length < 2)
        return -1;
      F = 2, G /= 2, X /= 2, g /= 2;
    }
    function J(se, ce) {
      return F === 1 ? se[ce] : se.readUInt16BE(ce * F);
    }
    let ie;
    if (R) {
      let se = -1;
      for (ie = g; ie < G; ie++)
        if (J(y, ie) === J(f, se === -1 ? 0 : ie - se)) {
          if (se === -1 && (se = ie), ie - se + 1 === X) return se * F;
        } else
          se !== -1 && (ie -= ie - se), se = -1;
    } else
      for (g + X > G && (g = G - X), ie = g; ie >= 0; ie--) {
        let se = !0;
        for (let ce = 0; ce < X; ce++)
          if (J(y, ie + ce) !== J(f, ce)) {
            se = !1;
            break;
          }
        if (se) return ie;
      }
    return -1;
  }
  s.prototype.includes = function(f, g, N) {
    return this.indexOf(f, g, N) !== -1;
  }, s.prototype.indexOf = function(f, g, N) {
    return k(this, f, g, N, !0);
  }, s.prototype.lastIndexOf = function(f, g, N) {
    return k(this, f, g, N, !1);
  };
  function D(y, f, g, N) {
    g = Number(g) || 0;
    const R = y.length - g;
    N ? (N = Number(N), N > R && (N = R)) : N = R;
    const F = f.length;
    N > F / 2 && (N = F / 2);
    let G;
    for (G = 0; G < N; ++G) {
      const X = parseInt(f.substr(G * 2, 2), 16);
      if (b(X)) return G;
      y[g + G] = X;
    }
    return G;
  }
  function B(y, f, g, N) {
    return Z(dt(f, y.length - g), y, g, N);
  }
  function $(y, f, g, N) {
    return Z(ar(f), y, g, N);
  }
  function q(y, f, g, N) {
    return Z(Kt(f), y, g, N);
  }
  function V(y, f, g, N) {
    return Z(vr(f, y.length - g), y, g, N);
  }
  s.prototype.write = function(f, g, N, R) {
    if (g === void 0)
      R = "utf8", N = this.length, g = 0;
    else if (N === void 0 && typeof g == "string")
      R = g, N = this.length, g = 0;
    else if (isFinite(g))
      g = g >>> 0, isFinite(N) ? (N = N >>> 0, R === void 0 && (R = "utf8")) : (R = N, N = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const F = this.length - g;
    if ((N === void 0 || N > F) && (N = F), f.length > 0 && (N < 0 || g < 0) || g > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    R || (R = "utf8");
    let G = !1;
    for (; ; )
      switch (R) {
        case "hex":
          return D(this, f, g, N);
        case "utf8":
        case "utf-8":
          return B(this, f, g, N);
        case "ascii":
        case "latin1":
        case "binary":
          return $(this, f, g, N);
        case "base64":
          return q(this, f, g, N);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return V(this, f, g, N);
        default:
          if (G) throw new TypeError("Unknown encoding: " + R);
          R = ("" + R).toLowerCase(), G = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function oe(y, f, g) {
    return f === 0 && g === y.length ? e.fromByteArray(y) : e.fromByteArray(y.slice(f, g));
  }
  function ne(y, f, g) {
    g = Math.min(y.length, g);
    const N = [];
    let R = f;
    for (; R < g; ) {
      const F = y[R];
      let G = null, X = F > 239 ? 4 : F > 223 ? 3 : F > 191 ? 2 : 1;
      if (R + X <= g) {
        let J, ie, se, ce;
        switch (X) {
          case 1:
            F < 128 && (G = F);
            break;
          case 2:
            J = y[R + 1], (J & 192) === 128 && (ce = (F & 31) << 6 | J & 63, ce > 127 && (G = ce));
            break;
          case 3:
            J = y[R + 1], ie = y[R + 2], (J & 192) === 128 && (ie & 192) === 128 && (ce = (F & 15) << 12 | (J & 63) << 6 | ie & 63, ce > 2047 && (ce < 55296 || ce > 57343) && (G = ce));
            break;
          case 4:
            J = y[R + 1], ie = y[R + 2], se = y[R + 3], (J & 192) === 128 && (ie & 192) === 128 && (se & 192) === 128 && (ce = (F & 15) << 18 | (J & 63) << 12 | (ie & 63) << 6 | se & 63, ce > 65535 && ce < 1114112 && (G = ce));
        }
      }
      G === null ? (G = 65533, X = 1) : G > 65535 && (G -= 65536, N.push(G >>> 10 & 1023 | 55296), G = 56320 | G & 1023), N.push(G), R += X;
    }
    return ae(N);
  }
  const te = 4096;
  function ae(y) {
    const f = y.length;
    if (f <= te)
      return String.fromCharCode.apply(String, y);
    let g = "", N = 0;
    for (; N < f; )
      g += String.fromCharCode.apply(
        String,
        y.slice(N, N += te)
      );
    return g;
  }
  function fe(y, f, g) {
    let N = "";
    g = Math.min(y.length, g);
    for (let R = f; R < g; ++R)
      N += String.fromCharCode(y[R] & 127);
    return N;
  }
  function re(y, f, g) {
    let N = "";
    g = Math.min(y.length, g);
    for (let R = f; R < g; ++R)
      N += String.fromCharCode(y[R]);
    return N;
  }
  function Me(y, f, g) {
    const N = y.length;
    (!f || f < 0) && (f = 0), (!g || g < 0 || g > N) && (g = N);
    let R = "";
    for (let F = f; F < g; ++F)
      R += O[y[F]];
    return R;
  }
  function he(y, f, g) {
    const N = y.slice(f, g);
    let R = "";
    for (let F = 0; F < N.length - 1; F += 2)
      R += String.fromCharCode(N[F] + N[F + 1] * 256);
    return R;
  }
  s.prototype.slice = function(f, g) {
    const N = this.length;
    f = ~~f, g = g === void 0 ? N : ~~g, f < 0 ? (f += N, f < 0 && (f = 0)) : f > N && (f = N), g < 0 ? (g += N, g < 0 && (g = 0)) : g > N && (g = N), g < f && (g = f);
    const R = this.subarray(f, g);
    return Object.setPrototypeOf(R, s.prototype), R;
  };
  function pe(y, f, g) {
    if (y % 1 !== 0 || y < 0) throw new RangeError("offset is not uint");
    if (y + f > g) throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(f, g, N) {
    f = f >>> 0, g = g >>> 0, N || pe(f, g, this.length);
    let R = this[f], F = 1, G = 0;
    for (; ++G < g && (F *= 256); )
      R += this[f + G] * F;
    return R;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(f, g, N) {
    f = f >>> 0, g = g >>> 0, N || pe(f, g, this.length);
    let R = this[f + --g], F = 1;
    for (; g > 0 && (F *= 256); )
      R += this[f + --g] * F;
    return R;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(f, g) {
    return f = f >>> 0, g || pe(f, 1, this.length), this[f];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(f, g) {
    return f = f >>> 0, g || pe(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(f, g) {
    return f = f >>> 0, g || pe(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(f, g) {
    return f = f >>> 0, g || pe(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(f, g) {
    return f = f >>> 0, g || pe(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, s.prototype.readBigUInt64LE = L(function(f) {
    f = f >>> 0, pt(f, "offset");
    const g = this[f], N = this[f + 7];
    (g === void 0 || N === void 0) && rt(f, this.length - 8);
    const R = g + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24, F = this[++f] + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + N * 2 ** 24;
    return BigInt(R) + (BigInt(F) << BigInt(32));
  }), s.prototype.readBigUInt64BE = L(function(f) {
    f = f >>> 0, pt(f, "offset");
    const g = this[f], N = this[f + 7];
    (g === void 0 || N === void 0) && rt(f, this.length - 8);
    const R = g * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f], F = this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + N;
    return (BigInt(R) << BigInt(32)) + BigInt(F);
  }), s.prototype.readIntLE = function(f, g, N) {
    f = f >>> 0, g = g >>> 0, N || pe(f, g, this.length);
    let R = this[f], F = 1, G = 0;
    for (; ++G < g && (F *= 256); )
      R += this[f + G] * F;
    return F *= 128, R >= F && (R -= Math.pow(2, 8 * g)), R;
  }, s.prototype.readIntBE = function(f, g, N) {
    f = f >>> 0, g = g >>> 0, N || pe(f, g, this.length);
    let R = g, F = 1, G = this[f + --R];
    for (; R > 0 && (F *= 256); )
      G += this[f + --R] * F;
    return F *= 128, G >= F && (G -= Math.pow(2, 8 * g)), G;
  }, s.prototype.readInt8 = function(f, g) {
    return f = f >>> 0, g || pe(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, s.prototype.readInt16LE = function(f, g) {
    f = f >>> 0, g || pe(f, 2, this.length);
    const N = this[f] | this[f + 1] << 8;
    return N & 32768 ? N | 4294901760 : N;
  }, s.prototype.readInt16BE = function(f, g) {
    f = f >>> 0, g || pe(f, 2, this.length);
    const N = this[f + 1] | this[f] << 8;
    return N & 32768 ? N | 4294901760 : N;
  }, s.prototype.readInt32LE = function(f, g) {
    return f = f >>> 0, g || pe(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, s.prototype.readInt32BE = function(f, g) {
    return f = f >>> 0, g || pe(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, s.prototype.readBigInt64LE = L(function(f) {
    f = f >>> 0, pt(f, "offset");
    const g = this[f], N = this[f + 7];
    (g === void 0 || N === void 0) && rt(f, this.length - 8);
    const R = this[f + 4] + this[f + 5] * 2 ** 8 + this[f + 6] * 2 ** 16 + (N << 24);
    return (BigInt(R) << BigInt(32)) + BigInt(g + this[++f] * 2 ** 8 + this[++f] * 2 ** 16 + this[++f] * 2 ** 24);
  }), s.prototype.readBigInt64BE = L(function(f) {
    f = f >>> 0, pt(f, "offset");
    const g = this[f], N = this[f + 7];
    (g === void 0 || N === void 0) && rt(f, this.length - 8);
    const R = (g << 24) + // Overflow
    this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + this[++f];
    return (BigInt(R) << BigInt(32)) + BigInt(this[++f] * 2 ** 24 + this[++f] * 2 ** 16 + this[++f] * 2 ** 8 + N);
  }), s.prototype.readFloatLE = function(f, g) {
    return f = f >>> 0, g || pe(f, 4, this.length), r.read(this, f, !0, 23, 4);
  }, s.prototype.readFloatBE = function(f, g) {
    return f = f >>> 0, g || pe(f, 4, this.length), r.read(this, f, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(f, g) {
    return f = f >>> 0, g || pe(f, 8, this.length), r.read(this, f, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(f, g) {
    return f = f >>> 0, g || pe(f, 8, this.length), r.read(this, f, !1, 52, 8);
  };
  function Q(y, f, g, N, R, F) {
    if (!s.isBuffer(y)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (f > R || f < F) throw new RangeError('"value" argument is out of bounds');
    if (g + N > y.length) throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(f, g, N, R) {
    if (f = +f, g = g >>> 0, N = N >>> 0, !R) {
      const X = Math.pow(2, 8 * N) - 1;
      Q(this, f, g, N, X, 0);
    }
    let F = 1, G = 0;
    for (this[g] = f & 255; ++G < N && (F *= 256); )
      this[g + G] = f / F & 255;
    return g + N;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(f, g, N, R) {
    if (f = +f, g = g >>> 0, N = N >>> 0, !R) {
      const X = Math.pow(2, 8 * N) - 1;
      Q(this, f, g, N, X, 0);
    }
    let F = N - 1, G = 1;
    for (this[g + F] = f & 255; --F >= 0 && (G *= 256); )
      this[g + F] = f / G & 255;
    return g + N;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 1, 255, 0), this[g] = f & 255, g + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 2, 65535, 0), this[g] = f & 255, this[g + 1] = f >>> 8, g + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 2, 65535, 0), this[g] = f >>> 8, this[g + 1] = f & 255, g + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 4, 4294967295, 0), this[g + 3] = f >>> 24, this[g + 2] = f >>> 16, this[g + 1] = f >>> 8, this[g] = f & 255, g + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 4, 4294967295, 0), this[g] = f >>> 24, this[g + 1] = f >>> 16, this[g + 2] = f >>> 8, this[g + 3] = f & 255, g + 4;
  };
  function at(y, f, g, N, R) {
    Zt(f, N, R, y, g, 7);
    let F = Number(f & BigInt(4294967295));
    y[g++] = F, F = F >> 8, y[g++] = F, F = F >> 8, y[g++] = F, F = F >> 8, y[g++] = F;
    let G = Number(f >> BigInt(32) & BigInt(4294967295));
    return y[g++] = G, G = G >> 8, y[g++] = G, G = G >> 8, y[g++] = G, G = G >> 8, y[g++] = G, g;
  }
  function _t(y, f, g, N, R) {
    Zt(f, N, R, y, g, 7);
    let F = Number(f & BigInt(4294967295));
    y[g + 7] = F, F = F >> 8, y[g + 6] = F, F = F >> 8, y[g + 5] = F, F = F >> 8, y[g + 4] = F;
    let G = Number(f >> BigInt(32) & BigInt(4294967295));
    return y[g + 3] = G, G = G >> 8, y[g + 2] = G, G = G >> 8, y[g + 1] = G, G = G >> 8, y[g] = G, g + 8;
  }
  s.prototype.writeBigUInt64LE = L(function(f, g = 0) {
    return at(this, f, g, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = L(function(f, g = 0) {
    return _t(this, f, g, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(f, g, N, R) {
    if (f = +f, g = g >>> 0, !R) {
      const J = Math.pow(2, 8 * N - 1);
      Q(this, f, g, N, J - 1, -J);
    }
    let F = 0, G = 1, X = 0;
    for (this[g] = f & 255; ++F < N && (G *= 256); )
      f < 0 && X === 0 && this[g + F - 1] !== 0 && (X = 1), this[g + F] = (f / G >> 0) - X & 255;
    return g + N;
  }, s.prototype.writeIntBE = function(f, g, N, R) {
    if (f = +f, g = g >>> 0, !R) {
      const J = Math.pow(2, 8 * N - 1);
      Q(this, f, g, N, J - 1, -J);
    }
    let F = N - 1, G = 1, X = 0;
    for (this[g + F] = f & 255; --F >= 0 && (G *= 256); )
      f < 0 && X === 0 && this[g + F + 1] !== 0 && (X = 1), this[g + F] = (f / G >> 0) - X & 255;
    return g + N;
  }, s.prototype.writeInt8 = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[g] = f & 255, g + 1;
  }, s.prototype.writeInt16LE = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 2, 32767, -32768), this[g] = f & 255, this[g + 1] = f >>> 8, g + 2;
  }, s.prototype.writeInt16BE = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 2, 32767, -32768), this[g] = f >>> 8, this[g + 1] = f & 255, g + 2;
  }, s.prototype.writeInt32LE = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 4, 2147483647, -2147483648), this[g] = f & 255, this[g + 1] = f >>> 8, this[g + 2] = f >>> 16, this[g + 3] = f >>> 24, g + 4;
  }, s.prototype.writeInt32BE = function(f, g, N) {
    return f = +f, g = g >>> 0, N || Q(this, f, g, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[g] = f >>> 24, this[g + 1] = f >>> 16, this[g + 2] = f >>> 8, this[g + 3] = f & 255, g + 4;
  }, s.prototype.writeBigInt64LE = L(function(f, g = 0) {
    return at(this, f, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = L(function(f, g = 0) {
    return _t(this, f, g, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ut(y, f, g, N, R, F) {
    if (g + N > y.length) throw new RangeError("Index out of range");
    if (g < 0) throw new RangeError("Index out of range");
  }
  function Yt(y, f, g, N, R) {
    return f = +f, g = g >>> 0, R || Ut(y, f, g, 4), r.write(y, f, g, N, 23, 4), g + 4;
  }
  s.prototype.writeFloatLE = function(f, g, N) {
    return Yt(this, f, g, !0, N);
  }, s.prototype.writeFloatBE = function(f, g, N) {
    return Yt(this, f, g, !1, N);
  };
  function Ot(y, f, g, N, R) {
    return f = +f, g = g >>> 0, R || Ut(y, f, g, 8), r.write(y, f, g, N, 52, 8), g + 8;
  }
  s.prototype.writeDoubleLE = function(f, g, N) {
    return Ot(this, f, g, !0, N);
  }, s.prototype.writeDoubleBE = function(f, g, N) {
    return Ot(this, f, g, !1, N);
  }, s.prototype.copy = function(f, g, N, R) {
    if (!s.isBuffer(f)) throw new TypeError("argument should be a Buffer");
    if (N || (N = 0), !R && R !== 0 && (R = this.length), g >= f.length && (g = f.length), g || (g = 0), R > 0 && R < N && (R = N), R === N || f.length === 0 || this.length === 0) return 0;
    if (g < 0)
      throw new RangeError("targetStart out of bounds");
    if (N < 0 || N >= this.length) throw new RangeError("Index out of range");
    if (R < 0) throw new RangeError("sourceEnd out of bounds");
    R > this.length && (R = this.length), f.length - g < R - N && (R = f.length - g + N);
    const F = R - N;
    return this === f && typeof a.prototype.copyWithin == "function" ? this.copyWithin(g, N, R) : a.prototype.set.call(
      f,
      this.subarray(N, R),
      g
    ), F;
  }, s.prototype.fill = function(f, g, N, R) {
    if (typeof f == "string") {
      if (typeof g == "string" ? (R = g, g = 0, N = this.length) : typeof N == "string" && (R = N, N = this.length), R !== void 0 && typeof R != "string")
        throw new TypeError("encoding must be a string");
      if (typeof R == "string" && !s.isEncoding(R))
        throw new TypeError("Unknown encoding: " + R);
      if (f.length === 1) {
        const G = f.charCodeAt(0);
        (R === "utf8" && G < 128 || R === "latin1") && (f = G);
      }
    } else typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (g < 0 || this.length < g || this.length < N)
      throw new RangeError("Out of range index");
    if (N <= g)
      return this;
    g = g >>> 0, N = N === void 0 ? this.length : N >>> 0, f || (f = 0);
    let F;
    if (typeof f == "number")
      for (F = g; F < N; ++F)
        this[F] = f;
    else {
      const G = s.isBuffer(f) ? f : s.from(f, R), X = G.length;
      if (X === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (F = 0; F < N - g; ++F)
        this[F + g] = G[F % X];
    }
    return this;
  };
  const ft = {};
  function ut(y, f, g) {
    ft[y] = class extends g {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: f.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${y}]`, this.stack, delete this.name;
      }
      get code() {
        return y;
      }
      set code(R) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: R,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${y}]: ${this.message}`;
      }
    };
  }
  ut(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(y) {
      return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ut(
    "ERR_INVALID_ARG_TYPE",
    function(y, f) {
      return `The "${y}" argument must be of type number. Received type ${typeof f}`;
    },
    TypeError
  ), ut(
    "ERR_OUT_OF_RANGE",
    function(y, f, g) {
      let N = `The value of "${y}" is out of range.`, R = g;
      return Number.isInteger(g) && Math.abs(g) > 2 ** 32 ? R = Rt(String(g)) : typeof g == "bigint" && (R = String(g), (g > BigInt(2) ** BigInt(32) || g < -(BigInt(2) ** BigInt(32))) && (R = Rt(R)), R += "n"), N += ` It must be ${f}. Received ${R}`, N;
    },
    RangeError
  );
  function Rt(y) {
    let f = "", g = y.length;
    const N = y[0] === "-" ? 1 : 0;
    for (; g >= N + 4; g -= 3)
      f = `_${y.slice(g - 3, g)}${f}`;
    return `${y.slice(0, g)}${f}`;
  }
  function ht(y, f, g) {
    pt(f, "offset"), (y[f] === void 0 || y[f + g] === void 0) && rt(f, y.length - (g + 1));
  }
  function Zt(y, f, g, N, R, F) {
    if (y > g || y < f) {
      const G = typeof f == "bigint" ? "n" : "";
      let X;
      throw f === 0 || f === BigInt(0) ? X = `>= 0${G} and < 2${G} ** ${(F + 1) * 8}${G}` : X = `>= -(2${G} ** ${(F + 1) * 8 - 1}${G}) and < 2 ** ${(F + 1) * 8 - 1}${G}`, new ft.ERR_OUT_OF_RANGE("value", X, y);
    }
    ht(N, R, F);
  }
  function pt(y, f) {
    if (typeof y != "number")
      throw new ft.ERR_INVALID_ARG_TYPE(f, "number", y);
  }
  function rt(y, f, g) {
    throw Math.floor(y) !== y ? (pt(y, g), new ft.ERR_OUT_OF_RANGE("offset", "an integer", y)) : f < 0 ? new ft.ERR_BUFFER_OUT_OF_BOUNDS() : new ft.ERR_OUT_OF_RANGE(
      "offset",
      `>= 0 and <= ${f}`,
      y
    );
  }
  const Bt = /[^+/0-9A-Za-z-_]/g;
  function Jt(y) {
    if (y = y.split("=")[0], y = y.trim().replace(Bt, ""), y.length < 2) return "";
    for (; y.length % 4 !== 0; )
      y = y + "=";
    return y;
  }
  function dt(y, f) {
    f = f || 1 / 0;
    let g;
    const N = y.length;
    let R = null;
    const F = [];
    for (let G = 0; G < N; ++G) {
      if (g = y.charCodeAt(G), g > 55295 && g < 57344) {
        if (!R) {
          if (g > 56319) {
            (f -= 3) > -1 && F.push(239, 191, 189);
            continue;
          } else if (G + 1 === N) {
            (f -= 3) > -1 && F.push(239, 191, 189);
            continue;
          }
          R = g;
          continue;
        }
        if (g < 56320) {
          (f -= 3) > -1 && F.push(239, 191, 189), R = g;
          continue;
        }
        g = (R - 55296 << 10 | g - 56320) + 65536;
      } else R && (f -= 3) > -1 && F.push(239, 191, 189);
      if (R = null, g < 128) {
        if ((f -= 1) < 0) break;
        F.push(g);
      } else if (g < 2048) {
        if ((f -= 2) < 0) break;
        F.push(
          g >> 6 | 192,
          g & 63 | 128
        );
      } else if (g < 65536) {
        if ((f -= 3) < 0) break;
        F.push(
          g >> 12 | 224,
          g >> 6 & 63 | 128,
          g & 63 | 128
        );
      } else if (g < 1114112) {
        if ((f -= 4) < 0) break;
        F.push(
          g >> 18 | 240,
          g >> 12 & 63 | 128,
          g >> 6 & 63 | 128,
          g & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return F;
  }
  function ar(y) {
    const f = [];
    for (let g = 0; g < y.length; ++g)
      f.push(y.charCodeAt(g) & 255);
    return f;
  }
  function vr(y, f) {
    let g, N, R;
    const F = [];
    for (let G = 0; G < y.length && !((f -= 2) < 0); ++G)
      g = y.charCodeAt(G), N = g >> 8, R = g % 256, F.push(R), F.push(N);
    return F;
  }
  function Kt(y) {
    return e.toByteArray(Jt(y));
  }
  function Z(y, f, g, N) {
    let R;
    for (R = 0; R < N && !(R + g >= f.length || R >= y.length); ++R)
      f[R + g] = y[R];
    return R;
  }
  function ye(y, f) {
    return y instanceof f || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === f.name;
  }
  function b(y) {
    return y !== y;
  }
  const O = function() {
    const y = "0123456789abcdef", f = new Array(256);
    for (let g = 0; g < 16; ++g) {
      const N = g * 16;
      for (let R = 0; R < 16; ++R)
        f[N + R] = y[g] + y[R];
    }
    return f;
  }();
  function L(y) {
    return typeof BigInt > "u" ? U : y;
  }
  function U() {
    throw new Error("BigInt not supported");
  }
})(lu);
const Sh = lu.Buffer, mt = 100 * 1e3 * 1e3, Ch = 32768, Lh = 9783072e5;
class Ph {
  constructor(e) {
    console.info({ id: e });
  }
}
class $h {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const r = window.atob(e), i = r.length, l = new Sh(i);
    for (let a = 0; a < i; a++)
      l[a] = r.charCodeAt(a);
    return this.parseBuffer(l);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const l = e.slice(e.length - 32, e.length), a = l.readUInt8(6);
    this.debug && console.log("offsetSize: " + a);
    const h = l.readUInt8(7);
    this.debug && console.log("objectRefSize: " + h);
    const c = this.readUInt64BE(l, 8);
    this.debug && console.log("numObjects: " + c);
    const u = this.readUInt64BE(l, 16);
    this.debug && console.log("topObject: " + u);
    const o = this.readUInt64BE(l, 24);
    if (this.debug && console.log("offsetTableOffset: " + o), c > Ch)
      throw new Error("maxObjectCount exceeded");
    const s = [];
    for (let d = 0; d < c; d++) {
      const m = e.slice(o + d * a, o + (d + 1) * a);
      s[d] = this.readUInt(m, 0), this.debug;
    }
    const p = (d) => {
      const m = s[d], w = e[m], v = (w & 240) >> 4, _ = w & 15, A = () => {
        switch (_) {
          case 0:
            return null;
          case 8:
            return !1;
          case 9:
            return !0;
          case 15:
            return null;
          default:
            throw new Error("Unhandled simple type 0x" + v.toString(16));
        }
      }, E = (D) => {
        let B = "", $;
        for ($ = 0; $ < D.length && D[$] === 0; $++)
          ;
        for (; $ < D.length; $++) {
          const q = "00" + D[$].toString(16);
          B += q.substr(q.length - 2);
        }
        return B;
      }, I = () => {
        const D = Math.pow(2, _);
        if (D > 4) {
          const B = e.slice(m + 1, m + 1 + D), $ = E(B);
          return bh($, 16);
        }
        if (D < mt)
          return this.readUInt(e.slice(m + 1, m + 1 + D));
        throw new Error(
          "Too little heap space available! Wanted to read " + D + " bytes, but only " + mt + " are available."
        );
      }, S = () => {
        const D = _ + 1;
        if (D < mt)
          return new Ph(this.readUInt(e.slice(m + 1, m + 1 + D)));
        throw new Error(
          "To little heap space available! Wanted to read " + D + " bytes, but only " + mt + " are available."
        );
      }, T = () => {
        const D = Math.pow(2, _);
        if (D < mt) {
          const B = e.slice(m + 1, m + 1 + D);
          if (D === 4)
            return B.readFloatBE(0);
          if (D === 8)
            return B.readDoubleBE(0);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + D + " bytes, but only " + mt + " are available."
          );
      }, x = () => {
        _ !== 3 && console.error("Unknown date type :" + _ + ". Parsing anyway...");
        const D = e.slice(m + 1, m + 9);
        return new Date(Lh + 1e3 * D.readDoubleBE(0));
      }, C = () => {
        let D = 1, B = _;
        if (_ === 15) {
          const $ = e[m + 1], q = ($ & 240) / 16;
          q !== 1 && console.error("0x4: UNEXPECTED LENGTH-INT TYPE! " + q);
          const V = $ & 15, oe = Math.pow(2, V);
          D = 2 + oe, oe < 3 ? B = this.readUInt(e.slice(m + 2, m + 2 + oe)) : B = this.readUInt(e.slice(m + 2, m + 2 + oe));
        }
        if (B < mt)
          return e.slice(m + D, m + D + B);
        throw new Error(
          "To little heap space available! Wanted to read " + B + " bytes, but only " + mt + " are available."
        );
      }, P = (D) => {
        D = D || 0;
        let B = "utf8", $ = _, q = 1;
        if (_ === 15) {
          const V = e[m + 1], oe = (V & 240) / 16;
          oe !== 1 && console.error("UNEXPECTED LENGTH-INT TYPE! " + oe);
          const ne = V & 15, te = Math.pow(2, ne);
          q = 2 + te, te < 3 ? $ = this.readUInt(e.slice(m + 2, m + 2 + te)) : $ = this.readUInt(e.slice(m + 2, m + 2 + te));
        }
        if ($ *= D + 1, $ < mt) {
          let V = e.toString("utf8", m + q, m + q + $);
          return D && (V = this.swapBytes(V), B = "ucs2"), V.toString(B);
        } else
          throw new Error(
            "To little heap space available! Wanted to read " + $ + " bytes, but only " + mt + " are available."
          );
      }, k = () => {
        let D = _, B = 1;
        if (_ === 15) {
          const q = e[m + 1], V = (q & 240) / 16;
          V !== 1 && console.error("0xa: UNEXPECTED LENGTH-INT TYPE! " + V);
          const oe = q & 15, ne = Math.pow(2, oe);
          B = 2 + ne, ne < 3 ? D = this.readUInt(e.slice(m + 2, m + 2 + ne)) : D = this.readUInt(e.slice(m + 2, m + 2 + ne));
        }
        if (D * h > mt)
          throw new Error("To little heap space available!");
        const $ = [];
        for (let q = 0; q < D; q++) {
          const V = this.readUInt(
            e.slice(m + B + q * h, m + B + (q + 1) * h)
          );
          $[q] = p(V);
        }
        return $;
      }, j = () => {
        let D = _, B = 1;
        if (_ === 15) {
          const q = e[m + 1], V = (q & 240) / 16;
          V !== 1 && console.error("0xD: UNEXPECTED LENGTH-INT TYPE! " + V);
          const oe = q & 15, ne = Math.pow(2, oe);
          B = 2 + ne, ne < 3 ? D = this.readUInt(e.slice(m + 2, m + 2 + ne)) : D = this.readUInt(e.slice(m + 2, m + 2 + ne));
        }
        if (D * 2 * h > mt)
          throw new Error("To little heap space available!");
        this.debug && console.log("Parsing dictionary #" + d);
        const $ = {};
        for (let q = 0; q < D; q++) {
          const V = this.readUInt(
            e.slice(m + B + q * h, m + B + (q + 1) * h)
          ), oe = this.readUInt(
            e.slice(
              m + B + D * h + q * h,
              m + B + D * h + (q + 1) * h
            )
          ), ne = p(V), te = p(oe);
          this.debug && console.log("  DICT #" + d + ": Mapped " + ne + " to " + te), $[ne] = te;
        }
        return $;
      };
      switch (v) {
        case 0:
          return A();
        case 1:
          return I();
        case 8:
          return S();
        case 2:
          return T();
        case 3:
          return x();
        case 4:
          return C();
        case 5:
          return P();
        case 6:
          return P(!0);
        case 10:
          return k();
        case 13:
          return j();
        default:
          throw new Error("Unhandled type 0x" + v.toString(16));
      }
    };
    return [p(u)];
  }
  readUInt(e, r) {
    r = r || 0;
    let i = 0;
    for (let l = r; l < e.length; l++)
      i <<= 8, i |= e[l] & 255;
    return i;
  }
  // we're just going to toss the high order bits because javascript doesn't have 64-bit ints
  readUInt64BE(e, r) {
    return e.slice(r, r + 8).readUInt32BE(4, 8);
  }
  swapBytes(e) {
    const r = e.length;
    for (let i = 0; i < r; i += 2) {
      const l = e[i];
      e[i] = e[i + 1], e[i + 1] = l;
    }
    return e;
  }
}
const kh = new $h(), Oe = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, er = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, xi = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class Ae {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, r, i = !1, l = !1) {
    let a = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? a = e.replace(new RegExp("URL=.*", "gm"), `URL=${Fe(r)}`) : a = `[InternetShortcut]\r
URL=${Fe(r)}`, !i && a.indexOf(Oe.sameWindow) !== -1 ? a = a.replace(Oe.sameWindow, "") : i && a.indexOf(Oe.sameWindow) === -1 && (a = `${a}\r
${Oe.sameWindow}`), !l && a.indexOf(Oe.skipConfirmation) !== -1 ? a = a.replace(Oe.skipConfirmation, "") : l && a.indexOf(Oe.skipConfirmation) === -1 && (a = `${a}\r
${Oe.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const r = { ...xi };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const l = i[0];
        r.url = Fe(l.replace("URL=", ""));
      }
      e.indexOf(Oe.skipConfirmation) !== -1 && (r.skipConfirmation = !0), e.indexOf(Oe.sameWindow) !== -1 && (r.sameWindow = !0);
    }
    return r;
  }
  /**
   * Generates a MotherTree Document (.mtd) file.
   * Similar to URL file format but with [MotherTree] header.
   */
  static generateMTDFileContent(e, r, i = !1, l = !1) {
    let a = "";
    return e && (e.indexOf("[MotherTree]") !== -1 || e.indexOf("[InternetShortcut]") !== -1) && e.indexOf("URL=") !== -1 ? (a = e.replace(new RegExp("URL=.*", "gm"), `URL=${Fe(r)}`), a = a.replace("[InternetShortcut]", "[MotherTree]")) : a = `[MotherTree]\r
URL=${Fe(r)}`, !i && a.indexOf(Oe.sameWindow) !== -1 ? a = a.replace(Oe.sameWindow, "") : i && a.indexOf(Oe.sameWindow) === -1 && (a = `${a}\r
${Oe.sameWindow}`), !l && a.indexOf(Oe.skipConfirmation) !== -1 ? a = a.replace(Oe.skipConfirmation, "") : l && a.indexOf(Oe.skipConfirmation) === -1 && (a = `${a}\r
${Oe.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a MotherTree Document (.mtd) file.
   * Supports both [MotherTree] and [InternetShortcut] headers for backward compatibility.
   */
  static parseMTDFile(e) {
    const r = { ...xi };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const l = i[0];
        r.url = Fe(l.replace("URL=", ""));
      }
      e.indexOf(Oe.skipConfirmation) !== -1 && (r.skipConfirmation = !0), e.indexOf(Oe.sameWindow) !== -1 && (r.sameWindow = !0);
    }
    return r;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, r, i = !1, l = !1) {
    let a = "", h = !1;
    if (e) {
      const c = new window.DOMParser(), u = Ws(e), o = c.parseFromString(u, "text/xml"), s = [...o.getElementsByTagName("dict"), ...o.getElementsByTagName("extra")];
      let p = !1, d = !1;
      if (s && s.length)
        for (const w of s) {
          const v = w.getElementsByTagName("key"), _ = w.getElementsByTagName("string");
          Nt(v) === "URL" && (Si(_, Fe(r)), h = !0), Nt(v) === er.sameWindow && Nt(_) === "_self" && (i ? Si(_, "_self") : o.getElementsByTagName("plist")[0].removeChild(w), d = !0), Nt(v) === er.skipConfirmation && Nt(_) === "1" && (l ? Si(_, "1") : o.getElementsByTagName("plist")[0].removeChild(w), p = !0);
        }
      if (i && !d) {
        const w = Vs(o, er.sameWindow, "_self");
        o.getElementsByTagName("plist")[0].appendChild(w);
      }
      if (l && !p) {
        const w = Vs(o, er.skipConfirmation, "1");
        o.getElementsByTagName("plist")[0].appendChild(w);
      }
      a = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(o)}`, a.indexOf("parsererror") > -1 && (console.error("Parse error", a), a = ""), a = Fh(a);
    }
    return (!a || !h) && (a = `<?xml version="1.0" encoding="UTF-8"?>
				<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
				<plist version="1.0">
					<dict>
						<key>URL</key>
						<string>${Fe(r)}</string>
					</dict>`, i && (a = `${a}
				<extra>
					<key>${er.sameWindow}</key>
					<string>_self</string>
				</extra>`), l && (a = `${a}
				<extra>
					<key>${er.skipConfirmation}</key>
					<string>1</string>
				</extra>`), a = `${a}
			</plist>`), a = Mh(a), a = a.replace(/(\n|\b)\t+/g, "$1").trim(), a = a.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), a;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const r = { ...xi };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = kh.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (r.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), l = Ws(e), a = i.parseFromString(l, "text/xml"), h = [...a.getElementsByTagName("dict"), ...a.getElementsByTagName("extra")];
        if (h && h.length)
          for (const c of h) {
            const u = c.getElementsByTagName("key"), o = c.getElementsByTagName("string");
            Nt(u) === "URL" && (r.url = Fe(Nt(o))), Nt(u) === er.sameWindow && Nt(o) === "_self" && (r.sameWindow = !0), Nt(u) === er.skipConfirmation && Nt(o) === "1" && (r.skipConfirmation = !0);
          }
      }
    return r;
  }
  /**
   * Get extension from filename.
   */
  static getExtension(e) {
    if (e) {
      const r = e.split(".");
      if (r && Array.isArray(r) && r.length > 1) {
        const i = r[r.length - 1];
        if (i)
          return i.toLowerCase();
      }
    }
    return "";
  }
}
const Nt = (n) => n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] ? n[0].childNodes[0].nodeValue : "", Si = (n, e) => {
  n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] && (n[0].childNodes[0].nodeValue = e);
}, Vs = (n, e, r) => {
  const i = n.createElement("extra"), l = n.createElement("key");
  l.appendChild(n.createTextNode(e)), i.appendChild(l);
  const a = n.createElement("string");
  return a.appendChild(n.createTextNode(r)), i.appendChild(a), i;
}, Fh = (n) => n.replace(/></g, `>
<`), Mh = (n) => n.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), Ws = (n) => n.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
function Uh(n) {
  let e, r, i, l, a = (
    /*t*/
    n[1]("files_linkeditor", "View link") + ""
  ), h, c, u;
  return {
    c() {
      e = ue("div"), r = ue("a"), i = ue("span"), l = be(), h = Ge(a), H(i, "class", "icon icon-link"), H(r, "href", "#/"), H(r, "class", "button"), H(r, "id", "downloadFile"), H(e, "class", "directDownload");
    },
    m(o, s) {
      me(o, e, s), ee(e, r), ee(r, i), ee(r, l), ee(r, h), c || (u = st(r, "click", Wt(function() {
        Wi(
          /*onClick*/
          n[0]
        ) && n[0].apply(this, arguments);
      })), c = !0);
    },
    p(o, [s]) {
      n = o;
    },
    i: Mt,
    o: Mt,
    d(o) {
      o && de(e), c = !1, u();
    }
  };
}
function Bh(n, e, r) {
  let { onClick: i } = e;
  const l = window.t;
  return n.$$set = (a) => {
    "onClick" in a && r(0, i = a.onClick);
  }, [i, l];
}
class Dh extends Mr {
  constructor(e) {
    super(), Fr(this, e, Bh, Uh, mr, { onClick: 0 });
  }
}
const jh = ["application/internet-shortcut", "application/x-mothertree-document"], Gh = [];
class tr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    var i, l, a, h, c, u, o, s;
    for (const p of jh)
      (l = (i = window.OCA.Files) == null ? void 0 : i.fileActions) == null || l.registerAction({
        name: "editLink",
        displayName: t("files_linkeditor", "Edit link"),
        mime: p,
        actionHandler: async (d, m) => await tr.loadAndChangeViewMode({ fileName: d, context: m, nextViewMode: "edit" }),
        permissions: window.OC.currentUser && window.OC.PERMISSION_UPDATE,
        iconClass: "icon-link"
      }), (h = (a = window.OCA.Files) == null ? void 0 : a.fileActions) == null || h.registerAction({
        name: "viewLink",
        displayName: t("files_linkeditor", "View link"),
        mime: p,
        actionHandler: async (d, m) => {
          window.OC.currentUser ? await tr.loadAndChangeViewMode({ fileName: d, context: m, nextViewMode: "view" }) : await tr.loadAndChangeViewMode({
            fileName: d,
            context: m,
            nextViewMode: "view",
            downloadUrl: m.fileList.getDownloadUrl(d),
            publicUser: !0
          });
        },
        permissions: window.OC.PERMISSION_READ,
        iconClass: "icon-link"
      }), (u = (c = window.OCA.Files) == null ? void 0 : c.fileActions) == null || u.setDefault(p, "viewLink");
    (s = (o = window.OC.Plugins) == null ? void 0 : o.register) == null || s.call(o, "OCA.Files.NewFileMenu", {
      attach: function(p) {
        const d = p.fileList;
        if (d.id !== "files")
          return;
        const m = ({ id: w, displayName: v, templateName: _ }) => {
          p.addMenuEntry({
            id: w,
            displayName: v,
            templateName: _,
            iconClass: "icon-link",
            fileType: supportedMimetype,
            actionHandler: function(A) {
              const E = d.getCurrentDirectory();
              ot.update(() => "edit"), It.update(
                () => Et.getFileConfig({
                  name: A,
                  dir: E,
                  isNew: !0,
                  onCreate: async (I) => {
                    await d.createFile(A, {
                      scrollTo: !1
                    });
                    const S = await Et.load({ fileName: A, dir: E });
                    await tr.saveAndChangeViewMode({ ...I, fileModifiedTime: S.mtime });
                  }
                })
              );
            }
          });
        };
        m({
          id: "application-internet-shortcut",
          displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
          templateName: window.t("files_linkeditor", "Link.URL")
        }), m({
          id: "application-internet-shortcut-webloc",
          displayName: `${window.t("files_linkeditor", "New link")} (.webloc)`,
          // TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
          templateName: window.t("files_linkeditor", "Link.webloc")
        });
      }
    });
    const e = document.querySelectorAll(".directDownload");
    if (e && e.length > 0) {
      const p = (document.querySelector("input#filename") || { value: "" }).value;
      var r = Ae.getExtension(p);
      if (r === "url" || r === "webloc" || r === "mtd") {
        const d = (document.querySelector("input#downloadURL") || { value: "" }).value;
        Gh.push(
          new Dh({
            anchor: document.querySelector(".directDownload"),
            target: document.querySelector(".directDownload").parentElement,
            props: {
              onClick: () => {
                tr.loadAndChangeViewMode({
                  fileName: p,
                  nextViewMode: "view",
                  publicUser: !0,
                  downloadUrl: d
                });
              }
            }
          })
        );
      }
    }
  }
  static async loadAndChangeViewMode({ fileName: e, context: r, nextViewMode: i, publicUser: l, downloadUrl: a }) {
    const h = r ? encodeURI(r.fileList.linkTo() + "?path=" + r.dir) : window.location.href;
    ot.update(() => i), It.update(
      () => Et.getFileConfig({
        name: e,
        currentUrl: h,
        dir: r ? r.dir : "",
        isPublicLink: l
      })
    );
    let c = {};
    if (l ? c = await Et.loadPublic({ downloadUrl: a }) : c = await Et.load({ fileName: e, dir: r.dir }), c) {
      const u = Ae.getExtension(e);
      let o = {};
      u === "webloc" ? o = Ae.parseWeblocFile(c.filecontents) : u === "mtd" ? o = Ae.parseMTDFile(c.filecontents) : o = Ae.parseURLFile(c.filecontents), It.update(
        (s) => Et.getFileConfig({ ...s, ...o, fileModifiedTime: c.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, fileModifiedTime: l, sameWindow: a, skipConfirmation: h }) {
    const c = Ae.getExtension(e);
    let u = "";
    c === "webloc" ? u = Ae.generateWeblocFileContent("", i, a, h) : c === "mtd" ? u = Ae.generateMTDFileContent("", i, a, h) : u = Ae.generateURLFileContent("", i, a, h), await Et.save({ fileContent: u, name: e, dir: r, fileModifiedTime: l }), ot.update(() => "none");
  }
}
function Xs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, l, a, h, c, u, o, s, p, d, m, w, v, _, A, E;
  return {
    c() {
      e = ue("label"), i = Ge(r), l = be(), a = ue("br"), h = be(), c = ue("input"), u = be(), o = ue("input"), s = be(), p = ue("label"), p.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, d = be(), m = ue("input"), v = be(), _ = ue("label"), _.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, H(c, "type", "text"), zi(c, "width", "100%"), H(c, "class", "input-wide"), c.autofocus = !0, H(c, "data-cy", "url-input"), H(
        c,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), H(o, "type", "checkbox"), H(o, "id", "linkeditor_sameWindow"), H(o, "class", "checkbox"), H(p, "for", "linkeditor_sameWindow"), H(p, "class", "space-top"), H(m, "type", "checkbox"), m.disabled = w = !/*file*/
      n[0].sameWindow, H(m, "id", "linkeditor_skipConfirmation"), H(m, "class", "checkbox"), H(_, "for", "linkeditor_skipConfirmation");
    },
    m(I, S) {
      me(I, e, S), ee(e, i), ee(e, l), ee(e, a), ee(e, h), ee(e, c), Nn(
        c,
        /*file*/
        n[0].url
      ), me(I, u, S), me(I, o, S), o.checked = /*file*/
      n[0].sameWindow, me(I, s, S), me(I, p, S), me(I, d, S), me(I, m, S), m.checked = /*file*/
      n[0].skipConfirmation, me(I, v, S), me(I, _, S), c.focus(), A || (E = [
        st(
          c,
          "input",
          /*input0_input_handler*/
          n[5]
        ),
        st(
          o,
          "change",
          /*input1_change_handler*/
          n[6]
        ),
        st(
          m,
          "change",
          /*input2_change_handler*/
          n[7]
        )
      ], A = !0);
    },
    p(I, S) {
      S & /*file*/
      1 && c.value !== /*file*/
      I[0].url && Nn(
        c,
        /*file*/
        I[0].url
      ), S & /*file*/
      1 && (o.checked = /*file*/
      I[0].sameWindow), S & /*file*/
      1 && w !== (w = !/*file*/
      I[0].sameWindow) && (m.disabled = w), S & /*file*/
      1 && (m.checked = /*file*/
      I[0].skipConfirmation);
    },
    d(I) {
      I && (de(e), de(u), de(o), de(s), de(p), de(d), de(m), de(v), de(_)), A = !1, zt(E);
    }
  };
}
function zs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, l;
  return {
    c() {
      e = ue("a"), i = Ge(r), H(e, "href", l = Fe(
        /*file*/
        n[0].url
      )), H(e, "target", "_blank"), H(e, "class", "button");
    },
    m(a, h) {
      me(a, e, h), ee(e, i);
    },
    p(a, h) {
      h & /*file*/
      1 && l !== (l = Fe(
        /*file*/
        a[0].url
      )) && H(e, "href", l);
    },
    d(a) {
      a && de(e);
    }
  };
}
function Hs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, l, a;
  return {
    c() {
      e = ue("a"), i = Ge(r), H(e, "href", window.location.href), H(e, "class", "primary button");
    },
    m(h, c) {
      me(h, e, c), ee(e, i), l || (a = st(e, "click", Wt(
        /*save*/
        n[4]
      )), l = !0);
    },
    p: Mt,
    d(h) {
      h && de(e), l = !1, a();
    }
  };
}
function qh(n) {
  let e, r, i, l = (
    /*file*/
    n[0].name + ""
  ), a, h, c, u, o, s, p, d = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), m, w, v, _, A = !/*loading*/
  n[1] && Xs(n), E = !/*loading*/
  n[1] && zs(n), I = !/*loading*/
  n[1] && Hs(n);
  return {
    c() {
      e = ue("form"), r = ue("div"), i = ue("h3"), a = Ge(l), h = be(), A && A.c(), c = be(), u = ue("div"), E && E.c(), o = be(), s = ue("div"), p = ue("a"), m = Ge(d), w = be(), I && I.c(), H(r, "class", "edit"), H(u, "class", "oc-dialog-buttonrow onebutton urlvisit"), H(p, "href", window.location.href), H(p, "class", "cancel button"), H(s, "class", "oc-dialog-buttonrow twobuttons"), H(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), H(e, "method", "post");
    },
    m(S, T) {
      me(S, e, T), ee(e, r), ee(r, i), ee(i, a), ee(r, h), A && A.m(r, null), ee(e, c), ee(e, u), E && E.m(u, null), ee(e, o), ee(e, s), ee(s, p), ee(p, m), ee(s, w), I && I.m(s, null), v || (_ = [
        st(p, "click", Wt(
          /*click_handler*/
          n[8]
        )),
        st(e, "submit", Wt(
          /*save*/
          n[4]
        ))
      ], v = !0);
    },
    p(S, T) {
      T & /*file*/
      1 && l !== (l = /*file*/
      S[0].name + "") && Xi(a, l), /*loading*/
      S[1] ? A && (A.d(1), A = null) : A ? A.p(S, T) : (A = Xs(S), A.c(), A.m(r, null)), /*loading*/
      S[1] ? E && (E.d(1), E = null) : E ? E.p(S, T) : (E = zs(S), E.c(), E.m(u, null)), /*loading*/
      S[1] ? I && (I.d(1), I = null) : I ? I.p(S, T) : (I = Hs(S), I.c(), I.m(s, null));
    },
    d(S) {
      S && de(e), A && A.d(), E && E.d(), I && I.d(), v = !1, zt(_);
    }
  };
}
function Vh(n) {
  let e, r;
  return e = new Hi({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [qh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, l) {
      wr(e, i, l), r = !0;
    },
    p(i, [l]) {
      const a = {};
      l & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), l & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: l, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (De(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ct(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function Wh(n, e, r) {
  let i, l;
  const a = window.t, h = window.OC;
  let c;
  Ln(() => {
    c = It.subscribe((m) => {
      r(0, i = m), i && (i.isLoaded || i.isNew) && r(1, l = !1);
    });
  }), Pn(() => {
    c();
  });
  const u = () => {
    r(1, l = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : tr.saveAndChangeViewMode({ ...i });
  };
  function o() {
    i.url = this.value, r(0, i);
  }
  function s() {
    i.sameWindow = this.checked, r(0, i);
  }
  function p() {
    i.skipConfirmation = this.checked, r(0, i);
  }
  const d = () => {
    ot.update(() => "none");
  };
  return r(0, i = Et.getFileConfig()), r(1, l = !0), [
    i,
    l,
    a,
    h,
    u,
    o,
    s,
    p,
    d
  ];
}
class Xh extends Mr {
  constructor(e) {
    super(), Fr(this, e, Wh, Vh, mr, {});
  }
}
class Tt {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: l,
    onCreate: a,
    fileModifiedTime: h,
    isNew: c,
    isLoaded: u,
    sameWindow: o,
    skipConfirmation: s,
    permissions: p,
    existingContents: d,
    templateName: m,
    isPublicLink: w
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? Fe(r) : "",
      dir: l || "",
      onCreate: a,
      fileModifiedTime: h || null,
      isNew: c || !1,
      isLoaded: u || !1,
      sameWindow: o || !1,
      skipConfirmation: s || !1,
      permissions: p || je.NONE,
      existingContents: d,
      templateName: m,
      isPublicLink: w || !1
    };
  }
  static async load({ fileName: e, dir: r } = {}) {
    const i = await window.fetch(
      `${window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile")}?filename=${encodeURIComponent(
        e
      )}&dir=${encodeURIComponent(r)}`,
      {
        method: "GET",
        headers: {
          requesttoken: window.OC.requestToken
        }
      }
    );
    if (i && i.ok)
      return await i.json();
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async loadPublic({ downloadUrl: e } = {}) {
    const r = await window.fetch(e, {
      method: "GET",
      headers: {
        requesttoken: window.OC.requestToken
      }
    });
    if (r && r.ok)
      return { filecontents: await r.text() };
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async save({ fileContent: e, name: r, dir: i } = {}) {
    let l = `${i}${r}`;
    i !== "/" && (l = `${i}/${r}`);
    const a = xf(), h = `${Ya}${l}`;
    try {
      if (await a.putFileContents(h, e, { overwrite: !1 })) {
        const u = await a.stat(h, { details: !0, data: _f() });
        return bl("files:node:created", Sf(u.data)), !0;
      }
    } catch (c) {
      console.error(c);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
}
const Ys = (n) => {
  if (!(n != null && n.name) || !(n != null && n.templateName))
    return n;
  const [, e] = n.templateName.split(".") ?? [], r = n.name.toLocaleLowerCase();
  return e && !r.endsWith(e.toLocaleLowerCase()) && (n.name += `.${e}`), n;
};
function Zs(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, l, a, h, c, u, o;
  return {
    c() {
      e = ue("label"), i = Ge(r), l = be(), a = ue("br"), h = be(), c = ue("input"), H(c, "type", "text"), zi(c, "width", "100%"), H(c, "class", "input-wide"), c.autofocus = !0, H(c, "data-cy", "name-input");
    },
    m(s, p) {
      me(s, e, p), ee(e, i), ee(e, l), ee(e, a), ee(e, h), ee(e, c), Nn(
        c,
        /*file*/
        n[0].name
      ), c.focus(), u || (o = [
        st(
          c,
          "input",
          /*input_input_handler*/
          n[7]
        ),
        st(
          c,
          "keyup",
          /*checkConflicts*/
          n[5]
        )
      ], u = !0);
    },
    p(s, p) {
      p & /*file*/
      1 && c.value !== /*file*/
      s[0].name && Nn(
        c,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && de(e), u = !1, zt(o);
    }
  };
}
function Js(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, l, a;
  return {
    c() {
      e = ue("button"), i = Ge(r), H(e, "type", "button"), e.disabled = /*isConflicting*/
      n[2], H(e, "class", "primary button");
    },
    m(h, c) {
      me(h, e, c), ee(e, i), l || (a = st(e, "click", Wt(
        /*save*/
        n[6]
      )), l = !0);
    },
    p(h, c) {
      c & /*isConflicting*/
      4 && (e.disabled = /*isConflicting*/
      h[2]);
    },
    d(h) {
      h && de(e), l = !1, a();
    }
  };
}
function zh(n) {
  let e, r, i, l, a, h, c, u = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), o, s, p, d, m = !/*loading*/
  n[1] && Zs(n), w = !/*loading*/
  n[1] && Js(n);
  return {
    c() {
      e = ue("form"), r = ue("div"), i = ue("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, l = be(), m && m.c(), a = be(), h = ue("div"), c = ue("a"), o = Ge(u), s = be(), w && w.c(), H(r, "class", "edit"), H(c, "href", window.location.href), H(c, "class", "cancel button"), H(h, "class", "oc-dialog-buttonrow twobuttons"), H(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), H(e, "method", "post");
    },
    m(v, _) {
      me(v, e, _), ee(e, r), ee(r, i), ee(r, l), m && m.m(r, null), ee(e, a), ee(e, h), ee(h, c), ee(c, o), ee(h, s), w && w.m(h, null), p || (d = [
        st(c, "click", Wt(
          /*click_handler*/
          n[8]
        )),
        st(e, "submit", Wt(
          /*save*/
          n[6]
        ))
      ], p = !0);
    },
    p(v, _) {
      /*loading*/
      v[1] ? m && (m.d(1), m = null) : m ? m.p(v, _) : (m = Zs(v), m.c(), m.m(r, null)), /*loading*/
      v[1] ? w && (w.d(1), w = null) : w ? w.p(v, _) : (w = Js(v), w.c(), w.m(h, null));
    },
    d(v) {
      v && de(e), m && m.d(), w && w.d(), p = !1, zt(d);
    }
  };
}
function Hh(n) {
  let e, r;
  return e = new Hi({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [zh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, l) {
      wr(e, i, l), r = !0;
    },
    p(i, [l]) {
      const a = {};
      l & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), l & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: l, ctx: i }), e.$set(a);
    },
    i(i) {
      r || (De(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ct(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function Yh(n, e, r) {
  let i, l, a;
  const h = window.t, c = window.OC, u = (w, v) => {
    const _ = {
      name: w,
      templateName: i.templateName
    }, A = Ys(_);
    return ((v == null ? void 0 : v.map((I) => I.basename)) ?? []).includes(A.name);
  };
  let o;
  Ln(() => {
    o = It.subscribe((w) => {
      r(0, i = w), i && (i.isLoaded || i.isNew) && (r(1, l = !1), s());
    });
  }), Pn(() => {
    o();
  });
  const s = () => {
    u(i.name, i.existingContents) ? r(2, a = !0) : r(2, a = !1);
  }, p = () => {
    u(i.name, i.existingContents) || (r(1, l = !0), i.onCreate(Ys({ ...i })));
  };
  function d() {
    i.name = this.value, r(0, i);
  }
  const m = () => {
    ot.update(() => "none");
  };
  return r(0, i = Tt.getFileConfig()), r(1, l = !0), r(2, a = !0), [
    i,
    l,
    a,
    h,
    c,
    s,
    p,
    d,
    m
  ];
}
class Zh extends Mr {
  constructor(e) {
    super(), Fr(this, e, Yh, Hh, mr, {});
  }
}
function Ks(n) {
  let e, r;
  return e = new Zh({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, l) {
      wr(e, i, l), r = !0;
    },
    i(i) {
      r || (De(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ct(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function Qs(n) {
  let e, r;
  return e = new Eh({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, l) {
      wr(e, i, l), r = !0;
    },
    i(i) {
      r || (De(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ct(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function ea(n) {
  let e, r;
  return e = new Xh({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, l) {
      wr(e, i, l), r = !0;
    },
    i(i) {
      r || (De(e.$$.fragment, i), r = !0);
    },
    o(i) {
      ct(e.$$.fragment, i), r = !1;
    },
    d(i) {
      yr(e, i);
    }
  };
}
function Jh(n) {
  let e, r, i, l, a = (
    /*viewMode*/
    n[0] === "filename" && Ks()
  ), h = (
    /*viewMode*/
    n[0] === "view" && Qs()
  ), c = (
    /*viewMode*/
    n[0] === "edit" && ea()
  );
  return {
    c() {
      a && a.c(), e = be(), h && h.c(), r = be(), c && c.c(), i = Cu();
    },
    m(u, o) {
      a && a.m(u, o), me(u, e, o), h && h.m(u, o), me(u, r, o), c && c.m(u, o), me(u, i, o), l = !0;
    },
    p(u, [o]) {
      /*viewMode*/
      u[0] === "filename" ? a ? o & /*viewMode*/
      1 && De(a, 1) : (a = Ks(), a.c(), De(a, 1), a.m(e.parentNode, e)) : a && (Wn(), ct(a, 1, 1, () => {
        a = null;
      }), Xn()), /*viewMode*/
      u[0] === "view" ? h ? o & /*viewMode*/
      1 && De(h, 1) : (h = Qs(), h.c(), De(h, 1), h.m(r.parentNode, r)) : h && (Wn(), ct(h, 1, 1, () => {
        h = null;
      }), Xn()), /*viewMode*/
      u[0] === "edit" ? c ? o & /*viewMode*/
      1 && De(c, 1) : (c = ea(), c.c(), De(c, 1), c.m(i.parentNode, i)) : c && (Wn(), ct(c, 1, 1, () => {
        c = null;
      }), Xn());
    },
    i(u) {
      l || (De(a), De(h), De(c), l = !0);
    },
    o(u) {
      ct(a), ct(h), ct(c), l = !1;
    },
    d(u) {
      u && (de(e), de(r), de(i)), a && a.d(u), h && h.d(u), c && c.d(u);
    }
  };
}
function Kh(n, e, r) {
  let i, l;
  return Ln(() => {
    l = ot.subscribe((a) => {
      r(0, i = a);
    });
  }), Pn(() => {
    l();
  }), r(0, i = ""), [i];
}
class Qh extends Mr {
  constructor(e) {
    super(), Fr(this, e, Kh, Jh, mr, {});
  }
}
const ep = ["application/internet-shortcut", "application/x-mothertree-document"], ta = () => '<span class="icon-link" style="display: block;"></span>', ra = (n) => ep.some((e) => n === e || (n == null ? void 0 : n.includes(e)));
function bn() {
  const n = window.location.hostname;
  return n.startsWith("files.") ? n.replace(/^files\./, "docs.") : bn() || null;
}
window.OC.dialogs.alert = function(n, e) {
  window.OC.dialogs.message(
    t("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."),
    t("files_linkeditor", "A slight problem"),
    "alert",
    71
    // Dialogs.OK_BUTTONS
  );
};
class Sr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    ai({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: ta,
      exec: async (i) => {
        await Sr.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "edit",
          permissions: i.permissions
        });
      },
      enabled: (i) => window.OC.currentUser && i.every((l) => l.permissions >= je.UPDATE && ra(l.mime))
    }), ai({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      iconSvgInline: ta,
      exec: async (i) => {
        const l = bn();
        if (window.OC.currentUser) {
          if (l) {
            const a = window.open("about:blank", "_blank"), h = await Tt.load({
              fileName: i.basename,
              dir: i.dirname
            });
            if (h) {
              const c = Ae.getExtension(i.basename);
              let u;
              if (c === "webloc" ? u = Ae.parseWeblocFile(h.filecontents) : c === "mtd" ? u = Ae.parseMTDFile(h.filecontents) : u = Ae.parseURLFile(h.filecontents), u.url && u.url.includes(l)) {
                a && (a.location.href = u.url);
                return;
              }
            }
            a && a.close();
          }
          await Sr.loadAndChangeViewMode({
            fileName: i.basename,
            dirName: i.dirname,
            nextViewMode: "view",
            permissions: i.permissions
          });
        } else
          await Sr.loadAndChangeViewMode({
            fileName: i.displayname ?? i.basename,
            dirName: i.dirname,
            nextViewMode: "view",
            // TODO:
            downloadUrl: i.source,
            publicUser: !0,
            permissions: i.permissions
          });
      },
      enabled: (i) => i.every((l) => l.permissions >= je.READ && ra(l.mime)),
      default: () => ru.DEFAULT
    });
    const e = ({ id: i, displayName: l, templateName: a }) => {
      Ds({
        id: i,
        displayName: l,
        enabled: (h) => h.permissions >= je.CREATE,
        iconClass: "icon-link",
        handler: (h, c) => {
          const u = h.path;
          ot.update(() => "filename"), It.update(
            () => Tt.getFileConfig({
              name: a,
              templateName: a,
              dir: u,
              isNew: !0,
              existingContents: c,
              onCreate: async (o) => {
                ot.update(() => "edit"), It.update(
                  () => Tt.getFileConfig({
                    name: o.name,
                    dir: o.dir,
                    isNew: !0,
                    onCreate: async (s) => {
                      await Sr.saveAndChangeViewMode(s);
                    }
                  })
                );
              }
            })
          );
        }
      });
    };
    e({
      id: "application-internet-shortcut",
      displayName: `${window.t("files_linkeditor", "New link")} (.URL)`,
      // TRANSLATORS default filename when creating a new link file from the files list, keep .URL at the end
      templateName: window.t("files_linkeditor", "Link.URL")
    }), e({
      id: "application-internet-shortcut-webloc",
      displayName: `${window.t("files_linkeditor", "New link")} (.webloc)`,
      // TRANSLATORS default filename when creating a new link file from the files list, keep .webloc at the end
      templateName: window.t("files_linkeditor", "Link.webloc")
    });
    const r = bn();
    if (r) {
      const i = `https://${r}`;
      Ds({
        id: "lasuite-new-document",
        displayName: window.t("files_linkeditor", "New Document"),
        enabled: (a) => a.permissions >= je.CREATE,
        iconClass: "icon-file",
        handler: async (a, h) => {
          const c = a.path;
          try {
            const u = await fetch(
              window.OC.generateUrl("/apps/files_linkeditor/api/create-document"),
              {
                method: "POST",
                headers: {
                  requesttoken: window.OC.requestToken,
                  "Content-Type": "application/json"
                }
              }
            );
            if (!u.ok) {
              const w = await u.json();
              console.error("[LaSuite] Failed to create document:", w), window.OC.Notification.showTemporary(
                w.message || window.t("files_linkeditor", "Failed to create document.")
              ), window.open(i, "_blank", "noopener,noreferrer");
              return;
            }
            const { id: o, url: s } = await u.json(), d = `Document-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace(/[T:]/g, "-")}.mtd`, m = Ae.generateMTDFileContent("", s, !1, !0);
            Tt.save({ fileContent: m, name: d, dir: c, fileModifiedTime: 0 }), ot.update(() => "view"), setTimeout(() => {
              It.update(
                () => Tt.getFileConfig({
                  name: d,
                  url: s,
                  dir: c,
                  isLoaded: !0,
                  sameWindow: !1,
                  skipConfirmation: !0
                })
              );
            }, 50);
          } catch (u) {
            console.error("[LaSuite] Error creating document:", u), window.OC.Notification.showTemporary(
              window.t("files_linkeditor", "An error occurred while creating the document.")
            ), window.open(i, "_blank", "noopener,noreferrer");
          }
        }
      });
      const l = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      ai({
        id: "convertDocxToMtd",
        displayName: () => window.t("files_linkeditor", "Convert to MotherTree Docs"),
        iconSvgInline: () => '<span class="icon-file" style="display: block;"></span>',
        exec: async (a) => {
          const h = a.dirname ? `${a.dirname}/${a.basename}` : a.basename;
          try {
            window.OC.Notification.showTemporary(
              window.t("files_linkeditor", "Converting document..."),
              { timeout: 3 }
            );
            const c = await fetch(
              window.OC.generateUrl("/apps/files_linkeditor/api/convert-docx"),
              {
                method: "POST",
                headers: {
                  requesttoken: window.OC.requestToken,
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ filePath: h })
              }
            );
            if (!c.ok) {
              const o = await c.json();
              console.error("[LaSuite] Failed to queue DOCX conversion:", o), window.OC.Notification.showTemporary(
                o.message || window.t("files_linkeditor", "Failed to convert document."),
                { type: "error" }
              );
              return;
            }
            const u = await c.json();
            console.log("[LaSuite] DOCX conversion queued:", u), window.OC.Notification.showTemporary(
              window.t("files_linkeditor", "Document conversion queued. You will be notified when complete."),
              { timeout: 5 }
            );
          } catch (c) {
            console.error("[LaSuite] Error converting document:", c), window.OC.Notification.showTemporary(
              window.t("files_linkeditor", "An error occurred while converting the document."),
              { type: "error" }
            );
          }
        },
        enabled: (a) => window.OC.currentUser && a.length === 1 && a.every((h) => h.mime === l),
        order: 100
        // Show after other actions
      });
    }
  }
  static async loadAndChangeViewMode({ fileName: e, dirName: r, nextViewMode: i, publicUser: l, downloadUrl: a, permissions: h }) {
    ot.update(() => i), It.update(
      () => Tt.getFileConfig({
        name: e,
        dir: r || "",
        permissions: h,
        isPublicLink: l
      })
    );
    let c = {};
    if (l ? c = await Tt.loadPublic({ downloadUrl: a }) : c = await Tt.load({ fileName: e, dir: r }), c) {
      const u = Ae.getExtension(e);
      let o = {};
      u === "webloc" ? o = Ae.parseWeblocFile(c.filecontents) : u === "mtd" ? o = Ae.parseMTDFile(c.filecontents) : o = Ae.parseURLFile(c.filecontents);
      const s = bn();
      s && o.url && o.url.includes(s) && (o.skipConfirmation = !0, o.sameWindow = !1), It.update(
        (p) => Tt.getFileConfig({
          ...p,
          ...o,
          fileModifiedTime: c.mtime,
          isLoaded: !0
        })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, fileModifiedTime: l, sameWindow: a, skipConfirmation: h }) {
    const c = Ae.getExtension(e);
    let u = "";
    c === "webloc" ? u = Ae.generateWeblocFileContent("", i, a, h) : c === "mtd" ? u = Ae.generateMTDFileContent("", i, a, h) : u = Ae.generateURLFileContent("", i, a, h), await Tt.save({ fileContent: u, name: e, dir: r, fileModifiedTime: l }), ot.update(() => "none");
  }
}
function tp() {
  const n = window.location.hostname;
  return n.startsWith("files.") ? n.replace(/^files\./, "docs.") : null;
}
const tn = tp(), na = tn ? new RegExp(`https://${tn.replace(/\./g, "\\.")}/docs/([a-f0-9-]+)/?`, "i") : null;
function fu() {
  var e, r, i, l;
  const n = [
    ".files-list__header-breadcrumbs .vue-crumb:last-of-type a",
    ".breadcrumb__crumbs .vue-crumb:last-of-type a",
    "[data-cy-files-content-breadcrumbs] a:last-of-type",
    ".breadcrumb .crumb:last-of-type a"
  ];
  for (const a of n) {
    const h = document.querySelector(a);
    if (h) {
      h.click();
      return;
    }
  }
  if ((l = (i = (r = (e = window.OCA) == null ? void 0 : e.Files) == null ? void 0 : r.App) == null ? void 0 : i.fileList) != null && l.reload) {
    window.OCA.Files.App.fileList.reload();
    return;
  }
  window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
}
const hr = /* @__PURE__ */ new Map(), Vi = /* @__PURE__ */ new Map(), rp = 10 * 1e3, np = 60 * 1e3, ip = 10 * 60 * 1e3;
let ia = null;
function hu(n) {
  if (!na) return null;
  const e = n.match(na);
  return e ? e[1] : null;
}
function pu(n) {
  const e = n.match(/URL=(.+)/i);
  return e ? e[1].trim() : null;
}
function du(n) {
  return n.replace(/[<>:"/\\|?*]/g, "-").replace(/\s+/g, " ").trim().substring(0, 200);
}
function gu() {
  const e = new URLSearchParams(window.location.search).get("dir");
  if (e)
    return e.startsWith("/") ? e : "/" + e;
  const r = window.location.hash;
  if (r && r.startsWith("#")) {
    const i = r.substring(1).split("?")[0], l = decodeURIComponent(i);
    return l.startsWith("/") ? l : "/" + l;
  }
  return "/";
}
function op() {
  var n, e, r, i, l;
  return ((e = (n = window.OC) == null ? void 0 : n.currentUser) == null ? void 0 : e.uid) || ((r = window.OC) == null ? void 0 : r.currentUser) || window._oc_current_user || ((l = (i = document.head.querySelector("[data-user]")) == null ? void 0 : i.dataset) == null ? void 0 : l.user) || null;
}
async function mu() {
  const n = gu(), e = op();
  if (!e)
    return [];
  try {
    const r = window.OC.generateUrl(`/remote.php/dav/files/${e}${n}`), i = await fetch(r, {
      method: "PROPFIND",
      headers: {
        Depth: "1",
        "Content-Type": "application/xml",
        requesttoken: window.OC.requestToken
      },
      body: `<?xml version="1.0" encoding="UTF-8"?>
				<d:propfind xmlns:d="DAV:" xmlns:oc="http://owncloud.org/ns">
					<d:prop>
						<d:displayname/>
						<d:getlastmodified/>
						<d:getcontenttype/>
					</d:prop>
				</d:propfind>`
    });
    if (!i.ok)
      return console.debug("[LaSuiteSync] WebDAV request failed:", i.status), [];
    const l = await i.text(), c = new DOMParser().parseFromString(l, "application/xml").querySelectorAll("response"), u = [];
    return c.forEach((o, s) => {
      var v, _, A;
      if (s === 0) return;
      const p = ((v = o.querySelector("href")) == null ? void 0 : v.textContent) || "", d = ((_ = o.querySelector("displayname")) == null ? void 0 : _.textContent) || "", m = ((A = o.querySelector("getlastmodified")) == null ? void 0 : A.textContent) || "", w = d || decodeURIComponent(p.split("/").pop());
      (w.toLowerCase().endsWith(".url") || w.toLowerCase().endsWith(".webloc") || w.toLowerCase().endsWith(".mtd")) && u.push({
        name: w,
        path: n === "/" ? `/${w}` : `${n}/${w}`,
        mtime: m ? new Date(m).getTime() : Date.now()
      });
    }), u;
  } catch (r) {
    return console.debug("[LaSuiteSync] Error listing files:", r), [];
  }
}
async function wu(n) {
  try {
    const e = await fetch(
      window.OC.generateUrl("/apps/files_linkeditor/ajax/loadfile") + `?dir=${encodeURIComponent(n.substring(0, n.lastIndexOf("/")) || "/")}&filename=${encodeURIComponent(n.substring(n.lastIndexOf("/") + 1))}`,
      {
        headers: {
          requesttoken: window.OC.requestToken
        }
      }
    );
    return e.ok ? (await e.json()).filecontents : null;
  } catch (e) {
    return console.debug("[LaSuiteSync] Failed to fetch file content:", e), null;
  }
}
async function oa() {
  var n;
  if (!(!tn || !((n = window.OC) != null && n.currentUser)))
    try {
      const e = await mu();
      if (e.length === 0) return;
      const r = Date.now(), i = [];
      for (const c of e) {
        const u = await wu(c.path);
        if (!u) continue;
        const o = pu(u);
        if (!o) continue;
        const s = hu(o);
        if (!s) continue;
        hr.has(c.path) || hr.set(c.path, c.mtime || r);
        const p = hr.get(c.path), d = r - p, m = Vi.get(s) || 0, w = r - m, v = d < ip ? rp : np;
        w >= v && (i.push({
          id: s,
          filePath: c.path,
          fileName: c.name
        }), Vi.set(s, r));
      }
      if (i.length === 0) return;
      const l = await fetch(
        window.OC.generateUrl("/apps/files_linkeditor/api/document-titles"),
        {
          method: "POST",
          headers: {
            requesttoken: window.OC.requestToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ documents: i })
        }
      );
      if (!l.ok) {
        console.debug("[LaSuiteSync] Failed to fetch document titles");
        return;
      }
      const { documents: a } = await l.json(), h = [];
      for (const c of a) {
        if (!c.title || c.error) continue;
        const u = i.find((d) => d.id === c.id);
        if (!u) continue;
        const o = du(c.title) + ".mtd", s = u.filePath.substring(0, u.filePath.lastIndexOf("/")) || "/", p = s === "/" ? `/${o}` : `${s}/${o}`;
        if (u.fileName !== o) {
          console.log(`[LaSuiteSync] Renaming: ${u.fileName} -> ${o}`);
          try {
            (await fetch(
              window.OC.generateUrl("/apps/files_linkeditor/api/rename-file"),
              {
                method: "POST",
                headers: {
                  requesttoken: window.OC.requestToken,
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  filePath: u.filePath,
                  newName: o
                })
              }
            )).ok && (hr.delete(u.filePath), h.push({
              oldPath: u.filePath,
              newPath: p,
              newName: o
            }));
          } catch (d) {
            console.debug("[LaSuiteSync] Failed to rename file:", d);
          }
        }
      }
      h.length > 0 && fu();
    } catch (e) {
      console.debug("[LaSuiteSync] Sync error:", e);
    }
}
async function sa() {
  var n;
  if (!(!tn || !((n = window.OC) != null && n.currentUser)))
    try {
      const e = await mu();
      if (e.length === 0) return;
      const r = [];
      for (const h of e) {
        const c = await wu(h.path);
        if (!c) continue;
        const u = pu(c);
        if (!u) continue;
        const o = hu(u);
        o && (r.push({
          id: o,
          filePath: h.path,
          fileName: h.name
        }), Vi.set(o, Date.now()), hr.has(h.path) || hr.set(h.path, h.mtime || Date.now()));
      }
      if (r.length === 0) return;
      const i = await fetch(
        window.OC.generateUrl("/apps/files_linkeditor/api/document-titles"),
        {
          method: "POST",
          headers: {
            requesttoken: window.OC.requestToken,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ documents: r })
        }
      );
      if (!i.ok) {
        console.debug("[LaSuiteSync] Failed to fetch document titles");
        return;
      }
      const { documents: l } = await i.json(), a = [];
      for (const h of l) {
        if (!h.title || h.error) continue;
        const c = r.find((p) => p.id === h.id);
        if (!c) continue;
        const u = du(h.title) + ".mtd", o = c.filePath.substring(0, c.filePath.lastIndexOf("/")) || "/", s = o === "/" ? `/${u}` : `${o}/${u}`;
        if (c.fileName !== u) {
          console.log(`[LaSuiteSync] Renaming: ${c.fileName} -> ${u}`);
          try {
            (await fetch(
              window.OC.generateUrl("/apps/files_linkeditor/api/rename-file"),
              {
                method: "POST",
                headers: {
                  requesttoken: window.OC.requestToken,
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  filePath: c.filePath,
                  newName: u
                })
              }
            )).ok && (hr.delete(c.filePath), a.push({
              oldPath: c.filePath,
              newPath: s,
              newName: u
            }));
          } catch (p) {
            console.debug("[LaSuiteSync] Failed to rename file:", p);
          }
        }
      }
      a.length > 0 && fu();
    } catch (e) {
      console.debug("[LaSuiteSync] Immediate sync error:", e);
    }
}
function sp() {
  if (!tn) {
    console.debug("[LaSuiteSync] DOCS_HOST not configured, sync disabled");
    return;
  }
  if (ia)
    return;
  ia = setInterval(oa, 5e3), oa();
  let n = null, e = window.location.href;
  setInterval(() => {
    const i = gu(), l = window.location.href;
    (i !== n || l !== e) && (n = i, e = l, setTimeout(sa, 500));
  }, 1e3), window.addEventListener("popstate", () => {
    setTimeout(sa, 500);
  });
}
const ap = [];
ap.push(
  new Qh({
    target: document.body,
    props: {}
  })
);
tr.registerFileActions();
Sr.registerFileActions();
sp();
