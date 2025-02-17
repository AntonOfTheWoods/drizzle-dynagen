import { TypeOf } from 'zod';
import { pgSchema, pgSchemaSquashed } from './pgSchema';
export declare const dialects: readonly ["postgresql"];
export declare const dialect: import('zod').ZodEnum<["postgresql"]>;
export type Dialect = (typeof dialects)[number];
export type CommonSquashedSchema = TypeOf<typeof pgSchemaSquashed>;
export type CommonSchema = TypeOf<typeof pgSchema>;
