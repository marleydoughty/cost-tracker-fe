import BottomNavBar from "../components/bottom-nav-bar";
import { Card } from '@mui/material';
import styled from '@emotion/styled';
const Settings = () =>{
  return (
    <>
    <Header>
      <h2>Settings</h2>
    </Header>
      <CustomCard>
        <p>User: John Doe</p>
        <button>Sign out</button>
      </CustomCard>
      <BottomNavBar/>
    </>
  )
}
export default Settings;

const Header = styled.div`
display:flex;
justify-content:center;
font-size:20px;
margin:50px 0 50px 0;
`
const CustomCard = styled(Card)`
display: flex;
background: #12c2e9;
background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
color: white;
flex-direction: column;
margin: 60px 15px 60px 15px;
padding:50px 20px 50px 20px;
box-shadow: 0 2px 4px rgba(0,0,0,.4);
border-radius: 15px;
`
