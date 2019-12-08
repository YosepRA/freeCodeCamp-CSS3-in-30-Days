# Lecture Notes

## Sticky Footer  
In order to create a footer that sticks at the bottom of the page, here are the requirements:  
- Main container.
- `<html>`, `<body>`, and main container must have a `height`/`min-height` of 100%.
- The idea is to span the height of two document's major container to 100% of the screen's height and makes the main container to have a minimum height just the same as html and body's height.
- Put the `<footer>` in a separate container from main container. The main container with `min-height` of 100% will *push* the footer to the bottom.
- Give the main container a `margin-bottom` for spacing and limit for footer so that it won't surpass that margin and collapse with the main container.