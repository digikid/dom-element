import { IDomElement, DomElement } from '@core/classes/DomElement';

import fn from '@core/fn';

declare global {
  interface Element {
    msMatchesSelector(selectors: string): boolean;
  }
}

export interface IDomConstructor {
  (selector: any): IDomElement;

  fn: Record<string, Function>;
}

export default Object.assign((selector: any) => new DomElement(selector), {
  fn,
}) as IDomConstructor;
