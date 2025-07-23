
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
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/auth/LoginButton";
import LogoutButton from "./components/auth/LogoutButton";
import Profile from "./components/profile/Profile";
import Layout from "./components/navbar/Layout";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="app">
        <Layout />
      <h1>Welcome to FrontlineDB</h1>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      <Profile />
    </div>
  );
};

export default App;
