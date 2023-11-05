import React from 'react';
import Curriculum from '../Comps/Curriculum';
import Navbar from '../Comps/Navbar';
import Cards from '../Comps/Cards';
import './Home.css'; // Import your CSS file
import Studentsnav from '../Comps/Studentsnav'
import Studentscards from '../Comps/Studentscard'

export default function Home() {
  return (
    <div className="home-bg"> 
      <Studentsnav />
      <Studentscards />
    </div>
  );
}
