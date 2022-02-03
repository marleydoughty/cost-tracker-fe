import { Card } from '@mui/material';
import styled from '@emotion/styled';

const DashboardCards = ()=> {
   return(
      <div>
        <CustomCard>
          <div className="dash-card-items">
            <i className='fas fa-credit-card'></i>
            <p>Transactions</p>
          </div>
        </CustomCard>
       <CustomCard>
         <div className="dash-card-items">
           <i className='fas fa-history'></i>
           <p>Statements</p>
         </div>
       </CustomCard>
       <CustomCard>
         <div className="dash-card-items">
           <i className='fas fa-list-ul'></i>
           <p>Categories</p>
         </div>
       </CustomCard>
       <CustomCard>
         <div className="dash-card-items">
           <i className='fas fa-plus-circle'></i>
           <p>Add Expense</p>
         </div>
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
