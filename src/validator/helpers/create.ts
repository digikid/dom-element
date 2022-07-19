import reduce from '@validator/helpers/reduce';

export type ValidatorMethod = <T>(v: any, ...ids: string[]) => v is T;

export default (
  cb: (acc: boolean, current: boolean) => boolean,
  initialValue: boolean = false,
  required: string[] = [],
): ValidatorMethod => <T>(v: any, ...ids: string[]): v is T => reduce<T>(v, ids, cb, initialValue, required);
