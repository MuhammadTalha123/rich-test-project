import React, { useEffect, useContext } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { GlobalContext } from './context/GlobalState';

function App() {
  const { movies, setMovies } = useContext(GlobalContext)
  const moviesFetchLink = 'https://api.themoviedb.org/3/movie/500/similar?api_key=29b93bae8c2da9ca4afabbd1384e3cc0'
  const getAndSetMovies = () => {
    fetch(moviesFetchLink)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data?.results)
      })
      .catch((error) => {
        alert("Error in fetching movies");
        console.error(error)
      })
  }
  useEffect(() => {
    console.log('movies: ', movies)
  }, [movies])

  useEffect(() => {
    getAndSetMovies()
  }, [])


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
