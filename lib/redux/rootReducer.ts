/* Instruments */
import { combineReducers } from 'redux';
import GPSReducer from '@/stores/GPS/GPSReducers';
import GlobalPathReducer from '@/stores/GlobalPath/GlobalPathReducers';
import AISShipsReducer from '@/stores/AISShips/AISShipsReducers';

export default () => {
    const reducerMap = {
        gps: new GPSReducer().reducer,
        globalPath: new GlobalPathReducer().reducer,
        aisships: new AISShipsReducer().reducer
    };

    return combineReducers(reducerMap);
}
