describe('has', () => {
  test('find element if it contains selector', () => {
    const $links = $('.links').has('.links-item');

    expect($links).toHaveLength(1);

    expect(
      $links.get().every((el) => el.isEqualNode(getElement('.links'))),
    ).toBeTruthy();
  });

  test("find element if it doesn't contain selector", () => {
    const $links = $('.links').has('.non-existing');

    expect($links).toHaveLength(0);
  });
});
