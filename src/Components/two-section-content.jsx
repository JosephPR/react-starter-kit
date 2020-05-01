import React from 'react';
import logo from '../logo.svg';
import '../App.scss';



function TwoSectionContent() {
  return (
    <>
      <div  className="pastels">
      <img src={logo} className="App-logo-2" alt="logo" />

        <p className="pastels-content">
          
       <b> Create React App</b> provides a modern build setup for your React apps in no time. To get started, you’ll need to install Create React App globally. Open your Terminal or console and run: npm install -g create-react-app

        You create a new React project with the command create-react-app, followed by the name of your project. For example: create-react-app my-app.

        Running the command installs the dependencies needed to build your project, and it generates the initial project structure. Inside your project directory, you can run several commands (you may also use yarn):

        npm start starts the development server and auto-reloads the page any time you make edits
        npm run build bundles the app into static files for production
        npm test starts the test runner and lets you test your app with Jest as you build it
        npm run eject takes your app out of the create-react-app setup, which lets you customize your project configuration
        </p>
      </div>
    
      <div  className="pastels-2">

        <p className="pastels-content-2">
        Create React App uses <b>Webpack and Babel</b> under the hood, but it generates only the files you need to work on your React project. If you’ve built React apps before, you’re not going have access to configuration files for Webpack, Babel, ESLint, etc. That way, you focus on just building your app.

        When you create a project with Create React App, it installs the latest version of React and React-DOM, as well as the latest version of react-scripts, a development dependency that manages all other dev dependencies that start, test and build your app.

        Default <b>Progressive Web Apps</b> In production, your React apps can be faster and more reliable than traditional web apps, and provide engaging mobile experiences.

        Create React App sets up a fully functional, offline-first Progressive Web App by default. Progressive Web Apps (PWAs) are web applications that use a collection of modern web technologies to provide native app-like experiences on all types of devices. They take advantage of the latest browser features to make your apps more performant, reliable and safe, even send push notifications and work when there’s no internet connection available.
        </p>
        {/* <img src="https://media1.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=790b761121f3a3e901cb80a773e2450d81ad416debe95e56&rid=giphy.gif" className="js" alt="logo" /> */}

      </div>
    
      <div  className="pastels-3">

        <p className="pastels-content-3">
        <h2>Server rendering</h2>
Server rendering is one of the coolest features in React. It can be used with any of the back-end technologies.

 <b>Server Side Rendering (SSR)</b> in React helps you to create components in the server and render that as HTML in your browser. And when all the JavaScript modules are downloaded in the browser, React takes the stage. Simple! <br/><br/>

<hr></hr>
<h2>Redux</h2>
<b>Redux </b> is a JavaScript library developed for maintaining application states. When you are building a complex application, it will add overhead to manage states across components. Redux helps you store all your states in a single source. And of course, React plays well with Redux :)

        </p>
      </div>
   
    </>
  );
}

export default TwoSectionContent;
