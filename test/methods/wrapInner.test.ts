describe('wrapInner', () => {
  test('add inner wrapper to elements', () => {
    $('.list-item').wrapInner('<div class="list-item-wrapper"></div>');

    expect(getElements('.list-item-wrapper')).toHaveLength(5);

    expect(
      getElements('.list-item').every((el) => el.firstElementChild.classList.contains('list-item-wrapper')),
    ).toBeTruthy();
  });
});
