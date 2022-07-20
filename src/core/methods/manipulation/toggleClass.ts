import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type ToggleClassMethod = (classNames: string) => DomElement;

export default (function (this: IDomElement, classNames) {
  if (validate<string>(classNames, 'string', 'truthy')) {
    this.collection.forEach((el) => {
      const classes = classNames.split(' ');

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
