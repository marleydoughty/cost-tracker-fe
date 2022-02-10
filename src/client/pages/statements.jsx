import BottomNavBar from "../components/bottom-nav-bar";
import styled from'@emotion/styled';

const Statements = () =>{
  return(
    <>
    <Header>
      <h2>Statements</h2>
    </Header>
      <BottomNavBar />
    </>
  )
}
export default Statements;

const Header = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-size:20px;
margin:50px 0 50px 0;
`
