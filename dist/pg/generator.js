import { squashPgScheme as p, pgSchema as v } from "./pgSchema.js";
import { generatePgSnapshot as c } from "./pgSerializer.js";
import { EMPTY_RENAMES as e, EMPTY_SQUASHED_SCHEMA as R } from "./global.js";
import { applyPgSnapshotsDiff as S } from "./snapshotsDiffer.js";
import { viewsResolver as u, columnsResolver as f, tablesResolver as h, rolesResolver as g, indPolicyResolver as q, policyResolver as E, sequencesResolver as P, enumsResolver as _, schemasResolver as w } from "./resolvers.js";
async function H(s, r) {
  const i = c(
    s.tables || [],
    s.enums || [],
    s.schemas || [],
    s.sequences || [],
    s.roles || [],
    s.policies || [],
    s.views || [],
    s.materializedViews || [],
    r
  ), { version: y, dialect: M, ...l } = i, o = {
    version: "7",
    dialect: "postgresql",
    id: "0",
    prevId: "0",
    ...l
  }, t = p(o), n = v.parse(o), { sqlStatements: a, statements: m } = await S(
    R,
    t,
    w(e),
    _(e),
    P(e),
    E(e),
    q(e),
    g(e),
    h(e),
    f(e),
    u(e),
    n
  );
  return { sqlStatements: a, statements: m };
}
export {
  H as generateSql
};
