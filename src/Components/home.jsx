import React from 'react';
import logo from '../logo.svg';
import '../App.scss';



function TwoSectionContent() {
  return (
    <>
      
      <div  className="home-header">
      <img src={logo} className="App-logo-2" alt="logo" />
          <h1>Create React App</h1>
      <img src={logo} className="App-logo-2" alt="logo" />
      </div>
        <div className="content">
       <h4><b>Create React App</b> provides a modern build setup for your React apps in no time. To get started, you’ll need to install Create React App globally.</h4> 
       </div>
       <div className="steps">Step 1</div>
       <div  className="content">
         <h4> Open your Terminal or console and run: npm install -g create-react-app</h4>
         <p>You can create a new React project with the command create-react-app, followed by the name of your project. For example: create-react-app my-app. Let's try it!</p>
         </div>
         <div className="steps odd">Step 2</div>
         <div className="content">
            <h4>In your terminal, cd into the directory where you want to keep this project, then run the command: <br/> create-react-app my-first-react-project</h4>
            <p>  After you have created your project you can use the command <b>npm start</b> to start the development server which auto-reloads the page any time you make edits.</p>

         </div>


          <h2 className="steps dark">Webpack and Babel</h2>
        <div className="content">
        Create React App uses <b>Webpack and Babel</b> under the hood, but it generates only the files you need to work on your React project. If you’ve built React apps before, you’re not going have access to configuration files for Webpack, Babel, ESLint, etc. That way, you focus on just building your app.

        </div>
        {/* <img src="https://media1.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=790b761121f3a3e901cb80a773e2450d81ad416debe95e56&rid=giphy.gif" className="js" alt="logo" /> */}
    
      <div>

        <h2 className="steps dark">Server rendering</h2>
        <p className="content">
Server rendering is one of the coolest features in React. It can be used with any of the back-end technologies.

 <b>Server Side Rendering (SSR)</b> in React helps you to create components in the server and render that as HTML in your browser. And when all the JavaScript modules are downloaded in the browser, React takes the stage. Simple! <br/><br/>
 </p>
<h2 className="steps dark">Redux</h2>
<div className="content">
<b>Redux </b> is a JavaScript library developed for maintaining application states. When you are building a complex application, it will add overhead to manage states across components. Redux helps you store all your states in a single source. And of course, React plays well with Redux :)

</div>
        
      </div>
   
    </>
  );
}

export default TwoSectionContent;
