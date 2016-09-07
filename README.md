# 6.1 Review Modal

## Dev todo list
[x] - bring in boilerplate
[x] - make a view that has a single image
  [x] - src
  [x] - alt
  [x] - class
[x] - modal element view
  [x] - set up file for modal
  [x] - looks like a modal (full size, opaque background color to see content
  [x] - has a full width/height image in center
  [x] - class that makes it viewable
  [x] - hidden by default
[] - handle the click on the single image view
  [x] - setup handler
  [x] - adds class to make modal viewable
  [] - injects the image source
  [] - injects the image alt tag

## Development
  - `$ npm install webpack -g`
  - `$ npm install babel-cli -g`
  - `$ npm install webpack-dev-server -g`
  - `$ npm install`

## TIL
- Why to separate files (modularize)
  1. Single view rule - if your code cannot be viewed in your code editor
      "above the fold"
  2. Error handling is more explicit (less code)
  3. Team oriented work... less hands in the same file, less merge conflicts
  4. Designing meaning of specific files: explicit purpose
  5. Time to learn: easier to on board from not knowing wtf is happening
  6. Grouping like things. "Single Responsibility Rule"
  7. Refactors are far easier.
