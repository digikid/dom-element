import { IDomElement } from '@core/classes/DomElement';

import { filter } from '@core/hooks';

export type DomFilterCallback = (el: HTMLElement, i: number) => boolean;

export type DomFilterMethod = (
  selector: string | DomFilterCallback
) => IDomElement;

export default (function (this: IDomElement, selector) {
  return filter.call(this, selector);
} as DomFilterMethod);
