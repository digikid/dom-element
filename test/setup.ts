import { readFileSync } from 'fs';
import $, { IDomConstructor } from '@src/index';
import * as utils from './utils';

declare global {
  declare let template: string;
  declare let $: IDomConstructor;
}

const template = readFileSync('test/index.html', 'utf8').toString();

jest.dontMock('fs');

Object.defineProperties(window.HTMLElement.prototype, {
  offsetLeft: {
    get() {
      return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
    },
  },
  offsetTop: {
    get() {
      return parseFloat(window.getComputedStyle(this).marginTop) || 0;
    },
  },
  offsetHeight: {
    get() {
      return parseFloat(window.getComputedStyle(this).height) || 0;
    },
  },
  offsetWidth: {
    get() {
      return parseFloat(window.getComputedStyle(this).width) || 0;
    },
  },
});

global.$ = $;
global.template = template;

Object.entries(utils).forEach(([id, fn]) => {
  global[id] = fn;
});

beforeEach(() => {
  document.documentElement.innerHTML = template;
});

afterEach(() => {
  jest.resetModules();
});
