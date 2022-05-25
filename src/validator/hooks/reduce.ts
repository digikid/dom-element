import { capitalize } from '@utils/string';

import * as checkers from '@validator/checkers';

export type DomValidatorReduceCallback = (
  acc: boolean,
  current: boolean
) => boolean;

export type DomValidatorReduce = <T>(
  v: T,
  ids: string[],
  cb: DomValidatorReduceCallback,
  initialValue?: boolean,
  required?: string[]
) => boolean;

export default (function <T>(
  v: T,
  ids: string[],
  cb: DomValidatorReduceCallback,
  initialValue: boolean = false,
  required: string[] = [],
) {
  const initials = required.reduce((acc: string[], id: string) => {
    if (!ids.includes(id)) {
      acc.push(id);
    }

    return acc;
  }, []);

  return [...initials, ...ids].reduce(
    (isValid: boolean, id: string): boolean => {
      const key = `is${capitalize(id)}`;

      if (key in checkers) {
        return cb(isValid, checkers[key as keyof typeof checkers](v));
      }

      return isValid;
    },
    initialValue,
  );
} as DomValidatorReduce);
