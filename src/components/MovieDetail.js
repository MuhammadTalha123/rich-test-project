import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

const MovieDetail = () => {
    const movieId = parseInt(window.location.pathname?.slice(1))

    const { movies, setMovies } = useContext(GlobalContext)

    const [movie, setMovie] = useState(null)
    const [watched, setWatched] = useState(false)

    const getIdAndMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=29b93bae8c2da9ca4afabbd1384e3cc0`)
            .then((res) => res.json())
            .then(data => {
                movies.map((myMovie) => {
                    if (myMovie?.id === movieId) {
                        setMovie({ ...data, watched: myMovie?.watched })
                    } else {
                        setMovie(data)
                    }
                })
                setMovie(data)
            }).catch((err) => {
                alert("Error in fetching movie")
                console.error(err)
            })
    }

    useEffect(() => {
        getIdAndMovie()
    }, [])


    useEffect(() => {
        movies?.map((myMovie) => {
            if (myMovie?.id === movieId) {
                setWatched(myMovie.watched)
            }
        })
    }, [movies])

    const handleWatched = () => {
        const updatedMovies = movies?.map((myMovie) => {
            if (myMovie?.id === movieId) {
                myMovie.watched = !watched
            }
            return myMovie
        })
        setWatched(!watched)
        setMovies(updatedMovies)
    }
    return (
        <div>
            <div className='flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto mt-12 mb-12'>
                <div className='w-2 bg-gray-800'></div>
                <div className="overflow-hidden rounded-xl relative transform transition ease-in-out duration-500 shadow-lg movie-item text-white movie-card" data-movie-id="438631">
                    <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                    <div className="relative group z-10 px-10 pt-10 space-y-6 movie_info" data-lity="" href="https://www.youtube.com/embed/aSHs224Dge0">
                        <div className="poster__info align-self-end w-full">
                            <div className="h-32"></div>
                            <div className="space-y-6 detail_info">
                                <div className="flex flex-col space-y-2 inner">
                                    <h3 className="text-2xl font-bold text-white" data-unsp-sanitized="clean">{movie?.original_title}</h3>
                                    <div className="mb-0 text-lg text-gray-400">{movie?.tagline}</div>
                                </div>
                                <div className="flex flex-row justify-between datos">
                                    <div className="flex flex-col datos_col">
                                        <div className="popularity">{movie?.popularity}</div>
                                        <div className="text-sm text-gray-400">Popularity:</div>
                                    </div>
                                    <div className="flex flex-col datos_col">
                                        <div className="release">{movie?.release_date}</div>
                                        <div className="text-sm text-gray-400">Release date:</div>
                                    </div>
                                    <div className="flex flex-col datos_col">
                                        <div className="release">{`${movie?.runtime} min`}</div>
                                        <div className="text-sm text-gray-400">Runtime:</div>
                                    </div>
                                </div>

                                <div>
                                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input type="checkbox" onChange={handleWatched} name="toggle" checked={watched || false} id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                    </div>
                                    <label htmlFor="toggle" className="text-xs text-white">Watched</label>
                                </div>
                                <div className="flex flex-col overview">
                                    <div className="flex flex-col"></div>
                                    <div className="text-xs text-gray-400 mb-2">Overview:</div>
                                    <p className="text-xs text-gray-100 mb-6">
                                        {movie?.overview}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="absolute inset-0 transform w-full -translate-y-4" src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}

                        style={{ filter: 'grayscale(0)' }} />
                    <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
                        <Link to='/'
                            className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
                        >
                            <div className="text-sm text-white ml-2">Back</div>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MovieDetail;
