import React from 'react'
import { Router,Route, IndexRoute ,browserHistory} from 'react-router'

import CoreLayout from 'layouts/CoreLayout/index'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import HomeView from 'views/HomeView/HomeView'
import PersonalView from 'views/PersonalView/PersonalView'
import CompanyView from 'views/CompanyView/CompanyView'


export default (store) => (
<Router history={browserHistory}>
    <Route path='/' component={CoreLayout}>
        <IndexRoute component={HomeView} />
    </Route>
    <Route path='/pnl' component={CoreLayout}>
        <IndexRoute component={PersonalView} />
    </Route>
    <Route path='/company' component={CoreLayout}>
        <IndexRoute component={CompanyView} />
    </Route>
    <Route path='*' component={CoreLayout}>
        <IndexRoute component={HomeView} />
    </Route>
</Router>
)
