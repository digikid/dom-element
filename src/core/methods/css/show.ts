import { DomElement, IDomElement } from '@core/classes/DomElement';
import { parseToCssObject } from '@utils/string';

export type ShowMethod = (displayValue?: string) => DomElement;

export default (function (this: IDomElement, displayValue = 'block') {
  this.collection.forEach((el) => {
    const inlineStyle = el.getAttribute('style');
    const cssObject = parseToCssObject(inlineStyle);

    if ('display' in cssObject && cssObject.display === 'none') {
      el.style.removeProperty('display');
    }

    const style = getComputedStyle(el, null);

    if (style.getPropertyValue('display') === 'none') {
      el.style.setProperty('display', displayValue);
    }
  });

  return new DomElement(this);
} as ShowMethod);
