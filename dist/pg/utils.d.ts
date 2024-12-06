import { CasingType, NamedWithSchema } from './lib';
import { SQL } from 'drizzle-orm';
export declare const copy: <T>(it: T) => T;
export declare const prepareMigrationMeta: (schemas: {
    from: string;
    to: string;
}[], tables: {
    from: NamedWithSchema;
    to: NamedWithSchema;
}[], columns: {
    from: {
        table: string;
        schema: string;
        column: string;
    };
    to: {
        table: string;
        schema: string;
        column: string;
    };
}[]) => {
    schemas: Record<string, string>;
    tables: Record<string, string>;
    columns: Record<string, string>;
};
export declare const schemaRenameKey: (it: string) => string;
export declare const tableRenameKey: (it: NamedWithSchema) => string;
export declare const columnRenameKey: (table: string, schema: string, column: string) => string;
export declare function escapeSingleQuotes(str: string): string;
export type DB = {
    query: <T extends any = any>(sql: string, params?: any[]) => Promise<T[]>;
};
export declare function getColumnCasing(column: {
    keyAsName: boolean;
    name: string | undefined;
}, casing: CasingType | undefined): string;
export declare const sqlToStr: (sql: SQL, casing: CasingType | undefined) => string;
export declare function isPgArrayType(sqlType: string): boolean;
