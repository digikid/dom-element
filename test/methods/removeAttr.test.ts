describe('removeAttr', () => {
  test('remove element attribute', () => {
    $('.label-checkbox-1').removeAttr('for');

    expect(getElement('.label-checkbox-1').getAttribute('for')).toBe(null);
  });
});
