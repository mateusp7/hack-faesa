"use client"

import {
  Circle,
  FeatureGroup,
  LayerGroup,
  MapContainer,
  Popup,
  Rectangle,
  TileLayer,
} from "react-leaflet"

const LeafLetMap = ({ className }: { className?: string }) => {
  const fillBlueOptions = { fillColor: "blue" }
  const fillRedOptions = { fillColor: "red" }
  const greenOptions = { color: "green", fillColor: "green" }
  const purpleOptions = { color: "purple" }

  return (
    <MapContainer
      center={[-20.3155, -40.3128]}
      zoom={13}
      className={`${className} w-full z-20`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <Circle
          center={[-20.3155, -40.3128]}
          pathOptions={fillBlueOptions}
          radius={200}
        />
        <Circle
          center={[-20.3155, -40.3128]}
          pathOptions={fillRedOptions}
          radius={100}
          stroke={false}
        />
        <LayerGroup>
          <Circle
            center={[51.51, -0.08]}
            pathOptions={greenOptions}
            radius={100}
          />
        </LayerGroup>
      </LayerGroup>
      <Circle
        center={[-20.3155, -20.257]}
        pathOptions={fillBlueOptions}
        radius={200}
      />
      <Circle
        center={[-20.3155, -20.257]}
        pathOptions={fillRedOptions}
        radius={100}
        stroke={false}
      />
      <LayerGroup>
        <Circle
          center={[51.51, -0.08]}
          pathOptions={greenOptions}
          radius={100}
        />
      </LayerGroup>
      <LayerGroup></LayerGroup>
      <FeatureGroup pathOptions={purpleOptions}>
        <Popup>Popup in FeatureGroup</Popup>
        <Circle center={[51.51, -0.06]} radius={200} />
        <Rectangle
          bounds={[
            [51.49, -0.08],
            [51.5, -0.06],
          ]}
        />
      </FeatureGroup>
    </MapContainer>
  )
}

export default LeafLetMap
