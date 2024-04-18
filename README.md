# Product Management API

This is a Node.js-based API for managing products, including user registration and login functionalities. The application uses JWT for authentication and authorization, and MongoDB as the database. It allows users with different roles (admin, manager, and staff) to perform CRUD operations on products, with permissions enforced based on the user's role.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
## Features

- User registration and login functionality.
- JWT-based authentication and authorization.
- CRUD operations for managing products.
- Role-based access control (admin, manager, and staff).
- MongoDB database integration.

## Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [JSON Web Tokens (JWT)](https://jwt.io/)



**Test the API**:

    You can use API clients like [Postman](https://www.postman.com/) to test the API endpoints.

## API Endpoints

The application provides the following API endpoints:

- **User Registration**: `POST /api/auth/register`
    - Register a new user with `username`, `email`, `password`, and `role` (admin, manager, or staff).
- **User Login**: `POST /api/auth/login`
    - Log in a user with `email` and `password`.
    - Returns a JWT token for authenticated access.
- **Product CRUD**:
    - **Create**: `POST /api/products/`
        - Requires `admin` role and a valid JWT token.
        - Create a new product with `title`, `description`, and `inventoryCount`.
    - **Read**: `GET /api/products/`
        - Requires `admin` or `manager` role and a valid JWT token.
        - Retrieve a list of all products.
    - **Update**: `PUT /api/products/:id`
        - Requires `admin` or `manager` role and a valid JWT token.
        - Update a product by its `id` with new data (`title`, `description`, and `inventoryCount`).
    - **Delete**: `DELETE /api/products/:id`
        - Requires `admin` role and a valid JWT token.
        - Delete a product by its `id`.

## Environment Variables

The application uses environment variables for configuration. Set these in a `.env` file at the root of the project:

- `PORT`: The port the server will listen on. Default: `3000`.
- `MONGO_URI`: The MongoDB connection string. Default: `mongodb://localhost:27017/mydatabase`.
- `JWT_SECRET`: The secret key used for signing JWT tokens.



