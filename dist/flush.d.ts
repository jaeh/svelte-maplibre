/**
 * Removes all undefined values from an object
 * @param obj The object to flush undefined values from
 * @returns A new object with the same shape but without undefined values
 */
export declare function flush<T extends Record<string, unknown>>(
  obj: T
): {
  [K in keyof T]: Exclude<T[K], null | undefined>;
};
