import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomRemoveAttrId = string;
export type DomRemoveAttrMethod = (id: DomRemoveAttrId) => IDomElement;

export default (function (this: IDomElement, id) {
  if (validate<DomRemoveAttrId>(id, 'string', 'truthy')) {
    return this.attr(id, null);
  }

  return this;
} as DomRemoveAttrMethod);
