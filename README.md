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

В ряде случаев для оптимизации производительности опущены редко используемые типы входящих параметров (как правило,
коллбэк-функции).

Также добавлено несколько методов, не имеющих аналогов в jQuery. Они отмечены значком :white_check_mark:.

#### Перемещение по DOM-дереву

- [add](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#add)
- [children](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#children)
- [closest](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#closest)
- [eq](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#eq)
- [even](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#even)
- [filter](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#filter)
- [find](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#find)
- [first](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#first)
- [has](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#has)
- [last](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#last)
- [next](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#next)
- [not](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#not)
- [odd](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#odd)
- [parent](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#parent)
- [prev](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#prev)
- [siblings](https://github.com/digikid/dom-element/blob/main/docs/TRAVERSING.md#siblings)

#### Манипуляции с элементами

- [addClass](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#addClass)
- [after](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#after)
- [append](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#append)
- [appendTo](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#appendTo)
- [attr](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#attr)
- [before](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#before)
- [clear](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#clear) :white_check_mark:
- [clone](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#clone)
- [each](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#each)
- [empty](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#empty)
- [html](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#html)
- [insertAfter](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#insertAfter)
- [insertBefore](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#insertBefore)
- [outerHtml](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#outerHtml) :white_check_mark:
- [prepend](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#prepend)
- [prependTo](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#prependTo)
- [prop](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#prop)
- [remove](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#remove)
- [removeAttr](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#removeAttr)
- [removeProp](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#removeProp)
- [replaceWith](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#replaceWith)
- [text](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#text)
- [toggleClass](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#toggleClass)
- [unwrap](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#unwrap)
- [val](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#val)
- [wrap](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#wrap)
- [wrapInner](https://github.com/digikid/dom-element/blob/main/docs/MANIPULATION.md#wrapInner)

#### Стили и отображение

- [css](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#css)
- [height](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#height)
- [hide](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#hide)
- [offset](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#offset)
- [outerHeight](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#outerHeight)
- [outerWidth](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#outerWidth)
- [position](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#position)
- [rect](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#rect) :white_check_mark:
- [show](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#show)
- [style](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#style) :white_check_mark:
- [width](https://github.com/digikid/dom-element/blob/main/docs/CSS.md#width)

#### Обработка событий

- [blur](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [change](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [click](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [contextmenu](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [dblclick](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [focus](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [focusin](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [focusout](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [hover](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [keydown](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [keypress](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [keyup](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [mousedown](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [mouseenter](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [mouseleave](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [mousemove](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [mouseout](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [mouseover](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [mouseup](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [off](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#off)
- [on](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#on)
- [select](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [ready](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#ready)
- [resize](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [scroll](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [submit](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [trigger](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#trigger)
- [triggerHandler](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#triggerHandler)

#### Эффекты

- [fadeIn](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#fadeIn)
- [fadeOut](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#fadeOut)
- [fadeToggle](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#fadeToggle)
- [slideDown](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#slideDown)
- [slideToggle](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#slideToggle)
- [slideUp](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#slideUp)

#### Геттеры

- [exists](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#exists) :white_check_mark:
- [get](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#get)
- [hasClass](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#hasClass)
- [index](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#index)
- [is](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#is)
- [raw](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#raw) :white_check_mark:

#### Работа с данными

- [data](https://github.com/digikid/dom-element/blob/main/docs/DATA.md#data)

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
