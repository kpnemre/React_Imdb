import {
  StyledCardWrapper,
  StyledText,
  StyledImage,
  StyledImageText,
  StyledNoPoster,
  StyledInfo,
} from "./Card.style";
// import {useHistory} from "react-router-dom";

//const null_image = "index.js:9 https://image.tmdb.org/t/p/w500null"

export const Card = ({ title, image, release, vote, movie ,id}) => {
  // console.log(movie.poster_path);
  //  ya resim ya da null

  // const history= useHistory();
  return (
    // <StyledCardWrapper onClick={()=> history.push(``/detail/${id}`)}>
    <StyledCardWrapper >
      <StyledImageText>
        {movie.poster_path ? (
          <StyledImage src={image} alt={title}></StyledImage>

        ) : (
          <StyledNoPoster>No Image Available</StyledNoPoster>
        )}

        {/* <StyledImage src = {movie.poster_path ? image : "data:image/jpeg;base64,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"}></StyledImage> */}
      </StyledImageText>
      <StyledInfo>
        <StyledText>{vote}</StyledText>
        <StyledText>{title}</StyledText>
        <StyledText>{release}</StyledText>
      </StyledInfo>
    </StyledCardWrapper>
  );
};
