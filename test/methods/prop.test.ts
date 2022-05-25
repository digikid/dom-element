describe('prop', () => {
  test('return property value', () => {
    expect($('#checkbox-1').prop('checked')).toBe(false);
  });

  test('set property value by name', () => {
    $('#checkbox-1').prop('checked', true);

    expect((getElement('#checkbox-1') as any).checked).toBe(true);
  });

  test('set properties by object', () => {
    const attrs = ['checked', 'disabled'];

    $('#radio-1').attr(
      attrs.reduce((acc, attr) => {
        acc[attr] = true;

        return acc;
      }, {}),
    );

    expect(
      attrs.every((prop) => (getElement('#radio-1') as any)[prop] === true),
    ).toBeTruthy();
  });

  test('remove property by null value', () => {
    $('#radio-1').attr('disabled', null);

    expect(getElement('#radio-1').getAttribute('disabled')).toBeFalsy();
  });
});
