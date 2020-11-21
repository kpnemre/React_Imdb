import {
  StyledCardWrapper,
  StyledText,
  StyledImage,
  StyledImageText,
} from "./Card.style";

export const Card = ({ title, image, release, vote }) => {
  return (
    <StyledCardWrapper>
      <StyledText>{title}</StyledText>

      <StyledImageText>
        <StyledText>{vote}</StyledText>
        <StyledImage src={image} alt="Poster"></StyledImage>
      </StyledImageText>

      <StyledText>{release}</StyledText>
    </StyledCardWrapper>
  );
};
