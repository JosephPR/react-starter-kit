import React, { useState,  useEffect } from 'react';
// import { Card, Image } from 'semantic-ui-react';
import '../../App.scss'

export default function Playing() {
    const [playing, setPlaying] = useState("");
   
  useEffect(() => {
  fetch(`https://api.theMoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
   .then(response => response.json())
   .then( response => setPlaying({
      nowPlaying: response.results
    }))
  })

  const inTheaters =  () => {
    return playing.nowPlaying.map(nowPlaying => {
      return (
      
        <div className='card' key={nowPlaying.id}>
          <img className='image' alt='cover' src={`http://image.tmdb.org/t/p/w185//${nowPlaying.poster_path}`} wrapped ui={false} />
          <div>

          <h3>{nowPlaying.title}</h3>
        
          <h5 className="playing-info">
            {nowPlaying.overview}
          </h5>
        
      {/* <h5 className='release-date'><h4>Release Date</h4>
      {nowPlaying.release_date}
      </h5> */}
          </div>
        </div>
        
      )
    })
  };

    return (
      <>
      <h1 className="title">Movies that are playing in the theaters now!</h1>
      {playing.nowPlaying
        ?  <div className='nowPlaying'>{inTheaters()}</div>
        : <h1> NOt LOaDiNg!1</h1>
      }
      </>
    )
  }

  