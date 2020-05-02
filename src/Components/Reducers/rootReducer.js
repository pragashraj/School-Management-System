import {combineReducers} from 'redux'
import userReducer from '../Reducers/userReducer'
import dashBoardReducer from '../Reducers/dashBoardReducer'
import AccReducer from '../Reducers/AccReducer'
import contentReducer from './contentReducer'

export default combineReducers({
    user:userReducer,
    dashBoard:dashBoardReducer,
    account:AccReducer,
    content:contentReducer
})