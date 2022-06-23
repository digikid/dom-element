describe('siblings', () => {
  test('return element siblings', () => {
    const $siblings = $('.list-item-1').siblings();

    expect($siblings).toHaveLength(4);

    expect(
      ($siblings.get() as HTMLElement[]).every((el, i) => el.isEqualNode(getElement(`.list-item-${i + 2}`))),
    ).toBeTruthy();
  });

  test('return non-existent element siblings', () => {
    const $siblings = $('.not-exists').siblings();

    expect($siblings).toHaveLength(0);
  });
});
