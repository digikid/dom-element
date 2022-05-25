import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomAddClassMethod = (...classNames: string[]) => IDomElement;

export default (function (this: IDomElement, ...classNames) {
  if (classNames.every((className) => validate<string>(className, 'string'))) {
    return this.each((el) => {
      el.classList.add(...classNames);
    });
  }

  return this;
} as DomAddClassMethod);
