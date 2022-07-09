# Effects

These methods create animations for the appearance and disappearance of elements.

There are several differences from jQuery:

- Disappearance effect will not run if element is hidden (`display` is `none`).
- Appearance effect will not run if element is visible (`display` is not equal to `none`).

Default `duration` value for all effects is `400` ms.

| Params             | Type             | Return type |
|--------------------|------------------|-------------|
| -                  | -                | DomElement  |
| duration           | number           | DomElement  |
| callback           | function         | DomElement  |
| duration, callback | number, Function | DomElement  |

:warning: **Important note**  
When passing an arrow function as a parameter, the context is lost and access to the element is possible only through
the arguments of the passed function.

### Usage

```js
// Run animation
$('.element')
  .fadeIn();

// Run animation with duration of 1 second
$('.element')
  .fadeIn(1000);

// Run animation with default duration and call function at animation ends
$('.element')
  .fadeIn(function (el) {
    // context (this) is equal to the element itself
    // el - element, equal to `this` in this case
    this.classList.add('is-active');
  });

// Run animation with duration of 1 second and call an arrow function at animation ends
$('.element')
  .fadeIn(1000, el => el.classList.add('is-active'));
```

## fadeIn

Shows hidden element by smoothly changing opacity from `0` to `1`.

Method works similar to [jQuery.fadeIn](https://api.jquery.com/fadeIn/).

## fadeOut

Hides visible element by smoothly changing opacity from `1` to `0`.

Method works similar to [jQuery.fadeOut](https://api.jquery.com/fadeOut/).

## fadeToggle

Shows or hides an element depending on its visibility.

Method works similar to [jQuery.fadeToggle](https://api.jquery.com/fadeToggle/).

## slideDown

Shows a hidden element with a smooth collapse animation.

Method works similar to [jQuery.slideDown](https://api.jquery.com/slideDown/).

## slideToggle

Shows or hides element by smooth collapse / expand animation.

Method works similar to [jQuery.slideToggle](https://api.jquery.com/slideToggle/).

## slideUp

Hides the visible element with a smooth expand animation.

Method works similar to [jQuery.slideUp](https://api.jquery.com/slideUp/).

