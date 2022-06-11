import { IDomElement } from '@core/classes/DomElement';
import { animate } from '@core/hooks';

export type DomSlideDownMethod = (
  duration?: number | string | Function,
  callback?: Function
) => IDomElement;

export default (function (this: IDomElement, duration?, callback?) {
  return animate.apply(this, ['slideDown', duration, callback]);
} as DomSlideDownMethod);
