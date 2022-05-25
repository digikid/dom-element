describe('prev', () => {
  test('return prev element', () => {
    const $prev = $('.list-item-2')
      .prev();

    expect($prev.length)
      .toBe(1);
    expect($prev.get()
      .every((el) => el.isEqualNode(getElement('.list-item-1'))))
      .toBeTruthy();
  });

  test('return prev if element is non-existent', () => {
    expect($('.not-exists')
      .prev().length)
      .toBe(0);
    expect($('.list-item-1')
      .prev().length)
      .toBe(0);
  });

  test('return prev if element is document', () => {
    expect($('html')
      .prev().length)
      .toBe(0);
    expect($(document)
      .prev().length)
      .toBe(0);
  });
});
