import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { map } from '@core/hooks';

export type EqMethod = (index: number) => DomElement;

export default (function (this: IDomElement, index) {
  return map.call(this, () => {
    if (validate<number>(index, 'number')) {
      const el = this.collection.at(index);

      return el ? [el] : [];
    }

    return [];
  });
} as EqMethod);
