import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { allPostsReducer } from "./reducers/allPostsReducer";
import { userReducer } from "./reducers/userReducer";
import thunk from 'redux-thunk';
import { storiesReducer } from "./reducers/storiesReducer";

const rootReducer = combineReducers({
    userData : userReducer,
    allPostsData : allPostsReducer,
    stories: storiesReducer
});


const store = createStore(
    rootReducer, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;