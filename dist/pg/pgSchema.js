import { originUUID as _, snapshotVersion as J, mapValues as V } from "./global.js";
import { o as a, b as o, r as s, s as e, a as d, l as c, e as w, n as u, c as D, u as B } from "../index-BXDpmlBM.js";
const A = a({
  name: e(),
  columns: s(
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
  default: d().optional(),
  references: e().optional()
}).strict(), G = a({
  name: e(),
  columns: s(e(), H),
  indexes: s(e(), A)
}).strict(), b = a({
  name: e(),
  values: s(e(), e())
}).strict(), C = a({
  name: e(),
  schema: e(),
  values: e().array()
}).strict(), Ke = a({
  version: c("2"),
  tables: s(e(), G),
  enums: s(e(), b)
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
  default: d().optional(),
  references: Q.optional()
}).strict(), Y = a({
  name: e(),
  columns: s(e(), X),
  indexes: s(e(), A)
}).strict(), we = a({
  version: c("1"),
  tables: s(e(), Y),
  enums: s(e(), b)
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
  with: s(e(), d()).optional(),
  method: e().default("btree"),
  where: e().optional(),
  concurrently: o().default(!1)
}).strict(), ee = a({
  name: e(),
  columns: e().array(),
  isUnique: o(),
  with: s(e(), e()).optional(),
  method: e().default("btree"),
  where: e().optional(),
  concurrently: o().default(!1)
}).strict(), se = a({
  name: e(),
  columns: e().array(),
  isUnique: o(),
  with: s(e(), e()).optional(),
  method: e().default("btree"),
  where: e().optional(),
  concurrently: o().default(!1)
}).strict(), te = a({
  name: e(),
  columns: e().array(),
  isUnique: o(),
  with: s(e(), e()).optional(),
  method: e().default("btree"),
  where: e().optional(),
  concurrently: o().default(!1)
}).strict(), v = a({
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
}).strict(), ne = a({
  name: e(),
  schema: e(),
  values: e()
}).strict(), ae = a({
  name: e(),
  type: e(),
  typeSchema: e().optional(),
  primaryKey: o(),
  notNull: o(),
  default: d().optional(),
  isUnique: d().optional(),
  uniqueName: e().optional(),
  nullsNotDistinct: o().optional()
}).strict(), $ = a({
  name: e(),
  type: e(),
  typeSchema: e().optional(),
  primaryKey: o(),
  notNull: o(),
  default: d().optional(),
  isUnique: d().optional(),
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
  default: d().optional(),
  isUnique: d().optional(),
  uniqueName: e().optional(),
  nullsNotDistinct: o().optional(),
  generated: a({
    type: c("stored"),
    as: e()
  }).optional(),
  identity: e().optional()
}).strict(), ce = a({
  name: e(),
  columns: s(e(), $),
  indexes: s(e(), g),
  foreignKeys: s(e(), v)
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
}).strict(), le = a({
  name: e(),
  values: e()
}).strict(), ue = a({
  checkOption: w(["local", "cascaded"]).optional(),
  securityBarrier: o().optional(),
  securityInvoker: o().optional()
}).strict(), re = a({
  fillfactor: u().optional(),
  toastTupleTarget: u().optional(),
  parallelWorkers: u().optional(),
  autovacuumEnabled: o().optional(),
  vacuumIndexCleanup: w(["auto", "off", "on"]).optional(),
  vacuumTruncate: o().optional(),
  autovacuumVacuumThreshold: u().optional(),
  autovacuumVacuumScaleFactor: u().optional(),
  autovacuumVacuumCostDelay: u().optional(),
  autovacuumVacuumCostLimit: u().optional(),
  autovacuumFreezeMinAge: u().optional(),
  autovacuumFreezeMaxAge: u().optional(),
  autovacuumFreezeTableAge: u().optional(),
  autovacuumMultixactFreezeMinAge: u().optional(),
  autovacuumMultixactFreezeMaxAge: u().optional(),
  autovacuumMultixactFreezeTableAge: u().optional(),
  logAutovacuumMinDuration: u().optional(),
  userCatalogTable: o().optional()
}).strict(), me = ue.merge(re).strict(), k = a({
  name: e(),
  schema: e(),
  columns: s(e(), $),
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
  columns: s(e(), $),
  indexes: s(e(), ee),
  foreignKeys: s(e(), v)
}).strict(), he = a({
  name: e(),
  schema: e(),
  columns: s(e(), $),
  indexes: s(e(), se),
  foreignKeys: s(e(), v),
  compositePrimaryKeys: s(e(), E),
  uniqueConstraints: s(e(), I).default({})
}).strict(), de = a({
  name: e(),
  schema: e(),
  columns: s(e(), $),
  indexes: s(e(), te),
  foreignKeys: s(e(), v),
  compositePrimaryKeys: s(e(), E),
  uniqueConstraints: s(e(), I).default({})
}).strict(), ye = a({
  name: e(),
  schema: e(),
  columns: s(e(), ae),
  indexes: s(e(), g),
  foreignKeys: s(e(), v),
  compositePrimaryKeys: s(e(), E),
  uniqueConstraints: s(e(), I).default({})
}).strict(), L = a({
  name: e(),
  schema: e(),
  columns: s(e(), $),
  indexes: s(e(), g),
  foreignKeys: s(e(), v),
  compositePrimaryKeys: s(e(), E),
  uniqueConstraints: s(e(), I).default({}),
  policies: s(e(), j).default({}),
  checkConstraints: s(e(), oe).default({}),
  isRLSEnabled: o().default(!1)
}).strict(), x = a({
  id: e(),
  prevId: e()
}), U = a({
  tables: s(
    e(),
    a({
      columns: s(
        e(),
        a({
          isArray: o().optional(),
          dimensions: u().optional(),
          rawType: e().optional(),
          isDefaultAnExpression: o().optional()
        }).optional()
      )
    }).optional()
  )
}).optional(), fe = a({
  version: c("3"),
  dialect: c("pg"),
  tables: s(e(), ce),
  enums: s(e(), b)
}).strict(), qe = a({
  version: c("4"),
  dialect: c("pg"),
  tables: s(e(), pe),
  enums: s(e(), b),
  schemas: s(e(), e())
}).strict(), ge = a({
  version: c("5"),
  dialect: c("pg"),
  tables: s(e(), he),
  enums: s(e(), b),
  schemas: s(e(), e()),
  _meta: a({
    schemas: s(e(), e()),
    tables: s(e(), e()),
    columns: s(e(), e())
  }),
  internal: U
}).strict(), be = a({
  version: c("6"),
  dialect: c("postgresql"),
  tables: s(e(), de),
  enums: s(e(), C),
  schemas: s(e(), e()),
  _meta: a({
    schemas: s(e(), e()),
    tables: s(e(), e()),
    columns: s(e(), e())
  }),
  internal: U
}).strict(), Ce = a({
  version: c("5"),
  dialect: c("pg"),
  tables: D(L),
  enums: D(b),
  schemas: D(a({ name: e() })),
  _meta: a({
    schemas: s(e(), e()),
    tables: s(e(), e()),
    columns: s(e(), e())
  })
}).strict(), ve = a({
  version: c("7"),
  dialect: c("postgresql"),
  tables: s(e(), ye),
  enums: s(e(), C),
  schemas: s(e(), e()),
  sequences: s(e(), F),
  _meta: a({
    schemas: s(e(), e()),
    tables: s(e(), e()),
    columns: s(e(), e())
  }),
  internal: U
}).strict(), $e = a({
  version: c("7"),
  dialect: c("postgresql"),
  tables: s(e(), L),
  enums: s(e(), C),
  schemas: s(e(), e()),
  views: s(e(), k).default({}),
  sequences: s(e(), F).default({}),
  roles: s(e(), W).default({}),
  policies: s(e(), j).default({}),
  _meta: a({
    schemas: s(e(), e()),
    tables: s(e(), e()),
    columns: s(e(), e())
  }),
  internal: U
}).strict(), M = a({
  name: e(),
  schema: e(),
  columns: s(e(), ie),
  indexes: s(e(), e()),
  foreignKeys: s(e(), e()),
  compositePrimaryKeys: s(e(), e()),
  uniqueConstraints: s(e(), e()),
  policies: s(e(), e()),
  checkConstraints: s(e(), e()),
  isRLSEnabled: o().default(!1)
}).strict(), Se = a({
  name: e(),
  schema: e(),
  columns: s(e(), $),
  indexes: s(e(), e()),
  foreignKeys: s(e(), e())
}).strict(), Ee = a({
  version: c("4"),
  dialect: c("pg"),
  tables: s(e(), Se),
  enums: s(e(), b),
  schemas: s(e(), e())
}).strict(), Ie = a({
  version: c("6"),
  dialect: c("postgresql"),
  tables: s(e(), M),
  enums: s(e(), C),
  schemas: s(e(), e())
}).strict(), Ue = a({
  version: c("7"),
  dialect: c("postgresql"),
  tables: s(e(), M),
  enums: s(e(), C),
  schemas: s(e(), e()),
  views: s(e(), k),
  sequences: s(e(), ne),
  roles: s(e(), W).default({}),
  policies: s(e(), le).default({})
}).strict(), Ne = fe.merge(x), De = qe.merge(x), Ve = ge.merge(x), xe = be.merge(x), Fe = ve.merge(x), R = $e.merge(x), Oe = B([Ve, xe, R]), r = {
  squashIdx: (t) => (g.parse(t), `${t.name};${t.columns.map((n) => `${n.expression}--${n.isExpression}--${n.asc}--${n.nulls}--${n.opclass ? n.opclass : ""}`).join(",,")};${t.isUnique};${t.concurrently};${t.method};${t.where};${JSON.stringify(t.with)}`),
  unsquashIdx: (t) => {
    const [n, m, h, f, i, y, p] = t.split(";"), S = m.split(",,"), q = [];
    for (const T of S) {
      const [K, l, N, z, O] = T.split("--");
      q.push({
        nulls: z,
        isExpression: l === "true",
        asc: N === "true",
        expression: K,
        opclass: O === "undefined" ? void 0 : O
      });
    }
    return g.parse({
      name: n,
      columns: q,
      isUnique: h === "true",
      concurrently: f === "true",
      method: i,
      where: y === "undefined" ? void 0 : y,
      with: !p || p === "undefined" ? void 0 : JSON.parse(p)
    });
  },
  squashIdxPush: (t) => (g.parse(t), `${t.name};${t.columns.map((n) => `${n.isExpression ? "" : n.expression}--${n.asc}--${n.nulls}`).join(",,")};${t.isUnique};${t.method};${JSON.stringify(t.with)}`),
  unsquashIdxPush: (t) => {
    const [n, m, h, f, i] = t.split(";"), y = m.split("--"), p = [];
    for (const q of y) {
      const [P, T, K] = q.split(",");
      p.push({
        nulls: K,
        isExpression: P === "",
        asc: T === "true",
        expression: P
      });
    }
    return g.parse({
      name: n,
      columns: p,
      isUnique: h === "true",
      concurrently: !1,
      method: f,
      with: i === "undefined" ? void 0 : JSON.parse(i)
    });
  },
  squashFK: (t) => `${t.name};${t.tableFrom};${t.columnsFrom.join(",")};${t.tableTo};${t.columnsTo.join(",")};${t.onUpdate ?? ""};${t.onDelete ?? ""};${t.schemaTo || "public"}`,
  squashPolicy: (t) => {
    var n;
    return `${t.name}--${t.as}--${t.for}--${(n = t.to) == null ? void 0 : n.join(",")}--${t.using}--${t.withCheck}--${t.on}`;
  },
  unsquashPolicy: (t) => {
    const n = t.split("--");
    return {
      name: n[0],
      as: n[1],
      for: n[2],
      to: n[3].split(","),
      using: n[4] !== "undefined" ? n[4] : void 0,
      withCheck: n[5] !== "undefined" ? n[5] : void 0,
      on: n[6] !== "undefined" ? n[6] : void 0
    };
  },
  squashPolicyPush: (t) => {
    var n;
    return `${t.name}--${t.as}--${t.for}--${(n = t.to) == null ? void 0 : n.join(",")}--${t.on}`;
  },
  unsquashPolicyPush: (t) => {
    const n = t.split("--");
    return {
      name: n[0],
      as: n[1],
      for: n[2],
      to: n[3].split(","),
      on: n[4] !== "undefined" ? n[4] : void 0
    };
  },
  squashPK: (t) => `${t.columns.join(",")};${t.name}`,
  unsquashPK: (t) => {
    const n = t.split(";");
    return { name: n[1], columns: n[0].split(",") };
  },
  squashUnique: (t) => `${t.name};${t.columns.join(",")};${t.nullsNotDistinct}`,
  unsquashUnique: (t) => {
    const [n, m, h] = t.split(";");
    return {
      name: n,
      columns: m.split(","),
      nullsNotDistinct: h === "true"
    };
  },
  unsquashFK: (t) => {
    const [n, m, h, f, i, y, p, S] = t.split(";");
    return v.parse({
      name: n,
      tableFrom: m,
      columnsFrom: h.split(","),
      schemaTo: S,
      tableTo: f,
      columnsTo: i.split(","),
      onUpdate: y,
      onDelete: p
    });
  },
  squashSequence: (t) => `${t.minValue};${t.maxValue};${t.increment};${t.startWith};${t.cache};${t.cycle ?? ""}`,
  unsquashSequence: (t) => {
    const n = t.split(";");
    return {
      minValue: n[0] !== "undefined" ? n[0] : void 0,
      maxValue: n[1] !== "undefined" ? n[1] : void 0,
      increment: n[2] !== "undefined" ? n[2] : void 0,
      startWith: n[3] !== "undefined" ? n[3] : void 0,
      cache: n[4] !== "undefined" ? n[4] : void 0,
      cycle: n[5] === "true"
    };
  },
  squashIdentity: (t) => `${t.name};${t.type};${t.minValue};${t.maxValue};${t.increment};${t.startWith};${t.cache};${t.cycle ?? ""}`,
  unsquashIdentity: (t) => {
    const n = t.split(";");
    return {
      name: n[0],
      type: n[1],
      minValue: n[2] !== "undefined" ? n[2] : void 0,
      maxValue: n[3] !== "undefined" ? n[3] : void 0,
      increment: n[4] !== "undefined" ? n[4] : void 0,
      startWith: n[5] !== "undefined" ? n[5] : void 0,
      cache: n[6] !== "undefined" ? n[6] : void 0,
      cycle: n[7] === "true"
    };
  },
  squashCheck: (t) => `${t.name};${t.value}`,
  unsquashCheck: (t) => {
    const [n, m] = t.split(";");
    return { name: n, value: m };
  }
}, Ae = (t, n) => {
  const m = Object.fromEntries(
    Object.entries(t.tables).map((i) => {
      const y = V(i[1].indexes, (l) => n === "push" ? r.squashIdxPush(l) : r.squashIdx(l)), p = V(i[1].foreignKeys, (l) => r.squashFK(l)), S = V(i[1].compositePrimaryKeys, (l) => r.squashPK(l)), q = Object.fromEntries(
        Object.entries(i[1].columns).map((l) => {
          const N = l[1].identity ? r.squashIdentity(l[1].identity) : void 0;
          return [
            l[0],
            {
              ...l[1],
              identity: N
            }
          ];
        })
      ), P = V(i[1].uniqueConstraints, (l) => r.squashUnique(l)), T = V(i[1].policies, (l) => n === "push" ? r.squashPolicyPush(l) : r.squashPolicy(l)), K = V(i[1].checkConstraints, (l) => r.squashCheck(l));
      return [
        i[0],
        {
          name: i[1].name,
          schema: i[1].schema,
          columns: q,
          indexes: y,
          foreignKeys: p,
          compositePrimaryKeys: S,
          uniqueConstraints: P,
          policies: T,
          checkConstraints: K,
          isRLSEnabled: i[1].isRLSEnabled ?? !1
        }
      ];
    })
  ), h = Object.fromEntries(
    Object.entries(t.sequences).map((i) => [
      i[0],
      {
        name: i[1].name,
        schema: i[1].schema,
        values: r.squashSequence(i[1])
      }
    ])
  ), f = Object.fromEntries(
    Object.entries(t.policies).map((i) => [
      i[0],
      {
        name: i[1].name,
        values: n === "push" ? r.squashPolicyPush(i[1]) : r.squashPolicy(i[1])
      }
    ])
  );
  return {
    version: "7",
    dialect: t.dialect,
    tables: m,
    enums: t.enums,
    schemas: t.schemas,
    views: t.views,
    policies: f,
    sequences: h,
    roles: t.roles
  };
}, We = R.parse({
  version: J,
  dialect: "postgresql",
  id: _,
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
  $e as pgSchemaInternal,
  fe as pgSchemaInternalV3,
  qe as pgSchemaInternalV4,
  ge as pgSchemaInternalV5,
  be as pgSchemaInternalV6,
  ve as pgSchemaInternalV7,
  Ue as pgSchemaSquashed,
  Ee as pgSchemaSquashedV4,
  Ie as pgSchemaSquashedV6,
  we as pgSchemaV1,
  Ke as pgSchemaV2,
  Ne as pgSchemaV3,
  De as pgSchemaV4,
  Ve as pgSchemaV5,
  xe as pgSchemaV6,
  Fe as pgSchemaV7,
  j as policy,
  le as policySquashed,
  W as roleSchema,
  F as sequenceSchema,
  ne as sequenceSquashed,
  Ae as squashPgScheme,
  k as view
};
