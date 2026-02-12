# Frontend Architecture Patterns

Architecture is not about file directory structure, it's all layers and how they interact with each other.

## MVC (Model-View-Controller)

```
project-root/
│
├── models/
│   ├── user.js
│   ├── product.js
│   └── index.js
│
├── views/
│   ├── homeView.html
│   ├── productView.html
│   └── errorView.html
│
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   └── index.js
│
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
│
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│
├── app.js
└── package.json
```

### Three Layers

#### Model:
Where application data and business logic presents
### View:
Presentational component (UI)
### Controller:
Responsible to mutate the state of View and Model


**Explanation:**

- `models/` contains files like `user.js`, `product.js`, representing data structures and business logic.
- `views/` contains templates or HTML files used to render UI: `homeView.html`, etc.
- `controllers/` contains logic handling requests and responding based on model data, like `userController.js`.
- `routes/` (optional but common in MVC) holds route definitions mapping endpoints to controllers.
- `public/` holds static assets (CSS, JS, images).
- `app.js` is the entry point of the application.
- `package.json` holds project metadata and dependencies.

## Hierarchical MVC (Model-View-Controller)

This is just the composable MVC structure in small units works together to manage the larger MVC in each page or component.

### Thin & Thick Client

#### Thin Client

It is a **(Thin)** client where less amount of processing happens on clinet and it mostly relies on server for processing.

eg: 
- Multi Page Applications (MPA),
- Static Websites

### Thick Client
- Single Page Application (SPA),
- Offline-first Applicatoins (PWA),
- Google Docs

It is a **(Fat)** clinet where larger amount of processing happens on client and it mostly relies on client only, less dependednt on server

### Fat Controller Problem

In Morden Complex Applications, a controller is taking role of client-side caching, data transformation, API request/response handling, error handling and a lot more. Expecting to do more without much room space.

### Pros & Cons

#### Pros
- MVC is easy to understand,
- MVC is easy to develop & maintain

#### Cons
- The problem of **Fat** controllers,
- communication between modules in not clear,
- the View layer may contain lots of logic than it should hold,
- MVC was introduced in 1979 mainly for traditional MVC where clinet is just the presentational layer, doesn't holds much logic 

### Use Cases

#### Pros
- small to medium sized applications (not for simlpe static website)

#### Cons
- SPA with complex client side state management,
- client side logic sensitive applications,
- Offline / local first applications


## Important of Architecture

- For small team, simple architecture should be suffice, but it is must for mis-size and critical for large teams