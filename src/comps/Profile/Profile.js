import React, { Component } from 'react';
import { connect } from 'react-redux';
import Youtube from 'react-youtube'
import axios from 'axios'
import './Profile.css'


import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

import mill_logo from './millstreet_words.pngf.jpg'

class Profile extends Component {
  constructor( props){
    super( props )
    this.state ={
      artist: ''

    }
  }

  componentWillMount(){
    const artistURL = this.props.match.params.artistName
    
    axios.get(`/getArtist/${ artistURL }`)
      .then( artist => {  
        this.setState({
          artist: artist.data[0]
        })
      })
  }
  
  render () {

    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay:1 
       }
    }
    console.log(this.state.artist)
    return (
         <div className="Profile">

            <Header/>

            <div className='profile_div'>
                <h1>{this.state.artist.name }</h1>
                <p id='white_line2'></p> 
            </div>


            <div className='profile_container'>
              <img src={this.state.artist.img} alt=''/>
              <p>{this.state.artist.info}</p>
              
              {this.state.artist && <Youtube
                videoId={this.state.artist.video.split('?v=')[1] }
                opts={opts}
              />}

            </div>

            <div className='contactInfo_container'>
                <img src={mill_logo} alt=''/>
                <h1>CALL & BOOK TODAY!</h1>
                <p id='white_line2'></p>
                <h1>###-###-####</h1>
            </div>
            

            
            
           
            <Footer/>  
        
        </div>
     );
  }
}

function mapStateToProps( state ){
  return state
}

export default connect( mapStateToProps ) ( Profile );