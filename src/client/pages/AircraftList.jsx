import React, { useState } from 'react';
import { AircraftData } from '../data/aircraft'; // Adjust path as needed
import "../styles/airplane.css";


// Adjust path as needed
const AircraftList = () => {
  const [selectedCountry, setSelectedCountry] = useState('USA');

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const aircraftList = AircraftData[selectedCountry]?.aircraft ?? [];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">WWII Aircraft by Country</h1>

      <label htmlFor="country" className="block mb-2 font-medium">Select Country:</label>
      <select
        id="country"
        value={selectedCountry}
        onChange={handleChange}
        className="border p-2 rounded w-full mb-6"
      >
        {Object.keys(AircraftData).map((countryKey) => (
          <option key={countryKey} value={countryKey}>
            {AircraftData[countryKey].name}
          </option>
        ))}
      </select>

      <h2 className="text-xl font-semibold mb-3">
        Aircraft from {AircraftData[selectedCountry].name}
      </h2>

      <ul className="space-y-2">
        {aircraftList.map((aircraft) => (
          <li key={aircraft.id} className="border rounded p-3 bg-gray-100 dark:bg-gray-800">
            ✈️ <strong>{aircraft.name}</strong>  
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Type: {aircraft.type} | Manufacturer: {aircraft.manufacturer} | Year: {aircraft.yearIntroduced}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AircraftList;
