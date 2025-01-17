var v;
(function(r) {
  r.assertEqual = (s) => s;
  function e(s) {
  }
  r.assertIs = e;
  function t(s) {
    throw new Error();
  }
  r.assertNever = t, r.arrayToEnum = (s) => {
    const a = {};
    for (const i of s)
      a[i] = i;
    return a;
  }, r.getValidEnumValues = (s) => {
    const a = r.objectKeys(s).filter((d) => typeof s[s[d]] != "number"), i = {};
    for (const d of a)
      i[d] = s[d];
    return r.objectValues(i);
  }, r.objectValues = (s) => r.objectKeys(s).map(function(a) {
    return s[a];
  }), r.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const a = [];
    for (const i in s)
      Object.prototype.hasOwnProperty.call(s, i) && a.push(i);
    return a;
  }, r.find = (s, a) => {
    for (const i of s)
      if (a(i))
        return i;
  }, r.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, a = " | ") {
    return s.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  r.joinValues = n, r.jsonStringifyReplacer = (s, a) => typeof a == "bigint" ? a.toString() : a;
})(v || (v = {}));
var be;
(function(r) {
  r.mergeShapes = (e, t) => ({
    ...e,
    ...t
    // second overwrites first
  });
})(be || (be = {}));
const l = v.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), E = (r) => {
  switch (typeof r) {
    case "undefined":
      return l.undefined;
    case "string":
      return l.string;
    case "number":
      return isNaN(r) ? l.nan : l.number;
    case "boolean":
      return l.boolean;
    case "function":
      return l.function;
    case "bigint":
      return l.bigint;
    case "symbol":
      return l.symbol;
    case "object":
      return Array.isArray(r) ? l.array : r === null ? l.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? l.promise : typeof Map < "u" && r instanceof Map ? l.map : typeof Set < "u" && r instanceof Set ? l.set : typeof Date < "u" && r instanceof Date ? l.date : l.object;
    default:
      return l.unknown;
  }
}, o = v.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class T extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const t = e || function(a) {
      return a.message;
    }, n = { _errors: [] }, s = (a) => {
      for (const i of a.issues)
        if (i.code === "invalid_union")
          i.unionErrors.map(s);
        else if (i.code === "invalid_return_type")
          s(i.returnTypeError);
        else if (i.code === "invalid_arguments")
          s(i.argumentsError);
        else if (i.path.length === 0)
          n._errors.push(t(i));
        else {
          let d = n, f = 0;
          for (; f < i.path.length; ) {
            const u = i.path[f];
            f === i.path.length - 1 ? (d[u] = d[u] || { _errors: [] }, d[u]._errors.push(t(i))) : d[u] = d[u] || { _errors: [] }, d = d[u], f++;
          }
        }
    };
    return s(this), n;
  }
  static assert(e) {
    if (!(e instanceof T))
      throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, v.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, n = [];
    for (const s of this.issues)
      s.path.length > 0 ? (t[s.path[0]] = t[s.path[0]] || [], t[s.path[0]].push(e(s))) : n.push(e(s));
    return { formErrors: n, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
T.create = (r) => new T(r);
const q = (r, e) => {
  let t;
  switch (r.code) {
    case o.invalid_type:
      r.received === l.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case o.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, v.jsonStringifyReplacer)}`;
      break;
    case o.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${v.joinValues(r.keys, ", ")}`;
      break;
    case o.invalid_union:
      t = "Invalid input";
      break;
    case o.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${v.joinValues(r.options)}`;
      break;
    case o.invalid_enum_value:
      t = `Invalid enum value. Expected ${v.joinValues(r.options)}, received '${r.received}'`;
      break;
    case o.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case o.invalid_return_type:
      t = "Invalid function return type";
      break;
    case o.invalid_date:
      t = "Invalid date";
      break;
    case o.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : v.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case o.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case o.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case o.custom:
      t = "Invalid input";
      break;
    case o.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case o.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case o.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, v.assertNever(r);
  }
  return { message: t };
};
let Re = q;
function le() {
  return Re;
}
const fe = (r) => {
  const { data: e, path: t, errorMaps: n, issueData: s } = r, a = [...t, ...s.path || []], i = {
    ...s,
    path: a
  };
  if (s.message !== void 0)
    return {
      ...s,
      path: a,
      message: s.message
    };
  let d = "";
  const f = n.filter((u) => !!u).slice().reverse();
  for (const u of f)
    d = u(i, { data: e, defaultError: d }).message;
  return {
    ...s,
    path: a,
    message: d
  };
};
function c(r, e) {
  const t = le(), n = fe({
    issueData: e,
    data: r.data,
    path: r.path,
    errorMaps: [
      r.common.contextualErrorMap,
      // contextual error map is first priority
      r.schemaErrorMap,
      // then schema-bound map if available
      t,
      // then global override map
      t === q ? void 0 : q
      // then global default map
    ].filter((s) => !!s)
  });
  r.common.issues.push(n);
}
class k {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const n = [];
    for (const s of t) {
      if (s.status === "aborted")
        return _;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, t) {
    const n = [];
    for (const s of t) {
      const a = await s.key, i = await s.value;
      n.push({
        key: a,
        value: i
      });
    }
    return k.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, t) {
    const n = {};
    for (const s of t) {
      const { key: a, value: i } = s;
      if (a.status === "aborted" || i.status === "aborted")
        return _;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || s.alwaysSet) && (n[a.value] = i.value);
    }
    return { status: e.value, value: n };
  }
}
const _ = Object.freeze({
  status: "aborted"
}), U = (r) => ({ status: "dirty", value: r }), b = (r) => ({ status: "valid", value: r }), we = (r) => r.status === "aborted", Te = (r) => r.status === "dirty", P = (r) => r.status === "valid", G = (r) => typeof Promise < "u" && r instanceof Promise;
function H(r, e, t, n) {
  if (typeof e == "function" ? r !== e || !0 : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(r);
}
function Se(r, e, t, n, s) {
  if (typeof e == "function" ? r !== e || !0 : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(r, t), t;
}
var h;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(h || (h = {}));
var B, F;
class S {
  constructor(e, t, n, s) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ce = (r, e) => {
  if (P(e))
    return { success: !0, data: e.value };
  if (!r.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const t = new T(r.common.issues);
      return this._error = t, this._error;
    }
  };
};
function y(r) {
  if (!r)
    return {};
  const { errorMap: e, invalid_type_error: t, required_error: n, description: s } = r;
  if (e && (t || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: s } : { errorMap: (i, d) => {
    var f, u;
    const { message: m } = r;
    return i.code === "invalid_enum_value" ? { message: m ?? d.defaultError } : typeof d.data > "u" ? { message: (f = m ?? n) !== null && f !== void 0 ? f : d.defaultError } : i.code !== "invalid_type" ? { message: d.defaultError } : { message: (u = m ?? t) !== null && u !== void 0 ? u : d.defaultError };
  }, description: s };
}
class g {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return E(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || {
      common: e.parent.common,
      data: e.data,
      parsedType: E(e.data),
      schemaErrorMap: this._def.errorMap,
      path: e.path,
      parent: e.parent
    };
  }
  _processInputParams(e) {
    return {
      status: new k(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: E(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent
      }
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (G(t))
      throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const n = this.safeParse(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(e, t) {
    var n;
    const s = {
      common: {
        issues: [],
        async: (n = t == null ? void 0 : t.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: t == null ? void 0 : t.errorMap
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: E(e)
    }, a = this._parseSync({ data: e, path: s.path, parent: s });
    return Ce(s, a);
  }
  "~validate"(e) {
    var t, n;
    const s = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: E(e)
    };
    if (!this["~standard"].async)
      try {
        const a = this._parseSync({ data: e, path: [], parent: s });
        return P(a) ? {
          value: a.value
        } : {
          issues: s.common.issues
        };
      } catch (a) {
        !((n = (t = a == null ? void 0 : a.message) === null || t === void 0 ? void 0 : t.toLowerCase()) === null || n === void 0) && n.includes("encountered") && (this["~standard"].async = !0), s.common = {
          issues: [],
          async: !0
        };
      }
    return this._parseAsync({ data: e, path: [], parent: s }).then((a) => P(a) ? {
      value: a.value
    } : {
      issues: s.common.issues
    });
  }
  async parseAsync(e, t) {
    const n = await this.safeParseAsync(e, t);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(e, t) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: t == null ? void 0 : t.errorMap,
        async: !0
      },
      path: (t == null ? void 0 : t.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: E(e)
    }, s = this._parse({ data: e, path: n.path, parent: n }), a = await (G(s) ? s : Promise.resolve(s));
    return Ce(n, a);
  }
  refine(e, t) {
    const n = (s) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(s) : t;
    return this._refinement((s, a) => {
      const i = e(s), d = () => a.addIssue({
        code: o.custom,
        ...n(s)
      });
      return typeof Promise < "u" && i instanceof Promise ? i.then((f) => f ? !0 : (d(), !1)) : i ? !0 : (d(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((n, s) => e(n) ? !0 : (s.addIssue(typeof t == "function" ? t(n, s) : t), !1));
  }
  _refinement(e) {
    return new R({
      schema: this,
      typeName: p.ZodEffects,
      effect: { type: "refinement", refinement: e }
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (t) => this["~validate"](t)
    };
  }
  optional() {
    return N.create(this, this._def);
  }
  nullable() {
    return $.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return C.create(this);
  }
  promise() {
    return Y.create(this, this._def);
  }
  or(e) {
    return K.create([this, e], this._def);
  }
  and(e) {
    return ee.create(this, e, this._def);
  }
  transform(e) {
    return new R({
      ...y(this._def),
      schema: this,
      typeName: p.ZodEffects,
      effect: { type: "transform", transform: e }
    });
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ae({
      ...y(this._def),
      innerType: this,
      defaultValue: t,
      typeName: p.ZodDefault
    });
  }
  brand() {
    return new Ze({
      typeName: p.ZodBranded,
      type: this,
      ...y(this._def)
    });
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ie({
      ...y(this._def),
      innerType: this,
      catchValue: t,
      typeName: p.ZodCatch
    });
  }
  describe(e) {
    const t = this.constructor;
    return new t({
      ...this._def,
      description: e
    });
  }
  pipe(e) {
    return oe.create(this, e);
  }
  readonly() {
    return de.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Ee = /^c[^\s-]{8,}$/i, je = /^[0-9a-z]+$/, Ie = /^[0-9A-HJKMNP-TV-Z]{26}$/i, $e = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Me = /^[a-z0-9_-]{21}$/i, Ve = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Pe = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Le = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, ze = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ue;
const De = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ue = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Be = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, Fe = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, We = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, qe = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, Oe = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Je = new RegExp(`^${Oe}$`);
function Ae(r) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Ye(r) {
  return new RegExp(`^${Ae(r)}$`);
}
function Ge(r) {
  let e = `${Oe}T${Ae(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function He(r, e) {
  return !!((e === "v4" || !e) && De.test(r) || (e === "v6" || !e) && Be.test(r));
}
function Xe(r, e) {
  if (!Ve.test(r))
    return !1;
  try {
    const [t] = r.split("."), n = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), s = JSON.parse(atob(n));
    return !(typeof s != "object" || s === null || !s.typ || !s.alg || e && s.alg !== e);
  } catch {
    return !1;
  }
}
function Qe(r, e) {
  return !!((e === "v4" || !e) && Ue.test(r) || (e === "v6" || !e) && Fe.test(r));
}
class A extends g {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== l.string) {
      const a = this._getOrReturnCtx(e);
      return c(a, {
        code: o.invalid_type,
        expected: l.string,
        received: a.parsedType
      }), _;
    }
    const n = new k();
    let s;
    for (const a of this._def.checks)
      if (a.kind === "min")
        e.data.length < a.value && (s = this._getOrReturnCtx(e, s), c(s, {
          code: o.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "max")
        e.data.length > a.value && (s = this._getOrReturnCtx(e, s), c(s, {
          code: o.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: a.message
        }), n.dirty());
      else if (a.kind === "length") {
        const i = e.data.length > a.value, d = e.data.length < a.value;
        (i || d) && (s = this._getOrReturnCtx(e, s), i ? c(s, {
          code: o.too_big,
          maximum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }) : d && c(s, {
          code: o.too_small,
          minimum: a.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: a.message
        }), n.dirty());
      } else if (a.kind === "email")
        Le.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
          validation: "email",
          code: o.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "emoji")
        ue || (ue = new RegExp(ze, "u")), ue.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
          validation: "emoji",
          code: o.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "uuid")
        $e.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
          validation: "uuid",
          code: o.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "nanoid")
        Me.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
          validation: "nanoid",
          code: o.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid")
        Ee.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
          validation: "cuid",
          code: o.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "cuid2")
        je.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
          validation: "cuid2",
          code: o.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "ulid")
        Ie.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
          validation: "ulid",
          code: o.invalid_string,
          message: a.message
        }), n.dirty());
      else if (a.kind === "url")
        try {
          new URL(e.data);
        } catch {
          s = this._getOrReturnCtx(e, s), c(s, {
            validation: "url",
            code: o.invalid_string,
            message: a.message
          }), n.dirty();
        }
      else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
        validation: "regex",
        code: o.invalid_string,
        message: a.message
      }), n.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (s = this._getOrReturnCtx(e, s), c(s, {
        code: o.invalid_string,
        validation: { includes: a.value, position: a.position },
        message: a.message
      }), n.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (s = this._getOrReturnCtx(e, s), c(s, {
        code: o.invalid_string,
        validation: { startsWith: a.value },
        message: a.message
      }), n.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (s = this._getOrReturnCtx(e, s), c(s, {
        code: o.invalid_string,
        validation: { endsWith: a.value },
        message: a.message
      }), n.dirty()) : a.kind === "datetime" ? Ge(a).test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
        code: o.invalid_string,
        validation: "datetime",
        message: a.message
      }), n.dirty()) : a.kind === "date" ? Je.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
        code: o.invalid_string,
        validation: "date",
        message: a.message
      }), n.dirty()) : a.kind === "time" ? Ye(a).test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
        code: o.invalid_string,
        validation: "time",
        message: a.message
      }), n.dirty()) : a.kind === "duration" ? Pe.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
        validation: "duration",
        code: o.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "ip" ? He(e.data, a.version) || (s = this._getOrReturnCtx(e, s), c(s, {
        validation: "ip",
        code: o.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "jwt" ? Xe(e.data, a.alg) || (s = this._getOrReturnCtx(e, s), c(s, {
        validation: "jwt",
        code: o.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "cidr" ? Qe(e.data, a.version) || (s = this._getOrReturnCtx(e, s), c(s, {
        validation: "cidr",
        code: o.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "base64" ? We.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
        validation: "base64",
        code: o.invalid_string,
        message: a.message
      }), n.dirty()) : a.kind === "base64url" ? qe.test(e.data) || (s = this._getOrReturnCtx(e, s), c(s, {
        validation: "base64url",
        code: o.invalid_string,
        message: a.message
      }), n.dirty()) : v.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((s) => e.test(s), {
      validation: t,
      code: o.invalid_string,
      ...h.errToObj(n)
    });
  }
  _addCheck(e) {
    return new A({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...h.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...h.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...h.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...h.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...h.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...h.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...h.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...h.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...h.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({
      kind: "base64url",
      ...h.errToObj(e)
    });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...h.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...h.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...h.errToObj(e) });
  }
  datetime(e) {
    var t, n;
    return typeof e == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: e
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : !1,
      local: (n = e == null ? void 0 : e.local) !== null && n !== void 0 ? n : !1,
      ...h.errToObj(e == null ? void 0 : e.message)
    });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: e
    }) : this._addCheck({
      kind: "time",
      precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision,
      ...h.errToObj(e == null ? void 0 : e.message)
    });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...h.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({
      kind: "regex",
      regex: e,
      ...h.errToObj(t)
    });
  }
  includes(e, t) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: t == null ? void 0 : t.position,
      ...h.errToObj(t == null ? void 0 : t.message)
    });
  }
  startsWith(e, t) {
    return this._addCheck({
      kind: "startsWith",
      value: e,
      ...h.errToObj(t)
    });
  }
  endsWith(e, t) {
    return this._addCheck({
      kind: "endsWith",
      value: e,
      ...h.errToObj(t)
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e,
      ...h.errToObj(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e,
      ...h.errToObj(t)
    });
  }
  length(e, t) {
    return this._addCheck({
      kind: "length",
      value: e,
      ...h.errToObj(t)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(e) {
    return this.min(1, h.errToObj(e));
  }
  trim() {
    return new A({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new A({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new A({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
A.create = (r) => {
  var e;
  return new A({
    checks: [],
    typeName: p.ZodString,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...y(r)
  });
};
function Ke(r, e) {
  const t = (r.toString().split(".")[1] || "").length, n = (e.toString().split(".")[1] || "").length, s = t > n ? t : n, a = parseInt(r.toFixed(s).replace(".", "")), i = parseInt(e.toFixed(s).replace(".", ""));
  return a % i / Math.pow(10, s);
}
class L extends g {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== l.number) {
      const a = this._getOrReturnCtx(e);
      return c(a, {
        code: o.invalid_type,
        expected: l.number,
        received: a.parsedType
      }), _;
    }
    let n;
    const s = new k();
    for (const a of this._def.checks)
      a.kind === "int" ? v.isInteger(e.data) || (n = this._getOrReturnCtx(e, n), c(n, {
        code: o.invalid_type,
        expected: "integer",
        received: "float",
        message: a.message
      }), s.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), c(n, {
        code: o.too_small,
        minimum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), c(n, {
        code: o.too_big,
        maximum: a.value,
        type: "number",
        inclusive: a.inclusive,
        exact: !1,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? Ke(e.data, a.value) !== 0 && (n = this._getOrReturnCtx(e, n), c(n, {
        code: o.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (n = this._getOrReturnCtx(e, n), c(n, {
        code: o.not_finite,
        message: a.message
      }), s.dirty()) : v.assertNever(a);
    return { status: s.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, n, s) {
    return new L({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: h.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new L({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  int(e) {
    return this._addCheck({
      kind: "int",
      message: h.toString(e)
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: h.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: h.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: h.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: h.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t)
    });
  }
  finite(e) {
    return this._addCheck({
      kind: "finite",
      message: h.toString(e)
    });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: h.toString(e)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: h.toString(e)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && v.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (t === null || n.value > t) && (t = n.value) : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
L.create = (r) => new L({
  checks: [],
  typeName: p.ZodNumber,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...y(r)
});
class z extends g {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== l.bigint)
      return this._getInvalidInput(e);
    let n;
    const s = new k();
    for (const a of this._def.checks)
      a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (n = this._getOrReturnCtx(e, n), c(n, {
        code: o.too_small,
        type: "bigint",
        minimum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (n = this._getOrReturnCtx(e, n), c(n, {
        code: o.too_big,
        type: "bigint",
        maximum: a.value,
        inclusive: a.inclusive,
        message: a.message
      }), s.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (n = this._getOrReturnCtx(e, n), c(n, {
        code: o.not_multiple_of,
        multipleOf: a.value,
        message: a.message
      }), s.dirty()) : v.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return c(t, {
      code: o.invalid_type,
      expected: l.bigint,
      received: t.parsedType
    }), _;
  }
  gte(e, t) {
    return this.setLimit("min", e, !0, h.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, !1, h.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, !0, h.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, !1, h.toString(t));
  }
  setLimit(e, t, n, s) {
    return new z({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: e,
          value: t,
          inclusive: n,
          message: h.toString(s)
        }
      ]
    });
  }
  _addCheck(e) {
    return new z({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e)
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: h.toString(e)
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e)
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: h.toString(e)
    });
  }
  multipleOf(e, t) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: h.toString(t)
    });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
z.create = (r) => {
  var e;
  return new z({
    checks: [],
    typeName: p.ZodBigInt,
    coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : !1,
    ...y(r)
  });
};
class he extends g {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== l.boolean) {
      const n = this._getOrReturnCtx(e);
      return c(n, {
        code: o.invalid_type,
        expected: l.boolean,
        received: n.parsedType
      }), _;
    }
    return b(e.data);
  }
}
he.create = (r) => new he({
  typeName: p.ZodBoolean,
  coerce: (r == null ? void 0 : r.coerce) || !1,
  ...y(r)
});
class J extends g {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== l.date) {
      const a = this._getOrReturnCtx(e);
      return c(a, {
        code: o.invalid_type,
        expected: l.date,
        received: a.parsedType
      }), _;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return c(a, {
        code: o.invalid_date
      }), _;
    }
    const n = new k();
    let s;
    for (const a of this._def.checks)
      a.kind === "min" ? e.data.getTime() < a.value && (s = this._getOrReturnCtx(e, s), c(s, {
        code: o.too_small,
        message: a.message,
        inclusive: !0,
        exact: !1,
        minimum: a.value,
        type: "date"
      }), n.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (s = this._getOrReturnCtx(e, s), c(s, {
        code: o.too_big,
        message: a.message,
        inclusive: !0,
        exact: !1,
        maximum: a.value,
        type: "date"
      }), n.dirty()) : v.assertNever(a);
    return {
      status: n.value,
      value: new Date(e.data.getTime())
    };
  }
  _addCheck(e) {
    return new J({
      ...this._def,
      checks: [...this._def.checks, e]
    });
  }
  min(e, t) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: h.toString(t)
    });
  }
  max(e, t) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: h.toString(t)
    });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks)
      t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
J.create = (r) => new J({
  checks: [],
  coerce: (r == null ? void 0 : r.coerce) || !1,
  typeName: p.ZodDate,
  ...y(r)
});
class pe extends g {
  _parse(e) {
    if (this._getType(e) !== l.symbol) {
      const n = this._getOrReturnCtx(e);
      return c(n, {
        code: o.invalid_type,
        expected: l.symbol,
        received: n.parsedType
      }), _;
    }
    return b(e.data);
  }
}
pe.create = (r) => new pe({
  typeName: p.ZodSymbol,
  ...y(r)
});
class X extends g {
  _parse(e) {
    if (this._getType(e) !== l.undefined) {
      const n = this._getOrReturnCtx(e);
      return c(n, {
        code: o.invalid_type,
        expected: l.undefined,
        received: n.parsedType
      }), _;
    }
    return b(e.data);
  }
}
X.create = (r) => new X({
  typeName: p.ZodUndefined,
  ...y(r)
});
class Q extends g {
  _parse(e) {
    if (this._getType(e) !== l.null) {
      const n = this._getOrReturnCtx(e);
      return c(n, {
        code: o.invalid_type,
        expected: l.null,
        received: n.parsedType
      }), _;
    }
    return b(e.data);
  }
}
Q.create = (r) => new Q({
  typeName: p.ZodNull,
  ...y(r)
});
class me extends g {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(e) {
    return b(e.data);
  }
}
me.create = (r) => new me({
  typeName: p.ZodAny,
  ...y(r)
});
class V extends g {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(e) {
    return b(e.data);
  }
}
V.create = (r) => new V({
  typeName: p.ZodUnknown,
  ...y(r)
});
class j extends g {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return c(t, {
      code: o.invalid_type,
      expected: l.never,
      received: t.parsedType
    }), _;
  }
}
j.create = (r) => new j({
  typeName: p.ZodNever,
  ...y(r)
});
class _e extends g {
  _parse(e) {
    if (this._getType(e) !== l.undefined) {
      const n = this._getOrReturnCtx(e);
      return c(n, {
        code: o.invalid_type,
        expected: l.void,
        received: n.parsedType
      }), _;
    }
    return b(e.data);
  }
}
_e.create = (r) => new _e({
  typeName: p.ZodVoid,
  ...y(r)
});
class C extends g {
  _parse(e) {
    const { ctx: t, status: n } = this._processInputParams(e), s = this._def;
    if (t.parsedType !== l.array)
      return c(t, {
        code: o.invalid_type,
        expected: l.array,
        received: t.parsedType
      }), _;
    if (s.exactLength !== null) {
      const i = t.data.length > s.exactLength.value, d = t.data.length < s.exactLength.value;
      (i || d) && (c(t, {
        code: i ? o.too_big : o.too_small,
        minimum: d ? s.exactLength.value : void 0,
        maximum: i ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && t.data.length < s.minLength.value && (c(t, {
      code: o.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && t.data.length > s.maxLength.value && (c(t, {
      code: o.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), t.common.async)
      return Promise.all([...t.data].map((i, d) => s.type._parseAsync(new S(t, i, t.path, d)))).then((i) => k.mergeArray(n, i));
    const a = [...t.data].map((i, d) => s.type._parseSync(new S(t, i, t.path, d)));
    return k.mergeArray(n, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new C({
      ...this._def,
      minLength: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new C({
      ...this._def,
      maxLength: { value: e, message: h.toString(t) }
    });
  }
  length(e, t) {
    return new C({
      ...this._def,
      exactLength: { value: e, message: h.toString(t) }
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
C.create = (r, e) => new C({
  type: r,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: p.ZodArray,
  ...y(e)
});
function M(r) {
  if (r instanceof x) {
    const e = {};
    for (const t in r.shape) {
      const n = r.shape[t];
      e[t] = N.create(M(n));
    }
    return new x({
      ...r._def,
      shape: () => e
    });
  } else return r instanceof C ? new C({
    ...r._def,
    type: M(r.element)
  }) : r instanceof N ? N.create(M(r.unwrap())) : r instanceof $ ? $.create(M(r.unwrap())) : r instanceof Z ? Z.create(r.items.map((e) => M(e))) : r;
}
class x extends g {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const e = this._def.shape(), t = v.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== l.object) {
      const u = this._getOrReturnCtx(e);
      return c(u, {
        code: o.invalid_type,
        expected: l.object,
        received: u.parsedType
      }), _;
    }
    const { status: n, ctx: s } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), d = [];
    if (!(this._def.catchall instanceof j && this._def.unknownKeys === "strip"))
      for (const u in s.data)
        i.includes(u) || d.push(u);
    const f = [];
    for (const u of i) {
      const m = a[u], w = s.data[u];
      f.push({
        key: { status: "valid", value: u },
        value: m._parse(new S(s, w, s.path, u)),
        alwaysSet: u in s.data
      });
    }
    if (this._def.catchall instanceof j) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const m of d)
          f.push({
            key: { status: "valid", value: m },
            value: { status: "valid", value: s.data[m] }
          });
      else if (u === "strict")
        d.length > 0 && (c(s, {
          code: o.unrecognized_keys,
          keys: d
        }), n.dirty());
      else if (u !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const m of d) {
        const w = s.data[m];
        f.push({
          key: { status: "valid", value: m },
          value: u._parse(
            new S(s, w, s.path, m)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: m in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const u = [];
      for (const m of f) {
        const w = await m.key, ke = await m.value;
        u.push({
          key: w,
          value: ke,
          alwaysSet: m.alwaysSet
        });
      }
      return u;
    }).then((u) => k.mergeObjectSync(n, u)) : k.mergeObjectSync(n, f);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return h.errToObj, new x({
      ...this._def,
      unknownKeys: "strict",
      ...e !== void 0 ? {
        errorMap: (t, n) => {
          var s, a, i, d;
          const f = (i = (a = (s = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(s, t, n).message) !== null && i !== void 0 ? i : n.defaultError;
          return t.code === "unrecognized_keys" ? {
            message: (d = h.errToObj(e).message) !== null && d !== void 0 ? d : f
          } : {
            message: f
          };
        }
      } : {}
    });
  }
  strip() {
    return new x({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new x({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(e) {
    return new x({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...e
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(e) {
    return new x({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...e._def.shape()
      }),
      typeName: p.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(e) {
    return new x({
      ...this._def,
      catchall: e
    });
  }
  pick(e) {
    const t = {};
    return v.objectKeys(e).forEach((n) => {
      e[n] && this.shape[n] && (t[n] = this.shape[n]);
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  omit(e) {
    const t = {};
    return v.objectKeys(this.shape).forEach((n) => {
      e[n] || (t[n] = this.shape[n]);
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return M(this);
  }
  partial(e) {
    const t = {};
    return v.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      e && !e[n] ? t[n] = s : t[n] = s.optional();
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  required(e) {
    const t = {};
    return v.objectKeys(this.shape).forEach((n) => {
      if (e && !e[n])
        t[n] = this.shape[n];
      else {
        let a = this.shape[n];
        for (; a instanceof N; )
          a = a._def.innerType;
        t[n] = a;
      }
    }), new x({
      ...this._def,
      shape: () => t
    });
  }
  keyof() {
    return Ne(v.objectKeys(this.shape));
  }
}
x.create = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strip",
  catchall: j.create(),
  typeName: p.ZodObject,
  ...y(e)
});
x.strictCreate = (r, e) => new x({
  shape: () => r,
  unknownKeys: "strict",
  catchall: j.create(),
  typeName: p.ZodObject,
  ...y(e)
});
x.lazycreate = (r, e) => new x({
  shape: r,
  unknownKeys: "strip",
  catchall: j.create(),
  typeName: p.ZodObject,
  ...y(e)
});
class K extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = this._def.options;
    function s(a) {
      for (const d of a)
        if (d.result.status === "valid")
          return d.result;
      for (const d of a)
        if (d.result.status === "dirty")
          return t.common.issues.push(...d.ctx.common.issues), d.result;
      const i = a.map((d) => new T(d.ctx.common.issues));
      return c(t, {
        code: o.invalid_union,
        unionErrors: i
      }), _;
    }
    if (t.common.async)
      return Promise.all(n.map(async (a) => {
        const i = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await a._parseAsync({
            data: t.data,
            path: t.path,
            parent: i
          }),
          ctx: i
        };
      })).then(s);
    {
      let a;
      const i = [];
      for (const f of n) {
        const u = {
          ...t,
          common: {
            ...t.common,
            issues: []
          },
          parent: null
        }, m = f._parseSync({
          data: t.data,
          path: t.path,
          parent: u
        });
        if (m.status === "valid")
          return m;
        m.status === "dirty" && !a && (a = { result: m, ctx: u }), u.common.issues.length && i.push(u.common.issues);
      }
      if (a)
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      const d = i.map((f) => new T(f));
      return c(t, {
        code: o.invalid_union,
        unionErrors: d
      }), _;
    }
  }
  get options() {
    return this._def.options;
  }
}
K.create = (r, e) => new K({
  options: r,
  typeName: p.ZodUnion,
  ...y(e)
});
const O = (r) => r instanceof re ? O(r.schema) : r instanceof R ? O(r.innerType()) : r instanceof ne ? [r.value] : r instanceof I ? r.options : r instanceof se ? v.objectValues(r.enum) : r instanceof ae ? O(r._def.innerType) : r instanceof X ? [void 0] : r instanceof Q ? [null] : r instanceof N ? [void 0, ...O(r.unwrap())] : r instanceof $ ? [null, ...O(r.unwrap())] : r instanceof Ze || r instanceof de ? O(r.unwrap()) : r instanceof ie ? O(r._def.innerType) : [];
class xe extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== l.object)
      return c(t, {
        code: o.invalid_type,
        expected: l.object,
        received: t.parsedType
      }), _;
    const n = this.discriminator, s = t.data[n], a = this.optionsMap.get(s);
    return a ? t.common.async ? a._parseAsync({
      data: t.data,
      path: t.path,
      parent: t
    }) : a._parseSync({
      data: t.data,
      path: t.path,
      parent: t
    }) : (c(t, {
      code: o.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), _);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(e, t, n) {
    const s = /* @__PURE__ */ new Map();
    for (const a of t) {
      const i = O(a.shape[e]);
      if (!i.length)
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const d of i) {
        if (s.has(d))
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(d)}`);
        s.set(d, a);
      }
    }
    return new xe({
      typeName: p.ZodDiscriminatedUnion,
      discriminator: e,
      options: t,
      optionsMap: s,
      ...y(n)
    });
  }
}
function ye(r, e) {
  const t = E(r), n = E(e);
  if (r === e)
    return { valid: !0, data: r };
  if (t === l.object && n === l.object) {
    const s = v.objectKeys(e), a = v.objectKeys(r).filter((d) => s.indexOf(d) !== -1), i = { ...r, ...e };
    for (const d of a) {
      const f = ye(r[d], e[d]);
      if (!f.valid)
        return { valid: !1 };
      i[d] = f.data;
    }
    return { valid: !0, data: i };
  } else if (t === l.array && n === l.array) {
    if (r.length !== e.length)
      return { valid: !1 };
    const s = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a], d = e[a], f = ye(i, d);
      if (!f.valid)
        return { valid: !1 };
      s.push(f.data);
    }
    return { valid: !0, data: s };
  } else return t === l.date && n === l.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
}
class ee extends g {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), s = (a, i) => {
      if (we(a) || we(i))
        return _;
      const d = ye(a.value, i.value);
      return d.valid ? ((Te(a) || Te(i)) && t.dirty(), { status: t.value, value: d.data }) : (c(n, {
        code: o.invalid_intersection_types
      }), _);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([a, i]) => s(a, i)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
ee.create = (r, e, t) => new ee({
  left: r,
  right: e,
  typeName: p.ZodIntersection,
  ...y(t)
});
class Z extends g {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== l.array)
      return c(n, {
        code: o.invalid_type,
        expected: l.array,
        received: n.parsedType
      }), _;
    if (n.data.length < this._def.items.length)
      return c(n, {
        code: o.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), _;
    !this._def.rest && n.data.length > this._def.items.length && (c(n, {
      code: o.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), t.dirty());
    const a = [...n.data].map((i, d) => {
      const f = this._def.items[d] || this._def.rest;
      return f ? f._parse(new S(n, i, n.path, d)) : null;
    }).filter((i) => !!i);
    return n.common.async ? Promise.all(a).then((i) => k.mergeArray(t, i)) : k.mergeArray(t, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new Z({
      ...this._def,
      rest: e
    });
  }
}
Z.create = (r, e) => {
  if (!Array.isArray(r))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Z({
    items: r,
    typeName: p.ZodTuple,
    rest: null,
    ...y(e)
  });
};
class te extends g {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== l.object)
      return c(n, {
        code: o.invalid_type,
        expected: l.object,
        received: n.parsedType
      }), _;
    const s = [], a = this._def.keyType, i = this._def.valueType;
    for (const d in n.data)
      s.push({
        key: a._parse(new S(n, d, n.path, d)),
        value: i._parse(new S(n, n.data[d], n.path, d)),
        alwaysSet: d in n.data
      });
    return n.common.async ? k.mergeObjectAsync(t, s) : k.mergeObjectSync(t, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, n) {
    return t instanceof g ? new te({
      keyType: e,
      valueType: t,
      typeName: p.ZodRecord,
      ...y(n)
    }) : new te({
      keyType: A.create(),
      valueType: e,
      typeName: p.ZodRecord,
      ...y(t)
    });
  }
}
class ge extends g {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== l.map)
      return c(n, {
        code: o.invalid_type,
        expected: l.map,
        received: n.parsedType
      }), _;
    const s = this._def.keyType, a = this._def.valueType, i = [...n.data.entries()].map(([d, f], u) => ({
      key: s._parse(new S(n, d, n.path, [u, "key"])),
      value: a._parse(new S(n, f, n.path, [u, "value"]))
    }));
    if (n.common.async) {
      const d = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const f of i) {
          const u = await f.key, m = await f.value;
          if (u.status === "aborted" || m.status === "aborted")
            return _;
          (u.status === "dirty" || m.status === "dirty") && t.dirty(), d.set(u.value, m.value);
        }
        return { status: t.value, value: d };
      });
    } else {
      const d = /* @__PURE__ */ new Map();
      for (const f of i) {
        const u = f.key, m = f.value;
        if (u.status === "aborted" || m.status === "aborted")
          return _;
        (u.status === "dirty" || m.status === "dirty") && t.dirty(), d.set(u.value, m.value);
      }
      return { status: t.value, value: d };
    }
  }
}
ge.create = (r, e, t) => new ge({
  valueType: e,
  keyType: r,
  typeName: p.ZodMap,
  ...y(t)
});
class D extends g {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== l.set)
      return c(n, {
        code: o.invalid_type,
        expected: l.set,
        received: n.parsedType
      }), _;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (c(n, {
      code: o.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), t.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (c(n, {
      code: o.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), t.dirty());
    const a = this._def.valueType;
    function i(f) {
      const u = /* @__PURE__ */ new Set();
      for (const m of f) {
        if (m.status === "aborted")
          return _;
        m.status === "dirty" && t.dirty(), u.add(m.value);
      }
      return { status: t.value, value: u };
    }
    const d = [...n.data.values()].map((f, u) => a._parse(new S(n, f, n.path, u)));
    return n.common.async ? Promise.all(d).then((f) => i(f)) : i(d);
  }
  min(e, t) {
    return new D({
      ...this._def,
      minSize: { value: e, message: h.toString(t) }
    });
  }
  max(e, t) {
    return new D({
      ...this._def,
      maxSize: { value: e, message: h.toString(t) }
    });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
D.create = (r, e) => new D({
  valueType: r,
  minSize: null,
  maxSize: null,
  typeName: p.ZodSet,
  ...y(e)
});
class W extends g {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== l.function)
      return c(t, {
        code: o.invalid_type,
        expected: l.function,
        received: t.parsedType
      }), _;
    function n(d, f) {
      return fe({
        data: d,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          le(),
          q
        ].filter((u) => !!u),
        issueData: {
          code: o.invalid_arguments,
          argumentsError: f
        }
      });
    }
    function s(d, f) {
      return fe({
        data: d,
        path: t.path,
        errorMaps: [
          t.common.contextualErrorMap,
          t.schemaErrorMap,
          le(),
          q
        ].filter((u) => !!u),
        issueData: {
          code: o.invalid_return_type,
          returnTypeError: f
        }
      });
    }
    const a = { errorMap: t.common.contextualErrorMap }, i = t.data;
    if (this._def.returns instanceof Y) {
      const d = this;
      return b(async function(...f) {
        const u = new T([]), m = await d._def.args.parseAsync(f, a).catch((ce) => {
          throw u.addIssue(n(f, ce)), u;
        }), w = await Reflect.apply(i, this, m);
        return await d._def.returns._def.type.parseAsync(w, a).catch((ce) => {
          throw u.addIssue(s(w, ce)), u;
        });
      });
    } else {
      const d = this;
      return b(function(...f) {
        const u = d._def.args.safeParse(f, a);
        if (!u.success)
          throw new T([n(f, u.error)]);
        const m = Reflect.apply(i, this, u.data), w = d._def.returns.safeParse(m, a);
        if (!w.success)
          throw new T([s(m, w.error)]);
        return w.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new W({
      ...this._def,
      args: Z.create(e).rest(V.create())
    });
  }
  returns(e) {
    return new W({
      ...this._def,
      returns: e
    });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, n) {
    return new W({
      args: e || Z.create([]).rest(V.create()),
      returns: t || V.create(),
      typeName: p.ZodFunction,
      ...y(n)
    });
  }
}
class re extends g {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
re.create = (r, e) => new re({
  getter: r,
  typeName: p.ZodLazy,
  ...y(e)
});
class ne extends g {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return c(t, {
        received: t.data,
        code: o.invalid_literal,
        expected: this._def.value
      }), _;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ne.create = (r, e) => new ne({
  value: r,
  typeName: p.ZodLiteral,
  ...y(e)
});
function Ne(r, e) {
  return new I({
    values: r,
    typeName: p.ZodEnum,
    ...y(e)
  });
}
class I extends g {
  constructor() {
    super(...arguments), B.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return c(t, {
        expected: v.joinValues(n),
        received: t.parsedType,
        code: o.invalid_type
      }), _;
    }
    if (H(this, B) || Se(this, B, new Set(this._def.values)), !H(this, B).has(e.data)) {
      const t = this._getOrReturnCtx(e), n = this._def.values;
      return c(t, {
        received: t.data,
        code: o.invalid_enum_value,
        options: n
      }), _;
    }
    return b(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values)
      e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return I.create(e, {
      ...this._def,
      ...t
    });
  }
  exclude(e, t = this._def) {
    return I.create(this.options.filter((n) => !e.includes(n)), {
      ...this._def,
      ...t
    });
  }
}
B = /* @__PURE__ */ new WeakMap();
I.create = Ne;
class se extends g {
  constructor() {
    super(...arguments), F.set(this, void 0);
  }
  _parse(e) {
    const t = v.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(e);
    if (n.parsedType !== l.string && n.parsedType !== l.number) {
      const s = v.objectValues(t);
      return c(n, {
        expected: v.joinValues(s),
        received: n.parsedType,
        code: o.invalid_type
      }), _;
    }
    if (H(this, F) || Se(this, F, new Set(v.getValidEnumValues(this._def.values))), !H(this, F).has(e.data)) {
      const s = v.objectValues(t);
      return c(n, {
        received: n.data,
        code: o.invalid_enum_value,
        options: s
      }), _;
    }
    return b(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
F = /* @__PURE__ */ new WeakMap();
se.create = (r, e) => new se({
  values: r,
  typeName: p.ZodNativeEnum,
  ...y(e)
});
class Y extends g {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== l.promise && t.common.async === !1)
      return c(t, {
        code: o.invalid_type,
        expected: l.promise,
        received: t.parsedType
      }), _;
    const n = t.parsedType === l.promise ? t.data : Promise.resolve(t.data);
    return b(n.then((s) => this._def.type.parseAsync(s, {
      path: t.path,
      errorMap: t.common.contextualErrorMap
    })));
  }
}
Y.create = (r, e) => new Y({
  type: r,
  typeName: p.ZodPromise,
  ...y(e)
});
class R extends g {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === p.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e), s = this._def.effect || null, a = {
      addIssue: (i) => {
        c(n, i), i.fatal ? t.abort() : t.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (a.addIssue = a.addIssue.bind(a), s.type === "preprocess") {
      const i = s.transform(n.data, a);
      if (n.common.async)
        return Promise.resolve(i).then(async (d) => {
          if (t.value === "aborted")
            return _;
          const f = await this._def.schema._parseAsync({
            data: d,
            path: n.path,
            parent: n
          });
          return f.status === "aborted" ? _ : f.status === "dirty" || t.value === "dirty" ? U(f.value) : f;
        });
      {
        if (t.value === "aborted")
          return _;
        const d = this._def.schema._parseSync({
          data: i,
          path: n.path,
          parent: n
        });
        return d.status === "aborted" ? _ : d.status === "dirty" || t.value === "dirty" ? U(d.value) : d;
      }
    }
    if (s.type === "refinement") {
      const i = (d) => {
        const f = s.refinement(d, a);
        if (n.common.async)
          return Promise.resolve(f);
        if (f instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return d;
      };
      if (n.common.async === !1) {
        const d = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return d.status === "aborted" ? _ : (d.status === "dirty" && t.dirty(), i(d.value), { status: t.value, value: d.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((d) => d.status === "aborted" ? _ : (d.status === "dirty" && t.dirty(), i(d.value).then(() => ({ status: t.value, value: d.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!P(i))
          return i;
        const d = s.transform(i.value, a);
        if (d instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: t.value, value: d };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => P(i) ? Promise.resolve(s.transform(i.value, a)).then((d) => ({ status: t.value, value: d })) : i);
    v.assertNever(s);
  }
}
R.create = (r, e, t) => new R({
  schema: r,
  typeName: p.ZodEffects,
  effect: e,
  ...y(t)
});
R.createWithPreprocess = (r, e, t) => new R({
  schema: e,
  effect: { type: "preprocess", transform: r },
  typeName: p.ZodEffects,
  ...y(t)
});
class N extends g {
  _parse(e) {
    return this._getType(e) === l.undefined ? b(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
N.create = (r, e) => new N({
  innerType: r,
  typeName: p.ZodOptional,
  ...y(e)
});
class $ extends g {
  _parse(e) {
    return this._getType(e) === l.null ? b(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
$.create = (r, e) => new $({
  innerType: r,
  typeName: p.ZodNullable,
  ...y(e)
});
class ae extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let n = t.data;
    return t.parsedType === l.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
ae.create = (r, e) => new ae({
  innerType: r,
  typeName: p.ZodDefault,
  defaultValue: typeof e.default == "function" ? e.default : () => e.default,
  ...y(e)
});
class ie extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = {
      ...t,
      common: {
        ...t.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return G(s) ? s.then((a) => ({
      status: "valid",
      value: a.status === "valid" ? a.value : this._def.catchValue({
        get error() {
          return new T(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new T(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ie.create = (r, e) => new ie({
  innerType: r,
  typeName: p.ZodCatch,
  catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
  ...y(e)
});
class ve extends g {
  _parse(e) {
    if (this._getType(e) !== l.nan) {
      const n = this._getOrReturnCtx(e);
      return c(n, {
        code: o.invalid_type,
        expected: l.nan,
        received: n.parsedType
      }), _;
    }
    return { status: "valid", value: e.data };
  }
}
ve.create = (r) => new ve({
  typeName: p.ZodNaN,
  ...y(r)
});
class Ze extends g {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), n = t.data;
    return this._def.type._parse({
      data: n,
      path: t.path,
      parent: t
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class oe extends g {
  _parse(e) {
    const { status: t, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const a = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? _ : a.status === "dirty" ? (t.dirty(), U(a.value)) : this._def.out._parseAsync({
          data: a.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? _ : s.status === "dirty" ? (t.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(e, t) {
    return new oe({
      in: e,
      out: t,
      typeName: p.ZodPipeline
    });
  }
}
class de extends g {
  _parse(e) {
    const t = this._def.innerType._parse(e), n = (s) => (P(s) && (s.value = Object.freeze(s.value)), s);
    return G(t) ? t.then((s) => n(s)) : n(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
de.create = (r, e) => new de({
  innerType: r,
  typeName: p.ZodReadonly,
  ...y(e)
});
x.lazycreate;
var p;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(p || (p = {}));
const et = A.create, tt = L.create;
ve.create;
z.create;
const rt = he.create;
J.create;
pe.create;
X.create;
Q.create;
const nt = me.create;
V.create;
j.create;
_e.create;
const st = C.create, at = x.create;
x.strictCreate;
const it = K.create;
xe.create;
ee.create;
Z.create;
const dt = te.create;
ge.create;
D.create;
W.create;
re.create;
const ot = ne.create, ct = I.create;
se.create;
Y.create;
R.create;
N.create;
$.create;
R.createWithPreprocess;
oe.create;
export {
  nt as a,
  rt as b,
  st as c,
  ct as e,
  ot as l,
  tt as n,
  at as o,
  dt as r,
  et as s,
  it as u
};
