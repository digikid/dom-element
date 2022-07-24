# Методы

Все методы работают по аналогии с методами jQuery, если в их описании не указано обратное. В большинстве случаев для
уменьшения веса библиотеки опущены редко используемые типы параметров.

Методы, не имеющие аналогов в jQuery, отмечены значком :white_check_mark:.

<a name="traversing"></a>

## Перемещение по DOM-дереву

Поиск элементов, а также перемещение по DOM-дереву относительно выбранных элементов.

- [add](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#add)
- [children](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#children)
- [closest](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#closest)
- [eq](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#eq)
- [even](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#even)
- [filter](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#filter)
- [find](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#find)
- [first](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#first)
- [has](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#has)
- [last](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#last)
- [next](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#next)
- [not](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#not)
- [odd](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#odd)
- [parent](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#parent)
- [prev](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#prev)
- [siblings](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/TRAVERSING.md#siblings)

<a name="manipulation"></a>

## Манипуляции с элементами

Основные виды манипуляций с DOM элементами - копирование, изменение содержимого и т.п.

- [addClass](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#addClass)
- [after](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#after)
- [append](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#append)
- [appendTo](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#appendTo)
- [attr](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#attr)
- [before](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#before)
- [clear](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#clear) :white_check_mark:
- [clone](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#clone)
- [each](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#each)
- [empty](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#empty)
- [html](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#html)
- [insertAfter](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#insertAfter)
- [insertBefore](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#insertBefore)
- [outerHtml](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#outerHtml) :white_check_mark:
- [prepend](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#prepend)
- [prependTo](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#prependTo)
- [prop](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#prop)
- [remove](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#remove)
- [removeAttr](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#removeAttr)
- [removeProp](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#removeProp)
- [replaceWith](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#replaceWith)
- [text](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#text)
- [toggleClass](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#toggleClass)
- [unwrap](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#unwrap)
- [val](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#val)
- [wrap](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#wrap)
- [wrapInner](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#wrapInner)

<a name="css"></a>

## Стили и отображение

Изменение внешнего вида выбранных элементов и получение свойств для работы с CSS.

- [css](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#css)
- [height](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#height)
- [hide](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#hide)
- [offset](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#offset)
- [outerHeight](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#outerHeight)
- [outerWidth](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#outerWidth)
- [position](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#position)
- [rect](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#rect) :white_check_mark:
- [show](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#show)
- [style](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#style) :white_check_mark:
- [width](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/CSS.md#width)

<a name="events"></a>

## События

Обработка событий - добавление и удаление обработчиков, а также оптимизация событийного цикла.

- [blur](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [change](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [click](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [contextmenu](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [dblclick](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [focus](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [focusin](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [focusout](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [hover](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [input](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [keydown](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [keypress](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [keyup](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [mousedown](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [mouseenter](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [mouseleave](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [mousemove](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [mouseout](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [mouseover](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [mouseup](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [off](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#off)
- [on](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#on)
- [select](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [ready](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#ready)
- [resize](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [resizeDebounce](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#debounce) :white_check_mark:
- [resizeThrottle](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#throttle) :white_check_mark:
- [scroll](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [scrollDebounce](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#debounce) :white_check_mark:
- [scrollThrottle](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#throttle) :white_check_mark:
- [submit](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#event)
- [trigger](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#trigger)
- [triggerHandler](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EVENTS.md#triggerHandler)

<a name="effects"></a>

## Эффекты

Анимирование появления и исчезновения элементов.

- [fadeIn](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EFFECTS.md#fadeIn)
- [fadeOut](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EFFECTS.md#fadeOut)
- [fadeToggle](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EFFECTS.md#fadeToggle)
- [slideDown](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EFFECTS.md#slideDown)
- [slideToggle](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EFFECTS.md#slideToggle)
- [slideUp](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/EFFECTS.md#slideUp)

<a name="getters"></a>

## Геттеры

Выполнение проверок и получение элементов либо их свойств.

- [exists](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/GETTERS.md#exists) :white_check_mark:
- [get](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/GETTERS.md#get)
- [hasClass](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/GETTERS.md#hasClass)
- [index](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/GETTERS.md#index)
- [is](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/GETTERS.md#is)
- [map](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/GETTERS.md#map)
- [raw](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/GETTERS.md#raw) :white_check_mark:

<a name="data"></a>

## Управление данными

Управление хранилищем произвольных данных с привязкой к выбранным элементам.

- [data](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/DATA.md#data)
