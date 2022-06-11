import checkEffect from './utils/checkEffect';
import checkEvent from './utils/checkEvent';
import getElement from './utils/getElement';
import getElements from './utils/getElements';
import getStyle from './utils/getStyle';
import toDashCase from './utils/toDashCase';
import toNumber from './utils/toNumber';
import triggerEvent from './utils/triggerEvent';

declare global {
  declare function checkEffect(): typeof checkEffect;

  declare function checkEvent(): typeof checkEvent;

  declare function getElement(): typeof getElement;

  declare function getElements(): typeof getElements;

  declare function getStyle(): typeof getStyle;

  declare function toDashCase(): typeof toDashCase;

  declare function toNumber(): typeof toNumber;

  declare function triggerEvent(): typeof triggerEvent;
}

export {
  checkEffect,
  checkEvent,
  getElement,
  getElements,
  getStyle,
  toDashCase,
  toNumber,
  triggerEvent,
};
