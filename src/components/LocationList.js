import React from 'react';
import Location from '../Location';

const LocationList = ({ locations, updateNoiseLevel, deleteLocation }) => {
  return (
    <div>
      <h2>Locations</h2>
      {locations.map((location, index) => (
        <Location
          key={index}
          index={index}
          location={location}
          updateNoiseLevel={updateNoiseLevel}
          deleteLocation={deleteLocation}
        />
      ))}
    </div>
  );
};

export default LocationList;
