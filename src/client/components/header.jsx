import { Avatar } from "@mui/material";
import styled from "@emotion/styled";

const Header = () =>{
  return(
    <HeaderContainer>
      <Avatar alt="avatar" src="/avatar-icon.png" />
      <HeaderGreeting>
        <h4>Welcome!</h4>
        <p>John Doe</p>
      </HeaderGreeting>
    </HeaderContainer>
  )
}
export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0 0 20px;
`
const HeaderGreeting = styled.div`
  margin-left:7px;
`
