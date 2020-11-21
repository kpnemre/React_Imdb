import React, { useState, useEffect } from "react";
import { Card } from "../Card";
import { StyledCardList } from "./CardList.style";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const CardList = ({movieData}) => {
  

  return (
    <StyledCardList>
      {movieData &&
        movieData.map((movie) => {
          return (
            <Card
              title={movie.title}
              image={baseImageUrl + movie.poster_path}
              release={movie.release_date}
            />
          );
        })}
    </StyledCardList>
  );
};
