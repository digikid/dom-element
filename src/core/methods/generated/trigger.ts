import { DomEventData } from '@core/types';
import { DomElement, IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { validate } from '@src/validator';
import { trigger } from '@core/helpers/events';

export type IDomTriggerMethods = {
  readonly trigger: DomTriggerMethod;
  readonly triggerHandler: DomTriggerMethod;
};

export type DomTriggerMethod = (
  eventName: string,
  eventData?: DomEventData
) => DomElement;

export default create<DomTriggerMethod, keyof IDomTriggerMethods>(
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
) as IDomTriggerMethods;
