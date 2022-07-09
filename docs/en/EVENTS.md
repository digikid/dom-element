# Events

<a name="delegation"></a>

## Event delegation

In jQuery, each element contains its own event handler, which can cause performance issues.

To solve this problem, in dom-element `resize` and `scroll` event handlers are delegated to `window`, while others
events handlers are delegated to `document`.

Delegation allows you to track events on multiple elements with only one handler.

In addition, it becomes possible to add event handlers for non-existent elements and avoiding using
of `$(document).on()` constructs.

### jQuery

```js
// Event handler will not be added until the element is created
$('.element')
  .click(handler);

// To add a handler, you first need to delegate it
$(document)
  .on('click', '.element', handler)

// Adding `.element` to DOM
$('<div class="element"></div>')
  .appendTo('body');

// Event handler will be added to each element
$('.element-1, .element-2, .element-3')
  .click(handler);
```

### dom-element

```js
// Event handler will be added even though the element hasn't been created yet
$('.element')
  .click(handler);

// Adding `.element` to DOM
$('<div class="element"></div>')
  .appendTo('body');

// All event handlers will be delegated to the document
$('.element-1, .element-2, .element-3')
  .click(handler);
```

<a name="event-propagation"></a>

## e.stopPropagation

Due to event delegation, using `e.stopPropagation` in the usual way becomes impossible.

To cancel a handler call for a particular element, you must explicitly compare it to `e.target`.

### jQuery

```js
$('.parent')
  .click(handler);
$('.children')
  .click(e => e.stopPropagation());
```

### dom-element

```js
$('.parent')
  .click(e => {
    if (!e.target.classList.contains('children')) {
      handler();
    }
  });
```

<a name="event"></a>

## [eventName]

Depending on the name of the method, fires the corresponding event on element and calls its handlers.

If the parameter is passed as a callback function, adds it to listeners list.

### Full list of event methods

- `blur` (works similarly to [jQuery.blur](https://api.jquery.com/blur/))
- `change` (works similarly to [jQuery.change](https://api.jquery.com/change/))
- `click` (works similarly to [jQuery.click](https://api.jquery.com/blur/))
- `contextmenu` (works similarly to [jQuery.contextmenu](https://api.jquery.com/contextmenu/))
- `dblclick` (works similarly to [jQuery.dblclick](https://api.jquery.com/dblclick/))
- `focus` (works similarly to [jQuery.focus](https://api.jquery.com/focus/))
- `focusin` (works similarly to [jQuery.focusin](https://api.jquery.com/focusin/))
- `focusout` (works similarly to [jQuery.focusout](https://api.jquery.com/focusout/))
- `hover` (works similarly to [jQuery.hover](https://api.jquery.com/hover/))
- `input` (works similarly to [jQuery.input](https://api.jquery.com/input/))
- `keydown` (works similarly to [jQuery.keydown](https://api.jquery.com/keydown/))
- `keypress` (works similarly to [jQuery.keypress](https://api.jquery.com/keypress/))
- `keyup` (works similarly to [jQuery.keyup](https://api.jquery.com/keyup/))
- `mousedown` (works similarly to [jQuery.mousedown](https://api.jquery.com/mousedown/))
- `mouseenter` (works similarly to [jQuery.mouseenter](https://api.jquery.com/mouseenter/))
- `mouseleave` (works similarly to [jQuery.mouseleave](https://api.jquery.com/mouseleave/))
- `mousemove` (works similarly to [jQuery.mousemove](https://api.jquery.com/mousemove/))
- `mouseout` (works similarly to [jQuery.mouseout](https://api.jquery.com/mouseout/))
- `mouseover` (works similarly to [jQuery.mouseover](https://api.jquery.com/mouseover/))
- `mouseup` (works similarly to [jQuery.mouseup](https://api.jquery.com/mouseup/))
- `select` (works similarly to [jQuery.select](https://api.jquery.com/select/))
- `resize` (works similarly to [jQuery.resize](https://api.jquery.com/resize/))
- `scroll` (works similarly to [jQuery.scroll](https://api.jquery.com/scroll/))
- `submit` (works similarly to [jQuery.submit](https://api.jquery.com/submit/))

| Params   | Type     | Return type |
|----------|----------|-------------|
| -        | -        | DomElement  |
| callback | Function | DomElement  |

:warning: **Important note**  
When passing an arrow function as an event handler, the context is lost and access to the element is possible only
through the `e.target`.

### Usage

```js
// Trigger `click` event
$('.element')
  .click();

// Call function when `click` event is fired
$('.element')
  .click(function (e) {
    // context (this) is equal to the element itself, e - event
    this.classList.add('is-clicked');
  });

// Same with arrow function
$('.element')
  .click(e => e.target.classList.add('is-clicked'));
```

## off

Removes all event handlers that were added
using [on](https://github.com/digikid/dom-element/blob/main/docs/en/EVENTS.md#on) method from selected elements.

Method works similar to [jQuery.off](https://api.jquery.com/off/).

| Params       | Type    | Return type |
|--------------|---------|-------------|
| eventName[s] | string  | DomElement  |

### Usage

```js
// Remove all `click` handlers
$('.element')
  .off('click');

// Remove all handlers for multiple events
$('.element')
  .off('click change focus');
```

## on

Sets event handlers for all selected elements.

Method works similar to [jQuery.on](https://api.jquery.com/on/).

| Params                 | Type               | Return type |
|------------------------|--------------------|-------------|
| eventName[s], callback | string, Function   | DomElement  |
| eventObject            | {string: Function} | DomElement  |

:warning: **Important note**  
When passing an arrow function as an event handler, the context is lost and access to the element is possible only
through the `e.target`.

### Usage

```js
// Add `click` handler
$('.element')
  .on('click', function (e) {
    // context (this) is equal to the element itself, e - event
    this.classList.add('is-clicked');
  });

// Same with arrow function
$('.element')
  .on('click', e => e.target.classList.add('is-clicked'));

// Add multiple handlers
$('.element')
  .on({
    click: e => e.target.classList.add('is-clicked'),
    change: e => e.target.classList.add('is-changed')
  });

// Add one handler for multiple events
$('.element')
  .on('click change', e => e.target.classList.add('is-clicked', 'is-changed'));

// Same, with object passing
$('.element')
  .on({
    'click change': e => e.target.classList.add('is-clicked', 'is-changed')
  });
```

## ready

Sets the DOM ready handler.

Method works similar to [jQuery.ready](https://api.jquery.com/ready/).

| Params   | Type     | Return type |
|----------|----------|-------------|
| callback | Function | void        |

### Usage

```js
// Call function when DOM is ready
$(document)
  .ready(() => {
    $(body)
      .addClass('is-ready');
  });
```

## trigger

Trigger native event and call event handlers for all selected elements.

For custom events, you can pass data through the optional `eventData` parameter. After passing data they can be
intercepted in the handler via `e.detail`.

Method works similar to [jQuery.trigger](https://api.jquery.com/trigger/).

| Params                  | Type        | Return type |
|-------------------------|-------------|-------------|
| eventName[s]            | string      | DomElement  |
| eventName[s], eventData | string, any | DomElement  |

### Usage

```js
// Trigger `click` event and call handlers
$('.element')
  .trigger('click');

// Trigger multiple events and call they handlers
$('.element')
  .trigger('click change mouseover');

// Trigger custom event and pass data to e.detail
$('.element')
  .trigger('customEvent', {
    custom: true
  });
```

## triggerHandler

Calls event handlers without firing native event for all selected elements.

Method works similar to [jQuery.triggerHandler](https://api.jquery.com/triggerHandler/).

| Params       | Type    | Return type |
|--------------|---------|-------------|
| eventName[s] | string  | DomElement  |

### Usage

```js
// Run `click` handlers without firing event
$('.element')
  .triggerHandler('click');

// Run multiple handlers without firing events
$('.element')
  .triggerHandler('click change mouseover');
```

<a name="defer"></a>

## Defer events handling

Usually when implementing event handlers, you have to deal with the problems of large data flow, which affects
performance. However, it is not always necessary to respond to each of the events.

An example is a window resize or scroll event, which can trigger handlers hundreds of times per second.

To unload the event loop, a number of the following methods have been added to dom-element.

<a name="debounce"></a>

## resizeDebounce / scrollDebounce

Works similarly to the `resize` / `scroll` methods, but event handler calls deferred depending on the time the event was
last fired.

The launch of the handler will be ignored until a period of time equal to `delay` has passed since the last time the
event
fired. This allows you to reduce the number of handler launches, which significantly saves browser resources.

Default `delay` value is `200` ms.

| Params          | Type             | Return type |
|-----------------|------------------|-------------|
| callback        | function         | DomElement  |
| callback, delay | function, number | DomElement  |

:warning: **Important note**  
When passing an arrow function as an event handler, the context is lost and access to the element is possible only
through the `e.target`.

### Usage

```js
// Run the handler 200ms after the last event firing
// Delay value is equal to default, so it wasn't passed
$(window)
  .resizeDebounce(function (e) {
    // context (this) is equal to the element itself, e - event
    console.log(this, e);
  });

// Run the handler 1s after the last event firing
$(window)
  .resizeDebounce(e => console.log(e.target, e), 1000);
```

<a name="throttle"></a>

## resizeThrottle / scrollThrottle

Works similarly to the `resize` / `scroll` methods, but limits the number of times the event handler is fired.

When a method is called, the event handler is called at most once in the specified `delay` time period. Thus, the
handler will not be called again if it has already been run recently. This allows you to reduce the number of handler
launches, which significantly saves browser resources.

Default `delay` value is `66` ms.

| Params          | Type             | Return type |
|-----------------|------------------|-------------|
| callback        | function         | DomElement  |
| callback, delay | function, number | DomElement  |

:warning: **Important note**  
When passing an arrow function as an event handler, the context is lost and access to the element is possible only
through the `e.target`.

### Usage

```js
// Run the handler no more than 1 time per 66ms
// Delay value is equal to default, so it wasn't passed
$(window)
  .scrollThrottle(function (e) {
    // context (this) is equal to the element itself, e - event
    console.log(this, e);
  });

// Run the handler no more than 1 time in 1 s
$(window)
  .scrollThrottle(e => console.log(e.target, e), 1000);
```
