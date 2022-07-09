# Геттеры

## exists

Проверяет наличие элемента в DOM-дереве.

| Параметры | Тип | Возвращаемое значение |
|-----------|-----|-----------------------|
| -         | -   | boolean               |

### Использование

```js
// Проверить наличие `.element`
const isElementExists = $('.element')
  .exists();
```

## get

В зависимости от переданных параметров возвращает массив из выбранных элементов либо элемент, соответствующий
переданному индексу.

Метод работает аналогично [jQuery.get](https://api.jquery.com/get/).

| Параметры | Тип    | Возвращаемое значение   |
|-----------|--------|-------------------------|
| -         | -      | HTMLElement[]           |
| index     | number | HTMLElement &#124; null |

### Использование

```js
// Получить массив, содержащий все выбранные `.element`
const elementsArray = $('.element')
  .get();

// Получить первый выбранный `.element`
const firstElement = $('.element')
  .get(0);
```

## hasClass

Проверяет наличие CSS-класса у первого выбранного элемента.

Метод работает аналогично [jQuery.hasClass](https://api.jquery.com/hasClass/).

| Параметры | Тип    | Возвращаемое значение |
|-----------|--------|-----------------------|
| className | string | boolean               |

### Использование

```js
// Проверить у `.element` наличие CSS-класса `is-active`
const isActive = $('.element')
  .hasClass('is-active');
```

## index

Возвращает индекс первого выбранного элемента относительно его соседей.

Метод работает аналогично [jQuery.index](https://api.jquery.com/index/).

| Параметры | Тип             | Возвращаемое значение |
|-----------|-----------------|-----------------------|
| -         | -               | number                |

:warning: **Обратите внимание**  
Если элемент не найден, будет возвращено значение `-1`.

### Использование

```js
// Получить индекс первого выбранного `.element` относительно его соседей
const elementIndex = $('.element')
  .index();
```

## is

Проверяет, соответствует ли первый выбранный элемент переданному селектору.

Метод работает аналогично [jQuery.is](https://api.jquery.com/is/).

| Параметры | Тип    | Возвращаемое значение |
|-----------|--------|-----------------------|
| selector  | string | boolean               |

### Использование

```js
// Проверка соответствия селектору `.is-active`
const isActive = $('.element')
  .is('.is-active');
```

## map

Возвращает массив из возвращенных значений для каждого выбранного элемента.

Если не передан параметр, будет возвращен пустой массив.

Метод работает аналогично [jQuery.map](https://api.jquery.com/map/).

| Параметры | Тип      | Возвращаемое значение |
|-----------|----------|-----------------------|
| callback  | Function | any[]                 |

:warning: **Обратите внимание**  
В случае передачи стрелочной функции теряется контекст выполнения и получить доступ к элементу можно только через
параметр функции.

### Использование

```js
// Получить все значения `.checkbox` в виде массива
const ids = $('.checkbox')
  .map(function (el, i) {
    // в качестве контекста (this) устанавливается сам элемент
    // el - элемент, в данном случае равен this
    // i - текущий индекс элемента

    return this.value;
  })

// Тоже самое с передачей стрелочной функции
const ids = $('.checkbox')
  .map(el => el.value);
```

## raw

Возвращает первый выбранный элемент либо `null`, если элемент не найден.

Метод работает аналогично вызову `.get(0)`.

| Параметры | Тип | Возвращаемое значение   |
|-----------|-----|-------------------------|
| -         | -   | HTMLElement &#124; null |

:warning: **Обратите внимание**  
Если вам нужно получить массив из всех выбранных элементов, воспользуйтесь
методом [get](https://github.com/digikid/dom-element/blob/main/docs/ru/GETTERS.md#get).

### Использование

```js
// Получить первый выбранный `.element`
const element = $('.element')
  .raw();
```