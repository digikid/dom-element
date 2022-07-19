import { type MethodCallback } from '@core/types';
import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { validate } from '@src/validator';
import { bind, handle } from '@core/helpers/events';

export type EventMethod = (callback?: MethodCallback) => DomElement;

export interface IEventMethods {
  readonly blur: EventMethod;
  readonly change: EventMethod;
  readonly click: EventMethod;
  readonly contextmenu: EventMethod;
  readonly dblclick: EventMethod;
  readonly focus: EventMethod;
  readonly focusin: EventMethod;
  readonly focusout: EventMethod;
  readonly hover: EventMethod;
  readonly input: EventMethod;
  readonly keydown: EventMethod;
  readonly keypress: EventMethod;
  readonly keyup: EventMethod;
  readonly mousedown: EventMethod;
  readonly mouseenter: EventMethod;
  readonly mouseleave: EventMethod;
  readonly mousemove: EventMethod;
  readonly mouseout: EventMethod;
  readonly mouseover: EventMethod;
  readonly mouseup: EventMethod;
  readonly select: EventMethod;
  readonly resize: EventMethod;
  readonly scroll: EventMethod;
  readonly submit: EventMethod;
}

export default create<EventMethod, keyof IEventMethods>(
  {
    blur: [],
    change: [],
    click: [],
    contextmenu: [],
    dblclick: [],
    focus: [],
    focusin: [],
    focusout: [],
    hover: [],
    input: [],
    keydown: [],
    keypress: [],
    keyup: [],
    mousedown: [],
    mouseenter: [],
    mouseleave: [],
    mousemove: [],
    mouseout: [],
    mouseover: [],
    mouseup: [],
    select: [],
    resize: [],
    scroll: [],
    submit: [],
  },
  (event) => function (this: IDomElement, callback?) {
    if (validate(event, 'windowEvent')) {
      handle(window, event, callback);
    } else if (
      !this.length
        && validate<string>(this.selector, 'selectorString')
        && validate<MethodCallback>(callback, 'function')
    ) {
      bind(document, event, callback, this.selector);
    } else {
      this.collection.forEach((el) => handle(el, event, callback));
    }

    return new DomElement(this);
  },
) as IEventMethods;
