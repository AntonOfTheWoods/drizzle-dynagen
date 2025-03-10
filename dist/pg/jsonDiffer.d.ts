export declare function diffForRenamedTables(pairs: any): any;
export declare function diffForRenamedColumn(t1: any, t2: any): any;
export declare function diffSchemasOrTables(left: any, right: any): {
    added: any[];
    deleted: any[];
};
export declare function diffIndPolicies(left: any, right: any): {
    added: unknown[];
    deleted: unknown[];
};
export declare function diffColumns(left: any, right: any): any;
export declare function diffPolicies(left: any, right: any): any;
export declare function applyJsonDiff(json1: any, json2: any): {
    alteredTablesWithColumns: {
        name: any;
        schema: any;
        altered: any[];
        addedIndexes: {
            [k: string]: unknown;
        };
        deletedIndexes: {
            [k: string]: unknown;
        };
        alteredIndexes: {
            [k: string]: unknown;
        };
        addedForeignKeys: {
            [k: string]: unknown;
        };
        deletedForeignKeys: {
            [k: string]: unknown;
        };
        alteredForeignKeys: {
            [k: string]: unknown;
        };
        addedCompositePKs: {
            [k: string]: unknown;
        };
        deletedCompositePKs: {
            [k: string]: unknown;
        };
        alteredCompositePKs: {
            [k: string]: unknown;
        };
        addedUniqueConstraints: {
            [k: string]: unknown;
        };
        deletedUniqueConstraints: {
            [k: string]: unknown;
        };
        alteredUniqueConstraints: {
            [k: string]: unknown;
        };
        deletedPolicies: {
            [k: string]: unknown;
        };
        addedPolicies: {
            [k: string]: unknown;
        };
        alteredPolicies: {
            [k: string]: unknown;
        };
        addedCheckConstraints: {
            [k: string]: unknown;
        };
        deletedCheckConstraints: {
            [k: string]: unknown;
        };
        alteredCheckConstraints: {
            [k: string]: unknown;
        };
    }[];
    alteredEnums: {
        name: any;
        schema: any;
        addedValues: any;
        deletedValues: any;
    }[];
    alteredSequences: any[];
    alteredRoles: any[];
    alteredViews: {
        [k: string]: any;
    }[];
    alteredPolicies: any[];
};
