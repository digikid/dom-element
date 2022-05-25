import { IDomElement } from '@core/classes/DomElement';
import { match, reduce } from '@core/hooks';

export type DomIsMethod = (selector: string) => boolean;

export default (function (this: IDomElement, selector) {
  return reduce.call(this, (el) => match(el, selector), false);
} as DomIsMethod);
