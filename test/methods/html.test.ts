describe('html', () => {
  const htmlString = '<div id="test"></div>';

  test('return inner html string', () => {
    expect($('#app').html()).toBe(getElement('#app').innerHTML);
  });

  test('set inner html content', () => {
    $('#app').html(htmlString);

    expect(getElement('#app').innerHTML).toBe(htmlString);
  });

  test('set outer html content', () => {
    $('#app').html(htmlString, true);

    expect(getElement('#app')).toBe(null);
    expect(getElement('#test')).not.toBe(null);
  });
});
