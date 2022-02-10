import styled from "@emotion/styled";
import BottomNavBar from "../components/bottom-nav-bar";

const Categories = () =>{
  return(
    <>
      <Header>
        <h2>Categories</h2>
      </Header>
      <BottomNavBar/>
    </>

  )
}
export default Categories;
const Header = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
font-size:20px;
margin:50px 0 50px 0;
`
