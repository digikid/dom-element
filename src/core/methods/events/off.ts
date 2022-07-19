import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { unbind } from '@core/helpers/events';

export type OffMethod = (eventName: string) => DomElement;

export default (function (this: IDomElement, eventName) {
  if (validate<string>(eventName, 'string', 'truthy')) {
    if (validate(eventName, 'windowEvent')) {
      unbind(window, eventName);
    } else {
      this.collection.forEach((el) => unbind(el, eventName));
    }
  }

  return new DomElement(this);
} as OffMethod);
