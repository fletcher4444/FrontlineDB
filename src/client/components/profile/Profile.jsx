import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, theme }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav>
      <ul>
        {isAuthenticated ? (
          <li>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login" onClick={loginWithRedirect}>Login</Link>
          </li>
        )}
      </ul>

      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌞" : "🌜"}
      </button>
    </nav>
  );
};

export default Navbar;
