/* Instruments */
import { createReducer } from '@reduxjs/toolkit'
import { failureAction, getGPSAction } from './actions'

const initialState = {
    error: null,
    gps: [{lat: 49.37614179786771, lng: -123.27376619978901, speed: 0, heading: 0}]
}

export const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(failureAction, (state, action) => {
            state.error = action.payload
        })
        .addCase(getGPSAction, (state, action) => {
            state.gps = action.payload
        })
})
