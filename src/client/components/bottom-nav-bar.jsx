import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import styled from '@emotion/styled';
import {useNavigate} from 'react-router-dom';

const BottomNavBar = () => {
  const navigate = useNavigate()
  return (
      <FixedBottomNavBar showLabels>
        <NavBarItems label="Dashboard" onClick={() => navigate('/')} />
        <NavBarItems label="Settings" onClick={() => navigate('/settings')}/>
      </FixedBottomNavBar>
  )
}
export default BottomNavBar;
const FixedBottomNavBar = styled(BottomNavigation)`
position: fixed;
left:0;
right:0;
bottom:0;
height:75px;
box-shadow: 0 0 6px rgba(0,0,0,.4);

@media only screen and (min-width: 600px){
  display:none;
}
`
const NavBarItems = styled(BottomNavigationAction)`
span {
  font-size:22px;
}
`
