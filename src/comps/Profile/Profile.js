import React, { Component } from 'react';
import { connect } from 'react-redux';
import Youtube from 'react-youtube'
import axios from 'axios'
import './Profile.css'
import './Profile_res.css'


import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

import mill_logo from '../../media/millstreet_words.pngf.jpg'
import phone_icon from '../../media/phone-icon.png'

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
    let w = window.innerWidth 
    let opts = {}
     if (w <= 379 ){ opts = { 
      height: '200',
      width: '250',
      playerVars: {
        autoplay:1 
       } 
     } } else {
         opts = {
          height: '390',
          width: '640',
          playerVars: {
            autoplay:1 
           }
         }
         
       }
    console.log(w)
    // const opts = { 
    //   height: '200',
    //   width: '270',
    //   height: '390',
    //   width: '640',
    //   playerVars: {
    //     autoplay:1 
    //    }
    // }
    // console.log(this.state.artist)
    return (
         <div className="Profile">

            <Header/>

            <div className='profile_div'>
                <h1>{this.state.artist.name }</h1>
                <p id='white_line2'></p> 
            </div>

            <div className='flex_container'>

                <div className='profile_container'>
                  <img src={this.state.artist.img} alt=''/>
                  <p>{this.state.artist.info}</p>
                  
                  <div className='youtube'>{this.state.artist && <Youtube 
                    videoId={this.state.artist.video.split('?v=')[1] }
                    opts={opts}
                  />}</div>

                </div>

                <div className='contactInfo_container'>
                    <img src={mill_logo} alt=''/>
                    <img id='phone' src={phone_icon} alt=''/>
                    <h1>CALL & BOOK TODAY!</h1>
                    <p id='white_line2'></p>
                    <h1>615-481-2216</h1>
                </div>

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