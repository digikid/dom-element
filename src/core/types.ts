export type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;

export type ElementsCollection = HTMLElement[];
export type MethodCallback = (...args: any[]) => void;
export type PlainObject = Record<string, Primitive>;
export type CustomEventData = PlainObject | any[] | string | number | boolean;
export type CustomEventTarget = HTMLElement | Window | Document;
