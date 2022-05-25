import { IDomElement } from '@core/classes/DomElement';
import { some, validate } from '@src/validator';
import { store } from '@src/store';

import match from '@core/hooks/match';
import parse from '@core/hooks/parse';

export type DomAttachHook = (
  name: string,
  callback: Function,
  selector?: string
) => IDomElement;

export default (function (this: IDomElement, name, callback, selector?) {
  if (
    some<Window | Document>(this.selector, 'window', 'document')
    && !validate(selector)
  ) {
    const el = this.selector;
    const id = validate<Window>(this.selector, 'window')
      ? 'window'
      : 'document';

    const listener: EventListener = function (this: HTMLElement, e: Event) {
      callback.call(el, e);
    };

    this.selector.addEventListener(name, listener);

    store.setListener(id, name, listener);

    return this;
  }

  if (
    validate<string>(name, 'string', 'truthy')
    && validate<Function>(callback, 'function')
  ) {
    return this.each((el) => {
      if (validate<string>(selector, 'selectorString')) {
        const listener: EventListener = function (this: HTMLElement, e: Event) {
          for (
            let target = <HTMLElement>e.target;
            target && target !== this;
            target = <HTMLElement>target.parentNode
          ) {
            if (match(target, selector)) {
              callback.call(target, e);

              break;
            }
          }
        };

        document.addEventListener(name, listener, false);

        parse(selector).forEach((el) => store.delegateListener(el, name, listener));
      } else {
        const listener: EventListener = function (this: HTMLElement, e: Event) {
          callback.call(el, e);
        };

        el.addEventListener(name, listener, false);

        store.setListener(el, name, listener);
      }
    });
  }

  return this;
} as DomAttachHook);
