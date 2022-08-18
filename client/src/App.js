import './App.css';
import Header from './Components/Header'
import BookDetails from './Components/bookDetails'
import Home from './Components/Home'
import Book from './Components/CardComponent.js'
import Crd from './Components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './Components/List';
import { useEffect, useState } from "react";
import axios from "axios"


function App() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get('http://localhost:2100/book/Get').then(({ data }) => {
      setBooks(data.books)
    }).catch((err) => {
      alert(err.message)
    })
  }, [])
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<List books={books} />} />
        <Route path="/Details/:id" element={<BookDetails books={books} />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
