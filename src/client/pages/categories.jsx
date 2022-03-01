import styled from "@emotion/styled";
import BottomNavBar from "../components/bottom-nav-bar";
import TopNavBar from "../components/top-nav-bar";
import { Container } from "@mui/material";

const Categories = () =>{
  return(
    <>
      <Container maxWidth='md'>
        <Header>
          <h2>Categories</h2>
          <TopNavBar />
        </Header>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJ2SDZZ0hZG7h3MXlLrn_EdGynLQ14w2Y5ZkaD5sVZNpj0ShGMaFsevg23BMBdIcop24&usqp=CAU' alt='pie-chart'/>
      </Container>
      <BottomNavBar />
    </>
  )
}
export default Categories;

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
