import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/register' activeStyle>
            Register Product
          </NavLink>
          <NavLink to='/search' activeStyle>
            Find Product
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;