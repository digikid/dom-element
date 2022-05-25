import {
  DomCollection,
  DomSelector,
  DomElement,
  IDomElement,
} from '@core/classes/DomElement';

import * as aliases from '@core/aliases';

import { validate } from '@src/validator';

export type DomParseHook = (selector: DomSelector) => DomCollection;

export default (function (this: IDomElement, selector) {
  if (validate<string>(selector, 'alias')) {
    return [aliases[selector as keyof typeof aliases]];
  }

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
    return selector.get();
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
} as DomParseHook);
