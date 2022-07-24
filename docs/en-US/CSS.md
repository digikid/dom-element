# Styles

## css

Depending on passed parameters, gets the value of the CSS property by key for first selected element, or
sets passed value for all selected elements.

Method works similar to [jQuery.css](https://api.jquery.com/css/).

| Params      | Type                         | Return type |
|-------------|------------------------------|-------------|
| name        | string                       | string      |
| value       | {string: string} &#124; null | DomElement  |
| name, value | string, string               | DomElement  |

### Usage

```js
// Get margin-top value
const marginTop = $('.element')
  .css('margin-top');

// Set margin-top value
$('.element')
  .css('margin-top', '50px');

// Set value for multiple properties
$('.element')
  .css({
    marginTop: '50px',
    color: 'green'
  });
```

## height

Depending on passed parameters, returns a numeric value of the height in pixels for first selected element or sets
passed value for all selected elements.

Method works similar to [jQuery.height](https://api.jquery.com/height/).

| Params   | Type                 | Return type |
|----------|----------------------|-------------|
| -        | -                    | number      |
| value    | number &#124; string | DomElement  |

:warning: **Important note**  
If element is not found, this method returns `0`.

### Usage

```js
// Get the numeric height value of first `.element`
const height = $('.element')
  .height();

// Set the height to 100px for all `.element`
$('.element')
  .height(100);

// Same, set the value as a string
$('.element')
  .height('100px');
```

## hide

Hides elements by setting each of them to `display: none;`.

Method works similar to [jQuery.hide](https://api.jquery.com/hide/).

| Params  | Type | Return type |
|---------|------|-------------|
| -       | -    | DomElement  |

:warning: **Important note**  
Compared to the similar jQuery method, animation is not supported.

### Usage

```js
// Hide `.element`
$('.element')
  .hide();
```

## offset

Returns the current coordinates of the first selected element relative to the viewport.

The returned object contains top and left properties equal to the element's coordinate values in pixels.

Method works similar to [jQuery.offset](https://api.jquery.com/offset/).

| Params   | Type | Return type                                        |
|----------|------|----------------------------------------------------|
| -        | -    | {top: number &#124; null, left: number &#124; null |

:warning: **Important note**  
If element is not found, the values of returned object will be `null`.

### Usage

```js
// Get coordinates relative to viewport
const elementOffset = $('.element')
  .offset();
```

## outerHeight

Depending on passed parameters, returns a numeric value of height in pixels (including borders and padding /
margins) for first selected element.

Method works similar to [jQuery.outerHeight](https://api.jquery.com/outerHeight/).

| Params        | Type    | Return type |
|---------------|---------|-------------|
| -             | -       | number      |
| includeMargin | boolean | number      |

:warning: **Important note**  
If element is not found, this method returns `0`.

### Usage

```js
// Get the first `.element` height value
// (including borders and padding)
const outerHeight = $('.element')
  .outerHeight();

// Get the first `.element` height value
// (including borders and padding)
const outerHeightWithMargin = $('.element')
  .outerHeight(true);
```

## outerWidth

Depending on passed parameters, returns a numeric value of width in pixels (including borders and padding / margins) for
first selected element.

Method works similar to [jQuery.outerWidth](https://api.jquery.com/outerWidth/).

| Params        | Type    | Return type |
|---------------|---------|-------------|
| -             | -       | number      |
| includeMargin | boolean | number      |

:warning: **Important note**  
If element is not found, this method returns `0`.

### Usage

```js
// Get the first `.element` width value
// (including borders and padding)
const outerWidth = $('.element')
  .outerWidth();

// Get the first `.element` width value
// (including borders and padding)
const outerWidthWithMargin = $('.element')
  .outerWidth(true);
```

## position

Returns the current coordinates of the first selected element relative to his parent.

The returned object contains top and left properties equal to the element's coordinate values in pixels.

Method works similar to [jQuery.position](https://api.jquery.com/position/).

| Params  | Type | Return type                                          |
|---------|------|------------------------------------------------------|
| -       | -    | top: number &#124; null, left: number &#124; null }  |

:warning: **Important note**  
If element is not found, the values of returned object will be `null`.

### Usage

```js
// Get coordinates relative to the parent
const elementPosition = $('.element')
  .position();
```

## rect

Returns an object containing the size and coordinates relative to viewport for first selected element.

| Params   | Type | Return type                                                                                                                 |
|----------|------|-----------------------------------------------------------------------------------------------------------------------------|
| -        | -    | {width: number, height: number, top: number, bottom: number, left: number, right: number, x: number, y: number} &#124; null |

:warning: **Important note**  
If element is not found, this method returns `null`.

### Usage

```js
// Get `.element` rect
const elementRect = $('.element')
  .rect();
```

## show

Shows hidden elements by changing the `display` property.

- If element was forcibly hidden via `display: none`, this value is removed.
- If initial value of `display` is `none`, the value of `display` will be `displayValue`.

Default value for `displayValue` is `block`.

Method works similar to [jQuery.show](https://api.jquery.com/show/).

| Params       | Type   | Return type |
|--------------|--------|-------------|
| -            | -      | DomElement  |
| displayValue | string | DomElement  |

:warning: **Important note**  
Compared to the similar jQuery method, animation is not supported.

### Usage

```js
// Show hidden element
$('.hidden')
  .show();

// Show hidden element by setting "display: flex"
$('.hidden')
  .show('flex');
```

## style

Returns an object containing the values of the inline style properties for first selected element.

If called with the `parse` parameter, returns the numeric values of the properties when possible.

| Params      | Type            | Return type                    |
|-------------|-----------------|--------------------------------|
| -           | -               | {string: string}               |
| name        | string          | string                         |
| parse       | boolean         | {string: string &#124; number} |
| name, parse | string, boolean | string &#124; number           |

:warning: **Important note**  
If element is not found, this method returns empty object.

### Usage

```js
// Get inline styles as an object
const elementInlineStyle = $('.element')
  .style();

// Get inline styles as an object with numeric values
const elementInlineStyle = $('.element')
  .style(true);

// Get margin-top value as a string
const elementMarginTop = $('.element')
  .style('margin-top');

// Get value of margin-top as a number
const elementMarginTop = $('.element')
  .style('margin-top', true);
```

## width

Depending on passed parameters, returns a numeric value of the width in pixels for first selected element or sets passed
value for all selected elements.

Method works similar to [jQuery.width](https://api.jquery.com/width/).

| Params  | Type                 | Return type |
|---------|----------------------|-------------|
| -       | -                    | number      |
| value   | number &#124; string | DomElement  |

:warning: **Important note**  
If element is not found, this method returns `0`.

### Usage

```js
// Get numeric width value of first `.element`
const width = $('.element')
  .width();

// Set the width to 100px for all `.element`
$('.element')
  .width(100);

// Same, set the value as a string
$('.element')
  .width('100px');
```
