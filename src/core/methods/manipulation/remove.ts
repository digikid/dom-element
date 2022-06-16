import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomRemoveMethod = () => IDomElement;

export default (function (this: IDomElement) {
  return this.each((el, i) => {
    const parent = el.parentNode;

    if (validate<HTMLElement>(parent, 'htmlElement')) {
      parent.removeChild(el);

      this.items.splice(i, 1);
    }
  });
} as DomRemoveMethod);
