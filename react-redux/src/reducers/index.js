import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { crudApiReducer } from "./crudApiReducer";
import { shoppingReducer } from "./shoppingReducer";

const reducers =combineReducers({
    contador: contadorReducer,
    shopping: shoppingReducer,
    crud: crudApiReducer
})

export default reducers