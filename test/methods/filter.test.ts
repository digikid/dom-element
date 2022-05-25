describe('filter', () => {
  test('filter elements by selector', () => {
    const $result = $('.list-item').filter('.list-item-1');

    expect($result).toHaveLength(1);

    expect(
      $result.get().every((el) => el.isEqualNode(getElement('.list-item-1'))),
    ).toBeTruthy();
  });

  test('filter elements by callback', () => {
    expect($('option').filter((el) => el.value === 'option-2')).toHaveLength(2);
  });

  test('filter non-existent elements', () => {
    expect($('.paragraph').filter('.not-exists')).toHaveLength(0);
  });
});
