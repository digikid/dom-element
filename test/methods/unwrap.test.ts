describe('unwrap', () => {
  test('remove element wrapper', () => {
    $('.wrapper').unwrap();

    expect(getElement('#app')).toBe(null);

    expect(
      getElement('.wrapper').parentElement.isEqualNode(document.body),
    ).toBeTruthy();
  });
});
