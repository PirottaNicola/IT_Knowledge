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

# Different ways to render a web page

## SSR (Server Side Rendering)

SSR means that the HTML is generated on the server and sent to the client. The client receives the HTML and displays it. The client then downloads the javascript and executes it. The javascript then fetches the data and updates the HTML. This is the traditional way of rendering a web page. It is good for SEO because the HTML is already generated on the server. It is also good for performance because the client receives the HTML faster. However, it is bad for user experience because the user has to wait for the javascript to be downloaded and executed before the page is interactive. It is also bad for developer experience because you have to write the same code twice, once for the server and once for the client. It is also bad for performance because the javascript bundle is usually large and takes a long time to download and execute.

## CSR (Client Side Rendering)

CSR means that the HTML is generated on the client. The client downloads the javascript and executes it. The javascript then fetches the data and updates the HTML. This is the modern way of rendering a web page. It is good for user experience because the page is interactive faster. It is also good for developer experience because you only have to write the code once. It is also good for performance because the javascript bundle is usually smaller and takes less time to download and execute. However, it is bad for SEO because the HTML is not generated on the server. It is also bad for performance because the client receives the HTML slower.

## SSG (Static Site Generation)

SSG means that the HTML is generated at build time. The HTML is then served to the client. The client receives the HTML and displays it. The client then downloads the javascript and executes it (Hydration). The javascript then fetches the data and updates the HTML. It is good for SEO because the HTML is already generated at build time. It is also good for performance because the client receives the HTML faster. However, it is bad for user experience because the page is not interactive until the javascript is downloaded and executed. It is also bad for developer experience because you have to rebuild the site every time you make a change.
