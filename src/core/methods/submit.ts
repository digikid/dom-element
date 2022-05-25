import { IDomElement } from '@core/classes/DomElement';
import { trigger } from '@core/hooks';

export type DomSubmitMethod = (callback?: Function) => IDomElement;

export default (function (this: IDomElement, callback?) {
  return trigger.apply(this, ['submit', callback]);
} as DomSubmitMethod);
