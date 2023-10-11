/* Instruments */
import { combineReducers } from 'redux';
import GPSReducer from '@/stores/GPS/GPSReducers';

export default () => {
    const reducerMap = {
        gps: new GPSReducer().reducer,
    }; 
    
    return combineReducers(reducerMap)
}

