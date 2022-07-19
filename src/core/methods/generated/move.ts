// noinspection SpellCheckingInspection

import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { create } from '@core/helpers/methods';
import { validate } from '@src/validator';
import { parse } from '@core/helpers/selector';

const positions = ['prepend', 'append', 'before', 'after'] as const;

export type MoveMethod = (selector: any) => DomElement;

export interface IMoveMethods {
  readonly after: MoveMethod;
  readonly append: MoveMethod;
  readonly appendTo: MoveMethod;
  readonly before: MoveMethod;
  readonly insertAfter: MoveMethod;
  readonly insertBefore: MoveMethod;
  readonly prepend: MoveMethod;
  readonly prependTo: MoveMethod;
}

export default create<MoveMethod, keyof IMoveMethods>(
  {
    after: ['after'],
    append: ['append'],
    appendTo: ['append', true],
    before: ['before'],
    insertAfter: ['after', true],
    insertBefore: ['before', true],
    prepend: ['prepend'],
    prependTo: ['prepend', true],
  },
  (name, position: typeof positions[number], inverse = false) => function (this: IDomElement, selector) {
    if (
      validate<string>(position, 'string', 'truthy')
        && positions.includes(position)
    ) {
      const reversed = ['prepend', 'after'].includes(position);

      const parsed = parse(selector);
      const parents = inverse ? parsed : this.collection;

      let children = inverse ? this.collection : parsed;

      parents.forEach((parent, i) => {
        if (parents.length !== children.length && i) {
          children = children.map((el) => el.cloneNode(true)) as HTMLElement[];
        }

        (children as HTMLElement[]).forEach((el, i) => {
          const child = reversed ? children[children.length - i - 1] : el;

          switch (position) {
            case 'prepend':
              parent.insertBefore(child, parent.firstChild);
              break;
            case 'append':
              parent.appendChild(child);
              break;
            case 'before':
              parent.insertAdjacentElement('beforebegin', child);
              break;
            case 'after':
              parent.insertAdjacentElement('afterend', child);
              break;
            default:
          }
        });
      });
    }

    return new DomElement(this);
  },
) as IMoveMethods;
