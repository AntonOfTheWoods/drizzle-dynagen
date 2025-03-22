var P = Object.defineProperty;
var w = (a, e, s) => e in a ? P(a, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[e] = s;
var t = (a, e, s) => w(a, typeof e != "symbol" ? e + "" : e, s);
import { p as q, a as N, b as d, c as b, S as V, s as v, i as W, d as E, e as z, P as L, f as O, g as Q } from "../view-DDfO9v7q.js";
import { i as n, e as f } from "../casing-tDA94lCu.js";
var l;
l = f;
class r {
  constructor(e, s, c) {
    this.seqName = e, this.seqOptions = s, this.schema = c;
  }
}
t(r, l, "PgSequence");
function x(a, e, s) {
  return new r(a, e, s);
}
function y(a) {
  return n(a, r);
}
var g;
g = f;
class S {
  constructor(e) {
    t(this, "table", (e, s, c) => q(e, s, c, this.schemaName));
    t(this, "view", (e, s) => N(e, s, this.schemaName));
    t(this, "materializedView", (e, s) => d(e, s, this.schemaName));
    t(this, "enum", (e, s) => b(e, s, this.schemaName));
    t(this, "sequence", (e, s) => x(e, s, this.schemaName));
    this.schemaName = e;
  }
  getSQL() {
    return new V([v.identifier(this.schemaName)]);
  }
  shouldOmitSQLParens() {
    return !0;
  }
}
t(S, g, "PgSchema");
const K = (a) => {
  const e = [], s = [], c = [], h = [], u = [], m = [], o = [], p = [];
  return Object.values(a).forEach((i) => {
    if (W(i)) {
      s.push(i);
      return;
    }
    n(i, L) && e.push(i), n(i, S) && c.push(i), E(i) && o.push(i), z(i) && p.push(i), y(i) && h.push(i), n(i, O) && u.push(i), n(i, Q) && m.push(i);
  }), { tables: e, enums: s, schemas: c, sequences: h, views: o, matViews: p, roles: u, policies: m };
};
export {
  K as prepareFromExports
};
