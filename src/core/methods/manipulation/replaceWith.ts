import { IDomElement } from '@core/classes/DomElement';
import { parse } from '@core/helpers/selector';

export type DomReplaceWithMethod = (content: any) => IDomElement;

export default (function (this: IDomElement, content) {
  const parsed = parse(content);

  this.each((el) => {
    el.replaceWith(...parsed);
  });

  this.items = parsed;

  return this;
} as DomReplaceWithMethod);
