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
                const aisships: AISShips[] = yield call(AISShipsService.getAISShips);
                if (aisships.length > 0) {
                    const latestAISship = aisships[aisships.length - 1];
                    yield put({type: AISShipsActions.REQUEST_AISSHIPS_SUCCESS, payload: latestAISship});
                }
            } catch (e) {
                yield put({type: AISShipsActions.REQUEST_AISSHIPS_FAILURE, error: (e as Error).message});
            }
            // Poll every minute. Can be adjusted accordingly.
            yield delay(60000);
        }
    }
}

const aisshipsSagas: any = new AISShipsSagas();

export default {
    [AISShipsActions.POLL_AISSHIPS]: aisshipsSagas[AISShipsActions.POLL_AISSHIPS].bind(aisshipsSagas)
};
