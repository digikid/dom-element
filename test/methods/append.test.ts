describe('append', () => {
  test('append element to another', () => {
    $('.paragraph').append('.links');

    expect(
      getElement('.paragraph').lastElementChild.classList.contains('links'),
    ).toBeTruthy();
  });

  test('append multiple elements to another', () => {
    $('.paragraph').append('.list-item');

    expect(
      Array.from(getElement('.paragraph').children).reduce(
        (acc, el) => acc && el.classList.contains('list-item'),
        true,
      ),
    ).toBeTruthy();
  });

  test('append all elements to another', () => {
    $('.paragraph').append('.list-item');

    const children = Array.from(getElement('.paragraph').children);
    const listItems = Array.from(getElements('.list-item'));

    expect(children.length === listItems.length).toBeTruthy();
  });
});
