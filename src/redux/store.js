import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import libraryReducer from './libraryReducer'

export const store = createStore(libraryReducer, applyMiddleware(thunk, logger))