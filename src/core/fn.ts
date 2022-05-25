import get from '@core/fn/get';
import set from '@core/fn/set';
import deleteProperty from '@core/fn/deleteProperty';

export default new Proxy(
  {},
  {
    get,
    set,
    deleteProperty,
  },
);
