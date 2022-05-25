export default (v: any): boolean => v instanceof HTMLDocument
  && Object.prototype.toString.call(v) === '[object HTMLDocument]';
