import { e as p } from "../index-Dnl6cLhO.js";
const h = /[\p{Lu}]/u, I = /[\p{Ll}]/u, C = /^[\p{Lu}](?![\p{Lu}])/gu, L = /([\p{Alpha}\p{N}_]|$)/u, f = /[_.\- ]+/, $ = new RegExp("^" + f.source), E = new RegExp(f.source + L.source, "gu"), g = new RegExp("\\d+" + L.source, "gu"), R = (e, r, a, t) => {
  let o = !1, s = !1, n = !1, A = !1;
  for (let l = 0; l < e.length; l++) {
    const c = e[l];
    A = l > 2 ? e[l - 3] === "-" : !0, o && h.test(c) ? (e = e.slice(0, l) + "-" + e.slice(l), o = !1, n = s, s = !0, l++) : s && n && I.test(c) && (!A || t) ? (e = e.slice(0, l - 1) + "-" + e.slice(l - 1), n = s, s = !1, o = !0) : (o = r(c) === c && a(c) !== c, n = s, s = a(c) === c && r(c) !== c);
  }
  return e;
}, S = (e, r) => (C.lastIndex = 0, e.replaceAll(C, (a) => r(a))), _ = (e, r) => (E.lastIndex = 0, g.lastIndex = 0, e.replaceAll(g, (a, t, o) => ["_", "-"].includes(e.charAt(o + a.length)) ? a : r(a)).replaceAll(E, (a, t) => r(t)));
function T(e, r) {
  if (!(typeof e == "string" || Array.isArray(e)))
    throw new TypeError("Expected the input to be `string | string[]`");
  if (r = {
    pascalCase: !1,
    preserveConsecutiveUppercase: !1,
    ...r
  }, Array.isArray(e) ? e = e.map((s) => s.trim()).filter((s) => s.length).join("-") : e = e.trim(), e.length === 0)
    return "";
  const a = r.locale === !1 ? (s) => s.toLowerCase() : (s) => s.toLocaleLowerCase(r.locale), t = r.locale === !1 ? (s) => s.toUpperCase() : (s) => s.toLocaleUpperCase(r.locale);
  return e.length === 1 ? f.test(e) ? "" : r.pascalCase ? t(e) : a(e) : (e !== a(e) && (e = R(e, a, t, r.preserveConsecutiveUppercase)), e = e.replace($, ""), e = r.preserveConsecutiveUppercase ? S(e, a) : a(e), r.pascalCase && (e = t(e.charAt(0)) + e.slice(1)), _(e, t));
}
const w = `--> statement-breakpoint
`, u = ["snake_case", "camelCase"], U = p(u), y = {
  error: (e) => `${` Invalid input  ${e}`}`,
  warning: (e) => ` Warning  ${e}`,
  errorWarning: (e) => `${` Warning  ${e}`}`,
  fullWarning: (e) => ` Warning  ${e}`,
  suggestion: (e) => ` Suggestion  ${e}`,
  info: (e) => `${e}`
};
function N(e) {
  return T(String(e));
}
function d(e) {
  return e && e.length > 0 ? `${e.replace(/[A-Z]/g, (r) => `_${r.toLowerCase()}`)}` : String(e);
}
export {
  w as BREAKPOINT,
  N as camelCase,
  U as casingType,
  u as casingTypes,
  d as snake_case,
  y as withStyle
};
