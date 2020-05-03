import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ThreeColumnGrid from './Components/three-column-grid';
import TwoSectionContent from './Components/two-section-content';
import Videos from './Components/videos';
import Header from './Components/header'
import Footer from './Components/footer';
import Visitor from './Components/Visitor/visitor';
import Hooks from './Components/Movies/add-user';

function App() {
  return (
    <>
         <Router>
         <div className="links-container">
           <nav >
             <ul className="links">
               <li>
                 <Link className="link" to="/">Getting Started</Link>

               </li>
               <li>
                 <Link className="link" to="/visitors">Check In</Link>

               </li>
               <li>
                 <Link className="link"  to="/two-section-content">Style</Link>
               </li>
               <li>
                 <Link className="link" to="/videos">Tutorials</Link>
               </li>
               <li>
                 <Link className="link" to="/three-column-grid">Github Links</Link>
               </li>
               <li>
                 <Link className="link" to="/add-user">Hooks</Link>
               </li>
             
             </ul>
           </nav>


         </div>
           <Route exact path="/" render={() => <h1>Hello</h1>} component={TwoSectionContent} />
           <Route path="/visitors" component={Visitor} />
           <Route path="/two-section-content" component={Header} />
           <Route path="/videos" component={Videos} />
           <Route path="/three-column-grid" component={ThreeColumnGrid} />
           <Route path="/add-user" component={Hooks} />
          

       </Router>
       <Footer />   
      {/* <TwoSectionContent />
      <Header />
      <Videos />
      <ThreeColumnGrid />
      <Footer />     */}
    </>
  );
}

export default App;
