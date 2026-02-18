var Al = Object.defineProperty;
var Ro = (n) => {
  throw TypeError(n);
};
var Il = (n, e, r) => e in n ? Al(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r;
var ge = (n, e, r) => Il(n, typeof e != "symbol" ? e + "" : e, r), Wn = (n, e, r) => e.has(n) || Ro("Cannot " + r);
var z = (n, e, r) => (Wn(n, e, "read from private field"), r ? r.call(n) : e.get(n)), it = (n, e, r) => e.has(n) ? Ro("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, r), Ie = (n, e, r, i) => (Wn(n, e, "write to private field"), i ? i.call(n, r) : e.set(n, r), r), Qt = (n, e, r) => (Wn(n, e, "access private method"), r);
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload"))
    return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
    i(u);
  new MutationObserver((u) => {
    for (const a of u)
      if (a.type === "childList")
        for (const h of a.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && i(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(u) {
    const a = {};
    return u.integrity && (a.integrity = u.integrity), u.referrerPolicy && (a.referrerPolicy = u.referrerPolicy), u.crossOrigin === "use-credentials" ? a.credentials = "include" : u.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function i(u) {
    if (u.ep)
      return;
    u.ep = !0;
    const a = r(u);
    fetch(u.href, a);
  }
})();
function Mt() {
}
function _l(n, e) {
  for (const r in e) n[r] = e[r];
  return (
    /** @type {T & S} */
    n
  );
}
function la(n) {
  return n();
}
function xo() {
  return /* @__PURE__ */ Object.create(null);
}
function zt(n) {
  n.forEach(la);
}
function Xi(n) {
  return typeof n == "function";
}
function mr(n, e) {
  return n != n ? e == e : n !== e || n && typeof n == "object" || typeof n == "function";
}
function Ol(n) {
  return Object.keys(n).length === 0;
}
function Rl(n, e, r, i) {
  if (n) {
    const u = ua(n, e, r, i);
    return n[0](u);
  }
}
function ua(n, e, r, i) {
  return n[1] && i ? _l(r.ctx.slice(), n[1](i(e))) : r.ctx;
}
function xl(n, e, r, i) {
  return n[2], e.dirty;
}
function Cl(n, e, r, i, u, a) {
  if (u) {
    const h = ua(e, r, i, a);
    n.p(h, u);
  }
}
function Sl(n) {
  if (n.ctx.length > 32) {
    const e = [], r = n.ctx.length / 32;
    for (let i = 0; i < r; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
const ln = globalThis || void 0 || self;
function ee(n, e) {
  n.appendChild(e);
}
function me(n, e, r) {
  n.insertBefore(e, r || null);
}
function de(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function le(n) {
  return document.createElement(n);
}
function Ge(n) {
  return document.createTextNode(n);
}
function be() {
  return Ge(" ");
}
function Ll() {
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
function Pl(n) {
  return Array.from(n.childNodes);
}
function zi(n, e) {
  e = "" + e, n.data !== e && (n.data = /** @type {string} */
  e);
}
function An(n, e) {
  n.value = e ?? "";
}
function Hi(n, e, r, i) {
  r == null ? n.style.removeProperty(e) : n.style.setProperty(e, r, "");
}
let Qr;
function Yr(n) {
  Qr = n;
}
function ca() {
  if (!Qr) throw new Error("Function called outside component initialization");
  return Qr;
}
function $n(n) {
  ca().$$.on_mount.push(n);
}
function kn(n) {
  ca().$$.on_destroy.push(n);
}
const Or = [], Co = [];
let Sr = [];
const So = [], $l = /* @__PURE__ */ Promise.resolve();
let Pi = !1;
function kl() {
  Pi || (Pi = !0, $l.then(fa));
}
function $i(n) {
  Sr.push(n);
}
const Xn = /* @__PURE__ */ new Set();
let Nr = 0;
function fa() {
  if (Nr !== 0)
    return;
  const n = Qr;
  do {
    try {
      for (; Nr < Or.length; ) {
        const e = Or[Nr];
        Nr++, Yr(e), Fl(e.$$);
      }
    } catch (e) {
      throw Or.length = 0, Nr = 0, e;
    }
    for (Yr(null), Or.length = 0, Nr = 0; Co.length; ) Co.pop()();
    for (let e = 0; e < Sr.length; e += 1) {
      const r = Sr[e];
      Xn.has(r) || (Xn.add(r), r());
    }
    Sr.length = 0;
  } while (Or.length);
  for (; So.length; )
    So.pop()();
  Pi = !1, Xn.clear(), Yr(n);
}
function Fl(n) {
  if (n.fragment !== null) {
    n.update(), zt(n.before_update);
    const e = n.dirty;
    n.dirty = [-1], n.fragment && n.fragment.p(n.ctx, e), n.after_update.forEach($i);
  }
}
function Ml(n) {
  const e = [], r = [];
  Sr.forEach((i) => n.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), Sr = e;
}
const wn = /* @__PURE__ */ new Set();
let cr;
function zn() {
  cr = {
    r: 0,
    c: [],
    p: cr
    // parent group
  };
}
function Hn() {
  cr.r || zt(cr.c), cr = cr.p;
}
function De(n, e) {
  n && n.i && (wn.delete(n), n.i(e));
}
function ct(n, e, r, i) {
  if (n && n.o) {
    if (wn.has(n)) return;
    wn.add(n), cr.c.push(() => {
      wn.delete(n), i && (r && n.d(1), i());
    }), n.o(e);
  } else i && i();
}
function kr(n) {
  n && n.c();
}
function wr(n, e, r) {
  const { fragment: i, after_update: u } = n.$$;
  i && i.m(e, r), $i(() => {
    const a = n.$$.on_mount.map(la).filter(Xi);
    n.$$.on_destroy ? n.$$.on_destroy.push(...a) : zt(a), n.$$.on_mount = [];
  }), u.forEach($i);
}
function yr(n, e) {
  const r = n.$$;
  r.fragment !== null && (Ml(r.after_update), zt(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ul(n, e) {
  n.$$.dirty[0] === -1 && (Or.push(n), kl(), n.$$.dirty.fill(0)), n.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Fr(n, e, r, i, u, a, h = null, c = [-1]) {
  const l = Qr;
  Yr(n);
  const o = n.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: Mt,
    not_equal: u,
    bound: xo(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: xo(),
    dirty: c,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  h && h(o.root);
  let s = !1;
  if (o.ctx = r ? r(n, e.props || {}, (p, d, ...m) => {
    const w = m.length ? m[0] : d;
    return o.ctx && u(o.ctx[p], o.ctx[p] = w) && (!o.skip_bound && o.bound[p] && o.bound[p](w), s && Ul(n, p)), d;
  }) : [], o.update(), s = !0, zt(o.before_update), o.fragment = i ? i(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const p = Pl(e.target);
      o.fragment && o.fragment.l(p), p.forEach(de);
    } else
      o.fragment && o.fragment.c();
    e.intro && De(n.$$.fragment), wr(n, e.target, e.anchor), fa();
  }
  Yr(l);
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
    if (!Xi(r))
      return Mt;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(r), () => {
      const u = i.indexOf(r);
      u !== -1 && i.splice(u, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ol(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Bl = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Bl);
function Dl(n) {
  let e, r, i, u, a;
  const h = (
    /*#slots*/
    n[2].default
  ), c = Rl(
    h,
    n,
    /*$$scope*/
    n[1],
    null
  );
  return {
    c() {
      e = le("div"), r = be(), i = le("div"), c && c.c(), H(e, "class", "oc-dialog-dim"), H(i, "class", u = `oc-dialog ${/*loading*/
      n[0] ? "icon-loading" : ""}`), Hi(i, "position", "fixed");
    },
    m(l, o) {
      me(l, e, o), me(l, r, o), me(l, i, o), c && c.m(i, null), a = !0;
    },
    p(l, [o]) {
      c && c.p && (!a || o & /*$$scope*/
      2) && Cl(
        c,
        h,
        l,
        /*$$scope*/
        l[1],
        a ? xl(
          h,
          /*$$scope*/
          l[1],
          o,
          null
        ) : Sl(
          /*$$scope*/
          l[1]
        ),
        null
      ), (!a || o & /*loading*/
      1 && u !== (u = `oc-dialog ${/*loading*/
      l[0] ? "icon-loading" : ""}`)) && H(i, "class", u);
    },
    i(l) {
      a || (De(c, l), a = !0);
    },
    o(l) {
      ct(c, l), a = !1;
    },
    d(l) {
      l && (de(e), de(r), de(i)), c && c.d(l);
    }
  };
}
function jl(n, e, r) {
  let { $$slots: i = {}, $$scope: u } = e, { loading: a = !1 } = e;
  return n.$$set = (h) => {
    "loading" in h && r(0, a = h.loading), "$$scope" in h && r(1, u = h.$$scope);
  }, [a, u, i];
}
class Yi extends Mr {
  constructor(e) {
    super(), Fr(this, e, jl, Dl, mr, { loading: 0 });
  }
}
const Tr = [];
function ha(n, e = Mt) {
  let r;
  const i = /* @__PURE__ */ new Set();
  function u(c) {
    if (mr(n, c) && (n = c, r)) {
      const l = !Tr.length;
      for (const o of i)
        o[1](), Tr.push(o, n);
      if (l) {
        for (let o = 0; o < Tr.length; o += 2)
          Tr[o][0](Tr[o + 1]);
        Tr.length = 0;
      }
    }
  }
  function a(c) {
    u(c(n));
  }
  function h(c, l = Mt) {
    const o = [c, l];
    return i.add(o), i.size === 1 && (r = e(u, a) || Mt), c(n), () => {
      i.delete(o), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: u, update: a, subscribe: h };
}
function Zi(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ji = {}, We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
We.BLANK_URL = We.relativeFirstCharacters = We.urlSchemeRegex = We.ctrlCharactersRegex = We.htmlCtrlEntityRegex = We.htmlEntitiesRegex = We.invalidProtocolRegex = void 0;
We.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im;
We.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g;
We.htmlCtrlEntityRegex = /&(newline|tab);/gi;
We.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
We.urlSchemeRegex = /^.+(:|&colon;)/gim;
We.relativeFirstCharacters = [".", "/"];
We.BLANK_URL = "about:blank";
Object.defineProperty(Ji, "__esModule", { value: !0 });
var Fe = Ji.sanitizeUrl = void 0, ut = We;
function Gl(n) {
  return ut.relativeFirstCharacters.indexOf(n[0]) > -1;
}
function ql(n) {
  var e = n.replace(ut.ctrlCharactersRegex, "");
  return e.replace(ut.htmlEntitiesRegex, function(r, i) {
    return String.fromCharCode(i);
  });
}
function Vl(n) {
  if (!n)
    return ut.BLANK_URL;
  var e, r = n;
  do
    r = ql(r).replace(ut.htmlCtrlEntityRegex, "").replace(ut.ctrlCharactersRegex, "").trim(), e = r.match(ut.ctrlCharactersRegex) || r.match(ut.htmlEntitiesRegex) || r.match(ut.htmlCtrlEntityRegex);
  while (e && e.length > 0);
  var i = r;
  if (!i)
    return ut.BLANK_URL;
  if (Gl(i))
    return i;
  var u = i.match(ut.urlSchemeRegex);
  if (!u)
    return i;
  var a = u[0];
  return ut.invalidProtocolRegex.test(a) ? ut.BLANK_URL : i;
}
Fe = Ji.sanitizeUrl = Vl;
function Wl(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var pa = { exports: {} }, _e = pa.exports = {}, Pt, $t;
function ki() {
  throw new Error("setTimeout has not been defined");
}
function Fi() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? Pt = setTimeout : Pt = ki;
  } catch {
    Pt = ki;
  }
  try {
    typeof clearTimeout == "function" ? $t = clearTimeout : $t = Fi;
  } catch {
    $t = Fi;
  }
})();
function da(n) {
  if (Pt === setTimeout)
    return setTimeout(n, 0);
  if ((Pt === ki || !Pt) && setTimeout)
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
function Xl(n) {
  if ($t === clearTimeout)
    return clearTimeout(n);
  if (($t === Fi || !$t) && clearTimeout)
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
var Vt = [], Lr = !1, fr, yn = -1;
function zl() {
  !Lr || !fr || (Lr = !1, fr.length ? Vt = fr.concat(Vt) : yn = -1, Vt.length && ga());
}
function ga() {
  if (!Lr) {
    var n = da(zl);
    Lr = !0;
    for (var e = Vt.length; e; ) {
      for (fr = Vt, Vt = []; ++yn < e; )
        fr && fr[yn].run();
      yn = -1, e = Vt.length;
    }
    fr = null, Lr = !1, Xl(n);
  }
}
_e.nextTick = function(n) {
  var e = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r = 1; r < arguments.length; r++)
      e[r - 1] = arguments[r];
  Vt.push(new ma(n, e)), Vt.length === 1 && !Lr && da(ga);
};
function ma(n, e) {
  this.fun = n, this.array = e;
}
ma.prototype.run = function() {
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
var Hl = pa.exports;
const Xe = /* @__PURE__ */ Wl(Hl);
function St(n) {
  if (typeof n != "string")
    throw new TypeError("Path must be a string. Received " + JSON.stringify(n));
}
function Lo(n, e) {
  for (var r = "", i = 0, u = -1, a = 0, h, c = 0; c <= n.length; ++c) {
    if (c < n.length)
      h = n.charCodeAt(c);
    else {
      if (h === 47)
        break;
      h = 47;
    }
    if (h === 47) {
      if (!(u === c - 1 || a === 1)) if (u !== c - 1 && a === 2) {
        if (r.length < 2 || i !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            var l = r.lastIndexOf("/");
            if (l !== r.length - 1) {
              l === -1 ? (r = "", i = 0) : (r = r.slice(0, l), i = r.length - 1 - r.lastIndexOf("/")), u = c, a = 0;
              continue;
            }
          } else if (r.length === 2 || r.length === 1) {
            r = "", i = 0, u = c, a = 0;
            continue;
          }
        }
        e && (r.length > 0 ? r += "/.." : r = "..", i = 2);
      } else
        r.length > 0 ? r += "/" + n.slice(u + 1, c) : r = n.slice(u + 1, c), i = c - u - 1;
      u = c, a = 0;
    } else h === 46 && a !== -1 ? ++a : a = -1;
  }
  return r;
}
function Yl(n, e) {
  var r = e.dir || e.root, i = e.base || (e.name || "") + (e.ext || "");
  return r ? r === e.root ? r + i : r + n + i : i;
}
var Pr = {
  // path.resolve([from ...], to)
  resolve: function() {
    for (var e = "", r = !1, i, u = arguments.length - 1; u >= -1 && !r; u--) {
      var a;
      u >= 0 ? a = arguments[u] : (i === void 0 && (i = Xe.cwd()), a = i), St(a), a.length !== 0 && (e = a + "/" + e, r = a.charCodeAt(0) === 47);
    }
    return e = Lo(e, !r), r ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
  },
  normalize: function(e) {
    if (St(e), e.length === 0) return ".";
    var r = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
    return e = Lo(e, !r), e.length === 0 && !r && (e = "."), e.length > 0 && i && (e += "/"), r ? "/" + e : e;
  },
  isAbsolute: function(e) {
    return St(e), e.length > 0 && e.charCodeAt(0) === 47;
  },
  join: function() {
    if (arguments.length === 0)
      return ".";
    for (var e, r = 0; r < arguments.length; ++r) {
      var i = arguments[r];
      St(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
    }
    return e === void 0 ? "." : Pr.normalize(e);
  },
  relative: function(e, r) {
    if (St(e), St(r), e === r || (e = Pr.resolve(e), r = Pr.resolve(r), e === r)) return "";
    for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i)
      ;
    for (var u = e.length, a = u - i, h = 1; h < r.length && r.charCodeAt(h) === 47; ++h)
      ;
    for (var c = r.length, l = c - h, o = a < l ? a : l, s = -1, p = 0; p <= o; ++p) {
      if (p === o) {
        if (l > o) {
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
    for (p = i + s + 1; p <= u; ++p)
      (p === u || e.charCodeAt(p) === 47) && (w.length === 0 ? w += ".." : w += "/..");
    return w.length > 0 ? w + r.slice(h + s) : (h += s, r.charCodeAt(h) === 47 && ++h, r.slice(h));
  },
  _makeLong: function(e) {
    return e;
  },
  dirname: function(e) {
    if (St(e), e.length === 0) return ".";
    for (var r = e.charCodeAt(0), i = r === 47, u = -1, a = !0, h = e.length - 1; h >= 1; --h)
      if (r = e.charCodeAt(h), r === 47) {
        if (!a) {
          u = h;
          break;
        }
      } else
        a = !1;
    return u === -1 ? i ? "/" : "." : i && u === 1 ? "//" : e.slice(0, u);
  },
  basename: function(e, r) {
    if (r !== void 0 && typeof r != "string") throw new TypeError('"ext" argument must be a string');
    St(e);
    var i = 0, u = -1, a = !0, h;
    if (r !== void 0 && r.length > 0 && r.length <= e.length) {
      if (r.length === e.length && r === e) return "";
      var c = r.length - 1, l = -1;
      for (h = e.length - 1; h >= 0; --h) {
        var o = e.charCodeAt(h);
        if (o === 47) {
          if (!a) {
            i = h + 1;
            break;
          }
        } else
          l === -1 && (a = !1, l = h + 1), c >= 0 && (o === r.charCodeAt(c) ? --c === -1 && (u = h) : (c = -1, u = l));
      }
      return i === u ? u = l : u === -1 && (u = e.length), e.slice(i, u);
    } else {
      for (h = e.length - 1; h >= 0; --h)
        if (e.charCodeAt(h) === 47) {
          if (!a) {
            i = h + 1;
            break;
          }
        } else u === -1 && (a = !1, u = h + 1);
      return u === -1 ? "" : e.slice(i, u);
    }
  },
  extname: function(e) {
    St(e);
    for (var r = -1, i = 0, u = -1, a = !0, h = 0, c = e.length - 1; c >= 0; --c) {
      var l = e.charCodeAt(c);
      if (l === 47) {
        if (!a) {
          i = c + 1;
          break;
        }
        continue;
      }
      u === -1 && (a = !1, u = c + 1), l === 46 ? r === -1 ? r = c : h !== 1 && (h = 1) : r !== -1 && (h = -1);
    }
    return r === -1 || u === -1 || // We saw a non-dot character immediately before the dot
    h === 0 || // The (right-most) trimmed path component is exactly '..'
    h === 1 && r === u - 1 && r === i + 1 ? "" : e.slice(r, u);
  },
  format: function(e) {
    if (e === null || typeof e != "object")
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
    return Yl("/", e);
  },
  parse: function(e) {
    St(e);
    var r = { root: "", dir: "", base: "", ext: "", name: "" };
    if (e.length === 0) return r;
    var i = e.charCodeAt(0), u = i === 47, a;
    u ? (r.root = "/", a = 1) : a = 0;
    for (var h = -1, c = 0, l = -1, o = !0, s = e.length - 1, p = 0; s >= a; --s) {
      if (i = e.charCodeAt(s), i === 47) {
        if (!o) {
          c = s + 1;
          break;
        }
        continue;
      }
      l === -1 && (o = !1, l = s + 1), i === 46 ? h === -1 ? h = s : p !== 1 && (p = 1) : h !== -1 && (p = -1);
    }
    return h === -1 || l === -1 || // We saw a non-dot character immediately before the dot
    p === 0 || // The (right-most) trimmed path component is exactly '..'
    p === 1 && h === l - 1 && h === c + 1 ? l !== -1 && (c === 0 && u ? r.base = r.name = e.slice(1, l) : r.base = r.name = e.slice(c, l)) : (c === 0 && u ? (r.name = e.slice(1, h), r.base = e.slice(1, l)) : (r.name = e.slice(c, h), r.base = e.slice(c, l)), r.ext = e.slice(h, l)), c > 0 ? r.dir = e.slice(0, c - 1) : u && (r.dir = "/"), r;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
Pr.posix = Pr;
var lr = Pr;
function Zl(n) {
  return n && n.split("/").map(encodeURIComponent).join("/");
}
const Jl = typeof Xe == "object" && Xe.env && Xe.env.NODE_DEBUG && /\bsemver\b/i.test(Xe.env.NODE_DEBUG) ? (...n) => console.error("SEMVER", ...n) : () => {
};
var wa = Jl;
const ya = 256, Kl = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, Ql = 16, eu = ya - 6;
var Ea = {
  MAX_LENGTH: ya,
  MAX_SAFE_COMPONENT_LENGTH: Ql,
  MAX_SAFE_BUILD_LENGTH: eu,
  MAX_SAFE_INTEGER: Kl
}, Mi = { exports: {} };
(function(n, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_LENGTH: u
  } = Ea, a = wa;
  e = n.exports = {};
  const h = e.re = [], c = e.safeRe = [], l = e.src = [], o = e.t = {};
  let s = 0;
  const p = "[a-zA-Z0-9-]", d = [
    ["\\s", 1],
    ["\\d", u],
    [p, i]
  ], m = (v) => {
    for (const [_, A] of d)
      v = v.split(`${_}*`).join(`${_}{0,${A}}`).split(`${_}+`).join(`${_}{1,${A}}`);
    return v;
  }, w = (v, _, A) => {
    const E = m(_), I = s++;
    a(v, I, _), o[v] = I, l[I] = _, h[I] = new RegExp(_, A ? "g" : void 0), c[I] = new RegExp(E, A ? "g" : void 0);
  };
  w("NUMERICIDENTIFIER", "0|[1-9]\\d*"), w("NUMERICIDENTIFIERLOOSE", "\\d+"), w("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`), w("MAINVERSION", `(${l[o.NUMERICIDENTIFIER]})\\.(${l[o.NUMERICIDENTIFIER]})\\.(${l[o.NUMERICIDENTIFIER]})`), w("MAINVERSIONLOOSE", `(${l[o.NUMERICIDENTIFIERLOOSE]})\\.(${l[o.NUMERICIDENTIFIERLOOSE]})\\.(${l[o.NUMERICIDENTIFIERLOOSE]})`), w("PRERELEASEIDENTIFIER", `(?:${l[o.NUMERICIDENTIFIER]}|${l[o.NONNUMERICIDENTIFIER]})`), w("PRERELEASEIDENTIFIERLOOSE", `(?:${l[o.NUMERICIDENTIFIERLOOSE]}|${l[o.NONNUMERICIDENTIFIER]})`), w("PRERELEASE", `(?:-(${l[o.PRERELEASEIDENTIFIER]}(?:\\.${l[o.PRERELEASEIDENTIFIER]})*))`), w("PRERELEASELOOSE", `(?:-?(${l[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[o.PRERELEASEIDENTIFIERLOOSE]})*))`), w("BUILDIDENTIFIER", `${p}+`), w("BUILD", `(?:\\+(${l[o.BUILDIDENTIFIER]}(?:\\.${l[o.BUILDIDENTIFIER]})*))`), w("FULLPLAIN", `v?${l[o.MAINVERSION]}${l[o.PRERELEASE]}?${l[o.BUILD]}?`), w("FULL", `^${l[o.FULLPLAIN]}$`), w("LOOSEPLAIN", `[v=\\s]*${l[o.MAINVERSIONLOOSE]}${l[o.PRERELEASELOOSE]}?${l[o.BUILD]}?`), w("LOOSE", `^${l[o.LOOSEPLAIN]}$`), w("GTLT", "((?:<|>)?=?)"), w("XRANGEIDENTIFIERLOOSE", `${l[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), w("XRANGEIDENTIFIER", `${l[o.NUMERICIDENTIFIER]}|x|X|\\*`), w("XRANGEPLAIN", `[v=\\s]*(${l[o.XRANGEIDENTIFIER]})(?:\\.(${l[o.XRANGEIDENTIFIER]})(?:\\.(${l[o.XRANGEIDENTIFIER]})(?:${l[o.PRERELEASE]})?${l[o.BUILD]}?)?)?`), w("XRANGEPLAINLOOSE", `[v=\\s]*(${l[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[o.XRANGEIDENTIFIERLOOSE]})(?:${l[o.PRERELEASELOOSE]})?${l[o.BUILD]}?)?)?`), w("XRANGE", `^${l[o.GTLT]}\\s*${l[o.XRANGEPLAIN]}$`), w("XRANGELOOSE", `^${l[o.GTLT]}\\s*${l[o.XRANGEPLAINLOOSE]}$`), w("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), w("COERCE", `${l[o.COERCEPLAIN]}(?:$|[^\\d])`), w("COERCEFULL", l[o.COERCEPLAIN] + `(?:${l[o.PRERELEASE]})?(?:${l[o.BUILD]})?(?:$|[^\\d])`), w("COERCERTL", l[o.COERCE], !0), w("COERCERTLFULL", l[o.COERCEFULL], !0), w("LONETILDE", "(?:~>?)"), w("TILDETRIM", `(\\s*)${l[o.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", w("TILDE", `^${l[o.LONETILDE]}${l[o.XRANGEPLAIN]}$`), w("TILDELOOSE", `^${l[o.LONETILDE]}${l[o.XRANGEPLAINLOOSE]}$`), w("LONECARET", "(?:\\^)"), w("CARETTRIM", `(\\s*)${l[o.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", w("CARET", `^${l[o.LONECARET]}${l[o.XRANGEPLAIN]}$`), w("CARETLOOSE", `^${l[o.LONECARET]}${l[o.XRANGEPLAINLOOSE]}$`), w("COMPARATORLOOSE", `^${l[o.GTLT]}\\s*(${l[o.LOOSEPLAIN]})$|^$`), w("COMPARATOR", `^${l[o.GTLT]}\\s*(${l[o.FULLPLAIN]})$|^$`), w("COMPARATORTRIM", `(\\s*)${l[o.GTLT]}\\s*(${l[o.LOOSEPLAIN]}|${l[o.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", w("HYPHENRANGE", `^\\s*(${l[o.XRANGEPLAIN]})\\s+-\\s+(${l[o.XRANGEPLAIN]})\\s*$`), w("HYPHENRANGELOOSE", `^\\s*(${l[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[o.XRANGEPLAINLOOSE]})\\s*$`), w("STAR", "(<|>)?=?\\s*\\*"), w("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), w("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(Mi, Mi.exports);
var tu = Mi.exports;
const ru = Object.freeze({ loose: !0 }), nu = Object.freeze({}), iu = (n) => n ? typeof n != "object" ? ru : n : nu;
var ou = iu;
const Po = /^[0-9]+$/, su = (n, e) => {
  const r = Po.test(n), i = Po.test(e);
  return r && i && (n = +n, e = +e), n === e ? 0 : r && !i ? -1 : i && !r ? 1 : n < e ? -1 : 1;
};
var au = {
  compareIdentifiers: su
};
const un = wa, { MAX_LENGTH: $o, MAX_SAFE_INTEGER: cn } = Ea, { safeRe: ko, t: Fo } = tu, lu = ou, { compareIdentifiers: Ar } = au;
let uu = class Lt {
  constructor(e, r) {
    if (r = lu(r), e instanceof Lt) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > $o)
      throw new TypeError(
        `version is longer than ${$o} characters`
      );
    un("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const i = e.trim().match(r.loose ? ko[Fo.LOOSE] : ko[Fo.FULL]);
    if (!i)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +i[1], this.minor = +i[2], this.patch = +i[3], this.major > cn || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > cn || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > cn || this.patch < 0)
      throw new TypeError("Invalid patch version");
    i[4] ? this.prerelease = i[4].split(".").map((u) => {
      if (/^[0-9]+$/.test(u)) {
        const a = +u;
        if (a >= 0 && a < cn)
          return a;
      }
      return u;
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
      const i = this.prerelease[r], u = e.prerelease[r];
      if (un("prerelease compare", r, i, u), i === void 0 && u === void 0)
        return 0;
      if (u === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === u)
        continue;
      return Ar(i, u);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof Lt || (e = new Lt(e, this.options));
    let r = 0;
    do {
      const i = this.build[r], u = e.build[r];
      if (un("build compare", r, i, u), i === void 0 && u === void 0)
        return 0;
      if (u === void 0)
        return 1;
      if (i === void 0)
        return -1;
      if (i === u)
        continue;
      return Ar(i, u);
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
        const u = Number(i) ? 1 : 0;
        if (!r && i === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [u];
        else {
          let a = this.prerelease.length;
          for (; --a >= 0; )
            typeof this.prerelease[a] == "number" && (this.prerelease[a]++, a = -2);
          if (a === -1) {
            if (r === this.prerelease.join(".") && i === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(u);
          }
        }
        if (r) {
          let a = [r, u];
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
var va = uu;
const Mo = va, cu = (n, e, r = !1) => {
  if (n instanceof Mo)
    return n;
  try {
    return new Mo(n, e);
  } catch (i) {
    if (!r)
      return null;
    throw i;
  }
};
var fu = cu;
const hu = fu, pu = (n, e) => {
  const r = hu(n, e);
  return r ? r.version : null;
};
var du = pu;
const gu = /* @__PURE__ */ Zi(du), mu = va, wu = (n, e) => new mu(n, e).major;
var yu = wu;
const Uo = /* @__PURE__ */ Zi(yu);
class Eu {
  constructor(e) {
    ge(this, "bus");
    typeof e.getVersion != "function" || !gu(e.getVersion()) ? console.warn("Proxying an event bus with an unknown or invalid version") : Uo(e.getVersion()) !== Uo(this.getVersion()) && console.warn(
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
class vu {
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
      } catch (u) {
        console.error("could not invoke event listener", u);
      }
    });
  }
}
let Br = null;
function ba() {
  var n;
  return Br !== null ? Br : typeof window > "u" ? new Proxy({}, {
    get: () => () => console.error(
      "Window not available, EventBus can not be established!"
    )
  }) : ((n = window.OC) != null && n._eventBus && typeof window._nc_event_bus > "u" && (console.warn(
    "found old event bus instance at OC._eventBus. Update your version!"
  ), window._nc_event_bus = window.OC._eventBus), typeof (window == null ? void 0 : window._nc_event_bus) < "u" ? Br = new Eu(window._nc_event_bus) : Br = window._nc_event_bus = new vu(), Br);
}
function bu(n, e) {
  ba().subscribe(n, e);
}
function Nu(n, e) {
  ba().emit(n, e);
}
var Fn = {}, Mn = {}, on = {};
Object.defineProperty(on, "__esModule", {
  value: !0
});
on.default = void 0;
function In(n, e, r) {
  return e = Tu(e), e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function Tu(n) {
  var e = Au(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Au(n, e) {
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
    In(this, "scope", void 0), In(this, "wrapped", void 0), this.scope = "".concat(i ? $r.GLOBAL_SCOPE_PERSISTENT : $r.GLOBAL_SCOPE_VOLATILE, "_").concat(btoa(e), "_"), this.wrapped = r;
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
on.default = $r;
In($r, "GLOBAL_SCOPE_VOLATILE", "nextcloud_vol");
In($r, "GLOBAL_SCOPE_PERSISTENT", "nextcloud_per");
Object.defineProperty(Mn, "__esModule", {
  value: !0
});
Mn.default = void 0;
var Iu = _u(on);
function _u(n) {
  return n && n.__esModule ? n : { default: n };
}
function Yn(n, e, r) {
  return e = Ou(e), e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
}
function Ou(n) {
  var e = Ru(n, "string");
  return typeof e == "symbol" ? e : e + "";
}
function Ru(n, e) {
  if (typeof n != "object" || !n) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(n, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(n);
}
class xu {
  constructor(e) {
    Yn(this, "appId", void 0), Yn(this, "persisted", !1), Yn(this, "clearedOnLogout", !1), this.appId = e;
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
    return new Iu.default(this.appId, this.persisted ? window.localStorage : window.sessionStorage, !this.clearedOnLogout);
  }
}
Mn.default = xu;
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
Fn.clearAll = $u;
Fn.clearNonPersistent = ku;
var Cu = Fn.getBuilder = Pu, Su = Na(Mn), Lu = Na(on);
function Na(n) {
  return n && n.__esModule ? n : { default: n };
}
function Pu(n) {
  return new Su.default(n);
}
function Ta(n, e) {
  Object.keys(n).filter((r) => e ? e(r) : !0).map(n.removeItem.bind(n));
}
function $u() {
  [window.sessionStorage, window.localStorage].map((e) => Ta(e));
}
function ku() {
  [window.sessionStorage, window.localStorage].map((e) => Ta(e, (r) => !r.startsWith(Lu.default.GLOBAL_SCOPE_PERSISTENT)));
}
let Zr;
const Aa = [];
function Fu() {
  return Zr === void 0 && (Zr = document.head.dataset.requesttoken ?? null), Zr;
}
function Mu(n) {
  Aa.push(n);
}
bu("csrf-token-update", (n) => {
  Zr = n.token, Aa.forEach((e) => {
    try {
      e(Zr);
    } catch (r) {
      console.error("Error updating CSRF token observer", r);
    }
  });
});
Cu("public").persist().build();
let Ir;
const Bo = (n, e) => n ? n.getAttribute(e) : null;
function Ki() {
  if (Ir !== void 0)
    return Ir;
  const n = document == null ? void 0 : document.getElementsByTagName("head")[0];
  if (!n)
    return null;
  const e = Bo(n, "data-user");
  return e === null ? (Ir = null, Ir) : (Ir = {
    uid: e,
    displayName: Bo(n, "data-user-displayname"),
    isAdmin: !!window._oc_isadmin
  }, Ir);
}
var Re = /* @__PURE__ */ ((n) => (n[n.Debug = 0] = "Debug", n[n.Info = 1] = "Info", n[n.Warn = 2] = "Warn", n[n.Error = 3] = "Error", n[n.Fatal = 4] = "Fatal", n))(Re || {}), Uu = Object.defineProperty, Bu = (n, e, r) => e in n ? Uu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r, Du = (n, e, r) => (Bu(n, e + "", r), r);
class ju {
  constructor(e) {
    Du(this, "context"), this.context = e || {};
  }
  formatMessage(e, r, i) {
    let u = "[" + Re[r].toUpperCase() + "] ";
    return i && i.app && (u += i.app + ": "), typeof e == "string" ? u + e : (u += "Unexpected ".concat(e.name), e.message && (u += ' "'.concat(e.message, '"')), r === Re.Debug && e.stack && (u += `

Stack trace:
`.concat(e.stack)), u);
  }
  log(e, r, i) {
    var u, a;
    if (!(typeof ((u = this.context) == null ? void 0 : u.level) == "number" && e < ((a = this.context) == null ? void 0 : a.level)))
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
function Gu(n) {
  return new ju(n);
}
var qu = Object.defineProperty, Vu = (n, e, r) => e in n ? qu(n, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[e] = r, Do = (n, e, r) => (Vu(n, typeof e != "symbol" ? e + "" : e, r), r);
class Wu {
  constructor(e) {
    Do(this, "context"), Do(this, "factory"), this.context = {}, this.factory = e;
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
    const e = Ki();
    return e !== null && (this.context.uid = e.uid), this;
  }
  /**
   * Detect and use logging level configured in nextcloud config
   */
  detectLogLevel() {
    const e = this, r = () => {
      var i, u;
      document.readyState === "complete" || document.readyState === "interactive" ? (e.context.level = (u = (i = window._oc_config) == null ? void 0 : i.loglevel) != null ? u : Re.Warn, window._oc_debug && (e.context.level = Re.Debug), document.removeEventListener("readystatechange", r)) : document.addEventListener("readystatechange", r);
    };
    return r(), this;
  }
  /** Build a logger using the logging context and factory */
  build() {
    return this.context.level === void 0 && this.detectLogLevel(), this.factory(this.context);
  }
}
function Xu() {
  return new Wu(Gu);
}
const zu = (n) => "/remote.php/" + n, Hu = (n, e) => {
  var r;
  return ((r = void 0) != null ? r : Yu()) + zu(n);
}, Yu = () => window.location.protocol + "//" + window.location.host + Zu();
function Zu() {
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
function jo(n, e, r) {
  Ju(n, e), e.set(n, r);
}
function Ju(n, e) {
  if (e.has(n))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Be(n, e) {
  var r = Ia(n, e, "get");
  return Ku(n, r);
}
function Ku(n, e) {
  return e.get ? e.get.call(n) : e.value;
}
function Go(n, e, r) {
  var i = Ia(n, e, "set");
  return Qu(n, i, r), r;
}
function Ia(n, e, r) {
  if (!e.has(n))
    throw new TypeError("attempted to " + r + " private field on non-instance");
  return e.get(n);
}
function Qu(n, e, r) {
  if (e.set)
    e.set.call(n, r);
  else {
    if (!e.writable)
      throw new TypeError("attempted to set read only private field");
    e.value = r;
  }
}
var ec = typeof Symbol < "u" ? Symbol.toStringTag : "@@toStringTag", Ve = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap();
class Un {
  constructor(e) {
    var {
      executor: r = () => {
      },
      internals: i = eo(),
      promise: u = new Promise((a, h) => r(a, h, (c) => {
        i.onCancelList.push(c);
      }))
    } = e;
    jo(this, Ve, {
      writable: !0,
      value: void 0
    }), jo(this, Dr, {
      writable: !0,
      value: void 0
    }), or(this, ec, "CancelablePromise"), this.cancel = this.cancel.bind(this), Go(this, Ve, i), Go(this, Dr, u || new Promise((a, h) => r(a, h, (c) => {
      i.onCancelList.push(c);
    })));
  }
  then(e, r) {
    return En(Be(this, Dr).then(fn(e, Be(this, Ve)), fn(r, Be(this, Ve))), Be(this, Ve));
  }
  catch(e) {
    return En(Be(this, Dr).catch(fn(e, Be(this, Ve))), Be(this, Ve));
  }
  finally(e, r) {
    return r && Be(this, Ve).onCancelList.push(e), En(Be(this, Dr).finally(fn(() => {
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
class sr extends Un {
  constructor(e) {
    super({
      executor: e
    });
  }
}
or(sr, "all", function(e) {
  return Bn(e, Promise.all(e));
});
or(sr, "allSettled", function(e) {
  return Bn(e, Promise.allSettled(e));
});
or(sr, "any", function(e) {
  return Bn(e, Promise.any(e));
});
or(sr, "race", function(e) {
  return Bn(e, Promise.race(e));
});
or(sr, "resolve", function(e) {
  return _a(Promise.resolve(e));
});
or(sr, "reject", function(e) {
  return _a(Promise.reject(e));
});
or(sr, "isCancelable", Qi);
function _a(n) {
  return En(n, eo());
}
function Qi(n) {
  return n instanceof sr || n instanceof Un;
}
function fn(n, e) {
  if (n)
    return (r) => {
      if (!e.isCanceled) {
        var i = n(r);
        return Qi(i) && e.onCancelList.push(i.cancel), i;
      }
      return r;
    };
}
function En(n, e) {
  return new Un({
    internals: e,
    promise: n
  });
}
function Bn(n, e) {
  var r = eo();
  return r.onCancelList.push(() => {
    for (var i of n)
      Qi(i) && i.cancel();
  }), new Un({
    internals: r,
    promise: e
  });
}
function eo() {
  return {
    isCanceled: !1,
    onCancelList: []
  };
}
/*! For license information please see index.js.LICENSE.txt */
var tc = { 2: (n) => {
  function e(u, a, h) {
    u instanceof RegExp && (u = r(u, h)), a instanceof RegExp && (a = r(a, h));
    var c = i(u, a, h);
    return c && { start: c[0], end: c[1], pre: h.slice(0, c[0]), body: h.slice(c[0] + u.length, c[1]), post: h.slice(c[1] + a.length) };
  }
  function r(u, a) {
    var h = a.match(u);
    return h ? h[0] : null;
  }
  function i(u, a, h) {
    var c, l, o, s, p, d = h.indexOf(u), m = h.indexOf(a, d + 1), w = d;
    if (d >= 0 && m > 0) {
      for (c = [], o = h.length; w >= 0 && !p; ) w == d ? (c.push(w), d = h.indexOf(u, w + 1)) : c.length == 1 ? p = [c.pop(), m] : ((l = c.pop()) < o && (o = l, s = m), m = h.indexOf(a, w + 1)), w = d < m && d >= 0 ? d : m;
      c.length && (p = [o, s]);
    }
    return p;
  }
  n.exports = e, e.range = i;
}, 101: function(n, e, r) {
  var i;
  n = r.nmd(n), function(u) {
    var a = (n && n.exports, typeof ln == "object" && ln);
    a.global !== a && a.window;
    var h = function(p) {
      this.message = p;
    };
    (h.prototype = new Error()).name = "InvalidCharacterError";
    var c = function(p) {
      throw new h(p);
    }, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = /[\t\n\f\r ]/g, s = { encode: function(p) {
      p = String(p), /[^\0-\xFF]/.test(p) && c("The string to be encoded contains characters outside of the Latin1 range.");
      for (var d, m, w, v, _ = p.length % 3, A = "", E = -1, I = p.length - _; ++E < I; ) d = p.charCodeAt(E) << 16, m = p.charCodeAt(++E) << 8, w = p.charCodeAt(++E), A += l.charAt((v = d + m + w) >> 18 & 63) + l.charAt(v >> 12 & 63) + l.charAt(v >> 6 & 63) + l.charAt(63 & v);
      return _ == 2 ? (d = p.charCodeAt(E) << 8, m = p.charCodeAt(++E), A += l.charAt((v = d + m) >> 10) + l.charAt(v >> 4 & 63) + l.charAt(v << 2 & 63) + "=") : _ == 1 && (v = p.charCodeAt(E), A += l.charAt(v >> 2) + l.charAt(v << 4 & 63) + "=="), A;
    }, decode: function(p) {
      var d = (p = String(p).replace(o, "")).length;
      d % 4 == 0 && (d = (p = p.replace(/==?$/, "")).length), (d % 4 == 1 || /[^+a-zA-Z0-9/]/.test(p)) && c("Invalid character: the string to be decoded is not correctly encoded.");
      for (var m, w, v = 0, _ = "", A = -1; ++A < d; ) w = l.indexOf(p.charAt(A)), m = v % 4 ? 64 * m + w : w, v++ % 4 && (_ += String.fromCharCode(255 & m >> (-2 * v & 6)));
      return _;
    }, version: "1.0.0" };
    (i = (function() {
      return s;
    }).call(e, r, e, n)) === void 0 || (n.exports = i);
  }();
}, 172: (n, e) => {
  e.d = function(r) {
    if (!r) return 0;
    for (var i = (r = r.toString()).length, u = r.length; u--; ) {
      var a = r.charCodeAt(u);
      56320 <= a && a <= 57343 && u--, 127 < a && a <= 2047 ? i++ : 2047 < a && a <= 65535 && (i += 2);
    }
    return i;
  };
}, 526: (n) => {
  var e = { utf8: { stringToBytes: function(r) {
    return e.bin.stringToBytes(unescape(encodeURIComponent(r)));
  }, bytesToString: function(r) {
    return decodeURIComponent(escape(e.bin.bytesToString(r)));
  } }, bin: { stringToBytes: function(r) {
    for (var i = [], u = 0; u < r.length; u++) i.push(255 & r.charCodeAt(u));
    return i;
  }, bytesToString: function(r) {
    for (var i = [], u = 0; u < r.length; u++) i.push(String.fromCharCode(r[u]));
    return i.join("");
  } } };
  n.exports = e;
}, 298: (n) => {
  var e, r;
  e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = { rotl: function(i, u) {
    return i << u | i >>> 32 - u;
  }, rotr: function(i, u) {
    return i << 32 - u | i >>> u;
  }, endian: function(i) {
    if (i.constructor == Number) return 16711935 & r.rotl(i, 8) | 4278255360 & r.rotl(i, 24);
    for (var u = 0; u < i.length; u++) i[u] = r.endian(i[u]);
    return i;
  }, randomBytes: function(i) {
    for (var u = []; i > 0; i--) u.push(Math.floor(256 * Math.random()));
    return u;
  }, bytesToWords: function(i) {
    for (var u = [], a = 0, h = 0; a < i.length; a++, h += 8) u[h >>> 5] |= i[a] << 24 - h % 32;
    return u;
  }, wordsToBytes: function(i) {
    for (var u = [], a = 0; a < 32 * i.length; a += 8) u.push(i[a >>> 5] >>> 24 - a % 32 & 255);
    return u;
  }, bytesToHex: function(i) {
    for (var u = [], a = 0; a < i.length; a++) u.push((i[a] >>> 4).toString(16)), u.push((15 & i[a]).toString(16));
    return u.join("");
  }, hexToBytes: function(i) {
    for (var u = [], a = 0; a < i.length; a += 2) u.push(parseInt(i.substr(a, 2), 16));
    return u;
  }, bytesToBase64: function(i) {
    for (var u = [], a = 0; a < i.length; a += 3) for (var h = i[a] << 16 | i[a + 1] << 8 | i[a + 2], c = 0; c < 4; c++) 8 * a + 6 * c <= 8 * i.length ? u.push(e.charAt(h >>> 6 * (3 - c) & 63)) : u.push("=");
    return u.join("");
  }, base64ToBytes: function(i) {
    i = i.replace(/[^A-Z0-9+\/]/gi, "");
    for (var u = [], a = 0, h = 0; a < i.length; h = ++a % 4) h != 0 && u.push((e.indexOf(i.charAt(a - 1)) & Math.pow(2, -2 * h + 8) - 1) << 2 * h | e.indexOf(i.charAt(a)) >>> 6 - 2 * h);
    return u;
  } }, n.exports = r;
}, 635: (n, e, r) => {
  const i = r(31), u = r(338), a = r(221);
  n.exports = { XMLParser: u, XMLValidator: i, XMLBuilder: a };
}, 705: (n, e) => {
  const r = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", i = "[" + r + "][" + r + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*", u = new RegExp("^" + i + "$");
  e.isExist = function(a) {
    return a !== void 0;
  }, e.isEmptyObject = function(a) {
    return Object.keys(a).length === 0;
  }, e.merge = function(a, h, c) {
    if (h) {
      const l = Object.keys(h), o = l.length;
      for (let s = 0; s < o; s++) a[l[s]] = c === "strict" ? [h[l[s]]] : h[l[s]];
    }
  }, e.getValue = function(a) {
    return e.isExist(a) ? a : "";
  }, e.isName = function(a) {
    return u.exec(a) != null;
  }, e.getAllMatches = function(a, h) {
    const c = [];
    let l = h.exec(a);
    for (; l; ) {
      const o = [];
      o.startIndex = h.lastIndex - l[0].length;
      const s = l.length;
      for (let p = 0; p < s; p++) o.push(l[p]);
      c.push(o), l = h.exec(a);
    }
    return c;
  }, e.nameRegexp = i;
}, 31: (n, e, r) => {
  const i = r(705), u = { allowBooleanAttributes: !1, unpairedTags: [] };
  function a(E) {
    return E === " " || E === "	" || E === `
` || E === "\r";
  }
  function h(E, I) {
    const C = I;
    for (; I < E.length; I++) if (!(E[I] != "?" && E[I] != " ")) {
      const T = E.substr(C, I - C);
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
      let C = 1;
      for (I += 8; I < E.length; I++) if (E[I] === "<") C++;
      else if (E[I] === ">" && (C--, C === 0)) break;
    } else if (E.length > I + 9 && E[I + 1] === "[" && E[I + 2] === "C" && E[I + 3] === "D" && E[I + 4] === "A" && E[I + 5] === "T" && E[I + 6] === "A" && E[I + 7] === "[") {
      for (I += 8; I < E.length; I++) if (E[I] === "]" && E[I + 1] === "]" && E[I + 2] === ">") {
        I += 2;
        break;
      }
    }
    return I;
  }
  e.validate = function(E, I) {
    I = Object.assign({}, u, I);
    const C = [];
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
          if (D = D.trim(), D[D.length - 1] === "/" && (D = D.substring(0, D.length - 1), P--), S = D, !i.isName(S)) {
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
            if (C.length === 0) return w("InvalidTag", "Closing tag '" + D + "' has not been opened.", _(E, k));
            {
              const q = C.pop();
              if (D !== q.tagName) {
                let V = _(E, q.tagStartPos);
                return w("InvalidTag", "Expected closing tag '" + q.tagName + "' (opened in line " + V.line + ", col " + V.col + ") instead of closing tag '" + D + "'.", _(E, k));
              }
              C.length == 0 && (x = !0);
            }
          } else {
            const q = d($, I);
            if (q !== !0) return w(q.err.code, q.err.msg, _(E, P - $.length + q.err.line));
            if (x === !0) return w("InvalidXml", "Multiple possible root nodes found.", _(E, P));
            I.unpairedTags.indexOf(D) !== -1 || C.push({ tagName: D, tagStartPos: k }), T = !0;
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
    var S;
    return T ? C.length == 1 ? w("InvalidTag", "Unclosed tag '" + C[0].tagName + "'.", _(E, C[0].tagStartPos)) : !(C.length > 0) || w("InvalidXml", "Invalid '" + JSON.stringify(C.map((P) => P.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : w("InvalidXml", "Start tag expected.", 1);
  };
  const l = '"', o = "'";
  function s(E, I) {
    let C = "", T = "", x = !1;
    for (; I < E.length; I++) {
      if (E[I] === l || E[I] === o) T === "" ? T = E[I] : T !== E[I] || (T = "");
      else if (E[I] === ">" && T === "") {
        x = !0;
        break;
      }
      C += E[I];
    }
    return T === "" && { value: C, index: I, tagClosed: x };
  }
  const p = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function d(E, I) {
    const C = i.getAllMatches(E, p), T = {};
    for (let x = 0; x < C.length; x++) {
      if (C[x][1].length === 0) return w("InvalidAttr", "Attribute '" + C[x][2] + "' has no space in starting.", A(C[x]));
      if (C[x][3] !== void 0 && C[x][4] === void 0) return w("InvalidAttr", "Attribute '" + C[x][2] + "' is without value.", A(C[x]));
      if (C[x][3] === void 0 && !I.allowBooleanAttributes) return w("InvalidAttr", "boolean attribute '" + C[x][2] + "' is not allowed.", A(C[x]));
      const S = C[x][2];
      if (!v(S)) return w("InvalidAttr", "Attribute '" + S + "' is an invalid name.", A(C[x]));
      if (T.hasOwnProperty(S)) return w("InvalidAttr", "Attribute '" + S + "' is repeated.", A(C[x]));
      T[S] = 1;
    }
    return !0;
  }
  function m(E, I) {
    if (E[++I] === ";") return -1;
    if (E[I] === "#") return function(T, x) {
      let S = /\d/;
      for (T[x] === "x" && (x++, S = /[\da-fA-F]/); x < T.length; x++) {
        if (T[x] === ";") return x;
        if (!T[x].match(S)) break;
      }
      return -1;
    }(E, ++I);
    let C = 0;
    for (; I < E.length; I++, C++) if (!(E[I].match(/\w/) && C < 20)) {
      if (E[I] === ";") break;
      return -1;
    }
    return I;
  }
  function w(E, I, C) {
    return { err: { code: E, msg: I, line: C.line || C, col: C.col } };
  }
  function v(E) {
    return i.isName(E);
  }
  function _(E, I) {
    const C = E.substring(0, I).split(/\r?\n/);
    return { line: C.length, col: C[C.length - 1].length + 1 };
  }
  function A(E) {
    return E.startIndex + E[1].length;
  }
}, 221: (n, e, r) => {
  const i = r(87), u = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function(o, s) {
    return s;
  }, attributeValueProcessor: function(o, s) {
    return s;
  }, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
  function a(o) {
    this.options = Object.assign({}, u, o), this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function() {
      return !1;
    } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = l), this.processTextOrObjNode = h, this.options.format ? (this.indentate = c, this.tagEndChar = `>
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
  function l(o) {
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
  function e(h, c, l, o) {
    let s = "", p = !1;
    for (let d = 0; d < h.length; d++) {
      const m = h[d], w = r(m);
      if (w === void 0) continue;
      let v = "";
      if (v = l.length === 0 ? w : `${l}.${w}`, w === c.textNodeName) {
        let I = m[w];
        u(v, c) || (I = c.tagValueProcessor(w, I), I = a(I, c)), p && (s += o), s += I, p = !1;
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
        const I = i(m[":@"], c), C = w === "?xml" ? "" : o;
        let T = m[w][0][c.textNodeName];
        T = T.length !== 0 ? " " + T : "", s += C + `<${w}${T}${I}?>`, p = !0;
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
    for (let l = 0; l < c.length; l++) {
      const o = c[l];
      if (h.hasOwnProperty(o) && o !== ":@") return o;
    }
  }
  function i(h, c) {
    let l = "";
    if (h && !c.ignoreAttributes) for (let o in h) {
      if (!h.hasOwnProperty(o)) continue;
      let s = c.attributeValueProcessor(o, h[o]);
      s = a(s, c), s === !0 && c.suppressBooleanAttributes ? l += ` ${o.substr(c.attributeNamePrefix.length)}` : l += ` ${o.substr(c.attributeNamePrefix.length)}="${s}"`;
    }
    return l;
  }
  function u(h, c) {
    let l = (h = h.substr(0, h.length - c.textNodeName.length - 1)).substr(h.lastIndexOf(".") + 1);
    for (let o in c.stopNodes) if (c.stopNodes[o] === h || c.stopNodes[o] === "*." + l) return !0;
    return !1;
  }
  function a(h, c) {
    if (h && h.length > 0 && c.processEntities) for (let l = 0; l < c.entities.length; l++) {
      const o = c.entities[l];
      h = h.replace(o.regex, o.val);
    }
    return h;
  }
  n.exports = function(h, c) {
    let l = "";
    return c.format && c.indentBy.length > 0 && (l = `
`), e(h, c, "", l);
  };
}, 193: (n, e, r) => {
  const i = r(705);
  function u(p, d) {
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
  function l(p, d) {
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
        if (v && h(p, d)) d += 7, [entityName, val, d] = u(p, d + 1), val.indexOf("&") === -1 && (m[s(entityName)] = { regx: RegExp(`&${entityName};`, "g"), val });
        else if (v && c(p, d)) d += 8;
        else if (v && l(p, d)) d += 8;
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
  const r = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function(i, u) {
    return u;
  }, attributeValueProcessor: function(i, u) {
    return u;
  }, stopNodes: [], alwaysCreateTextNode: !1, isArray: () => !1, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function(i, u, a) {
    return i;
  } };
  e.buildOptions = function(i) {
    return Object.assign({}, r, i);
  }, e.defaultOptions = r;
}, 299: (n, e, r) => {
  const i = r(705), u = r(365), a = r(193), h = r(494);
  function c(T) {
    const x = Object.keys(T);
    for (let S = 0; S < x.length; S++) {
      const P = x[S];
      this.lastEntities[P] = { regex: new RegExp("&" + P + ";", "g"), val: T[P] };
    }
  }
  function l(T, x, S, P, k, j, D) {
    if (T !== void 0 && (this.options.trimValues && !P && (T = T.trim()), T.length > 0)) {
      D || (T = this.replaceEntitiesValue(T));
      const B = this.options.tagValueProcessor(x, T, S, k, j);
      return B == null ? T : typeof B != typeof T || B !== T ? B : this.options.trimValues || T.trim() === T ? C(T, this.options.parseTagValue, this.options.numberParseOptions) : T;
    }
  }
  function o(T) {
    if (this.options.removeNSPrefix) {
      const x = T.split(":"), S = T.charAt(0) === "/" ? "/" : "";
      if (x[0] === "xmlns") return "";
      x.length === 2 && (T = S + x[1]);
    }
    return T;
  }
  const s = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function p(T, x, S) {
    if (!this.options.ignoreAttributes && typeof T == "string") {
      const P = i.getAllMatches(T, s), k = P.length, j = {};
      for (let D = 0; D < k; D++) {
        const B = this.resolveNameSpace(P[D][1]);
        let $ = P[D][4], q = this.options.attributeNamePrefix + B;
        if (B.length) if (this.options.transformAttributeName && (q = this.options.transformAttributeName(q)), q === "__proto__" && (q = "#__proto__"), $ !== void 0) {
          this.options.trimValues && ($ = $.trim()), $ = this.replaceEntitiesValue($);
          const V = this.options.attributeValueProcessor(B, $, x);
          j[q] = V == null ? $ : typeof V != typeof $ || V !== $ ? V : C($, this.options.parseAttributeValue, this.options.numberParseOptions);
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
    const x = new u("!xml");
    let S = x, P = "", k = "";
    for (let j = 0; j < T.length; j++) if (T[j] === "<") if (T[j + 1] === "/") {
      const D = A(T, ">", j, "Closing Tag is not closed.");
      let B = T.substring(j + 2, D).trim();
      if (this.options.removeNSPrefix) {
        const V = B.indexOf(":");
        V !== -1 && (B = B.substr(V + 1));
      }
      this.options.transformTagName && (B = this.options.transformTagName(B)), S && (P = this.saveTextToParentTag(P, S, k));
      const $ = k.substring(k.lastIndexOf(".") + 1);
      if (B && this.options.unpairedTags.indexOf(B) !== -1) throw new Error(`Unpaired tag can not be used as closing tag: </${B}>`);
      let q = 0;
      $ && this.options.unpairedTags.indexOf($) !== -1 ? (q = k.lastIndexOf(".", k.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : q = k.lastIndexOf("."), k = k.substring(0, q), S = this.tagsNodeStack.pop(), P = "", j = D;
    } else if (T[j + 1] === "?") {
      let D = E(T, j, !1, "?>");
      if (!D) throw new Error("Pi Tag is not closed.");
      if (P = this.saveTextToParentTag(P, S, k), !(this.options.ignoreDeclaration && D.tagName === "?xml" || this.options.ignorePiTags)) {
        const B = new u(D.tagName);
        B.add(this.options.textNodeName, ""), D.tagName !== D.tagExp && D.attrExpPresent && (B[":@"] = this.buildAttributesMap(D.tagExp, k, D.tagName)), this.addChild(S, B, k);
      }
      j = D.closeIndex + 1;
    } else if (T.substr(j + 1, 3) === "!--") {
      const D = A(T, "-->", j + 4, "Comment is not closed.");
      if (this.options.commentPropName) {
        const B = T.substring(j + 4, D - 2);
        P = this.saveTextToParentTag(P, S, k), S.add(this.options.commentPropName, [{ [this.options.textNodeName]: B }]);
      }
      j = D;
    } else if (T.substr(j + 1, 2) === "!D") {
      const D = a(T, j);
      this.docTypeEntities = D.entities, j = D.i;
    } else if (T.substr(j + 1, 2) === "![") {
      const D = A(T, "]]>", j, "CDATA is not closed.") - 2, B = T.substring(j + 9, D);
      P = this.saveTextToParentTag(P, S, k);
      let $ = this.parseTextData(B, S.tagname, k, !0, !1, !0, !0);
      $ == null && ($ = ""), this.options.cdataPropName ? S.add(this.options.cdataPropName, [{ [this.options.textNodeName]: B }]) : S.add(this.options.textNodeName, $), j = D + 2;
    } else {
      let D = E(T, j, this.options.removeNSPrefix), B = D.tagName;
      const $ = D.rawTagName;
      let q = D.tagExp, V = D.attrExpPresent, oe = D.closeIndex;
      this.options.transformTagName && (B = this.options.transformTagName(B)), S && P && S.tagname !== "!xml" && (P = this.saveTextToParentTag(P, S, k, !1));
      const ne = S;
      if (ne && this.options.unpairedTags.indexOf(ne.tagname) !== -1 && (S = this.tagsNodeStack.pop(), k = k.substring(0, k.lastIndexOf("."))), B !== x.tagname && (k += k ? "." + B : B), this.isItStopNode(this.options.stopNodes, k, B)) {
        let te = "";
        if (q.length > 0 && q.lastIndexOf("/") === q.length - 1) B[B.length - 1] === "/" ? (B = B.substr(0, B.length - 1), k = k.substr(0, k.length - 1), q = B) : q = q.substr(0, q.length - 1), j = D.closeIndex;
        else if (this.options.unpairedTags.indexOf(B) !== -1) j = D.closeIndex;
        else {
          const fe = this.readStopNodeData(T, $, oe + 1);
          if (!fe) throw new Error(`Unexpected end of ${$}`);
          j = fe.i, te = fe.tagContent;
        }
        const ae = new u(B);
        B !== q && V && (ae[":@"] = this.buildAttributesMap(q, k, B)), te && (te = this.parseTextData(te, B, k, !0, V, !0, !0)), k = k.substr(0, k.lastIndexOf(".")), ae.add(this.options.textNodeName, te), this.addChild(S, ae, k);
      } else {
        if (q.length > 0 && q.lastIndexOf("/") === q.length - 1) {
          B[B.length - 1] === "/" ? (B = B.substr(0, B.length - 1), k = k.substr(0, k.length - 1), q = B) : q = q.substr(0, q.length - 1), this.options.transformTagName && (B = this.options.transformTagName(B));
          const te = new u(B);
          B !== q && V && (te[":@"] = this.buildAttributesMap(q, k, B)), this.addChild(S, te, k), k = k.substr(0, k.lastIndexOf("."));
        } else {
          const te = new u(B);
          this.tagsNodeStack.push(S), B !== q && V && (te[":@"] = this.buildAttributesMap(q, k, B)), this.addChild(S, te, k), S = te;
        }
        P = "", j = oe;
      }
    }
    else P += T[j];
    return x.child;
  };
  function m(T, x, S) {
    const P = this.options.updateTag(x.tagname, S, x[":@"]);
    P === !1 || (typeof P == "string" && (x.tagname = P), T.addChild(x));
  }
  const w = function(T) {
    if (this.options.processEntities) {
      for (let x in this.docTypeEntities) {
        const S = this.docTypeEntities[x];
        T = T.replace(S.regx, S.val);
      }
      for (let x in this.lastEntities) {
        const S = this.lastEntities[x];
        T = T.replace(S.regex, S.val);
      }
      if (this.options.htmlEntities) for (let x in this.htmlEntities) {
        const S = this.htmlEntities[x];
        T = T.replace(S.regex, S.val);
      }
      T = T.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return T;
  };
  function v(T, x, S, P) {
    return T && (P === void 0 && (P = Object.keys(x.child).length === 0), (T = this.parseTextData(T, x.tagname, S, !1, !!x[":@"] && Object.keys(x[":@"]).length !== 0, P)) !== void 0 && T !== "" && x.add(this.options.textNodeName, T), T = ""), T;
  }
  function _(T, x, S) {
    const P = "*." + S;
    for (const k in T) {
      const j = T[k];
      if (P === j || x === j) return !0;
    }
    return !1;
  }
  function A(T, x, S, P) {
    const k = T.indexOf(x, S);
    if (k === -1) throw new Error(P);
    return k + x.length - 1;
  }
  function E(T, x, S) {
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
    if (S) {
      const V = B.indexOf(":");
      V !== -1 && (B = B.substr(V + 1), $ = B !== P.data.substr(V + 1));
    }
    return { tagName: B, tagExp: k, closeIndex: j, attrExpPresent: $, rawTagName: q };
  }
  function I(T, x, S) {
    const P = S;
    let k = 1;
    for (; S < T.length; S++) if (T[S] === "<") if (T[S + 1] === "/") {
      const j = A(T, ">", S, `${x} is not closed`);
      if (T.substring(S + 2, j).trim() === x && (k--, k === 0)) return { tagContent: T.substring(P, S), i: j };
      S = j;
    } else if (T[S + 1] === "?") S = A(T, "?>", S + 1, "StopNode is not closed.");
    else if (T.substr(S + 1, 3) === "!--") S = A(T, "-->", S + 3, "StopNode is not closed.");
    else if (T.substr(S + 1, 2) === "![") S = A(T, "]]>", S, "StopNode is not closed.") - 2;
    else {
      const j = E(T, S, ">");
      j && ((j && j.tagName) === x && j.tagExp[j.tagExp.length - 1] !== "/" && k++, S = j.closeIndex);
    }
  }
  function C(T, x, S) {
    if (x && typeof T == "string") {
      const P = T.trim();
      return P === "true" || P !== "false" && h(T, S);
    }
    return i.isExist(T) ? T : "";
  }
  n.exports = class {
    constructor(T) {
      this.options = T, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: (x, S) => String.fromCharCode(Number.parseInt(S, 10)) }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (x, S) => String.fromCharCode(Number.parseInt(S, 16)) } }, this.addExternalEntities = c, this.parseXml = d, this.parseTextData = l, this.resolveNameSpace = o, this.buildAttributesMap = p, this.isItStopNode = _, this.replaceEntitiesValue = w, this.readStopNodeData = I, this.saveTextToParentTag = v, this.addChild = m;
    }
  };
}, 338: (n, e, r) => {
  const { buildOptions: i } = r(63), u = r(299), { prettify: a } = r(728), h = r(31);
  n.exports = class {
    constructor(c) {
      this.externalEntities = {}, this.options = i(c);
    }
    parse(c, l) {
      if (typeof c != "string") {
        if (!c.toString) throw new Error("XML data is accepted in String or Bytes[] form.");
        c = c.toString();
      }
      if (l) {
        l === !0 && (l = {});
        const p = h.validate(c, l);
        if (p !== !0) throw Error(`${p.err.msg}:${p.err.line}:${p.err.col}`);
      }
      const o = new u(this.options);
      o.addExternalEntities(this.externalEntities);
      const s = o.parseXml(c);
      return this.options.preserveOrder || s === void 0 ? s : a(s, this.options);
    }
    addEntity(c, l) {
      if (l.indexOf("&") !== -1) throw new Error("Entity value can't have '&'");
      if (c.indexOf("&") !== -1 || c.indexOf(";") !== -1) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      if (l === "&") throw new Error("An entity with value '&' is not permitted");
      this.externalEntities[c] = l;
    }
  };
}, 728: (n, e) => {
  function r(h, c, l) {
    let o;
    const s = {};
    for (let p = 0; p < h.length; p++) {
      const d = h[p], m = i(d);
      let w = "";
      if (w = l === void 0 ? m : l + "." + m, m === c.textNodeName) o === void 0 ? o = d[m] : o += "" + d[m];
      else {
        if (m === void 0) continue;
        if (d[m]) {
          let v = r(d[m], c, w);
          const _ = a(v, c);
          d[":@"] ? u(v, d[":@"], w, c) : Object.keys(v).length !== 1 || v[c.textNodeName] === void 0 || c.alwaysCreateTextNode ? Object.keys(v).length === 0 && (c.alwaysCreateTextNode ? v[c.textNodeName] = "" : v = "") : v = v[c.textNodeName], s[m] !== void 0 && s.hasOwnProperty(m) ? (Array.isArray(s[m]) || (s[m] = [s[m]]), s[m].push(v)) : c.isArray(m, w, _) ? s[m] = [v] : s[m] = v;
        }
      }
    }
    return typeof o == "string" ? o.length > 0 && (s[c.textNodeName] = o) : o !== void 0 && (s[c.textNodeName] = o), s;
  }
  function i(h) {
    const c = Object.keys(h);
    for (let l = 0; l < c.length; l++) {
      const o = c[l];
      if (o !== ":@") return o;
    }
  }
  function u(h, c, l, o) {
    if (c) {
      const s = Object.keys(c), p = s.length;
      for (let d = 0; d < p; d++) {
        const m = s[d];
        o.isArray(m, l + "." + m, !0, !0) ? h[m] = [c[m]] : h[m] = c[m];
      }
    }
  }
  function a(h, c) {
    const { textNodeName: l } = c, o = Object.keys(h).length;
    return o === 0 || !(o !== 1 || !h[l] && typeof h[l] != "boolean" && h[l] !== 0);
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
    var i = r(298), u = r(526).utf8, a = r(135), h = r(526).bin, c = function(l, o) {
      l.constructor == String ? l = o && o.encoding === "binary" ? h.stringToBytes(l) : u.stringToBytes(l) : a(l) ? l = Array.prototype.slice.call(l, 0) : Array.isArray(l) || l.constructor === Uint8Array || (l = l.toString());
      for (var s = i.bytesToWords(l), p = 8 * l.length, d = 1732584193, m = -271733879, w = -1732584194, v = 271733878, _ = 0; _ < s.length; _++) s[_] = 16711935 & (s[_] << 8 | s[_] >>> 24) | 4278255360 & (s[_] << 24 | s[_] >>> 8);
      s[p >>> 5] |= 128 << p % 32, s[14 + (p + 64 >>> 9 << 4)] = p;
      var A = c._ff, E = c._gg, I = c._hh, C = c._ii;
      for (_ = 0; _ < s.length; _ += 16) {
        var T = d, x = m, S = w, P = v;
        d = A(d, m, w, v, s[_ + 0], 7, -680876936), v = A(v, d, m, w, s[_ + 1], 12, -389564586), w = A(w, v, d, m, s[_ + 2], 17, 606105819), m = A(m, w, v, d, s[_ + 3], 22, -1044525330), d = A(d, m, w, v, s[_ + 4], 7, -176418897), v = A(v, d, m, w, s[_ + 5], 12, 1200080426), w = A(w, v, d, m, s[_ + 6], 17, -1473231341), m = A(m, w, v, d, s[_ + 7], 22, -45705983), d = A(d, m, w, v, s[_ + 8], 7, 1770035416), v = A(v, d, m, w, s[_ + 9], 12, -1958414417), w = A(w, v, d, m, s[_ + 10], 17, -42063), m = A(m, w, v, d, s[_ + 11], 22, -1990404162), d = A(d, m, w, v, s[_ + 12], 7, 1804603682), v = A(v, d, m, w, s[_ + 13], 12, -40341101), w = A(w, v, d, m, s[_ + 14], 17, -1502002290), d = E(d, m = A(m, w, v, d, s[_ + 15], 22, 1236535329), w, v, s[_ + 1], 5, -165796510), v = E(v, d, m, w, s[_ + 6], 9, -1069501632), w = E(w, v, d, m, s[_ + 11], 14, 643717713), m = E(m, w, v, d, s[_ + 0], 20, -373897302), d = E(d, m, w, v, s[_ + 5], 5, -701558691), v = E(v, d, m, w, s[_ + 10], 9, 38016083), w = E(w, v, d, m, s[_ + 15], 14, -660478335), m = E(m, w, v, d, s[_ + 4], 20, -405537848), d = E(d, m, w, v, s[_ + 9], 5, 568446438), v = E(v, d, m, w, s[_ + 14], 9, -1019803690), w = E(w, v, d, m, s[_ + 3], 14, -187363961), m = E(m, w, v, d, s[_ + 8], 20, 1163531501), d = E(d, m, w, v, s[_ + 13], 5, -1444681467), v = E(v, d, m, w, s[_ + 2], 9, -51403784), w = E(w, v, d, m, s[_ + 7], 14, 1735328473), d = I(d, m = E(m, w, v, d, s[_ + 12], 20, -1926607734), w, v, s[_ + 5], 4, -378558), v = I(v, d, m, w, s[_ + 8], 11, -2022574463), w = I(w, v, d, m, s[_ + 11], 16, 1839030562), m = I(m, w, v, d, s[_ + 14], 23, -35309556), d = I(d, m, w, v, s[_ + 1], 4, -1530992060), v = I(v, d, m, w, s[_ + 4], 11, 1272893353), w = I(w, v, d, m, s[_ + 7], 16, -155497632), m = I(m, w, v, d, s[_ + 10], 23, -1094730640), d = I(d, m, w, v, s[_ + 13], 4, 681279174), v = I(v, d, m, w, s[_ + 0], 11, -358537222), w = I(w, v, d, m, s[_ + 3], 16, -722521979), m = I(m, w, v, d, s[_ + 6], 23, 76029189), d = I(d, m, w, v, s[_ + 9], 4, -640364487), v = I(v, d, m, w, s[_ + 12], 11, -421815835), w = I(w, v, d, m, s[_ + 15], 16, 530742520), d = C(d, m = I(m, w, v, d, s[_ + 2], 23, -995338651), w, v, s[_ + 0], 6, -198630844), v = C(v, d, m, w, s[_ + 7], 10, 1126891415), w = C(w, v, d, m, s[_ + 14], 15, -1416354905), m = C(m, w, v, d, s[_ + 5], 21, -57434055), d = C(d, m, w, v, s[_ + 12], 6, 1700485571), v = C(v, d, m, w, s[_ + 3], 10, -1894986606), w = C(w, v, d, m, s[_ + 10], 15, -1051523), m = C(m, w, v, d, s[_ + 1], 21, -2054922799), d = C(d, m, w, v, s[_ + 8], 6, 1873313359), v = C(v, d, m, w, s[_ + 15], 10, -30611744), w = C(w, v, d, m, s[_ + 6], 15, -1560198380), m = C(m, w, v, d, s[_ + 13], 21, 1309151649), d = C(d, m, w, v, s[_ + 4], 6, -145523070), v = C(v, d, m, w, s[_ + 11], 10, -1120210379), w = C(w, v, d, m, s[_ + 2], 15, 718787259), m = C(m, w, v, d, s[_ + 9], 21, -343485551), d = d + T >>> 0, m = m + x >>> 0, w = w + S >>> 0, v = v + P >>> 0;
      }
      return i.endian([d, m, w, v]);
    };
    c._ff = function(l, o, s, p, d, m, w) {
      var v = l + (o & s | ~o & p) + (d >>> 0) + w;
      return (v << m | v >>> 32 - m) + o;
    }, c._gg = function(l, o, s, p, d, m, w) {
      var v = l + (o & p | s & ~p) + (d >>> 0) + w;
      return (v << m | v >>> 32 - m) + o;
    }, c._hh = function(l, o, s, p, d, m, w) {
      var v = l + (o ^ s ^ p) + (d >>> 0) + w;
      return (v << m | v >>> 32 - m) + o;
    }, c._ii = function(l, o, s, p, d, m, w) {
      var v = l + (s ^ (o | ~p)) + (d >>> 0) + w;
      return (v << m | v >>> 32 - m) + o;
    }, c._blocksize = 16, c._digestsize = 16, n.exports = function(l, o) {
      if (l == null) throw new Error("Illegal argument " + l);
      var s = i.wordsToBytes(c(l, o));
      return o && o.asBytes ? s : o && o.asString ? h.bytesToString(s) : i.bytesToHex(s);
    };
  })();
}, 285: (n, e, r) => {
  var i = r(2);
  n.exports = function(A) {
    return A ? (A.substr(0, 2) === "{}" && (A = "\\{\\}" + A.substr(2)), _(function(E) {
      return E.split("\\\\").join(u).split("\\{").join(a).split("\\}").join(h).split("\\,").join(c).split("\\.").join(l);
    }(A), !0).map(s)) : [];
  };
  var u = "\0SLASH" + Math.random() + "\0", a = "\0OPEN" + Math.random() + "\0", h = "\0CLOSE" + Math.random() + "\0", c = "\0COMMA" + Math.random() + "\0", l = "\0PERIOD" + Math.random() + "\0";
  function o(A) {
    return parseInt(A, 10) == A ? parseInt(A, 10) : A.charCodeAt(0);
  }
  function s(A) {
    return A.split(u).join("\\").split(a).join("{").split(h).join("}").split(c).join(",").split(l).join(".");
  }
  function p(A) {
    if (!A) return [""];
    var E = [], I = i("{", "}", A);
    if (!I) return A.split(",");
    var C = I.pre, T = I.body, x = I.post, S = C.split(",");
    S[S.length - 1] += "{" + T + "}";
    var P = p(x);
    return x.length && (S[S.length - 1] += P.shift(), S.push.apply(S, P)), E.push.apply(E, S), E;
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
    var I = [], C = i("{", "}", A);
    if (!C) return [A];
    var T = C.pre, x = C.post.length ? _(C.post, !1) : [""];
    if (/\$$/.test(C.pre)) for (var S = 0; S < x.length; S++) {
      var P = T + "{" + C.body + "}" + x[S];
      I.push(P);
    }
    else {
      var k, j, D = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(C.body), B = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(C.body), $ = D || B, q = C.body.indexOf(",") >= 0;
      if (!$ && !q) return C.post.match(/,.*\}/) ? _(A = C.pre + "{" + C.body + h + C.post) : [A];
      if ($) k = C.body.split(/\.\./);
      else if ((k = p(C.body)).length === 1 && (k = _(k[0], !1).map(d)).length === 1) return x.map(function(at) {
        return C.pre + k[0] + at;
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
      for (Q = 0; Q < j.length; Q++) for (S = 0; S < x.length; S++) P = T + j[Q] + x[S], (!E || $ || P) && I.push(P);
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
      return m.prototype = Object.create(p.prototype, { constructor: { value: m, enumerable: !1, writable: !0, configurable: !0 } }), u(m, p);
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
      return w && u(_, w.prototype), _;
    }, i.apply(null, arguments);
  }
  function u(o, s) {
    return u = Object.setPrototypeOf || function(p, d) {
      return p.__proto__ = d, p;
    }, u(o, s);
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
      p.prototype = Object.create(d && d.prototype, { constructor: { value: p, writable: !0, configurable: !0 } }), d && u(p, d);
    }(s, o), s;
  }(r(Error));
  function c(o, s) {
    for (var p = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, d = s.split("."), m = d.length, w = function(A) {
      var E = d[A];
      if (!o) return { v: void 0 };
      if (E === "+") {
        if (Array.isArray(o)) return { v: o.map(function(C, T) {
          var x = d.slice(A + 1);
          return x.length > 0 ? c(C, x.join("."), p) : p(o, T, d, A);
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
  function l(o, s) {
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
        return l(w, v) && (d[m] = p), d[m];
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
        if (!l(v, _)) return m && m[w];
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
        return m = m || v === p || !!v && v[_] === p, w = l(A, E) && e(v) === "object" && _ in v, v && v[_];
      }), d.validPath ? m && w : m;
    } catch {
      return !1;
    }
  }, ObjectPrototypeMutationError: h };
}, 47: (n, e, r) => {
  var i = r(410), u = function(o) {
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
  function l(o) {
    return h.exec(o).slice(1);
  }
  c.resolve = function() {
    for (var o = "", s = !1, p = arguments.length - 1; p >= -1 && !s; p--) {
      var d = p >= 0 ? arguments[p] : Xe.cwd();
      if (!u(d)) throw new TypeError("Arguments to path.resolve must be strings");
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
      if (!u(p)) throw new TypeError("Arguments to path.join must be strings");
      p && (o += o ? "/" + p : p);
    }
    return c.normalize(o);
  }, c.relative = function(o, s) {
    function p(E) {
      for (var I = 0; I < E.length && E[I] === ""; I++) ;
      for (var C = E.length - 1; C >= 0 && E[C] === ""; C--) ;
      return I > C ? [] : E.slice(I, C + 1);
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
    var s = l(o), p = s[0], d = s[1];
    return p || d ? (d && (d = d.substr(0, d.length - 1)), p + d) : ".";
  }, c.basename = function(o, s) {
    var p = l(o)[2];
    return s && p.substr(-1 * s.length) === s && (p = p.substr(0, p.length - s.length)), p;
  }, c.extname = function(o) {
    return l(o)[3];
  }, c.format = function(o) {
    if (!i.isObject(o)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof o);
    var s = o.root || "";
    if (!u(s)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof o.root);
    return (o.dir ? o.dir + c.sep : "") + (o.base || "");
  }, c.parse = function(o) {
    if (!u(o)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof o);
    var s = l(o);
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
  function u(a) {
    try {
      return encodeURIComponent(a);
    } catch {
      return null;
    }
  }
  e.stringify = function(a, h) {
    h = h || "";
    var c, l, o = [];
    for (l in typeof h != "string" && (h = "?"), a) if (r.call(a, l)) {
      if ((c = a[l]) || c != null && !isNaN(c) || (c = ""), l = u(l), c = u(c), l === null || c === null) continue;
      o.push(l + "=" + c);
    }
    return o.length ? h + o.join("&") : "";
  }, e.parse = function(a) {
    for (var h, c = /([^=?#&]+)=?([^&]*)/g, l = {}; h = c.exec(a); ) {
      var o = i(h[1]), s = i(h[2]);
      o === null || s === null || o in l || (l[o] = s);
    }
    return l;
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
  n.exports = function(u) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (a = Object.assign({}, i, a), !u || typeof u != "string") return u;
    let h = u.trim();
    if (a.skipLike !== void 0 && a.skipLike.test(h)) return u;
    if (a.hex && e.test(h)) return Number.parseInt(h, 16);
    {
      const l = r.exec(h);
      if (l) {
        const o = l[1], s = l[2];
        let p = ((c = l[3]) && c.indexOf(".") !== -1 && ((c = c.replace(/0+$/, "")) === "." ? c = "0" : c[0] === "." ? c = "0" + c : c[c.length - 1] === "." && (c = c.substr(0, c.length - 1))), c);
        const d = l[4] || l[6];
        if (!a.leadingZeros && s.length > 0 && o && h[2] !== "." || !a.leadingZeros && s.length > 0 && !o && h[1] !== ".") return u;
        {
          const m = Number(h), w = "" + m;
          return w.search(/[eE]/) !== -1 || d ? a.eNotation ? m : u : h.indexOf(".") !== -1 ? w === "0" && p === "" || w === p || o && w === "-" + p ? m : u : s ? p === w || o + p === w ? m : u : h === w || h === o + w ? m : u;
        }
      }
      return u;
    }
    var c;
  };
}, 737: (n, e, r) => {
  var i = r(670), u = r(647), a = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/, h = /[\n\r\t]/g, c = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//, l = /:\d+$/, o = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i, s = /^[a-zA-Z]:/;
  function p(E) {
    return (E || "").toString().replace(a, "");
  }
  var d = [["#", "hash"], ["?", "query"], function(E, I) {
    return v(I.protocol) ? E.replace(/\\/g, "/") : E;
  }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]], m = { hash: 1, query: 1 };
  function w(E) {
    var I, C = (typeof window < "u" ? window : typeof ln < "u" ? ln : typeof self < "u" ? self : {}).location || {}, T = {}, x = typeof (E = E || C);
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
    var C, T = o.exec(E), x = T[1] ? T[1].toLowerCase() : "", S = !!T[2], P = !!T[3], k = 0;
    return S ? P ? (C = T[2] + T[3] + T[4], k = T[2].length + T[3].length) : (C = T[2] + T[4], k = T[2].length) : P ? (C = T[3] + T[4], k = T[3].length) : C = T[4], x === "file:" ? k >= 2 && (C = C.slice(2)) : v(x) ? C = T[4] : x ? S && (C = C.slice(2)) : k >= 2 && v(I.protocol) && (C = T[4]), { protocol: x, slashes: S || v(x), slashesCount: k, rest: C };
  }
  function A(E, I, C) {
    if (E = (E = p(E)).replace(h, ""), !(this instanceof A)) return new A(E, I, C);
    var T, x, S, P, k, j, D = d.slice(), B = typeof I, $ = this, q = 0;
    for (B !== "object" && B !== "string" && (C = I, I = null), C && typeof C != "function" && (C = u.parse), T = !(x = _(E || "", I = w(I))).protocol && !x.slashes, $.slashes = x.slashes || T && I.slashes, $.protocol = x.protocol || I.protocol || "", E = x.rest, (x.protocol === "file:" && (x.slashesCount !== 2 || s.test(E)) || !x.slashes && (x.protocol || x.slashesCount < 2 || !v($.protocol))) && (D[3] = [/(.*)/, "pathname"]); q < D.length; q++) typeof (P = D[q]) != "function" ? (S = P[0], j = P[1], S != S ? $[j] = E : typeof S == "string" ? ~(k = S === "@" ? E.lastIndexOf(S) : E.indexOf(S)) && (typeof P[2] == "number" ? ($[j] = E.slice(0, k), E = E.slice(k + P[2])) : ($[j] = E.slice(k), E = E.slice(0, k))) : (k = S.exec(E)) && ($[j] = k[1], E = E.slice(0, k.index)), $[j] = $[j] || T && P[3] && I[j] || "", P[4] && ($[j] = $[j].toLowerCase())) : E = P(E, $);
    C && ($.query = C($.query)), T && I.slashes && $.pathname.charAt(0) !== "/" && ($.pathname !== "" || I.pathname !== "") && ($.pathname = function(V, oe) {
      if (V === "") return oe;
      for (var ne = (oe || "/").split("/").slice(0, -1).concat(V.split("/")), te = ne.length, ae = ne[te - 1], fe = !1, re = 0; te--; ) ne[te] === "." ? ne.splice(te, 1) : ne[te] === ".." ? (ne.splice(te, 1), re++) : re && (te === 0 && (fe = !0), ne.splice(te, 1), re--);
      return fe && ne.unshift(""), ae !== "." && ae !== ".." || ne.push(""), ne.join("/");
    }($.pathname, I.pathname)), $.pathname.charAt(0) !== "/" && v($.protocol) && ($.pathname = "/" + $.pathname), i($.port, $.protocol) || ($.host = $.hostname, $.port = ""), $.username = $.password = "", $.auth && (~(k = $.auth.indexOf(":")) ? ($.username = $.auth.slice(0, k), $.username = encodeURIComponent(decodeURIComponent($.username)), $.password = $.auth.slice(k + 1), $.password = encodeURIComponent(decodeURIComponent($.password))) : $.username = encodeURIComponent(decodeURIComponent($.auth)), $.auth = $.password ? $.username + ":" + $.password : $.username), $.origin = $.protocol !== "file:" && v($.protocol) && $.host ? $.protocol + "//" + $.host : "null", $.href = $.toString();
  }
  A.prototype = { set: function(E, I, C) {
    var T = this;
    switch (E) {
      case "query":
        typeof I == "string" && I.length && (I = (C || u.parse)(I)), T[E] = I;
        break;
      case "port":
        T[E] = I, i(I, T.protocol) ? I && (T.host = T.hostname + ":" + I) : (T.host = T.hostname, T[E] = "");
        break;
      case "hostname":
        T[E] = I, T.port && (I += ":" + T.port), T.host = I;
        break;
      case "host":
        T[E] = I, l.test(I) ? (I = I.split(":"), T.port = I.pop(), T.hostname = I.join(":")) : (T.hostname = I, T.port = "");
        break;
      case "protocol":
        T.protocol = I.toLowerCase(), T.slashes = !C;
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
        var S = I.indexOf(":");
        ~S ? (T.username = I.slice(0, S), T.username = encodeURIComponent(decodeURIComponent(T.username)), T.password = I.slice(S + 1), T.password = encodeURIComponent(decodeURIComponent(T.password))) : T.username = encodeURIComponent(decodeURIComponent(I));
    }
    for (var P = 0; P < d.length; P++) {
      var k = d[P];
      k[4] && (T[k[1]] = T[k[1]].toLowerCase());
    }
    return T.auth = T.password ? T.username + ":" + T.password : T.username, T.origin = T.protocol !== "file:" && v(T.protocol) && T.host ? T.protocol + "//" + T.host : "null", T.href = T.toString(), T;
  }, toString: function(E) {
    E && typeof E == "function" || (E = u.stringify);
    var I, C = this, T = C.host, x = C.protocol;
    x && x.charAt(x.length - 1) !== ":" && (x += ":");
    var S = x + (C.protocol && C.slashes || v(C.protocol) ? "//" : "");
    return C.username ? (S += C.username, C.password && (S += ":" + C.password), S += "@") : C.password ? (S += ":" + C.password, S += "@") : C.protocol !== "file:" && v(C.protocol) && !T && C.pathname !== "/" && (S += "@"), (T[T.length - 1] === ":" || l.test(C.hostname) && !C.port) && (T += ":"), S += T + C.pathname, (I = typeof C.query == "object" ? E(C.query) : C.query) && (S += I.charAt(0) !== "?" ? "?" + I : I), C.hash && (S += C.hash), S;
  } }, A.extractProtocol = _, A.location = w, A.trimLeft = p, A.qs = u, n.exports = A;
}, 410: () => {
}, 388: () => {
}, 805: () => {
}, 345: () => {
}, 800: () => {
} }, qo = {};
function we(n) {
  var e = qo[n];
  if (e !== void 0) return e.exports;
  var r = qo[n] = { id: n, loaded: !1, exports: {} };
  return tc[n].call(r.exports, r, r.exports, we), r.loaded = !0, r.exports;
}
we.n = (n) => {
  var e = n && n.__esModule ? () => n.default : () => n;
  return we.d(e, { a: e }), e;
}, we.d = (n, e) => {
  for (var r in e) we.o(e, r) && !we.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
}, we.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), we.nmd = (n) => (n.paths = [], n.children || (n.children = []), n);
var bt = {};
we.d(bt, { hT: () => Je, O4: () => Xt, Kd: () => cc, YK: () => fc, UU: () => yf, Gu: () => Ca, ky: () => ja, h4: () => sn, ch: () => Dn, hq: () => Er, i5: () => Ga });
var rc = we(737), nc = we.n(rc);
function Zn(n) {
  if (!Ui(n)) throw new Error("Parameter was not an error");
}
function Ui(n) {
  return !!n && typeof n == "object" && (e = n, Object.prototype.toString.call(e) === "[object Error]") || n instanceof Error;
  var e;
}
class Qe extends Error {
  constructor(e, r) {
    const i = [...arguments], { options: u, shortMessage: a } = function(c) {
      let l, o = "";
      if (c.length === 0) l = {};
      else if (Ui(c[0])) l = { cause: c[0] }, o = c.slice(1).join(" ") || "";
      else if (c[0] && typeof c[0] == "object") l = Object.assign({}, c[0]), o = c.slice(1).join(" ") || "";
      else {
        if (typeof c[0] != "string") throw new Error("Invalid arguments passed to Layerr");
        l = {}, o = o = c.join(" ") || "";
      }
      return { options: l, shortMessage: o };
    }(i);
    let h = a;
    if (u.cause && (h = `${h}: ${u.cause.message}`), super(h), this.message = h, u.name && typeof u.name == "string" ? this.name = u.name : this.name = "Layerr", u.cause && Object.defineProperty(this, "_cause", { value: u.cause }), Object.defineProperty(this, "_info", { value: {} }), u.info && typeof u.info == "object" && Object.assign(this._info, u.info), Error.captureStackTrace) {
      const c = u.constructorOpt || this.constructor;
      Error.captureStackTrace(this, c);
    }
  }
  static cause(e) {
    return Zn(e), e._cause && Ui(e._cause) ? e._cause : null;
  }
  static fullStack(e) {
    Zn(e);
    const r = Qe.cause(e);
    return r ? `${e.stack}
caused by: ${Qe.fullStack(r)}` : e.stack ?? "";
  }
  static info(e) {
    Zn(e);
    const r = {}, i = Qe.cause(e);
    return i && Object.assign(r, Qe.info(i)), e._info && Object.assign(r, e._info), r;
  }
  toString() {
    let e = this.name || this.constructor.name || this.constructor.prototype.name;
    return this.message && (e = `${e}: ${this.message}`), e;
  }
}
var ic = we(47), _n = we.n(ic);
const Vo = "__PATH_SEPARATOR_POSIX__", Wo = "__PATH_SEPARATOR_WINDOWS__";
function Ne(n) {
  try {
    const e = n.replace(/\//g, Vo).replace(/\\\\/g, Wo);
    return encodeURIComponent(e).split(Wo).join("\\\\").split(Vo).join("/");
  } catch (e) {
    throw new Qe(e, "Failed encoding path");
  }
}
function Xo(n) {
  return n.startsWith("/") ? n : "/" + n;
}
function en(n) {
  let e = n;
  return e[0] !== "/" && (e = "/" + e), /^.+\/$/.test(e) && (e = e.substr(0, e.length - 1)), e;
}
function oc(n) {
  let e = new (nc())(n).pathname;
  return e.length <= 0 && (e = "/"), en(e);
}
function Te() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  return function() {
    return function(i) {
      var u = [];
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
        c !== "" && (h > 0 && (c = c.replace(/^[\/]+/, "")), c = h < i.length - 1 ? c.replace(/[\/]+$/, "") : c.replace(/[\/]+$/, "/"), u.push(c));
      }
      var l = u.join("/"), o = (l = l.replace(/\/(\?|&|#[^!])/g, "$1")).split("?");
      return o.shift() + (o.length > 0 ? "?" : "") + o.join("&");
    }(typeof arguments[0] == "object" ? arguments[0] : [].slice.call(arguments));
  }(e.reduce((i, u, a) => ((a === 0 || u !== "/" || u === "/" && i[i.length - 1] !== "/") && i.push(u), i), []));
}
var sc = we(542), jr = we.n(sc);
const ac = "abcdef0123456789";
function zo(n, e) {
  const r = n.url.replace("//", ""), i = r.indexOf("/") == -1 ? "/" : r.slice(r.indexOf("/")), u = n.method ? n.method.toUpperCase() : "GET", a = !!/(^|,)\s*auth\s*($|,)/.test(e.qop) && "auth", h = `00000000${e.nc}`.slice(-8), c = function(d, m, w, v, _, A, E) {
    const I = E || jr()(`${m}:${w}:${v}`);
    return d && d.toLowerCase() === "md5-sess" ? jr()(`${I}:${_}:${A}`) : I;
  }(e.algorithm, e.username, e.realm, e.password, e.nonce, e.cnonce, e.ha1), l = jr()(`${u}:${i}`), o = a ? jr()(`${c}:${e.nonce}:${h}:${e.cnonce}:${a}:${l}`) : jr()(`${c}:${e.nonce}:${l}`), s = { username: e.username, realm: e.realm, nonce: e.nonce, uri: i, qop: a, response: o, nc: h, cnonce: e.cnonce, algorithm: e.algorithm, opaque: e.opaque }, p = [];
  for (const d in s) s[d] && (d === "qop" || d === "nc" || d === "algorithm" ? p.push(`${d}=${s[d]}`) : p.push(`${d}="${s[d]}"`));
  return `Digest ${p.join(", ")}`;
}
function Oa(n) {
  return (n.headers && n.headers.get("www-authenticate") || "").split(/\s/)[0].toLowerCase() === "digest";
}
var lc = we(101), Ra = we.n(lc);
function Ho(n) {
  return Ra().decode(n);
}
function Yo(n, e) {
  var r;
  return `Basic ${r = `${n}:${e}`, Ra().encode(r)}`;
}
const On = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : typeof window < "u" ? window : globalThis, uc = On.fetch.bind(On), cc = On.Request, fc = On.Response;
let Je = function(n) {
  return n.Auto = "auto", n.Digest = "digest", n.None = "none", n.Password = "password", n.Token = "token", n;
}({}), Xt = function(n) {
  return n.DataTypeNoLength = "data-type-no-length", n.InvalidAuthType = "invalid-auth-type", n.InvalidOutputFormat = "invalid-output-format", n.LinkUnsupportedAuthType = "link-unsupported-auth", n.InvalidUpdateRange = "invalid-update-range", n.NotSupported = "not-supported", n;
}({});
function xa(n, e, r, i, u) {
  switch (n.authType) {
    case Je.Auto:
      e && r && (n.headers.Authorization = Yo(e, r));
      break;
    case Je.Digest:
      n.digest = /* @__PURE__ */ function(h, c, l) {
        return { username: h, password: c, ha1: l, nc: 0, algorithm: "md5", hasDigestAuth: !1 };
      }(e, r, u);
      break;
    case Je.None:
      break;
    case Je.Password:
      n.headers.Authorization = Yo(e, r);
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
const Zo = "@@HOTPATCHER", hc = () => {
};
function Jn(n) {
  return { original: n, methods: [n], final: !1 };
}
class pc {
  constructor() {
    this._configuration = { registry: {}, getEmptyAction: "null" }, this.__type__ = Zo;
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
    if (!e || e.__type__ !== Zo) throw new Error("Failed taking control of target HotPatcher instance: Invalid type or object");
    return Object.keys(e.configuration.registry).forEach((i) => {
      this.configuration.registry.hasOwnProperty(i) ? r && (this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i])) : this.configuration.registry[i] = Object.assign({}, e.configuration.registry[i]);
    }), e._configuration = this.configuration, this;
  }
  execute(e) {
    const r = this.get(e) || hc;
    for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) u[a - 1] = arguments[a];
    return r(...u);
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
      for (var i = arguments.length, u = new Array(i), a = 0; a < i; a++) u[a] = arguments[a];
      if (u.length === 0) throw new Error("Failed creating sequence: No functions provided");
      return function() {
        for (var h = arguments.length, c = new Array(h), l = 0; l < h; l++) c[l] = arguments[l];
        let o = c;
        const s = this;
        for (; u.length > 0; ) o = [u.shift().apply(s, o)];
        return o[0];
      };
    }(...r.methods);
  }
  isPatched(e) {
    return !!this.configuration.registry[e];
  }
  patch(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const { chain: u = !1 } = i;
    if (this.configuration.registry[e] && this.configuration.registry[e].final) throw new Error(`Failed patching '${e}': Method marked as being final`);
    if (typeof r != "function") throw new Error(`Failed patching '${e}': Provided method is not a function`);
    if (u) this.configuration.registry[e] ? this.configuration.registry[e].methods.push(r) : this.configuration.registry[e] = Jn(r);
    else if (this.isPatched(e)) {
      const { original: a } = this.configuration.registry[e];
      this.configuration.registry[e] = Object.assign(Jn(r), { original: a });
    } else this.configuration.registry[e] = Jn(r);
    return this;
  }
  patchInline(e, r) {
    this.isPatched(e) || this.patch(e, r);
    for (var i = arguments.length, u = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) u[a - 2] = arguments[a];
    return this.execute(e, ...u);
  }
  plugin(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) i[u - 1] = arguments[u];
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
let Kn = null;
function Ca() {
  return Kn || (Kn = new pc()), Kn;
}
function Rn(n) {
  return function(e) {
    if (typeof e != "object" || e === null || Object.prototype.toString.call(e) != "[object Object]") return !1;
    if (Object.getPrototypeOf(e) === null) return !0;
    let r = e;
    for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
    return Object.getPrototypeOf(e) === r;
  }(n) ? Object.assign({}, n) : Object.setPrototypeOf(Object.assign({}, n), Object.getPrototypeOf(n));
}
function Jo() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  let i = null, u = [...e];
  for (; u.length > 0; ) {
    const a = u.shift();
    i = i ? Sa(i, a) : Rn(a);
  }
  return i;
}
function Sa(n, e) {
  const r = Rn(n);
  return Object.keys(e).forEach((i) => {
    r.hasOwnProperty(i) ? Array.isArray(e[i]) ? r[i] = Array.isArray(r[i]) ? [...r[i], ...e[i]] : [...e[i]] : typeof e[i] == "object" && e[i] ? r[i] = typeof r[i] == "object" && r[i] ? Sa(r[i], e[i]) : Rn(e[i]) : r[i] = e[i] : r[i] = e[i];
  }), r;
}
function dc(n) {
  const e = {};
  for (const r of n.keys()) e[r] = n.get(r);
  return e;
}
function Bi() {
  for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
  if (e.length === 0) return {};
  const i = {};
  return e.reduce((u, a) => (Object.keys(a).forEach((h) => {
    const c = h.toLowerCase();
    i.hasOwnProperty(c) ? u[i[c]] = a[h] : (i[c] = h, u[h] = a[h]);
  }), u), {});
}
we(805);
const gc = typeof ArrayBuffer == "function", { toString: mc } = Object.prototype;
function La(n) {
  return gc && (n instanceof ArrayBuffer || mc.call(n) === "[object ArrayBuffer]");
}
function Pa(n) {
  return n != null && n.constructor != null && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function to(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Di(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const $a = to(function(n) {
  const e = n._digest;
  return delete n._digest, e.hasDigestAuth && (n = Jo(n, { headers: { Authorization: zo(n, e) } })), Di(xn(n), function(r) {
    let i = !1;
    return u = function(h) {
      return i ? h : r;
    }, (a = function() {
      if (r.status == 401) return e.hasDigestAuth = function(h, c) {
        if (!Oa(h)) return !1;
        const l = /([a-z0-9_-]+)=(?:"([^"]+)"|([a-z0-9_-]+))/gi;
        for (; ; ) {
          const o = h.headers && h.headers.get("www-authenticate") || "", s = l.exec(o);
          if (!s) break;
          c[s[1]] = s[2] || s[3];
        }
        return c.nc += 1, c.cnonce = function() {
          let o = "";
          for (let s = 0; s < 32; ++s) o = `${o}${ac[Math.floor(16 * Math.random())]}`;
          return o;
        }(), !0;
      }(r, e), function() {
        if (e.hasDigestAuth) return Di(xn(n = Jo(n, { headers: { Authorization: zo(n, e) } })), function(h) {
          return h.status == 401 ? e.hasDigestAuth = !1 : e.nc++, i = !0, h;
        });
      }();
      e.nc++;
    }()) && a.then ? a.then(u) : u(a);
    var u, a;
  });
}), wc = to(function(n, e) {
  return Di(xn(n), function(r) {
    return r.ok ? (e.authType = Je.Password, r) : r.status == 401 && Oa(r) ? (e.authType = Je.Digest, xa(e, e.username, e.password, void 0, void 0), n._digest = e.digest, $a(n)) : r;
  });
}), Se = to(function(n, e) {
  return e.authType === Je.Auto ? wc(n, e) : n._digest ? $a(n) : xn(n);
});
function Le(n, e, r) {
  const i = Rn(n);
  return i.headers = Bi(e.headers, i.headers || {}, r.headers || {}), r.data !== void 0 && (i.data = r.data), r.signal && (i.signal = r.signal), e.httpAgent && (i.httpAgent = e.httpAgent), e.httpsAgent && (i.httpsAgent = e.httpsAgent), e.digest && (i._digest = e.digest), typeof e.withCredentials == "boolean" && (i.withCredentials = e.withCredentials), i;
}
function xn(n) {
  const e = Ca();
  return e.patchInline("request", (r) => e.patchInline("fetch", uc, r.url, function(i) {
    let u = {};
    const a = { method: i.method };
    if (i.headers && (u = Bi(u, i.headers)), i.data !== void 0) {
      const [h, c] = function(l) {
        if (typeof l == "string") return [l, {}];
        if (Pa(l)) return [l, {}];
        if (La(l)) return [l, {}];
        if (l && typeof l == "object") return [JSON.stringify(l), { "content-type": "application/json" }];
        throw new Error("Unable to convert request body: Unexpected body type: " + typeof l);
      }(i.data);
      a.body = h, u = Bi(u, c);
    }
    return i.signal && (a.signal = i.signal), i.withCredentials && (a.credentials = "include"), a.headers = u, a;
  }(r)), n);
}
var yc = we(285);
const Cn = (n) => {
  if (typeof n != "string") throw new TypeError("invalid pattern");
  if (n.length > 65536) throw new TypeError("pattern is too long");
}, Ec = { "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", !0], "[:alpha:]": ["\\p{L}\\p{Nl}", !0], "[:ascii:]": ["\\x00-\\x7f", !1], "[:blank:]": ["\\p{Zs}\\t", !0], "[:cntrl:]": ["\\p{Cc}", !0], "[:digit:]": ["\\p{Nd}", !0], "[:graph:]": ["\\p{Z}\\p{C}", !0, !0], "[:lower:]": ["\\p{Ll}", !0], "[:print:]": ["\\p{C}", !0], "[:punct:]": ["\\p{P}", !0], "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", !0], "[:upper:]": ["\\p{Lu}", !0], "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", !0], "[:xdigit:]": ["A-Fa-f0-9", !1] }, Gr = (n) => n.replace(/[[\]\\-]/g, "\\$&"), Ko = (n) => n.join(""), vc = (n, e) => {
  const r = e;
  if (n.charAt(r) !== "[") throw new Error("not in a brace expression");
  const i = [], u = [];
  let a = r + 1, h = !1, c = !1, l = !1, o = !1, s = r, p = "";
  e: for (; a < n.length; ) {
    const v = n.charAt(a);
    if (v !== "!" && v !== "^" || a !== r + 1) {
      if (v === "]" && h && !l) {
        s = a + 1;
        break;
      }
      if (h = !0, v !== "\\" || l) {
        if (v === "[" && !l) {
          for (const [_, [A, E, I]] of Object.entries(Ec)) if (n.startsWith(_, a)) {
            if (p) return ["$.", !1, n.length - r, !0];
            a += _.length, I ? u.push(A) : i.push(A), c = c || E;
            continue e;
          }
        }
        l = !1, p ? (v > p ? i.push(Gr(p) + "-" + Gr(v)) : v === p && i.push(Gr(v)), p = "", a++) : n.startsWith("-]", a + 1) ? (i.push(Gr(v + "-")), a += 2) : n.startsWith("-", a + 1) ? (p = v, a += 2) : (i.push(Gr(v)), a++);
      } else l = !0, a++;
    } else o = !0, a++;
  }
  if (s < a) return ["", !1, 0, !1];
  if (!i.length && !u.length) return ["$.", !1, n.length - r, !0];
  if (u.length === 0 && i.length === 1 && /^\\?.$/.test(i[0]) && !o)
    return [(d = i[0].length === 2 ? i[0].slice(-1) : i[0], d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")), !1, s - r, !1];
  var d;
  const m = "[" + (o ? "^" : "") + Ko(i) + "]", w = "[" + (o ? "" : "^") + Ko(u) + "]";
  return [i.length && u.length ? "(" + m + "|" + w + ")" : i.length ? m : w, c, s - r, !0];
}, Hr = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/\[([^\/\\])\]/g, "$1") : n.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
}, bc = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]), Qo = (n) => bc.has(n), Qn = "(?!\\.)", Nc = /* @__PURE__ */ new Set(["[", "."]), Tc = /* @__PURE__ */ new Set(["..", "."]), Ac = new Set("().*{}+?[]^$\\!"), ro = "[^/]", es = ro + "*?", ts = ro + "+?";
var Ce, ke, qt, ve, xe, rr, pr, nr, kt, dr, nn, gr, ka, ir, vn, ji, Fa;
const Ze = class Ze {
  constructor(e, r) {
    it(this, gr);
    ge(this, "type");
    it(this, Ce);
    it(this, ke);
    it(this, qt, !1);
    it(this, ve, []);
    it(this, xe);
    it(this, rr);
    it(this, pr);
    it(this, nr, !1);
    it(this, kt);
    it(this, dr);
    it(this, nn, !1);
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.type = e, e && Ie(this, ke, !0), Ie(this, xe, r), Ie(this, Ce, z(this, xe) ? z(z(this, xe), Ce) : this), Ie(this, kt, z(this, Ce) === this ? i : z(z(this, Ce), kt)), Ie(this, pr, z(this, Ce) === this ? [] : z(z(this, Ce), pr)), e !== "!" || z(z(this, Ce), nr) || z(this, pr).push(this), Ie(this, rr, z(this, xe) ? z(z(this, xe), ve).length : 0);
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
    for (const u of r) if (u !== "") {
      if (typeof u != "string" && !(u instanceof Ze && z(u, xe) === this)) throw new Error("invalid part: " + u);
      z(this, ve).push(u);
    }
  }
  toJSON() {
    var r;
    const e = this.type === null ? z(this, ve).slice().map((i) => typeof i == "string" ? i : i.toJSON()) : [this.type, ...z(this, ve).map((i) => i.toJSON())];
    return this.isStart() && !this.type && e.unshift([]), this.isEnd() && (this === z(this, Ce) || z(z(this, Ce), nr) && ((r = z(this, xe)) == null ? void 0 : r.type) === "!") && e.push({}), e;
  }
  isStart() {
    var r;
    if (z(this, Ce) === this) return !0;
    if (!((r = z(this, xe)) != null && r.isStart())) return !1;
    if (z(this, rr) === 0) return !0;
    const e = z(this, xe);
    for (let i = 0; i < z(this, rr); i++) {
      const u = z(e, ve)[i];
      if (!(u instanceof Ze && u.type === "!")) return !1;
    }
    return !0;
  }
  isEnd() {
    var r, i, u;
    if (z(this, Ce) === this || ((r = z(this, xe)) == null ? void 0 : r.type) === "!") return !0;
    if (!((i = z(this, xe)) != null && i.isEnd())) return !1;
    if (!this.type) return (u = z(this, xe)) == null ? void 0 : u.isEnd();
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
    var u;
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = new Ze(null, void 0, r);
    return Qt(u = Ze, ir, vn).call(u, e, i, 0, r), i;
  }
  toMMPattern() {
    if (this !== z(this, Ce)) return z(this, Ce).toMMPattern();
    const e = this.toString(), [r, i, u, a] = this.toRegExpSource();
    if (!(u || z(this, ke) || z(this, kt).nocase && !z(this, kt).nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())) return i;
    const h = (z(this, kt).nocase ? "i" : "") + (a ? "u" : "");
    return Object.assign(new RegExp(`^${r}$`, h), { _src: r, _glob: e });
  }
  get options() {
    return z(this, kt);
  }
  toRegExpSource(e) {
    var l;
    const r = e ?? !!z(this, kt).dot;
    if (z(this, Ce) === this && Qt(this, gr, ka).call(this), !this.type) {
      const o = this.isStart() && this.isEnd(), s = z(this, ve).map((m) => {
        var E;
        const [w, v, _, A] = typeof m == "string" ? Qt(E = Ze, ir, Fa).call(E, m, z(this, ke), o) : m.toRegExpSource(e);
        return Ie(this, ke, z(this, ke) || _), Ie(this, qt, z(this, qt) || A), w;
      }).join("");
      let p = "";
      if (this.isStart() && typeof z(this, ve)[0] == "string" && (z(this, ve).length !== 1 || !Tc.has(z(this, ve)[0]))) {
        const m = Nc, w = r && m.has(s.charAt(0)) || s.startsWith("\\.") && m.has(s.charAt(2)) || s.startsWith("\\.\\.") && m.has(s.charAt(4)), v = !r && !e && m.has(s.charAt(0));
        p = w ? "(?!(?:^|/)\\.\\.?(?:$|/))" : v ? Qn : "";
      }
      let d = "";
      return this.isEnd() && z(z(this, Ce), nr) && ((l = z(this, xe)) == null ? void 0 : l.type) === "!" && (d = "(?:$|\\/)"), [p + s + d, Hr(s), Ie(this, ke, !!z(this, ke)), z(this, qt)];
    }
    const i = this.type === "*" || this.type === "+", u = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let a = Qt(this, gr, ji).call(this, r);
    if (this.isStart() && this.isEnd() && !a && this.type !== "!") {
      const o = this.toString();
      return Ie(this, ve, [o]), this.type = null, Ie(this, ke, void 0), [o, Hr(this.toString()), !1, !1];
    }
    let h = !i || e || r ? "" : Qt(this, gr, ji).call(this, !0);
    h === a && (h = ""), h && (a = `(?:${a})(?:${h})*?`);
    let c = "";
    return c = this.type === "!" && z(this, nn) ? (this.isStart() && !r ? Qn : "") + ts : u + a + (this.type === "!" ? "))" + (!this.isStart() || r || e ? "" : Qn) + es + ")" : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && h ? ")" : this.type === "*" && h ? ")?" : `)${this.type}`), [c, Hr(a), Ie(this, ke, !!z(this, ke)), z(this, qt)];
  }
};
Ce = new WeakMap(), ke = new WeakMap(), qt = new WeakMap(), ve = new WeakMap(), xe = new WeakMap(), rr = new WeakMap(), pr = new WeakMap(), nr = new WeakMap(), kt = new WeakMap(), dr = new WeakMap(), nn = new WeakMap(), gr = new WeakSet(), ka = function() {
  if (this !== z(this, Ce)) throw new Error("should only call on root");
  if (z(this, nr)) return this;
  let e;
  for (this.toString(), Ie(this, nr, !0); e = z(this, pr).pop(); ) {
    if (e.type !== "!") continue;
    let r = e, i = z(r, xe);
    for (; i; ) {
      for (let u = z(r, rr) + 1; !i.type && u < z(i, ve).length; u++) for (const a of z(e, ve)) {
        if (typeof a == "string") throw new Error("string part in extglob AST??");
        a.copyIn(z(i, ve)[u]);
      }
      r = i, i = z(r, xe);
    }
  }
  return this;
}, ir = new WeakSet(), vn = function(e, r, i, u) {
  var m, w;
  let a = !1, h = !1, c = -1, l = !1;
  if (r.type === null) {
    let v = i, _ = "";
    for (; v < e.length; ) {
      const A = e.charAt(v++);
      if (a || A === "\\") a = !a, _ += A;
      else if (h) v === c + 1 ? A !== "^" && A !== "!" || (l = !0) : A !== "]" || v === c + 2 && l || (h = !1), _ += A;
      else if (A !== "[") if (u.noext || !Qo(A) || e.charAt(v) !== "(") _ += A;
      else {
        r.push(_), _ = "";
        const E = new Ze(A, r);
        v = Qt(m = Ze, ir, vn).call(m, e, E, v, u), r.push(E);
      }
      else h = !0, c = v, l = !1, _ += A;
    }
    return r.push(_), v;
  }
  let o = i + 1, s = new Ze(null, r);
  const p = [];
  let d = "";
  for (; o < e.length; ) {
    const v = e.charAt(o++);
    if (a || v === "\\") a = !a, d += v;
    else if (h) o === c + 1 ? v !== "^" && v !== "!" || (l = !0) : v !== "]" || o === c + 2 && l || (h = !1), d += v;
    else if (v !== "[") if (Qo(v) && e.charAt(o) === "(") {
      s.push(d), d = "";
      const _ = new Ze(v, s);
      s.push(_), o = Qt(w = Ze, ir, vn).call(w, e, _, o, u);
    } else if (v !== "|") {
      if (v === ")") return d === "" && z(r, ve).length === 0 && Ie(r, nn, !0), s.push(d), d = "", r.push(...p, s), o;
      d += v;
    } else s.push(d), d = "", p.push(s), s = new Ze(null, r);
    else h = !0, c = o, l = !1, d += v;
  }
  return r.type = null, Ie(r, ke, void 0), Ie(r, ve, [e.substring(i - 1)]), o;
}, ji = function(e) {
  return z(this, ve).map((r) => {
    if (typeof r == "string") throw new Error("string type in extglob ast??");
    const [i, u, a, h] = r.toRegExpSource(e);
    return Ie(this, qt, z(this, qt) || h), i;
  }).filter((r) => !(this.isStart() && this.isEnd() && !r)).join("|");
}, Fa = function(e, r) {
  let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], u = !1, a = "", h = !1;
  for (let c = 0; c < e.length; c++) {
    const l = e.charAt(c);
    if (u) u = !1, a += (Ac.has(l) ? "\\" : "") + l;
    else if (l !== "\\") {
      if (l === "[") {
        const [o, s, p, d] = vc(e, c);
        if (p) {
          a += o, h = h || s, c += p - 1, r = r || d;
          continue;
        }
      }
      l !== "*" ? l !== "?" ? a += l.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (a += ro, r = !0) : (a += i && e === "*" ? ts : es, r = !0);
    } else c === e.length - 1 ? a += "\\\\" : u = !0;
  }
  return [a, Hr(e), !!r, h];
}, it(Ze, ir);
let Sn = Ze;
const ze = function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return Cn(e), !(!r.nocomment && e.charAt(0) === "#") && new Ln(e, r).match(n);
}, Ic = /^\*+([^+@!?\*\[\(]*)$/, _c = (n) => (e) => !e.startsWith(".") && e.endsWith(n), Oc = (n) => (e) => e.endsWith(n), Rc = (n) => (n = n.toLowerCase(), (e) => !e.startsWith(".") && e.toLowerCase().endsWith(n)), xc = (n) => (n = n.toLowerCase(), (e) => e.toLowerCase().endsWith(n)), Cc = /^\*+\.\*+$/, Sc = (n) => !n.startsWith(".") && n.includes("."), Lc = (n) => n !== "." && n !== ".." && n.includes("."), Pc = /^\.\*+$/, $c = (n) => n !== "." && n !== ".." && n.startsWith("."), kc = /^\*+$/, Fc = (n) => n.length !== 0 && !n.startsWith("."), Mc = (n) => n.length !== 0 && n !== "." && n !== "..", Uc = /^\?+([^+@!?\*\[\(]*)?$/, Bc = (n) => {
  let [e, r = ""] = n;
  const i = Ma([e]);
  return r ? (r = r.toLowerCase(), (u) => i(u) && u.toLowerCase().endsWith(r)) : i;
}, Dc = (n) => {
  let [e, r = ""] = n;
  const i = Ua([e]);
  return r ? (r = r.toLowerCase(), (u) => i(u) && u.toLowerCase().endsWith(r)) : i;
}, jc = (n) => {
  let [e, r = ""] = n;
  const i = Ua([e]);
  return r ? (u) => i(u) && u.endsWith(r) : i;
}, Gc = (n) => {
  let [e, r = ""] = n;
  const i = Ma([e]);
  return r ? (u) => i(u) && u.endsWith(r) : i;
}, Ma = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && !i.startsWith(".");
}, Ua = (n) => {
  let [e] = n;
  const r = e.length;
  return (i) => i.length === r && i !== "." && i !== "..";
}, Ba = typeof Xe == "object" && Xe ? typeof Xe.env == "object" && Xe.env && Xe.env.__MINIMATCH_TESTING_PLATFORM__ || Xe.platform : "posix";
ze.sep = Ba === "win32" ? "\\" : "/";
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
    let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return e.match(r, i, gt(n, u));
  }, sep: e.sep, GLOBSTAR: wt });
};
const Da = function(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Cn(n), e.nobrace || !/\{(?:(?!\{).)*\}/.test(n) ? [n] : yc(n);
};
ze.braceExpand = Da, ze.makeRe = function(n) {
  return new Ln(n, arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).makeRe();
}, ze.match = function(n, e) {
  const r = new Ln(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {});
  return n = n.filter((i) => r.match(i)), r.options.nonull && !n.length && n.push(e), n;
};
const rs = /[?*]|[+@!]\(.*?\)|\[|\]/;
class Ln {
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
    Cn(e), r = r || {}, this.options = r, this.pattern = e, this.platform = r.platform || Ba, this.isWindows = this.platform === "win32", this.windowsPathsNoEscape = !!r.windowsPathsNoEscape || r.allowWindowsEscape === !1, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!r.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!r.nonegate, this.comment = !1, this.empty = !1, this.partial = !!r.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = r.windowsNoMagicRoot !== void 0 ? r.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
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
    let u = this.globParts.map((a, h, c) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const l = !(a[0] !== "" || a[1] !== "" || a[2] !== "?" && rs.test(a[2]) || rs.test(a[3])), o = /^[a-z]:/i.test(a[0]);
        if (l) return [...a.slice(0, 4), ...a.slice(4).map((s) => this.parse(s))];
        if (o) return [a[0], ...a.slice(1).map((s) => this.parse(s))];
      }
      return a.map((l) => this.parse(l));
    });
    if (this.debug(this.pattern, u), this.set = u.filter((a) => a.indexOf(!1) === -1), this.isWindows) for (let a = 0; a < this.set.length; a++) {
      const h = this.set[a];
      h[0] === "" && h[1] === "" && this.globParts[a][2] === "?" && typeof h[3] == "string" && /^[a-z]:$/i.test(h[3]) && (h[2] = "?");
    }
    this.debug(this.pattern, this.set);
  }
  preprocess(e) {
    if (this.options.noglobstar) for (let i = 0; i < e.length; i++) for (let u = 0; u < e[i].length; u++) e[i][u] === "**" && (e[i][u] = "*");
    const { optimizationLevel: r = 1 } = this.options;
    return r >= 2 ? (e = this.firstPhasePreProcess(e), e = this.secondPhasePreProcess(e)) : e = r >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e), e;
  }
  adjascentGlobstarOptimize(e) {
    return e.map((r) => {
      let i = -1;
      for (; (i = r.indexOf("**", i + 1)) !== -1; ) {
        let u = i;
        for (; r[u + 1] === "**"; ) u++;
        u !== i && r.splice(i, u - i);
      }
      return r;
    });
  }
  levelOneOptimize(e) {
    return e.map((r) => (r = r.reduce((i, u) => {
      const a = i[i.length - 1];
      return u === "**" && a === "**" ? i : u === ".." && a && a !== ".." && a !== "." && a !== "**" ? (i.pop(), i) : (i.push(u), i);
    }, [])).length === 0 ? [""] : r);
  }
  levelTwoFileOptimize(e) {
    Array.isArray(e) || (e = this.slashSplit(e));
    let r = !1;
    do {
      if (r = !1, !this.preserveMultipleSlashes) {
        for (let u = 1; u < e.length - 1; u++) {
          const a = e[u];
          u === 1 && a === "" && e[0] === "" || a !== "." && a !== "" || (r = !0, e.splice(u, 1), u--);
        }
        e[0] !== "." || e.length !== 2 || e[1] !== "." && e[1] !== "" || (r = !0, e.pop());
      }
      let i = 0;
      for (; (i = e.indexOf("..", i + 1)) !== -1; ) {
        const u = e[i - 1];
        u && u !== "." && u !== ".." && u !== "**" && (r = !0, e.splice(i - 1, 2), i -= 2);
      }
    } while (r);
    return e.length === 0 ? [""] : e;
  }
  firstPhasePreProcess(e) {
    let r = !1;
    do {
      r = !1;
      for (let i of e) {
        let u = -1;
        for (; (u = i.indexOf("**", u + 1)) !== -1; ) {
          let h = u;
          for (; i[h + 1] === "**"; ) h++;
          h > u && i.splice(u + 1, h - u);
          let c = i[u + 1];
          const l = i[u + 2], o = i[u + 3];
          if (c !== ".." || !l || l === "." || l === ".." || !o || o === "." || o === "..") continue;
          r = !0, i.splice(u, 1);
          const s = i.slice(0);
          s[u] = "**", e.push(s), u--;
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
      const u = this.partsMatch(e[r], e[i], !this.preserveMultipleSlashes);
      if (u) {
        e[r] = [], e[i] = u;
        break;
      }
    }
    return e.filter((r) => r.length);
  }
  partsMatch(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], u = 0, a = 0, h = [], c = "";
    for (; u < e.length && a < r.length; ) if (e[u] === r[a]) h.push(c === "b" ? r[a] : e[u]), u++, a++;
    else if (i && e[u] === "**" && r[a] === e[u + 1]) h.push(e[u]), u++;
    else if (i && r[a] === "**" && e[u] === r[a + 1]) h.push(r[a]), a++;
    else if (e[u] !== "*" || !r[a] || !this.options.dot && r[a].startsWith(".") || r[a] === "**") {
      if (r[a] !== "*" || !e[u] || !this.options.dot && e[u].startsWith(".") || e[u] === "**" || c === "a") return !1;
      c = "b", h.push(r[a]), u++, a++;
    } else {
      if (c === "b") return !1;
      c = "a", h.push(e[u]), u++, a++;
    }
    return e.length === r.length && h;
  }
  parseNegate() {
    if (this.nonegate) return;
    const e = this.pattern;
    let r = !1, i = 0;
    for (let u = 0; u < e.length && e.charAt(u) === "!"; u++) r = !r, i++;
    i && (this.pattern = e.slice(i)), this.negate = r;
  }
  matchOne(e, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    const u = this.options;
    if (this.isWindows) {
      const v = typeof e[0] == "string" && /^[a-z]:$/i.test(e[0]), _ = !v && e[0] === "" && e[1] === "" && e[2] === "?" && /^[a-z]:$/i.test(e[3]), A = typeof r[0] == "string" && /^[a-z]:$/i.test(r[0]), E = _ ? 3 : v ? 0 : void 0, I = !A && r[0] === "" && r[1] === "" && r[2] === "?" && typeof r[3] == "string" && /^[a-z]:$/i.test(r[3]) ? 3 : A ? 0 : void 0;
      if (typeof E == "number" && typeof I == "number") {
        const [C, T] = [e[E], r[I]];
        C.toLowerCase() === T.toLowerCase() && (r[I] = C, I > E ? r = r.slice(I) : E > I && (e = e.slice(E)));
      }
    }
    const { optimizationLevel: a = 1 } = this.options;
    a >= 2 && (e = this.levelTwoFileOptimize(e)), this.debug("matchOne", this, { file: e, pattern: r }), this.debug("matchOne", e.length, r.length);
    for (var h = 0, c = 0, l = e.length, o = r.length; h < l && c < o; h++, c++) {
      this.debug("matchOne loop");
      var s = r[c], p = e[h];
      if (this.debug(r, s, p), s === !1) return !1;
      if (s === wt) {
        this.debug("GLOBSTAR", [r, s, p]);
        var d = h, m = c + 1;
        if (m === o) {
          for (this.debug("** at the end"); h < l; h++) if (e[h] === "." || e[h] === ".." || !u.dot && e[h].charAt(0) === ".") return !1;
          return !0;
        }
        for (; d < l; ) {
          var w = e[d];
          if (this.debug(`
globstar while`, e, d, r, m, w), this.matchOne(e.slice(d), r.slice(m), i)) return this.debug("globstar found match!", d, l, w), !0;
          if (w === "." || w === ".." || !u.dot && w.charAt(0) === ".") {
            this.debug("dot detected!", e, d, r, m);
            break;
          }
          this.debug("globstar swallow a segment, and continue"), d++;
        }
        return !(!i || (this.debug(`
>>> no match, partial?`, e, d, r, m), d !== l));
      }
      let v;
      if (typeof s == "string" ? (v = p === s, this.debug("string match", s, p, v)) : (v = s.test(p), this.debug("pattern match", s, p, v)), !v) return !1;
    }
    if (h === l && c === o) return !0;
    if (h === l) return i;
    if (c === o) return h === l - 1 && e[h] === "";
    throw new Error("wtf?");
  }
  braceExpand() {
    return Da(this.pattern, this.options);
  }
  parse(e) {
    Cn(e);
    const r = this.options;
    if (e === "**") return wt;
    if (e === "") return "";
    let i, u = null;
    (i = e.match(kc)) ? u = r.dot ? Mc : Fc : (i = e.match(Ic)) ? u = (r.nocase ? r.dot ? xc : Rc : r.dot ? Oc : _c)(i[1]) : (i = e.match(Uc)) ? u = (r.nocase ? r.dot ? Dc : Bc : r.dot ? jc : Gc)(i) : (i = e.match(Cc)) ? u = r.dot ? Lc : Sc : (i = e.match(Pc)) && (u = $c);
    const a = Sn.fromGlob(e, this.options).toMMPattern();
    return u && typeof a == "object" && Reflect.defineProperty(a, "test", { value: u }), a;
  }
  makeRe() {
    if (this.regexp || this.regexp === !1) return this.regexp;
    const e = this.set;
    if (!e.length) return this.regexp = !1, this.regexp;
    const r = this.options, i = r.noglobstar ? "[^/]*?" : r.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", u = new Set(r.nocase ? ["i"] : []);
    let a = e.map((l) => {
      const o = l.map((s) => {
        if (s instanceof RegExp) for (const p of s.flags.split("")) u.add(p);
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
      this.regexp = new RegExp(a, [...u].join(""));
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
    const u = this.slashSplit(e);
    this.debug(this.pattern, "split", u);
    const a = this.set;
    this.debug(this.pattern, "set", a);
    let h = u[u.length - 1];
    if (!h) for (let c = u.length - 2; !h && c >= 0; c--) h = u[c];
    for (let c = 0; c < a.length; c++) {
      const l = a[c];
      let o = u;
      if (i.matchBase && l.length === 1 && (o = [h]), this.matchOne(o, l, r)) return !!i.flipNegate || !this.negate;
    }
    return !i.flipNegate && this.negate;
  }
  static defaults(e) {
    return ze.defaults(e).Minimatch;
  }
}
function no(n) {
  const e = new Error(`${arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""}Invalid response: ${n.status} ${n.statusText}`);
  return e.status = n.status, e.response = n, e;
}
function Pe(n, e) {
  const { status: r } = e;
  if (r === 401 && n.digest) return e;
  if (r >= 400) throw no(e);
  return e;
}
function Er(n, e) {
  return arguments.length > 2 && arguments[2] !== void 0 && arguments[2] ? { data: e, headers: n.headers ? dc(n.headers) : {}, status: n.status, statusText: n.statusText } : e;
}
ze.AST = Sn, ze.Minimatch = Ln, ze.escape = function(n) {
  let { windowsPathsNoEscape: e = !1 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return e ? n.replace(/[?*()[\]]/g, "[$&]") : n.replace(/[?*()[\]\\]/g, "\\$&");
}, ze.unescape = Hr;
const qc = (ns = function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const u = Le({ url: Te(n.remoteURL, Ne(e)), method: "COPY", headers: { Destination: Te(n.remoteURL, Ne(r)), Overwrite: i.overwrite === !1 ? "F" : "T", Depth: i.shallow ? "0" : "infinity" } }, n, i);
  return h = function(c) {
    Pe(n, c);
  }, (a = Se(u, n)) && a.then || (a = Promise.resolve(a)), h ? a.then(h) : a;
  var a, h;
}, function() {
  for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
  try {
    return Promise.resolve(ns.apply(this, n));
  } catch (r) {
    return Promise.reject(r);
  }
});
var ns, io = we(635), Vc = we(829), Gt = we.n(Vc), Rr = function(n) {
  return n.Array = "array", n.Object = "object", n.Original = "original", n;
}(Rr || {});
function hn(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rr.Original;
  const i = Gt().get(n, e);
  return r === "array" && Array.isArray(i) === !1 ? [i] : r === "object" && Array.isArray(i) ? i[0] : i;
}
function sn(n) {
  return new Promise((e) => {
    e(function(r) {
      const { multistatus: i } = r;
      if (i === "") return { multistatus: { response: [] } };
      if (!i) throw new Error("Invalid response: No root multistatus found");
      const u = { multistatus: Array.isArray(i) ? i[0] : i };
      return Gt().set(u, "multistatus.response", hn(u, "multistatus.response", Rr.Array)), Gt().set(u, "multistatus.response", Gt().get(u, "multistatus.response").map((a) => function(h) {
        const c = Object.assign({}, h);
        return c.status ? Gt().set(c, "status", hn(c, "status", Rr.Object)) : (Gt().set(c, "propstat", hn(c, "propstat", Rr.Object)), Gt().set(c, "propstat.prop", hn(c, "propstat.prop", Rr.Object))), c;
      }(a))), u;
    }(new io.XMLParser({ removeNSPrefix: !0, numberParseOptions: { hex: !0, leadingZeros: !1 } }).parse(n)));
  });
}
function Dn(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
  const { getlastmodified: i = null, getcontentlength: u = "0", resourcetype: a = null, getcontenttype: h = null, getetag: c = null } = n, l = a && typeof a == "object" && a.collection !== void 0 ? "directory" : "file", o = { filename: e, basename: _n().basename(e), lastmod: i, size: parseInt(u, 10), type: l, etag: typeof c == "string" ? c.replace(/"/g, "") : null };
  return l === "file" && (o.mime = h && typeof h == "string" ? h.split(";")[0] : ""), r && (n.displayname !== void 0 && (n.displayname = String(n.displayname)), o.props = n), o;
}
function ja(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], i = null;
  try {
    n.multistatus.response[0].propstat && (i = n.multistatus.response[0]);
  } catch {
  }
  if (!i) throw new Error("Failed getting item stat: bad response");
  const { propstat: { prop: u, status: a } } = i, [h, c, l] = a.split(" ", 3), o = parseInt(c, 10);
  if (o >= 400) {
    const s = new Error(`Invalid response: ${o} ${l}`);
    throw s.status = o, s;
  }
  return Dn(u, en(e), r);
}
function Ga(n) {
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
function ei(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const oo = /* @__PURE__ */ function(n) {
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
  const { details: i = !1 } = r, u = Le({ url: Te(n.remoteURL, Ne(e)), method: "PROPFIND", headers: { Accept: "text/plain,application/xml", Depth: "0" } }, n, r);
  return ei(Se(u, n), function(a) {
    return Pe(n, a), ei(a.text(), function(h) {
      return ei(sn(h), function(c) {
        const l = ja(c, e, i);
        return Er(a, l, i);
      });
    });
  });
});
function qa(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Wc = Va(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = function(a) {
    if (!a || a === "/") return [];
    let h = a;
    const c = [];
    do
      c.push(h), h = _n().dirname(h);
    while (h && h !== "/");
    return c;
  }(en(e));
  i.sort((a, h) => a.length > h.length ? 1 : h.length > a.length ? -1 : 0);
  let u = !1;
  return function(a, h, c) {
    if (typeof a[os] == "function") {
      let _ = function(A) {
        try {
          for (; !(l = p.next()).done; ) if ((A = h(l.value)) && A.then) {
            if (!ss(A)) return void A.then(_, s || (s = Ke.bind(null, o = new xr(), 2)));
            A = A.v;
          }
          o ? Ke(o, 1, A) : o = A;
        } catch (E) {
          Ke(o || (o = new xr()), 2, E);
        }
      };
      var v = _, l, o, s, p = a[os]();
      if (_(), p.return) {
        var d = function(A) {
          try {
            l.done || p.return();
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
      var I, C, T = -1;
      return function x(S) {
        try {
          for (; ++T < _.length && (!E || !E()); ) if ((S = A(T)) && S.then) {
            if (!ss(S)) return void S.then(x, C || (C = Ke.bind(null, I = new xr(), 2)));
            S = S.v;
          }
          I ? Ke(I, 1, S) : I = S;
        } catch (P) {
          Ke(I || (I = new xr()), 2, P);
        }
      }(), I;
    }(m, function(_) {
      return h(m[_]);
    }, c);
  }(i, function(a) {
    return h = function() {
      return function(l, o) {
        try {
          var s = qa(oo(n, a), function(p) {
            if (p.type !== "directory") throw new Error(`Path includes a file: ${e}`);
          });
        } catch (p) {
          return o(p);
        }
        return s && s.then ? s.then(void 0, o) : s;
      }(0, function(l) {
        const o = l;
        return function() {
          if (o.status === 404) return u = !0, is(Gi(n, a, { ...r, recursive: !1 }));
          throw l;
        }();
      });
    }, (c = function() {
      if (u) return is(Gi(n, a, { ...r, recursive: !1 }));
    }()) && c.then ? c.then(h) : h();
    var h, c;
  }, function() {
    return !1;
  });
});
function Va(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
function Xc() {
}
function is(n, e) {
  return n && n.then ? n.then(Xc) : Promise.resolve();
}
const os = typeof Symbol < "u" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
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
    const i = new n(), u = this.s;
    if (u) {
      const a = 1 & u ? e : r;
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
function ss(n) {
  return n instanceof xr && 1 & n.s;
}
const Gi = Va(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (r.recursive === !0) return Wc(n, e, r);
  const i = Le({ url: Te(n.remoteURL, (u = Ne(e), u.endsWith("/") ? u : u + "/")), method: "MKCOL" }, n, r);
  var u;
  return qa(Se(i, n), function(a) {
    Pe(n, a);
  });
});
var zc = we(388), as = we.n(zc);
const Hc = /* @__PURE__ */ function(n) {
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
  const u = Le({ url: Te(n.remoteURL, Ne(e)), method: "GET", headers: i }, n, r);
  return h = function(c) {
    if (Pe(n, c), i.Range && c.status !== 206) {
      const l = new Error(`Invalid response code for partial request: ${c.status}`);
      throw l.status = c.status, l;
    }
    return r.callback && setTimeout(() => {
      r.callback(c);
    }, 0), c.body;
  }, (a = Se(u, n)) && a.then || (a = Promise.resolve(a)), h ? a.then(h) : a;
  var a, h;
}), Yc = () => {
}, Zc = /* @__PURE__ */ function(n) {
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
  }, (u = Se(i, n)) && u.then || (u = Promise.resolve(u)), a ? u.then(a) : u;
  var u, a;
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
  const i = Le({ url: Te(n.remoteURL, Ne(e)), method: "DELETE" }, n, r);
  return a = function(h) {
    Pe(n, h);
  }, (u = Se(i, n)) && u.then || (u = Promise.resolve(u)), a ? u.then(a) : u;
  var u, a;
}), Kc = /* @__PURE__ */ function(n) {
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
  return function(i, u) {
    try {
      var a = (h = oo(n, e, r), c = function() {
        return !0;
      }, l ? c ? c(h) : h : (h && h.then || (h = Promise.resolve(h)), c ? h.then(c) : h));
    } catch (o) {
      return u(o);
    }
    var h, c, l;
    return a && a.then ? a.then(void 0, u) : a;
  }(0, function(i) {
    if (i.status === 404) return !1;
    throw i;
  });
});
function ti(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const Qc = /* @__PURE__ */ function(n) {
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
  return ti(Se(i, n), function(u) {
    return Pe(n, u), ti(u.text(), function(a) {
      if (!a) throw new Error("Failed parsing directory contents: Empty response");
      return ti(sn(a), function(h) {
        const c = Xo(e);
        let l = function(o, s, p) {
          let d = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], m = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
          const w = _n().join(s, "/"), { multistatus: { response: v } } = o, _ = v.map((A) => {
            const E = function(C) {
              try {
                return C.replace(/^https?:\/\/[^\/]+/, "");
              } catch (T) {
                throw new Qe(T, "Failed normalising HREF");
              }
            }(A.href), { propstat: { prop: I } } = A;
            return Dn(I, w === "/" ? decodeURIComponent(en(E)) : en(_n().relative(decodeURIComponent(w), decodeURIComponent(E))), d);
          });
          return m ? _ : _.filter((A) => A.basename && (A.type === "file" || A.filename !== p.replace(/\/$/, "")));
        }(h, Xo(n.remoteBasePath || n.remotePath), c, r.details, r.includeSelf);
        return r.glob && (l = function(o, s) {
          return o.filter((p) => ze(p.filename, s, { matchBase: !0 }));
        }(l, r.glob)), Er(u, l, r.details);
      });
    });
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
const ef = so(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: Te(n.remoteURL, Ne(e)), method: "GET", headers: { Accept: "text/plain" }, transformResponse: [nf] }, n, r);
  return Pn(Se(i, n), function(u) {
    return Pe(n, u), Pn(u.text(), function(a) {
      return Er(u, a, r.details);
    });
  });
});
function Pn(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const tf = so(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const i = Le({ url: Te(n.remoteURL, Ne(e)), method: "GET" }, n, r);
  return Pn(Se(i, n), function(u) {
    let a;
    return Pe(n, u), function(h, c) {
      var l = h();
      return l && l.then ? l.then(c) : c();
    }(function() {
      return Pn(u.arrayBuffer(), function(h) {
        a = h;
      });
    }, function() {
      return Er(u, a, r.details);
    });
  });
}), rf = so(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { format: i = "binary" } = r;
  if (i !== "binary" && i !== "text") throw new Qe({ info: { code: Xt.InvalidOutputFormat } }, `Invalid output format: ${i}`);
  return i === "text" ? ef(n, e, r) : tf(n, e, r);
}), nf = (n) => n;
function of(n) {
  return new io.XMLBuilder({ attributeNamePrefix: "@_", format: !0, ignoreAttributes: !1, suppressEmptyNode: !0 }).build(Wa({ lockinfo: { "@_xmlns:d": "DAV:", lockscope: { exclusive: {} }, locktype: { write: {} }, owner: { href: n } } }, "d"));
}
function Wa(n, e) {
  const r = { ...n };
  for (const i in r) r.hasOwnProperty(i) && (r[i] && typeof r[i] == "object" && i.indexOf(":") === -1 ? (r[`${e}:${i}`] = Wa(r[i], e), delete r[i]) : /^@_/.test(i) === !1 && (r[`${e}:${i}`] = r[i], delete r[i]));
  return r;
}
function qi(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
function Xa(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const sf = Xa(function(n, e, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const u = Le({ url: Te(n.remoteURL, Ne(e)), method: "UNLOCK", headers: { "Lock-Token": r } }, n, i);
  return qi(Se(u, n), function(a) {
    if (Pe(n, a), a.status !== 204 && a.status !== 200) throw no(a);
  });
}), af = Xa(function(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { refreshToken: i, timeout: u = lf } = r, a = { Accept: "text/plain,application/xml", Timeout: u };
  i && (a.If = i);
  const h = Le({ url: Te(n.remoteURL, Ne(e)), method: "LOCK", headers: a, data: of(n.contactHref) }, n, r);
  return qi(Se(h, n), function(c) {
    return Pe(n, c), qi(c.text(), function(l) {
      const o = (d = l, new io.XMLParser({ removeNSPrefix: !0, parseAttributeValue: !0, parseTagValue: !0 }).parse(d)), s = Gt().get(o, "prop.lockdiscovery.activelock.locktoken.href"), p = Gt().get(o, "prop.lockdiscovery.activelock.timeout");
      var d;
      if (!s) throw no(c, "No lock token received: ");
      return { token: s, serverTimeout: p };
    });
  });
}), lf = "Infinite, Second-4100000000";
function ri(n, e, r) {
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
  return ri(Se(i, n), function(u) {
    return Pe(n, u), ri(u.text(), function(a) {
      return ri(sn(a), function(h) {
        const c = function(l) {
          try {
            const [o] = l.multistatus.response, { propstat: { prop: { "quota-used-bytes": s, "quota-available-bytes": p } } } = o;
            return s !== void 0 && p !== void 0 ? { used: parseInt(String(s), 10), available: Ga(p) } : null;
          } catch {
          }
          return null;
        }(h);
        return Er(u, c, e.details);
      });
    });
  });
});
function ni(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const cf = /* @__PURE__ */ function(n) {
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
  const { details: i = !1 } = r, u = Le({ url: Te(n.remoteURL, Ne(e)), method: "SEARCH", headers: { Accept: "text/plain,application/xml", "Content-Type": n.headers["Content-Type"] || "application/xml; charset=utf-8" } }, n, r);
  return ni(Se(u, n), function(a) {
    return Pe(n, a), ni(a.text(), function(h) {
      return ni(sn(h), function(c) {
        const l = function(o, s, p) {
          const d = { truncated: !1, results: [] };
          return d.truncated = o.multistatus.response.some((m) => {
            var w, v;
            return ((v = (m.status || ((w = m.propstat) == null ? void 0 : w.status)).split(" ", 3)) == null ? void 0 : v[1]) === "507" && m.href.replace(/\/$/, "").endsWith(Ne(s).replace(/\/$/, ""));
          }), o.multistatus.response.forEach((m) => {
            if (m.propstat === void 0) return;
            const w = m.href.split("/").map(decodeURIComponent).join("/");
            d.results.push(Dn(m.propstat.prop, w, p));
          }), d;
        }(c, e, i);
        return Er(a, l, i);
      });
    });
  });
}), ff = /* @__PURE__ */ function(n) {
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
  const u = Le({ url: Te(n.remoteURL, Ne(e)), method: "MOVE", headers: { Destination: Te(n.remoteURL, Ne(r)), Overwrite: i.overwrite === !1 ? "F" : "T" } }, n, i);
  return h = function(c) {
    Pe(n, c);
  }, (a = Se(u, n)) && a.then || (a = Promise.resolve(a)), h ? a.then(h) : a;
  var a, h;
});
var hf = we(172);
const pf = /* @__PURE__ */ function(n) {
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
  const { contentLength: u = !0, overwrite: a = !0 } = i, h = { "Content-Type": "application/octet-stream" };
  u === !1 || (h["Content-Length"] = typeof u == "number" ? `${u}` : `${function(s) {
    if (La(s)) return s.byteLength;
    if (Pa(s)) return s.length;
    if (typeof s == "string") return (0, hf.d)(s);
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
  }, (l = Se(c, n)) && l.then || (l = Promise.resolve(l)), o ? l.then(o) : l;
  var l, o;
}), za = /* @__PURE__ */ function(n) {
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
  }, (u = Se(i, n)) && u.then || (u = Promise.resolve(u)), a ? u.then(a) : u;
  var u, a;
});
function Jr(n, e, r) {
  return r ? e ? e(n) : n : (n && n.then || (n = Promise.resolve(n)), e ? n.then(e) : n);
}
const df = ao(function(n, e, r, i, u) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new Qe({ info: { code: Xt.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const h = { "Content-Type": "application/octet-stream", "Content-Length": "" + (i - r + 1), "Content-Range": `bytes ${r}-${i}/*` }, c = Le({ url: Te(n.remoteURL, Ne(e)), method: "PUT", headers: h, data: u }, n, a);
  return Jr(Se(c, n), function(l) {
    Pe(n, l);
  });
});
function ls(n, e) {
  var r = n();
  return r && r.then ? r.then(e) : e(r);
}
const gf = ao(function(n, e, r, i, u) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  if (r > i || r < 0) throw new Qe({ info: { code: Xt.InvalidUpdateRange } }, `Invalid update range ${r} for partial update`);
  const h = { "Content-Type": "application/x-sabredav-partialupdate", "Content-Length": "" + (i - r + 1), "X-Update-Range": `bytes=${r}-${i}` }, c = Le({ url: Te(n.remoteURL, Ne(e)), method: "PATCH", headers: h, data: u }, n, a);
  return Jr(Se(c, n), function(l) {
    Pe(n, l);
  });
});
function ao(n) {
  return function() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    try {
      return Promise.resolve(n.apply(this, e));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}
const mf = ao(function(n, e, r, i, u) {
  let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {};
  return Jr(za(n, e, a), function(h) {
    let c = !1;
    return ls(function() {
      if (h.compliance.includes("sabredav-partialupdate")) return Jr(gf(n, e, r, i, u, a), function(l) {
        return c = !0, l;
      });
    }, function(l) {
      let o = !1;
      return c ? l : ls(function() {
        if (h.server.includes("Apache") && h.compliance.includes("<http://apache.org/dav/propset/fs/1>")) return Jr(df(n, e, r, i, u, a), function(s) {
          return o = !0, s;
        });
      }, function(s) {
        if (o) return s;
        throw new Qe({ info: { code: Xt.NotSupported } }, "Not supported");
      });
    });
  });
}), wf = "https://github.com/perry-mitchell/webdav-client/blob/master/LOCK_CONTACT.md";
function yf(n) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { authType: r = null, remoteBasePath: i, contactHref: u = wf, ha1: a, headers: h = {}, httpAgent: c, httpsAgent: l, password: o, token: s, username: p, withCredentials: d } = e;
  let m = r;
  m || (m = p || o ? Je.Password : Je.None);
  const w = { authType: m, remoteBasePath: i, contactHref: u, ha1: a, headers: Object.assign({}, h), httpAgent: c, httpsAgent: l, password: o, remotePath: oc(n), remoteURL: n, token: s, username: p, withCredentials: d };
  return xa(w, p, o, s, a), { copyFile: (v, _, A) => qc(w, v, _, A), createDirectory: (v, _) => Gi(w, v, _), createReadStream: (v, _) => function(A, E) {
    let I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const C = new (as()).PassThrough();
    return Hc(A, E, I).then((T) => {
      T.pipe(C);
    }).catch((T) => {
      C.emit("error", T);
    }), C;
  }(w, v, _), createWriteStream: (v, _, A) => function(E, I) {
    let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, T = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Yc;
    const x = new (as()).PassThrough(), S = {};
    C.overwrite === !1 && (S["If-None-Match"] = "*");
    const P = Le({ url: Te(E.remoteURL, Ne(I)), method: "PUT", headers: S, data: x, maxRedirects: 0 }, E, C);
    return Se(P, E).then((k) => Pe(E, k)).then((k) => {
      setTimeout(() => {
        T(k);
      }, 0);
    }).catch((k) => {
      x.emit("error", k);
    }), x;
  }(w, v, _, A), customRequest: (v, _) => Zc(w, v, _), deleteFile: (v, _) => Jc(w, v, _), exists: (v, _) => Kc(w, v, _), getDirectoryContents: (v, _) => Qc(w, v, _), getFileContents: (v, _) => rf(w, v, _), getFileDownloadLink: (v) => function(_, A) {
    let E = Te(_.remoteURL, Ne(A));
    const I = /^https:/i.test(E) ? "https" : "http";
    switch (_.authType) {
      case Je.None:
        break;
      case Je.Password: {
        const C = Ho(_.headers.Authorization.replace(/^Basic /i, "").trim());
        E = E.replace(/^https?:\/\//, `${I}://${C}@`);
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
        const C = Ho(_.headers.Authorization.replace(/^Basic /i, "").trim());
        E = E.replace(/^https?:\/\//, `${I}://${C}@`);
        break;
      }
      default:
        throw new Qe({ info: { code: Xt.LinkUnsupportedAuthType } }, `Unsupported auth type for file link: ${_.authType}`);
    }
    return E;
  }(w, v), getHeaders: () => Object.assign({}, w.headers), getQuota: (v) => uf(w, v), lock: (v, _) => af(w, v, _), moveFile: (v, _, A) => ff(w, v, _, A), putFileContents: (v, _, A) => pf(w, v, _, A), partialUpdateFileContents: (v, _, A, E, I) => mf(w, v, _, A, E, I), getDAVCompliance: (v) => za(w, v), search: (v, _) => cf(w, v, _), setHeaders: (v) => {
    w.headers = Object.assign({}, v);
  }, stat: (v, _) => oo(w, v, _), unlock: (v, _, A) => sf(w, v, _, A) };
}
bt.hT;
bt.O4;
bt.Kd;
bt.YK;
var Ef = bt.UU, vf = bt.Gu;
bt.ky;
bt.h4;
bt.ch;
bt.hq;
bt.i5;
function Ha(n, e, r) {
  const i = document.querySelector(`#initial-state-${n}-${e}`);
  if (i === null)
    return r;
  try {
    return JSON.parse(atob(i.value));
  } catch {
    throw new Error(`Could not parse initial state ${e} of ${n}`);
  }
}
function lo() {
  return Ha("files_sharing", "isPublic", null) ?? document.querySelector(
    'input#isPublic[type="hidden"][name="isPublic"][value="1"]'
  ) !== null;
}
function bf() {
  var n;
  return Ha("files_sharing", "sharingToken", null) ?? ((n = document.querySelector('input#sharingToken[type="hidden"]')) == null ? void 0 : n.value) ?? null;
}
const tn = Xu().setApp("@nextcloud/files").detectUser().build();
var je = /* @__PURE__ */ ((n) => (n[n.NONE = 0] = "NONE", n[n.CREATE = 4] = "CREATE", n[n.READ = 1] = "READ", n[n.UPDATE = 2] = "UPDATE", n[n.DELETE = 8] = "DELETE", n[n.SHARE = 16] = "SHARE", n[n.ALL = 31] = "ALL", n))(je || {}), uo = /* @__PURE__ */ ((n) => (n.Folder = "folder", n.File = "file", n))(uo || {});
const Ya = function(n, e) {
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
  if (n.root && Ya(n.source, e)) {
    const r = n.source.match(e)[0];
    if (!n.source.includes(lr.join(r, n.root)))
      throw new Error("The root must be relative to the service. e.g /files/emma");
  }
  if (n.status && !Object.values(co).includes(n.status))
    throw new Error("Status must be a valid NodeStatus");
};
var co = /* @__PURE__ */ ((n) => (n.NEW = "new", n.FAILED = "failed", n.LOADING = "loading", n.LOCKED = "locked", n))(co || {});
class jn {
  constructor(e, r) {
    ge(this, "_data");
    ge(this, "_attributes");
    ge(this, "_knownDavService", /(remote|public)\.php\/(web)?dav/i);
    ge(this, "readonlyAttributes", Object.entries(Object.getOwnPropertyDescriptors(jn.prototype)).filter((e) => typeof e[1].get == "function" && e[0] !== "__proto__").map((e) => e[0]));
    ge(this, "handler", {
      set: (e, r, i) => this.readonlyAttributes.includes(r) ? !1 : Reflect.set(e, r, i),
      deleteProperty: (e, r) => this.readonlyAttributes.includes(r) ? !1 : Reflect.deleteProperty(e, r),
      // TODO: This is deprecated and only needed for files v3
      get: (e, r, i) => this.readonlyAttributes.includes(r) ? (tn.warn(`Accessing "Node.attributes.${r}" is deprecated, access it directly on the Node instance.`), Reflect.get(this, r)) : Reflect.get(e, r, i)
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
    return e + Zl(this.source.slice(e.length));
  }
  /**
   * Get this object name
   * There is no setter as the source is not meant to be changed manually.
   * You can use the rename or move method to change the source.
   */
  get basename() {
    return lr.basename(this.source);
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
    return lr.extname(this.source);
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
      const i = r.indexOf(this.root), u = this.root.replace(/\/$/, "");
      return lr.dirname(r.slice(i + u.length) || "/");
    }
    const e = new URL(this.source);
    return lr.dirname(e.pathname);
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
    return Ya(this.source, this._knownDavService);
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
    return this._data.root ? this._data.root.replace(/^(.+)\/$/, "$1") : this.isDavResource && lr.dirname(this.source).split(this._knownDavService).pop() || null;
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
    this.move(lr.dirname(this.source) + "/" + e);
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
      } catch (u) {
        if (u instanceof TypeError)
          continue;
        throw u;
      }
  }
}
class fo extends jn {
  get type() {
    return uo.File;
  }
  /**
   * Returns a clone of the file
   */
  clone() {
    return new fo(this.data);
  }
}
class ho extends jn {
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
    return new ho(this.data);
  }
}
const Nf = function(n = "") {
  let e = je.NONE;
  return n && ((n.includes("C") || n.includes("K")) && (e |= je.CREATE), n.includes("G") && (e |= je.READ), (n.includes("W") || n.includes("N") || n.includes("V")) && (e |= je.UPDATE), n.includes("D") && (e |= je.DELETE), n.includes("R") && (e |= je.SHARE)), e;
}, Tf = [
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
], Af = {
  d: "DAV:",
  nc: "http://nextcloud.org/ns",
  oc: "http://owncloud.org/ns",
  ocs: "http://open-collaboration-services.org/ns"
}, If = function() {
  return typeof window._nc_dav_properties > "u" && (window._nc_dav_properties = [...Tf]), window._nc_dav_properties.map((n) => `<${n} />`).join(" ");
}, _f = function() {
  return typeof window._nc_dav_namespaces > "u" && (window._nc_dav_namespaces = { ...Af }), Object.keys(window._nc_dav_namespaces).map((n) => {
    var e;
    return `xmlns:${n}="${(e = window._nc_dav_namespaces) == null ? void 0 : e[n]}"`;
  }).join(" ");
}, Of = function() {
  return `<?xml version="1.0"?>
		<d:propfind ${_f()}>
			<d:prop>
				${If()}
			</d:prop>
		</d:propfind>`;
};
function Rf() {
  var n;
  return lo() ? `/files/${bf()}` : `/files/${(n = Ki()) == null ? void 0 : n.uid}`;
}
const Za = Rf();
function xf() {
  const n = Hu("dav");
  return lo() ? n.replace("remote.php", "public.php") : n;
}
const Ja = xf(), Cf = function(n = Ja, e = {}) {
  const r = Ef(n, { headers: e });
  function i(a) {
    r.setHeaders({
      ...e,
      // Add this so the server knows it is an request from the browser
      "X-Requested-With": "XMLHttpRequest",
      // Inject user auth
      requesttoken: a ?? ""
    });
  }
  return Mu(i), i(Fu()), vf().patch("fetch", (a, h) => {
    const c = h.headers;
    return c != null && c.method && (h.method = c.method, delete c.method), fetch(a, h);
  }), r;
}, Sf = function(n, e = Za, r = Ja) {
  var p, d;
  let i = (p = Ki()) == null ? void 0 : p.uid;
  if (lo())
    i = i ?? "anonymous";
  else if (!i)
    throw new Error("No user id found");
  const u = n.props, a = Nf(u == null ? void 0 : u.permissions), h = String((u == null ? void 0 : u["owner-id"]) || i), c = u.fileid || 0, l = new Date(Date.parse(n.lastmod)), o = new Date(Date.parse(u.creationdate)), s = {
    id: c,
    source: `${r}${n.filename}`,
    mtime: !isNaN(l.getTime()) && l.getTime() !== 0 ? l : void 0,
    crtime: !isNaN(o.getTime()) && o.getTime() !== 0 ? o : void 0,
    mime: n.mime || "application/octet-stream",
    // Manually cast to work around for https://github.com/perry-mitchell/webdav-client/pull/380
    displayname: u.displayname !== void 0 ? String(u.displayname) : void 0,
    size: (u == null ? void 0 : u.size) || Number.parseInt(u.getcontentlength || "0"),
    // The fileid is set to -1 for failed requests
    status: c < 0 ? co.FAILED : void 0,
    permissions: a,
    owner: h,
    root: e,
    attributes: {
      ...n,
      ...u,
      hasPreview: u == null ? void 0 : u["has-preview"]
    }
  };
  return (d = s.attributes) == null || delete d.props, n.type === "file" ? new fo(s) : new ho(s);
};
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
  entries: Ka,
  setPrototypeOf: cs,
  isFrozen: Lf,
  getPrototypeOf: Pf,
  getOwnPropertyDescriptor: $f
} = Object;
let {
  freeze: et,
  seal: vt,
  create: Qa
} = Object, {
  apply: Vi,
  construct: Wi
} = typeof Reflect < "u" && Reflect;
et || (et = function(e) {
  return e;
});
vt || (vt = function(e) {
  return e;
});
Vi || (Vi = function(e, r, i) {
  return e.apply(r, i);
});
Wi || (Wi = function(e, r) {
  return new e(...r);
});
const pn = tt(Array.prototype.forEach), kf = tt(Array.prototype.lastIndexOf), fs = tt(Array.prototype.pop), qr = tt(Array.prototype.push), Ff = tt(Array.prototype.splice), bn = tt(String.prototype.toLowerCase), ii = tt(String.prototype.toString), hs = tt(String.prototype.match), Vr = tt(String.prototype.replace), Mf = tt(String.prototype.indexOf), Uf = tt(String.prototype.trim), At = tt(Object.prototype.hasOwnProperty), Ye = tt(RegExp.prototype.test), Wr = Bf(TypeError);
function tt(n) {
  return function(e) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
      i[u - 1] = arguments[u];
    return Vi(n, e, i);
  };
}
function Bf(n) {
  return function() {
    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
      r[i] = arguments[i];
    return Wi(n, r);
  };
}
function ue(n, e) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bn;
  cs && cs(n, null);
  let i = e.length;
  for (; i--; ) {
    let u = e[i];
    if (typeof u == "string") {
      const a = r(u);
      a !== u && (Lf(e) || (e[i] = a), u = a);
    }
    n[u] = !0;
  }
  return n;
}
function Df(n) {
  for (let e = 0; e < n.length; e++)
    At(n, e) || (n[e] = null);
  return n;
}
function ur(n) {
  const e = Qa(null);
  for (const [r, i] of Ka(n))
    At(n, r) && (Array.isArray(i) ? e[r] = Df(i) : i && typeof i == "object" && i.constructor === Object ? e[r] = ur(i) : e[r] = i);
  return e;
}
function Xr(n, e) {
  for (; n !== null; ) {
    const i = $f(n, e);
    if (i) {
      if (i.get)
        return tt(i.get);
      if (typeof i.value == "function")
        return tt(i.value);
    }
    n = Pf(n);
  }
  function r() {
    return null;
  }
  return r;
}
const ps = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), oi = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), si = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), jf = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ai = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Gf = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ds = et(["#text"]), gs = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), li = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ms = et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), dn = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), qf = vt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Vf = vt(/<%[\w\W]*|[\w\W]*%>/gm), Wf = vt(/\$\{[\w\W]*/gm), Xf = vt(/^data-[\-\w.\u00B7-\uFFFF]+$/), zf = vt(/^aria-[\-\w]+$/), el = vt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Hf = vt(/^(?:\w+script|data):/i), Yf = vt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), tl = vt(/^html$/i), Zf = vt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ws = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: zf,
  ATTR_WHITESPACE: Yf,
  CUSTOM_ELEMENT: Zf,
  DATA_ATTR: Xf,
  DOCTYPE_NAME: tl,
  ERB_EXPR: Vf,
  IS_ALLOWED_URI: el,
  IS_SCRIPT_OR_DATA: Hf,
  MUSTACHE_EXPR: qf,
  TMPLIT_EXPR: Wf
});
const zr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Jf = function() {
  return typeof window > "u" ? null : window;
}, Kf = function(e, r) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let i = null;
  const u = "data-tt-policy-suffix";
  r && r.hasAttribute(u) && (i = r.getAttribute(u));
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
}, ys = function() {
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
function rl() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Jf();
  const e = (K) => rl(K);
  if (e.version = "3.2.4", e.removed = [], !n || !n.document || n.document.nodeType !== zr.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: r
  } = n;
  const i = r, u = i.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: h,
    Node: c,
    Element: l,
    NodeFilter: o,
    NamedNodeMap: s = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: p,
    DOMParser: d,
    trustedTypes: m
  } = n, w = l.prototype, v = Xr(w, "cloneNode"), _ = Xr(w, "remove"), A = Xr(w, "nextSibling"), E = Xr(w, "childNodes"), I = Xr(w, "parentNode");
  if (typeof h == "function") {
    const K = r.createElement("template");
    K.content && K.content.ownerDocument && (r = K.content.ownerDocument);
  }
  let C, T = "";
  const {
    implementation: x,
    createNodeIterator: S,
    createDocumentFragment: P,
    getElementsByTagName: k
  } = r, {
    importNode: j
  } = i;
  let D = ys();
  e.isSupported = typeof Ka == "function" && typeof I == "function" && x && x.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: B,
    ERB_EXPR: $,
    TMPLIT_EXPR: q,
    DATA_ATTR: V,
    ARIA_ATTR: oe,
    IS_SCRIPT_OR_DATA: ne,
    ATTR_WHITESPACE: te,
    CUSTOM_ELEMENT: ae
  } = ws;
  let {
    IS_ALLOWED_URI: fe
  } = ws, re = null;
  const Me = ue({}, [...ps, ...oi, ...si, ...ai, ...ds]);
  let he = null;
  const pe = ue({}, [...gs, ...li, ...ms, ...dn]);
  let Q = Object.seal(Qa(null, {
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
  })), at = null, _t = null, Ut = !0, Yt = !0, Ot = !1, ft = !0, lt = !1, Rt = !0, ht = !1, Zt = !1, pt = !1, rt = !1, Bt = !1, Jt = !1, dt = !0, ar = !1;
  const vr = "user-content-";
  let Kt = !0, Z = !1, ye = {}, b = null;
  const O = ue({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let L = null;
  const U = ue({}, ["audio", "video", "img", "source", "image", "track"]);
  let y = null;
  const f = ue({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), g = "http://www.w3.org/1998/Math/MathML", N = "http://www.w3.org/2000/svg", R = "http://www.w3.org/1999/xhtml";
  let F = R, G = !1, X = null;
  const J = ue({}, [g, N, R], ii);
  let ie = ue({}, ["mi", "mo", "mn", "ms", "mtext"]), se = ue({}, ["annotation-xml"]);
  const ce = ue({}, ["title", "style", "font", "a", "script"]);
  let Dt = null;
  const El = ["application/xhtml+xml", "text/html"], vl = "text/html";
  let $e = null, br = null;
  const bl = r.createElement("form"), mo = function(M) {
    return M instanceof RegExp || M instanceof Function;
  }, qn = function() {
    let M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(br && br === M)) {
      if ((!M || typeof M != "object") && (M = {}), M = ur(M), Dt = // eslint-disable-next-line unicorn/prefer-includes
      El.indexOf(M.PARSER_MEDIA_TYPE) === -1 ? vl : M.PARSER_MEDIA_TYPE, $e = Dt === "application/xhtml+xml" ? ii : bn, re = At(M, "ALLOWED_TAGS") ? ue({}, M.ALLOWED_TAGS, $e) : Me, he = At(M, "ALLOWED_ATTR") ? ue({}, M.ALLOWED_ATTR, $e) : pe, X = At(M, "ALLOWED_NAMESPACES") ? ue({}, M.ALLOWED_NAMESPACES, ii) : J, y = At(M, "ADD_URI_SAFE_ATTR") ? ue(ur(f), M.ADD_URI_SAFE_ATTR, $e) : f, L = At(M, "ADD_DATA_URI_TAGS") ? ue(ur(U), M.ADD_DATA_URI_TAGS, $e) : U, b = At(M, "FORBID_CONTENTS") ? ue({}, M.FORBID_CONTENTS, $e) : O, at = At(M, "FORBID_TAGS") ? ue({}, M.FORBID_TAGS, $e) : {}, _t = At(M, "FORBID_ATTR") ? ue({}, M.FORBID_ATTR, $e) : {}, ye = At(M, "USE_PROFILES") ? M.USE_PROFILES : !1, Ut = M.ALLOW_ARIA_ATTR !== !1, Yt = M.ALLOW_DATA_ATTR !== !1, Ot = M.ALLOW_UNKNOWN_PROTOCOLS || !1, ft = M.ALLOW_SELF_CLOSE_IN_ATTR !== !1, lt = M.SAFE_FOR_TEMPLATES || !1, Rt = M.SAFE_FOR_XML !== !1, ht = M.WHOLE_DOCUMENT || !1, rt = M.RETURN_DOM || !1, Bt = M.RETURN_DOM_FRAGMENT || !1, Jt = M.RETURN_TRUSTED_TYPE || !1, pt = M.FORCE_BODY || !1, dt = M.SANITIZE_DOM !== !1, ar = M.SANITIZE_NAMED_PROPS || !1, Kt = M.KEEP_CONTENT !== !1, Z = M.IN_PLACE || !1, fe = M.ALLOWED_URI_REGEXP || el, F = M.NAMESPACE || R, ie = M.MATHML_TEXT_INTEGRATION_POINTS || ie, se = M.HTML_INTEGRATION_POINTS || se, Q = M.CUSTOM_ELEMENT_HANDLING || {}, M.CUSTOM_ELEMENT_HANDLING && mo(M.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Q.tagNameCheck = M.CUSTOM_ELEMENT_HANDLING.tagNameCheck), M.CUSTOM_ELEMENT_HANDLING && mo(M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Q.attributeNameCheck = M.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), M.CUSTOM_ELEMENT_HANDLING && typeof M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (Q.allowCustomizedBuiltInElements = M.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), lt && (Yt = !1), Bt && (rt = !0), ye && (re = ue({}, ds), he = [], ye.html === !0 && (ue(re, ps), ue(he, gs)), ye.svg === !0 && (ue(re, oi), ue(he, li), ue(he, dn)), ye.svgFilters === !0 && (ue(re, si), ue(he, li), ue(he, dn)), ye.mathMl === !0 && (ue(re, ai), ue(he, ms), ue(he, dn))), M.ADD_TAGS && (re === Me && (re = ur(re)), ue(re, M.ADD_TAGS, $e)), M.ADD_ATTR && (he === pe && (he = ur(he)), ue(he, M.ADD_ATTR, $e)), M.ADD_URI_SAFE_ATTR && ue(y, M.ADD_URI_SAFE_ATTR, $e), M.FORBID_CONTENTS && (b === O && (b = ur(b)), ue(b, M.FORBID_CONTENTS, $e)), Kt && (re["#text"] = !0), ht && ue(re, ["html", "head", "body"]), re.table && (ue(re, ["tbody"]), delete at.tbody), M.TRUSTED_TYPES_POLICY) {
        if (typeof M.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Wr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof M.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Wr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        C = M.TRUSTED_TYPES_POLICY, T = C.createHTML("");
      } else
        C === void 0 && (C = Kf(m, u)), C !== null && typeof T == "string" && (T = C.createHTML(""));
      et && et(M), br = M;
    }
  }, wo = ue({}, [...oi, ...si, ...jf]), yo = ue({}, [...ai, ...Gf]), Nl = function(M) {
    let W = I(M);
    (!W || !W.tagName) && (W = {
      namespaceURI: F,
      tagName: "template"
    });
    const Y = bn(M.tagName), Ee = bn(W.tagName);
    return X[M.namespaceURI] ? M.namespaceURI === N ? W.namespaceURI === R ? Y === "svg" : W.namespaceURI === g ? Y === "svg" && (Ee === "annotation-xml" || ie[Ee]) : !!wo[Y] : M.namespaceURI === g ? W.namespaceURI === R ? Y === "math" : W.namespaceURI === N ? Y === "math" && se[Ee] : !!yo[Y] : M.namespaceURI === R ? W.namespaceURI === N && !se[Ee] || W.namespaceURI === g && !ie[Ee] ? !1 : !yo[Y] && (ce[Y] || !wo[Y]) : !!(Dt === "application/xhtml+xml" && X[M.namespaceURI]) : !1;
  }, xt = function(M) {
    qr(e.removed, {
      element: M
    });
    try {
      I(M).removeChild(M);
    } catch {
      _(M);
    }
  }, an = function(M, W) {
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
  }, Eo = function(M) {
    let W = null, Y = null;
    if (pt)
      M = "<remove></remove>" + M;
    else {
      const Ue = hs(M, /^[\r\n\t ]+/);
      Y = Ue && Ue[0];
    }
    Dt === "application/xhtml+xml" && F === R && (M = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + M + "</body></html>");
    const Ee = C ? C.createHTML(M) : M;
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
  }, vo = function(M) {
    return S.call(
      M.ownerDocument || M,
      M,
      // eslint-disable-next-line no-bitwise
      o.SHOW_ELEMENT | o.SHOW_COMMENT | o.SHOW_TEXT | o.SHOW_PROCESSING_INSTRUCTION | o.SHOW_CDATA_SECTION,
      null
    );
  }, Vn = function(M) {
    return M instanceof p && (typeof M.nodeName != "string" || typeof M.textContent != "string" || typeof M.removeChild != "function" || !(M.attributes instanceof s) || typeof M.removeAttribute != "function" || typeof M.setAttribute != "function" || typeof M.namespaceURI != "string" || typeof M.insertBefore != "function" || typeof M.hasChildNodes != "function");
  }, bo = function(M) {
    return typeof c == "function" && M instanceof c;
  };
  function jt(K, M, W) {
    pn(K, (Y) => {
      Y.call(e, M, W, br);
    });
  }
  const No = function(M) {
    let W = null;
    if (jt(D.beforeSanitizeElements, M, null), Vn(M))
      return xt(M), !0;
    const Y = $e(M.nodeName);
    if (jt(D.uponSanitizeElement, M, {
      tagName: Y,
      allowedTags: re
    }), M.hasChildNodes() && !bo(M.firstElementChild) && Ye(/<[/\w]/g, M.innerHTML) && Ye(/<[/\w]/g, M.textContent) || M.nodeType === zr.progressingInstruction || Rt && M.nodeType === zr.comment && Ye(/<[/\w]/g, M.data))
      return xt(M), !0;
    if (!re[Y] || at[Y]) {
      if (!at[Y] && Ao(Y) && (Q.tagNameCheck instanceof RegExp && Ye(Q.tagNameCheck, Y) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(Y)))
        return !1;
      if (Kt && !b[Y]) {
        const Ee = I(M) || M.parentNode, qe = E(M) || M.childNodes;
        if (qe && Ee) {
          const Ue = qe.length;
          for (let nt = Ue - 1; nt >= 0; --nt) {
            const Ct = v(qe[nt], !0);
            Ct.__removalCount = (M.__removalCount || 0) + 1, Ee.insertBefore(Ct, A(M));
          }
        }
      }
      return xt(M), !0;
    }
    return M instanceof l && !Nl(M) || (Y === "noscript" || Y === "noembed" || Y === "noframes") && Ye(/<\/no(script|embed|frames)/i, M.innerHTML) ? (xt(M), !0) : (lt && M.nodeType === zr.text && (W = M.textContent, pn([B, $, q], (Ee) => {
      W = Vr(W, Ee, " ");
    }), M.textContent !== W && (qr(e.removed, {
      element: M.cloneNode()
    }), M.textContent = W)), jt(D.afterSanitizeElements, M, null), !1);
  }, To = function(M, W, Y) {
    if (dt && (W === "id" || W === "name") && (Y in r || Y in bl))
      return !1;
    if (!(Yt && !_t[W] && Ye(V, W))) {
      if (!(Ut && Ye(oe, W))) {
        if (!he[W] || _t[W]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ao(M) && (Q.tagNameCheck instanceof RegExp && Ye(Q.tagNameCheck, M) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(M)) && (Q.attributeNameCheck instanceof RegExp && Ye(Q.attributeNameCheck, W) || Q.attributeNameCheck instanceof Function && Q.attributeNameCheck(W)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            W === "is" && Q.allowCustomizedBuiltInElements && (Q.tagNameCheck instanceof RegExp && Ye(Q.tagNameCheck, Y) || Q.tagNameCheck instanceof Function && Q.tagNameCheck(Y)))
          ) return !1;
        } else if (!y[W]) {
          if (!Ye(fe, Vr(Y, te, ""))) {
            if (!((W === "src" || W === "xlink:href" || W === "href") && M !== "script" && Mf(Y, "data:") === 0 && L[M])) {
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
  }, Ao = function(M) {
    return M !== "annotation-xml" && hs(M, ae);
  }, Io = function(M) {
    jt(D.beforeSanitizeAttributes, M, null);
    const {
      attributes: W
    } = M;
    if (!W || Vn(M))
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
        value: Ct
      } = qe, Ur = $e(Ue);
      let He = Ue === "value" ? Ct : Uf(Ct);
      if (Y.attrName = Ur, Y.attrValue = He, Y.keepAttr = !0, Y.forceKeepAttr = void 0, jt(D.uponSanitizeAttribute, M, Y), He = Y.attrValue, ar && (Ur === "id" || Ur === "name") && (an(Ue, M), He = vr + He), Rt && Ye(/((--!?|])>)|<\/(style|title)/i, He)) {
        an(Ue, M);
        continue;
      }
      if (Y.forceKeepAttr || (an(Ue, M), !Y.keepAttr))
        continue;
      if (!ft && Ye(/\/>/i, He)) {
        an(Ue, M);
        continue;
      }
      lt && pn([B, $, q], (Oo) => {
        He = Vr(He, Oo, " ");
      });
      const _o = $e(M.nodeName);
      if (To(_o, Ur, He)) {
        if (C && typeof m == "object" && typeof m.getAttributeType == "function" && !nt)
          switch (m.getAttributeType(_o, Ur)) {
            case "TrustedHTML": {
              He = C.createHTML(He);
              break;
            }
            case "TrustedScriptURL": {
              He = C.createScriptURL(He);
              break;
            }
          }
        try {
          nt ? M.setAttributeNS(nt, Ue, He) : M.setAttribute(Ue, He), Vn(M) ? xt(M) : fs(e.removed);
        } catch {
        }
      }
    }
    jt(D.afterSanitizeAttributes, M, null);
  }, Tl = function K(M) {
    let W = null;
    const Y = vo(M);
    for (jt(D.beforeSanitizeShadowDOM, M, null); W = Y.nextNode(); )
      jt(D.uponSanitizeShadowNode, W, null), No(W), Io(W), W.content instanceof a && K(W.content);
    jt(D.afterSanitizeShadowDOM, M, null);
  };
  return e.sanitize = function(K) {
    let M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, W = null, Y = null, Ee = null, qe = null;
    if (G = !K, G && (K = "<!-->"), typeof K != "string" && !bo(K))
      if (typeof K.toString == "function") {
        if (K = K.toString(), typeof K != "string")
          throw Wr("dirty is not a string, aborting");
      } else
        throw Wr("toString is not a function");
    if (!e.isSupported)
      return K;
    if (Zt || qn(M), e.removed = [], typeof K == "string" && (Z = !1), Z) {
      if (K.nodeName) {
        const Ct = $e(K.nodeName);
        if (!re[Ct] || at[Ct])
          throw Wr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (K instanceof c)
      W = Eo("<!---->"), Y = W.ownerDocument.importNode(K, !0), Y.nodeType === zr.element && Y.nodeName === "BODY" || Y.nodeName === "HTML" ? W = Y : W.appendChild(Y);
    else {
      if (!rt && !lt && !ht && // eslint-disable-next-line unicorn/prefer-includes
      K.indexOf("<") === -1)
        return C && Jt ? C.createHTML(K) : K;
      if (W = Eo(K), !W)
        return rt ? null : Jt ? T : "";
    }
    W && pt && xt(W.firstChild);
    const Ue = vo(Z ? K : W);
    for (; Ee = Ue.nextNode(); )
      No(Ee), Io(Ee), Ee.content instanceof a && Tl(Ee.content);
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
    return ht && re["!doctype"] && W.ownerDocument && W.ownerDocument.doctype && W.ownerDocument.doctype.name && Ye(tl, W.ownerDocument.doctype.name) && (nt = "<!DOCTYPE " + W.ownerDocument.doctype.name + `>
` + nt), lt && pn([B, $, q], (Ct) => {
      nt = Vr(nt, Ct, " ");
    }), C && Jt ? C.createHTML(nt) : nt;
  }, e.setConfig = function() {
    let K = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    qn(K), Zt = !0;
  }, e.clearConfig = function() {
    br = null, Zt = !1;
  }, e.isValidAttribute = function(K, M, W) {
    br || qn({});
    const Y = $e(K), Ee = $e(M);
    return To(Y, Ee, W);
  }, e.addHook = function(K, M) {
    typeof M == "function" && qr(D[K], M);
  }, e.removeHook = function(K, M) {
    if (M !== void 0) {
      const W = kf(D[K], M);
      return W === -1 ? void 0 : Ff(D[K], W, 1)[0];
    }
    return fs(D[K]);
  }, e.removeHooks = function(K) {
    D[K] = [];
  }, e.removeAllHooks = function() {
    D = ys();
  }, e;
}
rl();
class Qf {
  constructor() {
    ge(this, "_entries", []);
  }
  registerEntry(e) {
    this.validateEntry(e), e.category = e.category ?? 1, this._entries.push(e);
  }
  unregisterEntry(e) {
    const r = typeof e == "string" ? this.getEntryIndex(e) : this.getEntryIndex(e.id);
    if (r === -1) {
      tn.warn("Entry not found, nothing removed", { entry: e, entries: this.getEntries() });
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
const eh = function() {
  return typeof window._nc_newfilemenu > "u" && (window._nc_newfilemenu = new Qf(), tn.debug("NewFileMenu initialized")), window._nc_newfilemenu;
};
var nl = /* @__PURE__ */ ((n) => (n.DEFAULT = "default", n.HIDDEN = "hidden", n))(nl || {});
const ui = function(n) {
  if (typeof window._nc_fileactions > "u" && (window._nc_fileactions = [], tn.debug("FileActions initialized")), window._nc_fileactions.find((e) => e.id === n.id)) {
    tn.error(`FileAction ${n.id} already registered`, { action: n });
    return;
  }
  window._nc_fileactions.push(n);
};
var ci = {}, fi = {}, Es;
function po() {
  return Es || (Es = 1, function(n) {
    const e = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", r = e + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", i = "[" + e + "][" + r + "]*", u = new RegExp("^" + i + "$"), a = function(c, l) {
      const o = [];
      let s = l.exec(c);
      for (; s; ) {
        const p = [];
        p.startIndex = l.lastIndex - s[0].length;
        const d = s.length;
        for (let m = 0; m < d; m++)
          p.push(s[m]);
        o.push(p), s = l.exec(c);
      }
      return o;
    }, h = function(c) {
      const l = u.exec(c);
      return !(l === null || typeof l > "u");
    };
    n.isExist = function(c) {
      return typeof c < "u";
    }, n.isEmptyObject = function(c) {
      return Object.keys(c).length === 0;
    }, n.merge = function(c, l, o) {
      if (l) {
        const s = Object.keys(l), p = s.length;
        for (let d = 0; d < p; d++)
          o === "strict" ? c[s[d]] = [l[s[d]]] : c[s[d]] = l[s[d]];
      }
    }, n.getValue = function(c) {
      return n.isExist(c) ? c : "";
    }, n.isName = h, n.getAllMatches = a, n.nameRegexp = i;
  }(fi)), fi;
}
var vs;
function il() {
  if (vs) return ci;
  vs = 1;
  const n = po(), e = {
    allowBooleanAttributes: !1,
    //A tag can have attributes without any value
    unpairedTags: []
  };
  ci.validate = function(A, E) {
    E = Object.assign({}, e, E);
    const I = [];
    let C = !1, T = !1;
    A[0] === "\uFEFF" && (A = A.substr(1));
    for (let x = 0; x < A.length; x++)
      if (A[x] === "<" && A[x + 1] === "?") {
        if (x += 2, x = i(A, x), x.err) return x;
      } else if (A[x] === "<") {
        let S = x;
        if (x++, A[x] === "!") {
          x = u(A, x);
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
              C = !0;
            else
              return d($.err.code, $.err.msg, v(A, B + $.err.line));
          } else if (P)
            if (j.tagClosed) {
              if (D.trim().length > 0)
                return d("InvalidTag", "Closing tag '" + k + "' can't have attributes or invalid starting.", v(A, S));
              if (I.length === 0)
                return d("InvalidTag", "Closing tag '" + k + "' has not been opened.", v(A, S));
              {
                const B = I.pop();
                if (k !== B.tagName) {
                  let $ = v(A, B.tagStartPos);
                  return d(
                    "InvalidTag",
                    "Expected closing tag '" + B.tagName + "' (opened in line " + $.line + ", col " + $.col + ") instead of closing tag '" + k + "'.",
                    v(A, S)
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
            E.unpairedTags.indexOf(k) !== -1 || I.push({ tagName: k, tagStartPos: S }), C = !0;
          }
          for (x++; x < A.length; x++)
            if (A[x] === "<")
              if (A[x + 1] === "!") {
                x++, x = u(A, x);
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
    if (C) {
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
        const C = A.substr(I, E - I);
        if (E > 5 && C === "xml")
          return d("InvalidXml", "XML declaration allowed only at the start of the document.", v(A, E));
        if (A[E] == "?" && A[E + 1] == ">") {
          E++;
          break;
        } else
          continue;
      }
    return E;
  }
  function u(A, E) {
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
    let I = "", C = "", T = !1;
    for (; E < A.length; E++) {
      if (A[E] === a || A[E] === h)
        C === "" ? C = A[E] : C !== A[E] || (C = "");
      else if (A[E] === ">" && C === "") {
        T = !0;
        break;
      }
      I += A[E];
    }
    return C !== "" ? !1 : {
      value: I,
      index: E,
      tagClosed: T
    };
  }
  const l = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
  function o(A, E) {
    const I = n.getAllMatches(A, l), C = {};
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
      if (!C.hasOwnProperty(x))
        C[x] = 1;
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
  return ci;
}
var gn = {}, bs;
function th() {
  if (bs) return gn;
  bs = 1;
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
    updateTag: function(r, i, u) {
      return r;
    }
    // skipEmptyListItem: false
  }, e = function(r) {
    return Object.assign({}, n, r);
  };
  return gn.buildOptions = e, gn.defaultOptions = n, gn;
}
var hi, Ns;
function rh() {
  if (Ns) return hi;
  Ns = 1;
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
  return hi = n, hi;
}
var pi, Ts;
function nh() {
  if (Ts) return pi;
  Ts = 1;
  const n = po();
  function e(l, o) {
    const s = {};
    if (l[o + 3] === "O" && l[o + 4] === "C" && l[o + 5] === "T" && l[o + 6] === "Y" && l[o + 7] === "P" && l[o + 8] === "E") {
      o = o + 9;
      let p = 1, d = !1, m = !1, w = "";
      for (; o < l.length; o++)
        if (l[o] === "<" && !m) {
          if (d && i(l, o)) {
            o += 7;
            let v, _;
            [v, _, o] = r(l, o + 1), _.indexOf("&") === -1 && (s[c(v)] = {
              regx: RegExp(`&${v};`, "g"),
              val: _
            });
          } else d && u(l, o) || d && a(l, o) ? o += 8 : d && h(l, o) ? o += 9 : m = !0;
          p++, w = "";
        } else if (l[o] === ">") {
          if (m ? l[o - 1] === "-" && l[o - 2] === "-" && (m = !1, p--) : p--, p === 0)
            break;
        } else l[o] === "[" ? d = !0 : w += l[o];
      if (p !== 0)
        throw new Error("Unclosed DOCTYPE");
    } else
      throw new Error("Invalid Tag instead of DOCTYPE");
    return { entities: s, i: o };
  }
  function r(l, o) {
    let s = "";
    for (; o < l.length && l[o] !== "'" && l[o] !== '"'; o++)
      s += l[o];
    if (s = s.trim(), s.indexOf(" ") !== -1) throw new Error("External entites are not supported");
    const p = l[o++];
    let d = "";
    for (; o < l.length && l[o] !== p; o++)
      d += l[o];
    return [s, d, o];
  }
  function i(l, o) {
    return l[o + 1] === "!" && l[o + 2] === "E" && l[o + 3] === "N" && l[o + 4] === "T" && l[o + 5] === "I" && l[o + 6] === "T" && l[o + 7] === "Y";
  }
  function u(l, o) {
    return l[o + 1] === "!" && l[o + 2] === "E" && l[o + 3] === "L" && l[o + 4] === "E" && l[o + 5] === "M" && l[o + 6] === "E" && l[o + 7] === "N" && l[o + 8] === "T";
  }
  function a(l, o) {
    return l[o + 1] === "!" && l[o + 2] === "A" && l[o + 3] === "T" && l[o + 4] === "T" && l[o + 5] === "L" && l[o + 6] === "I" && l[o + 7] === "S" && l[o + 8] === "T";
  }
  function h(l, o) {
    return l[o + 1] === "!" && l[o + 2] === "N" && l[o + 3] === "O" && l[o + 4] === "T" && l[o + 5] === "A" && l[o + 6] === "T" && l[o + 7] === "I" && l[o + 8] === "O" && l[o + 9] === "N";
  }
  function c(l) {
    if (n.isName(l))
      return l;
    throw new Error(`Invalid entity name ${l}`);
  }
  return pi = e, pi;
}
var di, As;
function ih() {
  if (As) return di;
  As = 1;
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
      const l = e.exec(c);
      if (l) {
        const o = l[1], s = l[2];
        let p = u(l[3]);
        const d = l[4] || l[6];
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
  function u(a) {
    return a && a.indexOf(".") !== -1 && (a = a.replace(/0+$/, ""), a === "." ? a = "0" : a[0] === "." ? a = "0" + a : a[a.length - 1] === "." && (a = a.substr(0, a.length - 1))), a;
  }
  return di = i, di;
}
var gi, Is;
function ol() {
  if (Is) return gi;
  Is = 1;
  function n(e) {
    return typeof e == "function" ? e : Array.isArray(e) ? (r) => {
      for (const i of e)
        if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
          return !0;
    } : () => !1;
  }
  return gi = n, gi;
}
var mi, _s;
function oh() {
  if (_s) return mi;
  _s = 1;
  const n = po(), e = rh(), r = nh(), i = ih(), u = ol();
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
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (S, P) => String.fromCharCode(Number.parseInt(P, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (S, P) => String.fromCharCode(Number.parseInt(P, 16)) }
      }, this.addExternalEntities = h, this.parseXml = p, this.parseTextData = c, this.resolveNameSpace = l, this.buildAttributesMap = s, this.isItStopNode = v, this.replaceEntitiesValue = m, this.readStopNodeData = I, this.saveTextToParentTag = w, this.addChild = d, this.ignoreAttributesFn = u(this.options.ignoreAttributes);
    }
  }
  function h(T) {
    const x = Object.keys(T);
    for (let S = 0; S < x.length; S++) {
      const P = x[S];
      this.lastEntities[P] = {
        regex: new RegExp("&" + P + ";", "g"),
        val: T[P]
      };
    }
  }
  function c(T, x, S, P, k, j, D) {
    if (T !== void 0 && (this.options.trimValues && !P && (T = T.trim()), T.length > 0)) {
      D || (T = this.replaceEntitiesValue(T));
      const B = this.options.tagValueProcessor(x, T, S, k, j);
      return B == null ? T : typeof B != typeof T || B !== T ? B : this.options.trimValues ? C(T, this.options.parseTagValue, this.options.numberParseOptions) : T.trim() === T ? C(T, this.options.parseTagValue, this.options.numberParseOptions) : T;
    }
  }
  function l(T) {
    if (this.options.removeNSPrefix) {
      const x = T.split(":"), S = T.charAt(0) === "/" ? "/" : "";
      if (x[0] === "xmlns")
        return "";
      x.length === 2 && (T = S + x[1]);
    }
    return T;
  }
  const o = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
  function s(T, x, S) {
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
            V == null ? j[q] = $ : typeof V != typeof $ || V !== $ ? j[q] = V : j[q] = C(
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
    let S = x, P = "", k = "";
    for (let j = 0; j < T.length; j++)
      if (T[j] === "<")
        if (T[j + 1] === "/") {
          const B = A(T, ">", j, "Closing Tag is not closed.");
          let $ = T.substring(j + 2, B).trim();
          if (this.options.removeNSPrefix) {
            const oe = $.indexOf(":");
            oe !== -1 && ($ = $.substr(oe + 1));
          }
          this.options.transformTagName && ($ = this.options.transformTagName($)), S && (P = this.saveTextToParentTag(P, S, k));
          const q = k.substring(k.lastIndexOf(".") + 1);
          if ($ && this.options.unpairedTags.indexOf($) !== -1)
            throw new Error(`Unpaired tag can not be used as closing tag: </${$}>`);
          let V = 0;
          q && this.options.unpairedTags.indexOf(q) !== -1 ? (V = k.lastIndexOf(".", k.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : V = k.lastIndexOf("."), k = k.substring(0, V), S = this.tagsNodeStack.pop(), P = "", j = B;
        } else if (T[j + 1] === "?") {
          let B = E(T, j, !1, "?>");
          if (!B) throw new Error("Pi Tag is not closed.");
          if (P = this.saveTextToParentTag(P, S, k), !(this.options.ignoreDeclaration && B.tagName === "?xml" || this.options.ignorePiTags)) {
            const $ = new e(B.tagName);
            $.add(this.options.textNodeName, ""), B.tagName !== B.tagExp && B.attrExpPresent && ($[":@"] = this.buildAttributesMap(B.tagExp, k, B.tagName)), this.addChild(S, $, k);
          }
          j = B.closeIndex + 1;
        } else if (T.substr(j + 1, 3) === "!--") {
          const B = A(T, "-->", j + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const $ = T.substring(j + 4, B - 2);
            P = this.saveTextToParentTag(P, S, k), S.add(this.options.commentPropName, [{ [this.options.textNodeName]: $ }]);
          }
          j = B;
        } else if (T.substr(j + 1, 2) === "!D") {
          const B = r(T, j);
          this.docTypeEntities = B.entities, j = B.i;
        } else if (T.substr(j + 1, 2) === "![") {
          const B = A(T, "]]>", j, "CDATA is not closed.") - 2, $ = T.substring(j + 9, B);
          P = this.saveTextToParentTag(P, S, k);
          let q = this.parseTextData($, S.tagname, k, !0, !1, !0, !0);
          q == null && (q = ""), this.options.cdataPropName ? S.add(this.options.cdataPropName, [{ [this.options.textNodeName]: $ }]) : S.add(this.options.textNodeName, q), j = B + 2;
        } else {
          let B = E(T, j, this.options.removeNSPrefix), $ = B.tagName;
          const q = B.rawTagName;
          let V = B.tagExp, oe = B.attrExpPresent, ne = B.closeIndex;
          this.options.transformTagName && ($ = this.options.transformTagName($)), S && P && S.tagname !== "!xml" && (P = this.saveTextToParentTag(P, S, k, !1));
          const te = S;
          if (te && this.options.unpairedTags.indexOf(te.tagname) !== -1 && (S = this.tagsNodeStack.pop(), k = k.substring(0, k.lastIndexOf("."))), $ !== x.tagname && (k += k ? "." + $ : $), this.isItStopNode(this.options.stopNodes, k, $)) {
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
            $ !== V && oe && (fe[":@"] = this.buildAttributesMap(V, k, $)), ae && (ae = this.parseTextData(ae, $, k, !0, oe, !0, !0)), k = k.substr(0, k.lastIndexOf(".")), fe.add(this.options.textNodeName, ae), this.addChild(S, fe, k);
          } else {
            if (V.length > 0 && V.lastIndexOf("/") === V.length - 1) {
              $[$.length - 1] === "/" ? ($ = $.substr(0, $.length - 1), k = k.substr(0, k.length - 1), V = $) : V = V.substr(0, V.length - 1), this.options.transformTagName && ($ = this.options.transformTagName($));
              const ae = new e($);
              $ !== V && oe && (ae[":@"] = this.buildAttributesMap(V, k, $)), this.addChild(S, ae, k), k = k.substr(0, k.lastIndexOf("."));
            } else {
              const ae = new e($);
              this.tagsNodeStack.push(S), $ !== V && oe && (ae[":@"] = this.buildAttributesMap(V, k, $)), this.addChild(S, ae, k), S = ae;
            }
            P = "", j = ne;
          }
        }
      else
        P += T[j];
    return x.child;
  };
  function d(T, x, S) {
    const P = this.options.updateTag(x.tagname, S, x[":@"]);
    P === !1 || (typeof P == "string" && (x.tagname = P), T.addChild(x));
  }
  const m = function(T) {
    if (this.options.processEntities) {
      for (let x in this.docTypeEntities) {
        const S = this.docTypeEntities[x];
        T = T.replace(S.regx, S.val);
      }
      for (let x in this.lastEntities) {
        const S = this.lastEntities[x];
        T = T.replace(S.regex, S.val);
      }
      if (this.options.htmlEntities)
        for (let x in this.htmlEntities) {
          const S = this.htmlEntities[x];
          T = T.replace(S.regex, S.val);
        }
      T = T.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return T;
  };
  function w(T, x, S, P) {
    return T && (P === void 0 && (P = Object.keys(x.child).length === 0), T = this.parseTextData(
      T,
      x.tagname,
      S,
      !1,
      x[":@"] ? Object.keys(x[":@"]).length !== 0 : !1,
      P
    ), T !== void 0 && T !== "" && x.add(this.options.textNodeName, T), T = ""), T;
  }
  function v(T, x, S) {
    const P = "*." + S;
    for (const k in T) {
      const j = T[k];
      if (P === j || x === j) return !0;
    }
    return !1;
  }
  function _(T, x, S = ">") {
    let P, k = "";
    for (let j = x; j < T.length; j++) {
      let D = T[j];
      if (P)
        D === P && (P = "");
      else if (D === '"' || D === "'")
        P = D;
      else if (D === S[0])
        if (S[1]) {
          if (T[j + 1] === S[1])
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
  function A(T, x, S, P) {
    const k = T.indexOf(x, S);
    if (k === -1)
      throw new Error(P);
    return k + x.length - 1;
  }
  function E(T, x, S, P = ">") {
    const k = _(T, x + 1, P);
    if (!k) return;
    let j = k.data;
    const D = k.index, B = j.search(/\s/);
    let $ = j, q = !0;
    B !== -1 && ($ = j.substring(0, B), j = j.substring(B + 1).trimStart());
    const V = $;
    if (S) {
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
  function I(T, x, S) {
    const P = S;
    let k = 1;
    for (; S < T.length; S++)
      if (T[S] === "<")
        if (T[S + 1] === "/") {
          const j = A(T, ">", S, `${x} is not closed`);
          if (T.substring(S + 2, j).trim() === x && (k--, k === 0))
            return {
              tagContent: T.substring(P, S),
              i: j
            };
          S = j;
        } else if (T[S + 1] === "?")
          S = A(T, "?>", S + 1, "StopNode is not closed.");
        else if (T.substr(S + 1, 3) === "!--")
          S = A(T, "-->", S + 3, "StopNode is not closed.");
        else if (T.substr(S + 1, 2) === "![")
          S = A(T, "]]>", S, "StopNode is not closed.") - 2;
        else {
          const j = E(T, S, ">");
          j && ((j && j.tagName) === x && j.tagExp[j.tagExp.length - 1] !== "/" && k++, S = j.closeIndex);
        }
  }
  function C(T, x, S) {
    if (x && typeof T == "string") {
      const P = T.trim();
      return P === "true" ? !0 : P === "false" ? !1 : i(T, S);
    } else
      return n.isExist(T) ? T : "";
  }
  return mi = a, mi;
}
var wi = {}, Os;
function sh() {
  if (Os) return wi;
  Os = 1;
  function n(a, h) {
    return e(a, h);
  }
  function e(a, h, c) {
    let l;
    const o = {};
    for (let s = 0; s < a.length; s++) {
      const p = a[s], d = r(p);
      let m = "";
      if (c === void 0 ? m = d : m = c + "." + d, d === h.textNodeName)
        l === void 0 ? l = p[d] : l += "" + p[d];
      else {
        if (d === void 0)
          continue;
        if (p[d]) {
          let w = e(p[d], h, m);
          const v = u(w, h);
          p[":@"] ? i(w, p[":@"], m, h) : Object.keys(w).length === 1 && w[h.textNodeName] !== void 0 && !h.alwaysCreateTextNode ? w = w[h.textNodeName] : Object.keys(w).length === 0 && (h.alwaysCreateTextNode ? w[h.textNodeName] = "" : w = ""), o[d] !== void 0 && o.hasOwnProperty(d) ? (Array.isArray(o[d]) || (o[d] = [o[d]]), o[d].push(w)) : h.isArray(d, m, v) ? o[d] = [w] : o[d] = w;
        }
      }
    }
    return typeof l == "string" ? l.length > 0 && (o[h.textNodeName] = l) : l !== void 0 && (o[h.textNodeName] = l), o;
  }
  function r(a) {
    const h = Object.keys(a);
    for (let c = 0; c < h.length; c++) {
      const l = h[c];
      if (l !== ":@") return l;
    }
  }
  function i(a, h, c, l) {
    if (h) {
      const o = Object.keys(h), s = o.length;
      for (let p = 0; p < s; p++) {
        const d = o[p];
        l.isArray(d, c + "." + d, !0, !0) ? a[d] = [h[d]] : a[d] = h[d];
      }
    }
  }
  function u(a, h) {
    const { textNodeName: c } = h, l = Object.keys(a).length;
    return !!(l === 0 || l === 1 && (a[c] || typeof a[c] == "boolean" || a[c] === 0));
  }
  return wi.prettify = n, wi;
}
var yi, Rs;
function ah() {
  if (Rs) return yi;
  Rs = 1;
  const { buildOptions: n } = th(), e = oh(), { prettify: r } = sh(), i = il();
  class u {
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
      const l = new e(this.options);
      l.addExternalEntities(this.externalEntities);
      const o = l.parseXml(h);
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
  return yi = u, yi;
}
var Ei, xs;
function lh() {
  if (xs) return Ei;
  xs = 1;
  const n = `
`;
  function e(c, l) {
    let o = "";
    return l.format && l.indentBy.length > 0 && (o = n), r(c, l, "", o);
  }
  function r(c, l, o, s) {
    let p = "", d = !1;
    for (let m = 0; m < c.length; m++) {
      const w = c[m], v = i(w);
      if (v === void 0) continue;
      let _ = "";
      if (o.length === 0 ? _ = v : _ = `${o}.${v}`, v === l.textNodeName) {
        let T = w[v];
        a(_, l) || (T = l.tagValueProcessor(v, T), T = h(T, l)), d && (p += s), p += T, d = !1;
        continue;
      } else if (v === l.cdataPropName) {
        d && (p += s), p += `<![CDATA[${w[v][0][l.textNodeName]}]]>`, d = !1;
        continue;
      } else if (v === l.commentPropName) {
        p += s + `<!--${w[v][0][l.textNodeName]}-->`, d = !0;
        continue;
      } else if (v[0] === "?") {
        const T = u(w[":@"], l), x = v === "?xml" ? "" : s;
        let S = w[v][0][l.textNodeName];
        S = S.length !== 0 ? " " + S : "", p += x + `<${v}${S}${T}?>`, d = !0;
        continue;
      }
      let A = s;
      A !== "" && (A += l.indentBy);
      const E = u(w[":@"], l), I = s + `<${v}${E}`, C = r(w[v], l, _, A);
      l.unpairedTags.indexOf(v) !== -1 ? l.suppressUnpairedNode ? p += I + ">" : p += I + "/>" : (!C || C.length === 0) && l.suppressEmptyNode ? p += I + "/>" : C && C.endsWith(">") ? p += I + `>${C}${s}</${v}>` : (p += I + ">", C && s !== "" && (C.includes("/>") || C.includes("</")) ? p += s + l.indentBy + C + s : p += C, p += `</${v}>`), d = !0;
    }
    return p;
  }
  function i(c) {
    const l = Object.keys(c);
    for (let o = 0; o < l.length; o++) {
      const s = l[o];
      if (c.hasOwnProperty(s) && s !== ":@")
        return s;
    }
  }
  function u(c, l) {
    let o = "";
    if (c && !l.ignoreAttributes)
      for (let s in c) {
        if (!c.hasOwnProperty(s)) continue;
        let p = l.attributeValueProcessor(s, c[s]);
        p = h(p, l), p === !0 && l.suppressBooleanAttributes ? o += ` ${s.substr(l.attributeNamePrefix.length)}` : o += ` ${s.substr(l.attributeNamePrefix.length)}="${p}"`;
      }
    return o;
  }
  function a(c, l) {
    c = c.substr(0, c.length - l.textNodeName.length - 1);
    let o = c.substr(c.lastIndexOf(".") + 1);
    for (let s in l.stopNodes)
      if (l.stopNodes[s] === c || l.stopNodes[s] === "*." + o) return !0;
    return !1;
  }
  function h(c, l) {
    if (c && c.length > 0 && l.processEntities)
      for (let o = 0; o < l.entities.length; o++) {
        const s = l.entities[o];
        c = c.replace(s.regex, s.val);
      }
    return c;
  }
  return Ei = e, Ei;
}
var vi, Cs;
function uh() {
  if (Cs) return vi;
  Cs = 1;
  const n = lh(), e = ol(), r = {
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
    tagValueProcessor: function(c, l) {
      return l;
    },
    attributeValueProcessor: function(c, l) {
      return l;
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
    } : (this.ignoreAttributesFn = e(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = h), this.processTextOrObjNode = u, this.options.format ? (this.indentate = a, this.tagEndChar = `>
`, this.newLine = `
`) : (this.indentate = function() {
      return "";
    }, this.tagEndChar = ">", this.newLine = "");
  }
  i.prototype.build = function(c) {
    return this.options.preserveOrder ? n(c, this.options) : (Array.isArray(c) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (c = {
      [this.options.arrayNodeName]: c
    }), this.j2x(c, 0, []).val);
  }, i.prototype.j2x = function(c, l, o) {
    let s = "", p = "";
    const d = o.join(".");
    for (let m in c)
      if (Object.prototype.hasOwnProperty.call(c, m))
        if (typeof c[m] > "u")
          this.isAttribute(m) && (p += "");
        else if (c[m] === null)
          this.isAttribute(m) ? p += "" : m[0] === "?" ? p += this.indentate(l) + "<" + m + "?" + this.tagEndChar : p += this.indentate(l) + "<" + m + "/" + this.tagEndChar;
        else if (c[m] instanceof Date)
          p += this.buildTextValNode(c[m], m, "", l);
        else if (typeof c[m] != "object") {
          const w = this.isAttribute(m);
          if (w && !this.ignoreAttributesFn(w, d))
            s += this.buildAttrPairStr(w, "" + c[m]);
          else if (!w)
            if (m === this.options.textNodeName) {
              let v = this.options.tagValueProcessor(m, "" + c[m]);
              p += this.replaceEntitiesValue(v);
            } else
              p += this.buildTextValNode(c[m], m, "", l);
        } else if (Array.isArray(c[m])) {
          const w = c[m].length;
          let v = "", _ = "";
          for (let A = 0; A < w; A++) {
            const E = c[m][A];
            if (!(typeof E > "u")) if (E === null)
              m[0] === "?" ? p += this.indentate(l) + "<" + m + "?" + this.tagEndChar : p += this.indentate(l) + "<" + m + "/" + this.tagEndChar;
            else if (typeof E == "object")
              if (this.options.oneListGroup) {
                const I = this.j2x(E, l + 1, o.concat(m));
                v += I.val, this.options.attributesGroupName && E.hasOwnProperty(this.options.attributesGroupName) && (_ += I.attrStr);
              } else
                v += this.processTextOrObjNode(E, m, l, o);
            else if (this.options.oneListGroup) {
              let I = this.options.tagValueProcessor(m, E);
              I = this.replaceEntitiesValue(I), v += I;
            } else
              v += this.buildTextValNode(E, m, "", l);
          }
          this.options.oneListGroup && (v = this.buildObjectNode(v, m, _, l)), p += v;
        } else if (this.options.attributesGroupName && m === this.options.attributesGroupName) {
          const w = Object.keys(c[m]), v = w.length;
          for (let _ = 0; _ < v; _++)
            s += this.buildAttrPairStr(w[_], "" + c[m][w[_]]);
        } else
          p += this.processTextOrObjNode(c[m], m, l, o);
    return { attrStr: s, val: p };
  }, i.prototype.buildAttrPairStr = function(c, l) {
    return l = this.options.attributeValueProcessor(c, "" + l), l = this.replaceEntitiesValue(l), this.options.suppressBooleanAttributes && l === "true" ? " " + c : " " + c + '="' + l + '"';
  };
  function u(c, l, o, s) {
    const p = this.j2x(c, o + 1, s.concat(l));
    return c[this.options.textNodeName] !== void 0 && Object.keys(c).length === 1 ? this.buildTextValNode(c[this.options.textNodeName], l, p.attrStr, o) : this.buildObjectNode(p.val, l, p.attrStr, o);
  }
  i.prototype.buildObjectNode = function(c, l, o, s) {
    if (c === "")
      return l[0] === "?" ? this.indentate(s) + "<" + l + o + "?" + this.tagEndChar : this.indentate(s) + "<" + l + o + this.closeTag(l) + this.tagEndChar;
    {
      let p = "</" + l + this.tagEndChar, d = "";
      return l[0] === "?" && (d = "?", p = ""), (o || o === "") && c.indexOf("<") === -1 ? this.indentate(s) + "<" + l + o + d + ">" + c + p : this.options.commentPropName !== !1 && l === this.options.commentPropName && d.length === 0 ? this.indentate(s) + `<!--${c}-->` + this.newLine : this.indentate(s) + "<" + l + o + d + this.tagEndChar + c + this.indentate(s) + p;
    }
  }, i.prototype.closeTag = function(c) {
    let l = "";
    return this.options.unpairedTags.indexOf(c) !== -1 ? this.options.suppressUnpairedNode || (l = "/") : this.options.suppressEmptyNode ? l = "/" : l = `></${c}`, l;
  }, i.prototype.buildTextValNode = function(c, l, o, s) {
    if (this.options.cdataPropName !== !1 && l === this.options.cdataPropName)
      return this.indentate(s) + `<![CDATA[${c}]]>` + this.newLine;
    if (this.options.commentPropName !== !1 && l === this.options.commentPropName)
      return this.indentate(s) + `<!--${c}-->` + this.newLine;
    if (l[0] === "?")
      return this.indentate(s) + "<" + l + o + "?" + this.tagEndChar;
    {
      let p = this.options.tagValueProcessor(l, c);
      return p = this.replaceEntitiesValue(p), p === "" ? this.indentate(s) + "<" + l + o + this.closeTag(l) + this.tagEndChar : this.indentate(s) + "<" + l + o + ">" + p + "</" + l + this.tagEndChar;
    }
  }, i.prototype.replaceEntitiesValue = function(c) {
    if (c && c.length > 0 && this.options.processEntities)
      for (let l = 0; l < this.options.entities.length; l++) {
        const o = this.options.entities[l];
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
  return vi = i, vi;
}
var bi, Ss;
function ch() {
  if (Ss) return bi;
  Ss = 1;
  const n = il(), e = ah(), r = uh();
  return bi = {
    XMLParser: e,
    XMLValidator: n,
    XMLBuilder: r
  }, bi;
}
ch();
var Ni, Ls;
function sl() {
  return Ls || (Ls = 1, Ni = typeof Xe == "object" && Xe.env && Xe.env.NODE_DEBUG && /\bsemver\b/i.test(Xe.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
  }), Ni;
}
var Ti, Ps;
function al() {
  if (Ps) return Ti;
  Ps = 1;
  const n = "2.0.0", e = 256, r = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, i = 16, u = e - 6;
  return Ti = {
    MAX_LENGTH: e,
    MAX_SAFE_COMPONENT_LENGTH: i,
    MAX_SAFE_BUILD_LENGTH: u,
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
  }, Ti;
}
var mn = { exports: {} }, $s;
function fh() {
  return $s || ($s = 1, function(n, e) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_LENGTH: u
    } = al(), a = sl();
    e = n.exports = {};
    const h = e.re = [], c = e.safeRe = [], l = e.src = [], o = e.t = {};
    let s = 0;
    const p = "[a-zA-Z0-9-]", d = [
      ["\\s", 1],
      ["\\d", u],
      [p, i]
    ], m = (v) => {
      for (const [_, A] of d)
        v = v.split(`${_}*`).join(`${_}{0,${A}}`).split(`${_}+`).join(`${_}{1,${A}}`);
      return v;
    }, w = (v, _, A) => {
      const E = m(_), I = s++;
      a(v, I, _), o[v] = I, l[I] = _, h[I] = new RegExp(_, A ? "g" : void 0), c[I] = new RegExp(E, A ? "g" : void 0);
    };
    w("NUMERICIDENTIFIER", "0|[1-9]\\d*"), w("NUMERICIDENTIFIERLOOSE", "\\d+"), w("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`), w("MAINVERSION", `(${l[o.NUMERICIDENTIFIER]})\\.(${l[o.NUMERICIDENTIFIER]})\\.(${l[o.NUMERICIDENTIFIER]})`), w("MAINVERSIONLOOSE", `(${l[o.NUMERICIDENTIFIERLOOSE]})\\.(${l[o.NUMERICIDENTIFIERLOOSE]})\\.(${l[o.NUMERICIDENTIFIERLOOSE]})`), w("PRERELEASEIDENTIFIER", `(?:${l[o.NUMERICIDENTIFIER]}|${l[o.NONNUMERICIDENTIFIER]})`), w("PRERELEASEIDENTIFIERLOOSE", `(?:${l[o.NUMERICIDENTIFIERLOOSE]}|${l[o.NONNUMERICIDENTIFIER]})`), w("PRERELEASE", `(?:-(${l[o.PRERELEASEIDENTIFIER]}(?:\\.${l[o.PRERELEASEIDENTIFIER]})*))`), w("PRERELEASELOOSE", `(?:-?(${l[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${l[o.PRERELEASEIDENTIFIERLOOSE]})*))`), w("BUILDIDENTIFIER", `${p}+`), w("BUILD", `(?:\\+(${l[o.BUILDIDENTIFIER]}(?:\\.${l[o.BUILDIDENTIFIER]})*))`), w("FULLPLAIN", `v?${l[o.MAINVERSION]}${l[o.PRERELEASE]}?${l[o.BUILD]}?`), w("FULL", `^${l[o.FULLPLAIN]}$`), w("LOOSEPLAIN", `[v=\\s]*${l[o.MAINVERSIONLOOSE]}${l[o.PRERELEASELOOSE]}?${l[o.BUILD]}?`), w("LOOSE", `^${l[o.LOOSEPLAIN]}$`), w("GTLT", "((?:<|>)?=?)"), w("XRANGEIDENTIFIERLOOSE", `${l[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), w("XRANGEIDENTIFIER", `${l[o.NUMERICIDENTIFIER]}|x|X|\\*`), w("XRANGEPLAIN", `[v=\\s]*(${l[o.XRANGEIDENTIFIER]})(?:\\.(${l[o.XRANGEIDENTIFIER]})(?:\\.(${l[o.XRANGEIDENTIFIER]})(?:${l[o.PRERELEASE]})?${l[o.BUILD]}?)?)?`), w("XRANGEPLAINLOOSE", `[v=\\s]*(${l[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${l[o.XRANGEIDENTIFIERLOOSE]})(?:${l[o.PRERELEASELOOSE]})?${l[o.BUILD]}?)?)?`), w("XRANGE", `^${l[o.GTLT]}\\s*${l[o.XRANGEPLAIN]}$`), w("XRANGELOOSE", `^${l[o.GTLT]}\\s*${l[o.XRANGEPLAINLOOSE]}$`), w("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), w("COERCE", `${l[o.COERCEPLAIN]}(?:$|[^\\d])`), w("COERCEFULL", l[o.COERCEPLAIN] + `(?:${l[o.PRERELEASE]})?(?:${l[o.BUILD]})?(?:$|[^\\d])`), w("COERCERTL", l[o.COERCE], !0), w("COERCERTLFULL", l[o.COERCEFULL], !0), w("LONETILDE", "(?:~>?)"), w("TILDETRIM", `(\\s*)${l[o.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", w("TILDE", `^${l[o.LONETILDE]}${l[o.XRANGEPLAIN]}$`), w("TILDELOOSE", `^${l[o.LONETILDE]}${l[o.XRANGEPLAINLOOSE]}$`), w("LONECARET", "(?:\\^)"), w("CARETTRIM", `(\\s*)${l[o.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", w("CARET", `^${l[o.LONECARET]}${l[o.XRANGEPLAIN]}$`), w("CARETLOOSE", `^${l[o.LONECARET]}${l[o.XRANGEPLAINLOOSE]}$`), w("COMPARATORLOOSE", `^${l[o.GTLT]}\\s*(${l[o.LOOSEPLAIN]})$|^$`), w("COMPARATOR", `^${l[o.GTLT]}\\s*(${l[o.FULLPLAIN]})$|^$`), w("COMPARATORTRIM", `(\\s*)${l[o.GTLT]}\\s*(${l[o.LOOSEPLAIN]}|${l[o.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", w("HYPHENRANGE", `^\\s*(${l[o.XRANGEPLAIN]})\\s+-\\s+(${l[o.XRANGEPLAIN]})\\s*$`), w("HYPHENRANGELOOSE", `^\\s*(${l[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${l[o.XRANGEPLAINLOOSE]})\\s*$`), w("STAR", "(<|>)?=?\\s*\\*"), w("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), w("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }(mn, mn.exports)), mn.exports;
}
var Ai, ks;
function hh() {
  if (ks) return Ai;
  ks = 1;
  const n = Object.freeze({ loose: !0 }), e = Object.freeze({});
  return Ai = (i) => i ? typeof i != "object" ? n : i : e, Ai;
}
var Ii, Fs;
function ph() {
  if (Fs) return Ii;
  Fs = 1;
  const n = /^[0-9]+$/, e = (i, u) => {
    const a = n.test(i), h = n.test(u);
    return a && h && (i = +i, u = +u), i === u ? 0 : a && !h ? -1 : h && !a ? 1 : i < u ? -1 : 1;
  };
  return Ii = {
    compareIdentifiers: e,
    rcompareIdentifiers: (i, u) => e(u, i)
  }, Ii;
}
var _i, Ms;
function ll() {
  if (Ms) return _i;
  Ms = 1;
  const n = sl(), { MAX_LENGTH: e, MAX_SAFE_INTEGER: r } = al(), { safeRe: i, t: u } = fh(), a = hh(), { compareIdentifiers: h } = ph();
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
      const p = o.trim().match(s.loose ? i[u.LOOSE] : i[u.FULL]);
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
  return _i = c, _i;
}
var Oi, Us;
function dh() {
  if (Us) return Oi;
  Us = 1;
  const n = ll();
  return Oi = (r, i, u = !1) => {
    if (r instanceof n)
      return r;
    try {
      return new n(r, i);
    } catch (a) {
      if (!u)
        return null;
      throw a;
    }
  }, Oi;
}
var Ri, Bs;
function gh() {
  if (Bs) return Ri;
  Bs = 1;
  const n = dh();
  return Ri = (r, i) => {
    const u = n(r, i);
    return u ? u.version : null;
  }, Ri;
}
gh();
var xi, Ds;
function mh() {
  if (Ds) return xi;
  Ds = 1;
  const n = ll();
  return xi = (r, i) => new n(r, i).major, xi;
}
mh();
const js = function(n) {
  return eh().registerEntry(n);
};
class Et {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: u,
    onCreate: a,
    fileModifiedTime: h,
    isNew: c,
    isLoaded: l,
    sameWindow: o,
    skipConfirmation: s,
    isPublicLink: p
  } = {}) {
    return {
      name: e || "?",
      downloadUrl: i || "",
      url: r ? Fe(r) : "",
      dir: u || "",
      onCreate: a,
      fileModifiedTime: h || null,
      isNew: c || !1,
      isLoaded: l || !1,
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
  static async save({ fileContent: e, name: r, fileModifiedTime: i, dir: u } = {}) {
    let a = `${u}${r}`;
    u !== "/" && (a = `${u}/${r}`);
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
    var r, i, u, a;
    return window.FileList && window.OC && window.OC.currentUser && (window.OC.PERMISSION_ALL === ((i = (r = window.FileList) == null ? void 0 : r.getDirectoryPermissions) == null ? void 0 : i.call(r)) || window.OC.PERMISSION_UPDATE === ((a = (u = window.FileList) == null ? void 0 : u.getDirectoryPermissions) == null ? void 0 : a.call(u))) || e >= je.UPDATE;
  }
}
const ot = ha(""), It = ha(Et.getFileConfig());
function Gs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "You are about to visit:") + ""
  ), i, u, a, h, c = (
    /*file*/
    n[0].url + ""
  ), l, o, s;
  return {
    c() {
      e = le("p"), i = Ge(r), u = be(), a = le("em"), h = le("a"), l = Ge(c), H(h, "href", o = Fe(
        /*file*/
        n[0].url
      )), H(h, "target", s = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), H(e, "class", "urldisplay");
    },
    m(p, d) {
      me(p, e, d), ee(e, i), ee(e, u), ee(e, a), ee(a, h), ee(h, l);
    },
    p(p, d) {
      d & /*file*/
      1 && c !== (c = /*file*/
      p[0].url + "") && zi(l, c), d & /*file*/
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
function qs(n) {
  let e = Et.userCanEdit(
    /*file*/
    n[0].permissions
  ) && !/*file*/
  n[0].isPublicLink, r, i, u = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), a, h, c, l = e && Vs(n);
  return {
    c() {
      l && l.c(), r = be(), i = le("a"), a = Ge(u), H(i, "href", h = Fe(
        /*file*/
        n[0].url
      )), H(i, "target", c = /*file*/
      n[0].sameWindow ? "_self" : "_blank"), H(i, "class", "button primary");
    },
    m(o, s) {
      l && l.m(o, s), me(o, r, s), me(o, i, s), ee(i, a);
    },
    p(o, s) {
      s & /*file*/
      1 && (e = Et.userCanEdit(
        /*file*/
        o[0].permissions
      ) && !/*file*/
      o[0].isPublicLink), e ? l ? l.p(o, s) : (l = Vs(o), l.c(), l.m(r.parentNode, r)) : l && (l.d(1), l = null), s & /*file*/
      1 && h !== (h = Fe(
        /*file*/
        o[0].url
      )) && H(i, "href", h), s & /*file*/
      1 && c !== (c = /*file*/
      o[0].sameWindow ? "_self" : "_blank") && H(i, "target", c);
    },
    d(o) {
      o && (de(r), de(i)), l && l.d(o);
    }
  };
}
function Vs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Edit link") + ""
  ), i, u, a;
  return {
    c() {
      e = le("a"), i = Ge(r), H(e, "href", window.location.href), H(e, "class", "button");
    },
    m(h, c) {
      me(h, e, c), ee(e, i), u || (a = st(e, "click", Wt(
        /*click_handler_1*/
        n[4]
      )), u = !0);
    },
    p: Mt,
    d(h) {
      h && de(e), u = !1, a();
    }
  };
}
function wh(n) {
  let e, r, i = (
    /*file*/
    n[0].name + ""
  ), u, a, h, c, l, o = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), s, p, d, m, w = !/*loading*/
  n[1] && Gs(n), v = !/*loading*/
  n[1] && qs(n);
  return {
    c() {
      e = le("div"), r = le("h3"), u = Ge(i), a = be(), w && w.c(), h = be(), c = le("div"), l = le("a"), s = Ge(o), p = be(), v && v.c(), H(e, "class", "edit push-bottom"), H(l, "href", window.location.href), H(l, "class", "button"), H(c, "class", "oc-dialog-buttonrow twobuttons");
    },
    m(_, A) {
      me(_, e, A), ee(e, r), ee(r, u), ee(e, a), w && w.m(e, null), me(_, h, A), me(_, c, A), ee(c, l), ee(l, s), ee(c, p), v && v.m(c, null), d || (m = st(l, "click", Wt(
        /*click_handler*/
        n[3]
      )), d = !0);
    },
    p(_, A) {
      A & /*file*/
      1 && i !== (i = /*file*/
      _[0].name + "") && zi(u, i), /*loading*/
      _[1] ? w && (w.d(1), w = null) : w ? w.p(_, A) : (w = Gs(_), w.c(), w.m(e, null)), /*loading*/
      _[1] ? v && (v.d(1), v = null) : v ? v.p(_, A) : (v = qs(_), v.c(), v.m(c, null));
    },
    d(_) {
      _ && (de(e), de(h), de(c)), w && w.d(), v && v.d(), d = !1, m();
    }
  };
}
function yh(n) {
  let e, r;
  return e = new Yi({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [wh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, u) {
      wr(e, i, u), r = !0;
    },
    p(i, [u]) {
      const a = {};
      u & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), u & /*$$scope, file, loading*/
      67 && (a.$$scope = { dirty: u, ctx: i }), e.$set(a);
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
function Eh(n, e, r) {
  let i, u;
  const a = window.t;
  let h;
  $n(() => {
    h = It.subscribe(async (o) => {
      if (r(0, i = o), i && i.isLoaded) {
        if (r(1, u = !1), !i.url) {
          OC.dialogs.alert(a("files_linkeditor", "This link-file doesn't seem to be valid. – You can fix this by editing the file."), a("files_linkeditor", "A slight problem"));
          return;
        }
        const s = i.isPublicLink && window.location.toString().includes("openfile=true");
        i.skipConfirmation && !s && (i.sameWindow ? window.location.href = i.url : window.open(i.url, "_blank"), ot.update(() => "none"));
      }
    });
  }), kn(() => {
    h();
  });
  const c = () => {
    ot.update(() => "none");
  }, l = () => {
    ot.update(() => "edit");
  };
  return r(0, i = Et.getFileConfig()), r(1, u = !0), [i, u, a, c, l];
}
class vh extends Mr {
  constructor(e) {
    super(), Fr(this, e, Eh, yh, mr, {});
  }
}
var ul = { exports: {} };
(function(n) {
  var e = function(r) {
    var i = 1e7, u = 7, a = 9007199254740992, h = w(a), c = "0123456789abcdefghijklmnopqrstuvwxyz", l = typeof BigInt == "function";
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
    function C(b, O) {
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
      return O.isSmall ? new s(T(L, Math.abs(U)), this.sign) : new s(C(L, U), this.sign);
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
    function S(b, O, L) {
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
      return O.isSmall ? P(L, Math.abs(U), this.sign) : S(L, U, this.sign);
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
      var U = b.slice(L), y = b.slice(0, L), f = O.slice(L), g = O.slice(0, L), N = B(y, g), R = B(U, f), F = B(C(y, U), C(g, f)), G = C(C(N, D(x(x(F, N), R), L)), D(R, 2 * L));
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
      if (l)
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
    function lt(b, O) {
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
      var U = L || Math.random, y = Rt(b, O), f = lt(b, O), g = f.subtract(y).add(1);
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
          return l ? new d(BigInt(O)) : new p(O);
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
      if (l)
        return new d(BigInt(L ? "-" + b : b));
      for (var R = [], F = b.length, G = u, X = F - G; F > 0; )
        R.push(+b.slice(X, F)), X -= G, X < 0 && (X = 0), F -= G;
      return _(R), new s(R, L);
    }
    function Kt(b) {
      if (l)
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
    return o.one = o[1], o.zero = o[0], o.minusOne = o[-1], o.max = lt, o.min = Rt, o.gcd = ht, o.lcm = Zt, o.isInstance = function(b) {
      return b instanceof s || b instanceof p || b instanceof d;
    }, o.randBetween = pt, o.fromArray = function(b, O, L) {
      return Bt(b.map(Z), Z(O || 10), L);
    }, o;
  }();
  n.hasOwnProperty("exports") && (n.exports = e);
})(ul);
var bh = ul.exports;
const Nh = /* @__PURE__ */ Zi(bh);
var cl = {}, Gn = {};
Gn.byteLength = Ih;
Gn.toByteArray = Oh;
Gn.fromByteArray = Ch;
var Ft = [], yt = [], Th = typeof Uint8Array < "u" ? Uint8Array : Array, Ci = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var _r = 0, Ah = Ci.length; _r < Ah; ++_r)
  Ft[_r] = Ci[_r], yt[Ci.charCodeAt(_r)] = _r;
yt[45] = 62;
yt[95] = 63;
function fl(n) {
  var e = n.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = n.indexOf("=");
  r === -1 && (r = e);
  var i = r === e ? 0 : 4 - r % 4;
  return [r, i];
}
function Ih(n) {
  var e = fl(n), r = e[0], i = e[1];
  return (r + i) * 3 / 4 - i;
}
function _h(n, e, r) {
  return (e + r) * 3 / 4 - r;
}
function Oh(n) {
  var e, r = fl(n), i = r[0], u = r[1], a = new Th(_h(n, i, u)), h = 0, c = u > 0 ? i - 4 : i, l;
  for (l = 0; l < c; l += 4)
    e = yt[n.charCodeAt(l)] << 18 | yt[n.charCodeAt(l + 1)] << 12 | yt[n.charCodeAt(l + 2)] << 6 | yt[n.charCodeAt(l + 3)], a[h++] = e >> 16 & 255, a[h++] = e >> 8 & 255, a[h++] = e & 255;
  return u === 2 && (e = yt[n.charCodeAt(l)] << 2 | yt[n.charCodeAt(l + 1)] >> 4, a[h++] = e & 255), u === 1 && (e = yt[n.charCodeAt(l)] << 10 | yt[n.charCodeAt(l + 1)] << 4 | yt[n.charCodeAt(l + 2)] >> 2, a[h++] = e >> 8 & 255, a[h++] = e & 255), a;
}
function Rh(n) {
  return Ft[n >> 18 & 63] + Ft[n >> 12 & 63] + Ft[n >> 6 & 63] + Ft[n & 63];
}
function xh(n, e, r) {
  for (var i, u = [], a = e; a < r; a += 3)
    i = (n[a] << 16 & 16711680) + (n[a + 1] << 8 & 65280) + (n[a + 2] & 255), u.push(Rh(i));
  return u.join("");
}
function Ch(n) {
  for (var e, r = n.length, i = r % 3, u = [], a = 16383, h = 0, c = r - i; h < c; h += a)
    u.push(xh(n, h, h + a > c ? c : h + a));
  return i === 1 ? (e = n[r - 1], u.push(
    Ft[e >> 2] + Ft[e << 4 & 63] + "=="
  )) : i === 2 && (e = (n[r - 2] << 8) + n[r - 1], u.push(
    Ft[e >> 10] + Ft[e >> 4 & 63] + Ft[e << 2 & 63] + "="
  )), u.join("");
}
var go = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
go.read = function(n, e, r, i, u) {
  var a, h, c = u * 8 - i - 1, l = (1 << c) - 1, o = l >> 1, s = -7, p = r ? u - 1 : 0, d = r ? -1 : 1, m = n[e + p];
  for (p += d, a = m & (1 << -s) - 1, m >>= -s, s += c; s > 0; a = a * 256 + n[e + p], p += d, s -= 8)
    ;
  for (h = a & (1 << -s) - 1, a >>= -s, s += i; s > 0; h = h * 256 + n[e + p], p += d, s -= 8)
    ;
  if (a === 0)
    a = 1 - o;
  else {
    if (a === l)
      return h ? NaN : (m ? -1 : 1) * (1 / 0);
    h = h + Math.pow(2, i), a = a - o;
  }
  return (m ? -1 : 1) * h * Math.pow(2, a - i);
};
go.write = function(n, e, r, i, u, a) {
  var h, c, l, o = a * 8 - u - 1, s = (1 << o) - 1, p = s >> 1, d = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = i ? 0 : a - 1, w = i ? 1 : -1, v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (c = isNaN(e) ? 1 : 0, h = s) : (h = Math.floor(Math.log(e) / Math.LN2), e * (l = Math.pow(2, -h)) < 1 && (h--, l *= 2), h + p >= 1 ? e += d / l : e += d * Math.pow(2, 1 - p), e * l >= 2 && (h++, l /= 2), h + p >= s ? (c = 0, h = s) : h + p >= 1 ? (c = (e * l - 1) * Math.pow(2, u), h = h + p) : (c = e * Math.pow(2, p - 1) * Math.pow(2, u), h = 0)); u >= 8; n[r + m] = c & 255, m += w, c /= 256, u -= 8)
    ;
  for (h = h << u | c, o += u; o > 0; n[r + m] = h & 255, m += w, h /= 256, o -= 8)
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
  const e = Gn, r = go, i = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = s, n.SlowBuffer = T, n.INSPECT_MAX_BYTES = 50;
  const u = 2147483647;
  n.kMaxLength = u;
  const { Uint8Array: a, ArrayBuffer: h, SharedArrayBuffer: c } = globalThis;
  s.TYPED_ARRAY_SUPPORT = l(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function l() {
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
    if (y > u)
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
    return d(y), o(y < 0 ? 0 : C(y) | 0);
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
    const f = y.length < 0 ? 0 : C(y.length) | 0, g = o(f);
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
      const f = C(y.length) | 0, g = o(f);
      return g.length === 0 || y.copy(g, 0, 0, f), g;
    }
    if (y.length !== void 0)
      return typeof y.length != "number" || b(y.length) ? o(0) : _(y);
    if (y.type === "Buffer" && Array.isArray(y.data))
      return _(y.data);
  }
  function C(y) {
    if (y >= u)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + u.toString(16) + " bytes");
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
  function S(y, f, g) {
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
    return f === 0 ? "" : arguments.length === 0 ? ne(this, 0, f) : S.apply(this, arguments);
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
  function lt(y, f, g) {
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
  lt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(y) {
      return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), lt(
    "ERR_INVALID_ARG_TYPE",
    function(y, f) {
      return `The "${y}" argument must be of type number. Received type ${typeof f}`;
    },
    TypeError
  ), lt(
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
})(cl);
const Sh = cl.Buffer, mt = 100 * 1e3 * 1e3, Lh = 32768, Ph = 9783072e5;
class $h {
  constructor(e) {
    console.info({ id: e });
  }
}
class kh {
  constructor() {
    this.debug = !1;
  }
  parse64Content(e) {
    const r = window.atob(e), i = r.length, u = new Sh(i);
    for (let a = 0; a < i; a++)
      u[a] = r.charCodeAt(a);
    return this.parseBuffer(u);
  }
  parseBuffer(e) {
    if (e.toString("utf8", 0, 6) !== "bplist")
      throw new Error("Invalid binary plist. Expected 'bplist' at offset 0.");
    const u = e.slice(e.length - 32, e.length), a = u.readUInt8(6);
    this.debug && console.log("offsetSize: " + a);
    const h = u.readUInt8(7);
    this.debug && console.log("objectRefSize: " + h);
    const c = this.readUInt64BE(u, 8);
    this.debug && console.log("numObjects: " + c);
    const l = this.readUInt64BE(u, 16);
    this.debug && console.log("topObject: " + l);
    const o = this.readUInt64BE(u, 24);
    if (this.debug && console.log("offsetTableOffset: " + o), c > Lh)
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
          return Nh($, 16);
        }
        if (D < mt)
          return this.readUInt(e.slice(m + 1, m + 1 + D));
        throw new Error(
          "Too little heap space available! Wanted to read " + D + " bytes, but only " + mt + " are available."
        );
      }, C = () => {
        const D = _ + 1;
        if (D < mt)
          return new $h(this.readUInt(e.slice(m + 1, m + 1 + D)));
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
        return new Date(Ph + 1e3 * D.readDoubleBE(0));
      }, S = () => {
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
          return C();
        case 2:
          return T();
        case 3:
          return x();
        case 4:
          return S();
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
    return [p(l)];
  }
  readUInt(e, r) {
    r = r || 0;
    let i = 0;
    for (let u = r; u < e.length; u++)
      i <<= 8, i |= e[u] & 255;
    return i;
  }
  // we're just going to toss the high order bits because javascript doesn't have 64-bit ints
  readUInt64BE(e, r) {
    return e.slice(r, r + 8).readUInt32BE(4, 8);
  }
  swapBytes(e) {
    const r = e.length;
    for (let i = 0; i < r; i += 2) {
      const u = e[i];
      e[i] = e[i + 1], e[i + 1] = u;
    }
    return e;
  }
}
const Fh = new kh(), Oe = {
  skipConfirmation: "X-Skip-Confirm-Navigation=1",
  sameWindow: "X-Target=_self"
}, er = {
  skipConfirmation: "X-Skip-Confirm-Navigation",
  sameWindow: "X-Target"
}, Si = {
  url: "",
  sameWindow: !1,
  skipConfirmation: !1
};
class Ae {
  /**
   * Generates a URL file.
   */
  static generateURLFileContent(e, r, i = !1, u = !1) {
    let a = "";
    return e && e.indexOf("[InternetShortcut]") !== -1 && e.indexOf("URL=") !== -1 ? a = e.replace(new RegExp("URL=.*", "gm"), `URL=${Fe(r)}`) : a = `[InternetShortcut]\r
URL=${Fe(r)}`, !i && a.indexOf(Oe.sameWindow) !== -1 ? a = a.replace(Oe.sameWindow, "") : i && a.indexOf(Oe.sameWindow) === -1 && (a = `${a}\r
${Oe.sameWindow}`), !u && a.indexOf(Oe.skipConfirmation) !== -1 ? a = a.replace(Oe.skipConfirmation, "") : u && a.indexOf(Oe.skipConfirmation) === -1 && (a = `${a}\r
${Oe.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a URL file.
   */
  static parseURLFile(e) {
    const r = { ...Si };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const u = i[0];
        r.url = Fe(u.replace("URL=", ""));
      }
      e.indexOf(Oe.skipConfirmation) !== -1 && (r.skipConfirmation = !0), e.indexOf(Oe.sameWindow) !== -1 && (r.sameWindow = !0);
    }
    return r;
  }
  /**
   * Generates a MotherTree Document (.mtd) file.
   * Similar to URL file format but with [MotherTree] header.
   */
  static generateMTDFileContent(e, r, i = !1, u = !1) {
    let a = "";
    return e && (e.indexOf("[MotherTree]") !== -1 || e.indexOf("[InternetShortcut]") !== -1) && e.indexOf("URL=") !== -1 ? (a = e.replace(new RegExp("URL=.*", "gm"), `URL=${Fe(r)}`), a = a.replace("[InternetShortcut]", "[MotherTree]")) : a = `[MotherTree]\r
URL=${Fe(r)}`, !i && a.indexOf(Oe.sameWindow) !== -1 ? a = a.replace(Oe.sameWindow, "") : i && a.indexOf(Oe.sameWindow) === -1 && (a = `${a}\r
${Oe.sameWindow}`), !u && a.indexOf(Oe.skipConfirmation) !== -1 ? a = a.replace(Oe.skipConfirmation, "") : u && a.indexOf(Oe.skipConfirmation) === -1 && (a = `${a}\r
${Oe.skipConfirmation}`), a = a.replace(/\r\n\r\n/gm, `\r
`).trim(), `${a}\r
`;
  }
  /**
   * Parse a MotherTree Document (.mtd) file.
   * Supports both [MotherTree] and [InternetShortcut] headers for backward compatibility.
   */
  static parseMTDFile(e) {
    const r = { ...Si };
    if (e) {
      const i = e.match("URL=.*");
      if (i && Array.isArray(i) && i.length > 0) {
        const u = i[0];
        r.url = Fe(u.replace("URL=", ""));
      }
      e.indexOf(Oe.skipConfirmation) !== -1 && (r.skipConfirmation = !0), e.indexOf(Oe.sameWindow) !== -1 && (r.sameWindow = !0);
    }
    return r;
  }
  /**
   * Generates a webloc file.
   */
  static generateWeblocFileContent(e, r, i = !1, u = !1) {
    let a = "", h = !1;
    if (e) {
      const c = new window.DOMParser(), l = Xs(e), o = c.parseFromString(l, "text/xml"), s = [...o.getElementsByTagName("dict"), ...o.getElementsByTagName("extra")];
      let p = !1, d = !1;
      if (s && s.length)
        for (const w of s) {
          const v = w.getElementsByTagName("key"), _ = w.getElementsByTagName("string");
          Nt(v) === "URL" && (Li(_, Fe(r)), h = !0), Nt(v) === er.sameWindow && Nt(_) === "_self" && (i ? Li(_, "_self") : o.getElementsByTagName("plist")[0].removeChild(w), d = !0), Nt(v) === er.skipConfirmation && Nt(_) === "1" && (u ? Li(_, "1") : o.getElementsByTagName("plist")[0].removeChild(w), p = !0);
        }
      if (i && !d) {
        const w = Ws(o, er.sameWindow, "_self");
        o.getElementsByTagName("plist")[0].appendChild(w);
      }
      if (u && !p) {
        const w = Ws(o, er.skipConfirmation, "1");
        o.getElementsByTagName("plist")[0].appendChild(w);
      }
      a = `<?xml version="1.0" encoding="UTF-8"?>
			${new window.XMLSerializer().serializeToString(o)}`, a.indexOf("parsererror") > -1 && (console.error("Parse error", a), a = ""), a = Mh(a);
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
				</extra>`), u && (a = `${a}
				<extra>
					<key>${er.skipConfirmation}</key>
					<string>1</string>
				</extra>`), a = `${a}
			</plist>`), a = Uh(a), a = a.replace(/(\n|\b)\t+/g, "$1").trim(), a = a.replace(/^\s*$(?:\r\n?|\n)/gm, "").trim(), a;
  }
  /**
   * Parse a webloc file.
   */
  static parseWeblocFile(e) {
    const r = { ...Si };
    if (e)
      if (e.substring(0, 6) === "bplist")
        try {
          const i = Fh.parse64Content(window.btoa(e));
          i && i.length && i[0] && i[0].URL && (r.url = i[0].URL);
        } catch (i) {
          console.info(i);
        }
      else {
        const i = new window.DOMParser(), u = Xs(e), a = i.parseFromString(u, "text/xml"), h = [...a.getElementsByTagName("dict"), ...a.getElementsByTagName("extra")];
        if (h && h.length)
          for (const c of h) {
            const l = c.getElementsByTagName("key"), o = c.getElementsByTagName("string");
            Nt(l) === "URL" && (r.url = Fe(Nt(o))), Nt(l) === er.sameWindow && Nt(o) === "_self" && (r.sameWindow = !0), Nt(l) === er.skipConfirmation && Nt(o) === "1" && (r.skipConfirmation = !0);
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
const Nt = (n) => n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] ? n[0].childNodes[0].nodeValue : "", Li = (n, e) => {
  n && n.length > 0 && n[0].childNodes && n[0].childNodes.length > 0 && n[0].childNodes[0] && (n[0].childNodes[0].nodeValue = e);
}, Ws = (n, e, r) => {
  const i = n.createElement("extra"), u = n.createElement("key");
  u.appendChild(n.createTextNode(e)), i.appendChild(u);
  const a = n.createElement("string");
  return a.appendChild(n.createTextNode(r)), i.appendChild(a), i;
}, Mh = (n) => n.replace(/></g, `>
<`), Uh = (n) => n.replace(/<extra>/g, "<!-- <extra>").replace(/<\/extra>/g, "</extra> -->"), Xs = (n) => n.replace(/<!-- <extra>/g, "<extra>").replace(/<\/extra> -->/g, "</extra>");
function Bh(n) {
  let e, r, i, u, a = (
    /*t*/
    n[1]("files_linkeditor", "View link") + ""
  ), h, c, l;
  return {
    c() {
      e = le("div"), r = le("a"), i = le("span"), u = be(), h = Ge(a), H(i, "class", "icon icon-link"), H(r, "href", "#/"), H(r, "class", "button"), H(r, "id", "downloadFile"), H(e, "class", "directDownload");
    },
    m(o, s) {
      me(o, e, s), ee(e, r), ee(r, i), ee(r, u), ee(r, h), c || (l = st(r, "click", Wt(function() {
        Xi(
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
      o && de(e), c = !1, l();
    }
  };
}
function Dh(n, e, r) {
  let { onClick: i } = e;
  const u = window.t;
  return n.$$set = (a) => {
    "onClick" in a && r(0, i = a.onClick);
  }, [i, u];
}
class jh extends Mr {
  constructor(e) {
    super(), Fr(this, e, Dh, Bh, mr, { onClick: 0 });
  }
}
const Gh = ["application/internet-shortcut", "application/x-mothertree-document"], qh = [];
class tr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    var i, u, a, h, c, l, o, s;
    for (const p of Gh)
      (u = (i = window.OCA.Files) == null ? void 0 : i.fileActions) == null || u.registerAction({
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
      }), (l = (c = window.OCA.Files) == null ? void 0 : c.fileActions) == null || l.setDefault(p, "viewLink");
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
                    const C = await Et.load({ fileName: A, dir: E });
                    await tr.saveAndChangeViewMode({ ...I, fileModifiedTime: C.mtime });
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
        qh.push(
          new jh({
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
  static async loadAndChangeViewMode({ fileName: e, context: r, nextViewMode: i, publicUser: u, downloadUrl: a }) {
    const h = r ? encodeURI(r.fileList.linkTo() + "?path=" + r.dir) : window.location.href;
    ot.update(() => i), It.update(
      () => Et.getFileConfig({
        name: e,
        currentUrl: h,
        dir: r ? r.dir : "",
        isPublicLink: u
      })
    );
    let c = {};
    if (u ? c = await Et.loadPublic({ downloadUrl: a }) : c = await Et.load({ fileName: e, dir: r.dir }), c) {
      const l = Ae.getExtension(e);
      let o = {};
      l === "webloc" ? o = Ae.parseWeblocFile(c.filecontents) : l === "mtd" ? o = Ae.parseMTDFile(c.filecontents) : o = Ae.parseURLFile(c.filecontents), It.update(
        (s) => Et.getFileConfig({ ...s, ...o, fileModifiedTime: c.mtime, isLoaded: !0 })
      );
    } else
      window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, fileModifiedTime: u, sameWindow: a, skipConfirmation: h }) {
    const c = Ae.getExtension(e);
    let l = "";
    c === "webloc" ? l = Ae.generateWeblocFileContent("", i, a, h) : c === "mtd" ? l = Ae.generateMTDFileContent("", i, a, h) : l = Ae.generateURLFileContent("", i, a, h), await Et.save({ fileContent: l, name: e, dir: r, fileModifiedTime: u }), ot.update(() => "none");
  }
}
function zs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Link target URL") + ""
  ), i, u, a, h, c, l, o, s, p, d, m, w, v, _, A, E;
  return {
    c() {
      e = le("label"), i = Ge(r), u = be(), a = le("br"), h = be(), c = le("input"), l = be(), o = le("input"), s = be(), p = le("label"), p.textContent = `${/*t*/
      n[2]("files_linkeditor", "Open in same window")}`, d = be(), m = le("input"), v = be(), _ = le("label"), _.textContent = `${/*t*/
      n[2]("files_linkeditor", "Skip confirmation dialog before open (has to open in same window)")}`, H(c, "type", "text"), Hi(c, "width", "100%"), H(c, "class", "input-wide"), c.autofocus = !0, H(c, "data-cy", "url-input"), H(
        c,
        "placeholder",
        /*t*/
        n[2]("files_linkeditor", "e.g. https://example.org")
      ), H(o, "type", "checkbox"), H(o, "id", "linkeditor_sameWindow"), H(o, "class", "checkbox"), H(p, "for", "linkeditor_sameWindow"), H(p, "class", "space-top"), H(m, "type", "checkbox"), m.disabled = w = !/*file*/
      n[0].sameWindow, H(m, "id", "linkeditor_skipConfirmation"), H(m, "class", "checkbox"), H(_, "for", "linkeditor_skipConfirmation");
    },
    m(I, C) {
      me(I, e, C), ee(e, i), ee(e, u), ee(e, a), ee(e, h), ee(e, c), An(
        c,
        /*file*/
        n[0].url
      ), me(I, l, C), me(I, o, C), o.checked = /*file*/
      n[0].sameWindow, me(I, s, C), me(I, p, C), me(I, d, C), me(I, m, C), m.checked = /*file*/
      n[0].skipConfirmation, me(I, v, C), me(I, _, C), c.focus(), A || (E = [
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
    p(I, C) {
      C & /*file*/
      1 && c.value !== /*file*/
      I[0].url && An(
        c,
        /*file*/
        I[0].url
      ), C & /*file*/
      1 && (o.checked = /*file*/
      I[0].sameWindow), C & /*file*/
      1 && w !== (w = !/*file*/
      I[0].sameWindow) && (m.disabled = w), C & /*file*/
      1 && (m.checked = /*file*/
      I[0].skipConfirmation);
    },
    d(I) {
      I && (de(e), de(l), de(o), de(s), de(p), de(d), de(m), de(v), de(_)), A = !1, zt(E);
    }
  };
}
function Hs(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Visit link") + ""
  ), i, u;
  return {
    c() {
      e = le("a"), i = Ge(r), H(e, "href", u = Fe(
        /*file*/
        n[0].url
      )), H(e, "target", "_blank"), H(e, "class", "button");
    },
    m(a, h) {
      me(a, e, h), ee(e, i);
    },
    p(a, h) {
      h & /*file*/
      1 && u !== (u = Fe(
        /*file*/
        a[0].url
      )) && H(e, "href", u);
    },
    d(a) {
      a && de(e);
    }
  };
}
function Ys(n) {
  let e, r = (
    /*t*/
    n[2]("files_linkeditor", "Save") + ""
  ), i, u, a;
  return {
    c() {
      e = le("a"), i = Ge(r), H(e, "href", window.location.href), H(e, "class", "primary button");
    },
    m(h, c) {
      me(h, e, c), ee(e, i), u || (a = st(e, "click", Wt(
        /*save*/
        n[4]
      )), u = !0);
    },
    p: Mt,
    d(h) {
      h && de(e), u = !1, a();
    }
  };
}
function Vh(n) {
  let e, r, i, u = (
    /*file*/
    n[0].name + ""
  ), a, h, c, l, o, s, p, d = (
    /*t*/
    n[2]("files_linkeditor", "Cancel") + ""
  ), m, w, v, _, A = !/*loading*/
  n[1] && zs(n), E = !/*loading*/
  n[1] && Hs(n), I = !/*loading*/
  n[1] && Ys(n);
  return {
    c() {
      e = le("form"), r = le("div"), i = le("h3"), a = Ge(u), h = be(), A && A.c(), c = be(), l = le("div"), E && E.c(), o = be(), s = le("div"), p = le("a"), m = Ge(d), w = be(), I && I.c(), H(r, "class", "edit"), H(l, "class", "oc-dialog-buttonrow onebutton urlvisit"), H(p, "href", window.location.href), H(p, "class", "cancel button"), H(s, "class", "oc-dialog-buttonrow twobuttons"), H(
        e,
        "action",
        /*OC*/
        n[3].generateUrl("/")
      ), H(e, "method", "post");
    },
    m(C, T) {
      me(C, e, T), ee(e, r), ee(r, i), ee(i, a), ee(r, h), A && A.m(r, null), ee(e, c), ee(e, l), E && E.m(l, null), ee(e, o), ee(e, s), ee(s, p), ee(p, m), ee(s, w), I && I.m(s, null), v || (_ = [
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
    p(C, T) {
      T & /*file*/
      1 && u !== (u = /*file*/
      C[0].name + "") && zi(a, u), /*loading*/
      C[1] ? A && (A.d(1), A = null) : A ? A.p(C, T) : (A = zs(C), A.c(), A.m(r, null)), /*loading*/
      C[1] ? E && (E.d(1), E = null) : E ? E.p(C, T) : (E = Hs(C), E.c(), E.m(l, null)), /*loading*/
      C[1] ? I && (I.d(1), I = null) : I ? I.p(C, T) : (I = Ys(C), I.c(), I.m(s, null));
    },
    d(C) {
      C && de(e), A && A.d(), E && E.d(), I && I.d(), v = !1, zt(_);
    }
  };
}
function Wh(n) {
  let e, r;
  return e = new Yi({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Vh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, u) {
      wr(e, i, u), r = !0;
    },
    p(i, [u]) {
      const a = {};
      u & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), u & /*$$scope, loading, file*/
      1027 && (a.$$scope = { dirty: u, ctx: i }), e.$set(a);
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
function Xh(n, e, r) {
  let i, u;
  const a = window.t, h = window.OC;
  let c;
  $n(() => {
    c = It.subscribe((m) => {
      r(0, i = m), i && (i.isLoaded || i.isNew) && r(1, u = !1);
    });
  }), kn(() => {
    c();
  });
  const l = () => {
    r(1, u = !0), i.isNew && i.onCreate ? i.onCreate({ ...i }) : tr.saveAndChangeViewMode({ ...i });
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
  return r(0, i = Et.getFileConfig()), r(1, u = !0), [
    i,
    u,
    a,
    h,
    l,
    o,
    s,
    p,
    d
  ];
}
class zh extends Mr {
  constructor(e) {
    super(), Fr(this, e, Xh, Wh, mr, {});
  }
}
class Tt {
  static getFileConfig({
    name: e,
    url: r,
    downloadUrl: i,
    dir: u,
    onCreate: a,
    fileModifiedTime: h,
    isNew: c,
    isLoaded: l,
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
      dir: u || "",
      onCreate: a,
      fileModifiedTime: h || null,
      isNew: c || !1,
      isLoaded: l || !1,
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
    let u = `${i}${r}`;
    i !== "/" && (u = `${i}/${r}`);
    const a = Cf(), h = `${Za}${u}`;
    try {
      if (await a.putFileContents(h, e, { overwrite: !1 })) {
        const l = await a.stat(h, { details: !0, data: Of() });
        return Nu("files:node:created", Sf(l.data)), !0;
      }
    } catch (c) {
      console.error(c);
    }
    window.OC.dialogs.alert("", window.t("files_linkeditor", "An error occurred!"));
  }
}
const Zs = (n) => {
  if (!(n != null && n.name) || !(n != null && n.templateName))
    return n;
  const [, e] = n.templateName.split(".") ?? [], r = n.name.toLocaleLowerCase();
  return e && !r.endsWith(e.toLocaleLowerCase()) && (n.name += `.${e}`), n;
};
function Js(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "File name") + ""
  ), i, u, a, h, c, l, o;
  return {
    c() {
      e = le("label"), i = Ge(r), u = be(), a = le("br"), h = be(), c = le("input"), H(c, "type", "text"), Hi(c, "width", "100%"), H(c, "class", "input-wide"), c.autofocus = !0, H(c, "data-cy", "name-input");
    },
    m(s, p) {
      me(s, e, p), ee(e, i), ee(e, u), ee(e, a), ee(e, h), ee(e, c), An(
        c,
        /*file*/
        n[0].name
      ), c.focus(), l || (o = [
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
      ], l = !0);
    },
    p(s, p) {
      p & /*file*/
      1 && c.value !== /*file*/
      s[0].name && An(
        c,
        /*file*/
        s[0].name
      );
    },
    d(s) {
      s && de(e), l = !1, zt(o);
    }
  };
}
function Ks(n) {
  let e, r = (
    /*t*/
    n[3]("files_linkeditor", "Create") + ""
  ), i, u, a;
  return {
    c() {
      e = le("button"), i = Ge(r), H(e, "type", "button"), e.disabled = /*isConflicting*/
      n[2], H(e, "class", "primary button");
    },
    m(h, c) {
      me(h, e, c), ee(e, i), u || (a = st(e, "click", Wt(
        /*save*/
        n[6]
      )), u = !0);
    },
    p(h, c) {
      c & /*isConflicting*/
      4 && (e.disabled = /*isConflicting*/
      h[2]);
    },
    d(h) {
      h && de(e), u = !1, a();
    }
  };
}
function Hh(n) {
  let e, r, i, u, a, h, c, l = (
    /*t*/
    n[3]("files_linkeditor", "Cancel") + ""
  ), o, s, p, d, m = !/*loading*/
  n[1] && Js(n), w = !/*loading*/
  n[1] && Ks(n);
  return {
    c() {
      e = le("form"), r = le("div"), i = le("h3"), i.textContent = `${window.t("files_linkeditor", "New link")}`, u = be(), m && m.c(), a = be(), h = le("div"), c = le("a"), o = Ge(l), s = be(), w && w.c(), H(r, "class", "edit"), H(c, "href", window.location.href), H(c, "class", "cancel button"), H(h, "class", "oc-dialog-buttonrow twobuttons"), H(
        e,
        "action",
        /*OC*/
        n[4].generateUrl("/")
      ), H(e, "method", "post");
    },
    m(v, _) {
      me(v, e, _), ee(e, r), ee(r, i), ee(r, u), m && m.m(r, null), ee(e, a), ee(e, h), ee(h, c), ee(c, o), ee(h, s), w && w.m(h, null), p || (d = [
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
      v[1] ? m && (m.d(1), m = null) : m ? m.p(v, _) : (m = Js(v), m.c(), m.m(r, null)), /*loading*/
      v[1] ? w && (w.d(1), w = null) : w ? w.p(v, _) : (w = Ks(v), w.c(), w.m(h, null));
    },
    d(v) {
      v && de(e), m && m.d(), w && w.d(), p = !1, zt(d);
    }
  };
}
function Yh(n) {
  let e, r;
  return e = new Yi({
    props: {
      loading: (
        /*loading*/
        n[1]
      ),
      $$slots: { default: [Hh] },
      $$scope: { ctx: n }
    }
  }), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, u) {
      wr(e, i, u), r = !0;
    },
    p(i, [u]) {
      const a = {};
      u & /*loading*/
      2 && (a.loading = /*loading*/
      i[1]), u & /*$$scope, isConflicting, loading, file*/
      2055 && (a.$$scope = { dirty: u, ctx: i }), e.$set(a);
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
function Zh(n, e, r) {
  let i, u, a;
  const h = window.t, c = window.OC, l = (w, v) => {
    const _ = {
      name: w,
      templateName: i.templateName
    }, A = Zs(_);
    return ((v == null ? void 0 : v.map((I) => I.basename)) ?? []).includes(A.name);
  };
  let o;
  $n(() => {
    o = It.subscribe((w) => {
      r(0, i = w), i && (i.isLoaded || i.isNew) && (r(1, u = !1), s());
    });
  }), kn(() => {
    o();
  });
  const s = () => {
    l(i.name, i.existingContents) ? r(2, a = !0) : r(2, a = !1);
  }, p = () => {
    l(i.name, i.existingContents) || (r(1, u = !0), i.onCreate(Zs({ ...i })));
  };
  function d() {
    i.name = this.value, r(0, i);
  }
  const m = () => {
    ot.update(() => "none");
  };
  return r(0, i = Tt.getFileConfig()), r(1, u = !0), r(2, a = !0), [
    i,
    u,
    a,
    h,
    c,
    s,
    p,
    d,
    m
  ];
}
class Jh extends Mr {
  constructor(e) {
    super(), Fr(this, e, Zh, Yh, mr, {});
  }
}
function Qs(n) {
  let e, r;
  return e = new Jh({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, u) {
      wr(e, i, u), r = !0;
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
  return e = new vh({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, u) {
      wr(e, i, u), r = !0;
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
function ta(n) {
  let e, r;
  return e = new zh({}), {
    c() {
      kr(e.$$.fragment);
    },
    m(i, u) {
      wr(e, i, u), r = !0;
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
function Kh(n) {
  let e, r, i, u, a = (
    /*viewMode*/
    n[0] === "filename" && Qs()
  ), h = (
    /*viewMode*/
    n[0] === "view" && ea()
  ), c = (
    /*viewMode*/
    n[0] === "edit" && ta()
  );
  return {
    c() {
      a && a.c(), e = be(), h && h.c(), r = be(), c && c.c(), i = Ll();
    },
    m(l, o) {
      a && a.m(l, o), me(l, e, o), h && h.m(l, o), me(l, r, o), c && c.m(l, o), me(l, i, o), u = !0;
    },
    p(l, [o]) {
      /*viewMode*/
      l[0] === "filename" ? a ? o & /*viewMode*/
      1 && De(a, 1) : (a = Qs(), a.c(), De(a, 1), a.m(e.parentNode, e)) : a && (zn(), ct(a, 1, 1, () => {
        a = null;
      }), Hn()), /*viewMode*/
      l[0] === "view" ? h ? o & /*viewMode*/
      1 && De(h, 1) : (h = ea(), h.c(), De(h, 1), h.m(r.parentNode, r)) : h && (zn(), ct(h, 1, 1, () => {
        h = null;
      }), Hn()), /*viewMode*/
      l[0] === "edit" ? c ? o & /*viewMode*/
      1 && De(c, 1) : (c = ta(), c.c(), De(c, 1), c.m(i.parentNode, i)) : c && (zn(), ct(c, 1, 1, () => {
        c = null;
      }), Hn());
    },
    i(l) {
      u || (De(a), De(h), De(c), u = !0);
    },
    o(l) {
      ct(a), ct(h), ct(c), u = !1;
    },
    d(l) {
      l && (de(e), de(r), de(i)), a && a.d(l), h && h.d(l), c && c.d(l);
    }
  };
}
function Qh(n, e, r) {
  let i, u;
  return $n(() => {
    u = ot.subscribe((a) => {
      r(0, i = a);
    });
  }), kn(() => {
    u();
  }), r(0, i = ""), [i];
}
class ep extends Mr {
  constructor(e) {
    super(), Fr(this, e, Qh, Kh, mr, {});
  }
}
const tp = ["application/internet-shortcut", "application/x-mothertree-document"], ra = () => '<span class="icon-link" style="display: block;"></span>', na = (n) => tp.some((e) => n === e || (n == null ? void 0 : n.includes(e)));
function Nn() {
  const n = window.location.hostname;
  return n.startsWith("files.") ? n.replace(/^files\./, "docs.") : Nn() || null;
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
class Cr {
  /**
   * Registers the file actions with files app
   */
  static registerFileActions() {
    ui({
      id: "editLink",
      displayName: () => t("files_linkeditor", "Edit link"),
      iconSvgInline: ra,
      exec: async (i) => {
        await Cr.loadAndChangeViewMode({
          fileName: i.basename,
          dirName: i.dirname,
          nextViewMode: "edit",
          permissions: i.permissions
        });
      },
      enabled: (i) => window.OC.currentUser && i.every((u) => u.permissions >= je.UPDATE && na(u.mime))
    }), ui({
      id: "viewLink",
      displayName: () => t("files_linkeditor", "View link"),
      iconSvgInline: ra,
      exec: async (i) => {
        const u = Nn();
        if (window.OC.currentUser) {
          if (u) {
            const a = window.open("about:blank", "_blank"), h = await Tt.load({
              fileName: i.basename,
              dir: i.dirname
            });
            if (h) {
              const c = Ae.getExtension(i.basename);
              let l;
              if (c === "webloc" ? l = Ae.parseWeblocFile(h.filecontents) : c === "mtd" ? l = Ae.parseMTDFile(h.filecontents) : l = Ae.parseURLFile(h.filecontents), l.url && l.url.includes(u)) {
                a && (a.location.href = l.url);
                return;
              }
            }
            a && a.close();
          }
          await Cr.loadAndChangeViewMode({
            fileName: i.basename,
            dirName: i.dirname,
            nextViewMode: "view",
            permissions: i.permissions
          });
        } else
          await Cr.loadAndChangeViewMode({
            fileName: i.displayname ?? i.basename,
            dirName: i.dirname,
            nextViewMode: "view",
            // TODO:
            downloadUrl: i.source,
            publicUser: !0,
            permissions: i.permissions
          });
      },
      enabled: (i) => i.every((u) => u.permissions >= je.READ && na(u.mime)),
      default: () => nl.DEFAULT
    });
    const e = ({ id: i, displayName: u, templateName: a }) => {
      js({
        id: i,
        displayName: u,
        enabled: (h) => h.permissions >= je.CREATE,
        iconClass: "icon-link",
        handler: (h, c) => {
          const l = h.path;
          ot.update(() => "filename"), It.update(
            () => Tt.getFileConfig({
              name: a,
              templateName: a,
              dir: l,
              isNew: !0,
              existingContents: c,
              onCreate: async (o) => {
                ot.update(() => "edit"), It.update(
                  () => Tt.getFileConfig({
                    name: o.name,
                    dir: o.dir,
                    isNew: !0,
                    onCreate: async (s) => {
                      await Cr.saveAndChangeViewMode(s);
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
    const r = Nn();
    if (r) {
      const i = `https://${r}`;
      js({
        id: "lasuite-new-document",
        displayName: window.t("files_linkeditor", "New Document"),
        enabled: (a) => a.permissions >= je.CREATE,
        iconClass: "icon-file",
        handler: async (a, h) => {
          const c = a.path;
          try {
            const l = await fetch(
              window.OC.generateUrl("/apps/files_linkeditor/api/create-document"),
              {
                method: "POST",
                headers: {
                  requesttoken: window.OC.requestToken,
                  "Content-Type": "application/json"
                }
              }
            );
            if (!l.ok) {
              const w = await l.json();
              console.error("[LaSuite] Failed to create document:", w), window.OC.Notification.showTemporary(
                w.message || window.t("files_linkeditor", "Failed to create document.")
              ), window.open(i, "_blank", "noopener,noreferrer");
              return;
            }
            const { id: o, url: s } = await l.json(), d = `Document-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace(/[T:]/g, "-")}.mtd`, m = Ae.generateMTDFileContent("", s, !1, !0);
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
          } catch (l) {
            console.error("[LaSuite] Error creating document:", l), window.OC.Notification.showTemporary(
              window.t("files_linkeditor", "An error occurred while creating the document.")
            ), window.open(i, "_blank", "noopener,noreferrer");
          }
        }
      });
      const u = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      ui({
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
            const l = await c.json();
            console.log("[LaSuite] DOCX conversion queued:", l), window.OC.Notification.showTemporary(
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
        enabled: (a) => window.OC.currentUser && a.length === 1 && a.every((h) => h.mime === u),
        order: 100
        // Show after other actions
      });
    }
  }
  static async loadAndChangeViewMode({ fileName: e, dirName: r, nextViewMode: i, publicUser: u, downloadUrl: a, permissions: h }) {
    ot.update(() => i), It.update(
      () => Tt.getFileConfig({
        name: e,
        dir: r || "",
        permissions: h,
        isPublicLink: u
      })
    );
    let c = {};
    if (u ? c = await Tt.loadPublic({ downloadUrl: a }) : c = await Tt.load({ fileName: e, dir: r }), c) {
      const l = Ae.getExtension(e);
      let o = {};
      l === "webloc" ? o = Ae.parseWeblocFile(c.filecontents) : l === "mtd" ? o = Ae.parseMTDFile(c.filecontents) : o = Ae.parseURLFile(c.filecontents);
      const s = Nn();
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
  static async saveAndChangeViewMode({ name: e, dir: r, url: i, fileModifiedTime: u, sameWindow: a, skipConfirmation: h }) {
    const c = Ae.getExtension(e);
    let l = "";
    c === "webloc" ? l = Ae.generateWeblocFileContent("", i, a, h) : c === "mtd" ? l = Ae.generateMTDFileContent("", i, a, h) : l = Ae.generateURLFileContent("", i, a, h), await Tt.save({ fileContent: l, name: e, dir: r, fileModifiedTime: u }), ot.update(() => "none");
  }
}
function rp() {
  const n = window.location.hostname;
  return n.startsWith("files.") ? n.replace(/^files\./, "docs.") : null;
}
const rn = rp(), ia = rn ? new RegExp(`https://${rn.replace(/\./g, "\\.")}/docs/([a-f0-9-]+)/?`, "i") : null;
function hl() {
  var e, r, i, u;
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
  if ((u = (i = (r = (e = window.OCA) == null ? void 0 : e.Files) == null ? void 0 : r.App) == null ? void 0 : i.fileList) != null && u.reload) {
    window.OCA.Files.App.fileList.reload();
    return;
  }
  window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
}
const hr = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), np = 30 * 1e3, ip = 5 * 60 * 1e3, op = 10 * 60 * 1e3, sp = 30 * 1e3, ap = 5 * 1e3;
let oa = null;
function pl(n) {
  if (!ia) return null;
  const e = n.match(ia);
  return e ? e[1] : null;
}
function dl(n) {
  const e = n.match(/URL=(.+)/i);
  return e ? e[1].trim() : null;
}
function gl(n) {
  return n.replace(/[<>:"/\\|?*]/g, "-").replace(/\s+/g, " ").trim().substring(0, 200);
}
function ml() {
  const e = new URLSearchParams(window.location.search).get("dir");
  if (e)
    return e.startsWith("/") ? e : "/" + e;
  const r = window.location.hash;
  if (r && r.startsWith("#")) {
    const i = r.substring(1).split("?")[0], u = decodeURIComponent(i);
    return u.startsWith("/") ? u : "/" + u;
  }
  return "/";
}
function lp() {
  var n, e, r, i, u;
  return ((e = (n = window.OC) == null ? void 0 : n.currentUser) == null ? void 0 : e.uid) || ((r = window.OC) == null ? void 0 : r.currentUser) || window._oc_current_user || ((u = (i = document.head.querySelector("[data-user]")) == null ? void 0 : i.dataset) == null ? void 0 : u.user) || null;
}
async function wl() {
  const n = ml(), e = lp();
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
    const u = await i.text(), c = new DOMParser().parseFromString(u, "application/xml").querySelectorAll("response"), l = [];
    return c.forEach((o, s) => {
      var v, _, A;
      if (s === 0) return;
      const p = ((v = o.querySelector("href")) == null ? void 0 : v.textContent) || "", d = ((_ = o.querySelector("displayname")) == null ? void 0 : _.textContent) || "", m = ((A = o.querySelector("getlastmodified")) == null ? void 0 : A.textContent) || "", w = d || decodeURIComponent(p.split("/").pop());
      (w.toLowerCase().endsWith(".url") || w.toLowerCase().endsWith(".webloc") || w.toLowerCase().endsWith(".mtd")) && l.push({
        name: w,
        path: n === "/" ? `/${w}` : `${n}/${w}`,
        mtime: m ? new Date(m).getTime() : Date.now()
      });
    }), l;
  } catch (r) {
    return console.debug("[LaSuiteSync] Error listing files:", r), [];
  }
}
async function yl(n) {
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
async function sa() {
  var n;
  if (!(!rn || !((n = window.OC) != null && n.currentUser)))
    try {
      const e = await wl();
      if (e.length === 0) return;
      const r = Date.now(), i = [];
      for (const c of e) {
        hr.has(c.path) || hr.set(c.path, c.mtime || r);
        const l = hr.get(c.path), s = r - l < op ? np : ip, p = Kr.get(c.path);
        if (p) {
          const v = Tn.get(p) || 0;
          if (r - v < s)
            continue;
        }
        const d = await yl(c.path);
        if (!d) continue;
        const m = dl(d);
        if (!m) continue;
        const w = pl(m);
        if (w) {
          if (Kr.set(c.path, w), !p) {
            const v = Tn.get(w) || 0;
            if (r - v < s)
              continue;
          }
          i.push({
            id: w,
            filePath: c.path,
            fileName: c.name
          }), Tn.set(w, r);
        }
      }
      if (i.length === 0) return;
      const u = await fetch(
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
      if (!u.ok) {
        console.debug("[LaSuiteSync] Failed to fetch document titles");
        return;
      }
      const { documents: a } = await u.json(), h = [];
      for (const c of a) {
        if (!c.title || c.error) continue;
        const l = i.find((d) => d.id === c.id);
        if (!l) continue;
        const o = gl(c.title) + ".mtd", s = l.filePath.substring(0, l.filePath.lastIndexOf("/")) || "/", p = s === "/" ? `/${o}` : `${s}/${o}`;
        if (l.fileName !== o) {
          console.log(`[LaSuiteSync] Renaming: ${l.fileName} -> ${o}`);
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
                  filePath: l.filePath,
                  newName: o
                })
              }
            )).ok && (hr.delete(l.filePath), Kr.delete(l.filePath), h.push({
              oldPath: l.filePath,
              newPath: p,
              newName: o
            }));
          } catch (d) {
            console.debug("[LaSuiteSync] Failed to rename file:", d);
          }
        }
      }
      h.length > 0 && hl();
    } catch (e) {
      console.debug("[LaSuiteSync] Sync error:", e);
    }
}
async function aa() {
  var n;
  if (!(!rn || !((n = window.OC) != null && n.currentUser)))
    try {
      const e = await wl();
      if (e.length === 0) return;
      const r = [];
      for (const h of e) {
        const c = await yl(h.path);
        if (!c) continue;
        const l = dl(c);
        if (!l) continue;
        const o = pl(l);
        o && (Kr.set(h.path, o), r.push({
          id: o,
          filePath: h.path,
          fileName: h.name
        }), Tn.set(o, Date.now()), hr.has(h.path) || hr.set(h.path, h.mtime || Date.now()));
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
      const { documents: u } = await i.json(), a = [];
      for (const h of u) {
        if (!h.title || h.error) continue;
        const c = r.find((p) => p.id === h.id);
        if (!c) continue;
        const l = gl(h.title) + ".mtd", o = c.filePath.substring(0, c.filePath.lastIndexOf("/")) || "/", s = o === "/" ? `/${l}` : `${o}/${l}`;
        if (c.fileName !== l) {
          console.log(`[LaSuiteSync] Renaming: ${c.fileName} -> ${l}`);
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
                  newName: l
                })
              }
            )).ok && (hr.delete(c.filePath), a.push({
              oldPath: c.filePath,
              newPath: s,
              newName: l
            }));
          } catch (p) {
            console.debug("[LaSuiteSync] Failed to rename file:", p);
          }
        }
      }
      a.length > 0 && hl();
    } catch (e) {
      console.debug("[LaSuiteSync] Immediate sync error:", e);
    }
}
function up() {
  if (!rn) {
    console.debug("[LaSuiteSync] DOCS_HOST not configured, sync disabled");
    return;
  }
  if (oa)
    return;
  oa = setInterval(sa, sp), sa();
  let n = null, e = window.location.href;
  setInterval(() => {
    const i = ml(), u = window.location.href;
    (i !== n || u !== e) && (n = i, e = u, Kr.clear(), setTimeout(aa, 500));
  }, ap), window.addEventListener("popstate", () => {
    setTimeout(aa, 500);
  });
}
const cp = [];
cp.push(
  new ep({
    target: document.body,
    props: {}
  })
);
tr.registerFileActions();
Cr.registerFileActions();
up();
