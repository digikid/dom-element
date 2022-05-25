describe('removeProp', () => {
  test('remove element property', () => {
    $('.disabled-input').removeProp('disabled');

    expect(
      (getElement('.disabled-input') as HTMLInputElement).getAttribute(
        'disabled',
      ),
    ).toBe(null);
  });
});
