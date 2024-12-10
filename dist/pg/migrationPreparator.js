const n = ({
  serialized: r,
  id: t,
  idPrev: e
}) => ({ id: t, prevId: e, ...r });
export {
  n as fillPgSnapshot
};
