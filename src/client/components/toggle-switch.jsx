import React from 'react'
import {ToggleButtonGroup, ToggleButton} from '@mui/material'
 const ToggleSwitch = () =>{
   return(
     <ToggleButtonGroup
       color="primary"
      //  value={alignment}
       exclusive
     >
       <ToggleButton value="income">income</ToggleButton>
       <ToggleButton value="expenses">expenses</ToggleButton>
     </ToggleButtonGroup>

   )
 }
export default ToggleSwitch;
