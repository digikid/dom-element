describe('prepend', () => {
  test('prepend element to another', () => {
    $('.paragraph').prepend('.links');

    expect(
      getElement('.paragraph').firstElementChild.getAttribute('class'),
    ).toBe('links');
  });

  test('prepend multiple elements to another', () => {
    $('.paragraph').prepend('.links-item');

    expect(
      Array.from(getElement('.paragraph').children).reduce(
        (acc, el) => acc && el.classList.contains('links-item'),
        true,
      ),
    ).toBeTruthy();
  });

  test('prepend all elements to another', () => {
    $('.empty').prepend('.list-item');

    const children = Array.from(getElement('.empty').children);
    const listItems = Array.from(getElements('.list-item'));

    expect(children.length === listItems.length).toBeTruthy();
  });
});
