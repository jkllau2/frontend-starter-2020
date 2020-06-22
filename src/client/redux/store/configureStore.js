import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = (preloadState) => {
  const store = createStore(
    rootReducer,
    preloadState,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

  if (module.hot) {
    // webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

export default configureStore
