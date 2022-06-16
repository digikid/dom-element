describe('closest', () => {
  test('return closest element', () => {
    const $closest = $('.paragraph').closest('#app');

    expect($closest).toHaveLength(1);
    expect(
      ($closest.get(0) as HTMLElement).isEqualNode(getElement('#app')),
    ).toBeTruthy();
  });
});
