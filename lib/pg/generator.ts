/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PgEnum,
  PgMaterializedView,
  PgPolicy,
  PgRole,
  PgSchema,
  PgSequence,
  PgTable,
  PgView,
} from "drizzle-orm/pg-core";

import { pgSchema, squashPgScheme } from "./pgSchema";
import { generatePgSnapshot } from "./pgSerializer";

import { DbSchemaElements, EMPTY_RENAMES, EMPTY_SQUASHED_SCHEMA } from "./global";
import { CasingType } from "./lib";
import { applyPgSnapshotsDiff } from "./snapshotsDiffer";
import {
  columnsResolver,
  enumsResolver,
  indPolicyResolver,
  policyResolver,
  rolesResolver,
  schemasResolver,
  sequencesResolver,
  tablesResolver,
  viewsResolver,
} from "./resolvers";

export { fromJson } from "./sqlgenerator";

export type PostgresSchema = Record<
  string,
  PgTable<any> | PgEnum<any> | PgSchema | PgSequence | PgView | PgMaterializedView | PgRole | PgPolicy
>;

export async function generateSql(dbObjects: DbSchemaElements, casing?: CasingType | undefined) {
  const serialized2 = generatePgSnapshot(
    dbObjects.tables || [],
    dbObjects.enums || [],
    dbObjects.schemas || [],
    dbObjects.sequences || [],
    dbObjects.roles || [],
    dbObjects.policies || [],
    dbObjects.views || [],
    dbObjects.materializedViews || [],
    casing,
  );

  const { version: _v2, dialect: _d2, ...rest2 } = serialized2;

  const sch2 = {
    version: "7",
    dialect: "postgresql",
    id: "0",
    prevId: "0",
    ...rest2,
  } as const;

  const sn2 = squashPgScheme(sch2);

  const validatedCur = pgSchema.parse(sch2);
  const { sqlStatements, statements } = await applyPgSnapshotsDiff(
    EMPTY_SQUASHED_SCHEMA,
    sn2,
    schemasResolver(EMPTY_RENAMES),
    enumsResolver(EMPTY_RENAMES),
    sequencesResolver(EMPTY_RENAMES),
    policyResolver(EMPTY_RENAMES),
    indPolicyResolver(EMPTY_RENAMES),
    rolesResolver(EMPTY_RENAMES),
    tablesResolver(EMPTY_RENAMES),
    columnsResolver(EMPTY_RENAMES),
    viewsResolver(EMPTY_RENAMES),
    validatedCur,
  );
  return { sqlStatements, statements };
}
