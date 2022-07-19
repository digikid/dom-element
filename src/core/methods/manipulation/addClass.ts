import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type AddClassMethod = (...classNames: string[]) => DomElement;

export default (function (this: IDomElement, ...classNames) {
  if (classNames.every((className) => validate<string>(className, 'string'))) {
    this.collection.forEach((el) => {
      el.classList.add(...classNames);
    });
  }

  return new DomElement(this);
} as AddClassMethod);
