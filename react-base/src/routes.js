import React from "react";
import {IndexRoute, Route} from "react-router";

import App from "./app";
import Questionnaire from "pages/questionnaire";

/**
 * Routes configuration
 * @module epa-portal/components
 */
export const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Questionnaire} />
    </Route>
);
