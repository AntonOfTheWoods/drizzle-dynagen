import { snapshotVersion as _, originUUID as J, mapValues as v } from "./global.js";
import { o as a, s as e, r as n, b as o, a as h, l as c, e as w, n as l, c as D, u as B } from "../index-CITRC6gp.js";
const A = a({
  name: e(),
  columns: n(
    e(),
    a({
      name: e()
    })
  ),
  isUnique: o()
}).strict(), H = a({
  name: e(),
  type: e(),
  primaryKey: o(),
  notNull: o(),
  default: h().optional(),
  references: e().optional()
}).strict(), G = a({
  name: e(),
  columns: n(e(), H),
  indexes: n(e(), A)
}).strict(), b = a({
  name: e(),
  values: n(e(), e())
}).strict(), C = a({
  name: e(),
  schema: e(),
  values: e().array()
}).strict(), Ke = a({
  version: c("2"),
  tables: n(e(), G),
  enums: n(e(), b)
}).strict(), Q = a({
  foreignKeyName: e(),
  table: e(),
  column: e(),
  onDelete: e().optional(),
  onUpdate: e().optional()
}).strict(), X = a({
  name: e(),
  type: e(),
  primaryKey: o(),
  notNull: o(),
  default: h().optional(),
  references: Q.optional()
}).strict(), Y = a({
  name: e(),
  columns: n(e(), X),
  indexes: n(e(), A)
}).strict(), we = a({
  version: c("1"),
  tables: n(e(), Y),
  enums: n(e(), b)
}).strict(), Z = a({
  expression: e(),
  isExpression: o(),
  asc: o(),
  nulls: e().optional(),
  opclass: e().optional()
}), g = a({
  name: e(),
  columns: Z.array(),
  isUnique: o(),
  with: n(e(), h()).optional(),
  method: e().default("btree"),
  where: e().optional(),
  concurrently: o().default(!1)
}).strict(), ee = a({
  name: e(),
  columns: e().array(),
  isUnique: o(),
  with: n(e(), e()).optional(),
  method: e().default("btree"),
  where: e().optional(),
  concurrently: o().default(!1)
}).strict(), ne = a({
  name: e(),
  columns: e().array(),
  isUnique: o(),
  with: n(e(), e()).optional(),
  method: e().default("btree"),
  where: e().optional(),
  concurrently: o().default(!1)
}).strict(), se = a({
  name: e(),
  columns: e().array(),
  isUnique: o(),
  with: n(e(), e()).optional(),
  method: e().default("btree"),
  where: e().optional(),
  concurrently: o().default(!1)
}).strict(), $ = a({
  name: e(),
  tableFrom: e(),
  columnsFrom: e().array(),
  tableTo: e(),
  schemaTo: e().optional(),
  columnsTo: e().array(),
  onUpdate: e().optional(),
  onDelete: e().optional()
}).strict(), F = a({
  name: e(),
  increment: e().optional(),
  minValue: e().optional(),
  maxValue: e().optional(),
  startWith: e().optional(),
  cache: e().optional(),
  cycle: o().optional(),
  schema: e()
}).strict(), W = a({
  name: e(),
  createDb: o().optional(),
  createRole: o().optional(),
  inherit: o().optional()
}).strict(), te = a({
  name: e(),
  schema: e(),
  values: e()
}).strict(), ae = a({
  name: e(),
  type: e(),
  typeSchema: e().optional(),
  primaryKey: o(),
  notNull: o(),
  default: h().optional(),
  isUnique: h().optional(),
  uniqueName: e().optional(),
  nullsNotDistinct: o().optional()
}).strict(), S = a({
  name: e(),
  type: e(),
  typeSchema: e().optional(),
  primaryKey: o(),
  notNull: o(),
  default: h().optional(),
  isUnique: h().optional(),
  uniqueName: e().optional(),
  nullsNotDistinct: o().optional(),
  generated: a({
    type: c("stored"),
    as: e()
  }).optional(),
  identity: F.merge(a({ type: w(["always", "byDefault"]) })).optional()
}).strict(), oe = a({
  name: e(),
  value: e()
}).strict(), ie = a({
  name: e(),
  type: e(),
  typeSchema: e().optional(),
  primaryKey: o(),
  notNull: o(),
  default: h().optional(),
  isUnique: h().optional(),
  uniqueName: e().optional(),
  nullsNotDistinct: o().optional(),
  generated: a({
    type: c("stored"),
    as: e()
  }).optional(),
  identity: e().optional()
}).strict(), ce = a({
  name: e(),
  columns: n(e(), S),
  indexes: n(e(), g),
  foreignKeys: n(e(), $)
}).strict(), E = a({
  name: e(),
  columns: e().array()
}).strict(), I = a({
  name: e(),
  columns: e().array(),
  nullsNotDistinct: o()
}).strict(), j = a({
  name: e(),
  as: w(["PERMISSIVE", "RESTRICTIVE"]).optional(),
  for: w(["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]).optional(),
  to: e().array().optional(),
  using: e().optional(),
  withCheck: e().optional(),
  on: e().optional(),
  schema: e().optional()
}).strict(), ue = a({
  name: e(),
  values: e()
}).strict(), le = a({
  checkOption: w(["local", "cascaded"]).optional(),
  securityBarrier: o().optional(),
  securityInvoker: o().optional()
}).strict(), re = a({
  fillfactor: l().optional(),
  toastTupleTarget: l().optional(),
  parallelWorkers: l().optional(),
  autovacuumEnabled: o().optional(),
  vacuumIndexCleanup: w(["auto", "off", "on"]).optional(),
  vacuumTruncate: o().optional(),
  autovacuumVacuumThreshold: l().optional(),
  autovacuumVacuumScaleFactor: l().optional(),
  autovacuumVacuumCostDelay: l().optional(),
  autovacuumVacuumCostLimit: l().optional(),
  autovacuumFreezeMinAge: l().optional(),
  autovacuumFreezeMaxAge: l().optional(),
  autovacuumFreezeTableAge: l().optional(),
  autovacuumMultixactFreezeMinAge: l().optional(),
  autovacuumMultixactFreezeMaxAge: l().optional(),
  autovacuumMultixactFreezeTableAge: l().optional(),
  logAutovacuumMinDuration: l().optional(),
  userCatalogTable: o().optional()
}).strict(), me = le.merge(re).strict(), k = a({
  name: e(),
  schema: e(),
  columns: n(e(), S),
  definition: e().optional(),
  materialized: o(),
  with: me.optional(),
  isExisting: o(),
  withNoData: o().optional(),
  using: e().optional(),
  tablespace: e().optional()
}).strict(), pe = a({
  name: e(),
  schema: e(),
  columns: n(e(), S),
  indexes: n(e(), ee),
  foreignKeys: n(e(), $)
}).strict(), de = a({
  name: e(),
  schema: e(),
  columns: n(e(), S),
  indexes: n(e(), ne),
  foreignKeys: n(e(), $),
  compositePrimaryKeys: n(e(), E),
  uniqueConstraints: n(e(), I).default({})
}).strict(), he = a({
  name: e(),
  schema: e(),
  columns: n(e(), S),
  indexes: n(e(), se),
  foreignKeys: n(e(), $),
  compositePrimaryKeys: n(e(), E),
  uniqueConstraints: n(e(), I).default({})
}).strict(), fe = a({
  name: e(),
  schema: e(),
  columns: n(e(), ae),
  indexes: n(e(), g),
  foreignKeys: n(e(), $),
  compositePrimaryKeys: n(e(), E),
  uniqueConstraints: n(e(), I).default({})
}).strict(), L = a({
  name: e(),
  schema: e(),
  columns: n(e(), S),
  indexes: n(e(), g),
  foreignKeys: n(e(), $),
  compositePrimaryKeys: n(e(), E),
  uniqueConstraints: n(e(), I).default({}),
  policies: n(e(), j).default({}),
  checkConstraints: n(e(), oe).default({}),
  isRLSEnabled: o().default(!1)
}).strict(), x = a({
  id: e(),
  prevId: e()
}), U = a({
  tables: n(
    e(),
    a({
      columns: n(
        e(),
        a({
          isArray: o().optional(),
          dimensions: l().optional(),
          rawType: e().optional(),
          isDefaultAnExpression: o().optional()
        }).optional()
      )
    }).optional()
  )
}).optional(), ye = a({
  version: c("3"),
  dialect: c("pg"),
  tables: n(e(), ce),
  enums: n(e(), b)
}).strict(), qe = a({
  version: c("4"),
  dialect: c("pg"),
  tables: n(e(), pe),
  enums: n(e(), b),
  schemas: n(e(), e())
}).strict(), ge = a({
  version: c("5"),
  dialect: c("pg"),
  tables: n(e(), de),
  enums: n(e(), b),
  schemas: n(e(), e()),
  _meta: a({
    schemas: n(e(), e()),
    tables: n(e(), e()),
    columns: n(e(), e())
  }),
  internal: U
}).strict(), be = a({
  version: c("6"),
  dialect: c("postgresql"),
  tables: n(e(), he),
  enums: n(e(), C),
  schemas: n(e(), e()),
  _meta: a({
    schemas: n(e(), e()),
    tables: n(e(), e()),
    columns: n(e(), e())
  }),
  internal: U
}).strict(), Ce = a({
  version: c("5"),
  dialect: c("pg"),
  tables: D(L),
  enums: D(b),
  schemas: D(a({ name: e() })),
  _meta: a({
    schemas: n(e(), e()),
    tables: n(e(), e()),
    columns: n(e(), e())
  })
}).strict(), $e = a({
  version: c("7"),
  dialect: c("postgresql"),
  tables: n(e(), fe),
  enums: n(e(), C),
  schemas: n(e(), e()),
  sequences: n(e(), F),
  _meta: a({
    schemas: n(e(), e()),
    tables: n(e(), e()),
    columns: n(e(), e())
  }),
  internal: U
}).strict(), Se = a({
  version: c("7"),
  dialect: c("postgresql"),
  tables: n(e(), L),
  enums: n(e(), C),
  schemas: n(e(), e()),
  views: n(e(), k).default({}),
  sequences: n(e(), F).default({}),
  roles: n(e(), W).default({}),
  policies: n(e(), j).default({}),
  _meta: a({
    schemas: n(e(), e()),
    tables: n(e(), e()),
    columns: n(e(), e())
  }),
  internal: U
}).strict(), M = a({
  name: e(),
  schema: e(),
  columns: n(e(), ie),
  indexes: n(e(), e()),
  foreignKeys: n(e(), e()),
  compositePrimaryKeys: n(e(), e()),
  uniqueConstraints: n(e(), e()),
  policies: n(e(), e()),
  checkConstraints: n(e(), e()),
  isRLSEnabled: o().default(!1)
}).strict(), Ve = a({
  name: e(),
  schema: e(),
  columns: n(e(), S),
  indexes: n(e(), e()),
  foreignKeys: n(e(), e())
}).strict(), Ee = a({
  version: c("4"),
  dialect: c("pg"),
  tables: n(e(), Ve),
  enums: n(e(), b),
  schemas: n(e(), e())
}).strict(), Ie = a({
  version: c("6"),
  dialect: c("postgresql"),
  tables: n(e(), M),
  enums: n(e(), C),
  schemas: n(e(), e())
}).strict(), Ue = a({
  version: c("7"),
  dialect: c("postgresql"),
  tables: n(e(), M),
  enums: n(e(), C),
  schemas: n(e(), e()),
  views: n(e(), k),
  sequences: n(e(), te),
  roles: n(e(), W).default({}),
  policies: n(e(), ue).default({})
}).strict(), Ne = ye.merge(x), De = qe.merge(x), ve = ge.merge(x), xe = be.merge(x), Fe = $e.merge(x), R = Se.merge(x), Oe = B([ve, xe, R]), r = {
  squashIdx: (s) => (g.parse(s), `${s.name};${s.columns.map((t) => `${t.expression}--${t.isExpression}--${t.asc}--${t.nulls}--${t.opclass ? t.opclass : ""}`).join(",,")};${s.isUnique};${s.concurrently};${s.method};${s.where};${JSON.stringify(s.with)}`),
  unsquashIdx: (s) => {
    const [t, m, d, y, i, f, p] = s.split(";"), V = m.split(",,"), q = [];
    for (const T of V) {
      const [K, u, N, z, O] = T.split("--");
      q.push({
        nulls: z,
        isExpression: u === "true",
        asc: N === "true",
        expression: K,
        opclass: O === "undefined" ? void 0 : O
      });
    }
    return g.parse({
      name: t,
      columns: q,
      isUnique: d === "true",
      concurrently: y === "true",
      method: i,
      where: f === "undefined" ? void 0 : f,
      with: !p || p === "undefined" ? void 0 : JSON.parse(p)
    });
  },
  squashIdxPush: (s) => (g.parse(s), `${s.name};${s.columns.map((t) => `${t.isExpression ? "" : t.expression}--${t.asc}--${t.nulls}`).join(",,")};${s.isUnique};${s.method};${JSON.stringify(s.with)}`),
  unsquashIdxPush: (s) => {
    const [t, m, d, y, i] = s.split(";"), f = m.split("--"), p = [];
    for (const q of f) {
      const [P, T, K] = q.split(",");
      p.push({
        nulls: K,
        isExpression: P === "",
        asc: T === "true",
        expression: P
      });
    }
    return g.parse({
      name: t,
      columns: p,
      isUnique: d === "true",
      concurrently: !1,
      method: y,
      with: i === "undefined" ? void 0 : JSON.parse(i)
    });
  },
  squashFK: (s) => `${s.name};${s.tableFrom};${s.columnsFrom.join(",")};${s.tableTo};${s.columnsTo.join(",")};${s.onUpdate ?? ""};${s.onDelete ?? ""};${s.schemaTo || "public"}`,
  squashPolicy: (s) => {
    var t;
    return `${s.name}--${s.as}--${s.for}--${(t = s.to) == null ? void 0 : t.join(",")}--${s.using}--${s.withCheck}--${s.on}`;
  },
  unsquashPolicy: (s) => {
    const t = s.split("--");
    return {
      name: t[0],
      as: t[1],
      for: t[2],
      to: t[3].split(","),
      using: t[4] !== "undefined" ? t[4] : void 0,
      withCheck: t[5] !== "undefined" ? t[5] : void 0,
      on: t[6] !== "undefined" ? t[6] : void 0
    };
  },
  squashPolicyPush: (s) => {
    var t;
    return `${s.name}--${s.as}--${s.for}--${(t = s.to) == null ? void 0 : t.join(",")}--${s.on}`;
  },
  unsquashPolicyPush: (s) => {
    const t = s.split("--");
    return {
      name: t[0],
      as: t[1],
      for: t[2],
      to: t[3].split(","),
      on: t[4] !== "undefined" ? t[4] : void 0
    };
  },
  squashPK: (s) => `${s.columns.join(",")};${s.name}`,
  unsquashPK: (s) => {
    const t = s.split(";");
    return { name: t[1], columns: t[0].split(",") };
  },
  squashUnique: (s) => `${s.name};${s.columns.join(",")};${s.nullsNotDistinct}`,
  unsquashUnique: (s) => {
    const [t, m, d] = s.split(";");
    return {
      name: t,
      columns: m.split(","),
      nullsNotDistinct: d === "true"
    };
  },
  unsquashFK: (s) => {
    const [t, m, d, y, i, f, p, V] = s.split(";");
    return $.parse({
      name: t,
      tableFrom: m,
      columnsFrom: d.split(","),
      schemaTo: V,
      tableTo: y,
      columnsTo: i.split(","),
      onUpdate: f,
      onDelete: p
    });
  },
  squashSequence: (s) => `${s.minValue};${s.maxValue};${s.increment};${s.startWith};${s.cache};${s.cycle ?? ""}`,
  unsquashSequence: (s) => {
    const t = s.split(";");
    return {
      minValue: t[0] !== "undefined" ? t[0] : void 0,
      maxValue: t[1] !== "undefined" ? t[1] : void 0,
      increment: t[2] !== "undefined" ? t[2] : void 0,
      startWith: t[3] !== "undefined" ? t[3] : void 0,
      cache: t[4] !== "undefined" ? t[4] : void 0,
      cycle: t[5] === "true"
    };
  },
  squashIdentity: (s) => `${s.name};${s.type};${s.minValue};${s.maxValue};${s.increment};${s.startWith};${s.cache};${s.cycle ?? ""}`,
  unsquashIdentity: (s) => {
    const t = s.split(";");
    return {
      name: t[0],
      type: t[1],
      minValue: t[2] !== "undefined" ? t[2] : void 0,
      maxValue: t[3] !== "undefined" ? t[3] : void 0,
      increment: t[4] !== "undefined" ? t[4] : void 0,
      startWith: t[5] !== "undefined" ? t[5] : void 0,
      cache: t[6] !== "undefined" ? t[6] : void 0,
      cycle: t[7] === "true"
    };
  },
  squashCheck: (s) => `${s.name};${s.value}`,
  unsquashCheck: (s) => {
    const [t, m] = s.split(";");
    return { name: t, value: m };
  }
}, Ae = (s, t) => {
  const m = Object.fromEntries(
    Object.entries(s.tables).map((i) => {
      const f = v(i[1].indexes, (u) => t === "push" ? r.squashIdxPush(u) : r.squashIdx(u)), p = v(i[1].foreignKeys, (u) => r.squashFK(u)), V = v(i[1].compositePrimaryKeys, (u) => r.squashPK(u)), q = Object.fromEntries(
        Object.entries(i[1].columns).map((u) => {
          const N = u[1].identity ? r.squashIdentity(u[1].identity) : void 0;
          return [
            u[0],
            {
              ...u[1],
              identity: N
            }
          ];
        })
      ), P = v(i[1].uniqueConstraints, (u) => r.squashUnique(u)), T = v(i[1].policies, (u) => t === "push" ? r.squashPolicyPush(u) : r.squashPolicy(u)), K = v(i[1].checkConstraints, (u) => r.squashCheck(u));
      return [
        i[0],
        {
          name: i[1].name,
          schema: i[1].schema,
          columns: q,
          indexes: f,
          foreignKeys: p,
          compositePrimaryKeys: V,
          uniqueConstraints: P,
          policies: T,
          checkConstraints: K,
          isRLSEnabled: i[1].isRLSEnabled ?? !1
        }
      ];
    })
  ), d = Object.fromEntries(
    Object.entries(s.sequences).map((i) => [
      i[0],
      {
        name: i[1].name,
        schema: i[1].schema,
        values: r.squashSequence(i[1])
      }
    ])
  ), y = Object.fromEntries(
    Object.entries(s.policies).map((i) => [
      i[0],
      {
        name: i[1].name,
        values: t === "push" ? r.squashPolicyPush(i[1]) : r.squashPolicy(i[1])
      }
    ])
  );
  return {
    version: "7",
    dialect: s.dialect,
    tables: m,
    enums: s.enums,
    schemas: s.schemas,
    views: s.views,
    policies: y,
    sequences: d,
    roles: s.roles
  };
}, We = R.parse({
  version: _,
  dialect: "postgresql",
  id: J,
  prevId: "",
  tables: {},
  enums: {},
  schemas: {},
  policies: {},
  roles: {},
  sequences: {},
  _meta: {
    schemas: {},
    tables: {},
    columns: {}
  }
});
export {
  r as PgSquasher,
  Oe as backwardCompatiblePgSchema,
  We as dryPg,
  U as kitInternals,
  me as mergedViewWithOption,
  R as pgSchema,
  Ce as pgSchemaExternal,
  Se as pgSchemaInternal,
  ye as pgSchemaInternalV3,
  qe as pgSchemaInternalV4,
  ge as pgSchemaInternalV5,
  be as pgSchemaInternalV6,
  $e as pgSchemaInternalV7,
  Ue as pgSchemaSquashed,
  Ee as pgSchemaSquashedV4,
  Ie as pgSchemaSquashedV6,
  we as pgSchemaV1,
  Ke as pgSchemaV2,
  Ne as pgSchemaV3,
  De as pgSchemaV4,
  ve as pgSchemaV5,
  xe as pgSchemaV6,
  Fe as pgSchemaV7,
  j as policy,
  ue as policySquashed,
  W as roleSchema,
  F as sequenceSchema,
  te as sequenceSquashed,
  Ae as squashPgScheme,
  k as view
};
