import { DomElement, IDomElement } from '@core/classes/DomElement';
import { parse } from '@core/helpers/selector';

export type ReplaceWithMethod = (content: any) => DomElement;

export default (function (this: IDomElement, content) {
  const parsed = parse(content);

  this.collection.forEach((el) => {
    el.replaceWith(...parsed);
  });

  return new DomElement(parsed);
} as ReplaceWithMethod);
