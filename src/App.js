import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const name = useSelector(state => state.name)
  const listSize = useSelector(state => state.list.length);
  const objectKeys = useSelector(state => Object.keys(state.object));
  return (
    <div className="App">
      Counter : {counter} <br></br>
      Name: {name} <br></br>
      List size: {listSize} <br></br>
      Object keys length: {objectKeys.length}

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

      <div>
        <input type="button" value="same object (new ref)" onClick={() => dispatch({type: "SAME_OBJECT"})}/>
        <input type="button" value="add 'name' Key to object" onClick={() => dispatch({type: "NEW_KEY_OBJECT"})}/>
      </div>

    </div>
  );
}

export default App;
