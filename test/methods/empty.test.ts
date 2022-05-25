describe('empty', () => {
  test('remove element children', () => {
    $('.list').empty();

    expect(getElement('.list').children).toHaveLength(0);
  });
});
