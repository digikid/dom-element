describe('index', () => {
  test('return element index', () => {
    expect($('.list-item-1').index()).toBe(0);
    expect($('.list-item-3').index()).toBe(2);
  });

  test('return non-existent element index', () => {
    expect($('.list-item-10').index()).toBe(-1);
  });
});
