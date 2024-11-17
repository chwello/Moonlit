import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AddBook from "./Pages/AddBook";
import About from "./Pages/About";

const App = () => {
  return (
    <main>
      <Router>
        {/* We don't need to add Home here since it's already part of the Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
