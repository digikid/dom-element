export const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const toDashCase = (str: string): string => str.replace(
  /[A-Z]/g,
  (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase(),
);

export const toCamelCase = (str: string): string => str.replace(/-./g, (m) => m[1].toUpperCase());

export const fromCamelCaseToArray = (str: string): string[] => str.split(/(?=[A-Z])/).map((str) => str.toLowerCase());

export const trimSpaces = (str: string): string => str.replace(/[\n\r]+|\s{2,}/g, ' ').trim();

export const parseToCssObject = (
  str: string | null,
): Record<string, string> => {
  if (!str || !str.includes(': ')) {
    return {};
  }

  return str.split('; ').reduce((acc, rule) => {
    const [prop, value] = rule.split(': ');

    (acc as any)[toCamelCase(prop)] = value.replace(/;/, '');

    return acc;
  }, {});
};

export const toNumber = (str: string, units = ['px'], ifNaN = 0): number => {
  const value = units.reduce((acc, unit) => acc.replace(unit, ''), str);

  return Number.isNaN(+value) ? ifNaN : +value;
};
