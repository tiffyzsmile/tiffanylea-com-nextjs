/**
 * Describes a paged list result from AppSync, which can either
 * live at the top query or property (e.g., related model) level.
 */
export type PagedList<T, TYPENAME> = {
  __typename: TYPENAME;
  nextToken?: string | null | undefined;
  items: Array<T>;
};

/**
 * Recursively looks through a result type and removes nulls and
 * and undefined from `PagedList` types.
 *
 * Although a graphql response might contain empty values in an
 * array, this will only be the case when we also have errors,
 * which will then be *thrown*.
 */
export type WithListsFixed<T> =
  T extends PagedList<infer IT, infer NAME>
    ? PagedList<Exclude<IT, null | undefined>, NAME>
    : T extends {}
      ? {
          [K in keyof T]: WithListsFixed<T[K]>;
        }
      : T;
