import { type CustomEventData } from '@core/types';
import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { validate } from '@src/validator';
import { trigger } from '@core/helpers/events';

export type TriggerMethod = (
  eventName: string,
  eventData?: CustomEventData
) => DomElement;

export type ITriggerMethods = {
  readonly trigger: TriggerMethod;
  readonly triggerHandler: TriggerMethod;
};

export default create<TriggerMethod, keyof ITriggerMethods>(
  {
    trigger: [],
    triggerHandler: [true],
  },
  (name, onlyHandlers = false) => function (this: IDomElement, eventName, eventData?) {
    if (validate<string>(eventName, 'string', 'truthy')) {
      if (validate(eventName, 'windowEvent')) {
        trigger(window, eventName, eventData, onlyHandlers);
      } else {
        this.collection.forEach((el) => trigger(el, eventName, eventData, onlyHandlers));
      }
    }

    return new DomElement(this);
  },
) as ITriggerMethods;
