describe('data', () => {
  test('return empty data object', () => {
    expect(JSON.stringify($('.empty').data())).toBe('{}');
  });

  test('set data value by key', () => {
    $('.empty').data('test', 'test');

    expect(JSON.stringify($('.empty').data())).toBe('{"test":"test"}');
  });

  test('set data values by object', () => {
    const values = {
      test1: 'test1',
      test2: 'test2',
      test3: 'test3',
    };

    $('.empty').data(values);

    expect(JSON.stringify($('.empty').data())).toBe(JSON.stringify(values));
  });
});
