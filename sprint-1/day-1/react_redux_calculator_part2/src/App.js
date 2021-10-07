
import './App.css';
import { useContext, useState } from 'react';
import { AppContext } from './Context/AppContextProvider';
import { GridDiv, DisplayDiv, GridInsideDiv } from "./Styled/styled";
import { addCount, decCount, divCount, incCount, mulCount, subCount } from './Redux/actions.js';

function App() {
  const [input, setInput] = useState('');
  const { getState, dispatch } = useContext(AppContext);
  const { counter } = getState();
  console.log('counter:', counter)
  

  return (
      <div className="App">
          <DisplayDiv>
              <div> {counter}</div>
          </DisplayDiv>
          <DisplayDiv>
              <input
                  type="number"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
              />
          </DisplayDiv>
          <GridDiv>
              <GridInsideDiv>
                  <h2 onClick={() => dispatch(incCount(1))}>Increment</h2>
              </GridInsideDiv>
              <GridInsideDiv>
                  <h2 onClick={() => dispatch(decCount(1))}>Decrement</h2>
              </GridInsideDiv>
              <GridInsideDiv>
                  <h2 onClick={() => dispatch(addCount(+input))}>Add</h2>
              </GridInsideDiv>
              <GridInsideDiv>
                  <h2 onClick={() => dispatch(subCount(+input))}>Subtract</h2>
              </GridInsideDiv>
              <GridInsideDiv>
                  <h2 onClick={() => dispatch(mulCount(+input))}>Multiply</h2>
              </GridInsideDiv>
              <GridInsideDiv>
                  <h2 onClick={() => dispatch(divCount(+input))}>Devide</h2>
              </GridInsideDiv>
          </GridDiv>
      </div>
  );
}

export default App;
