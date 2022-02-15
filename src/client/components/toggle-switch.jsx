import React from 'react';
import {ToggleButtonGroup, ToggleButton} from '@mui/material';
import styled from '@emotion/styled'
 const ToggleSwitch = () =>{
   return(
     <ToggleButtonContainer
       color="primary"
      //  value={alignment}
       exclusive
     >
       <ToggleButton value="income">income</ToggleButton>
       <ToggleButton value="expenses">expenses</ToggleButton>
     </ToggleButtonContainer>

   )
 }
export default ToggleSwitch;
const ToggleButtonContainer = styled(ToggleButtonGroup)`
display:flex;
justify-content:center;
`
