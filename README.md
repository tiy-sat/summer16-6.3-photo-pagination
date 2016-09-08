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
[x] - handle the click on the single image view
  [x] - setup handler
  [x] - adds class to make modal viewable
  [x] - injects the image source
  [x] - injects the image alt tag
[x] - album structure
  [x] - create data model for albums/photos
  [x] - list of photo thumbnails (100x100)
  [x] - names of albums
  [x] - heading referencing current album displayed
[x] - clicking album name updates photos visible in list
  [x] - setup click handler on album names
  [x] - get currently clicked album name
  [x] - use said album name to re-render from data
[] - when modal open paginate between photos in album with left/right arrows
  [x] - have left and right arrows in structure
  [x] - position left and right arrows accordingly
  [] - pass prop reference to child of current album data
  [] - set initial state to track current photo index with modal component
  [] - handle click for both arrows to increment or decrement

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
