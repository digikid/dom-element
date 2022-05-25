import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

import reduce from '@core/hooks/reduce';

export type DomMapObject = Record<string, any>;
export type DomMapGetter = (el: HTMLElement, name: string) => any;
export type DomMapSetter = (el: HTMLElement, name: string, value: any) => void;
export type DomMapRootGetter = (el: HTMLElement, name: any) => any;
export type DomMapRootSetter = (el: HTMLElement, name: any) => void;
export type DomMapHook = (
  name: string | DomMapObject | null | undefined,
  value: any,
  getter: DomMapGetter,
  setter: DomMapSetter,
  rootGetter?: DomMapRootGetter,
  rootSetter?: DomMapRootSetter
) => any;

export default (function (
  this: IDomElement,
  name,
  value,
  getter,
  setter,
  rootGetter?,
  rootSetter?,
): IDomElement | any {
  if (
    validate<string>(name, 'string', 'truthy')
    || validate<DomMapObject>(name, 'object')
  ) {
    if (validate<DomMapObject>(name, 'object') || validate(value)) {
      const params = validate<DomMapObject>(name, 'object')
        ? name
        : {
          [name]: value,
        };

      return this.each((el) => {
        Object.entries(params).forEach(([name, value]) => {
          if (validate(value)) {
            setter(el, name, value);
          }
        });
      });
    }

    return reduce.call(this, (el) => getter(el, name));
  }

  if (validate<DomMapRootGetter>(rootGetter, 'function')) {
    return reduce.call(this, (el) => rootGetter(el, name));
  }

  if (validate<DomMapRootSetter>(rootSetter, 'function')) {
    return this.each((el) => rootSetter(el, name));
  }

  return this;
} as DomMapHook);
