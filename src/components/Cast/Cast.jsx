import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getCredit } from "requests/api";
import s from "./Cast.module.css"
export const Cast = ()=>{
    const [credit, setCredit] = useState([]);
    const {movieId} = useParams();
    
    const getAsyncCredit = async ()=>{
        const response = await getCredit(movieId)
        setCredit(response);
    }

    useEffect(()=>{
        getAsyncCredit();        
    },[])

    return(
        <ul className={s.credit}>
            {credit.length > 0 ? credit.map(cred=>(
                <li key={cred.id}>
                    <img src={"https://image.tmdb.org/t/p/w200"+cred.profile_path} alt="" />
                    <p>{cred.name}</p>
                    <p>{cred.character}</p>
                </li>
            )):""}
        </ul>
    )
}

export default Cast;