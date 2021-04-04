import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/lazy";
import {MovieContainer} from "./MovieDetails.style"
// import {StyledImage} from "./components/Card/Card.style";

const apiKey = "3ca91bf17a8b671b2e8464cdec300f9f";
// const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseUrl = "https://api.themoviedb.org/3/movie/";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";
const url = "https://www.youtube.com/watch?v=";

export default function MovieDetails() {
  // todo: movie id
  const { id } = useParams();
  // console.log('id', id)

  const [movieDetail, setMovieDetail] = useState([]);
  const [movieVideo, setMovieVideo] = useState("");

  const MovieInfo = (id) => {
    axios
      .get(baseUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieDetail(res?.data))
      .catch((err) => console.log(err));
  };
  const MovieVideo = (id) => {
    axios
      .get(baseUrl + id + "/videos", {
        params: {
          api_key: apiKey,
        },
      })

      .then((res) => setMovieVideo(res.data.results[0].key))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    MovieInfo(id);
    MovieVideo(id);
  }, [id]);

  console.log("movie detail:", movieDetail);
  console.log("movie vİDEO:", movieVideo);

  return (
    <MovieContainer>
      <div>
        <p>Movie Title: {movieDetail.original_title}</p>
        <p>Release date: {movieDetail.release_date}</p>
      </div>
      
      <div>
        <img src={baseImageUrl + movieDetail.poster_path} />
      </div>


      <ReactPlayer url={url + movieVideo} />
    </MovieContainer>
  );
}
