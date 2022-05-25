import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomRemovePropId = string;
export type DomRemovePropMethod = (id: DomRemovePropId) => IDomElement;

export default (function (this: IDomElement, id) {
  if (validate<DomRemovePropId>(id, 'string', 'truthy')) {
    return this.prop(id, null);
  }

  return this;
} as DomRemovePropMethod);
