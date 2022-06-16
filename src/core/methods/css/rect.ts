import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { validate } from '@src/validator';

export type DomRectMethod = () => Record<keyof DOMRect, number> | null;

export default (function (this: IDomElement) {
  return reduce.call(this, (el) => {
    const rect = el.getBoundingClientRect();

    return Object.fromEntries(
      Array.from(
        Object.keys(DOMRectReadOnly.prototype)
          .filter((key) => validate<number>(rect[key as keyof DOMRect], 'number')),
        (key) => [key, rect[key as keyof DOMRect]],
      ),
    );
  });
} as DomRectMethod);
