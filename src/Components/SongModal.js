import React, {Component} from 'react';
import './SongModal.css';

class SongModal extends Component {
    constructor(props) {
        super(props);
        // this.song = null;
        this.state = {
            song: null
        }
    }
    // render() {
    //     this.song = this.props.object[0];

        // return (
            // <div className="modal" ref="modal">
            //     <div className="modal-container" ref="modal-container">
            //     <img src={this.song.image[2]['#text']} alt={this.song.name} id={this.song.mbid} />
            //         <h4>{this.song.name}</h4>
                    
            //     </div>
            // </div>
        // );
    // }
    render() {
        if(this.state.song !== null) {
            let track = this.state.song.track;
            console.log(track);
            return (
                <div className="modal" ref="modal">
                <div className="modal-container" ref="modal-container">
                <img src={track.album.image['2']['#text']} alt={track.name} id={track.mbid} />
                <h4>{track.name}</h4>
                    <h5>Album : {track.album.title}</h5>
                    <h5>Artist : {track.artist.name}</h5>
                </div>  
            </div>
            );
        } else {
            return (
                <span>
                    <h1>Track not Found</h1>
                    <button >Close</button>
                </span>
            );
        }
    }

    async componentDidMount() {
        const song = this.props.object[0];
        const API_Key = "07a7ff8132195a3f6f1d53d85daff649";
        const url = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key="+API_Key+"&mbid="+song.mbid+"&format=json";
        const res = await fetch(url);
        const object = await res.json();
        console.log(object);
        this.setState({song: object});
    }
}

export default SongModal;