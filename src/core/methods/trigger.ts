import { IDomElement } from '@core/classes/DomElement';
import { trigger } from '@core/hooks';
import { validate } from '@src/validator';

export type DomTriggerMethod = (
  eventName: string,
  eventData?: any
) => IDomElement;

export default (function (this: IDomElement, eventName, eventData?) {
  if (validate<string>(eventName, 'string', 'truthy')) {
    return trigger.apply(this, [eventName, undefined, eventData]);
  }

  return this;
} as DomTriggerMethod);
