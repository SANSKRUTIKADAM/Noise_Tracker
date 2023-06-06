import React from 'react';
import NoiseLevel from './NoiseLevel';

const Location = ({ index, location, updateNoiseLevel, deleteLocation }) => {
  const handleNoiseLevelChange = (event) => {
    updateNoiseLevel(index, event.target.value);
  };

  const handleDeleteClick = () => {
    deleteLocation(index);
  };

  return (
    <div>
      <h3>{location.name}</h3>
      <NoiseLevel
        noiseLevel={location.noiseLevel}
        onNoiseLevelChange={handleNoiseLevelChange}
      />
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Location;
