import css, { IDomCssMethods } from '@core/methods/css';
import data, { IDomDataMethods } from '@core/methods/data';
import events, { IDomEventsMethods } from '@core/methods/events';
import generated, { IDomGeneratedMethods } from '@core/methods/generated';
import getters, { IDomGettersMethods } from '@core/methods/getters';
import manipulation, {
  IDomManipulationMethods,
} from '@core/methods/manipulation';
import traversing, { IDomTraversingMethods } from '@core/methods/traversing';

export interface IDomMethods
  extends IDomCssMethods,
  IDomDataMethods,
  IDomEventsMethods,
  IDomGeneratedMethods,
  IDomGettersMethods,
  IDomManipulationMethods,
  IDomTraversingMethods {}

export default {
  ...css,
  ...data,
  ...generated,
  ...events,
  ...getters,
  ...manipulation,
  ...traversing,
} as IDomMethods;
