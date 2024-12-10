import { AnyPgTable, PgEnum, PgMaterializedView, PgPolicy, PgRole, PgSchema, PgSequence, PgView } from 'drizzle-orm/pg-core';
export declare const prepareFromExports: (exports: Record<string, unknown>) => {
    tables: AnyPgTable[];
    enums: PgEnum<any>[];
    schemas: PgSchema<string>[];
    sequences: PgSequence[];
    views: PgView<string, boolean, import('drizzle-orm').ColumnsSelection>[];
    matViews: PgMaterializedView<string, boolean, import('drizzle-orm').ColumnsSelection>[];
    roles: PgRole[];
    policies: PgPolicy[];
};
