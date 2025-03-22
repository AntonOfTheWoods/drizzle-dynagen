import { PgEnum, PgMaterializedView, PgPolicy, PgRole, PgSchema, PgSequence, PgTable, PgView } from 'drizzle-orm/pg-core';
import { DbSchemaElements } from './global';
import { CasingType } from './lib';
export { fromJson } from './sqlgenerator';
export type PostgresSchema = Record<string, PgTable<any> | PgEnum<any> | PgSchema | PgSequence | PgView | PgMaterializedView | PgRole | PgPolicy>;
export declare function generateSql(dbObjects: DbSchemaElements, casing?: CasingType | undefined): Promise<{
    sqlStatements: string[];
    statements: import('./jsonStatements').JsonStatement[];
}>;
