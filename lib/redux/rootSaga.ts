import GPSActions from "@/stores/GPS/GPSActions";
import gpsSaga from "@/stores/GPS/GPSSagas";
import GlobalPathActions from "@/stores/GlobalPath/GlobalPathActions";
<<<<<<< HEAD
import globalPathSaga from "@/stores/GlobalPath/GlobalPathSagas";

=======
import globalpathSaga from "@/stores/GlobalPath/GlobalPathSagas";
import AISShipsActions from "@/stores/AISShips/AISShipsActions";
import aisShipsSaga from "@/stores/AISShips/AISShipsSagas";
>>>>>>> 8cc1d8e4817da73f8f499a3607544ab78f1fc5c0
import { all, call } from "redux-saga/effects";

export function* rootSaga() {
    yield all([
        gpsSaga[GPSActions.POLL_GPS](),
<<<<<<< HEAD
     globalPathSaga[GlobalPathActions.POLL_GLOBALPATH]()
=======
        globalpathSaga[GlobalPathActions.POLL_GLOBALPATH](),
        aisShipsSaga[AISShipsActions.POLL_AISSHIPS]()
>>>>>>> 8cc1d8e4817da73f8f499a3607544ab78f1fc5c0
    ]);
}
