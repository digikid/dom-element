import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type ToggleClassMethod = (className: string) => DomElement;

export default (function (this: IDomElement, className) {
  if (validate<string>(className, 'string', 'truthy')) {
    this.collection.forEach((el) => {
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

  return new DomElement(this);
} as ToggleClassMethod);
