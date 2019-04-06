import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//redux 
import { createStore,applyMiddleware,combineReducers } from "redux";
import { Provider } from "react-redux";

// redux plugin
import logger from "redux-logger";
import thunk from "redux-thunk";
import inforReducer from "./redux/reducer/inforReducer";

import * as serviceWorker from './serviceWorker';
const rootReducer = combineReducers({
    inforRD:inforReducer
})
const store = createStore(rootReducer,applyMiddleware(
    logger,
    thunk
))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
