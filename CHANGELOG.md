# История версий

Все заметные изменения задокументированы в этом файле.

[1.2.0]: https://github.com/digikid/dom-element/releases/tag/1.2.0

## [1.2.0] - 2022-06-16

### Добавлено

- Методы для получения четных и нечетных элементов: `odd` и `even`
- Методы для работы с событиями: `contextmenu`, `dblclick`, `focusin`, `focusout`, `hover`, `keydown`, `keypress`
  , `keyup`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseout`, `mouseover`, `mouseup`, `select`
  , `triggerHandler`

### Исправлено

- Исправлена логика работы методов `prev` и `last`
- Рефакторинг кода, исправление мелких ошибок

### Обновлено

- Улучшена производительность методов `scroll` и `resize` за счет использования `requestAnimationFrame`
- Переработан алгоритм добавления пользовательских функций
- Документация полностью обновлена, все методы разбиты по категориям

[1.1.0]: https://github.com/digikid/dom-element/releases/tag/1.1.0

## [1.1.0] - 2022-06-11

### Добавлено

- Эффекты `fadeIn`, `fadeOut`, `fadeToggle`, `slideIn`, `slideOut`, `slideToggle`
- Добавление обработчиков для нескольких событий в методах `on` и `trigger`
- Множественное удаление обработчиков событий в методе `off`

### Исправлено

- Исправление мелких ошибок, рефакторинг кода

### Обновлено

- В документацию добавлено описание новых методов

[1.0.0]: https://github.com/digikid/dom-element/releases/tag/1.0.0

## [1.0.0] - 2022-05-25

Первый публичный релиз
