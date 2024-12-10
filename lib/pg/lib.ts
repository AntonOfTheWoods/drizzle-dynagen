import { enum as enum_ } from "zod";
import camelcase from "camelcase";

export type Named = {
  name: string;
};

export type NamedWithSchema = {
  name: string;
  schema: string;
};

export const BREAKPOINT = "--> statement-breakpoint\n";

export const casingTypes = ["snake_case", "camelCase"] as const;
export const casingType = enum_(casingTypes);
export type CasingType = (typeof casingTypes)[number];

export const withStyle = {
  error: (str: string) => `${`${" Invalid input "} ${str}`}`,
  warning: (str: string) => `${" Warning "} ${str}`,
  errorWarning: (str: string) => `${`${" Warning "} ${str}`}`,
  fullWarning: (str: string) => `${" Warning "} ${str}`,
  suggestion: (str: string) => `${" Suggestion "} ${str}`,
  info: (str: string) => `${str}`,
};

export type IntrospectStatus = "fetching" | "done";
export type IntrospectStage = "tables" | "columns" | "enums" | "indexes" | "policies" | "checks" | "fks" | "views";

// interface RandomUUIDOptions {
//   /**
//    * By default, to improve performance,
//    * Node.js will pre-emptively generate and persistently cache enough
//    * random data to generate up to 128 random UUIDs. To generate a UUID
//    * without using the cache, set `disableEntropyCache` to `true`.
//    *
//    * @default `false`
//    */
//   disableEntropyCache?: boolean | undefined;
// }

// type UUID = `${string}-${string}-${string}-${string}-${string}`;
// export function randomUUID(options?: RandomUUIDOptions): UUID {
//   // return `${string}-${string}-${string}-${string}-${string}`;
//   return "50cd48fa-3a5b-4e28-b09d-fabc4fac3998";
// }

export function camelCase(input: string) {
  return camelcase(String(input));
}

export function snake_case(input: string) {
  return input && input.length > 0
    ? `${input.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)}`
    : String(input);
}
