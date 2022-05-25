describe('width', () => {
  test('return width value', () => {
    const width = toNumber(getStyle('.circle', 'width') as string);

    expect($('.circle').width()).toBe(width);
  });

  test('set width value', () => {
    $('.circle').width(200);

    expect(getStyle('.circle', 'width')).toBe('200px');
  });
});
