describe('ready', () => {
  test('call ready function', () => {
    let isReady = false;

    $(document)
      .ready(() => {
        isReady = true;
      });

    expect(isReady)
      .toBeTruthy();
  });
});
