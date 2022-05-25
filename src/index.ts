import { DomElement } from '@core/classes/DomElement';

import fn from '@core/fn';

declare global {
  interface Element {
    msMatchesSelector(selectors: string): boolean;
  }
}

const $ = function (selector: any) {
  return new DomElement(selector);
};

$.fn = fn;

export default $;
