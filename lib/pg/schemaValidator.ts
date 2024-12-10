import { enum as enumType, TypeOf } from "zod";
import { pgSchema, pgSchemaSquashed } from "./pgSchema";

export const dialects = ["postgresql"] as const;
export const dialect = enumType(dialects);

export type Dialect = (typeof dialects)[number];

export type CommonSquashedSchema = TypeOf<typeof pgSchemaSquashed>;
export type CommonSchema = TypeOf<typeof pgSchema>;
