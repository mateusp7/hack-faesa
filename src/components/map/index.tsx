"use client"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const LeafLetMap = () => {
  return (
    <MapContainer
      center={[-20.3155, -40.3128]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
      className="z-10"
    >
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
  )
}

export default LeafLetMap
