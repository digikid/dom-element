export default (v: any): boolean => v instanceof HTMLSelectElement && v.tagName.toLowerCase() === 'select';
