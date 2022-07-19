import data, { type DataMethod } from '@core/methods/data/data';

export interface IDataMethods {
  readonly data: DataMethod;
}

export default {
  data,
} as IDataMethods;
