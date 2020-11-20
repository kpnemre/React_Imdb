import {StyledCardWrapper, StyledText, StyledImage} from "./Card.style"

export const Card = ({title,image}) => {
    return (
        <StyledCardWrapper>
                 <StyledText>{title}</StyledText>
            <StyledImage src={image} alt="Poster"></StyledImage>

        </StyledCardWrapper>
    )
}