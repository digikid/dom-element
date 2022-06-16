import { IDomElement } from '@core/classes/DomElement';

export type DomHideMethod = () => IDomElement;

export default (function (this: IDomElement) {
  return this.each((el) => {
    const style = getComputedStyle(el, null);
    const display = style.getPropertyValue('display');

    if (display !== 'none') {
      el.style.display = 'none';
    }
  });
} as DomHideMethod);
