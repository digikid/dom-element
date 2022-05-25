describe('replaceWith', () => {
  test('replace element with string', () => {
    $('.list').replaceWith('<div id="test"></div>');

    expect(getElement('.list')).toBe(null);
    expect(getElement('#test')).not.toBe(null);
    expect($('#test')).toHaveLength(1);
  });

  test('replace element with selector', () => {
    $('.list').replaceWith('.links');

    expect(getElement('.list')).toBe(null);
    expect(getElements('.links')).toHaveLength(1);
  });
});
