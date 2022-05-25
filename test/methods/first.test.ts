describe('first', () => {
  test('return first element', () => {
    const $first = $('.list-item').first();

    expect($first).toHaveLength(1);

    expect(
      $first.get().every((el) => el.isEqualNode(getElement('.list-item-1'))),
    ).toBeTruthy();
  });

  test('return first if element is non-existent', () => {
    expect($('.not-exists').first()).toHaveLength(0);
  });
});
