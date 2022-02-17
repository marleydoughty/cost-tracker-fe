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
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/63/Pie-chart.jpg' alt='pie-chart'/>
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
