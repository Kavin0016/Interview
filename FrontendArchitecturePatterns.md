# Frontend Architecture Patterns

Architecture is not about file directory structure, it's all layers and how they interact with each other.

## MVC (Model-View-Controller)

```
         +---------+         updates/retrieves       +--------+
         |         |<------------------------------->|        |
         |  Model  |                                 |  View  |
         |         |-------------------------------->|        |
         +---------+         notifies/updates        +--------+
             ^                                        ^
             |   user input/action                    |
             |                                        |
             |                                        |
         +-----------+  updates/manipulates/model   +-----------+
         |           |----------------------------->|           |
         | Controller|                              |           |
         |           |<-----------------------------|           |
         +-----------+          triggers update     +-----------+


```
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

#### Thick Client
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

## MVP (Model-View-Presenter)

```
       +-------+          +-----------+           +-------+
       |       | actions  |           | updates   |       |
       | View  |<-------->| Presenter |<--------->| Model |
       |       |          |           |           |       |
       +-------+          +-----------+           +-------+
                           
         ^   |                                  (No direct
         |   |                                   connection
         |   |                                   between
         |   v                                   View & Model)
       User Interactions

```

**Legend:**
- **View:** Displays UI, forwards user actions/events to Presenter.
- **Presenter:** Handles presentation logic, updates View, communicates with Model.
- **Model:** Handles data, business logic, notifies Presenter upon changes.


**View** <-> **Presenter** <-> **Model (No Connection between Model and View)**

It solves the major problem of MVC, where View holds lots of logic, then View won't get the update directly from Modal, it stays in sync with Presenter

**Two Types:**
- **Supervisor View:** 
    - Stil gets some updates from Model (Minimal) hence still some logic present at View
    - *Pros:*
        - Less Boiler plate code,
        - Faster Development
    - *Cons:*
        - Harder to test and maintain since logic is present in the UI
    - *Use cases:*
        - simpler UI where View Logic is minimal
- **Passive View:**
    - Completely passive in getting updated from Model and completely relies on Presenter Layer
        - *Pros:*
            - Strong boundries between View, Model & presenter
            - View stays passive less code in UI
        - *Cons:*
            - Requires more code to handle the basic UI,
            - Overhead for Simple View Model Interation
        - *Use cases:*
            - Comlex UI, testability, logic-heavy applications and long-term scalability is concerned.

### Pros & Cons:

#### Pros:
- Clear Layer of Separation,
- Testability

#### Cons:
- Fat Presenter to handle multiple logics and caching part,
- Inexpressiveness: MVP doesn't provide the clear pattern for data synchorization, caching, etc.

### Use cases:
- Same as *MVC*, but *MVP* provide better separation of layer, and provides better testability code for complex UI and logic heavy View.

## MVVM (Model-View-View-Model)

It separates the Business Logic nad View Logic (State Management). It allows two-way data binding between View and View Model layer.
- It is designed to store User Interface data, The problem with MVC/MVP is that they don't distinguish between busineess and UI data,
- The *View* is isolated from *Model*. The *View Model* coordinates with *Model* and provides data to the *View*,
- Many *Views* can have a single *View Model* but a single *View* cannot have more than one *View Model*
- *View Model* contains all the data and behaviour of the user interface but without any of the control used to display the user interface on the screen
```
+------------+  Two-way Data Binding  +----------------+   Updates/View Events +-----------+
|            |<---------------------->|                | <-------------------->|           |
|   View     |                        |   ViewModel    |                       |  Model    |
| (UI Layer) |    User Actions        | (State, Logic) |  Data/Commands        | (Data,    |
|            |----------------------> |                |---------------------->|  Business |
|            |                        |                |                       |  Logic)   |
+------------+                        +----------------+                       +-----------+
```

**Legend:**
- **View:** Displays the UI and relays user actions to the ViewModel.
- **ViewModel:** Handles UI logic and state, communicates with the Model, exposes data and commands to the View.
- **Model:** Contains the core business logic and data.

**Key Points:**
- View and ViewModel communicate via two-way data binding.
- ViewModel updates or retrieves data from the Model.
- Model notifies the ViewModel of data changes, which updates the View accordingly.

### Pros & Cons
#### Pros
- Clear Layer Separation,
- Easier to Test, Scale & Maintain.
#### Cons
- Stepper Learning Curve, Harder to understand and implement,
-  It help us to store presentation logic but doesn't help us to organise other parts of application like API request, etc.

### Use Case:
- It is useful when there is complex UI Logic that needs through testing.
- Doesn't helpfull in simple static websites.

## Important of Architecture

- For small team, simple architecture should be suffice, but it is must for mis-size and critical for large teams