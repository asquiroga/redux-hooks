import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const name = useSelector(state => state.name)
  const listSize = useSelector(state => state.list.length);
  return (
    <div className="App">
      Counter : {counter} <br></br>
      Name: {name} <br></br>
      List size: {listSize}

      <div>
        <input type="button" value="+" onClick={() => dispatch({type: "INCREMENT"})}/>
        <input type="button" value="-" onClick={() => dispatch({type: "DECREMENT"})}/>
        <input type="button" value="equal" onClick={() => dispatch({type: "EQUAL"})}/>
        <input type="button" value="New Name" onClick={() => dispatch({type: "NEW_NAME", payload: "Peter"})}/>
      </div>

      <div>
        <input type="button" value="new item in list" onClick={() => dispatch({type: "NEW_ITEM_LIST"})}/>
        <input type="button" value="same list (new reference)" onClick={() => dispatch({type: "SAME_LIST"})}/>
      </div>

    </div>
  );
}

export default App;
