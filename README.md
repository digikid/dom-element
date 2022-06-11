<div align="center">
  <img alt="DomElement" src="https://github.com/digikid/dom-element/raw/main/logo.png" height="117" />
</div>

<div align="center">
  <h1>DomElement</h1>
  <p>Набор методов для удобной работы с DOM-элементами.<br>Легковесная альтернатива jQuery с аналогичными названиями методов.</p>
  <img src="https://img.shields.io/github/release/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="Release version">
  <img src="https://img.shields.io/github/languages/top/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="TypeScript">
  <img src="https://img.shields.io/github/license/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="MIT License">
  <br>
  <br>
</div>

## Преимущества

- Малый вес за счет отсутствия поддержки устаревших браузеров (IE10+)
- Реализованы только самые необходимые методы, используемые в большинстве случаев
- Библиотека написана на TypeScript
- Отсутствуют дополнительные зависимости

## Установка

```shell
npm i digikid/dom-element
```

## API

### Инициализация

Для работы с библиотекой импортируйте её в проект и передайте селектор элемента:

```js
import $ from 'dom-element';

$(document)
  .ready(() => {
    $('body')
      .addClass('is-ready');
  });
```

<a name="selectors"></a>

### Селекторы

Поддерживаются следующие типы селекторов:

- **String** (строки)
    - СSS-селекторы (например, `.element`, `#app` и т.п)
    - HTML-строки (например, `<div class="element"></div>` и т.п)
    - Строка 'html' (псевдоним для `document.documentElement`)
- **HTMLCollection** | **NodeList** (коллекция HTML-элементов)
    - `document.querySelector`
    - `document.querySelectorAll`
    - `document.getElementById`
    - `document.getElementsByClassName`
- **HTMLElement[]** (массив HTML-элементов)
- **HTMLElement**
- **Document**
- **Window** (обработка событий)
- **Экземпляр DomElement**

:warning: **Обратите внимание**  
Эта библиотека не поддерживает Sizzle селекторы (`:checked`, `:hover` и т.п).

### Методы

Все методы работают по аналогии с методами jQuery.

В ряде случаев для оптимизации производительности опущены редко
используемые типы входящих параметров (как правило, коллбэк-функции).

Также добавлено несколько методов, не имеющих аналогов в jQuery. Они отмечены значком :white_check_mark:.

- [add](https://github.com/digikid/dom-element/blob/main/METHODS.md#add)
- [addClass](https://github.com/digikid/dom-element/blob/main/METHODS.md#addClass)
- [after](https://github.com/digikid/dom-element/blob/main/METHODS.md#after)
- [append](https://github.com/digikid/dom-element/blob/main/METHODS.md#append)
- [appendTo](https://github.com/digikid/dom-element/blob/main/METHODS.md#appendTo)
- [attr](https://github.com/digikid/dom-element/blob/main/METHODS.md#attr)
- [before](https://github.com/digikid/dom-element/blob/main/METHODS.md#before)
- [blur](https://github.com/digikid/dom-element/blob/main/METHODS.md#blur)
- [change](https://github.com/digikid/dom-element/blob/main/METHODS.md#change)
- [children](https://github.com/digikid/dom-element/blob/main/METHODS.md#children)
- [clear](https://github.com/digikid/dom-element/blob/main/METHODS.md#clear) :white_check_mark:
- [click](https://github.com/digikid/dom-element/blob/main/METHODS.md#click)
- [clone](https://github.com/digikid/dom-element/blob/main/METHODS.md#clone)
- [closest](https://github.com/digikid/dom-element/blob/main/METHODS.md#closest)
- [css](https://github.com/digikid/dom-element/blob/main/METHODS.md#css)
- [data](https://github.com/digikid/dom-element/blob/main/METHODS.md#data)
- [each](https://github.com/digikid/dom-element/blob/main/METHODS.md#each)
- [empty](https://github.com/digikid/dom-element/blob/main/METHODS.md#empty)
- [eq](https://github.com/digikid/dom-element/blob/main/METHODS.md#eq)
- [exists](https://github.com/digikid/dom-element/blob/main/METHODS.md#exists) :white_check_mark:
- [fadeIn](https://github.com/digikid/dom-element/blob/main/METHODS.md#fadeIn)
- [fadeOut](https://github.com/digikid/dom-element/blob/main/METHODS.md#fadeOut)
- [fadeToggle](https://github.com/digikid/dom-element/blob/main/METHODS.md#fadeToggle)
- [filter](https://github.com/digikid/dom-element/blob/main/METHODS.md#filter)
- [find](https://github.com/digikid/dom-element/blob/main/METHODS.md#find)
- [first](https://github.com/digikid/dom-element/blob/main/METHODS.md#first)
- [focus](https://github.com/digikid/dom-element/blob/main/METHODS.md#focus)
- [get](https://github.com/digikid/dom-element/blob/main/METHODS.md#get)
- [has](https://github.com/digikid/dom-element/blob/main/METHODS.md#has)
- [hasClass](https://github.com/digikid/dom-element/blob/main/METHODS.md#hasClass)
- [height](https://github.com/digikid/dom-element/blob/main/METHODS.md#height)
- [hide](https://github.com/digikid/dom-element/blob/main/METHODS.md#hide)
- [html](https://github.com/digikid/dom-element/blob/main/METHODS.md#html)
- [index](https://github.com/digikid/dom-element/blob/main/METHODS.md#index)
- [insertAfter](https://github.com/digikid/dom-element/blob/main/METHODS.md#insertAfter)
- [insertBefore](https://github.com/digikid/dom-element/blob/main/METHODS.md#insertBefore)
- [is](https://github.com/digikid/dom-element/blob/main/METHODS.md#is)
- [last](https://github.com/digikid/dom-element/blob/main/METHODS.md#last)
- [next](https://github.com/digikid/dom-element/blob/main/METHODS.md#next)
- [not](https://github.com/digikid/dom-element/blob/main/METHODS.md#not)
- [off](https://github.com/digikid/dom-element/blob/main/METHODS.md#off)
- [offset](https://github.com/digikid/dom-element/blob/main/METHODS.md#offset)
- [on](https://github.com/digikid/dom-element/blob/main/METHODS.md#on)
- [outerHeight](https://github.com/digikid/dom-element/blob/main/METHODS.md#outerHeight)
- [outerHtml](https://github.com/digikid/dom-element/blob/main/METHODS.md#outerHtml) :white_check_mark:
- [outerWidth](https://github.com/digikid/dom-element/blob/main/METHODS.md#outerWidth)
- [parent](https://github.com/digikid/dom-element/blob/main/METHODS.md#parent)
- [position](https://github.com/digikid/dom-element/blob/main/METHODS.md#position)
- [prepend](https://github.com/digikid/dom-element/blob/main/METHODS.md#prepend)
- [prependTo](https://github.com/digikid/dom-element/blob/main/METHODS.md#prependTo)
- [prev](https://github.com/digikid/dom-element/blob/main/METHODS.md#prev)
- [prop](https://github.com/digikid/dom-element/blob/main/METHODS.md#prop)
- [raw](https://github.com/digikid/dom-element/blob/main/METHODS.md#raw) :white_check_mark:
- [ready](https://github.com/digikid/dom-element/blob/main/METHODS.md#ready)
- [rect](https://github.com/digikid/dom-element/blob/main/METHODS.md#rect) :white_check_mark:
- [remove](https://github.com/digikid/dom-element/blob/main/METHODS.md#remove)
- [removeAttr](https://github.com/digikid/dom-element/blob/main/METHODS.md#removeAttr)
- [removeProp](https://github.com/digikid/dom-element/blob/main/METHODS.md#removeProp)
- [replaceWith](https://github.com/digikid/dom-element/blob/main/METHODS.md#replaceWith)
- [resize](https://github.com/digikid/dom-element/blob/main/METHODS.md#resize)
- [scroll](https://github.com/digikid/dom-element/blob/main/METHODS.md#scroll)
- [show](https://github.com/digikid/dom-element/blob/main/METHODS.md#show)
- [siblings](https://github.com/digikid/dom-element/blob/main/METHODS.md#siblings)
- [slideDown](https://github.com/digikid/dom-element/blob/main/METHODS.md#slideDown)
- [slideToggle](https://github.com/digikid/dom-element/blob/main/METHODS.md#slideToggle)
- [slideUp](https://github.com/digikid/dom-element/blob/main/METHODS.md#slideUp)
- [style](https://github.com/digikid/dom-element/blob/main/METHODS.md#style) :white_check_mark:
- [submit](https://github.com/digikid/dom-element/blob/main/METHODS.md#submit)
- [text](https://github.com/digikid/dom-element/blob/main/METHODS.md#text)
- [toggleClass](https://github.com/digikid/dom-element/blob/main/METHODS.md#toggleClass)
- [trigger](https://github.com/digikid/dom-element/blob/main/METHODS.md#trigger)
- [unwrap](https://github.com/digikid/dom-element/blob/main/METHODS.md#unwrap)
- [val](https://github.com/digikid/dom-element/blob/main/METHODS.md#val)
- [width](https://github.com/digikid/dom-element/blob/main/METHODS.md#width)
- [wrap](https://github.com/digikid/dom-element/blob/main/METHODS.md#wrap)
- [wrapInner](https://github.com/digikid/dom-element/blob/main/METHODS.md#wrapInner)

### Создание функций

Поддерживается создание пользовательских функций, которые доступны глобально:

```js
// Объявление функции
$.fn.hello = () => console.log('Hello world');

// Вызов функции, в консоли отобразится текст
$.fn.hello();
```

## Благодарности

- [You might not need jQuery](https://youmightnotneedjquery.com)
- [Cheat sheet for moving from jQuery to vanilla JavaScript](https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/)

## Лицензия

[The MIT License (MIT)](LICENSE)
