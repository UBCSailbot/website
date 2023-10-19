/* Instruments */
import { combineReducers } from 'redux';
import GPSReducer from '@/stores/GPS/GPSReducers';
import AISShipsReducer from '@/stores/AISShips/AISShipsReducers';

export default () => {
    const reducerMap = {
        gps: new GPSReducer().reducer,
        aisships: new AISShipsReducer().reducer,
    };

    return combineReducers(reducerMap);
}
