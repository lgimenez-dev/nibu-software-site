/**
 * Utility function to filter out non-numeric characters from a string.
 * This is used to ensure that only digits are entered in fields like EIN and Phone.
 * @param value - String to filter
 * @returns String with only numeric digits
 * @example
 * filterOnlyNumbers("11-2345-6789") // "112345678"
 * filterOnlyNumbers("abc123def456") // "123456"
 */
export function filterOnlyNumbers(value: string): string {
  return value.replace(/[^0-9]/g, "")
}
