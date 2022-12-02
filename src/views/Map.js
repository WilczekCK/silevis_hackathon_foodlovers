import L from 'leaflet';
import { MapContainer, TileLayer, useMap, Marker, Popup, Icon } from 'react-leaflet'
import React from "react";
import icon from '../leaflet/images/marker-icon.png';
import iconShadow from '../leaflet/images/marker-shadow.png';

// Just leaflet stuff
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

class Map extends React.Component{
    constructor(){
        super();

        this.listOfEvents = [
            {id:1, name:'Liga młodziaków', pos:[50.86942, 20.61824]},
            {id:2, name:'Liga narodów', pos:[50.86884, 20.63111]},
            {id:3, name:'Zwykla kopanina', pos:[50.87371, 20.63187]},
            {id:4, name:'Spontan akcja', pos:[50.86979, 20.64189]}
        ]
    }


    render(){
        return (
            <>
                <MapContainer center={[50.8708,20.6478]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {this.listOfEvents.map((event, index) => 
                    <Marker key={index} position={event.pos}>
                        <Popup>
                            <h3>{event.name}</h3>
                            <a href="#"> PRZEJDŹ DO WYDARZENIA </a>
                        </Popup>
                    </Marker>
                )}

                </MapContainer>
            </>
        )
    }
}

export default Map;