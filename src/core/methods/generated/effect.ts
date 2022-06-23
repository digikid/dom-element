import { DomCallback } from '@core/types';
import { DomElement, IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
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
  callback?: DomCallback
) => DomElement;

export default create<DomEffectMethod, keyof IDomEffectMethods>(
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
) as IDomEffectMethods;
