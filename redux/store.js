import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers/rootReducer'

let store;

//camelNote:Credits to https://github.com/vercel/next.js/tree/canary/examples/with-redux-thunk

function initStore(initialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

/*
    camelNote:Nice use of useMemo. As a note to my future self, useMemo memorizes the result of a
    function, so it only runs the function if the second argument(which is an array) changes. 
    This is useful for memoizing expensive functions.
*/
export function useStore(initialState) {  
  return useMemo(() => initializeStore(initialState), [initialState])
}