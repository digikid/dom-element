const expected = (selector: string, method: string): string[] => {
  const elements = $(selector)[method]().get();

  return elements.reduce((acc, el) => {
    acc.push(el.getAttribute('class'));

    return acc;
  }, []);
};

const result = (selector: string, ...desired: number[]): string[] => {
  const elements = getElements(selector);

  return elements
    .map((el) => el.getAttribute('class'))
    .filter((className, index) => (desired ? desired.includes(index) : true));
};

const check = (
  name: string,
  selector: string,
  method: string,
  ...desired: number[]
) => test(`return ${name}`, () => {
  expect(expected(selector, method)).toEqual(result(selector, ...desired));
});

describe('ordering', () => {
  check('first element', 'li', 'first', 0);
  check('first elements in chain', '.wrapper, li', 'first', 0, 1);
  check('last element', 'li', 'last', 4);
  check('last elements in chain', '.form, li', 'last', 4, 5);
  check('even elements', 'li', 'even', 1, 3);
  check('odd elements', 'li', 'odd', 0, 2, 4);
});
