import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomRemovePropMethod = (name: string) => DomElement;

export default (function (this: IDomElement, name) {
  if (validate<string>(name, 'string', 'truthy')) {
    this.collection.forEach((el) => {
      const attributes = Array.from(el.attributes).map((attr) => attr.nodeName);

      if (attributes.includes(name)) {
        el.removeAttribute(name);
      } else {
        (el as any)[name] = false;
      }
    });
  }

  return new DomElement(this);
} as DomRemovePropMethod);
