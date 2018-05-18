import React from 'react';

import { HashRouter, Route } from 'react-router-dom';
import LoginPage from './views/login';

const Routes = (props) => (
    <HashRouter {...props}>
        <div className="Router">

            <Route path="/" component={LoginPage} exact />

        </div>
    </HashRouter>
);

export default Routes;

