import { createAction } from "@reduxjs/toolkit"

export const failureAction = createAction<any>('FAILURE')
export const getGPSAction = createAction<any>('GET_GPS_ACTION')
