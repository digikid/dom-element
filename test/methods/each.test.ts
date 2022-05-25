describe('each', () => {
  test('pass context to each callback', () => {
    const context = [];

    $('li').each(function (el, i) {
      context.push([this, el, i]);
    });

    expect(
      Array.from(getElements('li')).every(
        (el, i) => context[i][0].isEqualNode(el)
          && context[i][1].isEqualNode(el)
          && context[i][2] === i,
      ),
    ).toBeTruthy();
  });

  test('iterate elements with callback', () => {
    $('li').each(function () {
      this.textContent = 'test';
    });

    expect(
      Array.from(getElements('li')).every((el) => el.textContent === 'test'),
    ).toBeTruthy();
  });
});
