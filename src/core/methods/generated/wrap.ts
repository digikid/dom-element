import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { validate } from '@src/validator';
import { parse } from '@core/helpers/selector';

export type WrapMethod = (htmlString: string) => DomElement;

export type IWrapMethods = {
  readonly wrap: WrapMethod;
  readonly wrapInner: WrapMethod;
};

export default create<WrapMethod, keyof IWrapMethods, [boolean]>(
  {
    wrap: [false],
    wrapInner: [true],
  },
  (name, inner = false) => function (this: IDomElement, htmlString) {
    if (validate<string>(htmlString, 'htmlString')) {
      this.collection.forEach((el) => {
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

    return new DomElement(this);
  },
) as IWrapMethods;
