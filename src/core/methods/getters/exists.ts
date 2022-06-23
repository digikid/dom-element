import { IDomElement } from '@core/classes/DomElement';

export type DomExistsMethod = () => boolean;

export default (function (this: IDomElement) {
  return this.collection.length > 0;
} as DomExistsMethod);
