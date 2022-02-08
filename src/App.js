import React, {Fragment} from 'react';
import './index.css';
import Dashboard from './client/pages/dashboard';
import AddExpense from './client/pages/add-expenses';
import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
// import {Button} from '@mui/material'
// import styled from '@emotion/styled'

function App() {
    return (
      <Router>
        <Fragment>
          <Routes>
            <Route exact path='/' element={<Dashboard />}></Route>
            <Route exact path='/add-expenses' element={<AddExpense />} />
          </Routes>
        </Fragment>
      </Router>
      // <Router>
      //   <div>
      //     <Link to="/">Dashboard</Link>
      //     <Link to="/add-expenses">Add Expenses</Link>
      //     {/* A <Switch> looks through its children <Route>s and
      //       renders the first one that matches the current URL. */}
      //     <Routes>
      //       <Route path="/">
      //         <Dashboard />
      //       </Route>
      //       <Route path="/add-expenses">
      //         <AddExpense />
      //       </Route>
      //     </Routes>
      //   </div>
      // </Router>
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
