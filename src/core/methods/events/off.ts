import { IDomElement } from '@core/classes/DomElement';
import { some, validate } from '@src/validator';
import { unbind } from '@core/helpers/events';

export type DomOffMethod = (eventName: string) => IDomElement;

export default (function (this: IDomElement, eventName) {
  if (validate<string>(eventName, 'string', 'truthy')) {
    if (some<Window>(this.selector, 'window', 'document')) {
      unbind(this.selector, eventName);

      return this;
    }

    return this.each((el) => unbind(el, eventName));
  }

  return this;
} as DomOffMethod);
