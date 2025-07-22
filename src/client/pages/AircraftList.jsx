// import React, { useState } from 'react';
// import { AircraftData } from './AircraftData';

// const AircraftList = () => {
//   const [selectedCountry, setSelectedCountry] = useState('USA');

//   const handleChange = (e) => {
//     setSelectedCountry(e.target.value);
//   };

//   const aircraftList = AircraftData[selectedCountry].aircraft;

//   return (
//     <div className="p-4">
//       <select value={selectedCountry} onChange={handleChange}>
//         {Object.keys(AircraftData).map((country) => (
//           <option key={country} value={country}>
//             {AircraftData[country].name}
//           </option>
//         ))}
//       </select>

//       <ul className="mt-4 space-y-2">
//         {aircraftList.map((plane) => (
//           <li key={plane.id}>
//             ✈️ <strong>{plane.name}</strong> - {plane.type} ({plane.yearIntroduced})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AircraftList;
import React, { useEffect, useState } from 'react';
import {AirCraftList} from '../data/aircraft'; // Adjust the import path as necessary
const AircraftList = () => {
  const [aircraftData, setAircraftData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('USA');

  useEffect(() => {
    fetch('/api/aircraft')
      .then(res => res.json())
      .then(data => setAircraftData(data));
  }, []);

  if (!aircraftData[selectedCountry]) return <p>Loading...</p>;

  return (
    <div>
      <select onChange={(e) => setSelectedCountry(e.target.value)}>
        {Object.keys(aircraftData).map((country) => (
          <option key={country} value={country}>
            {aircraftData[country].name}
          </option>
        ))}
      </select>

      <ul>
        {aircraftData[selectedCountry].aircraft.map((aircraft) => (
          <li key={aircraft.id}>
            {aircraft.name} - {aircraft.type}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AircraftList;