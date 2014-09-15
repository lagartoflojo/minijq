minijq
======

A mini version of jQuery, implementing just a subset of its functions.

API
===

First, query elements with `document.querySelector` / `document.querySelectorAll`:

```javascript
var el = document.querySelector('div');
```

Then, you can use the following functions:

```javascript
// Add `some-class` to the element
el.addClass('some-class');

// Remove `some-class` from the element
el.removeClass('some-class');

// Add `some-class` if the element doesn't have it, remove it if it does
el.toggleClass('some-class');

// Check whether the element has the class `some-class`
el.hasClass('some-class');

// Call someFunction when `some-event` is triggered on the element
el.on('some-event', someFunction);
```


