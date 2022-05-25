describe('addClass', () => {
  const classNames = ['test-1', 'test-2', 'test-3'];

  test('add 1 class name', () => {
    $('.paragraph').addClass('test');

    expect(getElement('.paragraph').classList.contains('test')).toBeTruthy();
  });

  test('add 3 class names with string', () => {
    $('.paragraph').addClass(...classNames);

    expect(
      classNames.reduce(
        (acc, className) => acc && getElement('.paragraph').classList.contains(className),
        true,
      ),
    ).toBeTruthy();
  });

  test('add 3 class names with chaining', () => {
    classNames.forEach((className) => $('.list').addClass(className));

    expect(
      classNames.reduce(
        (acc, className) => acc && getElement('.list').classList.contains(className),
        true,
      ),
    ).toBeTruthy();
  });
});
