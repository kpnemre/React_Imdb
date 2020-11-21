import {StyledCardWrapper, StyledText, StyledImage} from "./Card.style"

export const Card = ({title,image,release}) => {

    return (
        <StyledCardWrapper>
                 <StyledText>{title}</StyledText>
            <StyledImage src={image} alt="Poster"></StyledImage>
            <StyledText>{release}</StyledText>


        </StyledCardWrapper>
    )
}