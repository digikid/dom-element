import off, { DomOffMethod } from '@core/methods/events/off';
import on, { DomOnMethod } from '@core/methods/events/on';
import ready, { DomReadyMethod } from '@core/methods/events/ready';

export interface IDomEventsMethods {
  readonly off: DomOffMethod;
  readonly on: DomOnMethod;
  readonly ready: DomReadyMethod;
}

export default {
  off,
  on,
  ready,
} as IDomEventsMethods;
