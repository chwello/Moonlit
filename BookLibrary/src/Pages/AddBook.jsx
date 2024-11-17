import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [isRead, setIsRead] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !genre) {
      setErrorMessage("Please fill in all the fields");
      return;
    }

    const newBook = {
      title,
      author,
      genre,
      isRead,
    };

    try {
      await axios.post("http://localhost:5000/api/books", newBook);
      // Clear form after successful submit
      setTitle("");
      setAuthor("");
      setGenre("");
      setIsRead(false);
      setErrorMessage("");
      alert("Book added successfully!");
    } catch (error) {
      setErrorMessage("Error adding book. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-semibold mb-4">Add Your Book Collection</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter book title"
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-medium">
              Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter author's name"
            />
          </div>

          <div>
            <label htmlFor="genre" className="block text-sm font-medium">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter genre"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="isRead"
              checked={isRead}
              onChange={() => setIsRead(!isRead)}
              className="w-4 h-4"
            />
            <label htmlFor="isRead" className="text-sm">
              Mark as Read
            </label>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBookForm;
