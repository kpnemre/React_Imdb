import React, {useState} from "react";
import {
  StyledSearchBox,
  StyledSearchInput,
  StyledButtonInput,
} from "./SearchBox.style";



export const SearchBox = ({setSearchKeyword}) => {
const [inputValue,setInputValue]=useState('');

  return (
    <StyledSearchBox>
      <StyledSearchInput onChange={(e)=>setInputValue(e.target.value)}></StyledSearchInput>
      <StyledButtonInput onClick={()=>setSearchKeyword(inputValue)}>Search</StyledButtonInput>
    </StyledSearchBox>
  );
};
