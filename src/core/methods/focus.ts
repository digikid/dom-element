import { IDomElement } from '@core/classes/DomElement';
import { trigger } from '@core/hooks';

export type DomFocusMethod = (callback?: Function) => IDomElement;

export default (function (this: IDomElement, callback?) {
  return trigger.apply(this, ['focus', callback]);
} as DomFocusMethod);
