import { validate } from '@src/validator';

export const isObject = (v: any) => validate<Object>(v, 'object');

export const cloneDeep = (obj: Object): Object => JSON.parse(JSON.stringify(obj));

export type PlainObject = Record<string, any>;
export type ObjectOrArray = PlainObject | [];

/* eslint-disable */
export const mergeDeep = (...objs: PlainObject[]): PlainObject => {
  let options: PlainObject;
  let src: PlainObject;
  let target: PlainObject = objs[0] || {};
  let clone: ObjectOrArray;
  let copy: ObjectOrArray;
  let copyIsArray = false;
  let name;
  let i = 1;

  const { length } = objs;
  const deep = true;

  if (typeof target !== "object" && typeof target !== "function") {
    target = {};
  }

  if (i === length) {
    i--;
  }

  for (; i < length; i++) {
    if ((options = objs[i]) != null) {
      for (name in options) {
        copy = (options as any)[name];

        if (name === "__proto__" || target === copy) {
          continue;
        }
        if (
          deep &&
          copy &&
          (isObject(copy) || (copyIsArray = Array.isArray(copy)))
        ) {
          src = (target as any)[name];

          if (copyIsArray && !Array.isArray(src)) {
            clone = [];
          } else if (!copyIsArray && !isObject(src)) {
            clone = {};
          } else {
            clone = src;
          }
          copyIsArray = false;

          (target as any)[name] = mergeDeep(clone, copy);
        } else if (copy !== undefined) {
          (target as any)[name] = copy;
        }
      }
    }
  }
  return target;
};
/* eslint-enable */
