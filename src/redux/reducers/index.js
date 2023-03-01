import {combineReducers} from 'redux'
import { LoginReducer } from './userReducer'
import { GetCoursesReducer } from './CoursesReducer'
export const Reducers = combineReducers({
    
    LoginReducer ,
    GetCoursesReducer
})
