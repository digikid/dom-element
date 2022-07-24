# Data management

## data

Creates a storage of arbitrary data with a binding to selected element and performs manipulation with the stored
data.

Depending on passed parameters, gets data by key for first selected element, or sets the passed value for all selected
elements.

Method works similar to [jQuery.data](https://api.jquery.com/data/).

| Params      | Type          | Return type   |
|-------------|---------------|---------------|
| -           | -             | {string: any} |
| key         | string        | any           |
| value       | {string: any} | DomElement    |
| name, value | string, any   | DomElement    |

### Usage

```js
// Add value to `.element` storage
$('.element')
  .data('num', 1);

// Add multiple values
$('.element')
  .data({
    a: 'a',
    b: 'b',
    c: 'c'
  });

// Get storage values, returns an object:
// {
//   num: 1, 
//   a: 'a',
//   b: 'b',
//   c: 'c'
// }
const elementData = $('.element')
  .data();
```
