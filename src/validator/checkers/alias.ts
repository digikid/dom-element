import * as aliases from '@core/aliases';

export default (v: any): boolean => Object.keys(aliases).includes(v);
