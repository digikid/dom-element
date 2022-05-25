describe('insertBefore', () => {
  test('insert element before another', () => {
    $('.form').insertBefore('.links');

    expect(
      getElement('.links').previousElementSibling.classList.contains('form'),
    ).toBeTruthy();
  });

  test('insert multiple elements before another', () => {
    $('.list-item').insertBefore('.form');

    const form = getElement('.form');
    const listItems = Array.from(getElements('.list-item'));
    const lastListItem = listItems[listItems.length - 1];

    expect(lastListItem.nextElementSibling.isEqualNode(form)).toBeTruthy();
  });
});
