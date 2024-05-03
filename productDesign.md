#   PRODUCT DESIGN

follow RADIO structure

- [R](#requirements) - Requirements 
    - Functional
    - Non Functional
- [A](#architectutre) - Architectutre
- [D](#data-model) - Data Model
- [I](#api-design) - API Model
- [O](#optimizationperformance) - Optimization/Performance

<a id="requirements"></a>

## Requirements

### Functional

~Discuss with Interviewer~

### Non Functional 

- Mobile/Desktop friendly
- Responsiveness
- Security
- Accessibility
- Caching
- Offline Access
- Internationalization
- Observability
- Authentication/Authorization,
- PWA,
- Localization,
- A/B Testing (feature-flag),
- Testing (Unit or E2E),
- CI/CD

<a id="architectutre"></a>

## Architectutre

~Discuss with the Interviewer along with Design Diagram represtenting our Architecture~

<a id="data-model"></a>

## Data Model

~ Asks for few APIs and structure the request and response so that It can can be consumed by relevant components~

<a id="api-design"></a>

## API Design

### HTTP1 VS HTTP2

#### HTTP1

- Limited connect can handle at once,
- Synchronous blocking Queue
- Plain text
- Explicitly need to close the connection
- Single TCP sends one data at a time

#### HTTP2

- Multilplexing
- Multiple connections
- Rich Data
- Parallel Requests
- can sed stream of data in one TCP connection
- Better Compression

### API OPTIONS

#### REST/POOLING/LOMG POOLING

- Statelesss Transation
- Based on CRUD
- returns JSON or XML

#### GRAPHQL

- By Facebook
- Reduce over-fetching or under-fetching
- To Query various nested resources
- if the versioning of API concerned

#### WEBSOCKETS

- full duplex
- low latencty
- uses *ws* protocol which works at lower level than HTTP
- bi-directional
- reduced latency


#### SERVER SIDE EVENTS

#### gRPC

- By Google
- Utilize HTTP2
- Uses Protocol Buffer
- Offers bi-directional Streaming
- more complex due to Protocol Buffer and HTTP2
- more optimal

#### tRPC

- Build with typesafe concerned
- When String strong typesafe concerned between client and the server
- Combination of REST and GQL
- Used in full-stack application

<a id="optimizationperformance"></a>

## Optimization/Performance

- HTTP2,
- Compression Headers,
- Caching,
- Batching Request for Observibility,
- Image Optimization,
- Bundle Splitting
    - Tree Shaking
    - Lazy Loading
    - minify
- Rendering
    - Handle Race Condition,
    - Application caching (LS,SS,COOIKE)
    - Import only needed module
    - preload JS when needed
    - Tree Shaking
    - Virtualization
    - Avoid css-reflow using CSS-IN-JS
    - Rate Limiting Debounce/Throttling

## OTHERS

### Accessibility

- Cross device testing for compactability
- keyboard Navigation
- REM for fonts
- ARIA roles
- HTML Semantic Tags

### Security

- XSS
    - To protect XSS attack use `X-XSS-Protection` header along with `content_security_policy` header
- rate Limiting
    - use Debouncing and Throttling to limit the triggers.
- CORS
    - To protect CORS, since its on server end, migrate all the resources to same domain or build node or express server in the middle to server all the resources or use `Access-Control-Allow-Origin` to defined permitted urls.
