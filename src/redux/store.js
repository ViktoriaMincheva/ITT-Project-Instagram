import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { allPostsReducer } from "./reducers/allPostsReducer";
import { userReducer } from "./reducers/userReducer";
import thunk from 'redux-thunk';
import { storiesReducer } from "./reducers/storiesReducer";
import { commentsProvider } from "./reducers/commentsReducer";
import { allUsersReducer } from "./reducers/allUsersReducer";

const rootReducer = combineReducers({
    userData : userReducer,
    allPostsData : allPostsReducer,
    stories: storiesReducer,
    comments: commentsProvider,
    users: allUsersReducer
});


const store = createStore(
    rootReducer, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;