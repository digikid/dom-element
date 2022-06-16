export default (str: string): string => str.replace(
  /[A-Z]/g,
  (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase(),
);

declare global {
  function toDashCase(str: string): string;
}
