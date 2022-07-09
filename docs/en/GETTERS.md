# Getters

## exists

Checks if element exists in DOM.

| Params | Type | Return type |
|--------|------|-------------|
| -      | -    | boolean     |

### Usage

```js
// Check if `.element` exists
const isElementExists = $('.element')
  .exists();
```

## get

Depending on passed parameters, returns an array of selected elements or an element corresponding to passed index.

Method works similar to [jQuery.get](https://api.jquery.com/get/).

| Params   | Type    | Return type             |
|----------|---------|-------------------------|
| -        | -       | HTMLElement[]           |
| index    | number  | HTMLElement &#124; null |

### Usage

```js
// Get an array containing all selected elements
const elementsArray = $('.element')
  .get();

// Get the first selected `.element`
const firstElement = $('.element')
  .get(0);
```

## hasClass

Checks if first selected element has the passed CSS class.

Method works similar to [jQuery.hasClass](https://api.jquery.com/hasClass/).

| Params    | Type    | Return type |
|-----------|---------|-------------|
| className | string  | boolean     |

### Usage

```js
// Check if first `.element` has `is-active` class
const isActive = $('.element')
  .hasClass('is-active');
```

## index

Returns index relative to siblings for first selected element.

Method works similar to [jQuery.index](https://api.jquery.com/index/).

| Params | Type | Return type |
|--------|------|-------------|
| -      | -    | number      |

:warning: **Important note**  
If element is not found, this method returns `-1`.

### Usage

```js
// Get `.element` index relative to his siblings
const elementIndex = $('.element')
  .index();
```

## is

Checks if first selected element matches the given selector.

Method works similar to [jQuery.is](https://api.jquery.com/is/).

| Params   | Type   | Return type |
|----------|--------|-------------|
| selector | string | boolean     |

### Usage

```js
// Check if `.element` matches `.is-active` selector
const isActive = $('.element')
  .is('.is-active');
```

## map

Returns an array of returned values for each selected element.

If no parameter is passed, an empty array will be returned.

Method works similar to [jQuery.map](https://api.jquery.com/map/).

| Params   | Type     | Return type |
|----------|----------|-------------|
| callback | Function | any[]       |

:warning: **Important note**  
When passing an arrow function as a parameter, the context is lost and access to the element is possible only through
the arguments of the passed function.

### Usage

```js
// Get all `.checkbox` values as an array
const ids = $('.checkbox')
  .map(function (el, i) {
    // context (this) is equal to the element itself
    // el - element, equal to `this` in this case
    // i - element index

    return this.value;
  })

// Same with passing arrow function
const ids = $('.checkbox')
  .map(el => el.value);
```

## raw

Returns first selected element, or `null` if element is not found.

Similar to a call `.get(0)`.

| Params  | Type | Return type             |
|---------|------|-------------------------|
| -       | -    | HTMLElement &#124; null |

:warning: **Important note**  
If you need to get an array of all selected elements,
use [get](https://github.com/digikid/dom-element/blob/main/docs/en/GETTERS.md#get)
method.

### Usage

```js
// Get first selected `.element`
const element = $('.element')
  .raw();
```
