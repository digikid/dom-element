import { DomCallback } from '@core/types';
import { DomElement, IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { validate } from '@src/validator';
import { handle } from '@core/helpers/events';

export interface IDomEventMethods {
  readonly blur: DomEventMethod;
  readonly change: DomEventMethod;
  readonly click: DomEventMethod;
  readonly contextmenu: DomEventMethod;
  readonly dblclick: DomEventMethod;
  readonly focus: DomEventMethod;
  readonly focusin: DomEventMethod;
  readonly focusout: DomEventMethod;
  readonly hover: DomEventMethod;
  readonly input: DomEventMethod;
  readonly keydown: DomEventMethod;
  readonly keypress: DomEventMethod;
  readonly keyup: DomEventMethod;
  readonly mousedown: DomEventMethod;
  readonly mouseenter: DomEventMethod;
  readonly mouseleave: DomEventMethod;
  readonly mousemove: DomEventMethod;
  readonly mouseout: DomEventMethod;
  readonly mouseover: DomEventMethod;
  readonly mouseup: DomEventMethod;
  readonly select: DomEventMethod;
  readonly resize: DomEventMethod;
  readonly scroll: DomEventMethod;
  readonly submit: DomEventMethod;
}

export type DomEventMethod = (callback?: DomCallback) => DomElement;

export default create<DomEventMethod, keyof IDomEventMethods>(
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
  (name) => function (this: IDomElement, callback?) {
    if (validate(name, 'windowEvent')) {
      handle(window, name, callback);
    } else {
      this.collection.forEach((el) => handle(el, name, callback));
    }

    return new DomElement(this);
  },
) as IDomEventMethods;
