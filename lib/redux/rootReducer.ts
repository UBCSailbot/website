/* Instruments */
import { combineReducers } from 'redux';
import GPSReducer from '@/stores/GPS/GPSReducers';
import GlobalPathReducer from '@/stores/GlobalPath/GlobalPathReducers';

export default () => {
    const reducerMap = {
        gps: new GPSReducer().reducer,
        globalpath: new GlobalPathReducer().reducer,
    };

    return combineReducers(reducerMap)
}
