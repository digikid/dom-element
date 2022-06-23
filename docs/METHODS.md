# Методы

Все методы работают по аналогии с методами jQuery, если в описании не указано обратное. В ряде случаев для уменьшения
веса библиотеки опущены редко используемые типы входящих параметров.

Методы, не имеющие аналогов в jQuery, отмечены значком :white_check_mark:.

<a name="traversing"></a>

## Перемещение по DOM-дереву

Позволяют перемещаться по DOM-дереву относительно переданных элементов и выполнять поиск по нему.

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

<a name="manipulation"></a>

## Манипуляции с элементами

Изменяют содержимое элементов, выполняют их копирование, перемещение и т.п.

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

<a name="css"></a>

## Стили и отображение

Изменяют отображение элементов, а также возвращают свойства для работы с ним.

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

<a name="events"></a>

## Обработка событий

Позволяют вызывать события, а также добавлять либо удалять обработчики для них.

- [blur](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [change](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [click](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [contextmenu](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [dblclick](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [focus](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [focusin](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [focusout](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [hover](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [input](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
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
- [resizeDebounce](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#debounce) :white_check_mark:
- [resizeThrottle](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#throttle) :white_check_mark:
- [scroll](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [scrollDebounce](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#debounce) :white_check_mark:
- [scrollThrottle](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#throttle) :white_check_mark:
- [submit](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#event)
- [trigger](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#trigger)
- [triggerHandler](https://github.com/digikid/dom-element/blob/main/docs/EVENTS.md#triggerHandler)

<a name="effects"></a>

## Эффекты

Позволяют анимировать появление либо исчезновение элементов.

- [fadeIn](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#fadeIn)
- [fadeOut](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#fadeOut)
- [fadeToggle](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#fadeToggle)
- [slideDown](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#slideDown)
- [slideToggle](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#slideToggle)
- [slideUp](https://github.com/digikid/dom-element/blob/main/docs/EFFECTS.md#slideUp)

<a name="getters"></a>

## Геттеры

Используются для выполнения проверок и получения элементов либо их свойств.

- [exists](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#exists) :white_check_mark:
- [get](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#get)
- [hasClass](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#hasClass)
- [index](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#index)
- [is](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#is)
- [map](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#map)
- [raw](https://github.com/digikid/dom-element/blob/main/docs/GETTERS.md#raw) :white_check_mark:

<a name="data"></a>

## Управление данными

Позволяют работать с данными с привязкой к выбранным элементам.

- [data](https://github.com/digikid/dom-element/blob/main/docs/DATA.md#data)
