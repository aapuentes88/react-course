import { Contador } from "./components/Contador";
import { ContadorMejorado } from "./components/ContadorMejorado";
import CrudApi from "./components/Crud/CrudApi";
import ShoppingCart from "./components/ShoppingCart";


function App() {
  return (
    <div>
      <h1>React Reducers</h1>
      <hr/> 
      <CrudApi/>
      <hr/> 
      <ShoppingCart/>
      <hr/> 
      <ContadorMejorado/>
      <hr/> 
      <Contador/>
    </div>
  );
}

export default App;
