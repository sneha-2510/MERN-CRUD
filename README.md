# MERN CRUD User Details

A simple MERN stack project for managing user details with CRUD operations.

## Features

- Create, Read, Update, and Delete user details.
- Store user information in a MongoDB database.
- Implement a frontend interface using React for user interaction.

## Technologies Used

- **M**ongoDB: Database to store user details.
- **E**xpress.js: Backend framework for handling HTTP requests and routes.
- **R**eact.js: Frontend library for building user interfaces.
- **N**ode.js: Server-side JavaScript runtime environment.

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running locally or a MongoDB Atlas account.

## Getting Started

To get a local copy up and running, follow these steps:

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mern-crud-user-details.git
   cd mern-crud-user-details/backend
2. Install dependencies:
    ```bash
    npm install
3. Set up environment variables:

   Create a .env file in the backend directory and add the following:
    ```bash
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/user-details
4. Start the backend server:
     ```bash
     npm start
This will start the backend server at http://localhost:5000.

### Frontend Setup

1. In another terminal, navigate to the frontend directory:
     ```bash
     cd ../frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the frontend development server:
   ```bash
   npm start
This will start the React development server at http://localhost:3000.

Open your web browser and visit http://localhost:3000 to use the application.


