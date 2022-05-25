import { IDomElement } from '@core/classes/DomElement';
import { trigger } from '@core/hooks';

export type DomScrollMethod = (callback?: Function) => IDomElement;

export default (function (this: IDomElement, callback?) {
  return trigger.apply(this, ['scroll', callback]);
} as DomScrollMethod);
