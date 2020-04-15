import React from 'react';
import '../App.css';


function ThreeColumnGrid() {
  return (
    <>
 
    <div className="github-links">     
   
      <h2>Github Resources</h2>
      <ul className="cards">
        <li><a rel="noopener noreferrer"  target="_blank" href="https://github.com/reactjs/reactjs.org">Reactjs</a></li>
        <li><a rel="noopener noreferrer"  target="_blank" href="https://github.com/taniarascia/react-tutorial">React tutorial</a></li>
        <li><a rel="noopener noreferrer"  target="_blank" href="https://github.com/facebook/react-native">React Native</a></li>
        <li><a rel="noopener noreferrer"  target="_blank" href="https://github.com/react-component">React Components</a></li>
        <li><a rel="noopener noreferrer"  target="_blank" href="https://github.com/ReactTraining">React Training</a></li>
        <li><a  rel="noopener noreferrer" target="_blank" href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom">React Router Dom</a></li>
        
      </ul>
      </div>
    
    </>
  );
}

export default ThreeColumnGrid;
