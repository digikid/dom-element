describe('hide', () => {
  test('hide element', () => {
    $('#app').hide();

    expect((getElement('#app') as HTMLElement).style.display).toBe('none');
  });

  test('prevent hiding if element display is none', () => {
    $('.hidden').hide();

    expect((getElement('.hidden') as HTMLElement).getAttribute('style')).toBe(
      null,
    );
  });
});
