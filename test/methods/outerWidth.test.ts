describe('outerWidth', () => {
  test('return outer width value without margins', () => {
    const width = toNumber(getStyle('.circle', 'width') as string);

    expect($('.circle').outerHeight()).toBe(width);
  });

  test('return outer width value with margins', () => {
    const width = toNumber(getStyle('.circle', 'width') as string);
    const margin = ['left', 'right'].reduce(
      (acc, position) => acc + toNumber(getStyle('.circle', `margin-${position}`) as string),
      0,
    );

    expect($('.circle').outerHeight(true)).toBe(width + margin);
  });
});
