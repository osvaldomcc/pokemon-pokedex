export interface IInfiniteQuery<T> {
  pageParam?: number
  queryKey: (string | T)[]
}
