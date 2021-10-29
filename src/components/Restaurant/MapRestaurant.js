import React, {useEffect, useState} from 'react';
import {GoogleMap, InfoWindow, Marker, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
    width: '50%',
    height: 'auto'
};

const MapRestaurant = ({ville, infoMarkerList}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDz7Ysyc04sTRwDTupIBpZzn3KXwqOa3oo"
    })

    const [selected, setSelected] = useState(null);

    const markers = infoMarkerList && infoMarkerList.map((res,index) => (
        <Marker
            key={index}
            position={res.coord}
            onClick={async()=>{
                await setSelected(res);
            }}
        />
    ))

    return isLoaded ? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={ville}
        zoom={15}
        className="w-6/12"
        >
            {markers}

            {selected && (
                <InfoWindow
                    position={selected.coord}
                    onCloseClick={()=>{
                        setSelected(null);
                    }}
                >
                    <div>
                        <h1>{selected.restNom}</h1>
                        <h3>{selected.adresse.adrNumero} {selected.adresse.adrRue} {selected.adresse.adrVille}</h3>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    ): <></>;
};

export default MapRestaurant;