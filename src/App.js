import React from 'react';
import Profile from './components/ProfileSection';
import Collaborate from './components/CollaborateSection';
import Products from './components/ProductSection';
import Testimonials from './components/TestimonialsSection';
import About from './components/AboutSection';

function App() {
  return (
    <div className="container bg-gray-100 p-10 space-y-8">
      <Profile />
      <About />
      <Collaborate />
      <Products />
      <Testimonials />
    </div>
  );
}

export default App;
