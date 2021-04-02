import React, { useContext } from "react";
import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";
import { MovieContext } from "../../pages/Movie";
import {Link} from 'react-router-dom';

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const CardList = () => {
  const { movieData } = useContext(MovieContext);

  return (
    <StyledCardList>
      {movieData &&
        movieData?.map((movie, index) => {
          return (
            // <Link  to="/details/{movie.id}">
            <Link  to={`/details/${movie.id}`}>
              <Card
                movie={movie}
                key={index}
                title={movie.title}
                id={movie.id}
                image={baseImageUrl + movie.poster_path}
                release={movie.release_date}
                vote={movie.vote_average}
              />
            </Link>
          );
        })}
    </StyledCardList>
  );
};
