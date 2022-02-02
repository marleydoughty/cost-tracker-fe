import React from 'react';
import './App.css';
import {Button} from '@mui/material'
import styled from '@emotion/styled'

function App() {
  const [counter, setCounter] = React.useState(0)
  const handleClick = () => {
    setCounter(0)
  }
  React.useEffect( () => {
    setInterval( () => {
      setCounter( (c) => c + 1)
    }, 1000)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <ContainerOuter>
        <p>
            You've clicked <code>{counter}</code> times.
        </p>
          <MySpecialButton onClick={handleClick} variant="contained">Hello there!</MySpecialButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </ContainerOuter>
      </header>
    </div>
  );
}

export default App;

const ContainerOuter = styled.div`
  display: flex;
  background-color: white;
  color: black;
  flex-direction: column;
  align-items: stretch;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,.4);
  border-radius: 5px;

  > *:not(:last-child) {
    margin-bottom: 10px;
  }
`

const MySpecialButton = styled(Button)`
  background-color: green;
  margin: 20px;
`
