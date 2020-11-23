import React from 'react';
import {Link} from 'react-router-dom';
import {NavList} from './Navbar.style';


export default function Navbar() {
    return (
        <NavList>
    

              <Link to="/"> HOME </Link> 
              <Link to="/"> Catogories </Link> 
              <Link to="/"> Most Watching </Link> 
              <Link to="/"> Series </Link> 
              <Link to="/"> Directors </Link> 
            
              {/* <Link to="/details/602"> HOME </Link> 
              <Link to="/details/601"> HOME </Link> 
              <Link to="/details/600"> HOME </Link>  */}
        </NavList>
    )
}
