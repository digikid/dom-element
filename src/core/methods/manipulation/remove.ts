import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type RemoveMethod = () => DomElement;

export default (function (this: IDomElement) {
  this.collection.forEach((el, i) => {
    const parent = el.parentNode;

    if (validate<HTMLElement>(parent, 'htmlElement')) {
      parent.removeChild(el);

      this.collection.splice(i, 1);
    }
  });

  return new DomElement(this);
} as RemoveMethod);
