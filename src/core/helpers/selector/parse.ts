import { DomElement } from '@core/classes/DomElement';
import { unique } from '@core/helpers/collection';
import { validate } from '@src/validator';

export default (selector: any): HTMLElement[] => {
  const collection: HTMLElement[] = [];

  if (validate<string>(selector, 'selectorString')) {
    const elements = document.querySelectorAll(selector);

    if (elements) {
      collection.push(...(<HTMLElement[]>Array.from(elements)));
    }
  }

  if (validate<string>(selector, 'htmlString')) {
    const html = new DOMParser().parseFromString(selector, 'text/html');
    const nodes = html.body.childNodes;

    if (nodes) {
      collection.push(...(<HTMLElement[]>Array.from(nodes)));
    }
  }

  if (validate<HTMLCollection | NodeList>(selector, 'htmlCollection')) {
    collection.push(...(<HTMLElement[]>Array.from(selector)));
  }

  if (validate<DomElement>(selector, 'domElement')) {
    collection.push(...selector.collection);
  }

  if (validate<Document>(selector, 'document')) {
    collection.push(selector.documentElement);
  }

  if (validate<HTMLElement[]>(selector, 'htmlElementsArray')) {
    collection.push(...selector);
  }

  if (validate<HTMLElement>(selector, 'htmlElement')) {
    collection.push(selector);
  }

  return unique(collection);
};
