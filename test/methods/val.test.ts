describe('val', () => {
  test('return value', () => {
    expect($('.input').val()).toBe('Your name');
    expect($('.select').val()).toBe('option-1');
    expect($('.checkbox').val()).toBe('checkbox-1');
  });

  test('return multiple select value', () => {
    expect($('.select-multi').val()).toEqual(['option-1', 'option-2']);
  });

  test('set value', () => {
    $('.select').val('option-3');

    expect((getElement('.select') as HTMLSelectElement).value).toBe('option-3');
  });

  test('set multiple input values', () => {
    const values = ['checkbox-1', 'checkbox-3'];

    $('.checkbox').val(values);

    const checkboxes = Array.from(
      getElements('.checkbox'),
    ) as HTMLInputElement[];

    expect(
      checkboxes.every((checkbox) => (values.includes(checkbox.value) ? checkbox.checked : !checkbox.checked)),
    ).toBeTruthy();
  });

  test('set multiple select values', () => {
    const values = ['option-1', 'option-2', 'option-3'];

    $('.select-multi').val(values);

    const select = getElement('.select-multi') as HTMLSelectElement;
    const options = Array.from(select.options);

    expect(
      options.every((option) => (values.includes(option.value) ? option.selected : !option.selected)),
    ).toBeTruthy();
  });
});
