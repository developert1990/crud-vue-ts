export const truncateString = (str: string, n: number): string => {
  return str.length > n ? str.slice(0, n) + "..." : str;
};
