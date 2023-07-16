import s from "./Home.module.css"
import { Link, useLocation } from "react-router-dom";
export const Home = (props)=>{   
    const location = useLocation();    
    return(
        < section className={s.listMovie}>
            <h2 className={s.tittle}>Trending Today</h2>
           <ul>
            {props.movies.map(movie=>(
                <li key={movie.id}><Link to={`/movie/${movie.id}`} state={{from: location}}>{movie.original_title ? movie.original_title : movie.original_name}</Link></li>
            ))}
            </ul> 
        </section>        
    )
}

export default Home;