import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { toCamelCase, fromCamelCaseToArray } from '@utils/string';
import { getComputedValue } from '@utils/element';

const effects = {
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

const effectTypes = ['fade', 'slide'] as const;
const effectDirections = ['in', 'out', 'up', 'down', 'toggle'] as const;

const effectNames = [
  'fadeIn',
  'fadeOut',
  'fadeToggle',
  'slideUp',
  'slideDown',
  'slideToggle',
] as const;

const isPx = (prop: string): boolean => ['width', 'height', 'margin', 'padding'].some((p) => prop.includes(p.toLowerCase()));
const getDisplay = (el: HTMLElement): string => el.style.display || getComputedValue(el, 'display');

const animate = (
  props: DomAnimateProps,
  el: HTMLElement,
  duration: number,
  callback: Function | undefined,
  inverse = false,
) => {
  const display = getComputedValue(el, 'display');
  const isHidden = getDisplay(el) === 'none';
  const hasOverflow = Object.keys(props.el).some((prop) => isPx(prop));

  if ((inverse && !isHidden) || (!inverse && isHidden)) {
    return;
  }

  let start: undefined | number;

  if (hasOverflow) {
    el.style.overflow = 'hidden';
  }

  if (inverse) {
    el.style.display = display === 'none' ? 'block' : display;
  }

  function step(timestamp: number) {
    if (!start) start = timestamp;

    const elapsed = timestamp - start;

    Object.entries(props.step).forEach(([prop, v]) => {
      const value = inverse ? v * elapsed : props.el[prop] - v * elapsed;

      el.style[prop as any] = isPx(prop) ? `${value}px` : value.toString();
    });

    if (elapsed >= duration) {
      Object.keys(props.step).forEach((prop) => {
        el.style[prop as any] = '';
      });

      if (hasOverflow) {
        el.style.overflow = '';
      }

      if (!inverse) {
        el.style.display = 'none';
      }

      if (validate<Function>(callback, 'function')) {
        callback.call(el, el);
      }
    } else {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
};

export type DomAnimateProps = Record<'el' | 'step', Record<string, number>>;

export type DomAnimateHook = (
  effect: typeof effectNames[number],
  duration: number | string | Function | undefined,
  callback: Function | undefined
) => IDomElement;

export default (function (this: IDomElement, effect, duration, callback) {
  if (!effectNames.includes(effect)) {
    return this;
  }

  const [name, direction] = fromCamelCaseToArray(effect) as [
    typeof effectTypes[number],
    typeof effectDirections[number],
  ];

  let parsedDuration = validate<number>(duration, 'number') ? duration : 400;

  if (
    validate<string>(duration, 'string')
    && !Number.isNaN(parseFloat(duration))
  ) {
    parsedDuration = parseFloat(duration);
  }

  return this.each((el) => {
    const inverse = getComputedStyle(el).display === 'none';
    const cb = validate<Function>(duration, 'function') ? duration : callback;
    const display = getDisplay(el);

    if (inverse) {
      el.style.display = display === 'none' ? 'block' : display;
    }

    const props = effects[name].props.reduce(
      (acc, prop: string) => {
        const rawValue = ['width', 'height'].includes(prop)
          ? getComputedValue(el, prop)
          : getComputedStyle(el).getPropertyValue(prop);

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
      animate(props, el, parsedDuration, cb);
    }

    if (direction === 'down' || direction === 'in') {
      animate(props, el, parsedDuration, cb, true);
    }

    if (direction === 'toggle') {
      animate(props, el, parsedDuration, cb, inverse);
    }
  });
} as DomAnimateHook);
