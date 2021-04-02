import styled, { css } from "styled-components";

export const StyledSearchBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  background: #838379;
`;
export const StyledSearchInput = styled.input`
  margin: 2rem 3rem 2rem;
  padding: 0.2rem;
  border-radius: 0.3rem;
  color: black;
  ${(p) =>
    p.isColored &&
    css`
      color: gray;
    `}
`;

export const StyledButton = styled.button`
  border-radius: 0.2rem;
`;
export const StyledSearchButton = styled(StyledButton)`
  cursor: pointer;
`;
// export const StyledButtonInput = styled.button`
//   margin: 0.5rem;
//   padding: 0.3rem;
//   background-color: green;
//   color: white;
//   border-radius:0.3rem;
// `;
