import { FC } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'dotenv'
import "../style.css";
import { Icon } from 'leaflet';

interface mapProps {
    lat: any,
    lng: any
}



const Map: FC<mapProps> = ({ lat, lng }) => {

    // const markerPosition = ipData ? [ipData.location.lat, ipData.location.lng] : [51.505, -0.09];
    const icon = new Icon({
        iconUrl: '../../images/icon-location.svg',
        iconSize: [35, 35],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76]
    })


    return (
        <div className=' h-3/5'>
            <MapContainer className='w-screen h-full' center={[lat, lng]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[lat, lng]} icon={icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map