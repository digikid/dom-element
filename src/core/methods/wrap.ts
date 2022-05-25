import { IDomElement } from '@core/classes/DomElement';
import { wrap } from '@core/hooks';

export type DomWrapMethod = (htmlString: string) => IDomElement;

export default (function (this: IDomElement, htmlString) {
  return wrap.call(this, htmlString);
} as DomWrapMethod);
