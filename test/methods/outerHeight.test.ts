describe('outerHeight', () => {
  test('return outer height value without margins', () => {
    const height = toNumber(getStyle('.circle', 'height') as string);

    expect($('.circle').outerHeight()).toBe(height);
  });

  test('return outer height value with margins', () => {
    const height = toNumber(getStyle('.circle', 'height') as string);
    const margin = ['top', 'bottom'].reduce(
      (acc, position) => acc + toNumber(getStyle('.circle', `margin-${position}`) as string),
      0,
    );

    expect($('.circle').outerHeight(true)).toBe(height + margin);
  });
});
