import { o as c, s as n, b as C, a as he, e as M, c as ys, r as h, u as ue, l as $ } from "../index-BXDpmlBM.js";
import { diffSchemasOrTables as D, diffColumns as $a, diffPolicies as Ra, diffIndPolicies as ka, applyJsonDiff as Da } from "./jsonDiffer.js";
import { fromJson as Ja } from "./sqlgenerator.js";
import { preparePgCreateIndexesJson as oe, prepareDropTableJson as Ea, prepareRenameTableJson as va, prepareRenameColumns as Aa, _prepareDropColumns as Fa, _prepareAddColumns as Ka, prepareAddCompositePrimaryKeyPg as Ia, prepareDeleteCompositePrimaryKeyPg as ja, prepareAlterCompositePrimaryKeyPg as Oa, prepareAddUniqueConstraintPg as ts, prepareDeleteUniqueConstraintPg as os, prepareAddCheckConstraint as rs, prepareDeleteCheckConstraint as ms, preparePgAlterColumns as xa, prepareDropIndexesJson as cs, prepareRenameIndPolicyJsons as Ua, prepareCreateIndPolicyJsons as re, prepareDropIndPolicyJsons as me, prepareRenamePolicyJsons as Na, prepareCreatePolicyJsons as V, prepareDropPolicyJsons as ce, prepareAlterPolicyJson as Wa, prepareCreateReferencesJson as ls, prepareDropReferencesJson as Va, prepareAlterReferencesJson as Ma, prepareCreateEnumJson as La, prepareDropEnumJson as za, prepareMoveEnumJson as Ba, prepareRenameEnumJson as Ga, prepareAddValuesToEnumJson as Ha, prepareDropEnumValues as Qa, prepareCreateSequenceJson as Xa, prepareDropSequenceJson as Ya, prepareMoveSequenceJson as Za, prepareRenameSequenceJson as en, prepareAlterSequenceJson as sn, prepareCreateRoleJson as an, prepareDropRoleJson as nn, prepareRenameRoleJson as tn, prepareAlterRoleJson as on, prepareCreateSchemasJson as rn, prepareRenameSchemasJson as mn, prepareDeleteSchemasJson as cn, preparePgCreateTableJson as ln, preparePgCreateViewJson as ds, prepareDropViewJson as ps, prepareRenameViewJson as dn, preparePgAlterViewAlterSchemaJson as pn, preparePgAlterViewAddWithOptionJson as le, preparePgAlterViewDropWithOptionJson as hs, preparePgAlterViewAlterTablespaceJson as hn, preparePgAlterViewAlterUsingJson as un, prepareAlterIndPolicyJson as fn } from "./jsonStatements.js";
import { mapEntries as y, mapValues as us, mapKeys as is } from "./global.js";
import { mergedViewWithOption as K, policySquashed as yn, roleSchema as Pn, sequenceSquashed as Cn, PgSquasher as p } from "./pgSchema.js";
import { copy as J, prepareMigrationMeta as bn } from "./utils.js";
const _n = (r) => c({
  type: M(["changed"]),
  old: r,
  new: r
}), Sn = (r) => ue([
  r,
  c({
    type: M(["changed"]),
    old: r,
    new: r
  })
]), w = (r) => ue([
  c({
    type: $("added"),
    value: r
  }),
  c({
    type: $("deleted"),
    value: r
  }),
  c({
    type: $("changed"),
    old: r,
    new: r
  })
]), On = (r) => ue([
  c({
    type: $("none"),
    value: r
  }),
  c({
    type: $("added"),
    value: r
  }),
  c({
    type: $("deleted"),
    value: r
  }),
  c({
    type: $("changed"),
    old: r,
    new: r
  })
]), gn = c({
  name: n(),
  type: n(),
  typeSchema: n().optional(),
  primaryKey: C().optional(),
  default: he().optional(),
  notNull: C().optional(),
  // should it be optional? should if be here?
  autoincrement: C().optional(),
  onUpdate: C().optional(),
  isUnique: he().optional(),
  uniqueName: n().optional(),
  nullsNotDistinct: C().optional(),
  generated: c({
    as: n(),
    type: M(["stored", "virtual"]).default("stored")
  }).optional(),
  identity: n().optional()
}).strict(), qn = c({
  name: Sn(n()),
  type: _n(n()).optional(),
  default: w(he()).optional(),
  primaryKey: w(C()).optional(),
  notNull: w(C()).optional(),
  typeSchema: w(n()).optional(),
  onUpdate: w(C()).optional(),
  autoincrement: w(C()).optional(),
  generated: w(
    c({
      as: n(),
      type: M(["stored", "virtual"]).default("stored")
    })
  ).optional(),
  identity: w(n()).optional()
}).strict();
c({
  name: n(),
  schema: n(),
  values: ys(n())
}).strict();
const wn = c({
  name: n(),
  schema: n(),
  addedValues: c({
    before: n(),
    value: n()
  }).array(),
  deletedValues: ys(n())
}).strict();
c({
  name: n(),
  schema: n().default(""),
  columns: h(n(), gn),
  indexes: h(n(), n()),
  foreignKeys: h(n(), n()),
  compositePrimaryKeys: h(n(), n()).default({}),
  uniqueConstraints: h(n(), n()).default({}),
  policies: h(n(), n()).default({}),
  checkConstraints: h(n(), n()).default({}),
  isRLSEnabled: C().default(!1)
}).strict();
const Tn = c({
  name: n(),
  schema: n(),
  altered: qn.array(),
  addedIndexes: h(n(), n()),
  deletedIndexes: h(n(), n()),
  alteredIndexes: h(
    n(),
    c({
      __new: n(),
      __old: n()
    }).strict()
  ),
  addedForeignKeys: h(n(), n()),
  deletedForeignKeys: h(n(), n()),
  alteredForeignKeys: h(
    n(),
    c({
      __new: n(),
      __old: n()
    }).strict()
  ),
  addedCompositePKs: h(n(), n()),
  deletedCompositePKs: h(n(), n()),
  alteredCompositePKs: h(
    n(),
    c({
      __new: n(),
      __old: n()
    })
  ),
  addedUniqueConstraints: h(n(), n()),
  deletedUniqueConstraints: h(n(), n()),
  alteredUniqueConstraints: h(
    n(),
    c({
      __new: n(),
      __old: n()
    })
  ),
  addedPolicies: h(n(), n()),
  deletedPolicies: h(n(), n()),
  alteredPolicies: h(
    n(),
    c({
      __new: n(),
      __old: n()
    })
  ),
  addedCheckConstraints: h(n(), n()),
  deletedCheckConstraints: h(n(), n()),
  alteredCheckConstraints: h(
    n(),
    c({
      __new: n(),
      __old: n()
    })
  )
}).strict(), $n = c({
  name: n(),
  alteredDefinition: c({
    __old: n(),
    __new: n()
  }).strict().optional(),
  alteredExisting: c({
    __old: C(),
    __new: C()
  }).strict().optional()
}), Rn = $n.merge(
  c({
    schema: n(),
    deletedWithOption: K.optional(),
    addedWithOption: K.optional(),
    addedWith: K.optional(),
    deletedWith: K.optional(),
    alteredWith: K.optional(),
    alteredSchema: c({
      __old: n(),
      __new: n()
    }).strict().optional(),
    alteredTablespace: c({
      __old: n(),
      __new: n()
    }).strict().optional(),
    alteredUsing: c({
      __old: n(),
      __new: n()
    }).strict().optional()
  }).strict()
), kn = c({
  alteredTablesWithColumns: Tn.array(),
  alteredEnums: wn.array(),
  alteredSequences: Cn.array(),
  alteredRoles: Pn.array(),
  alteredPolicies: yn.array(),
  alteredViews: Rn.array()
}).strict(), de = (r, l) => {
  for (const i of l)
    if (r.schema === i.from.name)
      return { key: `${i.to.name}.${r.name}`, schema: i.to.name };
  return {
    key: `${r.schema || "public"}.${r.name}`,
    schema: r.schema
  };
}, Dn = (r, l) => {
  for (const i of l)
    if (r.name === i.from.name)
      return { name: i.to.name };
  return {
    name: r.name
  };
}, pe = (r, l) => {
  for (const i of l)
    if (r.name === i.from.name && r.schema === i.from.schema)
      return {
        key: `${i.to.schema || "public"}.${i.to.name}`,
        name: i.to.name,
        schema: i.to.schema
      };
  return {
    key: `${r.schema || "public"}.${r.name}`,
    name: r.name,
    schema: r.schema
  };
}, fs = (r, l) => {
  for (const i of l)
    if (r === i.from.name)
      return i.to.name;
  return r;
}, xn = async (r, l, i, Ps, Cs, bs, _s, Ss, gs, qs, ws, E, f) => {
  const ie = D(r.schemas, l.schemas), {
    created: Ts,
    deleted: $s,
    renamed: v
  } = await i({
    created: ie.added.map((e) => ({ name: e })),
    deleted: ie.deleted.map((e) => ({ name: e }))
  }), u = J(r);
  u.tables = y(u.tables, (e, s) => {
    const { key: t, schema: a } = de(s, v);
    return s.schema = a, [t, s];
  }), u.enums = y(u.enums, (e, s) => {
    const { key: t, schema: a } = de(s, v);
    return s.schema = a, [t, s];
  });
  const fe = D(u.enums, l.enums), {
    created: Rs,
    deleted: ks,
    renamed: L,
    moved: ye
  } = await Ps({
    created: fe.added,
    deleted: fe.deleted
  });
  u.enums = y(u.enums, (e, s) => {
    const { key: t, name: a, schema: m } = pe(s, L);
    return s.name = a, s.schema = m, [t, s];
  });
  const Ds = L.reduce(
    (e, s) => (e[`${s.from.schema}.${s.from.name}`] = {
      nameFrom: s.from.name,
      nameTo: s.to.name,
      schemaFrom: s.from.schema,
      schemaTo: s.to.schema
    }, e),
    {}
  ), Js = ye.reduce(
    (e, s) => (e[`${s.schemaFrom}.${s.name}`] = {
      nameFrom: s.name,
      nameTo: s.name,
      schemaFrom: s.schemaFrom,
      schemaTo: s.schemaTo
    }, e),
    {}
  );
  u.tables = y(u.tables, (e, s) => {
    const t = us(s.columns, (a) => {
      const m = `${a.typeSchema || "public"}.${a.type}`, d = Ds[m] || Js[m];
      return d && (a.type = d.nameTo, a.typeSchema = d.schemaTo), a;
    });
    return s.columns = t, [e, s];
  }), u.sequences = y(u.sequences, (e, s) => {
    const { key: t, schema: a } = de(s, v);
    return s.schema = a, [t, s];
  });
  const Pe = D(u.sequences, l.sequences), {
    created: Es,
    deleted: vs,
    renamed: z,
    moved: Ce
  } = await Cs({
    created: Pe.added,
    deleted: Pe.deleted
  });
  u.sequences = y(u.sequences, (e, s) => {
    const { key: t, name: a, schema: m } = pe(s, z);
    return s.name = a, s.schema = m, [t, s];
  });
  const As = z.reduce(
    (e, s) => (e[`${s.from.schema}.${s.from.name}`] = {
      nameFrom: s.from.name,
      nameTo: s.to.name,
      schemaFrom: s.from.schema,
      schemaTo: s.to.schema
    }, e),
    {}
  ), Fs = Ce.reduce(
    (e, s) => (e[`${s.schemaFrom}.${s.name}`] = {
      nameFrom: s.name,
      nameTo: s.name,
      schemaFrom: s.schemaFrom,
      schemaTo: s.schemaTo
    }, e),
    {}
  );
  u.tables = y(u.tables, (e, s) => {
    const t = us(s.columns, (a) => {
      const m = `${a.typeSchema || "public"}.${a.type}`, d = As[m] || Fs[m];
      return d && (a.type = d.nameTo, a.typeSchema = d.schemaTo), a;
    });
    return s.columns = t, [e, s];
  });
  const be = D(u.roles, l.roles), {
    created: Ks,
    deleted: Is,
    renamed: B
  } = await Ss({
    created: be.added,
    deleted: be.deleted
  });
  u.roles = y(u.roles, (e, s) => {
    const { name: t } = Dn(s, B);
    return s.name = t, [t, s];
  });
  const js = B.reduce(
    (e, s) => (e[s.from.name] = {
      nameFrom: s.from.name,
      nameTo: s.to.name
    }, e),
    {}
  );
  u.roles = y(u.roles, (e, s) => {
    const a = js[e];
    return a && (s.name = a.nameTo), [e, s];
  });
  const _e = D(u.tables, l.tables), {
    created: I,
    deleted: Os,
    moved: Se,
    renamed: G
    // renamed or moved
  } = await gs({
    created: _e.added,
    deleted: _e.deleted
  }), R = J(u);
  R.tables = y(R.tables, (e, s) => {
    const { key: t, name: a, schema: m } = pe(s, G);
    return s.name = a, s.schema = m, [t, s];
  });
  const xs = $a(R.tables, l.tables), j = [], ge = [], qe = [];
  for (const e of Object.values(xs)) {
    const { renamed: s, created: t, deleted: a } = await qs({
      tableName: e.name,
      schema: e.schema,
      deleted: e.columns.deleted,
      created: e.columns.added
    });
    t.length > 0 && ge.push({
      table: e.name,
      schema: e.schema,
      columns: t
    }), a.length > 0 && qe.push({
      table: e.name,
      schema: e.schema,
      columns: a
    }), s.length > 0 && j.push({
      table: e.name,
      schema: e.schema,
      renames: s
    });
  }
  const Us = j.reduce(
    (e, s) => (e[`${s.schema || "public"}.${s.table}`] = s.renames, e),
    {}
  ), O = J(R);
  O.tables = y(O.tables, (e, s) => {
    const t = is(s.columns, (a, m) => {
      const d = Us[`${s.schema || "public"}.${s.name}`] || [], P = fs(a, d);
      return m.name = P, P;
    });
    return s.columns = t, [e, s];
  });
  const Ns = Ra(R.tables, l.tables), we = [], Te = [], $e = [];
  for (const e of Object.values(Ns)) {
    const { renamed: s, created: t, deleted: a } = await bs({
      tableName: e.name,
      schema: e.schema,
      deleted: e.policies.deleted.map(
        f === "push" ? p.unsquashPolicyPush : p.unsquashPolicy
      ),
      created: e.policies.added.map(f === "push" ? p.unsquashPolicyPush : p.unsquashPolicy)
    });
    t.length > 0 && Te.push({
      table: e.name,
      schema: e.schema,
      columns: t
    }), a.length > 0 && $e.push({
      table: e.name,
      schema: e.schema,
      columns: a
    }), s.length > 0 && we.push({
      table: e.name,
      schema: e.schema,
      renames: s
    });
  }
  const Ws = j.reduce(
    (e, s) => (e[`${s.schema || "public"}.${s.table}`] = s.renames, e),
    {}
  ), A = J(R);
  A.tables = y(A.tables, (e, s) => {
    const t = is(s.policies, (a, m) => {
      const d = Ws[`${s.schema || "public"}.${s.name}`] || [], P = fs(a, d), b = f === "push" ? p.unsquashPolicyPush(m) : p.unsquashPolicy(m);
      return b.name = P, m = p.squashPolicy(b), P;
    });
    return s.policies = t, [e, s];
  });
  const Re = ka(A.policies, l.policies), ke = [], De = [], {
    renamed: Je,
    created: Ee,
    deleted: ve
  } = await _s({
    deleted: Re.deleted.map(
      (e) => f === "push" ? p.unsquashPolicyPush(e.values) : p.unsquashPolicy(e.values)
    ),
    created: Re.added.map(
      (e) => f === "push" ? p.unsquashPolicyPush(e.values) : p.unsquashPolicy(e.values)
    )
  });
  Ee.length > 0 && ke.push({
    policies: Ee
  }), ve.length > 0 && De.push({
    policies: ve
  });
  const Vs = Je.reduce(
    (e, s) => (e[s.from.name] = {
      nameFrom: s.from.name,
      nameTo: s.to.name
    }, e),
    {}
  ), H = J(A);
  H.policies = y(H.policies, (e, s) => {
    const a = Vs[e];
    return a && (s.name = a.nameTo), [e, s];
  });
  const Ae = D(H.views, l.views), {
    created: Ms,
    deleted: Ls,
    renamed: Fe,
    moved: Ke
  } = await ws({
    created: Ae.added,
    deleted: Ae.deleted
  }), Ie = {};
  Fe.forEach((e) => {
    Ie[`${e.from.schema}.${e.from.name}`] = {
      to: e.to.name,
      from: e.from.name
    };
  });
  const je = {};
  Ke.forEach((e) => {
    je[`${e.schemaFrom}.${e.name}`] = {
      to: e.schemaTo,
      from: e.schemaFrom
    };
  });
  const Q = J(A);
  Q.views = y(Q.views, (e, s) => {
    const t = Ie[`${s.schema}.${s.name}`], a = je[`${s.schema}.${s.name}`];
    return t && (s.name = t.to, e = `${s.schema}.${s.name}`), a && (e = `${a.to}.${s.name}`), [e, s];
  });
  const zs = Da(Q, l), T = kn.parse(zs), o = [], Bs = I.map((e) => oe(e.name, e.schema, e.indexes, E, f)).flat(), Gs = Os.map((e) => Ea(e)), Hs = G.map((e) => va(e.from, e.to)), k = T.alteredTablesWithColumns, X = [], Oe = [], xe = [];
  for (const e of j)
    X.push(...Aa(e.table, e.schema, e.renames));
  for (const e of qe)
    Oe.push(...Fa(e.table, e.schema, e.columns));
  for (const e of ge)
    xe.push(...Ka(e.table, e.schema, e.columns));
  const Ue = [], Ne = [], We = [], Ve = [], Me = [], Le = [], ze = [];
  if (Se)
    for (const e of Se)
      ze.push({
        type: "alter_table_set_schema",
        tableName: e.name,
        schemaFrom: e.schemaFrom || "public",
        schemaTo: e.schemaTo || "public"
      });
  const Be = [], Ge = [];
  for (const e of k) {
    let s;
    for (const S of Object.keys(e.addedCompositePKs)) {
      const g = e.addedCompositePKs[S];
      s = p.unsquashPK(g);
    }
    let t;
    for (const S of Object.keys(e.deletedCompositePKs)) {
      const g = e.deletedCompositePKs[S];
      t = p.unsquashPK(g);
    }
    const a = JSON.stringify(s ?? {}) !== JSON.stringify(t ?? {});
    let m = [], d = [], P = [];
    a && (m = Ia(e.name, e.schema, e.addedCompositePKs), d = ja(e.name, e.schema, e.deletedCompositePKs)), P = Oa(e.name, e.schema, e.alteredCompositePKs);
    let b = [], ae = [];
    const Ta = [];
    let ne = [], te = [];
    if (b = ts(e.name, e.schema, e.addedUniqueConstraints), ae = os(e.name, e.schema, e.deletedUniqueConstraints), e.alteredUniqueConstraints) {
      const S = {}, g = {};
      for (const q of Object.keys(e.alteredUniqueConstraints))
        S[q] = e.alteredUniqueConstraints[q].__new, g[q] = e.alteredUniqueConstraints[q].__old;
      b.push(...ts(e.name, e.schema, S)), ae.push(...os(e.name, e.schema, g));
    }
    if (ne = rs(e.name, e.schema, e.addedCheckConstraints), te = ms(e.name, e.schema, e.deletedCheckConstraints), e.alteredCheckConstraints && f !== "push") {
      const S = {}, g = {};
      for (const q of Object.keys(e.alteredCheckConstraints))
        S[q] = e.alteredCheckConstraints[q].__new, g[q] = e.alteredCheckConstraints[q].__old;
      ne.push(...rs(e.name, e.schema, S)), te.push(...ms(e.name, e.schema, g));
    }
    Ge.push(...ne), Be.push(...te), Ue.push(...m), Ne.push(...d), We.push(...P), Ve.push(...b), Me.push(...ae), Le.push(...Ta);
  }
  const Qs = X.map((e) => {
    const s = e.tableName, t = e.schema;
    return {
      from: { schema: t, table: s, column: e.oldColumnName },
      to: { schema: t, table: s, column: e.newColumnName }
    };
  }), Xs = k.map((e) => xa(e.name, e.schema, e.altered, l, f)).flat(), He = k.map((e) => oe(e.name, e.schema, e.addedIndexes || {}, E, f)).flat(), Qe = k.map((e) => cs(e.name, e.schema, e.deletedIndexes || {})).flat(), F = [], x = [], Xe = [], Ye = [], Ze = [], U = [], N = [], es = [], Y = [], W = [];
  for (const e of Je)
    Ze.push(...Ua([e]));
  for (const e of ke)
    U.push(...re(e.policies));
  for (const e of De)
    N.push(...me(e.policies));
  T.alteredPolicies.forEach(({ values: e }) => {
    const s = f === "push" ? p.unsquashPolicyPush(e) : p.unsquashPolicy(e), t = f === "push" ? p.unsquashPolicyPush(l.policies[s.name].values) : p.unsquashPolicy(l.policies[s.name].values), a = f === "push" ? p.unsquashPolicyPush(l.policies[s.name].values) : p.unsquashPolicy(r.policies[s.name].values);
    if (t.as !== a.as) {
      N.push(...me([a])), U.push(...re([t]));
      return;
    }
    if (t.for !== a.for) {
      N.push(...me([a])), U.push(...re([t]));
      return;
    }
    es.push(fn(a, t));
  });
  for (const e of we)
    Ye.push(...Na(e.table, e.schema, e.renames));
  for (const e of Te)
    F.push(...V(e.table, e.schema, e.columns));
  for (const e of $e)
    x.push(...ce(e.table, e.schema, e.columns));
  k.forEach((e) => {
    Object.keys(e.alteredPolicies).forEach((a) => {
      const m = f === "push" ? p.unsquashPolicyPush(e.alteredPolicies[a].__new) : p.unsquashPolicy(e.alteredPolicies[a].__new), d = f === "push" ? p.unsquashPolicyPush(e.alteredPolicies[a].__old) : p.unsquashPolicy(e.alteredPolicies[a].__old);
      if (m.as !== d.as) {
        x.push(...ce(e.name, e.schema, [d])), F.push(...V(e.name, e.schema, [m]));
        return;
      }
      if (m.for !== d.for) {
        x.push(...ce(e.name, e.schema, [d])), F.push(...V(e.name, e.schema, [m]));
        return;
      }
      Xe.push(
        Wa(
          e.name,
          e.schema,
          e.alteredPolicies[a].__old,
          e.alteredPolicies[a].__new
        )
      );
    });
    for (const a of Object.values(l.tables)) {
      const m = Object.keys(a.policies), d = O.tables[`${a.schema === "" ? "public" : a.schema}.${a.name}`], P = d ? Object.keys(d.policies) : [];
      P.length === 0 && m.length > 0 && !a.isRLSEnabled && Y.push({
        type: "enable_rls",
        tableName: a.name,
        schema: a.schema
      }), P.length > 0 && m.length === 0 && !a.isRLSEnabled && W.push({
        type: "disable_rls",
        tableName: a.name,
        schema: a.schema
      });
      const b = d ? d.isRLSEnabled : !1;
      a.isRLSEnabled !== b && (a.isRLSEnabled ? Y.push({
        type: "enable_rls",
        tableName: a.name,
        schema: a.schema
      }) : !a.isRLSEnabled && m.length === 0 && W.push({
        type: "disable_rls",
        tableName: a.name,
        schema: a.schema
      }));
    }
    for (const a of Object.values(O.tables))
      l.tables[`${a.schema === "" ? "public" : a.schema}.${a.name}`] === void 0 && !a.isRLSEnabled && W.push({
        type: "disable_rls",
        tableName: a.name,
        schema: a.schema
      });
    const s = Object.keys(e.alteredIndexes).reduce(
      (a, m) => (a[m] = e.alteredIndexes[m].__old, a),
      {}
    ), t = Object.keys(e.alteredIndexes).reduce(
      (a, m) => (a[m] = e.alteredIndexes[m].__new, a),
      {}
    );
    He.push(
      ...oe(e.name, e.schema, t || {}, E, f)
    ), Qe.push(...cs(e.name, e.schema, s || {}));
  });
  const Ys = I.map((e) => ls(e.name, e.schema, e.foreignKeys)).flat(), ss = k.map((e) => {
    const s = ls(e.name, e.schema, e.addedForeignKeys), t = Va(e.name, e.schema, e.deletedForeignKeys), a = Ma(e.name, e.schema, e.alteredForeignKeys);
    return [...s, ...t, ...a];
  }).flat(), Zs = ss.filter(
    (e) => e.type === "create_reference"
  ), ea = ss.filter(
    (e) => e.type === "delete_reference"
  ), sa = Rs.map((e) => La(e.name, e.schema, e.values)) ?? [], aa = ks.map((e) => za(e.name, e.schema)), na = ye.map((e) => Ba(e.name, e.schemaFrom, e.schemaTo)), ta = L.map((e) => Ga(e.from.name, e.to.name, e.to.schema)), oa = T.alteredEnums.map((e) => Ha(e.name, e.schema, e.addedValues)).flat() ?? [], ra = T.alteredEnums.map((e) => Qa(e.name, e.schema, e.deletedValues, E)).flat() ?? [], ma = Es.map((e) => Xa(e)) ?? [], ca = vs.map((e) => Ya(e.name, e.schema)), la = Ce.map((e) => Za(e.name, e.schemaFrom, e.schemaTo)), da = z.map((e) => en(e.from.name, e.to.name, e.to.schema)), pa = T.alteredSequences.map((e) => sn(e)).flat() ?? [], ha = Ks.map((e) => an(e)) ?? [], ua = Is.map((e) => nn(e.name)), ia = B.map((e) => tn(e.from.name, e.to.name)), fa = T.alteredRoles.map((e) => on(e)).flat() ?? [], ya = rn(Ts.map((e) => e.name)), Pa = mn(v.map((e) => ({ from: e.from.name, to: e.to.name }))), Ca = cn($s.map((e) => e.name)), ba = I.map((e) => ln(e, E));
  F.push(
    ...[].concat(
      ...I.map(
        (e) => V(
          e.name,
          e.schema,
          Object.values(e.policies).map(f === "push" ? p.unsquashPolicyPush : p.unsquashPolicy)
        )
      )
    )
  );
  const Z = [], ee = [], as = [], _ = [];
  Z.push(
    ...Ms.filter((e) => !e.isExisting).map((e) => ds(
      e.name,
      e.schema,
      e.definition,
      e.materialized,
      e.withNoData,
      e.with,
      e.using,
      e.tablespace
    ))
  ), ee.push(
    ...Ls.filter((e) => !e.isExisting).map((e) => ps(e.name, e.schema, e.materialized))
  ), as.push(
    ...Fe.filter((e) => !e.to.isExisting && !r.views[`${e.from.schema}.${e.from.name}`].isExisting).map((e) => dn(e.to.name, e.from.name, e.to.schema, e.to.materialized))
  ), _.push(
    ...Ke.filter(
      (e) => !l.views[`${e.schemaTo}.${e.name}`].isExisting && !r.views[`${e.schemaFrom}.${e.name}`].isExisting
    ).map((e) => pn(
      e.schemaTo,
      e.schemaFrom,
      e.name,
      l.views[`${e.schemaTo}.${e.name}`].materialized
    ))
  );
  const _a = T.alteredViews.filter((e) => !l.views[`${e.schema}.${e.name}`].isExisting);
  for (const e of _a) {
    const s = `${e.schema}.${e.name}`, { materialized: t, with: a, definition: m, withNoData: d, using: P, tablespace: b } = l.views[s];
    if (e.alteredExisting || e.alteredDefinition && f !== "push") {
      ee.push(ps(e.name, e.schema, t)), Z.push(
        ds(
          e.name,
          e.schema,
          m,
          t,
          d,
          a,
          P,
          b
        )
      );
      continue;
    }
    e.addedWithOption && _.push(
      le(
        e.name,
        e.schema,
        t,
        e.addedWithOption
      )
    ), e.deletedWithOption && _.push(
      hs(
        e.name,
        e.schema,
        t,
        e.deletedWithOption
      )
    ), e.addedWith && _.push(
      le(e.name, e.schema, t, e.addedWith)
    ), e.deletedWith && _.push(
      hs(
        e.name,
        e.schema,
        t,
        e.deletedWith
      )
    ), e.alteredWith && _.push(
      le(
        e.name,
        e.schema,
        t,
        e.alteredWith
      )
    ), e.alteredTablespace && _.push(
      hn(
        e.name,
        e.schema,
        t,
        e.alteredTablespace.__new
      )
    ), e.alteredUsing && _.push(
      un(
        e.name,
        e.schema,
        t,
        e.alteredUsing.__new
      )
    );
  }
  o.push(...ya), o.push(...Pa), o.push(...sa), o.push(...na), o.push(...ta), o.push(...oa), o.push(...ma), o.push(...la), o.push(...da), o.push(...pa), o.push(...ia), o.push(...ua), o.push(...ha), o.push(...fa), o.push(...ba), o.push(...Y), o.push(...W), o.push(...ee), o.push(...as), o.push(..._), o.push(...Gs), o.push(...ze), o.push(...Hs), o.push(...X), o.push(...Me), o.push(...Be), o.push(...ea), o.push(...Qe), o.push(...Ne), o.push(...Xs), o.push(...Ue), o.push(...xe), o.push(...Ys), o.push(...Bs), o.push(...Zs), o.push(...He), o.push(...Oe), o.push(...We), o.push(...Ve), o.push(...Ge), o.push(...Le), o.push(...ra), o.push(...Z), o.push(...Ye), o.push(...x), o.push(...F), o.push(...Xe), o.push(...Ze), o.push(...N), o.push(...U), o.push(...es), o.push(...aa), o.push(...ca), o.push(...Ca);
  const ns = o.filter((e) => !(e.type === "alter_table_alter_column_drop_notnull" && o.find(
    (s) => s.type === "alter_table_alter_column_drop_identity" && s.tableName === e.tableName && s.schema === e.schema
  ) || e.type === "alter_table_alter_column_set_notnull" && o.find(
    (s) => s.type === "alter_table_alter_column_set_identity" && s.tableName === e.tableName && s.schema === e.schema
  ))).filter((e) => !(e.type === "alter_type_add_value" && o.find(
    (s) => s.type === "alter_type_drop_value" && s.name === e.name && s.schema === e.schema
  ))), Sa = Ja(ns, "postgresql", f), se = [];
  Sa.forEach((e) => {
    se.includes(e) || se.push(e);
  });
  const ga = v.map((e) => ({
    from: e.from.name,
    to: e.to.name
  })), qa = G.map((e) => ({ from: e.from, to: e.to })), wa = bn(ga, qa, Qs);
  return {
    statements: ns,
    sqlStatements: se,
    _meta: wa
  };
};
export {
  Rn as alteredPgViewSchema,
  Tn as alteredTableScheme,
  xn as applyPgSnapshotsDiff,
  kn as diffResultScheme,
  w as makePatched,
  On as makeSelfOrPatched
};
