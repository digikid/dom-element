export default (str: string): string => str.replace(
  /[A-Z]/g,
  (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase(),
);
