/* Instruments */
import { combineReducers } from 'redux';
import GPSReducer from '@/stores/GPS/GPSReducers';
import GlobalPathReducer from '@/stores/GlobalPath/GlobalPathReducers';
import AISShipsReducer from '@/stores/AISShips/AISShipsReducers';
import LocalPathReducer from '@/stores/LocalPath/LocalPathReducers';

export default () => {
    const reducerMap = {
        gps: new GPSReducer().reducer,
        globalPath: new GlobalPathReducer().reducer,
        aisShips: new AISShipsReducer().reducer,
        localPath: new LocalPathReducer().reducer
    };

    return combineReducers(reducerMap);
}
