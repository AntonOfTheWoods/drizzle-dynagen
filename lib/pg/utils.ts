/* eslint-disable @typescript-eslint/no-explicit-any */
import { CasingCache, toCamelCase, toSnakeCase } from "drizzle-orm/casing";
import type { CasingType, NamedWithSchema } from "./lib";
import { SQL } from "drizzle-orm";

export const copy = <T>(it: T): T => {
  return JSON.parse(JSON.stringify(it));
};

export const prepareMigrationMeta = (
  schemas: { from: string; to: string }[],
  tables: { from: NamedWithSchema; to: NamedWithSchema }[],
  columns: {
    from: { table: string; schema: string; column: string };
    to: { table: string; schema: string; column: string };
  }[],
) => {
  const _meta = {
    schemas: {} as Record<string, string>,
    tables: {} as Record<string, string>,
    columns: {} as Record<string, string>,
  };

  schemas.forEach((it) => {
    const from = schemaRenameKey(it.from);
    const to = schemaRenameKey(it.to);
    _meta.schemas[from] = to;
  });
  tables.forEach((it) => {
    const from = tableRenameKey(it.from);
    const to = tableRenameKey(it.to);
    _meta.tables[from] = to;
  });

  columns.forEach((it) => {
    const from = columnRenameKey(it.from.table, it.from.schema, it.from.column);
    const to = columnRenameKey(it.to.table, it.to.schema, it.to.column);
    _meta.columns[from] = to;
  });

  return _meta;
};

export const schemaRenameKey = (it: string) => {
  return it;
};

export const tableRenameKey = (it: NamedWithSchema) => {
  const out = it.schema ? `"${it.schema}"."${it.name}"` : `"${it.name}"`;
  return out;
};

export const columnRenameKey = (table: string, schema: string, column: string) => {
  const out = schema ? `"${schema}"."${table}"."${column}"` : `"${table}"."${column}"`;
  return out;
};

export function escapeSingleQuotes(str: string) {
  return str.replace(/'/g, "''");
}

export type DB = {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  query: <T extends any = any>(sql: string, params?: any[]) => Promise<T[]>;
};

export function getColumnCasing(
  column: { keyAsName: boolean; name: string | undefined },
  casing: CasingType | undefined,
) {
  if (!column.name) return "";
  return !column.keyAsName || casing === undefined
    ? column.name
    : casing === "camelCase"
      ? toCamelCase(column.name)
      : toSnakeCase(column.name);
}

export const sqlToStr = (sql: SQL, casing: CasingType | undefined) => {
  return sql.toQuery({
    escapeName: () => {
      throw new Error("we don't support params for `sql` default values");
    },
    escapeParam: () => {
      throw new Error("we don't support params for `sql` default values");
    },
    escapeString: () => {
      throw new Error("we don't support params for `sql` default values");
    },
    casing: new CasingCache(casing),
  }).sql;
};

export function isPgArrayType(sqlType: string) {
  return sqlType.match(/.*\[\d*\].*|.*\[\].*/g) !== null;
}
