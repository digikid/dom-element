describe('removeClass', () => {
  test('remove 1 classname from element', () => {
    $('.paragraph')
      .removeClass('paragraph');

    expect(
      getElement('p')
        .classList
        .contains('paragraph'),
    )
      .toBeFalsy();
  });

  test('remove 1 classname from multiple elements', () => {
    $('.list li')
      .removeClass('list-item');

    expect(
      Array.from(getElements('.list li'))
        .reduce(
          (acc, el) => acc || el.classList.contains('list-item'),
          false,
        ),
    )
      .toBeFalsy();
  });

  test('remove multiple classnames from element', () => {
    $('.links-item-1')
      .removeClass('links-item', 'links-item-1');

    expect(
      getElement('.links')
        .firstElementChild
        .getAttribute('class'),
    )
      .toBeFalsy();
  });
});
