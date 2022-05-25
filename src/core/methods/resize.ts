import { IDomElement } from '@core/classes/DomElement';
import { trigger } from '@core/hooks';

export type DomResizeMethod = (callback?: Function) => IDomElement;

export default (function (this: IDomElement, callback?) {
  return trigger.apply(this, ['resize', callback]);
} as DomResizeMethod);
