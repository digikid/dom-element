describe('before', () => {
  test('move element before another', () => {
    $('.form').before('.links');

    expect(
      getElement('.form').previousElementSibling.isEqualNode(
        getElement('.links'),
      ),
    ).toBeTruthy();
  });

  test('move multiple elements before another', () => {
    $('.links-item').before('.paragraph');

    expect(
      getElement('.links-item').previousElementSibling.isEqualNode(
        getElement('.paragraph'),
      ),
    ).toBeTruthy();
  });
});
