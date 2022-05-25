import reduce from '@validator/hooks/reduce';

export type DomValidatorCreateCallback = (
  acc: boolean,
  current: boolean
) => boolean;

export type DomValidatorMethod = <T>(v: any, ...ids: string[]) => v is T;

export default (function (
  cb: DomValidatorCreateCallback,
  initialValue: boolean = false,
  required: string[] = [],
): DomValidatorMethod {
  return <T>(v: any, ...ids: string[]): v is T => reduce<T>(v, ids, cb, initialValue, required);
});
