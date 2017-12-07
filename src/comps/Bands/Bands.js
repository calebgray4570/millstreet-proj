import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Bands.css'

import { getArtist } from '../../ducks/reducer.js'


import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

class Bands extends Component {


  viewProfile( artistName ) {
    this.props.history.push(`/profile/${artistName}`)
  }

  viewEdit ( artistName) {
    this.props.history.push(`/edit/${artistName}`)
  }

  componentDidMount(){
    this.props.getArtist()
  }

  render () {

      const artistDiv = this.props.artist.map(( e, i, a ) => {
        return (
          <div key={i}>
            <h1>{e.name}</h1>
            <p></p>
            <img src={e.img} alt=''/>
              <div className='button_div'>
                <button onClick={() => this.viewProfile(e.name)}>View Profile</button>
                <button onClick={() => this.viewEdit(e.name)}>Edit Profile</button>
              </div>

          </div>
        )
      })

    return (
         <div className="bands">

            <Header/>

            <div className='band_div'>
                <h1>BANDS</h1>
                <p id='white_line2'></p> 
                <Link to='/addBand' ><button>ADD ARTIST</button></Link>
            </div>

            <div className='band_container'>


                {artistDiv}

            </div>

            
           
          <Footer/>  
        
        </div>
    );
  }
}

function mapStateToProps( state ){
  return state
  
}

export default connect( mapStateToProps, { getArtist } ) ( Bands );
