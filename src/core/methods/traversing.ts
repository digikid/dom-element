import add, { DomAddMethod } from '@core/methods/traversing/add';
import children, { DomChildrenMethod } from '@core/methods/traversing/children';
import closest, { DomClosestMethod } from '@core/methods/traversing/closest';
import eq, { DomEqMethod } from '@core/methods/traversing/eq';
import find, { DomFindMethod } from '@core/methods/traversing/find';
import has, { DomHasMethod } from '@core/methods/traversing/has';
import next, { DomNextMethod } from '@core/methods/traversing/next';
import parent, { DomParentMethod } from '@core/methods/traversing/parent';
import prev, { DomPrevMethod } from '@core/methods/traversing/prev';
import siblings, { DomSiblingsMethod } from '@core/methods/traversing/siblings';

export interface IDomTraversingMethods {
  readonly add: DomAddMethod;
  readonly children: DomChildrenMethod;
  readonly closest: DomClosestMethod;
  readonly eq: DomEqMethod;
  readonly find: DomFindMethod;
  readonly has: DomHasMethod;
  readonly next: DomNextMethod;
  readonly parent: DomParentMethod;
  readonly prev: DomPrevMethod;
  readonly siblings: DomSiblingsMethod;
}

export default {
  add,
  children,
  closest,
  eq,
  find,
  has,
  next,
  parent,
  prev,
  siblings,
} as IDomTraversingMethods;
