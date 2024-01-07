import { legacy_createStore } from "redux";
import reducers from "../reducers";

const store = legacy_createStore(reducers)

store.subscribe(()=>console.log(store))

export default store