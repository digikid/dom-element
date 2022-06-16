import { createMethods } from '@core/helpers/constructors';
import { IDomElement } from '@core/classes/DomElement';
import { DomEventData } from '@core/types';
import { some, validate } from '@src/validator';
import { trigger } from '@core/helpers/events';

export type IDomTriggerMethods = {
  readonly trigger: DomTriggerMethod;
  readonly triggerHandler: DomTriggerMethod;
};

export type DomTriggerMethod = (
  eventName: string,
  eventData?: DomEventData
) => IDomElement;

export default createMethods<DomTriggerMethod, keyof IDomTriggerMethods>(
  {
    trigger: [],
    triggerHandler: [true],
  },
  (name, onlyHandlers = false) => function (this: IDomElement, eventName, eventData?) {
    if (validate<string>(eventName, 'string', 'truthy')) {
      if (some<Window | Document>(this.selector, 'window', 'document')) {
        trigger(this.selector, eventName, eventData, onlyHandlers);

        return this;
      }

      return this.each((el) => trigger(el, eventName, eventData, onlyHandlers));
    }

    return this;
  },
) as IDomTriggerMethods;
