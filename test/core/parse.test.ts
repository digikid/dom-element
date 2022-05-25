describe('parse', () => {
  test('parse empty selector', () => {
    expect($().get()).toHaveLength(0);
  });

  test('parse non-valid selector', () => {
    expect($('foobar').get()).toHaveLength(0);
  });

  test('parse self', () => {
    expect($($('#app')).get()).toHaveLength(1);
  });

  test('parse root nodes', () => {
    expect($('html').get()).toHaveLength(1);
    expect($('body').get()).toHaveLength(1);
  });

  test('parse selector string', () => {
    expect($('.list-item').get()).toHaveLength(5);
  });

  test('parse html string', () => {
    expect($('<div></div>').get()).toHaveLength(1);
    expect($('<p></p><p></p><p></p>').get()).toHaveLength(3);
  });

  test('parse NodeList', () => {
    expect($(getElements('.links-item')).get()).toHaveLength(3);
  });

  test('parse HTMLCollection', () => {
    expect($(document.getElementById('app')).get()).toHaveLength(1);
    expect($(document.getElementsByClassName('list-item')).get()).toHaveLength(
      5,
    );
  });

  test('parse HTMLElement', () => {
    expect($(getElement('#app')).get()).toHaveLength(1);
  });

  test('parse array of HTMLElements', () => {
    expect(
      $(
        new Array(3).fill(null).reduce((acc, _, i) => {
          acc[i] = getElement(`.list-item-${i + 1}`);

          return acc;
        }, []),
      ).get(),
    ).toHaveLength(3);
  });
});
