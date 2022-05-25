describe('attr', () => {
  test('return attribute value', () => {
    expect($('.label-checkbox-1').attr('for')).toBe('checkbox-1');
  });

  test('set attribute value by name', () => {
    $('.paragraph').attr('test', 'test');

    expect(getElement('.paragraph').getAttribute('test')).toBe('test');
  });

  test('set attributes by object', () => {
    const attrs = ['test1', 'test2', 'test3'];

    $('.paragraph').attr(
      attrs.reduce((acc, attr) => {
        acc[attr] = attr;

        return acc;
      }, {}),
    );

    expect(
      attrs.every(
        (attr, i) => getElement('.paragraph').getAttribute(attr) === attrs[i],
      ),
    ).toBeTruthy();
  });

  test('remove attribute by null value', () => {
    $('.paragraph').attr('test1', null);

    expect(getElement('.paragraph').getAttribute('test1')).toBeFalsy();
  });
});
