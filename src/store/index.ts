import { combineReducers, createStore } from "redux";
import { backgroundImageReducer } from "./backgroundImageReducer";

const rootReducer = combineReducers({
    backgroundImage: backgroundImageReducer
});

const store = createStore(rootReducer);

export default store;