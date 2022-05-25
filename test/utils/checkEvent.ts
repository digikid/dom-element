export default (
  element: string | Window,
  event: string,
  cb: () => void,
): boolean => {
  const el = typeof element === 'string' ? getElement(element) : window;

  const context = {
    check: false,
    el,
    event,
  };

  cb.call(context);

  return context.check;
};
