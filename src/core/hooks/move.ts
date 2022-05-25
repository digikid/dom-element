import { IDomElement, DomSelector } from '@core/classes/DomElement';
import { validate } from '@src/validator';

import parse from '@core/hooks/parse';

const positions = ['prepend', 'append', 'before', 'after'] as const;

export type DomMovePosition = typeof positions[number];
export type DomMoveHook = (
  selector: DomSelector,
  position: DomMovePosition,
  inverse?: boolean
) => IDomElement;

export default (function (
  this: IDomElement,
  selector,
  position,
  inverse = false,
) {
  if (
    validate<string>(position, 'string', 'truthy')
    && positions.includes(position)
  ) {
    const reversed = ['prepend', 'after'].includes(position);

    const parsed = parse.call(this, selector);
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
} as DomMoveHook);
