export default (v: any): boolean => !!v && typeof v === 'object' && v.constructor === Object;
