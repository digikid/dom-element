import addClass, {
  DomAddClassMethod,
} from '@core/methods/manipulation/addClass';
import attr, { DomAttrMethod } from '@core/methods/manipulation/attr';
import clear, { DomClearMethod } from '@core/methods/manipulation/clear';
import clone, { DomCloneMethod } from '@core/methods/manipulation/clone';
import each, { DomEachMethod } from '@core/methods/manipulation/each';
import empty, { DomEmptyMethod } from '@core/methods/manipulation/empty';
import html, { DomHtmlMethod } from '@core/methods/manipulation/html';
import outerHtml, {
  DomOuterHtmlMethod,
} from '@core/methods/manipulation/outerHtml';
import prop, { DomPropMethod } from '@core/methods/manipulation/prop';
import remove, { DomRemoveMethod } from '@core/methods/manipulation/remove';
import removeAttr, {
  DomRemoveAttrMethod,
} from '@core/methods/manipulation/removeAttr';
import removeClass, {
  DomRemoveClassMethod,
} from '@core/methods/manipulation/removeClass';
import removeProp, {
  DomRemovePropMethod,
} from '@core/methods/manipulation/removeProp';
import replaceWith, {
  DomReplaceWithMethod,
} from '@core/methods/manipulation/replaceWith';
import text, { DomTextMethod } from '@core/methods/manipulation/text';
import toggleClass, {
  DomToggleClassMethod,
} from '@core/methods/manipulation/toggleClass';
import unwrap, { DomUnwrapMethod } from '@core/methods/manipulation/unwrap';
import val, { DomValMethod } from '@core/methods/manipulation/val';

export interface IDomManipulationMethods {
  readonly addClass: DomAddClassMethod;
  readonly attr: DomAttrMethod;
  readonly clear: DomClearMethod;
  readonly clone: DomCloneMethod;
  readonly each: DomEachMethod;
  readonly empty: DomEmptyMethod;
  readonly html: DomHtmlMethod;
  readonly outerHtml: DomOuterHtmlMethod;
  readonly prop: DomPropMethod;
  readonly remove: DomRemoveMethod;
  readonly removeAttr: DomRemoveAttrMethod;
  readonly removeClass: DomRemoveClassMethod;
  readonly removeProp: DomRemovePropMethod;
  readonly replaceWith: DomReplaceWithMethod;
  readonly text: DomTextMethod;
  readonly toggleClass: DomToggleClassMethod;
  readonly unwrap: DomUnwrapMethod;
  readonly val: DomValMethod;
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
} as IDomManipulationMethods;
