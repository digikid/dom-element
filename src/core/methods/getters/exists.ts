import { type IDomElement } from '@core/classes/DomElement';

export type ExistsMethod = () => boolean;

export default (function (this: IDomElement) {
  return this.length > 0;
} as ExistsMethod);
