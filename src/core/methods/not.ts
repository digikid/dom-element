import { IDomElement } from '@core/classes/DomElement';

import { filter } from '@core/hooks';

export type DomNotCallback = (el: HTMLElement, i: number) => boolean;
export type DomNotMethod = (selector: string | DomNotCallback) => IDomElement;

export default (function (this: IDomElement, selector) {
  return filter.call(this, selector, true);
} as DomNotMethod);
