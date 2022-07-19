export const debounce = (fn: Function, delay: number): Function => {
  let timeout: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    const context = this;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const throttle = (fn: Function, delay: number): Function => {
  let timeout: ReturnType<typeof setTimeout>;
  let timestamp: number;

  return function (this: any, ...args: any[]) {
    const context = this;

    const run = () => {
      fn.apply(context, args);

      timestamp = Date.now();
    };

    if (timestamp) {
      const ms = delay - (Date.now() - timestamp);

      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (Date.now() - timestamp >= delay) {
          run();
        }
      }, ms);
    } else {
      run();
    }
  };
};
