export default (
  name: string,
  selector: string,
  start: () => void,
  duration?: number,
  cb?: Function,
): Promise<string> => {
  start.apply(
    {
      name,
      selector,
    },
    [duration, cb],
  );

  return new Promise<string>((resolve, reject) => {
    if (typeof start !== 'function') {
      reject();
    }

    const timeout = setTimeout(() => {
      const el = document.querySelector(selector);
      const display = getComputedStyle(el, null).getPropertyValue('display');

      resolve(display);

      clearTimeout(timeout);
    }, (duration ?? 400) + 50);
  });
};

declare global {
  function checkEffect(
    name: string,
    selector: string,
    start: () => void,
    duration?: number,
    cb?: Function
  ): Promise<string>;
}
