import React from 'react';
import NavbarComponent from './NavbarComponent';
import AnimatgedTitle from '../Title';
import {
  FiHome,
  FiInfo,
  FiMail,
  FiUserPlus,
  FiUser,
  FiSettings
} from 'react-icons/fi';
import redLogo from '../../assets/images/red.JPG'; // Adjust the path as necessary

const navLinks = [
  { path: '/', label: 'Home', icon: FiHome },
  { path: '/about', label: 'About', icon: FiInfo },
  { path: '/contact', label: 'Contact', icon: FiMail },
  { path: '/register', label: 'Register', icon: FiUserPlus },
];

const profileLinks = [
  { path: '/profile', label: 'My Profile', icon: FiUser },
  { path: '/settings', label: 'Settings', icon: FiSettings },
];

const Layout = () => {
  const isLoggedIn = true;

  const handleLogout = () => {
    console.log("Logged out!");
// login.js
const handleLogin = async () => {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem('token', data.token);
    window.location.href = '/'; // Redirect to home or dashboard
  }
};

  };

  return (
    <>
    {/* <NavbarComponent
  logo={redLogo}
  title="FrontlineDb"
  theme="dark"
  links={[
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ]}
  profileLinks={[
    { path: "/profile", label: "Profile" },
    { path: "/settings", label: "Settings" }
  ]}
/> */}
<NavbarComponent
  logo={redLogo}
  title="My Site"
  links={[{ path: "/", label: "Home" }, { path: "/about", label: "About" }]}
  profileLinks={[{ path: "/profile", label: "Profile" }]}
/>

      <main>
        <h1 style={{ padding: '2rem' }}>
          <AnimatgedTitle text="Welcome to FrontlineDb" />

        </h1>
      </main>
    </>
  );
};

export default Layout;
