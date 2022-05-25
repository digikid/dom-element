describe('position', () => {
  test('return element position', () => {
    const el = getElement('#app');
    const marginTop = toNumber(getStyle('#app', 'margin-top') as string);
    const marginLeft = toNumber(getStyle('#app', 'margin-left') as string);

    const position = {
      top: el.offsetTop - marginTop,
      left: el.offsetLeft - marginLeft,
    };

    expect($('#app')
      .position())
      .toEqual(position);
  });

  test('return non-existent element position', () => {
    expect($('.not-exists')
      .position())
      .toEqual({
        top: null,
        left: null,
      });
  });
});
