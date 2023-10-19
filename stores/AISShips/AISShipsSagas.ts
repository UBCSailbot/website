import BaseSaga from "@/utils/BaseSaga";
import AISShipsActions from "./AISShipsActions";
import { AnyAction } from "redux";
import { all, call, delay, put } from 'redux-saga/effects'
import { AISShipsCoordinate } from "./AISShipsTypes";
import { AISShipsService } from "./AISShipsService";

class AISShipsSagas extends BaseSaga {
    *[AISShipsActions.POLL_AISShips]() {
        while (true) {
            try {
                const aisships: AISShipsCoordinate[] = yield call(AISShipsService.getAISShips);
                if (aisships.length > 0) {
                    yield put({type: AISShipsActions.REQUEST_AISShips_SUCCESS, payload: aisships});
                }
            } catch (e) {
                yield put({type: AISShipsActions.REQUEST_AISShips_FAILURE, error: (e as Error).message});
            }
            // Poll every minute. Can be adjusted accordingly.
            yield delay(60000);
        }
    }
}

const aisshipsSagas: any = new AISShipsSagas();

export default {
    [AISShipsActions.POLL_AISShips]: aisshipsSagas[AISShipsActions.POLL_AISShips].bind(aisshipsSagas)
};
