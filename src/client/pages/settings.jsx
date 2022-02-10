import BottomNavBar from "../components/bottom-nav-bar";
import { Card, Button, Container } from '@mui/material';
import styled from '@emotion/styled';
import TopNavBar from "../components/top-nav-bar";
const Settings = () =>{
  return (
    <>
    <Container maxWidth="md">
      <Header>
        <h2>Settings</h2>
        <TopNavBar />
      </Header>
      <CustomCard>
        <p>User: John Doe</p>
        <SignoutButton>Sign out</SignoutButton>
      </CustomCard>
      <BottomNavBar />
    </Container>
    </>
  )
}
export default Settings;

const Header = styled.div`
display:flex;
justify-content:center;
font-size:20px;
margin:50px 0 50px 0;

@media only screen and (min-width: 600px){
  justify-content:space-between;
}
`
const CustomCard = styled(Card)`
display: flex;
background: #12c2e9;
background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
color: white;
justify-content:space-between;
align-items:center;
margin: 60px 15px 60px 15px;
padding:50px 20px 50px 20px;
box-shadow: 0 2px 4px rgba(0,0,0,.4);
border-radius: 15px;
`
const SignoutButton = styled(Button)`
color:white;
border:solid thin white;
width:150px;
`
