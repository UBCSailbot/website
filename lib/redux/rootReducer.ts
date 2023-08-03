/* Instruments */
import { createReducer } from '@reduxjs/toolkit'
import { failureAction, getBoatCoordinatesAction } from './actions'

const initialState = {
    error: "",
    boatCoordinates: [{lat: 49.37614179786771, lng: -123.27376619978901}]
}

export const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(failureAction, (state, action) => {
            state.error = action.payload
        })
        .addCase(getBoatCoordinatesAction, (state, action) => {
            state.boatCoordinates = action.payload
        })
})
