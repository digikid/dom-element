import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomRemoveAttrMethod = (name: string) => DomElement;

export default (function (this: IDomElement, name) {
  if (validate<string>(name, 'string', 'truthy')) {
    this.collection.forEach((el) => el.removeAttribute(name));
  }

  return new DomElement(this);
} as DomRemoveAttrMethod);
