import { type MethodCallback } from '@core/types';
import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { bind } from '@core/helpers/effects';

export type EffectMethod = (
  duration?: number | string | Function,
  callback?: MethodCallback
) => DomElement;

export interface IEffectMethods {
  readonly fadeIn: EffectMethod;
  readonly fadeOut: EffectMethod;
  readonly fadeToggle: EffectMethod;
  readonly slideDown: EffectMethod;
  readonly slideUp: EffectMethod;
  readonly slideToggle: EffectMethod;
}

export default create<EffectMethod, keyof IEffectMethods>(
  {
    fadeIn: [],
    fadeOut: [],
    fadeToggle: [],
    slideDown: [],
    slideUp: [],
    slideToggle: [],
  },
  (name) => function (this: IDomElement, duration?, callback?) {
    this.collection.forEach((el) => bind(el, name, duration, callback));

    return new DomElement(this);
  },
) as IEffectMethods;
