import React, {Component} from 'react';
import './PopularSongs.css';

class PopularSongs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs : this.props.tracks
    }
  }

  render() {
    
    return (
      <div className="container">
        <div className="row">
              { this.props.tracks.map((song) => {
                  // console.log(song);
                  
                  return (
                    <div key={song.url} className="songTab" onClick={this.hello} id={song.mbid}>
                    <img src={song.image['2']['#text']} alt={song.name} id={song.mbid} />
                    <h4> {song.name} </h4>
                    <span> {song.artist.name} </span>
                    </div>
                  );
              }) }
        </div>
      </div>
    );
  }

  hello = (e) => {
    // this.props.show("hello");
    // console.log(e.target);
    console.log(this.props.tracks);
    this.props.show(this.props.tracks.filter((d) => {
      return e.target.id === d.mbid;
    }));
  }
};

export default PopularSongs;