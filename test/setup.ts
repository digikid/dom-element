import { readFileSync } from 'fs';
import $ from '@src/index';
import * as utils from './utils';

const html = readFileSync('test/index.html', 'utf8');

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

(global as any).$ = $;

Object.entries(utils).forEach(([id, fn]) => {
  global[id] = fn;
});

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
  jest.resetModules();
});
