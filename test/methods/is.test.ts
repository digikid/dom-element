describe('is', () => {
  test('check element by selector', () => {
    expect($('#app').is('a')).toBe(false);
    expect($('#app').is('div')).toBe(true);
    expect($('.list-item').is('li')).toBe(true);
    expect($('.links-item').is('a')).toBe(true);
  });

  test('check non-existent element by selector', () => {
    expect($('#test').is('div')).toBe(false);
  });
});
