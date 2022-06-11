export default (el: HTMLElement | Window, event: string): void => {
  event.split(' ').forEach((event) => {
    const e = document.createEvent('HTMLEvents');
    e.initEvent(event, true, false);
    el.dispatchEvent(e);
  });
};
