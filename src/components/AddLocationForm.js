import React, { useState } from 'react';

const AddLocationForm = ({ addLocation }) => {
  const [locationName, setLocationName] = useState('');
  const [noiseLevel, setNoiseLevel] = useState(0);

  const handleLocationNameChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleNoiseLevelChange = (event) => {
    setNoiseLevel(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (locationName.trim() !== '') {
      const newLocation = {
        name: locationName,
        noiseLevel: noiseLevel
      };
      addLocation(newLocation);
      setLocationName('');
      setNoiseLevel(0);
    }
  };

  return (
    <div>
      <h2>Add Location</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Location Name:
          <input
            type="text"
            value={locationName}
            onChange={handleLocationNameChange}
          />
        </label>
        <label>
          Noise Level:
          <input
            type="range"
            min="0"
            max="100"
            value={noiseLevel}
            onChange={handleNoiseLevelChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddLocationForm;
