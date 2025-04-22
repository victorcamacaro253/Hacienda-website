import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import 'leaflet-routing-machine';

// Extend Leaflet's namespace to include Routing
declare module 'leaflet' {
  namespace Routing {
    function control(options: any): any;
  }
}
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

// Extend Leaflet's Control type to include geocoder
declare module 'leaflet' {
  namespace Control {
    function geocoder(options?: any): any;
  }
}
import '../css/MapStyle.css'; // still needed for Leaflet controls

const MapWithShops = () => {
  const shopLocations: { id: number; name: string; position: L.LatLngTuple; imageUrl?: string }[] = [
      { id: 1, name: "Shop A", position: [51.505, -0.09] },
      { id: 2, name: "Shop B", position: [51.51, -0.1] },
      { id: 3, name: "Farmatodo", position: [10.169680018772281, -70.07715225219728], imageUrl: 'https://picsum.photos/seed/picsum/200/300' }
  ];

  const startPoint: L.LatLngTuple = [10.0634, -69.3122]; // Barquisimeto
  const endPoint: L.LatLngTuple = [10.4806, -66.9036]; // Caracas

  const MapWithSearch = () => {
    const map = useMap();

    useEffect(() => {
      const geocoder = (L.Control as any).Geocoder.nominatim();
      const geocoderControl = L.Control.geocoder({
        geocoder,
        position: 'topleft',
      }).addTo(map);

      return () => {
        map.removeControl(geocoderControl);
      };
    }, [map]); // Added map as dependency

    return null;
  };

  const MapEventsHandler = () => {
    const map = useMap();

    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        alert(`Clicked at: ${lat}, ${lng}`);
      },
    });

    useEffect(() => {
      if (!map) return;

      const routingControl = L.Routing.control({
        lineOptions: {
          styles: [{ color: '#6FA1EC', opacity: 0.7, weight: 5 }]
        },
        waypoints: [L.latLng(startPoint), L.latLng(endPoint)],
        routeWhileDragging: true,
        position: 'bottomright',
        collapsible: true,
        autoRoute: true,
        show: false,
      }).addTo(map);

      const ToggleButton = L.Control.extend({
        options: { position: 'topright' },
        onAdd: function () {
          const div = L.DomUtil.create('div', 'toggle-button');
          div.innerHTML = '<button>Toggle Route</button>';
          div.onclick = function () {
            routingControl.toggle();
          };
          return div;
        },
      });

      const toggleButton = new ToggleButton();
      map.addControl(toggleButton);

      return () => {
        map.removeControl(routingControl);
        map.removeControl(toggleButton);
      };
    }, [map, startPoint, endPoint]); // Added dependencies

    return null;
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-100 to-green-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white my-4">Mapa</h1>

      <div className="w-4/5 h-[80vh] rounded-xl overflow-hidden shadow-lg">
        <MapContainer center={startPoint} zoom={13} className="h-full w-full z-0">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {shopLocations.map(shop => (
            <Marker key={shop.id} position={shop.position}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold">{shop.name}</h3>
                  {shop.imageUrl && (
                    <img
                      src={shop.imageUrl}
                      alt={shop.name}
                      className="w-24 h-auto mt-2 mx-auto rounded-md"
                    />
                  )}
                </div>
              </Popup>
            </Marker>
          ))}

          <MapWithSearch />
          <MapEventsHandler />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapWithShops;