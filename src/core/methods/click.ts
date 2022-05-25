import { IDomElement } from '@core/classes/DomElement';
import { trigger } from '@core/hooks';

export type DomClickMethod = (callback?: Function) => IDomElement;

export default (function (this: IDomElement, callback?) {
  return trigger.apply(this, ['click', callback]);
} as DomClickMethod);
