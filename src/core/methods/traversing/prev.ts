import { IDomElement } from '@core/classes/DomElement';

export type DomPrevMethod = (selector?: string) => IDomElement;

export default (function (this: IDomElement, selector?) {
  this.items = this.items.reduce((acc: HTMLElement[], el: HTMLElement) => {
    const previousSibling = <HTMLElement>el.previousElementSibling;

    if (previousSibling) {
      acc.push(previousSibling);
    }

    return acc;
  }, []);

  return this.filter(selector);
} as DomPrevMethod);
