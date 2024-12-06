import { PgSquasher as f } from "./pgSchema.js";
const F = (t, e) => {
  const { name: r, schema: n, columns: l, compositePrimaryKeys: s, uniqueConstraints: p, checkConstraints: d, policies: h, isRLSEnabled: w } = t, v = `${n || "public"}.${r}`, P = Object.values(s).length > 0 ? e.tables[v].compositePrimaryKeys[`${f.unsquashPK(Object.values(s)[0]).name}`].name : "";
  return {
    type: "create_table",
    tableName: r,
    schema: n,
    columns: Object.values(l),
    compositePKs: Object.values(s),
    compositePkName: P,
    uniqueConstraints: Object.values(p),
    policies: Object.values(h),
    checkConstraints: Object.values(d),
    isRLSEnabled: w ?? !1
  };
}, L = (t) => ({
  type: "drop_table",
  tableName: t.name,
  schema: t.schema,
  policies: t.policies ? Object.values(t.policies) : []
}), M = (t, e) => ({
  type: "rename_table",
  fromSchema: e.schema,
  toSchema: e.schema,
  tableNameFrom: t.name,
  tableNameTo: e.name
}), G = (t, e, r) => ({
  type: "create_type_enum",
  name: t,
  schema: e,
  values: r
}), z = (t, e, r) => r.map((n) => ({
  type: "alter_type_add_value",
  name: t,
  schema: e,
  value: n.value,
  before: n.before
})), B = (t, e, r, n) => {
  if (!r.length) return [];
  const l = [];
  for (const s in n.tables) {
    const p = n.tables[s];
    for (const d in p.columns) {
      const h = p.columns[d];
      h.type === t && h.typeSchema === e && l.push({
        schema: p.schema || "public",
        table: p.name,
        column: h.name
      });
    }
  }
  return [
    {
      type: "alter_type_drop_value",
      name: t,
      schema: e,
      deletedValues: r,
      newValues: n.enums[`${e}.${t}`].values,
      columnsWithEnum: l
    }
  ];
}, H = (t, e) => ({
  type: "drop_type_enum",
  name: t,
  schema: e
}), Q = (t, e, r) => ({
  type: "move_type_enum",
  name: t,
  schemaFrom: e,
  schemaTo: r
}), X = (t, e, r) => ({
  type: "rename_type_enum",
  nameFrom: t,
  nameTo: e,
  schema: r
}), Y = (t) => {
  const e = f.unsquashSequence(t.values);
  return {
    type: "create_sequence",
    name: t.name,
    schema: t.schema,
    values: e
  };
}, Z = (t) => {
  const e = f.unsquashSequence(t.values);
  return [
    {
      type: "alter_sequence",
      schema: t.schema,
      name: t.name,
      values: e
    }
  ];
}, ee = (t, e) => ({
  type: "drop_sequence",
  name: t,
  schema: e
}), te = (t, e, r) => ({
  type: "move_sequence",
  name: t,
  schemaFrom: e,
  schemaTo: r
}), ne = (t, e, r) => ({
  type: "rename_sequence",
  nameFrom: t,
  nameTo: e,
  schema: r
}), re = (t) => ({
  type: "create_role",
  name: t.name,
  values: {
    createDb: t.createDb,
    createRole: t.createRole,
    inherit: t.inherit
  }
}), ae = (t) => ({
  type: "alter_role",
  name: t.name,
  values: {
    createDb: t.createDb,
    createRole: t.createRole,
    inherit: t.inherit
  }
}), pe = (t) => ({
  type: "drop_role",
  name: t
}), oe = (t, e) => ({
  type: "rename_role",
  nameFrom: t,
  nameTo: e
}), le = (t) => t.map((e) => ({
  type: "create_schema",
  name: e
})), se = (t) => t.map((e) => ({
  type: "rename_schema",
  from: e.from,
  to: e.to
})), ue = (t) => t.map((e) => ({
  type: "drop_schema",
  name: e
})), ce = (t, e, r) => r.map((n) => ({
  type: "alter_table_rename_column",
  tableName: t,
  oldColumnName: n.from.name,
  newColumnName: n.to.name,
  schema: e
})), me = (t, e, r) => r.map((n) => ({
  type: "alter_table_drop_column",
  tableName: t,
  columnName: n.name,
  schema: e
})), _e = (t, e, r) => r.map((n) => ({
  type: "alter_table_add_column",
  tableName: t,
  column: n,
  schema: e
})), ye = (t, e, r, n, l) => {
  var w, v, P, J, g, C, O, q, N, A, K, S, R, k, T, j, V, I, x;
  const s = `${e || "public"}.${t}`, p = [], d = [], h = [];
  for (const a of r) {
    const o = typeof a.name != "string" ? a.name.new : a.name, u = n.tables[s].name, i = n.tables[s].columns[o].type, b = n.tables[s].columns[o].default, D = n.tables[s].columns[o].generated, c = n.tables[s].columns[o].onUpdate, m = n.tables[s].columns[o].notNull, _ = n.tables[s].columns[o].autoincrement, y = n.tables[s].columns[o].primaryKey, E = n.tables[s].compositePrimaryKeys[`${u}_${o}`];
    if (typeof a.name != "string" && p.push({
      type: "alter_table_rename_column",
      tableName: u,
      oldColumnName: a.name.old,
      newColumnName: a.name.new,
      schema: e
    }), ((w = a.type) == null ? void 0 : w.type) === "changed" && p.push({
      type: "alter_table_alter_column_set_type",
      tableName: u,
      columnName: o,
      newDataType: a.type.new,
      oldDataType: a.type.old,
      schema: e,
      columnDefault: b,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      columnPk: y
    }), (((v = a.primaryKey) == null ? void 0 : v.type) === "deleted" || ((P = a.primaryKey) == null ? void 0 : P.type) === "changed" && !a.primaryKey.new && typeof E > "u") && d.push({
      ////
      type: "alter_table_alter_column_drop_pk",
      tableName: u,
      columnName: o,
      schema: e
    }), ((J = a.default) == null ? void 0 : J.type) === "added" && p.push({
      type: "alter_table_alter_column_set_default",
      tableName: u,
      columnName: o,
      newDefaultValue: a.default.value,
      schema: e,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      newDataType: i,
      columnPk: y
    }), ((g = a.default) == null ? void 0 : g.type) === "changed" && p.push({
      type: "alter_table_alter_column_set_default",
      tableName: u,
      columnName: o,
      newDefaultValue: a.default.new,
      oldDefaultValue: a.default.old,
      schema: e,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      newDataType: i,
      columnPk: y
    }), ((C = a.default) == null ? void 0 : C.type) === "deleted" && p.push({
      type: "alter_table_alter_column_drop_default",
      tableName: u,
      columnName: o,
      schema: e,
      columnDefault: b,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      newDataType: i,
      columnPk: y
    }), ((O = a.notNull) == null ? void 0 : O.type) === "added" && p.push({
      type: "alter_table_alter_column_set_notnull",
      tableName: u,
      columnName: o,
      schema: e,
      newDataType: i,
      columnDefault: b,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      columnPk: y
    }), ((q = a.notNull) == null ? void 0 : q.type) === "changed") {
      const $ = a.notNull.new ? "alter_table_alter_column_set_notnull" : "alter_table_alter_column_drop_notnull";
      p.push({
        type: $,
        tableName: u,
        columnName: o,
        schema: e,
        newDataType: i,
        columnDefault: b,
        columnOnUpdate: c,
        columnNotNull: m,
        columnAutoIncrement: _,
        columnPk: y
      });
    }
    ((N = a.notNull) == null ? void 0 : N.type) === "deleted" && p.push({
      type: "alter_table_alter_column_drop_notnull",
      tableName: u,
      columnName: o,
      schema: e,
      newDataType: i,
      columnDefault: b,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      columnPk: y
    }), ((A = a.identity) == null ? void 0 : A.type) === "added" && p.push({
      type: "alter_table_alter_column_set_identity",
      tableName: u,
      columnName: o,
      schema: e,
      identity: a.identity.value
    }), ((K = a.identity) == null ? void 0 : K.type) === "changed" && p.push({
      type: "alter_table_alter_column_change_identity",
      tableName: u,
      columnName: o,
      schema: e,
      identity: a.identity.new,
      oldIdentity: a.identity.old
    }), ((S = a.identity) == null ? void 0 : S.type) === "deleted" && p.push({
      type: "alter_table_alter_column_drop_identity",
      tableName: u,
      columnName: o,
      schema: e
    }), ((R = a.generated) == null ? void 0 : R.type) === "added" && p.push({
      type: "alter_table_alter_column_set_generated",
      tableName: u,
      columnName: o,
      schema: e,
      newDataType: i,
      columnDefault: b,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      columnPk: y,
      columnGenerated: D
    }), ((k = a.generated) == null ? void 0 : k.type) === "changed" && l !== "push" && p.push({
      type: "alter_table_alter_column_alter_generated",
      tableName: u,
      columnName: o,
      schema: e,
      newDataType: i,
      columnDefault: b,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      columnPk: y,
      columnGenerated: D
    }), ((T = a.generated) == null ? void 0 : T.type) === "deleted" && p.push({
      type: "alter_table_alter_column_drop_generated",
      tableName: u,
      columnName: o,
      schema: e,
      newDataType: i,
      columnDefault: b,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      columnPk: y,
      columnGenerated: D
    }), (((j = a.primaryKey) == null ? void 0 : j.type) === "added" || ((V = a.primaryKey) == null ? void 0 : V.type) === "changed" && a.primaryKey.new) && p.filter((U) => U.type === "alter_table_alter_column_set_autoincrement").length === 0 && h.push({
      type: "alter_table_alter_column_set_pk",
      tableName: u,
      schema: e,
      columnName: o
    }), ((I = a.onUpdate) == null ? void 0 : I.type) === "added" && p.push({
      type: "alter_table_alter_column_set_on_update",
      tableName: u,
      columnName: o,
      schema: e,
      newDataType: i,
      columnDefault: b,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      columnPk: y
    }), ((x = a.onUpdate) == null ? void 0 : x.type) === "deleted" && p.push({
      type: "alter_table_alter_column_drop_on_update",
      tableName: u,
      columnName: o,
      schema: e,
      newDataType: i,
      columnDefault: b,
      columnOnUpdate: c,
      columnNotNull: m,
      columnAutoIncrement: _,
      columnPk: y
    });
  }
  return [...d, ...h, ...p];
}, ie = (t, e, r) => r.map((n) => ({
  type: "rename_policy",
  tableName: t,
  oldName: n.from.name,
  newName: n.to.name,
  schema: e
})), de = (t) => t.map((e) => ({
  type: "rename_ind_policy",
  tableKey: e.from.on,
  oldName: e.from.name,
  newName: e.to.name
})), be = (t, e, r) => r.map((n) => ({
  type: "create_policy",
  tableName: t,
  data: n,
  schema: e
})), fe = (t) => t.map((e) => ({
  type: "create_ind_policy",
  tableName: e.on,
  data: e
})), he = (t, e, r) => r.map((n) => ({
  type: "drop_policy",
  tableName: t,
  data: n,
  schema: e
})), we = (t) => t.map((e) => ({
  type: "drop_ind_policy",
  tableName: e.on,
  data: e
})), ve = (t, e, r, n) => ({
  type: "alter_policy",
  tableName: t,
  oldData: r,
  newData: n,
  schema: e
}), Pe = (t, e) => ({
  type: "alter_ind_policy",
  oldData: t,
  newData: e
}), De = (t, e, r, n, l) => l === "push" ? Object.values(r).map((s) => {
  const p = f.unsquashIdxPush(s), d = n.tables[`${e === "" ? "public" : e}.${t}`].indexes[p.name];
  return {
    type: "create_index_pg",
    tableName: t,
    data: d,
    schema: e
  };
}) : Object.values(r).map((s) => ({
  type: "create_index_pg",
  tableName: t,
  data: f.unsquashIdx(s),
  schema: e
})), Je = (t, e, r, n) => Object.values(r).map((l) => ({
  type: "create_index",
  tableName: t,
  data: l,
  schema: e,
  internal: n
})), ge = (t, e, r) => Object.values(r).map((n) => ({
  type: "create_reference",
  tableName: t,
  data: n,
  schema: e
})), Ce = (t, e, r) => Object.values(r).map((n) => ({
  type: "delete_reference",
  tableName: t,
  data: n,
  schema: e
})), Oe = (t, e, r) => {
  const n = [];
  return Object.values(r).map((l) => {
    n.push({
      type: "delete_reference",
      tableName: t,
      schema: e,
      data: l.__old
    }), n.push({
      type: "create_reference",
      tableName: t,
      schema: e,
      data: l.__new
    });
  }), n;
}, qe = (t, e, r) => Object.values(r).map((n) => ({
  type: "drop_index",
  tableName: t,
  data: n,
  schema: e
})), Ne = (t, e) => Object.values(e).map((r) => ({
  type: "create_composite_pk",
  tableName: t,
  data: r
})), Ae = (t, e) => Object.values(e).map((r) => ({
  type: "delete_composite_pk",
  tableName: t,
  data: r
})), Ke = (t, e) => Object.values(e).map((r) => ({
  type: "alter_composite_pk",
  tableName: t,
  old: r.__old,
  new: r.__new
})), Se = (t, e, r) => Object.values(r).map((n) => ({
  type: "create_composite_pk",
  tableName: t,
  data: n,
  schema: e,
  constraintName: f.unsquashPK(n).name
})), Re = (t, e, r) => Object.values(r).map((n) => ({
  type: "delete_composite_pk",
  tableName: t,
  data: n,
  schema: e,
  constraintName: f.unsquashPK(n).name
})), ke = (t, e, r) => Object.values(r).map((n) => ({
  type: "alter_composite_pk",
  tableName: t,
  old: n.__old,
  new: n.__new,
  schema: e,
  oldConstraintName: f.unsquashPK(n.__old).name,
  newConstraintName: f.unsquashPK(n.__new).name
})), Te = (t, e, r) => Object.values(r).map((n) => ({
  type: "create_unique_constraint",
  tableName: t,
  data: n,
  schema: e
})), je = (t, e, r) => Object.values(r).map((n) => ({
  type: "delete_unique_constraint",
  tableName: t,
  data: n,
  schema: e
})), Ve = (t, e, r) => Object.values(r).map((n) => ({
  type: "create_check_constraint",
  tableName: t,
  data: n,
  schema: e
})), Ie = (t, e, r) => Object.values(r).map((n) => ({
  type: "delete_check_constraint",
  tableName: t,
  constraintName: f.unsquashCheck(n).name,
  schema: e
})), xe = (t, e, r) => Object.values(r).map((n) => ({
  type: "alter_unique_constraint",
  tableName: t,
  old: n.__old,
  new: n.__new,
  schema: e
})), $e = (t, e, r, n, l = !1, s, p, d) => ({
  type: "create_view",
  name: t,
  schema: e,
  definition: r,
  with: s,
  materialized: n,
  withNoData: l,
  using: p,
  tablespace: d
}), Ee = (t, e, r) => {
  const n = {
    name: t,
    type: "drop_view"
  };
  return e && (n.schema = e), r && (n.materialized = r), n;
}, Ue = (t, e, r, n) => {
  const l = {
    type: "rename_view",
    nameTo: t,
    nameFrom: e
  };
  return r && (l.schema = r), n && (l.materialized = n), l;
}, We = (t, e, r, n) => {
  const l = {
    type: "alter_view_alter_schema",
    fromSchema: e,
    toSchema: t,
    name: r
  };
  return n && (l.materialized = n), l;
}, Fe = (t, e, r, n) => ({
  type: "alter_view_add_with_option",
  name: t,
  schema: e,
  materialized: r,
  with: n
}), Le = (t, e, r, n) => ({
  type: "alter_view_drop_with_option",
  name: t,
  schema: e,
  materialized: r,
  with: n
}), Me = (t, e, r, n) => ({
  type: "alter_view_alter_tablespace",
  name: t,
  schema: e,
  materialized: r,
  toTablespace: n
}), Ge = (t, e, r, n) => ({
  type: "alter_view_alter_using",
  name: t,
  schema: e,
  materialized: r,
  toUsing: n
});
export {
  _e as _prepareAddColumns,
  me as _prepareDropColumns,
  Ve as prepareAddCheckConstraint,
  Se as prepareAddCompositePrimaryKeyPg,
  Ne as prepareAddCompositePrimaryKeySqlite,
  Te as prepareAddUniqueConstraintPg,
  z as prepareAddValuesToEnumJson,
  ke as prepareAlterCompositePrimaryKeyPg,
  Ke as prepareAlterCompositePrimaryKeySqlite,
  Pe as prepareAlterIndPolicyJson,
  ve as prepareAlterPolicyJson,
  Oe as prepareAlterReferencesJson,
  ae as prepareAlterRoleJson,
  Z as prepareAlterSequenceJson,
  xe as prepareAlterUniqueConstraintPg,
  G as prepareCreateEnumJson,
  fe as prepareCreateIndPolicyJsons,
  Je as prepareCreateIndexesJson,
  be as prepareCreatePolicyJsons,
  ge as prepareCreateReferencesJson,
  re as prepareCreateRoleJson,
  le as prepareCreateSchemasJson,
  Y as prepareCreateSequenceJson,
  Ie as prepareDeleteCheckConstraint,
  Re as prepareDeleteCompositePrimaryKeyPg,
  Ae as prepareDeleteCompositePrimaryKeySqlite,
  ue as prepareDeleteSchemasJson,
  je as prepareDeleteUniqueConstraintPg,
  H as prepareDropEnumJson,
  B as prepareDropEnumValues,
  we as prepareDropIndPolicyJsons,
  qe as prepareDropIndexesJson,
  he as prepareDropPolicyJsons,
  Ce as prepareDropReferencesJson,
  pe as prepareDropRoleJson,
  ee as prepareDropSequenceJson,
  L as prepareDropTableJson,
  Ee as prepareDropViewJson,
  Q as prepareMoveEnumJson,
  te as prepareMoveSequenceJson,
  ye as preparePgAlterColumns,
  Fe as preparePgAlterViewAddWithOptionJson,
  We as preparePgAlterViewAlterSchemaJson,
  Me as preparePgAlterViewAlterTablespaceJson,
  Ge as preparePgAlterViewAlterUsingJson,
  Le as preparePgAlterViewDropWithOptionJson,
  De as preparePgCreateIndexesJson,
  F as preparePgCreateTableJson,
  $e as preparePgCreateViewJson,
  ce as prepareRenameColumns,
  X as prepareRenameEnumJson,
  de as prepareRenameIndPolicyJsons,
  ie as prepareRenamePolicyJsons,
  oe as prepareRenameRoleJson,
  se as prepareRenameSchemasJson,
  ne as prepareRenameSequenceJson,
  M as prepareRenameTableJson,
  Ue as prepareRenameViewJson
};
