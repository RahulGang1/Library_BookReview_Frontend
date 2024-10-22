import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import AddBook from './components/AddBook';
import AllReviews from './components/AllReviews';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
      <div className="app">
        <div className="main-content">
          
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/reviews" element={<AllReviews />} /> 
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
