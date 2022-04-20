import React from 'react';
import {NavLink} from 'react-router-dom';


export const NavBar = () => {
  return (
    <>
     <div>
         <div>
             <NavLink to="/home">
                 Home
             </NavLink>
         </div>

         <NavLink to="/home/create">
             Create videogame
         </NavLink>
     </div>
    </>
  )
}
export default NavBar;
