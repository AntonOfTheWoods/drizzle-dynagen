/* eslint-disable @typescript-eslint/no-explicit-any */
import { is } from "drizzle-orm";
import {
  isPgEnum,
  isPgMaterializedView,
  isPgSequence,
  isPgView,
  PgEnum,
  PgMaterializedView,
  PgPolicy,
  PgRole,
  PgSchema,
  PgSequence,
  PgTable,
  PgView,
} from "drizzle-orm/pg-core";
import { CasingType, Named } from "../lib/pg/lib";
import { pgSchema, Policy, Role, squashPgScheme, View } from "../lib/pg/pgSchema";
import { generatePgSnapshot } from "../lib/pg/pgSerializer";
import {
  applyPgSnapshotsDiff,
  Column,
  ColumnsResolverInput,
  ColumnsResolverOutput,
  Enum,
  PolicyResolverInput,
  PolicyResolverOutput,
  ResolverInput,
  ResolverOutput,
  ResolverOutputWithMoved,
  RolesResolverInput,
  RolesResolverOutput,
  Sequence,
  Table,
  TablePolicyResolverInput,
  TablePolicyResolverOutput,
} from "../lib/pg/snapshotsDiffer";

export type PostgresSchema = Record<
  string,
  PgTable<any> | PgEnum<any> | PgSchema | PgSequence | PgView | PgMaterializedView | PgRole | PgPolicy
>;

export const testSchemasResolver =
  (renames: Set<string>) =>
  async (input: ResolverInput<Named>): Promise<ResolverOutput<Named>> => {
    try {
      if (input.created.length === 0 || input.deleted.length === 0 || renames.size === 0) {
        return {
          created: input.created,
          renamed: [],
          deleted: input.deleted,
        };
      }

      let createdSchemas = [...input.created];
      let deletedSchemas = [...input.deleted];

      const result: {
        created: Named[];
        renamed: { from: Named; to: Named }[];
        deleted: Named[];
      } = { created: [], renamed: [], deleted: [] };

      for (const rename of renames) {
        const [from, to] = rename.split("->");

        const idxFrom = deletedSchemas.findIndex((it) => {
          return it.name === from;
        });

        if (idxFrom >= 0) {
          const idxTo = createdSchemas.findIndex((it) => {
            return it.name === to;
          });

          result.renamed.push({
            from: deletedSchemas[idxFrom],
            to: createdSchemas[idxTo],
          });

          delete createdSchemas[idxTo];
          delete deletedSchemas[idxFrom];

          createdSchemas = createdSchemas.filter(Boolean);
          deletedSchemas = deletedSchemas.filter(Boolean);
        }
      }

      result.created = createdSchemas;
      result.deleted = deletedSchemas;

      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

export const testSequencesResolver =
  (renames: Set<string>) =>
  async (input: ResolverInput<Sequence>): Promise<ResolverOutputWithMoved<Sequence>> => {
    try {
      if (input.created.length === 0 || input.deleted.length === 0 || renames.size === 0) {
        return {
          created: input.created,
          moved: [],
          renamed: [],
          deleted: input.deleted,
        };
      }

      let createdSequences = [...input.created];
      let deletedSequences = [...input.deleted];

      const result: {
        created: Sequence[];
        moved: { name: string; schemaFrom: string; schemaTo: string }[];
        renamed: { from: Sequence; to: Sequence }[];
        deleted: Sequence[];
      } = { created: [], renamed: [], deleted: [], moved: [] };

      for (const rename of renames) {
        const [from, to] = rename.split("->");

        const idxFrom = deletedSequences.findIndex((it) => {
          return `${it.schema || "public"}.${it.name}` === from;
        });

        if (idxFrom >= 0) {
          const idxTo = createdSequences.findIndex((it) => {
            return `${it.schema || "public"}.${it.name}` === to;
          });

          const tableFrom = deletedSequences[idxFrom];
          const tableTo = createdSequences[idxFrom];

          if (tableFrom.schema !== tableTo.schema) {
            result.moved.push({
              name: tableFrom.name,
              schemaFrom: tableFrom.schema,
              schemaTo: tableTo.schema,
            });
          }

          if (tableFrom.name !== tableTo.name) {
            result.renamed.push({
              from: deletedSequences[idxFrom],
              to: createdSequences[idxTo],
            });
          }

          delete createdSequences[idxTo];
          delete deletedSequences[idxFrom];

          createdSequences = createdSequences.filter(Boolean);
          deletedSequences = deletedSequences.filter(Boolean);
        }
      }

      result.created = createdSequences;
      result.deleted = deletedSequences;

      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

export const testEnumsResolver =
  (renames: Set<string>) =>
  async (input: ResolverInput<Enum>): Promise<ResolverOutputWithMoved<Enum>> => {
    try {
      if (input.created.length === 0 || input.deleted.length === 0 || renames.size === 0) {
        return {
          created: input.created,
          moved: [],
          renamed: [],
          deleted: input.deleted,
        };
      }

      let createdEnums = [...input.created];
      let deletedEnums = [...input.deleted];

      const result: {
        created: Enum[];
        moved: { name: string; schemaFrom: string; schemaTo: string }[];
        renamed: { from: Enum; to: Enum }[];
        deleted: Enum[];
      } = { created: [], renamed: [], deleted: [], moved: [] };

      for (const rename of renames) {
        const [from, to] = rename.split("->");

        const idxFrom = deletedEnums.findIndex((it) => {
          return `${it.schema || "public"}.${it.name}` === from;
        });

        if (idxFrom >= 0) {
          const idxTo = createdEnums.findIndex((it) => {
            return `${it.schema || "public"}.${it.name}` === to;
          });

          const tableFrom = deletedEnums[idxFrom];
          const tableTo = createdEnums[idxFrom];

          if (tableFrom.schema !== tableTo.schema) {
            result.moved.push({
              name: tableFrom.name,
              schemaFrom: tableFrom.schema,
              schemaTo: tableTo.schema,
            });
          }

          if (tableFrom.name !== tableTo.name) {
            result.renamed.push({
              from: deletedEnums[idxFrom],
              to: createdEnums[idxTo],
            });
          }

          delete createdEnums[idxTo];
          delete deletedEnums[idxFrom];

          createdEnums = createdEnums.filter(Boolean);
          deletedEnums = deletedEnums.filter(Boolean);
        }
      }

      result.created = createdEnums;
      result.deleted = deletedEnums;

      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

export const testTablesResolver =
  (renames: Set<string>) =>
  async (input: ResolverInput<Table>): Promise<ResolverOutputWithMoved<Table>> => {
    try {
      if (input.created.length === 0 || input.deleted.length === 0 || renames.size === 0) {
        return {
          created: input.created,
          moved: [],
          renamed: [],
          deleted: input.deleted,
        };
      }

      let createdTables = [...input.created];
      let deletedTables = [...input.deleted];

      const result: {
        created: Table[];
        moved: { name: string; schemaFrom: string; schemaTo: string }[];
        renamed: { from: Table; to: Table }[];
        deleted: Table[];
      } = { created: [], renamed: [], deleted: [], moved: [] };

      for (const rename of renames) {
        const [from, to] = rename.split("->");

        const idxFrom = deletedTables.findIndex((it) => {
          return `${it.schema || "public"}.${it.name}` === from;
        });

        if (idxFrom >= 0) {
          const idxTo = createdTables.findIndex((it) => {
            return `${it.schema || "public"}.${it.name}` === to;
          });

          const tableFrom = deletedTables[idxFrom];
          const tableTo = createdTables[idxFrom];

          if (tableFrom.schema !== tableTo.schema) {
            result.moved.push({
              name: tableFrom.name,
              schemaFrom: tableFrom.schema,
              schemaTo: tableTo.schema,
            });
          }

          if (tableFrom.name !== tableTo.name) {
            result.renamed.push({
              from: deletedTables[idxFrom],
              to: createdTables[idxTo],
            });
          }

          delete createdTables[idxTo];
          delete deletedTables[idxFrom];

          createdTables = createdTables.filter(Boolean);
          deletedTables = deletedTables.filter(Boolean);
        }
      }

      result.created = createdTables;
      result.deleted = deletedTables;

      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

export const testColumnsResolver =
  (renames: Set<string>) =>
  async (input: ColumnsResolverInput<Column>): Promise<ColumnsResolverOutput<Column>> => {
    try {
      if (input.created.length === 0 || input.deleted.length === 0 || renames.size === 0) {
        return {
          tableName: input.tableName,
          schema: input.schema,
          created: input.created,
          renamed: [],
          deleted: input.deleted,
        };
      }

      let createdColumns = [...input.created];
      let deletedColumns = [...input.deleted];

      const renamed: { from: Column; to: Column }[] = [];

      const schema = input.schema || "public";

      for (const rename of renames) {
        const [from, to] = rename.split("->");

        const idxFrom = deletedColumns.findIndex((it) => {
          return `${schema}.${input.tableName}.${it.name}` === from;
        });

        if (idxFrom >= 0) {
          const idxTo = createdColumns.findIndex((it) => {
            return `${schema}.${input.tableName}.${it.name}` === to;
          });

          renamed.push({
            from: deletedColumns[idxFrom],
            to: createdColumns[idxTo],
          });

          delete createdColumns[idxTo];
          delete deletedColumns[idxFrom];

          createdColumns = createdColumns.filter(Boolean);
          deletedColumns = deletedColumns.filter(Boolean);
        }
      }

      return {
        tableName: input.tableName,
        schema: input.schema,
        created: createdColumns,
        deleted: deletedColumns,
        renamed,
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

export const testPolicyResolver =
  (renames: Set<string>) =>
  async (input: TablePolicyResolverInput<Policy>): Promise<TablePolicyResolverOutput<Policy>> => {
    try {
      if (input.created.length === 0 || input.deleted.length === 0 || renames.size === 0) {
        return {
          tableName: input.tableName,
          schema: input.schema,
          created: input.created,
          renamed: [],
          deleted: input.deleted,
        };
      }

      let createdPolicies = [...input.created];
      let deletedPolicies = [...input.deleted];

      const renamed: { from: Policy; to: Policy }[] = [];

      const schema = input.schema || "public";

      for (const rename of renames) {
        const [from, to] = rename.split("->");

        const idxFrom = deletedPolicies.findIndex((it) => {
          return `${schema}.${input.tableName}.${it.name}` === from;
        });

        if (idxFrom >= 0) {
          const idxTo = createdPolicies.findIndex((it) => {
            return `${schema}.${input.tableName}.${it.name}` === to;
          });

          renamed.push({
            from: deletedPolicies[idxFrom],
            to: createdPolicies[idxTo],
          });

          delete createdPolicies[idxTo];
          delete deletedPolicies[idxFrom];

          createdPolicies = createdPolicies.filter(Boolean);
          deletedPolicies = deletedPolicies.filter(Boolean);
        }
      }

      return {
        tableName: input.tableName,
        schema: input.schema,
        created: createdPolicies,
        deleted: deletedPolicies,
        renamed,
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

export const testIndPolicyResolver =
  (renames: Set<string>) =>
  async (input: PolicyResolverInput<Policy>): Promise<PolicyResolverOutput<Policy>> => {
    try {
      if (input.created.length === 0 || input.deleted.length === 0 || renames.size === 0) {
        return {
          created: input.created,
          renamed: [],
          deleted: input.deleted,
        };
      }

      let createdPolicies = [...input.created];
      let deletedPolicies = [...input.deleted];

      const renamed: { from: Policy; to: Policy }[] = [];

      for (const rename of renames) {
        const [from, to] = rename.split("->");

        const idxFrom = deletedPolicies.findIndex((it) => {
          return `${it.on}.${it.name}` === from;
        });

        if (idxFrom >= 0) {
          const idxTo = createdPolicies.findIndex((it) => {
            return `${it.on}.${it.name}` === to;
          });

          renamed.push({
            from: deletedPolicies[idxFrom],
            to: createdPolicies[idxTo],
          });

          delete createdPolicies[idxTo];
          delete deletedPolicies[idxFrom];

          createdPolicies = createdPolicies.filter(Boolean);
          deletedPolicies = deletedPolicies.filter(Boolean);
        }
      }

      return {
        created: createdPolicies,
        deleted: deletedPolicies,
        renamed,
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

export const testRolesResolver =
  (renames: Set<string>) =>
  async (input: RolesResolverInput<Role>): Promise<RolesResolverOutput<Role>> => {
    try {
      if (input.created.length === 0 || input.deleted.length === 0 || renames.size === 0) {
        return {
          created: input.created,
          renamed: [],
          deleted: input.deleted,
        };
      }

      let createdPolicies = [...input.created];
      let deletedPolicies = [...input.deleted];

      const renamed: { from: Policy; to: Policy }[] = [];

      for (const rename of renames) {
        const [from, to] = rename.split("->");

        const idxFrom = deletedPolicies.findIndex((it) => {
          return `${it.name}` === from;
        });

        if (idxFrom >= 0) {
          const idxTo = createdPolicies.findIndex((it) => {
            return `${it.name}` === to;
          });

          renamed.push({
            from: deletedPolicies[idxFrom],
            to: createdPolicies[idxTo],
          });

          delete createdPolicies[idxTo];
          delete deletedPolicies[idxFrom];

          createdPolicies = createdPolicies.filter(Boolean);
          deletedPolicies = deletedPolicies.filter(Boolean);
        }
      }

      return {
        created: createdPolicies,
        deleted: deletedPolicies,
        renamed,
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

export const testViewsResolver =
  (renames: Set<string>) =>
  async (input: ResolverInput<View>): Promise<ResolverOutputWithMoved<View>> => {
    try {
      if (input.created.length === 0 || input.deleted.length === 0 || renames.size === 0) {
        return {
          created: input.created,
          moved: [],
          renamed: [],
          deleted: input.deleted,
        };
      }

      let createdViews = [...input.created];
      let deletedViews = [...input.deleted];

      const result: {
        created: View[];
        moved: { name: string; schemaFrom: string; schemaTo: string }[];
        renamed: { from: View; to: View }[];
        deleted: View[];
      } = { created: [], renamed: [], deleted: [], moved: [] };

      for (const rename of renames) {
        const [from, to] = rename.split("->");

        const idxFrom = deletedViews.findIndex((it) => {
          return `${it.schema || "public"}.${it.name}` === from;
        });

        if (idxFrom >= 0) {
          const idxTo = createdViews.findIndex((it) => {
            return `${it.schema || "public"}.${it.name}` === to;
          });

          const viewFrom = deletedViews[idxFrom];
          const viewTo = createdViews[idxFrom];

          if (viewFrom.schema !== viewTo.schema) {
            result.moved.push({
              name: viewFrom.name,
              schemaFrom: viewFrom.schema,
              schemaTo: viewTo.schema,
            });
          }

          if (viewFrom.name !== viewTo.name) {
            result.renamed.push({
              from: deletedViews[idxFrom],
              to: createdViews[idxTo],
            });
          }

          delete createdViews[idxTo];
          delete deletedViews[idxFrom];

          createdViews = createdViews.filter(Boolean);
          deletedViews = deletedViews.filter(Boolean);
        }
      }

      result.created = createdViews;
      result.deleted = deletedViews;

      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

export const applyPgDiffs = async (sn: PostgresSchema, casing: CasingType | undefined) => {
  const dryRun = {
    version: "7",
    dialect: "postgresql",
    id: "0",
    prevId: "0",
    tables: {},
    enums: {},
    views: {},
    schemas: {},
    sequences: {},
    policies: {},
    roles: {},
    _meta: {
      schemas: {},
      tables: {},
      columns: {},
    },
  } as const;

  const tables = Object.values(sn).filter((it) => is(it, PgTable)) as PgTable[];
  const schemas = Object.values(sn).filter((it) => is(it, PgSchema)) as PgSchema[];
  const enums = Object.values(sn).filter((it) => isPgEnum(it)) as PgEnum<any>[];
  const sequences = Object.values(sn).filter((it) => isPgSequence(it)) as PgSequence[];
  const roles = Object.values(sn).filter((it) => is(it, PgRole)) as PgRole[];
  const views = Object.values(sn).filter((it) => isPgView(it)) as PgView[];
  const policies = Object.values(sn).filter((it) => is(it, PgPolicy)) as PgPolicy[];
  const materializedViews = Object.values(sn).filter((it) => isPgMaterializedView(it)) as PgMaterializedView[];

  const serialized1 = generatePgSnapshot(
    tables,
    enums,
    schemas,
    sequences,
    roles,
    policies,
    views,
    materializedViews,
    casing,
  );

  const { version: _v1, dialect: _d1, ...rest1 } = serialized1;

  const sch1 = {
    version: "7",
    dialect: "postgresql",
    id: "0",
    prevId: "0",
    ...rest1,
  } as const;

  const sn1 = squashPgScheme(sch1);

  // const validatedPrev = pgSchema.parse(dryRun);
  const validatedCur = pgSchema.parse(sch1);

  const { sqlStatements, statements } = await applyPgSnapshotsDiff(
    dryRun,
    sn1,
    testSchemasResolver(new Set()),
    testEnumsResolver(new Set()),
    testSequencesResolver(new Set()),
    testPolicyResolver(new Set()),
    testIndPolicyResolver(new Set()),
    testRolesResolver(new Set()),
    testTablesResolver(new Set()),
    testColumnsResolver(new Set()),
    testViewsResolver(new Set()),
    // validatedPrev,
    validatedCur,
  );
  return { sqlStatements, statements };
};

export const diffTestSchemas = async (
  left: PostgresSchema,
  right: PostgresSchema,
  renamesArr: string[],
  casing?: CasingType | undefined,
) => {
  const leftTables = Object.values(left).filter((it) => is(it, PgTable)) as PgTable[];
  const rightTables = Object.values(right).filter((it) => is(it, PgTable)) as PgTable[];

  const leftSchemas = Object.values(left).filter((it) => is(it, PgSchema)) as PgSchema[];
  const rightSchemas = Object.values(right).filter((it) => is(it, PgSchema)) as PgSchema[];

  const leftEnums = Object.values(left).filter((it) => isPgEnum(it)) as PgEnum<any>[];
  const rightEnums = Object.values(right).filter((it) => isPgEnum(it)) as PgEnum<any>[];

  const leftSequences = Object.values(left).filter((it) => isPgSequence(it)) as PgSequence[];
  const rightSequences = Object.values(right).filter((it) => isPgSequence(it)) as PgSequence[];

  const leftRoles = Object.values(left).filter((it) => is(it, PgRole)) as PgRole[];
  const rightRoles = Object.values(right).filter((it) => is(it, PgRole)) as PgRole[];

  const leftPolicies = Object.values(left).filter((it) => is(it, PgPolicy)) as PgPolicy[];
  const rightPolicies = Object.values(right).filter((it) => is(it, PgPolicy)) as PgPolicy[];

  const leftViews = Object.values(left).filter((it) => isPgView(it)) as PgView[];
  const rightViews = Object.values(right).filter((it) => isPgView(it)) as PgView[];

  const leftMaterializedViews = Object.values(left).filter((it) => isPgMaterializedView(it)) as PgMaterializedView[];
  const rightMaterializedViews = Object.values(right).filter((it) => isPgMaterializedView(it)) as PgMaterializedView[];

  const serialized1 = generatePgSnapshot(
    leftTables,
    leftEnums,
    leftSchemas,
    leftSequences,
    leftRoles,
    leftPolicies,
    leftViews,
    leftMaterializedViews,
    casing,
  );
  const serialized2 = generatePgSnapshot(
    rightTables,
    rightEnums,
    rightSchemas,
    rightSequences,
    rightRoles,
    rightPolicies,
    rightViews,
    rightMaterializedViews,
    casing,
  );

  const { version: _v1, dialect: _d1, ...rest1 } = serialized1;
  const { version: _v2, dialect: _d2, ...rest2 } = serialized2;

  const sch1 = {
    version: "7",
    dialect: "postgresql",
    id: "0",
    prevId: "0",
    ...rest1,
  } as const;

  const sch2 = {
    version: "7",
    dialect: "postgresql",
    id: "0",
    prevId: "0",
    ...rest2,
  } as const;

  const sn1 = squashPgScheme(sch1);
  const sn2 = squashPgScheme(sch2);

  // const validatedPrev = pgSchema.parse(sch1);
  const validatedCur = pgSchema.parse(sch2);

  const renames = new Set(renamesArr);

  const { sqlStatements, statements } = await applyPgSnapshotsDiff(
    sn1,
    sn2,
    testSchemasResolver(renames),
    testEnumsResolver(renames),
    testSequencesResolver(renames),
    testPolicyResolver(renames),
    testIndPolicyResolver(renames),
    testRolesResolver(renames),
    testTablesResolver(renames),
    testColumnsResolver(renames),
    testViewsResolver(renames),
    // validatedPrev,
    validatedCur,
  );
  return { sqlStatements, statements };
};
