import s from "./MovieDetails.module.css"
import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom"
import { getMovie } from "requests/api";
import Notiflix from "notiflix";

export const MovieDetails = ()=>{
    const [movie, setmovie] = useState([]);
    const {movieId} = useParams("");
    const location = useLocation();
    const goBack = location.state?.from ?? "/react-homework-template";  

    const getAsynMovie = async()=>{
        try {
            const response = await getMovie(movieId);            
            setmovie(response);             
        } catch (error) {
          Notiflix.Notify.failure("Solicitud no Encontrada")
        }
              
    }    
    
    useEffect(()=>{
        getAsynMovie();        
    },[]);
    
    return(
        <>
        <div className={s.movie}>
            <div className={s.moviedatails}>
                <div className={s.img}>
                    <Link to={goBack}>Go back</Link>
                    <img src={"https://image.tmdb.org/t/p/w300"+movie.poster_path} alt="Poster the Movie" />                 
                </div>
                <div className={s.datails}>
                    <h1>{movie.title}</h1>
                    <div>
                        <span>Overview</span>
                        <p>{movie.overview}</p>
                    </div>                   
                    <div>
                        <span>Genres</span> 
                        <ul className={s.genres}>
                            {movie.genres !==  undefined ?
                                movie.genres.map(genre=>(
                                    <li className={s.item} key={genre.id}>{genre.name}</li>
                                )): ""
                            }
                        </ul> 
                    </div>                                                   
                </div>
            </div>
            <div className={s.inf}>
                <h2 className={s.tittle}>Additional information</h2>
                <ul>
                    <li><Link to="cast">Cast</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default MovieDetails;