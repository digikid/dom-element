export default (
  selector: string,
  property?: string,
): null | string | CSSStyleDeclaration => {
  const el = document.querySelector(selector);

  if (!el) {
    return null;
  }

  const computedStyle = getComputedStyle(el, null);

  return property ? computedStyle.getPropertyValue(property) : computedStyle;
};

declare global {
  function getStyle(
    selector: string,
    property?: string
  ): null | string | CSSStyleDeclaration;
}
