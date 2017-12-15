import React, { Component } from 'react';
import './App.css';
import './reset.css';
import { connect } from 'react-redux';
import {Route, HashRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition'


import Home from './comps/Home/Home.js'
import Bands from './comps/Bands/Bands.js'
import Contact from './comps/Contact/Contact.js'
import Profile from './comps/Profile/Profile.js'
import Edit from './comps/Edit/Edit.js'
import AddBand from './comps/AddBand/AddBand.js'


class App extends Component {
  render () {
    return (
      <HashRouter>
         <div className="App">

          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            
            <Route exact path='/' component={Home}/>
            <Route path='/bands' component={Bands}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/profile/:artistName' component={Profile}/>
            <Route path='/edit/:artistName' component={Edit}/>
            <Route path='/addBand' component={AddBand}/>
            
            
            
          </AnimatedSwitch>

        </div>
      </HashRouter>
    );
  }
}

function mapStateToProps( state ){
  return state
  
}

export default connect( mapStateToProps ) ( App );
