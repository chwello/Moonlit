# Book Inventory

A simple web application to manage your book collection. You can add, update, delete, and search for books by title, author, or genre. The app also allows you to mark books as "read" or "unread."

## Features

- **Add a Book**: Add books to your collection by providing details like title, author, genre, and read status.
- **Edit a Book**: Update book information, including title, author, genre, and read status.
- **Delete a Book**: Remove books from your collection.
- **Search**: Search for books by title, author, or genre.
- **Mark as Read/Unread**: Track the reading status of each book.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: MongoDB

## Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (for local development or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud hosting)

### Getting Started

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/book-inventory.git
    cd book-inventory
    ```

2. **Set up the Backend**:

    - Go to the `backend` directory:
      ```bash
      cd backend
      ```

    - Install dependencies:
      ```bash
      npm install
      ```

    - Create a `.env` file in the root of the `backend` folder and add your MongoDB URI:
      ```bash
      MONGODB_URI=your_mongodb_uri
      ```

    - Start the server:
      ```bash
      npm start
      ```

  

3. **Set up the Frontend**:

    - Go to the `frontend` directory:
      ```bash
      cd frontend
      ```

    - Install dependencies:
      ```bash
      npm install
      ```

    - Start the React app:
      ```bash
      npm start
      ```

### Usage

- Navigate to the frontend URL and start managing your book collection.
- You can add new books, update their details, search by title, author, or genre, and toggle their read status.

### API Endpoints

The backend exposes the following endpoints for interacting with the book data:

- `GET /api/books` – Fetch all books
- `POST /api/books` – Add a new book
- `PUT /api/books/:id` – Update a book
- `DELETE /api/books/:id` – Delete a book
- `GET /api/books/search` – Search for books by title, author, or genre
- `PATCH /api/books/:id/toggleRead` – Toggle the read/unread status of a book


### Technologies Used

- **React.js**: For building the user interface.
- **Node.js + Express**: For the backend API.
- **MongoDB**: For storing book data.
- **Axios**: For making HTTP requests from the frontend to the backend.
- **Tailwind CSS**: For styling the app.


