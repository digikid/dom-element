describe('find', () => {
  test('find elements by selector', () => {
    const $result = $('#app').find('select');

    const selects = Array.from(getElements('select'));

    expect($result).toHaveLength(2);

    expect(
      ($result.get() as HTMLElement[]).every((el, i) => el.isEqualNode(selects[i])),
    ).toBeTruthy();
  });

  test('find non-existent elements', () => {
    const $result = $('#app').find('.not-exists');

    expect($result).toHaveLength(0);
  });
});
