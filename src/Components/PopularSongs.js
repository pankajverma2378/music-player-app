import React from 'react';
import './PopularSongs.css';

const PopularSongs = props => (
<div className="container">
  <div className="row">
        { props.tracks.map((song) => {
          console.log(song);
          return(
            <div key={song.url} className="songTab">
            <img src={song.image[2]['#text']} alt={song.name}/>
            <h4> {song.name} </h4>
            <span> {song.artist.name} </span>
            </div>
          );
        }) }
  </div>
</div>
);

export default PopularSongs;