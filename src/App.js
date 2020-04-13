import React from 'react';
import './App.css';
import ThreeColumnGrid from './Components/three-column-grid';
import TwoSectionContent from './Components/two-section-content';
import Videos from './Components/videos';
import Header from './Components/header'
import Footer from './Components/footer';

function App() {
  return (
    <>
      <Header />
      <Videos />
      <ThreeColumnGrid />
      <TwoSectionContent />
      <Footer />    
    </>
  );
}

export default App;
