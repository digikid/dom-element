export default (v: any): boolean => Array.isArray(v) && v.every((el) => el instanceof HTMLElement);
