import { AnyPgTable, PgEnum, PgMaterializedView, PgPolicy, PgRole, PgSchema, PgSequence, PgView } from 'drizzle-orm/pg-core';
import { IntrospectStage, IntrospectStatus, CasingType } from './lib';
import { PgSchemaInternal } from './pgSchema';
import { DB } from './utils';
export declare const indexName: (tableName: string, columns: string[]) => string;
export declare function buildArrayString(array: any[], sqlType: string): string;
export declare const generatePgSnapshot: (tables: AnyPgTable[], enums: PgEnum<any>[], schemas: PgSchema[], sequences: PgSequence[], roles: PgRole[], policies: PgPolicy[], views: PgView[], matViews: PgMaterializedView[], casing: CasingType | undefined, schemaFilter?: string[]) => PgSchemaInternal;
export declare const fromDatabase: (db: DB, tablesFilter: ((table: string) => boolean) | undefined, schemaFilters: string[], entities?: {
    roles: boolean | {
        provider?: string | undefined;
        include?: string[] | undefined;
        exclude?: string[] | undefined;
    };
}, progressCallback?: (stage: IntrospectStage, count: number, status: IntrospectStatus) => void, tsSchema?: PgSchemaInternal) => Promise<PgSchemaInternal>;
