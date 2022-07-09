<div align="center">
  <img alt="DomElement" src="https://github.com/digikid/dom-element/raw/main/logo.png" height="117" />
</div>

<div align="center">
  <h1>DomElement</h1>
  <p>Набор методов для удобной работы с DOM-элементами.<br>Легковесная альтернатива jQuery с аналогичными названиями методов.</p>
  <img src="https://img.shields.io/github/release/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="Release version">
  <img src="https://img.shields.io/github/languages/top/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="TypeScript">
  <img src="https://img.shields.io/github/license/digikid/dom-element.svg?style=flat-square&logo=appveyor" alt="MIT License">
  <p>
    <a href="https://github.com/digikid/dom-element/blob/main/README.md">en</a> | <a href="https://github.com/digikid/dom-element/blob/main/README-ru.md">ru</a></p>
</div>

## Преимущества

- Малый вес за счет отсутствия поддержки устаревших браузеров (IE10+)
- Реализованы только самые необходимые методы, используемые в большинстве случаев
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

- [Перемещение по DOM-дереву](https://github.com/digikid/dom-element/blob/main/docs/ru/METHODS.md#traversing)
- [Манипуляции с элементами](https://github.com/digikid/dom-element/blob/main/docs/ru/METHODS.md#manipulation)
- [Стили и отображение](https://github.com/digikid/dom-element/blob/main/docs/ru/METHODS.md#css)
- [Обработка событий](https://github.com/digikid/dom-element/blob/main/docs/ru/METHODS.md#events)
- [Эффекты](https://github.com/digikid/dom-element/blob/main/docs/ru/METHODS.md#effects)
- [Геттеры](https://github.com/digikid/dom-element/blob/main/docs/ru/METHODS.md#getters)
- [Управление данными](https://github.com/digikid/dom-element/blob/main/docs/ru/METHODS.md#data)

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
