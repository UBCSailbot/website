import BaseSaga from "@/utils/BaseSaga";
import GlobalPathActions from "./GlobalPathActions";
import { AnyActions } from "redux";
import { all, call, delay, put } from 'redux-saga/effects'
import { GlobalPath } from "./GlobalPathTypes";
import { GlobalPathService } from "./GlobalPathService";

class GlobalPathSagas extends BaseSaga {
    *[GlobalPathActions.POLL_GLOBALPATH]() {
        while (true) {
            try {
                const globalpath: GlobalPath[] = yield call(GlobalPathService.getGlobalPath);
                if (globalpath.length > 0) {
                    yield put({type: GlobalPathActions.REQUEST_GLOBALPATH_SUCCESS, payload: globalpath});
                }
            } catch (e) {
                yield put({type: GlobalPathActions.REQUEST_GLOBALPATH_FAILURE, error: (e as Error).message})
            }
            // poll every minute - can be adjusted accordingly
            yield delay(60000);
        }
    }
}

const globalPathSagas: any = new GlobalPathSagas();

export default {
    [GlobalPathActions.POLL_GLOBALPATH]: globalPathSagas[GlobalPathActions.POLL_GLOBALPATH].bind(globalPathSagas)
};
