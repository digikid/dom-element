<div align="center">
  <img alt="DOM Element" src="https://github.com/digikid/dom-element/raw/main/logo.png" height="117" />
</div>

<div align="center">
  <h1>DOM Element</h1>
  <p>Набор методов для удобной работы с DOM-элементами.<br>Легковесная альтернатива jQuery с аналогичными названиями методов.</p>
  <p>
    <a href="https://github.com/digikid/dom-element/blob/main/README.md">English</a> | <b>Русский</b></p>
  <img src="https://img.shields.io/github/release/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="Release version">
  <img src="https://img.shields.io/github/languages/top/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="TypeScript">
  <img src="https://img.shields.io/github/license/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="MIT License">
</div>

## Преимущества

- Содержит только самые необходимые методы, используемые в большинстве случаев
- Малый вес и высокая производительность за счет отсутствия поддержки устаревших браузеров
- Отсутствуют дополнительные зависимости
- Библиотека написана на TypeScript

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

Если вы используете TypeScript, вы также можете импортировать тип создаваемого элемента:

```ts
import $, { type DomElement } from 'dom-element';

const $element: DomElement = $('.element');
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
- **Экземпляр DOM Element**

:warning: **Обратите внимание**  
Эта библиотека не поддерживает Sizzle селекторы (`:checked`, `:hover` и т.п).

### Методы

- [Перемещение по DOM-дереву](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/METHODS.md#traversing)
- [Манипуляции с элементами](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/METHODS.md#manipulation)
- [Стили и отображение](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/METHODS.md#css)
- [Обработка событий](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/METHODS.md#events)
- [Эффекты](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/METHODS.md#effects)
- [Геттеры](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/METHODS.md#getters)
- [Управление данными](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/METHODS.md#data)

### Создание функций

Поддерживается создание пользовательских функций, которые доступны глобально.

Функции, созданные через `$.fn`, хранятся в отдельном объекте и не загрязняют глобальную область видимости.

```js
$.fn.sum = (a, b) => a + b;

const sum = $.fn.sum(1, 2);
```

## Благодарности

- [You might not need jQuery](https://youmightnotneedjquery.com)
- [Cheat sheet for moving from jQuery to vanilla JavaScript](https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/)

## Лицензия

[The MIT License (MIT)](LICENSE)
