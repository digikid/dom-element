import { IDomElement } from '@core/classes/DomElement';
import { parseToCssObject } from '@core/utils/string';

export type DomShowMethod = (displayValue?: string) => IDomElement;

export default (function (this: IDomElement, displayValue = 'block') {
  return this.each((el) => {
    const inlineStyle = el.getAttribute('style');
    const cssObject = parseToCssObject(inlineStyle);

    if ('display' in cssObject && cssObject.display === 'none') {
      el.style.removeProperty('display');
    }

    const style = getComputedStyle(el, null);

    if (style.getPropertyValue('display') === 'none') {
      el.style.display = displayValue;
    }
  });
} as DomShowMethod);
