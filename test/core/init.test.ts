import { DomElement } from '@core/classes/DomElement';

describe('init', () => {
  test('correct instance', () => {
    expect($('body')).toBeInstanceOf(DomElement);
  });
});
