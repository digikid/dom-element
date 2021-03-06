export default (str: string, units = ['px']): number | null => {
  const value = units.reduce((acc, unit) => acc.replace(unit, ''), str);

  return Number.isNaN(+value) ? null : +value;
};

declare global {
  function toNumber(str: string, units?: string[]): number | null;
}
