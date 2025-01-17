import { t as f, a as l, C as p } from "../casing-BBE-_e8-.js";
const g = (e) => JSON.parse(JSON.stringify(e)), w = (e, r, s) => {
  const a = {
    schemas: {},
    tables: {},
    columns: {}
  };
  return e.forEach((o) => {
    const t = c(o.from), n = c(o.to);
    a.schemas[t] = n;
  }), r.forEach((o) => {
    const t = m(o.from), n = m(o.to);
    a.tables[t] = n;
  }), s.forEach((o) => {
    const t = u(o.from.table, o.from.schema, o.from.column), n = u(o.to.table, o.to.schema, o.to.column);
    a.columns[t] = n;
  }), a;
}, c = (e) => e, m = (e) => e.schema ? `"${e.schema}"."${e.name}"` : `"${e.name}"`, u = (e, r, s) => r ? `"${r}"."${e}"."${s}"` : `"${e}"."${s}"`;
function d(e) {
  return e.replace(/'/g, "''");
}
function y(e, r) {
  return e.name ? !e.keyAsName || r === void 0 ? e.name : r === "camelCase" ? f(e.name) : l(e.name) : "";
}
const C = (e, r) => e.toQuery({
  escapeName: () => {
    throw new Error("we don't support params for `sql` default values");
  },
  escapeParam: () => {
    throw new Error("we don't support params for `sql` default values");
  },
  escapeString: () => {
    throw new Error("we don't support params for `sql` default values");
  },
  casing: new p(r)
}).sql;
function $(e) {
  return e.match(/.*\[\d*\].*|.*\[\].*/g) !== null;
}
export {
  u as columnRenameKey,
  g as copy,
  d as escapeSingleQuotes,
  y as getColumnCasing,
  $ as isPgArrayType,
  w as prepareMigrationMeta,
  c as schemaRenameKey,
  C as sqlToStr,
  m as tableRenameKey
};
