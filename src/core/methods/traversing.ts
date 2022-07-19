import add, { type AddMethod } from '@core/methods/traversing/add';
import children, {
  type ChildrenMethod,
} from '@core/methods/traversing/children';
import closest, { type ClosestMethod } from '@core/methods/traversing/closest';
import eq, { type EqMethod } from '@core/methods/traversing/eq';
import find, { type FindMethod } from '@core/methods/traversing/find';
import has, { type HasMethod } from '@core/methods/traversing/has';
import next, { type NextMethod } from '@core/methods/traversing/next';
import parent, { type ParentMethod } from '@core/methods/traversing/parent';
import prev, { type PrevMethod } from '@core/methods/traversing/prev';
import siblings, {
  type SiblingsMethod,
} from '@core/methods/traversing/siblings';

export interface ITraversingMethods {
  readonly add: AddMethod;
  readonly children: ChildrenMethod;
  readonly closest: ClosestMethod;
  readonly eq: EqMethod;
  readonly find: FindMethod;
  readonly has: HasMethod;
  readonly next: NextMethod;
  readonly parent: ParentMethod;
  readonly prev: PrevMethod;
  readonly siblings: SiblingsMethod;
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
} as ITraversingMethods;
