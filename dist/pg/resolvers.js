const i = (l) => async (t) => {
  try {
    if (t.created.length === 0 || t.deleted.length === 0 || l.size === 0)
      return {
        tableName: t.tableName,
        schema: t.schema,
        created: t.created,
        renamed: [],
        deleted: t.deleted
      };
    let e = [...t.created], d = [...t.deleted];
    const o = [], n = t.schema || "public";
    for (const m of l) {
      const [f, a] = m.split("->"), r = d.findIndex((c) => `${n}.${t.tableName}.${c.name}` === f);
      if (r >= 0) {
        const c = e.findIndex((s) => `${n}.${t.tableName}.${s.name}` === a);
        o.push({
          from: d[r],
          to: e[c]
        }), delete e[c], delete d[r], e = e.filter(Boolean), d = d.filter(Boolean);
      }
    }
    return {
      tableName: t.tableName,
      schema: t.schema,
      created: e,
      deleted: d,
      renamed: o
    };
  } catch (e) {
    throw console.error(e), e;
  }
}, x = (l) => async (t) => {
  try {
    if (t.created.length === 0 || t.deleted.length === 0 || l.size === 0)
      return {
        created: t.created,
        renamed: [],
        deleted: t.deleted
      };
    let e = [...t.created], d = [...t.deleted];
    const o = { created: [], renamed: [], deleted: [] };
    for (const n of l) {
      const [m, f] = n.split("->"), a = d.findIndex((r) => r.name === m);
      if (a >= 0) {
        const r = e.findIndex((c) => c.name === f);
        o.renamed.push({
          from: d[a],
          to: e[r]
        }), delete e[r], delete d[a], e = e.filter(Boolean), d = d.filter(Boolean);
      }
    }
    return o.created = e, o.deleted = d, o;
  } catch (e) {
    throw console.error(e), e;
  }
}, $ = (l) => async (t) => {
  try {
    if (t.created.length === 0 || t.deleted.length === 0 || l.size === 0)
      return {
        created: t.created,
        moved: [],
        renamed: [],
        deleted: t.deleted
      };
    let e = [...t.created], d = [...t.deleted];
    const o = { created: [], renamed: [], deleted: [], moved: [] };
    for (const n of l) {
      const [m, f] = n.split("->"), a = d.findIndex((r) => `${r.schema || "public"}.${r.name}` === m);
      if (a >= 0) {
        const r = e.findIndex((h) => `${h.schema || "public"}.${h.name}` === f), c = d[a], s = e[a];
        c.schema !== s.schema && o.moved.push({
          name: c.name,
          schemaFrom: c.schema,
          schemaTo: s.schema
        }), c.name !== s.name && o.renamed.push({
          from: d[a],
          to: e[r]
        }), delete e[r], delete d[a], e = e.filter(Boolean), d = d.filter(Boolean);
      }
    }
    return o.created = e, o.deleted = d, o;
  } catch (e) {
    throw console.error(e), e;
  }
}, b = (l) => async (t) => {
  try {
    if (t.created.length === 0 || t.deleted.length === 0 || l.size === 0)
      return {
        created: t.created,
        moved: [],
        renamed: [],
        deleted: t.deleted
      };
    let e = [...t.created], d = [...t.deleted];
    const o = { created: [], renamed: [], deleted: [], moved: [] };
    for (const n of l) {
      const [m, f] = n.split("->"), a = d.findIndex((r) => `${r.schema || "public"}.${r.name}` === m);
      if (a >= 0) {
        const r = e.findIndex((h) => `${h.schema || "public"}.${h.name}` === f), c = d[a], s = e[a];
        c.schema !== s.schema && o.moved.push({
          name: c.name,
          schemaFrom: c.schema,
          schemaTo: s.schema
        }), c.name !== s.name && o.renamed.push({
          from: d[a],
          to: e[r]
        }), delete e[r], delete d[a], e = e.filter(Boolean), d = d.filter(Boolean);
      }
    }
    return o.created = e, o.deleted = d, o;
  } catch (e) {
    throw console.error(e), e;
  }
}, v = (l) => async (t) => {
  try {
    if (t.created.length === 0 || t.deleted.length === 0 || l.size === 0)
      return {
        created: t.created,
        moved: [],
        renamed: [],
        deleted: t.deleted
      };
    let e = [...t.created], d = [...t.deleted];
    const o = { created: [], renamed: [], deleted: [], moved: [] };
    for (const n of l) {
      const [m, f] = n.split("->"), a = d.findIndex((r) => `${r.schema || "public"}.${r.name}` === m);
      if (a >= 0) {
        const r = e.findIndex((h) => `${h.schema || "public"}.${h.name}` === f), c = d[a], s = e[a];
        c.schema !== s.schema && o.moved.push({
          name: c.name,
          schemaFrom: c.schema,
          schemaTo: s.schema
        }), c.name !== s.name && o.renamed.push({
          from: d[a],
          to: e[r]
        }), delete e[r], delete d[a], e = e.filter(Boolean), d = d.filter(Boolean);
      }
    }
    return o.created = e, o.deleted = d, o;
  } catch (e) {
    throw console.error(e), e;
  }
}, y = (l) => async (t) => {
  try {
    if (t.created.length === 0 || t.deleted.length === 0 || l.size === 0)
      return {
        tableName: t.tableName,
        schema: t.schema,
        created: t.created,
        renamed: [],
        deleted: t.deleted
      };
    let e = [...t.created], d = [...t.deleted];
    const o = [], n = t.schema || "public";
    for (const m of l) {
      const [f, a] = m.split("->"), r = d.findIndex((c) => `${n}.${t.tableName}.${c.name}` === f);
      if (r >= 0) {
        const c = e.findIndex((s) => `${n}.${t.tableName}.${s.name}` === a);
        o.push({
          from: d[r],
          to: e[c]
        }), delete e[c], delete d[r], e = e.filter(Boolean), d = d.filter(Boolean);
      }
    }
    return {
      tableName: t.tableName,
      schema: t.schema,
      created: e,
      deleted: d,
      renamed: o
    };
  } catch (e) {
    throw console.error(e), e;
  }
}, T = (l) => async (t) => {
  try {
    if (t.created.length === 0 || t.deleted.length === 0 || l.size === 0)
      return {
        created: t.created,
        renamed: [],
        deleted: t.deleted
      };
    let e = [...t.created], d = [...t.deleted];
    const o = [];
    for (const n of l) {
      const [m, f] = n.split("->"), a = d.findIndex((r) => `${r.on}.${r.name}` === m);
      if (a >= 0) {
        const r = e.findIndex((c) => `${c.on}.${c.name}` === f);
        o.push({
          from: d[a],
          to: e[r]
        }), delete e[r], delete d[a], e = e.filter(Boolean), d = d.filter(Boolean);
      }
    }
    return {
      created: e,
      deleted: d,
      renamed: o
    };
  } catch (e) {
    throw console.error(e), e;
  }
}, g = (l) => async (t) => {
  try {
    if (t.created.length === 0 || t.deleted.length === 0 || l.size === 0)
      return {
        created: t.created,
        renamed: [],
        deleted: t.deleted
      };
    let e = [...t.created], d = [...t.deleted];
    const o = [];
    for (const n of l) {
      const [m, f] = n.split("->"), a = d.findIndex((r) => `${r.name}` === m);
      if (a >= 0) {
        const r = e.findIndex((c) => `${c.name}` === f);
        o.push({
          from: d[a],
          to: e[r]
        }), delete e[r], delete d[a], e = e.filter(Boolean), d = d.filter(Boolean);
      }
    }
    return {
      created: e,
      deleted: d,
      renamed: o
    };
  } catch (e) {
    throw console.error(e), e;
  }
}, B = (l) => async (t) => {
  try {
    if (t.created.length === 0 || t.deleted.length === 0 || l.size === 0)
      return {
        created: t.created,
        moved: [],
        renamed: [],
        deleted: t.deleted
      };
    let e = [...t.created], d = [...t.deleted];
    const o = { created: [], renamed: [], deleted: [], moved: [] };
    for (const n of l) {
      const [m, f] = n.split("->"), a = d.findIndex((r) => `${r.schema || "public"}.${r.name}` === m);
      if (a >= 0) {
        const r = e.findIndex((h) => `${h.schema || "public"}.${h.name}` === f), c = d[a], s = e[a];
        c.schema !== s.schema && o.moved.push({
          name: c.name,
          schemaFrom: c.schema,
          schemaTo: s.schema
        }), c.name !== s.name && o.renamed.push({
          from: d[a],
          to: e[r]
        }), delete e[r], delete d[a], e = e.filter(Boolean), d = d.filter(Boolean);
      }
    }
    return o.created = e, o.deleted = d, o;
  } catch (e) {
    throw console.error(e), e;
  }
};
export {
  i as columnsResolver,
  b as enumsResolver,
  T as indPolicyResolver,
  y as policyResolver,
  g as rolesResolver,
  x as schemasResolver,
  $ as sequencesResolver,
  v as tablesResolver,
  B as viewsResolver
};
