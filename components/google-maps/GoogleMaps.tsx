/* Core */
import React from "react";

/* Instruments */
import {
    useSelector,
} from '@/lib/redux'

/* Components */
import {GoogleMap, useLoadScript, Marker, Polyline} from '@react-google-maps/api';

/* Types */


const GoogleMaps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })
    const boatCoordinates = useSelector((state) => state.boatCoordinates)
    const marker: any = boatCoordinates?.at(-1);

    if (!isLoaded) return (
        <></>
    )

    return (
    <GoogleMap zoom={13} center={{lat: marker["lat"], lng: marker["lng"]}} mapContainerStyle={{position: "absolute", width: "100%", height: "100%"}}>
        <Polyline path={boatCoordinates}/>
        <Marker position={marker}></Marker>
    </GoogleMap>
    );
};

export default GoogleMaps;
