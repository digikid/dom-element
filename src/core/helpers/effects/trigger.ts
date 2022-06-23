import { DomCallback } from '@core/types';
import { validate } from '@src/validator';
import { DomAnimateProps } from '@core/helpers/effects/bind';
import { getComputedValue, getDisplayValue, isPx } from '@core/helpers/css';

export default (
  props: DomAnimateProps,
  el: HTMLElement,
  duration: number,
  callback: DomCallback | undefined,
  inverse = false,
) => {
  const display = getComputedValue(el, 'display', true);
  const isHidden = getDisplayValue(el) === 'none';
  const hasOverflow = Object.keys(props.el)
    .some((prop) => isPx(prop));

  if ((inverse && !isHidden) || (!inverse && isHidden)) {
    return;
  }

  let start: undefined | number;

  if (hasOverflow) {
    el.style.setProperty('overflow', 'hidden');
  }

  if (inverse) {
    const displayValue = display === 'none' ? 'block' : display;

    el.style.setProperty('display', displayValue);
  }

  function step(timestamp: number) {
    if (!start) start = timestamp;

    const elapsed = timestamp - start;

    Object.entries(props.step)
      .forEach(([prop, v]) => {
        const value = inverse ? v * elapsed : props.el[prop] - v * elapsed;
        const stringValue = isPx(prop) ? `${value}px` : value.toString();

        el.style.setProperty(prop, stringValue);
      });

    if (elapsed >= duration) {
      Object.keys(props.step)
        .forEach((prop) => {
          el.style.setProperty(prop, null);
        });

      if (hasOverflow) {
        el.style.setProperty('overflow', null);
      }

      if (!inverse) {
        el.style.setProperty('display', 'none');
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
