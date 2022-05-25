describe('clone', () => {
  test('cloning elements', () => {
    const $cloned = $('.list-item').clone();
    const target = Array.from(getElements('.list-item'));

    expect($cloned).toHaveLength(5);

    expect(
      $cloned.get().every((el, i) => el.isEqualNode(target[i])),
    ).toBeTruthy();
  });
});
