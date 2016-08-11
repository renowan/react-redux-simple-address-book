import React from 'react'
import { Router,Route, IndexRoute ,browserHistory} from 'react-router'

import App from 'components/App'

import HomeView from 'views/HomeView/HomeView'
import PersonalView from 'views/PersonalView/PersonalView'
import CompanyView from 'views/CompanyView/CompanyView'
import ErrorView from 'views/ErrorView/ErrorView'

const basePath = __PROD__ ? '/react-redux-simple-address-book' : '';

export default (store) => (
    <Router history={browserHistory}>
        <Route path={`${basePath}/`} component={App}>
            <IndexRoute component={HomeView} />
            <Route path={`${basePath}/pnl`} component={PersonalView} />
            <Route path={`${basePath}/company`} component={CompanyView} />
        </Route>
        <Route path='*' component={App}>
            <IndexRoute component={ErrorView} />
        </Route>
    </Router>
)
