import { DomElement } from '@core/classes/DomElement';
import * as methods from '@core/methods';

describe('init', () => {
  test('correct instance', () => {
    expect($('body')).toBeInstanceOf(DomElement);
  });

  test('methods enabling', () => {
    expect(
      Object.keys(methods).every((method) => method in $('#app')),
    ).toBeTruthy();
  });

  test('methods chaining', () => {
    expect(() => Object.keys(methods)
      .filter((method) => method !== 'rect')
      .forEach((method) => $('#app')[method]())).not.toThrow();
  });
});
