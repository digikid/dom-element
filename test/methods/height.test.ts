describe('height', () => {
  test('return height value', () => {
    const height = toNumber(getStyle('.circle', 'height') as string);

    expect($('.circle').height()).toBe(height);
  });

  test('set height value', () => {
    $('.circle').height(200);

    expect(getStyle('.circle', 'height')).toBe('200px');
  });
});
