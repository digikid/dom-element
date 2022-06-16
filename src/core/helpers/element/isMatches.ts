import { validate } from '@src/validator';

export default (el: HTMLElement, selector: string): boolean => {
  if (!validate<string>(selector, 'string', 'truthy')) {
    return false;
  }

  const matchers = [
    'matches',
    'matchesSelector',
    'msMatchesSelector',
    'mozMatchesSelector',
    'webkitMatchesSelector',
    'oMatchesSelector',
  ];

  return matchers.reduce((acc, matcher) => {
    if (matcher in el) {
      return (
        acc
        || (el[matcher as keyof typeof HTMLElement.prototype] as Function)(
          selector,
        )
      );
    }

    return acc;
  }, false);
};
