import { Button } from '@mui/material'
import styled from '@emotion/styled'
import {Card} from '@mui/material'
import { Container } from '@mui/material'
const AddExpense = () =>{
  return(
    <>
      <Header>
        <h2>Add Expenses</h2>
        <ExpenseContainer>$0</ExpenseContainer>
      </Header>
      <Container maxWidth="md">
        <CustomCard>
          <CardItems>
            <i className='far fa-clock'></i>
            <p>Date</p>
          </CardItems>
        </CustomCard>
        <CustomCard>
          <CardItems>
            <i className='far fa-sticky-note'></i>
            <p>Notes</p>
          </CardItems>
        </CustomCard>
        <CustomCard>
          <CardItems>
            <i className='fas fa-list-ul'></i>
            <p>Category</p>
          </CardItems>
        </CustomCard>
      </Container>
      <ButtonContainer>
        <SaveButton>Save</SaveButton>
      </ButtonContainer>
    </>

  )
}
export default AddExpense

const SaveButton = styled(Button)`
width:300px;
height:60px;
color:white;
font-size: 22px;
background: #12c2e9;
background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9);
position:fixed;
bottom:50px;
border-radius:15px;
`
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
flex-direction:column;
align-items:center;
justify-content:center;
font-size:20px;
margin:50px 0 50px 0;
`
const ExpenseContainer =  styled.div`
margin-top:20px;
display:flex;
align-items:center;
justify-content:center;
background-color:white;
width:300px;
height:60px;
border-radius:15px;
font-size:30px;
`
const ButtonContainer = styled.div`
display:flex;
justify-content:center;
`
