export default () => {
  if (typeof Element !== 'undefined') {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector
        || Element.prototype.webkitMatchesSelector;
    }
  }
};
