import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type RemoveAttrMethod = (name: string) => DomElement;

export default (function (this: IDomElement, name) {
  if (validate<string>(name, 'string', 'truthy')) {
    this.collection.forEach((el) => el.removeAttribute(name));
  }

  return new DomElement(this);
} as RemoveAttrMethod);
