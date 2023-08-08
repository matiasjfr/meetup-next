export interface GetAllResponse<T> {
  results: T[];
  pagination: paginationResponse;
}

export interface paginationResponse {
  isFirstPage?: boolean;
  isLastPage?: boolean;
  currentPage?: number;
  previousPage?: number;
  nextPage?: number;
  pageCount?: number;
  totalCount?: number;
  limit?: number;
}
