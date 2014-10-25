# Simple list

## Task
Create a simple list application

### Functionality
- A user inputs an item into the text field, which is then added to the list on clicking 'Add'.
- A user can delete an item from the list by clicking 'Delete'.
- The count updates depending on how many items are in the list.

### Constraints
- Use of observer pattern (or similar).
- Counting of DOM elements to find out the number of items in the list isn't acceptable. Information relating to the current list should be stored in a JS object or local storage, for example.
- Browser support is latest Chrome or Firefox.
- Use native JS DOM over libraries where possible and practical.
- No full MVC libraries to be used (e.g. backbone, knockout)
- Replication of exact design (pictured above) isn't necessary.
- CSS and JavaScript must be external files.

### Extra points
- Use of TDD/BDD methods.
- Improvements to app.
- Rationalisation of app architectural decisions in text, especially if running out of time.

## Solution

## Prerequisites
Install front-end packages with:

```shell
~$ bower install
```

### Browser support
Latest Chrome

### Testing
Open `spec/SpecRunner.html` in your browser of choice.

### TODO
- `Todo`s are frequently allocated and deallocated. Creating a pool of
  `Todo`s and reusing them could improve memory consumption and could trigger
  the garbage collector less frequently.
- No persistent storage.
- No way to bootstrap the list with `Todo`s.
- No way to edit `Todo`.
- `render` methods could benefit from a template engine.
- `Observer` could fail in few edge cases (i.e. when there are exceptions in one of the callbacks).
- key binding on `<Return>`.
- util functions such as `extend`, `isString`, `isFunction`, `isNumber` should
  be extracted to an `Util` module.
- in the `Observer` it is possible to register the same callback twice (or more).
