import { DomElement, IDomElement } from '@core/classes/DomElement';

export type DomHideMethod = () => DomElement;

export default (function (this: IDomElement) {
  this.collection.forEach((el) => {
    const style = getComputedStyle(el, null);
    const display = style.getPropertyValue('display');

    if (display !== 'none') {
      el.style.setProperty('display', 'none');
    }
  });

  return new DomElement(this);
} as DomHideMethod);
