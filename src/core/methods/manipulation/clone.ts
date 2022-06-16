import { IDomElement } from '@core/classes/DomElement';

export type DomCloneMethod = () => IDomElement;

export default (function (this: IDomElement) {
  this.items = this.items.reduce((acc: HTMLElement[], el: HTMLElement) => {
    const clone = <HTMLElement>el.cloneNode(true);

    acc.push(clone);

    return acc;
  }, []);

  return this;
} as DomCloneMethod);
