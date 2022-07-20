import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type RemoveClassMethod = (...classNames: string[]) => DomElement;

export default (function (this: IDomElement, ...classNames) {
  const classes = classNames.reduce(
    (acc, className) => (validate<string>(className, 'string', 'truthy')
      ? [...acc, ...className.split(' ')]
      : acc),
    [] as string[],
  );

  this.collection.forEach((el) => {
    el.classList.remove(...classes);
  });

  return new DomElement(this);
} as RemoveClassMethod);
