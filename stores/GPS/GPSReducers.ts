import BaseReducer from "@/utils/BaseReducer";
import GPSActions from "./GPSActions";
import {
    GPSState
} from "./GPSTypes";
import { AnyAction } from "redux";

export default class GPSReducer extends BaseReducer {
    initialState: GPSState = {
        gps: [{lat: 49.37614179786771, lng: -123.27376619978901, speed: 0, heading: 0}],
        error: null
    };

    [GPSActions.REQUEST_GPS_SUCCESS](state: GPSState, action: AnyAction) {
        return {
            ...state,
            gps: action.payload,
        };
    }

    [GPSActions.REQUEST_GPS_FAILURE](state: GPSState, action: AnyAction) {
        return {
            ...state,
            error: action.error
        };
    }
}
