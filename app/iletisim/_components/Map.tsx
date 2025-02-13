"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

// Leaflet marker icon fix for Next.js
const markerIcon = new Icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapProps {
  companyInfo: {
    address: string;
    location: {
      lat: number;
      lng: number;
    };
  };
}

export default function Map({ companyInfo }: MapProps) {
  return (
    <MapContainer
      center={[companyInfo.location.lat, companyInfo.location.lng]}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={[companyInfo.location.lat, companyInfo.location.lng]}
        icon={markerIcon}
      >
        <Popup className="text-sm font-sans">
          <strong className="block mb-2 text-gray-900">Tekstil Demo</strong>
          <span className="text-gray-600">{companyInfo.address}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
