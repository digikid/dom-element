import { createMethods } from '@core/helpers/constructors';
import { IDomElement } from '@core/classes/DomElement';
import { some } from '@src/validator';
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

export type DomEventMethod = (callback?: Function) => IDomElement;

export default createMethods<DomEventMethod, keyof IDomEventMethods>(
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
    if (some<Window | Document>(this.selector, 'window', 'document')) {
      handle(this.selector, name, callback);

      return this;
    }

    return this.each((el) => handle(el, name, callback));
  },
) as IDomEventMethods;
