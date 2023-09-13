/* Actions */
import { failureAction, getGPSAction } from './actions'

/* Instruments */
import { all, call, delay, put } from 'redux-saga/effects'


function* pollGPSSaga(): Generator<any, any, any> {
    while (true) {
        let res = yield fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/gps`)
        res = yield res.json()
        if (res.success) {
            /* Process data to make it fit the requirements of the Google Maps API */
            const data = yield res.data.map( (data) => {
                return {
                    "lat": data["latitude"],
                    "lng": data["longitude"],
                    "speed": data["speed"],
                    "heading": data["heading"]
                }
            });
            yield put(getGPSAction(data))
        } else {
            yield put(failureAction(res.message))
        }
        // Poll every minute. Can be adjusted accordingly.
        yield delay(60000)
    }
}

export function* rootSaga() {
    yield all([
        call(pollGPSSaga)
    ])
}
