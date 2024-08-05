/**
 * Checks if a given string value representing a number starts with "0".
 *
 * @param {string} value - The string value to check. Expected to represent a number.
 * @returns {boolean} True if the value does not start with "0", false otherwise. Special handling for values like "00" or "000" where the leading zeros are considered significant.
 * @example
 * startsWithZero("123") // Returns true
 * startsWithZero("0123") // Returns false
 * startsWithZero("00123") // Returns false due to leading zero(s)
 */
export const startsWithZero = (value: string) =>
  value[0] !== "0" || (value[0] === "0" && isNaN(Number(value)));
