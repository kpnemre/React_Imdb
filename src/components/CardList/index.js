import React, { useState, useEffect } from "react";
import {Card} from "../Card";
import  {StyledCardList} from './CardList.style';
import axios from "axios";

const apiKey = "dd2c8f65cf29386dd0fbea68ec466a61"; //temporary
const baseUrl = "https://api.themoviedb.org/3/search/movie";
// const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const CardList = () => {
    const [movieData, setMovieData] = useState(null);
    useEffect(() =>{
        axios.get(baseUrl,{
            params:{
                api_key: apiKey,
                page:1,
                query:'Star Wars' //TODO: from input
            }
        })
        .then((res) => setMovieData(res.data.results))
        .catch((err) => console.log(err))
    },[])
    return (
        <StyledCardList>
            { movieData && movieData.map(movie =>{
                return <Card title={movie.title}/>
            } )
                
            }
        </StyledCardList>
    )
}