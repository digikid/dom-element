import { IDomElement } from '@core/classes/DomElement';
import { animate } from '@core/hooks';

export type DomFadeToggleMethod = (
  duration?: number | string | Function,
  callback?: Function
) => IDomElement;

export default (function (this: IDomElement, duration?, callback?) {
  return animate.apply(this, ['fadeToggle', duration, callback]);
} as DomFadeToggleMethod);
