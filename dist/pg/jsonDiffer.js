import { diff as h } from "../json-diff/index.js";
function M(n) {
  return n.map((e) => {
    const r = e.from, t = e.to;
    return [{ ...r, name: t.name }, t];
  }).map((e) => V(e[0], e[1]));
}
function V(n, a) {
  n.name = a.name;
  const l = h(n, a) || {};
  return l.name = a.name, F(l);
}
function z(n, a) {
  const l = { ...n, name: a.name }, e = h(l, a) || {};
  return e.name = a.name, I(e);
}
const A = (n, a) => {
  const l = [];
  let e = 0;
  for (let t = 0; t < a.length; t++) {
    const c = a[t];
    c.length === 1 ? (l.push({ type: "same", value: n[e] }), e += 1) : c[0] === "-" ? l.push({ type: "removed", value: c[1] }) : l.push({ type: "added", value: c[1], before: "" });
  }
  return l.reverse().reduce(
    (t, c) => (c.type === "same" && (t.prev = c.value), c.type === "added" && t.prev && (c.before = t.prev), t.result.push(c), t),
    { result: [] }
  ).result.reverse();
};
function G(n, a) {
  n = JSON.parse(JSON.stringify(n)), a = JSON.parse(JSON.stringify(a));
  const l = Object.entries(h(n, a) ?? {}), e = l.filter((t) => t[0].endsWith("__added")).map((t) => t[1]), r = l.filter((t) => t[0].endsWith("__deleted")).map((t) => t[1]);
  return { added: e, deleted: r };
}
function H(n, a) {
  n = JSON.parse(JSON.stringify(n)), a = JSON.parse(JSON.stringify(a));
  const l = Object.entries(h(n, a) ?? {}), e = l.filter((t) => t[0].endsWith("__added")).map((t) => t[1]), r = l.filter((t) => t[0].endsWith("__deleted")).map((t) => t[1]);
  return { added: e, deleted: r };
}
function L(n, a) {
  n = JSON.parse(JSON.stringify(n)), a = JSON.parse(JSON.stringify(a));
  const l = h(n, a) ?? {};
  return Object.fromEntries(
    Object.entries(l).filter((r) => !(r[0].includes("__added") || r[0].includes("__deleted"))).map((r) => {
      const t = Object.entries(r[1].columns ?? {}).filter((_) => _[0].endsWith("__deleted")).map((_) => _[1]), c = Object.entries(r[1].columns ?? {}).filter((_) => _[0].endsWith("__added")).map((_) => _[1]);
      r[1].columns = {
        added: c,
        deleted: t
      };
      const p = n[r[0]];
      return [r[0], { name: p.name, schema: p.schema, ...r[1] }];
    })
  );
}
function Q(n, a) {
  n = JSON.parse(JSON.stringify(n)), a = JSON.parse(JSON.stringify(a));
  const l = h(n, a) ?? {};
  return Object.fromEntries(
    Object.entries(l).filter((r) => !(r[0].includes("__added") || r[0].includes("__deleted"))).map((r) => {
      const t = Object.entries(r[1].policies ?? {}).filter((_) => _[0].endsWith("__deleted")).map((_) => _[1]), c = Object.entries(r[1].policies ?? {}).filter((_) => _[0].endsWith("__added")).map((_) => _[1]);
      r[1].policies = {
        added: c,
        deleted: t
      };
      const p = n[r[0]];
      return [r[0], { name: p.name, schema: p.schema, ...r[1] }];
    })
  );
}
function X(n, a) {
  n = JSON.parse(JSON.stringify(n)), a = JSON.parse(JSON.stringify(a));
  const l = h(n, a), e = JSON.parse(JSON.stringify(l || {}));
  e.schemas = e.schemas || {}, e.tables = e.tables || {}, e.enums = e.enums || {}, e.sequences = e.sequences || {}, e.roles = e.roles || {}, e.policies = e.policies || {}, e.views = e.views || {};
  const r = Object.keys(e.schemas);
  for (const s of r)
    if (s.endsWith("__added") || s.endsWith("__deleted")) {
      delete e.schemas[s];
      continue;
    }
  const t = Object.keys(e.tables);
  for (const s of t) {
    if (s.endsWith("__added") || s.endsWith("__deleted")) {
      delete e.tables[s];
      continue;
    }
    const o = n.tables[s];
    e.tables[s] = {
      name: o.name,
      schema: o.schema,
      ...e.tables[s]
    };
  }
  for (const [s, o] of Object.entries(e.tables)) {
    const u = e.tables[s], f = o.columns || {}, y = Object.keys(f);
    for (const d of y)
      if (d.endsWith("__added") || d.endsWith("__deleted")) {
        delete u.columns[d];
        continue;
      }
    Object.keys(f).length === 0 && delete u.columns, "name" in u && "schema" in u && Object.keys(u).length === 2 && delete e.tables[s];
  }
  const p = Object.entries(e.enums).filter((s) => !(s[0].includes("__added") || s[0].includes("__deleted"))).map((s) => {
    const o = n.enums[s[0]], { name: u, schema: f, values: y } = o, d = A(y, s[1].values), b = d.filter((m) => m.type === "added").map((m) => ({
      before: m.before,
      value: m.value
    })), v = d.filter((m) => m.type === "removed").map((m) => m.value);
    return { name: u, schema: f, addedValues: b, deletedValues: v };
  }), W = Object.entries(e.sequences).filter((s) => !(s[0].includes("__added") || s[0].includes("__deleted")) && "values" in s[1]).map((s) => a.sequences[s[0]]), w = Object.entries(e.roles).filter((s) => !(s[0].includes("__added") || s[0].includes("__deleted"))).map((s) => a.roles[s[0]]), N = Object.entries(e.policies).filter((s) => !(s[0].includes("__added") || s[0].includes("__deleted"))).map((s) => a.policies[s[0]]), S = Object.entries(e.views).filter((s) => !(s[0].includes("__added") || s[0].includes("__deleted"))).map(([s, o]) => {
    const u = o.with__deleted, f = o.with__added, y = Object.fromEntries(
      Object.entries(o.with || {}).filter((i) => i[0].endsWith("__deleted")).map(([i, O]) => [i.replace("__deleted", ""), O])
    ), d = Object.fromEntries(
      Object.entries(o.with || {}).filter((i) => i[0].endsWith("__added")).map(([i, O]) => [i.replace("__added", ""), O])
    ), b = Object.fromEntries(
      Object.entries(o.with || {}).filter((i) => typeof i[1].__old < "u" && typeof i[1].__new < "u").map((i) => [i[0], i[1].__new])
    ), v = o.schema, m = o.definition, D = o.isExisting, U = o.tablespace__added, k = o.tablespace__deleted, T = o.tablespace;
    let g;
    U && (g = { __new: U, __old: "pg_default" }), k && (g = { __new: "pg_default", __old: k }), T && (g = T);
    const q = o.using__added, P = o.using__deleted, x = o.using;
    let j;
    q && (j = { __new: q, __old: "heap" }), P && (j = { __new: "heap", __old: P }), x && (j = x);
    const R = o.meta;
    return Object.fromEntries(
      Object.entries({
        name: a.views[s].name,
        schema: a.views[s].schema,
        // pg
        deletedWithOption: u,
        addedWithOption: f,
        deletedWith: Object.keys(y).length ? y : void 0,
        addedWith: Object.keys(d).length ? d : void 0,
        alteredWith: Object.keys(b).length ? b : void 0,
        alteredSchema: v,
        alteredTablespace: g,
        alteredUsing: j,
        // mysql
        alteredMeta: R,
        // common
        alteredDefinition: m,
        alteredExisting: D
      }).filter(([i, O]) => O !== void 0)
    );
  });
  return {
    alteredTablesWithColumns: Object.values(e.tables).map((s) => F(s)),
    alteredEnums: p,
    alteredSequences: W,
    alteredRoles: w,
    alteredViews: S,
    alteredPolicies: N
  };
}
const F = (n) => {
  const a = n.columns ?? {}, l = Object.keys(a).filter((d) => !(d.includes("__deleted") || d.includes("__added"))).map((d) => ({ name: d, ...a[d] })), e = Object.fromEntries(
    Object.entries(n.indexes__deleted || {}).concat(Object.entries(n.indexes || {}).filter((d) => d[0].includes("__deleted"))).map((d) => [d[0].replace("__deleted", ""), d[1]])
  ), r = Object.fromEntries(
    Object.entries(n.indexes__added || {}).concat(Object.entries(n.indexes || {}).filter((d) => d[0].includes("__added"))).map((d) => [d[0].replace("__added", ""), d[1]])
  ), t = Object.fromEntries(
    Object.entries(n.indexes || {}).filter((d) => !d[0].endsWith("__deleted") && !d[0].endsWith("__added"))
  ), c = Object.fromEntries(
    Object.entries(n.policies__deleted || {}).concat(Object.entries(n.policies || {}).filter((d) => d[0].includes("__deleted"))).map((d) => [d[0].replace("__deleted", ""), d[1]])
  ), p = Object.fromEntries(
    Object.entries(n.policies__added || {}).concat(Object.entries(n.policies || {}).filter((d) => d[0].includes("__added"))).map((d) => [d[0].replace("__added", ""), d[1]])
  ), _ = Object.fromEntries(
    Object.entries(n.policies || {}).filter((d) => !d[0].endsWith("__deleted") && !d[0].endsWith("__added"))
  ), W = Object.fromEntries(
    Object.entries(n.foreignKeys__deleted || {}).concat(Object.entries(n.foreignKeys || {}).filter((d) => d[0].includes("__deleted"))).map((d) => [d[0].replace("__deleted", ""), d[1]])
  ), E = Object.fromEntries(
    Object.entries(n.foreignKeys__added || {}).concat(Object.entries(n.foreignKeys || {}).filter((d) => d[0].includes("__added"))).map((d) => [d[0].replace("__added", ""), d[1]])
  ), w = Object.fromEntries(
    Object.entries(n.foreignKeys || {}).filter((d) => !d[0].endsWith("__added") && !d[0].endsWith("__deleted")).map((d) => [d[0], d[1]])
  ), K = Object.fromEntries(
    Object.entries(n.compositePrimaryKeys || {}).filter((d) => d[0].endsWith("__added"))
  ), N = Object.fromEntries(
    Object.entries(n.compositePrimaryKeys || {}).filter((d) => d[0].endsWith("__deleted"))
  ), C = Object.fromEntries(
    Object.entries(n.compositePrimaryKeys || {}).filter((d) => !d[0].endsWith("__deleted") && !d[0].endsWith("__added"))
  ), S = Object.fromEntries(
    Object.entries(n.uniqueConstraints || {}).filter((d) => d[0].endsWith("__added"))
  ), J = Object.fromEntries(
    Object.entries(n.uniqueConstraints || {}).filter((d) => d[0].endsWith("__deleted"))
  ), s = Object.fromEntries(
    Object.entries(n.uniqueConstraints || {}).filter((d) => !d[0].endsWith("__deleted") && !d[0].endsWith("__added"))
  ), o = Object.fromEntries(
    Object.entries(n.checkConstraints || {}).filter((d) => d[0].endsWith("__added"))
  ), u = Object.fromEntries(
    Object.entries(n.checkConstraints || {}).filter((d) => d[0].endsWith("__deleted"))
  ), f = Object.fromEntries(
    Object.entries(n.checkConstraints || {}).filter((d) => !d[0].endsWith("__deleted") && !d[0].endsWith("__added"))
  ), y = l.map((d) => I(d)).filter(Boolean);
  return {
    name: n.name,
    schema: n.schema || "",
    altered: y,
    addedIndexes: r,
    deletedIndexes: e,
    alteredIndexes: t,
    addedForeignKeys: E,
    deletedForeignKeys: W,
    alteredForeignKeys: w,
    addedCompositePKs: K,
    deletedCompositePKs: N,
    alteredCompositePKs: C,
    addedUniqueConstraints: S,
    deletedUniqueConstraints: J,
    alteredUniqueConstraints: s,
    deletedPolicies: c,
    addedPolicies: p,
    alteredPolicies: _,
    addedCheckConstraints: o,
    deletedCheckConstraints: u,
    alteredCheckConstraints: f
  };
}, I = (n) => [n].filter((e) => !("type" in e && e.type.__old.replace(" (", "(") === e.type.__new.replace(" (", "("))).map((e) => typeof e.name != "string" && "__old" in e.name ? {
  ...e,
  name: { type: "changed", old: e.name.__old, new: e.name.__new }
} : e).map((e) => "type" in e ? {
  ...e,
  type: { type: "changed", old: e.type.__old, new: e.type.__new }
} : e).map((e) => {
  if ("default" in e)
    return {
      ...e,
      default: {
        type: "changed",
        old: e.default.__old,
        new: e.default.__new
      }
    };
  if ("default__added" in e) {
    const { default__added: r, ...t } = e;
    return {
      ...t,
      default: { type: "added", value: e.default__added }
    };
  }
  if ("default__deleted" in e) {
    const { default__deleted: r, ...t } = e;
    return {
      ...t,
      default: { type: "deleted", value: e.default__deleted }
    };
  }
  return e;
}).map((e) => {
  if ("generated" in e)
    return "as" in e.generated && "type" in e.generated ? {
      ...e,
      generated: {
        type: "changed",
        old: { as: e.generated.as.__old, type: e.generated.type.__old },
        new: { as: e.generated.as.__new, type: e.generated.type.__new }
      }
    } : "as" in e.generated ? {
      ...e,
      generated: {
        type: "changed",
        old: { as: e.generated.as.__old },
        new: { as: e.generated.as.__new }
      }
    } : {
      ...e,
      generated: {
        type: "changed",
        old: { as: e.generated.type.__old },
        new: { as: e.generated.type.__new }
      }
    };
  if ("generated__added" in e) {
    const { generated__added: r, ...t } = e;
    return {
      ...t,
      generated: { type: "added", value: e.generated__added }
    };
  }
  if ("generated__deleted" in e) {
    const { generated__deleted: r, ...t } = e;
    return {
      ...t,
      generated: { type: "deleted", value: e.generated__deleted }
    };
  }
  return e;
}).map((e) => {
  if ("identity" in e)
    return {
      ...e,
      identity: {
        type: "changed",
        old: e.identity.__old,
        new: e.identity.__new
      }
    };
  if ("identity__added" in e) {
    const { identity__added: r, ...t } = e;
    return {
      ...t,
      identity: { type: "added", value: e.identity__added }
    };
  }
  if ("identity__deleted" in e) {
    const { identity__deleted: r, ...t } = e;
    return {
      ...t,
      identity: { type: "deleted", value: e.identity__deleted }
    };
  }
  return e;
}).map((e) => {
  if ("notNull" in e)
    return {
      ...e,
      notNull: {
        type: "changed",
        old: e.notNull.__old,
        new: e.notNull.__new
      }
    };
  if ("notNull__added" in e) {
    const { notNull__added: r, ...t } = e;
    return {
      ...t,
      notNull: { type: "added", value: e.notNull__added }
    };
  }
  if ("notNull__deleted" in e) {
    const { notNull__deleted: r, ...t } = e;
    return {
      ...t,
      notNull: { type: "deleted", value: e.notNull__deleted }
    };
  }
  return e;
}).map((e) => {
  if ("primaryKey" in e)
    return {
      ...e,
      primaryKey: {
        type: "changed",
        old: e.primaryKey.__old,
        new: e.primaryKey.__new
      }
    };
  if ("primaryKey__added" in e) {
    const { notNull__added: r, ...t } = e;
    return {
      ...t,
      primaryKey: { type: "added", value: e.primaryKey__added }
    };
  }
  if ("primaryKey__deleted" in e) {
    const { notNull__deleted: r, ...t } = e;
    return {
      ...t,
      primaryKey: { type: "deleted", value: e.primaryKey__deleted }
    };
  }
  return e;
}).map((e) => {
  if ("typeSchema" in e)
    return {
      ...e,
      typeSchema: {
        type: "changed",
        old: e.typeSchema.__old,
        new: e.typeSchema.__new
      }
    };
  if ("typeSchema__added" in e) {
    const { typeSchema__added: r, ...t } = e;
    return {
      ...t,
      typeSchema: { type: "added", value: e.typeSchema__added }
    };
  }
  if ("typeSchema__deleted" in e) {
    const { typeSchema__deleted: r, ...t } = e;
    return {
      ...t,
      typeSchema: { type: "deleted", value: e.typeSchema__deleted }
    };
  }
  return e;
}).map((e) => {
  if ("onUpdate" in e)
    return {
      ...e,
      onUpdate: {
        type: "changed",
        old: e.onUpdate.__old,
        new: e.onUpdate.__new
      }
    };
  if ("onUpdate__added" in e) {
    const { onUpdate__added: r, ...t } = e;
    return {
      ...t,
      onUpdate: { type: "added", value: e.onUpdate__added }
    };
  }
  if ("onUpdate__deleted" in e) {
    const { onUpdate__deleted: r, ...t } = e;
    return {
      ...t,
      onUpdate: { type: "deleted", value: e.onUpdate__deleted }
    };
  }
  return e;
}).map((e) => {
  if ("autoincrement" in e)
    return {
      ...e,
      autoincrement: {
        type: "changed",
        old: e.autoincrement.__old,
        new: e.autoincrement.__new
      }
    };
  if ("autoincrement__added" in e) {
    const { autoincrement__added: r, ...t } = e;
    return {
      ...t,
      autoincrement: { type: "added", value: e.autoincrement__added }
    };
  }
  if ("autoincrement__deleted" in e) {
    const { autoincrement__deleted: r, ...t } = e;
    return {
      ...t,
      autoincrement: { type: "deleted", value: e.autoincrement__deleted }
    };
  }
  return e;
}).map((e) => {
  if ("" in e)
    return {
      ...e,
      autoincrement: {
        type: "changed",
        old: e.autoincrement.__old,
        new: e.autoincrement.__new
      }
    };
  if ("autoincrement__added" in e) {
    const { autoincrement__added: r, ...t } = e;
    return {
      ...t,
      autoincrement: { type: "added", value: e.autoincrement__added }
    };
  }
  if ("autoincrement__deleted" in e) {
    const { autoincrement__deleted: r, ...t } = e;
    return {
      ...t,
      autoincrement: { type: "deleted", value: e.autoincrement__deleted }
    };
  }
  return e;
}).filter(Boolean)[0];
export {
  X as applyJsonDiff,
  L as diffColumns,
  z as diffForRenamedColumn,
  M as diffForRenamedTables,
  H as diffIndPolicies,
  Q as diffPolicies,
  G as diffSchemasOrTables
};
