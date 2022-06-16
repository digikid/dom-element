import data, { DomDataMethod } from '@core/methods/data/data';

export interface IDomDataMethods {
  readonly data: DomDataMethod;
}

export default {
  data,
} as IDomDataMethods;
