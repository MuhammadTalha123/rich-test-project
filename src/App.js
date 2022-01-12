import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/details" element={<MovieDetail />} />
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={() => <h2>404 Not Found</h2>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
