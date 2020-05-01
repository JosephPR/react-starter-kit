import React from 'react';
import '../App.scss';



function Header() {
  return (
    <>
 
    <div className="App">
      <header className="App-header">
        {/* <img src="https://media1.giphy.com/media/LpiVeIRgrqVsZJpM5H/giphy.gif?cid=790b76114bfe2f8248992275c69ebe32306f265f484a4a81&rid=giphy.gif" className="App-logo" alt="logo" /> */}
       
         <ul>
           <li><a rel="noopener noreferrer"  target="_blank" href="https://reacttraining.com/react-router/">React Router</a></li>
           <li><a rel="noopener noreferrer"  target="_blank" href="https://material-ui.com/">Material Design</a></li>
           <li><a rel="noopener noreferrer"  target="_blank" href="https://github.com/axios/axios">Axios</a></li>
           <li><a rel="noopener noreferrer"  target="_blank" href="https://tailwindcss.com/">Tailwind</a></li>
           <li><a rel="noopener noreferrer"  target="_blank" href="https://www.npmjs.com/package/react-burger-menu">React Burger Menu</a></li>
           <li><a rel="noopener noreferrer"  target="_blank" href="https://github.com/JosephPR/react-starter-kit"> Repo link</a></li>
         </ul>
       
      </header>
    </div>  
    </>
  );
}

export default Header;
