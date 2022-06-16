# Обработка событий

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

| Параметры  | Тип    | Возвращаемое значение |
|------------|--------|-----------------------|
| eventName  | string | DomElement            |
| eventNames | string | DomElement            |

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

| Параметры            | Тип              | Возвращаемое значение |
|----------------------|------------------|-----------------------|
| eventName, callback  | string, Function | DomElement            |
| eventNames, callback | string, Function | DomElement            |

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

Метод работает аналогично [jQuery.trigger](https://api.jquery.com/trigger/).

| Параметры    | Тип     | Возвращаемое значение |
|--------------|---------|-----------------------|
| eventName    | string  | DomElement            |

### Использование

```js
// Вызвать событие клика и запустить обработчики
$('.element')
  .trigger('click');

// Вызвать несколько событий и запустить обработчики
$('.element')
  .trigger('click change mouseover');
```

## triggerHandler

Запускает обработчики событий каждого элемента коллекции без запуска самого события.

Метод работает аналогично [jQuery.triggerHandler](https://api.jquery.com/triggerHandler/).

| Параметры    | Тип     | Возвращаемое значение |
|--------------|---------|-----------------------|
| eventName    | string  | DomElement            |

### Использование

```js
// Запустить обработчики клика
$('.element')
  .triggerHandler('click');

// Запустить обработчики для нескольких событий
$('.element')
  .triggerHandler('click change mouseover');
```
