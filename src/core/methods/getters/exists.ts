import { IDomElement } from '@core/classes/DomElement';

export type DomExistsMethod = () => boolean;

export default (function (this: IDomElement) {
  return this.items.length > 0;
} as DomExistsMethod);
