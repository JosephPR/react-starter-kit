import React from 'react';
import '../App.scss';
import ReactPlayer from 'react-player'



function Videos() {
  return (
    <>
      <div className="image">
        <h1>This is React</h1>
        <ReactPlayer className="player" url='https://www.youtube.com/watch?v=QnZHO7QvjaM&list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh'  width='70%' height='70%'/>
      </div>
      <div className="video-container">     
   
      <h2>Tutorials</h2>
        <ul className="videos">
          <li><ReactPlayer className="player" url='https://www.youtube.com/watch?v=0KlRgFEEz0g'   width='100%' height='100%' /></li>
          <li><ReactPlayer className="player" url='https://www.youtube.com/watch?v=hQAHSlTtcmY'    width='100%' height='100%'/></li>
          <li><ReactPlayer className="player" url='https://www.youtube.com/watch?v=dGcsHMXbSOA'   width='100%' height='100%' /></li>
          <li><ReactPlayer className="player" url='https://www.youtube.com/watch?v=khJlrj3Y6Ls'    width='100%' height='100%'/></li>
        </ul>
      </div>
    
    </>
  );
}

export default Videos;
