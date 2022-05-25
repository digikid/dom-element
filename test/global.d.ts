declare let $: Function;
declare let checkEvent: (
  element: string | Window,
  event: string,
  cb: () => void
) => boolean;
declare let getElement: (selector: string) => HTMLElement;
declare let getElements: (selector: string) => HTMLElement[];
declare let getStyle: (
  selector: string,
  property?: string
) => null | string | CSSStyleDeclaration;
declare let toDashCase: (string) => string;
declare let toNumber: (str: string, units?: string[]) => number | null;
declare let triggerEvent: (el: HTMLElement | Window, event: string) => void;
