import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { allPostsReducer } from "./reducers/allPostsReducer";
import { userReducer } from "./reducers/userReducer";
import thunk from 'redux-thunk';
import { commentsProvider } from "./reducers/commentsReducer";
import { allUsersReducer } from "./reducers/allUsersReducer";
import { allStoriesReducer } from "./reducers/allStoriesReducer";
import { allLikesReducer } from "./reducers/allLikesReducer";

const rootReducer = combineReducers({
    userData : userReducer,
    allPostsData : allPostsReducer,
    comments: commentsProvider,
    users: allUsersReducer,
    allStories : allStoriesReducer,
    likesData: allLikesReducer
});


const store = createStore(
    rootReducer, compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;