import * as polyfills from '@core/polyfills';

import { IDomElement } from '@core/classes/DomElement';
import { store } from '@src/store';

export type DomInitHook = () => void;

export default (function (this: IDomElement) {
  if (store.get('initialized')) return;

  Object.values(polyfills).forEach((polyfill) => polyfill());

  // if (!window._domElementData) {
  //   window._domElementData = {};
  //
  //   Object.entries(elementDataMethods).forEach(([id, value]) => {
  //     Object.defineProperty(HTMLElement.prototype, id, {
  //       value,
  //     });
  //   });
  // }
  //
  // if (!window._domElementListeners) {
  //   window._domElementListeners = {};
  // }

  store.set('initialized', true);
} as DomInitHook);
