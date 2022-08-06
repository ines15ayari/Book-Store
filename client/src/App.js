import './App.css';
import Header from './Components/Header'
import BookDetails from './Components/bookDetails'
import Home from './Components/Home'
import Book from './Components/CardComponent.js'
import X from './Components/X';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './Components/List';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Details" element={<BookDetails />} />
        <Route path="/store" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
