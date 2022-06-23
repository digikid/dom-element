import { validate } from '@src/validator';

export default (collection: HTMLElement[]): HTMLElement[] => collection.reduce((acc, el) => {
  if (!acc.includes(el) && validate<HTMLElement>(el, 'htmlElement')) {
    acc.push(el);
  }

  return acc;
}, [] as HTMLElement[]);
