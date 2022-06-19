// noinspection SpellCheckingInspection

import { IDomElement } from '@core/classes/DomElement';
import { createMethods } from '@core/helpers/constructors';
import { validate } from '@src/validator';
import { parse } from '@core/helpers/selector';

const positions = ['prepend', 'append', 'before', 'after'] as const;

export interface IDomMoveMethods {
  readonly after: DomMoveMethod;
  readonly append: DomMoveMethod;
  readonly appendTo: DomMoveMethod;
  readonly before: DomMoveMethod;
  readonly insertAfter: DomMoveMethod;
  readonly insertBefore: DomMoveMethod;
  readonly prepend: DomMoveMethod;
  readonly prependTo: DomMoveMethod;
}

export type DomMoveMethod = (selector: any) => IDomElement;

export default createMethods<DomMoveMethod, keyof IDomMoveMethods>(
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
      const parents = inverse ? parsed : this.items;

      let children = inverse ? this.items : parsed;

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

    return this;
  },
) as IDomMoveMethods;
