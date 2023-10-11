import GPSActions from "@/stores/GPS/GPSActions";
import gpsSaga from "@/stores/GPS/GPSSagas";
import { all, call } from "redux-saga/effects";

export function* rootSaga() {
    yield all([
        gpsSaga[GPSActions.POLL_GPS](),
    ]);
}
