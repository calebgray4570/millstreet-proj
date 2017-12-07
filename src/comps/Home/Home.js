import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {Route, HashRouter,Switch} from 'react-router-dom';
import './Home.css'


import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'

import {getFeat} from '../../ducks/reducer.js'


class Home extends Component {

  componentDidMount() {
    this.props.getFeat()
  }

  render () {
      const featDiv = this.props.featData.map( (e,i,a) => {
        return (
          <div key ={i}>
            <h1>{e.artist_name}</h1>
            <p></p>
            <img src={e.artist_img} alt=""/>
          </div>
        )
      })

    return (
         <div className="App">
            <Header/>

            <div className='about-div'>
                <h1>WHO WE ARE</h1>
                <p id='white_line'>
                </p>             
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu leo volutpat, sagittis nulla a, vehicula diam. Donec neque massa, ullamcorper eget erat vel, commodo varius turpis. Vestibulum nec odio hendrerit, suscipit diam eu, bibendum leo. Praesent vehicula mattis erat et tincidunt. Pellentesque fringilla porttitor orci vel pellentesque. Nullam nibh orci, vestibulum at mattis ut, efficitur vitae lorem. Fusce mollis sollicitudin elit, id tincidunt ante tempus id. Maecenas aliquet pellentesque consectetur. Duis ut purus eu ex suscipit dapibus. Nam eget rhoncus nisl, et dictum sem. Donec at laoreet lectus, at molestie augue. Integer commodo dui sed iaculis sodales. Proin non vehicula magna.
                Nulla vitae convallis ligula. Praesent et suscipit risus. Pellentesque lacinia massa vel metus viverra consequat. Praesent et scelerisque nibh. Aliquam odio eros, tempor et est eu, sollicitudin elementum velit. Ut et interdum libero, sed sollicitudin urna. Proin eu augue a augue ullamcorper accumsan. Mauris lacus sapien, porttitor sed est molestie, laoreet posuere leo. Pellentesque vulputate tortor ac libero aliquet, eget placerat odio vulputate. Etiam sollicitudin turpis eget felis fermentum, nec efficitur orci scelerisque. Etiam at suscipit dui, at mollis lorem. Donec lectus purus, tempus a turpis in, lobortis lobortis lectus. In molestie tristique arcu. Sed eu nulla ante.
                </p>
            </div>

            <div className='top_band_div'>
              <h1>FEATURED ARTIST</h1>
              <p id='white_line2'>
              </p>  
              <div className='band_box'>

                {featDiv}

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

export default connect( mapStateToProps, {getFeat} ) ( Home );