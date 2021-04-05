import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactPlayer from "react-player/lazy";
import {MovieContainer, Container, Title, MovieImage} from "./MovieDetails.style"
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
    <Container>
      <Title>
        <p> {movieDetail.original_title}</p>
        <p>Imdb rate: {movieDetail.vote_average}</p>
      </Title>
     
      <MovieContainer>
        <div>
          <MovieImage src={baseImageUrl + movieDetail.poster_path} />
        </div>

        <div>
        <ReactPlayer url={url + movieVideo} />

        </div>
      </MovieContainer>
      <div>
      <p>
            <span>Release date:</span> {movieDetail.release_date}
          </p>
          <p>
            <span>Overview:</span> {movieDetail.overview}
          </p>
          <p>
            <span>Homepage:</span> {movieDetail.homepage}
          </p>
      </div>

    </Container>
  );
}
