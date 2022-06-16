import { create } from '@validator/helpers';

export default create((acc, current) => acc || current);
