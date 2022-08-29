import "./App.css";
import Circle from "./Circle";
import Button from "./Button";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { selectCount } from "./features/counter/CounterSlice";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./features/counter/CounterSlice";

function App() {
  //const count = useSelector((state) => state.counter.value); if we use this we donot need the import selectCount
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <Circle count={count} />
      <div className="flex">
        <Button onClick={() => dispatch(decrementByAmount(-5))}>
          Decrease 5
        </Button>
        <Button onClick={() => dispatch(decrement())}>Decrease 1</Button>
        <Button onClick={() => window.location.reload()}>reset</Button>
        <Button onClick={() => dispatch(increment())}>Increase 1</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>
          Increase 5
        </Button>
      </div>
    </div>
  );
}

export default App;
