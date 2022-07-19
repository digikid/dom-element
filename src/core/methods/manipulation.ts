import addClass, {
  type AddClassMethod,
} from '@core/methods/manipulation/addClass';
import attr, { type AttrMethod } from '@core/methods/manipulation/attr';
import clear, { type ClearMethod } from '@core/methods/manipulation/clear';
import clone, { type CloneMethod } from '@core/methods/manipulation/clone';
import each, { type EachMethod } from '@core/methods/manipulation/each';
import empty, { type EmptyMethod } from '@core/methods/manipulation/empty';
import html, { type HtmlMethod } from '@core/methods/manipulation/html';
import outerHtml, {
  type OuterHtmlMethod,
} from '@core/methods/manipulation/outerHtml';
import prop, { type PropMethod } from '@core/methods/manipulation/prop';
import remove, { type RemoveMethod } from '@core/methods/manipulation/remove';
import removeAttr, {
  type RemoveAttrMethod,
} from '@core/methods/manipulation/removeAttr';
import removeClass, {
  type RemoveClassMethod,
} from '@core/methods/manipulation/removeClass';
import removeProp, {
  type RemovePropMethod,
} from '@core/methods/manipulation/removeProp';
import replaceWith, {
  type ReplaceWithMethod,
} from '@core/methods/manipulation/replaceWith';
import text, { type TextMethod } from '@core/methods/manipulation/text';
import toggleClass, {
  type ToggleClassMethod,
} from '@core/methods/manipulation/toggleClass';
import unwrap, { type UnwrapMethod } from '@core/methods/manipulation/unwrap';
import val, { type ValMethod } from '@core/methods/manipulation/val';

export interface IManipulationMethods {
  readonly addClass: AddClassMethod;
  readonly attr: AttrMethod;
  readonly clear: ClearMethod;
  readonly clone: CloneMethod;
  readonly each: EachMethod;
  readonly empty: EmptyMethod;
  readonly html: HtmlMethod;
  readonly outerHtml: OuterHtmlMethod;
  readonly prop: PropMethod;
  readonly remove: RemoveMethod;
  readonly removeAttr: RemoveAttrMethod;
  readonly removeClass: RemoveClassMethod;
  readonly removeProp: RemovePropMethod;
  readonly replaceWith: ReplaceWithMethod;
  readonly text: TextMethod;
  readonly toggleClass: ToggleClassMethod;
  readonly unwrap: UnwrapMethod;
  readonly val: ValMethod;
}

export default {
  addClass,
  attr,
  clear,
  clone,
  each,
  empty,
  html,
  outerHtml,
  prop,
  remove,
  removeAttr,
  removeClass,
  removeProp,
  replaceWith,
  text,
  toggleClass,
  unwrap,
  val,
} as IManipulationMethods;
