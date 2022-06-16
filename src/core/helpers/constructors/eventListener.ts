import { validate } from '@src/validator';

import isMatch from '@core/helpers/element/isMatches';

export default (
  el: HTMLElement | Window | Document,
  callback: Function,
  selector?: string,
): EventListener => function (this: HTMLElement, e: Event) {
  if (validate<string>(selector, 'selectorString')) {
    for (
      let target = <HTMLElement>e.target;
      target && target !== this;
      target = <HTMLElement>target.parentNode
    ) {
      if (isMatch(target, selector)) {
        callback.call(target, e);

        break;
      }
    }
  } else {
    callback.call(el, e);
  }
};
