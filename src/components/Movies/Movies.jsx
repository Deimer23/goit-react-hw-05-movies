import s from"./Movie.module.css"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import { getSearch } from "requests/api";
import Notiflix from "notiflix";

export const Movies =()=>{
    const [search, setSearch] = useState([]);
    const location = useLocation()
    const heanledSearch = async (e)=>{
        e.preventDefault();
        const query = e.target.query.value;        
        if (query !== "") {
            try {            
                const response = await getSearch(query);              
                setSearch(response);
            } catch (error) {
                Notiflix.Notify.failure("Palabra no coincide con la busqueda...")
            }
        } else {
            Notiflix.Notify.failure("Digite la Pelicula a Buscar...")
        }          
        
    }
    return(
        <div className={s.container}>
            <form onSubmit={heanledSearch} method="get">
                <input type="text" name="query"/>
                <button type="submit">Search</button>
            </form>
            <div>
                {search.length > 0 ? search.map(sear=>(
                    <li key={sear.id}><Link to={`/movie/${sear.id}`} state={{from: location}}>{sear.original_title}</Link></li>
                )): ""}
            </div>
        </div>        
    )
}