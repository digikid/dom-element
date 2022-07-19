import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type ResolveValues<T> = Record<string, T>;
export type ResolveGetter<T> = (el: HTMLElement, name: undefined | string) => T;
export type ResolveSetter<T> = (
  el: HTMLElement,
  name: string,
  value: T | undefined
) => void;
export type ResolveMethod<T> = (
  name?: string | ResolveValues<T>,
  value?: T
) => DomElement | T;

export default <T>(
  getter: ResolveGetter<T>,
  setter: ResolveSetter<T>,
): ResolveMethod<T> => function (this: IDomElement, name?, value?): DomElement | T {
  const isNameDefined = validate(name);
  const isNameString = validate<string>(name, 'string');
  const isNameObject = validate<ResolveValues<T>>(name, 'object');
  const isValueDefined = arguments.length === 2;

  if (!isNameDefined || (isNameString && !isValueDefined)) {
    if (this.length) {
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
