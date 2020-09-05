import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import AppContainer from "./AppContainer";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter><Provider store={store}><AppContainer /></Provider></BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);