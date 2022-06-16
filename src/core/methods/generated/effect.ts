import { createMethods } from '@core/helpers/constructors';
import { IDomElement } from '@core/classes/DomElement';
import { bind } from '@core/helpers/effects';

export interface IDomEffectMethods {
  readonly fadeIn: DomEffectMethod;
  readonly fadeOut: DomEffectMethod;
  readonly fadeToggle: DomEffectMethod;
  readonly slideDown: DomEffectMethod;
  readonly slideUp: DomEffectMethod;
  readonly slideToggle: DomEffectMethod;
}

export type DomEffectMethod = (
  duration?: number | string | Function,
  callback?: Function
) => IDomElement;

export default createMethods<DomEffectMethod, keyof IDomEffectMethods>(
  {
    fadeIn: [],
    fadeOut: [],
    fadeToggle: [],
    slideDown: [],
    slideUp: [],
    slideToggle: [],
  },
  (name) => function (this: IDomElement, duration?, callback?) {
    return this.each((el) => bind(el, name, duration, callback));
  },
) as IDomEffectMethods;
