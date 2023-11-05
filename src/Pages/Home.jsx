import React from 'react';
import Curriculum from '../Comps/Curriculum';
import Navbar from '../Comps/Navbar';
import Cards from '../Comps/Cards';
import './Home.css'; // Import your CSS file

export default function Home() {
  return (
    <div className="home-bg"> {/* Apply the background style to the root element */}
      <Navbar />
      <Cards />
    </div>
  );
}
