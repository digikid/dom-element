import { IStorage } from '@src/store';

declare global {
  interface Element {
    msMatchesSelector(selectors: string): boolean;

    _domElementId: string;
  }

  interface Window {
    _domElementStore: IStorage;
  }
}

export default global;
