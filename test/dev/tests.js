import $ from '../../src/index.ts';

const failed = [];

let check = true;

const test = (title, cb) => {
  const result = cb();

  if (!result) {
    failed.push(title);
  }

  check = check && result;
};

try {
  test('parsing document element', () => {
    const $document = $(document);

    return (
      $document.length === 1
      && $document.get().every((el) => el.isEqualNode(document.documentElement))
    );
  });

  test('event delegation', () => {
    let isDelegated = false;

    $(document).on('click', '.circle', () => {
      isDelegated = true;
    });

    $('.circle').trigger('click');

    return isDelegated;
  });

  test('rect method', () => {
    const rect = $('#app').rect();

    return Object.entries(rect).every(
      ([key, value]) => key in DOMRectReadOnly.prototype && typeof value === 'number',
    );
  });

  if (check) {
    console.log(
      '%c%s',
      'color: green; font-weight: bold;',
      '✔️ All tests passed successfully',
    );
  } else {
    console.log(
      '%c%s',
      'color: red; font-weight: bold;',
      '❌ Some tests failed:\r\n',
      failed.join(','),
    );
  }
} catch (e) {
  console.log('%c%s', 'color: red; font-weight: bold;', 'Error:\r\n', e);
}
