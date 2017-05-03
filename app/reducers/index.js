import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

//dummy reducer is required for data which is not handled by Redux
const dummy = (state = null) => state;

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    url: dummy,
    pages: dummy,
    layout: dummy
});

export default todoApp
