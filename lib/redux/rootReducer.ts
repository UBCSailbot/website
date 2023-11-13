/* Instruments */
import { combineReducers } from 'redux';
import GPSReducer from '@/stores/GPS/GPSReducers';
import GlobalPathReducer from '@/stores/GlobalPath/GlobalPathReducers';
import AISShipsReducer from '@/stores/AISShips/AISShipsReducers';
import LocalPathReducer from '@/stores/LocalPath/LocalPathReducers';

export function rootReducer() {
  const reducerMap = {
    gps: new GPSReducer().reducer,
    aisShips: new AISShipsReducer().reducer,
    localPath: new LocalPathReducer().reducer,
    globalPath: new GlobalPathReducer().reducer,
  };

  return combineReducers(reducerMap);
}
