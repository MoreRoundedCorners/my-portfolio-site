import { createStore } from "redux";
import viewReducer from "./reducer/viewReducer";

const store = createStore(viewReducer);

export default store;
