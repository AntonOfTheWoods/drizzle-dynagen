var aa = Object.defineProperty;
var la = (i, e, t) => e in i ? aa(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var n = (i, e, t) => la(i, typeof e != "symbol" ? e + "" : e, t);
import { e as l, b as Se, i as h, T as w, I as ua, c as Pe, C as ca, g as ae } from "./casing-tDA94lCu.js";
var He;
He = l;
class A {
  constructor(e, t) {
    n(this, "name");
    n(this, "keyAsName");
    n(this, "primary");
    n(this, "notNull");
    n(this, "default");
    n(this, "defaultFn");
    n(this, "onUpdateFn");
    n(this, "hasDefault");
    n(this, "isUnique");
    n(this, "uniqueName");
    n(this, "uniqueType");
    n(this, "dataType");
    n(this, "columnType");
    n(this, "enumValues");
    n(this, "generated");
    n(this, "generatedIdentity");
    n(this, "config");
    this.table = e, this.config = t, this.name = t.name, this.keyAsName = t.keyAsName, this.notNull = t.notNull, this.default = t.default, this.defaultFn = t.defaultFn, this.onUpdateFn = t.onUpdateFn, this.hasDefault = t.hasDefault, this.primary = t.primaryKey, this.isUnique = t.isUnique, this.uniqueName = t.uniqueName, this.uniqueType = t.uniqueType, this.dataType = t.dataType, this.columnType = t.columnType, this.generated = t.generated, this.generatedIdentity = t.generatedIdentity;
  }
  mapFromDriverValue(e) {
    return e;
  }
  mapToDriverValue(e) {
    return e;
  }
  // ** @internal */
  shouldDisableInsert() {
    return this.config.generated !== void 0 && this.config.generated.type !== "byDefault";
  }
}
n(A, He, "Column");
var Ye;
Ye = l;
class gr {
  constructor(e, t, s) {
    n(this, "config");
    /**
     * Alias for {@link $defaultFn}.
     */
    n(this, "$default", this.$defaultFn);
    /**
     * Alias for {@link $onUpdateFn}.
     */
    n(this, "$onUpdate", this.$onUpdateFn);
    this.config = {
      name: e,
      keyAsName: e === "",
      notNull: !1,
      default: void 0,
      hasDefault: !1,
      primaryKey: !1,
      isUnique: !1,
      uniqueName: void 0,
      uniqueType: void 0,
      dataType: t,
      columnType: s,
      generated: void 0
    };
  }
  /**
   * Changes the data type of the column. Commonly used with `json` columns. Also, useful for branded types.
   *
   * @example
   * ```ts
   * const users = pgTable('users', {
   * 	id: integer('id').$type<UserId>().primaryKey(),
   * 	details: json('details').$type<UserDetails>().notNull(),
   * });
   * ```
   */
  $type() {
    return this;
  }
  /**
   * Adds a `not null` clause to the column definition.
   *
   * Affects the `select` model of the table - columns *without* `not null` will be nullable on select.
   */
  notNull() {
    return this.config.notNull = !0, this;
  }
  /**
   * Adds a `default <value>` clause to the column definition.
   *
   * Affects the `insert` model of the table - columns *with* `default` are optional on insert.
   *
   * If you need to set a dynamic default value, use {@link $defaultFn} instead.
   */
  default(e) {
    return this.config.default = e, this.config.hasDefault = !0, this;
  }
  /**
   * Adds a dynamic default value to the column.
   * The function will be called when the row is inserted, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $defaultFn(e) {
    return this.config.defaultFn = e, this.config.hasDefault = !0, this;
  }
  /**
   * Adds a dynamic update value to the column.
   * The function will be called when the row is updated, and the returned value will be used as the column value if none is provided.
   * If no `default` (or `$defaultFn`) value is provided, the function will be called when the row is inserted as well, and the returned value will be used as the column value.
   *
   * **Note:** This value does not affect the `drizzle-kit` behavior, it is only used at runtime in `drizzle-orm`.
   */
  $onUpdateFn(e) {
    return this.config.onUpdateFn = e, this.config.hasDefault = !0, this;
  }
  /**
   * Adds a `primary key` clause to the column definition. This implicitly makes the column `not null`.
   *
   * In SQLite, `integer primary key` implicitly makes the column auto-incrementing.
   */
  primaryKey() {
    return this.config.primaryKey = !0, this.config.notNull = !0, this;
  }
  /** @internal Sets the name of the column to the key within the table definition if a name was not given. */
  setName(e) {
    this.config.name === "" && (this.config.name = e);
  }
}
n(gr, Ye, "ColumnBuilder");
var Xe;
Xe = l;
class pr {
  constructor(e, t) {
    /** @internal */
    n(this, "reference");
    /** @internal */
    n(this, "_onUpdate", "no action");
    /** @internal */
    n(this, "_onDelete", "no action");
    this.reference = () => {
      const { name: s, columns: o, foreignColumns: a } = e();
      return { name: s, columns: o, foreignTable: a[0].table, foreignColumns: a };
    }, t && (this._onUpdate = t.onUpdate, this._onDelete = t.onDelete);
  }
  onUpdate(e) {
    return this._onUpdate = e === void 0 ? "no action" : e, this;
  }
  onDelete(e) {
    return this._onDelete = e === void 0 ? "no action" : e, this;
  }
  /** @internal */
  build(e) {
    return new yr(e, this);
  }
}
n(pr, Xe, "PgForeignKeyBuilder");
var Ze;
Ze = l;
class yr {
  constructor(e, t) {
    n(this, "reference");
    n(this, "onUpdate");
    n(this, "onDelete");
    this.table = e, this.reference = t.reference, this.onUpdate = t._onUpdate, this.onDelete = t._onDelete;
  }
  getName() {
    const { name: e, columns: t, foreignColumns: s } = this.reference(), o = t.map((d) => d.name), a = s.map((d) => d.name), u = [
      this.table[Se],
      ...o,
      s[0].table[Se],
      ...a
    ];
    return e ?? `${u.join("_")}_fk`;
  }
}
n(yr, Ze, "PgForeignKey");
function da(i, ...e) {
  return i(...e);
}
function wr(i, e) {
  return `${i[Se]}_${e.join("_")}_unique`;
}
var ke;
ke = l;
class ha {
  constructor(e, t) {
    /** @internal */
    n(this, "columns");
    /** @internal */
    n(this, "nullsNotDistinctConfig", !1);
    this.name = t, this.columns = e;
  }
  nullsNotDistinct() {
    return this.nullsNotDistinctConfig = !0, this;
  }
  /** @internal */
  build(e) {
    return new br(e, this.columns, this.nullsNotDistinctConfig, this.name);
  }
}
n(ha, ke, "PgUniqueConstraintBuilder");
var et;
et = l;
class br {
  constructor(e, t, s, o) {
    n(this, "columns");
    n(this, "name");
    n(this, "nullsNotDistinct", !1);
    this.table = e, this.columns = t, this.name = o ?? wr(this.table, this.columns.map((a) => a.name)), this.nullsNotDistinct = s;
  }
  getName() {
    return this.name;
  }
}
n(br, et, "PgUniqueConstraint");
function Ke(i, e, t) {
  for (let s = e; s < i.length; s++) {
    const o = i[s];
    if (o === "\\") {
      s++;
      continue;
    }
    if (o === '"')
      return [i.slice(e, s).replace(/\\/g, ""), s + 1];
    if (!t && (o === "," || o === "}"))
      return [i.slice(e, s).replace(/\\/g, ""), s];
  }
  return [i.slice(e).replace(/\\/g, ""), i.length];
}
function Sr(i, e = 0) {
  const t = [];
  let s = e, o = !1;
  for (; s < i.length; ) {
    const a = i[s];
    if (a === ",") {
      (o || s === e) && t.push(""), o = !0, s++;
      continue;
    }
    if (o = !1, a === "\\") {
      s += 2;
      continue;
    }
    if (a === '"') {
      const [f, m] = Ke(i, s + 1, !0);
      t.push(f), s = m;
      continue;
    }
    if (a === "}")
      return [t, s + 1];
    if (a === "{") {
      const [f, m] = Sr(i, s + 1);
      t.push(f), s = m;
      continue;
    }
    const [u, d] = Ke(i, s, !1);
    t.push(u), s = d;
  }
  return [t, s];
}
function fa(i) {
  const [e] = Sr(i, 1);
  return e;
}
function Pr(i) {
  return `{${i.map((e) => Array.isArray(e) ? Pr(e) : typeof e == "string" ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${e}`).join(",")}}`;
}
var tt, it;
class $ extends (it = gr, tt = l, it) {
  constructor() {
    super(...arguments);
    n(this, "foreignKeyConfigs", []);
  }
  array(t) {
    return new Tr(this.config.name, this, t);
  }
  references(t, s = {}) {
    return this.foreignKeyConfigs.push({ ref: t, actions: s }), this;
  }
  unique(t, s) {
    return this.config.isUnique = !0, this.config.uniqueName = t, this.config.uniqueType = s == null ? void 0 : s.nulls, this;
  }
  generatedAlwaysAs(t) {
    return this.config.generated = {
      as: t,
      type: "always",
      mode: "stored"
    }, this;
  }
  /** @internal */
  buildForeignKeys(t, s) {
    return this.foreignKeyConfigs.map(({ ref: o, actions: a }) => da(
      (u, d) => {
        const f = new pr(() => {
          const m = u();
          return { columns: [t], foreignColumns: [m] };
        });
        return d.onUpdate && f.onUpdate(d.onUpdate), d.onDelete && f.onDelete(d.onDelete), f.build(s);
      },
      o,
      a
    ));
  }
  /** @internal */
  buildExtraConfigColumn(t) {
    return new $r(t, this.config);
  }
}
n($, tt, "PgColumnBuilder");
var st, nt;
class p extends (nt = A, st = l, nt) {
  constructor(e, t) {
    t.uniqueName || (t.uniqueName = wr(e, [t.name])), super(e, t), this.table = e;
  }
}
n(p, st, "PgColumn");
var rt, ot;
class $r extends (ot = p, rt = l, ot) {
  constructor() {
    super(...arguments);
    n(this, "indexConfig", {
      order: this.config.order ?? "asc",
      nulls: this.config.nulls ?? "last",
      opClass: this.config.opClass
    });
    n(this, "defaultConfig", {
      order: "asc",
      nulls: "last",
      opClass: void 0
    });
  }
  getSQLType() {
    return this.getSQLType();
  }
  asc() {
    return this.indexConfig.order = "asc", this;
  }
  desc() {
    return this.indexConfig.order = "desc", this;
  }
  nullsFirst() {
    return this.indexConfig.nulls = "first", this;
  }
  nullsLast() {
    return this.indexConfig.nulls = "last", this;
  }
  /**
   * ### PostgreSQL documentation quote
   *
   * > An operator class with optional parameters can be specified for each column of an index.
   * The operator class identifies the operators to be used by the index for that column.
   * For example, a B-tree index on four-byte integers would use the int4_ops class;
   * this operator class includes comparison functions for four-byte integers.
   * In practice the default operator class for the column's data type is usually sufficient.
   * The main point of having operator classes is that for some data types, there could be more than one meaningful ordering.
   * For example, we might want to sort a complex-number data type either by absolute value or by real part.
   * We could do this by defining two operator classes for the data type and then selecting the proper class when creating an index.
   * More information about operator classes check:
   *
   * ### Useful links
   * https://www.postgresql.org/docs/current/sql-createindex.html
   *
   * https://www.postgresql.org/docs/current/indexes-opclass.html
   *
   * https://www.postgresql.org/docs/current/xindex.html
   *
   * ### Additional types
   * If you have the `pg_vector` extension installed in your database, you can use the
   * `vector_l2_ops`, `vector_ip_ops`, `vector_cosine_ops`, `vector_l1_ops`, `bit_hamming_ops`, `bit_jaccard_ops`, `halfvec_l2_ops`, `sparsevec_l2_ops` options, which are predefined types.
   *
   * **You can always specify any string you want in the operator class, in case Drizzle doesn't have it natively in its types**
   *
   * @param opClass
   * @returns
   */
  op(t) {
    return this.indexConfig.opClass = t, this;
  }
}
n($r, rt, "ExtraConfigColumn");
var at, lt;
class Tr extends (lt = $, at = l, lt) {
  constructor(e, t, s) {
    super(e, "array", "PgArray"), this.config.baseBuilder = t, this.config.size = s;
  }
  /** @internal */
  build(e) {
    const t = this.config.baseBuilder.build(e);
    return new $e(
      e,
      this.config,
      t
    );
  }
}
n(Tr, at, "PgArrayBuilder");
var ut, ct;
const he = class he extends (ct = p, ut = l, ct) {
  constructor(t, s, o, a) {
    super(t, s);
    n(this, "size");
    this.baseColumn = o, this.range = a, this.size = s.size;
  }
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(t) {
    return typeof t == "string" && (t = fa(t)), t.map((s) => this.baseColumn.mapFromDriverValue(s));
  }
  mapToDriverValue(t, s = !1) {
    const o = t.map(
      (a) => a === null ? null : h(this.baseColumn, he) ? this.baseColumn.mapToDriverValue(a, !0) : this.baseColumn.mapToDriverValue(a)
    );
    return s ? o : Pr(o);
  }
};
n(he, ut, "PgArray");
let $e = he;
const Te = Symbol.for("drizzle:isPgEnum");
function ma(i) {
  return !!i && typeof i == "function" && Te in i && i[Te] === !0;
}
var dt, ht;
class Nr extends (ht = $, dt = l, ht) {
  constructor(e, t) {
    super(e, "string", "PgEnumColumn"), this.config.enum = t;
  }
  /** @internal */
  build(e) {
    return new xr(
      e,
      this.config
    );
  }
}
n(Nr, dt, "PgEnumColumnBuilder");
var ft, mt;
class xr extends (mt = p, ft = l, mt) {
  constructor(t, s) {
    super(t, s);
    n(this, "enum", this.config.enum);
    n(this, "enumValues", this.config.enum.enumValues);
    this.enum = s.enum;
  }
  getSQLType() {
    return this.enum.enumName;
  }
}
n(xr, ft, "PgEnumColumn");
function Vl(i, e, t) {
  const s = Object.assign(
    (o) => new Nr(o ?? "", s),
    {
      enumName: i,
      enumValues: e,
      schema: t,
      [Te]: !0
    }
  );
  return s;
}
var gt;
gt = l;
class U {
  constructor(e, t, s, o = !1) {
    this._ = {
      brand: "Subquery",
      sql: e,
      selectedFields: t,
      alias: s,
      isWith: o
    };
  }
  // getSQL(): SQL<unknown> {
  // 	return new SQL([this]);
  // }
}
n(U, gt, "Subquery");
var pt, yt;
class vr extends (yt = U, pt = l, yt) {
}
n(vr, pt, "WithSubquery");
const Ne = {
  startActiveSpan(i, e) {
    return e();
  }
}, F = Symbol.for("drizzle:ViewBaseConfig");
function Br(i) {
  return i != null && typeof i.getSQL == "function";
}
function ga(i) {
  var t;
  const e = { sql: "", params: [] };
  for (const s of i)
    e.sql += s.sql, e.params.push(...s.params), (t = s.typings) != null && t.length && (e.typings || (e.typings = []), e.typings.push(...s.typings));
  return e;
}
var wt;
wt = l;
class D {
  constructor(e) {
    n(this, "value");
    this.value = Array.isArray(e) ? e : [e];
  }
  getSQL() {
    return new y([this]);
  }
}
n(D, wt, "StringChunk");
var bt;
bt = l;
const G = class G {
  constructor(e) {
    /** @internal */
    n(this, "decoder", qr);
    n(this, "shouldInlineParams", !1);
    this.queryChunks = e;
  }
  append(e) {
    return this.queryChunks.push(...e.queryChunks), this;
  }
  toQuery(e) {
    return Ne.startActiveSpan("drizzle.buildSQL", (t) => {
      const s = this.buildQueryFromSourceParams(this.queryChunks, e);
      return t == null || t.setAttributes({
        "drizzle.query.text": s.sql,
        "drizzle.query.params": JSON.stringify(s.params)
      }), s;
    });
  }
  buildQueryFromSourceParams(e, t) {
    const s = Object.assign({}, t, {
      inlineParams: t.inlineParams || this.shouldInlineParams,
      paramStartIndex: t.paramStartIndex || { value: 0 }
    }), {
      casing: o,
      escapeName: a,
      escapeParam: u,
      prepareTyping: d,
      inlineParams: f,
      paramStartIndex: m
    } = s;
    return ga(e.map((c) => {
      var N;
      if (h(c, D))
        return { sql: c.value.join(""), params: [] };
      if (h(c, ue))
        return { sql: a(c.value), params: [] };
      if (c === void 0)
        return { sql: "", params: [] };
      if (Array.isArray(c)) {
        const g = [new D("(")];
        for (const [b, x] of c.entries())
          g.push(x), b < c.length - 1 && g.push(new D(", "));
        return g.push(new D(")")), this.buildQueryFromSourceParams(g, s);
      }
      if (h(c, G))
        return this.buildQueryFromSourceParams(c.queryChunks, {
          ...s,
          inlineParams: f || c.shouldInlineParams
        });
      if (h(c, w)) {
        const g = c[w.Symbol.Schema], b = c[w.Symbol.Name];
        return {
          sql: g === void 0 ? a(b) : a(g) + "." + a(b),
          params: []
        };
      }
      if (h(c, A)) {
        const g = o.getColumnCasing(c);
        if (t.invokeSource === "indexes")
          return { sql: a(g), params: [] };
        const b = c.table[w.Symbol.Schema];
        return {
          sql: c.table[ua] || b === void 0 ? a(c.table[w.Symbol.Name]) + "." + a(g) : a(b) + "." + a(c.table[w.Symbol.Name]) + "." + a(g),
          params: []
        };
      }
      if (h(c, J)) {
        const g = c[F].schema, b = c[F].name;
        return {
          sql: g === void 0 ? a(b) : a(g) + "." + a(b),
          params: []
        };
      }
      if (h(c, Y)) {
        if (h(c.value, k))
          return { sql: u(m.value++, c), params: [c], typings: ["none"] };
        const g = c.value === null ? null : c.encoder.mapToDriverValue(c.value);
        if (h(g, G))
          return this.buildQueryFromSourceParams([g], s);
        if (f)
          return { sql: this.mapInlineParam(g, s), params: [] };
        let b = ["none"];
        return d && (b = [d(c.encoder)]), { sql: u(m.value++, g), params: [g], typings: b };
      }
      return h(c, k) ? { sql: u(m.value++, c), params: [c], typings: ["none"] } : h(c, G.Aliased) && c.fieldAlias !== void 0 ? { sql: a(c.fieldAlias), params: [] } : h(c, U) ? c._.isWith ? { sql: a(c._.alias), params: [] } : this.buildQueryFromSourceParams([
        new D("("),
        c._.sql,
        new D(") "),
        new ue(c._.alias)
      ], s) : ma(c) ? c.schema ? { sql: a(c.schema) + "." + a(c.enumName), params: [] } : { sql: a(c.enumName), params: [] } : Br(c) ? (N = c.shouldOmitSQLParens) != null && N.call(c) ? this.buildQueryFromSourceParams([c.getSQL()], s) : this.buildQueryFromSourceParams([
        new D("("),
        c.getSQL(),
        new D(")")
      ], s) : f ? { sql: this.mapInlineParam(c, s), params: [] } : { sql: u(m.value++, c), params: [c], typings: ["none"] };
    }));
  }
  mapInlineParam(e, { escapeString: t }) {
    if (e === null)
      return "null";
    if (typeof e == "number" || typeof e == "boolean")
      return e.toString();
    if (typeof e == "string")
      return t(e);
    if (typeof e == "object") {
      const s = e.toString();
      return t(s === "[object Object]" ? JSON.stringify(e) : s);
    }
    throw new Error("Unexpected param value: " + e);
  }
  getSQL() {
    return this;
  }
  as(e) {
    return e === void 0 ? this : new G.Aliased(this, e);
  }
  mapWith(e) {
    return this.decoder = typeof e == "function" ? { mapFromDriverValue: e } : e, this;
  }
  inlineParams() {
    return this.shouldInlineParams = !0, this;
  }
  /**
   * This method is used to conditionally include a part of the query.
   *
   * @param condition - Condition to check
   * @returns itself if the condition is `true`, otherwise `undefined`
   */
  if(e) {
    return e ? this : void 0;
  }
};
n(G, bt, "SQL");
let y = G;
var St;
St = l;
class ue {
  constructor(e) {
    n(this, "brand");
    this.value = e;
  }
  getSQL() {
    return new y([this]);
  }
}
n(ue, St, "Name");
function pa(i) {
  return typeof i == "object" && i !== null && "mapToDriverValue" in i && typeof i.mapToDriverValue == "function";
}
const qr = {
  mapFromDriverValue: (i) => i
}, Dr = {
  mapToDriverValue: (i) => i
};
({
  ...qr,
  ...Dr
});
var Pt;
Pt = l;
class Y {
  /**
   * @param value - Parameter value
   * @param encoder - Encoder to convert the value to a driver parameter
   */
  constructor(e, t = Dr) {
    n(this, "brand");
    this.value = e, this.encoder = t;
  }
  getSQL() {
    return new y([this]);
  }
}
n(Y, Pt, "Param");
function r(i, ...e) {
  const t = [];
  (e.length > 0 || i.length > 0 && i[0] !== "") && t.push(new D(i[0]));
  for (const [s, o] of e.entries())
    t.push(o, new D(i[s + 1]));
  return new y(t);
}
((i) => {
  function e() {
    return new y([]);
  }
  i.empty = e;
  function t(f) {
    return new y(f);
  }
  i.fromList = t;
  function s(f) {
    return new y([new D(f)]);
  }
  i.raw = s;
  function o(f, m) {
    const c = [];
    for (const [N, g] of f.entries())
      N > 0 && m !== void 0 && c.push(m), c.push(g);
    return new y(c);
  }
  i.join = o;
  function a(f) {
    return new ue(f);
  }
  i.identifier = a;
  function u(f) {
    return new k(f);
  }
  i.placeholder = u;
  function d(f, m) {
    return new Y(f, m);
  }
  i.param = d;
})(r || (r = {}));
((i) => {
  var t;
  t = l;
  const s = class s {
    constructor(a, u) {
      /** @internal */
      n(this, "isSelectionField", !1);
      this.sql = a, this.fieldAlias = u;
    }
    getSQL() {
      return this.sql;
    }
    /** @internal */
    clone() {
      return new s(this.sql, this.fieldAlias);
    }
  };
  n(s, t, "SQL.Aliased");
  let e = s;
  i.Aliased = e;
})(y || (y = {}));
var $t;
$t = l;
class k {
  constructor(e) {
    this.name = e;
  }
  getSQL() {
    return new y([this]);
  }
}
n(k, $t, "Placeholder");
var Tt, Nt;
Nt = l, Tt = F;
class J {
  constructor({ name: e, schema: t, selectedFields: s, query: o }) {
    /** @internal */
    n(this, Tt);
    this[F] = {
      name: e,
      originalName: e,
      schema: t,
      selectedFields: s,
      query: o,
      isExisting: !o,
      isAlias: !1
    };
  }
  getSQL() {
    return new y([this]);
  }
}
n(J, Nt, "View");
A.prototype.getSQL = function() {
  return new y([this]);
};
w.prototype.getSQL = function() {
  return new y([this]);
};
U.prototype.getSQL = function() {
  return new y([this]);
};
var xt;
xt = l;
class ee {
  constructor(e) {
    this.table = e;
  }
  get(e, t) {
    return t === "table" ? this.table : e[t];
  }
}
n(ee, xt, "ColumnAliasProxyHandler");
var vt;
vt = l;
class pe {
  constructor(e, t) {
    this.alias = e, this.replaceOriginalName = t;
  }
  get(e, t) {
    if (t === w.Symbol.IsAlias)
      return !0;
    if (t === w.Symbol.Name)
      return this.alias;
    if (this.replaceOriginalName && t === w.Symbol.OriginalName)
      return this.alias;
    if (t === F)
      return {
        ...e[F],
        name: this.alias,
        isAlias: !0
      };
    if (t === w.Symbol.Columns) {
      const o = e[w.Symbol.Columns];
      if (!o)
        return o;
      const a = {};
      return Object.keys(o).map((u) => {
        a[u] = new Proxy(
          o[u],
          new ee(new Proxy(e, this))
        );
      }), a;
    }
    const s = e[t];
    return h(s, A) ? new Proxy(s, new ee(new Proxy(e, this))) : s;
  }
}
n(pe, vt, "TableAliasProxyHandler");
function be(i, e) {
  return new Proxy(i, new pe(e, !1));
}
function K(i, e) {
  return new Proxy(
    i,
    new ee(new Proxy(i.table, new pe(e, !1)))
  );
}
function Cr(i, e) {
  return new y.Aliased(ce(i.sql, e), i.fieldAlias);
}
function ce(i, e) {
  return r.join(i.queryChunks.map((t) => h(t, A) ? K(t, e) : h(t, y) ? ce(t, e) : h(t, y.Aliased) ? Cr(t, e) : t));
}
var Bt, qt;
class Or extends (qt = Error, Bt = l, qt) {
  constructor({ message: e, cause: t }) {
    super(e), this.name = "DrizzleError", this.cause = t;
  }
}
n(Or, Bt, "DrizzleError");
function z(i, e) {
  return pa(e) && !Br(i) && !h(i, Y) && !h(i, k) && !h(i, A) && !h(i, w) && !h(i, J) ? new Y(i, e) : i;
}
const Fr = (i, e) => r`${i} = ${z(e, i)}`, ya = (i, e) => r`${i} <> ${z(e, i)}`;
function xe(...i) {
  const e = i.filter(
    (t) => t !== void 0
  );
  if (e.length !== 0)
    return e.length === 1 ? new y(e) : new y([
      new D("("),
      r.join(e, new D(" and ")),
      new D(")")
    ]);
}
function wa(...i) {
  const e = i.filter(
    (t) => t !== void 0
  );
  if (e.length !== 0)
    return e.length === 1 ? new y(e) : new y([
      new D("("),
      r.join(e, new D(" or ")),
      new D(")")
    ]);
}
function ba(i) {
  return r`not ${i}`;
}
const Sa = (i, e) => r`${i} > ${z(e, i)}`, Pa = (i, e) => r`${i} >= ${z(e, i)}`, $a = (i, e) => r`${i} < ${z(e, i)}`, Ta = (i, e) => r`${i} <= ${z(e, i)}`;
function Na(i, e) {
  return Array.isArray(e) ? e.length === 0 ? r`false` : r`${i} in ${e.map((t) => z(t, i))}` : r`${i} in ${z(e, i)}`;
}
function xa(i, e) {
  return Array.isArray(e) ? e.length === 0 ? r`true` : r`${i} not in ${e.map((t) => z(t, i))}` : r`${i} not in ${z(e, i)}`;
}
function va(i) {
  return r`${i} is null`;
}
function Ba(i) {
  return r`${i} is not null`;
}
function qa(i) {
  return r`exists ${i}`;
}
function Da(i) {
  return r`not exists ${i}`;
}
function Ca(i, e, t) {
  return r`${i} between ${z(e, i)} and ${z(
    t,
    i
  )}`;
}
function Oa(i, e, t) {
  return r`${i} not between ${z(
    e,
    i
  )} and ${z(t, i)}`;
}
function Fa(i, e) {
  return r`${i} like ${e}`;
}
function Qa(i, e) {
  return r`${i} not like ${e}`;
}
function Va(i, e) {
  return r`${i} ilike ${e}`;
}
function La(i, e) {
  return r`${i} not ilike ${e}`;
}
function ja(i) {
  return r`${i} asc`;
}
function Aa(i) {
  return r`${i} desc`;
}
var Dt, Ct;
Ct = l, Dt = Symbol.toStringTag;
class Qr {
  constructor() {
    n(this, Dt, "QueryPromise");
  }
  catch(e) {
    return this.then(void 0, e);
  }
  finally(e) {
    return this.then(
      (t) => (e == null || e(), t),
      (t) => {
        throw e == null || e(), t;
      }
    );
  }
  then(e, t) {
    return this.execute().then(e, t);
  }
}
n(Qr, Ct, "QueryPromise");
function de(i, e) {
  return Object.entries(i).reduce((t, [s, o]) => {
    if (typeof s != "string")
      return t;
    const a = e ? [...e, s] : [s];
    return h(o, A) || h(o, y) || h(o, y.Aliased) ? t.push({ path: a, field: o }) : h(o, w) ? t.push(...de(o[w.Symbol.Columns], a)) : t.push(...de(o, a)), t;
  }, []);
}
function Vr(i, e) {
  const t = Object.keys(i), s = Object.keys(e);
  if (t.length !== s.length)
    return !1;
  for (const [o, a] of t.entries())
    if (a !== s[o])
      return !1;
  return !0;
}
function za(i, e) {
  for (const t of e)
    for (const s of Object.getOwnPropertyNames(t.prototype))
      s !== "constructor" && Object.defineProperty(
        i.prototype,
        s,
        Object.getOwnPropertyDescriptor(t.prototype, s) || /* @__PURE__ */ Object.create(null)
      );
}
function qe(i) {
  return i[w.Symbol.Columns];
}
function Me(i) {
  return h(i, U) ? i._.alias : h(i, J) ? i[F].name : h(i, y) ? void 0 : i[w.Symbol.IsAlias] ? i[w.Symbol.Name] : i[w.Symbol.BaseName];
}
function C(i, e) {
  return {
    name: typeof i == "string" && i.length > 0 ? i : "",
    config: typeof i == "object" ? i : e
  };
}
var Ot, Ft;
class ne extends (Ft = $, Ot = l, Ft) {
  generatedAlwaysAsIdentity(e) {
    if (e) {
      const { name: t, ...s } = e;
      this.config.generatedIdentity = {
        type: "always",
        sequenceName: t,
        sequenceOptions: s
      };
    } else
      this.config.generatedIdentity = {
        type: "always"
      };
    return this.config.hasDefault = !0, this.config.notNull = !0, this;
  }
  generatedByDefaultAsIdentity(e) {
    if (e) {
      const { name: t, ...s } = e;
      this.config.generatedIdentity = {
        type: "byDefault",
        sequenceName: t,
        sequenceOptions: s
      };
    } else
      this.config.generatedIdentity = {
        type: "byDefault"
      };
    return this.config.hasDefault = !0, this.config.notNull = !0, this;
  }
}
n(ne, Ot, "PgIntColumnBaseBuilder");
var Qt, Vt;
class Lr extends (Vt = ne, Qt = l, Vt) {
  constructor(e) {
    super(e, "number", "PgBigInt53");
  }
  /** @internal */
  build(e) {
    return new jr(e, this.config);
  }
}
n(Lr, Qt, "PgBigInt53Builder");
var Lt, jt;
class jr extends (jt = p, Lt = l, jt) {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
n(jr, Lt, "PgBigInt53");
var At, zt;
class Ar extends (zt = ne, At = l, zt) {
  constructor(e) {
    super(e, "bigint", "PgBigInt64");
  }
  /** @internal */
  build(e) {
    return new zr(
      e,
      this.config
    );
  }
}
n(Ar, At, "PgBigInt64Builder");
var It, Et;
class zr extends (Et = p, It = l, Et) {
  getSQLType() {
    return "bigint";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
n(zr, It, "PgBigInt64");
function Ia(i, e) {
  const { name: t, config: s } = C(i, e);
  return s.mode === "number" ? new Lr(t) : new Ar(t);
}
var Ut, _t;
class Ir extends (_t = $, Ut = l, _t) {
  constructor(e) {
    super(e, "number", "PgBigSerial53"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new Er(
      e,
      this.config
    );
  }
}
n(Ir, Ut, "PgBigSerial53Builder");
var Kt, Mt;
class Er extends (Mt = p, Kt = l, Mt) {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
n(Er, Kt, "PgBigSerial53");
var Rt, Jt;
class Ur extends (Jt = $, Rt = l, Jt) {
  constructor(e) {
    super(e, "bigint", "PgBigSerial64"), this.config.hasDefault = !0;
  }
  /** @internal */
  build(e) {
    return new _r(
      e,
      this.config
    );
  }
}
n(Ur, Rt, "PgBigSerial64Builder");
var Wt, Gt;
class _r extends (Gt = p, Wt = l, Gt) {
  getSQLType() {
    return "bigserial";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
n(_r, Wt, "PgBigSerial64");
function Ea(i, e) {
  const { name: t, config: s } = C(i, e);
  return s.mode === "number" ? new Ir(t) : new Ur(t);
}
var Ht, Yt;
class Kr extends (Yt = $, Ht = l, Yt) {
  constructor(e) {
    super(e, "boolean", "PgBoolean");
  }
  /** @internal */
  build(e) {
    return new Mr(e, this.config);
  }
}
n(Kr, Ht, "PgBooleanBuilder");
var Xt, Zt;
class Mr extends (Zt = p, Xt = l, Zt) {
  getSQLType() {
    return "boolean";
  }
}
n(Mr, Xt, "PgBoolean");
function Ua(i) {
  return new Kr(i ?? "");
}
var kt, ei;
class Rr extends (ei = $, kt = l, ei) {
  constructor(e, t) {
    super(e, "string", "PgChar"), this.config.length = t.length, this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new Jr(e, this.config);
  }
}
n(Rr, kt, "PgCharBuilder");
var ti, ii;
class Jr extends (ii = p, ti = l, ii) {
  constructor() {
    super(...arguments);
    n(this, "length", this.config.length);
    n(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "char" : `char(${this.length})`;
  }
}
n(Jr, ti, "PgChar");
function _a(i, e = {}) {
  const { name: t, config: s } = C(i, e);
  return new Rr(t, s);
}
var si, ni;
class Wr extends (ni = $, si = l, ni) {
  constructor(e) {
    super(e, "string", "PgCidr");
  }
  /** @internal */
  build(e) {
    return new Gr(e, this.config);
  }
}
n(Wr, si, "PgCidrBuilder");
var ri, oi;
class Gr extends (oi = p, ri = l, oi) {
  getSQLType() {
    return "cidr";
  }
}
n(Gr, ri, "PgCidr");
function Ka(i) {
  return new Wr(i ?? "");
}
var ai, li;
class Hr extends (li = $, ai = l, li) {
  constructor(e, t, s) {
    super(e, "custom", "PgCustomColumn"), this.config.fieldConfig = t, this.config.customTypeParams = s;
  }
  /** @internal */
  build(e) {
    return new Yr(
      e,
      this.config
    );
  }
}
n(Hr, ai, "PgCustomColumnBuilder");
var ui, ci;
class Yr extends (ci = p, ui = l, ci) {
  constructor(t, s) {
    super(t, s);
    n(this, "sqlName");
    n(this, "mapTo");
    n(this, "mapFrom");
    this.sqlName = s.customTypeParams.dataType(s.fieldConfig), this.mapTo = s.customTypeParams.toDriver, this.mapFrom = s.customTypeParams.fromDriver;
  }
  getSQLType() {
    return this.sqlName;
  }
  mapFromDriverValue(t) {
    return typeof this.mapFrom == "function" ? this.mapFrom(t) : t;
  }
  mapToDriverValue(t) {
    return typeof this.mapTo == "function" ? this.mapTo(t) : t;
  }
}
n(Yr, ui, "PgCustomColumn");
function Ma(i) {
  return (e, t) => {
    const { name: s, config: o } = C(e, t);
    return new Hr(s, o, i);
  };
}
var di, hi;
class X extends (hi = $, di = l, hi) {
  defaultNow() {
    return this.default(r`now()`);
  }
}
n(X, di, "PgDateColumnBaseBuilder");
var fi, mi;
class Xr extends (mi = X, fi = l, mi) {
  constructor(e) {
    super(e, "date", "PgDate");
  }
  /** @internal */
  build(e) {
    return new De(e, this.config);
  }
}
n(Xr, fi, "PgDateBuilder");
var gi, pi;
class De extends (pi = p, gi = l, pi) {
  getSQLType() {
    return "date";
  }
  mapFromDriverValue(e) {
    return new Date(e);
  }
  mapToDriverValue(e) {
    return e.toISOString();
  }
}
n(De, gi, "PgDate");
var yi, wi;
class Zr extends (wi = X, yi = l, wi) {
  constructor(e) {
    super(e, "string", "PgDateString");
  }
  /** @internal */
  build(e) {
    return new Ce(
      e,
      this.config
    );
  }
}
n(Zr, yi, "PgDateStringBuilder");
var bi, Si;
class Ce extends (Si = p, bi = l, Si) {
  getSQLType() {
    return "date";
  }
}
n(Ce, bi, "PgDateString");
function Ra(i, e) {
  const { name: t, config: s } = C(i, e);
  return (s == null ? void 0 : s.mode) === "date" ? new Xr(t) : new Zr(t);
}
var Pi, $i;
class kr extends ($i = $, Pi = l, $i) {
  constructor(e) {
    super(e, "number", "PgDoublePrecision");
  }
  /** @internal */
  build(e) {
    return new eo(
      e,
      this.config
    );
  }
}
n(kr, Pi, "PgDoublePrecisionBuilder");
var Ti, Ni;
class eo extends (Ni = p, Ti = l, Ni) {
  getSQLType() {
    return "double precision";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseFloat(e) : e;
  }
}
n(eo, Ti, "PgDoublePrecision");
function Ja(i) {
  return new kr(i ?? "");
}
var xi, vi;
class to extends (vi = $, xi = l, vi) {
  constructor(e) {
    super(e, "string", "PgInet");
  }
  /** @internal */
  build(e) {
    return new io(e, this.config);
  }
}
n(to, xi, "PgInetBuilder");
var Bi, qi;
class io extends (qi = p, Bi = l, qi) {
  getSQLType() {
    return "inet";
  }
}
n(io, Bi, "PgInet");
function Wa(i) {
  return new to(i ?? "");
}
var Di, Ci;
class so extends (Ci = ne, Di = l, Ci) {
  constructor(e) {
    super(e, "number", "PgInteger");
  }
  /** @internal */
  build(e) {
    return new no(e, this.config);
  }
}
n(so, Di, "PgIntegerBuilder");
var Oi, Fi;
class no extends (Fi = p, Oi = l, Fi) {
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseInt(e) : e;
  }
}
n(no, Oi, "PgInteger");
function Ga(i) {
  return new so(i ?? "");
}
var Qi, Vi;
class ro extends (Vi = $, Qi = l, Vi) {
  constructor(e, t) {
    super(e, "string", "PgInterval"), this.config.intervalConfig = t;
  }
  /** @internal */
  build(e) {
    return new oo(e, this.config);
  }
}
n(ro, Qi, "PgIntervalBuilder");
var Li, ji;
class oo extends (ji = p, Li = l, ji) {
  constructor() {
    super(...arguments);
    n(this, "fields", this.config.intervalConfig.fields);
    n(this, "precision", this.config.intervalConfig.precision);
  }
  getSQLType() {
    const t = this.fields ? ` ${this.fields}` : "", s = this.precision ? `(${this.precision})` : "";
    return `interval${t}${s}`;
  }
}
n(oo, Li, "PgInterval");
function Ha(i, e = {}) {
  const { name: t, config: s } = C(i, e);
  return new ro(t, s);
}
var Ai, zi;
class ao extends (zi = $, Ai = l, zi) {
  constructor(e) {
    super(e, "json", "PgJson");
  }
  /** @internal */
  build(e) {
    return new Oe(e, this.config);
  }
}
n(ao, Ai, "PgJsonBuilder");
var Ii, Ei;
class Oe extends (Ei = p, Ii = l, Ei) {
  constructor(e, t) {
    super(e, t);
  }
  getSQLType() {
    return "json";
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  }
}
n(Oe, Ii, "PgJson");
function Ya(i) {
  return new ao(i ?? "");
}
var Ui, _i;
class lo extends (_i = $, Ui = l, _i) {
  constructor(e) {
    super(e, "json", "PgJsonb");
  }
  /** @internal */
  build(e) {
    return new Fe(e, this.config);
  }
}
n(lo, Ui, "PgJsonbBuilder");
var Ki, Mi;
class Fe extends (Mi = p, Ki = l, Mi) {
  constructor(e, t) {
    super(e, t);
  }
  getSQLType() {
    return "jsonb";
  }
  mapToDriverValue(e) {
    return JSON.stringify(e);
  }
  mapFromDriverValue(e) {
    if (typeof e == "string")
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    return e;
  }
}
n(Fe, Ki, "PgJsonb");
function Xa(i) {
  return new lo(i ?? "");
}
var Ri, Ji;
class uo extends (Ji = $, Ri = l, Ji) {
  constructor(e) {
    super(e, "array", "PgLine");
  }
  /** @internal */
  build(e) {
    return new co(
      e,
      this.config
    );
  }
}
n(uo, Ri, "PgLineBuilder");
var Wi, Gi;
class co extends (Gi = p, Wi = l, Gi) {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(e) {
    const [t, s, o] = e.slice(1, -1).split(",");
    return [Number.parseFloat(t), Number.parseFloat(s), Number.parseFloat(o)];
  }
  mapToDriverValue(e) {
    return `{${e[0]},${e[1]},${e[2]}}`;
  }
}
n(co, Wi, "PgLine");
var Hi, Yi;
class ho extends (Yi = $, Hi = l, Yi) {
  constructor(e) {
    super(e, "json", "PgLineABC");
  }
  /** @internal */
  build(e) {
    return new fo(
      e,
      this.config
    );
  }
}
n(ho, Hi, "PgLineABCBuilder");
var Xi, Zi;
class fo extends (Zi = p, Xi = l, Zi) {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(e) {
    const [t, s, o] = e.slice(1, -1).split(",");
    return { a: Number.parseFloat(t), b: Number.parseFloat(s), c: Number.parseFloat(o) };
  }
  mapToDriverValue(e) {
    return `{${e.a},${e.b},${e.c}}`;
  }
}
n(fo, Xi, "PgLineABC");
function Za(i, e) {
  const { name: t, config: s } = C(i, e);
  return !(s != null && s.mode) || s.mode === "tuple" ? new uo(t) : new ho(t);
}
var ki, es;
class mo extends (es = $, ki = l, es) {
  constructor(e) {
    super(e, "string", "PgMacaddr");
  }
  /** @internal */
  build(e) {
    return new go(e, this.config);
  }
}
n(mo, ki, "PgMacaddrBuilder");
var ts, is;
class go extends (is = p, ts = l, is) {
  getSQLType() {
    return "macaddr";
  }
}
n(go, ts, "PgMacaddr");
function ka(i) {
  return new mo(i ?? "");
}
var ss, ns;
class po extends (ns = $, ss = l, ns) {
  constructor(e) {
    super(e, "string", "PgMacaddr8");
  }
  /** @internal */
  build(e) {
    return new yo(e, this.config);
  }
}
n(po, ss, "PgMacaddr8Builder");
var rs, os;
class yo extends (os = p, rs = l, os) {
  getSQLType() {
    return "macaddr8";
  }
}
n(yo, rs, "PgMacaddr8");
function el(i) {
  return new po(i ?? "");
}
var as, ls;
class wo extends (ls = $, as = l, ls) {
  constructor(e, t, s) {
    super(e, "string", "PgNumeric"), this.config.precision = t, this.config.scale = s;
  }
  /** @internal */
  build(e) {
    return new Qe(e, this.config);
  }
}
n(wo, as, "PgNumericBuilder");
var us, cs;
class Qe extends (cs = p, us = l, cs) {
  constructor(t, s) {
    super(t, s);
    n(this, "precision");
    n(this, "scale");
    this.precision = s.precision, this.scale = s.scale;
  }
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
n(Qe, us, "PgNumeric");
function tl(i, e) {
  const { name: t, config: s } = C(i, e);
  return new wo(t, s == null ? void 0 : s.precision, s == null ? void 0 : s.scale);
}
var ds, hs;
class bo extends (hs = $, ds = l, hs) {
  constructor(e) {
    super(e, "array", "PgPointTuple");
  }
  /** @internal */
  build(e) {
    return new So(
      e,
      this.config
    );
  }
}
n(bo, ds, "PgPointTupleBuilder");
var fs, ms;
class So extends (ms = p, fs = l, ms) {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") {
      const [t, s] = e.slice(1, -1).split(",");
      return [Number.parseFloat(t), Number.parseFloat(s)];
    }
    return [e.x, e.y];
  }
  mapToDriverValue(e) {
    return `(${e[0]},${e[1]})`;
  }
}
n(So, fs, "PgPointTuple");
var gs, ps;
class Po extends (ps = $, gs = l, ps) {
  constructor(e) {
    super(e, "json", "PgPointObject");
  }
  /** @internal */
  build(e) {
    return new $o(
      e,
      this.config
    );
  }
}
n(Po, gs, "PgPointObjectBuilder");
var ys, ws;
class $o extends (ws = p, ys = l, ws) {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") {
      const [t, s] = e.slice(1, -1).split(",");
      return { x: Number.parseFloat(t), y: Number.parseFloat(s) };
    }
    return e;
  }
  mapToDriverValue(e) {
    return `(${e.x},${e.y})`;
  }
}
n($o, ys, "PgPointObject");
function il(i, e) {
  const { name: t, config: s } = C(i, e);
  return !(s != null && s.mode) || s.mode === "tuple" ? new bo(t) : new Po(t);
}
function sl(i) {
  const e = [];
  for (let t = 0; t < i.length; t += 2)
    e.push(Number.parseInt(i.slice(t, t + 2), 16));
  return new Uint8Array(e);
}
function Re(i, e) {
  const t = new ArrayBuffer(8), s = new DataView(t);
  for (let o = 0; o < 8; o++)
    s.setUint8(o, i[e + o]);
  return s.getFloat64(0, !0);
}
function To(i) {
  const e = sl(i);
  let t = 0;
  const s = e[t];
  t += 1;
  const o = new DataView(e.buffer), a = o.getUint32(t, s === 1);
  if (t += 4, a & 536870912 && (o.getUint32(t, s === 1), t += 4), (a & 65535) === 1) {
    const u = Re(e, t);
    t += 8;
    const d = Re(e, t);
    return t += 8, [u, d];
  }
  throw new Error("Unsupported geometry type");
}
var bs, Ss;
class No extends (Ss = $, bs = l, Ss) {
  constructor(e) {
    super(e, "array", "PgGeometry");
  }
  /** @internal */
  build(e) {
    return new xo(
      e,
      this.config
    );
  }
}
n(No, bs, "PgGeometryBuilder");
var Ps, $s;
class xo extends ($s = p, Ps = l, $s) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    return To(e);
  }
  mapToDriverValue(e) {
    return `point(${e[0]} ${e[1]})`;
  }
}
n(xo, Ps, "PgGeometry");
var Ts, Ns;
class vo extends (Ns = $, Ts = l, Ns) {
  constructor(e) {
    super(e, "json", "PgGeometryObject");
  }
  /** @internal */
  build(e) {
    return new Bo(
      e,
      this.config
    );
  }
}
n(vo, Ts, "PgGeometryObjectBuilder");
var xs, vs;
class Bo extends (vs = p, xs = l, vs) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    const t = To(e);
    return { x: t[0], y: t[1] };
  }
  mapToDriverValue(e) {
    return `point(${e.x} ${e.y})`;
  }
}
n(Bo, xs, "PgGeometryObject");
function nl(i, e) {
  const { name: t, config: s } = C(i, e);
  return !(s != null && s.mode) || s.mode === "tuple" ? new No(t) : new vo(t);
}
var Bs, qs;
class qo extends (qs = $, Bs = l, qs) {
  constructor(e, t) {
    super(e, "number", "PgReal"), this.config.length = t;
  }
  /** @internal */
  build(e) {
    return new Do(e, this.config);
  }
}
n(qo, Bs, "PgRealBuilder");
var Ds, Cs;
class Do extends (Cs = p, Ds = l, Cs) {
  constructor(t, s) {
    super(t, s);
    n(this, "mapFromDriverValue", (t) => typeof t == "string" ? Number.parseFloat(t) : t);
  }
  getSQLType() {
    return "real";
  }
}
n(Do, Ds, "PgReal");
function rl(i) {
  return new qo(i ?? "");
}
var Os, Fs;
class Co extends (Fs = $, Os = l, Fs) {
  constructor(e) {
    super(e, "number", "PgSerial"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new Oo(e, this.config);
  }
}
n(Co, Os, "PgSerialBuilder");
var Qs, Vs;
class Oo extends (Vs = p, Qs = l, Vs) {
  getSQLType() {
    return "serial";
  }
}
n(Oo, Qs, "PgSerial");
function ol(i) {
  return new Co(i ?? "");
}
var Ls, js;
class Fo extends (js = ne, Ls = l, js) {
  constructor(e) {
    super(e, "number", "PgSmallInt");
  }
  /** @internal */
  build(e) {
    return new Qo(e, this.config);
  }
}
n(Fo, Ls, "PgSmallIntBuilder");
var As, zs;
class Qo extends (zs = p, As = l, zs) {
  constructor() {
    super(...arguments);
    n(this, "mapFromDriverValue", (t) => typeof t == "string" ? Number(t) : t);
  }
  getSQLType() {
    return "smallint";
  }
}
n(Qo, As, "PgSmallInt");
function al(i) {
  return new Fo(i ?? "");
}
var Is, Es;
class Vo extends (Es = $, Is = l, Es) {
  constructor(e) {
    super(e, "number", "PgSmallSerial"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new Lo(
      e,
      this.config
    );
  }
}
n(Vo, Is, "PgSmallSerialBuilder");
var Us, _s;
class Lo extends (_s = p, Us = l, _s) {
  getSQLType() {
    return "smallserial";
  }
}
n(Lo, Us, "PgSmallSerial");
function ll(i) {
  return new Vo(i ?? "");
}
var Ks, Ms;
class jo extends (Ms = $, Ks = l, Ms) {
  constructor(e, t) {
    super(e, "string", "PgText"), this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new Ao(e, this.config);
  }
}
n(jo, Ks, "PgTextBuilder");
var Rs, Js;
class Ao extends (Js = p, Rs = l, Js) {
  constructor() {
    super(...arguments);
    n(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return "text";
  }
}
n(Ao, Rs, "PgText");
function ul(i, e = {}) {
  const { name: t, config: s } = C(i, e);
  return new jo(t, s);
}
var Ws, Gs;
class zo extends (Gs = X, Ws = l, Gs) {
  constructor(e, t, s) {
    super(e, "string", "PgTime"), this.withTimezone = t, this.precision = s, this.config.withTimezone = t, this.config.precision = s;
  }
  /** @internal */
  build(e) {
    return new Ve(e, this.config);
  }
}
n(zo, Ws, "PgTimeBuilder");
var Hs, Ys;
class Ve extends (Ys = p, Hs = l, Ys) {
  constructor(t, s) {
    super(t, s);
    n(this, "withTimezone");
    n(this, "precision");
    this.withTimezone = s.withTimezone, this.precision = s.precision;
  }
  getSQLType() {
    return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
n(Ve, Hs, "PgTime");
function cl(i, e = {}) {
  const { name: t, config: s } = C(i, e);
  return new zo(t, s.withTimezone ?? !1, s.precision);
}
var Xs, Zs;
class Io extends (Zs = X, Xs = l, Zs) {
  constructor(e, t, s) {
    super(e, "date", "PgTimestamp"), this.config.withTimezone = t, this.config.precision = s;
  }
  /** @internal */
  build(e) {
    return new Le(e, this.config);
  }
}
n(Io, Xs, "PgTimestampBuilder");
var ks, en;
class Le extends (en = p, ks = l, en) {
  constructor(t, s) {
    super(t, s);
    n(this, "withTimezone");
    n(this, "precision");
    n(this, "mapFromDriverValue", (t) => new Date(this.withTimezone ? t : t + "+0000"));
    n(this, "mapToDriverValue", (t) => t.toISOString());
    this.withTimezone = s.withTimezone, this.precision = s.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
n(Le, ks, "PgTimestamp");
var tn, sn;
class Eo extends (sn = X, tn = l, sn) {
  constructor(e, t, s) {
    super(e, "string", "PgTimestampString"), this.config.withTimezone = t, this.config.precision = s;
  }
  /** @internal */
  build(e) {
    return new je(
      e,
      this.config
    );
  }
}
n(Eo, tn, "PgTimestampStringBuilder");
var nn, rn;
class je extends (rn = p, nn = l, rn) {
  constructor(t, s) {
    super(t, s);
    n(this, "withTimezone");
    n(this, "precision");
    this.withTimezone = s.withTimezone, this.precision = s.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
n(je, nn, "PgTimestampString");
function dl(i, e = {}) {
  const { name: t, config: s } = C(i, e);
  return (s == null ? void 0 : s.mode) === "string" ? new Eo(t, s.withTimezone ?? !1, s.precision) : new Io(t, (s == null ? void 0 : s.withTimezone) ?? !1, s == null ? void 0 : s.precision);
}
var on, an;
class Uo extends (an = $, on = l, an) {
  constructor(e) {
    super(e, "string", "PgUUID");
  }
  /**
   * Adds `default gen_random_uuid()` to the column definition.
   */
  defaultRandom() {
    return this.default(r`gen_random_uuid()`);
  }
  /** @internal */
  build(e) {
    return new Ae(e, this.config);
  }
}
n(Uo, on, "PgUUIDBuilder");
var ln, un;
class Ae extends (un = p, ln = l, un) {
  getSQLType() {
    return "uuid";
  }
}
n(Ae, ln, "PgUUID");
function hl(i) {
  return new Uo(i ?? "");
}
var cn, dn;
class _o extends (dn = $, cn = l, dn) {
  constructor(e, t) {
    super(e, "string", "PgVarchar"), this.config.length = t.length, this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new Ko(e, this.config);
  }
}
n(_o, cn, "PgVarcharBuilder");
var hn, fn;
class Ko extends (fn = p, hn = l, fn) {
  constructor() {
    super(...arguments);
    n(this, "length", this.config.length);
    n(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "varchar" : `varchar(${this.length})`;
  }
}
n(Ko, hn, "PgVarchar");
function fl(i, e = {}) {
  const { name: t, config: s } = C(i, e);
  return new _o(t, s);
}
var mn, gn;
class Mo extends (gn = $, mn = l, gn) {
  constructor(e, t) {
    super(e, "string", "PgBinaryVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Ro(
      e,
      this.config
    );
  }
}
n(Mo, mn, "PgBinaryVectorBuilder");
var pn, yn;
class Ro extends (yn = p, pn = l, yn) {
  constructor() {
    super(...arguments);
    n(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `bit(${this.dimensions})`;
  }
}
n(Ro, pn, "PgBinaryVector");
function ml(i, e) {
  const { name: t, config: s } = C(i, e);
  return new Mo(t, s);
}
var wn, bn;
class Jo extends (bn = $, wn = l, bn) {
  constructor(e, t) {
    super(e, "array", "PgHalfVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Wo(
      e,
      this.config
    );
  }
}
n(Jo, wn, "PgHalfVectorBuilder");
var Sn, Pn;
class Wo extends (Pn = p, Sn = l, Pn) {
  constructor() {
    super(...arguments);
    n(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `halfvec(${this.dimensions})`;
  }
  mapToDriverValue(t) {
    return JSON.stringify(t);
  }
  mapFromDriverValue(t) {
    return t.slice(1, -1).split(",").map((s) => Number.parseFloat(s));
  }
}
n(Wo, Sn, "PgHalfVector");
function gl(i, e) {
  const { name: t, config: s } = C(i, e);
  return new Jo(t, s);
}
var $n, Tn;
class Go extends (Tn = $, $n = l, Tn) {
  constructor(e, t) {
    super(e, "string", "PgSparseVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Ho(
      e,
      this.config
    );
  }
}
n(Go, $n, "PgSparseVectorBuilder");
var Nn, xn;
class Ho extends (xn = p, Nn = l, xn) {
  constructor() {
    super(...arguments);
    n(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `sparsevec(${this.dimensions})`;
  }
}
n(Ho, Nn, "PgSparseVector");
function pl(i, e) {
  const { name: t, config: s } = C(i, e);
  return new Go(t, s);
}
var vn, Bn;
class Yo extends (Bn = $, vn = l, Bn) {
  constructor(e, t) {
    super(e, "array", "PgVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Xo(e, this.config);
  }
}
n(Yo, vn, "PgVectorBuilder");
var qn, Dn;
class Xo extends (Dn = p, qn = l, Dn) {
  constructor() {
    super(...arguments);
    n(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `vector(${this.dimensions})`;
  }
  mapToDriverValue(t) {
    return JSON.stringify(t);
  }
  mapFromDriverValue(t) {
    return t.slice(1, -1).split(",").map((s) => Number.parseFloat(s));
  }
}
n(Xo, qn, "PgVector");
function yl(i, e) {
  const { name: t, config: s } = C(i, e);
  return new Yo(t, s);
}
function wl() {
  return {
    bigint: Ia,
    bigserial: Ea,
    boolean: Ua,
    char: _a,
    cidr: Ka,
    customType: Ma,
    date: Ra,
    doublePrecision: Ja,
    inet: Wa,
    integer: Ga,
    interval: Ha,
    json: Ya,
    jsonb: Xa,
    line: Za,
    macaddr: ka,
    macaddr8: el,
    numeric: tl,
    point: il,
    geometry: nl,
    real: rl,
    serial: ol,
    smallint: al,
    smallserial: ll,
    text: ul,
    time: cl,
    timestamp: dl,
    uuid: hl,
    varchar: fl,
    bit: ml,
    halfvec: gl,
    sparsevec: pl,
    vector: yl
  };
}
const ve = Symbol.for("drizzle:PgInlineForeignKeys"), Je = Symbol.for("drizzle:EnableRLS");
var Cn, On, Fn, Qn, Vn;
class E extends (Vn = w, Qn = l, Fn = ve, On = Je, Cn = w.Symbol.ExtraConfigBuilder, Vn) {
  constructor() {
    super(...arguments);
    /**@internal */
    n(this, Fn, []);
    /** @internal */
    n(this, On, !1);
    /** @internal */
    n(this, Cn);
  }
}
n(E, Qn, "PgTable"), /** @internal */
n(E, "Symbol", Object.assign({}, w.Symbol, {
  InlineForeignKeys: ve,
  EnableRLS: Je
}));
function bl(i, e, t, s, o = i) {
  const a = new E(i, s, o), u = typeof e == "function" ? e(wl()) : e, d = Object.fromEntries(
    Object.entries(u).map(([c, N]) => {
      const g = N;
      g.setName(c);
      const b = g.build(a);
      return a[ve].push(...g.buildForeignKeys(b, a)), [c, b];
    })
  ), f = Object.fromEntries(
    Object.entries(u).map(([c, N]) => {
      const g = N;
      g.setName(c);
      const b = g.buildExtraConfigColumn(a);
      return [c, b];
    })
  ), m = Object.assign(a, d);
  return m[w.Symbol.Columns] = d, m[w.Symbol.ExtraConfigColumns] = f, t && (m[E.Symbol.ExtraConfigBuilder] = t), Object.assign(m, {
    enableRLS: () => (m[E.Symbol.EnableRLS] = !0, m)
  });
}
const Zo = (i, e, t) => bl(i, e, t, void 0);
var Ln;
Ln = l;
class ze {
  constructor(e, t, s) {
    n(this, "referencedTableName");
    n(this, "fieldName");
    this.sourceTable = e, this.referencedTable = t, this.relationName = s, this.referencedTableName = t[w.Symbol.Name];
  }
}
n(ze, Ln, "Relation");
var jn, An;
const fe = class fe extends (An = ze, jn = l, An) {
  constructor(e, t, s, o) {
    super(e, t, s == null ? void 0 : s.relationName), this.config = s, this.isNullable = o;
  }
  withFieldName(e) {
    const t = new fe(
      this.sourceTable,
      this.referencedTable,
      this.config,
      this.isNullable
    );
    return t.fieldName = e, t;
  }
};
n(fe, jn, "One");
let te = fe;
var zn, In;
const me = class me extends (In = ze, zn = l, In) {
  constructor(e, t, s) {
    super(e, t, s == null ? void 0 : s.relationName), this.config = s;
  }
  withFieldName(e) {
    const t = new me(
      this.sourceTable,
      this.referencedTable,
      this.config
    );
    return t.fieldName = e, t;
  }
};
n(me, zn, "Many");
let Be = me;
function Sl() {
  return {
    and: xe,
    between: Ca,
    eq: Fr,
    exists: qa,
    gt: Sa,
    gte: Pa,
    ilike: Va,
    inArray: Na,
    isNull: va,
    isNotNull: Ba,
    like: Fa,
    lt: $a,
    lte: Ta,
    ne: ya,
    not: ba,
    notBetween: Oa,
    notExists: Da,
    notLike: Qa,
    notIlike: La,
    notInArray: xa,
    or: wa,
    sql: r
  };
}
function Pl() {
  return {
    sql: r,
    asc: ja,
    desc: Aa
  };
}
function $l(i, e, t) {
  if (h(t, te) && t.config)
    return {
      fields: t.config.fields,
      references: t.config.references
    };
  const s = e[Pe(t.referencedTable)];
  if (!s)
    throw new Error(
      `Table "${t.referencedTable[w.Symbol.Name]}" not found in schema`
    );
  const o = i[s];
  if (!o)
    throw new Error(`Table "${s}" not found in schema`);
  const a = t.sourceTable, u = e[Pe(a)];
  if (!u)
    throw new Error(
      `Table "${a[w.Symbol.Name]}" not found in schema`
    );
  const d = [];
  for (const f of Object.values(
    o.relations
  ))
    (t.relationName && t !== f && f.relationName === t.relationName || !t.relationName && f.referencedTable === t.sourceTable) && d.push(f);
  if (d.length > 1)
    throw t.relationName ? new Error(
      `There are multiple relations with name "${t.relationName}" in table "${s}"`
    ) : new Error(
      `There are multiple relations between "${s}" and "${t.sourceTable[w.Symbol.Name]}". Please specify relation name`
    );
  if (d[0] && h(d[0], te) && d[0].config)
    return {
      fields: d[0].config.references,
      references: d[0].config.fields
    };
  throw new Error(
    `There is not enough information to infer relation "${u}.${t.fieldName}"`
  );
}
var En, Un;
class re extends (Un = J, En = l, Un) {
}
n(re, En, "PgViewBase");
var _n;
_n = l;
class le {
  constructor(e) {
    /** @internal */
    n(this, "casing");
    this.casing = new ca(e == null ? void 0 : e.casing);
  }
  async migrate(e, t, s) {
    const o = typeof s == "string" ? "__drizzle_migrations" : s.migrationsTable ?? "__drizzle_migrations", a = typeof s == "string" ? "drizzle" : s.migrationsSchema ?? "drizzle", u = r`
			CREATE TABLE IF NOT EXISTS ${r.identifier(a)}.${r.identifier(o)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
    await t.execute(r`CREATE SCHEMA IF NOT EXISTS ${r.identifier(a)}`), await t.execute(u);
    const f = (await t.all(
      r`select id, hash, created_at from ${r.identifier(a)}.${r.identifier(o)} order by created_at desc limit 1`
    ))[0];
    await t.transaction(async (m) => {
      for await (const c of e)
        if (!f || Number(f.created_at) < c.folderMillis) {
          for (const N of c.sql)
            await m.execute(r.raw(N));
          await m.execute(
            r`insert into ${r.identifier(a)}.${r.identifier(o)} ("hash", "created_at") values(${c.hash}, ${c.folderMillis})`
          );
        }
    });
  }
  escapeName(e) {
    return `"${e}"`;
  }
  escapeParam(e) {
    return `$${e + 1}`;
  }
  escapeString(e) {
    return `'${e.replace(/'/g, "''")}'`;
  }
  buildWithCTE(e) {
    if (!(e != null && e.length))
      return;
    const t = [r`with `];
    for (const [s, o] of e.entries())
      t.push(r`${r.identifier(o._.alias)} as (${o._.sql})`), s < e.length - 1 && t.push(r`, `);
    return t.push(r` `), r.join(t);
  }
  buildDeleteQuery({ table: e, where: t, returning: s, withList: o }) {
    const a = this.buildWithCTE(o), u = s ? r` returning ${this.buildSelection(s, { isSingleTable: !0 })}` : void 0, d = t ? r` where ${t}` : void 0;
    return r`${a}delete from ${e}${d}${u}`;
  }
  buildUpdateSet(e, t) {
    const s = e[w.Symbol.Columns], o = Object.keys(s).filter(
      (u) => {
        var d;
        return t[u] !== void 0 || ((d = s[u]) == null ? void 0 : d.onUpdateFn) !== void 0;
      }
    ), a = o.length;
    return r.join(o.flatMap((u, d) => {
      const f = s[u], m = t[u] ?? r.param(f.onUpdateFn(), f), c = r`${r.identifier(this.casing.getColumnCasing(f))} = ${m}`;
      return d < a - 1 ? [c, r.raw(", ")] : [c];
    }));
  }
  buildUpdateQuery({ table: e, set: t, where: s, returning: o, withList: a, from: u, joins: d }) {
    const f = this.buildWithCTE(a), m = e[E.Symbol.Name], c = e[E.Symbol.Schema], N = e[E.Symbol.OriginalName], g = m === N ? void 0 : m, b = r`${c ? r`${r.identifier(c)}.` : void 0}${r.identifier(N)}${g && r` ${r.identifier(g)}`}`, x = this.buildUpdateSet(e, t), v = u && r.join([r.raw(" from "), this.buildFromTable(u)]), B = this.buildJoins(d), T = o ? r` returning ${this.buildSelection(o, { isSingleTable: !u })}` : void 0, Q = s ? r` where ${s}` : void 0;
    return r`${f}update ${b} set ${x}${v}${B}${Q}${T}`;
  }
  /**
   * Builds selection SQL with provided fields/expressions
   *
   * Examples:
   *
   * `select <selection> from`
   *
   * `insert ... returning <selection>`
   *
   * If `isSingleTable` is true, then columns won't be prefixed with table name
   */
  buildSelection(e, { isSingleTable: t = !1 } = {}) {
    const s = e.length, o = e.flatMap(({ field: a }, u) => {
      const d = [];
      if (h(a, y.Aliased) && a.isSelectionField)
        d.push(r.identifier(a.fieldAlias));
      else if (h(a, y.Aliased) || h(a, y)) {
        const f = h(a, y.Aliased) ? a.sql : a;
        t ? d.push(
          new y(
            f.queryChunks.map((m) => h(m, p) ? r.identifier(this.casing.getColumnCasing(m)) : m)
          )
        ) : d.push(f), h(a, y.Aliased) && d.push(r` as ${r.identifier(a.fieldAlias)}`);
      } else h(a, A) && (t ? d.push(r.identifier(this.casing.getColumnCasing(a))) : d.push(a));
      return u < s - 1 && d.push(r`, `), d;
    });
    return r.join(o);
  }
  buildJoins(e) {
    if (!e || e.length === 0)
      return;
    const t = [];
    for (const [s, o] of e.entries()) {
      s === 0 && t.push(r` `);
      const a = o.table, u = o.lateral ? r` lateral` : void 0;
      if (h(a, E)) {
        const d = a[E.Symbol.Name], f = a[E.Symbol.Schema], m = a[E.Symbol.OriginalName], c = d === m ? void 0 : o.alias;
        t.push(
          r`${r.raw(o.joinType)} join${u} ${f ? r`${r.identifier(f)}.` : void 0}${r.identifier(m)}${c && r` ${r.identifier(c)}`} on ${o.on}`
        );
      } else if (h(a, J)) {
        const d = a[F].name, f = a[F].schema, m = a[F].originalName, c = d === m ? void 0 : o.alias;
        t.push(
          r`${r.raw(o.joinType)} join${u} ${f ? r`${r.identifier(f)}.` : void 0}${r.identifier(m)}${c && r` ${r.identifier(c)}`} on ${o.on}`
        );
      } else
        t.push(
          r`${r.raw(o.joinType)} join${u} ${a} on ${o.on}`
        );
      s < e.length - 1 && t.push(r` `);
    }
    return r.join(t);
  }
  buildFromTable(e) {
    if (h(e, w) && e[w.Symbol.OriginalName] !== e[w.Symbol.Name]) {
      let t = r`${r.identifier(e[w.Symbol.OriginalName])}`;
      return e[w.Symbol.Schema] && (t = r`${r.identifier(e[w.Symbol.Schema])}.${t}`), r`${t} ${r.identifier(e[w.Symbol.Name])}`;
    }
    return e;
  }
  buildSelectQuery({
    withList: e,
    fields: t,
    fieldsFlat: s,
    where: o,
    having: a,
    table: u,
    joins: d,
    orderBy: f,
    groupBy: m,
    limit: c,
    offset: N,
    lockingClause: g,
    distinct: b,
    setOperators: x
  }) {
    const v = s ?? de(t);
    for (const I of v)
      if (h(I.field, A) && ae(I.field.table) !== (h(u, U) ? u._.alias : h(u, re) ? u[F].name : h(u, y) ? void 0 : ae(u)) && !((_) => d == null ? void 0 : d.some(
        ({ alias: we }) => we === (_[w.Symbol.IsAlias] ? ae(_) : _[w.Symbol.BaseName])
      ))(I.field.table)) {
        const _ = ae(I.field.table);
        throw new Error(
          `Your "${I.path.join("->")}" field references a column "${_}"."${I.field.name}", but the table "${_}" is not part of the query! Did you forget to join it?`
        );
      }
    const B = !d || d.length === 0, T = this.buildWithCTE(e);
    let Q;
    b && (Q = b === !0 ? r` distinct` : r` distinct on (${r.join(b.on, r`, `)})`);
    const j = this.buildSelection(v, { isSingleTable: B }), q = this.buildFromTable(u), M = this.buildJoins(d), V = o ? r` where ${o}` : void 0, S = a ? r` having ${a}` : void 0;
    let P;
    f && f.length > 0 && (P = r` order by ${r.join(f, r`, `)}`);
    let O;
    m && m.length > 0 && (O = r` group by ${r.join(m, r`, `)}`);
    const oe = typeof c == "object" || typeof c == "number" && c >= 0 ? r` limit ${c}` : void 0, ye = N ? r` offset ${N}` : void 0, H = r.empty();
    if (g) {
      const I = r` for ${r.raw(g.strength)}`;
      g.config.of && I.append(
        r` of ${r.join(
          Array.isArray(g.config.of) ? g.config.of : [g.config.of],
          r`, `
        )}`
      ), g.config.noWait ? I.append(r` no wait`) : g.config.skipLocked && I.append(r` skip locked`), H.append(I);
    }
    const R = r`${T}select${Q} ${j} from ${q}${M}${V}${O}${S}${P}${oe}${ye}${H}`;
    return x.length > 0 ? this.buildSetOperations(R, x) : R;
  }
  buildSetOperations(e, t) {
    const [s, ...o] = t;
    if (!s)
      throw new Error("Cannot pass undefined values to any set operator");
    return o.length === 0 ? this.buildSetOperationQuery({ leftSelect: e, setOperator: s }) : this.buildSetOperations(
      this.buildSetOperationQuery({ leftSelect: e, setOperator: s }),
      o
    );
  }
  buildSetOperationQuery({
    leftSelect: e,
    setOperator: { type: t, isAll: s, rightSelect: o, limit: a, orderBy: u, offset: d }
  }) {
    const f = r`(${e.getSQL()}) `, m = r`(${o.getSQL()})`;
    let c;
    if (u && u.length > 0) {
      const x = [];
      for (const v of u)
        if (h(v, p))
          x.push(r.identifier(v.name));
        else if (h(v, y)) {
          for (let B = 0; B < v.queryChunks.length; B++) {
            const T = v.queryChunks[B];
            h(T, p) && (v.queryChunks[B] = r.identifier(T.name));
          }
          x.push(r`${v}`);
        } else
          x.push(r`${v}`);
      c = r` order by ${r.join(x, r`, `)} `;
    }
    const N = typeof a == "object" || typeof a == "number" && a >= 0 ? r` limit ${a}` : void 0, g = r.raw(`${t} ${s ? "all " : ""}`), b = d ? r` offset ${d}` : void 0;
    return r`${f}${g}${m}${c}${N}${b}`;
  }
  buildInsertQuery({ table: e, values: t, onConflict: s, returning: o, withList: a, select: u, overridingSystemValue_: d }) {
    const f = [], m = e[w.Symbol.Columns], c = Object.entries(m).filter(([T, Q]) => !Q.shouldDisableInsert()), N = c.map(
      ([, T]) => r.identifier(this.casing.getColumnCasing(T))
    );
    if (u) {
      const T = t;
      h(T, y) ? f.push(T) : f.push(T.getSQL());
    } else {
      const T = t;
      f.push(r.raw("values "));
      for (const [Q, j] of T.entries()) {
        const q = [];
        for (const [M, V] of c) {
          const S = j[M];
          if (S === void 0 || h(S, Y) && S.value === void 0)
            if (V.defaultFn !== void 0) {
              const P = V.defaultFn(), O = h(P, y) ? P : r.param(P, V);
              q.push(O);
            } else if (!V.default && V.onUpdateFn !== void 0) {
              const P = V.onUpdateFn(), O = h(P, y) ? P : r.param(P, V);
              q.push(O);
            } else
              q.push(r`default`);
          else
            q.push(S);
        }
        f.push(q), Q < T.length - 1 && f.push(r`, `);
      }
    }
    const g = this.buildWithCTE(a), b = r.join(f), x = o ? r` returning ${this.buildSelection(o, { isSingleTable: !0 })}` : void 0, v = s ? r` on conflict ${s}` : void 0, B = d === !0 ? r`overriding system value ` : void 0;
    return r`${g}insert into ${e} ${N} ${B}${b}${v}${x}`;
  }
  buildRefreshMaterializedViewQuery({ view: e, concurrently: t, withNoData: s }) {
    const o = t ? r` concurrently` : void 0, a = s ? r` with no data` : void 0;
    return r`refresh materialized view${o} ${e}${a}`;
  }
  prepareTyping(e) {
    return h(e, Fe) || h(e, Oe) ? "json" : h(e, Qe) ? "decimal" : h(e, Ve) ? "time" : h(e, Le) || h(e, je) ? "timestamp" : h(e, De) || h(e, Ce) ? "date" : h(e, Ae) ? "uuid" : "none";
  }
  sqlToQuery(e, t) {
    return e.toQuery({
      casing: this.casing,
      escapeName: this.escapeName,
      escapeParam: this.escapeParam,
      escapeString: this.escapeString,
      prepareTyping: this.prepareTyping,
      invokeSource: t
    });
  }
  // buildRelationalQueryWithPK({
  // 	fullSchema,
  // 	schema,
  // 	tableNamesMap,
  // 	table,
  // 	tableConfig,
  // 	queryConfig: config,
  // 	tableAlias,
  // 	isRoot = false,
  // 	joinOn,
  // }: {
  // 	fullSchema: Record<string, unknown>;
  // 	schema: TablesRelationalConfig;
  // 	tableNamesMap: Record<string, string>;
  // 	table: PgTable;
  // 	tableConfig: TableRelationalConfig;
  // 	queryConfig: true | DBQueryConfig<'many', true>;
  // 	tableAlias: string;
  // 	isRoot?: boolean;
  // 	joinOn?: SQL;
  // }): BuildRelationalQueryResult<PgTable, PgColumn> {
  // 	// For { "<relation>": true }, return a table with selection of all columns
  // 	if (config === true) {
  // 		const selectionEntries = Object.entries(tableConfig.columns);
  // 		const selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = selectionEntries.map((
  // 			[key, value],
  // 		) => ({
  // 			dbKey: value.name,
  // 			tsKey: key,
  // 			field: value as PgColumn,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 		return {
  // 			tableTsKey: tableConfig.tsName,
  // 			sql: table,
  // 			selection,
  // 		};
  // 	}
  // 	// let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
  // 	// let selectionForBuild = selection;
  // 	const aliasedColumns = Object.fromEntries(
  // 		Object.entries(tableConfig.columns).map(([key, value]) => [key, aliasedTableColumn(value, tableAlias)]),
  // 	);
  // 	const aliasedRelations = Object.fromEntries(
  // 		Object.entries(tableConfig.relations).map(([key, value]) => [key, aliasedRelation(value, tableAlias)]),
  // 	);
  // 	const aliasedFields = Object.assign({}, aliasedColumns, aliasedRelations);
  // 	let where, hasUserDefinedWhere;
  // 	if (config.where) {
  // 		const whereSql = typeof config.where === 'function' ? config.where(aliasedFields, operators) : config.where;
  // 		where = whereSql && mapColumnsInSQLToAlias(whereSql, tableAlias);
  // 		hasUserDefinedWhere = !!where;
  // 	}
  // 	where = and(joinOn, where);
  // 	// const fieldsSelection: { tsKey: string; value: PgColumn | SQL.Aliased; isExtra?: boolean }[] = [];
  // 	let joins: Join[] = [];
  // 	let selectedColumns: string[] = [];
  // 	// Figure out which columns to select
  // 	if (config.columns) {
  // 		let isIncludeMode = false;
  // 		for (const [field, value] of Object.entries(config.columns)) {
  // 			if (value === undefined) {
  // 				continue;
  // 			}
  // 			if (field in tableConfig.columns) {
  // 				if (!isIncludeMode && value === true) {
  // 					isIncludeMode = true;
  // 				}
  // 				selectedColumns.push(field);
  // 			}
  // 		}
  // 		if (selectedColumns.length > 0) {
  // 			selectedColumns = isIncludeMode
  // 				? selectedColumns.filter((c) => config.columns?.[c] === true)
  // 				: Object.keys(tableConfig.columns).filter((key) => !selectedColumns.includes(key));
  // 		}
  // 	} else {
  // 		// Select all columns if selection is not specified
  // 		selectedColumns = Object.keys(tableConfig.columns);
  // 	}
  // 	// for (const field of selectedColumns) {
  // 	// 	const column = tableConfig.columns[field]! as PgColumn;
  // 	// 	fieldsSelection.push({ tsKey: field, value: column });
  // 	// }
  // 	let initiallySelectedRelations: {
  // 		tsKey: string;
  // 		queryConfig: true | DBQueryConfig<'many', false>;
  // 		relation: Relation;
  // 	}[] = [];
  // 	// let selectedRelations: BuildRelationalQueryResult<PgTable, PgColumn>['selection'] = [];
  // 	// Figure out which relations to select
  // 	if (config.with) {
  // 		initiallySelectedRelations = Object.entries(config.with)
  // 			.filter((entry): entry is [typeof entry[0], NonNullable<typeof entry[1]>] => !!entry[1])
  // 			.map(([tsKey, queryConfig]) => ({ tsKey, queryConfig, relation: tableConfig.relations[tsKey]! }));
  // 	}
  // 	const manyRelations = initiallySelectedRelations.filter((r) =>
  // 		is(r.relation, Many)
  // 		&& (schema[tableNamesMap[r.relation.referencedTable[Table.Symbol.Name]]!]?.primaryKey.length ?? 0) > 0
  // 	);
  // 	// If this is the last Many relation (or there are no Many relations), we are on the innermost subquery level
  // 	const isInnermostQuery = manyRelations.length < 2;
  // 	const selectedExtras: {
  // 		tsKey: string;
  // 		value: SQL.Aliased;
  // 	}[] = [];
  // 	// Figure out which extras to select
  // 	if (isInnermostQuery && config.extras) {
  // 		const extras = typeof config.extras === 'function'
  // 			? config.extras(aliasedFields, { sql })
  // 			: config.extras;
  // 		for (const [tsKey, value] of Object.entries(extras)) {
  // 			selectedExtras.push({
  // 				tsKey,
  // 				value: mapColumnsInAliasedSQLToAlias(value, tableAlias),
  // 			});
  // 		}
  // 	}
  // 	// Transform `fieldsSelection` into `selection`
  // 	// `fieldsSelection` shouldn't be used after this point
  // 	// for (const { tsKey, value, isExtra } of fieldsSelection) {
  // 	// 	selection.push({
  // 	// 		dbKey: is(value, SQL.Aliased) ? value.fieldAlias : tableConfig.columns[tsKey]!.name,
  // 	// 		tsKey,
  // 	// 		field: is(value, Column) ? aliasedTableColumn(value, tableAlias) : value,
  // 	// 		relationTableTsKey: undefined,
  // 	// 		isJson: false,
  // 	// 		isExtra,
  // 	// 		selection: [],
  // 	// 	});
  // 	// }
  // 	let orderByOrig = typeof config.orderBy === 'function'
  // 		? config.orderBy(aliasedFields, orderByOperators)
  // 		: config.orderBy ?? [];
  // 	if (!Array.isArray(orderByOrig)) {
  // 		orderByOrig = [orderByOrig];
  // 	}
  // 	const orderBy = orderByOrig.map((orderByValue) => {
  // 		if (is(orderByValue, Column)) {
  // 			return aliasedTableColumn(orderByValue, tableAlias) as PgColumn;
  // 		}
  // 		return mapColumnsInSQLToAlias(orderByValue, tableAlias);
  // 	});
  // 	const limit = isInnermostQuery ? config.limit : undefined;
  // 	const offset = isInnermostQuery ? config.offset : undefined;
  // 	// For non-root queries without additional config except columns, return a table with selection
  // 	if (
  // 		!isRoot
  // 		&& initiallySelectedRelations.length === 0
  // 		&& selectedExtras.length === 0
  // 		&& !where
  // 		&& orderBy.length === 0
  // 		&& limit === undefined
  // 		&& offset === undefined
  // 	) {
  // 		return {
  // 			tableTsKey: tableConfig.tsName,
  // 			sql: table,
  // 			selection: selectedColumns.map((key) => ({
  // 				dbKey: tableConfig.columns[key]!.name,
  // 				tsKey: key,
  // 				field: tableConfig.columns[key] as PgColumn,
  // 				relationTableTsKey: undefined,
  // 				isJson: false,
  // 				selection: [],
  // 			})),
  // 		};
  // 	}
  // 	const selectedRelationsWithoutPK:
  // 	// Process all relations without primary keys, because they need to be joined differently and will all be on the same query level
  // 	for (
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationConfigValue,
  // 			relation,
  // 		} of initiallySelectedRelations
  // 	) {
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTable = schema[relationTableTsName]!;
  // 		if (relationTable.primaryKey.length > 0) {
  // 			continue;
  // 		}
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelation = this.buildRelationalQueryWithoutPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationConfigValue,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 			nestedQueryRelation: relation,
  // 		});
  // 		const field = sql`${sql.identifier(relationTableAlias)}.${sql.identifier('data')}`.as(selectedRelationTsKey);
  // 		joins.push({
  // 			on: sql`true`,
  // 			table: new Subquery(builtRelation.sql as SQL, {}, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: true,
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelation.selection,
  // 		});
  // 	}
  // 	const oneRelations = initiallySelectedRelations.filter((r): r is typeof r & { relation: One } =>
  // 		is(r.relation, One)
  // 	);
  // 	// Process all One relations with PKs, because they can all be joined on the same level
  // 	for (
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationConfigValue,
  // 			relation,
  // 		} of oneRelations
  // 	) {
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const relationTable = schema[relationTableTsName]!;
  // 		if (relationTable.primaryKey.length === 0) {
  // 			continue;
  // 		}
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelation = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationConfigValue,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 		});
  // 		const field = sql`case when ${sql.identifier(relationTableAlias)} is null then null else json_build_array(${
  // 			sql.join(
  // 				builtRelation.selection.map(({ field }) =>
  // 					is(field, SQL.Aliased)
  // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
  // 						: is(field, Column)
  // 						? aliasedTableColumn(field, relationTableAlias)
  // 						: field
  // 				),
  // 				sql`, `,
  // 			)
  // 		}) end`.as(selectedRelationTsKey);
  // 		const isLateralJoin = is(builtRelation.sql, SQL);
  // 		joins.push({
  // 			on: isLateralJoin ? sql`true` : joinOn,
  // 			table: is(builtRelation.sql, SQL)
  // 				? new Subquery(builtRelation.sql, {}, relationTableAlias)
  // 				: aliasedTable(builtRelation.sql, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: is(builtRelation.sql, SQL),
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelation.selection,
  // 		});
  // 	}
  // 	let distinct: PgSelectConfig['distinct'];
  // 	let tableFrom: PgTable | Subquery = table;
  // 	// Process first Many relation - each one requires a nested subquery
  // 	const manyRelation = manyRelations[0];
  // 	if (manyRelation) {
  // 		const {
  // 			tsKey: selectedRelationTsKey,
  // 			queryConfig: selectedRelationQueryConfig,
  // 			relation,
  // 		} = manyRelation;
  // 		distinct = {
  // 			on: tableConfig.primaryKey.map((c) => aliasedTableColumn(c as PgColumn, tableAlias)),
  // 		};
  // 		const normalizedRelation = normalizeRelation(schema, tableNamesMap, relation);
  // 		const relationTableName = relation.referencedTable[Table.Symbol.Name];
  // 		const relationTableTsName = tableNamesMap[relationTableName]!;
  // 		const relationTableAlias = `${tableAlias}_${selectedRelationTsKey}`;
  // 		const joinOn = and(
  // 			...normalizedRelation.fields.map((field, i) =>
  // 				eq(
  // 					aliasedTableColumn(normalizedRelation.references[i]!, relationTableAlias),
  // 					aliasedTableColumn(field, tableAlias),
  // 				)
  // 			),
  // 		);
  // 		const builtRelationJoin = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table: fullSchema[relationTableTsName] as PgTable,
  // 			tableConfig: schema[relationTableTsName]!,
  // 			queryConfig: selectedRelationQueryConfig,
  // 			tableAlias: relationTableAlias,
  // 			joinOn,
  // 		});
  // 		const builtRelationSelectionField = sql`case when ${
  // 			sql.identifier(relationTableAlias)
  // 		} is null then '[]' else json_agg(json_build_array(${
  // 			sql.join(
  // 				builtRelationJoin.selection.map(({ field }) =>
  // 					is(field, SQL.Aliased)
  // 						? sql`${sql.identifier(relationTableAlias)}.${sql.identifier(field.fieldAlias)}`
  // 						: is(field, Column)
  // 						? aliasedTableColumn(field, relationTableAlias)
  // 						: field
  // 				),
  // 				sql`, `,
  // 			)
  // 		})) over (partition by ${sql.join(distinct.on, sql`, `)}) end`.as(selectedRelationTsKey);
  // 		const isLateralJoin = is(builtRelationJoin.sql, SQL);
  // 		joins.push({
  // 			on: isLateralJoin ? sql`true` : joinOn,
  // 			table: isLateralJoin
  // 				? new Subquery(builtRelationJoin.sql as SQL, {}, relationTableAlias)
  // 				: aliasedTable(builtRelationJoin.sql as PgTable, relationTableAlias),
  // 			alias: relationTableAlias,
  // 			joinType: 'left',
  // 			lateral: isLateralJoin,
  // 		});
  // 		// Build the "from" subquery with the remaining Many relations
  // 		const builtTableFrom = this.buildRelationalQueryWithPK({
  // 			fullSchema,
  // 			schema,
  // 			tableNamesMap,
  // 			table,
  // 			tableConfig,
  // 			queryConfig: {
  // 				...config,
  // 				where: undefined,
  // 				orderBy: undefined,
  // 				limit: undefined,
  // 				offset: undefined,
  // 				with: manyRelations.slice(1).reduce<NonNullable<typeof config['with']>>(
  // 					(result, { tsKey, queryConfig: configValue }) => {
  // 						result[tsKey] = configValue;
  // 						return result;
  // 					},
  // 					{},
  // 				),
  // 			},
  // 			tableAlias,
  // 		});
  // 		selectedRelations.push({
  // 			dbKey: selectedRelationTsKey,
  // 			tsKey: selectedRelationTsKey,
  // 			field: builtRelationSelectionField,
  // 			relationTableTsKey: relationTableTsName,
  // 			isJson: true,
  // 			selection: builtRelationJoin.selection,
  // 		});
  // 		// selection = builtTableFrom.selection.map((item) =>
  // 		// 	is(item.field, SQL.Aliased)
  // 		// 		? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
  // 		// 		: item
  // 		// );
  // 		// selectionForBuild = [{
  // 		// 	dbKey: '*',
  // 		// 	tsKey: '*',
  // 		// 	field: sql`${sql.identifier(tableAlias)}.*`,
  // 		// 	selection: [],
  // 		// 	isJson: false,
  // 		// 	relationTableTsKey: undefined,
  // 		// }];
  // 		// const newSelectionItem: (typeof selection)[number] = {
  // 		// 	dbKey: selectedRelationTsKey,
  // 		// 	tsKey: selectedRelationTsKey,
  // 		// 	field,
  // 		// 	relationTableTsKey: relationTableTsName,
  // 		// 	isJson: true,
  // 		// 	selection: builtRelationJoin.selection,
  // 		// };
  // 		// selection.push(newSelectionItem);
  // 		// selectionForBuild.push(newSelectionItem);
  // 		tableFrom = is(builtTableFrom.sql, PgTable)
  // 			? builtTableFrom.sql
  // 			: new Subquery(builtTableFrom.sql, {}, tableAlias);
  // 	}
  // 	if (selectedColumns.length === 0 && selectedRelations.length === 0 && selectedExtras.length === 0) {
  // 		throw new DrizzleError(`No fields selected for table "${tableConfig.tsName}" ("${tableAlias}")`);
  // 	}
  // 	let selection: BuildRelationalQueryResult<PgTable, PgColumn>['selection'];
  // 	function prepareSelectedColumns() {
  // 		return selectedColumns.map((key) => ({
  // 			dbKey: tableConfig.columns[key]!.name,
  // 			tsKey: key,
  // 			field: tableConfig.columns[key] as PgColumn,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 	}
  // 	function prepareSelectedExtras() {
  // 		return selectedExtras.map((item) => ({
  // 			dbKey: item.value.fieldAlias,
  // 			tsKey: item.tsKey,
  // 			field: item.value,
  // 			relationTableTsKey: undefined,
  // 			isJson: false,
  // 			selection: [],
  // 		}));
  // 	}
  // 	if (isRoot) {
  // 		selection = [
  // 			...prepareSelectedColumns(),
  // 			...prepareSelectedExtras(),
  // 		];
  // 	}
  // 	if (hasUserDefinedWhere || orderBy.length > 0) {
  // 		tableFrom = new Subquery(
  // 			this.buildSelectQuery({
  // 				table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
  // 				fields: {},
  // 				fieldsFlat: selectionForBuild.map(({ field }) => ({
  // 					path: [],
  // 					field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
  // 				})),
  // 				joins,
  // 				distinct,
  // 			}),
  // 			{},
  // 			tableAlias,
  // 		);
  // 		selectionForBuild = selection.map((item) =>
  // 			is(item.field, SQL.Aliased)
  // 				? { ...item, field: sql`${sql.identifier(tableAlias)}.${sql.identifier(item.field.fieldAlias)}` }
  // 				: item
  // 		);
  // 		joins = [];
  // 		distinct = undefined;
  // 	}
  // 	const result = this.buildSelectQuery({
  // 		table: is(tableFrom, PgTable) ? aliasedTable(tableFrom, tableAlias) : tableFrom,
  // 		fields: {},
  // 		fieldsFlat: selectionForBuild.map(({ field }) => ({
  // 			path: [],
  // 			field: is(field, Column) ? aliasedTableColumn(field, tableAlias) : field,
  // 		})),
  // 		where,
  // 		limit,
  // 		offset,
  // 		joins,
  // 		orderBy,
  // 		distinct,
  // 	});
  // 	return {
  // 		tableTsKey: tableConfig.tsName,
  // 		sql: result,
  // 		selection,
  // 	};
  // }
  buildRelationalQueryWithoutPK({
    fullSchema: e,
    schema: t,
    tableNamesMap: s,
    table: o,
    tableConfig: a,
    queryConfig: u,
    tableAlias: d,
    nestedQueryRelation: f,
    joinOn: m
  }) {
    let c = [], N, g, b = [], x;
    const v = [];
    if (u === !0)
      c = Object.entries(a.columns).map(([Q, j]) => ({
        dbKey: j.name,
        tsKey: Q,
        field: K(j, d),
        relationTableTsKey: void 0,
        isJson: !1,
        selection: []
      }));
    else {
      const T = Object.fromEntries(
        Object.entries(a.columns).map(([S, P]) => [S, K(P, d)])
      );
      if (u.where) {
        const S = typeof u.where == "function" ? u.where(T, Sl()) : u.where;
        x = S && ce(S, d);
      }
      const Q = [];
      let j = [];
      if (u.columns) {
        let S = !1;
        for (const [P, O] of Object.entries(u.columns))
          O !== void 0 && P in a.columns && (!S && O === !0 && (S = !0), j.push(P));
        j.length > 0 && (j = S ? j.filter((P) => {
          var O;
          return ((O = u.columns) == null ? void 0 : O[P]) === !0;
        }) : Object.keys(a.columns).filter((P) => !j.includes(P)));
      } else
        j = Object.keys(a.columns);
      for (const S of j) {
        const P = a.columns[S];
        Q.push({ tsKey: S, value: P });
      }
      let q = [];
      u.with && (q = Object.entries(u.with).filter((S) => !!S[1]).map(([S, P]) => ({ tsKey: S, queryConfig: P, relation: a.relations[S] })));
      let M;
      if (u.extras) {
        M = typeof u.extras == "function" ? u.extras(T, { sql: r }) : u.extras;
        for (const [S, P] of Object.entries(M))
          Q.push({
            tsKey: S,
            value: Cr(P, d)
          });
      }
      for (const { tsKey: S, value: P } of Q)
        c.push({
          dbKey: h(P, y.Aliased) ? P.fieldAlias : a.columns[S].name,
          tsKey: S,
          field: h(P, A) ? K(P, d) : P,
          relationTableTsKey: void 0,
          isJson: !1,
          selection: []
        });
      let V = typeof u.orderBy == "function" ? u.orderBy(T, Pl()) : u.orderBy ?? [];
      Array.isArray(V) || (V = [V]), b = V.map((S) => h(S, A) ? K(S, d) : ce(S, d)), N = u.limit, g = u.offset;
      for (const {
        tsKey: S,
        queryConfig: P,
        relation: O
      } of q) {
        const oe = $l(t, s, O), ye = Pe(O.referencedTable), H = s[ye], R = `${d}_${S}`, I = xe(
          ...oe.fields.map(
            (ra, oa) => Fr(
              K(oe.references[oa], R),
              K(ra, d)
            )
          )
        ), _ = this.buildRelationalQueryWithoutPK({
          fullSchema: e,
          schema: t,
          tableNamesMap: s,
          table: e[H],
          tableConfig: t[H],
          queryConfig: h(O, te) ? P === !0 ? { limit: 1 } : { ...P, limit: 1 } : P,
          tableAlias: R,
          joinOn: I,
          nestedQueryRelation: O
        }), we = r`${r.identifier(R)}.${r.identifier("data")}`.as(S);
        v.push({
          on: r`true`,
          table: new U(_.sql, {}, R),
          alias: R,
          joinType: "left",
          lateral: !0
        }), c.push({
          dbKey: S,
          tsKey: S,
          field: we,
          relationTableTsKey: H,
          isJson: !0,
          selection: _.selection
        });
      }
    }
    if (c.length === 0)
      throw new Or({ message: `No fields selected for table "${a.tsName}" ("${d}")` });
    let B;
    if (x = xe(m, x), f) {
      let T = r`json_build_array(${r.join(
        c.map(
          ({ field: q, tsKey: M, isJson: V }) => V ? r`${r.identifier(`${d}_${M}`)}.${r.identifier("data")}` : h(q, y.Aliased) ? q.sql : q
        ),
        r`, `
      )})`;
      h(f, Be) && (T = r`coalesce(json_agg(${T}${b.length > 0 ? r` order by ${r.join(b, r`, `)}` : void 0}), '[]'::json)`);
      const Q = [{
        dbKey: "data",
        tsKey: "data",
        field: T.as("data"),
        isJson: !0,
        relationTableTsKey: a.tsName,
        selection: c
      }];
      N !== void 0 || g !== void 0 || b.length > 0 ? (B = this.buildSelectQuery({
        table: be(o, d),
        fields: {},
        fieldsFlat: [{
          path: [],
          field: r.raw("*")
        }],
        where: x,
        limit: N,
        offset: g,
        orderBy: b,
        setOperators: []
      }), x = void 0, N = void 0, g = void 0, b = []) : B = be(o, d), B = this.buildSelectQuery({
        table: h(B, E) ? B : new U(B, {}, d),
        fields: {},
        fieldsFlat: Q.map(({ field: q }) => ({
          path: [],
          field: h(q, A) ? K(q, d) : q
        })),
        joins: v,
        where: x,
        limit: N,
        offset: g,
        orderBy: b,
        setOperators: []
      });
    } else
      B = this.buildSelectQuery({
        table: be(o, d),
        fields: {},
        fieldsFlat: c.map(({ field: T }) => ({
          path: [],
          field: h(T, A) ? K(T, d) : T
        })),
        joins: v,
        where: x,
        limit: N,
        offset: g,
        orderBy: b,
        setOperators: []
      });
    return {
      tableTsKey: a.tsName,
      sql: B,
      selection: c
    };
  }
}
n(le, _n, "PgDialect");
var Kn;
Kn = l;
const ge = class ge {
  constructor(e) {
    n(this, "config");
    this.config = { ...e };
  }
  get(e, t) {
    if (t === "_")
      return {
        ...e._,
        selectedFields: new Proxy(
          e._.selectedFields,
          this
        )
      };
    if (t === F)
      return {
        ...e[F],
        selectedFields: new Proxy(
          e[F].selectedFields,
          this
        )
      };
    if (typeof t == "symbol")
      return e[t];
    const o = (h(e, U) ? e._.selectedFields : h(e, J) ? e[F].selectedFields : e)[t];
    if (h(o, y.Aliased)) {
      if (this.config.sqlAliasedBehavior === "sql" && !o.isSelectionField)
        return o.sql;
      const a = o.clone();
      return a.isSelectionField = !0, a;
    }
    if (h(o, y)) {
      if (this.config.sqlBehavior === "sql")
        return o;
      throw new Error(
        `You tried to reference "${t}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`
      );
    }
    return h(o, A) ? this.config.alias ? new Proxy(
      o,
      new ee(
        new Proxy(
          o.table,
          new pe(this.config.alias, this.config.replaceOriginalName ?? !1)
        )
      )
    ) : o : typeof o != "object" || o === null ? o : new Proxy(o, new ge(this.config));
  }
};
n(ge, Kn, "SelectionProxyHandler");
let L = ge;
var Mn;
Mn = l;
class ko {
  /** @internal */
  getSelectedFields() {
    return this._.selectedFields;
  }
}
n(ko, Mn, "TypedQueryBuilder");
var Rn;
Rn = l;
class W {
  constructor(e) {
    n(this, "fields");
    n(this, "session");
    n(this, "dialect");
    n(this, "withList", []);
    n(this, "distinct");
    n(this, "authToken");
    this.fields = e.fields, this.session = e.session, this.dialect = e.dialect, e.withList && (this.withList = e.withList), this.distinct = e.distinct;
  }
  /** @internal */
  setToken(e) {
    return this.authToken = e, this;
  }
  /**
   * Specify the table, subquery, or other target that you're
   * building a select query against.
   *
   * {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FROM | Postgres from documentation}
   */
  from(e) {
    const t = !!this.fields;
    let s;
    return this.fields ? s = this.fields : h(e, U) ? s = Object.fromEntries(
      Object.keys(e._.selectedFields).map((o) => [o, e[o]])
    ) : h(e, re) ? s = e[F].selectedFields : h(e, y) ? s = {} : s = qe(e), new Ie({
      table: e,
      fields: s,
      isPartialSelect: t,
      session: this.session,
      dialect: this.dialect,
      withList: this.withList,
      distinct: this.distinct
    }).setToken(this.authToken);
  }
}
n(W, Rn, "PgSelectBuilder");
var Jn, Wn;
class ea extends (Wn = ko, Jn = l, Wn) {
  constructor({ table: t, fields: s, isPartialSelect: o, session: a, dialect: u, withList: d, distinct: f }) {
    super();
    n(this, "_");
    n(this, "config");
    n(this, "joinsNotNullableMap");
    n(this, "tableName");
    n(this, "isPartialSelect");
    n(this, "session");
    n(this, "dialect");
    /**
     * Executes a `left join` operation by adding another table to the current query.
     *
     * Calling this method associates each row of the table with the corresponding row from the joined table, if a match is found. If no matching row exists, it sets all columns of the joined table to null.
     *
     * See docs: {@link https://orm.drizzle.team/docs/joins#left-join}
     *
     * @param table the table to join.
     * @param on the `on` clause.
     *
     * @example
     *
     * ```ts
     * // Select all users and their pets
     * const usersWithPets: { user: User; pets: Pet | null }[] = await db.select()
     *   .from(users)
     *   .leftJoin(pets, eq(users.id, pets.ownerId))
     *
     * // Select userId and petId
     * const usersIdsAndPetIds: { userId: number; petId: number | null }[] = await db.select({
     *   userId: users.id,
     *   petId: pets.id,
     * })
     *   .from(users)
     *   .leftJoin(pets, eq(users.id, pets.ownerId))
     * ```
     */
    n(this, "leftJoin", this.createJoin("left"));
    /**
     * Executes a `right join` operation by adding another table to the current query.
     *
     * Calling this method associates each row of the joined table with the corresponding row from the main table, if a match is found. If no matching row exists, it sets all columns of the main table to null.
     *
     * See docs: {@link https://orm.drizzle.team/docs/joins#right-join}
     *
     * @param table the table to join.
     * @param on the `on` clause.
     *
     * @example
     *
     * ```ts
     * // Select all users and their pets
     * const usersWithPets: { user: User | null; pets: Pet }[] = await db.select()
     *   .from(users)
     *   .rightJoin(pets, eq(users.id, pets.ownerId))
     *
     * // Select userId and petId
     * const usersIdsAndPetIds: { userId: number | null; petId: number }[] = await db.select({
     *   userId: users.id,
     *   petId: pets.id,
     * })
     *   .from(users)
     *   .rightJoin(pets, eq(users.id, pets.ownerId))
     * ```
     */
    n(this, "rightJoin", this.createJoin("right"));
    /**
     * Executes an `inner join` operation, creating a new table by combining rows from two tables that have matching values.
     *
     * Calling this method retrieves rows that have corresponding entries in both joined tables. Rows without matching entries in either table are excluded, resulting in a table that includes only matching pairs.
     *
     * See docs: {@link https://orm.drizzle.team/docs/joins#inner-join}
     *
     * @param table the table to join.
     * @param on the `on` clause.
     *
     * @example
     *
     * ```ts
     * // Select all users and their pets
     * const usersWithPets: { user: User; pets: Pet }[] = await db.select()
     *   .from(users)
     *   .innerJoin(pets, eq(users.id, pets.ownerId))
     *
     * // Select userId and petId
     * const usersIdsAndPetIds: { userId: number; petId: number }[] = await db.select({
     *   userId: users.id,
     *   petId: pets.id,
     * })
     *   .from(users)
     *   .innerJoin(pets, eq(users.id, pets.ownerId))
     * ```
     */
    n(this, "innerJoin", this.createJoin("inner"));
    /**
     * Executes a `full join` operation by combining rows from two tables into a new table.
     *
     * Calling this method retrieves all rows from both main and joined tables, merging rows with matching values and filling in `null` for non-matching columns.
     *
     * See docs: {@link https://orm.drizzle.team/docs/joins#full-join}
     *
     * @param table the table to join.
     * @param on the `on` clause.
     *
     * @example
     *
     * ```ts
     * // Select all users and their pets
     * const usersWithPets: { user: User | null; pets: Pet | null }[] = await db.select()
     *   .from(users)
     *   .fullJoin(pets, eq(users.id, pets.ownerId))
     *
     * // Select userId and petId
     * const usersIdsAndPetIds: { userId: number | null; petId: number | null }[] = await db.select({
     *   userId: users.id,
     *   petId: pets.id,
     * })
     *   .from(users)
     *   .fullJoin(pets, eq(users.id, pets.ownerId))
     * ```
     */
    n(this, "fullJoin", this.createJoin("full"));
    /**
     * Adds `union` set operator to the query.
     *
     * Calling this method will combine the result sets of the `select` statements and remove any duplicate rows that appear across them.
     *
     * See docs: {@link https://orm.drizzle.team/docs/set-operations#union}
     *
     * @example
     *
     * ```ts
     * // Select all unique names from customers and users tables
     * await db.select({ name: users.name })
     *   .from(users)
     *   .union(
     *     db.select({ name: customers.name }).from(customers)
     *   );
     * // or
     * import { union } from 'drizzle-orm/pg-core'
     *
     * await union(
     *   db.select({ name: users.name }).from(users),
     *   db.select({ name: customers.name }).from(customers)
     * );
     * ```
     */
    n(this, "union", this.createSetOperator("union", !1));
    /**
     * Adds `union all` set operator to the query.
     *
     * Calling this method will combine the result-set of the `select` statements and keep all duplicate rows that appear across them.
     *
     * See docs: {@link https://orm.drizzle.team/docs/set-operations#union-all}
     *
     * @example
     *
     * ```ts
     * // Select all transaction ids from both online and in-store sales
     * await db.select({ transaction: onlineSales.transactionId })
     *   .from(onlineSales)
     *   .unionAll(
     *     db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
     *   );
     * // or
     * import { unionAll } from 'drizzle-orm/pg-core'
     *
     * await unionAll(
     *   db.select({ transaction: onlineSales.transactionId }).from(onlineSales),
     *   db.select({ transaction: inStoreSales.transactionId }).from(inStoreSales)
     * );
     * ```
     */
    n(this, "unionAll", this.createSetOperator("union", !0));
    /**
     * Adds `intersect` set operator to the query.
     *
     * Calling this method will retain only the rows that are present in both result sets and eliminate duplicates.
     *
     * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect}
     *
     * @example
     *
     * ```ts
     * // Select course names that are offered in both departments A and B
     * await db.select({ courseName: depA.courseName })
     *   .from(depA)
     *   .intersect(
     *     db.select({ courseName: depB.courseName }).from(depB)
     *   );
     * // or
     * import { intersect } from 'drizzle-orm/pg-core'
     *
     * await intersect(
     *   db.select({ courseName: depA.courseName }).from(depA),
     *   db.select({ courseName: depB.courseName }).from(depB)
     * );
     * ```
     */
    n(this, "intersect", this.createSetOperator("intersect", !1));
    /**
     * Adds `intersect all` set operator to the query.
     *
     * Calling this method will retain only the rows that are present in both result sets including all duplicates.
     *
     * See docs: {@link https://orm.drizzle.team/docs/set-operations#intersect-all}
     *
     * @example
     *
     * ```ts
     * // Select all products and quantities that are ordered by both regular and VIP customers
     * await db.select({
     *   productId: regularCustomerOrders.productId,
     *   quantityOrdered: regularCustomerOrders.quantityOrdered
     * })
     * .from(regularCustomerOrders)
     * .intersectAll(
     *   db.select({
     *     productId: vipCustomerOrders.productId,
     *     quantityOrdered: vipCustomerOrders.quantityOrdered
     *   })
     *   .from(vipCustomerOrders)
     * );
     * // or
     * import { intersectAll } from 'drizzle-orm/pg-core'
     *
     * await intersectAll(
     *   db.select({
     *     productId: regularCustomerOrders.productId,
     *     quantityOrdered: regularCustomerOrders.quantityOrdered
     *   })
     *   .from(regularCustomerOrders),
     *   db.select({
     *     productId: vipCustomerOrders.productId,
     *     quantityOrdered: vipCustomerOrders.quantityOrdered
     *   })
     *   .from(vipCustomerOrders)
     * );
     * ```
     */
    n(this, "intersectAll", this.createSetOperator("intersect", !0));
    /**
     * Adds `except` set operator to the query.
     *
     * Calling this method will retrieve all unique rows from the left query, except for the rows that are present in the result set of the right query.
     *
     * See docs: {@link https://orm.drizzle.team/docs/set-operations#except}
     *
     * @example
     *
     * ```ts
     * // Select all courses offered in department A but not in department B
     * await db.select({ courseName: depA.courseName })
     *   .from(depA)
     *   .except(
     *     db.select({ courseName: depB.courseName }).from(depB)
     *   );
     * // or
     * import { except } from 'drizzle-orm/pg-core'
     *
     * await except(
     *   db.select({ courseName: depA.courseName }).from(depA),
     *   db.select({ courseName: depB.courseName }).from(depB)
     * );
     * ```
     */
    n(this, "except", this.createSetOperator("except", !1));
    /**
     * Adds `except all` set operator to the query.
     *
     * Calling this method will retrieve all rows from the left query, except for the rows that are present in the result set of the right query.
     *
     * See docs: {@link https://orm.drizzle.team/docs/set-operations#except-all}
     *
     * @example
     *
     * ```ts
     * // Select all products that are ordered by regular customers but not by VIP customers
     * await db.select({
     *   productId: regularCustomerOrders.productId,
     *   quantityOrdered: regularCustomerOrders.quantityOrdered,
     * })
     * .from(regularCustomerOrders)
     * .exceptAll(
     *   db.select({
     *     productId: vipCustomerOrders.productId,
     *     quantityOrdered: vipCustomerOrders.quantityOrdered,
     *   })
     *   .from(vipCustomerOrders)
     * );
     * // or
     * import { exceptAll } from 'drizzle-orm/pg-core'
     *
     * await exceptAll(
     *   db.select({
     *     productId: regularCustomerOrders.productId,
     *     quantityOrdered: regularCustomerOrders.quantityOrdered
     *   })
     *   .from(regularCustomerOrders),
     *   db.select({
     *     productId: vipCustomerOrders.productId,
     *     quantityOrdered: vipCustomerOrders.quantityOrdered
     *   })
     *   .from(vipCustomerOrders)
     * );
     * ```
     */
    n(this, "exceptAll", this.createSetOperator("except", !0));
    this.config = {
      withList: d,
      table: t,
      fields: { ...s },
      distinct: f,
      setOperators: []
    }, this.isPartialSelect = o, this.session = a, this.dialect = u, this._ = {
      selectedFields: s
    }, this.tableName = Me(t), this.joinsNotNullableMap = typeof this.tableName == "string" ? { [this.tableName]: !0 } : {};
  }
  createJoin(t) {
    return (s, o) => {
      var d;
      const a = this.tableName, u = Me(s);
      if (typeof u == "string" && ((d = this.config.joins) != null && d.some((f) => f.alias === u)))
        throw new Error(`Alias "${u}" is already used in this query`);
      if (!this.isPartialSelect && (Object.keys(this.joinsNotNullableMap).length === 1 && typeof a == "string" && (this.config.fields = {
        [a]: this.config.fields
      }), typeof u == "string" && !h(s, y))) {
        const f = h(s, U) ? s._.selectedFields : h(s, J) ? s[F].selectedFields : s[w.Symbol.Columns];
        this.config.fields[u] = f;
      }
      if (typeof o == "function" && (o = o(
        new Proxy(
          this.config.fields,
          new L({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
        )
      )), this.config.joins || (this.config.joins = []), this.config.joins.push({ on: o, table: s, joinType: t, alias: u }), typeof u == "string")
        switch (t) {
          case "left": {
            this.joinsNotNullableMap[u] = !1;
            break;
          }
          case "right": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([f]) => [f, !1])
            ), this.joinsNotNullableMap[u] = !0;
            break;
          }
          case "inner": {
            this.joinsNotNullableMap[u] = !0;
            break;
          }
          case "full": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([f]) => [f, !1])
            ), this.joinsNotNullableMap[u] = !1;
            break;
          }
        }
      return this;
    };
  }
  createSetOperator(t, s) {
    return (o) => {
      const a = typeof o == "function" ? o(Tl()) : o;
      if (!Vr(this.getSelectedFields(), a.getSelectedFields()))
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
      return this.config.setOperators.push({ type: t, isAll: s, rightSelect: a }), this;
    };
  }
  /** @internal */
  addSetOperators(t) {
    return this.config.setOperators.push(...t), this;
  }
  /**
   * Adds a `where` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#filtering}
   *
   * @param where the `where` clause.
   *
   * @example
   * You can use conditional operators and `sql function` to filter the rows to be selected.
   *
   * ```ts
   * // Select all cars with green color
   * await db.select().from(cars).where(eq(cars.color, 'green'));
   * // or
   * await db.select().from(cars).where(sql`${cars.color} = 'green'`)
   * ```
   *
   * You can logically combine conditional operators with `and()` and `or()` operators:
   *
   * ```ts
   * // Select all BMW cars with a green color
   * await db.select().from(cars).where(and(eq(cars.color, 'green'), eq(cars.brand, 'BMW')));
   *
   * // Select all cars with the green or blue color
   * await db.select().from(cars).where(or(eq(cars.color, 'green'), eq(cars.color, 'blue')));
   * ```
   */
  where(t) {
    return typeof t == "function" && (t = t(
      new Proxy(
        this.config.fields,
        new L({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
      )
    )), this.config.where = t, this;
  }
  /**
   * Adds a `having` clause to the query.
   *
   * Calling this method will select only those rows that fulfill a specified condition. It is typically used with aggregate functions to filter the aggregated data based on a specified condition.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#aggregations}
   *
   * @param having the `having` clause.
   *
   * @example
   *
   * ```ts
   * // Select all brands with more than one car
   * await db.select({
   * 	brand: cars.brand,
   * 	count: sql<number>`cast(count(${cars.id}) as int)`,
   * })
   *   .from(cars)
   *   .groupBy(cars.brand)
   *   .having(({ count }) => gt(count, 1));
   * ```
   */
  having(t) {
    return typeof t == "function" && (t = t(
      new Proxy(
        this.config.fields,
        new L({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
      )
    )), this.config.having = t, this;
  }
  groupBy(...t) {
    if (typeof t[0] == "function") {
      const s = t[0](
        new Proxy(
          this.config.fields,
          new L({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
        )
      );
      this.config.groupBy = Array.isArray(s) ? s : [s];
    } else
      this.config.groupBy = t;
    return this;
  }
  orderBy(...t) {
    if (typeof t[0] == "function") {
      const s = t[0](
        new Proxy(
          this.config.fields,
          new L({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
        )
      ), o = Array.isArray(s) ? s : [s];
      this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = o : this.config.orderBy = o;
    } else {
      const s = t;
      this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = s : this.config.orderBy = s;
    }
    return this;
  }
  /**
   * Adds a `limit` clause to the query.
   *
   * Calling this method will set the maximum number of rows that will be returned by this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param limit the `limit` clause.
   *
   * @example
   *
   * ```ts
   * // Get the first 10 people from this query.
   * await db.select().from(people).limit(10);
   * ```
   */
  limit(t) {
    return this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).limit = t : this.config.limit = t, this;
  }
  /**
   * Adds an `offset` clause to the query.
   *
   * Calling this method will skip a number of rows when returning results from this query.
   *
   * See docs: {@link https://orm.drizzle.team/docs/select#limit--offset}
   *
   * @param offset the `offset` clause.
   *
   * @example
   *
   * ```ts
   * // Get the 10th-20th people from this query.
   * await db.select().from(people).offset(10).limit(10);
   * ```
   */
  offset(t) {
    return this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).offset = t : this.config.offset = t, this;
  }
  /**
   * Adds a `for` clause to the query.
   *
   * Calling this method will specify a lock strength for this query that controls how strictly it acquires exclusive access to the rows being queried.
   *
   * See docs: {@link https://www.postgresql.org/docs/current/sql-select.html#SQL-FOR-UPDATE-SHARE}
   *
   * @param strength the lock strength.
   * @param config the lock configuration.
   */
  for(t, s = {}) {
    return this.config.lockingClause = { strength: t, config: s }, this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildSelectQuery(this.config);
  }
  toSQL() {
    const { typings: t, ...s } = this.dialect.sqlToQuery(this.getSQL());
    return s;
  }
  as(t) {
    return new Proxy(
      new U(this.getSQL(), this.config.fields, t),
      new L({ alias: t, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
    );
  }
  /** @internal */
  getSelectedFields() {
    return new Proxy(
      this.config.fields,
      new L({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
    );
  }
  $dynamic() {
    return this;
  }
}
n(ea, Jn, "PgSelectQueryBuilder");
var Gn, Hn;
class Ie extends (Hn = ea, Gn = l, Hn) {
  constructor() {
    super(...arguments);
    n(this, "authToken");
    n(this, "execute", (t) => Ne.startActiveSpan("drizzle.operation", () => this._prepare().execute(t, this.authToken)));
  }
  /** @internal */
  _prepare(t) {
    const { session: s, config: o, dialect: a, joinsNotNullableMap: u, authToken: d } = this;
    if (!s)
      throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
    return Ne.startActiveSpan("drizzle.prepareQuery", () => {
      const f = de(o.fields), m = s.prepareQuery(a.sqlToQuery(this.getSQL()), f, t, !0);
      return m.joinsNotNullableMap = u, m.setToken(d);
    });
  }
  /**
   * Create a prepared statement for this query. This allows
   * the database to remember this query for the given session
   * and call it by name, rather than specifying the full query.
   *
   * {@link https://www.postgresql.org/docs/current/sql-prepare.html | Postgres prepare documentation}
   */
  prepare(t) {
    return this._prepare(t);
  }
  /** @internal */
  setToken(t) {
    return this.authToken = t, this;
  }
}
n(Ie, Gn, "PgSelect");
za(Ie, [Qr]);
function Z(i, e) {
  return (t, s, ...o) => {
    const a = [s, ...o].map((u) => ({
      type: i,
      isAll: e,
      rightSelect: u
    }));
    for (const u of a)
      if (!Vr(t.getSelectedFields(), u.rightSelect.getSelectedFields()))
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
    return t.addSetOperators(a);
  };
}
const Tl = () => ({
  union: Nl,
  unionAll: xl,
  intersect: vl,
  intersectAll: Bl,
  except: ql,
  exceptAll: Dl
}), Nl = Z("union", !1), xl = Z("union", !0), vl = Z("intersect", !1), Bl = Z("intersect", !0), ql = Z("except", !1), Dl = Z("except", !0);
var Yn;
Yn = l;
class Ee {
  constructor(e) {
    n(this, "dialect");
    n(this, "dialectConfig");
    this.dialect = h(e, le) ? e : void 0, this.dialectConfig = h(e, le) ? void 0 : e;
  }
  $with(e) {
    const t = this;
    return {
      as(s) {
        return typeof s == "function" && (s = s(t)), new Proxy(
          new vr(s.getSQL(), s.getSelectedFields(), e, !0),
          new L({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
    };
  }
  with(...e) {
    const t = this;
    function s(u) {
      return new W({
        fields: u ?? void 0,
        session: void 0,
        dialect: t.getDialect(),
        withList: e
      });
    }
    function o(u) {
      return new W({
        fields: u ?? void 0,
        session: void 0,
        dialect: t.getDialect(),
        distinct: !0
      });
    }
    function a(u, d) {
      return new W({
        fields: d ?? void 0,
        session: void 0,
        dialect: t.getDialect(),
        distinct: { on: u }
      });
    }
    return { select: s, selectDistinct: o, selectDistinctOn: a };
  }
  select(e) {
    return new W({
      fields: e ?? void 0,
      session: void 0,
      dialect: this.getDialect()
    });
  }
  selectDistinct(e) {
    return new W({
      fields: e ?? void 0,
      session: void 0,
      dialect: this.getDialect(),
      distinct: !0
    });
  }
  selectDistinctOn(e, t) {
    return new W({
      fields: t ?? void 0,
      session: void 0,
      dialect: this.getDialect(),
      distinct: { on: e }
    });
  }
  // Lazy load dialect to avoid circular dependency
  getDialect() {
    return this.dialect || (this.dialect = new le(this.dialectConfig)), this.dialect;
  }
}
n(Ee, Yn, "PgQueryBuilder");
var Xn;
Xn = l;
class Cl {
  constructor(e, t) {
    n(this, "as");
    n(this, "for");
    n(this, "to");
    n(this, "using");
    n(this, "withCheck");
    /** @internal */
    n(this, "_linkedTable");
    this.name = e, t && (this.as = t.as, this.for = t.for, this.to = t.to, this.using = t.using, this.withCheck = t.withCheck);
  }
  link(e) {
    return this._linkedTable = e, this;
  }
}
n(Cl, Xn, "PgPolicy");
var Zn;
Zn = l;
class Ol {
  constructor(e, t) {
    /** @internal */
    n(this, "_existing");
    /** @internal */
    n(this, "createDb");
    /** @internal */
    n(this, "createRole");
    /** @internal */
    n(this, "inherit");
    this.name = e, t && (this.createDb = t.createDb, this.createRole = t.createRole, this.inherit = t.inherit);
  }
  existing() {
    return this._existing = !0, this;
  }
}
n(Ol, Zn, "PgRole");
const We = Symbol.for("drizzle:PgViewConfig");
var kn;
kn = l;
class Ue {
  constructor(e, t) {
    n(this, "config", {});
    this.name = e, this.schema = t;
  }
  with(e) {
    return this.config.with = e, this;
  }
}
n(Ue, kn, "PgDefaultViewBuilderCore");
var er, tr;
class ta extends (tr = Ue, er = l, tr) {
  as(e) {
    typeof e == "function" && (e = e(new Ee()));
    const t = new L({
      alias: this.name,
      sqlBehavior: "error",
      sqlAliasedBehavior: "alias",
      replaceOriginalName: !0
    }), s = new Proxy(e.getSelectedFields(), t);
    return new Proxy(
      new ie({
        pgConfig: this.config,
        config: {
          name: this.name,
          schema: this.schema,
          selectedFields: s,
          query: e.getSQL().inlineParams()
        }
      }),
      t
    );
  }
}
n(ta, er, "PgViewBuilder");
var ir, sr;
class ia extends (sr = Ue, ir = l, sr) {
  constructor(t, s, o) {
    super(t, o);
    n(this, "columns");
    this.columns = qe(Zo(t, s));
  }
  existing() {
    return new Proxy(
      new ie({
        pgConfig: void 0,
        config: {
          name: this.name,
          schema: this.schema,
          selectedFields: this.columns,
          query: void 0
        }
      }),
      new L({
        alias: this.name,
        sqlBehavior: "error",
        sqlAliasedBehavior: "alias",
        replaceOriginalName: !0
      })
    );
  }
  as(t) {
    return new Proxy(
      new ie({
        pgConfig: this.config,
        config: {
          name: this.name,
          schema: this.schema,
          selectedFields: this.columns,
          query: t.inlineParams()
        }
      }),
      new L({
        alias: this.name,
        sqlBehavior: "error",
        sqlAliasedBehavior: "alias",
        replaceOriginalName: !0
      })
    );
  }
}
n(ia, ir, "PgManualViewBuilder");
var nr;
nr = l;
class _e {
  constructor(e, t) {
    n(this, "config", {});
    this.name = e, this.schema = t;
  }
  using(e) {
    return this.config.using = e, this;
  }
  with(e) {
    return this.config.with = e, this;
  }
  tablespace(e) {
    return this.config.tablespace = e, this;
  }
  withNoData() {
    return this.config.withNoData = !0, this;
  }
}
n(_e, nr, "PgMaterializedViewBuilderCore");
var rr, or;
class sa extends (or = _e, rr = l, or) {
  as(e) {
    typeof e == "function" && (e = e(new Ee()));
    const t = new L({
      alias: this.name,
      sqlBehavior: "error",
      sqlAliasedBehavior: "alias",
      replaceOriginalName: !0
    }), s = new Proxy(e.getSelectedFields(), t);
    return new Proxy(
      new se({
        pgConfig: {
          with: this.config.with,
          using: this.config.using,
          tablespace: this.config.tablespace,
          withNoData: this.config.withNoData
        },
        config: {
          name: this.name,
          schema: this.schema,
          selectedFields: s,
          query: e.getSQL().inlineParams()
        }
      }),
      t
    );
  }
}
n(sa, rr, "PgMaterializedViewBuilder");
var ar, lr;
class na extends (lr = _e, ar = l, lr) {
  constructor(t, s, o) {
    super(t, o);
    n(this, "columns");
    this.columns = qe(Zo(t, s));
  }
  existing() {
    return new Proxy(
      new se({
        pgConfig: {
          tablespace: this.config.tablespace,
          using: this.config.using,
          with: this.config.with,
          withNoData: this.config.withNoData
        },
        config: {
          name: this.name,
          schema: this.schema,
          selectedFields: this.columns,
          query: void 0
        }
      }),
      new L({
        alias: this.name,
        sqlBehavior: "error",
        sqlAliasedBehavior: "alias",
        replaceOriginalName: !0
      })
    );
  }
  as(t) {
    return new Proxy(
      new se({
        pgConfig: {
          tablespace: this.config.tablespace,
          using: this.config.using,
          with: this.config.with,
          withNoData: this.config.withNoData
        },
        config: {
          name: this.name,
          schema: this.schema,
          selectedFields: this.columns,
          query: t.inlineParams()
        }
      }),
      new L({
        alias: this.name,
        sqlBehavior: "error",
        sqlAliasedBehavior: "alias",
        replaceOriginalName: !0
      })
    );
  }
}
n(na, ar, "PgManualMaterializedViewBuilder");
var ur, cr, dr;
class ie extends (dr = re, cr = l, ur = We, dr) {
  constructor({ pgConfig: t, config: s }) {
    super(s);
    n(this, ur);
    t && (this[We] = {
      with: t.with
    });
  }
}
n(ie, cr, "PgView");
const Ge = Symbol.for("drizzle:PgMaterializedViewConfig");
var hr, fr, mr;
class se extends (mr = re, fr = l, hr = Ge, mr) {
  constructor({ pgConfig: t, config: s }) {
    super(s);
    n(this, hr);
    this[Ge] = {
      with: t == null ? void 0 : t.with,
      using: t == null ? void 0 : t.using,
      tablespace: t == null ? void 0 : t.tablespace,
      withNoData: t == null ? void 0 : t.withNoData
    };
  }
}
n(se, fr, "PgMaterializedView");
function Ll(i, e, t) {
  return e ? new ia(i, e, t) : new ta(i, t);
}
function jl(i, e, t) {
  return e ? new na(i, e, t) : new sa(i, t);
}
function Al(i) {
  return h(i, ie);
}
function zl(i) {
  return h(i, se);
}
export {
  pr as F,
  E as P,
  y as S,
  ha as U,
  F as V,
  Ll as a,
  jl as b,
  Vl as c,
  Al as d,
  zl as e,
  Ol as f,
  Cl as g,
  We as h,
  ma as i,
  Ge as j,
  le as k,
  xr as l,
  ie as m,
  p as n,
  bl as p,
  r as s,
  wr as u
};
