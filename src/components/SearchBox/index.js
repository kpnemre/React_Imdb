import React, { useState, useRef } from "react";
import {
  StyledSearchBox,
  StyledSearchInput,
  StyledButtonInput,
} from "./SearchBox.style";

export const SearchBox = ({ setSearchKeyword }) => {
  //const [inputValue,setInputValue]=useState('');
const inputRef= useRef();
console.log(inputRef?.current?.value);
  // const search = (e) => {
  //   //setInputValue(e.target.value)
  //   setSearchKeyword(e.target.value);
  // };

  return (
    <StyledSearchBox>
      <StyledSearchInput ref={inputRef} onChange={()=>setSearchKeyword(inputRef?.current?.value)}></StyledSearchInput>
      {/* <StyledSearchInput onChange={search}></StyledSearchInput> */}
      {/* <StyledButtonInput onClick={()=>setSearchKeyword(inputValue)}>Search</StyledButtonInput> */}
    </StyledSearchBox>
  );
};
