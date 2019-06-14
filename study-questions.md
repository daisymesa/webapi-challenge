1) Mention two parts of Express that you learned about this week.
This week, I learned that Express is a web application framework that sits on top of the Node.js server, and adds extra functionality such as routing and middleware support.

I also learned that Express has several benefits: simple, unopinionated, lightweight, and intuitive.  However, due to its simplicity and flexibility, we do need to make more decisions on our own when using Express, as opposed to when using frameworks such as Rails or django.

 2) Describe Middleware?
Middleware allows us to add features to express.  It is sort of an array of functions that get executed in the order in which we introduce them into our server code.  Middleware functions can execute code, make changes to requests, end the request-response cycle, and call the next middleware in the stack.  With Express, we use three types of middleware: built-in middleware, third-party middleware, and custom middleware.

3) Describe a Resource?
A resource is the target of an HTTP request, it can be a document, a photo, or anything else.  The identity and location of resources on the web are usually identified by a URL, which is a simply formatted string that is used to identify a resource via name, location, or any other characteristic.  Essentially, it is the item that lives on the other side of a URL.

4) What can the API return to help clients know if a request was successful?
A common response an API can return when a request was successful can be status code 200, which generally means the request has succeeded.  However, we depending on the request, we may also have the API return status code 201, which means a request succeeded and a new resource was created as a result of the request.

5) How can we partition our application into sub-applications?
We can partition our application into sub-application by using Express Routers.  Each Express router can have its own Routing and Middleware, and essentially functions as its own mini-application.  This allows for cleaner, more readable code, especially when we have an application that has multiple endpoints for a large number of categories (ie users, products, orders, providers, etc).
