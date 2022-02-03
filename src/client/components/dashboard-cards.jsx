import { Card } from '@mui/material';
import styled from '@emotion/styled';

const DashboardCards = ()=> {
  return(
    <div>
      <CustomCard>
        <CardItems>
          <i className='fas fa-credit-card'></i>
          <p>Transactions</p>
        </CardItems>
      </CustomCard>
      <CustomCard>
        <CardItems>
          <i className='fas fa-history'></i>
          <p>Statements</p>
        </CardItems>
      </CustomCard>
      <CustomCard>
        <CardItems>
          <i className='fas fa-list-ul'></i>
          <p>Categories</p>
        </CardItems>
      </CustomCard>
      <CustomCard>
        <CardItems>
          <i className='fas fa-plus-circle'></i>
          <p>Add Expense</p>
        </CardItems>
      </CustomCard>
    </div>
  )
}
export default DashboardCards;

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
