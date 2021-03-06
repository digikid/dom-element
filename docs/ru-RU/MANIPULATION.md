# Манипуляции с элементами

## addClass

Добавляет CSS класс каждому выбранному элементу.

Метод работает аналогично [jQuery.addClass](https://api.jquery.com/addClass/).

| Параметры    | Тип      | Возвращаемое значение |
|--------------|----------|-----------------------|
| className[s] | string   | DomElement            |

### Использование

```js
// Добавить класс `is-active`
$('.element')
  .addClass('is-active');

// Добавить классы `is-active` и `is-checked`
$('.element')
  .addClass('is-active is-checked');
```

## after

Вставляет заданное содержимое после выбранных элементов.

Метод работает аналогично [jQuery.after](https://api.jquery.com/after/).

| Параметры | Тип                                                                                    | Возвращаемое значение |
|-----------|----------------------------------------------------------------------------------------|-----------------------|
| selector  | [Селектор](https://github.com/digikid/dom-element/blob/main/README.ru-RU.md#selectors) | DomElement            |

### Использование

```js
// Вставить `.second` после `.first`
$('.first')
  .after('.second');
```

## append

Вставляет заданное содержимое в конец выбранных элементов.

Метод работает аналогично [jQuery.append](https://api.jquery.com/append/).

| Параметры | Тип                                                                                    | Возвращаемое значение |
|-----------|----------------------------------------------------------------------------------------|-----------------------|
| selector  | [Селектор](https://github.com/digikid/dom-element/blob/main/README.ru-RU.md#selectors) | DomElement            |

### Использование

```js
// Вставить `.inner` в конец `.outer`
$('.outer')
  .append('.inner');
```

## appendTo

Вставляет заданное содержимое в конец выбранных элементов.

В отличие от метода [append](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#append), в
качестве
параметра
передается селектор родительского элемента.

Метод работает аналогично [jQuery.appendTo](https://api.jquery.com/appendTo/).

| Параметры | Тип                                                                                    | Возвращаемое значение |
|-----------|----------------------------------------------------------------------------------------|-----------------------|
| selector  | [Селектор](https://github.com/digikid/dom-element/blob/main/README.ru-RU.md#selectors) | DomElement            |

### Использование

```js
// Вставить `.inner` в конец `.outer`
$('.inner')
  .appendTo('.outer');
```

## attr

В зависимости от переданных параметров получает значение атрибута по его ключу для первого выбранного элемента, либо
устанавливает значение для всех выбранных элементов.

Метод работает аналогично [jQuery.attr](https://api.jquery.com/attr/).

| Параметры   | Тип           | Возвращаемое значение |
|-------------|---------------|-----------------------|
| name        | string        | any                   |
| value       | {string: any} | DomElement            |
| name, value | string, any   | DomElement            |

### Использование

```js
// Получить значение атрибута `disabled`
const isDisabled = $('.input')
  .attr('disabled');

// Установить значение атрибута `disabled`
$('.input')
  .attr('disabled', true);

// Установить значение нескольких атрибутов
$('.input')
  .attr({
    name: 'input-name',
    disabled: true
  });
```

## before

Вставляет заданное содержимое перед выбранными элементами.

Метод работает аналогично [jQuery.before](https://api.jquery.com/before/).

| Параметры | Тип                                                                                    | Возвращаемое значение |
|-----------|----------------------------------------------------------------------------------------|-----------------------|
| selector  | [Селектор](https://github.com/digikid/dom-element/blob/main/README.ru-RU.md#selectors) | DomElement            |

### Использование

```js
// Вставить `.first` перед `.second`
$('.second')
  .before('.first');
```

## clear

Очищает содержимое выбранных элементов.

| Параметры | Тип    | Возвращаемое значение |
|-----------|--------|-----------------------|
| -         | -      | DomElement            |

### Использование

```js
// Очистить содержимое всех `.element`
$('.element')
  .clear();
```

## clone

Возвращает коллекцию из копий выбранных элементов. Элементы копируются вместе со всем содержимым.

Метод работает аналогично [jQuery.clone](https://api.jquery.com/clone/).

| Параметры | Тип    | Возвращаемое значение |
|-----------|--------|-----------------------|
| -         | -      | DomElement            |

### Использование

```js
// Скопировать все `.element` и добавить их в конец `body`
$('.element')
  .clone()
  .appendTo(body);
```

## each

Вызывает переданную функцию для каждого выбранного элемента.

Метод работает аналогично [jQuery.each](https://api.jquery.com/each/).

| Параметры | Тип      | Возвращаемое значение |
|-----------|----------|-----------------------|
| callback  | Function | DomElement            |

:warning: **Обратите внимание**  
В случае передачи стрелочной функции теряется контекст выполнения и получить доступ к элементу можно только через
параметр функции.

### Использование

```js
// Итерация с передачей функции
$('.element')
  .each(function (el, i) {
    // в качестве контекста (this) устанавливается сам элемент
    // el - элемент, в данном случае равен this
    // i - текущий индекс элемента
    this.textContent = `Номер элемента: ${i + 1}`;
  });

// Итерация с передачей стрелочной функции, вернет то же самое
$('.element')
  .each((el, i) => {
    el.textContent = `Номер элемента: ${i + 1}`;
  });
```

## empty

Удаляет содержимое у выбранных элементов (без удаления самих элементов).

Метод работает аналогично [jQuery.empty](https://api.jquery.com/empty/).

| Параметры | Тип    | Возвращаемое значение |
|-----------|--------|-----------------------|
| -         | -      | DomElement            |

### Использование

```js
// Удалить содержимое `.element`
$('.element')
  .empty();
```

## html

В зависимости от переданных параметров возвращает HTML содержимое первого элемента либо устанавливает его для всех
выбранных элементов.

Метод работает аналогично [jQuery.html](https://api.jquery.com/html/).

| Параметры           | Тип             | Возвращаемое значение |
|---------------------|-----------------|-----------------------|
| -                   | -               | string                |
| replace             | boolean         | string                |
| htmlString          | string          | DomElement            |
| htmlString, replace | string, boolean | DomElement            |

:warning: **Обратите внимание**  
В отличии от метода jQuery, доступна полная замена содержимого элемента. Чтобы заменить элемент целиком, нужно
передать `true` вторым параметром.

### Использование

```js
// Получить содержимое `.element` в виде строки
const elementHtml = $('.element')
  .html();

// Получить содержимое `.element` целиком
const elementOuterHtml = $('.element')
  .html(true);

// Заменить содержимое всех `.element`
$('.element')
  .html('<p>Hello world</p>');

// Заменить содержимое всех `.element` целиком
$('.element')
  .html('<p>Hello world</p>', true);
```

## insertAfter

Вставляет заданное содержимое после выбранных элементов.

Метод работает аналогично [jQuery.insertAfter](https://api.jquery.com/insertAfter/).

| Параметры | Тип                                                                                    | Возвращаемое значение |
|-----------|----------------------------------------------------------------------------------------|-----------------------|
| selector  | [Селектор](https://github.com/digikid/dom-element/blob/main/README.ru-RU.md#selectors) | DomElement            |

### Использование

```js
// Вставить `.second` после `.first`
$('.second')
  .insertAfter('.first');
```

## insertBefore

Вставляет заданное содержимое перед выбранными элементами.

Метод работает аналогично [jQuery.insertBefore](https://api.jquery.com/insertBefore/).

| Параметры | Тип                                                                                    | Возвращаемое значение |
|-----------|----------------------------------------------------------------------------------------|-----------------------|
| selector  | [Селектор](https://github.com/digikid/dom-element/blob/main/README.ru-RU.md#selectors) | DomElement            |

### Использование

```js
// Вставить `.first` перед `.second`
$('.first')
  .insertBefore('.second');
```

## outerHtml

Возвращает HTML содержимое первого выбранного элемента с учетом родительского элемента в виде строки.

В случае передачи параметра `htmlString` целиком заменяет содержимое выбранных элементов на переданную HTML-строку и
возвращает коллекцию из обновленных элементов.

| Параметры  | Тип    | Возвращаемое значение |
|------------|--------|-----------------------|
| -          | -      | string                |
| htmlString | string | DomElement            |

### Использование

```js
// Получить содержимое первого `.element` целиком
const elementOuterHtml = $('.element')
  .outerHtml();

// Заменить содержимое всех `.element` целиком
$('.element')
  .outerHtml('<div class="custom-element"></div>')
```

## prepend

Вставляет заданное содержимое в начало выбранных элементов.

Метод работает аналогично [jQuery.prepend](https://api.jquery.com/prepend/).

| Параметры | Тип                                                                                    | Возвращаемое значение |
|-----------|----------------------------------------------------------------------------------------|-----------------------|
| selector  | [Селектор](https://github.com/digikid/dom-element/blob/main/README.ru-RU.md#selectors) | DomElement            |

### Использование

```js
// Вставить `.inner` в начало `.outer`
$('.outer')
  .prepend('.inner');
```

## prependTo

Вставляет заданное содержимое в начало выбранных элементов.

В отличие от метода [prepend](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#prepend), в
качестве
параметра
передается селектор родительского элемента.

Метод работает аналогично [jQuery.prependTo](https://api.jquery.com/prependTo/).

| Параметры | Тип                                                                                    | Возвращаемое значение |
|-----------|----------------------------------------------------------------------------------------|-----------------------|
| selector  | [Селектор](https://github.com/digikid/dom-element/blob/main/README.ru-RU.md#selectors) | DomElement            |

### Использование

```js
// Вставить `.inner` в начало `.outer`
$('.inner')
  .prependTo('.outer');
```

## prop

В зависимости от переданных параметров получает значение свойства по его ключу для первого выбранного элемента, либо
устанавливает значение свойства для всех выбранных элементов.

Метод работает аналогично [jQuery.prop](https://api.jquery.com/prop/).

| Параметры   | Тип           | Возвращаемое значение |
|-------------|---------------|-----------------------|
| name        | string        | any                   |
| value       | {string: any} | DomElement            |
| name, value | string, any   | DomElement            |

### Использование

```js
// Получить значение свойства `checked`
const isChecked = $('.input')
  .prop('checked');

// Установить значение свойства `checked`
$('.input')
  .prop('checked', true);

// Установить значение нескольких свойствов
$('.input')
  .prop({
    name: 'input-name',
    checked: true
  });
```

## remove

Удаляет выбранные элементы из DOM.

Метод работает аналогично [jQuery.remove](https://api.jquery.com/remove/).

| Параметры | Тип | Возвращаемое значение |
|-----------|-----|-----------------------|
| -         | -   | DomElement            |

### Использование

```js
// Удалить все `.element`
$('.element')
  .remove();
```

## removeAttr

Удаляет атрибут у каждого выбранного элемента.

Метод работает аналогично [jQuery.removeAttr](https://api.jquery.com/removeAttr/).

| Параметры | Тип    | Возвращаемое значение |
|-----------|--------|-----------------------|
| name      | string | DomElement            |

### Использование

```js
// Удалить атрибут `for` для всех `.label`
$('.label')
  .removeAttr('for');
```

## removeClass

Удаляет CSS класс у каждого выбранного элемента.

Метод работает аналогично [jQuery.removeClass](https://api.jquery.com/removeClass/).

| Параметры    | Тип      | Возвращаемое значение |
|--------------|----------|-----------------------|
| className[s] | string   | DomElement            |

### Использование

```js
// Удалить класс `is-active` у всех `.element`
$('.element')
  .removeClass('is-active');

// Удалить классы `is-active` и `is-checked`
$('.element')
  .removeClass('is-active is-checked');
```

## removeProp

Удаляет свойство у каждого выбранного элемента.

Метод работает аналогично [jQuery.removeProp](https://api.jquery.com/removeProp/).

| Параметры | Тип    | Возвращаемое значение |
|-----------|--------|-----------------------|
| name      | string | DomElement            |

### Использование

```js
// Удалить свойство `disabled` у всех `.input`
$('.input')
  .removeProp('disabled');
```

## replaceWith

Заменяет каждый выбранный элемент на элемент, соответствующий переданному селектору и возвращает коллекцию из
обновленных элементов.

Метод работает аналогично [jQuery.replaceWith](https://api.jquery.com/replaceWith/).

| Параметры | Тип                                                                                    | Возвращаемое значение |
|-----------|----------------------------------------------------------------------------------------|-----------------------|
| selector  | [Селектор](https://github.com/digikid/dom-element/blob/main/README.ru-RU.md#selectors) | DomElement            |

### Использование

```js
// Заменить все элементы `.previous` на `.current`
$('.previous')
  .replaceWith('.current');
```

## text

В зависимости от переданных параметров возвращает текстовое содержимое первого выбранного элемента либо устанавливает
его для всех выбранных элементов.

Метод работает аналогично [jQuery.text](https://api.jquery.com/text/).

| Параметры      | Тип             | Возвращаемое значение |
|----------------|-----------------|-----------------------|
| -              | -               | string                |
| value          | string          | DomElement            |

### Использование

```js
// Получить текстовое содержимое `.element`
const elementText = $('.element')
  .text();

// Заменить текстовое содержимое `.element`
$('.element')
  .text('Hello world');
```

## toggleClass

Переключает CSS классы для каждого выбранного элемента.

Если элемент содержит переданный класс, он удаляется. В обратном случае класс добавляется к элементу.

Метод работает аналогично [jQuery.toggleClass](https://api.jquery.com/toggleClass/).

| Параметры    | Тип      | Возвращаемое значение |
|--------------|----------|-----------------------|
| className[s] | string   | DomElement            |

### Использование

```js
// Если `.element` не содержит класс `is-active`, он будет добавлен
$('.element')
  .toggleClass('is-active');

// Работает аналогично с несколькими классами
$('.element')
  .toggleClass('is-active is-checked');
```

## unwrap

Удаляет родительские элементы у каждого выбранного элемента без изменения их содержимого.

Метод работает аналогично [jQuery.unwrap](https://api.jquery.com/unwrap/).

| Параметры | Тип | Возвращаемое значение |
|-----------|-----|-----------------------|
| -         | -   | DomElement            |

### Использование

```js
// Удалить родительский элемент
$('.element')
  .unwrap();
```

## val

В зависимости от переданных параметров получает значение первого выбранного элемента, либо устанавливает его.

Для селектов с множественным выбором значения возвращаются в виде массива. Чтобы установить значения для этих селектов,
необходимо передать их в виде массива.

Метод работает аналогично [jQuery.val](https://api.jquery.com/val/).

| Параметры | Тип                                  | Возвращаемое значение                |
|-----------|--------------------------------------|--------------------------------------|
| -         | -                                    | string &#124; number &#124; string[] |
| value     | string &#124; number &#124; string[] | DomElement                           |

### Использование

```js
// Получить значение поля `.input`
const inputValue = $('.input')
  .val();

// Установить значение поля `.input`
$('.input')
  .val('value');

// Получить значения множественного селекта в виде массива
const selectValues = $('.multiple-select')
  .val();

// Установить значения множественного селекта
$('.multiple-select')
  .val(['option-1', 'option-2', 'option-3']);
```

## wrap

Оборачивает каждый выбранный элемент в новый элемент, переданный в виде HTML строки.

Метод работает аналогично [jQuery.wrap](https://api.jquery.com/wrap/).

| Параметры  | Тип    | Возвращаемое значение |
|------------|--------|-----------------------|
| htmlString | string | DomElement            |

### Использование

```js
// Обернуть все `.element` в `div.wrapper`
$('.element')
  .wrap('<div class="wrapper"></div>');
```

## wrapInner

Оборачивает содержимое каждого выбранного элементов в новый элемент, переданный в виде HTML строки.

Метод работает аналогично [jQuery.wrapInner](https://api.jquery.com/wrapInner/).

| Параметры  | Тип    | Возвращаемое значение |
|------------|--------|-----------------------|
| htmlString | string | DomElement            |

### Использование

```js
// Обернуть содержимое всех `.element` в `div.inner-wrapper`
$('.element')
  .wrapInner('<div class="inner-wrapper"></div>');
```
