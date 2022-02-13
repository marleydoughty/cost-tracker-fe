import React from "react";
import styled from '@emotion/styled'
import BottomNavBar from "../components/bottom-nav-bar";
import Header from "../components/header";
import DashboardCards from "../components/dashboard-cards";
import TopNavBar from "../components/top-nav-bar";
import { Card, Container } from "@mui/material";
const Dashboard = () => {
  return (
    <div className="App">
      <HeaderContainer>
        <Header />
        <TopNavBar/>
      </HeaderContainer>
      <Container maxWidth="md">
        <BalanceCard varient="outlined">
          <BalanceCardItems>
            <p>Total Balance</p>
            <h1>$1,978.46</h1>
          </BalanceCardItems>
        </BalanceCard>
        <DashboardCards/>
      </Container>
      <BottomNavBar />
    </div>
  );
}
export default Dashboard;

const BalanceCard = styled(Card)`
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

  > *:not(:last-child) {
    margin-bottom: 10px;
  }
`
const BalanceCardItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > p {
     margin-bottom: 15px;
  font-size: 22px;
  },
  h1 {
  font-size: 36px;

  }
`
const HeaderContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`
