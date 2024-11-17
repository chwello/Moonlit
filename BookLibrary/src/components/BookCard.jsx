import React from "react";
import bookOne from "../img/book-1.jpg";
const BookCard = () => {
  return (
    <>
      <div>
        <img src={bookOne} alt="Book-1" className="w-48 h-auto" />
        <p>Whispers of the Forgotten Realm</p>
      </div>
    </>
  );
};

export default BookCard;
