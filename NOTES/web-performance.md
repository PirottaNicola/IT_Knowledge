# The ultimate guide to web performance

- # LCP (Largest Contentful Paint)
  This metric helps to analyze **loading performance**. It measures the time it takes for the largest content element to be rendered on the screen. The largest element is usually an image or a video. The LCP **should occur within the first 2.5 seconds** of the page starting to load. If it takes longer than 4 seconds, it is considered a bad LCP. To optimize it, you can:
  - Optimize the server response time
  - Optimize the critical rendering path
  - Remove render-blocking javascript
  - Optimize images and videos
  - Use a content delivery network (CDN)
  - Use lazy loading
  - Use a faster web host
  - Use a caching plugin
- # FID (First Input Delay)
  Measures the time it takes for the browser to respond to the first user interaction. It is a good metric to measure **interactivity**. It should be less than 100 milliseconds. To optimize it, you can:
  - Remove unused javascript
  - Use a web worker
- # CLS (Cumulative Layout Shift)
  Measures visual stability, which is the amount of unexpected layout shift of visual page content. It is a good metric to measure **visual stability**. It should be less than 0.1. You can measure it by generating a Lighthouse reporting dev tools. To optimize it, you can:
  - Add size attributes to images and videos
  - Add new UI elements below the fold
  - Use set size attribute dimensions for ads
  - Use CSS animations instead of javascript animations
  - Use the transform property instead of the top property

A usefull to measure all this web performance metrics in all the pages of a website is Unlighthouse (https://unlighthouse.dev/), which you can use directly from ur terminal using _npx unlighthouse --site urlOfWebsite_.
