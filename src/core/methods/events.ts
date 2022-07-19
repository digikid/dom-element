import off, { type OffMethod } from '@core/methods/events/off';
import on, { type OnMethod } from '@core/methods/events/on';
import ready, { type ReadyMethod } from '@core/methods/events/ready';

export interface IEventsMethods {
  readonly off: OffMethod;
  readonly on: OnMethod;
  readonly ready: ReadyMethod;
}

export default {
  off,
  on,
  ready,
} as IEventsMethods;
