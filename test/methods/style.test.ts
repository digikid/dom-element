describe('style', () => {
  test('return element style', () => {
    expect($('.styled').style().marginTop).toBe('25px');
    expect($('.styled').style(true).marginTop).toBe(25);
    expect($('.styled').style('background-color')).toBe('green');
    expect($('.styled').style('margin-top', true)).toBe(25);
  });

  test('return non-existent element style', () => {
    expect(JSON.stringify($('.not-exist').style())).toBe('{}');
  });
});
