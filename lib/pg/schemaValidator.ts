import { enum as enumType, TypeOf } from "zod";
import { pgSchema, pgSchemaSquashed } from "./pgSchema";

export const dialects = ["postgresql"] as const;
export const dialect = enumType(dialects);

export type Dialect = (typeof dialects)[number];
// const _: Dialect = '' as TypeOf<typeof dialect>

// const commonSquashedSchema = pgSchemaSquashed
// const commonSchema = pgSchema

export type CommonSquashedSchema = TypeOf<typeof pgSchemaSquashed>;
export type CommonSchema = TypeOf<typeof pgSchema>;
