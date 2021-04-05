import React from "react";
// import { StyledLink } from "react-router-dom";
import { NavList, Logo, NavLi, Menu, StyledLink } from "./Navbar.style";

export default function Navbar() {

    
  return (
    <NavList>
      <Logo href="/">
        Tmdb <span>Movie</span>
      </Logo>
      <Menu>
        <NavLi>
          <StyledLink to="/" > HOME </StyledLink>
        </NavLi>

        <NavLi>
          <StyledLink to="/catagories"> CATAGORIES </StyledLink>
        </NavLi>

        <NavLi>
          <StyledLink to="/most"> MOST WATCHING </StyledLink>
        </NavLi>

        <NavLi>
          <StyledLink to="/series"> SERIES </StyledLink>
        </NavLi>

        <NavLi>
          <StyledLink to="/directors"> DIRECTORS </StyledLink>
        </NavLi>
      </Menu>
     
      {/* <StyledLink to="/details/602"> HOME </StyledLink> 
              <StyledLink to="/details/601"> HOME </StyledLink> 
              <StyledLink to="/details/600"> HOME </StyledLink>  */}
    </NavList>
  );
}
