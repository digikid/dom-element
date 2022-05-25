import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { reduce } from '@src/core/hooks';

export type DomHasClassMethod = (className: string) => boolean;

export default (function (this: IDomElement, className) {
  if (validate<string>(className, 'string', 'truthy')) {
    return reduce.call(this, (el) => el.classList.contains(className));
  }

  return this;
} as DomHasClassMethod);
