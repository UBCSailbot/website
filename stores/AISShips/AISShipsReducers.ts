import BaseReducer from "@/utils/BaseReducer";
import AISShipsActions from "./AISShipsActions";
import { AISShipsState } from "./AISShipsTypes";
import { AnyAction } from "redux";

export default class AISShipsReducer extends BaseReducer {
    initialState: AISShipsState = {
        data: {
            ships: [
                {
                    id: 0,
                    latitude: 42.1232,
                    longitude: -123.3045,
                    speed: 10,
                    heading: 275
                },
                {
                    id: 1,
                    latitude: 49.4567,
                    longitude: -123.3729,
                    speed: 15,
                    heading: 280
                },
                {
                    id: 2,
                    latitude: 49.1728,
                    longitude: -123.4578,
                    speed: 20,
                    heading: 285
                }
            ]
        },
        error: null
    };

    [AISShipsActions.REQUEST_AISShips_SUCCESS](state: AISShipsState, action: AnyAction) {
        return {
            ...state,
            aisships: { ships: action.payload },
        };
    }

    [AISShipsActions.REQUEST_AISShips_FAILURE](state: AISShipsState, action: AnyAction) {
        return {
            ...state,
            error: action.error
        };
    }
}
