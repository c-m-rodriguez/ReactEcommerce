import React from "react";
import CartWidget from "./CartWidget";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,  
  } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
        <div>
        <Menu>
        <MenuButton>
          Nuestros Productos
        </MenuButton>
        <MenuList>
          <MenuItem>Motorola</MenuItem>
          <MenuItem>Samsung</MenuItem>
          <MenuItem>Iphone</MenuItem>
        </MenuList>
      </Menu>
    </div>
    <CartWidget/>
    </div>
  );
};

export default NavBar;
