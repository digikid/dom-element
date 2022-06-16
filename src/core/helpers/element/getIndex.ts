export default (el: HTMLElement | null): number => {
  if (el) {
    const parent = el.parentElement;

    if (parent) {
      return Array.from(parent.children).indexOf(el);
    }

    return -1;
  }

  return -1;
};
