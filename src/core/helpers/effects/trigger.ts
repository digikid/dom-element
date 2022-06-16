import { validate } from '@src/validator';
import { DomAnimateProps } from '@core/helpers/effects/bind';
import { getComputedValue, getDisplayValue, isPx } from '@core/helpers/css';

export default (
  props: DomAnimateProps,
  el: HTMLElement,
  duration: number,
  callback: Function | undefined,
  inverse = false,
) => {
  const display = getComputedValue(el, 'display', true);
  const isHidden = getDisplayValue(el) === 'none';
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
