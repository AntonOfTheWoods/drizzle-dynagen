import { snake_case as b, BREAKPOINT as U } from "./lib.js";
import { PgSquasher as T } from "./pgSchema.js";
import { escapeSingleQuotes as x } from "./utils.js";
const _ = (s, e) => {
  const t = [
    "uuid",
    "smallint",
    "integer",
    "bigint",
    "boolean",
    "text",
    "varchar",
    "serial",
    "bigserial",
    "decimal",
    "numeric",
    "real",
    "json",
    "jsonb",
    "time",
    "time with time zone",
    "time without time zone",
    "time",
    "timestamp",
    "timestamp with time zone",
    "timestamp without time zone",
    "date",
    "interval",
    "bigint",
    "bigserial",
    "double precision",
    "interval year",
    "interval month",
    "interval day",
    "interval hour",
    "interval minute",
    "interval second",
    "interval year to month",
    "interval day to hour",
    "interval day to minute",
    "interval day to second",
    "interval hour to minute",
    "interval hour to second",
    "interval minute to second",
    "char",
    "vector",
    "geometry"
  ], n = /\[\d*(?:\[\d*\])*\]/g, a = (e.match(n) ?? []).join(""), r = e.replace(n, "");
  return t.some((l) => e.startsWith(l)) ? `${r}${a}` : `${s}"${r}"${a}`;
};
class m {
}
class f extends m {
  can(e, t) {
    return e.type === "create_role" && t === "postgresql";
  }
  convert(e) {
    return `CREATE ROLE "${e.name}"${e.values.createDb || e.values.createRole || !e.values.inherit ? ` WITH${e.values.createDb ? " CREATEDB" : ""}${e.values.createRole ? " CREATEROLE" : ""}${e.values.inherit ? "" : " NOINHERIT"}` : ""};`;
  }
}
class M extends m {
  can(e, t) {
    return e.type === "drop_role" && t === "postgresql";
  }
  convert(e) {
    return `DROP ROLE "${e.name}";`;
  }
}
class B extends m {
  can(e, t) {
    return e.type === "rename_role" && t === "postgresql";
  }
  convert(e) {
    return `ALTER ROLE "${e.nameFrom}" RENAME TO "${e.nameTo}";`;
  }
}
class Y extends m {
  can(e, t) {
    return e.type === "alter_role" && t === "postgresql";
  }
  convert(e) {
    return `ALTER ROLE "${e.name}"${` WITH${e.values.createDb ? " CREATEDB" : " NOCREATEDB"}${e.values.createRole ? " CREATEROLE" : " NOCREATEROLE"}${e.values.inherit ? " INHERIT" : " NOINHERIT"}`};`;
  }
}
class V extends m {
  can(e, t) {
    return e.type === "create_policy" && t === "postgresql";
  }
  convert(e) {
    var o, u, i;
    const t = e.data, n = e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`, a = t.using ? ` USING (${t.using})` : "", r = t.withCheck ? ` WITH CHECK (${t.withCheck})` : "", l = (o = t.to) == null ? void 0 : o.map(($) => ["current_user", "current_role", "session_user", "public"].includes($) ? $ : `"${$}"`).join(", ");
    return `CREATE POLICY "${t.name}" ON ${n} AS ${(u = t.as) == null ? void 0 : u.toUpperCase()} FOR ${(i = t.for) == null ? void 0 : i.toUpperCase()} TO ${l}${a}${r};`;
  }
}
class g extends m {
  can(e, t) {
    return e.type === "drop_policy" && t === "postgresql";
  }
  convert(e) {
    const t = e.data, n = e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`;
    return `DROP POLICY "${t.name}" ON ${n} CASCADE;`;
  }
}
class F extends m {
  can(e, t) {
    return e.type === "rename_policy" && t === "postgresql";
  }
  convert(e) {
    const t = e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`;
    return `ALTER POLICY "${e.oldName}" ON ${t} RENAME TO "${e.newName}";`;
  }
}
class H extends m {
  can(e, t) {
    return e.type === "alter_policy" && t === "postgresql";
  }
  convert(e, t, n) {
    const a = n === "push" ? T.unsquashPolicyPush(e.newData) : T.unsquashPolicy(e.newData), r = n === "push" ? T.unsquashPolicyPush(e.oldData) : T.unsquashPolicy(e.oldData), l = e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`, o = a.using ? ` USING (${a.using})` : r.using ? ` USING (${r.using})` : "", u = a.withCheck ? ` WITH CHECK (${a.withCheck})` : r.withCheck ? ` WITH CHECK  (${r.withCheck})` : "";
    return `ALTER POLICY "${r.name}" ON ${l} TO ${a.to}${o}${u};`;
  }
}
class k extends m {
  can(e, t) {
    return e.type === "create_ind_policy" && t === "postgresql";
  }
  convert(e) {
    var l, o, u;
    const t = e.data, n = t.using ? ` USING (${t.using})` : "", a = t.withCheck ? ` WITH CHECK (${t.withCheck})` : "", r = (l = t.to) == null ? void 0 : l.map((i) => ["current_user", "current_role", "session_user", "public"].includes(i) ? i : `"${i}"`).join(", ");
    return `CREATE POLICY "${t.name}" ON ${t.on} AS ${(o = t.as) == null ? void 0 : o.toUpperCase()} FOR ${(u = t.for) == null ? void 0 : u.toUpperCase()} TO ${r}${n}${a};`;
  }
}
class K extends m {
  can(e, t) {
    return e.type === "drop_ind_policy" && t === "postgresql";
  }
  convert(e) {
    const t = e.data;
    return `DROP POLICY "${t.name}" ON ${t.on} CASCADE;`;
  }
}
class j extends m {
  can(e, t) {
    return e.type === "rename_ind_policy" && t === "postgresql";
  }
  convert(e) {
    return `ALTER POLICY "${e.oldName}" ON ${e.tableKey} RENAME TO "${e.newName}";`;
  }
}
class G extends m {
  can(e, t) {
    return e.type === "alter_ind_policy" && t === "postgresql";
  }
  convert(e) {
    const t = e.newData, n = e.oldData, a = t.using ? ` USING (${t.using})` : n.using ? ` USING (${n.using})` : "", r = t.withCheck ? ` WITH CHECK (${t.withCheck})` : n.withCheck ? ` WITH CHECK  (${n.withCheck})` : "";
    return `ALTER POLICY "${n.name}" ON ${n.on} TO ${t.to}${a}${r};`;
  }
}
class P extends m {
  can(e, t) {
    return e.type === "enable_rls" && t === "postgresql";
  }
  convert(e) {
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} ENABLE ROW LEVEL SECURITY;`;
  }
}
class X extends m {
  can(e, t) {
    return e.type === "disable_rls" && t === "postgresql";
  }
  convert(e) {
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} DISABLE ROW LEVEL SECURITY;`;
  }
}
class z extends m {
  can(e, t) {
    return e.type === "create_table" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, schema: n, columns: a, compositePKs: r, uniqueConstraints: l, checkConstraints: o, policies: u, isRLSEnabled: i } = e;
    let $ = "";
    const p = n ? `"${n}"."${t}"` : `"${t}"`;
    $ += `CREATE TABLE IF NOT EXISTS ${p} (
`;
    for (let h = 0; h < a.length; h++) {
      const E = a[h], d = E.primaryKey ? " PRIMARY KEY" : "", A = E.notNull && !E.identity ? " NOT NULL" : "", S = E.default !== void 0 ? ` DEFAULT ${E.default}` : "", R = E.isUnique ? ` CONSTRAINT "${E.uniqueName}" UNIQUE${E.nullsNotDistinct ? " NULLS NOT DISTINCT" : ""}` : "", L = E.typeSchema && E.typeSchema !== "public" ? `"${E.typeSchema}".` : "", I = _(L, E.type), y = E.generated, O = y ? ` GENERATED ALWAYS AS (${y == null ? void 0 : y.as}) STORED` : "", N = E.identity ? T.unsquashIdentity(E.identity) : void 0, W = n ? `"${n}"."${N == null ? void 0 : N.name}"` : `"${N == null ? void 0 : N.name}"`, q = N ? ` GENERATED ${N.type === "always" ? "ALWAYS" : "BY DEFAULT"} AS IDENTITY (sequence name ${W}${N.increment ? ` INCREMENT BY ${N.increment}` : ""}${N.minValue ? ` MINVALUE ${N.minValue}` : ""}${N.maxValue ? ` MAXVALUE ${N.maxValue}` : ""}${N.startWith ? ` START WITH ${N.startWith}` : ""}${N.cache ? ` CACHE ${N.cache}` : ""}${N.cycle ? " CYCLE" : ""})` : "";
      $ += `	"${E.name}" ${I}${d}${S}${O}${A}${R}${q}`, $ += h === a.length - 1 ? "" : `,
`;
    }
    if (typeof r < "u" && r.length > 0) {
      $ += `,
`;
      const h = T.unsquashPK(r[0]);
      $ += `	CONSTRAINT "${e.compositePkName}" PRIMARY KEY("${h.columns.join('","')}")`;
    }
    if (typeof l < "u" && l.length > 0)
      for (const h of l) {
        $ += `,
`;
        const E = T.unsquashUnique(h);
        $ += `	CONSTRAINT "${E.name}" UNIQUE${E.nullsNotDistinct ? " NULLS NOT DISTINCT" : ""}("${E.columns.join('","')}")`;
      }
    if (typeof o < "u" && o.length > 0)
      for (const h of o) {
        $ += `,
`;
        const E = T.unsquashCheck(h);
        $ += `	CONSTRAINT "${E.name}" CHECK (${E.value})`;
      }
    $ += `
);`, $ += `
`;
    const C = new P().convert({
      type: "enable_rls",
      tableName: t,
      schema: n
    });
    return [$, ...u && u.length > 0 || i ? [C] : []];
  }
}
class Q extends m {
  can(e, t) {
    return e.type === "create_view" && t === "postgresql";
  }
  convert(e) {
    const { definition: t, name: n, schema: a, with: r, materialized: l, withNoData: o, tablespace: u, using: i } = e, $ = a ? `"${a}"."${n}"` : `"${n}"`;
    let p = l ? `CREATE MATERIALIZED VIEW ${$}` : `CREATE VIEW ${$}`;
    i && (p += ` USING "${i}"`);
    const C = [];
    return r && (p += " WITH (", Object.entries(r).forEach(([h, E]) => {
      typeof E > "u" || C.push(`${b(h)} = ${E}`);
    }), p += C.join(", "), p += ")"), u && (p += ` TABLESPACE ${u}`), p += ` AS (${t})`, o && (p += " WITH NO DATA"), p += ";", p;
  }
}
class Z extends m {
  can(e, t) {
    return e.type === "drop_view" && t === "postgresql";
  }
  convert(e) {
    const { name: t, schema: n, materialized: a } = e, r = n ? `"${n}"."${t}"` : `"${t}"`;
    return `DROP${a ? " MATERIALIZED" : ""} VIEW ${r};`;
  }
}
class J extends m {
  can(e, t) {
    return e.type === "rename_view" && t === "postgresql";
  }
  convert(e) {
    const { nameFrom: t, nameTo: n, schema: a, materialized: r } = e, l = `"${a}"."${t}"`;
    return `ALTER${r ? " MATERIALIZED" : ""} VIEW ${l} RENAME TO "${n}";`;
  }
}
class ee extends m {
  can(e, t) {
    return e.type === "alter_view_alter_schema" && t === "postgresql";
  }
  convert(e) {
    const { fromSchema: t, toSchema: n, name: a, materialized: r } = e;
    return `ALTER${r ? " MATERIALIZED" : ""} VIEW "${t}"."${a}" SET SCHEMA "${n}";`;
  }
}
class te extends m {
  can(e, t) {
    return e.type === "alter_view_add_with_option" && t === "postgresql";
  }
  convert(e) {
    const { schema: t, with: n, name: a, materialized: r } = e;
    let l = `ALTER${r ? " MATERIALIZED" : ""} VIEW "${t}"."${a}" SET (`;
    const o = [];
    return Object.entries(n).forEach(([u, i]) => {
      o.push(`${b(u)} = ${i}`);
    }), l += o.join(", "), l += ");", l;
  }
}
class ne extends m {
  can(e, t) {
    return e.type === "alter_view_drop_with_option" && t === "postgresql";
  }
  convert(e) {
    const { schema: t, name: n, materialized: a, with: r } = e;
    let l = `ALTER${a ? " MATERIALIZED" : ""} VIEW "${t}"."${n}" RESET (`;
    const o = [];
    return Object.entries(r).forEach(([u]) => {
      o.push(`${b(u)}`);
    }), l += o.join(", "), l += ");", l;
  }
}
class ae extends m {
  can(e, t) {
    return e.type === "alter_view_alter_tablespace" && t === "postgresql";
  }
  convert(e) {
    const { schema: t, name: n, toTablespace: a } = e;
    return `ALTER MATERIALIZED VIEW "${t}"."${n}" SET TABLESPACE ${a};`;
  }
}
class re extends m {
  can(e, t) {
    return e.type === "alter_view_alter_using" && t === "postgresql";
  }
  convert(e) {
    const { schema: t, name: n, toUsing: a } = e;
    return `ALTER MATERIALIZED VIEW "${t}"."${n}" SET ACCESS METHOD "${a}";`;
  }
}
class oe extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_set_identity" && t === "postgresql";
  }
  convert(e) {
    const { identity: t, tableName: n, columnName: a, schema: r } = e, l = r ? `"${r}"."${n}"` : `"${n}"`, o = T.unsquashIdentity(t), u = r ? `"${r}"."${o == null ? void 0 : o.name}"` : `"${o == null ? void 0 : o.name}"`, i = o ? ` GENERATED ${o.type === "always" ? "ALWAYS" : "BY DEFAULT"} AS IDENTITY (sequence name ${u}${o.increment ? ` INCREMENT BY ${o.increment}` : ""}${o.minValue ? ` MINVALUE ${o.minValue}` : ""}${o.maxValue ? ` MAXVALUE ${o.maxValue}` : ""}${o.startWith ? ` START WITH ${o.startWith}` : ""}${o.cache ? ` CACHE ${o.cache}` : ""}${o.cycle ? " CYCLE" : ""})` : "";
    return `ALTER TABLE ${l} ALTER COLUMN "${a}" ADD${i};`;
  }
}
class se extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_drop_identity" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, columnName: n, schema: a } = e;
    return `ALTER TABLE ${a ? `"${a}"."${t}"` : `"${t}"`} ALTER COLUMN "${n}" DROP IDENTITY;`;
  }
}
class ce extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_change_identity" && t === "postgresql";
  }
  convert(e) {
    const { identity: t, oldIdentity: n, tableName: a, columnName: r, schema: l } = e, o = l ? `"${l}"."${a}"` : `"${a}"`, u = T.unsquashIdentity(t), i = T.unsquashIdentity(n), $ = [];
    return i.type !== u.type && $.push(
      `ALTER TABLE ${o} ALTER COLUMN "${r}" SET GENERATED ${u.type === "always" ? "ALWAYS" : "BY DEFAULT"};`
    ), i.minValue !== u.minValue && $.push(
      `ALTER TABLE ${o} ALTER COLUMN "${r}" SET MINVALUE ${u.minValue};`
    ), i.maxValue !== u.maxValue && $.push(
      `ALTER TABLE ${o} ALTER COLUMN "${r}" SET MAXVALUE ${u.maxValue};`
    ), i.increment !== u.increment && $.push(
      `ALTER TABLE ${o} ALTER COLUMN "${r}" SET INCREMENT BY ${u.increment};`
    ), i.startWith !== u.startWith && $.push(
      `ALTER TABLE ${o} ALTER COLUMN "${r}" SET START WITH ${u.startWith};`
    ), i.cache !== u.cache && $.push(
      `ALTER TABLE ${o} ALTER COLUMN "${r}" SET CACHE ${u.cache};`
    ), i.cycle !== u.cycle && $.push(
      `ALTER TABLE ${o} ALTER COLUMN "${r}" SET ${u.cycle ? "CYCLE" : "NO CYCLE"};`
    ), $;
  }
}
class le extends m {
  can(e, t) {
    return e.type === "create_unique_constraint" && t === "postgresql";
  }
  convert(e) {
    const t = T.unsquashUnique(e.data);
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} ADD CONSTRAINT "${t.name}" UNIQUE${t.nullsNotDistinct ? " NULLS NOT DISTINCT" : ""}("${t.columns.join('","')}");`;
  }
}
class me extends m {
  can(e, t) {
    return e.type === "delete_unique_constraint" && t === "postgresql";
  }
  convert(e) {
    const t = T.unsquashUnique(e.data);
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} DROP CONSTRAINT "${t.name}";`;
  }
}
class ue extends m {
  can(e, t) {
    return e.type === "create_check_constraint" && t === "postgresql";
  }
  convert(e) {
    const t = T.unsquashCheck(e.data);
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} ADD CONSTRAINT "${t.name}" CHECK (${t.value});`;
  }
}
class $e extends m {
  can(e, t) {
    return e.type === "delete_check_constraint" && t === "postgresql";
  }
  convert(e) {
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} DROP CONSTRAINT "${e.constraintName}";`;
  }
}
class ie extends m {
  can(e, t) {
    return e.type === "create_sequence" && t === "postgresql";
  }
  convert(e) {
    const { name: t, values: n, schema: a } = e;
    return `CREATE SEQUENCE ${a ? `"${a}"."${t}"` : `"${t}"`}${n.increment ? ` INCREMENT BY ${n.increment}` : ""}${n.minValue ? ` MINVALUE ${n.minValue}` : ""}${n.maxValue ? ` MAXVALUE ${n.maxValue}` : ""}${n.startWith ? ` START WITH ${n.startWith}` : ""}${n.cache ? ` CACHE ${n.cache}` : ""}${n.cycle ? " CYCLE" : ""};`;
  }
}
class he extends m {
  can(e, t) {
    return e.type === "drop_sequence" && t === "postgresql";
  }
  convert(e) {
    const { name: t, schema: n } = e;
    return `DROP SEQUENCE ${n ? `"${n}"."${t}"` : `"${t}"`};`;
  }
}
class Ee extends m {
  can(e, t) {
    return e.type === "rename_sequence" && t === "postgresql";
  }
  convert(e) {
    const { nameFrom: t, nameTo: n, schema: a } = e;
    return `ALTER SEQUENCE ${a ? `"${a}"."${t}"` : `"${t}"`} RENAME TO "${n}";`;
  }
}
class pe extends m {
  can(e, t) {
    return e.type === "move_sequence" && t === "postgresql";
  }
  convert(e) {
    const { schemaFrom: t, schemaTo: n, name: a } = e, r = t ? `"${t}"."${a}"` : `"${a}"`, l = n ? `"${n}"` : "public";
    return `ALTER SEQUENCE ${r} SET SCHEMA ${l};`;
  }
}
class Te extends m {
  can(e, t) {
    return e.type === "alter_sequence" && t === "postgresql";
  }
  convert(e) {
    const { name: t, schema: n, values: a } = e, { increment: r, minValue: l, maxValue: o, startWith: u, cache: i, cycle: $ } = a;
    return `ALTER SEQUENCE ${n ? `"${n}"."${t}"` : `"${t}"`}${r ? ` INCREMENT BY ${r}` : ""}${l ? ` MINVALUE ${l}` : ""}${o ? ` MAXVALUE ${o}` : ""}${u ? ` START WITH ${u}` : ""}${i ? ` CACHE ${i}` : ""}${$ ? " CYCLE" : ""};`;
  }
}
class w extends m {
  can(e) {
    return e.type === "create_type_enum";
  }
  convert(e) {
    const { name: t, values: n, schema: a } = e, r = a ? `"${a}"."${t}"` : `"${t}"`;
    let l = "(";
    return l += n.map((u) => `'${x(u)}'`).join(", "), l += ")", `CREATE TYPE ${r} AS ENUM${l};`;
  }
}
class D extends m {
  can(e) {
    return e.type === "drop_type_enum";
  }
  convert(e) {
    const { name: t, schema: n } = e;
    return `DROP TYPE ${n ? `"${n}"."${t}"` : `"${t}"`};`;
  }
}
class Ae extends m {
  can(e) {
    return e.type === "alter_type_add_value";
  }
  convert(e) {
    const { name: t, schema: n, value: a, before: r } = e;
    return `ALTER TYPE ${n ? `"${n}"."${t}"` : `"${t}"`} ADD VALUE '${a}'${r.length ? ` BEFORE '${r}'` : ""};`;
  }
}
class Ne extends m {
  can(e) {
    return e.type === "move_type_enum";
  }
  convert(e) {
    const { name: t, schemaFrom: n, schemaTo: a } = e;
    return `ALTER TYPE ${n ? `"${n}"."${t}"` : `"${t}"`} SET SCHEMA "${a}";`;
  }
}
class Ce extends m {
  can(e) {
    return e.type === "rename_type_enum";
  }
  convert(e) {
    const { nameTo: t, nameFrom: n, schema: a } = e;
    return `ALTER TYPE ${a ? `"${a}"."${n}"` : `"${n}"`} RENAME TO "${t}";`;
  }
}
class de extends m {
  can(e) {
    return e.type === "alter_type_drop_value";
  }
  convert(e) {
    const { columnsWithEnum: t, name: n, newValues: a, schema: r } = e, l = [];
    for (const o of t)
      l.push(
        `ALTER TABLE "${o.schema}"."${o.table}" ALTER COLUMN "${o.column}" SET DATA TYPE text;`
      );
    l.push(
      new D().convert({
        name: n,
        schema: r,
        type: "drop_type_enum"
      })
    ), l.push(
      new w().convert({
        name: n,
        schema: r,
        values: a,
        type: "create_type_enum"
      })
    );
    for (const o of t)
      l.push(
        `ALTER TABLE "${o.schema}"."${o.table}" ALTER COLUMN "${o.column}" SET DATA TYPE "${r}"."${n}" USING "${o.column}"::"${r}"."${n}";`
      );
    return l;
  }
}
class Se extends m {
  can(e, t) {
    return e.type === "drop_table" && t === "postgresql";
  }
  convert(e, t, n) {
    const { tableName: a, schema: r, policies: l } = e, o = r ? `"${r}"."${a}"` : `"${a}"`, u = new g();
    return [...(l == null ? void 0 : l.map(($) => u.convert({
      type: "drop_policy",
      tableName: a,
      data: n === "push" ? T.unsquashPolicyPush($) : T.unsquashPolicy($),
      schema: r
    }))) ?? [], `DROP TABLE ${o} CASCADE;`];
  }
}
class Re extends m {
  can(e, t) {
    return e.type === "rename_table" && t === "postgresql";
  }
  convert(e) {
    const { tableNameFrom: t, tableNameTo: n, fromSchema: a } = e, r = a ? `"${a}"."${t}"` : `"${t}"`, l = `"${n}"`;
    return `ALTER TABLE ${r} RENAME TO ${l};`;
  }
}
class ye extends m {
  can(e, t) {
    return e.type === "alter_table_rename_column" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, oldColumnName: n, newColumnName: a, schema: r } = e;
    return `ALTER TABLE ${r ? `"${r}"."${t}"` : `"${t}"`} RENAME COLUMN "${n}" TO "${a}";`;
  }
}
class Le extends m {
  can(e, t) {
    return e.type === "alter_table_drop_column" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, columnName: n, schema: a } = e;
    return `ALTER TABLE ${a ? `"${a}"."${t}"` : `"${t}"`} DROP COLUMN IF EXISTS "${n}";`;
  }
}
class v extends m {
  can(e, t) {
    return e.type === "alter_table_add_column" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, column: n, schema: a } = e, { name: r, notNull: l, generated: o, primaryKey: u, identity: i } = n, $ = u ? " PRIMARY KEY" : "", p = a ? `"${a}"."${t}"` : `"${t}"`, C = `${n.default !== void 0 ? ` DEFAULT ${n.default}` : ""}`, h = n.typeSchema && n.typeSchema !== "public" ? `"${n.typeSchema}".` : "", E = _(h, n.type), d = `${l ? " NOT NULL" : ""}`, A = i ? T.unsquashIdentity(i) : void 0, S = a ? `"${a}"."${A == null ? void 0 : A.name}"` : `"${A == null ? void 0 : A.name}"`, R = A ? ` GENERATED ${A.type === "always" ? "ALWAYS" : "BY DEFAULT"} AS IDENTITY (sequence name ${S}${A.increment ? ` INCREMENT BY ${A.increment}` : ""}${A.minValue ? ` MINVALUE ${A.minValue}` : ""}${A.maxValue ? ` MAXVALUE ${A.maxValue}` : ""}${A.startWith ? ` START WITH ${A.startWith}` : ""}${A.cache ? ` CACHE ${A.cache}` : ""}${A.cycle ? " CYCLE" : ""})` : "", L = o ? ` GENERATED ALWAYS AS (${o == null ? void 0 : o.as}) STORED` : "";
    return `ALTER TABLE ${p} ADD COLUMN "${r}" ${E}${$}${C}${L}${d}${R};`;
  }
}
class be extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_set_type" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, columnName: n, newDataType: a, schema: r } = e;
    return `ALTER TABLE ${r ? `"${r}"."${t}"` : `"${t}"`} ALTER COLUMN "${n}" SET DATA TYPE ${a};`;
  }
}
class ve extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_set_default" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, columnName: n, schema: a } = e;
    return `ALTER TABLE ${a ? `"${a}"."${t}"` : `"${t}"`} ALTER COLUMN "${n}" SET DEFAULT ${e.newDefaultValue};`;
  }
}
class _e extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_drop_default" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, columnName: n, schema: a } = e;
    return `ALTER TABLE ${a ? `"${a}"."${t}"` : `"${t}"`} ALTER COLUMN "${n}" DROP DEFAULT;`;
  }
}
class ge extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_drop_generated" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, columnName: n, schema: a } = e;
    return `ALTER TABLE ${a ? `"${a}"."${t}"` : `"${t}"`} ALTER COLUMN "${n}" DROP EXPRESSION;`;
  }
}
class Pe extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_set_generated" && t === "postgresql";
  }
  convert(e) {
    const {
      tableName: t,
      columnName: n,
      schema: a,
      columnNotNull: r,
      columnDefault: l,
      columnOnUpdate: o,
      columnAutoIncrement: u,
      columnPk: i,
      columnGenerated: $
    } = e, p = a ? `"${a}"."${t}"` : `"${t}"`, C = new v().convert({
      schema: a,
      tableName: t,
      column: {
        name: n,
        type: e.newDataType,
        notNull: r,
        default: l,
        onUpdate: o,
        autoincrement: u,
        primaryKey: i,
        generated: $
      },
      type: "alter_table_add_column"
    });
    return [`ALTER TABLE ${p} drop column "${n}";`, C];
  }
}
class we extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_alter_generated" && t === "postgresql";
  }
  convert(e) {
    const {
      tableName: t,
      columnName: n,
      schema: a,
      columnNotNull: r,
      columnDefault: l,
      columnOnUpdate: o,
      columnAutoIncrement: u,
      columnPk: i,
      columnGenerated: $
    } = e, p = a ? `"${a}"."${t}"` : `"${t}"`, C = new v().convert({
      schema: a,
      tableName: t,
      column: {
        name: n,
        type: e.newDataType,
        notNull: r,
        default: l,
        onUpdate: o,
        autoincrement: u,
        primaryKey: i,
        generated: $
      },
      type: "alter_table_add_column"
    });
    return [`ALTER TABLE ${p} drop column "${n}";`, C];
  }
}
class De extends m {
  can(e, t) {
    return e.type === "create_composite_pk" && t === "postgresql";
  }
  convert(e) {
    const { columns: t } = T.unsquashPK(e.data);
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} ADD CONSTRAINT "${e.constraintName}" PRIMARY KEY("${t.join(
      '","'
    )}");`;
  }
}
class Ie extends m {
  can(e, t) {
    return e.type === "delete_composite_pk" && t === "postgresql";
  }
  convert(e) {
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} DROP CONSTRAINT "${e.constraintName}";`;
  }
}
class Oe extends m {
  can(e, t) {
    return e.type === "alter_composite_pk" && t === "postgresql";
  }
  convert(e) {
    const { columns: t } = T.unsquashPK(e.new), n = e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`;
    return `ALTER TABLE ${n} DROP CONSTRAINT "${e.oldConstraintName}";
${U}ALTER TABLE ${n} ADD CONSTRAINT "${e.newConstraintName}" PRIMARY KEY("${t.join('","')}");`;
  }
}
class We extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_set_pk" && t === "postgresql";
  }
  convert(e) {
    const { columnName: t } = e;
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} ADD PRIMARY KEY ("${t}");`;
  }
}
class qe extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_drop_pk" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, schema: n } = e;
    return `/*
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = '${typeof n > "u" || n === "" ? "public" : n}'
                AND table_name = '${t}'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually

    Hope to release this update as soon as possible
*/

-- ALTER TABLE "${t}" DROP CONSTRAINT "<constraint_name>";`;
  }
}
class Ue extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_set_notnull" && t === "postgresql";
  }
  convert(e) {
    const { columnName: t } = e;
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} ALTER COLUMN "${t}" SET NOT NULL;`;
  }
}
class xe extends m {
  can(e, t) {
    return e.type === "alter_table_alter_column_drop_notnull" && t === "postgresql";
  }
  convert(e) {
    const { columnName: t } = e;
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`} ALTER COLUMN "${t}" DROP NOT NULL;`;
  }
}
class fe extends m {
  can(e, t) {
    return e.type === "create_reference" && t === "postgresql";
  }
  convert(e) {
    const { name: t, tableFrom: n, tableTo: a, columnsFrom: r, columnsTo: l, onDelete: o, onUpdate: u, schemaTo: i } = T.unsquashFK(
      e.data
    ), $ = o ? ` ON DELETE ${o}` : "", p = u ? ` ON UPDATE ${u}` : "", C = r.map((R) => `"${R}"`).join(","), h = l.map((R) => `"${R}"`).join(","), E = e.schema ? `"${e.schema}"."${n}"` : `"${n}"`, d = i ? `"${i}"."${a}"` : `"${a}"`, A = `ALTER TABLE ${E} ADD CONSTRAINT "${t}" FOREIGN KEY (${C}) REFERENCES ${d}(${h})${$}${p}`;
    let S = `DO $$ BEGIN
`;
    return S += " " + A + `;
`, S += `EXCEPTION
`, S += ` WHEN duplicate_object THEN null;
`, S += `END $$;
`, S;
  }
}
class Me extends m {
  can(e, t) {
    return e.type === "alter_reference" && t === "postgresql";
  }
  convert(e) {
    const t = T.unsquashFK(e.data), n = T.unsquashFK(e.oldFkey);
    let r = `ALTER TABLE ${e.schema ? `"${e.schema}"."${n.tableFrom}"` : `"${n.tableFrom}"`} DROP CONSTRAINT "${n.name}";
`;
    const l = t.onDelete ? ` ON DELETE ${t.onDelete}` : "", o = t.onUpdate ? ` ON UPDATE ${t.onUpdate}` : "", u = t.columnsFrom.map((h) => `"${h}"`).join(","), i = t.columnsTo.map((h) => `"${h}"`).join(","), $ = n.schemaTo ? `"${n.schemaTo}"."${n.tableFrom}"` : `"${n.tableFrom}"`, p = t.schemaTo ? `"${t.schemaTo}"."${t.tableFrom}"` : `"${t.tableFrom}"`, C = `ALTER TABLE ${$} ADD CONSTRAINT "${t.name}" FOREIGN KEY (${u}) REFERENCES ${p}(${i})${l}${o}`;
    return r += `DO $$ BEGIN
`, r += " " + C + `;
`, r += `EXCEPTION
`, r += ` WHEN duplicate_object THEN null;
`, r += `END $$;
`, r;
  }
}
class Be extends m {
  can(e, t) {
    return e.type === "delete_reference" && t === "postgresql";
  }
  convert(e) {
    const t = e.tableName, { name: n } = T.unsquashFK(e.data);
    return `ALTER TABLE ${e.schema ? `"${e.schema}"."${t}"` : `"${t}"`} DROP CONSTRAINT "${n}";
`;
  }
}
class Ye extends m {
  can(e, t) {
    return e.type === "create_index_pg" && t === "postgresql";
  }
  convert(e) {
    const { name: t, columns: n, isUnique: a, concurrently: r, with: l, method: o, where: u } = e.data, i = a ? "UNIQUE INDEX" : "INDEX", $ = n.map(
      (h) => `${h.isExpression ? h.expression : `"${h.expression}"`}${h.opclass ? ` ${h.opclass}` : h.asc ? "" : " DESC"}${h.asc && h.nulls && h.nulls === "last" || h.opclass ? "" : ` NULLS ${h.nulls.toUpperCase()}`}`
    ).join(","), p = e.schema ? `"${e.schema}"."${e.tableName}"` : `"${e.tableName}"`;
    function C(h) {
      let E = "";
      for (const d in h)
        Object.prototype.hasOwnProperty.call(h, d) && (E += `${d}=${h[d]},`);
      return E = E.slice(0, -1), E;
    }
    return `CREATE ${i}${r ? " CONCURRENTLY" : ""} IF NOT EXISTS "${t}" ON ${p} USING ${o} (${$})${Object.keys(l).length !== 0 ? ` WITH (${C(l)})` : ""}${u ? ` WHERE ${u}` : ""};`;
  }
}
class Ve extends m {
  can(e, t) {
    return e.type === "drop_index" && t === "postgresql";
  }
  convert(e) {
    const { name: t } = T.unsquashIdx(e.data);
    return `DROP INDEX IF EXISTS "${t}";`;
  }
}
class Fe extends m {
  can(e, t) {
    return e.type === "create_schema" && t === "postgresql";
  }
  convert(e) {
    const { name: t } = e;
    return `CREATE SCHEMA "${t}";
`;
  }
}
class He extends m {
  can(e, t) {
    return e.type === "rename_schema" && t === "postgresql";
  }
  convert(e) {
    const { from: t, to: n } = e;
    return `ALTER SCHEMA "${t}" RENAME TO "${n}";
`;
  }
}
class ke extends m {
  can(e, t) {
    return e.type === "drop_schema" && t === "postgresql";
  }
  convert(e) {
    const { name: t } = e;
    return `DROP SCHEMA "${t}";
`;
  }
}
class Ke extends m {
  can(e, t) {
    return e.type === "alter_table_set_schema" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, schemaFrom: n, schemaTo: a } = e;
    return `ALTER TABLE "${n}"."${t}" SET SCHEMA "${a}";
`;
  }
}
class je extends m {
  can(e, t) {
    return e.type === "alter_table_set_new_schema" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, to: n, from: a } = e;
    return `ALTER TABLE ${a ? `"${a}"."${t}"` : `"${t}"`} SET SCHEMA "${n}";
`;
  }
}
class Ge extends m {
  can(e, t) {
    return e.type === "alter_table_remove_from_schema" && t === "postgresql";
  }
  convert(e) {
    const { tableName: t, schema: n } = e;
    return `ALTER TABLE ${n ? `"${n}"."${t}"` : `"${t}"`} SET SCHEMA public;
`;
  }
}
const c = [];
c.push(new z());
c.push(new Q());
c.push(new Z());
c.push(new J());
c.push(new ee());
c.push(new te());
c.push(new ne());
c.push(new ae());
c.push(new re());
c.push(new w());
c.push(new D());
c.push(new Ae());
c.push(new Ne());
c.push(new Ce());
c.push(new de());
c.push(new ie());
c.push(new he());
c.push(new Ee());
c.push(new pe());
c.push(new Te());
c.push(new Se());
c.push(new Re());
c.push(new ye());
c.push(new Le());
c.push(new v());
c.push(new be());
c.push(new le());
c.push(new me());
c.push(new ue());
c.push(new $e());
c.push(new Ye());
c.push(new Ve());
c.push(new We());
c.push(new qe());
c.push(new Ue());
c.push(new xe());
c.push(new ve());
c.push(new _e());
c.push(new H());
c.push(new V());
c.push(new g());
c.push(new F());
c.push(new G());
c.push(new k());
c.push(new K());
c.push(new j());
c.push(new P());
c.push(new X());
c.push(new M());
c.push(new Y());
c.push(new f());
c.push(new B());
c.push(new Pe());
c.push(new ge());
c.push(new we());
c.push(new fe());
c.push(new Me());
c.push(new Be());
c.push(new Fe());
c.push(new He());
c.push(new ke());
c.push(new Ke());
c.push(new je());
c.push(new Ge());
c.push(new se());
c.push(new oe());
c.push(new ce());
c.push(new De());
c.push(new Ie());
c.push(new Oe());
function Ze(s, e, t, n) {
  return s.flatMap((r) => {
    const l = c.filter((u) => u.can(r, e)), o = l.length === 1 ? l[0] : void 0;
    return o ? o.convert(r, n, t) : "";
  }).filter((r) => r !== "");
}
export {
  Ze as fromJson
};
