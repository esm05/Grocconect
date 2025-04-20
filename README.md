# GrocConnect

GrocConnect is a MEAN stack (MongoDB, Express.js, Angular, Node.js) web application designed for inventory management. The system allows default users to browse inventory across different departments, while admin users can perform CRUD (Create, Read, Update, Delete) operations on each department's inventory.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Testing](#testing)

## Features

- **User Roles**:
  - **Guest User**: Can view inventory across all departments
  - **Admin User**: Full CRUD capabilities for managing department inventory

- **RESTful API**: Backend API endpoints that communicate with the client-side application using standard HTTP verbs

- **Express-Server Rendering**: Guest interface uses Express with Handlebars to deliver dynamic webpages

- **SPA (Single Page Application)**: Admin interface uses an SPA 

- **User Authentication**: Utilize JWTs (JSON Web Tokens) to authenticate users logging in. CRUD operations on the Admin SPA are inaccessible if not authenticated. 
  
- **Scalable Design**: Scales to any size interface for both admin and user clients

## Prerequisites

Before installing GrocConnect, ensure you have the following installed locally:

- [Node.js and npm](https://nodejs.org/en/download)
- MongoDB 
- Postman (optional for API endpoint testing)

## Installation

### Clone the Repository

```bash
git clone https://github.com/esm05/Grocconect.git
cd Grocconnect
```

### Backend Setup

1. Install Node/Express dependencies:

```bash
npm install
```

2. Create a `.env` file in Grocconnect directory with the following line

```
JWT_SECRET=your_jwt_secret
```
  #### Make sure public keys are not pushed to remote repo

3. Seed the database:

```bash
node .\app_server\models\seed
```

### Frontend Setup

1. Navigate to the admin application directory:

```bash
cd app_admin
```

2. Install Angular CLI:

```bash
npm install -g @angular/cli
```

## Running the Application

### Start the Backend Server

From the root directory (`Grocconnect`):

```bash
npm start
```

The server will start running at `http://localhost:3000` 

### Start the Admin SPA

In a new terminal window, navigate to the admin directory:

```bash
cd grocconnect/app_admin
ng serve
```

The admin application will be hosted at `http://localhost:4200`

#### Admin Authentication
The Admin SPA implements JWTs for authentication handling:
      - All Create, Update, Delete modifications are protected and require authentication
      - If the user is not authenticated and on http://localhost:4200 they need to be redirected to http://localhost:4200/login

#### Create an admin account in Postman
   - POST `baseUrl`: `http://localhost:3000/api/register`
   - `body`: `x-www-form-urlencoded`: 
   - **Admin User**:
   - name: admin
   - email: admin@grocconnect.com
   - password: admin123


## API Documentation

GrocConnect provides the following API endpoints:

| Method | Endpoint                   | Description                                 | Access     |
|--------|----------------------------|---------------------------------------------|------------|
| POST   | /api/register              | Register a new user                         | UnAuth     |
| POST   | /api/login                 | Login into a user                           | UnAuth     |
| GET    | /api/produces              | Get inventory of Produce department         | UnAuth     |
| POST   | /api/produces              | Adds a produce item to db                   | Auth       |
| GET    | /api/produces/:produceName | Finds exact the db object from the name     | Unauth     |
| PUT    | /api/produces/:produceName | Updates db object mathcing produce name     | Auth       |
| DEL    | /api/produces/:produceName | Deletes db object matching produce name     | Auth       |
| GET    | /api/meats                 | Get inventory of Meat department            | UnAuth     |
| POST   | /api/meats                 | Adds a meat item to db                      | Auth       |
| GET    | /api/meats/:meatName       | Finds exact the db object from the name     | Unauth     |
| PUT    | /api/meats/:meatName       | Updates db object mathcing meat name        | Auth       |
| DEL    | /api/meats/:meatName       | Deletes db object matching meat name        | Auth       |
| GET    | /api/bakery                | Get inventory of Bakery department          | UnAuth     |
| POST   | /api/bakery                | Adds a bakerye item to db                   | Auth       |
| GET    | /api/bakery/:bakeryName    | Finds exact the db object from the name     | Unauth     |
| PUT    | /api/bakery/:bakeryName    | Updates db object mathcing bakery name      | Auth       |
| DEL    | /api/bakery/:bakeryName    | Deletes db object matching bakery name      | Auth       |
| GET    | /api/seafood              | Get inventory of seafood department          | UnAuth     |
| POST   | /api/seafood              | Adds a seafood item to db                    | Auth       |
| GET    | /api/seafood/:seafoodName | Finds exact the db object from the name      | Unauth     |
| PUT    | /api/seafood/:seafoodName | Updates db object mathcing seafood name      | Auth       |
| DEL    | /api/seafood/:seafoodName | Deletes db object matching seafood name      | Auth       |
| GET    | /api/dairy                | Get inventory of dairy department            | UnAuth     |
| POST   | /api/dairy                | Adds a dairy item to db                      | Auth       |
| GET    | /api/dairy/:dairyName     | Finds exact the db object from the name      | Unauth     |
| PUT    | /api/dairy/:dairyName     | Updates db object mathcing dairy name        | Auth       |
| DEL    | /api/dairy/:dairyName     | Deletes db object matching dairy name        | Auth       |
| GET    | /api/grocery              | Get inventory of grocery department          | UnAuth     |
| POST   | /api/grocery              | Adds a grocery item to db                    | Auth       |
| GET    | /api/grocery/:groceryName | Finds exact the db object from the name      | Unauth     |
| PUT    | /api/grocery/:groceryName | Updates db object mathcing grocery name      | Auth       |
| DEL    | /api/grocery/:groceryName | Deletes db object matching grocery name      | Auth       |


## Testing

API endpoints can be tested using Postman:

1. Testing Register:
   - POST `baseUrl`: `http://localhost:3000/api/register`
   - `body`: `x-www-form-urlencoded`: 
          name: user_name
          email: email
          password: password
   - `token`: Token received after login
      test JWT here: `https://jwt.io/` provide JWT_SECRET defined in .env
2. Testing login
   - POST `baseUrl`: `http://localhost:3000/api/register`
   - `body`: `x-www-form-urlencoded`: 
          name: user_name
          email: email
          password: password
   - `token`: Token received after login
      test JWT here: `https://jwt.io/` provide JWT_SECRET defined in .env

3. Testing Endpoints that require authentication 
    1. Under the authorization header, choose Bearer Token from drop-down menu
    2. Paste the token from a successful login
    3. HTTP verb `baseUrl`: `http://localhost:3000/api/department/:departmentName`


