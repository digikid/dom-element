# Release Notes

[1.4.1]: https://github.com/digikid/dom-element/releases/tag/1.4.1

## [1.4.1] - 2022-07-09

### Updates

- All documentation translated into English

[1.4.0]: https://github.com/digikid/dom-element/releases/tag/1.4.0

## [1.4.0] - 2022-06-23

### Features

- `map` method for getting data array
- `input` method for working with DOM event

### Bug Fixes

- Fixed a bug that caused the source collection to mutate when saving an instance to a variable and then
  calling methods
- Improved display of types in IDE
- Code refactoring, minor bug fixes

### Updates

- Documentation updated, added description of new methods

[1.3.2]: https://github.com/digikid/dom-element/releases/tag/1.3.2

## [1.3.2] - 2022-06-21

### Bug Fixes

- Fixed bug in `val` method causing all elements of `textarea` to be ignored

[1.3.1]: https://github.com/digikid/dom-element/releases/tag/1.3.1

## [1.3.1] - 2022-06-20

### Bug Fixes

- Fixed a bug in the `slideDown`, `slideToggle` and `slideUp` methods, causing incorrect display of the effect

[1.3.0]: https://github.com/digikid/dom-element/releases/tag/1.3.0

## [1.3.0] - 2022-06-19

### Features

- Methods for performant event handling: `resizeDebounce`, `scrollDebounce`, `resizeThrottle`, `scrollThrottle`

### Bug Fixes

- Fixed bug in `trigger` method when called with `eventData` parameter
- Fixed bugs in the `outerHtml` and `replaceWith` methods, now the methods return a collection of updated elements
- Code refactoring, minor bug fixes

### Updates

- Improved algorithm for adding event handlers through delegation
- Updated documentation, added description of new methods

[1.2.0]: https://github.com/digikid/dom-element/releases/tag/1.2.0

## [1.2.0] - 2022-06-16

### Features

- Methods for getting even and odd elements: `odd` and `even`
- Methods for working with events: `contextmenu`, `dblclick`, `focusin`, `focusout`, `hover`, `keydown`, `keypress`
  , `keyup`, `mousedown`, `mouseenter`, `mouseleave`, `mousemove`, `mouseout`, `mouseover`, `mouseup`, `select`
  , `triggerHandler`

### Bug Fixes

- Fixed logic of `prev` and `last` methods
- Code refactoring, minor bug fixes

### Updates

- Improved performance of `scroll` and `resize` methods by using `requestAnimationFrame`
- Redesigned algorithm for adding custom functions
- Documentation is completely updated, all methods are categorized

[1.1.0]: https://github.com/digikid/dom-element/releases/tag/1.1.0

## [1.1.0] - 2022-06-11

### Features

- Effects `fadeIn`, `fadeOut`, `fadeToggle`, `slideIn`, `slideOut`, `slideToggle`
- Adding handlers for multiple events in `on` and `trigger` methods
- Multiple removal of event handlers in the `off` method

### Bug Fixes

- Minor bug fixes, code refactoring

### Updates

- Description of new methods added to documentation

[1.0.0]: https://github.com/digikid/dom-element/releases/tag/1.0.0

## [1.0.0] - 2022-05-25

Initial release
