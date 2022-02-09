import React, {Fragment} from 'react';
import './index.css';
import Dashboard from './client/pages/dashboard';
import AddExpenses from './client/pages/add-expenses';
import Transactions from './client/pages/transactions';
import Settings from './client/pages/settings';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import {Button} from '@mui/material'
// import styled from '@emotion/styled'

function App() {
    return (
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Dashboard />}></Route>
            <Route  path='/add-expenses' element={<AddExpenses />} />
            <Route  path='/transactions' element={<Transactions />} />
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </Fragment>
      </Router>
    );
}
export default App;




//   const [counter, setCounter] = React.useState(0)
//   const handleClick = () => {
//     setCounter(counter + 1)
//   }
//   // React.useEffect( () => {
//   //   setInterval( () => {
//   //     setCounter( (c) => c + 1)
//   //   }, 1000)
//   // }, [])
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ContainerOuter>
//         <p>
//             You've clicked <code>{counter}</code> times.
//         </p>
//           <MySpecialButton onClick={handleClick} variant="contained">Hello there!</MySpecialButton>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         </ContainerOuter>
//       </header>
//     </div>
//   );
// }

// export default App;

// const ContainerOuter = styled.div`
//   display: flex;
//   background-color: white;
//   color: black;
//   flex-direction: column;
//   align-items: stretch;
//   padding: 20px;
//   box-shadow: 0 2px 4px rgba(0,0,0,.4);
//   border-radius: 5px;

//   > *:not(:last-child) {
//     margin-bottom: 10px;
//   }
// `

// const MySpecialButton = styled(Button)`
//   background-color: green;
//   margin: 20px;
// `
