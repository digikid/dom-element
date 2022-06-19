export type DomPrimitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;

export type DomPlainObject = Record<string, DomPrimitive>;
export type DomEventData = DomPlainObject | any[] | string | number | boolean;
export type DomEventTarget = HTMLElement | Window | Document;
export type DomCollection = HTMLElement[];
export type DomCallback = (...args: any[]) => void;
