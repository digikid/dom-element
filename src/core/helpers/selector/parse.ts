import { DomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export default (selector: any): HTMLElement[] => {
  if (validate<string>(selector, 'selectorString')) {
    const elements = document.querySelectorAll(selector);

    return elements ? <HTMLElement[]>Array.from(elements) : [];
  }

  if (validate<string>(selector, 'htmlString')) {
    const html = new DOMParser().parseFromString(selector, 'text/html');
    const nodes = html.body.childNodes;

    return <HTMLElement[]>Array.from(nodes);
  }

  if (validate<HTMLCollection | NodeList>(selector, 'htmlCollection')) {
    return <HTMLElement[]>Array.from(selector);
  }

  if (validate<DomElement>(selector, 'domElement')) {
    return selector.collection;
  }

  if (validate<Document>(selector, 'document')) {
    return [selector.documentElement];
  }

  if (validate<HTMLElement>(selector, 'htmlElement')) {
    return [selector];
  }

  if (validate<HTMLElement[]>(selector, 'htmlElementsArray')) {
    return selector;
  }

  return [];
};
