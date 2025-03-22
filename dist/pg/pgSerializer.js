var fn = Object.defineProperty;
var hn = (n, i, r) => i in n ? fn(n, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : n[i] = r;
var J = (n, i, r) => hn(n, typeof i != "symbol" ? i + "" : i, r);
import { vectorOps as Pe } from "./vector.js";
import { withStyle as te, camelCase as yn } from "./lib.js";
import { getColumnCasing as fe, sqlToStr as Ve, escapeSingleQuotes as gn, isPgArrayType as Je } from "./utils.js";
import { e as ge, T as We, i as x, g as Ue } from "../casing-tDA94lCu.js";
import { P as Ie, h as _n, V as sn, j as bn, U as Nn, F as En, g as Sn, k as $n, u as An, S as se, l as Ke, f as Le, m as Tn, n as wn } from "../view-DDfO9v7q.js";
var Ge;
Ge = ge;
class an {
  constructor(i, r) {
    /** @internal */
    J(this, "columns");
    /** @internal */
    J(this, "name");
    this.columns = i, this.name = r;
  }
  /** @internal */
  build(i) {
    return new on(i, this.columns, this.name);
  }
}
J(an, Ge, "PgPrimaryKeyBuilder");
var Xe;
Xe = ge;
class on {
  constructor(i, r, u) {
    J(this, "columns");
    J(this, "name");
    this.table = i, this.columns = r, this.name = u;
  }
  getName() {
    return this.name ?? `${this.table[Ie.Symbol.Name]}_${this.columns.map((i) => i.name).join("_")}_pk`;
  }
}
J(on, Xe, "PgPrimaryKey");
var Ze;
Ze = ge;
class cn {
  constructor(i, r) {
    J(this, "brand");
    this.name = i, this.value = r;
  }
  /** @internal */
  build(i) {
    return new rn(i, this);
  }
}
J(cn, Ze, "PgCheckBuilder");
var en;
en = ge;
class rn {
  constructor(i, r) {
    J(this, "name");
    J(this, "value");
    this.table = i, this.name = r.name, this.value = r.value;
  }
}
J(rn, en, "PgCheck");
var nn;
nn = ge;
class ln {
  constructor(i, r, u, N, b = "btree") {
    /** @internal */
    J(this, "config");
    this.config = {
      name: N,
      columns: i,
      unique: r,
      only: u,
      method: b
    };
  }
  concurrently() {
    return this.config.concurrently = !0, this;
  }
  with(i) {
    return this.config.with = i, this;
  }
  where(i) {
    return this.config.where = i, this;
  }
  /** @internal */
  build(i) {
    return new mn(this.config, i);
  }
}
J(ln, nn, "PgIndexBuilder");
var tn;
tn = ge;
class mn {
  constructor(i, r) {
    J(this, "config");
    this.config = { ...i, table: r };
  }
}
J(mn, tn, "PgIndex");
function ke(n) {
  const i = Object.values(n[We.Symbol.Columns]), r = [], u = [], N = [], b = Object.values(n[Ie.Symbol.InlineForeignKeys]), ae = [], le = n[We.Symbol.Name], O = n[We.Symbol.Schema], E = [], L = n[Ie.Symbol.EnableRLS], G = n[Ie.Symbol.ExtraConfigBuilder];
  if (G !== void 0) {
    const ee = G(n[We.Symbol.ExtraConfigColumns]), he = Array.isArray(ee) ? ee.flat(1) : Object.values(ee);
    for (const R of he)
      x(R, ln) ? r.push(R.build(n)) : x(R, cn) ? u.push(R.build(n)) : x(R, Nn) ? ae.push(R.build(n)) : x(R, an) ? N.push(R.build(n)) : x(R, En) ? b.push(R.build(n)) : x(R, Sn) && E.push(R);
  }
  return {
    columns: i,
    indexes: r,
    foreignKeys: b,
    checks: u,
    primaryKeys: N,
    uniqueConstraints: ae,
    name: le,
    schema: O,
    policies: E,
    enableRLS: L
  };
}
function On(n) {
  return {
    ...n[sn],
    ...n[_n]
  };
}
function xn(n) {
  return {
    ...n[sn],
    ...n[bn]
  };
}
const qn = (n, i) => `${n}_${i.join("_")}_index`;
function M(n) {
  return typeof n == "string" ? n : typeof n > "u" ? void 0 : String(n);
}
function Me(n) {
  return n === "integer" ? "2147483647" : n === "bigint" ? "9223372036854775807" : "32767";
}
function Ye(n) {
  return n === "integer" ? "-2147483648" : n === "bigint" ? "-9223372036854775808" : "-32768";
}
function B(n) {
  return typeof n == "string" ? n : typeof n > "u" ? void 0 : typeof n == "bigint" ? n.toString() : String(n);
}
function je(n, i) {
  return i = i.split("[")[0], `{${n.map((u) => typeof u == "number" || typeof u == "bigint" ? u.toString() : typeof u == "boolean" ? u ? "true" : "false" : Array.isArray(u) ? je(u, i) : u instanceof Date ? i === "date" ? `"${u.toISOString().split("T")[0]}"` : i === "timestamp" ? `"${u.toISOString().replace("T", " ").slice(0, 23)}"` : `"${u.toISOString()}"` : typeof u == "object" ? `"${JSON.stringify(u).replaceAll('"', '\\"')}"` : `"${u}"`).join(",")}}`;
}
const Fn = (n, i, r, u, N, b, ae, le, O, E) => {
  var k, Ne, Ae, Ee, Te, Y, we, ye, Q, Oe, Se, pe, xe, De, qe;
  const L = new $n({ casing: O }), G = {}, ee = {}, he = {}, R = {}, de = {}, me = {};
  for (const e of n) {
    const d = {}, {
      name: m,
      columns: a,
      indexes: l,
      foreignKeys: q,
      checks: W,
      schema: A,
      primaryKeys: V,
      uniqueConstraints: C,
      policies: X,
      enableRLS: U
    } = ke(e);
    if (E && !E.includes(A ?? "public"))
      continue;
    const I = {}, j = {}, ie = {}, oe = {}, g = {}, o = {}, D = {};
    a.forEach((t) => {
      var v, ne, ue, ce, ve, Ce;
      const h = fe(t, O), f = t.notNull, S = t.primary, s = t.getSQLType().toLowerCase(), c = x(t, Ke) ? t.enum.schema || "public" : void 0, y = t.generated, p = t.generatedIdentity, _ = M((v = p == null ? void 0 : p.sequenceOptions) == null ? void 0 : v.increment) ?? "1", $ = M((ne = p == null ? void 0 : p.sequenceOptions) == null ? void 0 : ne.minValue) ?? (parseFloat(_) < 0 ? Ye(t.columnType) : "1"), H = M((ue = p == null ? void 0 : p.sequenceOptions) == null ? void 0 : ue.maxValue) ?? (parseFloat(_) < 0 ? "-1" : Me(t.getSQLType())), T = M((ce = p == null ? void 0 : p.sequenceOptions) == null ? void 0 : ce.startWith) ?? (parseFloat(_) < 0 ? H : $), w = M((ve = p == null ? void 0 : p.sequenceOptions) == null ? void 0 : ve.cache) ?? "1", P = {
        name: h,
        type: t.getSQLType(),
        typeSchema: c,
        primaryKey: S,
        notNull: f,
        generated: y ? {
          as: x(y.as, se) ? L.sqlToQuery(y.as).sql : typeof y.as == "function" ? L.sqlToQuery(y.as()).sql : y.as,
          type: "stored"
        } : void 0,
        identity: p ? {
          type: p.type,
          name: p.sequenceName ?? `${m}_${h}_seq`,
          schema: A ?? "public",
          increment: _,
          startWith: T,
          minValue: $,
          maxValue: H,
          cache: w,
          cycle: ((Ce = p == null ? void 0 : p.sequenceOptions) == null ? void 0 : Ce.cycle) ?? !1
        } : void 0
      };
      if (t.isUnique) {
        const Re = o[t.uniqueName];
        if (typeof Re < "u")
          throw console.error(
            `
${te.errorWarning(`We've found duplicated unique constraint names in ${m} table.
          The unique constraint ${t.uniqueName} on the ${h} column is conflicting with a unique constraint name already defined for ${Re.columns.join(
              ","
            )} columns
`)}`
          ), new Error();
        o[t.uniqueName] = {
          name: t.uniqueName,
          nullsNotDistinct: t.uniqueType === "not distinct",
          columns: [P.name]
        };
      }
      t.default !== void 0 && (x(t.default, se) ? P.default = Ve(t.default, O) : typeof t.default == "string" ? P.default = `'${gn(t.default)}'` : s === "jsonb" || s === "json" ? P.default = `'${JSON.stringify(t.default)}'::${s}` : t.default instanceof Date ? s === "date" ? P.default = `'${t.default.toISOString().split("T")[0]}'` : s === "timestamp" ? P.default = `'${t.default.toISOString().replace("T", " ").slice(0, 23)}'` : P.default = `'${t.default.toISOString()}'` : Je(s) && Array.isArray(t.default) ? P.default = `'${je(t.default, s)}'` : P.default = t.default), I[h] = P;
    }), V.map((t) => {
      const h = t.columns.map((s) => s.name), f = t.columns.map((s) => fe(s, O));
      let S = t.getName();
      if (O !== void 0)
        for (let s = 0; s < h.length; s++)
          S = S.replace(h[s], f[s]);
      g[S] = {
        name: S,
        columns: f
      };
    }), C == null || C.map((t) => {
      const h = t.columns.map((s) => fe(s, O)), f = t.name ?? An(e, h), S = o[f];
      if (typeof S < "u")
        throw console.log(
          `
${te.errorWarning(
            `We've found duplicated unique constraint names in ${m} table.
        The unique constraint ${f} on the ${h.join(
              ","
            )} columns is confilcting with a unique constraint name already defined for ${S.columns.join(
              ","
            )} columns
`
          )}`
        ), new Error();
      o[f] = {
        name: t.name,
        nullsNotDistinct: t.nullsNotDistinct,
        columns: h
      };
    }), q.map((t) => {
      const h = m, f = t.onDelete, S = t.onUpdate, s = t.reference(), c = Ue(s.foreignTable), y = ke(s.foreignTable).schema, p = s.columns.map((w) => w.name), _ = s.columns.map((w) => fe(w, O)), $ = s.foreignColumns.map((w) => w.name), H = s.foreignColumns.map((w) => fe(w, O));
      let T = t.getName();
      if (O !== void 0) {
        for (let w = 0; w < p.length; w++)
          T = T.replace(p[w], _[w]);
        for (let w = 0; w < $.length; w++)
          T = T.replace($[w], H[w]);
      }
      return {
        name: T,
        tableFrom: h,
        tableTo: c,
        schemaTo: y,
        columnsFrom: _,
        columnsTo: H,
        onDelete: f,
        onUpdate: S
      };
    }).forEach((t) => {
      oe[t.name] = t;
    }), l.forEach((t) => {
      const h = t.config.columns, f = [];
      h.forEach((c) => {
        if (x(c, se) && typeof t.config.name > "u")
          throw console.log(
            `
${te.errorWarning(
              `Please specify an index name in ${Ue(t.config.table)} table that has "${L.sqlToQuery(c).sql}" expression. We can generate index names for indexes on columns only; for expressions in indexes, you need to specify the name yourself.`
            )}`
          ), new Error();
        c = c;
        const y = fe(c, O);
        if (!x(c, se) && c.type === "PgVector" && typeof c.indexConfig.opClass > "u")
          throw console.log(
            `
${te.errorWarning(
              `You are specifying an index on the ${y} column inside the ${m} table with the vector type without specifying an operator class. Vector extension doesn't have a default operator class, so you need to specify one of the available options. Here is a list of available op classes for the vector extension: [${Pe.map((p) => `${`${p}`}`).join(
                ", "
              )}].

You can specify it using current syntax: ${`index("${t.config.name}").using("${t.config.method}", table.${y}.op("${Pe[0]}"))`}

You can check the "pg_vector" docs for more info: https://github.com/pgvector/pgvector?tab=readme-ov-file#indexing
`
            )}`
          ), new Error();
        f.push(y);
      });
      const S = t.config.name ? t.config.name : qn(m, f), s = h.map((c) => {
        var y, p, _, $, H;
        return x(c, se) ? {
          expression: L.sqlToQuery(c, "indexes").sql,
          asc: !0,
          isExpression: !0,
          nulls: "last"
        } : (c = c, {
          expression: fe(c, O),
          isExpression: !1,
          asc: ((y = c.indexConfig) == null ? void 0 : y.order) === "asc",
          nulls: (p = c.indexConfig) != null && p.nulls ? (_ = c.indexConfig) == null ? void 0 : _.nulls : (($ = c.indexConfig) == null ? void 0 : $.order) === "desc" ? "first" : "last",
          opclass: (H = c.indexConfig) == null ? void 0 : H.opClass
        });
      });
      if (typeof me[A ?? "public"] < "u") {
        if (me[A ?? "public"].includes(S))
          throw console.log(
            `
${te.errorWarning(
              `We've found duplicated index name across ${A ?? "public"} schema. Please rename your index in either the ${m} table or the table with the duplicated index name`
            )}`
          ), new Error();
        me[A ?? "public"].push(S);
      } else
        me[A ?? "public"] = [S];
      j[S] = {
        name: S,
        columns: s,
        isUnique: t.config.unique ?? !1,
        where: t.config.where ? L.sqlToQuery(t.config.where).sql : void 0,
        concurrently: t.config.concurrently ?? !1,
        method: t.config.method ?? "btree",
        with: t.config.with ?? {}
      };
    }), X.forEach((t) => {
      var f, S;
      const h = [];
      if (t.to ? t.to && typeof t.to == "string" ? h.push(t.to) : t.to && x(t.to, Le) ? h.push(t.to.name) : t.to && Array.isArray(t.to) && t.to.forEach((s) => {
        typeof s == "string" ? h.push(s) : x(s, Le) && h.push(s.name);
      }) : h.push("public"), D[t.name] !== void 0)
        throw console.log(
          `
${te.errorWarning(
            `We've found duplicated policy name across ${F} table. Please rename one of the policies with ${t.name} name`
          )}`
        ), new Error();
      D[t.name] = {
        name: t.name,
        as: ((f = t.as) == null ? void 0 : f.toUpperCase()) ?? "PERMISSIVE",
        for: ((S = t.for) == null ? void 0 : S.toUpperCase()) ?? "ALL",
        to: h.sort(),
        using: x(t.using, se) ? L.sqlToQuery(t.using).sql : void 0,
        withCheck: x(t.withCheck, se) ? L.sqlToQuery(t.withCheck).sql : void 0
      };
    }), W.forEach((t) => {
      const h = t.name;
      if (typeof d[`"${A ?? "public"}"."${m}"`] < "u") {
        if (d[`"${A ?? "public"}"."${m}"`].includes(t.name))
          throw console.log(
            `
${te.errorWarning(
              `We've found duplicated check constraint name across ${A ?? "public"} schema in ${m}. Please rename your check constraint in either the ${m} table or the table with the duplicated check contraint name`
            )}`
          ), new Error();
        d[`"${A ?? "public"}"."${m}"`].push(h);
      } else
        d[`"${A ?? "public"}"."${m}"`] = [t.name];
      ie[h] = {
        name: h,
        value: L.sqlToQuery(t.value).sql
      };
    });
    const F = `${A ?? "public"}.${m}`;
    G[F] = {
      name: m,
      schema: A ?? "",
      columns: I,
      indexes: j,
      foreignKeys: oe,
      compositePrimaryKeys: g,
      uniqueConstraints: o,
      policies: D,
      checkConstraints: ie,
      isRLSEnabled: U
    };
  }
  for (const e of b) {
    if (!e._linkedTable) {
      console.log(
        `
${te.errorWarning(
          `"Policy ${e.name} was skipped because it was not linked to any table. You should either include the policy in a table or use .link() on the policy to link it to any table you have. For more information, please check:`
        )}`
      );
      continue;
    }
    const d = ke(e._linkedTable), m = `${d.schema ?? "public"}.${d.name}`, a = [];
    if (e.to ? e.to && typeof e.to == "string" ? a.push(e.to) : e.to && x(e.to, Le) ? a.push(e.to.name) : e.to && Array.isArray(e.to) && e.to.forEach((q) => {
      typeof q == "string" ? a.push(q) : x(q, Le) && a.push(q.name);
    }) : a.push("public"), ((k = G[m]) == null ? void 0 : k.policies[e.name]) !== void 0 || de[e.name] !== void 0)
      throw console.log(
        `
${te.errorWarning(
          `We've found duplicated policy name across ${m} table. Please rename one of the policies with ${e.name} name`
        )}`
      ), new Error();
    const l = {
      name: e.name,
      as: ((Ne = e.as) == null ? void 0 : Ne.toUpperCase()) ?? "PERMISSIVE",
      for: ((Ae = e.for) == null ? void 0 : Ae.toUpperCase()) ?? "ALL",
      to: a.sort(),
      using: x(e.using, se) ? L.sqlToQuery(e.using).sql : void 0,
      withCheck: x(e.withCheck, se) ? L.sqlToQuery(e.withCheck).sql : void 0
    };
    G[m] ? G[m].policies[e.name] = l : de[e.name] = {
      ...l,
      schema: d.schema ?? "public",
      on: `"${d.schema ?? "public"}"."${d.name}"`
    };
  }
  for (const e of u) {
    const d = e.seqName;
    if (typeof he[`${e.schema ?? "public"}.${d}`] > "u") {
      const m = M((Ee = e == null ? void 0 : e.seqOptions) == null ? void 0 : Ee.increment) ?? "1", a = M((Te = e == null ? void 0 : e.seqOptions) == null ? void 0 : Te.minValue) ?? (parseFloat(m) < 0 ? "-9223372036854775808" : "1"), l = M((Y = e == null ? void 0 : e.seqOptions) == null ? void 0 : Y.maxValue) ?? (parseFloat(m) < 0 ? "-1" : "9223372036854775807"), q = M((we = e == null ? void 0 : e.seqOptions) == null ? void 0 : we.startWith) ?? (parseFloat(m) < 0 ? l : a), W = M((ye = e == null ? void 0 : e.seqOptions) == null ? void 0 : ye.cache) ?? "1";
      he[`${e.schema ?? "public"}.${d}`] = {
        name: d,
        schema: e.schema ?? "public",
        increment: m,
        startWith: q,
        minValue: a,
        maxValue: l,
        cache: W,
        cycle: ((Q = e.seqOptions) == null ? void 0 : Q.cycle) ?? !1
      };
    }
  }
  for (const e of N)
    e._existing || (R[e.name] = {
      name: e.name,
      createDb: e.createDb === void 0 ? !1 : e.createDb,
      createRole: e.createRole === void 0 ? !1 : e.createRole,
      inherit: e.inherit === void 0 ? !0 : e.inherit
    });
  const _e = [...ae, ...le];
  for (const e of _e) {
    let d, m, a, l, q, W, A, V, C, X = !1;
    x(e, Tn) ? { name: d, schema: m, query: a, selectedFields: l, isExisting: q, with: W } = On(e) : ({
      name: d,
      schema: m,
      query: a,
      selectedFields: l,
      isExisting: q,
      with: W,
      tablespace: A,
      using: V,
      withNoData: C
    } = xn(e), X = !0);
    const U = m ?? "public", I = `${U}.${d}`, j = {}, ie = {};
    if (typeof ee[I] < "u")
      throw console.log(
        `
${te.errorWarning(
          `We've found duplicated view name across ${m ?? "public"} schema. Please rename your view`
        )}`
      ), new Error();
    for (const g in l)
      if (x(l[g], wn)) {
        const o = l[g], D = o.notNull, K = o.primary, F = o.getSQLType().toLowerCase(), t = x(o, Ke) ? o.enum.schema || "public" : void 0, h = o.generated, f = o.generatedIdentity, S = M((Oe = f == null ? void 0 : f.sequenceOptions) == null ? void 0 : Oe.increment) ?? "1", s = M((Se = f == null ? void 0 : f.sequenceOptions) == null ? void 0 : Se.minValue) ?? (parseFloat(S) < 0 ? Ye(o.columnType) : "1"), c = M((pe = f == null ? void 0 : f.sequenceOptions) == null ? void 0 : pe.maxValue) ?? (parseFloat(S) < 0 ? "-1" : Me(o.getSQLType())), y = M((xe = f == null ? void 0 : f.sequenceOptions) == null ? void 0 : xe.startWith) ?? (parseFloat(S) < 0 ? c : s), p = M((De = f == null ? void 0 : f.sequenceOptions) == null ? void 0 : De.cache) ?? "1", _ = {
          name: o.name,
          type: o.getSQLType(),
          typeSchema: t,
          primaryKey: K,
          notNull: D,
          generated: h ? {
            as: x(h.as, se) ? L.sqlToQuery(h.as).sql : typeof h.as == "function" ? L.sqlToQuery(h.as()).sql : h.as,
            type: "stored"
          } : void 0,
          identity: f ? {
            type: f.type,
            name: f.sequenceName ?? `${d}_${o.name}_seq`,
            schema: m ?? "public",
            increment: S,
            startWith: y,
            minValue: s,
            maxValue: c,
            cache: p,
            cycle: ((qe = f == null ? void 0 : f.sequenceOptions) == null ? void 0 : qe.cycle) ?? !1
          } : void 0
        };
        if (o.isUnique) {
          const $ = ie[o.uniqueName];
          if (typeof $ < "u")
            throw console.log(
              `
${te.errorWarning(
                `We've found duplicated unique constraint names in ${d} table.
            The unique constraint ${o.uniqueName} on the ${o.name} column is confilcting with a unique constraint name already defined for ${$.columns.join(
                  ","
                )} columns
`
              )}`
            ), new Error();
          ie[o.uniqueName] = {
            name: o.uniqueName,
            nullsNotDistinct: o.uniqueType === "not distinct",
            columns: [_.name]
          };
        }
        o.default !== void 0 && (x(o.default, se) ? _.default = Ve(o.default, O) : typeof o.default == "string" ? _.default = `'${o.default}'` : F === "jsonb" || F === "json" ? _.default = `'${JSON.stringify(o.default)}'::${F}` : o.default instanceof Date ? F === "date" ? _.default = `'${o.default.toISOString().split("T")[0]}'` : F === "timestamp" ? _.default = `'${o.default.toISOString().replace("T", " ").slice(0, 23)}'` : _.default = `'${o.default.toISOString()}'` : Je(F) && Array.isArray(o.default) ? _.default = `'${je(o.default, F)}'` : _.default = o.default), j[o.name] = _;
      }
    ee[I] = {
      columns: j,
      definition: q ? void 0 : L.sqlToQuery(a).sql,
      name: d,
      schema: U,
      isExisting: q,
      with: W,
      withNoData: C,
      materialized: X,
      tablespace: A,
      using: V
    };
  }
  const be = i.reduce((e, d) => {
    const m = d.schema || "public", a = `${m}.${d.enumName}`;
    return e[a] = {
      name: d.enumName,
      schema: m,
      values: d.enumValues
    }, e;
  }, {}), $e = Object.fromEntries(
    r.filter((e) => E ? E.includes(e.schemaName) && e.schemaName !== "public" : e.schemaName !== "public").map((e) => [e.schemaName, e.schemaName])
  );
  return {
    version: "7",
    dialect: "postgresql",
    tables: G,
    enums: be,
    schemas: $e,
    sequences: he,
    roles: R,
    policies: de,
    views: ee,
    _meta: {
      schemas: {},
      tables: {},
      columns: {}
    }
  };
}, Qe = (n, i) => {
  let r = 0, u = n.length;
  for (; r < u && n[r] === i; ) ++r;
  for (; u > r && n[u - 1] === i; ) --u;
  return r > 0 || u < n.length ? n.substring(r, u) : n.toString();
};
function vn(n) {
  let i = !1;
  const r = [], u = [];
  return n && n.roles && (typeof n.roles == "object" ? (n.roles.provider && (n.roles.provider === "supabase" ? u.push(
    "anon",
    "authenticator",
    "authenticated",
    "service_role",
    "supabase_auth_admin",
    "supabase_storage_admin",
    "dashboard_user",
    "supabase_admin"
  ) : n.roles.provider === "neon" && u.push("authenticated", "anonymous")), n.roles.include && r.push(...n.roles.include), n.roles.exclude && u.push(...n.roles.exclude)) : i = n.roles), { useRoles: i, includeRoles: r, excludeRoles: u };
}
const Hn = async (n, i = () => !0, r, u, N, b) => {
  const ae = {}, le = {}, O = {}, E = { tables: {} }, L = r.map((e) => `n.nspname = '${e}'`).join(" or "), G = await n.query(
    `SELECT
    n.nspname AS table_schema,
    c.relname AS table_name,
    CASE
        WHEN c.relkind = 'r' THEN 'table'
        WHEN c.relkind = 'v' THEN 'view'
        WHEN c.relkind = 'm' THEN 'materialized_view'
    END AS type,
	c.relrowsecurity AS rls_enabled
FROM
    pg_catalog.pg_class c
JOIN
    pg_catalog.pg_namespace n ON n.oid = c.relnamespace
WHERE
	c.relkind IN ('r', 'v', 'm')
    ${L === "" ? "" : ` AND ${L}`};`
  ), ee = new Set(G.map((e) => e.table_schema));
  ee.delete("public"), (await n.query(`select s.nspname as table_schema
  from pg_catalog.pg_namespace s
  join pg_catalog.pg_user u on u.usesysid = s.nspowner
  where nspname not in ('information_schema', 'pg_catalog', 'public')
        and nspname not like 'pg_toast%'
        and nspname not like 'pg_temp_%'
  order by table_schema;`)).forEach((e) => {
    r.includes(e.table_schema) && ee.add(e.table_schema);
  });
  let R = 0, de = 0, me = 0, _e = 0, be = 0, $e = 0;
  const k = {}, Ne = r.map((e) => `schemaname = '${e}'`).join(" or "), Ae = await n.query(
    `select schemaname, sequencename, start_value, min_value, max_value, increment_by, cycle, cache_size from pg_sequences as seq${Ne === "" ? "" : ` WHERE ${Ne}`};`
  );
  for (const e of Ae) {
    const d = e.schemaname, m = e.sequencename, a = B(e.start_value), l = B(e.min_value), q = B(e.max_value), W = B(e.increment_by), A = e.cycle, V = B(e.cache_size), C = `${d}.${m}`;
    k[C] = {
      name: m,
      schema: d,
      startWith: a,
      minValue: l,
      maxValue: q,
      increment: W,
      cycle: A,
      cache: V
    };
  }
  const Ee = r.map((e) => `n.nspname = '${e}'`).join(" or "), Te = await n.query(
    `select n.nspname as enum_schema,
  t.typname as enum_name,
  e.enumlabel as enum_value,
  e.enumsortorder as sort_order
  from pg_type t
  join pg_enum e on t.oid = e.enumtypid
  join pg_catalog.pg_namespace n ON n.oid = t.typnamespace
  ${Ee === "" ? "" : ` WHERE ${Ee}`}
  order by enum_schema, enum_name, sort_order;`
  ), Y = {};
  for (const e of Te) {
    const d = e.enum_name, m = e.enum_value, a = e.enum_schema || "public", l = `${a}.${d}`;
    Y[l] !== void 0 && Y[l] !== null ? Y[l].values.push(m) : Y[l] = {
      name: d,
      values: [m],
      schema: a
    };
  }
  N && N("enums", Object.keys(Y).length, "done");
  const we = await n.query("SELECT rolname, rolinherit, rolcreatedb, rolcreaterole FROM pg_roles;"), ye = {}, Q = vn(u);
  if (Q.useRoles || !(Q.includeRoles.length === 0 && Q.excludeRoles.length === 0))
    for (const e of we)
      if (Q.useRoles)
        ye[e.rolname] = {
          createDb: e.rolcreatedb,
          createRole: e.rolcreatedb,
          inherit: e.rolinherit,
          name: e.rolname
        };
      else {
        if (Q.includeRoles.length === 0 && Q.excludeRoles.length === 0 || Q.includeRoles.includes(e.rolname) && Q.excludeRoles.includes(e.rolname) || Q.excludeRoles.includes(e.rolname) || !Q.includeRoles.includes(e.rolname)) continue;
        ye[e.rolname] = {
          createDb: e.rolcreatedb,
          createRole: e.rolcreaterole,
          inherit: e.rolinherit,
          name: e.rolname
        };
      }
  const Oe = Object.values((b == null ? void 0 : b.policies) ?? {}).map((e) => e.schema), Se = [...r, ...Oe].map((e) => `schemaname = '${e}'`).join(" or "), pe = {}, xe = await n.query(
    `SELECT schemaname, tablename, policyname as name, permissive as "as", roles as to, cmd as for, qual as using, with_check as "withCheck" FROM pg_policies${Se === "" ? "" : ` WHERE ${Se}`};`
  );
  for (const e of xe) {
    const { tablename: d, schemaname: m, to: a, withCheck: l, using: q, ...W } = e, A = pe[`${m}.${d}`], V = typeof a == "string" ? a.slice(1, -1).split(",") : a, C = l === null ? void 0 : l, X = q === null ? void 0 : q;
    A ? A[e.name] = { ...W, to: V } : pe[`${m}.${d}`] = {
      [e.name]: {
        ...W,
        to: V,
        withCheck: C,
        using: X
      }
    }, b != null && b.policies[e.name] && (O[e.name] = {
      ...W,
      to: V,
      withCheck: C,
      using: X,
      on: b == null ? void 0 : b.policies[e.name].on
    });
  }
  N && N(
    "policies",
    Object.values(pe).reduce((e, d) => e + Object.keys(d).length, 0),
    "done"
  ), G.filter((e) => e.type === "table").map((e) => new Promise(async (d, m) => {
    var q, W, A, V, C, X;
    const a = e.table_name;
    if (!i(a)) return d("");
    _e += 1;
    const l = e.table_schema;
    try {
      const U = {}, I = {}, j = {}, ie = {}, oe = {}, g = {}, o = await Be({
        schema: l,
        table: a,
        db: n
      }), D = await n.query(
        `SELECT c.column_name, c.data_type, constraint_type, constraint_name, constraint_schema
      FROM information_schema.table_constraints tc
      JOIN information_schema.constraint_column_usage AS ccu USING (constraint_schema, constraint_name)
      JOIN information_schema.columns AS c ON c.table_schema = tc.constraint_schema
        AND tc.table_name = c.table_name AND ccu.column_name = c.column_name
      WHERE tc.table_name = '${a}' and constraint_schema = '${l}';`
      ), K = await n.query(`SELECT
						tc.constraint_name,
						tc.constraint_type,
						pg_get_constraintdef(con.oid) AS constraint_definition
					FROM
						information_schema.table_constraints AS tc
						JOIN pg_constraint AS con
							ON tc.constraint_name = con.conname
							AND con.conrelid = (
								SELECT oid
								FROM pg_class
								WHERE relname = tc.table_name
								AND relnamespace = (
									SELECT oid
									FROM pg_namespace
									WHERE nspname = tc.constraint_schema
								)
							)
					WHERE
						tc.table_name = '${a}'
						AND tc.constraint_schema = '${l}'
						AND tc.constraint_type = 'CHECK';`);
      R += o.length, N && N("columns", R, "fetching");
      const F = await n.query(
        `SELECT
            con.contype AS constraint_type,
            nsp.nspname AS constraint_schema,
            con.conname AS constraint_name,
            rel.relname AS table_name,
            att.attname AS column_name,
            fnsp.nspname AS foreign_table_schema,
            frel.relname AS foreign_table_name,
            fatt.attname AS foreign_column_name,
            CASE con.confupdtype
              WHEN 'a' THEN 'NO ACTION'
              WHEN 'r' THEN 'RESTRICT'
              WHEN 'n' THEN 'SET NULL'
              WHEN 'c' THEN 'CASCADE'
              WHEN 'd' THEN 'SET DEFAULT'
            END AS update_rule,
            CASE con.confdeltype
              WHEN 'a' THEN 'NO ACTION'
              WHEN 'r' THEN 'RESTRICT'
              WHEN 'n' THEN 'SET NULL'
              WHEN 'c' THEN 'CASCADE'
              WHEN 'd' THEN 'SET DEFAULT'
            END AS delete_rule
          FROM
            pg_catalog.pg_constraint con
            JOIN pg_catalog.pg_class rel ON rel.oid = con.conrelid
            JOIN pg_catalog.pg_namespace nsp ON nsp.oid = con.connamespace
            LEFT JOIN pg_catalog.pg_attribute att ON att.attnum = ANY (con.conkey)
              AND att.attrelid = con.conrelid
            LEFT JOIN pg_catalog.pg_class frel ON frel.oid = con.confrelid
            LEFT JOIN pg_catalog.pg_namespace fnsp ON fnsp.oid = frel.relnamespace
            LEFT JOIN pg_catalog.pg_attribute fatt ON fatt.attnum = ANY (con.confkey)
              AND fatt.attrelid = con.confrelid
          WHERE
            nsp.nspname = '${l}'
            AND rel.relname = '${a}'
            AND con.contype IN ('f');`
      );
      me += F.length, N && N("fks", me, "fetching");
      for (const s of F) {
        const c = s.column_name, y = s.foreign_table_name, p = s.foreign_column_name, _ = s.foreign_table_schema, $ = s.constraint_name, H = (q = s.update_rule) == null ? void 0 : q.toLowerCase(), T = (W = s.delete_rule) == null ? void 0 : W.toLowerCase();
        typeof j[$] < "u" ? (j[$].columnsFrom.push(c), j[$].columnsTo.push(p)) : j[$] = {
          name: $,
          tableFrom: a,
          tableTo: y,
          schemaTo: _,
          columnsFrom: [c],
          columnsTo: [p],
          onDelete: T,
          onUpdate: H
        }, j[$].columnsFrom = [
          ...new Set(j[$].columnsFrom)
        ], j[$].columnsTo = [...new Set(j[$].columnsTo)];
      }
      const t = D.filter((s) => s.constraint_type === "UNIQUE");
      for (const s of t) {
        const c = s.column_name, y = s.constraint_name;
        typeof oe[y] < "u" ? oe[y].columns.push(c) : oe[y] = {
          columns: [c],
          nullsNotDistinct: !1,
          name: y
        };
      }
      be += K.length, N && N("checks", be, "fetching");
      for (const s of K) {
        let c = s.constraint_definition;
        const y = s.constraint_name;
        c = c.replace(/^CHECK\s*\(\(/, "").replace(/\)\)\s*$/, ""), g[y] = {
          name: y,
          value: c
        };
      }
      for (const s of o) {
        const c = s.column_name, y = s.additional_dt, p = s.array_dimensions, _ = s.enum_name, $ = s.data_type, H = s.type_schema, T = s.column_default, w = s.is_generated === "ALWAYS", P = s.generation_expression, v = s.is_identity === "YES", ne = s.identity_generation === "ALWAYS" ? "always" : "byDefault", ue = s.identity_start, ce = s.identity_increment, ve = s.identity_maximum, Ce = s.identity_minimum, Re = s.identity_cycle === "YES", Z = s.seq_name, un = D.filter(
          (re) => c === re.column_name && re.constraint_type === "PRIMARY KEY"
        ), Fe = D.filter((re) => re.constraint_type === "PRIMARY KEY");
        if (Fe.length > 1) {
          const re = await n.query(
            `SELECT conname AS primary_key
            FROM   pg_constraint join pg_class on (pg_class.oid = conrelid)
            WHERE  contype = 'p'
            AND    connamespace = $1::regnamespace
            AND    pg_class.relname = $2;`,
            [l, a]
          );
          ie[re[0].primary_key] = {
            name: re[0].primary_key,
            columns: Fe.map((pn) => pn.column_name)
          };
        }
        let z = $;
        y === "ARRAY" && (typeof E.tables[a] > "u" ? E.tables[a] = {
          columns: {
            [c]: {
              isArray: !0,
              dimensions: p,
              rawType: z.substring(0, z.length - 2)
            }
          }
        } : typeof E.tables[a].columns[c] > "u" && (E.tables[a].columns[c] = {
          isArray: !0,
          dimensions: p,
          rawType: z.substring(0, z.length - 2)
        }));
        const He = ze(s, E, a);
        (He === "NULL" || T && T.startsWith("(") && T.endsWith(")")) && (typeof E.tables[a] > "u" ? E.tables[a] = {
          columns: {
            [c]: {
              isDefaultAnExpression: !0
            }
          }
        } : typeof E.tables[a].columns[c] > "u" ? E.tables[a].columns[c] = {
          isDefaultAnExpression: !0
        } : E.tables[a].columns[c].isDefaultAnExpression = !0);
        const dn = $ === "serial";
        if (z.startsWith("numeric(") && (z = z.replace(",", ", ")), y === "ARRAY")
          for (let re = 1; re < Number(p); re++)
            z += "[]";
        z = z.replace("character varying", "varchar").replace(" without time zone", "").replace("character", "char"), z = Qe(z, '"'), U[c] = {
          name: c,
          type: (
            // filter vectors, but in future we should filter any extension that was installed by user
            y === "USER-DEFINED" && !["vector", "geometry"].includes(_) ? _ : z
          ),
          typeSchema: Y[`${H}.${_}`] !== void 0 ? Y[`${H}.${_}`].schema : void 0,
          primaryKey: un.length === 1 && Fe.length < 2,
          // default: isSerial ? undefined : defaultValue,
          notNull: s.is_nullable === "NO",
          generated: w ? { as: P, type: "stored" } : void 0,
          identity: v ? {
            type: ne,
            name: Z,
            increment: B(ce),
            minValue: B(Ce),
            maxValue: B(ve),
            startWith: B(ue),
            cache: (A = k[Z]) != null && A.cache ? (V = k[Z]) == null ? void 0 : V.cache : (C = k[`${l}.${Z}`]) != null && C.cache ? (X = k[`${l}.${Z}`]) == null ? void 0 : X.cache : void 0,
            cycle: Re,
            schema: l
          } : void 0
        }, Z && typeof Z == "string" && (delete k[`${l}.${Z.startsWith('"') && Z.endsWith('"') ? Z.slice(1, -1) : Z}`], delete k[Z]), !dn && typeof He < "u" && (U[c].default = He);
      }
      const h = await n.query(
        `SELECT  DISTINCT ON (t.relname, ic.relname, k.i) t.relname as table_name, ic.relname AS indexname,
        k.i AS index_order,
        i.indisunique as is_unique,
        am.amname as method,
        ic.reloptions as with,
        coalesce(a.attname,
                  (('{' || pg_get_expr(
                              i.indexprs,
                              i.indrelid
                          )
                        || '}')::text[]
                  )[k.i]
                ) AS column_name,
          CASE
        WHEN pg_get_expr(i.indexprs, i.indrelid) IS NOT NULL THEN 1
        ELSE 0
    END AS is_expression,
        i.indoption[k.i-1] & 1 = 1 AS descending,
        i.indoption[k.i-1] & 2 = 2 AS nulls_first,
        pg_get_expr(
                              i.indpred,
                              i.indrelid
                          ) as where,
         opc.opcname
      FROM pg_class t
          LEFT JOIN pg_index i ON t.oid = i.indrelid
          LEFT JOIN pg_class ic ON ic.oid = i.indexrelid
		  CROSS JOIN LATERAL (SELECT unnest(i.indkey), generate_subscripts(i.indkey, 1) + 1) AS k(attnum, i)
          LEFT JOIN pg_attribute AS a
            ON i.indrelid = a.attrelid AND k.attnum = a.attnum
          JOIN pg_namespace c on c.oid = t.relnamespace
        LEFT JOIN pg_am AS am ON ic.relam = am.oid
        JOIN pg_opclass opc ON opc.oid = ANY(i.indclass)
      WHERE
      c.nspname = '${l}' AND
      t.relname = '${a}';`
      ), S = (await n.query(
        `SELECT
          idx.indexrelname AS index_name,
          idx.relname AS table_name,
          schemaname,
          CASE WHEN con.conname IS NOT NULL THEN 1 ELSE 0 END AS generated_by_constraint
        FROM
          pg_stat_user_indexes idx
        LEFT JOIN
          pg_constraint con ON con.conindid = idx.indexrelid
        WHERE idx.relname = '${a}' and schemaname = '${l}'
        group by index_name, table_name,schemaname, generated_by_constraint;`
      )).filter((s) => s.generated_by_constraint === 1).map((s) => s.index_name);
      for (const s of h) {
        const c = s.indexname, y = s.column_name, p = s.is_unique, _ = s.method, $ = s.with, H = s.where, T = s.opcname, w = s.is_expression === 1, P = s.descending, v = s.nulls_first, ne = {};
        $ !== null && $.forEach((ue) => {
          const ce = ue.split("=");
          ne[ce[0]] = ce[1];
        }), !S.includes(c) && (typeof I[c] < "u" ? I[c].columns.push({
          expression: y,
          asc: !P,
          nulls: v ? "first" : "last",
          opclass: T,
          isExpression: w
        }) : I[c] = {
          name: c,
          columns: [
            {
              expression: y,
              asc: !P,
              nulls: v ? "first" : "last",
              opclass: T,
              isExpression: w
            }
          ],
          isUnique: p,
          // should not be a part of diff detects
          concurrently: !1,
          method: _,
          where: H === null ? void 0 : H,
          with: ne
        });
      }
      de += Object.keys(I).length, N && N("indexes", de, "fetching"), ae[`${l}.${a}`] = {
        name: a,
        schema: l !== "public" ? l : "",
        columns: U,
        indexes: I,
        foreignKeys: j,
        compositePrimaryKeys: ie,
        uniqueConstraints: oe,
        checkConstraints: g,
        policies: pe[`${l}.${a}`] ?? {},
        isRLSEnabled: e.rls_enabled
      };
    } catch (U) {
      m(U);
      return;
    }
    d("");
  })), N && N("tables", _e, "done"), $e = G.filter((e) => e.type === "view" || e.type === "materialized_view").map((e) => new Promise(async (d, m) => {
    var q, W, A, V;
    const a = e.table_name;
    if (!i(a)) return d("");
    _e += 1;
    const l = e.table_schema;
    try {
      const C = {}, X = await Be({
        schema: l,
        table: a,
        db: n
      });
      for (const g of X) {
        const o = g.column_name, D = g.additional_dt, K = g.array_dimensions, F = g.enum_name, t = g.data_type, h = g.type_schema, f = g.is_generated === "ALWAYS", S = g.generation_expression, s = g.is_identity === "YES", c = g.identity_generation === "ALWAYS" ? "always" : "byDefault", y = g.identity_start, p = g.identity_increment, _ = g.identity_maximum, $ = g.identity_minimum, H = g.identity_cycle === "YES", T = g.seq_name, w = g.column_default, P = g.constraint_type === "PRIMARY KEY";
        let v = t;
        D === "ARRAY" && (typeof E.tables[a] > "u" ? E.tables[a] = {
          columns: {
            [o]: {
              isArray: !0,
              dimensions: K,
              rawType: v.substring(0, v.length - 2)
            }
          }
        } : typeof E.tables[a].columns[o] > "u" && (E.tables[a].columns[o] = {
          isArray: !0,
          dimensions: K,
          rawType: v.substring(0, v.length - 2)
        }));
        const ne = ze(g, E, a);
        (ne === "NULL" || w && w.startsWith("(") && w.endsWith(")")) && (typeof E.tables[a] > "u" ? E.tables[a] = {
          columns: {
            [o]: {
              isDefaultAnExpression: !0
            }
          }
        } : typeof E.tables[a].columns[o] > "u" ? E.tables[a].columns[o] = {
          isDefaultAnExpression: !0
        } : E.tables[a].columns[o].isDefaultAnExpression = !0);
        const ue = t === "serial";
        if (v.startsWith("numeric(") && (v = v.replace(",", ", ")), D === "ARRAY")
          for (let ce = 1; ce < Number(K); ce++)
            v += "[]";
        v = v.replace("character varying", "varchar").replace(" without time zone", "").replace("character", "char"), v = Qe(v, '"'), C[o] = {
          name: o,
          type: (
            // filter vectors, but in future we should filter any extension that was installed by user
            D === "USER-DEFINED" && !["vector", "geometry"].includes(F) ? F : v
          ),
          typeSchema: Y[`${h}.${F}`] !== void 0 ? Y[`${h}.${F}`].schema : void 0,
          primaryKey: P,
          notNull: g.is_nullable === "NO",
          generated: f ? { as: S, type: "stored" } : void 0,
          identity: s ? {
            type: c,
            name: T,
            increment: B(p),
            minValue: B($),
            maxValue: B(_),
            startWith: B(y),
            cache: (q = k[T]) != null && q.cache ? (W = k[T]) == null ? void 0 : W.cache : (A = k[`${l}.${T}`]) != null && A.cache ? (V = k[`${l}.${T}`]) == null ? void 0 : V.cache : void 0,
            cycle: H,
            schema: l
          } : void 0
        }, T && (delete k[`${l}.${T.startsWith('"') && T.endsWith('"') ? T.slice(1, -1) : T}`], delete k[T]), !ue && typeof ne < "u" && (C[o].default = ne);
      }
      const [U] = await n.query(`
					SELECT
    c.relname AS view_name,
    n.nspname AS schema_name,
    pg_get_viewdef(c.oid, true) AS definition,
    ts.spcname AS tablespace_name,
    c.reloptions AS options,
    pg_tablespace_location(ts.oid) AS location
FROM
    pg_class c
JOIN
    pg_namespace n ON c.relnamespace = n.oid
LEFT JOIN
    pg_tablespace ts ON c.reltablespace = ts.oid
WHERE
    (c.relkind = 'm' OR c.relkind = 'v')
    AND n.nspname = '${l}'
    AND c.relname = '${a}';`), I = {};
      U.options && U.options.forEach((g) => {
        const o = g.split("="), D = o[0], K = o[1];
        K === "true" ? I[D] = !0 : K === "false" ? I[D] = !1 : isNaN(Number(K)) ? I[D] = K : I[D] = Number(K);
      });
      const j = U.definition.replace(/\s+/g, " ").replace(";", "").trim(), ie = Object.values(I).length ? Object.fromEntries(Object.entries(I).map(([g, o]) => [yn(g), o])) : void 0, oe = e.type === "materialized_view";
      le[`${l}.${a}`] = {
        name: a,
        schema: l,
        columns: C,
        isExisting: !1,
        definition: j,
        materialized: oe,
        with: ie,
        tablespace: U.tablespace_name ?? void 0
      };
    } catch (C) {
      m(C);
      return;
    }
    d("");
  })).length, N && (N("columns", R, "done"), N("indexes", de, "done"), N("fks", me, "done"), N("checks", be, "done"), N("views", $e, "done"));
  const qe = Object.fromEntries([...ee].map((e) => [e, e]));
  return {
    version: "7",
    dialect: "postgresql",
    tables: ae,
    enums: Y,
    schemas: qe,
    sequences: k,
    roles: ye,
    policies: O,
    views: le,
    _meta: {
      schemas: {},
      tables: {},
      columns: {}
    },
    internal: E
  };
}, ze = (n, i, r) => {
  var ae, le;
  const u = n.column_name, N = ((le = (ae = i == null ? void 0 : i.tables[r]) == null ? void 0 : ae.columns[u]) == null ? void 0 : le.isArray) ?? !1;
  if (n.column_default === null || n.column_default === void 0 || n.data_type === "serial" || n.data_type === "smallserial" || n.data_type === "bigserial")
    return;
  n.column_default.endsWith("[]") && (n.column_default = n.column_default.slice(0, -2)), n.column_default = n.column_default.replace(new RegExp('::(.*?)(?<![^\\w"])(?=$)'), "");
  const b = n.column_default.toString();
  return N ? `'{${b.slice(2, -2).split(/\s*,\s*/g).map((O) => ["integer", "smallint", "bigint", "double precision", "real"].includes(n.data_type.slice(0, -2)) ? O : n.data_type.startsWith("timestamp") ? `${O}` : n.data_type.slice(0, -2) === "interval" ? O.replaceAll('"', '"') : n.data_type.slice(0, -2) === "boolean" ? O === "t" ? "true" : "false" : ["json", "jsonb"].includes(n.data_type.slice(0, -2)) ? JSON.stringify(JSON.stringify(JSON.parse(JSON.parse(O)), null, 0)) : `"${O}"`).join(",")}}'` : ["integer", "smallint", "bigint", "double precision", "real"].includes(n.data_type) ? /^-?[\d.]+(?:e-?\d+)?$/.test(b) ? Number(b) : (typeof i.tables[r] > "u" ? i.tables[r] = {
    columns: {
      [u]: {
        isDefaultAnExpression: !0
      }
    }
  } : typeof i.tables[r].columns[u] > "u" ? i.tables[r].columns[u] = {
    isDefaultAnExpression: !0
  } : i.tables[r].columns[u].isDefaultAnExpression = !0, b) : n.data_type.includes("numeric") ? b.includes("'") ? b : `'${b}'` : n.data_type === "json" || n.data_type === "jsonb" ? `'${JSON.stringify(JSON.parse(b.slice(1, -1)))}'::${n.data_type}` : n.data_type === "boolean" ? n.column_default === "true" : b === "NULL" ? "NULL" : b.startsWith("'") && b.endsWith("'") ? b : `${b.replace(/\\/g, "`\\")}`;
}, Be = ({ schema: n, table: i, db: r }) => r.query(
  `SELECT
    a.attrelid::regclass::text AS table_name,  -- Table, view, or materialized view name
    a.attname AS column_name,   -- Column name
    CASE
        WHEN NOT a.attisdropped THEN
            CASE
                WHEN a.attnotnull THEN 'NO'
                ELSE 'YES'
            END
        ELSE NULL
    END AS is_nullable,  -- NULL or NOT NULL constraint
    a.attndims AS array_dimensions,  -- Array dimensions
    CASE
        WHEN a.atttypid = ANY ('{int,int8,int2}'::regtype[])
        AND EXISTS (
            SELECT FROM pg_attrdef ad
            WHERE ad.adrelid = a.attrelid
            AND ad.adnum = a.attnum
            AND pg_get_expr(ad.adbin, ad.adrelid) = 'nextval('''
                || pg_get_serial_sequence(a.attrelid::regclass::text, a.attname)::regclass || '''::regclass)'
        )
        THEN CASE a.atttypid
            WHEN 'int'::regtype THEN 'serial'
            WHEN 'int8'::regtype THEN 'bigserial'
            WHEN 'int2'::regtype THEN 'smallserial'
        END
        ELSE format_type(a.atttypid, a.atttypmod)
    END AS data_type,  -- Column data type
--    ns.nspname AS type_schema,  -- Schema name
    pg_get_serial_sequence('"${n}"."${i}"', a.attname)::regclass AS seq_name,  -- Serial sequence (if any)
    c.column_default,  -- Column default value
    c.data_type AS additional_dt,  -- Data type from information_schema
    c.udt_name AS enum_name,  -- Enum type (if applicable)
    c.is_generated,  -- Is it a generated column?
    c.generation_expression,  -- Generation expression (if generated)
    c.is_identity,  -- Is it an identity column?
    c.identity_generation,  -- Identity generation strategy (ALWAYS or BY DEFAULT)
    c.identity_start,  -- Start value of identity column
    c.identity_increment,  -- Increment for identity column
    c.identity_maximum,  -- Maximum value for identity column
    c.identity_minimum,  -- Minimum value for identity column
    c.identity_cycle,  -- Does the identity column cycle?
    enum_ns.nspname AS type_schema  -- Schema of the enum type
FROM
    pg_attribute a
JOIN
    pg_class cls ON cls.oid = a.attrelid  -- Join pg_class to get table/view/materialized view info
JOIN
    pg_namespace ns ON ns.oid = cls.relnamespace  -- Join namespace to get schema info
LEFT JOIN
    information_schema.columns c ON c.column_name = a.attname
        AND c.table_schema = ns.nspname
        AND c.table_name = cls.relname  -- Match schema and table/view name
LEFT JOIN
    pg_type enum_t ON enum_t.oid = a.atttypid  -- Join to get the type info
LEFT JOIN
    pg_namespace enum_ns ON enum_ns.oid = enum_t.typnamespace  -- Join to get the enum schema
WHERE
    a.attnum > 0  -- Valid column numbers only
    AND NOT a.attisdropped  -- Skip dropped columns
    AND cls.relkind IN ('r', 'v', 'm')  -- Include regular tables ('r'), views ('v'), and materialized views ('m')
    AND ns.nspname = '${n}'  -- Filter by schema
    AND cls.relname = '${i}'  -- Filter by table name
ORDER BY
    a.attnum;  -- Order by column number`
);
export {
  je as buildArrayString,
  Hn as fromDatabase,
  Fn as generatePgSnapshot,
  qn as indexName
};
