import { TypeOf, ZodTypeAny } from 'zod';
import { JsonStatement } from './jsonStatements';
import { Named } from './lib';
import { PgSchema, PgSchemaSquashed, Policy, Role, sequenceSquashed, View } from './pgSchema';
export declare const makePatched: <T extends ZodTypeAny>(schema: T) => import('zod').ZodUnion<[import('zod').ZodObject<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}, "strip", ZodTypeAny, import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}>, any> extends infer T_1 ? { [k in keyof T_1]: import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}>, any>[k]; } : never, import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}> extends infer T_2 ? { [k_1 in keyof T_2]: import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}>[k_1]; } : never>, import('zod').ZodObject<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}, "strip", ZodTypeAny, import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}>, any> extends infer T_3 ? { [k_2 in keyof T_3]: import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}>, any>[k_2]; } : never, import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}> extends infer T_4 ? { [k_3 in keyof T_4]: import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}>[k_3]; } : never>, import('zod').ZodObject<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}, "strip", ZodTypeAny, import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}>, any> extends infer T_5 ? { [k_4 in keyof T_5]: import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}>, any>[k_4]; } : never, import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}> extends infer T_6 ? { [k_5 in keyof T_6]: import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}>[k_5]; } : never>]>;
export declare const makeSelfOrPatched: <T extends ZodTypeAny>(schema: T) => import('zod').ZodUnion<[import('zod').ZodObject<{
    type: import('zod').ZodLiteral<"none">;
    value: T;
}, "strip", ZodTypeAny, import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"none">;
    value: T;
}>, any> extends infer T_1 ? { [k in keyof T_1]: import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"none">;
    value: T;
}>, any>[k]; } : never, import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"none">;
    value: T;
}> extends infer T_2 ? { [k_1 in keyof T_2]: import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"none">;
    value: T;
}>[k_1]; } : never>, import('zod').ZodObject<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}, "strip", ZodTypeAny, import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}>, any> extends infer T_3 ? { [k_2 in keyof T_3]: import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}>, any>[k_2]; } : never, import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}> extends infer T_4 ? { [k_3 in keyof T_4]: import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"added">;
    value: T;
}>[k_3]; } : never>, import('zod').ZodObject<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}, "strip", ZodTypeAny, import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}>, any> extends infer T_5 ? { [k_4 in keyof T_5]: import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}>, any>[k_4]; } : never, import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}> extends infer T_6 ? { [k_5 in keyof T_6]: import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"deleted">;
    value: T;
}>[k_5]; } : never>, import('zod').ZodObject<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}, "strip", ZodTypeAny, import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}>, any> extends infer T_7 ? { [k_6 in keyof T_7]: import("zod").objectUtil.addQuestionMarks<import('zod').baseObjectOutputType<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}>, any>[k_6]; } : never, import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}> extends infer T_8 ? { [k_7 in keyof T_8]: import('zod').baseObjectInputType<{
    type: import('zod').ZodLiteral<"changed">;
    old: T;
    new: T;
}>[k_7]; } : never>]>;
declare const columnSchema: import('zod').ZodObject<{
    name: import('zod').ZodString;
    type: import('zod').ZodString;
    typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
    primaryKey: import('zod').ZodOptional<import('zod').ZodBoolean>;
    default: import('zod').ZodOptional<import('zod').ZodAny>;
    notNull: import('zod').ZodOptional<import('zod').ZodBoolean>;
    autoincrement: import('zod').ZodOptional<import('zod').ZodBoolean>;
    onUpdate: import('zod').ZodOptional<import('zod').ZodBoolean>;
    isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
    uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
    nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
    generated: import('zod').ZodOptional<import('zod').ZodObject<{
        as: import('zod').ZodString;
        type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
    }, "strip", ZodTypeAny, {
        type: "stored" | "virtual";
        as: string;
    }, {
        as: string;
        type?: "stored" | "virtual" | undefined;
    }>>;
    identity: import('zod').ZodOptional<import('zod').ZodString>;
}, "strict", ZodTypeAny, {
    name: string;
    type: string;
    isUnique?: any;
    primaryKey?: boolean | undefined;
    notNull?: boolean | undefined;
    default?: any;
    onUpdate?: boolean | undefined;
    typeSchema?: string | undefined;
    uniqueName?: string | undefined;
    nullsNotDistinct?: boolean | undefined;
    generated?: {
        type: "stored" | "virtual";
        as: string;
    } | undefined;
    identity?: string | undefined;
    autoincrement?: boolean | undefined;
}, {
    name: string;
    type: string;
    isUnique?: any;
    primaryKey?: boolean | undefined;
    notNull?: boolean | undefined;
    default?: any;
    onUpdate?: boolean | undefined;
    typeSchema?: string | undefined;
    uniqueName?: string | undefined;
    nullsNotDistinct?: boolean | undefined;
    generated?: {
        as: string;
        type?: "stored" | "virtual" | undefined;
    } | undefined;
    identity?: string | undefined;
    autoincrement?: boolean | undefined;
}>;
declare const alteredColumnSchema: import('zod').ZodObject<{
    name: import('zod').ZodUnion<[import('zod').ZodString, import('zod').ZodObject<{
        type: import('zod').ZodEnum<["changed"]>;
        old: import('zod').ZodString;
        new: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: string;
        new: string;
    }, {
        type: "changed";
        old: string;
        new: string;
    }>]>;
    type: import('zod').ZodOptional<import('zod').ZodObject<{
        type: import('zod').ZodEnum<["changed"]>;
        old: import('zod').ZodString;
        new: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: string;
        new: string;
    }, {
        type: "changed";
        old: string;
        new: string;
    }>>;
    default: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"added">;
        value: import('zod').ZodAny;
    }, "strip", ZodTypeAny, {
        type: "added";
        value?: any;
    }, {
        type: "added";
        value?: any;
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"deleted">;
        value: import('zod').ZodAny;
    }, "strip", ZodTypeAny, {
        type: "deleted";
        value?: any;
    }, {
        type: "deleted";
        value?: any;
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"changed">;
        old: import('zod').ZodAny;
        new: import('zod').ZodAny;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old?: any;
        new?: any;
    }, {
        type: "changed";
        old?: any;
        new?: any;
    }>]>>;
    primaryKey: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"added">;
        value: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        value: boolean;
        type: "added";
    }, {
        value: boolean;
        type: "added";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"deleted">;
        value: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        value: boolean;
        type: "deleted";
    }, {
        value: boolean;
        type: "deleted";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"changed">;
        old: import('zod').ZodBoolean;
        new: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: boolean;
        new: boolean;
    }, {
        type: "changed";
        old: boolean;
        new: boolean;
    }>]>>;
    notNull: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"added">;
        value: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        value: boolean;
        type: "added";
    }, {
        value: boolean;
        type: "added";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"deleted">;
        value: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        value: boolean;
        type: "deleted";
    }, {
        value: boolean;
        type: "deleted";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"changed">;
        old: import('zod').ZodBoolean;
        new: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: boolean;
        new: boolean;
    }, {
        type: "changed";
        old: boolean;
        new: boolean;
    }>]>>;
    typeSchema: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"added">;
        value: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        value: string;
        type: "added";
    }, {
        value: string;
        type: "added";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"deleted">;
        value: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        value: string;
        type: "deleted";
    }, {
        value: string;
        type: "deleted";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"changed">;
        old: import('zod').ZodString;
        new: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: string;
        new: string;
    }, {
        type: "changed";
        old: string;
        new: string;
    }>]>>;
    onUpdate: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"added">;
        value: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        value: boolean;
        type: "added";
    }, {
        value: boolean;
        type: "added";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"deleted">;
        value: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        value: boolean;
        type: "deleted";
    }, {
        value: boolean;
        type: "deleted";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"changed">;
        old: import('zod').ZodBoolean;
        new: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: boolean;
        new: boolean;
    }, {
        type: "changed";
        old: boolean;
        new: boolean;
    }>]>>;
    autoincrement: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"added">;
        value: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        value: boolean;
        type: "added";
    }, {
        value: boolean;
        type: "added";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"deleted">;
        value: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        value: boolean;
        type: "deleted";
    }, {
        value: boolean;
        type: "deleted";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"changed">;
        old: import('zod').ZodBoolean;
        new: import('zod').ZodBoolean;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: boolean;
        new: boolean;
    }, {
        type: "changed";
        old: boolean;
        new: boolean;
    }>]>>;
    generated: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"added">;
        value: import('zod').ZodObject<{
            as: import('zod').ZodString;
            type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
        }, "strip", ZodTypeAny, {
            type: "stored" | "virtual";
            as: string;
        }, {
            as: string;
            type?: "stored" | "virtual" | undefined;
        }>;
    }, "strip", ZodTypeAny, {
        value: {
            type: "stored" | "virtual";
            as: string;
        };
        type: "added";
    }, {
        value: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        };
        type: "added";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"deleted">;
        value: import('zod').ZodObject<{
            as: import('zod').ZodString;
            type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
        }, "strip", ZodTypeAny, {
            type: "stored" | "virtual";
            as: string;
        }, {
            as: string;
            type?: "stored" | "virtual" | undefined;
        }>;
    }, "strip", ZodTypeAny, {
        value: {
            type: "stored" | "virtual";
            as: string;
        };
        type: "deleted";
    }, {
        value: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        };
        type: "deleted";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"changed">;
        old: import('zod').ZodObject<{
            as: import('zod').ZodString;
            type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
        }, "strip", ZodTypeAny, {
            type: "stored" | "virtual";
            as: string;
        }, {
            as: string;
            type?: "stored" | "virtual" | undefined;
        }>;
        new: import('zod').ZodObject<{
            as: import('zod').ZodString;
            type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
        }, "strip", ZodTypeAny, {
            type: "stored" | "virtual";
            as: string;
        }, {
            as: string;
            type?: "stored" | "virtual" | undefined;
        }>;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: {
            type: "stored" | "virtual";
            as: string;
        };
        new: {
            type: "stored" | "virtual";
            as: string;
        };
    }, {
        type: "changed";
        old: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        };
        new: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        };
    }>]>>;
    identity: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"added">;
        value: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        value: string;
        type: "added";
    }, {
        value: string;
        type: "added";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"deleted">;
        value: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        value: string;
        type: "deleted";
    }, {
        value: string;
        type: "deleted";
    }>, import('zod').ZodObject<{
        type: import('zod').ZodLiteral<"changed">;
        old: import('zod').ZodString;
        new: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        type: "changed";
        old: string;
        new: string;
    }, {
        type: "changed";
        old: string;
        new: string;
    }>]>>;
}, "strict", ZodTypeAny, {
    name: string | {
        type: "changed";
        old: string;
        new: string;
    };
    type?: {
        type: "changed";
        old: string;
        new: string;
    } | undefined;
    primaryKey?: {
        value: boolean;
        type: "added";
    } | {
        value: boolean;
        type: "deleted";
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    notNull?: {
        value: boolean;
        type: "added";
    } | {
        value: boolean;
        type: "deleted";
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    default?: {
        type: "added";
        value?: any;
    } | {
        type: "deleted";
        value?: any;
    } | {
        type: "changed";
        old?: any;
        new?: any;
    } | undefined;
    onUpdate?: {
        value: boolean;
        type: "added";
    } | {
        value: boolean;
        type: "deleted";
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    typeSchema?: {
        value: string;
        type: "added";
    } | {
        value: string;
        type: "deleted";
    } | {
        type: "changed";
        old: string;
        new: string;
    } | undefined;
    generated?: {
        value: {
            type: "stored" | "virtual";
            as: string;
        };
        type: "added";
    } | {
        value: {
            type: "stored" | "virtual";
            as: string;
        };
        type: "deleted";
    } | {
        type: "changed";
        old: {
            type: "stored" | "virtual";
            as: string;
        };
        new: {
            type: "stored" | "virtual";
            as: string;
        };
    } | undefined;
    identity?: {
        value: string;
        type: "added";
    } | {
        value: string;
        type: "deleted";
    } | {
        type: "changed";
        old: string;
        new: string;
    } | undefined;
    autoincrement?: {
        value: boolean;
        type: "added";
    } | {
        value: boolean;
        type: "deleted";
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
}, {
    name: string | {
        type: "changed";
        old: string;
        new: string;
    };
    type?: {
        type: "changed";
        old: string;
        new: string;
    } | undefined;
    primaryKey?: {
        value: boolean;
        type: "added";
    } | {
        value: boolean;
        type: "deleted";
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    notNull?: {
        value: boolean;
        type: "added";
    } | {
        value: boolean;
        type: "deleted";
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    default?: {
        type: "added";
        value?: any;
    } | {
        type: "deleted";
        value?: any;
    } | {
        type: "changed";
        old?: any;
        new?: any;
    } | undefined;
    onUpdate?: {
        value: boolean;
        type: "added";
    } | {
        value: boolean;
        type: "deleted";
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
    typeSchema?: {
        value: string;
        type: "added";
    } | {
        value: string;
        type: "deleted";
    } | {
        type: "changed";
        old: string;
        new: string;
    } | undefined;
    generated?: {
        value: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        };
        type: "added";
    } | {
        value: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        };
        type: "deleted";
    } | {
        type: "changed";
        old: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        };
        new: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        };
    } | undefined;
    identity?: {
        value: string;
        type: "added";
    } | {
        value: string;
        type: "deleted";
    } | {
        type: "changed";
        old: string;
        new: string;
    } | undefined;
    autoincrement?: {
        value: boolean;
        type: "added";
    } | {
        value: boolean;
        type: "deleted";
    } | {
        type: "changed";
        old: boolean;
        new: boolean;
    } | undefined;
}>;
declare const enumSchema: import('zod').ZodObject<{
    name: import('zod').ZodString;
    schema: import('zod').ZodString;
    values: import('zod').ZodArray<import('zod').ZodString, "many">;
}, "strict", ZodTypeAny, {
    name: string;
    values: string[];
    schema: string;
}, {
    name: string;
    values: string[];
    schema: string;
}>;
declare const tableScheme: import('zod').ZodObject<{
    name: import('zod').ZodString;
    schema: import('zod').ZodDefault<import('zod').ZodString>;
    columns: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        name: import('zod').ZodString;
        type: import('zod').ZodString;
        typeSchema: import('zod').ZodOptional<import('zod').ZodString>;
        primaryKey: import('zod').ZodOptional<import('zod').ZodBoolean>;
        default: import('zod').ZodOptional<import('zod').ZodAny>;
        notNull: import('zod').ZodOptional<import('zod').ZodBoolean>;
        autoincrement: import('zod').ZodOptional<import('zod').ZodBoolean>;
        onUpdate: import('zod').ZodOptional<import('zod').ZodBoolean>;
        isUnique: import('zod').ZodOptional<import('zod').ZodAny>;
        uniqueName: import('zod').ZodOptional<import('zod').ZodString>;
        nullsNotDistinct: import('zod').ZodOptional<import('zod').ZodBoolean>;
        generated: import('zod').ZodOptional<import('zod').ZodObject<{
            as: import('zod').ZodString;
            type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
        }, "strip", ZodTypeAny, {
            type: "stored" | "virtual";
            as: string;
        }, {
            as: string;
            type?: "stored" | "virtual" | undefined;
        }>>;
        identity: import('zod').ZodOptional<import('zod').ZodString>;
    }, "strict", ZodTypeAny, {
        name: string;
        type: string;
        isUnique?: any;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        default?: any;
        onUpdate?: boolean | undefined;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored" | "virtual";
            as: string;
        } | undefined;
        identity?: string | undefined;
        autoincrement?: boolean | undefined;
    }, {
        name: string;
        type: string;
        isUnique?: any;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        default?: any;
        onUpdate?: boolean | undefined;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        } | undefined;
        identity?: string | undefined;
        autoincrement?: boolean | undefined;
    }>>;
    indexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    foreignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    compositePrimaryKeys: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
    uniqueConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
    policies: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
    checkConstraints: import('zod').ZodDefault<import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>>;
    isRLSEnabled: import('zod').ZodDefault<import('zod').ZodBoolean>;
}, "strict", ZodTypeAny, {
    columns: Record<string, {
        name: string;
        type: string;
        isUnique?: any;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        default?: any;
        onUpdate?: boolean | undefined;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            type: "stored" | "virtual";
            as: string;
        } | undefined;
        identity?: string | undefined;
        autoincrement?: boolean | undefined;
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
        isUnique?: any;
        primaryKey?: boolean | undefined;
        notNull?: boolean | undefined;
        default?: any;
        onUpdate?: boolean | undefined;
        typeSchema?: string | undefined;
        uniqueName?: string | undefined;
        nullsNotDistinct?: boolean | undefined;
        generated?: {
            as: string;
            type?: "stored" | "virtual" | undefined;
        } | undefined;
        identity?: string | undefined;
        autoincrement?: boolean | undefined;
    }>;
    indexes: Record<string, string>;
    name: string;
    foreignKeys: Record<string, string>;
    policies?: Record<string, string> | undefined;
    schema?: string | undefined;
    compositePrimaryKeys?: Record<string, string> | undefined;
    uniqueConstraints?: Record<string, string> | undefined;
    checkConstraints?: Record<string, string> | undefined;
    isRLSEnabled?: boolean | undefined;
}>;
export declare const alteredTableScheme: import('zod').ZodObject<{
    name: import('zod').ZodString;
    schema: import('zod').ZodString;
    altered: import('zod').ZodArray<import('zod').ZodObject<{
        name: import('zod').ZodUnion<[import('zod').ZodString, import('zod').ZodObject<{
            type: import('zod').ZodEnum<["changed"]>;
            old: import('zod').ZodString;
            new: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: string;
            new: string;
        }, {
            type: "changed";
            old: string;
            new: string;
        }>]>;
        type: import('zod').ZodOptional<import('zod').ZodObject<{
            type: import('zod').ZodEnum<["changed"]>;
            old: import('zod').ZodString;
            new: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: string;
            new: string;
        }, {
            type: "changed";
            old: string;
            new: string;
        }>>;
        default: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"added">;
            value: import('zod').ZodAny;
        }, "strip", ZodTypeAny, {
            type: "added";
            value?: any;
        }, {
            type: "added";
            value?: any;
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"deleted">;
            value: import('zod').ZodAny;
        }, "strip", ZodTypeAny, {
            type: "deleted";
            value?: any;
        }, {
            type: "deleted";
            value?: any;
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"changed">;
            old: import('zod').ZodAny;
            new: import('zod').ZodAny;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old?: any;
            new?: any;
        }, {
            type: "changed";
            old?: any;
            new?: any;
        }>]>>;
        primaryKey: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"added">;
            value: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            value: boolean;
            type: "added";
        }, {
            value: boolean;
            type: "added";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"deleted">;
            value: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            value: boolean;
            type: "deleted";
        }, {
            value: boolean;
            type: "deleted";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"changed">;
            old: import('zod').ZodBoolean;
            new: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: boolean;
            new: boolean;
        }, {
            type: "changed";
            old: boolean;
            new: boolean;
        }>]>>;
        notNull: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"added">;
            value: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            value: boolean;
            type: "added";
        }, {
            value: boolean;
            type: "added";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"deleted">;
            value: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            value: boolean;
            type: "deleted";
        }, {
            value: boolean;
            type: "deleted";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"changed">;
            old: import('zod').ZodBoolean;
            new: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: boolean;
            new: boolean;
        }, {
            type: "changed";
            old: boolean;
            new: boolean;
        }>]>>;
        typeSchema: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"added">;
            value: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            value: string;
            type: "added";
        }, {
            value: string;
            type: "added";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"deleted">;
            value: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            value: string;
            type: "deleted";
        }, {
            value: string;
            type: "deleted";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"changed">;
            old: import('zod').ZodString;
            new: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: string;
            new: string;
        }, {
            type: "changed";
            old: string;
            new: string;
        }>]>>;
        onUpdate: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"added">;
            value: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            value: boolean;
            type: "added";
        }, {
            value: boolean;
            type: "added";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"deleted">;
            value: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            value: boolean;
            type: "deleted";
        }, {
            value: boolean;
            type: "deleted";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"changed">;
            old: import('zod').ZodBoolean;
            new: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: boolean;
            new: boolean;
        }, {
            type: "changed";
            old: boolean;
            new: boolean;
        }>]>>;
        autoincrement: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"added">;
            value: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            value: boolean;
            type: "added";
        }, {
            value: boolean;
            type: "added";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"deleted">;
            value: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            value: boolean;
            type: "deleted";
        }, {
            value: boolean;
            type: "deleted";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"changed">;
            old: import('zod').ZodBoolean;
            new: import('zod').ZodBoolean;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: boolean;
            new: boolean;
        }, {
            type: "changed";
            old: boolean;
            new: boolean;
        }>]>>;
        generated: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"added">;
            value: import('zod').ZodObject<{
                as: import('zod').ZodString;
                type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
            }, "strip", ZodTypeAny, {
                type: "stored" | "virtual";
                as: string;
            }, {
                as: string;
                type?: "stored" | "virtual" | undefined;
            }>;
        }, "strip", ZodTypeAny, {
            value: {
                type: "stored" | "virtual";
                as: string;
            };
            type: "added";
        }, {
            value: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
            type: "added";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"deleted">;
            value: import('zod').ZodObject<{
                as: import('zod').ZodString;
                type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
            }, "strip", ZodTypeAny, {
                type: "stored" | "virtual";
                as: string;
            }, {
                as: string;
                type?: "stored" | "virtual" | undefined;
            }>;
        }, "strip", ZodTypeAny, {
            value: {
                type: "stored" | "virtual";
                as: string;
            };
            type: "deleted";
        }, {
            value: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
            type: "deleted";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"changed">;
            old: import('zod').ZodObject<{
                as: import('zod').ZodString;
                type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
            }, "strip", ZodTypeAny, {
                type: "stored" | "virtual";
                as: string;
            }, {
                as: string;
                type?: "stored" | "virtual" | undefined;
            }>;
            new: import('zod').ZodObject<{
                as: import('zod').ZodString;
                type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
            }, "strip", ZodTypeAny, {
                type: "stored" | "virtual";
                as: string;
            }, {
                as: string;
                type?: "stored" | "virtual" | undefined;
            }>;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: {
                type: "stored" | "virtual";
                as: string;
            };
            new: {
                type: "stored" | "virtual";
                as: string;
            };
        }, {
            type: "changed";
            old: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
            new: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
        }>]>>;
        identity: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"added">;
            value: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            value: string;
            type: "added";
        }, {
            value: string;
            type: "added";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"deleted">;
            value: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            value: string;
            type: "deleted";
        }, {
            value: string;
            type: "deleted";
        }>, import('zod').ZodObject<{
            type: import('zod').ZodLiteral<"changed">;
            old: import('zod').ZodString;
            new: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            type: "changed";
            old: string;
            new: string;
        }, {
            type: "changed";
            old: string;
            new: string;
        }>]>>;
    }, "strict", ZodTypeAny, {
        name: string | {
            type: "changed";
            old: string;
            new: string;
        };
        type?: {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        primaryKey?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        notNull?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        default?: {
            type: "added";
            value?: any;
        } | {
            type: "deleted";
            value?: any;
        } | {
            type: "changed";
            old?: any;
            new?: any;
        } | undefined;
        onUpdate?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        typeSchema?: {
            value: string;
            type: "added";
        } | {
            value: string;
            type: "deleted";
        } | {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        generated?: {
            value: {
                type: "stored" | "virtual";
                as: string;
            };
            type: "added";
        } | {
            value: {
                type: "stored" | "virtual";
                as: string;
            };
            type: "deleted";
        } | {
            type: "changed";
            old: {
                type: "stored" | "virtual";
                as: string;
            };
            new: {
                type: "stored" | "virtual";
                as: string;
            };
        } | undefined;
        identity?: {
            value: string;
            type: "added";
        } | {
            value: string;
            type: "deleted";
        } | {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        autoincrement?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
    }, {
        name: string | {
            type: "changed";
            old: string;
            new: string;
        };
        type?: {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        primaryKey?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        notNull?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        default?: {
            type: "added";
            value?: any;
        } | {
            type: "deleted";
            value?: any;
        } | {
            type: "changed";
            old?: any;
            new?: any;
        } | undefined;
        onUpdate?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        typeSchema?: {
            value: string;
            type: "added";
        } | {
            value: string;
            type: "deleted";
        } | {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        generated?: {
            value: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
            type: "added";
        } | {
            value: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
            type: "deleted";
        } | {
            type: "changed";
            old: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
            new: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
        } | undefined;
        identity?: {
            value: string;
            type: "added";
        } | {
            value: string;
            type: "deleted";
        } | {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        autoincrement?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
    }>, "many">;
    addedIndexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    deletedIndexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    alteredIndexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        __new: import('zod').ZodString;
        __old: import('zod').ZodString;
    }, "strict", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    addedForeignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    deletedForeignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    alteredForeignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        __new: import('zod').ZodString;
        __old: import('zod').ZodString;
    }, "strict", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    addedCompositePKs: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    deletedCompositePKs: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    alteredCompositePKs: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        __new: import('zod').ZodString;
        __old: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    addedUniqueConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    deletedUniqueConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    alteredUniqueConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        __new: import('zod').ZodString;
        __old: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    addedPolicies: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    deletedPolicies: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    alteredPolicies: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        __new: import('zod').ZodString;
        __old: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    addedCheckConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    deletedCheckConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
    alteredCheckConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
        __new: import('zod').ZodString;
        __old: import('zod').ZodString;
    }, "strip", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
}, "strict", ZodTypeAny, {
    name: string;
    schema: string;
    altered: {
        name: string | {
            type: "changed";
            old: string;
            new: string;
        };
        type?: {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        primaryKey?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        notNull?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        default?: {
            type: "added";
            value?: any;
        } | {
            type: "deleted";
            value?: any;
        } | {
            type: "changed";
            old?: any;
            new?: any;
        } | undefined;
        onUpdate?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        typeSchema?: {
            value: string;
            type: "added";
        } | {
            value: string;
            type: "deleted";
        } | {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        generated?: {
            value: {
                type: "stored" | "virtual";
                as: string;
            };
            type: "added";
        } | {
            value: {
                type: "stored" | "virtual";
                as: string;
            };
            type: "deleted";
        } | {
            type: "changed";
            old: {
                type: "stored" | "virtual";
                as: string;
            };
            new: {
                type: "stored" | "virtual";
                as: string;
            };
        } | undefined;
        identity?: {
            value: string;
            type: "added";
        } | {
            value: string;
            type: "deleted";
        } | {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        autoincrement?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
    }[];
    addedIndexes: Record<string, string>;
    deletedIndexes: Record<string, string>;
    alteredIndexes: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedForeignKeys: Record<string, string>;
    deletedForeignKeys: Record<string, string>;
    alteredForeignKeys: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedCompositePKs: Record<string, string>;
    deletedCompositePKs: Record<string, string>;
    alteredCompositePKs: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedUniqueConstraints: Record<string, string>;
    deletedUniqueConstraints: Record<string, string>;
    alteredUniqueConstraints: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedPolicies: Record<string, string>;
    deletedPolicies: Record<string, string>;
    alteredPolicies: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedCheckConstraints: Record<string, string>;
    deletedCheckConstraints: Record<string, string>;
    alteredCheckConstraints: Record<string, {
        __old: string;
        __new: string;
    }>;
}, {
    name: string;
    schema: string;
    altered: {
        name: string | {
            type: "changed";
            old: string;
            new: string;
        };
        type?: {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        primaryKey?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        notNull?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        default?: {
            type: "added";
            value?: any;
        } | {
            type: "deleted";
            value?: any;
        } | {
            type: "changed";
            old?: any;
            new?: any;
        } | undefined;
        onUpdate?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
        typeSchema?: {
            value: string;
            type: "added";
        } | {
            value: string;
            type: "deleted";
        } | {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        generated?: {
            value: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
            type: "added";
        } | {
            value: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
            type: "deleted";
        } | {
            type: "changed";
            old: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
            new: {
                as: string;
                type?: "stored" | "virtual" | undefined;
            };
        } | undefined;
        identity?: {
            value: string;
            type: "added";
        } | {
            value: string;
            type: "deleted";
        } | {
            type: "changed";
            old: string;
            new: string;
        } | undefined;
        autoincrement?: {
            value: boolean;
            type: "added";
        } | {
            value: boolean;
            type: "deleted";
        } | {
            type: "changed";
            old: boolean;
            new: boolean;
        } | undefined;
    }[];
    addedIndexes: Record<string, string>;
    deletedIndexes: Record<string, string>;
    alteredIndexes: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedForeignKeys: Record<string, string>;
    deletedForeignKeys: Record<string, string>;
    alteredForeignKeys: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedCompositePKs: Record<string, string>;
    deletedCompositePKs: Record<string, string>;
    alteredCompositePKs: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedUniqueConstraints: Record<string, string>;
    deletedUniqueConstraints: Record<string, string>;
    alteredUniqueConstraints: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedPolicies: Record<string, string>;
    deletedPolicies: Record<string, string>;
    alteredPolicies: Record<string, {
        __old: string;
        __new: string;
    }>;
    addedCheckConstraints: Record<string, string>;
    deletedCheckConstraints: Record<string, string>;
    alteredCheckConstraints: Record<string, {
        __old: string;
        __new: string;
    }>;
}>;
export declare const alteredPgViewSchema: import('zod').ZodObject<import("zod").objectUtil.extendShape<{
    name: import('zod').ZodString;
    alteredDefinition: import('zod').ZodOptional<import('zod').ZodObject<{
        __old: import('zod').ZodString;
        __new: import('zod').ZodString;
    }, "strict", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    alteredExisting: import('zod').ZodOptional<import('zod').ZodObject<{
        __old: import('zod').ZodBoolean;
        __new: import('zod').ZodBoolean;
    }, "strict", ZodTypeAny, {
        __old: boolean;
        __new: boolean;
    }, {
        __old: boolean;
        __new: boolean;
    }>>;
}, {
    schema: import('zod').ZodString;
    deletedWithOption: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
    }>, "strict", ZodTypeAny, {
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
    addedWithOption: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
    }>, "strict", ZodTypeAny, {
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
    addedWith: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
    }>, "strict", ZodTypeAny, {
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
    deletedWith: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
    }>, "strict", ZodTypeAny, {
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
    alteredWith: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
    }>, "strict", ZodTypeAny, {
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
    alteredSchema: import('zod').ZodOptional<import('zod').ZodObject<{
        __old: import('zod').ZodString;
        __new: import('zod').ZodString;
    }, "strict", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    alteredTablespace: import('zod').ZodOptional<import('zod').ZodObject<{
        __old: import('zod').ZodString;
        __new: import('zod').ZodString;
    }, "strict", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
    alteredUsing: import('zod').ZodOptional<import('zod').ZodObject<{
        __old: import('zod').ZodString;
        __new: import('zod').ZodString;
    }, "strict", ZodTypeAny, {
        __old: string;
        __new: string;
    }, {
        __old: string;
        __new: string;
    }>>;
}>, "strict", ZodTypeAny, {
    name: string;
    schema: string;
    deletedWithOption?: {
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
    addedWithOption?: {
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
    alteredSchema?: {
        __old: string;
        __new: string;
    } | undefined;
    alteredTablespace?: {
        __old: string;
        __new: string;
    } | undefined;
    alteredUsing?: {
        __old: string;
        __new: string;
    } | undefined;
    alteredDefinition?: {
        __old: string;
        __new: string;
    } | undefined;
    alteredExisting?: {
        __old: boolean;
        __new: boolean;
    } | undefined;
    deletedWith?: {
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
    addedWith?: {
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
    alteredWith?: {
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
}, {
    name: string;
    schema: string;
    deletedWithOption?: {
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
    addedWithOption?: {
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
    alteredSchema?: {
        __old: string;
        __new: string;
    } | undefined;
    alteredTablespace?: {
        __old: string;
        __new: string;
    } | undefined;
    alteredUsing?: {
        __old: string;
        __new: string;
    } | undefined;
    alteredDefinition?: {
        __old: string;
        __new: string;
    } | undefined;
    alteredExisting?: {
        __old: boolean;
        __new: boolean;
    } | undefined;
    deletedWith?: {
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
    addedWith?: {
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
    alteredWith?: {
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
}>;
export declare const diffResultScheme: import('zod').ZodObject<{
    alteredTablesWithColumns: import('zod').ZodArray<import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        altered: import('zod').ZodArray<import('zod').ZodObject<{
            name: import('zod').ZodUnion<[import('zod').ZodString, import('zod').ZodObject<{
                type: import('zod').ZodEnum<["changed"]>;
                old: import('zod').ZodString;
                new: import('zod').ZodString;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: string;
                new: string;
            }, {
                type: "changed";
                old: string;
                new: string;
            }>]>;
            type: import('zod').ZodOptional<import('zod').ZodObject<{
                type: import('zod').ZodEnum<["changed"]>;
                old: import('zod').ZodString;
                new: import('zod').ZodString;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: string;
                new: string;
            }, {
                type: "changed";
                old: string;
                new: string;
            }>>;
            default: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"added">;
                value: import('zod').ZodAny;
            }, "strip", ZodTypeAny, {
                type: "added";
                value?: any;
            }, {
                type: "added";
                value?: any;
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"deleted">;
                value: import('zod').ZodAny;
            }, "strip", ZodTypeAny, {
                type: "deleted";
                value?: any;
            }, {
                type: "deleted";
                value?: any;
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"changed">;
                old: import('zod').ZodAny;
                new: import('zod').ZodAny;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old?: any;
                new?: any;
            }, {
                type: "changed";
                old?: any;
                new?: any;
            }>]>>;
            primaryKey: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"added">;
                value: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                value: boolean;
                type: "added";
            }, {
                value: boolean;
                type: "added";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"deleted">;
                value: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                value: boolean;
                type: "deleted";
            }, {
                value: boolean;
                type: "deleted";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"changed">;
                old: import('zod').ZodBoolean;
                new: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: boolean;
                new: boolean;
            }, {
                type: "changed";
                old: boolean;
                new: boolean;
            }>]>>;
            notNull: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"added">;
                value: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                value: boolean;
                type: "added";
            }, {
                value: boolean;
                type: "added";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"deleted">;
                value: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                value: boolean;
                type: "deleted";
            }, {
                value: boolean;
                type: "deleted";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"changed">;
                old: import('zod').ZodBoolean;
                new: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: boolean;
                new: boolean;
            }, {
                type: "changed";
                old: boolean;
                new: boolean;
            }>]>>;
            typeSchema: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"added">;
                value: import('zod').ZodString;
            }, "strip", ZodTypeAny, {
                value: string;
                type: "added";
            }, {
                value: string;
                type: "added";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"deleted">;
                value: import('zod').ZodString;
            }, "strip", ZodTypeAny, {
                value: string;
                type: "deleted";
            }, {
                value: string;
                type: "deleted";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"changed">;
                old: import('zod').ZodString;
                new: import('zod').ZodString;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: string;
                new: string;
            }, {
                type: "changed";
                old: string;
                new: string;
            }>]>>;
            onUpdate: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"added">;
                value: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                value: boolean;
                type: "added";
            }, {
                value: boolean;
                type: "added";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"deleted">;
                value: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                value: boolean;
                type: "deleted";
            }, {
                value: boolean;
                type: "deleted";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"changed">;
                old: import('zod').ZodBoolean;
                new: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: boolean;
                new: boolean;
            }, {
                type: "changed";
                old: boolean;
                new: boolean;
            }>]>>;
            autoincrement: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"added">;
                value: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                value: boolean;
                type: "added";
            }, {
                value: boolean;
                type: "added";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"deleted">;
                value: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                value: boolean;
                type: "deleted";
            }, {
                value: boolean;
                type: "deleted";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"changed">;
                old: import('zod').ZodBoolean;
                new: import('zod').ZodBoolean;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: boolean;
                new: boolean;
            }, {
                type: "changed";
                old: boolean;
                new: boolean;
            }>]>>;
            generated: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"added">;
                value: import('zod').ZodObject<{
                    as: import('zod').ZodString;
                    type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
                }, "strip", ZodTypeAny, {
                    type: "stored" | "virtual";
                    as: string;
                }, {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                }>;
            }, "strip", ZodTypeAny, {
                value: {
                    type: "stored" | "virtual";
                    as: string;
                };
                type: "added";
            }, {
                value: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                type: "added";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"deleted">;
                value: import('zod').ZodObject<{
                    as: import('zod').ZodString;
                    type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
                }, "strip", ZodTypeAny, {
                    type: "stored" | "virtual";
                    as: string;
                }, {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                }>;
            }, "strip", ZodTypeAny, {
                value: {
                    type: "stored" | "virtual";
                    as: string;
                };
                type: "deleted";
            }, {
                value: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                type: "deleted";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"changed">;
                old: import('zod').ZodObject<{
                    as: import('zod').ZodString;
                    type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
                }, "strip", ZodTypeAny, {
                    type: "stored" | "virtual";
                    as: string;
                }, {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                }>;
                new: import('zod').ZodObject<{
                    as: import('zod').ZodString;
                    type: import('zod').ZodDefault<import('zod').ZodEnum<["stored", "virtual"]>>;
                }, "strip", ZodTypeAny, {
                    type: "stored" | "virtual";
                    as: string;
                }, {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                }>;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: {
                    type: "stored" | "virtual";
                    as: string;
                };
                new: {
                    type: "stored" | "virtual";
                    as: string;
                };
            }, {
                type: "changed";
                old: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                new: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
            }>]>>;
            identity: import('zod').ZodOptional<import('zod').ZodUnion<[import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"added">;
                value: import('zod').ZodString;
            }, "strip", ZodTypeAny, {
                value: string;
                type: "added";
            }, {
                value: string;
                type: "added";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"deleted">;
                value: import('zod').ZodString;
            }, "strip", ZodTypeAny, {
                value: string;
                type: "deleted";
            }, {
                value: string;
                type: "deleted";
            }>, import('zod').ZodObject<{
                type: import('zod').ZodLiteral<"changed">;
                old: import('zod').ZodString;
                new: import('zod').ZodString;
            }, "strip", ZodTypeAny, {
                type: "changed";
                old: string;
                new: string;
            }, {
                type: "changed";
                old: string;
                new: string;
            }>]>>;
        }, "strict", ZodTypeAny, {
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            primaryKey?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            default?: {
                type: "added";
                value?: any;
            } | {
                type: "deleted";
                value?: any;
            } | {
                type: "changed";
                old?: any;
                new?: any;
            } | undefined;
            onUpdate?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            typeSchema?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            generated?: {
                value: {
                    type: "stored" | "virtual";
                    as: string;
                };
                type: "added";
            } | {
                value: {
                    type: "stored" | "virtual";
                    as: string;
                };
                type: "deleted";
            } | {
                type: "changed";
                old: {
                    type: "stored" | "virtual";
                    as: string;
                };
                new: {
                    type: "stored" | "virtual";
                    as: string;
                };
            } | undefined;
            identity?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            autoincrement?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
        }, {
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            primaryKey?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            default?: {
                type: "added";
                value?: any;
            } | {
                type: "deleted";
                value?: any;
            } | {
                type: "changed";
                old?: any;
                new?: any;
            } | undefined;
            onUpdate?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            typeSchema?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            generated?: {
                value: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                type: "added";
            } | {
                value: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                type: "deleted";
            } | {
                type: "changed";
                old: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                new: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
            } | undefined;
            identity?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            autoincrement?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
        }>, "many">;
        addedIndexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        deletedIndexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        alteredIndexes: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            __new: import('zod').ZodString;
            __old: import('zod').ZodString;
        }, "strict", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        addedForeignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        deletedForeignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        alteredForeignKeys: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            __new: import('zod').ZodString;
            __old: import('zod').ZodString;
        }, "strict", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        addedCompositePKs: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        deletedCompositePKs: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        alteredCompositePKs: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            __new: import('zod').ZodString;
            __old: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        addedUniqueConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        deletedUniqueConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        alteredUniqueConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            __new: import('zod').ZodString;
            __old: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        addedPolicies: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        deletedPolicies: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        alteredPolicies: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            __new: import('zod').ZodString;
            __old: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        addedCheckConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        deletedCheckConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodString>;
        alteredCheckConstraints: import('zod').ZodRecord<import('zod').ZodString, import('zod').ZodObject<{
            __new: import('zod').ZodString;
            __old: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
    }, "strict", ZodTypeAny, {
        name: string;
        schema: string;
        altered: {
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            primaryKey?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            default?: {
                type: "added";
                value?: any;
            } | {
                type: "deleted";
                value?: any;
            } | {
                type: "changed";
                old?: any;
                new?: any;
            } | undefined;
            onUpdate?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            typeSchema?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            generated?: {
                value: {
                    type: "stored" | "virtual";
                    as: string;
                };
                type: "added";
            } | {
                value: {
                    type: "stored" | "virtual";
                    as: string;
                };
                type: "deleted";
            } | {
                type: "changed";
                old: {
                    type: "stored" | "virtual";
                    as: string;
                };
                new: {
                    type: "stored" | "virtual";
                    as: string;
                };
            } | undefined;
            identity?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            autoincrement?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
        }[];
        addedIndexes: Record<string, string>;
        deletedIndexes: Record<string, string>;
        alteredIndexes: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedForeignKeys: Record<string, string>;
        deletedForeignKeys: Record<string, string>;
        alteredForeignKeys: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCompositePKs: Record<string, string>;
        deletedCompositePKs: Record<string, string>;
        alteredCompositePKs: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedUniqueConstraints: Record<string, string>;
        deletedUniqueConstraints: Record<string, string>;
        alteredUniqueConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedPolicies: Record<string, string>;
        deletedPolicies: Record<string, string>;
        alteredPolicies: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCheckConstraints: Record<string, string>;
        deletedCheckConstraints: Record<string, string>;
        alteredCheckConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
    }, {
        name: string;
        schema: string;
        altered: {
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            primaryKey?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            default?: {
                type: "added";
                value?: any;
            } | {
                type: "deleted";
                value?: any;
            } | {
                type: "changed";
                old?: any;
                new?: any;
            } | undefined;
            onUpdate?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            typeSchema?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            generated?: {
                value: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                type: "added";
            } | {
                value: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                type: "deleted";
            } | {
                type: "changed";
                old: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                new: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
            } | undefined;
            identity?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            autoincrement?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
        }[];
        addedIndexes: Record<string, string>;
        deletedIndexes: Record<string, string>;
        alteredIndexes: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedForeignKeys: Record<string, string>;
        deletedForeignKeys: Record<string, string>;
        alteredForeignKeys: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCompositePKs: Record<string, string>;
        deletedCompositePKs: Record<string, string>;
        alteredCompositePKs: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedUniqueConstraints: Record<string, string>;
        deletedUniqueConstraints: Record<string, string>;
        alteredUniqueConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedPolicies: Record<string, string>;
        deletedPolicies: Record<string, string>;
        alteredPolicies: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCheckConstraints: Record<string, string>;
        deletedCheckConstraints: Record<string, string>;
        alteredCheckConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
    }>, "many">;
    alteredEnums: import('zod').ZodArray<import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        addedValues: import('zod').ZodArray<import('zod').ZodObject<{
            before: import('zod').ZodString;
            value: import('zod').ZodString;
        }, "strip", ZodTypeAny, {
            value: string;
            before: string;
        }, {
            value: string;
            before: string;
        }>, "many">;
        deletedValues: import('zod').ZodArray<import('zod').ZodString, "many">;
    }, "strict", ZodTypeAny, {
        name: string;
        schema: string;
        addedValues: {
            value: string;
            before: string;
        }[];
        deletedValues: string[];
    }, {
        name: string;
        schema: string;
        addedValues: {
            value: string;
            before: string;
        }[];
        deletedValues: string[];
    }>, "many">;
    alteredSequences: import('zod').ZodArray<import('zod').ZodObject<{
        name: import('zod').ZodString;
        schema: import('zod').ZodString;
        values: import('zod').ZodString;
    }, "strict", ZodTypeAny, {
        name: string;
        values: string;
        schema: string;
    }, {
        name: string;
        values: string;
        schema: string;
    }>, "many">;
    alteredRoles: import('zod').ZodArray<import('zod').ZodObject<{
        name: import('zod').ZodString;
        createDb: import('zod').ZodOptional<import('zod').ZodBoolean>;
        createRole: import('zod').ZodOptional<import('zod').ZodBoolean>;
        inherit: import('zod').ZodOptional<import('zod').ZodBoolean>;
    }, "strict", ZodTypeAny, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }, {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }>, "many">;
    alteredPolicies: import('zod').ZodArray<import('zod').ZodObject<{
        name: import('zod').ZodString;
        values: import('zod').ZodString;
    }, "strict", ZodTypeAny, {
        name: string;
        values: string;
    }, {
        name: string;
        values: string;
    }>, "many">;
    alteredViews: import('zod').ZodArray<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
        name: import('zod').ZodString;
        alteredDefinition: import('zod').ZodOptional<import('zod').ZodObject<{
            __old: import('zod').ZodString;
            __new: import('zod').ZodString;
        }, "strict", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        alteredExisting: import('zod').ZodOptional<import('zod').ZodObject<{
            __old: import('zod').ZodBoolean;
            __new: import('zod').ZodBoolean;
        }, "strict", ZodTypeAny, {
            __old: boolean;
            __new: boolean;
        }, {
            __old: boolean;
            __new: boolean;
        }>>;
    }, {
        schema: import('zod').ZodString;
        deletedWithOption: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
        }>, "strict", ZodTypeAny, {
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
        addedWithOption: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
        }>, "strict", ZodTypeAny, {
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
        addedWith: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
        }>, "strict", ZodTypeAny, {
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
        deletedWith: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
        }>, "strict", ZodTypeAny, {
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
        alteredWith: import('zod').ZodOptional<import('zod').ZodObject<import("zod").objectUtil.extendShape<{
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
        }>, "strict", ZodTypeAny, {
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
        alteredSchema: import('zod').ZodOptional<import('zod').ZodObject<{
            __old: import('zod').ZodString;
            __new: import('zod').ZodString;
        }, "strict", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        alteredTablespace: import('zod').ZodOptional<import('zod').ZodObject<{
            __old: import('zod').ZodString;
            __new: import('zod').ZodString;
        }, "strict", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
        alteredUsing: import('zod').ZodOptional<import('zod').ZodObject<{
            __old: import('zod').ZodString;
            __new: import('zod').ZodString;
        }, "strict", ZodTypeAny, {
            __old: string;
            __new: string;
        }, {
            __old: string;
            __new: string;
        }>>;
    }>, "strict", ZodTypeAny, {
        name: string;
        schema: string;
        deletedWithOption?: {
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
        addedWithOption?: {
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
        alteredSchema?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredTablespace?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredUsing?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredDefinition?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredExisting?: {
            __old: boolean;
            __new: boolean;
        } | undefined;
        deletedWith?: {
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
        addedWith?: {
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
        alteredWith?: {
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
    }, {
        name: string;
        schema: string;
        deletedWithOption?: {
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
        addedWithOption?: {
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
        alteredSchema?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredTablespace?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredUsing?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredDefinition?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredExisting?: {
            __old: boolean;
            __new: boolean;
        } | undefined;
        deletedWith?: {
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
        addedWith?: {
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
        alteredWith?: {
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
    }>, "many">;
}, "strict", ZodTypeAny, {
    alteredPolicies: {
        name: string;
        values: string;
    }[];
    alteredTablesWithColumns: {
        name: string;
        schema: string;
        altered: {
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            primaryKey?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            default?: {
                type: "added";
                value?: any;
            } | {
                type: "deleted";
                value?: any;
            } | {
                type: "changed";
                old?: any;
                new?: any;
            } | undefined;
            onUpdate?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            typeSchema?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            generated?: {
                value: {
                    type: "stored" | "virtual";
                    as: string;
                };
                type: "added";
            } | {
                value: {
                    type: "stored" | "virtual";
                    as: string;
                };
                type: "deleted";
            } | {
                type: "changed";
                old: {
                    type: "stored" | "virtual";
                    as: string;
                };
                new: {
                    type: "stored" | "virtual";
                    as: string;
                };
            } | undefined;
            identity?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            autoincrement?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
        }[];
        addedIndexes: Record<string, string>;
        deletedIndexes: Record<string, string>;
        alteredIndexes: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedForeignKeys: Record<string, string>;
        deletedForeignKeys: Record<string, string>;
        alteredForeignKeys: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCompositePKs: Record<string, string>;
        deletedCompositePKs: Record<string, string>;
        alteredCompositePKs: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedUniqueConstraints: Record<string, string>;
        deletedUniqueConstraints: Record<string, string>;
        alteredUniqueConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedPolicies: Record<string, string>;
        deletedPolicies: Record<string, string>;
        alteredPolicies: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCheckConstraints: Record<string, string>;
        deletedCheckConstraints: Record<string, string>;
        alteredCheckConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
    }[];
    alteredEnums: {
        name: string;
        schema: string;
        addedValues: {
            value: string;
            before: string;
        }[];
        deletedValues: string[];
    }[];
    alteredSequences: {
        name: string;
        values: string;
        schema: string;
    }[];
    alteredRoles: {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }[];
    alteredViews: {
        name: string;
        schema: string;
        deletedWithOption?: {
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
        addedWithOption?: {
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
        alteredSchema?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredTablespace?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredUsing?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredDefinition?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredExisting?: {
            __old: boolean;
            __new: boolean;
        } | undefined;
        deletedWith?: {
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
        addedWith?: {
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
        alteredWith?: {
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
    }[];
}, {
    alteredPolicies: {
        name: string;
        values: string;
    }[];
    alteredTablesWithColumns: {
        name: string;
        schema: string;
        altered: {
            name: string | {
                type: "changed";
                old: string;
                new: string;
            };
            type?: {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            primaryKey?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            notNull?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            default?: {
                type: "added";
                value?: any;
            } | {
                type: "deleted";
                value?: any;
            } | {
                type: "changed";
                old?: any;
                new?: any;
            } | undefined;
            onUpdate?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
            typeSchema?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            generated?: {
                value: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                type: "added";
            } | {
                value: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                type: "deleted";
            } | {
                type: "changed";
                old: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
                new: {
                    as: string;
                    type?: "stored" | "virtual" | undefined;
                };
            } | undefined;
            identity?: {
                value: string;
                type: "added";
            } | {
                value: string;
                type: "deleted";
            } | {
                type: "changed";
                old: string;
                new: string;
            } | undefined;
            autoincrement?: {
                value: boolean;
                type: "added";
            } | {
                value: boolean;
                type: "deleted";
            } | {
                type: "changed";
                old: boolean;
                new: boolean;
            } | undefined;
        }[];
        addedIndexes: Record<string, string>;
        deletedIndexes: Record<string, string>;
        alteredIndexes: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedForeignKeys: Record<string, string>;
        deletedForeignKeys: Record<string, string>;
        alteredForeignKeys: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCompositePKs: Record<string, string>;
        deletedCompositePKs: Record<string, string>;
        alteredCompositePKs: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedUniqueConstraints: Record<string, string>;
        deletedUniqueConstraints: Record<string, string>;
        alteredUniqueConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedPolicies: Record<string, string>;
        deletedPolicies: Record<string, string>;
        alteredPolicies: Record<string, {
            __old: string;
            __new: string;
        }>;
        addedCheckConstraints: Record<string, string>;
        deletedCheckConstraints: Record<string, string>;
        alteredCheckConstraints: Record<string, {
            __old: string;
            __new: string;
        }>;
    }[];
    alteredEnums: {
        name: string;
        schema: string;
        addedValues: {
            value: string;
            before: string;
        }[];
        deletedValues: string[];
    }[];
    alteredSequences: {
        name: string;
        values: string;
        schema: string;
    }[];
    alteredRoles: {
        name: string;
        createDb?: boolean | undefined;
        createRole?: boolean | undefined;
        inherit?: boolean | undefined;
    }[];
    alteredViews: {
        name: string;
        schema: string;
        deletedWithOption?: {
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
        addedWithOption?: {
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
        alteredSchema?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredTablespace?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredUsing?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredDefinition?: {
            __old: string;
            __new: string;
        } | undefined;
        alteredExisting?: {
            __old: boolean;
            __new: boolean;
        } | undefined;
        deletedWith?: {
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
        addedWith?: {
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
        alteredWith?: {
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
    }[];
}>;
export type Column = TypeOf<typeof columnSchema>;
export type AlteredColumn = TypeOf<typeof alteredColumnSchema>;
export type Enum = TypeOf<typeof enumSchema>;
export type Sequence = TypeOf<typeof sequenceSquashed>;
export type Table = TypeOf<typeof tableScheme>;
export type AlteredTable = TypeOf<typeof alteredTableScheme>;
export type DiffResult = TypeOf<typeof diffResultScheme>;
export interface ResolverInput<T extends {
    name: string;
}> {
    created: T[];
    deleted: T[];
}
export interface ResolverOutput<T extends {
    name: string;
}> {
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
}
export interface ResolverOutputWithMoved<T extends {
    name: string;
}> {
    created: T[];
    moved: {
        name: string;
        schemaFrom: string;
        schemaTo: string;
    }[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
}
export interface ColumnsResolverInput<T extends {
    name: string;
}> {
    tableName: string;
    schema: string;
    created: T[];
    deleted: T[];
}
export interface TablePolicyResolverInput<T extends {
    name: string;
}> {
    tableName: string;
    schema: string;
    created: T[];
    deleted: T[];
}
export interface TablePolicyResolverOutput<T extends {
    name: string;
}> {
    tableName: string;
    schema: string;
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
}
export interface PolicyResolverInput<T extends {
    name: string;
}> {
    created: T[];
    deleted: T[];
}
export interface PolicyResolverOutput<T extends {
    name: string;
}> {
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
}
export interface RolesResolverInput<T extends {
    name: string;
}> {
    created: T[];
    deleted: T[];
}
export interface RolesResolverOutput<T extends {
    name: string;
}> {
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
}
export interface ColumnsResolverOutput<T extends {
    name: string;
}> {
    tableName: string;
    schema: string;
    created: T[];
    renamed: {
        from: T;
        to: T;
    }[];
    deleted: T[];
}
export declare const applyPgSnapshotsDiff: (json1: PgSchemaSquashed, json2: PgSchemaSquashed, schemasResolver: (input: ResolverInput<Named>) => Promise<ResolverOutput<Named>>, enumsResolver: (input: ResolverInput<Enum>) => Promise<ResolverOutputWithMoved<Enum>>, sequencesResolver: (input: ResolverInput<Sequence>) => Promise<ResolverOutputWithMoved<Sequence>>, policyResolver: (input: TablePolicyResolverInput<Policy>) => Promise<TablePolicyResolverOutput<Policy>>, indPolicyResolver: (input: PolicyResolverInput<Policy>) => Promise<PolicyResolverOutput<Policy>>, roleResolver: (input: RolesResolverInput<Role>) => Promise<RolesResolverOutput<Role>>, tablesResolver: (input: ResolverInput<Table>) => Promise<ResolverOutputWithMoved<Table>>, columnsResolver: (input: ColumnsResolverInput<Column>) => Promise<ColumnsResolverOutput<Column>>, viewsResolver: (input: ResolverInput<View>) => Promise<ResolverOutputWithMoved<View>>, curFull: PgSchema, action?: "push" | undefined) => Promise<{
    statements: JsonStatement[];
    sqlStatements: string[];
    _meta: {
        schemas: object;
        tables: object;
        columns: object;
    } | undefined;
}>;
export {};
