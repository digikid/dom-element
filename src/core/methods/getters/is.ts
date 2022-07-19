import { type IDomElement } from '@core/classes/DomElement';
import { isMatches } from '@core/helpers/element';
import { reduce } from '@core/hooks';

export type IsMethod = (selector: string) => boolean;

export default (function (this: IDomElement, selector) {
  return reduce.call(this, (el) => isMatches(el, selector), false);
} as IsMethod);
