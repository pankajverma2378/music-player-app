import React, { Component } from 'react';
import './App.css';
import CountryForm from './Components/CountryForm';
import PopularSongs from './Components/PopularSongs';
import SongModal from './Components/SongModal';

const API_Key = "07a7ff8132195a3f6f1d53d85daff649";
class App extends Component {
  constructor() {
    super();
    this.object = null;
    this.country = 'india';
  }

  setObject = (object) => {
    this.object = object;
  } 
  show = (song) => {
    this.object = song;
    console.log(this.object);
    this.setState({modal: true});
  }
  hide = () => {
    this.setState({modal: false});
  }
  state = {
    tracks: [],
    modal: false
  }

  getMusic = async (e) => {
   
    if(this.firstRun === true) {
      this.country = 'india';
    } else {
      this.country = e.target.elements.selectCountry.value;
    }
    e.preventDefault();
    // console.log(country);
    
    const API_Call = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${this.country}&api_key=${API_Key}&format=json`);
    
    const data = await API_Call.json();
    console.log(this.state.tracks);
    this.setState({ tracks: data.tracks.track });  
    
  }
  render(){
  return (
    <div className="App">
      {
        (this.state.modal === true) ? <SongModal hide={this.hide} object={this.object}/> : null
      }
      
      <header className="App-header">
      <h1 className = "App-title">TOP TRACKS IN {this.country.toUpperCase()}</h1>
     </header>
     <CountryForm getMusic={this.getMusic}/>
      
     <PopularSongs tracks={this.state.tracks} setObject={this.setObject} show={this.show}/>
    </div>
  );
  }
  
  async componentDidMount() {
    var country = 'india';
    console.log(country);
    
    const API_Call = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${API_Key}&format=json`);
    
    const data = await API_Call.json();
    this.object = data;
    this.setState({ tracks: data.tracks.track, modal: false});  
    // console.log(this.state.tracks);
  }
}

export default App;
