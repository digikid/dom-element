describe('not', () => {
  test('not element by selector', () => {
    const $result = $('.list-item').not('.list-item-1');

    const result = new Array(4).fill(null).reduce((acc, _, i) => {
      acc[i] = getElement(`.list-item-${i + 2}`);

      return acc;
    }, []);

    expect($result).toHaveLength(4);

    expect(
      $result.get().every((el, i) => el.isEqualNode(result[i])),
    ).toBeTruthy();
  });

  test('not elements by callback', () => {
    expect($('option').not((el) => el.value === 'option-2')).toHaveLength(8);
  });

  test('not non-existent elements', () => {
    expect($('.paragraph').not('.not-exists')).toHaveLength(1);
  });
});
