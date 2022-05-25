import add, { DomAddMethod } from '@core/methods/add';
import addClass, { DomAddClassMethod } from '@core/methods/addClass';
import after, { DomAfterMethod } from '@core/methods/after';
import append, { DomAppendMethod } from '@core/methods/append';
import appendTo, { DomAppendToMethod } from '@core/methods/appendTo';
import attr, { DomAttrMethod } from '@core/methods/attr';
import before, { DomBeforeMethod } from '@core/methods/before';
import blur, { DomBlurMethod } from '@core/methods/blur';
import change, { DomChangeMethod } from '@core/methods/change';
import children, { DomChildrenMethod } from '@core/methods/children';
import clear, { DomClearMethod } from '@core/methods/clear';
import click, { DomClickMethod } from '@core/methods/click';
import clone, { DomCloneMethod } from '@core/methods/clone';
import closest, { DomClosestMethod } from '@core/methods/closest';
import css, { DomCssMethod } from '@core/methods/css';
import data, { DomDataMethod } from '@core/methods/data';
import each, { DomEachMethod } from '@core/methods/each';
import empty, { DomEmptyMethod } from '@core/methods/empty';
import eq, { DomEqMethod } from '@core/methods/eq';
import exists, { DomExistsMethod } from '@core/methods/exists';
import filter, { DomFilterMethod } from '@core/methods/filter';
import find, { DomFindMethod } from '@core/methods/find';
import first, { DomFirstMethod } from '@core/methods/first';
import focus, { DomFocusMethod } from '@core/methods/focus';
import get, { DomGetMethod } from '@core/methods/get';
import has, { DomHasMethod } from '@core/methods/has';
import hasClass, { DomHasClassMethod } from '@core/methods/hasClass';
import height, { DomHeightMethod } from '@core/methods/height';
import hide, { DomHideMethod } from '@core/methods/hide';
import html, { DomHtmlMethod } from '@core/methods/html';
import index, { DomIndexMethod } from '@core/methods/index';
import insertAfter, { DomInsertAfterMethod } from '@core/methods/insertAfter';
import insertBefore, {
  DomInsertBeforeMethod,
} from '@core/methods/insertBefore';
import is, { DomIsMethod } from '@core/methods/is';
import last, { DomLastMethod } from '@core/methods/last';
import next, { DomNextMethod } from '@core/methods/next';
import not, { DomNotMethod } from '@core/methods/not';
import off, { DomOffMethod } from '@core/methods/off';
import offset, { DomOffsetMethod } from '@core/methods/offset';
import on, { DomOnMethod } from '@core/methods/on';
import outerHeight, { DomOuterHeightMethod } from '@core/methods/outerHeight';
import outerHtml, { DomOuterHtmlMethod } from '@core/methods/outerHtml';
import outerWidth, { DomOuterWidthMethod } from '@core/methods/outerWidth';
import parent, { DomParentMethod } from '@core/methods/parent';
import position, { DomPositionMethod } from '@core/methods/position';
import prepend, { DomPrependMethod } from '@core/methods/prepend';
import prependTo, { DomPrependToMethod } from '@core/methods/prependTo';
import prev, { DomPrevMethod } from '@core/methods/prev';
import prop, { DomPropMethod } from '@core/methods/prop';
import raw, { DomRawMethod } from '@core/methods/raw';
import ready, { DomReadyMethod } from '@core/methods/ready';
import rect, { DomRectMethod } from '@core/methods/rect';
import remove, { DomRemoveMethod } from '@core/methods/remove';
import removeAttr, { DomRemoveAttrMethod } from '@core/methods/removeAttr';
import removeClass, { DomRemoveClassMethod } from '@core/methods/removeClass';
import removeProp, { DomRemovePropMethod } from '@core/methods/removeProp';
import replaceWith, { DomReplaceWithMethod } from '@core/methods/replaceWith';
import resize, { DomResizeMethod } from '@core/methods/resize';
import scroll, { DomScrollMethod } from '@core/methods/scroll';
import show, { DomShowMethod } from '@core/methods/show';
import siblings, { DomSiblingsMethod } from '@core/methods/siblings';
import style, { DomStyleMethod } from '@core/methods/style';
import submit, { DomSubmitMethod } from '@core/methods/submit';
import text, { DomTextMethod } from '@core/methods/text';
import toggleClass, { DomToggleClassMethod } from '@core/methods/toggleClass';
import trigger, { DomTriggerMethod } from '@core/methods/trigger';
import unwrap, { DomUnwrapMethod } from '@core/methods/unwrap';
import val, { DomValMethod } from '@core/methods/val';
import width, { DomWidthMethod } from '@core/methods/width';
import wrap, { DomWrapMethod } from '@core/methods/wrap';
import wrapInner, { DomWrapInnerMethod } from '@core/methods/wrapInner';

export interface IDomMethods {
  readonly add: DomAddMethod;
  readonly addClass: DomAddClassMethod;
  readonly after: DomAfterMethod;
  readonly append: DomAppendMethod;
  readonly appendTo: DomAppendToMethod;
  readonly attr: DomAttrMethod;
  readonly before: DomBeforeMethod;
  readonly blur: DomBlurMethod;
  readonly change: DomChangeMethod;
  readonly children: DomChildrenMethod;
  readonly clear: DomClearMethod;
  readonly click: DomClickMethod;
  readonly clone: DomCloneMethod;
  readonly closest: DomClosestMethod;
  readonly css: DomCssMethod;
  readonly data: DomDataMethod;
  readonly each: DomEachMethod;
  readonly empty: DomEmptyMethod;
  readonly eq: DomEqMethod;
  readonly exists: DomExistsMethod;
  readonly filter: DomFilterMethod;
  readonly find: DomFindMethod;
  readonly first: DomFirstMethod;
  readonly focus: DomFocusMethod;
  readonly get: DomGetMethod;
  readonly has: DomHasMethod;
  readonly hasClass: DomHasClassMethod;
  readonly height: DomHeightMethod;
  readonly hide: DomHideMethod;
  readonly html: DomHtmlMethod;
  readonly index: DomIndexMethod;
  readonly insertAfter: DomInsertAfterMethod;
  readonly insertBefore: DomInsertBeforeMethod;
  readonly is: DomIsMethod;
  readonly last: DomLastMethod;
  readonly next: DomNextMethod;
  readonly not: DomNotMethod;
  readonly off: DomOffMethod;
  readonly offset: DomOffsetMethod;
  readonly on: DomOnMethod;
  readonly outerHeight: DomOuterHeightMethod;
  readonly outerHtml: DomOuterHtmlMethod;
  readonly outerWidth: DomOuterWidthMethod;
  readonly parent: DomParentMethod;
  readonly position: DomPositionMethod;
  readonly prepend: DomPrependMethod;
  readonly prependTo: DomPrependToMethod;
  readonly prev: DomPrevMethod;
  readonly prop: DomPropMethod;
  readonly raw: DomRawMethod;
  readonly ready: DomReadyMethod;
  readonly rect: DomRectMethod;
  readonly remove: DomRemoveMethod;
  readonly removeAttr: DomRemoveAttrMethod;
  readonly removeClass: DomRemoveClassMethod;
  readonly removeProp: DomRemovePropMethod;
  readonly replaceWith: DomReplaceWithMethod;
  readonly resize: DomResizeMethod;
  readonly scroll: DomScrollMethod;
  readonly show: DomShowMethod;
  readonly siblings: DomSiblingsMethod;
  readonly style: DomStyleMethod;
  readonly submit: DomSubmitMethod;
  readonly text: DomTextMethod;
  readonly toggleClass: DomToggleClassMethod;
  readonly trigger: DomTriggerMethod;
  readonly unwrap: DomUnwrapMethod;
  readonly val: DomValMethod;
  readonly width: DomWidthMethod;
  readonly wrap: DomWrapMethod;
  readonly wrapInner: DomWrapInnerMethod;
}

export {
  add,
  addClass,
  after,
  append,
  appendTo,
  attr,
  before,
  blur,
  change,
  children,
  clear,
  click,
  clone,
  closest,
  css,
  data,
  each,
  empty,
  eq,
  exists,
  filter,
  find,
  first,
  focus,
  get,
  has,
  hasClass,
  height,
  hide,
  html,
  index,
  insertAfter,
  insertBefore,
  is,
  last,
  next,
  not,
  off,
  offset,
  on,
  outerHeight,
  outerHtml,
  outerWidth,
  parent,
  position,
  prepend,
  prependTo,
  prev,
  prop,
  raw,
  ready,
  rect,
  remove,
  removeAttr,
  removeClass,
  removeProp,
  replaceWith,
  resize,
  scroll,
  show,
  siblings,
  style,
  submit,
  text,
  toggleClass,
  trigger,
  unwrap,
  val,
  width,
  wrap,
  wrapInner,
};
