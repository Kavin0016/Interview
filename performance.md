# OPTIMIZATION TECHNIQUE FOR FE

Here we are going to list all the possible optimization technique in different layers:

## Network Optimization.

1. load Js Async :: use defer or module type in script tag
1. **Lazy Loading**
    1. use *loading* attribute to lazy load the assets
        - eg: <img src="./img.png" loading="lazy" />
    1. use *fetchpriority* attribute to prioritize the fetching
        - eg: <img src="./img.png" fetchpriority="low" />
    1. use *Intersection Observer* for off screen content to load or fetch in a lazy manner
    1. use *content-visibility* CSS proprty to Lazy Render (including layout and painting) the content, 
        there by avoiding the processing cost and rendering time.
        hint: use this along with *contain-intrinsic-size* CSS property for better performance
        - eg: 
        ```CSS
        .lazy-render {
            contain-intrinsic-size: 0 1.1em;
            content-visibility: auto;
        }
        ```
    1. use *media* attribute in Style scripts to serve the CSS on critical basis.
        - eg: <link rel="stylesheet" href="./styles/mobile.css" media="screen and (max-width: 600px)" />
1. **Resource Hinting**
    use the below listed relation attribute values in link tag
    1. preload: pre-load resource critical for rendering
    1. prefetch: pre-fetch the resource where we can fetch and store it in cache for future execution
    1. preconnect: pre-connect to domain there by we can reduce the handshake roundtrip time when needed    
    1. prerender: pre-render the component where it can be used when its needed, it will download all the resources required to render, browser will open a hidden tab then render it on that hidden tab, once the  main page needed, it shows up with the pre-renderd component
1. Service Workers: Should be used to cache and make decision on fetch
1. **Rendering Mechanisms**
    1. Server Rendering
        1. Server will generate required file to the client and routing is handled at Server.
            - eg: Gmail HTML, Hacker News
    1. Static SSR
        1. It's a static page build and pre-renders at server side and sends to client, which has no interactivity. 
        1. JS is removed at the server
            - eg: Docusaurus, Netflix
    1. SSR with (Re)hydration
        1. It's a single page build at server side and sends to client, which has interactivity.
        1. Client takes care for hydration
            - eg: Next.js, Razzle
    1. CSR with pre-rendering
        1. It's basically Client Side application, which pre-renders the required resource in advance.
            - eg: Gatsby, Vuepress
    1. Full CSR
        1. It's completelly Client Side application, everything takes care at client end.
        1. Styling, Hydration, routing is boosted at Client            
1. Compression
    1. Brotli
    1. gZip

## Performance Optimization

In this section we are going to look into optimizations with Assets

### Images
1. Compression: compress the image size to reduce network load,
1. Lazy loading: make use of Intersection Observer to lazy load the image,
1. Progressive Enhancement: use optimized image formats in a sequence way by making use of <picture> and <source> tags,
1. Client hint HTTP: In lots of devices and single pixel in css may or may not equal to device display resolution pixel, to load exact 
    dimentions of images across different make use of *window.devicePixelRatio* to set the right dimentions to the asset
1. Responsive Images: make use of *srcset* attribute to responsively load the image assets,
1. Adaptive Images: make use of the below parameters to adapt to the systems status,
    - *navigator.connector.saveData*: tells whether the system is in power save mode or not,
    - *navigator.deviceMemory*: tells the device memory (RAM),
    - *navigator.hardwareConcurrency*: tell the no.of cores present in the machine.
1. Blur Effect: make use of single pixel image of actual image then it as a placeholder until the actual image is loaded by streatching it to 100%,
1. Solid primary color: use the primary color of the image as placeholder until the actual image loads
1. Sprites: use a single virtual grid image and position the image relatively so that the visible image shows up in front.

### Fonts
1. Font display decorator,
1. FLOUT with class,
1. Data URI,
1. Preload,
1. Progressive Enhancement,
1. Async load css,
1. Font face Observer

### CSS
1. Lazy loading,
1. Critical CSS rendering

### JS
1. Lazy loading,
1. Web worker/Service worker,
1. defer vs async

