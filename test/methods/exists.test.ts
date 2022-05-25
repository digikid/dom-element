describe('exists', () => {
  test('check existing element', () => {
    expect($('.empty')
      .exists())
      .toBe(true);
  });

  test('check non-existent element', () => {
    expect($('.not-exists')
      .exists())
      .toBe(false);
  });
});
