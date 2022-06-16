describe('parent', () => {
  test('return parent element', () => {
    const $parent = $('.list').parent();

    expect($parent).toHaveLength(1);

    expect(
      ($parent.get() as HTMLElement[]).every((el) => el.isEqualNode(getElement('.wrapper'))),
    ).toBeTruthy();
  });

  test('return parent element by selector', () => {
    const $parent = $('option').parent('.select-multi');

    expect($parent).toHaveLength(1);

    expect(
      ($parent.get() as HTMLElement[]).every((el) => el.isEqualNode(getElement('.select-multi'))),
    ).toBeTruthy();
  });

  test('return parent if element is not exists', () => {
    expect($('.not-exists').parent()).toHaveLength(0);
  });
});
