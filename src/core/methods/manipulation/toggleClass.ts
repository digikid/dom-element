import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomToggleClassMethod = (className: string) => IDomElement;

export default (function (this: IDomElement, className) {
  if (validate<string>(className, 'string', 'truthy')) {
    return this.each((el) => {
      const classes = className.split(' ');

      classes.forEach((className) => {
        if (el.classList.contains(className)) {
          el.classList.remove(className);
        } else {
          el.classList.add(className);
        }
      });
    });
  }

  return this;
} as DomToggleClassMethod);
