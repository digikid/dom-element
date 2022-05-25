describe('text', () => {
  test('return text value', () => {
    expect($('.paragraph').text()).toBe('Text paragraph.');
  });

  test('set text value', () => {
    const text = 'New text here';

    $('.paragraph').text(text);

    expect(getElement('.paragraph').textContent).toBe(text);
  });
});
