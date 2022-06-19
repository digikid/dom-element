describe('get', () => {
  test('return elements collection', () => {
    const $app = $('#app');

    expect($app.length).toBe(1);

    expect(
      ($app.get() as HTMLElement[]).every((el) => el.isEqualNode(getElement('#app'))),
    ).toBeTruthy();
  });

  test('return element by index', () => {
    expect(
      ($('.list-item').get(0) as HTMLElement).isEqualNode(
        getElement('.list-item-1'),
      ),
    ).toBeTruthy();
    expect(
      ($('.list-item').get(4) as HTMLElement).isEqualNode(
        getElement('.list-item-5'),
      ),
    ).toBeTruthy();
  });
});
