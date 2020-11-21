import React from "react";
import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const CardList = ({movieData}) => {
  

  return (
    <StyledCardList>
      {movieData &&
        movieData?.map((movie, index) => {
          return (
            <Card
            movie={movie}
              key={index}
              title={movie.title}
              image={baseImageUrl + movie.poster_path}
              release={movie.release_date}
              vote={movie.vote_average}
            />
          );
        })}
    </StyledCardList>
  );
};
