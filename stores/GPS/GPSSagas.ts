import BaseSaga from "@/utils/BaseSaga";
import GPSActions from "./GPSActions";
import { AnyAction } from "redux";
/* Instruments */
import { all, call, delay, put } from 'redux-saga/effects'
import { GPSCoordinate, GPSDatabaseCoordinate } from "./GPSTypes";
import { GPSService } from "./GPSService";

class GPSSagas extends BaseSaga {
    *[GPSActions.POLL_GPS]() {
        while (true) {
            try {
                const gps: GPSDatabaseCoordinate[] = yield call(GPSService.getGPS);
                if (gps.length > 0) {
                    const data: GPSCoordinate[] = yield gps.map( (data) => {
                        return {
                            "lat": data["latitude"],
                            "lng": data["longitude"],
                            "speed": data["speed"],
                            "heading": data["heading"]
                        }
                    });
                    yield put({type: GPSActions.REQUEST_GPS_SUCCESS, payload: data})
                }
            } catch (e) {
                yield put({type: GPSActions.REQUEST_GPS_FAILURE, error: (e as Error).message})
            }
            // Poll every minute. Can be adjusted accordingly.
            yield delay(60000)
        }
    }
}

const gpsSagas: any = new GPSSagas();

export default {
    [GPSActions.POLL_GPS]: gpsSagas[GPSActions.POLL_GPS].bind(gpsSagas)
};
