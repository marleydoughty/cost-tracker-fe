import BottomNavBar from "../components/bottom-nav-bar";
import styled from'@emotion/styled';
import TopNavBar from "../components/top-nav-bar";
import {Container} from '@mui/material';
const Statements = () =>{
  return(
    <>
      <Container maxWidth='md'>
        <Header>
          <h2>Statements</h2>
          <TopNavBar />
        </Header>
        <div>months</div>
      </Container>
      <BottomNavBar />
    </>
  )
}
export default Statements;

const Header = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
margin:50px 0 50px 0;
@media only screen and (min-width:600px){
  justify-content:space-between;
}
`
