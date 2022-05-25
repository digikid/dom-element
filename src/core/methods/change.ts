import { IDomElement } from '@core/classes/DomElement';
import { trigger } from '@core/hooks';

export type DomChangeMethod = (callback?: Function) => IDomElement;

export default (function (this: IDomElement, callback?) {
  return trigger.apply(this, ['change', callback]);
} as DomChangeMethod);
