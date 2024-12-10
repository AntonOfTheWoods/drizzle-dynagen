function t(e) {
  const r = typeof e;
  return e == null ? "null" : Array.isArray(e) ? "array" : r === "object" && e instanceof Date ? "date" : r;
}
function u(e, r) {
  if (Array.isArray(e))
    return e.map((n) => u(n, r));
  if (typeof e == "object") {
    for (const n in e)
      e[n] = u(e[n], r);
    return e;
  } else return typeof e == "number" && Number.isFinite(e) && !Number.isInteger(e) ? Number(e.toFixed(r)) : e;
}
export {
  t as extendedTypeOf,
  u as roundObj
};
