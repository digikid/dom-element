export type Primitive =
  | bigint
  | boolean
  | null
  | number
  | string
  | symbol
  | undefined;

export type DomPlainObject = Record<string, Primitive>;
export type DomEventData = DomPlainObject | any[] | string | number | boolean;
