describe('wrap', () => {
  test('add wrapper to element', () => {
    $('.wrapper').wrap('<div class="outer"></div>');

    expect(
      getElement('.wrapper').parentElement.isEqualNode(getElement('.outer')),
    ).toBeTruthy();
  });
});
