describe('hasClass', () => {
  test('check if element has classname', () => {
    expect($('p').hasClass('paragraph')).toBe(true);
  });

  test('check if element has not classname', () => {
    expect($('p').hasClass('non-existent')).toBe(false);
  });
});
