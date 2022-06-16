describe('eq', () => {
  test('return element by index', () => {
    const $item = $('.list-item').eq(2);

    expect($item.length).toBe(1);

    expect(
      ($item.get() as HTMLElement[]).every((el) => el.isEqualNode(getElement('.list-item-3'))),
    ).toBeTruthy();
  });

  test('return elements by index with chaining', () => {
    const $items = $('.list-item').eq(0).add($('.list-item').eq(1));

    const items = new Array(2).fill(null).reduce((acc, _, i) => {
      acc[i] = getElement(`.list-item-${i + 1}`);
      return acc;
    }, []);

    expect($items.length).toBe(2);

    expect(
      ($items.get() as HTMLElement[]).every((el, i) => el.isEqualNode(items[i])),
    ).toBeTruthy();
  });
});
