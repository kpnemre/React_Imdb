import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  width: 15.376rem;
  height: auto;
  border: 0.0625rem solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
        transform: scale(1.2);
        box-shadow: 0.3rem 0.3rem 0.9rem rgba(0,0,0,0.1);
        transition: 0.9s;
    }
`;

export const StyledText = styled.p`
  color: white;
  padding:0.3rem;
`;


export const StyledImageText = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
  /* resize:both; */
  
`;
export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius:5%;
`;

export const StyledNoPoster = styled.p`
  width: auto;
  height: 21rem;
  border-radius:5%;
  background-color:white;
  font-size:2rem;
  font-family: Impact, Charcoal, sans-serif;
  justify-content:center;
  display: flex;
  align-items: center;
  color:black;
`;
export const StyledInfo = styled.div`
  width: 100%;
  height: auto;
  border-radius:5%;
  display:flex;

`;
