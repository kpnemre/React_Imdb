import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
              <Link to="/"> HOME </Link> 
              {/* <Link to="/details/602"> HOME </Link> 
              <Link to="/details/601"> HOME </Link> 
              <Link to="/details/600"> HOME </Link>  */}
        </div>
    )
}
