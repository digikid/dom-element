describe('appendTo', () => {
  test('append element to another', () => {
    $('.paragraph').appendTo('.links');

    expect(
      getElement('.paragraph').lastElementChild.getAttribute('class'),
    ).toBe('links');
  });

  test('append multiple elements to another', () => {
    $('.list-item').appendTo('.paragraph');

    expect(
      Array.from(getElement('.paragraph').children).reduce(
        (acc, el) => acc && el.classList.contains('list-item'),
        true,
      ),
    ).toBeTruthy();
  });

  test('append all elements to another', () => {
    $('.list-item').appendTo('.paragraph');

    const children = Array.from(getElement('.paragraph').children);
    const listItems = Array.from(getElements('.list-item'));

    expect(children.length === listItems.length).toBeTruthy();
  });
});
