import { JsonStatement } from './jsonStatements';
import { CommonSquashedSchema, Dialect } from './schemaValidator';
export declare function fromJson(statements: JsonStatement[], dialect: Dialect, action?: "push", json2?: CommonSquashedSchema): string[];
