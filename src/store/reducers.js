import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import app from 'redux/modules/app'
import personal from 'redux/modules/personal'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    app,
    personal,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
