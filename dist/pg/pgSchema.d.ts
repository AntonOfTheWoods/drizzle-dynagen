import { TypeOf } from 'zod';
declare const enumSchema: import('zod').ZodObject<{
    name: import('zod').ZodString;
    schema: import('zod').ZodString;
    values: import('zod').ZodArray<import('zod').ZodString, "many">;
}, "strict", import('zod').ZodTypeAny, {
    name: string;
    values: string[];
    schema: string;
}, {
    name: string;
    values: string[];
    schema: string;
}>;
export declare const pgSchemaV2: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"2">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            references: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: string | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: string | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
                name: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>>;
            isUnique: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: string | undefined;
        }>;
        indexes: Record<string, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>;
        name: string;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: string | undefined;
        }>;
        indexes: Record<string, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>;
        name: string;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: string | undefined;
        }>;
        indexes: Record<string, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>;
        name: string;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "2";
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: string | undefined;
        }>;
        indexes: Record<string, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>;
        name: string;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "2";
}>;
export declare const pgSchemaV1: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"1">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            references: import('zod').ZodOptional<import('zod').ZodObject<{
                foreignKeyName: import('zod').ZodString;
                table: import('zod').ZodString;
                column: import('zod').ZodString;
                onDelete: import('zod').ZodOptional<import('zod').ZodString>;
                onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            }, "strict", import('zod').ZodTypeAny, {
                foreignKeyName: string;
                table: string;
                column: string;
                onDelete?: string | undefined;
                onUpdate?: string | undefined;
            }, {
                foreignKeyName: string;
                table: string;
                column: string;
                onDelete?: string | undefined;
                onUpdate?: string | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: {
                foreignKeyName: string;
                table: string;
                column: string;
                onDelete?: string | undefined;
                onUpdate?: string | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: {
                foreignKeyName: string;
                table: string;
                column: string;
                onDelete?: string | undefined;
                onUpdate?: string | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
                name: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>>;
            isUnique: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: {
                foreignKeyName: string;
                table: string;
                column: string;
                onDelete?: string | undefined;
                onUpdate?: string | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>;
        name: string;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: {
                foreignKeyName: string;
                table: string;
                column: string;
                onDelete?: string | undefined;
                onUpdate?: string | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>;
        name: string;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: {
                foreignKeyName: string;
                table: string;
                column: string;
                onDelete?: string | undefined;
                onUpdate?: string | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>;
        name: string;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "1";
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            default?: any;
            references?: {
                foreignKeyName: string;
                table: string;
                column: string;
                onDelete?: string | undefined;
                onUpdate?: string | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: Record<string, {
                name: string;
            }>;
            name: string;
            isUnique: boolean;
        }>;
        name: string;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "1";
}>;
declare const indexColumn: import('zod').ZodObject<{
    expression: import('zod').ZodString;
    isExpression: import('zod').ZodBoolean;
    asc: import('zod').ZodBoolean;
    nulls: import('zod').ZodOptional<import('zod').ZodString>;
    opclass: import('zod').ZodOptional<import('zod').ZodString>;
}, "strip", import('zod').ZodTypeAny, {
    expression: string;
    isExpression: boolean;
    asc: boolean;
    nulls?: string | undefined;
    opclass?: string | undefined;
}, {
    expression: string;
    isExpression: boolean;
    asc: boolean;
    nulls?: string | undefined;
    opclass?: string | undefined;
}>;
export type IndexColumnType = TypeOf<typeof indexColumn>;
declare const index: import('zod').ZodObject<{
    name: import('zod').ZodString;
    columns: import('zod').ZodArray<import('zod').ZodObject<{
        expression: import('zod').ZodString;
        isExpression: import('zod').ZodBoolean;
        asc: import('zod').ZodBoolean;
        nulls: import('zod').ZodOptional<import('zod').ZodString>;
        opclass: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        expression: string;
        isExpression: boolean;
        asc: boolean;
        nulls?: string | undefined;
        opclass?: string | undefined;
    }, {
        expression: string;
        isExpression: boolean;
        asc: boolean;
        nulls?: string | undefined;
        opclass?: string | undefined;
    }>, "many">;
    isUnique: import('zod').ZodBoolean;
    with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
    method: import('zod').ZodDefault<import('zod').ZodString>;
    where: import('zod').ZodOptional<import('zod').ZodString>;
    concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
}, "strict", import('zod').ZodTypeAny, {
    columns: {
        expression: string;
        isExpression: boolean;
        asc: boolean;
        nulls?: string | undefined;
        opclass?: string | undefined;
    }[];
    name: string;
    isUnique: boolean;
    method: string;
    concurrently: boolean;
    with?: Record<string, any> | undefined;
    where?: string | undefined;
}, {
    columns: {
        expression: string;
        isExpression: boolean;
        asc: boolean;
        nulls?: string | undefined;
        opclass?: string | undefined;
    }[];
    name: string;
    isUnique: boolean;
    with?: Record<string, any> | undefined;
    method?: string | undefined;
    where?: string | undefined;
    concurrently?: boolean | undefined;
}>;
declare const fk: import('zod').ZodObject<{
    name: import('zod').ZodString;
    tableFrom: import('zod').ZodString;
    columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
    tableTo: import('zod').ZodString;
    schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
    columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
    onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
    onDelete: import('zod').ZodOptional<import('zod').ZodString>;
}, "strict", import('zod').ZodTypeAny, {
    name: string;
    tableFrom: string;
    columnsFrom: string[];
    tableTo: string;
    columnsTo: string[];
    onDelete?: string | undefined;
    onUpdate?: string | undefined;
    schemaTo?: string | undefined;
}, {
    name: string;
    tableFrom: string;
    columnsFrom: string[];
    tableTo: string;
    columnsTo: string[];
    onDelete?: string | undefined;
    onUpdate?: string | undefined;
    schemaTo?: string | undefined;
}>;
export declare const sequenceSchema: import('zod').ZodObject<{
    name: import('zod').ZodString;
    increment: import('zod').ZodOptional<import('zod').ZodString>;
    minValue: import('zod').ZodOptional<import('zod').ZodString>;
    maxValue: import('zod').ZodOptional<import('zod').ZodString>;
    startWith: import('zod').ZodOptional<import('zod').ZodString>;
    cache: import('zod').ZodOptional<import('zod').ZodString>;
    cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
    schema: import('zod').ZodString;
}, "strict", import('zod').ZodTypeAny, {
    name: string;
    schema: string;
    increment?: string | undefined;
    minValue?: string | undefined;
    maxValue?: string | undefined;
    startWith?: string | undefined;
    cache?: string | undefined;
    cycle?: boolean | undefined;
}, {
    name: string;
    schema: string;
    increment?: string | undefined;
    minValue?: string | undefined;
    maxValue?: string | undefined;
    startWith?: string | undefined;
    cache?: string | undefined;
    cycle?: boolean | undefined;
}>;
export declare const roleSchema: import('zod').ZodObject<{
    name: import('zod').ZodString;
    createDb: import('zod').ZodOptional<import('zod').ZodBoolean>;
    createRole: import('zod').ZodOptional<import('zod').ZodBoolean>;
    inherit: import('zod').ZodOptional<import('zod').ZodBoolean>;
}, "strict", import('zod').ZodTypeAny, {
    name: string;
    createDb?: boolean | undefined;
    createRole?: boolean | undefined;
    inherit?: boolean | undefined;
}, {
    name: string;
    createDb?: boolean | undefined;
    createRole?: boolean | undefined;
    inherit?: boolean | undefined;
}>;
export declare const sequenceSquashed: import('zod').ZodObject<{
    name: import('zod').ZodString;
    schema: import('zod').ZodString;
    values: import('zod').ZodString;
}, "strict", import('zod').ZodTypeAny, {
    name: string;
    values: string;
    schema: string;
}, {
    name: string;
    values: string;
    schema: string;
}>;
declare const column: import('zod').ZodObject<{
    name: import('zod').ZodString;
    type: import('zod').ZodString;
    typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
    primaryKey: import('zod').ZodBoolean;
    notNull: import('zod').ZodBoolean;
    default: import('zod').ZodOptional<import('zod').ZodAny>;
    isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
    uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
    nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
    generated: import('zod').ZodOptional<import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"stored">;
        as: import('zod').ZodString;
    }, "strip", import('zod').ZodTypeAny, {
        type: "stored";
        as: string;
    }, {
        type: "stored";
        as: string;
    }>>;
    identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
        name: import('zod').ZodString;
        increment: import('zod').ZodOptional<import('zod').ZodString>;
        minValue: import('zod').ZodOptional<import('zod').ZodString>;
        maxValue: import('zod').ZodOptional<import('zod').ZodString>;
        startWith: import('zod').ZodOptional<import('zod').ZodString>;
        cache: import('zod').ZodOptional<import('zod').ZodString>;
        cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
        schema: import('zod').ZodString;
    }, {
        type: import('zod').ZodEnum<["always", "byDefault"]>;
    }>, "strip", import('zod').ZodTypeAny, {
        name: string;
        type: "always" | "byDefault";
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }, {
        name: string;
        type: "always" | "byDefault";
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    name: string;
    type: string;
    primaryKey: boolean;
    notNull: boolean;
    isUnique?: any;
    default?: any;
    typeSchema?: string | undefined;
    uniqueName?: string | undefined;
    nullsNotDistinct?: boolean | undefined;
    generated?: {
        type: "stored";
        as: string;
    } | undefined;
    identity?: {
        name: string;
        type: "always" | "byDefault";
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    } | undefined;
}, {
    name: string;
    type: string;
    primaryKey: boolean;
    notNull: boolean;
    isUnique?: any;
    default?: any;
    typeSchema?: string | undefined;
    uniqueName?: string | undefined;
    nullsNotDistinct?: boolean | undefined;
    generated?: {
        type: "stored";
        as: string;
    } | undefined;
    identity?: {
        name: string;
        type: "always" | "byDefault";
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    } | undefined;
}>;
declare const checkConstraint: import('zod').ZodObject<{
    name: import('zod').ZodString;
    value: import('zod').ZodString;
}, "strict", import('zod').ZodTypeAny, {
    name: string;
    value: string;
}, {
    name: string;
    value: string;
}>;
declare const tableV3: import('zod').ZodObject<{
    name: import('zod').ZodString;
    columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        type: import('zod').ZodString;
        typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
        primaryKey: import('zod').ZodBoolean;
        notNull: import('zod').ZodBoolean;
        default: import('zod').ZodOptional<import('zod').ZodAny>;
        isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
        uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
        nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
        generated: import('zod').ZodOptional<import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"stored">;
            as: import('zod').ZodString;
        }, "strip", import('zod').ZodTypeAny, {
            type: "stored";
            as: string;
        }, {
            type: "stored";
            as: string;
        }>>;
        identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
            name: import('zod').ZodString;
            increment: import('zod').ZodOptional<import('zod').ZodString>;
            minValue: import('zod').ZodOptional<import('zod').ZodString>;
            maxValue: import('zod').ZodOptional<import('zod').ZodString>;
            startWith: import('zod').ZodOptional<import('zod').ZodString>;
            cache: import('zod').ZodOptional<import('zod').ZodString>;
            cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
            schema: import('zod').ZodString;
        }, {
            type: import('zod').ZodEnum<["always", "byDefault"]>;
        }>, "strip", import('zod').ZodTypeAny, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>>;
    indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodArray<import('zod').ZodObject<{
            expression: import('zod').ZodString;
            isExpression: import('zod').ZodBoolean;
            asc: import('zod').ZodBoolean;
            nulls: import('zod').ZodOptional<import('zod').ZodString>;
            opclass: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strip", import('zod').ZodTypeAny, {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }, {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }>, "many">;
        isUnique: import('zod').ZodBoolean;
        with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
        method: import('zod').ZodDefault<import('zod').ZodString>;
        where: import('zod').ZodOptional<import('zod').ZodString>;
        concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }[];
        name: string;
        isUnique: boolean;
        method: string;
        concurrently: boolean;
        with?: Record<string, any> | undefined;
        where?: string | undefined;
    }, {
        columns: {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }[];
        name: string;
        isUnique: boolean;
        with?: Record<string, any> | undefined;
        method?: string | undefined;
        where?: string | undefined;
        concurrently?: boolean | undefined;
    }>>;
    foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        tableFrom: import('zod').ZodString;
        columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
        tableTo: import('zod').ZodString;
        schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
        columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
        onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
        onDelete: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    indexes: Record<string, {
        columns: {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }[];
        name: string;
        isUnique: boolean;
        method: string;
        concurrently: boolean;
        with?: Record<string, any> | undefined;
        where?: string | undefined;
    }>;
    name: string;
    foreignKeys: Record<string, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>;
}, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    indexes: Record<string, {
        columns: {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }[];
        name: string;
        isUnique: boolean;
        with?: Record<string, any> | undefined;
        method?: string | undefined;
        where?: string | undefined;
        concurrently?: boolean | undefined;
    }>;
    name: string;
    foreignKeys: Record<string, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>;
}>;
declare const compositePK: import('zod').ZodObject<{
    name: import('zod').ZodString;
    columns: import('zod').ZodArray<import('zod').ZodString, "many">;
}, "strict", import('zod').ZodTypeAny, {
    columns: string[];
    name: string;
}, {
    columns: string[];
    name: string;
}>;
declare const uniqueConstraint: import('zod').ZodObject<{
    name: import('zod').ZodString;
    columns: import('zod').ZodArray<import('zod').ZodString, "many">;
    nullsNotDistinct: import('zod').ZodBoolean;
}, "strict", import('zod').ZodTypeAny, {
    columns: string[];
    name: string;
    nullsNotDistinct: boolean;
}, {
    columns: string[];
    name: string;
    nullsNotDistinct: boolean;
}>;
export declare const policy: import('zod').ZodObject<{
    name: import('zod').ZodString;
    as: import('zod').ZodOptional<import('zod').ZodEnum<["PERMISSIVE", "RESTRICTIVE"]>>;
    for: import('zod').ZodOptional<import('zod').ZodEnum<["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]>>;
    to: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString, "many">>;
    using: import('zod').ZodOptional<import('zod').ZodString>;
    withCheck: import('zod').ZodOptional<import('zod').ZodString>;
    on: import('zod').ZodOptional<import('zod').ZodString>;
    schema: import('zod').ZodOptional<import('zod').ZodString>;
}, "strict", import('zod').ZodTypeAny, {
    name: string;
    schema?: string | undefined;
    as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
    for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
    to?: string[] | undefined;
    using?: string | undefined;
    withCheck?: string | undefined;
    on?: string | undefined;
}, {
    name: string;
    schema?: string | undefined;
    as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
    for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
    to?: string[] | undefined;
    using?: string | undefined;
    withCheck?: string | undefined;
    on?: string | undefined;
}>;
export declare const policySquashed: import('zod').ZodObject<{
    name: import('zod').ZodString;
    values: import('zod').ZodString;
}, "strict", import('zod').ZodTypeAny, {
    name: string;
    values: string;
}, {
    name: string;
    values: string;
}>;
declare const viewWithOption: import('zod').ZodObject<{
    checkOption: import('zod').ZodOptional<import('zod').ZodEnum<["local", "cascaded"]>>;
    securityBarrier: import('zod').ZodOptional<import('zod').ZodBoolean>;
    securityInvoker: import('zod').ZodOptional<import('zod').ZodBoolean>;
}, "strict", import('zod').ZodTypeAny, {
    checkOption?: "local" | "cascaded" | undefined;
    securityBarrier?: boolean | undefined;
    securityInvoker?: boolean | undefined;
}, {
    checkOption?: "local" | "cascaded" | undefined;
    securityBarrier?: boolean | undefined;
    securityInvoker?: boolean | undefined;
}>;
declare const matViewWithOption: import('zod').ZodObject<{
    fillfactor: import('zod').ZodOptional<import('zod').ZodNumber>;
    toastTupleTarget: import('zod').ZodOptional<import('zod').ZodNumber>;
    parallelWorkers: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumEnabled: import('zod').ZodOptional<import('zod').ZodBoolean>;
    vacuumIndexCleanup: import('zod').ZodOptional<import('zod').ZodEnum<["auto", "off", "on"]>>;
    vacuumTruncate: import('zod').ZodOptional<import('zod').ZodBoolean>;
    autovacuumVacuumThreshold: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumVacuumScaleFactor: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumVacuumCostDelay: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumVacuumCostLimit: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumMultixactFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumMultixactFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumMultixactFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    logAutovacuumMinDuration: import('zod').ZodOptional<import('zod').ZodNumber>;
    userCatalogTable: import('zod').ZodOptional<import('zod').ZodBoolean>;
}, "strict", import('zod').ZodTypeAny, {
    fillfactor?: number | undefined;
    toastTupleTarget?: number | undefined;
    parallelWorkers?: number | undefined;
    autovacuumEnabled?: boolean | undefined;
    vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
    vacuumTruncate?: boolean | undefined;
    autovacuumVacuumThreshold?: number | undefined;
    autovacuumVacuumScaleFactor?: number | undefined;
    autovacuumVacuumCostDelay?: number | undefined;
    autovacuumVacuumCostLimit?: number | undefined;
    autovacuumFreezeMinAge?: number | undefined;
    autovacuumFreezeMaxAge?: number | undefined;
    autovacuumFreezeTableAge?: number | undefined;
    autovacuumMultixactFreezeMinAge?: number | undefined;
    autovacuumMultixactFreezeMaxAge?: number | undefined;
    autovacuumMultixactFreezeTableAge?: number | undefined;
    logAutovacuumMinDuration?: number | undefined;
    userCatalogTable?: boolean | undefined;
}, {
    fillfactor?: number | undefined;
    toastTupleTarget?: number | undefined;
    parallelWorkers?: number | undefined;
    autovacuumEnabled?: boolean | undefined;
    vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
    vacuumTruncate?: boolean | undefined;
    autovacuumVacuumThreshold?: number | undefined;
    autovacuumVacuumScaleFactor?: number | undefined;
    autovacuumVacuumCostDelay?: number | undefined;
    autovacuumVacuumCostLimit?: number | undefined;
    autovacuumFreezeMinAge?: number | undefined;
    autovacuumFreezeMaxAge?: number | undefined;
    autovacuumFreezeTableAge?: number | undefined;
    autovacuumMultixactFreezeMinAge?: number | undefined;
    autovacuumMultixactFreezeMaxAge?: number | undefined;
    autovacuumMultixactFreezeTableAge?: number | undefined;
    logAutovacuumMinDuration?: number | undefined;
    userCatalogTable?: boolean | undefined;
}>;
export declare const mergedViewWithOption: import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    checkOption: import('zod').ZodOptional<import('zod').ZodEnum<["local", "cascaded"]>>;
    securityBarrier: import('zod').ZodOptional<import('zod').ZodBoolean>;
    securityInvoker: import('zod').ZodOptional<import('zod').ZodBoolean>;
}, {
    fillfactor: import('zod').ZodOptional<import('zod').ZodNumber>;
    toastTupleTarget: import('zod').ZodOptional<import('zod').ZodNumber>;
    parallelWorkers: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumEnabled: import('zod').ZodOptional<import('zod').ZodBoolean>;
    vacuumIndexCleanup: import('zod').ZodOptional<import('zod').ZodEnum<["auto", "off", "on"]>>;
    vacuumTruncate: import('zod').ZodOptional<import('zod').ZodBoolean>;
    autovacuumVacuumThreshold: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumVacuumScaleFactor: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumVacuumCostDelay: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumVacuumCostLimit: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumMultixactFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumMultixactFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    autovacuumMultixactFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
    logAutovacuumMinDuration: import('zod').ZodOptional<import('zod').ZodNumber>;
    userCatalogTable: import('zod').ZodOptional<import('zod').ZodBoolean>;
}>, "strict", import('zod').ZodTypeAny, {
    checkOption?: "local" | "cascaded" | undefined;
    securityBarrier?: boolean | undefined;
    securityInvoker?: boolean | undefined;
    fillfactor?: number | undefined;
    toastTupleTarget?: number | undefined;
    parallelWorkers?: number | undefined;
    autovacuumEnabled?: boolean | undefined;
    vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
    vacuumTruncate?: boolean | undefined;
    autovacuumVacuumThreshold?: number | undefined;
    autovacuumVacuumScaleFactor?: number | undefined;
    autovacuumVacuumCostDelay?: number | undefined;
    autovacuumVacuumCostLimit?: number | undefined;
    autovacuumFreezeMinAge?: number | undefined;
    autovacuumFreezeMaxAge?: number | undefined;
    autovacuumFreezeTableAge?: number | undefined;
    autovacuumMultixactFreezeMinAge?: number | undefined;
    autovacuumMultixactFreezeMaxAge?: number | undefined;
    autovacuumMultixactFreezeTableAge?: number | undefined;
    logAutovacuumMinDuration?: number | undefined;
    userCatalogTable?: boolean | undefined;
}, {
    checkOption?: "local" | "cascaded" | undefined;
    securityBarrier?: boolean | undefined;
    securityInvoker?: boolean | undefined;
    fillfactor?: number | undefined;
    toastTupleTarget?: number | undefined;
    parallelWorkers?: number | undefined;
    autovacuumEnabled?: boolean | undefined;
    vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
    vacuumTruncate?: boolean | undefined;
    autovacuumVacuumThreshold?: number | undefined;
    autovacuumVacuumScaleFactor?: number | undefined;
    autovacuumVacuumCostDelay?: number | undefined;
    autovacuumVacuumCostLimit?: number | undefined;
    autovacuumFreezeMinAge?: number | undefined;
    autovacuumFreezeMaxAge?: number | undefined;
    autovacuumFreezeTableAge?: number | undefined;
    autovacuumMultixactFreezeMinAge?: number | undefined;
    autovacuumMultixactFreezeMaxAge?: number | undefined;
    autovacuumMultixactFreezeTableAge?: number | undefined;
    logAutovacuumMinDuration?: number | undefined;
    userCatalogTable?: boolean | undefined;
}>;
export declare const view: import('zod').ZodObject<{
    name: import('zod').ZodString;
    schema: import('zod').ZodString;
    columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        type: import('zod').ZodString;
        typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
        primaryKey: import('zod').ZodBoolean;
        notNull: import('zod').ZodBoolean;
        default: import('zod').ZodOptional<import('zod').ZodAny>;
        isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
        uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
        nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
        generated: import('zod').ZodOptional<import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"stored">;
            as: import('zod').ZodString;
        }, "strip", import('zod').ZodTypeAny, {
            type: "stored";
            as: string;
        }, {
            type: "stored";
            as: string;
        }>>;
        identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
            name: import('zod').ZodString;
            increment: import('zod').ZodOptional<import('zod').ZodString>;
            minValue: import('zod').ZodOptional<import('zod').ZodString>;
            maxValue: import('zod').ZodOptional<import('zod').ZodString>;
            startWith: import('zod').ZodOptional<import('zod').ZodString>;
            cache: import('zod').ZodOptional<import('zod').ZodString>;
            cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
            schema: import('zod').ZodString;
        }, {
            type: import('zod').ZodEnum<["always", "byDefault"]>;
        }>, "strip", import('zod').ZodTypeAny, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>>;
    definition: import('zod').ZodOptional<import('zod').ZodString>;
    materialized: import('zod').ZodBoolean;
    with: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
        checkOption: import('zod').ZodOptional<import('zod').ZodEnum<["local", "cascaded"]>>;
        securityBarrier: import('zod').ZodOptional<import('zod').ZodBoolean>;
        securityInvoker: import('zod').ZodOptional<import('zod').ZodBoolean>;
    }, {
        fillfactor: import('zod').ZodOptional<import('zod').ZodNumber>;
        toastTupleTarget: import('zod').ZodOptional<import('zod').ZodNumber>;
        parallelWorkers: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumEnabled: import('zod').ZodOptional<import('zod').ZodBoolean>;
        vacuumIndexCleanup: import('zod').ZodOptional<import('zod').ZodEnum<["auto", "off", "on"]>>;
        vacuumTruncate: import('zod').ZodOptional<import('zod').ZodBoolean>;
        autovacuumVacuumThreshold: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumVacuumScaleFactor: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumVacuumCostDelay: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumVacuumCostLimit: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumMultixactFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumMultixactFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
        autovacuumMultixactFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
        logAutovacuumMinDuration: import('zod').ZodOptional<import('zod').ZodNumber>;
        userCatalogTable: import('zod').ZodOptional<import('zod').ZodBoolean>;
    }>, "strict", import('zod').ZodTypeAny, {
        checkOption?: "local" | "cascaded" | undefined;
        securityBarrier?: boolean | undefined;
        securityInvoker?: boolean | undefined;
        fillfactor?: number | undefined;
        toastTupleTarget?: number | undefined;
        parallelWorkers?: number | undefined;
        autovacuumEnabled?: boolean | undefined;
        vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
        vacuumTruncate?: boolean | undefined;
        autovacuumVacuumThreshold?: number | undefined;
        autovacuumVacuumScaleFactor?: number | undefined;
        autovacuumVacuumCostDelay?: number | undefined;
        autovacuumVacuumCostLimit?: number | undefined;
        autovacuumFreezeMinAge?: number | undefined;
        autovacuumFreezeMaxAge?: number | undefined;
        autovacuumFreezeTableAge?: number | undefined;
        autovacuumMultixactFreezeMinAge?: number | undefined;
        autovacuumMultixactFreezeMaxAge?: number | undefined;
        autovacuumMultixactFreezeTableAge?: number | undefined;
        logAutovacuumMinDuration?: number | undefined;
        userCatalogTable?: boolean | undefined;
    }, {
        checkOption?: "local" | "cascaded" | undefined;
        securityBarrier?: boolean | undefined;
        securityInvoker?: boolean | undefined;
        fillfactor?: number | undefined;
        toastTupleTarget?: number | undefined;
        parallelWorkers?: number | undefined;
        autovacuumEnabled?: boolean | undefined;
        vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
        vacuumTruncate?: boolean | undefined;
        autovacuumVacuumThreshold?: number | undefined;
        autovacuumVacuumScaleFactor?: number | undefined;
        autovacuumVacuumCostDelay?: number | undefined;
        autovacuumVacuumCostLimit?: number | undefined;
        autovacuumFreezeMinAge?: number | undefined;
        autovacuumFreezeMaxAge?: number | undefined;
        autovacuumFreezeTableAge?: number | undefined;
        autovacuumMultixactFreezeMinAge?: number | undefined;
        autovacuumMultixactFreezeMaxAge?: number | undefined;
        autovacuumMultixactFreezeTableAge?: number | undefined;
        logAutovacuumMinDuration?: number | undefined;
        userCatalogTable?: boolean | undefined;
    }>>;
    isExisting: import('zod').ZodBoolean;
    withNoData: import('zod').ZodOptional<import('zod').ZodBoolean>;
    using: import('zod').ZodOptional<import('zod').ZodString>;
    tablespace: import('zod').ZodOptional<import('zod').ZodString>;
}, "strict", import('zod').ZodTypeAny, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    name: string;
    schema: string;
    materialized: boolean;
    isExisting: boolean;
    with?: {
        checkOption?: "local" | "cascaded" | undefined;
        securityBarrier?: boolean | undefined;
        securityInvoker?: boolean | undefined;
        fillfactor?: number | undefined;
        toastTupleTarget?: number | undefined;
        parallelWorkers?: number | undefined;
        autovacuumEnabled?: boolean | undefined;
        vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
        vacuumTruncate?: boolean | undefined;
        autovacuumVacuumThreshold?: number | undefined;
        autovacuumVacuumScaleFactor?: number | undefined;
        autovacuumVacuumCostDelay?: number | undefined;
        autovacuumVacuumCostLimit?: number | undefined;
        autovacuumFreezeMinAge?: number | undefined;
        autovacuumFreezeMaxAge?: number | undefined;
        autovacuumFreezeTableAge?: number | undefined;
        autovacuumMultixactFreezeMinAge?: number | undefined;
        autovacuumMultixactFreezeMaxAge?: number | undefined;
        autovacuumMultixactFreezeTableAge?: number | undefined;
        logAutovacuumMinDuration?: number | undefined;
        userCatalogTable?: boolean | undefined;
    } | undefined;
    using?: string | undefined;
    definition?: string | undefined;
    withNoData?: boolean | undefined;
    tablespace?: string | undefined;
}, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    name: string;
    schema: string;
    materialized: boolean;
    isExisting: boolean;
    with?: {
        checkOption?: "local" | "cascaded" | undefined;
        securityBarrier?: boolean | undefined;
        securityInvoker?: boolean | undefined;
        fillfactor?: number | undefined;
        toastTupleTarget?: number | undefined;
        parallelWorkers?: number | undefined;
        autovacuumEnabled?: boolean | undefined;
        vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
        vacuumTruncate?: boolean | undefined;
        autovacuumVacuumThreshold?: number | undefined;
        autovacuumVacuumScaleFactor?: number | undefined;
        autovacuumVacuumCostDelay?: number | undefined;
        autovacuumVacuumCostLimit?: number | undefined;
        autovacuumFreezeMinAge?: number | undefined;
        autovacuumFreezeMaxAge?: number | undefined;
        autovacuumFreezeTableAge?: number | undefined;
        autovacuumMultixactFreezeMinAge?: number | undefined;
        autovacuumMultixactFreezeMaxAge?: number | undefined;
        autovacuumMultixactFreezeTableAge?: number | undefined;
        logAutovacuumMinDuration?: number | undefined;
        userCatalogTable?: boolean | undefined;
    } | undefined;
    using?: string | undefined;
    definition?: string | undefined;
    withNoData?: boolean | undefined;
    tablespace?: string | undefined;
}>;
declare const tableV4: import('zod').ZodObject<{
    name: import('zod').ZodString;
    schema: import('zod').ZodString;
    columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        type: import('zod').ZodString;
        typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
        primaryKey: import('zod').ZodBoolean;
        notNull: import('zod').ZodBoolean;
        default: import('zod').ZodOptional<import('zod').ZodAny>;
        isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
        uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
        nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
        generated: import('zod').ZodOptional<import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"stored">;
            as: import('zod').ZodString;
        }, "strip", import('zod').ZodTypeAny, {
            type: "stored";
            as: string;
        }, {
            type: "stored";
            as: string;
        }>>;
        identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
            name: import('zod').ZodString;
            increment: import('zod').ZodOptional<import('zod').ZodString>;
            minValue: import('zod').ZodOptional<import('zod').ZodString>;
            maxValue: import('zod').ZodOptional<import('zod').ZodString>;
            startWith: import('zod').ZodOptional<import('zod').ZodString>;
            cache: import('zod').ZodOptional<import('zod').ZodString>;
            cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
            schema: import('zod').ZodString;
        }, {
            type: import('zod').ZodEnum<["always", "byDefault"]>;
        }>, "strip", import('zod').ZodTypeAny, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>>;
    indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        isUnique: import('zod').ZodBoolean;
        with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
        method: import('zod').ZodDefault<import('zod').ZodString>;
        where: import('zod').ZodOptional<import('zod').ZodString>;
        concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: string[];
        name: string;
        isUnique: boolean;
        method: string;
        concurrently: boolean;
        with?: Record<string, string> | undefined;
        where?: string | undefined;
    }, {
        columns: string[];
        name: string;
        isUnique: boolean;
        with?: Record<string, string> | undefined;
        method?: string | undefined;
        where?: string | undefined;
        concurrently?: boolean | undefined;
    }>>;
    foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        tableFrom: import('zod').ZodString;
        columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
        tableTo: import('zod').ZodString;
        schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
        columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
        onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
        onDelete: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    indexes: Record<string, {
        columns: string[];
        name: string;
        isUnique: boolean;
        method: string;
        concurrently: boolean;
        with?: Record<string, string> | undefined;
        where?: string | undefined;
    }>;
    name: string;
    schema: string;
    foreignKeys: Record<string, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>;
}, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    indexes: Record<string, {
        columns: string[];
        name: string;
        isUnique: boolean;
        with?: Record<string, string> | undefined;
        method?: string | undefined;
        where?: string | undefined;
        concurrently?: boolean | undefined;
    }>;
    name: string;
    schema: string;
    foreignKeys: Record<string, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>;
}>;
declare const tableV5: import('zod').ZodObject<{
    name: import('zod').ZodString;
    schema: import('zod').ZodString;
    columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        type: import('zod').ZodString;
        typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
        primaryKey: import('zod').ZodBoolean;
        notNull: import('zod').ZodBoolean;
        default: import('zod').ZodOptional<import('zod').ZodAny>;
        isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
        uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
        nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
        generated: import('zod').ZodOptional<import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"stored">;
            as: import('zod').ZodString;
        }, "strip", import('zod').ZodTypeAny, {
            type: "stored";
            as: string;
        }, {
            type: "stored";
            as: string;
        }>>;
        identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
            name: import('zod').ZodString;
            increment: import('zod').ZodOptional<import('zod').ZodString>;
            minValue: import('zod').ZodOptional<import('zod').ZodString>;
            maxValue: import('zod').ZodOptional<import('zod').ZodString>;
            startWith: import('zod').ZodOptional<import('zod').ZodString>;
            cache: import('zod').ZodOptional<import('zod').ZodString>;
            cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
            schema: import('zod').ZodString;
        }, {
            type: import('zod').ZodEnum<["always", "byDefault"]>;
        }>, "strip", import('zod').ZodTypeAny, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>>;
    indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        isUnique: import('zod').ZodBoolean;
        with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
        method: import('zod').ZodDefault<import('zod').ZodString>;
        where: import('zod').ZodOptional<import('zod').ZodString>;
        concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: string[];
        name: string;
        isUnique: boolean;
        method: string;
        concurrently: boolean;
        with?: Record<string, string> | undefined;
        where?: string | undefined;
    }, {
        columns: string[];
        name: string;
        isUnique: boolean;
        with?: Record<string, string> | undefined;
        method?: string | undefined;
        where?: string | undefined;
        concurrently?: boolean | undefined;
    }>>;
    foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        tableFrom: import('zod').ZodString;
        columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
        tableTo: import('zod').ZodString;
        schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
        columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
        onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
        onDelete: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>>;
    compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        columns: string[];
        name: string;
    }, {
        columns: string[];
        name: string;
    }>>;
    uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        nullsNotDistinct: import('zod').ZodBoolean;
    }, "strict", import('zod').ZodTypeAny, {
        columns: string[];
        name: string;
        nullsNotDistinct: boolean;
    }, {
        columns: string[];
        name: string;
        nullsNotDistinct: boolean;
    }>>>;
}, "strict", import('zod').ZodTypeAny, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    indexes: Record<string, {
        columns: string[];
        name: string;
        isUnique: boolean;
        method: string;
        concurrently: boolean;
        with?: Record<string, string> | undefined;
        where?: string | undefined;
    }>;
    name: string;
    schema: string;
    foreignKeys: Record<string, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>;
    compositePrimaryKeys: Record<string, {
        columns: string[];
        name: string;
    }>;
    uniqueConstraints: Record<string, {
        columns: string[];
        name: string;
        nullsNotDistinct: boolean;
    }>;
}, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    indexes: Record<string, {
        columns: string[];
        name: string;
        isUnique: boolean;
        with?: Record<string, string> | undefined;
        method?: string | undefined;
        where?: string | undefined;
        concurrently?: boolean | undefined;
    }>;
    name: string;
    schema: string;
    foreignKeys: Record<string, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>;
    compositePrimaryKeys: Record<string, {
        columns: string[];
        name: string;
    }>;
    uniqueConstraints?: Record<string, {
        columns: string[];
        name: string;
        nullsNotDistinct: boolean;
    }> | undefined;
}>;
declare const table: import('zod').ZodObject<{
    name: import('zod').ZodString;
    schema: import('zod').ZodString;
    columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        type: import('zod').ZodString;
        typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
        primaryKey: import('zod').ZodBoolean;
        notNull: import('zod').ZodBoolean;
        default: import('zod').ZodOptional<import('zod').ZodAny>;
        isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
        uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
        nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
        generated: import('zod').ZodOptional<import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"stored">;
            as: import('zod').ZodString;
        }, "strip", import('zod').ZodTypeAny, {
            type: "stored";
            as: string;
        }, {
            type: "stored";
            as: string;
        }>>;
        identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
            name: import('zod').ZodString;
            increment: import('zod').ZodOptional<import('zod').ZodString>;
            minValue: import('zod').ZodOptional<import('zod').ZodString>;
            maxValue: import('zod').ZodOptional<import('zod').ZodString>;
            startWith: import('zod').ZodOptional<import('zod').ZodString>;
            cache: import('zod').ZodOptional<import('zod').ZodString>;
            cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
            schema: import('zod').ZodString;
        }, {
            type: import('zod').ZodEnum<["always", "byDefault"]>;
        }>, "strip", import('zod').ZodTypeAny, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }, {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>>;
    indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodArray<import('zod').ZodObject<{
            expression: import('zod').ZodString;
            isExpression: import('zod').ZodBoolean;
            asc: import('zod').ZodBoolean;
            nulls: import('zod').ZodOptional<import('zod').ZodString>;
            opclass: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strip", import('zod').ZodTypeAny, {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }, {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }>, "many">;
        isUnique: import('zod').ZodBoolean;
        with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
        method: import('zod').ZodDefault<import('zod').ZodString>;
        where: import('zod').ZodOptional<import('zod').ZodString>;
        concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }[];
        name: string;
        isUnique: boolean;
        method: string;
        concurrently: boolean;
        with?: Record<string, any> | undefined;
        where?: string | undefined;
    }, {
        columns: {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }[];
        name: string;
        isUnique: boolean;
        with?: Record<string, any> | undefined;
        method?: string | undefined;
        where?: string | undefined;
        concurrently?: boolean | undefined;
    }>>;
    foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        tableFrom: import('zod').ZodString;
        columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
        tableTo: import('zod').ZodString;
        schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
        columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
        onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
        onDelete: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>>;
    compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        columns: string[];
        name: string;
    }, {
        columns: string[];
        name: string;
    }>>;
    uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        nullsNotDistinct: import('zod').ZodBoolean;
    }, "strict", import('zod').ZodTypeAny, {
        columns: string[];
        name: string;
        nullsNotDistinct: boolean;
    }, {
        columns: string[];
        name: string;
        nullsNotDistinct: boolean;
    }>>>;
    policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        as: import('zod').ZodOptional<import('zod').ZodEnum<["PERMISSIVE", "RESTRICTIVE"]>>;
        for: import('zod').ZodOptional<import('zod').ZodEnum<["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]>>;
        to: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString, "many">>;
        using: import('zod').ZodOptional<import('zod').ZodString>;
        withCheck: import('zod').ZodOptional<import('zod').ZodString>;
        on: import('zod').ZodOptional<import('zod').ZodString>;
        schema: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }>>>;
    checkConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        value: import('zod').ZodString;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        value: string;
    }, {
        name: string;
        value: string;
    }>>>;
    isRLSEnabled: import('zod').ZodDefault<import('zod').ZodBoolean>;
}, "strict", import('zod').ZodTypeAny, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    indexes: Record<string, {
        columns: {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }[];
        name: string;
        isUnique: boolean;
        method: string;
        concurrently: boolean;
        with?: Record<string, any> | undefined;
        where?: string | undefined;
    }>;
    policies: Record<string, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }>;
    name: string;
    schema: string;
    foreignKeys: Record<string, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>;
    compositePrimaryKeys: Record<string, {
        columns: string[];
        name: string;
    }>;
    uniqueConstraints: Record<string, {
        columns: string[];
        name: string;
        nullsNotDistinct: boolean;
    }>;
    checkConstraints: Record<string, {
        name: string;
        value: string;
    }>;
    isRLSEnabled: boolean;
}, {
    columns: Record<string, {
        name: string;
        type: string;
        primaryKey: boolean;
        notNull: boolean;
        isUnique?: any;
        default?: any;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored";
            as: string;
        } | undefined;
        identity?: {
            name: string;
            type: "always" | "byDefault";
            schema: string;
            increment?: string | undefined;
            minValue?: string | undefined;
            maxValue?: string | undefined;
            startWith?: string | undefined;
            cache?: string | undefined;
            cycle?: boolean | undefined;
        } | undefined;
    }>;
    indexes: Record<string, {
        columns: {
            expression: string;
            isExpression: boolean;
            asc: boolean;
            nulls?: string | undefined;
            opclass?: string | undefined;
        }[];
        name: string;
        isUnique: boolean;
        with?: Record<string, any> | undefined;
        method?: string | undefined;
        where?: string | undefined;
        concurrently?: boolean | undefined;
    }>;
    name: string;
    schema: string;
    foreignKeys: Record<string, {
        name: string;
        tableFrom: string;
        columnsFrom: string[];
        tableTo: string;
        columnsTo: string[];
        onDelete?: string | undefined;
        onUpdate?: string | undefined;
        schemaTo?: string | undefined;
    }>;
    compositePrimaryKeys: Record<string, {
        columns: string[];
        name: string;
    }>;
    policies?: Record<string, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }> | undefined;
    uniqueConstraints?: Record<string, {
        columns: string[];
        name: string;
        nullsNotDistinct: boolean;
    }> | undefined;
    checkConstraints?: Record<string, {
        name: string;
        value: string;
    }> | undefined;
    isRLSEnabled?: boolean | undefined;
}>;
export declare const kitInternals: import('zod').ZodOptional<import('zod').ZodObject<{
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
            dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
            rawType: import('zod').ZodOptional<import('zod').ZodString>;
            isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }, "strip", import('zod').ZodTypeAny, {
            isArray?: boolean | undefined;
            dimensions?: number | undefined;
            rawType?: string | undefined;
            isDefaultAnExpression?: boolean | undefined;
        }, {
            isArray?: boolean | undefined;
            dimensions?: number | undefined;
            rawType?: string | undefined;
            isDefaultAnExpression?: boolean | undefined;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        columns: Record<string, {
            isArray?: boolean | undefined;
            dimensions?: number | undefined;
            rawType?: string | undefined;
            isDefaultAnExpression?: boolean | undefined;
        } | undefined>;
    }, {
        columns: Record<string, {
            isArray?: boolean | undefined;
            dimensions?: number | undefined;
            rawType?: string | undefined;
            isDefaultAnExpression?: boolean | undefined;
        } | undefined>;
    }>>>;
}, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            isArray?: boolean | undefined;
            dimensions?: number | undefined;
            rawType?: string | undefined;
            isDefaultAnExpression?: boolean | undefined;
        } | undefined>;
    } | undefined>;
}, {
    tables: Record<string, {
        columns: Record<string, {
            isArray?: boolean | undefined;
            dimensions?: number | undefined;
            rawType?: string | undefined;
            isDefaultAnExpression?: boolean | undefined;
        } | undefined>;
    } | undefined>;
}>>;
export declare const pgSchemaInternalV3: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"3">;
    dialect: import('zod').ZodLiteral<"pg">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodObject<{
                expression: import('zod').ZodString;
                isExpression: import('zod').ZodBoolean;
                asc: import('zod').ZodBoolean;
                nulls: import('zod').ZodOptional<import('zod').ZodString>;
                opclass: import('zod').ZodOptional<import('zod').ZodString>;
            }, "strip", import('zod').ZodTypeAny, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }>, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "3";
    dialect: "pg";
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "3";
    dialect: "pg";
}>;
export declare const pgSchemaInternalV4: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"4">;
    dialect: import('zod').ZodLiteral<"pg">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "4";
    dialect: "pg";
    schemas: Record<string, string>;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "4";
    dialect: "pg";
    schemas: Record<string, string>;
}>;
export declare const pgSchemaInternalV5: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"5">;
    dialect: import('zod').ZodLiteral<"pg">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "5";
    dialect: "pg";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "5";
    dialect: "pg";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>;
export declare const pgSchemaInternalV6: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"6">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "6";
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "6";
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>;
export declare const pgSchemaExternal: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"5">;
    dialect: import('zod').ZodLiteral<"pg">;
    tables: import('zod').ZodArray<import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodObject<{
                expression: import('zod').ZodString;
                isExpression: import('zod').ZodBoolean;
                asc: import('zod').ZodBoolean;
                nulls: import('zod').ZodOptional<import('zod').ZodString>;
                opclass: import('zod').ZodOptional<import('zod').ZodString>;
            }, "strip", import('zod').ZodTypeAny, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }>, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
        policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            as: import('zod').ZodOptional<import('zod').ZodEnum<["PERMISSIVE", "RESTRICTIVE"]>>;
            for: import('zod').ZodOptional<import('zod').ZodEnum<["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]>>;
            to: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString, "many">>;
            using: import('zod').ZodOptional<import('zod').ZodString>;
            withCheck: import('zod').ZodOptional<import('zod').ZodString>;
            on: import('zod').ZodOptional<import('zod').ZodString>;
            schema: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>>>;
        checkConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            value: import('zod').ZodString;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            value: string;
        }, {
            name: string;
            value: string;
        }>>>;
        isRLSEnabled: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        policies: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
        checkConstraints: Record<string, {
            name: string;
            value: string;
        }>;
        isRLSEnabled: boolean;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        policies?: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }> | undefined;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
        checkConstraints?: Record<string, {
            name: string;
            value: string;
        }> | undefined;
        isRLSEnabled?: boolean | undefined;
    }>, "many">;
    enums: import('zod').ZodArray<import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>, "many">;
    schemas: import('zod').ZodArray<import('zod').ZodObject<{
        name: import('zod').ZodString;
    }, "strip", import('zod').ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>, "many">;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
}, "strict", import('zod').ZodTypeAny, {
    tables: {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        policies: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
        checkConstraints: Record<string, {
            name: string;
            value: string;
        }>;
        isRLSEnabled: boolean;
    }[];
    enums: {
        name: string;
        values: Record<string, string>;
    }[];
    version: "5";
    dialect: "pg";
    schemas: {
        name: string;
    }[];
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
}, {
    tables: {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        policies?: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }> | undefined;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
        checkConstraints?: Record<string, {
            name: string;
            value: string;
        }> | undefined;
        isRLSEnabled?: boolean | undefined;
    }[];
    enums: {
        name: string;
        values: Record<string, string>;
    }[];
    version: "5";
    dialect: "pg";
    schemas: {
        name: string;
    }[];
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
}>;
export declare const pgSchemaInternalV7: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"7">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodObject<{
                expression: import('zod').ZodString;
                isExpression: import('zod').ZodBoolean;
                asc: import('zod').ZodBoolean;
                nulls: import('zod').ZodOptional<import('zod').ZodString>;
                opclass: import('zod').ZodOptional<import('zod').ZodString>;
            }, "strip", import('zod').ZodTypeAny, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }>, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    sequences: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        increment: import('zod').ZodOptional<import('zod').ZodString>;
        minValue: import('zod').ZodOptional<import('zod').ZodString>;
        maxValue: import('zod').ZodOptional<import('zod').ZodString>;
        startWith: import('zod').ZodOptional<import('zod').ZodString>;
        cache: import('zod').ZodOptional<import('zod').ZodString>;
        cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
        schema: import('zod').ZodString;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "7";
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    sequences: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "7";
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    sequences: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>;
export declare const pgSchemaInternal: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"7">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodObject<{
                expression: import('zod').ZodString;
                isExpression: import('zod').ZodBoolean;
                asc: import('zod').ZodBoolean;
                nulls: import('zod').ZodOptional<import('zod').ZodString>;
                opclass: import('zod').ZodOptional<import('zod').ZodString>;
            }, "strip", import('zod').ZodTypeAny, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }>, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
        policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            as: import('zod').ZodOptional<import('zod').ZodEnum<["PERMISSIVE", "RESTRICTIVE"]>>;
            for: import('zod').ZodOptional<import('zod').ZodEnum<["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]>>;
            to: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString, "many">>;
            using: import('zod').ZodOptional<import('zod').ZodString>;
            withCheck: import('zod').ZodOptional<import('zod').ZodString>;
            on: import('zod').ZodOptional<import('zod').ZodString>;
            schema: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>>>;
        checkConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            value: import('zod').ZodString;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            value: string;
        }, {
            name: string;
            value: string;
        }>>>;
        isRLSEnabled: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        policies: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
        checkConstraints: Record<string, {
            name: string;
            value: string;
        }>;
        isRLSEnabled: boolean;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        policies?: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }> | undefined;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
        checkConstraints?: Record<string, {
            name: string;
            value: string;
        }> | undefined;
        isRLSEnabled?: boolean | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    views: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        definition: import('zod').ZodOptional<import('zod').ZodString>;
        materialized: import('zod').ZodBoolean;
        with: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
            checkOption: import('zod').ZodOptional<import('zod').ZodEnum<["local", "cascaded"]>>;
            securityBarrier: import('zod').ZodOptional<import('zod').ZodBoolean>;
            securityInvoker: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }, {
            fillfactor: import('zod').ZodOptional<import('zod').ZodNumber>;
            toastTupleTarget: import('zod').ZodOptional<import('zod').ZodNumber>;
            parallelWorkers: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumEnabled: import('zod').ZodOptional<import('zod').ZodBoolean>;
            vacuumIndexCleanup: import('zod').ZodOptional<import('zod').ZodEnum<["auto", "off", "on"]>>;
            vacuumTruncate: import('zod').ZodOptional<import('zod').ZodBoolean>;
            autovacuumVacuumThreshold: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumScaleFactor: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumCostDelay: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumCostLimit: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            logAutovacuumMinDuration: import('zod').ZodOptional<import('zod').ZodNumber>;
            userCatalogTable: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }>, "strict", import('zod').ZodTypeAny, {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        }, {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        }>>;
        isExisting: import('zod').ZodBoolean;
        withNoData: import('zod').ZodOptional<import('zod').ZodBoolean>;
        using: import('zod').ZodOptional<import('zod').ZodString>;
        tablespace: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>>>;
    sequences: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        increment: import('zod').ZodOptional<import('zod').ZodString>;
        minValue: import('zod').ZodOptional<import('zod').ZodString>;
        maxValue: import('zod').ZodOptional<import('zod').ZodString>;
        startWith: import('zod').ZodOptional<import('zod').ZodString>;
        cache: import('zod').ZodOptional<import('zod').ZodString>;
        cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
        schema: import('zod').ZodString;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>>>;
    roles: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        createDb: import('zod').ZodOptional<import('zod').ZodBoolean>;
        createRole: import('zod').ZodOptional<import('zod').ZodBoolean>;
        inherit: import('zod').ZodOptional<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>>>;
    policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        as: import('zod').ZodOptional<import('zod').ZodEnum<["PERMISSIVE", "RESTRICTIVE"]>>;
        for: import('zod').ZodOptional<import('zod').ZodEnum<["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]>>;
        to: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString, "many">>;
        using: import('zod').ZodOptional<import('zod').ZodString>;
        withCheck: import('zod').ZodOptional<import('zod').ZodString>;
        on: import('zod').ZodOptional<import('zod').ZodString>;
        schema: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }>>>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        policies: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
        checkConstraints: Record<string, {
            name: string;
            value: string;
        }>;
        isRLSEnabled: boolean;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    policies: Record<string, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }>;
    views: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>;
    version: "7";
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    sequences: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>;
    roles: Record<string, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        policies?: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }> | undefined;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
        checkConstraints?: Record<string, {
            name: string;
            value: string;
        }> | undefined;
        isRLSEnabled?: boolean | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "7";
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    policies?: Record<string, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }> | undefined;
    views?: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }> | undefined;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
    sequences?: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }> | undefined;
    roles?: Record<string, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }> | undefined;
}>;
export declare const pgSchemaSquashedV4: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"4">;
    dialect: import('zod').ZodLiteral<"pg">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "4";
    dialect: "pg";
    schemas: Record<string, string>;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "4";
    dialect: "pg";
    schemas: Record<string, string>;
}>;
export declare const pgSchemaSquashedV6: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"6">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        uniqueConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        policies: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        checkConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        isRLSEnabled: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>;
        indexes: Record<string, string>;
        policies: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
        checkConstraints: Record<string, string>;
        isRLSEnabled: boolean;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>;
        indexes: Record<string, string>;
        policies: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
        checkConstraints: Record<string, string>;
        isRLSEnabled?: boolean | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>;
        indexes: Record<string, string>;
        policies: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
        checkConstraints: Record<string, string>;
        isRLSEnabled: boolean;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "6";
    dialect: "postgresql";
    schemas: Record<string, string>;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>;
        indexes: Record<string, string>;
        policies: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
        checkConstraints: Record<string, string>;
        isRLSEnabled?: boolean | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "6";
    dialect: "postgresql";
    schemas: Record<string, string>;
}>;
export declare const pgSchemaSquashed: import('zod').ZodObject<{
    version: import('zod').ZodLiteral<"7">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        uniqueConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        policies: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        checkConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        isRLSEnabled: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>;
        indexes: Record<string, string>;
        policies: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
        checkConstraints: Record<string, string>;
        isRLSEnabled: boolean;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>;
        indexes: Record<string, string>;
        policies: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
        checkConstraints: Record<string, string>;
        isRLSEnabled?: boolean | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    views: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        definition: import('zod').ZodOptional<import('zod').ZodString>;
        materialized: import('zod').ZodBoolean;
        with: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
            checkOption: import('zod').ZodOptional<import('zod').ZodEnum<["local", "cascaded"]>>;
            securityBarrier: import('zod').ZodOptional<import('zod').ZodBoolean>;
            securityInvoker: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }, {
            fillfactor: import('zod').ZodOptional<import('zod').ZodNumber>;
            toastTupleTarget: import('zod').ZodOptional<import('zod').ZodNumber>;
            parallelWorkers: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumEnabled: import('zod').ZodOptional<import('zod').ZodBoolean>;
            vacuumIndexCleanup: import('zod').ZodOptional<import('zod').ZodEnum<["auto", "off", "on"]>>;
            vacuumTruncate: import('zod').ZodOptional<import('zod').ZodBoolean>;
            autovacuumVacuumThreshold: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumScaleFactor: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumCostDelay: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumCostLimit: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            logAutovacuumMinDuration: import('zod').ZodOptional<import('zod').ZodNumber>;
            userCatalogTable: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }>, "strict", import('zod').ZodTypeAny, {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        }, {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        }>>;
        isExisting: import('zod').ZodBoolean;
        withNoData: import('zod').ZodOptional<import('zod').ZodBoolean>;
        using: import('zod').ZodOptional<import('zod').ZodString>;
        tablespace: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>>;
    sequences: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodString;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string;
        schema: string;
    }, {
        name: string;
        values: string;
        schema: string;
    }>>;
    roles: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        createDb: import('zod').ZodOptional<import('zod').ZodBoolean>;
        createRole: import('zod').ZodOptional<import('zod').ZodBoolean>;
        inherit: import('zod').ZodOptional<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>>>;
    policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodString;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string;
    }, {
        name: string;
        values: string;
    }>>>;
}, "strict", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>;
        indexes: Record<string, string>;
        policies: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
        checkConstraints: Record<string, string>;
        isRLSEnabled: boolean;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    policies: Record<string, {
        name: string;
        values: string;
    }>;
    views: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>;
    version: "7";
    dialect: "postgresql";
    schemas: Record<string, string>;
    sequences: Record<string, {
        name: string;
        values: string;
        schema: string;
    }>;
    roles: Record<string, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: string | undefined;
        }>;
        indexes: Record<string, string>;
        policies: Record<string, string>;
        name: string;
        schema: string;
        foreignKeys: Record<string, string>;
        compositePrimaryKeys: Record<string, string>;
        uniqueConstraints: Record<string, string>;
        checkConstraints: Record<string, string>;
        isRLSEnabled?: boolean | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    views: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>;
    version: "7";
    dialect: "postgresql";
    schemas: Record<string, string>;
    sequences: Record<string, {
        name: string;
        values: string;
        schema: string;
    }>;
    policies?: Record<string, {
        name: string;
        values: string;
    }> | undefined;
    roles?: Record<string, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }> | undefined;
}>;
export declare const pgSchemaV3: import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    version: import('zod').ZodLiteral<"3">;
    dialect: import('zod').ZodLiteral<"pg">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodObject<{
                expression: import('zod').ZodString;
                isExpression: import('zod').ZodBoolean;
                asc: import('zod').ZodBoolean;
                nulls: import('zod').ZodOptional<import('zod').ZodString>;
                opclass: import('zod').ZodOptional<import('zod').ZodString>;
            }, "strip", import('zod').ZodTypeAny, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }>, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
}, {
    id: import('zod').ZodString;
    prevId: import('zod').ZodString;
}>, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "3";
    id: string;
    prevId: string;
    dialect: "pg";
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "3";
    id: string;
    prevId: string;
    dialect: "pg";
}>;
export declare const pgSchemaV4: import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    version: import('zod').ZodLiteral<"4">;
    dialect: import('zod').ZodLiteral<"pg">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
}, {
    id: import('zod').ZodString;
    prevId: import('zod').ZodString;
}>, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "4";
    id: string;
    prevId: string;
    dialect: "pg";
    schemas: Record<string, string>;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "4";
    id: string;
    prevId: string;
    dialect: "pg";
    schemas: Record<string, string>;
}>;
export declare const pgSchemaV5: import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    version: import('zod').ZodLiteral<"5">;
    dialect: import('zod').ZodLiteral<"pg">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: import('zod').ZodString;
    prevId: import('zod').ZodString;
}>, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "5";
    id: string;
    prevId: string;
    dialect: "pg";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "5";
    id: string;
    prevId: string;
    dialect: "pg";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>;
export declare const pgSchemaV6: import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    version: import('zod').ZodLiteral<"6">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: import('zod').ZodString;
    prevId: import('zod').ZodString;
}>, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "6";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "6";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>;
export declare const pgSchemaV7: import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    version: import('zod').ZodLiteral<"7">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodObject<{
                expression: import('zod').ZodString;
                isExpression: import('zod').ZodBoolean;
                asc: import('zod').ZodBoolean;
                nulls: import('zod').ZodOptional<import('zod').ZodString>;
                opclass: import('zod').ZodOptional<import('zod').ZodString>;
            }, "strip", import('zod').ZodTypeAny, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }>, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    sequences: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        increment: import('zod').ZodOptional<import('zod').ZodString>;
        minValue: import('zod').ZodOptional<import('zod').ZodString>;
        maxValue: import('zod').ZodOptional<import('zod').ZodString>;
        startWith: import('zod').ZodOptional<import('zod').ZodString>;
        cache: import('zod').ZodOptional<import('zod').ZodString>;
        cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
        schema: import('zod').ZodString;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: import('zod').ZodString;
    prevId: import('zod').ZodString;
}>, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "7";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    sequences: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "7";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    sequences: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>;
export declare const pgSchema: import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    version: import('zod').ZodLiteral<"7">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodObject<{
                expression: import('zod').ZodString;
                isExpression: import('zod').ZodBoolean;
                asc: import('zod').ZodBoolean;
                nulls: import('zod').ZodOptional<import('zod').ZodString>;
                opclass: import('zod').ZodOptional<import('zod').ZodString>;
            }, "strip", import('zod').ZodTypeAny, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }>, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
        policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            as: import('zod').ZodOptional<import('zod').ZodEnum<["PERMISSIVE", "RESTRICTIVE"]>>;
            for: import('zod').ZodOptional<import('zod').ZodEnum<["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]>>;
            to: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString, "many">>;
            using: import('zod').ZodOptional<import('zod').ZodString>;
            withCheck: import('zod').ZodOptional<import('zod').ZodString>;
            on: import('zod').ZodOptional<import('zod').ZodString>;
            schema: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>>>;
        checkConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            value: import('zod').ZodString;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            value: string;
        }, {
            name: string;
            value: string;
        }>>>;
        isRLSEnabled: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        policies: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
        checkConstraints: Record<string, {
            name: string;
            value: string;
        }>;
        isRLSEnabled: boolean;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        policies?: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }> | undefined;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
        checkConstraints?: Record<string, {
            name: string;
            value: string;
        }> | undefined;
        isRLSEnabled?: boolean | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    views: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        definition: import('zod').ZodOptional<import('zod').ZodString>;
        materialized: import('zod').ZodBoolean;
        with: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
            checkOption: import('zod').ZodOptional<import('zod').ZodEnum<["local", "cascaded"]>>;
            securityBarrier: import('zod').ZodOptional<import('zod').ZodBoolean>;
            securityInvoker: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }, {
            fillfactor: import('zod').ZodOptional<import('zod').ZodNumber>;
            toastTupleTarget: import('zod').ZodOptional<import('zod').ZodNumber>;
            parallelWorkers: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumEnabled: import('zod').ZodOptional<import('zod').ZodBoolean>;
            vacuumIndexCleanup: import('zod').ZodOptional<import('zod').ZodEnum<["auto", "off", "on"]>>;
            vacuumTruncate: import('zod').ZodOptional<import('zod').ZodBoolean>;
            autovacuumVacuumThreshold: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumScaleFactor: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumCostDelay: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumCostLimit: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            logAutovacuumMinDuration: import('zod').ZodOptional<import('zod').ZodNumber>;
            userCatalogTable: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }>, "strict", import('zod').ZodTypeAny, {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        }, {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        }>>;
        isExisting: import('zod').ZodBoolean;
        withNoData: import('zod').ZodOptional<import('zod').ZodBoolean>;
        using: import('zod').ZodOptional<import('zod').ZodString>;
        tablespace: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>>>;
    sequences: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        increment: import('zod').ZodOptional<import('zod').ZodString>;
        minValue: import('zod').ZodOptional<import('zod').ZodString>;
        maxValue: import('zod').ZodOptional<import('zod').ZodString>;
        startWith: import('zod').ZodOptional<import('zod').ZodString>;
        cache: import('zod').ZodOptional<import('zod').ZodString>;
        cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
        schema: import('zod').ZodString;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>>>;
    roles: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        createDb: import('zod').ZodOptional<import('zod').ZodBoolean>;
        createRole: import('zod').ZodOptional<import('zod').ZodBoolean>;
        inherit: import('zod').ZodOptional<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>>>;
    policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        as: import('zod').ZodOptional<import('zod').ZodEnum<["PERMISSIVE", "RESTRICTIVE"]>>;
        for: import('zod').ZodOptional<import('zod').ZodEnum<["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]>>;
        to: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString, "many">>;
        using: import('zod').ZodOptional<import('zod').ZodString>;
        withCheck: import('zod').ZodOptional<import('zod').ZodString>;
        on: import('zod').ZodOptional<import('zod').ZodString>;
        schema: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }>>>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: import('zod').ZodString;
    prevId: import('zod').ZodString;
}>, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        policies: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
        checkConstraints: Record<string, {
            name: string;
            value: string;
        }>;
        isRLSEnabled: boolean;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    policies: Record<string, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }>;
    views: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>;
    version: "7";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    sequences: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>;
    roles: Record<string, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        policies?: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }> | undefined;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
        checkConstraints?: Record<string, {
            name: string;
            value: string;
        }> | undefined;
        isRLSEnabled?: boolean | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "7";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    policies?: Record<string, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }> | undefined;
    views?: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }> | undefined;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
    sequences?: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }> | undefined;
    roles?: Record<string, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }> | undefined;
}>;
export type Enum = TypeOf<typeof enumSchema>;
export type Sequence = TypeOf<typeof sequenceSchema>;
export type Role = TypeOf<typeof roleSchema>;
export type Column = TypeOf<typeof column>;
export type TableV3 = TypeOf<typeof tableV3>;
export type TableV4 = TypeOf<typeof tableV4>;
export type TableV5 = TypeOf<typeof tableV5>;
export type Table = TypeOf<typeof table>;
export type PgSchema = TypeOf<typeof pgSchema>;
export type PgSchemaInternal = TypeOf<typeof pgSchemaInternal>;
export type PgSchemaV6Internal = TypeOf<typeof pgSchemaInternalV6>;
export type PgSchemaExternal = TypeOf<typeof pgSchemaExternal>;
export type PgSchemaSquashed = TypeOf<typeof pgSchemaSquashed>;
export type PgSchemaSquashedV4 = TypeOf<typeof pgSchemaSquashedV4>;
export type PgSchemaSquashedV6 = TypeOf<typeof pgSchemaSquashedV6>;
export type Index = TypeOf<typeof index>;
export type ForeignKey = TypeOf<typeof fk>;
export type PrimaryKey = TypeOf<typeof compositePK>;
export type UniqueConstraint = TypeOf<typeof uniqueConstraint>;
export type Policy = TypeOf<typeof policy>;
export type View = TypeOf<typeof view>;
export type MatViewWithOption = TypeOf<typeof matViewWithOption>;
export type ViewWithOption = TypeOf<typeof viewWithOption>;
export type PgKitInternals = TypeOf<typeof kitInternals>;
export type CheckConstraint = TypeOf<typeof checkConstraint>;
export type PgSchemaV1 = TypeOf<typeof pgSchemaV1>;
export type PgSchemaV2 = TypeOf<typeof pgSchemaV2>;
export type PgSchemaV3 = TypeOf<typeof pgSchemaV3>;
export type PgSchemaV4 = TypeOf<typeof pgSchemaV4>;
export type PgSchemaV5 = TypeOf<typeof pgSchemaV5>;
export type PgSchemaV6 = TypeOf<typeof pgSchemaV6>;
export declare const backwardCompatiblePgSchema: import('zod').ZodUnion<[import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    version: import('zod').ZodLiteral<"5">;
    dialect: import('zod').ZodLiteral<"pg">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: Record<string, string>;
    }, {
        name: string;
        values: Record<string, string>;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: import('zod').ZodString;
    prevId: import('zod').ZodString;
}>, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "5";
    id: string;
    prevId: string;
    dialect: "pg";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: Record<string, string>;
    }>;
    version: "5";
    id: string;
    prevId: string;
    dialect: "pg";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>, import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    version: import('zod').ZodLiteral<"6">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: import('zod').ZodString;
    prevId: import('zod').ZodString;
}>, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, string> | undefined;
            where?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "6";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: string[];
            name: string;
            isUnique: boolean;
            with?: Record<string, string> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "6";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}>, import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    version: import('zod').ZodLiteral<"7">;
    dialect: import('zod').ZodLiteral<"postgresql">;
    tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodObject<{
                expression: import('zod').ZodString;
                isExpression: import('zod').ZodBoolean;
                asc: import('zod').ZodBoolean;
                nulls: import('zod').ZodOptional<import('zod').ZodString>;
                opclass: import('zod').ZodOptional<import('zod').ZodString>;
            }, "strip", import('zod').ZodTypeAny, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }, {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }>, "many">;
            isUnique: import('zod').ZodBoolean;
            with: import('zod').ZodOptional<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodAny>>;
            method: import('zod').ZodDefault<import('zod').ZodString>;
            where: import('zod').ZodOptional<import('zod').ZodString>;
            concurrently: import('zod').ZodDefault<import('zod').ZodBoolean>;
        }, "strict", import('zod').ZodTypeAny, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>>;
        foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            tableFrom: import('zod').ZodString;
            columnsFrom: import('zod').ZodArray<import('zod').ZodString, "many">;
            tableTo: import('zod').ZodString;
            schemaTo: import('zod').ZodOptional<import('zod').ZodString>;
            columnsTo: import('zod').ZodArray<import('zod').ZodString, "many">;
            onUpdate: import('zod').ZodOptional<import('zod').ZodString>;
            onDelete: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>>;
        compositePrimaryKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
        }, {
            columns: string[];
            name: string;
        }>>;
        uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            columns: import('zod').ZodArray<import('zod').ZodString, "many">;
            nullsNotDistinct: import('zod').ZodBoolean;
        }, "strict", import('zod').ZodTypeAny, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>>>;
        policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            as: import('zod').ZodOptional<import('zod').ZodEnum<["PERMISSIVE", "RESTRICTIVE"]>>;
            for: import('zod').ZodOptional<import('zod').ZodEnum<["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]>>;
            to: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString, "many">>;
            using: import('zod').ZodOptional<import('zod').ZodString>;
            withCheck: import('zod').ZodOptional<import('zod').ZodString>;
            on: import('zod').ZodOptional<import('zod').ZodString>;
            schema: import('zod').ZodOptional<import('zod').ZodString>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>>>;
        checkConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            value: import('zod').ZodString;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            value: string;
        }, {
            name: string;
            value: string;
        }>>>;
        isRLSEnabled: import('zod').ZodDefault<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        policies: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
        checkConstraints: Record<string, {
            name: string;
            value: string;
        }>;
        isRLSEnabled: boolean;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        policies?: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }> | undefined;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
        checkConstraints?: Record<string, {
            name: string;
            value: string;
        }> | undefined;
        isRLSEnabled?: boolean | undefined;
    }>>;
    enums: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        values: string[];
        schema: string;
    }, {
        name: string;
        values: string[];
        schema: string;
    }>>;
    schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    views: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            name: import('zod').ZodString;
            type: import('zod').ZodString;
            typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
            primaryKey: import('zod').ZodBoolean;
            notNull: import('zod').ZodBoolean;
            default: import('zod').ZodOptional<import('zod').ZodAny>;
            isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
            uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
            nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
            generated: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"stored">;
                as: import('zod').ZodString;
            }, "strip", import('zod').ZodTypeAny, {
                type: "stored";
                as: string;
            }, {
                type: "stored";
                as: string;
            }>>;
            identity: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
                name: import('zod').ZodString;
                increment: import('zod').ZodOptional<import('zod').ZodString>;
                minValue: import('zod').ZodOptional<import('zod').ZodString>;
                maxValue: import('zod').ZodOptional<import('zod').ZodString>;
                startWith: import('zod').ZodOptional<import('zod').ZodString>;
                cache: import('zod').ZodOptional<import('zod').ZodString>;
                cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
                schema: import('zod').ZodString;
            }, {
                type: import('zod').ZodEnum<["always", "byDefault"]>;
            }>, "strip", import('zod').ZodTypeAny, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }, {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            }>>;
        }, "strict", import('zod').ZodTypeAny, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>>;
        definition: import('zod').ZodOptional<import('zod').ZodString>;
        materialized: import('zod').ZodBoolean;
        with: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
            checkOption: import('zod').ZodOptional<import('zod').ZodEnum<["local", "cascaded"]>>;
            securityBarrier: import('zod').ZodOptional<import('zod').ZodBoolean>;
            securityInvoker: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }, {
            fillfactor: import('zod').ZodOptional<import('zod').ZodNumber>;
            toastTupleTarget: import('zod').ZodOptional<import('zod').ZodNumber>;
            parallelWorkers: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumEnabled: import('zod').ZodOptional<import('zod').ZodBoolean>;
            vacuumIndexCleanup: import('zod').ZodOptional<import('zod').ZodEnum<["auto", "off", "on"]>>;
            vacuumTruncate: import('zod').ZodOptional<import('zod').ZodBoolean>;
            autovacuumVacuumThreshold: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumScaleFactor: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumCostDelay: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumVacuumCostLimit: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeMinAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeMaxAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            autovacuumMultixactFreezeTableAge: import('zod').ZodOptional<import('zod').ZodNumber>;
            logAutovacuumMinDuration: import('zod').ZodOptional<import('zod').ZodNumber>;
            userCatalogTable: import('zod').ZodOptional<import('zod').ZodBoolean>;
        }>, "strict", import('zod').ZodTypeAny, {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        }, {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        }>>;
        isExisting: import('zod').ZodBoolean;
        withNoData: import('zod').ZodOptional<import('zod').ZodBoolean>;
        using: import('zod').ZodOptional<import('zod').ZodString>;
        tablespace: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>>>;
    sequences: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        increment: import('zod').ZodOptional<import('zod').ZodString>;
        minValue: import('zod').ZodOptional<import('zod').ZodString>;
        maxValue: import('zod').ZodOptional<import('zod').ZodString>;
        startWith: import('zod').ZodOptional<import('zod').ZodString>;
        cache: import('zod').ZodOptional<import('zod').ZodString>;
        cycle: import('zod').ZodOptional<import('zod').ZodBoolean>;
        schema: import('zod').ZodString;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>>>;
    roles: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        createDb: import('zod').ZodOptional<import('zod').ZodBoolean>;
        createRole: import('zod').ZodOptional<import('zod').ZodBoolean>;
        inherit: import('zod').ZodOptional<import('zod').ZodBoolean>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>>>;
    policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        as: import('zod').ZodOptional<import('zod').ZodEnum<["PERMISSIVE", "RESTRICTIVE"]>>;
        for: import('zod').ZodOptional<import('zod').ZodEnum<["ALL", "SELECT", "INSERT", "UPDATE", "DELETE"]>>;
        to: import('zod').ZodOptional<import('zod').ZodArray<import('zod').ZodString, "many">>;
        using: import('zod').ZodOptional<import('zod').ZodString>;
        withCheck: import('zod').ZodOptional<import('zod').ZodString>;
        on: import('zod').ZodOptional<import('zod').ZodString>;
        schema: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", import('zod').ZodTypeAny, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }>>>;
    _meta: import('zod').ZodObject<{
        schemas: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }, {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    }>;
    internal: import('zod').ZodOptional<import('zod').ZodObject<{
        tables: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
            columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodOptional<import('zod').ZodObject<{
                isArray: import('zod').ZodOptional<import('zod').ZodBoolean>;
                dimensions: import('zod').ZodOptional<import('zod').ZodNumber>;
                rawType: import('zod').ZodOptional<import('zod').ZodString>;
                isDefaultAnExpression: import('zod').ZodOptional<import('zod').ZodBoolean>;
            }, "strip", import('zod').ZodTypeAny, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            }>>>;
        }, "strip", import('zod').ZodTypeAny, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        }>>>;
    }, "strip", import('zod').ZodTypeAny, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }, {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    }>>;
}, {
    id: import('zod').ZodString;
    prevId: import('zod').ZodString;
}>, "strip", import('zod').ZodTypeAny, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        policies: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
        checkConstraints: Record<string, {
            name: string;
            value: string;
        }>;
        isRLSEnabled: boolean;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    policies: Record<string, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }>;
    views: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>;
    version: "7";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    sequences: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>;
    roles: Record<string, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
}, {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            with?: Record<string, any> | undefined;
            method?: string | undefined;
            where?: string | undefined;
            concurrently?: boolean | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        policies?: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }> | undefined;
        uniqueConstraints?: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }> | undefined;
        checkConstraints?: Record<string, {
            name: string;
            value: string;
        }> | undefined;
        isRLSEnabled?: boolean | undefined;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    version: "7";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    policies?: Record<string, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }> | undefined;
    views?: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }> | undefined;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
    sequences?: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }> | undefined;
    roles?: Record<string, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }> | undefined;
}>]>;
export declare const PgSquasher: {
    squashIdx: (idx: Index) => string;
    unsquashIdx: (input: string) => Index;
    squashIdxPush: (idx: Index) => string;
    unsquashIdxPush: (input: string) => Index;
    squashFK: (fk: ForeignKey) => string;
    squashPolicy: (policy: Policy) => string;
    unsquashPolicy: (policy: string) => Policy;
    squashPolicyPush: (policy: Policy) => string;
    unsquashPolicyPush: (policy: string) => Policy;
    squashPK: (pk: PrimaryKey) => string;
    unsquashPK: (pk: string) => PrimaryKey;
    squashUnique: (unq: UniqueConstraint) => string;
    unsquashUnique: (unq: string) => UniqueConstraint;
    unsquashFK: (input: string) => ForeignKey;
    squashSequence: (seq: Omit<Sequence, "name" | "schema">) => string;
    unsquashSequence: (seq: string) => Omit<Sequence, "name" | "schema">;
    squashIdentity: (seq: Omit<Sequence, "schema"> & {
        type: "always" | "byDefault";
    }) => string;
    unsquashIdentity: (seq: string) => Omit<Sequence, "schema"> & {
        type: "always" | "byDefault";
    };
    squashCheck: (check: CheckConstraint) => string;
    unsquashCheck: (input: string) => CheckConstraint;
};
export declare const squashPgScheme: (json: PgSchema, action?: "push" | undefined) => PgSchemaSquashed;
export declare const dryPg: {
    tables: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        indexes: Record<string, {
            columns: {
                expression: string;
                isExpression: boolean;
                asc: boolean;
                nulls?: string | undefined;
                opclass?: string | undefined;
            }[];
            name: string;
            isUnique: boolean;
            method: string;
            concurrently: boolean;
            with?: Record<string, any> | undefined;
            where?: string | undefined;
        }>;
        policies: Record<string, {
            name: string;
            schema?: string | undefined;
            as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
            for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
            to?: string[] | undefined;
            using?: string | undefined;
            withCheck?: string | undefined;
            on?: string | undefined;
        }>;
        name: string;
        schema: string;
        foreignKeys: Record<string, {
            name: string;
            tableFrom: string;
            columnsFrom: string[];
            tableTo: string;
            columnsTo: string[];
            onDelete?: string | undefined;
            onUpdate?: string | undefined;
            schemaTo?: string | undefined;
        }>;
        compositePrimaryKeys: Record<string, {
            columns: string[];
            name: string;
        }>;
        uniqueConstraints: Record<string, {
            columns: string[];
            name: string;
            nullsNotDistinct: boolean;
        }>;
        checkConstraints: Record<string, {
            name: string;
            value: string;
        }>;
        isRLSEnabled: boolean;
    }>;
    enums: Record<string, {
        name: string;
        values: string[];
        schema: string;
    }>;
    policies: Record<string, {
        name: string;
        schema?: string | undefined;
        as?: "PERMISSIVE" | "RESTRICTIVE" | undefined;
        for?: "ALL" | "SELECT" | "INSERT" | "UPDATE" | "DELETE" | undefined;
        to?: string[] | undefined;
        using?: string | undefined;
        withCheck?: string | undefined;
        on?: string | undefined;
    }>;
    views: Record<string, {
        columns: Record<string, {
            name: string;
            type: string;
            primaryKey: boolean;
            notNull: boolean;
            isUnique?: any;
            default?: any;
            typeSchema?: string | undefined;
            uniqueName?: string | undefined;
            nullsNotDistinct?: boolean | undefined;
            generated?: {
                type: "stored";
                as: string;
            } | undefined;
            identity?: {
                name: string;
                type: "always" | "byDefault";
                schema: string;
                increment?: string | undefined;
                minValue?: string | undefined;
                maxValue?: string | undefined;
                startWith?: string | undefined;
                cache?: string | undefined;
                cycle?: boolean | undefined;
            } | undefined;
        }>;
        name: string;
        schema: string;
        materialized: boolean;
        isExisting: boolean;
        with?: {
            checkOption?: "local" | "cascaded" | undefined;
            securityBarrier?: boolean | undefined;
            securityInvoker?: boolean | undefined;
            fillfactor?: number | undefined;
            toastTupleTarget?: number | undefined;
            parallelWorkers?: number | undefined;
            autovacuumEnabled?: boolean | undefined;
            vacuumIndexCleanup?: "on" | "auto" | "off" | undefined;
            vacuumTruncate?: boolean | undefined;
            autovacuumVacuumThreshold?: number | undefined;
            autovacuumVacuumScaleFactor?: number | undefined;
            autovacuumVacuumCostDelay?: number | undefined;
            autovacuumVacuumCostLimit?: number | undefined;
            autovacuumFreezeMinAge?: number | undefined;
            autovacuumFreezeMaxAge?: number | undefined;
            autovacuumFreezeTableAge?: number | undefined;
            autovacuumMultixactFreezeMinAge?: number | undefined;
            autovacuumMultixactFreezeMaxAge?: number | undefined;
            autovacuumMultixactFreezeTableAge?: number | undefined;
            logAutovacuumMinDuration?: number | undefined;
            userCatalogTable?: boolean | undefined;
        } | undefined;
        using?: string | undefined;
        definition?: string | undefined;
        withNoData?: boolean | undefined;
        tablespace?: string | undefined;
    }>;
    version: "7";
    id: string;
    prevId: string;
    dialect: "postgresql";
    schemas: Record<string, string>;
    _meta: {
        tables: Record<string, string>;
        columns: Record<string, string>;
        schemas: Record<string, string>;
    };
    sequences: Record<string, {
        name: string;
        schema: string;
        increment?: string | undefined;
        minValue?: string | undefined;
        maxValue?: string | undefined;
        startWith?: string | undefined;
        cache?: string | undefined;
        cycle?: boolean | undefined;
    }>;
    roles: Record<string, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>;
    internal?: {
        tables: Record<string, {
            columns: Record<string, {
                isArray?: boolean | undefined;
                dimensions?: number | undefined;
                rawType?: string | undefined;
                isDefaultAnExpression?: boolean | undefined;
            } | undefined>;
        } | undefined>;
    } | undefined;
};
export {};
