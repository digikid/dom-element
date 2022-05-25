describe('raw', () => {
  test('return raw element', () => {
    expect($('#app').raw().isEqualNode(getElement('#app'))).toBeTruthy();
  });

  test('return first raw element if collection passed', () => {
    expect($('li').raw().isEqualNode(getElement('.list-item-1'))).toBeTruthy();
  });

  test('return raw if element is not exist', () => {
    expect($('.not-exists').raw()).toBe(null);
  });
});
