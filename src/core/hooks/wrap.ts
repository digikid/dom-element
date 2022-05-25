import { IDomElement } from '@core/classes/DomElement';

import { validate } from '@src/validator';
import parse from '@core/hooks/parse';

export type DomWrapHook = (htmlString: string, inner?: boolean) => IDomElement;

export default (function (this: IDomElement, htmlString, inner = false) {
  if (validate<string>(htmlString, 'htmlString')) {
    this.each((el) => {
      const wrapper = parse.call(this, htmlString)[0];

      if (wrapper) {
        if (inner) {
          el.appendChild(wrapper);

          while (el.firstChild && el.firstChild !== wrapper) {
            wrapper.appendChild(el.firstChild);
          }
        } else {
          const parent = el.parentElement;

          if (parent) {
            parent.insertBefore(wrapper, el);
            wrapper.appendChild(el);
          }
        }
      }
    });
  }

  return this;
} as DomWrapHook);
