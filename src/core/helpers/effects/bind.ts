import { DomCallback } from '@core/types';
import { validate } from '@src/validator';
import { trigger } from '@core/helpers/effects';
import { getComputedValue, getDisplayValue } from '@core/helpers/css';
import { toCamelCase, fromCamelCaseToArray } from '@core/utils/string';

const config = {
  fade: {
    directions: ['in', 'out', 'toggle'],
    props: ['opacity'],
  },
  slide: {
    directions: ['up', 'down', 'toggle'],
    props: [
      'height',
      'padding-top',
      'padding-bottom',
      'margin-top',
      'margin-bottom',
    ],
  },
};

const types = ['fade', 'slide'] as const;
const directions = ['in', 'out', 'up', 'down', 'toggle'] as const;

export type DomAnimateProps = Record<'el' | 'step', Record<string, number>>;

export type DomAnimateHook = (
  el: HTMLElement,
  effect: string,
  duration: number | string | Function | undefined,
  callback: DomCallback | undefined
) => void;

export default (function (el: HTMLElement, effect, duration, callback) {
  const [name, direction] = fromCamelCaseToArray(effect) as [
    typeof types[number],
    typeof directions[number],
  ];

  let parsedDuration = validate<number>(duration, 'number') ? duration : 400;

  if (
    validate<string>(duration, 'string')
    && !Number.isNaN(parseFloat(duration))
  ) {
    parsedDuration = parseFloat(duration);
  }

  const inverse = getComputedValue(el, 'display') === 'none';
  const cb = validate<DomCallback>(duration, 'function') ? duration : callback;
  const display = getDisplayValue(el);

  if (inverse) {
    el.style.display = display === 'none' ? 'block' : display;
  }

  const props = config[name].props.reduce(
    (acc, prop: string) => {
      const rawValue = getComputedValue(
        el,
        prop,
        ['width', 'height'].includes(prop),
      );

      const value = parseFloat(rawValue);

      if (!Number.isNaN(value)) {
        acc.el[toCamelCase(prop)] = value;
        acc.step[toCamelCase(prop)] = value / parsedDuration;
      }

      return acc;
    },
    {
      el: {},
      step: {},
    } as DomAnimateProps,
  );

  if (inverse) {
    el.style.display = display;
  }

  if (direction === 'up' || direction === 'out') {
    trigger(props, el, parsedDuration, cb);
  }

  if (direction === 'down' || direction === 'in') {
    trigger(props, el, parsedDuration, cb, true);
  }

  if (direction === 'toggle') {
    trigger(props, el, parsedDuration, cb, inverse);
  }
} as DomAnimateHook);
