export default (v: any): boolean => v !== window && v instanceof Node && v.isEqualNode(document.documentElement);
