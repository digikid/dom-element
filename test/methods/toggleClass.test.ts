describe('toggleClass', () => {
  test('toggle 1 classname if exists', () => {
    $('.paragraph').toggleClass('paragraph');

    expect(getElement('p').classList.contains('paragraph')).toBeFalsy();
  });

  test('toggle 1 classname if not exists', () => {
    $('.paragraph').toggleClass('text');

    expect(getElement('p').classList.contains('paragraph')).toBeTruthy();
    expect(getElement('p').classList.contains('text')).toBeTruthy();
  });

  test('toggle 2 classnames', () => {
    $('.paragraph').toggleClass('paragraph text');

    expect(getElement('p').classList.contains('paragraph')).toBeFalsy();
    expect(getElement('p').classList.contains('text')).toBeTruthy();
  });
});
