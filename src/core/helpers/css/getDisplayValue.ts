import { getComputedValue } from '@core/helpers/css';

export default (el: HTMLElement): string => el.style.display || getComputedValue(el, 'display', true);
