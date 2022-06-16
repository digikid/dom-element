import getId from '@store/helpers/getId';

export default (
  idOrElement: string | HTMLElement,
  name: string,
): Record<string, EventListener[]> => {
  const id = getId(idOrElement);

  const {
    listeners,
    delegatedListeners,
  } = window._domElementStore;

  if (!(id in listeners)) {
    listeners[id] = {} as Record<string, any>;
  }

  if (!(name in listeners[id])) {
    listeners[id][name] = [];
  }

  if (!(id in delegatedListeners)) {
    delegatedListeners[id] = {} as Record<string, any>;
  }

  if (!(name in delegatedListeners[id])) {
    delegatedListeners[id][name] = [];
  }

  return {
    listeners: listeners[id][name],
    delegatedListeners: delegatedListeners[id][name],
  };
};
