describe('css', () => {
  const values = {
    fontSize: '24px',
    textTransform: 'uppercase',
    color: 'red',
  };

  test('return css value', () => {
    expect($('.list').css('padding')).toBe(getStyle('.list', 'padding'));
  });

  test('set css value by name', () => {
    $('.paragraph').css('font-size', '18px');

    expect(getStyle('.paragraph', 'font-size')).toBe('18px');
  });

  test('set css values by object', () => {
    $('.paragraph').css(values);

    expect(
      Object.entries(values).every(
        ([name, value]) => getStyle('.paragraph', toDashCase(name)) === value,
      ),
    ).toBeTruthy();
  });
});
