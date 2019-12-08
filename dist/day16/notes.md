# Lecture Notes

## Modal Window

The requirements to create a modal window:  
- Modal container & overlay div.
- The important thing is the `z-index` position of the related elements (layering).
- Find a way to make overlay div to span full height & width of the viewport. 
- Find a way to center the modal container. The positioning will most likely be `absolute` to viewport.
- Don't forget about positioning and all its requirements for it to be applied.
- The app state will toggle between the creation and destruction of required elements.
- Create a uniform wrapper structure so that it can be generated easily using JavaScript.
- Consider `pointer-event` property if you have problem with *clicking on something*.