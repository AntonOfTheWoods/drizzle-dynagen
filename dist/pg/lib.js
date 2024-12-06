import { e as p } from "../index-Dnl6cLhO.js";
const I = /[\p{Lu}]/u, h = /[\p{Ll}]/u, C = /^[\p{Lu}](?![\p{Lu}])/gu, L = /([\p{Alpha}\p{N}_]|$)/u, f = /[_.\- ]+/, $ = new RegExp("^" + f.source), g = new RegExp(f.source + L.source, "gu"), E = new RegExp("\\d+" + L.source, "gu"), R = (e, r, a, t) => {
  let o = !1, s = !1, n = !1, A = !1;
  for (let c = 0; c < e.length; c++) {
    const l = e[c];
    A = c > 2 ? e[c - 3] === "-" : !0, o && I.test(l) ? (e = e.slice(0, c) + "-" + e.slice(c), o = !1, n = s, s = !0, c++) : s && n && h.test(l) && (!A || t) ? (e = e.slice(0, c - 1) + "-" + e.slice(c - 1), n = s, s = !1, o = !0) : (o = r(l) === l && a(l) !== l, n = s, s = a(l) === l && r(l) !== l);
  }
  return e;
}, u = (e, r) => (C.lastIndex = 0, e.replaceAll(C, (a) => r(a))), S = (e, r) => (g.lastIndex = 0, E.lastIndex = 0, e.replaceAll(E, (a, t, o) => ["_", "-"].includes(e.charAt(o + a.length)) ? a : r(a)).replaceAll(g, (a, t) => r(t)));
function U(e, r) {
  if (!(typeof e == "string" || Array.isArray(e)))
    throw new TypeError("Expected the input to be `string | string[]`");
  if (r = {
    pascalCase: !1,
    preserveConsecutiveUppercase: !1,
    ...r
  }, Array.isArray(e) ? e = e.map((s) => s.trim()).filter((s) => s.length).join("-") : e = e.trim(), e.length === 0)
    return "";
  const a = r.locale === !1 ? (s) => s.toLowerCase() : (s) => s.toLocaleLowerCase(r.locale), t = r.locale === !1 ? (s) => s.toUpperCase() : (s) => s.toLocaleUpperCase(r.locale);
  return e.length === 1 ? f.test(e) ? "" : r.pascalCase ? t(e) : a(e) : (e !== a(e) && (e = R(e, a, t, r.preserveConsecutiveUppercase)), e = e.replace($, ""), e = r.preserveConsecutiveUppercase ? u(e, a) : a(e), r.pascalCase && (e = t(e.charAt(0)) + e.slice(1)), S(e, t));
}
const T = `--> statement-breakpoint
`, _ = ["snake_case", "camelCase"], i = p(_), v = {
  error: (e) => `${` Invalid input  ${e}`}`,
  warning: (e) => ` Warning  ${e}`,
  errorWarning: (e) => `${` Warning  ${e}`}`,
  fullWarning: (e) => ` Warning  ${e}`,
  suggestion: (e) => ` Suggestion  ${e}`,
  info: (e) => `${e}`
};
function w(e) {
  return console.log("Got options", e), "50cd48fa-3a5b-4e28-b09d-fabc4fac3998";
}
function m(e) {
  return U(String(e));
}
function y(e) {
  return e && e.length > 0 ? `${e.replace(/[A-Z]/g, (r) => `_${r.toLowerCase()}`)}` : String(e);
}
export {
  T as BREAKPOINT,
  m as camelCase,
  i as casingType,
  _ as casingTypes,
  w as randomUUID,
  y as snake_case,
  v as withStyle
};
