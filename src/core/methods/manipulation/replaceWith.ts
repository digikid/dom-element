import { IDomElement, DomSelector } from '@core/classes/DomElement';
import { parse } from '@core/helpers/selector';

export type DomReplaceWithMethod = (content: DomSelector) => IDomElement;

export default (function (this: IDomElement, content) {
  return this.each((el) => {
    const replace = parse(content);

    el.replaceWith(...replace);
  });
} as DomReplaceWithMethod);
