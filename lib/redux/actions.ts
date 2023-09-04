import { createAction } from "@reduxjs/toolkit"

export const failureAction = createAction<any>('FAILURE')
export const getBoatCoordinatesAction = createAction<any>('GET_BOAT_COORDINATES')
