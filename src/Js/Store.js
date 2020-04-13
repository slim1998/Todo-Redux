import {createStore} from 'redux'
import Todoreducer from './Reducer/Todoreducers'

const store = createStore(Todoreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store