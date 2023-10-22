import BaseSaga from "@/utils/BaseSaga";
import GlobalPathActions from "./GlobalPathActions";
import { AnyActions } from "redux";
// Instruments
import { all, call, delay, put } from 'redux-saga/effects'
import { GlobalPathCoordinate, GlobalPathDatabaseCoordinate } from "./GlobalPathTypes";
import { GlobalPathService } from "./GlobalPathService";

class GlobalPathSagas extends BaseSaga {
    *[GlobalPathActions.POLL_GLOBALPATH]() {
        while (true) {
            try {
                const globalpath: GlobalPathDatabaseCoordinate[] = yield call(GlobalPathService.getGlobalPath);
                if (globalpath.length > 0) {
                    const data: GlobalPathCoordinate[] = yield globalpath.map( (data) => {
                        return {
                            "lat": data["latitude"],
                            "lng": data["longitude"]
                        }
                    });
                    yield put({type: GlobalPathActions.REQUEST_GLOBALPATH_SUCCESS, payload: data})
                }
            } catch (e) {
                yield put({type: GlobalPathActions.REQUEST_GLOBALPATH_FAILURE, error: (e as Error).message})
            }
            // poll every minute - can be adjusted accordingly
            yield delay(60000)
        }
    }
}

const globalpathSagas: any = new GlobalPathSagas();

export default {
    [GlobalPathActions.POLL_GLOBALPATH]: globalpathSagas[GlobalPathActions.POLL_GLOBALPATH].bind(globalpathSagas)
};
