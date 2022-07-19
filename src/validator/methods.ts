import every from '@validator/methods/every';
import some from '@validator/methods/some';
import validate from '@validator/methods/validate';

export type ValidatorMethod = <T>(v: any, ...ids: string[]) => v is T;

export interface IValidatorMethods {
  readonly every: ValidatorMethod;
  readonly some: ValidatorMethod;
  readonly validate: ValidatorMethod;
}

export { every, some, validate };
