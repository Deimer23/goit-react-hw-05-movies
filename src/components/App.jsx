import s from "./App.module.css";
import { lazy, Suspense } from "react";
import { Route, Routes,  NavLink } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { gettrending } from "requests/api";
import { Movies } from "./Movies/Movies";
import TrendingSkeleton from "./Skeletons/TrendingSkeleton";
import MovieDetailsSkeleton from "./Skeletons/MovieDetailsSkeleton";
import  CasSkeleton  from "./Skeletons/CasSkeleton";
import { ReviewsSkeleton } from "./Skeletons/ReviewsSkeleton";

const Home = lazy(()=>import("./Home/Home"));
const Cast = lazy(()=>import("./Cast/Cast"));
const MovieDetails = lazy(()=>import("./MovieDetails/MovieDetails"));
const Reviews = lazy(()=> import("./Reviews/Reviews"));

export const App = () => {
  
  const [movies, setMovies] = useState([]); 
  const StyledLink = styled(NavLink)`
      color:black;
      &.active{
        color:orange
      }
  `;
  
  const getTrending = async ()=>{
    try {
      const response = await gettrending();
      setMovies(response);      
    } catch (error) {
      console.log(error);
    }
  }

 useEffect(()=>{
   getTrending();
  },[])
 
  return (
    <div className={s.container}
      // style={{
      //   height: '100vh',
      //   //display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >   
      <nav className={s.nav}>
        <ul className={s.navbar}>
          <li className={s.navbar_item}><StyledLink className={s.navbar_link} to='/react-homework-template'>Home</StyledLink></li>
          <li className={s.navbar_item}><StyledLink className={s.navbar_link} to='/movies'>Movie</StyledLink></li>          
        </ul>        
      </nav>   
      
      <Routes>
        <Route 
          path="/react-homework-template"
          element={<Suspense fallback={<TrendingSkeleton/>}><Home movies={movies}/></Suspense>}
        />             
        <Route 
          path="/movie/:movieId"
          element={<Suspense fallback={<MovieDetailsSkeleton />}><MovieDetails /></Suspense>}          
        >   
          <Route path="cast" element={<Suspense fallback={<CasSkeleton />}><Cast /></Suspense>} />
          <Route path="reviews" element={<Suspense fallback={<ReviewsSkeleton />}><Reviews /></Suspense>} />
        </Route> 
        <Route 
          path="/movies"
          element={<Movies />}
        />    
      </Routes>         
    </div>  
  );
};
