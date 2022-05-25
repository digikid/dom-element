import { DomValidator } from '@validator/classes/DomValidator';

const validator = DomValidator.getInstance();

const { every, some, validate } = validator;

export { every, some, validate };
