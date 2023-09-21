/* Core */
import {React, useRef, useEffect} from "react";
import ReactDom from 'react-dom';

/* Instruments */
import {
    useSelector,
} from '@/lib/redux'

/* Components */
import {GoogleMap, useLoadScript, Marker, Polyline, useGoogleMap} from '@react-google-maps/api';

interface MapControlProps {
    position: keyof typeof google.maps.ControlPosition;
  }

const MapControl = (props: React.PropsWithChildren<MapControlProps>) => {
    const map = useGoogleMap();
    const ref = useRef();
    useEffect(() => {
        if (map && ref) {
        map.controls[window.google.maps.ControlPosition[props.position]].push(
            ref.current
        );
        }
    }, [map, ref]);
    return <div ref={ref}>{props.children}</div>;
};

type GoogleMapsProps = {}

const GoogleMaps: React.FunctionComponent<GoogleMapsProps> = ({}) => {
    const defaultMapOptions = {
        fullscreenControl: false,
        streetViewControl: false,
        keyboardShortcuts: false
    };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })
    let gps = useSelector((state) => state.gps)
    const marker: any = gps?.at(-1);

    if (!isLoaded) return (
        <></>
    )

    return (
        <>
            <GoogleMap
                options={defaultMapOptions}
                zoom={13}
                center={{lat: marker["lat"], lng: marker["lng"]}}
                mapContainerStyle={
                    {
                        position: "absolute",
                        height: "100%",
                        width: "100%"
                    }
                }
                >
                <MapControl position="LEFT_BOTTOM">
                    {/* INSERT COMPONENT HERE hi asdf */}
                </MapControl>
                <Polyline path={gps}/>
                <Marker position={marker}></Marker>
            </GoogleMap>
        </>
    );
};

export default GoogleMaps;
