# Manipulations

## addClass

Adds CSS class to all selected elements.

Method works similar to [jQuery.addClass](https://api.jquery.com/addClass/).

| Params       | Type   | Return type |
|--------------|--------|-------------|
| className[s] | string | DomElement  |

### Usage

```js
// Add `is-active` class
$('.element')
  .addClass('is-active');

// Add `is-active` and `is-checked` classes
$('.element')
  .addClass('is-active is-checked');
```

## after

Inserts the specified content after the selected elements.

Method works similar to [jQuery.after](https://api.jquery.com/after/).

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Insert `.second` after `.first`
$('.first')
  .after('.second');
```

## append

Inserts the specified content at the end of selected elements.

Method works similar to [jQuery.append](https://api.jquery.com/append/).

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Insert `.inner` at the end of `.outer`
$('.outer')
  .append('.inner');
```

## appendTo

Inserts the specified content at the end of selected elements.

Unlike [append](https://github.com/digikid/dom-element/blob/main/docs/en-US/MANIPULATION.md#append) method, the parent
element selector is passed as a parameter.

Method works similar to [jQuery.appendTo](https://api.jquery.com/appendTo/).

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Insert `.inner` at the end of `.outer`
$('.inner')
  .appendTo('.outer');
```

## attr

Depending on passed parameters, gets the value of the attribute by its key for first selected element, or sets
value for all selected elements.

Method works similar to [jQuery.attr](https://api.jquery.com/attr/).

| Params      | Type          | Return type |
|-------------|---------------|-------------|
| name        | string        | any         |
| value       | {string: any} | DomElement  |
| name, value | string, any   | DomElement  |

### Usage

```js
// Get `disabled` attribute value
const isDisabled = $('.input')
  .attr('disabled');

// Set `disabled` attribute value
$('.input')
  .attr('disabled', true);

// Set values for multiple attributes
$('.input')
  .attr({
    name: 'input-name',
    disabled: true
  });
```

## before

Inserts the specified content before selected elements.

Method works similar to [jQuery.before](https://api.jquery.com/before/).

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Insert `.first` before `.second`
$('.second')
  .before('.first');
```

## clear

Clears selected elements content.

| Params | Type | Return type |
|--------|------|-------------|
| -      | -    | DomElement  |

### Usage

```js
// Clear `.element` content
$('.element')
  .clear();
```

## clone

Returns a collection of copies of selected elements. The elements are copied along with all their contents.

Method works similar to [jQuery.clone](https://api.jquery.com/clone/).

| Params  | Type  | Return type |
|---------|-------|-------------|
| -       | -     | DomElement  |

### Usage

```js
// Copy elements and add them to the end of `body`
$('.element')
  .clone()
  .appendTo(body);
```

## each

Calls the passed function for each selected element.

Method works similar to [jQuery.each](https://api.jquery.com/each/).

| Params   | Type     | Return type |
|----------|----------|-------------|
| callback | Function | DomElement  |

:warning: **Important note**  
When passing an arrow function as a parameter, the context is lost and access to the element is possible only through
the arguments of the passed function.

### Usage

```js
// Iteration with passed callback
$('.element')
  .each(function (el, i) {
    // context (this) is equal to the element itself
    // el - element, equal to `this` in this case
    // i - element index
    this.textContent = `Element index: ${i + 1}`;
  });

// Same, iteration with arrow function as callback
$('.element')
  .each((el, i) => {
    el.textContent = `Element index: ${i + 1}`;
  });
```

## empty

Removes the contents of selected elements without deleting the elements themselves.

Method works similar to [jQuery.empty](https://api.jquery.com/empty/).

| Params | Type | Return type |
|--------|------|-------------|
| -      | -    | DomElement  |

### Usage

```js
// Remove `.element` content
$('.element')
  .empty();
```

## html

Depending on passed parameters, returns the HTML content of first selected element, or sets it for all selected
elements.

Method works similar to [jQuery.html](https://api.jquery.com/html/).

| Params              | Type            | Return type |
|---------------------|-----------------|-------------|
| -                   | -               | string      |
| replace             | boolean         | string      |
| htmlString          | string          | DomElement  |
| htmlString, replace | string, boolean | DomElement  |

:warning: **Important note**  
Compared to similar jQuery method, entire replacement is available with passing `true` as a second parameter.

### Usage

```js
// Get `.element` content
const elementHtml = $('.element')
  .html();

// Get `.element` entire content
const elementOuterHtml = $('.element')
  .html(true);

// Replace `.element` content
$('.element')
  .html('<p>Hello world</p>');

// Replace entire content of `.element`
$('.element')
  .html('<p>Hello world</p>', true);
```

## insertAfter

Inserts the specified content after selected elements.

Method works similar to [jQuery.insertAfter](https://api.jquery.com/insertAfter/).

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Insert `.second` after `.first`
$('.second')
  .insertAfter('.first');
```

## insertBefore

Inserts the specified content before selected elements.

Method works similar to [jQuery.insertBefore](https://api.jquery.com/insertBefore/).

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Insert `.first` before `.second`
$('.first')
  .insertBefore('.second');
```

## outerHtml

Returns the entire HTML content for the first selected element as a string.

If `htmlString` parameter is passed, replaces the entire content of all selected elements with passed HTML string and
returns a
collection of updated elements.

| Params     | Type   | Return type |
|------------|--------|-------------|
| -          | -      | string      |
| htmlString | string | DomElement  |

### Usage

```js
// Get entire content of first `.element`
const elementOuterHtml = $('.element')
  .outerHtml();

// Replace entire content for all `.element`
$('.element')
  .outerHtml('<div class="custom-element"></div>')
```

## prepend

Inserts the specified content at the beginning of selected elements.

Method works similar to [jQuery.prepend](https://api.jquery.com/prepend/).

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Insert `.inner` at the beginning of `.outer`
$('.outer')
  .prepend('.inner');
```

## prependTo

Inserts the specified content at the beginning of selected elements.

Unlike the [prepend](https://github.com/digikid/dom-element/blob/main/docs/ru-RU/MANIPULATION.md#prepend) method, the
parent element selector is passed as a parameter.

Method works similar to [jQuery.prependTo](https://api.jquery.com/prependTo/).

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Insert `.inner` at the beginning of `.outer`
$('.inner')
  .prependTo('.outer');
```

## prop

Depending on passed parameters, gets the property value by key for first selected element, or sets value for all
selected elements.

Method works similar to [jQuery.prop](https://api.jquery.com/prop/).

| Params      | Type          | Return type |
|-------------|---------------|-------------|
| name        | string        | any         |
| value       | {string: any} | DomElement  |
| name, value | string, any   | DomElement  |

### Usage

```js
// Get `checked` property value
const isChecked = $('.input')
  .prop('checked');

// Set `checked` property value
$('.input')
  .prop('checked', true);

// Set value of multiple properties
$('.input')
  .prop({
    name: 'input-name',
    checked: true
  });
```

## remove

Removes selected elements from DOM.

Method works similar to [jQuery.remove](https://api.jquery.com/remove/).

| Params | Type | Return type |
|--------|------|-------------|
| -      | -    | DomElement  |

### Usage

```js
// Remove all `.element`
$('.element')
  .remove();
```

## removeAttr

Removes an attribute from each selected element.

Method works similar to [jQuery.removeAttr](https://api.jquery.com/removeAttr/).

| Params | Type   | Return type   |
|--------|--------|---------------|
| name   | string | DomElement    |

### Usage

```js
// Remove `for` attribute for all `.label`
$('.label')
  .removeAttr('for');
```

## removeClass

Removes CSS class from each selected element.

Method works similar to [jQuery.removeClass](https://api.jquery.com/removeClass/).

| Params       | Type   | Return type |
|--------------|--------|-------------|
| className[s] | string | DomElement  |

### Usage

```js
// Remove `is-active` class for all `.element`
$('.element')
  .removeClass('is-active');

// Remove `is-active` and `is-checked` classes
$('.element')
  .removeClass('is-active is-checked');
```

## removeProp

Removes a property from each selected element.

Method works similar to [jQuery.removeProp](https://api.jquery.com/removeProp/).

| Params | Type   | Return type |
|--------|--------|-------------|
| name   | string | DomElement  |

### Usage

```js
// Remove `disabled` properties for all `.input`
$('.input')
  .removeProp('disabled');
```

## replaceWith

Replaces each selected element with the element that matches the passed selector and returns a collection of the updated
elements.

Method works similar to [jQuery.replaceWith](https://api.jquery.com/replaceWith/).

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Replace all `.previous` with `.current`
$('.previous')
  .replaceWith('.current');
```

## text

Depending on passed parameters, returns the text content of first selected element or sets value for all selected
elements.

Method works similar to [jQuery.text](https://api.jquery.com/text/).

| Params | Type   | Return typ |
|--------|--------|------------|
| -      | -      | string     |
| value  | string | DomElement |

### Usage

```js
// Get text content of `.element`
const elementText = $('.element')
  .text();

// Replace text content of `.element`
$('.element')
  .text('Hello world');
```

## toggleClass

Toggles CSS classes for each selected element.

If element contains the passed class, it's removed. Otherwise, the class is added to the element.

Method works similar to [jQuery.toggleClass](https://api.jquery.com/toggleClass/).

| Params       | Type   | Return type |
|--------------|--------|-------------|
| className[s] | string | DomElement  |

### Usage

```js
// If `.element` does not contain the `is-active` class, it will be added
$('.element')
  .toggleClass('is-active');

// Same with multiple classes
$('.element')
  .toggleClass('is-active is-checked');
```

## unwrap

Removes wrapper of each selected element without changing their content.

Method works similar to [jQuery.unwrap](https://api.jquery.com/unwrap/).

| Params  | Type | Return type |
|---------|------|-------------|
| -       | -    | DomElement  |

### Usage

```js
// Remove `.element` wrapper
$('.element')
  .unwrap();
```

## val

Depending on passed parameters, gets value for first selected element, or sets value for all
selected elements.

For multiple selects values are returned as an array. To set the value of these selects, you must pass them as an array.

Method works similar to [jQuery.val](https://api.jquery.com/val/).

| Params  | Type                                 | Return type                          |
|---------|--------------------------------------|--------------------------------------|
| -       | -                                    | string &#124; number &#124; string[] |
| value   | string &#124; number &#124; string[] | DomElement                           |

### Usage

```js
// Get `.input` value
const inputValue = $('.input')
  .val();

// Set `.input` value
$('.input')
  .val('value');

// Get multiple select values as an array
const selectValues = $('.multiple-select')
  .val();

// Set multiple select values
$('.multiple-select')
  .val(['option-1', 'option-2', 'option-3']);
```

## wrap

Wraps each selected element in a new element, passed as an HTML string.

Method works similar to [jQuery.wrap](https://api.jquery.com/wrap/).

| Params     | Type   | Return type |
|------------|--------|-------------|
| htmlString | string | DomElement  |

### Usage

```js
// Wrap all `.element` in `div.wrapper`
$('.element')
  .wrap('<div class="wrapper"></div>');
```

## wrapInner

Wraps the contents of each selected element in a new element, passed as an HTML string.

Method works similar to [jQuery.wrapInner](https://api.jquery.com/wrapInner/).

| Params     | Type   | Return type |
|------------|--------|-------------|
| htmlString | string | DomElement  |

### Usage

```js
// Wrap all `.element` content in `div.inner-wrapper`
$('.element')
  .wrapInner('<div class="inner-wrapper"></div>');
```
