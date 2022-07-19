import dimension, {
  type IDimensionMethods,
} from '@core/methods/generated/dimension';
import effects, { type IEffectMethods } from '@core/methods/generated/effect';
import event, { type IEventMethods } from '@core/methods/generated/event';
import eventThrottle, {
  type IEventDeferMethods,
} from '@core/methods/generated/eventDefer';
import filter, { type IFilterMethods } from '@core/methods/generated/filter';
import move, { type IMoveMethods } from '@core/methods/generated/move';
import ordering, {
  type IOrderingMethods,
} from '@core/methods/generated/ordering';
import outerDimension, {
  type IOuterDimensionMethods,
} from '@core/methods/generated/outerDimension';
import trigger, { type ITriggerMethods } from '@core/methods/generated/trigger';
import wrap, { type IWrapMethods } from '@core/methods/generated/wrap';

export interface IGeneratedMethods
  extends IDimensionMethods,
  IEffectMethods,
  IEventMethods,
  IEventDeferMethods,
  IFilterMethods,
  IMoveMethods,
  IOrderingMethods,
  IOuterDimensionMethods,
  ITriggerMethods,
  IWrapMethods {}

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
