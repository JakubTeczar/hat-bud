'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const customIcon = L.icon({
  iconUrl: './imgs/icon.png', // Upewnij się, że to .src jeśli importujesz plik SVG w Next.js
  iconSize: [40, 40],    // Rozmiar ikonki
  iconAnchor: [20, 40],  // Punkt zaczepienia (środek dołu)
  popupAnchor: [0, -40], // Pozycja popupu względem ikony
});

export default function MapSection() {
  return (
    <MapContainer
       center={[50.08805361144294, 22.051603416236603]} 
      zoom={16}
      zoomControl={true}
      style={{ height: '100%', minHeight:'60vh', margin: "0 auto", width: '95%', borderRadius: '16px', overflow: 'hidden' }}
    >
      <TileLayer
        attribution='© <a href="https://www.maptiler.com/">MapTiler</a> | © OpenStreetMap contributors'
        url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=A0GQtwbYB0cPn2fb0LgU"
      />

      <Marker
        position={[50.08805361144294, 22.051603416236603]}
        icon={customIcon}
      >
        <Popup>
          Teren Inwestycji <br /> Trzebownisko
        </Popup>
      </Marker>
    </MapContainer>
  );
}
