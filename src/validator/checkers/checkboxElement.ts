export default (v: any): boolean => v instanceof HTMLInputElement && v.type === 'checkbox';
