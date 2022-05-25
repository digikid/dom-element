import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomOuterHtmlMethod = (
  value?: string
) => IDomElement | string | null;

export default (function (this: IDomElement, value?) {
  const args = [];

  if (validate<string>(value)) {
    args.push(value);
  }

  return this.html(...args, true);
} as DomOuterHtmlMethod);
