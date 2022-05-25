import { create } from '@validator/hooks';

export default create((acc, current) => acc && current, true, ['defined']);
