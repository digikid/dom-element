import { IDomElement } from '@core/classes/DomElement';
import { reduce } from '@core/hooks';
import { some, validate } from '@src/validator';

export type DomValMethodValue = null | string | number | string[];
export type DomValMethod = (
  value?: DomValMethodValue
) => IDomElement | string | null;

export default (function (this: IDomElement, value?) {
  if (some<DomValMethodValue>(value, 'null', 'string', 'number', 'array')) {
    return this.each((el) => {
      if ('value' in el) {
        if (validate<string[]>(value, 'array')) {
          if (some<HTMLInputElement>(el, 'radioElement', 'checkboxElement')) {
            el.checked = value.includes(el.value);
          }

          if (validate<HTMLSelectElement>(el, 'selectElement')) {
            const options = Array.from(el.options);
            const values = options.map((option) => option.value);

            if (el.multiple) {
              options.forEach((option) => {
                option.selected = value.includes(option.value);
              });
            } else {
              el.value = [...value].reverse().find((value) => values.includes(value))
                || '';
            }
          }
        } else if (validate<null>(value, 'null')) {
          if (validate<HTMLSelectElement>(el, 'selectElement')) {
            const selectedIndex = Array.from(el.options).findIndex(
              (option) => option.getAttribute('selected') !== null,
            );

            el.selectedIndex = selectedIndex;
          } else {
            (el as HTMLInputElement).value = '';
          }
        } else if (validate<number>(value, 'number')) {
          (el as HTMLInputElement).value = value.toString();
        } else {
          (el as HTMLInputElement).value = value;
        }
      }
    });
  }

  return reduce.call(this, (el) => {
    if (validate<HTMLSelectElement>(el, 'selectElement') && el.multiple) {
      return Array.from(el.options)
        .filter(({ selected }) => selected)
        .map(({ value }) => value);
    }

    return 'value' in el ? (el as HTMLInputElement).value : null;
  });
} as DomValMethod);
