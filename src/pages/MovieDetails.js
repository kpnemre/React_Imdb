import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";
// import {StyledImage} from "./components/Card/Card.style";



const apiKey = "3ca91bf17a8b671b2e8464cdec300f9f";
// const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseUrl = "https://api.themoviedb.org/3/movie/"
const baseImageUrl = "https://image.tmdb.org/t/p/w500";



export default function MovieDetails() {


  // todo: movie id
    const {id}= useParams();
    // console.log('id', id)
    
    const [movieDetail, setMovieDetail]= useState([]);

    useEffect(() => {
        axios
          .get(baseUrl + id, {
            params: {
              api_key: apiKey
            },
          })
          .then((res) => setMovieDetail(res.data))
          .catch((err) => console.log(err));
      }, [id]);
console.log('movie detail:',movieDetail);

    return (
        <div >
            
             <p>Movie Title: {movieDetail.original_title}</p>         
             <img src={baseImageUrl + movieDetail.poster_path}/>  
             <p>Release date: {movieDetail.release_date}</p>
            {/* <p>hello {id}</p> */}
           
        </div>
    )
}
