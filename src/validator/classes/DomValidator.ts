import * as methods from '@validator/methods';
import type { IDomValidatorMethods } from '@validator/methods';

export interface IDomValidator extends IDomValidatorMethods {}

export class DomValidator implements IDomValidator {
  private static instance: DomValidator;

  private constructor() {}

  public static getInstance(): DomValidator {
    if (!DomValidator.instance) {
      DomValidator.instance = new DomValidator();
    }

    return DomValidator.instance;
  }

  public readonly every = methods.every;

  public readonly some = methods.some;

  public readonly validate = methods.validate;
}
