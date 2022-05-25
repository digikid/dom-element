import { IDomElement } from '@core/classes/DomElement';
import { trigger } from '@core/hooks';

export type DomBlurMethod = (callback?: Function) => IDomElement;

export default (function (this: IDomElement, callback?) {
  return trigger.apply(this, ['blur', callback]);
} as DomBlurMethod);
