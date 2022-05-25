describe('show', () => {
  test('show element', () => {
    $('.block').show();

    expect((getElement('.block') as HTMLElement).style.display).toBe('block');
  });

  test('show element with passed display value', () => {
    $('.block').show('inline-block');

    expect((getElement('.block') as HTMLElement).style.display).toBe(
      'inline-block',
    );
  });

  test('show element with previous display value', () => {
    $('.flex').show();

    expect(getStyle('.flex', 'display')).toBe('flex');
  });
});
