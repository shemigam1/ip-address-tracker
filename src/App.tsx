// import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import { Icon } from 'leaflet'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="map-container">
        <MapContainer className="min-h-screen min-w-screen" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default App
