describe('insertAfter', () => {
  test('insert element after another', () => {
    $('.paragraph').insertAfter('.links');

    expect(
      getElement('.links').nextElementSibling.classList.contains('paragraph'),
    ).toBeTruthy();
  });

  test('insert multiple elements after another', () => {
    $('.links-item').insertAfter('.form');

    const form = getElement('.form');
    const links = Array.from(getElements('.links-item'));

    let nextSibling;

    expect(
      links.reduce((acc) => {
        const el = nextSibling || form.nextElementSibling;

        nextSibling = el.nextElementSibling;

        return acc && el.classList.contains('links-item');
      }, true),
    ).toBeTruthy();
  });
});
