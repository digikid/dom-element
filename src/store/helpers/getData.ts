import { getId } from '@store/helpers';

export default (idOrElement: string | HTMLElement): Record<string, any> => {
  const id = getId(idOrElement);

  const { data } = window._domElementStore;

  if (!(id in data)) {
    data[id] = {};
  }

  return data[id];
};
