import { DomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { resolve } from '@core/helpers/methods';
import { getComputedValue } from '@core/helpers/css';
import { toDashCase } from '@core/utils/string';

export type DomCssMethod = (
  name: string | Record<string, string>,
  value?: string
) => DomElement | string;

export default resolve<string | null>(
  (el, name) => (name ? getComputedValue(el, name) : null),
  (el, name, value) => {
    if (validate<string | null>(value)) {
      el.style.setProperty(toDashCase(name), value);
    }
  },
) as DomCssMethod;
