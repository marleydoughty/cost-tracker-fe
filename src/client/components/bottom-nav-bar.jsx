import React from 'react'
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import styled from '@emotion/styled';

export default function BottomNavBar() {
  return (
    <FixedBottomNavBar showLabels>
      <NavBarItems label="Dashboard" />
      <NavBarItems label="Settings" />
    </FixedBottomNavBar>
  )
}

const FixedBottomNavBar = styled(BottomNavigation)`
position: fixed;
left:0;
right:0;
bottom:0;
height:75px;
box-shadow: 0 0 6px rgba(0,0,0,.4);
`
const NavBarItems = styled(BottomNavigationAction)`
span {
  font-size:22px;
}
`
