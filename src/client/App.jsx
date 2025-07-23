
// import Layout from "./components/navbar/Layout";

// import AircraftList from "./pages/AircraftList";
// function App() {
//     return (
//         <div className="App">
//             <Layout />
//             <AircraftList />
//             {/* Other components can be added here */}
//             {/* Example content */}

                
//         </div>
//     );
// } 

// export default App;

import React from "react";

import Layout from "./components/navbar/Layout";
import AircraftList from "./pages/AircraftList";
const App = () => {


  return (
    <div className="app">
        <Layout />
       <AircraftList />
    </div>
  );
};

export default App;
