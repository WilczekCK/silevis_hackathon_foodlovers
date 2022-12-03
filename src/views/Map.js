import L from 'leaflet';
import { MapContainer, TileLayer, useMap, Marker, Popup, Icon } from 'react-leaflet'
import React from "react";
import icon from '../assets/leaflet/images/marker-icon.png';
import iconShadow from '../assets/leaflet/images/marker-shadow.png';
import '../assets/leaflet/leaflet.css';
import {Link, Outlet, Navigate} from 'react-router-dom'

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
            {id:1, name:'Zytnia Hala', pos:[50.86942, 20.61824]},
            {id:2, name:'KSM Szkola', pos:[50.86884, 20.63111]},
            {id:3, name:'Zagorska Pole', pos:[50.87371, 20.63187]},
            {id:4, name:'Srodmiescie Boisko', pos:[50.86979, 20.64189]}
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
                            <Link reloadDocument to={`/place/${event.id}`}> PRZEJDŹ DO MIEJSCA </Link>
                        </Popup>
                    </Marker>
                )}

                </MapContainer>
            </>
        )
    }
}

export default Map;