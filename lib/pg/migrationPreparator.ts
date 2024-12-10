import { PgSchema, PgSchemaInternal } from "./pgSchema";

export const fillPgSnapshot = ({
  serialized,
  id,
  idPrev,
}: {
  serialized: PgSchemaInternal;
  id: string;
  idPrev: string;
}): PgSchema => {
  // const id = randomUUID();
  return { id, prevId: idPrev, ...serialized };
};
