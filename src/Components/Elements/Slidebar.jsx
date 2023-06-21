import React from 'react'
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    sidebarClasses,
  } from "react-pro-sidebar";
  import { Link } from 'react-router-dom';

function Slidebar() {
  return (
    <Sidebar   className='Slidebar'
    rootStyles={{
      [`.${sidebarClasses.container}`]: {
        backgroundColor: "black",
         color:"white"
      },
    }}
  >
    <Menu  className='hover'   >
      <SubMenu label="Charts">
        <MenuItem className="bg-black"> Pie charts </MenuItem>
        <MenuItem className="bg-black"> Line charts </MenuItem>
      </SubMenu>
      <MenuItem> Home </MenuItem>
      <MenuItem> <Link   className='Link' to="/" >Mobile</Link></MenuItem>
      <MenuItem> <Link  className='Link' to="/contact" >Clothes</Link> </MenuItem>
      <MenuItem> About Us </MenuItem>
      <MenuItem> Record </MenuItem>
      <MenuItem> News </MenuItem>
    
    </Menu>
  </Sidebar>
  )
}

export default Slidebar