import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomResolveValues<T> = Record<string, T>;
export type DomResolveGetter<T> = (
  el: HTMLElement,
  name: undefined | string
) => T;
export type DomResolveSetter<T> = (
  el: HTMLElement,
  name: string,
  value: T | undefined
) => void;
export type DomResolveMethod<T> = (
  name?: string | DomResolveValues<T>,
  value?: T
) => DomElement | T;

export default <T>(
  getter: DomResolveGetter<T>,
  setter: DomResolveSetter<T>,
): DomResolveMethod<T> => function (this: IDomElement, name?, value?): DomElement | T {
  const isNameDefined = validate(name);
  const isNameString = validate<string>(name, 'string');
  const isNameObject = validate<DomResolveValues<T>>(name, 'object');
  const isValueDefined = arguments.length === 2;

  if (!isNameDefined || (isNameString && !isValueDefined)) {
    if (this.collection.length) {
      return getter(this.collection[0], name);
    }
  }

  if (isNameObject || (isNameString && isValueDefined)) {
    const values = isNameObject ? name : { [name]: value };

    Object.entries(values).forEach(([name, value]) => {
      this.collection.forEach((el) => setter(el, name, value));
    });
  }

  return new DomElement(this);
};
