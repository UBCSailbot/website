/* Actions */
import { failureAction, getGPSAction } from './actions'

/* Instruments */
import { all, call, delay, put } from 'redux-saga/effects'


function* pollGPSSaga(): Generator<any, any, any> {
    while (true) {
        try {
            const res = yield fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}:${process.env.NEXT_PUBLIC_SERVER_PORT}/api/gps`)
            const gps = yield res.json()
            yield put(getGPSAction(gps.data))
        } catch (err) {
            yield put(failureAction(err))
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
