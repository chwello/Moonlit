import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AddBookForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [isRead, setIsRead] = useState(false);
  const [image, setImage] = useState(null); // New state to hold the image
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Set the selected image to state
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !author || !genre || !image) {
      setErrorMessage("Please fill in all the fields and upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("isRead", isRead);
    formData.append("image", image); // Append the image file to FormData

    try {
      await axios.post("http://localhost:5000/api/books", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });
      // Clear form after successful submit
      setTitle("");
      setDescription("");
      setAuthor("");
      setGenre("");
      setIsRead(false);
      setImage(null); // Clear the image
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

            {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium">
              Book Cover Image
            </label>
            <input
              type="file"
              id="image"
              onChange={handleImageChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
            />
          </div>

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
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              placeholder="Enter book description"
              rows="4"
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
            className="w-full py-2 bg-[#1A1A19] text-white rounded-md hover:bg-[#343131] transition"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBookForm;
