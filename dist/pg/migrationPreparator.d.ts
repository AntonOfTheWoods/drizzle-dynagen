import { PgSchema, PgSchemaInternal } from './pgSchema';
export declare const fillPgSnapshot: ({ serialized, id, idPrev, }: {
    serialized: PgSchemaInternal;
    id: string;
    idPrev: string;
}) => PgSchema;
