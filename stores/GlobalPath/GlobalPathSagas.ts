import BaseSaga from "@/utils/BaseSaga";
import GlobalPathActions from "./GlobalPathActions";
import { AnyActions } from "redux";
import { all, call, delay, put } from 'redux-saga/effects'
import { WayPoints } from "./GlobalPathTypes";
import { GlobalPathService } from "./GlobalPathService";

class GlobalPathSagas extends BaseSaga {
    *[GlobalPathActions.POLL_GLOBALPATH]() {
        while (true) {
            try {
                const globalpath: WayPoints[] = yield call(GlobalPathService.getGlobalPath);
                if (globalpath.length > 0) {
                    yield put({type: GlobalPathActions.REQUEST_GLOBALPATH_SUCCESS, payload: globalpath});
                }
                console.log(globalpath);
            } catch (e) {
                yield put({type: GlobalPathActions.REQUEST_GLOBALPATH_FAILURE, error: (e as Error).message})
            }
            // poll every minute - can be adjusted accordingly
            yield delay(6000);
        }
    }
}

const globalpathSagas: any = new GlobalPathSagas();

export default {
    [GlobalPathActions.POLL_GLOBALPATH]: globalpathSagas[GlobalPathActions.POLL_GLOBALPATH].bind(globalpathSagas)
};
