import { CustomEventTarget } from '@core/types';
import { store } from '@src/store';
import { some } from '@src/validator';

import { isMatches } from '@core/helpers/element';
import { type Entries } from '@utils/object';

export default (el: CustomEventTarget, event: string): void => {
  event.split(' ').forEach((event) => {
    const storeId = store.getElementId(el);
    const target = [document, el];

    const stored = {
      handlers: store.getAllHandlers(event),
      listeners: store.getAllListeners(event),
    };

    const ids = (Object.entries(stored) as Entries<typeof stored>).reduce(
      (acc, [type, data]) => {
        acc[type] = Object.keys(data).filter((id) => {
          const check = storeId === id;

          return some<Window | Document>(el, 'window', 'documentElement')
            ? check
            : check || isMatches(el, id);
        });

        return acc;
      },
      {} as Record<keyof typeof stored, string[]>,
    );

    ids.handlers.forEach((id) => store.removeHandlers(id, event));

    ids.listeners.forEach((id) => {
      stored.listeners[id].forEach((listener) => target.forEach((target) => target.removeEventListener(event, listener as EventListener)));
    });
  });
};
