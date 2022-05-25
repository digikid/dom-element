describe('outerHtml', () => {
  test('return outer html string', () => {
    expect($('#app').outerHtml()).toBe(getElement('#app').outerHTML);
  });

  test('set outer html content', () => {
    $('#app').outerHtml('<div id="test"></div>');

    expect(getElement('#app')).toBe(null);
    expect(getElement('#test')).not.toBe(null);
  });
});
