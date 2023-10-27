import BaseSaga from "@/utils/BaseSaga";
import LocalPathActions from "./LocalPathActions";
import { AnyActions } from "redux";
import { all, call, delay, put } from 'redux-saga/effects'
import { LocalPath } from "./LocalPathTypes";
import { LocalPathService } from "./LocalPathService";

class LocalPathSagas extends BaseSaga {
    *[LocalPathActions.POLL_LOCALPATH]() {
        while (true) {
            try {
                const localPath: LocalPath[] = yield call(LocalPathService.getLocalPath);
                if (localPath.length > 0) {
                    yield put({type: LocalPathActions.REQUEST_LOCALPATH_SUCCESS, payload: localPath[localPath.length - 1]});
                }
            } catch (e) {
                yield put({type: LocalPathActions.REQUEST_LOCALPATH_FAILURE, error: (e as Error).message})
            }
            // poll every minute - can be adjusted accordingly
            yield delay(60000);
        }
    }
}

const localPathSagas: any = new LocalPathSagas();

export default {
    [LocalPathActions.POLL_LOCALPATH]: localPathSagas[LocalPathActions.POLL_LOCALPATH].bind(localPathSagas)
};
