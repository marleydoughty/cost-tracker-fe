import React from 'react';
import {Card, Container} from '@mui/material';
import styled from '@emotion/styled';
import BottomNavBar from '../components/bottom-nav-bar';
import ToggleSwitch from '../components/toggle-switch';
import TopNavBar from '../components/top-nav-bar';

const Transactions = () =>{
  return(
    <>
      <Container maxWidth="md">
        <Header>
          <h2>Transactions</h2>
          <TopNavBar/>
        </Header>
        <ToggleSwitch />
        <CustomCard>
          <CardItems>
            <i className='far fa-clock'></i>
            <p>Date</p>
          </CardItems>
        </CustomCard>
      </Container>
      <BottomNavBar/>
    </>
  )
}
export default Transactions;

const CustomCard = styled(Card)`
margin:15px;
width:auto;
height:75px;
border-radius:46px;
`
const CardItems = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
height: 75px;
margin-left:10px;
font-size: 20px;
i {
  font-size:26px;
  margin:0 15px 0 15px;
}
`
const Header = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:20px;
margin:50px 0 50px 0;
@media only screen and (min-width:600px){
justify-content: space-between;
}
`
