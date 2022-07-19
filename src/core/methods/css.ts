import css, { type CssMethod } from '@core/methods/css/css';
import hide, { type HideMethod } from '@core/methods/css/hide';
import offset, { type OffsetMethod } from '@core/methods/css/offset';
import position, { type PositionMethod } from '@core/methods/css/position';
import rect, { type RectMethod } from '@core/methods/css/rect';
import show, { type ShowMethod } from '@core/methods/css/show';
import style, { type StyleMethod } from '@core/methods/css/style';

export interface ICssMethods {
  readonly css: CssMethod;
  readonly hide: HideMethod;
  readonly offset: OffsetMethod;
  readonly position: PositionMethod;
  readonly rect: RectMethod;
  readonly show: ShowMethod;
  readonly style: StyleMethod;
}

export default {
  css,
  hide,
  offset,
  position,
  rect,
  show,
  style,
} as ICssMethods;
