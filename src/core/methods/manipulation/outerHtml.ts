import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { parse } from '@core/helpers/selector';
import { reduce } from '@core/hooks';

export type DomOuterHtmlMethod = (value?: string) => DomElement | string | null;

export default (function (this: IDomElement, value?) {
  if (validate<string>(value, 'string')) {
    const parsed = parse(value);

    this.collection.forEach((el) => el.replaceWith(...parsed));

    return new DomElement(parsed);
  }

  return reduce.call(this, (el) => el.outerHTML);
} as DomOuterHtmlMethod);
