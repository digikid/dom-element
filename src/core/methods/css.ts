import css, { DomCssMethod } from '@core/methods/css/css';
import hide, { DomHideMethod } from '@core/methods/css/hide';
import offset, { DomOffsetMethod } from '@core/methods/css/offset';
import position, { DomPositionMethod } from '@core/methods/css/position';
import rect, { DomRectMethod } from '@core/methods/css/rect';
import show, { DomShowMethod } from '@core/methods/css/show';
import style, { DomStyleMethod } from '@core/methods/css/style';

export interface IDomCssMethods {
  readonly css: DomCssMethod;
  readonly hide: DomHideMethod;
  readonly offset: DomOffsetMethod;
  readonly position: DomPositionMethod;
  readonly rect: DomRectMethod;
  readonly show: DomShowMethod;
  readonly style: DomStyleMethod;
}

export default {
  css,
  hide,
  offset,
  position,
  rect,
  show,
  style,
} as IDomCssMethods;
