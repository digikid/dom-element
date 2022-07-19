import { Validator } from '@validator/classes/Validator';

const validator = Validator.getInstance();

const { every, some, validate } = validator;

export { every, some, validate };
