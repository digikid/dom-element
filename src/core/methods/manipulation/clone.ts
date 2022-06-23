import { DomElement, IDomElement } from '@core/classes/DomElement';
import { map } from '@core/hooks';

export type DomCloneMethod = () => DomElement;

export default (function (this: IDomElement) {
  return map.call(this, () => this.collection.reduce((acc, el) => {
    const clone = <HTMLElement>el.cloneNode(true);

    acc.push(clone);

    return acc;
  }, [] as HTMLElement[]));
} as DomCloneMethod);
