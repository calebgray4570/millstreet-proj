import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Route, HashRouter,Switch} from 'react-router-dom';
import './Contact.css'

import TextField from 'material-ui/TextField'

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

// import bands from './comps/bands/bands.js'


// import crowd_vid from './media/concert_video.mp4';
// import mill_logo from './media/millstreet_logo.png';
// import hamburger from './media/hamburger.png';


class Contact extends Component {
  render () {
    return (
         <div className="contact">
            <Header/>

            <div className='contact_div'>
              <h1>CONTACT US</h1>
              <p id='white_line2'></p>
            </div> 

            <div className='contact_container'>

              <h1>NAME</h1>
              <TextField
              hintText='NAME'/>
              
              <h1>EMAIL</h1>
              <TextField
              fullWidth={false}/>

              <h1>PHONE</h1>
              <TextField/>

              <h1>MESSAGE</h1>
              <TextField/>


            </div>





        

            
            <Footer/>
        </div>
    );
  }
}

function mapStateToProps( state ){
  return{
    state
  }
}

export default connect( mapStateToProps ) ( Contact );