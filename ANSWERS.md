<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

In current topics, I understand `middleware` as a function that receives the homies (req & res) objects of the lifecycle. It can do several things before letting them go to the next middleware, in other words, a route handler. `Sessions` are a way to store data that is accessible across requests. This data can be stored in different ways such as in a database, cookies, memory cache, and in app memory. `bcrypt` is a widely used algorithm for hasing passwords. It's best known for protecting against brute force attacks, by slowing down the time it takes between attempts to hash a password. A higher number of rounds could mean years in terms of trying to attack. `JWT` is short for JSON web token, and they allow info to be represeneted in a secure 

2.  What does bcrypt do in order to prevent attacks?

I pretty much answered this one above but in order to prevent attacks, bcrypt takes a password, hashes it, and slows down the amount of time between hashes, making it more time consuming than it's worth to make a hash table.

3.  What are the three parts of the JSON Web Token?
The three parts of the JSON web token are `headers`, `payloads`, and `signatures`.
