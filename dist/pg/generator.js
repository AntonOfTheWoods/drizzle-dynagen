import { squashPgScheme as p, pgSchema as v } from "./pgSchema.js";
import { generatePgSnapshot as c } from "./pgSerializer.js";
import { EMPTY_RENAMES as e, EMPTY_SQUASHED_SCHEMA as R } from "./global.js";
import { applyPgSnapshotsDiff as S } from "./snapshotsDiffer.js";
import { viewsResolver as h, columnsResolver as u, tablesResolver as f, rolesResolver as g, indPolicyResolver as q, policyResolver as E, sequencesResolver as P, enumsResolver as y, schemasResolver as _ } from "./resolvers.js";
async function H(s, l) {
  const o = c(
    s.tables || [],
    s.enums || [],
    s.schemas || [],
    s.sequences || [],
    s.roles || [],
    s.policies || [],
    s.views || [],
    s.materializedViews || [],
    l
  ), { version: w, dialect: M, ...n } = o;
  console.log("my snapshot ser2", o);
  const r = {
    version: "7",
    dialect: "postgresql",
    id: "0",
    prevId: "0",
    ...n
  }, t = p(r), i = v.parse(r), { sqlStatements: a, statements: m } = await S(
    R,
    t,
    _(e),
    y(e),
    P(e),
    E(e),
    q(e),
    g(e),
    f(e),
    u(e),
    h(e),
    i
  );
  return { sqlStatements: a, statements: m };
}
export {
  H as generateSql
};
