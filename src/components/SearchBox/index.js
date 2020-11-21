import React, { useState } from "react";
import {
  StyledSearchBox,
  StyledSearchInput,
  StyledButtonInput,
} from "./SearchBox.style";

export const SearchBox = ({ setSearchKeyword }) => {
  //const [inputValue,setInputValue]=useState('');

  const search = (e) => {
    //setInputValue(e.target.value)
    setSearchKeyword(e.target.value);
  };

  return (
    <StyledSearchBox>
      <StyledSearchInput onChange={search}></StyledSearchInput>
      {/* <StyledButtonInput onClick={()=>setSearchKeyword(inputValue)}>Search</StyledButtonInput> */}
    </StyledSearchBox>
  );
};
