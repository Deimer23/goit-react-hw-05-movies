import axios from "axios"; 
import Notiflix from "notiflix";

const KEY = '050776d92f59975128a30e8f83c93796';

export async function gettrending (){
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`);     
    return response.data.results;     
}

export async function getMovie(id){    
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`;    
    const response = await axios.get(URL);    
    return response.data;
}

export async function getCredit(id){
    const URL=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}`;  
    const response = await axios.get(URL);   
    return response.data.cast;
}

export async function getReviews(id){
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}`);
    return response.data.results;
}

export async function getSearch(query){
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${KEY}&language=en-US`);
    return response.data.results;
}