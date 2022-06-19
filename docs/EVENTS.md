# Обработка событий

<a name="delegation"></a>

## Делегирование

В jQuery для каждого элемента добавляется свой собственный обработчик события, что потенциально может приводить к
снижению производительности.

В отличии от jQuery, в этой библиотеке обработчики событий `resize` и `scroll` делегируются на `window`, a все остальные
на `document`.

Делегирование позволяет отслеживать события на множестве элементов с помощью только одного обработчика, тем самым решая
проблемы с производительностью. Помимо этого, становится возможным добавлять обработчики для несуществующих элементов,
избегая использования конструкций `$(document).on()`.

### Пример работы в jQuery

```js
// Обработчик не будет добавлен до создания элемента
$('.element')
  .click(handler);

// Для добавления обработчика сначала нужно делегировать его
$(document)
  .on('click', '.element', handler)

// Добавление элемента в DOM
$('<div class="element"></div>')
  .appendTo('body');

// Обработчик будет добавлен к каждому элементу
$('.element-1, .element-2, .element-3')
  .click(handler);
```

### Пример работы в dom-element

```js
// Обработчик будет добавлен несмотря на то, что элемен еще не создан
$('.element')
  .click(handler);

// Добавление элемента в DOM
$('<div class="element"></div>')
  .appendTo('body');

// Все обработчики будут делегированы на document
$('.element-1, .element-2, .element-3')
  .click(handler);
```

<a name="event"></a>

## [eventName]

В зависимости от названия метода, запускает соответствующее событие на элементе и вызывает его обработчики.

Если передан параметр в виде функции-коллбэка, добавляет её в список слушателей.

Методы работают аналогично таковым в jQuery:

- `blur` (работает аналогично [jQuery.blur](https://api.jquery.com/blur/))
- `change` (работает аналогично [jQuery.change](https://api.jquery.com/change/))
- `click` (работает аналогично [jQuery.click](https://api.jquery.com/blur/))
- `contextmenu` (работает аналогично [jQuery.contextmenu](https://api.jquery.com/contextmenu/))
- `dblclick` (работает аналогично [jQuery.dblclick](https://api.jquery.com/dblclick/))
- `focus` (работает аналогично [jQuery.focus](https://api.jquery.com/focus/))
- `focusin` (работает аналогично [jQuery.focusin](https://api.jquery.com/focusin/))
- `focusout` (работает аналогично [jQuery.focusout](https://api.jquery.com/focusout/))
- `hover` (работает аналогично [jQuery.hover](https://api.jquery.com/hover/))
- `keydown` (работает аналогично [jQuery.keydown](https://api.jquery.com/keydown/))
- `keypress` (работает аналогично [jQuery.keypress](https://api.jquery.com/keypress/))
- `keyup` (работает аналогично [jQuery.keyup](https://api.jquery.com/keyup/))
- `mousedown` (работает аналогично [jQuery.mousedown](https://api.jquery.com/mousedown/))
- `mouseenter` (работает аналогично [jQuery.mouseenter](https://api.jquery.com/mouseenter/))
- `mouseleave` (работает аналогично [jQuery.mouseleave](https://api.jquery.com/mouseleave/))
- `mousemove` (работает аналогично [jQuery.mousemove](https://api.jquery.com/mousemove/))
- `mouseout` (работает аналогично [jQuery.mouseout](https://api.jquery.com/mouseout/))
- `mouseover` (работает аналогично [jQuery.mouseover](https://api.jquery.com/mouseover/))
- `mouseup` (работает аналогично [jQuery.mouseup](https://api.jquery.com/mouseup/))
- `select` (работает аналогично [jQuery.select](https://api.jquery.com/select/))
- `resize` (работает аналогично [jQuery.resize](https://api.jquery.com/resize/))
- `scroll` (работает аналогично [jQuery.scroll](https://api.jquery.com/scroll/))
- `submit` (работает аналогично [jQuery.submit](https://api.jquery.com/submit/))

| Параметры | Тип      | Возвращаемое значение |
|-----------|----------|-----------------------|
| -         | -        | DomElement            |
| callback  | Function | DomElement            |

:warning: **Обратите внимание**  
В случае передачи стрелочной функции в качестве обработчика события теряется контекст выполнения и получить доступ к
элементу можно только через аргументы.

### Использование

```js
// Вызвать событие клика
$('.element')
  .click();

// Вызвать функцию при клике на элемент
$('.element')
  .click(function (e) {
    // в качестве контекста (this) устанавливается сам элемент, е - событие
    this.classList.add('is-clicked');
  });

// Вызвать стрелочную функцию, делает то же самое
$('.element')
  .click(e => e.target.classList.add('is-clicked'));
```

## off

Удаляет с выбранных элементов все обработчики событий, установленные с помощью
метода [on](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#on).

Метод работает аналогично [jQuery.off](https://api.jquery.com/off/).

| Параметры    | Тип    | Возвращаемое значение |
|--------------|--------|-----------------------|
| eventName[s] | string | DomElement            |

### Использование

```js
// Удалить все обработчики клика 
$('.element')
  .off('click');

// Удалить все обработчики для нескольких событий
$('.element')
  .off('click change focus');
```

## on

Устанавливает обработчики событий для каждого из элементов коллекции.

Метод работает аналогично [jQuery.on](https://api.jquery.com/on/).

| Параметры              | Тип                | Возвращаемое значение |
|------------------------|--------------------|-----------------------|
| eventName[s], callback | string, Function   | DomElement            |
| eventObject            | {string: Function} | DomElement            |

:warning: **Обратите внимание**  
В случае передачи стрелочной функции теряется контекст выполнения и получить доступ к элементу можно только
через `e.target`.

### Использование

```js
// Добавить обработчик клика
$('.element')
  .on('click', function (e) {
    // в качестве контекста (this) устанавливается сам элемент, е - событие
    this.classList.add('is-clicked');
  });

// Вызвать стрелочную функцию, делает то же самое
$('.element')
  .on('click', e => e.target.classList.add('is-clicked'));

// Добавление обработчиков через передачу объекта
$('.element')
  .on({
    click: e => e.target.classList.add('is-clicked'),
    change: e => e.target.classList.add('is-changed')
  });

// Добавление обработчика для нескольких событий
$('.element')
  .on('click change', e => e.target.classList.add('is-clicked', 'is-changed'));

// То же самое, но через передачу объекта
$('.element')
  .on({
    'click change': e => e.target.classList.add('is-clicked', 'is-changed')
  });
```

## ready

Устанавливает обработчик готовности DOM дерева.

Метод работает аналогично [jQuery.ready](https://api.jquery.com/ready/).

| Параметры | Тип      | Возвращаемое значение |
|-----------|----------|-----------------------|
| callback  | Function | void                  |

### Использование

```js
// Запустить функцию после готовности DOM дерева
$(document)
  .ready(() => {
    $(body)
      .addClass('is-ready');
  });
```

## trigger

Вызывает событие у каждого элемента коллекции, что приводит к запуску обработчиков этого события.

Для пользовательских событий можно передать произвольные данные через необязательный параметр `eventData`. После
передачи их можно будет перехватить в обработчике через `e.detail`.

Метод работает аналогично [jQuery.trigger](https://api.jquery.com/trigger/).

| Параметры               | Тип         | Возвращаемое значение |
|-------------------------|-------------|-----------------------|
| eventName[s]            | string      | DomElement            |
| eventName[s], eventData | string, any | DomElement            |

### Использование

```js
// Вызвать событие клика и запустить обработчики
$('.element')
  .trigger('click');

// Вызвать несколько событий и запустить обработчики
$('.element')
  .trigger('click change mouseover');

// Вызвать пользовательское событие и передать данные в e.detail
$('.element')
  .trigger('customEvent', {
    custom: true
  });
```

## triggerHandler

Запускает обработчики событий каждого элемента коллекции без запуска самого события.

Метод работает аналогично [jQuery.triggerHandler](https://api.jquery.com/triggerHandler/).

| Параметры    | Тип     | Возвращаемое значение |
|--------------|---------|-----------------------|
| eventName[s] | string  | DomElement            |

### Использование

```js
// Запустить обработчики клика
$('.element')
  .triggerHandler('click');

// Запустить обработчики для нескольких событий
$('.element')
  .triggerHandler('click change mouseover');
```

<a name="defer"></a>

## Отложенный запуск

Зачастую при реализации обработчиков событий приходится сталкиваться с проблемами большого потока данных, что
сказывается на производительности. При этом не
всегда возникает необходимость в реагировании на каждое из событий.

Примерами могут послужить изменение размера окна или событие прокрутки, при которых обработка каждого события может
вызывать сотни обработчиков в секунду.

Чтобы разгрузить событийный цикл, в библиотеку добавлен ряд методов, перечисленных ниже.

<a name="debounce"></a>

## resizeDebounce / scrollDebounce

Работает по аналогии с методами `resize` / `scroll`, но запускает обработчик события отложенно в зависимости от времени
последнего срабатывания события.

Запуск обработчика будет игнорироваться до тех пор, пока со времени последнего срабатывания события не пройдет период
времени,
равный `delay`. Это позволяет уменьшить количество запусков
обработчика, что существенно экономит ресурсы браузера.

Значения для `delay` по умолчанию равно `200` мс.

| Параметры       | Тип              | Возвращаемое значение |
|-----------------|------------------|-----------------------|
| callback        | function         | DomElement            |
| callback, delay | function, number | DomElement            |

:warning: **Обратите внимание**  
В случае передачи стрелочной функции теряется контекст выполнения и получить доступ к элементу можно только
через `e.target`.

### Использование

```js
// Запустить обработчик через 200мс после последнего срабатывания события
$(window)
  .resizeDebounce(function (e) {
    // в качестве контекста (this) устанавливается сам элемент, е - событие
    console.log(this, e);
  });

// Запустить обработчик через 1с после последнего срабатывания события
$(window)
  .resizeDebounce(e => console.log(e.target, e), 1000);
```

<a name="throttle"></a>

## resizeThrottle / scrollThrottle

Работает по аналогии с методами `resize` / `scroll`, но ограничивает количество запусков обработчика события.

При вызове метода обработчик события вызывается не более одного раза в указанный период времени `delay`. Таким образом,
обработчик не будет вызван заново, если он уже запускался недавно. Это позволяет уменьшить количество запусков
обработчика, что существенно экономит ресурсы браузера.

Значения для `delay` по умолчанию равно `66` мс.

| Параметры       | Тип              | Возвращаемое значение |
|-----------------|------------------|-----------------------|
| callback        | function         | DomElement            |
| callback, delay | function, number | DomElement            |

:warning: **Обратите внимание**  
В случае передачи стрелочной функции теряется контекст выполнения и получить доступ к элементу можно только
через `e.target`.

### Использование

```js
// Запустить обработчик не более 1 раза в 66 мс
$(window)
  .scrollThrottle(function (e) {
    // в качестве контекста (this) устанавливается сам элемент, е - событие
    console.log(this, e);
  });

// Запустить обработчик не более 1 раза в 1 с
$(window)
  .scrollThrottle(e => console.log(e.target, e), 1000);
```
