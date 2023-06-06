import React, { useState } from 'react';
import Header from './components/Header';
import LocationList from './components/LocationList';
import AddLocationForm from './components/AddLocationForm';
import "./App.css";

const App = () => {
  const [locations, setLocations] = useState([]);

  const addLocation = (newLocation) => {
    setLocations([...locations, newLocation]);
  };

  const updateNoiseLevel = (locationIndex, noiseLevel) => {
    setLocations((prevLocations) => {
      const updatedLocations = [...prevLocations];
      updatedLocations[locationIndex].noiseLevel = noiseLevel;
      return updatedLocations;
    });
  };

  const deleteLocation = (locationIndex) => {
    setLocations((prevLocations) => {
      const updatedLocations = [...prevLocations];
      updatedLocations.splice(locationIndex, 1);
      return updatedLocations;
    });
  };

  return (
    <div>
      <Header />
      <LocationList
        locations={locations}
        updateNoiseLevel={updateNoiseLevel}
        deleteLocation={deleteLocation}
      />
      <AddLocationForm addLocation={addLocation} />
    </div>
  );
};

export default App;
