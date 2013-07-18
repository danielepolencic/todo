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

### Browser support
Latest Chrome

### Testing
Open the `SpecRunner.html` file in your browser of choice.

### TODO
- Todo objects are frequently allocated and deallocated. Creating a pool of
  Todos and reusing them could improve memory and GC.
- No persistent storage.
- No way to bootstrap the todo list with a list of items.
- No way to edit the item.
- Render methods are quite fat. A templating engine could help decouple
  presentation from content and reduce LoC.
- The `Count` module counts item by itself. This has to be refactored if
  a *Delete all* function is introduced.
- Observer can be easily fail (i.e. when there are exceptions in one of the callbacks).
- Signals/slots construct could be more appropriate implementation of the Observer
  pattern in this scenario.
- key binding on `<Return>`
