import { some, validate } from '@src/validator';
import { store } from '@src/store';

export default (function (this: EventTarget, e: Event): void {
  const target = validate<Window>(e.currentTarget, 'window')
    ? e.currentTarget
    : e.target;

  const ids: string[] = [];
  const handlers: Function[] = [];
  const storedHandlers = store.get('handlers')[e.type];

  if (target && storedHandlers) {
    if (validate<Window>(target, 'window')) {
      ids.push('window');
    }

    if (some<HTMLElement | Document>(target, 'htmlElement', 'document')) {
      ids.push(store.getElementId(target));

      if (!ids.includes('document')) {
        ids.push('document');
      }
    }

    ids.forEach((id) => {
      if (id in storedHandlers) {
        handlers.push(...storedHandlers[id]);
      }
    });

    handlers.forEach((handler) => handler.call(target, e));
  }
} as EventListener);
