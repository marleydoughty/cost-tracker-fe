import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import styled from '@emotion/styled';
import { useNavigate } from "react-router-dom";

const TopNavBar = () => {
  const navigate = useNavigate();
  return (
    <NavBarContainer showLabels>
      <NavBarItems label="Dashboard" onClick={() => navigate('/')} />
      <NavBarItems label="Settings" onClick={() => navigate('/settings')} />
    </NavBarContainer>
  )
}
export default TopNavBar;

const NavBarContainer = styled(BottomNavigation)`
font-size:25px;
display:flex;
border-radius:15px;
margin: 40px 0 0 20px;

@media only screen and (max-width:600px){
  display:none;
};
i {
  margin: 0 10px 0 0;
}
`
const NavBarItems = styled(BottomNavigationAction)`
`
