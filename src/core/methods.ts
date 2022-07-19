import css, { type ICssMethods } from '@core/methods/css';
import data, { type IDataMethods } from '@core/methods/data';
import events, { type IEventsMethods } from '@core/methods/events';
import generated, { type IGeneratedMethods } from '@core/methods/generated';
import getters, { type IGettersMethods } from '@core/methods/getters';
import manipulation, {
  type IManipulationMethods,
} from '@core/methods/manipulation';
import traversing, { type ITraversingMethods } from '@core/methods/traversing';

export interface IMethods
  extends ICssMethods,
  IDataMethods,
  IEventsMethods,
  IGeneratedMethods,
  IGettersMethods,
  IManipulationMethods,
  ITraversingMethods {}

export default {
  ...css,
  ...data,
  ...generated,
  ...events,
  ...getters,
  ...manipulation,
  ...traversing,
} as IMethods;
