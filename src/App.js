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
  }

  setObject = (object) => {
    this.object = object;
  }

  state = {
    tracks: []
  }

  getMusic = async (e) => {
    var country;
    if(this.firstRun === true) {
      country = 'india';
    } else {
      country = e.target.elements.selectCountry.value;
    }
    e.preventDefault();
    console.log(country);
    
    const API_Call = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${API_Key}&format=json`);
    
    const data = await API_Call.json();
    this.setState({ tracks: data.tracks.track });  
    console.log(this.state.tracks);
  }
  render(){
  return (
    <div className="App">
      {/* <SongModal object={this.object}/> */}
      <header className="App-header">
      <h1 className = "App-title">TOP TRACKS IN INDIA</h1>
     </header>
     <CountryForm getMusic={this.getMusic} setObject={this.setObject}/>
      
     <PopularSongs tracks={this.state.tracks}/>
    </div>
  );
  }
  
  async componentDidMount() {
    var country = 'india';
    console.log(country);
    
    const API_Call = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${API_Key}&format=json`);
    
    const data = await API_Call.json();
    this.object = data;
    this.setState({ tracks: data.tracks.track });  
    console.log(this.state.tracks);
  }
}

export default App;
