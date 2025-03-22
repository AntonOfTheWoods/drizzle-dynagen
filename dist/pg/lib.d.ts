export type Named = {
    name: string;
};
export type NamedWithSchema = {
    name: string;
    schema: string;
};
export declare const BREAKPOINT = "--> statement-breakpoint\n";
export declare const casingTypes: readonly ["snake_case", "camelCase"];
export declare const casingType: import('zod').ZodEnum<["snake_case", "camelCase"]>;
export type CasingType = (typeof casingTypes)[number];
export declare const withStyle: {
    error: (str: string) => string;
    warning: (str: string) => string;
    errorWarning: (str: string) => string;
    fullWarning: (str: string) => string;
    suggestion: (str: string) => string;
    info: (str: string) => string;
};
export type IntrospectStatus = "fetching" | "done";
export type IntrospectStage = "tables" | "columns" | "enums" | "indexes" | "policies" | "checks" | "fks" | "views";
export declare function camelCase(input: string): string;
export declare function snake_case(input: string): string;
