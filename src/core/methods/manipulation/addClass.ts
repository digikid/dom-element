import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type AddClassMethod = (...classNames: string[]) => DomElement;

export default (function (this: IDomElement, ...classNames) {
  const classes = classNames.reduce(
    (acc, className) => (validate<string>(className, 'string', 'truthy')
      ? [...acc, ...className.split(' ')]
      : acc),
    [] as string[],
  );

  this.collection.forEach((el) => {
    classes.forEach((className) => el.classList.add(className));
  });

  return new DomElement(this);
} as AddClassMethod);
