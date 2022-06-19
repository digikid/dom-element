export default (v: any): boolean => v !== window && v.isEqualNode(document.documentElement);
