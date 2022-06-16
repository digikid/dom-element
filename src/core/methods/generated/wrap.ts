import { createMethods } from '@core/helpers/constructors';
import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { parse } from '@core/helpers/selector';

export type IDomWrapMethods = {
  readonly wrap: DomWrapMethod;
  readonly wrapInner: DomWrapMethod;
};

export type DomWrapMethod = (htmlString: string) => IDomElement;

export default createMethods<DomWrapMethod, keyof IDomWrapMethods>(
  {
    wrap: [],
    wrapInner: [true],
  },
  (name, inner = false) => function (this: IDomElement, htmlString) {
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
  },
) as IDomWrapMethods;
