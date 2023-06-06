import React from 'react';

const NoiseLevel = ({ noiseLevel, onNoiseLevelChange }) => {
  return (
    <div>
      <p>Noise Level: {noiseLevel}</p>
      <input
        type="range"
        min="0"
        max="100"
        value={noiseLevel}
        onChange={onNoiseLevelChange}
      />
    </div>
  );
};

export default NoiseLevel;
