# Traversing

## add

Adds new elements to current collection.

Method works similar to [jQuery.add](https://api.jquery.com/ad/).

### Params

| Params   | Type                                                                             | Return type |
|----------|----------------------------------------------------------------------------------|-------------|
| selector | [Selector](https://github.com/digikid/dom-element/blob/main/README.md#selectors) | DomElement  |

### Usage

```js
// Get collection from `.element-1` and `.element-2`
$('.element-1')
  .add('.element-2');
```

## children

Returns a collection of children for each selected element.

If `selector` parameter is passed, the resulting collection is filtered by passed CSS selector.

Method works similar to [jQuery.children](https://api.jquery.com/children/).

| Params   | Type   | Return type |
|----------|--------|-------------|
| -        | -      | DomElement  |
| selector | string | DomElement  |

### Usage

```js
// Get all `.element` chidlren
$('.parent')
  .children();

// Get all `.element` chidlren with `.is-active` class
$('.parent')
  .children('.children');
```

## closest

Returns a collection of the first elements that match the given selector while moving up the DOM tree.

Method works similar to [jQuery.closest](https://api.jquery.com/closest/).

| Params   | Type   | Return type |
|----------|--------|-------------|
| selector | string | DomElement  |

### Usage

```js
// Get all `.parent` containing `.children`
$('.childen')
  .closest('.parent');
```

## eq

Returns the element at the given index in the array of selected elements.

Method works similar to [jQuery.eq](https://api.jquery.com/eq/).

| Params | Type   | Return type |
|--------|--------|-------------|
| index  | number | DomElement  |

:warning: **Important note**  
If element is not found, this method returns empty collection.

### Usage

```js
// Get first selected `.element`
$('.element')
  .eq(0);
```

## even

Returns a collection of elements with even ordinal number.

| Params  | Type | Return type |
|---------|------|-------------|
| -       | -    | DomElement  |

:warning: **Important note**  
The [jQuery.even](https://api.jquery.com/even/) method returns a collection of elements based on their index in
collection, which causes to non-obvious behavior. This method takes position of the element relative to its siblings and
the numbering starts from 1.

### Usage

```js
// Get all even `.element`
$('.element')
  .even();
```

## filter

Filter elements using the passed selector or function.

Method works similar to [jQuery.filter](https://api.jquery.com/filter/).

| Params   | Type     | Return type |
|----------|----------|-------------|
| selector | string   | DomElement  |
| callback | Function | DomElement  |

### Usage

```js
// Filtering all `.element` with a selector `.is-active`, returns `.element.is-active`
$('.element')
  .filter('.is-active');

// Filtering `.element` with passed function, returns same
$('.element')
  .filter(function (el, i) {
    // context (this) is equal to the element itself
    // el - element, equal to `this` in this case
    // i - element index

    return this.classList.contains('is-active');
  });

// Filtering `.element` with an arrow function, returns the same
$('.element')
  .filter((el, i) => el.classList.contains('is-active'));
```

## find

Returns collection of children for each selected element that match passed selector.

Method works similar to [jQuery.find](https://api.jquery.com/find/).

| Params   | Type     | Return type |
|----------|----------|-------------|
| selector | string   | DomElement  |

### Usage

```js
// Get all `.child` that are children of `.parent`
$('.parent')
  .find('.child');
```

## first

Returns a collection of the first elements relative to their parents.

Method works similar to [jQuery.first](https://api.jquery.com/first/).

| Params  | Type | Return type |
|---------|------|-------------|
| -       | -    | DomElement  |

:warning: **Important note**  
The [jQuery.first](https://api.jquery.com/first/) method returns a collection of the first element relative to the
collection, which causes to non-obvious behavior. This method takes position of the element relative to its parent.

### Usage

```js
// Get first `.element` relative to their parents
$('.element')
  .first();
```

## has

Returns a collection of elements that have children matches the given selector.

Method works similar to [jQuery.has](https://api.jquery.com/has/).

| Params   | Type    | Return type |
|----------|---------|-------------|
| selector | string  | DomElement  |

### Usage

```js
// Get all `.parent` containing `.children`
$('.parent')
  .has('.children');
```

## last

Returns a collection of the last elements relative to their parents.

Method works similar to [jQuery.last](https://api.jquery.com/last/).

| Params   | Type | Return type |
|----------|------|-------------|
| -        | -    | DomElement  |

:warning: **Important note**  
The [jQuery.last](https://api.jquery.com/last/) method returns a collection of the last element relative to the
collection, which causes to non-obvious behavior. This method takes position of the element relative to its parent.

### Usage

```js
// Get last `.element` relative to their parents
$('.element')
  .last();
```

## next

Returns a collection of sibling elements immediately following after each selected element.

Method works similar to [jQuery.next](https://api.jquery.com/next/).

| Params   | Type | Return type |
|----------|------|-------------|
| -        | -    | DomElement  |

### Usage

```js
// Get `.element` next siblings
$('.element')
  .next();
```

## not

Filter elements using the passed selector or function, excluding matching elements from the collection.

This method is the opposite
of [filter](https://github.com/digikid/dom-element/blob/main/docs/en-US/TRAVERSING.md#filter).

Method works similar to [jQuery.not](https://api.jquery.com.not/).

| Params   | Type     | Return type |
|----------|----------|-------------|
| selector | string   | DomElement  |
| callback | Function | DomElement  |

### Usage

```js
// Filtering `.element` with `.is-active` selector, returns all `.element` without `is-active` class
$('.element')
  .not('.is-active');

// Filtering `.element` with passed function, returns same
$('.element')
  .not(function (el, i) {
    // context (this) is equal to the element itself
    // el - element, equal to `this` in this case
    // i - element index

    return this.classList.contains('is-active');
  });

// Filtering `.element` with an arrow function, returns the same
$('.element')
  .not((el, i) => el.classList.contains('is-active'));
```

## odd

Returns a collection of elements with odd ordinal number.

| Params   | Type | Return type |
|----------|------|-------------|
| -        | -    | DomElement  |

:warning: **Important note**  
The [jQuery.odd](https://api.jquery.com/odd/) method returns a collection of elements based on their index in
collection, which causes to non-obvious behavior. This method takes position of the element relative to its siblings and
the numbering starts from 1.

### Usage

```js
// Get all odd `.element`
$('.element')
  .odd();
```

## parent

Returns a collection of parents for each of selected elements.

If `selector` parameter is passed, the resulting collection is filtered by passed CSS selector.

Method works similar to [jQuery.parent](https://api.jquery.com/parent/).

| Params   | Type   | Return type |
|----------|--------|-------------|
| -        | -      | DomElement  |
| selector | string | DomElement  |

### Usage

```js
// Get the parents of `.element`
$('.element')
  .parent();

// Get the parents of `.element` with `wrapper` class
$('.element')
  .parent('.wrapper');
```

## prev

Returns a collection of sibling elements immediately following before each selected element.

Method works similar to [jQuery.prev](https://api.jquery.com/prev/).

| Params   | Type | Return type |
|----------|------|-------------|
| -        | -    | DomElement  |

### Usage

```js
// Get `.element` prev siblings
$('.element')
  .prev();
```

## siblings

Returns a collection of siblings for each element in the collection.

If `selector` parameter is passed, the resulting collection is filtered by passed CSS selector.

Method works similar to [jQuery.siblings](https://api.jquery.com/siblings/).

| Params   | Type   | Return type |
|----------|--------|-------------|
| -        | -      | DomElement  |
| selector | string | DomElement  |

### Usage

```js
// Get `.element` siblings
$('.element')
  .siblings();

// Get `.element` siblings with `is-active` class
$('.element')
  .siblings('.is-active');
```
