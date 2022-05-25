describe('add', () => {
  test('add 5 items', () => {
    const $add = $('.paragraph').add('.list-item');

    const elements = [
      getElement('.paragraph'),
      ...Array.from(getElements('.list-item')),
    ];

    expect($add).toHaveLength(6);

    expect(
      $add.get().every((el, i) => el.isEqualNode(elements[i])),
    ).toBeTruthy();
  });
});
