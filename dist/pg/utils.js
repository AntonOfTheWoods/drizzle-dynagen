import { t as f, a as l, C as p } from "../casing-tDA94lCu.js";
const g = (e) => JSON.parse(JSON.stringify(e)), w = (e, r, n) => {
  const a = {
    schemas: {},
    tables: {},
    columns: {}
  };
  return e.forEach((o) => {
    const t = c(o.from), s = c(o.to);
    a.schemas[t] = s;
  }), r.forEach((o) => {
    const t = m(o.from), s = m(o.to);
    a.tables[t] = s;
  }), n.forEach((o) => {
    const t = u(o.from.table, o.from.schema, o.from.column), s = u(o.to.table, o.to.schema, o.to.column);
    a.columns[t] = s;
  }), a;
}, c = (e) => e, m = (e) => e.schema ? `"${e.schema}"."${e.name}"` : `"${e.name}"`, u = (e, r, n) => r ? `"${r}"."${e}"."${n}"` : `"${e}"."${n}"`;
function y(e) {
  return e.replace(/'/g, "''");
}
function C(e, r) {
  return e.name ? !e.keyAsName || r === void 0 ? e.name : r === "camelCase" ? f(e.name) : l(e.name) : "";
}
const d = (e, r) => e.toQuery({
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
  y as escapeSingleQuotes,
  C as getColumnCasing,
  $ as isPgArrayType,
  w as prepareMigrationMeta,
  c as schemaRenameKey,
  d as sqlToStr,
  m as tableRenameKey
};
