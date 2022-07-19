import { MethodCallback } from '@core/types';
import { validate } from '@src/validator';
import { trigger } from '@core/helpers/effects';
import { getComputedValue, getDisplayValue } from '@core/helpers/css';
import { toCamelCase, fromCamelCaseToArray } from '@utils/string';

import defaults from '@core/defaults';

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

export type AnimateProps = Record<'el' | 'step', Record<string, number>>;

export type AnimateHook = (
  el: HTMLElement,
  effect: string,
  duration: number | string | Function | undefined,
  callback: MethodCallback | undefined
) => void;

export default (function (el: HTMLElement, effect, duration, callback) {
  const [name, direction] = fromCamelCaseToArray(effect) as [
    typeof types[number],
    typeof directions[number],
  ];

  let parsedDuration = validate<number>(duration, 'number')
    ? duration
    : defaults.effects.duration;

  if (
    validate<string>(duration, 'string')
    && !Number.isNaN(parseFloat(duration))
  ) {
    parsedDuration = parseFloat(duration);
  }

  const inverse = getComputedValue(el, 'display') === 'none';
  const cb = validate<MethodCallback>(duration, 'function')
    ? duration
    : callback;
  const initialDisplay = getDisplayValue(el);
  const currentDisplay = initialDisplay === 'none' ? 'block' : initialDisplay;

  if (inverse) {
    el.style.setProperty('display', currentDisplay);
  }

  const props = config[name].props.reduce(
    (acc, prop: string) => {
      const value = parseFloat(getComputedValue(el, prop));

      if (!Number.isNaN(value)) {
        acc.el[toCamelCase(prop)] = value;
        acc.step[toCamelCase(prop)] = value / parsedDuration;
      }

      return acc;
    },
    {
      el: {},
      step: {},
    } as AnimateProps,
  );

  if (inverse) {
    el.style.setProperty('display', initialDisplay);
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
} as AnimateHook);
