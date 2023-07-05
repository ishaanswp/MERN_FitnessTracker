import React from 'react';
import './styles/Home.css'; // Import the CSS file

function Home() {
  return (
    <div className='home-container'>
      <section className="home-banner">
        <h1>Welcome to Fitness Tracker</h1>
        <p>Track your workouts, set goals, and achieve your fitness targets.</p>
      </section>
      <div className="home-content">
        <section className="home-login">
          <h2>Login</h2>
          <form action="dashboard.html">
            <div className="form-row">
              <label htmlFor="login-email">Email</label>
              <input type="email" id="login-email" name="login-email" placeholder="Enter your email" required />
            </div>
            <div className="form-row">
              <label htmlFor="login-password">Password</label>
              <input type="password" id="login-password" name="login-password" placeholder="Enter your password" required />
              <input type="checkbox" id="showLoginPassword" />
              <label htmlFor="showLoginPassword">Show Password</label>
            </div>
            <div className="form-row">
              <button type="submit">Login</button>
            </div>
          </form>
        </section>
        <section className="home-registration">
          <h2>Create an Account</h2>
          <form action="dashboard.html">
            <div className="form-row">
              <label htmlFor="registration-name">Name</label>
              <input type="text" id="registration-name" name="registration-name" placeholder="Enter your name" required />
            </div>
            <div className="form-row">
              <label htmlFor="registration-email">Email</label>
              <input type="email" id="registration-email" name="registration-email" placeholder="Enter your email" required />
            </div>
            <div className="form-row">
              <label htmlFor="registration-password">Password</label>
              <input type="password" id="registration-password" name="registration-password" placeholder="Enter your password" required />
              <input type="checkbox" id="showRegistrationPassword" />
              <label htmlFor="showRegistrationPassword">Show Password</label>
            </div>
            <div className="form-row">
              <button type="submit">Create Account</button>
            </div>
          </form>
        </section>
      </div>
      <footer className="home-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default Home;
