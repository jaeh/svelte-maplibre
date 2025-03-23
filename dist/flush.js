/**
 * Removes all undefined values from an object
 * @param obj The object to flush undefined values from
 * @returns A new object with the same shape but without undefined values
 */
export function flush(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value != null));
}
