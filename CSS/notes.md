# Simple tips to making responsive layouts the easy way

- Before you write one line of css, the website is responsive by default :-) (because the browser will try to fit everything in the viewport)
- Avoid fixed sizes (px)
- use media queries to ADD COMPLEXITY, not to remove it --> start with the mobile version, and then add complexity with media queries (ex: multiple columns, etc)
- usually, 320px (css pixels) is the smallest width that you need to support
- use `em` units for font sizes, and `rem` units for everything else (because they are relative to the font size of the root element, which is usually the `html` element)
- use `max-width` instead of `width` for images, so that they don't overflow the container

# CSS Useful Features

- scroll-snap-type: use it to make a container snap to the next element when scrolling (useful for carousels)
- order: use it to change the order of elements (useful for mobile first layouts) (it's better than using flexbox order, because it doesn't affect the source order)
