describe('remove', () => {
  test('remove element', () => {
    $('#app').remove();

    expect(getElement('#app')).toBe(null);
  });
});
