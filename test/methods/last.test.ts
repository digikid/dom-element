describe('last', () => {
  test('return last element', () => {
    const $last = $('.list-item')
      .last();

    expect($last.length)
      .toBe(1);

    expect($last.get()
      .every((el) => el.isEqualNode(getElement('.list-item-5'))))
      .toBeTruthy();
  });

  test('return last if element is non-existent', () => {
    expect($('.not-exists')
      .last().length)
      .toBe(0);
  });
});
