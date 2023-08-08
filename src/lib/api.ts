export const getPaginationAPI = (limit: string | null, page: string | null) => {
  const saninitizedLimit = limit && Number(limit) <= 100 ? Number(limit) : 10;
  const saninitizedPage = page ? Number(page) : 1;
  return [saninitizedLimit, saninitizedPage];
};
