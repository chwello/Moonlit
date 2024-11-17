import React from "react";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <section>
          <div className="flex flex-col items-center justify-center mt-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Discover Stories Under the Moonlight
            </h1>
            <p className="text-lg">
              Your personal haven for books, where every title shines like a
              star. Explore, organize, and cherish your library effortlessly.
            </p>
          </div>
          <hr className="border-1 border-gray-500 w-4/5 my-5 mx-auto" />

        </section>
        <h5>Book Collection</h5>
        <BookCard/>
      </div>
    </>
  );
};

export default Home;
