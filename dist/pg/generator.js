import { squashPgScheme as p, pgSchema as v } from "./pgSchema.js";
import { generatePgSnapshot as c } from "./pgSerializer.js";
import { EMPTY_RENAMES as e, EMPTY_SQUASHED_SCHEMA as f } from "./global.js";
import { applyPgSnapshotsDiff as R } from "./snapshotsDiffer.js";
import { viewsResolver as S, columnsResolver as u, tablesResolver as h, rolesResolver as g, indPolicyResolver as q, policyResolver as E, sequencesResolver as P, enumsResolver as _, schemasResolver as w } from "./resolvers.js";
import { fromJson as Y } from "./sqlgenerator.js";
async function D(s, r) {
  const t = c(
    s.tables || [],
    s.enums || [],
    s.schemas || [],
    s.sequences || [],
    s.roles || [],
    s.policies || [],
    s.views || [],
    s.materializedViews || [],
    r
  ), { version: y, dialect: M, ...i } = t, o = {
    version: "7",
    dialect: "postgresql",
    id: "0",
    prevId: "0",
    ...i
  }, l = p(o), n = v.parse(o), { sqlStatements: a, statements: m } = await R(
    f,
    l,
    w(e),
    _(e),
    P(e),
    E(e),
    q(e),
    g(e),
    h(e),
    u(e),
    S(e),
    n
  );
  return { sqlStatements: a, statements: m };
}
export {
  Y as fromJson,
  D as generateSql
};
