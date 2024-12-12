import React from 'react';
import heroImage from './assets/hero.jpg';  

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <h1 className="hero-title">Drive Your Dream Car</h1>
      <p className="hero-subtitle">The ultimate collection of luxury cars just for you</p>
      <a href="#car-grid" className="hero-button">Explore Now</a>
    </section>
  );
};

export default Hero;
