<div align="center">
  <img alt="DOM Element" src="https://github.com/digikid/dom-element/raw/main/logo.svg" height="117" />
</div>

<div align="center">
  <h1>DOM Element</h1>
  <p>A set of methods for convenient manipulation of DOM elements.<br>Lightweight alternative to jQuery with similar method names.</p>
  <p>
    <b>English</b> | <a href="https://github.com/digikid/dom-element/blob/main/README.ru-RU.md">Русский</a></p>
  <img src="https://img.shields.io/github/release/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="Release version">
  <img src="https://img.shields.io/github/languages/top/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="TypeScript">
  <img src="https://img.shields.io/github/license/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="MIT License">
</div>

## Features

- Minimalistic set of commonly used methods for DOM manipulating
- Lightweight and highly performant through the give up of legacy browsers support
- No additional dependencies
- Written in TypeScript

## Install

```shell
npm i digikid/dom-element
```

## API

### Initialization

Import library and pass element selector as a parameter:

```js
import $ from 'dom-element';

$(document)
  .ready(() => {
    $('body')
      .addClass('is-ready');
  });
```

If you're using TypeScript, you can also import the type of created instance:

```ts
import $, { type DomElement } from 'dom-element';

const $element: DomElement = $('.element');
```

<a name="selectors"></a>

### Selectors

The following types of selectors are supported:

- **String**
    - CSS selectors (e.g. `.element`, `#app` etc)
    - HTML strings `<div class="element"></div>` etc)
    - The string 'html' (alias for `document.documentElement`)
- **HTMLCollection** | **NodeList** (collection of HTML elements)
    - `document.querySelector`
    - `document.querySelectorAll`
    - `document.getElementById`
    - `document.getElementsByClassName`
- **HTMLElement[]** (array of HTML elements)
- **HTMLElement**
- **Document**
- **Window** (event handling)
- **DOM Element Instance**

:warning: **Important note**
This library does not support Sizzle selectors (`:checked`, `:hover` etc).

### Methods

- [Traversing](https://github.com/digikid/dom-element/blob/main/docs/en-US/METHODS.md#traversing)
- [Manipulations](https://github.com/digikid/dom-element/blob/main/docs/en-US/METHODS.md#manipulation)
- [Styles](https://github.com/digikid/dom-element/blob/main/docs/en-US/METHODS.md#css)
- [Events](https://github.com/digikid/dom-element/blob/main/docs/en-US/METHODS.md#events)
- [Effects](https://github.com/digikid/dom-element/blob/main/docs/en-US/METHODS.md#effects)
- [Getters](https://github.com/digikid/dom-element/blob/main/docs/en-US/METHODS.md#getters)
- [Data management](https://github.com/digikid/dom-element/blob/main/docs/en-US/METHODS.md#data)

### Functions store

This library supports creation of custom functions that are stored globally.

Functions created via `$.fn` are stored in a separate object and do not pollute the global scope.

```js
$.fn.sum = (a, b) => a + b;

const sum = $.fn.sum(1, 2);
```

## Reference

- [You might not need jQuery](https://youmightnotneedjquery.com)
- [Cheat sheet for moving from jQuery to vanilla JavaScript](https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/)

## License

[The MIT License (MIT)](LICENSE)
