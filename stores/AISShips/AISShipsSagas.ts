import BaseSaga from "@/utils/BaseSaga";
import AISShipsActions from "./AISShipsActions";
import { AnyAction } from "redux";
import { all, call, delay, put } from 'redux-saga/effects'
import { AISShips } from "./AISShipsTypes";
import { AISShipsService } from "./AISShipsService";

class AISShipsSagas extends BaseSaga {
    *[AISShipsActions.POLL_AISSHIPS]() {
        while (true) {
            try {
                const aisShips: AISShips[] = yield call(AISShipsService.getAISShips);
                if (aisShips.length > 0) {
                    const latestAISShip = aisShips[aisShips.length - 1];
                    yield put({type: AISShipsActions.REQUEST_AISSHIPS_SUCCESS, payload: latestAISShip});
                }
            } catch (e) {
                yield put({type: AISShipsActions.REQUEST_AISSHIPS_FAILURE, error: (e as Error).message});
            }
            // Poll every minute. Can be adjusted accordingly.
            yield delay(process.env.NEXT_PUBLIC_POLLING_TIME_MS)
        }
    }
}

const aisShipsSagas: any = new AISShipsSagas();

export default {
    [AISShipsActions.POLL_AISSHIPS]: aisShipsSagas[AISShipsActions.POLL_AISSHIPS].bind(aisShipsSagas)
};
