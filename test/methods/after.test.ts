describe('after', () => {
  test('move element after another', () => {
    $('.paragraph').after('.links');

    expect(
      getElement('.paragraph').nextElementSibling.classList.contains('links'),
    ).toBeTruthy();
  });

  test('move multiple elements after another', () => {
    $('.paragraph').after('.links-item');

    const paragraph = getElement('.paragraph');
    const links = Array.from(getElements('.links-item'));

    let nextSibling;

    expect(
      links.reduce((acc) => {
        const el = nextSibling || paragraph.nextElementSibling;

        nextSibling = el.nextElementSibling;

        return acc && el.classList.contains('links-item');
      }, true),
    ).toBeTruthy();
  });
});
