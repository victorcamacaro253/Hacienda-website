// components/LocationMap.tsx
import React from 'react';

interface LocationMapProps {
  location: string;
  title?: string;
  description?: string;
  height?: string;
  className?: string;
  instructions?: string;
  width?: string;
}

const LocationMap: React.FC<LocationMapProps> = ({
  location,
  title = "Ubicación",
  description = "Visítenos en nuestra hacienda",
  height = "h-80",
  className = "",
  instructions,
  width = "max-w-5xl" // Default reasonable max width
}) => {
  const encodedLocation = encodeURIComponent(location);
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.982734575426!2d-84.2044859857201!3d9.93598087652042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s${encodedLocation}!2s!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus`;

  return (
    <div className={`bg-white/90 rounded-xl shadow-md overflow-hidden border border-gray-200 mb-20 mx-auto ${width} ${className}`}>
      <div className="px-4 pt-4">
        {title && <h2 className="text-2xl font-bold text-gray-800">{title}</h2>}
        {description && <p className="text-gray-600 mt-1">{description}</p>}
      </div>
      
      <div className={`w-full ${height} mt-2`}>
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          title={`Mapa de ubicación: ${location}`}
        />
      </div>
      
      {instructions && (
        <div className="px-4 pb-4">
          <h3 className="font-bold text-gray-800 mt-3">Instrucciones para llegar</h3>
          <p className="text-gray-600 text-sm mt-1">{instructions}</p>
        </div>
      )}
    </div>
  );
};

export default LocationMap;