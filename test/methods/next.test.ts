describe('next', () => {
  test('return next element', () => {
    const $next = $('.list-item-1').next();

    expect($next).toHaveLength(1);

    expect(
      ($next.get() as HTMLElement[]).every((el) => el.isEqualNode(getElement('.list-item-2'))),
    ).toBeTruthy();
  });

  test('return next if element is non-existent', () => {
    expect($('.not-exists').next()).toHaveLength(0);
    expect($('.list-item-5').next()).toHaveLength(0);
  });

  test('return next if element is document', () => {
    expect($('html').next()).toHaveLength(0);
    expect($(document).next()).toHaveLength(0);
  });
});
