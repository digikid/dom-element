describe('clear', () => {
  test('clear element inner html', () => {
    $('.paragraph')
      .clear();

    expect(getElement('.paragraph').innerHTML)
      .toBe('');
  });
});
