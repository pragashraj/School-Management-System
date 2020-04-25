import {combineReducers} from 'redux'
import userReducer from '../Reducers/userReducer'
import dashBoardReducer from '../Reducers/dashBoardReducer'

export default combineReducers({
    user:userReducer,
    dashBoard:dashBoardReducer
})