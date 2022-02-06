import { Button } from '@mui/material'
import styled from '@emotion/styled'
const AddExpense = () =>{
  return(
    <div>
      <SaveButton>Save</SaveButton>
    </div>
  )
}
export default AddExpense

const SaveButton = styled(Button)`
width:250px;
height:25px;
`
