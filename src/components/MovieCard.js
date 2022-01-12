import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
        <div class="py-3 sm:max-w-xl sm:mx-auto">
            <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 my-16 flex space-x-8">
                <div class="h-48 overflow-visible w-1/2">
                    <img class="rounded-3xl shadow-lg" src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="" />
                </div>
                <div class="flex flex-col w-1/2 space-y-4">
                    <div class="flex justify-between items-start">
                        <h2 class="text-3xl font-bold">{movie?.original_title}</h2>
                        <div class="bg-yellow-400 font-bold rounded-xl p-2">{movie?.vote_average}</div>
                    </div>
                    <div>
                        <Link to={`/${movie?.id}`}>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                More Detail
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
