import { DomElement as Instance } from '@core/classes/DomElement';
import { store } from '@src/store';

declare global {
  interface Element {
    msMatchesSelector(selectors: string): boolean;
  }
}

export type DomElement = InstanceType<typeof Instance>;

export type DomConstructor = {
  (selector: any): DomElement;

  fn: Record<string, Function>;
};

export default Object.assign((selector: any) => new Instance(selector), {
  fn: store.get('fn'),
}) as DomConstructor;
