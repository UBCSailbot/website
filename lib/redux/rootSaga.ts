import GPSActions from "@/stores/GPS/GPSActions";
import gpsSaga from "@/stores/GPS/GPSSagas";
import GlobalPathActions from "@/stores/GlobalPath/GlobalPathActions";
import globalpathSaga from "@/stores/GlobalPath/GlobalPathSagas";

import { all, call } from "redux-saga/effects";

export function* rootSaga() {
    yield all([
        gpsSaga[GPSActions.POLL_GPS](),
        globalpathSaga[GlobalPathActions.POLL_GLOBALPATH]()
    ]);
}
