import { DomStoreHandlers } from '@src/store';
import { IDomStore } from '@store/classes/DomStore';

export type DomStoreGetAllHandlersMethod = (name: string) => Function[];

export default (field: DomStoreHandlers) => function (this: IDomStore, name) {
  const handlers = window._domElementStore[field];

  if (name in handlers) {
    return Object.values(handlers[name]).reduce((acc, functions) => {
      acc.push(...functions);

      return acc;
    }, []);
  }

  return [];
} as DomStoreGetAllHandlersMethod;
