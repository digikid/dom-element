import every from '@validator/methods/every';
import some from '@validator/methods/some';
import validate from '@validator/methods/validate';

export type DomValidatorMethod = <T>(v: any, ...ids: string[]) => v is T;

export interface IDomValidatorMethods {
  readonly every: DomValidatorMethod;
  readonly some: DomValidatorMethod;
  readonly validate: DomValidatorMethod;
}

export { every, some, validate };
