import React, { useState, useRef,useContext } from "react";
import {
  StyledSearchBox,
  StyledSearchInput,
  // StyledButtonInput,
  // StyledSearchButton
} from "./SearchBox.style";
import {MovieContext} from '../../pages/Movie';

export const SearchBox = () => {
  const { setSearchKeyword } = useContext(MovieContext);
  //const [inputValue,setInputValue]=useState('');
const inputRef= useRef();
console.log(inputRef?.current?.value);   

  // const search = (e) => {
  //   //setInputValue(e.target.value)
  //   setSearchKeyword(e.target.value);
  // };

  return (
    <StyledSearchBox>
      <StyledSearchInput isColored ref={inputRef} onChange={()=>setSearchKeyword(inputRef?.current?.value)}></StyledSearchInput>
      {/* <StyledSearchInput onChange={search}></StyledSearchInput> */}
      {/* <StyledButtonInput onClick={()=>setSearchKeyword(inputValue)}>Search</StyledButtonInput> */}
    </StyledSearchBox>
  );
};
