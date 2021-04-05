import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 80%;
  height: auto;
  padding: 3rem;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  flex-direction:row;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  border:0.2rem solid blue;
  width:60%;

`;
export const MovieContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  height:auto;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export const MovieImage = styled.img`
width:60%;
height:auto;
  justify-content: center;
  align-items: center;
`;
