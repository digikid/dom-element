import * as methods from '@validator/methods';
import type { IValidatorMethods } from '@validator/methods';

export interface IValidator extends IValidatorMethods {}

export class Validator implements IValidator {
  private static instance: Validator;

  private constructor() {}

  public static getInstance(): Validator {
    if (!Validator.instance) {
      Validator.instance = new Validator();
    }

    return Validator.instance;
  }

  public readonly every = methods.every;

  public readonly some = methods.some;

  public readonly validate = methods.validate;
}
