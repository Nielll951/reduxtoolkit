import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="text-center">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;

// Redux is a state management library.
// store - global object that keeps all information(state).
// reducers - they are like controllers. They remove, update, add things. Reducer is an object that has a lot of key-value pairs(actions). Reducers will be talking to the store using dispatch.
// useSelector - is like a midlman between component and store. It can ask the store about some information that component needs.
// useDispatch - whenever you want to update some information in the store, you can't directly call the reducer, because it will break the flow. In that case we use useDispatch and say we want to call a very specific reducer, and this reducer finally gets an update in the store. useDispatch updates information in the store.