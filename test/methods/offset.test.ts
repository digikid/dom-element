describe('offset', () => {
  test('return element offset', () => {
    const rect = getElement('#app')
      .getBoundingClientRect();
    const offset = {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft,
    };

    expect($('#app')
      .offset())
      .toEqual(offset);
  });

  test('return non-existent element offset', () => {
    expect($('.not-exists')
      .offset())
      .toEqual({
        top: null,
        left: null,
      });
  });
});
