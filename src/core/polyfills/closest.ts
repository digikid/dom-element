export default () => {
  if (typeof Element !== 'undefined') {
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (selector: string) {
        let el = this;

        do {
          if (el.matches(selector)) {
            return el;
          }

          el = <Element>(el.parentElement || el.parentNode);
        } while (el !== null && el.nodeType === 1);

        return null;
      };
    }
  }
};
