var $a = Object.defineProperty;
var Ta = (i, e, t) => e in i ? $a(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var r = (i, e, t) => Ta(i, typeof e != "symbol" ? e + "" : e, t);
import { e as l, b as Se, i as h, T as w, I as Ke, c as Pe, C as Na, g as ae } from "./casing-tDA94lCu.js";
var Ye;
Ye = l;
class A {
  constructor(e, t) {
    r(this, "name");
    r(this, "keyAsName");
    r(this, "primary");
    r(this, "notNull");
    r(this, "default");
    r(this, "defaultFn");
    r(this, "onUpdateFn");
    r(this, "hasDefault");
    r(this, "isUnique");
    r(this, "uniqueName");
    r(this, "uniqueType");
    r(this, "dataType");
    r(this, "columnType");
    r(this, "enumValues");
    r(this, "generated");
    r(this, "generatedIdentity");
    r(this, "config");
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
r(A, Ye, "Column");
var Xe;
Xe = l;
class vn {
  constructor(e, t, s) {
    r(this, "config");
    /**
     * Alias for {@link $defaultFn}.
     */
    r(this, "$default", this.$defaultFn);
    /**
     * Alias for {@link $onUpdateFn}.
     */
    r(this, "$onUpdate", this.$onUpdateFn);
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
r(vn, Xe, "ColumnBuilder");
var Ze;
Ze = l;
class Bn {
  constructor(e, t) {
    /** @internal */
    r(this, "reference");
    /** @internal */
    r(this, "_onUpdate", "no action");
    /** @internal */
    r(this, "_onDelete", "no action");
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
    return new Dn(e, this);
  }
}
r(Bn, Ze, "PgForeignKeyBuilder");
var ke;
ke = l;
class Dn {
  constructor(e, t) {
    r(this, "reference");
    r(this, "onUpdate");
    r(this, "onDelete");
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
r(Dn, ke, "PgForeignKey");
function xa(i, ...e) {
  return i(...e);
}
function qn(i, e) {
  return `${i[Se]}_${e.join("_")}_unique`;
}
var et;
et = l;
class va {
  constructor(e, t) {
    /** @internal */
    r(this, "columns");
    /** @internal */
    r(this, "nullsNotDistinctConfig", !1);
    this.name = t, this.columns = e;
  }
  nullsNotDistinct() {
    return this.nullsNotDistinctConfig = !0, this;
  }
  /** @internal */
  build(e) {
    return new Cn(e, this.columns, this.nullsNotDistinctConfig, this.name);
  }
}
r(va, et, "PgUniqueConstraintBuilder");
var tt;
tt = l;
class Cn {
  constructor(e, t, s, o) {
    r(this, "columns");
    r(this, "name");
    r(this, "nullsNotDistinct", !1);
    this.table = e, this.columns = t, this.name = o ?? qn(this.table, this.columns.map((a) => a.name)), this.nullsNotDistinct = s;
  }
  getName() {
    return this.name;
  }
}
r(Cn, tt, "PgUniqueConstraint");
function Me(i, e, t) {
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
function Fn(i, e = 0) {
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
      const [f, m] = Me(i, s + 1, !0);
      t.push(f), s = m;
      continue;
    }
    if (a === "}")
      return [t, s + 1];
    if (a === "{") {
      const [f, m] = Fn(i, s + 1);
      t.push(f), s = m;
      continue;
    }
    const [u, d] = Me(i, s, !1);
    t.push(u), s = d;
  }
  return [t, s];
}
function Ba(i) {
  const [e] = Fn(i, 1);
  return e;
}
function On(i) {
  return `{${i.map((e) => Array.isArray(e) ? On(e) : typeof e == "string" ? `"${e.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${e}`).join(",")}}`;
}
var it, st;
class P extends (st = vn, it = l, st) {
  constructor() {
    super(...arguments);
    r(this, "foreignKeyConfigs", []);
  }
  array(t) {
    return new Qn(this.config.name, this, t);
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
    return this.foreignKeyConfigs.map(({ ref: o, actions: a }) => xa(
      (u, d) => {
        const f = new Bn(() => {
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
    return new Vn(t, this.config);
  }
}
r(P, it, "PgColumnBuilder");
var rt, nt;
class g extends (nt = A, rt = l, nt) {
  constructor(e, t) {
    t.uniqueName || (t.uniqueName = qn(e, [t.name])), super(e, t), this.table = e;
  }
}
r(g, rt, "PgColumn");
var ot, at;
class Vn extends (at = g, ot = l, at) {
  constructor() {
    super(...arguments);
    r(this, "indexConfig", {
      order: this.config.order ?? "asc",
      nulls: this.config.nulls ?? "last",
      opClass: this.config.opClass
    });
    r(this, "defaultConfig", {
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
r(Vn, ot, "ExtraConfigColumn");
var lt, ut;
class Qn extends (ut = P, lt = l, ut) {
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
r(Qn, lt, "PgArrayBuilder");
var ct, dt;
const he = class he extends (dt = g, ct = l, dt) {
  constructor(t, s, o, a) {
    super(t, s);
    r(this, "size");
    this.baseColumn = o, this.range = a, this.size = s.size;
  }
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(t) {
    return typeof t == "string" && (t = Ba(t)), t.map((s) => this.baseColumn.mapFromDriverValue(s));
  }
  mapToDriverValue(t, s = !1) {
    const o = t.map(
      (a) => a === null ? null : h(this.baseColumn, he) ? this.baseColumn.mapToDriverValue(a, !0) : this.baseColumn.mapToDriverValue(a)
    );
    return s ? o : On(o);
  }
};
r(he, ct, "PgArray");
let $e = he;
const Te = Symbol.for("drizzle:isPgEnum");
function Da(i) {
  return !!i && typeof i == "function" && Te in i && i[Te] === !0;
}
var ht, ft;
class Ln extends (ft = P, ht = l, ft) {
  constructor(e, t) {
    super(e, "string", "PgEnumColumn"), this.config.enum = t;
  }
  /** @internal */
  build(e) {
    return new jn(
      e,
      this.config
    );
  }
}
r(Ln, ht, "PgEnumColumnBuilder");
var mt, pt;
class jn extends (pt = g, mt = l, pt) {
  constructor(t, s) {
    super(t, s);
    r(this, "enum", this.config.enum);
    r(this, "enumValues", this.config.enum.enumValues);
    this.enum = s.enum;
  }
  getSQLType() {
    return this.enum.enumName;
  }
}
r(jn, mt, "PgEnumColumn");
function Hl(i, e, t) {
  const s = Object.assign(
    (o) => new Ln(o ?? "", s),
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
r(U, gt, "Subquery");
var yt, wt;
class An extends (wt = U, yt = l, wt) {
}
r(An, yt, "WithSubquery");
const Ne = {
  startActiveSpan(i, e) {
    return e();
  }
}, C = Symbol.for("drizzle:ViewBaseConfig");
function zn(i) {
  return i != null && typeof i.getSQL == "function";
}
function qa(i) {
  var t;
  const e = { sql: "", params: [] };
  for (const s of i)
    e.sql += s.sql, e.params.push(...s.params), (t = s.typings) != null && t.length && (e.typings || (e.typings = []), e.typings.push(...s.typings));
  return e;
}
var bt;
bt = l;
class q {
  constructor(e) {
    r(this, "value");
    this.value = Array.isArray(e) ? e : [e];
  }
  getSQL() {
    return new y([this]);
  }
}
r(q, bt, "StringChunk");
var St;
St = l;
const G = class G {
  constructor(e) {
    /** @internal */
    r(this, "decoder", In);
    r(this, "shouldInlineParams", !1);
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
    return qa(e.map((c) => {
      var N;
      if (h(c, q))
        return { sql: c.value.join(""), params: [] };
      if (h(c, ue))
        return { sql: a(c.value), params: [] };
      if (c === void 0)
        return { sql: "", params: [] };
      if (Array.isArray(c)) {
        const p = [new q("(")];
        for (const [b, x] of c.entries())
          p.push(x), b < c.length - 1 && p.push(new q(", "));
        return p.push(new q(")")), this.buildQueryFromSourceParams(p, s);
      }
      if (h(c, G))
        return this.buildQueryFromSourceParams(c.queryChunks, {
          ...s,
          inlineParams: f || c.shouldInlineParams
        });
      if (h(c, w)) {
        const p = c[w.Symbol.Schema], b = c[w.Symbol.Name];
        return {
          sql: p === void 0 || c[Ke] ? a(b) : a(p) + "." + a(b),
          params: []
        };
      }
      if (h(c, A)) {
        const p = o.getColumnCasing(c);
        if (t.invokeSource === "indexes")
          return { sql: a(p), params: [] };
        const b = c.table[w.Symbol.Schema];
        return {
          sql: c.table[Ke] || b === void 0 ? a(c.table[w.Symbol.Name]) + "." + a(p) : a(b) + "." + a(c.table[w.Symbol.Name]) + "." + a(p),
          params: []
        };
      }
      if (h(c, J)) {
        const p = c[C].schema, b = c[C].name;
        return {
          sql: p === void 0 || c[C].isAlias ? a(b) : a(p) + "." + a(b),
          params: []
        };
      }
      if (h(c, Y)) {
        if (h(c.value, k))
          return { sql: u(m.value++, c), params: [c], typings: ["none"] };
        const p = c.value === null ? null : c.encoder.mapToDriverValue(c.value);
        if (h(p, G))
          return this.buildQueryFromSourceParams([p], s);
        if (f)
          return { sql: this.mapInlineParam(p, s), params: [] };
        let b = ["none"];
        return d && (b = [d(c.encoder)]), { sql: u(m.value++, p), params: [p], typings: b };
      }
      return h(c, k) ? { sql: u(m.value++, c), params: [c], typings: ["none"] } : h(c, G.Aliased) && c.fieldAlias !== void 0 ? { sql: a(c.fieldAlias), params: [] } : h(c, U) ? c._.isWith ? { sql: a(c._.alias), params: [] } : this.buildQueryFromSourceParams([
        new q("("),
        c._.sql,
        new q(") "),
        new ue(c._.alias)
      ], s) : Da(c) ? c.schema ? { sql: a(c.schema) + "." + a(c.enumName), params: [] } : { sql: a(c.enumName), params: [] } : zn(c) ? (N = c.shouldOmitSQLParens) != null && N.call(c) ? this.buildQueryFromSourceParams([c.getSQL()], s) : this.buildQueryFromSourceParams([
        new q("("),
        c.getSQL(),
        new q(")")
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
r(G, St, "SQL");
let y = G;
var Pt;
Pt = l;
class ue {
  constructor(e) {
    r(this, "brand");
    this.value = e;
  }
  getSQL() {
    return new y([this]);
  }
}
r(ue, Pt, "Name");
function Ca(i) {
  return typeof i == "object" && i !== null && "mapToDriverValue" in i && typeof i.mapToDriverValue == "function";
}
const In = {
  mapFromDriverValue: (i) => i
}, En = {
  mapToDriverValue: (i) => i
};
({
  ...In,
  ...En
});
var $t;
$t = l;
class Y {
  /**
   * @param value - Parameter value
   * @param encoder - Encoder to convert the value to a driver parameter
   */
  constructor(e, t = En) {
    r(this, "brand");
    this.value = e, this.encoder = t;
  }
  getSQL() {
    return new y([this]);
  }
}
r(Y, $t, "Param");
function n(i, ...e) {
  const t = [];
  (e.length > 0 || i.length > 0 && i[0] !== "") && t.push(new q(i[0]));
  for (const [s, o] of e.entries())
    t.push(o, new q(i[s + 1]));
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
    return new y([new q(f)]);
  }
  i.raw = s;
  function o(f, m) {
    const c = [];
    for (const [N, p] of f.entries())
      N > 0 && m !== void 0 && c.push(m), c.push(p);
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
})(n || (n = {}));
((i) => {
  var t;
  t = l;
  const s = class s {
    constructor(a, u) {
      /** @internal */
      r(this, "isSelectionField", !1);
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
  r(s, t, "SQL.Aliased");
  let e = s;
  i.Aliased = e;
})(y || (y = {}));
var Tt;
Tt = l;
class k {
  constructor(e) {
    this.name = e;
  }
  getSQL() {
    return new y([this]);
  }
}
r(k, Tt, "Placeholder");
const Fa = Symbol.for("drizzle:IsDrizzleView");
var Nt, xt, vt;
vt = l, xt = C, Nt = Fa;
class J {
  constructor({ name: e, schema: t, selectedFields: s, query: o }) {
    /** @internal */
    r(this, xt);
    /** @internal */
    r(this, Nt, !0);
    this[C] = {
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
r(J, vt, "View");
A.prototype.getSQL = function() {
  return new y([this]);
};
w.prototype.getSQL = function() {
  return new y([this]);
};
U.prototype.getSQL = function() {
  return new y([this]);
};
var Bt;
Bt = l;
class ee {
  constructor(e) {
    this.table = e;
  }
  get(e, t) {
    return t === "table" ? this.table : e[t];
  }
}
r(ee, Bt, "ColumnAliasProxyHandler");
var Dt;
Dt = l;
class ge {
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
    if (t === C)
      return {
        ...e[C],
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
r(ge, Dt, "TableAliasProxyHandler");
function be(i, e) {
  return new Proxy(i, new ge(e, !1));
}
function K(i, e) {
  return new Proxy(
    i,
    new ee(new Proxy(i.table, new ge(e, !1)))
  );
}
function Un(i, e) {
  return new y.Aliased(ce(i.sql, e), i.fieldAlias);
}
function ce(i, e) {
  return n.join(i.queryChunks.map((t) => h(t, A) ? K(t, e) : h(t, y) ? ce(t, e) : h(t, y.Aliased) ? Un(t, e) : t));
}
var qt, Ct;
class _n extends (Ct = Error, qt = l, Ct) {
  constructor({ message: e, cause: t }) {
    super(e), this.name = "DrizzleError", this.cause = t;
  }
}
r(_n, qt, "DrizzleError");
function z(i, e) {
  return Ca(e) && !zn(i) && !h(i, Y) && !h(i, k) && !h(i, A) && !h(i, w) && !h(i, J) ? new Y(i, e) : i;
}
const Kn = (i, e) => n`${i} = ${z(e, i)}`, Oa = (i, e) => n`${i} <> ${z(e, i)}`;
function xe(...i) {
  const e = i.filter(
    (t) => t !== void 0
  );
  if (e.length !== 0)
    return e.length === 1 ? new y(e) : new y([
      new q("("),
      n.join(e, new q(" and ")),
      new q(")")
    ]);
}
function Va(...i) {
  const e = i.filter(
    (t) => t !== void 0
  );
  if (e.length !== 0)
    return e.length === 1 ? new y(e) : new y([
      new q("("),
      n.join(e, new q(" or ")),
      new q(")")
    ]);
}
function Qa(i) {
  return n`not ${i}`;
}
const La = (i, e) => n`${i} > ${z(e, i)}`, ja = (i, e) => n`${i} >= ${z(e, i)}`, Aa = (i, e) => n`${i} < ${z(e, i)}`, za = (i, e) => n`${i} <= ${z(e, i)}`;
function Ia(i, e) {
  return Array.isArray(e) ? e.length === 0 ? n`false` : n`${i} in ${e.map((t) => z(t, i))}` : n`${i} in ${z(e, i)}`;
}
function Ea(i, e) {
  return Array.isArray(e) ? e.length === 0 ? n`true` : n`${i} not in ${e.map((t) => z(t, i))}` : n`${i} not in ${z(e, i)}`;
}
function Ua(i) {
  return n`${i} is null`;
}
function _a(i) {
  return n`${i} is not null`;
}
function Ka(i) {
  return n`exists ${i}`;
}
function Ma(i) {
  return n`not exists ${i}`;
}
function Ra(i, e, t) {
  return n`${i} between ${z(e, i)} and ${z(
    t,
    i
  )}`;
}
function Ja(i, e, t) {
  return n`${i} not between ${z(
    e,
    i
  )} and ${z(t, i)}`;
}
function Wa(i, e) {
  return n`${i} like ${e}`;
}
function Ga(i, e) {
  return n`${i} not like ${e}`;
}
function Ha(i, e) {
  return n`${i} ilike ${e}`;
}
function Ya(i, e) {
  return n`${i} not ilike ${e}`;
}
function Xa(i) {
  return n`${i} asc`;
}
function Za(i) {
  return n`${i} desc`;
}
var Ft, Ot;
Ot = l, Ft = Symbol.toStringTag;
class Mn {
  constructor() {
    r(this, Ft, "QueryPromise");
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
r(Mn, Ot, "QueryPromise");
function de(i, e) {
  return Object.entries(i).reduce((t, [s, o]) => {
    if (typeof s != "string")
      return t;
    const a = e ? [...e, s] : [s];
    return h(o, A) || h(o, y) || h(o, y.Aliased) ? t.push({ path: a, field: o }) : h(o, w) ? t.push(...de(o[w.Symbol.Columns], a)) : t.push(...de(o, a)), t;
  }, []);
}
function Rn(i, e) {
  const t = Object.keys(i), s = Object.keys(e);
  if (t.length !== s.length)
    return !1;
  for (const [o, a] of t.entries())
    if (a !== s[o])
      return !1;
  return !0;
}
function ka(i, e) {
  for (const t of e)
    for (const s of Object.getOwnPropertyNames(t.prototype))
      s !== "constructor" && Object.defineProperty(
        i.prototype,
        s,
        Object.getOwnPropertyDescriptor(t.prototype, s) || /* @__PURE__ */ Object.create(null)
      );
}
function De(i) {
  return i[w.Symbol.Columns];
}
function Re(i) {
  return h(i, U) ? i._.alias : h(i, J) ? i[C].name : h(i, y) ? void 0 : i[w.Symbol.IsAlias] ? i[w.Symbol.Name] : i[w.Symbol.BaseName];
}
function F(i, e) {
  return {
    name: typeof i == "string" && i.length > 0 ? i : "",
    config: typeof i == "object" ? i : e
  };
}
var Vt, Qt;
class re extends (Qt = P, Vt = l, Qt) {
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
r(re, Vt, "PgIntColumnBaseBuilder");
var Lt, jt;
class Jn extends (jt = re, Lt = l, jt) {
  constructor(e) {
    super(e, "number", "PgBigInt53");
  }
  /** @internal */
  build(e) {
    return new Wn(e, this.config);
  }
}
r(Jn, Lt, "PgBigInt53Builder");
var At, zt;
class Wn extends (zt = g, At = l, zt) {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
r(Wn, At, "PgBigInt53");
var It, Et;
class Gn extends (Et = re, It = l, Et) {
  constructor(e) {
    super(e, "bigint", "PgBigInt64");
  }
  /** @internal */
  build(e) {
    return new Hn(
      e,
      this.config
    );
  }
}
r(Gn, It, "PgBigInt64Builder");
var Ut, _t;
class Hn extends (_t = g, Ut = l, _t) {
  getSQLType() {
    return "bigint";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
r(Hn, Ut, "PgBigInt64");
function el(i, e) {
  const { name: t, config: s } = F(i, e);
  return s.mode === "number" ? new Jn(t) : new Gn(t);
}
var Kt, Mt;
class Yn extends (Mt = P, Kt = l, Mt) {
  constructor(e) {
    super(e, "number", "PgBigSerial53"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new Xn(
      e,
      this.config
    );
  }
}
r(Yn, Kt, "PgBigSerial53Builder");
var Rt, Jt;
class Xn extends (Jt = g, Rt = l, Jt) {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(e) {
    return typeof e == "number" ? e : Number(e);
  }
}
r(Xn, Rt, "PgBigSerial53");
var Wt, Gt;
class Zn extends (Gt = P, Wt = l, Gt) {
  constructor(e) {
    super(e, "bigint", "PgBigSerial64"), this.config.hasDefault = !0;
  }
  /** @internal */
  build(e) {
    return new kn(
      e,
      this.config
    );
  }
}
r(Zn, Wt, "PgBigSerial64Builder");
var Ht, Yt;
class kn extends (Yt = g, Ht = l, Yt) {
  getSQLType() {
    return "bigserial";
  }
  // eslint-disable-next-line unicorn/prefer-native-coercion-functions
  mapFromDriverValue(e) {
    return BigInt(e);
  }
}
r(kn, Ht, "PgBigSerial64");
function tl(i, e) {
  const { name: t, config: s } = F(i, e);
  return s.mode === "number" ? new Yn(t) : new Zn(t);
}
var Xt, Zt;
class eo extends (Zt = P, Xt = l, Zt) {
  constructor(e) {
    super(e, "boolean", "PgBoolean");
  }
  /** @internal */
  build(e) {
    return new to(e, this.config);
  }
}
r(eo, Xt, "PgBooleanBuilder");
var kt, ei;
class to extends (ei = g, kt = l, ei) {
  getSQLType() {
    return "boolean";
  }
}
r(to, kt, "PgBoolean");
function il(i) {
  return new eo(i ?? "");
}
var ti, ii;
class io extends (ii = P, ti = l, ii) {
  constructor(e, t) {
    super(e, "string", "PgChar"), this.config.length = t.length, this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new so(
      e,
      this.config
    );
  }
}
r(io, ti, "PgCharBuilder");
var si, ri;
class so extends (ri = g, si = l, ri) {
  constructor() {
    super(...arguments);
    r(this, "length", this.config.length);
    r(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "char" : `char(${this.length})`;
  }
}
r(so, si, "PgChar");
function sl(i, e = {}) {
  const { name: t, config: s } = F(i, e);
  return new io(t, s);
}
var ni, oi;
class ro extends (oi = P, ni = l, oi) {
  constructor(e) {
    super(e, "string", "PgCidr");
  }
  /** @internal */
  build(e) {
    return new no(e, this.config);
  }
}
r(ro, ni, "PgCidrBuilder");
var ai, li;
class no extends (li = g, ai = l, li) {
  getSQLType() {
    return "cidr";
  }
}
r(no, ai, "PgCidr");
function rl(i) {
  return new ro(i ?? "");
}
var ui, ci;
class oo extends (ci = P, ui = l, ci) {
  constructor(e, t, s) {
    super(e, "custom", "PgCustomColumn"), this.config.fieldConfig = t, this.config.customTypeParams = s;
  }
  /** @internal */
  build(e) {
    return new ao(
      e,
      this.config
    );
  }
}
r(oo, ui, "PgCustomColumnBuilder");
var di, hi;
class ao extends (hi = g, di = l, hi) {
  constructor(t, s) {
    super(t, s);
    r(this, "sqlName");
    r(this, "mapTo");
    r(this, "mapFrom");
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
r(ao, di, "PgCustomColumn");
function nl(i) {
  return (e, t) => {
    const { name: s, config: o } = F(e, t);
    return new oo(s, o, i);
  };
}
var fi, mi;
class X extends (mi = P, fi = l, mi) {
  defaultNow() {
    return this.default(n`now()`);
  }
}
r(X, fi, "PgDateColumnBaseBuilder");
var pi, gi;
class lo extends (gi = X, pi = l, gi) {
  constructor(e) {
    super(e, "date", "PgDate");
  }
  /** @internal */
  build(e) {
    return new qe(e, this.config);
  }
}
r(lo, pi, "PgDateBuilder");
var yi, wi;
class qe extends (wi = g, yi = l, wi) {
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
r(qe, yi, "PgDate");
var bi, Si;
class uo extends (Si = X, bi = l, Si) {
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
r(uo, bi, "PgDateStringBuilder");
var Pi, $i;
class Ce extends ($i = g, Pi = l, $i) {
  getSQLType() {
    return "date";
  }
}
r(Ce, Pi, "PgDateString");
function ol(i, e) {
  const { name: t, config: s } = F(i, e);
  return (s == null ? void 0 : s.mode) === "date" ? new lo(t) : new uo(t);
}
var Ti, Ni;
class co extends (Ni = P, Ti = l, Ni) {
  constructor(e) {
    super(e, "number", "PgDoublePrecision");
  }
  /** @internal */
  build(e) {
    return new ho(
      e,
      this.config
    );
  }
}
r(co, Ti, "PgDoublePrecisionBuilder");
var xi, vi;
class ho extends (vi = g, xi = l, vi) {
  getSQLType() {
    return "double precision";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseFloat(e) : e;
  }
}
r(ho, xi, "PgDoublePrecision");
function al(i) {
  return new co(i ?? "");
}
var Bi, Di;
class fo extends (Di = P, Bi = l, Di) {
  constructor(e) {
    super(e, "string", "PgInet");
  }
  /** @internal */
  build(e) {
    return new mo(e, this.config);
  }
}
r(fo, Bi, "PgInetBuilder");
var qi, Ci;
class mo extends (Ci = g, qi = l, Ci) {
  getSQLType() {
    return "inet";
  }
}
r(mo, qi, "PgInet");
function ll(i) {
  return new fo(i ?? "");
}
var Fi, Oi;
class po extends (Oi = re, Fi = l, Oi) {
  constructor(e) {
    super(e, "number", "PgInteger");
  }
  /** @internal */
  build(e) {
    return new go(e, this.config);
  }
}
r(po, Fi, "PgIntegerBuilder");
var Vi, Qi;
class go extends (Qi = g, Vi = l, Qi) {
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(e) {
    return typeof e == "string" ? Number.parseInt(e) : e;
  }
}
r(go, Vi, "PgInteger");
function ul(i) {
  return new po(i ?? "");
}
var Li, ji;
class yo extends (ji = P, Li = l, ji) {
  constructor(e, t) {
    super(e, "string", "PgInterval"), this.config.intervalConfig = t;
  }
  /** @internal */
  build(e) {
    return new wo(e, this.config);
  }
}
r(yo, Li, "PgIntervalBuilder");
var Ai, zi;
class wo extends (zi = g, Ai = l, zi) {
  constructor() {
    super(...arguments);
    r(this, "fields", this.config.intervalConfig.fields);
    r(this, "precision", this.config.intervalConfig.precision);
  }
  getSQLType() {
    const t = this.fields ? ` ${this.fields}` : "", s = this.precision ? `(${this.precision})` : "";
    return `interval${t}${s}`;
  }
}
r(wo, Ai, "PgInterval");
function cl(i, e = {}) {
  const { name: t, config: s } = F(i, e);
  return new yo(t, s);
}
var Ii, Ei;
class bo extends (Ei = P, Ii = l, Ei) {
  constructor(e) {
    super(e, "json", "PgJson");
  }
  /** @internal */
  build(e) {
    return new Fe(e, this.config);
  }
}
r(bo, Ii, "PgJsonBuilder");
var Ui, _i;
class Fe extends (_i = g, Ui = l, _i) {
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
r(Fe, Ui, "PgJson");
function dl(i) {
  return new bo(i ?? "");
}
var Ki, Mi;
class So extends (Mi = P, Ki = l, Mi) {
  constructor(e) {
    super(e, "json", "PgJsonb");
  }
  /** @internal */
  build(e) {
    return new Oe(e, this.config);
  }
}
r(So, Ki, "PgJsonbBuilder");
var Ri, Ji;
class Oe extends (Ji = g, Ri = l, Ji) {
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
r(Oe, Ri, "PgJsonb");
function hl(i) {
  return new So(i ?? "");
}
var Wi, Gi;
class Po extends (Gi = P, Wi = l, Gi) {
  constructor(e) {
    super(e, "array", "PgLine");
  }
  /** @internal */
  build(e) {
    return new $o(
      e,
      this.config
    );
  }
}
r(Po, Wi, "PgLineBuilder");
var Hi, Yi;
class $o extends (Yi = g, Hi = l, Yi) {
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
r($o, Hi, "PgLine");
var Xi, Zi;
class To extends (Zi = P, Xi = l, Zi) {
  constructor(e) {
    super(e, "json", "PgLineABC");
  }
  /** @internal */
  build(e) {
    return new No(
      e,
      this.config
    );
  }
}
r(To, Xi, "PgLineABCBuilder");
var ki, es;
class No extends (es = g, ki = l, es) {
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
r(No, ki, "PgLineABC");
function fl(i, e) {
  const { name: t, config: s } = F(i, e);
  return !(s != null && s.mode) || s.mode === "tuple" ? new Po(t) : new To(t);
}
var ts, is;
class xo extends (is = P, ts = l, is) {
  constructor(e) {
    super(e, "string", "PgMacaddr");
  }
  /** @internal */
  build(e) {
    return new vo(e, this.config);
  }
}
r(xo, ts, "PgMacaddrBuilder");
var ss, rs;
class vo extends (rs = g, ss = l, rs) {
  getSQLType() {
    return "macaddr";
  }
}
r(vo, ss, "PgMacaddr");
function ml(i) {
  return new xo(i ?? "");
}
var ns, os;
class Bo extends (os = P, ns = l, os) {
  constructor(e) {
    super(e, "string", "PgMacaddr8");
  }
  /** @internal */
  build(e) {
    return new Do(e, this.config);
  }
}
r(Bo, ns, "PgMacaddr8Builder");
var as, ls;
class Do extends (ls = g, as = l, ls) {
  getSQLType() {
    return "macaddr8";
  }
}
r(Do, as, "PgMacaddr8");
function pl(i) {
  return new Bo(i ?? "");
}
var us, cs;
class qo extends (cs = P, us = l, cs) {
  constructor(e, t, s) {
    super(e, "string", "PgNumeric"), this.config.precision = t, this.config.scale = s;
  }
  /** @internal */
  build(e) {
    return new Ve(e, this.config);
  }
}
r(qo, us, "PgNumericBuilder");
var ds, hs;
class Ve extends (hs = g, ds = l, hs) {
  constructor(t, s) {
    super(t, s);
    r(this, "precision");
    r(this, "scale");
    this.precision = s.precision, this.scale = s.scale;
  }
  mapFromDriverValue(t) {
    return typeof t == "string" ? t : String(t);
  }
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
r(Ve, ds, "PgNumeric");
var fs, ms;
class Co extends (ms = P, fs = l, ms) {
  constructor(e, t, s) {
    super(e, "number", "PgNumericNumber"), this.config.precision = t, this.config.scale = s;
  }
  /** @internal */
  build(e) {
    return new Fo(
      e,
      this.config
    );
  }
}
r(Co, fs, "PgNumericNumberBuilder");
var ps, gs;
class Fo extends (gs = g, ps = l, gs) {
  constructor(t, s) {
    super(t, s);
    r(this, "precision");
    r(this, "scale");
    r(this, "mapToDriverValue", String);
    this.precision = s.precision, this.scale = s.scale;
  }
  mapFromDriverValue(t) {
    return typeof t == "number" ? t : Number(t);
  }
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
r(Fo, ps, "PgNumericNumber");
var ys, ws;
class Oo extends (ws = P, ys = l, ws) {
  constructor(e, t, s) {
    super(e, "bigint", "PgNumericBigInt"), this.config.precision = t, this.config.scale = s;
  }
  /** @internal */
  build(e) {
    return new Vo(
      e,
      this.config
    );
  }
}
r(Oo, ys, "PgNumericBigIntBuilder");
var bs, Ss;
class Vo extends (Ss = g, bs = l, Ss) {
  constructor(t, s) {
    super(t, s);
    r(this, "precision");
    r(this, "scale");
    r(this, "mapFromDriverValue", BigInt);
    r(this, "mapToDriverValue", String);
    this.precision = s.precision, this.scale = s.scale;
  }
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
r(Vo, bs, "PgNumericBigInt");
function gl(i, e) {
  const { name: t, config: s } = F(i, e), o = s == null ? void 0 : s.mode;
  return o === "number" ? new Co(t, s == null ? void 0 : s.precision, s == null ? void 0 : s.scale) : o === "bigint" ? new Oo(t, s == null ? void 0 : s.precision, s == null ? void 0 : s.scale) : new qo(t, s == null ? void 0 : s.precision, s == null ? void 0 : s.scale);
}
var Ps, $s;
class Qo extends ($s = P, Ps = l, $s) {
  constructor(e) {
    super(e, "array", "PgPointTuple");
  }
  /** @internal */
  build(e) {
    return new Lo(
      e,
      this.config
    );
  }
}
r(Qo, Ps, "PgPointTupleBuilder");
var Ts, Ns;
class Lo extends (Ns = g, Ts = l, Ns) {
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
r(Lo, Ts, "PgPointTuple");
var xs, vs;
class jo extends (vs = P, xs = l, vs) {
  constructor(e) {
    super(e, "json", "PgPointObject");
  }
  /** @internal */
  build(e) {
    return new Ao(
      e,
      this.config
    );
  }
}
r(jo, xs, "PgPointObjectBuilder");
var Bs, Ds;
class Ao extends (Ds = g, Bs = l, Ds) {
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
r(Ao, Bs, "PgPointObject");
function yl(i, e) {
  const { name: t, config: s } = F(i, e);
  return !(s != null && s.mode) || s.mode === "tuple" ? new Qo(t) : new jo(t);
}
function wl(i) {
  const e = [];
  for (let t = 0; t < i.length; t += 2)
    e.push(Number.parseInt(i.slice(t, t + 2), 16));
  return new Uint8Array(e);
}
function Je(i, e) {
  const t = new ArrayBuffer(8), s = new DataView(t);
  for (let o = 0; o < 8; o++)
    s.setUint8(o, i[e + o]);
  return s.getFloat64(0, !0);
}
function zo(i) {
  const e = wl(i);
  let t = 0;
  const s = e[t];
  t += 1;
  const o = new DataView(e.buffer), a = o.getUint32(t, s === 1);
  if (t += 4, a & 536870912 && (o.getUint32(t, s === 1), t += 4), (a & 65535) === 1) {
    const u = Je(e, t);
    t += 8;
    const d = Je(e, t);
    return t += 8, [u, d];
  }
  throw new Error("Unsupported geometry type");
}
var qs, Cs;
class Io extends (Cs = P, qs = l, Cs) {
  constructor(e) {
    super(e, "array", "PgGeometry");
  }
  /** @internal */
  build(e) {
    return new Eo(
      e,
      this.config
    );
  }
}
r(Io, qs, "PgGeometryBuilder");
var Fs, Os;
class Eo extends (Os = g, Fs = l, Os) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    return zo(e);
  }
  mapToDriverValue(e) {
    return `point(${e[0]} ${e[1]})`;
  }
}
r(Eo, Fs, "PgGeometry");
var Vs, Qs;
class Uo extends (Qs = P, Vs = l, Qs) {
  constructor(e) {
    super(e, "json", "PgGeometryObject");
  }
  /** @internal */
  build(e) {
    return new _o(
      e,
      this.config
    );
  }
}
r(Uo, Vs, "PgGeometryObjectBuilder");
var Ls, js;
class _o extends (js = g, Ls = l, js) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(e) {
    const t = zo(e);
    return { x: t[0], y: t[1] };
  }
  mapToDriverValue(e) {
    return `point(${e.x} ${e.y})`;
  }
}
r(_o, Ls, "PgGeometryObject");
function bl(i, e) {
  const { name: t, config: s } = F(i, e);
  return !(s != null && s.mode) || s.mode === "tuple" ? new Io(t) : new Uo(t);
}
var As, zs;
class Ko extends (zs = P, As = l, zs) {
  constructor(e, t) {
    super(e, "number", "PgReal"), this.config.length = t;
  }
  /** @internal */
  build(e) {
    return new Mo(e, this.config);
  }
}
r(Ko, As, "PgRealBuilder");
var Is, Es;
class Mo extends (Es = g, Is = l, Es) {
  constructor(t, s) {
    super(t, s);
    r(this, "mapFromDriverValue", (t) => typeof t == "string" ? Number.parseFloat(t) : t);
  }
  getSQLType() {
    return "real";
  }
}
r(Mo, Is, "PgReal");
function Sl(i) {
  return new Ko(i ?? "");
}
var Us, _s;
class Ro extends (_s = P, Us = l, _s) {
  constructor(e) {
    super(e, "number", "PgSerial"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new Jo(e, this.config);
  }
}
r(Ro, Us, "PgSerialBuilder");
var Ks, Ms;
class Jo extends (Ms = g, Ks = l, Ms) {
  getSQLType() {
    return "serial";
  }
}
r(Jo, Ks, "PgSerial");
function Pl(i) {
  return new Ro(i ?? "");
}
var Rs, Js;
class Wo extends (Js = re, Rs = l, Js) {
  constructor(e) {
    super(e, "number", "PgSmallInt");
  }
  /** @internal */
  build(e) {
    return new Go(e, this.config);
  }
}
r(Wo, Rs, "PgSmallIntBuilder");
var Ws, Gs;
class Go extends (Gs = g, Ws = l, Gs) {
  constructor() {
    super(...arguments);
    r(this, "mapFromDriverValue", (t) => typeof t == "string" ? Number(t) : t);
  }
  getSQLType() {
    return "smallint";
  }
}
r(Go, Ws, "PgSmallInt");
function $l(i) {
  return new Wo(i ?? "");
}
var Hs, Ys;
class Ho extends (Ys = P, Hs = l, Ys) {
  constructor(e) {
    super(e, "number", "PgSmallSerial"), this.config.hasDefault = !0, this.config.notNull = !0;
  }
  /** @internal */
  build(e) {
    return new Yo(
      e,
      this.config
    );
  }
}
r(Ho, Hs, "PgSmallSerialBuilder");
var Xs, Zs;
class Yo extends (Zs = g, Xs = l, Zs) {
  getSQLType() {
    return "smallserial";
  }
}
r(Yo, Xs, "PgSmallSerial");
function Tl(i) {
  return new Ho(i ?? "");
}
var ks, er;
class Xo extends (er = P, ks = l, er) {
  constructor(e, t) {
    super(e, "string", "PgText"), this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new Zo(e, this.config);
  }
}
r(Xo, ks, "PgTextBuilder");
var tr, ir;
class Zo extends (ir = g, tr = l, ir) {
  constructor() {
    super(...arguments);
    r(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return "text";
  }
}
r(Zo, tr, "PgText");
function Nl(i, e = {}) {
  const { name: t, config: s } = F(i, e);
  return new Xo(t, s);
}
var sr, rr;
class ko extends (rr = X, sr = l, rr) {
  constructor(e, t, s) {
    super(e, "string", "PgTime"), this.withTimezone = t, this.precision = s, this.config.withTimezone = t, this.config.precision = s;
  }
  /** @internal */
  build(e) {
    return new Qe(e, this.config);
  }
}
r(ko, sr, "PgTimeBuilder");
var nr, or;
class Qe extends (or = g, nr = l, or) {
  constructor(t, s) {
    super(t, s);
    r(this, "withTimezone");
    r(this, "precision");
    this.withTimezone = s.withTimezone, this.precision = s.precision;
  }
  getSQLType() {
    return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
r(Qe, nr, "PgTime");
function xl(i, e = {}) {
  const { name: t, config: s } = F(i, e);
  return new ko(t, s.withTimezone ?? !1, s.precision);
}
var ar, lr;
class ea extends (lr = X, ar = l, lr) {
  constructor(e, t, s) {
    super(e, "date", "PgTimestamp"), this.config.withTimezone = t, this.config.precision = s;
  }
  /** @internal */
  build(e) {
    return new Le(e, this.config);
  }
}
r(ea, ar, "PgTimestampBuilder");
var ur, cr;
class Le extends (cr = g, ur = l, cr) {
  constructor(t, s) {
    super(t, s);
    r(this, "withTimezone");
    r(this, "precision");
    r(this, "mapFromDriverValue", (t) => new Date(this.withTimezone ? t : t + "+0000"));
    r(this, "mapToDriverValue", (t) => t.toISOString());
    this.withTimezone = s.withTimezone, this.precision = s.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
r(Le, ur, "PgTimestamp");
var dr, hr;
class ta extends (hr = X, dr = l, hr) {
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
r(ta, dr, "PgTimestampStringBuilder");
var fr, mr;
class je extends (mr = g, fr = l, mr) {
  constructor(t, s) {
    super(t, s);
    r(this, "withTimezone");
    r(this, "precision");
    this.withTimezone = s.withTimezone, this.precision = s.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
r(je, fr, "PgTimestampString");
function vl(i, e = {}) {
  const { name: t, config: s } = F(i, e);
  return (s == null ? void 0 : s.mode) === "string" ? new ta(t, s.withTimezone ?? !1, s.precision) : new ea(t, (s == null ? void 0 : s.withTimezone) ?? !1, s == null ? void 0 : s.precision);
}
var pr, gr;
class ia extends (gr = P, pr = l, gr) {
  constructor(e) {
    super(e, "string", "PgUUID");
  }
  /**
   * Adds `default gen_random_uuid()` to the column definition.
   */
  defaultRandom() {
    return this.default(n`gen_random_uuid()`);
  }
  /** @internal */
  build(e) {
    return new Ae(e, this.config);
  }
}
r(ia, pr, "PgUUIDBuilder");
var yr, wr;
class Ae extends (wr = g, yr = l, wr) {
  getSQLType() {
    return "uuid";
  }
}
r(Ae, yr, "PgUUID");
function Bl(i) {
  return new ia(i ?? "");
}
var br, Sr;
class sa extends (Sr = P, br = l, Sr) {
  constructor(e, t) {
    super(e, "string", "PgVarchar"), this.config.length = t.length, this.config.enumValues = t.enum;
  }
  /** @internal */
  build(e) {
    return new ra(
      e,
      this.config
    );
  }
}
r(sa, br, "PgVarcharBuilder");
var Pr, $r;
class ra extends ($r = g, Pr = l, $r) {
  constructor() {
    super(...arguments);
    r(this, "length", this.config.length);
    r(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "varchar" : `varchar(${this.length})`;
  }
}
r(ra, Pr, "PgVarchar");
function Dl(i, e = {}) {
  const { name: t, config: s } = F(i, e);
  return new sa(t, s);
}
var Tr, Nr;
class na extends (Nr = P, Tr = l, Nr) {
  constructor(e, t) {
    super(e, "string", "PgBinaryVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new oa(
      e,
      this.config
    );
  }
}
r(na, Tr, "PgBinaryVectorBuilder");
var xr, vr;
class oa extends (vr = g, xr = l, vr) {
  constructor() {
    super(...arguments);
    r(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `bit(${this.dimensions})`;
  }
}
r(oa, xr, "PgBinaryVector");
function ql(i, e) {
  const { name: t, config: s } = F(i, e);
  return new na(t, s);
}
var Br, Dr;
class aa extends (Dr = P, Br = l, Dr) {
  constructor(e, t) {
    super(e, "array", "PgHalfVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new la(
      e,
      this.config
    );
  }
}
r(aa, Br, "PgHalfVectorBuilder");
var qr, Cr;
class la extends (Cr = g, qr = l, Cr) {
  constructor() {
    super(...arguments);
    r(this, "dimensions", this.config.dimensions);
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
r(la, qr, "PgHalfVector");
function Cl(i, e) {
  const { name: t, config: s } = F(i, e);
  return new aa(t, s);
}
var Fr, Or;
class ua extends (Or = P, Fr = l, Or) {
  constructor(e, t) {
    super(e, "string", "PgSparseVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new ca(
      e,
      this.config
    );
  }
}
r(ua, Fr, "PgSparseVectorBuilder");
var Vr, Qr;
class ca extends (Qr = g, Vr = l, Qr) {
  constructor() {
    super(...arguments);
    r(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `sparsevec(${this.dimensions})`;
  }
}
r(ca, Vr, "PgSparseVector");
function Fl(i, e) {
  const { name: t, config: s } = F(i, e);
  return new ua(t, s);
}
var Lr, jr;
class da extends (jr = P, Lr = l, jr) {
  constructor(e, t) {
    super(e, "array", "PgVector"), this.config.dimensions = t.dimensions;
  }
  /** @internal */
  build(e) {
    return new ha(
      e,
      this.config
    );
  }
}
r(da, Lr, "PgVectorBuilder");
var Ar, zr;
class ha extends (zr = g, Ar = l, zr) {
  constructor() {
    super(...arguments);
    r(this, "dimensions", this.config.dimensions);
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
r(ha, Ar, "PgVector");
function Ol(i, e) {
  const { name: t, config: s } = F(i, e);
  return new da(t, s);
}
function Vl() {
  return {
    bigint: el,
    bigserial: tl,
    boolean: il,
    char: sl,
    cidr: rl,
    customType: nl,
    date: ol,
    doublePrecision: al,
    inet: ll,
    integer: ul,
    interval: cl,
    json: dl,
    jsonb: hl,
    line: fl,
    macaddr: ml,
    macaddr8: pl,
    numeric: gl,
    point: yl,
    geometry: bl,
    real: Sl,
    serial: Pl,
    smallint: $l,
    smallserial: Tl,
    text: Nl,
    time: xl,
    timestamp: vl,
    uuid: Bl,
    varchar: Dl,
    bit: ql,
    halfvec: Cl,
    sparsevec: Fl,
    vector: Ol
  };
}
const ve = Symbol.for("drizzle:PgInlineForeignKeys"), We = Symbol.for("drizzle:EnableRLS");
var Ir, Er, Ur, _r, Kr, Mr;
class E extends (Mr = w, Kr = l, _r = ve, Ur = We, Er = w.Symbol.ExtraConfigBuilder, Ir = w.Symbol.ExtraConfigColumns, Mr) {
  constructor() {
    super(...arguments);
    /**@internal */
    r(this, _r, []);
    /** @internal */
    r(this, Ur, !1);
    /** @internal */
    r(this, Er);
    /** @internal */
    r(this, Ir, {});
  }
}
r(E, Kr, "PgTable"), /** @internal */
r(E, "Symbol", Object.assign({}, w.Symbol, {
  InlineForeignKeys: ve,
  EnableRLS: We
}));
function Ql(i, e, t, s, o = i) {
  const a = new E(i, s, o), u = typeof e == "function" ? e(Vl()) : e, d = Object.fromEntries(
    Object.entries(u).map(([c, N]) => {
      const p = N;
      p.setName(c);
      const b = p.build(a);
      return a[ve].push(...p.buildForeignKeys(b, a)), [c, b];
    })
  ), f = Object.fromEntries(
    Object.entries(u).map(([c, N]) => {
      const p = N;
      p.setName(c);
      const b = p.buildExtraConfigColumn(a);
      return [c, b];
    })
  ), m = Object.assign(a, d);
  return m[w.Symbol.Columns] = d, m[w.Symbol.ExtraConfigColumns] = f, t && (m[E.Symbol.ExtraConfigBuilder] = t), Object.assign(m, {
    enableRLS: () => (m[E.Symbol.EnableRLS] = !0, m)
  });
}
const fa = (i, e, t) => Ql(i, e, t, void 0);
var Rr;
Rr = l;
class ze {
  constructor(e, t, s) {
    r(this, "referencedTableName");
    r(this, "fieldName");
    this.sourceTable = e, this.referencedTable = t, this.relationName = s, this.referencedTableName = t[w.Symbol.Name];
  }
}
r(ze, Rr, "Relation");
var Jr, Wr;
const fe = class fe extends (Wr = ze, Jr = l, Wr) {
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
r(fe, Jr, "One");
let te = fe;
var Gr, Hr;
const me = class me extends (Hr = ze, Gr = l, Hr) {
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
r(me, Gr, "Many");
let Be = me;
function Ll() {
  return {
    and: xe,
    between: Ra,
    eq: Kn,
    exists: Ka,
    gt: La,
    gte: ja,
    ilike: Ha,
    inArray: Ia,
    isNull: Ua,
    isNotNull: _a,
    like: Wa,
    lt: Aa,
    lte: za,
    ne: Oa,
    not: Qa,
    notBetween: Ja,
    notExists: Ma,
    notLike: Ga,
    notIlike: Ya,
    notInArray: Ea,
    or: Va,
    sql: n
  };
}
function jl() {
  return {
    sql: n,
    asc: Xa,
    desc: Za
  };
}
function Al(i, e, t) {
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
var Yr;
Yr = l;
const pe = class pe {
  constructor(e) {
    r(this, "config");
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
    if (t === C)
      return {
        ...e[C],
        selectedFields: new Proxy(
          e[C].selectedFields,
          this
        )
      };
    if (typeof t == "symbol")
      return e[t];
    const o = (h(e, U) ? e._.selectedFields : h(e, J) ? e[C].selectedFields : e)[t];
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
          new ge(this.config.alias, this.config.replaceOriginalName ?? !1)
        )
      )
    ) : o : typeof o != "object" || o === null ? o : new Proxy(o, new pe(this.config));
  }
};
r(pe, Yr, "SelectionProxyHandler");
let L = pe;
var Xr, Zr;
class ne extends (Zr = J, Xr = l, Zr) {
}
r(ne, Xr, "PgViewBase");
var kr;
kr = l;
class le {
  constructor(e) {
    /** @internal */
    r(this, "casing");
    this.casing = new Na(e == null ? void 0 : e.casing);
  }
  async migrate(e, t, s) {
    const o = typeof s == "string" ? "__drizzle_migrations" : s.migrationsTable ?? "__drizzle_migrations", a = typeof s == "string" ? "drizzle" : s.migrationsSchema ?? "drizzle", u = n`
			CREATE TABLE IF NOT EXISTS ${n.identifier(a)}.${n.identifier(o)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at bigint
			)
		`;
    await t.execute(n`CREATE SCHEMA IF NOT EXISTS ${n.identifier(a)}`), await t.execute(u);
    const f = (await t.all(
      n`select id, hash, created_at from ${n.identifier(a)}.${n.identifier(o)} order by created_at desc limit 1`
    ))[0];
    await t.transaction(async (m) => {
      for await (const c of e)
        if (!f || Number(f.created_at) < c.folderMillis) {
          for (const N of c.sql)
            await m.execute(n.raw(N));
          await m.execute(
            n`insert into ${n.identifier(a)}.${n.identifier(o)} ("hash", "created_at") values(${c.hash}, ${c.folderMillis})`
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
    const t = [n`with `];
    for (const [s, o] of e.entries())
      t.push(n`${n.identifier(o._.alias)} as (${o._.sql})`), s < e.length - 1 && t.push(n`, `);
    return t.push(n` `), n.join(t);
  }
  buildDeleteQuery({ table: e, where: t, returning: s, withList: o }) {
    const a = this.buildWithCTE(o), u = s ? n` returning ${this.buildSelection(s, { isSingleTable: !0 })}` : void 0, d = t ? n` where ${t}` : void 0;
    return n`${a}delete from ${e}${d}${u}`;
  }
  buildUpdateSet(e, t) {
    const s = e[w.Symbol.Columns], o = Object.keys(s).filter(
      (u) => {
        var d;
        return t[u] !== void 0 || ((d = s[u]) == null ? void 0 : d.onUpdateFn) !== void 0;
      }
    ), a = o.length;
    return n.join(o.flatMap((u, d) => {
      const f = s[u], m = t[u] ?? n.param(f.onUpdateFn(), f), c = n`${n.identifier(this.casing.getColumnCasing(f))} = ${m}`;
      return d < a - 1 ? [c, n.raw(", ")] : [c];
    }));
  }
  buildUpdateQuery({ table: e, set: t, where: s, returning: o, withList: a, from: u, joins: d }) {
    const f = this.buildWithCTE(a), m = e[E.Symbol.Name], c = e[E.Symbol.Schema], N = e[E.Symbol.OriginalName], p = m === N ? void 0 : m, b = n`${c ? n`${n.identifier(c)}.` : void 0}${n.identifier(N)}${p && n` ${n.identifier(p)}`}`, x = this.buildUpdateSet(e, t), v = u && n.join([n.raw(" from "), this.buildFromTable(u)]), B = this.buildJoins(d), T = o ? n` returning ${this.buildSelection(o, { isSingleTable: !u })}` : void 0, V = s ? n` where ${s}` : void 0;
    return n`${f}update ${b} set ${x}${v}${B}${V}${T}`;
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
        d.push(n.identifier(a.fieldAlias));
      else if (h(a, y.Aliased) || h(a, y)) {
        const f = h(a, y.Aliased) ? a.sql : a;
        t ? d.push(
          new y(
            f.queryChunks.map((m) => h(m, g) ? n.identifier(this.casing.getColumnCasing(m)) : m)
          )
        ) : d.push(f), h(a, y.Aliased) && d.push(n` as ${n.identifier(a.fieldAlias)}`);
      } else h(a, A) && (t ? d.push(n.identifier(this.casing.getColumnCasing(a))) : d.push(a));
      return u < s - 1 && d.push(n`, `), d;
    });
    return n.join(o);
  }
  buildJoins(e) {
    if (!e || e.length === 0)
      return;
    const t = [];
    for (const [s, o] of e.entries()) {
      s === 0 && t.push(n` `);
      const a = o.table, u = o.lateral ? n` lateral` : void 0;
      if (h(a, E)) {
        const d = a[E.Symbol.Name], f = a[E.Symbol.Schema], m = a[E.Symbol.OriginalName], c = d === m ? void 0 : o.alias;
        t.push(
          n`${n.raw(o.joinType)} join${u} ${f ? n`${n.identifier(f)}.` : void 0}${n.identifier(m)}${c && n` ${n.identifier(c)}`} on ${o.on}`
        );
      } else if (h(a, J)) {
        const d = a[C].name, f = a[C].schema, m = a[C].originalName, c = d === m ? void 0 : o.alias;
        t.push(
          n`${n.raw(o.joinType)} join${u} ${f ? n`${n.identifier(f)}.` : void 0}${n.identifier(m)}${c && n` ${n.identifier(c)}`} on ${o.on}`
        );
      } else
        t.push(
          n`${n.raw(o.joinType)} join${u} ${a} on ${o.on}`
        );
      s < e.length - 1 && t.push(n` `);
    }
    return n.join(t);
  }
  buildFromTable(e) {
    if (h(e, w) && e[w.Symbol.IsAlias]) {
      let t = n`${n.identifier(e[w.Symbol.OriginalName])}`;
      return e[w.Symbol.Schema] && (t = n`${n.identifier(e[w.Symbol.Schema])}.${t}`), n`${t} ${n.identifier(e[w.Symbol.Name])}`;
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
    lockingClause: p,
    distinct: b,
    setOperators: x
  }) {
    const v = s ?? de(t);
    for (const I of v)
      if (h(I.field, A) && ae(I.field.table) !== (h(u, U) ? u._.alias : h(u, ne) ? u[C].name : h(u, y) ? void 0 : ae(u)) && !((_) => d == null ? void 0 : d.some(
        ({ alias: we }) => we === (_[w.Symbol.IsAlias] ? ae(_) : _[w.Symbol.BaseName])
      ))(I.field.table)) {
        const _ = ae(I.field.table);
        throw new Error(
          `Your "${I.path.join("->")}" field references a column "${_}"."${I.field.name}", but the table "${_}" is not part of the query! Did you forget to join it?`
        );
      }
    const B = !d || d.length === 0, T = this.buildWithCTE(e);
    let V;
    b && (V = b === !0 ? n` distinct` : n` distinct on (${n.join(b.on, n`, `)})`);
    const j = this.buildSelection(v, { isSingleTable: B }), D = this.buildFromTable(u), M = this.buildJoins(d), Q = o ? n` where ${o}` : void 0, S = a ? n` having ${a}` : void 0;
    let $;
    f && f.length > 0 && ($ = n` order by ${n.join(f, n`, `)}`);
    let O;
    m && m.length > 0 && (O = n` group by ${n.join(m, n`, `)}`);
    const oe = typeof c == "object" || typeof c == "number" && c >= 0 ? n` limit ${c}` : void 0, ye = N ? n` offset ${N}` : void 0, H = n.empty();
    if (p) {
      const I = n` for ${n.raw(p.strength)}`;
      p.config.of && I.append(
        n` of ${n.join(
          Array.isArray(p.config.of) ? p.config.of : [p.config.of],
          n`, `
        )}`
      ), p.config.noWait ? I.append(n` no wait`) : p.config.skipLocked && I.append(n` skip locked`), H.append(I);
    }
    const R = n`${T}select${V} ${j} from ${D}${M}${Q}${O}${S}${$}${oe}${ye}${H}`;
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
    const f = n`(${e.getSQL()}) `, m = n`(${o.getSQL()})`;
    let c;
    if (u && u.length > 0) {
      const x = [];
      for (const v of u)
        if (h(v, g))
          x.push(n.identifier(v.name));
        else if (h(v, y)) {
          for (let B = 0; B < v.queryChunks.length; B++) {
            const T = v.queryChunks[B];
            h(T, g) && (v.queryChunks[B] = n.identifier(T.name));
          }
          x.push(n`${v}`);
        } else
          x.push(n`${v}`);
      c = n` order by ${n.join(x, n`, `)} `;
    }
    const N = typeof a == "object" || typeof a == "number" && a >= 0 ? n` limit ${a}` : void 0, p = n.raw(`${t} ${s ? "all " : ""}`), b = d ? n` offset ${d}` : void 0;
    return n`${f}${p}${m}${c}${N}${b}`;
  }
  buildInsertQuery({ table: e, values: t, onConflict: s, returning: o, withList: a, select: u, overridingSystemValue_: d }) {
    const f = [], m = e[w.Symbol.Columns], c = Object.entries(m).filter(([T, V]) => !V.shouldDisableInsert()), N = c.map(
      ([, T]) => n.identifier(this.casing.getColumnCasing(T))
    );
    if (u) {
      const T = t;
      h(T, y) ? f.push(T) : f.push(T.getSQL());
    } else {
      const T = t;
      f.push(n.raw("values "));
      for (const [V, j] of T.entries()) {
        const D = [];
        for (const [M, Q] of c) {
          const S = j[M];
          if (S === void 0 || h(S, Y) && S.value === void 0)
            if (Q.defaultFn !== void 0) {
              const $ = Q.defaultFn(), O = h($, y) ? $ : n.param($, Q);
              D.push(O);
            } else if (!Q.default && Q.onUpdateFn !== void 0) {
              const $ = Q.onUpdateFn(), O = h($, y) ? $ : n.param($, Q);
              D.push(O);
            } else
              D.push(n`default`);
          else
            D.push(S);
        }
        f.push(D), V < T.length - 1 && f.push(n`, `);
      }
    }
    const p = this.buildWithCTE(a), b = n.join(f), x = o ? n` returning ${this.buildSelection(o, { isSingleTable: !0 })}` : void 0, v = s ? n` on conflict ${s}` : void 0, B = d === !0 ? n`overriding system value ` : void 0;
    return n`${p}insert into ${e} ${N} ${B}${b}${v}${x}`;
  }
  buildRefreshMaterializedViewQuery({ view: e, concurrently: t, withNoData: s }) {
    const o = t ? n` concurrently` : void 0, a = s ? n` with no data` : void 0;
    return n`refresh materialized view${o} ${e}${a}`;
  }
  prepareTyping(e) {
    return h(e, Oe) || h(e, Fe) ? "json" : h(e, Ve) ? "decimal" : h(e, Qe) ? "time" : h(e, Le) || h(e, je) ? "timestamp" : h(e, qe) || h(e, Ce) ? "date" : h(e, Ae) ? "uuid" : "none";
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
    let c = [], N, p, b = [], x;
    const v = [];
    if (u === !0)
      c = Object.entries(a.columns).map(([V, j]) => ({
        dbKey: j.name,
        tsKey: V,
        field: K(j, d),
        relationTableTsKey: void 0,
        isJson: !1,
        selection: []
      }));
    else {
      const T = Object.fromEntries(
        Object.entries(a.columns).map(([S, $]) => [S, K($, d)])
      );
      if (u.where) {
        const S = typeof u.where == "function" ? u.where(T, Ll()) : u.where;
        x = S && ce(S, d);
      }
      const V = [];
      let j = [];
      if (u.columns) {
        let S = !1;
        for (const [$, O] of Object.entries(u.columns))
          O !== void 0 && $ in a.columns && (!S && O === !0 && (S = !0), j.push($));
        j.length > 0 && (j = S ? j.filter(($) => {
          var O;
          return ((O = u.columns) == null ? void 0 : O[$]) === !0;
        }) : Object.keys(a.columns).filter(($) => !j.includes($)));
      } else
        j = Object.keys(a.columns);
      for (const S of j) {
        const $ = a.columns[S];
        V.push({ tsKey: S, value: $ });
      }
      let D = [];
      u.with && (D = Object.entries(u.with).filter((S) => !!S[1]).map(([S, $]) => ({ tsKey: S, queryConfig: $, relation: a.relations[S] })));
      let M;
      if (u.extras) {
        M = typeof u.extras == "function" ? u.extras(T, { sql: n }) : u.extras;
        for (const [S, $] of Object.entries(M))
          V.push({
            tsKey: S,
            value: Un($, d)
          });
      }
      for (const { tsKey: S, value: $ } of V)
        c.push({
          dbKey: h($, y.Aliased) ? $.fieldAlias : a.columns[S].name,
          tsKey: S,
          field: h($, A) ? K($, d) : $,
          relationTableTsKey: void 0,
          isJson: !1,
          selection: []
        });
      let Q = typeof u.orderBy == "function" ? u.orderBy(T, jl()) : u.orderBy ?? [];
      Array.isArray(Q) || (Q = [Q]), b = Q.map((S) => h(S, A) ? K(S, d) : ce(S, d)), N = u.limit, p = u.offset;
      for (const {
        tsKey: S,
        queryConfig: $,
        relation: O
      } of D) {
        const oe = Al(t, s, O), ye = Pe(O.referencedTable), H = s[ye], R = `${d}_${S}`, I = xe(
          ...oe.fields.map(
            (Sa, Pa) => Kn(
              K(oe.references[Pa], R),
              K(Sa, d)
            )
          )
        ), _ = this.buildRelationalQueryWithoutPK({
          fullSchema: e,
          schema: t,
          tableNamesMap: s,
          table: e[H],
          tableConfig: t[H],
          queryConfig: h(O, te) ? $ === !0 ? { limit: 1 } : { ...$, limit: 1 } : $,
          tableAlias: R,
          joinOn: I,
          nestedQueryRelation: O
        }), we = n`${n.identifier(R)}.${n.identifier("data")}`.as(S);
        v.push({
          on: n`true`,
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
      throw new _n({ message: `No fields selected for table "${a.tsName}" ("${d}")` });
    let B;
    if (x = xe(m, x), f) {
      let T = n`json_build_array(${n.join(
        c.map(
          ({ field: D, tsKey: M, isJson: Q }) => Q ? n`${n.identifier(`${d}_${M}`)}.${n.identifier("data")}` : h(D, y.Aliased) ? D.sql : D
        ),
        n`, `
      )})`;
      h(f, Be) && (T = n`coalesce(json_agg(${T}${b.length > 0 ? n` order by ${n.join(b, n`, `)}` : void 0}), '[]'::json)`);
      const V = [{
        dbKey: "data",
        tsKey: "data",
        field: T.as("data"),
        isJson: !0,
        relationTableTsKey: a.tsName,
        selection: c
      }];
      N !== void 0 || p !== void 0 || b.length > 0 ? (B = this.buildSelectQuery({
        table: be(o, d),
        fields: {},
        fieldsFlat: [{
          path: [],
          field: n.raw("*")
        }],
        where: x,
        limit: N,
        offset: p,
        orderBy: b,
        setOperators: []
      }), x = void 0, N = void 0, p = void 0, b = []) : B = be(o, d), B = this.buildSelectQuery({
        table: h(B, E) ? B : new U(B, {}, d),
        fields: {},
        fieldsFlat: V.map(({ field: D }) => ({
          path: [],
          field: h(D, A) ? K(D, d) : D
        })),
        joins: v,
        where: x,
        limit: N,
        offset: p,
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
        offset: p,
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
r(le, kr, "PgDialect");
var en;
en = l;
class ma {
  /** @internal */
  getSelectedFields() {
    return this._.selectedFields;
  }
}
r(ma, en, "TypedQueryBuilder");
var tn;
tn = l;
class W {
  constructor(e) {
    r(this, "fields");
    r(this, "session");
    r(this, "dialect");
    r(this, "withList", []);
    r(this, "distinct");
    r(this, "authToken");
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
    const t = !!this.fields, s = e;
    let o;
    return this.fields ? o = this.fields : h(s, U) ? o = Object.fromEntries(
      Object.keys(s._.selectedFields).map((a) => [a, s[a]])
    ) : h(s, ne) ? o = s[C].selectedFields : h(s, y) ? o = {} : o = De(s), new Ie({
      table: s,
      fields: o,
      isPartialSelect: t,
      session: this.session,
      dialect: this.dialect,
      withList: this.withList,
      distinct: this.distinct
    }).setToken(this.authToken);
  }
}
r(W, tn, "PgSelectBuilder");
var sn, rn;
class pa extends (rn = ma, sn = l, rn) {
  constructor({ table: t, fields: s, isPartialSelect: o, session: a, dialect: u, withList: d, distinct: f }) {
    super();
    r(this, "_");
    r(this, "config");
    r(this, "joinsNotNullableMap");
    r(this, "tableName");
    r(this, "isPartialSelect");
    r(this, "session");
    r(this, "dialect");
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
    r(this, "leftJoin", this.createJoin("left"));
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
    r(this, "rightJoin", this.createJoin("right"));
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
    r(this, "innerJoin", this.createJoin("inner"));
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
    r(this, "fullJoin", this.createJoin("full"));
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
    r(this, "union", this.createSetOperator("union", !1));
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
    r(this, "unionAll", this.createSetOperator("union", !0));
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
    r(this, "intersect", this.createSetOperator("intersect", !1));
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
    r(this, "intersectAll", this.createSetOperator("intersect", !0));
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
    r(this, "except", this.createSetOperator("except", !1));
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
    r(this, "exceptAll", this.createSetOperator("except", !0));
    this.config = {
      withList: d,
      table: t,
      fields: { ...s },
      distinct: f,
      setOperators: []
    }, this.isPartialSelect = o, this.session = a, this.dialect = u, this._ = {
      selectedFields: s
    }, this.tableName = Re(t), this.joinsNotNullableMap = typeof this.tableName == "string" ? { [this.tableName]: !0 } : {};
  }
  createJoin(t) {
    return (s, o) => {
      var d;
      const a = this.tableName, u = Re(s);
      if (typeof u == "string" && ((d = this.config.joins) != null && d.some((f) => f.alias === u)))
        throw new Error(`Alias "${u}" is already used in this query`);
      if (!this.isPartialSelect && (Object.keys(this.joinsNotNullableMap).length === 1 && typeof a == "string" && (this.config.fields = {
        [a]: this.config.fields
      }), typeof u == "string" && !h(s, y))) {
        const f = h(s, U) ? s._.selectedFields : h(s, J) ? s[C].selectedFields : s[w.Symbol.Columns];
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
      const a = typeof o == "function" ? o(zl()) : o;
      if (!Rn(this.getSelectedFields(), a.getSelectedFields()))
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
r(pa, sn, "PgSelectQueryBuilder");
var nn, on;
class Ie extends (on = pa, nn = l, on) {
  constructor() {
    super(...arguments);
    r(this, "authToken");
    r(this, "execute", (t) => Ne.startActiveSpan("drizzle.operation", () => this._prepare().execute(t, this.authToken)));
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
r(Ie, nn, "PgSelect");
ka(Ie, [Mn]);
function Z(i, e) {
  return (t, s, ...o) => {
    const a = [s, ...o].map((u) => ({
      type: i,
      isAll: e,
      rightSelect: u
    }));
    for (const u of a)
      if (!Rn(t.getSelectedFields(), u.rightSelect.getSelectedFields()))
        throw new Error(
          "Set operator error (union / intersect / except): selected fields are not the same or are in a different order"
        );
    return t.addSetOperators(a);
  };
}
const zl = () => ({
  union: Il,
  unionAll: El,
  intersect: Ul,
  intersectAll: _l,
  except: Kl,
  exceptAll: Ml
}), Il = Z("union", !1), El = Z("union", !0), Ul = Z("intersect", !1), _l = Z("intersect", !0), Kl = Z("except", !1), Ml = Z("except", !0);
var an;
an = l;
class Ee {
  constructor(e) {
    r(this, "dialect");
    r(this, "dialectConfig");
    r(this, "$with", (e, t) => {
      const s = this;
      return { as: (a) => (typeof a == "function" && (a = a(s)), new Proxy(
        new An(
          a.getSQL(),
          t ?? ("getSelectedFields" in a ? a.getSelectedFields() ?? {} : {}),
          e,
          !0
        ),
        new L({ alias: e, sqlAliasedBehavior: "alias", sqlBehavior: "error" })
      )) };
    });
    this.dialect = h(e, le) ? e : void 0, this.dialectConfig = h(e, le) ? void 0 : e;
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
r(Ee, an, "PgQueryBuilder");
var ln;
ln = l;
class Rl {
  constructor(e, t) {
    r(this, "as");
    r(this, "for");
    r(this, "to");
    r(this, "using");
    r(this, "withCheck");
    /** @internal */
    r(this, "_linkedTable");
    this.name = e, t && (this.as = t.as, this.for = t.for, this.to = t.to, this.using = t.using, this.withCheck = t.withCheck);
  }
  link(e) {
    return this._linkedTable = e, this;
  }
}
r(Rl, ln, "PgPolicy");
var un;
un = l;
class Jl {
  constructor(e, t) {
    /** @internal */
    r(this, "_existing");
    /** @internal */
    r(this, "createDb");
    /** @internal */
    r(this, "createRole");
    /** @internal */
    r(this, "inherit");
    this.name = e, t && (this.createDb = t.createDb, this.createRole = t.createRole, this.inherit = t.inherit);
  }
  existing() {
    return this._existing = !0, this;
  }
}
r(Jl, un, "PgRole");
const Ge = Symbol.for("drizzle:PgViewConfig");
var cn;
cn = l;
class Ue {
  constructor(e, t) {
    r(this, "config", {});
    this.name = e, this.schema = t;
  }
  with(e) {
    return this.config.with = e, this;
  }
}
r(Ue, cn, "PgDefaultViewBuilderCore");
var dn, hn;
class ga extends (hn = Ue, dn = l, hn) {
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
r(ga, dn, "PgViewBuilder");
var fn, mn;
class ya extends (mn = Ue, fn = l, mn) {
  constructor(t, s, o) {
    super(t, o);
    r(this, "columns");
    this.columns = De(fa(t, s));
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
r(ya, fn, "PgManualViewBuilder");
var pn;
pn = l;
class _e {
  constructor(e, t) {
    r(this, "config", {});
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
r(_e, pn, "PgMaterializedViewBuilderCore");
var gn, yn;
class wa extends (yn = _e, gn = l, yn) {
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
r(wa, gn, "PgMaterializedViewBuilder");
var wn, bn;
class ba extends (bn = _e, wn = l, bn) {
  constructor(t, s, o) {
    super(t, o);
    r(this, "columns");
    this.columns = De(fa(t, s));
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
r(ba, wn, "PgManualMaterializedViewBuilder");
var Sn, Pn, $n;
class ie extends ($n = ne, Pn = l, Sn = Ge, $n) {
  constructor({ pgConfig: t, config: s }) {
    super(s);
    r(this, Sn);
    t && (this[Ge] = {
      with: t.with
    });
  }
}
r(ie, Pn, "PgView");
const He = Symbol.for("drizzle:PgMaterializedViewConfig");
var Tn, Nn, xn;
class se extends (xn = ne, Nn = l, Tn = He, xn) {
  constructor({ pgConfig: t, config: s }) {
    super(s);
    r(this, Tn);
    this[He] = {
      with: t == null ? void 0 : t.with,
      using: t == null ? void 0 : t.using,
      tablespace: t == null ? void 0 : t.tablespace,
      withNoData: t == null ? void 0 : t.withNoData
    };
  }
}
r(se, Nn, "PgMaterializedView");
function Yl(i, e, t) {
  return e ? new ya(i, e, t) : new ga(i, t);
}
function Xl(i, e, t) {
  return e ? new ba(i, e, t) : new wa(i, t);
}
function Zl(i) {
  return h(i, ie);
}
function kl(i) {
  return h(i, se);
}
export {
  Bn as F,
  E as P,
  y as S,
  va as U,
  C as V,
  Yl as a,
  Xl as b,
  Hl as c,
  Zl as d,
  kl as e,
  Jl as f,
  Rl as g,
  Ge as h,
  Da as i,
  He as j,
  le as k,
  jn as l,
  ie as m,
  g as n,
  Ql as p,
  n as s,
  qn as u
};
