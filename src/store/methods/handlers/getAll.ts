import { type StoreHandlers } from '@src/store';
import { type IStore } from '@store/classes/Store';

export type StoreAllHandlers = Record<string, Function[]>;
export type StoreGetAllHandlersMethod = (
  name: string
) => Record<string, Function[]>;

export default (field: StoreHandlers) => function (this: IStore, name) {
  const handlers = window._domElementStore[field];

  return name in handlers ? handlers[name] : {};
} as StoreGetAllHandlersMethod;
