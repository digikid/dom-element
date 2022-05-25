import { IDomElement } from '@core/classes/DomElement';
import { wrap } from '@core/hooks';

export type DomWrapInnerMethod = (htmlString: string) => IDomElement;

export default (function (this: IDomElement, htmlString) {
  return wrap.call(this, htmlString, true);
} as DomWrapInnerMethod);
