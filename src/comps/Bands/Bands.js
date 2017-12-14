import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios'
import './Bands.css'
import './Bands_res.css'

import { getArtist } from '../../ducks/reducer.js'


import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

class Bands extends Component {
  constructor(){
    super()
    this.state={
      adminInfo: undefined
    }
  }

  viewProfile( artistName ) {
    this.props.history.push(`/profile/${artistName}`)
  }

  viewEdit ( artistName) {
    this.props.history.push(`/edit/${artistName}`)
  }

  componentDidMount(){
    this.props.getArtist()

    axios.get('/auth/me')
      .then(res => {
        this.setState({
          adminInfo: res.data
        })
      })
  }

  

  render () {
    const addButton = (
      this.state.adminInfo ? 
        <Link to='/addBand' ><button>ADD ARTIST</button></Link> : null
    )

      const artistDiv = this.props.artist.map(( e, i, a ) => {
        return (
          <div key={i}>
          <p><a href='javascripte:' onClick={() => this.viewProfile(e.name)}>{e.name}</a></p>
            <img src={e.img} alt=''/>
              <div className='button_div'>
                {this.state.adminInfo ? 
                  <button key={i} onClick={() => this.viewEdit(e.name)}>Edit Profile</button> : null
              }
              </div>
          </div>
        )
      })

    return (
         <div className="bands">

            <Header/>

            <div className='band_div'>
                <h1>MILL STREET PRESENTS</h1>
                <p id='white_line2'></p> 
                {addButton}
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
