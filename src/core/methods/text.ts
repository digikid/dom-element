import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { validate } from '@src/validator';
import { trimSpaces } from '@utils/string';

export type DomTextMethod = (value?: string) => IDomElement | string | null;

export default (function (this: IDomElement, value?) {
  if (validate<string>(value, 'string')) {
    return this.each((el) => {
      el.textContent = value;
    });
  }

  return reduce.call(this, (el) => trimSpaces(el.textContent || ''));
} as DomTextMethod);
