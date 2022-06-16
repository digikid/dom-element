import { IDomElement, DomElement } from '@core/classes/DomElement';
import { store } from '@src/store';

declare global {
  interface Element {
    msMatchesSelector(selectors: string): boolean;
  }
}

export interface IDomConstructor {
  (selector: any): IDomElement;

  fn: Record<string, Function>;
}

const $ = Object.assign((selector: any) => new DomElement(selector), {
  fn: store.get('fn'),
});

export default $ as IDomConstructor;
