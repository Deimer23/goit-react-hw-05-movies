import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getReviews } from "requests/api";
import s from "./Reviews.module.css"

export const Reviews = (props)=>{
    const [review, setReview] =  useState([]);
    const {movieId} = useParams();    
   
    const getAsyncReviews = async ()=>{
        try {
            const response = await getReviews(movieId);
            setReview(response);    
            console.log(response)        
        } catch (error) {
            console.log("Ha Ocurrido un Error" + error);
        }             
    }

    useEffect(()=>{
        getAsyncReviews();        
    });

    return(
        <>
            <div>
                <ul className={s.review}>
                    {review.length > 0 ? review.map(rev=>(
                        <li key={rev.id}>
                             <h5 className={s.tittle}>Author: {rev.author_details.username}</h5>
                             <p>{rev.content}</p>
                        </li>                        
                    )): <h3>We do not have any reviews fort his movie</h3>}
                </ul>               
            </div>
        </>
    )
}

export default Reviews;