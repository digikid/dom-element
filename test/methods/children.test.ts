describe('children', () => {
  test('getting children elements', () => {
    const $children = $('.list').children();

    expect($children).toHaveLength(5);

    expect(
      $children
        .get()
        .every((el, i) => el.isEqualNode(getElement(`.list-item-${i + 1}`))),
    ).toBeTruthy();
  });
});
