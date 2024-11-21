# Social Network API

This is a backend API for a social network web application. It allows users to share thoughts, react to friends' thoughts, and manage a list of friends. The API is built using **Node.js**, **Express.js**, and **MongoDB**, with **Mongoose** as the ODM. It supports operations to create, read, update, and delete users, thoughts, and reactions.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [License](#license)

---

## Features
- **User Management:** Create, update, delete, and fetch user details.
- **Thought Management:** Share, edit, delete thoughts, and view all thoughts or a single thought.
- **Reactions:** Add and remove reactions to thoughts.
- **Friendships:** Add and remove friends from a user's friend list.
- **Dynamic Counts:** Virtual fields for friend and reaction counts.

---

## Technologies Used
- **Node.js**: Backend JavaScript runtime.
- **Express.js**: Routing and middleware.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.
- **ES Modules**: Modern `import/export` syntax.

---

## Installation
1. Clone the repository:
   git clone git@github.com:bmurfield/SocialNetwork.git
2. Navigate to the project directory:
    cd social-network-api
3. Install dependencies:
    npm install
4. Start the server:
    npm start
The server will run on http://localhost:3001 by default.

---

## Usage
Here is a walkthrough video showing some of functionality of the API:
https://drive.google.com/file/d/1NrgSRm68_Qj7DAdLy22MxNnUk7x9_i36/view?usp=sharing

### Testing the API
1. Use a tool like Insomnia, Postman, or cURL to test the API endpoints.
2. Start the server with npm start and use the available API routes to perform CRUD operations.

### API Routes
#### Users
- GET /api/users
Fetch all users.
- GET /api/users/:userId
Fetch a single user by ID (includes thoughts and friends).
- POST /api/users
Create a new user.
- PUT /api/users/:userId
Update an existing user.
- DELETE /api/users/:userId
Remove a user and their associated thoughts.
- POST /api/users/:userId/friends/:friendId
Add a friend to the user's friend list.
- DELETE /api/users/:userId/friends/:friendId
Remove a friend from the user's friend list.
#### Thoughts
- GET /api/thoughts
Fetch all thoughts.
- GET /api/thoughts/:thoughtId
Fetch a single thought by ID.
- POST /api/thoughts
Create a new thought and associate it with a user.
- PUT /api/thoughts/:thoughtId
Update an existing thought.
- DELETE /api/thoughts/:thoughtId
Remove a thought.
- POST /api/thoughts/:thoughtId/reactions
Add a reaction to a thought.
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId
Remove a reaction by ID.


---

## Credits

Recieved tutoring help Insomnia and Routing from Joem Casusi. 

---

## License

MIT License is listed in LICENSE file

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## How to Contribute

Reach out to me to collaborate using my [Github](https://github.com/bmurfield) or email me at bmurfield@gmail.com.
