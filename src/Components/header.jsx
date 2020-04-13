import React from 'react';
import '../App.css';



function Header() {
  return (
    <>
 
    <div className="App">
      <header className="App-header">
        <img src="https://media1.giphy.com/media/LpiVeIRgrqVsZJpM5H/giphy.gif?cid=790b76114bfe2f8248992275c69ebe32306f265f484a4a81&rid=giphy.gif" className="App-logo" alt="logo" />
        <p>
         <ul>
           <li><a href="https://reacttraining.com/react-router/">React Router</a></li>
           <li><a href="https://material-ui.com/">Material Design</a></li>
           <li><a href="https://github.com/axios/axios">Axios</a></li>
           <li><a href="https://tailwindcss.com/">Tailwind</a></li>
           <li><a href="https://www.npmjs.com/package/react-burger-menu">React Burger Menu</a></li>
           <li><a href="https://github.com/JosephPR/react-starter-kit"> Repo link</a></li>
         </ul>
        </p>
     
      </header>
    </div>  
    </>
  );
}

export default Header;