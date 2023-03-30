export type Nullable<T> = T | null
export type Indexed<T = unknown> = { [key in any]: T }
export type StateField<T> = {
  isLoading: boolean;
  data: T;
  error: Nullable<string>;
}
