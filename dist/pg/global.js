const u = "00000000-0000-0000-0000-000000000000", i = "7", l = {
  version: "7",
  dialect: "postgresql",
  tables: {},
  enums: {},
  schemas: {},
  views: {},
  policies: {},
  sequences: {},
  roles: {}
}, a = /* @__PURE__ */ new Set([]), m = (t, n) => Object.keys(t).reduce(
  function(s, e) {
    return s[e] = n(t[e]), s;
  },
  {}
), p = (t, n) => Object.fromEntries(
  Object.entries(t).map(([s, e]) => [n(s, e), e])
), E = (t, n) => Object.fromEntries(
  Object.entries(t).map(([s, e]) => {
    const [r, o] = n(s, e);
    return [r, o];
  })
), w = (t, n) => Object.fromEntries(
  Object.entries(t).map(([s, e]) => {
    const [r, o] = n(s, e);
    return [r, o];
  })
);
export {
  a as EMPTY_RENAMES,
  l as EMPTY_SQUASHED_SCHEMA,
  w as customMapEntries,
  E as mapEntries,
  p as mapKeys,
  m as mapValues,
  u as originUUID,
  i as snapshotVersion
};
