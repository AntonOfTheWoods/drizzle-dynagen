import {
  AnyPgTable,
  PgEnum,
  PgMaterializedView,
  PgPolicy,
  PgRole,
  PgSchema,
  PgSequence,
  PgView,
} from "drizzle-orm/pg-core";
import { CasingType } from "./lib";

export const originUUID = "00000000-0000-0000-0000-000000000000";
export const snapshotVersion = "7";

// export const PgSchemaTemplate = {
//   version: '7',
//   dialect: 'postgresql',
//   id: '0',
//   prevId: '0',
//
//   tables: [],
//   enums: [],
//   schemas: [],
//   sequences: [],
//   roles: [],
//   policies: [],
//   views: [],
//   _meta: {
//     schemas: {},
//     tables: {},
//     columns: {},
//   },
// } as const

export type DbSchemaElements = {
  tables?: AnyPgTable[];
  schemas?: PgSchema[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  enums?: PgEnum<any>[];
  sequences?: PgSequence[];
  roles?: PgRole[];
  policies?: PgPolicy[];
  views?: PgView[];
  materializedViews?: PgMaterializedView[];
  casing?: CasingType;
};

export const EMPTY_SQUASHED_SCHEMA = {
  version: "7",
  dialect: "postgresql",
  tables: {},
  enums: {},
  schemas: {},
  views: {},
  policies: {},
  sequences: {},
  roles: {},
} as const;

export const EMPTY_RENAMES = new Set([]);

export const mapValues = <IN, OUT>(obj: Record<string, IN>, map: (input: IN) => OUT): Record<string, OUT> => {
  const result = Object.keys(obj).reduce(
    function (result, key) {
      result[key] = map(obj[key]);
      return result;
    },
    {} as Record<string, OUT>,
  );
  return result;
};

export const mapKeys = <T>(obj: Record<string, T>, map: (key: string, value: T) => string): Record<string, T> => {
  const result = Object.fromEntries(
    Object.entries(obj).map(([key, val]) => {
      const newKey = map(key, val);
      return [newKey, val];
    }),
  );
  return result;
};

export const mapEntries = <T>(
  obj: Record<string, T>,
  map: (key: string, value: T) => [string, T],
): Record<string, T> => {
  const result = Object.fromEntries(
    Object.entries(obj).map(([key, val]) => {
      const [newKey, newVal] = map(key, val);
      return [newKey, newVal];
    }),
  );
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customMapEntries = <TReturn, T = any>(
  obj: Record<string, T>,
  map: (key: string, value: T) => [string, TReturn],
): Record<string, TReturn> => {
  const result = Object.fromEntries(
    Object.entries(obj).map(([key, val]) => {
      const [newKey, newVal] = map(key, val);
      return [newKey, newVal];
    }),
  );
  return result;
};
