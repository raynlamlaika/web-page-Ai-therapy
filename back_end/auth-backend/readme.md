so frst thing in the web site page is the auth for the user 

THIS IS THE BASE STRUCTURE:
    auth-backend/
    │
    ├── server.js           # main entry point
    ├── .env                # secrets (DB URL, JWT secret)
    ├── package.json
    │
    ├── config/
    │   └── db.js           # database connection
    │
    ├── models/
    │   └── User.js         # user schema/model
    │
    ├── routes/
    │   └── authRoutes.js   # login/register endpoints
    │
    └── controllers/
        └── authController.js  # logic for login/register




first in API is biscly in way to make tow devices to communicate:
    for example pass to the cmd line in get requiset to in server and gives u in respond
    The API processes the request (maybe talks to a database or another service).
    The API sends a response back, usually in a format like JSON.


1. API vs REST API

API → General concept: any interface that allows two systems to talk.

REST API → A type of API that follows specific rules called REST principles.


REST stands for Representational State Transfer.
It’s a design style for building APIs that are:

Simple

Stateless

Based on standard HTTP methods
to make in restAPI we need to follow spicific steps
1: use the HTTP methods -->
| Method     | Action                    | Example                             |
| ---------- | ------------------------- | ----------------------------------- |
| **GET**    | Read data                 | `/users` → get all users            |
| **POST**   | Create new data           | `/users` → add a new user           |
| **PUT**    | Update all of a resource  | `/users/1` → update user #1         |
| **PATCH**  | Update part of a resource | `/users/1` → update user email only |
| **DELETE** | Remove data               | `/users/1` → delete user #1         |

2:use the URL reoresentation resources /user   /bash/login  

3: be steteless

Session and state management in ASP.NET Core :
the state can be using several approches


lastly : is using json in data (js object notation)


herer is so eother type of APIs
| Type            | Description                                               | Example                               |
| --------------- | --------------------------------------------------------- | ------------------------------------- |
| **REST API**    | Uses HTTP methods + URLs + JSON                           | `/users/1`                            |
| **SOAP API**    | Uses XML format, older enterprise style                   | XML request/response                  |
| **GraphQL API** | Client decides what data to get                           | `query { user(id:1) { name email } }` |
| **gRPC**        | Binary-based, very fast, often used between microservices | Uses Protocol Buffers                 |



//BREATH
defrent between framework and library

| Feature               | **Library**                          | **Framework**                         |
| --------------------- | ------------------------------------ | ------------------------------------- |
| **Who’s in control?** | *You* call the library               | *The framework* calls *your* code     |
| **Purpose**           | Gives you tools (functions, helpers) | Gives you a full structure / system   |
| **Flexibility**       | You decide when and how to use it    | You follow the framework’s rules      |
| **Size**              | Small, focused                       | Large, includes many libraries inside |
| **Example**           | jQuery, NumPy, TensorFlow, React     | ASP.NET, Angular, Django, Spring      |

A library is like a kitchen tool — a knife, blender, or oven.
👉 You choose when to use it and how.

A framework is like a restaurant kitchen system —
it tells you where to cook, how to serve, and when things happen.
👉 You work inside its structure.




this is the rest api component requiste
check this web site : https://apidog.com/blog/what-are-the-components-of-an-api/



