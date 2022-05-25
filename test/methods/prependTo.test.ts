describe('prependTo', () => {
  test('prepend element to another', () => {
    $('.links').prependTo('.paragraph');

    expect(
      getElement('.paragraph').firstElementChild.getAttribute('class'),
    ).toBe('links');
  });

  test('prepend multiple elements to another', () => {
    $('.links-item').prependTo('.paragraph');

    expect(
      Array.from(getElement('.paragraph').children).reduce(
        (acc, el) => acc && el.classList.contains('links-item'),
        true,
      ),
    ).toBeTruthy();
  });

  test('prepend all elements to another', () => {
    $('.list-item').prependTo('.empty');

    const children = Array.from(getElement('.empty').children);
    const listItems = Array.from(getElements('.list-item'));

    expect(children.length === listItems.length).toBeTruthy();
  });
});
