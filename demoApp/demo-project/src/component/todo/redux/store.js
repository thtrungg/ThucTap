import { legacy_createStore as createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from './reducer';
const enhancers = composeWithDevTools()

const store = createStore(rootReducer , enhancers);

export default store;