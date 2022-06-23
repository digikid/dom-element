import dimension, {
  IDomDimensionMethods,
} from '@core/methods/generated/dimension';
import effects, { IDomEffectMethods } from '@core/methods/generated/effect';
import event, { IDomEventMethods } from '@core/methods/generated/event';
import eventThrottle, {
  IDomEventDeferMethods,
} from '@core/methods/generated/eventDefer';
import filter, { IDomFilterMethods } from '@core/methods/generated/filter';
import move, { IDomMoveMethods } from '@core/methods/generated/move';
import ordering, {
  IDomOrderingMethods,
} from '@core/methods/generated/ordering';
import outerDimension, {
  IDomOuterDimensionMethods,
} from '@core/methods/generated/outerDimension';
import trigger, { IDomTriggerMethods } from '@core/methods/generated/trigger';
import wrap, { IDomWrapMethods } from '@core/methods/generated/wrap';

export interface IDomGeneratedMethods
  extends IDomDimensionMethods,
  IDomEffectMethods,
  IDomEventMethods,
  IDomEventDeferMethods,
  IDomFilterMethods,
  IDomMoveMethods,
  IDomOrderingMethods,
  IDomOuterDimensionMethods,
  IDomTriggerMethods,
  IDomWrapMethods {}

export default {
  ...dimension,
  ...effects,
  ...event,
  ...eventThrottle,
  ...filter,
  ...move,
  ...ordering,
  ...outerDimension,
  ...trigger,
  ...wrap,
};
