import 'jquery'
import 'css/main.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import React from "react";
import {render} from "react-dom";
import {hashHistory, Router} from "react-router";
import {Provider} from "react-redux";

import initialReduxState from "constants/initialState";
import configureStore from "store/configureStore";
import {routes} from "./routes";
import {AppContainer} from 'react-hot-loader';

// Create the Redux store
const store = configureStore(initialReduxState);

function renderWithHotReload(RootElement) {
    render(
        <AppContainer>
            <Provider store={store}>
                <Router history={hashHistory} routes={routes} />
            </Provider>
        </AppContainer>
        , document.getElementById('app')
    )};

renderWithHotReload(routes);

if (module.hot) {
    module.hot.accept('./routes', () => {
        const NextApp = require('./routes').default;
        renderWithHotReload(NextApp)
    })
}
