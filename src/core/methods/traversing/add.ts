import { DomElement, IDomElement } from '@core/classes/DomElement';
import { parse } from '@core/helpers/selector';
import { validate } from '@src/validator';
import { map } from '@core/hooks';

export type AddMethod = (selector: any) => DomElement;

export default (function (this: IDomElement, selector) {
  return map.call(this, () => {
    if (validate(selector)) {
      return [...this.collection, ...parse(selector)];
    }

    return this;
  });
} as AddMethod);
