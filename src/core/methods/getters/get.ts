import { type IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type GetMethod = (index?: number) => HTMLElement | HTMLElement[] | null;

export default (function (this: IDomElement, index?) {
  if (validate<number>(index, 'number')) {
    return this.collection.at(index) || null;
  }

  return this.collection;
} as GetMethod);
