var j = Object.defineProperty;
var I = (t, e, a) => e in t ? j(t, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[e] = a;
var s = (t, e, a) => I(t, typeof e != "symbol" ? e + "" : e, a);
const n = Symbol.for("drizzle:entityKind");
function P(t, e) {
  if (!t || typeof t != "object")
    return !1;
  if (t instanceof e)
    return !0;
  if (!Object.prototype.hasOwnProperty.call(e, n))
    throw new Error(
      `Class "${e.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`
    );
  let a = Object.getPrototypeOf(t).constructor;
  if (a)
    for (; a; ) {
      if (n in a && a[n] === e[n])
        return !0;
      a = Object.getPrototypeOf(a);
    }
  return !1;
}
const i = Symbol.for("drizzle:Name"), m = Symbol.for("drizzle:Schema"), f = Symbol.for("drizzle:Columns"), u = Symbol.for("drizzle:ExtraConfigColumns"), b = Symbol.for("drizzle:OriginalName"), h = Symbol.for("drizzle:BaseName"), z = Symbol.for("drizzle:IsAlias"), d = Symbol.for("drizzle:ExtraConfigBuilder"), x = Symbol.for("drizzle:IsDrizzleTable");
var y, C, S, g, p, N, T, $, O, w;
w = n, O = i, $ = b, T = m, N = f, p = u, g = h, S = z, C = x, y = d;
class c {
  constructor(e, a, o) {
    /**
     * @internal
     * Can be changed if the table is aliased.
     */
    s(this, O);
    /**
     * @internal
     * Used to store the original name of the table, before any aliasing.
     */
    s(this, $);
    /** @internal */
    s(this, T);
    /** @internal */
    s(this, N);
    /** @internal */
    s(this, p);
    /**
     *  @internal
     * Used to store the table name before the transformation via the `tableCreator` functions.
     */
    s(this, g);
    /** @internal */
    s(this, S, !1);
    /** @internal */
    s(this, C, !0);
    /** @internal */
    s(this, y);
    this[i] = this[b] = e, this[m] = a, this[h] = o;
  }
}
s(c, w, "Table"), /** @internal */
s(c, "Symbol", {
  Name: i,
  Schema: m,
  OriginalName: b,
  Columns: f,
  ExtraConfigColumns: u,
  BaseName: h,
  IsAlias: z,
  ExtraConfigBuilder: d
});
function v(t) {
  return t[i];
}
function L(t) {
  return `${t[m] ?? "public"}.${t[i]}`;
}
function E(t) {
  return (t.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []).map((a) => a.toLowerCase()).join("_");
}
function B(t) {
  return (t.replace(/['\u2019]/g, "").match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []).reduce((a, o, r) => {
    const l = r === 0 ? o.toLowerCase() : `${o[0].toUpperCase()}${o.slice(1)}`;
    return a + l;
  }, "");
}
function D(t) {
  return t;
}
var k;
k = n;
class K {
  constructor(e) {
    /** @internal */
    s(this, "cache", {});
    s(this, "cachedTables", {});
    s(this, "convert");
    this.convert = e === "snake_case" ? E : e === "camelCase" ? B : D;
  }
  getColumnCasing(e) {
    if (!e.keyAsName)
      return e.name;
    const a = e.table[c.Symbol.Schema] ?? "public", o = e.table[c.Symbol.OriginalName], r = `${a}.${o}.${e.name}`;
    return this.cache[r] || this.cacheTable(e.table), this.cache[r];
  }
  cacheTable(e) {
    const a = e[c.Symbol.Schema] ?? "public", o = e[c.Symbol.OriginalName], r = `${a}.${o}`;
    if (!this.cachedTables[r]) {
      for (const l of Object.values(e[c.Symbol.Columns])) {
        const A = `${r}.${l.name}`;
        this.cache[A] = this.convert(l.name);
      }
      this.cachedTables[r] = !0;
    }
  }
  clearCache() {
    this.cache = {}, this.cachedTables = {};
  }
}
s(K, k, "CasingCache");
export {
  K as C,
  z as I,
  c as T,
  E as a,
  i as b,
  L as c,
  n as e,
  v as g,
  P as i,
  B as t
};
