import React from 'react';
import '../styles/Home.css'; // Create this file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        
        <p>Your one-stop solution for all your needs.</p>
      </header>
      <main className="home-content">
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Feature 1: Description of feature 1</li>
            <li>Feature 2: Description of feature 2</li>
            <li>Feature 3: Description of feature 3</li>
          </ul>
        </section>
        <section className="cta">
          <h2>Get Started</h2>
          <p>Join us today and experience the difference!</p>
          <button className="cta-button">Sign Up</button>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} FrontlineDb. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;