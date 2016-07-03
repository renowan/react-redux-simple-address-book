import React from 'react'
import { Router,Route, IndexRoute ,browserHistory} from 'react-router'

import App from 'components/App'

import HomeView from 'views/HomeView/HomeView'
import PersonalView from 'views/PersonalView/PersonalView'
import CompanyView from 'views/CompanyView/CompanyView'
import ErrorView from 'views/ErrorView/ErrorView'

export default (store) => (
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomeView} />
            <Route path='/pnl' component={PersonalView} />
            <Route path='/company' component={CompanyView} />
        </Route>
        <Route path='*' component={App}>
            <IndexRoute component={ErrorView} />
        </Route>
    </Router>
)
