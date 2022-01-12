import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

function Home() {
    const { movies } = useContext(GlobalContext)

    return (
        <div className='flex justify-center	align-center flex-wrap'>
            {movies?.map((movie) => <MovieCard movie={movie} />)}
        </div>
    )
}

export default Home;
