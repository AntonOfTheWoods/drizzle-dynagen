var oo = Object.defineProperty;
var uo = (i, e, t) => e in i ? oo(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var s = (i, e, t) => uo(i, typeof e != "symbol" ? e + "" : e, t);
import { e as u, b as Se, i as f, T as w, I as lo, c as Pe, C as co, g as oe } from "./casing-BBE-_e8-.js";
var He;
He = u;
class v {
  constructor(e, t) {
    s(this, "name");
    s(this, "keyAsName");
    s(this, "primary");
    s(this, "notNull");
    s(this, "default");
    s(this, "defaultFn");
    s(this, "onUpdateFn");
    s(this, "hasDefault");
    s(this, "isUnique");
    s(this, "uniqueName");
    s(this, "uniqueType");
    s(this, "dataType");
    s(this, "columnType");
    s(this, "enumValues");
    s(this, "generated");
    s(this, "generatedIdentity");
    s(this, "config");
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
s(v, He, "Column");
var Ye;
Ye = u;
class pr {
  constructor(e, t, n) {
    s(this, "config");
    /**
     * Alias for {@link $defaultFn}.
     */
    s(this, "$default", this.$defaultFn);
    /**
     * Alias for {@link $onUpdateFn}.
     */
    s(this, "$onUpdate", this.$onUpdateFn);
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
      columnType: n,
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
s(pr, Ye, "ColumnBuilder");
var Xe;
Xe = u;
class yr {
  constructor(e, t) {
    /** @internal */
    s(this, "reference");
    /** @internal */
    s(this, "_onUpdate", "no action");
    /** @internal */
    s(this, "_onDelete", "no action");
    this.reference = () => {
      const { name: n, columns: a, foreignColumns: o } = e();
      return { name: n, columns: a, foreignTable: o[0].table, foreignColumns: o };
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
    return new wr(e, this);
  }
}
s(yr, Xe, "PgForeignKeyBuilder");
var Ze;
Ze = u;
class wr {
  constructor(e, t) {
    s(this, "reference");
    s(this, "onUpdate");
    s(this, "onDelete");
    this.table = e, this.reference = t.reference, this.onUpdate = t._onUpdate, this.onDelete = t._onDelete;
  }
  getName() {
    const { name: e, columns: t, foreignColumns: n } = this.reference(), a = t.map((d) => d.name), o = n.map((d) => d.name), l = [
      this.table[Se],
      ...a,
      n[0].table[Se],
      ...o
    ];
    return e ?? `${l.join("_")}_fk`;
  }
}
s(wr, Ze, "PgForeignKey");
function fo(i, ...e) {
  return i(...e);
}
function br(i, e) {
  return `${i[Se]}_${e.join("_")}_unique`;
}
var ke;
ke = u;
class ho {
  constructor(e, t) {
    /** @internal */
    s(this, "columns");
    /** @internal */
    s(this, "nullsNotDistinctConfig", !1);
    this.name = t, this.columns = e;
  }
  nullsNotDistinct() {
    return this.nullsNotDistinctConfig = !0, this;
  }
  /** @internal */
  build(e) {
    return new Sr(e, this.columns, this.nullsNotDistinctConfig, this.name);
  }
}
s(ho, ke, "PgUniqueConstraintBuilder");
var et;
et = u;
class Sr {
  constructor(e, t, n, a) {
    s(this, "columns");
    s(this, "name");
    s(this, "nullsNotDistinct", !1);
    this.table = e, this.columns = t, this.name = a ?? br(this.table, this.columns.map((o) => o.name)), this.nullsNotDistinct = n;
  }
  getName() {
    return this.name;
  }
}
s(Sr, et, "PgUniqueConstraint");
function Ke(i, e, t) {
  for (let n = e; n < i.length; n++) {
    const a = i[n];
    if (a === "\\") {
      n++;
      continue;
    }
    if (a === '"')
      return [i.slice(e, n).replace(/\\/g, ""), n + 1];
    if (!t && (a === "," || a === "}"))
      return [i.slice(e, n).replace(/\\/g, ""), n];
  }
  return [i.slice(e).replace(/\\/g, ""), i.length];
}
function Pr(i, e = 0) {
  const t = [];
  let n = e, a = !1;
  for (; n < i.length; ) {
    const o = i[n];
    if (o === ",") {
      (a || n === e) && t.push(""), a = !0, n++;
      continue;
    }
    if (a = !1, o === "\\") {
      n += 2;
      continue;
    }
    if (o === '"') {
      const [h, m] = Ke(i, n + 1, !0);
      t.push(h), n = m;
      continue;
    }
    if (o === "}")
      return [t, n + 1];
    if (o === "{") {
      const [h, m] = Pr(i, n + 1);
      t.push(h), n = m;
      continue;
    }
    const [l, d] = Ke(i, n, !1);
    t.push(l), n = d;
  }
  return [t, n];
}
function mo(i) {
  const [e] = Pr(i, 1);
  return e;
}
function $r(i) {
  return `{${i.map((e) => Array.isArray(e) ? $r(e) : typeof e == "string" ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${e}`).join(",")}}`;
}
var tt, it;
class $ extends (it = pr, tt = u, it) {
  constructor() {
    super(...arguments);
    s(this, "foreignKeyConfigs", []);
  }
  array(t) {
    return new Nr(this.config.name, this, t);
  }
  references(t, n = {}) {
    return this.foreignKeyConfigs.push({ ref: t, actions: n }), this;
  }
  unique(t, n) {
    return this.config.isUnique = !0, this.config.uniqueName = t, this.config.uniqueType = n == null ? void 0 : n.nulls, this;
  }
  generatedAlwaysAs(t) {
    return this.config.generated = {
      as: t,
      type: "always",
      mode: "stored"
    }, this;
  }
  /** @internal */
  buildForeignKeys(t, n) {
    return this.foreignKeyConfigs.map(({ ref: a, actions: o }) => fo(
      (l, d) => {
        const h = new yr(() => {
          const m = l();
          return { columns: [t], foreignColumns: [m] };
        });
        return d.onUpdate && h.onUpdate(d.onUpdate), d.onDelete && h.onDelete(d.onDelete), h.build(n);
      },
      a,
      o
    ));
  }
  /** @internal */
  buildExtraConfigColumn(t) {
    return new Tr(t, this.config);
  }
}
s($, tt, "PgColumnBuilder");
var nt, st;
class p extends (st = v, nt = u, st) {
  constructor(e, t) {
    t.uniqueName || (t.uniqueName = br(e, [t.name])), super(e, t), this.table = e;
  }
}
s(p, nt, "PgColumn");
var rt, at;
class Tr extends (at = p, rt = u, at) {
  constructor() {
    super(...arguments);
    s(this, "indexConfig", {
      order: this.config.order ?? "asc",
      nulls: this.config.nulls ?? "last",
      opClass: this.config.opClass
    });
    s(this, "defaultConfig", {
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
s(Tr, rt, "ExtraConfigColumn");
var ot, ut;
class Nr extends (ut = $, ot = u, ut) {
  constructor(e, t, n) {
    super(e, "array", "PgArray"), this.config.baseBuilder = t, this.config.size = n;
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
s(Nr, ot, "PgArrayBuilder");
var lt, ct;
const fe = class fe extends (ct = p, lt = u, ct) {
  constructor(t, n, a, o) {
    super(t, n);
    s(this, "size");
    this.baseColumn = a, this.range = o, this.size = n.size;
  }
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(t) {
    return typeof t == "string" && (t = mo(t)), t.map((n) => this.baseColumn.mapFromDriverValue(n));
  }
  mapToDriverValue(t, n = !1) {
    const a = t.map(
      (o) => o === null ? null : f(this.baseColumn, fe) ? this.baseColumn.mapToDriverValue(o, !0) : this.baseColumn.mapToDriverValue(o)
    );
    return n ? a : $r(a);
  }
};
s(fe, lt, "PgArray");
let $e = fe;
const Te = Symbol.for("drizzle:isPgEnum");
function go(i) {
  return !!i && typeof i == "function" && Te in i && i[Te] === !0;
}
var dt, ft;
class xr extends (ft = $, dt = u, ft) {
  constructor(e, t) {
    super(e, "string", "PgEnumColumn"), this.config.enum = t;
  }
  /** @internal */
  build(e) {
    return new Br(
      e,
      this.config
    );
  }
}
s(xr, dt, "PgEnumColumnBuilder");
var ht, mt;
class Br extends (mt = p, ht = u, mt) {
  constructor(t, n) {
    super(t, n);
    s(this, "enum", this.config.enum);
    s(this, "enumValues", this.config.enum.enumValues);
    this.enum = n.enum;
  }
  getSQLType() {
    return this.enum.enumName;
  }
}
s(Br, ht, "PgEnumColumn");
function Au(i, e, t) {
  const n = Object.assign(
    (a) => new xr(a ?? "", n),
    {
      enumName: i,
      enumValues: e,
      schema: t,
      [Te]: !0
    }
  );
  return n;
}
var gt;
gt = u;
class U {
  constructor(e, t, n, a = !1) {
    this._ = {
      brand: "Subquery",
      sql: e,
      selectedFields: t,
      alias: n,
      isWith: a
    };
  }
  // getSQL(): SQL<unknown> {
  // 	return new SQL([this]);
  // }
}
s(U, gt, "Subquery");
var pt, yt;
class qr extends (yt = U, pt = u, yt) {
}
s(qr, pt, "WithSubquery");
const Ne = {
  startActiveSpan(i, e) {
    return e();
  }
}, Q = Symbol.for("drizzle:ViewBaseConfig");
function Dr(i) {
  return i != null && typeof i.getSQL == "function";
}
function po(i) {
  var t;
  const e = { sql: "", params: [] };
  for (const n of i)
    e.sql += n.sql, e.params.push(...n.params), (t = n.typings) != null && t.length && (e.typings || (e.typings = []), e.typings.push(...n.typings));
  return e;
}
var wt;
wt = u;
class C {
  constructor(e) {
    s(this, "value");
    this.value = Array.isArray(e) ? e : [e];
  }
  getSQL() {
    return new y([this]);
  }
}
s(C, wt, "StringChunk");
var bt;
bt = u;
const G = class G {
  constructor(e) {
    /** @internal */
    s(this, "decoder", Cr);
    s(this, "shouldInlineParams", !1);
    this.queryChunks = e;
  }
  append(e) {
    return this.queryChunks.push(...e.queryChunks), this;
  }
  toQuery(e) {
    return Ne.startActiveSpan("drizzle.buildSQL", (t) => {
      const n = this.buildQueryFromSourceParams(this.queryChunks, e);
      return t == null || t.setAttributes({
        "drizzle.query.text": n.sql,
        "drizzle.query.params": JSON.stringify(n.params)
      }), n;
    });
  }
  buildQueryFromSourceParams(e, t) {
    const n = Object.assign({}, t, {
      inlineParams: t.inlineParams || this.shouldInlineParams,
      paramStartIndex: t.paramStartIndex || { value: 0 }
    }), {
      casing: a,
      escapeName: o,
      escapeParam: l,
      prepareTyping: d,
      inlineParams: h,
      paramStartIndex: m
    } = n;
    return po(e.map((c) => {
      var N;
      if (f(c, C))
        return { sql: c.value.join(""), params: [] };
      if (f(c, le))
        return { sql: o(c.value), params: [] };
      if (c === void 0)
        return { sql: "", params: [] };
      if (Array.isArray(c)) {
        const g = [new C("(")];
        for (const [b, x] of c.entries())
          g.push(x), b < c.length - 1 && g.push(new C(", "));
        return g.push(new C(")")), this.buildQueryFromSourceParams(g, n);
      }
      if (f(c, G))
        return this.buildQueryFromSourceParams(c.queryChunks, {
          ...n,
          inlineParams: h || c.shouldInlineParams
        });
      if (f(c, w)) {
        const g = c[w.Symbol.Schema], b = c[w.Symbol.Name];
        return {
          sql: g === void 0 ? o(b) : o(g) + "." + o(b),
          params: []
        };
      }
      if (f(c, v)) {
        const g = a.getColumnCasing(c);
        if (t.invokeSource === "indexes")
          return { sql: o(g), params: [] };
        const b = c.table[w.Symbol.Schema];
        return {
          sql: c.table[lo] || b === void 0 ? o(c.table[w.Symbol.Name]) + "." + o(g) : o(b) + "." + o(c.table[w.Symbol.Name]) + "." + o(g),
          params: []
        };
      }
      if (f(c, J)) {
        const g = c[Q].schema, b = c[Q].name;
        return {
          sql: g === void 0 ? o(b) : o(g) + "." + o(b),
          params: []
        };
      }
      if (f(c, Y)) {
        if (f(c.value, k))
          return { sql: l(m.value++, c), params: [c], typings: ["none"] };
        const g = c.value === null ? null : c.encoder.mapToDriverValue(c.value);
        if (f(g, G))
          return this.buildQueryFromSourceParams([g], n);
        if (h)
          return { sql: this.mapInlineParam(g, n), params: [] };
        let b = ["none"];
        return d && (b = [d(c.encoder)]), { sql: l(m.value++, g), params: [g], typings: b };
      }
      return f(c, k) ? { sql: l(m.value++, c), params: [c], typings: ["none"] } : f(c, G.Aliased) && c.fieldAlias !== void 0 ? { sql: o(c.fieldAlias), params: [] } : f(c, U) ? c._.isWith ? { sql: o(c._.alias), params: [] } : this.buildQueryFromSourceParams([
        new C("("),
        c._.sql,
        new C(") "),
        new le(c._.alias)
      ], n) : go(c) ? c.schema ? { sql: o(c.schema) + "." + o(c.enumName), params: [] } : { sql: o(c.enumName), params: [] } : Dr(c) ? (N = c.shouldOmitSQLParens) != null && N.call(c) ? this.buildQueryFromSourceParams([c.getSQL()], n) : this.buildQueryFromSourceParams([
        new C("("),
        c.getSQL(),
        new C(")")
      ], n) : h ? { sql: this.mapInlineParam(c, n), params: [] } : { sql: l(m.value++, c), params: [c], typings: ["none"] };
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
      const n = e.toString();
      return t(n === "[object Object]" ? JSON.stringify(e) : n);
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
s(G, bt, "SQL");
let y = G;
var St;
St = u;
class le {
  constructor(e) {
    s(this, "brand");
    this.value = e;
  }
  getSQL() {
    return new y([this]);
  }
}
s(le, St, "Name");
function yo(i) {
  return typeof i == "object" && i !== null && "mapToDriverValue" in i && typeof i.mapToDriverValue == "function";
}
const Cr = {
  mapFromDriverValue: (i) => i
}, Or = {
  mapToDriverValue: (i) => i
};
({
  ...Cr,
  ...Or
});
var Pt;
Pt = u;
class Y {
  /**
   * @param value - Parameter value
   * @param encoder - Encoder to convert the value to a driver parameter
   */
  constructor(e, t = Or) {
    s(this, "brand");
    this.value = e, this.encoder = t;
  }
  getSQL() {
    return new y([this]);
  }
}
s(Y, Pt, "Param");
function r(i, ...e) {
  const t = [];
  (e.length > 0 || i.length > 0 && i[0] !== "") && t.push(new C(i[0]));
  for (const [n, a] of e.entries())
    t.push(a, new C(i[n + 1]));
  return new y(t);
}
((i) => {
  function e() {
    return new y([]);
  }
  i.empty = e;
  function t(h) {
    return new y(h);
  }
  i.fromList = t;
  function n(h) {
    return new y([new C(h)]);
  }
  i.raw = n;
  function a(h, m) {
    const c = [];
    for (const [N, g] of h.entries())
      N > 0 && m !== void 0 && c.push(m), c.push(g);
    return new y(c);
  }
  i.join = a;
  function o(h) {
    return new le(h);
  }
  i.identifier = o;
  function l(h) {
    return new k(h);
  }
  i.placeholder = l;
  function d(h, m) {
    return new Y(h, m);
  }
  i.param = d;
})(r);
((i) => {
  var t;
  t = u;
  const n = class n {
    constructor(o, l) {
      /** @internal */
      s(this, "isSelectionField", !1);
      this.sql = o, this.fieldAlias = l;
    }
    getSQL() {
      return this.sql;
    }
    /** @internal */
    clone() {
      return new n(this.sql, this.fieldAlias);
    }
  };
  s(n, t, "SQL.Aliased");
  let e = n;
  i.Aliased = e;
})(y);
var $t;
$t = u;
class k {
  constructor(e) {
    this.name = e;
  }
  getSQL() {
    return new y([this]);
  }
}
s(k, $t, "Placeholder");
const wo = Symbol.for("drizzle:IsDrizzleView");
var Tt, Nt, xt;
xt = u, Nt = Q, Tt = wo;
class J {
  constructor({ name: e, schema: t, selectedFields: n, query: a }) {
    /** @internal */
    s(this, Nt);
    /** @internal */
    s(this, Tt, !0);
    this[Q] = {
      name: e,
      originalName: e,
      schema: t,
      selectedFields: n,
      query: a,
      isExisting: !a,
      isAlias: !1
    };
  }
  getSQL() {
    return new y([this]);
  }
}
s(J, xt, "View");
v.prototype.getSQL = function() {
  return new y([this]);
};
w.prototype.getSQL = function() {
  return new y([this]);
};
U.prototype.getSQL = function() {
  return new y([this]);
};
var Bt;
Bt = u;
class ee {
  constructor(e) {
    this.table = e;
  }
  get(e, t) {
    return t === "table" ? this.table : e[t];
  }
}
s(ee, Bt, "ColumnAliasProxyHandler");
var qt;
qt = u;
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
    if (t === Q)
      return {
        ...e[Q],
        name: this.alias,
        isAlias: !0
      };
    if (t === w.Symbol.Columns) {
      const a = e[w.Symbol.Columns];
      if (!a)
        return a;
      const o = {};
      return Object.keys(a).map((l) => {
        o[l] = new Proxy(
          a[l],
          new ee(new Proxy(e, this))
        );
      }), o;
    }
    const n = e[t];
    return f(n, v) ? new Proxy(n, new ee(new Proxy(e, this))) : n;
  }
}
s(pe, qt, "TableAliasProxyHandler");
function be(i, e) {
  return new Proxy(i, new pe(e, !1));
}
function K(i, e) {
  return new Proxy(
    i,
    new ee(new Proxy(i.table, new pe(e, !1)))
  );
}
function Fr(i, e) {
  return new y.Aliased(ce(i.sql, e), i.fieldAlias);
}
function ce(i, e) {
  return r.join(i.queryChunks.map((t) => f(t, v) ? K(t, e) : f(t, y) ? ce(t, e) : f(t, y.Aliased) ? Fr(t, e) : t));
}
var Dt, Ct;
class Qr extends (Ct = Error, Dt = u, Ct) {
  constructor({ message: e, cause: t }) {
    super(e), this.name = "DrizzleError", this.cause = t;
  }
}
s(Qr, Dt, "DrizzleError");
function z(i, e) {
  return yo(e) && !Dr(i) && !f(i, Y) && !f(i, k) && !f(i, v) && !f(i, w) && !f(i, J) ? new Y(i, e) : i;
}
const Vr = (i, e) => r`${i} = ${z(e, i)}`, bo = (i, e) => r`${i} <> ${z(e, i)}`;
function xe(...i) {
  const e = i.filter(
    (t) => t !== void 0
  );
  if (e.length !== 0)
    return e.length === 1 ? new y(e) : new y([
      new C("("),
      r.join(e, new C(" and ")),
      new C(")")
    ]);
}
function So(...i) {
  const e = i.filter(
    (t) => t !== void 0
  );
  if (e.length !== 0)
    return e.length === 1 ? new y(e) : new y([
      new C("("),
      r.join(e, new C(" or ")),
      new C(")")
    ]);
}
function Po(i) {
  return r`not ${i}`;
}
const $o = (i, e) => r`${i} > ${z(e, i)}`, To = (i, e) => r`${i} >= ${z(e, i)}`, No = (i, e) => r`${i} < ${z(e, i)}`, xo = (i, e) => r`${i} <= ${z(e, i)}`;
function Bo(i, e) {
  return Array.isArray(e) ? e.length === 0 ? r`false` : r`${i} in ${e.map((t) => z(t, i))}` : r`${i} in ${z(e, i)}`;
}
function qo(i, e) {
  return Array.isArray(e) ? e.length === 0 ? r`true` : r`${i} not in ${e.map((t) => z(t, i))}` : r`${i} not in ${z(e, i)}`;
}
function Do(i) {
  return r`${i} is null`;
}
function Co(i) {
  return r`${i} is not null`;
}
function Oo(i) {
  return r`exists ${i}`;
}
function Fo(i) {
  return r`not exists ${i}`;
}
function Qo(i, e, t) {
  return r`${i} between ${z(e, i)} and ${z(
    t,
    i
  )}`;
}
function Vo(i, e, t) {
  return r`${i} not between ${z(
    e,
    i
  )} and ${z(t, i)}`;
}
function Lo(i, e) {
  return r`${i} like ${e}`;
}
function jo(i, e) {
  return r`${i} not like ${e}`;
}
function Ao(i, e) {
  return r`${i} ilike ${e}`;
}
function vo(i, e) {
  return r`${i} not ilike ${e}`;
}
function zo(i) {
  return r`${i} asc`;
}
function Io(i) {
  return r`${i} desc`;
}
var Ot, Ft;
Ft = u, Ot = Symbol.toStringTag;
class Lr {
  constructor() {
    s(this, Ot, "QueryPromise");
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
s(Lr, Ft, "QueryPromise");
function de(i, e) {
  return Object.entries(i).reduce((t, [n, a]) => {
    if (typeof n != "string")
      return t;
    const o = e ? [...e, n] : [n];
    return f(a, v) || f(a, y) || f(a, y.Aliased) ? t.push({ path: o, field: a }) : f(a, w) ? t.push(...de(a[w.Symbol.Columns], o)) : t.push(...de(a, o)), t;
  }, []);
}
function jr(i, e) {
  const t = Object.keys(i), n = Object.keys(e);
  if (t.length !== n.length)
    return !1;
  for (const [a, o] of t.entries())
    if (o !== n[a])
      return !1;
  return !0;
}
function Eo(i, e) {
  for (const t of e)
    for (const n of Object.getOwnPropertyNames(t.prototype))
      n !== "constructor" && Object.defineProperty(
        i.prototype,
        n,
        Object.getOwnPropertyDescriptor(t.prototype, n) || /* @__PURE__ */ Object.create(null)
      );
}
function De(i) {
  return i[w.Symbol.Columns];
}
function Me(i) {
  return f(i, U) ? i._.alias : f(i, J) ? i[Q].name : f(i, y) ? void 0 : i[w.Symbol.IsAlias] ? i[w.Symbol.Name] : i[w.Symbol.BaseName];
}
function O(i, e) {
  return {
    name: typeof i == "string" && i.length > 0 ? i : "",
    config: typeof i == "object" ? i : e
  };
}
var Qt, Vt;
class se extends (Vt = $, Qt = u, Vt) {
  generatedAlwaysAsIdentity(e) {
    if (e) {
      const { name: t, ...n } = e;
      this.config.generatedIdentity = {
        type: "always",
        sequenceName: t,
        sequenceOptions: n
      };
    } else
      this.config.generatedIdentity = {
        type: "always"
      };
    return this.config.hasDefault = !0, this.config.notNull = !0, this;
  }
  generatedByDefaultAsIdentity(e) {
    if (e) {
      const { name: t, ...n } = e;
      this.config.generatedIdentity = {
        type: "byDefault",
        sequenceName: t,
        sequenceOptions: n
      };
    } else
      this.config.generatedIdentity = {
        type: "byDefault"
      };
    return this.config.hasDefault = !0, this.config.notNull = !0, this;
  }
}
s(se, Qt, "PgIntColumnBaseBuilder");
var Lt, jt;
class Ar extends (jt = se, Lt = u, jt) {
  constructor(e) {
    super(e, "number", "PgBigInt53");
  }
  /** @internal */
  build(e) {
    return new vr(e, this.config);
  }
}
s(Ar, Lt, "PgBigInt53Builder");
var At, vt;
class vr extends (vt = p, At = u, vt) {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
s(vr, At, "PgBigInt53");
var zt, It;
class zr extends (It = se, zt = u, It) {
  constructor(e) {
    super(e, "bigint", "PgBigInt64");
  }
  /** @internal */
  build(e) {
    return new Ir(
      e,
      this.config
    );
  }
}
s(zr, zt, "PgBigInt64Builder");
var Et, Ut;
class Ir extends (Ut = p, Et = u, Ut) {
  getSQLType() {
    return "bigint";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
s(Ir, Et, "PgBigInt64");
function Uo(i, e) {
  const { name: t, config: n } = O(i, e);
  return n.mode === "number" ? new Ar(t) : new zr(t);
}
var _t, Kt;
class Er extends (Kt = $, _t = u, Kt) {
  constructor(e) {
    super(e, "number", "PgBigSerial53"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new Ur(
      e,
      this.config
    );
  }
}
s(Er, _t, "PgBigSerial53Builder");
var Mt, Rt;
class Ur extends (Rt = p, Mt = u, Rt) {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
s(Ur, Mt, "PgBigSerial53");
var Jt, Wt;
class _r extends (Wt = $, Jt = u, Wt) {
  constructor(e) {
    super(e, "bigint", "PgBigSerial64"), this.config.hasDefault = !0;
  }
  /** @internal */
  build(e) {
    return new Kr(
      e,
      this.config
    );
  }
}
s(_r, Jt, "PgBigSerial64Builder");
var Gt, Ht;
class Kr extends (Ht = p, Gt = u, Ht) {
  getSQLType() {
    return "bigserial";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
s(Kr, Gt, "PgBigSerial64");
function _o(i, e) {
  const { name: t, config: n } = O(i, e);
  return n.mode === "number" ? new Er(t) : new _r(t);
}
var Yt, Xt;
class Mr extends (Xt = $, Yt = u, Xt) {
  constructor(e) {
    super(e, "boolean", "PgBoolean");
  }
  /** @internal */
  build(e) {
    return new Rr(e, this.config);
  }
}
s(Mr, Yt, "PgBooleanBuilder");
var Zt, kt;
class Rr extends (kt = p, Zt = u, kt) {
  getSQLType() {
    return "boolean";
  }
}
s(Rr, Zt, "PgBoolean");
function Ko(i) {
  return new Mr(i ?? "");
}
var ei, ti;
class Jr extends (ti = $, ei = u, ti) {
  constructor(e, t) {
    super(e, "string", "PgChar"), this.config.length = t.length, this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new Wr(
      e,
      this.config
    );
  }
}
s(Jr, ei, "PgCharBuilder");
var ii, ni;
class Wr extends (ni = p, ii = u, ni) {
  constructor() {
    super(...arguments);
    s(this, "length", this.config.length);
    s(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "char" : `char(${this.length})`;
  }
}
s(Wr, ii, "PgChar");
function Mo(i, e = {}) {
  const { name: t, config: n } = O(i, e);
  return new Jr(t, n);
}
var si, ri;
class Gr extends (ri = $, si = u, ri) {
  constructor(e) {
    super(e, "string", "PgCidr");
  }
  /** @internal */
  build(e) {
    return new Hr(e, this.config);
  }
}
s(Gr, si, "PgCidrBuilder");
var ai, oi;
class Hr extends (oi = p, ai = u, oi) {
  getSQLType() {
    return "cidr";
  }
}
s(Hr, ai, "PgCidr");
function Ro(i) {
  return new Gr(i ?? "");
}
var ui, li;
class Yr extends (li = $, ui = u, li) {
  constructor(e, t, n) {
    super(e, "custom", "PgCustomColumn"), this.config.fieldConfig = t, this.config.customTypeParams = n;
  }
  /** @internal */
  build(e) {
    return new Xr(
      e,
      this.config
    );
  }
}
s(Yr, ui, "PgCustomColumnBuilder");
var ci, di;
class Xr extends (di = p, ci = u, di) {
  constructor(t, n) {
    super(t, n);
    s(this, "sqlName");
    s(this, "mapTo");
    s(this, "mapFrom");
    this.sqlName = n.customTypeParams.dataType(n.fieldConfig), this.mapTo = n.customTypeParams.toDriver, this.mapFrom = n.customTypeParams.fromDriver;
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
s(Xr, ci, "PgCustomColumn");
function Jo(i) {
  return (e, t) => {
    const { name: n, config: a } = O(e, t);
    return new Yr(n, a, i);
  };
}
var fi, hi;
class X extends (hi = $, fi = u, hi) {
  defaultNow() {
    return this.default(r`now()`);
  }
}
s(X, fi, "PgDateColumnBaseBuilder");
var mi, gi;
class Zr extends (gi = X, mi = u, gi) {
  constructor(e) {
    super(e, "date", "PgDate");
  }
  /** @internal */
  build(e) {
    return new Ce(e, this.config);
  }
}
s(Zr, mi, "PgDateBuilder");
var pi, yi;
class Ce extends (yi = p, pi = u, yi) {
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
s(Ce, pi, "PgDate");
var wi, bi;
class kr extends (bi = X, wi = u, bi) {
  constructor(e) {
    super(e, "string", "PgDateString");
  }
  /** @internal */
  build(e) {
    return new Oe(
      e,
      this.config
    );
  }
}
s(kr, wi, "PgDateStringBuilder");
var Si, Pi;
class Oe extends (Pi = p, Si = u, Pi) {
  getSQLType() {
    return "date";
  }
}
s(Oe, Si, "PgDateString");
function Wo(i, e) {
  const { name: t, config: n } = O(i, e);
  return (n == null ? void 0 : n.mode) === "date" ? new Zr(t) : new kr(t);
}
var $i, Ti;
class ea extends (Ti = $, $i = u, Ti) {
  constructor(e) {
    super(e, "number", "PgDoublePrecision");
  }
  /** @internal */
  build(e) {
    return new ta(
      e,
      this.config
    );
  }
}
s(ea, $i, "PgDoublePrecisionBuilder");
var Ni, xi;
class ta extends (xi = p, Ni = u, xi) {
  getSQLType() {
    return "double precision";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseFloat(e) : e;
  }
}
s(ta, Ni, "PgDoublePrecision");
function Go(i) {
  return new ea(i ?? "");
}
var Bi, qi;
class ia extends (qi = $, Bi = u, qi) {
  constructor(e) {
    super(e, "string", "PgInet");
  }
  /** @internal */
  build(e) {
    return new na(e, this.config);
  }
}
s(ia, Bi, "PgInetBuilder");
var Di, Ci;
class na extends (Ci = p, Di = u, Ci) {
  getSQLType() {
    return "inet";
  }
}
s(na, Di, "PgInet");
function Ho(i) {
  return new ia(i ?? "");
}
var Oi, Fi;
class sa extends (Fi = se, Oi = u, Fi) {
  constructor(e) {
    super(e, "number", "PgInteger");
  }
  /** @internal */
  build(e) {
    return new ra(e, this.config);
  }
}
s(sa, Oi, "PgIntegerBuilder");
var Qi, Vi;
class ra extends (Vi = p, Qi = u, Vi) {
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseInt(e) : e;
  }
}
s(ra, Qi, "PgInteger");
function Yo(i) {
  return new sa(i ?? "");
}
var Li, ji;
class aa extends (ji = $, Li = u, ji) {
  constructor(e, t) {
    super(e, "string", "PgInterval"), this.config.intervalConfig = t;
  }
  /** @internal */
  build(e) {
    return new oa(e, this.config);
  }
}
s(aa, Li, "PgIntervalBuilder");
var Ai, vi;
class oa extends (vi = p, Ai = u, vi) {
  constructor() {
    super(...arguments);
    s(this, "fields", this.config.intervalConfig.fields);
    s(this, "precision", this.config.intervalConfig.precision);
  }
  getSQLType() {
    const t = this.fields ? ` ${this.fields}` : "", n = this.precision ? `(${this.precision})` : "";
    return `interval${t}${n}`;
  }
}
s(oa, Ai, "PgInterval");
function Xo(i, e = {}) {
  const { name: t, config: n } = O(i, e);
  return new aa(t, n);
}
var zi, Ii;
class ua extends (Ii = $, zi = u, Ii) {
  constructor(e) {
    super(e, "json", "PgJson");
  }
  /** @internal */
  build(e) {
    return new Fe(e, this.config);
  }
}
s(ua, zi, "PgJsonBuilder");
var Ei, Ui;
class Fe extends (Ui = p, Ei = u, Ui) {
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
s(Fe, Ei, "PgJson");
function Zo(i) {
  return new ua(i ?? "");
}
var _i, Ki;
class la extends (Ki = $, _i = u, Ki) {
  constructor(e) {
    super(e, "json", "PgJsonb");
  }
  /** @internal */
  build(e) {
    return new Qe(e, this.config);
  }
}
s(la, _i, "PgJsonbBuilder");
var Mi, Ri;
class Qe extends (Ri = p, Mi = u, Ri) {
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
s(Qe, Mi, "PgJsonb");
function ko(i) {
  return new la(i ?? "");
}
var Ji, Wi;
class ca extends (Wi = $, Ji = u, Wi) {
  constructor(e) {
    super(e, "array", "PgLine");
  }
  /** @internal */
  build(e) {
    return new da(
      e,
      this.config
    );
  }
}
s(ca, Ji, "PgLineBuilder");
var Gi, Hi;
class da extends (Hi = p, Gi = u, Hi) {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(e) {
    const [t, n, a] = e.slice(1, -1).split(",");
    return [Number.parseFloat(t), Number.parseFloat(n), Number.parseFloat(a)];
  }
  mapToDriverValue(e) {
    return `{${e[0]},${e[1]},${e[2]}}`;
  }
}
s(da, Gi, "PgLine");
var Yi, Xi;
class fa extends (Xi = $, Yi = u, Xi) {
  constructor(e) {
    super(e, "json", "PgLineABC");
  }
  /** @internal */
  build(e) {
    return new ha(
      e,
      this.config
    );
  }
}
s(fa, Yi, "PgLineABCBuilder");
var Zi, ki;
class ha extends (ki = p, Zi = u, ki) {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(e) {
    const [t, n, a] = e.slice(1, -1).split(",");
    return { a: Number.parseFloat(t), b: Number.parseFloat(n), c: Number.parseFloat(a) };
  }
  mapToDriverValue(e) {
    return `{${e.a},${e.b},${e.c}}`;
  }
}
s(ha, Zi, "PgLineABC");
function eu(i, e) {
  const { name: t, config: n } = O(i, e);
  return !(n != null && n.mode) || n.mode === "tuple" ? new ca(t) : new fa(t);
}
var en, tn;
class ma extends (tn = $, en = u, tn) {
  constructor(e) {
    super(e, "string", "PgMacaddr");
  }
  /** @internal */
  build(e) {
    return new ga(e, this.config);
  }
}
s(ma, en, "PgMacaddrBuilder");
var nn, sn;
class ga extends (sn = p, nn = u, sn) {
  getSQLType() {
    return "macaddr";
  }
}
s(ga, nn, "PgMacaddr");
function tu(i) {
  return new ma(i ?? "");
}
var rn, an;
class pa extends (an = $, rn = u, an) {
  constructor(e) {
    super(e, "string", "PgMacaddr8");
  }
  /** @internal */
  build(e) {
    return new ya(e, this.config);
  }
}
s(pa, rn, "PgMacaddr8Builder");
var on, un;
class ya extends (un = p, on = u, un) {
  getSQLType() {
    return "macaddr8";
  }
}
s(ya, on, "PgMacaddr8");
function iu(i) {
  return new pa(i ?? "");
}
var ln, cn;
class wa extends (cn = $, ln = u, cn) {
  constructor(e, t, n) {
    super(e, "string", "PgNumeric"), this.config.precision = t, this.config.scale = n;
  }
  /** @internal */
  build(e) {
    return new Ve(e, this.config);
  }
}
s(wa, ln, "PgNumericBuilder");
var dn, fn;
class Ve extends (fn = p, dn = u, fn) {
  constructor(t, n) {
    super(t, n);
    s(this, "precision");
    s(this, "scale");
    this.precision = n.precision, this.scale = n.scale;
  }
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
s(Ve, dn, "PgNumeric");
function nu(i, e) {
  const { name: t, config: n } = O(i, e);
  return new wa(t, n == null ? void 0 : n.precision, n == null ? void 0 : n.scale);
}
var hn, mn;
class ba extends (mn = $, hn = u, mn) {
  constructor(e) {
    super(e, "array", "PgPointTuple");
  }
  /** @internal */
  build(e) {
    return new Sa(
      e,
      this.config
    );
  }
}
s(ba, hn, "PgPointTupleBuilder");
var gn, pn;
class Sa extends (pn = p, gn = u, pn) {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") {
      const [t, n] = e.slice(1, -1).split(",");
      return [Number.parseFloat(t), Number.parseFloat(n)];
    }
    return [e.x, e.y];
  }
  mapToDriverValue(e) {
    return `(${e[0]},${e[1]})`;
  }
}
s(Sa, gn, "PgPointTuple");
var yn, wn;
class Pa extends (wn = $, yn = u, wn) {
  constructor(e) {
    super(e, "json", "PgPointObject");
  }
  /** @internal */
  build(e) {
    return new $a(
      e,
      this.config
    );
  }
}
s(Pa, yn, "PgPointObjectBuilder");
var bn, Sn;
class $a extends (Sn = p, bn = u, Sn) {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(e) {
    if (typeof e == "string") {
      const [t, n] = e.slice(1, -1).split(",");
      return { x: Number.parseFloat(t), y: Number.parseFloat(n) };
    }
    return e;
  }
  mapToDriverValue(e) {
    return `(${e.x},${e.y})`;
  }
}
s($a, bn, "PgPointObject");
function su(i, e) {
  const { name: t, config: n } = O(i, e);
  return !(n != null && n.mode) || n.mode === "tuple" ? new ba(t) : new Pa(t);
}
function ru(i) {
  const e = [];
  for (let t = 0; t < i.length; t += 2)
    e.push(Number.parseInt(i.slice(t, t + 2), 16));
  return new Uint8Array(e);
}
function Re(i, e) {
  const t = new ArrayBuffer(8), n = new DataView(t);
  for (let a = 0; a < 8; a++)
    n.setUint8(a, i[e + a]);
  return n.getFloat64(0, !0);
}
function Ta(i) {
  const e = ru(i);
  let t = 0;
  const n = e[t];
  t += 1;
  const a = new DataView(e.buffer), o = a.getUint32(t, n === 1);
  if (t += 4, o & 536870912 && (a.getUint32(t, n === 1), t += 4), (o & 65535) === 1) {
    const l = Re(e, t);
    t += 8;
    const d = Re(e, t);
    return t += 8, [l, d];
  }
  throw new Error("Unsupported geometry type");
}
var Pn, $n;
class Na extends ($n = $, Pn = u, $n) {
  constructor(e) {
    super(e, "array", "PgGeometry");
  }
  /** @internal */
  build(e) {
    return new xa(
      e,
      this.config
    );
  }
}
s(Na, Pn, "PgGeometryBuilder");
var Tn, Nn;
class xa extends (Nn = p, Tn = u, Nn) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    return Ta(e);
  }
  mapToDriverValue(e) {
    return `point(${e[0]} ${e[1]})`;
  }
}
s(xa, Tn, "PgGeometry");
var xn, Bn;
class Ba extends (Bn = $, xn = u, Bn) {
  constructor(e) {
    super(e, "json", "PgGeometryObject");
  }
  /** @internal */
  build(e) {
    return new qa(
      e,
      this.config
    );
  }
}
s(Ba, xn, "PgGeometryObjectBuilder");
var qn, Dn;
class qa extends (Dn = p, qn = u, Dn) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    const t = Ta(e);
    return { x: t[0], y: t[1] };
  }
  mapToDriverValue(e) {
    return `point(${e.x} ${e.y})`;
  }
}
s(qa, qn, "PgGeometryObject");
function au(i, e) {
  const { name: t, config: n } = O(i, e);
  return !(n != null && n.mode) || n.mode === "tuple" ? new Na(t) : new Ba(t);
}
var Cn, On;
class Da extends (On = $, Cn = u, On) {
  constructor(e, t) {
    super(e, "number", "PgReal"), this.config.length = t;
  }
  /** @internal */
  build(e) {
    return new Ca(e, this.config);
  }
}
s(Da, Cn, "PgRealBuilder");
var Fn, Qn;
class Ca extends (Qn = p, Fn = u, Qn) {
  constructor(t, n) {
    super(t, n);
    s(this, "mapFromDriverValue", (t) => typeof t == "string" ? Number.parseFloat(t) : t);
  }
  getSQLType() {
    return "real";
  }
}
s(Ca, Fn, "PgReal");
function ou(i) {
  return new Da(i ?? "");
}
var Vn, Ln;
class Oa extends (Ln = $, Vn = u, Ln) {
  constructor(e) {
    super(e, "number", "PgSerial"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new Fa(e, this.config);
  }
}
s(Oa, Vn, "PgSerialBuilder");
var jn, An;
class Fa extends (An = p, jn = u, An) {
  getSQLType() {
    return "serial";
  }
}
s(Fa, jn, "PgSerial");
function uu(i) {
  return new Oa(i ?? "");
}
var vn, zn;
class Qa extends (zn = se, vn = u, zn) {
  constructor(e) {
    super(e, "number", "PgSmallInt");
  }
  /** @internal */
  build(e) {
    return new Va(e, this.config);
  }
}
s(Qa, vn, "PgSmallIntBuilder");
var In, En;
class Va extends (En = p, In = u, En) {
  constructor() {
    super(...arguments);
    s(this, "mapFromDriverValue", (t) => typeof t == "string" ? Number(t) : t);
  }
  getSQLType() {
    return "smallint";
  }
}
s(Va, In, "PgSmallInt");
function lu(i) {
  return new Qa(i ?? "");
}
var Un, _n;
class La extends (_n = $, Un = u, _n) {
  constructor(e) {
    super(e, "number", "PgSmallSerial"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new ja(
      e,
      this.config
    );
  }
}
s(La, Un, "PgSmallSerialBuilder");
var Kn, Mn;
class ja extends (Mn = p, Kn = u, Mn) {
  getSQLType() {
    return "smallserial";
  }
}
s(ja, Kn, "PgSmallSerial");
function cu(i) {
  return new La(i ?? "");
}
var Rn, Jn;
class Aa extends (Jn = $, Rn = u, Jn) {
  constructor(e, t) {
    super(e, "string", "PgText"), this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new va(e, this.config);
  }
}
s(Aa, Rn, "PgTextBuilder");
var Wn, Gn;
class va extends (Gn = p, Wn = u, Gn) {
  constructor() {
    super(...arguments);
    s(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return "text";
  }
}
s(va, Wn, "PgText");
function du(i, e = {}) {
  const { name: t, config: n } = O(i, e);
  return new Aa(t, n);
}
var Hn, Yn;
class za extends (Yn = X, Hn = u, Yn) {
  constructor(e, t, n) {
    super(e, "string", "PgTime"), this.withTimezone = t, this.precision = n, this.config.withTimezone = t, this.config.precision = n;
  }
  /** @internal */
  build(e) {
    return new Le(e, this.config);
  }
}
s(za, Hn, "PgTimeBuilder");
var Xn, Zn;
class Le extends (Zn = p, Xn = u, Zn) {
  constructor(t, n) {
    super(t, n);
    s(this, "withTimezone");
    s(this, "precision");
    this.withTimezone = n.withTimezone, this.precision = n.precision;
  }
  getSQLType() {
    return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
s(Le, Xn, "PgTime");
function fu(i, e = {}) {
  const { name: t, config: n } = O(i, e);
  return new za(t, n.withTimezone ?? !1, n.precision);
}
var kn, es;
class Ia extends (es = X, kn = u, es) {
  constructor(e, t, n) {
    super(e, "date", "PgTimestamp"), this.config.withTimezone = t, this.config.precision = n;
  }
  /** @internal */
  build(e) {
    return new je(e, this.config);
  }
}
s(Ia, kn, "PgTimestampBuilder");
var ts, is;
class je extends (is = p, ts = u, is) {
  constructor(t, n) {
    super(t, n);
    s(this, "withTimezone");
    s(this, "precision");
    s(this, "mapFromDriverValue", (t) => new Date(this.withTimezone ? t : t + "+0000"));
    s(this, "mapToDriverValue", (t) => t.toISOString());
    this.withTimezone = n.withTimezone, this.precision = n.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
s(je, ts, "PgTimestamp");
var ns, ss;
class Ea extends (ss = X, ns = u, ss) {
  constructor(e, t, n) {
    super(e, "string", "PgTimestampString"), this.config.withTimezone = t, this.config.precision = n;
  }
  /** @internal */
  build(e) {
    return new Ae(
      e,
      this.config
    );
  }
}
s(Ea, ns, "PgTimestampStringBuilder");
var rs, as;
class Ae extends (as = p, rs = u, as) {
  constructor(t, n) {
    super(t, n);
    s(this, "withTimezone");
    s(this, "precision");
    this.withTimezone = n.withTimezone, this.precision = n.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
s(Ae, rs, "PgTimestampString");
function hu(i, e = {}) {
  const { name: t, config: n } = O(i, e);
  return (n == null ? void 0 : n.mode) === "string" ? new Ea(t, n.withTimezone ?? !1, n.precision) : new Ia(t, (n == null ? void 0 : n.withTimezone) ?? !1, n == null ? void 0 : n.precision);
}
var os, us;
class Ua extends (us = $, os = u, us) {
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
    return new ve(e, this.config);
  }
}
s(Ua, os, "PgUUIDBuilder");
var ls, cs;
class ve extends (cs = p, ls = u, cs) {
  getSQLType() {
    return "uuid";
  }
}
s(ve, ls, "PgUUID");
function mu(i) {
  return new Ua(i ?? "");
}
var ds, fs;
class _a extends (fs = $, ds = u, fs) {
  constructor(e, t) {
    super(e, "string", "PgVarchar"), this.config.length = t.length, this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new Ka(
      e,
      this.config
    );
  }
}
s(_a, ds, "PgVarcharBuilder");
var hs, ms;
class Ka extends (ms = p, hs = u, ms) {
  constructor() {
    super(...arguments);
    s(this, "length", this.config.length);
    s(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "varchar" : `varchar(${this.length})`;
  }
}
s(Ka, hs, "PgVarchar");
function gu(i, e = {}) {
  const { name: t, config: n } = O(i, e);
  return new _a(t, n);
}
var gs, ps;
class Ma extends (ps = $, gs = u, ps) {
  constructor(e, t) {
    super(e, "string", "PgBinaryVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Ra(
      e,
      this.config
    );
  }
}
s(Ma, gs, "PgBinaryVectorBuilder");
var ys, ws;
class Ra extends (ws = p, ys = u, ws) {
  constructor() {
    super(...arguments);
    s(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `bit(${this.dimensions})`;
  }
}
s(Ra, ys, "PgBinaryVector");
function pu(i, e) {
  const { name: t, config: n } = O(i, e);
  return new Ma(t, n);
}
var bs, Ss;
class Ja extends (Ss = $, bs = u, Ss) {
  constructor(e, t) {
    super(e, "array", "PgHalfVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Wa(
      e,
      this.config
    );
  }
}
s(Ja, bs, "PgHalfVectorBuilder");
var Ps, $s;
class Wa extends ($s = p, Ps = u, $s) {
  constructor() {
    super(...arguments);
    s(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `halfvec(${this.dimensions})`;
  }
  mapToDriverValue(t) {
    return JSON.stringify(t);
  }
  mapFromDriverValue(t) {
    return t.slice(1, -1).split(",").map((n) => Number.parseFloat(n));
  }
}
s(Wa, Ps, "PgHalfVector");
function yu(i, e) {
  const { name: t, config: n } = O(i, e);
  return new Ja(t, n);
}
var Ts, Ns;
class Ga extends (Ns = $, Ts = u, Ns) {
  constructor(e, t) {
    super(e, "string", "PgSparseVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Ha(
      e,
      this.config
    );
  }
}
s(Ga, Ts, "PgSparseVectorBuilder");
var xs, Bs;
class Ha extends (Bs = p, xs = u, Bs) {
  constructor() {
    super(...arguments);
    s(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `sparsevec(${this.dimensions})`;
  }
}
s(Ha, xs, "PgSparseVector");
function wu(i, e) {
  const { name: t, config: n } = O(i, e);
  return new Ga(t, n);
}
var qs, Ds;
class Ya extends (Ds = $, qs = u, Ds) {
  constructor(e, t) {
    super(e, "array", "PgVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new Xa(
      e,
      this.config
    );
  }
}
s(Ya, qs, "PgVectorBuilder");
var Cs, Os;
class Xa extends (Os = p, Cs = u, Os) {
  constructor() {
    super(...arguments);
    s(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `vector(${this.dimensions})`;
  }
  mapToDriverValue(t) {
    return JSON.stringify(t);
  }
  mapFromDriverValue(t) {
    return t.slice(1, -1).split(",").map((n) => Number.parseFloat(n));
  }
}
s(Xa, Cs, "PgVector");
function bu(i, e) {
  const { name: t, config: n } = O(i, e);
  return new Ya(t, n);
}
function Su() {
  return {
    bigint: Uo,
    bigserial: _o,
    boolean: Ko,
    char: Mo,
    cidr: Ro,
    customType: Jo,
    date: Wo,
    doublePrecision: Go,
    inet: Ho,
    integer: Yo,
    interval: Xo,
    json: Zo,
    jsonb: ko,
    line: eu,
    macaddr: tu,
    macaddr8: iu,
    numeric: nu,
    point: su,
    geometry: au,
    real: ou,
    serial: uu,
    smallint: lu,
    smallserial: cu,
    text: du,
    time: fu,
    timestamp: hu,
    uuid: mu,
    varchar: gu,
    bit: pu,
    halfvec: yu,
    sparsevec: wu,
    vector: bu
  };
}
const Be = Symbol.for("drizzle:PgInlineForeignKeys"), Je = Symbol.for("drizzle:EnableRLS");
var Fs, Qs, Vs, Ls, js;
class E extends (js = w, Ls = u, Vs = Be, Qs = Je, Fs = w.Symbol.ExtraConfigBuilder, js) {
  constructor() {
    super(...arguments);
    /**@internal */
    s(this, Vs, []);
    /** @internal */
    s(this, Qs, !1);
    /** @internal */
    s(this, Fs);
  }
}
s(E, Ls, "PgTable"), /** @internal */
s(E, "Symbol", Object.assign({}, w.Symbol, {
  InlineForeignKeys: Be,
  EnableRLS: Je
}));
function Pu(i, e, t, n, a = i) {
  const o = new E(i, n, a), l = typeof e == "function" ? e(Su()) : e, d = Object.fromEntries(
    Object.entries(l).map(([c, N]) => {
      const g = N;
      g.setName(c);
      const b = g.build(o);
      return o[Be].push(...g.buildForeignKeys(b, o)), [c, b];
    })
  ), h = Object.fromEntries(
    Object.entries(l).map(([c, N]) => {
      const g = N;
      g.setName(c);
      const b = g.buildExtraConfigColumn(o);
      return [c, b];
    })
  ), m = Object.assign(o, d);
  return m[w.Symbol.Columns] = d, m[w.Symbol.ExtraConfigColumns] = h, t && (m[E.Symbol.ExtraConfigBuilder] = t), Object.assign(m, {
    enableRLS: () => (m[E.Symbol.EnableRLS] = !0, m)
  });
}
const Za = (i, e, t) => Pu(i, e, t, void 0);
var As;
As = u;
class ze {
  constructor(e, t, n) {
    s(this, "referencedTableName");
    s(this, "fieldName");
    this.sourceTable = e, this.referencedTable = t, this.relationName = n, this.referencedTableName = t[w.Symbol.Name];
  }
}
s(ze, As, "Relation");
var vs, zs;
const he = class he extends (zs = ze, vs = u, zs) {
  constructor(e, t, n, a) {
    super(e, t, n == null ? void 0 : n.relationName), this.config = n, this.isNullable = a;
  }
  withFieldName(e) {
    const t = new he(
      this.sourceTable,
      this.referencedTable,
      this.config,
      this.isNullable
    );
    return t.fieldName = e, t;
  }
};
s(he, vs, "One");
let te = he;
var Is, Es;
const me = class me extends (Es = ze, Is = u, Es) {
  constructor(e, t, n) {
    super(e, t, n == null ? void 0 : n.relationName), this.config = n;
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
s(me, Is, "Many");
let qe = me;
function $u() {
  return {
    and: xe,
    between: Qo,
    eq: Vr,
    exists: Oo,
    gt: $o,
    gte: To,
    ilike: Ao,
    inArray: Bo,
    isNull: Do,
    isNotNull: Co,
    like: Lo,
    lt: No,
    lte: xo,
    ne: bo,
    not: Po,
    notBetween: Vo,
    notExists: Fo,
    notLike: jo,
    notIlike: vo,
    notInArray: qo,
    or: So,
    sql: r
  };
}
function Tu() {
  return {
    sql: r,
    asc: zo,
    desc: Io
  };
}
function Nu(i, e, t) {
  if (f(t, te) && t.config)
    return {
      fields: t.config.fields,
      references: t.config.references
    };
  const n = e[Pe(t.referencedTable)];
  if (!n)
    throw new Error(
      `Table "${t.referencedTable[w.Symbol.Name]}" not found in schema`
    );
  const a = i[n];
  if (!a)
    throw new Error(`Table "${n}" not found in schema`);
  const o = t.sourceTable, l = e[Pe(o)];
  if (!l)
    throw new Error(
      `Table "${o[w.Symbol.Name]}" not found in schema`
    );
  const d = [];
  for (const h of Object.values(
    a.relations
  ))
    (t.relationName && t !== h && h.relationName === t.relationName || !t.relationName && h.referencedTable === t.sourceTable) && d.push(h);
  if (d.length > 1)
    throw t.relationName ? new Error(
      `There are multiple relations with name "${t.relationName}" in table "${n}"`
    ) : new Error(
      `There are multiple relations between "${n}" and "${t.sourceTable[w.Symbol.Name]}". Please specify relation name`
    );
  if (d[0] && f(d[0], te) && d[0].config)
    return {
      fields: d[0].config.references,
      references: d[0].config.fields
    };
  throw new Error(
    `There is not enough information to infer relation "${l}.${t.fieldName}"`
  );
}
var Us, _s;
class re extends (_s = J, Us = u, _s) {
}
s(re, Us, "PgViewBase");
var Ks;
Ks = u;
class ue {
  constructor(e) {
    /** @internal */
    s(this, "casing");
    this.casing = new co(e == null ? void 0 : e.casing);
  }
  async migrate(e, t, n) {
    const a = typeof n == "string" ? "__drizzle_migrations" : n.migrationsTable ?? "__drizzle_migrations", o = typeof n == "string" ? "drizzle" : n.migrationsSchema ?? "drizzle", l = r`
			CREATE TABLE IF NOT EXISTS ${r.identifier(o)}.${r.identifier(a)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
    await t.execute(r`CREATE SCHEMA IF NOT EXISTS ${r.identifier(o)}`), await t.execute(l);
    const h = (await t.all(
      r`select id, hash, created_at from ${r.identifier(o)}.${r.identifier(a)} order by created_at desc limit 1`
    ))[0];
    await t.transaction(async (m) => {
      for await (const c of e)
        if (!h || Number(h.created_at) < c.folderMillis) {
          for (const N of c.sql)
            await m.execute(r.raw(N));
          await m.execute(
            r`insert into ${r.identifier(o)}.${r.identifier(a)} ("hash", "created_at") values(${c.hash}, ${c.folderMillis})`
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
    for (const [n, a] of e.entries())
      t.push(r`${r.identifier(a._.alias)} as (${a._.sql})`), n < e.length - 1 && t.push(r`, `);
    return t.push(r` `), r.join(t);
  }
  buildDeleteQuery({ table: e, where: t, returning: n, withList: a }) {
    const o = this.buildWithCTE(a), l = n ? r` returning ${this.buildSelection(n, { isSingleTable: !0 })}` : void 0, d = t ? r` where ${t}` : void 0;
    return r`${o}delete from ${e}${d}${l}`;
  }
  buildUpdateSet(e, t) {
    const n = e[w.Symbol.Columns], a = Object.keys(n).filter(
      (l) => {
        var d;
        return t[l] !== void 0 || ((d = n[l]) == null ? void 0 : d.onUpdateFn) !== void 0;
      }
    ), o = a.length;
    return r.join(a.flatMap((l, d) => {
      const h = n[l], m = t[l] ?? r.param(h.onUpdateFn(), h), c = r`${r.identifier(this.casing.getColumnCasing(h))} = ${m}`;
      return d < o - 1 ? [c, r.raw(", ")] : [c];
    }));
  }
  buildUpdateQuery({ table: e, set: t, where: n, returning: a, withList: o, from: l, joins: d }) {
    const h = this.buildWithCTE(o), m = e[E.Symbol.Name], c = e[E.Symbol.Schema], N = e[E.Symbol.OriginalName], g = m === N ? void 0 : m, b = r`${c ? r`${r.identifier(c)}.` : void 0}${r.identifier(N)}${g && r` ${r.identifier(g)}`}`, x = this.buildUpdateSet(e, t), B = l && r.join([r.raw(" from "), this.buildFromTable(l)]), q = this.buildJoins(d), T = a ? r` returning ${this.buildSelection(a, { isSingleTable: !l })}` : void 0, V = n ? r` where ${n}` : void 0;
    return r`${h}update ${b} set ${x}${B}${q}${V}${T}`;
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
    const n = e.length, a = e.flatMap(({ field: o }, l) => {
      const d = [];
      if (f(o, y.Aliased) && o.isSelectionField)
        d.push(r.identifier(o.fieldAlias));
      else if (f(o, y.Aliased) || f(o, y)) {
        const h = f(o, y.Aliased) ? o.sql : o;
        t ? d.push(
          new y(
            h.queryChunks.map((m) => f(m, p) ? r.identifier(this.casing.getColumnCasing(m)) : m)
          )
        ) : d.push(h), f(o, y.Aliased) && d.push(r` as ${r.identifier(o.fieldAlias)}`);
      } else f(o, v) && (t ? d.push(r.identifier(this.casing.getColumnCasing(o))) : d.push(o));
      return l < n - 1 && d.push(r`, `), d;
    });
    return r.join(a);
  }
  buildJoins(e) {
    if (!e || e.length === 0)
      return;
    const t = [];
    for (const [n, a] of e.entries()) {
      n === 0 && t.push(r` `);
      const o = a.table, l = a.lateral ? r` lateral` : void 0;
      if (f(o, E)) {
        const d = o[E.Symbol.Name], h = o[E.Symbol.Schema], m = o[E.Symbol.OriginalName], c = d === m ? void 0 : a.alias;
        t.push(
          r`${r.raw(a.joinType)} join${l} ${h ? r`${r.identifier(h)}.` : void 0}${r.identifier(m)}${c && r` ${r.identifier(c)}`} on ${a.on}`
        );
      } else if (f(o, J)) {
        const d = o[Q].name, h = o[Q].schema, m = o[Q].originalName, c = d === m ? void 0 : a.alias;
        t.push(
          r`${r.raw(a.joinType)} join${l} ${h ? r`${r.identifier(h)}.` : void 0}${r.identifier(m)}${c && r` ${r.identifier(c)}`} on ${a.on}`
        );
      } else
        t.push(
          r`${r.raw(a.joinType)} join${l} ${o} on ${a.on}`
        );
      n < e.length - 1 && t.push(r` `);
    }
    return r.join(t);
  }
  buildFromTable(e) {
    if (f(e, w) && e[w.Symbol.OriginalName] !== e[w.Symbol.Name]) {
      let t = r`${r.identifier(e[w.Symbol.OriginalName])}`;
      return e[w.Symbol.Schema] && (t = r`${r.identifier(e[w.Symbol.Schema])}.${t}`), r`${t} ${r.identifier(e[w.Symbol.Name])}`;
    }
    return e;
  }
  buildSelectQuery({
    withList: e,
    fields: t,
    fieldsFlat: n,
    where: a,
    having: o,
    table: l,
    joins: d,
    orderBy: h,
    groupBy: m,
    limit: c,
    offset: N,
    lockingClause: g,
    distinct: b,
    setOperators: x
  }) {
    const B = n ?? de(t);
    for (const I of B)
      if (f(I.field, v) && oe(I.field.table) !== (f(l, U) ? l._.alias : f(l, re) ? l[Q].name : f(l, y) ? void 0 : oe(l)) && !((_) => d == null ? void 0 : d.some(
        ({ alias: we }) => we === (_[w.Symbol.IsAlias] ? oe(_) : _[w.Symbol.BaseName])
      ))(I.field.table)) {
        const _ = oe(I.field.table);
        throw new Error(
          `Your "${I.path.join("->")}" field references a column "${_}"."${I.field.name}", but the table "${_}" is not part of the query! Did you forget to join it?`
        );
      }
    const q = !d || d.length === 0, T = this.buildWithCTE(e);
    let V;
    b && (V = b === !0 ? r` distinct` : r` distinct on (${r.join(b.on, r`, `)})`);
    const A = this.buildSelection(B, { isSingleTable: q }), D = this.buildFromTable(l), M = this.buildJoins(d), L = a ? r` where ${a}` : void 0, S = o ? r` having ${o}` : void 0;
    let P;
    h && h.length > 0 && (P = r` order by ${r.join(h, r`, `)}`);
    let F;
    m && m.length > 0 && (F = r` group by ${r.join(m, r`, `)}`);
    const ae = typeof c == "object" || typeof c == "number" && c >= 0 ? r` limit ${c}` : void 0, ye = N ? r` offset ${N}` : void 0, H = r.empty();
    if (g) {
      const I = r` for ${r.raw(g.strength)}`;
      g.config.of && I.append(
        r` of ${r.join(
          Array.isArray(g.config.of) ? g.config.of : [g.config.of],
          r`, `
        )}`
      ), g.config.noWait ? I.append(r` no wait`) : g.config.skipLocked && I.append(r` skip locked`), H.append(I);
    }
    const R = r`${T}select${V} ${A} from ${D}${M}${L}${F}${S}${P}${ae}${ye}${H}`;
    return x.length > 0 ? this.buildSetOperations(R, x) : R;
  }
  buildSetOperations(e, t) {
    const [n, ...a] = t;
    if (!n)
      throw new Error("Cannot pass undefined values to any set operator");
    return a.length === 0 ? this.buildSetOperationQuery({ leftSelect: e, setOperator: n }) : this.buildSetOperations(
      this.buildSetOperationQuery({ leftSelect: e, setOperator: n }),
      a
    );
  }
  buildSetOperationQuery({
    leftSelect: e,
    setOperator: { type: t, isAll: n, rightSelect: a, limit: o, orderBy: l, offset: d }
  }) {
    const h = r`(${e.getSQL()}) `, m = r`(${a.getSQL()})`;
    let c;
    if (l && l.length > 0) {
      const x = [];
      for (const B of l)
        if (f(B, p))
          x.push(r.identifier(B.name));
        else if (f(B, y)) {
          for (let q = 0; q < B.queryChunks.length; q++) {
            const T = B.queryChunks[q];
            f(T, p) && (B.queryChunks[q] = r.identifier(T.name));
          }
          x.push(r`${B}`);
        } else
          x.push(r`${B}`);
      c = r` order by ${r.join(x, r`, `)} `;
    }
    const N = typeof o == "object" || typeof o == "number" && o >= 0 ? r` limit ${o}` : void 0, g = r.raw(`${t} ${n ? "all " : ""}`), b = d ? r` offset ${d}` : void 0;
    return r`${h}${g}${m}${c}${N}${b}`;
  }
  buildInsertQuery({ table: e, values: t, onConflict: n, returning: a, withList: o, select: l, overridingSystemValue_: d }) {
    const h = [], m = e[w.Symbol.Columns], c = Object.entries(m).filter(([T, V]) => !V.shouldDisableInsert()), N = c.map(
      ([, T]) => r.identifier(this.casing.getColumnCasing(T))
    );
    if (l) {
      const T = t;
      f(T, y) ? h.push(T) : h.push(T.getSQL());
    } else {
      const T = t;
      h.push(r.raw("values "));
      for (const [V, A] of T.entries()) {
        const D = [];
        for (const [M, L] of c) {
          const S = A[M];
          if (S === void 0 || f(S, Y) && S.value === void 0)
            if (L.defaultFn !== void 0) {
              const P = L.defaultFn(), F = f(P, y) ? P : r.param(P, L);
              D.push(F);
            } else if (!L.default && L.onUpdateFn !== void 0) {
              const P = L.onUpdateFn(), F = f(P, y) ? P : r.param(P, L);
              D.push(F);
            } else
              D.push(r`default`);
          else
            D.push(S);
        }
        h.push(D), V < T.length - 1 && h.push(r`, `);
      }
    }
    const g = this.buildWithCTE(o), b = r.join(h), x = a ? r` returning ${this.buildSelection(a, { isSingleTable: !0 })}` : void 0, B = n ? r` on conflict ${n}` : void 0, q = d === !0 ? r`overriding system value ` : void 0;
    return r`${g}insert into ${e} ${N} ${q}${b}${B}${x}`;
  }
  buildRefreshMaterializedViewQuery({ view: e, concurrently: t, withNoData: n }) {
    const a = t ? r` concurrently` : void 0, o = n ? r` with no data` : void 0;
    return r`refresh materialized view${a} ${e}${o}`;
  }
  prepareTyping(e) {
    return f(e, Qe) || f(e, Fe) ? "json" : f(e, Ve) ? "decimal" : f(e, Le) ? "time" : f(e, je) || f(e, Ae) ? "timestamp" : f(e, Ce) || f(e, Oe) ? "date" : f(e, ve) ? "uuid" : "none";
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
    tableNamesMap: n,
    table: a,
    tableConfig: o,
    queryConfig: l,
    tableAlias: d,
    nestedQueryRelation: h,
    joinOn: m
  }) {
    let c = [], N, g, b = [], x;
    const B = [];
    if (l === !0)
      c = Object.entries(o.columns).map(([V, A]) => ({
        dbKey: A.name,
        tsKey: V,
        field: K(A, d),
        relationTableTsKey: void 0,
        isJson: !1,
        selection: []
      }));
    else {
      const T = Object.fromEntries(
        Object.entries(o.columns).map(([S, P]) => [S, K(P, d)])
      );
      if (l.where) {
        const S = typeof l.where == "function" ? l.where(T, $u()) : l.where;
        x = S && ce(S, d);
      }
      const V = [];
      let A = [];
      if (l.columns) {
        let S = !1;
        for (const [P, F] of Object.entries(l.columns))
          F !== void 0 && P in o.columns && (!S && F === !0 && (S = !0), A.push(P));
        A.length > 0 && (A = S ? A.filter((P) => {
          var F;
          return ((F = l.columns) == null ? void 0 : F[P]) === !0;
        }) : Object.keys(o.columns).filter((P) => !A.includes(P)));
      } else
        A = Object.keys(o.columns);
      for (const S of A) {
        const P = o.columns[S];
        V.push({ tsKey: S, value: P });
      }
      let D = [];
      l.with && (D = Object.entries(l.with).filter((S) => !!S[1]).map(([S, P]) => ({ tsKey: S, queryConfig: P, relation: o.relations[S] })));
      let M;
      if (l.extras) {
        M = typeof l.extras == "function" ? l.extras(T, { sql: r }) : l.extras;
        for (const [S, P] of Object.entries(M))
          V.push({
            tsKey: S,
            value: Fr(P, d)
          });
      }
      for (const { tsKey: S, value: P } of V)
        c.push({
          dbKey: f(P, y.Aliased) ? P.fieldAlias : o.columns[S].name,
          tsKey: S,
          field: f(P, v) ? K(P, d) : P,
          relationTableTsKey: void 0,
          isJson: !1,
          selection: []
        });
      let L = typeof l.orderBy == "function" ? l.orderBy(T, Tu()) : l.orderBy ?? [];
      Array.isArray(L) || (L = [L]), b = L.map((S) => f(S, v) ? K(S, d) : ce(S, d)), N = l.limit, g = l.offset;
      for (const {
        tsKey: S,
        queryConfig: P,
        relation: F
      } of D) {
        const ae = Nu(t, n, F), ye = Pe(F.referencedTable), H = n[ye], R = `${d}_${S}`, I = xe(
          ...ae.fields.map(
            (ro, ao) => Vr(
              K(ae.references[ao], R),
              K(ro, d)
            )
          )
        ), _ = this.buildRelationalQueryWithoutPK({
          fullSchema: e,
          schema: t,
          tableNamesMap: n,
          table: e[H],
          tableConfig: t[H],
          queryConfig: f(F, te) ? P === !0 ? { limit: 1 } : { ...P, limit: 1 } : P,
          tableAlias: R,
          joinOn: I,
          nestedQueryRelation: F
        }), we = r`${r.identifier(R)}.${r.identifier("data")}`.as(S);
        B.push({
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
      throw new Qr({ message: `No fields selected for table "${o.tsName}" ("${d}")` });
    let q;
    if (x = xe(m, x), h) {
      let T = r`json_build_array(${r.join(
        c.map(
          ({ field: D, tsKey: M, isJson: L }) => L ? r`${r.identifier(`${d}_${M}`)}.${r.identifier("data")}` : f(D, y.Aliased) ? D.sql : D
        ),
        r`, `
      )})`;
      f(h, qe) && (T = r`coalesce(json_agg(${T}${b.length > 0 ? r` order by ${r.join(b, r`, `)}` : void 0}), '[]'::json)`);
      const V = [{
        dbKey: "data",
        tsKey: "data",
        field: T.as("data"),
        isJson: !0,
        relationTableTsKey: o.tsName,
        selection: c
      }];
      N !== void 0 || g !== void 0 || b.length > 0 ? (q = this.buildSelectQuery({
        table: be(a, d),
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
      }), x = void 0, N = void 0, g = void 0, b = []) : q = be(a, d), q = this.buildSelectQuery({
        table: f(q, E) ? q : new U(q, {}, d),
        fields: {},
        fieldsFlat: V.map(({ field: D }) => ({
          path: [],
          field: f(D, v) ? K(D, d) : D
        })),
        joins: B,
        where: x,
        limit: N,
        offset: g,
        orderBy: b,
        setOperators: []
      });
    } else
      q = this.buildSelectQuery({
        table: be(a, d),
        fields: {},
        fieldsFlat: c.map(({ field: T }) => ({
          path: [],
          field: f(T, v) ? K(T, d) : T
        })),
        joins: B,
        where: x,
        limit: N,
        offset: g,
        orderBy: b,
        setOperators: []
      });
    return {
      tableTsKey: o.tsName,
      sql: q,
      selection: c
    };
  }
}
s(ue, Ks, "PgDialect");
var Ms;
Ms = u;
const ge = class ge {
  constructor(e) {
    s(this, "config");
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
    if (t === Q)
      return {
        ...e[Q],
        selectedFields: new Proxy(
          e[Q].selectedFields,
          this
        )
      };
    if (typeof t == "symbol")
      return e[t];
    const a = (f(e, U) ? e._.selectedFields : f(e, J) ? e[Q].selectedFields : e)[t];
    if (f(a, y.Aliased)) {
      if (this.config.sqlAliasedBehavior === "sql" && !a.isSelectionField)
        return a.sql;
      const o = a.clone();
      return o.isSelectionField = !0, o;
    }
    if (f(a, y)) {
      if (this.config.sqlBehavior === "sql")
        return a;
      throw new Error(
        `You tried to reference "${t}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`
      );
    }
    return f(a, v) ? this.config.alias ? new Proxy(
      a,
      new ee(
        new Proxy(
          a.table,
          new pe(this.config.alias, this.config.replaceOriginalName ?? !1)
        )
      )
    ) : a : typeof a != "object" || a === null ? a : new Proxy(a, new ge(this.config));
  }
};
s(ge, Ms, "SelectionProxyHandler");
let j = ge;
var Rs;
Rs = u;
class ka {
  /** @internal */
  getSelectedFields() {
    return this._.selectedFields;
  }
}
s(ka, Rs, "TypedQueryBuilder");
var Js;
Js = u;
class W {
  constructor(e) {
    s(this, "fields");
    s(this, "session");
    s(this, "dialect");
    s(this, "withList", []);
    s(this, "distinct");
    s(this, "authToken");
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
    let n;
    return this.fields ? n = this.fields : f(e, U) ? n = Object.fromEntries(
      Object.keys(e._.selectedFields).map((a) => [a, e[a]])
    ) : f(e, re) ? n = e[Q].selectedFields : f(e, y) ? n = {} : n = De(e), new Ie({
      table: e,
      fields: n,
      isPartialSelect: t,
      session: this.session,
      dialect: this.dialect,
      withList: this.withList,
      distinct: this.distinct
    }).setToken(this.authToken);
  }
}
s(W, Js, "PgSelectBuilder");
var Ws, Gs;
class eo extends (Gs = ka, Ws = u, Gs) {
  constructor({ table: t, fields: n, isPartialSelect: a, session: o, dialect: l, withList: d, distinct: h }) {
    super();
    s(this, "_");
    s(this, "config");
    s(this, "joinsNotNullableMap");
    s(this, "tableName");
    s(this, "isPartialSelect");
    s(this, "session");
    s(this, "dialect");
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
    s(this, "leftJoin", this.createJoin("left"));
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
    s(this, "rightJoin", this.createJoin("right"));
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
    s(this, "innerJoin", this.createJoin("inner"));
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
    s(this, "fullJoin", this.createJoin("full"));
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
    s(this, "union", this.createSetOperator("union", !1));
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
    s(this, "unionAll", this.createSetOperator("union", !0));
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
    s(this, "intersect", this.createSetOperator("intersect", !1));
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
    s(this, "intersectAll", this.createSetOperator("intersect", !0));
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
    s(this, "except", this.createSetOperator("except", !1));
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
    s(this, "exceptAll", this.createSetOperator("except", !0));
    this.config = {
      withList: d,
      table: t,
      fields: { ...n },
      distinct: h,
      setOperators: []
    }, this.isPartialSelect = a, this.session = o, this.dialect = l, this._ = {
      selectedFields: n
    }, this.tableName = Me(t), this.joinsNotNullableMap = typeof this.tableName == "string" ? { [this.tableName]: !0 } : {};
  }
  createJoin(t) {
    return (n, a) => {
      var d;
      const o = this.tableName, l = Me(n);
      if (typeof l == "string" && ((d = this.config.joins) != null && d.some((h) => h.alias === l)))
        throw new Error(`Alias "${l}" is already used in this query`);
      if (!this.isPartialSelect && (Object.keys(this.joinsNotNullableMap).length === 1 && typeof o == "string" && (this.config.fields = {
        [o]: this.config.fields
      }), typeof l == "string" && !f(n, y))) {
        const h = f(n, U) ? n._.selectedFields : f(n, J) ? n[Q].selectedFields : n[w.Symbol.Columns];
        this.config.fields[l] = h;
      }
      if (typeof a == "function" && (a = a(
        new Proxy(
          this.config.fields,
          new j({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
        )
      )), this.config.joins || (this.config.joins = []), this.config.joins.push({ on: a, table: n, joinType: t, alias: l }), typeof l == "string")
        switch (t) {
          case "left": {
            this.joinsNotNullableMap[l] = !1;
            break;
          }
          case "right": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([h]) => [h, !1])
            ), this.joinsNotNullableMap[l] = !0;
            break;
          }
          case "inner": {
            this.joinsNotNullableMap[l] = !0;
            break;
          }
          case "full": {
            this.joinsNotNullableMap = Object.fromEntries(
              Object.entries(this.joinsNotNullableMap).map(([h]) => [h, !1])
            ), this.joinsNotNullableMap[l] = !1;
            break;
          }
        }
      return this;
    };
  }
  createSetOperator(t, n) {
    return (a) => {
      const o = typeof a == "function" ? a(xu()) : a;
      if (!jr(this.getSelectedFields(), o.getSelectedFields()))
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
      return this.config.setOperators.push({ type: t, isAll: n, rightSelect: o }), this;
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
        new j({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
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
        new j({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })
      )
    )), this.config.having = t, this;
  }
  groupBy(...t) {
    if (typeof t[0] == "function") {
      const n = t[0](
        new Proxy(
          this.config.fields,
          new j({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
        )
      );
      this.config.groupBy = Array.isArray(n) ? n : [n];
    } else
      this.config.groupBy = t;
    return this;
  }
  orderBy(...t) {
    if (typeof t[0] == "function") {
      const n = t[0](
        new Proxy(
          this.config.fields,
          new j({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })
        )
      ), a = Array.isArray(n) ? n : [n];
      this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = a : this.config.orderBy = a;
    } else {
      const n = t;
      this.config.setOperators.length > 0 ? this.config.setOperators.at(-1).orderBy = n : this.config.orderBy = n;
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
  for(t, n = {}) {
    return this.config.lockingClause = { strength: t, config: n }, this;
  }
  /** @internal */
  getSQL() {
    return this.dialect.buildSelectQuery(this.config);
  }
  toSQL() {
    const { typings: t, ...n } = this.dialect.sqlToQuery(this.getSQL());
    return n;
  }
  as(t) {
    return new Proxy(
      new U(this.getSQL(), this.config.fields, t),
      new j({ alias: t, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
    );
  }
  /** @internal */
  getSelectedFields() {
    return new Proxy(
      this.config.fields,
      new j({ alias: this.tableName, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
    );
  }
  $dynamic() {
    return this;
  }
}
s(eo, Ws, "PgSelectQueryBuilder");
var Hs, Ys;
class Ie extends (Ys = eo, Hs = u, Ys) {
  constructor() {
    super(...arguments);
    s(this, "authToken");
    s(this, "execute", (t) => Ne.startActiveSpan("drizzle.operation", () => this._prepare().execute(t, this.authToken)));
  }
  /** @internal */
  _prepare(t) {
    const { session: n, config: a, dialect: o, joinsNotNullableMap: l, authToken: d } = this;
    if (!n)
      throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
    return Ne.startActiveSpan("drizzle.prepareQuery", () => {
      const h = de(a.fields), m = n.prepareQuery(o.sqlToQuery(this.getSQL()), h, t, !0);
      return m.joinsNotNullableMap = l, m.setToken(d);
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
s(Ie, Hs, "PgSelect");
Eo(Ie, [Lr]);
function Z(i, e) {
  return (t, n, ...a) => {
    const o = [n, ...a].map((l) => ({
      type: i,
      isAll: e,
      rightSelect: l
    }));
    for (const l of o)
      if (!jr(t.getSelectedFields(), l.rightSelect.getSelectedFields()))
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
    return t.addSetOperators(o);
  };
}
const xu = () => ({
  union: Bu,
  unionAll: qu,
  intersect: Du,
  intersectAll: Cu,
  except: Ou,
  exceptAll: Fu
}), Bu = Z("union", !1), qu = Z("union", !0), Du = Z("intersect", !1), Cu = Z("intersect", !0), Ou = Z("except", !1), Fu = Z("except", !0);
var Xs;
Xs = u;
class Ee {
  constructor(e) {
    s(this, "dialect");
    s(this, "dialectConfig");
    this.dialect = f(e, ue) ? e : void 0, this.dialectConfig = f(e, ue) ? void 0 : e;
  }
  $with(e) {
    const t = this;
    return {
      as(n) {
        return typeof n == "function" && (n = n(t)), new Proxy(
          new qr(n.getSQL(), n.getSelectedFields(), e, !0),
          new j({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
        );
      }
    };
  }
  with(...e) {
    const t = this;
    function n(l) {
      return new W({
        fields: l ?? void 0,
        session: void 0,
        dialect: t.getDialect(),
        withList: e
      });
    }
    function a(l) {
      return new W({
        fields: l ?? void 0,
        session: void 0,
        dialect: t.getDialect(),
        distinct: !0
      });
    }
    function o(l, d) {
      return new W({
        fields: d ?? void 0,
        session: void 0,
        dialect: t.getDialect(),
        distinct: { on: l }
      });
    }
    return { select: n, selectDistinct: a, selectDistinctOn: o };
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
    return this.dialect || (this.dialect = new ue(this.dialectConfig)), this.dialect;
  }
}
s(Ee, Xs, "PgQueryBuilder");
var Zs;
Zs = u;
class Qu {
  constructor(e, t) {
    s(this, "as");
    s(this, "for");
    s(this, "to");
    s(this, "using");
    s(this, "withCheck");
    /** @internal */
    s(this, "_linkedTable");
    this.name = e, t && (this.as = t.as, this.for = t.for, this.to = t.to, this.using = t.using, this.withCheck = t.withCheck);
  }
  link(e) {
    return this._linkedTable = e, this;
  }
}
s(Qu, Zs, "PgPolicy");
var ks;
ks = u;
class Vu {
  constructor(e, t) {
    /** @internal */
    s(this, "_existing");
    /** @internal */
    s(this, "createDb");
    /** @internal */
    s(this, "createRole");
    /** @internal */
    s(this, "inherit");
    this.name = e, t && (this.createDb = t.createDb, this.createRole = t.createRole, this.inherit = t.inherit);
  }
  existing() {
    return this._existing = !0, this;
  }
}
s(Vu, ks, "PgRole");
const We = Symbol.for("drizzle:PgViewConfig");
var er;
er = u;
class Ue {
  constructor(e, t) {
    s(this, "config", {});
    this.name = e, this.schema = t;
  }
  with(e) {
    return this.config.with = e, this;
  }
}
s(Ue, er, "PgDefaultViewBuilderCore");
var tr, ir;
class to extends (ir = Ue, tr = u, ir) {
  as(e) {
    typeof e == "function" && (e = e(new Ee()));
    const t = new j({
      alias: this.name,
      sqlBehavior: "error",
      sqlAliasedBehavior: "alias",
      replaceOriginalName: !0
    }), n = new Proxy(e.getSelectedFields(), t);
    return new Proxy(
      new ie({
        pgConfig: this.config,
        config: {
          name: this.name,
          schema: this.schema,
          selectedFields: n,
          query: e.getSQL().inlineParams()
        }
      }),
      t
    );
  }
}
s(to, tr, "PgViewBuilder");
var nr, sr;
class io extends (sr = Ue, nr = u, sr) {
  constructor(t, n, a) {
    super(t, a);
    s(this, "columns");
    this.columns = De(Za(t, n));
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
      new j({
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
      new j({
        alias: this.name,
        sqlBehavior: "error",
        sqlAliasedBehavior: "alias",
        replaceOriginalName: !0
      })
    );
  }
}
s(io, nr, "PgManualViewBuilder");
var rr;
rr = u;
class _e {
  constructor(e, t) {
    s(this, "config", {});
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
s(_e, rr, "PgMaterializedViewBuilderCore");
var ar, or;
class no extends (or = _e, ar = u, or) {
  as(e) {
    typeof e == "function" && (e = e(new Ee()));
    const t = new j({
      alias: this.name,
      sqlBehavior: "error",
      sqlAliasedBehavior: "alias",
      replaceOriginalName: !0
    }), n = new Proxy(e.getSelectedFields(), t);
    return new Proxy(
      new ne({
        pgConfig: {
          with: this.config.with,
          using: this.config.using,
          tablespace: this.config.tablespace,
          withNoData: this.config.withNoData
        },
        config: {
          name: this.name,
          schema: this.schema,
          selectedFields: n,
          query: e.getSQL().inlineParams()
        }
      }),
      t
    );
  }
}
s(no, ar, "PgMaterializedViewBuilder");
var ur, lr;
class so extends (lr = _e, ur = u, lr) {
  constructor(t, n, a) {
    super(t, a);
    s(this, "columns");
    this.columns = De(Za(t, n));
  }
  existing() {
    return new Proxy(
      new ne({
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
      new j({
        alias: this.name,
        sqlBehavior: "error",
        sqlAliasedBehavior: "alias",
        replaceOriginalName: !0
      })
    );
  }
  as(t) {
    return new Proxy(
      new ne({
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
      new j({
        alias: this.name,
        sqlBehavior: "error",
        sqlAliasedBehavior: "alias",
        replaceOriginalName: !0
      })
    );
  }
}
s(so, ur, "PgManualMaterializedViewBuilder");
var cr, dr, fr;
class ie extends (fr = re, dr = u, cr = We, fr) {
  constructor({ pgConfig: t, config: n }) {
    super(n);
    s(this, cr);
    t && (this[We] = {
      with: t.with
    });
  }
}
s(ie, dr, "PgView");
const Ge = Symbol.for("drizzle:PgMaterializedViewConfig");
var hr, mr, gr;
class ne extends (gr = re, mr = u, hr = Ge, gr) {
  constructor({ pgConfig: t, config: n }) {
    super(n);
    s(this, hr);
    this[Ge] = {
      with: t == null ? void 0 : t.with,
      using: t == null ? void 0 : t.using,
      tablespace: t == null ? void 0 : t.tablespace,
      withNoData: t == null ? void 0 : t.withNoData
    };
  }
}
s(ne, mr, "PgMaterializedView");
function vu(i, e, t) {
  return e ? new io(i, e, t) : new to(i, t);
}
function zu(i, e, t) {
  return e ? new so(i, e, t) : new no(i, t);
}
function Iu(i) {
  return f(i, ie);
}
function Eu(i) {
  return f(i, ne);
}
export {
  yr as F,
  E as P,
  y as S,
  ho as U,
  Q as V,
  vu as a,
  zu as b,
  Au as c,
  Iu as d,
  Eu as e,
  Vu as f,
  Qu as g,
  We as h,
  go as i,
  Ge as j,
  ue as k,
  Br as l,
  ie as m,
  p as n,
  Pu as p,
  r as s,
  br as u
};
