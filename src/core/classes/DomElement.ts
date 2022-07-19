import { type ElementsCollection } from '@core/types';
import { parse } from '@core/helpers/selector';
import { store } from '@src/store';

import polyfills from '@core/polyfills';
import methods, { type IMethods } from '@core/methods';

export interface IDomElement extends IMethods {
  readonly selector: any;
  readonly collection: ElementsCollection;

  get length(): number;
}

export class DomElement implements IDomElement {
  public collection: ElementsCollection = [];

  constructor(public selector: any) {
    store.init(() => {
      Object.values(polyfills).forEach((polyfill) => polyfill());
    });

    this.collection = parse(selector);
  }

  get length() {
    return this.collection.length;
  }

  public readonly add = methods.add;

  public readonly addClass = methods.addClass;

  public readonly after = methods.after;

  public readonly append = methods.append;

  public readonly appendTo = methods.appendTo;

  public readonly attr = methods.attr;

  public readonly before = methods.before;

  public readonly blur = methods.blur;

  public readonly change = methods.change;

  public readonly children = methods.children;

  public readonly clear = methods.clear;

  public readonly click = methods.click;

  public readonly clone = methods.clone;

  public readonly closest = methods.closest;

  public readonly contextmenu = methods.contextmenu;

  public readonly css = methods.css;

  public readonly data = methods.data;

  public readonly dblclick = methods.dblclick;

  public readonly each = methods.each;

  public readonly empty = methods.empty;

  public readonly eq = methods.eq;

  public readonly even = methods.even;

  public readonly exists = methods.exists;

  public readonly filter = methods.filter;

  public readonly fadeIn = methods.fadeIn;

  public readonly fadeOut = methods.fadeOut;

  public readonly fadeToggle = methods.fadeToggle;

  public readonly find = methods.find;

  public readonly first = methods.first;

  public readonly focus = methods.focus;

  public readonly focusin = methods.focusin;

  public readonly focusout = methods.focusout;

  public readonly get = methods.get;

  public readonly has = methods.has;

  public readonly hasClass = methods.hasClass;

  public readonly height = methods.height;

  public readonly hide = methods.hide;

  public readonly hover = methods.hover;

  public readonly html = methods.html;

  public readonly index = methods.index;

  public readonly input = methods.input;

  public readonly insertAfter = methods.insertAfter;

  public readonly insertBefore = methods.insertBefore;

  public readonly is = methods.is;

  public readonly keydown = methods.keydown;

  public readonly keypress = methods.keypress;

  public readonly keyup = methods.keyup;

  public readonly last = methods.last;

  public readonly map = methods.map;

  public readonly mousedown = methods.mousedown;

  public readonly mouseenter = methods.mouseenter;

  public readonly mouseleave = methods.mouseleave;

  public readonly mousemove = methods.mousemove;

  public readonly mouseout = methods.mouseout;

  public readonly mouseover = methods.mouseover;

  public readonly mouseup = methods.mouseup;

  public readonly next = methods.next;

  public readonly not = methods.not;

  public readonly odd = methods.odd;

  public readonly off = methods.off;

  public readonly offset = methods.offset;

  public readonly on = methods.on;

  public readonly outerHeight = methods.outerHeight;

  public readonly outerHtml = methods.outerHtml;

  public readonly outerWidth = methods.outerWidth;

  public readonly parent = methods.parent;

  public readonly position = methods.position;

  public readonly prepend = methods.prepend;

  public readonly prependTo = methods.prependTo;

  public readonly prev = methods.prev;

  public readonly prop = methods.prop;

  public readonly raw = methods.raw;

  public readonly ready = methods.ready;

  public readonly rect = methods.rect;

  public readonly remove = methods.remove;

  public readonly removeAttr = methods.removeAttr;

  public readonly removeClass = methods.removeClass;

  public readonly removeProp = methods.removeProp;

  public readonly replaceWith = methods.replaceWith;

  public readonly resize = methods.resize;

  public readonly resizeDebounce = methods.resizeDebounce;

  public readonly resizeThrottle = methods.resizeThrottle;

  public readonly scroll = methods.scroll;

  public readonly scrollDebounce = methods.scrollDebounce;

  public readonly scrollThrottle = methods.scrollThrottle;

  public readonly select = methods.select;

  public readonly show = methods.show;

  public readonly siblings = methods.siblings;

  public readonly slideDown = methods.slideDown;

  public readonly slideToggle = methods.slideToggle;

  public readonly slideUp = methods.slideUp;

  public readonly style = methods.style;

  public readonly submit = methods.submit;

  public readonly text = methods.text;

  public readonly toggleClass = methods.toggleClass;

  public readonly trigger = methods.trigger;

  public readonly triggerHandler = methods.triggerHandler;

  public readonly unwrap = methods.unwrap;

  public readonly val = methods.val;

  public readonly width = methods.width;

  public readonly wrap = methods.wrap;

  public readonly wrapInner = methods.wrapInner;
}
