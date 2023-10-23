import GPSActions from "@/stores/GPS/GPSActions";
import gpsSaga from "@/stores/GPS/GPSSagas";
import AISShipsActions from "@/stores/AISShips/AISShipsActions";
import aisShipsSaga from "@/stores/AISShips/AISShipsSagas";

import { all, call } from "redux-saga/effects";

export function* rootSaga() {
    yield all([
        gpsSaga[GPSActions.POLL_GPS](),
        aisShipsSaga[AISShipsActions.POLL_AISSHIPS](),
    ]);
}
