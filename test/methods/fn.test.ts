describe('fn', () => {
  test('set custom function', () => {
    $.fn.test = () => 'test';

    expect(typeof $.fn.test).toBe('function');
    expect($.fn.test()).toBe('test');
  });
});
