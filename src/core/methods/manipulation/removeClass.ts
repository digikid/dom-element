import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type RemoveClassMethod = (...classNames: string[]) => DomElement;

export default (function (this: IDomElement, ...classNames) {
  if (classNames.every((className) => validate<string>(className, 'string'))) {
    this.collection.forEach((el) => {
      el.classList.remove(...classNames);
    });
  }

  return new DomElement(this);
} as RemoveClassMethod);
