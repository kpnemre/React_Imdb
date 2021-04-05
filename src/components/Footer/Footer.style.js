import styled from 'styled-components'


export const Main = styled.div`
  width: 100%;
  height: 7rem;
  margin: 0;
  padding: 0;
  float: left;
  left: 0;
  bottom: 0;
  display: flex;
flex-direction:row;

  flex-wrap: wrap;
  justify-content: space-evenly;

  font-size: 1rem;
  background: #1f5156;
  position: fixed;
  @media (max-width: 960px) {
    height: 12rem;
    background: #1f5156;
  }
`;

export const Copyright= styled.div`
margin:1rem;
`;
export const SocialMedia= styled.div`
margin:1rem;
display:flex;
flex-direction:row;

`;
export const SocialIcon= styled.div`
margin:1rem;
`;


