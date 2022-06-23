import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { reduce } from '@core/hooks';
import { trimSpaces } from '@core/utils/string';

export type DomTextMethod = (value?: string) => DomElement | string | null;

export default (function (this: IDomElement, value?) {
  if (validate<string>(value, 'string')) {
    this.collection.forEach((el) => {
      el.textContent = value;
    });

    return new DomElement(this);
  }

  return reduce.call(this, (el) => trimSpaces(el.textContent || ''));
} as DomTextMethod);
