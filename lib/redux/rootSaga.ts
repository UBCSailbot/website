import GPSActions from "@/stores/GPS/GPSActions";
import gpsSaga from "@/stores/GPS/GPSSagas";
import GlobalPathActions from "@/stores/GlobalPath/GlobalPathActions";
import globalpathSaga from "@/stores/GlobalPath/GlobalPathSagas";
import AISShipsActions from "@/stores/AISShips/AISShipsActions";
import aisShipsSaga from "@/stores/AISShips/AISShipsSagas";
import { all, call } from "redux-saga/effects";

export function* rootSaga() {
    yield all([
        gpsSaga[GPSActions.POLL_GPS](),
        globalpathSaga[GlobalPathActions.POLL_GLOBALPATH](),
        aisShipsSaga[AISShipsActions.POLL_AISSHIPS]()
    ]);
}
